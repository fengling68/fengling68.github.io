/* 选股面板 · 实时数据加载
 * 数据全部页面实时获取，且只走东方财富一路（约 30~66 次请求，较旧版 90+ 大幅减少）：
 *  - 全市场代码/名称/价格/涨跌幅/成交额/换手/总市值/流通市值/PE(TTM)/市净率/股息率(TTM)
 *    全部由东财 clist 分页一次取齐（f133=股息率TTM，f115=市盈率TTM，注意二者易混淆）；
 *  - 生肖/国企/行业：静态分类参照（static-data.js，非行情快照）；
 *  - 股东户数：点击个股时实时拉取东方财富 F10。
 * 选股逻辑（生肖/高分红/央地国资/国企改革）在浏览器内按当日行情实时重算。 */
(function () {
  var ZD = window.ZODIAC_DATA || [];
  var ZNAMES = window.ZODIAC_NAMES || [];
  var SOE = window.SOE_MEM || {};
  var IND = window.IND_MAP || {};

  // ---------- 工具 ----------
  function prefix(c) {
    if (/^(sh|sz|bj)/.test(c)) return c;
    if (/^(43|83|87|92)/.test(c)) return 'bj' + c;   // 北交所
    if (/^[6]/.test(c)) return 'sh' + c;
    if (/^[03]/.test(c)) return 'sz' + c;
    if (/^[84]/.test(c)) return 'bj' + c;
    return c;
  }
  function num(v) { return (v === '' || v == null || v === '-' || isNaN(Number(v))) ? null : Number(v); }
  function cleanName(n) {
    return String(n == null ? '' : n).replace(/ /g, '').replace(/\*/g, '')
      .replace(/ST/g, '').replace(/st/g, '').replace(/-/g, '');
  }

  // ---------- JSONP ----------
  function jsonp(url, cbName, timeoutMs) {
    cbName = cbName || 'cb';
    return new Promise(function (resolve, reject) {
      var cb = '__cb_' + Math.random().toString(36).slice(2);
      var s = document.createElement('script');
      s.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + cbName + '=' + cb + '&_=' + Date.now();
      var timer = setTimeout(function () { cleanup(); reject(new Error('timeout')); }, timeoutMs || 12000);
      window[cb] = function (data) { cleanup(); resolve(data); };
      s.onerror = function () { cleanup(); reject(new Error('neterr')); };
      function cleanup() {
        clearTimeout(timer);
        try { delete window[cb]; } catch (e) {}
        if (s.parentNode) s.parentNode.removeChild(s);
      }
      document.body.appendChild(s);
    });
  }

  // ---------- 1) clist：全市场代码 + 名称 + 股息率 ----------
  /* 服务端可能限流/每页条数不定，做三层自适应：
   * ① 主机轮换：push2 → 1.push2 → push2delay（镜像）；
   * ② 每页条数自适应：先探测 pz=200 能返回多少，≥150 用 200，否则 100；
   * ③ 节流 + 失败重试：3 路并发、页间 50ms 间隔、失败页重试一次；
   * 高频请求会触发东财访问限制，宁可慢一点也不能打满。 */
  var UT = 'bd1d9ddb04089700cf9c27f6f7426281';   // 东财公开 web 令牌
  var HOSTS = ['push2.eastmoney.com', '1.push2.eastmoney.com', 'push2delay.eastmoney.com'];
  var FS_BJ = 'm:0+t:6,m:0+t:80,m:1+t:2,m:1+t:23,m:0+t:81+s:2048';   // 含北交所
  var FS_STD = 'm:0+t:6,m:0+t:80,m:1+t:2,m:1+t:23';                  // 兜底

  function clistUrl(host, pz, fs, pn) {
    return 'https://' + host + '/api/qt/clist/get?ut=' + UT +
      '&fs=' + fs + '&fields=f12,f14,f2,f3,f6,f8,f20,f21,f23,f115,f133&pn=' + pn +
      '&pz=' + pz + '&po=1&np=1&fltt=2&invt=2';
  }
  function probe(host, fs) {
    return jsonp(clistUrl(host, 200, fs, 1), 'cb', 4000).then(function (d) {
      var diff = d && d.data && d.data.diff;
      return diff ? diff.length : 0;
    }, function () { return 0; });
  }
  function fetchAllOn(host, pz, fs) {
    var out = {};
    var totalPages = Math.min(70, Math.ceil(6500 / pz));
    var queue = [];
    for (var p = 1; p <= totalPages; p++) queue.push(p);  /* 探测页数据被丢弃，pn=1 也要正式取一遍 */
    var retried = {}, nextIdx = 0, got = 0, fails = 0, active = 0, finished = false;
    function page(pn) {
      return jsonp(clistUrl(host, pz, fs, pn), 'cb', 6000).then(function (d) {
        var diff = d && d.data && d.data.diff;
        /* 按服务端返回的 total 裁剪分页队列，避免发出空页请求 */
        var tot = d && d.data && d.data.total;
        if (tot > 0) {
          var need = Math.ceil(tot / pz);
          if (need < totalPages) {
            totalPages = need;
            queue = queue.filter(function (q) { return q <= need; });
          }
        }
        if (!diff || !diff.length) return 0;
        diff.forEach(function (x) {
          var code = prefix(String(x.f12));
          /* 字段口径（实测验证）：
           * f115 = 市盈率TTM（负数=亏损），f133 = 股息率TTM（东财口径，特殊分红会阶段性抬高）。
           * 旧版误把 f115 当股息率，导致"股息率"列全是 20+ 的 PE 值。 */
          var dv = num(x.f133);
          if (dv !== null && dv >= 50) dv = null;   // 防御：股息率不可能 ≥50%
          out[code] = {
            name: x.f14 != null ? String(x.f14).trim() : code,
            p: num(x.f2), chg: num(x.f3),
            pe: num(x.f115), pb: num(x.f23),
            mv: num(x.f20) != null ? +(num(x.f20) / 1e8).toFixed(1) : null,   // 元 -> 亿
            cv: num(x.f21) != null ? +(num(x.f21) / 1e8).toFixed(1) : null,
            amt: num(x.f6) != null ? +(num(x.f6) / 1e8).toFixed(2) : null,
            tr: num(x.f8),
            dv: dv
          };
        });
        return diff.length;
      }, function () { return -1; });
    }
    function show() {
      setStatus('拉取全市场实时行情… ' + got + ' 只' + (fails ? '（' + fails + ' 页重试中）' : ''));
    }
    function launch(pn) {
      active++;
      page(pn).then(function (n) {
        active--;
        if (n < 0) {
          fails++;
          if (!retried[pn]) { retried[pn] = 1; queue.push(pn); }
        } else { got += n; }
        show();
        setTimeout(pump, 50);
      });
    }
    function pump() {
      if (finished) return;
      /* 前 3 个请求全部失败视为该主机不可达，快速换下一个 */
      if (fails >= 3 && got === 0) { finished = true; failResolve(); return; }
      while (active < 3 && nextIdx < queue.length) launch(queue[nextIdx++]);
      if (active === 0 && nextIdx >= queue.length) { finished = true; resolve(out); }
    }
    var resolve, failResolve;
    var p = new Promise(function (res, rej) { resolve = res; failResolve = rej; });
    show();
    pump();
    return p;
  }
  function probeChain(host) {
    /* 用探测返回的实际条数作为 pz（服务端上限可能是 100 或 200），上限钳到 200 */
    return probe(host, FS_BJ).then(function (n) {
      if (n >= 50) return { host: host, pz: Math.min(200, n), fs: FS_BJ };
      return probe(host, FS_STD).then(function (m) {
        if (m >= 50) return { host: host, pz: Math.min(200, m), fs: FS_STD };
        throw new Error('probe fail');
      });
    });
  }
  function seqTry(i) {  /* 顺序兜底：逐台探测 + 取数 */
    var host = HOSTS[i];
    if (!host) return Promise.reject(new Error('所有东财主机均不可达'));
    return probeChain(host).then(function (st) { return fetchAllOn(st.host, st.pz, st.fs); })
      .catch(function () { return seqTry(i + 1); });
  }
  function fetchClist() {
    setStatus('连接东方财富行情接口…');
    /* 三台主机并行探测，谁先可用谁上；全部失败或取数失败再顺序兜底 */
    return new Promise(function (resolve, reject) {
      var pending = HOSTS.length, settled = false;
      HOSTS.forEach(function (host) {
        probeChain(host).then(function (st) {
          if (!settled) { settled = true; resolve(st); }
        }, function () {
          if (--pending === 0 && !settled) reject(new Error('所有东财主机均不可达'));
        });
      });
    }).then(function (st) { return fetchAllOn(st.host, st.pz, st.fs); })
      .catch(function () { return seqTry(0); });
  }

  // ---------- 2) 选股逻辑（端口自 build_pick.py） ----------
  function zodiacMatch(name) {
    var clean = cleanName(name);
    var hits = [];
    for (var idx = 0; idx < ZD.length; idx++) {
      var z = ZD[idx], seen = {};
      if (z.z && clean.indexOf(z.z) >= 0) seen['字'] = z.z;
      for (var t = 0; t < (z.topics || []).length; t++)
        if (clean.indexOf(z.topics[t]) >= 0) seen['题'] = z.topics[t];
      for (var h = 0; h < (z.homo || []).length; h++)
        if (clean.indexOf(z.homo[h]) >= 0) seen['音'] = z.homo[h];
      var order = { '字': 0, '音': 1, '题': 2 };
      Object.keys(seen).sort(function (a, b) { return order[a] - order[b]; })
        .forEach(function (tp) { hits.push([idx, tp, seen[tp]]); });
    }
    return hits;
  }

  function buildSelection(Q) {
    var codes = Object.keys(Q);
    // 生肖
    var zHit = {};
    codes.forEach(function (c) {
      var h = zodiacMatch(Q[c].name);
      if (h.length) zHit[c] = h;
    });
    var allZodiac = Object.keys(zHit).sort(function (a, b) { return (Q[b].mv || 0) - (Q[a].mv || 0); });
    var zodiacSubs = ZD.map(function (z, i) {
      var cs = allZodiac.filter(function (c) { return zHit[c] && zHit[c][0][0] === i; });
      cs.sort(function (a, b) { return (Q[b].mv || 0) - (Q[a].mv || 0); });
      var byT = { '字': [], '音': [], '题': [] };
      cs.forEach(function (c) {
        zHit[c].forEach(function (hh) {
          if (hh[0] === i && byT[hh[1]]) byT[hh[1]].push(c);
        });
      });
      return { id: 'z' + i, name: z.z, codes: cs, extra: byT };
    });
    // 默认选中第一个生肖“鼠”（index 0）；render.js 的 firstNonEmpty 优先取 def
    var zDef = 0;

    // 高分红
    var byDiv = codes.filter(function (c) { return (Q[c].dv || 0) > 0; })
      .sort(function (a, b) { return (Q[b].dv || 0) - (Q[a].dv || 0); });
    var bands = [[8, 999, 'd8', '≥ 8%'], [7, 8, 'd7', '7 ~ 8%'], [6, 7, 'd6', '6 ~ 7%'],
      [5, 6, 'd5', '5 ~ 6%'], [4, 5, 'd4', '4 ~ 5%'], [3, 4, 'd3', '3 ~ 4%'],
      [2, 3, 'd2', '2 ~ 3%']];
    var divSubs = bands.map(function (b) {
      return { id: b[2], name: b[3], codes: byDiv.filter(function (c) {
        var v = Q[c].dv || 0; return v >= b[0] && v < b[1]; }) };
    });
    var allDiv = byDiv.filter(function (c) { return (Q[c].dv || 0) >= 2; });

    // 国企
    function uni(names) {
      var s = {};
      names.forEach(function (n) { (SOE[n] || []).forEach(function (c) { if (Q[c]) s[c] = 1; }); });
      return Object.keys(s).sort(function (a, b) { return (Q[b].mv || 0) - (Q[a].mv || 0); });
    }
    var CENTRAL = ['中字头', '央企央资', '大央企重组', '军工央企'];
    var LOCAL = ['上海国资改革', '深圳国资改革', '河南国企改革', '湖北国企改革', '陕西国企改革'];
    var cent = uni(CENTRAL), loc = uni(LOCAL);
    var allSoe = Object.keys({}).concat(cent, loc)
      .filter(function (v, i, a) { return a.indexOf(v) === i; })
      .sort(function (a, b) { return (Q[b].mv || 0) - (Q[a].mv || 0); });
    var soeMap = {};
    function addLabel(c, lab) { (soeMap[c] = soeMap[c] || []).push(lab); }
    allSoe.forEach(function (c) {
      CENTRAL.concat(LOCAL).forEach(function (n) {
        if (SOE[n] && SOE[n].indexOf(c) >= 0)
          addLabel(c, n.replace('国资改革', '国资').replace('国企改革', '国企'));
      });
    });
    var soeSubs = [
      { id: 's_all', name: '央地国资', codes: allSoe },
      { id: 's_cent', name: '央企系', codes: cent }
    ];
    CENTRAL.forEach(function (n) {
      soeSubs.push({ id: 's_' + n, name: n, codes: uni([n]) });
    });
    soeSubs.push({ id: 's_loc', name: '地方国资', codes: loc });
    LOCAL.forEach(function (n) {
      soeSubs.push({ id: 's_' + n, name: n.replace('国资改革', '国资').replace('国企改革', '国企'), codes: uni([n]) });
    });

    // 国企改革
    var refAll = uni(['国企改革']);
    var refCent = refAll.filter(function (c) { return cent.indexOf(c) >= 0; });
    var refLoc = refAll.filter(function (c) { return loc.indexOf(c) >= 0; });
    var refRest = refAll.filter(function (c) { return cent.indexOf(c) < 0 && loc.indexOf(c) < 0; });
    refAll.forEach(function (c) { if ((soeMap[c] || []).indexOf('国企改革') < 0) addLabel(c, '国企改革'); });
    uni(['国资云概念']).forEach(function (c) { if ((soeMap[c] || []).indexOf('国资云') < 0) addLabel(c, '国资云'); });
    var refSubs = [
      { id: 'r_cent', name: '央企系改革', codes: refCent },
      { id: 'r_loc', name: '地方国资改革', codes: refLoc }
    ];
    ['中字头', '大央企重组', '军工央企'].forEach(function (n) {
      refSubs.push({ id: 'r_' + n, name: n + '·改革', codes: uni([n]).filter(function (c) { return refAll.indexOf(c) >= 0; }) });
    });
    refSubs.push({ id: 'r_cloud', name: '国资云·改革', codes: uni(['国资云概念']).filter(function (c) { return refAll.indexOf(c) >= 0; }) });
    refSubs.push({ id: 'r_other', name: '其他改革', codes: refRest });

    // 汇总个股 + pack
    var need = {};
    allZodiac.concat(allDiv, allSoe, refAll).forEach(function (c) { need[c] = 1; });
    soeSubs.concat(refSubs, zodiacSubs, divSubs).forEach(function (sub) {
      sub.codes.forEach(function (c) { need[c] = 1; });
    });
    var needCodes = Object.keys(need);

    function pack(c) {
      var s = Q[c], ind = IND[c] || ['', ''];
      /* 腾讯 a[44]/a[45] 市值单位已是「亿」，无需换算 */
      return [c, s.name,
        s.p, s.chg,
        s.mv != null ? +s.mv.toFixed(1) : null,
        s.cv != null ? +s.cv.toFixed(1) : null,
        s.pe, s.pb, s.dv, s.tr,
        s.amt != null ? +s.amt.toFixed(2) : null,
        null, null, null, null,
        ind[0], ind[1]];
    }
    var stocks = {};
    needCodes.forEach(function (c) { stocks[c] = pack(c); });
    var meta = {
      z: {}, g: {}
    };
    needCodes.forEach(function (c) {
      if (zHit[c]) meta.z[c] = zHit[c];
      if (soeMap[c]) meta.g[c] = soeMap[c];
    });
    var tabs = [
      { id: 'zodiac', name: '生肖', codes: allZodiac, def: zDef,
        filter: { key: 'z', label: '命中方式', options: [['字', '同字'], ['音', '同音'], ['题', '生肖主题']] },
        subs: zodiacSubs },
      { id: 'dividend', name: '高分红', def: 0, codes: allDiv, sort: 'dv',
        subs: divSubs.map(function (s) { return { id: s.id, name: s.name, codes: s.codes }; }) },
      { id: 'soe', name: '央地国资', codes: allSoe, tag: 1, def: 0,
        subs: soeSubs.map(function (s) { return { id: s.id, name: s.name, codes: s.codes }; }) },
      { id: 'reform', name: '国企改革', codes: refAll, tag: 1, def: 0,
        subs: refSubs.map(function (s) { return { id: s.id, name: s.name, codes: s.codes }; }) }
    ];
    return { stocks: stocks, meta: meta, tabs: tabs,
             counts: { z: allZodiac.length, d: allDiv.length, soe: allSoe.length, ref: refAll.length } };
  }

  // ---------- 4) 股东户数实时抽屉 ----------
  function showHolder(code, name) {
    var drawer = document.getElementById('holderDrawer');
    if (!drawer) return;
    drawer.classList.add('on');
    drawer.innerHTML = '<div class="dh"><b>股东户数（实时 · 东方财富 F10）</b>' +
      '<span class="dx" onclick="window.__closeHolder()">×</span></div>' +
      '<div class="db">' + esc(code) + ' ' + esc(name || '') + '</div>' +
      '<div class="dload">正在拉取最新一期股东户数…</div>';
    var u = 'https://datacenter.eastmoney.com/securities/api/data/v1/get' +
      '?reportName=RPT_F10_EH_HOLDERNUM&columns=ALL&filter=(SECURITY_CODE%3D"' +
      code.replace(/^[a-z]+/, '') + '")&pageSize=2&sortColumns=END_DATE&sortTypes=-1&source=HSF10&client=PC';
    jsonp(u, 'callback').then(function (d) {
      var arr = d && d.result && d.result.data;
      if (!arr || !arr.length) {
        drawer.querySelector('.dload').textContent = '接口未返回数据';
        return;
      }
      var r = arr[0];
      var num = r.HOLDER_TOTAL_NUM, ratio = r.TOTAL_NUM_RATIO, avg = r.AVG_FREE_SHARES;
      var html = '<div class="dgrid">' +
        row('报告期', (r.END_DATE || '').slice(0, 10)) +
        row('总股东户数', num != null ? Number(num).toLocaleString('en-US') + ' 户' : '—') +
        row('户数环比', ratio != null ? '<span class="' + (ratio > 0 ? 'up' : 'down') + '">' + (ratio > 0 ? '+' : '') + Number(ratio).toFixed(2) + '%</span>' : '—') +
        row('户均持股', avg != null ? Number(avg).toLocaleString('en-US') + ' 股' : '—') +
        row('户均市值', r.AVG_HOLD_AMT != null ? '¥' + Number(r.AVG_HOLD_AMT).toLocaleString('en-US') : '—') +
        row('集中度', r.HOLD_FOCUS || '—') +
        '</div><div class="dnote">数据来源：东方财富 F10，最新一期定期报告披露值；股东户数按报告期更新，非实时逐笔。</div>';
      drawer.querySelector('.dload').outerHTML = html;
    }, function () {
      var el = drawer.querySelector('.dload'); if (el) el.textContent = '接口未返回（可能被限流，稍后重试）';
    });
  }
  function row(k, v) { return '<div class="rk">' + k + '</div><div class="rv">' + v + '</div>'; }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>]/g, function (c) {
      return c === '&' ? '&amp;' : (c === '<' ? '&lt;' : '&gt;'); });
  }
  window.__pickRow = showHolder;
  window.__closeHolder = function () {
    var d = document.getElementById('holderDrawer'); if (d) d.classList.remove('on');
  };

  // ---------- 主流程 ----------
  function setStatus(t) { var el = document.getElementById('liveStatus'); if (el) el.textContent = t; }
  setStatus('正在获取全市场实时数据…');
  fetchClist().then(function (Q) {
    var n = Object.keys(Q).length;
    if (!n) {
      setStatus('全市场数据获取失败');
      var e = document.getElementById('empty');
      if (e) { e.style.display = ''; e.textContent = '东方财富行情接口不可达（可能被网络环境或访问限制拦截）。请稍后刷新重试，或更换网络后重试。'; }
      return;
    }
    var sel;
    try { sel = buildSelection(Q); }
    catch (err) {
      setStatus('选股计算异常：' + (err && err.message ? err.message : err));
      return;
    }
    var today = new Date();
    var ds = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    var D = {
      date: ds, universe: Object.keys(Q).length, count: Object.keys(sel.stocks).length,
      zodiacNames: ZNAMES, tabs: sel.tabs, stocks: sel.stocks, meta: sel.meta
    };
    window.PICK_DATA = D;
    var e2 = document.getElementById('empty');
    if (e2) e2.style.display = 'none';
    window.__renderPick(D);
    setStatus('实时选股完成 · 全市场 ' + D.universe + ' 只 · ' + D.count + ' 只入选 · 行情/股息率为东财实时值');
  }).catch(function (e) {
    setStatus('加载异常：' + (e && e.message ? e.message : e));
  });
})();

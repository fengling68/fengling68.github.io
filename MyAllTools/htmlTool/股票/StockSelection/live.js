/* 选股面板 · 实时数据加载（v2 · 候选集优化）
 * 核心思路：东财 clist 单页硬上限约 100 条，全市场 ~5500 只若整页扫描必然 30~55+ 次请求。
 * 故不再每次加载都扫描全市场，而是「先确定候选代码集，再只拉候选股的实时行情」：
 *   - 生肖：名称命中，需全市场名称 → 做一次名称扫描并缓存候选集（名称极少变动，缓存 7 天）；
 *          也可用离线预生成 members.js（window.PRECOMP_MEMBERS）彻底免扫描。
 *   - 央地国资 / 国企改革：成员来自静态 SOE_MEM，0 请求。
 *   - 高分红：由 buildSelection 按当日实时 f133 重算，0 额外请求。
 *   - 实时行情：只对「生肖候选 ∪ 国资候选 ∪ 高分红候选」取并集，经 ulist.np 按 secids 批量拉取
 *     （每批 ~400 只，约 3~6 次请求，行情为东财实时值）。
 * 因此：首次加载（无缓存且未预生成）约 30~55 次（一次性名称扫描），之后每次加载仅 ulist.np 约 3~6 次；
 *       若已用 gen-stock-members.mjs 预生成 members.js，则每次加载都只有 ulist.np 的 3~6 次。
 * 新增筛选 tab 不会增加请求：所有 tab 均从这一次候选集 + 实时行情中浏览器内重算。 */
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
  /* ulist.np 的 secids 需「市场.代码」数字格式（沪=1 / 深=0 / 北=0），而非字母前缀 sh600000。
     例：sh600000→1.600000，sz000001→0.000001，bj920122→0.920122 */
  function secid(c) {
    c = String(c == null ? '' : c);
    if (c.indexOf('.') >= 0) return c;                 // 已是 market.code
    if (/^(sh|sz|bj)/.test(c)) c = c.slice(2);         // 去字母前缀
    if (/^92/.test(c)) return '0.' + c;                // 北交所 92 开头（须先于 9 判定，否则会误归沪市）
    if (/^[569]/.test(c)) return '1.' + c;             // 沪市（6/5/9 开头：9 含 900 B股、689 科创板等）
    return '0.' + c;                                   // 深市 / 北交所（0/3/2/4/8 等）
  }
  function num(v) { return (v === '' || v == null || v === '-' || isNaN(Number(v))) ? null : Number(v); }
  function cleanName(n) {
    return String(n == null ? '' : n).replace(/ /g, '').replace(/\*/g, '')
      .replace(/ST/g, '').replace(/st/g, '').replace(/-/g, '');
  }
  function uniq(arr) {
    var s = {}, o = [];
    for (var i = 0; i < arr.length; i++) if (!s[arr[i]]) { s[arr[i]] = 1; o.push(arr[i]); }
    return o;
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

  // ---------- 常量 ----------
  var UT = 'bd1d9ddb04089700cf9c27f6f7426281';   // 东财公开 web 令牌
  var HOSTS = ['push2.eastmoney.com', '1.push2.eastmoney.com', 'push2delay.eastmoney.com'];
  var FS_BJ = 'm:0+t:6,m:0+t:80,m:1+t:2,m:1+t:23,m:0+t:81+s:2048';   // 含北交所
  var FS_STD = 'm:0+t:6,m:0+t:80,m:1+t:2,m:1+t:23';                  // 兜底
  var FIELDS = 'f12,f14,f2,f3,f6,f8,f20,f21,f23,f115,f133';
  var BATCH = 300;   // ulist.np 每批 secids 数量（候选并集约 1500~1900 只 → 5~7 次请求，稳 <10）

  // ---------- URL 构造 ----------
  function clistUrl(host, pz, fs, pn) {
    return 'https://' + host + '/api/qt/clist/get?ut=' + UT +
      '&fs=' + fs + '&fields=' + FIELDS + '&pn=' + pn +
      '&pz=' + pz + '&po=1&np=1&fltt=2&invt=2';
  }
  function ulistUrl(host, secids) {
    return 'https://' + host + '/api/qt/ulist.np/get?ut=' + UT +
      '&fields=' + FIELDS + '&secids=' + secids + '&fltt=2&invt=2';
  }

  /* 探测单页实际能返回多少条（服务端上限可能 100 / 200），并据此确定 pz */
  function probePz(host, fs) {
    return jsonp(clistUrl(host, 1000, fs, 1), 'cb', 5000).then(function (d) {
      var diff = d && d.data && d.data.diff;
      return diff ? diff.length : 0;
    }, function () { return 0; });
  }

  /* 用一台主机顺序取数（失败换下一台）；pz 由探测结果决定 */
  function fetchOnHost(host, pz, fs, onPage, onProgress) {
    var out = {};
    var totalPages = Math.min(80, Math.ceil(7000 / pz));
    var queue = [];
    for (var p = 1; p <= totalPages; p++) queue.push(p);
    var retried = {}, nextIdx = 0, got = 0, fails = 0, active = 0, finished = false;
    function page(pn) {
      return jsonp(clistUrl(host, pz, fs, pn), 'cb', 6000).then(function (d) {
        var diff = d && d.data && d.data.diff;
        var tot = d && d.data && d.data.total;
        if (tot > 0) {
          var need = Math.ceil(tot / pz);
          if (need < totalPages) {
            totalPages = need;
            queue = queue.filter(function (q) { return q <= need; });
          }
        }
        if (!diff || !diff.length) return 0;
        diff.forEach(function (x) { onPage(x, out); });
        return diff.length;
      }, function () { return -1; });
    }
    return new Promise(function (resolve) {
      function show() { if (onProgress) onProgress(got, fails); }
      function launch(pn) {
        active++;
        page(pn).then(function (n) {
          active--;
          if (n < 0) {
            fails++;
            if (!retried[pn]) { retried[pn] = 1; queue.push(pn); }
          } else { got += n; }
          show();
          setTimeout(pump, 40);
        });
      }
      function pump() {
        if (finished) return;
        if (fails >= 3 && got === 0) { finished = true; resolve(out); return; }
        while (active < 4 && nextIdx < queue.length) launch(queue[nextIdx++]);
        if (active === 0 && nextIdx >= queue.length) { finished = true; resolve(out); }
      }
      show();
      pump();
    });
  }

  /* 顺序探测 + 取数（多主机兜底） */
  function scanClist(fs, onPage, onProgress) {
    function tryHost(i) {
      if (i >= HOSTS.length) return Promise.reject(new Error('所有东财主机均不可达'));
      var host = HOSTS[i];
      return probePz(host, fs).then(function (n) {
        if (n < 20) throw new Error('probe empty');
        var pz = n;   // 用服务端实际返回条数作为单页上限
        return fetchOnHost(host, pz, fs, onPage, onProgress);
      }).catch(function () { return tryHost(i + 1); });
    }
    // 三台并行探测，谁先可用谁上
    return new Promise(function (resolve, reject) {
      var pending = HOSTS.length, settled = false;
      HOSTS.forEach(function (host) {
        probePz(host, fs).then(function (n) {
          if (settled) return;
          if (n < 20) { if (--pending === 0 && !settled) reject(new Error('所有东财主机均不可达')); return; }
          settled = true;
          resolve(fetchOnHost(host, n, fs, onPage, onProgress));
        }, function () {
          if (--pending === 0 && !settled) reject(new Error('所有东财主机均不可达'));
        });
      });
    });
  }

  // ---------- 候选集：名称扫描（一次性，缓存） ----------
  var LS_KEY = 'ss_sel_members_v2';
  var CACHE_TTL = 7 * 24 * 3600 * 1000;   // 名称/生肖成员 7 天内稳定

  function loadMembersCache() {
    try {
      var raw = localStorage.getItem(LS_KEY);
      if (!raw) return null;
      var m = JSON.parse(raw);
      if (!m || !m.zodiacCodes || (Date.now() - (m.ts || 0) > CACHE_TTL)) return null;
      return m;
    } catch (e) { return null; }
  }
  function saveMembersCache(m) {
    try { m.ts = Date.now(); localStorage.setItem(LS_KEY, JSON.stringify(m)); } catch (e) {}
  }

  function precompMembers() {
    // 由 scripts/gen-stock-members.mjs 离线生成的 members.js 提供，可彻底免去名称扫描
    var p = window.PRECOMP_MEMBERS;
    if (!p || !p.zodiacCodes) return null;
    return { zodiacCodes: p.zodiacCodes, divCodes: p.divCodes || [], soeUnion: p.soeUnion || null, precomp: true };
  }

  function soeUnion() {
    var s = {};
    Object.keys(SOE).forEach(function (k) {
      (SOE[k] || []).forEach(function (c) { s[c] = 1; });
    });
    return Object.keys(s);
  }

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

  /* 全市场名称 + 股息率 一次性扫描：产出 zodiacCodes / divCodes */
  function scanMembers() {
    var zset = {}, dset = {};
    setStatus('扫描全市场名称 / 股息率（一次性，将缓存）…');
    return scanClist(FS_BJ, function (x, out) {
      var code = prefix(String(x.f12));
      var name = x.f14 != null ? String(x.f14).trim() : '';
      var hits = zodiacMatch(name);
      if (hits.length) zset[code] = 1;
      var dv = num(x.f133);
      if (dv !== null && dv >= 2 && dv < 50) dset[code] = 1;   // 高分红候选（≥2%，防御 ≥50%）
    }, function (got, fails) {
      setStatus('扫描全市场… ' + got + ' 只' + (fails ? '（' + fails + ' 页重试中）' : ''));
    }).then(function () {
      return { zodiacCodes: Object.keys(zset), divCodes: Object.keys(dset) };
    });
  }

  // ---------- 实时行情：ulist.np 批量拉取候选集 ----------
  function fetchLiveQuotes(codes) {
    setStatus('拉取入选个股实时行情… ' + codes.length + ' 只');
    var out = {};
    var chunks = [];
    for (var i = 0; i < codes.length; i += BATCH) chunks.push(codes.slice(i, i + BATCH));
    var done = 0;
    function tryHostList(ci, hi) {
      if (hi >= HOSTS.length) return Promise.reject(new Error('ulist 主机不可达'));
      var host = HOSTS[hi];
      var secids = chunks[ci].map(secid).join(',');
      return jsonp(ulistUrl(host, secids), 'cb', 7000).then(function (d) {
        var diff = d && d.data && d.data.diff;
        if (!diff || !Array.isArray(diff)) {
          // 请求成功但无数据：多为 secids 格式问题或该批无有效标的，告警以便排查
          console.warn('[StockSelection] ulist.np 空响应 host=' + host + ' 样本secids=' + secids.slice(0, 80));
          return;
        }
        diff.forEach(function (x) {
          var code = prefix(String(x.f12));
          var dv = num(x.f133);
          if (dv !== null && dv >= 50) dv = null;
          out[code] = {
            name: x.f14 != null ? String(x.f14).trim() : code,
            p: num(x.f2), chg: num(x.f3),
            pe: num(x.f115), pb: num(x.f23),
            mv: num(x.f20) != null ? +(num(x.f20) / 1e8).toFixed(1) : null,
            cv: num(x.f21) != null ? +(num(x.f21) / 1e8).toFixed(1) : null,
            amt: num(x.f6) != null ? +(num(x.f6) / 1e8).toFixed(2) : null,
            tr: num(x.f8),
            dv: dv
          };
        });
      }, function () { throw new Error('neterr'); });
    }
    function runChunk(ci) {
      if (ci >= chunks.length) return Promise.resolve();
      var hi = 0;
      function attempt() {
        return tryHostList(ci, hi).catch(function () {
          hi++;
          if (hi >= HOSTS.length) return Promise.reject(new Error('ulist 主机不可达'));
          return attempt();
        });
      }
      return attempt().then(function () {
        done++;
        setStatus('拉取入选个股实时行情… ' + done + '/' + chunks.length + ' 批');
        return runChunk(ci + 1);
      });
    }
    return runChunk(0).then(function () { return out; });
  }

  // ---------- 选股逻辑（端口自 build_pick.py） ----------
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
    var meta = { z: {}, g: {} };
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
      return c === '&' ? '&amp;' : (c === '<' ? '&lt;' : (c === '>') ? '&gt;' : c); });
  }
  window.__pickRow = showHolder;
  window.__closeHolder = function () {
    var d = document.getElementById('holderDrawer'); if (d) d.classList.remove('on');
  };

  // ---------- 主流程 ----------
  function setStatus(t) { var el = document.getElementById('liveStatus'); if (el) el.textContent = t; }

  /* 尝试加载离线预生成的 members.js（由 scripts/gen-stock-members.mjs 生成）。
     存在则彻底免去一次性名称扫描，每次加载都只有 ulist.np 的 3~6 次；不存在则忽略。 */
  function loadPrecomp() {
    return new Promise(function (res) {
      try {
        var base = (document.currentScript && document.currentScript.src) || location.href;
        var url = new URL('./members.js', base).href;
        var s = document.createElement('script');
        s.src = url;
        s.onload = function () { res(); };
        s.onerror = function () { res(); };   // 文件不存在也继续（走缓存/扫描兜底）
        document.head.appendChild(s);
      } catch (e) { res(); }
    });
  }

  function run() {
    setStatus('正在准备选股候选集…');
    var members = precompMembers() || loadMembersCache();
    var pendingScan = false;
    var chain = Promise.resolve(members);
    if (!members || !members.zodiacCodes || !members.zodiacCodes.length) {
      pendingScan = true;
      chain = scanMembers().then(function (m) { saveMembersCache(m); return m; });
    }
    return chain.then(function (m) {
      var soe = m.soeUnion && m.soeUnion.length ? m.soeUnion : soeUnion();
      var zodiacCodes = m.zodiacCodes || [];
      var divCodes = m.divCodes || [];
      var union = uniq(zodiacCodes.concat(soe, divCodes));
      if (!union.length) throw new Error('候选集为空');
      setStatus('候选集 ' + union.length + ' 只 · 拉取实时行情…');
      return fetchLiveQuotes(union).then(function (Q) {
        if (!Object.keys(Q).length) throw new Error('实时行情为空');
        return Q;
      });
    }).then(function (Q) {
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
      var extra = pendingScan ? '（本次含一次性名称扫描，之后加载仅约 3~6 次）' : '';
      setStatus('实时选股完成 · 候选 ' + D.universe + ' 只 · 入选 ' + D.count + ' 只 · 行情/股息率为东财实时值' + extra);
    }).catch(function (e) {
      setStatus('加载异常：' + (e && e.message ? e.message : e));
      var em = document.getElementById('empty');
      if (em) {
        em.style.display = '';
        var msg = (e && e.message === '实时行情为空')
          ? '候选集已就绪，但东方财富行情接口未返回任何数据（可能限流或 secids 未被识别）。请稍后刷新重试；若持续出现，请按 F12 查看 Console 中 ulist.np 的请求与响应。'
          : '东方财富行情接口不可达（可能被网络环境或访问限制拦截），或候选集获取失败。请稍后刷新重试，或更换网络后重试。';
        em.textContent = msg;
      }
    });
  }

  setStatus('正在获取实时数据…');
  loadPrecomp().then(run);
})();

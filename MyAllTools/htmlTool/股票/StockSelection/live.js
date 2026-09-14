/* 选股面板 · 实时数据加载（2026-09 重构：无预生成死代码）
 * 数据全部页面实时获取：
 *  - 全市场代码 + 股息率(TTM)：东方财富批量行情 clist（1~6 次请求）
 *  - 价格/涨跌幅/PE/PB/总市值/流通市值/成交额/换手：腾讯 qt.gtimg.cn（沿用已验证的叠加逻辑）
 *  - 生肖/国企/行业：静态分类参照（static-data.js，非行情快照）
 * 选股逻辑（生肖/高分红/央地国资/国企改革）在浏览器内按当日行情实时重算，
 * 不再依赖 picks-data.js。股东户数改为点击个股时实时拉取东方财富 F10。 */
(function () {
  var ZD = window.ZODIAC_DATA || [];
  var ZNAMES = window.ZODIAC_NAMES || [];
  var SOE = window.SOE_MEM || {};
  var IND = window.IND_MAP || {};

  // ---------- 工具 ----------
  function prefix(c) {
    if (/^(sh|sz|bj)/.test(c)) return c;
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
  function jsonp(url, cbName) {
    cbName = cbName || 'cb';
    return new Promise(function (resolve, reject) {
      var cb = '__cb_' + Math.random().toString(36).slice(2);
      var s = document.createElement('script');
      s.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + cbName + '=' + cb + '&_=' + Date.now();
      var timer = setTimeout(function () { cleanup(); reject(new Error('timeout')); }, 12000);
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
  function fetchClist() {
    var fs = 'm:0+t:6,m:0+t:80,m:1+t:2,m:1+t:23';
    var fields = 'f12,f14,f115';
    var out = {};
    function page(pn) {
      var u = 'https://push2.eastmoney.com/api/qt/clist/get?fs=' + fs +
        '&fields=' + fields + '&pn=' + pn + '&pz=1000&po=1&np=1&fltt=2&invt=2';
      return jsonp(u).then(function (d) {
        if (!d || !d.data || !d.data.diff) return 0;
        d.data.diff.forEach(function (x) {
          var code = prefix(String(x.f12));
          out[code] = { name: x.f14 != null ? String(x.f14).trim() : code,
                        dv: num(x.f115) };
        });
        return d.data.diff.length;
      }, function () { return 0; });
    }
    return page(1).then(function (n) {
      if (n < 1000) return out;
      var chains = [];
      for (var i = 2; i <= Math.ceil(6000 / 1000); i++) chains.push(page(i));
      return Promise.all(chains).then(function () { return out; });
    });
  }

  // ---------- 2) 腾讯：行情叠加（沿用已验证逻辑） ----------
  function overlayTencent(Q) {
    var codes = Object.keys(Q);
    var BATCH = 100, i = 0, ok = 0, fail = 0, qtime = '';
    return new Promise(function (resolve) {
      function parseVar(code) {
        var raw = window['v_' + code];
        if (typeof raw !== 'string') return null;
        var m = raw.match(/^"([\s\S]*)"$/);
        var str = m ? m[1] : raw;
        if (!str || str.indexOf('~') < 0) return null;
        return str.split('~');
      }
      function overlay(code) {
        var a = parseVar(code);
        if (!a) { fail++; return; }
        var s = Q[code]; if (!s) return;
        var n = function (v) { return (v === '' || v == null) ? null : Number(v); };
        s.p = n(a[3]); s.chg = n(a[32]);
        s.mv = n(a[45]); s.cv = n(a[44]);
        s.pe = n(a[39]); s.pb = n(a[46]);
        s.amt = n(a[57]) != null ? n(a[57]) / 1e4 : null; // 万元->亿
        s.tr = n(a[38]);
        if (!qtime && a[30]) qtime = a[30];
        ok++;
      }
      function next() {
        if (i >= codes.length) { resolve({ ok: ok, fail: fail, qtime: qtime }); return; }
        document.getElementById('liveStatus').textContent =
          '拉取实时行情… ' + Math.min(i + BATCH, codes.length) + '/' + codes.length;
        var batch = codes.slice(i, i + BATCH);
        var s = document.createElement('script');
        s.type = 'text/javascript'; s.charset = 'gbk';
        s.src = 'https://qt.gtimg.cn/q=' + batch.join(',') + '&_=' + Date.now();
        s.onload = s.onerror = function () {
          try { document.body.removeChild(s); } catch (e) {}
          batch.forEach(overlay);
          i += BATCH;
          setTimeout(next, 0);
        };
        document.body.appendChild(s);
      }
      next();
    });
  }

  // ---------- 3) 选股逻辑（端口自 build_pick.py） ----------
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
    var zDef = zodiacSubs.reduce(function (best, s, i) {
      return s.codes.length > zodiacSubs[best].codes.length ? i : best; }, 0);

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
    refAll.forEach(function (c) { if (soeMap[c].indexOf('国企改革') < 0) addLabel(c, '国企改革'); });
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
        s.mv != null ? +(s.mv / 1e8).toFixed(1) : null,
        s.cv != null ? +(s.cv / 1e8).toFixed(1) : null,
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
    if (!Object.keys(Q).length) {
      setStatus('全市场数据获取失败');
      var e = document.getElementById('empty');
      if (e) { e.style.display = ''; e.textContent = '东方财富接口未返回，无法加载选股数据（请检查网络后刷新）。'; }
      return;
    }
    setStatus('拉取实时行情… 0/' + Object.keys(Q).length);
    overlayTencent(Q).then(function (r) {
      var sel = buildSelection(Q);
      var today = new Date();
      var ds = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
      var D = {
        date: ds, universe: Object.keys(Q).length, count: Object.keys(sel.stocks).length,
        zodiacNames: ZNAMES, tabs: sel.tabs, stocks: sel.stocks, meta: sel.meta
      };
      window.PICK_DATA = D;
      window.__renderPick(D);
      setStatus('实时选股完成 · ' + Object.keys(sel.stocks).length + ' 只入选 · 行情已实时刷新');
    });
  }).catch(function (e) {
    setStatus('加载异常：' + (e && e.message ? e.message : e));
  });
})();

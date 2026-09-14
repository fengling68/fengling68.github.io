/* 涨停复盘 · 浏览器端实时拉取（动态取今天之前最近 5 个交易日）：
 * 1) 页面打开时先展示加载态；
 * 2) 从昨天起向前回溯候选日期，对每一天用 JSONP 拉取东方财富
 *    涨停池(getTopicZTPool) / 跌停池(getTopicDTPool)（按日期真实取数）；
 * 3) 归一化为渲染模型并渲染；取满 5 个有数据的交易日即止；
 * 4) 若东方财富接口不可用（网络/被拦截），动态加载本地 data.js 兜底快照。
 * 说明：纯静态站点无后端，历史涨停/跌停清单由浏览器按日期现拉，不依赖预生成文件。 */
(function () {
  var UT = '7eea3edcaed734bea9cbfc24409ed989';
  var DPT = 'wz.ztzt';
  var ZT_URL = 'https://push2ex.eastmoney.com/getTopicZTPool';
  var DT_URL = 'https://push2ex.eastmoney.com/getTopicDTPool';
  var NEED = 5;          // 取最近几个交易日
  var PROBE = 16;        // 最多向前探测多少自然日（覆盖周末/假期）

  function pad(n) { return ('0' + n).slice(-2); }
  function fmt(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function ymd(d) { return '' + d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()); }

  function setStatus(txt) { var el = document.getElementById('liveStatus'); if (el) el.textContent = txt; }
  function setLoading() {
    var d = document.getElementById('detail');
    if (d) d.innerHTML = '<div class="hint">正在从东方财富接口获取最近 ' + NEED + ' 个交易日涨停/跌停数据…</div>';
    var k = document.getElementById('kpis'); if (k) k.innerHTML = '';
    var z = document.getElementById('ztags'); if (z) z.innerHTML = '';
  }

  // 带超时的 JSONP（绕过 CORS）
  function jsonp(url) {
    return new Promise(function (resolve, reject) {
      var cb = '__emcb_' + Math.random().toString(36).slice(2);
      var s = document.createElement('script');
      s.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'cb=' + cb + '&_=' + Date.now();
      var timer = setTimeout(function () { cleanup(); reject(new Error('timeout')); }, 9000);
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

  function fetchPool(url, dateYmd) {
    var u = url + '?ut=' + UT + '&dpt=' + DPT + '&Pageindex=0&pagesize=10000&sort=fbt:asc&date=' + dateYmd;
    return jsonp(u).then(function (d) {
      if (!d || d.rc !== 0 || !d.data || !d.data.pool) return [];
      return d.data.pool || [];
    }, function () { return []; });
  }

  // 全代码（带市场前缀），供可能的实时叠加使用
  function fullCode(c) {
    if (/^(sh|sz|bj)/.test(c)) return c;
    if (/^[69]/.test(c)) return 'sh' + c;
    if (/^[03]/.test(c)) return 'sz' + c;
    if (/^[84]/.test(c)) return 'bj' + c;
    return c;
  }
  function num(v) { return (v === '' || v == null || isNaN(Number(v))) ? null : Number(v); }
  function str(v) { return (v === null || v === undefined) ? '' : String(v); }

  function normStock(raw, typ) {
    if (typ === 'zt') {
      var zt = raw;
      var price = num(zt['最新价']);
      var b = num(zt['连板数']);
      if (b == null && zt['涨停统计'] && zt['涨停统计'].days != null) b = num(zt['涨停统计'].days);
      var zbc = num(zt['炸板次数']);
      var fbt = str(zt['首次封板时间']), lbt = str(zt['最后封板时间']);
      var yz = (zbc === 0 && fbt && lbt && fbt === lbt);
      var ind = str(zt['所属行业']);
      return {
        code: str(zt['代码']), fcode: fullCode(str(zt['代码'])), name: str(zt['名称']), typ: 'zt',
        b: b || 0, db: 0, yz: yz,
        price: price, chg: num(zt['涨跌幅']), ceil: price, floor: null,
        prev: null, open: null, high: null, low: null,
        amt: num(zt['成交额']) != null ? num(zt['成交额']) / 1e8 : null,
        mc: num(zt['总市值']) != null ? num(zt['总市值']) / 1e8 : null,
        cm: num(zt['流通市值']) != null ? num(zt['流通市值']) / 1e8 : null,
        pe: null, tr: num(zt['换手率']), vr: null, div: null,
        path: ind, fbt: fbt, lbt: lbt, fund: num(zt['封板资金']),
        inds: ind ? [{ n: ind, lv: '行业', z: null, zn: null, chg: null, turn: null, net: null, net5: null, net20: null, up: null }] : [],
        cons: []
      };
    } else {
      var dt = raw;
      var price2 = num(dt['最新价']);
      if (price2 != null) price2 = price2 / 1000;   // 跌停池最新价单位为千分之一
      var db = num(dt['连续跌停']);
      var openCnt = num(dt['开板次数']);
      var lbt2 = str(dt['最后封板时间']);
      var yz2 = (openCnt === 0);
      var ind2 = str(dt['所属行业']);
      return {
        code: str(dt['代码']), fcode: fullCode(str(dt['代码'])), name: str(dt['名称']), typ: 'dt',
        b: 0, db: db || 0, yz: yz2,
        price: price2, chg: num(dt['涨跌幅']), ceil: null, floor: price2,
        prev: null, open: null, high: null, low: null,
        amt: num(dt['成交额']) != null ? num(dt['成交额']) / 1e8 : null,
        mc: num(dt['总市值']) != null ? num(dt['总市值']) / 1e8 : null,
        cm: num(dt['流通市值']) != null ? num(dt['流通市值']) / 1e8 : null,
        pe: num(dt['动态市盈率']), tr: num(dt['换手率']), vr: null, div: null,
        path: ind2, fbt: null, lbt: lbt2, fund: num(dt['封单资金']),
        inds: ind2 ? [{ n: ind2, lv: '行业', z: null, zn: null, chg: null, turn: null, net: null, net5: null, net20: null, up: null }] : [],
        cons: []
      };
    }
  }

  function buildDay(dateStr, rawZt, rawDt) {
    var zt = rawZt.map(function (r) { return normStock(r, 'zt'); });
    var dt = rawDt.map(function (r) { return normStock(r, 'dt'); });
    var maxb = 0, maxdb = 0, ztAmt = 0;
    zt.forEach(function (s) { if (s.b > maxb) maxb = s.b; if (s.amt) ztAmt += s.amt; });
    dt.forEach(function (s) { if (s.db > maxdb) maxdb = s.db; });
    var tldr = dateStr + ' 涨停 ' + zt.length + ' 只、跌停 ' + dt.length + ' 只'
      + (maxb ? '；最高连板 ' + maxb + ' 板' : '')
      + (maxdb ? '，最高连跌 ' + maxdb + ' 板' : '')
      + '。数据来源：东方财富涨停/跌停池（浏览器实时拉取，含连板/连跌与一字）。';
    return {
      date: dateStr, source: 'em',
      summary: { zt: zt.length, dt: dt.length, up: null, down: null, amount: null, zt_amt: ztAmt, max_board: maxb, max_db: maxdb, amount_delta: null },
      tldr: tldr,
      zt: zt, dt: dt
    };
  }

  function fetchDay(dateStr) {
    var y = ymd(parseDate(dateStr));
    return Promise.all([fetchPool(ZT_URL, y), fetchPool(DT_URL, y)]).then(function (r) {
      var zt = r[0] || [], dt = r[1] || [];
      if (!zt.length && !dt.length) return null;   // 非交易日/无数据
      return buildDay(dateStr, zt, dt);
    });
  }

  function parseDate(s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }

  function candidateDates() {
    var out = [], t = new Date();
    t.setDate(t.getDate() - 1);   // 从昨天开始（今天之前）
    for (var i = 0; i < PROBE; i++) { out.push(fmt(t)); t.setDate(t.getDate() - 1); }
    return out;
  }

  function fetchRecent(n) {
    var dates = candidateDates();
    var days = [];
    return (function loop(i) {
      if (i >= dates.length || days.length >= n) return Promise.resolve(days);
      return fetchDay(dates[i]).then(function (d) {
        if (d) days.push(d);
        return loop(i + 1);
      }, function () { return loop(i + 1); });
    })(0);
  }

  function loadFallback() {
    return new Promise(function (resolve, reject) {
      if (window.ZT_DAYS && window.ZT_DAYS.length) return resolve(window.ZT_DAYS);
      var s = document.createElement('script');
      s.src = './StockUpDownReview/data.js';
      s.onload = function () { resolve(window.ZT_DAYS || []); };
      s.onerror = function () { reject(new Error('fallback load failed')); };
      document.body.appendChild(s);
    });
  }

  function updateHelp() {
    var hp = document.getElementById('helpPop');
    if (hp && hp.getAttribute('data-em') !== '1') {
      hp.setAttribute('data-em', '1');
      hp.innerHTML += '<br><b>实时获取</b>：本页涨停/跌停清单由浏览器打开时通过东方财富公开接口（push2ex）按日期实时拉取，'
        + '覆盖今天之前最近 ' + NEED + ' 个交易日；连板/连跌/一字由接口返回。板块主力净额与所属概念接口未提供，历史快照日才展示。';
    }
  }

  // 测试/调试钩子（不影响主流程）
  window.__emNorm = { normStock: normStock, buildDay: buildDay, fullCode: fullCode, fetchRecent: fetchRecent, candidateDates: candidateDates };

  // 主流程
  setLoading();
  setStatus('正在获取最近 ' + NEED + ' 个交易日数据…');
  fetchRecent(NEED).then(function (days) {
    if (days && days.length) {
      window.__renderZT(days);
      setStatus('数据来源：东方财富接口实时获取（' + days.length + ' 个交易日）');
      updateHelp();
    } else {
      return loadFallback().then(function (fb) {
        if (fb && fb.length) {
          window.__renderZT(fb);
          setStatus('东方财富接口未返回数据，已回退本地快照（' + fb.length + ' 个交易日）');
        } else {
          setStatus('未获取到数据（接口不可用且无本地快照）');
        }
      }, function () { setStatus('东方财富接口不可用，且本地快照加载失败'); });
    }
  }).catch(function (e) {
    setStatus('获取异常：' + (e && e.message ? e.message : e) + '，尝试本地快照…');
    loadFallback().then(function (fb) {
      if (fb && fb.length) window.__renderZT(fb);
    });
  });
})();

/* 涨停复盘 · 数据加载（涨停实时版 / 2026-09 重构）：
 *  - 浏览器打开时，从今天往前逐日探测东方财富涨停池，自动取「最近 5 个交易日」
 *    （非固定日期；非交易日/无数据日会被过滤掉）；
 *  - 每个交易日取其涨停清单（收盘值），连板/一字/封单/行业均由接口返回；
 *  - 东方财富不提供跌停个股明细与板块主力净额，故本页仅展示涨停，且不含板块净额；
 *  - 若接口全部失败，回退本地快照（data.js，已裁剪为涨停专用）兜底。 */
(function () {
  var UT = '7eea3edcaed734bea9cbfc24409ed989';
  var DPT = 'wz.ztzt';
  var ZT_URL = 'https://push2ex.eastmoney.com/getTopicZTPool';

  function pad(n) { return ('0' + n).slice(-2); }
  function ymd(d) { return '' + d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()); }
  function fmtDate(ymd8) { return ymd8.slice(0, 4) + '-' + ymd8.slice(4, 6) + '-' + ymd8.slice(6, 8); }

  function setStatus(txt) { var el = document.getElementById('liveStatus'); if (el) el.textContent = txt; }
  function setLoading() {
    var d = document.getElementById('detail');
    if (d) d.innerHTML = '<div class="hint">正在加载数据…</div>';
    var k = document.getElementById('kpis'); if (k) k.innerHTML = '';
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

  function fetchZtRaw(dateYmd) {
    var u = ZT_URL + '?ut=' + UT + '&dpt=' + DPT + '&Pageindex=0&pagesize=10000&sort=fbt:asc&date=' + dateYmd;
    return jsonp(u).then(function (d) {
      if (!d || d.rc !== 0 || !d.data || !d.data.pool) return null;
      return { tc: d.data.tc || 0, pool: d.data.pool || [] };
    }, function () { return null; });
  }

  function fullCode(c) {
    if (/^(sh|sz|bj)/.test(c)) return c;
    if (/^[69]/.test(c)) return 'sh' + c;
    if (/^[03]/.test(c)) return 'sz' + c;
    if (/^[84]/.test(c)) return 'bj' + c;
    return c;
  }
  function num(v) { return (v === '' || v == null || isNaN(Number(v))) ? null : Number(v); }
  function str(v) { return (v === null || v === undefined) ? '' : String(v); }
  function fmtTime(t) {
    if (t == null || t === '') return '';
    var s = ('000000' + t).slice(-6);
    return s.slice(0, 2) + ':' + s.slice(2, 4) + ':' + s.slice(4, 6);
  }
  // 东方财富真实返回为英文/缩写字段：c 代码, n 名称, p 最新价(×1000), zdp 涨跌幅(%),
  // amount 成交额(元), ltsz 流通市值(元), tshare 总市值(元), hs 换手率(%), lbc 连板数,
  // fbt/lbt 封板时间(整数 HHMMSS), fund 封单资金(元), zbc 炸板次数, hybk 行业, zttj.days 连板天数
  function normStock(raw) {
    var p = num(raw.p), price = p != null ? p / 1000 : null;
    var b = num(raw.lbc);
    if (b == null && raw.zttj && raw.zttj.days != null) b = num(raw.zttj.days);
    var zbc = num(raw.zbc);
    var fbt = fmtTime(raw.fbt), lbt = fmtTime(raw.lbt);
    var yz = (zbc === 0 && raw.fbt && raw.lbt && raw.fbt === raw.lbt);
    var ind = str(raw.hybk);
    return {
      code: str(raw.c), fcode: fullCode(str(raw.c)), name: str(raw.n), typ: 'zt',
      b: b || 0, yz: yz,
      price: price, chg: num(raw.zdp),
      ceil: price, floor: null,
      prev: null, open: null, high: null, low: null,
      amt: num(raw.amount) != null ? num(raw.amount) / 1e8 : null,
      mc: num(raw.tshare) != null ? num(raw.tshare) / 1e8 : null,
      cm: num(raw.ltsz) != null ? num(raw.ltsz) / 1e8 : null,
      pe: null, tr: num(raw.hs), vr: null, div: null,
      ind: ind, fbt: fbt, lbt: lbt, fund: num(raw.fund) != null ? num(raw.fund) / 1e8 : null
    };
  }

  function buildDay(dateStr, stocks) {
    var maxb = 0, ztAmt = 0;
    stocks.forEach(function (s) { if (s.b > maxb) maxb = s.b; if (s.amt) ztAmt += s.amt; });
    return {
      date: dateStr, source: 'em',
      summary: { zt: stocks.length, max_board: maxb, zt_amt: Math.round(ztAmt) },
      tldr: '<b>情绪概览</b>：' + dateStr + ' 涨停 <b class="up">' + stocks.length
        + '</b> 只，最高连板 <b>' + maxb + ' 板</b>；数据由东方财富接口实时获取（最近 5 个交易日）。',
      zt: stocks
    };
  }

  // 候选日期：今天往前 30 个日历日（覆盖长假，确保能凑齐 5 个交易日）
  function candidates(n) {
    var a = [], t = new Date();
    for (var i = 0; i < n; i++) a.push(new Date(t.getFullYear(), t.getMonth(), t.getDate() - i));
    return a;
  }

  function loadFallback() {
    return new Promise(function (resolve) {
      if (window.ZT_DAYS && window.ZT_DAYS.length) return resolve(window.ZT_DAYS);
      var s = document.createElement('script');
      s.src = './StockUpDownReview/data.js';
      s.onload = function () { resolve(window.ZT_DAYS || []); };
      s.onerror = function () { resolve([]); };
      document.body.appendChild(s);
    });
  }

  // 测试/调试钩子
  window.__emNorm = { normStock: normStock, fetchZtRaw: fetchZtRaw, loadFallback: loadFallback };

  setLoading();
  Promise.all(candidates(30).map(function (d) {
    var y = ymd(d);
    return fetchZtRaw(y).then(function (res) {
      if (!res || !res.tc || !res.pool || !res.pool.length) return null;
      return { ymd: y, dateStr: fmtDate(y), stocks: res.pool.map(normStock) };
    }, function () { return null; });
  })).then(function (results) {
    var days = results.filter(Boolean)
      .sort(function (a, b) { return a.ymd > b.ymd ? -1 : 1; })  // 最新在前
      .slice(0, 5);
    if (days.length) {
      window.__renderZT(days.map(function (d) { return buildDay(d.dateStr, d.stocks); }));
      setStatus('东方财富实时获取 ' + days.length + ' 个交易日涨停数据（最近 ' + days.length + ' 个交易日）');
    } else {
      loadFallback().then(function (fb) {
        if (fb && fb.length) {
          window.__renderZT(fb);
          setStatus('本地快照（东方财富接口未返回，已回退）');
        } else {
          setStatus('暂无数据：东方财富接口未返回且无本地快照');
          var e = document.getElementById('detail');
          if (e) e.innerHTML = '<div class="hint">暂无数据，请稍后刷新重试。</div>';
        }
      });
    }
  }).catch(function (e) {
    setStatus('加载异常：' + (e && e.message ? e.message : e));
  });
})();

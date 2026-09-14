/* 涨停复盘 · 数据加载（2026-09 重构）：
 * 数据策略：
 *  - 本地快照 data.js（window.ZT_DAYS）含完整「涨停 + 跌停」个股与板块/概念资金，
 *    作为可靠基线，打开即渲染，保证个股信息始终可见；
 *  - 同时按日期用 JSONP 实时拉取东方财富涨停池(getTopicZTPool)，
 *    若返回数据则用实时涨停覆盖对应交易日（更“新”）；
 *  - 东方财富跌停池接口仅返回总数、不返回个股明细（服务端限制），
 *    故跌停个股始终取自本地快照。
 * 说明：纯静态站点无后端，东方财富接口由浏览器 JSONP 现拉，不依赖预生成文件。 */
(function () {
  var UT = '7eea3edcaed734bea9cbfc24409ed989';
  var DPT = 'wz.ztzt';
  var ZT_URL = 'https://push2ex.eastmoney.com/getTopicZTPool';
  var DT_URL = 'https://push2ex.eastmoney.com/getTopicDTPool';

  function pad(n) { return ('0' + n).slice(-2); }
  function ymd(d) { return '' + d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()); }
  function parseDate(s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }

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
  function fmtTime(t) {
    if (t == null || t === '') return '';
    var s = ('000000' + t).slice(-6);
    return s.slice(0, 2) + ':' + s.slice(2, 4) + ':' + s.slice(4, 6);
  }

  // 东方财富真实返回为英文/缩写字段：c 代码, n 名称, p 最新价(×1000),
  // zdp 涨跌幅(%), amount 成交额(元), ltsz 流通市值(元), tshare 总市值(元),
  // hs 换手率(%), lbc 连板数, fbt/lbt 封板时间(整数 HHMMSS), fund 封单资金(元),
  // zbc 炸板次数, hybk 行业, zttj.days 连板天数
  function normStock(raw, typ) {
    if (typ === 'zt') {
      var p = num(raw.p);
      var b = num(raw.lbc);
      if (b == null && raw.zttj && raw.zttj.days != null) b = num(raw.zttj.days);
      var zbc = num(raw.zbc);
      var fbt = fmtTime(raw.fbt), lbt = fmtTime(raw.lbt);
      var yz = (zbc === 0 && raw.fbt && raw.lbt && raw.fbt === raw.lbt);
      var ind = str(raw.hybk);
      var price = p != null ? p / 1000 : null;
      return {
        code: str(raw.c), fcode: fullCode(str(raw.c)), name: str(raw.n), typ: 'zt',
        b: b || 0, db: 0, yz: yz,
        price: price, chg: num(raw.zdp),
        ceil: price, floor: null,
        prev: null, open: null, high: null, low: null,
        amt: num(raw.amount) != null ? num(raw.amount) / 1e8 : null,
        mc: num(raw.tshare) != null ? num(raw.tshare) / 1e8 : null,
        cm: num(raw.ltsz) != null ? num(raw.ltsz) / 1e8 : null,
        pe: null, tr: num(raw.hs), vr: null, div: null,
        path: ind, fbt: fbt, lbt: lbt, fund: num(raw.fund) != null ? num(raw.fund) / 1e8 : null,
        inds: ind ? [{ n: ind, lv: '行业', z: null, zn: null, chg: null, turn: null, net: null, net5: null, net20: null, up: null }] : [],
        cons: []
      };
    } else {
      // 跌停：东方财富跌停池当前不返回个股明细（服务端限制），此分支基本不会命中实时
      var p2 = num(raw.p); if (p2 != null) p2 = p2 / 1000;
      var db = num(raw.lxdt) || num(raw['连续跌停']) || 0;
      var openCnt = num(raw.kt) || num(raw['开板次数']);
      var lbt2 = fmtTime(raw.lbt);
      var yz2 = (openCnt === 0);
      var ind2 = str(raw.hybk);
      var price2 = p2;
      return {
        code: str(raw.c), fcode: fullCode(str(raw.c)), name: str(raw.n), typ: 'dt',
        b: 0, db: db || 0, yz: yz2,
        price: price2, chg: num(raw.zdp),
        ceil: null, floor: price2,
        prev: null, open: null, high: null, low: null,
        amt: num(raw.amount) != null ? num(raw.amount) / 1e8 : null,
        mc: num(raw.tshare) != null ? num(raw.tshare) / 1e8 : null,
        cm: num(raw.ltsz) != null ? num(raw.ltsz) / 1e8 : null,
        pe: num(raw.pe) != null ? num(raw.pe) : num(raw['动态市盈率']),
        tr: num(raw.hs), vr: null, div: null,
        path: ind2, fbt: null, lbt: lbt2, fund: num(raw.fund) != null ? num(raw.fund) / 1e8 : null,
        inds: ind2 ? [{ n: ind2, lv: '行业', z: null, zn: null, chg: null, turn: null, net: null, net5: null, net20: null, up: null }] : [],
        cons: []
      };
    }
  }

  function recompute(day) {
    var zt = day.zt || [], dt = day.dt || [];
    var maxb = 0, maxdb = 0, ztAmt = 0;
    zt.forEach(function (s) { if (s.b > maxb) maxb = s.b; if (s.amt) ztAmt += s.amt; });
    dt.forEach(function (s) { if (s.db > maxdb) maxdb = s.db; });
    var s = day.summary;
    s.zt = zt.length; s.dt = dt.length;
    s.max_board = maxb; s.max_db = maxdb; s.zt_amt = Math.round(ztAmt);
    day.tldr = day.date + ' 涨停 ' + zt.length + ' 只、跌停 ' + dt.length + ' 只'
      + (maxb ? '；最高连板 ' + maxb + ' 板' : '')
      + (maxdb ? '，最高连跌 ' + maxdb + ' 板' : '')
      + (day.ztLive ? '。涨停数据来源：东方财富接口实时获取。' : '。');
  }

  function fetchZt(dateYmd) {
    return fetchPool(ZT_URL, dateYmd).then(function (pool) {
      if (!pool || !pool.length) return null;
      return pool.map(function (r) { return normStock(r, 'zt'); });
    }, function () { return null; });
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

  function updateHelp() {
    var hp = document.getElementById('helpPop');
    if (hp && hp.getAttribute('data-em') !== '1') {
      hp.setAttribute('data-em', '1');
      hp.innerHTML += '<br><b>数据来源</b>：涨停清单由浏览器打开时通过东方财富公开接口（push2ex）按日期实时拉取并覆盖对应交易日；'
        + '跌停个股因东方财富跌停池接口仅返回总数、不提供个股明细（服务端限制），始终取自本地历史快照。板块主力净额与所属概念亦来自本地快照。';
    }
  }

  // 测试/调试钩子（不影响主流程）
  window.__emNorm = { normStock: normStock, fullCode: fullCode, fetchZt: fetchZt, loadFallback: loadFallback };

  // 主流程
  setLoading();
  loadFallback().then(function (fb) {
    var days = (fb && fb.length) ? fb.slice() : [];
    if (!days.length) {
      setStatus('本地快照缺失，无法展示数据');
      return;
    }
    // 1) 先渲染本地快照（个股信息完整可见）
    window.__renderZT(days);
    setStatus('数据：本地快照（' + days.length + ' 个交易日）· 正在获取涨停实时数据…');

    // 2) 逐交易日实时拉取东方财富涨停池，命中则覆盖
    var done = 0;
    days.forEach(function (day) {
      fetchZt(ymd(parseDate(day.date))).then(function (liveZt) {
        if (liveZt && liveZt.length) {
          day.zt = liveZt;
          day.ztLive = true;
          recompute(day);
        }
      }, function () {}).then(function () {
        done++;
        if (done === days.length) {
          window.__renderZT(days);
          var liveCnt = days.filter(function (d) { return d.ztLive; }).length;
          if (liveCnt) setStatus('涨停：东方财富实时获取 ' + liveCnt + ' 个交易日 · 跌停：本地快照（接口未提供）');
          else setStatus('数据：本地快照（东方财富涨停接口未返回，跌停接口未提供）');
          updateHelp();
        }
      });
    });
  }).catch(function (e) {
    setStatus('加载异常：' + (e && e.message ? e.message : e));
  });
})();

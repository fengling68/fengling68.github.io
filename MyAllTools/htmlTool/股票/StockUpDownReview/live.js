/* 涨停复盘实时叠加（多日版）：
 * 仅当数据中包含「当日」那一天的快照时，才用 JSONP 直连腾讯公开行情接口 qt.gtimg.cn，
 * 拉取该日全部涨停/跌停股的实时「现价 / 涨跌幅% / PE / 总市值 / 流通市值 / 成交额」，
 * 叠加覆盖快照并刷新详情与合计成交额。所选日期为历史日时仅显示收盘快照，不叠加实时行情。 */
(function () {
  var DAYS = window.ZT_DAYS || [];
  if (!DAYS.length) return;

  function isToday(ds) {
    var t = new Date();
    var y = t.getFullYear();
    var m = ('0' + (t.getMonth() + 1)).slice(-2);
    var d = ('0' + t.getDate()).slice(-2);
    return ds === (y + '-' + m + '-' + d);
  }
  function setStatus(txt) {
    var el = document.getElementById('liveStatus');
    if (el) el.textContent = txt;
  }

  var dayIdx = -1;
  for (var i = 0; i < DAYS.length; i++) {
    if (isToday(DAYS[i].date)) { dayIdx = i; break; }
  }
  if (dayIdx < 0) {
    setStatus('历史快照（非当日），未叠加实时行情');
    var hp = document.getElementById('helpPop');
    if (hp && hp.getAttribute('data-live') !== '1') {
      hp.setAttribute('data-live', '1');
      hp.innerHTML += '<br><b>实时</b>：本页为多日历史快照，所选日期非当日时不叠加腾讯实时行情，行情字段为所选交易日收盘值。';
    }
    return;
  }

  var day = DAYS[dayIdx];
  var ST = (day.zt || []).concat(day.dt || []);
  if (!ST.length) return;

  var BATCH = 100, ok = 0, fail = 0, qtime = '';

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
    var s = null;
    for (var i = 0; i < ST.length; i++) { if (ST[i].code === code) { s = ST[i]; break; } }
    if (!s) return;
    var num = function (v) { return (v === '' || v == null) ? null : Number(v); };
    s.price = num(a[3]);
    s.chg = num(a[32]);
    s.pe = num(a[39]);
    s.mc = num(a[45]);
    s.cm = num(a[44]);
    if (num(a[57]) != null) s.amt = num(a[57]) * 1e4;
    if (!qtime && a[30]) qtime = a[30];
    ok++;
  }
  function fetchBatch(list, cb) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.charset = 'gbk';
    s.src = 'https://qt.gtimg.cn/q=' + list.join(',') + '&_=' + Date.now();
    s.onload = s.onerror = function () {
      try { document.body.removeChild(s); } catch (e) {}
      list.forEach(overlay);
      cb();
    };
    document.body.appendChild(s);
  }
  var idx = 0, total = ST.length;
  function next() {
    if (idx >= total) { finish(); return; }
    setStatus('正在拉取实时行情… ' + Math.min(idx + BATCH, total) + '/' + total);
    fetchBatch(ST.slice(idx, idx + BATCH).map(function (s) { return s.code; }), function () {
      idx += BATCH;
      setTimeout(next, 0);
    });
  }
  function finish() {
    var tot = 0;
    ST.forEach(function (s) { if (s.amt) tot += s.amt; });
    var kpiAmt = document.getElementById('ztAmt');
    if (kpiAmt) kpiAmt.textContent = (tot / 1e8).toFixed(0) + '亿';
    var hh = qtime ? (qtime.slice(8, 10) + ':' + qtime.slice(10, 12)) : '';
    var meta = document.getElementById('metaInfo');
    if (meta) meta.textContent = (hh ? '实时行情 · 接口时间 ' + hh + ' · ' : '实时行情 · ')
      + ST.length + ' 只涨停/跌停股' + (ok ? '（已刷新实时价）' : '（接口未连接，显示收盘快照）');
    setStatus('实时更新 ' + ok + ' 只' + (fail ? '，未取到 ' + fail + ' 只' : ''));
    if (window.__curDayIndex === dayIdx && window.__refreshDetail) window.__refreshDetail();
    var hp = document.getElementById('helpPop');
    if (hp && hp.getAttribute('data-live') !== '1') {
      hp.setAttribute('data-live', '1');
      hp.innerHTML += '<br><b>实时</b>：价格 / 涨跌幅% / PE / 总市值 / 流通市值 / 成交额为打开页面时'
        + '腾讯公开接口（qt.gtimg.cn）实时值，叠加覆盖收盘快照；行业/概念资金、连板/连跌天数、股息率接口未提供，沿用快照值。';
    }
  }
  next();
})();

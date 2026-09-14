/* 涨停复盘渲染（涨停实时版 / 2026-09 重构）：
 * 仅处理涨停（已移除跌停与板块主力净额），数据由 live.js 通过东方财富接口实时拉取。
 * day: { date, source:'em'|'fallback', summary, zt:[stock...] }
 * stock 归一化字段：
 *   code(6位展示), name, b(连板数), yz(一字), price, chg(%),
 *   ceil/floor, prev, open, high, low, amt(亿), tr(%), vr, mc/cm(亿), pe, div,
 *   ind(所属行业), fbt/lbt(封板时间 HH:MM:SS), fund(封单，亿)
 * 全由 live.js 调用 window.__renderZT(days)。 */
(function () {
  var DAYS = [];
  var di = 0;          // 当前日期索引
  var cur = 0;         // 当前选中个股索引
  var SZT = [];        // 当前日涨停股（按连板数降序）

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>]/g, function (c) {
      return c == '&' ? '&amp;' : (c == '<' ? '&lt;' : '&gt;');
    });
  }
  function fx(v, d, s) {
    return (v === null || v === undefined) ? '—' : v.toFixed(d) + (s || '');
  }
  function isToday(ds) {
    var t = new Date();
    return ds === (t.getFullYear() + '-' + ('0' + (t.getMonth() + 1)).slice(-2) + '-' + ('0' + t.getDate()).slice(-2));
  }

  function setData(days) {
    DAYS = days || [];
    di = 0; cur = 0; SZT = [];
    if (!DAYS.length) {
      var e = document.getElementById('detail');
      if (e) e.innerHTML = '<div class="hint">暂无数据</div>';
      return false;
    }
    return true;
  }

  function renderDates() {
    var h = '<span class="lab">日期</span>';
    for (var i = 0; i < DAYS.length; i++) {
      var d = DAYS[i];
      var sub = isToday(d.date) ? ' <span class="d-sub">今</span>' : '';
      h += '<span class="datebtn' + (i === di ? ' on' : '') + '" data-i="' + i + '">' + d.date.slice(5) + sub + '</span>';
    }
    document.getElementById('dates').innerHTML = h;
  }

  function kpi(v, lab, cls) {
    if (v === null || v === undefined) v = '—';
    return '<div class="kpi"><b' + (cls ? ' class="' + cls + '"' : '') + '>' + v + '</b><span>' + lab + '</span></div>';
  }
  function renderKPIs() {
    var s = DAYS[di].summary;
    var delta = (s.amount_delta == null) ? '—' : ((s.amount_delta > 0 ? '+' : '') + s.amount_delta.toFixed(0) + '亿');
    var dh = (s.amount_delta == null) ? 'flat' : (s.amount_delta > 0 ? 'up' : 'down');
    var h = ''
      + kpi(s.zt, '涨停家数', 'up')
      + kpi((s.max_board || 0) + ' 板', '最高连板')
      + kpi(s.up == null ? '—' : s.up, '上涨家数', 'up')
      + kpi(s.down == null ? '—' : s.down, '下跌家数', 'down')
      + kpi(s.amount == null ? '—' : (s.amount.toLocaleString('en-US') + '亿'), '两市成交额')
      + kpi('<span class="' + dh + '">' + delta + '</span>', '成交额较上日')
      + kpi('<span id="ztAmt">' + (s.zt_amt == null ? '—' : s.zt_amt.toFixed(0) + '亿') + '</span>', '涨停股合计成交额');
    document.getElementById('kpis').innerHTML = h;
  }

  function renderTldr() { document.getElementById('tldr').innerHTML = DAYS[di].tldr || ''; }

  function renderTitle() {
    document.getElementById('ztTitle').textContent =
      '涨停股标签（涨停 ' + SZT.length + ' 只，按连板数降序）';
  }

  function renderMeta() {
    var day = DAYS[di], s = day.summary;
    var txt = day.date + ' 收盘 · 涨停 ' + s.zt + ' 只';
    if (s.up != null) txt += ' · 上涨 ' + s.up + ' / 下跌 ' + s.down;
    if (s.amount != null) txt += ' · 两市成交 ' + s.amount.toLocaleString('en-US') + ' 亿';
    txt += (day.source === 'em')
      ? ' · 数据：东方财富接口实时获取（最近 5 个交易日）'
      : ' · 数据：本地快照（东方财富接口未返回，已回退）';
    document.getElementById('metaInfo').textContent = txt;
  }

  function buildTags() {
    var h = '';
    if (SZT.length) {
      h += '<span class="sep-tag">涨停 ' + SZT.length + '（按连板数降序）</span>';
      for (var i = 0; i < SZT.length; i++) {
        var s = SZT[i];
        var cls = s.b >= 3 ? 'b3' : (s.b === 2 ? 'b2' : 'b1');
        var yz = s.yz ? '<i class="yzdot">一字</i>' : '';
        h += '<span class="ztag' + (i === cur ? ' on' : '') + '" data-i="' + i + '">' + esc(s.name)
          + '<em class="bd ' + cls + '">' + (s.b || 0) + '板</em>' + yz + '</span>';
      }
    }
    if (!h) h = '<div class="hint">当日无涨停数据</div>';
    document.getElementById('ztags').innerHTML = h;
  }

  function renderDetail() {
    var s = SZT[cur];
    if (!s) { document.getElementById('detail').innerHTML = ''; return; }
    var b = s.b || 0;
    var bcls = b >= 3 ? 'b3' : (b === 2 ? 'b2' : 'b1');
    var badge = b + '板';
    var yz = s.yz ? '<span class="tag yz">一字涨停</span>' : '';
    var amp = (s.prev && s.high !== null && s.low !== null) ? (s.high - s.low) / s.prev * 100 : null;
    var m = [
      ['收盘价', fx(s.price, 2)],
      ['涨幅', '<b class="' + (s.chg > 0 ? 'up' : 'flat') + '">' + (s.chg > 0 ? '+' : '') + fx(s.chg, 2) + '%</b>'],
      ['涨停价', fx(s.ceil, 2)],
      ['昨收', fx(s.prev, 2)],
      ['今开', fx(s.open, 2)],
      ['最高', fx(s.high, 2)],
      ['最低', fx(s.low, 2)],
      ['振幅', fx(amp, 2, '%')],
      ['成交额', s.amt ? s.amt.toFixed(2) + '亿' : '—'],
      ['换手率', fx(s.tr, 2, '%')],
      ['量比', fx(s.vr, 2)],
      ['总市值', s.mc ? s.mc.toFixed(1) + '亿' : '—'],
      ['流通市值', s.cm ? s.cm.toFixed(1) + '亿' : '—'],
      ['PE-TTM', fx(s.pe, 1)],
      ['封单资金', s.fund != null ? s.fund.toFixed(2) + '亿' : '—'],
      ['连板高度', b + ' 板']
    ];
    if (s.fbt || s.lbt) m.push(['首次/最后封板', esc((s.fbt || '—') + ' / ' + (s.lbt || '—'))]);
    var mh = '<div class="mrow">';
    for (var i = 0; i < m.length; i++) { mh += '<div>' + m[i][0] + '<b>' + m[i][1] + '</b></div>'; }
    mh += '</div>';
    var ind = s.ind || s.path || '—';
    var h = '<div class="panel"><div class="dhead"><span class="dname">' + esc(s.name) + '</span>'
      + '<span class="dcode">' + esc(s.code) + '</span>'
      + '<span class="bd ' + bcls + '">' + badge + '</span>' + yz
      + '<span class="dpath">' + esc(ind) + '</span></div>' + mh;
    h += '<div class="dsec">所属行业<span>东方财富涨停池返回</span></div>'
      + '<div class="mrow"><div>行业<b>' + esc(ind) + '</b></div></div>';
    h += '<div class="note">数据来源：东方财富涨停池（浏览器实时拉取）。板块主力净额、所属概念等接口未提供，未展示；价格 / 涨跌幅为所选交易日收盘值。</div>';
    document.getElementById('detail').innerHTML = h;
  }

  function setDay(i) {
    di = i; cur = 0;
    SZT = (DAYS[di].zt || []).slice().sort(function (a, b) { return (b.b || 0) - (a.b || 0); });
    renderDates(); renderMeta(); renderKPIs(); renderTldr(); renderTitle();
    buildTags(); renderDetail();
    window.__curDayIndex = di;
  }

  var inited = false;
  function initOnce() {
    if (inited) return; inited = true;
    var d = document.getElementById('dates');
    if (d) d.addEventListener('click', function (e) {
      var t = e.target.closest ? e.target.closest('.datebtn') : null;
      if (!t) return;
      var i = parseInt(t.getAttribute('data-i'), 10);
      if (!isNaN(i)) setDay(i);
    });
    var z = document.getElementById('ztags');
    if (z) z.addEventListener('click', function (e) {
      var t = e.target;
      while (t && t.className && String(t.className).indexOf('tag') < 0) { t = t.parentNode; }
      if (!t || !t.getAttribute) return;
      var i = t.getAttribute('data-i');
      if (i === null) return;
      cur = parseInt(i, 10);
      var all = document.querySelectorAll('#ztags .ztag');
      for (var k = 0; k < all.length; k++) all[k].className = String(all[k].className).replace(' on', '');
      t.className = t.className + ' on';
      renderDetail();
      var det = document.getElementById('detail');
      if (det) det.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  window.__renderZT = function (days) {
    if (setData(days)) { initOnce(); setDay(0); }
    return DAYS;
  };
  window.__refreshDetail = function () { renderDetail(); };
  window.__curDayIndex = di;

  // 若 data.js 已预加载（兜底），直接渲染；否则等待 live.js 拉取
  if (window.ZT_DAYS && window.ZT_DAYS.length) {
    window.__renderZT(window.ZT_DAYS);
  }
})();

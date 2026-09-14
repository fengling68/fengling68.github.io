/* 涨停复盘渲染逻辑（多数据源归一化版）：
 * 渲染归一化后的 day 数组（window.__renderZT(days)），每个 day 含：
 *   { date, source:'em'|'fallback', summary, tldr, zt:[stock...], dt:[stock...] }
 * stock 归一化字段：
 *   code(展示用6位), fcode(带市场前缀,用于可能的叠加), name, typ:'zt'|'dt',
 *   b(连板), db(连跌), yz(一字), price, chg, ceil/floor, prev, open, high, low,
 *   amt(亿), mc/cm(亿), pe, tr, vr, div, path(行业), fbt/lbt(封板时间), fund(封单),
 *   inds:[{n,lv,z,zn,chg,turn,net,net5,net20,up}], cons:[...]
 * - EM 来源：inds 仅含单行业(无净额)、cons 为空，明细区走简化分支。
 * - fallback 来源：inds/cons 含完整净额，明细区走完整表格。
 * 日期切换 + 涨停跌停合并标签云 + 个股明细，全部由 live.js 调用。 */
(function () {
  var DAYS = [];
  var di = 0;          // 当前日期索引
  var combined = [];   // 当前日 [zt..., dt...]
  var cur = 0;         // 当前选中个股在 combined 中的索引

  function getAttr() { return window.ZT_ATTR || []; }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>]/g, function (c) {
      return c == '&' ? '&amp;' : (c == '<' ? '&lt;' : '&gt;'); });
  }
  function isAttr(n) {
    var A = getAttr();
    for (var i = 0; i < A.length; i++) {
      if (String(n).toLowerCase().indexOf(A[i].toLowerCase()) >= 0) return true;
    }
    return false;
  }
  function nv(v) {
    if (v === null || v === undefined) return '<span class="flat">—</span>';
    var c = v > 0 ? 'up' : (v < 0 ? 'down' : 'flat');
    return '<span class="' + c + '">' + (v > 0 ? '+' : '') + (v / 10000).toFixed(1) + '亿</span>';
  }
  function mv(v) {
    return (v === null || v === undefined) ? '—' : (v / 10000).toFixed(1) + '亿';
  }
  function cv(v) {
    if (v === null || v === undefined) return '<span class="flat">—</span>';
    var c = v > 0 ? 'up' : (v < 0 ? 'down' : 'flat');
    return '<span class="' + c + '">' + (v > 0 ? '+' : '') + v.toFixed(2) + '%</span>';
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
    di = 0; cur = 0; combined = [];
    if (!DAYS.length) {
      var e = document.getElementById('detail');
      if (e) e.innerHTML = '<div class="hint">暂无数据</div>';
      return false;
    }
    return true;
  }

  function buildCombined(day) {
    var arr = [];
    (day.zt || []).forEach(function (s) { arr.push(s); });
    (day.dt || []).forEach(function (s) { arr.push(s); });
    return arr;
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
      + kpi(s.dt, '跌停家数', 'down')
      + kpi((s.max_board || 0) + ' 板', '最高连板')
      + kpi((s.max_db || 0) + ' 板', '最高连跌')
      + kpi(s.up == null ? '—' : s.up, '上涨家数', 'up')
      + kpi(s.down == null ? '—' : s.down, '下跌家数', 'down')
      + kpi(s.amount == null ? '—' : (s.amount.toLocaleString('en-US') + '亿'), '两市成交额')
      + kpi('<span class="' + dh + '">' + delta + '</span>', '成交额较上日')
      + kpi('<span id="ztAmt">' + (s.zt_amt == null ? '—' : s.zt_amt.toFixed(0) + '亿') + '</span>', '涨停股合计成交额');
    document.getElementById('kpis').innerHTML = h;
  }

  function renderTldr() { document.getElementById('tldr').innerHTML = DAYS[di].tldr || ''; }

  function renderTitle() {
    var day = DAYS[di];
    document.getElementById('ztTitle').textContent =
      '涨停跌停股标签（涨停 ' + day.zt.length + ' / 跌停 ' + day.dt.length + '）';
  }

  function renderMeta() {
    var s = DAYS[di].summary;
    var txt = DAYS[di].date + ' 收盘 · 涨停 ' + s.zt + ' 只 / 跌停 ' + s.dt + ' 只';
    if (s.up != null) txt += ' · 上涨 ' + s.up + ' / 下跌 ' + s.down;
    if (s.amount != null) txt += ' · 两市成交 ' + s.amount.toLocaleString('en-US') + ' 亿';
    if (DAYS[di].source === 'em') txt += ' · 数据：东方财富接口实时获取';
    document.getElementById('metaInfo').textContent = txt;
  }

  function buildTags() {
    var day = DAYS[di];
    combined = buildCombined(day);
    var h = '';
    if (day.zt.length) {
      h += '<span class="sep-tag">涨停 ' + day.zt.length + '</span>';
      for (var i = 0; i < day.zt.length; i++) {
        var s = day.zt[i];
        var cls = s.b >= 3 ? 'b3' : (s.b === 2 ? 'b2' : 'b1');
        var yz = s.yz ? '<i class="yzdot">一字</i>' : '';
        h += '<span class="ztag' + (i === cur ? ' on' : '') + '" data-i="' + i + '">' + esc(s.name)
          + '<em class="bd ' + cls + '">' + (s.b || 0) + '板</em>' + yz + '</span>';
      }
    }
    if (day.dt.length) {
      h += '<span class="sep-tag">跌停 ' + day.dt.length + '</span>';
      for (var j = 0; j < day.dt.length; j++) {
        var t = day.dt[j];
        var idx = day.zt.length + j;
        var dc = t.db >= 3 ? 'd3' : (t.db === 2 ? 'd2' : 'd1');
        var yz2 = t.yz ? '<i class="yzdot">一字</i>' : '';
        h += '<span class="dtag' + (idx === cur ? ' on' : '') + '" data-i="' + idx + '">' + esc(t.name)
          + '<em class="bd ' + dc + '">' + (t.db || 0) + '跌</em>' + yz2 + '</span>';
      }
    }
    if (!h) h = '<div class="hint">当日无涨停/跌停数据</div>';
    document.getElementById('ztags').innerHTML = h;
  }

  function tbl(list, isDt) {
    if (!list || !list.length) return '<div class="hint">暂无数据</div>';
    var h = '<div class="tblwrap"><table class="dt"><thead><tr><th>板块</th><th>层级</th><th>'
      + (isDt ? '跌停数' : '涨停数') + '</th><th>' + (isDt ? '板块内跌停个股' : '板块内涨停个股')
      + '</th><th>板块涨跌</th><th>成交额</th><th>今日主力</th><th>5日主力</th><th>20日主力</th><th>上涨/总数</th></tr></thead><tbody>';
    for (var i = 0; i < list.length; i++) {
      var d = list[i];
      var attr = (d.lv === '概念' && isAttr(d.n)) ? ' <span class="tag attr">属性</span>' : '';
      h += '<tr><td class="nm">' + esc(d.n) + attr + '</td><td>' + d.lv + '</td>'
        + '<td class="' + (isDt ? 'down' : 'up') + '"><b>' + d.z + '</b></td>'
        + '<td class="zn">' + esc(d.zn && d.zn.length ? d.zn.join('、') : '—') + '</td>'
        + '<td>' + cv(d.chg) + '</td><td>' + mv(d.turn) + '</td>'
        + '<td>' + nv(d.net) + '</td><td>' + nv(d.net5) + '</td><td>' + nv(d.net20) + '</td>'
        + '<td class="smtxt">' + esc(d.up || '—') + '</td></tr>';
    }
    return h + '</tbody></table></div>';
  }

  function renderDetail() {
    var s = combined[cur];
    if (!s) { document.getElementById('detail').innerHTML = ''; return; }
    var isDt = s.typ === 'dt';
    var b, bcls, badge, priceHdr, bdHdr;
    if (isDt) {
      b = s.db || 0;
      bcls = b >= 3 ? 'd3' : (b === 2 ? 'd2' : 'd1');
      badge = b + '跌'; priceHdr = '跌停价'; bdHdr = '连跌天数';
    } else {
      b = s.b || 0;
      bcls = b >= 3 ? 'b3' : (b === 2 ? 'b2' : 'b1');
      badge = b + '板'; priceHdr = '涨停价'; bdHdr = '连板高度';
    }
    var yz = s.yz ? '<span class="tag yz">' + (isDt ? '一字跌停' : '一字涨停') + '</span>' : '';
    var amp = (s.prev && s.high !== null && s.low !== null) ? (s.high - s.low) / s.prev * 100 : null;
    var chgRowLabel = isDt ? '跌幅' : '涨幅';
    var chgRowVal = '<b class="' + (s.chg > 0 ? 'up' : (s.chg < 0 ? 'down' : 'flat')) + '">' + (s.chg > 0 ? '+' : '') + fx(s.chg, 2) + '%</b>';
    var priceVal = fx(isDt ? s.floor : s.ceil, 2);
    var bdVal = (isDt ? s.db : s.b) + (isDt ? ' 跌' : ' 板');
    var m = [
      ['收盘价', fx(s.price, 2)],
      [chgRowLabel, chgRowVal],
      [priceHdr, priceVal],
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
      ['股息率TTM', fx(s.div, 2, '%')],
      [bdHdr, bdVal]
    ];
    if (s.fbt || s.lbt) m.push(['首次/最后封板', esc((s.fbt || '—') + ' / ' + (s.lbt || '—'))]);
    var mh = '<div class="mrow">';
    for (var i = 0; i < m.length; i++) { mh += '<div>' + m[i][0] + '<b>' + m[i][1] + '</b></div>'; }
    mh += '</div>';
    var h = '<div class="panel"><div class="dhead"><span class="dname">' + esc(s.name) + '</span>'
      + '<span class="dcode">' + esc(s.code) + '</span>'
      + '<span class="bd ' + bcls + '">' + badge + '</span>' + yz
      + (s.path ? '<span class="dpath">' + esc(s.path) + '</span>' : '') + '</div>' + mh;
    var ctags = [];
    for (var j = 0; j < (s.cons || []).length && ctags.length < 8; j++) { if (!isAttr(s.cons[j].n)) ctags.push(s.cons[j].n); }
    if (ctags.length) h += '<div class="hint" style="margin:0 0 4px">核心概念：' + esc(ctags.join(' · ')) + '</div>';

    if (DAYS[di].source === 'em') {
      // EM 来源：仅含个股所属行业与封板信息，无板块净额/概念，走简化分支
      var ind = (s.inds && s.inds[0] && s.inds[0].n) ? s.inds[0].n : '—';
      h += '<div class="dsec">所属行业<span>东方财富涨停/跌停池返回</span></div>'
        + '<div class="mrow"><div>行业<b>' + esc(ind) + '</b></div>'
        + (s.fund != null ? '<div>封单资金<b>' + (s.fund / 1e8).toFixed(2) + '亿</b></div>' : '')
        + (s.pe != null ? '<div>动态PE<b>' + s.pe.toFixed(1) + '</b></div>' : '')
        + '</div>';
      h += '<div class="note">数据来源：东方财富涨停/跌停池（浏览器实时拉取）。板块主力净额、所属概念等接口未提供，未展示；价格/涨跌幅为所选交易日收盘值。</div>';
    } else {
      h += '<div class="dsec">所属行业与资金<span>申万一级 + 二级；一级行业主力净流入由下辖二级行业汇总</span></div>' + tbl(s.inds, isDt);
      h += '<div class="dsec">所属概念与资金<span>共 ' + (s.cons ? s.cons.length : 0) + ' 个概念，按成交额降序，属性类排末尾</span></div>' + tbl(s.cons, isDt);
      var hasNet = false;
      (s.inds || []).concat(s.cons || []).forEach(function (x) { if (x.net !== null && x.net !== undefined) hasNet = true; });
      if (!hasNet) h += '<div class="note">所选交易日非净额快照日，板块「今日/5日/20日主力净流入」显示「—」，板块涨跌与成交额仍为该日真实值。</div>';
    }
    document.getElementById('detail').innerHTML = h;
  }

  function setDay(i) {
    di = i; cur = 0;
    combined = buildCombined(DAYS[di]);
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
      var all = document.querySelectorAll('#ztags .ztag, #ztags .dtag');
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

  // 若 data.js 已被预加载（兜底），直接渲染；否则等待 live.js 拉取
  if (window.ZT_DAYS && window.ZT_DAYS.length) {
    window.__renderZT(window.ZT_DAYS);
  }
})();

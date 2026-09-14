/* 涨停复盘渲染逻辑（多日版）：
 * 从 window.ZT_DAYS 读取最近 5 个交易日各自的涨停(zt)/跌停(dt)快照，
 * 构建「日期切换 + 涨停跌停合并标签云 + 个股明细 / 所属行业与资金 / 所属概念与资金」。
 * 涨停标签红色、跌停标签绿色（角标为连跌天数），点击切换详情。
 * 实时行情由 live.js 叠加后调用 window.__refreshDetail() 刷新。 */
(function () {
  var DAYS = window.ZT_DAYS || [];
  var ATTR = window.ZT_ATTR || [];
  if (!DAYS.length) {
    var e = document.getElementById('detail');
    if (e) e.innerHTML = '<div class="hint">数据文件未加载：请确认 StockUpDownReview/data.js 与本页面在同一目录。</div>';
    return;
  }
  var di = 0;          // 当前日期索引
  var combined = [];   // 当前日 [zt..., dt...]
  var cur = 0;         // 当前选中个股在 combined 中的索引

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>]/g, function (c) {
      return c == '&' ? '&amp;' : (c == '<' ? '&lt;' : '&gt;'); });
  }
  function isAttr(n) {
    for (var i = 0; i < ATTR.length; i++) {
      if (String(n).toLowerCase().indexOf(ATTR[i].toLowerCase()) >= 0) return true;
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
    var y = t.getFullYear();
    var m = ('0' + (t.getMonth() + 1)).slice(-2);
    var d = ('0' + t.getDate()).slice(-2);
    return ds === (y + '-' + m + '-' + d);
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
    return '<div class="kpi"><b' + (cls ? ' class="' + cls + '"' : '') + '>' + v + '</b><span>' + lab + '</span></div>';
  }
  function renderKPIs() {
    var s = DAYS[di].summary;
    var delta = (s.amount_delta == null) ? '—' : (s.amount_delta > 0 ? '+' : '') + s.amount_delta.toFixed(0) + '亿';
    var dh = s.amount_delta == null ? 'flat' : (s.amount_delta > 0 ? 'up' : 'down');
    var h = ''
      + kpi(s.zt, '涨停家数', 'up')
      + kpi(s.dt, '跌停家数', 'down')
      + kpi(s.max_board + ' 板', '最高连板')
      + kpi(s.max_db + ' 板', '最高连跌')
      + kpi(s.up, '上涨家数', 'up')
      + kpi(s.down, '下跌家数', 'down')
      + kpi(s.amount.toLocaleString('en-US') + '亿', '两市成交额')
      + kpi('<span class="' + dh + '">' + delta + '</span>', '成交额较上日')
      + kpi('<span id="ztAmt">' + s.zt_amt.toFixed(0) + '亿</span>', '涨停股合计成交额');
    document.getElementById('kpis').innerHTML = h;
  }

  function renderTldr() { document.getElementById('tldr').innerHTML = DAYS[di].tldr; }

  function renderTitle() {
    var day = DAYS[di];
    document.getElementById('ztTitle').textContent =
      '涨停跌停股标签（涨停 ' + day.zt.length + ' / 跌停 ' + day.dt.length + '）';
  }

  function renderMeta() {
    var s = DAYS[di].summary;
    document.getElementById('metaInfo').textContent =
      DAYS[di].date + ' 收盘 · 涨停 ' + s.zt + ' 只 / 跌停 ' + s.dt + ' 只 · 上涨 ' +
      s.up + ' / 下跌 ' + s.down + ' · 两市成交 ' + s.amount.toLocaleString('en-US') + ' 亿';
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
          + '<em class="bd ' + cls + '">' + s.b + '板</em>' + yz + '</span>';
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
          + '<em class="bd ' + dc + '">' + t.db + '跌</em>' + yz2 + '</span>';
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
    var b, bcls, badge, yzhdr, priceHdr, bdHdr;
    if (isDt) {
      b = s.db || 0;
      bcls = b >= 3 ? 'd3' : (b === 2 ? 'd2' : 'd1');
      badge = b + '跌';
      priceHdr = '跌停价';
      bdHdr = '连跌天数';
    } else {
      b = s.b || 0;
      bcls = b >= 3 ? 'b3' : (b === 2 ? 'b2' : 'b1');
      badge = b + '板';
      priceHdr = '涨停价';
      bdHdr = '连板高度';
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
      ['成交额', s.amt ? (s.amt / 1e8).toFixed(2) + '亿' : '—'],
      ['换手率', fx(s.tr, 2, '%')],
      ['量比', fx(s.vr, 2)],
      ['总市值', s.mc ? s.mc.toFixed(1) + '亿' : '—'],
      ['流通市值', s.cm ? s.cm.toFixed(1) + '亿' : '—'],
      ['PE-TTM', fx(s.pe, 1)],
      ['股息率TTM', fx(s.div, 2, '%')],
      [bdHdr, bdVal]
    ];
    var mh = '<div class="mrow">';
    for (var i = 0; i < m.length; i++) { mh += '<div>' + m[i][0] + '<b>' + m[i][1] + '</b></div>'; }
    mh += '</div>';
    var h = '<div class="panel"><div class="dhead"><span class="dname">' + esc(s.name) + '</span>'
      + '<span class="dcode">' + esc(s.code) + '</span>'
      + '<span class="bd ' + bcls + '">' + badge + '</span>' + yz
      + '<span class="dpath">' + esc(s.path) + '</span></div>' + mh;
    var ctags = [];
    for (var j = 0; j < s.cons.length && ctags.length < 8; j++) { if (!isAttr(s.cons[j].n)) ctags.push(s.cons[j].n); }
    if (ctags.length) h += '<div class="hint" style="margin:0 0 4px">核心概念：' + esc(ctags.join(' · ')) + '</div>';
    h += '</div>';
    h += '<div class="dsec">所属行业与资金<span>申万一级 + 二级；一级行业主力净流入由下辖二级行业汇总</span></div>' + tbl(s.inds, isDt);
    h += '<div class="dsec">所属概念与资金<span>共 ' + s.cons.length + ' 个概念，按成交额降序，属性类排末尾</span></div>' + tbl(s.cons, isDt);
    // 历史日净额提示
    var hasNet = false;
    (s.inds || []).concat(s.cons || []).forEach(function (x) { if (x.net !== null && x.net !== undefined) hasNet = true; });
    if (!hasNet) h += '<div class="note">所选交易日非净额快照日，板块「今日/5日/20日主力净流入」显示「—」，板块涨跌与成交额仍为该日真实值。</div>';
    document.getElementById('detail').innerHTML = h;
  }

  function setDay(i) {
    di = i;
    cur = 0;
    combined = buildCombined(DAYS[di]);
    renderDates();
    renderMeta();
    renderKPIs();
    renderTldr();
    renderTitle();
    buildTags();
    renderDetail();
    window.__curDayIndex = di;
  }

  document.getElementById('dates').addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('.datebtn') : null;
    if (!t) return;
    var i = parseInt(t.getAttribute('data-i'), 10);
    if (!isNaN(i)) setDay(i);
  });

  document.getElementById('ztags').addEventListener('click', function (e) {
    var t = e.target;
    while (t && t.className && String(t.className).indexOf('tag') < 0) { t = t.parentNode; }
    if (!t || !t.getAttribute) return;
    var i = t.getAttribute('data-i');
    if (i === null) return;
    cur = parseInt(i, 10);
    var all = document.querySelectorAll('#ztags .ztag, #ztags .dtag');
    for (var k = 0; k < all.length; k++) {
      var cls = String(all[k].className).replace(' on', '');
      all[k].className = cls;
    }
    t.className = t.className + ' on';
    renderDetail();
    var d = document.getElementById('detail');
    if (d) d.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  window.__refreshDetail = function () { renderDetail(); };
  window.__curDayIndex = di;

  setDay(0);
})();

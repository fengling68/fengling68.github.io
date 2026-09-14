// 选股面板渲染逻辑（被 live.js 调用）。数据全部由 live.js 实时获取，本文件仅负责渲染。
// 调用： window.__renderPick(window.PICK_DATA)
window.__renderPick = function (D) {
  if (!D) return;


  var COLS = [
    { t: '代码', k: 0, c: 'code l', ci: 1 },
    { t: '名称', k: 1, c: 'nm l', ci: 1, click: 1 },
    { t: '命中标记', cz: 1, c: 'tagline l' },
    { t: '国资标签', cg: 1, c: 'tagline l' },
    { t: '价格', k: 2, fix: 2 },
    { t: '涨跌%', k: 3, cls: 'chg' },
    { t: '成交额(亿)', k: 10 },
    { t: '换手%', k: 9 },
    { t: '总市值(亿)', k: 4 },
    { t: '流通市值(亿)', k: 5, opt: 1 },
    { t: 'PE', k: 6 },
    { t: 'PB', k: 7, opt: 1 },
    { t: '股息率%', k: 8, hi: 5 },
    { t: '申万二级', k: 15, c: 'ind l', opt: 1, sort: function (s) { return s[15] || ''; } },
    { t: '申万一级', k: 16, c: 'ind l', sort: function (s) { return s[16] || ''; } }
  ];

  var cur1 = 0, cur2 = 0, curF = 'all', kw = '', sortKey = -1, sortAsc = false;
  var rows = [], shown = 0, PAGE = 120;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>]/g, function (c) {
      return c === '&' ? '&amp;' : (c === '<' ? '&lt;' : '&gt;');
    });
  }
  function num(v) { return (v === null || v === undefined || v === '') ? null : Number(v); }
  function cls(v) { return v === null ? 'flat' : (v > 0 ? 'up' : (v < 0 ? 'down' : 'flat')); }
  function fmt(v, fix) {
    v = num(v);
    if (v === null || isNaN(v)) return '—';
    return v.toFixed(fix === undefined ? 2 : fix);
  }
  function fmtInt(v) {
    v = num(v);
    if (v === null || isNaN(v)) return '—';
    return Math.round(v).toLocaleString('en-US');
  }

  /* ---------- 顶部信息 ---------- */
  document.getElementById('metaInfo').textContent =
    '实时选股 · ' + D.date + ' · 全市场 ' + D.universe + ' 只 · 入选 ' + D.count + ' 只 · 行情实时刷新';
  document.getElementById('badges').innerHTML =
    '<span class="badge">选股逻辑：浏览器实时计算</span>' +
    '<span class="badge">价格：腾讯接口实时</span>' +
    '<span class="badge">股东户数：点击个股查询</span>' +
    '<span class="badge">红涨 / 绿跌</span>';

  /* ---------- 一级 Tab ---------- */
  var COL_DIV = COLS.findIndex(function (c) { return c.k === 8; });  // 股息率列，高分红 Tab 默认排序
  function defaultSort() {
    var tb = D.tabs[cur1];
    sortKey = tb.sort ? COL_DIV : -1;
    sortAsc = false;
  }
  var t1 = document.getElementById('tabs1');
  D.tabs.forEach(function (tb, i) {
    var d = document.createElement('div');
    d.className = 'tab' + (i === 0 ? ' on' : '');
    d.innerHTML = esc(tb.name) + '<span>' + tb.codes.length + '</span>';
    d.onclick = function () {
      cur1 = i; cur2 = firstNonEmpty(D.tabs[i]); curF = 'all'; shown = 0;
      defaultSort();
      renderTabs(); renderSub(); renderChips(); renderHead(); render();
    };
    t1.appendChild(d);
  });
  function renderTabs() {
    var cs = t1.children;
    for (var i = 0; i < cs.length; i++) cs[i].className = 'tab' + (i === cur1 ? ' on' : '');
  }

  /* ---------- 二级 Tab ---------- */
  var t2 = document.getElementById('tabs2');
  /* 默认选中的二级 Tab：优先取数据里的 def，否则取第一个非空 Tab */
  function firstNonEmpty(tb) {
    if (tb.def != null && tb.subs[tb.def] && tb.subs[tb.def].codes.length) {
      return tb.def;
    }
    for (var i = 0; i < tb.subs.length; i++) {
      if (tb.subs[i].codes.length) return i;
    }
    return 0;
  }
  function renderSub() {
    var tb = D.tabs[cur1];
    if (cur2 >= tb.subs.length) cur2 = 0;
    t2.innerHTML = '';
    tb.subs.forEach(function (s, i) {
      var d = document.createElement('div');
      d.className = 'stab' + (i === cur2 ? ' on' : '') + (s.codes.length ? '' : ' z0');
      d.innerHTML = esc(s.name) + '<i>' + s.codes.length + '</i>';
      d.onclick = function () { cur2 = i; shown = 0; renderSub(); renderChips(); render(); };
      t2.appendChild(d);
    });
  }

  /* ---------- 三级筛选（数据类型） ---------- */
  var chipBox = document.getElementById('chips');
  function renderChips() {
    var tb = D.tabs[cur1];
    chipBox.innerHTML = '';
    if (!tb.filter) return;
    var all = document.createElement('span');
    all.className = 'chip' + (curF === 'all' ? ' on' : '');
    all.textContent = '全部';
    all.onclick = function () { curF = 'all'; shown = 0; renderChips(); render(); };
    chipBox.appendChild(all);
    tb.filter.options.forEach(function (o) {
      var d = document.createElement('span');
      d.className = 'chip' + (curF === o[0] ? ' on' : '');
      d.textContent = o[1];
      d.onclick = function () { curF = o[0]; shown = 0; renderChips(); render(); };
      chipBox.appendChild(d);
    });
  }

  /* ---------- 当前列表 ---------- */
  function curCodes() {
    var tb = D.tabs[cur1], sb = tb.subs[cur2] || tb.subs[0];
    var cs = sb.codes || [];
    if (tb.filter && curF !== 'all' && sb.extra && sb.extra[curF]) cs = sb.extra[curF];
    if (kw) {
      var q = kw.toLowerCase();
      cs = cs.filter(function (c) {
        var s = D.stocks[c];
        return c.indexOf(q) >= 0 || String(s[1]).toLowerCase().indexOf(q) >= 0 ||
          String(s[15] || '').toLowerCase().indexOf(q) >= 0 ||
          String(s[16] || '').toLowerCase().indexOf(q) >= 0;
      });
    }
    return cs.filter(function (c) { return D.stocks[c]; });
  }

  function sortVal(s, col) {
    if (col.ci) return col.k === 0 ? s[0] : s[1];
    if (col.sort) return col.sort(s);
    var v = num(s[col.k]);
    return (v === null || isNaN(v)) ? -1e9 : v;
  }

  /* ---------- 表头 ---------- */
  var thead = document.getElementById('thead');
  function renderHead() {
    var tb = D.tabs[cur1];
    var h = '<tr>';
    COLS.forEach(function (c, i) {
      if (c.cz && !tb.filter) return;
      if (c.cg && !tb.tag) return;
      var opt = c.opt ? ' col-opt' : '';
      var sorted = sortKey === i ? ' sorted' : '';
      h += '<th class="' + (c.c || '') + opt + sorted + '" data-i="' + i + '">' +
        esc(c.t) + (sortKey === i ? '<span class="ar">' + (sortAsc ? '▲' : '▼') + '</span>' : '') + '</th>';
    });
    document.getElementById('thead').innerHTML = h + '</tr>';
    var ths = thead.querySelectorAll('th');
    for (var j = 0; j < ths.length; j++) {
      ths[j].onclick = function () {
        var i = parseInt(this.getAttribute('data-i'), 10);
        if (sortKey === i) sortAsc = !sortAsc;
        else { sortKey = i; sortAsc = false; }
        shown = 0; renderHead(); render();
      };
    }
  }

  /* ---------- 表格行 ---------- */
  var tbody = document.getElementById('tbody');
  function rowHtml(s) {
    var tb = D.tabs[cur1], h = '<tr>';
    COLS.forEach(function (c) {
      if (c.cz && !tb.filter) return;
      if (c.cg && !tb.tag) return;
      var v = '', cl = '';
      var clsa = [];
      if (c.c) clsa.push(c.c);
      if (c.opt) clsa.push('col-opt');
      if (c.cz) {
        var hits = (D.meta.z || {})[s[0]] || [];
        v = hits.map(function (x) {
          var mk = x[1] === '字' ? 'z' : (x[1] === '音' ? 'y' : 't');
          return '<span class="mk ' + mk + '">' + esc(D.zodiacNames[x[0]]) + ' ' + esc(x[1]) +
            '·' + esc(x[2]) + '</span>';
        }).join('');
        h += '<td class="tagline">' + (v || '—') + '</td>'; return;
      }
      if (c.cg) {
        var gs = (D.meta.g || {})[s[0]] || [];
        v = gs.map(function (x) { return '<span class="gtag">' + esc(x) + '</span>'; }).join('');
        h += '<td class="tagline">' + (v || '—') + '</td>'; return;
      }
      if (c.cls === 'chg') {
        cl = cls(s[c.k]);
        v = s[c.k] === null || s[c.k] === undefined ? '—' :
          '<span class="' + cl + '">' + (s[c.k] > 0 ? '+' : '') + fmt(s[c.k]) + '</span>';
      } else if (c.k === 15 || c.k === 16) {
        v = esc(s[c.k] || '—');
      } else if (c.k === 0 || c.k === 1) {
        v = esc(s[c.k]);
      } else {
        var x = num(s[c.k]);
        v = (x === null || isNaN(x)) ? '—' : x.toFixed(c.fix === undefined ? 2 : c.fix);
        if (c.hi && x !== null && x >= c.hi) v = '<b class="up">' + v + '</b>';
      }
      h += '<td' + (clsa.length ? ' class="' + clsa.join(' ') + '"' : '') + '>' + v + '</td>';
    });
    return h + '</tr>';
  }

  /* ---------- 渲染 ---------- */
  function render() {
    var tb = D.tabs[cur1];
    var cs = curCodes();
    rows = cs.map(function (c) { return D.stocks[c]; });
    if (sortKey >= 0) {
      var col = COLS[sortKey];
      rows.sort(function (a, b) {
        var x = sortVal(a, col), y = sortVal(b, col);
        if (typeof x === 'string') return sortAsc ? x.localeCompare(y) : y.localeCompare(x);
        return sortAsc ? x - y : y - x;
      });
    }
    document.getElementById('cnt').innerHTML =
      '<b>' + rows.length + '</b> 只 · ' + esc(tb.name) + ' / ' +
      esc((tb.subs[cur2] || {}).name || '') +
      (curF !== 'all' && tb.filter ? ' / ' + esc(curF === '字' ? '同字' : curF === '音' ? '同音' : '主题') : '');
    tbody.innerHTML = '';
    document.getElementById('empty').style.display = rows.length ? 'none' : '';
    shown = 0;
    append();
  }

  function append() {
    if (shown >= rows.length) { document.getElementById('loading').style.display = 'none'; return; }
    document.getElementById('loading').style.display = rows.length > shown ? '' : 'none';
    var end = Math.min(shown + PAGE, rows.length), h = '';
    for (var i = shown; i < end; i++) h += rowHtml(rows[i]);
    var start = tbody.children.length;
    tbody.insertAdjacentHTML('beforeend', h);
    for (var j = start; j < tbody.children.length; j++) {
      (function (el, idx) {
        el.style.cursor = 'pointer';
        el.title = '点击查看实时股东户数';
        el.onclick = function () {
          var s = rows[idx];
          if (window.__pickRow) window.__pickRow(s[0], s[1]);
        };
      })(tbody.children[j], shown + (j - start));
    }
    shown = end;
  }

  document.getElementById('tblwrap').addEventListener('scroll', function () {
    if (this.scrollTop + this.clientHeight >= this.scrollHeight - 400) append();
  });
  document.getElementById('q').addEventListener('input', function () {
    kw = this.value.trim(); shown = 0; render();
  });

  /* ---------- 说明：标题栏「?」悬浮提示（点击展开 / 点击别处收起） ---------- */
  var helpPop = document.getElementById('helpPop');
  helpPop.innerHTML =
    '<b>口径</b>：本页<b>无任何预生成死文件</b>。选股池与筛选结果由页面在<b>浏览器内实时计算</b>：' +
    '全市场代码 / 名称 / 股息率(TTM) 取自东方财富批量行情（clist），价格 / 涨跌幅% / 成交额 / PE / 市值 / PB 等通过腾讯公开接口（qt.gtimg.cn）实时叠加；' +
    '生肖 / 高分红 / 央地国资 / 国企改革四类筛选均按当日行情重算。<br>' +
    '<b>股东户数（点击查询）</b>：点击任意一行，实时拉取东方财富 F10 最新一期股东户数（总户数、户数环比、户均持股 / 市值、筹码集中度）；' +
    '股东户数按上市公司报告期披露，<b>非逐笔实时</b>，但每次点击取到的都是最新披露值。<br>' +
    '<b>筛选</b>：生肖按名称「同字 / 同音（拼音一致）/ 生肖主题词」三类命中；高分红按股息率 TTM 分档（2% ~ 8% 以上共 7 档）；' +
    '央地国资按「中字头、央企央资、大央企重组、军工央企」及各地方国资改革概念成份股归并；' +
    '国企改革为独立维度（' + ((D.tabs[3] || {}).codes || []).length + ' 只），按央企系 / 地方国资 / 中字头 / 大央企重组 / 军工央企 / 国资云 / 其他拆分。<br>' +
    '<b>数据</b>：东方财富 / 腾讯公开行情接口，可能存在延迟，以交易所和上市公司公告为准。' +
    '本页仅为公开数据整理与展示，不构成投资建议，市场有风险，投资需谨慎。';

  var helpBtn = document.getElementById('helpBtn');
  helpBtn.onclick = function (e) {
    e.stopPropagation();
    helpPop.classList.toggle('on');
  };
  helpPop.onclick = function (e) { e.stopPropagation(); };
  document.addEventListener('click', function () { helpPop.classList.remove('on'); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') helpPop.classList.remove('on');
  });

  defaultSort();
  cur2 = firstNonEmpty(D.tabs[cur1]);
  renderSub(); renderChips(); renderHead(); render();

}

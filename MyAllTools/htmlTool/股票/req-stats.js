/* 页面接口请求统计（两页共享）：劫持动态 <script src>（JSONP）与 fetch，
   按「主机 + 接口路径」聚合计数；在标题栏问号右侧注入一个小图标，
   点击弹出统计面板（接口 / 次数 / 合计 / 耗时）。仅统计运行期数据请求，
   不含静态 js/css 资源与页面自身的 <script src> 标签（那些在劫持安装前已加载）。 */
(function () {
  'use strict';

  var stats = {};   // key(host+path) -> {host, path, count, first, last}
  var t0 = null;    // 首个请求时间
  var open = false, timer = null, btn, pop;

  /* 接口友好名（按归一化后的 path 匹配） */
  var LABELS = {
    '/api/qt/clist/get': '东财 clist · 全市场清单 / 探测（分页拉取）',
    '/api/qt/stock/get': '东财 stock · 个股详情',
    '/api/qt/ulist.np/get': '东财 ulist · 批量行情',
    '/q=': '腾讯 qt · 批量实时行情（个股 / 板块）'
  };

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* 归一化：host + path；腾讯批量行情的股票代码在 path 里（/q=sh600000,...），截断到 '=' */
  function keyOf(url) {
    var host = '', path = '';
    try {
      var u = new URL(String(url), (typeof location !== 'undefined' && location.href) || 'http://localhost/');
      host = u.host; path = u.pathname || '/';
    } catch (e) {
      var m = String(url).match(/^https?:\/\/([^\/?#]+)([^?#]*)/);
      if (m) { host = m[1]; path = m[2] || '/'; }
      else { host = '(other)'; path = String(url).slice(0, 40); }
    }
    var eq = path.indexOf('=');
    if (eq > -1 && eq < 12) path = path.slice(0, eq + 1) + '…';
    return { host: host, path: path || '/' };
  }

  function record(url) {
    url = String(url || '');
    if (!/^https?:/i.test(url)) return;   // 忽略内联 / 相对地址
    var k = keyOf(url), key = k.host + k.path, now = Date.now();
    if (t0 == null) t0 = now;
    var it = stats[key];
    if (!it) it = stats[key] = { host: k.host, path: k.path, count: 0, first: now, last: 0 };
    it.count++; it.last = now;
  }

  /* ---------- 劫持 ---------- */
  try {
    var d = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, 'src');
    if (d && d.set && d.configurable) {
      Object.defineProperty(HTMLScriptElement.prototype, 'src', {
        set: function (v) { try { record(v); } catch (e) {} return d.set.call(this, v); },
        get: function () { return d.get.call(this); },
        configurable: true
      });
    }
  } catch (e) {}
  try {
    var of_ = window.fetch;
    if (of_) {
      window.fetch = function (input) {
        try { record(typeof input === 'string' ? input : (input && input.url)); } catch (e) {}
        return of_.apply(this, arguments);
      };
    }
  } catch (e) {}

  /* ---------- UI ---------- */
  var CSS = '' +
    '.rs-btn{cursor:pointer;display:inline-flex;align-items:center;justify-content:center;' +
    'width:16px;height:16px;border-radius:50%;font-size:10px;line-height:1;font-weight:700;' +
    'background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.4);' +
    'color:#fff;user-select:none;flex:none}' +
    '.rs-btn:hover{background:rgba(255,255,255,.36)}' +
    '.rs-pop{display:none;position:absolute;top:24px;left:0;z-index:70;width:660px;max-width:86vw;' +
    'padding:12px 14px;background:#fff;color:#454b53;border:1px solid #dfe4ea;border-radius:9px;' +
    'box-shadow:0 8px 24px rgba(20,30,45,.18);font-size:12px;line-height:1.5}' +
    '.rs-pop.on{display:block}' +
    '.rs-pop h3{margin:0 0 8px;font-size:13px;color:#1b3a5c}' +
    '.rs-pop table{width:100%;border-collapse:collapse;font-size:11.5px}' +
    '.rs-pop th,.rs-pop td{padding:4px 6px;border-bottom:1px solid #eef2f6;text-align:left;vertical-align:top}' +
    '.rs-pop th{color:#8a9099;font-weight:600;font-size:11px;white-space:nowrap}' +
    '.rs-pop td.n{text-align:right;font-variant-numeric:tabular-nums;font-weight:600;color:#1c2026;white-space:nowrap}' +
    '.rs-pop .host{color:#8a9099;font-size:10.5px}' +
    '.rs-pop .rsub{color:#8a9099;font-size:10.5px;margin-top:8px}';

  function renderPop() {
    if (!pop) return;
    var rows = Object.keys(stats).map(function (k) { return stats[k]; })
      .sort(function (a, b) { return b.count - a.count; });
    var total = rows.reduce(function (s, r) { return s + r.count; }, 0);
    var hostTotals = {};
    rows.forEach(function (r) { hostTotals[r.host] = (hostTotals[r.host] || 0) + r.count; });
    var html = '<h3>接口请求统计</h3>';
    if (!rows.length) {
      html += '<div class="rsub">页面加载后暂无数据请求。</div>';
    } else {
      html += '<table><tr><th>接口</th><th style="text-align:right">次数</th></tr>';
      rows.forEach(function (r) {
        var lb = LABELS[r.path] || '';
        html += '<tr><td>' + esc(r.path) +
          '<div class="host">' + (lb ? esc(lb) + ' · ' : '') + esc(r.host) + '</div></td>' +
          '<td class="n">' + r.count + '</td></tr>';
      });
      html += '</table>';
      html += '<div class="rsub">合计 ' + total + ' 次请求，自首个请求起 ' +
        ((Date.now() - t0) / 1000).toFixed(0) + ' 秒';
      var hs = Object.keys(hostTotals).map(function (h) {
        return esc(h) + ' ×' + hostTotals[h];
      }).join('，');
      if (hs) html += '（' + hs + '）';
      html += '</div>';
    }
    pop.innerHTML = html;
  }

  function openit() {
    open = true;
    if (pop) pop.classList.add('on');
    renderPop();
    timer = setInterval(renderPop, 1000);   // 面板打开期间每秒刷新
  }
  function close() {
    open = false;
    if (pop) pop.classList.remove('on');
    if (timer) { clearInterval(timer); timer = null; }
  }

  function init() {
    var ttl = document.querySelector('.ttl');
    if (!ttl || document.getElementById('rsBtn')) return;
    var st = document.createElement('style');
    st.textContent = CSS;
    document.head.appendChild(st);

    btn = document.createElement('span');
    btn.className = 'rs-btn'; btn.id = 'rsBtn';
    btn.title = '接口请求统计'; btn.textContent = 'Σ';

    pop = document.createElement('div');
    pop.className = 'rs-pop'; pop.id = 'rsPop';

    btn.onclick = function (e) { e.stopPropagation(); open ? close() : openit(); };
    document.addEventListener('click', function (e) {
      if (open && pop && !pop.contains(e.target) && e.target !== btn) close();
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

    ttl.appendChild(btn);   /* 位于问号 icon 之后（helpPop 为绝对定位不占位） */
    ttl.appendChild(pop);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* 调试 / 测试入口 */
  window.__reqStats = {
    record: record,
    count: function () {
      return Object.keys(stats).reduce(function (s, k) { return s + stats[k].count; }, 0);
    },
    detail: function () { return JSON.parse(JSON.stringify(stats)); }
  };
})();

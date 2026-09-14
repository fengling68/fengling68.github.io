/* 板块全景实时叠加：
 * 打开页面时，用 JSONP 直连腾讯公开行情接口 qt.gtimg.cn，
 * 拉取页面上所有领涨股（.lead 行内 .lcode 标注 data-code）的实时行情，
 * 刷新其「涨跌幅% / 总市值 / PE」。板块与概览的聚合数据为快照，不刷新。
 * 不依赖任何常驻服务；直接双击打开本页面即可（需联网）。 */
(function () {
  var leads = [].slice.call(document.querySelectorAll('.lead'));
  var map = {};
  var codes = [];
  leads.forEach(function (ld) {
    var lc = ld.querySelector('.lcode[data-code]');
    if (lc) {
      var c = lc.getAttribute('data-code');
      if (c && !map[c]) { map[c] = ld; codes.push(c); }
    }
  });
  if (!codes.length) return;

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
    var ld = map[code];
    if (!ld) return;
    var num = function (v) { return (v === '' || v == null) ? null : Number(v); };
    var chg = num(a[32]);
    var lchg = ld.querySelector('.lchg');
    if (lchg && chg != null) {
      lchg.textContent = (chg > 0 ? '+' : '') + chg.toFixed(2) + '%';
      lchg.className = 'lchg ' + (chg > 0 ? 'up' : (chg < 0 ? 'down' : 'flat'));
    }
    var pe = num(a[39]);
    var lpe = ld.querySelector('.lpe');
    if (lpe && pe != null) lpe.textContent = pe.toFixed(1);
    var mv = num(a[45]);
    var lmc = ld.querySelector('.lmc');
    if (lmc && mv != null) lmc.textContent = Math.round(mv).toLocaleString('en-US') + '亿';
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
  function setStatus(txt) {
    var el = document.getElementById('liveStatus');
    if (el) el.textContent = txt;
  }
  var i = 0, total = codes.length;
  function next() {
    if (i >= total) { finish(); return; }
    setStatus('正在拉取实时行情… ' + Math.min(i + BATCH, total) + '/' + total);
    fetchBatch(codes.slice(i, i + BATCH), function () {
      i += BATCH;
      setTimeout(next, 0);
    });
  }
  function finish() {
    var hh = qtime ? (qtime.slice(8, 10) + ':' + qtime.slice(10, 12)) : '';
    var meta = document.getElementById('metaInfo');
    if (meta) {
      meta.textContent = (hh ? '实时行情 · 接口时间 ' + hh + ' · ' : '实时行情 · ')
        + '覆盖 ' + total + ' 只领涨股' + (ok ? '（已刷新现价/涨跌/市值/PE）' : '（接口未连接，显示快照值）');
    }
    setStatus('实时更新 ' + ok + ' 只' + (fail ? '，未取到 ' + fail + ' 只' : ''));
    var sb = document.getElementById('snapBadge');
    if (sb) sb.textContent = '行情实时' + (hh ? '（接口 ' + hh + '）' : '') + ' · 板块资金 2026-09-10 收盘快照';
    var hp = document.getElementById('helpPop');
    if (hp) hp.innerHTML += '<br><b>实时</b>：领涨股的现价/涨跌幅%/总市值/PE 为打开页面时腾讯公开接口（qt.gtimg.cn）实时值，叠加覆盖快照；板块聚合、概览与资金为快照数据。';
  }
  next();
})();

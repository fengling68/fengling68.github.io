/* 实时版入口：
 * 每次打开页面，用 JSONP 直连腾讯公开行情接口 qt.gtimg.cn，
 * 拉取所有候选股的「现价 / 涨跌幅% / PE / 流通&总市值 / PB / 成交额」实时值，
 * 叠加覆盖到 picks-data.js 的快照上，再交给 render.js 渲染。
 * 不依赖任何常驻服务；直接双击打开本页面即可（需联网）。
 * 注：股息率 / 5日% / 年内% / 52周高低 / 换手% 接口未提供，沿用快照值，运行 build_pick.py 可刷新。
 */
(function () {
  var D = window.PICK_DATA;
  if (!D) {
    if (document.getElementById('empty')) {
      document.getElementById('empty').style.display = '';
      document.getElementById('empty').textContent =
        '数据文件未加载：请确认 picks-data.js / holders.js 与本页面在同一目录。';
    }
    return;
  }
  var S = D.stocks;
  var codes = Object.keys(S);
  var BATCH = 100;
  var qtime = '';
  var ok = 0, fail = 0;

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
    var s = S[code]; if (!s) return;
    var num = function (v) { return (v === '' || v == null) ? null : Number(v); };
    s[2] = num(a[3]);                       // 现价
    s[3] = num(a[32]);                      // 涨跌幅%
    s[4] = num(a[45]);                      // 总市值(亿)
    s[5] = num(a[44]);                      // 流通市值(亿)
    s[6] = num(a[39]);                      // PE(TTM)
    s[7] = num(a[46]);                      // PB
    s[10] = num(a[57]) != null ? num(a[57]) / 1e4 : null; // 成交额(万)->亿
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

  // 顺序拉取，全部完成后渲染
  var i = 0;
  function next() {
    if (i >= codes.length) {
      finish();
      return;
    }
    setStatus('正在拉取实时行情… ' + Math.min(i + BATCH, codes.length) + '/' + codes.length);
    fetchBatch(codes.slice(i, i + BATCH), function () {
      i += BATCH;
      // 让出一帧，避免卡顿
      setTimeout(next, 0);
    });
  }

  function finish() {
    var hh = qtime ? (qtime.slice(8, 10) + ':' + qtime.slice(10, 12)) : '';
    var head = document.getElementById('metaInfo');
    if (head) {
      head.textContent = (hh ? '实时行情 · 接口时间 ' + hh + ' · ' : '实时行情 · ')
        + '选股池 ' + D.date + ' 收盘快照'
        + ' · 全市场 ' + D.universe + ' 只 · 入选 ' + D.count + ' 只'
        + (ok ? '（价格已实时刷新）' : '（接口未连接，显示 ' + D.date + ' 快照值）');
    }
    setStatus('实时更新 ' + ok + ' 只' + (fail ? '，未取到 ' + fail + ' 只' : ''));
    // 渲染
    window.__renderPick(D);
    // 在说明浮层追加实时口径
    var hp = document.getElementById('helpPop');
    if (hp) {
      hp.innerHTML += '<br><b>实时</b>：价格 / 涨跌幅% / PE / 流通与总市值 / PB / 成交额 为打开页面时'
        + '腾讯公开接口（qt.gtimg.cn）实时值；股息率 / 5日% / 年内% / 52周高低 / 换手% 接口未提供，'
        + '沿用快照值，运行 <code>build_pick.py</code> 可刷新。';
    }
  }

  next();
})();

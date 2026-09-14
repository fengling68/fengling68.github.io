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
    if (sb) sb.textContent = '行情实时' + (hh ? '（接口 ' + hh + '）' : '') + ' · 板块涨跌/成交额实时 · 主力资金 2026-09-10 收盘快照';
    var hp = document.getElementById('helpPop');
    if (hp) hp.innerHTML += '<br><b>实时</b>：领涨股的现价/涨跌幅%/总市值/PE，以及各板块的当日涨跌幅与成交额，为打开页面时腾讯公开接口（qt.gtimg.cn）实时值，叠加覆盖快照；板块主力资金、上涨/总数、领涨股、概览聚合与估值为快照数据。';
  }
  next();
})();

/* ---------- 板块实时叠加：涨跌幅 + 成交额 ----------
 * 腾讯行情接口直接支持板块代码（pt01 行业 / pt02 概念），
 * 与页面快照同一数据口径（腾讯聚源），按板块代码精确刷新，无需名称匹配。
 * 覆盖：行业/概念赛道卡片（.card[data-code]）、概念全量 CON 数组与标签云配色、当前打开的概念详情。 */
(function () {
  function parseVar(code) {
    var raw = window['v_' + code];
    if (typeof raw !== 'string') return null;
    var m = raw.match(/^"([\s\S]*)"$/);
    var str = m ? m[1] : raw;
    if (!str || str.indexOf('~') < 0) return null;
    return str.split('~');
  }
  function setStatus(txt) {
    var el = document.getElementById('liveStatus');
    if (el) el.textContent = txt;
  }

  var cardsBy = {};
  document.querySelectorAll('.card[data-code]').forEach(function (card) {
    var c = card.getAttribute('data-code');
    if (c) (cardsBy[c] = cardsBy[c] || []).push(card);
  });
  var conBy = {};
  (window.CON || []).forEach(function (d, i) {
    if (d && d.c) (conBy[d.c] = conBy[d.c] || []).push(i);
  });
  var chipBy = {};
  document.querySelectorAll('#chips .chip[data-i]').forEach(function (chip) {
    var i = parseInt(chip.dataset.i, 10);
    var d = (window.CON || [])[i];
    if (d && d.c) (chipBy[d.c] = chipBy[d.c] || []).push(chip);
  });
  var codes = {}, list = [];
  Object.keys(cardsBy).forEach(function (c) { if (!codes[c]) { codes[c] = 1; list.push(c); } });
  Object.keys(conBy).forEach(function (c) { if (!codes[c]) { codes[c] = 1; list.push(c); } });
  if (!list.length) return;

  var B = 100, i = 0, bOk = 0;
  function apply(code, a) {
    var chg = a[32] === '' || a[32] == null ? null : Number(a[32]);   // 涨跌幅%
    var turn = a[38] === '' || a[38] == null ? null : Number(a[38]);  // 成交额(万)
    if (chg == null && turn == null) return;
    bOk++;
    (cardsBy[code] || []).forEach(function (card) {
      var cs = card.querySelector('.cchg span');
      if (cs && chg != null) {
        cs.textContent = (chg > 0 ? '+' : '') + chg.toFixed(2) + '%';
        cs.className = chg > 0 ? 'up' : (chg < 0 ? 'down' : 'flat');
      }
      if (turn != null) {
        card.querySelectorAll('.metrics .m').forEach(function (m) {
          var b = m.querySelector('b');
          if (b && b.textContent === '成交额')
            m.innerHTML = '<b>成交额</b>' + (turn / 1e4).toLocaleString('en-US', { maximumFractionDigits: 1 }) + '亿';
        });
      }
    });
    (conBy[code] || []).forEach(function (idx) {
      var d = (window.CON || [])[idx];
      if (!d) return;
      if (chg != null) d.chg = chg;
      if (turn != null) d.turn = turn;
    });
    (chipBy[code] || []).forEach(function (chip) {
      if (chg == null) return;
      chip.classList.remove('up', 'down', 'flat');
      if (chg !== 0) chip.classList.add(chg > 0 ? 'up' : 'down');
    });
  }
  function fetchBatch(batch, cb) {
    var s = document.createElement('script');
    s.type = 'text/javascript'; s.charset = 'gbk';
    s.src = 'https://qt.gtimg.cn/q=' + batch.join(',') + '&_=' + Date.now();
    s.onload = s.onerror = function () {
      try { document.body.removeChild(s); } catch (e) {}
      batch.forEach(function (code) {
        var a = parseVar(code);
        if (a) apply(code, a);
      });
      cb();
    };
    document.body.appendChild(s);
  }
  function next() {
    if (i >= list.length) {
      setStatus('实时行情已刷新：' + bOk + ' 个板块涨跌/成交额已实时覆盖');
      var on = document.querySelector('#chips .chip.on');
      if (on && typeof renderCon === 'function') {
        var idx = parseInt(on.dataset.i, 10);
        if (!isNaN(idx)) renderCon(idx);   // 刷新当前打开的概念详情（CON 已更新）
      }
      return;
    }
    setStatus('正在刷新板块实时涨跌… ' + Math.min(i + B, list.length) + '/' + list.length);
    fetchBatch(list.slice(i, i + B), function () { i += B; setTimeout(next, 0); });
  }
  next();
})();

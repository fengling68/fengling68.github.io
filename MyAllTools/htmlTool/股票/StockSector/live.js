/* 板块全景实时叠加（合并行情拉取 + 懒加载，显著降低首屏请求数）：
 * 打开页面时，用 JSONP 直连腾讯公开行情接口 qt.gtimg.cn，
 * 刷新页面上所有领涨股（.lead 行内 .lcode 标注 data-code）的实时行情，
 * 以及各板块（.card[data-code]）当日涨跌幅/成交额，并回写 CON 数组与标签云配色。
 * 板块主力资金、上涨/总数、领涨股、概览聚合与估值仍为快照数据（见底部说明）。
 *
 * 优化点（相对旧版两个独立循环）：
 *  1) 合并为单一去重拉取引擎，领涨股与板块共用同一套解析/分批逻辑；
 *  2) 单批容量 100 → 200（qt.gtimg.cn URL 长度上限约 250 可用、500 失败，200 留足余量）；
 *  3) 懒加载：仅对进入视口（含下方 400px 预取边距）的元素发起请求，
 *     首屏请求从 ~17 降至 ~3；概念全量 802 个 CON 代码延后到「概念全量」页签打开时再拉取。
 * 无 IntersectionObserver 时回退为全量拉取（行为同旧版）。
 * 不依赖任何常驻服务；直接双击打开本页面即可（需联网）。 */
(function () {
  'use strict';

  var BATCH = 200;            // qt.gtimg.cn 安全单批容量（URL 长度上限：250 可用，500 失败）
  var PREFETCH = 400;         // 视口下方预取边距(px)

  function parseVar(code) {
    var raw = window['v_' + code];
    if (typeof raw !== 'string') return null;
    var m = raw.match(/^"([\s\S]*)"$/);
    var str = m ? m[1] : raw;
    if (!str || str.indexOf('~') < 0) return null;
    return str.split('~');
  }
  function num(v) { return (v === '' || v == null) ? null : Number(v); }

  /* ---------- 注册 ---------- */
  var leadMap = {}, leads = [];
  [].slice.call(document.querySelectorAll('.lead')).forEach(function (ld) {
    var lc = ld.querySelector('.lcode[data-code]');
    if (!lc) return;
    var c = lc.getAttribute('data-code');
    if (c && !leadMap[c]) { leadMap[c] = ld; leads.push(c); }
  });

  var sectorCards = {}, conBy = {}, chipBy = {}, sectorCodes = [];
  document.querySelectorAll('.card[data-code]').forEach(function (card) {
    var c = card.getAttribute('data-code');
    if (c) (sectorCards[c] = sectorCards[c] || []).push(card);
  });
  (window.CON || []).forEach(function (d, i) {
    if (d && d.c) (conBy[d.c] = conBy[d.c] || []).push(i);
  });
  document.querySelectorAll('#chips .chip[data-i]').forEach(function (chip) {
    var i = parseInt(chip.dataset.i, 10);
    var d = (window.CON || [])[i];
    if (d && d.c) (chipBy[d.c] = chipBy[d.c] || []).push(chip);
  });
  Object.keys(sectorCards).forEach(function (c) { if (sectorCodes.indexOf(c) < 0) sectorCodes.push(c); });
  Object.keys(conBy).forEach(function (c) { if (sectorCodes.indexOf(c) < 0) sectorCodes.push(c); });

  /* ---------- 应用行情到各注册表 ---------- */
  var qtime = '';
  function applyLead(code) {
    var a = parseVar(code); if (!a) return;
    var ld = leadMap[code]; if (!ld) return;
    var chg = num(a[32]);
    var lchg = ld.querySelector('.lchg');
    if (lchg && chg != null) {
      lchg.textContent = (chg > 0 ? '+' : '') + chg.toFixed(2) + '%';
      lchg.className = 'lchg ' + (chg > 0 ? 'up' : (chg < 0 ? 'down' : 'flat'));
    }
    var pe = num(a[39]); var lpe = ld.querySelector('.lpe');
    if (lpe && pe != null) lpe.textContent = pe.toFixed(1);
    var mv = num(a[45]); var lmc = ld.querySelector('.lmc');
    if (lmc && mv != null) lmc.textContent = Math.round(mv).toLocaleString('en-US') + '亿';
    if (!qtime && a[30]) qtime = a[30];
  }
  function applySector(code, a) {
    var chg = num(a[32]), turn = num(a[38]);
    if (chg == null && turn == null) return;
    (sectorCards[code] || []).forEach(function (card) {
      var cs = card.querySelector('.cchg span');
      if (cs && chg != null) {
        cs.textContent = (chg > 0 ? '+' : '') + chg.toFixed(2) + '%';
        cs.className = chg > 0 ? 'up' : (chg < 0 ? 'down' : 'flat');
      }
      if (turn != null) card.querySelectorAll('.metrics .m').forEach(function (m) {
        var b = m.querySelector('b');
        if (b && b.textContent === '成交额')
          m.innerHTML = '<b>成交额</b>' + (turn / 1e4).toLocaleString('en-US', { maximumFractionDigits: 1 }) + '亿';
      });
    });
    (conBy[code] || []).forEach(function (idx) {
      var d = (window.CON || [])[idx]; if (!d) return;
      if (chg != null) d.chg = chg;
      if (turn != null) d.turn = turn;
    });
    (chipBy[code] || []).forEach(function (chip) {
      if (chg == null) return;
      chip.classList.remove('up', 'down', 'flat');
      if (chg !== 0) chip.classList.add(chg > 0 ? 'up' : 'down');
    });
    if (!qtime && a[30]) qtime = a[30];
  }
  function applyQuote(code) {
    var a = parseVar(code); if (!a) return;
    if (leadMap[code]) applyLead(code);
    if (sectorCards[code] || conBy[code] || chipBy[code]) applySector(code, a);
  }

  /* ---------- 批量拉取引擎（去重 + 顺序分批） ---------- */
  var done = {}, queued = {}, inflight = false, totalDone = 0, totalAll = 0;
  function setStatus(txt) { var el = document.getElementById('liveStatus'); if (el) el.textContent = txt; }
  function flush() {
    var list = Object.keys(queued);
    if (!list.length) { inflight = false; finish(); return; }
    queued = {}; inflight = true;
    var i = 0;
    (function nextBatch() {
      if (i >= list.length) { inflight = false; finish(); return; }
      var batch = list.slice(i, i + BATCH); i += BATCH;
      var s = document.createElement('script');
      s.type = 'text/javascript'; s.charset = 'gbk';
      s.src = 'https://qt.gtimg.cn/q=' + batch.join(',') + '&_=' + Date.now();
      s.onload = s.onerror = function () {
        try { document.body.removeChild(s); } catch (e) {}
        batch.forEach(function (code) { done[code] = 1; applyQuote(code); });
        totalDone += batch.length;
        setStatus('实时行情刷新中… ' + Math.min(totalDone, totalAll) + '/' + totalAll);
        nextBatch();
      };
      document.body.appendChild(s);
    })();
  }
  function requestCodes(codes) {
    var added = [];
    codes.forEach(function (c) { if (c && !done[c] && !queued[c]) { queued[c] = 1; added.push(c); } });
    if (added.length) { totalAll += added.length; if (!inflight) flush(); }
    return added.length;
  }

  /* ---------- 懒加载：仅对进入视口的元素发起请求 ---------- */
  function codesOf(el) {
    var codes = [];
    if (el.classList && el.classList.contains('lead')) {
      var lc = el.querySelector('.lcode[data-code]');
      if (lc && lc.getAttribute('data-code')) codes.push(lc.getAttribute('data-code'));
    } else if (el.getAttribute && el.getAttribute('data-code')) {
      codes.push(el.getAttribute('data-code'));
    }
    return codes;
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { requestCodes(codesOf(en.target)); io.unobserve(en.target); }
      });
    }, { root: null, rootMargin: '0px 0px ' + PREFETCH + 'px 0px', threshold: 0.01 });

    leads.forEach(function (c) { var ld = leadMap[c]; if (ld) io.observe(ld); });
    Object.keys(sectorCards).forEach(function (c) {
      sectorCards[c].forEach(function (card) { io.observe(card); });
    });
    // 概念全量：802 个 CON 代码仅在「概念全量(#all)」页签可见时再批量拉取
    var conPane = document.getElementById('all');
    if (conPane) {
      io.observe(conPane);
      var conFired = false;
      var conIo = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting && !conFired) { conFired = true; requestCodes(sectorCodes.filter(function (c) { return !!conBy[c]; })); conIo.disconnect(); }
        });
      }, { threshold: 0.01 });
      conIo.observe(conPane);
    }
    // 首屏已在视口内的元素立即拉取（IO 初始回调前先兜底一次）
    var vh = window.innerHeight || 0;
    leads.forEach(function (c) {
      var ld = leadMap[c], r = ld.getBoundingClientRect();
      if (r.top < vh + PREFETCH && r.bottom > -PREFETCH) requestCodes(codesOf(ld));
    });
    Object.keys(sectorCards).forEach(function (c) {
      sectorCards[c].forEach(function (card) {
        var r = card.getBoundingClientRect();
        if (r.top < vh + PREFETCH && r.bottom > -PREFETCH) requestCodes(codesOf(card));
      });
    });
  } else {
    // 回退：全量拉取（旧版行为）
    requestCodes(leads.concat(sectorCodes));
  }

  /* 概念详情打开时，确保该板块代码已拉取（#all 未激活也兜底） */
  if (typeof window.renderCon === 'function') {
    var _rc = window.renderCon;
    window.renderCon = function (i) {
      var d = (window.CON || [])[i];
      if (d && d.c) requestCodes([d.c]);
      return _rc(i);
    };
  }

  /* ---------- 收尾 ---------- */
  function finish() {
    var hh = qtime ? (qtime.slice(8, 10) + ':' + qtime.slice(10, 12)) : '';
    var meta = document.getElementById('metaInfo');
    if (meta) meta.textContent = (hh ? '实时行情 · 接口时间 ' + hh + ' · ' : '实时行情 · ')
      + '已按视口拉取 ' + totalAll + ' 项' + (totalDone ? '（刷新现价/涨跌/市值/PE 与板块涨跌/成交额）' : '（接口未连接，显示快照值）');
    setStatus('实时更新完成（懒加载）· 已拉取 ' + totalDone + ' 项');
    var sb = document.getElementById('snapBadge');
    if (sb) {
      var d = (typeof window.SNAPSHOT_DATE === 'string' && window.SNAPSHOT_DATE) ? window.SNAPSHOT_DATE : '';
      sb.textContent = '行情实时' + (hh ? '（接口 ' + hh + '）' : '') + ' · 板块涨跌/成交额实时 · 主力资金' + (d ? ' ' + d : '') + ' 收盘快照';
    }
    var hp = document.getElementById('helpPop');
    if (hp && !hp.dataset.live) {
      hp.dataset.live = '1';
      hp.innerHTML += '<br><b>实时</b>：领涨股现价/涨跌幅%/总市值/PE，以及各板块当日涨跌幅与成交额，为打开页面时腾讯 qt.gtimg.cn 实时值（按视口懒加载，仅在滚动到对应板块/概念时请求）；板块主力资金、上涨/总数、领涨股、概览聚合与估值为快照数据。';
    }
    // 重新渲染当前打开的概念详情（CON 数组已更新）
    var on = document.querySelector('#chips .chip.on');
    if (on && typeof window.renderCon === 'function') {
      var idx = parseInt(on.dataset.i, 10);
      if (!isNaN(idx)) window.renderCon(idx);
    }
  }
})();

/* 主力资金快照注入：从 CON / IND_MAIN 数组回填各卡片的「主力今日 / 5日主力 / 20日主力」数值。
 * 这样页面打开即显示最新收盘主力资金（由 scripts/refresh-stocksnapshot.mjs 每日收盘后重建数组）。
 * 若数组未重建，则沿用打包时的快照值，行为与旧版一致。 */
(function () {
  'use strict';
  function num(v) { return (v === '' || v == null) ? null : Number(v); }
  function fmtYi(wan) {
    var v = num(wan); if (v == null) return null;
    var a = Math.abs(v) / 10000;
    if (a === 0) return '0.0亿';
    return (v > 0 ? '+' : '-') + a.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + '亿';
  }
  function clsOf(v) { return v > 0 ? 'up' : (v < 0 ? 'down' : 'flat'); }

  var map = {};
  (window.CON || []).forEach(function (d) { if (d && d.c) map[d.c] = d; });
  (window.IND_MAIN || []).forEach(function (d) { if (d && d.c) map[d.c] = d; });

  function codeOf(card) {
    var c = card.getAttribute('data-code');
    if (c) return c;
    var cm = card.querySelector('.cmeta');
    if (cm) { var m = (cm.textContent || '').match(/pt0\d+/); if (m) return m[0]; }
    return null;
  }
  function fill(card) {
    var c = codeOf(card); if (!c) return;
    var d = map[c]; if (!d) return;
    card.querySelectorAll('.metrics .m').forEach(function (m) {
      var b = m.querySelector('b'); if (!b) return;
      var key = b.textContent;
      var val = key === '主力今日' ? d.net : key === '5日主力' ? d.net5 : key === '20日主力' ? d.net20 : null;
      if (val == null) return;
      var sp = m.querySelector('span'); if (!sp) return;
      sp.textContent = fmtYi(val);
      sp.className = clsOf(num(val));
    });
  }
  document.querySelectorAll('.card').forEach(fill);
})();

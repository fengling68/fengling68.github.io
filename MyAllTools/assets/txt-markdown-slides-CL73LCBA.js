import{T as M}from"./ToolHeader-BmMNr0-s.js";import{_ as A,d as g,k as a,e as p,w as d,b as w,o as v,f as x,l as b,F as L,j as C,r as T,c as $,y as H}from"./index-CEoPE5Eo.js";const B={class:"tool-cols"},S={class:"md-slides__stats"},F={key:0,class:"md-slides__list"},I={class:"md-slides__pagehead"},q=["innerHTML"],P={key:1,class:"empty-hint"},E=`# MyAllTools 幻灯片

用 \`---\` 分隔每一页幻灯片。

第一页 —— 标题页

---

## 目录

- 介绍
- 功能
- 总结

---

## Markdown 支持

支持**粗体**、*斜体*、\`行内代码\` 与[链接](https://example.com)。

> 也可以使用引用与代码块。

\`\`\`js
console.log("Hello");
\`\`\`

---

## 结束

感谢观看 🎉`,V="<\/script>",X={__name:"txt-markdown-slides",setup(D){const u=T(E);function r(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function f(s){return s.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g,'<img src="$2" alt="$1" />').replace(/\[([^\]]+)\]\(([^)\s]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>').replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>").replace(/~~([^~]+)~~/g,"<del>$1</del>")}function y(s){const e=s.split(`
`),n=[];let t=0;for(;t<e.length;){const i=e[t];if(/^```/.test(i)){const o=i.slice(3).trim(),k=[];for(t++;t<e.length&&!/^```/.test(e[t]);)k.push(e[t++]);t++,n.push(`<pre><code class="hljs" data-lang="${r(o)}">${r(k.join(`
`))}</code></pre>`);continue}if(!i.trim()){t++;continue}if(/^(---|\*\*\*|___)\s*$/.test(i)){t++;continue}const l=i.match(/^(#{1,6})\s+(.*)$/);if(l){const o=l[1].length;n.push(`<h${o}>${f(r(l[2]))}</h${o}>`),t++;continue}if(/^>\s?/.test(i)){const o=[];for(;t<e.length&&/^>\s?/.test(e[t]);)o.push(e[t++].replace(/^>\s?/,""));n.push(`<blockquote>${f(r(o.join(" ")))}</blockquote>`);continue}if(/^\s*[-*+]\s+/.test(i)){const o=[];for(;t<e.length&&/^\s*[-*+]\s+/.test(e[t]);)o.push(`<li>${f(r(e[t++].replace(/^\s*[-*+]\s+/,"")))}</li>`);n.push(`<ul>${o.join("")}</ul>`);continue}if(/^\s*\d+\.\s+/.test(i)){const o=[];for(;t<e.length&&/^\s*\d+\.\s+/.test(e[t]);)o.push(`<li>${f(r(e[t++].replace(/^\s*\d+\.\s+/,"")))}</li>`);n.push(`<ol>${o.join("")}</ol>`);continue}const c=[];for(;t<e.length&&e[t].trim()&&!/^(#{1,6}\s|```|>|---|\s*[-*+]\s|\s*\d+\.\s|^---$)/.test(e[t]);)c.push(e[t++]);c.length?n.push(`<p>${f(r(c.join(" ")))}</p>`):t++}return n.join(`
`)}const h=$(()=>{const s=u.value.split(`
`),e=[];let n=[];for(const t of s)/^---\s*$/.test(t.trim())?(e.push(n.map(i=>i.trimEnd()).join(`
`).trim()),n=[]):n.push(t);return e.push(n.join(`
`).trim()),e.filter(Boolean)}),m=$(()=>({pages:h.value.length,chars:u.value.length}));function _(){return`<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Markdown 幻灯片</title>
<style>
*{box-sizing:border-box}
html,body{margin:0;height:100%}
body{background:#000;color:#eee;font-family:'PingFang SC','Microsoft YaHei',sans-serif;overflow:hidden}
.reveal{width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;position:relative}
.slide{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:6vh 8vw;opacity:0;visibility:hidden;transform:translateX(4%) scale(.98);transition:opacity .35s,transform .35s,visibility .35s}
.slide.is-show{opacity:1;visibility:visible;transform:none;z-index:2}
.slide__inner{max-width:1000px;max-height:88vh;overflow:auto;scrollbar-width:thin}
.md{font-size:clamp(14px,2.4vw,26px);line-height:1.7}
.md h1{font-size:1.9em;margin:.2em 0 .5em}
.md h2{font-size:1.4em;margin:.4em 0}
.md h3,.md h4{font-size:1.15em;margin:.4em 0}
.md p{margin:.4em 0}
.md ul,.md ol{margin:.4em 0;padding-left:1.4em}
.md li{margin:.2em 0}
.md a{color:#7dd3fc}
.md img{max-width:100%;border-radius:8px}
.md blockquote{margin:.6em 0;padding:.3em 1em;border-left:4px solid #22d3ee;background:#0b1220;border-radius:0 8px 8px 0;color:#a5f3fc}
.md pre{margin:.6em 0;padding:1em;background:#0b1220;border-radius:8px;overflow:auto;text-align:left}
.md code{font-family:ui-monospace,Menlo,Consolas,monospace}
.md :not(pre)>code{padding:.1em .4em;background:#0b1220;border-radius:4px;color:#7dd3fc}
.nav{position:fixed;bottom:26px;z-index:10;display:flex;align-items:center;gap:14px;left:50%;transform:translateX(-50%)}
.nav button{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.25);color:#fff;border-radius:8px;min-width:44px;height:38px;font-size:18px;cursor:pointer}
.nav button:hover{background:rgba(255,255,255,.22)}
.nav__ct{color:#9ca3af;font-size:14px;font-variant-numeric:tabular-nums}
.hint{position:fixed;bottom:26px;right:26px;color:#6b7280;font-size:12px;z-index:10}
</style>
</head>
<body>
<div class="reveal">
  ${h.value.map((e,n)=>`
    <section class="slide" data-index="${n}">
      <div class="slide__inner"><div class="md">${y(e)}</div></div>
    </section>`).join(`
`)}
  <div class="nav">
    <button id="prev" title="上一页(←)">‹</button>
    <span class="nav__ct" id="ct">1 / ${h.value.length}</span>
    <button id="next" title="下一页(→)">›</button>
  </div>
  <div class="hint">← → 翻页 · 空格下一页 · Esc 总览 · F 全屏</div>
</div>
<script>
(function(){
  var slides=Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var idx=0;
  function show(i){
    idx=(i+slides.length)%slides.length;
    slides.forEach(function(s,j){s.classList.toggle('is-show',j===idx);});
    document.getElementById('ct').textContent=(idx+1)+' / '+slides.length;
  }
  function next(){show(idx+1);}
  function prev(){show(idx-1);}
  document.getElementById('next').addEventListener('click',next);
  document.getElementById('prev').addEventListener('click',prev);
  document.addEventListener('keydown',function(e){
    if(e.key==='ArrowRight'||e.key===' '||e.key==='PageDown'){e.preventDefault();next();}
    else if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();prev();}
    else if(e.key==='Home'){show(0);}
    else if(e.key==='End'){show(slides.length-1);}
    else if(e.key==='f'||e.key==='F'){if(document.fullscreenElement)document.exitFullscreen();else document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen();}
  });
  // 左右边缘点击翻页
  document.addEventListener('click',function(e){
    if(e.target.closest('button'))return;
    if(e.clientX>window.innerWidth*0.75)next();
    else if(e.clientX<window.innerWidth*0.25)prev();
  });
  var tx=0;
  document.addEventListener('touchstart',function(e){tx=e.touches[0].clientX;},{passive:true});
  document.addEventListener('touchend',function(e){
    var d=e.changedTouches[0].clientX-tx;
    if(Math.abs(d)>60){d<0?next():prev();}
  },{passive:true});
  show(0);
})();
</${V}>
</body>
</html>`}function j(){if(!m.value.pages)return;const s=window.open("","_blank");s&&(s.document.open(),s.document.write(_()),s.document.close())}async function z(){if(m.value.pages)try{await navigator.clipboard.writeText(_()),H(document.activeElement)}catch{}}return(s,e)=>{const n=w("AtomButton"),t=w("AtomInputTextArea"),i=w("AtomPanel");return v(),g("div",null,[a(M,{title:"Markdown 幻灯片",desc:"用 --- 分页，Markdown 一键转 reveal.js 幻灯片，新窗口全屏演示"}),p("div",B,[a(i,{column:"",title:"Markdown 内容"},{"head-ops":d(()=>[p("span",S,x(m.value.pages)+" 页 · "+x(m.value.chars)+" 字",1),a(n,{size:"s",onClick:e[0]||(e[0]=l=>u.value=E)},{default:d(()=>[...e[3]||(e[3]=[b("示例",-1)])]),_:1}),a(n,{size:"s",onClick:e[1]||(e[1]=l=>u.value="")},{default:d(()=>[...e[4]||(e[4]=[b("清除",-1)])]),_:1})]),default:d(()=>[a(t,{modelValue:u.value,"onUpdate:modelValue":e[2]||(e[2]=l=>u.value=l),size:"xxxl",spellcheck:"false",placeholder:`第一页内容

---

第二页内容`},null,8,["modelValue"])]),_:1}),a(i,{column:"",title:"幻灯片结果"},{"head-ops":d(()=>[a(n,{size:"s",variant:"primary",disabled:!m.value.pages,onClick:j},{default:d(()=>[...e[5]||(e[5]=[b("新窗口演示",-1)])]),_:1},8,["disabled"]),a(n,{size:"s",disabled:!m.value.pages,onClick:z},{default:d(()=>[...e[6]||(e[6]=[b("复制 HTML",-1)])]),_:1},8,["disabled"])]),default:d(()=>[h.value.length?(v(),g("div",F,[(v(!0),g(L,null,C(h.value,(l,c)=>(v(),g("div",{key:c,class:"md-slides__page"},[p("div",I,[p("span",null,x(c+1),1),p("span",null,"第 "+x(c+1)+" 页",1)]),p("div",{class:"md-slides__preview md-html",innerHTML:y(l)},null,8,q)]))),128))])):(v(),g("p",P,"请输入 Markdown 内容，用 --- 分隔多页"))]),_:1})])])}}},U=A(X,[["__scopeId","data-v-bbe68751"]]);export{U as default};

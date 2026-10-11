import{T as ye}from"./ToolHeader-BFy4_bQ6.js";import{d as we}from"./dom-to-image-DpGx5amv.js";import{d as ke}from"./fileUtils-CiPQ6CLC.js";import{_ as Ae,e as y,l as r,F as S,k as E,f as w,w as d,z as F,d as k,o as h,m as f,g as L,n as $e,j as G,i as Se,p as H,c as q,y as N,A as _e}from"./index-Ev0fxiAs.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ze={class:"md-tool"},Ie={class:"tool-cols"},Ce={class:"md-stats"},Le=["innerHTML"],Me={key:1,class:"tool-cols"},Te={class:"md-table-tip"},je=["innerHTML"],Ee={class:"md-table-code"},J=`# Markdown 编辑预览

支持**粗体**、*斜体*、~~删除线~~、\`行内代码\`、[链接](https://example.com)。

## 列表

- 无序列表项
- 另一项
  - 嵌套项

1. 有序列表
2. 第二项

## 引用与代码

> 这是一段引用文字，可以有多行。

\`\`\`js
const hello = (name) => \`Hello, \${name}!\`;
hello("MyAllTools");
\`\`\`

## 表格

| 工具 | 分类 | 状态 |
| ---- | ---- | ---- |
| JSON 格式化 | 文本处理 | 可用 |
| 颜色转换 | 设计 | 可用 |

## 任务列表

- [x] 支持任务列表勾选
- [x] 支持脚注引用[^1]
- [ ] 待办事项示例

[^1]: 这是一个脚注定义，预览时会显示在文末。

---

图片：![示例图](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIHJ4PSI4IiBmaWxsPSIjMGU5Mzg0Ii8+PHRleHQgeD0iNjAiIHk9IjM1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+56S65L6L5Zu+PC90ZXh0Pjwvc3ZnPg==)

普通段落文本，支持自动换行与中英文混排。
`,He="<\/script>",Y=20,K=10,qe={__name:"txt-markdown",setup(Pe){const i=H(J),Q={h1:"margin:24px 0 12px;padding-bottom:8px;border-bottom:3px solid #0d9488;font-size:26px;color:#0f766e;",h2:"margin:22px 0 10px;padding-bottom:6px;border-bottom:1px solid #99f6e4;font-size:21px;color:#115e59;",h3:"margin:18px 0 8px;font-size:18px;color:#134e4a;",h4:"margin:16px 0 6px;font-size:16px;color:#155e75;",h5:"margin:14px 0 6px;font-size:14px;color:#155e75;",h6:"margin:14px 0 6px;font-size:13px;color:#155e75;"};function Z(){const o=W.value;if(!o)return"";const e=o.cloneNode(!0);e.setAttribute("style","display:block;max-width:80%;padding:0;margin:0 auto;box-sizing:border-box;font-family:'PingFang SC','Microsoft YaHei','Helvetica Neue',Arial,sans-serif;font-size:15px;line-height:1.8;color:#1f2937;background:#fff;");const l=(t,n)=>t.forEach(a=>a.setAttribute("style",n));return e.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach(t=>{const n=Q[t.tagName.toLowerCase()];t.setAttribute("style",n+"font-weight:700;line-height:1.4;")}),l(e.querySelectorAll("p"),"margin:8px 0;"),l(e.querySelectorAll("strong"),"color:#be123c;font-weight:700;"),l(e.querySelectorAll("em"),"color:#6d28d9;font-style:italic;"),l(e.querySelectorAll("a"),"color:#2563eb;text-decoration:underline;"),l(e.querySelectorAll("del"),"color:#9ca3af;"),l(e.querySelectorAll("img"),"max-width:100%;border-radius:8px;"),l(e.querySelectorAll("ul"),"margin:8px 0;padding-left:22px;"),l(e.querySelectorAll("ol"),"margin:8px 0;padding-left:22px;"),l(e.querySelectorAll("li"),"margin:4px 0;"),l(e.querySelectorAll("blockquote"),"margin:12px 0;padding:8px 16px;border-left:4px solid #0d9488;background:#f0fdfa;color:#134e4a;border-radius:0 8px 8px 0;"),l(e.querySelectorAll("hr"),"margin:20px 0;border:0;border-top:2px dashed #14b8a6;"),l(e.querySelectorAll("table"),"width:100%;border-collapse:collapse;margin:12px 0;font-size:14px;"),l(e.querySelectorAll("th"),"padding:8px 12px;border:1px solid #cbd5e1;background:#0d9488;color:#fff;text-align:left;font-weight:600;"),l(e.querySelectorAll("td"),"padding:8px 12px;border:1px solid #cbd5e1;"),e.querySelectorAll("ul.md-tasks").forEach(t=>t.setAttribute("style","list-style:none;padding-left:4px;margin:8px 0;")),e.querySelectorAll("li.md-task").forEach(t=>t.setAttribute("style","margin:4px 0;")),l(e.querySelectorAll("input[type=checkbox]"),"margin-right:6px;accent-color:#0d9488;"),l(e.querySelectorAll("sup.md-fn"),"font-size:75%;line-height:0;"),e.querySelectorAll("sup.md-fn a").forEach(t=>t.setAttribute("style","color:#2563eb;text-decoration:none;")),e.querySelectorAll("section.md-fns").forEach(t=>t.setAttribute("style","margin-top:20px;font-size:13px;color:#475569;")),e.querySelectorAll("section.md-fns hr").forEach(t=>t.setAttribute("style","border:0;border-top:1px dashed #94a3b8;")),e.querySelectorAll(".md-fn-back").forEach(t=>t.setAttribute("style","margin-left:4px;color:#2563eb;text-decoration:none;")),l(e.querySelectorAll(":not(pre) > code"),"padding:2px 6px;background:#eef2ff;color:#7c3aed;border-radius:4px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:90%;"),e.querySelectorAll("pre").forEach(t=>{const n=(t.getAttribute("data-lang")||"").trim(),a=n?`<span style="display:block;margin:-8px -12px 8px;padding:4px 12px;background:#1f2937;color:#7dd3fc;font-size:11px;font-family:ui-monospace,Menlo,Consolas,monospace;border-radius:8px 8px 0 0;letter-spacing:.5px">${g(n)}</span>`:"";t.setAttribute("style","position:relative;margin:12px 0;padding:12px;background:#0f172a;border-radius:8px;overflow:auto;"),t.innerHTML=a+t.innerHTML,l(t.querySelectorAll("code"),"display:block;background:transparent;color:#e2e8f0;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px;line-height:1.7;white-space:pre;")}),e.outerHTML}function ee(){var e;const o=Z();o&&((e=navigator.clipboard)==null||e.writeText(o).catch(()=>{}),N(document.activeElement))}function te(){const o=Z();if(!o)return;const e=window.open("","_blank");e.document.write(o),e.document.close()}async function le(){const o=W.value;if(!o)return;const e=[];for(const t of o.querySelectorAll("img")){const n=t.getAttribute("src")||"";if(/^(data:|blob:|\/|\.\.?\/)/.test(n)||n.startsWith(location.origin))continue;const s=document.createElement("span");s.textContent=t.alt||"图片",s.style.cssText="display:inline-flex;align-items:center;justify-content:center;min-width:8rem;min-height:3rem;background:var(--c-surface-2);color:var(--c-text-3);border-radius:8px;font-size:13px;",t.replaceWith(s),e.push({img:t,box:s})}const l=o.getAttribute("style")||"";o.style.padding="1.5rem",o.style.background="#fff";try{const t=await we.toPng(o,{quality:1}),n=await ne(t);n&&ke(n,"markdown-preview.webp")}catch(t){window.alert(t instanceof Error?t.message:"预览图生成失败")}finally{for(const t of e)t.box.replaceWith(t.img);o.setAttribute("style",l)}}function ne(o){return new Promise(e=>{const l=new Image;l.onload=()=>{try{const t=document.createElement("canvas");t.width=l.naturalWidth,t.height=l.naturalHeight;const n=t.getContext("2d");n.fillStyle="#fff",n.fillRect(0,0,t.width,t.height),n.drawImage(l,0,0),e(t.toDataURL("image/webp",.92))}catch{e("")}},l.onerror=()=>e(""),l.src=o})}function g(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function x(o,e){let l=o.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g,'<img src="$2" alt="$1" />').replace(/\[([^\]]+)\]\(([^)\s]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>').replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>").replace(/~~([^~]+)~~/g,"<del>$1</del>");return e&&(l=l.replace(/\[\^([^\]]+)\]/g,(t,n)=>{if(!(n in e.defs))return t;e.nums[n]||(e.nums[n]=++e.count);const a=e.nums[n];return`<sup class="md-fn" id="fnref-${a}"><a href="#fn-${a}">[${a}]</a></sup>`})),l}function V(o){const e={defs:{},nums:{},count:0},l=[];for(const s of o.split(`
`)){const m=s.match(/^\[\^([^\]]+)\]:\s*(.*)$/);m?e.defs[m[1]]=m[2]:l.push(s)}const t=[];let n=0;for(;n<l.length;){const s=l[n];if(/^```/.test(s)){const u=s.slice(3).trim(),v=[];for(n++;n<l.length&&!/^```/.test(l[n]);)v.push(l[n++]);n++,t.push(`<pre class="md-pre" data-lang="${g(u)}"><code>${g(v.join(`
`))}</code></pre>`);continue}if(!s.trim()){n++;continue}if(/^(---|\*\*\*|___)\s*$/.test(s)){t.push("<hr />"),n++;continue}const m=s.match(/^(#{1,6})\s+(.*)$/);if(m){const u=m[1].length;t.push(`<h${u}>${x(g(m[2]),e)}</h${u}>`),n++;continue}if(/^>\s?/.test(s)){const u=[];for(;n<l.length&&/^>\s?/.test(l[n]);)u.push(l[n++].replace(/^>\s?/,""));t.push(`<blockquote>${x(g(u.join(" ")),e)}</blockquote>`);continue}if(/\|/.test(s)&&n+1<l.length&&/^\s*\|?[\s:|-]+\|[\s:|-]*$/.test(l[n+1])){const u=c=>c.replace(/^\s*\|/,"").replace(/\|\s*$/,"").split("|").map(b=>b.trim()),v=u(s);n+=2;const p=[];for(;n<l.length&&/\|/.test(l[n]);)p.push(u(l[n++]));t.push(`<table><thead><tr>${v.map(c=>`<th>${x(g(c),e)}</th>`).join("")}</tr></thead><tbody>${p.map(c=>`<tr>${c.map(b=>`<td>${x(g(b),e)}</td>`).join("")}</tr>`).join("")}</tbody></table>`);continue}if(/^\s*[-*+]\s+/.test(s)){const u=[];let v=!1;for(;n<l.length&&/^\s*[-*+]\s+/.test(l[n]);){const p=l[n++].replace(/^\s*[-*+]\s+/,""),c=p.match(/^\[( |x|X)\]\s+(.*)$/);if(c){v=!0;const b=c[1].toLowerCase()==="x"?" checked":"";u.push(`<li class="md-task"><input type="checkbox" disabled${b} /> ${x(g(c[2]),e)}</li>`)}else u.push(`<li>${x(g(p),e)}</li>`)}t.push(`<ul${v?' class="md-tasks"':""}>${u.join("")}</ul>`);continue}if(/^\s*\d+\.\s+/.test(s)){const u=[];for(;n<l.length&&/^\s*\d+\.\s+/.test(l[n]);)u.push(`<li>${x(g(l[n++].replace(/^\s*\d+\.\s+/,"")),e)}</li>`);t.push(`<ol>${u.join("")}</ol>`);continue}const T=[];for(;n<l.length&&l[n].trim()&&!/^(#{1,6}\s|```|>|---|\s*[-*+]\s|\s*\d+\.\s)/.test(l[n]);)T.push(l[n++]);T.length?t.push(`<p>${x(g(T.join(" ")),e)}</p>`):n++}const a=Object.keys(e.nums).filter(s=>s in e.defs);return a.length&&(a.sort((s,m)=>e.nums[s]-e.nums[m]),t.push(`<section class="md-fns"><hr /><ol>${a.map(s=>{const m=e.nums[s];return`<li id="fn-${m}">${x(g(e.defs[s]),null)} <a class="md-fn-back" href="#fnref-${m}">↩</a></li>`}).join("")}</ol></section>`)),t.join(`
`)}const _=q(()=>{const o=[];let e=[];for(const l of i.value.split(`
`))/^---\s*$/.test(l.trim())?(o.push(e.map(t=>t.trimEnd()).join(`
`).trim()),e=[]):e.push(l);return o.push(e.join(`
`).trim()),o.filter(Boolean)});function O(){return`<!doctype html>
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
.md table{border-collapse:collapse;margin:.6em 0;font-size:.9em}
.md th,.md td{border:1px solid #334155;padding:.3em .8em}
.md th{background:#0b1220;color:#7dd3fc}
.md hr{border:0;border-top:2px dashed #22d3ee;margin:.6em 0}
.nav{position:fixed;bottom:26px;z-index:10;display:flex;align-items:center;gap:14px;left:50%;transform:translateX(-50%)}
.nav button{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.25);color:#fff;border-radius:8px;min-width:44px;height:38px;font-size:18px;cursor:pointer}
.nav button:hover{background:rgba(255,255,255,.22)}
.nav__ct{color:#9ca3af;font-size:14px;font-variant-numeric:tabular-nums}
.hint{position:fixed;bottom:26px;right:26px;color:#6b7280;font-size:12px;z-index:10}
</style>
</head>
<body>
<div class="reveal">
  ${_.value.map((e,l)=>`
    <section class="slide" data-index="${l}">
      <div class="slide__inner"><div class="md">${V(e)}</div></div>
    </section>`).join(`
`)}
  <div class="nav">
    <button id="prev" title="上一页(←)">‹</button>
    <span class="nav__ct" id="ct">1 / ${_.value.length}</span>
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
${He}
</body>
</html>`}function oe(){if(!_.value.length)return;const o=new Blob([O()],{type:"text/html;charset=utf-8"}),e=URL.createObjectURL(o);window.open(e,"_blank")?setTimeout(()=>URL.revokeObjectURL(e),6e4):URL.revokeObjectURL(e)}async function se(){if(_.value.length)try{await navigator.clipboard.writeText(O()),N(document.activeElement)}catch{}}const P=q(()=>V(i.value)),B=q(()=>{const o=i.value.length,e=i.value.trim()?i.value.trim().split(/\s+|\n/).filter(Boolean).length:0,l=i.value.split(`
`).length;return{chars:o,words:e,lines:l}}),U=H(null),W=H(null);function $(o,e,l){var m;const t=(m=U.value)==null?void 0:m.$el;if(!t){i.value+=o+l+e;return}const n=t.selectionStart,a=t.selectionEnd,s=i.value.slice(n,a)||l;i.value=i.value.slice(0,n)+o+s+e+i.value.slice(a),_e(()=>{t.focus(),t.selectionStart=n+o.length,t.selectionEnd=n+o.length+s.length})}function z(o){var n;const e=(n=U.value)==null?void 0:n.$el,l=(e==null?void 0:e.selectionStart)??i.value.length,t=i.value.lastIndexOf(`
`,l-1)+1;i.value=i.value.slice(0,t)+o+i.value.slice(t)}const ie=[{label:"H1",title:"一级标题",run:()=>z("# ")},{label:"H2",title:"二级标题",run:()=>z("## ")},{label:"H3",title:"三级标题",run:()=>z("### ")},{label:"B",title:"粗体",run:()=>$("**","**","粗体")},{label:"I",title:"斜体",run:()=>$("*","*","斜体")},{label:"S",title:"删除线",run:()=>$("~~","~~","删除线")},{label:"</>",title:"行内代码",run:()=>$("`","`","code")},{label:"```",title:"代码块",run:()=>$("\n```\n","\n```\n","// code")},{label:"🔗",title:"链接",run:()=>$("[","](https://)","链接文字")},{label:"🖼️",title:"图片",run:()=>$("![","](https://)","alt")},{label:"• 列表",title:"无序列表",run:()=>z("- ")},{label:"1. 列表",title:"有序列表",run:()=>z("1. ")},{label:"❝",title:"引用",run:()=>z("> ")},{label:"表格",title:"插入表格",run:()=>{i.value+=`
| 列1 | 列2 | 列3 |
| --- | --- | --- |
| 内容 | 内容 | 内容 |
`}},{label:"分割线",title:"水平分割线",run:()=>{i.value+=`
---
`}}];function ae(){i.value=J}function re(){i.value=""}function de(){const o=i.value.split(`
`),e=[],l=/^(#{1,6}\s|---$|```)/;for(let n=0;n<o.length;n++){const a=o[n];l.test(a)&&e.length&&e[e.length-1].trim()!==""&&e.push(""),e.push(a)}let t=e.join(`
`).replace(/\n{3,}/g,`

`).replace(/[ \t]+$/gm,"");t&&!t.endsWith(`
`)&&(t+=`
`),i.value=t}function ce(){var o;i.value&&((o=navigator.clipboard)==null||o.writeText(i.value),N(document.activeElement))}const R=F({v:"edit"}),ue=[{key:"edit",label:"编辑预览"},{key:"table",label:"表格生成"}],A=F({rows:3,cols:3}),I=H([["列1","列2","列3"],["","",""],["","",""]]),C=H(["left","left","left"]),me=[{value:"left",label:"左对齐"},{value:"center",label:"居中"},{value:"right",label:"右对齐"}],D=(o,e)=>Math.min(e,Math.max(1,Math.round(Number(o)||1)));function pe(o){A.rows=D(o,Y),X()}function fe(o){A.cols=D(o,K),X()}function X(){var e;const o=[];for(let l=0;l<A.rows;l++){const t=[];for(let n=0;n<A.cols;n++)t.push(((e=I.value[l])==null?void 0:e[n])??(l===0?`列${n+1}`:""));o.push(t)}I.value=o,C.value=Array.from({length:A.cols},(l,t)=>C.value[t]??"left")}const ge={left:"---",center:":---:",right:"---:"},M=q(()=>{const o=n=>(n??"").replace(/\|/g,"\\|").replace(/\r?\n/g," "),e=n=>`| ${n.map(o).join(" | ")} |`,[l=[],...t]=I.value;return[e(l),`| ${C.value.slice(0,l.length).map(n=>ge[n]??"---").join(" | ")} |`,...t.map(e)].join(`
`)}),he=q(()=>V(M.value));function be(){var o;(o=navigator.clipboard)==null||o.writeText(M.value),N(document.activeElement)}function xe(){i.value=i.value.trim()?i.value.replace(/\s*$/,`

`)+M.value+`
`:M.value+`
`,R.v="edit"}return(o,e)=>{const l=k("AtomTabs"),t=k("AtomButton"),n=k("AtomInputTextArea"),a=k("AtomPanel"),s=k("AtomInputNumber"),m=k("AtomCheck"),T=k("AtomRow"),u=k("AtomInputText"),v=k("AtomHint");return h(),y("div",ze,[r(ye,{title:"Markdown 编辑预览",desc:"实时编辑与预览 Markdown（支持 GFM 任务列表与脚注），工具条快捷插入、可视化表格生成、示例与格式美化"}),r(l,{modelValue:R.v,"onUpdate:modelValue":e[0]||(e[0]=p=>R.v=p),items:ue},null,8,["modelValue"]),R.v==="edit"?(h(),y(S,{key:0},[(h(),y(S,null,E(ie,p=>r(t,{key:p.label,size:"s",title:p.title,onClick:c=>p.run(),gap:"0.5rem 0.3rem 0.5rem 0"},{default:d(()=>[f(L(p.label),1)]),_:2},1032,["title","onClick"])),64)),w("div",Ie,[r(a,{title:"内容输入",column:""},{"head-ops":d(()=>[w("span",Ce,L(B.value.chars)+" 字符 · "+L(B.value.words)+" 词 · "+L(B.value.lines)+" 行",1),r(t,{size:"s",variant:"primary",onClick:ae},{default:d(()=>[...e[2]||(e[2]=[f("添加示例",-1)])]),_:1}),r(t,{size:"s",onClick:de},{default:d(()=>[...e[3]||(e[3]=[f("美化",-1)])]),_:1}),r(t,{size:"s",onClick:re},{default:d(()=>[...e[4]||(e[4]=[f("清除",-1)])]),_:1}),r(t,{size:"s",disabled:!i.value,onClick:ce},{default:d(()=>[...e[5]||(e[5]=[f("复制",-1)])]),_:1},8,["disabled"])]),default:d(()=>[r(n,{ref_key:"editor",ref:U,modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=p=>i.value=p),size:"xxxl",spellcheck:"false"},null,8,["modelValue"])]),_:1}),r(a,{column:"",title:"预览"},{"head-ops":d(()=>[r(t,{size:"s",disabled:!P.value,onClick:te},{default:d(()=>[...e[6]||(e[6]=[f("HTML 查看",-1)])]),_:1},8,["disabled"]),r(t,{size:"s",disabled:!P.value,onClick:ee},{default:d(()=>[...e[7]||(e[7]=[f("HTML 复制",-1)])]),_:1},8,["disabled"]),r(t,{size:"s",disabled:!_.value.length,onClick:oe},{default:d(()=>[...e[8]||(e[8]=[f("幻灯片预览",-1)])]),_:1},8,["disabled"]),r(t,{size:"s",disabled:!_.value.length,onClick:se},{default:d(()=>[...e[9]||(e[9]=[f("幻灯片复制",-1)])]),_:1},8,["disabled"]),r(t,{size:"s",disabled:!P.value,onClick:le},{default:d(()=>[...e[10]||(e[10]=[f("下载预览图",-1)])]),_:1},8,["disabled"])]),default:d(()=>[w("div",{ref_key:"previewBody",ref:W,class:"md-preview__body md-html",innerHTML:P.value},null,8,Le)]),_:1})])],64)):(h(),y("div",Me,[r(a,{title:"表格编辑",column:""},{"head-ops":d(()=>[e[11]||(e[11]=w("span",{class:"md-table-label"},"行",-1)),r(s,{class:"md-table-num","model-value":A.rows,min:1,max:Y,"onUpdate:modelValue":pe},null,8,["model-value"]),e[12]||(e[12]=w("span",{class:"md-table-label"},"列",-1)),r(s,{class:"md-table-num","model-value":A.cols,min:1,max:K,"onUpdate:modelValue":fe},null,8,["model-value"])]),default:d(()=>[w("div",{class:"md-table-grid",style:$e({gridTemplateColumns:`repeat(${A.cols}, minmax(0, 1fr))`})},[(h(!0),y(S,null,E(C.value,(p,c)=>(h(),G(T,{key:`a${c}`,gap:"0"},{default:d(()=>[(h(),y(S,null,E(me,b=>r(m,{key:b.value,modelValue:C.value[c],"onUpdate:modelValue":j=>C.value[c]=j,type:"radio",name:`align-${c}`,value:b.value},{default:d(()=>[f(L(b.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue","name","value"])),64))]),_:2},1024))),128)),(h(!0),y(S,null,E(I.value,(p,c)=>(h(),y(S,{key:c},[(h(!0),y(S,null,E(p,(b,j)=>(h(),G(u,{key:`${c}-${j}`,modelValue:I.value[c][j],"onUpdate:modelValue":ve=>I.value[c][j]=ve,class:Se({"md-grid-head":c===0})},null,8,["modelValue","onUpdate:modelValue","class"]))),128))],64))),128))],4),w("div",Te,[r(v,null,{default:d(()=>[...e[13]||(e[13]=[f("首行为表头；列对齐方式见每列顶部选择框；单元格中的 | 会自动转义",-1)])]),_:1})])]),_:1}),r(a,{title:"生成结果",column:""},{"head-ops":d(()=>[r(t,{size:"s",variant:"primary",onClick:xe},{default:d(()=>[...e[14]||(e[14]=[f("插入到正文",-1)])]),_:1}),r(t,{size:"s",onClick:be},{default:d(()=>[...e[15]||(e[15]=[f("复制",-1)])]),_:1})]),default:d(()=>[w("div",{class:"md-html md-table-preview",innerHTML:he.value},null,8,je),w("pre",Ee,L(M.value),1)]),_:1})]))])}}},We=Ae(qe,[["__scopeId","data-v-157423df"]]);export{We as default};

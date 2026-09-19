import{d as T,q as B,e as a,F as N,j as D,m as I,f as b,p as P,v as z,c as j,r as v,o as S,G as F}from"./index-DC42hpLe.js";import{_ as R}from"./ToolHeader-B-Gornil.js";const G={class:"md-tool"},J={class:"md-toolbar"},U=["title","onClick"],W={class:"tool-cols"},K={class:"panel col-stack md-edit"},Q={class:"panel__head"},X={class:"panel__title"},Y={class:"md-stats"},Z={class:"panel__ops"},tt=["disabled"],et={class:"panel md-preview"},lt={class:"panel__head"},nt={class:"panel__ops"},st=["disabled"],ot=["innerHTML"],H=`# Markdown 编辑预览

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

---

图片：![示例](https://via.placeholder.com/120x60)

普通段落文本，支持自动换行与中英文混排。
`,rt={__name:"MarkdownTool",setup(at){const s=v(H),g=v(!1),_=v(!1);function M(l){l.querySelectorAll("*").forEach(t=>{const n=getComputedStyle(t),e=["display","margin","padding","color","background-color","background","font-family","font-size","font-weight","font-style","line-height","text-align","text-decoration","border","border-radius","width","height","white-space","overflow","text-overflow","border-collapse"],o={};for(const c of e){const r=n.getPropertyValue(c);r&&r!=="none"&&(o[c]=r)}Object.keys(o).length&&Object.assign(t.style,o)})}function C(){var t;const l=document.createElement("div");l.className="md-html",l.setAttribute("style","position:fixed;left:-9999px;top:0;visibility:hidden;width:60rem;"),document.body.appendChild(l);try{l.innerHTML=y.value;const n=getComputedStyle(l);for(const e of["font-size","color","line-height","font-family"]){const o=n.getPropertyValue(e);o&&(l.style[e]=o)}M(l),(t=navigator.clipboard)==null||t.writeText(l.outerHTML),_.value=!0,setTimeout(()=>_.value=!1,1500)}finally{document.body.removeChild(l)}}function u(l){return l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function d(l){return l.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g,'<img src="$2" alt="$1" />').replace(/\[([^\]]+)\]\(([^)\s]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>').replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>").replace(/~~([^~]+)~~/g,"<del>$1</del>")}function L(l){const t=l.split(`
`),n=[];let e=0;for(;e<t.length;){const o=t[e];if(/^```/.test(o)){const i=o.slice(3).trim(),f=[];for(e++;e<t.length&&!/^```/.test(t[e]);)f.push(t[e++]);e++,n.push(`<pre class="md-pre" data-lang="${u(i)}"><code>${u(f.join(`
`))}</code></pre>`);continue}if(!o.trim()){e++;continue}if(/^(---|\*\*\*|___)\s*$/.test(o)){n.push("<hr />"),e++;continue}const c=o.match(/^(#{1,6})\s+(.*)$/);if(c){const i=c[1].length;n.push(`<h${i}>${d(u(c[2]))}</h${i}>`),e++;continue}if(/^>\s?/.test(o)){const i=[];for(;e<t.length&&/^>\s?/.test(t[e]);)i.push(t[e++].replace(/^>\s?/,""));n.push(`<blockquote>${d(u(i.join(" ")))}</blockquote>`);continue}if(/\|/.test(o)&&e+1<t.length&&/^\s*\|?[\s:|-]+\|[\s:|-]*$/.test(t[e+1])){const i=m=>m.replace(/^\s*\|/,"").replace(/\|\s*$/,"").split("|").map(k=>k.trim()),f=i(o);e+=2;const x=[];for(;e<t.length&&/\|/.test(t[e]);)x.push(i(t[e++]));n.push(`<table><thead><tr>${f.map(m=>`<th>${d(u(m))}</th>`).join("")}</tr></thead><tbody>${x.map(m=>`<tr>${m.map(k=>`<td>${d(u(k))}</td>`).join("")}</tr>`).join("")}</tbody></table>`);continue}if(/^\s*[-*+]\s+/.test(o)){const i=[];for(;e<t.length&&/^\s*[-*+]\s+/.test(t[e]);)i.push(`<li>${d(u(t[e++].replace(/^\s*[-*+]\s+/,"")))}</li>`);n.push(`<ul>${i.join("")}</ul>`);continue}if(/^\s*\d+\.\s+/.test(o)){const i=[];for(;e<t.length&&/^\s*\d+\.\s+/.test(t[e]);)i.push(`<li>${d(u(t[e++].replace(/^\s*\d+\.\s+/,"")))}</li>`);n.push(`<ol>${i.join("")}</ol>`);continue}const r=[];for(;e<t.length&&t[e].trim()&&!/^(#{1,6}\s|```|>|---|\s*[-*+]\s|\s*\d+\.\s)/.test(t[e]);)r.push(t[e++]);r.length?n.push(`<p>${d(u(r.join(" ")))}</p>`):e++}return n.join(`
`)}const y=j(()=>L(s.value)),$=j(()=>{const l=s.value.length,t=s.value.trim()?s.value.trim().split(/\s+|\n/).filter(Boolean).length:0,n=s.value.split(`
`).length;return{chars:l,words:t,lines:n}}),w=v(null);function p(l,t,n){const e=w.value;if(!e){s.value+=l+n+t;return}const o=e.selectionStart,c=e.selectionEnd,r=s.value.slice(o,c)||n;s.value=s.value.slice(0,o)+l+r+t+s.value.slice(c),F(()=>{e.focus(),e.selectionStart=o+l.length,e.selectionEnd=o+l.length+r.length})}function h(l){const t=w.value,n=(t==null?void 0:t.selectionStart)??s.value.length,e=s.value.lastIndexOf(`
`,n-1)+1;s.value=s.value.slice(0,e)+l+s.value.slice(e)}const O=[{label:"H1",title:"一级标题",run:()=>h("# ")},{label:"H2",title:"二级标题",run:()=>h("## ")},{label:"H3",title:"三级标题",run:()=>h("### ")},{label:"B",title:"粗体",run:()=>p("**","**","粗体")},{label:"I",title:"斜体",run:()=>p("*","*","斜体")},{label:"S",title:"删除线",run:()=>p("~~","~~","删除线")},{label:"</>",title:"行内代码",run:()=>p("`","`","code")},{label:"```",title:"代码块",run:()=>p("\n```\n","\n```\n","// code")},{label:"🔗",title:"链接",run:()=>p("[","](https://)","链接文字")},{label:"🖼️",title:"图片",run:()=>p("![","](https://)","alt")},{label:"• 列表",title:"无序列表",run:()=>h("- ")},{label:"1. 列表",title:"有序列表",run:()=>h("1. ")},{label:"❝",title:"引用",run:()=>h("> ")},{label:"表格",title:"插入表格",run:()=>{s.value+=`
| 列1 | 列2 | 列3 |
| --- | --- | --- |
| 内容 | 内容 | 内容 |
`}},{label:"分割线",title:"水平分割线",run:()=>{s.value+=`
---
`}}];function E(){s.value=H}function V(){s.value=""}function q(){const l=s.value.split(`
`),t=[],n=/^(#{1,6}\s|---$|```)/;for(let o=0;o<l.length;o++){const c=l[o];n.test(c)&&t.length&&t[t.length-1].trim()!==""&&t.push(""),t.push(c)}let e=t.join(`
`).replace(/\n{3,}/g,`

`).replace(/[ \t]+$/gm,"");e&&!e.endsWith(`
`)&&(e+=`
`),s.value=e}function A(){var l;s.value&&((l=navigator.clipboard)==null||l.writeText(s.value),g.value=!0,setTimeout(()=>g.value=!1,1200))}return(l,t)=>(S(),T("div",G,[B(R,{title:"Markdown 编辑预览",desc:"实时编辑与预览 Markdown，支持工具条快捷插入、示例填充与格式美化"}),a("div",J,[(S(),T(N,null,D(O,n=>a("button",{key:n.label,class:"btn btn--s",type:"button",title:n.title,onClick:e=>n.run()},b(n.label),9,U)),64))]),a("div",W,[a("div",K,[a("div",Q,[a("span",X,[t[1]||(t[1]=I("内容输入 ",-1)),a("span",Y,b($.value.chars)+" 字符 · "+b($.value.words)+" 词 · "+b($.value.lines)+" 行",1)]),a("span",Z,[a("button",{class:"btn btn--s btn--primary",type:"button",onClick:E},"添加示例"),a("button",{class:"btn btn--s",type:"button",onClick:q},"美化"),a("button",{class:"btn btn--s",type:"button",onClick:V},"清除"),a("button",{class:"btn btn--s",type:"button",disabled:!s.value,onClick:A},b(g.value?"已复制":"复制"),9,tt)])]),P(a("textarea",{ref_key:"editor",ref:w,"onUpdate:modelValue":t[0]||(t[0]=n=>s.value=n),class:"textarea textarea--xl",spellcheck:"false"},null,512),[[z,s.value]])]),a("div",et,[a("div",lt,[t[2]||(t[2]=a("span",{class:"panel__title"},"预览",-1)),a("span",nt,[a("button",{class:"btn btn--s",type:"button",disabled:!y.value,onClick:C},b(_.value?"已复制":"复制 HTML"),9,st)])]),a("div",{class:"md-preview__body md-html",innerHTML:y.value},null,8,ot)])])]))}};export{rt as default};

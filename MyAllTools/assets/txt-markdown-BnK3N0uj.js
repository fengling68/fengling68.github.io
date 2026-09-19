import{T as P}from"./ToolHeader-nPxEpWTx.js";import{d as H,k as u,e as y,F,j as R,w as p,b as S,o as M,l as h,f as g,r as b,c as C,D as J}from"./index-zEoXYsTd.js";const U={class:"md-tool"},W={class:"md-toolbar"},Y={class:"tool-cols"},G={class:"md-stats"},K=["innerHTML"],j=`# Markdown 编辑预览

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
`,ee={__name:"txt-markdown",setup(Q){const n=b(j),A=b(!1),$=b(!1),L={h1:"margin:24px 0 12px;padding-bottom:8px;border-bottom:3px solid #0d9488;font-size:26px;color:#0f766e;",h2:"margin:22px 0 10px;padding-bottom:6px;border-bottom:1px solid #99f6e4;font-size:21px;color:#115e59;",h3:"margin:18px 0 8px;font-size:18px;color:#134e4a;",h4:"margin:16px 0 6px;font-size:16px;color:#155e75;",h5:"margin:14px 0 6px;font-size:14px;color:#155e75;",h6:"margin:14px 0 6px;font-size:13px;color:#155e75;"};function B(){var t;const s=T.value;if(!s)return;const e=s.cloneNode(!0);e.setAttribute("style","display:block;max-width:720px;margin:0 auto;padding:18px;box-sizing:border-box;font-family:'PingFang SC','Microsoft YaHei','Helvetica Neue',Arial,sans-serif;font-size:15px;line-height:1.8;color:#1f2937;background:#fff;");const l=(o,a)=>o.forEach(i=>i.setAttribute("style",a));e.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach(o=>{const a=L[o.tagName.toLowerCase()];o.setAttribute("style",a+"font-weight:700;line-height:1.4;")}),l(e.querySelectorAll("p"),"margin:8px 0;"),l(e.querySelectorAll("strong"),"color:#be123c;font-weight:700;"),l(e.querySelectorAll("em"),"color:#6d28d9;font-style:italic;"),l(e.querySelectorAll("a"),"color:#2563eb;text-decoration:underline;"),l(e.querySelectorAll("del"),"color:#9ca3af;"),l(e.querySelectorAll("img"),"max-width:100%;border-radius:8px;"),l(e.querySelectorAll("ul"),"margin:8px 0;padding-left:22px;"),l(e.querySelectorAll("ol"),"margin:8px 0;padding-left:22px;"),l(e.querySelectorAll("li"),"margin:4px 0;"),l(e.querySelectorAll("blockquote"),"margin:12px 0;padding:8px 16px;border-left:4px solid #0d9488;background:#f0fdfa;color:#134e4a;border-radius:0 8px 8px 0;"),l(e.querySelectorAll("hr"),"margin:20px 0;border:0;border-top:2px dashed #14b8a6;"),l(e.querySelectorAll("table"),"width:100%;border-collapse:collapse;margin:12px 0;font-size:14px;"),l(e.querySelectorAll("th"),"padding:8px 12px;border:1px solid #cbd5e1;background:#0d9488;color:#fff;text-align:left;font-weight:600;"),l(e.querySelectorAll("td"),"padding:8px 12px;border:1px solid #cbd5e1;"),l(e.querySelectorAll(":not(pre) > code"),"padding:2px 6px;background:#eef2ff;color:#7c3aed;border-radius:4px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:90%;"),e.querySelectorAll("pre").forEach(o=>{const a=(o.getAttribute("data-lang")||"").trim(),i=a?`<span style="display:block;margin:-8px -12px 8px;padding:4px 12px;background:#1f2937;color:#7dd3fc;font-size:11px;font-family:ui-monospace,Menlo,Consolas,monospace;border-radius:8px 8px 0 0;letter-spacing:.5px">${c(a)}</span>`:"";o.setAttribute("style","position:relative;margin:12px 0;padding:12px;background:#0f172a;border-radius:8px;overflow:auto;"),o.innerHTML=i+o.innerHTML,l(o.querySelectorAll("code"),"display:block;background:transparent;color:#e2e8f0;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px;line-height:1.7;white-space:pre;")}),(t=navigator.clipboard)==null||t.writeText(e.outerHTML).catch(()=>{}),$.value=!0,setTimeout(()=>$.value=!1,1500)}function c(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function d(s){return s.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g,'<img src="$2" alt="$1" />').replace(/\[([^\]]+)\]\(([^)\s]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>').replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>").replace(/~~([^~]+)~~/g,"<del>$1</del>")}function E(s){const e=s.split(`
`),l=[];let t=0;for(;t<e.length;){const o=e[t];if(/^```/.test(o)){const r=o.slice(3).trim(),v=[];for(t++;t<e.length&&!/^```/.test(e[t]);)v.push(e[t++]);t++,l.push(`<pre class="md-pre" data-lang="${c(r)}"><code>${c(v.join(`
`))}</code></pre>`);continue}if(!o.trim()){t++;continue}if(/^(---|\*\*\*|___)\s*$/.test(o)){l.push("<hr />"),t++;continue}const a=o.match(/^(#{1,6})\s+(.*)$/);if(a){const r=a[1].length;l.push(`<h${r}>${d(c(a[2]))}</h${r}>`),t++;continue}if(/^>\s?/.test(o)){const r=[];for(;t<e.length&&/^>\s?/.test(e[t]);)r.push(e[t++].replace(/^>\s?/,""));l.push(`<blockquote>${d(c(r.join(" ")))}</blockquote>`);continue}if(/\|/.test(o)&&t+1<e.length&&/^\s*\|?[\s:|-]+\|[\s:|-]*$/.test(e[t+1])){const r=x=>x.replace(/^\s*\|/,"").replace(/\|\s*$/,"").split("|").map(w=>w.trim()),v=r(o);t+=2;const z=[];for(;t<e.length&&/\|/.test(e[t]);)z.push(r(e[t++]));l.push(`<table><thead><tr>${v.map(x=>`<th>${d(c(x))}</th>`).join("")}</tr></thead><tbody>${z.map(x=>`<tr>${x.map(w=>`<td>${d(c(w))}</td>`).join("")}</tr>`).join("")}</tbody></table>`);continue}if(/^\s*[-*+]\s+/.test(o)){const r=[];for(;t<e.length&&/^\s*[-*+]\s+/.test(e[t]);)r.push(`<li>${d(c(e[t++].replace(/^\s*[-*+]\s+/,"")))}</li>`);l.push(`<ul>${r.join("")}</ul>`);continue}if(/^\s*\d+\.\s+/.test(o)){const r=[];for(;t<e.length&&/^\s*\d+\.\s+/.test(e[t]);)r.push(`<li>${d(c(e[t++].replace(/^\s*\d+\.\s+/,"")))}</li>`);l.push(`<ol>${r.join("")}</ol>`);continue}const i=[];for(;t<e.length&&e[t].trim()&&!/^(#{1,6}\s|```|>|---|\s*[-*+]\s|\s*\d+\.\s)/.test(e[t]);)i.push(e[t++]);i.length?l.push(`<p>${d(c(i.join(" ")))}</p>`):t++}return l.join(`
`)}const q=C(()=>E(n.value)),k=C(()=>{const s=n.value.length,e=n.value.trim()?n.value.trim().split(/\s+|\n/).filter(Boolean).length:0,l=n.value.split(`
`).length;return{chars:s,words:e,lines:l}}),_=b(null),T=b(null);function f(s,e,l){var r;const t=(r=_.value)==null?void 0:r.$el;if(!t){n.value+=s+l+e;return}const o=t.selectionStart,a=t.selectionEnd,i=n.value.slice(o,a)||l;n.value=n.value.slice(0,o)+s+i+e+n.value.slice(a),J(()=>{t.focus(),t.selectionStart=o+s.length,t.selectionEnd=o+s.length+i.length})}function m(s){var o;const e=(o=_.value)==null?void 0:o.$el,l=(e==null?void 0:e.selectionStart)??n.value.length,t=n.value.lastIndexOf(`
`,l-1)+1;n.value=n.value.slice(0,t)+s+n.value.slice(t)}const N=[{label:"H1",title:"一级标题",run:()=>m("# ")},{label:"H2",title:"二级标题",run:()=>m("## ")},{label:"H3",title:"三级标题",run:()=>m("### ")},{label:"B",title:"粗体",run:()=>f("**","**","粗体")},{label:"I",title:"斜体",run:()=>f("*","*","斜体")},{label:"S",title:"删除线",run:()=>f("~~","~~","删除线")},{label:"</>",title:"行内代码",run:()=>f("`","`","code")},{label:"```",title:"代码块",run:()=>f("\n```\n","\n```\n","// code")},{label:"🔗",title:"链接",run:()=>f("[","](https://)","链接文字")},{label:"🖼️",title:"图片",run:()=>f("![","](https://)","alt")},{label:"• 列表",title:"无序列表",run:()=>m("- ")},{label:"1. 列表",title:"有序列表",run:()=>m("1. ")},{label:"❝",title:"引用",run:()=>m("> ")},{label:"表格",title:"插入表格",run:()=>{n.value+=`
| 列1 | 列2 | 列3 |
| --- | --- | --- |
| 内容 | 内容 | 内容 |
`}},{label:"分割线",title:"水平分割线",run:()=>{n.value+=`
---
`}}];function I(){n.value=j}function V(){n.value=""}function O(){const s=n.value.split(`
`),e=[],l=/^(#{1,6}\s|---$|```)/;for(let o=0;o<s.length;o++){const a=s[o];l.test(a)&&e.length&&e[e.length-1].trim()!==""&&e.push(""),e.push(a)}let t=e.join(`
`).replace(/\n{3,}/g,`

`).replace(/[ \t]+$/gm,"");t&&!t.endsWith(`
`)&&(t+=`
`),n.value=t}function D(){var s;n.value&&((s=navigator.clipboard)==null||s.writeText(n.value),A.value=!0,setTimeout(()=>A.value=!1,1200))}return(s,e)=>{const l=S("AtomButton"),t=S("AtomInputTextArea"),o=S("AtomPanel");return M(),H("div",U,[u(P,{title:"Markdown 编辑预览",desc:"实时编辑与预览 Markdown，支持工具条快捷插入、示例填充与格式美化"}),y("div",W,[(M(),H(F,null,R(N,a=>u(l,{key:a.label,size:"s",title:a.title,onClick:i=>a.run()},{default:p(()=>[h(g(a.label),1)]),_:2},1032,["title","onClick"])),64))]),y("div",Y,[u(o,{title:"内容输入",column:""},{"head-ops":p(()=>[y("span",G,g(k.value.chars)+" 字符 · "+g(k.value.words)+" 词 · "+g(k.value.lines)+" 行",1),u(l,{size:"s",variant:"primary",onClick:I},{default:p(()=>[...e[1]||(e[1]=[h("添加示例",-1)])]),_:1}),u(l,{size:"s",onClick:O},{default:p(()=>[...e[2]||(e[2]=[h("美化",-1)])]),_:1}),u(l,{size:"s",onClick:V},{default:p(()=>[...e[3]||(e[3]=[h("清除",-1)])]),_:1}),u(l,{size:"s",disabled:!n.value,onClick:D},{default:p(()=>[h(g(A.value?"已复制":"复制"),1)]),_:1},8,["disabled"])]),default:p(()=>[u(t,{ref_key:"editor",ref:_,modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=a=>n.value=a),size:"xxxl",spellcheck:"false"},null,8,["modelValue"])]),_:1}),u(o,{title:"预览"},{"head-ops":p(()=>[u(l,{size:"s",disabled:!q.value,onClick:B},{default:p(()=>[h(g($.value?"已复制":"复制 HTML"),1)]),_:1},8,["disabled"])]),default:p(()=>[y("div",{ref_key:"previewBody",ref:T,class:"md-preview__body md-html",innerHTML:q.value},null,8,K)]),_:1})])])}}};export{ee as default};

import{_ as e,r as t,o,c,a as n,d as p,b as s,e as r}from"./app.c6be76b0.js";const l={},i=n("h1",{id:"npm-\u547D\u4EE4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#npm-\u547D\u4EE4","aria-hidden":"true"},"#"),s(" npm \u547D\u4EE4")],-1),m={href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"},h=s("NPM\u5B98\u7F51"),d=r(`<h2 id="\u67E5\u8BE2\u8BBE\u7F6E\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u8BBE\u7F6E\u955C\u50CF" aria-hidden="true">#</a> \u67E5\u8BE2\u8BBE\u7F6E\u955C\u50CF</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u67E5\u8BE2\u5F53\u524D\u914D\u7F6E\u7684\u955C\u50CF</span>
<span class="token function">npm</span> get registry //https://registry.npmjs.org/ 

<span class="token comment"># \u8BBE\u7F6E\u6210\u6DD8\u5B9D\u955C\u50CF</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry http://registry.npm.taobao.org/

<span class="token comment"># \u6362\u6210\u539F\u6765\u955C\u50CF\uFF08\u53D1\u5E03npm\u5305\u9700\u8981\u5207\u56DE\u539F\u955C\u50CF\uFF09</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org/
</code></pre></div><h2 id="\u53D1\u5E03\u5220\u9664\u5305" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03\u5220\u9664\u5305" aria-hidden="true">#</a> \u53D1\u5E03\u5220\u9664\u5305</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u767B\u5F55</span>
<span class="token function">npm</span> login

<span class="token comment"># \u5728\u539F\u7248\u672C\u4E0A + 1</span>
<span class="token function">npm</span> version patch

<span class="token comment"># \u53D1\u5E03\u5305</span>
<span class="token function">npm</span> publish

<span class="token comment"># \u5220\u9664\u6307\u5B9A\u7248\u672C\u5305</span>
<span class="token function">npm</span> unpublish name@0.0.1

<span class="token comment"># \u5220\u9664\u6574\u4E2A\u5305</span>
<span class="token function">npm</span> unpublish name <span class="token parameter variable">--force</span>
</code></pre></div>`,4);function u(_,k){const a=t("ExternalLinkIcon");return o(),c("div",null,[i,n("p",null,[n("a",m,[h,p(a)])]),d])}const g=e(l,[["render",u],["__file","npm \u547D\u4EE4.html.vue"]]);export{g as default};

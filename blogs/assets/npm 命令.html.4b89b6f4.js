import{_ as e,r as t,o,c,a as n,b as a,d as p,f as r}from"./app.70e3165a.js";const l={},i=n("h1",{id:"npm-命令",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#npm-命令","aria-hidden":"true"},"#"),a(" npm 命令")],-1),m={href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"},d=r(`<h2 id="查询设置镜像" tabindex="-1"><a class="header-anchor" href="#查询设置镜像" aria-hidden="true">#</a> 查询设置镜像</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查询当前配置的镜像</span>
<span class="token function">npm</span> config get registry

<span class="token comment"># 设置成淘宝镜像</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry http://registry.npm.taobao.org/

<span class="token comment"># 换成原来镜像（发布npm包需要切回原镜像）</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org/
</code></pre></div><h2 id="发布删除包" tabindex="-1"><a class="header-anchor" href="#发布删除包" aria-hidden="true">#</a> 发布删除包</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 登录</span>
<span class="token function">npm</span> login

<span class="token comment"># 在原版本上 + 1</span>
<span class="token function">npm</span> version patch

<span class="token comment"># 发布包</span>
<span class="token function">npm</span> publish

<span class="token comment"># 删除指定版本包</span>
<span class="token function">npm</span> unpublish name@0.0.1

<span class="token comment"># 删除整个包</span>
<span class="token function">npm</span> unpublish name <span class="token parameter variable">--force</span>
</code></pre></div>`,4);function h(u,f){const s=t("ExternalLinkIcon");return o(),c("div",null,[i,n("p",null,[n("a",m,[a("NPM官网"),p(s)])]),d])}const _=e(l,[["render",h],["__file","npm 命令.html.vue"]]);export{_ as default};

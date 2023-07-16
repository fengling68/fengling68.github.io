import{_ as p,r as o,o as e,c,a as n,b as s,d as l,f as a}from"./app.b042072c.js";const r={},u=n("h1",{id:"npm-发布工具包",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#npm-发布工具包","aria-hidden":"true"},"#"),s(" npm 发布工具包")],-1),i=n("h2",{id:"简单步骤介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简单步骤介绍","aria-hidden":"true"},"#"),s(" 简单步骤介绍")],-1),k=a("<li><p>按照目录结构创建相应文件；</p></li><li><p>添加 <code>src</code> 代码逻辑；</p></li><li><p>简单配置 <code>rollup.config.js</code> 的编译入口和出口；</p></li><li><p>配置 <code>package.json</code> &amp; <code>.gitignore</code> 文件</p></li><li><p><code>npm i</code> &amp; <code>npm run build</code> 安装依赖和打包</p></li>",5),d={href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"},g=a(`<p>PS：实际项目中可采用 <code>npm init</code> 、<code>vue-cli</code> 等创建编译打包项目后发布，本文主要是为了学习如何发布 npm 包而写的简单示例。</p><h2 id="先上目录结构" tabindex="-1"><a class="header-anchor" href="#先上目录结构" aria-hidden="true">#</a> 先上目录结构</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── .gitignore
├── package.json
├── rollup.config.js
└── src
    ├── date.js
    ├── os.js
    └── main.js
</code></pre></div><h2 id="src" tabindex="-1"><a class="header-anchor" href="#src" aria-hidden="true">#</a> src</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// date.js</span>
<span class="token keyword">function</span> <span class="token function">dateHandle</span><span class="token punctuation">(</span><span class="token parameter">flag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>flag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> --- test</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  dateHandle
<span class="token punctuation">}</span>

<span class="token comment">// os.js</span>
<span class="token keyword">function</span> <span class="token function">osHandle</span><span class="token punctuation">(</span><span class="token parameter">flag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>flag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> --- test</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  osHandle
<span class="token punctuation">}</span>

<span class="token comment">// main.js</span>
<span class="token keyword">import</span> dateUtils <span class="token keyword">from</span> <span class="token string">&#39;./date&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> osUtils <span class="token keyword">from</span> <span class="token string">&#39;./os&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>
  dateUtils<span class="token punctuation">,</span>
  osUtils<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="rollup-config-js" tabindex="-1"><a class="header-anchor" href="#rollup-config-js" aria-hidden="true">#</a> rollup.config.js</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 这里借助 rollup 编译打包</span>
<span class="token comment">// https://www.rollupjs.com/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&#39;src/main.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;cjs&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h2><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;package-name&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;测试测试测试&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxxxxx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span><span class="token string">&quot;MIT&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span><span class="token string">&quot;main.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rollup --config&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;rollup&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.18.1&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="gitignore" tabindex="-1"><a class="header-anchor" href="#gitignore" aria-hidden="true">#</a> .gitignore</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">.</span>DS_Store
node_modules

# local env files
<span class="token punctuation">.</span>env<span class="token punctuation">.</span>local
<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span>local

# Log files
npm<span class="token operator">-</span>debug<span class="token punctuation">.</span>log<span class="token operator">*</span>
yarn<span class="token operator">-</span>debug<span class="token punctuation">.</span>log<span class="token operator">*</span>
yarn<span class="token operator">-</span>error<span class="token punctuation">.</span>log<span class="token operator">*</span>

# Editor directories and files
<span class="token punctuation">.</span>idea
<span class="token punctuation">.</span>vscode
<span class="token operator">*</span><span class="token punctuation">.</span>suo
<span class="token operator">*</span><span class="token punctuation">.</span>ntvs<span class="token operator">*</span>
<span class="token operator">*</span><span class="token punctuation">.</span>njsproj
<span class="token operator">*</span><span class="token punctuation">.</span>sln
<span class="token operator">*</span><span class="token punctuation">.</span>sw<span class="token operator">?</span>
</code></pre></div><h2 id="相关执行命令" tabindex="-1"><a class="header-anchor" href="#相关执行命令" aria-hidden="true">#</a> 相关执行命令</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 编辑好上述代码后</span>
<span class="token function">npm</span> i

<span class="token comment"># build</span>
<span class="token function">npm</span> run build

<span class="token comment"># 发布到npm</span>
<span class="token function">npm</span> login
<span class="token function">npm</span> publish

<span class="token comment"># 给npm添加权限</span>
<span class="token function">npm</span> owner <span class="token function">add</span> username packagename
<span class="token punctuation">..</span>.

</code></pre></div>`,13);function m(h,f){const t=o("ExternalLinkIcon");return e(),c("div",null,[u,i,n("ol",null,[k,n("li",null,[n("p",null,[s("发布到"),n("a",d,[s("npm"),l(t)]),s("上（要先注册账号哦～）")])])]),g])}const j=p(r,[["render",m],["__file","npm 发布工具包.html.vue"]]);export{j as default};

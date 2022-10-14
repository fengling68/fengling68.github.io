import{_ as p,r as o,o as e,c,a as n,b as s,e as l,f as a}from"./app.8c2947ab.js";const r={},u=n("h1",{id:"npm-\u53D1\u5E03\u5DE5\u5177\u5305",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#npm-\u53D1\u5E03\u5DE5\u5177\u5305","aria-hidden":"true"},"#"),s(" npm \u53D1\u5E03\u5DE5\u5177\u5305")],-1),i=n("h2",{id:"\u7B80\u5355\u6B65\u9AA4\u4ECB\u7ECD",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7B80\u5355\u6B65\u9AA4\u4ECB\u7ECD","aria-hidden":"true"},"#"),s(" \u7B80\u5355\u6B65\u9AA4\u4ECB\u7ECD")],-1),k=a("<li><p>\u6309\u7167\u76EE\u5F55\u7ED3\u6784\u521B\u5EFA\u76F8\u5E94\u6587\u4EF6\uFF1B</p></li><li><p>\u6DFB\u52A0 <code>src</code> \u4EE3\u7801\u903B\u8F91\uFF1B</p></li><li><p>\u7B80\u5355\u914D\u7F6E <code>rollup.config.js</code> \u7684\u7F16\u8BD1\u5165\u53E3\u548C\u51FA\u53E3\uFF1B</p></li><li><p>\u914D\u7F6E <code>package.json</code> &amp; <code>.gitignore</code> \u6587\u4EF6</p></li><li><p><code>npm i</code> &amp; <code>npm run build</code> \u5B89\u88C5\u4F9D\u8D56\u548C\u6253\u5305</p></li>",5),d={href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"},g=a(`<p>PS\uFF1A\u5B9E\u9645\u9879\u76EE\u4E2D\u53EF\u91C7\u7528 <code>npm init</code> \u3001<code>vue-cli</code> \u7B49\u521B\u5EFA\u7F16\u8BD1\u6253\u5305\u9879\u76EE\u540E\u53D1\u5E03\uFF0C\u672C\u6587\u4E3B\u8981\u662F\u4E3A\u4E86\u5B66\u4E60\u5982\u4F55\u53D1\u5E03 npm \u5305\u800C\u5199\u7684\u7B80\u5355\u793A\u4F8B\u3002</p><h2 id="\u5148\u4E0A\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u5148\u4E0A\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u5148\u4E0A\u76EE\u5F55\u7ED3\u6784</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
\u251C\u2500\u2500 .gitignore
\u251C\u2500\u2500 package.json
\u251C\u2500\u2500 rollup.config.js
\u2514\u2500\u2500 src
    \u251C\u2500\u2500 date.js
    \u251C\u2500\u2500 os.js
    \u2514\u2500\u2500 main.js
</code></pre></div><h2 id="src" tabindex="-1"><a class="header-anchor" href="#src" aria-hidden="true">#</a> src</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// date.js</span>
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
</code></pre></div><h2 id="rollup-config-js" tabindex="-1"><a class="header-anchor" href="#rollup-config-js" aria-hidden="true">#</a> rollup.config.js</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u8FD9\u91CC\u501F\u52A9 rollup \u7F16\u8BD1\u6253\u5305</span>
<span class="token comment">// https://www.rollupjs.com/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&#39;src/main.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;cjs&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h2><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;package-name&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6D4B\u8BD5\u6D4B\u8BD5\u6D4B\u8BD5&quot;</span><span class="token punctuation">,</span>
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
</code></pre></div><h2 id="gitignore" tabindex="-1"><a class="header-anchor" href="#gitignore" aria-hidden="true">#</a> .gitignore</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">.</span>DS_Store
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
</code></pre></div><h2 id="\u76F8\u5173\u6267\u884C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u6267\u884C\u547D\u4EE4" aria-hidden="true">#</a> \u76F8\u5173\u6267\u884C\u547D\u4EE4</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u7F16\u8F91\u597D\u4E0A\u8FF0\u4EE3\u7801\u540E</span>
<span class="token function">npm</span> i

<span class="token comment"># build</span>
<span class="token function">npm</span> run build

<span class="token comment"># \u53D1\u5E03\u5230npm</span>
<span class="token function">npm</span> login
<span class="token function">npm</span> publish

<span class="token comment"># \u7ED9npm\u6DFB\u52A0\u6743\u9650</span>
<span class="token function">npm</span> owner <span class="token function">add</span> username packagename
<span class="token punctuation">..</span>.

</code></pre></div>`,13);function m(h,f){const t=o("ExternalLinkIcon");return e(),c("div",null,[u,i,n("ol",null,[k,n("li",null,[n("p",null,[s("\u53D1\u5E03\u5230"),n("a",d,[s("npm"),l(t)]),s("\u4E0A\uFF08\u8981\u5148\u6CE8\u518C\u8D26\u53F7\u54E6\uFF5E\uFF09")])])]),g])}const j=p(r,[["render",m],["__file","npm \u53D1\u5E03\u5DE5\u5177\u5305.html.vue"]]);export{j as default};

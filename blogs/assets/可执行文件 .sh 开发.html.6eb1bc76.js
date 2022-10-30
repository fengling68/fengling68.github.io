import{_ as s,o as n,c as a,f as e}from"./app.91260e94.js";const t={},o=e(`<h1 id="\u53EF\u6267\u884C\u6587\u4EF6-sh-\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u53EF\u6267\u884C\u6587\u4EF6-sh-\u5F00\u53D1" aria-hidden="true">#</a> \u53EF\u6267\u884C\u6587\u4EF6 .sh \u5F00\u53D1</h1><h2 id="\u521B\u5EFA\u53EF\u6267\u884C\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u53EF\u6267\u884C\u6587\u4EF6" aria-hidden="true">#</a> \u521B\u5EFA\u53EF\u6267\u884C\u6587\u4EF6</h2><ol><li>\u65B0\u5EFA <code>run.txt</code> \u6587\u4EF6\uFF1B</li><li>\u7F16\u8F91\u5185\u5BB9\u5E76\u4FDD\u5B58\uFF1B</li><li>\u4FEE\u6539\u540E\u7F00\u540D\u53D8\u4E3A <code>run.sh</code> \u6587\u4EF6\uFF1B</li><li>\u4FEE\u6539\u6587\u4EF6\u6743\u9650 <code>chmod 755 run.sh</code>\uFF1B</li><li>\u53CC\u51FB\u6587\u4EF6\u6267\u884C\uFF1B</li></ol><h2 id="\u5E38\u7528\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u8BED\u53E5" aria-hidden="true">#</a> \u5E38\u7528\u8BED\u53E5</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5B9A\u4E49\u811A\u672C\u6267\u884C\u5668</span>
<span class="token comment">#!/usr/bin/env/bash</span>
<span class="token comment">#!/usr/bin/env/zsh</span>

<span class="token comment"># \u7528app\u65B0\u5F00\u7EC8\u7AEF\u6267\u884C\u67D0\u547D\u4EE4\u6587\u4EF6</span>
<span class="token function">open</span> <span class="token parameter variable">-a</span> iTerm.app <span class="token string">&quot;./runsh&quot;</span>

<span class="token comment"># \u547D\u4EE4\u6267\u884C\u5B8C\u4E0D\u5173\u95ED\u7EC8\u7AEF</span>
<span class="token builtin class-name">exec</span> /bin/bash
</code></pre></div><h2 id="\u8DEF\u5F84\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u5F84\u53D8\u91CF" aria-hidden="true">#</a> \u8DEF\u5F84\u53D8\u91CF</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># dirname $0\uFF0C\u53D6\u5F97\u5F53\u524D\u6267\u884C\u7684\u811A\u672C\u6587\u4EF6\u7684\u7236\u76EE\u5F55</span>
<span class="token assign-left variable">basepath</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> \`dirname $0\`<span class="token punctuation">;</span> <span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>

<span class="token comment"># \u6253\u5370\u5F53\u524D\u8DEF\u5F84</span>
<span class="token assign-left variable">currentPath</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5F53\u524D\u6587\u4EF6\u5939\u8DEF\u5F84: <span class="token variable">$currentPath</span>&quot;</span>

<span class="token comment"># \u8FDB\u5165\u5230temp\u6240\u5728\u7684\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> <span class="token variable">\${basepath}</span>/works/2018OnlyShare
</code></pre></div><h2 id="\u793A\u4F8B\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B\u6587\u4EF6" aria-hidden="true">#</a> \u793A\u4F8B\u6587\u4EF6</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env/bash</span>
    
<span class="token comment"># \u786E\u4FDD\u811A\u672C\u629B\u51FA\u9047\u5230\u7684\u9519\u8BEF</span>
<span class="token comment"># set -e</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u8BF7\u9009\u62E9\u672C\u5730\u8C03\u8BD5 or \u6253\u5305\u4E0A\u4F20&quot;</span>
<span class="token keyword">select</span> <span class="token for-or-select variable">type</span> <span class="token keyword">in</span> <span class="token string">&quot;run&quot;</span> <span class="token string">&quot;build&quot;</span> <span class="token string">&quot;push&quot;</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
<span class="token builtin class-name">break</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u4F60\u5DF2\u9009\u62E9 <span class="token variable">$type</span>&quot;</span>

<span class="token comment"># \u8FD0\u884C\u672C\u5730\u9879\u76EE</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$type</span> <span class="token operator">==</span> <span class="token string">&quot;run&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u8BF7\u9009\u62E9\u4F60\u60F3\u8FD0\u884C\u7684\u6587\u4EF6\u76EE\u5F55\uFF1A&quot;</span>
  <span class="token keyword">select</span> <span class="token for-or-select variable">catalog</span> <span class="token keyword">in</span> <span class="token string">&quot;css&quot;</span> <span class="token string">&quot;javascript&quot;</span> <span class="token string">&quot;question&quot;</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token builtin class-name">break</span>
  <span class="token keyword">done</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u4F60\u5DF2\u9009\u62E9 <span class="token variable">$catalog</span>&quot;</span>

  <span class="token comment"># \u8FDB\u5165\u6253\u5305\u6587\u4EF6</span>
  <span class="token builtin class-name">cd</span> <span class="token variable">$catalog</span>/

  <span class="token comment"># build\u6587\u4EF6</span>
  <span class="token function">npm</span> run dev

<span class="token comment"># \u9009\u62E9\u6253\u5305\u6587\u4EF6</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$type</span> <span class="token operator">==</span> <span class="token string">&quot;build&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u8BF7\u9009\u62E9\u4F60\u60F3\u6253\u5305\u7684\u6587\u4EF6\u76EE\u5F55\uFF1A&quot;</span>
  <span class="token keyword">select</span> <span class="token for-or-select variable">catalog</span> <span class="token keyword">in</span> <span class="token string">&quot;css&quot;</span> <span class="token string">&quot;javascript&quot;</span> <span class="token string">&quot;question&quot;</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token builtin class-name">break</span>
  <span class="token keyword">done</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u4F60\u5DF2\u9009\u62E9 <span class="token variable">$catalog</span>&quot;</span>

  <span class="token comment"># \u8FDB\u5165\u6253\u5305\u6587\u4EF6</span>
  <span class="token builtin class-name">cd</span> <span class="token variable">$catalog</span>/

  <span class="token comment"># build\u6587\u4EF6</span>
  <span class="token function">npm</span> run build

  <span class="token comment"># \u56DE\u5230notes\u76EE\u5F55\u4E0B</span>
  <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/

<span class="token comment"># \u4E0A\u4F20\u5230git\u4ED3\u5E93</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$type</span> <span class="token operator">==</span> <span class="token string">&quot;push&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
  <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;\u65B0\u589E\u6587\u6863&quot;</span>
  <span class="token function">git</span> pull
  <span class="token function">git</span> push
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;notes\u6587\u4EF6\u4E0A\u4F20\u6210\u529F&quot;</span>
<span class="token keyword">fi</span>

<span class="token comment"># \u547D\u4EE4\u6267\u884C\u5B8C\u4E0D\u5173\u95ED\u7EC8\u7AEF</span>
<span class="token builtin class-name">exec</span> /bin/bash
</code></pre></div><h2 id="package-json-\u914D\u7F6E\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#package-json-\u914D\u7F6E\u793A\u4F8B" aria-hidden="true">#</a> package.json \u914D\u7F6E\u793A\u4F8B</h2><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bash deploy.sh&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,11),p=[o];function c(l,i){return n(),a("div",null,p)}const k=s(t,[["render",c],["__file","\u53EF\u6267\u884C\u6587\u4EF6 .sh \u5F00\u53D1.html.vue"]]);export{k as default};

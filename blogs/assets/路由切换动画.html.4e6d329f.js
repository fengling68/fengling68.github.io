import{_ as n,o as s,c as a,a as t}from"./app.ae676a5c.js";const p={},o=t(`<h1 id="\u8DEF\u7531\u5207\u6362\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u5207\u6362\u52A8\u753B" aria-hidden="true">#</a> \u8DEF\u7531\u5207\u6362\u52A8\u753B</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>transition <span class="token operator">:</span>name<span class="token operator">=</span><span class="token string">&quot;transitionName&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>router<span class="token operator">-</span>view <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;transitionBody&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>transition<span class="token operator">&gt;</span>

<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">transitionName</span><span class="token operator">:</span> <span class="token string">&#39;transitionLeft&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">$route</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">$route</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;/pageA&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/pageB&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/pageC&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/pageD&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> compare <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>from<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>transitionName <span class="token operator">=</span> compare <span class="token operator">?</span> <span class="token string">&#39;transitionLeft&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;transitionRight&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token comment">// \u8FC7\u5EA6\u52A8\u753B\uFF0C\u6548\u679C\u4E0D\u592A\u597D\uFF0C\u5F85\u4F18\u5316</span>
<span class="token punctuation">.</span>transitionBody<span class="token punctuation">{</span>
  <span class="token literal-property property">transition</span><span class="token operator">:</span> all <span class="token number">0</span><span class="token punctuation">.</span>2s linear<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>transitionLeft<span class="token operator">-</span>enter<span class="token punctuation">,</span>
<span class="token punctuation">.</span>transitionRight<span class="token operator">-</span>leave<span class="token operator">-</span>active <span class="token punctuation">{</span>
  <span class="token operator">-</span>webkit<span class="token operator">-</span>transform<span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>transitionLeft<span class="token operator">-</span>leave<span class="token operator">-</span>active<span class="token punctuation">,</span>
<span class="token punctuation">.</span>transitionRight<span class="token operator">-</span>enter <span class="token punctuation">{</span>
  <span class="token operator">-</span>webkit<span class="token operator">-</span>transform<span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[o];function c(l,r){return s(),a("div",null,e)}const u=n(p,[["render",c],["__file","\u8DEF\u7531\u5207\u6362\u52A8\u753B.html.vue"]]);export{u as default};

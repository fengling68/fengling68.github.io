import{_ as n,o as s,c as a,a as t}from"./app.ef351b53.js";const p={},o=t(`<h1 id="_20201101-\u95ED\u5305\u6253\u5370\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#_20201101-\u95ED\u5305\u6253\u5370\u6570\u5B57" aria-hidden="true">#</a> 20201101 \u95ED\u5305\u6253\u5370\u6570\u5B57</h1><h2 id="var-settimeout" tabindex="-1"><a class="header-anchor" href="#var-settimeout" aria-hidden="true">#</a> var + setTimeout</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> i <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8F93\u51FA\u7ED3\u679C\uFF1A0 1 2 3 4</span>
<span class="token comment">// but\uFF1AsetTimeout\u672A\u8D77\u4F5C\u7528</span>
</code></pre></div><h2 id="var-settimeout-1" tabindex="-1"><a class="header-anchor" href="#var-settimeout-1" aria-hidden="true">#</a> var + setTimeout</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> i <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8F93\u51FA\u7ED3\u679C\uFF1A5 5 5 5 5</span>
</code></pre></div><h2 id="var-settimeout-\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#var-settimeout-\u95ED\u5305" aria-hidden="true">#</a> var + setTimeout + \u95ED\u5305</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> i <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8F93\u51FA\u7ED3\u679C\uFF1A0 1 2 3 4</span>
</code></pre></div><h2 id="let-settimeout" tabindex="-1"><a class="header-anchor" href="#let-settimeout" aria-hidden="true">#</a> let + setTimeout</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> i <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8F93\u51FA\u7ED3\u679C\uFF1A0 1 2 3 4</span>
</code></pre></div>`,9),e=[o];function c(u,l){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","20201101.html.vue"]]);export{k as default};

import{_ as n,o as s,c as a,f as t}from"./app.0403f9b1.js";const p={},e=t(`<h1 id="_20201104-\u6B63\u5219\u5B9E\u73B0-trim-\u53BB\u7A7A\u683C" tabindex="-1"><a class="header-anchor" href="#_20201104-\u6B63\u5219\u5B9E\u73B0-trim-\u53BB\u7A7A\u683C" aria-hidden="true">#</a> 20201104 \u6B63\u5219\u5B9E\u73B0 trim \u53BB\u7A7A\u683C</h1><h2 id="\u539F\u578B\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u65B9\u5F0F" aria-hidden="true">#</a> \u539F\u578B\u65B9\u5F0F</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u52A0\u5230 String \u5BF9\u8C61\u7684\u5185\u7F6E\u65B9\u6CD5\u4E2D</span>
<span class="token class-name">String</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">trim</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(^\\s*)|(\\s*$)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">String</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">ltrim</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(^\\s*)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">String</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">rtrim</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\s*$)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;background: greenyellow;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;  \u54C8\u54C8\u54C8\u54C8 \u54C8\u54C8\u54C8\u54C8  &#39;</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;background: greenyellow;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;  \u54C8\u54C8\u54C8\u54C8 \u54C8\u54C8\u54C8\u54C8  &#39;</span><span class="token punctuation">.</span><span class="token function">ltrim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;background: greenyellow;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;  \u54C8\u54C8\u54C8\u54C8 \u54C8\u54C8\u54C8\u54C8  &#39;</span><span class="token punctuation">.</span><span class="token function">rtrim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u65B9\u6CD5\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u5C01\u88C5" aria-hidden="true">#</a> \u65B9\u6CD5\u5C01\u88C5</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">strTrim</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> setting <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(^\\s*)|(\\s*$)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">l</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(^\\s*)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\s*$)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>setting<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;background: greenyellow;&#39;</span><span class="token punctuation">,</span> <span class="token function">strTrim</span><span class="token punctuation">(</span><span class="token string">&#39;  \u54C8\u54C8\u54C8\u54C8 \u54C8\u54C8\u54C8\u54C8  &#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;background: greenyellow;&#39;</span><span class="token punctuation">,</span> <span class="token function">strTrim</span><span class="token punctuation">(</span><span class="token string">&#39;  \u54C8\u54C8\u54C8\u54C8 \u54C8\u54C8\u54C8\u54C8  &#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;l&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%c%s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;background: greenyellow;&#39;</span><span class="token punctuation">,</span> <span class="token function">strTrim</span><span class="token punctuation">(</span><span class="token string">&#39;  \u54C8\u54C8\u54C8\u54C8 \u54C8\u54C8\u54C8\u54C8  &#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,5),o=[e];function c(l,u){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","20201104.html.vue"]]);export{k as default};

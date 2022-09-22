import{_ as n,o as s,c as a,a as p}from"./app.ef351b53.js";const t={},o=p(`<h1 id="scss" tabindex="-1"><a class="header-anchor" href="#scss" aria-hidden="true">#</a> scss</h1><h2 id="\u6E32\u67D3\u591A\u5F20\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#\u6E32\u67D3\u591A\u5F20\u56FE\u7247" aria-hidden="true">#</a> \u6E32\u67D3\u591A\u5F20\u56FE\u7247</h2><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.more-image</span> <span class="token punctuation">{</span>
  <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
  <span class="token property">background-position</span><span class="token punctuation">:</span> center center<span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> 3rem 1rem<span class="token punctuation">;</span>

  <span class="token atrule"><span class="token rule">@for</span> $i from 1 through 6</span> <span class="token punctuation">{</span>
    <span class="token selector">&amp;.lock-#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span>
      <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;lock-#{$i}.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6E32\u67D3\u7CBE\u7075\u56FE\u591A\u4E2A\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6E32\u67D3\u7CBE\u7075\u56FE\u591A\u4E2A\u4F4D\u7F6E" aria-hidden="true">#</a> \u6E32\u67D3\u7CBE\u7075\u56FE\u591A\u4E2A\u4F4D\u7F6E</h2><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.more-position</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;list.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> 3rem 1rem<span class="token punctuation">;</span>

  $<span class="token property">leftDiff</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  $<span class="token property">topDiff</span><span class="token punctuation">:</span> -0.1<span class="token punctuation">;</span>
  <span class="token atrule"><span class="token rule">@for</span> $i from 1 through 10</span> <span class="token punctuation">{</span>
    <span class="token selector">&amp;.lock-#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span>
      <span class="token property">background-position</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>$leftDiff<span class="token punctuation">)</span>rem  <span class="token punctuation">(</span>$topDiff * <span class="token punctuation">(</span>$i - 1<span class="token punctuation">)</span><span class="token punctuation">)</span>rem<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6A2A\u5411\u5E8F\u5217\u5E27\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u6A2A\u5411\u5E8F\u5217\u5E27\u6A21\u677F" aria-hidden="true">#</a> \u6A2A\u5411\u5E8F\u5217\u5E27\u6A21\u677F</h2><div class="language-scss ext-scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">animationTemplate</span><span class="token punctuation">(</span><span class="token variable">$aniName</span><span class="token punctuation">,</span> <span class="token property"><span class="token variable">$w</span></span><span class="token punctuation">:</span> 0<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$h</span></span><span class="token punctuation">:</span> 0<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$imgWidth</span></span><span class="token punctuation">:</span> 0<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$count</span></span><span class="token punctuation">:</span> 0<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$w</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">$h</span><span class="token punctuation">;</span>
  <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> <span class="token variable">$imgWidth</span> <span class="token variable">$h</span><span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> <span class="token variable">$aniName</span> 2s <span class="token function">steps</span><span class="token punctuation">(</span><span class="token variable">$count</span><span class="token punctuation">)</span> 1 forwards<span class="token punctuation">;</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> <span class="token variable">#{$aniName}</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">from</span> <span class="token punctuation">{</span>
      <span class="token property">background-position</span><span class="token punctuation">:</span> 0px 0px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">to </span><span class="token punctuation">{</span>
      <span class="token property">background-position</span><span class="token punctuation">:</span> -<span class="token variable">$imgWidth</span> 0px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528\u793A\u4F8B</span>
<span class="token selector">.ani-1-1 </span><span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&quot;xxx.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">@include</span> <span class="token function">animationTemplate</span><span class="token punctuation">(</span>ani-1-1<span class="token punctuation">,</span> 100px<span class="token punctuation">,</span> 100px<span class="token punctuation">,</span> 500px<span class="token punctuation">,</span> 5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,7),c=[o];function e(u,l){return s(),a("div",null,c)}const k=n(t,[["render",e],["__file","scss.html.vue"]]);export{k as default};

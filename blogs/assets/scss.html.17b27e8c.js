import{_ as n,o as s,c as a,f as p}from"./app.7092ccdd.js";const t={},o=p(`<h1 id="scss" tabindex="-1"><a class="header-anchor" href="#scss" aria-hidden="true">#</a> scss</h1><h2 id="呼吸态动画" tabindex="-1"><a class="header-anchor" href="#呼吸态动画" aria-hidden="true">#</a> 呼吸态动画</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">animation-breathe</span><span class="token punctuation">(</span>$<span class="token property">start</span><span class="token punctuation">:</span> 1<span class="token punctuation">,</span> $<span class="token property">end</span><span class="token punctuation">:</span> 0.8<span class="token punctuation">,</span> $<span class="token property">time</span><span class="token punctuation">:</span> 2s<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token property">transform-origin</span><span class="token punctuation">:</span> center center<span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> ani-breathe $time linear infinite<span class="token punctuation">;</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> ani-breathe</span> <span class="token punctuation">{</span>
    <span class="token selector">0%, 100%</span> <span class="token punctuation">{</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>$start<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>$end<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="设置背景图" tabindex="-1"><a class="header-anchor" href="#设置背景图" aria-hidden="true">#</a> 设置背景图</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">bgImg</span><span class="token punctuation">(</span>$w<span class="token punctuation">,</span> $h<span class="token punctuation">,</span> $url<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> $w<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> $h<span class="token punctuation">;</span>
  <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
  <span class="token property">background-position</span><span class="token punctuation">:</span> center center<span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>$url<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> $w $h<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="水平垂直居中" tabindex="-1"><a class="header-anchor" href="#水平垂直居中" aria-hidden="true">#</a> 水平垂直居中</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">positionCenter</span><span class="token punctuation">(</span>$<span class="token property">l</span><span class="token punctuation">:</span> null<span class="token punctuation">,</span> $<span class="token property">r</span><span class="token punctuation">:</span> null<span class="token punctuation">,</span> $<span class="token property">t</span><span class="token punctuation">:</span> null<span class="token punctuation">,</span> $<span class="token property">b</span><span class="token punctuation">:</span> null<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token atrule"><span class="token rule">@if</span> <span class="token punctuation">(</span>$l != <span class="token string">&#39;null&#39;</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token property">left</span><span class="token punctuation">:</span> $l<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@if</span> <span class="token punctuation">(</span>$r != <span class="token string">&#39;null&#39;</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token property">right</span><span class="token punctuation">:</span> $r<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@if</span> <span class="token punctuation">(</span>$t != <span class="token string">&#39;null&#39;</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token property">top</span><span class="token punctuation">:</span> $t<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@if</span> <span class="token punctuation">(</span>$b != <span class="token string">&#39;null&#39;</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> $b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="渲染多张图片" tabindex="-1"><a class="header-anchor" href="#渲染多张图片" aria-hidden="true">#</a> 渲染多张图片</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.more-image</span> <span class="token punctuation">{</span>
  <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
  <span class="token property">background-position</span><span class="token punctuation">:</span> center center<span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> 3rem 1rem<span class="token punctuation">;</span>

  <span class="token atrule"><span class="token rule">@for</span> $i from 1 through 6</span> <span class="token punctuation">{</span>
    <span class="token selector">&amp;.lock-#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span>
      <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;lock-#{$i}.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="渲染精灵图多个位置" tabindex="-1"><a class="header-anchor" href="#渲染精灵图多个位置" aria-hidden="true">#</a> 渲染精灵图多个位置</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.more-position</span> <span class="token punctuation">{</span>
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
</code></pre></div><h2 id="横向序列帧模板" tabindex="-1"><a class="header-anchor" href="#横向序列帧模板" aria-hidden="true">#</a> 横向序列帧模板</h2><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">animationTemplate</span><span class="token punctuation">(</span><span class="token variable">$aniName</span><span class="token punctuation">,</span> <span class="token property"><span class="token variable">$w</span></span><span class="token punctuation">:</span> 0<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$h</span></span><span class="token punctuation">:</span> 0<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$imgWidth</span></span><span class="token punctuation">:</span> 0<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$count</span></span><span class="token punctuation">:</span> 0<span class="token punctuation">)</span> <span class="token punctuation">{</span>
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

<span class="token comment">// 使用示例</span>
<span class="token selector">.ani-1-1 </span><span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&quot;xxx.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">@include</span> <span class="token function">animationTemplate</span><span class="token punctuation">(</span>ani-1-1<span class="token punctuation">,</span> 100px<span class="token punctuation">,</span> 100px<span class="token punctuation">,</span> 500px<span class="token punctuation">,</span> 5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,13),c=[o];function e(u,l){return s(),a("div",null,c)}const k=n(t,[["render",e],["__file","scss.html.vue"]]);export{k as default};

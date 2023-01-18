import{_ as n,o as s,c as a,f as p}from"./app.93195575.js";const t={},o=p(`<h1 id="居中方案" tabindex="-1"><a class="header-anchor" href="#居中方案" aria-hidden="true">#</a> 居中方案</h1><h2 id="水平居中" tabindex="-1"><a class="header-anchor" href="#水平居中" aria-hidden="true">#</a> 水平居中</h2><h3 id="文字" tabindex="-1"><a class="header-anchor" href="#文字" aria-hidden="true">#</a> 文字</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 适用于文字、链接、inline、inline-block、inline-table和inline-flex的元素。 */</span>
<span class="token selector">#outer</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="块级元素" tabindex="-1"><a class="header-anchor" href="#块级元素" aria-hidden="true">#</a> 块级元素</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">#inner</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0px auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="多个块级元素" tabindex="-1"><a class="header-anchor" href="#多个块级元素" aria-hidden="true">#</a> 多个块级元素</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/* text-align 和 display */</span>
<span class="token selector">#outer</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#inner</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* flex 实现，默认块级元素 */</span>
<span class="token selector">#outer</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token comment">/* 按照主轴中心的位置对齐 */</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="水平垂直居中" tabindex="-1"><a class="header-anchor" href="#水平垂直居中" aria-hidden="true">#</a> 水平垂直居中</h2><h3 id="行内块元素-input、img" tabindex="-1"><a class="header-anchor" href="#行内块元素-input、img" aria-hidden="true">#</a> 行内块元素（input、img）</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.outerBox</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>

  <span class="token comment">/*核心*/</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.innerImg</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="块级元素-div" tabindex="-1"><a class="header-anchor" href="#块级元素-div" aria-hidden="true">#</a> 块级元素（div）</h3><h4 id="知道宽高-top、left设为-50-margin拉回宽高的一半" tabindex="-1"><a class="header-anchor" href="#知道宽高-top、left设为-50-margin拉回宽高的一半" aria-hidden="true">#</a> 知道宽高，top、left设为 50% ，margin拉回宽高的一半</h4><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> greenyellow<span class="token punctuation">;</span>

  <span class="token comment">/*核心*/</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.son</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> palevioletred<span class="token punctuation">;</span>

  <span class="token comment">/*核心*/</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> -40px 0 0 -50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="未知宽高-绝对定位-margin" tabindex="-1"><a class="header-anchor" href="#未知宽高-绝对定位-margin" aria-hidden="true">#</a> 未知宽高，绝对定位+margin</h4><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> plum<span class="token punctuation">;</span>

  <span class="token comment">/*核心*/</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.son</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> cornflowerblue<span class="token punctuation">;</span>

  <span class="token comment">/*核心*/</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="未知宽高-transform实现" tabindex="-1"><a class="header-anchor" href="#未知宽高-transform实现" aria-hidden="true">#</a> 未知宽高，transform实现</h4><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>

  <span class="token comment">/*核心*/</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.son</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> cornflowerblue<span class="token punctuation">;</span>

  <span class="token comment">/*核心*/</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="flex-布局实现" tabindex="-1"><a class="header-anchor" href="#flex-布局实现" aria-hidden="true">#</a> flex 布局实现</h4><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token comment">/* 按照主轴中心的位置对齐 */</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token comment">/* 交叉轴水平位置对齐 */</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>transform 和 flex 需要考虑兼容问题</p>`,22),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","css｜居中方案.html.vue"]]);export{r as default};

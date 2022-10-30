import{_ as n,o as s,c as a,f as p}from"./app.91260e94.js";const t={},o=p(`<h1 id="\u5C45\u4E2D\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u5C45\u4E2D\u65B9\u6848" aria-hidden="true">#</a> \u5C45\u4E2D\u65B9\u6848</h1><h2 id="\u6C34\u5E73\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u6C34\u5E73\u5C45\u4E2D" aria-hidden="true">#</a> \u6C34\u5E73\u5C45\u4E2D</h2><h3 id="\u6587\u5B57" tabindex="-1"><a class="header-anchor" href="#\u6587\u5B57" aria-hidden="true">#</a> \u6587\u5B57</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token comment">/* \u9002\u7528\u4E8E\u6587\u5B57\u3001\u94FE\u63A5\u3001inline\u3001inline-block\u3001inline-table\u548Cinline-flex\u7684\u5143\u7D20\u3002 */</span>
<span class="token selector">#outer</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5757\u7EA7\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u5757\u7EA7\u5143\u7D20" aria-hidden="true">#</a> \u5757\u7EA7\u5143\u7D20</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">#inner</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0px auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u591A\u4E2A\u5757\u7EA7\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A\u5757\u7EA7\u5143\u7D20" aria-hidden="true">#</a> \u591A\u4E2A\u5757\u7EA7\u5143\u7D20</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token comment">/* text-align \u548C display */</span>
<span class="token selector">#outer</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#inner</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* flex \u5B9E\u73B0\uFF0C\u9ED8\u8BA4\u5757\u7EA7\u5143\u7D20 */</span>
<span class="token selector">#outer</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token comment">/* \u6309\u7167\u4E3B\u8F74\u4E2D\u5FC3\u7684\u4F4D\u7F6E\u5BF9\u9F50 */</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D" aria-hidden="true">#</a> \u6C34\u5E73\u5782\u76F4\u5C45\u4E2D</h2><h3 id="\u884C\u5185\u5757\u5143\u7D20-input\u3001img" tabindex="-1"><a class="header-anchor" href="#\u884C\u5185\u5757\u5143\u7D20-input\u3001img" aria-hidden="true">#</a> \u884C\u5185\u5757\u5143\u7D20\uFF08input\u3001img\uFF09</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.outerBox</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>

  <span class="token comment">/*\u6838\u5FC3*/</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.innerImg</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5757\u7EA7\u5143\u7D20-div" tabindex="-1"><a class="header-anchor" href="#\u5757\u7EA7\u5143\u7D20-div" aria-hidden="true">#</a> \u5757\u7EA7\u5143\u7D20\uFF08div\uFF09</h3><h4 id="\u77E5\u9053\u5BBD\u9AD8-top\u3001left\u8BBE\u4E3A-50-margin\u62C9\u56DE\u5BBD\u9AD8\u7684\u4E00\u534A" tabindex="-1"><a class="header-anchor" href="#\u77E5\u9053\u5BBD\u9AD8-top\u3001left\u8BBE\u4E3A-50-margin\u62C9\u56DE\u5BBD\u9AD8\u7684\u4E00\u534A" aria-hidden="true">#</a> \u77E5\u9053\u5BBD\u9AD8\uFF0Ctop\u3001left\u8BBE\u4E3A 50% \uFF0Cmargin\u62C9\u56DE\u5BBD\u9AD8\u7684\u4E00\u534A</h4><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> greenyellow<span class="token punctuation">;</span>

  <span class="token comment">/*\u6838\u5FC3*/</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.son</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> palevioletred<span class="token punctuation">;</span>

  <span class="token comment">/*\u6838\u5FC3*/</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> -40px 0 0 -50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u672A\u77E5\u5BBD\u9AD8-\u7EDD\u5BF9\u5B9A\u4F4D-margin" tabindex="-1"><a class="header-anchor" href="#\u672A\u77E5\u5BBD\u9AD8-\u7EDD\u5BF9\u5B9A\u4F4D-margin" aria-hidden="true">#</a> \u672A\u77E5\u5BBD\u9AD8\uFF0C\u7EDD\u5BF9\u5B9A\u4F4D+margin</h4><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> plum<span class="token punctuation">;</span>

  <span class="token comment">/*\u6838\u5FC3*/</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.son</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> cornflowerblue<span class="token punctuation">;</span>

  <span class="token comment">/*\u6838\u5FC3*/</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u672A\u77E5\u5BBD\u9AD8-transform\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u672A\u77E5\u5BBD\u9AD8-transform\u5B9E\u73B0" aria-hidden="true">#</a> \u672A\u77E5\u5BBD\u9AD8\uFF0Ctransform\u5B9E\u73B0</h4><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>

  <span class="token comment">/*\u6838\u5FC3*/</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.son</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> cornflowerblue<span class="token punctuation">;</span>

  <span class="token comment">/*\u6838\u5FC3*/</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="flex-\u5E03\u5C40\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#flex-\u5E03\u5C40\u5B9E\u73B0" aria-hidden="true">#</a> flex \u5E03\u5C40\u5B9E\u73B0</h4><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token comment">/* \u6309\u7167\u4E3B\u8F74\u4E2D\u5FC3\u7684\u4F4D\u7F6E\u5BF9\u9F50 */</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token comment">/* \u4EA4\u53C9\u8F74\u6C34\u5E73\u4F4D\u7F6E\u5BF9\u9F50 */</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>transform \u548C flex \u9700\u8981\u8003\u8651\u517C\u5BB9\u95EE\u9898</p>`,22),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","css\uFF5C\u5C45\u4E2D\u65B9\u6848.html.vue"]]);export{r as default};

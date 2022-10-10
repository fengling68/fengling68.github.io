import{_ as n,o as s,c as a,f as t}from"./app.c3d58c07.js";const p={},o=t(`<h1 id="svg-\u5B9E\u73B0\u6247\u5F62\u8499\u5C42" tabindex="-1"><a class="header-anchor" href="#svg-\u5B9E\u73B0\u6247\u5F62\u8499\u5C42" aria-hidden="true">#</a> svg \u5B9E\u73B0\u6247\u5F62\u8499\u5C42</h1><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span>
    <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2000/svg<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mask-svg<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>supportSVG<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span>
      <span class="token attr-name">:r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>strokeWidth/2<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50%<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50%<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>transparent<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>maskColor<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>strokeWidth<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:stroke-dasharray</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>strokeWidth*3.1415926<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:stroke-dashoffset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>strokeDashOffset<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mask-div<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mask-div2<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
        transform: \`translate(0%, \${percent}%)\`,
        backgroundColor: maskColor
      }<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">percent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6247\u5F62\u89D2\u5EA6\u504F\u79FB\u91CF</span>
    <span class="token function">strokeDashOffset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> angle <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>percent<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">360</span> <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> offset <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maskDirection <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>strokeWidth <span class="token operator">*</span> <span class="token number">3.1415926</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">360</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">360</span> <span class="token operator">-</span> angle<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>offset<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">supportSVG</span><span class="token operator">:</span> <span class="token operator">!</span><span class="token operator">!</span>document<span class="token punctuation">.</span>createElementNS <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token operator">!</span>document<span class="token punctuation">.</span><span class="token function">createElementNS</span><span class="token punctuation">(</span>&#39;http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>w3<span class="token punctuation">.</span>org<span class="token operator">/</span><span class="token number">2000</span><span class="token operator">/</span>svg<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">strokeWidth</span><span class="token operator">:</span> <span class="token number">35</span><span class="token punctuation">,</span>
      <span class="token literal-property property">maskDirection</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// \u8499\u5C42\u8D70\u5411\uFF0C1=\u9006\u65F6\u9488\uFF0C-1=\u987A\u65F6\u9488</span>
      <span class="token literal-property property">maskColor</span><span class="token operator">:</span> <span class="token string">&#39;rgba(0, 0, 0, 0.4)&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u68A6\u5C42\u989C\u8272</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.mask-svg</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0.3rem<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  // <span class="token property">width</span><span class="token punctuation">:</span> 0.82rem<span class="token punctuation">;</span>
  // <span class="token property">height</span><span class="token punctuation">:</span> 0.98rem<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 0.08rem<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  // \u901A\u8FC7\u65CB\u8F6C\u3001\u8C03\u6362\u5BBD\u9AD8\u503C\uFF0C\u4FEE\u6539\u5F00\u59CB\u89D2\u5EA6\u503C
  <span class="token property">width</span><span class="token punctuation">:</span> 0.98rem<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0.82rem<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate3d</span><span class="token punctuation">(</span>1<span class="token punctuation">,</span> -1<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 180deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transform-origin</span><span class="token punctuation">:</span> center center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.mask-div</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0.82rem<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0.98rem<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 0.08rem<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token selector">.mask-div2</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> center bottom<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0%<span class="token punctuation">,</span> 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2),e=[o];function c(u,l){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","svg \u5B9E\u73B0\u6247\u5F62\u68A6\u5C42.html.vue"]]);export{r as default};

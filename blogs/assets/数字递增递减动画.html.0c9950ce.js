import{_ as n,o as s,c as a,d as t}from"./app.8d44daf6.js";const p={},o=t(`<h1 id="\u6570\u5B57\u9012\u589E\u9012\u51CF\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57\u9012\u589E\u9012\u51CF\u52A8\u753B" aria-hidden="true">#</a> \u6570\u5B57\u9012\u589E\u9012\u51CF\u52A8\u753B</h1><h2 id="\u6570\u5B57\u76F4\u63A5\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57\u76F4\u63A5\u53D8\u5316" aria-hidden="true">#</a> \u6570\u5B57\u76F4\u63A5\u53D8\u5316</h2><ul><li>\u501F\u52A9 VueNumberScroll \u7EC4\u4EF6</li></ul><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueNumberScroll</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>num<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:start</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>startNum<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:end</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>endNum<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:times</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:speed</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>num =&gt; padZeroLeft(num, numLength)<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VueNumberScroll</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> VueNumberScroll <span class="token keyword">from</span> <span class="token string">&#39;vue-number-scroll&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    VueNumberScroll
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">numLength</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">defaultNumber</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>startNum <span class="token operator">=</span> oldValue <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>defaultNumber<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>endNum <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">padZeroLeft</span><span class="token punctuation">(</span><span class="token parameter">num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span>len<span class="token punctuation">,</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">startNum</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">endNum</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.num</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u6570\u5B57\u50CF\u8BB0\u5206\u724C\u4E00\u6837\u7FFB\u8F6C" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57\u50CF\u8BB0\u5206\u724C\u4E00\u6837\u7FFB\u8F6C" aria-hidden="true">#</a> \u6570\u5B57\u50CF\u8BB0\u5206\u724C\u4E00\u6837\u7FFB\u8F6C</h2><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- start-1 \u6570\u5B57\u7FFB\u8F6C\u76D2\u5B50 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>digital-flip-box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- start-2 \u6570\u5B57\u7FFB\u8F6C\u76D2\u5B50 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(curDigital, index) in nowNumArr<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>digital-single-box<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- start-3 \u6570\u5B57\u7FFB\u8F6C\u76D2\u5B50 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
          <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>curNumber in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>curNumber<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
            &#39;pre&#39;: !increaseAni ? curNumber - 1 === +curDigital : false,
            &#39;active-pre&#39;: !increaseAni ? curNumber === +curDigital : false,
            &#39;active-next&#39;: increaseAni ? curNumber === +curDigital : false,
            &#39;next&#39;: increaseAni ? curNumber + 1 === +curDigital : false,
          }<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>digital-single-list<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- \u4E0A\u90E8\u5206\u6570\u5B57\u548C\u9634\u5F71 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>digit-top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>digit-num<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{curNumber}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shadow-top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- \u4E0B\u90E8\u5206\u6570\u5B57\u548C\u9634\u5F71 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>digit-bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>digit-num<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{curNumber}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shadow-bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- end-3 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- end-2 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- end-1 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6700\u65B0\u6570\u5B57</span>
    <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6570\u5B57\u957F\u5EA6</span>
    <span class="token literal-property property">numLength</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u9ED8\u8BA4\u521D\u59CB\u6570\u503C</span>
    <span class="token literal-property property">defaultNumber</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>startNum <span class="token operator">=</span> oldValue<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>endNum <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
        <span class="token comment">// \u5904\u7406\u6570\u5B57\u52A8\u753B</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleNumAni</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">startNum</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">endNum</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">nowNumArr</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">increaseAni</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u9012\u589E\u52A8\u753B\uFF0Ctrue=\u9012\u589E\uFF0Cfalse=\u9012\u51CF</span>
      <span class="token literal-property property">decreaseTimer</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// \u9012\u51CF\u5B9A\u65F6\u5668</span>
      <span class="token literal-property property">increaseTimer</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// \u9012\u589E\u5B9A\u65F6\u5668</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5904\u7406\u6570\u5B57</span>
    <span class="token function">handleNumAni</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u7ED3\u675F\u503C\u7B49\u4E8E\u5F00\u59CB\u503C</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>endNum <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>startNum<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token comment">// \u6CA1\u6709\u7ED3\u675F\u503C</span>
      <span class="token keyword">const</span> noEndNum <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>endNum <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>endNum <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>endNum <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>noEndNum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>nowNumArr <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">transformNumArr</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token punctuation">.</span>defaultNumber<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>numLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u6CA1\u6709\u5F00\u59CB\u503C</span>
      <span class="token keyword">const</span> noStartNum <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>startNum <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>startNum <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>startNum <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>noStartNum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>nowNumArr <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">transformNumArr</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token punctuation">.</span>endNum<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>numLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u6267\u884C\u9012\u589E\u3001\u9012\u51CF\u52A8\u753B</span>
      <span class="token keyword">const</span> doMethods <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">increase</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>doIncreaseAni<span class="token punctuation">,</span> <span class="token literal-property property">decrease</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>doDecreaseAni <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>nowNumArr <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">transformNumArr</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>startNum<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>numLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>increaseAni <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>startNum <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>endNum<span class="token punctuation">;</span> <span class="token comment">// true=\u9012\u589E\uFF0Cfalse=\u9012\u51CF</span>
      doMethods<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>increaseAni <span class="token operator">?</span> <span class="token string">&#39;increase&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;decrease&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@description</span>: \u9012\u51CF\u64CD\u4F5C
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">start</span>
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">end</span>
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
     */</span>
    <span class="token function">doDecreaseAni</span><span class="token punctuation">(</span><span class="token parameter">start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> difference <span class="token operator">=</span> start <span class="token operator">-</span> end<span class="token punctuation">;</span>
      <span class="token keyword">const</span> intervalTime <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>duration <span class="token operator">/</span> difference<span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;decrease&#39;</span><span class="token punctuation">,</span> start<span class="token punctuation">,</span> end<span class="token punctuation">,</span> difference<span class="token punctuation">,</span> intervalTime<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>decreaseTimer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;=</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">clearInterval</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>decreaseTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>decreaseTimer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        start<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>nowNumArr <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">transformNumArr</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>numLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> intervalTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@description</span>: \u9012\u589E\u64CD\u4F5C
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">start</span>
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">end</span>
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
     */</span>
    <span class="token function">doIncreaseAni</span><span class="token punctuation">(</span><span class="token parameter">start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> difference <span class="token operator">=</span> end <span class="token operator">-</span> start<span class="token punctuation">;</span>
      <span class="token keyword">const</span> intervalTime <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>duration <span class="token operator">/</span> difference<span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;increase&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>start<span class="token punctuation">,</span> end<span class="token punctuation">,</span> difference<span class="token punctuation">,</span> intervalTime<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>increaseTimer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">&gt;=</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">clearInterval</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>increaseTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>increaseTimer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        start<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>nowNumArr <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">transformNumArr</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>numLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> intervalTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@description</span>: \u5C06\u6570\u5B57\u8F6C\u6210\u6570\u7EC4
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">number</span>
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">length</span> \u6570\u7EC4\u957F\u5EA6\uFF0C\u4F4D\u6570\u4E0D\u8DB3\u524D\u88650\uFF0C\u4F4D\u6570\u8D85\u51FA\u53D6\u6700\u5927\u503C999...
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span>
     */</span>
    <span class="token function">transformNumArr</span><span class="token punctuation">(</span><span class="token parameter">number<span class="token punctuation">,</span> length</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> newNumber <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> length
        <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">padZero</span><span class="token punctuation">(</span>number<span class="token punctuation">,</span> length<span class="token punctuation">,</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">)</span>
        <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">padZero</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token function">String</span><span class="token punctuation">(</span>newNumber<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@description</span>: \u5B57\u7B26\u4E32\u88650
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">num</span>
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">len</span>
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">direction</span>
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span>
     */</span>
    <span class="token function">padZero</span><span class="token punctuation">(</span>num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> direction <span class="token operator">=</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> direction <span class="token operator">===</span> <span class="token string">&#39;left&#39;</span>
        <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span>len<span class="token punctuation">,</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span>
        <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span>len<span class="token punctuation">,</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
// \u5706\u89D2
$<span class="token property">borderRadius</span><span class="token punctuation">:</span> 0.1rem<span class="token punctuation">;</span>
// \u603B\u6570\u5B57\u76D2\u5B50\u5BBD\u5EA6
$<span class="token property">allNumberWidth</span><span class="token punctuation">:</span> 7.5rem<span class="token punctuation">;</span>
// \u5355\u4E2A\u6570\u5B57\u76D2\u5B50\u5BBD\u5EA6
$<span class="token property">singleNumberWidth</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
// \u5B57\u4F53\u5927\u5C0F
$<span class="token property">fontSize</span><span class="token punctuation">:</span> 1.2rem<span class="token punctuation">;</span>

<span class="token selector">// \u6570\u5B57\u7FFB\u8F6C\u76D2\u5B50
.digital-flip-box</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> $fontSize<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> $allNumberWidth<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 1.5rem<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fedec2<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> gold<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">// \u5355\u4E2A\u6570\u5B57\u76D2\u5B50
.digital-single-box</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> $allNumberWidth<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> $borderRadius<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 0.1rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">// \u6570\u5B57\u5217 0\uFF5E9
.digital-single-list</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>

  <span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">// \u9876\u90E8\u6570\u5B57\u3001\u6570\u5B57\u9634\u5F71
  .digit-top, .shadow-top</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #fedec2<span class="token punctuation">;</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #fedec2<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> $borderRadius $borderRadius 0 0<span class="token punctuation">;</span>
    <span class="token selector">&amp;::before</span> <span class="token punctuation">{</span>
      <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">border-radius</span><span class="token punctuation">:</span> $borderRadius $borderRadius 0 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.shadow-top</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> opacity 0.3s ease-in<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">// \u5E95\u90E8\u6570\u5B57\u3001\u6570\u5B57\u9634\u5F71
  .digit-bottom, .shadow-bottom</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #fedec2<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 0 0 $borderRadius $borderRadius<span class="token punctuation">;</span>
    <span class="token selector">&amp;::before</span> <span class="token punctuation">{</span>
      <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">border-radius</span><span class="token punctuation">:</span> 0 0 $borderRadius $borderRadius<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.shadow-bottom</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> opacity 0.3s ease-in<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">// \u5B9E\u9645\u6570\u5B57
  .digit-num</span> <span class="token punctuation">{</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.digit-bottom, .shadow-bottom</span> <span class="token punctuation">{</span>
    <span class="token selector">.digit-num</span> <span class="token punctuation">{</span>
      <span class="token property">margin-top</span><span class="token punctuation">:</span> -75%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">// \u52A8\u6548
.digital-single-list</span> <span class="token punctuation">{</span>
  <span class="token selector">// \u9012\u51CF9\uFF5E0
  &amp;.pre</span> <span class="token punctuation">{</span>
    <span class="token selector">.digit-top, .shadow-top</span> <span class="token punctuation">{</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
      <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
      <span class="token property">transform-origin</span><span class="token punctuation">:</span> 50% 100%<span class="token punctuation">;</span>
      <span class="token property">animation</span><span class="token punctuation">:</span> flip-ani-1 0.3s ease-in both<span class="token punctuation">;</span>
      <span class="token atrule"><span class="token rule">@keyframes</span> flip-ani-1</span> <span class="token punctuation">{</span>
        <span class="token selector">0%</span> <span class="token punctuation">{</span>
          <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>400px<span class="token punctuation">)</span> <span class="token function">rotateX</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">100%</span> <span class="token punctuation">{</span>
          <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>400px<span class="token punctuation">)</span> <span class="token function">rotateX</span><span class="token punctuation">(</span>-90deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.digit-bottom, .shadow-bottom</span> <span class="token punctuation">{</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
      <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token selector">// \u9012\u51CF9\uFF5E0
  &amp;.active-pre</span> <span class="token punctuation">{</span>
    <span class="token selector">.digit-top</span> <span class="token punctuation">{</span>
      <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.digit-bottom</span> <span class="token punctuation">{</span>
      <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
      <span class="token property">transform-origin</span><span class="token punctuation">:</span> 50% 0%<span class="token punctuation">;</span>
      <span class="token property">animation</span><span class="token punctuation">:</span> flip-ani-2 0.3s ease-out both<span class="token punctuation">;</span>
      <span class="token atrule"><span class="token rule">@keyframes</span> flip-ani-2</span> <span class="token punctuation">{</span>
        <span class="token selector">0%</span> <span class="token punctuation">{</span>
          <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>400px<span class="token punctuation">)</span> <span class="token function">rotateX</span><span class="token punctuation">(</span>-90deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">100%</span> <span class="token punctuation">{</span>
          <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>400px<span class="token punctuation">)</span> <span class="token function">rotateX</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token selector">// \u9012\u589E0\uFF5E9
  &amp;.active-next</span> <span class="token punctuation">{</span>
    <span class="token selector">.digit-top</span> <span class="token punctuation">{</span>
      <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
      <span class="token property">transform-origin</span><span class="token punctuation">:</span> 50% 100%<span class="token punctuation">;</span>
      <span class="token property">animation</span><span class="token punctuation">:</span> flip-ani-3 0.3s ease-out both<span class="token punctuation">;</span>
      <span class="token atrule"><span class="token rule">@keyframes</span> flip-ani-3</span> <span class="token punctuation">{</span>
        <span class="token selector">0%</span> <span class="token punctuation">{</span>
          <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>400px<span class="token punctuation">)</span> <span class="token function">rotateX</span><span class="token punctuation">(</span>-90deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">100%</span> <span class="token punctuation">{</span>
          <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>400px<span class="token punctuation">)</span> <span class="token function">rotateX</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.digit-bottom</span> <span class="token punctuation">{</span>
      <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token selector">// \u9012\u589E0\uFF5E9
  &amp;.next</span> <span class="token punctuation">{</span>
    <span class="token selector">.digit-top, .shadow-top</span> <span class="token punctuation">{</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
      <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.digit-bottom, .shadow-bottom</span> <span class="token punctuation">{</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
      <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
      <span class="token property">transform-origin</span><span class="token punctuation">:</span> 50% 0%<span class="token punctuation">;</span>
      <span class="token property">animation</span><span class="token punctuation">:</span> flip-ani-4 0.3s ease-in both<span class="token punctuation">;</span>
      <span class="token atrule"><span class="token rule">@keyframes</span> flip-ani-4</span> <span class="token punctuation">{</span>
        <span class="token selector">0%</span> <span class="token punctuation">{</span>
          <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>400px<span class="token punctuation">)</span> <span class="token function">rotateX</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">100%</span> <span class="token punctuation">{</span>
          <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>400px<span class="token punctuation">)</span> <span class="token function">rotateX</span><span class="token punctuation">(</span>90deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,6),e=[o];function c(u,l){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","\u6570\u5B57\u9012\u589E\u9012\u51CF\u52A8\u753B.html.vue"]]);export{i as default};

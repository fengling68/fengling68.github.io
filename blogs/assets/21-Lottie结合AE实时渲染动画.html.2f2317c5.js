import{_ as n,o as s,c as a,f as p}from"./app.50aeec2a.js";const t={},o=p(`<h1 id="lottie-结合-ae-实时渲染动画" tabindex="-1"><a class="header-anchor" href="#lottie-结合-ae-实时渲染动画" aria-hidden="true">#</a> Lottie 结合 AE 实时渲染动画</h1><h2 id="_1、lottie-vue-文件" tabindex="-1"><a class="header-anchor" href="#_1、lottie-vue-文件" aria-hidden="true">#</a> 1、lottie.vue 文件</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
  Lottie官网：https://www.lottiefiles.com/?page=1
  1、安装vue
  2、安装lottie     : npm install --save vue-lottie
  3、引入components : import Lottie from &#39;./lottie.vue&#39;;
  4、引入json文件
*/</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;style&quot;</span> ref<span class="token operator">=</span><span class="token string">&quot;lavContainer&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  <span class="token keyword">import</span> lottie <span class="token keyword">from</span> <span class="token string">&#39;lottie-web&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>width<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">overflow</span><span class="token operator">:</span> <span class="token string">&#39;hidden&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">&#39;0 auto&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>anim <span class="token operator">=</span> lottie<span class="token punctuation">.</span><span class="token function">loadAnimation</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>lavContainer<span class="token punctuation">,</span>
          <span class="token literal-property property">renderer</span><span class="token operator">:</span> <span class="token string">&#39;svg&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">loop</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>loop <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">autoplay</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>autoplay <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">animationData</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>animationData<span class="token punctuation">,</span>
          <span class="token literal-property property">rendererSettings</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>rendererSettings
        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;animCreated&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>anim<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><h2 id="_2、渲染一个动画" tabindex="-1"><a class="header-anchor" href="#_2、渲染一个动画" aria-hidden="true">#</a> 2、渲染一个动画</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 第一个动画 <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>lottie <span class="token operator">:</span>options<span class="token operator">=</span><span class="token string">&quot;defOpt1&quot;</span> <span class="token operator">:</span>height<span class="token operator">=</span><span class="token string">&quot;300&quot;</span> <span class="token operator">:</span>width<span class="token operator">=</span><span class="token string">&quot;300&quot;</span> v<span class="token operator">-</span>on<span class="token operator">:</span>animCreated<span class="token operator">=</span><span class="token string">&quot;handleAni&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 第二个动画 <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>lottie <span class="token operator">:</span>options<span class="token operator">=</span><span class="token string">&quot;defOpt2&quot;</span> <span class="token operator">:</span>height<span class="token operator">=</span><span class="token string">&quot;200&quot;</span> <span class="token operator">:</span>width<span class="token operator">=</span><span class="token string">&quot;200&quot;</span> v<span class="token operator">-</span>on<span class="token operator">:</span>animCreated<span class="token operator">=</span><span class="token string">&quot;handleAni&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 控制器 <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Speed<span class="token operator">:</span> x<span class="token punctuation">{</span><span class="token punctuation">{</span>animationSpeed<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;range&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;1&quot;</span> min<span class="token operator">=</span><span class="token string">&quot;0&quot;</span> max<span class="token operator">=</span><span class="token string">&quot;3&quot;</span> step<span class="token operator">=</span><span class="token string">&quot;0.5&quot;</span> v<span class="token operator">-</span>on<span class="token operator">:</span>change<span class="token operator">=</span><span class="token string">&quot;onSpeedChange&quot;</span> v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;animationSpeed&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button v<span class="token operator">-</span>on<span class="token operator">:</span>click<span class="token operator">=</span><span class="token string">&quot;stop&quot;</span><span class="token operator">&gt;</span>stop<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button v<span class="token operator">-</span>on<span class="token operator">:</span>click<span class="token operator">=</span><span class="token string">&quot;pause&quot;</span><span class="token operator">&gt;</span>pause<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button v<span class="token operator">-</span>on<span class="token operator">:</span>click<span class="token operator">=</span><span class="token string">&quot;play&quot;</span><span class="token operator">&gt;</span>play<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token comment">// lottie组件</span>
<span class="token keyword">import</span> Lottie <span class="token keyword">from</span> <span class="token string">&#39;./lottie.vue&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 示例动画json文件可在lottie官网下载</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> animate1 <span class="token keyword">from</span> <span class="token string">&#39;../js/animate1.json&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> animate2 <span class="token keyword">from</span> <span class="token string">&#39;../js/animate2.json&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;app&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;lottie&#39;</span><span class="token operator">:</span> Lottie
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">defOpt1</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">animationData</span><span class="token operator">:</span> animate1<span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">defOpt2</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">animationData</span><span class="token operator">:</span> animate2<span class="token punctuation">}</span>
      <span class="token literal-property property">animationSpeed</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">handleAni</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">anim</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> aniName <span class="token operator">=</span> <span class="token string">&quot;anim&quot;</span><span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">[</span>aniName<span class="token punctuation">]</span> <span class="token operator">=</span> anim<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function-variable function">stop</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>anim<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function-variable function">play</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>anim<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function-variable function">pause</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>anim<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function-variable function">onSpeedChange</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>anim<span class="token punctuation">.</span><span class="token function">setSpeed</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>animationSpeed<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style rel<span class="token operator">=</span><span class="token string">&quot;stylesheet/scss&quot;</span> lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span><span class="token operator">&gt;</span>
  #app<span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">overflow</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> greenyellow<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre></div>`,5),e=[o];function c(r,l){return s(),a("div",null,e)}const i=n(t,[["render",c],["__file","21-Lottie结合AE实时渲染动画.html.vue"]]);export{i as default};

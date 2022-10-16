import{_ as n,o as s,c as a,f as t}from"./app.c9d55439.js";const p={},o=t(`<h1 id="video\u89C6\u9891\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#video\u89C6\u9891\u7EC4\u4EF6" aria-hidden="true">#</a> video\u89C6\u9891\u7EC4\u4EF6</h1><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click.prevent.stop</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u6DFB\u52A0\u5404\u79CDvideo\u5C5E\u6027 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span>
      <span class="token attr-name">playsinline</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">webkit-playsinline</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">renderer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>standard<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">preload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>metadata<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">autoplay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>all<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">muted</span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./video.mp4<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>designSize.width<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>designSize.height<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u70B9\u51FB\u663E\u793A\u81EA\u5B9A\u4E49\u63A7\u4EF6 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mask<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showSelfControl<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> enableInlineVideo <span class="token keyword">from</span> <span class="token string">&#39;iphone-inline-video&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Video&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">designSize</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">750</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1334</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">triggerByHandler</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u76D1\u542C resize \u4E8B\u4EF6\u91CD\u65B0\u8BA1\u7B97\u9AD8\u5EA6</span>
    window<span class="token punctuation">.</span><span class="token function-variable function">onresize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// \u90E8\u5206Android\u624B\u673A\uFF0C\u89C6\u9891\u64AD\u653E\u524D\u4F1A\u6709\u51E0\u79D2\u9ED1\u5C4F\u95EE\u9898\uFF0C\u6DFB\u52A0\u5B9A\u65F6\u5668\u5224\u65AD currentTime &gt; 0 \u65F6\u4F7F\u89C6\u9891\u663E\u793A </span>
    <span class="token keyword">const</span> videoDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#video&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>videoDom<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>videoTimer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">clearInterval</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>videoTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>videoTimer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>videoTimer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>videoDom<span class="token punctuation">.</span>duration <span class="token operator">&amp;&amp;</span> videoDom<span class="token punctuation">.</span>currentTime <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u5728\u64AD\u653E\u4E86</span>
          videoDom<span class="token punctuation">.</span>style<span class="token punctuation">.</span>opacity <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
          <span class="token function">clearInterval</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>videoTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>videoTimer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>videoTimer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearInterval</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>videoTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>videoTimer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u70B9\u51FB\u663E\u793A\u81EA\u5B9A\u4E49\u63A7\u4EF6</span>
    <span class="token function">showSelfControl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8BA1\u7B97video\uFF0C\u4EE5\u4F7F\u97F3\u9891\u63A7\u4EF6\u9690\u85CF</span>
    <span class="token function">initView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> video <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#video&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>android<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">enableInlineVideo</span><span class="token punctuation">(</span>video<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">const</span> screenSize <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> window<span class="token punctuation">.</span>innerHeight
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> renderSize <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> window<span class="token punctuation">.</span>innerHeight
      <span class="token punctuation">}</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> bodyHeight <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>offsetHeight<span class="token punctuation">;</span>
      screenSize<span class="token punctuation">.</span>height <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>bodyHeight<span class="token punctuation">,</span> screenSize<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> pageWHRate <span class="token operator">=</span> screenSize<span class="token punctuation">.</span>width <span class="token operator">/</span> screenSize<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
      <span class="token keyword">const</span> designWHRate <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>designSize<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>designSize<span class="token punctuation">.</span>height<span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>pageWHRate <span class="token operator">&lt;</span> designWHRate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        renderSize<span class="token punctuation">.</span>height <span class="token operator">=</span> screenSize<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
        renderSize<span class="token punctuation">.</span>width <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>screenSize<span class="token punctuation">.</span>height <span class="token operator">*</span> designWHRate<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pageWHRate <span class="token operator">&gt;</span> designWHRate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        renderSize<span class="token punctuation">.</span>width <span class="token operator">=</span> screenSize<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
        renderSize<span class="token punctuation">.</span>height <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>screenSize<span class="token punctuation">.</span>width <span class="token operator">/</span> designWHRate<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">let</span> translateX <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> translateY <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      translateX <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token punctuation">(</span>renderSize<span class="token punctuation">.</span>width <span class="token operator">-</span> screenSize<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      translateY <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token punctuation">(</span>renderSize<span class="token punctuation">.</span>height <span class="token operator">-</span> screenSize<span class="token punctuation">.</span>height<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      video<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>renderSize<span class="token punctuation">.</span>width<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
      video<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>renderSize<span class="token punctuation">.</span>height<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
      video<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">translate(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>translateX<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>translateY<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
      video<span class="token punctuation">.</span>style<span class="token punctuation">.</span>webkitTransform <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">translate(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>translateX<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>translateY<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u64AD\u653E\u89C6\u9891\u3001\u76D1\u542C\u89C6\u9891\u7ED3\u675F\u7B49</span>
    <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> video <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#video&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        video<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      video<span class="token punctuation">.</span>currentTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> play <span class="token operator">=</span> video<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>play<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        play<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      video<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;ended&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u64AD\u653E\u7ED3\u675F&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.IIV::-webkit-media-controls-play-button,
.IIV::-webkit-media-controls-start-playback-button</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">object-position</span><span class="token punctuation">:</span> center center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u76DB\u653E\u89C6\u9891\u7684\u76D2\u5B50\uFF0C\u8BBE\u7F6E\u80CC\u666F\u56FE\u4E3A\u89C6\u9891\u9996\u5E27\u56FE\u7247 */</span>
<span class="token selector">.wrap</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./cover.jpg&#39;</span><span class="token punctuation">)</span></span> center center no-repeat<span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> 100% 100%<span class="token punctuation">;</span>
  
  <span class="token comment">/* \u89C6\u9891\u6837\u5F0F\uFF0C\u6DFB\u52A0 opacity: 0; \u7ED5\u8FC7\u9ED1\u5C4F\u95EE\u9898 */</span>
  <span class="token selector">.video</span> <span class="token punctuation">{</span>
    <span class="token property">object-fit</span><span class="token punctuation">:</span> fill<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* \u8986\u76D6\u5728\u89C6\u9891\u4E0A\u65B9\u7684\u5143\u7D20\uFF0C\u4EE5\u7981\u6B62\u89C6\u9891\u70B9\u51FB\u5E76\u53EF\u5728\u6B64dom\u4E0A\u6DFB\u52A0\u70B9\u51FB\u4E8B\u4EF6 */</span>
  <span class="token selector">.mask</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2),e=[o];function c(u,l){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","10-video.html.vue"]]);export{k as default};

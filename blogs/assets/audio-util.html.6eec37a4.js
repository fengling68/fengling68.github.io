import{_ as n,o as s,c as a,f as t}from"./app.84a1f894.js";const p={},o=t(`<h1 id="\u97F3\u4E50\u64AD\u653E\u6682\u505C" tabindex="-1"><a class="header-anchor" href="#\u97F3\u4E50\u64AD\u653E\u6682\u505C" aria-hidden="true">#</a> \u97F3\u4E50\u64AD\u653E\u6682\u505C</h1><h2 id="audio-util-js" tabindex="-1"><a class="header-anchor" href="#audio-util-js" aria-hidden="true">#</a> audio-util.js</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Howl <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;howler&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> audioUtil <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">isPageHide</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">soundControl</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">currentAudioId</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">currentAudioIconDom</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>

  <span class="token function">playOrPauseAudio</span><span class="token punctuation">(</span><span class="token parameter">audioUrl<span class="token punctuation">,</span> audioId<span class="token punctuation">,</span> audioIconDom</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>audioUrl <span class="token operator">||</span> <span class="token operator">!</span>audioId<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

    <span class="token comment">// \u89E3\u51B3\u8DE8\u57DF\u95EE\u9898</span>
    audioUrl <span class="token operator">=</span> audioUrl<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>
      <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(http:\\/\\/|https:\\/\\/)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span>
      window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>protocol
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u70B9\u51FB\u540C\u4E00\u97F3\u9891</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>audioId <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>currentAudioId <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">.</span><span class="token function">playing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u64AD\u653E\u4E2D\u8981\u6682\u505C</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">allAudioIconPause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6682\u505C\u4E2D\u8981\u64AD\u653E</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">singleAudioIconPlay</span><span class="token punctuation">(</span>audioIconDom<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u70B9\u51FB\u4E0D\u540C\u97F3\u9891</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">pauseAudio</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Howl</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">src</span><span class="token operator">:</span> audioUrl<span class="token punctuation">,</span>
      <span class="token literal-property property">loop</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">html5</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// TODO ios \u8BBE true\uFF0Candroid \u8BBE false\uFF0C\u89E3\u51B3\u53CC\u7AEF\u67D0\u4E9B\u673A\u578B\u4E0D\u64AD\u653E\u95EE\u9898</span>
      <span class="token literal-property property">autoplay</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">volume</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;play&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">singleAudioIconPlay</span><span class="token punctuation">(</span>audioIconDom<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// TODO \u901A\u77E5\u5916\u90E8\u64AD\u653E\u4E2D</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;end&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">allAudioIconPause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// TODO \u901A\u77E5\u5916\u90E8\u64AD\u653E\u7ED3\u675F</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>currentAudioId <span class="token operator">=</span> audioId<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>currentAudioIconDom <span class="token operator">=</span> audioIconDom<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \u6682\u505C\u97F3\u9891</span>
  <span class="token function">pauseAudio</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">allAudioIconPause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \u6240\u6709\u97F3\u9891\u6309\u94AE\u7F6E\u4E3A\u6682\u505C\u8981\u64AD\u653E\u72B6\u6001 \u23F9\uFE0F</span>
  <span class="token function">allAudioIconPause</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> doms <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&quot;.audio-status-icon&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span><span class="token operator">...</span>doms<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      item<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;class&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;audio-status-icon play&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \u5F53\u524D\u97F3\u9891\u6309\u94AE\u7F6E\u4E3A\u64AD\u653E\u8981\u6682\u505C\u72B6\u6001 \u23F8\uFE0F</span>
  <span class="token function">singleAudioIconPlay</span><span class="token punctuation">(</span><span class="token parameter">dom</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>dom<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    dom<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;class&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;audio-status-icon pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// pagehide \u6682\u505C</span>
  <span class="token function">pagehidePauseAudio</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>soundControl <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">.</span><span class="token function">playing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>isPageHide <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">allAudioIconPause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// pageshow \u64AD\u653E</span>
  <span class="token function">pageshowPlayAudio</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>isPageHide <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>isPageHide <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">singleAudioIconPlay</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentAudioIconDom<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \u5904\u7406\u9875\u9762\u5207\u540E\u53F0</span>
  <span class="token function">handleVisibilityChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>document<span class="token punctuation">.</span>hidden<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      audioUtil<span class="token punctuation">.</span><span class="token function">pagehidePauseAudio</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      audioUtil<span class="token punctuation">.</span><span class="token function">pageshowPlayAudio</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \u521D\u59CB\u5316\u4E8B\u4EF6\u76D1\u542C</span>
  <span class="token function">initListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
      <span class="token string">&quot;visibilitychange&quot;</span><span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>handleVisibilityChange<span class="token punctuation">,</span>
      <span class="token boolean">true</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \u79FB\u9664\u4E8B\u4EF6\u76D1\u542C</span>
  <span class="token function">removeListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>
      <span class="token string">&quot;visibilitychange&quot;</span><span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>handleVisibilityChange<span class="token punctuation">,</span>
      <span class="token boolean">true</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \u9500\u6BC1\u6E05\u9664\u63A7\u5236\u5668</span>
  <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> audioUtil<span class="token punctuation">;</span>
</code></pre></div><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> demo</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// 1\u3001\u5982\u679C\u6309\u94AE\u72B6\u6001\u5207\u6362\u5931\u8D25\uFF0C\u5148\u786E\u5B9A audioIconDom \u662F\u5426\u5B58\u5728\uFF1B</span>
<span class="token comment">// 2\u3001\u64AD\u653E\u4E8B\u4EF6 dom \u548C\u64AD\u653E\u72B6\u6001 icon \u53EF\u5206\u79BB\uFF0C\u6CE8\u610F\u64AD\u653E\u4E8B\u4EF6\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u548C ref \u5BF9\u5E94\u5373\u53EF;</span>

<span class="token keyword">import</span> audioUtil <span class="token keyword">from</span> <span class="token string">&#39;audio-util&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// html</span>
<span class="token operator">&lt;</span>div
  <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;audio-status-icon play&quot;</span>
  ref<span class="token operator">=</span><span class="token string">&quot;audioId&quot;</span>
  @click<span class="token punctuation">.</span>stop<span class="token operator">=</span><span class="token string">&quot;playCurrentAudio(audioUrl, audioId)&quot;</span>
<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token comment">// css</span>
<span class="token punctuation">.</span>audio<span class="token operator">-</span>status<span class="token operator">-</span>icon <span class="token punctuation">{</span>
  <span class="token operator">&amp;</span><span class="token punctuation">.</span>play <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token operator">&amp;</span><span class="token punctuation">.</span>pause <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// js</span>
audioUtil<span class="token punctuation">.</span><span class="token function">initListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
audioUtil<span class="token punctuation">.</span><span class="token function">removeListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
audioUtil<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">playCurrentAudio</span><span class="token punctuation">(</span><span class="token parameter">audioUrl<span class="token punctuation">,</span> audioId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>audioUrl<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> audioDom <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span>audioId<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  audioUtil<span class="token punctuation">.</span><span class="token function">playOrPauseAudio</span><span class="token punctuation">(</span>audioUrl<span class="token punctuation">,</span> audioId<span class="token punctuation">,</span> audioDom<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,5),c=[o];function e(u,l){return s(),a("div",null,c)}const k=n(p,[["render",e],["__file","audio-util.html.vue"]]);export{k as default};

import{_ as n,o as s,c as a,f as p}from"./app.93195575.js";const t={},o=p(`<h1 id="音乐播放暂停" tabindex="-1"><a class="header-anchor" href="#音乐播放暂停" aria-hidden="true">#</a> 音乐播放暂停</h1><h2 id="audio-util-js" tabindex="-1"><a class="header-anchor" href="#audio-util-js" aria-hidden="true">#</a> audio-util.js</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Howl <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;howler&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> audioUtil <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">audioArr</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">soundControl</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">currentAudioId</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">currentAudioIconDom</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">isPageHide</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>


  <span class="token doc-comment comment">/**
   * <span class="token keyword">@description</span>: 初始化音频
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">audioArr</span> [<span class="token punctuation">{</span>id: &#39;&#39;, url: &#39;&#39;, dom: &#39;&#39;<span class="token punctuation">}</span>]
   */</span>
  <span class="token function">init</span><span class="token punctuation">(</span><span class="token parameter">audioArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>audioArr <span class="token operator">=</span> audioArr<span class="token punctuation">;</span>
    audioArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> id<span class="token punctuation">,</span> url<span class="token punctuation">,</span> dom <span class="token punctuation">}</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>id <span class="token operator">||</span> <span class="token operator">!</span>url<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Howl</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">src</span><span class="token operator">:</span> url<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;http://&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;https://&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// TODO 优化</span>
        <span class="token literal-property property">preload</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">loop</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">autoplay</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">html5</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// TODO ios 设 true, android 设 false</span>
        <span class="token literal-property property">volume</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;play&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">singleAudioIconPlay</span><span class="token punctuation">(</span>dom<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// EventBus.$emit(&#39;audio-play&#39;, this.currentAudioId); // TODO 通知</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">allAudioIconPause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// EventBus.$emit(&#39;audio-end&#39;, this.currentAudioId); // TODO 通知</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;visibilitychange&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleVisibilityChange</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;audioUtil - init&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@description</span>: 播放或暂停音乐
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">audioId</span>
   */</span>
  <span class="token function">playOrPauseAudio</span><span class="token punctuation">(</span><span class="token parameter">audioId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>audioId<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> audioInfo <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>audioArr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>id <span class="token operator">===</span> audioId<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>audioInfo<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">dom</span><span class="token operator">:</span> audioIconDom <span class="token punctuation">}</span> <span class="token operator">=</span> audioInfo<span class="token punctuation">;</span>

    <span class="token comment">// 点击同一音频</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>audioId <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>currentAudioId <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">[</span>audioId<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">[</span>audioId<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">playing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 播放中要暂停</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">[</span>audioId<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">allAudioIconPause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 暂停中要播放</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">[</span>audioId<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">singleAudioIconPlay</span><span class="token punctuation">(</span>audioIconDom<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 点击不同音频</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">pauseAudio</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">[</span>audioId<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">[</span>audioId<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">[</span>audioId<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">singleAudioIconPlay</span><span class="token punctuation">(</span>audioIconDom<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 保存变量</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>currentAudioId <span class="token operator">=</span> audioId<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>currentAudioIconDom <span class="token operator">=</span> audioIconDom<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 暂停音频</span>
  <span class="token function">pauseAudio</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentAudioId<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentAudioId<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">allAudioIconPause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 所有音频按钮置为暂停要播放状态 ⏹️</span>
  <span class="token function">allAudioIconPause</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> doms <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&quot;.audio-status-icon&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span><span class="token operator">...</span>doms<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      item<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;class&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;audio-status-icon play&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 当前音频按钮置为播放要暂停状态 ⏸️</span>
  <span class="token function">singleAudioIconPlay</span><span class="token punctuation">(</span><span class="token parameter">dom</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>dom<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    dom<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;class&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;audio-status-icon pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 处理页面切后台逻辑</span>
  <span class="token function">handleVisibilityChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 隐藏，暂停</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>document<span class="token punctuation">.</span>hidden<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl
        <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentAudioId<span class="token punctuation">]</span>
        <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentAudioId<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">playing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>isPageHide <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentAudioId<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">allAudioIconPause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 显示，播放</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>document<span class="token punctuation">.</span>hidden<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>isPageHide
        <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl
        <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentAudioId<span class="token punctuation">]</span>
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>isPageHide <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentAudioId<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">singleAudioIconPlay</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentAudioIconDom<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 销毁清除控制器</span>
  <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;visibilitychange&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleVisibilityChange</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>soundControl<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>soundControl <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> audioUtil<span class="token punctuation">;</span>
</code></pre></div><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> demo</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1、如果按钮状态切换失败，先确定 audioIconDom 是否存在；</span>
<span class="token comment">// 2、播放事件 dom 和播放状态 icon 可分离，注意播放事件的第二个参数和 ref 对应即可;</span>

<span class="token keyword">import</span> audioUtil <span class="token keyword">from</span> <span class="token string">&#39;audio-util&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// html</span>
<span class="token operator">&lt;</span>div
  <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;audio-status-icon play&quot;</span>
  ref<span class="token operator">=</span><span class="token string">&quot;audioId&quot;</span>
  @click<span class="token punctuation">.</span>stop<span class="token operator">=</span><span class="token string">&quot;playCurrentAudio(audioId)&quot;</span>
<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token comment">// css</span>
<span class="token punctuation">.</span>audio<span class="token operator">-</span>status<span class="token operator">-</span>icon <span class="token punctuation">{</span>
  <span class="token operator">&amp;</span><span class="token punctuation">.</span>play <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token operator">&amp;</span><span class="token punctuation">.</span>pause <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// js</span>
audioUtil<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;audio1&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dom</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">&#39;audio1&#39;</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;audio2&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dom</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">&#39;audio2&#39;</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">playCurrentAudio</span><span class="token punctuation">(</span><span class="token parameter">audioId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  audioUtil<span class="token punctuation">.</span><span class="token function">playOrPauseAudio</span><span class="token punctuation">(</span>audioId<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

audioUtil<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,5),c=[o];function e(u,l){return s(),a("div",null,c)}const i=n(t,[["render",e],["__file","audio-util.html.vue"]]);export{i as default};

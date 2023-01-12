import{_ as o,r as e,o as c,c as l,a as n,b as s,d as t,f as p}from"./app.bae724f5.js";const u={},i=p(`<h1 id="常用代码" tabindex="-1"><a class="header-anchor" href="#常用代码" aria-hidden="true">#</a> 常用代码</h1><h2 id="img-无-src-时隐藏" tabindex="-1"><a class="header-anchor" href="#img-无-src-时隐藏" aria-hidden="true">#</a> img 无 src 时隐藏</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">img[src=&quot;&quot;],
img:not([src])</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="iphonex、xs、xr、xsmas-适配" tabindex="-1"><a class="header-anchor" href="#iphonex、xs、xr、xsmas-适配" aria-hidden="true">#</a> iPhoneX、XS、XR、XSMas 适配</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/* iphone 5 */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-width</span><span class="token punctuation">:</span> 320px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-height</span><span class="token punctuation">:</span> 568px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* iphone 6、6s、7, 8 */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-width</span><span class="token punctuation">:</span> 375px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-height</span><span class="token punctuation">:</span> 667px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* iphone 6+、6s+、7+、8+ */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-width</span><span class="token punctuation">:</span> 414px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-height</span><span class="token punctuation">:</span> 736px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-device-pixel-ratio</span><span class="token punctuation">:</span> 3<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* iPhoneX、XS、XR、XSMas */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-width</span><span class="token punctuation">:</span> 375px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-height</span><span class="token punctuation">:</span> 812px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-device-pixel-ratio</span><span class="token punctuation">:</span> 3<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-width</span><span class="token punctuation">:</span> 414px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-height</span><span class="token punctuation">:</span> 896px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-width</span><span class="token punctuation">:</span> 414px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">device-height</span><span class="token punctuation">:</span> 896px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-device-pixel-ratio</span><span class="token punctuation">:</span> 3<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.title</span> <span class="token punctuation">{</span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> 0.44rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.bottom</span> <span class="token punctuation">{</span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> 0.34rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="文本溢出-显示" tabindex="-1"><a class="header-anchor" href="#文本溢出-显示" aria-hidden="true">#</a> 文本溢出...显示</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.single</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.multiple</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="滚动条样式" tabindex="-1"><a class="header-anchor" href="#滚动条样式" aria-hidden="true">#</a> 滚动条样式</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 滚动条整体样式 */</span>
<span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 滚动条里面轨道 */</span>
<span class="token selector">::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 滚动条里面小方块 */</span>
<span class="token selector">::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #81d4fa<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 滚动条轨道两端按钮 */</span>
<span class="token selector">::-webkit-scrollbar-button</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 滚动条中间部分内置轨道 */</span>
<span class="token selector">::-webkit-scrollbar-track-piece</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 边角两个滚动条交汇处 */</span>
<span class="token selector">::-webkit-scrollbar-corner</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件 */</span>
<span class="token selector">::-webkit-resizer</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="自定义字体" tabindex="-1"><a class="header-anchor" href="#自定义字体" aria-hidden="true">#</a> 自定义字体</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  不同字体文件的 format() 不一样
  src: url(&#39;fonts/xxx.svg&#39;) format(&#39;svg&#39;);
  src: url(&#39;fonts/xxx.eot?&#39;) format(&#39;eot&#39;);
  src: url(&#39;fonts/xxx.woff&#39;) format(&#39;woff&#39;);
  src: url(&#39;fonts/xxx.ttf&#39;) format(&#39;truetype&#39;);
*/</span>
<span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;self-font&quot;</span><span class="token punctuation">;</span>
  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;fonts/xxx.ttf&quot;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;truetype&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.word</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;self-font&quot;</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="css-苹方字体" tabindex="-1"><a class="header-anchor" href="#css-苹方字体" aria-hidden="true">#</a> css 苹方字体</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 苹方-简 */</span>
<span class="token property">font-family</span><span class="token punctuation">:</span> PingFangSC-Regular<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span> // 常规体
<span class="token property">font-family</span><span class="token punctuation">:</span> PingFangSC-Ultralight<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span> // 极细体
<span class="token property">font-family</span><span class="token punctuation">:</span> PingFangSC-Light<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span> // 细体
<span class="token property">font-family</span><span class="token punctuation">:</span> PingFangSC-Thin<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span> // 纤细体
<span class="token property">font-family</span><span class="token punctuation">:</span> PingFangSC-Medium<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span> // 中黑体
<span class="token property">font-family</span><span class="token punctuation">:</span> PingFangSC-Semibold<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span> // 中粗体

<span class="token comment">/* 苹方-繁 */</span>
<span class="token property">font-family</span><span class="token punctuation">:</span> PingFangTC-Regular<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token property">font-family</span><span class="token punctuation">:</span> PingFangTC-Ultralight<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token property">font-family</span><span class="token punctuation">:</span> PingFangTC-Light<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token property">font-family</span><span class="token punctuation">:</span> PingFangTC-Thin<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token property">font-family</span><span class="token punctuation">:</span> PingFangTC-Medium<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token property">font-family</span><span class="token punctuation">:</span> PingFangTC-Semibold<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>

<span class="token comment">/* 苹方-港 */</span>
<span class="token property">font-family</span><span class="token punctuation">:</span> PingFangHK-Regular<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token property">font-family</span><span class="token punctuation">:</span> PingFangHK-Ultralight<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token property">font-family</span><span class="token punctuation">:</span> PingFangHK-Light<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token property">font-family</span><span class="token punctuation">:</span> PingFangHK-Thin<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token property">font-family</span><span class="token punctuation">:</span> PingFangHK-Medium<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token property">font-family</span><span class="token punctuation">:</span> PingFangHK-Semibold<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
</code></pre></div><h2 id="全网页置灰" tabindex="-1"><a class="header-anchor" href="#全网页置灰" aria-hidden="true">#</a> 全网页置灰</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-moz-filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-ms-filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-o-filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/* IE 兼容 */</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token property">progid</span><span class="token punctuation">:</span>DXImageTransform.Microsoft.<span class="token function">BasicImage</span><span class="token punctuation">(</span>grayscale=1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="点击元素产生背景或边框" tabindex="-1"><a class="header-anchor" href="#点击元素产生背景或边框" aria-hidden="true">#</a> 点击元素产生背景或边框</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
 ios点击链接，会出现半透明灰色遮罩
 android点击链接，会出现边框或者半透明灰色遮罩
 winphone点击标签, 会出现灰色半透明背景，能通过设置&lt;meta name=&quot;msapplication-tap-highlight&quot; content=&quot;no&quot;&gt;去掉；
*/</span>
<span class="token selector">a,
button,
input,
textarea</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-tap-highlight-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-webkit-user-modify</span><span class="token punctuation">:</span> read-write-plaintext-only<span class="token punctuation">;</span> <span class="token comment">/*-webkit-user-modify有个副作用，就是输入法不再能够输入多个字符*/</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="解决-ios-点击元素出现阴影或闪烁问题" tabindex="-1"><a class="header-anchor" href="#解决-ios-点击元素出现阴影或闪烁问题" aria-hidden="true">#</a> 解决 ios 点击元素出现阴影或闪烁问题</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">-webkit-tap-highlight-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
</code></pre></div><h2 id="禁止长按链接与图片弹出菜单" tabindex="-1"><a class="header-anchor" href="#禁止长按链接与图片弹出菜单" aria-hidden="true">#</a> 禁止长按链接与图片弹出菜单</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">a,
img</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-touch-callout</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="禁止-ios-和-android-用户选中文字" tabindex="-1"><a class="header-anchor" href="#禁止-ios-和-android-用户选中文字" aria-hidden="true">#</a> 禁止 ios 和 android 用户选中文字</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">html,
body</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="改变-placeholder-颜色值" tabindex="-1"><a class="header-anchor" href="#改变-placeholder-颜色值" aria-hidden="true">#</a> 改变 placeholder 颜色值</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/* WebKit browsers */</span>
<span class="token selector">::-webkit-input-placeholder</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Mozilla Firefox 4 to 18 */</span>
<span class="token selector">:-moz-placeholder</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Mozilla Firefox 19+ */</span>
<span class="token selector">::-moz-placeholder</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Internet Explorer 10+ */</span>
<span class="token selector">:-ms-input-placeholder</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">input:focus::-webkit-input-placeholder</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="ios-取消-input-英文首字母大写" tabindex="-1"><a class="header-anchor" href="#ios-取消-input-英文首字母大写" aria-hidden="true">#</a> ios 取消 input 英文首字母大写</h2><div class="language-css" data-ext="css"><pre class="language-css"><code>&lt;input autocapitalize=<span class="token string">&quot;off&quot;</span> autocorrect=<span class="token string">&quot;off&quot;</span> /&gt;
</code></pre></div><h2 id="ios-下输入框默认内阴影" tabindex="-1"><a class="header-anchor" href="#ios-下输入框默认内阴影" aria-hidden="true">#</a> ios 下输入框默认内阴影</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">input</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="font-size-单位选择" tabindex="-1"><a class="header-anchor" href="#font-size-单位选择" aria-hidden="true">#</a> font-size 单位选择</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 如需适配多种移动设备，建议使用rem，以下为参考值：10*16 = 62.5%； */</span>
<span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 62.5%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 设置12px字体，这里注意在rem前要加上对应的px值，解决不支持rem的浏览器的兼容问题，做到优雅降级 */</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.2rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="消除-transition-闪屏" tabindex="-1"><a class="header-anchor" href="#消除-transition-闪屏" aria-hidden="true">#</a> 消除 transition 闪屏</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.css</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-transform-style</span><span class="token punctuation">:</span> preserve-3d<span class="token punctuation">;</span>
  <span class="token property">-webkit-backface-visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">-webkit-perspective</span><span class="token punctuation">:</span> 1000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="开启硬件加速" tabindex="-1"><a class="header-anchor" href="#开启硬件加速" aria-hidden="true">#</a> 开启硬件加速</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Chrome/Filefox/Safari/IE9+以及最新版本Opera都支持硬件加速，当检测到某个DOM元素应用了某些CSS规则时就会自动开启，从而解决页面闪白，保证动画流畅。*/</span>
<span class="token selector">.css</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-moz-transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-ms-transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="css-实现序列帧动画" tabindex="-1"><a class="header-anchor" href="#css-实现序列帧动画" aria-hidden="true">#</a> css 实现序列帧动画</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 如序列帧播放时右侧显示下一帧的一列像素内容，减小1像素宽度可解，问题机型：iPhone6 */</span>
<span class="token selector">.cat_animate_right</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 可翻转图片，做反向序列帧 */</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;./animate.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
  <span class="token property">background-position</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>
  <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> catPngList 1.3s 1s forwards <span class="token function">steps</span><span class="token punctuation">(</span>10<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> catPngList</span> <span class="token punctuation">{</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">background-position</span><span class="token punctuation">:</span> -1000px 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="横竖屏" tabindex="-1"><a class="header-anchor" href="#横竖屏" aria-hidden="true">#</a> 横竖屏</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 竖屏时样式 */</span>
<span class="token atrule"><span class="token rule">@media</span> all <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> portrait<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 横屏时样式 */</span>
<span class="token atrule"><span class="token rule">@media</span> all <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> landscape<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 竖屏样式 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>all and (orientation:portrait)<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>portrait.css<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
<span class="token comment">&lt;!-- 横屏样式 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>all and (orientation:landscape)<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>landscape.css<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;onorientationchange&#39;</span> <span class="token keyword">in</span> window <span class="token operator">?</span> <span class="token string">&#39;orientationchange&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 方法一</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> orientChk <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth <span class="token operator">&gt;</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight <span class="token operator">?</span> <span class="token string">&#39;landscape&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;portrait&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>orientChk <span class="token operator">==</span><span class="token string">&#39;lapdscape&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// 横屏</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      <span class="token comment">// 竖屏</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 方法二</span>
  <span class="token comment">// if (window.orientation === 90 || window.orientation === -90 ){</span>
  <span class="token comment">//   // 横屏</span>
  <span class="token comment">// }</span>
  <span class="token comment">// if (window.orientation === 180 || window.orientation === 0) {</span>
  <span class="token comment">//   // 竖屏</span>
  <span class="token comment">// }</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="vw-定制-rem-布局" tabindex="-1"><a class="header-anchor" href="#vw-定制-rem-布局" aria-hidden="true">#</a> vw 定制 rem 布局</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vw / 7.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="transform-水平垂直翻转" tabindex="-1"><a class="header-anchor" href="#transform-水平垂直翻转" aria-hidden="true">#</a> transform 水平垂直翻转</h2><div class="language-css" data-ext="css"><pre class="language-css"><code>// 水平翻转
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale3d</span><span class="token punctuation">(</span>1<span class="token punctuation">,</span> -1<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>

// 垂直翻转
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale3d</span><span class="token punctuation">(</span>-1<span class="token punctuation">,</span> 1<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>

// 倒叙翻转
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale3d</span><span class="token punctuation">(</span>-1<span class="token punctuation">,</span> -1<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="ios-弹性滚动" tabindex="-1"><a class="header-anchor" href="#ios-弹性滚动" aria-hidden="true">#</a> ios 弹性滚动</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-overflow-scrolling</span><span class="token punctuation">:</span> touch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="selection-文本选中样式" tabindex="-1"><a class="header-anchor" href="#selection-文本选中样式" aria-hidden="true">#</a> ::selection 文本选中样式</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">div::selection</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #3c9<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="css-高级属性" tabindex="-1"><a class="header-anchor" href="#css-高级属性" aria-hidden="true">#</a> CSS 高级属性</h2>`,50),k=n("thead",null,[n("tr",null,[n("th",null,"属性"),n("th",null,"说明"),n("th",null,"链接")])],-1),r=n("tr",null,[n("td",null,"text-align-last"),n("td",null,"末行文本对齐"),n("td")],-1),d=n("tr",null,[n("td",null,"writing-mode"),n("td",null,"文字排版"),n("td")],-1),h=n("td",null,"object-fit",-1),g=n("td",null,"图片宽高适配",-1),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit",target:"_blank",rel:"noopener noreferrer"},f=n("td",null,"filter",-1),y=n("td",null,"滤镜",-1),b={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/una/CSSgram/blob/master/README-CN.md",target:"_blank",rel:"noopener noreferrer"},v=n("td",null,"mask",-1),w=n("td",null,"遮罩层",-1),_={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask",target:"_blank",rel:"noopener noreferrer"},q=n("tr",null,[n("td",null,"caret-color"),n("td",null,"改变输入框光标颜色"),n("td")],-1),z=p(`<h2 id="文字渐变效果" tabindex="-1"><a class="header-anchor" href="#文字渐变效果" aria-hidden="true">#</a> 文字渐变效果</h2><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>words words1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-word</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>文字遮罩效果<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>文字遮罩效果<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>words words2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>文字遮罩效果<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.words</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #e87828<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">// 方式一：借助 before 和 mask 属性实现
.words1::before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">attr</span><span class="token punctuation">(</span>data-word<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #932b0b<span class="token punctuation">;</span>
  <span class="token property">-webkit-mask</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> #932b0b<span class="token punctuation">,</span> transparent<span class="token punctuation">,</span> #932b0b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">// 方式二：借助 gradient 和 background-clip 属性实现
.words2</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>90deg<span class="token punctuation">,</span> #932b0b 0%<span class="token punctuation">,</span> #e87828 50%<span class="token punctuation">,</span> #932b0b 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-webkit-text-fill-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">-webkit-background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="https://fengling68.github.io/imgbed/images/1578920981-532x226.png" alt="文字遮罩预览"></p><h2 id="input-输入光标颜色" tabindex="-1"><a class="header-anchor" href="#input-输入光标颜色" aria-hidden="true">#</a> input 输入光标颜色</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">input</span> <span class="token punctuation">{</span>
  <span class="token property">caret-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="解决-ios-端-z-index-层级问题" tabindex="-1"><a class="header-anchor" href="#解决-ios-端-z-index-层级问题" aria-hidden="true">#</a> 解决 ios 端 z-index 层级问题</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 10<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token selector">.child</span> <span class="token punctuation">{</span>
    <span class="token property">backface-visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">-webkit-backface-visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,8);function S(C,P){const a=e("ExternalLinkIcon");return c(),l("div",null,[i,n("table",null,[k,n("tbody",null,[r,d,n("tr",null,[h,g,n("td",null,[n("a",m,[s("MDN object-fit"),t(a)])])]),n("tr",null,[f,y,n("td",null,[n("a",b,[s("MDN filter"),t(a)]),s(),n("a",x,[s("CSSgram:一个支持滤镜的框架"),t(a)])])]),n("tr",null,[v,w,n("td",null,[n("a",_,[s("MDN mask"),t(a)])])]),q])]),z])}const M=o(u,[["render",S],["__file","20201001｜常用代码.html.vue"]]);export{M as default};

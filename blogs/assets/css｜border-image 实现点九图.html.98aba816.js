import{_ as t,r as p,o as e,c as o,a as n,b as a,d as c,f as l}from"./app.3f8066ad.js";const i={},r=n("h1",{id:"border-image-实现点九图",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#border-image-实现点九图","aria-hidden":"true"},"#"),a(" border-image 实现点九图")],-1),u=n("h2",{id:"什么是点九图",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#什么是点九图","aria-hidden":"true"},"#"),a(" 什么是点九图")],-1),d=n("p",null,"点九图是安卓系统中特有的一种图片格式，后缀名是 「.9.png」的图片。",-1),k=n("p",null,"点九图就可以让切图局部拉伸而不是整体拉伸，这样就可以把容易变形的地方保护起来。",-1),h={href:"https://www.uisdc.com/draw-9-patch-android",target:"_blank",rel:"noopener noreferrer"},g=l(`<h2 id="关键属性" tabindex="-1"><a class="header-anchor" href="#关键属性" aria-hidden="true">#</a> 关键属性</h2><p><code>border-image-source</code> 设置背景图；</p><p><code>border-image-slice</code> 规定图像的边缘向内偏移像素（上、右、下、左）；</p><p><code>border-image-width</code> 规定将边框图像分割为九个部分的偏移（上、右、下、左）；</p><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.popup</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">border-image-source</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;https://img2.baidu.com/it/u=2989326938,4027860405&amp;fm=253&amp;fmt=auto&amp;app=138&amp;f=JPEG?w=260&amp;h=229&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">border-image-slice</span><span class="token punctuation">:</span> 20 50 20 50 fill<span class="token punctuation">;</span>
  <span class="token property">border-image-width</span><span class="token punctuation">:</span> 20px 50px 20px 50px<span class="token punctuation">;</span>
  <span class="token selector">.text</span> <span class="token punctuation">{</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    浅淡人生，岁月的痕迹，我们一路走，一路感悟了着人生风雨，新的、旧的、来的、去的，不断上演，也不断错过，远了、近了、天涯也咫尺，始料不及也匆匆逝去。　　涉世红尘，谁能没有悲喜，人间行走，谁能没有得失，来来去去，风风雨雨，谁能没有挫折和委屈，岁月无情，将生活碾转成泥，时光寂寥，也有很多事情让我们承担不起，不得不学着放弃。
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,6);function m(_,f){const s=p("ExternalLinkIcon");return e(),o("div",null,[r,u,d,k,n("p",null,[a("点九图详细介绍和原理："),n("a",h,[a("https://www.uisdc.com/draw-9-patch-android"),c(s)]),a("。")]),g])}const b=t(i,[["render",m],["__file","css｜border-image 实现点九图.html.vue"]]);export{b as default};

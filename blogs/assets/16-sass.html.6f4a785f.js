import{_ as n,o as s,c as a,f as t}from"./app.9f18a3e5.js";const p={},c=t(`<h1 id="sass" tabindex="-1"><a class="header-anchor" href="#sass" aria-hidden="true">#</a> sass</h1><h2 id="_0\u3001sass-\u548C-scss-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_0\u3001sass-\u548C-scss-\u533A\u522B" aria-hidden="true">#</a> 0\u3001sass \u548C scss \u533A\u522B</h2><p>sass \u4E0D\u5141\u8BB8\u51FA\u73B0 {} \uFF0C scss \u53EF\u4EE5\u50CF css \u4E00\u6837\u4F7F\u7528 {}\u3002</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">//sass\u4E66\u5199\u65B9\u5F0F
body
	font-size: 12px
	background: #000

//scss\u4E66\u5199\u65B9\u5F0F
body</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_1\u3001\u5B9A\u4E49\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u5B9A\u4E49\u53D8\u91CF" aria-hidden="true">#</a> 1\u3001\u5B9A\u4E49\u53D8\u91CF <code>$</code></h2><div class="language-css ext-css"><pre class="language-css"><code>$<span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
</code></pre></div><h2 id="_2\u3001\u4F7F\u7528\u53D8\u91CF-\u6216" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u4F7F\u7528\u53D8\u91CF-\u6216" aria-hidden="true">#</a> 2\u3001\u4F7F\u7528\u53D8\u91CF <code>#</code>\u6216<code>$</code></h2><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">// \u53D8\u91CF\u505A\u5C5E\u6027\u540D
#</span><span class="token punctuation">{</span>$float<span class="token punctuation">}</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>

// \u53D8\u91CF\u505A\u5C5E\u6027\u503C
<span class="token property">float</span><span class="token punctuation">:</span> $left<span class="token punctuation">;</span>
</code></pre></div><h2 id="_3\u3001\u9009\u62E9\u5668\u5D4C\u5957\u548C\u5C5E\u6027\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u9009\u62E9\u5668\u5D4C\u5957\u548C\u5C5E\u6027\u5D4C\u5957" aria-hidden="true">#</a> 3\u3001\u9009\u62E9\u5668\u5D4C\u5957\u548C\u5C5E\u6027\u5D4C\u5957</h2><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token selector">font:</span> <span class="token punctuation">{</span>
      <span class="token property">weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
      <span class="token property">size</span><span class="token punctuation">:</span> 23px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_4\u3001\u7236\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u7236\u9009\u62E9\u5668" aria-hidden="true">#</a> 4\u3001\u7236\u9009\u62E9\u5668 <code>&amp;</code></h2><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">div</span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
	<span class="token selector">height:100px
	&amp;:after</span><span class="token punctuation">{</span>
		<span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
		<span class="token property">background</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
		<span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">&amp;-child</span><span class="token punctuation">{</span>
		// \u7F16\u8BD1\u540E\u4E3A div-child
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_5\u3001\u5B9A\u4E49\u91CD\u7528\u4EE3\u7801\u5757-mixin" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u5B9A\u4E49\u91CD\u7528\u4EE3\u7801\u5757-mixin" aria-hidden="true">#</a> 5\u3001\u5B9A\u4E49\u91CD\u7528\u4EE3\u7801\u5757 <code>@mixin</code></h2><div class="language-css ext-css"><pre class="language-css"><code>// \u5C45\u4E2D\u663E\u793A
<span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">center</span><span class="token punctuation">(</span>$t<span class="token punctuation">,</span> $b<span class="token punctuation">,</span> $l<span class="token punctuation">,</span> $r<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
	<span class="token property">top</span><span class="token punctuation">:</span> <span class="token function">rpx</span><span class="token punctuation">(</span>$t<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">bottom</span><span class="token punctuation">:</span> <span class="token function">rpx</span><span class="token punctuation">(</span>$b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">left</span><span class="token punctuation">:</span> <span class="token function">rpx</span><span class="token punctuation">(</span>$l<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">right</span><span class="token punctuation">:</span> <span class="token function">rpx</span><span class="token punctuation">(</span>$r<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@include</span> <span class="token function">center</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
</code></pre></div><h2 id="_6\u3001\u8C03\u7528\u91CD\u7528\u4EE3\u7801\u5757-include" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u8C03\u7528\u91CD\u7528\u4EE3\u7801\u5757-include" aria-hidden="true">#</a> 6\u3001\u8C03\u7528\u91CD\u7528\u4EE3\u7801\u5757 <code>@include</code></h2><div class="language-text ext-text"><pre class="language-text"><code>.box{
	@include bg_dom(&#39;../img.png&#39;,30%,40%)
}
</code></pre></div><h2 id="_7\u3001\u9009\u62E9\u5668\u7EE7\u627F-extend" tabindex="-1"><a class="header-anchor" href="#_7\u3001\u9009\u62E9\u5668\u7EE7\u627F-extend" aria-hidden="true">#</a> 7\u3001\u9009\u62E9\u5668\u7EE7\u627F <code>@extend</code></h2><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.father</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> #fdd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.son</span> <span class="token punctuation">{</span>
	<span class="token atrule"><span class="token rule">@extend</span> .father<span class="token punctuation">;</span></span>
	<span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_8\u3001\u6570\u636E\u7C7B\u578B\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#_8\u3001\u6570\u636E\u7C7B\u578B\u8FD0\u7B97" aria-hidden="true">#</a> 8\u3001\u6570\u636E\u7C7B\u578B\u8FD0\u7B97</h2><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">\u6240\u6709: == , !=
\u6570\u5B57: +, -, *, /, %, &lt;, &gt;, &lt;=, &gt;=
\u5B57\u7B26: + #</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token property">\u989C\u8272</span><span class="token punctuation">:</span> +<span class="token punctuation">,</span> *
<span class="token property">\u5E03\u5C14</span><span class="token punctuation">:</span> and<span class="token punctuation">,</span> or<span class="token punctuation">,</span> not
<span class="token property">\u7A7A\u503C</span><span class="token punctuation">:</span>
<span class="token property">\u6570\u7EC4</span><span class="token punctuation">:</span>
<span class="token property">maps</span><span class="token punctuation">:</span>
</code></pre></div><h2 id="_9\u3001\u5185\u7F6E\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_9\u3001\u5185\u7F6E\u51FD\u6570" aria-hidden="true">#</a> 9\u3001\u5185\u7F6E\u51FD\u6570</h2><div class="language-css ext-css"><pre class="language-css"><code><span class="token function">image-width</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                   \u83B7\u53D6\u56FE\u7247\u7684\u5BBD\u5EA6
<span class="token function">image-height</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                  \u83B7\u53D6\u56FE\u7247\u7684\u9AD8\u5EA6
<span class="token function">unit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                          \u83B7\u53D6\u4E00\u4E2A\u503C\u6240\u4F7F\u7528\u7684\u5355\u4F4D
<span class="token function">lighten</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span>10%<span class="token punctuation">)</span>                \u4F7F\u989C\u8272\u53D8\u6DE1
<span class="token function">darken</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span>20%<span class="token punctuation">)</span>                 \u4F7F\u989C\u8272\u53D8\u6DF1
inline_<span class="token function">image</span><span class="token punctuation">(</span><span class="token string">&#39;../img.png&#39;</span><span class="token punctuation">)</span>      \u5C06\u56FE\u7247\u8F6C\u6362\u6210base64\u683C\u5F0F
// ...
</code></pre></div><h3 id="_1-\u5B57\u7B26\u4E32\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_1-\u5B57\u7B26\u4E32\u51FD\u6570" aria-hidden="true">#</a> (1)\u5B57\u7B26\u4E32\u51FD\u6570</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token function">unquote</span><span class="token punctuation">(</span>$string<span class="token punctuation">)</span>                            \uFF1A\u5220\u9664\u5B57\u7B26\u4E32\u4E2D\u7684\u5F15\u53F7\uFF1B
<span class="token function">quote</span><span class="token punctuation">(</span>$string<span class="token punctuation">)</span>                              \uFF1A\u7ED9\u5B57\u7B26\u4E32\u6DFB\u52A0\u5F15\u53F7\uFF1B
<span class="token function">str-length</span><span class="token punctuation">(</span>$string<span class="token punctuation">)</span>                         <span class="token punctuation">:</span> \u8FD4\u56DE\u5B57\u7B26\u4E32\u957F\u5EA6\uFF1B
<span class="token function">str-insert</span><span class="token punctuation">(</span>$string<span class="token punctuation">,</span> $insert<span class="token punctuation">,</span> $index<span class="token punctuation">)</span>        <span class="token punctuation">:</span> \u5728$string\u4E2D\u7684\u7B2C$insert\u4E2D\u63D2\u5165\u5B57\u7B26\u4E32$insert\uFF1B
<span class="token function">str-index</span><span class="token punctuation">(</span>$string<span class="token punctuation">,</span> $substring<span class="token punctuation">)</span>              <span class="token punctuation">:</span> \u67E5\u627E\u5B57\u7B26\u4E32$substring\u5E76\u8FD4\u56DE\u5176\u4E0B\u6807\uFF1B
<span class="token function">str-slice</span><span class="token punctuation">(</span>$string<span class="token punctuation">,</span> $start-at<span class="token punctuation">,</span> [$end-at]<span class="token punctuation">)</span>    <span class="token punctuation">:</span> \u622A\u53D6\u5B57\u7B26\u4E32\uFF08\u5F00\u59CB\u4F4D\u7F6E\u3001\u7ED3\u675F\u4F4D\u7F6E\uFF09\uFF1B
<span class="token function">to-upper-case</span><span class="token punctuation">(</span>$string<span class="token punctuation">)</span>                      <span class="token punctuation">:</span> \u8F6C\u4E3A\u5927\u5199\u5B57\u6BCD\uFF1B
<span class="token function">to-lower-case</span><span class="token punctuation">(</span>$string<span class="token punctuation">)</span>                      <span class="token punctuation">:</span> \u8F6C\u4E3A\u5C0F\u5199\u5B57\u6BCD\u3002
</code></pre></div><h3 id="_2-\u6570\u5B57\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_2-\u6570\u5B57\u51FD\u6570" aria-hidden="true">#</a> (2)\u6570\u5B57\u51FD\u6570</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token function">percentage</span><span class="token punctuation">(</span>$value<span class="token punctuation">)</span>                          \uFF1A\u5C06\u4E00\u4E2A\u4E0D\u5E26\u5355\u4F4D\u7684\u6570\u8F6C\u6362\u6210\u767E\u5206\u6BD4\u503C\uFF1B
<span class="token function">round</span><span class="token punctuation">(</span>$value<span class="token punctuation">)</span>                               \uFF1A\u5C06\u6570\u503C\u56DB\u820D\u4E94\u5165\uFF0C\u8F6C\u6362\u6210\u4E00\u4E2A\u6700\u63A5\u8FD1\u7684\u6574\u6570\uFF1B
<span class="token function">ceil</span><span class="token punctuation">(</span>$value<span class="token punctuation">)</span>                                \uFF1A\u5C06\u5927\u4E8E\u81EA\u5DF1\u7684\u5C0F\u6570\u8F6C\u6362\u6210\u4E0B\u4E00\u4F4D\u6574\u6570\uFF1B
<span class="token function">floor</span><span class="token punctuation">(</span>$value<span class="token punctuation">)</span>                               \uFF1A\u5C06\u4E00\u4E2A\u6570\u53BB\u9664\u4ED6\u7684\u5C0F\u6570\u90E8\u5206\uFF1B
<span class="token function">abs</span><span class="token punctuation">(</span>$value<span class="token punctuation">)</span>                                 \uFF1A\u8FD4\u56DE\u4E00\u4E2A\u6570\u7684\u7EDD\u5BF9\u503C\uFF1B
<span class="token function">min</span><span class="token punctuation">(</span>$numbers\u2026<span class="token punctuation">)</span>                              \uFF1A\u627E\u51FA\u51E0\u4E2A\u6570\u503C\u4E4B\u95F4\u7684\u6700\u5C0F\u503C\uFF1B
<span class="token function">max</span><span class="token punctuation">(</span>$numbers\u2026<span class="token punctuation">)</span>                              \uFF1A\u627E\u51FA\u51E0\u4E2A\u6570\u503C\u4E4B\u95F4\u7684\u6700\u5927\u503C\uFF1B
<span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                    \uFF1A\u751F\u6210\u4E00\u4E2A\u968F\u673A\u6570\u3002
</code></pre></div><h3 id="_3-list-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_3-list-\u51FD\u6570" aria-hidden="true">#</a> (3)list \u51FD\u6570</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token function">length</span><span class="token punctuation">(</span>$list<span class="token punctuation">)</span>                               \uFF1A\u8FD4\u56DE\u4E00\u4E2A\u5217\u8868\u7684\u957F\u5EA6\u503C\uFF1B
<span class="token function">nth</span><span class="token punctuation">(</span>$list<span class="token punctuation">,</span> $n<span class="token punctuation">)</span>                              \uFF1A\u8FD4\u56DE\u4E00\u4E2A\u5217\u8868\u4E2D\u6307\u5B9A\u7684\u67D0\u4E2A\u6807\u7B7E\u503C
<span class="token function">join</span><span class="token punctuation">(</span>$list1<span class="token punctuation">,</span> $list2<span class="token punctuation">,</span> [$separator]<span class="token punctuation">)</span>          \uFF1A\u5C06\u4E24\u4E2A\u5217\u7ED9\u8FDE\u63A5\u5728\u4E00\u8D77\uFF0C\u53D8\u6210\u4E00\u4E2A\u5217\u8868\uFF1B
<span class="token function">append</span><span class="token punctuation">(</span>$list1<span class="token punctuation">,</span> $val<span class="token punctuation">,</span> [$separator]<span class="token punctuation">)</span>          \uFF1A\u5C06\u67D0\u4E2A\u503C\u653E\u5728\u5217\u8868\u7684\u6700\u540E\uFF1B
<span class="token function">zip</span><span class="token punctuation">(</span>$lists\u2026<span class="token punctuation">)</span>                                \uFF1A\u5C06\u51E0\u4E2A\u5217\u8868\u7ED3\u5408\u6210\u4E00\u4E2A\u591A\u7EF4\u7684\u5217\u8868\uFF1B
<span class="token function">index</span><span class="token punctuation">(</span>$list<span class="token punctuation">,</span> $value<span class="token punctuation">)</span>                        \uFF1A\u8FD4\u56DE\u4E00\u4E2A\u503C\u5728\u5217\u8868\u4E2D\u7684\u4F4D\u7F6E\u503C\uFF1B
<span class="token function">list-separator</span><span class="token punctuation">(</span>$list<span class="token punctuation">)</span>                       <span class="token punctuation">:</span> \u662F\u5426\u6709\u5206\u9694\u7B26\uFF1B
<span class="token function">is-bracketed</span><span class="token punctuation">(</span>$list<span class="token punctuation">)</span>                         <span class="token punctuation">:</span> \u662F\u5426\u6709\u65B9\u62EC\u53F7[]\u3002
</code></pre></div><h3 id="_4-map-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_4-map-\u51FD\u6570" aria-hidden="true">#</a> (4)map \u51FD\u6570</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token function">map-get</span><span class="token punctuation">(</span>$map<span class="token punctuation">,</span>$key<span class="token punctuation">)</span>                          \uFF1A\u6839\u636E$key\u8FD4\u56DE\u5BF9\u5E94\u7684map\u503C\uFF1B
<span class="token function">map-merge</span><span class="token punctuation">(</span>$map1<span class="token punctuation">,</span>$map2<span class="token punctuation">)</span>                      \uFF1A\u5408\u5E76map1\u548Cmap2\uFF1B
<span class="token function">map-remove</span><span class="token punctuation">(</span>$map<span class="token punctuation">,</span>$key<span class="token punctuation">)</span>                       \uFF1A\u8FD4\u56DE\u5220\u9664$key\u503C\u540E\u7684\u65B0map\uFF1B
<span class="token function">map-keys</span><span class="token punctuation">(</span>$map<span class="token punctuation">)</span>                              \uFF1A\u8FD4\u56DEmap\u4E2D\u7684\u6240\u6709key\uFF1B
<span class="token function">map-values</span><span class="token punctuation">(</span>$map<span class="token punctuation">)</span>                            \uFF1A\u8FD4\u56DEmap\u4E2D\u7684\u6240\u6709value\uFF1B
<span class="token function">map-has-key</span><span class="token punctuation">(</span>$map<span class="token punctuation">,</span>$key<span class="token punctuation">)</span>                      \uFF1Amap\u4E2D\u662F\u5426\u6709\u6539key\uFF1B
<span class="token function">keywords</span><span class="token punctuation">(</span>$args<span class="token punctuation">)</span>                             \uFF1A Returns the keywords passed to a function that takes variable arguments.
</code></pre></div><h3 id="_5-introspection-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_5-introspection-\u51FD\u6570" aria-hidden="true">#</a> (5)Introspection \u51FD\u6570</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token function">feature-exists</span><span class="token punctuation">(</span>$feature<span class="token punctuation">)</span>                    \uFF1A\u67D0\u5C5E\u6027\u662F\u5426\u5728\u5F53\u524Dsass\u4E2D\uFF1B
<span class="token function">variable-exists</span><span class="token punctuation">(</span>$name<span class="token punctuation">)</span>                      \uFF1A\u67D0\u53D8\u91CF\u662F\u5426\u5728\u5F53\u524Dsass\u4E2D\uFF1B
<span class="token function">global-variable-exists</span><span class="token punctuation">(</span>$name<span class="token punctuation">)</span>               \uFF1A\u67D0\u53D8\u91CF\u662F\u5426\u5728\u5168\u5C40\u73AF\u5883\u4E2D\uFF1B
<span class="token function">function-exists</span><span class="token punctuation">(</span>$name<span class="token punctuation">)</span>                      \uFF1A\u67D0\u51FD\u6570\u662F\u5426\u5B58\u5728\uFF1B
<span class="token function">mixin-exists</span><span class="token punctuation">(</span>$name<span class="token punctuation">)</span>                         \uFF1A\u67D0mixin\u662F\u5426\u5B58\u5728\uFF1B
<span class="token function">content-exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                            \uFF1A\u5F53\u524D\u7684mixin\u662F\u5426\u901A\u8FC7\u4E86\u4E00\u4E2A\u5185\u5BB9\u5757\uFF1B
<span class="token function">type-of</span><span class="token punctuation">(</span>$value<span class="token punctuation">)</span>                             \uFF1A\u8FD4\u56DE\u4E00\u4E2A\u503C\u7684\u7C7B\u578B\uFF1B
<span class="token function">unit</span><span class="token punctuation">(</span>$number<span class="token punctuation">)</span>                               \uFF1A\u8FD4\u56DE\u4E00\u4E2A\u503C\u7684\u5355\u4F4D\uFF1B
<span class="token function">unitless</span><span class="token punctuation">(</span>$number<span class="token punctuation">)</span>                           \uFF1A\u5224\u65AD\u4E00\u4E2A\u503C\u662F\u5426\u6709\u5E26\u4F4D\uFF1B
<span class="token function">comparable</span><span class="token punctuation">(</span>$number-1<span class="token punctuation">,</span> $number-2<span class="token punctuation">)</span>            \uFF1A\u5224\u65AD\u4E24\u4E2A\u503C\u662F\u5426\u53EF\u4EE5\u505A\u52A0\u3001\u51CF\u548C\u5408\u5E76\uFF1B
<span class="token function">call</span><span class="token punctuation">(</span>$function<span class="token punctuation">,</span> $args\u2026<span class="token punctuation">)</span>                     \uFF1A\u52A8\u6001\u7ED1\u5B9Aget-function\u8FD4\u56DE\u7684\u51FD\u6570\uFF1B
<span class="token function">get-function</span><span class="token punctuation">(</span>$name<span class="token punctuation">,</span> $<span class="token property">css</span><span class="token punctuation">:</span> false<span class="token punctuation">)</span>            \uFF1A\u67E5\u627E\u7ED9\u5B9A\u540D\u79F0\u7684\u51FD\u6570\uFF1B
<span class="token function">inspect</span><span class="token punctuation">(</span>$value<span class="token punctuation">)</span>                             <span class="token punctuation">:</span> Returns the string representation of a value as it would be represented in Sass.
</code></pre></div><h3 id="_6-\u989C\u8272\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_6-\u989C\u8272\u51FD\u6570" aria-hidden="true">#</a> (6)\u989C\u8272\u51FD\u6570</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token function">rgb</span><span class="token punctuation">(</span>$red<span class="token punctuation">,</span> $green<span class="token punctuation">,</span> $blue<span class="token punctuation">)</span>                    \uFF1A\u521B\u5EFA\u989C\u8272\uFF1B
<span class="token function">rgba</span><span class="token punctuation">(</span>$red<span class="token punctuation">,</span> $green<span class="token punctuation">,</span> $blue<span class="token punctuation">,</span> $alpha<span class="token punctuation">)</span>           \uFF1A\u521B\u5EFA\u989C\u8272\u5305\u542B\u900F\u660E\u5EA6\uFF1B
<span class="token function">red</span><span class="token punctuation">(</span>$color<span class="token punctuation">)</span>                                 \uFF1A\u83B7\u53D6\u989C\u8272\u4E2D\u7684\u7EA2\u8272\u5206\u91CF\uFF1B
<span class="token function">green</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                     \uFF1A\u83B7\u53D6\u989C\u8272\u4E2D\u7684\u7EFF\u8272\u5206\u91CF\uFF1B
<span class="token function">blue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                      \uFF1A\u83B7\u53D6\u989C\u8272\u4E2D\u7684\u84DD\u8272\u5206\u91CF\uFF1B
<span class="token function">Mix</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                       \uFF1A\u5C06\u4E24\u79CD\u989C\u8272\u6DF7\u5408\u5728\u4E00\u8D77\u3002

&lt;!-- \u5176\u4ED6\u4E09\u79CD\u8F83\u590D\u6742\u53C2\u6570 --&gt;
<span class="token function">adjust-color</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> [$red]<span class="token punctuation">,</span> [$green]<span class="token punctuation">,</span> [$blue]<span class="token punctuation">,</span> [$hue]<span class="token punctuation">,</span> [$saturation]<span class="token punctuation">,</span> [$lightness]<span class="token punctuation">,</span> [$alpha]<span class="token punctuation">)</span>
<span class="token function">scale-color</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> [$red]<span class="token punctuation">,</span> [$green]<span class="token punctuation">,</span> [$blue]<span class="token punctuation">,</span> [$saturation]<span class="token punctuation">,</span> [$lightness]<span class="token punctuation">,</span> [$alpha]<span class="token punctuation">)</span>
<span class="token function">change-color</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> [$red]<span class="token punctuation">,</span> [$green]<span class="token punctuation">,</span> [$blue]<span class="token punctuation">,</span> [$hue]<span class="token punctuation">,</span> [$saturation]<span class="token punctuation">,</span> [$lightness]<span class="token punctuation">,</span> [$alpha]<span class="token punctuation">)</span>
</code></pre></div><h3 id="_7-\u900F\u660E\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_7-\u900F\u660E\u51FD\u6570" aria-hidden="true">#</a> (7)\u900F\u660E\u51FD\u6570</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token function">alpha</span><span class="token punctuation">(</span>$color<span class="token punctuation">)</span>                               \uFF1A\u83B7\u5F97\u989C\u8272\u7684\u900F\u660E\u5EA6\uFF1B
<span class="token function">rgba</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> $alpha<span class="token punctuation">)</span>                        \uFF1A\u8BBE\u7F6E\u989C\u8272\u7684\u900F\u660E\u5EA6\uFF1B
<span class="token function">opacify</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> $amout<span class="token punctuation">)</span>                     \uFF1A\u4F7F\u989C\u8272\u53D8\u5F97\u4E0D\u900F\u660E\uFF1B
<span class="token function">fade-out</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> $amount<span class="token punctuation">)</span>                   \uFF1A\u4F7F\u989C\u8272\u66F4\u900F\u660E\uFF1B
<span class="token function">transparent</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> $amount<span class="token punctuation">)</span>                \uFF1A\u4F7F\u989C\u8272\u66F4\u900F\u660E\uFF1B
</code></pre></div><h3 id="_8-hsl-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_8-hsl-\u51FD\u6570" aria-hidden="true">#</a> (8)HSL \u51FD\u6570</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token function">hsl</span><span class="token punctuation">(</span>$hue<span class="token punctuation">,</span> $saturation<span class="token punctuation">,</span> $lightness<span class="token punctuation">)</span>          \uFF1A\u4ECE\u8272\u8C03\u3001\u9971\u548C\u5EA6\u3001\u4EAE\u5EA6\u521B\u5EFA\u4E00\u4E2A\u989C\u8272\uFF1B
<span class="token function">hsla</span><span class="token punctuation">(</span>$hue<span class="token punctuation">,</span> $saturation<span class="token punctuation">,</span> $lightness<span class="token punctuation">,</span> $alpha<span class="token punctuation">)</span> \uFF1A\u4ECE\u8272\u8C03\u3001\u9971\u548C\u5EA6\u3001\u4EAE\u5EA6\u3001\u900F\u660E\u5EA6\u521B\u5EFA\u4E00\u4E2A\u989C\u8272\uFF1B
<span class="token function">hue</span><span class="token punctuation">(</span>$color<span class="token punctuation">)</span>                                 \uFF1A\u83B7\u53D6\u989C\u8272\u7684hue\u503C<span class="token punctuation">;</span>
<span class="token function">saturation</span><span class="token punctuation">(</span>$color<span class="token punctuation">)</span>                          \uFF1A\u83B7\u53D6\u989C\u8272\u7684\u9971\u548C\u5EA6\u503C\uFF1B
<span class="token function">lightness</span><span class="token punctuation">(</span>$color<span class="token punctuation">)</span>                           \uFF1A\u83B7\u53D6\u989C\u8272\u7684\u4EAE\u5EA6\uFF1B
<span class="token function">adjust-hue</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> $degrees<span class="token punctuation">)</span>                \uFF1A\u6539\u53D8\u989C\u8272\u7684\u8272\u8C03\uFF1B
<span class="token function">lighten</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> $amount<span class="token punctuation">)</span>                    \uFF1A\u4F7F\u989C\u8272\u53D8\u4EAE\uFF1B
<span class="token function">darken</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> $amount<span class="token punctuation">)</span>                     \uFF1A\u4F7F\u989C\u8272\u53D8\u6697\uFF1B
<span class="token function">saturate</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> $amount<span class="token punctuation">)</span>                   \uFF1A\u589E\u52A0\u9971\u548C\u5EA6\uFF1B
<span class="token function">desaturate</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> $amount<span class="token punctuation">)</span>                 \uFF1A\u51CF\u5C0F\u9971\u548C\u5EA6\uFF1B
<span class="token function">grayscale</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                 \uFF1A\u5C06\u989C\u8272\u8F6C\u6210\u7070\u5EA6\uFF1B
<span class="token function">complement</span><span class="token punctuation">(</span>$color<span class="token punctuation">)</span>                          \uFF1A\u8FD4\u56DE\u989C\u8272\u7684\u4E92\u8865\u8272\uFF1B
<span class="token function">invert</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> [$weight]<span class="token punctuation">)</span>                   \uFF1A\u8303\u6E56\u989C\u8272\u7684\u5BF9\u7ACB\u8272
</code></pre></div><h3 id="_9-\u9009\u62E9\u5668\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_9-\u9009\u62E9\u5668\u51FD\u6570" aria-hidden="true">#</a> (9)\u9009\u62E9\u5668\u51FD\u6570</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token function">selector-nest</span><span class="token punctuation">(</span>$selectors\u2026<span class="token punctuation">)</span>                  \uFF1A\u5C06\u9009\u62E9\u5668\u5D4C\u5957\u5728\u53E6\u4E00\u4E2A\u4E0B\u9762\uFF1B
<span class="token function">selector-append</span><span class="token punctuation">(</span>$selectors\u2026<span class="token punctuation">)</span>                \uFF1A\u8FFD\u52A0\u9009\u62E9\u5668<span class="token punctuation">(</span>\u65E0\u7A7A\u683C<span class="token punctuation">)</span>\uFF1B
<span class="token function">selector-extend</span><span class="token punctuation">(</span>$selector<span class="token punctuation">,</span> $extendee<span class="token punctuation">,</span> $extender<span class="token punctuation">)</span>        \uFF1A\u5728 $selector\u4E2D\u7528$extender\u7EE7\u627F$extendee\uFF1B
<span class="token function">selector-replace</span><span class="token punctuation">(</span>$selector<span class="token punctuation">,</span> $original<span class="token punctuation">,</span> $replacement<span class="token punctuation">)</span>    \uFF1A\u5728$selector\u4E2D\u7528$replacement\u66FF\u6362$original\uFF1B
<span class="token function">selector-unify</span><span class="token punctuation">(</span>$selector1<span class="token punctuation">,</span> $selector2<span class="token punctuation">)</span>      \uFF1A\u7EDF\u4E00\u9009\u62E9\u5668\uFF1B
<span class="token function">is-superselector</span><span class="token punctuation">(</span>$super<span class="token punctuation">,</span> $sub<span class="token punctuation">)</span>              \uFF1A$super\u662F\u5426\u5339\u914D\u6240\u6709\u7684$sub\uFF1B
<span class="token function">simple-selectors</span><span class="token punctuation">(</span>$selector<span class="token punctuation">)</span>                 \uFF1A\u8FD4\u56DE\u5305\u542B\u590D\u5408\u9009\u62E9\u5668\u7684\u7B80\u5355\u9009\u62E9\u5668\uFF1B
<span class="token function">selector-parse</span><span class="token punctuation">(</span>$selector<span class="token punctuation">)</span>                   \uFF1A\u5C06\u9009\u62E9\u5668\u89E3\u6790\u4E3A\uFF06\u8FD4\u56DE\u7684\u683C\u5F0F\u3002
</code></pre></div><h3 id="_10-\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#_10-\u5176\u4ED6" aria-hidden="true">#</a> (10)\u5176\u4ED6</h3><div class="language-css ext-css"><pre class="language-css"><code><span class="token function">if</span><span class="token punctuation">(</span>$condition<span class="token punctuation">,</span> $if-true<span class="token punctuation">,</span> $if-false<span class="token punctuation">)</span>         \uFF1A\u6839\u636E\u6761\u4EF6$condition\u8FD4\u56DEtrue\u548Cfalse\uFF1B
<span class="token function">unique-id</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                 \uFF1A\u8FD4\u56DEcss\u552F\u4E00\u6807\u8BC6\u3002
</code></pre></div><h2 id="_10\u3001\u81EA\u5B9A\u4E49\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_10\u3001\u81EA\u5B9A\u4E49\u51FD\u6570" aria-hidden="true">#</a> 10\u3001\u81EA\u5B9A\u4E49\u51FD\u6570</h2><div class="language-css ext-css"><pre class="language-css"><code>//\u9879\u76EE\u4E2D\u7528\u5230\u7684\u8BA1\u7B97rem\u503C\u5F97\u51FD\u6570
<span class="token atrule"><span class="token rule">@function</span> <span class="token function">func</span><span class="token punctuation">(</span>$t<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
		<span class="token atrule"><span class="token rule">@if</span> <span class="token punctuation">(</span><span class="token function">unit</span><span class="token punctuation">(</span>$t<span class="token punctuation">)</span>==1<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
				<span class="token atrule"><span class="token rule">@return</span> $t*10<span class="token punctuation">;</span></span>
		<span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span> if <span class="token punctuation">(</span><span class="token function">unit</span><span class="token punctuation">(</span>$t<span class="token punctuation">)</span>==2<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
				<span class="token atrule"><span class="token rule">@return</span> $t*100<span class="token punctuation">;</span></span>
		<span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span></span> <span class="token punctuation">{</span>
				<span class="token atrule"><span class="token rule">@return</span> $t<span class="token punctuation">;</span></span>
		<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

&lt;!-- \u4F7F\u7528 --&gt;
<span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">func</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="_11\u3001\u63A7\u5236\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#_11\u3001\u63A7\u5236\u6307\u4EE4" aria-hidden="true">#</a> 11\u3001\u63A7\u5236\u6307\u4EE4</h2><h3 id="_1-\u63A7\u5236\u6307\u4EE4-\u2014\u2014-if-else" tabindex="-1"><a class="header-anchor" href="#_1-\u63A7\u5236\u6307\u4EE4-\u2014\u2014-if-else" aria-hidden="true">#</a> (1)\u63A7\u5236\u6307\u4EE4 \u2014\u2014 @if @else</h3><div class="language-css ext-css"><pre class="language-css"><code>$<span class="token property">type</span><span class="token punctuation">:</span> y<span class="token punctuation">;</span>
<span class="token atrule"><span class="token rule">@if</span> $type == x</span><span class="token punctuation">{</span>
		<span class="token property">color</span><span class="token punctuation">:</span> red
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@else</span> if $type == y</span><span class="token punctuation">{</span>
		<span class="token property">color</span><span class="token punctuation">:</span> yellow
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@else</span></span><span class="token punctuation">{</span>
		<span class="token property">color</span><span class="token punctuation">:</span> green
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2-\u63A7\u5236\u6307\u4EE4-\u2014\u2014-for" tabindex="-1"><a class="header-anchor" href="#_2-\u63A7\u5236\u6307\u4EE4-\u2014\u2014-for" aria-hidden="true">#</a> (2)\u63A7\u5236\u6307\u4EE4 \u2014\u2014 @for</h3><div class="language-css ext-css"><pre class="language-css"><code>// <span class="token property">through</span> <span class="token punctuation">:</span> [1<span class="token punctuation">,</span>3]
<span class="token atrule"><span class="token rule">@for</span> $i from 1 through 3</span> <span class="token punctuation">{</span>
		<span class="token selector">.item-#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span>
				<span class="token property">width</span><span class="token punctuation">:</span> 2em * $i<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

// <span class="token property">to</span> <span class="token punctuation">:</span> [1<span class="token punctuation">,</span>3<span class="token punctuation">)</span>
<span class="token atrule"><span class="token rule">@for</span> $i from 1 through 3</span> <span class="token punctuation">{</span>
		<span class="token selector">.item-#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span>
				<span class="token property">width</span><span class="token punctuation">:</span> 2em * $i<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_3-\u63A7\u5236\u6307\u4EE4-\u2014\u2014-each" tabindex="-1"><a class="header-anchor" href="#_3-\u63A7\u5236\u6307\u4EE4-\u2014\u2014-each" aria-hidden="true">#</a> (3)\u63A7\u5236\u6307\u4EE4 \u2014\u2014 @each</h3><div class="language-css ext-css"><pre class="language-css"><code>&lt;!-- \u5E94\u7528\u4E00\uFF1A\u6570\u7EC4 --&gt;
<span class="token atrule"><span class="token rule">@each</span> $animal in puma<span class="token punctuation">,</span> sea-slug<span class="token punctuation">,</span> egret<span class="token punctuation">,</span> salamander</span> <span class="token punctuation">{</span>
		<span class="token selector">.#</span><span class="token punctuation">{</span>$animal<span class="token punctuation">}</span><span class="token selector">-icon</span> <span class="token punctuation">{</span>
				<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;/images/#{$animal}.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

&lt;!-- \u5E94\u7528\u4E8C\uFF1A\u591A\u4E2A\u6570\u7EC4 --&gt;
<span class="token atrule"><span class="token rule">@each</span> $animal<span class="token punctuation">,</span> $color<span class="token punctuation">,</span> $cursor in <span class="token punctuation">(</span>name1<span class="token punctuation">,</span> black<span class="token punctuation">,</span> default<span class="token punctuation">)</span><span class="token punctuation">,</span>
																	<span class="token punctuation">(</span>name2<span class="token punctuation">,</span> blue<span class="token punctuation">,</span>  pointer<span class="token punctuation">)</span><span class="token punctuation">,</span>
																	<span class="token punctuation">(</span>name3<span class="token punctuation">,</span> white<span class="token punctuation">,</span> move<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
		<span class="token selector">.#</span><span class="token punctuation">{</span>$animal<span class="token punctuation">}</span><span class="token selector">-icon</span> <span class="token punctuation">{</span>
				<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;/images/#{$animal}.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
				<span class="token property">border</span><span class="token punctuation">:</span> 2px solid $color<span class="token punctuation">;</span>
				<span class="token property">cursor</span><span class="token punctuation">:</span> $cursor<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

&lt;!-- \u5E94\u7528\u4E09\uFF1A\u5BF9\u8C61 --&gt;
<span class="token atrule"><span class="token rule">@each</span> $header<span class="token punctuation">,</span> $size in <span class="token punctuation">(</span><span class="token property">h1</span><span class="token punctuation">:</span> 2em<span class="token punctuation">,</span> <span class="token property">h2</span><span class="token punctuation">:</span> 1.5em<span class="token punctuation">,</span> <span class="token property">h3</span><span class="token punctuation">:</span> 1.2em<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
		<span class="token selector">#</span><span class="token punctuation">{</span>$header<span class="token punctuation">}</span> <span class="token punctuation">{</span>
				<span class="token property">font-size</span><span class="token punctuation">:</span> $size<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_4-\u63A7\u5236\u6307\u4EE4-\u2014\u2014-while" tabindex="-1"><a class="header-anchor" href="#_4-\u63A7\u5236\u6307\u4EE4-\u2014\u2014-while" aria-hidden="true">#</a> (4)\u63A7\u5236\u6307\u4EE4 \u2014\u2014 @while</h3><div class="language-css ext-css"><pre class="language-css"><code>$<span class="token property">i</span><span class="token punctuation">:</span> 6<span class="token punctuation">;</span>
<span class="token atrule"><span class="token rule">@while</span> $i &gt; 0</span> <span class="token punctuation">{</span>
		<span class="token selector">.item-#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token property">width</span><span class="token punctuation">:</span> 2em * $i<span class="token punctuation">;</span> <span class="token punctuation">}</span>
		$<span class="token property">i</span><span class="token punctuation">:</span> $i - 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_12\u3001\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_12\u3001\u89C4\u5219" aria-hidden="true">#</a> 12\u3001\u89C4\u5219</h2><div class="language-css ext-css"><pre class="language-css"><code>@import
@media
@extend
@at-root \u8DF3\u51FA\u5D4C\u5957
@debug
@warn
@error
</code></pre></div><h2 id="_13\u3001\u5BFC\u5165-scss-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_13\u3001\u5BFC\u5165-scss-\u6587\u4EF6" aria-hidden="true">#</a> 13\u3001\u5BFC\u5165 .scss \u6587\u4EF6</h2><div class="language-css ext-css"><pre class="language-css"><code>&lt;!-- \u5BFC\u5165\u5E76\u7F16\u8BD1 --&gt;
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;base.scss&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;header.scss&quot;</span><span class="token punctuation">;</span></span>

&lt;!-- \u5BFC\u5165\u4F46\u4E0D\u7F16\u8BD1 --&gt;
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;_base.scss&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;_header.scss&quot;</span><span class="token punctuation">;</span></span>

<span class="token selector">&lt;!-- \u5D4C\u5957\u5230\u6837\u5F0F\u5185 --&gt;
#main</span> <span class="token punctuation">{</span>
		<span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;example.scss&quot;</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_14\u3001\u56DB\u79CD\u8F93\u51FA\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#_14\u3001\u56DB\u79CD\u8F93\u51FA\u683C\u5F0F" aria-hidden="true">#</a> 14\u3001\u56DB\u79CD\u8F93\u51FA\u683C\u5F0F</h2><div class="language-css ext-css"><pre class="language-css"><code><span class="token punctuation">:</span>nested      <span class="token property">\u5D4C\u5957</span>
<span class="token punctuation">:</span>expanded    <span class="token property">\u9009\u62E9\u5668\u4E0D\u7F29\u8FDB</span>
<span class="token punctuation">:</span>compact     <span class="token property">\u6BCF\u6761CSS\u89C4\u5219\u5360\u4E00\u884C</span>
<span class="token punctuation">:</span>compressed  \u538B\u7F29
</code></pre></div>`,59),o=[c];function e(u,l){return s(),a("div",null,o)}const k=n(p,[["render",e],["__file","16-sass.html.vue"]]);export{k as default};

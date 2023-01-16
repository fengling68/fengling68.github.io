import{_ as n,o as s,c as a,f as t}from"./app.40d45622.js";const p={},c=t(`<h1 id="sass" tabindex="-1"><a class="header-anchor" href="#sass" aria-hidden="true">#</a> sass</h1><h2 id="_0、sass-和-scss-区别" tabindex="-1"><a class="header-anchor" href="#_0、sass-和-scss-区别" aria-hidden="true">#</a> 0、sass 和 scss 区别</h2><p>sass 不允许出现 {} ， scss 可以像 css 一样使用 {}。</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">//sass书写方式
body
	font-size: 12px
	background: #000

//scss书写方式
body</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_1、定义变量" tabindex="-1"><a class="header-anchor" href="#_1、定义变量" aria-hidden="true">#</a> 1、定义变量 <code>$</code></h2><div class="language-css" data-ext="css"><pre class="language-css"><code>$<span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
</code></pre></div><h2 id="_2、使用变量-或" tabindex="-1"><a class="header-anchor" href="#_2、使用变量-或" aria-hidden="true">#</a> 2、使用变量 <code>#</code>或<code>$</code></h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">// 变量做属性名
#</span><span class="token punctuation">{</span>$float<span class="token punctuation">}</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>

// 变量做属性值
<span class="token property">float</span><span class="token punctuation">:</span> $left<span class="token punctuation">;</span>
</code></pre></div><h2 id="_3、选择器嵌套和属性嵌套" tabindex="-1"><a class="header-anchor" href="#_3、选择器嵌套和属性嵌套" aria-hidden="true">#</a> 3、选择器嵌套和属性嵌套</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token selector">font:</span> <span class="token punctuation">{</span>
      <span class="token property">weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
      <span class="token property">size</span><span class="token punctuation">:</span> 23px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_4、父选择器" tabindex="-1"><a class="header-anchor" href="#_4、父选择器" aria-hidden="true">#</a> 4、父选择器 <code>&amp;</code></h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
	<span class="token selector">height:100px
	&amp;:after</span><span class="token punctuation">{</span>
		<span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
		<span class="token property">background</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
		<span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">&amp;-child</span><span class="token punctuation">{</span>
		// 编译后为 div-child
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_5、定义重用代码块-mixin" tabindex="-1"><a class="header-anchor" href="#_5、定义重用代码块-mixin" aria-hidden="true">#</a> 5、定义重用代码块 <code>@mixin</code></h2><div class="language-css" data-ext="css"><pre class="language-css"><code>// 居中显示
<span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">center</span><span class="token punctuation">(</span>$t<span class="token punctuation">,</span> $b<span class="token punctuation">,</span> $l<span class="token punctuation">,</span> $r<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
	<span class="token property">top</span><span class="token punctuation">:</span> <span class="token function">rpx</span><span class="token punctuation">(</span>$t<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">bottom</span><span class="token punctuation">:</span> <span class="token function">rpx</span><span class="token punctuation">(</span>$b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">left</span><span class="token punctuation">:</span> <span class="token function">rpx</span><span class="token punctuation">(</span>$l<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">right</span><span class="token punctuation">:</span> <span class="token function">rpx</span><span class="token punctuation">(</span>$r<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@include</span> <span class="token function">center</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
</code></pre></div><h2 id="_6、调用重用代码块-include" tabindex="-1"><a class="header-anchor" href="#_6、调用重用代码块-include" aria-hidden="true">#</a> 6、调用重用代码块 <code>@include</code></h2><div class="language-text" data-ext="text"><pre class="language-text"><code>.box{
	@include bg_dom(&#39;../img.png&#39;,30%,40%)
}
</code></pre></div><h2 id="_7、选择器继承-extend" tabindex="-1"><a class="header-anchor" href="#_7、选择器继承-extend" aria-hidden="true">#</a> 7、选择器继承 <code>@extend</code></h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.father</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> #fdd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.son</span> <span class="token punctuation">{</span>
	<span class="token atrule"><span class="token rule">@extend</span> .father<span class="token punctuation">;</span></span>
	<span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_8、数据类型运算" tabindex="-1"><a class="header-anchor" href="#_8、数据类型运算" aria-hidden="true">#</a> 8、数据类型运算</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">所有: == , !=
数字: +, -, *, /, %, &lt;, &gt;, &lt;=, &gt;=
字符: + #</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token property">颜色</span><span class="token punctuation">:</span> +<span class="token punctuation">,</span> *
<span class="token property">布尔</span><span class="token punctuation">:</span> and<span class="token punctuation">,</span> or<span class="token punctuation">,</span> not
<span class="token property">空值</span><span class="token punctuation">:</span>
<span class="token property">数组</span><span class="token punctuation">:</span>
<span class="token property">maps</span><span class="token punctuation">:</span>
</code></pre></div><h2 id="_9、内置函数" tabindex="-1"><a class="header-anchor" href="#_9、内置函数" aria-hidden="true">#</a> 9、内置函数</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token function">image-width</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                   获取图片的宽度
<span class="token function">image-height</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                  获取图片的高度
<span class="token function">unit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                          获取一个值所使用的单位
<span class="token function">lighten</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span>10%<span class="token punctuation">)</span>                使颜色变淡
<span class="token function">darken</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span>20%<span class="token punctuation">)</span>                 使颜色变深
inline_<span class="token function">image</span><span class="token punctuation">(</span><span class="token string">&#39;../img.png&#39;</span><span class="token punctuation">)</span>      将图片转换成base64格式
// ...
</code></pre></div><h3 id="_1-字符串函数" tabindex="-1"><a class="header-anchor" href="#_1-字符串函数" aria-hidden="true">#</a> (1)字符串函数</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token function">unquote</span><span class="token punctuation">(</span>$string<span class="token punctuation">)</span>                            ：删除字符串中的引号；
<span class="token function">quote</span><span class="token punctuation">(</span>$string<span class="token punctuation">)</span>                              ：给字符串添加引号；
<span class="token function">str-length</span><span class="token punctuation">(</span>$string<span class="token punctuation">)</span>                         <span class="token punctuation">:</span> 返回字符串长度；
<span class="token function">str-insert</span><span class="token punctuation">(</span>$string<span class="token punctuation">,</span> $insert<span class="token punctuation">,</span> $index<span class="token punctuation">)</span>        <span class="token punctuation">:</span> 在$string中的第$insert中插入字符串$insert；
<span class="token function">str-index</span><span class="token punctuation">(</span>$string<span class="token punctuation">,</span> $substring<span class="token punctuation">)</span>              <span class="token punctuation">:</span> 查找字符串$substring并返回其下标；
<span class="token function">str-slice</span><span class="token punctuation">(</span>$string<span class="token punctuation">,</span> $start-at<span class="token punctuation">,</span> [$end-at]<span class="token punctuation">)</span>    <span class="token punctuation">:</span> 截取字符串（开始位置、结束位置）；
<span class="token function">to-upper-case</span><span class="token punctuation">(</span>$string<span class="token punctuation">)</span>                      <span class="token punctuation">:</span> 转为大写字母；
<span class="token function">to-lower-case</span><span class="token punctuation">(</span>$string<span class="token punctuation">)</span>                      <span class="token punctuation">:</span> 转为小写字母。
</code></pre></div><h3 id="_2-数字函数" tabindex="-1"><a class="header-anchor" href="#_2-数字函数" aria-hidden="true">#</a> (2)数字函数</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token function">percentage</span><span class="token punctuation">(</span>$value<span class="token punctuation">)</span>                          ：将一个不带单位的数转换成百分比值；
<span class="token function">round</span><span class="token punctuation">(</span>$value<span class="token punctuation">)</span>                               ：将数值四舍五入，转换成一个最接近的整数；
<span class="token function">ceil</span><span class="token punctuation">(</span>$value<span class="token punctuation">)</span>                                ：将大于自己的小数转换成下一位整数；
<span class="token function">floor</span><span class="token punctuation">(</span>$value<span class="token punctuation">)</span>                               ：将一个数去除他的小数部分；
<span class="token function">abs</span><span class="token punctuation">(</span>$value<span class="token punctuation">)</span>                                 ：返回一个数的绝对值；
<span class="token function">min</span><span class="token punctuation">(</span>$numbers…<span class="token punctuation">)</span>                              ：找出几个数值之间的最小值；
<span class="token function">max</span><span class="token punctuation">(</span>$numbers…<span class="token punctuation">)</span>                              ：找出几个数值之间的最大值；
<span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                    ：生成一个随机数。
</code></pre></div><h3 id="_3-list-函数" tabindex="-1"><a class="header-anchor" href="#_3-list-函数" aria-hidden="true">#</a> (3)list 函数</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token function">length</span><span class="token punctuation">(</span>$list<span class="token punctuation">)</span>                               ：返回一个列表的长度值；
<span class="token function">nth</span><span class="token punctuation">(</span>$list<span class="token punctuation">,</span> $n<span class="token punctuation">)</span>                              ：返回一个列表中指定的某个标签值
<span class="token function">join</span><span class="token punctuation">(</span>$list1<span class="token punctuation">,</span> $list2<span class="token punctuation">,</span> [$separator]<span class="token punctuation">)</span>          ：将两个列给连接在一起，变成一个列表；
<span class="token function">append</span><span class="token punctuation">(</span>$list1<span class="token punctuation">,</span> $val<span class="token punctuation">,</span> [$separator]<span class="token punctuation">)</span>          ：将某个值放在列表的最后；
<span class="token function">zip</span><span class="token punctuation">(</span>$lists…<span class="token punctuation">)</span>                                ：将几个列表结合成一个多维的列表；
<span class="token function">index</span><span class="token punctuation">(</span>$list<span class="token punctuation">,</span> $value<span class="token punctuation">)</span>                        ：返回一个值在列表中的位置值；
<span class="token function">list-separator</span><span class="token punctuation">(</span>$list<span class="token punctuation">)</span>                       <span class="token punctuation">:</span> 是否有分隔符；
<span class="token function">is-bracketed</span><span class="token punctuation">(</span>$list<span class="token punctuation">)</span>                         <span class="token punctuation">:</span> 是否有方括号[]。
</code></pre></div><h3 id="_4-map-函数" tabindex="-1"><a class="header-anchor" href="#_4-map-函数" aria-hidden="true">#</a> (4)map 函数</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token function">map-get</span><span class="token punctuation">(</span>$map<span class="token punctuation">,</span>$key<span class="token punctuation">)</span>                          ：根据$key返回对应的map值；
<span class="token function">map-merge</span><span class="token punctuation">(</span>$map1<span class="token punctuation">,</span>$map2<span class="token punctuation">)</span>                      ：合并map1和map2；
<span class="token function">map-remove</span><span class="token punctuation">(</span>$map<span class="token punctuation">,</span>$key<span class="token punctuation">)</span>                       ：返回删除$key值后的新map；
<span class="token function">map-keys</span><span class="token punctuation">(</span>$map<span class="token punctuation">)</span>                              ：返回map中的所有key；
<span class="token function">map-values</span><span class="token punctuation">(</span>$map<span class="token punctuation">)</span>                            ：返回map中的所有value；
<span class="token function">map-has-key</span><span class="token punctuation">(</span>$map<span class="token punctuation">,</span>$key<span class="token punctuation">)</span>                      ：map中是否有改key；
<span class="token function">keywords</span><span class="token punctuation">(</span>$args<span class="token punctuation">)</span>                             ： Returns the keywords passed to a function that takes variable arguments.
</code></pre></div><h3 id="_5-introspection-函数" tabindex="-1"><a class="header-anchor" href="#_5-introspection-函数" aria-hidden="true">#</a> (5)Introspection 函数</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token function">feature-exists</span><span class="token punctuation">(</span>$feature<span class="token punctuation">)</span>                    ：某属性是否在当前sass中；
<span class="token function">variable-exists</span><span class="token punctuation">(</span>$name<span class="token punctuation">)</span>                      ：某变量是否在当前sass中；
<span class="token function">global-variable-exists</span><span class="token punctuation">(</span>$name<span class="token punctuation">)</span>               ：某变量是否在全局环境中；
<span class="token function">function-exists</span><span class="token punctuation">(</span>$name<span class="token punctuation">)</span>                      ：某函数是否存在；
<span class="token function">mixin-exists</span><span class="token punctuation">(</span>$name<span class="token punctuation">)</span>                         ：某mixin是否存在；
<span class="token function">content-exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                            ：当前的mixin是否通过了一个内容块；
<span class="token function">type-of</span><span class="token punctuation">(</span>$value<span class="token punctuation">)</span>                             ：返回一个值的类型；
<span class="token function">unit</span><span class="token punctuation">(</span>$number<span class="token punctuation">)</span>                               ：返回一个值的单位；
<span class="token function">unitless</span><span class="token punctuation">(</span>$number<span class="token punctuation">)</span>                           ：判断一个值是否有带位；
<span class="token function">comparable</span><span class="token punctuation">(</span>$number-1<span class="token punctuation">,</span> $number-2<span class="token punctuation">)</span>            ：判断两个值是否可以做加、减和合并；
<span class="token function">call</span><span class="token punctuation">(</span>$function<span class="token punctuation">,</span> $args…<span class="token punctuation">)</span>                     ：动态绑定get-function返回的函数；
<span class="token function">get-function</span><span class="token punctuation">(</span>$name<span class="token punctuation">,</span> $<span class="token property">css</span><span class="token punctuation">:</span> false<span class="token punctuation">)</span>            ：查找给定名称的函数；
<span class="token function">inspect</span><span class="token punctuation">(</span>$value<span class="token punctuation">)</span>                             <span class="token punctuation">:</span> Returns the string representation of a value as it would be represented in Sass.
</code></pre></div><h3 id="_6-颜色函数" tabindex="-1"><a class="header-anchor" href="#_6-颜色函数" aria-hidden="true">#</a> (6)颜色函数</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token function">rgb</span><span class="token punctuation">(</span>$red<span class="token punctuation">,</span> $green<span class="token punctuation">,</span> $blue<span class="token punctuation">)</span>                    ：创建颜色；
<span class="token function">rgba</span><span class="token punctuation">(</span>$red<span class="token punctuation">,</span> $green<span class="token punctuation">,</span> $blue<span class="token punctuation">,</span> $alpha<span class="token punctuation">)</span>           ：创建颜色包含透明度；
<span class="token function">red</span><span class="token punctuation">(</span>$color<span class="token punctuation">)</span>                                 ：获取颜色中的红色分量；
<span class="token function">green</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                     ：获取颜色中的绿色分量；
<span class="token function">blue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                      ：获取颜色中的蓝色分量；
<span class="token function">Mix</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                       ：将两种颜色混合在一起。

&lt;!-- 其他三种较复杂参数 --&gt;
<span class="token function">adjust-color</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> [$red]<span class="token punctuation">,</span> [$green]<span class="token punctuation">,</span> [$blue]<span class="token punctuation">,</span> [$hue]<span class="token punctuation">,</span> [$saturation]<span class="token punctuation">,</span> [$lightness]<span class="token punctuation">,</span> [$alpha]<span class="token punctuation">)</span>
<span class="token function">scale-color</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> [$red]<span class="token punctuation">,</span> [$green]<span class="token punctuation">,</span> [$blue]<span class="token punctuation">,</span> [$saturation]<span class="token punctuation">,</span> [$lightness]<span class="token punctuation">,</span> [$alpha]<span class="token punctuation">)</span>
<span class="token function">change-color</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> [$red]<span class="token punctuation">,</span> [$green]<span class="token punctuation">,</span> [$blue]<span class="token punctuation">,</span> [$hue]<span class="token punctuation">,</span> [$saturation]<span class="token punctuation">,</span> [$lightness]<span class="token punctuation">,</span> [$alpha]<span class="token punctuation">)</span>
</code></pre></div><h3 id="_7-透明函数" tabindex="-1"><a class="header-anchor" href="#_7-透明函数" aria-hidden="true">#</a> (7)透明函数</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token function">alpha</span><span class="token punctuation">(</span>$color<span class="token punctuation">)</span>                               ：获得颜色的透明度；
<span class="token function">rgba</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> $alpha<span class="token punctuation">)</span>                        ：设置颜色的透明度；
<span class="token function">opacify</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> $amout<span class="token punctuation">)</span>                     ：使颜色变得不透明；
<span class="token function">fade-out</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> $amount<span class="token punctuation">)</span>                   ：使颜色更透明；
<span class="token function">transparent</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> $amount<span class="token punctuation">)</span>                ：使颜色更透明；
</code></pre></div><h3 id="_8-hsl-函数" tabindex="-1"><a class="header-anchor" href="#_8-hsl-函数" aria-hidden="true">#</a> (8)HSL 函数</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token function">hsl</span><span class="token punctuation">(</span>$hue<span class="token punctuation">,</span> $saturation<span class="token punctuation">,</span> $lightness<span class="token punctuation">)</span>          ：从色调、饱和度、亮度创建一个颜色；
<span class="token function">hsla</span><span class="token punctuation">(</span>$hue<span class="token punctuation">,</span> $saturation<span class="token punctuation">,</span> $lightness<span class="token punctuation">,</span> $alpha<span class="token punctuation">)</span> ：从色调、饱和度、亮度、透明度创建一个颜色；
<span class="token function">hue</span><span class="token punctuation">(</span>$color<span class="token punctuation">)</span>                                 ：获取颜色的hue值<span class="token punctuation">;</span>
<span class="token function">saturation</span><span class="token punctuation">(</span>$color<span class="token punctuation">)</span>                          ：获取颜色的饱和度值；
<span class="token function">lightness</span><span class="token punctuation">(</span>$color<span class="token punctuation">)</span>                           ：获取颜色的亮度；
<span class="token function">adjust-hue</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> $degrees<span class="token punctuation">)</span>                ：改变颜色的色调；
<span class="token function">lighten</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> $amount<span class="token punctuation">)</span>                    ：使颜色变亮；
<span class="token function">darken</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> $amount<span class="token punctuation">)</span>                     ：使颜色变暗；
<span class="token function">saturate</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> $amount<span class="token punctuation">)</span>                   ：增加饱和度；
<span class="token function">desaturate</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> $amount<span class="token punctuation">)</span>                 ：减小饱和度；
<span class="token function">grayscale</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                 ：将颜色转成灰度；
<span class="token function">complement</span><span class="token punctuation">(</span>$color<span class="token punctuation">)</span>                          ：返回颜色的互补色；
<span class="token function">invert</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> [$weight]<span class="token punctuation">)</span>                   ：范湖颜色的对立色
</code></pre></div><h3 id="_9-选择器函数" tabindex="-1"><a class="header-anchor" href="#_9-选择器函数" aria-hidden="true">#</a> (9)选择器函数</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token function">selector-nest</span><span class="token punctuation">(</span>$selectors…<span class="token punctuation">)</span>                  ：将选择器嵌套在另一个下面；
<span class="token function">selector-append</span><span class="token punctuation">(</span>$selectors…<span class="token punctuation">)</span>                ：追加选择器<span class="token punctuation">(</span>无空格<span class="token punctuation">)</span>；
<span class="token function">selector-extend</span><span class="token punctuation">(</span>$selector<span class="token punctuation">,</span> $extendee<span class="token punctuation">,</span> $extender<span class="token punctuation">)</span>        ：在 $selector中用$extender继承$extendee；
<span class="token function">selector-replace</span><span class="token punctuation">(</span>$selector<span class="token punctuation">,</span> $original<span class="token punctuation">,</span> $replacement<span class="token punctuation">)</span>    ：在$selector中用$replacement替换$original；
<span class="token function">selector-unify</span><span class="token punctuation">(</span>$selector1<span class="token punctuation">,</span> $selector2<span class="token punctuation">)</span>      ：统一选择器；
<span class="token function">is-superselector</span><span class="token punctuation">(</span>$super<span class="token punctuation">,</span> $sub<span class="token punctuation">)</span>              ：$super是否匹配所有的$sub；
<span class="token function">simple-selectors</span><span class="token punctuation">(</span>$selector<span class="token punctuation">)</span>                 ：返回包含复合选择器的简单选择器；
<span class="token function">selector-parse</span><span class="token punctuation">(</span>$selector<span class="token punctuation">)</span>                   ：将选择器解析为＆返回的格式。
</code></pre></div><h3 id="_10-其他" tabindex="-1"><a class="header-anchor" href="#_10-其他" aria-hidden="true">#</a> (10)其他</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token function">if</span><span class="token punctuation">(</span>$condition<span class="token punctuation">,</span> $if-true<span class="token punctuation">,</span> $if-false<span class="token punctuation">)</span>         ：根据条件$condition返回true和false；
<span class="token function">unique-id</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                 ：返回css唯一标识。
</code></pre></div><h2 id="_10、自定义函数" tabindex="-1"><a class="header-anchor" href="#_10、自定义函数" aria-hidden="true">#</a> 10、自定义函数</h2><div class="language-css" data-ext="css"><pre class="language-css"><code>//项目中用到的计算rem值得函数
<span class="token atrule"><span class="token rule">@function</span> <span class="token function">func</span><span class="token punctuation">(</span>$t<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
		<span class="token atrule"><span class="token rule">@if</span> <span class="token punctuation">(</span><span class="token function">unit</span><span class="token punctuation">(</span>$t<span class="token punctuation">)</span>==1<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
				<span class="token atrule"><span class="token rule">@return</span> $t*10<span class="token punctuation">;</span></span>
		<span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span> if <span class="token punctuation">(</span><span class="token function">unit</span><span class="token punctuation">(</span>$t<span class="token punctuation">)</span>==2<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
				<span class="token atrule"><span class="token rule">@return</span> $t*100<span class="token punctuation">;</span></span>
		<span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span></span> <span class="token punctuation">{</span>
				<span class="token atrule"><span class="token rule">@return</span> $t<span class="token punctuation">;</span></span>
		<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

&lt;!-- 使用 --&gt;
<span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">func</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="_11、控制指令" tabindex="-1"><a class="header-anchor" href="#_11、控制指令" aria-hidden="true">#</a> 11、控制指令</h2><h3 id="_1-控制指令-——-if-else" tabindex="-1"><a class="header-anchor" href="#_1-控制指令-——-if-else" aria-hidden="true">#</a> (1)控制指令 —— @if @else</h3><div class="language-css" data-ext="css"><pre class="language-css"><code>$<span class="token property">type</span><span class="token punctuation">:</span> y<span class="token punctuation">;</span>
<span class="token atrule"><span class="token rule">@if</span> $type == x</span><span class="token punctuation">{</span>
		<span class="token property">color</span><span class="token punctuation">:</span> red
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@else</span> if $type == y</span><span class="token punctuation">{</span>
		<span class="token property">color</span><span class="token punctuation">:</span> yellow
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@else</span></span><span class="token punctuation">{</span>
		<span class="token property">color</span><span class="token punctuation">:</span> green
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2-控制指令-——-for" tabindex="-1"><a class="header-anchor" href="#_2-控制指令-——-for" aria-hidden="true">#</a> (2)控制指令 —— @for</h3><div class="language-css" data-ext="css"><pre class="language-css"><code>// <span class="token property">through</span> <span class="token punctuation">:</span> [1<span class="token punctuation">,</span>3]
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
</code></pre></div><h3 id="_3-控制指令-——-each" tabindex="-1"><a class="header-anchor" href="#_3-控制指令-——-each" aria-hidden="true">#</a> (3)控制指令 —— @each</h3><div class="language-css" data-ext="css"><pre class="language-css"><code>&lt;!-- 应用一：数组 --&gt;
<span class="token atrule"><span class="token rule">@each</span> $animal in puma<span class="token punctuation">,</span> sea-slug<span class="token punctuation">,</span> egret<span class="token punctuation">,</span> salamander</span> <span class="token punctuation">{</span>
		<span class="token selector">.#</span><span class="token punctuation">{</span>$animal<span class="token punctuation">}</span><span class="token selector">-icon</span> <span class="token punctuation">{</span>
				<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;/images/#{$animal}.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

&lt;!-- 应用二：多个数组 --&gt;
<span class="token atrule"><span class="token rule">@each</span> $animal<span class="token punctuation">,</span> $color<span class="token punctuation">,</span> $cursor in <span class="token punctuation">(</span>name1<span class="token punctuation">,</span> black<span class="token punctuation">,</span> default<span class="token punctuation">)</span><span class="token punctuation">,</span>
																	<span class="token punctuation">(</span>name2<span class="token punctuation">,</span> blue<span class="token punctuation">,</span>  pointer<span class="token punctuation">)</span><span class="token punctuation">,</span>
																	<span class="token punctuation">(</span>name3<span class="token punctuation">,</span> white<span class="token punctuation">,</span> move<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
		<span class="token selector">.#</span><span class="token punctuation">{</span>$animal<span class="token punctuation">}</span><span class="token selector">-icon</span> <span class="token punctuation">{</span>
				<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;/images/#{$animal}.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
				<span class="token property">border</span><span class="token punctuation">:</span> 2px solid $color<span class="token punctuation">;</span>
				<span class="token property">cursor</span><span class="token punctuation">:</span> $cursor<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

&lt;!-- 应用三：对象 --&gt;
<span class="token atrule"><span class="token rule">@each</span> $header<span class="token punctuation">,</span> $size in <span class="token punctuation">(</span><span class="token property">h1</span><span class="token punctuation">:</span> 2em<span class="token punctuation">,</span> <span class="token property">h2</span><span class="token punctuation">:</span> 1.5em<span class="token punctuation">,</span> <span class="token property">h3</span><span class="token punctuation">:</span> 1.2em<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
		<span class="token selector">#</span><span class="token punctuation">{</span>$header<span class="token punctuation">}</span> <span class="token punctuation">{</span>
				<span class="token property">font-size</span><span class="token punctuation">:</span> $size<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_4-控制指令-——-while" tabindex="-1"><a class="header-anchor" href="#_4-控制指令-——-while" aria-hidden="true">#</a> (4)控制指令 —— @while</h3><div class="language-css" data-ext="css"><pre class="language-css"><code>$<span class="token property">i</span><span class="token punctuation">:</span> 6<span class="token punctuation">;</span>
<span class="token atrule"><span class="token rule">@while</span> $i &gt; 0</span> <span class="token punctuation">{</span>
		<span class="token selector">.item-#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token property">width</span><span class="token punctuation">:</span> 2em * $i<span class="token punctuation">;</span> <span class="token punctuation">}</span>
		$<span class="token property">i</span><span class="token punctuation">:</span> $i - 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_12、规则" tabindex="-1"><a class="header-anchor" href="#_12、规则" aria-hidden="true">#</a> 12、规则</h2><div class="language-css" data-ext="css"><pre class="language-css"><code>@import
@media
@extend
@at-root 跳出嵌套
@debug
@warn
@error
</code></pre></div><h2 id="_13、导入-scss-文件" tabindex="-1"><a class="header-anchor" href="#_13、导入-scss-文件" aria-hidden="true">#</a> 13、导入 .scss 文件</h2><div class="language-css" data-ext="css"><pre class="language-css"><code>&lt;!-- 导入并编译 --&gt;
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;base.scss&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;header.scss&quot;</span><span class="token punctuation">;</span></span>

&lt;!-- 导入但不编译 --&gt;
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;_base.scss&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;_header.scss&quot;</span><span class="token punctuation">;</span></span>

<span class="token selector">&lt;!-- 嵌套到样式内 --&gt;
#main</span> <span class="token punctuation">{</span>
		<span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;example.scss&quot;</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_14、四种输出格式" tabindex="-1"><a class="header-anchor" href="#_14、四种输出格式" aria-hidden="true">#</a> 14、四种输出格式</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token punctuation">:</span>nested      <span class="token property">嵌套</span>
<span class="token punctuation">:</span>expanded    <span class="token property">选择器不缩进</span>
<span class="token punctuation">:</span>compact     <span class="token property">每条CSS规则占一行</span>
<span class="token punctuation">:</span>compressed  压缩
</code></pre></div>`,59),o=[c];function e(u,l){return s(),a("div",null,o)}const k=n(p,[["render",e],["__file","16-sass.html.vue"]]);export{k as default};

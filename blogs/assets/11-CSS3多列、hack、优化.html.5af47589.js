import{_ as e,o as n,c as t,f as r}from"./app.26d50059.js";const a={},c=r(`<h1 id="css3多列、hack、优化" tabindex="-1"><a class="header-anchor" href="#css3多列、hack、优化" aria-hidden="true">#</a> CSS3多列、hack、优化</h1><h2 id="多列" tabindex="-1"><a class="header-anchor" href="#多列" aria-hidden="true">#</a> 多列</h2><pre><code>column-count:3;   &lt;!-- 元素被分隔的列数 --&gt;
column-gap:10px;      &lt;!-- 列与列之间的间隔 --&gt;
column-rule:2px solid red;     &lt;!-- 列规则，列间隔符的宽度、样式、颜色。 --&gt;
</code></pre><h2 id="before-after的高级用法" tabindex="-1"><a class="header-anchor" href="#before-after的高级用法" aria-hidden="true">#</a> :before :after的高级用法</h2><pre><code>利用:before和:after不仅可以向元素前面或后面添加文字和图片，还可以添加元素。
默认添加的元素是行内元素，应该转化为块级元素再设置宽高，否则无效。
</code></pre><h2 id="css-hack" tabindex="-1"><a class="header-anchor" href="#css-hack" aria-hidden="true">#</a> CSS Hack</h2><p>浏览器最重要或者说核心的部分是“Rendering Engine”，可大概译为“渲染引擎”，不过我们一般习惯将之称为“浏览器内核”。渲染引擎决定了浏览器如何显示网页的内容以及页面的格式信息。不同的浏览器内核对网页编写语法的解释也有不同，因此同一网页在不同的内核的浏览器里的渲染（显示）效果也可能不同，这个时候我们就需要针对不同的浏览器去写不同的CSS，让它能够同时兼容不同的浏览器，能在不同的浏览器中也能得到我们想要的页面效果，这就是CSS Hack。</p><pre><code>Chrome:Blink内核
Firefox:gecko内核
IE:trident内核
Opera:以前presto,现在Blink内核
Safari:webkit内核
</code></pre><p><strong>1、条件注释法</strong></p><p>条件注释法还可以应用在页面头部，该样式能被IE浏览器解析</p><pre><code>条件注释写法&lt;!--[if ...]&gt;  &lt;![endif]--&gt;

&lt;!--[if IE]&gt;      用于 IE      &lt;![endif]--&gt;
&lt;!--[if IE 6]&gt;    用于 IE6     &lt;![endif]--&gt;
&lt;!--[if IE 7]&gt;    用于 IE7     &lt;![endif]--&gt;
&lt;!--[if IE 8]&gt;    用于 IE8     &lt;![endif]--&gt;
&lt;!--[if gt IE 6]&gt;      用于 IE6 以上版本    &lt;![endif]--&gt;
&lt;!--[if lte IE 7]&gt;     用于 IE7及以下版本   &lt;![endif]--&gt;
&lt;!--[if gte IE 8]&gt;     用于 IE8 及以上版本  &lt;![endif]--&gt;
&lt;!--[if lt IE 9]&gt;      用于 IE9 以下版本    &lt;![endif]--&gt;
&lt;!--[if ! IE 6]&gt; --&gt;   用于非 IE 6版本      &lt;!-- &lt;![endif]--&gt;
</code></pre><p><strong>2、属性前缀法</strong></p><p>属性前缀法是在CSS样式属性名前加上一些只有特定浏览器才能识别的hack前缀，以达到预期的页面展现效果。</p><pre><code>添加在属性后：   
\\9          IE6~10      background-color:red\\9;
\\0          IE8~11
\\9\\0        IE9，10

添加在属性前(常用)：  
!important   IE7~IE10   IE6浏览器识别但不认!important的优先级
*           IE6，IE7     * background-color:red;
+           IE6，IE7
#           IE6，IE7
-           IE6
_           IE6
</code></pre><p><strong>3、选择器前缀法</strong></p><p>针对一些页面表现不一致或者需要特殊对待的浏览器，在选择器前加上一些只有某些特定浏览器才能识别的前缀进行hack</p><pre><code>*html        *前缀只对IE6生效
*+html       *+前缀只对IE7生效
@media screen\\9{      只对IE6/7生效
   div{...}
}    
@media \\0screen {     只对IE8有效
   body { background: red; }
}    
@media \\0screen\\,screen\\9{       只对IE6/7/8有效
   body { background: blue; }
}   
@media screen\\0 {                只对IE8/9/10有效
   body { background: green; }
}    
</code></pre><h2 id="css优化" tabindex="-1"><a class="header-anchor" href="#css优化" aria-hidden="true">#</a> CSS优化</h2><p>我们写CSS代码时，不仅仅只是完成页面设计的效果，还应该让CSS代码易于管理，维护。我们对CSS代码重构主要有以下目的：</p><pre><code>1.提高页面加载性能
2.提高代码的可维护性
3.减轻服务器压力，缩短服务器响应时间，提高用户体验度
</code></pre><p><strong>优化方法：</strong></p><pre><code>1.尽量将样式写在单独的css文件里面，在head元素中引用;
2.CSS sprites：合并多个背景图像到一个单独图像，然后通过background-image和background-position进行调整;
3.减少样式重写;
4.使用工具压缩css代码，如yuicompressor，尽量不要在HTML中缩放图像，避免空的src和href;
5.避免使用复杂的选择器，层级越少越好;  (不要超过3个)
6.利用CSS继承减少代码量;
7.不乱用CSS reset;
8.尽量使用最具体的类别、避免后代选择器。（div p span）
</code></pre><p><strong>为什么要CSS重置：</strong></p><pre><code>在不同的浏览器中默认标签的默认样式是不一样的。
</code></pre><blockquote><p>注意：不能使用通用选择器*{margin 0px;}</p></blockquote>`,25),o=[c];function d(i,s){return n(),t("div",null,o)}const l=e(a,[["render",d],["__file","11-CSS3多列、hack、优化.html.vue"]]);export{l as default};

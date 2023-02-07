import{_ as e,o as a,c as n,f as d}from"./app.4112d7f2.js";const r={},p=d(`<h1 id="css框模型" tabindex="-1"><a class="header-anchor" href="#css框模型" aria-hidden="true">#</a> CSS框模型</h1><h2 id="盒子模型-方框模型、盒子属性" tabindex="-1"><a class="header-anchor" href="#盒子模型-方框模型、盒子属性" aria-hidden="true">#</a> 盒子模型(方框模型、盒子属性)</h2><pre><code>主要设置元素的：
    外边距（margin）  内边距（padding）  边框（border）  宽度  高度
元素实际宽度=左外边距+左边框+左内边距+宽度+左右边距+右边框+右外边距
元素实际高度=上外边距+上边框+上内边距+宽度+下右边距+下边框下外边距
</code></pre><h2 id="外边距-元素边框外围" tabindex="-1"><a class="header-anchor" href="#外边距-元素边框外围" aria-hidden="true">#</a> 外边距(元素边框外围)</h2><p>1、四个方向设置</p><pre><code>margin:value;    一个值四个方向
margin:value(上下) value(左右);
margin:value(上) value(左右) value(下);
margin:value(上) value(右) value(下) value(左);
</code></pre><p>2、单方向设置</p><pre><code>margin-left/right/top/bottom:value;
</code></pre><p>3、设置块级元素居中</p><pre><code>margin:20px auto 2px;
auto：如果块级元素左右外边距设置为auto，那么当前元素会在他外层容器中水平居中。
</code></pre><p>4、外边距合并</p><pre><code>当两个垂直外边距相遇时，将形成一个外边距。外边距的值，以大值为主。

margin-bottom:20px;    margin-top:100px;
合并后：\`margin-top:100px;\`
</code></pre><p>5、使用外边距遇到的问题</p><pre><code>内外嵌套的div元素，如果设置内层div的margin-top，默认会作用于外层的div的margin-top上。而内层无效果。

解决方法：
给外层div加边框(border:1px solid;)，但还存在小问题。
给外层div加内边距。
</code></pre><h2 id="内边距-边框与内容之间的空间" tabindex="-1"><a class="header-anchor" href="#内边距-边框与内容之间的空间" aria-hidden="true">#</a> 内边距 (边框与内容之间的空间)</h2><p>1、四个方向设置</p><pre><code>padding:value;    一个值四个方向     
padding:value(上下) value(左右);
padding:value(上) value(左右) value(下);
padding:value(上) value(右) value(下) value(左);
</code></pre><p>2、单方向设置</p><pre><code>padding-left/right/top/bottom:value;
</code></pre><p>3、元素设置内边距padding后，会扩大整个元素区域。</p><pre><code>解决办法：

(1)添加padding后，重新设置元素宽高(不好用)
(2)给元素添加box-sizing:border-box; 元素的内边距和边框不会再增加他的宽度和高度。（会向内挤文本）
</code></pre><h2 id="css重写-重置" tabindex="-1"><a class="header-anchor" href="#css重写-重置" aria-hidden="true">#</a> CSS重写/重置</h2><pre><code>在不同浏览器，HTML中标签的默认样式有一个默认属性值，渲染出来的效果不尽相同，我们在写css页面的时候，为了避免在css中重复定义它们，我们需要重置默认样式，以方便统一，从而提高开发效率。

常见：*{margin:0px;padding:0px;}     不规范，加载速度会变慢
规范：p,ul,li,ol,h1,h2,h3,{margin:0px;padding:0px;}   将遇到的有默认属性值的标签写出来。
</code></pre><h2 id="附" tabindex="-1"><a class="header-anchor" href="#附" aria-hidden="true">#</a> 附</h2><pre><code>margin和padding使用效果是一样的，但有区别，可通过border验证，推荐使用padding
padding:20px 0;
margin:20px 0;
</code></pre>`,25),i=[p];function o(c,t){return a(),n("div",null,i)}const l=e(r,[["render",o],["__file","03-CSS框模型.html.vue"]]);export{l as default};

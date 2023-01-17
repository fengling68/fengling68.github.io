import{_ as e,o as r,c as d,f as o}from"./app.e56a07d8.js";const n={},a=o(`<h1 id="css属性" tabindex="-1"><a class="header-anchor" href="#css属性" aria-hidden="true">#</a> CSS属性</h1><h2 id="颜色" tabindex="-1"><a class="header-anchor" href="#颜色" aria-hidden="true">#</a> 颜色</h2><pre><code>rgb颜色(red,green,blue)  rgb(0,0,0)黑色    rgb(255,255,255)白色
hex十六进制颜色    #e4393c 京东红
确切的英文名      red    green
rgba(x,x,x,0~1)带透明度：数越小，越透明
</code></pre><h2 id="尺寸" tabindex="-1"><a class="header-anchor" href="#尺寸" aria-hidden="true">#</a> 尺寸</h2><pre><code>单位:px像素   %百分比  cm厘米  mm毫米  pt棒  em(1em等于当前字体颜色)
width    min-width     max-width
height   min-height    max-height

内容溢出 overflow:    overflow-x:    overflow-y:
visible：溢出可见(默认值，内容不会修剪，会显现在元素框之外)
hidden：溢出隐藏(内容会被修剪，超出内容不可见)
scroll：设置滚动条(内容会被修剪，浏览器会显示滚动以便查看其余内容)
auto：自动(如果被修剪，浏览器会显示滚动以便查看其余内容)
</code></pre><blockquote><p>注意：块级元素允许修改宽度和高度，行内元素不能修改宽度和高度。<img>特殊，行内快允许改变宽高。</p></blockquote><h2 id="边框" tabindex="-1"><a class="header-anchor" href="#边框" aria-hidden="true">#</a> 边框</h2><p>1、四边</p><pre><code>border:style width color;    用空格隔开，可不设置其中的某些。
style:dotted(点线) solid(实线) dashed(虚线) double(双线)
</code></pre><p>2、单独指定边框属性，单边</p><pre><code>border-style:
border-width:
border-color:red green pink purple;
border-left-color:
border-right-style:
</code></pre><h2 id="边框倒角" tabindex="-1"><a class="header-anchor" href="#边框倒角" aria-hidden="true">#</a> 边框倒角</h2><pre><code>border-radius:10px;
border-radius:10px 20px 30px 40;

border-top-left-radius:30px;     左上角
border-top-right-radius:30px;    右上角
border-bottom-left-radius:30px;  右下角
border-bottom-left-radius:30px;  左下角

圆 border-radius:50%；
</code></pre><p>倒三角：</p><pre><code>div{
    width:0;
    height:0;
    border-width:50px;
    border-style:solid;
    border-color:red transparent transparent transparent;
}                             &lt;!--  透明 --&gt;
</code></pre><h2 id="边框阴影" tabindex="-1"><a class="header-anchor" href="#边框阴影" aria-hidden="true">#</a> 边框阴影</h2><pre><code>属性：box-shadow：h-shadow v-shadow blur spread color inset
h-shadow 水平阴影位置   正直向右，负值向左
v-shadow 垂直阴影位置   正直向下，负值向上
blur     可选，模糊距离
spread   可选，阴影尺寸
color    可选，阴影颜色
inset    可选值，将外部阴影改为内部阴影
</code></pre><blockquote><p>注意：1、值要按顺序书写 2、阴影默认黑色 3、用内阴影直接加inset</p></blockquote><h2 id="图片边框" tabindex="-1"><a class="header-anchor" href="#图片边框" aria-hidden="true">#</a> 图片边框</h2><pre><code>属性：border-image将图片规定为包围div元素的边框
值：border-image-source      图片路径
border-image-slice:26;   图片边框向内移植   &lt;!-- 切割图片,不带单位 --&gt;
border-image-width   图片边框宽度
border-image-outset  边框图像区域超出边框的量（向外延伸多大）
border-image-repeat  边框的平铺方式（repeat：平铺；round：铺满；stretch:拉伸）

简写：border-image:url(images/xx.png) 26 repeat;
</code></pre><h2 id="轮廓" tabindex="-1"><a class="header-anchor" href="#轮廓" aria-hidden="true">#</a> 轮廓</h2><p>与border值相似,但不与边框同用。 绘制于元素周围的一条线，位于边框边缘的外围，可以起到突出元素的作用。</p><pre><code>简写：outline:width style color;
全写：outline-width   outline-style    outline-color
经常在获取焦点（focus或hover）时使用。
</code></pre><blockquote><p>注意：outline：none；可以去掉input默认边框</p></blockquote>`,24),t=[a];function i(h,c){return r(),d("div",null,t)}const l=e(n,[["render",i],["__file","02-CSS属性.html.vue"]]);export{l as default};

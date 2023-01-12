import{_ as e,o as r,c as a,f as n}from"./app.d9b83bc9.js";const t={},d=n(`<h1 id="_2d动画" tabindex="-1"><a class="header-anchor" href="#_2d动画" aria-hidden="true">#</a> 2D动画</h1><pre><code>转换是使元素改变形状、尺寸和位置的一种效果。
移动、缩放、旋转、拉伸倾斜
</code></pre><h2 id="转换属性" tabindex="-1"><a class="header-anchor" href="#转换属性" aria-hidden="true">#</a> 转换属性</h2><pre><code>transform: none;
none           不转换，默认值
translate()    位移
rotate()       旋转
scale()        缩放
skew()         倾斜
</code></pre><h2 id="转换原点" tabindex="-1"><a class="header-anchor" href="#转换原点" aria-hidden="true">#</a> 转换原点</h2><pre><code>transform-origin:0px 0px ;     数值
transform-origin:50% 50% ;     百分比
transform-origin:right top ;   关键字
一个值：X轴
两个值：X轴 Y轴
三个值：X轴 Y轴 Z轴
</code></pre><h2 id="_2d转换——位移translate" tabindex="-1"><a class="header-anchor" href="#_2d转换——位移translate" aria-hidden="true">#</a> 2D转换——位移translate</h2><pre><code>transform:translate(x);    一个值X轴的移动
transform:translate(x,y);  两个值Y轴的移动

transform:transformX(50px); 只在X轴移动
transform:transformY(50px); 只在Y轴移动
</code></pre><h2 id="_2d转换——缩放scale" tabindex="-1"><a class="header-anchor" href="#_2d转换——缩放scale" aria-hidden="true">#</a> 2D转换——缩放scale</h2><pre><code>transform:scale(0.5);    一个值水平垂直方向都缩放相同比例
transform:scale(1.5,1.5);      缩放比例分别为x,y

transform:scaleX(0.5);       横向缩放
transform:scaleY(1.5);       纵向缩放

缩小   0~1之间
默认值 1
放大   &gt;1
</code></pre><h2 id="_2d转换——旋转rotate" tabindex="-1"><a class="header-anchor" href="#_2d转换——旋转rotate" aria-hidden="true">#</a> 2D转换——旋转rotate</h2><pre><code>transform:rotate(45deg);   正：顺时针   负：逆时针
</code></pre><h2 id="_2d转换——倾斜skew" tabindex="-1"><a class="header-anchor" href="#_2d转换——倾斜skew" aria-hidden="true">#</a> 2D转换——倾斜skew()</h2><pre><code>transform:skewX(40deg);      水平方向倾斜
transform:skewY(40deg);      垂直方向倾斜
transform:skewY(40deg,40deg);
</code></pre>`,14),s=[d];function o(c,h){return r(),a("div",null,s)}const f=e(t,[["render",o],["__file","12-2D动画.html.vue"]]);export{f as default};

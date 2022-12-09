import{_ as e,o as a,c as r,f as n}from"./app.26d50059.js";const d={},i=n(`<h1 id="css渐变" tabindex="-1"><a class="header-anchor" href="#css渐变" aria-hidden="true">#</a> CSS渐变</h1><h2 id="渐变" tabindex="-1"><a class="header-anchor" href="#渐变" aria-hidden="true">#</a> 渐变</h2><p>渐变通过background-image设置</p><pre><code>linear-gradient   线性渐变  
repeating-linear-gradient   重复线性渐变
radial-gradient   径向渐变
repeating-radial-gradient   重复径向渐变
</code></pre><p>示例：<code>background-image:repeating-radial-gradient();</code></p><h2 id="线性渐变" tabindex="-1"><a class="header-anchor" href="#线性渐变" aria-hidden="true">#</a> 线性渐变</h2><pre><code>background-image:lineae-gradient(angle,color-point1,color-point2...);
例：background-image:linear-gradient(to right,yellow 0%,green 50%,red 100%);
</code></pre><p>1、angle:指定具体方向或具体角度</p><pre><code>to top,to bottom,to right,to left
0deg     90deg
</code></pre><p>2、color-point:渐变颜色的开始点、中间过渡点、结束点</p><pre><code>red 0%:从开始处显示红色
green 50%：到50%位置处，变成绿色
blue 100%: 到结尾处，变为蓝色
</code></pre><h2 id="径向渐变" tabindex="-1"><a class="header-anchor" href="#径向渐变" aria-hidden="true">#</a> 径向渐变</h2><p>默认渐变中心是center(中心点)，渐变大小是farthest-corner(表示到最远的角落)。</p><p><code>background-image:radial-gradient(size at position,color-point1,color-point2...);</code></p><pre><code>size at position:
size:放射的圆形半径
position：原点所在的坐标（left，top，bottom，right，center）
</code></pre><h2 id="重复线性渐变" tabindex="-1"><a class="header-anchor" href="#重复线性渐变" aria-hidden="true">#</a> 重复线性渐变</h2><p><code>background-image:repeating-linear-gradient(red,green 20px,purple 40px);</code></p><h2 id="重复径向渐变" tabindex="-1"><a class="header-anchor" href="#重复径向渐变" aria-hidden="true">#</a> 重复径向渐变</h2><p><code>background-image:repeating-radial-gradient(red,green 20px,purple 40px);</code></p>`,19),o=[i];function t(c,p){return a(),r("div",null,o)}const g=e(d,[["render",t],["__file","05-CSS渐变.html.vue"]]);export{g as default};

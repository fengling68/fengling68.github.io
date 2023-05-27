import{_ as e,o as a,c as r,f as n}from"./app.bb38b1d2.js";const d={},o=n(`<h1 id="css表格和列表" tabindex="-1"><a class="header-anchor" href="#css表格和列表" aria-hidden="true">#</a> CSS表格和列表</h1><h2 id="常用样式" tabindex="-1"><a class="header-anchor" href="#常用样式" aria-hidden="true">#</a> 常用样式</h2><pre><code>文本、字体格式化属性
背景属性：颜色、字体
内边距：padding
尺寸：width height
边框：border

文本垂直对齐(只有表格能用)：
\`vertical-align:top/middle/bottom;\`
</code></pre><h2 id="表格特有的样式属性" tabindex="-1"><a class="header-anchor" href="#表格特有的样式属性" aria-hidden="true">#</a> 表格特有的样式属性</h2><p>1、边框合并</p><pre><code>border-collapse:separate/collapse;
separate：默认，分离边框
collapse:合并边框

//内联样式：写在table内
//非内联样式：
table{
    border:1px solid #000;    给table添加边框
    border-collapse:collapse; 合并边框
}
td{
    border:1px solid #000;    给表格添加边框
}
</code></pre><p>2、边框边距</p><pre><code>border-spacing
一个值：垂直和水平间距相同
两个值：第一个值表示水平间距，第二个值表示垂直间距，空格隔开。

注意：只有当border-collapse为separate时才能设置该属性
</code></pre><p>3、表格标题位置</p><pre><code>caption-side:top,bottom;
</code></pre><h2 id="显示规则" tabindex="-1"><a class="header-anchor" href="#显示规则" aria-hidden="true">#</a> 显示规则</h2><p>显示表格单元格、行、列的算法规则。</p><pre><code>table-layout:automatic/fixed;
automatic:默认值，列宽度由单元格内容决定，自动表格布局
fixed:列宽度由单元格和列的宽度来决定，固定表格布局
</code></pre><h2 id="固定表格布局与自动表格布局的区别" tabindex="-1"><a class="header-anchor" href="#固定表格布局与自动表格布局的区别" aria-hidden="true">#</a> 固定表格布局与自动表格布局的区别</h2><p>1、固定表格布局</p><pre><code>固定表格布局与自动表格布局相比，允许浏览器更快地对表格进行布局；
在固定表格布局中，水平布局仅取决于表格宽度、列宽度、表格边框宽度、单元格间距，而与单元格的内容无关；
通过使用固定表格布局，用户代理在接收到第一行后就可以显示表格。
</code></pre><p>2、自动表格布局</p><pre><code>在自动表格布局中，列的宽度是由列单元格中没有折行的最宽的内容设定的；
此算法有时会较慢，这是由于它需要在确定最终的布局之前访问表格中所有的内容。
</code></pre><h2 id="列表样式list-style-type" tabindex="-1"><a class="header-anchor" href="#列表样式list-style-type" aria-hidden="true">#</a> 列表样式list-style-type: ;</h2><p>1、无序列表</p><pre><code>none:无标记  disc:默认实心圆  circle:空心圆    square:实心矩形
</code></pre><p>2、有序列表</p><pre><code>none:无标记  decimal:默认数字   lower-roman:小写罗马字  upper-roman:大写罗马字
</code></pre><p>3、列表项图</p><pre><code>list-style-image:url();
</code></pre><p>4、列表项位置</p><pre><code>list-style-position:outside/inside;
&lt;li&gt;前面标识的位置
</code></pre><p>5、最常用list-style:none; 取消列表前面的标志符</p><pre><code>ol,li{margin:0;padding:0;}
ol{list-style:none;}
</code></pre>`,29),t=[o];function p(c,i){return a(),r("div",null,t)}const l=e(d,[["render",p],["__file","07-CSS表格和列表.html.vue"]]);export{l as default};

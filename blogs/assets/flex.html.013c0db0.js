import{_ as n,o as s,c as a,f as t}from"./app.873480e4.js";const p={},e=t(`<h1 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> flex</h1><p>仅个人学习总结之作，可能存在问题，使用过程中会不断优化。</p><h2 id="一、基本知识点" tabindex="-1"><a class="header-anchor" href="#一、基本知识点" aria-hidden="true">#</a> 一、基本知识点</h2><blockquote><p>1、px : 像素, 逻辑像素 相对单位, 抽象的单位长度</p><p>2、dp : 在参数中, 显示的是物理像素, 实际的单位长度, 设备无关像素</p><p>3、dpr: 设备像素缩放比 1px = dpr^2*dp 4、屏幕像素密度ppi: 屏幕每英寸像素数量</p><p>5、ppi = 屏幕对角线长度 / 屏幕英寸</p><p>例 iPhone5：ppi = sqrt(1136<em>1136 + 640</em>640)/4</p></blockquote><h2 id="布局" tabindex="-1"><a class="header-anchor" href="#布局" aria-hidden="true">#</a> 布局</h2><pre><code>//html
&lt;div class=&quot;container&quot;&gt;
    &lt;div class=&quot;box&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;box&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;box&quot;&gt;3&lt;/div&gt;
    &lt;div class=&quot;box&quot;&gt;4&lt;/div&gt;
&lt;/div&gt;

.container{
    /* 将container变成弹性盒子 */
    display: flex;
}
</code></pre><h2 id="二、容器属性-container" tabindex="-1"><a class="header-anchor" href="#二、容器属性-container" aria-hidden="true">#</a> 二、容器属性（.container）</h2><h3 id="_1、主轴方向-flex-direction" tabindex="-1"><a class="header-anchor" href="#_1、主轴方向-flex-direction" aria-hidden="true">#</a> 1、主轴方向 <code>flex-direction:</code></h3><pre><code>row（默认）       按照主轴开始位置排列
row-reverse      按照主轴结束位置排列 
column           按照交叉轴开始位置排列
column-reverse   按照交叉轴结束位置排列
</code></pre><h3 id="_2、换行-flex-wrap" tabindex="-1"><a class="header-anchor" href="#_2、换行-flex-wrap" aria-hidden="true">#</a> 2、换行 <code>flex-wrap：</code></h3><pre><code>wrap             超过contain盒子的宽度后强制换行
nowrap           不换行
wrap-reverse     换行后翻转，第一行在下面
</code></pre><h3 id="_3、主轴方向-换行-值1-方向-值2-换行" tabindex="-1"><a class="header-anchor" href="#_3、主轴方向-换行-值1-方向-值2-换行" aria-hidden="true">#</a> 3、主轴方向+换行(值1:方向 值2: 换行)</h3><pre><code>flex-flow: row wrap-reverse;
</code></pre><h3 id="_4、主轴对齐方式-justify-content" tabindex="-1"><a class="header-anchor" href="#_4、主轴对齐方式-justify-content" aria-hidden="true">#</a> 4、主轴对齐方式 <code>justify-content</code></h3><pre><code>flex-start       按照主轴开始的位置对齐
flex-end         按照主轴结束的位置对齐
center           按照主轴中心的位置对齐
space-between    按照主轴, 两端对齐 , 间隔相同
space-around     主轴方向, 每个项目的左右间隔相同
</code></pre><h3 id="_5、交叉轴对齐方式-align-items" tabindex="-1"><a class="header-anchor" href="#_5、交叉轴对齐方式-align-items" aria-hidden="true">#</a> 5、交叉轴对齐方式 <code>align-items</code>：</h3><pre><code>flex-start       交叉轴开始位置对齐
flex-end         交叉轴结束位置对齐
center           交叉轴水平位置对齐
baseline         交叉轴基线位置对齐
stretch          如果没有高度或者高度自动，自动撑满整个容器
</code></pre><h3 id="_6、主轴方向-对齐方式" tabindex="-1"><a class="header-anchor" href="#_6、主轴方向-对齐方式" aria-hidden="true">#</a> 6、主轴方向+对齐方式</h3><h3 id="_7、多根轴线对齐-强制换行" tabindex="-1"><a class="header-anchor" href="#_7、多根轴线对齐-强制换行" aria-hidden="true">#</a> 7、多根轴线对齐(强制换行)</h3><blockquote><p>盒子不换行默认一条轴线排列,不会产生第二根基线。设置多根轴线无作用</p><p>盒子换行：出现多根轴线对齐（按每一根轴线的...对齐）</p></blockquote><h2 id="三、项目属性-box" tabindex="-1"><a class="header-anchor" href="#三、项目属性-box" aria-hidden="true">#</a> 三、项目属性（.box）</h2><h3 id="_1、项目的顺序-——-order" tabindex="-1"><a class="header-anchor" href="#_1、项目的顺序-——-order" aria-hidden="true">#</a> 1、项目的顺序 —— <code>order</code></h3><pre><code>/*默认从左到右都是0  数越小, 越靠前*/
.box:nth-child(3){
    order: 1;
}
.box:nth-child(2){
    order: 5;
}
</code></pre><h3 id="_2、项目的放大-——-flex-grow" tabindex="-1"><a class="header-anchor" href="#_2、项目的放大-——-flex-grow" aria-hidden="true">#</a> 2、项目的放大 —— <code>flex-grow</code></h3><pre><code>/* 
 * 项目的放大比例 ———— flew-grow
 * 默认为0, 即使存在剩余空间也不会放大
 * 不能设置负数
 * 也不要设置小数
 */
.box:nth-child(3){
    flex-grow: 3;
}
</code></pre><h3 id="_3、项目的缩小-——-flex-shrink" tabindex="-1"><a class="header-anchor" href="#_3、项目的缩小-——-flex-shrink" aria-hidden="true">#</a> 3、项目的缩小 —— <code>flex-shrink</code></h3><pre><code>/*
 * 项目的缩小比例
 * 默认值为1, 如果剩余空间不足, 项目会缩小
 * 设置为0 , 不会缩小
 * 不能设置负数
 * 也不要设置小数
 */
.box:nth-child(2){
    order: 0.5;
    flex-shrink: 0;
}
</code></pre><h3 id="_4、项目的主轴空间大小-——-flex-basis" tabindex="-1"><a class="header-anchor" href="#_4、项目的主轴空间大小-——-flex-basis" aria-hidden="true">#</a> 4、项目的主轴空间大小 —— <code>flex-basis</code></h3><pre><code>/* 
 * 主轴空间大小
 * 定义在分配主轴空间之前，项目占据主轴空间，
 * 浏览器根据当前属性，计算主轴是否有多余空间
 * 
 * 宽度固定
 */
.box:nth-child(3){
    flex-basis: 300px;
    /*flex-shrink: 0;*/
}
</code></pre><h2 id="四、兼容代码" tabindex="-1"><a class="header-anchor" href="#四、兼容代码" aria-hidden="true">#</a> 四、兼容代码</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/**
 * 时间：2019-5-7
 * 参考文档：https://segmentfault.com/a/1190000003978624
 */</span>
<span class="token comment">/**
 * 作用：给父盒子添加flex属性
 * 注意：如果子元素是行内元素，多数使用 display: block 或 display: inline-block 把行内子元素变成块元素。
 */</span>
<span class="token atrule"><span class="token rule">@mixin</span> mix-flex</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-flex<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -moz-flex<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -moz-box<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -ms-flexbox<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@mixin</span> mix-flex-son</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">-ms-flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">-moz-box-flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * 作用：flex-direction，子元素在主轴的排列方向
 * 传值：row（左-&gt;右）| row-reverse（右-&gt;左）| column（上-&gt;下）| column-reverse（下-&gt;上）
 */</span>
<span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">mix-flex-direction</span><span class="token punctuation">(</span>$<span class="token property">d</span><span class="token punctuation">:</span> row<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@if</span> $d == <span class="token string">&#39;row&#39;</span></span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-direction</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
    <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> horizontal<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span> if $d == <span class="token string">&#39;row-reverse&#39;</span></span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-pack</span><span class="token punctuation">:</span> end<span class="token punctuation">;</span>
    <span class="token property">-webkit-box-direction</span><span class="token punctuation">:</span> reverse<span class="token punctuation">;</span>
    <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> horizontal<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span> if $d == <span class="token string">&#39;column&#39;</span></span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-direction</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
    <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span> if $d == <span class="token string">&#39;column-reverse&#39;</span></span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-pack</span><span class="token punctuation">:</span> end<span class="token punctuation">;</span>
    <span class="token property">-webkit-box-direction</span><span class="token punctuation">:</span> reverse<span class="token punctuation">;</span>
    <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> 
  <span class="token property">-webkit-flex-direction</span><span class="token punctuation">:</span> $d<span class="token punctuation">;</span>
  <span class="token property">-moz-flex-direction</span><span class="token punctuation">:</span> $d<span class="token punctuation">;</span>
  <span class="token property">-ms-flex-direction</span><span class="token punctuation">:</span> $d<span class="token punctuation">;</span>
  <span class="token property">-o-flex-direction</span><span class="token punctuation">:</span> $d<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> $d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * 作用：justify-content，子元素在主轴对齐方式；box-pack(旧版4个值): start | end | center | justify;
 * 传值(5个值)：flex-start(默认) | flex-end | center | space-between | space-around
 */</span>
<span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">mix-justify-content</span><span class="token punctuation">(</span>$<span class="token property">p</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@if</span> $p == <span class="token string">&#39;flex-start&#39;</span></span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-pack</span><span class="token punctuation">:</span> start<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span> if $p == <span class="token string">&#39;flex-end&#39;</span></span><span class="token punctuation">{</span>
    <span class="token property">-webkit-box-pack</span><span class="token punctuation">:</span> end<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span> if $p == <span class="token string">&#39;center&#39;</span></span><span class="token punctuation">{</span>
        <span class="token property">-webkit-box-pack</span><span class="token punctuation">:</span> $p<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span> if $p == <span class="token string">&#39;space-between&#39;</span></span><span class="token punctuation">{</span>
    <span class="token property">-webkit-box-pack</span><span class="token punctuation">:</span> justify<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span> if $p == <span class="token string">&#39;space-around&#39;</span></span><span class="token punctuation">{</span>
    // box-pack 不可用
  <span class="token punctuation">}</span>
  <span class="token property">-webkit-justify-content</span><span class="token punctuation">:</span> $p<span class="token punctuation">;</span>
  <span class="token property">-moz-justify-content</span><span class="token punctuation">:</span> $p<span class="token punctuation">;</span>
  <span class="token property">-ms-justify-content</span><span class="token punctuation">:</span> $p<span class="token punctuation">;</span>
  <span class="token property">-o-justify-content</span><span class="token punctuation">:</span> $p<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> $p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * 作用：align-items，子元素在交叉轴轴对齐方式；box-align(旧版4个值): start | end | center | baseline | stretch;
 * 传值(5个值)： flex-start | flex-end | center | baseline | stretch;
 */</span>
<span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">mix-align-items</span><span class="token punctuation">(</span>$<span class="token property">p</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@if</span> $p == <span class="token string">&#39;flex-start&#39;</span></span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-align</span><span class="token punctuation">:</span> start<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span> if $p == <span class="token string">&#39;flex-end&#39;</span></span><span class="token punctuation">{</span>
    <span class="token property">-webkit-box-align</span><span class="token punctuation">:</span> end<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span></span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-align</span><span class="token punctuation">:</span> $p<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token property">-webkit-align-items</span><span class="token punctuation">:</span> $p<span class="token punctuation">;</span>
  <span class="token property">-moz-align-items</span><span class="token punctuation">:</span> $p<span class="token punctuation">;</span>
  <span class="token property">-ms-align-items</span><span class="token punctuation">:</span> $p<span class="token punctuation">;</span>
  <span class="token property">-o-align-items</span><span class="token punctuation">:</span> $p<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> $p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * 作用：flex-wrap，元素是否换行
 * 传值：nowrap | wrap | wrap-reverse
 */</span>
<span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">mix-flex-wrap</span><span class="token punctuation">(</span>$<span class="token property">wrap</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-flex-wrap</span><span class="token punctuation">:</span> $wrap<span class="token punctuation">;</span>
  <span class="token property">-moz-flex-wrap</span><span class="token punctuation">:</span> $wrap<span class="token punctuation">;</span>
  <span class="token property">-ms-flex-wrap</span><span class="token punctuation">:</span> $wrap<span class="token punctuation">;</span>
  <span class="token property">-o-flex-wrap</span><span class="token punctuation">:</span> $wrap<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> $wrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * 作用：flex-grow，是否放大
 * 传值：0（不放大）| 1（放大）
 */</span>
<span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">mix-flex-grow</span><span class="token punctuation">(</span>$<span class="token property">value</span><span class="token punctuation">:</span> 0<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@if</span> $value == 0</span> <span class="token punctuation">{</span>
    // 不伸缩
    <span class="token property">-webkit-box-flex</span><span class="token punctuation">:</span> 0.0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span> if $value == 1</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-flex</span><span class="token punctuation">:</span> 1.0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span></span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-flex</span><span class="token punctuation">:</span> $value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token property">-webkit-flex-grow</span><span class="token punctuation">:</span> $value<span class="token punctuation">;</span>
  <span class="token property">-moz-flex-grow</span><span class="token punctuation">:</span> $value<span class="token punctuation">;</span>
  <span class="token property">flex-grow</span><span class="token punctuation">:</span> $value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * 作用：flex-shrink，是否缩小
 * 传值：0（不缩小）| 1（缩小）
 */</span>
 <span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">mix-flex-shrink</span><span class="token punctuation">(</span>$<span class="token property">value</span><span class="token punctuation">:</span> 1<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@if</span> $value == 0</span> <span class="token punctuation">{</span>
    // 不伸缩
    <span class="token property">-webkit-box-flex</span><span class="token punctuation">:</span> 0.0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span> if $value == 1</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-flex</span><span class="token punctuation">:</span> 1.0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span></span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-flex</span><span class="token punctuation">:</span> $value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token property">-webkit-flex-shrink</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">-moz-flex-shrink</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">flex-shrink</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * 作用：order，子元素排序
 */</span>
 <span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">mix-order</span><span class="token punctuation">(</span>$o<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-box-ordinal-group</span><span class="token punctuation">:</span> $o<span class="token punctuation">;</span>
  <span class="token property">-webkit-order</span><span class="token punctuation">:</span> $o<span class="token punctuation">;</span>
  <span class="token property">-moz-order</span><span class="token punctuation">:</span> $o<span class="token punctuation">;</span>
  <span class="token property">order</span><span class="token punctuation">:</span> $o<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="附、一个盒子九宫格位置" tabindex="-1"><a class="header-anchor" href="#附、一个盒子九宫格位置" aria-hidden="true">#</a> 附、一个盒子九宫格位置</h2><pre><code>.container{
    width: 400px;
    height: 400px;
    border: 3px solid black;
    /* 将container变成弹性盒子 */
    display: flex;

    /* 位置1 */
    justify-content: flex-start;

    /* 位置2 主轴方向-居中对齐*/
    justify-content: center;

    /* 位置3 主轴方向-结束位置对齐*/
    justify-content: flex-end;

    /* 位置4 主轴方向-结束位置对齐*
    justify-content: flex-start;
    align-items: center;

    /* 位置5 主轴方向-结束位置对齐*/
    justify-content: center;
    align-items: center;

    /* 位置6 主轴方向-结束位置对齐*/
    justify-content: flex-end;
    align-items: center;

    /* 位置7 主轴方向-结束位置对齐*/
    /*flex-direction: column;
    align-items: flex-start;*/
    justify-content: flex-start;
    align-items: flex-end;

    /* 位置8 主轴方向-结束位置对齐*/
    /*flex-direction: column;
    align-items: center;*/
    justify-content: center;
    align-items: flex-end;

    /* 位置9 主轴方向-结束位置对齐*/
    /*flex-direction: column;
    align-items: flex-end;*/
    justify-content: flex-end;
    align-items: flex-end;
}
</code></pre>`,33),o=[e];function c(l,u){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","flex.html.vue"]]);export{r as default};

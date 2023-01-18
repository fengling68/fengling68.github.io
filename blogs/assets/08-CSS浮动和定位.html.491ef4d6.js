import{_ as e,o as a,c as n,f as r}from"./app.93195575.js";const d={},o=r(`<h1 id="css浮动和定位" tabindex="-1"><a class="header-anchor" href="#css浮动和定位" aria-hidden="true">#</a> CSS浮动和定位</h1><h2 id="定位分类" tabindex="-1"><a class="header-anchor" href="#定位分类" aria-hidden="true">#</a> 定位分类</h2><p>定位：元素在网页中出现的位置</p><pre><code>(1)普通流定位
(2)浮动定位 float
(3)相对定位 relative
(4)绝对定位 absolute
(5)固定定位 fixed
</code></pre><h2 id="定位属性" tabindex="-1"><a class="header-anchor" href="#定位属性" aria-hidden="true">#</a> 定位属性</h2><pre><code>static 默认，静态定位(普通流定位)
relative:相对定位
absolute:绝对定位
fixed:固定定位

偏移属性：top  bottom  left  right

堆叠属性z-index：当修改了元素的定位方式后，产生重叠的效果，谁在前谁在后。值越大越靠近用户。
relative、absolute、fixed都可以通过z-index进行层次分级。
</code></pre><h2 id="普通流定位-网页默认定位" tabindex="-1"><a class="header-anchor" href="#普通流定位-网页默认定位" aria-hidden="true">#</a> 普通流定位（网页默认定位）</h2><pre><code>块级元素，从上到下排列；行级元素，从左到右排列。
</code></pre><h2 id="浮动定位" tabindex="-1"><a class="header-anchor" href="#浮动定位" aria-hidden="true">#</a> 浮动定位</h2><p>1、什么是浮动定位</p><pre><code>将元素排除在普通流之外,元素在网页上是不占用空间的；
浮动元素会放在包含框的左边或右边，但依然在包含框内；
浮动元素在浮动时，可以向左或向右移动直到碰到包含框或其他浮动元素位置。

float:none/left/right;       none:无浮动(默认)
</code></pre><blockquote><p>注意：在一个容器内，如果有浮动元素的话，那么尽可能的让该容器中所有的元素都浮动起来。如果有想在下一行内显示的内容（不浮动的）单独使用容器来承装。</p></blockquote><p>2、浮动定位的特点</p><pre><code>浮动元素外边缘不会超过父元素的边框；
浮动元素默认不会重叠；  (重叠只发生在浮动和不浮动元素之间)
浮动只能左右浮动，不能上下浮动；
所有行内元素设置为浮动元素的话，默认将转换为块级元素(可以设置宽高)。

浮动是脱离文档流的,在需要设置多个块级元素同行排列的情况下非常有用。
</code></pre><p>3、清除浮动</p><pre><code>清除浮动带来的影响，定义了元素的哪个边上不允许出现浮动。
clear:left/right/both
</code></pre><p>4、浮动引发的问题及解决（6种）</p><pre><code>包含框如果没有设置高度，内部元素被应用了float之后，包含框的高度会变为0。 解决方法：

(1)给父元素设置高度
(2)父元素设置overflow:hidden;   可以让父元素自动随子元素撑开。
(3)添加一个空的div并设置clear:both;
</code></pre><h2 id="相对定位" tabindex="-1"><a class="header-anchor" href="#相对定位" aria-hidden="true">#</a> 相对定位</h2><pre><code>不脱离文档流，给元素相对定位后，元素相对初始位置(相对于自己)发生位移，但仍保留初始位置。
使用场合:鼠标移入，实现元素位置的微妙变化; 配合绝对定位使用，弹出菜单。
</code></pre><h2 id="绝对定位" tabindex="-1"><a class="header-anchor" href="#绝对定位" aria-hidden="true">#</a> 绝对定位</h2><pre><code>脱离文档流，参考物为该元素外层的非static(relative,absolute,fixed)定位的元素，如果向上逐级未找到非static定位的元素，最终参考物为body。
使用场合:多数使用在弹出菜单上。
</code></pre><h2 id="固定位置" tabindex="-1"><a class="header-anchor" href="#固定位置" aria-hidden="true">#</a> 固定位置</h2><pre><code>固定位置所固定的是可视化窗口而非body或是父级元素。
将元素固定在网页的某个位置处，不随滚动条发生滚动，多数都相对body实现固定定位。
使用场合：小广告; 返回顶部。
</code></pre>`,24),t=[o];function c(h,i){return a(),n("div",null,t)}const p=e(d,[["render",c],["__file","08-CSS浮动和定位.html.vue"]]);export{p as default};

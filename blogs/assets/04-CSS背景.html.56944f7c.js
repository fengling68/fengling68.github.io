import{_ as e,o as a,c as r,f as n}from"./app.140f40fb.js";const d={},o=n(`<h1 id="css背景" tabindex="-1"><a class="header-anchor" href="#css背景" aria-hidden="true">#</a> CSS背景</h1><h2 id="背景颜色" tabindex="-1"><a class="header-anchor" href="#背景颜色" aria-hidden="true">#</a> 背景颜色</h2><pre><code>background-color：red;       background-color不能继承
background-color：transparent;   设置背景为“透明”
</code></pre><h2 id="背景图片-常用" tabindex="-1"><a class="header-anchor" href="#背景图片-常用" aria-hidden="true">#</a> 背景图片(常用)</h2><p>背景图片可以写文字，img不可以</p><pre><code>background-image:url(images/logo.png);      无引号
background-image:url(&#39;images/logo.png&#39;);    单引号
background-image:url(&quot;images/logo.png&quot;图像固定);    双引号
</code></pre><h2 id="背景重复-常用" tabindex="-1"><a class="header-anchor" href="#背景重复-常用" aria-hidden="true">#</a> 背景重复(常用)</h2><p>背景图默认水平垂直方向都平铺。</p><pre><code>background-repeat:repeat/repeat-x/repeat-y/no-repeat;
                   平铺/水平平铺/垂直平铺/不平铺
</code></pre><h2 id="改背景图片的尺寸" tabindex="-1"><a class="header-anchor" href="#改背景图片的尺寸" aria-hidden="true">#</a> 改背景图片的尺寸</h2><pre><code>background-size:100px 100px;   background-size:50% 50%;
特殊1、background-size:contain;   扩大背景图像,碰到第一个边缘就停止
特殊2、background-size:cover;     扩大背景图像，使背景图完全覆盖背景区域，直到碰到最后一个边缘才停止
</code></pre><h2 id="背景图像固定" tabindex="-1"><a class="header-anchor" href="#背景图像固定" aria-hidden="true">#</a> 背景图像固定</h2><pre><code>background-attachment:scroll;   默认，滚动定位
background-attachment:fixed;    固定定位
一旦设置背景图像固定，背景图就不会随着滚轮滚动。
</code></pre><h2 id="背景定位-常用" tabindex="-1"><a class="header-anchor" href="#背景定位-常用" aria-hidden="true">#</a> 背景定位(常用)</h2><p>背景图像在区域中的哪个位置进行显示</p><pre><code>background-position:20px 20px;
background-position:left center;        &lt;!-- left,center,right --&gt;

x为正，向右；x为负，向左；
y为正，向下；y为负，向上；
</code></pre><h3 id="_1、块级元素抠图" tabindex="-1"><a class="header-anchor" href="#_1、块级元素抠图" aria-hidden="true">#</a> 1、块级元素抠图：</h3><pre><code>（1）ps量取想要扣取的小图的宽高;
（2）创建一个与要显示图标width和height宽高一致的元素;
（3）引入背景图，为创建好的元素设置背景图像(大背景图);
（4）background-position给负值,将图片移入到指定位置，通过开发者工具将背景图调整到div中。

div{
    width:22px;
    height:23px;
    border:1px solid red;
    background-image:url(iconlist_1.png);
    background-repeat:no-repeat;
    background-position:-146px -143px;
}
</code></pre><h3 id="_2、行内元素抠图" tabindex="-1"><a class="header-anchor" href="#_2、行内元素抠图" aria-hidden="true">#</a> 2、行内元素抠图</h3><p>给行内元素添加水平方向的padding，元素会出现16px的高度，可以利用行内元素的这个特点，给行内元素添加背景图！</p><p>但需要注意的是，行内元素添加上下的padding虽然可以“撑大”元素的高度，但是高度过大，则会出现覆盖上下元素的情况</p><pre><code>s{
padding-left:16px;
background-image:url(iconlist_1.png);
background-repeat:no-repeat;
background-position:-127px -170px;
}
&lt;s&gt;&lt;/s&gt;
</code></pre><h2 id="背景绘制区域" tabindex="-1"><a class="header-anchor" href="#背景绘制区域" aria-hidden="true">#</a> 背景绘制区域</h2><p>指定背景可以在哪些区域显示</p><pre><code>background-clip:border-box;   默认值，背景被裁剪到边框
background-clip:padding-box;  背景显示在padding和内容区域
background-clip:center-box;   背景显示在内容区域
</code></pre><h2 id="背景合并" tabindex="-1"><a class="header-anchor" href="#背景合并" aria-hidden="true">#</a> 背景合并</h2><pre><code>background:color url() attachment position;
根据需要合并、滚动条    和固定
</code></pre><p>CSS视频day02_06背景(2)最后3分钟，图片加载技巧</p><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2><pre><code>background:#ccc url(images4/user.png) no-repeat 5px 5px;
背景颜色(background-color)要放在背景(background)图片之前
</code></pre>`,30),c=[o];function i(t,h){return a(),r("div",null,c)}const s=e(d,[["render",i],["__file","04-CSS背景.html.vue"]]);export{s as default};

import{_ as t,o as e,c as a,f as r}from"./app.3f8066ad.js";const d={},n=r(`<h1 id="html基础2" tabindex="-1"><a class="header-anchor" href="#html基础2" aria-hidden="true">#</a> HTML基础2</h1><h2 id="什么是url" tabindex="-1"><a class="header-anchor" href="#什么是url" aria-hidden="true">#</a> 什么是URL</h2><pre><code>URL（Uniform Resource Locator）：统一资源定位器，路径
URL作用：用来标识网络中的资源位置
URL形式：绝对路径（完整地URL，很少用），相对路径
</code></pre><h2 id="相对路径" tabindex="-1"><a class="header-anchor" href="#相对路径" aria-hidden="true">#</a> 相对路径</h2><pre><code>同级目录（直接找）logo.png
子集目录（先进入）images/logo.png
父级目录（先返回）../../images/logo.png 返回上一级
</code></pre><h2 id="图像格式" tabindex="-1"><a class="header-anchor" href="#图像格式" aria-hidden="true">#</a> 图像格式</h2><pre><code>jpg、jpeg    采用有损压缩，压缩较大；
gif        有损压缩，有较大失真，支持动画和透明图像；
png        无损压缩，支持透明色，色彩丰富。
</code></pre><blockquote><p>注意：前端切图通常保存成PNG-24</p></blockquote><h2 id="图像标签img" tabindex="-1"><a class="header-anchor" href="#图像标签img" aria-hidden="true">#</a> 图像标签img</h2><pre><code>src:图像路径（必备）
alt：图像不显示时，显示的文本（必备） alt=&quot;山水画&quot;
title：鼠标移入时显示的文本
width   height
</code></pre><h2 id="链接a标签" tabindex="-1"><a class="header-anchor" href="#链接a标签" aria-hidden="true">#</a> 链接a标签</h2><h3 id="_1、属性" tabindex="-1"><a class="header-anchor" href="#_1、属性" aria-hidden="true">#</a> 1、属性</h3><pre><code>href：链接的目的
target：指定打开新网页的方式
    - _self：在当前页面打开（默认），打开的页面会覆盖当前页面。
    - _blank：在新标签页中打开，不会覆盖原有页面。
name：定义锚点名称。
</code></pre><h3 id="_2、在所有浏览器中-链接的默认外观" tabindex="-1"><a class="header-anchor" href="#_2、在所有浏览器中-链接的默认外观" aria-hidden="true">#</a> 2、在所有浏览器中，链接的默认外观</h3><pre><code>未被访问带下划线蓝色；
已被访问带下划线紫色；
活动链接带下划线红色。
</code></pre><h3 id="_3、链接的表现形式" tabindex="-1"><a class="header-anchor" href="#_3、链接的表现形式" aria-hidden="true">#</a> 3、链接的表现形式</h3><pre><code>1. 页面间的跳转 \`&lt;a href=&quot;页面路径&quot;&gt; 文本或图像 &lt;/a&gt;\`
2. 页面上资源的下载 \`&lt;a href=&quot;xxx.rar&quot;&gt; 点击下载 &lt;/a&gt;\`
3. 返回页面顶部的空链接 \`&lt;a href=&quot;#&quot;&gt;返回顶部&lt;/a&gt;\`
4. 电子邮件链接，打开本机邮件客户端，向指定地址发送email邮件(如未安装邮件客户端,则没有效果)\`&lt;a href=&quot;mailto:xxx@qq.com&quot;&gt;联系我们&lt;/a&gt;\`
5. 链接到JavaScript单双引号嵌套\`&lt;a href=&quot;javascript:window.alert(&#39;我是一个对话框&#39;)&quot;&gt;&lt;/a&gt;\`
</code></pre><h3 id="_4、链接锚点" tabindex="-1"><a class="header-anchor" href="#_4、链接锚点" aria-hidden="true">#</a> 4、链接锚点</h3><ul><li>锚点：在页面的任意位置处定义一个标识，随时随地都可以跳转到这个标识上</li></ul><ol><li><p>定义锚点：<code>&lt;a name=&quot;anchorName&quot;&gt;&lt;/a&gt;</code> 标签内部不需要放内容</p></li><li><p>链接到本页面 <code>&lt;a href=&quot;#anchorName&quot;&gt;文本或图像&lt;/a&gt;</code><code>&lt;a name=&quot;anchorName&quot;&gt;文本或图像&lt;/a&gt;</code></p></li><li><p>链接到其他页面 <code>&lt;a href=&quot;url#otherName&quot;&gt;&lt;/a&gt;</code><code>&lt;a name=&quot;otherName&quot;&gt;文本或图像&lt;/a&gt;</code></p></li></ol><h2 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h2><pre><code>&lt;table&gt;          &lt;!-- 创建表格 --&gt;
    &lt;caption&gt;表格标题&lt;/caption&gt;
    &lt;tr&gt;           &lt;!-- 一行 --&gt;
        &lt;td&gt;&lt;/td&gt;    &lt;!-- 两列 --&gt;
        &lt;td&gt;&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
</code></pre><h3 id="_1、table的属性" tabindex="-1"><a class="header-anchor" href="#_1、table的属性" aria-hidden="true">#</a> 1、table的属性</h3><pre><code>width   height   bgcolor   align(left right center)   border:边框，px像素
cellpadding:内边距（单元格边框与内容之间的距离）
cellspacing:外边距（单元格与单元格之间的距离）
</code></pre><h3 id="_2、tr的属性" tabindex="-1"><a class="header-anchor" href="#_2、tr的属性" aria-hidden="true">#</a> 2、tr的属性</h3><pre><code>align(left center right):设置该行内容的水平对齐方式    
valign(top middle bottom):设置该行内容的垂直对齐方式
</code></pre><h3 id="_3、td的属性" tabindex="-1"><a class="header-anchor" href="#_3、td的属性" aria-hidden="true">#</a> 3、td的属性</h3><pre><code>align    valign    width    height
colspan:单元格跨列（向右合并单元格）
rowspan:单元格跨行（向下合并单元格）
</code></pre><h3 id="_4、表格的复杂应用" tabindex="-1"><a class="header-anchor" href="#_4、表格的复杂应用" aria-hidden="true">#</a> 4、表格的复杂应用</h3><pre><code>根据行的不同，划分成不同的组；表格的嵌套
表头&lt;thead&gt;   表主题&lt;tbody&gt;   表尾&lt;tfoot&gt;
表头标题&lt;th&gt;&lt;/th&gt;
</code></pre><h2 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h2><p>从上到下，成列；从左到右，成行</p><h3 id="_1、有序列表-单独成行-做导航用" tabindex="-1"><a class="header-anchor" href="#_1、有序列表-单独成行-做导航用" aria-hidden="true">#</a> 1、有序列表 单独成行，做导航用</h3><pre><code>&lt;ol type=&quot;A&quot; start=&quot;2&quot;&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
&lt;/ol&gt;

type列表类型：数字(默认)  小写字母   大写字母   小写罗马数字   大写罗马数字
start起始编号：一定是数字
</code></pre><h3 id="_2、无序列表" tabindex="-1"><a class="header-anchor" href="#_2、无序列表" aria-hidden="true">#</a> 2、无序列表</h3><pre><code>&lt;ul type=&quot;circle&quot;&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
&lt;/ul&gt;

type列表类型：disc(实心圆，默认)  circle(空心圆)  square(实心矩形)
</code></pre><h3 id="_3、自定义列表" tabindex="-1"><a class="header-anchor" href="#_3、自定义列表" aria-hidden="true">#</a> 3、自定义列表</h3><pre><code>用于给出一类事物的解释，如名词解释。做图文混排布局。
&lt;dl&gt;
    &lt;dt&gt;列表内容标题&lt;/dt&gt;   &lt;!-- dt和dd不是嵌套，是并列关系 --&gt;
    &lt;dd&gt;列表数据&lt;/dd&gt;
&lt;/dl&gt;
</code></pre><h3 id="_4、列表的嵌套" tabindex="-1"><a class="header-anchor" href="#_4、列表的嵌套" aria-hidden="true">#</a> 4、列表的嵌套</h3>`,39),h=[n];function l(o,i){return e(),a("div",null,h)}const g=t(d,[["render",l],["__file","04-HTML基础.html.vue"]]);export{g as default};

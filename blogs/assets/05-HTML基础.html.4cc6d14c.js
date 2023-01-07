import{_ as e,o as t,c as a,f as n}from"./app.551a4d03.js";const r={},d=n(`<h1 id="html基础3" tabindex="-1"><a class="header-anchor" href="#html基础3" aria-hidden="true">#</a> HTML基础3</h1><h2 id="结构标记" tabindex="-1"><a class="header-anchor" href="#结构标记" aria-hidden="true">#</a> 结构标记</h2><h3 id="_1、作用" tabindex="-1"><a class="header-anchor" href="#_1、作用" aria-hidden="true">#</a> 1、作用</h3><pre><code>增强标签的语义性。HTML5出来之前，我们用div来表示页面章节，但是这些div都没有实际意义。这些标签只是我们提供给浏览器的指令，只是定义一个网页的某些部分，适合做容器。
</code></pre><h3 id="_2、语义标签优点" tabindex="-1"><a class="header-anchor" href="#_2、语义标签优点" aria-hidden="true">#</a> 2、语义标签优点</h3><pre><code>更容易被搜索引擎收录；
更容易让屏幕阅读器读出网页内容；
能够更好的体现页面的主题；
兼容性更好，支持更多的网络设备。
</code></pre><h3 id="_3、h5新增语义标签" tabindex="-1"><a class="header-anchor" href="#_3、h5新增语义标签" aria-hidden="true">#</a> 3、H5新增语义标签</h3><pre><code>header(头部)
nav(只是导航+列表)
section(小结，内容具体部分)
article(文章)
footer(底部信息)
aside(侧边栏)

旧：\`&lt;div id=&quot;header&quot;&gt;&lt;/div&gt;\`
新：\`&lt;header class=&quot;&quot;&gt;&lt;/header&gt;\`  可以嵌套多次使用。也可以与div相互嵌套使用。
</code></pre><h2 id="表单" tabindex="-1"><a class="header-anchor" href="#表单" aria-hidden="true">#</a> 表单</h2><h3 id="_1、作用-1" tabindex="-1"><a class="header-anchor" href="#_1、作用-1" aria-hidden="true">#</a> 1、作用</h3><pre><code>用于搜集不同类型的用户输入,用户提交表单时向服务器传输数据，从而实现用户与Web服务器的交互。
&lt;form&gt;
    &lt;!-- 表单元素 --&gt;
&lt;/form&gt;
</code></pre><h3 id="_2、表单属性" tabindex="-1"><a class="header-anchor" href="#_2、表单属性" aria-hidden="true">#</a> 2、表单属性</h3><pre><code>name:表单的名称，如果未写name，服务器无法获得表单内容。
action：提交表单时，向何处发送表单数据；
method：定义浏览器将表单中的数据提交给服务器的方式，默认get;
    当表单中有用户信息时，将get改为post。
enctype:规定在发送到服务器之前应该如何对表单数据进行编码。
    默认：application/x-www-form-urlencoded
    如有文件上传：multipart/form-data

注意
name： 属性是和服务器通信时使用的名称；
class： 用于CSS中
id： 属性是浏览器端使用的名称，主要是为了方便客户端编程而在css和JavaScript中使用的。
</code></pre><h2 id="表单元素-在表单中与用户进行交互的控件" tabindex="-1"><a class="header-anchor" href="#表单元素-在表单中与用户进行交互的控件" aria-hidden="true">#</a> 表单元素（在表单中与用户进行交互的控件）</h2><h3 id="_1、input-文本框、密码框" tabindex="-1"><a class="header-anchor" href="#_1、input-文本框、密码框" aria-hidden="true">#</a> 1、input:文本框、密码框</h3><pre><code>&lt;input type=&quot;text&quot;/&gt;  文本框
&lt;input type=&quot;password&quot;&gt; 密码框
&lt;input type=&quot;radio&quot;/&gt;  单选按钮  分组name,初始值value要写   checked=&quot;checked&quot;默认
&lt;input type=&quot;checkbox&quot;&gt; 复选框   分组name,初始值value要写   checked=&quot;checked&quot;默认
&lt;input type=&quot;submit&quot;&gt;  提交按钮  无name ，写初始值
&lt;input type=&quot;reset&quot;&gt;  重置按钮
&lt;input type=&quot;button&quot;&gt;  普通按钮
&lt;input type=&quot;file&quot;&gt;  文件选择框  如有文件上传：enctype=&quot;multipart/form-data&quot;
&lt;input type=&quot;hidden&quot;&gt; 隐藏域 通常用于向服务器提交不需要显示给用户的信息，用户看不到。

type:默认文本框，写什么显示什么；
name:表单的名称；
value:显示在控件上的初始值；
maxlength:用户输入的最大字符长度；
id:唯一标识；
readonly:只读属性，用户不能改变控件中的value；
disabled：禁用，控件会显示灰色背景，用户不能改变文本框和密码框的值。并且在提交表单时，浏览器不会将该文本框和密码框的值发送给服务器。
</code></pre><h3 id="_2、readonly与disabled的区别" tabindex="-1"><a class="header-anchor" href="#_2、readonly与disabled的区别" aria-hidden="true">#</a> 2、readonly与disabled的区别</h3><pre><code>readonly只针对input(text/password)和textarea有效，而disabled对于所有的表单元素都有效，但是表单元素在使用了disabled后，当我们将表单提交的话，这个元素的值不会被传递出去，而readonly会将该值传递出去。
</code></pre><h3 id="_3、关联文本与表单元素label文本" tabindex="-1"><a class="header-anchor" href="#_3、关联文本与表单元素label文本" aria-hidden="true">#</a> 3、关联文本与表单元素label文本</h3><pre><code>&lt;label&gt; 标签为 input 元素定义标签。label 元素不会向用户呈现任何特殊的样式。
不过，它为鼠标用户改善了可用性，因为如果用户点击label元素内的文本，则会切换到控件本身。
&lt;label&gt; 标签的for属性应该等于相关元素的id元素，以便将它们捆绑起来。

两种使用方法：
&lt;label for=&quot;username&quot;&gt;用户名：&lt;input type=&quot;text&quot; id=&quot;username&quot;/&gt;&lt;/label&gt;建议第一种  
&lt;label for=&quot;username&quot;&gt;用户名：&lt;/label&gt;&lt;input type=&quot;text&quot; id=&quot;username&quot;/&gt;
</code></pre><h3 id="_4、textarea-多文本输入框" tabindex="-1"><a class="header-anchor" href="#_4、textarea-多文本输入框" aria-hidden="true">#</a> 4、textarea:多文本输入框</h3><pre><code>属性：name    cols:规定文本区可见宽度  rows：规定文本区可见行数
默认用户可更改大小,禁止：style=&quot;resize:none&quot;
</code></pre><h3 id="_5、select和option-下拉框" tabindex="-1"><a class="header-anchor" href="#_5、select和option-下拉框" aria-hidden="true">#</a> 5、select和option：下拉框</h3><pre><code>&lt;select name=&quot;city&quot; size=&quot;3&quot;&gt;  
    &lt;option value=&quot;bj&quot;&gt;北京&lt;/option&gt;
    &lt;option value=&quot;sh&quot;&gt;上海&lt;/option&gt;
    &lt;option value=&quot;gz&quot;&gt;广州&lt;/option&gt;
    &lt;option value=&quot;dl&quot;&gt;大连&lt;/option&gt;
&lt;/select&gt;
   
select属性：name    size(大于1，从下拉列表变为滚动列表)   multiple(设置多选)
option属性：value   selected(预选中)
</code></pre><h2 id="表单元素——其他元素" tabindex="-1"><a class="header-anchor" href="#表单元素——其他元素" aria-hidden="true">#</a> 表单元素——其他元素</h2><h3 id="_1、浮动框架" tabindex="-1"><a class="header-anchor" href="#_1、浮动框架" aria-hidden="true">#</a> 1、浮动框架</h3><pre><code>&lt;iframe&gt;&lt;/iframe&gt;
属性：src    width    height    frameborder(0,不带边框;1,带边框)
</code></pre><h3 id="_2、摘要与细节" tabindex="-1"><a class="header-anchor" href="#_2、摘要与细节" aria-hidden="true">#</a> 2、摘要与细节</h3><pre><code>将一部分内容进行展示与收缩
&lt;details&gt;
    &lt;summary&gt;标题&lt;/summary&gt;
    显示的内容
&lt;/details&gt;
</code></pre><h3 id="_3、度量元素" tabindex="-1"><a class="header-anchor" href="#_3、度量元素" aria-hidden="true">#</a> 3、度量元素</h3><pre><code>&lt;meter&gt;&lt;/meter&gt;
属性：min(最小值，默认0)  max(最大值，默认1)   value(当前值，默认0)
</code></pre><h3 id="_4、分组元素" tabindex="-1"><a class="header-anchor" href="#_4、分组元素" aria-hidden="true">#</a> 4、分组元素</h3><pre><code>&lt;fieldset&gt;
    &lt;legend&gt;组标题&lt;/legend&gt;
    内容
&lt;/fieldest&gt;
</code></pre><h3 id="_5、高亮文本显示-标记" tabindex="-1"><a class="header-anchor" href="#_5、高亮文本显示-标记" aria-hidden="true">#</a> 5、高亮文本显示(标记)</h3><pre><code>&lt;mark&gt;&lt;/mark&gt;
</code></pre><h2 id="五、浮动框架-iframe" tabindex="-1"><a class="header-anchor" href="#五、浮动框架-iframe" aria-hidden="true">#</a> 五、浮动框架（iframe）</h2><pre><code>在一个浏览器中同时显示多个页面文档
&lt;iframe&gt;&lt;/iframe&gt;
</code></pre><p>属性:</p><pre><code>1、src : 引入的网页路径(url)
2、 width : 宽度
3、 height : 高度
4、 frameborder : 边框(取值0或1)
</code></pre>`,39),o=[d];function i(h,l){return t(),a("div",null,o)}const u=e(r,[["render",i],["__file","05-HTML基础.html.vue"]]);export{u as default};

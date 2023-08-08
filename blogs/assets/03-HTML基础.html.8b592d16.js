import{_ as e,o as t,c as n,f as a}from"./app.034b081e.js";const o={},d=a(`<h1 id="html基础1" tabindex="-1"><a class="header-anchor" href="#html基础1" aria-hidden="true">#</a> HTML基础1</h1><h2 id="万维网" tabindex="-1"><a class="header-anchor" href="#万维网" aria-hidden="true">#</a> 万维网</h2><pre><code>前端是指页面的表现形式，浏览器负责解释html页面
万维网联盟 WWW
元素属性（元素的最完整表现）
</code></pre><h2 id="html文档结构" tabindex="-1"><a class="header-anchor" href="#html文档结构" aria-hidden="true">#</a> HTML文档结构</h2><pre><code>&lt;!doctype html&gt;         文档声明
&lt;html&gt;                  根元素
    &lt;head&gt;               	头部
        &lt;meta charset=&quot;UTF-8&quot;&gt;  声明元数据
        &lt;title&gt;1111&lt;/title&gt;     网页标题
    &lt;/head&gt;
    &lt;body&gt; 主体
        内容
    &lt;/body&gt;
&lt;/html&gt;
</code></pre><h2 id="doctype-html-作用" tabindex="-1"><a class="header-anchor" href="#doctype-html-作用" aria-hidden="true">#</a> <code>&lt;!doctype html&gt;</code>作用</h2><pre><code>文档声明，让Web浏览器知道是使用哪个版本的HTML来解释HTML页面。
</code></pre><h2 id="块级元素和行内元素" tabindex="-1"><a class="header-anchor" href="#块级元素和行内元素" aria-hidden="true">#</a> 块级元素和行内元素</h2><pre><code>1、块级元素： div h1~h6 hr p...  table    ol...li...
    默认情况下独占一行，元素前后会自动换行；
    块级元素作用：布局

2、行内元素： span b s i u...
    默认情况下多个元素位于同一行，不会换行；
    行内元素作用：修改内部内容的样式
</code></pre><h2 id="w3c万维网联盟" tabindex="-1"><a class="header-anchor" href="#w3c万维网联盟" aria-hidden="true">#</a> W3C万维网联盟</h2><pre><code>World Wide Web Consortium,简称W3C，又称W3C理事会。
W3C是Web技术领域最具权威和影响力的国际中立性技术标准机构，发布Web技术标准及实施指南。
</code></pre><h2 id="国外主流浏览器" tabindex="-1"><a class="header-anchor" href="#国外主流浏览器" aria-hidden="true">#</a> 国外主流浏览器</h2><pre><code>Google chrome浏览器，Firefox浏览器，IE浏览器，Opera浏览器，Safari浏览器
</code></pre><h2 id="封闭标签和非封闭标签" tabindex="-1"><a class="header-anchor" href="#封闭标签和非封闭标签" aria-hidden="true">#</a> 封闭标签和非封闭标签</h2><h3 id="_1、封闭标签" tabindex="-1"><a class="header-anchor" href="#_1、封闭标签" aria-hidden="true">#</a> 1、封闭标签</h3><pre><code>标题元素h1~h6    超链接a （\`href=&quot;http://www.baidu.com&quot;\`）
段落元素p
做布局div       （前三个都可以使用align属性） 
文本元素加粗b  下划线u  斜体i  删除s和del  下标sub  上标sup
修改内部样式span
预格式化pre
</code></pre><h3 id="_2、非封闭标签" tabindex="-1"><a class="header-anchor" href="#_2、非封闭标签" aria-hidden="true">#</a> 2、非封闭标签</h3><pre><code>转义字符（&amp;nbsp; &lt; &amp;lt;  &gt; &amp;gt;）
换行br
水平线hr（size、width、color、align）
图片&lt;img/&gt;
</code></pre><h2 id="meta标签作用" tabindex="-1"><a class="header-anchor" href="#meta标签作用" aria-hidden="true">#</a> meta标签作用</h2><pre><code>1. 向搜索引擎说明你的网页关键词
    \`&lt;meta name=&quot;keywords&quot; content=&quot;&quot;/&gt;\`

2. 告诉搜索引擎你的站点的主要内容
    \`&lt;meta name=&quot;description&quot; content=&quot;&quot;/&gt;\`

3. 文件或链接检索
    \`&lt;meta name=&quot;robots&quot; content=&quot;all|none|index|noindex|follow|nofollow&quot;/&gt;\`
        all:文件将被检索，且页面上的链接可以被查询
        index：文件将被检索
        follow：页面上的链接可以被查询
        none:文件将不被检索，且页面上的链接不可以被查询；
        noindex:文件将不被检索，但页面上的链接可以被查询；
        nofollow：文件将被检索，但页面上的链接不可以被查询。

4. 移动端经常使用此标签
    \`&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0&quot;/&gt;\`

5. 定时让网页在指定的时间n内，跳转到指定页面
    \`&lt;meta http-equiv=&quot;refresh&quot; content=&quot;n;url=http://yourlink&quot;/&gt;\`

6. Edge:始终以最新的文档模式来渲染页面
    \`&lt;meta http-equiv=&quot;x-ua-compatible&quot; content=&quot;IE=Edge&quot;/&gt;\`
</code></pre><h2 id="元素嵌套-标签嵌套" tabindex="-1"><a class="header-anchor" href="#元素嵌套-标签嵌套" aria-hidden="true">#</a> 元素嵌套（标签嵌套）</h2><pre><code>块级元素可以嵌套块级元素与行内元素
P标签虽然是块级元素，但只能嵌套行内元素
行内元素不能嵌套块级元素
</code></pre>`,22),r=[d];function h(i,c){return t(),n("div",null,r)}const u=e(o,[["render",h],["__file","03-HTML基础.html.vue"]]);export{u as default};

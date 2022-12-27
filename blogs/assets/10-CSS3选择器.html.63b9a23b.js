import{_ as e,o as t,c as o,f as d}from"./app.3f8066ad.js";const p={},c=d(`<h1 id="css3选择器" tabindex="-1"><a class="header-anchor" href="#css3选择器" aria-hidden="true">#</a> CSS3选择器</h1><h2 id="通用兄弟选择器" tabindex="-1"><a class="header-anchor" href="#通用兄弟选择器" aria-hidden="true">#</a> 通用兄弟选择器</h2><p>selector1~selector2{} 可以不相邻</p><p>例：div~p{ } 为所有相同的父元素中位于 div 元素之后的所有 p 元素设置样式</p><pre><code>&lt;div&gt;&lt;/div&gt;
   &lt;p&gt;&lt;/p&gt;
   &lt;p&gt;&lt;/p&gt;
&lt;span&gt;&lt;/span&gt;
   &lt;p&gt;&lt;/p&gt;
</code></pre><h2 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器" aria-hidden="true">#</a> 属性选择器</h2><p>1、元素[属性^=值] ^ 以值开头的class</p><p><code>例：div[class^=test]设置 class 属性值以 &quot;test&quot; 开头的所有 div 元素的样式</code></p><p>2、元素[属性*=值] *包含该值的class</p><p><code> 例：div[class*=test]设置 class 属性值包含 &quot;test&quot; 的所有 div 元素的样式</code></p><p>3、元素[属性$=值] $以该值结尾的class</p><p><code>例：div[class$=test]设置 class 属性值以 &quot;test&quot; 结尾的所有 div 元素的样式</code></p><p>伪类选择器：元素状态伪类 结构伪类 目标伪类 否定伪类</p><h2 id="元素状态伪类选择器" tabindex="-1"><a class="header-anchor" href="#元素状态伪类选择器" aria-hidden="true">#</a> 元素状态伪类选择器</h2><p>1、:enabled选择器匹配每个已启用的元素（大多用在表单元素上）</p><p><code>input[type=&quot;text&quot;]:enabled为所有 type=&quot;text&quot; 的已启用的 input 元素设置样式</code></p><p>2、:disabled选择器匹配每个被禁用的元素（大多用在表单元素上）</p><p><code>input[type=&quot;text&quot;]:disabled为所有 type=&quot;text&quot; 的被禁用的 input 元素设置样式</code></p><p>3、:checked选择器匹配每个已被选中的input元素（只用于单选按钮和复选框）</p><p><code>input:checked{}为所有被选中的 input 元素设置样式</code><code>目前只有Opera浏览器支持。</code></p><p>4、::selection选择器匹配被用户选区的部分，只能向::selection选择器应用少量CSS属性，color、background、cursor、outline。</p><pre><code>div::selection{
    background-color:red;
}
</code></pre><h2 id="结构伪类选择器" tabindex="-1"><a class="header-anchor" href="#结构伪类选择器" aria-hidden="true">#</a> 结构伪类选择器</h2><p>1、:first-of-type 选择器匹配属于其父元素的特定类型的首个子元素的每个元素。</p><pre><code>div p:first-of-type{color:red;}
</code></pre><p>2、:last-of-type 选择器匹配属于其父元素的特定类型的最后一个子元素的每个元素。</p><pre><code>div p:last-of-type{color:red;}
</code></pre><p>3、:only-of-type 选择器匹配属于其父元素的特定类型的唯一子元素的每个元素。</p><pre><code>div p:only-of-type{color:red;}
</code></pre><p>4、:nth-of-type(n) 选择器匹配属于父元素的特定类型的第n个子元素的每个元素。</p><pre><code>p:nth-of-type(3){color:red;}
</code></pre><p>5、:nth-last-of-type(n) 选择器匹配属于父元素的特定类型的第n个子元素的每个元素，从最后一个子元素开始计数。</p><pre><code>p:nth-last-of-type(3){color:red;}
</code></pre><p>6、:only-child 选择器匹配属于其父元素的唯一子元素的每个元素。</p><pre><code>div p:only-child{color:red;}
</code></pre><p>7、:nth-child(n)选择器匹配属于其父元素的第n个子元素，不论元素的类型。</p><pre><code>ul li:nth-child(2){color:red;}
ul li:nth-child(odd){color:red;}    匹配下标是奇数的子元素
ul li:nth-child(even){color:red;}   匹配下标是偶数的子元素
</code></pre><p>8、:nth-last-child(n)选择器匹配属于其元素的第n个子元素的每个元素，不论元素的类型，从最后一个子元素开始计数。</p><pre><code>ul li:nth-last-child(2){color:red;}
</code></pre><p>9、:last-child选择器匹配属于其父元素的最后一个子元素的每个元素。</p><pre><code>p:last-child{color:red;}
</code></pre><p>10、:root选择器匹配文档根元素</p><pre><code>:root是CSS3的选择器，因此我们可以通过次选择器判断浏览器是否支持CSS3。
</code></pre><p>11、:empty选择器匹配没有子元素（包括文本节点）的每个元素。</p><pre><code>div:empty{}
</code></pre><h2 id="目标伪类选择器" tabindex="-1"><a class="header-anchor" href="#目标伪类选择器" aria-hidden="true">#</a> 目标伪类选择器</h2><p>URL后面跟有锚名称#，指向文档内某个具体的元素。这个被链接的元素就是目标元素。</p><pre><code>:target选择器可用于选取当前活动的目标元素。
&lt;a href=&quot;d1&quot;&gt;&lt;/a&gt;   &lt;div id=&quot;d1&quot;&gt;&lt;/div&gt;
</code></pre><h2 id="否定伪类选择器" tabindex="-1"><a class="header-anchor" href="#否定伪类选择器" aria-hidden="true">#</a> 否定伪类选择器</h2><p>:not()选择器匹配非指定元素/选择器的每个元素。</p><pre><code>:not(p)设置非&lt;p&gt;元素的所有元素的样式。
ul&gt;li:not(:last-child){color:red;}
</code></pre>`,51),r=[c];function n(l,a){return t(),o("div",null,r)}const s=e(p,[["render",n],["__file","10-CSS3选择器.html.vue"]]);export{s as default};

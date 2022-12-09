import{_ as n,o as s,c as a,f as t}from"./app.26d50059.js";const p={},o=t(`<h1 id="js-常用-api" tabindex="-1"><a class="header-anchor" href="#js-常用-api" aria-hidden="true">#</a> JS 常用 API</h1><h2 id="_1-节点" tabindex="-1"><a class="header-anchor" href="#_1-节点" aria-hidden="true">#</a> 1. 节点</h2><h3 id="_1-1-节点属性" tabindex="-1"><a class="header-anchor" href="#_1-1-节点属性" aria-hidden="true">#</a> 1.1 节点属性</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Node<span class="token punctuation">.</span>nodeName<span class="token punctuation">;</span> <span class="token comment">// 返回节点名称，只读</span>
Node<span class="token punctuation">.</span>nodeType<span class="token punctuation">;</span> <span class="token comment">// 返回节点类型的常数值，只读</span>
Node<span class="token punctuation">.</span>nodeValue<span class="token punctuation">;</span> <span class="token comment">// 返回Text或Comment节点的文本值，只读</span>
Node<span class="token punctuation">.</span>textContent<span class="token punctuation">;</span> <span class="token comment">// 返回当前节点和它的所有后代节点的文本内容，可读写</span>
Node<span class="token punctuation">.</span>baseURI<span class="token punctuation">;</span> <span class="token comment">// 返回当前网页的绝对路径</span>

Node<span class="token punctuation">.</span>ownerDocument<span class="token punctuation">;</span> <span class="token comment">// 返回当前节点所在的顶层文档对象，即document</span>
Node<span class="token punctuation">.</span>nextSibling<span class="token punctuation">;</span> <span class="token comment">// 返回紧跟在当前节点后面的第一个兄弟节点</span>
Node<span class="token punctuation">.</span>previousSibling<span class="token punctuation">;</span> <span class="token comment">// 返回当前节点前面的、距离最近的一个兄弟节点</span>
Node<span class="token punctuation">.</span>parentNode<span class="token punctuation">;</span> <span class="token comment">// 返回当前节点的父节点</span>
Node<span class="token punctuation">.</span>parentElement<span class="token punctuation">;</span> <span class="token comment">// 返回当前节点的父Element节点</span>
Node<span class="token punctuation">.</span>childNodes<span class="token punctuation">;</span> <span class="token comment">// 返回当前节点的所有子节点</span>
Node<span class="token punctuation">.</span>firstChild<span class="token punctuation">;</span> <span class="token comment">// 返回当前节点的第一个子节点</span>
Node<span class="token punctuation">.</span>lastChild<span class="token punctuation">;</span> <span class="token comment">// 返回当前节点的最后一个子节点</span>

<span class="token comment">// parentNode接口</span>
Node<span class="token punctuation">.</span>children<span class="token punctuation">;</span> <span class="token comment">// 返回指定节点的所有Element子节点</span>
Node<span class="token punctuation">.</span>firstElementChild<span class="token punctuation">;</span> <span class="token comment">// 返回当前节点的第一个Element子节点</span>
Node<span class="token punctuation">.</span>lastElementChild<span class="token punctuation">;</span> <span class="token comment">// 返回当前节点的最后一个Element子节点</span>
Node<span class="token punctuation">.</span>childElementCount<span class="token punctuation">;</span> <span class="token comment">// 返回当前节点所有Element子节点的数目。</span>
</code></pre></div><h3 id="_1-2-操作" tabindex="-1"><a class="header-anchor" href="#_1-2-操作" aria-hidden="true">#</a> 1.2 操作</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Node<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 向节点添加最后一个子节点</span>
Node<span class="token punctuation">.</span><span class="token function">hasChildNodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回布尔值，表示当前节点是否有子节点</span>
Node<span class="token punctuation">.</span><span class="token function">cloneNode</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//  默认为false(克隆节点) , true(克隆节点及其属性，以及后代)</span>
Node<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>newNode<span class="token punctuation">,</span> oldNode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//  在指定子节点之前插入新的子节点</span>
Node<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 删除节点，在要删除节点的父节点上操作</span>
Node<span class="token punctuation">.</span><span class="token function">replaceChild</span><span class="token punctuation">(</span>newChild<span class="token punctuation">,</span> oldChild<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 替换节点</span>
Node<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回一个布尔值，表示参数节点是否为当前节点的后代节点。</span>
Node<span class="token punctuation">.</span><span class="token function">compareDocumentPosition</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回一个7个比特位的二进制值，表示参数节点和当前节点的关系</span>
Node<span class="token punctuation">.</span><span class="token function">isEqualNode</span><span class="token punctuation">(</span>noe<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回布尔值，用于检查两个节点是否相等。所谓相等的节点，指的是两个节点的类型相同、属性相同、子节点相同。</span>
Node<span class="token punctuation">.</span><span class="token function">normalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 用于清理当前节点内部的所有Text节点。它会去除空的文本节点，并且将毗邻的文本节点合并成一个。</span>

<span class="token comment">// ChildNode接口</span>
Node<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 用于删除当前节点</span>
Node<span class="token punctuation">.</span><span class="token function">before</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//</span>
Node<span class="token punctuation">.</span><span class="token function">after</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Node<span class="token punctuation">.</span><span class="token function">replaceWith</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_1-3-document-节点" tabindex="-1"><a class="header-anchor" href="#_1-3-document-节点" aria-hidden="true">#</a> 1.3 Document 节点</h3><h4 id="_1-3-1-document-节点的属性" tabindex="-1"><a class="header-anchor" href="#_1-3-1-document-节点的属性" aria-hidden="true">#</a> 1.3.1 Document 节点的属性</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>doctype   <span class="token comment">//</span>
document<span class="token punctuation">.</span>documentElement  <span class="token comment">// 返回当前文档的根节点</span>
document<span class="token punctuation">.</span>defaultView   <span class="token comment">// 返回document对象所在的window对象</span>
document<span class="token punctuation">.</span>body   <span class="token comment">// 返回当前文档的&lt;body&gt;节点</span>
document<span class="token punctuation">.</span>head   <span class="token comment">// 返回当前文档的&lt;head&gt;节点</span>
document<span class="token punctuation">.</span>activeElement  <span class="token comment">// 返回当前文档中获得焦点的那个元素。</span>

<span class="token comment">// 节点集合属性</span>
document<span class="token punctuation">.</span>links  <span class="token comment">// 返回当前文档的所有a元素</span>
document<span class="token punctuation">.</span>forms  <span class="token comment">// 返回页面中所有表单元素</span>
document<span class="token punctuation">.</span>images  <span class="token comment">// 返回页面中所有图片元素</span>
document<span class="token punctuation">.</span>embeds  <span class="token comment">// 返回网页中所有嵌入对象</span>
document<span class="token punctuation">.</span>scripts  <span class="token comment">// 返回当前文档的所有脚本</span>
document<span class="token punctuation">.</span>styleSheets  <span class="token comment">// 返回当前网页的所有样式表</span>

<span class="token comment">// 文档信息属性</span>
document<span class="token punctuation">.</span>documentURI  <span class="token comment">// 表示当前文档的网址</span>
document<span class="token punctuation">.</span><span class="token constant">URL</span>  <span class="token comment">// 返回当前文档的网址</span>
document<span class="token punctuation">.</span>domain  <span class="token comment">// 返回当前文档的域名</span>
document<span class="token punctuation">.</span>lastModified  <span class="token comment">// 返回当前文档最后修改的时间戳</span>
document<span class="token punctuation">.</span>location  <span class="token comment">// 返回location对象，提供当前文档的URL信息</span>
document<span class="token punctuation">.</span>referrer  <span class="token comment">// 返回当前文档的访问来源</span>
document<span class="token punctuation">.</span>title    <span class="token comment">// 返回当前文档的标题</span>
document<span class="token punctuation">.</span>characterSet属性返回渲染当前文档的字符集，比如<span class="token constant">UTF</span><span class="token operator">-</span><span class="token number">8</span>、<span class="token constant">ISO</span><span class="token operator">-</span><span class="token number">8859</span><span class="token operator">-</span><span class="token number">1</span>。
document<span class="token punctuation">.</span>readyState  <span class="token comment">// 返回当前文档的状态</span>
document<span class="token punctuation">.</span>designMode  <span class="token comment">// 控制当前文档是否可编辑，可读写</span>
document<span class="token punctuation">.</span>compatMode  <span class="token comment">// 返回浏览器处理文档的模式</span>
document<span class="token punctuation">.</span>cookie   <span class="token comment">// 用来操作Cookie</span>
</code></pre></div><h4 id="_1-3-2-document-节点的方法" tabindex="-1"><a class="header-anchor" href="#_1-3-2-document-节点的方法" aria-hidden="true">#</a> 1.3.2 Document 节点的方法</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 读写方法
document<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// 用于新建并打开一个文档</span>
document<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// 不安比open方法所新建的文档</span>
document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// 用于向当前文档写入内容</span>
document<span class="token punctuation">.</span><span class="token function">writeIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 用于向当前文档写入内容，尾部添加换行符。</span>

<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> 查找节点
document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>selectors<span class="token punctuation">)</span>   <span class="token comment">// 接受一个CSS选择器作为参数，返回第一个匹配该选择器的元素节点。</span>
document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span>selectors<span class="token punctuation">)</span>  <span class="token comment">// 接受一个CSS选择器作为参数，返回所有匹配该选择器的元素节点。</span>
document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span>tagName<span class="token punctuation">)</span>  <span class="token comment">// 返回所有指定HTML标签的元素</span>
document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span>   <span class="token comment">// 返回包括了所有class名字符合指定条件的元素</span>
document<span class="token punctuation">.</span><span class="token function">getElementsByName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>   <span class="token comment">// 用于选择拥有name属性的HTML元素(比如&lt;form&gt;、&lt;radio&gt;、&lt;img&gt;、&lt;frame&gt;、&lt;embed&gt;和&lt;object&gt;等)</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>   <span class="token comment">// 返回匹配指定id属性的元素节点。</span>
document<span class="token punctuation">.</span><span class="token function">elementFromPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span>  <span class="token comment">// 返回位于页面指定位置最上层的Element子节点。</span>

<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> 生成节点
document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>tagName<span class="token punctuation">)</span>   <span class="token comment">// 用来生成HTML元素节点。</span>
document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>   <span class="token comment">// 用来生成文本节点</span>
document<span class="token punctuation">.</span><span class="token function">createAttribute</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>  <span class="token comment">// 生成一个新的属性对象节点，并返回它。</span>
document<span class="token punctuation">.</span><span class="token function">createDocumentFragment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 生成一个DocumentFragment对象</span>

<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> 事件方法
document<span class="token punctuation">.</span><span class="token function">createEvent</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>   <span class="token comment">// 生成一个事件对象，该对象能被element.dispatchEvent() 方法使用</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span>listener<span class="token punctuation">,</span>capture<span class="token punctuation">)</span>  <span class="token comment">// 注册事件</span>
document<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span>listener<span class="token punctuation">,</span>capture<span class="token punctuation">)</span>  <span class="token comment">// 注销事件</span>
document<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span>  <span class="token comment">// 触发事件</span>

<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> 其他
document<span class="token punctuation">.</span><span class="token function">hasFocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// 返回一个布尔值，表示当前文档之中是否有元素被激活或获得焦点。</span>
document<span class="token punctuation">.</span><span class="token function">adoptNode</span><span class="token punctuation">(</span>externalNode<span class="token punctuation">)</span>  <span class="token comment">// 将某个节点，从其原来所在的文档移除，插入当前文档，并返回插入后的新节点。</span>
document<span class="token punctuation">.</span><span class="token function">importNode</span><span class="token punctuation">(</span>externalNode<span class="token punctuation">,</span> deep<span class="token punctuation">)</span>   <span class="token comment">// 从外部文档拷贝指定节点，插入当前文档。</span>
</code></pre></div><h3 id="_1-4-element-节点" tabindex="-1"><a class="header-anchor" href="#_1-4-element-节点" aria-hidden="true">#</a> 1.4 Element 节点</h3><h4 id="_1-4-1-element-节点的属性" tabindex="-1"><a class="header-anchor" href="#_1-4-1-element-节点的属性" aria-hidden="true">#</a> 1.4.1 Element 节点的属性</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 特性属性
Element<span class="token punctuation">.</span>attributes  <span class="token comment">// 返回当前元素节点的所有属性节点</span>
Element<span class="token punctuation">.</span>id  <span class="token comment">// 返回指定元素的id属性，可读写</span>
Element<span class="token punctuation">.</span>tagName  <span class="token comment">// 返回指定元素的大写标签名</span>
Element<span class="token punctuation">.</span>innerHTML   <span class="token comment">// 返回该元素包含的HTML代码，可读写</span>
Element<span class="token punctuation">.</span>outerHTML  <span class="token comment">// 返回指定元素节点的所有HTML代码，包括它自身和包含的的所有子元素，可读写</span>
Element<span class="token punctuation">.</span>className  <span class="token comment">// 返回当前元素的class属性，可读写</span>
Element<span class="token punctuation">.</span>classList  <span class="token comment">// 返回当前元素节点的所有class集合</span>
Element<span class="token punctuation">.</span>dataset   <span class="token comment">// 返回元素节点中所有的data-*属性。</span>

<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> 尺寸属性
Element<span class="token punctuation">.</span>clientHeight   <span class="token comment">// 返回元素节点可见部分的高度</span>
Element<span class="token punctuation">.</span>clientWidth   <span class="token comment">// 返回元素节点可见部分的宽度</span>
Element<span class="token punctuation">.</span>clientLeft   <span class="token comment">// 返回元素节点左边框的宽度</span>
Element<span class="token punctuation">.</span>clientTop   <span class="token comment">// 返回元素节点顶部边框的宽度</span>
Element<span class="token punctuation">.</span>scrollHeight  <span class="token comment">// 返回元素节点的总高度</span>
Element<span class="token punctuation">.</span>scrollWidth  <span class="token comment">// 返回元素节点的总宽度</span>
Element<span class="token punctuation">.</span>scrollLeft   <span class="token comment">// 返回元素节点的水平滚动条向右滚动的像素数值,通过设置这个属性可以改变元素的滚动位置</span>
Element<span class="token punctuation">.</span>scrollTop   <span class="token comment">// 返回元素节点的垂直滚动向下滚动的像素数值</span>
Element<span class="token punctuation">.</span>offsetHeight   <span class="token comment">// 返回元素的垂直高度(包含border,padding)</span>
Element<span class="token punctuation">.</span>offsetWidth    <span class="token comment">// 返回元素的水平宽度(包含border,padding)</span>
Element<span class="token punctuation">.</span>offsetLeft    <span class="token comment">// 返回当前元素左上角相对于Element.offsetParent节点的垂直偏移</span>
Element<span class="token punctuation">.</span>offsetTop   <span class="token comment">// 返回水平位移</span>
Element<span class="token punctuation">.</span>style  <span class="token comment">// 返回元素节点的行内样式</span>

<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> 节点相关属性
Element<span class="token punctuation">.</span>children   <span class="token comment">// 包括当前元素节点的所有子元素</span>
Element<span class="token punctuation">.</span>childElementCount   <span class="token comment">// 返回当前元素节点包含的子HTML元素节点的个数</span>
Element<span class="token punctuation">.</span>firstElementChild  <span class="token comment">// 返回当前节点的第一个Element子节点</span>
Element<span class="token punctuation">.</span>lastElementChild   <span class="token comment">// 返回当前节点的最后一个Element子节点</span>
Element<span class="token punctuation">.</span>nextElementSibling  <span class="token comment">// 返回当前元素节点的下一个兄弟HTML元素节点</span>
Element<span class="token punctuation">.</span>previousElementSibling  <span class="token comment">// 返回当前元素节点的前一个兄弟HTML节点</span>
Element<span class="token punctuation">.</span>offsetParent   <span class="token comment">// 返回当前元素节点的最靠近的、并且CSS的position属性不等于static的父元素。</span>
</code></pre></div><h4 id="_1-4-2-element-节点的方法" tabindex="-1"><a class="header-anchor" href="#_1-4-2-element-节点的方法" aria-hidden="true">#</a> 1.4.2 Element 节点的方法</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 位置方法
<span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//  getBoundingClientRect返回一个对象，包含top,left,right,bottom,width,height //  width、height 元素自身宽高</span>
<span class="token comment">//  top 元素上外边界距窗口最上面的距离</span>
<span class="token comment">//  right 元素右外边界距窗口最上面的距离</span>
<span class="token comment">//  bottom 元素下外边界距窗口最上面的距离</span>
<span class="token comment">//  left 元素左外边界距窗口最上面的距离</span>
<span class="token comment">//  width 元素自身宽(包含border,padding)</span>
<span class="token comment">//  height 元素自身高(包含border,padding)</span>

<span class="token function">getClientRects</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// 返回当前元素在页面上形参的所有矩形。</span>
<span class="token comment">//  元素在页面上的偏移量</span>
<span class="token keyword">var</span> rect <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">return</span> <span class="token punctuation">{</span>
<span class="token literal-property property">top</span><span class="token operator">:</span> rect<span class="token punctuation">.</span>top <span class="token operator">+</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop<span class="token punctuation">,</span>
<span class="token literal-property property">left</span><span class="token operator">:</span> rect<span class="token punctuation">.</span>left <span class="token operator">+</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollLeft
<span class="token punctuation">}</span>

<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> 属性方法
Element<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ：读取指定属性
Element<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ：设置指定属性
Element<span class="token punctuation">.</span><span class="token function">hasAttribute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ：返回一个布尔值，表示当前元素节点是否有指定的属性
Element<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token function">：移除指定属性</span>

<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> 查找方法
Element<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
Element<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
Element<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
Element<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> 事件方法
Element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ：添加事件的回调函数
Element<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ：移除事件监听函数
Element<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ：触发事件

<span class="token comment">// ie8</span>
Element<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span>oneventName<span class="token punctuation">,</span>listener<span class="token punctuation">)</span>
Element<span class="token punctuation">.</span><span class="token function">detachEvent</span><span class="token punctuation">(</span>oneventName<span class="token punctuation">,</span>listener<span class="token punctuation">)</span>

<span class="token comment">//  event对象</span>
<span class="token keyword">var</span> event <span class="token operator">=</span> window<span class="token punctuation">.</span>event<span class="token operator">||</span>event<span class="token punctuation">;</span>

<span class="token comment">//  事件的目标节点</span>
<span class="token keyword">var</span> target <span class="token operator">=</span> event<span class="token punctuation">.</span>target <span class="token operator">||</span> event<span class="token punctuation">.</span>srcElement<span class="token punctuation">;</span>

<span class="token comment">//  事件代理</span>
ul<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> 其他
Element<span class="token punctuation">.</span><span class="token function">scrollIntoView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// 滚动当前元素，进入浏览器的可见区域</span>

<span class="token comment">// 解析HTML字符串，然后将生成的节点插入DOM树的指定位置。</span>
Element<span class="token punctuation">.</span><span class="token function">insertAdjacentHTML</span><span class="token punctuation">(</span>where<span class="token punctuation">,</span> htmlString<span class="token punctuation">)</span> <span class="token punctuation">;</span>
Element<span class="token punctuation">.</span><span class="token function">insertAdjacentHTML</span><span class="token punctuation">(</span><span class="token string">&#39;beforeBegin&#39;</span><span class="token punctuation">,</span> htmlString<span class="token punctuation">)</span> <span class="token punctuation">;</span> <span class="token comment">//  在该元素前插入</span>
Element<span class="token punctuation">.</span><span class="token function">insertAdjacentHTML</span><span class="token punctuation">(</span><span class="token string">&#39;afterBegin&#39;</span><span class="token punctuation">,</span> htmlString<span class="token punctuation">)</span> <span class="token punctuation">;</span> <span class="token comment">//  在该元素第一个子元素前插入</span>
Element<span class="token punctuation">.</span><span class="token function">insertAdjacentHTML</span><span class="token punctuation">(</span><span class="token string">&#39;beforeEnd&#39;</span><span class="token punctuation">,</span> htmlString<span class="token punctuation">)</span> <span class="token punctuation">;</span> <span class="token comment">//  在该元素最后一个子元素后面插入</span>
Element<span class="token punctuation">.</span><span class="token function">insertAdjacentHTML</span><span class="token punctuation">(</span><span class="token string">&#39;afterEnd&#39;</span><span class="token punctuation">,</span> htmlString<span class="token punctuation">)</span> <span class="token punctuation">;</span> <span class="token comment">//  在该元素后插入</span>

Element<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 用于将当前元素节点从DOM中移除</span>
Element<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// 用于将当前页面的焦点，转移到指定元素上</span>
</code></pre></div><h2 id="_2-对象" tabindex="-1"><a class="header-anchor" href="#_2-对象" aria-hidden="true">#</a> 2. 对象</h2><h3 id="_2-1-object-对象" tabindex="-1"><a class="header-anchor" href="#_2-1-object-对象" aria-hidden="true">#</a> 2.1 Object 对象</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 生成实例对象
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> 属性
Object<span class="token punctuation">.</span>name <span class="token comment">// &quot;Object&quot;</span>
Object<span class="token punctuation">.</span>length <span class="token comment">// 1</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype <span class="token comment">// 返回原型对象</span>

<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> 方法
<span class="token comment">// ES6 以前</span>
Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 创建一个对象</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 定义对象属性</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 定义多个对象属性</span>
Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// 遍历对象属性，包含不可枚举属性</span>
Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token comment">// 获取该属性的描述对象</span>
Object<span class="token punctuation">.</span><span class="token function">getOwnPropertySymbols</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// 在给定对象自身上找到的所有 Symbol 属性的数组</span>
Object<span class="token punctuation">.</span><span class="token function">preventExtensions</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// 让一个对象不可扩展，即永远不能再添加新的属性</span>
Object<span class="token punctuation">.</span><span class="token function">isExtensible</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// 判断一个对象是否可扩展</span>
Object<span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// 将一个对象密封</span>
Object<span class="token punctuation">.</span><span class="token function">isSealed</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// 判断一个对象是否为密封</span>
Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// 冻结一个对象</span>
Object<span class="token punctuation">.</span><span class="token function">isFrozen</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// 判断一个对象是否已经被冻结</span>
Object<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;function Object() { [native code] }&quot;</span>

<span class="token comment">// ES6 新增</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token comment">// 比较两个值是否严格相等</span>
Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> source<span class="token punctuation">)</span> <span class="token comment">// 对象合并，将源对象 source 的所有自身的可枚举属性，复制到目标对象 target</span>
Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptors</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// 返回指定对象所有自身属性(非继承属性) 的描述对象</span>
Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> proto<span class="token punctuation">)</span> <span class="token comment">// 设置一个指定的对象的原型</span>
Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// 获取指定对象的原型(内部 Prototype 属性的值)</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// 返回一个数组，成员是参数对象自身的(不含继承的) 所有可遍历( enumerable ) 属性的键名</span>
Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// 返回一个数组，成员是参数对象自身的(不含继承的) 所有可遍历( enumerable ) 属性的键值</span>
Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// 返回一个数组，成员是参数对象自身的(不含继承的) 所有可遍历( enumerable ) 属性的键值对数组</span>
Object<span class="token punctuation">.</span><span class="token function">fromEntries</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 返回一个对象，Object.entries() 的逆操作，用于将一个键值对数组转为对象</span>


<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> 实例的方法
obj<span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 需要返回对象的原始值</span>
obj<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 返回当前对象对应的字符串形式，&quot;[object Object]&quot;</span>
obj<span class="token punctuation">.</span><span class="token function">toLocalString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 返回当前对象对应的本地字符串形式</span>
obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token comment">// 判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性</span>
obj<span class="token punctuation">.</span><span class="token function">propertyIsEnumerable</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token comment">// 判断某个属性是否可枚举</span>
<span class="token class-name">Obj</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">isPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// 判断当前对象是否为另一个对象的原型</span>
caller <span class="token comment">// 返回当前函数的调用者</span>
</code></pre></div><h3 id="_2-2-array-对象" tabindex="-1"><a class="header-anchor" href="#_2-2-array-对象" aria-hidden="true">#</a> 2.2 Array 对象</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 生成实例对象
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> 属性
Array<span class="token punctuation">.</span>name <span class="token comment">// &quot;Array&quot;</span>
Array<span class="token punctuation">.</span>length  <span class="token comment">// 1</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype <span class="token comment">// 返回原型对象</span>

<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> 方法
Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">// 判断一个值是否为数组</span>

<span class="token comment">// ES6新增</span>
Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arrLikeObj<span class="token punctuation">)</span> <span class="token comment">// 将类数组对象或可遍历对象转为真正的数组，返回一个数组。会将数组的空位转为undefined。</span>
Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>value1<span class="token punctuation">,</span> value2<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">)</span> <span class="token comment">// 将一组值转换为数组</span>

<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> 实例的方法
<span class="token comment">// 原数组不改变</span>
arr<span class="token punctuation">.</span><span class="token function">valueof</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 返回数组本身</span>
arr<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 返回数组的字符串形式</span>
arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 以参数作为分隔符，将所有数组成员组成一个字符串返回。不提供参数，默认用逗号分隔。</span>
arr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>arr1<span class="token punctuation">,</span> arr2<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">)</span> <span class="token comment">// 合并多个数组。新数组被添加到原数组的尾部，返回一个新数组，原数组不变。</span>
arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>start_index<span class="token punctuation">,</span> end_index<span class="token punctuation">)</span> <span class="token comment">// 截取原数组的一部分，返回一个新数组。参数二省略则返回至原数组最后一个成员，负数表示倒数第几个。</span>
arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 遍历数组的所有成员，参数是一个函数。</span>
arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 对数组的所有成员依次调用一个函数，根据函数结果返回一个新数组。</span>
arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//对数组的所有成员依次调用一个函数，结果为true的成员组成一个新数组返回。</span>
arr<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 判断数组成员是否符合某种条件。有一个数组成员返回值是true，则返回值是true，否则false。</span>
arr<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 判断数组成员是否符合某种条件。所有数组成员返回值都是true，才返回true，否则false。</span>
arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">cbTotal<span class="token punctuation">,</span> ele<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 依次处理数组的每个成员，最终累计为一个值。从左到右处理。</span>
arr<span class="token punctuation">.</span><span class="token function">reduceRight</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">cbTotal<span class="token punctuation">,</span> ele<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 依次处理数组的每个成员，最终累计为一个值。从右到左处理。</span>
arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>searchvalue<span class="token punctuation">,</span> start_index<span class="token punctuation">)</span> <span class="token comment">// 返回元素在数组中第一次出现的位置，没有则返回-1。参数二表示搜索的开始位置。</span>
arr<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span>searchvalue<span class="token punctuation">,</span> start_index<span class="token punctuation">)</span> <span class="token comment">// 返回元素在数组中最后一次出现的位置，没有则返回-1。参数二表示搜索的开始位置。</span>

<span class="token comment">// 原数组不改变 ES6新增</span>
arr<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 找出第一个符合条件的数组成员，找到返回该成员，未找到返回 undefined。</span>
arr<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 找出第一个符合条件的数组成员，找到返回该成员，未找到返回 undefined。</span>
arr<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 对数组中键的遍历，返回一个遍历器对象。</span>
arr<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 对数组中值的遍历，返回一个遍历器对象。</span>
arr<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 对数组中键值对的遍历，返回一个遍历器对象。</span>
arr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 表示某个数组是否包含给定的值，返回 true 或 false。</span>
arr<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 将多维数组拉平为一维数组，返回一个新数组。默认拉平一层，可传入整数参数，表示拉平的层数</span>
arr<span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 对原数组的每个成员执行一个函数（相当于Array.prototype.map()），然后对返回值组成的数组执行flat()方法，flatMap() 只能展开一层数组。该方法返回一个新数组。</span>

<span class="token comment">// 原数组改变</span>
arr<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>  <span class="token comment">// 在数组的首端添加元素，并返回添加新元素后的数组长度。</span>
arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 删除数组的第一个元素，并返回删除的元素。</span>
arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 删除数组的最后一个元素，并返回删除的元素。</span>
arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token comment">// 在数组的末端添加元素，并返回添加新元素后的数组长度。</span>
arr<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 用于颠倒数组中元素的顺序，返回改变后的数组。</span>
arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>start_index<span class="token punctuation">,</span> remove_count<span class="token punctuation">,</span> addEle1<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">)</span> <span class="token comment">// 删除原数组的部分成员，并返回删除的元素。参数二是被删除的元素个数。如果后面还有更多参数表示要被插入数组的新元素。</span>
arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 对数组成员进行排序，默认按照字典顺序排序。传入函数作为参数表示按照自定义方法进行排序，该函数本身接受两个参数，表示进行比较的两个元素。</span>

<span class="token comment">// 原数组改变 ES6新增</span>
arr<span class="token punctuation">.</span><span class="token function">copyWithin</span><span class="token punctuation">(</span>target_index<span class="token punctuation">,</span> start_index<span class="token punctuation">,</span> end_index<span class="token punctuation">)</span> <span class="token comment">// 在当前数组内部，将指定位置的成员复制到其他位置，返回当前数组。</span>
arr<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token comment">// 使用给定值填充一个数组，初始化数组 (new Array(3)).fill(7)</span>
</code></pre></div><h3 id="_2-3-number-对象" tabindex="-1"><a class="header-anchor" href="#_2-3-number-对象" aria-hidden="true">#</a> 2.3 Number 对象</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 生成实例对象
<span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> Number对象的属性
Number<span class="token punctuation">.</span><span class="token constant">POSITIVE_INFINITY</span>：正的无限，指向<span class="token number">Infinity</span>。
Number<span class="token punctuation">.</span><span class="token constant">NEGATIVE_INFINITY</span>：负的无限，指向<span class="token operator">-</span><span class="token number">Infinity</span>。
Number<span class="token punctuation">.</span><span class="token number">NaN</span>：表示非数值，指向<span class="token number">NaN</span>。
Number<span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span>：表示最大的正数，相应的，最小的负数为<span class="token operator">-</span>Number<span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span>。
Number<span class="token punctuation">.</span><span class="token constant">MIN_VALUE</span><span class="token function">：表示最小的正数</span><span class="token punctuation">(</span>即最接近<span class="token number">0</span>的正数，在<span class="token number">64</span>位浮点数体系中为<span class="token number">5e-324</span><span class="token punctuation">)</span> ，相应的，最接近<span class="token number">0</span>的负数为<span class="token operator">-</span>Number<span class="token punctuation">.</span><span class="token constant">MIN_VALUE</span>。
Number<span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span>：表示能够精确表示的最大整数，即<span class="token number">9007199254740991</span>。
Number<span class="token punctuation">.</span><span class="token constant">MIN_SAFE_INTEGER</span>：表示能够精确表示的最小整数，即<span class="token operator">-</span><span class="token number">9007199254740991</span><span class="token function">。</span>

<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> Number对象实例的方法
<span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// 用来将一个数值转为字符串形式.可以接受一个参数，表示输出的进制。如果省略这个参数，默认将数值先转为十进制，再输出字符串；否则，就根据参数指定的进制，将一个数字转化成某个进制的字符串。</span>
<span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// 用于将一个数转为指定位数的小数，返回这个小数对应的字符串。</span>
<span class="token function">toExponential</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 用于将一个数转为科学计数法形式。可传入一个参数，参数表示小数点后有效数字的位数，范围为0到20，超出这个范围，会抛出一个RangeError。</span>
<span class="token function">toPrecision</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 用于将一个数转为指定位数的有效数字。</span>
</code></pre></div><h3 id="_2-4-string-对象" tabindex="-1"><a class="header-anchor" href="#_2-4-string-对象" aria-hidden="true">#</a> 2.4 String 对象</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 生成实例对象
<span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> String对象的属性
s<span class="token punctuation">.</span>length   <span class="token comment">// 返回字符串的长度</span>

<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> 方法
s<span class="token punctuation">.</span><span class="token function">chatAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>   <span class="token comment">// 返回指定位置的字符</span>
s<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">// 该方法的参数是一系列Unicode码点，返回对应的字符串。</span>
s<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>    <span class="token comment">// 返回给定位置字符的Unicode码点(十进制表示)</span>
s<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span>  <span class="token comment">// 用于连接两个字符串</span>
s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span>end<span class="token punctuation">)</span>   <span class="token comment">// 用于从原字符串取出子字符串并返回，不改变原字符串。第一个参数是子字符串的开始位置，第二个参数是子字符串的结束位置(不含该位置) 。如果参数是负值，表示从结尾开始倒数计算的位置，即该负值加上字符串长度。</span>
s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span>end<span class="token punctuation">)</span>  <span class="token comment">// 用于从原字符串取出子字符串并返回，不改变原字符串.第一个参数表示子字符串的开始位置，第二个位置表示结束位置。</span>
s<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span>length<span class="token punctuation">)</span>   <span class="token comment">// 用于从原字符串取出子字符串并返回，不改变原字符串。第一个参数是子字符串的开始位置，第二个参数是子字符串的长度。如果第一个参数是负数，表示倒数计算的字符位置。如果第二个参数是负数，将被自动转为0，因此会返回空字符串。</span>
s<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>   <span class="token comment">// 返回给定元素在字符串中第一次出现的位置，如果没有出现则返回-1。可以接受第二个参数，表示搜索的开始位置</span>
s<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 返回给定元素在字符串中最后一次出现的位置，如果没有出现则返回-1。</span>
s<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 用于去除字符串两端的空格，返回一个新字符串</span>
s<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 用于将一个字符串全部转为小写,返回一个新字符串，不改变原字符串。</span>
s<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 全部转为大写</span>
s<span class="token punctuation">.</span><span class="token function">localeCompare</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span>  <span class="token comment">// 用于比较两个字符串。它返回一个整数，如果小于0，表示第一个字符串小于第二个字符串；如果等于0，表示两者相等；如果大于0，表示第一个字符串大于第二个字符串。</span>
s<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>regexp<span class="token punctuation">)</span>   <span class="token comment">// 用于确定原字符串是否匹配某个子字符串，返回一个数组，成员为匹配的第一个字符串。如果没有找到匹配，则返回null。</span>
s<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 返回值为匹配的第一个位置。如果没有找到匹配，则返回-1。</span>
s<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>oldValue<span class="token punctuation">,</span>newValue<span class="token punctuation">)</span>  <span class="token comment">// 用于替换匹配的子字符串，一般情况下只替换第一个匹配(除非使用带有g修饰符的正则表达式) 。</span>
s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 按照给定规则分割字符串，返回一个由分割出来的子字符串组成的数组。还可传入第二个参数，决定了返回数组的成员数。</span>
</code></pre></div><h3 id="_2-5-math-对象" tabindex="-1"><a class="header-anchor" href="#_2-5-math-对象" aria-hidden="true">#</a> 2.5 Math 对象</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 属性
Math<span class="token punctuation">.</span><span class="token constant">E</span>：常数e。
Math<span class="token punctuation">.</span><span class="token constant">LN2</span>：<span class="token number">2</span>的自然对数。
Math<span class="token punctuation">.</span><span class="token constant">LN10</span>：<span class="token number">10</span>的自然对数。
Math<span class="token punctuation">.</span><span class="token constant">LOG2E</span>：以<span class="token number">2</span>为底的e的对数。
Math<span class="token punctuation">.</span><span class="token constant">LOG10E</span>：以<span class="token number">10</span>为底的e的对数。
Math<span class="token punctuation">.</span><span class="token constant">PI</span>：常数Pi。
Math<span class="token punctuation">.</span><span class="token constant">SQRT1_2</span>：<span class="token number">0.5</span>的平方根。
Math<span class="token punctuation">.</span><span class="token constant">SQRT2</span><span class="token function">：2的平方根。</span>

<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> 数学方法
Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ：返回参数的绝对值
Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ：向上取整，接受一个参数，返回大于该参数的最小整数。
Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ：向下取整
Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span>n1<span class="token punctuation">,</span><span class="token operator">...</span><span class="token punctuation">)</span> ：可接受多个参数，返回最大值
Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span>n1<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> ：可接受多个参数，返回最小值
Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span>e<span class="token punctuation">)</span> ：指数运算<span class="token punctuation">,</span> 返回以第一个参数为底数、第二个参数为幂的指数值。
Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ：返回参数值的平方根。如果参数是一个负值，则返回<span class="token number">NaN</span>。
Math<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ：返回以e为底的自然对数值。
Math<span class="token punctuation">.</span><span class="token function">exp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ：返回e的指数，也就是常数e的参数次方。
Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ：四舍五入
Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token function">：返回0到1之间的一个伪随机数，可能等于0，但是一定小于1。</span>

<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> 三角函数方法
Math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ：返回参数的正弦
Math<span class="token punctuation">.</span><span class="token function">cos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ：返回参数的余弦
Math<span class="token punctuation">.</span><span class="token function">tan</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ：返回参数的正切
Math<span class="token punctuation">.</span><span class="token function">asin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token function">：返回参数的反正弦</span><span class="token punctuation">(</span>弧度值<span class="token punctuation">)</span>
Math<span class="token punctuation">.</span><span class="token function">acos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token function">：返回参数的反余弦</span><span class="token punctuation">(</span>弧度值<span class="token punctuation">)</span>
Math<span class="token punctuation">.</span><span class="token function">atan</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token function">：返回参数的反正切</span><span class="token punctuation">(</span>弧度值<span class="token punctuation">)</span>
</code></pre></div><h3 id="_2-6-json-对象" tabindex="-1"><a class="header-anchor" href="#_2-6-json-对象" aria-hidden="true">#</a> 2.6 JSON 对象</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 用于将一个值转为字符串。该字符串应该符合JSON格式，并且可以被JSON.parse方法还原。</span>
<span class="token comment">// (JSON.stringify(obj, selectedProperties) ) 还可以接受一个数组，作为第二个参数，指定需要转成字符串的属性。</span>
<span class="token comment">// 还可以接受第三个参数，用于增加返回的JSON字符串的可读性。如果是数字，表示每个属性前面添加的空格(最多不超过10个) ；如果是字符串(不超过10个字符) ，则该字符串会添加在每行前面。</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 用于将JSON字符串转化成对象。</span>
</code></pre></div><h3 id="_2-7-console-对象" tabindex="-1"><a class="header-anchor" href="#_2-7-console-对象" aria-hidden="true">#</a> 2.7 console 对象</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span>text2<span class="token punctuation">,</span><span class="token operator">...</span><span class="token punctuation">)</span>   <span class="token comment">// 用于在console窗口输出信息。它可以接受多个参数，将它们的结果连接起来输出。如果第一个参数是格式字符串(使用了格式占位符) ，console.log方法将依次用后面的参数替换占位符，然后再进行输出。</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// 在console窗口输出信息，同时，会在输出信息的前面，加上一个蓝色图标。</span>
console<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 在console窗口输出信息，同时，会在输出信息的前面，加上一个蓝色图标。</span>
console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 输出信息时，在最前面加一个黄色三角，表示警告；</span>
console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 输出信息时，在最前面加一个红色的叉，表示出错，同时会显示错误发生的堆栈</span>
console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 可以将复合类型的数据转为表格显示。</span>
console<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 用于计数，输出它被调用了多少次。</span>
console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">// 用来对一个对象进行检查(inspect) ，并以易于阅读和打印的格式显示。</span>
console<span class="token punctuation">.</span><span class="token function">dirxml</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 用于以目录树的形式，显示DOM节点。</span>
console<span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 接受两个参数，第一个参数是表达式，第二个参数是字符串。只有当第一个参数为false，才会输出第二个参数，否则不会有任何结果。</span>

<span class="token comment">// 这两个方法用于计时，可以算出一个操作所花费的准确时间。</span>
console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// time方法表示计时开始，timeEnd方法表示计时结束。它们的参数是计时器的名称。调用timeEnd方法之后，console窗口会显示“计时器名称: 所耗费的时间”。</span>

console<span class="token punctuation">.</span><span class="token function">profile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 用来新建一个性能测试器(profile) ，它的参数是性能测试器的名字。</span>
console<span class="token punctuation">.</span><span class="token function">profileEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 用来结束正在运行的性能测试器。</span>

console<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">groupend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 上面这两个方法用于将显示的信息分组。它只在输出大量信息时有用，分在一组的信息，可以用鼠标折叠/展开。</span>
console<span class="token punctuation">.</span><span class="token function">groupCollapsed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 用于将显示的信息分组，该组的内容，在第一次显示时是收起的(collapsed) ，而不是展开的。</span>

console<span class="token punctuation">.</span><span class="token function">trace</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 显示当前执行的代码在堆栈中的调用路径。</span>
console<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 用于清除当前控制台的所有输出，将光标回置到第一行。</span>
</code></pre></div><h2 id="_3-css-操作" tabindex="-1"><a class="header-anchor" href="#_3-css-操作" aria-hidden="true">#</a> 3. CSS 操作</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 类名操作
<span class="token comment">// ie8以下</span>
Element<span class="token punctuation">.</span>className  <span class="token comment">// 获取元素节点的类名</span>
Element<span class="token punctuation">.</span>className <span class="token operator">+=</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> newClassName  <span class="token comment">// 新增一个类名</span>

<span class="token comment">// 判断是否有某个类名</span>
<span class="token keyword">function</span> <span class="token function">hasClass</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span>className</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>className<span class="token punctuation">,</span><span class="token string">&#39;gi&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>element<span class="token punctuation">.</span>className<span class="token punctuation">)</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 移除class</span>
<span class="token keyword">function</span> <span class="token function">removeClass</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span>className</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  element<span class="token punctuation">.</span>className <span class="token operator">=</span> element<span class="token punctuation">.</span>className<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&#39;(^|\\\\b) &#39;</span> <span class="token operator">+</span> className<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;|&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;(\\\\b|$) &#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;gi&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">,</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// ie10</span>
element<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span>  <span class="token comment">// 新增</span>
element<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span>  <span class="token comment">// 删除</span>
element<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span>  <span class="token comment">// 是否包含</span>
element<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span>  <span class="token comment">// toggle class</span>

<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> style操作
element<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;style&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span>
element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>cssText <span class="token comment">// 用来读写或删除整个style属性</span>
element<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span>propertyName<span class="token punctuation">,</span>value<span class="token punctuation">)</span>  <span class="token comment">// 设置css属性</span>
element<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span>property<span class="token punctuation">)</span>  <span class="token comment">// 获取css属性</span>
element<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">removeProperty</span><span class="token punctuation">(</span>property<span class="token punctuation">)</span>  <span class="token comment">// 删除css属性</span>

操作非内联样式
<span class="token comment">// ie8</span>
element<span class="token punctuation">.</span>currentStyle<span class="token punctuation">[</span>attrName<span class="token punctuation">]</span>
<span class="token comment">// ie9+</span>
window<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">[</span>attrName<span class="token punctuation">]</span>
window<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span>attrName<span class="token punctuation">)</span>
<span class="token comment">// 伪类</span>
window<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span><span class="token string">&#39;:after&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">[</span>attrName<span class="token punctuation">]</span>
</code></pre></div>`,33),c=[o];function e(u,l){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","js｜常用API.html.vue"]]);export{i as default};

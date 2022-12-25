import{_ as e,o as a,c as r,f as d}from"./app.8609dc96.js";const i={},h=d(`<h1 id="浏览器兼容问题" tabindex="-1"><a class="header-anchor" href="#浏览器兼容问题" aria-hidden="true">#</a> 浏览器兼容问题</h1><h2 id="浏览器" tabindex="-1"><a class="header-anchor" href="#浏览器" aria-hidden="true">#</a> 浏览器</h2><pre><code>几种常见的浏览器：IE、Firefox、Safari、Chrome及Opera（壳浏览器）
浏览器大战：网景浏览器 VS IE浏览器
</code></pre><h2 id="浏览器主要组件" tabindex="-1"><a class="header-anchor" href="#浏览器主要组件" aria-hidden="true">#</a> 浏览器主要组件</h2><pre><code>用户界面         包括地址栏、后退/前进按钮、书签目录等，也就是你所看到的除了用来显示你所请求页面的主窗口之外的其他部分
浏览器引擎      用来查询及操作渲染引擎的接口
渲染引擎       用来显示请求的内容，例如，如果请求内容为html，它负责解析html及css，并将解析后的结果显示出来
网络            用来完成网络调用，例如http请求，它具有平台无关的接口，可以在不同平台上工作
UI后端        用来绘制类似组合选择框及对话框等基本组件，具有不特定于某个平台的通用接口，底层使用操作系统的用户接口
JS解释器        用来解释执行JS代码
数据存储       属于持久层，浏览器需要在硬盘中保存类似cookie的各种数据，HTML5定义了web database技术，这是一种轻量级完整的客户端存储技术
</code></pre><h2 id="浏览器的内核" tabindex="-1"><a class="header-anchor" href="#浏览器的内核" aria-hidden="true">#</a> 浏览器的内核</h2><pre><code>浏览器最重要或者说核心的部分是“Rendering Engine”，可大概译为“渲染引擎”，不过我们一般习惯将之称为“浏览器内核”。
负责对网页语法的解释（如HTML）并渲染（显示）网页。渲染引擎决定了浏览器如何显示网页的内容以及页面的格式信息。
不同的浏览器内核对网页编写语法的解释也有不同，因此同一网页在不同的内核的浏览器里的渲染（显示）效果也可能不同，这也是网页编写者需要在不同内核的浏览器中测试网页显示效果的原因。
</code></pre><h2 id="不同浏览器的内核" tabindex="-1"><a class="header-anchor" href="#不同浏览器的内核" aria-hidden="true">#</a> 不同浏览器的内核</h2><pre><code>IE: trident内核
Firefox：gecko内核
Safari：webkit内核
Opera：以前是presto内核，Opera现已改用Google Chrome的Blink内核
Chrome：Blink(基于webkit，Google与Opera Software共同开发)
</code></pre><h2 id="什么是-css-hack" tabindex="-1"><a class="header-anchor" href="#什么是-css-hack" aria-hidden="true">#</a> 什么是 css Hack</h2><pre><code>由于不同厂商的浏览器，或者是同一厂商的浏览器的不同版本，如IE6和IE7，对CSS的解析认识不完全一样，因此会导致生成的页面效果不一样，得不到我们所需要的页面效果。
这个时候我们就需要针对不同的浏览器去写不同的CSS，让它能够同时兼容不同的浏览器，能在不同的浏览器中也能得到我们想要的页面效果。
</code></pre><h2 id="haslayout" tabindex="-1"><a class="header-anchor" href="#haslayout" aria-hidden="true">#</a> haslayout</h2><pre><code>是IE渲染引擎的一个内部组成部分。在IE中，一个元素要么自己对自身的内容进行计算大小和组织，要么依赖于父元素来计算尺寸和组织内容。
为了调节这两个不同的概念，渲染引擎采用了 hasLayout 的属性。

大多IE下的显示错误，就是源于 haslayout。如果它设置成了true，它就不得不去渲染它自己，因此元素不得不扩展去包含它的流出的内容。
例如浮动或者很长很长的没有截断的单词，如果haslayout没有被设置成true，那么元素得依靠某个祖先元素来渲染它。这就是很多的ie bugs诞生的地方。

当网页在 IE 中有异常表现时（IE6,7），可以尝试激发 haslayout 来看看是不是问题所在。常用的方法是给某元素 css 设定 zoom:1。
使用 zoom:1 是因为大多数情况下，它能在不影响现有环境的条件下激发元素的 haslayout。而一旦问题消失，那基本上就可以判断是haslayout 的原因。
然后就可以通过设定相应的 css 属性来对这个问题进行修正了。建议首先要考虑的是设定元素的width/height 属性，其次再考虑其他属性。
</code></pre><h2 id="ie-常见的兼容问题" tabindex="-1"><a class="header-anchor" href="#ie-常见的兼容问题" aria-hidden="true">#</a> IE 常见的兼容问题</h2><h3 id="_1、文档类型的声明。" tabindex="-1"><a class="header-anchor" href="#_1、文档类型的声明。" aria-hidden="true">#</a> 1、<!--DOCTYPE HTML-->文档类型的声明。</h3><pre><code>产生条件：IE6浏览器，当我们没有书写这个文档声明的时候，会触发IE6浏览器的怪异解析现象；
解决办法：书写文档声明。
</code></pre><h3 id="_2、不同浏览器当中-很多的标签的默认样式不同-如默认的外部丁内补丁。" tabindex="-1"><a class="header-anchor" href="#_2、不同浏览器当中-很多的标签的默认样式不同-如默认的外部丁内补丁。" aria-hidden="true">#</a> 2、不同浏览器当中，很多的标签的默认样式不同，如默认的外部丁内补丁。</h3><pre><code>产生条件：不同浏览器；
解决办法：利用CSS reset文件进行样式的清除，然后再根据需要进行设置。
</code></pre><h3 id="_3、横向双倍外边距" tabindex="-1"><a class="header-anchor" href="#_3、横向双倍外边距" aria-hidden="true">#</a> 3、横向双倍外边距</h3><pre><code>产生条件：在IE6中块元素浮动后，会出现横向双倍margin现象。
解决办法： 在float标签的样式控制中加入display：inline
</code></pre><h3 id="_4、默认行高" tabindex="-1"><a class="header-anchor" href="#_4、默认行高" aria-hidden="true">#</a> 4、默认行高</h3><pre><code>产生条件：IE6、IE7、遨游浏览器；设置的文字高度超出盒模型内容区域设置的高度时会影响布局。
解决办法：给超出高度的标签设置overflow：hidden；或者将文字的行高line-height设置为小于块的高度。
</code></pre><h3 id="_5、img-外部的-border" tabindex="-1"><a class="header-anchor" href="#_5、img-外部的-border" aria-hidden="true">#</a> 5、img 外部的 border</h3><pre><code>产生条件：img外部有a标签，即img标签有链接时
解决办法：设置img边框border:0;
</code></pre><h3 id="_6、图片默认有间距。" tabindex="-1"><a class="header-anchor" href="#_6、图片默认有间距。" aria-hidden="true">#</a> 6、图片默认有间距。</h3><pre><code>产生条件：img标签（每个img之后敲了回车）
解决办法：为img设置float的浮动布局方式。
</code></pre><h3 id="_7、经典-3-像素-bug" tabindex="-1"><a class="header-anchor" href="#_7、经典-3-像素-bug" aria-hidden="true">#</a> 7、经典 3 像素 bug</h3><pre><code>产生条件：IE6浏览器，浮动块元素与未浮动块元素处于同一行，有默认的3px间距。
解决办法：设置非浮动元素浮动。
</code></pre><h3 id="_8、默认行高" tabindex="-1"><a class="header-anchor" href="#_8、默认行高" aria-hidden="true">#</a> 8、默认行高</h3><pre><code>产生条件：清除浮动的时候，有些人会采取一种清浮动的方法，使用一个空的div，然后为这个div设置{clear：both}。在大部分浏览器当中，这样做是没有任何问题的，但是在IE6浏览器当中，div即使是空的，也会存在默认行高。
解决办法：设置其高度为0，并设置overflow:hidden。{height:0;overflow:hidden;clear:both;}
</code></pre><h3 id="_9、a-标签-hover-不适用于所有标签" tabindex="-1"><a class="header-anchor" href="#_9、a-标签-hover-不适用于所有标签" aria-hidden="true">#</a> 9、a 标签 hover 不适用于所有标签</h3><pre><code>产生条件：IE6浏览器中hover只支持a标签的使用，不支持一切其它标签使用；
解决办法：合理用a标签嵌套其他行内标签或者用javascript模拟a的hover效果
</code></pre><h3 id="_10、table-标签当中-border-color-属性设置无效" tabindex="-1"><a class="header-anchor" href="#_10、table-标签当中-border-color-属性设置无效" aria-hidden="true">#</a> 10、table 标签当中 border-color 属性设置无效</h3><pre><code>产生条件：IE6中table设置属性border-color无效；
解决办法：运用CSS样式进行控制，而不是使用属性进行样式的处理。
</code></pre><h3 id="_11、png-格式图片" tabindex="-1"><a class="header-anchor" href="#_11、png-格式图片" aria-hidden="true">#</a> 11、png 格式图片</h3><pre><code>产生条件：IE6浏览器，不支持透明；
解决办法：使用javascript进行处理；或者使用gif、jpg图像替代掉png图片的使用。
</code></pre><h3 id="_12、透明-rgba-与-opacity" tabindex="-1"><a class="header-anchor" href="#_12、透明-rgba-与-opacity" aria-hidden="true">#</a> 12、透明 rgba 与 opacity</h3><pre><code>产生条件：IE6不支持此两种透明的设置方法；
解决办法：使用IE6当中的滤镜filter替代掉，如：opacity:0.6;filter:alpha(opacity=60)。
</code></pre><h3 id="_13、子选择器在-ie6-中不能使用" tabindex="-1"><a class="header-anchor" href="#_13、子选择器在-ie6-中不能使用" aria-hidden="true">#</a> 13、子选择器在 IE6 中不能使用</h3><pre><code>产生条件：IE6浏览器，使用E&gt;F子选择器；
解决办法：采用其他选择器或者采用后代选择器进行控制，如：div p{margin:10px;} 替代掉 div&gt;p{margin:10px;}。
</code></pre><h3 id="_14、不支持最大最小宽高" tabindex="-1"><a class="header-anchor" href="#_14、不支持最大最小宽高" aria-hidden="true">#</a> 14、不支持最大最小宽高</h3><pre><code>产生条件：IE6浏览器，标签的最低高度/宽度设置（min/max-height）
解决办法：为IE6单独设置hack，即_height:最小高度值；_width：最小宽度值（对于IE6，当实际宽高超出定义的宽高时，元素会自动调整宽高）。对于最大高度和最大宽度，没有必要设置兼容，当前对于开发者来说，只需要保证IE6下正常显示即可，无需在它身上花费太多功夫。
</code></pre><h3 id="_15、纵向居中-ie6-不支持-display-table-cell" tabindex="-1"><a class="header-anchor" href="#_15、纵向居中-ie6-不支持-display-table-cell" aria-hidden="true">#</a> 15、纵向居中，IE6 不支持 display:table-cell</h3><pre><code>产生条件：IE6浏览器，设置一个元素在另一个元素中垂直方向上居中对齐，不能够支持以单元格的方式来显示元素；
解决办法：如果是单行文本，采用line-height和height的配合使得文本垂直居中，如果中间是其他元素或者多行文本，采用其他方法进行居中处理
</code></pre><h3 id="_16、input-聚焦框颜色与样式不同" tabindex="-1"><a class="header-anchor" href="#_16、input-聚焦框颜色与样式不同" aria-hidden="true">#</a> 16、input 聚焦框颜色与样式不同</h3><pre><code>产生条件：各个浏览器表现不同；
处理方法：使用outline:none，清除默认样式之后再统一设置。
</code></pre><h3 id="_17、鼠标移上小手效果" tabindex="-1"><a class="header-anchor" href="#_17、鼠标移上小手效果" aria-hidden="true">#</a> 17、鼠标移上小手效果</h3><pre><code>产生条件：IE6，cursor:hand ：IE完全支持。但是在firefox是不支持的，没有效果。
解决办法：设置两种cursor:pointer; cursor:hand。
</code></pre><h3 id="_18、子标签无法撑开父标签的高度" tabindex="-1"><a class="header-anchor" href="#_18、子标签无法撑开父标签的高度" aria-hidden="true">#</a> 18、子标签无法撑开父标签的高度</h3><pre><code>产生条件：父标签内部含一个或多个子标签，父标签没有设置浮动，而子标签发生浮动；
处理方法：
    方法1：在子标签最后添加清除浮动的设置&lt;div style=&#39;height:0;clear:both&#39;&gt;&lt;/div&gt;;
    方法2：为父标签添加{overflow:hidden;}的样式；
    方法3：为父标签设置固定高度。
</code></pre><h3 id="_19、li-的间距问题" tabindex="-1"><a class="header-anchor" href="#_19、li-的间距问题" aria-hidden="true">#</a> 19、li 的间距问题</h3><pre><code>产生条件：IE6浏览器 li标签设置宽高，且li里面的元素发生了浮动；
处理方法：
    方法1：li不设置宽高；
    方法2：li内部的标签不进行浮动。
</code></pre><h3 id="_20、行内元素布局混乱" tabindex="-1"><a class="header-anchor" href="#_20、行内元素布局混乱" aria-hidden="true">#</a> 20、行内元素布局混乱</h3><pre><code>产生条件：行内元素为包含框时，如果包含框包含的绝对定位元素以百分比为单位进行定位；
处理方法：在行内元素当中加入{zoom:1}，触发IE的hasLayout。
</code></pre><h3 id="_21、多显示一个字" tabindex="-1"><a class="header-anchor" href="#_21、多显示一个字" aria-hidden="true">#</a> 21、多显示一个字</h3><pre><code>产生条件：多个浮动元素中间夹杂HTML注释语句，浮动元素宽度设置为100%；则在下一行多显示一个上一行的最后一个字符；
处理方法：果断删掉注释！
</code></pre><h3 id="_22、css-优先级-important" tabindex="-1"><a class="header-anchor" href="#_22、css-优先级-important" aria-hidden="true">#</a> 22、CSS 优先级 ！important</h3><pre><code>产生条件：IE6当中，在同一组CSS属性中，!important不起作用；
处理方法：单独设置。
</code></pre><h3 id="_23、img-图片下部高度多余-5px" tabindex="-1"><a class="header-anchor" href="#_23、img-图片下部高度多余-5px" aria-hidden="true">#</a> 23、img 图片下部高度多余 5px</h3><pre><code>产生条件：IE6浏览器；
处理方法：父级设置overflow: hidden; 或 img { display: block; } 或 _margin: -5px;
</code></pre><h3 id="_24、高度不要为单数" tabindex="-1"><a class="header-anchor" href="#_24、高度不要为单数" aria-hidden="true">#</a> 24、高度不要为单数</h3><pre><code>父标签高度20，子标签11，垂直居中，20-11=9，9要分给文字的上面与下面，怎么分？IE6就会与其它的不同，所以，尽量避免
</code></pre><h3 id="_25、position-下的-left-bottom-错位" tabindex="-1"><a class="header-anchor" href="#_25、position-下的-left-bottom-错位" aria-hidden="true">#</a> 25、position 下的 left，bottom 错位</h3><pre><code>解决方法：为父级(relative层)设置宽高或添加zoom:1
</code></pre><h3 id="_26、在-ie6-下定位元素的父级宽高都为奇数时-那么在-ie6-下定位元素的-right-和-bottom-都有-1-像素的偏差。" tabindex="-1"><a class="header-anchor" href="#_26、在-ie6-下定位元素的父级宽高都为奇数时-那么在-ie6-下定位元素的-right-和-bottom-都有-1-像素的偏差。" aria-hidden="true">#</a> 26、在 IE6 下定位元素的父级宽高都为奇数时，那么在 IE6 下定位元素的 right 和 bottom 都有 1 像素的偏差。</h3><pre><code>解决办法：设为偶数。
</code></pre><h3 id="_27、在-ie67-下-li-本身没浮动-但是-li-的内容有浮动-li-下边就会产生一个间隙。" tabindex="-1"><a class="header-anchor" href="#_27、在-ie67-下-li-本身没浮动-但是-li-的内容有浮动-li-下边就会产生一个间隙。" aria-hidden="true">#</a> 27、在 ie67 下，li 本身没浮动，但是 li 的内容有浮动，li 下边就会产生一个间隙。</h3><pre><code>解决办法：给li设置 float:left或者给li加vertical-align:top。
</code></pre><h3 id="_28、在-ie6-下高度小于-19px-的元素-高度会被当做-19px-来处理。" tabindex="-1"><a class="header-anchor" href="#_28、在-ie6-下高度小于-19px-的元素-高度会被当做-19px-来处理。" aria-hidden="true">#</a> 28、在 IE6 下高度小于 19px 的元素，高度会被当做 19px 来处理。</h3><pre><code>解决办法：设置font-size：0;或者overflow:hidden;
</code></pre><h3 id="_29、在-ie6-7-下输入类型的表单控件上下各有-1px-的间隙。" tabindex="-1"><a class="header-anchor" href="#_29、在-ie6-7-下输入类型的表单控件上下各有-1px-的间隙。" aria-hidden="true">#</a> 29、在 IE6，7 下输入类型的表单控件上下各有 1px 的间隙。</h3><pre><code>解决办法：给input加浮动。
</code></pre><h3 id="_30、在-ie6-7-下输入类型的表单控件加-border-none-无效。" tabindex="-1"><a class="header-anchor" href="#_30、在-ie6-7-下输入类型的表单控件加-border-none-无效。" aria-hidden="true">#</a> 30、在 IE6，7 下输入类型的表单控件加 border:none 无效。</h3><pre><code>解决办法：重置input的背景。background:#fff;
</code></pre><h3 id="_31、ie6-100-高度" tabindex="-1"><a class="header-anchor" href="#_31、ie6-100-高度" aria-hidden="true">#</a> 31、IE6 100% 高度</h3><pre><code>在IE6下，如果要给元素定义100%高度，必须要明确定义它的父级元素的高度，如果你需要给元素定义满屏的高度，就得先给html和body定义height:100%;。
</code></pre><h3 id="_32、ie6-躲猫猫-bug" tabindex="-1"><a class="header-anchor" href="#_32、ie6-躲猫猫-bug" aria-hidden="true">#</a> 32、IE6 躲猫猫 bug</h3><pre><code>在IE6和IE7下，躲猫猫bug是一个非常恼人的问题。一个撑破了容器的浮动元素，如果在他之后有不浮动的内容，并且有一些定义了:hover的链接，当鼠标移到那些链接上时，在IE6下就会触发躲猫猫。
解决方法：
    1.在（那个未浮动的）内容之后添加一个&lt;span style=&quot;clear: both;&quot;&gt;&lt;/span&gt;
    2.触发包含了这些链接的容器的hasLayout，一个简单的方法就是给其定义height:1%;
</code></pre><h3 id="_33、ie-下-z-index-的-bug" tabindex="-1"><a class="header-anchor" href="#_33、ie-下-z-index-的-bug" aria-hidden="true">#</a> 33、IE 下 z-index 的 bug</h3><pre><code>在IE浏览器中，定位元素的z-index层级是相对于各自的父级容器，所以会导致z-index出现错误的表现。解决方法是给其父级元素定义z-index，有些情况下还需要定义position:relative。
</code></pre><h2 id="除以上常见的兼容问题-剩余的小细节-差几个像素-通过前缀法调节" tabindex="-1"><a class="header-anchor" href="#除以上常见的兼容问题-剩余的小细节-差几个像素-通过前缀法调节" aria-hidden="true">#</a> 除以上常见的兼容问题，剩余的小细节（差几个像素）通过前缀法调节</h2><h3 id="_1、ie-其他的兼容问题" tabindex="-1"><a class="header-anchor" href="#_1、ie-其他的兼容问题" aria-hidden="true">#</a> 1、IE 其他的兼容问题</h3><pre><code>如果你的页面对IE7兼容没有问题又不想大量修改现有代码，同时又能在IE8中正常使用，只需在head中添加
&lt;meta http-equiv=”x-ua-compatible” content=”ie=7”/&gt;
</code></pre><h3 id="_2、额外介绍" tabindex="-1"><a class="header-anchor" href="#_2、额外介绍" aria-hidden="true">#</a> 2、额外介绍：<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1"></h3><pre><code>这是一个，文档兼容模式的定义。
Edge 模式告诉 IE 以最高级模式渲染文档，也就是任何 IE 版本都以当前版本所支持的最高级标准模式渲染，避免版本升级造成的影响。简单的说，就是什么版本 IE 就用什么版本的标准模式渲染
&lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;

使用以下代码强制 IE 使用 Chrome Frame 渲染
&lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;chrome=1&quot;&gt;

提示 IE 用户安装 Google Frame
Google 官方提供了对 Google Frame 插件安装情况的检测，这里直接调用方法即可，如果检测到 IE 并未安装 Google Frame，则弹出对话框提示安装。
&lt;script src=&quot;http://ajax.googleapis.com/ajax/libs/chrome-frame/1/CFInstall.min.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;CFInstall.check();&lt;/script&gt;

最佳的兼容模式方案，结合考虑以上两种：
&lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge,chrome=1&quot;&gt;
</code></pre><h3 id="_3、常用的-css-hack-方法" tabindex="-1"><a class="header-anchor" href="#_3、常用的-css-hack-方法" aria-hidden="true">#</a> 3、常用的 css hack 方法</h3><pre><code>1、条件注释法  在head和body里面注释
2、属性前缀法
3、选择器前缀法：针对一些页面表现不一致或者需要特殊对待的浏览器，在CSS选择器前加上一些只有某些特定浏览器才能识别的前缀进行hack。

目前最常见的是
*html *前缀只对IE6生效
*+html *+前缀只对IE7生效
@media screen\\9{...}只对IE6/7生效
@media \\0screen {body { background: red; }}只对IE8有效
@media \\0screen\\,screen\\9{body { background: blue; }}只对IE6/7/8有效
@media screen\\0 {body { background: green; }} 只对IE8/9/10有效
</code></pre>`,87),n=[h];function o(t,c){return a(),r("div",null,n)}const l=e(i,[["render",o],["__file","02-浏览器兼容问题.html.vue"]]);export{l as default};

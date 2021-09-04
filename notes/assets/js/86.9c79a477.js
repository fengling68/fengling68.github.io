(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{410:function(a,t,e){"use strict";e.r(t);var r=e(1),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"浏览器兼容问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器兼容问题"}},[a._v("#")]),a._v(" 浏览器兼容问题")]),a._v(" "),e("h2",{attrs:{id:"浏览器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器"}},[a._v("#")]),a._v(" 浏览器")]),a._v(" "),e("pre",[e("code",[a._v("几种常见的浏览器：IE、Firefox、Safari、Chrome及Opera（壳浏览器）\n浏览器大战：网景浏览器 VS IE浏览器\n")])]),a._v(" "),e("h2",{attrs:{id:"浏览器主要组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器主要组件"}},[a._v("#")]),a._v(" 浏览器主要组件")]),a._v(" "),e("pre",[e("code",[a._v("用户界面         包括地址栏、后退/前进按钮、书签目录等，也就是你所看到的除了用来显示你所请求页面的主窗口之外的其他部分\n浏览器引擎      用来查询及操作渲染引擎的接口\n渲染引擎       用来显示请求的内容，例如，如果请求内容为html，它负责解析html及css，并将解析后的结果显示出来\n网络            用来完成网络调用，例如http请求，它具有平台无关的接口，可以在不同平台上工作\nUI后端        用来绘制类似组合选择框及对话框等基本组件，具有不特定于某个平台的通用接口，底层使用操作系统的用户接口\nJS解释器        用来解释执行JS代码\n数据存储       属于持久层，浏览器需要在硬盘中保存类似cookie的各种数据，HTML5定义了web database技术，这是一种轻量级完整的客户端存储技术\n")])]),a._v(" "),e("h2",{attrs:{id:"浏览器的内核"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的内核"}},[a._v("#")]),a._v(" 浏览器的内核")]),a._v(" "),e("pre",[e("code",[a._v("浏览器最重要或者说核心的部分是“Rendering Engine”，可大概译为“渲染引擎”，不过我们一般习惯将之称为“浏览器内核”。\n负责对网页语法的解释（如HTML）并渲染（显示）网页。渲染引擎决定了浏览器如何显示网页的内容以及页面的格式信息。\n不同的浏览器内核对网页编写语法的解释也有不同，因此同一网页在不同的内核的浏览器里的渲染（显示）效果也可能不同，这也是网页编写者需要在不同内核的浏览器中测试网页显示效果的原因。\n")])]),a._v(" "),e("h2",{attrs:{id:"不同浏览器的内核"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不同浏览器的内核"}},[a._v("#")]),a._v(" 不同浏览器的内核")]),a._v(" "),e("pre",[e("code",[a._v("IE: trident内核\nFirefox：gecko内核\nSafari：webkit内核\nOpera：以前是presto内核，Opera现已改用Google Chrome的Blink内核\nChrome：Blink(基于webkit，Google与Opera Software共同开发)\n")])]),a._v(" "),e("h2",{attrs:{id:"什么是css-hack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是css-hack"}},[a._v("#")]),a._v(" 什么是css Hack")]),a._v(" "),e("pre",[e("code",[a._v("由于不同厂商的浏览器，或者是同一厂商的浏览器的不同版本，如IE6和IE7，对CSS的解析认识不完全一样，因此会导致生成的页面效果不一样，得不到我们所需要的页面效果。 \n这个时候我们就需要针对不同的浏览器去写不同的CSS，让它能够同时兼容不同的浏览器，能在不同的浏览器中也能得到我们想要的页面效果。\n")])]),a._v(" "),e("h2",{attrs:{id:"haslayout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#haslayout"}},[a._v("#")]),a._v(" haslayout")]),a._v(" "),e("pre",[e("code",[a._v("是IE渲染引擎的一个内部组成部分。在IE中，一个元素要么自己对自身的内容进行计算大小和组织，要么依赖于父元素来计算尺寸和组织内容。\n为了调节这两个不同的概念，渲染引擎采用了 hasLayout 的属性。\n\n大多IE下的显示错误，就是源于 haslayout。如果它设置成了true，它就不得不去渲染它自己，因此元素不得不扩展去包含它的流出的内容。\n例如浮动或者很长很长的没有截断的单词，如果haslayout没有被设置成true，那么元素得依靠某个祖先元素来渲染它。这就是很多的ie bugs诞生的地方。\n\n当网页在 IE 中有异常表现时（IE6,7），可以尝试激发 haslayout 来看看是不是问题所在。常用的方法是给某元素 css 设定 zoom:1。\n使用 zoom:1 是因为大多数情况下，它能在不影响现有环境的条件下激发元素的 haslayout。而一旦问题消失，那基本上就可以判断是haslayout 的原因。\n然后就可以通过设定相应的 css 属性来对这个问题进行修正了。建议首先要考虑的是设定元素的width/height 属性，其次再考虑其他属性。\n")])]),a._v(" "),e("h2",{attrs:{id:"ie-常见的兼容问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ie-常见的兼容问题"}},[a._v("#")]),a._v(" IE 常见的兼容问题")]),a._v(" "),e("h3",{attrs:{id:"_1、文档类型的声明。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、文档类型的声明。"}},[a._v("#")]),a._v(" 1、<!DOCTYPE HTML>文档类型的声明。")]),a._v(" "),e("pre",[e("code",[a._v("产生条件：IE6浏览器，当我们没有书写这个文档声明的时候，会触发IE6浏览器的怪异解析现象；\n解决办法：书写文档声明。\n")])]),a._v(" "),e("h3",{attrs:{id:"_2、不同浏览器当中，很多的标签的默认样式不同，如默认的外部丁内补丁。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、不同浏览器当中，很多的标签的默认样式不同，如默认的外部丁内补丁。"}},[a._v("#")]),a._v(" 2、不同浏览器当中，很多的标签的默认样式不同，如默认的外部丁内补丁。")]),a._v(" "),e("pre",[e("code",[a._v("产生条件：不同浏览器；\n解决办法：利用CSS reset文件进行样式的清除，然后再根据需要进行设置。\n")])]),a._v(" "),e("h3",{attrs:{id:"_3、横向双倍外边距"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、横向双倍外边距"}},[a._v("#")]),a._v(" 3、横向双倍外边距")]),a._v(" "),e("pre",[e("code",[a._v("产生条件：在IE6中块元素浮动后，会出现横向双倍margin现象。\n解决办法： 在float标签的样式控制中加入display：inline\n")])]),a._v(" "),e("h3",{attrs:{id:"_4、默认行高"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、默认行高"}},[a._v("#")]),a._v(" 4、默认行高")]),a._v(" "),e("pre",[e("code",[a._v("产生条件：IE6、IE7、遨游浏览器；设置的文字高度超出盒模型内容区域设置的高度时会影响布局。\n解决办法：给超出高度的标签设置overflow：hidden；或者将文字的行高line-height设置为小于块的高度。\n")])]),a._v(" "),e("h3",{attrs:{id:"_5、img外部的border"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、img外部的border"}},[a._v("#")]),a._v(" 5、img外部的border")]),a._v(" "),e("pre",[e("code",[a._v("产生条件：img外部有a标签，即img标签有链接时\n解决办法：设置img边框border:0;\n")])]),a._v(" "),e("h3",{attrs:{id:"_6、图片默认有间距。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、图片默认有间距。"}},[a._v("#")]),a._v(" 6、图片默认有间距。")]),a._v(" "),e("pre",[e("code",[a._v("产生条件：img标签（每个img之后敲了回车）\n解决办法：为img设置float的浮动布局方式。\n")])]),a._v(" "),e("h3",{attrs:{id:"_7、经典3像素bug"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7、经典3像素bug"}},[a._v("#")]),a._v(" 7、经典3像素bug")]),a._v(" "),e("pre",[e("code",[a._v("产生条件：IE6浏览器，浮动块元素与未浮动块元素处于同一行，有默认的3px间距。\n解决办法：设置非浮动元素浮动。\n")])]),a._v(" "),e("h3",{attrs:{id:"_8、默认行高"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8、默认行高"}},[a._v("#")]),a._v(" 8、默认行高")]),a._v(" "),e("pre",[e("code",[a._v("产生条件：清除浮动的时候，有些人会采取一种清浮动的方法，使用一个空的div，然后为这个div设置{clear：both}。在大部分浏览器当中，这样做是没有任何问题的，但是在IE6浏览器当中，div即使是空的，也会存在默认行高。\n解决办法：设置其高度为0，并设置overflow:hidden。{height:0;overflow:hidden;clear:both;}\n")])]),a._v(" "),e("h3",{attrs:{id:"_9、a标签hover不适用于所有标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9、a标签hover不适用于所有标签"}},[a._v("#")]),a._v(" 9、a标签hover不适用于所有标签")]),a._v(" "),e("pre",[e("code",[a._v("产生条件：IE6浏览器中hover只支持a标签的使用，不支持一切其它标签使用；\n解决办法：合理用a标签嵌套其他行内标签或者用javascript模拟a的hover效果\n")])]),a._v(" "),e("h3",{attrs:{id:"_10、table标签当中border-color属性设置无效"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10、table标签当中border-color属性设置无效"}},[a._v("#")]),a._v(" 10、table标签当中border-color属性设置无效")]),a._v(" "),e("pre",[e("code",[a._v("产生条件：IE6中table设置属性border-color无效；\n解决办法：运用CSS样式进行控制，而不是使用属性进行样式的处理。\n")])]),a._v(" "),e("h3",{attrs:{id:"_11、png格式图片"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11、png格式图片"}},[a._v("#")]),a._v(" 11、png格式图片")]),a._v(" "),e("pre",[e("code",[a._v("产生条件：IE6浏览器，不支持透明；\n解决办法：使用javascript进行处理；或者使用gif、jpg图像替代掉png图片的使用。\n")])]),a._v(" "),e("h3",{attrs:{id:"_12、透明rgba与opacity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12、透明rgba与opacity"}},[a._v("#")]),a._v(" 12、透明rgba与opacity")]),a._v(" "),e("pre",[e("code",[a._v("产生条件：IE6不支持此两种透明的设置方法；\n解决办法：使用IE6当中的滤镜filter替代掉，如：opacity:0.6;filter:alpha(opacity=60)。\n")])]),a._v(" "),e("h3",{attrs:{id:"_13、子选择器在ie6中不能使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13、子选择器在ie6中不能使用"}},[a._v("#")]),a._v(" 13、子选择器在IE6中不能使用")]),a._v(" "),e("pre",[e("code",[a._v("产生条件：IE6浏览器，使用E>F子选择器；\n解决办法：采用其他选择器或者采用后代选择器进行控制，如：div p{margin:10px;} 替代掉 div>p{margin:10px;}。\n")])]),a._v(" "),e("h3",{attrs:{id:"_14、不支持最大最小宽高"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_14、不支持最大最小宽高"}},[a._v("#")]),a._v(" 14、不支持最大最小宽高")]),a._v(" "),e("pre",[e("code",[a._v("产生条件：IE6浏览器，标签的最低高度/宽度设置（min/max-height）\n解决办法：为IE6单独设置hack，即_height:最小高度值；_width：最小宽度值（对于IE6，当实际宽高超出定义的宽高时，元素会自动调整宽高）。对于最大高度和最大宽度，没有必要设置兼容，当前对于开发者来说，只需要保证IE6下正常显示即可，无需在它身上花费太多功夫。\n")])]),a._v(" "),e("h3",{attrs:{id:"_15、纵向居中，ie6不支持display-table-cell"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_15、纵向居中，ie6不支持display-table-cell"}},[a._v("#")]),a._v(" 15、纵向居中，IE6不支持display:table-cell")]),a._v(" "),e("pre",[e("code",[a._v("产生条件：IE6浏览器，设置一个元素在另一个元素中垂直方向上居中对齐，不能够支持以单元格的方式来显示元素；\n解决办法：如果是单行文本，采用line-height和height的配合使得文本垂直居中，如果中间是其他元素或者多行文本，采用其他方法进行居中处理\n")])]),a._v(" "),e("h3",{attrs:{id:"_16、input-聚焦框颜色与样式不同"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16、input-聚焦框颜色与样式不同"}},[a._v("#")]),a._v(" 16、input 聚焦框颜色与样式不同")]),a._v(" "),e("pre",[e("code",[a._v("产生条件：各个浏览器表现不同；\n处理方法：使用outline:none，清除默认样式之后再统一设置。\n")])]),a._v(" "),e("h3",{attrs:{id:"_17、鼠标移上小手效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_17、鼠标移上小手效果"}},[a._v("#")]),a._v(" 17、鼠标移上小手效果")]),a._v(" "),e("pre",[e("code",[a._v("产生条件：IE6，cursor:hand ：IE完全支持。但是在firefox是不支持的，没有效果。\n解决办法：设置两种cursor:pointer; cursor:hand。\n")])]),a._v(" "),e("h3",{attrs:{id:"_18、子标签无法撑开父标签的高度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_18、子标签无法撑开父标签的高度"}},[a._v("#")]),a._v(" 18、子标签无法撑开父标签的高度")]),a._v(" "),e("pre",[e("code",[a._v("产生条件：父标签内部含一个或多个子标签，父标签没有设置浮动，而子标签发生浮动；\n处理方法：\n    方法1：在子标签最后添加清除浮动的设置<div style='height:0;clear:both'></div>;    \n    方法2：为父标签添加{overflow:hidden;}的样式；    \n    方法3：为父标签设置固定高度。\n")])]),a._v(" "),e("h3",{attrs:{id:"_19、li的间距问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_19、li的间距问题"}},[a._v("#")]),a._v(" 19、li的间距问题")]),a._v(" "),e("pre",[e("code",[a._v("产生条件：IE6浏览器 li标签设置宽高，且li里面的元素发生了浮动；\n处理方法：\n    方法1：li不设置宽高；\n    方法2：li内部的标签不进行浮动。\n")])]),a._v(" "),e("h3",{attrs:{id:"_20、行内元素布局混乱"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_20、行内元素布局混乱"}},[a._v("#")]),a._v(" 20、行内元素布局混乱")]),a._v(" "),e("pre",[e("code",[a._v("产生条件：行内元素为包含框时，如果包含框包含的绝对定位元素以百分比为单位进行定位；\n处理方法：在行内元素当中加入{zoom:1}，触发IE的hasLayout。\n")])]),a._v(" "),e("h3",{attrs:{id:"_21、多显示一个字"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_21、多显示一个字"}},[a._v("#")]),a._v(" 21、多显示一个字")]),a._v(" "),e("pre",[e("code",[a._v("产生条件：多个浮动元素中间夹杂HTML注释语句，浮动元素宽度设置为100%；则在下一行多显示一个上一行的最后一个字符；\n处理方法：果断删掉注释！\n")])]),a._v(" "),e("h3",{attrs:{id:"_22、css优先级-！important"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_22、css优先级-！important"}},[a._v("#")]),a._v(" 22、CSS优先级 ！important")]),a._v(" "),e("pre",[e("code",[a._v("产生条件：IE6当中，在同一组CSS属性中，!important不起作用；\n处理方法：单独设置。\n")])]),a._v(" "),e("h3",{attrs:{id:"_23、img图片下部高度多余5px"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_23、img图片下部高度多余5px"}},[a._v("#")]),a._v(" 23、img图片下部高度多余5px")]),a._v(" "),e("pre",[e("code",[a._v("产生条件：IE6浏览器；\n处理方法：父级设置overflow: hidden; 或 img { display: block; } 或 _margin: -5px; \n")])]),a._v(" "),e("h3",{attrs:{id:"_24、高度不要为单数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_24、高度不要为单数"}},[a._v("#")]),a._v(" 24、高度不要为单数")]),a._v(" "),e("pre",[e("code",[a._v("父标签高度20，子标签11，垂直居中，20-11=9，9要分给文字的上面与下面，怎么分？IE6就会与其它的不同，所以，尽量避免\n")])]),a._v(" "),e("h3",{attrs:{id:"_25、position下的left，bottom错位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_25、position下的left，bottom错位"}},[a._v("#")]),a._v(" 25、position下的left，bottom错位")]),a._v(" "),e("pre",[e("code",[a._v("解决方法：为父级(relative层)设置宽高或添加zoom:1 \n")])]),a._v(" "),e("h3",{attrs:{id:"_26、在-ie6-下定位元素的父级宽高都为奇数时，那么在-ie6-下定位元素的-right和bottom都有1像素的偏差。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_26、在-ie6-下定位元素的父级宽高都为奇数时，那么在-ie6-下定位元素的-right和bottom都有1像素的偏差。"}},[a._v("#")]),a._v(" 26、在 IE6 下定位元素的父级宽高都为奇数时，那么在 IE6 下定位元素的 right和bottom都有1像素的偏差。")]),a._v(" "),e("pre",[e("code",[a._v("解决办法：设为偶数。\n")])]),a._v(" "),e("h3",{attrs:{id:"_27、在ie67下，li本身没浮动，但是li的内容有浮动，li下边就会产生一个间隙。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_27、在ie67下，li本身没浮动，但是li的内容有浮动，li下边就会产生一个间隙。"}},[a._v("#")]),a._v(" 27、在ie67下，li本身没浮动，但是li的内容有浮动，li下边就会产生一个间隙。")]),a._v(" "),e("pre",[e("code",[a._v("解决办法：给li设置 float:left或者给li加vertical-align:top。\n")])]),a._v(" "),e("h3",{attrs:{id:"_28、在ie6下高度小于19px的元素，高度会被当做19px来处理。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_28、在ie6下高度小于19px的元素，高度会被当做19px来处理。"}},[a._v("#")]),a._v(" 28、在IE6下高度小于19px的元素，高度会被当做19px来处理。")]),a._v(" "),e("pre",[e("code",[a._v("解决办法：设置font-size：0;或者overflow:hidden;\n")])]),a._v(" "),e("h3",{attrs:{id:"_29、在ie6，7下输入类型的表单控件上下各有1px的间隙。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_29、在ie6，7下输入类型的表单控件上下各有1px的间隙。"}},[a._v("#")]),a._v(" 29、在IE6，7下输入类型的表单控件上下各有1px的间隙。")]),a._v(" "),e("pre",[e("code",[a._v("解决办法：给input加浮动。\n")])]),a._v(" "),e("h3",{attrs:{id:"_30、在ie6，7下输入类型的表单控件加border-none无效。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_30、在ie6，7下输入类型的表单控件加border-none无效。"}},[a._v("#")]),a._v(" 30、在IE6，7下输入类型的表单控件加border:none无效。")]),a._v(" "),e("pre",[e("code",[a._v("解决办法：重置input的背景。background:#fff;\n")])]),a._v(" "),e("h3",{attrs:{id:"_31、ie6-100-高度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_31、ie6-100-高度"}},[a._v("#")]),a._v(" 31、IE6 100% 高度")]),a._v(" "),e("pre",[e("code",[a._v("在IE6下，如果要给元素定义100%高度，必须要明确定义它的父级元素的高度，如果你需要给元素定义满屏的高度，就得先给html和body定义height:100%;。\n")])]),a._v(" "),e("h3",{attrs:{id:"_32、ie6躲猫猫bug"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_32、ie6躲猫猫bug"}},[a._v("#")]),a._v(" 32、IE6躲猫猫bug")]),a._v(" "),e("pre",[e("code",[a._v('在IE6和IE7下，躲猫猫bug是一个非常恼人的问题。一个撑破了容器的浮动元素，如果在他之后有不浮动的内容，并且有一些定义了:hover的链接，当鼠标移到那些链接上时，在IE6下就会触发躲猫猫。 \n解决方法：\n    1.在（那个未浮动的）内容之后添加一个<span style="clear: both;"></span> \n    2.触发包含了这些链接的容器的hasLayout，一个简单的方法就是给其定义height:1%; \n')])]),a._v(" "),e("h3",{attrs:{id:"_33、ie下z-index的bug"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_33、ie下z-index的bug"}},[a._v("#")]),a._v(" 33、IE下z-index的bug")]),a._v(" "),e("pre",[e("code",[a._v("在IE浏览器中，定位元素的z-index层级是相对于各自的父级容器，所以会导致z-index出现错误的表现。解决方法是给其父级元素定义z-index，有些情况下还需要定义position:relative。\n")])]),a._v(" "),e("h2",{attrs:{id:"除以上常见的兼容问题，剩余的小细节（差几个像素）通过前缀法调节"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#除以上常见的兼容问题，剩余的小细节（差几个像素）通过前缀法调节"}},[a._v("#")]),a._v(" 除以上常见的兼容问题，剩余的小细节（差几个像素）通过前缀法调节")]),a._v(" "),e("h3",{attrs:{id:"_1、ie-其他的兼容问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、ie-其他的兼容问题"}},[a._v("#")]),a._v(" 1、IE 其他的兼容问题")]),a._v(" "),e("pre",[e("code",[a._v("如果你的页面对IE7兼容没有问题又不想大量修改现有代码，同时又能在IE8中正常使用，只需在head中添加\n<meta http-equiv=”x-ua-compatible” content=”ie=7”/>\n")])]),a._v(" "),e("h3",{attrs:{id:"_2、额外介绍："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、额外介绍："}},[a._v("#")]),a._v(" 2、额外介绍："),e("meta",{attrs:{"http-equiv":"X-UA-Compatible",content:"IE=Edge,chrome=1"}})]),a._v(" "),e("pre",[e("code",[a._v('这是一个，文档兼容模式的定义。\nEdge 模式告诉 IE 以最高级模式渲染文档，也就是任何 IE 版本都以当前版本所支持的最高级标准模式渲染，避免版本升级造成的影响。简单的说，就是什么版本 IE 就用什么版本的标准模式渲染\n<meta http-equiv="X-UA-Compatible" content="IE=edge">\n\n使用以下代码强制 IE 使用 Chrome Frame 渲染\n<meta http-equiv="X-UA-Compatible" content="chrome=1">\n\n提示 IE 用户安装 Google Frame\nGoogle 官方提供了对 Google Frame 插件安装情况的检测，这里直接调用方法即可，如果检测到 IE 并未安装 Google Frame，则弹出对话框提示安装。\n<script src="http://ajax.googleapis.com/ajax/libs/chrome-frame/1/CFInstall.min.js"><\/script>\n<script>CFInstall.check();<\/script>\n\n最佳的兼容模式方案，结合考虑以上两种：\n<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n')])]),a._v(" "),e("h3",{attrs:{id:"_3、常用的css-hack方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、常用的css-hack方法"}},[a._v("#")]),a._v(" 3、常用的css hack方法")]),a._v(" "),e("pre",[e("code",[a._v("1、条件注释法  在head和body里面注释\n2、属性前缀法\n3、选择器前缀法：针对一些页面表现不一致或者需要特殊对待的浏览器，在CSS选择器前加上一些只有某些特定浏览器才能识别的前缀进行hack。\n\n目前最常见的是\n*html *前缀只对IE6生效\n*+html *+前缀只对IE7生效\n@media screen\\9{...}只对IE6/7生效\n@media \\0screen {body { background: red; }}只对IE8有效\n@media \\0screen\\,screen\\9{body { background: blue; }}只对IE6/7/8有效\n@media screen\\0 {body { background: green; }} 只对IE8/9/10有效\n")])])])}),[],!1,null,null,null);t.default=s.exports}}]);
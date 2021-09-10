(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{543:function(e,a,t){"use strict";t.r(a);var r=t(1),n=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"html基础3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html基础3"}},[e._v("#")]),e._v(" HTML基础3")]),e._v(" "),t("h2",{attrs:{id:"结构标记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结构标记"}},[e._v("#")]),e._v(" 结构标记")]),e._v(" "),t("h3",{attrs:{id:"_1、作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、作用"}},[e._v("#")]),e._v(" 1、作用")]),e._v(" "),t("pre",[t("code",[e._v("增强标签的语义性。HTML5出来之前，我们用div来表示页面章节，但是这些div都没有实际意义。这些标签只是我们提供给浏览器的指令，只是定义一个网页的某些部分，适合做容器。\n")])]),e._v(" "),t("h3",{attrs:{id:"_2、语义标签优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、语义标签优点"}},[e._v("#")]),e._v(" 2、语义标签优点")]),e._v(" "),t("pre",[t("code",[e._v("更容易被搜索引擎收录；\n更容易让屏幕阅读器读出网页内容；\n能够更好的体现页面的主题；\n兼容性更好，支持更多的网络设备。\n")])]),e._v(" "),t("h3",{attrs:{id:"_3、h5新增语义标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、h5新增语义标签"}},[e._v("#")]),e._v(" 3、H5新增语义标签")]),e._v(" "),t("pre",[t("code",[e._v('header(头部)\nnav(只是导航+列表)\nsection(小结，内容具体部分)\narticle(文章)\nfooter(底部信息)\naside(侧边栏)\n\n旧：`<div id="header"></div>`\n新：`<header class=""></header>`  可以嵌套多次使用。也可以与div相互嵌套使用。\n')])]),e._v(" "),t("h2",{attrs:{id:"表单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表单"}},[e._v("#")]),e._v(" 表单")]),e._v(" "),t("h3",{attrs:{id:"_1、作用-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、作用-2"}},[e._v("#")]),e._v(" 1、作用")]),e._v(" "),t("pre",[t("code",[e._v("用于搜集不同类型的用户输入,用户提交表单时向服务器传输数据，从而实现用户与Web服务器的交互。\n<form>\n    \x3c!-- 表单元素 --\x3e\n</form>\n")])]),e._v(" "),t("h3",{attrs:{id:"_2、表单属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、表单属性"}},[e._v("#")]),e._v(" 2、表单属性")]),e._v(" "),t("pre",[t("code",[e._v("name:表单的名称，如果未写name，服务器无法获得表单内容。\naction：提交表单时，向何处发送表单数据；\nmethod：定义浏览器将表单中的数据提交给服务器的方式，默认get;\n    当表单中有用户信息时，将get改为post。\nenctype:规定在发送到服务器之前应该如何对表单数据进行编码。\n    默认：application/x-www-form-urlencoded\n    如有文件上传：multipart/form-data\n\n注意\nname： 属性是和服务器通信时使用的名称；\nclass： 用于CSS中\nid： 属性是浏览器端使用的名称，主要是为了方便客户端编程而在css和JavaScript中使用的。\n")])]),e._v(" "),t("h2",{attrs:{id:"表单元素（在表单中与用户进行交互的控件）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表单元素（在表单中与用户进行交互的控件）"}},[e._v("#")]),e._v(" 表单元素（在表单中与用户进行交互的控件）")]),e._v(" "),t("h3",{attrs:{id:"_1、input-文本框、密码框"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、input-文本框、密码框"}},[e._v("#")]),e._v(" 1、input:文本框、密码框")]),e._v(" "),t("pre",[t("code",[e._v('<input type="text"/>  文本框\n<input type="password"> 密码框\n<input type="radio"/>  单选按钮  分组name,初始值value要写   checked="checked"默认\n<input type="checkbox"> 复选框   分组name,初始值value要写   checked="checked"默认\n<input type="submit">  提交按钮  无name ，写初始值\n<input type="reset">  重置按钮\n<input type="button">  普通按钮\n<input type="file">  文件选择框  如有文件上传：enctype="multipart/form-data"\n<input type="hidden"> 隐藏域 通常用于向服务器提交不需要显示给用户的信息，用户看不到。\n\ntype:默认文本框，写什么显示什么；\nname:表单的名称；\nvalue:显示在控件上的初始值；\nmaxlength:用户输入的最大字符长度；\nid:唯一标识；\nreadonly:只读属性，用户不能改变控件中的value；\ndisabled：禁用，控件会显示灰色背景，用户不能改变文本框和密码框的值。并且在提交表单时，浏览器不会将该文本框和密码框的值发送给服务器。\n')])]),e._v(" "),t("h3",{attrs:{id:"_2、readonly与disabled的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、readonly与disabled的区别"}},[e._v("#")]),e._v(" 2、readonly与disabled的区别")]),e._v(" "),t("pre",[t("code",[e._v("readonly只针对input(text/password)和textarea有效，而disabled对于所有的表单元素都有效，但是表单元素在使用了disabled后，当我们将表单提交的话，这个元素的值不会被传递出去，而readonly会将该值传递出去。\n")])]),e._v(" "),t("h3",{attrs:{id:"_3、关联文本与表单元素文本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、关联文本与表单元素文本"}},[e._v("#")]),e._v(" 3、关联文本与表单元素"),t("label",[e._v("文本")])]),e._v(" "),t("pre",[t("code",[e._v('<label> 标签为 input 元素定义标签。label 元素不会向用户呈现任何特殊的样式。\n不过，它为鼠标用户改善了可用性，因为如果用户点击label元素内的文本，则会切换到控件本身。\n<label> 标签的for属性应该等于相关元素的id元素，以便将它们捆绑起来。\n\n两种使用方法：\n<label for="username">用户名：<input type="text" id="username"/></label>建议第一种  \n<label for="username">用户名：</label><input type="text" id="username"/>\n')])]),e._v(" "),t("h3",{attrs:{id:"_4、textarea-多文本输入框"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、textarea-多文本输入框"}},[e._v("#")]),e._v(" 4、textarea:多文本输入框")]),e._v(" "),t("pre",[t("code",[e._v('属性：name    cols:规定文本区可见宽度  rows：规定文本区可见行数\n默认用户可更改大小,禁止：style="resize:none"\n')])]),e._v(" "),t("h3",{attrs:{id:"_5、select和option：下拉框"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、select和option：下拉框"}},[e._v("#")]),e._v(" 5、select和option：下拉框")]),e._v(" "),t("pre",[t("code",[e._v('<select name="city" size="3">  \n    <option value="bj">北京</option>\n    <option value="sh">上海</option>\n    <option value="gz">广州</option>\n    <option value="dl">大连</option>\n</select>\n   \nselect属性：name    size(大于1，从下拉列表变为滚动列表)   multiple(设置多选)\noption属性：value   selected(预选中)\n')])]),e._v(" "),t("h2",{attrs:{id:"表单元素——其他元素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表单元素——其他元素"}},[e._v("#")]),e._v(" 表单元素——其他元素")]),e._v(" "),t("h3",{attrs:{id:"_1、浮动框架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、浮动框架"}},[e._v("#")]),e._v(" 1、浮动框架")]),e._v(" "),t("pre",[t("code",[e._v("<iframe></iframe>\n属性：src    width    height    frameborder(0,不带边框;1,带边框)\n")])]),e._v(" "),t("h3",{attrs:{id:"_2、摘要与细节"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、摘要与细节"}},[e._v("#")]),e._v(" 2、摘要与细节")]),e._v(" "),t("pre",[t("code",[e._v("将一部分内容进行展示与收缩\n<details>\n    <summary>标题</summary>\n    显示的内容\n</details>\n")])]),e._v(" "),t("h3",{attrs:{id:"_3、度量元素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、度量元素"}},[e._v("#")]),e._v(" 3、度量元素")]),e._v(" "),t("pre",[t("code",[e._v("<meter></meter>\n属性：min(最小值，默认0)  max(最大值，默认1)   value(当前值，默认0)\n")])]),e._v(" "),t("h3",{attrs:{id:"_4、分组元素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、分组元素"}},[e._v("#")]),e._v(" 4、分组元素")]),e._v(" "),t("pre",[t("code",[e._v("<fieldset>\n    <legend>组标题</legend>\n    内容\n</fieldest>\n")])]),e._v(" "),t("h3",{attrs:{id:"_5、高亮文本显示-标记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、高亮文本显示-标记"}},[e._v("#")]),e._v(" 5、高亮文本显示(标记)")]),e._v(" "),t("pre",[t("code",[e._v("<mark></mark>\n")])]),e._v(" "),t("h2",{attrs:{id:"五、浮动框架（iframe）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、浮动框架（iframe）"}},[e._v("#")]),e._v(" 五、浮动框架（iframe）")]),e._v(" "),t("pre",[t("code",[e._v("在一个浏览器中同时显示多个页面文档\n<iframe></iframe>\n")])]),e._v(" "),t("p",[e._v("属性:")]),e._v(" "),t("pre",[t("code",[e._v("1、src : 引入的网页路径(url)\n2、 width : 宽度\n3、 height : 高度\n4、 frameborder : 边框(取值0或1)\n")])])])}),[],!1,null,null,null);a.default=n.exports}}]);
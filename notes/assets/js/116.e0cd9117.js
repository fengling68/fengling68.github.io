(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{470:function(n,t,e){"use strict";e.r(t);var a=e(1),r=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"js事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js事件"}},[n._v("#")]),n._v(" JS事件")]),n._v(" "),e("h2",{attrs:{id:"什么是事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是事件"}},[n._v("#")]),n._v(" 什么是事件")]),n._v(" "),e("pre",[e("code",[n._v("用户或浏览器执行的某个动作\n1、主要用于监听网页行为(鼠标、键盘)，根据不同行为给予不同的响应(对网页的操作)\n2、好莱坞法则：don not call me , I will call you.\n3、函数：由开发者调用；添加事件后：函数由用户调用。\n")])]),n._v(" "),e("h2",{attrs:{id:"事件三要素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件三要素"}},[n._v("#")]),n._v(" 事件三要素")]),n._v(" "),e("pre",[e("code",[n._v("1、事件源：触发事件的源头 按钮\n2、事件：点击\n3、事件处理程序：响应的函数\n")])]),n._v(" "),e("h2",{attrs:{id:"事件书写格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件书写格式"}},[n._v("#")]),n._v(" 事件书写格式")]),n._v(" "),e("pre",[e("code",[n._v("1、内联模式：通过标签中的属性添加事件(很少用)\n2、脚本模式：后面的事件会覆盖前面的事件\n3、DOM2模式：\n")])]),n._v(" "),e("h3",{attrs:{id:"_1、html事件处理格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、html事件处理格式"}},[n._v("#")]),n._v(" 1、HTML事件处理格式")]),n._v(" "),e("pre",[e("code",[n._v("this,传参\n")])]),n._v(" "),e("h3",{attrs:{id:"_2、dom0级事件处理格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、dom0级事件处理格式"}},[n._v("#")]),n._v(" 2、DOM0级事件处理格式")]),n._v(" "),e("pre",[e("code",[n._v("获取标签  btn.onclick = function(){};\n获取标签  btn.onclick = fn; function fn(){}\n给一个元素节点多次绑定同一事件，后者会覆盖前面的。\n与绑定事件相对应的，有一个删除绑定事件。\n    btn.onclick = null;\n")])]),n._v(" "),e("h3",{attrs:{id:"_3、dom2级事件处理格式-h5新增-有兼容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、dom2级事件处理格式-h5新增-有兼容"}},[n._v("#")]),n._v(" 3、DOM2级事件处理格式(H5新增,有兼容)")]),n._v(" "),e("pre",[e("code",[n._v('1、标准浏览器\n\n    绑定事件：元素节点.addEventListener("事件",事件处理程序,布尔值);\n        参数一: 事件前不加on\n        参数二：函数名或匿名函数\n        参数三：true捕获事件流；false冒泡排序(默认)\n\n    删除事件：元素节点.removeEventListener(事件,函数名,布尔值);\n        参数二：必须是函数名\n\n2、IE浏览器\n\n    绑定事件：元素节点.attachEvent("事件",事件处理程序);\n        参数一：事件前加on\n        参数二：函数名或匿名函数\n\n    删除事件：元素节点.detachEvent(事件,事件处理程序);\n        参数二：必须是函数名\n')])]),n._v(" "),e("h2",{attrs:{id:"常用事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用事件"}},[n._v("#")]),n._v(" 常用事件")]),n._v(" "),e("pre",[e("code",[n._v("鼠标在页面任意移动，事件源:document\n")])]),n._v(" "),e("h3",{attrs:{id:"_1、ui事件-事件源-window"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、ui事件-事件源-window"}},[n._v("#")]),n._v(" 1、UI事件(事件源:window)")]),n._v(" "),e("pre",[e("code",[n._v("    onload: 页面加载事件\n        先加载页面中的html,css,音频，视频等多媒体资源后，在执行响应函数。\n\n    onscroll：页面滚动事件\n        获取监听水平垂直方向的滚动距离。\n        window.scrollTo(x,y);返回到指定位置\n\n    onresize：页面大小改变事件\n")])]),n._v(" "),e("h3",{attrs:{id:"_2、鼠标事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、鼠标事件"}},[n._v("#")]),n._v(" 2、鼠标事件")]),n._v(" "),e("pre",[e("code",[n._v("    onclick:点击事件\n    ondblclick:鼠标双击事件\n\n    onmouseover:鼠标移入事件 //触发多次,进入子元素节点会触发事件\n    onmouseout:鼠标移出事件\n\n    onmouseenter:鼠标移入    //触发一次,进入子元素节点不会触发事件\n    onmouseleave:鼠标移出\n\n    onmousedown:鼠标按下事件\n    onmousemove:鼠标移动事件\n    onmouseup:鼠标抬起事件\n")])]),n._v(" "),e("h3",{attrs:{id:"_3、键盘事件-设置快捷键；做游戏"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、键盘事件-设置快捷键；做游戏"}},[n._v("#")]),n._v(" 3、键盘事件 (设置快捷键；做游戏)")]),n._v(" "),e("pre",[e("code",[n._v("    onkeydown: 当键盘被按下时触发\n    onkeyup: 当键盘抬起的时候触发\n    onkeypress: 键盘按压(只能识别字符键)\n")])]),n._v(" "),e("h3",{attrs:{id:"_4、焦点事件-用户表单验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、焦点事件-用户表单验证"}},[n._v("#")]),n._v(" 4、焦点事件 (用户表单验证)")]),n._v(" "),e("pre",[e("code",[n._v("    onfocus: 获取焦点\n    onblur:  失去焦点\n")])]),n._v(" "),e("h3",{attrs:{id:"_5、表单提交事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、表单提交事件"}},[n._v("#")]),n._v(" 5、表单提交事件")]),n._v(" "),e("pre",[e("code",[n._v("    onsubmit: 表单提交事件 (事件源：form表单)\n    onchange:内容改变时触发 (事件源: 下拉列表select)\n")])]),n._v(" "),e("h2",{attrs:{id:"按键"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#按键"}},[n._v("#")]),n._v(" 按键")]),n._v(" "),e("pre",[e("code",[n._v("altkey:是否按下alt\nshiftkey:是否按下shift\nctrlkey:是否按下ctrl\n")])]),n._v(" "),e("h2",{attrs:{id:"js和jquery的入口函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js和jquery的入口函数"}},[n._v("#")]),n._v(" JS和jQuery的入口函数")]),n._v(" "),e("pre",[e("code",[n._v("jQuery:入口函数 $(document).ready()\nJS : 入口函数 window.onload = function(){}\n")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
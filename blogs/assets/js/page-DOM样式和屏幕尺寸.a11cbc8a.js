(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{803:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"dom样式和屏幕尺寸"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom样式和屏幕尺寸"}},[t._v("#")]),t._v(" DOM样式和屏幕尺寸")]),t._v(" "),a("h2",{attrs:{id:"css样式操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css样式操作"}},[t._v("#")]),t._v(" CSS样式操作")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("在JS中，如果样式名称有连字符，去掉连字符，驼峰命名\n")])])]),a("h2",{attrs:{id:"获取css样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取css样式"}},[t._v("#")]),t._v(" 获取CSS样式")]),t._v(" "),a("p",[t._v("1、内联样式(行内样式)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('元素节点.style.样式名称;\n元素节点.style["样式名称"];\n\ndiv.style.color;\np.style.width;\n......\n')])])]),a("p",[t._v("2、非内联样式")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('IE浏览器：\n (1)元素节点.currentStyle.样式名称\n (2)元素节点.currentStyle["样式名称"]\n\n非IE浏览器：\n (1)window.getComputedStyle(元素节点 , null).样式名称;\n (2)window.getComputedStyle(元素节点 , null)["样式名称"];\n')])])]),a("p",[t._v("3、兼容性处理(非内联样式)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('function getStyle(ele,attr){\n    if(ele.currentStyle){\n        return ele.currentStyle[attr];\n    }else{\n        return window.getComputedStyle(ele,null)[attr];\n    }\n}\n\nconsole.log(getStyle(div1,"border"));\n')])])]),a("h2",{attrs:{id:"设置样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置样式"}},[t._v("#")]),t._v(" 设置样式")]),t._v(" "),a("p",[t._v("1、设置内联样式")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('元素节点.style.样式名称 = "";\n')])])]),a("h2",{attrs:{id:"dom各种屏幕尺寸"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom各种屏幕尺寸"}},[t._v("#")]),t._v(" DOM各种屏幕尺寸")]),t._v(" "),a("p",[t._v("1、offsetWidth 元素实际宽度(不带单位)")]),t._v(" "),a("p",[t._v("2、offsetHeight 元素实际高度(不带单位)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('var myDiv = document.getElementsByTagName("div")[0];\nconsole.log(myDiv.offsetWidth);\nconsole.log(myDiv.offsetHeight);\n')])])]),a("p",[t._v("3、 offsetParent")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("距离当前元素节点最近的有定位的父元素节点；如果都没定位，则是body。\n")])])]),a("p",[t._v("4、 offsetLeft  ——left")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("有定位时：水平方向的偏移量(不带单位)；没有定位时：监听到body的偏移量\n")])])]),a("p",[t._v("5、 offsetTop   ——top")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("有定位时：垂直方向的偏移量(不带单位)；没有定位时：监听到body的偏移量\n")])])]),a("h2",{attrs:{id:"网页尺寸"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网页尺寸"}},[t._v("#")]),t._v(" 网页尺寸")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('//offsetHeight :不包括滚动条\n//scrollHeight :包括滚动条\n\nfunction getSize(){\n    var width = document.body.offsetWidth || document.documentElement.offsetWidth;\n    var height = document.body.offsetHeight || document.documentElement.offsetHeight;\n    alert(width +","+height)\n}\ngetSize();\n')])])]),a("h2",{attrs:{id:"innerhtml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#innerhtml"}},[t._v("#")]),t._v(" innerHTML")]),t._v(" "),a("p",[t._v("1、设置文本内容")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('d.innerHTML = "我今年"+i+"岁了";\n')])])]),a("p",[t._v("2、识别标签")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("d.innerHTML = \"<a href='javascript:;'>我是a标签</a>\";\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);
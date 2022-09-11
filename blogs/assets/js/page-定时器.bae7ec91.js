(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{567:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"定时器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定时器"}},[t._v("#")]),t._v(" 定时器")]),t._v(" "),e("h2",{attrs:{id:"settimeout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#settimeout"}},[t._v("#")]),t._v(" setTimeout()")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("setTimeout设置为0，代表立即插入队列，但不是立即执行。setTimeout并不能保证执行的时间，是否执行取决于JavaScript的线程是拥挤还是空闲。\n\n1、延迟一定时间，执行某个函数\n2、参数1：匿名函数(函数名)\n   参数2：延时时间：ms    1s = 1000ms\n\n//表现形式一\nsetTimeout(function(){\n    console.log(789);\n},5000);\n\n//表现形式二\nsetTimeout(fn,5000);\nfunction fn(){\n    console.log(789);\n}\n")])])]),e("h2",{attrs:{id:"cleartimeout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cleartimeout"}},[t._v("#")]),t._v(" clearTimeout()")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("关闭定时器 参数：对应的定时器名称\n")])])]),e("h2",{attrs:{id:"setinterval"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setinterval"}},[t._v("#")]),t._v(" setInterval()")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('1、每隔一定时间，重复执行某个函数\n2、参数1：匿名函数(函数名)\n   参数2：间隔时间：ms    1s = 1000ms\n\n//使用方式同setTimeout\n\nvar i = 0;\nsetInterval(function(){\n    i++;\n    document.write("<p>我今年"+i+"岁了</p>");\n} , 1000);\n')])])]),e("h2",{attrs:{id:"clearinterval"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clearinterval"}},[t._v("#")]),t._v(" clearInterval()")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("关闭定时器 参数：对应的定时器名称\n\nvar timer = setInterval(function(){},1000);\nclearInterval(timer);\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);
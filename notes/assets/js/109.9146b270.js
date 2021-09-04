(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{466:function(n,a,t){"use strict";t.r(a);var r=t(1),e=Object(r.a)({},(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"匿名函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#匿名函数"}},[n._v("#")]),n._v(" 匿名函数")]),n._v(" "),t("h2",{attrs:{id:"匿名函数-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#匿名函数-2"}},[n._v("#")]),n._v(" 匿名函数")]),n._v(" "),t("pre",[t("code",[n._v("引用数据类型(3种)：对象，数组，对象\n\n匿名函数 又名，拉姆达函数\n匿名函数应用场景：事件，定时器(参数)，对象(属性值), 函数中作为返回值\n")])]),n._v(" "),t("h2",{attrs:{id:"创建方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建方式"}},[n._v("#")]),n._v(" 创建方式")]),n._v(" "),t("pre",[t("code",[n._v("1、匿名函数()表示执行\n    (function(a,b){\n        return a+b;\n    });\n\n2、变量接收执行\n    var add = function(a,b){\n        return a+b;\n    };\n    console.log(add(2,3));\n\n3、自执行，自己创建并执行。在匿名函数后加()执行。\n    var add = function(a,b){\n        return a+b;\n    }(2,3); \n")])]),n._v(" "),t("h2",{attrs:{id:"回调函数-callback"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回调函数-callback"}},[n._v("#")]),n._v(" 回调函数 callback")]),n._v(" "),t("pre",[t("code",[n._v("一个主体函数中，有另一个函数作为参数。只有当主体函数达到某种条件后，才有可能会执行的函数-回调函数\n")])]),n._v(" "),t("h2",{attrs:{id:"自执行函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自执行函数"}},[n._v("#")]),n._v(" 自执行函数")]),n._v(" "),t("pre",[t("code",[n._v('自执行函数：自己就执行\n框架 插件 应用比较多 jq\n自执行函数书写之前，为了防止上面代码对该函数造成影响，习惯性会在自执行函数之前加分号，进行分隔\n\nfunction fn () {\n    console.log(123);\n}\nconsole.log(fn);\n\n//自执行函数书写格式：\n//第一种\nvar a = 10;\n;(function(val) {\n    console.log("我是" + val);\n})("自执行函数1");\n//第二种方式\n(function(val) {\n    console.log("我是" + val);\n}("自执行函数2"));\n\n//第三种格式 标点符号 ! + -\n!function(val) {\n    console.log("我是" + val);\n}("自执行函数3");\n+function(val) {\n    console.log("我是" + val);\n}("自执行函数4");\n')])]),n._v(" "),t("h2",{attrs:{id:"js的执行顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js的执行顺序"}},[n._v("#")]),n._v(" JS的执行顺序")]),n._v(" "),t("pre",[t("code",[n._v("1、预编译，将全局定义的函数和全局定义的变量提前。匿名函数不能提前，只是一个普通的语句。\n2、JS从上到下逐行执行\n3、在加载HTML和CSS时，只要碰到JS都要停止，先执行JS在执行其他的代码\n    JS代码放在最后或者使用onload事件\n    外部JS文件必须放在body的后面，避免由于网络问题阻塞html界面的显示。\n")])]),n._v(" "),t("h2",{attrs:{id:"函数创建方式-补充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数创建方式-补充"}},[n._v("#")]),n._v(" 函数创建方式(补充)")]),n._v(" "),t("pre",[t("code",[n._v("1、普通方式\n2、匿名函数创建方式\n3、原始方式，new的方式，底层常用\n")])])])}),[],!1,null,null,null);a.default=e.exports}}]);
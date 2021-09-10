(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{502:function(t,a,r){"use strict";r.r(a);var e=r(1),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"原型和闭包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#原型和闭包"}},[t._v("#")]),t._v(" 原型和闭包")]),t._v(" "),r("p",[t._v("每个函数(对象)都有prototype属性，是对象属性的集合，默认只有constructor属性；"),r("br"),t._v("\n每个函数(对象)都有_proto_属性，隐世原型，它指向创建该对象的函数的prototype。")]),t._v(" "),r("h3",{attrs:{id:"_1、作用域"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、作用域"}},[t._v("#")]),t._v(" 1、作用域")]),t._v(" "),r("pre",[r("code",[t._v("语句执行的环境\n全局作用域、函数作用域、eval作用域\n")])]),t._v(" "),r("h3",{attrs:{id:"_2、变量对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、变量对象"}},[t._v("#")]),t._v(" 2、变量对象")]),t._v(" "),r("pre",[r("code",[t._v("定义的所有变量和函数\n")])]),t._v(" "),r("h3",{attrs:{id:"_3、执行环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、执行环境"}},[t._v("#")]),t._v(" 3、执行环境")]),t._v(" "),r("pre",[r("code",[t._v("定义了变量和函数有权访问的其他数据\n\n` 1、执行环境中所有代码执行完毕后就会被该环境销毁，保存在其中的所有变量和函数也随之被销毁。`\n` 2、每个函数都有自己的执行环境，当执行流进入函数中时，函数的环境就会被推入到一个环境栈中；而在函数执行完后，栈将其弹出，把控制权返回之前的执行环境。`\n")])]),t._v(" "),r("h3",{attrs:{id:"_4、作用域链"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4、作用域链"}},[t._v("#")]),t._v(" 4、作用域链")]),t._v(" "),r("pre",[r("code",[t._v("保证对执行环境有权访问的所有变量和函数的访问。\n全局函数的变量对象始终都是作用域链中的最后一个对象。\n作用域链本质上是一个指向变量对象的指针列表，只引用但不包含变量对象。\n")])]),t._v(" "),r("h3",{attrs:{id:"_5、原型链"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5、原型链"}},[t._v("#")]),t._v(" 5、原型链")]),t._v(" "),r("pre",[r("code",[t._v("访问一个对象的属性时，先在基本属性中查找，如果没有，再沿着 _proto_ 这条链向上找，这就是原型链。\n")])]),t._v(" "),r("h3",{attrs:{id:"_6、继承"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6、继承"}},[t._v("#")]),t._v(" 6、继承")]),t._v(" "),r("pre",[r("code",[t._v("因为所有对象的原型链都会找到Object.prototype，因此所有对象都有Object.prototype方法，这就是继承。\n")])]),t._v(" "),r("h3",{attrs:{id:"_7、闭包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7、闭包"}},[t._v("#")]),t._v(" 7、闭包")]),t._v(" "),r("pre",[r("code",[t._v("闭包是指有权访问另一个函数作用域中变量和方法的函数。\n常见的创建方式是在一个函数内部创建另一个函数。\n闭包使用不合理，会造成空间浪费、内存泄漏、性能消耗等问题。\n\n`闭包实现封装，只有通过对象的特定方法才能访问其属性。`\n")])]),t._v(" "),r("h3",{attrs:{id:"_8、关系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8、关系"}},[t._v("#")]),t._v(" 8、关系")]),t._v(" "),r("pre",[r("code",[t._v("`\n函数被创建，有了作用域；  ————> 语句执行的环境\n函数被调用，有了作用域链；  ————> 指向变量对象的指针列表\n函数被继承时，有了原型链；  ————> 利用原型让一个引用类型继承另一个引用类型的属性和方法\n当需要获取作用域链或原型链上的变量或值时，有了闭包。  ————> 闭包会沿着作用域链找到开发者想要的变量\n`\n")])]),t._v(" "),r("h3",{attrs:{id:"_9、instanceof的判断规则"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_9、instanceof的判断规则"}},[t._v("#")]),t._v(" 9、Instanceof的判断规则")]),t._v(" "),r("pre",[r("code",[t._v("(1)沿着 A 的 _proto_ 这条线找\n(2)沿着 B 的 _proto_ 这条线找\n(3)如果两条线找到同一个引用，即同一个对象，返回true;\n(4)如果找到重点还未重合，返回false。\n")])]),t._v(" "),r("h3",{attrs:{id:"_10、如何区分一个属性时基本属性还是原型链中的属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_10、如何区分一个属性时基本属性还是原型链中的属性"}},[t._v("#")]),t._v(" 10、如何区分一个属性时基本属性还是原型链中的属性")]),t._v(" "),r("pre",[r("code",[t._v("function Foo(){\n\n}\n\nvar f1 = new Foo();\nf1.a = 10;\nFoo.prototype.a = 100;\nFoo.prototype.b = 200;\n\nvar item;\nfor(item in f1){\n    if(f1.hasOwnProperty(item)){\n        console.log(item);  // 结果为：a\n    }\n    console.log(item);   // 结果为：a , b\n}\n")])]),t._v(" "),r("h3",{attrs:{id:"_11、js运行前的准备"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_11、js运行前的准备"}},[t._v("#")]),t._v(" 11、JS运行前的准备")]),t._v(" "),r("pre",[r("code",[t._v("(1)变量生命，默认undefined；\n(2)this赋值\n(3)函数生命赋值\n\n函数在定义时就确定了函数体内部自由变量的作用域；\n函数每次调用，都会产生一个新的执行上下文环境。\n")])])])}),[],!1,null,null,null);a.default=n.exports}}]);
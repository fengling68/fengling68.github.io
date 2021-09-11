(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{793:function(n,a,s){"use strict";s.r(a);var t=s(1),e=Object(t.a)({},(function(){var n=this,a=n.$createElement,s=n._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"js函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js函数"}},[n._v("#")]),n._v(" JS函数")]),n._v(" "),s("h2",{attrs:{id:"函数是一等公民"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数是一等公民"}},[n._v("#")]),n._v(" 函数是一等公民")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("函数命名规则标识符 命名规则 驼峰命名  语义化  可以$开头命名\n函数名称不要大写, 大写的是构造函数。\n")])])]),s("h2",{attrs:{id:"什么是函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是函数"}},[n._v("#")]),n._v(" 什么是函数")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("函数：具有特定功能的代码块\n功能：根据实际需要，声明对应功能函数\n优势：减少代码量，复用性高\n规则：函数不调用不执行\n")])])]),s("h2",{attrs:{id:"函数分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数分类"}},[n._v("#")]),n._v(" 函数分类")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("系统函数：alert()  parseInt()  prompt()\n自定义函数：\n")])])]),s("h2",{attrs:{id:"自定义函数声明和调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义函数声明和调用"}},[n._v("#")]),n._v(" 自定义函数声明和调用")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("function 函数名(){}           //定义函数\n函数名();                     //调用函数\n")])])]),s("h2",{attrs:{id:"参数分类-形参、实参"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数分类-形参、实参"}},[n._v("#")]),n._v(" 参数分类：形参、实参")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("形参：函数声明时，函数后面括号里的参数―变量名称。\n实参：函数调用时，函数后面括号里的参数\n\n`实参的实质：调用时实参对形参赋值`\n\n实参与形参个数一一匹配（个数、顺序）\n实参少于形参：不匹配的结果为undefined\n实参多于形参：结果为无\n有实参无形参：报错    \n")])])]),s("h2",{attrs:{id:"记录监听实参的-arguments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#记录监听实参的-arguments"}},[n._v("#")]),n._v(" 记录监听实参的 arguments")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("function fn(){\n    console.log( arguments[0] );      //第一个实参实参\n    console.log( arguments.length );  //实参的个数\n    console.log( fn.length );         //形参的个数\n    console.log( fn.callee.length );         //形参的个数\n}\nfn(a,b,c);\n")])])]),s("h2",{attrs:{id:"函数关键字return"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数关键字return"}},[n._v("#")]),n._v(" 函数关键字return")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("终止、结束程序\n返回值：字符串，数值，布尔值，变量，函数等\n无return关键字，但默认最后会执行return;结束函数，结果为undefined\n")])])]),s("h2",{attrs:{id:"函数重载-js中没有重载的概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数重载-js中没有重载的概念"}},[n._v("#")]),n._v(" 函数重载（JS中没有重载的概念）")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("1. 同一个脚本中，出现了同名函数，后者会覆盖掉前者。\n2. 声明函数和调用函数顺序可以不同，一个函数内可以调用另一个函数。\n")])])]),s("h2",{attrs:{id:"匿名函数-没有名字的函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#匿名函数-没有名字的函数"}},[n._v("#")]),n._v(" 匿名函数：没有名字的函数")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("//JS高阶里面最常用\nvar fn = function(){\n    console.log(123);\n}\nfn();\n")])])]),s("h2",{attrs:{id:"作用域-变量和函数起作用的区域或范围。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域-变量和函数起作用的区域或范围。"}},[n._v("#")]),n._v(" 作用域：变量和函数起作用的区域或范围。")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("全局作用域：当前整个JS脚本   全局变量\n局部作用域(函数作用域)：函数内部，函数能限制作用域   局部变量\n`局部作用域下可以访问全局变量；全局作用域下不能访问局部变量。`\n\n作用域链规则：从本作用域链查找，没有向上一级作用域查找，最后找到全局作用域。还未查找到，not define报错。\n\nvar a = 10;\nfunction fn1(){\n    var b = 20;\n    console.log(b);\n    function fn2(){\n        var c = 30;\n        console.log(a);    //可以调用 a , b ,c  \n        console.log(b);\n        console.log(c);\n    }\n    console.log(a);        //可以调用 a , b ，不能调用c\n    console.log(b);\n}\nconsole.log(a);            //可以调用 a   ，不能调用 b , c\nfn1();                     //只能调用fn1,通过fn1调用fn2\n")])])]),s("h2",{attrs:{id:"js执行解析代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js执行解析代码"}},[n._v("#")]),n._v(" JS执行解析代码")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("顺序结构：从上到下逐行解析\n选择结构：选择分支，有选择性的解析执行\n循环结构：for,while,do-while\n\n1. JS解析：默认情况下，顺序执行。\n2. 预编译模式：优先抓取关键字var，把变量声明提前到逻辑最顶层，（不包括赋值）\n3. 块级作用域：{} ，for if 都不能起到限制作用域的作用\n\n    for(var i = 1 ; i <= 10 ; i++ ){   //i 是全局变量\n        console.log(i);        //打印结果1~10\n    }\n    console.log(i);            //结果为 11\n\n4. 在函数内部，声明变量时，没有var,该变量隐式的成为了全局变量\n\n    function fn(){\n        d = 10;\n        console.log(d);    //结果为10\n    }\n    console.log(d);        //结果为10\n")])])]),s("h2",{attrs:{id:"函数作用域问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数作用域问题"}},[n._v("#")]),n._v(" 函数作用域问题")]),n._v(" "),s("p",[n._v("1、例题1")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("var aa = 10;\nfunction test () {\n    var aa = 20;\n}\ntest();\nconsole.log(aa);     //结果为10     在全局作用域下找到 aa = 10\n")])])]),s("p",[n._v("2、例题2")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("var num = 2;\nfunction fn1() {\n    var num = 5;\n    console.log(num);\n}\n\nfn1();               //结果为5      在函数作用域下找到 num = 5\n")])])]),s("p",[n._v("3、例题3")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("var num = 2;\nfunction fn2() {\n    //var num;              //预编译先把var num;提到函数作用域最上方\n    console.log(num);       //结果为 undefined\n    var num = 5;  \n    console.log(num);       //结果为 5\n}\nfn2();\n")])])]),s("p",[n._v("4、例题4")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("var num = 2;\nfn3();               //结果为undefined     声明函数和调用函数顺序可以不同\nfunction fn3()\n{\n    var num;\n    console.log(num);\n    num = 5;\n}\nfn3();               //结果为undefined\n")])])]),s("p",[n._v("5、例题5")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("var a = 10;\nfunction fn4 () {\n    var b = 9;\n    console.log(a);        //结果 a = undefind\n    console.log(b);        //结果 b = 9 \n    var a = 30;\n}\nfn4();\n")])])]),s("h2",{attrs:{id:"递归函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#递归函数"}},[n._v("#")]),n._v(" 递归函数")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("函数内调用函数-调用自身，类似循环\n慎用递归，易死循环\n")])])]),s("p",[n._v("1、用户任意输入数字，控制台一次递减1输出，输出到1结束")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("function printNum(num){\n    if(num == 0){   //临界断点\n       return;\n    }\n    alert(num);\n    num--;\n    printNum(sum);\n}\nprintNum(5);\n")])])]),s("p",[n._v("2、打印5的阶乘")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("function fn(num){\n    if(num == 1){\n        return 1;\n    }\n    return num*fn(num-1)\n}\nconsole.log(fn(5));\n")])])]),s("h2",{attrs:{id:"函数扩充"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数扩充"}},[n._v("#")]),n._v(" 函数扩充")]),n._v(" "),s("p",[n._v("1、直接打印函数名，输出的结果是函数名")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("var fn = function(){\n    console.log(123);\n};\nfn();\nconsole.log(fn);    //fn是变量名称\n\nfunction fn1(){\n    console.log(456);\n}\nconsole.log(fn1);\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);
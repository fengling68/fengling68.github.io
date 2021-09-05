(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{465:function(n,t,s){"use strict";s.r(t);var a=s(1),e=Object(a.a)({},(function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"this关键字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#this关键字"}},[n._v("#")]),n._v(" this关键字")]),n._v(" "),s("pre",[s("code",[n._v("this对象：每个函数中都会有this对象。 context:上下文对象\nthis总是指向调用该函数的对象。\nthis一般存在于函数中，this指向的是该函数存在的对象。\n")])]),n._v(" "),s("h2",{attrs:{id:"this应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#this应用场景"}},[n._v("#")]),n._v(" this应用场景")]),n._v(" "),s("h3",{attrs:{id:"_1、console-log-this-全局下指window"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、console-log-this-全局下指window"}},[n._v("#")]),n._v(" 1、console.log(this); //全局下指window")]),n._v(" "),s("h3",{attrs:{id:"_2、事件响应函数中使用this-指代事件源。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、事件响应函数中使用this-指代事件源。"}},[n._v("#")]),n._v(" 2、事件响应函数中使用this , 指代事件源。")]),n._v(" "),s("pre",[s("code",[n._v('onclick = "fn(this)"         //HTML方式要传参\nfunction fn(this){}\n\nbtn.onclick = function(){    //DOM0级事件直接使用即可\n    alert(this.value);\n}\n')])]),n._v(" "),s("h3",{attrs:{id:"_3、字面量方式创建简单对象中使用-指代当前对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、字面量方式创建简单对象中使用-指代当前对象"}},[n._v("#")]),n._v(" 3、字面量方式创建简单对象中使用 , 指代当前对象")]),n._v(" "),s("pre",[s("code",[n._v("var obj = {\n    name:'荆天明',\n    say:function(){\n        console.log(\"秦时明月-\" + this.name);\n    }\n};\n")])]),n._v(" "),s("h3",{attrs:{id:"_4、构造函数中使用-指代创建的对象实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、构造函数中使用-指代创建的对象实例"}},[n._v("#")]),n._v(" 4、构造函数中使用 , 指代创建的对象实例")]),n._v(" "),s("pre",[s("code",[n._v('function Person(name,age){\n    this.name = name;\n    this.age = age;\n}\nvar per = new Person("abc",20);\n\n没有实例的时候，this指代window。\n')])]),n._v(" "),s("h3",{attrs:{id:"_5、call-和apply-可以改变this的指向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、call-和apply-可以改变this的指向"}},[n._v("#")]),n._v(" 5、call()和apply()可以改变this的指向")]),n._v(" "),s("pre",[s("code",[n._v('var obj1 = {\n    verson:"#1.0"\n};\nvar obj2 = {\n    getVerson:function(){\n        console.log(this.verson);   \n    }\n}\n\nobj2.getVerson();            //this指obj2 , undefined\nobj2.getVerson.call(obj1);   //this指obj1 , #1.0\n')])]),n._v(" "),s("h3",{attrs:{id:"_6、call-和apply-的相同与不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、call-和apply-的相同与不同"}},[n._v("#")]),n._v(" 6、call()和apply()的相同与不同")]),n._v(" "),s("pre",[s("code",[n._v('***********************相同(使用方法和指向)*************************\n书写规范：\n(1)函数体(函数名)调用call();\n(2)参数:对象,调用者\n********************************************************************\n\nfunction fn(){\n    console.log("我叫" + this.name);    //this指window\n}\n\nvar person = {\n    name : "荆天明",\n    age : 18\n};\n\nfn.call(person);                       //this指向person\nfn.apply(person);                      //this指向person\n\n**********************不同(传参不同)*******************************\napply规定最多有两个参数(放入数组，自动一一匹配)\n*******************************************************************\n\nfunction sum(c,d){\n    console.log(this.a + this.b + c + d);\n}\nvar obj = {\n    a:20,\n    b:20\n};\n\nsum.call( obj , 30 , 40 );\nsum.apply( obj , [30 , 40] );\n')])])])}),[],!1,null,null,null);t.default=e.exports}}]);
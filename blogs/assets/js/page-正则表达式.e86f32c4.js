(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{578:function(a,e,s){"use strict";s.r(e);var r=s(1),t=Object(r.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"正则表达式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[a._v("#")]),a._v(" 正则表达式")]),a._v(" "),e("ul",[e("li",[a._v("正则表达式：一种模式，一种标准。检索一段文本是否符合要求。")]),a._v(" "),e("li",[a._v("强大的字符匹配工具")]),a._v(" "),e("li",[a._v("正则表达式具有贪婪模式：优先匹配最多的")])]),a._v(" "),e("p",[a._v("1、字面量方式")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("var reg1 = /字符/gi;\n")])])]),e("p",[a._v("2、高级方式")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('var reg2 = new RegExp("字符","gi");\ng : 全局检\ni : 忽略大小写\nm : 多行匹配\n')])])]),e("h2",{attrs:{id:"正则表达式常用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式常用方法"}},[a._v("#")]),a._v(" 正则表达式常用方法")]),a._v(" "),e("h3",{attrs:{id:"_1、test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、test"}},[a._v("#")]),a._v(" 1、test()")]),a._v(" "),e("p",[a._v("正则表达式.test(str);")]),a._v(" "),e("p",[a._v("返回值：true || false")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('var reg1 = /box/gi;\nvar str1 = "this is a box.Box,Box";\n\n检索文本\nvar result1 = reg1.test(str1);\nconsole.log(result1);    //true\n第二次检索，从第一次检索位置之后继续检索\nresult1 = reg1.test(str1);\nconsole.log(result1);    //false\n')])])]),e("h3",{attrs:{id:"_2、exec"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、exec"}},[a._v("#")]),a._v(" 2、exec()")]),a._v(" "),e("p",[a._v("返回值：找到了,匹配正则表达式的指定字符信息 对应的下标存入数组；没找到,null")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('var reg2 = /bmw/gi;\nvar str2 = "I own a car of BMW,bmw,BMw";\nvar result2 = reg2.exec(str2);\nconsole.log(result2);    //["BMW", index: 15, input: "I own a car of BMW,bmw,BMw"]\n\n若多次查找上次为null，下次继续从新开始查找\n')])])]),e("h3",{attrs:{id:"_3、compile-修改正则表达式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、compile-修改正则表达式"}},[a._v("#")]),a._v(" 3、compile(); 修改正则表达式")]),a._v(" "),e("p",[a._v("参数一：修改后的模式   参数二：模式修饰符(根据需要g,i)")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('var reg3 = /abc/;\nvar str3 = "I am abc";\nconsole.log(reg3.test(str3));  //  true\nreg3.compile("def","gi");\nconsole.log(reg3);             //  /def/gi\nconsole.log(reg3.test(str3));  //  false\n')])])]),e("h2",{attrs:{id:"字符串中使用正则表达式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符串中使用正则表达式"}},[a._v("#")]),a._v(" 字符串中使用正则表达式")]),a._v(" "),e("h3",{attrs:{id:"_1、replace-替换-原字符不发生改变"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、replace-替换-原字符不发生改变"}},[a._v("#")]),a._v(" 1、replace(); 替换，原字符不发生改变")]),a._v(" "),e("p",[a._v("参数一 old,参数二,new")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('var reg1 = /mbh/gi;\nvar res1 = str1.replace(reg1,"BYD");\nconsole.log(res1);    //I need a car of BYD,BYD,BYD\nconsole.log(str1);    //I need a car of mbh,mbh,MBH\n')])])]),e("h3",{attrs:{id:"_2、match-匹配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、match-匹配"}},[a._v("#")]),a._v(" 2、match()   匹配")]),a._v(" "),e("p",[a._v("返回值：查找到，返回下标;全局查找将找到的所有字符存入数组。\n未找到，null")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('var reg2 = /kai/gi;\nvar res2 = str2.match(reg2);\nconsole.log(res2);     //["kai", "kai", "KAI"]\n')])])]),e("h3",{attrs:{id:"_3、search-搜查g-i未起到作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、search-搜查g-i未起到作用"}},[a._v("#")]),a._v(" 3、search() 搜查g i未起到作用")]),a._v(" "),e("p",[a._v("返回值：查找到，字符对应的下标；未找到，返回 -1")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("ar reg3 = /is/gi;\nvar res3 = str3.search(reg3);\nconsole.log(res3);           // 7\n")])])]),e("h3",{attrs:{id:"_4、split-字符转数组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、split-字符转数组"}},[a._v("#")]),a._v(" 4、split() 字符转数组")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('var str4 = "1,2,3";\nvar reg4 = /,/;\nvar arr = str4.split(reg4);\nconsole.log(arr);            //["1", "2", "3"]\n')])])]),e("h2",{attrs:{id:"过滤敏感词汇"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#过滤敏感词汇"}},[a._v("#")]),a._v(" 过滤敏感词汇")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('btn.onclick = function(){\n    var reg1 = new RegExp(txt.value,"g");\n    textArea.value = textArea.value.replace(reg1,"***");\n}\n')])])]),e("h2",{attrs:{id:"正则表达式模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式模式"}},[a._v("#")]),a._v(" 正则表达式模式")]),a._v(" "),e("ul",[e("li",[e("p",[e("code",[a._v("^$")]),a._v("模式")])]),a._v(" "),e("li",[e("p",[a._v("用于表单验证，规定输入的内容规则。")])]),a._v(" "),e("li",[e("p",[a._v("非"),e("code",[a._v("^$")]),a._v("模式")])]),a._v(" "),e("li",[e("p",[a._v("用于匹配字符串")])])])])}),[],!1,null,null,null);e.default=t.exports}}]);
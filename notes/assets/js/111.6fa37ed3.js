(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{475:function(e,n,t){"use strict";t.r(n);var s=t(1),a=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"dom文档对象模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dom文档对象模型"}},[e._v("#")]),e._v(" DOM文档对象模型")]),e._v(" "),t("h2",{attrs:{id:"dom节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dom节点"}},[e._v("#")]),e._v(" DOM节点")]),e._v(" "),t("pre",[t("code",[e._v("HTML的所有内容都是节点\n文档节点  元素节点  属性节点   文本节点\n父节点(parent)  子节点(child)  兄弟节点(sibling)  根节点(root)\n")])]),e._v(" "),t("h2",{attrs:{id:"获取dom元素节点-标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取dom元素节点-标签"}},[e._v("#")]),e._v(" 获取DOM元素节点(标签)")]),e._v(" "),t("pre",[t("code",[e._v('(任何元素都可以自定义属性name，在IE中只识别form表单中的name)\n\n1、getElementById(); 通过id来获取元素节点; 唯一\n2、getElementsByTagName(); 通过标签名称获取元素节点; 伪数组(不享有数组的方法)\n3、getElementsByClassName(); 通过类名获取元素节点; 伪数组(IE低版本有兼容性问题)\n4、getElementsByName(); 通过name属性值获取元素节点。\n5、document.querySelector();多种选择器获得元素节点，默认只选择第一个\n    var dom1 = document.querySelector(".myUl");    //选择第一个类\n    var dom2 = document.querySelector("#my_div");  //选择唯一的id\n    var dom3 = document.querySelector("input");    //选择第一个元素标签\n6、document.querySelectorAll();通过多种选择器获取页面中的所有元素节点。\n')])]),e._v(" "),t("h2",{attrs:{id:"操作元素节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作元素节点"}},[e._v("#")]),e._v(" 操作元素节点")]),e._v(" "),t("p",[t("strong",[e._v("获取/访问属性节点")])]),e._v(" "),t("pre",[t("code",[e._v('1、控制台输出    按钮-类型type\n    var inps = document.getElementsByTagName("input");\n    console.log(inps[0].type);\n\n2、输出按钮的内容\n   console.log(inps[0].value);\n\n3、在控制台输出div的类名  class不能用,用className\n    var divs = document.getElementsByTagName("div");\n    console.log(divs[0].className);\n')])]),e._v(" "),t("p",[t("strong",[e._v("设置属性节点方式一( . 语法)")])]),e._v(" "),t("pre",[t("code",[e._v('1、给div重设类名\n    divs[0].className = "div";\n\n2、给图片设置路径\n    var imgs = document.getElementsByTagName("img");\n    imgs[0].src = "429902.jpg";\n\n3、单选框、复选框。是通过布尔值设置默认选中\n\n        var inps = document.getElementsByTagName("input");\n        inps[1].checked = true;\n\n4、option，通过布尔值设置为默认选中\n    var opts = document.getElementsByTagName("option");\n    opts[1].selected = true;\n')])]),e._v(" "),t("p",[t("strong",[e._v("设置属性节点方式二(自带属性 || 自定义属性)")])]),e._v(" "),t("pre",[t("code",[e._v('setAttribute();   参数：属性，属性值 \ngetAttribute();\n\n1、给按钮设置属性\n    var inps = document.getElementsByTagName("input");\n    inps[0].setAttribute("onclick","fn()");\n    function fn(){alert(123);}\n\n2、获取属性\n    var divs = document.getElementsByClassName("my_div");\n    console.log(divs[0].getAttribute("class"));\n')])]),e._v(" "),t("h2",{attrs:{id:"排它思想"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#排它思想"}},[e._v("#")]),e._v(" 排它思想")]),e._v(" "),t("pre",[t("code",[e._v('var btns = document.getElementsByTagName("input");\nfor(var i = 0 ; i < btns.length ; i ++){\n    btns[i].onclick = function(){\n\n        //排他思想：在操作当前元素之前，先清除之前其他的样式\n        for(var j = 0 ; j < btns.length ; j++){\n            //btns[j].className = "old";\n            btns[j].setAttribute("class","old");\n        }\n\n        //this.style.backgroundColor = "red";\n        //this.className = "current";\n        this.setAttribute("class","current");\n    }\n}\n')])])])}),[],!1,null,null,null);n.default=a.exports}}]);
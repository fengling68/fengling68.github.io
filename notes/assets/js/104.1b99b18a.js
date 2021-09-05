(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{481:function(r,n,a){"use strict";a.r(n);var e=a(1),o=Object(e.a)({},(function(){var r=this,n=r.$createElement,a=r._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h1",{attrs:{id:"数组基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组基础"}},[r._v("#")]),r._v(" 数组基础")]),r._v(" "),a("pre",[a("code",[r._v("数组Array：值的有序集合\n数组中的数据————元素 元素之间,隔开\n数组中数据类型没有限制，弱类型的体现\n")])]),r._v(" "),a("h2",{attrs:{id:"数组-array-创建方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组-array-创建方式"}},[r._v("#")]),r._v(" 数组(Array)创建方式")]),r._v(" "),a("pre",[a("code",[r._v("1、字面量方式\n    var arr = [];//空数组\n    var arr = [20 , 'abc' , '荆天明' , true , undefined];\n\n2、高级方式（new关键字）\n    var arr = new Array();   //空数组\n    var arr = new Array(10 , 'abc' , true);\n\n    //注意：如果括号里只有一个正整数，代表的数组长度\n    var arr = new Array(5);  //手动设置数组长度为5，但未赋值\n")])]),r._v(" "),a("h2",{attrs:{id:"数组元素的操作（增删改查）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组元素的操作（增删改查）"}},[r._v("#")]),r._v(" 数组元素的操作（增删改查）")]),r._v(" "),a("pre",[a("code",[r._v('索引值/下标：从 0 ~ (length-1)\n\nvar arr = [10 , 20 , 30];\n1、增、新增数组的元素     arr[4] = "荆天明";   //此时数组长度为5，其中arr[4]为undefined\n2、删、删除数组的元素     arr.length = 3;     //硬性的固定长度数组,长度的灵活性\n3、改、修改数组中的元素   arr[0] = true;\n4、查、访问数组中的元素   数组名[下标]   arr[i]\n\n\nvar arr = [];\nfor(var i = 0 ; i < 10 ; i++){\n    arr[arr.length] = i + 1;\n}\nconsole.log(arr);\n')])]),r._v(" "),a("h2",{attrs:{id:"数组的遍历-循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组的遍历-循环"}},[r._v("#")]),r._v(" 数组的遍历/循环")]),r._v(" "),a("pre",[a("code",[r._v("arr.length  能自动监听的自动监听\n\n1、for循环\n    for(var i = 0 ; i < arr.length ; i++){\n\n    }\n\n2、for in 循环\n    for(var i in arr){\n        console.log(arr[i]);\n    }\n\n3、ECMAScript5.0新增的\n    for(var ele of arr){    //of 无法监听数组下标\n        console.log(ele);   //直接拿到数组中的每个元素\n    }\n\n4、forEach()方法，可以遍历多维数组。 jQuery中有一个each()方法，只能遍历一维数组\n    //匿名函数作为实参\n    arr.forEach(function(ele,index){\n\n        //参数一：拿到的是每个元素\n        console.log(ele);\n\n        //参数二：拿到的是数组下标\n        console.log(index);\n\n    });\n")])]),r._v(" "),a("h2",{attrs:{id:"js的应用一（给div设置背景色）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js的应用一（给div设置背景色）"}},[r._v("#")]),r._v(" JS的应用一（给div设置背景色）")]),r._v(" "),a("p",[r._v("1、 函数的做法")]),r._v(" "),a("pre",[a("code",[r._v('var divArr = document.getElementsByTagName("div");\nfunction colorDiv(i,color){\n    divArr[i].style.backgroundColor = color;\n}\ncolorDiv(0,"red");\ncolorDiv(1,"yellow");\ncolorDiv(2,"green");\ncolorDiv(3,"blue");\n')])]),r._v(" "),a("p",[r._v("2、for循环")]),r._v(" "),a("pre",[a("code",[r._v("var colorArr = ['red' , 'yellow' , 'blue' , 'pink'];\nvar divArr = document.getElementsByTagName(\"div\");\nfor(var i = 0 ; i < divArr.length ; i++){\n    divArr[i].style.backgroundColor = colorArr[i];\n}\n")])]),r._v(" "),a("h2",{attrs:{id:"js-的应用二（设置奇偶行颜色不同）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-的应用二（设置奇偶行颜色不同）"}},[r._v("#")]),r._v(" JS 的应用二（设置奇偶行颜色不同）")]),r._v(" "),a("pre",[a("code",[r._v('1、获取标签   2、设置样式\n\nvar colorArr = [\'red\' , \'green\'];\nvar divArr = document.getElementsByTagName("div");\nfor(var i = 0 ; i < divArr.length ; i++){\n    if(i%2 == 0){\n        divArr[i].style.backgroundColor = colorArr[0];\n    }else{\n        divArr[i].style.backgroundColor = colorArr[1];\n    }\n}\n\n\nvar divArr = document.getElementsByTagName("div");\nfor(var i = 0 ; i < divArr.length ; i++){\n    if(i%2 == 0){\n        divArr[i].style.backgroundColor = "red";\n    }else{\n        divArr[i].style.backgroundColor = "green";\n    }\n}\n')])]),r._v(" "),a("p",[r._v("4、 随机生成背景颜色——2种方法")]),r._v(" "),a("pre",[a("code",[r._v('//rgb方式\nvar divs = document.getElementsByTagName("div");\nfor(var i = 0 ; i < divs.length ; i++){\n    var ran1 = parseInt(Math.random()*256);\n    var ran2 = parseInt(Math.random()*256);\n    var ran3 = parseInt(Math.random()*256);\n    divs[i].style.backgroundColor = "rgb("+ran1+","+ran2+","+ran3+")";\n}\n\n//十六进制的方式\nvar colorArr = [0,1,2,3,4,5,6,7,8,9,\'a\',\'b\',\'c\',\'d\',\'e\',\'f\'];     //  16个数字\nvar p = document.getElementsByTagName("p");\nfor(var i = 0 ; i < p.length ; i++){\n    var ran = [];    \n    var str = "";\n    for(var j = 0 ; j < 6 ; j++){\n        ran[i] = colorArr[parseInt(Math.random()*colorArr.length)];\n        str = str+ran[i];\n    }\n    p[i].style.backgroundColor = "#" + str + "";\n}\n')])]),r._v(" "),a("h2",{attrs:{id:"arguments记录实参"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments记录实参"}},[r._v("#")]),r._v(" arguments记录实参")]),r._v(" "),a("pre",[a("code",[r._v('函数内部，监听实参\n\nfunction fn(){\n    console.log(arguments);\n    //可以访问实参的值\n    console.log(arguments[0]);\n    console.log(arguments[1]);\n}\nfn(10,20);\n\n//用arguments算三个数中的最大值\nfunction fn(){\n    var max = arguments[0];\n    for(var i = 0 ; i < arguments.length ; i++){\n        if(max < arguments[i]){\n            max = arguments[i];\n        }\n    }\n    return max;\n}\nalert("最大值是："+fn(60,40,77));\n')])])])}),[],!1,null,null,null);n.default=o.exports}}]);
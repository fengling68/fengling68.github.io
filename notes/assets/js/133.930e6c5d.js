(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{429:function(n,t,s){"use strict";s.r(t);var a=s(1),r=Object(a.a)({},(function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"jsonp跨域请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsonp跨域请求"}},[n._v("#")]),n._v(" JSONP跨域请求")]),n._v(" "),s("h2",{attrs:{id:"同源策略-同域策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同源策略-同域策略"}},[n._v("#")]),n._v(" 同源策略(同域策略)")]),n._v(" "),s("pre",[s("code",[n._v("同源/同域：指URL地址的协议、IP地址、端口号相同。\n同源/同域策略：不同域的系统是无法相互访问的，为了保护系统。\n\n/**********这是三个不同的域************/\nhttp://192.168.0.3:2000  \nhttp://192.168.0.3:3000\nhttps://192.168.0.3:3000\n")])]),n._v(" "),s("h2",{attrs:{id:"jsonp-做跨域访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsonp-做跨域访问"}},[n._v("#")]),n._v(" jsonp 做跨域访问")]),n._v(" "),s("pre",[s("code",[n._v("1、json和jsonp\n    json: 一种数据的保存格式，就是一种数据\n    jsonp: 是传递数据的方式，非官方跨域交互协议。\n\n2、哪个标签具有跨域的能力\n    link \n    img\n    iframe:框架 .css布局 \n    script （src具有跨域的能力，但不安全） 用js实现跨域——>使用script标签\n\n3、script标签的作用\n    加载远程js文件, 加载完成后立刻执行这个代码\n    script标签不管js是本地还是跨域，只要能加载，就能执行\n    script加载的不一定是js文件，只要是js代码就行\n\n4、用服务器的代码，执行客户端的js函数。\n    服务器代码，在调用本地js函数的时候，将数据传递给这个函数的参数。\n")])]),n._v(" "),s("h2",{attrs:{id:"jsonp跨域的具体实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsonp跨域的具体实现"}},[n._v("#")]),n._v(" jsonp跨域的具体实现")]),n._v(" "),s("pre",[s("code",[n._v('1、定义一个全局函数，函数名任意，但必须有一个参数，用于接收服务器端返回的数据。\n2、通过DOM操作创建一个script元素\n3、给script元素添加src属性，这个属性值为后端提供URL接口，这个URL需要一个参数：callback = handleData;\n4、将script元素添加到body的最后\n5、具体如何调用函数，由后台实现。\n\n//全局函数\nfunction handleData(data){\n    console.log(data);\n}\n\nwindow.onload = function(){\n    var jsonp = document.getElementById("btn");\n    jsonp.onclick = function(){\n        //创建一个script标签\n        var script = document.createElement("script");\n        //把接口地址绑定给src\n        script.src = "http://192.168.0.3:3000/jsonp?callback=handleData";\n        //把创建的srcipt标签插入页面\n        document.body.appendChild(script);\n    }\n}\n\nwindow.onload = function(){\n    //创建一个script标签\n    var srcipt = document.createElement(\'script\');\n    //把接口地址绑定给src\n    srcipt.src = "class_91.json?callback=jsonpCallback";\n    //把创建的srcipt标签插入页面\n    document.boay.appendChild(srcipt);    \n}\n//监听回调函数\nfunction jsonpCallback(resp){\n    if(resp.result == 1){\n        //for in循环对象  渲染页面\n        for(var item in data){\n            ......\n        }        \n    }\n}\n')])])])}),[],!1,null,null,null);t.default=r.exports}}]);
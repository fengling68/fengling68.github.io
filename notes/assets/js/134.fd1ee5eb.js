(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{427:function(t,a,e){"use strict";e.r(a);var n=e(1),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ajax异步通信"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ajax异步通信"}},[t._v("#")]),t._v(" Ajax异步通信")]),t._v(" "),e("pre",[e("code",[t._v("事件是异步的\n")])]),t._v(" "),e("h2",{attrs:{id:"常见服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见服务器"}},[t._v("#")]),t._v(" 常见服务器")]),t._v(" "),e("pre",[e("code",[t._v("IIS(微软)\nKangle\nWebLogic\nApache\nTomcat\nNode    Node.js的包管理器，是全球最大的开源生态系统。\n")])]),t._v(" "),e("h2",{attrs:{id:"什么是ajax-异步的javascript和xml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是ajax-异步的javascript和xml"}},[t._v("#")]),t._v(" 什么是Ajax(异步的JavaScript和XML)")]),t._v(" "),e("pre",[e("code",[t._v("用Ajax技术不必刷新整个页面，只需对页面的局部进行更新。\n可以节省网络带宽，提高页面的加载速度，缩短用户等待时间，改善用户体验。\n\n同步和异步\n同步：发送请求——>等待响应，期间浏览器不可以做其他的事情\n异步：发送请求——>等待响应，期间浏览器可以做其他事情\n")])]),t._v(" "),e("h2",{attrs:{id:"ajax异步通信-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ajax异步通信-2"}},[t._v("#")]),t._v(" ajax异步通信")]),t._v(" "),e("h3",{attrs:{id:"_1、创建xmlhttprequest对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建xmlhttprequest对象"}},[t._v("#")]),t._v(" 1、创建XMLHttpRequest对象")]),t._v(" "),e("pre",[e("code",[t._v('XMLHttpRequest对象(IE5和IE6使用ActiveXObject)是ajax异步通信 实现的核心,用于在前端与服务器端交换数据。\n\n/************ IE5、IE6兼容 ********************\n    var ajax = null;\n    if(XMLHttpRequest){\n        ajax = new XMLHttpRequest();\n    }else{\n        ajax = new ActiveXObject("Microsoft.XMLHTTP");\n    }\n\n    var ajax = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");\n********************************************/\n')])]),t._v(" "),e("h3",{attrs:{id:"_2、open-method-url-初始化请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、open-method-url-初始化请求"}},[t._v("#")]),t._v(" 2、open(method,url);初始化请求")]),t._v(" "),e("pre",[e("code",[t._v('/*open(method,url,true);配置http请求\n(1)参数一：请求方法method : \n    get : 获取数据,也可以提交数据量小安全性低的数据\n    post : 提交数据,提交数据量大,安全\n(2)参数二：url请求资源的路径(后端开发人员会提供)\n\n(3)参数三：是否异步，true默认*/\n\n/****** 例:告诉http，用get方式访问资源********/\najax.open("get","http://...//ajaxTest");\n')])]),t._v(" "),e("h3",{attrs:{id:"_3、send-data-真正的向服务器发送请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、send-data-真正的向服务器发送请求"}},[t._v("#")]),t._v(" 3、send(data);真正的向服务器发送请求")]),t._v(" "),e("pre",[e("code",[t._v('data:发送给服务器的数据，post方式传参, get方式不传参。\n\n/*********** 1、get方式不传参 *****************/\najax.open("GET","http://.../ajaxGet");\najax.send(null);\n\n\n/*********** 2、get方式传参 —— ?传参 **********/\nhttp协议发送参数的语法url ? 名值对1 & 名值对2 & 名值对3 ...\n\najax.open("GET","http://.../ajaxGet?name=zs&age=20&sex=man;");\najax.send(null);\n\n\n/*********** 3、post方式传参 —— 字符串 ********/\npost发送数据先设置请求头，告诉http协议，发送post请求\n\najax.setRequestHeader("Content-type","applicction/x-www-form-urlencoded");\najax.send("name=zs&age=20&sex=man");\n')])]),t._v(" "),e("h3",{attrs:{id:"_4、onreadystatechange响应状态改变事件，监听响应状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、onreadystatechange响应状态改变事件，监听响应状态"}},[t._v("#")]),t._v(" 4、onreadystatechange响应状态改变事件，监听响应状态")]),t._v(" "),e("pre",[e("code",[t._v("ajax.readyState == 4;  响应就绪\najax.status == 200;    响应资源就绪\najax.responseText || ajax.responseXML;     响应数据\n")])]),t._v(" "),e("h2",{attrs:{id:"获取响应数据-服务器发送给客户端的数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取响应数据-服务器发送给客户端的数据"}},[t._v("#")]),t._v(" 获取响应数据(服务器发送给客户端的数据)")]),t._v(" "),e("h3",{attrs:{id:"_1、onreadystatechange-响应事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、onreadystatechange-响应事件"}},[t._v("#")]),t._v(" 1、onreadystatechange : 响应事件")]),t._v(" "),e("pre",[e("code",[t._v("响应状态改变事件，监听响应状态。\n监听数据是否就绪; 若响应，通知浏览器处理响应\n")])]),t._v(" "),e("h3",{attrs:{id:"_2、readystate-响应状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、readystate-响应状态"}},[t._v("#")]),t._v(" 2、readystate : 响应状态")]),t._v(" "),e("pre",[e("code",[t._v("(1) 0 ：请求未初始化,仅创建通信对象\n(2) 1 : 请求初始化,服务器连接已建立\n(3) 2 : 请求已接受\n(4) 3 : 请求处理中\n(5) 4 : 请求已完成，且响应已就绪 (所有浏览器都有第四个状态)\n")])]),t._v(" "),e("h3",{attrs:{id:"_3、state-：响应资源是否就绪"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、state-：响应资源是否就绪"}},[t._v("#")]),t._v(" 3、state ：响应资源是否就绪")]),t._v(" "),e("pre",[e("code",[t._v("(1) 200 : OK\n(2) 404 : 请求失败\n")])]),t._v(" "),e("h3",{attrs:{id:"_4、responsetext-获取响应数据json格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、responsetext-获取响应数据json格式"}},[t._v("#")]),t._v(" 4、responseText : 获取响应数据json格式")]),t._v(" "),e("pre",[e("code",[t._v("responseText: json格式\nresponseXML: XML格式\n")])]),t._v(" "),e("h2",{attrs:{id:"综合测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#综合测试"}},[t._v("#")]),t._v(" 综合测试")]),t._v(" "),e("pre",[e("code",[t._v('右击文件夹\n点击open terminal here，出现窗口命令\n输入：npm start\n若在本地访问，打开server.js  \n   将app.listen(3000,"192.268.0.3")改为app.listen(3000);\n访问\n   (1)http://192.168.0.3:3000/ajaxTest\n   (2)localhost:3000\n')])])])}),[],!1,null,null,null);a.default=s.exports}}]);
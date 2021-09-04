(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{419:function(e,n,t){"use strict";t.r(n);var v=t(1),a=Object(v.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"时间流和事件冒泡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#时间流和事件冒泡"}},[e._v("#")]),e._v(" 时间流和事件冒泡")]),e._v(" "),t("h2",{attrs:{id:"事件流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件流"}},[e._v("#")]),e._v(" 事件流")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("指网页中事件传播顺序，当我们对页面进行操作的时候，都会产生事件流。这个事件流在传播过程中，就会查找跟事件流事件类型相同的元素。")])]),e._v(" "),t("li",[t("p",[e._v("点击时，会产生点击事件流。"),t("br"),e._v("\n在传播的过程中，只要发现有元素绑定了和事件流相同类型的事件，就触发此事件。")])])]),e._v(" "),t("h2",{attrs:{id:"两种事件流模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两种事件流模型"}},[e._v("#")]),e._v(" 两种事件流模型")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("1、冒泡事件流模型：从里往外")])]),e._v(" "),t("li",[t("p",[e._v("现代浏览器，默认都是冒泡")])]),e._v(" "),t("li",[t("p",[e._v("认为事件流，从触发事件的元素开始传递，传播到根节点结束。")])]),e._v(" "),t("li",[t("p",[e._v("2、捕获事件流模型：从外往里")])]),e._v(" "),t("li",[t("p",[e._v("NetScape , 很少用")])]),e._v(" "),t("li",[t("p",[e._v("认为事件流从根节点产生开始传播，传播到当前元素结束。")])])]),e._v(" "),t("h2",{attrs:{id:"阻止冒泡：阻止事件的传播"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阻止冒泡：阻止事件的传播"}},[e._v("#")]),e._v(" 阻止冒泡：阻止事件的传播")]),e._v(" "),t("p",[e._v("1、W3C方式")]),e._v(" "),t("pre",[t("code",[e._v("    事件对象.stopPropagation();   调用这个方法\n    event.stopPropagation();\n")])]),e._v(" "),t("p",[e._v("2、IE方式(IE8以下)")]),e._v(" "),t("pre",[t("code",[e._v("    事件对象.cancelBubble = true;\n")])]),e._v(" "),t("p",[e._v("3、兼容IE浏览器//阻止事件冒泡的函数")]),e._v(" "),t("pre",[t("code",[e._v("    function stopPro(event){\n        //var e = evt || window.event;\n        //window.event ? e.cancelBubble = true : e.stopPropagation();\n\n        if(event.stopPropagation){\n            event.stoppagation();         //非IE浏览器\n        }else{\n            event.cancelBubble = true;    //IE浏览器\n        }\n    }\n")])]),e._v(" "),t("h2",{attrs:{id:"修改事件的默认行为"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改事件的默认行为"}},[e._v("#")]),e._v(" 修改事件的默认行为")]),e._v(" "),t("p",[e._v("例：img   a   submit")]),e._v(" "),t("p",[e._v("例：表单中type是submit，点击后在事件传播完成后会自动提交表单")]),e._v(" "),t("p",[e._v("例：input的keydown事件发生并处理后，浏览器会将用户键入的字符自动追加到input元素的值中。")]),e._v(" "),t("pre",[t("code",[e._v("//(1)IE\nfunction someHandle(){\n    window.event.returnValue = false;\n}\n\n//(2)W3C\nfunction someHandle(event){\n    event.preventDefault();\n}\n\n//(3)兼容性处理\nfunction preventDefault(e){\n    if(e.preventDefault){\n        e.preventDefault();\n    }else{\n        e.returnValue = false;\n    }\n}\n")])]),e._v(" "),t("h2",{attrs:{id:"dom2模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dom2模型"}},[e._v("#")]),e._v(" DOM2模型")]),e._v(" "),t("p",[t("strong",[e._v("1、绑定事件")])]),e._v(" "),t("pre",[t("code",[e._v('(1)W3C标准：\n    addEventListener("eventType",handler,true | false);\n    参数一：事件类型(不加 on)\n            事件属性 = on + 事件类型\n    参数二：处理函数\n    参数三：指定是否在捕获阶段进行处理，false<=>IE\n\n    function clickOne(){\n        alert("订单安全验证");\n    }\n    function clickTwo(){\n        alert("订单提交");\n    }\n    btn.addEventListener("click",clickOne,false);\n    btn.addEventListener("click",clickTwo,false);\n')])]),e._v(" "),t("p",[e._v("(2)IE7 / IE8:(只能用冒泡)")]),e._v(" "),t("pre",[t("code",[e._v('    attachEvent("eventType",handler);\n    参数一：事件类型(加 on)\n    参数二：事件处理函数\n\n    attachEvent("onclick",clickOne);\n    attachEvent("onclick",clickTwo);\n')])]),e._v(" "),t("p",[e._v("(3)DOM2绑定事件兼容性处理")]),e._v(" "),t("pre",[t("code",[e._v('    function addEvent(ele,eventType,handler,isCapture){   //isCapture 是否冒泡\n        if(ele.addEventListener){\n            ele.addEventListener(eventType,handler,isCapture);\n        }else{\n            ele.attachEvent("on"+eventType,handler);\n        }\n    }\n')])]),e._v(" "),t("p",[t("strong",[e._v("2、移出事件")])]),e._v(" "),t("p",[e._v("(1)W3C方式")]),e._v(" "),t("pre",[t("code",[e._v('    removeEventListener( "eventType",handler,true||false );\n    参数一：不加on\n')])]),e._v(" "),t("p",[e._v("(2)IE方式")]),e._v(" "),t("pre",[t("code",[e._v("    detachEvent(eventType,handler);\n    参数二：加on\n")])]),e._v(" "),t("p",[e._v("(3)DOM2解除事件兼容性处理")]),e._v(" "),t("pre",[t("code",[e._v('    function removeEvent(ele,eventType,handler,isCapture){\n        if(ele.removeEventListener){     //isCapture未传参，则是undefined\n            ele.removeEventListener(eventType,handler,isCapture);\n        }else{\n            ele.detachEvent("on"+eventType,handler);\n        }\n    }\n')])]),e._v(" "),t("h2",{attrs:{id:"事件委托"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件委托"}},[e._v("#")]),e._v(" 事件委托")]),e._v(" "),t("ul",[t("li",[e._v("本该子元素做的事情，委托给父元素来做。实质：冒泡事件")]),e._v(" "),t("li",[e._v("监听到的实际的事件源")]),e._v(" "),t("li",[e._v("标准浏览器target : ul")]),e._v(" "),t("li",[e._v("IE浏览器srcElement : ul")])]),e._v(" "),t("p",[t("strong",[e._v("代码示例")])]),e._v(" "),t("pre",[t("code",[e._v('<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <title></title>\n    </head>\n    <body>\n        <ul>\n            <li>我是li标签1</li>\n            <li>我是li标签2</li>\n            <li>我是li标签3</li>\n            <li>我是li标签4</li>\n            <p>我是p标签</p>\n        </ul>\n    </body>\n</html>\n<script type="text/javascript">\n    var ul = document.getElementsByTagName("ul")[0];\n    ul.onclick = function(event){\n        var e = event || window.event;\n        console.log(e);\n        console.log(e.target || e.srcElement);\n\n        var tar = e.target || e.srcElement;\n        //节点名称nodeName都是大写的\n        if(tar.nodeName.toLowerCase() == "li"){\n            alert(123);\n        }\n    }\n<\/script>\n')])])])}),[],!1,null,null,null);n.default=a.exports}}]);
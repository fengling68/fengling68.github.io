(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{523:function(e,t,n){"use strict";n.r(t);var r=n(1),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"js运动函数及封装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js运动函数及封装"}},[e._v("#")]),e._v(" JS运动函数及封装")]),e._v(" "),n("h2",{attrs:{id:"图片滚动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#图片滚动"}},[e._v("#")]),e._v(" 图片滚动")]),e._v(" "),n("pre",[n("code",[e._v('var timer;\nbtn.onclick = function(){\n    setInterval(function(){\n        div.style.left = div.offsetLeft + 10 + "px";\n        if(div.offsetLeft > 200){\n            clearInterval(timer);\n            div.style.left = "200px";\n        }\n    },100);\n}\n\n\n//元素当前位置：元素.offsetLeft/offsetTop + "px";\n')])]),e._v(" "),n("h2",{attrs:{id:"运动公式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运动公式"}},[e._v("#")]),e._v(" 运动公式")]),e._v(" "),n("p",[e._v("(1)匀速运动公式")]),e._v(" "),n("pre",[n("code",[e._v('元素.style.top/left = 元素.offsetLeft/offsetTop  +/-  10 + "px";\n')])]),e._v(" "),n("p",[e._v("(2)缓速运动公式")]),e._v(" "),n("pre",[n("code",[e._v('元素.style.top/left = 元素.offsetLeft/offsetTop + (target-当前位置) / 10 + "px";\n')])]),e._v(" "),n("h2",{attrs:{id:"匀速运动函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#匀速运动函数"}},[e._v("#")]),e._v(" 匀速运动函数")]),e._v(" "),n("pre",[n("code",[e._v('var timer;\nfunction animate(ele,target){\n    clearInterval(ele.timer);   //归属者ele\n    var speed = (target > ele.offsetLeft) ? 10 : -10;\n\n    ele.timer = setInterval(function(){\n        var result = target - ele.offsetLeft;\n        ele.style.left = ele.offsetLeft + speed + "px";\n\n        if( Math.abs(result) <= 10 ){\n            clearInterval(ele.timer);\n            ele.style.left = target + "px";\n        }\n    },100);\n}\n')])]),e._v(" "),n("h2",{attrs:{id:"缓速运动函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#缓速运动函数"}},[e._v("#")]),e._v(" 缓速运动函数")]),e._v(" "),n("pre",[n("code",[e._v('var timer;\nfunction animate(obj,target){\n    clearInterval(obj.timer);   //归属者obj\n\n    obj.timer = setInterval(function(){\n        var speed = (target - obj.offsetLeft) / 10;\n        speed = (speed > 0) ? Math.ceil(speed) : Math.floor(speed);\n        obj.style.left = obj.offsetLeft + speed + "px";\n\n        if(target == obj.offsetLeft){\n            clearInterval(obj.timer);\n            obj.style.left = target + "px";\n        }\n    },20);\n}\n')])])])}),[],!1,null,null,null);t.default=a.exports}}]);
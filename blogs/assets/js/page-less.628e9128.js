(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{789:function(n,s,a){"use strict";a.r(s);var t=a(1),e=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"less"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#less"}},[n._v("#")]),n._v(" less")]),n._v(" "),a("h2",{attrs:{id:"三种使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三种使用方式"}},[n._v("#")]),n._v(" 三种使用方式")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("1、引入less文件，将写好的less文件，编译为CSS文件 ———— 基本不用\n2、在本地进行编译, 使用 koala\n3、在本地进行编译,使用npm安装less\n    install less -p\n")])])]),a("h2",{attrs:{id:"koala使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#koala使用方法"}},[n._v("#")]),n._v(" koala使用方法")]),n._v(" "),a("p",[n._v("目标：把less文件，编译成css文件")]),n._v(" "),a("p",[n._v("自动编译功能：修改less文件（koala 必须开启）")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("1、把包含less文件的文件夹，拖放到koala目录下\n2、把需要编译的文件，进行编译\n3、在对应的目录中，即可输出需要的CSS文件\n4、引入css文件\n")])])]),a("h2",{attrs:{id:"less变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#less变量"}},[n._v("#")]),n._v(" less变量")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("//定义变量\n@bgy: greenyellow;\n@w: 400px;\n\n.box{\n    width: @w;\n    height: @h;\n    background-color: @bgy;\n    font-size: @fs;\n}\n")])])]),a("p",[a("strong",[n._v("如果 类名 要作为变量使用，前后要加  { }")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("@b: .box2;\n\n@{b} {\n    width: @w;\n    height: @h;\n    background-color: @bgp;\n    font-size: @fs;\n}\n")])])]),a("h2",{attrs:{id:"内置函数-数学函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置函数-数学函数"}},[n._v("#")]),n._v(" 内置函数（数学函数）")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v(".box{\n    background-color: #00BFFF;\n    //abs 绝对值\n    width: abs(-100px);\n    //sqrt 开方\n    width: sqrt(10000px);\n    //ceil 向上取整\n    height: ceil(99.6px);\n    //pow 次幂\n    font-size: pow(5px , 2);\n    //min 最小值     max 最大值\n    font-size: min(100px , 200px , 20px);\n    //随机数\n}\n")])])]),a("h2",{attrs:{id:"less嵌套"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#less嵌套"}},[n._v("#")]),n._v(" less嵌套")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v(".wrap{\n    width: 100%;\n    margin: 0px auto;\n    .top,.bottom{\n        width: 100%;\n        height: 200px;\n        text-align: center;\n        background-color: #00BFFF;\n    }\n    .center{\n        width: 100%;\n        height: 600px;\n        .left{\n           ...\n        }\n        .right{\n           ...\n        }\n        .middle{\n            h3{\n                color: red;\n            }\n        }\n    }\n}\n")])])]),a("h2",{attrs:{id:"父元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#父元素"}},[n._v("#")]),n._v(" 父元素（&）")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("a{\n    font-size:40px; \n    &:hover{\n        color: greenyellow;\n    }\n}\n\n.box{\n    width: 200px;\n    height: 200px;\n    background-color: #00BFFF;\n    cursor:pointer;\n\n    &:hover{\n        background-color: #FFC0CB;\n    }\n\n    &{\n        color: red;\n        font-size: 28px;\n    }\n}\n")])])]),a("h2",{attrs:{id:"less混合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#less混合"}},[n._v("#")]),n._v(" less混合")]),n._v(" "),a("p",[n._v("像操作函数一样操作 CSS 样式")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v(".style{\n    width: 100%;\n    height: 250px;\n    background-color: darkviolet;\n}\n\n.box{\n    .style();\n    font-size: 30px;\n}\n")])])]),a("p",[n._v("可以传参")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("@bgb: #00BFFF;\n\n.style2(@bgb){\n    width: 100%;\n    height: 250px;\n    background-color: @bgb;\n    margin-top: 20px;\n}\n\n.box2{\n    font-size: 40px;\n    .style2( @bgb );\n}\n")])])]),a("h2",{attrs:{id:"less继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#less继承"}},[n._v("#")]),n._v(" less继承")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v(".grandFather{\n    width: 100%;\n    height: 100px;\n    background-color: gainsboro;\n    font-size: 20px;\n    text-align: center;\n}\n\n.father:extend(.grandFather){\n    background-color: deepskyblue;\n}\n\n.son:extend(.father){\n    font-size: 50px;\n    background-color: #FFC0CB;\n}\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
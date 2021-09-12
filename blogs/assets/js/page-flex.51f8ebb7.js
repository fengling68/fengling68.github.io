(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{841:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"flex"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flex"}},[t._v("#")]),t._v(" flex")]),t._v(" "),n("p",[t._v("仅个人学习总结之作，可能存在问题，使用过程中会不断优化。")]),t._v(" "),n("h2",{attrs:{id:"一、基本知识点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、基本知识点"}},[t._v("#")]),t._v(" 一、基本知识点")]),t._v(" "),n("blockquote",[n("p",[t._v("1、px : 像素, 逻辑像素 相对单位, 抽象的单位长度")]),t._v(" "),n("p",[t._v("2、dp : 在参数中, 显示的是物理像素, 实际的单位长度, 设备无关像素")]),t._v(" "),n("p",[t._v("3、dpr: 设备像素缩放比\n1px = dpr^2*dp\n4、屏幕像素密度ppi: 屏幕每英寸像素数量")]),t._v(" "),n("p",[t._v("5、ppi = 屏幕对角线长度 / 屏幕英寸")]),t._v(" "),n("p",[t._v("例 iPhone5：ppi = sqrt(1136"),n("em",[t._v("1136 + 640")]),t._v("640)/4")])]),t._v(" "),n("h2",{attrs:{id:"布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#布局"}},[t._v("#")]),t._v(" 布局")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('//html\n<div class="container">\n    <div class="box">1</div>\n    <div class="box">2</div>\n    <div class="box">3</div>\n    <div class="box">4</div>\n</div>\n\n.container{\n    /* 将container变成弹性盒子 */\n    display: flex;\n}\n')])])]),n("h2",{attrs:{id:"二、容器属性-container"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、容器属性-container"}},[t._v("#")]),t._v(" 二、容器属性（.container）")]),t._v(" "),n("h3",{attrs:{id:"_1、主轴方向-flex-direction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、主轴方向-flex-direction"}},[t._v("#")]),t._v(" 1、主轴方向 "),n("code",[t._v("flex-direction:")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("row（默认）       按照主轴开始位置排列\nrow-reverse      按照主轴结束位置排列 \ncolumn           按照交叉轴开始位置排列\ncolumn-reverse   按照交叉轴结束位置排列\n")])])]),n("h3",{attrs:{id:"_2、换行-flex-wrap"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、换行-flex-wrap"}},[t._v("#")]),t._v(" 2、换行 "),n("code",[t._v("flex-wrap：")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("wrap             超过contain盒子的宽度后强制换行\nnowrap           不换行\nwrap-reverse     换行后翻转，第一行在下面\n")])])]),n("h3",{attrs:{id:"_3、主轴方向-换行-值1-方向-值2-换行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、主轴方向-换行-值1-方向-值2-换行"}},[t._v("#")]),t._v(" 3、主轴方向+换行(值1:方向 值2: 换行)")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("flex-flow: row wrap-reverse;\n")])])]),n("h3",{attrs:{id:"_4、主轴对齐方式-justify-content"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、主轴对齐方式-justify-content"}},[t._v("#")]),t._v(" 4、主轴对齐方式 "),n("code",[t._v("justify-content")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("flex-start       按照主轴开始的位置对齐\nflex-end         按照主轴结束的位置对齐\ncenter           按照主轴中心的位置对齐\nspace-between    按照主轴, 两端对齐 , 间隔相同\nspace-around     主轴方向, 每个项目的左右间隔相同\n")])])]),n("h3",{attrs:{id:"_5、交叉轴对齐方式-align-items"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5、交叉轴对齐方式-align-items"}},[t._v("#")]),t._v(" 5、交叉轴对齐方式 "),n("code",[t._v("align-items")]),t._v("：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("flex-start       交叉轴开始位置对齐\nflex-end         交叉轴结束位置对齐\ncenter           交叉轴水平位置对齐\nbaseline         交叉轴基线位置对齐\nstretch          如果没有高度或者高度自动，自动撑满整个容器\n")])])]),n("h3",{attrs:{id:"_6、主轴方向-对齐方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6、主轴方向-对齐方式"}},[t._v("#")]),t._v(" 6、主轴方向+对齐方式")]),t._v(" "),n("h3",{attrs:{id:"_7、多根轴线对齐-强制换行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7、多根轴线对齐-强制换行"}},[t._v("#")]),t._v(" 7、多根轴线对齐(强制换行)")]),t._v(" "),n("blockquote",[n("p",[t._v("盒子不换行默认一条轴线排列,不会产生第二根基线。设置多根轴线无作用")]),t._v(" "),n("p",[t._v("盒子换行：出现多根轴线对齐（按每一根轴线的...对齐）")])]),t._v(" "),n("h2",{attrs:{id:"三、项目属性-box"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、项目属性-box"}},[t._v("#")]),t._v(" 三、项目属性（.box）")]),t._v(" "),n("h3",{attrs:{id:"_1、项目的顺序-order"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、项目的顺序-order"}},[t._v("#")]),t._v(" 1、项目的顺序 —— "),n("code",[t._v("order")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("/*默认从左到右都是0  数越小, 越靠前*/\n.box:nth-child(3){\n    order: 1;\n}\n.box:nth-child(2){\n    order: 5;\n}\n")])])]),n("h3",{attrs:{id:"_2、项目的放大-flex-grow"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、项目的放大-flex-grow"}},[t._v("#")]),t._v(" 2、项目的放大 —— "),n("code",[t._v("flex-grow")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("/* \n * 项目的放大比例 ———— flew-grow\n * 默认为0, 即使存在剩余空间也不会放大\n * 不能设置负数\n * 也不要设置小数\n */\n.box:nth-child(3){\n    flex-grow: 3;\n}\n")])])]),n("h3",{attrs:{id:"_3、项目的缩小-flex-shrink"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、项目的缩小-flex-shrink"}},[t._v("#")]),t._v(" 3、项目的缩小 —— "),n("code",[t._v("flex-shrink")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("/*\n * 项目的缩小比例\n * 默认值为1, 如果剩余空间不足, 项目会缩小\n * 设置为0 , 不会缩小\n * 不能设置负数\n * 也不要设置小数\n */\n.box:nth-child(2){\n    order: 0.5;\n    flex-shrink: 0;\n}\n")])])]),n("h3",{attrs:{id:"_4、项目的主轴空间大小-flex-basis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、项目的主轴空间大小-flex-basis"}},[t._v("#")]),t._v(" 4、项目的主轴空间大小 —— "),n("code",[t._v("flex-basis")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("/* \n * 主轴空间大小\n * 定义在分配主轴空间之前，项目占据主轴空间，\n * 浏览器根据当前属性，计算主轴是否有多余空间\n * \n * 宽度固定\n */\n.box:nth-child(3){\n    flex-basis: 300px;\n    /*flex-shrink: 0;*/\n}\n")])])]),n("h2",{attrs:{id:"四、兼容代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、兼容代码"}},[t._v("#")]),t._v(" 四、兼容代码")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 时间：2019-5-7\n * 参考文档：https://segmentfault.com/a/1190000003978624\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 作用：给父盒子添加flex属性\n * 注意：如果子元素是行内元素，多数使用 display: block 或 display: inline-block 把行内子元素变成块元素。\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@mixin")]),t._v(" mix-flex")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -webkit-flex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -moz-flex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -webkit-box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -moz-box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -ms-flexbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@mixin")]),t._v(" mix-flex-son")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-flex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-ms-flex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-flex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-box-flex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 作用：flex-direction，子元素在主轴的排列方向\n * 传值：row（左->右）| row-reverse（右->左）| column（上->下）| column-reverse（下->上）\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@mixin")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mix-flex-direction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("d")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@if")]),t._v(" $d == "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'row'")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-direction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" normal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-orient")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" horizontal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@else")]),t._v(" if $d == "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'row-reverse'")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-pack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" end"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-direction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reverse"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-orient")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" horizontal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@else")]),t._v(" if $d == "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'column'")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-direction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" normal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-orient")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" vertical"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@else")]),t._v(" if $d == "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'column-reverse'")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-pack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" end"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-direction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reverse"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-orient")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" vertical"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-flex-direction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-flex-direction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-ms-flex-direction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-o-flex-direction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 作用：justify-content，子元素在主轴对齐方式；box-pack(旧版4个值): start | end | center | justify;\n * 传值(5个值)：flex-start(默认) | flex-end | center | space-between | space-around\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@mixin")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mix-justify-content")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@if")]),t._v(" $p == "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-start'")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-pack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@else")]),t._v(" if $p == "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-end'")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-pack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" end"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@else")]),t._v(" if $p == "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'center'")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-pack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@else")]),t._v(" if $p == "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'space-between'")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-pack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" justify"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@else")]),t._v(" if $p == "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'space-around'")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    // box-pack 不可用\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-justify-content")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-justify-content")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-ms-justify-content")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-o-justify-content")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 作用：align-items，子元素在交叉轴轴对齐方式；box-align(旧版4个值): start | end | center | baseline | stretch;\n * 传值(5个值)： flex-start | flex-end | center | baseline | stretch;\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@mixin")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mix-align-items")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@if")]),t._v(" $p == "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-start'")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-align")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@else")]),t._v(" if $p == "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-end'")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-align")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" end"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@else")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-align")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-align-items")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-align-items")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-ms-align-items")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-o-align-items")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 作用：flex-wrap，元素是否换行\n * 传值：nowrap | wrap | wrap-reverse\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@mixin")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mix-flex-wrap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("wrap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nowrap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-flex-wrap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $wrap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-flex-wrap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $wrap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-ms-flex-wrap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $wrap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-o-flex-wrap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $wrap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-wrap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $wrap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 作用：flex-grow，是否放大\n * 传值：0（不放大）| 1（放大）\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@mixin")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mix-flex-grow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@if")]),t._v(" $value == 0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    // 不伸缩\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-flex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@else")]),t._v(" if $value == 1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-flex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@else")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-flex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-flex-grow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-flex-grow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-grow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 作用：flex-shrink，是否缩小\n * 传值：0（不缩小）| 1（缩小）\n */")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@mixin")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mix-flex-shrink")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@if")]),t._v(" $value == 0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    // 不伸缩\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-flex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@else")]),t._v(" if $value == 1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-flex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@else")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-flex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-flex-shrink")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-flex-shrink")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-shrink")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 作用：order，子元素排序\n */")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@mixin")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mix-order")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$o"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-ordinal-group")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $o"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-order")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $o"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-order")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $o"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("order")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $o"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"附、一个盒子九宫格位置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#附、一个盒子九宫格位置"}},[t._v("#")]),t._v(" 附、一个盒子九宫格位置")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v(".container{\n    width: 400px;\n    height: 400px;\n    border: 3px solid black;\n    /* 将container变成弹性盒子 */\n    display: flex;\n\n    /* 位置1 */\n    justify-content: flex-start;\n\n    /* 位置2 主轴方向-居中对齐*/\n    justify-content: center;\n\n    /* 位置3 主轴方向-结束位置对齐*/\n    justify-content: flex-end;\n\n    /* 位置4 主轴方向-结束位置对齐*\n    justify-content: flex-start;\n    align-items: center;\n\n    /* 位置5 主轴方向-结束位置对齐*/\n    justify-content: center;\n    align-items: center;\n\n    /* 位置6 主轴方向-结束位置对齐*/\n    justify-content: flex-end;\n    align-items: center;\n\n    /* 位置7 主轴方向-结束位置对齐*/\n    /*flex-direction: column;\n    align-items: flex-start;*/\n    justify-content: flex-start;\n    align-items: flex-end;\n\n    /* 位置8 主轴方向-结束位置对齐*/\n    /*flex-direction: column;\n    align-items: center;*/\n    justify-content: center;\n    align-items: flex-end;\n\n    /* 位置9 主轴方向-结束位置对齐*/\n    /*flex-direction: column;\n    align-items: flex-end;*/\n    justify-content: flex-end;\n    align-items: flex-end;\n}\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
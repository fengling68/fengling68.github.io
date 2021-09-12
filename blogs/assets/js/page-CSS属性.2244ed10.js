(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{776:function(e,r,t){"use strict";t.r(r);var a=t(1),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"css属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css属性"}},[e._v("#")]),e._v(" CSS属性")]),e._v(" "),t("h2",{attrs:{id:"颜色"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#颜色"}},[e._v("#")]),e._v(" 颜色")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("rgb颜色(red,green,blue)  rgb(0,0,0)黑色    rgb(255,255,255)白色\nhex十六进制颜色    #e4393c 京东红\n确切的英文名      red    green\nrgba(x,x,x,0~1)带透明度：数越小，越透明\n")])])]),t("h2",{attrs:{id:"尺寸"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#尺寸"}},[e._v("#")]),e._v(" 尺寸")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("单位:px像素   %百分比  cm厘米  mm毫米  pt棒  em(1em等于当前字体颜色)\nwidth    min-width     max-width\nheight   min-height    max-height\n\n内容溢出 overflow:    overflow-x:    overflow-y:\nvisible：溢出可见(默认值，内容不会修剪，会显现在元素框之外)\nhidden：溢出隐藏(内容会被修剪，超出内容不可见)\nscroll：设置滚动条(内容会被修剪，浏览器会显示滚动以便查看其余内容)\nauto：自动(如果被修剪，浏览器会显示滚动以便查看其余内容)\n")])])]),t("blockquote",[t("p",[e._v("注意：块级元素允许修改宽度和高度，行内元素不能修改宽度和高度。"),t("img"),e._v("特殊，行内快允许改变宽高。")])]),e._v(" "),t("h2",{attrs:{id:"边框"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#边框"}},[e._v("#")]),e._v(" 边框")]),e._v(" "),t("p",[e._v("1、四边")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("border:style width color;    用空格隔开，可不设置其中的某些。\nstyle:dotted(点线) solid(实线) dashed(虚线) double(双线)\n")])])]),t("p",[e._v("2、单独指定边框属性，单边")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("border-style:\nborder-width:\nborder-color:red green pink purple;\nborder-left-color:\nborder-right-style:\n")])])]),t("h2",{attrs:{id:"边框倒角"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#边框倒角"}},[e._v("#")]),e._v(" 边框倒角")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("border-radius:10px;\nborder-radius:10px 20px 30px 40;\n\nborder-top-left-radius:30px;     左上角\nborder-top-right-radius:30px;    右上角\nborder-bottom-left-radius:30px;  右下角\nborder-bottom-left-radius:30px;  左下角\n\n圆 border-radius:50%；\n")])])]),t("p",[e._v("倒三角：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("div{\n    width:0;\n    height:0;\n    border-width:50px;\n    border-style:solid;\n    border-color:red transparent transparent transparent;\n}                             \x3c!--  透明 --\x3e\n")])])]),t("h2",{attrs:{id:"边框阴影"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#边框阴影"}},[e._v("#")]),e._v(" 边框阴影")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("属性：box-shadow：h-shadow v-shadow blur spread color inset\nh-shadow 水平阴影位置   正直向右，负值向左\nv-shadow 垂直阴影位置   正直向下，负值向上\nblur     可选，模糊距离\nspread   可选，阴影尺寸\ncolor    可选，阴影颜色\ninset    可选值，将外部阴影改为内部阴影\n")])])]),t("blockquote",[t("p",[e._v("注意：1、值要按顺序书写 2、阴影默认黑色 3、用内阴影直接加inset")])]),e._v(" "),t("h2",{attrs:{id:"图片边框"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图片边框"}},[e._v("#")]),e._v(" 图片边框")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("属性：border-image将图片规定为包围div元素的边框\n值：border-image-source      图片路径\nborder-image-slice:26;   图片边框向内移植   \x3c!-- 切割图片,不带单位 --\x3e\nborder-image-width   图片边框宽度\nborder-image-outset  边框图像区域超出边框的量（向外延伸多大）\nborder-image-repeat  边框的平铺方式（repeat：平铺；round：铺满；stretch:拉伸）\n\n简写：border-image:url(images/xx.png) 26 repeat;\n")])])]),t("h2",{attrs:{id:"轮廓"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#轮廓"}},[e._v("#")]),e._v(" 轮廓")]),e._v(" "),t("p",[e._v("与border值相似,但不与边框同用。\n绘制于元素周围的一条线，位于边框边缘的外围，可以起到突出元素的作用。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("简写：outline:width style color;\n全写：outline-width   outline-style    outline-color\n经常在获取焦点（focus或hover）时使用。\n")])])]),t("blockquote",[t("p",[e._v("注意：outline：none；可以去掉input默认边框")])])])}),[],!1,null,null,null);r.default=s.exports}}]);
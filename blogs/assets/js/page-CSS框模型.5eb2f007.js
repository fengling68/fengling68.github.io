(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{776:function(a,s,t){"use strict";t.r(s);var e=t(1),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"css框模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css框模型"}},[a._v("#")]),a._v(" CSS框模型")]),a._v(" "),t("h2",{attrs:{id:"盒子模型-方框模型、盒子属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#盒子模型-方框模型、盒子属性"}},[a._v("#")]),a._v(" 盒子模型(方框模型、盒子属性)")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("主要设置元素的：\n    外边距（margin）  内边距（padding）  边框（border）  宽度  高度\n元素实际宽度=左外边距+左边框+左内边距+宽度+左右边距+右边框+右外边距\n元素实际高度=上外边距+上边框+上内边距+宽度+下右边距+下边框下外边距\n")])])]),t("h2",{attrs:{id:"外边距-元素边框外围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#外边距-元素边框外围"}},[a._v("#")]),a._v(" 外边距(元素边框外围)")]),a._v(" "),t("p",[a._v("1、四个方向设置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("margin:value;    一个值四个方向\nmargin:value(上下) value(左右);\nmargin:value(上) value(左右) value(下);\nmargin:value(上) value(右) value(下) value(左);\n")])])]),t("p",[a._v("2、单方向设置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("margin-left/right/top/bottom:value;\n")])])]),t("p",[a._v("3、设置块级元素居中")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("margin:20px auto 2px;\nauto：如果块级元素左右外边距设置为auto，那么当前元素会在他外层容器中水平居中。\n")])])]),t("p",[a._v("4、外边距合并")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("当两个垂直外边距相遇时，将形成一个外边距。外边距的值，以大值为主。\n\nmargin-bottom:20px;    margin-top:100px;\n合并后：`margin-top:100px;`\n")])])]),t("p",[a._v("5、使用外边距遇到的问题")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("内外嵌套的div元素，如果设置内层div的margin-top，默认会作用于外层的div的margin-top上。而内层无效果。\n\n解决方法：\n给外层div加边框(border:1px solid;)，但还存在小问题。\n给外层div加内边距。\n")])])]),t("h2",{attrs:{id:"内边距-边框与内容之间的空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内边距-边框与内容之间的空间"}},[a._v("#")]),a._v(" 内边距 (边框与内容之间的空间)")]),a._v(" "),t("p",[a._v("1、四个方向设置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("padding:value;    一个值四个方向     \npadding:value(上下) value(左右);\npadding:value(上) value(左右) value(下);\npadding:value(上) value(右) value(下) value(左);\n")])])]),t("p",[a._v("2、单方向设置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("padding-left/right/top/bottom:value;\n")])])]),t("p",[a._v("3、元素设置内边距padding后，会扩大整个元素区域。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("解决办法：\n\n(1)添加padding后，重新设置元素宽高(不好用)\n(2)给元素添加box-sizing:border-box; 元素的内边距和边框不会再增加他的宽度和高度。（会向内挤文本）\n")])])]),t("h2",{attrs:{id:"css重写-重置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css重写-重置"}},[a._v("#")]),a._v(" CSS重写/重置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("在不同浏览器，HTML中标签的默认样式有一个默认属性值，渲染出来的效果不尽相同，我们在写css页面的时候，为了避免在css中重复定义它们，我们需要重置默认样式，以方便统一，从而提高开发效率。\n\n常见：*{margin:0px;padding:0px;}     不规范，加载速度会变慢\n规范：p,ul,li,ol,h1,h2,h3,{margin:0px;padding:0px;}   将遇到的有默认属性值的标签写出来。\n")])])]),t("h2",{attrs:{id:"附"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#附"}},[a._v("#")]),a._v(" 附")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("margin和padding使用效果是一样的，但有区别，可通过border验证，推荐使用padding\npadding:20px 0;\nmargin:20px 0;\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
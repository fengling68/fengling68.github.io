(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{508:function(a,r,n){"use strict";n.r(r);var t=n(1),e=Object(t.a)({},(function(){var a=this,r=a.$createElement,n=a._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"css背景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css背景"}},[a._v("#")]),a._v(" CSS背景")]),a._v(" "),n("h2",{attrs:{id:"背景颜色"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#背景颜色"}},[a._v("#")]),a._v(" 背景颜色")]),a._v(" "),n("pre",[n("code",[a._v("background-color：red;       background-color不能继承\nbackground-color：transparent;   设置背景为“透明”\n")])]),a._v(" "),n("h2",{attrs:{id:"背景图片-常用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#背景图片-常用"}},[a._v("#")]),a._v(" 背景图片(常用)")]),a._v(" "),n("p",[a._v("背景图片可以写文字，img不可以")]),a._v(" "),n("pre",[n("code",[a._v("background-image:url(images/logo.png);      无引号\nbackground-image:url('images/logo.png');    单引号\nbackground-image:url(\"images/logo.png\"图像固定);    双引号\n")])]),a._v(" "),n("h2",{attrs:{id:"背景重复-常用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#背景重复-常用"}},[a._v("#")]),a._v(" 背景重复(常用)")]),a._v(" "),n("p",[a._v("背景图默认水平垂直方向都平铺。")]),a._v(" "),n("pre",[n("code",[a._v("background-repeat:repeat/repeat-x/repeat-y/no-repeat;\n                   平铺/水平平铺/垂直平铺/不平铺\n")])]),a._v(" "),n("h2",{attrs:{id:"改背景图片的尺寸"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#改背景图片的尺寸"}},[a._v("#")]),a._v(" 改背景图片的尺寸")]),a._v(" "),n("pre",[n("code",[a._v("background-size:100px 100px;   background-size:50% 50%;\n特殊1、background-size:contain;   扩大背景图像,碰到第一个边缘就停止\n特殊2、background-size:cover;     扩大背景图像，使背景图完全覆盖背景区域，直到碰到最后一个边缘才停止\n")])]),a._v(" "),n("h2",{attrs:{id:"背景图像固定"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#背景图像固定"}},[a._v("#")]),a._v(" 背景图像固定")]),a._v(" "),n("pre",[n("code",[a._v("background-attachment:scroll;   默认，滚动定位\nbackground-attachment:fixed;    固定定位\n一旦设置背景图像固定，背景图就不会随着滚轮滚动。\n")])]),a._v(" "),n("h2",{attrs:{id:"背景定位-常用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#背景定位-常用"}},[a._v("#")]),a._v(" 背景定位(常用)")]),a._v(" "),n("p",[a._v("背景图像在区域中的哪个位置进行显示")]),a._v(" "),n("pre",[n("code",[a._v("background-position:20px 20px;\nbackground-position:left center;        \x3c!-- left,center,right --\x3e\n\nx为正，向右；x为负，向左；\ny为正，向下；y为负，向上；\n")])]),a._v(" "),n("h3",{attrs:{id:"_1、块级元素抠图："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、块级元素抠图："}},[a._v("#")]),a._v(" 1、块级元素抠图：")]),a._v(" "),n("pre",[n("code",[a._v("（1）ps量取想要扣取的小图的宽高;\n（2）创建一个与要显示图标width和height宽高一致的元素;\n（3）引入背景图，为创建好的元素设置背景图像(大背景图);\n（4）background-position给负值,将图片移入到指定位置，通过开发者工具将背景图调整到div中。\n\ndiv{\n    width:22px;\n    height:23px;\n    border:1px solid red;\n    background-image:url(iconlist_1.png);\n    background-repeat:no-repeat;\n    background-position:-146px -143px;\n}\n")])]),a._v(" "),n("h3",{attrs:{id:"_2、行内元素抠图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、行内元素抠图"}},[a._v("#")]),a._v(" 2、行内元素抠图")]),a._v(" "),n("p",[a._v("给行内元素添加水平方向的padding，元素会出现16px的高度，可以利用行内元素的这个特点，给行内元素添加背景图！")]),a._v(" "),n("p",[a._v("但需要注意的是，行内元素添加上下的padding虽然可以“撑大”元素的高度，但是高度过大，则会出现覆盖上下元素的情况")]),a._v(" "),n("pre",[n("code",[a._v("s{\npadding-left:16px;\nbackground-image:url(iconlist_1.png);\nbackground-repeat:no-repeat;\nbackground-position:-127px -170px;\n}\n<s></s>\n")])]),a._v(" "),n("h2",{attrs:{id:"背景绘制区域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#背景绘制区域"}},[a._v("#")]),a._v(" 背景绘制区域")]),a._v(" "),n("p",[a._v("指定背景可以在哪些区域显示")]),a._v(" "),n("pre",[n("code",[a._v("background-clip:border-box;   默认值，背景被裁剪到边框\nbackground-clip:padding-box;  背景显示在padding和内容区域\nbackground-clip:center-box;   背景显示在内容区域\n")])]),a._v(" "),n("h2",{attrs:{id:"背景合并"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#背景合并"}},[a._v("#")]),a._v(" 背景合并")]),a._v(" "),n("pre",[n("code",[a._v("background:color url() attachment position;\n根据需要合并、滚动条    和固定\n")])]),a._v(" "),n("p",[a._v("CSS视频day02_06背景(2)最后3分钟，图片加载技巧")]),a._v(" "),n("h2",{attrs:{id:"注意"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[a._v("#")]),a._v(" 注意")]),a._v(" "),n("pre",[n("code",[a._v("background:#ccc url(images4/user.png) no-repeat 5px 5px;\n背景颜色(background-color)要放在背景(background)图片之前\n")])])])}),[],!1,null,null,null);r.default=e.exports}}]);
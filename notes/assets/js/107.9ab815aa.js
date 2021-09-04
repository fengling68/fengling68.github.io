(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{409:function(e,n,t){"use strict";t.r(n);var a=t(1),r=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"js基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js基础"}},[e._v("#")]),e._v(" JS基础")]),e._v(" "),t("h2",{attrs:{id:"_0、sass和scss区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0、sass和scss区别"}},[e._v("#")]),e._v(" 0、sass和scss区别")]),e._v(" "),t("pre",[t("code",[e._v("sass不允许出现 {} ， scss可以像css一样使用 {}\n\n//sass书写方式\nbody\n    font-size: 12px\n    background: #000\n//scss书写方式\nbody{\n    font-size: 12px;\n    background: #000;\n}\n")])]),e._v(" "),t("h2",{attrs:{id:"_1、定义变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、定义变量"}},[e._v("#")]),e._v(" 1、定义变量 "),t("code",[e._v("$")])]),e._v(" "),t("pre",[t("code",[e._v("$float: left;\n")])]),e._v(" "),t("h2",{attrs:{id:"_2、使用变量-或"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、使用变量-或"}},[e._v("#")]),e._v(" 2、使用变量 "),t("code",[e._v("#")]),e._v("或"),t("code",[e._v("$")])]),e._v(" "),t("pre",[t("code",[e._v("// 变量做属性名\n#{$float}: left;\n\n// 变量做属性值\nfloat: $left;\n")])]),e._v(" "),t("h2",{attrs:{id:"_3、选择器嵌套和属性嵌套"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、选择器嵌套和属性嵌套"}},[e._v("#")]),e._v(" 3、选择器嵌套和属性嵌套")]),e._v(" "),t("pre",[t("code",[e._v("body{\n    div{\n        font:{\n            weight:bold;\n            size:23px;\n        }\n    }\n}\n")])]),e._v(" "),t("h2",{attrs:{id:"_4、父选择器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、父选择器"}},[e._v("#")]),e._v(" 4、父选择器 "),t("code",[e._v("&")])]),e._v(" "),t("pre",[t("code",[e._v("div{\n    width:100px;\n    height:100px\n    &:after{\n        content:'';\n        background:red;\n        width:200px;\n        height:200px;\n    }\n    &-child{\n        // 编译后为 div-child\n    }\n}\n")])]),e._v(" "),t("h2",{attrs:{id:"_5、定义重用代码块-mixin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、定义重用代码块-mixin"}},[e._v("#")]),e._v(" 5、定义重用代码块 "),t("code",[e._v("@mixin")])]),e._v(" "),t("pre",[t("code",[e._v("// 居中显示\n@mixin center($t, $b, $l, $r){\n    position: absolute;\n    margin: auto;\n    top: rpx($t);\n    bottom: rpx($b);\n    left: rpx($l);\n    right: rpx($r);\n}\n\n@include center(0, 0, 0, 0);\n")])]),e._v(" "),t("h2",{attrs:{id:"_6、调用重用代码块-include"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、调用重用代码块-include"}},[e._v("#")]),e._v(" 6、调用重用代码块 "),t("code",[e._v("@include")])]),e._v(" "),t("pre",[t("code",[e._v(".box{\n    @include bg_dom('../img.png',30%,40%)\n}\n")])]),e._v(" "),t("h2",{attrs:{id:"_7、选择器继承-extend"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、选择器继承-extend"}},[e._v("#")]),e._v(" 7、选择器继承 "),t("code",[e._v("@extend")])]),e._v(" "),t("pre",[t("code",[e._v(".father {\n    border: 1px solid red;\n    background-color: #fdd;\n}\n.son {\n    @extend .father;\n    border-width: 3px;\n}\n")])]),e._v(" "),t("h2",{attrs:{id:"_8、数据类型运算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8、数据类型运算"}},[e._v("#")]),e._v(" 8、数据类型运算")]),e._v(" "),t("pre",[t("code",[e._v("所有: == , !=\n数字: +, -, *, /, %, <, >, <=, >=\n字符: + #{}\n颜色: +, *\n布尔: and, or, not\n空值:\n数组:\nmaps:\n")])]),e._v(" "),t("h2",{attrs:{id:"_9、内置函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9、内置函数"}},[e._v("#")]),e._v(" 9、内置函数")]),e._v(" "),t("pre",[t("code",[e._v("image-width()                   获取图片的宽度\nimage-height()                  获取图片的高度\nunit()                          获取一个值所使用的单位\nlighten(red,10%)                使颜色变淡\ndarken(red,20%)                 使颜色变深\ninline_image('../img.png')      将图片转换成base64格式\n...\n")])]),e._v(" "),t("h3",{attrs:{id:"_1-字符串函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-字符串函数"}},[e._v("#")]),e._v(" (1)字符串函数")]),e._v(" "),t("pre",[t("code",[e._v("unquote($string)                            ：删除字符串中的引号；\nquote($string)                              ：给字符串添加引号；\nstr-length($string)                         : 返回字符串长度；\nstr-insert($string, $insert, $index)        : 在$string中的第$insert中插入字符串$insert；\nstr-index($string, $substring)              : 查找字符串$substring并返回其下标；\nstr-slice($string, $start-at, [$end-at])    : 截取字符串（开始位置、结束位置）；\nto-upper-case($string)                      : 转为大写字母；\nto-lower-case($string)                      : 转为小写字母。\n")])]),e._v(" "),t("h3",{attrs:{id:"_2-数字函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-数字函数"}},[e._v("#")]),e._v(" (2)数字函数")]),e._v(" "),t("pre",[t("code",[e._v("percentage($value)                          ：将一个不带单位的数转换成百分比值；\nround($value)                               ：将数值四舍五入，转换成一个最接近的整数；\nceil($value)                                ：将大于自己的小数转换成下一位整数；\nfloor($value)                               ：将一个数去除他的小数部分；\nabs($value)                                 ：返回一个数的绝对值；\nmin($numbers…)                              ：找出几个数值之间的最小值；\nmax($numbers…)                              ：找出几个数值之间的最大值；\nrandom()                                    ：生成一个随机数。\n")])]),e._v(" "),t("h3",{attrs:{id:"_3-list函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-list函数"}},[e._v("#")]),e._v(" (3)list函数")]),e._v(" "),t("pre",[t("code",[e._v("length($list)                               ：返回一个列表的长度值；\nnth($list, $n)                              ：返回一个列表中指定的某个标签值\njoin($list1, $list2, [$separator])          ：将两个列给连接在一起，变成一个列表；\nappend($list1, $val, [$separator])          ：将某个值放在列表的最后；\nzip($lists…)                                ：将几个列表结合成一个多维的列表；\nindex($list, $value)                        ：返回一个值在列表中的位置值；\nlist-separator($list)                       : 是否有分隔符；\nis-bracketed($list)                         : 是否有方括号[]。\n")])]),e._v(" "),t("h3",{attrs:{id:"_4-map函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-map函数"}},[e._v("#")]),e._v(" (4)map函数")]),e._v(" "),t("pre",[t("code",[e._v("map-get($map,$key)                          ：根据$key返回对应的map值；\nmap-merge($map1,$map2)                      ：合并map1和map2；\nmap-remove($map,$key)                       ：返回删除$key值后的新map；\nmap-keys($map)                              ：返回map中的所有key；\nmap-values($map)                            ：返回map中的所有value；\nmap-has-key($map,$key)                      ：map中是否有改key；\nkeywords($args)                             ： Returns the keywords passed to a function that takes variable arguments.\n")])]),e._v(" "),t("h3",{attrs:{id:"_5-introspection函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-introspection函数"}},[e._v("#")]),e._v(" (5)Introspection函数")]),e._v(" "),t("pre",[t("code",[e._v("feature-exists($feature)                    ：某属性是否在当前sass中；\nvariable-exists($name)                      ：某变量是否在当前sass中；\nglobal-variable-exists($name)               ：某变量是否在全局环境中；\nfunction-exists($name)                      ：某函数是否存在；\nmixin-exists($name)                         ：某mixin是否存在；\ncontent-exists()                            ：当前的mixin是否通过了一个内容块；\ntype-of($value)                             ：返回一个值的类型；\nunit($number)                               ：返回一个值的单位；\nunitless($number)                           ：判断一个值是否有带位；\ncomparable($number-1, $number-2)            ：判断两个值是否可以做加、减和合并；\ncall($function, $args…)                     ：动态绑定get-function返回的函数；\nget-function($name, $css: false)            ：查找给定名称的函数；\ninspect($value)                             : Returns the string representation of a value as it would be represented in Sass.\n")])]),e._v(" "),t("h3",{attrs:{id:"_6-颜色函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-颜色函数"}},[e._v("#")]),e._v(" (6)颜色函数")]),e._v(" "),t("pre",[t("code",[e._v("rgb($red, $green, $blue)                    ：创建颜色；\nrgba($red, $green, $blue, $alpha)           ：创建颜色包含透明度；\nred($color)                                 ：获取颜色中的红色分量；\ngreen()                                     ：获取颜色中的绿色分量；\nblue()                                      ：获取颜色中的蓝色分量；\nMix()                                       ：将两种颜色混合在一起。\n\n\x3c!-- 其他三种较复杂参数 --\x3e\nadjust-color($color, [$red], [$green], [$blue], [$hue], [$saturation], [$lightness], [$alpha])\nscale-color($color, [$red], [$green], [$blue], [$saturation], [$lightness], [$alpha])\nchange-color($color, [$red], [$green], [$blue], [$hue], [$saturation], [$lightness], [$alpha])\n")])]),e._v(" "),t("h3",{attrs:{id:"_7-透明函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-透明函数"}},[e._v("#")]),e._v(" (7)透明函数")]),e._v(" "),t("pre",[t("code",[e._v("alpha($color)                               ：获得颜色的透明度；\nrgba($color, $alpha)                        ：设置颜色的透明度；\nopacify($color, $amout)                     ：使颜色变得不透明；\nfade-out($color, $amount)                   ：使颜色更透明；\ntransparent($color, $amount)                ：使颜色更透明；\n")])]),e._v(" "),t("h3",{attrs:{id:"_8-hsl函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-hsl函数"}},[e._v("#")]),e._v(" (8)HSL函数")]),e._v(" "),t("pre",[t("code",[e._v("hsl($hue, $saturation, $lightness)          ：从色调、饱和度、亮度创建一个颜色；\nhsla($hue, $saturation, $lightness, $alpha) ：从色调、饱和度、亮度、透明度创建一个颜色；\nhue($color)                                 ：获取颜色的hue值;\nsaturation($color)                          ：获取颜色的饱和度值；\nlightness($color)                           ：获取颜色的亮度；\nadjust-hue($color, $degrees)                ：改变颜色的色调；\nlighten($color, $amount)                    ：使颜色变亮；\ndarken($color, $amount)                     ：使颜色变暗；\nsaturate($color, $amount)                   ：增加饱和度；\ndesaturate($color, $amount)                 ：减小饱和度；\ngrayscale()                                 ：将颜色转成灰度；\ncomplement($color)                          ：返回颜色的互补色；\ninvert($color, [$weight])                   ：范湖颜色的对立色\n")])]),e._v(" "),t("h3",{attrs:{id:"_9-选择器函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-选择器函数"}},[e._v("#")]),e._v(" (9)选择器函数")]),e._v(" "),t("pre",[t("code",[e._v("selector-nest($selectors…)                  ：将选择器嵌套在另一个下面；\nselector-append($selectors…)                ：追加选择器(无空格)；\nselector-extend($selector, $extendee, $extender)        ：在 $selector中用$extender继承$extendee；\nselector-replace($selector, $original, $replacement)    ：在$selector中用$replacement替换$original；\nselector-unify($selector1, $selector2)      ：统一选择器；\nis-superselector($super, $sub)              ：$super是否匹配所有的$sub；\nsimple-selectors($selector)                 ：返回包含复合选择器的简单选择器；\nselector-parse($selector)                   ：将选择器解析为＆返回的格式。\n")])]),e._v(" "),t("h3",{attrs:{id:"_10-其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-其他"}},[e._v("#")]),e._v(" (10)其他")]),e._v(" "),t("pre",[t("code",[e._v("if($condition, $if-true, $if-false)         ：根据条件$condition返回true和false；\nunique-id()                                 ：返回css唯一标识。\n")])]),e._v(" "),t("h2",{attrs:{id:"_10、自定义函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10、自定义函数"}},[e._v("#")]),e._v(" 10、自定义函数")]),e._v(" "),t("pre",[t("code",[e._v("//项目中用到的计算rem值得函数\n@function func($t) {\n    @if (unit($t)==1) {\n        @return $t*10;\n    } @else if (unit($t)==2) {\n        @return $t*100;\n    } @else {\n        @return $t;\n    }\n}\n\n\x3c!-- 使用 --\x3e\nwidth: func(1);\n")])]),e._v(" "),t("h2",{attrs:{id:"_11、控制指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11、控制指令"}},[e._v("#")]),e._v(" 11、控制指令")]),e._v(" "),t("h3",{attrs:{id:"_1-控制指令-——-if-else"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-控制指令-——-if-else"}},[e._v("#")]),e._v(" (1)控制指令 —— @if @else")]),e._v(" "),t("pre",[t("code",[e._v("$type: y;\n@if $type == x{\n    color: red\n}\n@else if $type == y{\n    color: yellow\n}\n@else{\n    color: green\n}\n")])]),e._v(" "),t("h3",{attrs:{id:"_2-控制指令-——-for"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-控制指令-——-for"}},[e._v("#")]),e._v(" (2)控制指令 —— @for")]),e._v(" "),t("pre",[t("code",[e._v("// through : [1,3]\n@for $i from 1 through 3 {\n    .item-#{$i} { \n        width: 2em * $i; \n    }\n}\n\n// to : [1,3)\n@for $i from 1 through 3 {\n    .item-#{$i} { \n        width: 2em * $i; \n    }\n}\n")])]),e._v(" "),t("h3",{attrs:{id:"_3-控制指令-——-each"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-控制指令-——-each"}},[e._v("#")]),e._v(" (3)控制指令 —— @each")]),e._v(" "),t("pre",[t("code",[e._v("\x3c!-- 应用一：数组 --\x3e\n@each $animal in puma, sea-slug, egret, salamander {\n    .#{$animal}-icon {\n        background-image: url('/images/#{$animal}.png');\n    }\n}\n\n\x3c!-- 应用二：多个数组 --\x3e\n@each $animal, $color, $cursor in (name1, black, default),\n                                  (name2, blue,  pointer),\n                                  (name3, white, move) {\n    .#{$animal}-icon {\n        background-image: url('/images/#{$animal}.png');\n        border: 2px solid $color;\n        cursor: $cursor;\n    }\n}\n\n\x3c!-- 应用三：对象 --\x3e\n@each $header, $size in (h1: 2em, h2: 1.5em, h3: 1.2em) {\n    #{$header} {\n        font-size: $size;\n    }\n}\n")])]),e._v(" "),t("h3",{attrs:{id:"_4-控制指令-——-while"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-控制指令-——-while"}},[e._v("#")]),e._v(" (4)控制指令 —— @while")]),e._v(" "),t("pre",[t("code",[e._v("$i: 6;\n@while $i > 0 {\n    .item-#{$i} { width: 2em * $i; }\n    $i: $i - 2;\n}\n")])]),e._v(" "),t("h2",{attrs:{id:"_12、规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12、规则"}},[e._v("#")]),e._v(" 12、规则")]),e._v(" "),t("p",[e._v("@import\t"),t("br"),e._v("\n@media\t"),t("br"),e._v("\n@extend\t"),t("br"),e._v("\n@at-root\t跳出嵌套"),t("br"),e._v("\n@debug\t"),t("br"),e._v("\n@warn\t"),t("br"),e._v("\n@error")]),e._v(" "),t("h2",{attrs:{id:"_13、导入-scss-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13、导入-scss-文件"}},[e._v("#")]),e._v(" 13、导入 .scss 文件")]),e._v(" "),t("pre",[t("code",[e._v('\x3c!-- 导入并编译 --\x3e\n@import "base.scss", "header.scss";\n\n\x3c!-- 导入但不编译 --\x3e\n@import "_base.scss", "_header.scss";\n\n\x3c!-- 嵌套到样式内 --\x3e\n#main {\n    @import "example.scss";\n}\n')])]),e._v(" "),t("h2",{attrs:{id:"_14、四种输出格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14、四种输出格式"}},[e._v("#")]),e._v(" 14、四种输出格式")]),e._v(" "),t("pre",[t("code",[e._v(":nested      嵌套\n:expanded    选择器不缩进\n:compact     每条CSS规则占一行\n:compressed  压缩\n")])])])}),[],!1,null,null,null);n.default=r.exports}}]);
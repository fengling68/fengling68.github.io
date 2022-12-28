import{_ as e,o as n,c as a,f as r}from"./app.70e3165a.js";const t={},i=r(`<h1 id="js基础" tabindex="-1"><a class="header-anchor" href="#js基础" aria-hidden="true">#</a> JS基础</h1><h2 id="_0、sass和scss区别" tabindex="-1"><a class="header-anchor" href="#_0、sass和scss区别" aria-hidden="true">#</a> 0、sass和scss区别</h2><pre><code>sass不允许出现 {} ， scss可以像css一样使用 {}

//sass书写方式
body
    font-size: 12px
    background: #000
//scss书写方式
body{
    font-size: 12px;
    background: #000;
}
</code></pre><h2 id="_1、定义变量" tabindex="-1"><a class="header-anchor" href="#_1、定义变量" aria-hidden="true">#</a> 1、定义变量 <code>$</code></h2><pre><code>$float: left;
</code></pre><h2 id="_2、使用变量-或" tabindex="-1"><a class="header-anchor" href="#_2、使用变量-或" aria-hidden="true">#</a> 2、使用变量 <code>#</code>或<code>$</code></h2><pre><code>// 变量做属性名
#{$float}: left;

// 变量做属性值
float: $left;
</code></pre><h2 id="_3、选择器嵌套和属性嵌套" tabindex="-1"><a class="header-anchor" href="#_3、选择器嵌套和属性嵌套" aria-hidden="true">#</a> 3、选择器嵌套和属性嵌套</h2><pre><code>body{
    div{
        font:{
            weight:bold;
            size:23px;
        }
    }
}
</code></pre><h2 id="_4、父选择器" tabindex="-1"><a class="header-anchor" href="#_4、父选择器" aria-hidden="true">#</a> 4、父选择器 <code>&amp;</code></h2><pre><code>div{
    width:100px;
    height:100px
    &amp;:after{
        content:&#39;&#39;;
        background:red;
        width:200px;
        height:200px;
    }
    &amp;-child{
        // 编译后为 div-child
    }
}
</code></pre><h2 id="_5、定义重用代码块-mixin" tabindex="-1"><a class="header-anchor" href="#_5、定义重用代码块-mixin" aria-hidden="true">#</a> 5、定义重用代码块 <code>@mixin</code></h2><pre><code>// 居中显示
@mixin center($t, $b, $l, $r){
    position: absolute;
    margin: auto;
    top: rpx($t);
    bottom: rpx($b);
    left: rpx($l);
    right: rpx($r);
}

@include center(0, 0, 0, 0);
</code></pre><h2 id="_6、调用重用代码块-include" tabindex="-1"><a class="header-anchor" href="#_6、调用重用代码块-include" aria-hidden="true">#</a> 6、调用重用代码块 <code>@include</code></h2><pre><code>.box{
    @include bg_dom(&#39;../img.png&#39;,30%,40%)
}
</code></pre><h2 id="_7、选择器继承-extend" tabindex="-1"><a class="header-anchor" href="#_7、选择器继承-extend" aria-hidden="true">#</a> 7、选择器继承 <code>@extend</code></h2><pre><code>.father {
    border: 1px solid red;
    background-color: #fdd;
}
.son {
    @extend .father;
    border-width: 3px;
}
</code></pre><h2 id="_8、数据类型运算" tabindex="-1"><a class="header-anchor" href="#_8、数据类型运算" aria-hidden="true">#</a> 8、数据类型运算</h2><pre><code>所有: == , !=
数字: +, -, *, /, %, &lt;, &gt;, &lt;=, &gt;=
字符: + #{}
颜色: +, *
布尔: and, or, not
空值:
数组:
maps:
</code></pre><h2 id="_9、内置函数" tabindex="-1"><a class="header-anchor" href="#_9、内置函数" aria-hidden="true">#</a> 9、内置函数</h2><pre><code>image-width()                   获取图片的宽度
image-height()                  获取图片的高度
unit()                          获取一个值所使用的单位
lighten(red,10%)                使颜色变淡
darken(red,20%)                 使颜色变深
inline_image(&#39;../img.png&#39;)      将图片转换成base64格式
...
</code></pre><h3 id="_1-字符串函数" tabindex="-1"><a class="header-anchor" href="#_1-字符串函数" aria-hidden="true">#</a> (1)字符串函数</h3><pre><code>unquote($string)                            ：删除字符串中的引号；
quote($string)                              ：给字符串添加引号；
str-length($string)                         : 返回字符串长度；
str-insert($string, $insert, $index)        : 在$string中的第$insert中插入字符串$insert；
str-index($string, $substring)              : 查找字符串$substring并返回其下标；
str-slice($string, $start-at, [$end-at])    : 截取字符串（开始位置、结束位置）；
to-upper-case($string)                      : 转为大写字母；
to-lower-case($string)                      : 转为小写字母。
</code></pre><h3 id="_2-数字函数" tabindex="-1"><a class="header-anchor" href="#_2-数字函数" aria-hidden="true">#</a> (2)数字函数</h3><pre><code>percentage($value)                          ：将一个不带单位的数转换成百分比值；
round($value)                               ：将数值四舍五入，转换成一个最接近的整数；
ceil($value)                                ：将大于自己的小数转换成下一位整数；
floor($value)                               ：将一个数去除他的小数部分；
abs($value)                                 ：返回一个数的绝对值；
min($numbers…)                              ：找出几个数值之间的最小值；
max($numbers…)                              ：找出几个数值之间的最大值；
random()                                    ：生成一个随机数。
</code></pre><h3 id="_3-list函数" tabindex="-1"><a class="header-anchor" href="#_3-list函数" aria-hidden="true">#</a> (3)list函数</h3><pre><code>length($list)                               ：返回一个列表的长度值；
nth($list, $n)                              ：返回一个列表中指定的某个标签值
join($list1, $list2, [$separator])          ：将两个列给连接在一起，变成一个列表；
append($list1, $val, [$separator])          ：将某个值放在列表的最后；
zip($lists…)                                ：将几个列表结合成一个多维的列表；
index($list, $value)                        ：返回一个值在列表中的位置值；
list-separator($list)                       : 是否有分隔符；
is-bracketed($list)                         : 是否有方括号[]。
</code></pre><h3 id="_4-map函数" tabindex="-1"><a class="header-anchor" href="#_4-map函数" aria-hidden="true">#</a> (4)map函数</h3><pre><code>map-get($map,$key)                          ：根据$key返回对应的map值；
map-merge($map1,$map2)                      ：合并map1和map2；
map-remove($map,$key)                       ：返回删除$key值后的新map；
map-keys($map)                              ：返回map中的所有key；
map-values($map)                            ：返回map中的所有value；
map-has-key($map,$key)                      ：map中是否有改key；
keywords($args)                             ： Returns the keywords passed to a function that takes variable arguments.
</code></pre><h3 id="_5-introspection函数" tabindex="-1"><a class="header-anchor" href="#_5-introspection函数" aria-hidden="true">#</a> (5)Introspection函数</h3><pre><code>feature-exists($feature)                    ：某属性是否在当前sass中；
variable-exists($name)                      ：某变量是否在当前sass中；
global-variable-exists($name)               ：某变量是否在全局环境中；
function-exists($name)                      ：某函数是否存在；
mixin-exists($name)                         ：某mixin是否存在；
content-exists()                            ：当前的mixin是否通过了一个内容块；
type-of($value)                             ：返回一个值的类型；
unit($number)                               ：返回一个值的单位；
unitless($number)                           ：判断一个值是否有带位；
comparable($number-1, $number-2)            ：判断两个值是否可以做加、减和合并；
call($function, $args…)                     ：动态绑定get-function返回的函数；
get-function($name, $css: false)            ：查找给定名称的函数；
inspect($value)                             : Returns the string representation of a value as it would be represented in Sass.
</code></pre><h3 id="_6-颜色函数" tabindex="-1"><a class="header-anchor" href="#_6-颜色函数" aria-hidden="true">#</a> (6)颜色函数</h3><pre><code>rgb($red, $green, $blue)                    ：创建颜色；
rgba($red, $green, $blue, $alpha)           ：创建颜色包含透明度；
red($color)                                 ：获取颜色中的红色分量；
green()                                     ：获取颜色中的绿色分量；
blue()                                      ：获取颜色中的蓝色分量；
Mix()                                       ：将两种颜色混合在一起。

&lt;!-- 其他三种较复杂参数 --&gt;
adjust-color($color, [$red], [$green], [$blue], [$hue], [$saturation], [$lightness], [$alpha])
scale-color($color, [$red], [$green], [$blue], [$saturation], [$lightness], [$alpha])
change-color($color, [$red], [$green], [$blue], [$hue], [$saturation], [$lightness], [$alpha])
</code></pre><h3 id="_7-透明函数" tabindex="-1"><a class="header-anchor" href="#_7-透明函数" aria-hidden="true">#</a> (7)透明函数</h3><pre><code>alpha($color)                               ：获得颜色的透明度；
rgba($color, $alpha)                        ：设置颜色的透明度；
opacify($color, $amout)                     ：使颜色变得不透明；
fade-out($color, $amount)                   ：使颜色更透明；
transparent($color, $amount)                ：使颜色更透明；
</code></pre><h3 id="_8-hsl函数" tabindex="-1"><a class="header-anchor" href="#_8-hsl函数" aria-hidden="true">#</a> (8)HSL函数</h3><pre><code>hsl($hue, $saturation, $lightness)          ：从色调、饱和度、亮度创建一个颜色；
hsla($hue, $saturation, $lightness, $alpha) ：从色调、饱和度、亮度、透明度创建一个颜色；
hue($color)                                 ：获取颜色的hue值;
saturation($color)                          ：获取颜色的饱和度值；
lightness($color)                           ：获取颜色的亮度；
adjust-hue($color, $degrees)                ：改变颜色的色调；
lighten($color, $amount)                    ：使颜色变亮；
darken($color, $amount)                     ：使颜色变暗；
saturate($color, $amount)                   ：增加饱和度；
desaturate($color, $amount)                 ：减小饱和度；
grayscale()                                 ：将颜色转成灰度；
complement($color)                          ：返回颜色的互补色；
invert($color, [$weight])                   ：范湖颜色的对立色
</code></pre><h3 id="_9-选择器函数" tabindex="-1"><a class="header-anchor" href="#_9-选择器函数" aria-hidden="true">#</a> (9)选择器函数</h3><pre><code>selector-nest($selectors…)                  ：将选择器嵌套在另一个下面；
selector-append($selectors…)                ：追加选择器(无空格)；
selector-extend($selector, $extendee, $extender)        ：在 $selector中用$extender继承$extendee；
selector-replace($selector, $original, $replacement)    ：在$selector中用$replacement替换$original；
selector-unify($selector1, $selector2)      ：统一选择器；
is-superselector($super, $sub)              ：$super是否匹配所有的$sub；
simple-selectors($selector)                 ：返回包含复合选择器的简单选择器；
selector-parse($selector)                   ：将选择器解析为＆返回的格式。
</code></pre><h3 id="_10-其他" tabindex="-1"><a class="header-anchor" href="#_10-其他" aria-hidden="true">#</a> (10)其他</h3><pre><code>if($condition, $if-true, $if-false)         ：根据条件$condition返回true和false；
unique-id()                                 ：返回css唯一标识。
</code></pre><h2 id="_10、自定义函数" tabindex="-1"><a class="header-anchor" href="#_10、自定义函数" aria-hidden="true">#</a> 10、自定义函数</h2><pre><code>//项目中用到的计算rem值得函数
@function func($t) {
    @if (unit($t)==1) {
        @return $t*10;
    } @else if (unit($t)==2) {
        @return $t*100;
    } @else {
        @return $t;
    }
}

&lt;!-- 使用 --&gt;
width: func(1);
</code></pre><h2 id="_11、控制指令" tabindex="-1"><a class="header-anchor" href="#_11、控制指令" aria-hidden="true">#</a> 11、控制指令</h2><h3 id="_1-控制指令-——-if-else" tabindex="-1"><a class="header-anchor" href="#_1-控制指令-——-if-else" aria-hidden="true">#</a> (1)控制指令 —— @if @else</h3><pre><code>$type: y;
@if $type == x{
    color: red
}
@else if $type == y{
    color: yellow
}
@else{
    color: green
}
</code></pre><h3 id="_2-控制指令-——-for" tabindex="-1"><a class="header-anchor" href="#_2-控制指令-——-for" aria-hidden="true">#</a> (2)控制指令 —— @for</h3><pre><code>// through : [1,3]
@for $i from 1 through 3 {
    .item-#{$i} { 
        width: 2em * $i; 
    }
}

// to : [1,3)
@for $i from 1 through 3 {
    .item-#{$i} { 
        width: 2em * $i; 
    }
}
</code></pre><h3 id="_3-控制指令-——-each" tabindex="-1"><a class="header-anchor" href="#_3-控制指令-——-each" aria-hidden="true">#</a> (3)控制指令 —— @each</h3><pre><code>&lt;!-- 应用一：数组 --&gt;
@each $animal in puma, sea-slug, egret, salamander {
    .#{$animal}-icon {
        background-image: url(&#39;/images/#{$animal}.png&#39;);
    }
}

&lt;!-- 应用二：多个数组 --&gt;
@each $animal, $color, $cursor in (name1, black, default),
                                  (name2, blue,  pointer),
                                  (name3, white, move) {
    .#{$animal}-icon {
        background-image: url(&#39;/images/#{$animal}.png&#39;);
        border: 2px solid $color;
        cursor: $cursor;
    }
}

&lt;!-- 应用三：对象 --&gt;
@each $header, $size in (h1: 2em, h2: 1.5em, h3: 1.2em) {
    #{$header} {
        font-size: $size;
    }
}
</code></pre><h3 id="_4-控制指令-——-while" tabindex="-1"><a class="header-anchor" href="#_4-控制指令-——-while" aria-hidden="true">#</a> (4)控制指令 —— @while</h3><pre><code>$i: 6;
@while $i &gt; 0 {
    .item-#{$i} { width: 2em * $i; }
    $i: $i - 2;
}
</code></pre><h2 id="_12、规则" tabindex="-1"><a class="header-anchor" href="#_12、规则" aria-hidden="true">#</a> 12、规则</h2><p>@import @media @extend @at-root 跳出嵌套 @debug @warn @error</p><h2 id="_13、导入-scss-文件" tabindex="-1"><a class="header-anchor" href="#_13、导入-scss-文件" aria-hidden="true">#</a> 13、导入 .scss 文件</h2><pre><code>&lt;!-- 导入并编译 --&gt;
@import &quot;base.scss&quot;, &quot;header.scss&quot;;

&lt;!-- 导入但不编译 --&gt;
@import &quot;_base.scss&quot;, &quot;_header.scss&quot;;

&lt;!-- 嵌套到样式内 --&gt;
#main {
    @import &quot;example.scss&quot;;
}
</code></pre><h2 id="_14、四种输出格式" tabindex="-1"><a class="header-anchor" href="#_14、四种输出格式" aria-hidden="true">#</a> 14、四种输出格式</h2><pre><code>:nested      嵌套
:expanded    选择器不缩进
:compact     每条CSS规则占一行
:compressed  压缩
</code></pre>`,58),s=[i];function d(o,c){return n(),a("div",null,s)}const l=e(t,[["render",d],["__file","01-JS基础.html.vue"]]);export{l as default};

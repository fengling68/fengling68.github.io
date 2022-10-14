import{_ as e,o as n,c as a,f as r}from"./app.c7bbfe59.js";const t={},i=r(`<h1 id="js\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#js\u57FA\u7840" aria-hidden="true">#</a> JS\u57FA\u7840</h1><h2 id="_0\u3001sass\u548Cscss\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_0\u3001sass\u548Cscss\u533A\u522B" aria-hidden="true">#</a> 0\u3001sass\u548Cscss\u533A\u522B</h2><pre><code>sass\u4E0D\u5141\u8BB8\u51FA\u73B0 {} \uFF0C scss\u53EF\u4EE5\u50CFcss\u4E00\u6837\u4F7F\u7528 {}

//sass\u4E66\u5199\u65B9\u5F0F
body
    font-size: 12px
    background: #000
//scss\u4E66\u5199\u65B9\u5F0F
body{
    font-size: 12px;
    background: #000;
}
</code></pre><h2 id="_1\u3001\u5B9A\u4E49\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u5B9A\u4E49\u53D8\u91CF" aria-hidden="true">#</a> 1\u3001\u5B9A\u4E49\u53D8\u91CF <code>$</code></h2><pre><code>$float: left;
</code></pre><h2 id="_2\u3001\u4F7F\u7528\u53D8\u91CF-\u6216" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u4F7F\u7528\u53D8\u91CF-\u6216" aria-hidden="true">#</a> 2\u3001\u4F7F\u7528\u53D8\u91CF <code>#</code>\u6216<code>$</code></h2><pre><code>// \u53D8\u91CF\u505A\u5C5E\u6027\u540D
#{$float}: left;

// \u53D8\u91CF\u505A\u5C5E\u6027\u503C
float: $left;
</code></pre><h2 id="_3\u3001\u9009\u62E9\u5668\u5D4C\u5957\u548C\u5C5E\u6027\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u9009\u62E9\u5668\u5D4C\u5957\u548C\u5C5E\u6027\u5D4C\u5957" aria-hidden="true">#</a> 3\u3001\u9009\u62E9\u5668\u5D4C\u5957\u548C\u5C5E\u6027\u5D4C\u5957</h2><pre><code>body{
    div{
        font:{
            weight:bold;
            size:23px;
        }
    }
}
</code></pre><h2 id="_4\u3001\u7236\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u7236\u9009\u62E9\u5668" aria-hidden="true">#</a> 4\u3001\u7236\u9009\u62E9\u5668 <code>&amp;</code></h2><pre><code>div{
    width:100px;
    height:100px
    &amp;:after{
        content:&#39;&#39;;
        background:red;
        width:200px;
        height:200px;
    }
    &amp;-child{
        // \u7F16\u8BD1\u540E\u4E3A div-child
    }
}
</code></pre><h2 id="_5\u3001\u5B9A\u4E49\u91CD\u7528\u4EE3\u7801\u5757-mixin" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u5B9A\u4E49\u91CD\u7528\u4EE3\u7801\u5757-mixin" aria-hidden="true">#</a> 5\u3001\u5B9A\u4E49\u91CD\u7528\u4EE3\u7801\u5757 <code>@mixin</code></h2><pre><code>// \u5C45\u4E2D\u663E\u793A
@mixin center($t, $b, $l, $r){
    position: absolute;
    margin: auto;
    top: rpx($t);
    bottom: rpx($b);
    left: rpx($l);
    right: rpx($r);
}

@include center(0, 0, 0, 0);
</code></pre><h2 id="_6\u3001\u8C03\u7528\u91CD\u7528\u4EE3\u7801\u5757-include" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u8C03\u7528\u91CD\u7528\u4EE3\u7801\u5757-include" aria-hidden="true">#</a> 6\u3001\u8C03\u7528\u91CD\u7528\u4EE3\u7801\u5757 <code>@include</code></h2><pre><code>.box{
    @include bg_dom(&#39;../img.png&#39;,30%,40%)
}
</code></pre><h2 id="_7\u3001\u9009\u62E9\u5668\u7EE7\u627F-extend" tabindex="-1"><a class="header-anchor" href="#_7\u3001\u9009\u62E9\u5668\u7EE7\u627F-extend" aria-hidden="true">#</a> 7\u3001\u9009\u62E9\u5668\u7EE7\u627F <code>@extend</code></h2><pre><code>.father {
    border: 1px solid red;
    background-color: #fdd;
}
.son {
    @extend .father;
    border-width: 3px;
}
</code></pre><h2 id="_8\u3001\u6570\u636E\u7C7B\u578B\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#_8\u3001\u6570\u636E\u7C7B\u578B\u8FD0\u7B97" aria-hidden="true">#</a> 8\u3001\u6570\u636E\u7C7B\u578B\u8FD0\u7B97</h2><pre><code>\u6240\u6709: == , !=
\u6570\u5B57: +, -, *, /, %, &lt;, &gt;, &lt;=, &gt;=
\u5B57\u7B26: + #{}
\u989C\u8272: +, *
\u5E03\u5C14: and, or, not
\u7A7A\u503C:
\u6570\u7EC4:
maps:
</code></pre><h2 id="_9\u3001\u5185\u7F6E\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_9\u3001\u5185\u7F6E\u51FD\u6570" aria-hidden="true">#</a> 9\u3001\u5185\u7F6E\u51FD\u6570</h2><pre><code>image-width()                   \u83B7\u53D6\u56FE\u7247\u7684\u5BBD\u5EA6
image-height()                  \u83B7\u53D6\u56FE\u7247\u7684\u9AD8\u5EA6
unit()                          \u83B7\u53D6\u4E00\u4E2A\u503C\u6240\u4F7F\u7528\u7684\u5355\u4F4D
lighten(red,10%)                \u4F7F\u989C\u8272\u53D8\u6DE1
darken(red,20%)                 \u4F7F\u989C\u8272\u53D8\u6DF1
inline_image(&#39;../img.png&#39;)      \u5C06\u56FE\u7247\u8F6C\u6362\u6210base64\u683C\u5F0F
...
</code></pre><h3 id="_1-\u5B57\u7B26\u4E32\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_1-\u5B57\u7B26\u4E32\u51FD\u6570" aria-hidden="true">#</a> (1)\u5B57\u7B26\u4E32\u51FD\u6570</h3><pre><code>unquote($string)                            \uFF1A\u5220\u9664\u5B57\u7B26\u4E32\u4E2D\u7684\u5F15\u53F7\uFF1B
quote($string)                              \uFF1A\u7ED9\u5B57\u7B26\u4E32\u6DFB\u52A0\u5F15\u53F7\uFF1B
str-length($string)                         : \u8FD4\u56DE\u5B57\u7B26\u4E32\u957F\u5EA6\uFF1B
str-insert($string, $insert, $index)        : \u5728$string\u4E2D\u7684\u7B2C$insert\u4E2D\u63D2\u5165\u5B57\u7B26\u4E32$insert\uFF1B
str-index($string, $substring)              : \u67E5\u627E\u5B57\u7B26\u4E32$substring\u5E76\u8FD4\u56DE\u5176\u4E0B\u6807\uFF1B
str-slice($string, $start-at, [$end-at])    : \u622A\u53D6\u5B57\u7B26\u4E32\uFF08\u5F00\u59CB\u4F4D\u7F6E\u3001\u7ED3\u675F\u4F4D\u7F6E\uFF09\uFF1B
to-upper-case($string)                      : \u8F6C\u4E3A\u5927\u5199\u5B57\u6BCD\uFF1B
to-lower-case($string)                      : \u8F6C\u4E3A\u5C0F\u5199\u5B57\u6BCD\u3002
</code></pre><h3 id="_2-\u6570\u5B57\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_2-\u6570\u5B57\u51FD\u6570" aria-hidden="true">#</a> (2)\u6570\u5B57\u51FD\u6570</h3><pre><code>percentage($value)                          \uFF1A\u5C06\u4E00\u4E2A\u4E0D\u5E26\u5355\u4F4D\u7684\u6570\u8F6C\u6362\u6210\u767E\u5206\u6BD4\u503C\uFF1B
round($value)                               \uFF1A\u5C06\u6570\u503C\u56DB\u820D\u4E94\u5165\uFF0C\u8F6C\u6362\u6210\u4E00\u4E2A\u6700\u63A5\u8FD1\u7684\u6574\u6570\uFF1B
ceil($value)                                \uFF1A\u5C06\u5927\u4E8E\u81EA\u5DF1\u7684\u5C0F\u6570\u8F6C\u6362\u6210\u4E0B\u4E00\u4F4D\u6574\u6570\uFF1B
floor($value)                               \uFF1A\u5C06\u4E00\u4E2A\u6570\u53BB\u9664\u4ED6\u7684\u5C0F\u6570\u90E8\u5206\uFF1B
abs($value)                                 \uFF1A\u8FD4\u56DE\u4E00\u4E2A\u6570\u7684\u7EDD\u5BF9\u503C\uFF1B
min($numbers\u2026)                              \uFF1A\u627E\u51FA\u51E0\u4E2A\u6570\u503C\u4E4B\u95F4\u7684\u6700\u5C0F\u503C\uFF1B
max($numbers\u2026)                              \uFF1A\u627E\u51FA\u51E0\u4E2A\u6570\u503C\u4E4B\u95F4\u7684\u6700\u5927\u503C\uFF1B
random()                                    \uFF1A\u751F\u6210\u4E00\u4E2A\u968F\u673A\u6570\u3002
</code></pre><h3 id="_3-list\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_3-list\u51FD\u6570" aria-hidden="true">#</a> (3)list\u51FD\u6570</h3><pre><code>length($list)                               \uFF1A\u8FD4\u56DE\u4E00\u4E2A\u5217\u8868\u7684\u957F\u5EA6\u503C\uFF1B
nth($list, $n)                              \uFF1A\u8FD4\u56DE\u4E00\u4E2A\u5217\u8868\u4E2D\u6307\u5B9A\u7684\u67D0\u4E2A\u6807\u7B7E\u503C
join($list1, $list2, [$separator])          \uFF1A\u5C06\u4E24\u4E2A\u5217\u7ED9\u8FDE\u63A5\u5728\u4E00\u8D77\uFF0C\u53D8\u6210\u4E00\u4E2A\u5217\u8868\uFF1B
append($list1, $val, [$separator])          \uFF1A\u5C06\u67D0\u4E2A\u503C\u653E\u5728\u5217\u8868\u7684\u6700\u540E\uFF1B
zip($lists\u2026)                                \uFF1A\u5C06\u51E0\u4E2A\u5217\u8868\u7ED3\u5408\u6210\u4E00\u4E2A\u591A\u7EF4\u7684\u5217\u8868\uFF1B
index($list, $value)                        \uFF1A\u8FD4\u56DE\u4E00\u4E2A\u503C\u5728\u5217\u8868\u4E2D\u7684\u4F4D\u7F6E\u503C\uFF1B
list-separator($list)                       : \u662F\u5426\u6709\u5206\u9694\u7B26\uFF1B
is-bracketed($list)                         : \u662F\u5426\u6709\u65B9\u62EC\u53F7[]\u3002
</code></pre><h3 id="_4-map\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_4-map\u51FD\u6570" aria-hidden="true">#</a> (4)map\u51FD\u6570</h3><pre><code>map-get($map,$key)                          \uFF1A\u6839\u636E$key\u8FD4\u56DE\u5BF9\u5E94\u7684map\u503C\uFF1B
map-merge($map1,$map2)                      \uFF1A\u5408\u5E76map1\u548Cmap2\uFF1B
map-remove($map,$key)                       \uFF1A\u8FD4\u56DE\u5220\u9664$key\u503C\u540E\u7684\u65B0map\uFF1B
map-keys($map)                              \uFF1A\u8FD4\u56DEmap\u4E2D\u7684\u6240\u6709key\uFF1B
map-values($map)                            \uFF1A\u8FD4\u56DEmap\u4E2D\u7684\u6240\u6709value\uFF1B
map-has-key($map,$key)                      \uFF1Amap\u4E2D\u662F\u5426\u6709\u6539key\uFF1B
keywords($args)                             \uFF1A Returns the keywords passed to a function that takes variable arguments.
</code></pre><h3 id="_5-introspection\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_5-introspection\u51FD\u6570" aria-hidden="true">#</a> (5)Introspection\u51FD\u6570</h3><pre><code>feature-exists($feature)                    \uFF1A\u67D0\u5C5E\u6027\u662F\u5426\u5728\u5F53\u524Dsass\u4E2D\uFF1B
variable-exists($name)                      \uFF1A\u67D0\u53D8\u91CF\u662F\u5426\u5728\u5F53\u524Dsass\u4E2D\uFF1B
global-variable-exists($name)               \uFF1A\u67D0\u53D8\u91CF\u662F\u5426\u5728\u5168\u5C40\u73AF\u5883\u4E2D\uFF1B
function-exists($name)                      \uFF1A\u67D0\u51FD\u6570\u662F\u5426\u5B58\u5728\uFF1B
mixin-exists($name)                         \uFF1A\u67D0mixin\u662F\u5426\u5B58\u5728\uFF1B
content-exists()                            \uFF1A\u5F53\u524D\u7684mixin\u662F\u5426\u901A\u8FC7\u4E86\u4E00\u4E2A\u5185\u5BB9\u5757\uFF1B
type-of($value)                             \uFF1A\u8FD4\u56DE\u4E00\u4E2A\u503C\u7684\u7C7B\u578B\uFF1B
unit($number)                               \uFF1A\u8FD4\u56DE\u4E00\u4E2A\u503C\u7684\u5355\u4F4D\uFF1B
unitless($number)                           \uFF1A\u5224\u65AD\u4E00\u4E2A\u503C\u662F\u5426\u6709\u5E26\u4F4D\uFF1B
comparable($number-1, $number-2)            \uFF1A\u5224\u65AD\u4E24\u4E2A\u503C\u662F\u5426\u53EF\u4EE5\u505A\u52A0\u3001\u51CF\u548C\u5408\u5E76\uFF1B
call($function, $args\u2026)                     \uFF1A\u52A8\u6001\u7ED1\u5B9Aget-function\u8FD4\u56DE\u7684\u51FD\u6570\uFF1B
get-function($name, $css: false)            \uFF1A\u67E5\u627E\u7ED9\u5B9A\u540D\u79F0\u7684\u51FD\u6570\uFF1B
inspect($value)                             : Returns the string representation of a value as it would be represented in Sass.
</code></pre><h3 id="_6-\u989C\u8272\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_6-\u989C\u8272\u51FD\u6570" aria-hidden="true">#</a> (6)\u989C\u8272\u51FD\u6570</h3><pre><code>rgb($red, $green, $blue)                    \uFF1A\u521B\u5EFA\u989C\u8272\uFF1B
rgba($red, $green, $blue, $alpha)           \uFF1A\u521B\u5EFA\u989C\u8272\u5305\u542B\u900F\u660E\u5EA6\uFF1B
red($color)                                 \uFF1A\u83B7\u53D6\u989C\u8272\u4E2D\u7684\u7EA2\u8272\u5206\u91CF\uFF1B
green()                                     \uFF1A\u83B7\u53D6\u989C\u8272\u4E2D\u7684\u7EFF\u8272\u5206\u91CF\uFF1B
blue()                                      \uFF1A\u83B7\u53D6\u989C\u8272\u4E2D\u7684\u84DD\u8272\u5206\u91CF\uFF1B
Mix()                                       \uFF1A\u5C06\u4E24\u79CD\u989C\u8272\u6DF7\u5408\u5728\u4E00\u8D77\u3002

&lt;!-- \u5176\u4ED6\u4E09\u79CD\u8F83\u590D\u6742\u53C2\u6570 --&gt;
adjust-color($color, [$red], [$green], [$blue], [$hue], [$saturation], [$lightness], [$alpha])
scale-color($color, [$red], [$green], [$blue], [$saturation], [$lightness], [$alpha])
change-color($color, [$red], [$green], [$blue], [$hue], [$saturation], [$lightness], [$alpha])
</code></pre><h3 id="_7-\u900F\u660E\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_7-\u900F\u660E\u51FD\u6570" aria-hidden="true">#</a> (7)\u900F\u660E\u51FD\u6570</h3><pre><code>alpha($color)                               \uFF1A\u83B7\u5F97\u989C\u8272\u7684\u900F\u660E\u5EA6\uFF1B
rgba($color, $alpha)                        \uFF1A\u8BBE\u7F6E\u989C\u8272\u7684\u900F\u660E\u5EA6\uFF1B
opacify($color, $amout)                     \uFF1A\u4F7F\u989C\u8272\u53D8\u5F97\u4E0D\u900F\u660E\uFF1B
fade-out($color, $amount)                   \uFF1A\u4F7F\u989C\u8272\u66F4\u900F\u660E\uFF1B
transparent($color, $amount)                \uFF1A\u4F7F\u989C\u8272\u66F4\u900F\u660E\uFF1B
</code></pre><h3 id="_8-hsl\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_8-hsl\u51FD\u6570" aria-hidden="true">#</a> (8)HSL\u51FD\u6570</h3><pre><code>hsl($hue, $saturation, $lightness)          \uFF1A\u4ECE\u8272\u8C03\u3001\u9971\u548C\u5EA6\u3001\u4EAE\u5EA6\u521B\u5EFA\u4E00\u4E2A\u989C\u8272\uFF1B
hsla($hue, $saturation, $lightness, $alpha) \uFF1A\u4ECE\u8272\u8C03\u3001\u9971\u548C\u5EA6\u3001\u4EAE\u5EA6\u3001\u900F\u660E\u5EA6\u521B\u5EFA\u4E00\u4E2A\u989C\u8272\uFF1B
hue($color)                                 \uFF1A\u83B7\u53D6\u989C\u8272\u7684hue\u503C;
saturation($color)                          \uFF1A\u83B7\u53D6\u989C\u8272\u7684\u9971\u548C\u5EA6\u503C\uFF1B
lightness($color)                           \uFF1A\u83B7\u53D6\u989C\u8272\u7684\u4EAE\u5EA6\uFF1B
adjust-hue($color, $degrees)                \uFF1A\u6539\u53D8\u989C\u8272\u7684\u8272\u8C03\uFF1B
lighten($color, $amount)                    \uFF1A\u4F7F\u989C\u8272\u53D8\u4EAE\uFF1B
darken($color, $amount)                     \uFF1A\u4F7F\u989C\u8272\u53D8\u6697\uFF1B
saturate($color, $amount)                   \uFF1A\u589E\u52A0\u9971\u548C\u5EA6\uFF1B
desaturate($color, $amount)                 \uFF1A\u51CF\u5C0F\u9971\u548C\u5EA6\uFF1B
grayscale()                                 \uFF1A\u5C06\u989C\u8272\u8F6C\u6210\u7070\u5EA6\uFF1B
complement($color)                          \uFF1A\u8FD4\u56DE\u989C\u8272\u7684\u4E92\u8865\u8272\uFF1B
invert($color, [$weight])                   \uFF1A\u8303\u6E56\u989C\u8272\u7684\u5BF9\u7ACB\u8272
</code></pre><h3 id="_9-\u9009\u62E9\u5668\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_9-\u9009\u62E9\u5668\u51FD\u6570" aria-hidden="true">#</a> (9)\u9009\u62E9\u5668\u51FD\u6570</h3><pre><code>selector-nest($selectors\u2026)                  \uFF1A\u5C06\u9009\u62E9\u5668\u5D4C\u5957\u5728\u53E6\u4E00\u4E2A\u4E0B\u9762\uFF1B
selector-append($selectors\u2026)                \uFF1A\u8FFD\u52A0\u9009\u62E9\u5668(\u65E0\u7A7A\u683C)\uFF1B
selector-extend($selector, $extendee, $extender)        \uFF1A\u5728 $selector\u4E2D\u7528$extender\u7EE7\u627F$extendee\uFF1B
selector-replace($selector, $original, $replacement)    \uFF1A\u5728$selector\u4E2D\u7528$replacement\u66FF\u6362$original\uFF1B
selector-unify($selector1, $selector2)      \uFF1A\u7EDF\u4E00\u9009\u62E9\u5668\uFF1B
is-superselector($super, $sub)              \uFF1A$super\u662F\u5426\u5339\u914D\u6240\u6709\u7684$sub\uFF1B
simple-selectors($selector)                 \uFF1A\u8FD4\u56DE\u5305\u542B\u590D\u5408\u9009\u62E9\u5668\u7684\u7B80\u5355\u9009\u62E9\u5668\uFF1B
selector-parse($selector)                   \uFF1A\u5C06\u9009\u62E9\u5668\u89E3\u6790\u4E3A\uFF06\u8FD4\u56DE\u7684\u683C\u5F0F\u3002
</code></pre><h3 id="_10-\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#_10-\u5176\u4ED6" aria-hidden="true">#</a> (10)\u5176\u4ED6</h3><pre><code>if($condition, $if-true, $if-false)         \uFF1A\u6839\u636E\u6761\u4EF6$condition\u8FD4\u56DEtrue\u548Cfalse\uFF1B
unique-id()                                 \uFF1A\u8FD4\u56DEcss\u552F\u4E00\u6807\u8BC6\u3002
</code></pre><h2 id="_10\u3001\u81EA\u5B9A\u4E49\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_10\u3001\u81EA\u5B9A\u4E49\u51FD\u6570" aria-hidden="true">#</a> 10\u3001\u81EA\u5B9A\u4E49\u51FD\u6570</h2><pre><code>//\u9879\u76EE\u4E2D\u7528\u5230\u7684\u8BA1\u7B97rem\u503C\u5F97\u51FD\u6570
@function func($t) {
    @if (unit($t)==1) {
        @return $t*10;
    } @else if (unit($t)==2) {
        @return $t*100;
    } @else {
        @return $t;
    }
}

&lt;!-- \u4F7F\u7528 --&gt;
width: func(1);
</code></pre><h2 id="_11\u3001\u63A7\u5236\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#_11\u3001\u63A7\u5236\u6307\u4EE4" aria-hidden="true">#</a> 11\u3001\u63A7\u5236\u6307\u4EE4</h2><h3 id="_1-\u63A7\u5236\u6307\u4EE4-\u2014\u2014-if-else" tabindex="-1"><a class="header-anchor" href="#_1-\u63A7\u5236\u6307\u4EE4-\u2014\u2014-if-else" aria-hidden="true">#</a> (1)\u63A7\u5236\u6307\u4EE4 \u2014\u2014 @if @else</h3><pre><code>$type: y;
@if $type == x{
    color: red
}
@else if $type == y{
    color: yellow
}
@else{
    color: green
}
</code></pre><h3 id="_2-\u63A7\u5236\u6307\u4EE4-\u2014\u2014-for" tabindex="-1"><a class="header-anchor" href="#_2-\u63A7\u5236\u6307\u4EE4-\u2014\u2014-for" aria-hidden="true">#</a> (2)\u63A7\u5236\u6307\u4EE4 \u2014\u2014 @for</h3><pre><code>// through : [1,3]
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
</code></pre><h3 id="_3-\u63A7\u5236\u6307\u4EE4-\u2014\u2014-each" tabindex="-1"><a class="header-anchor" href="#_3-\u63A7\u5236\u6307\u4EE4-\u2014\u2014-each" aria-hidden="true">#</a> (3)\u63A7\u5236\u6307\u4EE4 \u2014\u2014 @each</h3><pre><code>&lt;!-- \u5E94\u7528\u4E00\uFF1A\u6570\u7EC4 --&gt;
@each $animal in puma, sea-slug, egret, salamander {
    .#{$animal}-icon {
        background-image: url(&#39;/images/#{$animal}.png&#39;);
    }
}

&lt;!-- \u5E94\u7528\u4E8C\uFF1A\u591A\u4E2A\u6570\u7EC4 --&gt;
@each $animal, $color, $cursor in (name1, black, default),
                                  (name2, blue,  pointer),
                                  (name3, white, move) {
    .#{$animal}-icon {
        background-image: url(&#39;/images/#{$animal}.png&#39;);
        border: 2px solid $color;
        cursor: $cursor;
    }
}

&lt;!-- \u5E94\u7528\u4E09\uFF1A\u5BF9\u8C61 --&gt;
@each $header, $size in (h1: 2em, h2: 1.5em, h3: 1.2em) {
    #{$header} {
        font-size: $size;
    }
}
</code></pre><h3 id="_4-\u63A7\u5236\u6307\u4EE4-\u2014\u2014-while" tabindex="-1"><a class="header-anchor" href="#_4-\u63A7\u5236\u6307\u4EE4-\u2014\u2014-while" aria-hidden="true">#</a> (4)\u63A7\u5236\u6307\u4EE4 \u2014\u2014 @while</h3><pre><code>$i: 6;
@while $i &gt; 0 {
    .item-#{$i} { width: 2em * $i; }
    $i: $i - 2;
}
</code></pre><h2 id="_12\u3001\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_12\u3001\u89C4\u5219" aria-hidden="true">#</a> 12\u3001\u89C4\u5219</h2><p>@import @media @extend @at-root \u8DF3\u51FA\u5D4C\u5957 @debug @warn @error</p><h2 id="_13\u3001\u5BFC\u5165-scss-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_13\u3001\u5BFC\u5165-scss-\u6587\u4EF6" aria-hidden="true">#</a> 13\u3001\u5BFC\u5165 .scss \u6587\u4EF6</h2><pre><code>&lt;!-- \u5BFC\u5165\u5E76\u7F16\u8BD1 --&gt;
@import &quot;base.scss&quot;, &quot;header.scss&quot;;

&lt;!-- \u5BFC\u5165\u4F46\u4E0D\u7F16\u8BD1 --&gt;
@import &quot;_base.scss&quot;, &quot;_header.scss&quot;;

&lt;!-- \u5D4C\u5957\u5230\u6837\u5F0F\u5185 --&gt;
#main {
    @import &quot;example.scss&quot;;
}
</code></pre><h2 id="_14\u3001\u56DB\u79CD\u8F93\u51FA\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#_14\u3001\u56DB\u79CD\u8F93\u51FA\u683C\u5F0F" aria-hidden="true">#</a> 14\u3001\u56DB\u79CD\u8F93\u51FA\u683C\u5F0F</h2><pre><code>:nested      \u5D4C\u5957
:expanded    \u9009\u62E9\u5668\u4E0D\u7F29\u8FDB
:compact     \u6BCF\u6761CSS\u89C4\u5219\u5360\u4E00\u884C
:compressed  \u538B\u7F29
</code></pre>`,58),s=[i];function d(o,c){return n(),a("div",null,s)}const l=e(t,[["render",d],["__file","01-JS\u57FA\u7840.html.vue"]]);export{l as default};

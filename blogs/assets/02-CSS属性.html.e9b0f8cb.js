import{_ as e,o as r,c as d,f as o}from"./app.3ec7dd2c.js";const n={},a=o(`<h1 id="css\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#css\u5C5E\u6027" aria-hidden="true">#</a> CSS\u5C5E\u6027</h1><h2 id="\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#\u989C\u8272" aria-hidden="true">#</a> \u989C\u8272</h2><pre><code>rgb\u989C\u8272(red,green,blue)  rgb(0,0,0)\u9ED1\u8272    rgb(255,255,255)\u767D\u8272
hex\u5341\u516D\u8FDB\u5236\u989C\u8272    #e4393c \u4EAC\u4E1C\u7EA2
\u786E\u5207\u7684\u82F1\u6587\u540D      red    green
rgba(x,x,x,0~1)\u5E26\u900F\u660E\u5EA6\uFF1A\u6570\u8D8A\u5C0F\uFF0C\u8D8A\u900F\u660E
</code></pre><h2 id="\u5C3A\u5BF8" tabindex="-1"><a class="header-anchor" href="#\u5C3A\u5BF8" aria-hidden="true">#</a> \u5C3A\u5BF8</h2><pre><code>\u5355\u4F4D:px\u50CF\u7D20   %\u767E\u5206\u6BD4  cm\u5398\u7C73  mm\u6BEB\u7C73  pt\u68D2  em(1em\u7B49\u4E8E\u5F53\u524D\u5B57\u4F53\u989C\u8272)
width    min-width     max-width
height   min-height    max-height

\u5185\u5BB9\u6EA2\u51FA overflow:    overflow-x:    overflow-y:
visible\uFF1A\u6EA2\u51FA\u53EF\u89C1(\u9ED8\u8BA4\u503C\uFF0C\u5185\u5BB9\u4E0D\u4F1A\u4FEE\u526A\uFF0C\u4F1A\u663E\u73B0\u5728\u5143\u7D20\u6846\u4E4B\u5916)
hidden\uFF1A\u6EA2\u51FA\u9690\u85CF(\u5185\u5BB9\u4F1A\u88AB\u4FEE\u526A\uFF0C\u8D85\u51FA\u5185\u5BB9\u4E0D\u53EF\u89C1)
scroll\uFF1A\u8BBE\u7F6E\u6EDA\u52A8\u6761(\u5185\u5BB9\u4F1A\u88AB\u4FEE\u526A\uFF0C\u6D4F\u89C8\u5668\u4F1A\u663E\u793A\u6EDA\u52A8\u4EE5\u4FBF\u67E5\u770B\u5176\u4F59\u5185\u5BB9)
auto\uFF1A\u81EA\u52A8(\u5982\u679C\u88AB\u4FEE\u526A\uFF0C\u6D4F\u89C8\u5668\u4F1A\u663E\u793A\u6EDA\u52A8\u4EE5\u4FBF\u67E5\u770B\u5176\u4F59\u5185\u5BB9)
</code></pre><blockquote><p>\u6CE8\u610F\uFF1A\u5757\u7EA7\u5143\u7D20\u5141\u8BB8\u4FEE\u6539\u5BBD\u5EA6\u548C\u9AD8\u5EA6\uFF0C\u884C\u5185\u5143\u7D20\u4E0D\u80FD\u4FEE\u6539\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u3002<img>\u7279\u6B8A\uFF0C\u884C\u5185\u5FEB\u5141\u8BB8\u6539\u53D8\u5BBD\u9AD8\u3002</p></blockquote><h2 id="\u8FB9\u6846" tabindex="-1"><a class="header-anchor" href="#\u8FB9\u6846" aria-hidden="true">#</a> \u8FB9\u6846</h2><p>1\u3001\u56DB\u8FB9</p><pre><code>border:style width color;    \u7528\u7A7A\u683C\u9694\u5F00\uFF0C\u53EF\u4E0D\u8BBE\u7F6E\u5176\u4E2D\u7684\u67D0\u4E9B\u3002
style:dotted(\u70B9\u7EBF) solid(\u5B9E\u7EBF) dashed(\u865A\u7EBF) double(\u53CC\u7EBF)
</code></pre><p>2\u3001\u5355\u72EC\u6307\u5B9A\u8FB9\u6846\u5C5E\u6027\uFF0C\u5355\u8FB9</p><pre><code>border-style:
border-width:
border-color:red green pink purple;
border-left-color:
border-right-style:
</code></pre><h2 id="\u8FB9\u6846\u5012\u89D2" tabindex="-1"><a class="header-anchor" href="#\u8FB9\u6846\u5012\u89D2" aria-hidden="true">#</a> \u8FB9\u6846\u5012\u89D2</h2><pre><code>border-radius:10px;
border-radius:10px 20px 30px 40;

border-top-left-radius:30px;     \u5DE6\u4E0A\u89D2
border-top-right-radius:30px;    \u53F3\u4E0A\u89D2
border-bottom-left-radius:30px;  \u53F3\u4E0B\u89D2
border-bottom-left-radius:30px;  \u5DE6\u4E0B\u89D2

\u5706 border-radius:50%\uFF1B
</code></pre><p>\u5012\u4E09\u89D2\uFF1A</p><pre><code>div{
    width:0;
    height:0;
    border-width:50px;
    border-style:solid;
    border-color:red transparent transparent transparent;
}                             &lt;!--  \u900F\u660E --&gt;
</code></pre><h2 id="\u8FB9\u6846\u9634\u5F71" tabindex="-1"><a class="header-anchor" href="#\u8FB9\u6846\u9634\u5F71" aria-hidden="true">#</a> \u8FB9\u6846\u9634\u5F71</h2><pre><code>\u5C5E\u6027\uFF1Abox-shadow\uFF1Ah-shadow v-shadow blur spread color inset
h-shadow \u6C34\u5E73\u9634\u5F71\u4F4D\u7F6E   \u6B63\u76F4\u5411\u53F3\uFF0C\u8D1F\u503C\u5411\u5DE6
v-shadow \u5782\u76F4\u9634\u5F71\u4F4D\u7F6E   \u6B63\u76F4\u5411\u4E0B\uFF0C\u8D1F\u503C\u5411\u4E0A
blur     \u53EF\u9009\uFF0C\u6A21\u7CCA\u8DDD\u79BB
spread   \u53EF\u9009\uFF0C\u9634\u5F71\u5C3A\u5BF8
color    \u53EF\u9009\uFF0C\u9634\u5F71\u989C\u8272
inset    \u53EF\u9009\u503C\uFF0C\u5C06\u5916\u90E8\u9634\u5F71\u6539\u4E3A\u5185\u90E8\u9634\u5F71
</code></pre><blockquote><p>\u6CE8\u610F\uFF1A1\u3001\u503C\u8981\u6309\u987A\u5E8F\u4E66\u5199 2\u3001\u9634\u5F71\u9ED8\u8BA4\u9ED1\u8272 3\u3001\u7528\u5185\u9634\u5F71\u76F4\u63A5\u52A0inset</p></blockquote><h2 id="\u56FE\u7247\u8FB9\u6846" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u8FB9\u6846" aria-hidden="true">#</a> \u56FE\u7247\u8FB9\u6846</h2><pre><code>\u5C5E\u6027\uFF1Aborder-image\u5C06\u56FE\u7247\u89C4\u5B9A\u4E3A\u5305\u56F4div\u5143\u7D20\u7684\u8FB9\u6846
\u503C\uFF1Aborder-image-source      \u56FE\u7247\u8DEF\u5F84
border-image-slice:26;   \u56FE\u7247\u8FB9\u6846\u5411\u5185\u79FB\u690D   &lt;!-- \u5207\u5272\u56FE\u7247,\u4E0D\u5E26\u5355\u4F4D --&gt;
border-image-width   \u56FE\u7247\u8FB9\u6846\u5BBD\u5EA6
border-image-outset  \u8FB9\u6846\u56FE\u50CF\u533A\u57DF\u8D85\u51FA\u8FB9\u6846\u7684\u91CF\uFF08\u5411\u5916\u5EF6\u4F38\u591A\u5927\uFF09
border-image-repeat  \u8FB9\u6846\u7684\u5E73\u94FA\u65B9\u5F0F\uFF08repeat\uFF1A\u5E73\u94FA\uFF1Bround\uFF1A\u94FA\u6EE1\uFF1Bstretch:\u62C9\u4F38\uFF09

\u7B80\u5199\uFF1Aborder-image:url(images/xx.png) 26 repeat;
</code></pre><h2 id="\u8F6E\u5ED3" tabindex="-1"><a class="header-anchor" href="#\u8F6E\u5ED3" aria-hidden="true">#</a> \u8F6E\u5ED3</h2><p>\u4E0Eborder\u503C\u76F8\u4F3C,\u4F46\u4E0D\u4E0E\u8FB9\u6846\u540C\u7528\u3002 \u7ED8\u5236\u4E8E\u5143\u7D20\u5468\u56F4\u7684\u4E00\u6761\u7EBF\uFF0C\u4F4D\u4E8E\u8FB9\u6846\u8FB9\u7F18\u7684\u5916\u56F4\uFF0C\u53EF\u4EE5\u8D77\u5230\u7A81\u51FA\u5143\u7D20\u7684\u4F5C\u7528\u3002</p><pre><code>\u7B80\u5199\uFF1Aoutline:width style color;
\u5168\u5199\uFF1Aoutline-width   outline-style    outline-color
\u7ECF\u5E38\u5728\u83B7\u53D6\u7126\u70B9\uFF08focus\u6216hover\uFF09\u65F6\u4F7F\u7528\u3002
</code></pre><blockquote><p>\u6CE8\u610F\uFF1Aoutline\uFF1Anone\uFF1B\u53EF\u4EE5\u53BB\u6389input\u9ED8\u8BA4\u8FB9\u6846</p></blockquote>`,24),t=[a];function i(h,c){return r(),d("div",null,t)}const l=e(n,[["render",i],["__file","02-CSS\u5C5E\u6027.html.vue"]]);export{l as default};

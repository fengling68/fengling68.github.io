import{_ as e,o as r,c as a,f as n}from"./app.897ce968.js";const t={},d=n(`<h1 id="_2d\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#_2d\u52A8\u753B" aria-hidden="true">#</a> 2D\u52A8\u753B</h1><pre><code>\u8F6C\u6362\u662F\u4F7F\u5143\u7D20\u6539\u53D8\u5F62\u72B6\u3001\u5C3A\u5BF8\u548C\u4F4D\u7F6E\u7684\u4E00\u79CD\u6548\u679C\u3002
\u79FB\u52A8\u3001\u7F29\u653E\u3001\u65CB\u8F6C\u3001\u62C9\u4F38\u503E\u659C
</code></pre><h2 id="\u8F6C\u6362\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u8F6C\u6362\u5C5E\u6027" aria-hidden="true">#</a> \u8F6C\u6362\u5C5E\u6027</h2><pre><code>transform: none;
none           \u4E0D\u8F6C\u6362\uFF0C\u9ED8\u8BA4\u503C
translate()    \u4F4D\u79FB
rotate()       \u65CB\u8F6C
scale()        \u7F29\u653E
skew()         \u503E\u659C
</code></pre><h2 id="\u8F6C\u6362\u539F\u70B9" tabindex="-1"><a class="header-anchor" href="#\u8F6C\u6362\u539F\u70B9" aria-hidden="true">#</a> \u8F6C\u6362\u539F\u70B9</h2><pre><code>transform-origin:0px 0px ;     \u6570\u503C
transform-origin:50% 50% ;     \u767E\u5206\u6BD4
transform-origin:right top ;   \u5173\u952E\u5B57
\u4E00\u4E2A\u503C\uFF1AX\u8F74
\u4E24\u4E2A\u503C\uFF1AX\u8F74 Y\u8F74
\u4E09\u4E2A\u503C\uFF1AX\u8F74 Y\u8F74 Z\u8F74
</code></pre><h2 id="_2d\u8F6C\u6362\u2014\u2014\u4F4D\u79FBtranslate" tabindex="-1"><a class="header-anchor" href="#_2d\u8F6C\u6362\u2014\u2014\u4F4D\u79FBtranslate" aria-hidden="true">#</a> 2D\u8F6C\u6362\u2014\u2014\u4F4D\u79FBtranslate</h2><pre><code>transform:translate(x);    \u4E00\u4E2A\u503CX\u8F74\u7684\u79FB\u52A8
transform:translate(x,y);  \u4E24\u4E2A\u503CY\u8F74\u7684\u79FB\u52A8

transform:transformX(50px); \u53EA\u5728X\u8F74\u79FB\u52A8
transform:transformY(50px); \u53EA\u5728Y\u8F74\u79FB\u52A8
</code></pre><h2 id="_2d\u8F6C\u6362\u2014\u2014\u7F29\u653Escale" tabindex="-1"><a class="header-anchor" href="#_2d\u8F6C\u6362\u2014\u2014\u7F29\u653Escale" aria-hidden="true">#</a> 2D\u8F6C\u6362\u2014\u2014\u7F29\u653Escale</h2><pre><code>transform:scale(0.5);    \u4E00\u4E2A\u503C\u6C34\u5E73\u5782\u76F4\u65B9\u5411\u90FD\u7F29\u653E\u76F8\u540C\u6BD4\u4F8B
transform:scale(1.5,1.5);      \u7F29\u653E\u6BD4\u4F8B\u5206\u522B\u4E3Ax,y

transform:scaleX(0.5);       \u6A2A\u5411\u7F29\u653E
transform:scaleY(1.5);       \u7EB5\u5411\u7F29\u653E

\u7F29\u5C0F   0~1\u4E4B\u95F4
\u9ED8\u8BA4\u503C 1
\u653E\u5927   &gt;1
</code></pre><h2 id="_2d\u8F6C\u6362\u2014\u2014\u65CB\u8F6Crotate" tabindex="-1"><a class="header-anchor" href="#_2d\u8F6C\u6362\u2014\u2014\u65CB\u8F6Crotate" aria-hidden="true">#</a> 2D\u8F6C\u6362\u2014\u2014\u65CB\u8F6Crotate</h2><pre><code>transform:rotate(45deg);   \u6B63\uFF1A\u987A\u65F6\u9488   \u8D1F\uFF1A\u9006\u65F6\u9488
</code></pre><h2 id="_2d\u8F6C\u6362\u2014\u2014\u503E\u659Cskew" tabindex="-1"><a class="header-anchor" href="#_2d\u8F6C\u6362\u2014\u2014\u503E\u659Cskew" aria-hidden="true">#</a> 2D\u8F6C\u6362\u2014\u2014\u503E\u659Cskew()</h2><pre><code>transform:skewX(40deg);      \u6C34\u5E73\u65B9\u5411\u503E\u659C
transform:skewY(40deg);      \u5782\u76F4\u65B9\u5411\u503E\u659C
transform:skewY(40deg,40deg);
</code></pre>`,14),s=[d];function o(c,h){return r(),a("div",null,s)}const f=e(t,[["render",o],["__file","12-2D\u52A8\u753B.html.vue"]]);export{f as default};

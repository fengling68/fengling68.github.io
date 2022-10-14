import{_ as e,o as r,c as n,f as o}from"./app.29c262e3.js";const a={},t=o(`<h1 id="\u5B57\u7B26\u4E32\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u65B9\u6CD5" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u65B9\u6CD5</h1><h2 id="\u5B57\u7B26\u4E32\u7684\u521B\u5EFA\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u7684\u521B\u5EFA\u65B9\u5F0F" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u7684\u521B\u5EFA\u65B9\u5F0F</h2><p>1\u3001\u5B57\u9762\u91CF\u65B9\u5F0F</p><pre><code>var str1 = &quot;123abc&quot;;
console.log(str1);          //123456
console.log(str1.length);   //\u7ED3\u679C\u4E3A6
console.log(typeof str1);   //\u6570\u636E\u7C7B\u578B\uFF1Astring
</code></pre><p>2\u3001\u9AD8\u7EA7\u65B9\u5F0F</p><pre><code>var str2 = new String(&#39;456&#39;);
console.log(str2);          //String{0:&quot;4&quot; , 1:&quot;5&quot; , 2:&quot;6&quot; , length:6 , ...}
console.log(str2.length);   //\u7ED3\u679C\u4E3A3 
console.log(typeof str2);   //\u6570\u636E\u7C7B\u578B\uFF1Aobject
</code></pre><p><strong>\u5C0F\u5199\u5B57\u6BCD\u548C\u5927\u5199\u5B57\u6BCDASCII\u7801 a:97 A:65</strong></p><h2 id="charat-index" tabindex="-1"><a class="header-anchor" href="#charat-index" aria-hidden="true">#</a> charAt(index)</h2><pre><code>1\u3001\u68C0\u7D22\u6307\u5B9A\u4F4D\u7F6E\u4E0A\u7684\u5B57\u7B26
2\u3001\u8FD4\u56DE\u503C\uFF1A\u5BF9\u5E94\u4F4D\u7F6E\u4E0A\u7684\u5B57\u7B26 ; \u67E5\u627E\u4E0D\u5230\uFF1A\u7ED3\u679C\u4E3A\u7A7A

var str = &quot;123,abc&quot;;
console.log(str.charAt(1));    //\u7ED3\u679C2
console.log(str.charAt(10));   //\u7ED3\u679C\u7A7A

\u9010\u4E00\u8F93\u51FA\u6BCF\u4E2A\u5B57\u7B26
for(var i = 0 ; i &lt; str.length ; i++){
    console.log( str.charAt(i) );      //1  2  3  ,  4  5  6
}
</code></pre><h2 id="charcodeat" tabindex="-1"><a class="header-anchor" href="#charcodeat" aria-hidden="true">#</a> charCodeAt()</h2><pre><code>1\u3001\u68C0\u7D22\u6307\u5B9A\u4F4D\u7F6E\u4E0A\u5B57\u7B26\u7684ASCII\u7F16\u7801
2\u3001\u8FD4\u56DE\u503C\uFF1A\u5BF9\u5E94\u5B57\u7B26\u7684ASCII\u7F16\u7801

var str = &quot;123,abc&quot;;
console.log(str.charCodeAt(4));          //\u4E0B\u68074\u5BF9\u5E94\u7684\u5B57\u7B26a\u7ED3\u679C\uFF1A97
</code></pre><h2 id="string-fromcharcode" tabindex="-1"><a class="header-anchor" href="#string-fromcharcode" aria-hidden="true">#</a> String.fromCharCode()</h2><pre><code>1\u3001\u901A\u8FC7ASCII\u7F16\u7801\u627E\u5230\u5BF9\u5E94\u5B57\u7B26
2\u3001\u8FD4\u56DE\u503C\uFF1A\u67E5\u627E\u5230\u7684\u5B57\u7B26
console.log(String.fromCharCode(97));     //\u7ED3\u679C97\u5BF9\u5E94\u7684\u5B57\u7B26a
</code></pre><h2 id="indexof" tabindex="-1"><a class="header-anchor" href="#indexof" aria-hidden="true">#</a> indexOf()</h2><pre><code>1\u3001\u4ECE\u524D\u5411\u540E\u67E5\u627E\u6307\u5B9A\u5B57\u7B26\u7684\u4E0B\u6807
2\u3001\u8FD4\u56DE\u503C\uFF1A\u627E\u5230\u8FD4\u56DE\u4E0B\u6807 ; \u627E\u4E0D\u5230\u8FD4\u56DE -1\u3002
3\u3001\u53C2\u65701\uFF1A\u67E5\u627E\u7684\u6307\u5B9A\u5B57\u7B26   \u53C2\u65702\uFF1A\u5F00\u59CB\u67E5\u627E\u7684\u4F4D\u7F6E(\u5305\u542B)

var str2 = &#39;123,456,abc&#39;;
console.log(str2.indexOf(&quot;3&quot;));           //\u7ED3\u679C\uFF1A\u4E0B\u68072
console.log(str2.indexOf(&quot;3&quot;,3));         //\u7ED3\u679C\uFF1A-1
</code></pre><h2 id="lastindexof" tabindex="-1"><a class="header-anchor" href="#lastindexof" aria-hidden="true">#</a> lastIndexOf()</h2><pre><code>1\u3001\u4ECE\u540E\u5411\u524D\u67E5\u627E\u6307\u5B9A\u5B57\u7B26\u4E0B\u6807(\u7D22\u5F15\u662F\u56FA\u5B9A\u7684)
2\u3001\u53C2\u65701\uFF1A\u67E5\u627E\u7684\u6307\u5B9A\u5B57\u7B26   \u53C2\u65702\uFF1A\u5F00\u59CB\u67E5\u627E\u7684\u4F4D\u7F6E(\u5305\u542B)
3\u3001\u8FD4\u56DE\u503C\uFF1A\u627E\u5230\u8FD4\u56DE\u4E0B\u6807 ; \u627E\u4E0D\u5230\u8FD4\u56DE -1\u3002

var str2 = &#39;123,456,abc&#39;;
console.log(str2.indexOf(&quot;3&quot;));           //\u7ED3\u679C\uFF1A\u4E0B\u68072
console.log(str2.indexOf(&quot;3&quot;,3));         //\u7ED3\u679C\uFF1A-1
</code></pre><h2 id="replace" tabindex="-1"><a class="header-anchor" href="#replace" aria-hidden="true">#</a> replace()</h2><pre><code>1\u3001\u66FF\u6362\u5B57\u7B26
2\u3001\u53C2\u6570\u4E00\uFF1A\u88AB\u66FF\u6362\u7684\u65E7\u5B57\u7B26  \u53C2\u6570\u4E8C\uFF1A\u66FF\u6362\u540E\u7684\u65B0\u5B57\u7B26
3\u3001\u8FD4\u56DE\u503C\uFF1A\u66FF\u6362\u540E\u7684\u65B0\u5B57\u7B26\u4E32

var str = &quot;abcdef&quot;;
console.log(str.replace(&#39;a&#39; , &#39;A&#39;));      //\u7ED3\u679C  Abcdef
console.log(str);                         //\u7ED3\u679C  abcdef
</code></pre><h2 id="touppercase" tabindex="-1"><a class="header-anchor" href="#touppercase" aria-hidden="true">#</a> toUpperCase()</h2><pre><code>1\u3001\u628A\u5C0F\u5199\u82F1\u6587\u8F6C\u6362\u6210\u5927\u5199\u82F1\u6587
2\u3001\u8FD4\u56DE\u503C\uFF1A\u8F6C\u6362\u4E4B\u540E\u7684\u65B0\u5B57\u7B26\u4E32
3\u3001\u539F\u5B57\u7B26\u4E32\u672A\u53D1\u751F\u6539\u53D8

var str = &#39;abcdef&#39;;
console.log(str.toUpperCase());           //\u7ED3\u679C  ABCDEF
console.log(str);                         //\u7ED3\u679C  abcdef

var s = str.charAt(5);
console.log(s.toUpperCase());             //\u7ED3\u679C  F
</code></pre><h2 id="tolowercase" tabindex="-1"><a class="header-anchor" href="#tolowercase" aria-hidden="true">#</a> toLowerCase()</h2><pre><code>1\u3001\u628A\u5927\u5199\u82F1\u6587\u8F6C\u6362\u6210\u5C0F\u5199\u82F1\u6587
2\u3001\u8FD4\u56DE\u503C\uFF1A\u8F6C\u6362\u4E4B\u540E\u7684\u65B0\u5B57\u7B26\u4E32
3\u3001\u539F\u5B57\u7B26\u4E32\u672A\u53D1\u751F\u6539\u53D8

var str = &#39;ABCDEF&#39;;
console.log(str.toLowerCase());           //\u7ED3\u679C  abcdef
console.log(str);                         //\u7ED3\u679C  ABCDEF
</code></pre><h2 id="trim-ie\u4E0D\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#trim-ie\u4E0D\u652F\u6301" aria-hidden="true">#</a> trim() IE\u4E0D\u652F\u6301</h2><pre><code>1\u3001\u53BB\u9664\u524D\u540E\u7A7A\u683C
2\u3001\u8FD4\u56DE\u503C\uFF1A\u53BB\u9664\u7A7A\u683C\u540E\u7684\u65B0\u5B57\u7B26\u4E32
3\u3001\u539F\u5B57\u7B26\u4E32\u672A\u53D1\u751F\u53D8\u5316

var str = &#39; abc &#39;;                        //5\u4E2A\u5B57\u7B26
console.log(str.length);
console.log(str.trim());                  //abc
console.log(str);                         //abc
</code></pre><h2 id="split" tabindex="-1"><a class="header-anchor" href="#split" aria-hidden="true">#</a> split()</h2><pre><code>1\u3001\u628A\u5B57\u7B26\u4E32\u8F6C\u6210\u6570\u7EC4
2\u3001\u53C2\u6570\uFF1A\u5206\u9694\u7B26\uFF08\u5B57\u7B26\u4E32\u4E2D\u7684\u67D0\u4E00\u5B57\u7B26\u6216\u591A\u4E2A\u5B57\u7B26\uFF09
3\u3001\u539F\u5B57\u7B26\u4E32\u672A\u53D1\u751F\u6539\u53D8

var str = &quot;I#am#Mr#TianMr&quot;;
console.log(str.split(&quot;#&quot;));       //\u7ED3\u679C[&quot;I&quot; , &quot;am&quot;  , &quot;Mr&quot;  , &quot;Tian&quot;]
console.log(str);                  //\u7ED3\u679C I#am#Mr#TianMr
console.log(str.split(&quot;Mr&quot;));      //\u7ED3\u679C[&quot;I#am#&quot; , &quot;#Tian&quot; , &quot;&quot;]
</code></pre><h2 id="substr" tabindex="-1"><a class="header-anchor" href="#substr" aria-hidden="true">#</a> substr()</h2><pre><code>1\u3001\u622A\u53D6\u5B57\u7B26\u4E32
2\u3001\u53EA\u6709\u53C2\u6570\u4E00\uFF1A\u4ECE\u5F00\u59CB\u622A\u53D6\u5230\u6700\u540E
    \u53C2\u6570\u4E00\uFF1A\u5F00\u59CB\u622A\u53D6\u7684\u4F4D\u7F6E(\u5305\u542B)
    \u53C2\u6570\u4E8C\uFF1A\u622A\u53D6\u7684\u4E2A\u6570(\u957F\u5EA6)
3\u3001\u8FD4\u56DE\u503C\uFF1A\u622A\u53D6\u7684\u65B0\u5B57\u7B26\u4E32

var str = &#39;123abcdef&#39;;
console.log(str.substr(2));        //\u7ED3\u679C\uFF1A3abcdef
console.log(str.substr(2,4));      //\u7ED3\u679C\uFF1A3abc
console.log(str);                  //\u7ED3\u679C\uFF1A123abcdef
</code></pre><h2 id="substring-slice" tabindex="-1"><a class="header-anchor" href="#substring-slice" aria-hidden="true">#</a> substring() ---slice</h2><pre><code>1\u3001\u622A\u53D6\u5B57\u7B26\u4E32
2\u3001\u53EA\u6709\u53C2\u6570\u4E00\uFF1A\u4ECE\u5F00\u59CB\u622A\u53D6\u5230\u6700\u540E
    \u53C2\u6570\u4E00\uFF1A\u5F00\u59CB\u622A\u53D6\u7684\u4F4D\u7F6E(\u5305\u542B)
    \u53C2\u6570\u4E8C\uFF1A\u7ED3\u675F\u7684\u4F4D\u7F6E(\u4E0D\u5305\u542B)
3\u3001\u8FD4\u56DE\u503C\uFF1A\u622A\u53D6\u7684\u65B0\u5B57\u7B26\u4E32

var str = &#39;123abcdef&#39;;
console.log(str.substring(2));     //\u7ED3\u679C\uFF1A3abcdef
console.log(str.substring(2,4));   //\u7ED3\u679C\uFF1A3a
console.log(str);                  //\u7ED3\u679C\uFF1A123abcdef
</code></pre><h2 id="\u6C47\u603B" tabindex="-1"><a class="header-anchor" href="#\u6C47\u603B" aria-hidden="true">#</a> \u6C47\u603B</h2><pre><code>charAt(i);              \u6307\u5B9A\u4F4D\u7F6E\u5B57\u7B26
charCodeAt();           \u6307\u5B9A\u4F4D\u7F6E\u5B57\u7B26\u7684ASCII\u7F16\u7801
String.fromCharCode();  \u901A\u8FC7ASCII\u7F16\u7801\u627E\u5230\u5BF9\u5E94\u5B57\u7B26
indexOf();              \u4ECE\u524D\u5411\u540E\u67E5\u627E\u6307\u5B9A\u5B57\u7B26\u7684\u4E0B\u6807
lastIndexOf();          \u4ECE\u540E\u5411\u524D\u67E5\u627E\u6307\u5B9A\u5B57\u7B26\u7684\u4E0B\u6807
replace();              \u66FF\u6362\u5B57\u7B26
toUpperCase();          \u5C0F\u5199\u8F6C\u5927\u5199
toLowerCase();          \u5927\u5199\u8F6C\u5C0F\u5199
trim();                 \u53BB\u9664\u524D\u540E\u7A7A\u683C
split();                \u5B57\u7B26\u4E32\u8F6C\u6570\u7EC4
substr();               \u622A\u53D6\u5B57\u7B26\u4E32\uFF1A\u53C2\u65702\uFF0C\u622A\u53D6\u4E2A\u6570
substring();            \u622A\u53D6\u5B57\u7B26\u4E32\uFF1A\u53C2\u65702\uFF0C\u7ED3\u675F\u4F4D\u7F6E
</code></pre>`,33),s=[t];function c(d,i){return r(),n("div",null,s)}const l=e(a,[["render",c],["__file","06-\u5B57\u7B26\u4E32\u65B9\u6CD5.html.vue"]]);export{l as default};

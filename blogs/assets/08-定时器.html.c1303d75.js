import{_ as e,o as t,c as n,f as a}from"./app.61734918.js";const r={},o=a(`<h1 id="\u5B9A\u65F6\u5668" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u65F6\u5668" aria-hidden="true">#</a> \u5B9A\u65F6\u5668</h1><h2 id="settimeout" tabindex="-1"><a class="header-anchor" href="#settimeout" aria-hidden="true">#</a> setTimeout()</h2><pre><code>setTimeout\u8BBE\u7F6E\u4E3A0\uFF0C\u4EE3\u8868\u7ACB\u5373\u63D2\u5165\u961F\u5217\uFF0C\u4F46\u4E0D\u662F\u7ACB\u5373\u6267\u884C\u3002setTimeout\u5E76\u4E0D\u80FD\u4FDD\u8BC1\u6267\u884C\u7684\u65F6\u95F4\uFF0C\u662F\u5426\u6267\u884C\u53D6\u51B3\u4E8EJavaScript\u7684\u7EBF\u7A0B\u662F\u62E5\u6324\u8FD8\u662F\u7A7A\u95F2\u3002

1\u3001\u5EF6\u8FDF\u4E00\u5B9A\u65F6\u95F4\uFF0C\u6267\u884C\u67D0\u4E2A\u51FD\u6570
2\u3001\u53C2\u65701\uFF1A\u533F\u540D\u51FD\u6570(\u51FD\u6570\u540D)
   \u53C2\u65702\uFF1A\u5EF6\u65F6\u65F6\u95F4\uFF1Ams    1s = 1000ms

//\u8868\u73B0\u5F62\u5F0F\u4E00
setTimeout(function(){
    console.log(789);
},5000);

//\u8868\u73B0\u5F62\u5F0F\u4E8C
setTimeout(fn,5000);
function fn(){
    console.log(789);
}
</code></pre><h2 id="cleartimeout" tabindex="-1"><a class="header-anchor" href="#cleartimeout" aria-hidden="true">#</a> clearTimeout()</h2><pre><code>\u5173\u95ED\u5B9A\u65F6\u5668 \u53C2\u6570\uFF1A\u5BF9\u5E94\u7684\u5B9A\u65F6\u5668\u540D\u79F0
</code></pre><h2 id="setinterval" tabindex="-1"><a class="header-anchor" href="#setinterval" aria-hidden="true">#</a> setInterval()</h2><pre><code>1\u3001\u6BCF\u9694\u4E00\u5B9A\u65F6\u95F4\uFF0C\u91CD\u590D\u6267\u884C\u67D0\u4E2A\u51FD\u6570
2\u3001\u53C2\u65701\uFF1A\u533F\u540D\u51FD\u6570(\u51FD\u6570\u540D)
   \u53C2\u65702\uFF1A\u95F4\u9694\u65F6\u95F4\uFF1Ams    1s = 1000ms

//\u4F7F\u7528\u65B9\u5F0F\u540CsetTimeout

var i = 0;
setInterval(function(){
    i++;
    document.write(&quot;&lt;p&gt;\u6211\u4ECA\u5E74&quot;+i+&quot;\u5C81\u4E86&lt;/p&gt;&quot;);
} , 1000);
</code></pre><h2 id="clearinterval" tabindex="-1"><a class="header-anchor" href="#clearinterval" aria-hidden="true">#</a> clearInterval()</h2><pre><code>\u5173\u95ED\u5B9A\u65F6\u5668 \u53C2\u6570\uFF1A\u5BF9\u5E94\u7684\u5B9A\u65F6\u5668\u540D\u79F0

var timer = setInterval(function(){},1000);
clearInterval(timer);
</code></pre>`,9),i=[o];function c(s,d){return t(),n("div",null,i)}const h=e(r,[["render",c],["__file","08-\u5B9A\u65F6\u5668.html.vue"]]);export{h as default};

import{_ as n,o,c as e,f as t}from"./app.c94871ea.js";const r={},a=t(`<h1 id="bom\u6D4F\u89C8\u5668\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#bom\u6D4F\u89C8\u5668\u6A21\u578B" aria-hidden="true">#</a> BOM\u6D4F\u89C8\u5668\u6A21\u578B</h1><h2 id="js\u4E09\u5927\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#js\u4E09\u5927\u6A21\u5757" aria-hidden="true">#</a> JS\u4E09\u5927\u6A21\u5757</h2><ul><li>ECMAScript\uFF1A\u53D8\u91CF\u3001\u8868\u8FBE\u5F0F\u3001\u8FD0\u7B97\u7B26\u3001\u9009\u62E9\u3001\u5FAA\u73AF\u3001\u51FD\u6570\u3001\u6570\u7EC4\u3001\u5B57\u7B26\u4E32\u3001Math\u3001Date</li><li>BOM\uFF1Abrowser object model \u6D4F\u89C8\u5668\u5BF9\u8C61\u6A21\u578B\u2014\u2014JS\u64CD\u4F5C\u6D4F\u89C8\u5668</li><li>DOM\uFF1A\u6587\u6863\u5BF9\u8C61\u6A21\u578B</li></ul><h2 id="js\u63A7\u5236\u6D4F\u89C8\u5668-window\u5BF9\u8C61-\u5DE5\u5177\u5305" tabindex="-1"><a class="header-anchor" href="#js\u63A7\u5236\u6D4F\u89C8\u5668-window\u5BF9\u8C61-\u5DE5\u5177\u5305" aria-hidden="true">#</a> JS\u63A7\u5236\u6D4F\u89C8\u5668 window\u5BF9\u8C61 \u5DE5\u5177\u5305</h2><pre><code>function fn(){}   fn();
\u5728\u5168\u5C40\u58F0\u660E\u7684\u51FD\u6570\uFF0C\u5C5E\u4E8Ewindow
</code></pre><h2 id="window\u5E38\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#window\u5E38\u7528\u65B9\u6CD5" aria-hidden="true">#</a> window\u5E38\u7528\u65B9\u6CD5</h2><pre><code>alert() confirm() prompt() setTimeout clearTimeout setInterval clearInterval

1\u3001open();
\u6253\u5F00\u65B0\u9875\u9762-\u7B80\u5355\u4F7F\u7528
window.open(&quot;url&quot;);

\u6253\u5F00\u65B0\u9875\u9762-\u590D\u6742\u4F7F\u7528
window.open(&quot;url&quot;,&quot;_blank&quot;,&quot;width=300,height=300px,left=100,top=100,fullscreen=no&quot;);
</code></pre><h2 id="location\u5BF9\u8C61\u5E38\u7528\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#location\u5BF9\u8C61\u5E38\u7528\u5C5E\u6027" aria-hidden="true">#</a> Location\u5BF9\u8C61\u5E38\u7528\u5C5E\u6027</h2><pre><code>window.location

1\u3001href \u8DEF\u5F84\u5BFC\u822A
window.location.href = &quot;02BOM-window.html&quot;;

2\u3001protocol \u534F\u8BAE\u540D\uFF08http:\uFF09
console.log(window.location.port);

3\u3001hostname \u4E3B\u673A\u540D

4\u3001port \u7AEF\u53E3

5\u3001host \u4E3B\u673A\uFF08\u4E3B\u673A\u540D+\u7AEF\u53E3\u53F7\uFF09

6\u3001origin \uFF08\u534F\u8BAE\u540D+\u4E3B\u673A\u540D+\u7AEF\u53E3\u53F7\uFF09

7\u3001search \uFF08?\u540E\u9762\u7684\u4F20\u503C\uFF09

8\u3001reload();\u5BF9\u5F53\u524D\u9875\u9762\u5237\u65B0
window.location.reload();
</code></pre><h2 id="history\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#history\u5BF9\u8C61" aria-hidden="true">#</a> history\u5BF9\u8C61</h2><pre><code>1\u3001window.history.back();
\u5386\u53F2\u8BB0\u5F55\u7684\u4E0A\u4E00\u9875

2\u3001window.history.forword();
\u5386\u53F2\u8BB0\u5F55\u7684\u4E0B\u4E00\u9875

3\u3001window.history.go(num);
&gt; 0 \u8DF3\u8F6C\u5230\u5F53\u524D\u9875\u9762\u4E4B\u540E\u7684\u7B2Cnum\u6761\u8BB0\u5F55
&lt; 0 \u8DF3\u8F6C\u5230\u5F53\u524D\u9875\u9762\u4E4B\u524D\u7684\u7B2Cnum\u6761\u8BB0\u5F55
</code></pre>`,11),i=[a];function d(h,c){return o(),e("div",null,i)}const s=n(r,[["render",d],["__file","10-BOM\u6D4F\u89C8\u5668\u6A21\u578B.html.vue"]]);export{s as default};

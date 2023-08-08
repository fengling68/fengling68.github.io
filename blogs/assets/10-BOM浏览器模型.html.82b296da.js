import{_ as n,o,c as e,f as t}from"./app.034b081e.js";const r={},a=t(`<h1 id="bom浏览器模型" tabindex="-1"><a class="header-anchor" href="#bom浏览器模型" aria-hidden="true">#</a> BOM浏览器模型</h1><h2 id="js三大模块" tabindex="-1"><a class="header-anchor" href="#js三大模块" aria-hidden="true">#</a> JS三大模块</h2><ul><li>ECMAScript：变量、表达式、运算符、选择、循环、函数、数组、字符串、Math、Date</li><li>BOM：browser object model 浏览器对象模型——JS操作浏览器</li><li>DOM：文档对象模型</li></ul><h2 id="js控制浏览器-window对象-工具包" tabindex="-1"><a class="header-anchor" href="#js控制浏览器-window对象-工具包" aria-hidden="true">#</a> JS控制浏览器 window对象 工具包</h2><pre><code>function fn(){}   fn();
在全局声明的函数，属于window
</code></pre><h2 id="window常用方法" tabindex="-1"><a class="header-anchor" href="#window常用方法" aria-hidden="true">#</a> window常用方法</h2><pre><code>alert() confirm() prompt() setTimeout clearTimeout setInterval clearInterval

1、open();
打开新页面-简单使用
window.open(&quot;url&quot;);

打开新页面-复杂使用
window.open(&quot;url&quot;,&quot;_blank&quot;,&quot;width=300,height=300px,left=100,top=100,fullscreen=no&quot;);
</code></pre><h2 id="location对象常用属性" tabindex="-1"><a class="header-anchor" href="#location对象常用属性" aria-hidden="true">#</a> Location对象常用属性</h2><pre><code>window.location

1、href 路径导航
window.location.href = &quot;02BOM-window.html&quot;;

2、protocol 协议名（http:）
console.log(window.location.port);

3、hostname 主机名

4、port 端口

5、host 主机（主机名+端口号）

6、origin （协议名+主机名+端口号）

7、search （?后面的传值）

8、reload();对当前页面刷新
window.location.reload();
</code></pre><h2 id="history对象" tabindex="-1"><a class="header-anchor" href="#history对象" aria-hidden="true">#</a> history对象</h2><pre><code>1、window.history.back();
历史记录的上一页

2、window.history.forword();
历史记录的下一页

3、window.history.go(num);
&gt; 0 跳转到当前页面之后的第num条记录
&lt; 0 跳转到当前页面之前的第num条记录
</code></pre>`,11),i=[a];function d(h,c){return o(),e("div",null,i)}const s=n(r,[["render",d],["__file","10-BOM浏览器模型.html.vue"]]);export{s as default};

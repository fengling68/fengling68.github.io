import{_ as e,o as t,c as n,f as a}from"./app.26d50059.js";const r={},o=a(`<h1 id="定时器" tabindex="-1"><a class="header-anchor" href="#定时器" aria-hidden="true">#</a> 定时器</h1><h2 id="settimeout" tabindex="-1"><a class="header-anchor" href="#settimeout" aria-hidden="true">#</a> setTimeout()</h2><pre><code>setTimeout设置为0，代表立即插入队列，但不是立即执行。setTimeout并不能保证执行的时间，是否执行取决于JavaScript的线程是拥挤还是空闲。

1、延迟一定时间，执行某个函数
2、参数1：匿名函数(函数名)
   参数2：延时时间：ms    1s = 1000ms

//表现形式一
setTimeout(function(){
    console.log(789);
},5000);

//表现形式二
setTimeout(fn,5000);
function fn(){
    console.log(789);
}
</code></pre><h2 id="cleartimeout" tabindex="-1"><a class="header-anchor" href="#cleartimeout" aria-hidden="true">#</a> clearTimeout()</h2><pre><code>关闭定时器 参数：对应的定时器名称
</code></pre><h2 id="setinterval" tabindex="-1"><a class="header-anchor" href="#setinterval" aria-hidden="true">#</a> setInterval()</h2><pre><code>1、每隔一定时间，重复执行某个函数
2、参数1：匿名函数(函数名)
   参数2：间隔时间：ms    1s = 1000ms

//使用方式同setTimeout

var i = 0;
setInterval(function(){
    i++;
    document.write(&quot;&lt;p&gt;我今年&quot;+i+&quot;岁了&lt;/p&gt;&quot;);
} , 1000);
</code></pre><h2 id="clearinterval" tabindex="-1"><a class="header-anchor" href="#clearinterval" aria-hidden="true">#</a> clearInterval()</h2><pre><code>关闭定时器 参数：对应的定时器名称

var timer = setInterval(function(){},1000);
clearInterval(timer);
</code></pre>`,9),i=[o];function c(s,d){return t(),n("div",null,i)}const h=e(r,[["render",c],["__file","08-定时器.html.vue"]]);export{h as default};

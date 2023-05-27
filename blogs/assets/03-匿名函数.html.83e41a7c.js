import{_ as n,o as e,c as a,f as o}from"./app.bb38b1d2.js";const r={},c=o(`<h1 id="匿名函数" tabindex="-1"><a class="header-anchor" href="#匿名函数" aria-hidden="true">#</a> 匿名函数</h1><h2 id="匿名函数-1" tabindex="-1"><a class="header-anchor" href="#匿名函数-1" aria-hidden="true">#</a> 匿名函数</h2><pre><code>引用数据类型(3种)：对象，数组，对象

匿名函数 又名，拉姆达函数
匿名函数应用场景：事件，定时器(参数)，对象(属性值), 函数中作为返回值
</code></pre><h2 id="创建方式" tabindex="-1"><a class="header-anchor" href="#创建方式" aria-hidden="true">#</a> 创建方式</h2><pre><code>1、匿名函数()表示执行
    (function(a,b){
        return a+b;
    });

2、变量接收执行
    var add = function(a,b){
        return a+b;
    };
    console.log(add(2,3));

3、自执行，自己创建并执行。在匿名函数后加()执行。
    var add = function(a,b){
        return a+b;
    }(2,3); 
</code></pre><h2 id="回调函数-callback" tabindex="-1"><a class="header-anchor" href="#回调函数-callback" aria-hidden="true">#</a> 回调函数 callback</h2><pre><code>一个主体函数中，有另一个函数作为参数。只有当主体函数达到某种条件后，才有可能会执行的函数-回调函数
</code></pre><h2 id="自执行函数" tabindex="-1"><a class="header-anchor" href="#自执行函数" aria-hidden="true">#</a> 自执行函数</h2><pre><code>自执行函数：自己就执行
框架 插件 应用比较多 jq
自执行函数书写之前，为了防止上面代码对该函数造成影响，习惯性会在自执行函数之前加分号，进行分隔

function fn () {
    console.log(123);
}
console.log(fn);

//自执行函数书写格式：
//第一种
var a = 10;
;(function(val) {
    console.log(&quot;我是&quot; + val);
})(&quot;自执行函数1&quot;);
//第二种方式
(function(val) {
    console.log(&quot;我是&quot; + val);
}(&quot;自执行函数2&quot;));

//第三种格式 标点符号 ! + -
!function(val) {
    console.log(&quot;我是&quot; + val);
}(&quot;自执行函数3&quot;);
+function(val) {
    console.log(&quot;我是&quot; + val);
}(&quot;自执行函数4&quot;);
</code></pre><h2 id="js的执行顺序" tabindex="-1"><a class="header-anchor" href="#js的执行顺序" aria-hidden="true">#</a> JS的执行顺序</h2><pre><code>1、预编译，将全局定义的函数和全局定义的变量提前。匿名函数不能提前，只是一个普通的语句。
2、JS从上到下逐行执行
3、在加载HTML和CSS时，只要碰到JS都要停止，先执行JS在执行其他的代码
    JS代码放在最后或者使用onload事件
    外部JS文件必须放在body的后面，避免由于网络问题阻塞html界面的显示。
</code></pre><h2 id="函数创建方式-补充" tabindex="-1"><a class="header-anchor" href="#函数创建方式-补充" aria-hidden="true">#</a> 函数创建方式(补充)</h2><pre><code>1、普通方式
2、匿名函数创建方式
3、原始方式，new的方式，底层常用
</code></pre>`,13),d=[c];function t(h,l){return e(),a("div",null,d)}const u=n(r,[["render",t],["__file","03-匿名函数.html.vue"]]);export{u as default};

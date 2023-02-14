import{_ as e,o as n,c as t,f as o}from"./app.b0016746.js";const c={},a=o(`<h1 id="js事件对象" tabindex="-1"><a class="header-anchor" href="#js事件对象" aria-hidden="true">#</a> JS事件对象</h1><h2 id="事件对象" tabindex="-1"><a class="header-anchor" href="#事件对象" aria-hidden="true">#</a> 事件对象</h2><pre><code>信息库：该事件的所有信息属性和方法，如鼠标位置或键盘键码
每个事件都有一个事件对象。
</code></pre><h2 id="如何获取事件对象" tabindex="-1"><a class="header-anchor" href="#如何获取事件对象" aria-hidden="true">#</a> 如何获取事件对象</h2><pre><code>1、W3C规范的浏览器：浏览器在处理事件时，会自动的将事件对象通过参数的方式，传递给事件处理函数。
    Btn.onclick = function(evt){}   evt:事件对象

2、IE8以下：将事件对象放在window.event

3、兼容性处理
    var e = evt || window.event;
    若event = undefined,那么返回window.event
    若evt存在，返回evt
</code></pre><h2 id="事件对象常用属性-client和screen常用-所有浏览器都支持" tabindex="-1"><a class="header-anchor" href="#事件对象常用属性-client和screen常用-所有浏览器都支持" aria-hidden="true">#</a> 事件对象常用属性(client和screen常用，所有浏览器都支持)</h2><pre><code>1、clientX: 触发点相对 可视窗口 的位置，不随页面滚动改变。
2、clientY: 触发点相对 可视窗口 的位置，不随页面滚动改变。
3、screenX：触发点相对 显示器 屏幕左上角距离，不随页面滚动改变。
4、screenY：触发点相对 显示器 屏幕左上角距离，不随页面滚动改变。
5、offsetX：触发点相对 事件元素 的X坐标，只有IE有
6、offsetY：触发点相对 事件元素 的Y坐标，只有IE有
7、pageX:   触发点相对 文档区域 左上角的距离，会随页面滚动改变。
8、pageY:   触发点相对 文档区域 左上角的距离，会随页面滚动改变。   可视区+滚动距离
9、keyCode：键盘键码
    window.onkeydown = function(evt){
        var event = evt || window.event;
        var keyCode = event.keyCode;
        console.log(&quot;键码是：&quot;+keyCode);
    };

10、which:  鼠标键码  (左键1  滚轮2  右键3)
    window.ommousedown = function(evt){
        var event = evt || window.event;
        console.log(event.which);  //获取鼠标的键码
    }
</code></pre>`,7),d=[a];function r(i,s){return n(),t("div",null,d)}const v=e(c,[["render",r],["__file","17-JS事件对象.html.vue"]]);export{v as default};

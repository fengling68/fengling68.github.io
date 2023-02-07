import{_ as e,o as n,c as a,f as r}from"./app.4112d7f2.js";const d={},o=r(`<h1 id="js事件" tabindex="-1"><a class="header-anchor" href="#js事件" aria-hidden="true">#</a> JS事件</h1><h2 id="什么是事件" tabindex="-1"><a class="header-anchor" href="#什么是事件" aria-hidden="true">#</a> 什么是事件</h2><pre><code>用户或浏览器执行的某个动作
1、主要用于监听网页行为(鼠标、键盘)，根据不同行为给予不同的响应(对网页的操作)
2、好莱坞法则：don not call me , I will call you.
3、函数：由开发者调用；添加事件后：函数由用户调用。
</code></pre><h2 id="事件三要素" tabindex="-1"><a class="header-anchor" href="#事件三要素" aria-hidden="true">#</a> 事件三要素</h2><pre><code>1、事件源：触发事件的源头 按钮
2、事件：点击
3、事件处理程序：响应的函数
</code></pre><h2 id="事件书写格式" tabindex="-1"><a class="header-anchor" href="#事件书写格式" aria-hidden="true">#</a> 事件书写格式</h2><pre><code>1、内联模式：通过标签中的属性添加事件(很少用)
2、脚本模式：后面的事件会覆盖前面的事件
3、DOM2模式：
</code></pre><h3 id="_1、html事件处理格式" tabindex="-1"><a class="header-anchor" href="#_1、html事件处理格式" aria-hidden="true">#</a> 1、HTML事件处理格式</h3><pre><code>this,传参
</code></pre><h3 id="_2、dom0级事件处理格式" tabindex="-1"><a class="header-anchor" href="#_2、dom0级事件处理格式" aria-hidden="true">#</a> 2、DOM0级事件处理格式</h3><pre><code>获取标签  btn.onclick = function(){};
获取标签  btn.onclick = fn; function fn(){}
给一个元素节点多次绑定同一事件，后者会覆盖前面的。
与绑定事件相对应的，有一个删除绑定事件。
    btn.onclick = null;
</code></pre><h3 id="_3、dom2级事件处理格式-h5新增-有兼容" tabindex="-1"><a class="header-anchor" href="#_3、dom2级事件处理格式-h5新增-有兼容" aria-hidden="true">#</a> 3、DOM2级事件处理格式(H5新增,有兼容)</h3><pre><code>1、标准浏览器

    绑定事件：元素节点.addEventListener(&quot;事件&quot;,事件处理程序,布尔值);
        参数一: 事件前不加on
        参数二：函数名或匿名函数
        参数三：true捕获事件流；false冒泡排序(默认)

    删除事件：元素节点.removeEventListener(事件,函数名,布尔值);
        参数二：必须是函数名

2、IE浏览器

    绑定事件：元素节点.attachEvent(&quot;事件&quot;,事件处理程序);
        参数一：事件前加on
        参数二：函数名或匿名函数

    删除事件：元素节点.detachEvent(事件,事件处理程序);
        参数二：必须是函数名
</code></pre><h2 id="常用事件" tabindex="-1"><a class="header-anchor" href="#常用事件" aria-hidden="true">#</a> 常用事件</h2><pre><code>鼠标在页面任意移动，事件源:document
</code></pre><h3 id="_1、ui事件-事件源-window" tabindex="-1"><a class="header-anchor" href="#_1、ui事件-事件源-window" aria-hidden="true">#</a> 1、UI事件(事件源:window)</h3><pre><code>    onload: 页面加载事件
        先加载页面中的html,css,音频，视频等多媒体资源后，在执行响应函数。

    onscroll：页面滚动事件
        获取监听水平垂直方向的滚动距离。
        window.scrollTo(x,y);返回到指定位置

    onresize：页面大小改变事件
</code></pre><h3 id="_2、鼠标事件" tabindex="-1"><a class="header-anchor" href="#_2、鼠标事件" aria-hidden="true">#</a> 2、鼠标事件</h3><pre><code>    onclick:点击事件
    ondblclick:鼠标双击事件

    onmouseover:鼠标移入事件 //触发多次,进入子元素节点会触发事件
    onmouseout:鼠标移出事件

    onmouseenter:鼠标移入    //触发一次,进入子元素节点不会触发事件
    onmouseleave:鼠标移出

    onmousedown:鼠标按下事件
    onmousemove:鼠标移动事件
    onmouseup:鼠标抬起事件
</code></pre><h3 id="_3、键盘事件-设置快捷键-做游戏" tabindex="-1"><a class="header-anchor" href="#_3、键盘事件-设置快捷键-做游戏" aria-hidden="true">#</a> 3、键盘事件 (设置快捷键；做游戏)</h3><pre><code>    onkeydown: 当键盘被按下时触发
    onkeyup: 当键盘抬起的时候触发
    onkeypress: 键盘按压(只能识别字符键)
</code></pre><h3 id="_4、焦点事件-用户表单验证" tabindex="-1"><a class="header-anchor" href="#_4、焦点事件-用户表单验证" aria-hidden="true">#</a> 4、焦点事件 (用户表单验证)</h3><pre><code>    onfocus: 获取焦点
    onblur:  失去焦点
</code></pre><h3 id="_5、表单提交事件" tabindex="-1"><a class="header-anchor" href="#_5、表单提交事件" aria-hidden="true">#</a> 5、表单提交事件</h3><pre><code>    onsubmit: 表单提交事件 (事件源：form表单)
    onchange:内容改变时触发 (事件源: 下拉列表select)
</code></pre><h2 id="按键" tabindex="-1"><a class="header-anchor" href="#按键" aria-hidden="true">#</a> 按键</h2><pre><code>altkey:是否按下alt
shiftkey:是否按下shift
ctrlkey:是否按下ctrl
</code></pre><h2 id="js和jquery的入口函数" tabindex="-1"><a class="header-anchor" href="#js和jquery的入口函数" aria-hidden="true">#</a> JS和jQuery的入口函数</h2><pre><code>jQuery:入口函数 $(document).ready()
JS : 入口函数 window.onload = function(){}
</code></pre>`,29),h=[o];function c(i,t){return n(),a("div",null,h)}const l=e(d,[["render",c],["__file","16-JS事件.html.vue"]]);export{l as default};

import{_ as e,o as t,c as o,f as n}from"./app.3f8066ad.js";const r={},d=n(`<h1 id="dom样式和屏幕尺寸" tabindex="-1"><a class="header-anchor" href="#dom样式和屏幕尺寸" aria-hidden="true">#</a> DOM样式和屏幕尺寸</h1><h2 id="css样式操作" tabindex="-1"><a class="header-anchor" href="#css样式操作" aria-hidden="true">#</a> CSS样式操作</h2><pre><code>在JS中，如果样式名称有连字符，去掉连字符，驼峰命名
</code></pre><h2 id="获取css样式" tabindex="-1"><a class="header-anchor" href="#获取css样式" aria-hidden="true">#</a> 获取CSS样式</h2><p>1、内联样式(行内样式)</p><pre><code>元素节点.style.样式名称;
元素节点.style[&quot;样式名称&quot;];

div.style.color;
p.style.width;
......
</code></pre><p>2、非内联样式</p><pre><code>IE浏览器：
 (1)元素节点.currentStyle.样式名称
 (2)元素节点.currentStyle[&quot;样式名称&quot;]

非IE浏览器：
 (1)window.getComputedStyle(元素节点 , null).样式名称;
 (2)window.getComputedStyle(元素节点 , null)[&quot;样式名称&quot;];
</code></pre><p>3、兼容性处理(非内联样式)</p><pre><code>function getStyle(ele,attr){
    if(ele.currentStyle){
        return ele.currentStyle[attr];
    }else{
        return window.getComputedStyle(ele,null)[attr];
    }
}

console.log(getStyle(div1,&quot;border&quot;));
</code></pre><h2 id="设置样式" tabindex="-1"><a class="header-anchor" href="#设置样式" aria-hidden="true">#</a> 设置样式</h2><p>1、设置内联样式</p><pre><code>元素节点.style.样式名称 = &quot;&quot;;
</code></pre><h2 id="dom各种屏幕尺寸" tabindex="-1"><a class="header-anchor" href="#dom各种屏幕尺寸" aria-hidden="true">#</a> DOM各种屏幕尺寸</h2><p>1、offsetWidth 元素实际宽度(不带单位)</p><p>2、offsetHeight 元素实际高度(不带单位)</p><pre><code>var myDiv = document.getElementsByTagName(&quot;div&quot;)[0];
console.log(myDiv.offsetWidth);
console.log(myDiv.offsetHeight);
</code></pre><p>3、 offsetParent</p><pre><code>距离当前元素节点最近的有定位的父元素节点；如果都没定位，则是body。
</code></pre><p>4、 offsetLeft ——left</p><pre><code>有定位时：水平方向的偏移量(不带单位)；没有定位时：监听到body的偏移量
</code></pre><p>5、 offsetTop ——top</p><pre><code>有定位时：垂直方向的偏移量(不带单位)；没有定位时：监听到body的偏移量
</code></pre><h2 id="网页尺寸" tabindex="-1"><a class="header-anchor" href="#网页尺寸" aria-hidden="true">#</a> 网页尺寸</h2><pre><code>//offsetHeight :不包括滚动条
//scrollHeight :包括滚动条

function getSize(){
    var width = document.body.offsetWidth || document.documentElement.offsetWidth;
    var height = document.body.offsetHeight || document.documentElement.offsetHeight;
    alert(width +&quot;,&quot;+height)
}
getSize();
</code></pre><h2 id="innerhtml" tabindex="-1"><a class="header-anchor" href="#innerhtml" aria-hidden="true">#</a> innerHTML</h2><p>1、设置文本内容</p><pre><code>d.innerHTML = &quot;我今年&quot;+i+&quot;岁了&quot;;
</code></pre><p>2、识别标签</p><pre><code>d.innerHTML = &quot;&lt;a href=&#39;javascript:;&#39;&gt;我是a标签&lt;/a&gt;&quot;;
</code></pre>`,30),a=[d];function c(i,h){return t(),o("div",null,a)}const l=e(r,[["render",c],["__file","14-DOM样式和屏幕尺寸.html.vue"]]);export{l as default};

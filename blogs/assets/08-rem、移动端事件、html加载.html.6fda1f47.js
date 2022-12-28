import{_ as e,o as n,c as t,f as a}from"./app.70e3165a.js";const r={},d=a(`<h1 id="rem、移动端事件、html加载" tabindex="-1"><a class="header-anchor" href="#rem、移动端事件、html加载" aria-hidden="true">#</a> rem、移动端事件、html加载</h1><h2 id="一、rem、em、px的关系" tabindex="-1"><a class="header-anchor" href="#一、rem、em、px的关系" aria-hidden="true">#</a> 一、rem、em、px的关系</h2><h3 id="_1、什么是rem" tabindex="-1"><a class="header-anchor" href="#_1、什么是rem" aria-hidden="true">#</a> 1、什么是rem？</h3><pre><code>css3新的单位。
@media 根据此设置可以根据屏幕宽度设置html的字体大小,从而改变其他元素的字体大小宽度高度等属性

JS设置视口宽度 ：document.documentElement.style.fontSize=&quot;20px&quot;;
(html.style.fontSize)
</code></pre><h3 id="_2、三种单位" tabindex="-1"><a class="header-anchor" href="#_2、三种单位" aria-hidden="true">#</a> 2、三种单位</h3><pre><code>px,依赖的分辨率
em,相对长度单位,检测父级元素字体大小，依赖父级元素字体进行设置
rem,相对长度单位，检测root根元素字体大小，依赖html设置
</code></pre><h3 id="_3、rem和em的区别" tabindex="-1"><a class="header-anchor" href="#_3、rem和em的区别" aria-hidden="true">#</a> 3、rem和em的区别？</h3><pre><code>都是相对长度  都是检测字体大小
rem 根据根元素字体大小  ( html{font-size:20px;} )
em 根据父元素字体大小
</code></pre><h2 id="二、移动端事件" tabindex="-1"><a class="header-anchor" href="#二、移动端事件" aria-hidden="true">#</a> 二、移动端事件</h2><h3 id="_1、屏幕方向改变事件-orientationchange" tabindex="-1"><a class="header-anchor" href="#_1、屏幕方向改变事件-orientationchange" aria-hidden="true">#</a> 1、屏幕方向改变事件 orientationchange</h3><pre><code>window.addEventListener(&quot;orientationchange&quot;,function(){
    alert(&quot;我方向发生改变啦！&quot;);
})
</code></pre><h3 id="_2、窗口尺寸发生变化-触发" tabindex="-1"><a class="header-anchor" href="#_2、窗口尺寸发生变化-触发" aria-hidden="true">#</a> 2、窗口尺寸发生变化，触发</h3><pre><code>window.addEventListener(&quot;resize&quot;,function(){
    alert(&quot;我改变啦！&quot;)
})
</code></pre><h3 id="_3、dom节点加载完成-触发该事件" tabindex="-1"><a class="header-anchor" href="#_3、dom节点加载完成-触发该事件" aria-hidden="true">#</a> 3、DOM节点加载完成，触发该事件</h3><pre><code>window.addEventListener(&quot;DOMContentLoaded&quot;,function(){
    alert(&quot;DOM节点加载完成！&quot;);
})
</code></pre><h3 id="_4、获得视口宽度" tabindex="-1"><a class="header-anchor" href="#_4、获得视口宽度" aria-hidden="true">#</a> 4、获得视口宽度</h3><pre><code>因为在视口标签中设置了，视口宽度等于设备宽度
document.documentElement.clientWidth得到设备实际宽度
</code></pre><h2 id="三、html加载顺序" tabindex="-1"><a class="header-anchor" href="#三、html加载顺序" aria-hidden="true">#</a> 三、html加载顺序</h2><pre><code>1、解析HTML结构
2、加载外部文件
3、执行脚本代码
4、DOM树构建完成    --- DOMContentLoaded
5、加载图片等外部资源
6、页面加载完毕        --- load
</code></pre><h2 id="四、js动态获取视口宽度-同时设置html的字体大小" tabindex="-1"><a class="header-anchor" href="#四、js动态获取视口宽度-同时设置html的字体大小" aria-hidden="true">#</a> 四、js动态获取视口宽度,同时设置html的字体大小</h2><pre><code>功能：根据不同型号的手机，设置不同的html的font-size
设置两个形参，doc为document   win为window

(function(doc,win){

    var remCale = function(){
        //获取视口宽度
           var clientWidth = doc.documentElement.clientWidth;

        //UI给的设计稿通常都是320px，或者640px
        //设置字体大小  1rem=100px  320px设计稿
        doc.documentElement.style.fontSize=(clientWidth/320)*100*&quot;px&quot;;
    }

    //在文档最先加载完成的时候，触发remCale
    doc.addEventListener(&quot;DOMContentLoaded&quot;,remCale);

    //翻转手机，或改变浏览器宽度的时候，触发remCale
    win.addEventListener(&quot;resize&quot;,remCale);
    win.addEventListener(&quot;orientationchange&quot;,remCale);

})(document,window)
</code></pre>`,21),o=[d];function h(i,c){return n(),t("div",null,o)}const l=e(r,[["render",h],["__file","08-rem、移动端事件、html加载.html.vue"]]);export{l as default};

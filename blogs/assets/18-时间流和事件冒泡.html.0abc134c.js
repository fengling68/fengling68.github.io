import{_ as e,o as n,c as t,f as l}from"./app.9b0e6b33.js";const a={},o=l(`<h1 id="时间流和事件冒泡" tabindex="-1"><a class="header-anchor" href="#时间流和事件冒泡" aria-hidden="true">#</a> 时间流和事件冒泡</h1><h2 id="事件流" tabindex="-1"><a class="header-anchor" href="#事件流" aria-hidden="true">#</a> 事件流</h2><ul><li><p>指网页中事件传播顺序，当我们对页面进行操作的时候，都会产生事件流。这个事件流在传播过程中，就会查找跟事件流事件类型相同的元素。</p></li><li><p>点击时，会产生点击事件流。 在传播的过程中，只要发现有元素绑定了和事件流相同类型的事件，就触发此事件。</p></li></ul><h2 id="两种事件流模型" tabindex="-1"><a class="header-anchor" href="#两种事件流模型" aria-hidden="true">#</a> 两种事件流模型</h2><ul><li><p>1、冒泡事件流模型：从里往外</p></li><li><p>现代浏览器，默认都是冒泡</p></li><li><p>认为事件流，从触发事件的元素开始传递，传播到根节点结束。</p></li><li><p>2、捕获事件流模型：从外往里</p></li><li><p>NetScape , 很少用</p></li><li><p>认为事件流从根节点产生开始传播，传播到当前元素结束。</p></li></ul><h2 id="阻止冒泡-阻止事件的传播" tabindex="-1"><a class="header-anchor" href="#阻止冒泡-阻止事件的传播" aria-hidden="true">#</a> 阻止冒泡：阻止事件的传播</h2><p>1、W3C方式</p><pre><code>    事件对象.stopPropagation();   调用这个方法
    event.stopPropagation();
</code></pre><p>2、IE方式(IE8以下)</p><pre><code>    事件对象.cancelBubble = true;
</code></pre><p>3、兼容IE浏览器//阻止事件冒泡的函数</p><pre><code>    function stopPro(event){
        //var e = evt || window.event;
        //window.event ? e.cancelBubble = true : e.stopPropagation();

        if(event.stopPropagation){
            event.stoppagation();         //非IE浏览器
        }else{
            event.cancelBubble = true;    //IE浏览器
        }
    }
</code></pre><h2 id="修改事件的默认行为" tabindex="-1"><a class="header-anchor" href="#修改事件的默认行为" aria-hidden="true">#</a> 修改事件的默认行为</h2><p>例：img a submit</p><p>例：表单中type是submit，点击后在事件传播完成后会自动提交表单</p><p>例：input的keydown事件发生并处理后，浏览器会将用户键入的字符自动追加到input元素的值中。</p><pre><code>//(1)IE
function someHandle(){
    window.event.returnValue = false;
}

//(2)W3C
function someHandle(event){
    event.preventDefault();
}

//(3)兼容性处理
function preventDefault(e){
    if(e.preventDefault){
        e.preventDefault();
    }else{
        e.returnValue = false;
    }
}
</code></pre><h2 id="dom2模型" tabindex="-1"><a class="header-anchor" href="#dom2模型" aria-hidden="true">#</a> DOM2模型</h2><p><strong>1、绑定事件</strong></p><pre><code>(1)W3C标准：
    addEventListener(&quot;eventType&quot;,handler,true | false);
    参数一：事件类型(不加 on)
            事件属性 = on + 事件类型
    参数二：处理函数
    参数三：指定是否在捕获阶段进行处理，false&lt;=&gt;IE

    function clickOne(){
        alert(&quot;订单安全验证&quot;);
    }
    function clickTwo(){
        alert(&quot;订单提交&quot;);
    }
    btn.addEventListener(&quot;click&quot;,clickOne,false);
    btn.addEventListener(&quot;click&quot;,clickTwo,false);
</code></pre><p>(2)IE7 / IE8:(只能用冒泡)</p><pre><code>    attachEvent(&quot;eventType&quot;,handler);
    参数一：事件类型(加 on)
    参数二：事件处理函数

    attachEvent(&quot;onclick&quot;,clickOne);
    attachEvent(&quot;onclick&quot;,clickTwo);
</code></pre><p>(3)DOM2绑定事件兼容性处理</p><pre><code>    function addEvent(ele,eventType,handler,isCapture){   //isCapture 是否冒泡
        if(ele.addEventListener){
            ele.addEventListener(eventType,handler,isCapture);
        }else{
            ele.attachEvent(&quot;on&quot;+eventType,handler);
        }
    }
</code></pre><p><strong>2、移出事件</strong></p><p>(1)W3C方式</p><pre><code>    removeEventListener( &quot;eventType&quot;,handler,true||false );
    参数一：不加on
</code></pre><p>(2)IE方式</p><pre><code>    detachEvent(eventType,handler);
    参数二：加on
</code></pre><p>(3)DOM2解除事件兼容性处理</p><pre><code>    function removeEvent(ele,eventType,handler,isCapture){
        if(ele.removeEventListener){     //isCapture未传参，则是undefined
            ele.removeEventListener(eventType,handler,isCapture);
        }else{
            ele.detachEvent(&quot;on&quot;+eventType,handler);
        }
    }
</code></pre><h2 id="事件委托" tabindex="-1"><a class="header-anchor" href="#事件委托" aria-hidden="true">#</a> 事件委托</h2><ul><li>本该子元素做的事情，委托给父元素来做。实质：冒泡事件</li><li>监听到的实际的事件源</li><li>标准浏览器target : ul</li><li>IE浏览器srcElement : ul</li></ul><p><strong>代码示例</strong></p><pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;meta charset=&quot;UTF-8&quot;&gt;
        &lt;title&gt;&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;ul&gt;
            &lt;li&gt;我是li标签1&lt;/li&gt;
            &lt;li&gt;我是li标签2&lt;/li&gt;
            &lt;li&gt;我是li标签3&lt;/li&gt;
            &lt;li&gt;我是li标签4&lt;/li&gt;
            &lt;p&gt;我是p标签&lt;/p&gt;
        &lt;/ul&gt;
    &lt;/body&gt;
&lt;/html&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
    var ul = document.getElementsByTagName(&quot;ul&quot;)[0];
    ul.onclick = function(event){
        var e = event || window.event;
        console.log(e);
        console.log(e.target || e.srcElement);

        var tar = e.target || e.srcElement;
        //节点名称nodeName都是大写的
        if(tar.nodeName.toLowerCase() == &quot;li&quot;){
            alert(123);
        }
    }
&lt;/script&gt;
</code></pre>`,35),r=[o];function i(p,c){return n(),t("div",null,r)}const u=e(a,[["render",i],["__file","18-时间流和事件冒泡.html.vue"]]);export{u as default};

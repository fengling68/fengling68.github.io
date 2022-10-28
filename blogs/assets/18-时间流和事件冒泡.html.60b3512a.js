import{_ as e,o as n,c as t,f as l}from"./app.116a9906.js";const a={},o=l(`<h1 id="\u65F6\u95F4\u6D41\u548C\u4E8B\u4EF6\u5192\u6CE1" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4\u6D41\u548C\u4E8B\u4EF6\u5192\u6CE1" aria-hidden="true">#</a> \u65F6\u95F4\u6D41\u548C\u4E8B\u4EF6\u5192\u6CE1</h1><h2 id="\u4E8B\u4EF6\u6D41" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u6D41" aria-hidden="true">#</a> \u4E8B\u4EF6\u6D41</h2><ul><li><p>\u6307\u7F51\u9875\u4E2D\u4E8B\u4EF6\u4F20\u64AD\u987A\u5E8F\uFF0C\u5F53\u6211\u4EEC\u5BF9\u9875\u9762\u8FDB\u884C\u64CD\u4F5C\u7684\u65F6\u5019\uFF0C\u90FD\u4F1A\u4EA7\u751F\u4E8B\u4EF6\u6D41\u3002\u8FD9\u4E2A\u4E8B\u4EF6\u6D41\u5728\u4F20\u64AD\u8FC7\u7A0B\u4E2D\uFF0C\u5C31\u4F1A\u67E5\u627E\u8DDF\u4E8B\u4EF6\u6D41\u4E8B\u4EF6\u7C7B\u578B\u76F8\u540C\u7684\u5143\u7D20\u3002</p></li><li><p>\u70B9\u51FB\u65F6\uFF0C\u4F1A\u4EA7\u751F\u70B9\u51FB\u4E8B\u4EF6\u6D41\u3002 \u5728\u4F20\u64AD\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u53EA\u8981\u53D1\u73B0\u6709\u5143\u7D20\u7ED1\u5B9A\u4E86\u548C\u4E8B\u4EF6\u6D41\u76F8\u540C\u7C7B\u578B\u7684\u4E8B\u4EF6\uFF0C\u5C31\u89E6\u53D1\u6B64\u4E8B\u4EF6\u3002</p></li></ul><h2 id="\u4E24\u79CD\u4E8B\u4EF6\u6D41\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E24\u79CD\u4E8B\u4EF6\u6D41\u6A21\u578B" aria-hidden="true">#</a> \u4E24\u79CD\u4E8B\u4EF6\u6D41\u6A21\u578B</h2><ul><li><p>1\u3001\u5192\u6CE1\u4E8B\u4EF6\u6D41\u6A21\u578B\uFF1A\u4ECE\u91CC\u5F80\u5916</p></li><li><p>\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF0C\u9ED8\u8BA4\u90FD\u662F\u5192\u6CE1</p></li><li><p>\u8BA4\u4E3A\u4E8B\u4EF6\u6D41\uFF0C\u4ECE\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u7D20\u5F00\u59CB\u4F20\u9012\uFF0C\u4F20\u64AD\u5230\u6839\u8282\u70B9\u7ED3\u675F\u3002</p></li><li><p>2\u3001\u6355\u83B7\u4E8B\u4EF6\u6D41\u6A21\u578B\uFF1A\u4ECE\u5916\u5F80\u91CC</p></li><li><p>NetScape , \u5F88\u5C11\u7528</p></li><li><p>\u8BA4\u4E3A\u4E8B\u4EF6\u6D41\u4ECE\u6839\u8282\u70B9\u4EA7\u751F\u5F00\u59CB\u4F20\u64AD\uFF0C\u4F20\u64AD\u5230\u5F53\u524D\u5143\u7D20\u7ED3\u675F\u3002</p></li></ul><h2 id="\u963B\u6B62\u5192\u6CE1-\u963B\u6B62\u4E8B\u4EF6\u7684\u4F20\u64AD" tabindex="-1"><a class="header-anchor" href="#\u963B\u6B62\u5192\u6CE1-\u963B\u6B62\u4E8B\u4EF6\u7684\u4F20\u64AD" aria-hidden="true">#</a> \u963B\u6B62\u5192\u6CE1\uFF1A\u963B\u6B62\u4E8B\u4EF6\u7684\u4F20\u64AD</h2><p>1\u3001W3C\u65B9\u5F0F</p><pre><code>    \u4E8B\u4EF6\u5BF9\u8C61.stopPropagation();   \u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5
    event.stopPropagation();
</code></pre><p>2\u3001IE\u65B9\u5F0F(IE8\u4EE5\u4E0B)</p><pre><code>    \u4E8B\u4EF6\u5BF9\u8C61.cancelBubble = true;
</code></pre><p>3\u3001\u517C\u5BB9IE\u6D4F\u89C8\u5668//\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\u7684\u51FD\u6570</p><pre><code>    function stopPro(event){
        //var e = evt || window.event;
        //window.event ? e.cancelBubble = true : e.stopPropagation();

        if(event.stopPropagation){
            event.stoppagation();         //\u975EIE\u6D4F\u89C8\u5668
        }else{
            event.cancelBubble = true;    //IE\u6D4F\u89C8\u5668
        }
    }
</code></pre><h2 id="\u4FEE\u6539\u4E8B\u4EF6\u7684\u9ED8\u8BA4\u884C\u4E3A" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u4E8B\u4EF6\u7684\u9ED8\u8BA4\u884C\u4E3A" aria-hidden="true">#</a> \u4FEE\u6539\u4E8B\u4EF6\u7684\u9ED8\u8BA4\u884C\u4E3A</h2><p>\u4F8B\uFF1Aimg a submit</p><p>\u4F8B\uFF1A\u8868\u5355\u4E2Dtype\u662Fsubmit\uFF0C\u70B9\u51FB\u540E\u5728\u4E8B\u4EF6\u4F20\u64AD\u5B8C\u6210\u540E\u4F1A\u81EA\u52A8\u63D0\u4EA4\u8868\u5355</p><p>\u4F8B\uFF1Ainput\u7684keydown\u4E8B\u4EF6\u53D1\u751F\u5E76\u5904\u7406\u540E\uFF0C\u6D4F\u89C8\u5668\u4F1A\u5C06\u7528\u6237\u952E\u5165\u7684\u5B57\u7B26\u81EA\u52A8\u8FFD\u52A0\u5230input\u5143\u7D20\u7684\u503C\u4E2D\u3002</p><pre><code>//(1)IE
function someHandle(){
    window.event.returnValue = false;
}

//(2)W3C
function someHandle(event){
    event.preventDefault();
}

//(3)\u517C\u5BB9\u6027\u5904\u7406
function preventDefault(e){
    if(e.preventDefault){
        e.preventDefault();
    }else{
        e.returnValue = false;
    }
}
</code></pre><h2 id="dom2\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#dom2\u6A21\u578B" aria-hidden="true">#</a> DOM2\u6A21\u578B</h2><p><strong>1\u3001\u7ED1\u5B9A\u4E8B\u4EF6</strong></p><pre><code>(1)W3C\u6807\u51C6\uFF1A
    addEventListener(&quot;eventType&quot;,handler,true | false);
    \u53C2\u6570\u4E00\uFF1A\u4E8B\u4EF6\u7C7B\u578B(\u4E0D\u52A0 on)
            \u4E8B\u4EF6\u5C5E\u6027 = on + \u4E8B\u4EF6\u7C7B\u578B
    \u53C2\u6570\u4E8C\uFF1A\u5904\u7406\u51FD\u6570
    \u53C2\u6570\u4E09\uFF1A\u6307\u5B9A\u662F\u5426\u5728\u6355\u83B7\u9636\u6BB5\u8FDB\u884C\u5904\u7406\uFF0Cfalse&lt;=&gt;IE

    function clickOne(){
        alert(&quot;\u8BA2\u5355\u5B89\u5168\u9A8C\u8BC1&quot;);
    }
    function clickTwo(){
        alert(&quot;\u8BA2\u5355\u63D0\u4EA4&quot;);
    }
    btn.addEventListener(&quot;click&quot;,clickOne,false);
    btn.addEventListener(&quot;click&quot;,clickTwo,false);
</code></pre><p>(2)IE7 / IE8:(\u53EA\u80FD\u7528\u5192\u6CE1)</p><pre><code>    attachEvent(&quot;eventType&quot;,handler);
    \u53C2\u6570\u4E00\uFF1A\u4E8B\u4EF6\u7C7B\u578B(\u52A0 on)
    \u53C2\u6570\u4E8C\uFF1A\u4E8B\u4EF6\u5904\u7406\u51FD\u6570

    attachEvent(&quot;onclick&quot;,clickOne);
    attachEvent(&quot;onclick&quot;,clickTwo);
</code></pre><p>(3)DOM2\u7ED1\u5B9A\u4E8B\u4EF6\u517C\u5BB9\u6027\u5904\u7406</p><pre><code>    function addEvent(ele,eventType,handler,isCapture){   //isCapture \u662F\u5426\u5192\u6CE1
        if(ele.addEventListener){
            ele.addEventListener(eventType,handler,isCapture);
        }else{
            ele.attachEvent(&quot;on&quot;+eventType,handler);
        }
    }
</code></pre><p><strong>2\u3001\u79FB\u51FA\u4E8B\u4EF6</strong></p><p>(1)W3C\u65B9\u5F0F</p><pre><code>    removeEventListener( &quot;eventType&quot;,handler,true||false );
    \u53C2\u6570\u4E00\uFF1A\u4E0D\u52A0on
</code></pre><p>(2)IE\u65B9\u5F0F</p><pre><code>    detachEvent(eventType,handler);
    \u53C2\u6570\u4E8C\uFF1A\u52A0on
</code></pre><p>(3)DOM2\u89E3\u9664\u4E8B\u4EF6\u517C\u5BB9\u6027\u5904\u7406</p><pre><code>    function removeEvent(ele,eventType,handler,isCapture){
        if(ele.removeEventListener){     //isCapture\u672A\u4F20\u53C2\uFF0C\u5219\u662Fundefined
            ele.removeEventListener(eventType,handler,isCapture);
        }else{
            ele.detachEvent(&quot;on&quot;+eventType,handler);
        }
    }
</code></pre><h2 id="\u4E8B\u4EF6\u59D4\u6258" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u59D4\u6258" aria-hidden="true">#</a> \u4E8B\u4EF6\u59D4\u6258</h2><ul><li>\u672C\u8BE5\u5B50\u5143\u7D20\u505A\u7684\u4E8B\u60C5\uFF0C\u59D4\u6258\u7ED9\u7236\u5143\u7D20\u6765\u505A\u3002\u5B9E\u8D28\uFF1A\u5192\u6CE1\u4E8B\u4EF6</li><li>\u76D1\u542C\u5230\u7684\u5B9E\u9645\u7684\u4E8B\u4EF6\u6E90</li><li>\u6807\u51C6\u6D4F\u89C8\u5668target : ul</li><li>IE\u6D4F\u89C8\u5668srcElement : ul</li></ul><p><strong>\u4EE3\u7801\u793A\u4F8B</strong></p><pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;meta charset=&quot;UTF-8&quot;&gt;
        &lt;title&gt;&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;ul&gt;
            &lt;li&gt;\u6211\u662Fli\u6807\u7B7E1&lt;/li&gt;
            &lt;li&gt;\u6211\u662Fli\u6807\u7B7E2&lt;/li&gt;
            &lt;li&gt;\u6211\u662Fli\u6807\u7B7E3&lt;/li&gt;
            &lt;li&gt;\u6211\u662Fli\u6807\u7B7E4&lt;/li&gt;
            &lt;p&gt;\u6211\u662Fp\u6807\u7B7E&lt;/p&gt;
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
        //\u8282\u70B9\u540D\u79F0nodeName\u90FD\u662F\u5927\u5199\u7684
        if(tar.nodeName.toLowerCase() == &quot;li&quot;){
            alert(123);
        }
    }
&lt;/script&gt;
</code></pre>`,35),r=[o];function i(p,c){return n(),t("div",null,r)}const u=e(a,[["render",i],["__file","18-\u65F6\u95F4\u6D41\u548C\u4E8B\u4EF6\u5192\u6CE1.html.vue"]]);export{u as default};

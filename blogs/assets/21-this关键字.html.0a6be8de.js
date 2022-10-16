import{_ as n,o as e,c as a,f as o}from"./app.c9d55439.js";const t={},i=o(`<h1 id="this\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#this\u5173\u952E\u5B57" aria-hidden="true">#</a> this\u5173\u952E\u5B57</h1><pre><code>this\u5BF9\u8C61\uFF1A\u6BCF\u4E2A\u51FD\u6570\u4E2D\u90FD\u4F1A\u6709this\u5BF9\u8C61\u3002 context:\u4E0A\u4E0B\u6587\u5BF9\u8C61
this\u603B\u662F\u6307\u5411\u8C03\u7528\u8BE5\u51FD\u6570\u7684\u5BF9\u8C61\u3002
this\u4E00\u822C\u5B58\u5728\u4E8E\u51FD\u6570\u4E2D\uFF0Cthis\u6307\u5411\u7684\u662F\u8BE5\u51FD\u6570\u5B58\u5728\u7684\u5BF9\u8C61\u3002
</code></pre><h2 id="this\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#this\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> this\u5E94\u7528\u573A\u666F</h2><h3 id="_1\u3001console-log-this-\u5168\u5C40\u4E0B\u6307window" tabindex="-1"><a class="header-anchor" href="#_1\u3001console-log-this-\u5168\u5C40\u4E0B\u6307window" aria-hidden="true">#</a> 1\u3001console.log(this); //\u5168\u5C40\u4E0B\u6307window</h3><h3 id="_2\u3001\u4E8B\u4EF6\u54CD\u5E94\u51FD\u6570\u4E2D\u4F7F\u7528this-\u6307\u4EE3\u4E8B\u4EF6\u6E90\u3002" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u4E8B\u4EF6\u54CD\u5E94\u51FD\u6570\u4E2D\u4F7F\u7528this-\u6307\u4EE3\u4E8B\u4EF6\u6E90\u3002" aria-hidden="true">#</a> 2\u3001\u4E8B\u4EF6\u54CD\u5E94\u51FD\u6570\u4E2D\u4F7F\u7528this , \u6307\u4EE3\u4E8B\u4EF6\u6E90\u3002</h3><pre><code>onclick = &quot;fn(this)&quot;         //HTML\u65B9\u5F0F\u8981\u4F20\u53C2
function fn(this){}

btn.onclick = function(){    //DOM0\u7EA7\u4E8B\u4EF6\u76F4\u63A5\u4F7F\u7528\u5373\u53EF
    alert(this.value);
}
</code></pre><h3 id="_3\u3001\u5B57\u9762\u91CF\u65B9\u5F0F\u521B\u5EFA\u7B80\u5355\u5BF9\u8C61\u4E2D\u4F7F\u7528-\u6307\u4EE3\u5F53\u524D\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u5B57\u9762\u91CF\u65B9\u5F0F\u521B\u5EFA\u7B80\u5355\u5BF9\u8C61\u4E2D\u4F7F\u7528-\u6307\u4EE3\u5F53\u524D\u5BF9\u8C61" aria-hidden="true">#</a> 3\u3001\u5B57\u9762\u91CF\u65B9\u5F0F\u521B\u5EFA\u7B80\u5355\u5BF9\u8C61\u4E2D\u4F7F\u7528 , \u6307\u4EE3\u5F53\u524D\u5BF9\u8C61</h3><pre><code>var obj = {
    name:&#39;\u8346\u5929\u660E&#39;,
    say:function(){
        console.log(&quot;\u79E6\u65F6\u660E\u6708-&quot; + this.name);
    }
};
</code></pre><h3 id="_4\u3001\u6784\u9020\u51FD\u6570\u4E2D\u4F7F\u7528-\u6307\u4EE3\u521B\u5EFA\u7684\u5BF9\u8C61\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u6784\u9020\u51FD\u6570\u4E2D\u4F7F\u7528-\u6307\u4EE3\u521B\u5EFA\u7684\u5BF9\u8C61\u5B9E\u4F8B" aria-hidden="true">#</a> 4\u3001\u6784\u9020\u51FD\u6570\u4E2D\u4F7F\u7528 , \u6307\u4EE3\u521B\u5EFA\u7684\u5BF9\u8C61\u5B9E\u4F8B</h3><pre><code>function Person(name,age){
    this.name = name;
    this.age = age;
}
var per = new Person(&quot;abc&quot;,20);

\u6CA1\u6709\u5B9E\u4F8B\u7684\u65F6\u5019\uFF0Cthis\u6307\u4EE3window\u3002
</code></pre><h3 id="_5\u3001call-\u548Capply-\u53EF\u4EE5\u6539\u53D8this\u7684\u6307\u5411" tabindex="-1"><a class="header-anchor" href="#_5\u3001call-\u548Capply-\u53EF\u4EE5\u6539\u53D8this\u7684\u6307\u5411" aria-hidden="true">#</a> 5\u3001call()\u548Capply()\u53EF\u4EE5\u6539\u53D8this\u7684\u6307\u5411</h3><pre><code>var obj1 = {
    verson:&quot;#1.0&quot;
};
var obj2 = {
    getVerson:function(){
        console.log(this.verson);   
    }
}

obj2.getVerson();            //this\u6307obj2 , undefined
obj2.getVerson.call(obj1);   //this\u6307obj1 , #1.0
</code></pre><h3 id="_6\u3001call-\u548Capply-\u7684\u76F8\u540C\u4E0E\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#_6\u3001call-\u548Capply-\u7684\u76F8\u540C\u4E0E\u4E0D\u540C" aria-hidden="true">#</a> 6\u3001call()\u548Capply()\u7684\u76F8\u540C\u4E0E\u4E0D\u540C</h3><pre><code>***********************\u76F8\u540C(\u4F7F\u7528\u65B9\u6CD5\u548C\u6307\u5411)*************************
\u4E66\u5199\u89C4\u8303\uFF1A
(1)\u51FD\u6570\u4F53(\u51FD\u6570\u540D)\u8C03\u7528call();
(2)\u53C2\u6570:\u5BF9\u8C61,\u8C03\u7528\u8005
********************************************************************

function fn(){
    console.log(&quot;\u6211\u53EB&quot; + this.name);    //this\u6307window
}

var person = {
    name : &quot;\u8346\u5929\u660E&quot;,
    age : 18
};

fn.call(person);                       //this\u6307\u5411person
fn.apply(person);                      //this\u6307\u5411person

**********************\u4E0D\u540C(\u4F20\u53C2\u4E0D\u540C)*******************************
apply\u89C4\u5B9A\u6700\u591A\u6709\u4E24\u4E2A\u53C2\u6570(\u653E\u5165\u6570\u7EC4\uFF0C\u81EA\u52A8\u4E00\u4E00\u5339\u914D)
*******************************************************************

function sum(c,d){
    console.log(this.a + this.b + c + d);
}
var obj = {
    a:20,
    b:20
};

sum.call( obj , 30 , 40 );
sum.apply( obj , [30 , 40] );
</code></pre>`,14),h=[i];function s(r,c){return e(),a("div",null,h)}const l=n(t,[["render",s],["__file","21-this\u5173\u952E\u5B57.html.vue"]]);export{l as default};

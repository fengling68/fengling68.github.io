import{_ as n,o as a,c as t,f as e}from"./app.b0016746.js";const o={},r=e(`<h1 id="原生ajax" tabindex="-1"><a class="header-anchor" href="#原生ajax" aria-hidden="true">#</a> 原生Ajax</h1><h1 id="ajax异步通信" tabindex="-1"><a class="header-anchor" href="#ajax异步通信" aria-hidden="true">#</a> Ajax异步通信</h1><pre><code>客户端与服务器端请求、发送数据
</code></pre><h2 id="使用ajax的步骤" tabindex="-1"><a class="header-anchor" href="#使用ajax的步骤" aria-hidden="true">#</a> 使用Ajax的步骤</h2><pre><code>1、创建XMLHttpRequest对象
2、通过ajax对象的open方法配置请求
3、通过ajax对象的send方法发送请求
4、通过ajax对象的onreadystatechange事件，监听响应的状态
5、当ajax.readyState == 4(响应就绪) &amp;&amp; ajax.status == 200(响应资源就绪), 说明响应成功。
6、通过ajax.responseText || ajax.responseXML属性获取响应数据
</code></pre><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><pre><code>window.onload = function(){
    /*获取元素......*/
    /************* 1、get发送请求无惨 ***********************/
    getBtn.onclick = function(){
        //创建
        var ajax = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);
        //配置
        ajax.open(&quot;get&quot;,&quot;http://.../ajaxTest&quot;);
        //发送
        ajax.send(null);
        //响应事件
        ajax.onreadystatechange = function(){
            //响应就绪 //响应资源就绪
            if(ajax.readyState == 4 &amp;&amp; ajax.status == 200){
                console.log(&quot;响应已经就绪了&quot;);
                var re = ajax.responseText || ajax.responseXML;
                var data = JSON.parse(re);
                console.log(data);
            }
        }
    }


    /********** 2、通过get传参方式发送数据 ************/
    sendDataByGet.onclick = function(){
        var ajax = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);

        ajax.open(&quot;GET&quot;,&quot;http://.../ajaxGet?name=zs&amp;age=20&amp;sex=man;&quot;);
        ajax.send(null);

        //响应事件
        ajax.onreadystatechange = function(){
            if(ajax.readyState == 4 &amp;&amp; ajax.status == 200){   
                var re = ajax.responseText || ajax.responseXML;
                var data = JSON.parse(re);
                console.log(data);
            }
        }

    }

    /********** 3、通过post传参方式发送数据 ************/
    sendDataByPost.onclick = function(){
        var ajax = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);
        ajax.open(&quot;post&quot;,&quot;http://.../ajaxPost&quot;);
        //post设置请求头
        ajax.setRequestHeader(&quot;Content-type&quot;,&quot;applicction/x-www-form-urlencoded&quot;);
        ajax.send(&quot;name=zs&amp;age=20&amp;sex=man&quot;);
        ajax.onreadystatechange = function(){
            if(ajax.readyState == 4 &amp;&amp; ajax.status == 200){ 
                var re = ajax.responseText || ajax.responseXML;
                var data = JSON.parse(re);
                console.log(data);
            }
        }
    }
}
</code></pre><h2 id="get和post的区别" tabindex="-1"><a class="header-anchor" href="#get和post的区别" aria-hidden="true">#</a> get和post的区别</h2><pre><code>1、数据携带方式不同
    GET请求的数据会附在URL之后（就是把数据放置在HTTP协议头中），以?分割URL和传输数据，参数之间以&amp;相连，
    POST把提交的数据则放置在是HTTP包的包体中。
2、携带数据量不同
    GET方式提交的数据最多只能是1024字节
    POST是没有大小限制的
3、安全性
    POST方式的安全性高于GET方式
4、应用
    GET是向服务器发索取数据的一种请求，而POST是向服务器提交数据的一种请求
5、传递方式
    get数据拼接在url后, 键值对之间&amp;, 键值之间=, send()无参。
    post数据单独打包发送, 设置请求头, send()传参。
</code></pre><h2 id="ajax的封装-两种" tabindex="-1"><a class="header-anchor" href="#ajax的封装-两种" aria-hidden="true">#</a> Ajax的封装（两种）</h2><pre><code>/**
 * Created by jiaoshou on 2016/1/20.
 */
//创建xhr的过程封装
function createXHR() {
    var xhr = null;
    if (XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }else{
        xhr = ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);
    }
    return xhr;
}

//把异步请求封装
function ajax(type, url, data, async, success, error) {
    var xhr = createXHR();
    type = type == &quot;get&quot;?&quot;get&quot;:&quot;post&quot;;
    async = async ? true : false;
    xhr.open(type, url, async);
    //3 注册状态发生改变的时间
    if (type == &quot;post&quot;) {
        xhr.setRequestHeader(&quot;Content-Type&quot;,&quot;application/x-www-form-urlencoded&quot;);
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 ){
            if(xhr.status == 200) {
                //获取服务器的数据
                var data = xhr.responseText;
                //成功的回调
                success(data);
            }else{
                //服务器出错
                error();
            }
        }
    }
    //4 发送请求
    xhr.send(data);
}

//传过来的data的样子
//data = {&quot;type&quot;:&quot;get&quot;,&quot;url&quot;:&quot;&quot;,data:null,async:true,fn,fn};
function ajax2(data) {
    var xhr,type,url,async;
    xhr = createXHR();
    type = data.type == &quot;get&quot;? &quot;get&quot;:&quot;post&quot;;
    if (data.url) {
        url = data.url;
    }
    async = data.async? true: false;

    xhr.open(type, url, async);
    //3 注册状态发生改变的时间
    if (type == &quot;post&quot;) {
        xhr.setRequestHeader(&quot;Content-Type&quot;,&quot;application/x-www-form-urlencoded&quot;);
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 ){
            if(xhr.status == 200) {
                //获取服务器的数据
                var response = xhr.responseText;
                //成功的回调
                if (typeof data.success == &quot;function&quot;) {
                    data.success(response);
                }
            }else{
                //服务器出错
                if (typeof data.error == &quot;function&quot;) {
                    data.error();
                }
            }
        }
    }
    //4 发送请求
    xhr.send(data.data);
}
</code></pre>`,11),s=[r];function u(c,d){return a(),t("div",null,s)}const x=n(o,[["render",u],["__file","29-原生Ajax.html.vue"]]);export{x as default};

import{_ as n,o as t,c as e,f as c}from"./app.b0016746.js";const s={},a=c(`<h1 id="jsonp跨域请求" tabindex="-1"><a class="header-anchor" href="#jsonp跨域请求" aria-hidden="true">#</a> JSONP跨域请求</h1><h2 id="同源策略-同域策略" tabindex="-1"><a class="header-anchor" href="#同源策略-同域策略" aria-hidden="true">#</a> 同源策略(同域策略)</h2><pre><code>同源/同域：指URL地址的协议、IP地址、端口号相同。
同源/同域策略：不同域的系统是无法相互访问的，为了保护系统。

/**********这是三个不同的域************/
http://192.168.0.3:2000  
http://192.168.0.3:3000
https://192.168.0.3:3000
</code></pre><h2 id="jsonp-做跨域访问" tabindex="-1"><a class="header-anchor" href="#jsonp-做跨域访问" aria-hidden="true">#</a> jsonp 做跨域访问</h2><pre><code>1、json和jsonp
    json: 一种数据的保存格式，就是一种数据
    jsonp: 是传递数据的方式，非官方跨域交互协议。

2、哪个标签具有跨域的能力
    link 
    img
    iframe:框架 .css布局 
    script （src具有跨域的能力，但不安全） 用js实现跨域——&gt;使用script标签

3、script标签的作用
    加载远程js文件, 加载完成后立刻执行这个代码
    script标签不管js是本地还是跨域，只要能加载，就能执行
    script加载的不一定是js文件，只要是js代码就行

4、用服务器的代码，执行客户端的js函数。
    服务器代码，在调用本地js函数的时候，将数据传递给这个函数的参数。
</code></pre><h2 id="jsonp跨域的具体实现" tabindex="-1"><a class="header-anchor" href="#jsonp跨域的具体实现" aria-hidden="true">#</a> jsonp跨域的具体实现</h2><pre><code>1、定义一个全局函数，函数名任意，但必须有一个参数，用于接收服务器端返回的数据。
2、通过DOM操作创建一个script元素
3、给script元素添加src属性，这个属性值为后端提供URL接口，这个URL需要一个参数：callback = handleData;
4、将script元素添加到body的最后
5、具体如何调用函数，由后台实现。

//全局函数
function handleData(data){
    console.log(data);
}

window.onload = function(){
    var jsonp = document.getElementById(&quot;btn&quot;);
    jsonp.onclick = function(){
        //创建一个script标签
        var script = document.createElement(&quot;script&quot;);
        //把接口地址绑定给src
        script.src = &quot;http://192.168.0.3:3000/jsonp?callback=handleData&quot;;
        //把创建的srcipt标签插入页面
        document.body.appendChild(script);
    }
}

window.onload = function(){
    //创建一个script标签
    var srcipt = document.createElement(&#39;script&#39;);
    //把接口地址绑定给src
    srcipt.src = &quot;class_91.json?callback=jsonpCallback&quot;;
    //把创建的srcipt标签插入页面
    document.boay.appendChild(srcipt);    
}
//监听回调函数
function jsonpCallback(resp){
    if(resp.result == 1){
        //for in循环对象  渲染页面
        for(var item in data){
            ......
        }        
    }
}
</code></pre>`,7),o=[a];function r(i,d){return t(),e("div",null,o)}const l=n(s,[["render",r],["__file","27-JSONP跨域请求.html.vue"]]);export{l as default};

import{_ as e,o,c as n,f as a}from"./app.7e19d012.js";const i={},t=a(`<h1 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie</h1><h2 id="http协议" tabindex="-1"><a class="header-anchor" href="#http协议" aria-hidden="true">#</a> HTTP协议</h2><pre><code>超文本传输协议, 是一个应用层的协议，由请求和响应构成。

1、客户端与服务器端数据交互的协议。
2、客户端与服务器端交互的模型。
3、HTTP是无状态的协议，不会保存请求和响应的任何数据。

为了保存交互过程中的数据，引入了Cookie的概念，保存用户客户端和服务器端的交互数据。
</code></pre><h2 id="url组成" tabindex="-1"><a class="header-anchor" href="#url组成" aria-hidden="true">#</a> url组成</h2><pre><code>协议名 + 主机名 + 端口号 + 文件路径 + 锚点(#后) + 参数(?后)
http://192.168.0.3:8080/test/index.html?id=123&amp;name=abc#page1
</code></pre><h2 id="cookie的组成" tabindex="-1"><a class="header-anchor" href="#cookie的组成" aria-hidden="true">#</a> cookie的组成</h2><pre><code>1、Cookie的组成(键值对)
    (1)name = value; 数据必须有，其他可选
    (2)expires = 数据失效的时间;
    (3)path = 数据保存的路径;
    (4)domain = 域名;
    (5)secure = 是否使用安全的https协议;

2、Cookie浏览器支持
    一般需要服务器端的支持，主流浏览器都支持cookie，除了chrome，其他浏览器都可以直接在非服务器的环境下使用，chrome中的cookie需要服务器的支持。
</code></pre><h2 id="cookie的使用" tabindex="-1"><a class="header-anchor" href="#cookie的使用" aria-hidden="true">#</a> cookie的使用</h2><h3 id="_1、添加cookie" tabindex="-1"><a class="header-anchor" href="#_1、添加cookie" aria-hidden="true">#</a> 1、添加cookie</h3><pre><code>document.cookie = &quot;user = 姬如千泷&quot;; 
</code></pre><h3 id="_2、获取cookie" tabindex="-1"><a class="header-anchor" href="#_2、获取cookie" aria-hidden="true">#</a> 2、获取cookie</h3><pre><code>var cookieString = document.cookie;
window.onload = function(){
    var h1 = document.getElementsByTagName(&quot;h1&quot;)[0];
    h1.innerHTML = cookieString; 
}
</code></pre><h3 id="_3、expires失效时间" tabindex="-1"><a class="header-anchor" href="#_3、expires失效时间" aria-hidden="true">#</a> 3、expires失效时间</h3><pre><code>默认cookie的过期时间，会话结束即关闭浏览器时

//手动设置cookie的失效时间
var date = new Date();       //当前时间
var curDate = new Date();
date.setDate(curDate + 7);   //产生7天后的时间
document.cookie = &quot;user = 姬如千泷; expires = &quot; + date;
</code></pre><h3 id="_4、网络传输时-会出现中文乱码问题-一般保存在cookie中的数据都要进行编码。" tabindex="-1"><a class="header-anchor" href="#_4、网络传输时-会出现中文乱码问题-一般保存在cookie中的数据都要进行编码。" aria-hidden="true">#</a> 4、网络传输时, 会出现中文乱码问题, 一般保存在Cookie中的数据都要进行编码。</h3><pre><code>encodeURI();
decodeURL();
encodeURIComponent();
decodeURLComponent();

对cookie编码
var uname = encodeURIComponent(&quot;荆天明&quot;);
document.cookie = &quot;user = &quot; + uname + &quot;;expires = &quot; + date; 

对cookie解码
h1.innerHTML = decodeURIComponent(cookieString); 
</code></pre><h3 id="_5、设置path属性" tabindex="-1"><a class="header-anchor" href="#_5、设置path属性" aria-hidden="true">#</a> 5、设置path属性</h3><pre><code>只有path下的资源，才有权访问这个cookie
</code></pre><h3 id="_6、删除cookie" tabindex="-1"><a class="header-anchor" href="#_6、删除cookie" aria-hidden="true">#</a> 6、删除cookie</h3><pre><code>将cookie的过期时间设置为当前时间之前的时间

btn.onclick = function(){
    方式一
    date = new Date();
    date.setDate(date.getDate() - 1);
    方式二
    date = new Date(0);
    document.cookie = &quot;user = 姬如千泷; expires = &quot; + date; 
}
</code></pre><h2 id="cookie局限性" tabindex="-1"><a class="header-anchor" href="#cookie局限性" aria-hidden="true">#</a> cookie局限性</h2><pre><code>1、每个特定域名下最多生成20个cookie，不同浏览器个数不同。
2、cookie最大约4k，为了兼容性，不能超过4k。
3、cookie安全性不高，密码等不要放。
</code></pre><h2 id="cookie的封装" tabindex="-1"><a class="header-anchor" href="#cookie的封装" aria-hidden="true">#</a> cookie的封装</h2><h3 id="_1、添加cookie函数封装" tabindex="-1"><a class="header-anchor" href="#_1、添加cookie函数封装" aria-hidden="true">#</a> 1、添加cookie函数封装</h3><pre><code>function addCookie(name,value,expires,path){
    var cookieString = name + &quot;=&quot; + value;
    if(expires){
        cookieString += &quot;;expires&quot; + expires;
    }
    if(path){
        cookieString += &quot;;path&quot; + path;
    }
    document.cookie = cookieString;
}

测试：
var date1 = new Date();
date1.setDate(date1.getDate() + 7);
var path = &quot;/coding/test&quot;
addCookie(&quot;userName&quot;,&quot;姬如千泷&quot;,date1,path);
</code></pre><h3 id="_2、获得cookie函数封装" tabindex="-1"><a class="header-anchor" href="#_2、获得cookie函数封装" aria-hidden="true">#</a> 2、获得cookie函数封装</h3><pre><code>function getCookie(name){
    var value = null;
    var cookieString = document.cookie;
    if(cookieString.indexOf(&quot;;&quot;) != -1){        //有多个cookie
        var cookies = cookieString.split(&quot;;&quot;);
        for(var i = 0 ; i &lt; cookies.length ; i++){
            var c = cookies[i];
            if(c.indexOf(name) != -1){
                var index = c.indexOf(&quot;=&quot;);
                value = c.substring(index + 1);
                break;
            }
        }
    }else if(cookieString.indexOf(nsme) != -1){  //单个cookie
        var index = c.indexOf(&quot;=&quot;);
        value = c.substring(index + 1);
    }else{
        value = null;
    }
    return value;
}

测试：
var val = getCookie(&quot;userName&quot;);
alert(val);
</code></pre>`,27),r=[t];function c(d,h){return o(),n("div",null,r)}const k=e(i,[["render",c],["__file","25-cookie.html.vue"]]);export{k as default};

import{_ as e,o as a,c as t,f as n}from"./app.e56a07d8.js";const r={},d=n(`<h1 id="ajax异步通信" tabindex="-1"><a class="header-anchor" href="#ajax异步通信" aria-hidden="true">#</a> Ajax异步通信</h1><pre><code>事件是异步的
</code></pre><h2 id="常见服务器" tabindex="-1"><a class="header-anchor" href="#常见服务器" aria-hidden="true">#</a> 常见服务器</h2><pre><code>IIS(微软)
Kangle
WebLogic
Apache
Tomcat
Node    Node.js的包管理器，是全球最大的开源生态系统。
</code></pre><h2 id="什么是ajax-异步的javascript和xml" tabindex="-1"><a class="header-anchor" href="#什么是ajax-异步的javascript和xml" aria-hidden="true">#</a> 什么是Ajax(异步的JavaScript和XML)</h2><pre><code>用Ajax技术不必刷新整个页面，只需对页面的局部进行更新。
可以节省网络带宽，提高页面的加载速度，缩短用户等待时间，改善用户体验。

同步和异步
同步：发送请求——&gt;等待响应，期间浏览器不可以做其他的事情
异步：发送请求——&gt;等待响应，期间浏览器可以做其他事情
</code></pre><h2 id="ajax异步通信-1" tabindex="-1"><a class="header-anchor" href="#ajax异步通信-1" aria-hidden="true">#</a> ajax异步通信</h2><h3 id="_1、创建xmlhttprequest对象" tabindex="-1"><a class="header-anchor" href="#_1、创建xmlhttprequest对象" aria-hidden="true">#</a> 1、创建XMLHttpRequest对象</h3><pre><code>XMLHttpRequest对象(IE5和IE6使用ActiveXObject)是ajax异步通信 实现的核心,用于在前端与服务器端交换数据。

/************ IE5、IE6兼容 ********************
    var ajax = null;
    if(XMLHttpRequest){
        ajax = new XMLHttpRequest();
    }else{
        ajax = new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);
    }

    var ajax = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);
********************************************/
</code></pre><h3 id="_2、open-method-url-初始化请求" tabindex="-1"><a class="header-anchor" href="#_2、open-method-url-初始化请求" aria-hidden="true">#</a> 2、open(method,url);初始化请求</h3><pre><code>/*open(method,url,true);配置http请求
(1)参数一：请求方法method : 
    get : 获取数据,也可以提交数据量小安全性低的数据
    post : 提交数据,提交数据量大,安全
(2)参数二：url请求资源的路径(后端开发人员会提供)

(3)参数三：是否异步，true默认*/

/****** 例:告诉http，用get方式访问资源********/
ajax.open(&quot;get&quot;,&quot;http://...//ajaxTest&quot;);
</code></pre><h3 id="_3、send-data-真正的向服务器发送请求" tabindex="-1"><a class="header-anchor" href="#_3、send-data-真正的向服务器发送请求" aria-hidden="true">#</a> 3、send(data);真正的向服务器发送请求</h3><pre><code>data:发送给服务器的数据，post方式传参, get方式不传参。

/*********** 1、get方式不传参 *****************/
ajax.open(&quot;GET&quot;,&quot;http://.../ajaxGet&quot;);
ajax.send(null);


/*********** 2、get方式传参 —— ?传参 **********/
http协议发送参数的语法url ? 名值对1 &amp; 名值对2 &amp; 名值对3 ...

ajax.open(&quot;GET&quot;,&quot;http://.../ajaxGet?name=zs&amp;age=20&amp;sex=man;&quot;);
ajax.send(null);


/*********** 3、post方式传参 —— 字符串 ********/
post发送数据先设置请求头，告诉http协议，发送post请求

ajax.setRequestHeader(&quot;Content-type&quot;,&quot;applicction/x-www-form-urlencoded&quot;);
ajax.send(&quot;name=zs&amp;age=20&amp;sex=man&quot;);
</code></pre><h3 id="_4、onreadystatechange响应状态改变事件-监听响应状态" tabindex="-1"><a class="header-anchor" href="#_4、onreadystatechange响应状态改变事件-监听响应状态" aria-hidden="true">#</a> 4、onreadystatechange响应状态改变事件，监听响应状态</h3><pre><code>ajax.readyState == 4;  响应就绪
ajax.status == 200;    响应资源就绪
ajax.responseText || ajax.responseXML;     响应数据
</code></pre><h2 id="获取响应数据-服务器发送给客户端的数据" tabindex="-1"><a class="header-anchor" href="#获取响应数据-服务器发送给客户端的数据" aria-hidden="true">#</a> 获取响应数据(服务器发送给客户端的数据)</h2><h3 id="_1、onreadystatechange-响应事件" tabindex="-1"><a class="header-anchor" href="#_1、onreadystatechange-响应事件" aria-hidden="true">#</a> 1、onreadystatechange : 响应事件</h3><pre><code>响应状态改变事件，监听响应状态。
监听数据是否就绪; 若响应，通知浏览器处理响应
</code></pre><h3 id="_2、readystate-响应状态" tabindex="-1"><a class="header-anchor" href="#_2、readystate-响应状态" aria-hidden="true">#</a> 2、readystate : 响应状态</h3><pre><code>(1) 0 ：请求未初始化,仅创建通信对象
(2) 1 : 请求初始化,服务器连接已建立
(3) 2 : 请求已接受
(4) 3 : 请求处理中
(5) 4 : 请求已完成，且响应已就绪 (所有浏览器都有第四个状态)
</code></pre><h3 id="_3、state-响应资源是否就绪" tabindex="-1"><a class="header-anchor" href="#_3、state-响应资源是否就绪" aria-hidden="true">#</a> 3、state ：响应资源是否就绪</h3><pre><code>(1) 200 : OK
(2) 404 : 请求失败
</code></pre><h3 id="_4、responsetext-获取响应数据json格式" tabindex="-1"><a class="header-anchor" href="#_4、responsetext-获取响应数据json格式" aria-hidden="true">#</a> 4、responseText : 获取响应数据json格式</h3><pre><code>responseText: json格式
responseXML: XML格式
</code></pre><h2 id="综合测试" tabindex="-1"><a class="header-anchor" href="#综合测试" aria-hidden="true">#</a> 综合测试</h2><pre><code>右击文件夹
点击open terminal here，出现窗口命令
输入：npm start
若在本地访问，打开server.js  
   将app.listen(3000,&quot;192.268.0.3&quot;)改为app.listen(3000);
访问
   (1)http://192.168.0.3:3000/ajaxTest
   (2)localhost:3000
</code></pre>`,26),o=[d];function h(s,c){return a(),t("div",null,o)}const i=e(r,[["render",h],["__file","28-Ajax异步通信.html.vue"]]);export{i as default};

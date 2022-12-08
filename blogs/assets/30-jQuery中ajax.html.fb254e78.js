import{_ as t,o as a,c as e,f as n}from"./app.7e19d012.js";const o={},r=n(`<h1 id="jquery中ajax" tabindex="-1"><a class="header-anchor" href="#jquery中ajax" aria-hidden="true">#</a> jQuery中ajax</h1><h2 id="ajax请求" tabindex="-1"><a class="header-anchor" href="#ajax请求" aria-hidden="true">#</a> ajax请求</h2><ul><li>$.get() 发起get请求(图片、html、xml、json)</li><li>$.getJSON() 发起GET请求(数据必须为JSON)</li><li>$.post() 发起post请求(上传头像、上传文件)</li><li>$.ajax() 发起GET/POST请求 跨域时候可以使用JSONP</li></ul><h2 id="一、get请求" tabindex="-1"><a class="header-anchor" href="#一、get请求" aria-hidden="true">#</a> 一、get请求</h2><pre><code>get(url,[data],[callback])

url 访问的接口地址
data:待发送 Key/value 参数。
callback:载入成功时回调函数。
</code></pre><hr><pre><code>var url = &quot;http://192.168.0.3/project/artist/api/public/index.php?m=main&amp;a=list&quot;;
$.get(listUrl,{},function (result) {
      console.log(&quot;r = &quot;+result);
      console.log(&quot;type = &quot;+typeof(result));
      //JSON解析
      //把JSON字符串转化为Javascript的对象或数组
      var dict = JSON.parse(result);
}
//也可以将参数写到对象里面
listUrl = http://192.168.0.3/project/artist/api/public/index.php;
$.get(listUrl,{m:&quot;main&quot;,a:&quot;list&quot;},function (result) {}
</code></pre><h2 id="二、getjson请求" tabindex="-1"><a class="header-anchor" href="#二、getjson请求" aria-hidden="true">#</a> 二、getJSON请求</h2><pre><code>请求的是JSON数据不需要在进行JSON数据转化
$.getJSON(listUrl,{},function (obj) {} 
请求过来的obj就是json数据转化好的对象
</code></pre><h2 id="三、post请求" tabindex="-1"><a class="header-anchor" href="#三、post请求" aria-hidden="true">#</a> 三、post请求</h2><pre><code>和get参数是一样的不过传递的参数要放到对象里面
post请求要比get请求安全，传递的数据不会显示出来，通过一定的加密方式进行传输

$.post(url,{&quot;m&quot;:&quot;main&quot;,&quot;a&quot;:&quot;list&quot;},function(data){}
</code></pre><h2 id="四、ajax请求" tabindex="-1"><a class="header-anchor" href="#四、ajax请求" aria-hidden="true">#</a> 四、ajax请求</h2><p>参数较多就介绍常用的参数</p><pre><code>url： 路径，接口
type： 请求类型
data： 参数存放
async： 同异步，true是异步，false是同步
timeout: 设置请求超时时间(毫秒)
datatype： 数据类型(xml、html、script、json、jsonp、text)
success：function(data,textStatus){}返回成功数据
    data 可能是XMLDoc、jsonObj、html、text
    textStatus状态码一般可以省略
error：function(XMLHttpRequest、textStatus、errorThrown){}返回
    XMLHttpRequest: 错误信息、捕获的错文对象
    通常情况下textStatus、errorThrown只有一个包含信息
</code></pre><hr><pre><code>$.ajax({
        url:listurl,
        type:&quot;GET&quot;,
        data:{
            &quot;m&quot;:&quot;main&quot;,
            &quot;a&quot;:&quot;list&quot;
        },
        async:true,
        datatype:&quot;json&quot;,
        success:function(data){
            var obj = JSON.parse(data);
            var datas = obj.data;
            for (var i = 0; i &lt; datas.length; i++) {
                console.log(datas[i].title);
            }
            console.log(&quot;-------ajax--------&quot;);
        }
    });
</code></pre>`,16),s=[r];function u(i,l){return a(),e("div",null,s)}const d=t(o,[["render",u],["__file","30-jQuery中ajax.html.vue"]]);export{d as default};

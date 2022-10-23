import{_ as t,o as a,c as e,f as n}from"./app.2a2bf6f1.js";const o={},r=n(`<h1 id="jquery\u4E2Dajax" tabindex="-1"><a class="header-anchor" href="#jquery\u4E2Dajax" aria-hidden="true">#</a> jQuery\u4E2Dajax</h1><h2 id="ajax\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#ajax\u8BF7\u6C42" aria-hidden="true">#</a> ajax\u8BF7\u6C42</h2><ul><li>$.get() \u53D1\u8D77get\u8BF7\u6C42(\u56FE\u7247\u3001html\u3001xml\u3001json)</li><li>$.getJSON() \u53D1\u8D77GET\u8BF7\u6C42(\u6570\u636E\u5FC5\u987B\u4E3AJSON)</li><li>$.post() \u53D1\u8D77post\u8BF7\u6C42(\u4E0A\u4F20\u5934\u50CF\u3001\u4E0A\u4F20\u6587\u4EF6)</li><li>$.ajax() \u53D1\u8D77GET/POST\u8BF7\u6C42 \u8DE8\u57DF\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528JSONP</li></ul><h2 id="\u4E00\u3001get\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001get\u8BF7\u6C42" aria-hidden="true">#</a> \u4E00\u3001get\u8BF7\u6C42</h2><pre><code>get(url,[data],[callback])

url \u8BBF\u95EE\u7684\u63A5\u53E3\u5730\u5740
data:\u5F85\u53D1\u9001 Key/value \u53C2\u6570\u3002
callback:\u8F7D\u5165\u6210\u529F\u65F6\u56DE\u8C03\u51FD\u6570\u3002
</code></pre><hr><pre><code>var url = &quot;http://192.168.0.3/project/artist/api/public/index.php?m=main&amp;a=list&quot;;
$.get(listUrl,{},function (result) {
      console.log(&quot;r = &quot;+result);
      console.log(&quot;type = &quot;+typeof(result));
      //JSON\u89E3\u6790
      //\u628AJSON\u5B57\u7B26\u4E32\u8F6C\u5316\u4E3AJavascript\u7684\u5BF9\u8C61\u6216\u6570\u7EC4
      var dict = JSON.parse(result);
}
//\u4E5F\u53EF\u4EE5\u5C06\u53C2\u6570\u5199\u5230\u5BF9\u8C61\u91CC\u9762
listUrl = http://192.168.0.3/project/artist/api/public/index.php;
$.get(listUrl,{m:&quot;main&quot;,a:&quot;list&quot;},function (result) {}
</code></pre><h2 id="\u4E8C\u3001getjson\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001getjson\u8BF7\u6C42" aria-hidden="true">#</a> \u4E8C\u3001getJSON\u8BF7\u6C42</h2><pre><code>\u8BF7\u6C42\u7684\u662FJSON\u6570\u636E\u4E0D\u9700\u8981\u5728\u8FDB\u884CJSON\u6570\u636E\u8F6C\u5316
$.getJSON(listUrl,{},function (obj) {} 
\u8BF7\u6C42\u8FC7\u6765\u7684obj\u5C31\u662Fjson\u6570\u636E\u8F6C\u5316\u597D\u7684\u5BF9\u8C61
</code></pre><h2 id="\u4E09\u3001post\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001post\u8BF7\u6C42" aria-hidden="true">#</a> \u4E09\u3001post\u8BF7\u6C42</h2><pre><code>\u548Cget\u53C2\u6570\u662F\u4E00\u6837\u7684\u4E0D\u8FC7\u4F20\u9012\u7684\u53C2\u6570\u8981\u653E\u5230\u5BF9\u8C61\u91CC\u9762
post\u8BF7\u6C42\u8981\u6BD4get\u8BF7\u6C42\u5B89\u5168\uFF0C\u4F20\u9012\u7684\u6570\u636E\u4E0D\u4F1A\u663E\u793A\u51FA\u6765\uFF0C\u901A\u8FC7\u4E00\u5B9A\u7684\u52A0\u5BC6\u65B9\u5F0F\u8FDB\u884C\u4F20\u8F93

$.post(url,{&quot;m&quot;:&quot;main&quot;,&quot;a&quot;:&quot;list&quot;},function(data){}
</code></pre><h2 id="\u56DB\u3001ajax\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001ajax\u8BF7\u6C42" aria-hidden="true">#</a> \u56DB\u3001ajax\u8BF7\u6C42</h2><p>\u53C2\u6570\u8F83\u591A\u5C31\u4ECB\u7ECD\u5E38\u7528\u7684\u53C2\u6570</p><pre><code>url\uFF1A \u8DEF\u5F84\uFF0C\u63A5\u53E3
type\uFF1A \u8BF7\u6C42\u7C7B\u578B
data\uFF1A \u53C2\u6570\u5B58\u653E
async\uFF1A \u540C\u5F02\u6B65\uFF0Ctrue\u662F\u5F02\u6B65\uFF0Cfalse\u662F\u540C\u6B65
timeout: \u8BBE\u7F6E\u8BF7\u6C42\u8D85\u65F6\u65F6\u95F4(\u6BEB\u79D2)
datatype\uFF1A \u6570\u636E\u7C7B\u578B(xml\u3001html\u3001script\u3001json\u3001jsonp\u3001text)
success\uFF1Afunction(data,textStatus){}\u8FD4\u56DE\u6210\u529F\u6570\u636E
    data \u53EF\u80FD\u662FXMLDoc\u3001jsonObj\u3001html\u3001text
    textStatus\u72B6\u6001\u7801\u4E00\u822C\u53EF\u4EE5\u7701\u7565
error\uFF1Afunction(XMLHttpRequest\u3001textStatus\u3001errorThrown){}\u8FD4\u56DE
    XMLHttpRequest: \u9519\u8BEF\u4FE1\u606F\u3001\u6355\u83B7\u7684\u9519\u6587\u5BF9\u8C61
    \u901A\u5E38\u60C5\u51B5\u4E0BtextStatus\u3001errorThrown\u53EA\u6709\u4E00\u4E2A\u5305\u542B\u4FE1\u606F
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
</code></pre>`,16),s=[r];function u(i,l){return a(),e("div",null,s)}const d=t(o,[["render",u],["__file","30-jQuery\u4E2Dajax.html.vue"]]);export{d as default};

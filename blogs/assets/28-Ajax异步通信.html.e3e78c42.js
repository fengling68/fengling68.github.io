import{_ as e,o as a,c as t,f as n}from"./app.85843c09.js";const r={},d=n(`<h1 id="ajax\u5F02\u6B65\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#ajax\u5F02\u6B65\u901A\u4FE1" aria-hidden="true">#</a> Ajax\u5F02\u6B65\u901A\u4FE1</h1><pre><code>\u4E8B\u4EF6\u662F\u5F02\u6B65\u7684
</code></pre><h2 id="\u5E38\u89C1\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u670D\u52A1\u5668" aria-hidden="true">#</a> \u5E38\u89C1\u670D\u52A1\u5668</h2><pre><code>IIS(\u5FAE\u8F6F)
Kangle
WebLogic
Apache
Tomcat
Node    Node.js\u7684\u5305\u7BA1\u7406\u5668\uFF0C\u662F\u5168\u7403\u6700\u5927\u7684\u5F00\u6E90\u751F\u6001\u7CFB\u7EDF\u3002
</code></pre><h2 id="\u4EC0\u4E48\u662Fajax-\u5F02\u6B65\u7684javascript\u548Cxml" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Fajax-\u5F02\u6B65\u7684javascript\u548Cxml" aria-hidden="true">#</a> \u4EC0\u4E48\u662FAjax(\u5F02\u6B65\u7684JavaScript\u548CXML)</h2><pre><code>\u7528Ajax\u6280\u672F\u4E0D\u5FC5\u5237\u65B0\u6574\u4E2A\u9875\u9762\uFF0C\u53EA\u9700\u5BF9\u9875\u9762\u7684\u5C40\u90E8\u8FDB\u884C\u66F4\u65B0\u3002
\u53EF\u4EE5\u8282\u7701\u7F51\u7EDC\u5E26\u5BBD\uFF0C\u63D0\u9AD8\u9875\u9762\u7684\u52A0\u8F7D\u901F\u5EA6\uFF0C\u7F29\u77ED\u7528\u6237\u7B49\u5F85\u65F6\u95F4\uFF0C\u6539\u5584\u7528\u6237\u4F53\u9A8C\u3002

\u540C\u6B65\u548C\u5F02\u6B65
\u540C\u6B65\uFF1A\u53D1\u9001\u8BF7\u6C42\u2014\u2014&gt;\u7B49\u5F85\u54CD\u5E94\uFF0C\u671F\u95F4\u6D4F\u89C8\u5668\u4E0D\u53EF\u4EE5\u505A\u5176\u4ED6\u7684\u4E8B\u60C5
\u5F02\u6B65\uFF1A\u53D1\u9001\u8BF7\u6C42\u2014\u2014&gt;\u7B49\u5F85\u54CD\u5E94\uFF0C\u671F\u95F4\u6D4F\u89C8\u5668\u53EF\u4EE5\u505A\u5176\u4ED6\u4E8B\u60C5
</code></pre><h2 id="ajax\u5F02\u6B65\u901A\u4FE1-1" tabindex="-1"><a class="header-anchor" href="#ajax\u5F02\u6B65\u901A\u4FE1-1" aria-hidden="true">#</a> ajax\u5F02\u6B65\u901A\u4FE1</h2><h3 id="_1\u3001\u521B\u5EFAxmlhttprequest\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u521B\u5EFAxmlhttprequest\u5BF9\u8C61" aria-hidden="true">#</a> 1\u3001\u521B\u5EFAXMLHttpRequest\u5BF9\u8C61</h3><pre><code>XMLHttpRequest\u5BF9\u8C61(IE5\u548CIE6\u4F7F\u7528ActiveXObject)\u662Fajax\u5F02\u6B65\u901A\u4FE1 \u5B9E\u73B0\u7684\u6838\u5FC3,\u7528\u4E8E\u5728\u524D\u7AEF\u4E0E\u670D\u52A1\u5668\u7AEF\u4EA4\u6362\u6570\u636E\u3002

/************ IE5\u3001IE6\u517C\u5BB9 ********************
    var ajax = null;
    if(XMLHttpRequest){
        ajax = new XMLHttpRequest();
    }else{
        ajax = new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);
    }

    var ajax = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);
********************************************/
</code></pre><h3 id="_2\u3001open-method-url-\u521D\u59CB\u5316\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#_2\u3001open-method-url-\u521D\u59CB\u5316\u8BF7\u6C42" aria-hidden="true">#</a> 2\u3001open(method,url);\u521D\u59CB\u5316\u8BF7\u6C42</h3><pre><code>/*open(method,url,true);\u914D\u7F6Ehttp\u8BF7\u6C42
(1)\u53C2\u6570\u4E00\uFF1A\u8BF7\u6C42\u65B9\u6CD5method : 
    get : \u83B7\u53D6\u6570\u636E,\u4E5F\u53EF\u4EE5\u63D0\u4EA4\u6570\u636E\u91CF\u5C0F\u5B89\u5168\u6027\u4F4E\u7684\u6570\u636E
    post : \u63D0\u4EA4\u6570\u636E,\u63D0\u4EA4\u6570\u636E\u91CF\u5927,\u5B89\u5168
(2)\u53C2\u6570\u4E8C\uFF1Aurl\u8BF7\u6C42\u8D44\u6E90\u7684\u8DEF\u5F84(\u540E\u7AEF\u5F00\u53D1\u4EBA\u5458\u4F1A\u63D0\u4F9B)

(3)\u53C2\u6570\u4E09\uFF1A\u662F\u5426\u5F02\u6B65\uFF0Ctrue\u9ED8\u8BA4*/

/****** \u4F8B:\u544A\u8BC9http\uFF0C\u7528get\u65B9\u5F0F\u8BBF\u95EE\u8D44\u6E90********/
ajax.open(&quot;get&quot;,&quot;http://...//ajaxTest&quot;);
</code></pre><h3 id="_3\u3001send-data-\u771F\u6B63\u7684\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#_3\u3001send-data-\u771F\u6B63\u7684\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42" aria-hidden="true">#</a> 3\u3001send(data);\u771F\u6B63\u7684\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42</h3><pre><code>data:\u53D1\u9001\u7ED9\u670D\u52A1\u5668\u7684\u6570\u636E\uFF0Cpost\u65B9\u5F0F\u4F20\u53C2, get\u65B9\u5F0F\u4E0D\u4F20\u53C2\u3002

/*********** 1\u3001get\u65B9\u5F0F\u4E0D\u4F20\u53C2 *****************/
ajax.open(&quot;GET&quot;,&quot;http://.../ajaxGet&quot;);
ajax.send(null);


/*********** 2\u3001get\u65B9\u5F0F\u4F20\u53C2 \u2014\u2014 ?\u4F20\u53C2 **********/
http\u534F\u8BAE\u53D1\u9001\u53C2\u6570\u7684\u8BED\u6CD5url ? \u540D\u503C\u5BF91 &amp; \u540D\u503C\u5BF92 &amp; \u540D\u503C\u5BF93 ...

ajax.open(&quot;GET&quot;,&quot;http://.../ajaxGet?name=zs&amp;age=20&amp;sex=man;&quot;);
ajax.send(null);


/*********** 3\u3001post\u65B9\u5F0F\u4F20\u53C2 \u2014\u2014 \u5B57\u7B26\u4E32 ********/
post\u53D1\u9001\u6570\u636E\u5148\u8BBE\u7F6E\u8BF7\u6C42\u5934\uFF0C\u544A\u8BC9http\u534F\u8BAE\uFF0C\u53D1\u9001post\u8BF7\u6C42

ajax.setRequestHeader(&quot;Content-type&quot;,&quot;applicction/x-www-form-urlencoded&quot;);
ajax.send(&quot;name=zs&amp;age=20&amp;sex=man&quot;);
</code></pre><h3 id="_4\u3001onreadystatechange\u54CD\u5E94\u72B6\u6001\u6539\u53D8\u4E8B\u4EF6-\u76D1\u542C\u54CD\u5E94\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_4\u3001onreadystatechange\u54CD\u5E94\u72B6\u6001\u6539\u53D8\u4E8B\u4EF6-\u76D1\u542C\u54CD\u5E94\u72B6\u6001" aria-hidden="true">#</a> 4\u3001onreadystatechange\u54CD\u5E94\u72B6\u6001\u6539\u53D8\u4E8B\u4EF6\uFF0C\u76D1\u542C\u54CD\u5E94\u72B6\u6001</h3><pre><code>ajax.readyState == 4;  \u54CD\u5E94\u5C31\u7EEA
ajax.status == 200;    \u54CD\u5E94\u8D44\u6E90\u5C31\u7EEA
ajax.responseText || ajax.responseXML;     \u54CD\u5E94\u6570\u636E
</code></pre><h2 id="\u83B7\u53D6\u54CD\u5E94\u6570\u636E-\u670D\u52A1\u5668\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u7684\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u54CD\u5E94\u6570\u636E-\u670D\u52A1\u5668\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u7684\u6570\u636E" aria-hidden="true">#</a> \u83B7\u53D6\u54CD\u5E94\u6570\u636E(\u670D\u52A1\u5668\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u7684\u6570\u636E)</h2><h3 id="_1\u3001onreadystatechange-\u54CD\u5E94\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1\u3001onreadystatechange-\u54CD\u5E94\u4E8B\u4EF6" aria-hidden="true">#</a> 1\u3001onreadystatechange : \u54CD\u5E94\u4E8B\u4EF6</h3><pre><code>\u54CD\u5E94\u72B6\u6001\u6539\u53D8\u4E8B\u4EF6\uFF0C\u76D1\u542C\u54CD\u5E94\u72B6\u6001\u3002
\u76D1\u542C\u6570\u636E\u662F\u5426\u5C31\u7EEA; \u82E5\u54CD\u5E94\uFF0C\u901A\u77E5\u6D4F\u89C8\u5668\u5904\u7406\u54CD\u5E94
</code></pre><h3 id="_2\u3001readystate-\u54CD\u5E94\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_2\u3001readystate-\u54CD\u5E94\u72B6\u6001" aria-hidden="true">#</a> 2\u3001readystate : \u54CD\u5E94\u72B6\u6001</h3><pre><code>(1) 0 \uFF1A\u8BF7\u6C42\u672A\u521D\u59CB\u5316,\u4EC5\u521B\u5EFA\u901A\u4FE1\u5BF9\u8C61
(2) 1 : \u8BF7\u6C42\u521D\u59CB\u5316,\u670D\u52A1\u5668\u8FDE\u63A5\u5DF2\u5EFA\u7ACB
(3) 2 : \u8BF7\u6C42\u5DF2\u63A5\u53D7
(4) 3 : \u8BF7\u6C42\u5904\u7406\u4E2D
(5) 4 : \u8BF7\u6C42\u5DF2\u5B8C\u6210\uFF0C\u4E14\u54CD\u5E94\u5DF2\u5C31\u7EEA (\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u6709\u7B2C\u56DB\u4E2A\u72B6\u6001)
</code></pre><h3 id="_3\u3001state-\u54CD\u5E94\u8D44\u6E90\u662F\u5426\u5C31\u7EEA" tabindex="-1"><a class="header-anchor" href="#_3\u3001state-\u54CD\u5E94\u8D44\u6E90\u662F\u5426\u5C31\u7EEA" aria-hidden="true">#</a> 3\u3001state \uFF1A\u54CD\u5E94\u8D44\u6E90\u662F\u5426\u5C31\u7EEA</h3><pre><code>(1) 200 : OK
(2) 404 : \u8BF7\u6C42\u5931\u8D25
</code></pre><h3 id="_4\u3001responsetext-\u83B7\u53D6\u54CD\u5E94\u6570\u636Ejson\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#_4\u3001responsetext-\u83B7\u53D6\u54CD\u5E94\u6570\u636Ejson\u683C\u5F0F" aria-hidden="true">#</a> 4\u3001responseText : \u83B7\u53D6\u54CD\u5E94\u6570\u636Ejson\u683C\u5F0F</h3><pre><code>responseText: json\u683C\u5F0F
responseXML: XML\u683C\u5F0F
</code></pre><h2 id="\u7EFC\u5408\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u7EFC\u5408\u6D4B\u8BD5" aria-hidden="true">#</a> \u7EFC\u5408\u6D4B\u8BD5</h2><pre><code>\u53F3\u51FB\u6587\u4EF6\u5939
\u70B9\u51FBopen terminal here\uFF0C\u51FA\u73B0\u7A97\u53E3\u547D\u4EE4
\u8F93\u5165\uFF1Anpm start
\u82E5\u5728\u672C\u5730\u8BBF\u95EE\uFF0C\u6253\u5F00server.js  
   \u5C06app.listen(3000,&quot;192.268.0.3&quot;)\u6539\u4E3Aapp.listen(3000);
\u8BBF\u95EE
   (1)http://192.168.0.3:3000/ajaxTest
   (2)localhost:3000
</code></pre>`,26),o=[d];function h(s,c){return a(),t("div",null,o)}const i=e(r,[["render",h],["__file","28-Ajax\u5F02\u6B65\u901A\u4FE1.html.vue"]]);export{i as default};

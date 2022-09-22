import{_ as e,o,c as n,a}from"./app.a53f2438.js";const i={},t=a(`<h1 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie</h1><h2 id="http\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#http\u534F\u8BAE" aria-hidden="true">#</a> HTTP\u534F\u8BAE</h2><pre><code>\u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAE, \u662F\u4E00\u4E2A\u5E94\u7528\u5C42\u7684\u534F\u8BAE\uFF0C\u7531\u8BF7\u6C42\u548C\u54CD\u5E94\u6784\u6210\u3002

1\u3001\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u5668\u7AEF\u6570\u636E\u4EA4\u4E92\u7684\u534F\u8BAE\u3002
2\u3001\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u5668\u7AEF\u4EA4\u4E92\u7684\u6A21\u578B\u3002
3\u3001HTTP\u662F\u65E0\u72B6\u6001\u7684\u534F\u8BAE\uFF0C\u4E0D\u4F1A\u4FDD\u5B58\u8BF7\u6C42\u548C\u54CD\u5E94\u7684\u4EFB\u4F55\u6570\u636E\u3002

\u4E3A\u4E86\u4FDD\u5B58\u4EA4\u4E92\u8FC7\u7A0B\u4E2D\u7684\u6570\u636E\uFF0C\u5F15\u5165\u4E86Cookie\u7684\u6982\u5FF5\uFF0C\u4FDD\u5B58\u7528\u6237\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u7AEF\u7684\u4EA4\u4E92\u6570\u636E\u3002
</code></pre><h2 id="url\u7EC4\u6210" tabindex="-1"><a class="header-anchor" href="#url\u7EC4\u6210" aria-hidden="true">#</a> url\u7EC4\u6210</h2><pre><code>\u534F\u8BAE\u540D + \u4E3B\u673A\u540D + \u7AEF\u53E3\u53F7 + \u6587\u4EF6\u8DEF\u5F84 + \u951A\u70B9(#\u540E) + \u53C2\u6570(?\u540E)
http://192.168.0.3:8080/test/index.html?id=123&amp;name=abc#page1
</code></pre><h2 id="cookie\u7684\u7EC4\u6210" tabindex="-1"><a class="header-anchor" href="#cookie\u7684\u7EC4\u6210" aria-hidden="true">#</a> cookie\u7684\u7EC4\u6210</h2><pre><code>1\u3001Cookie\u7684\u7EC4\u6210(\u952E\u503C\u5BF9)
    (1)name = value; \u6570\u636E\u5FC5\u987B\u6709\uFF0C\u5176\u4ED6\u53EF\u9009
    (2)expires = \u6570\u636E\u5931\u6548\u7684\u65F6\u95F4;
    (3)path = \u6570\u636E\u4FDD\u5B58\u7684\u8DEF\u5F84;
    (4)domain = \u57DF\u540D;
    (5)secure = \u662F\u5426\u4F7F\u7528\u5B89\u5168\u7684https\u534F\u8BAE;

2\u3001Cookie\u6D4F\u89C8\u5668\u652F\u6301
    \u4E00\u822C\u9700\u8981\u670D\u52A1\u5668\u7AEF\u7684\u652F\u6301\uFF0C\u4E3B\u6D41\u6D4F\u89C8\u5668\u90FD\u652F\u6301cookie\uFF0C\u9664\u4E86chrome\uFF0C\u5176\u4ED6\u6D4F\u89C8\u5668\u90FD\u53EF\u4EE5\u76F4\u63A5\u5728\u975E\u670D\u52A1\u5668\u7684\u73AF\u5883\u4E0B\u4F7F\u7528\uFF0Cchrome\u4E2D\u7684cookie\u9700\u8981\u670D\u52A1\u5668\u7684\u652F\u6301\u3002
</code></pre><h2 id="cookie\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#cookie\u7684\u4F7F\u7528" aria-hidden="true">#</a> cookie\u7684\u4F7F\u7528</h2><h3 id="_1\u3001\u6DFB\u52A0cookie" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u6DFB\u52A0cookie" aria-hidden="true">#</a> 1\u3001\u6DFB\u52A0cookie</h3><pre><code>document.cookie = &quot;user = \u59EC\u5982\u5343\u6CF7&quot;; 
</code></pre><h3 id="_2\u3001\u83B7\u53D6cookie" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u83B7\u53D6cookie" aria-hidden="true">#</a> 2\u3001\u83B7\u53D6cookie</h3><pre><code>var cookieString = document.cookie;
window.onload = function(){
    var h1 = document.getElementsByTagName(&quot;h1&quot;)[0];
    h1.innerHTML = cookieString; 
}
</code></pre><h3 id="_3\u3001expires\u5931\u6548\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#_3\u3001expires\u5931\u6548\u65F6\u95F4" aria-hidden="true">#</a> 3\u3001expires\u5931\u6548\u65F6\u95F4</h3><pre><code>\u9ED8\u8BA4cookie\u7684\u8FC7\u671F\u65F6\u95F4\uFF0C\u4F1A\u8BDD\u7ED3\u675F\u5373\u5173\u95ED\u6D4F\u89C8\u5668\u65F6

//\u624B\u52A8\u8BBE\u7F6Ecookie\u7684\u5931\u6548\u65F6\u95F4
var date = new Date();       //\u5F53\u524D\u65F6\u95F4
var curDate = new Date();
date.setDate(curDate + 7);   //\u4EA7\u751F7\u5929\u540E\u7684\u65F6\u95F4
document.cookie = &quot;user = \u59EC\u5982\u5343\u6CF7; expires = &quot; + date;
</code></pre><h3 id="_4\u3001\u7F51\u7EDC\u4F20\u8F93\u65F6-\u4F1A\u51FA\u73B0\u4E2D\u6587\u4E71\u7801\u95EE\u9898-\u4E00\u822C\u4FDD\u5B58\u5728cookie\u4E2D\u7684\u6570\u636E\u90FD\u8981\u8FDB\u884C\u7F16\u7801\u3002" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u7F51\u7EDC\u4F20\u8F93\u65F6-\u4F1A\u51FA\u73B0\u4E2D\u6587\u4E71\u7801\u95EE\u9898-\u4E00\u822C\u4FDD\u5B58\u5728cookie\u4E2D\u7684\u6570\u636E\u90FD\u8981\u8FDB\u884C\u7F16\u7801\u3002" aria-hidden="true">#</a> 4\u3001\u7F51\u7EDC\u4F20\u8F93\u65F6, \u4F1A\u51FA\u73B0\u4E2D\u6587\u4E71\u7801\u95EE\u9898, \u4E00\u822C\u4FDD\u5B58\u5728Cookie\u4E2D\u7684\u6570\u636E\u90FD\u8981\u8FDB\u884C\u7F16\u7801\u3002</h3><pre><code>encodeURI();
decodeURL();
encodeURIComponent();
decodeURLComponent();

\u5BF9cookie\u7F16\u7801
var uname = encodeURIComponent(&quot;\u8346\u5929\u660E&quot;);
document.cookie = &quot;user = &quot; + uname + &quot;;expires = &quot; + date; 

\u5BF9cookie\u89E3\u7801
h1.innerHTML = decodeURIComponent(cookieString); 
</code></pre><h3 id="_5\u3001\u8BBE\u7F6Epath\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u8BBE\u7F6Epath\u5C5E\u6027" aria-hidden="true">#</a> 5\u3001\u8BBE\u7F6Epath\u5C5E\u6027</h3><pre><code>\u53EA\u6709path\u4E0B\u7684\u8D44\u6E90\uFF0C\u624D\u6709\u6743\u8BBF\u95EE\u8FD9\u4E2Acookie
</code></pre><h3 id="_6\u3001\u5220\u9664cookie" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u5220\u9664cookie" aria-hidden="true">#</a> 6\u3001\u5220\u9664cookie</h3><pre><code>\u5C06cookie\u7684\u8FC7\u671F\u65F6\u95F4\u8BBE\u7F6E\u4E3A\u5F53\u524D\u65F6\u95F4\u4E4B\u524D\u7684\u65F6\u95F4

btn.onclick = function(){
    \u65B9\u5F0F\u4E00
    date = new Date();
    date.setDate(date.getDate() - 1);
    \u65B9\u5F0F\u4E8C
    date = new Date(0);
    document.cookie = &quot;user = \u59EC\u5982\u5343\u6CF7; expires = &quot; + date; 
}
</code></pre><h2 id="cookie\u5C40\u9650\u6027" tabindex="-1"><a class="header-anchor" href="#cookie\u5C40\u9650\u6027" aria-hidden="true">#</a> cookie\u5C40\u9650\u6027</h2><pre><code>1\u3001\u6BCF\u4E2A\u7279\u5B9A\u57DF\u540D\u4E0B\u6700\u591A\u751F\u621020\u4E2Acookie\uFF0C\u4E0D\u540C\u6D4F\u89C8\u5668\u4E2A\u6570\u4E0D\u540C\u3002
2\u3001cookie\u6700\u5927\u7EA64k\uFF0C\u4E3A\u4E86\u517C\u5BB9\u6027\uFF0C\u4E0D\u80FD\u8D85\u8FC74k\u3002
3\u3001cookie\u5B89\u5168\u6027\u4E0D\u9AD8\uFF0C\u5BC6\u7801\u7B49\u4E0D\u8981\u653E\u3002
</code></pre><h2 id="cookie\u7684\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#cookie\u7684\u5C01\u88C5" aria-hidden="true">#</a> cookie\u7684\u5C01\u88C5</h2><h3 id="_1\u3001\u6DFB\u52A0cookie\u51FD\u6570\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u6DFB\u52A0cookie\u51FD\u6570\u5C01\u88C5" aria-hidden="true">#</a> 1\u3001\u6DFB\u52A0cookie\u51FD\u6570\u5C01\u88C5</h3><pre><code>function addCookie(name,value,expires,path){
    var cookieString = name + &quot;=&quot; + value;
    if(expires){
        cookieString += &quot;;expires&quot; + expires;
    }
    if(path){
        cookieString += &quot;;path&quot; + path;
    }
    document.cookie = cookieString;
}

\u6D4B\u8BD5\uFF1A
var date1 = new Date();
date1.setDate(date1.getDate() + 7);
var path = &quot;/coding/test&quot;
addCookie(&quot;userName&quot;,&quot;\u59EC\u5982\u5343\u6CF7&quot;,date1,path);
</code></pre><h3 id="_2\u3001\u83B7\u5F97cookie\u51FD\u6570\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u83B7\u5F97cookie\u51FD\u6570\u5C01\u88C5" aria-hidden="true">#</a> 2\u3001\u83B7\u5F97cookie\u51FD\u6570\u5C01\u88C5</h3><pre><code>function getCookie(name){
    var value = null;
    var cookieString = document.cookie;
    if(cookieString.indexOf(&quot;;&quot;) != -1){        //\u6709\u591A\u4E2Acookie
        var cookies = cookieString.split(&quot;;&quot;);
        for(var i = 0 ; i &lt; cookies.length ; i++){
            var c = cookies[i];
            if(c.indexOf(name) != -1){
                var index = c.indexOf(&quot;=&quot;);
                value = c.substring(index + 1);
                break;
            }
        }
    }else if(cookieString.indexOf(nsme) != -1){  //\u5355\u4E2Acookie
        var index = c.indexOf(&quot;=&quot;);
        value = c.substring(index + 1);
    }else{
        value = null;
    }
    return value;
}

\u6D4B\u8BD5\uFF1A
var val = getCookie(&quot;userName&quot;);
alert(val);
</code></pre>`,27),r=[t];function c(d,h){return o(),n("div",null,r)}const k=e(i,[["render",c],["__file","25-cookie.html.vue"]]);export{k as default};

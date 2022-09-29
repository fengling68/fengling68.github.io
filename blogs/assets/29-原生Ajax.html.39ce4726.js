import{_ as n,o as a,c as t,f as e}from"./app.52f83dae.js";const o={},r=e(`<h1 id="\u539F\u751Fajax" tabindex="-1"><a class="header-anchor" href="#\u539F\u751Fajax" aria-hidden="true">#</a> \u539F\u751FAjax</h1><h1 id="ajax\u5F02\u6B65\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#ajax\u5F02\u6B65\u901A\u4FE1" aria-hidden="true">#</a> Ajax\u5F02\u6B65\u901A\u4FE1</h1><pre><code>\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u5668\u7AEF\u8BF7\u6C42\u3001\u53D1\u9001\u6570\u636E
</code></pre><h2 id="\u4F7F\u7528ajax\u7684\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528ajax\u7684\u6B65\u9AA4" aria-hidden="true">#</a> \u4F7F\u7528Ajax\u7684\u6B65\u9AA4</h2><pre><code>1\u3001\u521B\u5EFAXMLHttpRequest\u5BF9\u8C61
2\u3001\u901A\u8FC7ajax\u5BF9\u8C61\u7684open\u65B9\u6CD5\u914D\u7F6E\u8BF7\u6C42
3\u3001\u901A\u8FC7ajax\u5BF9\u8C61\u7684send\u65B9\u6CD5\u53D1\u9001\u8BF7\u6C42
4\u3001\u901A\u8FC7ajax\u5BF9\u8C61\u7684onreadystatechange\u4E8B\u4EF6\uFF0C\u76D1\u542C\u54CD\u5E94\u7684\u72B6\u6001
5\u3001\u5F53ajax.readyState == 4(\u54CD\u5E94\u5C31\u7EEA) &amp;&amp; ajax.status == 200(\u54CD\u5E94\u8D44\u6E90\u5C31\u7EEA), \u8BF4\u660E\u54CD\u5E94\u6210\u529F\u3002
6\u3001\u901A\u8FC7ajax.responseText || ajax.responseXML\u5C5E\u6027\u83B7\u53D6\u54CD\u5E94\u6570\u636E
</code></pre><h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h2><pre><code>window.onload = function(){
    /*\u83B7\u53D6\u5143\u7D20......*/
    /************* 1\u3001get\u53D1\u9001\u8BF7\u6C42\u65E0\u60E8 ***********************/
    getBtn.onclick = function(){
        //\u521B\u5EFA
        var ajax = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);
        //\u914D\u7F6E
        ajax.open(&quot;get&quot;,&quot;http://.../ajaxTest&quot;);
        //\u53D1\u9001
        ajax.send(null);
        //\u54CD\u5E94\u4E8B\u4EF6
        ajax.onreadystatechange = function(){
            //\u54CD\u5E94\u5C31\u7EEA //\u54CD\u5E94\u8D44\u6E90\u5C31\u7EEA
            if(ajax.readyState == 4 &amp;&amp; ajax.status == 200){
                console.log(&quot;\u54CD\u5E94\u5DF2\u7ECF\u5C31\u7EEA\u4E86&quot;);
                var re = ajax.responseText || ajax.responseXML;
                var data = JSON.parse(re);
                console.log(data);
            }
        }
    }


    /********** 2\u3001\u901A\u8FC7get\u4F20\u53C2\u65B9\u5F0F\u53D1\u9001\u6570\u636E ************/
    sendDataByGet.onclick = function(){
        var ajax = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);

        ajax.open(&quot;GET&quot;,&quot;http://.../ajaxGet?name=zs&amp;age=20&amp;sex=man;&quot;);
        ajax.send(null);

        //\u54CD\u5E94\u4E8B\u4EF6
        ajax.onreadystatechange = function(){
            if(ajax.readyState == 4 &amp;&amp; ajax.status == 200){   
                var re = ajax.responseText || ajax.responseXML;
                var data = JSON.parse(re);
                console.log(data);
            }
        }

    }

    /********** 3\u3001\u901A\u8FC7post\u4F20\u53C2\u65B9\u5F0F\u53D1\u9001\u6570\u636E ************/
    sendDataByPost.onclick = function(){
        var ajax = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);
        ajax.open(&quot;post&quot;,&quot;http://.../ajaxPost&quot;);
        //post\u8BBE\u7F6E\u8BF7\u6C42\u5934
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
</code></pre><h2 id="get\u548Cpost\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#get\u548Cpost\u7684\u533A\u522B" aria-hidden="true">#</a> get\u548Cpost\u7684\u533A\u522B</h2><pre><code>1\u3001\u6570\u636E\u643A\u5E26\u65B9\u5F0F\u4E0D\u540C
    GET\u8BF7\u6C42\u7684\u6570\u636E\u4F1A\u9644\u5728URL\u4E4B\u540E\uFF08\u5C31\u662F\u628A\u6570\u636E\u653E\u7F6E\u5728HTTP\u534F\u8BAE\u5934\u4E2D\uFF09\uFF0C\u4EE5?\u5206\u5272URL\u548C\u4F20\u8F93\u6570\u636E\uFF0C\u53C2\u6570\u4E4B\u95F4\u4EE5&amp;\u76F8\u8FDE\uFF0C
    POST\u628A\u63D0\u4EA4\u7684\u6570\u636E\u5219\u653E\u7F6E\u5728\u662FHTTP\u5305\u7684\u5305\u4F53\u4E2D\u3002
2\u3001\u643A\u5E26\u6570\u636E\u91CF\u4E0D\u540C
    GET\u65B9\u5F0F\u63D0\u4EA4\u7684\u6570\u636E\u6700\u591A\u53EA\u80FD\u662F1024\u5B57\u8282
    POST\u662F\u6CA1\u6709\u5927\u5C0F\u9650\u5236\u7684
3\u3001\u5B89\u5168\u6027
    POST\u65B9\u5F0F\u7684\u5B89\u5168\u6027\u9AD8\u4E8EGET\u65B9\u5F0F
4\u3001\u5E94\u7528
    GET\u662F\u5411\u670D\u52A1\u5668\u53D1\u7D22\u53D6\u6570\u636E\u7684\u4E00\u79CD\u8BF7\u6C42\uFF0C\u800CPOST\u662F\u5411\u670D\u52A1\u5668\u63D0\u4EA4\u6570\u636E\u7684\u4E00\u79CD\u8BF7\u6C42
5\u3001\u4F20\u9012\u65B9\u5F0F
    get\u6570\u636E\u62FC\u63A5\u5728url\u540E, \u952E\u503C\u5BF9\u4E4B\u95F4&amp;, \u952E\u503C\u4E4B\u95F4=, send()\u65E0\u53C2\u3002
    post\u6570\u636E\u5355\u72EC\u6253\u5305\u53D1\u9001, \u8BBE\u7F6E\u8BF7\u6C42\u5934, send()\u4F20\u53C2\u3002
</code></pre><h2 id="ajax\u7684\u5C01\u88C5-\u4E24\u79CD" tabindex="-1"><a class="header-anchor" href="#ajax\u7684\u5C01\u88C5-\u4E24\u79CD" aria-hidden="true">#</a> Ajax\u7684\u5C01\u88C5\uFF08\u4E24\u79CD\uFF09</h2><pre><code>/**
 * Created by jiaoshou on 2016/1/20.
 */
//\u521B\u5EFAxhr\u7684\u8FC7\u7A0B\u5C01\u88C5
function createXHR() {
    var xhr = null;
    if (XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }else{
        xhr = ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);
    }
    return xhr;
}

//\u628A\u5F02\u6B65\u8BF7\u6C42\u5C01\u88C5
function ajax(type, url, data, async, success, error) {
    var xhr = createXHR();
    type = type == &quot;get&quot;?&quot;get&quot;:&quot;post&quot;;
    async = async ? true : false;
    xhr.open(type, url, async);
    //3 \u6CE8\u518C\u72B6\u6001\u53D1\u751F\u6539\u53D8\u7684\u65F6\u95F4
    if (type == &quot;post&quot;) {
        xhr.setRequestHeader(&quot;Content-Type&quot;,&quot;application/x-www-form-urlencoded&quot;);
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 ){
            if(xhr.status == 200) {
                //\u83B7\u53D6\u670D\u52A1\u5668\u7684\u6570\u636E
                var data = xhr.responseText;
                //\u6210\u529F\u7684\u56DE\u8C03
                success(data);
            }else{
                //\u670D\u52A1\u5668\u51FA\u9519
                error();
            }
        }
    }
    //4 \u53D1\u9001\u8BF7\u6C42
    xhr.send(data);
}

//\u4F20\u8FC7\u6765\u7684data\u7684\u6837\u5B50
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
    //3 \u6CE8\u518C\u72B6\u6001\u53D1\u751F\u6539\u53D8\u7684\u65F6\u95F4
    if (type == &quot;post&quot;) {
        xhr.setRequestHeader(&quot;Content-Type&quot;,&quot;application/x-www-form-urlencoded&quot;);
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 ){
            if(xhr.status == 200) {
                //\u83B7\u53D6\u670D\u52A1\u5668\u7684\u6570\u636E
                var response = xhr.responseText;
                //\u6210\u529F\u7684\u56DE\u8C03
                if (typeof data.success == &quot;function&quot;) {
                    data.success(response);
                }
            }else{
                //\u670D\u52A1\u5668\u51FA\u9519
                if (typeof data.error == &quot;function&quot;) {
                    data.error();
                }
            }
        }
    }
    //4 \u53D1\u9001\u8BF7\u6C42
    xhr.send(data.data);
}
</code></pre>`,11),s=[r];function u(c,d){return a(),t("div",null,s)}const x=n(o,[["render",u],["__file","29-\u539F\u751FAjax.html.vue"]]);export{x as default};

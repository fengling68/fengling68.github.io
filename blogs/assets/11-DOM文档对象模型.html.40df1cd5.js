import{_ as e,o as t,c as n,f as o}from"./app.a71a0ebc.js";const a={},r=o(`<h1 id="dom\u6587\u6863\u5BF9\u8C61\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#dom\u6587\u6863\u5BF9\u8C61\u6A21\u578B" aria-hidden="true">#</a> DOM\u6587\u6863\u5BF9\u8C61\u6A21\u578B</h1><h2 id="dom\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#dom\u8282\u70B9" aria-hidden="true">#</a> DOM\u8282\u70B9</h2><pre><code>HTML\u7684\u6240\u6709\u5185\u5BB9\u90FD\u662F\u8282\u70B9
\u6587\u6863\u8282\u70B9  \u5143\u7D20\u8282\u70B9  \u5C5E\u6027\u8282\u70B9   \u6587\u672C\u8282\u70B9
\u7236\u8282\u70B9(parent)  \u5B50\u8282\u70B9(child)  \u5144\u5F1F\u8282\u70B9(sibling)  \u6839\u8282\u70B9(root)
</code></pre><h2 id="\u83B7\u53D6dom\u5143\u7D20\u8282\u70B9-\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6dom\u5143\u7D20\u8282\u70B9-\u6807\u7B7E" aria-hidden="true">#</a> \u83B7\u53D6DOM\u5143\u7D20\u8282\u70B9(\u6807\u7B7E)</h2><pre><code>(\u4EFB\u4F55\u5143\u7D20\u90FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5C5E\u6027name\uFF0C\u5728IE\u4E2D\u53EA\u8BC6\u522Bform\u8868\u5355\u4E2D\u7684name)

1\u3001getElementById(); \u901A\u8FC7id\u6765\u83B7\u53D6\u5143\u7D20\u8282\u70B9; \u552F\u4E00
2\u3001getElementsByTagName(); \u901A\u8FC7\u6807\u7B7E\u540D\u79F0\u83B7\u53D6\u5143\u7D20\u8282\u70B9; \u4F2A\u6570\u7EC4(\u4E0D\u4EAB\u6709\u6570\u7EC4\u7684\u65B9\u6CD5)
3\u3001getElementsByClassName(); \u901A\u8FC7\u7C7B\u540D\u83B7\u53D6\u5143\u7D20\u8282\u70B9; \u4F2A\u6570\u7EC4(IE\u4F4E\u7248\u672C\u6709\u517C\u5BB9\u6027\u95EE\u9898)
4\u3001getElementsByName(); \u901A\u8FC7name\u5C5E\u6027\u503C\u83B7\u53D6\u5143\u7D20\u8282\u70B9\u3002
5\u3001document.querySelector();\u591A\u79CD\u9009\u62E9\u5668\u83B7\u5F97\u5143\u7D20\u8282\u70B9\uFF0C\u9ED8\u8BA4\u53EA\u9009\u62E9\u7B2C\u4E00\u4E2A
    var dom1 = document.querySelector(&quot;.myUl&quot;);    //\u9009\u62E9\u7B2C\u4E00\u4E2A\u7C7B
    var dom2 = document.querySelector(&quot;#my_div&quot;);  //\u9009\u62E9\u552F\u4E00\u7684id
    var dom3 = document.querySelector(&quot;input&quot;);    //\u9009\u62E9\u7B2C\u4E00\u4E2A\u5143\u7D20\u6807\u7B7E
6\u3001document.querySelectorAll();\u901A\u8FC7\u591A\u79CD\u9009\u62E9\u5668\u83B7\u53D6\u9875\u9762\u4E2D\u7684\u6240\u6709\u5143\u7D20\u8282\u70B9\u3002
</code></pre><h2 id="\u64CD\u4F5C\u5143\u7D20\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u5143\u7D20\u8282\u70B9" aria-hidden="true">#</a> \u64CD\u4F5C\u5143\u7D20\u8282\u70B9</h2><p><strong>\u83B7\u53D6/\u8BBF\u95EE\u5C5E\u6027\u8282\u70B9</strong></p><pre><code>1\u3001\u63A7\u5236\u53F0\u8F93\u51FA    \u6309\u94AE-\u7C7B\u578Btype
    var inps = document.getElementsByTagName(&quot;input&quot;);
    console.log(inps[0].type);

2\u3001\u8F93\u51FA\u6309\u94AE\u7684\u5185\u5BB9
   console.log(inps[0].value);

3\u3001\u5728\u63A7\u5236\u53F0\u8F93\u51FAdiv\u7684\u7C7B\u540D  class\u4E0D\u80FD\u7528,\u7528className
    var divs = document.getElementsByTagName(&quot;div&quot;);
    console.log(divs[0].className);
</code></pre><p><strong>\u8BBE\u7F6E\u5C5E\u6027\u8282\u70B9\u65B9\u5F0F\u4E00( . \u8BED\u6CD5)</strong></p><pre><code>1\u3001\u7ED9div\u91CD\u8BBE\u7C7B\u540D
    divs[0].className = &quot;div&quot;;

2\u3001\u7ED9\u56FE\u7247\u8BBE\u7F6E\u8DEF\u5F84
    var imgs = document.getElementsByTagName(&quot;img&quot;);
    imgs[0].src = &quot;429902.jpg&quot;;

3\u3001\u5355\u9009\u6846\u3001\u590D\u9009\u6846\u3002\u662F\u901A\u8FC7\u5E03\u5C14\u503C\u8BBE\u7F6E\u9ED8\u8BA4\u9009\u4E2D

        var inps = document.getElementsByTagName(&quot;input&quot;);
        inps[1].checked = true;

4\u3001option\uFF0C\u901A\u8FC7\u5E03\u5C14\u503C\u8BBE\u7F6E\u4E3A\u9ED8\u8BA4\u9009\u4E2D
    var opts = document.getElementsByTagName(&quot;option&quot;);
    opts[1].selected = true;
</code></pre><p><strong>\u8BBE\u7F6E\u5C5E\u6027\u8282\u70B9\u65B9\u5F0F\u4E8C(\u81EA\u5E26\u5C5E\u6027 || \u81EA\u5B9A\u4E49\u5C5E\u6027)</strong></p><pre><code>setAttribute();   \u53C2\u6570\uFF1A\u5C5E\u6027\uFF0C\u5C5E\u6027\u503C 
getAttribute();

1\u3001\u7ED9\u6309\u94AE\u8BBE\u7F6E\u5C5E\u6027
    var inps = document.getElementsByTagName(&quot;input&quot;);
    inps[0].setAttribute(&quot;onclick&quot;,&quot;fn()&quot;);
    function fn(){alert(123);}

2\u3001\u83B7\u53D6\u5C5E\u6027
    var divs = document.getElementsByClassName(&quot;my_div&quot;);
    console.log(divs[0].getAttribute(&quot;class&quot;));
</code></pre><h2 id="\u6392\u5B83\u601D\u60F3" tabindex="-1"><a class="header-anchor" href="#\u6392\u5B83\u601D\u60F3" aria-hidden="true">#</a> \u6392\u5B83\u601D\u60F3</h2><pre><code>var btns = document.getElementsByTagName(&quot;input&quot;);
for(var i = 0 ; i &lt; btns.length ; i ++){
    btns[i].onclick = function(){

        //\u6392\u4ED6\u601D\u60F3\uFF1A\u5728\u64CD\u4F5C\u5F53\u524D\u5143\u7D20\u4E4B\u524D\uFF0C\u5148\u6E05\u9664\u4E4B\u524D\u5176\u4ED6\u7684\u6837\u5F0F
        for(var j = 0 ; j &lt; btns.length ; j++){
            //btns[j].className = &quot;old&quot;;
            btns[j].setAttribute(&quot;class&quot;,&quot;old&quot;);
        }

        //this.style.backgroundColor = &quot;red&quot;;
        //this.className = &quot;current&quot;;
        this.setAttribute(&quot;class&quot;,&quot;current&quot;);
    }
}
</code></pre>`,14),s=[r];function u(d,c){return t(),n("div",null,s)}const l=e(a,[["render",u],["__file","11-DOM\u6587\u6863\u5BF9\u8C61\u6A21\u578B.html.vue"]]);export{l as default};

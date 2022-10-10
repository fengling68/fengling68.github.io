import{_ as e,o as t,c as o,f as n}from"./app.c3d58c07.js";const r={},d=n(`<h1 id="dom\u6837\u5F0F\u548C\u5C4F\u5E55\u5C3A\u5BF8" tabindex="-1"><a class="header-anchor" href="#dom\u6837\u5F0F\u548C\u5C4F\u5E55\u5C3A\u5BF8" aria-hidden="true">#</a> DOM\u6837\u5F0F\u548C\u5C4F\u5E55\u5C3A\u5BF8</h1><h2 id="css\u6837\u5F0F\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#css\u6837\u5F0F\u64CD\u4F5C" aria-hidden="true">#</a> CSS\u6837\u5F0F\u64CD\u4F5C</h2><pre><code>\u5728JS\u4E2D\uFF0C\u5982\u679C\u6837\u5F0F\u540D\u79F0\u6709\u8FDE\u5B57\u7B26\uFF0C\u53BB\u6389\u8FDE\u5B57\u7B26\uFF0C\u9A7C\u5CF0\u547D\u540D
</code></pre><h2 id="\u83B7\u53D6css\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6css\u6837\u5F0F" aria-hidden="true">#</a> \u83B7\u53D6CSS\u6837\u5F0F</h2><p>1\u3001\u5185\u8054\u6837\u5F0F(\u884C\u5185\u6837\u5F0F)</p><pre><code>\u5143\u7D20\u8282\u70B9.style.\u6837\u5F0F\u540D\u79F0;
\u5143\u7D20\u8282\u70B9.style[&quot;\u6837\u5F0F\u540D\u79F0&quot;];

div.style.color;
p.style.width;
......
</code></pre><p>2\u3001\u975E\u5185\u8054\u6837\u5F0F</p><pre><code>IE\u6D4F\u89C8\u5668\uFF1A
 (1)\u5143\u7D20\u8282\u70B9.currentStyle.\u6837\u5F0F\u540D\u79F0
 (2)\u5143\u7D20\u8282\u70B9.currentStyle[&quot;\u6837\u5F0F\u540D\u79F0&quot;]

\u975EIE\u6D4F\u89C8\u5668\uFF1A
 (1)window.getComputedStyle(\u5143\u7D20\u8282\u70B9 , null).\u6837\u5F0F\u540D\u79F0;
 (2)window.getComputedStyle(\u5143\u7D20\u8282\u70B9 , null)[&quot;\u6837\u5F0F\u540D\u79F0&quot;];
</code></pre><p>3\u3001\u517C\u5BB9\u6027\u5904\u7406(\u975E\u5185\u8054\u6837\u5F0F)</p><pre><code>function getStyle(ele,attr){
    if(ele.currentStyle){
        return ele.currentStyle[attr];
    }else{
        return window.getComputedStyle(ele,null)[attr];
    }
}

console.log(getStyle(div1,&quot;border&quot;));
</code></pre><h2 id="\u8BBE\u7F6E\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u6837\u5F0F" aria-hidden="true">#</a> \u8BBE\u7F6E\u6837\u5F0F</h2><p>1\u3001\u8BBE\u7F6E\u5185\u8054\u6837\u5F0F</p><pre><code>\u5143\u7D20\u8282\u70B9.style.\u6837\u5F0F\u540D\u79F0 = &quot;&quot;;
</code></pre><h2 id="dom\u5404\u79CD\u5C4F\u5E55\u5C3A\u5BF8" tabindex="-1"><a class="header-anchor" href="#dom\u5404\u79CD\u5C4F\u5E55\u5C3A\u5BF8" aria-hidden="true">#</a> DOM\u5404\u79CD\u5C4F\u5E55\u5C3A\u5BF8</h2><p>1\u3001offsetWidth \u5143\u7D20\u5B9E\u9645\u5BBD\u5EA6(\u4E0D\u5E26\u5355\u4F4D)</p><p>2\u3001offsetHeight \u5143\u7D20\u5B9E\u9645\u9AD8\u5EA6(\u4E0D\u5E26\u5355\u4F4D)</p><pre><code>var myDiv = document.getElementsByTagName(&quot;div&quot;)[0];
console.log(myDiv.offsetWidth);
console.log(myDiv.offsetHeight);
</code></pre><p>3\u3001 offsetParent</p><pre><code>\u8DDD\u79BB\u5F53\u524D\u5143\u7D20\u8282\u70B9\u6700\u8FD1\u7684\u6709\u5B9A\u4F4D\u7684\u7236\u5143\u7D20\u8282\u70B9\uFF1B\u5982\u679C\u90FD\u6CA1\u5B9A\u4F4D\uFF0C\u5219\u662Fbody\u3002
</code></pre><p>4\u3001 offsetLeft \u2014\u2014left</p><pre><code>\u6709\u5B9A\u4F4D\u65F6\uFF1A\u6C34\u5E73\u65B9\u5411\u7684\u504F\u79FB\u91CF(\u4E0D\u5E26\u5355\u4F4D)\uFF1B\u6CA1\u6709\u5B9A\u4F4D\u65F6\uFF1A\u76D1\u542C\u5230body\u7684\u504F\u79FB\u91CF
</code></pre><p>5\u3001 offsetTop \u2014\u2014top</p><pre><code>\u6709\u5B9A\u4F4D\u65F6\uFF1A\u5782\u76F4\u65B9\u5411\u7684\u504F\u79FB\u91CF(\u4E0D\u5E26\u5355\u4F4D)\uFF1B\u6CA1\u6709\u5B9A\u4F4D\u65F6\uFF1A\u76D1\u542C\u5230body\u7684\u504F\u79FB\u91CF
</code></pre><h2 id="\u7F51\u9875\u5C3A\u5BF8" tabindex="-1"><a class="header-anchor" href="#\u7F51\u9875\u5C3A\u5BF8" aria-hidden="true">#</a> \u7F51\u9875\u5C3A\u5BF8</h2><pre><code>//offsetHeight :\u4E0D\u5305\u62EC\u6EDA\u52A8\u6761
//scrollHeight :\u5305\u62EC\u6EDA\u52A8\u6761

function getSize(){
    var width = document.body.offsetWidth || document.documentElement.offsetWidth;
    var height = document.body.offsetHeight || document.documentElement.offsetHeight;
    alert(width +&quot;,&quot;+height)
}
getSize();
</code></pre><h2 id="innerhtml" tabindex="-1"><a class="header-anchor" href="#innerhtml" aria-hidden="true">#</a> innerHTML</h2><p>1\u3001\u8BBE\u7F6E\u6587\u672C\u5185\u5BB9</p><pre><code>d.innerHTML = &quot;\u6211\u4ECA\u5E74&quot;+i+&quot;\u5C81\u4E86&quot;;
</code></pre><p>2\u3001\u8BC6\u522B\u6807\u7B7E</p><pre><code>d.innerHTML = &quot;&lt;a href=&#39;javascript:;&#39;&gt;\u6211\u662Fa\u6807\u7B7E&lt;/a&gt;&quot;;
</code></pre>`,30),a=[d];function c(i,h){return t(),o("div",null,a)}const l=e(r,[["render",c],["__file","14-DOM\u6837\u5F0F\u548C\u5C4F\u5E55\u5C3A\u5BF8.html.vue"]]);export{l as default};

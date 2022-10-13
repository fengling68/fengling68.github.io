import{_ as e,o as n,c as o,f as l}from"./app.f94e1640.js";const i={},r=l(`<h1 id="dom\u5C42\u7EA7\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#dom\u5C42\u7EA7\u5173\u7CFB" aria-hidden="true">#</a> DOM\u5C42\u7EA7\u5173\u7CFB</h1><h2 id="\u8868\u5355\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u8868\u5355\u5143\u7D20" aria-hidden="true">#</a> \u8868\u5355\u5143\u7D20</h2><ul><li>\u8F93\u5165\u6846\u5185\u5BB9\uFF0C\u6309\u94AE\u5185\u5BB9\uFF0C\u6587\u672C\u57DF\u5185\u5BB9\uFF0Cinput\uFF0Cfile</li><li>\u5143\u7D20\u8282\u70B9.value;</li></ul><h2 id="\u975E\u8868\u5355\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u975E\u8868\u5355\u5143\u7D20" aria-hidden="true">#</a> \u975E\u8868\u5355\u5143\u7D20</h2><ul><li>innerHTML(\u6587\u672C+\u6807\u7B7E) innerText(\u8BBE\u7F6E\u7EAF\u6587\u672C)</li></ul><p>1\u3001\u83B7\u53D6\u6587\u672C\u5185\u5BB9</p><pre><code>var myDiv = document.getElementsByTagName(&quot;div&quot;)[0];
console.log(myDiv.innerHTML);    //\u5F00\u59CB\u6807\u7B7E\u5230\u7ED3\u675F\u6807\u7B7E\u4E4B\u95F4\u7684\u90E8\u5206
console.log(myDiv.outerHTML);    //\u5F00\u59CB\u6807\u7B7E\u5230\u7ED3\u675F\u6807\u7B7E\u4E4B\u95F4\u7684\u90E8\u5206+\u6807\u7B7E\u81EA\u8EAB
console.log(myDiv.innerText);
</code></pre><p>2\u3001\u8BBE\u7F6E\u6587\u672C\u5185\u5BB9</p><pre><code>myDiv.innerHTML = &quot;\u6211\u662Fdiv &lt;p&gt;\u6211\u662Fp\u6807\u7B7E&lt;/p&gt;&quot;
myDiv.innerText = &quot;\u6211\u53EA\u80FD\u8BBE\u7F6E\u7EAF\u6587\u672C&quot;;
</code></pre><h2 id="dom\u8282\u70B9\u5C42\u7EA7\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#dom\u8282\u70B9\u5C42\u7EA7\u5173\u7CFB" aria-hidden="true">#</a> DOM\u8282\u70B9\u5C42\u7EA7\u5173\u7CFB</h2><p>1\u3001parentNode \u7236\u8282\u70B9</p><pre><code>   var son1 = document.getElementsByClassName(&quot;son1&quot;)[0];
   console.log(son1.parentNode);
</code></pre><p>2\u3001childNodes \u6240\u6709\u5B50\u8282\u70B9(\u4F46\u5B9E\u9645\u53EA\u64CD\u4F5C\u5143\u7D20\u8282\u70B9)</p><pre><code>   console.log(son1.parentNode.childNodes);
</code></pre><p>3\u3001children \u76F4\u63A5\u62FF\u5230\u5143\u7D20\u5B50\u8282\u70B9</p><pre><code>   var arrEle = son1.parentNode.children;                  //\u6240\u6709\u5B50\u5143\u7D20\u8282\u70B9
   var arrEle = son1.parentNode.children[2];               //\u7B2C\u4E09\u4E2A\u5B50\u5143\u7D20\u8282\u70B9
</code></pre><p>4\u3001firstChild \u7B2C\u4E00\u4E2A\u5B50\u8282\u70B9 //\u4E0EchildNodes\u5BF9\u5E94</p><p>5\u3001lastChild \u6700\u540E\u4E00\u4E2A\u5B50\u8282\u70B9</p><p>6\u3001firstElementChild \u7B2C\u4E00\u4E2A\u5143\u7D20\u5B50\u8282\u70B9 //\u4E0Echildren\u5BF9\u5E94</p><p>7\u3001lastElementChild \u6700\u540E\u4E00\u4E2A\u5143\u7D20\u5B50\u8282\u70B9</p><pre><code>   console.log(son1.parentNode.firstChild);
   console.log(son1.parentNode.lastChild);
   console.log(son1.parentNode.firstElementChild);
   console.log(son1.parentNode.lastElementChild);
</code></pre><p>8\u3001nextSibling \u4E0B\u4E00\u4E2A\u5144\u5F1F\u8282\u70B9 //\u4E0EchildNodes\u5BF9\u5E94</p><p>9\u3001previousSibling \u4E0A\u4E00\u4E2A\u5144\u5F1F\u8282\u70B9</p><p>10\u3001nextElementSibling \u4E0B\u4E00\u4E2A\u5143\u7D20\u5144\u5F1F\u8282\u70B9 //\u4E0Echildren\u5BF9\u5E94</p><p>11\u3001previousElementSibling \u4E0A\u4E00\u4E2A\u5143\u7D20\u5144\u5F1F\u8282\u70B9</p><pre><code>   console.log(son1.nextSibling);
   console.log(son1.previousSibling);
   console.log(son1.previousElementSibling);
   console.log(son1.nextElementSibling);
</code></pre><h2 id="\u6BCF\u4E2A\u8282\u70B9\u90FD\u6709\u4E09\u4E2A\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u6BCF\u4E2A\u8282\u70B9\u90FD\u6709\u4E09\u4E2A\u5C5E\u6027" aria-hidden="true">#</a> \u6BCF\u4E2A\u8282\u70B9\u90FD\u6709\u4E09\u4E2A\u5C5E\u6027</h2><p>1\u3001\u4E09\u4E2A\u8282\u70B9\u5C5E\u6027</p><p>\u5143\u7D20\u5C5E\u6027\uFF1AnodeType \u6240\u6709\u5143\u7D20\u8282\u70B9\u7684\u7C7B\u578B\u90FD\u662F 1 ;</p><p>\u5143\u7D20\u540D\u79F0\uFF1AnodeName</p><p>\u5143\u7D20\u503C\uFF1A nodeValue</p><pre><code>var myDiv = document.getElementById(&quot;myDiv&quot;);
console.log(myDiv.nodeType);     //\u7ED3\u679C \uFF1A1
console.log(myDiv.nodeName);     //\u7ED3\u679C \uFF1ADIV
console.log(myDiv.nodeValue);    //\u7ED3\u679C \uFF1Anull
</code></pre><p>2\u3001\u5220\u9009\u5143\u7D20\u8282\u70B9</p><pre><code>var arr = son1.parentNode.childNodes;
var newArr = [];
for(var i = 0 ; i &lt; arr.length ; i++){
    if(arr[i].nodeType == 1){
        newArr[newArr.length] = arr[i];
    }
}
</code></pre><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><ol><li><p>parentNode \u7236\u8282\u70B9</p></li><li><p>childNodes \u6240\u6709\u5B50\u8282\u70B9</p></li><li><p>firstChild \u7B2C\u4E00\u4E2A\u5B50\u8282\u70B9 //\u4E0E childNodes \u5BF9\u5E94</p></li><li><p>lastChild \u6700\u540E\u4E00\u4E2A\u5B50\u8282\u70B9</p></li><li><p>nextSibling \u4E0B\u4E00\u4E2A\u5144\u5F1F\u8282\u70B9</p></li><li><p>previousSibling \u4E0A\u4E00\u4E2A\u5144\u5F1F\u8282\u70B9</p></li><li><p>children \u76F4\u63A5\u62FF\u5230\u5143\u7D20\u5B50\u8282\u70B9</p></li><li><p>firstElementChild \u7B2C\u4E00\u4E2A\u5143\u7D20\u5B50\u8282\u70B9 //\u4E0E children \u5BF9\u5E94</p></li><li><p>lastElementChild \u6700\u540E\u4E00\u4E2A\u5143\u7D20\u5B50\u8282\u70B9</p></li><li><p>nextElementSibling \u4E0B\u4E00\u4E2A\u5143\u7D20\u5144\u5F1F\u8282\u70B9</p></li><li><p>previousElementSibling \u4E0A\u4E00\u4E2A\u5143\u7D20\u5144\u5F1F\u8282\u70B9</p></li></ol>`,36),d=[r];function p(t,a){return n(),o("div",null,d)}const c=e(i,[["render",p],["__file","12-DOM\u5C42\u7EA7\u5173\u7CFB.html.vue"]]);export{c as default};

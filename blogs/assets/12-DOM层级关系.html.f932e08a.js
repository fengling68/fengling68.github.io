import{_ as e,o as n,c as o,f as l}from"./app.b0016746.js";const i={},r=l(`<h1 id="dom层级关系" tabindex="-1"><a class="header-anchor" href="#dom层级关系" aria-hidden="true">#</a> DOM层级关系</h1><h2 id="表单元素" tabindex="-1"><a class="header-anchor" href="#表单元素" aria-hidden="true">#</a> 表单元素</h2><ul><li>输入框内容，按钮内容，文本域内容，input，file</li><li>元素节点.value;</li></ul><h2 id="非表单元素" tabindex="-1"><a class="header-anchor" href="#非表单元素" aria-hidden="true">#</a> 非表单元素</h2><ul><li>innerHTML(文本+标签) innerText(设置纯文本)</li></ul><p>1、获取文本内容</p><pre><code>var myDiv = document.getElementsByTagName(&quot;div&quot;)[0];
console.log(myDiv.innerHTML);    //开始标签到结束标签之间的部分
console.log(myDiv.outerHTML);    //开始标签到结束标签之间的部分+标签自身
console.log(myDiv.innerText);
</code></pre><p>2、设置文本内容</p><pre><code>myDiv.innerHTML = &quot;我是div &lt;p&gt;我是p标签&lt;/p&gt;&quot;
myDiv.innerText = &quot;我只能设置纯文本&quot;;
</code></pre><h2 id="dom节点层级关系" tabindex="-1"><a class="header-anchor" href="#dom节点层级关系" aria-hidden="true">#</a> DOM节点层级关系</h2><p>1、parentNode 父节点</p><pre><code>   var son1 = document.getElementsByClassName(&quot;son1&quot;)[0];
   console.log(son1.parentNode);
</code></pre><p>2、childNodes 所有子节点(但实际只操作元素节点)</p><pre><code>   console.log(son1.parentNode.childNodes);
</code></pre><p>3、children 直接拿到元素子节点</p><pre><code>   var arrEle = son1.parentNode.children;                  //所有子元素节点
   var arrEle = son1.parentNode.children[2];               //第三个子元素节点
</code></pre><p>4、firstChild 第一个子节点 //与childNodes对应</p><p>5、lastChild 最后一个子节点</p><p>6、firstElementChild 第一个元素子节点 //与children对应</p><p>7、lastElementChild 最后一个元素子节点</p><pre><code>   console.log(son1.parentNode.firstChild);
   console.log(son1.parentNode.lastChild);
   console.log(son1.parentNode.firstElementChild);
   console.log(son1.parentNode.lastElementChild);
</code></pre><p>8、nextSibling 下一个兄弟节点 //与childNodes对应</p><p>9、previousSibling 上一个兄弟节点</p><p>10、nextElementSibling 下一个元素兄弟节点 //与children对应</p><p>11、previousElementSibling 上一个元素兄弟节点</p><pre><code>   console.log(son1.nextSibling);
   console.log(son1.previousSibling);
   console.log(son1.previousElementSibling);
   console.log(son1.nextElementSibling);
</code></pre><h2 id="每个节点都有三个属性" tabindex="-1"><a class="header-anchor" href="#每个节点都有三个属性" aria-hidden="true">#</a> 每个节点都有三个属性</h2><p>1、三个节点属性</p><p>元素属性：nodeType 所有元素节点的类型都是 1 ;</p><p>元素名称：nodeName</p><p>元素值： nodeValue</p><pre><code>var myDiv = document.getElementById(&quot;myDiv&quot;);
console.log(myDiv.nodeType);     //结果 ：1
console.log(myDiv.nodeName);     //结果 ：DIV
console.log(myDiv.nodeValue);    //结果 ：null
</code></pre><p>2、删选元素节点</p><pre><code>var arr = son1.parentNode.childNodes;
var newArr = [];
for(var i = 0 ; i &lt; arr.length ; i++){
    if(arr[i].nodeType == 1){
        newArr[newArr.length] = arr[i];
    }
}
</code></pre><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ol><li><p>parentNode 父节点</p></li><li><p>childNodes 所有子节点</p></li><li><p>firstChild 第一个子节点 //与 childNodes 对应</p></li><li><p>lastChild 最后一个子节点</p></li><li><p>nextSibling 下一个兄弟节点</p></li><li><p>previousSibling 上一个兄弟节点</p></li><li><p>children 直接拿到元素子节点</p></li><li><p>firstElementChild 第一个元素子节点 //与 children 对应</p></li><li><p>lastElementChild 最后一个元素子节点</p></li><li><p>nextElementSibling 下一个元素兄弟节点</p></li><li><p>previousElementSibling 上一个元素兄弟节点</p></li></ol>`,36),d=[r];function p(t,a){return n(),o("div",null,d)}const c=e(i,[["render",p],["__file","12-DOM层级关系.html.vue"]]);export{c as default};

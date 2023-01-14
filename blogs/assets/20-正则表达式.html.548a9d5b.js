import{_ as e,o as r,c as a,f as o}from"./app.9b0e6b33.js";const t={},n=o(`<h1 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h1><ul><li>正则表达式：一种模式，一种标准。检索一段文本是否符合要求。</li><li>强大的字符匹配工具</li><li>正则表达式具有贪婪模式：优先匹配最多的</li></ul><p>1、字面量方式</p><pre><code>var reg1 = /字符/gi;
</code></pre><p>2、高级方式</p><pre><code>var reg2 = new RegExp(&quot;字符&quot;,&quot;gi&quot;);
g : 全局检
i : 忽略大小写
m : 多行匹配
</code></pre><h2 id="正则表达式常用方法" tabindex="-1"><a class="header-anchor" href="#正则表达式常用方法" aria-hidden="true">#</a> 正则表达式常用方法</h2><h3 id="_1、test" tabindex="-1"><a class="header-anchor" href="#_1、test" aria-hidden="true">#</a> 1、test()</h3><p>正则表达式.test(str);</p><p>返回值：true || false</p><pre><code>var reg1 = /box/gi;
var str1 = &quot;this is a box.Box,Box&quot;;

检索文本
var result1 = reg1.test(str1);
console.log(result1);    //true
第二次检索，从第一次检索位置之后继续检索
result1 = reg1.test(str1);
console.log(result1);    //false
</code></pre><h3 id="_2、exec" tabindex="-1"><a class="header-anchor" href="#_2、exec" aria-hidden="true">#</a> 2、exec()</h3><p>返回值：找到了,匹配正则表达式的指定字符信息 对应的下标存入数组；没找到,null</p><pre><code>var reg2 = /bmw/gi;
var str2 = &quot;I own a car of BMW,bmw,BMw&quot;;
var result2 = reg2.exec(str2);
console.log(result2);    //[&quot;BMW&quot;, index: 15, input: &quot;I own a car of BMW,bmw,BMw&quot;]

若多次查找上次为null，下次继续从新开始查找
</code></pre><h3 id="_3、compile-修改正则表达式" tabindex="-1"><a class="header-anchor" href="#_3、compile-修改正则表达式" aria-hidden="true">#</a> 3、compile(); 修改正则表达式</h3><p>参数一：修改后的模式 参数二：模式修饰符(根据需要g,i)</p><pre><code>var reg3 = /abc/;
var str3 = &quot;I am abc&quot;;
console.log(reg3.test(str3));  //  true
reg3.compile(&quot;def&quot;,&quot;gi&quot;);
console.log(reg3);             //  /def/gi
console.log(reg3.test(str3));  //  false
</code></pre><h2 id="字符串中使用正则表达式" tabindex="-1"><a class="header-anchor" href="#字符串中使用正则表达式" aria-hidden="true">#</a> 字符串中使用正则表达式</h2><h3 id="_1、replace-替换-原字符不发生改变" tabindex="-1"><a class="header-anchor" href="#_1、replace-替换-原字符不发生改变" aria-hidden="true">#</a> 1、replace(); 替换，原字符不发生改变</h3><p>参数一 old,参数二,new</p><pre><code>var reg1 = /mbh/gi;
var res1 = str1.replace(reg1,&quot;BYD&quot;);
console.log(res1);    //I need a car of BYD,BYD,BYD
console.log(str1);    //I need a car of mbh,mbh,MBH
</code></pre><h3 id="_2、match-匹配" tabindex="-1"><a class="header-anchor" href="#_2、match-匹配" aria-hidden="true">#</a> 2、match() 匹配</h3><p>返回值：查找到，返回下标;全局查找将找到的所有字符存入数组。 未找到，null</p><pre><code>var reg2 = /kai/gi;
var res2 = str2.match(reg2);
console.log(res2);     //[&quot;kai&quot;, &quot;kai&quot;, &quot;KAI&quot;]
</code></pre><h3 id="_3、search-搜查g-i未起到作用" tabindex="-1"><a class="header-anchor" href="#_3、search-搜查g-i未起到作用" aria-hidden="true">#</a> 3、search() 搜查g i未起到作用</h3><p>返回值：查找到，字符对应的下标；未找到，返回 -1</p><pre><code>ar reg3 = /is/gi;
var res3 = str3.search(reg3);
console.log(res3);           // 7
</code></pre><h3 id="_4、split-字符转数组" tabindex="-1"><a class="header-anchor" href="#_4、split-字符转数组" aria-hidden="true">#</a> 4、split() 字符转数组</h3><pre><code>var str4 = &quot;1,2,3&quot;;
var reg4 = /,/;
var arr = str4.split(reg4);
console.log(arr);            //[&quot;1&quot;, &quot;2&quot;, &quot;3&quot;]
</code></pre><h2 id="过滤敏感词汇" tabindex="-1"><a class="header-anchor" href="#过滤敏感词汇" aria-hidden="true">#</a> 过滤敏感词汇</h2><pre><code>btn.onclick = function(){
    var reg1 = new RegExp(txt.value,&quot;g&quot;);
    textArea.value = textArea.value.replace(reg1,&quot;***&quot;);
}
</code></pre><h2 id="正则表达式模式" tabindex="-1"><a class="header-anchor" href="#正则表达式模式" aria-hidden="true">#</a> 正则表达式模式</h2><ul><li><p><code>^$</code>模式</p></li><li><p>用于表单验证，规定输入的内容规则。</p></li><li><p>非<code>^$</code>模式</p></li><li><p>用于匹配字符串</p></li></ul>`,33),c=[n];function i(s,d){return r(),a("div",null,c)}const h=e(t,[["render",i],["__file","20-正则表达式.html.vue"]]);export{h as default};

import{_ as e,o as r,c as a,f as o}from"./app.20c26ebb.js";const t={},n=o(`<h1 id="\u6B63\u5219\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u6B63\u5219\u8868\u8FBE\u5F0F</h1><ul><li>\u6B63\u5219\u8868\u8FBE\u5F0F\uFF1A\u4E00\u79CD\u6A21\u5F0F\uFF0C\u4E00\u79CD\u6807\u51C6\u3002\u68C0\u7D22\u4E00\u6BB5\u6587\u672C\u662F\u5426\u7B26\u5408\u8981\u6C42\u3002</li><li>\u5F3A\u5927\u7684\u5B57\u7B26\u5339\u914D\u5DE5\u5177</li><li>\u6B63\u5219\u8868\u8FBE\u5F0F\u5177\u6709\u8D2A\u5A6A\u6A21\u5F0F\uFF1A\u4F18\u5148\u5339\u914D\u6700\u591A\u7684</li></ul><p>1\u3001\u5B57\u9762\u91CF\u65B9\u5F0F</p><pre><code>var reg1 = /\u5B57\u7B26/gi;
</code></pre><p>2\u3001\u9AD8\u7EA7\u65B9\u5F0F</p><pre><code>var reg2 = new RegExp(&quot;\u5B57\u7B26&quot;,&quot;gi&quot;);
g : \u5168\u5C40\u68C0
i : \u5FFD\u7565\u5927\u5C0F\u5199
m : \u591A\u884C\u5339\u914D
</code></pre><h2 id="\u6B63\u5219\u8868\u8FBE\u5F0F\u5E38\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u8868\u8FBE\u5F0F\u5E38\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u6B63\u5219\u8868\u8FBE\u5F0F\u5E38\u7528\u65B9\u6CD5</h2><h3 id="_1\u3001test" tabindex="-1"><a class="header-anchor" href="#_1\u3001test" aria-hidden="true">#</a> 1\u3001test()</h3><p>\u6B63\u5219\u8868\u8FBE\u5F0F.test(str);</p><p>\u8FD4\u56DE\u503C\uFF1Atrue || false</p><pre><code>var reg1 = /box/gi;
var str1 = &quot;this is a box.Box,Box&quot;;

\u68C0\u7D22\u6587\u672C
var result1 = reg1.test(str1);
console.log(result1);    //true
\u7B2C\u4E8C\u6B21\u68C0\u7D22\uFF0C\u4ECE\u7B2C\u4E00\u6B21\u68C0\u7D22\u4F4D\u7F6E\u4E4B\u540E\u7EE7\u7EED\u68C0\u7D22
result1 = reg1.test(str1);
console.log(result1);    //false
</code></pre><h3 id="_2\u3001exec" tabindex="-1"><a class="header-anchor" href="#_2\u3001exec" aria-hidden="true">#</a> 2\u3001exec()</h3><p>\u8FD4\u56DE\u503C\uFF1A\u627E\u5230\u4E86,\u5339\u914D\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u6307\u5B9A\u5B57\u7B26\u4FE1\u606F \u5BF9\u5E94\u7684\u4E0B\u6807\u5B58\u5165\u6570\u7EC4\uFF1B\u6CA1\u627E\u5230,null</p><pre><code>var reg2 = /bmw/gi;
var str2 = &quot;I own a car of BMW,bmw,BMw&quot;;
var result2 = reg2.exec(str2);
console.log(result2);    //[&quot;BMW&quot;, index: 15, input: &quot;I own a car of BMW,bmw,BMw&quot;]

\u82E5\u591A\u6B21\u67E5\u627E\u4E0A\u6B21\u4E3Anull\uFF0C\u4E0B\u6B21\u7EE7\u7EED\u4ECE\u65B0\u5F00\u59CB\u67E5\u627E
</code></pre><h3 id="_3\u3001compile-\u4FEE\u6539\u6B63\u5219\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3\u3001compile-\u4FEE\u6539\u6B63\u5219\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> 3\u3001compile(); \u4FEE\u6539\u6B63\u5219\u8868\u8FBE\u5F0F</h3><p>\u53C2\u6570\u4E00\uFF1A\u4FEE\u6539\u540E\u7684\u6A21\u5F0F \u53C2\u6570\u4E8C\uFF1A\u6A21\u5F0F\u4FEE\u9970\u7B26(\u6839\u636E\u9700\u8981g,i)</p><pre><code>var reg3 = /abc/;
var str3 = &quot;I am abc&quot;;
console.log(reg3.test(str3));  //  true
reg3.compile(&quot;def&quot;,&quot;gi&quot;);
console.log(reg3);             //  /def/gi
console.log(reg3.test(str3));  //  false
</code></pre><h2 id="\u5B57\u7B26\u4E32\u4E2D\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u4E2D\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u4E2D\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F</h2><h3 id="_1\u3001replace-\u66FF\u6362-\u539F\u5B57\u7B26\u4E0D\u53D1\u751F\u6539\u53D8" tabindex="-1"><a class="header-anchor" href="#_1\u3001replace-\u66FF\u6362-\u539F\u5B57\u7B26\u4E0D\u53D1\u751F\u6539\u53D8" aria-hidden="true">#</a> 1\u3001replace(); \u66FF\u6362\uFF0C\u539F\u5B57\u7B26\u4E0D\u53D1\u751F\u6539\u53D8</h3><p>\u53C2\u6570\u4E00 old,\u53C2\u6570\u4E8C,new</p><pre><code>var reg1 = /mbh/gi;
var res1 = str1.replace(reg1,&quot;BYD&quot;);
console.log(res1);    //I need a car of BYD,BYD,BYD
console.log(str1);    //I need a car of mbh,mbh,MBH
</code></pre><h3 id="_2\u3001match-\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#_2\u3001match-\u5339\u914D" aria-hidden="true">#</a> 2\u3001match() \u5339\u914D</h3><p>\u8FD4\u56DE\u503C\uFF1A\u67E5\u627E\u5230\uFF0C\u8FD4\u56DE\u4E0B\u6807;\u5168\u5C40\u67E5\u627E\u5C06\u627E\u5230\u7684\u6240\u6709\u5B57\u7B26\u5B58\u5165\u6570\u7EC4\u3002 \u672A\u627E\u5230\uFF0Cnull</p><pre><code>var reg2 = /kai/gi;
var res2 = str2.match(reg2);
console.log(res2);     //[&quot;kai&quot;, &quot;kai&quot;, &quot;KAI&quot;]
</code></pre><h3 id="_3\u3001search-\u641C\u67E5g-i\u672A\u8D77\u5230\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_3\u3001search-\u641C\u67E5g-i\u672A\u8D77\u5230\u4F5C\u7528" aria-hidden="true">#</a> 3\u3001search() \u641C\u67E5g i\u672A\u8D77\u5230\u4F5C\u7528</h3><p>\u8FD4\u56DE\u503C\uFF1A\u67E5\u627E\u5230\uFF0C\u5B57\u7B26\u5BF9\u5E94\u7684\u4E0B\u6807\uFF1B\u672A\u627E\u5230\uFF0C\u8FD4\u56DE -1</p><pre><code>ar reg3 = /is/gi;
var res3 = str3.search(reg3);
console.log(res3);           // 7
</code></pre><h3 id="_4\u3001split-\u5B57\u7B26\u8F6C\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_4\u3001split-\u5B57\u7B26\u8F6C\u6570\u7EC4" aria-hidden="true">#</a> 4\u3001split() \u5B57\u7B26\u8F6C\u6570\u7EC4</h3><pre><code>var str4 = &quot;1,2,3&quot;;
var reg4 = /,/;
var arr = str4.split(reg4);
console.log(arr);            //[&quot;1&quot;, &quot;2&quot;, &quot;3&quot;]
</code></pre><h2 id="\u8FC7\u6EE4\u654F\u611F\u8BCD\u6C47" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u6EE4\u654F\u611F\u8BCD\u6C47" aria-hidden="true">#</a> \u8FC7\u6EE4\u654F\u611F\u8BCD\u6C47</h2><pre><code>btn.onclick = function(){
    var reg1 = new RegExp(txt.value,&quot;g&quot;);
    textArea.value = textArea.value.replace(reg1,&quot;***&quot;);
}
</code></pre><h2 id="\u6B63\u5219\u8868\u8FBE\u5F0F\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u8868\u8FBE\u5F0F\u6A21\u5F0F" aria-hidden="true">#</a> \u6B63\u5219\u8868\u8FBE\u5F0F\u6A21\u5F0F</h2><ul><li><p><code>^$</code>\u6A21\u5F0F</p></li><li><p>\u7528\u4E8E\u8868\u5355\u9A8C\u8BC1\uFF0C\u89C4\u5B9A\u8F93\u5165\u7684\u5185\u5BB9\u89C4\u5219\u3002</p></li><li><p>\u975E<code>^$</code>\u6A21\u5F0F</p></li><li><p>\u7528\u4E8E\u5339\u914D\u5B57\u7B26\u4E32</p></li></ul>`,33),c=[n];function i(s,d){return r(),a("div",null,c)}const h=e(t,[["render",i],["__file","20-\u6B63\u5219\u8868\u8FBE\u5F0F.html.vue"]]);export{h as default};

import{_ as e,o as r,c as n,f as o}from"./app.fa375d3e.js";const a={},t=o(`<h1 id="字符串方法" tabindex="-1"><a class="header-anchor" href="#字符串方法" aria-hidden="true">#</a> 字符串方法</h1><h2 id="字符串的创建方式" tabindex="-1"><a class="header-anchor" href="#字符串的创建方式" aria-hidden="true">#</a> 字符串的创建方式</h2><p>1、字面量方式</p><pre><code>var str1 = &quot;123abc&quot;;
console.log(str1);          //123456
console.log(str1.length);   //结果为6
console.log(typeof str1);   //数据类型：string
</code></pre><p>2、高级方式</p><pre><code>var str2 = new String(&#39;456&#39;);
console.log(str2);          //String{0:&quot;4&quot; , 1:&quot;5&quot; , 2:&quot;6&quot; , length:6 , ...}
console.log(str2.length);   //结果为3 
console.log(typeof str2);   //数据类型：object
</code></pre><p><strong>小写字母和大写字母ASCII码 a:97 A:65</strong></p><h2 id="charat-index" tabindex="-1"><a class="header-anchor" href="#charat-index" aria-hidden="true">#</a> charAt(index)</h2><pre><code>1、检索指定位置上的字符
2、返回值：对应位置上的字符 ; 查找不到：结果为空

var str = &quot;123,abc&quot;;
console.log(str.charAt(1));    //结果2
console.log(str.charAt(10));   //结果空

逐一输出每个字符
for(var i = 0 ; i &lt; str.length ; i++){
    console.log( str.charAt(i) );      //1  2  3  ,  4  5  6
}
</code></pre><h2 id="charcodeat" tabindex="-1"><a class="header-anchor" href="#charcodeat" aria-hidden="true">#</a> charCodeAt()</h2><pre><code>1、检索指定位置上字符的ASCII编码
2、返回值：对应字符的ASCII编码

var str = &quot;123,abc&quot;;
console.log(str.charCodeAt(4));          //下标4对应的字符a结果：97
</code></pre><h2 id="string-fromcharcode" tabindex="-1"><a class="header-anchor" href="#string-fromcharcode" aria-hidden="true">#</a> String.fromCharCode()</h2><pre><code>1、通过ASCII编码找到对应字符
2、返回值：查找到的字符
console.log(String.fromCharCode(97));     //结果97对应的字符a
</code></pre><h2 id="indexof" tabindex="-1"><a class="header-anchor" href="#indexof" aria-hidden="true">#</a> indexOf()</h2><pre><code>1、从前向后查找指定字符的下标
2、返回值：找到返回下标 ; 找不到返回 -1。
3、参数1：查找的指定字符   参数2：开始查找的位置(包含)

var str2 = &#39;123,456,abc&#39;;
console.log(str2.indexOf(&quot;3&quot;));           //结果：下标2
console.log(str2.indexOf(&quot;3&quot;,3));         //结果：-1
</code></pre><h2 id="lastindexof" tabindex="-1"><a class="header-anchor" href="#lastindexof" aria-hidden="true">#</a> lastIndexOf()</h2><pre><code>1、从后向前查找指定字符下标(索引是固定的)
2、参数1：查找的指定字符   参数2：开始查找的位置(包含)
3、返回值：找到返回下标 ; 找不到返回 -1。

var str2 = &#39;123,456,abc&#39;;
console.log(str2.indexOf(&quot;3&quot;));           //结果：下标2
console.log(str2.indexOf(&quot;3&quot;,3));         //结果：-1
</code></pre><h2 id="replace" tabindex="-1"><a class="header-anchor" href="#replace" aria-hidden="true">#</a> replace()</h2><pre><code>1、替换字符
2、参数一：被替换的旧字符  参数二：替换后的新字符
3、返回值：替换后的新字符串

var str = &quot;abcdef&quot;;
console.log(str.replace(&#39;a&#39; , &#39;A&#39;));      //结果  Abcdef
console.log(str);                         //结果  abcdef
</code></pre><h2 id="touppercase" tabindex="-1"><a class="header-anchor" href="#touppercase" aria-hidden="true">#</a> toUpperCase()</h2><pre><code>1、把小写英文转换成大写英文
2、返回值：转换之后的新字符串
3、原字符串未发生改变

var str = &#39;abcdef&#39;;
console.log(str.toUpperCase());           //结果  ABCDEF
console.log(str);                         //结果  abcdef

var s = str.charAt(5);
console.log(s.toUpperCase());             //结果  F
</code></pre><h2 id="tolowercase" tabindex="-1"><a class="header-anchor" href="#tolowercase" aria-hidden="true">#</a> toLowerCase()</h2><pre><code>1、把大写英文转换成小写英文
2、返回值：转换之后的新字符串
3、原字符串未发生改变

var str = &#39;ABCDEF&#39;;
console.log(str.toLowerCase());           //结果  abcdef
console.log(str);                         //结果  ABCDEF
</code></pre><h2 id="trim-ie不支持" tabindex="-1"><a class="header-anchor" href="#trim-ie不支持" aria-hidden="true">#</a> trim() IE不支持</h2><pre><code>1、去除前后空格
2、返回值：去除空格后的新字符串
3、原字符串未发生变化

var str = &#39; abc &#39;;                        //5个字符
console.log(str.length);
console.log(str.trim());                  //abc
console.log(str);                         //abc
</code></pre><h2 id="split" tabindex="-1"><a class="header-anchor" href="#split" aria-hidden="true">#</a> split()</h2><pre><code>1、把字符串转成数组
2、参数：分隔符（字符串中的某一字符或多个字符）
3、原字符串未发生改变

var str = &quot;I#am#Mr#TianMr&quot;;
console.log(str.split(&quot;#&quot;));       //结果[&quot;I&quot; , &quot;am&quot;  , &quot;Mr&quot;  , &quot;Tian&quot;]
console.log(str);                  //结果 I#am#Mr#TianMr
console.log(str.split(&quot;Mr&quot;));      //结果[&quot;I#am#&quot; , &quot;#Tian&quot; , &quot;&quot;]
</code></pre><h2 id="substr" tabindex="-1"><a class="header-anchor" href="#substr" aria-hidden="true">#</a> substr()</h2><pre><code>1、截取字符串
2、只有参数一：从开始截取到最后
    参数一：开始截取的位置(包含)
    参数二：截取的个数(长度)
3、返回值：截取的新字符串

var str = &#39;123abcdef&#39;;
console.log(str.substr(2));        //结果：3abcdef
console.log(str.substr(2,4));      //结果：3abc
console.log(str);                  //结果：123abcdef
</code></pre><h2 id="substring-slice" tabindex="-1"><a class="header-anchor" href="#substring-slice" aria-hidden="true">#</a> substring() ---slice</h2><pre><code>1、截取字符串
2、只有参数一：从开始截取到最后
    参数一：开始截取的位置(包含)
    参数二：结束的位置(不包含)
3、返回值：截取的新字符串

var str = &#39;123abcdef&#39;;
console.log(str.substring(2));     //结果：3abcdef
console.log(str.substring(2,4));   //结果：3a
console.log(str);                  //结果：123abcdef
</code></pre><h2 id="汇总" tabindex="-1"><a class="header-anchor" href="#汇总" aria-hidden="true">#</a> 汇总</h2><pre><code>charAt(i);              指定位置字符
charCodeAt();           指定位置字符的ASCII编码
String.fromCharCode();  通过ASCII编码找到对应字符
indexOf();              从前向后查找指定字符的下标
lastIndexOf();          从后向前查找指定字符的下标
replace();              替换字符
toUpperCase();          小写转大写
toLowerCase();          大写转小写
trim();                 去除前后空格
split();                字符串转数组
substr();               截取字符串：参数2，截取个数
substring();            截取字符串：参数2，结束位置
</code></pre>`,33),s=[t];function c(d,i){return r(),n("div",null,s)}const l=e(a,[["render",c],["__file","06-字符串方法.html.vue"]]);export{l as default};

import{_ as r,o as n,c as e,f as o}from"./app.8609dc96.js";const a={},t=o(`<h1 id="数组基础" tabindex="-1"><a class="header-anchor" href="#数组基础" aria-hidden="true">#</a> 数组基础</h1><pre><code>数组Array：值的有序集合
数组中的数据————元素 元素之间,隔开
数组中数据类型没有限制，弱类型的体现
</code></pre><h2 id="数组-array-创建方式" tabindex="-1"><a class="header-anchor" href="#数组-array-创建方式" aria-hidden="true">#</a> 数组(Array)创建方式</h2><pre><code>1、字面量方式
    var arr = [];//空数组
    var arr = [20 , &#39;abc&#39; , &#39;荆天明&#39; , true , undefined];

2、高级方式（new关键字）
    var arr = new Array();   //空数组
    var arr = new Array(10 , &#39;abc&#39; , true);

    //注意：如果括号里只有一个正整数，代表的数组长度
    var arr = new Array(5);  //手动设置数组长度为5，但未赋值
</code></pre><h2 id="数组元素的操作-增删改查" tabindex="-1"><a class="header-anchor" href="#数组元素的操作-增删改查" aria-hidden="true">#</a> 数组元素的操作（增删改查）</h2><pre><code>索引值/下标：从 0 ~ (length-1)

var arr = [10 , 20 , 30];
1、增、新增数组的元素     arr[4] = &quot;荆天明&quot;;   //此时数组长度为5，其中arr[4]为undefined
2、删、删除数组的元素     arr.length = 3;     //硬性的固定长度数组,长度的灵活性
3、改、修改数组中的元素   arr[0] = true;
4、查、访问数组中的元素   数组名[下标]   arr[i]


var arr = [];
for(var i = 0 ; i &lt; 10 ; i++){
    arr[arr.length] = i + 1;
}
console.log(arr);
</code></pre><h2 id="数组的遍历-循环" tabindex="-1"><a class="header-anchor" href="#数组的遍历-循环" aria-hidden="true">#</a> 数组的遍历/循环</h2><pre><code>arr.length  能自动监听的自动监听

1、for循环
    for(var i = 0 ; i &lt; arr.length ; i++){

    }

2、for in 循环
    for(var i in arr){
        console.log(arr[i]);
    }

3、ECMAScript5.0新增的
    for(var ele of arr){    //of 无法监听数组下标
        console.log(ele);   //直接拿到数组中的每个元素
    }

4、forEach()方法，可以遍历多维数组。 jQuery中有一个each()方法，只能遍历一维数组
    //匿名函数作为实参
    arr.forEach(function(ele,index){

        //参数一：拿到的是每个元素
        console.log(ele);

        //参数二：拿到的是数组下标
        console.log(index);

    });
</code></pre><h2 id="js的应用一-给div设置背景色" tabindex="-1"><a class="header-anchor" href="#js的应用一-给div设置背景色" aria-hidden="true">#</a> JS的应用一（给div设置背景色）</h2><p>1、 函数的做法</p><pre><code>var divArr = document.getElementsByTagName(&quot;div&quot;);
function colorDiv(i,color){
    divArr[i].style.backgroundColor = color;
}
colorDiv(0,&quot;red&quot;);
colorDiv(1,&quot;yellow&quot;);
colorDiv(2,&quot;green&quot;);
colorDiv(3,&quot;blue&quot;);
</code></pre><p>2、for循环</p><pre><code>var colorArr = [&#39;red&#39; , &#39;yellow&#39; , &#39;blue&#39; , &#39;pink&#39;];
var divArr = document.getElementsByTagName(&quot;div&quot;);
for(var i = 0 ; i &lt; divArr.length ; i++){
    divArr[i].style.backgroundColor = colorArr[i];
}
</code></pre><h2 id="js-的应用二-设置奇偶行颜色不同" tabindex="-1"><a class="header-anchor" href="#js-的应用二-设置奇偶行颜色不同" aria-hidden="true">#</a> JS 的应用二（设置奇偶行颜色不同）</h2><pre><code>1、获取标签   2、设置样式

var colorArr = [&#39;red&#39; , &#39;green&#39;];
var divArr = document.getElementsByTagName(&quot;div&quot;);
for(var i = 0 ; i &lt; divArr.length ; i++){
    if(i%2 == 0){
        divArr[i].style.backgroundColor = colorArr[0];
    }else{
        divArr[i].style.backgroundColor = colorArr[1];
    }
}


var divArr = document.getElementsByTagName(&quot;div&quot;);
for(var i = 0 ; i &lt; divArr.length ; i++){
    if(i%2 == 0){
        divArr[i].style.backgroundColor = &quot;red&quot;;
    }else{
        divArr[i].style.backgroundColor = &quot;green&quot;;
    }
}
</code></pre><p>4、 随机生成背景颜色——2种方法</p><pre><code>//rgb方式
var divs = document.getElementsByTagName(&quot;div&quot;);
for(var i = 0 ; i &lt; divs.length ; i++){
    var ran1 = parseInt(Math.random()*256);
    var ran2 = parseInt(Math.random()*256);
    var ran3 = parseInt(Math.random()*256);
    divs[i].style.backgroundColor = &quot;rgb(&quot;+ran1+&quot;,&quot;+ran2+&quot;,&quot;+ran3+&quot;)&quot;;
}

//十六进制的方式
var colorArr = [0,1,2,3,4,5,6,7,8,9,&#39;a&#39;,&#39;b&#39;,&#39;c&#39;,&#39;d&#39;,&#39;e&#39;,&#39;f&#39;];     //  16个数字
var p = document.getElementsByTagName(&quot;p&quot;);
for(var i = 0 ; i &lt; p.length ; i++){
    var ran = [];    
    var str = &quot;&quot;;
    for(var j = 0 ; j &lt; 6 ; j++){
        ran[i] = colorArr[parseInt(Math.random()*colorArr.length)];
        str = str+ran[i];
    }
    p[i].style.backgroundColor = &quot;#&quot; + str + &quot;&quot;;
}
</code></pre><h2 id="arguments记录实参" tabindex="-1"><a class="header-anchor" href="#arguments记录实参" aria-hidden="true">#</a> arguments记录实参</h2><pre><code>函数内部，监听实参

function fn(){
    console.log(arguments);
    //可以访问实参的值
    console.log(arguments[0]);
    console.log(arguments[1]);
}
fn(10,20);

//用arguments算三个数中的最大值
function fn(){
    var max = arguments[0];
    for(var i = 0 ; i &lt; arguments.length ; i++){
        if(max &lt; arguments[i]){
            max = arguments[i];
        }
    }
    return max;
}
alert(&quot;最大值是：&quot;+fn(60,40,77));
</code></pre>`,19),i=[t];function d(l,c){return n(),e("div",null,i)}const s=r(a,[["render",d],["__file","04-数组基础.html.vue"]]);export{s as default};

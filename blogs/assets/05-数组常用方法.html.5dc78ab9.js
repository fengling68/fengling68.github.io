import{_ as r,o as e,c as n,f as a}from"./app.b0016746.js";const o={},d=a(`<h1 id="数组常用方法" tabindex="-1"><a class="header-anchor" href="#数组常用方法" aria-hidden="true">#</a> 数组常用方法</h1><p>var arr = [10,&#39;hello&#39;,true, [20 , 30 , 40] ]; //二维数组</p><h2 id="push-方法" tabindex="-1"><a class="header-anchor" href="#push-方法" aria-hidden="true">#</a> push()方法</h2><pre><code>1、在末尾追加数组元素        arr.push(20 , &#39;姬如千泷&#39;);
2、返回值：返回新数组的长度
3、原数组发生改变
</code></pre><h2 id="pop-方法" tabindex="-1"><a class="header-anchor" href="#pop-方法" aria-hidden="true">#</a> pop()方法</h2><pre><code>1、删除数组的最后一个元素   arr.pop();
2、返回值：删除的元素
3、原数组发生改变
</code></pre><h2 id="shift-方法" tabindex="-1"><a class="header-anchor" href="#shift-方法" aria-hidden="true">#</a> shift()方法</h2><pre><code>1、删除数组的第一个元素     arr.shift();
2、返回值：删除的元素
3、原数组发生改变
</code></pre><h2 id="unshift-方法" tabindex="-1"><a class="header-anchor" href="#unshift-方法" aria-hidden="true">#</a> unshift()方法</h2><pre><code>1、在开头添加元素           arr.unshift(20 , &#39;荆天明&#39;);
2、返回值：新数组的长度
3、原数组发生改变

索引下标是固定的从前向后，0 开始
</code></pre><h2 id="indexof-方法" tabindex="-1"><a class="header-anchor" href="#indexof-方法" aria-hidden="true">#</a> indexOf()方法</h2><pre><code>1、从左向右查找指定元素的下标   arr.indexOf(30);
2、返回值：下标 ; 若查找不到返回值为 -1 ;
3、原数组不发生改变
</code></pre><h2 id="lastindexof-方法" tabindex="-1"><a class="header-anchor" href="#lastindexof-方法" aria-hidden="true">#</a> lastIndexOf()方法</h2><pre><code>1、从右向左查找指定元素的下标   arr.lastIndexOf(30);
2、返回值：下标 ; 若查找不到返回值为 -1 ;
3、原数组不发生改变

//数组去重，并放入新的数组
var arr = [1,3,5,7,9,10,3,4,5,3,7];
   var newArr = [];
for(var i = 0 ; i &lt; arr.length ; i++){
    if(newArr.indexOf(arr[i]) == -1){
         newArr.push(arr[i]);
    }
}
console.log(newArr);
</code></pre><h2 id="join-方法" tabindex="-1"><a class="header-anchor" href="#join-方法" aria-hidden="true">#</a> join()方法</h2><pre><code>1、连接：把数组转换为字符串  arr1.join(&quot;-&quot;);   //用 - 连接
2、返回值：新的字符串
3、原数组不发生改变
</code></pre><h2 id="concat-方法" tabindex="-1"><a class="header-anchor" href="#concat-方法" aria-hidden="true">#</a> concat()方法</h2><pre><code>1、拼接合并数组              arr1.concat(arr2);   //arr1在前，arr2在后
2、返回值：数组1 + 数组2 新的数组
3、原数组不发生改变
</code></pre><h2 id="reverse-方法" tabindex="-1"><a class="header-anchor" href="#reverse-方法" aria-hidden="true">#</a> reverse()方法</h2><pre><code>1、倒置数组                 arr.reverse();
2、返回倒置后的新数组
3、原数组发生改变
</code></pre><h2 id="slice-方法" tabindex="-1"><a class="header-anchor" href="#slice-方法" aria-hidden="true">#</a> slice()方法</h2><pre><code>参数一：开始位置下标，包含起始位置元素
参数二：结束位置下标，不包含结束位置元素

1、截取数组元素arr.slice(2); 从下标2截取到最后
            arr.slice(2,5);从下标2截取到下标5之前
2、返回截取元素构成的新数组
3、原数组不发生改变
</code></pre><h2 id="splice-方法" tabindex="-1"><a class="header-anchor" href="#splice-方法" aria-hidden="true">#</a> splice()方法</h2><pre><code>参数一：开始位置下标，包含起始位置元素  
参数二：截取的长度 ; 若 &gt; 0 , 则删除元素 ; 若 = 0 , 则添加(多个)元素

1、截取数组元素
2、返回截取元素构成的新数组
3、原数组发生改变

var arr = [10,20,30,40,50];
console.log(arr.splice(1,3));
//结果：[20,30,40]

console.log(arr.splice(1,0,true,&#39;abc&#39;));  //截取个数为0
//结果：空数组

arr.splice(1 , 0 , &#39;abc&#39; , true);
//结果：[10, &#39;abc&#39; , true ,20,30,40,50]
</code></pre><h2 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort()</h2><pre><code>数组元素的排序:转换为字符来进行比较排序(ASCII码比较)

var arr1 = [&#39;a&#39;,&#39;b&#39;,&#39;ef&#39;,&#39;cd&#39;];
console.log(arr1.sort());      // a ,b ,cd ,ef

var arr2 = [31,21,13,9,52,11];
console.log(arr2.sort());      //11,13,21,32,52,9


//元素从小到大排序
var arr3 = [31,21,13,9,52,11];
arr3.sort(function(a,b){
    console.log(arr3);
    console.log(a);
    console.log(b);
    return a - b;    //从小到大
});

function rule(a,b){
    return a-b;
}
arr.sort(rule);
console.log(arr3);
</code></pre><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><pre><code>改变原数组：
shift：将第一个元素删除并且返回删除元素，空即为undefined
unshift：向数组开头添加元素，并返回新的长度
pop：删除最后一个并返回删除的元素
push：向数组末尾添加元素，并返回新的长度
reverse：颠倒数组顺序
sort：对数组排序
splice(start,length,item)：删，增，替换数组元素，返回被删除数组，无删除则不返回

不改变原数组：
concat：连接多个数组，返回新的数组
join：将数组中所有元素以参数作为分隔符放入一个字符
slice(start,end)：返回选定元素
map,filter,some,every等：不改变原数组 
</code></pre><h2 id="冒泡排序" tabindex="-1"><a class="header-anchor" href="#冒泡排序" aria-hidden="true">#</a> 冒泡排序</h2><pre><code>//要求对该数组中元素从小到大顺序排列
var = [10,2,30,3,5,7,34,13]; 
for(var i=0 ; i &lt; arr.length ; i++){      //比较的趟数
    for(var j=0 ; j &lt; arr.length-i ; j++){   //每趟比较的次数
        if(arr[j] &gt; arr[j+1]){
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr);
</code></pre>`,30),i=[d];function h(c,t){return e(),n("div",null,i)}const l=r(o,[["render",h],["__file","05-数组常用方法.html.vue"]]);export{l as default};

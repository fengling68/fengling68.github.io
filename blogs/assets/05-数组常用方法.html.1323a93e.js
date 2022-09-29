import{_ as r,o as e,c as n,f as a}from"./app.52f83dae.js";const o={},d=a(`<h1 id="\u6570\u7EC4\u5E38\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u5E38\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u6570\u7EC4\u5E38\u7528\u65B9\u6CD5</h1><p>var arr = [10,&#39;hello&#39;,true, [20 , 30 , 40] ]; //\u4E8C\u7EF4\u6570\u7EC4</p><h2 id="push-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#push-\u65B9\u6CD5" aria-hidden="true">#</a> push()\u65B9\u6CD5</h2><pre><code>1\u3001\u5728\u672B\u5C3E\u8FFD\u52A0\u6570\u7EC4\u5143\u7D20        arr.push(20 , &#39;\u59EC\u5982\u5343\u6CF7&#39;);
2\u3001\u8FD4\u56DE\u503C\uFF1A\u8FD4\u56DE\u65B0\u6570\u7EC4\u7684\u957F\u5EA6
3\u3001\u539F\u6570\u7EC4\u53D1\u751F\u6539\u53D8
</code></pre><h2 id="pop-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#pop-\u65B9\u6CD5" aria-hidden="true">#</a> pop()\u65B9\u6CD5</h2><pre><code>1\u3001\u5220\u9664\u6570\u7EC4\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20   arr.pop();
2\u3001\u8FD4\u56DE\u503C\uFF1A\u5220\u9664\u7684\u5143\u7D20
3\u3001\u539F\u6570\u7EC4\u53D1\u751F\u6539\u53D8
</code></pre><h2 id="shift-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#shift-\u65B9\u6CD5" aria-hidden="true">#</a> shift()\u65B9\u6CD5</h2><pre><code>1\u3001\u5220\u9664\u6570\u7EC4\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20     arr.shift();
2\u3001\u8FD4\u56DE\u503C\uFF1A\u5220\u9664\u7684\u5143\u7D20
3\u3001\u539F\u6570\u7EC4\u53D1\u751F\u6539\u53D8
</code></pre><h2 id="unshift-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#unshift-\u65B9\u6CD5" aria-hidden="true">#</a> unshift()\u65B9\u6CD5</h2><pre><code>1\u3001\u5728\u5F00\u5934\u6DFB\u52A0\u5143\u7D20           arr.unshift(20 , &#39;\u8346\u5929\u660E&#39;);
2\u3001\u8FD4\u56DE\u503C\uFF1A\u65B0\u6570\u7EC4\u7684\u957F\u5EA6
3\u3001\u539F\u6570\u7EC4\u53D1\u751F\u6539\u53D8

\u7D22\u5F15\u4E0B\u6807\u662F\u56FA\u5B9A\u7684\u4ECE\u524D\u5411\u540E\uFF0C0 \u5F00\u59CB
</code></pre><h2 id="indexof-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#indexof-\u65B9\u6CD5" aria-hidden="true">#</a> indexOf()\u65B9\u6CD5</h2><pre><code>1\u3001\u4ECE\u5DE6\u5411\u53F3\u67E5\u627E\u6307\u5B9A\u5143\u7D20\u7684\u4E0B\u6807   arr.indexOf(30);
2\u3001\u8FD4\u56DE\u503C\uFF1A\u4E0B\u6807 ; \u82E5\u67E5\u627E\u4E0D\u5230\u8FD4\u56DE\u503C\u4E3A -1 ;
3\u3001\u539F\u6570\u7EC4\u4E0D\u53D1\u751F\u6539\u53D8
</code></pre><h2 id="lastindexof-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#lastindexof-\u65B9\u6CD5" aria-hidden="true">#</a> lastIndexOf()\u65B9\u6CD5</h2><pre><code>1\u3001\u4ECE\u53F3\u5411\u5DE6\u67E5\u627E\u6307\u5B9A\u5143\u7D20\u7684\u4E0B\u6807   arr.lastIndexOf(30);
2\u3001\u8FD4\u56DE\u503C\uFF1A\u4E0B\u6807 ; \u82E5\u67E5\u627E\u4E0D\u5230\u8FD4\u56DE\u503C\u4E3A -1 ;
3\u3001\u539F\u6570\u7EC4\u4E0D\u53D1\u751F\u6539\u53D8

//\u6570\u7EC4\u53BB\u91CD\uFF0C\u5E76\u653E\u5165\u65B0\u7684\u6570\u7EC4
var arr = [1,3,5,7,9,10,3,4,5,3,7];
   var newArr = [];
for(var i = 0 ; i &lt; arr.length ; i++){
    if(newArr.indexOf(arr[i]) == -1){
         newArr.push(arr[i]);
    }
}
console.log(newArr);
</code></pre><h2 id="join-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#join-\u65B9\u6CD5" aria-hidden="true">#</a> join()\u65B9\u6CD5</h2><pre><code>1\u3001\u8FDE\u63A5\uFF1A\u628A\u6570\u7EC4\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32  arr1.join(&quot;-&quot;);   //\u7528 - \u8FDE\u63A5
2\u3001\u8FD4\u56DE\u503C\uFF1A\u65B0\u7684\u5B57\u7B26\u4E32
3\u3001\u539F\u6570\u7EC4\u4E0D\u53D1\u751F\u6539\u53D8
</code></pre><h2 id="concat-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#concat-\u65B9\u6CD5" aria-hidden="true">#</a> concat()\u65B9\u6CD5</h2><pre><code>1\u3001\u62FC\u63A5\u5408\u5E76\u6570\u7EC4              arr1.concat(arr2);   //arr1\u5728\u524D\uFF0Carr2\u5728\u540E
2\u3001\u8FD4\u56DE\u503C\uFF1A\u6570\u7EC41 + \u6570\u7EC42 \u65B0\u7684\u6570\u7EC4
3\u3001\u539F\u6570\u7EC4\u4E0D\u53D1\u751F\u6539\u53D8
</code></pre><h2 id="reverse-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#reverse-\u65B9\u6CD5" aria-hidden="true">#</a> reverse()\u65B9\u6CD5</h2><pre><code>1\u3001\u5012\u7F6E\u6570\u7EC4                 arr.reverse();
2\u3001\u8FD4\u56DE\u5012\u7F6E\u540E\u7684\u65B0\u6570\u7EC4
3\u3001\u539F\u6570\u7EC4\u53D1\u751F\u6539\u53D8
</code></pre><h2 id="slice-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#slice-\u65B9\u6CD5" aria-hidden="true">#</a> slice()\u65B9\u6CD5</h2><pre><code>\u53C2\u6570\u4E00\uFF1A\u5F00\u59CB\u4F4D\u7F6E\u4E0B\u6807\uFF0C\u5305\u542B\u8D77\u59CB\u4F4D\u7F6E\u5143\u7D20
\u53C2\u6570\u4E8C\uFF1A\u7ED3\u675F\u4F4D\u7F6E\u4E0B\u6807\uFF0C\u4E0D\u5305\u542B\u7ED3\u675F\u4F4D\u7F6E\u5143\u7D20

1\u3001\u622A\u53D6\u6570\u7EC4\u5143\u7D20arr.slice(2); \u4ECE\u4E0B\u68072\u622A\u53D6\u5230\u6700\u540E
            arr.slice(2,5);\u4ECE\u4E0B\u68072\u622A\u53D6\u5230\u4E0B\u68075\u4E4B\u524D
2\u3001\u8FD4\u56DE\u622A\u53D6\u5143\u7D20\u6784\u6210\u7684\u65B0\u6570\u7EC4
3\u3001\u539F\u6570\u7EC4\u4E0D\u53D1\u751F\u6539\u53D8
</code></pre><h2 id="splice-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#splice-\u65B9\u6CD5" aria-hidden="true">#</a> splice()\u65B9\u6CD5</h2><pre><code>\u53C2\u6570\u4E00\uFF1A\u5F00\u59CB\u4F4D\u7F6E\u4E0B\u6807\uFF0C\u5305\u542B\u8D77\u59CB\u4F4D\u7F6E\u5143\u7D20  
\u53C2\u6570\u4E8C\uFF1A\u622A\u53D6\u7684\u957F\u5EA6 ; \u82E5 &gt; 0 , \u5219\u5220\u9664\u5143\u7D20 ; \u82E5 = 0 , \u5219\u6DFB\u52A0(\u591A\u4E2A)\u5143\u7D20

1\u3001\u622A\u53D6\u6570\u7EC4\u5143\u7D20
2\u3001\u8FD4\u56DE\u622A\u53D6\u5143\u7D20\u6784\u6210\u7684\u65B0\u6570\u7EC4
3\u3001\u539F\u6570\u7EC4\u53D1\u751F\u6539\u53D8

var arr = [10,20,30,40,50];
console.log(arr.splice(1,3));
//\u7ED3\u679C\uFF1A[20,30,40]

console.log(arr.splice(1,0,true,&#39;abc&#39;));  //\u622A\u53D6\u4E2A\u6570\u4E3A0
//\u7ED3\u679C\uFF1A\u7A7A\u6570\u7EC4

arr.splice(1 , 0 , &#39;abc&#39; , true);
//\u7ED3\u679C\uFF1A[10, &#39;abc&#39; , true ,20,30,40,50]
</code></pre><h2 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort()</h2><pre><code>\u6570\u7EC4\u5143\u7D20\u7684\u6392\u5E8F:\u8F6C\u6362\u4E3A\u5B57\u7B26\u6765\u8FDB\u884C\u6BD4\u8F83\u6392\u5E8F(ASCII\u7801\u6BD4\u8F83)

var arr1 = [&#39;a&#39;,&#39;b&#39;,&#39;ef&#39;,&#39;cd&#39;];
console.log(arr1.sort());      // a ,b ,cd ,ef

var arr2 = [31,21,13,9,52,11];
console.log(arr2.sort());      //11,13,21,32,52,9


//\u5143\u7D20\u4ECE\u5C0F\u5230\u5927\u6392\u5E8F
var arr3 = [31,21,13,9,52,11];
arr3.sort(function(a,b){
    console.log(arr3);
    console.log(a);
    console.log(b);
    return a - b;    //\u4ECE\u5C0F\u5230\u5927
});

function rule(a,b){
    return a-b;
}
arr.sort(rule);
console.log(arr3);
</code></pre><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><pre><code>\u6539\u53D8\u539F\u6570\u7EC4\uFF1A
shift\uFF1A\u5C06\u7B2C\u4E00\u4E2A\u5143\u7D20\u5220\u9664\u5E76\u4E14\u8FD4\u56DE\u5220\u9664\u5143\u7D20\uFF0C\u7A7A\u5373\u4E3Aundefined
unshift\uFF1A\u5411\u6570\u7EC4\u5F00\u5934\u6DFB\u52A0\u5143\u7D20\uFF0C\u5E76\u8FD4\u56DE\u65B0\u7684\u957F\u5EA6
pop\uFF1A\u5220\u9664\u6700\u540E\u4E00\u4E2A\u5E76\u8FD4\u56DE\u5220\u9664\u7684\u5143\u7D20
push\uFF1A\u5411\u6570\u7EC4\u672B\u5C3E\u6DFB\u52A0\u5143\u7D20\uFF0C\u5E76\u8FD4\u56DE\u65B0\u7684\u957F\u5EA6
reverse\uFF1A\u98A0\u5012\u6570\u7EC4\u987A\u5E8F
sort\uFF1A\u5BF9\u6570\u7EC4\u6392\u5E8F
splice(start,length,item)\uFF1A\u5220\uFF0C\u589E\uFF0C\u66FF\u6362\u6570\u7EC4\u5143\u7D20\uFF0C\u8FD4\u56DE\u88AB\u5220\u9664\u6570\u7EC4\uFF0C\u65E0\u5220\u9664\u5219\u4E0D\u8FD4\u56DE

\u4E0D\u6539\u53D8\u539F\u6570\u7EC4\uFF1A
concat\uFF1A\u8FDE\u63A5\u591A\u4E2A\u6570\u7EC4\uFF0C\u8FD4\u56DE\u65B0\u7684\u6570\u7EC4
join\uFF1A\u5C06\u6570\u7EC4\u4E2D\u6240\u6709\u5143\u7D20\u4EE5\u53C2\u6570\u4F5C\u4E3A\u5206\u9694\u7B26\u653E\u5165\u4E00\u4E2A\u5B57\u7B26
slice(start,end)\uFF1A\u8FD4\u56DE\u9009\u5B9A\u5143\u7D20
map,filter,some,every\u7B49\uFF1A\u4E0D\u6539\u53D8\u539F\u6570\u7EC4 
</code></pre><h2 id="\u5192\u6CE1\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5192\u6CE1\u6392\u5E8F" aria-hidden="true">#</a> \u5192\u6CE1\u6392\u5E8F</h2><pre><code>//\u8981\u6C42\u5BF9\u8BE5\u6570\u7EC4\u4E2D\u5143\u7D20\u4ECE\u5C0F\u5230\u5927\u987A\u5E8F\u6392\u5217
var = [10,2,30,3,5,7,34,13]; 
for(var i=0 ; i &lt; arr.length ; i++){      //\u6BD4\u8F83\u7684\u8D9F\u6570
    for(var j=0 ; j &lt; arr.length-i ; j++){   //\u6BCF\u8D9F\u6BD4\u8F83\u7684\u6B21\u6570
        if(arr[j] &gt; arr[j+1]){
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr);
</code></pre>`,30),i=[d];function h(c,t){return e(),n("div",null,i)}const l=r(o,[["render",h],["__file","05-\u6570\u7EC4\u5E38\u7528\u65B9\u6CD5.html.vue"]]);export{l as default};

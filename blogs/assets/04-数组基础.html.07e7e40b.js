import{_ as r,o as n,c as e,f as o}from"./app.824f6518.js";const a={},t=o(`<h1 id="\u6570\u7EC4\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u57FA\u7840" aria-hidden="true">#</a> \u6570\u7EC4\u57FA\u7840</h1><pre><code>\u6570\u7EC4Array\uFF1A\u503C\u7684\u6709\u5E8F\u96C6\u5408
\u6570\u7EC4\u4E2D\u7684\u6570\u636E\u2014\u2014\u2014\u2014\u5143\u7D20 \u5143\u7D20\u4E4B\u95F4,\u9694\u5F00
\u6570\u7EC4\u4E2D\u6570\u636E\u7C7B\u578B\u6CA1\u6709\u9650\u5236\uFF0C\u5F31\u7C7B\u578B\u7684\u4F53\u73B0
</code></pre><h2 id="\u6570\u7EC4-array-\u521B\u5EFA\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4-array-\u521B\u5EFA\u65B9\u5F0F" aria-hidden="true">#</a> \u6570\u7EC4(Array)\u521B\u5EFA\u65B9\u5F0F</h2><pre><code>1\u3001\u5B57\u9762\u91CF\u65B9\u5F0F
    var arr = [];//\u7A7A\u6570\u7EC4
    var arr = [20 , &#39;abc&#39; , &#39;\u8346\u5929\u660E&#39; , true , undefined];

2\u3001\u9AD8\u7EA7\u65B9\u5F0F\uFF08new\u5173\u952E\u5B57\uFF09
    var arr = new Array();   //\u7A7A\u6570\u7EC4
    var arr = new Array(10 , &#39;abc&#39; , true);

    //\u6CE8\u610F\uFF1A\u5982\u679C\u62EC\u53F7\u91CC\u53EA\u6709\u4E00\u4E2A\u6B63\u6574\u6570\uFF0C\u4EE3\u8868\u7684\u6570\u7EC4\u957F\u5EA6
    var arr = new Array(5);  //\u624B\u52A8\u8BBE\u7F6E\u6570\u7EC4\u957F\u5EA6\u4E3A5\uFF0C\u4F46\u672A\u8D4B\u503C
</code></pre><h2 id="\u6570\u7EC4\u5143\u7D20\u7684\u64CD\u4F5C-\u589E\u5220\u6539\u67E5" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u5143\u7D20\u7684\u64CD\u4F5C-\u589E\u5220\u6539\u67E5" aria-hidden="true">#</a> \u6570\u7EC4\u5143\u7D20\u7684\u64CD\u4F5C\uFF08\u589E\u5220\u6539\u67E5\uFF09</h2><pre><code>\u7D22\u5F15\u503C/\u4E0B\u6807\uFF1A\u4ECE 0 ~ (length-1)

var arr = [10 , 20 , 30];
1\u3001\u589E\u3001\u65B0\u589E\u6570\u7EC4\u7684\u5143\u7D20     arr[4] = &quot;\u8346\u5929\u660E&quot;;   //\u6B64\u65F6\u6570\u7EC4\u957F\u5EA6\u4E3A5\uFF0C\u5176\u4E2Darr[4]\u4E3Aundefined
2\u3001\u5220\u3001\u5220\u9664\u6570\u7EC4\u7684\u5143\u7D20     arr.length = 3;     //\u786C\u6027\u7684\u56FA\u5B9A\u957F\u5EA6\u6570\u7EC4,\u957F\u5EA6\u7684\u7075\u6D3B\u6027
3\u3001\u6539\u3001\u4FEE\u6539\u6570\u7EC4\u4E2D\u7684\u5143\u7D20   arr[0] = true;
4\u3001\u67E5\u3001\u8BBF\u95EE\u6570\u7EC4\u4E2D\u7684\u5143\u7D20   \u6570\u7EC4\u540D[\u4E0B\u6807]   arr[i]


var arr = [];
for(var i = 0 ; i &lt; 10 ; i++){
    arr[arr.length] = i + 1;
}
console.log(arr);
</code></pre><h2 id="\u6570\u7EC4\u7684\u904D\u5386-\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u7684\u904D\u5386-\u5FAA\u73AF" aria-hidden="true">#</a> \u6570\u7EC4\u7684\u904D\u5386/\u5FAA\u73AF</h2><pre><code>arr.length  \u80FD\u81EA\u52A8\u76D1\u542C\u7684\u81EA\u52A8\u76D1\u542C

1\u3001for\u5FAA\u73AF
    for(var i = 0 ; i &lt; arr.length ; i++){

    }

2\u3001for in \u5FAA\u73AF
    for(var i in arr){
        console.log(arr[i]);
    }

3\u3001ECMAScript5.0\u65B0\u589E\u7684
    for(var ele of arr){    //of \u65E0\u6CD5\u76D1\u542C\u6570\u7EC4\u4E0B\u6807
        console.log(ele);   //\u76F4\u63A5\u62FF\u5230\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20
    }

4\u3001forEach()\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u904D\u5386\u591A\u7EF4\u6570\u7EC4\u3002 jQuery\u4E2D\u6709\u4E00\u4E2Aeach()\u65B9\u6CD5\uFF0C\u53EA\u80FD\u904D\u5386\u4E00\u7EF4\u6570\u7EC4
    //\u533F\u540D\u51FD\u6570\u4F5C\u4E3A\u5B9E\u53C2
    arr.forEach(function(ele,index){

        //\u53C2\u6570\u4E00\uFF1A\u62FF\u5230\u7684\u662F\u6BCF\u4E2A\u5143\u7D20
        console.log(ele);

        //\u53C2\u6570\u4E8C\uFF1A\u62FF\u5230\u7684\u662F\u6570\u7EC4\u4E0B\u6807
        console.log(index);

    });
</code></pre><h2 id="js\u7684\u5E94\u7528\u4E00-\u7ED9div\u8BBE\u7F6E\u80CC\u666F\u8272" tabindex="-1"><a class="header-anchor" href="#js\u7684\u5E94\u7528\u4E00-\u7ED9div\u8BBE\u7F6E\u80CC\u666F\u8272" aria-hidden="true">#</a> JS\u7684\u5E94\u7528\u4E00\uFF08\u7ED9div\u8BBE\u7F6E\u80CC\u666F\u8272\uFF09</h2><p>1\u3001 \u51FD\u6570\u7684\u505A\u6CD5</p><pre><code>var divArr = document.getElementsByTagName(&quot;div&quot;);
function colorDiv(i,color){
    divArr[i].style.backgroundColor = color;
}
colorDiv(0,&quot;red&quot;);
colorDiv(1,&quot;yellow&quot;);
colorDiv(2,&quot;green&quot;);
colorDiv(3,&quot;blue&quot;);
</code></pre><p>2\u3001for\u5FAA\u73AF</p><pre><code>var colorArr = [&#39;red&#39; , &#39;yellow&#39; , &#39;blue&#39; , &#39;pink&#39;];
var divArr = document.getElementsByTagName(&quot;div&quot;);
for(var i = 0 ; i &lt; divArr.length ; i++){
    divArr[i].style.backgroundColor = colorArr[i];
}
</code></pre><h2 id="js-\u7684\u5E94\u7528\u4E8C-\u8BBE\u7F6E\u5947\u5076\u884C\u989C\u8272\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#js-\u7684\u5E94\u7528\u4E8C-\u8BBE\u7F6E\u5947\u5076\u884C\u989C\u8272\u4E0D\u540C" aria-hidden="true">#</a> JS \u7684\u5E94\u7528\u4E8C\uFF08\u8BBE\u7F6E\u5947\u5076\u884C\u989C\u8272\u4E0D\u540C\uFF09</h2><pre><code>1\u3001\u83B7\u53D6\u6807\u7B7E   2\u3001\u8BBE\u7F6E\u6837\u5F0F

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
</code></pre><p>4\u3001 \u968F\u673A\u751F\u6210\u80CC\u666F\u989C\u8272\u2014\u20142\u79CD\u65B9\u6CD5</p><pre><code>//rgb\u65B9\u5F0F
var divs = document.getElementsByTagName(&quot;div&quot;);
for(var i = 0 ; i &lt; divs.length ; i++){
    var ran1 = parseInt(Math.random()*256);
    var ran2 = parseInt(Math.random()*256);
    var ran3 = parseInt(Math.random()*256);
    divs[i].style.backgroundColor = &quot;rgb(&quot;+ran1+&quot;,&quot;+ran2+&quot;,&quot;+ran3+&quot;)&quot;;
}

//\u5341\u516D\u8FDB\u5236\u7684\u65B9\u5F0F
var colorArr = [0,1,2,3,4,5,6,7,8,9,&#39;a&#39;,&#39;b&#39;,&#39;c&#39;,&#39;d&#39;,&#39;e&#39;,&#39;f&#39;];     //  16\u4E2A\u6570\u5B57
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
</code></pre><h2 id="arguments\u8BB0\u5F55\u5B9E\u53C2" tabindex="-1"><a class="header-anchor" href="#arguments\u8BB0\u5F55\u5B9E\u53C2" aria-hidden="true">#</a> arguments\u8BB0\u5F55\u5B9E\u53C2</h2><pre><code>\u51FD\u6570\u5185\u90E8\uFF0C\u76D1\u542C\u5B9E\u53C2

function fn(){
    console.log(arguments);
    //\u53EF\u4EE5\u8BBF\u95EE\u5B9E\u53C2\u7684\u503C
    console.log(arguments[0]);
    console.log(arguments[1]);
}
fn(10,20);

//\u7528arguments\u7B97\u4E09\u4E2A\u6570\u4E2D\u7684\u6700\u5927\u503C
function fn(){
    var max = arguments[0];
    for(var i = 0 ; i &lt; arguments.length ; i++){
        if(max &lt; arguments[i]){
            max = arguments[i];
        }
    }
    return max;
}
alert(&quot;\u6700\u5927\u503C\u662F\uFF1A&quot;+fn(60,40,77));
</code></pre>`,19),i=[t];function d(l,c){return n(),e("div",null,i)}const s=r(a,[["render",d],["__file","04-\u6570\u7EC4\u57FA\u7840.html.vue"]]);export{s as default};

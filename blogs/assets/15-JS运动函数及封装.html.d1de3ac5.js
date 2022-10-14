import{_ as e,o as t,c as n,f as r}from"./app.29c262e3.js";const a={},o=r(`<h1 id="js\u8FD0\u52A8\u51FD\u6570\u53CA\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#js\u8FD0\u52A8\u51FD\u6570\u53CA\u5C01\u88C5" aria-hidden="true">#</a> JS\u8FD0\u52A8\u51FD\u6570\u53CA\u5C01\u88C5</h1><h2 id="\u56FE\u7247\u6EDA\u52A8" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u6EDA\u52A8" aria-hidden="true">#</a> \u56FE\u7247\u6EDA\u52A8</h2><pre><code>var timer;
btn.onclick = function(){
    setInterval(function(){
        div.style.left = div.offsetLeft + 10 + &quot;px&quot;;
        if(div.offsetLeft &gt; 200){
            clearInterval(timer);
            div.style.left = &quot;200px&quot;;
        }
    },100);
}


//\u5143\u7D20\u5F53\u524D\u4F4D\u7F6E\uFF1A\u5143\u7D20.offsetLeft/offsetTop + &quot;px&quot;;
</code></pre><h2 id="\u8FD0\u52A8\u516C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u52A8\u516C\u5F0F" aria-hidden="true">#</a> \u8FD0\u52A8\u516C\u5F0F</h2><p>(1)\u5300\u901F\u8FD0\u52A8\u516C\u5F0F</p><pre><code>\u5143\u7D20.style.top/left = \u5143\u7D20.offsetLeft/offsetTop  +/-  10 + &quot;px&quot;;
</code></pre><p>(2)\u7F13\u901F\u8FD0\u52A8\u516C\u5F0F</p><pre><code>\u5143\u7D20.style.top/left = \u5143\u7D20.offsetLeft/offsetTop + (target-\u5F53\u524D\u4F4D\u7F6E) / 10 + &quot;px&quot;;
</code></pre><h2 id="\u5300\u901F\u8FD0\u52A8\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5300\u901F\u8FD0\u52A8\u51FD\u6570" aria-hidden="true">#</a> \u5300\u901F\u8FD0\u52A8\u51FD\u6570</h2><pre><code>var timer;
function animate(ele,target){
    clearInterval(ele.timer);   //\u5F52\u5C5E\u8005ele
    var speed = (target &gt; ele.offsetLeft) ? 10 : -10;

    ele.timer = setInterval(function(){
        var result = target - ele.offsetLeft;
        ele.style.left = ele.offsetLeft + speed + &quot;px&quot;;

        if( Math.abs(result) &lt;= 10 ){
            clearInterval(ele.timer);
            ele.style.left = target + &quot;px&quot;;
        }
    },100);
}
</code></pre><h2 id="\u7F13\u901F\u8FD0\u52A8\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7F13\u901F\u8FD0\u52A8\u51FD\u6570" aria-hidden="true">#</a> \u7F13\u901F\u8FD0\u52A8\u51FD\u6570</h2><pre><code>var timer;
function animate(obj,target){
    clearInterval(obj.timer);   //\u5F52\u5C5E\u8005obj

    obj.timer = setInterval(function(){
        var speed = (target - obj.offsetLeft) / 10;
        speed = (speed &gt; 0) ? Math.ceil(speed) : Math.floor(speed);
        obj.style.left = obj.offsetLeft + speed + &quot;px&quot;;

        if(target == obj.offsetLeft){
            clearInterval(obj.timer);
            obj.style.left = target + &quot;px&quot;;
        }
    },20);
}
</code></pre>`,12),f=[o];function s(l,i){return t(),n("div",null,f)}const c=e(a,[["render",s],["__file","15-JS\u8FD0\u52A8\u51FD\u6570\u53CA\u5C01\u88C5.html.vue"]]);export{c as default};

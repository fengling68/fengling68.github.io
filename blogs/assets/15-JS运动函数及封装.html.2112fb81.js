import{_ as e,o as t,c as n,f as r}from"./app.d9b83bc9.js";const a={},o=r(`<h1 id="js运动函数及封装" tabindex="-1"><a class="header-anchor" href="#js运动函数及封装" aria-hidden="true">#</a> JS运动函数及封装</h1><h2 id="图片滚动" tabindex="-1"><a class="header-anchor" href="#图片滚动" aria-hidden="true">#</a> 图片滚动</h2><pre><code>var timer;
btn.onclick = function(){
    setInterval(function(){
        div.style.left = div.offsetLeft + 10 + &quot;px&quot;;
        if(div.offsetLeft &gt; 200){
            clearInterval(timer);
            div.style.left = &quot;200px&quot;;
        }
    },100);
}


//元素当前位置：元素.offsetLeft/offsetTop + &quot;px&quot;;
</code></pre><h2 id="运动公式" tabindex="-1"><a class="header-anchor" href="#运动公式" aria-hidden="true">#</a> 运动公式</h2><p>(1)匀速运动公式</p><pre><code>元素.style.top/left = 元素.offsetLeft/offsetTop  +/-  10 + &quot;px&quot;;
</code></pre><p>(2)缓速运动公式</p><pre><code>元素.style.top/left = 元素.offsetLeft/offsetTop + (target-当前位置) / 10 + &quot;px&quot;;
</code></pre><h2 id="匀速运动函数" tabindex="-1"><a class="header-anchor" href="#匀速运动函数" aria-hidden="true">#</a> 匀速运动函数</h2><pre><code>var timer;
function animate(ele,target){
    clearInterval(ele.timer);   //归属者ele
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
</code></pre><h2 id="缓速运动函数" tabindex="-1"><a class="header-anchor" href="#缓速运动函数" aria-hidden="true">#</a> 缓速运动函数</h2><pre><code>var timer;
function animate(obj,target){
    clearInterval(obj.timer);   //归属者obj

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
</code></pre>`,12),f=[o];function s(l,i){return t(),n("div",null,f)}const c=e(a,[["render",s],["__file","15-JS运动函数及封装.html.vue"]]);export{c as default};

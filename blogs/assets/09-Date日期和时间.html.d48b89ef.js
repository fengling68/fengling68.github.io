import{_ as e,o as a,c as d,f as t}from"./app.034b081e.js";const r={},o=t(`<h1 id="date日期和时间" tabindex="-1"><a class="header-anchor" href="#date日期和时间" aria-hidden="true">#</a> Date日期和时间</h1><h2 id="创建日期" tabindex="-1"><a class="header-anchor" href="#创建日期" aria-hidden="true">#</a> 创建日期</h2><pre><code>var date1 = new Date();
console.log(date1);
</code></pre><h2 id="设置日期" tabindex="-1"><a class="header-anchor" href="#设置日期" aria-hidden="true">#</a> 设置日期</h2><pre><code>var date2 = new Date(&quot;2017/8/30 17:30&quot;);
console.log(date2);

倒计时：2个时间节点 当前时间、结束时间；
差值：转换成时分秒，var milli = date1 - date2; 
</code></pre><h2 id="获取时间" tabindex="-1"><a class="header-anchor" href="#获取时间" aria-hidden="true">#</a> 获取时间</h2><p>在获得的date1中拿到具体的需要的时间</p><p>1、获取年份</p><pre><code>date1.getFullYear();
</code></pre><p>2、获取月份(比实际月份小 1 )</p><pre><code>date1.getMonth()+1;
</code></pre><p>3、获取日</p><pre><code>date1.getDate();
</code></pre><p>4、获取星期(返回值：0~6)</p><pre><code>date1.getDay();
</code></pre><p>5、获取小时(24小时制0~23)</p><pre><code>date1.getHours();
</code></pre><p>6、获取分钟</p><pre><code>date1.getMinutes();
</code></pre><p>7、获取秒数</p><pre><code>date1.getSeconds();
</code></pre><p>8、获取毫秒(1s = 1000ms)</p><pre><code>date1.getMilliseconds();
</code></pre><p>9、getTime();获取时间方法</p><pre><code>getTime():距离1970/1/1 0:0:0 累积的毫秒数
</code></pre><p>10、date1.toLocaleTimeString(); //时分秒</p><p>11、date1.toLocateDateString(); //年月日</p><h2 id="设置时间" tabindex="-1"><a class="header-anchor" href="#设置时间" aria-hidden="true">#</a> 设置时间</h2><p>1、设置年</p><pre><code>date1.setFullYear(2018);
</code></pre><p>2、设置月( month-1 )</p><pre><code>date1.setMonth(2-1);    //设置二月
</code></pre><p>3、设置日</p><pre><code>date1.setDate(21);
</code></pre><p>4、设置时</p><pre><code>date1.setHours(17);
</code></pre><p>5、设置分</p><pre><code>date1.setMinutes(30);
</code></pre><p>6、设置秒</p><pre><code>date1.setSeconds(10);
</code></pre><h2 id="星期数转换" tabindex="-1"><a class="header-anchor" href="#星期数转换" aria-hidden="true">#</a> 星期数转换</h2><p>用date得到的星期是 0 ~ 6之间的数字，将其转化为对应的星期数。</p><pre><code>function dayFn(num){
    var days = [&#39;星期天&#39;,&#39;星期一&#39;,&#39;星期二&#39;,&#39;星期三&#39;,&#39;星期四&#39;,&#39;星期五&#39;,&#39;星期六&#39;];
    return days[num];
}
</code></pre>`,43),p=[o];function n(c,s){return a(),d("div",null,p)}const i=e(r,[["render",n],["__file","09-Date日期和时间.html.vue"]]);export{i as default};

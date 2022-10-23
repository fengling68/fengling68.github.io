import{_ as e,o as a,c as d,f as t}from"./app.6394d85c.js";const r={},o=t(`<h1 id="date\u65E5\u671F\u548C\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#date\u65E5\u671F\u548C\u65F6\u95F4" aria-hidden="true">#</a> Date\u65E5\u671F\u548C\u65F6\u95F4</h1><h2 id="\u521B\u5EFA\u65E5\u671F" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u65E5\u671F" aria-hidden="true">#</a> \u521B\u5EFA\u65E5\u671F</h2><pre><code>var date1 = new Date();
console.log(date1);
</code></pre><h2 id="\u8BBE\u7F6E\u65E5\u671F" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u65E5\u671F" aria-hidden="true">#</a> \u8BBE\u7F6E\u65E5\u671F</h2><pre><code>var date2 = new Date(&quot;2017/8/30 17:30&quot;);
console.log(date2);

\u5012\u8BA1\u65F6\uFF1A2\u4E2A\u65F6\u95F4\u8282\u70B9 \u5F53\u524D\u65F6\u95F4\u3001\u7ED3\u675F\u65F6\u95F4\uFF1B
\u5DEE\u503C\uFF1A\u8F6C\u6362\u6210\u65F6\u5206\u79D2\uFF0Cvar milli = date1 - date2; 
</code></pre><h2 id="\u83B7\u53D6\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u65F6\u95F4" aria-hidden="true">#</a> \u83B7\u53D6\u65F6\u95F4</h2><p>\u5728\u83B7\u5F97\u7684date1\u4E2D\u62FF\u5230\u5177\u4F53\u7684\u9700\u8981\u7684\u65F6\u95F4</p><p>1\u3001\u83B7\u53D6\u5E74\u4EFD</p><pre><code>date1.getFullYear();
</code></pre><p>2\u3001\u83B7\u53D6\u6708\u4EFD(\u6BD4\u5B9E\u9645\u6708\u4EFD\u5C0F 1 )</p><pre><code>date1.getMonth()+1;
</code></pre><p>3\u3001\u83B7\u53D6\u65E5</p><pre><code>date1.getDate();
</code></pre><p>4\u3001\u83B7\u53D6\u661F\u671F(\u8FD4\u56DE\u503C\uFF1A0~6)</p><pre><code>date1.getDay();
</code></pre><p>5\u3001\u83B7\u53D6\u5C0F\u65F6(24\u5C0F\u65F6\u52360~23)</p><pre><code>date1.getHours();
</code></pre><p>6\u3001\u83B7\u53D6\u5206\u949F</p><pre><code>date1.getMinutes();
</code></pre><p>7\u3001\u83B7\u53D6\u79D2\u6570</p><pre><code>date1.getSeconds();
</code></pre><p>8\u3001\u83B7\u53D6\u6BEB\u79D2(1s = 1000ms)</p><pre><code>date1.getMilliseconds();
</code></pre><p>9\u3001getTime();\u83B7\u53D6\u65F6\u95F4\u65B9\u6CD5</p><pre><code>getTime():\u8DDD\u79BB1970/1/1 0:0:0 \u7D2F\u79EF\u7684\u6BEB\u79D2\u6570
</code></pre><p>10\u3001date1.toLocaleTimeString(); //\u65F6\u5206\u79D2</p><p>11\u3001date1.toLocateDateString(); //\u5E74\u6708\u65E5</p><h2 id="\u8BBE\u7F6E\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u65F6\u95F4" aria-hidden="true">#</a> \u8BBE\u7F6E\u65F6\u95F4</h2><p>1\u3001\u8BBE\u7F6E\u5E74</p><pre><code>date1.setFullYear(2018);
</code></pre><p>2\u3001\u8BBE\u7F6E\u6708( month-1 )</p><pre><code>date1.setMonth(2-1);    //\u8BBE\u7F6E\u4E8C\u6708
</code></pre><p>3\u3001\u8BBE\u7F6E\u65E5</p><pre><code>date1.setDate(21);
</code></pre><p>4\u3001\u8BBE\u7F6E\u65F6</p><pre><code>date1.setHours(17);
</code></pre><p>5\u3001\u8BBE\u7F6E\u5206</p><pre><code>date1.setMinutes(30);
</code></pre><p>6\u3001\u8BBE\u7F6E\u79D2</p><pre><code>date1.setSeconds(10);
</code></pre><h2 id="\u661F\u671F\u6570\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u661F\u671F\u6570\u8F6C\u6362" aria-hidden="true">#</a> \u661F\u671F\u6570\u8F6C\u6362</h2><p>\u7528date\u5F97\u5230\u7684\u661F\u671F\u662F 0 ~ 6\u4E4B\u95F4\u7684\u6570\u5B57\uFF0C\u5C06\u5176\u8F6C\u5316\u4E3A\u5BF9\u5E94\u7684\u661F\u671F\u6570\u3002</p><pre><code>function dayFn(num){
    var days = [&#39;\u661F\u671F\u5929&#39;,&#39;\u661F\u671F\u4E00&#39;,&#39;\u661F\u671F\u4E8C&#39;,&#39;\u661F\u671F\u4E09&#39;,&#39;\u661F\u671F\u56DB&#39;,&#39;\u661F\u671F\u4E94&#39;,&#39;\u661F\u671F\u516D&#39;];
    return days[num];
}
</code></pre>`,43),p=[o];function n(c,s){return a(),d("div",null,p)}const i=e(r,[["render",n],["__file","09-Date\u65E5\u671F\u548C\u65F6\u95F4.html.vue"]]);export{i as default};

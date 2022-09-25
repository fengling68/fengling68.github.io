import{_ as e,o as n,c as t,e as a}from"./app.c6be76b0.js";const r={},d=a(`<h1 id="rem\u3001\u79FB\u52A8\u7AEF\u4E8B\u4EF6\u3001html\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#rem\u3001\u79FB\u52A8\u7AEF\u4E8B\u4EF6\u3001html\u52A0\u8F7D" aria-hidden="true">#</a> rem\u3001\u79FB\u52A8\u7AEF\u4E8B\u4EF6\u3001html\u52A0\u8F7D</h1><h2 id="\u4E00\u3001rem\u3001em\u3001px\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001rem\u3001em\u3001px\u7684\u5173\u7CFB" aria-hidden="true">#</a> \u4E00\u3001rem\u3001em\u3001px\u7684\u5173\u7CFB</h2><h3 id="_1\u3001\u4EC0\u4E48\u662Frem" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u4EC0\u4E48\u662Frem" aria-hidden="true">#</a> 1\u3001\u4EC0\u4E48\u662Frem\uFF1F</h3><pre><code>css3\u65B0\u7684\u5355\u4F4D\u3002
@media \u6839\u636E\u6B64\u8BBE\u7F6E\u53EF\u4EE5\u6839\u636E\u5C4F\u5E55\u5BBD\u5EA6\u8BBE\u7F6Ehtml\u7684\u5B57\u4F53\u5927\u5C0F,\u4ECE\u800C\u6539\u53D8\u5176\u4ED6\u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F\u5BBD\u5EA6\u9AD8\u5EA6\u7B49\u5C5E\u6027

JS\u8BBE\u7F6E\u89C6\u53E3\u5BBD\u5EA6 \uFF1Adocument.documentElement.style.fontSize=&quot;20px&quot;;
(html.style.fontSize)
</code></pre><h3 id="_2\u3001\u4E09\u79CD\u5355\u4F4D" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u4E09\u79CD\u5355\u4F4D" aria-hidden="true">#</a> 2\u3001\u4E09\u79CD\u5355\u4F4D</h3><pre><code>px,\u4F9D\u8D56\u7684\u5206\u8FA8\u7387
em,\u76F8\u5BF9\u957F\u5EA6\u5355\u4F4D,\u68C0\u6D4B\u7236\u7EA7\u5143\u7D20\u5B57\u4F53\u5927\u5C0F\uFF0C\u4F9D\u8D56\u7236\u7EA7\u5143\u7D20\u5B57\u4F53\u8FDB\u884C\u8BBE\u7F6E
rem,\u76F8\u5BF9\u957F\u5EA6\u5355\u4F4D\uFF0C\u68C0\u6D4Broot\u6839\u5143\u7D20\u5B57\u4F53\u5927\u5C0F\uFF0C\u4F9D\u8D56html\u8BBE\u7F6E
</code></pre><h3 id="_3\u3001rem\u548Cem\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_3\u3001rem\u548Cem\u7684\u533A\u522B" aria-hidden="true">#</a> 3\u3001rem\u548Cem\u7684\u533A\u522B\uFF1F</h3><pre><code>\u90FD\u662F\u76F8\u5BF9\u957F\u5EA6  \u90FD\u662F\u68C0\u6D4B\u5B57\u4F53\u5927\u5C0F
rem \u6839\u636E\u6839\u5143\u7D20\u5B57\u4F53\u5927\u5C0F  ( html{font-size:20px;} )
em \u6839\u636E\u7236\u5143\u7D20\u5B57\u4F53\u5927\u5C0F
</code></pre><h2 id="\u4E8C\u3001\u79FB\u52A8\u7AEF\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u79FB\u52A8\u7AEF\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8C\u3001\u79FB\u52A8\u7AEF\u4E8B\u4EF6</h2><h3 id="_1\u3001\u5C4F\u5E55\u65B9\u5411\u6539\u53D8\u4E8B\u4EF6-orientationchange" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u5C4F\u5E55\u65B9\u5411\u6539\u53D8\u4E8B\u4EF6-orientationchange" aria-hidden="true">#</a> 1\u3001\u5C4F\u5E55\u65B9\u5411\u6539\u53D8\u4E8B\u4EF6 orientationchange</h3><pre><code>window.addEventListener(&quot;orientationchange&quot;,function(){
    alert(&quot;\u6211\u65B9\u5411\u53D1\u751F\u6539\u53D8\u5566\uFF01&quot;);
})
</code></pre><h3 id="_2\u3001\u7A97\u53E3\u5C3A\u5BF8\u53D1\u751F\u53D8\u5316-\u89E6\u53D1" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u7A97\u53E3\u5C3A\u5BF8\u53D1\u751F\u53D8\u5316-\u89E6\u53D1" aria-hidden="true">#</a> 2\u3001\u7A97\u53E3\u5C3A\u5BF8\u53D1\u751F\u53D8\u5316\uFF0C\u89E6\u53D1</h3><pre><code>window.addEventListener(&quot;resize&quot;,function(){
    alert(&quot;\u6211\u6539\u53D8\u5566\uFF01&quot;)
})
</code></pre><h3 id="_3\u3001dom\u8282\u70B9\u52A0\u8F7D\u5B8C\u6210-\u89E6\u53D1\u8BE5\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3\u3001dom\u8282\u70B9\u52A0\u8F7D\u5B8C\u6210-\u89E6\u53D1\u8BE5\u4E8B\u4EF6" aria-hidden="true">#</a> 3\u3001DOM\u8282\u70B9\u52A0\u8F7D\u5B8C\u6210\uFF0C\u89E6\u53D1\u8BE5\u4E8B\u4EF6</h3><pre><code>window.addEventListener(&quot;DOMContentLoaded&quot;,function(){
    alert(&quot;DOM\u8282\u70B9\u52A0\u8F7D\u5B8C\u6210\uFF01&quot;);
})
</code></pre><h3 id="_4\u3001\u83B7\u5F97\u89C6\u53E3\u5BBD\u5EA6" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u83B7\u5F97\u89C6\u53E3\u5BBD\u5EA6" aria-hidden="true">#</a> 4\u3001\u83B7\u5F97\u89C6\u53E3\u5BBD\u5EA6</h3><pre><code>\u56E0\u4E3A\u5728\u89C6\u53E3\u6807\u7B7E\u4E2D\u8BBE\u7F6E\u4E86\uFF0C\u89C6\u53E3\u5BBD\u5EA6\u7B49\u4E8E\u8BBE\u5907\u5BBD\u5EA6
document.documentElement.clientWidth\u5F97\u5230\u8BBE\u5907\u5B9E\u9645\u5BBD\u5EA6
</code></pre><h2 id="\u4E09\u3001html\u52A0\u8F7D\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001html\u52A0\u8F7D\u987A\u5E8F" aria-hidden="true">#</a> \u4E09\u3001html\u52A0\u8F7D\u987A\u5E8F</h2><pre><code>1\u3001\u89E3\u6790HTML\u7ED3\u6784
2\u3001\u52A0\u8F7D\u5916\u90E8\u6587\u4EF6
3\u3001\u6267\u884C\u811A\u672C\u4EE3\u7801
4\u3001DOM\u6811\u6784\u5EFA\u5B8C\u6210    --- DOMContentLoaded
5\u3001\u52A0\u8F7D\u56FE\u7247\u7B49\u5916\u90E8\u8D44\u6E90
6\u3001\u9875\u9762\u52A0\u8F7D\u5B8C\u6BD5        --- load
</code></pre><h2 id="\u56DB\u3001js\u52A8\u6001\u83B7\u53D6\u89C6\u53E3\u5BBD\u5EA6-\u540C\u65F6\u8BBE\u7F6Ehtml\u7684\u5B57\u4F53\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001js\u52A8\u6001\u83B7\u53D6\u89C6\u53E3\u5BBD\u5EA6-\u540C\u65F6\u8BBE\u7F6Ehtml\u7684\u5B57\u4F53\u5927\u5C0F" aria-hidden="true">#</a> \u56DB\u3001js\u52A8\u6001\u83B7\u53D6\u89C6\u53E3\u5BBD\u5EA6,\u540C\u65F6\u8BBE\u7F6Ehtml\u7684\u5B57\u4F53\u5927\u5C0F</h2><pre><code>\u529F\u80FD\uFF1A\u6839\u636E\u4E0D\u540C\u578B\u53F7\u7684\u624B\u673A\uFF0C\u8BBE\u7F6E\u4E0D\u540C\u7684html\u7684font-size
\u8BBE\u7F6E\u4E24\u4E2A\u5F62\u53C2\uFF0Cdoc\u4E3Adocument   win\u4E3Awindow

(function(doc,win){

    var remCale = function(){
        //\u83B7\u53D6\u89C6\u53E3\u5BBD\u5EA6
           var clientWidth = doc.documentElement.clientWidth;

        //UI\u7ED9\u7684\u8BBE\u8BA1\u7A3F\u901A\u5E38\u90FD\u662F320px\uFF0C\u6216\u8005640px
        //\u8BBE\u7F6E\u5B57\u4F53\u5927\u5C0F  1rem=100px  320px\u8BBE\u8BA1\u7A3F
        doc.documentElement.style.fontSize=(clientWidth/320)*100*&quot;px&quot;;
    }

    //\u5728\u6587\u6863\u6700\u5148\u52A0\u8F7D\u5B8C\u6210\u7684\u65F6\u5019\uFF0C\u89E6\u53D1remCale
    doc.addEventListener(&quot;DOMContentLoaded&quot;,remCale);

    //\u7FFB\u8F6C\u624B\u673A\uFF0C\u6216\u6539\u53D8\u6D4F\u89C8\u5668\u5BBD\u5EA6\u7684\u65F6\u5019\uFF0C\u89E6\u53D1remCale
    win.addEventListener(&quot;resize&quot;,remCale);
    win.addEventListener(&quot;orientationchange&quot;,remCale);

})(document,window)
</code></pre>`,21),o=[d];function h(i,c){return n(),t("div",null,o)}const l=e(r,[["render",h],["__file","08-rem\u3001\u79FB\u52A8\u7AEF\u4E8B\u4EF6\u3001html\u52A0\u8F7D.html.vue"]]);export{l as default};

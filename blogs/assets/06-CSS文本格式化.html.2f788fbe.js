import{_ as e,o,c as n,a as p}from"./app.7bfbe7ae.js";const r={},t=p(`<h1 id="css\u6587\u672C\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#css\u6587\u672C\u683C\u5F0F\u5316" aria-hidden="true">#</a> CSS\u6587\u672C\u683C\u5F0F\u5316</h1><h2 id="\u63A7\u5236\u5B57\u4F53" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u5B57\u4F53" aria-hidden="true">#</a> \u63A7\u5236\u5B57\u4F53</h2><p>1\u3001\u6307\u5B9A\u5B57\u4F53</p><pre><code>font-family:&quot;\u5FAE\u8F6F\u96C5\u9ED1&quot;,&quot;Lantinghei&quot;;
font-family:&quot;Microsoft YaHei&quot;,&quot;\u5FAE\u8F6F\u96C5\u9ED1&quot;;
\u5148\u8BBE\u7F6E\u82F1\u6587\uFF0C\u5728\u8BBE\u7F6E\u4E2D\u6587\u3002
</code></pre><p>2\u3001\u5B57\u4F53\u5927\u5C0F</p><pre><code>font-size:12px;
</code></pre><p>3\u3001\u5B57\u4F53\u52A0\u7C97</p><pre><code>font-weight:normal/blod/100-900;
</code></pre><p>4\u3001\u5B57\u4F53\u6837\u5F0F</p><pre><code>    font-style:italic;  \u503E\u659C
</code></pre><p>5\u3001\u5C0F\u578B\u5927\u5199\u5B57\u6BCD</p><pre><code>font-variant:small-caps;
</code></pre><p>6\u3001\u884C\u9AD8</p><pre><code>font:font-size/line-height;  \u884C\u9AD8
</code></pre><h2 id="\u63A7\u5236\u6587\u672C\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u6587\u672C\u683C\u5F0F" aria-hidden="true">#</a> \u63A7\u5236\u6587\u672C\u683C\u5F0F</h2><p>1\u3001\u6587\u672C\u989C\u8272</p><pre><code>color:value;
</code></pre><p>2\u3001\u6587\u5B57\u6C34\u5E73\u6392\u5217\u65B9\u5F0F</p><pre><code>text-align:left/right/center;
</code></pre><p>3\u3001\u6587\u672C\u7EBF\u6761\u4FEE\u9970</p><pre><code>text-decoration:none/underline/overline/line-through;
                        \u4E0B\u5212\u7EBF/\u4E0A\u5212\u7EBF/\u5220\u9664\u7EBF
</code></pre><p>4\u3001\u884C\u9AD8 \u8BBE\u7F6E\u884C\u95F4\u8DDD</p><pre><code>line-height:20px;

\u7279\u6B8A\u7528\u6CD5\uFF1A\u53EF\u4EE5\u63A7\u5236\u4E00\u884C\u6587\u672C\u5728div\u4E2D\u5782\u76F4\u5C45\u4E2D\u3002
height:20px;
line-height:20px;
</code></pre><p>5\u3001\u9996\u884C\u6587\u672C\u7F29\u8FDB</p><pre><code>text-indent:40px;
</code></pre><p>6\u3001\u6587\u672C\u9634\u5F71\uFF08\u548Cbox-shadow\u7528\u6CD5\u4E00\u81F4\uFF09</p><pre><code>text-shadow:h-shadow v-shadow blur color;
\u6C34\u5E73\u9634\u5F71\u4F4D\u7F6E/\u5782\u76F4\u9634\u5F71\u4F4D\u7F6E/\u6A21\u7CCA\u8DDD\u79BB/\u9634\u5F71\u989C\u8272

\u4F8B\uFF1Atext-shadow:10px 20px 5px red;
</code></pre><h2 id="\u6587\u672C\u6EA2\u51FA\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u6EA2\u51FA\u5904\u7406" aria-hidden="true">#</a> \u6587\u672C\u6EA2\u51FA\u5904\u7406</h2><p>1\u3001\u5904\u7406\u7A7A\u767D</p><pre><code>while-space:normal/nowrap;
normal:\u91C7\u7528\u6D4F\u89C8\u5668\u9ED8\u8BA4\u8BBE\u7F6E\uFF08\u9ED8\u8BA4\u6362\u884C\uFF09
nowrap:\u4E0D\u6362\u884C
</code></pre><p>2\u3001\u6587\u672C\u6EA2\u51FA</p><pre><code>text-overflow:clip/ellipsis;
clip:\u88C1\u526A\uFF0C\u62E6\u8170\u622A\u65AD
ellipsis:\u7528...\u6765\u8868\u793A\u672A\u663E\u793A\u7684\u5185\u5BB9
</code></pre><p>3\u3001<strong>\u8BE5\u5C5E\u6027\u5FC5\u987B\u4E0E overflow:hidden \u548C white-space:nowrap \u8054\u7528\u3002</strong></p><pre><code>// \u6587\u672C\u6EA2\u51FA\u5355\u884C\u663E\u793A
.single {
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
</code></pre><p>4\u3001\u6587\u672C\u6EA2\u51FA\u591A\u884C\u663E\u793A</p><pre><code>.multiple {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</code></pre>`,36),d=[t];function a(i,c){return o(),n("div",null,d)}const h=e(r,[["render",a],["__file","06-CSS\u6587\u672C\u683C\u5F0F\u5316.html.vue"]]);export{h as default};

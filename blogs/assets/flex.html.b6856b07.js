import{_ as n,o as s,c as a,e as t}from"./app.c6be76b0.js";const p={},e=t(`<h1 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> flex</h1><p>\u4EC5\u4E2A\u4EBA\u5B66\u4E60\u603B\u7ED3\u4E4B\u4F5C\uFF0C\u53EF\u80FD\u5B58\u5728\u95EE\u9898\uFF0C\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4F1A\u4E0D\u65AD\u4F18\u5316\u3002</p><h2 id="\u4E00\u3001\u57FA\u672C\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u57FA\u672C\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> \u4E00\u3001\u57FA\u672C\u77E5\u8BC6\u70B9</h2><blockquote><p>1\u3001px : \u50CF\u7D20, \u903B\u8F91\u50CF\u7D20 \u76F8\u5BF9\u5355\u4F4D, \u62BD\u8C61\u7684\u5355\u4F4D\u957F\u5EA6</p><p>2\u3001dp : \u5728\u53C2\u6570\u4E2D, \u663E\u793A\u7684\u662F\u7269\u7406\u50CF\u7D20, \u5B9E\u9645\u7684\u5355\u4F4D\u957F\u5EA6, \u8BBE\u5907\u65E0\u5173\u50CF\u7D20</p><p>3\u3001dpr: \u8BBE\u5907\u50CF\u7D20\u7F29\u653E\u6BD4 1px = dpr^2*dp 4\u3001\u5C4F\u5E55\u50CF\u7D20\u5BC6\u5EA6ppi: \u5C4F\u5E55\u6BCF\u82F1\u5BF8\u50CF\u7D20\u6570\u91CF</p><p>5\u3001ppi = \u5C4F\u5E55\u5BF9\u89D2\u7EBF\u957F\u5EA6 / \u5C4F\u5E55\u82F1\u5BF8</p><p>\u4F8B iPhone5\uFF1Appi = sqrt(1136<em>1136 + 640</em>640)/4</p></blockquote><h2 id="\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C40" aria-hidden="true">#</a> \u5E03\u5C40</h2><pre><code>//html
&lt;div class=&quot;container&quot;&gt;
    &lt;div class=&quot;box&quot;&gt;1&lt;/div&gt;
    &lt;div class=&quot;box&quot;&gt;2&lt;/div&gt;
    &lt;div class=&quot;box&quot;&gt;3&lt;/div&gt;
    &lt;div class=&quot;box&quot;&gt;4&lt;/div&gt;
&lt;/div&gt;

.container{
    /* \u5C06container\u53D8\u6210\u5F39\u6027\u76D2\u5B50 */
    display: flex;
}
</code></pre><h2 id="\u4E8C\u3001\u5BB9\u5668\u5C5E\u6027-container" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5BB9\u5668\u5C5E\u6027-container" aria-hidden="true">#</a> \u4E8C\u3001\u5BB9\u5668\u5C5E\u6027\uFF08.container\uFF09</h2><h3 id="_1\u3001\u4E3B\u8F74\u65B9\u5411-flex-direction" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u4E3B\u8F74\u65B9\u5411-flex-direction" aria-hidden="true">#</a> 1\u3001\u4E3B\u8F74\u65B9\u5411 <code>flex-direction:</code></h3><pre><code>row\uFF08\u9ED8\u8BA4\uFF09       \u6309\u7167\u4E3B\u8F74\u5F00\u59CB\u4F4D\u7F6E\u6392\u5217
row-reverse      \u6309\u7167\u4E3B\u8F74\u7ED3\u675F\u4F4D\u7F6E\u6392\u5217 
column           \u6309\u7167\u4EA4\u53C9\u8F74\u5F00\u59CB\u4F4D\u7F6E\u6392\u5217
column-reverse   \u6309\u7167\u4EA4\u53C9\u8F74\u7ED3\u675F\u4F4D\u7F6E\u6392\u5217
</code></pre><h3 id="_2\u3001\u6362\u884C-flex-wrap" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u6362\u884C-flex-wrap" aria-hidden="true">#</a> 2\u3001\u6362\u884C <code>flex-wrap\uFF1A</code></h3><pre><code>wrap             \u8D85\u8FC7contain\u76D2\u5B50\u7684\u5BBD\u5EA6\u540E\u5F3A\u5236\u6362\u884C
nowrap           \u4E0D\u6362\u884C
wrap-reverse     \u6362\u884C\u540E\u7FFB\u8F6C\uFF0C\u7B2C\u4E00\u884C\u5728\u4E0B\u9762
</code></pre><h3 id="_3\u3001\u4E3B\u8F74\u65B9\u5411-\u6362\u884C-\u503C1-\u65B9\u5411-\u503C2-\u6362\u884C" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u4E3B\u8F74\u65B9\u5411-\u6362\u884C-\u503C1-\u65B9\u5411-\u503C2-\u6362\u884C" aria-hidden="true">#</a> 3\u3001\u4E3B\u8F74\u65B9\u5411+\u6362\u884C(\u503C1:\u65B9\u5411 \u503C2: \u6362\u884C)</h3><pre><code>flex-flow: row wrap-reverse;
</code></pre><h3 id="_4\u3001\u4E3B\u8F74\u5BF9\u9F50\u65B9\u5F0F-justify-content" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u4E3B\u8F74\u5BF9\u9F50\u65B9\u5F0F-justify-content" aria-hidden="true">#</a> 4\u3001\u4E3B\u8F74\u5BF9\u9F50\u65B9\u5F0F <code>justify-content</code></h3><pre><code>flex-start       \u6309\u7167\u4E3B\u8F74\u5F00\u59CB\u7684\u4F4D\u7F6E\u5BF9\u9F50
flex-end         \u6309\u7167\u4E3B\u8F74\u7ED3\u675F\u7684\u4F4D\u7F6E\u5BF9\u9F50
center           \u6309\u7167\u4E3B\u8F74\u4E2D\u5FC3\u7684\u4F4D\u7F6E\u5BF9\u9F50
space-between    \u6309\u7167\u4E3B\u8F74, \u4E24\u7AEF\u5BF9\u9F50 , \u95F4\u9694\u76F8\u540C
space-around     \u4E3B\u8F74\u65B9\u5411, \u6BCF\u4E2A\u9879\u76EE\u7684\u5DE6\u53F3\u95F4\u9694\u76F8\u540C
</code></pre><h3 id="_5\u3001\u4EA4\u53C9\u8F74\u5BF9\u9F50\u65B9\u5F0F-align-items" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u4EA4\u53C9\u8F74\u5BF9\u9F50\u65B9\u5F0F-align-items" aria-hidden="true">#</a> 5\u3001\u4EA4\u53C9\u8F74\u5BF9\u9F50\u65B9\u5F0F <code>align-items</code>\uFF1A</h3><pre><code>flex-start       \u4EA4\u53C9\u8F74\u5F00\u59CB\u4F4D\u7F6E\u5BF9\u9F50
flex-end         \u4EA4\u53C9\u8F74\u7ED3\u675F\u4F4D\u7F6E\u5BF9\u9F50
center           \u4EA4\u53C9\u8F74\u6C34\u5E73\u4F4D\u7F6E\u5BF9\u9F50
baseline         \u4EA4\u53C9\u8F74\u57FA\u7EBF\u4F4D\u7F6E\u5BF9\u9F50
stretch          \u5982\u679C\u6CA1\u6709\u9AD8\u5EA6\u6216\u8005\u9AD8\u5EA6\u81EA\u52A8\uFF0C\u81EA\u52A8\u6491\u6EE1\u6574\u4E2A\u5BB9\u5668
</code></pre><h3 id="_6\u3001\u4E3B\u8F74\u65B9\u5411-\u5BF9\u9F50\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u4E3B\u8F74\u65B9\u5411-\u5BF9\u9F50\u65B9\u5F0F" aria-hidden="true">#</a> 6\u3001\u4E3B\u8F74\u65B9\u5411+\u5BF9\u9F50\u65B9\u5F0F</h3><h3 id="_7\u3001\u591A\u6839\u8F74\u7EBF\u5BF9\u9F50-\u5F3A\u5236\u6362\u884C" tabindex="-1"><a class="header-anchor" href="#_7\u3001\u591A\u6839\u8F74\u7EBF\u5BF9\u9F50-\u5F3A\u5236\u6362\u884C" aria-hidden="true">#</a> 7\u3001\u591A\u6839\u8F74\u7EBF\u5BF9\u9F50(\u5F3A\u5236\u6362\u884C)</h3><blockquote><p>\u76D2\u5B50\u4E0D\u6362\u884C\u9ED8\u8BA4\u4E00\u6761\u8F74\u7EBF\u6392\u5217,\u4E0D\u4F1A\u4EA7\u751F\u7B2C\u4E8C\u6839\u57FA\u7EBF\u3002\u8BBE\u7F6E\u591A\u6839\u8F74\u7EBF\u65E0\u4F5C\u7528</p><p>\u76D2\u5B50\u6362\u884C\uFF1A\u51FA\u73B0\u591A\u6839\u8F74\u7EBF\u5BF9\u9F50\uFF08\u6309\u6BCF\u4E00\u6839\u8F74\u7EBF\u7684...\u5BF9\u9F50\uFF09</p></blockquote><h2 id="\u4E09\u3001\u9879\u76EE\u5C5E\u6027-box" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u9879\u76EE\u5C5E\u6027-box" aria-hidden="true">#</a> \u4E09\u3001\u9879\u76EE\u5C5E\u6027\uFF08.box\uFF09</h2><h3 id="_1\u3001\u9879\u76EE\u7684\u987A\u5E8F-\u2014\u2014-order" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u9879\u76EE\u7684\u987A\u5E8F-\u2014\u2014-order" aria-hidden="true">#</a> 1\u3001\u9879\u76EE\u7684\u987A\u5E8F \u2014\u2014 <code>order</code></h3><pre><code>/*\u9ED8\u8BA4\u4ECE\u5DE6\u5230\u53F3\u90FD\u662F0  \u6570\u8D8A\u5C0F, \u8D8A\u9760\u524D*/
.box:nth-child(3){
    order: 1;
}
.box:nth-child(2){
    order: 5;
}
</code></pre><h3 id="_2\u3001\u9879\u76EE\u7684\u653E\u5927-\u2014\u2014-flex-grow" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u9879\u76EE\u7684\u653E\u5927-\u2014\u2014-flex-grow" aria-hidden="true">#</a> 2\u3001\u9879\u76EE\u7684\u653E\u5927 \u2014\u2014 <code>flex-grow</code></h3><pre><code>/* 
 * \u9879\u76EE\u7684\u653E\u5927\u6BD4\u4F8B \u2014\u2014\u2014\u2014 flew-grow
 * \u9ED8\u8BA4\u4E3A0, \u5373\u4F7F\u5B58\u5728\u5269\u4F59\u7A7A\u95F4\u4E5F\u4E0D\u4F1A\u653E\u5927
 * \u4E0D\u80FD\u8BBE\u7F6E\u8D1F\u6570
 * \u4E5F\u4E0D\u8981\u8BBE\u7F6E\u5C0F\u6570
 */
.box:nth-child(3){
    flex-grow: 3;
}
</code></pre><h3 id="_3\u3001\u9879\u76EE\u7684\u7F29\u5C0F-\u2014\u2014-flex-shrink" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u9879\u76EE\u7684\u7F29\u5C0F-\u2014\u2014-flex-shrink" aria-hidden="true">#</a> 3\u3001\u9879\u76EE\u7684\u7F29\u5C0F \u2014\u2014 <code>flex-shrink</code></h3><pre><code>/*
 * \u9879\u76EE\u7684\u7F29\u5C0F\u6BD4\u4F8B
 * \u9ED8\u8BA4\u503C\u4E3A1, \u5982\u679C\u5269\u4F59\u7A7A\u95F4\u4E0D\u8DB3, \u9879\u76EE\u4F1A\u7F29\u5C0F
 * \u8BBE\u7F6E\u4E3A0 , \u4E0D\u4F1A\u7F29\u5C0F
 * \u4E0D\u80FD\u8BBE\u7F6E\u8D1F\u6570
 * \u4E5F\u4E0D\u8981\u8BBE\u7F6E\u5C0F\u6570
 */
.box:nth-child(2){
    order: 0.5;
    flex-shrink: 0;
}
</code></pre><h3 id="_4\u3001\u9879\u76EE\u7684\u4E3B\u8F74\u7A7A\u95F4\u5927\u5C0F-\u2014\u2014-flex-basis" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u9879\u76EE\u7684\u4E3B\u8F74\u7A7A\u95F4\u5927\u5C0F-\u2014\u2014-flex-basis" aria-hidden="true">#</a> 4\u3001\u9879\u76EE\u7684\u4E3B\u8F74\u7A7A\u95F4\u5927\u5C0F \u2014\u2014 <code>flex-basis</code></h3><pre><code>/* 
 * \u4E3B\u8F74\u7A7A\u95F4\u5927\u5C0F
 * \u5B9A\u4E49\u5728\u5206\u914D\u4E3B\u8F74\u7A7A\u95F4\u4E4B\u524D\uFF0C\u9879\u76EE\u5360\u636E\u4E3B\u8F74\u7A7A\u95F4\uFF0C
 * \u6D4F\u89C8\u5668\u6839\u636E\u5F53\u524D\u5C5E\u6027\uFF0C\u8BA1\u7B97\u4E3B\u8F74\u662F\u5426\u6709\u591A\u4F59\u7A7A\u95F4
 * 
 * \u5BBD\u5EA6\u56FA\u5B9A
 */
.box:nth-child(3){
    flex-basis: 300px;
    /*flex-shrink: 0;*/
}
</code></pre><h2 id="\u56DB\u3001\u517C\u5BB9\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u517C\u5BB9\u4EE3\u7801" aria-hidden="true">#</a> \u56DB\u3001\u517C\u5BB9\u4EE3\u7801</h2><div class="language-css ext-css"><pre class="language-css"><code><span class="token comment">/**
 * \u65F6\u95F4\uFF1A2019-5-7
 * \u53C2\u8003\u6587\u6863\uFF1Ahttps://segmentfault.com/a/1190000003978624
 */</span>
<span class="token comment">/**
 * \u4F5C\u7528\uFF1A\u7ED9\u7236\u76D2\u5B50\u6DFB\u52A0flex\u5C5E\u6027
 * \u6CE8\u610F\uFF1A\u5982\u679C\u5B50\u5143\u7D20\u662F\u884C\u5185\u5143\u7D20\uFF0C\u591A\u6570\u4F7F\u7528 display: block \u6216 display: inline-block \u628A\u884C\u5185\u5B50\u5143\u7D20\u53D8\u6210\u5757\u5143\u7D20\u3002
 */</span>
<span class="token atrule"><span class="token rule">@mixin</span> mix-flex</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-flex<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -moz-flex<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -moz-box<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -ms-flexbox<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@mixin</span> mix-flex-son</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">-ms-flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">-moz-box-flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * \u4F5C\u7528\uFF1Aflex-direction\uFF0C\u5B50\u5143\u7D20\u5728\u4E3B\u8F74\u7684\u6392\u5217\u65B9\u5411
 * \u4F20\u503C\uFF1Arow\uFF08\u5DE6-&gt;\u53F3\uFF09| row-reverse\uFF08\u53F3-&gt;\u5DE6\uFF09| column\uFF08\u4E0A-&gt;\u4E0B\uFF09| column-reverse\uFF08\u4E0B-&gt;\u4E0A\uFF09
 */</span>
<span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">mix-flex-direction</span><span class="token punctuation">(</span>$<span class="token property">d</span><span class="token punctuation">:</span> row<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@if</span> $d == <span class="token string">&#39;row&#39;</span></span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-direction</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
    <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> horizontal<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span> if $d == <span class="token string">&#39;row-reverse&#39;</span></span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-pack</span><span class="token punctuation">:</span> end<span class="token punctuation">;</span>
    <span class="token property">-webkit-box-direction</span><span class="token punctuation">:</span> reverse<span class="token punctuation">;</span>
    <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> horizontal<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span> if $d == <span class="token string">&#39;column&#39;</span></span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-direction</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
    <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span> if $d == <span class="token string">&#39;column-reverse&#39;</span></span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-pack</span><span class="token punctuation">:</span> end<span class="token punctuation">;</span>
    <span class="token property">-webkit-box-direction</span><span class="token punctuation">:</span> reverse<span class="token punctuation">;</span>
    <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> 
  <span class="token property">-webkit-flex-direction</span><span class="token punctuation">:</span> $d<span class="token punctuation">;</span>
  <span class="token property">-moz-flex-direction</span><span class="token punctuation">:</span> $d<span class="token punctuation">;</span>
  <span class="token property">-ms-flex-direction</span><span class="token punctuation">:</span> $d<span class="token punctuation">;</span>
  <span class="token property">-o-flex-direction</span><span class="token punctuation">:</span> $d<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> $d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * \u4F5C\u7528\uFF1Ajustify-content\uFF0C\u5B50\u5143\u7D20\u5728\u4E3B\u8F74\u5BF9\u9F50\u65B9\u5F0F\uFF1Bbox-pack(\u65E7\u72484\u4E2A\u503C): start | end | center | justify;
 * \u4F20\u503C(5\u4E2A\u503C)\uFF1Aflex-start(\u9ED8\u8BA4) | flex-end | center | space-between | space-around
 */</span>
<span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">mix-justify-content</span><span class="token punctuation">(</span>$<span class="token property">p</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@if</span> $p == <span class="token string">&#39;flex-start&#39;</span></span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-pack</span><span class="token punctuation">:</span> start<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span> if $p == <span class="token string">&#39;flex-end&#39;</span></span><span class="token punctuation">{</span>
    <span class="token property">-webkit-box-pack</span><span class="token punctuation">:</span> end<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span> if $p == <span class="token string">&#39;center&#39;</span></span><span class="token punctuation">{</span>
        <span class="token property">-webkit-box-pack</span><span class="token punctuation">:</span> $p<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span> if $p == <span class="token string">&#39;space-between&#39;</span></span><span class="token punctuation">{</span>
    <span class="token property">-webkit-box-pack</span><span class="token punctuation">:</span> justify<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span> if $p == <span class="token string">&#39;space-around&#39;</span></span><span class="token punctuation">{</span>
    // box-pack \u4E0D\u53EF\u7528
  <span class="token punctuation">}</span>
  <span class="token property">-webkit-justify-content</span><span class="token punctuation">:</span> $p<span class="token punctuation">;</span>
  <span class="token property">-moz-justify-content</span><span class="token punctuation">:</span> $p<span class="token punctuation">;</span>
  <span class="token property">-ms-justify-content</span><span class="token punctuation">:</span> $p<span class="token punctuation">;</span>
  <span class="token property">-o-justify-content</span><span class="token punctuation">:</span> $p<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> $p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * \u4F5C\u7528\uFF1Aalign-items\uFF0C\u5B50\u5143\u7D20\u5728\u4EA4\u53C9\u8F74\u8F74\u5BF9\u9F50\u65B9\u5F0F\uFF1Bbox-align(\u65E7\u72484\u4E2A\u503C): start | end | center | baseline | stretch;
 * \u4F20\u503C(5\u4E2A\u503C)\uFF1A flex-start | flex-end | center | baseline | stretch;
 */</span>
<span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">mix-align-items</span><span class="token punctuation">(</span>$<span class="token property">p</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@if</span> $p == <span class="token string">&#39;flex-start&#39;</span></span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-align</span><span class="token punctuation">:</span> start<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span> if $p == <span class="token string">&#39;flex-end&#39;</span></span><span class="token punctuation">{</span>
    <span class="token property">-webkit-box-align</span><span class="token punctuation">:</span> end<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span></span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-align</span><span class="token punctuation">:</span> $p<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token property">-webkit-align-items</span><span class="token punctuation">:</span> $p<span class="token punctuation">;</span>
  <span class="token property">-moz-align-items</span><span class="token punctuation">:</span> $p<span class="token punctuation">;</span>
  <span class="token property">-ms-align-items</span><span class="token punctuation">:</span> $p<span class="token punctuation">;</span>
  <span class="token property">-o-align-items</span><span class="token punctuation">:</span> $p<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> $p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * \u4F5C\u7528\uFF1Aflex-wrap\uFF0C\u5143\u7D20\u662F\u5426\u6362\u884C
 * \u4F20\u503C\uFF1Anowrap | wrap | wrap-reverse
 */</span>
<span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">mix-flex-wrap</span><span class="token punctuation">(</span>$<span class="token property">wrap</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-flex-wrap</span><span class="token punctuation">:</span> $wrap<span class="token punctuation">;</span>
  <span class="token property">-moz-flex-wrap</span><span class="token punctuation">:</span> $wrap<span class="token punctuation">;</span>
  <span class="token property">-ms-flex-wrap</span><span class="token punctuation">:</span> $wrap<span class="token punctuation">;</span>
  <span class="token property">-o-flex-wrap</span><span class="token punctuation">:</span> $wrap<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> $wrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * \u4F5C\u7528\uFF1Aflex-grow\uFF0C\u662F\u5426\u653E\u5927
 * \u4F20\u503C\uFF1A0\uFF08\u4E0D\u653E\u5927\uFF09| 1\uFF08\u653E\u5927\uFF09
 */</span>
<span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">mix-flex-grow</span><span class="token punctuation">(</span>$<span class="token property">value</span><span class="token punctuation">:</span> 0<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@if</span> $value == 0</span> <span class="token punctuation">{</span>
    // \u4E0D\u4F38\u7F29
    <span class="token property">-webkit-box-flex</span><span class="token punctuation">:</span> 0.0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span> if $value == 1</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-flex</span><span class="token punctuation">:</span> 1.0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span></span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-flex</span><span class="token punctuation">:</span> $value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token property">-webkit-flex-grow</span><span class="token punctuation">:</span> $value<span class="token punctuation">;</span>
  <span class="token property">-moz-flex-grow</span><span class="token punctuation">:</span> $value<span class="token punctuation">;</span>
  <span class="token property">flex-grow</span><span class="token punctuation">:</span> $value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * \u4F5C\u7528\uFF1Aflex-shrink\uFF0C\u662F\u5426\u7F29\u5C0F
 * \u4F20\u503C\uFF1A0\uFF08\u4E0D\u7F29\u5C0F\uFF09| 1\uFF08\u7F29\u5C0F\uFF09
 */</span>
 <span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">mix-flex-shrink</span><span class="token punctuation">(</span>$<span class="token property">value</span><span class="token punctuation">:</span> 1<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@if</span> $value == 0</span> <span class="token punctuation">{</span>
    // \u4E0D\u4F38\u7F29
    <span class="token property">-webkit-box-flex</span><span class="token punctuation">:</span> 0.0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span> if $value == 1</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-flex</span><span class="token punctuation">:</span> 1.0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span></span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-flex</span><span class="token punctuation">:</span> $value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token property">-webkit-flex-shrink</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">-moz-flex-shrink</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">flex-shrink</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * \u4F5C\u7528\uFF1Aorder\uFF0C\u5B50\u5143\u7D20\u6392\u5E8F
 */</span>
 <span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">mix-order</span><span class="token punctuation">(</span>$o<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-box-ordinal-group</span><span class="token punctuation">:</span> $o<span class="token punctuation">;</span>
  <span class="token property">-webkit-order</span><span class="token punctuation">:</span> $o<span class="token punctuation">;</span>
  <span class="token property">-moz-order</span><span class="token punctuation">:</span> $o<span class="token punctuation">;</span>
  <span class="token property">order</span><span class="token punctuation">:</span> $o<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u9644\u3001\u4E00\u4E2A\u76D2\u5B50\u4E5D\u5BAB\u683C\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9644\u3001\u4E00\u4E2A\u76D2\u5B50\u4E5D\u5BAB\u683C\u4F4D\u7F6E" aria-hidden="true">#</a> \u9644\u3001\u4E00\u4E2A\u76D2\u5B50\u4E5D\u5BAB\u683C\u4F4D\u7F6E</h2><pre><code>.container{
    width: 400px;
    height: 400px;
    border: 3px solid black;
    /* \u5C06container\u53D8\u6210\u5F39\u6027\u76D2\u5B50 */
    display: flex;

    /* \u4F4D\u7F6E1 */
    justify-content: flex-start;

    /* \u4F4D\u7F6E2 \u4E3B\u8F74\u65B9\u5411-\u5C45\u4E2D\u5BF9\u9F50*/
    justify-content: center;

    /* \u4F4D\u7F6E3 \u4E3B\u8F74\u65B9\u5411-\u7ED3\u675F\u4F4D\u7F6E\u5BF9\u9F50*/
    justify-content: flex-end;

    /* \u4F4D\u7F6E4 \u4E3B\u8F74\u65B9\u5411-\u7ED3\u675F\u4F4D\u7F6E\u5BF9\u9F50*
    justify-content: flex-start;
    align-items: center;

    /* \u4F4D\u7F6E5 \u4E3B\u8F74\u65B9\u5411-\u7ED3\u675F\u4F4D\u7F6E\u5BF9\u9F50*/
    justify-content: center;
    align-items: center;

    /* \u4F4D\u7F6E6 \u4E3B\u8F74\u65B9\u5411-\u7ED3\u675F\u4F4D\u7F6E\u5BF9\u9F50*/
    justify-content: flex-end;
    align-items: center;

    /* \u4F4D\u7F6E7 \u4E3B\u8F74\u65B9\u5411-\u7ED3\u675F\u4F4D\u7F6E\u5BF9\u9F50*/
    /*flex-direction: column;
    align-items: flex-start;*/
    justify-content: flex-start;
    align-items: flex-end;

    /* \u4F4D\u7F6E8 \u4E3B\u8F74\u65B9\u5411-\u7ED3\u675F\u4F4D\u7F6E\u5BF9\u9F50*/
    /*flex-direction: column;
    align-items: center;*/
    justify-content: center;
    align-items: flex-end;

    /* \u4F4D\u7F6E9 \u4E3B\u8F74\u65B9\u5411-\u7ED3\u675F\u4F4D\u7F6E\u5BF9\u9F50*/
    /*flex-direction: column;
    align-items: flex-end;*/
    justify-content: flex-end;
    align-items: flex-end;
}
</code></pre>`,33),o=[e];function c(l,u){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","flex.html.vue"]]);export{r as default};

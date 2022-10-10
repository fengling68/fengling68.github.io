import{_ as e,r as o,o as c,c as l,a as n,b as s,e as t,f as p}from"./app.0403f9b1.js";const u={},i=p(`<h1 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h1><h2 id="viewport" tabindex="-1"><a class="header-anchor" href="#viewport" aria-hidden="true">#</a> viewport</h2><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0, viewport-fit=cover<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>viewport \u662F\u7528\u6237\u7F51\u9875\u7684\u53EF\u89C6\u533A\u57DF\u3002

width=device-width \uFF1A\u8868\u793A\u5BBD\u5EA6\u662F\u8BBE\u5907\u5C4F\u5E55\u7684\u5BBD\u5EA6
initial-scale=1.0\uFF1A\u8868\u793A\u521D\u59CB\u7684\u7F29\u653E\u6BD4\u4F8B
minimum-scale=0.5\uFF1A\u8868\u793A\u6700\u5C0F\u7684\u7F29\u653E\u6BD4\u4F8B
maximum-scale=2.0\uFF1A\u8868\u793A\u6700\u5927\u7684\u7F29\u653E\u6BD4\u4F8B
user-scalable=no\uFF1A\u8868\u793A\u7528\u6237\u662F\u5426\u53EF\u4EE5\u8C03\u6574\u7F29\u653E\u6BD4\u4F8B
viewport-fit=cover&quot;
</code></pre></div><h2 id="canvas" tabindex="-1"><a class="header-anchor" href="#canvas" aria-hidden="true">#</a> canvas</h2>`,5),k={href:"https://www.runoob.com/w3cnote/html5-canvas-intro.html",target:"_blank",rel:"noopener noreferrer"},r=p(`<p><code>H5</code> \u4E2D <code>&lt;canvas&gt;</code> \u5143\u7D20\u7528\u4E8E\u56FE\u5F62\u7684\u7ED8\u5236\uFF0C<code>&lt;canvas&gt;</code> \u6807\u7B7E\u53EA\u662F\u56FE\u5F62\u5BB9\u5668\uFF0C\u5FC5\u987B\u4F7F\u7528\u811A\u672C (\u901A\u5E38\u662FJavaScript) \u6765\u7ED8\u5236\u56FE\u5F62\u3002</p><p><code>canvas</code> \u53EF\u4EE5\u7ED8\u5236\u8DEF\u5F84\u3001\u56FE\u5F62\u3001\u5B57\u7B26\u3001\u6DFB\u52A0\u56FE\u50CF\u7B49\uFF0C\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u622A\u56FE\u529F\u80FD\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5E38\u7528 API</span>
<span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;#canvas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u753B\u7EBF\u8D77\u70B9</span>
ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u753B\u7EBF\u7EC8\u70B9</span>
ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5199\u5B57</span>
ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">95</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">40</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">*</span>Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u753B\u5706</span>
ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">150</span><span class="token punctuation">,</span><span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u753B\u957F\u65B9\u5F62</span>
ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u753B\u56FE\u7247</span>
canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5BFC\u51FA\u56FE\u50CF</span>
</code></pre></div><h2 id="html\u8BED\u4E49\u5316" tabindex="-1"><a class="header-anchor" href="#html\u8BED\u4E49\u5316" aria-hidden="true">#</a> html\u8BED\u4E49\u5316</h2>`,4),m={href:"https://www.cnblogs.com/freeyiyi1993/p/3615179.html",target:"_blank",rel:"noopener noreferrer"};function d(h,v){const a=o("ExternalLinkIcon");return c(),l("div",null,[i,n("p",null,[n("a",k,[s("\u5B66\u4E60 HTML5 Canvas \u8FD9\u4E00\u7BC7\u6587\u7AE0\u5C31\u591F\u4E86"),t(a)])]),r,n("p",null,[n("a",m,[s("\u7406\u89E3HTML\u8BED\u4E49\u5316"),t(a)])])])}const b=e(u,[["render",d],["__file","01-html.html.vue"]]);export{b as default};
import{_ as n,o as a,c as s,a as t}from"./app.ae676a5c.js";const p={},e=t(`<h1 id="\u4E0B\u8F7D\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u6587\u4EF6" aria-hidden="true">#</a> \u4E0B\u8F7D\u6587\u4EF6</h1><h2 id="\u6D4F\u89C8\u5668\u4E0B\u8F7D\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u4E0B\u8F7D\u56FE\u7247" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u4E0B\u8F7D\u56FE\u7247</h2><p>\u4E00\u822C\u6765\u8BF4\u524D\u7AEF\u5B9E\u73B0\u7684\u601D\u8DEF\u5C31\u662F\u901A\u8FC7\u52A8\u6001\u521B\u5EFAa\u6807\u7B7E\uFF0C\u8BBE\u7F6E\u5176download\u5C5E\u6027\uFF0C\u6700\u540E\u5220\u9664a\u5C31\u597D\u4E86\uFF0C\u5BF9\u4E8E\u4E0D\u662F\u56FE\u7247\u7684\u6587\u4EF6\u4E00\u822C\u90FD\u53EF\u4EE5\u4E0B\u8F7D\uFF0C\u4F46\u662F\u5982\u679C\u662F\u56FE\u7247\uFF0C\u6709\u4E9B\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u6253\u5F00\u56FE\u7247\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u624B\u52A8\u628A\u5B83\u8F6C\u5316\u4E3Adata:URLs\u6216blob:URLs\uFF0C\u57FA\u4E8E\u8FD9\u4E2A\u539F\u7406\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7528fileReader\uFF0C\u4E5F\u53EF\u4EE5\u7528fetch-URL.createObjectURL\uFF0C\u8FD9\u91CC\u7ECF\u8FC7\u5927\u91CF\u6D4B\u8BD5\u6211\u91C7\u7528\u540E\u8005\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> filename</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">blob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">blob</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> url <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">;</span>
    a<span class="token punctuation">.</span>href <span class="token operator">=</span> url<span class="token punctuation">;</span>
    a<span class="token punctuation">.</span>download <span class="token operator">=</span> filename<span class="token punctuation">;</span>
    a<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u4F5C\u8005\uFF1A\u5F90\u5C0F\u5915 <br> \u94FE\u63A5\uFF1Ahttps://juejin.im/post/5d8399e8f265da03a9506fc6 <br> \u6765\u6E90\uFF1A\u6398\u91D1 <br> \u8457\u4F5C\u6743\u5F52\u4F5C\u8005\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u4F5C\u8005\u83B7\u5F97\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p></div>`,6),c=[e];function o(l,u){return a(),s("div",null,c)}const r=n(p,[["render",o],["__file","\u4E0B\u8F7D\u6587\u4EF6.html.vue"]]);export{r as default};

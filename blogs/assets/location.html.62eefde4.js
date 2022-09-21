import{_ as e,r as o,o as c,c as l,b as n,e as t,a as s,d as p}from"./app.ae676a5c.js";const i={},u=s(`<h1 id="location\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#location\u76F8\u5173" aria-hidden="true">#</a> location\u76F8\u5173</h1><h2 id="\u5220\u9664url\u4E0A\u67D0\u53C2\u6570\u5E76\u66FF\u6362\u5F53\u524Durl" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664url\u4E0A\u67D0\u53C2\u6570\u5E76\u66FF\u6362\u5F53\u524Durl" aria-hidden="true">#</a> \u5220\u9664url\u4E0A\u67D0\u53C2\u6570\u5E76\u66FF\u6362\u5F53\u524Durl</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">deleteUrlParams</span><span class="token punctuation">(</span><span class="token parameter">param</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">delete</span> params<span class="token punctuation">[</span>param<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> search <span class="token operator">=</span> <span class="token string">&#39;?&#39;</span><span class="token punctuation">;</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    search <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>params<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  search <span class="token operator">=</span> search<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> search<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>origin<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>search<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">replaceState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u83B7\u53D6\u94FE\u63A5\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u94FE\u63A5\u53C2\u6570" aria-hidden="true">#</a> \u83B7\u53D6\u94FE\u63A5\u53C2\u6570</h2>`,4),r={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams",target:"_blank",rel:"noopener noreferrer"},k=p("MDN URLSearchParams"),d=s(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: \u83B7\u53D6\u94FE\u63A5\u53C2\u6570
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">url</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">getUrlParams</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> newUrl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>url <span class="token operator">||</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> urlSearchParams <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span>newUrl<span class="token punctuation">.</span>search<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> urlSearchParams<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    params<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> params<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: \u83B7\u53D6\u94FE\u63A5\u53C2\u6570
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">url</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">getUrlParams</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> newUrl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>url <span class="token operator">||</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> urlSearchParams <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span>newUrl<span class="token punctuation">.</span>search<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> params <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">fromEntries</span><span class="token punctuation">(</span>urlSearchParams<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> params<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528\u793A\u4F8B</span>
<span class="token comment">// console.log(&#39;urlParams&#39;, getUrlParams());</span>
<span class="token comment">// console.log(&#39;urlParams&#39;, getUrlParams(&#39;http://www.baidu.com?name1=aaa&amp;name2=bbb&#39;));</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BBE\u7F6E\u94FE\u63A5\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u94FE\u63A5\u53C2\u6570" aria-hidden="true">#</a> \u8BBE\u7F6E\u94FE\u63A5\u53C2\u6570</h2>`,2),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams",target:"_blank",rel:"noopener noreferrer"},v=p("MDN URLSearchParams"),b=s(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: \u8BBE\u7F6E\u94FE\u63A5\u53C2\u6570
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">url</span> 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">params</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">setUrlParams</span><span class="token punctuation">(</span>url <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> newUrl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>url <span class="token operator">||</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> origin<span class="token punctuation">,</span> pathname<span class="token punctuation">,</span> search <span class="token punctuation">}</span> <span class="token operator">=</span> newUrl<span class="token punctuation">;</span>
  <span class="token keyword">const</span> urlSearchParams <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span>search<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">in</span> params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    urlSearchParams<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> params<span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>origin<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>pathname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>urlSearchParams<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528\u793A\u4F8B</span>
<span class="token comment">// console.log(setUrlParams(&#39;&#39;, {text1: &#39;xxx&#39;, text2: &#39;yyy&#39;}));</span>
<span class="token comment">// console.log(setUrlParams(&#39;http://www.baidu.com?name1=aaa&amp;name2=bbb&#39;, {text1: &#39;xxx&#39;, text2: &#39;yyy&#39;}));</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="url-search-params-polyfill" tabindex="-1"><a class="header-anchor" href="#url-search-params-polyfill" aria-hidden="true">#</a> url-search-params-polyfill</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install url-search-params-polyfill -- save

import &#39;url-search-params-polyfill&#39;;

const searchParams = new URLSearchParams(params);
const newParams = searchParams.toString();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function h(w,y){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[n("a",r,[k,t(a)])]),d,n("p",null,[n("a",m,[v,t(a)])]),b])}const f=e(i,[["render",h],["__file","location.html.vue"]]);export{f as default};

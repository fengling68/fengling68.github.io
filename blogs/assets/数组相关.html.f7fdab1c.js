import{_ as n,o as a,c as s,f as t}from"./app.7e19d012.js";const p={},o=t(`<h1 id="数组相关" tabindex="-1"><a class="header-anchor" href="#数组相关" aria-hidden="true">#</a> 数组相关</h1><h2 id="数组填充" tabindex="-1"><a class="header-anchor" href="#数组填充" aria-hidden="true">#</a> 数组填充</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> initArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fillArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>fillArr<span class="token punctuation">,</span> <span class="token operator">...</span>initArr<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [0, 0, 0, 0, 0, 8, 8, 8]</span>
</code></pre></div>`,3),e=[o];function c(l,r){return a(),s("div",null,e)}const i=n(p,[["render",c],["__file","数组相关.html.vue"]]);export{i as default};

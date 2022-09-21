import{_ as i,r as l,o as c,c as t,b as s,e,d as n,a as r}from"./app.ae676a5c.js";const o={},d=s("h1",{id:"iterm2-ohmyzsh",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#iterm2-ohmyzsh","aria-hidden":"true"},"#"),n(" iterm2+ohmyzsh")],-1),p=s("h2",{id:"\u63A8\u8350\u9605\u8BFB",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u63A8\u8350\u9605\u8BFB","aria-hidden":"true"},"#"),n(" \u63A8\u8350\u9605\u8BFB")],-1),m={href:"https://zhuanlan.zhihu.com/p/87051231",target:"_blank",rel:"noopener noreferrer"},v=n("\u6784\u5EFA iTerm2 \u73AF\u5883"),u={href:"https://zhuanlan.zhihu.com/p/85281029",target:"_blank",rel:"noopener noreferrer"},h=n("\u7ED9 Zsh \u6DFB\u52A0\u4E3B\u9898\u548C\u63D2\u4EF6"),b={href:"https://www.jianshu.com/p/9c3439cc3bdb",target:"_blank",rel:"noopener noreferrer"},k=n("iTerm2 + Oh My Zsh \u6253\u9020\u8212\u9002\u7EC8\u7AEF\u4F53\u9A8C\uFF1A"),g={href:"https://github.com/ohmyzsh/ohmyzsh/wiki/Themes",target:"_blank",rel:"noopener noreferrer"},f=n("All Themes"),_=r(`<h2 id="\u4E3B\u9898\u5B58\u50A8\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u9898\u5B58\u50A8\u8DEF\u5F84" aria-hidden="true">#</a> \u4E3B\u9898\u5B58\u50A8\u8DEF\u5F84</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BBF\u8FBE -&gt; \u524D\u5F80\u6587\u4EF6\u5939</span>
/Users/yourmacname/.oh-my-zsh/themes/

<span class="token comment"># \u6216\u8005\u547D\u4EE4\u884C</span>
<span class="token builtin class-name">cd</span> ~/.oh-my-zsh/themes <span class="token operator">&amp;&amp;</span> <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4FEE\u6539\u4E3B\u9898" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u4E3B\u9898" aria-hidden="true">#</a> \u4FEE\u6539\u4E3B\u9898</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6253\u5F00\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">vim</span> ~/.zshrc

<span class="token comment"># \u4FEE\u6539\u914D\u7F6E\u9879, ys \u65E2\u4E3B\u9898\u540D</span>
<span class="token assign-left variable">ZSH_THEME</span><span class="token operator">=</span><span class="token string">&quot;ys&quot;</span>

<span class="token comment"># \u4F7F\u914D\u7F6E\u751F\u6548</span>
<span class="token builtin class-name">source</span> ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4FEE\u6539\u67D0\u4E3B\u9898\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u67D0\u4E3B\u9898\u914D\u7F6E" aria-hidden="true">#</a> \u4FEE\u6539\u67D0\u4E3B\u9898\u914D\u7F6E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.oh-my-zsh/themes
<span class="token function">vim</span> ./colud.zsh-theme

<span class="token comment"># \u5E38\u89C1\u4FEE\u6539\u9879</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5220\u9664echo\u4E2D\u7684\u65E0\u7528\u7A7A\u683C&quot;</span>
<span class="token comment"># \u524D\u7F00\u663E\u793A\u7684\u7528\u6237\u540D</span>
prompt_segment black default <span class="token string">&quot;&quot;</span>
<span class="token comment"># \u7535\u8111\u7528\u6237\u540D</span>
%u
<span class="token comment"># \u6587\u4EF6\u8DEF\u5F84</span>
%c
<span class="token comment"># \u6587\u4EF6\u5B8C\u6574\u8DEF\u5F84</span>
%<span class="token environment constant">PWD</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B89\u88C5\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u63D2\u4EF6" aria-hidden="true">#</a> \u5B89\u88C5\u63D2\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6253\u5F00\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">vim</span> ~/.zshrc

<span class="token comment"># \u4FEE\u6539\u914D\u7F6E\u9879\uFF0C\u914D\u7F6E\u63D2\u4EF6\u540D</span>
<span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span>
  <span class="token function">git</span>
  zsh-autosuggestions
<span class="token punctuation">)</span>

<span class="token comment"># \u4F7F\u914D\u7F6E\u751F\u6548</span>
<span class="token builtin class-name">source</span> ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u522B\u540D" aria-hidden="true">#</a> \u914D\u7F6E\u522B\u540D</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6253\u5F00\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">vim</span> ~/.zshrc

<span class="token comment"># \u4FEE\u6539\u914D\u7F6E\u9879</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ll</span><span class="token operator">=</span><span class="token string">&#39;ls -l&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">la</span><span class="token operator">=</span><span class="token string">&#39;ls -a&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ga</span><span class="token operator">=</span><span class="token string">&#39;git add .&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gc</span><span class="token operator">=</span><span class="token string">&#39;git cz&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gl</span><span class="token operator">=</span><span class="token string">&#39;git pull&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gh</span><span class="token operator">=</span><span class="token string">&#39;git push&#39;</span>
<span class="token comment"># \u53EA\u5207\u6362\u5206\u652F</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gco</span><span class="token operator">=</span><span class="token string">&#39;git checkout&#39;</span>
<span class="token comment"># \u521B\u5EFA\u65B0\u5206\u652F\u5E76\u5207\u6362</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gcb</span><span class="token operator">=</span><span class="token string">&#39;git checkout -b&#39;</span>
<span class="token comment"># \u5408\u5E76\u4EE3\u7801</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gm</span><span class="token operator">=</span><span class="token string">&#39;git merge&#39;</span>

<span class="token comment"># \u4F7F\u914D\u7F6E\u751F\u6548</span>
<span class="token builtin class-name">source</span> ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E2A\u4EBA\u559C\u6B22\u7684\u4E3B\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E2A\u4EBA\u559C\u6B22\u7684\u4E3B\u9898" aria-hidden="true">#</a> \u4E2A\u4EBA\u559C\u6B22\u7684\u4E3B\u9898</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>af-magic
agnoster
tonotdo
wezm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="termius\u7EC8\u7AEF\u4E2D\u6587\u4E71\u7801" tabindex="-1"><a class="header-anchor" href="#termius\u7EC8\u7AEF\u4E2D\u6587\u4E71\u7801" aria-hidden="true">#</a> termius\u7EC8\u7AEF\u4E2D\u6587\u4E71\u7801</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> ~/.zshrc

<span class="token comment"># \u6DFB\u52A0\u7F16\u7801\u914D\u7F6E</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>en_US.UTF-8

<span class="token builtin class-name">source</span> ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function z(x,y){const a=l("ExternalLinkIcon");return c(),t("div",null,[d,p,s("p",null,[s("a",m,[v,e(a)])]),s("p",null,[s("a",u,[h,e(a)])]),s("p",null,[s("a",b,[k,e(a)])]),s("p",null,[s("a",g,[f,e(a)])]),_])}const q=i(o,[["render",z],["__file","iterm2+ohmyzsh.html.vue"]]);export{q as default};

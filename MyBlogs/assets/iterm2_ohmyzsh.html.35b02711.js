import{_ as o,r as l,o as p,c,a,b as n,d as t,f as r}from"./app.a39d0481.js";const i={},h={href:"https://zhuanlan.zhihu.com/p/87051231",target:"_blank",rel:"noopener noreferrer"},m={href:"https://zhuanlan.zhihu.com/p/85281029",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.jianshu.com/p/9c3439cc3bdb",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/ohmyzsh/ohmyzsh/wiki/Themes",target:"_blank",rel:"noopener noreferrer"};function u(g,s){const e=l("ExternalLinkIcon");return p(),c("div",null,[s[4]||(s[4]=a("h1",{id:"iterm2-ohmyzsh",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#iterm2-ohmyzsh","aria-hidden":"true"},"#"),n(" iterm2+ohmyzsh")],-1)),s[5]||(s[5]=a("h2",{id:"推荐阅读",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#推荐阅读","aria-hidden":"true"},"#"),n(" 推荐阅读")],-1)),a("p",null,[a("a",h,[s[0]||(s[0]=n("构建 iTerm2 环境",-1)),t(e)])]),a("p",null,[a("a",m,[s[1]||(s[1]=n("给 Zsh 添加主题和插件",-1)),t(e)])]),a("p",null,[a("a",d,[s[2]||(s[2]=n("iTerm2 + Oh My Zsh 打造舒适终端体验：",-1)),t(e)])]),a("p",null,[a("a",k,[s[3]||(s[3]=n("All Themes",-1)),t(e)])]),s[6]||(s[6]=r(`<h2 id="主题存储路径" tabindex="-1"><a class="header-anchor" href="#主题存储路径" aria-hidden="true">#</a> 主题存储路径</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 访达 -&gt; 前往文件夹</span>
/Users/yourmacname/.oh-my-zsh/themes/

<span class="token comment"># 或者命令行</span>
<span class="token builtin class-name">cd</span> ~/.oh-my-zsh/themes <span class="token operator">&amp;&amp;</span> <span class="token function">ls</span>
</code></pre></div><h2 id="修改主题" tabindex="-1"><a class="header-anchor" href="#修改主题" aria-hidden="true">#</a> 修改主题</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打开配置文件</span>
<span class="token function">vim</span> ~/.zshrc

<span class="token comment"># 修改配置项, ys 既主题名</span>
<span class="token assign-left variable">ZSH_THEME</span><span class="token operator">=</span><span class="token string">&quot;ys&quot;</span>

<span class="token comment"># 使配置生效</span>
<span class="token builtin class-name">source</span> ~/.zshrc
</code></pre></div><h2 id="修改某主题配置" tabindex="-1"><a class="header-anchor" href="#修改某主题配置" aria-hidden="true">#</a> 修改某主题配置</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.oh-my-zsh/themes
<span class="token function">vim</span> ./colud.zsh-theme

<span class="token comment"># 常见修改项</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;删除echo中的无用空格&quot;</span>
<span class="token comment"># 前缀显示的用户名</span>
prompt_segment black default <span class="token string">&quot;&quot;</span>
<span class="token comment"># 电脑用户名</span>
%u
<span class="token comment"># 文件路径</span>
%c
<span class="token comment"># 文件完整路径</span>
%<span class="token environment constant">PWD</span>
</code></pre></div><h2 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打开配置文件</span>
<span class="token function">vim</span> ~/.zshrc

<span class="token comment"># 修改配置项，配置插件名</span>
<span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span>
  <span class="token function">git</span>
  zsh-autosuggestions
<span class="token punctuation">)</span>

<span class="token comment"># 使配置生效</span>
<span class="token builtin class-name">source</span> ~/.zshrc
</code></pre></div><h2 id="配置别名" tabindex="-1"><a class="header-anchor" href="#配置别名" aria-hidden="true">#</a> 配置别名</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打开配置文件</span>
<span class="token function">vim</span> ~/.zshrc

<span class="token comment"># 修改配置项</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ll</span><span class="token operator">=</span><span class="token string">&#39;ls -l&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">la</span><span class="token operator">=</span><span class="token string">&#39;ls -a&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ga</span><span class="token operator">=</span><span class="token string">&#39;git add .&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gc</span><span class="token operator">=</span><span class="token string">&#39;git cz&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gl</span><span class="token operator">=</span><span class="token string">&#39;git pull&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gh</span><span class="token operator">=</span><span class="token string">&#39;git push&#39;</span>
<span class="token comment"># 只切换分支</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gco</span><span class="token operator">=</span><span class="token string">&#39;git checkout&#39;</span>
<span class="token comment"># 创建新分支并切换</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gcb</span><span class="token operator">=</span><span class="token string">&#39;git checkout -b&#39;</span>
<span class="token comment"># 合并代码</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gm</span><span class="token operator">=</span><span class="token string">&#39;git merge&#39;</span>

<span class="token comment"># 使配置生效</span>
<span class="token builtin class-name">source</span> ~/.zshrc
</code></pre></div><h2 id="个人喜欢的主题" tabindex="-1"><a class="header-anchor" href="#个人喜欢的主题" aria-hidden="true">#</a> 个人喜欢的主题</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>af-magic
agnoster
tonotdo
wezm
</code></pre></div><h2 id="termius-终端中文乱码" tabindex="-1"><a class="header-anchor" href="#termius-终端中文乱码" aria-hidden="true">#</a> termius 终端中文乱码</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> ~/.zshrc

<span class="token comment"># 添加编码配置</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>en_US.UTF-8

<span class="token builtin class-name">source</span> ~/.zshrc
</code></pre></div>`,14))])}const f=o(i,[["render",u],["__file","iterm2+ohmyzsh.html.vue"]]);export{f as default};

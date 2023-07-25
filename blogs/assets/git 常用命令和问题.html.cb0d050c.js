import{_ as o,r as i,o as p,c,a,b as n,d as t,f as e}from"./app.79208424.js";const r={},l=a("h1",{id:"git-常用命令和问题",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#git-常用命令和问题","aria-hidden":"true"},"#"),n(" git 常用命令和问题")],-1),d=a("p",null,"本文档多为个人学习生活中最常用到的命令汇总，和遇见的问题及解决方案，大部分在其他网络博客或文章中都有提及，只是每次碰到相同问题还是要重新查文档，很不方便，因此将遇到的问题汇总至本文档里。方便学习和查找。",-1),u=a("h2",{id:"推荐资料",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#推荐资料","aria-hidden":"true"},"#"),n(" 推荐资料")],-1),g={href:"https://www.bootcss.com/p/git-guide/",target:"_blank",rel:"noopener noreferrer"},h={href:"http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"},k=e(`<h2 id="设置全局用户名和邮箱" tabindex="-1"><a class="header-anchor" href="#设置全局用户名和邮箱" aria-hidden="true">#</a> 设置全局用户名和邮箱</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">-l</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;xxx&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email xxx@163.com
</code></pre></div><h2 id="设置当前项目用户名和邮箱" tabindex="-1"><a class="header-anchor" href="#设置当前项目用户名和邮箱" aria-hidden="true">#</a> 设置当前项目用户名和邮箱</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--local</span> <span class="token parameter variable">-l</span>
<span class="token function">git</span> config <span class="token parameter variable">--local</span> user.name <span class="token string">&quot;xxx&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--local</span> user.email xxx@163.com
</code></pre></div><h2 id="新建本地仓库并链接远程仓库" tabindex="-1"><a class="header-anchor" href="#新建本地仓库并链接远程仓库" aria-hidden="true">#</a> 新建本地仓库并链接远程仓库</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init
<span class="token function">git</span> remote <span class="token function">add</span> origin git@xxx.git
<span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span>origin/master master
</code></pre></div><h2 id="删除本地仓库" tabindex="-1"><a class="header-anchor" href="#删除本地仓库" aria-hidden="true">#</a> 删除本地仓库</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> .git
</code></pre></div><h2 id="提交通用步骤" tabindex="-1"><a class="header-anchor" href="#提交通用步骤" aria-hidden="true">#</a> 提交通用步骤</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;first commit&quot;</span>
<span class="token function">git</span> pull origin master
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master
</code></pre></div><h2 id="合并分支" tabindex="-1"><a class="header-anchor" href="#合并分支" aria-hidden="true">#</a> 合并分支</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>// A想合并B, 先切换到A分支
<span class="token function">git</span> checkout A
<span class="token function">git</span> merge origin/B                
</code></pre></div><h2 id="git-暂存管理" tabindex="-1"><a class="header-anchor" href="#git-暂存管理" aria-hidden="true">#</a> git 暂存管理</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> stash                暂存  
<span class="token function">git</span> stash list           列所有stash
<span class="token function">git</span> stash pop            取出暂存
</code></pre></div><h2 id="辅助查看命令" tabindex="-1"><a class="header-anchor" href="#辅助查看命令" aria-hidden="true">#</a> 辅助查看命令</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token parameter variable">--version</span>         查看git版本
<span class="token function">git</span> config <span class="token parameter variable">--list</span>     查看配置信息
<span class="token function">git</span> status            查看状态
<span class="token function">git</span> <span class="token function">diff</span>              查看差异        
<span class="token function">git</span> log               查看日志
<span class="token function">git</span> remote            查看远程仓库名
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>         查看远程所有仓库
</code></pre></div><h2 id="commit-模版" tabindex="-1"><a class="header-anchor" href="#commit-模版" aria-hidden="true">#</a> commit 模版</h2><h3 id="fixed-修复问题" tabindex="-1"><a class="header-anchor" href="#fixed-修复问题" aria-hidden="true">#</a> fixed 修复问题</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit -m<span class="token string">&quot;
  fix: 解决……的问题
  产生原因：
  解决方案：
  影响范围：
  Bug地址：
  to #12345678
&quot;</span>

简写：git commit -m&quot;fix: 解决…问题 <span class="token punctuation">(</span>fix <span class="token comment">#12345678)”</span>
</code></pre></div><h3 id="feat-新增需求" tabindex="-1"><a class="header-anchor" href="#feat-新增需求" aria-hidden="true">#</a> feat 新增需求</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;
  feat: 新增需求
  需求功能点：
  1. 
  2. 
  修改内容：
  影响范围：
&quot;</span>
</code></pre></div><h3 id="提交类型" tabindex="-1"><a class="header-anchor" href="#提交类型" aria-hidden="true">#</a> 提交类型</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>feat     新增功能
fix         修复bug
docs     修改文档
style     修改样式
refactor 代码重构
perf     性能优化
test     测试用例
chore     构建流程、增加依赖库、工具
revert      代码回滚
merge     代码合并
sync     同步主线或分支Bug
</code></pre></div><h2 id="git-常见问题" tabindex="-1"><a class="header-anchor" href="#git-常见问题" aria-hidden="true">#</a> git 常见问题</h2><h3 id="error-unable-to-read-sdk-settings" tabindex="-1"><a class="header-anchor" href="#error-unable-to-read-sdk-settings" aria-hidden="true">#</a> error: unable to read SDK settings</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># unable to read SDK settings for &#39;/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk&#39;</span>
xcode-select <span class="token parameter variable">--install</span>
</code></pre></div><h3 id="fatal-no-such-remote-origin" tabindex="-1"><a class="header-anchor" href="#fatal-no-such-remote-origin" aria-hidden="true">#</a> fatal: No such remote &#39;origin</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin git@xxx.git
</code></pre></div><h3 id="fatal-remote-origin-already-exists" tabindex="-1"><a class="header-anchor" href="#fatal-remote-origin-already-exists" aria-hidden="true">#</a> fatal: remote origin already exists</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote remove/rm origin
<span class="token function">git</span> remote <span class="token function">add</span> origin git@xxx.git

<span class="token comment"># or</span>
<span class="token function">git</span> remote set-url origin xxxxx
</code></pre></div><h3 id="fatal-refusing-to-merge-unrelated-histories" tabindex="-1"><a class="header-anchor" href="#fatal-refusing-to-merge-unrelated-histories" aria-hidden="true">#</a> fatal: refusing to merge unrelated histories</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> pull origin master --allow-unrelated-histories

<span class="token comment"># 合并冲突后</span>
<span class="token function">git</span> pull origin master

<span class="token comment"># 合并冲突后</span>
<span class="token function">git</span> push --set-upstream origin master
</code></pre></div><h3 id="fatal-authentication-failed-for" tabindex="-1"><a class="header-anchor" href="#fatal-authentication-failed-for" aria-hidden="true">#</a> fatal: Authentication failed for</h3><p><span style="color:#3eaf7c;">问题场景：</span> 电脑A有添加ssh，可正常使用ssh形式的链接拉取仓库代码；电脑B未添加ssh，想要拉去远端仓库，只能使用http像是链接；在使用http像是链接时需要输入用户名和密码，则很容易出现上述问题。</p><p><span style="color:#3eaf7c;">问题原因：</span> 在使用http形式输入密码时出错，系统缓存了错误密码，且不再重复提示输入密码，而导致每次都提示认证失败。</p>`,35),f=a("span",{style:{color:"#3eaf7c"}},"Window解决：",-1),m={href:"https://www.jianshu.com/p/b23cd00cffa6",target:"_blank",rel:"noopener noreferrer"},b=e(`<p><span style="color:#3eaf7c;">Mac解决方案：</span> 本人使用Mac电脑出现上述问题，上网搜索尝试过多种方案，都未成功，后来误打误撞，竟然解决了，这里贴下解决过程。</p><p>第一步：在git上创建项目令牌，此处已本人使用的企业版coding为例 <img src="https://fengling68.github.io/imgbed/images/1576935352-2822x560.png" alt="git-02"></p><p>第二步：使用项目令牌拼接如下格式url</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> setting <span class="token operator">=</span> <span class="token punctuation">{</span>
  tokenname <span class="token operator">=</span> <span class="token string">&#39;项目令牌用户名&#39;</span><span class="token punctuation">,</span>
  token <span class="token operator">=</span> <span class="token string">&#39;项目令牌密码&#39;</span><span class="token punctuation">,</span>
  platform <span class="token operator">=</span> <span class="token string">&#39;e.coding.net&#39;</span><span class="token punctuation">,</span>
  username <span class="token operator">=</span> <span class="token string">&#39;git用户名&#39;</span><span class="token punctuation">,</span>
  repo <span class="token operator">=</span> <span class="token string">&#39;仓库名称&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> remote <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>setting<span class="token punctuation">.</span>tokenname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>setting<span class="token punctuation">.</span>token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">@</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>setting<span class="token punctuation">.</span>platform<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>setting<span class="token punctuation">.</span>username<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>setting<span class="token punctuation">.</span>repo<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.git</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre></div><p>第三步：git命令使用新url直接clone代码或者重新设置remote后pull、push代码均可正常使用。查看Mac钥匙串程序，可以看到如下凭证。 <img src="https://fengling68.github.io/imgbed/images/1576935352-1758x636.png" alt="git-03"></p>`,5);function x(v,_){const s=i("ExternalLinkIcon");return p(),c("div",null,[l,d,u,a("p",null,[a("a",g,[n("git简易指南"),t(s)])]),a("p",null,[a("a",h,[n("常用git命令清单 阮一峰"),t(s)])]),k,a("p",null,[f,n(" window系统解决方案可参考此文章："),a("a",m,[n("https://www.jianshu.com/p/b23cd00cffa6"),t(s)]),n("。")]),b])}const y=o(r,[["render",x],["__file","git 常用命令和问题.html.vue"]]);export{y as default};

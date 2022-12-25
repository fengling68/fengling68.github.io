import{_ as u,r as n,o as d,c as h,a,b as s,d as e,w as l,f as i}from"./app.8609dc96.js";const m={},g=i(`<h1 id="记一次-mac-重装系统" tabindex="-1"><a class="header-anchor" href="#记一次-mac-重装系统" aria-hidden="true">#</a> 记一次 Mac 重装系统</h1><h2 id="mac重装系统" tabindex="-1"><a class="header-anchor" href="#mac重装系统" aria-hidden="true">#</a> Mac重装系统</h2><ul><li><mark>提前备份电脑重要数据</mark>（本人选择的U盘备份）</li><li>推荐可用WiFi或网线联网</li><li>电脑关机</li><li><code>command + R + 开机键</code></li><li>macOS 实用工具 <ul><li>选择“磁盘工具”</li><li>选择“Macintosh HD”</li><li>选择“抹掉”按钮</li><li>选择“APFS”格式</li><li>完成</li></ul></li><li>macOS 实用工具 <ul><li>选择“重新安装 macOS”</li><li>一直继续同意安装</li><li>下载安装完成后按步骤完成引导设置</li></ul></li></ul><h2 id="调整界面样式" tabindex="-1"><a class="header-anchor" href="#调整界面样式" aria-hidden="true">#</a> 调整界面样式</h2><ul><li><p>调整桌面图标大小</p><ul><li>桌面空白处按键 <code>command+j</code></li></ul></li><li><p>调整程序坞位置大小</p><ul><li>设置 -&gt; 桌面与程序坞</li></ul></li><li><p>调整 launchpad 图标行列大小</p></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 调整 launchpad 图标行列大小</span>
defaults <span class="token function">write</span> com.apple.dock springboard-columns <span class="token parameter variable">-int</span> 列数
defaults <span class="token function">write</span> com.apple.dock springboard-rows <span class="token parameter variable">-int</span> 行数
defaults <span class="token function">write</span> com.apple.dock ResetLaunchPad <span class="token parameter variable">-bool</span> TRUE
<span class="token function">killall</span> Dock

<span class="token comment"># 恢复默认 launchpad 图标行列</span>
defaults <span class="token function">write</span> com.apple.dock springboard-rows Default
defaults <span class="token function">write</span> com.apple.dock springboard-columns Default
<span class="token function">killall</span> Dock
</code></pre></div><h2 id="安装各种应用程序" tabindex="-1"><a class="header-anchor" href="#安装各种应用程序" aria-hidden="true">#</a> 安装各种应用程序</h2>`,7),b=a("li",null,"App Store 重新下载已购买的应用",-1),k={href:"https://nav.sankki.com/#/index",target:"_blank",rel:"noopener noreferrer"},f=a("li",null,"VScode（登陆账号同步插件配置）",-1),_=a("li",null,"Xcode（git）",-1),v=a("li",null,"写作类",-1),x=a("li",null,"设计类",-1),w=a("li",null,"网盘类",-1),y=a("li",null,"开发类",-1),S=a("li",null,"辅助工具类",-1),z=i(`<h2 id="安装-brew" tabindex="-1"><a class="header-anchor" href="#安装-brew" aria-hidden="true">#</a> 安装 brew</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>/bin/zsh <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre></div><h2 id="安装-iterm2、zsh、oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#安装-iterm2、zsh、oh-my-zsh" aria-hidden="true">#</a> 安装 iterm2、zsh、oh-my-zsh</h2><ul><li>按顺序依次安装 iterm2、zsh、oh-my-zsh</li><li>配置相关主题、插件</li></ul><h2 id="安装-node" tabindex="-1"><a class="header-anchor" href="#安装-node" aria-hidden="true">#</a> 安装 node</h2><ul><li>官网下载 node 并安装</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">node</span> <span class="token parameter variable">-v</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span>
</code></pre></div><ul><li>查看镜像 &amp; 设置淘宝镜像</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config get registry
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org
</code></pre></div><ul><li>安装 n 管理 node</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> n
n v16.18.0
n <span class="token function">rm</span> v16.18.0
</code></pre></div><h2 id="配置-hosts" tabindex="-1"><a class="header-anchor" href="#配置-hosts" aria-hidden="true">#</a> 配置 hosts</h2><ul><li>github 和 google</li><li>uTools 搜索 host</li></ul><h2 id="配置-git-ssh" tabindex="-1"><a class="header-anchor" href="#配置-git-ssh" aria-hidden="true">#</a> 配置 git ssh</h2><ul><li>设置用户名和邮箱</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">-l</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;name&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;email&quot;</span>
</code></pre></div><ul><li>生成 ssh</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.ssh
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;email&quot;</span>
<span class="token function">cat</span> id_rsa.pub
</code></pre></div><ul><li>配置 ssh</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>Github - Settings - SSH - <span class="token function">add</span>
</code></pre></div><ul><li>拉取项目</li></ul><h2 id="配置图床-upic" tabindex="-1"><a class="header-anchor" href="#配置图床-upic" aria-hidden="true">#</a> 配置图床 uPic</h2>`,22),q=a("ul",null,[a("li",null,[s("用户名："),a("mark",null,"xxx")]),a("li",null,"仓库名：imgbed"),a("li",null,"分支：gh-pages"),a("li",null,[s("Token："),a("mark",null,"yyy")]),a("li",null,[s("域名：https://"),a("mark",null,"xxx"),s(".github.io/imgbed")]),a("li",null,"保存路径：images-upic-picture/{filename}-{since_millisecond}{.suffix}")],-1),T=a("ul",null,[a("li",null,[s("用户名："),a("mark",null,"xxx")]),a("li",null,"仓库名：imgbed"),a("li",null,"分支：gh-pages"),a("li",null,[s("Token："),a("mark",null,"yyy")]),a("li",null,[s("域名：https://"),a("mark",null,"xxx"),s(".github.io/imgbed")]),a("li",null,"保存路径：images-upic-blogs/{filename}-{since_millisecond}{.suffix}")],-1),C=a("h2",{id:"u盘备份数据拷贝到电脑",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#u盘备份数据拷贝到电脑","aria-hidden":"true"},"#"),s(" U盘备份数据拷贝到电脑")],-1);function D(N,V){const t=n("ExternalLinkIcon"),o=n("Tabs");return d(),h("div",null,[g,a("ul",null,[b,a("li",null,[s("Google Chrome（登陆账号同步插件配置） "),a("ul",null,[a("li",null,[s("网址收藏 "),a("a",k,[s("sankki"),e(t)])])])]),f,_,v,x,w,y,S]),z,e(o,{id:"272",data:[{title:"images-upic-picture"},{title:"images-upic-blogs"}]},{tab0:l(({title:c,value:r,isActive:p})=>[q]),tab1:l(({title:c,value:r,isActive:p})=>[T]),_:1}),C])}const E=u(m,[["render",D],["__file","记一次重装系统.html.vue"]]);export{E as default};

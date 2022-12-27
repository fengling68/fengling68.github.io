import{_ as a,o as n,c as s,f as e}from"./app.3f8066ad.js";const t={},c=e(`<h1 id="mac-常用命令" tabindex="-1"><a class="header-anchor" href="#mac-常用命令" aria-hidden="true">#</a> mac 常用命令</h1><h2 id="mac-隐藏终端前的计算机名" tabindex="-1"><a class="header-anchor" href="#mac-隐藏终端前的计算机名" aria-hidden="true">#</a> mac 隐藏终端前的计算机名</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/bashrc

<span class="token comment"># 注释</span>
<span class="token comment"># PS1=&#39;\\h:\\W \\u\\$ &#39;</span>
<span class="token comment"># 添加</span>
<span class="token assign-left variable"><span class="token environment constant">PS1</span></span><span class="token operator">=</span><span class="token string">&#39;\\W \\u\\$ &#39;</span>

<span class="token comment"># 重启终端</span>
</code></pre></div><h2 id="mac-安装软件" tabindex="-1"><a class="header-anchor" href="#mac-安装软件" aria-hidden="true">#</a> mac 安装软件</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 一般解决方法，终端执行命令，查看安全性与隐私是否成功设置任何来源</span>
<span class="token function">sudo</span> spctl --master-disable

<span class="token comment"># macOS 10.15 Catalina 修复方法，部分应用名有空格，路径处建议直接拖拽</span>
<span class="token function">sudo</span> xattr <span class="token parameter variable">-d</span> com.apple.quarantine /Applications/appname.app
</code></pre></div><h2 id="mac-查看缓存" tabindex="-1"><a class="header-anchor" href="#mac-查看缓存" aria-hidden="true">#</a> mac 查看缓存</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># root 权限查看</span>
<span class="token function">sudo</span> <span class="token function">du</span> <span class="token parameter variable">-sh</span> /System/Library/Caches/com.apple.coresymbolicationd
</code></pre></div><h2 id="mac-通过域名查看-ip-地址" tabindex="-1"><a class="header-anchor" href="#mac-通过域名查看-ip-地址" aria-hidden="true">#</a> mac 通过域名查看 IP 地址</h2><ul><li>Mac 自带“网络实用工具” ——&gt; Lookup ——&gt; 输入网址</li><li>Mac 终端 ——&gt; 命令：nslookup www.baidu.com</li></ul><h2 id="mac-中-chrome-插件存放位置" tabindex="-1"><a class="header-anchor" href="#mac-中-chrome-插件存放位置" aria-hidden="true">#</a> mac 中 Chrome 插件存放位置</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>~/Library/Application Support/Google/Chrome/Default/Extensions
~/Library/Application Support/Google/Chrome/Profile <span class="token number">3</span>/Extensions
</code></pre></div><h2 id="weixin-备份文件在-mac-中的位置" tabindex="-1"><a class="header-anchor" href="#weixin-备份文件在-mac-中的位置" aria-hidden="true">#</a> weixin 备份文件在 mac 中的位置</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入目录 -&gt; 版本号 -&gt; 备份</span>
~/library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/
</code></pre></div><h2 id="tree-查看目录树" tabindex="-1"><a class="header-anchor" href="#tree-查看目录树" aria-hidden="true">#</a> tree 查看目录树</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 Homebrew</span>
/bin/bash <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh<span class="token variable">)</span></span>&quot;</span>

<span class="token comment"># 安装tree</span>
brew <span class="token function">install</span> tree

<span class="token comment"># 参数 -a 列出所有文件，包括 . 文件夹</span>
<span class="token comment"># 参数 -h 列出文件大小</span>
tree <span class="token parameter variable">-a</span> <span class="token parameter variable">-h</span>
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── <span class="token punctuation">[</span><span class="token number">6</span>.0K<span class="token punctuation">]</span>  .DS_Store
├── <span class="token punctuation">[</span> <span class="token number">128</span><span class="token punctuation">]</span>  font
│   ├── <span class="token punctuation">[</span>  <span class="token number">96</span><span class="token punctuation">]</span>  .font-spider
│   │   └── <span class="token punctuation">[</span><span class="token number">4</span>.8M<span class="token punctuation">]</span>  font.ttf
│   └── <span class="token punctuation">[</span><span class="token number">8</span>.2K<span class="token punctuation">]</span>  font.ttf
└── <span class="token punctuation">[</span> <span class="token number">547</span><span class="token punctuation">]</span>  index.html
</code></pre></div>`,16),o=[c];function p(l,r){return n(),s("div",null,o)}const d=a(t,[["render",p],["__file","mac 常用命令.html.vue"]]);export{d as default};

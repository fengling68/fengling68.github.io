import{_ as o,r as c,o as d,c as p,a as n,b as a,d as e,f as s}from"./app.9b0e6b33.js";const r={},l=s('<h1 id="linux-命令" tabindex="-1"><a class="header-anchor" href="#linux-命令" aria-hidden="true">#</a> linux 命令</h1><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2><table><thead><tr><th>一级目录</th><th>功能（作用）</th></tr></thead><tbody><tr><td><code>/bin</code></td><td>存放经常使用的指令，如 cp、ls、kill...</td></tr><tr><td><code>/sbin</code></td><td>系统管理员使用的系统管理指令</td></tr><tr><td><code>/boot</code></td><td>存放的是启动Linux时使用的一些核心文件</td></tr><tr><td><code>/dev</code></td><td>类似于windows的设备管理器，把所有的硬件用文件的形式存储</td></tr><tr><td><code>/etc</code></td><td>存放所有系统管理所需要的配置文件,比如说mysql中的配置文件，my.conf</td></tr><tr><td><code>/home</code></td><td>存放普通用户的主目录，在Linux中每个用户都有一个自己的目录,一般该目录是以用户的账号命名的</td></tr><tr><td><code>/lib</code></td><td>库文件存放目录</td></tr><tr><td><code>/media</code></td><td>Linux会识别一些设备，例如U盘，光驱等等,识别后，Linux会把识别的设备挂载到这个目录下</td></tr><tr><td><code>/mnt</code></td><td>用于让用户临时挂载别的文件系统，我们可以将外部的存储挂载在 /mnt/ 上</td></tr><tr><td><code>/opt</code></td><td>正常这个文件夹是用来放安装包的</td></tr><tr><td><code>/proc</code></td><td>这是系统内存的映射（最好别动这个文件夹）</td></tr><tr><td><code>/root</code></td><td>系统管理员的用户主目录</td></tr><tr><td><code>/run</code></td><td></td></tr><tr><td><code>/srv</code></td><td>service的缩写，存放的是一些服务启动之后需要使用的数据（最好别动这个文件夹）</td></tr><tr><td><code>/sys</code></td><td>系统相关文件（最好别动这个文件夹）</td></tr><tr><td><code>/tmp</code></td><td>用来存放临时文件</td></tr><tr><td><code>/usr</code></td><td>用户的很多应用程序和文件都放在这个目录下，有点像Windows下的program files目录</td></tr><tr><td><code>/usr/local</code></td><td>安装后的程序存放的地方</td></tr><tr><td><code>/var</code></td><td>存放经常需要被修改的文件，比如各种日志文件</td></tr><tr><td><code>/selinux</code></td><td>全名 security enhanced linux，安全加强linux，是一种安全系统，受到攻击的时候这个文件会被触发</td></tr></tbody></table>',3),i={href:"https://cloud.tencent.com/developer/article/1555401",target:"_blank",rel:"noopener noreferrer"},u=s(`<h2 id="文件权限" tabindex="-1"><a class="header-anchor" href="#文件权限" aria-hidden="true">#</a> 文件权限</h2><h2 id="命令-添加删除用户" tabindex="-1"><a class="header-anchor" href="#命令-添加删除用户" aria-hidden="true">#</a> 命令：添加删除用户</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出所有用户</span>
<span class="token function">cat</span> /etc/passwd <span class="token operator">|</span><span class="token function">cut</span> <span class="token parameter variable">-f</span> <span class="token number">1</span> -d:

<span class="token comment"># 新建一个用户</span>
<span class="token function">sudo</span> <span class="token function">useradd</span> xxx
<span class="token function">sudo</span> <span class="token function">passwd</span> xxx

<span class="token comment"># 永久删除用户</span>
<span class="token function">sudo</span> <span class="token function">userdel</span> xxx

<span class="token comment"># 切换用户</span>
<span class="token function">su</span> root
<span class="token function">sudo</span> <span class="token function">su</span> root

<span class="token comment"># 查看用户（2种命令查询结果不一样）</span>
<span class="token function">who</span> am i
<span class="token function">whoami</span>
</code></pre></div><h2 id="命令-添加删除文件" tabindex="-1"><a class="header-anchor" href="#命令-添加删除文件" aria-hidden="true">#</a> 命令：添加删除文件</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加目录</span>
<span class="token function">mkdir</span> xxx

<span class="token comment"># 删除目录</span>
<span class="token function">rmdir</span> xxx
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> xxx
</code></pre></div><h2 id="shell-判断目录、文件是否存在" tabindex="-1"><a class="header-anchor" href="#shell-判断目录、文件是否存在" aria-hidden="true">#</a> shell 判断目录、文件是否存在</h2>`,6),k={href:"https://www.runoob.com/note/47027",target:"_blank",rel:"noopener noreferrer"},h=s(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 判断目录是否存在</span>
<span class="token assign-left variable">path</span><span class="token operator">=</span><span class="token string">&quot;/home/iamftp&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token variable">\${path}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token function">dir</span> <span class="token variable">\${path}</span> exist<span class="token operator">!</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token function">dir</span> <span class="token variable">\${path}</span> not exist<span class="token operator">!</span>
<span class="token keyword">fi</span>

<span class="token comment"># 判断文件是否存在</span>
<span class="token assign-left variable">file</span><span class="token operator">=</span><span class="token string">&quot;/home/iamftp/index.html&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">\${file}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token function">file</span> <span class="token variable">\${file}</span> exist<span class="token operator">!</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token function">file</span> <span class="token variable">\${file}</span> not exist<span class="token operator">!</span>
<span class="token keyword">fi</span>
</code></pre></div>`,1);function f(m,x){const t=c("ExternalLinkIcon");return d(),p("div",null,[l,n("p",null,[a("整理自："),n("a",i,[a("linux 目录结构及用途"),e(t)])]),u,n("p",null,[n("a",k,[a("shell 判断文件夹或文件是否存在"),e(t)])]),h])}const _=o(r,[["render",f],["__file","linux 命令.html.vue"]]);export{_ as default};

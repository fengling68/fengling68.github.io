import{_ as t,r as c,o as d,c as r,a,b as n,d as o,f as e}from"./app.873480e4.js";const l={},i=e(`<h1 id="mongodb-安装" tabindex="-1"><a class="header-anchor" href="#mongodb-安装" aria-hidden="true">#</a> mongodb 安装</h1><h2 id="mongodb-安装和启动" tabindex="-1"><a class="header-anchor" href="#mongodb-安装和启动" aria-hidden="true">#</a> mongodb 安装和启动</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入 /usr/local</span>
<span class="token builtin class-name">cd</span> /usr/local

<span class="token comment"># 下载</span>
<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-O</span> https://fastdl.mongodb.org/osx/mongodb-osx-x86_64-3.4.2.tgz

<span class="token comment"># 解压</span>
<span class="token function">sudo</span> <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> mongodb-osx-x86_64-3.4.2.tgz

<span class="token comment"># 重命名为 mongodb 目录</span>
<span class="token function">sudo</span> <span class="token function">mv</span> mongodb-osx-x86_64-3.4.2 mongodb

<span class="token comment"># 添加path路径</span>
<span class="token builtin class-name">cd</span> ~
<span class="token function">vim</span> .bash_profile

 <span class="token comment"># 添加环境变量</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/local/mongodb/bin:<span class="token environment constant">$PATH</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">PATH</span>}</span>:/usr/local/mongodb/bin

<span class="token builtin class-name">source</span> .bash_profile
mongod <span class="token parameter variable">-version</span>

<span class="token comment"># 启动</span>
<span class="token function">sudo</span> mongod
</code></pre></div><h2 id="adminmongo-可视化工具工具" tabindex="-1"><a class="header-anchor" href="#adminmongo-可视化工具工具" aria-hidden="true">#</a> adminMongo 可视化工具工具</h2>`,4),p={href:"https://github.com/mrvautin/adminMongo",target:"_blank",rel:"noopener noreferrer"},m=a("p",null,"2、安装 npm install",-1),h=a("p",null,"3、启动 npm start",-1),b={href:"http://127.0.0.1:1234",target:"_blank",rel:"noopener noreferrer"},g=e('<p>5、MongoDB链接 mongodb://127.0.0.1:27017</p><h2 id="mongodb-安装问题" tabindex="-1"><a class="header-anchor" href="#mongodb-安装问题" aria-hidden="true">#</a> mongodb 安装问题</h2><h3 id="mac端-sudo-open-e-〜-bash-profile-权限被拒绝" tabindex="-1"><a class="header-anchor" href="#mac端-sudo-open-e-〜-bash-profile-权限被拒绝" aria-hidden="true">#</a> mac端 sudo open -e 〜/.bash_profile 权限被拒绝</h3><p>解决：<code>sudo chown username ~/.bash_profile</code></p><h3 id="mac端-mongod-启动报错-data-directory-data-db-not-found" tabindex="-1"><a class="header-anchor" href="#mac端-mongod-启动报错-data-directory-data-db-not-found" aria-hidden="true">#</a> mac端 mongod 启动报错：Data directory /data/db not found</h3><p>解决：更改指定运行路径，<code>mongod --dbpath &#39;新的可访问存储路径&#39;</code></p><h3 id="mac端-mongod-启动报错-is-a-mongod-instance-already-running" tabindex="-1"><a class="header-anchor" href="#mac端-mongod-启动报错-is-a-mongod-instance-already-running" aria-hidden="true">#</a> mac端 mongod 启动报错：Is a mongod instance already running?</h3><p>解决：删除这句报错前提供路径下的 mongod.lock 文件，<code>sudo rm /xxx/xxx/data/db/mongod.lock</code></p><h3 id="mac端-新开终端-mongod-命令失效" tabindex="-1"><a class="header-anchor" href="#mac端-新开终端-mongod-命令失效" aria-hidden="true">#</a> mac端：新开终端 mongod 命令失效</h3>',9),u={href:"https://blog.csdn.net/Bronze5/article/details/103440877",target:"_blank",rel:"noopener noreferrer"},_=e(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~
<span class="token function">vim</span> ~/.zshrc

<span class="token comment"># 解决iterm2 中zsh 模式不加载 ~/.bash_profile 文件编写的环境变量！</span>
<span class="token builtin class-name">source</span> <span class="token environment constant">$HOME</span>/.bash_profile

<span class="token builtin class-name">source</span> ~/.zshrc
</code></pre></div>`,1);function f(k,x){const s=c("ExternalLinkIcon");return d(),r("div",null,[i,a("p",null,[n("1、克隆adminMongo git clone "),a("a",p,[n("https://github.com/mrvautin/adminMongo"),o(s)]),n(" cd adminMongo")]),m,h,a("p",null,[n("4、访问网站 "),a("a",b,[n("http://127.0.0.1:1234"),o(s)])]),g,a("p",null,[n("原因：电脑端使用 iterm2 作为终端工具，未加载 ~/.bash_profile 文件中的环境变量 详解："),a("a",u,[n("https://blog.csdn.net/Bronze5/article/details/103440877"),o(s)]),n(" 解决方案：")]),_])}const z=t(l,[["render",f],["__file","数据库｜mongodb 安装.html.vue"]]);export{z as default};

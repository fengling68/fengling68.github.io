import{_ as t,r as e,o,c as p,a,b as n,d as c,f as l}from"./app.8609dc96.js";const d={},u=a("h1",{id:"leanote-二进制部署",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#leanote-二进制部署","aria-hidden":"true"},"#"),n(" leanote 二进制部署")],-1),r={href:"https://51.ruyo.net/2922.html",target:"_blank",rel:"noopener noreferrer"},i=l(`<h2 id="下载文件" tabindex="-1"><a class="header-anchor" href="#下载文件" aria-hidden="true">#</a> 下载文件</h2><p>leanote二进制版 http://leanote.org/#download MongoDB http://dl.mongodb.org/dl/win32/x86_64 leanote客户端 https://leanote.com/ Robo 3T https://robomongo.org/download</p><h2 id="安装步骤" tabindex="-1"><a class="header-anchor" href="#安装步骤" aria-hidden="true">#</a> 安装步骤</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>1、在 \` D:\\mongodb \` 下新建data（db , log）文件夹
2、配置环境变量 \` ;D:\\mongodb\\bin \`
3、进入 \` D:\\mongodb\\bin \` 执行 \` mongod --dbpath D:\\mongodb\\data\\db \`
4、在浏览器：http://localhost:27017 查看是否安装成功；
5、进入\` D: \`导入数据 \` mongorestore -h localhost -d leanote --dir ./leanote/mongodb_backup/leanote_install_data/ \`
</code></pre></div><h2 id="修改密码" tabindex="-1"><a class="header-anchor" href="#修改密码" aria-hidden="true">#</a> 修改密码</h2><p>进入个人中心修改密码</p><h2 id="修改邮箱" tabindex="-1"><a class="header-anchor" href="#修改邮箱" aria-hidden="true">#</a> 修改邮箱</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>use leanote
db.users.update<span class="token punctuation">(</span><span class="token punctuation">{</span>Username:<span class="token string">&quot;admin&quot;</span><span class="token punctuation">}</span>,<span class="token punctuation">{</span><span class="token variable">$set</span>:<span class="token punctuation">{</span>Email:<span class="token string">&quot;xxxxxx@xxx.com&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="客户端连接自建服务器" tabindex="-1"><a class="header-anchor" href="#客户端连接自建服务器" aria-hidden="true">#</a> 客户端连接自建服务器</h2><p>http://localhost:9000</p><h2 id="备份数据" tabindex="-1"><a class="header-anchor" href="#备份数据" aria-hidden="true">#</a> 备份数据</h2><p>mongodump -h localhost -d leanote -o D:/data</p><h2 id="制作-bat-快速启动文件" tabindex="-1"><a class="header-anchor" href="#制作-bat-快速启动文件" aria-hidden="true">#</a> 制作 .bat 快速启动文件</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>文件一：mongodb.bat
    d:
    <span class="token builtin class-name">cd</span> mongodb<span class="token punctuation">\\</span>bin
    mongod <span class="token parameter variable">--dbpath</span> D:<span class="token punctuation">\\</span>mongodb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>db
    
文件二：mongodb27017.bat
    mongo <span class="token number">127.0</span>.0.1:27017
    
文件三：leanote.bat
    d:
    <span class="token builtin class-name">cd</span> leanote<span class="token punctuation">\\</span>bin
    run.bat
</code></pre></div><h2 id="添加管理员" tabindex="-1"><a class="header-anchor" href="#添加管理员" aria-hidden="true">#</a> 添加管理员</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>use admin
db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span>user:<span class="token string">&quot;admin&quot;</span>,pwd:<span class="token string">&quot;password&quot;</span>,roles:<span class="token punctuation">[</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
db.auth<span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span>, <span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="添加数据库用户" tabindex="-1"><a class="header-anchor" href="#添加数据库用户" aria-hidden="true">#</a> 添加数据库用户</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>use leanote
db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span>user: <span class="token string">&quot;admin&quot;</span>, pwd: <span class="token string">&quot;password&quot;</span>, roles: <span class="token punctuation">[</span><span class="token punctuation">{</span> role: <span class="token string">&quot;dbOwner&quot;</span>, db: <span class="token string">&quot;leanote&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
db.auth<span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span>, <span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span>
</code></pre></div>`,18);function h(b,k){const s=e("ExternalLinkIcon");return o(),p("div",null,[u,a("blockquote",null,[a("p",null,[n("教程："),a("a",r,[n("https://51.ruyo.net/2922.html"),c(s)])])]),i])}const m=t(d,[["render",h],["__file","应用部署｜leanote 二进制部署.html.vue"]]);export{m as default};

import{_ as t,r as c,o as r,c as d,a,b as n,d as o,f as e}from"./app.097c626c.js";const l={},i=e(`<h1 id="mongodb-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#mongodb-\u5B89\u88C5" aria-hidden="true">#</a> mongodb \u5B89\u88C5</h1><h2 id="mongodb-\u5B89\u88C5\u548C\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#mongodb-\u5B89\u88C5\u548C\u542F\u52A8" aria-hidden="true">#</a> mongodb \u5B89\u88C5\u548C\u542F\u52A8</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u8FDB\u5165 /usr/local</span>
<span class="token builtin class-name">cd</span> /usr/local

<span class="token comment"># \u4E0B\u8F7D</span>
<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-O</span> https://fastdl.mongodb.org/osx/mongodb-osx-x86_64-3.4.2.tgz

<span class="token comment"># \u89E3\u538B</span>
<span class="token function">sudo</span> <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> mongodb-osx-x86_64-3.4.2.tgz

<span class="token comment"># \u91CD\u547D\u540D\u4E3A mongodb \u76EE\u5F55</span>
<span class="token function">sudo</span> <span class="token function">mv</span> mongodb-osx-x86_64-3.4.2 mongodb

<span class="token comment"># \u6DFB\u52A0path\u8DEF\u5F84</span>
<span class="token builtin class-name">cd</span> ~
<span class="token function">vim</span> .bash_profile

 <span class="token comment"># \u6DFB\u52A0\u73AF\u5883\u53D8\u91CF</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/local/mongodb/bin:<span class="token environment constant">$PATH</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">PATH</span>}</span>:/usr/local/mongodb/bin

<span class="token builtin class-name">source</span> .bash_profile
mongod <span class="token parameter variable">-version</span>

<span class="token comment"># \u542F\u52A8</span>
<span class="token function">sudo</span> mongod
</code></pre></div><h2 id="adminmongo-\u53EF\u89C6\u5316\u5DE5\u5177\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#adminmongo-\u53EF\u89C6\u5316\u5DE5\u5177\u5DE5\u5177" aria-hidden="true">#</a> adminMongo \u53EF\u89C6\u5316\u5DE5\u5177\u5DE5\u5177</h2>`,4),p={href:"https://github.com/mrvautin/adminMongo",target:"_blank",rel:"noopener noreferrer"},m=a("p",null,"2\u3001\u5B89\u88C5 npm install",-1),h=a("p",null,"3\u3001\u542F\u52A8 npm start",-1),b={href:"http://127.0.0.1:1234",target:"_blank",rel:"noopener noreferrer"},g=e('<p>5\u3001MongoDB\u94FE\u63A5 mongodb://127.0.0.1:27017</p><h2 id="mongodb-\u5B89\u88C5\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#mongodb-\u5B89\u88C5\u95EE\u9898" aria-hidden="true">#</a> mongodb \u5B89\u88C5\u95EE\u9898</h2><h3 id="mac\u7AEF-sudo-open-e-\u301C-bash-profile-\u6743\u9650\u88AB\u62D2\u7EDD" tabindex="-1"><a class="header-anchor" href="#mac\u7AEF-sudo-open-e-\u301C-bash-profile-\u6743\u9650\u88AB\u62D2\u7EDD" aria-hidden="true">#</a> mac\u7AEF sudo open -e \u301C/.bash_profile \u6743\u9650\u88AB\u62D2\u7EDD</h3><p>\u89E3\u51B3\uFF1A<code>sudo chown username ~/.bash_profile</code></p><h3 id="mac\u7AEF-mongod-\u542F\u52A8\u62A5\u9519-data-directory-data-db-not-found" tabindex="-1"><a class="header-anchor" href="#mac\u7AEF-mongod-\u542F\u52A8\u62A5\u9519-data-directory-data-db-not-found" aria-hidden="true">#</a> mac\u7AEF mongod \u542F\u52A8\u62A5\u9519\uFF1AData directory /data/db not found</h3><p>\u89E3\u51B3\uFF1A\u66F4\u6539\u6307\u5B9A\u8FD0\u884C\u8DEF\u5F84\uFF0C<code>mongod --dbpath &#39;\u65B0\u7684\u53EF\u8BBF\u95EE\u5B58\u50A8\u8DEF\u5F84&#39;</code></p><h3 id="mac\u7AEF-mongod-\u542F\u52A8\u62A5\u9519-is-a-mongod-instance-already-running" tabindex="-1"><a class="header-anchor" href="#mac\u7AEF-mongod-\u542F\u52A8\u62A5\u9519-is-a-mongod-instance-already-running" aria-hidden="true">#</a> mac\u7AEF mongod \u542F\u52A8\u62A5\u9519\uFF1AIs a mongod instance already running?</h3><p>\u89E3\u51B3\uFF1A\u5220\u9664\u8FD9\u53E5\u62A5\u9519\u524D\u63D0\u4F9B\u8DEF\u5F84\u4E0B\u7684 mongod.lock \u6587\u4EF6\uFF0C<code>sudo rm /xxx/xxx/data/db/mongod.lock</code></p><h3 id="mac\u7AEF-\u65B0\u5F00\u7EC8\u7AEF-mongod-\u547D\u4EE4\u5931\u6548" tabindex="-1"><a class="header-anchor" href="#mac\u7AEF-\u65B0\u5F00\u7EC8\u7AEF-mongod-\u547D\u4EE4\u5931\u6548" aria-hidden="true">#</a> mac\u7AEF\uFF1A\u65B0\u5F00\u7EC8\u7AEF mongod \u547D\u4EE4\u5931\u6548</h3>',9),u={href:"https://blog.csdn.net/Bronze5/article/details/103440877",target:"_blank",rel:"noopener noreferrer"},_=e(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~
<span class="token function">vim</span> ~/.zshrc

<span class="token comment"># \u89E3\u51B3iterm2 \u4E2Dzsh \u6A21\u5F0F\u4E0D\u52A0\u8F7D ~/.bash_profile \u6587\u4EF6\u7F16\u5199\u7684\u73AF\u5883\u53D8\u91CF\uFF01</span>
<span class="token builtin class-name">source</span> <span class="token environment constant">$HOME</span>/.bash_profile

<span class="token builtin class-name">source</span> ~/.zshrc
</code></pre></div>`,1);function f(k,x){const s=c("ExternalLinkIcon");return r(),d("div",null,[i,a("p",null,[n("1\u3001\u514B\u9686adminMongo git clone "),a("a",p,[n("https://github.com/mrvautin/adminMongo"),o(s)]),n(" cd adminMongo")]),m,h,a("p",null,[n("4\u3001\u8BBF\u95EE\u7F51\u7AD9 "),a("a",b,[n("http://127.0.0.1:1234"),o(s)])]),g,a("p",null,[n("\u539F\u56E0\uFF1A\u7535\u8111\u7AEF\u4F7F\u7528 iterm2 \u4F5C\u4E3A\u7EC8\u7AEF\u5DE5\u5177\uFF0C\u672A\u52A0\u8F7D ~/.bash_profile \u6587\u4EF6\u4E2D\u7684\u73AF\u5883\u53D8\u91CF \u8BE6\u89E3\uFF1A"),a("a",u,[n("https://blog.csdn.net/Bronze5/article/details/103440877"),o(s)]),n(" \u89E3\u51B3\u65B9\u6848\uFF1A")]),_])}const z=t(l,[["render",f],["__file","\u6570\u636E\u5E93\uFF5Cmongodb \u5B89\u88C5.html.vue"]]);export{z as default};

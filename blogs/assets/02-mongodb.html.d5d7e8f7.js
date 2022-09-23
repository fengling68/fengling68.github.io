import{_ as n,o,c as a,a as d}from"./app.e6a83323.js";const e={},r=d(`<h1 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb" aria-hidden="true">#</a> mongodb</h1><h2 id="_1\u3001\u5B89\u88C5\u548C\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u5B89\u88C5\u548C\u542F\u52A8" aria-hidden="true">#</a> 1\u3001\u5B89\u88C5\u548C\u542F\u52A8</h2><pre><code># \u8FDB\u5165 /usr/local
cd /usr/local

# \u4E0B\u8F7D
sudo curl -O https://fastdl.mongodb.org/osx/mongodb-osx-x86_64-3.4.2.tgz

# \u89E3\u538B
sudo tar -zxvf mongodb-osx-x86_64-3.4.2.tgz

# \u91CD\u547D\u540D\u4E3A mongodb \u76EE\u5F55
sudo mv mongodb-osx-x86_64-3.4.2 mongodb

# \u6DFB\u52A0path\u8DEF\u5F84
cd ~
vim .bash_profile

# \u6DFB\u52A0\u73AF\u5883\u53D8\u91CF
export PATH=/usr/local/mongodb/bin:$PATH
export PATH=\${PATH}:/usr/local/mongodb/bin

source .bash_profile
mongod -version

# \u542F\u52A8
sudo mongod
</code></pre><h2 id="_2\u3001\u5B89\u88C5\u53EF\u89C6\u5316\u5DE5\u5177adminmongo" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u5B89\u88C5\u53EF\u89C6\u5316\u5DE5\u5177adminmongo" aria-hidden="true">#</a> 2\u3001\u5B89\u88C5\u53EF\u89C6\u5316\u5DE5\u5177adminMongo</h2><pre><code>1\u3001\u514B\u9686adminMongo
git clone https://github.com/mrvautin/adminMongo
cd adminMongo

2\u3001\u5B89\u88C5
npm install

3\u3001\u542F\u52A8
npm start

4\u3001\u8BBF\u95EE\u7F51\u7AD9
http://127.0.0.1:1234

5\u3001MongoDB\u94FE\u63A5
mongodb://127.0.0.1:27017
</code></pre><h2 id="_3\u3001mongodb-\u5B89\u88C5\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_3\u3001mongodb-\u5B89\u88C5\u95EE\u9898" aria-hidden="true">#</a> 3\u3001mongodb \u5B89\u88C5\u95EE\u9898</h2><h3 id="mac\u7AEF-sudo-open-e-\u301C-bash-profile-\u6743\u9650\u88AB\u62D2\u7EDD" tabindex="-1"><a class="header-anchor" href="#mac\u7AEF-sudo-open-e-\u301C-bash-profile-\u6743\u9650\u88AB\u62D2\u7EDD" aria-hidden="true">#</a> mac\u7AEF sudo open -e \u301C/.bash_profile \u6743\u9650\u88AB\u62D2\u7EDD\uFF1A</h3><p>\u89E3\u51B3\uFF1A<code>sudo chown username ~/.bash_profile</code></p><h3 id="mac\u7AEF-mongod-\u542F\u52A8\u62A5\u9519-data-directory-data-db-not-found" tabindex="-1"><a class="header-anchor" href="#mac\u7AEF-mongod-\u542F\u52A8\u62A5\u9519-data-directory-data-db-not-found" aria-hidden="true">#</a> mac\u7AEF mongod \u542F\u52A8\u62A5\u9519\uFF1AData directory /data/db not found</h3><p>\u89E3\u51B3\uFF1A\u66F4\u6539\u6307\u5B9A\u8FD0\u884C\u8DEF\u5F84\uFF0C<code>mongod --dbpath &#39;\u65B0\u7684\u53EF\u8BBF\u95EE\u5B58\u50A8\u8DEF\u5F84&#39;</code></p><h3 id="mac\u7AEF-mongod-\u542F\u52A8\u62A5\u9519-is-a-mongod-instance-already-running" tabindex="-1"><a class="header-anchor" href="#mac\u7AEF-mongod-\u542F\u52A8\u62A5\u9519-is-a-mongod-instance-already-running" aria-hidden="true">#</a> mac\u7AEF mongod \u542F\u52A8\u62A5\u9519\uFF1AIs a mongod instance already running?</h3><p>\u89E3\u51B3\uFF1A\u5220\u9664\u8FD9\u53E5\u62A5\u9519\u524D\u63D0\u4F9B\u8DEF\u5F84\u4E0B\u7684 mongod.lock \u6587\u4EF6\uFF0C<code>sudo rm /xxx/xxx/data/db/mongod.lock</code></p><h3 id="mac\u7AEF-\u65B0\u5F00\u7EC8\u7AEF-mongod-\u547D\u4EE4\u5931\u6548" tabindex="-1"><a class="header-anchor" href="#mac\u7AEF-\u65B0\u5F00\u7EC8\u7AEF-mongod-\u547D\u4EE4\u5931\u6548" aria-hidden="true">#</a> mac\u7AEF\uFF1A\u65B0\u5F00\u7EC8\u7AEF mongod \u547D\u4EE4\u5931\u6548</h3><p>\u539F\u56E0\uFF1A\u7535\u8111\u7AEF\u4F7F\u7528 iterm2 \u4F5C\u4E3A\u7EC8\u7AEF\u5DE5\u5177\uFF0C\u672A\u52A0\u8F7D ~/.bash_profile \u6587\u4EF6\u4E2D\u7684\u73AF\u5883\u53D8\u91CF \u8BE6\u89E3\uFF1Ahttps://blog.csdn.net/Bronze5/article/details/103440877 \u89E3\u51B3\u65B9\u6848\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>cd ~
vim ~/.zshrc

# \u89E3\u51B3iterm2 \u4E2Dzsh \u6A21\u5F0F\u4E0D\u52A0\u8F7D ~/.bash_profile \u6587\u4EF6\u7F16\u5199\u7684\u73AF\u5883\u53D8\u91CF\uFF01
source $HOME/.bash_profile

source ~/.zshrc
</code></pre></div>`,15),c=[r];function t(s,i){return o(),a("div",null,c)}const m=n(e,[["render",t],["__file","02-mongodb.html.vue"]]);export{m as default};

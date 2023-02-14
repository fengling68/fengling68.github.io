import{_ as a,o as s,c as n,f as e}from"./app.b0016746.js";const t={},i=e(`<h1 id="github、gitee、coding同时配置ssh" tabindex="-1"><a class="header-anchor" href="#github、gitee、coding同时配置ssh" aria-hidden="true">#</a> github、gitee、coding同时配置ssh</h1><h2 id="创建-rsa-文件" tabindex="-1"><a class="header-anchor" href="#创建-rsa-文件" aria-hidden="true">#</a> 创建 rsa 文件</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.ssh

ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;xxx@xx.com&quot;</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;id_rsa_github&quot;</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;xxx@xx.com&quot;</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;id_rsa_gitee&quot;</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;xxx@xx.com&quot;</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;id_rsa_coding&quot;</span>

<span class="token builtin class-name">.</span>
├── config
├── id_rsa_coding
├── id_rsa_coding.pub
├── id_rsa_gitee
├── id_rsa_gitee.pub
├── id_rsa_github
└── id_rsa_github.pub
</code></pre></div><h2 id="添加-pub-内容到相应平台" tabindex="-1"><a class="header-anchor" href="#添加-pub-内容到相应平台" aria-hidden="true">#</a> 添加 .pub 内容到相应平台</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> id_rsa_github.pub
<span class="token function">cat</span> id_rsa_gitee.pub
<span class="token function">cat</span> id_rsa_coding.pub
</code></pre></div><h2 id="添加-config-文件解决冲突" tabindex="-1"><a class="header-anchor" href="#添加-config-文件解决冲突" aria-hidden="true">#</a> 添加 config 文件解决冲突</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># github</span>
Host github.com
HostName github.com
IdentityFile /Users/yourname/.ssh/id_rsa_github
PreferredAuthentications publickey

<span class="token comment"># gitee</span>
Host gitee.com
HostName gitee.com
IdentityFile /Users/yourname/.ssh/id_rsa_gitee
PreferredAuthentications publickey

<span class="token comment"># coding</span>
Host git.coding.net
HostName git.coding.net
IdentityFile /Users/yourname/.ssh/id_rsa_coding
PreferredAuthentications publickey
</code></pre></div><h2 id="测试连接" tabindex="-1"><a class="header-anchor" href="#测试连接" aria-hidden="true">#</a> 测试连接</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com
<span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@gitee.com
<span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@git.coding.net
</code></pre></div>`,9),r=[i];function c(o,p){return s(),n("div",null,r)}const l=a(t,[["render",c],["__file","github、gitee、coding 同时设置ssh.html.vue"]]);export{l as default};

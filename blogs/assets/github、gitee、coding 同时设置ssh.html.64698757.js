import{_ as a,o as s,c as n,f as e}from"./app.9f18a3e5.js";const t={},i=e(`<h1 id="github\u3001gitee\u3001coding\u540C\u65F6\u914D\u7F6Essh" tabindex="-1"><a class="header-anchor" href="#github\u3001gitee\u3001coding\u540C\u65F6\u914D\u7F6Essh" aria-hidden="true">#</a> github\u3001gitee\u3001coding\u540C\u65F6\u914D\u7F6Essh</h1><h2 id="\u521B\u5EFA-rsa-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-rsa-\u6587\u4EF6" aria-hidden="true">#</a> \u521B\u5EFA rsa \u6587\u4EF6</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.ssh

ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;xxx@xx.com&quot;</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;id_rsa_github&quot;</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;xxx@xx.com&quot;</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;id_rsa_gitee&quot;</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;xxx@xx.com&quot;</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;id_rsa_coding&quot;</span>

<span class="token builtin class-name">.</span>
\u251C\u2500\u2500 config
\u251C\u2500\u2500 id_rsa_coding
\u251C\u2500\u2500 id_rsa_coding.pub
\u251C\u2500\u2500 id_rsa_gitee
\u251C\u2500\u2500 id_rsa_gitee.pub
\u251C\u2500\u2500 id_rsa_github
\u2514\u2500\u2500 id_rsa_github.pub
</code></pre></div><h2 id="\u6DFB\u52A0-pub-\u5185\u5BB9\u5230\u76F8\u5E94\u5E73\u53F0" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0-pub-\u5185\u5BB9\u5230\u76F8\u5E94\u5E73\u53F0" aria-hidden="true">#</a> \u6DFB\u52A0 .pub \u5185\u5BB9\u5230\u76F8\u5E94\u5E73\u53F0</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> id_rsa_github.pub
<span class="token function">cat</span> id_rsa_gitee.pub
<span class="token function">cat</span> id_rsa_coding.pub
</code></pre></div><h2 id="\u6DFB\u52A0-config-\u6587\u4EF6\u89E3\u51B3\u51B2\u7A81" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0-config-\u6587\u4EF6\u89E3\u51B3\u51B2\u7A81" aria-hidden="true">#</a> \u6DFB\u52A0 config \u6587\u4EF6\u89E3\u51B3\u51B2\u7A81</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># github</span>
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
</code></pre></div><h2 id="_4\u3001\u6D4B\u8BD5\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u6D4B\u8BD5\u8FDE\u63A5" aria-hidden="true">#</a> 4\u3001\u6D4B\u8BD5\u8FDE\u63A5</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com
<span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@gitee.com
<span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@git.coding.net
</code></pre></div>`,9),r=[i];function c(o,p){return s(),n("div",null,r)}const l=a(t,[["render",c],["__file","github\u3001gitee\u3001coding \u540C\u65F6\u8BBE\u7F6Essh.html.vue"]]);export{l as default};

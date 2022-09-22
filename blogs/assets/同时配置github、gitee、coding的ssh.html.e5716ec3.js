import{_ as e,o as i,c as t,a as n}from"./app.ef351b53.js";const s={},a=n(`<h1 id="\u540C\u65F6\u914D\u7F6Egithub\u3001gitee\u3001coding\u7684ssh" tabindex="-1"><a class="header-anchor" href="#\u540C\u65F6\u914D\u7F6Egithub\u3001gitee\u3001coding\u7684ssh" aria-hidden="true">#</a> \u540C\u65F6\u914D\u7F6Egithub\u3001gitee\u3001coding\u7684ssh</h1><h2 id="_1\u3001\u521B\u5EFArsa\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u521B\u5EFArsa\u6587\u4EF6" aria-hidden="true">#</a> 1\u3001\u521B\u5EFArsa\u6587\u4EF6</h2><pre><code>cd ~/.ssh

ssh-keygen -t rsa -C &quot;xxx@xx.com&quot; -f &quot;id_rsa_github&quot;
ssh-keygen -t rsa -C &quot;xxx@xx.com&quot; -f &quot;id_rsa_gitee&quot;
ssh-keygen -t rsa -C &quot;xxx@xx.com&quot; -f &quot;id_rsa_coding&quot;

.
\u251C\u2500\u2500 config
\u251C\u2500\u2500 id_rsa_coding
\u251C\u2500\u2500 id_rsa_coding.pub
\u251C\u2500\u2500 id_rsa_gitee
\u251C\u2500\u2500 id_rsa_gitee.pub
\u251C\u2500\u2500 id_rsa_github
\u2514\u2500\u2500 id_rsa_github.pub
</code></pre><h2 id="_2\u3001\u6DFB\u52A0-pub\u5185\u5BB9\u5230\u76F8\u5E94\u5E73\u53F0" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u6DFB\u52A0-pub\u5185\u5BB9\u5230\u76F8\u5E94\u5E73\u53F0" aria-hidden="true">#</a> 2\u3001\u6DFB\u52A0.pub\u5185\u5BB9\u5230\u76F8\u5E94\u5E73\u53F0</h2><pre><code>cat id_rsa_github.pub
cat id_rsa_gitee.pub
cat id_rsa_coding.pub
</code></pre><h2 id="_3\u3001\u6DFB\u52A0config\u6587\u4EF6\u89E3\u51B3\u51B2\u7A81" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u6DFB\u52A0config\u6587\u4EF6\u89E3\u51B3\u51B2\u7A81" aria-hidden="true">#</a> 3\u3001\u6DFB\u52A0config\u6587\u4EF6\u89E3\u51B3\u51B2\u7A81</h2><pre><code># github
Host github.com
HostName github.com
IdentityFile /Users/yourname/.ssh/id_rsa_github
PreferredAuthentications publickey

# gitee
Host gitee.com
HostName gitee.com
IdentityFile /Users/yourname/.ssh/id_rsa_gitee
PreferredAuthentications publickey

# coding
Host git.coding.net
HostName git.coding.net
IdentityFile /Users/yourname/.ssh/id_rsa_coding
PreferredAuthentications publickey
</code></pre><h2 id="_4\u3001\u6D4B\u8BD5\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u6D4B\u8BD5\u8FDE\u63A5" aria-hidden="true">#</a> 4\u3001\u6D4B\u8BD5\u8FDE\u63A5</h2><pre><code>ssh -T git@github.com
ssh -T git@gitee.com
ssh -T git@git.coding.net
</code></pre>`,9),r=[a];function o(d,c){return i(),t("div",null,r)}const _=e(s,[["render",o],["__file","\u540C\u65F6\u914D\u7F6Egithub\u3001gitee\u3001coding\u7684ssh.html.vue"]]);export{_ as default};

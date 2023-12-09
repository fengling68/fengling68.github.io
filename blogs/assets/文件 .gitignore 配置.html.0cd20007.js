import{_ as n,r as t,o as s,c as o,a,b as i,d as c,f as r}from"./app.7092ccdd.js";const d={},l=r(`<h1 id="文件-gitignore-配置" tabindex="-1"><a class="header-anchor" href="#文件-gitignore-配置" aria-hidden="true">#</a> 文件 .gitignore 配置</h1><h2 id="规则优先级" tabindex="-1"><a class="header-anchor" href="#规则优先级" aria-hidden="true">#</a> 规则优先级</h2><p>命令行 &gt; 当前目录 &gt; 父级目录 &gt; ... &gt; $GIT_DIR/info/exclude &gt; core.excludesfile</p><h2 id="匹配规则" tabindex="-1"><a class="header-anchor" href="#匹配规则" aria-hidden="true">#</a> 匹配规则</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>空格  不匹配
#     文件注释
/     开始位置，只匹配文件夹以及该文件夹路径下的内容，不匹配该文件
/     结束位置，匹配项目跟目录
**    多级目录
?     单个字符
[]    单个字符列表
!     否定，再次包含
</code></pre></div><h2 id="忽略示例" tabindex="-1"><a class="header-anchor" href="#忽略示例" aria-hidden="true">#</a> 忽略示例</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>/bin            忽略根目录下的bin文件
/*.c            忽略cat.c，不忽略 build/cat.c
bin/            忽略当前路径下的bin文件夹及其子内容，不忽略bin文件
**/foo          忽略/foo, a/foo, a/b/foo等
a/**/b          忽略a/b, a/x/b, a/x/y/b等
*.log           忽略所有 .log 文件
config.php      忽略当前路径的 config.php 文件
debug/*.obj     忽略 debug/io.obj，不忽略 debug/common/io.obj 和 tools/debug/io.obj
!/bin/run.sh    不忽略 bin 目录下的 run.sh 文件
</code></pre></div><h2 id="gitignore-规则不生效" tabindex="-1"><a class="header-anchor" href="#gitignore-规则不生效" aria-hidden="true">#</a> .gitignore 规则不生效</h2><p>.gitignore只能忽略没有被track的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的，此时先把本地缓存删除(改变成未track状态)再提交。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;update .gitignore&#39;</span>
</code></pre></div>`,10),p={class:"custom-container tip"},g=a("p",{class:"custom-container-title"},"Tips",-1),h={href:"http://uusama.com/542.html",target:"_blank",rel:"noopener noreferrer"};function u(b,_){const e=t("ExternalLinkIcon");return s(),o("div",null,[l,a("div",p,[g,a("p",null,[a("a",h,[i("原文链接：http://uusama.com/542.html"),c(e)])])])])}const m=n(d,[["render",u],["__file","文件 .gitignore 配置.html.vue"]]);export{m as default};

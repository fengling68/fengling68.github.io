import{_ as n,r as t,o as s,c as o,a,b as i,d as c,f as r}from"./app.20c26ebb.js";const l={},d=r(`<h1 id="\u6587\u4EF6-gitignore-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6-gitignore-\u914D\u7F6E" aria-hidden="true">#</a> \u6587\u4EF6 .gitignore \u914D\u7F6E</h1><h2 id="\u89C4\u5219\u4F18\u5148\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u89C4\u5219\u4F18\u5148\u7EA7" aria-hidden="true">#</a> \u89C4\u5219\u4F18\u5148\u7EA7</h2><p>\u547D\u4EE4\u884C &gt; \u5F53\u524D\u76EE\u5F55 &gt; \u7236\u7EA7\u76EE\u5F55 &gt; ... &gt; $GIT_DIR/info/exclude &gt; core.excludesfile</p><h2 id="\u5339\u914D\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u5339\u914D\u89C4\u5219" aria-hidden="true">#</a> \u5339\u914D\u89C4\u5219</h2><div class="language-text ext-text"><pre class="language-text"><code>\u7A7A\u683C  \u4E0D\u5339\u914D
#     \u6587\u4EF6\u6CE8\u91CA
/     \u5F00\u59CB\u4F4D\u7F6E\uFF0C\u53EA\u5339\u914D\u6587\u4EF6\u5939\u4EE5\u53CA\u8BE5\u6587\u4EF6\u5939\u8DEF\u5F84\u4E0B\u7684\u5185\u5BB9\uFF0C\u4E0D\u5339\u914D\u8BE5\u6587\u4EF6
/     \u7ED3\u675F\u4F4D\u7F6E\uFF0C\u5339\u914D\u9879\u76EE\u8DDF\u76EE\u5F55
**    \u591A\u7EA7\u76EE\u5F55
?     \u5355\u4E2A\u5B57\u7B26
[]    \u5355\u4E2A\u5B57\u7B26\u5217\u8868
!     \u5426\u5B9A\uFF0C\u518D\u6B21\u5305\u542B
</code></pre></div><h2 id="\u5FFD\u7565\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5FFD\u7565\u793A\u4F8B" aria-hidden="true">#</a> \u5FFD\u7565\u793A\u4F8B</h2><div class="language-text ext-text"><pre class="language-text"><code>/bin            \u5FFD\u7565\u6839\u76EE\u5F55\u4E0B\u7684bin\u6587\u4EF6
/*.c            \u5FFD\u7565cat.c\uFF0C\u4E0D\u5FFD\u7565 build/cat.c
bin/            \u5FFD\u7565\u5F53\u524D\u8DEF\u5F84\u4E0B\u7684bin\u6587\u4EF6\u5939\u53CA\u5176\u5B50\u5185\u5BB9\uFF0C\u4E0D\u5FFD\u7565bin\u6587\u4EF6
**/foo          \u5FFD\u7565/foo, a/foo, a/b/foo\u7B49
a/**/b          \u5FFD\u7565a/b, a/x/b, a/x/y/b\u7B49
*.log           \u5FFD\u7565\u6240\u6709 .log \u6587\u4EF6
config.php      \u5FFD\u7565\u5F53\u524D\u8DEF\u5F84\u7684 config.php \u6587\u4EF6
debug/*.obj     \u5FFD\u7565 debug/io.obj\uFF0C\u4E0D\u5FFD\u7565 debug/common/io.obj \u548C tools/debug/io.obj
!/bin/run.sh    \u4E0D\u5FFD\u7565 bin \u76EE\u5F55\u4E0B\u7684 run.sh \u6587\u4EF6
</code></pre></div><h2 id="gitignore-\u89C4\u5219\u4E0D\u751F\u6548" tabindex="-1"><a class="header-anchor" href="#gitignore-\u89C4\u5219\u4E0D\u751F\u6548" aria-hidden="true">#</a> .gitignore \u89C4\u5219\u4E0D\u751F\u6548</h2><p>.gitignore\u53EA\u80FD\u5FFD\u7565\u6CA1\u6709\u88ABtrack\u7684\u6587\u4EF6\uFF0C\u5982\u679C\u67D0\u4E9B\u6587\u4EF6\u5DF2\u7ECF\u88AB\u7EB3\u5165\u4E86\u7248\u672C\u7BA1\u7406\u4E2D\uFF0C\u5219\u4FEE\u6539.gitignore\u662F\u65E0\u6548\u7684\uFF0C\u6B64\u65F6\u5148\u628A\u672C\u5730\u7F13\u5B58\u5220\u9664(\u6539\u53D8\u6210\u672Atrack\u72B6\u6001)\u518D\u63D0\u4EA4\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;update .gitignore&#39;</span>
</code></pre></div>`,10),p={class:"custom-container tip"},g=a("p",{class:"custom-container-title"},"Tips",-1),h={href:"http://uusama.com/542.html",target:"_blank",rel:"noopener noreferrer"};function u(b,_){const e=t("ExternalLinkIcon");return s(),o("div",null,[d,a("div",p,[g,a("p",null,[a("a",h,[i("\u539F\u6587\u94FE\u63A5\uFF1Ahttp://uusama.com/542.html"),c(e)])])])])}const m=n(l,[["render",u],["__file","\u6587\u4EF6 .gitignore \u914D\u7F6E.html.vue"]]);export{m as default};

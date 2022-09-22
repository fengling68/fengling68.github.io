import{_ as a,o as n,c as s,a as e}from"./app.ef351b53.js";const t={},c=e(`<h1 id="mac\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#mac\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> mac\u5E38\u7528\u547D\u4EE4</h1><h2 id="mac-\u9690\u85CF\u7EC8\u7AEF\u524D\u7684\u8BA1\u7B97\u673A\u540D" tabindex="-1"><a class="header-anchor" href="#mac-\u9690\u85CF\u7EC8\u7AEF\u524D\u7684\u8BA1\u7B97\u673A\u540D" aria-hidden="true">#</a> mac \u9690\u85CF\u7EC8\u7AEF\u524D\u7684\u8BA1\u7B97\u673A\u540D</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/bashrc

<span class="token comment"># \u6CE8\u91CA</span>
<span class="token comment"># PS1=&#39;\\h:\\W \\u\\$ &#39;</span>
<span class="token comment"># \u6DFB\u52A0</span>
<span class="token assign-left variable"><span class="token environment constant">PS1</span></span><span class="token operator">=</span><span class="token string">&#39;\\W \\u\\$ &#39;</span>

<span class="token comment"># \u91CD\u542F\u7EC8\u7AEF</span>
</code></pre></div><h2 id="mac-\u5B89\u88C5\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#mac-\u5B89\u88C5\u8F6F\u4EF6" aria-hidden="true">#</a> mac \u5B89\u88C5\u8F6F\u4EF6</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u4E00\u822C\u89E3\u51B3\u65B9\u6CD5\uFF0C\u7EC8\u7AEF\u6267\u884C\u547D\u4EE4\uFF0C\u67E5\u770B\u5B89\u5168\u6027\u4E0E\u9690\u79C1\u662F\u5426\u6210\u529F\u8BBE\u7F6E\u4EFB\u4F55\u6765\u6E90</span>
<span class="token function">sudo</span> spctl --master-disable

<span class="token comment"># macOS 10.15 Catalina \u4FEE\u590D\u65B9\u6CD5\uFF0C\u90E8\u5206\u5E94\u7528\u540D\u6709\u7A7A\u683C\uFF0C\u8DEF\u5F84\u5904\u5EFA\u8BAE\u76F4\u63A5\u62D6\u62FD</span>
<span class="token function">sudo</span> xattr <span class="token parameter variable">-d</span> com.apple.quarantine /Applications/appname.app
</code></pre></div><h2 id="mac-\u67E5\u770B\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#mac-\u67E5\u770B\u7F13\u5B58" aria-hidden="true">#</a> mac \u67E5\u770B\u7F13\u5B58</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># root \u6743\u9650\u67E5\u770B</span>
<span class="token function">sudo</span> <span class="token function">du</span> <span class="token parameter variable">-sh</span> /System/Library/Caches/com.apple.coresymbolicationd
</code></pre></div><h2 id="mac-\u901A\u8FC7\u57DF\u540D\u67E5\u770B-ip-\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#mac-\u901A\u8FC7\u57DF\u540D\u67E5\u770B-ip-\u5730\u5740" aria-hidden="true">#</a> mac \u901A\u8FC7\u57DF\u540D\u67E5\u770B IP \u5730\u5740</h2><div class="language-text ext-text"><pre class="language-text"><code>1\u3001Mac \u81EA\u5E26\u201C\u7F51\u7EDC\u5B9E\u7528\u5DE5\u5177\u201D \u2014\u2014&gt; Lookup \u2014\u2014&gt; \u8F93\u5165\u7F51\u5740
2\u3001Mac \u7EC8\u7AEF \u2014\u2014&gt; \u547D\u4EE4\uFF1Anslookup www.baidu.com
</code></pre></div><h2 id="mac-\u4E2D-chrome-\u63D2\u4EF6\u5B58\u653E\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#mac-\u4E2D-chrome-\u63D2\u4EF6\u5B58\u653E\u4F4D\u7F6E" aria-hidden="true">#</a> mac \u4E2D Chrome \u63D2\u4EF6\u5B58\u653E\u4F4D\u7F6E</h2><div class="language-text ext-text"><pre class="language-text"><code>~/Library/Application Support/Google/Chrome/Default/Extensions

~/Library/Application Support/Google/Chrome/Profile 3/Extensions
</code></pre></div><h2 id="weixin-\u5907\u4EFD\u6587\u4EF6\u5728-mac-\u4E2D\u7684\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#weixin-\u5907\u4EFD\u6587\u4EF6\u5728-mac-\u4E2D\u7684\u4F4D\u7F6E" aria-hidden="true">#</a> weixin \u5907\u4EFD\u6587\u4EF6\u5728 mac \u4E2D\u7684\u4F4D\u7F6E</h2><div class="language-text ext-text"><pre class="language-text"><code># \u8FDB\u5165\u76EE\u5F55 -&gt; \u7248\u672C\u53F7 -&gt; \u5907\u4EFD
~/library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/
</code></pre></div><h2 id="tree-\u67E5\u770B\u76EE\u5F55\u6811" tabindex="-1"><a class="header-anchor" href="#tree-\u67E5\u770B\u76EE\u5F55\u6811" aria-hidden="true">#</a> tree \u67E5\u770B\u76EE\u5F55\u6811</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5 Homebrew</span>
/bin/bash <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh<span class="token variable">)</span></span>&quot;</span>

<span class="token comment"># \u5B89\u88C5tree</span>
brew <span class="token function">install</span> tree

<span class="token comment"># \u53C2\u6570 -a \u5217\u51FA\u6240\u6709\u6587\u4EF6\uFF0C\u5305\u62EC . \u6587\u4EF6\u5939</span>
<span class="token comment"># \u53C2\u6570 -h \u5217\u51FA\u6587\u4EF6\u5927\u5C0F</span>
tree <span class="token parameter variable">-a</span> <span class="token parameter variable">-h</span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>.
\u251C\u2500\u2500 [6.0K]  .DS_Store
\u251C\u2500\u2500 [ 128]  font
\u2502   \u251C\u2500\u2500 [  96]  .font-spider
\u2502   \u2502   \u2514\u2500\u2500 [4.8M]  font.ttf
\u2502   \u2514\u2500\u2500 [8.2K]  font.ttf
\u2514\u2500\u2500 [ 547]  index.html
</code></pre></div><h2 id="mysql-\u66F4\u65B0\u7528\u6237\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#mysql-\u66F4\u65B0\u7528\u6237\u5BC6\u7801" aria-hidden="true">#</a> mysql \u66F4\u65B0\u7528\u6237\u5BC6\u7801</h2><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">USER</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;localhost&#39;</span> IDENTIFIED <span class="token keyword">WITH</span> mysql_native_password <span class="token keyword">BY</span> <span class="token string">&#39;password&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,18),o=[c];function r(p,l){return n(),s("div",null,o)}const d=a(t,[["render",r],["__file","\u5E38\u7528\u547D\u4EE4.html.vue"]]);export{d as default};

import{_ as n,o as s,c as a,f as t}from"./app.a71a0ebc.js";const p={},o=t(`<h1 id="electron-vue-\u5165\u95E8" tabindex="-1"><a class="header-anchor" href="#electron-vue-\u5165\u95E8" aria-hidden="true">#</a> electron-vue \u5165\u95E8</h1><h2 id="\u5B89\u88C5\u548C\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u548C\u542F\u52A8" aria-hidden="true">#</a> \u5B89\u88C5\u548C\u542F\u52A8</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5 vue-cli\u548C\u811A\u624B\u67B6\u6837\u677F\u4EE3\u7801</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> vue-cli
vue init simulatedgreg/electron-vue electronDemo

<span class="token comment"># \u5B89\u88C5\u4F9D\u8D56\u5E76\u8FD0\u884C\u4F60\u7684\u7A0B\u5E8F</span>
<span class="token builtin class-name">cd</span> electronDemo
<span class="token function">npm</span> <span class="token function">install</span>  <span class="token comment"># \u6216\u8005yarn</span>
<span class="token function">npm</span> run dev  <span class="token comment"># \u6216\u8005yarn run dev</span>
</code></pre></div><h2 id="\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305" aria-hidden="true">#</a> \u6253\u5305</h2><p>\u6253\u5305\u6587\u4EF6\u5728build\u76EE\u5F55\u4E0B</p><p>(1)\u4F7F\u7528electron-packager\u6253\u5305</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u9488\u5BF9\u6240\u6709\u6216\u5404\u5E73\u53F0\u6253\u5305</span>
all  \uFF1Anpm run build
macOS\uFF1Anpm run build:darwin
mas  \uFF1Anpm run build:mas
linux\uFF1Anpm run build:linux
win32\uFF1Anpm run build:win32
web  \uFF1Anpm run build:web

<span class="token comment"># \u6E05\u9664build\u76EE\u5F55\u4E0B\u7684\u6253\u5305\u6587\u4EF6</span>
<span class="token function">npm</span> run build:clean
</code></pre></div><p>(2)\u4F7F\u7528electron-builder\u6253\u5305</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u9488\u5BF9\u6240\u6709\u5E73\u53F0\u6253\u5305</span>
<span class="token function">npm</span> run build
<span class="token comment"># \u751F\u6210\u7B80\u5355\u7684\u53EF\u6267\u884C\u6587\u4EF6</span>
<span class="token function">npm</span> run build:dir
<span class="token comment"># \u751F\u6210\u53EF\u5728\u6D4F\u89C8\u5668\u8FD0\u884C\u7684web\u5E94\u7528</span>
<span class="token function">npm</span> run build:web

<span class="token comment"># \u6E05\u9664build\u76EE\u5F55\u4E0B\u7684\u6253\u5305\u6587\u4EF6</span>
<span class="token function">npm</span> run build:clean
</code></pre></div><h2 id="\u5F00\u53D1\u51FA\u73B0\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u51FA\u73B0\u7684\u95EE\u9898" aria-hidden="true">#</a> \u5F00\u53D1\u51FA\u73B0\u7684\u95EE\u9898</h2><div class="language-text ext-text"><pre class="language-text"><code>\u5728electron-vue\u4E2D\u4F7F\u7528vuex\uFF0C\u65E0\u6CD5\u6539\u53D8vuex\u72B6\u6001
\u89E3\u51B3\uFF1A\u5728src/main/index.js\u4E3B\u8FDB\u7A0B\u52A0\u4E0A\uFF1Aimport &#39;../renderer/store&#39;;

\u8BBE\u7F6E\u8DE8\u57DF
\u89E3\u51B3\uFF1A\u5728\u5728src/main/index.js\u4E3B\u8FDB\u7A0Bnew BrowserWindow\u5185\u52A0\u4E0A
webPreferences: {
  webSecurity: false,
},

\u6DFB\u52A0\u901A\u77E5
new Notification(&#39;\u6DFB\u52A0\u6210\u529F&#39;);

\u5176\u4ED6
vue\u4E2D\u4F7F\u7528 \`&lt;webview&gt;\` \u6807\u7B7E\u6253\u5F00\u4E00\u4E2Aurl
\u5EFA\u7ACB\u4E3B\u7A97\u53E3\uFF1Anew BrowserWindow
\u5728\u7236\u4E3B(\u7236)\u7A97\u53E3\u4E2D\u521B\u5EFA\u5B50\u7A97\u53E3\uFF1Anew BrowserView 
</code></pre></div><h2 id="main-\u8FDB\u7A0B\u548C-web-\u8FDB\u7A0B\u7684\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#main-\u8FDB\u7A0B\u548C-web-\u8FDB\u7A0B\u7684\u901A\u4FE1" aria-hidden="true">#</a> main \u8FDB\u7A0B\u548C web \u8FDB\u7A0B\u7684\u901A\u4FE1</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/********** main ***********/</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ipcMain <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;electron&#39;</span>

<span class="token comment">// \u63A5\u6536web\u53D1\u9001\u7684\u4FE1\u606F</span>
ipcMain<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;web-send-message-to-main&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> arg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">mian-accept: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>arg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5411web\u53D1\u9001\u4FE1\u606F</span>
  event<span class="token punctuation">.</span>sender<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;main-send-message-to-web&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;main-to-web&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/********** web\uFF08.vue\uFF09 ***********/</span>
<span class="token comment">// import electron from &#39;electron&#39;;</span>
<span class="token comment">// const { ipcRenderer } = electron;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ipcRenderer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;electron&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u63A5\u6536main\u53D1\u9001\u7684\u4FE1\u606F</span>
ipcRenderer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;main-send-message-to-web&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> arg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">web-accept: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>arg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5411main\u53D1\u9001\u4FE1\u606F</span>
ipcRenderer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;web-send-message-to-main&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;web-to-main&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ipcRenderer.sendSync(&#39;web-send-message-to-main&#39;, &#39;web-to-main&#39;);</span>
</code></pre></div><h2 id="dialog-\u5BF9\u8BDD\u6846" tabindex="-1"><a class="header-anchor" href="#dialog-\u5BF9\u8BDD\u6846" aria-hidden="true">#</a> dialog \u5BF9\u8BDD\u6846</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5728main\u4E2D\u5F15\u5165</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> dialog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;electron&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u5728vue\u7EC4\u4EF6\u4E2D\u5F15\u5165</span>
<span class="token comment">// eslint\u914D\u7F6E &#39;import/no-extraneous-dependencies&#39;: 0,</span>
<span class="token keyword">import</span> electron <span class="token keyword">from</span> <span class="token string">&#39;electron&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> dialog <span class="token punctuation">}</span> <span class="token operator">=</span> electron<span class="token punctuation">.</span>remote<span class="token punctuation">;</span>

<span class="token comment">// \u6253\u5F00\u5BF9\u8BDD\u6846</span>
dialog<span class="token punctuation">.</span><span class="token function">showOpenDialog</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u6253\u5F00\u6587\u4EF6&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u6253\u5361\u6253\u5F00\u6253\u5F00&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Images&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;jpg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;png&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;gif&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Movies&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;mkv&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;avi&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mp4&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Custom File Type&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;as&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;All Files&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">openFile</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">filePaths</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>filePaths<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u4FDD\u5B58\u5BF9\u8BDD\u6846</span>
dialog<span class="token punctuation">.</span><span class="token function">showSaveDialog</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">filename</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6D88\u606F\u5BF9\u8BDD\u6846</span>
dialog<span class="token punctuation">.</span><span class="token function">showMessageBox</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u4FE1\u606F\u5BF9\u8BDD\u6846&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u5317\u65B9\u6709\u4F73\u4EBA\uFF0C\u7EDD\u4E16\u800C\u72EC\u7ACB\u3002&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">detail</span><span class="token operator">:</span> <span class="token string">&#39;\u8FD9\u662F\u4E00\u9996\u8457\u540D\u7684\u8BD7&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">,</span> <span class="token comment">// &quot;none&quot;, &quot;info&quot;, &quot;error&quot;, &quot;question&quot;, &quot;warning&quot;</span>
  <span class="token literal-property property">buttons</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;\u786E\u8BA4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u53D6\u6D88&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">resIndex</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>resIndex <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u70B9\u51FB\u4E86\u786E\u8BA4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>resIndex <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u70B9\u51FB\u4E86\u53D6\u6D88&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u9519\u8BEF\u5F39\u7A97</span>
dialog<span class="token punctuation">.</span><span class="token function">showErrorBox</span><span class="token punctuation">(</span><span class="token string">&#39;\u9519\u8BEF\u5F39\u7A97&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u8FD9\u662F\u4E00\u4E2A\u9519\u8BEF\u5F39\u7A97&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,15),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","\u5E94\u7528\u5F00\u53D1\uFF5Celectron-vue \u5165\u95E8.html.vue"]]);export{r as default};

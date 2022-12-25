import{_ as n,o as s,c as a,f as t}from"./app.8609dc96.js";const p={},o=t(`<h1 id="electron-vue-入门" tabindex="-1"><a class="header-anchor" href="#electron-vue-入门" aria-hidden="true">#</a> electron-vue 入门</h1><h2 id="安装和启动" tabindex="-1"><a class="header-anchor" href="#安装和启动" aria-hidden="true">#</a> 安装和启动</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 vue-cli和脚手架样板代码</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> vue-cli
vue init simulatedgreg/electron-vue electronDemo

<span class="token comment"># 安装依赖并运行你的程序</span>
<span class="token builtin class-name">cd</span> electronDemo
<span class="token function">npm</span> <span class="token function">install</span>  <span class="token comment"># 或者yarn</span>
<span class="token function">npm</span> run dev  <span class="token comment"># 或者yarn run dev</span>
</code></pre></div><h2 id="打包" tabindex="-1"><a class="header-anchor" href="#打包" aria-hidden="true">#</a> 打包</h2><p>打包文件在build目录下</p><p>(1)使用electron-packager打包</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 针对所有或各平台打包</span>
all  ：npm run build
macOS：npm run build:darwin
mas  ：npm run build:mas
linux：npm run build:linux
win32：npm run build:win32
web  ：npm run build:web

<span class="token comment"># 清除build目录下的打包文件</span>
<span class="token function">npm</span> run build:clean
</code></pre></div><p>(2)使用electron-builder打包</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 针对所有平台打包</span>
<span class="token function">npm</span> run build
<span class="token comment"># 生成简单的可执行文件</span>
<span class="token function">npm</span> run build:dir
<span class="token comment"># 生成可在浏览器运行的web应用</span>
<span class="token function">npm</span> run build:web

<span class="token comment"># 清除build目录下的打包文件</span>
<span class="token function">npm</span> run build:clean
</code></pre></div><h2 id="开发出现的问题" tabindex="-1"><a class="header-anchor" href="#开发出现的问题" aria-hidden="true">#</a> 开发出现的问题</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>在electron-vue中使用vuex，无法改变vuex状态
解决：在src/main/index.js主进程加上：import &#39;../renderer/store&#39;;

设置跨域
解决：在在src/main/index.js主进程new BrowserWindow内加上
webPreferences: {
  webSecurity: false,
},

添加通知
new Notification(&#39;添加成功&#39;);

其他
vue中使用 \`&lt;webview&gt;\` 标签打开一个url
建立主窗口：new BrowserWindow
在父主(父)窗口中创建子窗口：new BrowserView 
</code></pre></div><h2 id="main-进程和-web-进程的通信" tabindex="-1"><a class="header-anchor" href="#main-进程和-web-进程的通信" aria-hidden="true">#</a> main 进程和 web 进程的通信</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/********** main ***********/</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ipcMain <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;electron&#39;</span>

<span class="token comment">// 接收web发送的信息</span>
ipcMain<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;web-send-message-to-main&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> arg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">mian-accept: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>arg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 向web发送信息</span>
  event<span class="token punctuation">.</span>sender<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;main-send-message-to-web&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;main-to-web&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/********** web（.vue） ***********/</span>
<span class="token comment">// import electron from &#39;electron&#39;;</span>
<span class="token comment">// const { ipcRenderer } = electron;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ipcRenderer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;electron&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 接收main发送的信息</span>
ipcRenderer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;main-send-message-to-web&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> arg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">web-accept: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>arg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 向main发送信息</span>
ipcRenderer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;web-send-message-to-main&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;web-to-main&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ipcRenderer.sendSync(&#39;web-send-message-to-main&#39;, &#39;web-to-main&#39;);</span>
</code></pre></div><h2 id="dialog-对话框" tabindex="-1"><a class="header-anchor" href="#dialog-对话框" aria-hidden="true">#</a> dialog 对话框</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在main中引入</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> dialog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;electron&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 在vue组件中引入</span>
<span class="token comment">// eslint配置 &#39;import/no-extraneous-dependencies&#39;: 0,</span>
<span class="token keyword">import</span> electron <span class="token keyword">from</span> <span class="token string">&#39;electron&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> dialog <span class="token punctuation">}</span> <span class="token operator">=</span> electron<span class="token punctuation">.</span>remote<span class="token punctuation">;</span>

<span class="token comment">// 打开对话框</span>
dialog<span class="token punctuation">.</span><span class="token function">showOpenDialog</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;打开文件&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;打卡打开打开&#39;</span><span class="token punctuation">,</span>
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

<span class="token comment">// 保存对话框</span>
dialog<span class="token punctuation">.</span><span class="token function">showSaveDialog</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">filename</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 消息对话框</span>
dialog<span class="token punctuation">.</span><span class="token function">showMessageBox</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;信息对话框&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;北方有佳人，绝世而独立。&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">detail</span><span class="token operator">:</span> <span class="token string">&#39;这是一首著名的诗&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">,</span> <span class="token comment">// &quot;none&quot;, &quot;info&quot;, &quot;error&quot;, &quot;question&quot;, &quot;warning&quot;</span>
  <span class="token literal-property property">buttons</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;确认&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;取消&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">resIndex</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>resIndex <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;点击了确认&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>resIndex <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;点击了取消&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 错误弹窗</span>
dialog<span class="token punctuation">.</span><span class="token function">showErrorBox</span><span class="token punctuation">(</span><span class="token string">&#39;错误弹窗&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;这是一个错误弹窗&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,15),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","应用开发｜electron-vue 入门.html.vue"]]);export{r as default};

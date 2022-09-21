import{_ as e,o as n,c as o,a as r}from"./app.ae676a5c.js";const i={},a=r(`<h1 id="electron-vue\u5165\u95E8" tabindex="-1"><a class="header-anchor" href="#electron-vue\u5165\u95E8" aria-hidden="true">#</a> electron-vue\u5165\u95E8</h1><h2 id="\u4E00\u3001\u5B89\u88C5\u548C\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5B89\u88C5\u548C\u542F\u52A8" aria-hidden="true">#</a> \u4E00\u3001\u5B89\u88C5\u548C\u542F\u52A8</h2><pre><code># \u5B89\u88C5 vue-cli\u548C\u811A\u624B\u67B6\u6837\u677F\u4EE3\u7801
npm install -g vue-cli
vue init simulatedgreg/electron-vue electronDemo

# \u5B89\u88C5\u4F9D\u8D56\u5E76\u8FD0\u884C\u4F60\u7684\u7A0B\u5E8F
cd electronDemo
npm install  # \u6216\u8005yarn
npm run dev  # \u6216\u8005yarn run dev
</code></pre><h2 id="\u4E8C\u3001\u6253\u5305-\u6253\u5305\u6587\u4EF6\u5728build\u76EE\u5F55\u4E0B" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u6253\u5305-\u6253\u5305\u6587\u4EF6\u5728build\u76EE\u5F55\u4E0B" aria-hidden="true">#</a> \u4E8C\u3001\u6253\u5305\uFF08\u6253\u5305\u6587\u4EF6\u5728build\u76EE\u5F55\u4E0B\uFF09</h2><blockquote><p>(1)\u4F7F\u7528electron-packager\u6253\u5305</p></blockquote><pre><code># \u9488\u5BF9\u6240\u6709\u6216\u5404\u5E73\u53F0\u6253\u5305
all  \uFF1Anpm run build
macOS\uFF1Anpm run build:darwin
mas  \uFF1Anpm run build:mas
linux\uFF1Anpm run build:linux
win32\uFF1Anpm run build:win32
web  \uFF1Anpm run build:web

# \u6E05\u9664build\u76EE\u5F55\u4E0B\u7684\u6253\u5305\u6587\u4EF6
npm run build:clean
</code></pre><blockquote><p>(2)\u4F7F\u7528electron-builder\u6253\u5305</p></blockquote><pre><code># \u9488\u5BF9\u6240\u6709\u5E73\u53F0\u6253\u5305
npm run build
# \u751F\u6210\u7B80\u5355\u7684\u53EF\u6267\u884C\u6587\u4EF6
npm run build:dir
# \u751F\u6210\u53EF\u5728\u6D4F\u89C8\u5668\u8FD0\u884C\u7684web\u5E94\u7528
npm run build:web

# \u6E05\u9664build\u76EE\u5F55\u4E0B\u7684\u6253\u5305\u6587\u4EF6
npm run build:clean
</code></pre><h2 id="\u4E09\u3001\u5F00\u53D1\u51FA\u73B0\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5F00\u53D1\u51FA\u73B0\u7684\u95EE\u9898" aria-hidden="true">#</a> \u4E09\u3001\u5F00\u53D1\u51FA\u73B0\u7684\u95EE\u9898</h2><pre><code>0\u3001\u5176\u4ED6
    (1)vue\u4E2D\u4F7F\u7528&lt;webview&gt;\u6807\u7B7E\u6253\u5F00\u4E00\u4E2Aurl
    (2)\u5EFA\u7ACB\u4E3B\u7A97\u53E3\uFF1Anew BrowserWindow
    (3)\u5728\u7236\u4E3B(\u7236)\u7A97\u53E3\u4E2D\u521B\u5EFA\u5B50\u7A97\u53E3\uFF1Anew BrowserView 
    
1\u3001\u5728electron-vue\u4E2D\u4F7F\u7528vuex\uFF0C\u65E0\u6CD5\u6539\u53D8vuex\u72B6\u6001
    \u89E3\u51B3\uFF1A\u5728src/main/index.js\u4E3B\u8FDB\u7A0B\u52A0\u4E0A\uFF1Aimport &#39;../renderer/store&#39;;

2\u3001\u8BBE\u7F6E\u8DE8\u57DF
    \u89E3\u51B3\uFF1A\u5728\u5728src/main/index.js\u4E3B\u8FDB\u7A0Bnew BrowserWindow\u5185\u52A0\u4E0A
    webPreferences: {
      webSecurity: false,
    },
    
3\u3001\u6DFB\u52A0\u901A\u77E5
    new Notification(&#39;\u6DFB\u52A0\u6210\u529F&#39;);
</code></pre><h2 id="\u56DB\u3001main\u8FDB\u7A0B\u548Cweb\u8FDB\u7A0B\u7684\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001main\u8FDB\u7A0B\u548Cweb\u8FDB\u7A0B\u7684\u901A\u4FE1" aria-hidden="true">#</a> \u56DB\u3001main\u8FDB\u7A0B\u548Cweb\u8FDB\u7A0B\u7684\u901A\u4FE1</h2><pre><code>/********** main ***********/
import { ipcMain } from &#39;electron&#39;

// \u63A5\u6536web\u53D1\u9001\u7684\u4FE1\u606F
ipcMain.on(&#39;web-send-message-to-main&#39;, (event, arg) =&gt; {
  console.log(\`mian-accept: \${arg}\`);
  // \u5411web\u53D1\u9001\u4FE1\u606F
  event.sender.send(&#39;main-send-message-to-web&#39;, &#39;main-to-web&#39;);
});

/********** web\uFF08.vue\uFF09 ***********/
// import electron from &#39;electron&#39;;
// const { ipcRenderer } = electron;
import { ipcRenderer } from &#39;electron&#39;;

// \u63A5\u6536main\u53D1\u9001\u7684\u4FE1\u606F
ipcRenderer.on(&#39;main-send-message-to-web&#39;, (event, arg) =&gt; {
  console.log(\`web-accept: \${arg}\`);
});

// \u5411main\u53D1\u9001\u4FE1\u606F
ipcRenderer.send(&#39;web-send-message-to-main&#39;, &#39;web-to-main&#39;);
// ipcRenderer.sendSync(&#39;web-send-message-to-main&#39;, &#39;web-to-main&#39;);
</code></pre><h2 id="\u4E94\uFE0F\u3001dialog\u5BF9\u8BDD\u6846" tabindex="-1"><a class="header-anchor" href="#\u4E94\uFE0F\u3001dialog\u5BF9\u8BDD\u6846" aria-hidden="true">#</a> \u4E94\uFE0F\u3001dialog\u5BF9\u8BDD\u6846</h2><pre><code>// \u5728main\u4E2D\u5F15\u5165
import { dialog } from &#39;electron&#39;;

// \u5728vue\u7EC4\u4EF6\u4E2D\u5F15\u5165
// eslint\u914D\u7F6E &#39;import/no-extraneous-dependencies&#39;: 0,
import electron from &#39;electron&#39;;
const { dialog } = electron.remote;

// \u6253\u5F00\u5BF9\u8BDD\u6846
dialog.showOpenDialog([{
  title: &#39;\u6253\u5F00\u6587\u4EF6&#39;,
  message: &#39;\u6253\u5361\u6253\u5F00\u6253\u5F00&#39;,
  filters: [
    { name: &#39;Images&#39;, extensions: [&#39;jpg&#39;, &#39;png&#39;, &#39;gif&#39;] },
    { name: &#39;Movies&#39;, extensions: [&#39;mkv&#39;, &#39;avi&#39;, &#39;mp4&#39;] },
    { name: &#39;Custom File Type&#39;, extensions: [&#39;as&#39;] },
    { name: &#39;All Files&#39;, extensions: [&#39;*&#39;] },
  ],
  properties: {
    openFile: true,
    // ...
  },
}], (filePaths) =&gt; {
  console.log(filePaths);
});

// \u4FDD\u5B58\u5BF9\u8BDD\u6846
dialog.showSaveDialog((filename) =&gt; {
  console.log(filename);
});

// \u6D88\u606F\u5BF9\u8BDD\u6846
dialog.showMessageBox({
  title: &#39;\u4FE1\u606F\u5BF9\u8BDD\u6846&#39;,
  message: &#39;\u5317\u65B9\u6709\u4F73\u4EBA\uFF0C\u7EDD\u4E16\u800C\u72EC\u7ACB\u3002&#39;,
  detail: &#39;\u8FD9\u662F\u4E00\u9996\u8457\u540D\u7684\u8BD7&#39;,
  type: &#39;info&#39;, // &quot;none&quot;, &quot;info&quot;, &quot;error&quot;, &quot;question&quot;, &quot;warning&quot;
  buttons: [&#39;\u786E\u8BA4&#39;, &#39;\u53D6\u6D88&#39;],
}, (resIndex) =&gt; {
  if (resIndex === 0) {
    console.log(&#39;\u70B9\u51FB\u4E86\u786E\u8BA4&#39;);
  } else if (resIndex === 1) {
    console.log(&#39;\u70B9\u51FB\u4E86\u53D6\u6D88&#39;);
  }
});

// \u9519\u8BEF\u5F39\u7A97
dialog.showErrorBox(&#39;\u9519\u8BEF\u5F39\u7A97&#39;, &#39;\u8FD9\u662F\u4E00\u4E2A\u9519\u8BEF\u5F39\u7A97&#39;);
</code></pre>`,14),t=[a];function l(d,s){return n(),o("div",null,t)}const u=e(i,[["render",l],["__file","04-electron-vue\u5165\u95E8.html.vue"]]);export{u as default};

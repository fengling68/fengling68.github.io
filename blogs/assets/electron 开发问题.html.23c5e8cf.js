import{_ as t,r as o,o as c,c as r,a as n,b as a,d as s,f as p}from"./app.3f8066ad.js";const l={},i=p(`<h1 id="electron-开发问题" tabindex="-1"><a class="header-anchor" href="#electron-开发问题" aria-hidden="true">#</a> electron 开发问题</h1><h2 id="electron-element-ui表格渲染失败" tabindex="-1"><a class="header-anchor" href="#electron-element-ui表格渲染失败" aria-hidden="true">#</a> electron: element-ui表格渲染失败</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> originHref <span class="token operator">=</span> <span class="token string">&quot;原文链接: https://blog.csdn.net/qq_17285877/article/details/96095936#_6&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> reason <span class="token operator">=</span> <span class="token string">&quot;外部组件或者提供原始 *.vue 的 UI 库，应该加入到白名单，以使 vue-loader 能编译它们。&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> solve <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">step1</span><span class="token operator">:</span> <span class="token string">&quot;打开 .electron-vue 目录下的 webpack.renderer.config.js 文件&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">step2</span><span class="token operator">:</span> <span class="token string">&quot;搜索 whiteListedModules&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">step3</span><span class="token operator">:</span> <span class="token string">&quot;将 element-ui 加入白名单：let whiteListedModules = [&#39;vue&#39;, &#39;element-ui&#39;];&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="electron-提示electron安装错误" tabindex="-1"><a class="header-anchor" href="#electron-提示electron安装错误" aria-hidden="true">#</a> electron: 提示electron安装错误</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 先删除 node_modules 里的 electron 包</span>

<span class="token comment"># 设置淘宝镜像安装依赖</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> nrm
nrm use taobao

<span class="token comment"># 设置环境变量</span>
<span class="token assign-left variable">ELECTRON_MIRROR</span><span class="token operator">=</span>http://npm.taobao.org/mirrors/electron/ <span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment"># 重新安装依赖</span>
<span class="token function">npm</span> i
</code></pre></div><h2 id="electron-builder-打包报错" tabindex="-1"><a class="header-anchor" href="#electron-builder-打包报错" aria-hidden="true">#</a> electron-builder: 打包报错</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 报错信息：</span>
exited with code ERR_ELECTRON_BUILDER_CANNOT_EXECUTE

<span class="token comment"># 解决方案：</span>
<span class="token builtin class-name">set</span> <span class="token assign-left variable">ELECTRON_MIRROR</span><span class="token operator">=</span>http://npm.taobao.org/mirrors/electron/
<span class="token builtin class-name">set</span> <span class="token assign-left variable">SELENIUM_CDNURL</span><span class="token operator">=</span>http://npm.taobao.org/mirrorss/selenium
<span class="token builtin class-name">set</span> <span class="token assign-left variable">CHROMEDRIVER_CDNURL</span><span class="token operator">=</span>https://npm.taobao.org/mirrors/chromedriver
<span class="token builtin class-name">set</span> <span class="token assign-left variable">SASS_BINARY_SITE</span><span class="token operator">=</span>https://npm.taobao.org/mirrors/node-sass/
</code></pre></div><h2 id="electron-packager-网络问题打包失败" tabindex="-1"><a class="header-anchor" href="#electron-packager-网络问题打包失败" aria-hidden="true">#</a> electron-packager: 网络问题打包失败</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置Electron的镜像源为淘宝的再build</span>
<span class="token comment"># macOS</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ELECTRON_MIRROR</span><span class="token operator">=</span><span class="token string">&quot;https://npm.taobao.org/mirrors/electron/&quot;</span>

<span class="token comment"># Windows</span>
<span class="token builtin class-name">set</span> <span class="token assign-left variable">ELECTRON_MIRROR</span><span class="token operator">=</span><span class="token string">&quot;https://npm.taobao.org/mirrors/electron/&quot;</span>
</code></pre></div><h2 id="webpack-cannot-find-module-webpack" tabindex="-1"><a class="header-anchor" href="#webpack-cannot-find-module-webpack" aria-hidden="true">#</a> webpack: Cannot find module &#39;webpack&#39;</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> webpack
<span class="token function">npm</span> <span class="token function">install</span> webpack-dev-server
<span class="token function">npm</span> <span class="token function">install</span> --save-dev webpack-cli
</code></pre></div><h2 id="vue-cli-service-command-not-found" tabindex="-1"><a class="header-anchor" href="#vue-cli-service-command-not-found" aria-hidden="true">#</a> vue-cli-service: command not found</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># mac环境下</span>
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> node_modules package-lock.json <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> <span class="token function">install</span>
</code></pre></div><h2 id="vue-cli-service-element-ui-按需加载" tabindex="-1"><a class="header-anchor" href="#vue-cli-service-element-ui-按需加载" aria-hidden="true">#</a> vue-cli-service: element-ui 按需加载</h2>`,14),d={href:"https://element.eleme.cn/#/zh-CN/component/quickstart",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.jianshu.com/p/705d0017ff31",target:"_blank",rel:"noopener noreferrer"},h=n("h2",{id:"vue-cli-service-chunk-vendors-js-文件太大",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-cli-service-chunk-vendors-js-文件太大","aria-hidden":"true"},"#"),a(" vue-cli-service: chunk-vendors.js 文件太大")],-1),k={href:"https://www.jianshu.com/p/957ed8a7ca73",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.cnblogs.com/songbw/p/11807460.html",target:"_blank",rel:"noopener noreferrer"};function b(v,g){const e=o("ExternalLinkIcon");return c(),r("div",null,[i,n("p",null,[n("a",d,[a("element-ui 官网快速入门"),s(e)])]),n("p",null,[n("a",u,[a("vue-cli 3.0按需引入element-ui babel.config.js配置"),s(e)])]),h,n("p",null,[n("a",k,[a("发布前端项目时因chunk-vendors过大导致首屏加载太慢，Vue Build时chunk-vendors的优化方案"),s(e)])]),n("p",null,[n("a",m,[a("提高首屏页面加载速度，解决vue-cli打包后单个文件过大的问题"),s(e)])])])}const _=t(l,[["render",b],["__file","electron 开发问题.html.vue"]]);export{_ as default};

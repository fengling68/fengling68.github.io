import{_ as o,r as p,o as e,c,a as s,b as n,d as u,f as a}from"./app.e56a07d8.js";const r={},l=a(`<h1 id="vscode-配置" tabindex="-1"><a class="header-anchor" href="#vscode-配置" aria-hidden="true">#</a> vscode 配置</h1><h2 id="配置-eslint-自动修复" tabindex="-1"><a class="header-anchor" href="#配置-eslint-自动修复" aria-hidden="true">#</a> 配置 ESLint 自动修复</h2><ol><li>vscode安装 eslint + vuter + prettier 插件；</li><li>设置 —&gt; 用户设置 —&gt; 扩展 —&gt; ESlint —&gt; 点击“在setting.json”中编辑;</li><li>添加下列代码</li></ol><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;vetur.format.defaultFormatter.js&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode-typescript&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;vetur.format.defaultFormatter.html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;js-beautify-html&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;prettier.singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;javascript.format.enable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;prettier.eslintIntegration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;eslint.enable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;eslint.run&quot;</span><span class="token operator">:</span> <span class="token string">&quot;onType&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;eslint.autoFixOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
 <span class="token property">&quot;eslint.options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;extensions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;.js&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;.vue&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;autoFix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;autoFix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="配置-korofileheader" tabindex="-1"><a class="header-anchor" href="#配置-korofileheader" aria-hidden="true">#</a> 配置 KoroFileHeader</h2><p>快捷命令</p><ul><li><p>文件注释：<code>control + command + .</code></p></li><li><p>函数注释：<code>option + command + /</code></p></li><li><p>cursorTip</p></li><li><p>fileheader</p></li></ul><p>配置</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;fileheader.configObj&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;autoAdd&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;autoAlready&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;prohibitAutoAdd&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;md&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;wideSame&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;wideNum&quot;</span><span class="token operator">:</span> <span class="token number">13</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;fileheader.customMade&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;Author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;Date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;Description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;LastEditors&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;LastEditTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;fileheader.cursorMode&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;param&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;return&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h2 id="配置-code-spell-checker" tabindex="-1"><a class="header-anchor" href="#配置-code-spell-checker" aria-hidden="true">#</a> 配置 Code Spell Checker</h2><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;cSpell.ignoreWords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
 <span class="token string">&quot;fengling&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre></div><h2 id="配置用户代码片段" tabindex="-1"><a class="header-anchor" href="#配置用户代码片段" aria-hidden="true">#</a> 配置用户代码片段</h2>`,12),i=s("code",null,"> snippet",-1),k={href:"https://snippet-generator.app/",target:"_blank",rel:"noopener noreferrer"},q=a(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 配置示例</span>
<span class="token string-property property">&quot;mockjs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mockjs&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;module.exports = {&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;  code: 1,&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;  timestamp: &#39;1647750273.739&#39;,&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;  result: true,&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;  data: {&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;}&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mockjs&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,1);function d(g,h){const t=p("ExternalLinkIcon");return e(),c("div",null,[l,s("p",null,[n("1、command + shift + p，打开面板； 2、输入 "),i,n("，选择 “首选项：配置用户代码片段”； 3、快速生成代码片段配置："),s("a",k,[n("https://snippet-generator.app/"),u(t)])]),q])}const m=o(r,[["render",d],["__file","vscode 配置.html.vue"]]);export{m as default};

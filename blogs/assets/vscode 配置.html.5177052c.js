import{_ as o,r as p,o as e,c,a as s,b as n,d as u,f as a}from"./app.0466c85b.js";const r={},l=a(`<h1 id="vscode-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#vscode-\u914D\u7F6E" aria-hidden="true">#</a> vscode \u914D\u7F6E</h1><h2 id="\u914D\u7F6E-eslint-\u81EA\u52A8\u4FEE\u590D" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-eslint-\u81EA\u52A8\u4FEE\u590D" aria-hidden="true">#</a> \u914D\u7F6E ESLint \u81EA\u52A8\u4FEE\u590D</h2><ol><li>vscode\u5B89\u88C5 eslint + vuter + prettier \u63D2\u4EF6\uFF1B</li><li>\u8BBE\u7F6E \u2014&gt; \u7528\u6237\u8BBE\u7F6E \u2014&gt; \u6269\u5C55 \u2014&gt; ESlint \u2014&gt; \u70B9\u51FB\u201C\u5728setting.json\u201D\u4E2D\u7F16\u8F91;</li><li>\u6DFB\u52A0\u4E0B\u5217\u4EE3\u7801</li></ol><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre></div><h2 id="\u914D\u7F6E-korofileheader" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-korofileheader" aria-hidden="true">#</a> \u914D\u7F6E KoroFileHeader</h2><p>\u5FEB\u6377\u547D\u4EE4</p><ul><li><p>\u6587\u4EF6\u6CE8\u91CA\uFF1A<code>control + command + .</code></p></li><li><p>\u51FD\u6570\u6CE8\u91CA\uFF1A<code>option + command + /</code></p></li><li><p>cursorTip</p></li><li><p>fileheader</p></li></ul><p>\u914D\u7F6E</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token property">&quot;fileheader.configObj&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
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
</code></pre></div><h2 id="\u914D\u7F6E-code-spell-checker" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-code-spell-checker" aria-hidden="true">#</a> \u914D\u7F6E Code Spell Checker</h2><div class="language-json ext-json"><pre class="language-json"><code><span class="token property">&quot;cSpell.ignoreWords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
 <span class="token string">&quot;fengling&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre></div><h2 id="\u914D\u7F6E\u7528\u6237\u4EE3\u7801\u7247\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u7528\u6237\u4EE3\u7801\u7247\u6BB5" aria-hidden="true">#</a> \u914D\u7F6E\u7528\u6237\u4EE3\u7801\u7247\u6BB5</h2>`,12),i=s("code",null,"> snippet",-1),k={href:"https://snippet-generator.app/",target:"_blank",rel:"noopener noreferrer"},q=a(`<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u914D\u7F6E\u793A\u4F8B</span>
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
</code></pre></div>`,1);function d(g,h){const t=p("ExternalLinkIcon");return e(),c("div",null,[l,s("p",null,[n("1\u3001command + shift + p\uFF0C\u6253\u5F00\u9762\u677F\uFF1B 2\u3001\u8F93\u5165 "),i,n("\uFF0C\u9009\u62E9 \u201C\u9996\u9009\u9879\uFF1A\u914D\u7F6E\u7528\u6237\u4EE3\u7801\u7247\u6BB5\u201D\uFF1B 3\u3001\u5FEB\u901F\u751F\u6210\u4EE3\u7801\u7247\u6BB5\u914D\u7F6E\uFF1A"),s("a",k,[n("https://snippet-generator.app/"),u(t)])]),q])}const m=o(r,[["render",d],["__file","vscode \u914D\u7F6E.html.vue"]]);export{m as default};

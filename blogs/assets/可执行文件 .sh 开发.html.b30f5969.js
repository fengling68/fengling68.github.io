import{_ as s,o as n,c as a,f as e}from"./app.b0016746.js";const t={},o=e(`<h1 id="可执行文件-sh-开发" tabindex="-1"><a class="header-anchor" href="#可执行文件-sh-开发" aria-hidden="true">#</a> 可执行文件 .sh 开发</h1><h2 id="创建可执行文件" tabindex="-1"><a class="header-anchor" href="#创建可执行文件" aria-hidden="true">#</a> 创建可执行文件</h2><ol><li>新建 <code>run.txt</code> 文件；</li><li>编辑内容并保存；</li><li>修改后缀名变为 <code>run.sh</code> 文件；</li><li>修改文件权限 <code>chmod 755 run.sh</code>；</li><li>双击文件执行；</li></ol><h2 id="常用语句" tabindex="-1"><a class="header-anchor" href="#常用语句" aria-hidden="true">#</a> 常用语句</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 定义脚本执行器</span>
<span class="token comment">#!/usr/bin/env/bash</span>
<span class="token comment">#!/usr/bin/env/zsh</span>

<span class="token comment"># 用app新开终端执行某命令文件</span>
<span class="token function">open</span> <span class="token parameter variable">-a</span> iTerm.app <span class="token string">&quot;./runsh&quot;</span>

<span class="token comment"># 命令执行完不关闭终端</span>
<span class="token builtin class-name">exec</span> /bin/bash
</code></pre></div><h2 id="路径变量" tabindex="-1"><a class="header-anchor" href="#路径变量" aria-hidden="true">#</a> 路径变量</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># dirname $0，取得当前执行的脚本文件的父目录</span>
<span class="token assign-left variable">basepath</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> \`dirname $0\`<span class="token punctuation">;</span> <span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>

<span class="token comment"># 打印当前路径</span>
<span class="token assign-left variable">currentPath</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;当前文件夹路径: <span class="token variable">$currentPath</span>&quot;</span>

<span class="token comment"># 进入到temp所在的目录</span>
<span class="token builtin class-name">cd</span> <span class="token variable">\${basepath}</span>/works/2018OnlyShare
</code></pre></div><h2 id="示例文件" tabindex="-1"><a class="header-anchor" href="#示例文件" aria-hidden="true">#</a> 示例文件</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env/bash</span>
    
<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token comment"># set -e</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;请选择本地调试 or 打包上传&quot;</span>
<span class="token keyword">select</span> <span class="token for-or-select variable">type</span> <span class="token keyword">in</span> <span class="token string">&quot;run&quot;</span> <span class="token string">&quot;build&quot;</span> <span class="token string">&quot;push&quot;</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
<span class="token builtin class-name">break</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;你已选择 <span class="token variable">$type</span>&quot;</span>

<span class="token comment"># 运行本地项目</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$type</span> <span class="token operator">==</span> <span class="token string">&quot;run&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;请选择你想运行的文件目录：&quot;</span>
  <span class="token keyword">select</span> <span class="token for-or-select variable">catalog</span> <span class="token keyword">in</span> <span class="token string">&quot;css&quot;</span> <span class="token string">&quot;javascript&quot;</span> <span class="token string">&quot;question&quot;</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token builtin class-name">break</span>
  <span class="token keyword">done</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;你已选择 <span class="token variable">$catalog</span>&quot;</span>

  <span class="token comment"># 进入打包文件</span>
  <span class="token builtin class-name">cd</span> <span class="token variable">$catalog</span>/

  <span class="token comment"># build文件</span>
  <span class="token function">npm</span> run dev

<span class="token comment"># 选择打包文件</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$type</span> <span class="token operator">==</span> <span class="token string">&quot;build&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;请选择你想打包的文件目录：&quot;</span>
  <span class="token keyword">select</span> <span class="token for-or-select variable">catalog</span> <span class="token keyword">in</span> <span class="token string">&quot;css&quot;</span> <span class="token string">&quot;javascript&quot;</span> <span class="token string">&quot;question&quot;</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token builtin class-name">break</span>
  <span class="token keyword">done</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;你已选择 <span class="token variable">$catalog</span>&quot;</span>

  <span class="token comment"># 进入打包文件</span>
  <span class="token builtin class-name">cd</span> <span class="token variable">$catalog</span>/

  <span class="token comment"># build文件</span>
  <span class="token function">npm</span> run build

  <span class="token comment"># 回到notes目录下</span>
  <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/

<span class="token comment"># 上传到git仓库</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$type</span> <span class="token operator">==</span> <span class="token string">&quot;push&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
  <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;新增文档&quot;</span>
  <span class="token function">git</span> pull
  <span class="token function">git</span> push
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;notes文件上传成功&quot;</span>
<span class="token keyword">fi</span>

<span class="token comment"># 命令执行完不关闭终端</span>
<span class="token builtin class-name">exec</span> /bin/bash
</code></pre></div><h2 id="package-json-配置示例" tabindex="-1"><a class="header-anchor" href="#package-json-配置示例" aria-hidden="true">#</a> package.json 配置示例</h2><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bash deploy.sh&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,11),p=[o];function c(l,i){return n(),a("div",null,p)}const k=s(t,[["render",c],["__file","可执行文件 .sh 开发.html.vue"]]);export{k as default};

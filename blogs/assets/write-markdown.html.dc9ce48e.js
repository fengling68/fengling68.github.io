import{_ as h,r as l,o as g,c as b,a,b as n,d as s,w as t,f as o}from"./app.551a4d03.js";const v={},f=a("h1",{id:"md-支持语法",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#md-支持语法","aria-hidden":"true"},"#"),n(" md 支持语法")],-1),_={id:"vuepress-基础语法",tabindex:"-1"},x=a("a",{class:"header-anchor",href:"#vuepress-基础语法","aria-hidden":"true"},"#",-1),w={href:"https://v1.vuepress.vuejs.org/zh/guide/markdown.html",target:"_blank",rel:"noopener noreferrer"},y=o(`<h3 id="front-matter" tabindex="-1"><a class="header-anchor" href="#front-matter" aria-hidden="true">#</a> Front Matter</h3><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> 标题
<span class="token key atrule">tags</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> 标签</span>
<span class="token punctuation">---</span></span>
</code></pre></div><h3 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h3><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>[[toc]]
</code></pre></div>`,4),M={class:"table-of-contents"},j=o(`<h3 id="标题" tabindex="-1"><a class="header-anchor" href="#标题" aria-hidden="true">#</a> 标题</h3><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> title-1</span>

<span class="token title important"><span class="token punctuation">##</span> title-2</span>

<span class="token title important"><span class="token punctuation">###</span> title-3</span>

<span class="token title important"><span class="token punctuation">####</span> title-4</span>

<span class="token title important"><span class="token punctuation">#####</span> title-5</span>

<span class="token title important"><span class="token punctuation">######</span> title-6</span>
</code></pre></div><h3 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接</h3><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token url">[<span class="token content">百度</span>](<span class="token url">https://www.baidu.com</span>)</span>
</code></pre></div><h3 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h3><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">图片</span>](<span class="token url">https://fengling68.github.io/imgbed/images-upic-blogs/404-1664538096183.svg</span>)</span>
</code></pre></div><h3 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h3><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> 无序列表
  <span class="token list punctuation">-</span> 无序列表
  <span class="token list punctuation">-</span> 无序列表
  <span class="token list punctuation">-</span> 无序列表
<span class="token list punctuation">-</span> 无序列表
<span class="token list punctuation">-</span> 无序列表

<span class="token list punctuation">1.</span> 有序列表
<span class="token list punctuation">2.</span> 有序列表
<span class="token list punctuation">3.</span> 有序列表
</code></pre></div><ul><li>无序列表 <ul><li>无序列表</li><li>无序列表</li><li>无序列表</li></ul></li><li>无序列表</li><li>无序列表</li></ul><ol><li>有序列表</li><li>有序列表</li><li>有序列表</li></ol><h3 id="表情" tabindex="-1"><a class="header-anchor" href="#表情" aria-hidden="true">#</a> 表情</h3>`,11),q={href:"https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json",target:"_blank",rel:"noopener noreferrer"},O=o(`<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>:tada: :100: :tada:
</code></pre></div><p>🎉 💯 🎉</p><h3 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h3><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>| name | Are |
| ---- | :-: |
| aaa  | 18  |
| bbb  | 20  |
</code></pre></div><table><thead><tr><th>name</th><th style="text-align:center;">Are</th></tr></thead><tbody><tr><td>aaa</td><td style="text-align:center;">18</td></tr><tr><td>bbb</td><td style="text-align:center;">20</td></tr></tbody></table><h3 id="代码高亮" tabindex="-1"><a class="header-anchor" href="#代码高亮" aria-hidden="true">#</a> 代码高亮</h3><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 注意 , 前后不能有空格 --&gt;</span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js {1,3-4}</span>
<span class="token code-block language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;Highlighted!&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;Highlighted!&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br></div></div><h3 id="自定义容器-基础" tabindex="-1"><a class="header-anchor" href="#自定义容器-基础" aria-hidden="true">#</a> 自定义容器-基础</h3><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>::: tip 标题-提示
这是一个提示
:::

::: warning 标题-警告
这是一个警告
:::

::: danger 标题-危险
这是一个危险警告
:::

::: details 标题-标签
这是一个 details 标签
:::

::: details 标题-查看代码

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;查看代码&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">标题-提示</p><p>这是一个提示</p></div><div class="custom-container warning"><p class="custom-container-title">标题-警告</p><p>这是一个警告</p></div><div class="custom-container danger"><p class="custom-container-title">标题-危险</p><p>这是一个危险警告</p></div><details class="custom-container details"><summary>标题-标签</summary><p>这是一个 details 标签</p></details><details class="custom-container details"><summary>标题-查看代码</summary><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;查看代码&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h3 id="自定义容器-选项卡" tabindex="-1"><a class="header-anchor" href="#自定义容器-选项卡" aria-hidden="true">#</a> 自定义容器-选项卡</h3><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>:::: code-group

::: code-group-item FOO

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">ts</span>
<span class="token code-block language-ts"><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: code-group-item BAR

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">ts</span>
<span class="token code-block language-ts"><span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::::
</code></pre></div>`,17),T=a("div",{class:"language-typescript","data-ext":"ts"},[a("pre",{class:"language-typescript"},[a("code",null,[a("span",{class:"token keyword"},"const"),n(" foo "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token string"},'"foo"'),a("span",{class:"token punctuation"},";"),n(`
`)])])],-1),A=a("div",{class:"language-typescript","data-ext":"ts"},[a("pre",{class:"language-typescript"},[a("code",null,[a("span",{class:"token keyword"},"const"),n(" bar "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token string"},'"bar"'),a("span",{class:"token punctuation"},";"),n(`
`)])])],-1),B={id:"vuepress-plugin-md-enhance-增强语法",tabindex:"-1"},F=a("a",{class:"header-anchor",href:"#vuepress-plugin-md-enhance-增强语法","aria-hidden":"true"},"#",-1),G={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/zh/config.html",target:"_blank",rel:"noopener noreferrer"},I=o(`<h3 id="标记" tabindex="-1"><a class="header-anchor" href="#标记" aria-hidden="true">#</a> 标记</h3><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>==标记==
</code></pre></div><p><mark>标记</mark></p><h3 id="幻灯片" tabindex="-1"><a class="header-anchor" href="#幻灯片" aria-hidden="true">#</a> 幻灯片</h3><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>主题：black, white, league, beige, sky, night, serif, simple, solarized, blood, moon
</code></pre></div><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>@slidestart moon

<span class="token title important"><span class="token punctuation">#</span> slide1</span>

<span class="token title important"><span class="token punctuation">##</span> something</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">图片</span>](<span class="token url">https://t7.baidu.com/it/u=1324065465,1026086221&amp;fm=193&amp;f=GIF</span>)</span>

<span class="token hr punctuation">---</span>

<span class="token title important"><span class="token punctuation">#</span> slide2</span>

<span class="token title important"><span class="token punctuation">##</span> something</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">图片</span>](<span class="token url">https://t7.baidu.com/it/u=966267389,974091805&amp;fm=193&amp;f=GIF</span>)</span>

<span class="token hr punctuation">---</span>

<span class="token title important"><span class="token punctuation">#</span> slide3</span>

<span class="token title important"><span class="token punctuation">##</span> something</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">图片</span>](<span class="token url">https://t7.baidu.com/it/u=3175010467,659988071&amp;fm=193&amp;f=GIF</span>)</span>

@slideend
</code></pre></div>`,6),N=o(`<h3 id="任务列表" tabindex="-1"><a class="header-anchor" href="#任务列表" aria-hidden="true">#</a> 任务列表</h3><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> [ ] 任务列表
<span class="token list punctuation">-</span> [ ] 任务列表
<span class="token list punctuation">-</span> [x] 任务列表
</code></pre></div><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 任务列表</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 任务列表</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 任务列表</label></li></ul><h3 id="图片尺寸" tabindex="-1"><a class="header-anchor" href="#图片尺寸" aria-hidden="true">#</a> 图片尺寸</h3><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>![404](https://fengling68.github.io/imgbed/images-upic-blogs/404-1664538096183.svg =300x200)
</code></pre></div><p><img src="https://fengling68.github.io/imgbed/images-upic-blogs/404-1664538096183.svg" alt="404" width="300" height="200"></p><h3 id="数学公式" tabindex="-1"><a class="header-anchor" href="#数学公式" aria-hidden="true">#</a> 数学公式</h3>`,7),z={href:"https://katex.org/docs/supported.html",target:"_blank",rel:"noopener noreferrer"},W=a("div",{class:"language-markdown","data-ext":"md"},[a("pre",{class:"language-markdown"},[a("code",null,`$$
1rem = \\frac{clientWidth}{750}
$$
`)])],-1),V=a("p",{class:"katex-block"},[a("span",{class:"katex-display"},[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[a("semantics",null,[a("mrow",null,[a("mn",null,"1"),a("mi",null,"r"),a("mi",null,"e"),a("mi",null,"m"),a("mo",null,"="),a("mfrac",null,[a("mrow",null,[a("mi",null,"c"),a("mi",null,"l"),a("mi",null,"i"),a("mi",null,"e"),a("mi",null,"n"),a("mi",null,"t"),a("mi",null,"W"),a("mi",null,"i"),a("mi",null,"d"),a("mi",null,"t"),a("mi",null,"h")]),a("mn",null,"750")])]),a("annotation",{encoding:"application/x-tex"}," 1rem = \\frac{clientWidth}{750} ")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6444em"}}),a("span",{class:"mord"},"1"),a("span",{class:"mord mathnormal"},"re"),a("span",{class:"mord mathnormal"},"m"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"2.0574em","vertical-align":"-0.686em"}}),a("span",{class:"mord"},[a("span",{class:"mopen nulldelimiter"}),a("span",{class:"mfrac"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"1.3714em"}},[a("span",{style:{top:"-2.314em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"mord"},[a("span",{class:"mord"},"750")])]),a("span",{style:{top:"-3.23em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),a("span",{style:{top:"-3.677em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"mord"},[a("span",{class:"mord mathnormal"},"c"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),a("span",{class:"mord mathnormal"},"i"),a("span",{class:"mord mathnormal"},"e"),a("span",{class:"mord mathnormal"},"n"),a("span",{class:"mord mathnormal"},"t"),a("span",{class:"mord mathnormal"},"Wi"),a("span",{class:"mord mathnormal"},"d"),a("span",{class:"mord mathnormal"},"t"),a("span",{class:"mord mathnormal"},"h")])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.686em"}},[a("span")])])])]),a("span",{class:"mclose nulldelimiter"})])])])])])],-1),Y=o(`<h3 id="自定义容器-增强" tabindex="-1"><a class="header-anchor" href="#自定义容器-增强" aria-hidden="true">#</a> 自定义容器-增强</h3><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>::: info 标题-提示
这是一个提示
:::

::: note 标题-警告
这是一个警告
:::
</code></pre></div><div class="custom-container info"><p class="custom-container-title">标题-信息</p><p>这是一个信息</p></div><div class="custom-container note"><p class="custom-container-title">标题-笔记</p><p>这是一个笔记</p></div><h3 id="自定义容器-选项卡-1" tabindex="-1"><a class="header-anchor" href="#自定义容器-选项卡-1" aria-hidden="true">#</a> 自定义容器-选项卡</h3><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>::: tabs
@tab code-group-item FOO

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">ts</span>
<span class="token code-block language-ts"><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

@tab code-group-item BAR

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">ts</span>
<span class="token code-block language-ts"><span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre></div>`,6),C=a("div",{class:"language-typescript","data-ext":"ts"},[a("pre",{class:"language-typescript"},[a("code",null,[a("span",{class:"token keyword"},"const"),n(" foo "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token string"},'"foo"'),a("span",{class:"token punctuation"},";"),n(`
`)])])],-1),D=a("div",{class:"language-typescript","data-ext":"ts"},[a("pre",{class:"language-typescript"},[a("code",null,[a("span",{class:"token keyword"},"const"),n(" bar "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token string"},'"bar"'),a("span",{class:"token punctuation"},";"),n(`
`)])])],-1);function S(L,E){const p=l("ExternalLinkIcon"),e=l("router-link"),c=l("CodeGroupItem"),i=l("CodeGroup"),r=l("Presentation"),d=l("Tabs");return g(),b("div",null,[f,a("h2",_,[x,n(),a("a",w,[n("vuepress 基础语法"),s(p)])]),y,a("nav",M,[a("ul",null,[a("li",null,[s(e,{to:"#vuepress-基础语法"},{default:t(()=>[n("vuepress 基础语法")]),_:1}),a("ul",null,[a("li",null,[s(e,{to:"#front-matter"},{default:t(()=>[n("Front Matter")]),_:1})]),a("li",null,[s(e,{to:"#目录"},{default:t(()=>[n("目录")]),_:1})]),a("li",null,[s(e,{to:"#标题"},{default:t(()=>[n("标题")]),_:1})]),a("li",null,[s(e,{to:"#链接"},{default:t(()=>[n("链接")]),_:1})]),a("li",null,[s(e,{to:"#图片"},{default:t(()=>[n("图片")]),_:1})]),a("li",null,[s(e,{to:"#列表"},{default:t(()=>[n("列表")]),_:1})]),a("li",null,[s(e,{to:"#表情"},{default:t(()=>[n("表情")]),_:1})]),a("li",null,[s(e,{to:"#表格"},{default:t(()=>[n("表格")]),_:1})]),a("li",null,[s(e,{to:"#代码高亮"},{default:t(()=>[n("代码高亮")]),_:1})]),a("li",null,[s(e,{to:"#自定义容器-基础"},{default:t(()=>[n("自定义容器-基础")]),_:1})]),a("li",null,[s(e,{to:"#自定义容器-选项卡"},{default:t(()=>[n("自定义容器-选项卡")]),_:1})])])]),a("li",null,[s(e,{to:"#vuepress-plugin-md-enhance-增强语法"},{default:t(()=>[n("vuepress-plugin-md-enhance 增强语法")]),_:1}),a("ul",null,[a("li",null,[s(e,{to:"#标记"},{default:t(()=>[n("标记")]),_:1})]),a("li",null,[s(e,{to:"#幻灯片"},{default:t(()=>[n("幻灯片")]),_:1})]),a("li",null,[s(e,{to:"#任务列表"},{default:t(()=>[n("任务列表")]),_:1})]),a("li",null,[s(e,{to:"#图片尺寸"},{default:t(()=>[n("图片尺寸")]),_:1})]),a("li",null,[s(e,{to:"#数学公式"},{default:t(()=>[n("数学公式")]),_:1})]),a("li",null,[s(e,{to:"#自定义容器-增强"},{default:t(()=>[n("自定义容器-增强")]),_:1})]),a("li",null,[s(e,{to:"#自定义容器-选项卡-1"},{default:t(()=>[n("自定义容器-选项卡")]),_:1})])])])])]),j,a("p",null,[a("a",q,[n("markdown-it-emoji, 所有 emoji 列表"),s(p)])]),O,s(i,null,{default:t(()=>[s(c,{title:"FOO"},{default:t(()=>[T]),_:1}),s(c,{title:"BAR"},{default:t(()=>[A]),_:1})]),_:1}),a("h2",B,[F,n(),a("a",G,[n("vuepress-plugin-md-enhance 增强语法"),s(p)])]),I,s(r,{id:"presentation-187",code:"eJzjUlYozslMSTXk4lIGMvNzU0syMvPSubgUo5/O3ve8sz1WI6OkpKDYSl+/xFwvKTEzpVQvOT9XP7NEv9TW0NjIxMDM1MTMVMfQwMjMwMLMyMhQLS3X1tDSWC3N1t3TTZOLS1dXF2g2xBYjcmyxNDMzMjM3trDUsTQ3MbA0tDAwxWeHMTl2GBuamxoYGpiYmeuYmVpaWlgYmKN7BABYvVfD",theme:"moon"}),N,a("p",null,[a("a",z,[n("katex 语法"),s(p)])]),W,V,Y,s(d,{id:"242",data:[{title:"FOO"},{title:"BAR"}]},{tab0:t(({title:u,value:k,isActive:m})=>[C]),tab1:t(({title:u,value:k,isActive:m})=>[D]),_:1})])}const Q=h(v,[["render",S],["__file","write-markdown.html.vue"]]);export{Q as default};

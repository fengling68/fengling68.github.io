import{_ as e,o,c as n,f as p}from"./app.988d0af1.js";const r={},t=p(`<h1 id="css文本格式化" tabindex="-1"><a class="header-anchor" href="#css文本格式化" aria-hidden="true">#</a> CSS文本格式化</h1><h2 id="控制字体" tabindex="-1"><a class="header-anchor" href="#控制字体" aria-hidden="true">#</a> 控制字体</h2><p>1、指定字体</p><pre><code>font-family:&quot;微软雅黑&quot;,&quot;Lantinghei&quot;;
font-family:&quot;Microsoft YaHei&quot;,&quot;微软雅黑&quot;;
先设置英文，在设置中文。
</code></pre><p>2、字体大小</p><pre><code>font-size:12px;
</code></pre><p>3、字体加粗</p><pre><code>font-weight:normal/blod/100-900;
</code></pre><p>4、字体样式</p><pre><code>    font-style:italic;  倾斜
</code></pre><p>5、小型大写字母</p><pre><code>font-variant:small-caps;
</code></pre><p>6、行高</p><pre><code>font:font-size/line-height;  行高
</code></pre><h2 id="控制文本格式" tabindex="-1"><a class="header-anchor" href="#控制文本格式" aria-hidden="true">#</a> 控制文本格式</h2><p>1、文本颜色</p><pre><code>color:value;
</code></pre><p>2、文字水平排列方式</p><pre><code>text-align:left/right/center;
</code></pre><p>3、文本线条修饰</p><pre><code>text-decoration:none/underline/overline/line-through;
                        下划线/上划线/删除线
</code></pre><p>4、行高 设置行间距</p><pre><code>line-height:20px;

特殊用法：可以控制一行文本在div中垂直居中。
height:20px;
line-height:20px;
</code></pre><p>5、首行文本缩进</p><pre><code>text-indent:40px;
</code></pre><p>6、文本阴影（和box-shadow用法一致）</p><pre><code>text-shadow:h-shadow v-shadow blur color;
水平阴影位置/垂直阴影位置/模糊距离/阴影颜色

例：text-shadow:10px 20px 5px red;
</code></pre><h2 id="文本溢出处理" tabindex="-1"><a class="header-anchor" href="#文本溢出处理" aria-hidden="true">#</a> 文本溢出处理</h2><p>1、处理空白</p><pre><code>while-space:normal/nowrap;
normal:采用浏览器默认设置（默认换行）
nowrap:不换行
</code></pre><p>2、文本溢出</p><pre><code>text-overflow:clip/ellipsis;
clip:裁剪，拦腰截断
ellipsis:用...来表示未显示的内容
</code></pre><p>3、<strong>该属性必须与 overflow:hidden 和 white-space:nowrap 联用。</strong></p><pre><code>// 文本溢出单行显示
.single {
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
</code></pre><p>4、文本溢出多行显示</p><pre><code>.multiple {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</code></pre>`,36),d=[t];function i(a,c){return o(),n("div",null,d)}const h=e(r,[["render",i],["__file","06-CSS文本格式化.html.vue"]]);export{h as default};

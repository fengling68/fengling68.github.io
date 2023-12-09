import{_ as e,o as n,c as a,f as t}from"./app.7092ccdd.js";const r={},d=t(`<h1 id="css使用小技巧" tabindex="-1"><a class="header-anchor" href="#css使用小技巧" aria-hidden="true">#</a> CSS使用小技巧</h1><h2 id="内外阴影box-shadow" tabindex="-1"><a class="header-anchor" href="#内外阴影box-shadow" aria-hidden="true">#</a> 内外阴影box-shadow</h2><pre><code>box-shadow: 5px 5px 20px #ed0000;设置外阴影
box-shadow: 5px 5px 20px #ed0000 inset;设置内阴影
</code></pre><p>多重边框</p><pre><code>.div1 {
    box-shadow: 0 0 0 6px red, 0 0 0 12px blue, 0 0 0 18px green, 0 0 0 24px purple;
    height: 200px;
    margin: 50px auto;
    width: 400px
}
</code></pre><h2 id="设置隐藏显示div" tabindex="-1"><a class="header-anchor" href="#设置隐藏显示div" aria-hidden="true">#</a> 设置隐藏显示div</h2><p>滑动门原理</p><h2 id="css代码恶作剧" tabindex="-1"><a class="header-anchor" href="#css代码恶作剧" aria-hidden="true">#</a> css代码恶作剧</h2><pre><code>*{
    cursor: none!important;
}
</code></pre><h2 id="设置模糊文字" tabindex="-1"><a class="header-anchor" href="#设置模糊文字" aria-hidden="true">#</a> 设置模糊文字</h2><pre><code>color: transparent;
text-shadow: #111 0 0 5px;
</code></pre><h2 id="设置长宽比固定元素-响应式页面很常用" tabindex="-1"><a class="header-anchor" href="#设置长宽比固定元素-响应式页面很常用" aria-hidden="true">#</a> 设置长宽比固定元素，响应式页面很常用</h2><p>通过设置父级窗口的padding-bottom可以达到让容器保持一定的长度比的目的，这在响应式页面设计中比较有用，能够保持元素不变形</p><pre><code>&lt;div style=&quot;width: 100%; position: relative; padding-bottom: 20%;&quot;&gt;
    &lt;div style=&quot;position: absolute; left: 0; top: 0; right: 0; bottom: 0;background-color:yellow;&quot;&gt;
        this content will have a constant aspect ratio that varies based on the width.
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><h2 id="实时编辑css-仅仅装x使用-仅对body生效" tabindex="-1"><a class="header-anchor" href="#实时编辑css-仅仅装x使用-仅对body生效" aria-hidden="true">#</a> 实时编辑css（仅仅装x使用，仅对body生效）</h2><pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;body&gt;
        &lt;style style=&quot;display:block&quot; contentEditable&gt;
            body { color: blue }
        &lt;/style&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre><h2 id="设置选中文字的颜色" tabindex="-1"><a class="header-anchor" href="#设置选中文字的颜色" aria-hidden="true">#</a> 设置选中文字的颜色</h2><pre><code>::selection伪元素
</code></pre><h2 id="触发背景变淡" tabindex="-1"><a class="header-anchor" href="#触发背景变淡" aria-hidden="true">#</a> 触发背景变淡</h2><pre><code>.spectiveBlur{
    position: absolute;
    top: 50%;left: 50%;
    width: 220px;line-height:160px;
    transform: translate(-50%, -50%);
    border-radius:10px;
    overflow:hidden;
    background:#E91E63;
    color:#fff;
    font-size:200%;
    text-align:center;
    cursor:pointer;
    transition: transform .2s;
}
.spectiveBlur:hover{
    box-shadow:0 0 0 1920px rgba(0,0,0,.7);
    transform: translate(-50%, -50%) scale(2);
}
</code></pre><h2 id="颜色渐变的高级应用" tabindex="-1"><a class="header-anchor" href="#颜色渐变的高级应用" aria-hidden="true">#</a> 颜色渐变的高级应用</h2><pre><code>\`radial-gradient(#000 12.5px, transparent 12.5px)\`
表示颜色从半径多少开始变化，变化到半径多少为止。

\`linear-gradient(#000 100px, #fff 100px)\`
表示颜色从那个位置开始变化，变化到那个位置结束。

ps：当设置background-image为渐变色的时候，配合background-position能实现意想不到的神奇效果

    background-image:
        radial-gradient(#000 12.5px, transparent 12.5px),
        radial-gradient(#fff 12.5px, transparent 12.5px),
        radial-gradient(#fff 50px, transparent 50px),
        radial-gradient(#000 50px, transparent 50px),
        linear-gradient(90deg，#000 100px, #fff 100px);

指明上述四个半径变化的圆心在哪。

    background-position:center 50px,center -50px,center 50px,center -50px,0 0;
</code></pre>`,22),o=[d];function i(s,h){return n(),a("div",null,o)}const p=e(r,[["render",i],["__file","09-CSS使用小技巧.html.vue"]]);export{p as default};

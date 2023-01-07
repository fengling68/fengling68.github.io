import{_ as e,o as n,c as r,f as a}from"./app.551a4d03.js";const o={},t=a(`<h1 id="_3d动画" tabindex="-1"><a class="header-anchor" href="#_3d动画" aria-hidden="true">#</a> 3D动画</h1><h2 id="属性perspective" tabindex="-1"><a class="header-anchor" href="#属性perspective" aria-hidden="true">#</a> 属性perspective</h2><pre><code>单位：px；
设置假定人眼到平面的距离，只影响3D元素。
数越大，物体越远；数越小，物体越近。
位置：加在父元素上，设置好后子元素就可以完成3D转换。
</code></pre><h2 id="属性transform-style" tabindex="-1"><a class="header-anchor" href="#属性transform-style" aria-hidden="true">#</a> 属性transform-style</h2><pre><code>transform-style:preserve-3d;   //使被转换的子元素保留其3D转换
</code></pre><h2 id="_3d-transform" tabindex="-1"><a class="header-anchor" href="#_3d-transform" aria-hidden="true">#</a> 3D-transform</h2><pre><code>1、3D位移

    transform:translateZ(100px);     //改变元素在Z轴上的距离,正负值
    transform:translate3d(x,y,z);    //元素在X,Y,Z轴都发生变化

2、3D旋转

    transform:rotateX(deg);         //3D旋转必须设置具体方向
    transform:rotateY(deg);
    transform:rotateZ(deg);

先旋转在移动，物体在旋转的过程中，坐标也会改变。
可以先移动在旋转。
</code></pre><h2 id="过渡和四要素" tabindex="-1"><a class="header-anchor" href="#过渡和四要素" aria-hidden="true">#</a> 过渡和四要素</h2><pre><code>过渡：元素从一个状态到另一个状态的平滑变换过程。
属性：transition
触发：过渡效果由用户的行为进行触发（点击、鼠标悬停）
</code></pre><ol><li><p>过渡属性</p><pre><code> transition-property:none/all/property;
 例：transition-property:background;
</code></pre></li><li><p>过渡时间</p><pre><code> transition-duration:s/ms;
</code></pre></li><li><p>过渡函数</p><pre><code> transition-timing-function:linear/ease/ease-in/ease-out/ease-in-out;
                             匀速/慢快慢/慢开始/慢结束/慢开始结束
</code></pre></li><li><p>过渡延迟</p><pre><code> transition-delay:s/ms;
</code></pre></li></ol><p><strong>统一设置过渡：transition:属性 时间 函数 延迟;</strong></p><p><strong>移入移出都需要过渡放在div里，只有移入需要放在hover里。</strong></p><h2 id="动画" tabindex="-1"><a class="header-anchor" href="#动画" aria-hidden="true">#</a> 动画</h2><p>过渡，实现简单的动态效果；</p><p>动画，实现复杂的动态效果。注意浏览器兼容。</p><ol><li><p>声明动画</p><pre><code> @keyframes name{
     from{
         background-color:red;
     }
     50%{
         background-color:yellow;
     }                                  
     to{
         background-color:blue;
     }
 }
</code></pre></li><li><p>调用动画</p><pre><code> animation:name,s/ms,ease,infinite,alternate;  

 /*名称:
 时长: 单位s/ms
 速度: linear  ease  ease-in  ease-out   ease-in-out
 延迟: 单位s/ms
 次数: 数值    infinite,无数次播放
 方向: normal   alternate,交替轮流*/
</code></pre></li><li><p>播放方向</p><pre><code> alternate：奇数次from-to,偶数次to-from。
</code></pre></li><li><p>动画播放之前和之后的效果</p><pre><code> none:默认
 forwards:动画完成后，保持最后一个状态；
 backwards:动画显示之前，保持在第一个状态；
 both:动画完成后，动画显示前，都保持着相应的状态。
</code></pre></li><li><p>动画播放状态，用于播放过程中暂停动画。</p><pre><code> animation-play-state:  ;
 paused：暂停
 running：播放
</code></pre></li></ol>`,16),i=[t];function d(s,p){return n(),r("div",null,i)}const l=e(o,[["render",d],["__file","13-3D动画.html.vue"]]);export{l as default};

import{_ as e,o as n,c as t,f as a}from"./app.e56a07d8.js";const i={},o=a(`<h1 id="hilo之view、util、event" tabindex="-1"><a class="header-anchor" href="#hilo之view、util、event" aria-hidden="true">#</a> Hilo之view、util、event</h1><h2 id="view" tabindex="-1"><a class="header-anchor" href="#view" aria-hidden="true">#</a> view</h2><h3 id="_1、stage-舞台" tabindex="-1"><a class="header-anchor" href="#_1、stage-舞台" aria-hidden="true">#</a> 1、Stage 舞台</h3><pre><code>var stage = new Hilo.Stage({
    renderType: &#39;canvas&#39;,
    container: document.getElementById(&quot;wrap&quot;),
    width: 600,
    height: 600
})
</code></pre><h3 id="_2、container-容器" tabindex="-1"><a class="header-anchor" href="#_2、container-容器" aria-hidden="true">#</a> 2、Container 容器</h3><pre><code>var container = new Hilo.Container({
    x: 0,
    y: 0,
    width: 600,
    height: 600,
    background: &#39;#000&#39;,
    totation: 0,           // 顺时针旋转 0 deg
}).addTo(stage);
</code></pre><h3 id="_3、bitmap-静态位图" tabindex="-1"><a class="header-anchor" href="#_3、bitmap-静态位图" aria-hidden="true">#</a> 3、Bitmap 静态位图</h3><pre><code>var bmp = new Hilo.Bitmap({
    image: &#39;../../img/error/error.png&#39;,
    rect: [100,100,500,500],
    x: 0,
    y: 0
}).addTo(stage);
</code></pre><h3 id="_4、view-设置渐变背景色" tabindex="-1"><a class="header-anchor" href="#_4、view-设置渐变背景色" aria-hidden="true">#</a> 4、view（设置渐变背景色）</h3><pre><code>var view = new Hilo.View({
    x: 20,
    y: 20,
    width: 200,
    height: 200
}).addTo(container);

// 只有canvas支持渐变色
if(!Hilo.isFlash &amp;&amp; stage.renderer.renderType === &#39;canvas&#39;){
    var gradient = stage.renderer.context.createLinearGradient(0, 0, 0, view.height);
    gradient.addColorStop(0, &#39;#fc0&#39;);
    gradient.addColorStop(0.5, &#39;#ff0&#39;);
    gradient.addColorStop(1.0, &#39;#0f0&#39;);
    view.background = gradient;
}
</code></pre><h3 id="_5、button-按钮-绑定事件" tabindex="-1"><a class="header-anchor" href="#_5、button-按钮-绑定事件" aria-hidden="true">#</a> 5、Button 按钮(绑定事件)</h3><pre><code>// DOM事件
stage.enableDOMEvent([Hilo.event.POINTER_START, Hilo.event.POINTER_MOVE, Hilo.event.POINTER_END]);

// 按钮
var blueBtn = new Hilo.Button({
    id: &#39;blueBtn&#39;,
    x: 0,
    y: 0,
    width: 100,
    height: 50,
    image: &#39;&#39;,
    background: &#39;blue&#39;,
    upState: {rect:[0, 0, 64, 64]},
    overState: {rect:[64, 0, 64, 64]},
    downState: {rect:[128, 0, 64, 64]},
    disabledState: {rect:[192, 0, 64, 64]}
}).addTo(stage);
// 按钮绑定事件 touchstart 和 touchend 事件
blueBtn.on(Hilo.event.POINTER_START, function(e){
    console.log(e.type, this);
}).on(Hilo.event.POINTER_END, function(e){
    console.log(e.type, this);
});
</code></pre><h3 id="_6、graphics-图形" tabindex="-1"><a class="header-anchor" href="#_6、graphics-图形" aria-hidden="true">#</a> 6、Graphics 图形</h3><pre><code>var g = new Hilo.Graphics({ 
    width: 100, 
    height: 100, 
    x: 40, 
    y: 20 
});

// 正方形
g.lineStyle(1, &quot;#009898&quot;).beginFill(&quot;#0ff&quot;).drawRect(0.5, 0.5, 99, 99).endFill().addTo(stage);

// 圆角正方形
g.lineStyle(5, &quot;#009898&quot;).beginFill(&quot;#0ff&quot;).drawRoundRect(5, 5, 90, 90, 20).endFill().addTo(stage);

// 圆
g.lineStyle(2, &quot;#009898&quot;).beginRadialGradientFill(50, 50, 0, 50, 50, 50, [&quot;#fff&quot;, &quot;#4ffcfc&quot;], [0, 1]).drawCircle(2, 2, 48).endFill().addTo(stage);

// 椭圆
g.lineStyle(5, &quot;#009898&quot;).beginFill(&quot;#0ff&quot;).drawEllipse(5, 5, 90, 50).endFill().addTo(stage);

// 带渐变色的长方形
g.lineStyle(2, &quot;#009898&quot;).beginLinearGradientFill(0, 0, 60, 0, [&quot;#fff&quot;, &quot;#4ffcfc&quot;], [0.3, 1]).drawRect(2, 2, 66, 86).endFill().addTo(stage);

// svg图形 
var svgPath = &quot;M53 84 C53 84 51 84 51 84 C51 89 53 94 56 94 C64 94 71 89 71 84 C71 72 64 64 56 64 C42 64 31 72 31 84 C31 100 42 114 56 114 C75 114 91 100 91 84 C91 61 75 44 56 44 C31 44 11 61 11 84 C11 111 31 134 56 134 C86 134 111 111 111 84 C111 50 86 24 56 24&quot;;
g.lineStyle(4, &quot;#02d1d1&quot;).drawSVGPath(svgPath).closePath().endFill().addTo(stage);
</code></pre><blockquote></blockquote><pre><code>beginPath()                                                             开始路径
lineStyle(1, &quot;#000&quot;)                                                    边框样式(粗细，颜色)
beginFill(&quot;#0ff&quot;)                                                       开始填充颜色
beginLinearGradientFill(0, 0, 60, 0, [&quot;#fff&quot;, &quot;#4ffcfc&quot;], [0.3, 1])     开始填充渐变色
moveTo()                                                                移动画笔到开始位置
lineTo()                                                                画线
drawRect(0.5, 0.5, 99, 99)                                              画正方形
drawRoundRect(5, 5, 90, 90, 20)                                         画带边角的正方形
drawCircle(2, 2, 48)                                                    画圆
drawEllipse(5, 5, 90, 50)                                               画椭圆
drawSVGPath(svgPath)                                                    画svg图
endFill()                                                               结束填充颜色
closePath()                                                             闭合路径
addTo()                                                                 添加到舞台或容器中
</code></pre><h3 id="_7、domelement-dom元素封装" tabindex="-1"><a class="header-anchor" href="#_7、domelement-dom元素封装" aria-hidden="true">#</a> 7、DOMElement dom元素封装</h3><pre><code>var content = &quot;Hello World! Hilo是一款HTML5 2D游戏引擎，欢迎使用。&quot;;

var rect = new Hilo.DOMElement({
    id: &#39;rect&#39;,
    element: Hilo.createElement(&#39;div&#39;, {                // 创建元素
        innerHTML: content,                             // 设置文本内容
        style: {                                        // 设置样式
            backgroundColor: &#39;#004eff&#39;,
            position: &#39;absolute&#39;
        }
    }),
    width: 100,                                         // 宽高
    height: 100,
    x: 50,                                              // 初始位置
    y: 70
}).addTo(stage);
</code></pre><h3 id="_8、text-简单文本" tabindex="-1"><a class="header-anchor" href="#_8、text-简单文本" aria-hidden="true">#</a> 8、Text 简单文本</h3><pre><code>var font = &quot;14px arial&quot;;
var content = &quot;Hello World! Hilo是一款HTML5 2D游戏引擎，欢迎使用。&quot;;

// 添加文本
var text = new Hilo.Text({
    x: 40,
    y: 50,
    width: 250,
    height: 100,
    font: font,
    text: content,
    lineSpacing: 0,
}).addTo(stage);
</code></pre><h3 id="_9、sprite-创建精灵图" tabindex="-1"><a class="header-anchor" href="#_9、sprite-创建精灵图" aria-hidden="true">#</a> 9、Sprite 创建精灵图</h3><pre><code>/******************* 创建（一条小鱼）精灵图 *******************/
var fish = new Hilo.Sprite({
    frames: atlas.getSprite(&#39;fish&#39;),
    x: Math.random()*stageWidth,    // 随机位置
    y: Math.random()*stageHeight,
    interval: 6,
    timeBased: false,
    loop: false,    // 是否循环，默认true
    alpha:1,
    tint:Math.random()*0xffffff,
    pivotX:87,
    pivotY:63
}).addTo(stage);

/*****************  创建多条运动的小鱼  *******************/
// 小鱼运动的范围
var maxX = stageWidth + 174;
var maxY = stageHeight + 126;
var minX = -174;
var minY = -126;
var num = 1;

// 创建 5 条小鱼
while(num--){
    var fish = new Hilo.Sprite({
        frames: atlas.getSprite(&#39;fish&#39;),
        x: Math.random()*stageWidth,
        y: Math.random()*stageHeight,
        rotation: Math.random()*360,
        interval: 6,
        onUpdate: function(){
            // x 轴超出范围
            if(this.x &gt; maxX){ this.x = minX; }
            else if(this.x &lt; minX){ this.x = maxX; }
            // y 轴超出范围
            if(this.y &gt; maxY){ this.y = minY; }
            else if(this.y &lt; minY){ this.y = maxY; }
            // 小鱼运动
            this.x += this.vx;
            this.y += this.vy;
        }
    }).addTo(stage);

    var speed = 2;
    // &gt; 0 向下  &lt; 0 向上
    fish.vy = Math.sin(fish.rotation*Math.PI/180) * speed;  
    // &gt; 0 向右  &lt; 0 向左
    fish.vx = Math.cos(fish.rotation*Math.PI/180) * speed;
}
</code></pre><h2 id="util" tabindex="-1"><a class="header-anchor" href="#util" aria-hidden="true">#</a> util</h2><h3 id="_1、textureatlas-初始化精灵图" tabindex="-1"><a class="header-anchor" href="#_1、textureatlas-初始化精灵图" aria-hidden="true">#</a> 1、TextureAtlas 初始化精灵图</h3><pre><code>// 初始化精灵图
var atlas = new Hilo.TextureAtlas({
    image: &#39;images/fish.png&#39;,        // 大背景图 
    width: 174,
    height: 1512,
    frames: {                        
        frameWidth: 174,             // 一个小图的宽
        frameHeight: 126,            // 一个小图的高
        numFrames: 12                // 小图的个数
    },
    sprites: {                       // 从第一张到第七张图变化
        fish: {from:0, to:7}
    }
});
</code></pre><h3 id="_2、ticker-定时器" tabindex="-1"><a class="header-anchor" href="#_2、ticker-定时器" aria-hidden="true">#</a> 2、Ticker 定时器</h3><pre><code>var ticker = new Hilo.Ticker(60);
ticker.addTick(stage);
ticker.start();
</code></pre><h3 id="_3、drag-拖拽" tabindex="-1"><a class="header-anchor" href="#_3、drag-拖拽" aria-hidden="true">#</a> 3、drag 拖拽</h3><pre><code>// 创建一只小鱼的位图
var bmp = new Hilo.Bitmap({
    image: &#39;images/fish.png&#39;,
    rect: [0, 0, 174, 126],
    x: container.x,
    y: container.y
}).addTo(stage);

// mix让view有拖拽功能
Hilo.util.copy(bmp, Hilo.drag);
// 设置推拽范围
bmp.startDrag([0, 0, 300, 300]);    

// 拖拽事件
bmp.on(&quot;dragStart&quot;, function(e){ console.log(&quot;dragStart&quot;, e.detail.x, e.detail.y); });
bmp.on(&quot;dragEnd&quot;,  function(e){ });
bmp.on(&quot;dragMove&quot;, function(e){ });

// 阻止默认事件
document.ontouchstart = function(e){
    e.preventDefault();
}
</code></pre><h2 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> event</h2><h3 id="_1、mouseevent" tabindex="-1"><a class="header-anchor" href="#_1、mouseevent" aria-hidden="true">#</a> 1、mouseevent</h3><pre><code>(1) 目前支持 mousemove, mouseup, mousedown, mouseover, mouseout, 支持事件冒泡;
(2) 可以通过 e.eventTarget 和 e.eventCurrentTarget 获得触发鼠标事件的对象;
(3) 建议使用 Hilo.event.POINTER_START, Hilo.event.POINTER_MOVE, Hilo.event.POINTER_END，它在pc上对应 mousemove, mouseup, mousedonw, 在手机上对应 touchstart, touchmove, touchend;

// 定义dom事件
stage.enableDOMEvent([Hilo.event.POINTER_START, Hilo.event.POINTER_MOVE, Hilo.event.POINTER_END]);

// 绑定事件
container.on(Hilo.event.POINTER_START, function(e){
    console.log(&quot;target:&quot; + e.eventTarget.id, &quot;, currentTarget:&quot; + e.eventCurrentTarget.id);
});

container.on(Hilo.event.POINTER_MOVE, function(e){});

container.on(&quot;mouseout&quot;, function(e){});

container.on(&quot;mouseover&quot;, function(e){});
</code></pre>`,32),r=[o];function d(h,l){return n(),t("div",null,r)}const c=e(i,[["render",d],["__file","13-Hilo之view、util、event.html.vue"]]);export{c as default};

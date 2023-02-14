import{_ as n,o as e,c as i,f as a}from"./app.b0016746.js";const t={},o=a(`<h1 id="hilo属性" tabindex="-1"><a class="header-anchor" href="#hilo属性" aria-hidden="true">#</a> Hilo属性</h1><h2 id="_1、align-对齐方式9种" tabindex="-1"><a class="header-anchor" href="#_1、align-对齐方式9种" aria-hidden="true">#</a> 1、align 对齐方式9种</h2><pre><code>// 创建容器
// aligin对齐方式展示
// TL  T  TR  L  C  R  BL  B  BR
for(var i in Hilo.align){
    var text = new Hilo.Text({
        width: 40,
        height: 40,
        textAlign: &#39;center&#39;,
        background: &#39;#ccc&#39;,
        font: &#39;24px Arial&#39;,
        align: Hilo.align[i],
        text: Hilo.align[i]
    }).addTo(container);
    
    text.on(Hilo.event.POINTER_START, function(){
        console.log(this.text);
    });
}
</code></pre><h2 id="_2、background-背景色" tabindex="-1"><a class="header-anchor" href="#_2、background-背景色" aria-hidden="true">#</a> 2、background 背景色</h2><pre><code>// 单一背景色
view.background = &quot;#f96&quot;;

// 渐变背景色
var gradient = stage.renderer.context.createLinearGradient(0, 0, 0, view.height);
gradient.addColorStop(0, &#39;#fc0&#39;);
gradient.addColorStop(0.5, &#39;#ff0&#39;);
gradient.addColorStop(1.0, &#39;#0f0&#39;);
view.background = gradient;
</code></pre><h2 id="_3、blendmode-混合模式" tabindex="-1"><a class="header-anchor" href="#_3、blendmode-混合模式" aria-hidden="true">#</a> 3、blendMode 混合模式</h2><pre><code>// 创建舞台、开启定时器、添加Bitmap背景

// stage允许的事件
stage.enableDOMEvent([Hilo.event.POINTER_START, Hilo.event.POINTER_MOVE, Hilo.event.POINTER_END]);

// 创建旋转的小图
var bmp = new Hilo.Bitmap({
    image: &#39;images/fish.png&#39;,
    rect: [0, 0, 174, 126],
    x: 162,
    y: 113,
    pivotX:60,                          // 原心
    pivotY:60,
    blendMode:&#39;destination-out&#39;,        // 混合模式的方向
    onUpdate:function(){     
        this.rotation ++;
    }
}).addTo(stage);

// 创建笔刷
brush = new Hilo.Graphics({
    blendMode:&#39;destination-out&#39;
}).addTo(stage);
// 笔刷样式
brush.lineStyle(30, &#39;#fff&#39;, 1, &#39;round&#39;, &#39;round&#39;);

// 这个不懂 ? 
var removeFill = function(brush){
    brush._actions = brush._actions.filter(function(action){
        console.log( action[0] )
        if(action[0] === &#39;stroke&#39; || action[0] === &#39;fill&#39;){
            return false;
        }
        return true;
    });
};

// 鼠标是否按下的标志
var isDown = false;

// 鼠标按下 isDown = true; 笔刷开始移动
stage.on(Hilo.event.POINTER_START, function(e){
    if(!isDown){
        isDown = true;
        brush.moveTo(e.stageX, e.stageY);       // 笔刷移动到起始点
    }
});

// 鼠标移动、笔刷移动
stage.on(Hilo.event.POINTER_MOVE, function(e){
    if(isDown){                    
        removeFill(brush);                      // 消除上次的笔刷
        brush.lineTo(e.stageX, e.stageY);       // 笔刷画线
        brush.endFill();                        // 结束填充
    }
});

// 鼠标抬起 isDown = false;
stage.on(Hilo.event.POINTER_END, function(e){
    isDown = false;
});
</code></pre><h2 id="_4、crossorigin-跨域" tabindex="-1"><a class="header-anchor" href="#_4、crossorigin-跨域" aria-hidden="true">#</a> 4、crossOrigin 跨域</h2><pre><code>var bmp = new Hilo.Bitmap({
    image:&#39;https://gw.alicdn.com/tfs/TB1iNtERXXXXXcBaXXXXXXXXXXX-600-600.png_200x200.jpg&#39;,
    crossOrigin:&#39;Anonymous&#39;,
    y:300
}).addTo(stage);

\`注意：WebGL渲染方式下，图片跨域需要设置crossDomain头。Loader和Bitmap都可以加crossOrigin:&#39;Anonymous&#39;来设置跨域头。\`
</code></pre><h2 id="_5、旋转属性" tabindex="-1"><a class="header-anchor" href="#_5、旋转属性" aria-hidden="true">#</a> 5、旋转属性</h2><pre><code>rotation: 45,       // 旋转45度
</code></pre><h2 id="_6、屏幕自适应" tabindex="-1"><a class="header-anchor" href="#_6、屏幕自适应" aria-hidden="true">#</a> 6、屏幕自适应</h2><pre><code>// 基本宽高
var gameWidth = 1440;
var gameHeight = 900;

// 创建舞台
var stage = new Hilo.Stage({
    renderType:&#39;canvas&#39;,
    container: document.getElementById(&quot;game-container&quot;),
    width: gameWidth,
    height: gameHeight,
    scaleX:innerWidth/gameWidth,
    scaleY:innerHeight/gameHeight
});

// 创建Ticker
var ticker = new Hilo.Ticker(20);
ticker.addTick(stage);
ticker.start();

// 创建背景图
var bmp = new Hilo.Bitmap({
    image: &#39;images/map.jpg&#39;,
}).addTo(stage);

// window自适应
window.onresize = function(){
    stage.scaleX = innerWidth/gameWidth;
    stage.scaleY = innerHeight/gameHeight;
    stage.resize(gameWidth, gameHeight, true);
};
</code></pre>`,13),r=[o];function d(s,c){return e(),i("div",null,r)}const l=n(t,[["render",d],["__file","12-Hilo属性.html.vue"]]);export{l as default};

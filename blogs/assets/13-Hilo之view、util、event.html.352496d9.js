import{_ as e,o as n,c as t,f as a}from"./app.61734918.js";const i={},o=a(`<h1 id="hilo\u4E4Bview\u3001util\u3001event" tabindex="-1"><a class="header-anchor" href="#hilo\u4E4Bview\u3001util\u3001event" aria-hidden="true">#</a> Hilo\u4E4Bview\u3001util\u3001event</h1><h2 id="view" tabindex="-1"><a class="header-anchor" href="#view" aria-hidden="true">#</a> view</h2><h3 id="_1\u3001stage-\u821E\u53F0" tabindex="-1"><a class="header-anchor" href="#_1\u3001stage-\u821E\u53F0" aria-hidden="true">#</a> 1\u3001Stage \u821E\u53F0</h3><pre><code>var stage = new Hilo.Stage({
    renderType: &#39;canvas&#39;,
    container: document.getElementById(&quot;wrap&quot;),
    width: 600,
    height: 600
})
</code></pre><h3 id="_2\u3001container-\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_2\u3001container-\u5BB9\u5668" aria-hidden="true">#</a> 2\u3001Container \u5BB9\u5668</h3><pre><code>var container = new Hilo.Container({
    x: 0,
    y: 0,
    width: 600,
    height: 600,
    background: &#39;#000&#39;,
    totation: 0,           // \u987A\u65F6\u9488\u65CB\u8F6C 0 deg
}).addTo(stage);
</code></pre><h3 id="_3\u3001bitmap-\u9759\u6001\u4F4D\u56FE" tabindex="-1"><a class="header-anchor" href="#_3\u3001bitmap-\u9759\u6001\u4F4D\u56FE" aria-hidden="true">#</a> 3\u3001Bitmap \u9759\u6001\u4F4D\u56FE</h3><pre><code>var bmp = new Hilo.Bitmap({
    image: &#39;../../img/error/error.png&#39;,
    rect: [100,100,500,500],
    x: 0,
    y: 0
}).addTo(stage);
</code></pre><h3 id="_4\u3001view-\u8BBE\u7F6E\u6E10\u53D8\u80CC\u666F\u8272" tabindex="-1"><a class="header-anchor" href="#_4\u3001view-\u8BBE\u7F6E\u6E10\u53D8\u80CC\u666F\u8272" aria-hidden="true">#</a> 4\u3001view\uFF08\u8BBE\u7F6E\u6E10\u53D8\u80CC\u666F\u8272\uFF09</h3><pre><code>var view = new Hilo.View({
    x: 20,
    y: 20,
    width: 200,
    height: 200
}).addTo(container);

// \u53EA\u6709canvas\u652F\u6301\u6E10\u53D8\u8272
if(!Hilo.isFlash &amp;&amp; stage.renderer.renderType === &#39;canvas&#39;){
    var gradient = stage.renderer.context.createLinearGradient(0, 0, 0, view.height);
    gradient.addColorStop(0, &#39;#fc0&#39;);
    gradient.addColorStop(0.5, &#39;#ff0&#39;);
    gradient.addColorStop(1.0, &#39;#0f0&#39;);
    view.background = gradient;
}
</code></pre><h3 id="_5\u3001button-\u6309\u94AE-\u7ED1\u5B9A\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#_5\u3001button-\u6309\u94AE-\u7ED1\u5B9A\u4E8B\u4EF6" aria-hidden="true">#</a> 5\u3001Button \u6309\u94AE(\u7ED1\u5B9A\u4E8B\u4EF6)</h3><pre><code>// DOM\u4E8B\u4EF6
stage.enableDOMEvent([Hilo.event.POINTER_START, Hilo.event.POINTER_MOVE, Hilo.event.POINTER_END]);

// \u6309\u94AE
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
// \u6309\u94AE\u7ED1\u5B9A\u4E8B\u4EF6 touchstart \u548C touchend \u4E8B\u4EF6
blueBtn.on(Hilo.event.POINTER_START, function(e){
    console.log(e.type, this);
}).on(Hilo.event.POINTER_END, function(e){
    console.log(e.type, this);
});
</code></pre><h3 id="_6\u3001graphics-\u56FE\u5F62" tabindex="-1"><a class="header-anchor" href="#_6\u3001graphics-\u56FE\u5F62" aria-hidden="true">#</a> 6\u3001Graphics \u56FE\u5F62</h3><pre><code>var g = new Hilo.Graphics({ 
    width: 100, 
    height: 100, 
    x: 40, 
    y: 20 
});

// \u6B63\u65B9\u5F62
g.lineStyle(1, &quot;#009898&quot;).beginFill(&quot;#0ff&quot;).drawRect(0.5, 0.5, 99, 99).endFill().addTo(stage);

// \u5706\u89D2\u6B63\u65B9\u5F62
g.lineStyle(5, &quot;#009898&quot;).beginFill(&quot;#0ff&quot;).drawRoundRect(5, 5, 90, 90, 20).endFill().addTo(stage);

// \u5706
g.lineStyle(2, &quot;#009898&quot;).beginRadialGradientFill(50, 50, 0, 50, 50, 50, [&quot;#fff&quot;, &quot;#4ffcfc&quot;], [0, 1]).drawCircle(2, 2, 48).endFill().addTo(stage);

// \u692D\u5706
g.lineStyle(5, &quot;#009898&quot;).beginFill(&quot;#0ff&quot;).drawEllipse(5, 5, 90, 50).endFill().addTo(stage);

// \u5E26\u6E10\u53D8\u8272\u7684\u957F\u65B9\u5F62
g.lineStyle(2, &quot;#009898&quot;).beginLinearGradientFill(0, 0, 60, 0, [&quot;#fff&quot;, &quot;#4ffcfc&quot;], [0.3, 1]).drawRect(2, 2, 66, 86).endFill().addTo(stage);

// svg\u56FE\u5F62 
var svgPath = &quot;M53 84 C53 84 51 84 51 84 C51 89 53 94 56 94 C64 94 71 89 71 84 C71 72 64 64 56 64 C42 64 31 72 31 84 C31 100 42 114 56 114 C75 114 91 100 91 84 C91 61 75 44 56 44 C31 44 11 61 11 84 C11 111 31 134 56 134 C86 134 111 111 111 84 C111 50 86 24 56 24&quot;;
g.lineStyle(4, &quot;#02d1d1&quot;).drawSVGPath(svgPath).closePath().endFill().addTo(stage);
</code></pre><blockquote></blockquote><pre><code>beginPath()                                                             \u5F00\u59CB\u8DEF\u5F84
lineStyle(1, &quot;#000&quot;)                                                    \u8FB9\u6846\u6837\u5F0F(\u7C97\u7EC6\uFF0C\u989C\u8272)
beginFill(&quot;#0ff&quot;)                                                       \u5F00\u59CB\u586B\u5145\u989C\u8272
beginLinearGradientFill(0, 0, 60, 0, [&quot;#fff&quot;, &quot;#4ffcfc&quot;], [0.3, 1])     \u5F00\u59CB\u586B\u5145\u6E10\u53D8\u8272
moveTo()                                                                \u79FB\u52A8\u753B\u7B14\u5230\u5F00\u59CB\u4F4D\u7F6E
lineTo()                                                                \u753B\u7EBF
drawRect(0.5, 0.5, 99, 99)                                              \u753B\u6B63\u65B9\u5F62
drawRoundRect(5, 5, 90, 90, 20)                                         \u753B\u5E26\u8FB9\u89D2\u7684\u6B63\u65B9\u5F62
drawCircle(2, 2, 48)                                                    \u753B\u5706
drawEllipse(5, 5, 90, 50)                                               \u753B\u692D\u5706
drawSVGPath(svgPath)                                                    \u753Bsvg\u56FE
endFill()                                                               \u7ED3\u675F\u586B\u5145\u989C\u8272
closePath()                                                             \u95ED\u5408\u8DEF\u5F84
addTo()                                                                 \u6DFB\u52A0\u5230\u821E\u53F0\u6216\u5BB9\u5668\u4E2D
</code></pre><h3 id="_7\u3001domelement-dom\u5143\u7D20\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#_7\u3001domelement-dom\u5143\u7D20\u5C01\u88C5" aria-hidden="true">#</a> 7\u3001DOMElement dom\u5143\u7D20\u5C01\u88C5</h3><pre><code>var content = &quot;Hello World! Hilo\u662F\u4E00\u6B3EHTML5 2D\u6E38\u620F\u5F15\u64CE\uFF0C\u6B22\u8FCE\u4F7F\u7528\u3002&quot;;

var rect = new Hilo.DOMElement({
    id: &#39;rect&#39;,
    element: Hilo.createElement(&#39;div&#39;, {                // \u521B\u5EFA\u5143\u7D20
        innerHTML: content,                             // \u8BBE\u7F6E\u6587\u672C\u5185\u5BB9
        style: {                                        // \u8BBE\u7F6E\u6837\u5F0F
            backgroundColor: &#39;#004eff&#39;,
            position: &#39;absolute&#39;
        }
    }),
    width: 100,                                         // \u5BBD\u9AD8
    height: 100,
    x: 50,                                              // \u521D\u59CB\u4F4D\u7F6E
    y: 70
}).addTo(stage);
</code></pre><h3 id="_8\u3001text-\u7B80\u5355\u6587\u672C" tabindex="-1"><a class="header-anchor" href="#_8\u3001text-\u7B80\u5355\u6587\u672C" aria-hidden="true">#</a> 8\u3001Text \u7B80\u5355\u6587\u672C</h3><pre><code>var font = &quot;14px arial&quot;;
var content = &quot;Hello World! Hilo\u662F\u4E00\u6B3EHTML5 2D\u6E38\u620F\u5F15\u64CE\uFF0C\u6B22\u8FCE\u4F7F\u7528\u3002&quot;;

// \u6DFB\u52A0\u6587\u672C
var text = new Hilo.Text({
    x: 40,
    y: 50,
    width: 250,
    height: 100,
    font: font,
    text: content,
    lineSpacing: 0,
}).addTo(stage);
</code></pre><h3 id="_9\u3001sprite-\u521B\u5EFA\u7CBE\u7075\u56FE" tabindex="-1"><a class="header-anchor" href="#_9\u3001sprite-\u521B\u5EFA\u7CBE\u7075\u56FE" aria-hidden="true">#</a> 9\u3001Sprite \u521B\u5EFA\u7CBE\u7075\u56FE</h3><pre><code>/******************* \u521B\u5EFA\uFF08\u4E00\u6761\u5C0F\u9C7C\uFF09\u7CBE\u7075\u56FE *******************/
var fish = new Hilo.Sprite({
    frames: atlas.getSprite(&#39;fish&#39;),
    x: Math.random()*stageWidth,    // \u968F\u673A\u4F4D\u7F6E
    y: Math.random()*stageHeight,
    interval: 6,
    timeBased: false,
    loop: false,    // \u662F\u5426\u5FAA\u73AF\uFF0C\u9ED8\u8BA4true
    alpha:1,
    tint:Math.random()*0xffffff,
    pivotX:87,
    pivotY:63
}).addTo(stage);

/*****************  \u521B\u5EFA\u591A\u6761\u8FD0\u52A8\u7684\u5C0F\u9C7C  *******************/
// \u5C0F\u9C7C\u8FD0\u52A8\u7684\u8303\u56F4
var maxX = stageWidth + 174;
var maxY = stageHeight + 126;
var minX = -174;
var minY = -126;
var num = 1;

// \u521B\u5EFA 5 \u6761\u5C0F\u9C7C
while(num--){
    var fish = new Hilo.Sprite({
        frames: atlas.getSprite(&#39;fish&#39;),
        x: Math.random()*stageWidth,
        y: Math.random()*stageHeight,
        rotation: Math.random()*360,
        interval: 6,
        onUpdate: function(){
            // x \u8F74\u8D85\u51FA\u8303\u56F4
            if(this.x &gt; maxX){ this.x = minX; }
            else if(this.x &lt; minX){ this.x = maxX; }
            // y \u8F74\u8D85\u51FA\u8303\u56F4
            if(this.y &gt; maxY){ this.y = minY; }
            else if(this.y &lt; minY){ this.y = maxY; }
            // \u5C0F\u9C7C\u8FD0\u52A8
            this.x += this.vx;
            this.y += this.vy;
        }
    }).addTo(stage);

    var speed = 2;
    // &gt; 0 \u5411\u4E0B  &lt; 0 \u5411\u4E0A
    fish.vy = Math.sin(fish.rotation*Math.PI/180) * speed;  
    // &gt; 0 \u5411\u53F3  &lt; 0 \u5411\u5DE6
    fish.vx = Math.cos(fish.rotation*Math.PI/180) * speed;
}
</code></pre><h2 id="util" tabindex="-1"><a class="header-anchor" href="#util" aria-hidden="true">#</a> util</h2><h3 id="_1\u3001textureatlas-\u521D\u59CB\u5316\u7CBE\u7075\u56FE" tabindex="-1"><a class="header-anchor" href="#_1\u3001textureatlas-\u521D\u59CB\u5316\u7CBE\u7075\u56FE" aria-hidden="true">#</a> 1\u3001TextureAtlas \u521D\u59CB\u5316\u7CBE\u7075\u56FE</h3><pre><code>// \u521D\u59CB\u5316\u7CBE\u7075\u56FE
var atlas = new Hilo.TextureAtlas({
    image: &#39;images/fish.png&#39;,        // \u5927\u80CC\u666F\u56FE 
    width: 174,
    height: 1512,
    frames: {                        
        frameWidth: 174,             // \u4E00\u4E2A\u5C0F\u56FE\u7684\u5BBD
        frameHeight: 126,            // \u4E00\u4E2A\u5C0F\u56FE\u7684\u9AD8
        numFrames: 12                // \u5C0F\u56FE\u7684\u4E2A\u6570
    },
    sprites: {                       // \u4ECE\u7B2C\u4E00\u5F20\u5230\u7B2C\u4E03\u5F20\u56FE\u53D8\u5316
        fish: {from:0, to:7}
    }
});
</code></pre><h3 id="_2\u3001ticker-\u5B9A\u65F6\u5668" tabindex="-1"><a class="header-anchor" href="#_2\u3001ticker-\u5B9A\u65F6\u5668" aria-hidden="true">#</a> 2\u3001Ticker \u5B9A\u65F6\u5668</h3><pre><code>var ticker = new Hilo.Ticker(60);
ticker.addTick(stage);
ticker.start();
</code></pre><h3 id="_3\u3001drag-\u62D6\u62FD" tabindex="-1"><a class="header-anchor" href="#_3\u3001drag-\u62D6\u62FD" aria-hidden="true">#</a> 3\u3001drag \u62D6\u62FD</h3><pre><code>// \u521B\u5EFA\u4E00\u53EA\u5C0F\u9C7C\u7684\u4F4D\u56FE
var bmp = new Hilo.Bitmap({
    image: &#39;images/fish.png&#39;,
    rect: [0, 0, 174, 126],
    x: container.x,
    y: container.y
}).addTo(stage);

// mix\u8BA9view\u6709\u62D6\u62FD\u529F\u80FD
Hilo.util.copy(bmp, Hilo.drag);
// \u8BBE\u7F6E\u63A8\u62FD\u8303\u56F4
bmp.startDrag([0, 0, 300, 300]);    

// \u62D6\u62FD\u4E8B\u4EF6
bmp.on(&quot;dragStart&quot;, function(e){ console.log(&quot;dragStart&quot;, e.detail.x, e.detail.y); });
bmp.on(&quot;dragEnd&quot;,  function(e){ });
bmp.on(&quot;dragMove&quot;, function(e){ });

// \u963B\u6B62\u9ED8\u8BA4\u4E8B\u4EF6
document.ontouchstart = function(e){
    e.preventDefault();
}
</code></pre><h2 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> event</h2><h3 id="_1\u3001mouseevent" tabindex="-1"><a class="header-anchor" href="#_1\u3001mouseevent" aria-hidden="true">#</a> 1\u3001mouseevent</h3><pre><code>(1) \u76EE\u524D\u652F\u6301 mousemove, mouseup, mousedown, mouseover, mouseout, \u652F\u6301\u4E8B\u4EF6\u5192\u6CE1;
(2) \u53EF\u4EE5\u901A\u8FC7 e.eventTarget \u548C e.eventCurrentTarget \u83B7\u5F97\u89E6\u53D1\u9F20\u6807\u4E8B\u4EF6\u7684\u5BF9\u8C61;
(3) \u5EFA\u8BAE\u4F7F\u7528 Hilo.event.POINTER_START, Hilo.event.POINTER_MOVE, Hilo.event.POINTER_END\uFF0C\u5B83\u5728pc\u4E0A\u5BF9\u5E94 mousemove, mouseup, mousedonw, \u5728\u624B\u673A\u4E0A\u5BF9\u5E94 touchstart, touchmove, touchend;

// \u5B9A\u4E49dom\u4E8B\u4EF6
stage.enableDOMEvent([Hilo.event.POINTER_START, Hilo.event.POINTER_MOVE, Hilo.event.POINTER_END]);

// \u7ED1\u5B9A\u4E8B\u4EF6
container.on(Hilo.event.POINTER_START, function(e){
    console.log(&quot;target:&quot; + e.eventTarget.id, &quot;, currentTarget:&quot; + e.eventCurrentTarget.id);
});

container.on(Hilo.event.POINTER_MOVE, function(e){});

container.on(&quot;mouseout&quot;, function(e){});

container.on(&quot;mouseover&quot;, function(e){});
</code></pre>`,32),r=[o];function d(h,l){return n(),t("div",null,r)}const c=e(i,[["render",d],["__file","13-Hilo\u4E4Bview\u3001util\u3001event.html.vue"]]);export{c as default};

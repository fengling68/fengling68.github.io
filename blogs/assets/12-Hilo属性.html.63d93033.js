import{_ as n,o as e,c as i,f as a}from"./app.52f83dae.js";const t={},o=a(`<h1 id="hilo\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#hilo\u5C5E\u6027" aria-hidden="true">#</a> Hilo\u5C5E\u6027</h1><h2 id="_1\u3001align-\u5BF9\u9F50\u65B9\u5F0F9\u79CD" tabindex="-1"><a class="header-anchor" href="#_1\u3001align-\u5BF9\u9F50\u65B9\u5F0F9\u79CD" aria-hidden="true">#</a> 1\u3001align \u5BF9\u9F50\u65B9\u5F0F9\u79CD</h2><pre><code>// \u521B\u5EFA\u5BB9\u5668
// aligin\u5BF9\u9F50\u65B9\u5F0F\u5C55\u793A
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
</code></pre><h2 id="_2\u3001background-\u80CC\u666F\u8272" tabindex="-1"><a class="header-anchor" href="#_2\u3001background-\u80CC\u666F\u8272" aria-hidden="true">#</a> 2\u3001background \u80CC\u666F\u8272</h2><pre><code>// \u5355\u4E00\u80CC\u666F\u8272
view.background = &quot;#f96&quot;;

// \u6E10\u53D8\u80CC\u666F\u8272
var gradient = stage.renderer.context.createLinearGradient(0, 0, 0, view.height);
gradient.addColorStop(0, &#39;#fc0&#39;);
gradient.addColorStop(0.5, &#39;#ff0&#39;);
gradient.addColorStop(1.0, &#39;#0f0&#39;);
view.background = gradient;
</code></pre><h2 id="_3\u3001blendmode-\u6DF7\u5408\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3\u3001blendmode-\u6DF7\u5408\u6A21\u5F0F" aria-hidden="true">#</a> 3\u3001blendMode \u6DF7\u5408\u6A21\u5F0F</h2><pre><code>// \u521B\u5EFA\u821E\u53F0\u3001\u5F00\u542F\u5B9A\u65F6\u5668\u3001\u6DFB\u52A0Bitmap\u80CC\u666F

// stage\u5141\u8BB8\u7684\u4E8B\u4EF6
stage.enableDOMEvent([Hilo.event.POINTER_START, Hilo.event.POINTER_MOVE, Hilo.event.POINTER_END]);

// \u521B\u5EFA\u65CB\u8F6C\u7684\u5C0F\u56FE
var bmp = new Hilo.Bitmap({
    image: &#39;images/fish.png&#39;,
    rect: [0, 0, 174, 126],
    x: 162,
    y: 113,
    pivotX:60,                          // \u539F\u5FC3
    pivotY:60,
    blendMode:&#39;destination-out&#39;,        // \u6DF7\u5408\u6A21\u5F0F\u7684\u65B9\u5411
    onUpdate:function(){     
        this.rotation ++;
    }
}).addTo(stage);

// \u521B\u5EFA\u7B14\u5237
brush = new Hilo.Graphics({
    blendMode:&#39;destination-out&#39;
}).addTo(stage);
// \u7B14\u5237\u6837\u5F0F
brush.lineStyle(30, &#39;#fff&#39;, 1, &#39;round&#39;, &#39;round&#39;);

// \u8FD9\u4E2A\u4E0D\u61C2 ? 
var removeFill = function(brush){
    brush._actions = brush._actions.filter(function(action){
        console.log( action[0] )
        if(action[0] === &#39;stroke&#39; || action[0] === &#39;fill&#39;){
            return false;
        }
        return true;
    });
};

// \u9F20\u6807\u662F\u5426\u6309\u4E0B\u7684\u6807\u5FD7
var isDown = false;

// \u9F20\u6807\u6309\u4E0B isDown = true; \u7B14\u5237\u5F00\u59CB\u79FB\u52A8
stage.on(Hilo.event.POINTER_START, function(e){
    if(!isDown){
        isDown = true;
        brush.moveTo(e.stageX, e.stageY);       // \u7B14\u5237\u79FB\u52A8\u5230\u8D77\u59CB\u70B9
    }
});

// \u9F20\u6807\u79FB\u52A8\u3001\u7B14\u5237\u79FB\u52A8
stage.on(Hilo.event.POINTER_MOVE, function(e){
    if(isDown){                    
        removeFill(brush);                      // \u6D88\u9664\u4E0A\u6B21\u7684\u7B14\u5237
        brush.lineTo(e.stageX, e.stageY);       // \u7B14\u5237\u753B\u7EBF
        brush.endFill();                        // \u7ED3\u675F\u586B\u5145
    }
});

// \u9F20\u6807\u62AC\u8D77 isDown = false;
stage.on(Hilo.event.POINTER_END, function(e){
    isDown = false;
});
</code></pre><h2 id="_4\u3001crossorigin-\u8DE8\u57DF" tabindex="-1"><a class="header-anchor" href="#_4\u3001crossorigin-\u8DE8\u57DF" aria-hidden="true">#</a> 4\u3001crossOrigin \u8DE8\u57DF</h2><pre><code>var bmp = new Hilo.Bitmap({
    image:&#39;https://gw.alicdn.com/tfs/TB1iNtERXXXXXcBaXXXXXXXXXXX-600-600.png_200x200.jpg&#39;,
    crossOrigin:&#39;Anonymous&#39;,
    y:300
}).addTo(stage);

\`\u6CE8\u610F\uFF1AWebGL\u6E32\u67D3\u65B9\u5F0F\u4E0B\uFF0C\u56FE\u7247\u8DE8\u57DF\u9700\u8981\u8BBE\u7F6EcrossDomain\u5934\u3002Loader\u548CBitmap\u90FD\u53EF\u4EE5\u52A0crossOrigin:&#39;Anonymous&#39;\u6765\u8BBE\u7F6E\u8DE8\u57DF\u5934\u3002\`
</code></pre><h2 id="_5\u3001\u65CB\u8F6C\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u65CB\u8F6C\u5C5E\u6027" aria-hidden="true">#</a> 5\u3001\u65CB\u8F6C\u5C5E\u6027</h2><pre><code>rotation: 45,       // \u65CB\u8F6C45\u5EA6
</code></pre><h2 id="_6\u3001\u5C4F\u5E55\u81EA\u9002\u5E94" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u5C4F\u5E55\u81EA\u9002\u5E94" aria-hidden="true">#</a> 6\u3001\u5C4F\u5E55\u81EA\u9002\u5E94</h2><pre><code>// \u57FA\u672C\u5BBD\u9AD8
var gameWidth = 1440;
var gameHeight = 900;

// \u521B\u5EFA\u821E\u53F0
var stage = new Hilo.Stage({
    renderType:&#39;canvas&#39;,
    container: document.getElementById(&quot;game-container&quot;),
    width: gameWidth,
    height: gameHeight,
    scaleX:innerWidth/gameWidth,
    scaleY:innerHeight/gameHeight
});

// \u521B\u5EFATicker
var ticker = new Hilo.Ticker(20);
ticker.addTick(stage);
ticker.start();

// \u521B\u5EFA\u80CC\u666F\u56FE
var bmp = new Hilo.Bitmap({
    image: &#39;images/map.jpg&#39;,
}).addTo(stage);

// window\u81EA\u9002\u5E94
window.onresize = function(){
    stage.scaleX = innerWidth/gameWidth;
    stage.scaleY = innerHeight/gameHeight;
    stage.resize(gameWidth, gameHeight, true);
};
</code></pre>`,13),r=[o];function d(s,c){return e(),i("div",null,r)}const l=n(t,[["render",d],["__file","12-Hilo\u5C5E\u6027.html.vue"]]);export{l as default};

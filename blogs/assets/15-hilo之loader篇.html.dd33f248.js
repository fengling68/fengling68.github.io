import{_ as e,o as n,c as a,f as o}from"./app.f94e1640.js";const t={},r=o(`<h1 id="hilo\u4E4Bloader\u7BC7" tabindex="-1"><a class="header-anchor" href="#hilo\u4E4Bloader\u7BC7" aria-hidden="true">#</a> hilo\u4E4Bloader\u7BC7</h1><h2 id="loaderqueue-\u4E0B\u8F7D\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#loaderqueue-\u4E0B\u8F7D\u961F\u5217" aria-hidden="true">#</a> LoaderQueue \u4E0B\u8F7D\u961F\u5217</h2><pre><code>// \u521B\u5EFA\u4E0B\u8F7D\u961F\u5217
var queue = new Hilo.LoadQueue([{
    id:&#39;hilo&#39;, 
    src:&#39;https://gw.alicdn.com/tfs/TB1iNtERXXXXXcBaXXXXXXXXXXX-600-600.png_200x200.jpg&#39;,
    crossOrigin:&#39;Anonymous&#39;
}]).on(&#39;complete&#39;, function(e){
    var bmp = new Hilo.Bitmap({
        image: queue.getContent(&#39;hilo&#39;)
    }).addTo(stage);
});

// \u5F00\u542F\u4E0B\u8F7D\u961F\u5217
queue.start();
</code></pre><ul><li></li></ul><pre><code>// \u521B\u5EFA\u4E0B\u8F7D\u961F\u5217
var queue = new Hilo.LoadQueue();

// \u8BBE\u7F6E\u6700\u5927\u8FDE\u63A5\u6570 \u9ED8\u8BA4\u4E3A2
queue.maxConnections = 1;

// \u6DFB\u52A0\u8D44\u6E90
queue.add([
    // \u672C\u5730\u8D44\u6E90
    {id:&#39;fish&#39;, noCache:true, src:&#39;images/fish.png&#39;},
    // \u7EBF\u4E0A\u8D44\u6E90
    {id:&#39;data&#39;, type:&#39;jsonp&#39;, callback:&#39;weekJSONP&#39;, src:&#39;http://img1.tbcdn.cn/L1/584/1/20.js&#39;}
]);

// css loader
queue.add({id:&#39;taobao_css&#39;, type:&#39;css&#39;, src:&#39;http://g.tbcdn.cn/tbc/tmsg/3.0.2/index-min.css&#39;, loader:{
    load: function(data){
        var link = document.createElement(&#39;link&#39;);
        link.type = &#39;text/css&#39;;
        link.rel = &#39;stylesheet&#39;;
        if(data.id) link.id = data.id;
        link.addEventListener(&#39;load&#39;, this.onLoad.bind(this), false);
        link.addEventListener(&#39;error&#39;, this.onError.bind(this), false);
        link.href = data.src;
        document.getElementsByTagName(&#39;head&#39;)[0].appendChild(link);
    },
    onLoad: function(e){
        console.log(&#39;\u6211\u5728quere.on(&quot;load&quot;)\u524D\u6267\u884C&#39;)
        return e.target;
    },
    onError: function(e){
        return e;
    }
}});

// \u7ED9 queue \u7ED1\u5B9A\u4E8B\u4EF6
queue.on(&#39;load&#39;, function(e){
    console.log(e.detail.src , queue.getLoaded() , queue.getTotal());
}).on(&#39;complete&#39;, function(e){
    // \u5176\u4ED6\u64CD\u4F5C\uFF0C\u6BD4\u5982\u521B\u5EFA\u9759\u6001\u4F4D\u56FE
}).on(&#39;error&#39;, function(e){
    console.log(e.detail.src);
});

// \u5F00\u542F\u4E0B\u8F7D\u5668
queue.start();
</code></pre><h1 id="tween" tabindex="-1"><a class="header-anchor" href="#tween" aria-hidden="true">#</a> tween</h1><h2 id="ease-\u7F13\u52A8\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#ease-\u7F13\u52A8\u51FD\u6570" aria-hidden="true">#</a> Ease \u7F13\u52A8\u51FD\u6570</h2><pre><code>// ease \u4EE3\u8868\u7F13\u52A8\u7684\u53D8\u5316\u7387

var easeTypeNames = [&#39;Quad&#39;, &#39;Cubic&#39;, &#39;Quart&#39;, &#39;Quint&#39;, &#39;Sine&#39;, &#39;Expo&#39;, &#39;Circ&#39;, &#39;Elastic&#39;, &#39;Back&#39;, &#39;Bounce&#39;, &#39;Linear&#39;];
var easeFunctionNames = [&#39;EaseNone&#39;, &#39;EaseIn&#39;, &#39;EaseOut&#39;, &#39;EaseInOut&#39;];
var easeType = Hilo.Ease[easeTypeName];
var easeFunction = easeType[easeFunctionName];
</code></pre><h2 id="tween-hilo-ease-\u8FD0\u52A8" tabindex="-1"><a class="header-anchor" href="#tween-hilo-ease-\u8FD0\u52A8" aria-hidden="true">#</a> Tween ( Hilo.Ease ) \u8FD0\u52A8</h2><pre><code>// \u58F0\u660E Tween \u7C7B
var Tween = Hilo.Tween;     

// \u521B\u5EFA\u5B9A\u65F6\u5668
var ticker = new Hilo.Ticker(60);
ticker.addTick(Tween);      // \u6DFB\u52A0tween\u7C7B
ticker.start();

// \u521B\u5EFA500\u4E2A\u5C0F\u65B9\u5757
var boxes = [];
var total = 500;
for(var i = 0; i &lt; total; i++){
    var box = document.createElement(&#39;div&#39;);
    box.id = &#39;box&#39; + i;
    box.className = &#39;box&#39;;
    gameContainer.appendChild(box);
    boxes[i] = box;
}
// \u7FFB\u8F6C\u65B9\u5757 \u2014\u2014 \u4F7F\u65B9\u5757\u4ECE\u6700\u540E\u4E00\u4E2A\u5F00\u59CB\u8FD0\u52A8
// boxes.reverse();         

// \u5C0F\u65B9\u5757\u8FD0\u52A8
Tween.to(boxes, {y:400}, {
    duration: 1000,         // duration \u548C stagger \u5F71\u54CD\u52A8\u753B\u8FD0\u52A8\u65F6\u95F4\u548C\u5E45\u5EA6
    stagger: 10,            // stagger \u9519\u5F00
    ease: Hilo.Ease.Elastic.EaseOut,
    onUpdate: function (ratio, tween) {
        tween.target.style.webkitTransform = &#39;translate(0,&#39; + tween.target.y + &#39;px)&#39;;
    }
});
</code></pre><h2 id="tween-link-\u8FD0\u52A8" tabindex="-1"><a class="header-anchor" href="#tween-link-\u8FD0\u52A8" aria-hidden="true">#</a> Tween ( .link ) \u8FD0\u52A8</h2><pre><code>// \u63D0\u524D\u58F0\u660E Tween
var Tween = Hilo.Tween;

// \u521B\u5EFAticker
var ticker = new Hilo.Ticker(60);
ticker.addTick(Tween);
ticker.start();

// \u521B\u5EFA box \uFF0C\u6DFB\u52A0\u8D77\u59CB\u4F4D\u7F6E
var box = document.createElement(&#39;div&#39;);
box.id = &#39;box&#39;;
box.className = &#39;box&#39;;
box.x = 0;
box.y = 0;
gameContainer.appendChild(box);

// \u6DFB\u52A0\u7F13\u52A8\u52A8\u753B(\u8FD0\u52A8\u7269\u4F53\uFF0C\u7ED3\u675F\u4F4D\u7F6E\uFF0C\u53C2\u6570)
Tween.to(box, {x:50, y:50}, {
    duration: 500,
    onUpdate: boxMove,
    onComplete: runLink
});

// \u5FAA\u73AF\u8FD0\u52A8
function runLink(){
    Tween.to(box, {x:50, y:150}, {
        duration: 500,        // \u8FD0\u52A8\u65F6\u957F  
        onUpdate: boxMove
    }).link(
        Tween.to(box, {x:150}, {
            duration: 500,
            onUpdate: boxMove,
            delay:&#39;+0&#39;            // .link\u4E2D\u4E00\u5B9A\u8981\u52A0delay\u5C5E\u6027\uFF0C\u53EF\u4E3A 0 
        })
    ).link(
        Tween.to(box, {y:50}, {
            duration: 500,
            onUpdate: boxMove,
            delay:&#39;+1000&#39;         // .link\u4E2D\u4E00\u5B9A\u8981\u52A0delay\u5C5E\u6027\uFF0C\u53EF\u4E3A 0
        })
    ).link(
        Tween.to(box, {x:50}, {
            duration: 500,
            onUpdate: boxMove,
            delay:&#39;+0&#39;,
            onComplete:runLink
        })
    )
}

// \u8FD0\u52A8\u64CD\u4F5C\u7684\u5B9E\u73B0
function boxMove(ratio, tween){
    tween.target.style.webkitTransform = &#39;translate(&#39; + tween.target.x + &#39;px,&#39; + tween.target.y + &#39;px)&#39;;
}
</code></pre>`,12),i=[r];function d(s,l){return n(),a("div",null,i)}const u=e(t,[["render",d],["__file","15-hilo\u4E4Bloader\u7BC7.html.vue"]]);export{u as default};

import{_ as e,o as n,c as a,f as o}from"./app.26d50059.js";const t={},r=o(`<h1 id="hilo之loader篇" tabindex="-1"><a class="header-anchor" href="#hilo之loader篇" aria-hidden="true">#</a> hilo之loader篇</h1><h2 id="loaderqueue-下载队列" tabindex="-1"><a class="header-anchor" href="#loaderqueue-下载队列" aria-hidden="true">#</a> LoaderQueue 下载队列</h2><pre><code>// 创建下载队列
var queue = new Hilo.LoadQueue([{
    id:&#39;hilo&#39;, 
    src:&#39;https://gw.alicdn.com/tfs/TB1iNtERXXXXXcBaXXXXXXXXXXX-600-600.png_200x200.jpg&#39;,
    crossOrigin:&#39;Anonymous&#39;
}]).on(&#39;complete&#39;, function(e){
    var bmp = new Hilo.Bitmap({
        image: queue.getContent(&#39;hilo&#39;)
    }).addTo(stage);
});

// 开启下载队列
queue.start();
</code></pre><ul><li></li></ul><pre><code>// 创建下载队列
var queue = new Hilo.LoadQueue();

// 设置最大连接数 默认为2
queue.maxConnections = 1;

// 添加资源
queue.add([
    // 本地资源
    {id:&#39;fish&#39;, noCache:true, src:&#39;images/fish.png&#39;},
    // 线上资源
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
        console.log(&#39;我在quere.on(&quot;load&quot;)前执行&#39;)
        return e.target;
    },
    onError: function(e){
        return e;
    }
}});

// 给 queue 绑定事件
queue.on(&#39;load&#39;, function(e){
    console.log(e.detail.src , queue.getLoaded() , queue.getTotal());
}).on(&#39;complete&#39;, function(e){
    // 其他操作，比如创建静态位图
}).on(&#39;error&#39;, function(e){
    console.log(e.detail.src);
});

// 开启下载器
queue.start();
</code></pre><h1 id="tween" tabindex="-1"><a class="header-anchor" href="#tween" aria-hidden="true">#</a> tween</h1><h2 id="ease-缓动函数" tabindex="-1"><a class="header-anchor" href="#ease-缓动函数" aria-hidden="true">#</a> Ease 缓动函数</h2><pre><code>// ease 代表缓动的变化率

var easeTypeNames = [&#39;Quad&#39;, &#39;Cubic&#39;, &#39;Quart&#39;, &#39;Quint&#39;, &#39;Sine&#39;, &#39;Expo&#39;, &#39;Circ&#39;, &#39;Elastic&#39;, &#39;Back&#39;, &#39;Bounce&#39;, &#39;Linear&#39;];
var easeFunctionNames = [&#39;EaseNone&#39;, &#39;EaseIn&#39;, &#39;EaseOut&#39;, &#39;EaseInOut&#39;];
var easeType = Hilo.Ease[easeTypeName];
var easeFunction = easeType[easeFunctionName];
</code></pre><h2 id="tween-hilo-ease-运动" tabindex="-1"><a class="header-anchor" href="#tween-hilo-ease-运动" aria-hidden="true">#</a> Tween ( Hilo.Ease ) 运动</h2><pre><code>// 声明 Tween 类
var Tween = Hilo.Tween;     

// 创建定时器
var ticker = new Hilo.Ticker(60);
ticker.addTick(Tween);      // 添加tween类
ticker.start();

// 创建500个小方块
var boxes = [];
var total = 500;
for(var i = 0; i &lt; total; i++){
    var box = document.createElement(&#39;div&#39;);
    box.id = &#39;box&#39; + i;
    box.className = &#39;box&#39;;
    gameContainer.appendChild(box);
    boxes[i] = box;
}
// 翻转方块 —— 使方块从最后一个开始运动
// boxes.reverse();         

// 小方块运动
Tween.to(boxes, {y:400}, {
    duration: 1000,         // duration 和 stagger 影响动画运动时间和幅度
    stagger: 10,            // stagger 错开
    ease: Hilo.Ease.Elastic.EaseOut,
    onUpdate: function (ratio, tween) {
        tween.target.style.webkitTransform = &#39;translate(0,&#39; + tween.target.y + &#39;px)&#39;;
    }
});
</code></pre><h2 id="tween-link-运动" tabindex="-1"><a class="header-anchor" href="#tween-link-运动" aria-hidden="true">#</a> Tween ( .link ) 运动</h2><pre><code>// 提前声明 Tween
var Tween = Hilo.Tween;

// 创建ticker
var ticker = new Hilo.Ticker(60);
ticker.addTick(Tween);
ticker.start();

// 创建 box ，添加起始位置
var box = document.createElement(&#39;div&#39;);
box.id = &#39;box&#39;;
box.className = &#39;box&#39;;
box.x = 0;
box.y = 0;
gameContainer.appendChild(box);

// 添加缓动动画(运动物体，结束位置，参数)
Tween.to(box, {x:50, y:50}, {
    duration: 500,
    onUpdate: boxMove,
    onComplete: runLink
});

// 循环运动
function runLink(){
    Tween.to(box, {x:50, y:150}, {
        duration: 500,        // 运动时长  
        onUpdate: boxMove
    }).link(
        Tween.to(box, {x:150}, {
            duration: 500,
            onUpdate: boxMove,
            delay:&#39;+0&#39;            // .link中一定要加delay属性，可为 0 
        })
    ).link(
        Tween.to(box, {y:50}, {
            duration: 500,
            onUpdate: boxMove,
            delay:&#39;+1000&#39;         // .link中一定要加delay属性，可为 0
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

// 运动操作的实现
function boxMove(ratio, tween){
    tween.target.style.webkitTransform = &#39;translate(&#39; + tween.target.x + &#39;px,&#39; + tween.target.y + &#39;px)&#39;;
}
</code></pre>`,12),i=[r];function d(s,l){return n(),a("div",null,i)}const u=e(t,[["render",d],["__file","15-hilo之loader篇.html.vue"]]);export{u as default};

import{_ as n,o as e,c as a,d as t}from"./app.8d44daf6.js";const i={},r=t(`<h1 id="hilo\u4E4Bgame-\u76F8\u673A\u548C\u7C92\u5B50\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#hilo\u4E4Bgame-\u76F8\u673A\u548C\u7C92\u5B50\u7CFB\u7EDF" aria-hidden="true">#</a> hilo\u4E4Bgame\uFF08\u76F8\u673A\u548C\u7C92\u5B50\u7CFB\u7EDF\uFF09</h1><h2 id="_1\u3001camera-\u666E\u901A\u76F8\u673A" tabindex="-1"><a class="header-anchor" href="#_1\u3001camera-\u666E\u901A\u76F8\u673A" aria-hidden="true">#</a> 1\u3001Camera \u666E\u901A\u76F8\u673A</h2><pre><code>// \u521B\u5EFAtween\u7C7B
var Tween = Hilo.Tween;

// \u521B\u5EFA\u821E\u53F0
var stage = new Hilo.Stage({
    renderType: &#39;canvas&#39;,
    container: document.getElementById(&quot;wrap&quot;),
    width: 500,
    height: 500
});

// \u521B\u5EFA\u5730\u56FE
var map = new Hilo.Container({
    width: 1000,
    height: 1000
}).addTo(stage);
var bg = window.bg = new Hilo.Bitmap({
    image: &#39;images/map.jpg&#39;,
    width: 1000,
    height: 1000
}).addTo(map);

// \u521B\u5EFA\u6444\u50CF\u673A\uFF0C\u8BBE\u7F6E\u8FB9\u754C\uFF0Cdeadzone
var deadzone = [50,50,100,100];
var camera = new Hilo.Camera({
    width:500,
    height:500,
    bounds:[0, 0, 1000, 1000],      // \u6355\u6349\u8303\u56F4
    deadzone: deadzone              // \u76F2\u533A
});

// \u663E\u793Adeadzone\u533A\u57DF
stage.addChild(new Hilo.View({
    x:camera.deadzone[0],
    y:camera.deadzone[1],
    width:camera.deadzone[2],
    height:camera.deadzone[3],
    background:&quot;rgba(255, 0, 0, 0.3)&quot;
}));

// \u521B\u5EFA\u7B2C\u4E00\u53EA\u9C7C
var fish0 = new Hilo.Bitmap({
    image: &#39;images/fish.png&#39;,
    rect: [0, 0, 174, 126],     // \u56FE\u7247\u5927\u5C0F
    x: 100,          // \u521D\u59CB\u4F4D\u7F6E
    y: 100,          // \u521D\u59CB\u4F4D\u7F6E
    scaleX: 0.5,     // \u7F29\u5C0F
    scaleY: 0.5,     // \u7F29\u5C0F
    pivotX: 174,     // \u9C7C\u76F8\u5BF9\u4E8Edeadzone\u7684\u4F4D\u7F6E
    pivotY: 55,      // \u9C7C\u76F8\u5BF9\u4E8Edeadzone\u7684\u4F4D\u7F6E
    onUpdate:function(){
        this.x +=this.speed;
        if(this.x &gt; 950 || this.x &lt; 0){
            this.speed *= -1;
            this.scaleX *= -1;
        }
    }
}).addTo(map);
fish0.speed = 2;

// \u521B\u5EFA\u7B2C\u4E8C\u53EA\u9C7C
var fish1 = new Hilo.Bitmap({
    image: &#39;images/fish.png&#39;,
    rect: [0, 0, 174, 126],
    x: 100,
    y: 100,
    scaleX: 0.5,
    scaleY: 0.5,
    pivotX: 174,
    pivotY: 55,
    rotation:90,
    onUpdate:function(){
        this.y +=this.speed;
        if(this.y &gt; 950 || this.y &lt; 0){
            this.speed *= -1;
            this.scaleX *= -1;
        }
    }
}).addTo(map);
fish1.speed = 2;

// \u5F00\u542F\u5B9A\u65F6\u5668
var ticker = new Hilo.Ticker(60);
ticker.addTick(stage);
ticker.addTick(camera);
ticker.addTick(Tween);
ticker.start();

// map\u8DDF\u968F\u6444\u50CF\u673A\u6EDA\u52A8
ticker.addTick({
    tick:function(){
        map.x = - camera.scroll.x;
        map.y = - camera.scroll.y;
    }
});

// \u6444\u50CF\u673A\u8DDF\u7740\u9C7C\u6EDA\u52A8
camera.follow(fish1);

// \u5207\u6362\u6444\u50CF\u673A\u8DDF\u968F\u5BF9\u8C61
var tween;
document.body.onclick = function(){
    var target = camera.target == fish1?fish0:fish1;
    // \u8981\u8DDF\u968F\u7684\u9C7C\u7684\u5750\u6807\u70B9
    var pos = {
        x:camera.target.x,
        y:camera.target.y
    };
    // \u79FB\u9664\u4E0A\u6B21\u7684\u8DDF\u968F\u5BF9\u8C61
    Tween.remove(tween);
    // \u8DDF\u968F\u5F53\u524D\u7684\u9C7C
    tween = Tween.to(pos,{
        x:target.x,
        y:target.y
    },{
        duration:500,
        onComplete:function(){
            camera.follow(target, deadzone);
        }
    })
    // \u9C7C\u5728\u8FD0\u52A8\uFF0C\u91CD\u65B0\u8FFD\u8E2A\u4E00\u6B21
    camera.follow(pos, null);
}
</code></pre><h2 id="_2\u3001camera3d-3d\u76F8\u673A-\u672A\u5B8C\u6210" tabindex="-1"><a class="header-anchor" href="#_2\u3001camera3d-3d\u76F8\u673A-\u672A\u5B8C\u6210" aria-hidden="true">#</a> 2\u3001Camera3d 3D\u76F8\u673A \uFF08\u672A\u5B8C\u6210\uFF09</h2><h2 id="_3\u3001particlesystem\u7C92\u5B50\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#_3\u3001particlesystem\u7C92\u5B50\u7CFB\u7EDF" aria-hidden="true">#</a> 3\u3001ParticleSystem\u7C92\u5B50\u7CFB\u7EDF</h2><pre><code>// \u7C92\u5B50\u80CC\u666F\u56FE
var img = document.getElementById(&quot;texture&quot;);
// \u521B\u5EFA\u7C92\u5B50\u7CFB\u7EDF
var particleSystem = new Hilo.ParticleSystem({
    x:0,                             
    y:0,
    emitNum:5,                       // \u7C92\u5B50\u4E2A\u6570
    emitTime:1,                      // \u65F6\u95F4\u95F4\u9694
    particle:{                       // \u7C92\u5B50                   
        image:img,                   // \u7C92\u5B50\u80CC\u666F\u56FE
        life:22,
        alphaV:-.01,
        vxVar: 100,                   // x \u8F74\u65B9\u5411\u6C34\u5E73\u6563\u5F00
        vyVar: 300,                   // y \u8F74\u65B9\u5411\u5782\u76F4\u6563\u5F00
        axVar: 500,                   // z \u8F74\u6C34\u5E73\u6563\u5F00      
        ayVar: 200,                   // z \u8F74\u5782\u76F4\u6563\u5F00
        scale: 0.8,                   // \u7F29\u5C0F\u653E\u5927
        rotationVar:360,              // \u65CB\u8F6C\u76F8\u5173
        rotationVVar: 10,             // \u65CB\u8F6C\u76F8\u5173
        pivotX:.5,                    // \u4E2D\u5FC3\u70B9
        pivotY:.5,
        frame:[                      // \u5E27
            [75, 236, 7, 11],
            [111, 160, 17, 46],
            [68, 236, 7, 11],
            [112, 223, 7, 17],
            [0, 0, 30, 99]
        ]
    }
});
// \u6DFB\u52A0\u7C92\u5B50\u7CFB\u7EDF
stage.addChild(particleSystem);
// \u5F00\u542F\u7C92\u5B50\u7CFB\u7EDF
particleSystem.start();

// \u5728\u5B9A\u65F6\u5668\u4E2D\u8BBE\u7F6E\u7C92\u5B50\u7CFB\u7EDF\u7684\u968F\u673A\u4F4D\u7F6E
ticker.addTick({
    tick:function(){
        particleSystem.emitterX = Math.random() * winWidth;
        particleSystem.emitterY = Math.random() * winHeight;
    }
})
</code></pre>`,6),d=[r];function o(c,s){return e(),a("div",null,d)}const m=n(i,[["render",o],["__file","14-hilo\u4E4Bgame.html.vue"]]);export{m as default};

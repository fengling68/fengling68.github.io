import{_ as n,o as a,c as r,e as o,a as e,b as i,f as t}from"./app.d9b83bc9.js";const d={},s=e("h1",{id:"hilo认识",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hilo认识","aria-hidden":"true"},"#"),i(" Hilo认识")],-1),c=e("p",null,"Hilo是阿里开发的一款游戏框架，这是摘要啊，Hilo是阿里开发的一款游戏框架，这是摘要啊，Hilo是阿里开发的一款游戏框架，这是摘要啊，Hilo是阿里开发的一款游戏框架，这是摘要啊，Hilo是阿里开发的一款游戏框架，这是摘要啊，Hilo是阿里开发的一款游戏框架，这是摘要啊，Hilo是阿里开发的一款游戏框架，这是摘要啊。",-1),l=t(`<h2 id="_1、简介" tabindex="-1"><a class="header-anchor" href="#_1、简介" aria-hidden="true">#</a> 1、简介</h2><pre><code>Hilo是阿里开发的一款游戏框架
</code></pre><h2 id="_2、版本选择" tabindex="-1"><a class="header-anchor" href="#_2、版本选择" aria-hidden="true">#</a> 2、版本选择</h2><pre><code>amd
cmd
commonjs           node、ES6语法 \`import Sprite from &#39;../js/Hilo/view/Sprite&#39;;\`
dragonbones
flash
kissy
physics
standalone         独立版本 \`&lt;script src=&quot;hilo-standalone.js&quot;&gt;&lt;/script&gt;\`
</code></pre><h2 id="_3、全部分类" tabindex="-1"><a class="header-anchor" href="#_3、全部分类" aria-hidden="true">#</a> 3、全部分类</h2><pre><code>core                        核心
    Class                       类的创建
    Hilo                        hilo核心方法
event                       事件
    EventMixin                  事件相关
game                        游戏相关
    Camera                      摄像机
    Camera3d                    3D虚拟摄像机
    ParticleSystem              粒子系统
geom                        几何学
    Matrix                      转换矩阵
loader                      加载
    LoadQueue                   队列下载工具
media                       媒体
    HTMLAudio                   声音播放模块
    WebAudio                    声音播放模块
    WebSound                    声音播放管理器
renderer                    渲染
    CanvasRenderer              canvas渲染器
    DOMRenderer                 dom+css3渲染器
    WebGLRenderer               webGl渲染器
    Renderer                    基类
tween                       tween类
    Ease                        缓动函数
    Tween                       缓动
util                        工具
    TextureAtlas                将许多小图合成大图，精灵图               
    Ticker                      定时器，按指定帧运行                        
    browser                     浏览器相关
    drag                        拖拽相关
    util                        方法集
view                        视图
    Bitmap                      位图图像
    BitmapText                  位图文本，，单行
    Button                      按钮
    CacheMixin                  缓存
    Container                   容器
    DOMElement                  dom元素，复杂文本显示
    Drawable                    可绘制图像的包装
    Graphics                    创建矢量图形
    Sprite                      动画精灵
   \`Stage                       舞台，hilo动画从创建一个state开始\`          
    Text                        简单文本显示
    View                        可视化对象组件的基类
</code></pre><h2 id="_4、练习时踩的坑" tabindex="-1"><a class="header-anchor" href="#_4、练习时踩的坑" aria-hidden="true">#</a> 4、练习时踩的坑</h2><pre><code>(1)注意 Hilo.ClassName() 每个类的第一个字母要大写，否则会报错 XXX is not a constructor；
(2)一定要将创建的对象添加到舞台  .addTo(stage)  或容器  .addTo(container)  中，不然会一片空白；
(3)创建 Ticker 定时器后要将其他Class，比如舞台、容器等添加到ticker中；
(4)一些后面使用的Class，需要添加到 Ticker 中的类，一定要在顶部声明；
(5)可以将一些公用的属性，比如宽高等定义为全局变量；
</code></pre>`,8);function h(_,m){return a(),r("div",null,[s,c,o(" more "),l])}const u=n(d,[["render",h],["__file","11-Hilo认识.html.vue"]]);export{u as default};

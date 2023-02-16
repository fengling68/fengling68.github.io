import{_ as n,o as s,c as a,f as p}from"./app.fa375d3e.js";const t={},o=p(`<h1 id="hilo-之-game-相机和粒子系统" tabindex="-1"><a class="header-anchor" href="#hilo-之-game-相机和粒子系统" aria-hidden="true">#</a> hilo 之 game（相机和粒子系统）</h1><h2 id="_1、camera-普通相机" tabindex="-1"><a class="header-anchor" href="#_1、camera-普通相机" aria-hidden="true">#</a> 1、Camera 普通相机</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建tween类</span>
<span class="token keyword">var</span> Tween <span class="token operator">=</span> Hilo<span class="token punctuation">.</span>Tween<span class="token punctuation">;</span>

<span class="token comment">// 创建舞台</span>
<span class="token keyword">var</span> stage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hilo<span class="token punctuation">.</span>Stage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">renderType</span><span class="token operator">:</span> <span class="token string">&quot;canvas&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">container</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;wrap&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建地图</span>
<span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hilo<span class="token punctuation">.</span>Container</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>stage<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> bg <span class="token operator">=</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>bg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hilo<span class="token punctuation">.</span>Bitmap</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token string">&quot;images/map.jpg&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建摄像机，设置边界，deadzone</span>
<span class="token keyword">var</span> deadzone <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> camera <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hilo<span class="token punctuation">.</span>Camera</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bounds</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 捕捉范围</span>
  <span class="token literal-property property">deadzone</span><span class="token operator">:</span> deadzone<span class="token punctuation">,</span> <span class="token comment">// 盲区</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 显示deadzone区域</span>
stage<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>
  <span class="token keyword">new</span> <span class="token class-name">Hilo<span class="token punctuation">.</span>View</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> camera<span class="token punctuation">.</span>deadzone<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> camera<span class="token punctuation">.</span>deadzone<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> camera<span class="token punctuation">.</span>deadzone<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> camera<span class="token punctuation">.</span>deadzone<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255, 0, 0, 0.3)&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建第一只鱼</span>
<span class="token keyword">var</span> fish0 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hilo<span class="token punctuation">.</span>Bitmap</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token string">&quot;images/fish.png&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rect</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">174</span><span class="token punctuation">,</span> <span class="token number">126</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 图片大小</span>
  <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">// 初始位置</span>
  <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">// 初始位置</span>
  <span class="token literal-property property">scaleX</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token comment">// 缩小</span>
  <span class="token literal-property property">scaleY</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token comment">// 缩小</span>
  <span class="token literal-property property">pivotX</span><span class="token operator">:</span> <span class="token number">174</span><span class="token punctuation">,</span> <span class="token comment">// 鱼相对于deadzone的位置</span>
  <span class="token literal-property property">pivotY</span><span class="token operator">:</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token comment">// 鱼相对于deadzone的位置</span>
  <span class="token function-variable function">onUpdate</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>speed<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">&gt;</span> <span class="token number">950</span> <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>speed <span class="token operator">*=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>scaleX <span class="token operator">*=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
fish0<span class="token punctuation">.</span>speed <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token comment">// 创建第二只鱼</span>
<span class="token keyword">var</span> fish1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hilo<span class="token punctuation">.</span>Bitmap</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token string">&quot;images/fish.png&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rect</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">174</span><span class="token punctuation">,</span> <span class="token number">126</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token literal-property property">scaleX</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
  <span class="token literal-property property">scaleY</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pivotX</span><span class="token operator">:</span> <span class="token number">174</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pivotY</span><span class="token operator">:</span> <span class="token number">55</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rotation</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onUpdate</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>speed<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">&gt;</span> <span class="token number">950</span> <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>speed <span class="token operator">*=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>scaleX <span class="token operator">*=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
fish1<span class="token punctuation">.</span>speed <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token comment">// 开启定时器</span>
<span class="token keyword">var</span> ticker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hilo<span class="token punctuation">.</span>Ticker</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ticker<span class="token punctuation">.</span><span class="token function">addTick</span><span class="token punctuation">(</span>stage<span class="token punctuation">)</span><span class="token punctuation">;</span>
ticker<span class="token punctuation">.</span><span class="token function">addTick</span><span class="token punctuation">(</span>camera<span class="token punctuation">)</span><span class="token punctuation">;</span>
ticker<span class="token punctuation">.</span><span class="token function">addTick</span><span class="token punctuation">(</span>Tween<span class="token punctuation">)</span><span class="token punctuation">;</span>
ticker<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// map跟随摄像机滚动</span>
ticker<span class="token punctuation">.</span><span class="token function">addTick</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">tick</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    map<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token operator">-</span>camera<span class="token punctuation">.</span>scroll<span class="token punctuation">.</span>x<span class="token punctuation">;</span>
    map<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token operator">-</span>camera<span class="token punctuation">.</span>scroll<span class="token punctuation">.</span>y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 摄像机跟着鱼滚动</span>
camera<span class="token punctuation">.</span><span class="token function">follow</span><span class="token punctuation">(</span>fish1<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 切换摄像机跟随对象</span>
<span class="token keyword">var</span> tween<span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> target <span class="token operator">=</span> camera<span class="token punctuation">.</span>target <span class="token operator">==</span> fish1 <span class="token operator">?</span> fish0 <span class="token operator">:</span> fish1<span class="token punctuation">;</span>
  <span class="token comment">// 要跟随的鱼的坐标点</span>
  <span class="token keyword">var</span> pos <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> camera<span class="token punctuation">.</span>target<span class="token punctuation">.</span>x<span class="token punctuation">,</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> camera<span class="token punctuation">.</span>target<span class="token punctuation">.</span>y<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// 移除上次的跟随对象</span>
  Tween<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>tween<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 跟随当前的鱼</span>
  tween <span class="token operator">=</span> Tween<span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span>
    pos<span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">x</span><span class="token operator">:</span> target<span class="token punctuation">.</span>x<span class="token punctuation">,</span>
      <span class="token literal-property property">y</span><span class="token operator">:</span> target<span class="token punctuation">.</span>y<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
      <span class="token function-variable function">onComplete</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        camera<span class="token punctuation">.</span><span class="token function">follow</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> deadzone<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 鱼在运动，重新追踪一次</span>
  camera<span class="token punctuation">.</span><span class="token function">follow</span><span class="token punctuation">(</span>pos<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="_2、camera3d-3d-相机-未完成" tabindex="-1"><a class="header-anchor" href="#_2、camera3d-3d-相机-未完成" aria-hidden="true">#</a> 2、Camera3d 3D 相机 （未完成）</h2><h2 id="_3、particlesystem-粒子系统" tabindex="-1"><a class="header-anchor" href="#_3、particlesystem-粒子系统" aria-hidden="true">#</a> 3、ParticleSystem 粒子系统</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 粒子背景图</span>
<span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;texture&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建粒子系统</span>
<span class="token keyword">var</span> particleSystem <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hilo<span class="token punctuation">.</span>ParticleSystem</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">emitNum</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 粒子个数</span>
  <span class="token literal-property property">emitTime</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 时间间隔</span>
  <span class="token literal-property property">particle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 粒子</span>
    <span class="token literal-property property">image</span><span class="token operator">:</span> img<span class="token punctuation">,</span> <span class="token comment">// 粒子背景图</span>
    <span class="token literal-property property">life</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alphaV</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">0.01</span><span class="token punctuation">,</span>
    <span class="token literal-property property">vxVar</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">// x 轴方向水平散开</span>
    <span class="token literal-property property">vyVar</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token comment">// y 轴方向垂直散开</span>
    <span class="token literal-property property">axVar</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token comment">// z 轴水平散开</span>
    <span class="token literal-property property">ayVar</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token comment">// z 轴垂直散开</span>
    <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span> <span class="token comment">// 缩小放大</span>
    <span class="token literal-property property">rotationVar</span><span class="token operator">:</span> <span class="token number">360</span><span class="token punctuation">,</span> <span class="token comment">// 旋转相关</span>
    <span class="token literal-property property">rotationVVar</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 旋转相关</span>
    <span class="token literal-property property">pivotX</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token comment">// 中心点</span>
    <span class="token literal-property property">pivotY</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
    <span class="token literal-property property">frame</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 帧</span>
      <span class="token punctuation">[</span><span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">236</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token number">111</span><span class="token punctuation">,</span> <span class="token number">160</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">,</span> <span class="token number">46</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token number">68</span><span class="token punctuation">,</span> <span class="token number">236</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token number">112</span><span class="token punctuation">,</span> <span class="token number">223</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 添加粒子系统</span>
stage<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>particleSystem<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 开启粒子系统</span>
particleSystem<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 在定时器中设置粒子系统的随机位置</span>
ticker<span class="token punctuation">.</span><span class="token function">addTick</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">tick</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    particleSystem<span class="token punctuation">.</span>emitterX <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> winWidth<span class="token punctuation">;</span>
    particleSystem<span class="token punctuation">.</span>emitterY <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> winHeight<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,6),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","14-hilo之game.html.vue"]]);export{r as default};

import{_ as o,o as a,c as e,f as d}from"./app.40d45622.js";const t={},n=d(`<h1 id="video和audio" tabindex="-1"><a class="header-anchor" href="#video和audio" aria-hidden="true">#</a> video和audio</h1><h2 id="一、音频-audio-视频-video" tabindex="-1"><a class="header-anchor" href="#一、音频-audio-视频-video" aria-hidden="true">#</a> 一、音频(audio) 视频(video)</h2><pre><code>&lt;audio src=&quot;media/loveyou.ogg&quot; controls=&quot;controls&quot; autoplay=&quot;autoplay&quot; loop=&quot;loop&quot;&gt;&lt;/audio&gt;

&lt;video src=&quot;video/浮夸.mp4&quot; autoplay=&quot;autoplay&quot; controls=&quot;controls&quot; loop=&quot;loop&quot;&gt;&lt;/video&gt;
</code></pre><h2 id="二、video属性" tabindex="-1"><a class="header-anchor" href="#二、video属性" aria-hidden="true">#</a> 二、video属性</h2><pre><code>autoplay autoplay   如果出现该属性，则视频在就绪后马上播放。 
controls controls   如果出现该属性，则向用户显示控件，比如播放按钮。
loop loop           如果出现该属性，则当媒介文件完成播放后再次开始播放。
preload preload     如果出现该属性，则视频在页面加载时进行加载，并预备播放。如果使用 &quot;autoplay&quot;，则忽略该属性。

height：pixels      设置视频播放器的高度。
width ：pixels      设置视频播放器的宽度。
src：url            要播放的视频的 URL。
</code></pre><h2 id="三、方法和事件" tabindex="-1"><a class="header-anchor" href="#三、方法和事件" aria-hidden="true">#</a> 三、方法和事件</h2><h3 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h3><pre><code>addTextTrack()      向音频/视频添加新的文本轨道 
canPlayType()       检测浏览器是否能播放指定的音频/视频类型 
load()              重新加载音频/视频元素 
play()              开始播放音频/视频 
pause()             暂停当前播放的音频/视频
</code></pre><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3><pre><code>abort              当音频/视频的加载已放弃时
canplay            当浏览器可以播放音频/视频时
canplaythrough     当浏览器可在不因缓冲而停顿的情况下进行播放时
durationchange     当音频/视频的时长已更改时
emptied            当目前的播放列表为空时
ended              当目前的播放列表已结束时
error              当在音频/视频加载期间发生错误时
loadeddata         当浏览器已加载音频/视频的当前帧时
loadedmetadata     当浏览器已加载音频/视频的元数据时
loadstart          当浏览器开始查找音频/视频时
pause              当音频/视频已暂停时
play               当音频/视频已开始或不再暂停时
playing            当音频/视频在已因缓冲而暂停或停止后已就绪时
progress           当浏览器正在下载音频/视频时
</code></pre>`,10),r=[n];function i(l,u){return a(),e("div",null,r)}const h=o(t,[["render",i],["__file","07-video和audio.html.vue"]]);export{h as default};

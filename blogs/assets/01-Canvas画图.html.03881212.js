import{_ as t,o as n,c as e,d as a}from"./app.f1a64e91.js";const o={},r=a(`<h1 id="canvas\u753B\u56FE" tabindex="-1"><a class="header-anchor" href="#canvas\u753B\u56FE" aria-hidden="true">#</a> canvas\u753B\u56FE</h1><h2 id="canvas\u548Csvg\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#canvas\u548Csvg\u7684\u533A\u522B" aria-hidden="true">#</a> Canvas\u548CSVG\u7684\u533A\u522B\uFF1F</h2><ol><li><p>\u4F4D\u56FE\u548C\u77E2\u91CF\u56FE\u7684\u533A\u522B</p></li><li><p>\u4F4D\u56FE\u8272\u5F69\u66F4\u4E30\u5BCC\uFF0C</p></li><li><p>\u77E2\u91CF\u56FE\u8272\u5F69\u8F83\u5355\u4E00\uFF0C\u7ECF\u5E38\u505A\u56FE\u6807</p><pre><code> &lt;!-- canvas \u70B9\u51FB\u9F20\u6807\u53F3\u952E\uFF0C\u51FA\u73B0\u56FE\u7247\u53E6\u5B58\u4E3A --&gt;
 &lt;!-- canvas \u53EA\u80FD\u5199\u5728\u6807\u7B7E\u5185\uFF0C\u4E0D\u80FD\u653E\u5728CSS\u6837\u5F0F\u4E2D --&gt;
 &lt;canvas id=&quot;myCanvas&quot; width=&quot;500px&quot; height=&quot;400px&quot;&gt;&lt;/canvas&gt;
</code></pre></li></ol><h2 id="\u4E00\u3001\u753B\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u753B\u7EBF" aria-hidden="true">#</a> \u4E00\u3001\u753B\u7EBF</h2><pre><code>//1\u3001\u83B7\u53D6 canvas\u5143\u7D20
var myCanvas = document.querySelector(&quot;#myCanvas&quot;);

//2\u3001\u83B7\u53D6\u4E0A\u4E0B\u6587\uFF1A\u7B80\u5355\u7406\u89E3\uFF0C\u628Acanvas\u753B\u5E03\u53D8\u62102D\u753B\u677F\u3002 WebGL\uFF1A3D\u753B\u677F
var ctx = myCanvas.getContext(&quot;2d&quot;);

//3\u3001\u8BBE\u7F6E\u6837\u5F0F
ctx.lineWidth = 10;
ctx.strokeStyle = &quot;greenyellow&quot;;

//4\u3001\u79FB\u52A8\u81F3\u67D0\u4E00\u70B9
ctx.moveTo(100,100);

//5\u3001\u521B\u5EFA\u4E00\u4E2A\u65B0\u70B9 \u4E24\u4E2A\u64CD\u4F5C\uFF0C\u79FB\u52A8\u5230\u8FD9\u4E2A\u70B9\uFF0C\u8FDE\u63A5\u524D\u4E00\u4E2A\u70B9
ctx.lineTo(100,200);
ctx.lineTo(100,350);
ctx.lineTo(300,350);
ctx.lineTo(300,100);

//6\u3001\u753B\u7EBF
ctx.stroke();

//7\u3001\u753B\u53E6\u4E00\u6761\u7EBF
ctx.moveTo(200,300);
ctx.lineTo(200,100);
ctx.lineTo(200,100);
ctx.lineTo(400,50);
ctx.stroke();
</code></pre><h2 id="\u4E8C\u3001\u753B\u77E9\u5F62" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u753B\u77E9\u5F62" aria-hidden="true">#</a> \u4E8C\u3001\u753B\u77E9\u5F62</h2><pre><code>//\u524D\u4E24\u90E8\u76F8\u540C
//3\u3001x,y\uFF1A\u77E9\u5F62\u7684\u8D77\u70B9      width,height:\u77E9\u5F62\u7684\u5BBD\u9AD8
ctx.fillStyle = &quot;red&quot;;
ctx.fillRect(50,50,100,50);

ctx.rect(200,50,100,50);
ctx.fillStyle = &quot;aqua&quot;;
ctx.fill();

ctx.rect(50,200,100,50);
ctx.stroke();

ctx.strokeStyle = &quot;blueviolet&quot;;
ctx.strokeRect(200,200,100,50);
</code></pre><h2 id="\u4E09\u3001\u5199\u5B57" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5199\u5B57" aria-hidden="true">#</a> \u4E09\u3001\u5199\u5B57</h2><pre><code>//3\u3001\u8BBE\u7F6E\u6837\u5F0F
ctx.font = &quot;50px \u5FAE\u8F6F\u96C5\u9ED1&quot;;
ctx.strokeStyle = &quot;gold&quot;;

//4\u3001\u53C2\u6570\u4E00\uFF1A\u6587\u5B57\u5185\u5BB9    \u53C2\u6570\u4E8C\uFF1A\u6587\u5B57\u663E\u793A\u7684\u5750\u6807
//\u722C\u866B\u722C\u53D6\u4E0D\u5230canvas\u7684\u6587\u672C\u5185\u5BB9
ctx.fillText(&quot;\u79E6\u65F6\u660E\u6708\u4E4B\u541B\u4E34\u5929\u4E0B&quot;,20,100);
ctx.strokeText(&quot;\u79E6\u65F6\u660E\u6708\u6C49\u65F6\u5173&quot;,80,200);
</code></pre><h2 id="\u56DB\u3001\u753B\u5706" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u753B\u5706" aria-hidden="true">#</a> \u56DB\u3001\u753B\u5706</h2><pre><code>/*3\u3001\u53C2\u6570\u4E00\u4E8C\uFF1A\u5706\u5FC3\u5750\u6807
 *   \u53C2\u6570\u4E09    \uFF1A\u534A\u5F84
 *   \u53C2\u6570\u56DB\u4E94\uFF1A\u5706\u7684\u8D77\u59CB\u548C\u7ED3\u675F\u5F27\u5EA6
 *   \u53C2\u6570\u516D \u662F\u5426\u9006\u65F6\u9488   \uFF1A\u9ED8\u8BA4 false\u2014\u2014\u2014\u2014\u987A\u65F6\u9488
 * */
ctx.arc(300,300,100,0,360,false);
ctx.fillStyle = &quot;chartreuse&quot;;
ctx.fill();

ctx.arc(100,100,100,0,360,false);
ctx.stroke();
</code></pre><h2 id="\u4E94\u3001\u753B\u5F27\u7EBF\u3001\u6247\u5F62" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001\u753B\u5F27\u7EBF\u3001\u6247\u5F62" aria-hidden="true">#</a> \u4E94\u3001\u753B\u5F27\u7EBF\u3001\u6247\u5F62</h2><pre><code>/*
 * \u89D2\u5EA6\u548C\u5F27\u5EA6\u7684\u8F6C\u5316 2\u03C0 = 360(\u5F27\u5EA6)    \u03C0 = 180
 * Math.PI / 180 * n
 */
ctx.arc(300,300,80,0,3.14,false);
ctx.fillStyle = &quot;chartreuse&quot;;
ctx.fill();

//\u89E3\u51B3\u8DEF\u5F84\u95ED\u5408\u95EE\u9898\uFF1A\u65B9\u6CD5\u4E00\uFF1A\u4E0B\u4E00\u4E2A\u5706\u7684\u5706\u5FC3+\u534A\u5F84   \u65B9\u6CD5\u4E8C\uFF1A\u5173\u95ED\u8DEF\u5F84
ctx.moveTo(180,100);   //\u53EF\u6CE8\u91CA\u540E\u67E5\u770B\u6548\u679C

ctx.arc(100,100,80,0,3.14,false);
ctx.stroke();

\u6CE8\u610F\uFF1A\u753B\u6247\u5F62\uFF0C\u9700\u8981moveTo(\u539F\u70B9\uFF0C\u539F\u70B9);
</code></pre><h2 id="\u516D\u3001\u7EBF\u6027\u6E10\u53D8" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001\u7EBF\u6027\u6E10\u53D8" aria-hidden="true">#</a> \u516D\u3001\u7EBF\u6027\u6E10\u53D8</h2><pre><code>//\u586B\u5145\u6E10\u53D8\u989C\u8272
var gradient = ctx.createLinearGradient(0,0,500,400);

//\u53C2\u6570\u4E00\uFF1A\u989C\u8272\u4F4D\u7F6E 0~1 \u4E4B\u95F4\uFF1B \u53C2\u6570\u4E8C\uFF1A\u989C\u8272\u503C
gradient.addColorStop(0,&quot;red&quot;);
gradient.addColorStop(0.3,&quot;orange&quot;);
gradient.addColorStop(1/2,&quot;green&quot;);    //\u6CE8\u610F\uFF1A\u53EF\u4EE5\u662F\u5206\u53F7
gradient.addColorStop(0.8,&quot;yellow&quot;);
gradient.addColorStop(1,&quot;purple&quot;);

//\u8BBE\u7F6E\u6837\u5F0F\u2014\u2014\u586B\u5145\u6E10\u53D8\u8272
ctx.fillStyle = gradient;

//\u753B\u4E2A\u77E9\u5F62\u7B49
ctx.fillRect(0,0,500,400);
</code></pre><h2 id="\u4E03\u3001\u7ECF\u5411\u6E10\u53D8" tabindex="-1"><a class="header-anchor" href="#\u4E03\u3001\u7ECF\u5411\u6E10\u53D8" aria-hidden="true">#</a> \u4E03\u3001\u7ECF\u5411\u6E10\u53D8</h2><pre><code>//\u586B\u5145\u6E10\u53D8\u989C\u8272
var gradient = ctx.createRadialGradient(200,200,50,200,200,200);

//\u53C2\u6570\u4E00\uFF1A\u989C\u8272\u4F4D\u7F6E 0~1 \u4E4B\u95F4\uFF1B\u53C2\u6570\u4E8C\uFF1A\u989C\u8272\u503C
gradient.addColorStop(0,&quot;red&quot;);
gradient.addColorStop(0.2,&quot;orange&quot;);
gradient.addColorStop(0.4,&quot;yellow&quot;);
gradient.addColorStop(0.6,&quot;green&quot;);
gradient.addColorStop(0.8,&quot;yellow&quot;);
gradient.addColorStop(1,&quot;purple&quot;);

//\u8BBE\u7F6E\u6837\u5F0F\u2014\u2014\u586B\u5145\u6E10\u53D8\u8272
ctx.fillStyle = gradient;

//\u753B\u4E2A\u77E9\u5F62\u7B49
ctx.arc(200,200,200,0,360);
ctx.fill();
</code></pre><h2 id="\u516B\u3001\u653E\u5165\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#\u516B\u3001\u653E\u5165\u56FE\u7247" aria-hidden="true">#</a> \u516B\u3001\u653E\u5165\u56FE\u7247</h2><pre><code>//\u53EF\u4EE5\u7528canvas\u505A\u622A\u56FE
//\u521B\u5EFA\u56FE\u50CF\u4F4D\u7F6E
var img = new Image();
img.src = &quot;img/354279.jpg&quot;;
img.onload = function(){
    //\u53C2\u65701\uFF1A\u653E\u5165img\u5BF9\u8C61
    //\u53C2\u65702,3\uFF1A\u56FE\u7247\u7684\u5F00\u59CB\u4F4D\u7F6E
    //\u53C2\u65704,5\uFF1A\u56FE\u7247\u7684\u53D8\u5F62  \u5BBD\u5EA6\u548C\u9AD8\u5EA6 
    ctx.drawImage(img,10,10,480,380);
}
</code></pre><h2 id="\u4E5D\u3001\u8DEF\u5F84\u95ED\u5408\u95EE\u9898\u89E3\u51B3\u65B9\u6CD5\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u4E5D\u3001\u8DEF\u5F84\u95ED\u5408\u95EE\u9898\u89E3\u51B3\u65B9\u6CD5\u4E8C" aria-hidden="true">#</a> \u4E5D\u3001\u8DEF\u5F84\u95ED\u5408\u95EE\u9898\u89E3\u51B3\u65B9\u6CD5\u4E8C</h2><pre><code>//\u7528beginPath()\u548CclosePath()\u65B9\u6CD5\uFF0C\u5F00\u59CB\u3001\u5173\u95ED\u8DEF\u5F84
ctx.beginPath();
ctx.arc(100,100,100,0,360,false);
ctx.fillStyle = &quot;red&quot;;
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(300,300,100,0,360,false);
ctx.fillStyle = &quot;chartreuse&quot;;
ctx.fill();
ctx.closePath();
</code></pre><p>##\u3000\u5341\u3001\u5176\u4ED6\u5E94\u7528</p><ol><li><p>\u753B\u592A\u6781\u56FE\uFF08\u904D\u5386\u6570\u7EC4\u5BF9\u8C61\uFF0C\u62FF\u5230\u5BF9\u5E94\u7684\u6570\u503C\u505A\u53C2\u6570\uFF0C\u753B\u5230Canvas\u753B\u5E03\u4E0A\uFF09</p></li><li><p>\u6570\u636E\u53EF\u89C6\u5316 \u6247\u5F62\uFF08\u65B9\u6CD5\u540C\u4E0A\uFF09 \u7528\u767E\u5EA6Echarts\u505A\u66F4\u591A\u7F8E\u89C2\u56FE\u8868</p></li><li><p>Canvas\u622A\u5C4F</p></li><li><p>Canvas\u5C0F\u7A97\u53E3\u64AD\u653E\u89C6\u5C4F</p><pre><code> //\u6838\u5FC3\u4EE3\u7801  \u52A0\u5B9A\u65F6\u5668\u5C0F\u89C6\u5C4F\u64AD\u653E\uFF1B\u4E0D\u52A0\u5B9A\u65F6\u5668\u622A\u5C4F
 setInterval(function(){
     ctx.drawImage( $(&quot;#video&quot;)[0] , 0 , 0 , 400 , 300);
 },100);
</code></pre></li></ol>`,23),c=[r];function d(l,i){return n(),e("div",null,c)}const s=t(o,[["render",d],["__file","01-Canvas\u753B\u56FE.html.vue"]]);export{s as default};

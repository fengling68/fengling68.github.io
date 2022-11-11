import{_ as e,o as n,c as r,f as a}from"./app.84a1f894.js";const o={},t=a(`<h1 id="_3d\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#_3d\u52A8\u753B" aria-hidden="true">#</a> 3D\u52A8\u753B</h1><h2 id="\u5C5E\u6027perspective" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027perspective" aria-hidden="true">#</a> \u5C5E\u6027perspective</h2><pre><code>\u5355\u4F4D\uFF1Apx\uFF1B
\u8BBE\u7F6E\u5047\u5B9A\u4EBA\u773C\u5230\u5E73\u9762\u7684\u8DDD\u79BB\uFF0C\u53EA\u5F71\u54CD3D\u5143\u7D20\u3002
\u6570\u8D8A\u5927\uFF0C\u7269\u4F53\u8D8A\u8FDC\uFF1B\u6570\u8D8A\u5C0F\uFF0C\u7269\u4F53\u8D8A\u8FD1\u3002
\u4F4D\u7F6E\uFF1A\u52A0\u5728\u7236\u5143\u7D20\u4E0A\uFF0C\u8BBE\u7F6E\u597D\u540E\u5B50\u5143\u7D20\u5C31\u53EF\u4EE5\u5B8C\u62103D\u8F6C\u6362\u3002
</code></pre><h2 id="\u5C5E\u6027transform-style" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027transform-style" aria-hidden="true">#</a> \u5C5E\u6027transform-style</h2><pre><code>transform-style:preserve-3d;   //\u4F7F\u88AB\u8F6C\u6362\u7684\u5B50\u5143\u7D20\u4FDD\u7559\u51763D\u8F6C\u6362
</code></pre><h2 id="_3d-transform" tabindex="-1"><a class="header-anchor" href="#_3d-transform" aria-hidden="true">#</a> 3D-transform</h2><pre><code>1\u30013D\u4F4D\u79FB

    transform:translateZ(100px);     //\u6539\u53D8\u5143\u7D20\u5728Z\u8F74\u4E0A\u7684\u8DDD\u79BB,\u6B63\u8D1F\u503C
    transform:translate3d(x,y,z);    //\u5143\u7D20\u5728X,Y,Z\u8F74\u90FD\u53D1\u751F\u53D8\u5316

2\u30013D\u65CB\u8F6C

    transform:rotateX(deg);         //3D\u65CB\u8F6C\u5FC5\u987B\u8BBE\u7F6E\u5177\u4F53\u65B9\u5411
    transform:rotateY(deg);
    transform:rotateZ(deg);

\u5148\u65CB\u8F6C\u5728\u79FB\u52A8\uFF0C\u7269\u4F53\u5728\u65CB\u8F6C\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5750\u6807\u4E5F\u4F1A\u6539\u53D8\u3002
\u53EF\u4EE5\u5148\u79FB\u52A8\u5728\u65CB\u8F6C\u3002
</code></pre><h2 id="\u8FC7\u6E21\u548C\u56DB\u8981\u7D20" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u6E21\u548C\u56DB\u8981\u7D20" aria-hidden="true">#</a> \u8FC7\u6E21\u548C\u56DB\u8981\u7D20</h2><pre><code>\u8FC7\u6E21\uFF1A\u5143\u7D20\u4ECE\u4E00\u4E2A\u72B6\u6001\u5230\u53E6\u4E00\u4E2A\u72B6\u6001\u7684\u5E73\u6ED1\u53D8\u6362\u8FC7\u7A0B\u3002
\u5C5E\u6027\uFF1Atransition
\u89E6\u53D1\uFF1A\u8FC7\u6E21\u6548\u679C\u7531\u7528\u6237\u7684\u884C\u4E3A\u8FDB\u884C\u89E6\u53D1\uFF08\u70B9\u51FB\u3001\u9F20\u6807\u60AC\u505C\uFF09
</code></pre><ol><li><p>\u8FC7\u6E21\u5C5E\u6027</p><pre><code> transition-property:none/all/property;
 \u4F8B\uFF1Atransition-property:background;
</code></pre></li><li><p>\u8FC7\u6E21\u65F6\u95F4</p><pre><code> transition-duration:s/ms;
</code></pre></li><li><p>\u8FC7\u6E21\u51FD\u6570</p><pre><code> transition-timing-function:linear/ease/ease-in/ease-out/ease-in-out;
                             \u5300\u901F/\u6162\u5FEB\u6162/\u6162\u5F00\u59CB/\u6162\u7ED3\u675F/\u6162\u5F00\u59CB\u7ED3\u675F
</code></pre></li><li><p>\u8FC7\u6E21\u5EF6\u8FDF</p><pre><code> transition-delay:s/ms;
</code></pre></li></ol><p><strong>\u7EDF\u4E00\u8BBE\u7F6E\u8FC7\u6E21\uFF1Atransition:\u5C5E\u6027 \u65F6\u95F4 \u51FD\u6570 \u5EF6\u8FDF;</strong></p><p><strong>\u79FB\u5165\u79FB\u51FA\u90FD\u9700\u8981\u8FC7\u6E21\u653E\u5728div\u91CC\uFF0C\u53EA\u6709\u79FB\u5165\u9700\u8981\u653E\u5728hover\u91CC\u3002</strong></p><h2 id="\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u52A8\u753B" aria-hidden="true">#</a> \u52A8\u753B</h2><p>\u8FC7\u6E21\uFF0C\u5B9E\u73B0\u7B80\u5355\u7684\u52A8\u6001\u6548\u679C\uFF1B</p><p>\u52A8\u753B\uFF0C\u5B9E\u73B0\u590D\u6742\u7684\u52A8\u6001\u6548\u679C\u3002\u6CE8\u610F\u6D4F\u89C8\u5668\u517C\u5BB9\u3002</p><ol><li><p>\u58F0\u660E\u52A8\u753B</p><pre><code> @keyframes name{
     from{
         background-color:red;
     }
     50%{
         background-color:yellow;
     }                                  
     to{
         background-color:blue;
     }
 }
</code></pre></li><li><p>\u8C03\u7528\u52A8\u753B</p><pre><code> animation:name,s/ms,ease,infinite,alternate;  

 /*\u540D\u79F0:
 \u65F6\u957F: \u5355\u4F4Ds/ms
 \u901F\u5EA6: linear  ease  ease-in  ease-out   ease-in-out
 \u5EF6\u8FDF: \u5355\u4F4Ds/ms
 \u6B21\u6570: \u6570\u503C    infinite,\u65E0\u6570\u6B21\u64AD\u653E
 \u65B9\u5411: normal   alternate,\u4EA4\u66FF\u8F6E\u6D41*/
</code></pre></li><li><p>\u64AD\u653E\u65B9\u5411</p><pre><code> alternate\uFF1A\u5947\u6570\u6B21from-to,\u5076\u6570\u6B21to-from\u3002
</code></pre></li><li><p>\u52A8\u753B\u64AD\u653E\u4E4B\u524D\u548C\u4E4B\u540E\u7684\u6548\u679C</p><pre><code> none:\u9ED8\u8BA4
 forwards:\u52A8\u753B\u5B8C\u6210\u540E\uFF0C\u4FDD\u6301\u6700\u540E\u4E00\u4E2A\u72B6\u6001\uFF1B
 backwards:\u52A8\u753B\u663E\u793A\u4E4B\u524D\uFF0C\u4FDD\u6301\u5728\u7B2C\u4E00\u4E2A\u72B6\u6001\uFF1B
 both:\u52A8\u753B\u5B8C\u6210\u540E\uFF0C\u52A8\u753B\u663E\u793A\u524D\uFF0C\u90FD\u4FDD\u6301\u7740\u76F8\u5E94\u7684\u72B6\u6001\u3002
</code></pre></li><li><p>\u52A8\u753B\u64AD\u653E\u72B6\u6001\uFF0C\u7528\u4E8E\u64AD\u653E\u8FC7\u7A0B\u4E2D\u6682\u505C\u52A8\u753B\u3002</p><pre><code> animation-play-state:  ;
 paused\uFF1A\u6682\u505C
 running\uFF1A\u64AD\u653E
</code></pre></li></ol>`,16),i=[t];function d(s,p){return n(),r("div",null,i)}const l=e(o,[["render",d],["__file","13-3D\u52A8\u753B.html.vue"]]);export{l as default};

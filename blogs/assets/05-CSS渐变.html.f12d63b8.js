import{_ as e,o as a,c as r,d as n}from"./app.8d44daf6.js";const d={},i=n(`<h1 id="css\u6E10\u53D8" tabindex="-1"><a class="header-anchor" href="#css\u6E10\u53D8" aria-hidden="true">#</a> CSS\u6E10\u53D8</h1><h2 id="\u6E10\u53D8" tabindex="-1"><a class="header-anchor" href="#\u6E10\u53D8" aria-hidden="true">#</a> \u6E10\u53D8</h2><p>\u6E10\u53D8\u901A\u8FC7background-image\u8BBE\u7F6E</p><pre><code>linear-gradient   \u7EBF\u6027\u6E10\u53D8  
repeating-linear-gradient   \u91CD\u590D\u7EBF\u6027\u6E10\u53D8
radial-gradient   \u5F84\u5411\u6E10\u53D8
repeating-radial-gradient   \u91CD\u590D\u5F84\u5411\u6E10\u53D8
</code></pre><p>\u793A\u4F8B\uFF1A<code>background-image:repeating-radial-gradient();</code></p><h2 id="\u7EBF\u6027\u6E10\u53D8" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u6027\u6E10\u53D8" aria-hidden="true">#</a> \u7EBF\u6027\u6E10\u53D8</h2><pre><code>background-image:lineae-gradient(angle,color-point1,color-point2...);
\u4F8B\uFF1Abackground-image:linear-gradient(to right,yellow 0%,green 50%,red 100%);
</code></pre><p>1\u3001angle:\u6307\u5B9A\u5177\u4F53\u65B9\u5411\u6216\u5177\u4F53\u89D2\u5EA6</p><pre><code>to top,to bottom,to right,to left
0deg     90deg
</code></pre><p>2\u3001color-point:\u6E10\u53D8\u989C\u8272\u7684\u5F00\u59CB\u70B9\u3001\u4E2D\u95F4\u8FC7\u6E21\u70B9\u3001\u7ED3\u675F\u70B9</p><pre><code>red 0%:\u4ECE\u5F00\u59CB\u5904\u663E\u793A\u7EA2\u8272
green 50%\uFF1A\u523050%\u4F4D\u7F6E\u5904\uFF0C\u53D8\u6210\u7EFF\u8272
blue 100%: \u5230\u7ED3\u5C3E\u5904\uFF0C\u53D8\u4E3A\u84DD\u8272
</code></pre><h2 id="\u5F84\u5411\u6E10\u53D8" tabindex="-1"><a class="header-anchor" href="#\u5F84\u5411\u6E10\u53D8" aria-hidden="true">#</a> \u5F84\u5411\u6E10\u53D8</h2><p>\u9ED8\u8BA4\u6E10\u53D8\u4E2D\u5FC3\u662Fcenter(\u4E2D\u5FC3\u70B9)\uFF0C\u6E10\u53D8\u5927\u5C0F\u662Ffarthest-corner(\u8868\u793A\u5230\u6700\u8FDC\u7684\u89D2\u843D)\u3002</p><p><code>background-image:radial-gradient(size at position,color-point1,color-point2...);</code></p><pre><code>size at position:
size:\u653E\u5C04\u7684\u5706\u5F62\u534A\u5F84
position\uFF1A\u539F\u70B9\u6240\u5728\u7684\u5750\u6807\uFF08left\uFF0Ctop\uFF0Cbottom\uFF0Cright\uFF0Ccenter\uFF09
</code></pre><h2 id="\u91CD\u590D\u7EBF\u6027\u6E10\u53D8" tabindex="-1"><a class="header-anchor" href="#\u91CD\u590D\u7EBF\u6027\u6E10\u53D8" aria-hidden="true">#</a> \u91CD\u590D\u7EBF\u6027\u6E10\u53D8</h2><p><code>background-image:repeating-linear-gradient(red,green 20px,purple 40px);</code></p><h2 id="\u91CD\u590D\u5F84\u5411\u6E10\u53D8" tabindex="-1"><a class="header-anchor" href="#\u91CD\u590D\u5F84\u5411\u6E10\u53D8" aria-hidden="true">#</a> \u91CD\u590D\u5F84\u5411\u6E10\u53D8</h2><p><code>background-image:repeating-radial-gradient(red,green 20px,purple 40px);</code></p>`,19),o=[i];function t(c,p){return a(),r("div",null,o)}const g=e(d,[["render",t],["__file","05-CSS\u6E10\u53D8.html.vue"]]);export{g as default};

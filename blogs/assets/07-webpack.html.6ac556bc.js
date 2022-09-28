import{_ as p,r,o as s,c as n,b as e,d,f as a,a as o}from"./app.1ae3817f.js";const t={},l=o('<h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> Webpack</h1><h2 id="\u914D\u7F6E\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5B57\u6BB5" aria-hidden="true">#</a> \u914D\u7F6E\u5B57\u6BB5</h2><p><code>entry</code> \u5165\u53E3</p><p><code>output</code> \u51FA\u53E3</p><p><code>Module</code> \u6A21\u5757</p><p><code>Chunk</code> \u4EE3\u7801\u5757</p><p><code>Loader</code> \u6A21\u5757\u8F6C\u6362\u5668</p><p><code>Plugins</code> \u6269\u5C55\u63D2\u4EF6</p><h2 id="\u6267\u884C\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u6D41\u7A0B" aria-hidden="true">#</a> \u6267\u884C\u6D41\u7A0B</h2><p><code>\u521D\u59CB\u5316</code>\uFF1A\u89E3\u6790 <code>webpack</code> \u914D\u7F6E\u53C2\u6570\uFF0C\u751F\u4EA7 <code>Compiler</code> \u5B9E\u4F8B\uFF1B</p><p><code>\u6CE8\u518C\u63D2\u4EF6</code>\uFF1A\u8C03\u7528\u63D2\u4EF6 <code>apply</code> \u65B9\u6CD5\uFF0C\u7ED9\u63D2\u4EF6\u4F20\u5165 <code>compiler</code> \u5B9E\u4F8B\u7684\u5F15\u7528\uFF0C\u63D2\u4EF6\u901A\u8FC7 <code>compiler</code> \u8C03\u7528 <code>Webpack</code> \u63D0\u4F9B\u7684 <code>API</code>\uFF0C\u8BA9\u63D2\u4EF6\u53EF\u4EE5\u76D1\u542C\u540E\u7EED\u7684\u6240\u6709\u4E8B\u4EF6\u8282\u70B9\uFF1B</p><p><code>\u8BFB\u53D6\u5165\u53E3</code>\uFF1A\u8BFB\u53D6\u5165\u53E3\u6587\u4EF6\uFF1B</p><p><code>\u89E3\u6790\u6587\u4EF6</code>\uFF1A\u4F7F\u7528 <code>loader</code> \u5C06\u6587\u4EF6\u89E3\u6790\u6210\u62BD\u8C61\u8BED\u6CD5\u6811 <code>AST</code>\uFF1B</p><p><code>\u751F\u6210\u4F9D\u8D56\u56FE\u8C31</code>\uFF1A\u627E\u51FA\u6BCF\u4E2A\u6587\u4EF6\u7684\u4F9D\u8D56\u9879\uFF08\u904D\u5386\uFF09\uFF1B</p><p><code>\u8F93\u51FA</code>\uFF1A\u6839\u636E\u8F6C\u6362\u597D\u7684\u4EE3\u7801\uFF0C\u751F\u6210 <code>chunk</code>\uFF1B</p><p><code>\u6253\u5305</code>\uFF1A\u751F\u6210\u6700\u540E\u6253\u5305\u7684\u6587\u4EF6\uFF1B</p><h2 id="webpack-\u7F16\u8BD1\u6587\u4EF6\u8FC7\u5927" tabindex="-1"><a class="header-anchor" href="#webpack-\u7F16\u8BD1\u6587\u4EF6\u8FC7\u5927" aria-hidden="true">#</a> Webpack \u7F16\u8BD1\u6587\u4EF6\u8FC7\u5927</h2>',17),h={href:"https://juejin.im/post/5a9d17446fb9a028d374e733",target:"_blank",rel:"noopener noreferrer"},i=o('<p>1\u3001\u533A\u5206\u5F00\u53D1\u73AF\u5883\u548C\u751F\u4EA7\u73AF\u5883\u914D\u7F6E\uFF1B</p><p>2\u3001\u5728 <code>prod</code> \u73AF\u5883\u4E0B\u5173\u95ED <code>source-map</code>\uFF1B</p><p>3\u3001\u4F7F\u7528 <code>extract-text-webpack-plugin</code> \u63D2\u4EF6\u5355\u72EC\u6253\u5305 <code>css</code> \u6587\u4EF6\uFF1B</p><p>4\u3001\u4F7F\u7528 <code>UglifyJSPlugin</code> \u63D2\u4EF6\u538B\u7F29 <code>js</code> \u6587\u4EF6\uFF1B</p><p>5\u3001\u4F7F\u7528 <code>CommonsChunkPlugin</code> \u63D2\u4EF6\u63D0\u53D6\u516C\u5171\u4F9D\u8D56\uFF1B</p><p>6\u3001\u4F7F\u7528 <code>compression-webpack-plugin</code> \u63D2\u4EF6\u5F00\u542F <code>gzip</code> \u538B\u7F29\uFF1B</p><p>7\u3001\u4F7F\u7528 <code>html-webpack-plugin</code> \u63D2\u4EF6\u5F00\u542Fhtml\u538B\u7F29\uFF0C\u81EA\u52A8\u6DFB\u52A0\u4E0A\u9762\u751F\u6210\u7684\u9759\u6001\u8D44\u6E90\uFF1B</p><p>8\u3001\u4F7F\u7528 <code>webpack-bundle-analyzer</code> \u63D2\u4EF6\u5206\u6790\u5E76\u4F18\u5316\u4F9D\u8D56\u5305\uFF1B</p><h2 id="webpack-\u7F16\u8BD1\u901F\u5EA6\u6162" tabindex="-1"><a class="header-anchor" href="#webpack-\u7F16\u8BD1\u901F\u5EA6\u6162" aria-hidden="true">#</a> Webpack \u7F16\u8BD1\u901F\u5EA6\u6162</h2>',9),b={href:"https://www.cnblogs.com/yangsg/p/10601604.html",target:"_blank",rel:"noopener noreferrer"},k=o('<p>1\u3001\u4F7F\u7528 <code>webpack 4</code> \u8FDB\u884C\u6253\u5305\uFF1B</p><p>2\u3001\u914D\u7F6E <code>externals</code> \u6765\u5C06\u4F9D\u8D56\u7684\u5E93\u6307\u5411\u5168\u5C40\u53D8\u91CF\uFF0C\u4F7F <code>webpack</code> \u4E0D\u518D\u6253\u5305\u8FD9\u4E2A\u5E93\uFF0C\u800C\u662F\u5168\u5C40\u5F15\u5165\u63D2\u4EF6\u540E\u4F7F\u7528\uFF1B</p><p>3\u3001\u4F7F\u7528 <code>CommonsChunkPlugin</code> \u63D2\u4EF6\u5C06\u5171\u6709\u7684\u6A21\u5757\u6253\u5305\u6210\u4E00\u4E2A\u6587\u4EF6\uFF1B</p><h2 id="webpack-loader" tabindex="-1"><a class="header-anchor" href="#webpack-loader" aria-hidden="true">#</a> Webpack loader</h2>',4),u={href:"https://www.webpackjs.com/api/loaders/",target:"_blank",rel:"noopener noreferrer"},_=o("<p><code>webpack</code> \u7528\u6765\u9884\u5904\u7406\u6A21\u5757\u7684\uFF0C\u5728\u4E00\u4E2A\u6A21\u5757\u88AB\u5F15\u5165\u4E4B\u524D\uFF0C\u4F1A\u9884\u5148\u4F7F\u7528 <code>loader</code> \u5904\u7406\u6A21\u5757\u7684\u5185\u5BB9\u3002</p><p>1\u3001<code>file-loader</code>\uFF1A\u6253\u5305\u56FE\u7247\u3001\u5B57\u4F53\uFF1B</p><p>2\u3001<code>url-loader</code>\uFF1A\u6253\u5305\u56FE\u7247\uFF0C\u4F1A\u5C06 base64 \u6253\u5305\u5230 js \u6587\u4EF6\u4E2D\uFF1B</p><p>3\u3001<code>css-loader</code>\uFF1A\u7406\u6E05\u591A\u4E2Acss\u6587\u4EF6\u4E4B\u95F4\u7684\u5F15\u7528\u5173\u7CFB\uFF0C\u6700\u540E\u5408\u5E76\u4E3A\u4E00\u4E2A\uFF1B</p><p>4\u3001<code>style-loader</code>\uFF1A\u5C06css\u6837\u5F0F\u6302\u8F7D\u5230head\u7684style\u6807\u7B7E\u4E2D\uFF1B</p><p>5\u3001<code>sass-loader</code>\uFF1A\u5C06scss\u6587\u4EF6\u7F16\u8BD1\u4E3Acss\uFF1B</p><p>6\u3001<code>less-loader</code>\uFF1A\u89E3\u6790 less \u6587\u4EF6\u6837\u5F0F\uFF1B</p><p>7\u3001<code>postcss-loader</code>\uFF1A\u4E3A\u6837\u5F0F\u52A0\u4E0A\u6D4F\u89C8\u5668\u524D\u7F00\uFF1B</p><p>8\u3001<code>babel-loader</code>\uFF1A\u8BA9\u4E0B\u4E00\u4EE3\u7684 js \u6587\u4EF6\u8F6C\u6362\u6210\u73B0\u4EE3\u6D4F\u89C8\u5668\u80FD\u591F\u652F\u6301\u7684 js \u6587\u4EF6\uFF1B</p>",9);function w(f,m){const c=r("ExternalLinkIcon");return s(),n("div",null,[l,e("p",null,[e("a",h,[d("webpack\u6253\u5305\u4E4B\u540E\u7684\u6587\u4EF6\u8FC7\u5927\u7684\u89E3\u51B3\u65B9\u6CD5"),a(c)])]),i,e("p",null,[e("a",b,[d("webpack4\u63D0\u5347180%\u7F16\u8BD1\u901F\u5EA6"),a(c)])]),k,e("p",null,[e("a",u,[d("loader API"),a(c)])]),_])}const x=p(t,[["render",w],["__file","07-webpack.html.vue"]]);export{x as default};

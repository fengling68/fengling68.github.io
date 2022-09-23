import{_ as e,o as a,c as r,a as d}from"./app.e6a83323.js";const s={},o=d(`<h1 id="mysql\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#mysql\u5B89\u88C5" aria-hidden="true">#</a> MySql\u5B89\u88C5</h1><h2 id="\u4E00\u3001\u4E0B\u8F7D\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u4E0B\u8F7D\u5B89\u88C5" aria-hidden="true">#</a> \u4E00\u3001\u4E0B\u8F7D\u5B89\u88C5</h2><pre><code>\u5B98\u7F51\u4E0B\u8F7D\u5730\u5740\uFF1Ahttps://dev.mysql.com/downloads/mysql/
\u53EF\u89C6\u5316\u56FE\u5F62\u5DE5\u5177\uFF1ASQLPro Studio

\u5F53\u5F39\u51FA\u4E00\u4E2AMYSQL Installer\u63D0\u793A\u6846\u7684\u65F6\u5019\u4E00\u5B9A\u6253\u5F00\u5907\u5FD8\u5F55\u590D\u5236\u7C98\u8D34\u8BB0\u4E0B\u5F39\u51FA\u6846\u7684\u5BC6\u7801

\u7CFB\u7EDF\u504F\u597D\u8BBE\u7F6E \u2014\u2014&gt; MySql \u2014\u2014&gt; start mysql server
</code></pre><h2 id="\u4E8C\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u4E8C\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF</h2><pre><code>\u6253\u5F00\uFF1Avim ~/.bash_profile
\u6DFB\u52A0\uFF1APATH=$PATH:/usr/local/mysql/bin
\u547D\u4EE4\uFF1Asource ~/.bash_profile
</code></pre><h2 id="\u4E09\u3001\u767B\u5F55sql" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u767B\u5F55sql" aria-hidden="true">#</a> \u4E09\u3001\u767B\u5F55sql</h2><pre><code>mysql -u root -p
</code></pre><h2 id="\u56DB\u3001\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u56DB\u3001\u5E38\u7528\u547D\u4EE4</h2><pre><code>CREATE DATABASE new_database;
show databases;
use databases
show tables
</code></pre><h2 id="\u4E94\u3001\u4FEE\u6539\u5F3A\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001\u4FEE\u6539\u5F3A\u5BC6\u7801" aria-hidden="true">#</a> \u4E94\u3001\u4FEE\u6539\u5F3A\u5BC6\u7801</h2><pre><code>ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED WITH mysql_native_password BY &#39;password&#39;; (\u66F4\u65B0\u7528\u6237\u5BC6\u7801 )
</code></pre><h2 id="\u516D\u3001\u6587\u7AE0\u6559\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001\u6587\u7AE0\u6559\u7A0B" aria-hidden="true">#</a> \u516D\u3001\u6587\u7AE0\u6559\u7A0B</h2><pre><code>http://www.bubuko.com/infodetail-2065773.html
</code></pre>`,13),n=[o];function h(t,c){return a(),r("div",null,n)}const l=e(s,[["render",h],["__file","01-MySql\u5B89\u88C5.html.vue"]]);export{l as default};

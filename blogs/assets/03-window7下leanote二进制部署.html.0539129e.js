import{_ as e,o,c as a,a as d}from"./app.ef351b53.js";const n={},t=d(`<h1 id="window7\u4E0Bleanote\u4E8C\u8FDB\u5236\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#window7\u4E0Bleanote\u4E8C\u8FDB\u5236\u90E8\u7F72" aria-hidden="true">#</a> window7\u4E0Bleanote\u4E8C\u8FDB\u5236\u90E8\u7F72</h1><blockquote><p>\u6559\u7A0B\uFF1Ahttps://51.ruyo.net/2922.html</p></blockquote><h2 id="_1\u3001\u4E0B\u8F7D\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u4E0B\u8F7D\u6587\u4EF6" aria-hidden="true">#</a> 1\u3001\u4E0B\u8F7D\u6587\u4EF6</h2><pre><code>leanote\u4E8C\u8FDB\u5236\u7248   http://leanote.org/#download
MongoDB           http://dl.mongodb.org/dl/win32/x86_64
leanote\u5BA2\u6237\u7AEF     https://leanote.com/ 
Robo 3T           https://robomongo.org/download
</code></pre><h2 id="_2\u3001\u5B89\u88C5\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u5B89\u88C5\u6B65\u9AA4" aria-hidden="true">#</a> 2\u3001\u5B89\u88C5\u6B65\u9AA4</h2><pre><code>1\u3001\u5728 \` D:\\mongodb \` \u4E0B\u65B0\u5EFAdata\uFF08db , log\uFF09\u6587\u4EF6\u5939
2\u3001\u914D\u7F6E\u73AF\u5883\u53D8\u91CF \` ;D:\\mongodb\\bin \`
3\u3001\u8FDB\u5165 \` D:\\mongodb\\bin \` \u6267\u884C \` mongod --dbpath D:\\mongodb\\data\\db \`
4\u3001\u5728\u6D4F\u89C8\u5668\uFF1Ahttp://localhost:27017 \u67E5\u770B\u662F\u5426\u5B89\u88C5\u6210\u529F\uFF1B
5\u3001\u8FDB\u5165\` D: \`\u5BFC\u5165\u6570\u636E \` mongorestore -h localhost -d leanote --dir ./leanote/mongodb_backup/leanote_install_data/ \`
</code></pre><h2 id="_3\u3001\u4FEE\u6539admin\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u4FEE\u6539admin\u5BC6\u7801" aria-hidden="true">#</a> 3\u3001\u4FEE\u6539admin\u5BC6\u7801</h2><pre><code>\u8FDB\u5165\u4E2A\u4EBA\u4E2D\u5FC3\u4FEE\u6539\u5BC6\u7801
</code></pre><h2 id="_4\u3001\u4FEE\u6539\u90AE\u7BB1" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u4FEE\u6539\u90AE\u7BB1" aria-hidden="true">#</a> 4\u3001\u4FEE\u6539\u90AE\u7BB1</h2><pre><code>use leanote
db.users.update({Username:&quot;admin&quot;},{$set:{Email:&quot;xxxxxx@xxx.com&quot;}});
</code></pre><h2 id="_5\u3001\u5BA2\u6237\u7AEF\u8FDE\u63A5\u81EA\u5EFA\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u5BA2\u6237\u7AEF\u8FDE\u63A5\u81EA\u5EFA\u670D\u52A1\u5668" aria-hidden="true">#</a> 5\u3001\u5BA2\u6237\u7AEF\u8FDE\u63A5\u81EA\u5EFA\u670D\u52A1\u5668</h2><pre><code>http://localhost:9000
</code></pre><h2 id="_6\u3001\u5907\u4EFD\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u5907\u4EFD\u6570\u636E" aria-hidden="true">#</a> 6\u3001\u5907\u4EFD\u6570\u636E</h2><pre><code>mongodump -h localhost -d leanote -o D:/data
</code></pre><h2 id="_7\u3001\u5236\u4F5C-bat\u5FEB\u901F\u542F\u52A8\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_7\u3001\u5236\u4F5C-bat\u5FEB\u901F\u542F\u52A8\u6587\u4EF6" aria-hidden="true">#</a> 7\u3001\u5236\u4F5C.bat\u5FEB\u901F\u542F\u52A8\u6587\u4EF6</h2><pre><code>\u6587\u4EF6\u4E00\uFF1Amongodb.bat
    d:
    cd mongodb\\bin
    mongod --dbpath D:\\mongodb\\data\\db
    
\u6587\u4EF6\u4E8C\uFF1Amongodb27017.bat
    mongo 127.0.0.1:27017
    
\u6587\u4EF6\u4E09\uFF1Aleanote.bat
    d:
    cd leanote\\bin
    run.bat
</code></pre><h2 id="_8\u3001\u6DFB\u52A0\u7BA1\u7406\u5458" tabindex="-1"><a class="header-anchor" href="#_8\u3001\u6DFB\u52A0\u7BA1\u7406\u5458" aria-hidden="true">#</a> 8\u3001\u6DFB\u52A0\u7BA1\u7406\u5458</h2><pre><code>use admin
db.createUser({user:&quot;admin&quot;,pwd:&quot;password&quot;,roles:[&quot;root&quot;]})
db.auth(&quot;admin&quot;, &quot;password&quot;)
</code></pre><h2 id="_9\u3001\u6DFB\u52A0\u6570\u636E\u5E93\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#_9\u3001\u6DFB\u52A0\u6570\u636E\u5E93\u7528\u6237" aria-hidden="true">#</a> 9\u3001\u6DFB\u52A0\u6570\u636E\u5E93\u7528\u6237</h2><pre><code>use leanote
db.createUser({user: &quot;admin&quot;, pwd: &quot;password&quot;, roles: [{ role: &quot;dbOwner&quot;, db: &quot;leanote&quot; }]})
db.auth(&quot;admin&quot;, &quot;password&quot;)
</code></pre>`,20),r=[t];function h(i,c){return o(),a("div",null,r)}const l=e(n,[["render",h],["__file","03-window7\u4E0Bleanote\u4E8C\u8FDB\u5236\u90E8\u7F72.html.vue"]]);export{l as default};

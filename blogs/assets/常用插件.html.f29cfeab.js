import{_ as a,o as r,c as i,b as n,t as e,a as o}from"./app.e6a83323.js";const u={},l=o(`<h1 id="\u5E38\u7528\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u63D2\u4EF6" aria-hidden="true">#</a> \u5E38\u7528\u63D2\u4EF6</h1><h2 id="swiper\u8F6E\u64AD\u56FE" tabindex="-1"><a class="header-anchor" href="#swiper\u8F6E\u64AD\u56FE" aria-hidden="true">#</a> Swiper\u8F6E\u64AD\u56FE</h2><h3 id="_1\u3001css\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#_1\u3001css\u90E8\u5206" aria-hidden="true">#</a> 1\u3001CSS\u90E8\u5206</h3><pre><code>//\u8F6E\u64AD\u56FE\u7AD6\u6392\u65F6\u6CE8\u610F\u9AD8\u5EA6
.swiper-container {
    width: 100%;
    margin: 0 auto;
}

.swiper-container img {
    width: 100%;
}
</code></pre><h3 id="_2\u3001html\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#_2\u3001html\u90E8\u5206" aria-hidden="true">#</a> 2\u3001HTML\u90E8\u5206</h3><pre><code>&lt;!--\u8F6E\u64AD\u56FE\u5BB9\u5668  \u540D\u5B57\u662F\u56FA\u5B9A\u7684--&gt;
&lt;div class=&quot;swiper-container&quot;&gt;

    &lt;!--\u8F6E\u64AD\u7684\u56FE\u7247--&gt;
    &lt;div class=&quot;swiper-wrapper&quot;&gt;            
        &lt;div class=&quot;swiper-slide&quot;&gt;
            &lt;img src=&quot;img/1-1.jpg&quot;/&gt;
        &lt;/div&gt;
        &lt;div class=&quot;swiper-slide&quot;&gt;
            &lt;img src=&quot;img/1-2.jpg&quot;/&gt;
        &lt;/div&gt;
        &lt;div class=&quot;swiper-slide&quot;&gt;
            &lt;img src=&quot;img/1-3.png&quot;/&gt;
        &lt;/div&gt;
        &lt;div class=&quot;swiper-slide&quot;&gt;
            &lt;img src=&quot;img/1-4.jpg&quot;/&gt;
        &lt;/div&gt;                
    &lt;/div&gt;
    
    &lt;!--\u5E95\u90E8\u7684\u63A7\u5236\u6309\u94AE--&gt;
    &lt;div class=&quot;swiper-pagination&quot;&gt;
        
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><h3 id="_3\u3001js\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#_3\u3001js\u90E8\u5206" aria-hidden="true">#</a> 3\u3001JS\u90E8\u5206</h3><pre><code>/* 1\u3001\u5F15\u5165\u6587\u4EF6 */
&lt;script src=&quot;swiper/swiper.min.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
    
    /* 2\u3001\u521D\u59CB\u5316\u64CD\u4F5C */
    
    //\u521B\u5EFA\u8F6E\u64AD\u56FE\u5BF9\u8C61
    //\u53C2\u6570\u4E00\uFF1A\u8F6E\u64AD\u5BF9\u8C61\u7684\u9009\u62E9\u5668
    //\u53C2\u6570\u4E8C\uFF1A\u914D\u7F6E\u8F6E\u64AD\u56FE\u7684\u9009\u9879
    var mySwiper = new Swiper(&quot;.swiper-container&quot;,{
        //\u662F\u5426\u5FAA\u73AF\u6EDA\u52A8
        loop:true,
        //\u81EA\u52A8\u6EDA\u52A8\u65F6\u95F4
        autoplay: 2000,
        //\u6307\u5B9A\u5206\u9875\u7EC4\u4EF6,\u9009\u62E9\u5668
        pagination : &quot;.swiper-pagination&quot;,
        //\u70B9\u51FB\u5206\u9875,\u662F\u5426\u5207\u6362\u56FE\u7247
        paginationClickable: true,
        
        //\u53D8\u5C0F\u624B
        grabCursor: true,
        //\u7B2C\u4E00\u6B21\u52A0\u8F7D\u7684\u65F6\u5019\uFF0C\u52A0\u8F7D\u7684slide\u5E8F\u53F7
        initialSlide: 1,
        //\u6539\u53D8\u65B9\u5411\u2014\u2014\u5782\u76F4\u5207\u6362 \u9ED8\u8BA4\u6C34\u5E73
        direction: &quot;vertical&quot;\uFF0C

         //\u5207\u6362\u6548\u679C
        //slide:\u6ED1\u52A8  fade:\u6DE1\u5165\u6DE1\u51FA  cube\uFF1A\u7ACB\u65B9\u4F53  coverflow\uFF1A\u5C01\u9762\u6D4F\u89C8  flip\uFF1A\u8F7B\u5F39
        effect: &quot;slide&quot;

        //\u5176\u4ED6\u914D\u7F6E\u9879\u53C2\u8003\u8BF4\u660E\u6587\u6863
        ...
    })
    
&lt;/script&gt;
</code></pre><h2 id="vue\u4E2D\u4F7F\u7528swiper\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#vue\u4E2D\u4F7F\u7528swiper\u63D2\u4EF6" aria-hidden="true">#</a> Vue\u4E2D\u4F7F\u7528swiper\u63D2\u4EF6</h2><h3 id="_1\u3001\u5404\u79CD\u76F8\u5173\u6587\u4EF6\u7684\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u5404\u79CD\u76F8\u5173\u6587\u4EF6\u7684\u5F15\u5165" aria-hidden="true">#</a> 1\u3001\u5404\u79CD\u76F8\u5173\u6587\u4EF6\u7684\u5F15\u5165</h3><h3 id="_2\u3001css\u540C\u4E0A" tabindex="-1"><a class="header-anchor" href="#_2\u3001css\u540C\u4E0A" aria-hidden="true">#</a> 2\u3001CSS\u540C\u4E0A</h3><h3 id="_3\u3001html\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#_3\u3001html\u90E8\u5206" aria-hidden="true">#</a> 3\u3001HTML\u90E8\u5206</h3><pre><code>&lt;!--\u8F6E\u64AD\u56FE\u5BB9\u5668  \u540D\u5B57\u662F\u56FA\u5B9A\u7684--&gt;
&lt;div class=&quot;swiper-container&quot;&gt;            
    &lt;!--\u8F6E\u64AD\u7684\u56FE\u7247--&gt;
    &lt;div class=&quot;swiper-wrapper&quot;&gt;            
        &lt;div v-for=&quot;item in adsList&quot; class=&quot;swiper-slide&quot;&gt;
            &lt;img v-bind:src=&quot;imagePrefix+item.img_url&quot;/&gt;
        &lt;/div&gt;           
    &lt;/div&gt;            
    &lt;!--\u5E95\u90E8\u7684\u63A7\u5236\u6309\u94AE--&gt;
    &lt;div class=&quot;swiper-pagination&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre><h3 id="_4\u3001vue\u7684js\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#_4\u3001vue\u7684js\u90E8\u5206" aria-hidden="true">#</a> 4\u3001Vue\u7684js\u90E8\u5206</h3><pre><code>created:function(){
    ......

    /* \u4E0B\u8F7D\u5E7F\u544A\u6570\u636E url\u540E\u662F\u5E7F\u544A\u7684\u5730\u5740 */
    this.$http({url:adsUrl}).then(function(response){
        var list = response.data.data;
        this.adsList = list;
        /* Vue\u6709\u4E00\u4E2A\u865A\u62DFdom\u673A\u5236, \u6570\u636E\u6539\u53D8, \u754C\u9762\u81EA\u52A8\u53D8\u5316 */
        /* Vue.$nextTick()\u8868\u793A\u754C\u9762\u66F4\u65B0\u5B8C\u6210\u7684\u4E0B\u4E00\u4E2A\u9636\u6BB5 */
        Vue.nextTick(function(){
            var mySwiper = new Swiper(&quot;.swiper-container&quot;,{
                //\u662F\u5426\u5FAA\u73AF\u6EDA\u52A8
                loop:true,
                //\u81EA\u52A8\u6EDA\u52A8\u65F6\u95F4
                autoplay: 2000,
                //\u6307\u5B9A\u5206\u9875\u7EC4\u4EF6,\u9009\u62E9\u5668
                pagination : &quot;.swiper-pagination&quot;,
                //\u70B9\u51FB\u5206\u9875,\u662F\u5426\u5207\u6362\u56FE\u7247
                paginationClickable: true,
                //\u53D8\u5C0F\u624B
                grabCursor: true,
                //\u7B2C\u4E00\u6B21\u52A0\u8F7D\u7684\u65F6\u5019\uFF0C\u52A0\u8F7D\u7684slide\u5E8F\u53F7
                initialSlide: 1,
                //\u5782\u76F4\u5207\u6362 \u9ED8\u8BA4\u6C34\u5E73
                direction: &quot;vertical&quot;\uFF0C

                 //\u5207\u6362\u6548\u679C
                //slide:\u6ED1\u52A8  fade:\u6DE1\u5165\u6DE1\u51FA  cube\uFF1A\u7ACB\u65B9\u4F53  coverflow\uFF1A\u5C01\u9762\u6D4F\u89C8  flip\uFF1A\u8F7B\u5F39
                effect: &quot;slide&quot;                    
            })
        })
    })
}
</code></pre><h2 id="iscroll\u4E0A\u62C9\u5237\u65B0\u4E0B\u62C9\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#iscroll\u4E0A\u62C9\u5237\u65B0\u4E0B\u62C9\u52A0\u8F7D" aria-hidden="true">#</a> iScroll\u4E0A\u62C9\u5237\u65B0\u4E0B\u62C9\u52A0\u8F7D</h2><h3 id="_1\u3001css\u90E8\u5206-1" tabindex="-1"><a class="header-anchor" href="#_1\u3001css\u90E8\u5206-1" aria-hidden="true">#</a> 1\u3001CSS\u90E8\u5206</h3><h3 id="_2\u3001html\u90E8\u5206-1" tabindex="-1"><a class="header-anchor" href="#_2\u3001html\u90E8\u5206-1" aria-hidden="true">#</a> 2\u3001HTML\u90E8\u5206</h3><pre><code>&lt;div class=&quot;header&quot;&gt;
    \u6211\u662F\u5934\u90E8
&lt;/div&gt;

&lt;div class=&quot;wrapper&quot;&gt;
    &lt;div class=&quot;scroll&quot;&gt;
        &lt;ul&gt;                    
            &lt;li&gt;\u79E6\u65F6\u660E\u6708\u4E4B\u4E07\u91CC\u957F\u57CE&lt;/li&gt;
            &lt;li&gt;\u79E6\u65F6\u660E\u6708\u4E4B\u4E07\u91CC\u957F\u57CE&lt;/li&gt;
            ...
            ...
        &lt;/ul&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;footer&quot;&gt;
    \u6211\u662F\u5E95\u90E8
&lt;/div&gt;
</code></pre><h3 id="_3\u3001js\u90E8\u5206-1" tabindex="-1"><a class="header-anchor" href="#_3\u3001js\u90E8\u5206-1" aria-hidden="true">#</a> 3\u3001JS\u90E8\u5206</h3><pre><code>/* 1\u3001\u5F15\u5165\u6587\u4EF6 */
&lt;script src=&quot;swiper/iscroll.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
    
    window.onload = function(){
        //\u521B\u5EFA\u6EDA\u52A8\u5BF9\u8C61
        //\u53C2\u6570\u4E00\uFF1A\u6EDA\u52A8\u5BF9\u8C61\u7684\u9009\u62E9\u5668
        //\u53C2\u6570\u4E8C\uFF1A\u6EDA\u52A8\u5BF9\u8C61\u7684\u914D\u7F6E\u9879
        var myScroll = new IScroll(&quot;.wrapper&quot;,{
            //\u901A\u8FC7\u9F20\u6807\u63A7\u5236
            mouseWheel:true
        })
    }
    
&lt;/script&gt;
</code></pre><h3 id="_4\u3001vue\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_4\u3001vue\u4F7F\u7528" aria-hidden="true">#</a> 4\u3001vue\u4F7F\u7528</h3><pre><code>// \u6709\u4E8B\u9700\u8981\u5728\u5916\u5C42\u52A0 setTimeout() \u5B9A\u65F6\u5668\u53BB\u89E6\u53D1\u8BE5\u4E8B\u4EF6
this.scroller = new IScroll(&quot;.selectWelfare&quot;,{
    click: true,
    scrollbars: true\uFF0C
    taps: true,
    mouseWheel: true,
    preventDefault: false,
    probeType:2,         // \u53EF\u4EE5\u5728scroll\u4E2D\u76D1\u542Cthis.y
    bounceTime:100,      // \u56DE\u5F39\u65F6\u95F4
    bounce: false,       // \u542F\u7528\u7981\u6B62\u56DE\u5F39
    momentum: false,     // \u542F\u7528\u7981\u6B62\u60EF\u6027
});

// \u5728\u6EDA\u52A8\u5F00\u59CB\u65F6\u8FDB\u884C\u67D0\u4E9B\u64CD\u4F5C
this.scroller.on(&#39;scrollStart&#39;,function(){
    
}) 

// \u5728\u6EDA\u52A8\u7ED3\u675F\u65F6\u8FDB\u884C\u67D0\u4E9B\u64CD\u4F5C
this.scroller.on(&#39;scrollEnd&#39;,function(){
    
})

// \u7981\u6B62\u6EDA\u52A8\u6761\u6ED1\u52A8
this.scroller.disable();

// \u6ED1\u52A8\u5230\u9876\u90E8\u6216\u5176\u4ED6\u4F4D\u7F6E
this.scroller.scrollTo(0,0);

// \u9500\u6BC1\u6EDA\u52A8\u6761
this.scroller.destroy();

// \u5237\u65B0\u6EDA\u52A8\u6761
this.$nextTick(() =&gt; {
    const delay = setTimeout(() =&gt; {
        if (this.scroller) {
            this.scroller.refresh();
            clearTimeout(delay);
        }
    }, 0);
});
</code></pre><h2 id="qrcode\u4E8C\u7EF4\u7801" tabindex="-1"><a class="header-anchor" href="#qrcode\u4E8C\u7EF4\u7801" aria-hidden="true">#</a> qrcode\u4E8C\u7EF4\u7801</h2><p>\u5728\u7EBF\u7F51\u7AD9\uFF1A\u8349\u6599\u4E8C\u7EF4\u7801</p><h3 id="_1\u3001css\u90E8\u5206-2" tabindex="-1"><a class="header-anchor" href="#_1\u3001css\u90E8\u5206-2" aria-hidden="true">#</a> 1\u3001CSS\u90E8\u5206</h3><pre><code> #qrcode2{
    position: relative;
}
#img{
    position: absolute;
    width: 56px;
    height: 56px;
    top: 100px;
    left: 100px;
}
</code></pre><h3 id="_2\u3001html\u90E8\u5206-2" tabindex="-1"><a class="header-anchor" href="#_2\u3001html\u90E8\u5206-2" aria-hidden="true">#</a> 2\u3001HTML\u90E8\u5206</h3><pre><code>&lt;div id=&quot;qrcode1&quot;&gt;&lt;/div&gt;&lt;br/&gt;&lt;br/&gt;

&lt;div id=&quot;qrcode2&quot;&gt;
    &lt;img id=&quot;img&quot; src=&quot;src/link.jpg&quot; /&gt;
&lt;/div&gt;
</code></pre><h3 id="_3\u3001js\u90E8\u5206-2" tabindex="-1"><a class="header-anchor" href="#_3\u3001js\u90E8\u5206-2" aria-hidden="true">#</a> 3\u3001JS\u90E8\u5206</h3><pre><code>&lt;!--1\u3001\u5F15\u5165jQuery\u548C\u4E8C\u7EF4\u7801\u6587\u4EF6\uFF0C \u6CE8\u610F\u987A\u5E8F\u95EE\u9898--&gt;
&lt;script src=&quot;js/jquery.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;js/jquery.qrcode.min.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
    
    $(function(){
        /* \u5BF9\u6587\u672C\u8FDB\u884C\u52A0\u5BC6 */
        $(&quot;#qrcode1&quot;).qrcode(&quot;this plugin is great&quot;);
        
        /* \u5BF9\u56FE\u7247\u8FDB\u884C\u52A0\u5BC6 */
        $(&quot;#qrcode2&quot;).qrcode({
            //\u9ED8\u8BA4\u5BBD
            width:256,
            //\u9ED8\u8BA4\u9AD8
            height:256,
            //\u9ED8\u8BA4\u6E32\u67D3\u6A21\u5F0F
            render:&quot;canvas&quot;,
            //\u9ED8\u8BA4\u80CC\u666F\u8272\uFF1A#fff
            background:&quot;#fff&quot;,
            //\u9ED8\u8BA4\u4E8C\u7EF4\u7801\u989C\u8272\uFF1A#000
            foreground:&quot;#000&quot;,
            //\u8BA1\u7B97\u6A21\u5F0F
            typeNumber:-1,
            //\u4E8C\u7EF4\u7801\u5185\u5BB9
            text:utf16to8(&quot;\u79E6\u65F6\u660E\u6708\u4E4B\u541B\u4E34\u5929\u4E0B&quot;),
        });        
        
        /*\u89E3\u51B3\u4E2D\u6587\u4E71\u7801\u95EE\u9898*/
        function utf16to8(str){ 
              var out, i, len, c; 
              out = &quot;&quot;; 
              len = str.length; 
              for(i = 0; i &lt; len; i++) { 
                  c = str.charCodeAt(i); 
                  if((c &gt;= 0x0001) &amp;&amp; (c &lt;= 0x007F)) { 
                    out += str.charAt(i); 
                  }else if(c &gt; 0x07FF) { 
                    out += String.fromCharCode(0xE0 | ((c &gt;&gt; 12) &amp; 0x0F)); 
                    out += String.fromCharCode(0x80 | ((c &gt;&gt; 6) &amp; 0x3F)); 
                    out += String.fromCharCode(0x80 | ((c &gt;&gt; 0) &amp; 0x3F)); 
                  }else{ 
                    out += String.fromCharCode(0xC0 | ((c &gt;&gt; 6) &amp; 0x1F)); 
                    out += String.fromCharCode(0x80 | ((c &gt;&gt; 0) &amp; 0x3F)); 
                  } 
              } 
              return out; 
        } 
        
    });

&lt;/script&gt;
</code></pre><h2 id="fullpage\u5168\u5C4F" tabindex="-1"><a class="header-anchor" href="#fullpage\u5168\u5C4F" aria-hidden="true">#</a> fullPage\u5168\u5C4F</h2><h3 id="_1\u3001css\u90E8\u5206-3" tabindex="-1"><a class="header-anchor" href="#_1\u3001css\u90E8\u5206-3" aria-hidden="true">#</a> 1\u3001CSS\u90E8\u5206</h3><pre><code>&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;js/jquery.fullPage.min.css&quot;/&gt;
//\u4E0D\u8981\u7ED9 #full\u8BBE\u7F6E\u6837\u5F0F

.page1{
    background: url(../img/1.jpg) no-repeat;
    background-size: 100% 100%;
}

.page2{
    background: url(../img/2.jpg) no-repeat;
    background-size: 100% 100%;
}

.page3{
    background: url(../img/3.jpg) no-repeat;
    background-size: 100% 100%;
}

.page4{
    background: url(../img/4.jpg) no-repeat;
    background-size: 100% 100%;
}

.page5{
    background: url(../img/5.jpg) no-repeat;
    background-size: 100% 100%;
}
</code></pre><h3 id="_2\u3001html\u90E8\u5206-3" tabindex="-1"><a class="header-anchor" href="#_2\u3001html\u90E8\u5206-3" aria-hidden="true">#</a> 2\u3001HTML\u90E8\u5206</h3><pre><code>&lt;!-- jQuery\u7684\u63D2\u4EF6  fullpage.js \u5B9E\u73B0\u5168\u5C4F\u6EDA\u52A8\u7684\u6548\u679C --&gt;        
&lt;div class=&quot;header&quot;&gt;
    &lt;div class=&quot;container&quot;&gt;
        &lt;h1&gt;\u79E6\u65F6\u660E\u6708&lt;/h1&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;a href=&quot;#page1&quot;&gt;\u767E\u6B65\u98DE\u5251&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href=&quot;#page2&quot;&gt;\u591C\u5C3D\u5929\u660E&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href=&quot;#page3&quot;&gt;\u8BF8\u5B50\u767E\u5BB6&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href=&quot;#page4&quot;&gt;\u4E07\u91CC\u957F\u57CE&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href=&quot;#page5&quot;&gt;\u541B\u4E34\u5929\u4E0B&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
&lt;/div&gt;


&lt;!--  \u5F00\u59CB\u914D\u7F6E fullpage  --&gt;
&lt;div id=&quot;full&quot;&gt;
    &lt;div class=&quot;section page1&quot;&gt;&lt;/div&gt;
    
    &lt;div class=&quot;section page2&quot;&gt;&lt;/div&gt;
    
    &lt;div class=&quot;section page3&quot;&gt;&lt;/div&gt;
    
    &lt;div class=&quot;section page4&quot;&gt;&lt;/div&gt;
    
    &lt;div class=&quot;section page5&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre><h3 id="_3\u3001js\u90E8\u5206-3" tabindex="-1"><a class="header-anchor" href="#_3\u3001js\u90E8\u5206-3" aria-hidden="true">#</a> 3\u3001JS\u90E8\u5206</h3><pre><code>&lt;script src=&quot;js/jquery.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;js/jquery.fullPage.min.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot;&gt;

    $(function(){
        $(&quot;#full&quot;).fullpage({
            //\u662F\u5426\u663E\u793A\u5BFC\u822A
            navigation:true,
            //\u901A\u8FC7\u5BFC\u822A\u63A7\u5236\u951A\u70B9
            anchors:[&#39;page1&#39;,&#39;page2&#39;,&#39;page3&#39;,&#39;page4&#39;,&#39;page5&#39;],
            //\u5BFC\u822A\u4F4D\u7F6E
            navigationPosition:&#39;right&#39;,
            //\u6EDA\u52A8\u901F\u5EA6
            scrollingSpeed:1000,
            //\u662F\u5426\u65E0\u7F1D\u6EDA\u52A8
            continuousVertical:true,
            
            
            //\u52A0\u8F7D\u4E4B\u540E, \u89E6\u53D1\u4E4B\u524D\u89E6\u53D1
            afterLoad:function(anchorLink,index){
                console.log(111);
                console.log(anchorLink);    // \u6EDA\u52A8\u56FE\u7247\u7684\u6765\u6E90 pageX
                console.log(index);         // \u52A0\u8F7D\u56FE\u7247\u7684\u7D22\u5F15
            },
            
            //\u9F20\u6807\u79BB\u5F00\u4E4B\u540E\u89E6\u53D1
            onLeave:function(index,nextIndex,direction){
                console.log(222);
                console.log(&quot;\u6211\u6765\u81EA\u7B2C&quot;+index+&quot;\u5C4F&quot;);         //\u6EDA\u52A8\u524D\u7684\u7D22\u5F15
                console.log(&quot;\u6211\u8981\u6EDA\u5230\u7B2C&quot;+nextIndex+&quot;\u5C4F&quot;);     //\u6EDA\u52A8\u540E\u7684\u7D22\u5F15
                console.log(&quot;\u6EDA\u52A8\u65B9\u5411&quot;+direction);     //\u8981\u6EDA\u52A8\u7684\u65B9\u5411 up  down
            },        
            
            //\u9875\u9762\u6E32\u67D3\u5B8C\u6210\u540E, \u9875\u9762\u53EA\u6E32\u67D3\u4E00\u6B21
            afterRender:function(){
                console.log(\u9875\u9762\u6E32\u67D3\u5B8C\u6210\u540E);
            }
        })
    })
    
&lt;/script&gt;
</code></pre><h2 id="lazyload\u61D2\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#lazyload\u61D2\u52A0\u8F7D" aria-hidden="true">#</a> lazyload\u61D2\u52A0\u8F7D</h2><h3 id="\u4E00\u3001\u61D2\u52A0\u8F7D\u7684\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u61D2\u52A0\u8F7D\u7684\u539F\u7406" aria-hidden="true">#</a> \u4E00\u3001\u61D2\u52A0\u8F7D\u7684\u539F\u7406</h3><pre><code>\u61D2\u52A0\u8F7D\uFF1A\u5E76\u6CA1\u6709\u5168\u90E8\u52A0\u5728\u5B8C\u6BD5\uFF0C\u53EA\u663E\u793A\u4E00\u90E8\u5206\u5546\u54C1\uFF08\u51CF\u8F7B\u670D\u52A1\u5668\u538B\u529B\uFF09
\u539F\u7406\uFF1A
    1\u3001\u4E00\u6B21\u6027\u628A\u6240\u6709\u8DEF\u5F84\u90FD\u62FF\u8FC7\u6765
    2\u3001\u4F46\u662F\uFF0C\u5E76\u6CA1\u6709\u628A\u8DEF\u5F84\u653E\u5230src\u4E2D\uFF0C\u800C\u662F\u653E\u5230\u81EA\u5B9A\u4E49\u5C5E\u6027\u4E2D
    3\u3001\u5F53\u6EDA\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E\uFF0C\u5C06\u81EA\u5B9A\u4E49\u7684\u5C5E\u6027\u653E\u5230src\u4E2D\uFF0C\u56FE\u7247\u624D\u4F1A\u52A0\u8F7D\u51FA\u6765
 
\u9884\u52A0\u8F7D\uFF1Aloading...\u7684\u65F6\u5019\uFF0C\u628A\u8D44\u6E90\u52A0\u8F7D\u8FDB\u6765\uFF0C\u7528\u6237\u54CD\u5E94\u5F88\u5FEB\uFF0C\u670D\u52A1\u5668\u538B\u529B\u5F88\u5927
</code></pre><h3 id="\u4E8C\u3001\u539F\u751Fjs\u5B9E\u73B0\u61D2\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u539F\u751Fjs\u5B9E\u73B0\u61D2\u52A0\u8F7D" aria-hidden="true">#</a> \u4E8C\u3001\u539F\u751FJS\u5B9E\u73B0\u61D2\u52A0\u8F7D</h3><blockquote><p>\u6CE8\u610F\uFF1A\u52A0\u8F7D\u56FE\u7247 = \uFF08\u56FE\u7247\u8DDD\u79BB\u9875\u9762\u9876\u7AEF\u9AD8\u5EA6 &lt; \u6D4F\u89C8\u5668\u6EDA\u52A8\u8DDD\u79BB + \u53EF\u89C6\u533A\u57DF\u8DDD\u79BB\uFF09</p></blockquote><pre><code>var imgs = document.getElementsByTagName(&quot;img&quot;);

function loadImg(){
    //\u83B7\u53D6\u5F53\u524D\u53EF\u89C6\u533A\u57DF\u9AD8\u5EA6
    var h1 = window.innerHeight;
    //\u6D4F\u89C8\u5668\u6EDA\u52A8\u8FC7\u7684\u9AD8\u5EA6
    var h2 = document.body.scrollTop || document.documentElement.scrollTop;
    for (var i = 0 ; i &lt; imgs.length ; i++) {
        //\u5224\u65AD\u5F53\u524D\u56FE\u7247\u8DDD\u79BB\u9876\u7AEF\u7684\u8DDD\u79BB &lt; ...
        if(imgs[i].offsetTop &lt; h1 + h2){                
            imgs[i].src = imgs[i].getAttribute(&quot;data-src&quot;);
        }
    }
}
    
loadImg();

window.onscroll = function(){
    loadImg();            
}
</code></pre><h3 id="\u4E09\u3001\u63D2\u4EF6\u5B9E\u73B0\u61D2\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u63D2\u4EF6\u5B9E\u73B0\u61D2\u52A0\u8F7D" aria-hidden="true">#</a> \u4E09\u3001\u63D2\u4EF6\u5B9E\u73B0\u61D2\u52A0\u8F7D</h3><pre><code>//\u6CE8\u610F\u7ED9img\u6DFB\u52A0\u7C7B\u540Dlazy  , \u5E76\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u5C5E\u6027data-original
&lt;img class=&quot;lazy&quot; src=&quot;&quot; data-original=&quot;img/search1.jpg&quot; /&gt;



/* JS\u90E8\u5206 \u6CE8\u610F\u5F15\u5165\u6587\u4EF6\u7684\u987A\u5E8F */
&lt;script src=&quot;js/jquery.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;js/jquery.lazyload.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
    $(function(){
        $(&quot;.lazy&quot;).lazyload();
    })    
&lt;/script&gt;
</code></pre><h3 id="\u56DB\u3001vue\u5B9E\u73B0\u61D2\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001vue\u5B9E\u73B0\u61D2\u52A0\u8F7D" aria-hidden="true">#</a> \u56DB\u3001Vue\u5B9E\u73B0\u61D2\u52A0\u8F7D</h3><pre><code>// model\u6A21\u578B-\u5B58\u50A8\u6570\u636E\u7684\u5730\u65B9
var data = {
    list:[],
    imagePrefix:imagePrefix,
    /*\u52A0\u8F7D\u66F4\u591A*/
    start:0,
    count:5,
    /*\u662F\u5426\u52A0\u8F7D*/
    isRefresh:false
}


// ViewModel\u6570\u636E\u9A71\u52A8\u754C\u9762-\u6570\u636E\u548C\u754C\u9762\u7ED1\u5B9A
var app = new Vue({
    //\u9009\u62E9id\u4E3Aapp\u7684\u9009\u62E9\u5668
    el:&quot;#app&quot;,  
    data:data,
    methods:{
        downloadData:function(){
            var url = readListUrl+&quot;&amp;start=&quot;+this.start+&quot;&amp;count=&quot;+this.count;
            this.$http({url:url}).then(function(response){
                var list = response.data.data;
                //\u5F53\u524D\u52A0\u8F7D\u7684\u52A0\u4E0A\u4E4B\u524D\u52A0\u8F7D\u7684
                this.list = this.list.concat(list);
                this.isRefresh = false;
            })
        }
    },
    created:function(){
        this.downloadData();
        var self = this;
        /* \u52A0\u8F7D\u66F4\u591A\u7684\u5B9E\u73B0 */
        window.onload = function(){
            window.onscroll = function(){
                //\u6EDA\u52A8\u5230\u5E95\u90E8\u7684\u6761\u4EF6   \u6EDA\u52A8\u6761\u5230\u9876\u90E8(\u53D8) + \u6EDA\u52A8\u6761\u5BF9\u5E94\u7684\u754C\u9762\u9AD8\u5EA6(\u53EF\u89C6\u9AD8\u5EA6,\u4E0D\u53D8) === \u6574\u4E2A\u9875\u9762\u7684\u9AD8\u5EA6(\u4E0D\u53D8)
                var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                var clientHeight = document.documentElement.clientHeight;
                var pageHeight = document.body.scrollHeight;
                
                if( Math.abs(scrollTop+clientHeight-pageHeight) &lt;= 6 ){
                    /* \u52A0\u8F7D\u66F4\u591A */
                    if(!self.isRefresh){
                        self.start += self.count;
                        self.downloadData();
                        self.isRefresh = true;
                    }
                }
            }
        }                        
    }
});
</code></pre><h2 id="base64\u52A0\u5BC6" tabindex="-1"><a class="header-anchor" href="#base64\u52A0\u5BC6" aria-hidden="true">#</a> Base64\u52A0\u5BC6</h2><h3 id="_1\u3001\u5F15\u5165js\u548Cbase64\u6587\u4EF6-\u6CE8\u610F\u5148\u540E\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u5F15\u5165js\u548Cbase64\u6587\u4EF6-\u6CE8\u610F\u5148\u540E\u95EE\u9898" aria-hidden="true">#</a> 1\u3001\u5F15\u5165JS\u548CBase64\u6587\u4EF6\uFF08\u6CE8\u610F\u5148\u540E\u95EE\u9898\uFF09</h3><pre><code>&lt;script src=&quot;jquery.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;base64.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;
</code></pre><h3 id="_2\u3001\u52A0\u5BC6\u548C\u89E3\u5BC6" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u52A0\u5BC6\u548C\u89E3\u5BC6" aria-hidden="true">#</a> 2\u3001\u52A0\u5BC6\u548C\u89E3\u5BC6</h3><pre><code>$(function(){
    var str = &quot;\u79E6\u65F6\u660E\u6708\u4E4B\u4E07\u91CC\u957F\u57CE&quot;;
    
    //1\u3001\u52A0\u5BC6
    var b64 = new Base64();
    var str = b64.encode(&quot;\u4F60\u786E\u5B9A\u8981\u8FDB\u653B\u5417&quot;);
    console.log(str);
    
    //2\u3001\u89E3\u5BC6
    var newStr = b64.decode(str);
    console.log(newStr);
    
    //3\u3001\u89E3\u5BC6\u5BC6\u6587
    var newStr2 = b64.decode(&quot;5L2g56Gu5a6a6KaB6L+b5pS75ZCX&quot;);
    console.log(newStr2);
    
});
</code></pre><h2 id="pagination\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#pagination\u5206\u9875" aria-hidden="true">#</a> pagination\u5206\u9875</h2><h3 id="_1\u3001css\u90E8\u5206-4" tabindex="-1"><a class="header-anchor" href="#_1\u3001css\u90E8\u5206-4" aria-hidden="true">#</a> 1\u3001CSS\u90E8\u5206</h3><pre><code>\u5F15\u5165CSS\u6837\u5F0F
</code></pre><h3 id="_2\u3001html\u90E8\u5206-4" tabindex="-1"><a class="header-anchor" href="#_2\u3001html\u90E8\u5206-4" aria-hidden="true">#</a> 2\u3001HTML\u90E8\u5206</h3><pre><code>//\u6CE8\u610FID\u540D, \u7C7B\u540D
&lt;div id=&quot;Pagination&quot; class=&quot;pagination&quot;&gt;
        
&lt;/div&gt;
</code></pre><h3 id="_3\u3001js\u90E8\u5206-4" tabindex="-1"><a class="header-anchor" href="#_3\u3001js\u90E8\u5206-4" aria-hidden="true">#</a> 3\u3001JS\u90E8\u5206</h3><pre><code>(1)\u5F15\u5165jQuery\u6587\u4EF6\u548C\u5206\u9875\u63D2\u4EF6\u7684JS\u6587\u4EF6

(2)\u521D\u59CB\u5316\u53CA\u6570\u636E\u4E0B\u8F7D\u540E\u7684\u5177\u4F53\u663E\u793A
    $(function(){
        //\u7B2C\u51E0\u9875\uFF0C\u6BCF\u9875\u591A\u5C11\u4E2A\u6570\u636E
        var page = 1;
        var count = 10;

        //\u56DE\u8C03\u51FD\u6570
        function pageselectCallback(index) {
            //\u70B9\u51FB\u4E4B\u540E, \u4FEE\u6539page,\u91CD\u65B0\u4E0B\u8F7D
            var new_page = index+1;
            //\u89E3\u51B3\u91CD\u590D\u8C03\u7528\u95EE\u9898 \u8FD8\u662F\u8FD9\u4E00\u9875, return \uFF1B \u5224\u65AD\u4E24\u4E2A\u76F8\u7B49, \u4E0D\u6267\u884C\u4E0B\u8F7D\u6570\u636E \uFF1B\u5F53page\u4E3A1, current_page\u662F0
            if(index == page-1){
                return;
            }        
            page = new_page;
            downloadListData();
        }
         
        //\u521D\u59CB\u5316\u51FD\u6570\u7684\u53C2\u6570
        //\u53C2\u65701: \u603B\u9875\u6570total = \u6570\u636E\u603B\u6570 / count
        //\u53C2\u65702: \u5BF9\u8C61
        //  current_page:\u5F53\u524D\u9875
        //    num_edge_entries:\u524D\u9762\u663E\u793A3\u4E2A
        //    num_display_entries:\u540E\u9762\u663E\u793A3\u4E2A
        //    callback \u70B9\u51FB\u540E\u56DE\u8C03
        //    items_per_page \u6BCF\u9875\u591A\u5C11\u6570\u636E
        //    prev_text \u663E\u793A\u4EC0\u4E48(\u4E0A\u4E00\u9875)
        //    next_text \u663E\u793A\u4EC0\u4E48(\u4E0B\u4E00\u9875)
        
        //\u521D\u59CB\u5316\u51FD\u6570
        function pageShow( total ){
            $(&quot;#Pagination&quot;).pagination(total , {
                current_page:page-1,
                num_edge_entries: 3,
                num_display_entries: 3,
                callback: pageselectCallback,
                items_per_page:count,
                prev_text:&quot;\u4E0A\u4E00\u9875&quot;,
                next_text:&quot;\u4E0B\u4E00\u9875&quot;
            });
        }    

        //\u6570\u636E\u4E0B\u8F7D\u51FD\u6570
        function downloadListData(){
            //1\u3001\u901A\u8FC7get,post\u7B49\u62FF\u6570\u636E
            //2\u3001\u6570\u636E\u62FF\u5B8C\u540E\u8C03\u7528\u5206\u9875\u7684\u521D\u59CB\u5316\u51FD\u6570
            pageShow( total )
        }

    })
</code></pre><h3 id="\u539F\u751Fjs\u5B9E\u73B0\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#\u539F\u751Fjs\u5B9E\u73B0\u5206\u9875" aria-hidden="true">#</a> \u539F\u751FJS\u5B9E\u73B0\u5206\u9875</h3><pre><code>$(function () {            
    //\u7B2C\u51E0\u9875
    var page = 1;
    //\u6BCF\u9875\u591A\u5C11\u4E2A\u6570\u636E
    var count = 10;
    
    function downloadListData () {                
        //\u63A5\u53E3\u4E2D\u7528start
        var start = (page-1)*count;
        var url = readListUrl+&quot;&amp;start=&quot;+start+&quot;&amp;count=&quot;+count;
        
        $.getJSON(url,{},function (r) {
            //\u4E0B\u8F7D\u6570\u636E, \u5E76\u751F\u6210dom\u663E\u793A
            var list = r.data;            
            var html = &quot;&quot;;
            for(var i=0; i&lt;list.length; i++){
                var item = list[i];
            }
            $(&quot;.section_list&quot;).html(html);                    
            
            //\u83B7\u53D6\u9875\u6570
            var pageCount = Math.ceil(r.total/10);

            //\u751F\u6210\u5206\u9875dom, \u5E76\u6DFB\u52A0CSS\u6837\u5F0F
            $(&quot;.list_pagination&quot;).html(&quot;&quot;);
            var html = &quot;&quot;;
            html += &quot;&lt;li data-page=&#39;first&#39;&gt;\u9996\u9875&lt;/li&gt;&quot;
            html += &quot;&lt;li data-page=&#39;prev&#39;&gt;\u4E0A\u4E00\u9875&lt;/li&gt;&quot;
            
            for(var i=0; i&lt;pageCount; i++){
                if(i+1 == page){
                    html += &quot;&lt;li style=&#39;background-color:gray&#39; data-page=&#39;&quot;+(i+1)+&quot;&#39;&gt;&quot;+(i+1)+&quot;&lt;/li&gt;&quot;
                }else{
                    html += &quot;&lt;li data-page=&#39;&quot;+(i+1)+&quot;&#39;&gt;&quot;+(i+1)+&quot;&lt;/li&gt;&quot;
                }
            }
            
            html += &quot;&lt;li data-page=&#39;next&#39;&gt;\u4E0B\u4E00\u9875&lt;/li&gt;&quot;
            html += &quot;&lt;li data-page=&#39;last&#39;&gt;\u6700\u540E\u4E00\u9875&lt;/li&gt;&quot;
            $(&quot;.list_pagination&quot;).html(html);
            
            $(&quot;.list_pagination li&quot;).css({
                &quot;padding&quot;:&quot;3px 5px&quot;,
                &quot;margin-left&quot;:&quot;10px&quot;,
                &quot;border&quot;:&quot;1px solid black&quot;
            })
            
            //\u5B9E\u73B0\u70B9\u51FB\u4E8B\u4EF6
            $(&quot;.list_pagination li&quot;).on(&quot;click&quot;,function () {
                var click_page = $(this).attr(&quot;data-page&quot;);
                
                if(click_page == page){ //\u91CD\u590D\u70B9\u51FB\u5F53\u524D\u9875
                    console.log(&quot;\u5DF2\u7ECF\u52A0\u8F7D!&quot;);
                    return;
                }
                
                if(click_page == &quot;first&quot;){ //\u7B2C\u4E00\u9875
                    page = 1;
                }else if(click_page == &#39;prev&#39;){ //\u524D\u4E00\u9875
                    page--;
                    if(page&lt;1){
                        page=1;
                    }
                }else if(click_page == &#39;next&#39;){ //\u4E0B\u4E00\u9875
                    page++;
                    if(page&gt;pageCount){
                        page=pageCount;
                    }
                }else if(click_page == &quot;last&quot;){ //\u4E0A\u4E00\u9875
                    page = pageCount;
                }else{  //\u70B9\u51FB\u4E86\u6570\u5B57 \u91CD\u65B0\u53D1\u8D77\u8BF7\u6C42
                    page = click_page;
                }

                //\u91CD\u65B0\u52A0\u8F7D\u6570\u636E
                downloadListData ();
            })                    
        })                
    }
    downloadListData ();
})    
</code></pre><h2 id="cookie\u672C\u5730\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#cookie\u672C\u5730\u5B58\u50A8" aria-hidden="true">#</a> cookie\u672C\u5730\u5B58\u50A8</h2><h3 id="\u4E00\u3001\u672C\u5730\u5B58\u50A8\u63D2\u4EF6cookie" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u672C\u5730\u5B58\u50A8\u63D2\u4EF6cookie" aria-hidden="true">#</a> \u4E00\u3001\u672C\u5730\u5B58\u50A8\u63D2\u4EF6Cookie</h3><pre><code>&lt;!--
    \u672C\u5730\uFF1A \u6570\u636E\u5B58\u50A8\u5728\u78C1\u76D8\u4E0A
    
    \u5B9E\u4F8B\uFF1A
        \u767B\u5F55        \u8BB0\u4F4F\u7528\u6237\u540D\uFF0C\u4FDD\u63011\u5468\u767B\u5F55
                        
    \u6301\u4E45\u5316\u5B58\u50A8/\u672C\u5730\u5B58\u50A8
        (1) cookie
        (2) H5 - localStorage
                (sessionStorage\u4F1A\u8BDD\u5B58\u50A8)
        (3) H5 -WebSQL \u6D4F\u89C8\u5668\u4E2D\u7684\u6570\u636E\u5E93\u5B58\u50A8
        (4) H5 -IndexedDb \u7D22\u5F15\u6570\u636E\u5E93
--&gt;
</code></pre><h4 id="_1\u3001\u6839\u636E\u9700\u8981\u5199html\u548Ccss\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u6839\u636E\u9700\u8981\u5199html\u548Ccss\u6837\u5F0F" aria-hidden="true">#</a> 1\u3001\u6839\u636E\u9700\u8981\u5199HTML\u548CCSS\u6837\u5F0F</h4><h4 id="_2\u3001\u5F15\u5165jquery\u6587\u4EF6\u548Ccookie\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u5F15\u5165jquery\u6587\u4EF6\u548Ccookie\u63D2\u4EF6" aria-hidden="true">#</a> 2\u3001\u5F15\u5165jQuery\u6587\u4EF6\u548Ccookie\u63D2\u4EF6</h4><pre><code>\u6CE8\u610F\uFF1A\u6CE8\u610F\u5148\u540E\u987A\u5E8F
</code></pre><h4 id="_3\u3001js\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3\u3001js\u5B9E\u4F8B" aria-hidden="true">#</a> 3\u3001JS\u5B9E\u4F8B</h4><pre><code>&lt;!--
    jquery.cookie.min.js
    \u63D2\u4EF6: \u5148\u5BFC\u5165jquery, \u518D\u5BFC\u5165\u8FD9\u4E2A\u63D2\u4EF6
    
\u7528\u6CD5:
    \u8BFB\u53D6\u67D0\u4E2Acookie\u503C, $.cookie(&quot;username&quot;)
     
    \u8BBE\u7F6Ecookie\u503C 
        $.cookie(&quot;username&quot;,&quot;zhangsan&quot;)  
             \u6709\u6548\u671F-\u7F51\u9875\u4E0D\u5173\u95ED
             
        $.cookie(&quot;username&quot;,&quot;zhangsan&quot;,{
            path:&quot;/&quot;,
            expires:7    //7\u5929\u6709\u6548    //date\u5BF9\u8C61
        })
--&gt;
</code></pre><h3 id="\u4E8C\u3001\u5B9E\u4F8B-\u8BB0\u4F4F\u7528\u6237\u540D\u548C\u5BC6\u7801-\u4E03\u5929\u5185\u81EA\u52A8\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5B9E\u4F8B-\u8BB0\u4F4F\u7528\u6237\u540D\u548C\u5BC6\u7801-\u4E03\u5929\u5185\u81EA\u52A8\u767B\u5F55" aria-hidden="true">#</a> \u4E8C\u3001\u5B9E\u4F8B\uFF1A\u8BB0\u4F4F\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C \u4E03\u5929\u5185\u81EA\u52A8\u767B\u5F55</h3><h4 id="_1\u3001html\u548Ccss" tabindex="-1"><a class="header-anchor" href="#_1\u3001html\u548Ccss" aria-hidden="true">#</a> 1\u3001HTML\u548CCSS</h4><pre><code>&lt;div id=&quot;&quot;&gt;
    &lt;p&gt;\u5BFC\u822A\u680F&lt;/p&gt;
    &lt;a class=&quot;login-link&quot; href=&quot;&quot;&gt;\u767B\u5F55&lt;/a&gt; &lt;a class=&quot;reg-link&quot; href=&quot;&quot;&gt;\u6CE8\u518C&lt;/a&gt;
&lt;/div&gt;

&lt;hr /&gt;

&lt;div id=&quot;&quot;&gt;
    &lt;form action=&quot;&quot; method=&quot;post&quot;&gt;
        &lt;input class=&quot;username&quot; type=&quot;text&quot; /&gt;&lt;br /&gt;
        &lt;input class=&quot;password&quot; type=&quot;password&quot; /&gt;&lt;br /&gt;
        &lt;div id=&quot;&quot;&gt;
            &lt;input class=&quot;remember&quot; type=&quot;checkbox&quot; value=&quot;&quot;/&gt;\u8BB0\u4F4F\u7528\u6237\u540D\u548C\u5BC6\u7801&lt;br/&gt;
            &lt;input type=&quot;checkbox&quot; value=&quot;&quot;/&gt;\u4E00\u5468\u4E4B\u5185\u81EA\u52A8\u767B\u5F55&lt;br/&gt;
        &lt;/div&gt;
        &lt;div id=&quot;&quot;&gt;
            &lt;button class=&quot;login&quot;&gt;\u767B\u5F55&lt;/button&gt;
        &lt;/div&gt;
    &lt;/form&gt;        
&lt;/div&gt;
</code></pre><h3 id="js\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#js\u5B9E\u73B0" aria-hidden="true">#</a> JS\u5B9E\u73B0</h3><pre><code>//\u5BFC\u5165\u76F8\u5173\u6587\u4EF6
&lt;script src=&quot;jquery-1.9.1.min.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;jquery.cookie.min.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
        
    $(function () {
        //\u767B\u9646\u540E\u5C06\u5BFC\u822A\u680F\u7684\u767B\u5F55\u6539\u4E3A\u4E2A\u4EBA\u7528\u6237\u540D
        if($.cookie(&quot;isLogin&quot;) == &quot;1&quot;){
            $(&quot;.login-link&quot;).html($.cookie(&quot;username&quot;));
        }
        
        //\u5224\u65AD\u81EA\u52A8\u767B\u5F55(\u83B7\u53D6\u7528\u6237\u540D\u3001\u5BC6\u7801\u653E\u5165\u5BF9\u5E94\u7684input\u6846)
        if($.cookie(&quot;username&quot;)){
            $(&quot;.username&quot;).val($.cookie(&quot;username&quot;))
        }
        if($.cookie(&quot;password&quot;)){
            $(&quot;.password&quot;).val($.cookie(&quot;password&quot;))
        }
        if($.cookie(&quot;isRemember&quot;) == &quot;1&quot;){
            $(&quot;.remember&quot;)[0].checked = true;
        }
        
        //\u8BBE\u7F6E\u7528\u6237\u540D\u3001\u5BC6\u7801, \u53EF\u4E0E\u540E\u53F0\u4EA4\u4E92\u52A8\u6001\u83B7\u53D6 
        var username = &quot;zz&quot;
        var password = &quot;123456&quot;
        
        //\u70B9\u51FB\u767B\u5F55\u6309\u94AE\u7684\u4E8B\u4EF6\u5904\u7406
        $(&quot;.login&quot;).click(function () {
            //\u767B\u9646\u65F6\u83B7\u53D6\u8F93\u5165\u7684 \u7528\u6237\u540D \u548C \u5BC6\u7801
            var inputUsername = $(&quot;.username&quot;).val();
            var inputPassword = $(&quot;.password&quot;).val();
            
            //\u5224\u65AD\u8F93\u5165\u7684\u7528\u6237\u540D\u5BC6\u7801\u4E0E\u8BBE\u7F6E\u7684\u7528\u6237\u540D\u5BC6\u7801\u662F\u5426\u76F8\u7B49
            if(inputUsername == username&amp;&amp;inputPassword == password){
                
                //\u5B9A\u4E49\u4E86\u8DDD\u79BB\u5F53\u524D\u65F6\u95F420 * 1000ms = 20s \u7684\u65F6\u95F4
                var date = new Date();
                date.setTime(date.getTime()+20*1000)
            
                //\u5982\u679C\u8BB0\u4F4F\u5BC6\u7801\u6846 \u88AB\u9009\u4E2D \u8BB0\u4F4F\u7528\u6237\u540D\u548C\u5BC6\u7801\u7B49
                if($(&quot;.remember&quot;)[0].checked){
                    $.cookie(&quot;isRemember&quot;,&quot;1&quot;,{
                        path:&quot;/&quot;,
                        expires:date    //date\u5BF9\u8C61
                    })
                    $.cookie(&quot;username&quot;,inputUsername,{
                        path:&quot;/&quot;,
                        expires:date    //date\u5BF9\u8C61
                    })
                    $.cookie(&quot;password&quot;,inputPassword,{
                        path:&quot;/&quot;,
                        expires:date    //date\u5BF9\u8C61
                    })
                }                    
                
                $(&quot;.login-link&quot;).html($.cookie(&quot;username&quot;))
                
                $.cookie(&quot;isLogin&quot;,&quot;1&quot;,{
                    path:&quot;/&quot;,
                    expires:date    //7\u5929\u6709\u6548    //date\u5BF9\u8C61
                })
            }else{
                alert(&quot;\u767B\u5F55\u5931\u8D25&quot;)
            }
            
        })
        
    })
    
&lt;/script&gt;
</code></pre><h2 id="jqcloud\u8BCD\u4E91\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#jqcloud\u8BCD\u4E91\u63D2\u4EF6" aria-hidden="true">#</a> jQCloud\u8BCD\u4E91\u63D2\u4EF6</h2><h3 id="_1\u3001\u6DFB\u52A0css" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u6DFB\u52A0css" aria-hidden="true">#</a> 1\u3001\u6DFB\u52A0css</h3><pre><code>&lt;link href=&quot;https://cdn.bootcss.com/jqcloud/1.0.4/jqcloud.css&quot; rel=&quot;stylesheet&quot;&gt;
</code></pre><h3 id="_2\u3001\u6DFB\u52A0js" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u6DFB\u52A0js" aria-hidden="true">#</a> 2\u3001\u6DFB\u52A0js</h3><pre><code>&lt;script src=&quot;https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://cdn.bootcss.com/jqcloud/1.0.4/jqcloud-1.0.4.min.js&quot;&gt;&lt;/script&gt;
</code></pre><h3 id="_3\u3001\u6DFB\u52A0\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u6DFB\u52A0\u6807\u7B7E" aria-hidden="true">#</a> 3\u3001\u6DFB\u52A0\u6807\u7B7E</h3><pre><code>&lt;div id=&quot;tagsCloud&quot; style=&quot;width: 800px; height: 400px;&quot;&gt;&lt;/div&gt;  
</code></pre><h3 id="_4\u3001\u6DFB\u52A0\u8BCD\u4E91\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u6DFB\u52A0\u8BCD\u4E91\u4EE3\u7801" aria-hidden="true">#</a> 4\u3001\u6DFB\u52A0\u8BCD\u4E91\u4EE3\u7801</h3><pre><code>&lt;script type=&quot;text/javascript&quot;&gt;
    var word_array = [
        {text: &quot;\u767E\u5EA6&quot;, weight: 10, html: {title: &quot;\u767E\u5EA6\u641C\u7D22\u5F15\u64CE&quot;}},
        {text: &quot;\u767E\u5EA6&quot;, weight: 9, link: &quot;http://www.baidu.com/&quot;},
        {text: &quot;\u767E\u5EA6&quot;, weight: 8, link: &quot;http://www.baidu.com/&quot;},
        {text: &quot;\u767E\u5EA6&quot;, weight: 7, link:&quot;http://www.baidu.com&quot;}
    ];
    $(function() {
        $(&quot;#tagsCloud&quot;).jQCloud(word_array);
    });
&lt;/script&gt;  
</code></pre><h3 id="_5\u3001gridea\u6DFB\u52A0\u4E91\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#_5\u3001gridea\u6DFB\u52A0\u4E91\u6807\u7B7E" aria-hidden="true">#</a> 5\u3001Gridea\u6DFB\u52A0\u4E91\u6807\u7B7E</h3><pre><code>&lt;!-- \u5728tags.ejs\u4E2D\u6DFB\u52A0html\u4EE3\u7801 --&gt;
&lt;div class=&quot;paper&quot; style=&quot;overflow: hidden&quot;&gt;
	&lt;div id=&quot;tagsCloud&quot; style=&quot;width: 100%;height: 600px;&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- \u6DFB\u52A0js\u4EE3\u7801 --&gt;
&lt;script src=&quot;&lt;%= themeConfig.domain %&gt;/media/jqcloud/jqcloud-1.0.4.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
	if ($(&#39;#tagsCloud&#39;)) {
		var cloudArr = [];
		// \u904D\u5386\u6807\u7B7E
		var tags = JSON.parse(&#39;&lt;%= JSON.stringify(tags) %&gt;&#39;.replace(/&amp;#34;/g, &#39;&quot;&#39;));
		tags.forEach((tag, tagIndex) =&gt; {
			cloudArr.push({
				weight: tags.length - tagIndex,
				text: tag.name,
				link: tag.link,
			})
		})
		$(&#39;#tagsCloud&#39;).jQCloud(cloudArr);
	}
&lt;/script&gt;
</code></pre><h3 id="\u6548\u679C\u56FE" tabindex="-1"><a class="header-anchor" href="#\u6548\u679C\u56FE" aria-hidden="true">#</a> \u6548\u679C\u56FE</h3><p><img src="https://fengling68.github.io/imgbed/images-upic/1561991796683.png" alt=""></p><h2 id="vuedraggable\u62D6\u62FD\u5E93" tabindex="-1"><a class="header-anchor" href="#vuedraggable\u62D6\u62FD\u5E93" aria-hidden="true">#</a> vuedraggable\u62D6\u62FD\u5E93</h2><h3 id="\u4E00\u3001\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5B89\u88C5" aria-hidden="true">#</a> \u4E00\u3001\u5B89\u88C5</h3><pre><code>npm i -S vuedraggable
</code></pre><h3 id="\u4E8C\u3001\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5F15\u5165" aria-hidden="true">#</a> \u4E8C\u3001\u5F15\u5165</h3><pre><code>import draggable from &#39;vuedraggable&#39;;

components: {
  draggable,
},
</code></pre><h3 id="\u4E09\u3001\u4F7F\u7528-\u64CD\u4F5C\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u4F7F\u7528-\u64CD\u4F5C\u6570\u636E" aria-hidden="true">#</a> \u4E09\u3001\u4F7F\u7528(\u64CD\u4F5C\u6570\u636E)</h3>`,94),s=o(`<h3 id="\u56DB\u3001\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u56DB\u3001\u6CE8\u610F\u4E8B\u9879</h3><pre><code>draggable\uFF1A
    v-model=&quot;myArray&quot; \u6216\u8005 :list=&quot;myArray&quot;
    draggable=&quot;.item&quot; \u8868\u793Aclass=&quot;item&quot;\u7684\u5143\u7D20\u53EF\u62D6\u52A8
    dhandle=&quot;.handle&quot; \u8868\u793Aclass=&quot;handle&quot;\u7684\u5143\u7D20\u53EF\u63A7\u5236\u62D6\u52A8
    group=&quot;samegroup&quot; \u5982\u8981\u4E24\u4E2A\u4EE5\u4E0A\u5BB9\u5668\u95F4\u62D6\u52A8\u6DFB\u52A0\u76F8\u540C\u7684group\u540D

draggable\u5B50\u5143\u7D20\u4E0A\uFF1A
    :disabled=&quot;false&quot; \u7981\u6B62\u79FB\u52A8

\u5176\u4ED6\uFF1A
    \u70B9\u51FB\u5220\u9664\u5143\u7D20\u65F6\u53EA\u89E6\u53D1choose\u4E8B\u4EF6
    \u6DFB\u52A0\u5220\u9664\u5143\u7D20\u7528\u53EF\u4EE5\u6539\u53D8\u539F\u6570\u7EC4\u548C\u5BF9\u8C61\u7684\u65B9\u6CD5
</code></pre><h2 id="markdown-it" tabindex="-1"><a class="header-anchor" href="#markdown-it" aria-hidden="true">#</a> markdown-it</h2><h3 id="_1\u3001\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u63D2\u4EF6" aria-hidden="true">#</a> 1\u3001\u63D2\u4EF6</h3><p>// markdown-it npm install markdown-it --save // vue\u7248markdown markdown-it-vue // emoji\u8868\u60C5 npm install markdown-it-emoji --save // \u6570\u5B66\u516C\u5F0F npm install markdown-it-katex --save // \u7ED9image\u8BBE\u7F6E\u5BBD\u9AD8 npm install markdown-it-imsize --save // \u7ED9\u6807\u7B7E\u8BBE\u7F6E\u5C5E\u6027\u5982class\u3001data-\u81EA\u5B9A\u4E49\u5C5E\u6027 markdown-it-attrs // \u811A\u6CE8 markdown-it-footnote // \u6807\u7B7E markdown-it-anchor // \u76EE\u5F55 markdown-it-toc-and-anchor // \u6570\u5B66\u51FD\u6570 markdown-it-math // \u4EBA\u7269\u5217\u8868 markdown-it-task-lists // \u590D\u9009\u6846 markdown-it-checkbox // \u591A\u6837\u5316\u8868\u683C markdown-it-multimd-table // \uFF1F... markdown-it-mark // \u4E0A\u6807 markdown-it-sup // \u4E0B\u6807 markdown-it-sub</p>`,5);function d(t,c){return r(),i("div",null,[l,n("pre",null,[n("code",null,`data() {
  return {
    myArray1: [1, 2, 3, 4, 5],
    myArray2: [6, 7, 8, 9, 10],
  };
},

<div>
  <draggable
    group="people"
    v-model="myArray1"
    @choose='onChoose1'
    @clone='onClone1'
    @start='onStart1'
    @update='onUpdate1'
    @change="onChange1"
    @add='onAdd1'
    @remove='onRemove1'
    @sort='onSort1'
    @end='onEnd1'
    @filter='onFilter1'
  >
    <p
      v-for="(item, i) in myArray1" v-bind:key="i"
    >draggableOne---`+e(t.item)+`</p>

    <button slot="header" @click="addEle">draggableOne---Add</button>
    <button slot="footer" @click="removeEle">draggableOne---Remove</button>
  </draggable>

  <draggable
    group="people"
    v-model="myArray2"
    @choose='onChoose2'
    @clone='onClone2'
    @start='onStart2'
    @update='onUpdate2'
    @change="onChange2"
    @add='onAdd2'
    @remove='onRemove2'
    @sort='onSort2'
    @end='onEnd2'
    @filter='onFilter2'
  >
    <p
      v-for="(item, i) in myArray2" v-bind:key="i"
    >draggableTwo---`+e(t.item)+`</p>
  </draggable>
</div>


methods: {
  onChoose1() {
    console.log('onChoose1');
  },
  onClone1() {
    console.log('onClone1');
  },
  onStart1() {
    console.log('onStart1');
  },
  onUpdate1() {
    console.log('onUpdate1');
  },
  onChange1() {
    console.log('onChange1');
  },
  onSort1() {
    console.log('onSort1');
  },
  onAdd1() {
    console.log('onAdd1');
  },
  onRemove1() {
    console.log('onRemove1');
  },
  onEnd1() {
    console.log('onEnd1');
    console.log(this.myArray1);
  },
  onFilter1() {
    console.log('onFilter1');
  },


  onChoose2() {
    console.log('onChoose2');
  },
  onClone2() {
    console.log('onClone2');
  },
  onStart2() {
    console.log('onStart2');
  },
  onUpdate2() {
    console.log('onUpdate2');
  },
  onChange2() {
    console.log('onChange2');
  },
  onAdd2() {
    console.log('onAdd2');
  },
  onRemove2() {
    console.log('onRemove2');
  },
  onSort2() {
    console.log('onSort2');
  },
  onEnd2() {
    console.log('onEnd2');
    console.log(this.myArray2);
  },
  onFilter2() {
    console.log('onFilter2');
  },


  addEle() {
    this.myArray1.push('add');
  },
  removeEle() {
    this.myArray1.pop();
  },
}
`,1)]),s])}const g=a(u,[["render",d],["__file","\u5E38\u7528\u63D2\u4EF6.html.vue"]]);export{g as default};

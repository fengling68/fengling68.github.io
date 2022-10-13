import{_ as n,o as t,c as o,f as e}from"./app.f94e1640.js";const i={},a=e(`<h1 id="\u61D2\u52A0\u8F7D\u548C\u6EDA\u52A8\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u61D2\u52A0\u8F7D\u548C\u6EDA\u52A8\u52A0\u8F7D" aria-hidden="true">#</a> \u61D2\u52A0\u8F7D\u548C\u6EDA\u52A8\u52A0\u8F7D</h1><h2 id="\u61D2\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u61D2\u52A0\u8F7D" aria-hidden="true">#</a> \u61D2\u52A0\u8F7D</h2><pre><code>/*******************  \u61D2\u52A0\u8F7D lazyLoad  ********************/
\u4E00\u3001\u61D2\u52A0\u8F7D\u4F18\u70B9
    1\u3001\u8282\u7701\u7F51\u7EDC\u8D44\u6E90
    2\u3001\u5BF9\u7528\u6237\u4F53\u9A8C, \u4F7F\u7528\u53CB\u597D
    3\u3001\u5BF9\u670D\u52A1\u5668\u800C\u8A00, \u8D1F\u8F7D\u538B\u529B\u51CF\u5C11

\u4E8C\u3001\u5B9E\u73B0\u539F\u7406
    1\u3001\u53EF\u89C6\u533A\u57DF\u5185\u7684\u8D44\u6E90\u663E\u793A\u7ED9\u7528\u6237\u770B

\u4E09\u3001\u529F\u80FD\u5B9E\u73B0
    1\u3001\u628A\u4E00\u5F20\u56FE\u7247\u9ED8\u8BA4\u4E3A\u5360\u4F4D\u56FE\uFF0C\u771F\u6B63\u56FE\u7247\u653E\u5728\u81EA\u5B9A\u4E49\u5C5E\u6027\u4E2D
    2\u3001\u6EDA\u52A8\u65F6\u628A\u81EA\u5B9A\u4E49\u5C5E\u6027\u4E2D\u7684\u5730\u5740\u7ED9src\uFF0C\u66FF\u6362\u6210\u771F\u6B63\u7684\u5730\u5740

\u56DB\u3001\u9700\u8981\u53C2\u6570
    1\u3001\u5C0F\u56FE\u8DDD\u79BB\u9876\u90E8\u7684\u9AD8\u5EA6
    2\u3001\u5F53\u524D\u7A97\u53E3\u7684\u9AD8\u5EA6
    3\u3001\u6EDA\u52A8\u6761\u7684\u9AD8\u5EA6
    \u7A97\u53E3\u9AD8\u5EA6 + \u6EDA\u52A8\u6761\u9AD8\u5EA6 &gt; \u5C0F\u56FE\u8DDD\u79BB\u9876\u90E8\u7684\u9AD8\u5EA6



$(function(){
     lazyLoad();
})

$(window).on(&#39;scroll&#39;,function(){
   lazyLoad();
})

function lazyLoad(){
     //\u83B7\u53D6\u6240\u6709\u7684\u56FE\u7247\u96C6\u5408
    var $pictureItem =  $(&quot;.commodity-list  img&quot;);
    //\u7A97\u53E3\u9AD8\u5EA6
    var  $winHeight = $(window).height();
    //\u6EDA\u52A8\u6761\u9AD8\u5EA6
    var  $scrollHeight = $(window).scrollTop();
    $pictureItem.each(function(index,ele){
        if($(ele).offset().top &lt; ($winHeight+$scrollHeight) ){
           setTimeout(function(){
            if($(ele).attr(&#39;src&#39;)  ==  &quot;images/placeholder.jpg&quot;){
                $(ele).attr(&#39;src&#39;, $(ele).attr(&#39;data-src&#39;));
            }
           },2000) 
        }
    })
}
</code></pre><h2 id="\u6EDA\u52A8\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u6EDA\u52A8\u52A0\u8F7D" aria-hidden="true">#</a> \u6EDA\u52A8\u52A0\u8F7D</h2><pre><code>/*******************  \u6EDA\u52A8\u52A0\u8F7D   ********************/
ES6\u5728PC\u7AEF\u6709\u5F88\u591A\u4E0D\u517C\u5BB9,    ES6\u8F6CES5 \u3002

\u4E00\u3001\u6EDA\u52A8\u52A0\u8F7D\u539F\u7406
\u6EDA\u52A8\u5230\u5E95\u90E8\uFF0C\u53D1\u9001ajax\u8BF7\u6C42\uFF0C\u5C06\u62FF\u5230\u7684\u6570\u636E\u8FFD\u52A0\u5230\u9875\u9762\u540E\u3002

\u4E8C\u3001\u9700\u8981\u53C2\u6570
1\u3001\u6587\u6863\u7684\u9AD8\u5EA6
2\u3001\u6EDA\u52A8\u6761\u7684\u9AD8\u5EA6
3\u3001\u7A97\u53E3\u7684\u9AD8\u5EA6

\u4E09\u3001\u95EE\u9898
\u6ED1\u5230\u5E95\u90E8\u518D\u5411\u4E0A\u6ED1\uFF0C\u4F1A\u51FA\u73B0\u53CD\u590D\u8BF7\u6C42\u6570\u636E\u95EE\u9898\uFF1F
\u89E3\u51B3\u65B9\u6CD5\uFF1A\u6DFB\u52A0\u4E00\u4E2A \u201C\u6B63\u5728\u52A0\u8F7D...\u201D\u7684\u63D0\u793A, \u5224\u65AD\u5982\u679C\u6709\u6B63\u5728\u52A0\u8F7D\u7684\u6837\u5F0F\u8BDD, \u4E0D\u518D\u91CD\u590D\u8BF7\u6C42\u6570\u636E\u3002\u5148\u9690\u85CF\u3001\u663E\u793A\u3001\u518D\u9690\u85CF



$(window).on(&#39;scroll&#39;,function(){
    //\u6587\u6863\u9AD8\u5EA6
    var $documentHeight = $(document).height();
    //\u7A97\u53E3\u9AD8\u5EA6
    var  $winHeight = $(window).height();
    //\u6EDA\u52A8\u6761\u9AD8\u5EA6
    var  $scrollHeight = $(window).scrollTop();

    if(($winHeight+$scrollHeight)  &gt;=  $documentHeight){
        if($(&quot;#J_loadingData&quot;).css(&#39;display&#39;) == &quot;none&quot;){
             $(&quot;#J_loadingData&quot;).show();
             setTimeout(function(){
                 $.get(&#39;data/index.json&#39;,function(resp){
                    var data = resp.data.commodityList;
                    var liHTML = &quot;&quot;;
                    data.forEach(function(obj,ele){
                        liHTML += &#39;&lt;li&gt;&#39;
                            +&#39;&lt;div class=&quot;left-picture&quot;&gt;&#39;
                                +&#39;&lt;img src=&quot;images/placeholder.jpg&quot; data-src=&#39;+obj.commodityImg+&#39; /&gt;&#39;
                            +&#39;&lt;/div&gt;&#39;
                            +&#39;&lt;div class=&quot;right-info&quot;&gt;&#39;
                                +&#39;&lt;span class=&quot;commodity-title&quot;&gt;&#39;+obj.commodityInfo+&#39;&lt;/span&gt;&#39;
                                +&#39;&lt;span class=&quot;market-price&quot;&gt;\u5E02\u573A\u4EF7\uFF1A\uFFE5&#39;+obj.marketPrice+&#39;.00&lt;/span&gt;&#39;
                                +&#39;&lt;span class=&quot;sc-price&quot;&gt;\u68EE\u5DE2\u4EF7\uFF1A\uFFE5&#39;+obj.scPrice+&#39;.00&lt;/span&gt;&#39;
                            +&#39;&lt;/div&gt;&#39;
                        +&#39;&lt;/li&gt;&#39;;
                    })

                    $(&quot;.commodity-list&quot;).html(  $(&quot;.commodity-list&quot;).html() +  liHTML );
                    $(&quot;#J_loadingData&quot;).hide();
                })
            },2000)
        }
    }
})
</code></pre>`,5),c=[a];function l(r,s){return t(),o("div",null,c)}const u=n(i,[["render",l],["__file","19-\u61D2\u52A0\u8F7D\u548C\u6EDA\u52A8\u52A0\u8F7D.html.vue"]]);export{u as default};

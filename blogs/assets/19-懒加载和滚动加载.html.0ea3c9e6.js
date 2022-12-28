import{_ as n,o as t,c as o,f as e}from"./app.70e3165a.js";const i={},a=e(`<h1 id="懒加载和滚动加载" tabindex="-1"><a class="header-anchor" href="#懒加载和滚动加载" aria-hidden="true">#</a> 懒加载和滚动加载</h1><h2 id="懒加载" tabindex="-1"><a class="header-anchor" href="#懒加载" aria-hidden="true">#</a> 懒加载</h2><pre><code>/*******************  懒加载 lazyLoad  ********************/
一、懒加载优点
    1、节省网络资源
    2、对用户体验, 使用友好
    3、对服务器而言, 负载压力减少

二、实现原理
    1、可视区域内的资源显示给用户看

三、功能实现
    1、把一张图片默认为占位图，真正图片放在自定义属性中
    2、滚动时把自定义属性中的地址给src，替换成真正的地址

四、需要参数
    1、小图距离顶部的高度
    2、当前窗口的高度
    3、滚动条的高度
    窗口高度 + 滚动条高度 &gt; 小图距离顶部的高度



$(function(){
     lazyLoad();
})

$(window).on(&#39;scroll&#39;,function(){
   lazyLoad();
})

function lazyLoad(){
     //获取所有的图片集合
    var $pictureItem =  $(&quot;.commodity-list  img&quot;);
    //窗口高度
    var  $winHeight = $(window).height();
    //滚动条高度
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
</code></pre><h2 id="滚动加载" tabindex="-1"><a class="header-anchor" href="#滚动加载" aria-hidden="true">#</a> 滚动加载</h2><pre><code>/*******************  滚动加载   ********************/
ES6在PC端有很多不兼容,    ES6转ES5 。

一、滚动加载原理
滚动到底部，发送ajax请求，将拿到的数据追加到页面后。

二、需要参数
1、文档的高度
2、滚动条的高度
3、窗口的高度

三、问题
滑到底部再向上滑，会出现反复请求数据问题？
解决方法：添加一个 “正在加载...”的提示, 判断如果有正在加载的样式话, 不再重复请求数据。先隐藏、显示、再隐藏



$(window).on(&#39;scroll&#39;,function(){
    //文档高度
    var $documentHeight = $(document).height();
    //窗口高度
    var  $winHeight = $(window).height();
    //滚动条高度
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
                                +&#39;&lt;span class=&quot;market-price&quot;&gt;市场价：￥&#39;+obj.marketPrice+&#39;.00&lt;/span&gt;&#39;
                                +&#39;&lt;span class=&quot;sc-price&quot;&gt;森巢价：￥&#39;+obj.scPrice+&#39;.00&lt;/span&gt;&#39;
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
</code></pre>`,5),c=[a];function l(r,s){return t(),o("div",null,c)}const u=n(i,[["render",l],["__file","19-懒加载和滚动加载.html.vue"]]);export{u as default};

(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{807:function(n,t,a){"use strict";a.r(t);var i=a(1),e=Object(i.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"懒加载和滚动加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#懒加载和滚动加载"}},[n._v("#")]),n._v(" 懒加载和滚动加载")]),n._v(" "),a("h2",{attrs:{id:"懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#懒加载"}},[n._v("#")]),n._v(" 懒加载")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("/*******************  懒加载 lazyLoad  ********************/\n一、懒加载优点\n    1、节省网络资源\n    2、对用户体验, 使用友好\n    3、对服务器而言, 负载压力减少\n\n二、实现原理\n    1、可视区域内的资源显示给用户看\n\n三、功能实现\n    1、把一张图片默认为占位图，真正图片放在自定义属性中\n    2、滚动时把自定义属性中的地址给src，替换成真正的地址\n\n四、需要参数\n    1、小图距离顶部的高度\n    2、当前窗口的高度\n    3、滚动条的高度\n    窗口高度 + 滚动条高度 > 小图距离顶部的高度\n\n\n\n$(function(){\n     lazyLoad();\n})\n\n$(window).on('scroll',function(){\n   lazyLoad();\n})\n\nfunction lazyLoad(){\n     //获取所有的图片集合\n    var $pictureItem =  $(\".commodity-list  img\");\n    //窗口高度\n    var  $winHeight = $(window).height();\n    //滚动条高度\n    var  $scrollHeight = $(window).scrollTop();\n    $pictureItem.each(function(index,ele){\n        if($(ele).offset().top < ($winHeight+$scrollHeight) ){\n           setTimeout(function(){\n            if($(ele).attr('src')  ==  \"images/placeholder.jpg\"){\n                $(ele).attr('src', $(ele).attr('data-src'));\n            }\n           },2000) \n        }\n    })\n}\n")])])]),a("h2",{attrs:{id:"滚动加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#滚动加载"}},[n._v("#")]),n._v(" 滚动加载")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("/*******************  滚动加载   ********************/\nES6在PC端有很多不兼容,    ES6转ES5 。\n\n一、滚动加载原理\n滚动到底部，发送ajax请求，将拿到的数据追加到页面后。\n\n二、需要参数\n1、文档的高度\n2、滚动条的高度\n3、窗口的高度\n\n三、问题\n滑到底部再向上滑，会出现反复请求数据问题？\n解决方法：添加一个 “正在加载...”的提示, 判断如果有正在加载的样式话, 不再重复请求数据。先隐藏、显示、再隐藏\n\n\n\n$(window).on('scroll',function(){\n    //文档高度\n    var $documentHeight = $(document).height();\n    //窗口高度\n    var  $winHeight = $(window).height();\n    //滚动条高度\n    var  $scrollHeight = $(window).scrollTop();\n\n    if(($winHeight+$scrollHeight)  >=  $documentHeight){\n        if($(\"#J_loadingData\").css('display') == \"none\"){\n             $(\"#J_loadingData\").show();\n             setTimeout(function(){\n                 $.get('data/index.json',function(resp){\n                    var data = resp.data.commodityList;\n                    var liHTML = \"\";\n                    data.forEach(function(obj,ele){\n                        liHTML += '<li>'\n                            +'<div class=\"left-picture\">'\n                                +'<img src=\"images/placeholder.jpg\" data-src='+obj.commodityImg+' />'\n                            +'</div>'\n                            +'<div class=\"right-info\">'\n                                +'<span class=\"commodity-title\">'+obj.commodityInfo+'</span>'\n                                +'<span class=\"market-price\">市场价：￥'+obj.marketPrice+'.00</span>'\n                                +'<span class=\"sc-price\">森巢价：￥'+obj.scPrice+'.00</span>'\n                            +'</div>'\n                        +'</li>';\n                    })\n\n                    $(\".commodity-list\").html(  $(\".commodity-list\").html() +  liHTML );\n                    $(\"#J_loadingData\").hide();\n                })\n            },2000)\n        }\n    }\n})\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);
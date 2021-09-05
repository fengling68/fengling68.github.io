(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{569:function(n,e,t){"use strict";t.r(e);var a=t(1),r=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"常用插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用插件"}},[n._v("#")]),n._v(" 常用插件")]),n._v(" "),t("h2",{attrs:{id:"swiper轮播图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#swiper轮播图"}},[n._v("#")]),n._v(" Swiper轮播图")]),n._v(" "),t("h3",{attrs:{id:"_1、css部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、css部分"}},[n._v("#")]),n._v(" 1、CSS部分")]),n._v(" "),t("pre",[t("code",[n._v("//轮播图竖排时注意高度\n.swiper-container {\n    width: 100%;\n    margin: 0 auto;\n}\n\n.swiper-container img {\n    width: 100%;\n}\n")])]),n._v(" "),t("h3",{attrs:{id:"_2、html部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、html部分"}},[n._v("#")]),n._v(" 2、HTML部分")]),n._v(" "),t("pre",[t("code",[n._v('\x3c!--轮播图容器  名字是固定的--\x3e\n<div class="swiper-container">\n\n    \x3c!--轮播的图片--\x3e\n    <div class="swiper-wrapper">            \n        <div class="swiper-slide">\n            <img src="img/1-1.jpg"/>\n        </div>\n        <div class="swiper-slide">\n            <img src="img/1-2.jpg"/>\n        </div>\n        <div class="swiper-slide">\n            <img src="img/1-3.png"/>\n        </div>\n        <div class="swiper-slide">\n            <img src="img/1-4.jpg"/>\n        </div>                \n    </div>\n    \n    \x3c!--底部的控制按钮--\x3e\n    <div class="swiper-pagination">\n        \n    </div>\n</div>\n')])]),n._v(" "),t("h3",{attrs:{id:"_3、js部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、js部分"}},[n._v("#")]),n._v(" 3、JS部分")]),n._v(" "),t("pre",[t("code",[n._v('/* 1、引入文件 */\n<script src="swiper/swiper.min.js" type="text/javascript" charset="utf-8"><\/script>\n<script type="text/javascript">\n    \n    /* 2、初始化操作 */\n    \n    //创建轮播图对象\n    //参数一：轮播对象的选择器\n    //参数二：配置轮播图的选项\n    var mySwiper = new Swiper(".swiper-container",{\n        //是否循环滚动\n        loop:true,\n        //自动滚动时间\n        autoplay: 2000,\n        //指定分页组件,选择器\n        pagination : ".swiper-pagination",\n        //点击分页,是否切换图片\n        paginationClickable: true,\n        \n        //变小手\n        grabCursor: true,\n        //第一次加载的时候，加载的slide序号\n        initialSlide: 1,\n        //改变方向——垂直切换 默认水平\n        direction: "vertical"，\n\n         //切换效果\n        //slide:滑动  fade:淡入淡出  cube：立方体  coverflow：封面浏览  flip：轻弹\n        effect: "slide"\n\n        //其他配置项参考说明文档\n        ...\n    })\n    \n<\/script>\n')])]),n._v(" "),t("h2",{attrs:{id:"vue中使用swiper插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue中使用swiper插件"}},[n._v("#")]),n._v(" Vue中使用swiper插件")]),n._v(" "),t("h3",{attrs:{id:"_1、各种相关文件的引入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、各种相关文件的引入"}},[n._v("#")]),n._v(" 1、各种相关文件的引入")]),n._v(" "),t("h3",{attrs:{id:"_2、css同上"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、css同上"}},[n._v("#")]),n._v(" 2、CSS同上")]),n._v(" "),t("h3",{attrs:{id:"_3、html部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、html部分"}},[n._v("#")]),n._v(" 3、HTML部分")]),n._v(" "),t("pre",[t("code",[n._v('\x3c!--轮播图容器  名字是固定的--\x3e\n<div class="swiper-container">            \n    \x3c!--轮播的图片--\x3e\n    <div class="swiper-wrapper">            \n        <div v-for="item in adsList" class="swiper-slide">\n            <img v-bind:src="imagePrefix+item.img_url"/>\n        </div>           \n    </div>            \n    \x3c!--底部的控制按钮--\x3e\n    <div class="swiper-pagination"></div>\n</div>\n')])]),n._v(" "),t("h3",{attrs:{id:"_4、vue的js部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、vue的js部分"}},[n._v("#")]),n._v(" 4、Vue的js部分")]),n._v(" "),t("pre",[t("code",[n._v('created:function(){\n    ......\n\n    /* 下载广告数据 url后是广告的地址 */\n    this.$http({url:adsUrl}).then(function(response){\n        var list = response.data.data;\n        this.adsList = list;\n        /* Vue有一个虚拟dom机制, 数据改变, 界面自动变化 */\n        /* Vue.$nextTick()表示界面更新完成的下一个阶段 */\n        Vue.nextTick(function(){\n            var mySwiper = new Swiper(".swiper-container",{\n                //是否循环滚动\n                loop:true,\n                //自动滚动时间\n                autoplay: 2000,\n                //指定分页组件,选择器\n                pagination : ".swiper-pagination",\n                //点击分页,是否切换图片\n                paginationClickable: true,\n                //变小手\n                grabCursor: true,\n                //第一次加载的时候，加载的slide序号\n                initialSlide: 1,\n                //垂直切换 默认水平\n                direction: "vertical"，\n\n                 //切换效果\n                //slide:滑动  fade:淡入淡出  cube：立方体  coverflow：封面浏览  flip：轻弹\n                effect: "slide"                    \n            })\n        })\n    })\n}\n')])]),n._v(" "),t("h2",{attrs:{id:"iscroll上拉刷新下拉加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iscroll上拉刷新下拉加载"}},[n._v("#")]),n._v(" iScroll上拉刷新下拉加载")]),n._v(" "),t("h3",{attrs:{id:"_1、css部分-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、css部分-2"}},[n._v("#")]),n._v(" 1、CSS部分")]),n._v(" "),t("h3",{attrs:{id:"_2、html部分-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、html部分-2"}},[n._v("#")]),n._v(" 2、HTML部分")]),n._v(" "),t("pre",[t("code",[n._v('<div class="header">\n    我是头部\n</div>\n\n<div class="wrapper">\n    <div class="scroll">\n        <ul>                    \n            <li>秦时明月之万里长城</li>\n            <li>秦时明月之万里长城</li>\n            ...\n            ...\n        </ul>\n    </div>\n</div>\n\n<div class="footer">\n    我是底部\n</div>\n')])]),n._v(" "),t("h3",{attrs:{id:"_3、js部分-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、js部分-2"}},[n._v("#")]),n._v(" 3、JS部分")]),n._v(" "),t("pre",[t("code",[n._v('/* 1、引入文件 */\n<script src="swiper/iscroll.js" type="text/javascript" charset="utf-8"><\/script>\n<script type="text/javascript">\n    \n    window.onload = function(){\n        //创建滚动对象\n        //参数一：滚动对象的选择器\n        //参数二：滚动对象的配置项\n        var myScroll = new IScroll(".wrapper",{\n            //通过鼠标控制\n            mouseWheel:true\n        })\n    }\n    \n<\/script>\n')])]),n._v(" "),t("h3",{attrs:{id:"_4、vue使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、vue使用"}},[n._v("#")]),n._v(" 4、vue使用")]),n._v(" "),t("pre",[t("code",[n._v("// 有事需要在外层加 setTimeout() 定时器去触发该事件\nthis.scroller = new IScroll(\".selectWelfare\",{\n    click: true,\n    scrollbars: true，\n    taps: true,\n    mouseWheel: true,\n    preventDefault: false,\n    probeType:2,         // 可以在scroll中监听this.y\n    bounceTime:100,      // 回弹时间\n    bounce: false,       // 启用禁止回弹\n    momentum: false,     // 启用禁止惯性\n});\n\n// 在滚动开始时进行某些操作\nthis.scroller.on('scrollStart',function(){\n    \n}) \n\n// 在滚动结束时进行某些操作\nthis.scroller.on('scrollEnd',function(){\n    \n})\n\n// 禁止滚动条滑动\nthis.scroller.disable();\n\n// 滑动到顶部或其他位置\nthis.scroller.scrollTo(0,0);\n\n// 销毁滚动条\nthis.scroller.destroy();\n\n// 刷新滚动条\nthis.$nextTick(() => {\n    const delay = setTimeout(() => {\n        if (this.scroller) {\n            this.scroller.refresh();\n            clearTimeout(delay);\n        }\n    }, 0);\n});\n")])]),n._v(" "),t("h2",{attrs:{id:"qrcode二维码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qrcode二维码"}},[n._v("#")]),n._v(" qrcode二维码")]),n._v(" "),t("p",[n._v("在线网站：草料二维码")]),n._v(" "),t("h3",{attrs:{id:"_1、css部分-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、css部分-3"}},[n._v("#")]),n._v(" 1、CSS部分")]),n._v(" "),t("pre",[t("code",[n._v(" #qrcode2{\n    position: relative;\n}\n#img{\n    position: absolute;\n    width: 56px;\n    height: 56px;\n    top: 100px;\n    left: 100px;\n}\n")])]),n._v(" "),t("h3",{attrs:{id:"_2、html部分-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、html部分-3"}},[n._v("#")]),n._v(" 2、HTML部分")]),n._v(" "),t("pre",[t("code",[n._v('<div id="qrcode1"></div><br/><br/>\n\n<div id="qrcode2">\n    <img id="img" src="src/link.jpg" />\n</div>\n')])]),n._v(" "),t("h3",{attrs:{id:"_3、js部分-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、js部分-3"}},[n._v("#")]),n._v(" 3、JS部分")]),n._v(" "),t("pre",[t("code",[n._v('\x3c!--1、引入jQuery和二维码文件， 注意顺序问题--\x3e\n<script src="js/jquery.js" type="text/javascript" charset="utf-8"><\/script>\n<script src="js/jquery.qrcode.min.js" type="text/javascript" charset="utf-8"><\/script>\n\n<script type="text/javascript">\n    \n    $(function(){\n        /* 对文本进行加密 */\n        $("#qrcode1").qrcode("this plugin is great");\n        \n        /* 对图片进行加密 */\n        $("#qrcode2").qrcode({\n            //默认宽\n            width:256,\n            //默认高\n            height:256,\n            //默认渲染模式\n            render:"canvas",\n            //默认背景色：#fff\n            background:"#fff",\n            //默认二维码颜色：#000\n            foreground:"#000",\n            //计算模式\n            typeNumber:-1,\n            //二维码内容\n            text:utf16to8("秦时明月之君临天下"),\n        });        \n        \n        /*解决中文乱码问题*/\n        function utf16to8(str){ \n              var out, i, len, c; \n              out = ""; \n              len = str.length; \n              for(i = 0; i < len; i++) { \n                  c = str.charCodeAt(i); \n                  if((c >= 0x0001) && (c <= 0x007F)) { \n                    out += str.charAt(i); \n                  }else if(c > 0x07FF) { \n                    out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F)); \n                    out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F)); \n                    out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F)); \n                  }else{ \n                    out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F)); \n                    out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F)); \n                  } \n              } \n              return out; \n        } \n        \n    });\n\n<\/script>\n')])]),n._v(" "),t("h2",{attrs:{id:"fullpage全屏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fullpage全屏"}},[n._v("#")]),n._v(" fullPage全屏")]),n._v(" "),t("h3",{attrs:{id:"_1、css部分-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、css部分-4"}},[n._v("#")]),n._v(" 1、CSS部分")]),n._v(" "),t("pre",[t("code",[n._v('<link rel="stylesheet" type="text/css" href="js/jquery.fullPage.min.css"/>\n//不要给 #full设置样式\n\n.page1{\n    background: url(../img/1.jpg) no-repeat;\n    background-size: 100% 100%;\n}\n\n.page2{\n    background: url(../img/2.jpg) no-repeat;\n    background-size: 100% 100%;\n}\n\n.page3{\n    background: url(../img/3.jpg) no-repeat;\n    background-size: 100% 100%;\n}\n\n.page4{\n    background: url(../img/4.jpg) no-repeat;\n    background-size: 100% 100%;\n}\n\n.page5{\n    background: url(../img/5.jpg) no-repeat;\n    background-size: 100% 100%;\n}\n')])]),n._v(" "),t("h3",{attrs:{id:"_2、html部分-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、html部分-4"}},[n._v("#")]),n._v(" 2、HTML部分")]),n._v(" "),t("pre",[t("code",[n._v('\x3c!-- jQuery的插件  fullpage.js 实现全屏滚动的效果 --\x3e        \n<div class="header">\n    <div class="container">\n        <h1>秦时明月</h1>\n        <ul>\n            <li><a href="#page1">百步飞剑</a></li>\n            <li><a href="#page2">夜尽天明</a></li>\n            <li><a href="#page3">诸子百家</a></li>\n            <li><a href="#page4">万里长城</a></li>\n            <li><a href="#page5">君临天下</a></li>\n        </ul>\n    </div>\n</div>\n\n\n\x3c!--  开始配置 fullpage  --\x3e\n<div id="full">\n    <div class="section page1"></div>\n    \n    <div class="section page2"></div>\n    \n    <div class="section page3"></div>\n    \n    <div class="section page4"></div>\n    \n    <div class="section page5"></div>\n</div>\n')])]),n._v(" "),t("h3",{attrs:{id:"_3、js部分-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、js部分-4"}},[n._v("#")]),n._v(" 3、JS部分")]),n._v(" "),t("pre",[t("code",[n._v('<script src="js/jquery.js" type="text/javascript" charset="utf-8"><\/script>\n<script src="js/jquery.fullPage.min.js" type="text/javascript" charset="utf-8"><\/script>\n<script type="text/javascript">\n\n    $(function(){\n        $("#full").fullpage({\n            //是否显示导航\n            navigation:true,\n            //通过导航控制锚点\n            anchors:[\'page1\',\'page2\',\'page3\',\'page4\',\'page5\'],\n            //导航位置\n            navigationPosition:\'right\',\n            //滚动速度\n            scrollingSpeed:1000,\n            //是否无缝滚动\n            continuousVertical:true,\n            \n            \n            //加载之后, 触发之前触发\n            afterLoad:function(anchorLink,index){\n                console.log(111);\n                console.log(anchorLink);    // 滚动图片的来源 pageX\n                console.log(index);         // 加载图片的索引\n            },\n            \n            //鼠标离开之后触发\n            onLeave:function(index,nextIndex,direction){\n                console.log(222);\n                console.log("我来自第"+index+"屏");         //滚动前的索引\n                console.log("我要滚到第"+nextIndex+"屏");     //滚动后的索引\n                console.log("滚动方向"+direction);     //要滚动的方向 up  down\n            },        \n            \n            //页面渲染完成后, 页面只渲染一次\n            afterRender:function(){\n                console.log(页面渲染完成后);\n            }\n        })\n    })\n    \n<\/script>\n')])]),n._v(" "),t("h2",{attrs:{id:"lazyload懒加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lazyload懒加载"}},[n._v("#")]),n._v(" lazyload懒加载")]),n._v(" "),t("h3",{attrs:{id:"一、懒加载的原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、懒加载的原理"}},[n._v("#")]),n._v(" 一、懒加载的原理")]),n._v(" "),t("pre",[t("code",[n._v("懒加载：并没有全部加在完毕，只显示一部分商品（减轻服务器压力）\n原理：\n    1、一次性把所有路径都拿过来\n    2、但是，并没有把路径放到src中，而是放到自定义属性中\n    3、当滚动到指定位置，将自定义的属性放到src中，图片才会加载出来\n \n预加载：loading...的时候，把资源加载进来，用户响应很快，服务器压力很大\n")])]),n._v(" "),t("h3",{attrs:{id:"二、原生js实现懒加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、原生js实现懒加载"}},[n._v("#")]),n._v(" 二、原生JS实现懒加载")]),n._v(" "),t("blockquote",[t("p",[n._v("注意：加载图片 = （图片距离页面顶端高度 < 浏览器滚动距离 + 可视区域距离）")])]),n._v(" "),t("pre",[t("code",[n._v('var imgs = document.getElementsByTagName("img");\n\nfunction loadImg(){\n    //获取当前可视区域高度\n    var h1 = window.innerHeight;\n    //浏览器滚动过的高度\n    var h2 = document.body.scrollTop || document.documentElement.scrollTop;\n    for (var i = 0 ; i < imgs.length ; i++) {\n        //判断当前图片距离顶端的距离 < ...\n        if(imgs[i].offsetTop < h1 + h2){                \n            imgs[i].src = imgs[i].getAttribute("data-src");\n        }\n    }\n}\n    \nloadImg();\n\nwindow.onscroll = function(){\n    loadImg();            \n}\n')])]),n._v(" "),t("h3",{attrs:{id:"三、插件实现懒加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、插件实现懒加载"}},[n._v("#")]),n._v(" 三、插件实现懒加载")]),n._v(" "),t("pre",[t("code",[n._v('//注意给img添加类名lazy  , 并设置自定义属性data-original\n<img class="lazy" src="" data-original="img/search1.jpg" />\n\n\n\n/* JS部分 注意引入文件的顺序 */\n<script src="js/jquery.js" type="text/javascript" charset="utf-8"><\/script>\n<script src="js/jquery.lazyload.js" type="text/javascript" charset="utf-8"><\/script>\n\n<script type="text/javascript">\n    $(function(){\n        $(".lazy").lazyload();\n    })    \n<\/script>\n')])]),n._v(" "),t("h3",{attrs:{id:"四、vue实现懒加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、vue实现懒加载"}},[n._v("#")]),n._v(" 四、Vue实现懒加载")]),n._v(" "),t("pre",[t("code",[n._v('// model模型-存储数据的地方\nvar data = {\n    list:[],\n    imagePrefix:imagePrefix,\n    /*加载更多*/\n    start:0,\n    count:5,\n    /*是否加载*/\n    isRefresh:false\n}\n\n\n// ViewModel数据驱动界面-数据和界面绑定\nvar app = new Vue({\n    //选择id为app的选择器\n    el:"#app",  \n    data:data,\n    methods:{\n        downloadData:function(){\n            var url = readListUrl+"&start="+this.start+"&count="+this.count;\n            this.$http({url:url}).then(function(response){\n                var list = response.data.data;\n                //当前加载的加上之前加载的\n                this.list = this.list.concat(list);\n                this.isRefresh = false;\n            })\n        }\n    },\n    created:function(){\n        this.downloadData();\n        var self = this;\n        /* 加载更多的实现 */\n        window.onload = function(){\n            window.onscroll = function(){\n                //滚动到底部的条件   滚动条到顶部(变) + 滚动条对应的界面高度(可视高度,不变) === 整个页面的高度(不变)\n                var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;\n                var clientHeight = document.documentElement.clientHeight;\n                var pageHeight = document.body.scrollHeight;\n                \n                if( Math.abs(scrollTop+clientHeight-pageHeight) <= 6 ){\n                    /* 加载更多 */\n                    if(!self.isRefresh){\n                        self.start += self.count;\n                        self.downloadData();\n                        self.isRefresh = true;\n                    }\n                }\n            }\n        }                        \n    }\n});\n')])]),n._v(" "),t("h2",{attrs:{id:"base64加密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base64加密"}},[n._v("#")]),n._v(" Base64加密")]),n._v(" "),t("h3",{attrs:{id:"_1、引入js和base64文件（注意先后问题）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、引入js和base64文件（注意先后问题）"}},[n._v("#")]),n._v(" 1、引入JS和Base64文件（注意先后问题）")]),n._v(" "),t("pre",[t("code",[n._v('<script src="jquery.js" type="text/javascript" charset="utf-8"><\/script>\n<script src="base64.js" type="text/javascript" charset="utf-8"><\/script>\n')])]),n._v(" "),t("h3",{attrs:{id:"_2、加密和解密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、加密和解密"}},[n._v("#")]),n._v(" 2、加密和解密")]),n._v(" "),t("pre",[t("code",[n._v('$(function(){\n    var str = "秦时明月之万里长城";\n    \n    //1、加密\n    var b64 = new Base64();\n    var str = b64.encode("你确定要进攻吗");\n    console.log(str);\n    \n    //2、解密\n    var newStr = b64.decode(str);\n    console.log(newStr);\n    \n    //3、解密密文\n    var newStr2 = b64.decode("5L2g56Gu5a6a6KaB6L+b5pS75ZCX");\n    console.log(newStr2);\n    \n});\n')])]),n._v(" "),t("h2",{attrs:{id:"pagination分页"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pagination分页"}},[n._v("#")]),n._v(" pagination分页")]),n._v(" "),t("h3",{attrs:{id:"_1、css部分-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、css部分-5"}},[n._v("#")]),n._v(" 1、CSS部分")]),n._v(" "),t("pre",[t("code",[n._v("引入CSS样式\n")])]),n._v(" "),t("h3",{attrs:{id:"_2、html部分-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、html部分-5"}},[n._v("#")]),n._v(" 2、HTML部分")]),n._v(" "),t("pre",[t("code",[n._v('//注意ID名, 类名\n<div id="Pagination" class="pagination">\n        \n</div>\n')])]),n._v(" "),t("h3",{attrs:{id:"_3、js部分-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、js部分-5"}},[n._v("#")]),n._v(" 3、JS部分")]),n._v(" "),t("pre",[t("code",[n._v('(1)引入jQuery文件和分页插件的JS文件\n\n(2)初始化及数据下载后的具体显示\n    $(function(){\n        //第几页，每页多少个数据\n        var page = 1;\n        var count = 10;\n\n        //回调函数\n        function pageselectCallback(index) {\n            //点击之后, 修改page,重新下载\n            var new_page = index+1;\n            //解决重复调用问题 还是这一页, return ； 判断两个相等, 不执行下载数据 ；当page为1, current_page是0\n            if(index == page-1){\n                return;\n            }        \n            page = new_page;\n            downloadListData();\n        }\n         \n        //初始化函数的参数\n        //参数1: 总页数total = 数据总数 / count\n        //参数2: 对象\n        //  current_page:当前页\n        //    num_edge_entries:前面显示3个\n        //    num_display_entries:后面显示3个\n        //    callback 点击后回调\n        //    items_per_page 每页多少数据\n        //    prev_text 显示什么(上一页)\n        //    next_text 显示什么(下一页)\n        \n        //初始化函数\n        function pageShow( total ){\n            $("#Pagination").pagination(total , {\n                current_page:page-1,\n                num_edge_entries: 3,\n                num_display_entries: 3,\n                callback: pageselectCallback,\n                items_per_page:count,\n                prev_text:"上一页",\n                next_text:"下一页"\n            });\n        }    \n\n        //数据下载函数\n        function downloadListData(){\n            //1、通过get,post等拿数据\n            //2、数据拿完后调用分页的初始化函数\n            pageShow( total )\n        }\n\n    })\n')])]),n._v(" "),t("h3",{attrs:{id:"原生js实现分页"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原生js实现分页"}},[n._v("#")]),n._v(" 原生JS实现分页")]),n._v(" "),t("pre",[t("code",[n._v('$(function () {            \n    //第几页\n    var page = 1;\n    //每页多少个数据\n    var count = 10;\n    \n    function downloadListData () {                \n        //接口中用start\n        var start = (page-1)*count;\n        var url = readListUrl+"&start="+start+"&count="+count;\n        \n        $.getJSON(url,{},function (r) {\n            //下载数据, 并生成dom显示\n            var list = r.data;            \n            var html = "";\n            for(var i=0; i<list.length; i++){\n                var item = list[i];\n            }\n            $(".section_list").html(html);                    \n            \n            //获取页数\n            var pageCount = Math.ceil(r.total/10);\n\n            //生成分页dom, 并添加CSS样式\n            $(".list_pagination").html("");\n            var html = "";\n            html += "<li data-page=\'first\'>首页</li>"\n            html += "<li data-page=\'prev\'>上一页</li>"\n            \n            for(var i=0; i<pageCount; i++){\n                if(i+1 == page){\n                    html += "<li style=\'background-color:gray\' data-page=\'"+(i+1)+"\'>"+(i+1)+"</li>"\n                }else{\n                    html += "<li data-page=\'"+(i+1)+"\'>"+(i+1)+"</li>"\n                }\n            }\n            \n            html += "<li data-page=\'next\'>下一页</li>"\n            html += "<li data-page=\'last\'>最后一页</li>"\n            $(".list_pagination").html(html);\n            \n            $(".list_pagination li").css({\n                "padding":"3px 5px",\n                "margin-left":"10px",\n                "border":"1px solid black"\n            })\n            \n            //实现点击事件\n            $(".list_pagination li").on("click",function () {\n                var click_page = $(this).attr("data-page");\n                \n                if(click_page == page){ //重复点击当前页\n                    console.log("已经加载!");\n                    return;\n                }\n                \n                if(click_page == "first"){ //第一页\n                    page = 1;\n                }else if(click_page == \'prev\'){ //前一页\n                    page--;\n                    if(page<1){\n                        page=1;\n                    }\n                }else if(click_page == \'next\'){ //下一页\n                    page++;\n                    if(page>pageCount){\n                        page=pageCount;\n                    }\n                }else if(click_page == "last"){ //上一页\n                    page = pageCount;\n                }else{  //点击了数字 重新发起请求\n                    page = click_page;\n                }\n\n                //重新加载数据\n                downloadListData ();\n            })                    \n        })                \n    }\n    downloadListData ();\n})    \n')])]),n._v(" "),t("h2",{attrs:{id:"cookie本地存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie本地存储"}},[n._v("#")]),n._v(" cookie本地存储")]),n._v(" "),t("h3",{attrs:{id:"一、本地存储插件cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、本地存储插件cookie"}},[n._v("#")]),n._v(" 一、本地存储插件Cookie")]),n._v(" "),t("pre",[t("code",[n._v("\x3c!--\n    本地： 数据存储在磁盘上\n    \n    实例：\n        登录        记住用户名，保持1周登录\n                        \n    持久化存储/本地存储\n        (1) cookie\n        (2) H5 - localStorage\n                (sessionStorage会话存储)\n        (3) H5 -WebSQL 浏览器中的数据库存储\n        (4) H5 -IndexedDb 索引数据库\n--\x3e\n")])]),n._v(" "),t("h4",{attrs:{id:"_1、根据需要写html和css样式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、根据需要写html和css样式"}},[n._v("#")]),n._v(" 1、根据需要写HTML和CSS样式")]),n._v(" "),t("h4",{attrs:{id:"_2、引入jquery文件和cookie插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、引入jquery文件和cookie插件"}},[n._v("#")]),n._v(" 2、引入jQuery文件和cookie插件")]),n._v(" "),t("pre",[t("code",[n._v("注意：注意先后顺序\n")])]),n._v(" "),t("h4",{attrs:{id:"_3、js实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、js实例"}},[n._v("#")]),n._v(" 3、JS实例")]),n._v(" "),t("pre",[t("code",[n._v('\x3c!--\n    jquery.cookie.min.js\n    插件: 先导入jquery, 再导入这个插件\n    \n用法:\n    读取某个cookie值, $.cookie("username")\n     \n    设置cookie值 \n        $.cookie("username","zhangsan")  \n             有效期-网页不关闭\n             \n        $.cookie("username","zhangsan",{\n            path:"/",\n            expires:7    //7天有效    //date对象\n        })\n--\x3e\n')])]),n._v(" "),t("h3",{attrs:{id:"二、实例：记住用户名和密码，-七天内自动登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、实例：记住用户名和密码，-七天内自动登录"}},[n._v("#")]),n._v(" 二、实例：记住用户名和密码， 七天内自动登录")]),n._v(" "),t("h4",{attrs:{id:"_1、html和css"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、html和css"}},[n._v("#")]),n._v(" 1、HTML和CSS")]),n._v(" "),t("pre",[t("code",[n._v('<div id="">\n    <p>导航栏</p>\n    <a class="login-link" href="">登录</a> <a class="reg-link" href="">注册</a>\n</div>\n\n<hr />\n\n<div id="">\n    <form action="" method="post">\n        <input class="username" type="text" /><br />\n        <input class="password" type="password" /><br />\n        <div id="">\n            <input class="remember" type="checkbox" value=""/>记住用户名和密码<br/>\n            <input type="checkbox" value=""/>一周之内自动登录<br/>\n        </div>\n        <div id="">\n            <button class="login">登录</button>\n        </div>\n    </form>        \n</div>\n')])]),n._v(" "),t("h3",{attrs:{id:"js实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js实现"}},[n._v("#")]),n._v(" JS实现")]),n._v(" "),t("pre",[t("code",[n._v('//导入相关文件\n<script src="jquery-1.9.1.min.js" type="text/javascript" charset="utf-8"><\/script>\n<script src="jquery.cookie.min.js" type="text/javascript" charset="utf-8"><\/script>\n\n<script type="text/javascript">\n        \n    $(function () {\n        //登陆后将导航栏的登录改为个人用户名\n        if($.cookie("isLogin") == "1"){\n            $(".login-link").html($.cookie("username"));\n        }\n        \n        //判断自动登录(获取用户名、密码放入对应的input框)\n        if($.cookie("username")){\n            $(".username").val($.cookie("username"))\n        }\n        if($.cookie("password")){\n            $(".password").val($.cookie("password"))\n        }\n        if($.cookie("isRemember") == "1"){\n            $(".remember")[0].checked = true;\n        }\n        \n        //设置用户名、密码, 可与后台交互动态获取 \n        var username = "zz"\n        var password = "123456"\n        \n        //点击登录按钮的事件处理\n        $(".login").click(function () {\n            //登陆时获取输入的 用户名 和 密码\n            var inputUsername = $(".username").val();\n            var inputPassword = $(".password").val();\n            \n            //判断输入的用户名密码与设置的用户名密码是否相等\n            if(inputUsername == username&&inputPassword == password){\n                \n                //定义了距离当前时间20 * 1000ms = 20s 的时间\n                var date = new Date();\n                date.setTime(date.getTime()+20*1000)\n            \n                //如果记住密码框 被选中 记住用户名和密码等\n                if($(".remember")[0].checked){\n                    $.cookie("isRemember","1",{\n                        path:"/",\n                        expires:date    //date对象\n                    })\n                    $.cookie("username",inputUsername,{\n                        path:"/",\n                        expires:date    //date对象\n                    })\n                    $.cookie("password",inputPassword,{\n                        path:"/",\n                        expires:date    //date对象\n                    })\n                }                    \n                \n                $(".login-link").html($.cookie("username"))\n                \n                $.cookie("isLogin","1",{\n                    path:"/",\n                    expires:date    //7天有效    //date对象\n                })\n            }else{\n                alert("登录失败")\n            }\n            \n        })\n        \n    })\n    \n<\/script>\n')])]),n._v(" "),t("h2",{attrs:{id:"jqcloud词云插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jqcloud词云插件"}},[n._v("#")]),n._v(" jQCloud词云插件")]),n._v(" "),t("h3",{attrs:{id:"_1、添加css"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、添加css"}},[n._v("#")]),n._v(" 1、添加css")]),n._v(" "),t("pre",[t("code",[n._v('<link href="https://cdn.bootcss.com/jqcloud/1.0.4/jqcloud.css" rel="stylesheet">\n')])]),n._v(" "),t("h3",{attrs:{id:"_2、添加js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、添加js"}},[n._v("#")]),n._v(" 2、添加js")]),n._v(" "),t("pre",[t("code",[n._v('<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"><\/script>\n<script src="https://cdn.bootcss.com/jqcloud/1.0.4/jqcloud-1.0.4.min.js"><\/script>\n')])]),n._v(" "),t("h3",{attrs:{id:"_3、添加标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、添加标签"}},[n._v("#")]),n._v(" 3、添加标签")]),n._v(" "),t("pre",[t("code",[n._v('<div id="tagsCloud" style="width: 800px; height: 400px;"></div>  \n')])]),n._v(" "),t("h3",{attrs:{id:"_4、添加词云代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、添加词云代码"}},[n._v("#")]),n._v(" 4、添加词云代码")]),n._v(" "),t("pre",[t("code",[n._v('<script type="text/javascript">\n    var word_array = [\n        {text: "百度", weight: 10, html: {title: "百度搜索引擎"}},\n        {text: "百度", weight: 9, link: "http://www.baidu.com/"},\n        {text: "百度", weight: 8, link: "http://www.baidu.com/"},\n        {text: "百度", weight: 7, link:"http://www.baidu.com"}\n    ];\n    $(function() {\n        $("#tagsCloud").jQCloud(word_array);\n    });\n<\/script>  \n')])]),n._v(" "),t("h3",{attrs:{id:"_5、gridea添加云标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、gridea添加云标签"}},[n._v("#")]),n._v(" 5、Gridea添加云标签")]),n._v(" "),t("pre",[t("code",[n._v('\x3c!-- 在tags.ejs中添加html代码 --\x3e\n<div class="paper" style="overflow: hidden">\n\t<div id="tagsCloud" style="width: 100%;height: 600px;"></div>\n</div>\n\n\x3c!-- 添加js代码 --\x3e\n<script src="<%= themeConfig.domain %>/media/jqcloud/jqcloud-1.0.4.js"><\/script>\n<script type="text/javascript">\n\tif ($(\'#tagsCloud\')) {\n\t\tvar cloudArr = [];\n\t\t// 遍历标签\n\t\tvar tags = JSON.parse(\'<%= JSON.stringify(tags) %>\'.replace(/&#34;/g, \'"\'));\n\t\ttags.forEach((tag, tagIndex) => {\n\t\t\tcloudArr.push({\n\t\t\t\tweight: tags.length - tagIndex,\n\t\t\t\ttext: tag.name,\n\t\t\t\tlink: tag.link,\n\t\t\t})\n\t\t})\n\t\t$(\'#tagsCloud\').jQCloud(cloudArr);\n\t}\n<\/script>\n')])]),n._v(" "),t("h3",{attrs:{id:"效果图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#效果图"}},[n._v("#")]),n._v(" 效果图")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://fengling68.github.io/imgbed/upic-images/1561991796683.png",alt:""}})]),n._v(" "),t("h2",{attrs:{id:"vuedraggable拖拽库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuedraggable拖拽库"}},[n._v("#")]),n._v(" vuedraggable拖拽库")]),n._v(" "),t("h3",{attrs:{id:"一、安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、安装"}},[n._v("#")]),n._v(" 一、安装")]),n._v(" "),t("pre",[t("code",[n._v("npm i -S vuedraggable\n")])]),n._v(" "),t("h3",{attrs:{id:"二、引入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、引入"}},[n._v("#")]),n._v(" 二、引入")]),n._v(" "),t("pre",[t("code",[n._v("import draggable from 'vuedraggable';\n\ncomponents: {\n  draggable,\n},\n")])]),n._v(" "),t("h3",{attrs:{id:"三、使用-操作数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、使用-操作数据"}},[n._v("#")]),n._v(" 三、使用(操作数据)")]),n._v(" "),t("pre",[t("code",[n._v("data() {\n  return {\n    myArray1: [1, 2, 3, 4, 5],\n    myArray2: [6, 7, 8, 9, 10],\n  };\n},\n\n<div>\n  <draggable\n    group=\"people\"\n    v-model=\"myArray1\"\n    @choose='onChoose1'\n    @clone='onClone1'\n    @start='onStart1'\n    @update='onUpdate1'\n    @change=\"onChange1\"\n    @add='onAdd1'\n    @remove='onRemove1'\n    @sort='onSort1'\n    @end='onEnd1'\n    @filter='onFilter1'\n  >\n    <p\n      v-for=\"(item, i) in myArray1\" v-bind:key=\"i\"\n    >draggableOne---"+n._s(n.item)+"</p>\n\n    <button slot=\"header\" @click=\"addEle\">draggableOne---Add</button>\n    <button slot=\"footer\" @click=\"removeEle\">draggableOne---Remove</button>\n  </draggable>\n\n  <draggable\n    group=\"people\"\n    v-model=\"myArray2\"\n    @choose='onChoose2'\n    @clone='onClone2'\n    @start='onStart2'\n    @update='onUpdate2'\n    @change=\"onChange2\"\n    @add='onAdd2'\n    @remove='onRemove2'\n    @sort='onSort2'\n    @end='onEnd2'\n    @filter='onFilter2'\n  >\n    <p\n      v-for=\"(item, i) in myArray2\" v-bind:key=\"i\"\n    >draggableTwo---"+n._s(n.item)+"</p>\n  </draggable>\n</div>\n\n\nmethods: {\n  onChoose1() {\n    console.log('onChoose1');\n  },\n  onClone1() {\n    console.log('onClone1');\n  },\n  onStart1() {\n    console.log('onStart1');\n  },\n  onUpdate1() {\n    console.log('onUpdate1');\n  },\n  onChange1() {\n    console.log('onChange1');\n  },\n  onSort1() {\n    console.log('onSort1');\n  },\n  onAdd1() {\n    console.log('onAdd1');\n  },\n  onRemove1() {\n    console.log('onRemove1');\n  },\n  onEnd1() {\n    console.log('onEnd1');\n    console.log(this.myArray1);\n  },\n  onFilter1() {\n    console.log('onFilter1');\n  },\n\n\n  onChoose2() {\n    console.log('onChoose2');\n  },\n  onClone2() {\n    console.log('onClone2');\n  },\n  onStart2() {\n    console.log('onStart2');\n  },\n  onUpdate2() {\n    console.log('onUpdate2');\n  },\n  onChange2() {\n    console.log('onChange2');\n  },\n  onAdd2() {\n    console.log('onAdd2');\n  },\n  onRemove2() {\n    console.log('onRemove2');\n  },\n  onSort2() {\n    console.log('onSort2');\n  },\n  onEnd2() {\n    console.log('onEnd2');\n    console.log(this.myArray2);\n  },\n  onFilter2() {\n    console.log('onFilter2');\n  },\n\n\n  addEle() {\n    this.myArray1.push('add');\n  },\n  removeEle() {\n    this.myArray1.pop();\n  },\n}\n")])]),n._v(" "),t("h3",{attrs:{id:"四、注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、注意事项"}},[n._v("#")]),n._v(" 四、注意事项")]),n._v(" "),t("pre",[t("code",[n._v('draggable：\n    v-model="myArray" 或者 :list="myArray"\n    draggable=".item" 表示class="item"的元素可拖动\n    dhandle=".handle" 表示class="handle"的元素可控制拖动\n    group="samegroup" 如要两个以上容器间拖动添加相同的group名\n\ndraggable子元素上：\n    :disabled="false" 禁止移动\n\n其他：\n    点击删除元素时只触发choose事件\n    添加删除元素用可以改变原数组和对象的方法\n')])]),n._v(" "),t("h2",{attrs:{id:"markdown-it"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#markdown-it"}},[n._v("#")]),n._v(" markdown-it")]),n._v(" "),t("h3",{attrs:{id:"_1、插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、插件"}},[n._v("#")]),n._v(" 1、插件")]),n._v(" "),t("p",[n._v("// markdown-it"),t("br"),n._v("\nnpm install markdown-it --save"),t("br"),n._v("\n// vue版markdown"),t("br"),n._v("\nmarkdown-it-vue"),t("br"),n._v("\n// emoji表情"),t("br"),n._v("\nnpm install markdown-it-emoji --save"),t("br"),n._v("\n// 数学公式"),t("br"),n._v("\nnpm install markdown-it-katex --save"),t("br"),n._v("\n// 给image设置宽高"),t("br"),n._v("\nnpm install markdown-it-imsize --save"),t("br"),n._v("\n// 给标签设置属性如class、data-自定义属性"),t("br"),n._v("\nmarkdown-it-attrs"),t("br"),n._v("\n// 脚注"),t("br"),n._v("\nmarkdown-it-footnote"),t("br"),n._v("\n// 标签"),t("br"),n._v("\nmarkdown-it-anchor"),t("br"),n._v("\n// 目录"),t("br"),n._v("\nmarkdown-it-toc-and-anchor"),t("br"),n._v("\n// 数学函数"),t("br"),n._v("\nmarkdown-it-math"),t("br"),n._v("\n// 人物列表"),t("br"),n._v("\nmarkdown-it-task-lists"),t("br"),n._v("\n// 复选框"),t("br"),n._v("\nmarkdown-it-checkbox"),t("br"),n._v("\n// 多样化表格"),t("br"),n._v("\nmarkdown-it-multimd-table"),t("br"),n._v("\n// ？..."),t("br"),n._v("\nmarkdown-it-mark"),t("br"),n._v("\n// 上标"),t("br"),n._v("\nmarkdown-it-sup"),t("br"),n._v("\n// 下标"),t("br"),n._v("\nmarkdown-it-sub")])])}),[],!1,null,null,null);e.default=r.exports}}]);
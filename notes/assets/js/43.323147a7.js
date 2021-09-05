(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{557:function(_,v,e){"use strict";e.r(v);var t=e(1),r=Object(t.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"请求-网络相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求-网络相关"}},[_._v("#")]),_._v(" 请求&网络相关")]),_._v(" "),e("h2",{attrs:{id:"get-和-post-区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-和-post-区别"}},[_._v("#")]),_._v(" GET 和 POST 区别")]),_._v(" "),e("p",[e("a",{attrs:{href:"https://www.zhihu.com/question/28586791",target:"_blank",rel:"noopener noreferrer"}},[_._v("GET 和 POST 到底有什么区别？"),e("OutboundLink")],1)]),_._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/25028045",target:"_blank",rel:"noopener noreferrer"}},[_._v("听说『99% 的人都理解错了 HTTP 中 GET 与 POST 的区别』？？"),e("OutboundLink")],1)]),_._v(" "),e("blockquote",[e("p",[_._v("GET 和 POST 本质上就是 TCP 链接并无差别，但是由于HTTP的规定和浏览器/服务器的限制，导致他们在应用过程中体现出一些不同。")])]),_._v(" "),e("ol",[e("li",[_._v("安全")]),_._v(" "),e("li",[_._v("长度")]),_._v(" "),e("li",[_._v("后退刷新")]),_._v(" "),e("li",[_._v("数据位置")]),_._v(" "),e("li",[_._v("请求个数")]),_._v(" "),e("li",[_._v("Get获取数据，Post提交数据")])]),_._v(" "),e("h2",{attrs:{id:"options-请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options-请求"}},[_._v("#")]),_._v(" OPTIONS 请求")]),_._v(" "),e("ol",[e("li",[e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS",target:"_blank",rel:"noopener noreferrer"}},[_._v("OPTIONS"),e("OutboundLink")],1),_._v("可以检测服务器所支持的请求方法；")])]),_._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS",target:"_blank",rel:"noopener noreferrer"}},[_._v("CORS（跨域资源共享）"),e("OutboundLink")],1),_._v("中发起预检请求，可以检测实际请求是否可以被服务器所接受；")])])]),_._v(" "),e("h2",{attrs:{id:"跨域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#跨域"}},[_._v("#")]),_._v(" 跨域")]),_._v(" "),e("h3",{attrs:{id:"同源策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#同源策略"}},[_._v("#")]),_._v(" 同源策略")]),_._v(" "),e("p",[e("code",[_._v("同源策略限制")]),_._v("：同源策略会阻止一个域的javascript脚本和另外一个域的内容进行交互。"),e("br"),_._v(" "),e("code",[_._v("跨域")]),_._v("：当一个请求url的 "),e("code",[_._v("协议、域名、端口")]),_._v(" 三者之间任意一个与当前页面url不同即为跨域。")]),_._v(" "),e("h3",{attrs:{id:"解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[_._v("#")]),_._v(" 解决方案")]),_._v(" "),e("ol",[e("li",[e("code",[_._v("jsonp")])]),_._v(" "),e("li",[e("code",[_._v("document.domain + iframe")])]),_._v(" "),e("li",[e("code",[_._v("location.hash + iframe")])]),_._v(" "),e("li",[e("code",[_._v("window.name + iframe")])]),_._v(" "),e("li",[e("code",[_._v("postMessage")])]),_._v(" "),e("li",[e("code",[_._v("CORS")]),_._v(" 跨域资源共享")]),_._v(" "),e("li",[e("code",[_._v("nginx代理")])]),_._v(" "),e("li",[e("code",[_._v("nodejs中间件代理")])]),_._v(" "),e("li",[e("code",[_._v("WebSocket协议")])]),_._v(" "),e("li",[e("code",[_._v("vue框架里设置proxy代理等")])])]),_._v(" "),e("h3",{attrs:{id:"jsonp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsonp"}},[_._v("#")]),_._v(" JSONP")]),_._v(" "),e("p",[e("code",[_._v("jsonp")]),_._v(" 能达到跨域效果，是利用 "),e("code",[_._v("script")]),_._v(" 标签自身的跨域能力；")]),_._v(" "),e("p",[e("code",[_._v("jsonp")]),_._v(" 是一种非正式传输协议，该协议的一个要点就是允许用户传递一个 "),e("code",[_._v("callback")]),_._v(" 或者开始就定义一个回调方法，参数给服务端，然后服务端返回数据时会将这个 "),e("code",[_._v("callback")]),_._v(" 参数作为函数名来包裹住 "),e("code",[_._v("JSON")]),_._v(" 数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了；")]),_._v(" "),e("p",[e("code",[_._v("jsonp")]),_._v(" 只能使用 "),e("code",[_._v("GET")]),_._v(" 方式发起跨域请求；")]),_._v(" "),e("p",[e("code",[_._v("jsonp")]),_._v(" 的优势在于支持老式浏览器，以及可以向不支持 "),e("code",[_._v("CORS")]),_._v(" 的网站请求数据；")]),_._v(" "),e("p",[e("code",[_._v("jsonp")]),_._v(" 跨域请求需要服务端配合，设置 "),e("code",[_._v("callback")]),_._v("，才能完成跨域请求。")]),_._v(" "),e("h3",{attrs:{id:"cors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[_._v("#")]),_._v(" CORS")]),_._v(" "),e("p",[e("code",[_._v("CORS")]),_._v(" 是一个 "),e("code",[_._v("W3C")]),_._v(' 标准，全称是"跨域资源共享";')]),_._v(" "),e("p",[e("code",[_._v("CORS")]),_._v(" 允许浏览器向跨源服务器，发出 "),e("code",[_._v("XMLHttpRequest")]),_._v(" 请求，从而克服了 "),e("code",[_._v("AJAX")]),_._v(" 只能同源使用的限制;")]),_._v(" "),e("p",[e("code",[_._v("CORS")]),_._v(" 需要浏览器和服务器（"),e("code",[_._v("Access-Control-Allow-Origin: *")]),_._v("）同时支持;")]),_._v(" "),e("p",[e("code",[_._v("CORS")]),_._v(" 支持所有类型的 "),e("code",[_._v("HTTP")]),_._v(" 请求。")]),_._v(" "),e("h2",{attrs:{id:"csrf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[_._v("#")]),_._v(" CSRF")]),_._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/22521378",target:"_blank",rel:"noopener noreferrer"}},[_._v("CSRF 是什么？"),e("OutboundLink")],1)]),_._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/136745749",target:"_blank",rel:"noopener noreferrer"}},[_._v("面试官：什么是CSRF？"),e("OutboundLink")],1)]),_._v(" "),e("h3",{attrs:{id:"定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[_._v("#")]),_._v(" 定义")]),_._v(" "),e("p",[e("code",[_._v("CSRF（Cross-site request forgery，跨站请求伪造）")]),_._v("：冒充受信任用户，向服务器发送非预期请求的攻击方式。")]),_._v(" "),e("h3",{attrs:{id:"防御方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#防御方案"}},[_._v("#")]),_._v(" 防御方案")]),_._v(" "),e("ol",[e("li",[_._v("客户端对于数据库的修改请求，全部使用POST提交，禁止使用GET请求；")]),_._v(" "),e("li",[_._v("服务端一般的做法是在表单里面添加一段隐藏的唯一的 token(请求令牌)；")]),_._v(" "),e("li",[_._v("Referer Check防盗链，检测请求是否来自合法的源；")]),_._v(" "),e("li",[_._v("验证码；")])]),_._v(" "),e("h2",{attrs:{id:"xss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xss"}},[_._v("#")]),_._v(" XSS")]),_._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/37455061",target:"_blank",rel:"noopener noreferrer"}},[_._v("【前端黑客】XSS入门"),e("OutboundLink")],1)]),_._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/caizhenbo/p/6836390.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("【前端安全】JavaScript防XSS攻击"),e("OutboundLink")],1)]),_._v(" "),e("h3",{attrs:{id:"定义-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义-2"}},[_._v("#")]),_._v(" 定义")]),_._v(" "),e("p",[e("code",[_._v("XSS（跨站脚本攻击）")]),_._v("：恶意攻击者往 Web 页面里插入恶意 Script 代码，当用户浏览该页之时，嵌入 Web 里面的 Script 代码会被执行，从而达到恶意攻击用户的目的。")]),_._v(" "),e("h3",{attrs:{id:"分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[_._v("#")]),_._v(" 分类")]),_._v(" "),e("ul",[e("li",[e("p",[e("strong",[_._v("DOM型（无服务器参与）")])]),_._v(" "),e("ul",[e("li",[_._v("输入 XSS 代码内容(URL) -> 浏览器DOM解析-> 触发 XSS 攻击")])])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("反射型")])]),_._v(" "),e("ul",[e("li",[_._v("输入 XSS 代码内容(URL) -> 服务器解析返回 -> 浏览器解释执行 -> 触发 XSS 攻击")])])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("存储型")])]),_._v(" "),e("ul",[e("li",[_._v("提交 XSS 代码内容(表单、评论) -> 存储至服务器 -> 用户请求数据 -> 服务器返回数据 -> 浏览器解释执行 -> 触发 XSS 攻击")])])])]),_._v(" "),e("h3",{attrs:{id:"防御方案-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#防御方案-2"}},[_._v("#")]),_._v(" 防御方案")]),_._v(" "),e("ol",[e("li",[_._v("编码：转义用户的输入；"),e("br"),_._v("\n将 "),e("code",[_._v("&")]),_._v(" 转为 "),e("code",[_._v("&amp")]),e("br"),_._v("\n将 "),e("code",[_._v("<")]),_._v(" 转为 "),e("code",[_._v("&lt")]),e("br"),_._v("\n将 "),e("code",[_._v(">")]),_._v(" 转为 "),e("code",[_._v("&gt")]),e("br"),_._v("\n将 "),e("code",[_._v('"')]),_._v(" 转为 "),e("code",[_._v("&quot")])]),_._v(" "),e("li",[_._v("校验，对输入及请求进行过滤检查，如过滤特殊字符，设置输入域匹配规则等；")]),_._v(" "),e("li",[_._v("避免内联事件，如 "),e("code",[_._v("onclick")]),_._v("、"),e("code",[_._v("onload")]),_._v(" 等；")]),_._v(" "),e("li",[_._v("避免拼接 "),e("code",[_._v("HTML")]),_._v("；")])]),_._v(" "),e("h2",{attrs:{id:"浏览器缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存"}},[_._v("#")]),_._v(" 浏览器缓存")]),_._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/jing-tian/p/11284471.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("简述浏览器端的九大缓存"),e("OutboundLink")],1)]),_._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/23299600",target:"_blank",rel:"noopener noreferrer"}},[_._v("简述浏览器缓存是如何控制的"),e("OutboundLink")],1)]),_._v(" "),e("h3",{attrs:{id:"九大缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#九大缓存"}},[_._v("#")]),_._v(" 九大缓存")]),_._v(" "),e("ul",[e("li",[e("p",[e("strong",[_._v("http 缓存")])]),_._v(" "),e("ul",[e("li",[_._v("基于HTTP协议的浏览器文件级缓存机制，减少重复请求；")]),_._v(" "),e("li",[_._v("expires、etag、last-modified；")])])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("flash 缓存")])]),_._v(" "),e("ul",[e("li",[_._v("基于flash有读写浏览器端本地目录的功能，通过js调用flash去读写特定的磁盘目录，达到本地数据缓存的目的；")]),_._v(" "),e("li",[_._v("基本不用")])])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("Local Storage")])]),_._v(" "),e("ul",[e("li",[_._v("键值对存储；")]),_._v(" "),e("li",[_._v("大小限制由不同浏览器决定；")]),_._v(" "),e("li",[_._v("需要手动删除")])])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("Session Storage")])]),_._v(" "),e("ul",[e("li",[_._v("键值对存储；")]),_._v(" "),e("li",[_._v("大小限制由不同浏览器决定；")]),_._v(" "),e("li",[_._v("关闭则全部删除")])])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("Cookies")])]),_._v(" "),e("ul",[e("li",[_._v("键、值、域、过期时间、大小等组成；")]),_._v(" "),e("li",[_._v("最大长度和域名个数由不同浏览器决定；")]),_._v(" "),e("li",[_._v("网站为辨别用户身份、保存用户认证信息、进行session跟踪而储存在本地的数据(加密)，一般通过请求头一起发送到服务端；")])])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("IndexedDB")])]),_._v(" "),e("ul",[e("li",[_._v("在客户端存储可观数量的结构化数据，并且在这些数据上使用索引进行高性能检索的 API；")]),_._v(" "),e("li",[_._v("分别为同步和异步访问提供了单独的 API；")])])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("Web SQL")])]),_._v(" "),e("ul",[e("li",[_._v("数据库形式存储，支持sql语句查询；")]),_._v(" "),e("li",[_._v("创建 openDatabase()、查询 transaction()、执行 executeSql()；")])])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("Application Cache")])]),_._v(" "),e("ul",[e("li",[_._v("将大部分图片资源、js、css等静态资源放在manifest文件配置中，当页面打开时通过manifest来读取本地文件或请求服务器文件；")]),_._v(" "),e("li",[_._v("缺点：至少访问在线页面一次；")]),_._v(" "),e("li",[_._v("优点：离线缓存、速度快、服务器负载少；")])])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("Cache Storage")])]),_._v(" "),e("ul",[e("li",[_._v("保存每个serverWorker申明的cache对象；")]),_._v(" "),e("li",[_._v("五个核心方法：open()、match()、has()、delete()、keys()；")])])])]),_._v(" "),e("h3",{attrs:{id:"http缓存机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http缓存机制"}},[_._v("#")]),_._v(" HTTP缓存机制")]),_._v(" "),e("ul",[e("li",[_._v("无缓存")]),_._v(" "),e("li",[_._v("缓存 + 无更新")]),_._v(" "),e("li",[_._v("缓存 + Expires 更新机制")]),_._v(" "),e("li",[_._v("缓存 + Cache-Control 更新机制")]),_._v(" "),e("li",[_._v("缓存 + Cache-Control + ETag 更新机制（服务器再验证）")])]),_._v(" "),e("h2",{attrs:{id:"前后端鉴权"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前后端鉴权"}},[_._v("#")]),_._v(" 前后端鉴权")]),_._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/hooo-1102/p/12048996.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("前后端分离 token 和 cookie 对比"),e("OutboundLink")],1)]),_._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/110990545",target:"_blank",rel:"noopener noreferrer"}},[_._v("关于前后端鉴权的几种方式"),e("OutboundLink")],1)]),_._v(" "),e("p",[e("a",{attrs:{href:"https://segmentfault.com/q/1010000005863801/",target:"_blank",rel:"noopener noreferrer"}},[_._v("前后端鉴权问答"),e("OutboundLink")],1)]),_._v(" "),e("h3",{attrs:{id:"cookie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[_._v("#")]),_._v(" cookie")]),_._v(" "),e("ul",[e("li",[_._v("用户登录成功后，服务端存session，客户端存cookie=sessionID；")]),_._v(" "),e("li",[_._v("用户再次请求，携带cookie至服务端进行验证；")]),_._v(" "),e("li",[_._v("cookie是有状态的、存在跨域问题、CSRF安全问题；")])]),_._v(" "),e("h3",{attrs:{id:"token"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#token"}},[_._v("#")]),_._v(" token")]),_._v(" "),e("ul",[e("li",[_._v("用户进行操作都带上token；")]),_._v(" "),e("li",[_._v("token只需存在客户端，服务端进行解析；")]),_._v(" "),e("li",[_._v("存在形式多样，header/requestbody/url 都可以；")]),_._v(" "),e("li",[_._v("token是无状态的、支持跨域、可避免 CSRF 跨站伪造攻击")])])])}),[],!1,null,null,null);v.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{460:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git常用命令和问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git常用命令和问题"}},[t._v("#")]),t._v(" Git常用命令和问题")]),t._v(" "),a("p",[t._v("本文档多为个人学习生活中最常用到的命令汇总，和遇见的问题及解决方案，大部分在其他网络博客或文章中都有提及，只是每次碰到相同问题还是要重新查文档，很不方便，因此将遇到的问题汇总至本文档里。方便学习和查找。")]),t._v(" "),a("h2",{attrs:{id:"推荐资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推荐资料"}},[t._v("#")]),t._v(" 推荐资料")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.bootcss.com/p/git-guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("git简易指南"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("常用git命令清单 阮一峰"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"设置当前项目用户名和邮箱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置当前项目用户名和邮箱"}},[t._v("#")]),t._v(" 设置当前项目用户名和邮箱")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --local -l\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --local user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fenglingGrass"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --local user.email "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2635119087")]),t._v("@qq.com\n")])])]),a("h2",{attrs:{id:"新建本地仓库并链接远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建本地仓库并链接远程仓库"}},[t._v("#")]),t._v(" 新建本地仓库并链接远程仓库")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@xxx.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch --set-upstream-to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("origin/master master\n")])])]),a("h2",{attrs:{id:"删除本地仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除本地仓库"}},[t._v("#")]),t._v(" 删除本地仓库")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf .git\n")])])]),a("h2",{attrs:{id:"提交通用步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交通用步骤"}},[t._v("#")]),t._v(" 提交通用步骤")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"first commit"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin master\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master\n")])])]),a("h2",{attrs:{id:"合并分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并分支"}},[t._v("#")]),t._v(" 合并分支")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("// A想合并B, 先切换到A分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge origin/B                \n")])])]),a("h2",{attrs:{id:"git暂存管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git暂存管理"}},[t._v("#")]),t._v(" Git暂存管理")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash                暂存  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash list           列所有stash\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop            取出暂存\n")])])]),a("h2",{attrs:{id:"辅助查看命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#辅助查看命令"}},[t._v("#")]),t._v(" 辅助查看命令")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" --version         查看git版本\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list     查看配置信息\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status            查看状态\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v("              查看差异        \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log               查看日志\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote            查看远程仓库名\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -a         查看远程所有仓库\n")])])]),a("h2",{attrs:{id:"commit模版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit模版"}},[t._v("#")]),t._v(" commit模版")]),t._v(" "),a("h3",{attrs:{id:"_1、fixed修复问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、fixed修复问题"}},[t._v("#")]),t._v(" 1、fixed修复问题")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\n  fix: 解决……的问题\n  产生原因：\n  解决方案：\n  影响范围：\n  Bug地址：\n  to #12345678\n"')]),t._v('\n\n简写：git commit -m"fix: 解决…问题 '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fix "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#12345678)”")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2、feat新增需求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、feat新增需求"}},[t._v("#")]),t._v(" 2、feat新增需求")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\n  feat: 新增需求\n  需求功能点：\n  1. \n  2. \n  修改内容：\n  影响范围：\n"')]),t._v("\n")])])]),a("h3",{attrs:{id:"_3、提交类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、提交类型"}},[t._v("#")]),t._v(" 3、提交类型")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("feat\t    新增功能\nfix         修复bug\ndocs\t    修改文档\nstyle\t    修改样式\nrefactor\t代码重构\nperf\t    性能优化\ntest\t    测试用例\nchore\t    构建流程、增加依赖库、工具\nrevert      代码回滚\nmerge\t    代码合并\nsync\t    同步主线或分支Bug\n")])])]),a("h2",{attrs:{id:"git常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git常见问题"}},[t._v("#")]),t._v(" Git常见问题")]),t._v(" "),a("h3",{attrs:{id:"error-unable-to-read-sdk-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-unable-to-read-sdk-settings"}},[t._v("#")]),t._v(" error: unable to read SDK settings")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# unable to read SDK settings for '/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk'")]),t._v("\nxcode-select --install\n")])])]),a("h3",{attrs:{id:"fatal-no-such-remote-origin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fatal-no-such-remote-origin"}},[t._v("#")]),t._v(" fatal: No such remote 'origin")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@xxx.git\n")])])]),a("h3",{attrs:{id:"fatal-remote-origin-already-exists"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fatal-remote-origin-already-exists"}},[t._v("#")]),t._v(" fatal: remote origin already exists")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote remove/rm origin\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@xxx.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote set-url origin xxxxx\n")])])]),a("h3",{attrs:{id:"fatal-refusing-to-merge-unrelated-histories"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fatal-refusing-to-merge-unrelated-histories"}},[t._v("#")]),t._v(" fatal: refusing to merge unrelated histories")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin master --allow-unrelated-histories\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并冲突后")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并冲突后")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --set-upstream origin master\n")])])]),a("h3",{attrs:{id:"fatal-authentication-failed-for"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fatal-authentication-failed-for"}},[t._v("#")]),t._v(" fatal: Authentication failed for ...")]),t._v(" "),a("p",[a("span",{staticStyle:{color:"#3eaf7c"}},[t._v("问题场景：")]),a("br"),t._v("\n电脑A有添加ssh，可正常使用ssh形式的链接拉取仓库代码；电脑B未添加ssh，想要拉去远端仓库，只能使用http像是链接；在使用http像是链接时需要输入用户名和密码，则很容易出现上述问题。")]),t._v(" "),a("p",[a("span",{staticStyle:{color:"#3eaf7c"}},[t._v("问题原因：")]),a("br"),t._v("\n在使用http形式输入密码时出错，系统缓存了错误密码，且不再重复提示输入密码，而导致每次都提示认证失败。")]),t._v(" "),a("p",[a("span",{staticStyle:{color:"#3eaf7c"}},[t._v("Window解决：")]),a("br"),t._v("\nwindow系统解决方案可参考此文章："),a("a",{attrs:{href:"https://www.jianshu.com/p/b23cd00cffa6",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.jianshu.com/p/b23cd00cffa6"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[a("span",{staticStyle:{color:"#3eaf7c"}},[t._v("Mac解决方案：")]),a("br"),t._v("\n本人使用Mac电脑出现上述问题，上网搜索尝试过多种方案，都未成功，后来误打误撞，竟然解决了，这里贴下解决过程。")]),t._v(" "),a("p",[t._v("第一步：在git上创建项目令牌，此处已本人使用的企业版coding为例"),a("br"),t._v(" "),a("img",{attrs:{src:"https://fengling68.github.io/imgbed/images/1576935352-2822x560.png",alt:"git-02"}})]),t._v(" "),a("p",[t._v("第二步：使用项目令牌拼接如下格式url")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" setting "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tokenname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'项目令牌用户名'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'项目令牌密码'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  platform "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'e.coding.net'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  username "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git用户名'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  repo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'仓库名称'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("https://")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("setting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tokenname"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("setting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("@")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("setting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("platform"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("setting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("username"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("setting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("repo"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(".git")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("第三步：git命令使用新url直接clone代码或者重新设置remote后pull、push代码均可正常使用。查看Mac钥匙串程序，可以看到如下凭证。"),a("br"),t._v(" "),a("img",{attrs:{src:"https://fengling68.github.io/imgbed/images/1576935352-1758x636.png",alt:"git-03"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{473:function(t,a,e){"use strict";e.r(a);var s=e(1),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"gitignore文件配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitignore文件配置"}},[t._v("#")]),t._v(" gitignore文件配置")]),t._v(" "),a("h2",{attrs:{id:"_1、规则优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、规则优先级"}},[t._v("#")]),t._v(" 1、规则优先级")]),t._v(" "),a("p",[t._v("命令行 > 当前目录 > 父级目录 > ... > $GIT_DIR/info/exclude > core.excludesfile")]),t._v(" "),a("h2",{attrs:{id:"_2、匹配规则-示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、匹配规则-示例"}},[t._v("#")]),t._v(" 2、匹配规则(示例)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("空格  不匹配\n#     文件注释\n/     开始位置，只匹配文件夹以及该文件夹路径下的内容，不匹配该文件\n/     结束位置，匹配项目跟目录\n**    多级目录\n?     单个字符\n[]    单个字符列表\n!     否定，再次包含\n")])])]),a("h2",{attrs:{id:"_3、忽略示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、忽略示例"}},[t._v("#")]),t._v(" 3、忽略示例")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/bin            忽略根目录下的bin文件\n/*.c            忽略cat.c，不忽略 build/cat.c\nbin/            忽略当前路径下的bin文件夹及其子内容，不忽略bin文件\n**/foo          忽略/foo, a/foo, a/b/foo等\na/**/b          忽略a/b, a/x/b, a/x/y/b等\n*.log           忽略所有 .log 文件\nconfig.php      忽略当前路径的 config.php 文件\ndebug/*.obj     忽略 debug/io.obj，不忽略 debug/common/io.obj 和 tools/debug/io.obj\n!/bin/run.sh    不忽略 bin 目录下的 run.sh 文件\n")])])]),a("h2",{attrs:{id:"_4、-gitignore规则不生效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、-gitignore规则不生效"}},[t._v("#")]),t._v(" 4、.gitignore规则不生效")]),t._v(" "),a("p",[t._v(".gitignore只能忽略没有被track的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的，此时先把本地缓存删除(改变成未track状态)再提交。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git rm -r --cached .\ngit add .\ngit commit -m 'update .gitignore'\n")])])]),a("br"),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://uusama.com/542.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接：http://uusama.com/542.html"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);
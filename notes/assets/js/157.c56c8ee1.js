(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{432:function(t,e,s){"use strict";s.r(e);var i=s(1),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"同时配置github、gitee、coding的ssh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同时配置github、gitee、coding的ssh"}},[t._v("#")]),t._v(" 同时配置github、gitee、coding的ssh")]),t._v(" "),s("h2",{attrs:{id:"_1、创建rsa文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建rsa文件"}},[t._v("#")]),t._v(" 1、创建rsa文件")]),t._v(" "),s("pre",[s("code",[t._v('cd ~/.ssh\n\nssh-keygen -t rsa -C "xxx@xx.com" -f "id_rsa_github"\nssh-keygen -t rsa -C "xxx@xx.com" -f "id_rsa_gitee"\nssh-keygen -t rsa -C "xxx@xx.com" -f "id_rsa_coding"\n\n.\n├── config\n├── id_rsa_coding\n├── id_rsa_coding.pub\n├── id_rsa_gitee\n├── id_rsa_gitee.pub\n├── id_rsa_github\n└── id_rsa_github.pub\n')])]),t._v(" "),s("h2",{attrs:{id:"_2、添加-pub内容到相应平台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、添加-pub内容到相应平台"}},[t._v("#")]),t._v(" 2、添加.pub内容到相应平台")]),t._v(" "),s("pre",[s("code",[t._v("cat id_rsa_github.pub\ncat id_rsa_gitee.pub\ncat id_rsa_coding.pub\n")])]),t._v(" "),s("h2",{attrs:{id:"_3、添加config文件解决冲突"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、添加config文件解决冲突"}},[t._v("#")]),t._v(" 3、添加config文件解决冲突")]),t._v(" "),s("pre",[s("code",[t._v("# github\nHost github.com\nHostName github.com\nIdentityFile /Users/yourname/.ssh/id_rsa_github\nPreferredAuthentications publickey\n\n# gitee\nHost gitee.com\nHostName gitee.com\nIdentityFile /Users/yourname/.ssh/id_rsa_gitee\nPreferredAuthentications publickey\n\n# coding\nHost git.coding.net\nHostName git.coding.net\nIdentityFile /Users/yourname/.ssh/id_rsa_coding\nPreferredAuthentications publickey\n")])]),t._v(" "),s("h2",{attrs:{id:"_4、测试连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、测试连接"}},[t._v("#")]),t._v(" 4、测试连接")]),t._v(" "),s("pre",[s("code",[t._v("ssh -T git@github.com\nssh -T git@gitee.com\nssh -T git@git.coding.net\n")])])])}),[],!1,null,null,null);e.default=n.exports}}]);
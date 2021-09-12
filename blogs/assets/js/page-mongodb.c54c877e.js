(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{834:function(n,o,a){"use strict";a.r(o);var t=a(1),s=Object(t.a)({},(function(){var n=this,o=n.$createElement,a=n._self._c||o;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"mongodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb"}},[n._v("#")]),n._v(" mongodb")]),n._v(" "),a("h2",{attrs:{id:"_1、安装和启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装和启动"}},[n._v("#")]),n._v(" 1、安装和启动")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("# 进入 /usr/local\ncd /usr/local\n\n# 下载\nsudo curl -O https://fastdl.mongodb.org/osx/mongodb-osx-x86_64-3.4.2.tgz\n\n# 解压\nsudo tar -zxvf mongodb-osx-x86_64-3.4.2.tgz\n\n# 重命名为 mongodb 目录\nsudo mv mongodb-osx-x86_64-3.4.2 mongodb\n\n# 添加path路径\ncd ~\nvim .bash_profile\n\n# 添加环境变量\nexport PATH=/usr/local/mongodb/bin:$PATH\nexport PATH=${PATH}:/usr/local/mongodb/bin\n\nsource .bash_profile\nmongod -version\n\n# 启动\nsudo mongod\n")])])]),a("h2",{attrs:{id:"_2、安装可视化工具adminmongo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、安装可视化工具adminmongo"}},[n._v("#")]),n._v(" 2、安装可视化工具adminMongo")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("1、克隆adminMongo\ngit clone https://github.com/mrvautin/adminMongo\ncd adminMongo\n\n2、安装\nnpm install\n\n3、启动\nnpm start\n\n4、访问网站\nhttp://127.0.0.1:1234\n\n5、MongoDB链接\nmongodb://127.0.0.1:27017\n")])])]),a("h2",{attrs:{id:"_3、mongodb-安装问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、mongodb-安装问题"}},[n._v("#")]),n._v(" 3、mongodb 安装问题")]),n._v(" "),a("h3",{attrs:{id:"mac端-sudo-open-e-〜-bash-profile-权限被拒绝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac端-sudo-open-e-〜-bash-profile-权限被拒绝"}},[n._v("#")]),n._v(" mac端 sudo open -e 〜/.bash_profile 权限被拒绝：")]),n._v(" "),a("p",[n._v("解决："),a("code",[n._v("sudo chown username ~/.bash_profile")])]),n._v(" "),a("h3",{attrs:{id:"mac端-mongod-启动报错-data-directory-data-db-not-found"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac端-mongod-启动报错-data-directory-data-db-not-found"}},[n._v("#")]),n._v(" mac端 mongod 启动报错：Data directory /data/db not found")]),n._v(" "),a("p",[n._v("解决：更改指定运行路径，"),a("code",[n._v("mongod --dbpath '新的可访问存储路径'")])]),n._v(" "),a("h3",{attrs:{id:"mac端-mongod-启动报错-is-a-mongod-instance-already-running"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac端-mongod-启动报错-is-a-mongod-instance-already-running"}},[n._v("#")]),n._v(" mac端 mongod 启动报错：Is a mongod instance already running?")]),n._v(" "),a("p",[n._v("解决：删除这句报错前提供路径下的 mongod.lock 文件，"),a("code",[n._v("sudo rm /xxx/xxx/data/db/mongod.lock")])]),n._v(" "),a("h3",{attrs:{id:"mac端-新开终端-mongod-命令失效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac端-新开终端-mongod-命令失效"}},[n._v("#")]),n._v(" mac端：新开终端 mongod 命令失效")]),n._v(" "),a("p",[n._v("原因：电脑端使用 iterm2 作为终端工具，未加载 ~/.bash_profile 文件中的环境变量\n详解：https://blog.csdn.net/Bronze5/article/details/103440877\n解决方案：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("cd ~\nvim ~/.zshrc\n\n# 解决iterm2 中zsh 模式不加载 ~/.bash_profile 文件编写的环境变量！\nsource $HOME/.bash_profile\n\nsource ~/.zshrc\n")])])])])}),[],!1,null,null,null);o.default=s.exports}}]);
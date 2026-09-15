import{_ as i,r as c,o as l,c as r,f as p,a as s,b as a,d as t,e as o}from"./app.a39d0481.js";const d={},g={href:"https://help.aliyun.com/document_detail/25471.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://zhuanlan.zhihu.com/p/91731036",target:"_blank",rel:"noopener noreferrer"},h={href:"https://help.aliyun.com/document_detail/29716.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://help.aliyun.com/knowledge_detail/39834.html?spm=a2cle.14465449.0.0.4ccf1d68Cc6Cim#h2--dns-2",target:"_blank",rel:"noopener noreferrer"},k={href:"https://zijian.aliyun.com/?spm=a2c1d.8251892.0.0.1a6b5b76WxQVh9#/domainDetect",target:"_blank",rel:"noopener noreferrer"},b={href:"https://beian.aliyun.com/pcContainer/formpage?page=selfBa&pageAction=init",target:"_blank",rel:"noopener noreferrer"},f={href:"https://help.aliyun.com/knowledge_detail/182263.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://juejin.im/post/6844903940262199309#heading-7",target:"_blank",rel:"noopener noreferrer"},_={href:"https://juejin.im/post/6844903592273379335",target:"_blank",rel:"noopener noreferrer"},v={href:"https://juejin.im/post/6877049080334417934",target:"_blank",rel:"noopener noreferrer"},j={href:"https://juejin.im/post/6844904134345228301",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.nginx.cn/doc/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.jenkins.io/zh/doc/pipeline/tour/getting-started/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://juejin.im/post/6844904176078553096",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.pianshen.com/article/7551711544/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://juejin.im/post/6844904031161155598",target:"_blank",rel:"noopener noreferrer"};function L(T,n){const e=c("ExternalLinkIcon");return l(),r("div",null,[n[16]||(n[16]=p(`<h1 id="阿里云服务折腾记-🔥" tabindex="-1"><a class="header-anchor" href="#阿里云服务折腾记-🔥" aria-hidden="true">#</a> 阿里云服务折腾记 🔥</h1><p>本来想找一篇服务器配置较全面的教程来学习，结果搜索到的多是某一知识点的文章，遂决定边折腾边记录一篇从购买服务器、域名到搭建 ftp、nginx 等的文章。文中涉及的知识点、命令等多是从网上众多文章教程整合而来，图片是本人配置过程中的截图。</p><h2 id="_1-云服务器购买和配置" tabindex="-1"><a class="header-anchor" href="#_1-云服务器购买和配置" aria-hidden="true">#</a> 1. 云服务器购买和配置</h2><h3 id="_1-1-购买云服务器" tabindex="-1"><a class="header-anchor" href="#_1-1-购买云服务器" aria-hidden="true">#</a> 1.1 购买云服务器</h3><p>初学服务配置，先买个小配置的云服务随意折腾一下😄。</p><p><img src="https://fengling68.github.io/imgbed/images/1600693883-584x824.webp" alt="购买服务器"></p><h3 id="_1-2-root-用户登陆密码修改" tabindex="-1"><a class="header-anchor" href="#_1-2-root-用户登陆密码修改" aria-hidden="true">#</a> 1.2 Root 用户登陆密码修改</h3><p>最开始用 <code>VNC</code> 远程登陆输入 <code>root</code> 用户名和密码时，总是登陆失败提示 <code>login incorrect</code>，后来发现密码弄错了，所以重置 <code>root</code> 用户的密码后 <code>VNC</code> 和 <code>Workbench</code> 2种方式均可正常登陆。</p><p><img src="https://fengling68.github.io/imgbed/images/1600694600-1550x634.webp" alt="yun04"></p><p><img src="https://fengling68.github.io/imgbed/images/1600694600-1190x1018.webp" alt="yun05"></p><h3 id="_1-3-vnc-远程连接修改登陆密码" tabindex="-1"><a class="header-anchor" href="#_1-3-vnc-远程连接修改登陆密码" aria-hidden="true">#</a> 1.3 VNC 远程连接修改登陆密码</h3><p><img src="https://fengling68.github.io/imgbed/images/1600694600-1650x500.webp" alt="yun02"></p><p><img src="https://fengling68.github.io/imgbed/images/1600694600-1184x1146.webp" alt="yun03"></p><h3 id="_1-4-workbench-远程连接实例" tabindex="-1"><a class="header-anchor" href="#_1-4-workbench-远程连接实例" aria-hidden="true">#</a> 1.4 Workbench 远程连接实例</h3><p><img src="https://fengling68.github.io/imgbed/images/1600694956-1512x478.webp" alt="yun07"></p><p><img src="https://fengling68.github.io/imgbed/images/1600696362-1598x994.webp" alt="yun06"></p><p><img src="https://fengling68.github.io/imgbed/images/1600695097-3348x1876.webp" alt="yun08"></p><h3 id="_1-5-ssh-命令行连接" tabindex="-1"><a class="header-anchor" href="#_1-5-ssh-命令行连接" aria-hidden="true">#</a> 1.5 SSH 命令行连接</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> root@xxx.xxx.xxx.xxx
<span class="token function">ssh</span> newuser@xxx.xxx.xxx.xxx
</code></pre></div><h3 id="_1-6-添加安全组-端口号配置" tabindex="-1"><a class="header-anchor" href="#_1-6-添加安全组-端口号配置" aria-hidden="true">#</a> 1.6 添加安全组/端口号配置</h3><p>打开云服务器管理控制台，进入实例详情，选择本实例安全组即可添加。 如需在服务器上搭建 SQL、Redis、MongoDB 数据库等，需配置相应的端口号。</p>`,21)),s("p",null,[s("a",g,[n[0]||(n[0]=a("阿里云官方文档：云服务器 ECS > 安全 > 安全组 > 添加安全组规则",-1)),t(e)])]),n[17]||(n[17]=p('<p><img src="https://fengling68.github.io/imgbed/images/1601615610-3358x860.webp" alt="ip06"></p><p><img src="https://fengling68.github.io/imgbed/images/1601615610-3350x1860.webp" alt="ip07"></p><p>已添加安全组示例：</p><p><img src="https://fengling68.github.io/imgbed/images/1602406339861-0-3358x1852.webp" alt="aliyun01"></p><h3 id="_1-7-ssh-连接工具推荐" tabindex="-1"><a class="header-anchor" href="#_1-7-ssh-连接工具推荐" aria-hidden="true">#</a> 1.7 SSH 连接工具推荐</h3><h4 id="termius" tabindex="-1"><a class="header-anchor" href="#termius" aria-hidden="true">#</a> Termius</h4><p><img src="https://fengling68.github.io/imgbed/images/1601629503-2754x1816.webp" alt="yun11"></p><p><img src="https://fengling68.github.io/imgbed/images/1600696948-2560x1600.webp" alt="yun09"></p><h4 id="gopanel" tabindex="-1"><a class="header-anchor" href="#gopanel" aria-hidden="true">#</a> goPanel</h4><p><img src="https://fengling68.github.io/imgbed/images/1600696948-3360x2026.webp" alt="yun10"></p>',10)),o(" *********************************************************************** "),n[18]||(n[18]=s("h2",{id:"_2-域名购买和解析",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2-域名购买和解析","aria-hidden":"true"},"#"),a(" 2. 域名购买和解析")],-1)),s("p",null,[s("a",m,[n[1]||(n[1]=a("详解什么是域名解析/如何解析域名",-1)),t(e)])]),s("p",null,[s("a",h,[n[2]||(n[2]=a("阿里云官方文档：云解析 DNS > 快速入门 > 新手引导",-1)),t(e)])]),s("p",null,[s("a",u,[n[3]||(n[3]=a("阿里云官方文档：云解析 DNS > 操作指南 > 解析生效测试方法",-1)),t(e)])]),s("p",null,[s("a",k,[n[4]||(n[4]=a("网站诊断分析",-1)),t(e)])]),n[19]||(n[19]=p(`<h3 id="_2-1-命令查询" tabindex="-1"><a class="header-anchor" href="#_2-1-命令查询" aria-hidden="true">#</a> 2.1 命令查询</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">dig</span> www.xxx.com

<span class="token function">dig</span> www.xxx.com @1.1.1.1
</code></pre></div><h3 id="_2-2-注意事项" tabindex="-1"><a class="header-anchor" href="#_2-2-注意事项" aria-hidden="true">#</a> 2.2 注意事项</h3><p>TTL：为缓存时间，数值越小，修改记录各地生效时间越快，默认为10分钟。</p><h3 id="_2-3-图片示例" tabindex="-1"><a class="header-anchor" href="#_2-3-图片示例" aria-hidden="true">#</a> 2.3 图片示例</h3><p><img src="https://fengling68.github.io/imgbed/images/1601612726-3344x882.webp" alt="ip01"></p><p><img src="https://fengling68.github.io/imgbed/images/1601613328-3346x1048.webp" alt="ip02"></p><p><img src="https://fengling68.github.io/imgbed/images/1601613328-3354x1248.webp" alt="ip03"></p><p><img src="https://fengling68.github.io/imgbed/images/1601613328-3348x1058.webp" alt="ip04"></p>`,9)),o(" *********************************************************************** "),n[20]||(n[20]=s("h2",{id:"_3-网站备案",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_3-网站备案","aria-hidden":"true"},"#"),a(" 3. 网站备案")],-1)),s("p",null,[s("a",b,[n[5]||(n[5]=a("阿里云备案网址",-1)),t(e)])]),o(" *********************************************************************** "),n[21]||(n[21]=s("h2",{id:"_4-搭建-vsftpd-服务",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_4-搭建-vsftpd-服务","aria-hidden":"true"},"#"),a(" 4. 搭建 vsftpd 服务")],-1)),s("p",null,[s("a",f,[n[6]||(n[6]=a("阿里云官方文档：云服务器 ECS > 建站教程 > 搭建应用 > 搭建FTP站点 > 手动搭建FTP站点（CentOS 8）",-1)),t(e)])]),s("p",null,[s("a",x,[n[7]||(n[7]=a("linux搭建ftp",-1)),t(e)])]),s("p",null,[s("a",_,[n[8]||(n[8]=a("阿里云的ecs服务器创建ftp站点",-1)),t(e)])]),n[22]||(n[22]=p(`<h3 id="_4-1-安装后-vsftpd-相关文件目录说明" tabindex="-1"><a class="header-anchor" href="#_4-1-安装后-vsftpd-相关文件目录说明" aria-hidden="true">#</a> 4.1 安装后 vsftpd 相关文件目录说明</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>/usr/sbin/vsftpd <span class="token comment"># vsftpd 的主程序</span>

/etc/rc.d/init.d/vsftpd <span class="token comment"># 启动脚本</span>
/etc/pam.d/vsftpd <span class="token comment"># pam 认证文件</span>
/etc/vsftpd/vsftpd.conf <span class="token comment"># 主配置文件</span>
/etc/vsftpd.ftpusers <span class="token comment"># 禁止使用 vsftpd 的用户列表文件</span>
/etc/vsftpd.user_list <span class="token comment"># 禁止或允许使用 vsftpd 的用户列表文件（黑名单 or 白名单）</span>

/var/ftp <span class="token comment"># 匿名用户主目录</span>
/var/ftp/pub <span class="token comment"># 匿名用户的下载目录</span>
</code></pre></div><h3 id="_4-2-vsftpd-相关命令" tabindex="-1"><a class="header-anchor" href="#_4-2-vsftpd-相关命令" aria-hidden="true">#</a> 4.2 vsftpd 相关命令</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 vsftpd</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> vsftpd

<span class="token comment"># 进入 vsftpd 目录</span>
<span class="token builtin class-name">cd</span> /etc/vsftpd

<span class="token comment"># 查看文件命令</span>
<span class="token function">ls</span>

<span class="token comment"># 防火墙开启21端口（可跳过）</span>
firewall-cmd --add-service<span class="token operator">=</span>ftp <span class="token parameter variable">--permanent</span>
firewall-cmd <span class="token parameter variable">--reload</span>

<span class="token comment"># 云服务器设置开机自启动</span>
systemctl <span class="token builtin class-name">enable</span> vsftpd.service

<span class="token comment"># 启动 vsftpd 服务</span>
systemctl start vsftpd.service

<span class="token comment"># 关闭 vsftpd 服务</span>
systemctl stop vsftpd.service

<span class="token comment"># 重启 vsftpd 服务</span>
systemctl restart vsftpd.service

<span class="token comment"># 检查 vsftpd 状态</span>
systemctl status vsftpd.service

<span class="token comment"># 查看 ftp 端口号</span>
<span class="token function">netstat</span> <span class="token parameter variable">-antup</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">ftp</span>

<span class="token comment"># 卸载命令</span>
<span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span><span class="token function">grep</span> vsftp
<span class="token function">rpm</span> <span class="token parameter variable">-e</span> vsftpd-xxxxxxxxx
</code></pre></div><p><img src="https://fengling68.github.io/imgbed/images/1601635288-2560x1600.webp" alt="ftp01"></p><h3 id="_4-3-配置本地用户访问ftp服务器" tabindex="-1"><a class="header-anchor" href="#_4-3-配置本地用户访问ftp服务器" aria-hidden="true">#</a> 4.3 配置本地用户访问FTP服务器</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 新建一个账号用于 ftp 登陆和上传</span>
<span class="token function">sudo</span> <span class="token function">useradd</span> iamftp
<span class="token function">sudo</span> <span class="token function">passwd</span> iamftp

<span class="token comment"># 创建一个供FTP服务使用的文件目录</span>
<span class="token function">mkdir</span> /home/iamftp/ftpdata

<span class="token comment"># 更改 /home/iamftp/ftpdata 目录的拥有者为 iamftp</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> iamftp:iamftp /home/iamftp/ftpdata
</code></pre></div><h3 id="_4-4-修改相关配置" tabindex="-1"><a class="header-anchor" href="#_4-4-修改相关配置" aria-hidden="true">#</a> 4.4 修改相关配置</h3><p>1、修改 vsftpd.conf 配置</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/vsftpd/vsftpd.conf

<span class="token comment"># 主要修改项</span>
<span class="token comment"># 禁止匿名登录FTP服务器</span>
<span class="token assign-left variable">anonymous_enable</span><span class="token operator">=</span>NO
<span class="token comment"># 允许本地用户登录FTP服务器</span>
<span class="token assign-left variable">local_enable</span><span class="token operator">=</span>YES
<span class="token comment"># 监听IPv4 sockets</span>
<span class="token assign-left variable">listen</span><span class="token operator">=</span>YES
<span class="token comment"># 关闭监听IPv6 sockets</span>
<span class="token comment"># listen_ipv6=YES</span>

<span class="token comment"># 新添加参数</span>
<span class="token comment"># 设置本地用户登陆后所在目录</span>
<span class="token assign-left variable">local_root</span><span class="token operator">=</span>/var/ftp/iamftp
<span class="token comment"># 全部用户被限制在主目录</span>
<span class="token assign-left variable">chroot_local_user</span><span class="token operator">=</span>YES
<span class="token comment"># 启用例外用户名单</span>
<span class="token assign-left variable">chroot_list_enable</span><span class="token operator">=</span>YES
<span class="token comment"># 指定例外用户列表文件，列表中用户不被锁定在主目录</span>
<span class="token assign-left variable">chroot_list_file</span><span class="token operator">=</span>/etc/vsftpd/chroot_list
<span class="token comment"># 开启被动模式</span>
<span class="token assign-left variable">pasv_enable</span><span class="token operator">=</span>YES
<span class="token assign-left variable">allow_writeable_chroot</span><span class="token operator">=</span>YES
<span class="token comment"># Linux实例公网IP</span>
<span class="token assign-left variable">pasv_address</span><span class="token operator">=</span>xxx.xxx.xxx.xxx
<span class="token comment"># 设置被动模式下，建立数据传输可使用的端口范围的最小值</span>
<span class="token assign-left variable">pasv_min_port</span><span class="token operator">=</span><span class="token number">50000</span>
<span class="token comment"># 设置被动模式下，建立数据传输可使用的端口范围的最大值</span>
<span class="token assign-left variable">pasv_max_port</span><span class="token operator">=</span><span class="token number">50100</span>
</code></pre></div><p>2、创建 chroot_list 文件</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 此名单中的用户不会被锁定在主目录，可以访问其他目录，没有也要创建</span>
<span class="token function">vim</span> /etc/vsftpd/chroot_list
</code></pre></div><p>3、重启 vsftpd 服务</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>systemctl restart vsftpd.service
</code></pre></div><p><img src="https://fengling68.github.io/imgbed/images/1601640626-2416x1462.webp" alt="ftp03"></p><h3 id="_4-5-端口添加安全组" tabindex="-1"><a class="header-anchor" href="#_4-5-端口添加安全组" aria-hidden="true">#</a> 4.5 端口添加安全组</h3><p>参照 <code>1.6</code> 将端口 <code>21</code> 和 <code>vsftpd.conf</code> 文件中的端口最大最小值加入安全组规则；</p><p><img src="https://fengling68.github.io/imgbed/images/1601633400-3332x1130.webp" alt="ftp04"></p><h3 id="_4-6-termius-连接配置示例" tabindex="-1"><a class="header-anchor" href="#_4-6-termius-连接配置示例" aria-hidden="true">#</a> 4.6 Termius 连接配置示例</h3><p><img src="https://fengling68.github.io/imgbed/images/1601639184-2662x1804.webp" alt="ftp06"></p><p><img src="https://fengling68.github.io/imgbed/images/1601800814017-1-2416x1462.webp" alt="ftp07"></p><h3 id="_4-7-本地-ftp-测试" tabindex="-1"><a class="header-anchor" href="#_4-7-本地-ftp-测试" aria-hidden="true">#</a> 4.7 本地 ftp 测试</h3><p>Google Chrome 地址栏输入 <code>ftp://xxx.xxx.xxx.xxx:21</code> 回车，输入用户名 <code>iamftp</code> 和密码后可正常显示 <code>/home/iamftp/ftpdata</code> 里的文件，则表示配置正确。</p><p><img src="https://fengling68.github.io/imgbed/images/1601801933664-0-3358x1376.webp" alt="ftp08"></p>`,24)),o(" *********************************************************************** "),n[23]||(n[23]=s("h2",{id:"_5-nginx-部署-http-静态服务",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_5-nginx-部署-http-静态服务","aria-hidden":"true"},"#"),a(" 5. Nginx 部署 HTTP 静态服务")],-1)),s("p",null,[s("a",v,[n[9]||(n[9]=a("Nginx 部署线上服务器（Liunx）",-1)),t(e)])]),s("p",null,[s("a",j,[n[10]||(n[10]=a("CentOS 7 安装 Nginx",-1)),t(e)])]),n[24]||(n[24]=p(`<p>本模块命令多来自以上2篇文章，感谢🙏作者大大。</p><h3 id="_5-1-安装前置软件" tabindex="-1"><a class="header-anchor" href="#_5-1-安装前置软件" aria-hidden="true">#</a> 5.1 安装前置软件</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 检查 gcc、openssl、pcre、zlib 等是否安装</span>
yum list installed <span class="token operator">|</span> <span class="token function">grep</span> gcc
yum list installed <span class="token operator">|</span> <span class="token function">grep</span> openssl
yum list installed <span class="token operator">|</span> <span class="token function">grep</span> pcre
yum list installed <span class="token operator">|</span> <span class="token function">grep</span> zlib

<span class="token comment"># 一次安装命令，本次购买服务器经检查已安装故跳过此步骤</span>
yum <span class="token function">install</span> gcc openssl openssl-devel pcre pcre-devdl zlib zlib-devel <span class="token parameter variable">-y</span>
</code></pre></div><p><img src="https://fengling68.github.io/imgbed/images/1601716288-2220x1404.webp" alt="nginx01"></p><h3 id="_5-2-安装启动-nginx" tabindex="-1"><a class="header-anchor" href="#_5-2-安装启动-nginx" aria-hidden="true">#</a> 5.2 安装启动 nginx</h3><p>安装前请先按照 <code>1.6</code> 步骤在服务端将 <code>80</code> 端口加入安全组规则。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> nginx

<span class="token comment"># 卸载</span>
yum remove nginx

<span class="token comment"># 设置开机启动</span>
systemctl <span class="token builtin class-name">enable</span> nginx

<span class="token comment"># 启动 nginx 服务</span>
<span class="token function">service</span> nginx start

<span class="token comment"># 停止 nginx 服务</span>
<span class="token function">service</span> nginx stop

<span class="token comment"># 重启 nginx 服务</span>
<span class="token function">service</span> nginx restart

<span class="token comment"># 查看 nginx 状态</span>
systemctl status nginx.service

<span class="token comment"># 重新加载配置，在修改过 nginx 配置文件后执行</span>
<span class="token function">service</span> nginx reload

<span class="token comment"># 附：另一种启动方式</span>
<span class="token builtin class-name">cd</span> sbin/
./nginx

<span class="token comment"># 查看启动进程</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> nginx
</code></pre></div><p><img src="https://fengling68.github.io/imgbed/images/1601800814037-0-2220x1404.webp" alt="nginx02"></p><p><img src="https://fengling68.github.io/imgbed/images/1601716302-2220x1404.webp" alt="nginx03"></p><h3 id="_5-3-测试是否安装成功" tabindex="-1"><a class="header-anchor" href="#_5-3-测试是否安装成功" aria-hidden="true">#</a> 5.3 测试是否安装成功</h3><p>浏览器输入网址 <code>http://xxx.xxx.xxx.xxx</code> 或者 <code>http://www.xxx.com</code> 后回车，出现如下画面则表示ngnix安装成功。</p><p><img src="https://fengling68.github.io/imgbed/images/1601715455-3322x1512.webp" alt="nginx04"></p><h3 id="_5-4-修改-nginx-conf-配置" tabindex="-1"><a class="header-anchor" href="#_5-4-修改-nginx-conf-配置" aria-hidden="true">#</a> 5.4 修改 nginx.conf 配置</h3>`,13)),s("p",null,[s("a",w,[n[11]||(n[11]=a("Nginx 中文文档",-1)),t(e)])]),n[25]||(n[25]=p(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 编辑文件</span>
<span class="token function">vim</span> /etc/nginx/nginx.conf

<span class="token comment"># :wq 保存修改后，重新加载配置</span>
<span class="token function">service</span> nginx reload
</code></pre></div><p><strong>个人配置示例（请关注带😊的几个位置）</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># For more information on configuration, see:</span>
<span class="token comment">#   * Official English Documentation: http://nginx.org/en/docs/</span>
<span class="token comment">#   * Official Russian Documentation: http://nginx.org/ru/docs/</span>

<span class="token comment"># 😊 所属用户，一般为 nginx | nobody</span>
user iamftp<span class="token punctuation">;</span>
worker_processes auto<span class="token punctuation">;</span>
error_log /var/log/nginx/error.log<span class="token punctuation">;</span>
pid /run/nginx.pid<span class="token punctuation">;</span>

<span class="token comment"># Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.</span>
include /usr/share/nginx/modules/*.conf<span class="token punctuation">;</span>

events <span class="token punctuation">{</span>
  worker_connections <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
  log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
                    <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
                    <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>

  access_log  /var/log/nginx/access.log  main<span class="token punctuation">;</span>

  sendfile            on<span class="token punctuation">;</span>
  tcp_nopush          on<span class="token punctuation">;</span>
  tcp_nodelay         on<span class="token punctuation">;</span>
  keepalive_timeout   <span class="token number">65</span><span class="token punctuation">;</span>
  types_hash_max_size <span class="token number">2048</span><span class="token punctuation">;</span>

  <span class="token comment"># 开启文件压缩</span>
  <span class="token comment"># gzip                on;</span>
  <span class="token comment"># gzip_types    </span>
  <span class="token comment">#   text/plain </span>
  <span class="token comment">#   text/css</span>
  <span class="token comment">#   text/xml</span>
  <span class="token comment">#   text/javascript</span>
  <span class="token comment">#   application/javascript</span>
  <span class="token comment">#   application/x-javascript</span>
  <span class="token comment">#   application/json</span>
  <span class="token comment">#   application/xml</span>
  <span class="token comment">#   application/xml+rss</span>
  <span class="token comment">#   application/xhtml+xml</span>
  <span class="token comment">#   application/x-font-ttf</span>
  <span class="token comment">#   application/x-font-opentype</span>
  <span class="token comment">#   image/svg+xml</span>
  <span class="token comment">#   image/x-icon;</span>


  include             /etc/nginx/mime.types<span class="token punctuation">;</span>
  default_type        application/octet-stream<span class="token punctuation">;</span>

  <span class="token comment"># 😊 解决中文乱码</span>
  charset utf-8<span class="token punctuation">;</span>

  <span class="token comment"># Load modular configuration files from the /etc/nginx/conf.d directory.</span>
  <span class="token comment"># See http://nginx.org/en/docs/ngx_core_module.html#include</span>
  <span class="token comment"># for more information.</span>
  include /etc/nginx/conf.d/*.conf<span class="token punctuation">;</span>

  server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span> default_server<span class="token punctuation">;</span>
    listen       <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:80 default_server<span class="token punctuation">;</span>
    
    <span class="token comment"># Load configuration files for the default server block.</span>
    include /etc/nginx/default.d/*.conf<span class="token punctuation">;</span>

    <span class="token comment"># 😊 有域名则配置，没有则配置服务器公网IP</span>
    server_name  <span class="token number">111</span>.xxx.xxx.111<span class="token punctuation">;</span>

    <span class="token comment"># 😊 解决中文乱码</span>
    charset utf-8<span class="token punctuation">;</span>

    <span class="token comment"># 😊 存放静态页面的目录</span>
    <span class="token comment"># root /usr/share/nginx/html;</span>
    root /home/iamftp/ftpdata<span class="token punctuation">;</span>

    <span class="token comment"># 😊 首页设置</span>
    location / <span class="token punctuation">{</span>
      root /home/iamftp/ftpdata<span class="token punctuation">;</span>
      index index.html index.htm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 😊 404、40x错误页设置</span>
    error_page <span class="token number">404</span> /404.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /40x.html <span class="token punctuation">{</span>
      root /home/iamftp/ftpdata<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 😊 50x错误页设置</span>
    error_page <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
      root /home/iamftp/ftpdata<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 禁止访问根目录下以 ht 结尾的文件</span>
    location ~ /<span class="token punctuation">\\</span>.ht <span class="token punctuation">{</span>
      deny all<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>


  <span class="token comment"># Settings for a TLS enabled server.</span>
  <span class="token comment">#</span>
  <span class="token comment"># server {</span>
  <span class="token comment">#   listen       443 ssl http2 default_server;</span>
  <span class="token comment">#   listen       [::]:443 ssl http2 default_server;</span>
  <span class="token comment">#   server_name  _;</span>
  <span class="token comment">#   root         /usr/share/nginx/html;</span>
  <span class="token comment">#</span>
  <span class="token comment">#   ssl_certificate &quot;/etc/pki/nginx/server.crt&quot;;</span>
  <span class="token comment">#   ssl_certificate_key &quot;/etc/pki/nginx/private/server.key&quot;;</span>
  <span class="token comment">#   ssl_session_cache shared:SSL:1m;</span>
  <span class="token comment">#   ssl_session_timeout  10m;</span>
  <span class="token comment">#   ssl_ciphers PROFILE=SYSTEM;</span>
  <span class="token comment">#   ssl_prefer_server_ciphers on;</span>
  <span class="token comment">#</span>
  <span class="token comment">#   # Load configuration files for the default server block.</span>
  <span class="token comment">#   include /etc/nginx/default.d/*.conf;</span>
  <span class="token comment">#</span>
  <span class="token comment">#   location / {</span>
  <span class="token comment">#   }</span>
  <span class="token comment">#</span>
  <span class="token comment">#   error_page 404 /404.html;</span>
  <span class="token comment">#     location = /40x.html {</span>
  <span class="token comment">#   }</span>
  <span class="token comment">#</span>
  <span class="token comment">#   error_page 500 502 503 504 /50x.html;</span>
  <span class="token comment">#     location = /50x.html {</span>
  <span class="token comment">#   }</span>
  <span class="token comment"># }</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_5-5-测试-html-静态网页部署成功" tabindex="-1"><a class="header-anchor" href="#_5-5-测试-html-静态网页部署成功" aria-hidden="true">#</a> 5.5 测试 html 静态网页部署成功</h3><blockquote><p>第一步：通过 <code>ftp</code> 方式添加文件到上面 <code>4.3</code> 中创建的 <code>ftp</code> 数据存储目录 <code>/home/iamftp/ftpdata</code>；</p></blockquote><p><img src="https://fengling68.github.io/imgbed/images/1601715455-2548x1410.webp" alt="nginx05"></p><blockquote><p>第二步：浏览器测试首页是否可正常访问</p></blockquote><p><img src="https://fengling68.github.io/imgbed/images/1601715455-3356x1938.webp" alt="nginx07"></p><blockquote><p>第三步：浏览器测试404错误页是否可正常访问</p></blockquote><p><img src="https://fengling68.github.io/imgbed/images/1601715455-3354x1944.webp" alt="nginx06"></p>`,10)),o(" *********************************************************************** "),n[26]||(n[26]=s("h2",{id:"_6-安装jenkins并部署项目",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_6-安装jenkins并部署项目","aria-hidden":"true"},"#"),a(" 6. 安装Jenkins并部署项目")],-1)),s("p",null,[s("a",y,[n[12]||(n[12]=a("jenkins 中文文档",-1)),t(e)])]),s("p",null,[s("a",q,[n[13]||(n[13]=a("好玩的Jenkins（讲解很详细的一篇文章👍）",-1)),t(e)])]),s("p",null,[s("a",S,[n[14]||(n[14]=a("使用 Jenkins 构建 Coding 项目",-1)),t(e)])]),s("p",null,[s("a",E,[n[15]||(n[15]=a("使用 Jenkins 实现前端自动化发布和通知，让你的发布只需要 git push",-1)),t(e)])]),n[27]||(n[27]=p(`<h4 id="jenkins-工作流程-摘自推荐阅读文章第三篇" tabindex="-1"><a class="header-anchor" href="#jenkins-工作流程-摘自推荐阅读文章第三篇" aria-hidden="true">#</a> jenkins 工作流程（摘自推荐阅读文章第三篇）</h4><ol><li>本地：push 代码；</li><li>服务端：jenkins 拉取代码；</li><li>服务端：复制代码到 web 访问目录；</li><li>发送通知：邮件、钉钉；</li></ol><h3 id="_6-1-安装命令汇总" tabindex="-1"><a class="header-anchor" href="#_6-1-安装命令汇总" aria-hidden="true">#</a> 6.1 安装命令汇总</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 先确认 jenkins 依赖的 java 是否安装</span>
yum <span class="token function">install</span> <span class="token function">java</span>
<span class="token function">java</span> <span class="token parameter variable">-version</span>

<span class="token comment"># 获取 jenkins 依赖库</span>
<span class="token function">sudo</span> <span class="token function">wget</span> <span class="token parameter variable">-O</span> /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat/jenkins.repo
<span class="token function">sudo</span> <span class="token function">rpm</span> <span class="token parameter variable">--import</span> https://pkg.jenkins.io/redhat/jenkins.io.key

<span class="token comment"># 安装 jenkins</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> jenkins

<span class="token comment"># 查看 jenkins 安装目录</span>
<span class="token function">rpm</span> <span class="token parameter variable">-ql</span> jenkins

<span class="token comment"># 启动 jenkins</span>
systemctl start jenkins

<span class="token comment"># 关闭 jenkins</span>
systemctl stop jenkins

<span class="token comment"># 重启 jenkins</span>
systemctl restart jenkins
</code></pre></div><h3 id="_6-2-初始化-jenkins-省略步骤图" tabindex="-1"><a class="header-anchor" href="#_6-2-初始化-jenkins-省略步骤图" aria-hidden="true">#</a> 6.2 初始化 jenkins（省略步骤图）</h3><blockquote><p>第一步：参照 <code>1.6</code> 将 jenkins 使用的 <code>8080</code> 端口加入到安全组规则中； 第二步：在浏览器端输入 <code>http://xxx.xxx.xxx.xxx:8080</code> 后打开页面； 第三部：执行命令 <code>cat /var/lib/jenkins/secrets/initialAdminPassword</code> 获取密码并输入至页面管理员密码处； 第四步：选择并安装插件，等待约二十分钟后安装成功； 第五步：创建第一个管理员账号，并记住账号和密码； 恭喜你，Jenkins 安装成功了 🌹🎉。</p></blockquote><p><img src="https://fengling68.github.io/imgbed/images/1601800814030-3-3352x1998.webp" alt="jenkins01"></p><p><img src="https://fengling68.github.io/imgbed/images/1601800814028-2-3356x2012.webp" alt="jenkins02"></p><h3 id="_6-3-服务器安装-git" tabindex="-1"><a class="header-anchor" href="#_6-3-服务器安装-git" aria-hidden="true">#</a> 6.3 服务器安装 git</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装命令</span>
yum <span class="token function">install</span> <span class="token function">git</span>

<span class="token comment"># 查看版本</span>
<span class="token function">git</span> <span class="token parameter variable">--version</span>

<span class="token comment"># 查看 git 安装位置</span>
<span class="token function">whereis</span> <span class="token function">git</span>
</code></pre></div><h4 id="jenkins-确认-git-可执行文件路径" tabindex="-1"><a class="header-anchor" href="#jenkins-确认-git-可执行文件路径" aria-hidden="true">#</a> Jenkins 确认 Git 可执行文件路径</h4><p><code>Jenkins</code> -&gt; 系统管理 -&gt; 全局工具配置 -&gt; Git区域 -&gt; 确认Git可执行文件的路径正确</p><h3 id="_6-4-新建项目并构建" tabindex="-1"><a class="header-anchor" href="#_6-4-新建项目并构建" aria-hidden="true">#</a> 6.4 新建项目并构建</h3><h4 id="_6-4-1-jenkins-安装插件" tabindex="-1"><a class="header-anchor" href="#_6-4-1-jenkins-安装插件" aria-hidden="true">#</a> 6.4.1 Jenkins 安装插件</h4><p>Github仓库：<code>jenkins</code> -&gt; 系统管理 -&gt; 管理插件 -&gt; 安装 <code>Generic Webhook Trigger</code> 插件； Coding仓库：<code>jenkins</code> -&gt; 系统管理 -&gt; 管理插件 -&gt; 安装 <code>Coding Webhook</code> 插件； nvm插件安装：<code>jenkins</code> -&gt; 系统管理 -&gt; 管理插件 -&gt; 安装 <code>nvm wrapper</code> 插件；</p><p><img src="https://fengling68.github.io/imgbed/images/1601818849645-2-3358x1596.webp" alt="jenkins05"></p><h4 id="_6-4-2-新建自由风格项目" tabindex="-1"><a class="header-anchor" href="#_6-4-2-新建自由风格项目" aria-hidden="true">#</a> 6.4.2 新建自由风格项目</h4><p><img src="https://fengling68.github.io/imgbed/images/1601820435999-0-3344x1628.webp" alt="jenkins14"></p><p><img src="https://fengling68.github.io/imgbed/images/1601820436005-1-3312x1870.webp" alt="jenkins15"></p><h4 id="_6-4-3-配置-general" tabindex="-1"><a class="header-anchor" href="#_6-4-3-配置-general" aria-hidden="true">#</a> 6.4.3 配置：General</h4><p><img src="https://fengling68.github.io/imgbed/images/1602406339852-4-1890x1636.webp" alt="jenkins00"></p><h4 id="_6-4-4-配置-源码管理" tabindex="-1"><a class="header-anchor" href="#_6-4-4-配置-源码管理" aria-hidden="true">#</a> 6.4.4 配置：源码管理</h4><p><img src="https://fengling68.github.io/imgbed/images/1601818849629-4-3288x1536.webp" alt="jenkins08"></p><p><img src="https://fengling68.github.io/imgbed/images/1601818849643-5-3312x1732.webp" alt="jenkins09"></p><p><img src="https://fengling68.github.io/imgbed/images/1601818849641-3-3360x1878.webp" alt="jenkins07"></p><h4 id="_6-4-5-配置-构建触发器" tabindex="-1"><a class="header-anchor" href="#_6-4-5-配置-构建触发器" aria-hidden="true">#</a> 6.4.5 配置：构建触发器</h4><p><img src="https://fengling68.github.io/imgbed/images/1601818849638-6-3326x1720.webp" alt="jenkins10"></p><h4 id="_6-4-6-配置-构建环境-nvm-setting" tabindex="-1"><a class="header-anchor" href="#_6-4-6-配置-构建环境-nvm-setting" aria-hidden="true">#</a> 6.4.6 配置：构建环境（NVM Setting）</h4><p><img src="https://fengling68.github.io/imgbed/images/1601818849635-7-3316x1640.webp" alt="jenkins11"></p><h4 id="_6-4-7-配置-构建" tabindex="-1"><a class="header-anchor" href="#_6-4-7-配置-构建" aria-hidden="true">#</a> 6.4.7 配置：构建</h4><p><img src="https://fengling68.github.io/imgbed/images/1601818849618-8-3318x922.webp" alt="jenkins12"></p><h4 id="_6-4-8-配置-构建后操作" tabindex="-1"><a class="header-anchor" href="#_6-4-8-配置-构建后操作" aria-hidden="true">#</a> 6.4.8 配置：构建后操作</h4><h4 id="_6-4-9-coding-仓库配置-webhook" tabindex="-1"><a class="header-anchor" href="#_6-4-9-coding-仓库配置-webhook" aria-hidden="true">#</a> 6.4.9 Coding 仓库配置 WebHook</h4><p><img src="https://fengling68.github.io/imgbed/images/1601818849627-0-3356x1666.webp" alt="jenkins03"></p><p><img src="https://fengling68.github.io/imgbed/images/1601818849633-1-3328x1754.webp" alt="jenkins04"></p><h4 id="_6-4-10-测试是否生效" tabindex="-1"><a class="header-anchor" href="#_6-4-10-测试是否生效" aria-hidden="true">#</a> 6.4.10 测试是否生效</h4><p>修改代码并上传至仓库，刷新 jenkins 主界面可看到左下方项目已经在构建。</p><p><img src="https://fengling68.github.io/imgbed/images/1601818849631-9-3350x1828.webp" alt="jenkins13"></p><p>第一次构建 <code>test</code> 项目失败，查看构建记录提示 <code>python2</code>、<code>g++</code> 命令不存在，解决方案在服务器上执行相应的安装命令后，jenkins 重新点击立即构建即可。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 python2</span>
yum <span class="token function">install</span> python2

<span class="token comment"># 安装 g++</span>
yum <span class="token function">install</span> gcc gcc-c++
</code></pre></div><p><img src="https://fengling68.github.io/imgbed/images/1601822016362-0-3358x1814.webp" alt="jenkins16"></p><h3 id="_6-5-jenkins-发布项目" tabindex="-1"><a class="header-anchor" href="#_6-5-jenkins-发布项目" aria-hidden="true">#</a> 6.5 jenkins 发布项目</h3><p><code>jenkins</code> 将打包后的 <code>dist</code> 目录发布，只需要在项目配置构建区域的执行 <code>shell</code> 里添加几行命令即可，注意 <code>/home/iamftp/ftpdata/</code> 是前面配置 ftp 和 nginx 时可访问的目录，<code>tools</code> 是放置打包后文件的目录，这里先判断 <code>tools</code> 是否存在，不存在的情况下先创建目录，然后执行 <code>cp</code> 命令，同时输出构建成功后的访问地址。</p><p><img src="https://fengling68.github.io/imgbed/images/1601884202804-0-3318x1258.webp" alt="jenkins17"></p><p>添加命令并成功保存后点击立即构建，发现构建失败，查看构建记录发现，执行 <code>cp</code> 命令时没有目标目录的访问权限，解决方案如下：</p><p><img src="https://fengling68.github.io/imgbed/images/1601884202817-1-3312x1838.webp" alt="jenkins18"></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 修改 jenkins 用户</span>
<span class="token function">vim</span> /etc/sysconfig/jenkins

<span class="token comment"># 将 JENKINS_USER 改成 root</span>
<span class="token assign-left variable">JENKINS_USER</span><span class="token operator">=</span><span class="token string">&quot;root&quot;</span>

<span class="token comment"># 修改 jenkins 所有者</span>
<span class="token builtin class-name">cd</span> /var/lib
<span class="token function">chown</span> <span class="token parameter variable">-R</span> root:root jenkins

<span class="token comment"># 查看 jenkins 目录所有者是否修改为 root</span>
ll <span class="token parameter variable">-a</span>

<span class="token comment"># 重启 jenkins</span>
<span class="token function">service</span> jenkins restart
</code></pre></div><p>成功修改 jenkins 所有者后，再次点击立即构建，等待一分钟后构建成功，打开 <code>http://xxx.xxx.xxx.xxx/tools/index.html</code> 就可以查看网页内容了🎉🎉。 <img src="https://fengling68.github.io/imgbed/images/1601884202820-2-3318x1848.webp" alt="jenkins19"></p><h3 id="_6-6-jenkins-邮件通知" tabindex="-1"><a class="header-anchor" href="#_6-6-jenkins-邮件通知" aria-hidden="true">#</a> 6.6 jenkins 邮件通知</h3><h4 id="邮件模版" tabindex="-1"><a class="header-anchor" href="#邮件模版" aria-hidden="true">#</a> 邮件模版</h4><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">/&gt;</span></span>Jenkins构建结束通知,请及时处理！(本邮件是程序自动下发,请勿回复！) <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">/&gt;</span></span>

项目名称：$PROJECT_NAME <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
构建编号：$BUILD_NUMBER 次构建 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
构建状态：$BUILD_STATUS <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
触发原因：\${CAUSE} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
Git  分支：\${GIT_BRANCH} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
Git  版本：\${GIT_REVISION} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
Git  路径：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${GIT_URL}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\${GIT_URL}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
构建地址：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$BUILD_URL<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>$BUILD_URL<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
构建日志：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${BUILD URL}console<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\${BUILD_URL}console<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
变更集：\${JELLY_SCRIPT,template=&quot;html&quot;} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><h4 id="配置步骤" tabindex="-1"><a class="header-anchor" href="#配置步骤" aria-hidden="true">#</a> 配置步骤</h4><blockquote><p>第一步：<code>jenkins</code> -&gt; 系统管理 -&gt; 管理插件 -&gt; 安装 <code>Email Extension Plugin</code> 插件；</p></blockquote><p><img src="https://fengling68.github.io/imgbed/images/1602409139214-0-2602x300.webp" alt="email01"></p><blockquote><p>第二步：<code>jenkins</code> -&gt; 系统管理 -&gt; 系统配置 -&gt; <code>Jenkins Location</code>、<code>Extended E-mail Notification</code>、<code>邮件通知</code> 三个配置项；</p></blockquote><p><img src="https://fengling68.github.io/imgbed/images/1602406339858-2-1076x2211.webp" alt="email02"></p><blockquote><p>第三步：<code>jenkins</code> -&gt; 项目配置 -&gt; <code>构建后操作</code> 配置；</p></blockquote><p><img src="https://fengling68.github.io/imgbed/images/1602406339856-3-952x2337.webp" alt="email03"></p><blockquote><p>图中标有数字的邮箱说明： <code>1、2、4</code>：邮件管理员和发送者，是开通了 <code>smtp</code> 服务的邮箱，保持一致； <code>3</code>：这里是邮件接收者，可以配置一个或多个接收用户，多个邮箱地址以逗号空格隔开； <code>5</code>：这里是 <code>jenkins</code> 自带邮箱通知的测试区域，可随意填写邮箱测试； <code>6</code>：这里可默认为空，如果构建时报“503”错误，在保证其他配置无误时可尝试配置为和 <code>1、2、4</code> 相同的邮箱地址查看问题是否解决；</p><p>在保证邮箱相关配置正确情况下，其他配置可参考图片进行修改或使用默认字段即可；</p></blockquote><h3 id="_6-7-jenkins-钉钉通知" tabindex="-1"><a class="header-anchor" href="#_6-7-jenkins-钉钉通知" aria-hidden="true">#</a> 6.7 jenkins 钉钉通知</h3><h4 id="通知模版" tabindex="-1"><a class="header-anchor" href="#通知模版" aria-hidden="true">#</a> 通知模版</h4><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> Git分支：
\${GIT_BRANCH}
<span class="token list punctuation">-</span> Git路径：
\${GIT_URL}
<span class="token list punctuation">-</span> 测网地址：
http://xxx.xxx.xxx.xxx/tools/index.html
</code></pre></div><h4 id="配置步骤-1" tabindex="-1"><a class="header-anchor" href="#配置步骤-1" aria-hidden="true">#</a> 配置步骤</h4><blockquote><p>第一步：电脑端钉钉 -&gt; 群设置 -&gt; 智能群助手 -&gt; 添加机器人 -&gt; 自定义（通过webhook接入自定义服务） -&gt; 添加；</p></blockquote><p><img src="https://fengling68.github.io/imgbed/images/1602507672832-0-1348x1176.webp" alt="jenkins01"></p><p><img src="https://fengling68.github.io/imgbed/images/1602507672836-5-1360x1188.webp" alt="jenkins02"></p><p><img src="https://fengling68.github.io/imgbed/images/1602507672834-4-1352x1180.webp" alt="jenkins03"></p><blockquote><p>第二步：<code>jenkins</code> -&gt; 系统管理 -&gt; 管理插件 -&gt; 安装 <code>DingTalk</code> 插件；</p></blockquote><blockquote><p>第三步：<code>jenkins</code> -&gt; 系统管理 -&gt; 系统配置 -&gt; <code>钉钉</code> 项配置项；</p></blockquote><p><img src="https://fengling68.github.io/imgbed/images/1602507672840-2-2652x1510.webp" alt="Jenkins04"></p><blockquote><p>第四步：<code>jenkins</code> -&gt; 项目配置 -&gt; <code>General</code> 配置；</p></blockquote><p><img src="https://fengling68.github.io/imgbed/images/1602507672837-3-2584x1386.webp" alt="jenkins05"></p><blockquote><p>第五步：项目 -&gt; 立即构建 -&gt; 钉钉收到构建通知；</p></blockquote><p><img src="https://fengling68.github.io/imgbed/images/1602507672823-1-1316x910.webp" alt="jenkins06"></p>`,74))])}const I=i(d,[["render",L],["__file","云服务｜阿里云服务折腾记.html.vue"]]);export{I as default};

---
title: Surface使用体验与RD+frp搭建
date: 2023-09-27
category:
  - History
tag:
  - 生活
  - 环境
---
# Surface使用体验与RD+frp搭建

> surface go 4刚刚发售了，我有幸成为了中国前十个拥有surface go 4的用户😎

surface是微软的便携式设备的代表，是一部平板，但装着windows系统，后盖是磁吸式键盘，连上后就是一台笔记本电脑，网友喜欢叫他苏菲。

从百分之99的人的电脑用户来看，这明显是个智商税，配置低的可怜，没有风扇散热，尺寸又小，续航又差，这大概就是网上对苏菲的统一评价。

![image-20230927122440376](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230927122440376.png)

> 适用人群

我只有一台游戏本，并且是17寸的重量级外星人，充电器大小和电瓶车电瓶车差不多。每次都要跟乌龟一样驼着电脑去上课，而且续航撑不过30分钟，每次必须找一个有插座的位置坐。而且这台笔记本连接着一个双屏显示器，不方便来回拔插搬运。在多重困扰下，我就想着有没有一个轻便的能写代码、续航能坚持4节课的工具，可以带去上课和晚自习用呢？

在这之前我用过苹果的MAC，不得不说这是目前这个星球上最优秀的轻薄本了，某些遥遥领先的傻逼爱国党靠边站。MAC续航牛逼的离谱，性能也是丝毫不弱，唯一的缺点就是门槛高，对于程序员不如windows友好，即使是用Java、Python这类带虚拟机的语言，代码层面是没啥问题的，但是在一些第三方环境、中间件等配置上，MAC的操作方法会比Windows复杂很多，我亲眼见过好多用MAC的同学，用半天乃至两天的时间，都卡在环境上，而其他同学早早的部署好了环境进入了下一课了。所以MAC不推荐新手使用。而如果是win应用开发、又或是一些吃环境的逆向工作，MAC显然有些力不从心。

对于游戏党，设计党，AI训练、系统编译党，这些比较吃CPU的选手，千万不要买surface go，即使是配置高一些的surface pro，也很难满足需求，满足10寸的便携的同时，性能和续航的损失是必然的。所以这台电脑只适合你已经有了一台主力机的前提下，当做便携办公的附属品。

> 适用初体验

拿到手后，第一感觉就是苏菲系列的颜值真的很高，唯一让我担心的就是怕性能不够用。经过测试，只要适当的卸载掉windows自带的一些垃圾系统软件，其次只要不是那种能乱装出2345全家桶的小白用户，8GB的运行内存，基本上运行IDA是绰绰有余的，我用的是Visual Studio 2022，除了调试运行阶段CPU会满，其余普遍保持在10-20、50-60之间，IDEA之类的应该也差不多。

我会感觉到这个windows系统是特殊优化过的，拔掉键盘后输入模式会自动切换成软键盘，几乎是无感切换，键盘不是蓝牙连接而是磁吸的。而且内存和CPU很容易爆满，却不会像普通的笔记本一样出现明显的卡顿，这种感觉很明显，个人猜测是他本身空间就压榨小的缺点下对系统做了针对性的优化处理。

续航预测的话肯定是在4小时+的，比MAC差了八辈子远，但是毕竟人家是把windows塞进了平板里，这点缺点也是可以欣然接受的，充满电的情况下，上个课，上个晚自习，肯定是绰绰有余的。

> 远程连接

不仅运行内存小，硬盘也小，不能安装过多的软件，所以我打算只用surface来写一些C++代码，但是有些时候我需要写一些其他语言，或者一些吃配置的高消耗操作的时候，我仍需要使用主力电脑，所以就需要用surface来连接放在宿舍的游戏本，一开始考虑过向日葵或者Todesk，但是如果不开VIP，流畅度其实不是很好，这里推荐一个最好的解决方案，同样适用于使用IPAD+键盘来连接Windows。

RD（windows远程桌面服务）

![image-20230927140601961](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230927140601961.png)

可以使用Windows自带的远程桌面，只需要被控端开启权限就行了。然后打开附件里自带的远程桌面连接，输入被控端的系统的IP与账号和密码，就可以对其进行远程连接了。这样连接极其流畅，并且不会影响被控端主机双屏的排版布局，但是这种方案只适用于两个设备位于同一个局域网下，所以我们还要针对此方案进行优化。

RD+frp

不在同一个局域网下，ip是不能相互连接的，因为我们个人用的网络都是内网IP，只有公网IP才支持被其他IP所访问，所以这就是为什么建网站需要买服务器，因为服务器自带公网IP，不然的话我们把网站直接部署到自己电脑上，其他人就可以访问了，那服务器厂商还赚什么钱？

什么是frp？frp 是一种快速反向代理，允许您将位于 NAT 或防火墙后面的本地服务器暴露给 Internet。目前支持**TCP**和**UDP**，以及**HTTP**和**HTTPS**协议，可以将请求通过域名转发到内部服务。

于是我们便可以通过frp将服务器接收到的数据，转发给本机，这样一来，我们使用surface去连接服务器就可以了，服务器会将数据一一转发给被控端，就可以构建连接了。所以我们需要自备一台服务器，连接的效率也因服务器的网速而异。本人服务器很多，那么就随便拿一台4H8G5M来用吧🤣。

1.下载环境

https://github.com/fatedier/frp/releases/tag/v0.51.3

a.下载frp_0.51.3_linux_amd64.tar.gz 用于配置服务器端，具体下什么版本根据服务器自行来定

b.下载frp_0.51.3_windows_amd64.zip，用于配置本地windows电脑。放置在本地即可。(至于386和amd64的差别，可以知乎一下)

2.配置linux端

将linux端的压缩包导入服务器根目录

![](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230927144306627.png)

执行解压命令 sudo tar -zxvf frp_0.51.3_linux_amd64.tar.gz

![](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230927144334284.png)

进入目录，执行 vim frps.ini

修改该文件（frps.ini）内容为：

```shell
[common]
bind_addr = x.x.x.x
#云服务器内网ip,自己修改
bind_port = 7000
dashboard_port = 7500
#frp的web界面的端口号
auto_token = username
dashboard_user = xxxx
#web界面的登陆账户，自己修改
dashboard_pwd = xxxx
#web界面的登陆密码，自己修改
```

修改后，保存退出

执行命令进行启动

```shell
./frps -c ./frps.ini
```

![image-20230927144444612](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230927144444612.png)

3.接下来配置windows端

解压frp_0.51.3_windows_amd64.zip

修改frpc.ini内容为

```shell
[common]
server_addr = x.x.x.x
#服务器公网ip
server_port = 7000
auto_token = username

[username]
type = tcp
local_ip = 127.0.0.1
local_port = 3389
remote_port = 3389
```

执行：

```shell
.\frpc.exe -c frpc.ini
```

4.最后别忘了放行服务器安全组7000、7500、3389端口

![image-20230927150332321](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230927150332321.png)

控制面板此时已经显示了代理主机的信息

此时直接用Surface使用RD连接服务器ip:3389就可以了

最后附一张图片，纪念苏菲加入我的设备大家庭（MAC被我卖掉了）![image-20230927151559650](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230927151559650.png)
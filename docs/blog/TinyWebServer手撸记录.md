---
title: TinyWebServer手撸记录
date: 2023-10-18
category:
  - History
tag:
  - C++
  - 服务器
  - 后端
  - 高并发
---
# TinyWebServer手撸记录

## 前言

依稀记得上次0基础手撸项目是在3年前，当时在0基础手撸vue，一个视频教程没看的情况下，一口气写出了一个几万行的前后端项目，并且实现了几个W的盈利，尽管现在回想起来那时候代码质量不高。

前不久在手撸c++的webserver，先后看了牛客的Linux服务器编程的视频，以及《TCP/IP网络编程》、《Linux高性能服务器编程》这两本书，加上先前在易道云的网络编程基础，算是在服务器编程方向入了门。

总结下来，C++的难度绝非任何一门语言可以相提并论，没有基础的情况下硬撸是行不通的。反观烂大街的Java和web，门槛低难度小，网课视频多，拉条狗都能学会。当然难度再低的领域，学精了也会有不可企及的大山存在。但是当下而言，学Java的大学生们似乎思维已经被禁锢在了JVM里，并且天真的认为编程就是写接口，对除了Spring外编程能做的事情一无所知，甚至连一个有实际功能性的项目都没写过，再加上如今前后端的就业环境差至冰点，显然这类大学生已经无法赢得尊重。

学习过程中取得实质性帮助的文章：

https://blog.csdn.net/lepaitianshi/article/details/133035990

https://blog.csdn.net/m0_51551385/article/details/124359780

https://blog.csdn.net/XZbnhh/article/details/120689278

https://blog.csdn.net/qq_15054345/article/details/125368426

https://blog.csdn.net/weixin_60338047/article/details/130857596

## 学习路线

因为没人带，我也算是走了很多弯路，后续自己整理了下最快的学习路径，可以参考下：

首先必须下功夫先熟读《TCP/IP网络编程》，理解epoll的用法，同时熟悉EPOLLONESHOT、SO_REUSEADDR(WAIT_TIME)、EPOLLONESHOT等网络编程常用参数的作用。

熟知边缘触发、条件触发的区别。

其次要会手写链表、多线程。

了解信号、定时器、管道通信等机制。

懂一丢丢的mysql。

几乎所有应届C++ Linux服务器程序员面试里，简历里都会写WebServer项目，TinyWebServer这个项目确实是极其优秀与精简，涵盖了Linux服务器编程常用的所有内容，所以是必学的。

所以我们掌握以上的技术后，就要尝试运行tinywebserver并分模块阅读，直至理清每一行代码的作用，并能独立仿写出自己的webserver就算是大功告成了。这个过程可能会持续好几天甚至好几周，不要心急，期间可以带着翻阅《Linux高性能服务器编程》，遇到问题最好有个大佬或者前辈可以请教，那样能少走很多弯路。

## 运行TinyWebServer

运行TinyWebServer大概率会踩坑，并且发现网络上并没有任何一篇文章是完整解决问题的，我记录了下解决方案：

这里以Ubuntu为例，TinyWebServer需要mysql环境

> 安装mysql

sudo apt install mysql-server

> 启动mysql

sudo service mysql start

> 设置mysql的root用户及密码

sudo mysql -uroot -p

```mysql
use mysql;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
```

> 设置远程访问root

```mysql
UPDATE user SET `Host` = '%' WHERE `User` = 'root' LIMIT 1;
flush privileges;
exit;
```

sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf

在bind-address = 127.0.0.1前面加#

> 重启mysql

service mysql restart

> 添加mysql安全组

此时我们要尝试使用Navicat(随便)连接数据库，如果连接不上，大概率是防火墙出了问题，我们要开放3306端口。

```shell
添加端口： firewall-cmd --zone=public --add-port=3306/tcp --permanent
重启防火墙： firewall-cmd --reload；
```

如果没有提示没有firewall，则使用指令进行安装后再尝试关闭防火墙

sudo apt install firewalld

> 添加数据库及表数据

随后执行sql命令

```mysql
create database yourdb;

USE yourdb;
CREATE TABLE user(
    username char(50) NULL,
    passwd char(50) NULL
)ENGINE=InnoDB;

INSERT INTO user(username, passwd) VALUES('name', 'passwd');
```

保证数据库能连接上的情况下再进行下一步操作，否则项目即使跑起来也是白吊搭。

> 添加server安全组

项目本身也需要9006端口，于是开放一下9006端口

```shell
添加端口： firewall-cmd --zone=public --add-port=9006/tcp --permanent
重启防火墙： firewall-cmd --reload；
```

> 配置cpp

打开main.cpp并且填入mysql参数。

![image-20231018184850380](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20231018184850380.png)

> 安装依赖

此时我们就配置好了需要的环境，随后我们尝试make项目，发现找不到<mysql/mysql.h>

![image-20231018180919458](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20231018180919458.png)

解决方法:sudo apt-get install libmysqlclient-dev

> 运行

再次make

运行./server

此时用浏览器打开ip:9006即可正常访问了。



期间如果配置出错，自己都搞晕了的话，那就彻底卸载mysql再重新操作。

1. 停止Mysql服务

   sudo systemctl stop mysql

2. 卸载Mysql服务器

   sudo apt remove --purge mysql-server

3. 卸载Mysql共享库

   sudo apt remove --purge mysql-common

4. 删除MYSQL配置文件和数据目录

   sudo rm -rf /etc/mysql /var/lib/mysql

## 下一步学习计划

我将深入学习安卓手游逆向，将已学的安卓Java层、so层逆向技术、C++、Linux编程进行结合，在编程中逆向，在逆向中提升编程。


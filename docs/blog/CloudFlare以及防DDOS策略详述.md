---
title: CloudFlare以及防DDOS策略详述
date: 2023-09-08
category:
  - History
tag:
  - 网页
  - 安全
  - 教程
---
# CloudFlare以及防DDOS策略详述

## 开篇

> 文章前言与应用场景

国内任何服务器，不管大厂还是小厂，无论腾讯云还是杂牌云，只要面临DDOS攻击，一定是秒死。

即便是使用赫赫有名的高防服务器，除非预算十分充裕，不然也是会被上百千G的攻击所攻破。

DDOS需要拿到服务器IP，并对IP进行大量的洪水访问，以达到恶意流量超过阈值，服务器厂商会自动关停你的服务器。

所以很多人会使用CDN来达到隐藏真实IP的效果，但是中国的防御成本远远大于攻击成本。

所以本篇文章推荐一篇最低成本，无人可以攻击死的一种安全策略。

> 说明：

本篇思路来源于本人师傅教导，是被无数个同行和恶狗DDOS数十次，多年来CC和DDOS防御的项目经验，网上关于这类的文章几乎为0，我决定详细记录一下，技术无价、仅供参考。

## 知识了解

> 先了解几个理论知识

### DNS服务器

DNS服务器主要用作域名访问时，对域名对应的ip进行查找并访问，因此总结DNS服务器作用为解析域名。

### CDN

cdn等于为ip与DNS解析之间，加入了一个第三方的ip做流量中转，于是就实现了隐藏自己真实IP的目的，DDOS攻击到的也只能是CDN提供的IP了。因此，使用CDN的前提是服务器必须有域名。

CDN运行流程大概如下：

1. DNS请求当地local DNS
2. 当地local DNS递归地查询服务器的gslb
3. 服务器根据local DNS 分配最佳节点，返回IP
4. 用户获得最佳接入IP，访问最佳节点。
5. 如果该节点没有用户想要获取的内容，则通过内部路由访问上一节点，直到找到文件或到达源站为止。
6. CDN节点缓存该数据，下次请求该文件可以直接返回。

## 准备工作

先说结论，因为国内的CDN或高防服务器成本过高，我们可以采用国外CDN的方式，因为国外的CDN是免费的，且无限防御DDOS！

使用国外CDN也就需要使用国外的服务器，所以我们可以买任意一个香港、洛杉矶等地区的国外服务器。而CDN我们选用鼎鼎大名的CloudFlare，很多知名公司都在使用CloudFlare进行防御。域名也可以随便买一个，因为是国外服务器，解析到服务器上无需备案（国内买域名备案较为麻烦！）

本篇文章以腾讯云为例，域名和服务器均买自腾讯云。

## 开始搭建

### 添加站点

![image-20230908010753073](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230908010753073.png)

然后选择免费的服务，购买即可

### 替换DNS

![image-20230908010936357](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230908010936357.png)

按照CloudFlare所提示的，去腾讯云域名管理页面替换DNS为

```
felicity.ns.cloudflare.com
nicole.ns.cloudflare.com
```

![image-20230908011109499](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230908011109499.png)

随后返回CloudFlare，开始检查DNS即可

![image-20230908011212181](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230908011212181.png)

我们只需静待几分钟-几小时，等待CloudFlare发邮件提醒我们已经检查DNS成功了就可以了。

此时此刻，我们的域名已经和CloudFlare对接上了，所有访问域名的请求，都会由CloudFlare进行中转，我们再给CloudFlare配置上A记录以访问真实的服务器ip，即可完全实现流量中转。

![image-20230908011859265](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230908011859265.png)

### 测试访问

此时给服务器上传网页文件即可实现访问了

![image-20230908012016410](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230908012016410.png)

## 问题改进

经过以上操作，我们已经实现了CloudFlare与域名之间的相互解析，但是仍存在一些问题。

1、部分地区会对http域名进行安全策略拦截

2、一些高手仍能通过暴力手段来遍历出我们的真实IP，

3、CloudFlare提供的默认IP线路过于卡顿，不便于国内用户使用

所以我们要逐一解决他们

一、首先我们要在CloudFlare开启强制https，解决安全策略问题。

二、其次，我们要在Nginx中配置IP白名单，只允许CloudFlare官方的ip源进行访问

ip源获取地址：https://www.cloudflare.com/ips-v4

```ini
allow 173.245.48.0/20;
allow 103.21.244.0/22;
allow 103.22.200.0/22;
allow 103.31.4.0/22;
allow 141.101.64.0/18;
allow 108.162.192.0/18;
allow 190.93.240.0/20;
allow 188.114.96.0/20;
allow 197.234.240.0/22;
allow 198.41.128.0/17;
allow 162.158.0.0/15;
allow 104.16.0.0/13;
allow 104.24.0.0/14;
allow 172.64.0.0/13;
allow 131.0.72.0/22;
deny all;
```

三、我们要将腾讯云的DNS解析换回腾讯云自己的，并使用第三方优选节点进行解析回CloudFlare，这样国内用户访问速度就可以大大提高了。

![image-20230908013534872](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230908013534872.png)



国内优选线路：cf.13d7s.site

国外优选线路：域名+cf.13d7s.site

分别添加电信，移动，联通，和默认的优选线路，即可实现国内的优化以及国外的解析了。

![image-20230908013808855](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230908013808855.png)

## 总结

经过以上的操作，我们的网站几乎就是不会被打死了。

当然前提是所有对后端接口的调用，都要通过域名访问，同时配置Nginx转发来实现隐藏IP，不能给任何暴露真实IP的机会。

如果还想更完美的话，听臣一计：

我们可以将所有CRUD等操作放入国外服务器中，即使国外服务器死了，我们也可以快速另起一个服务器进行使用，并且不会保证数据丢失和功能受影响。

并且建立一个centerserver服务端放在国内做数据中转和核心功能运转，与国外带CloudFlare保护的服务器进行通信，数据库我们可以采用云数据库由第三方托管或者放入国内服务器。

与此同时，国外服务器尽管有了节点优选，部分地区例如河南，对于这方面IP限制也是极其严格，少量用户仍然存在打不开的情况下，大多数用户仍存在能访问但是网速较慢的情况。

于是我们便可以再买一台国内的服务器作为主用CRUD，将CloudFlare的域名302跳转到国内服务器，平时让用户一直使用国内的服务器作为信息交互，该国内服务器ip可以完全裸露，待国内服务器被打死的时候，我们只需要几秒钟关闭302，让CRUD服务器回归国外服务器，丝毫不会影响用户使用，核心功能都在CenterServer端，不会受任何影响。我们只需要趁着这段时间等待国内服务器复活，重新开启302即可。

但是没有十全的策略，既然选择了国外的0成本无限防御，就要承担中国长城防火墙带来的限速缺陷，如果有钱的话或者是项目比较正规公司，对用户体验感刚需，还是尽量直接买中国的物理机高防，一个月几千到几万不等。

对中Guo的某些政策一言难尽，希望有一天实现全民Vpn，让所有人突破这网络形式的闭关锁国，也不至于有现在如此多极端爱国主义，一叶障目的脑残行为出现。
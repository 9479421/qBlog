export const redirects = JSON.parse("{\"/blog/C++实现微信自动跳一跳.html\":\"/blog/C__%E5%AE%9E%E7%8E%B0%E5%BE%AE%E4%BF%A1%E8%87%AA%E5%8A%A8%E8%B7%B3%E4%B8%80%E8%B7%B3.html\",\"/blog/C++实现微信自动跳一跳.md\":\"/blog/C__%E5%AE%9E%E7%8E%B0%E5%BE%AE%E4%BF%A1%E8%87%AA%E5%8A%A8%E8%B7%B3%E4%B8%80%E8%B7%B3.html\",\"/blog/C++调用JS代码.html\":\"/blog/C__%E8%B0%83%E7%94%A8JS%E4%BB%A3%E7%A0%81.html\",\"/blog/C++调用JS代码.md\":\"/blog/C__%E8%B0%83%E7%94%A8JS%E4%BB%A3%E7%A0%81.html\",\"/view/note/C++/Linux服务器编程.html\":\"/view/note/C__/Linux%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%BC%96%E7%A8%8B.html\",\"/view/note/C++/Linux服务器编程.md\":\"/view/note/C__/Linux%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%BC%96%E7%A8%8B.html\",\"/view/note/C++/VS修改编码格式为UTF-8.html\":\"/view/note/C__/VS%E4%BF%AE%E6%94%B9%E7%BC%96%E7%A0%81%E6%A0%BC%E5%BC%8F%E4%B8%BAUTF-8.html\",\"/view/note/C++/VS修改编码格式为UTF-8.md\":\"/view/note/C__/VS%E4%BF%AE%E6%94%B9%E7%BC%96%E7%A0%81%E6%A0%BC%E5%BC%8F%E4%B8%BAUTF-8.html\",\"/view/note/C++/vs未能正确加载XX包的解决方法.html\":\"/view/note/C__/vs%E6%9C%AA%E8%83%BD%E6%AD%A3%E7%A1%AE%E5%8A%A0%E8%BD%BDXX%E5%8C%85%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95.html\",\"/view/note/C++/vs未能正确加载XX包的解决方法.md\":\"/view/note/C__/vs%E6%9C%AA%E8%83%BD%E6%AD%A3%E7%A1%AE%E5%8A%A0%E8%BD%BDXX%E5%8C%85%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95.html\",\"/view/note/C++/易道云学习笔记.html\":\"/view/note/C__/%E6%98%93%E9%81%93%E4%BA%91%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html\",\"/view/note/C++/易道云学习笔记.md\":\"/view/note/C__/%E6%98%93%E9%81%93%E4%BA%91%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html\"}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/blog/C__%E5%AE%9E%E7%8E%B0%E5%BE%AE%E4%BF%A1%E8%87%AA%E5%8A%A8%E8%B7%B3%E4%B8%80%E8%B7%B3.html", { loader: () => import(/* webpackChunkName: "C__实现微信自动跳一跳.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/C__实现微信自动跳一跳.html.js"), meta: {"_blog":{"title":"C++实现微信自动跳一跳","date":"2023-05-30T00:00:00.000Z","category":["History"],"tag":["逆向","外挂","C++"],"excerpt":"\n<h2>技术概要</h2>\n<p>先介绍下写这个项目要用到的一些技术</p>\n<ol>\n<li>MFC技术(用来构建窗口)</li>\n<li>简单的win32窗口绘制</li>\n<li>基本的ADB安卓调试命令(用来操作手机)</li>\n</ol>\n<p>MFC可以替换成QT或者win32窗口构建，根据个人喜好来</p>\n<h2>思路分析</h2>\n<p>首先通过adb截取手机屏幕的图片至电脑储存</p>\n<p><img src=\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230530235236943.png\" alt=\"image-20230530235236943\"></p>"},"title":"C++实现微信自动跳一跳"} }],
  ["/blog/C__%E8%B0%83%E7%94%A8JS%E4%BB%A3%E7%A0%81.html", { loader: () => import(/* webpackChunkName: "C__调用JS代码.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/C__调用JS代码.html.js"), meta: {"_blog":{"title":"C++调用Js代码","date":"2023-11-11T00:00:00.000Z","category":["History"],"tag":["C++","js","编程","逆向","易语言"],"excerpt":"\n<h2>引言</h2>\n<p>C/C++调用js代码，据我了解如今跨平台解决方案中，最强大的应该是V8库，不过这个东西使用起来较为复杂，另一方面我技术比较菜，实在是没研究明白怎么用。随后找遍全网发现C++调用Js的相关文章与库几乎为0，于是想起了玩易语言时常用的精易模块自带的js执行功能，我只要用同等的解决方案不就可以了么？</p>\n<p>赶忙下载了一波精易模块源码，直入主题。</p>\n<p><img src=\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20231111022601808.png\" alt=\"image-20231111022601808\"></p>"},"title":"C++调用Js代码"} }],
  ["/blog/CloudFlare%E4%BB%A5%E5%8F%8A%E9%98%B2DDOS%E7%AD%96%E7%95%A5%E8%AF%A6%E8%BF%B0.html", { loader: () => import(/* webpackChunkName: "CloudFlare以及防DDOS策略详述.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/CloudFlare以及防DDOS策略详述.html.js"), meta: {"_blog":{"title":"CloudFlare以及防DDOS策略详述","date":"2023-09-08T00:00:00.000Z","category":["History"],"tag":["网页","安全","教程"],"excerpt":"\n<h2>开篇</h2>\n<blockquote>\n<p>文章前言与应用场景</p>\n</blockquote>\n<p>国内任何服务器，不管大厂还是小厂，无论腾讯云还是杂牌云，只要面临DDOS攻击，一定是秒死。</p>\n<p>即便是使用赫赫有名的高防服务器，除非预算十分充裕，不然也是会被上百千G的攻击所攻破。</p>\n<p>DDOS需要拿到服务器IP，并对IP进行大量的洪水访问，以达到恶意流量超过阈值，服务器厂商会自动关停你的服务器。</p>\n<p>所以很多人会使用CDN来达到隐藏真实IP的效果，但是中国的防御成本远远大于攻击成本。</p>\n<p>所以本篇文章推荐一篇最低成本，无人可以攻击死的一种安全策略。</p>"},"title":"CloudFlare以及防DDOS策略详述"} }],
  ["/blog/Surface%E4%BD%BF%E7%94%A8%E4%BD%93%E9%AA%8C%E4%B8%8ERD%E2%9C%99frp%E6%90%AD%E5%BB%BA.html", { loader: () => import(/* webpackChunkName: "Surface使用体验与RD✙frp搭建.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/Surface使用体验与RD✙frp搭建.html.js"), meta: {"_blog":{"title":"Surface使用体验与RD✙frp搭建","date":"2023-09-27T00:00:00.000Z","category":["History"],"tag":["生活","环境"],"excerpt":"\n<blockquote>\n<p>surface go 4刚刚发售了，我有幸成为了中国前十个拥有surface go 4的用户😎</p>\n</blockquote>\n<p>surface是微软的便携式设备的代表，是一部平板，但装着windows系统，后盖是磁吸式键盘，连上后就是一台笔记本电脑，网友喜欢叫他苏菲。</p>\n<p>从百分之99的人的电脑用户来看，这明显是个智商税，配置低的可怜，没有风扇散热，尺寸又小，续航又差，这大概就是网上对苏菲的统一评价。</p>\n<p><img src=\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230927122440376.png\" alt=\"image-20230927122440376\"></p>"},"title":"Surface使用体验与RD✙frp搭建"} }],
  ["/blog/TinyWebServer%E6%89%8B%E6%92%B8%E8%AE%B0%E5%BD%95.html", { loader: () => import(/* webpackChunkName: "TinyWebServer手撸记录.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/TinyWebServer手撸记录.html.js"), meta: {"_blog":{"title":"TinyWebServer手撸记录","date":"2023-10-18T00:00:00.000Z","category":["History"],"tag":["C++","服务器","后端","高并发"],"excerpt":"\n<h2>前言</h2>\n<p>依稀记得上次0基础手撸项目是在3年前，当时在0基础手撸vue，一个视频教程没看的情况下，一口气写出了一个几万行的前后端项目，并且实现了几个W的盈利，尽管现在回想起来那时候代码质量不高。</p>\n<p>前不久在手撸c++的webserver，先后看了牛客的Linux服务器编程的视频，以及《TCP/IP网络编程》、《Linux高性能服务器编程》这两本书，加上先前在易道云的网络编程基础，算是在服务器编程方向入了门。</p>\n<p>总结下来，C++的难度绝非任何一门语言可以相提并论，没有基础的情况下硬撸是行不通的。反观烂大街的Java和web，门槛低难度小，网课视频多，拉条狗都能学会。当然难度再低的领域，学精了也会有不可企及的大山存在。但是当下而言，学Java的大学生们似乎思维已经被禁锢在了JVM里，并且天真的认为编程就是写接口，对除了Spring外编程能做的事情一无所知，甚至连一个有实际功能性的项目都没写过，再加上如今前后端的就业环境差至冰点，显然这类大学生已经无法赢得尊重。</p>"},"title":"TinyWebServer手撸记录"} }],
  ["/blog/X%E8%81%8C%E9%80%9AAPP%E7%AE%97%E6%B3%95%E7%A0%B4%E8%A7%A3%E8%AE%B0%E5%BD%95.html", { loader: () => import(/* webpackChunkName: "X职通APP算法破解记录.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/X职通APP算法破解记录.html.js"), meta: {"_blog":{"title":"X职通APP算法破解记录","date":"2023-07-21T00:00:00.000Z","category":["History"],"tag":["爬虫","安卓","逆向","抓包"],"excerpt":"\n<blockquote>\n<p>前言：这个App是用Uniapp写的，逆向破解过程不同于原生App</p>\n</blockquote>\n<h2>思路分析</h2>\n<h3>1.查壳</h3>\n<p>首先拿到APP的第一件事就是先用PKID查壳，发现没有加固。</p>\n<p><img src=\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230721162751268.png\" alt=\"image-20230721162751268\"></p>\n<h3>2.抓包</h3>\n<p>可以用小黄鸟，如果有证书检测就加一步JustTrustMe。我测试过没有抓包检测，这里就用Charles+SocksDroid了。</p>"},"title":"X职通APP算法破解记录"} }],
  ["/blog/%E5%86%85%E5%B1%82CALL%E8%BF%BD%E5%B1%80%E9%83%A8%E5%8F%98%E9%87%8F.html", { loader: () => import(/* webpackChunkName: "内层CALL追局部变量.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/内层CALL追局部变量.html.js"), meta: {"_blog":{"title":"内层CALL追局部变量","date":"2024-02-26T00:00:00.000Z","category":["History"],"tag":["逆向","windows","汇编"],"excerpt":"\n<h2>查找数据</h2>\n<blockquote>\n<p>首先查找血量地址</p>\n</blockquote>\n<p><img src=\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240226203201185.png\" alt=\"image-20240226203201185\"></p>\n<h2>追踪数据</h2>\n<p>在OD里面dd血量地址，随后下硬件访问断点</p>\n<p><img src=\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240226203859746.png\" alt=\"image-20240226203859746\"></p>"},"title":"内层CALL追局部变量"} }],
  ["/blog/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E9%80%86%E5%90%91%E6%95%99%E7%A8%8B.html", { loader: () => import(/* webpackChunkName: "微信小程序逆向教程.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/微信小程序逆向教程.html.js"), meta: {"_blog":{"title":"微信小程序逆向教程","date":"2023-09-04T00:00:00.000Z","category":["History"],"tag":["教程","逆向","web","小程序"],"excerpt":"\n<p>这里简单谈谈我对小程序逆向不同于网页逆向和APP逆向的理解。</p>\n<p>小程序本质上就是H5网页，微信本身就是个改版的浏览器，微信内嵌了一些官方API供小程序调用，所以抓包方法几乎一样。</p>\n<p>但是微信自身做了一些VPN检测，所以常用的Httpcanary方法，能用是能用，但是不太好用。</p>\n<p>这里我个人常用的2种方法</p>\n<p>1.使用SockDroid+Charles</p>\n<p>2.使用电脑版的微信打开小程序，然后用Fiddler抓包（推荐）</p>\n<h2>抓包</h2>\n<p><img src=\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230825110159024.png\" alt=\"image-20230825110159024\"></p>"},"title":"微信小程序逆向教程"} }],
  ["/blog/%E6%89%8B%E6%9C%BA%E6%B5%8F%E8%A7%88%E5%99%A8%E8%B0%83%E8%AF%95%E6%96%B9%E6%B3%95.html", { loader: () => import(/* webpackChunkName: "手机浏览器调试方法.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/手机浏览器调试方法.html.js"), meta: {"_blog":{"title":"手机浏览器调试方法","date":"2023-05-31T00:00:00.000Z","category":["History"],"tag":["逆向","web","js","教程"],"excerpt":"\n<p>目前几乎所有的浏览器都是使用的统一的Chromium内核，但是在Web2.0时代的推动下，各大浏览器厂商对移动端的适配兼容貌似还是存在微小的出入。</p>\n<p>这就产生了一个很操蛋的问题，会导致你写的程序在大部分浏览器中运行都正常，但是可能到了某个其他的浏览器就会出现BUG。</p>\n<p>如我写的这个博客项目便出现了类似的情况，如下图所示，从左到右依次是：电脑chrome浏览器，手机QQ自带浏览器，手机微信自带浏览器，手机vivo浏览器，全部显示正常。</p>\n<p><img src=\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230531202610608.png\" alt=\"image-20230531202610608\"></p>"},"title":"手机浏览器调试方法"} }],
  ["/blog/%E6%9C%80%E4%BD%8E%E6%88%90%E6%9C%AC%E7%9A%84%E6%96%B9%E5%BC%8F%E6%90%AD%E5%BB%BAChatGpt%E6%8E%A5%E5%8F%A3.html", { loader: () => import(/* webpackChunkName: "最低成本的方式搭建ChatGpt接口.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/最低成本的方式搭建ChatGpt接口.html.js"), meta: {"_blog":{"title":"最低成本的方式搭建ChatGpt接口","date":"2023-05-03T00:00:00.000Z","category":["History"],"tag":["后端","nodejs","js"],"excerpt":"\n<blockquote>\n<p>2023-11-02补充：如今国内的文心一言等AI模型已经公开并且盛行，已经可以在国内直接调用了，没必要像下文那样去使用chatgpt了，本文旨在提供调用外网正版chatgpt接口的思路。</p>\n</blockquote>\n<p>首先我们先要通过挂梯子(翻墙)访问到openai官网，然后拿到自己调用接口的key，此步直接省略。</p>\n<p>假设你的key为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（请勿泄露给别人）</p>\n<h2>初次试错</h2>\n<p>接下来我们就要对需求进行分析，因为接口必须翻墙才可以访问，所以按照大家惯性思维去搭建这个后端接口的话，都是采用任一编程语言实现一段http接口操作，然后运行到服务器上后，并且给服务器挂上梯子，再通过前端对这个接口进行访问。</p>"},"title":"最低成本的方式搭建ChatGpt接口"} }],
  ["/blog/%E6%9F%90%E4%BB%98%E8%B4%B9%E6%96%87%E6%A1%A3%E7%BD%91%E7%A0%B4%E8%A7%A3%E8%AE%B0%E5%BD%95.html", { loader: () => import(/* webpackChunkName: "某付费文档网破解记录.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/某付费文档网破解记录.html.js"), meta: {"_blog":{"title":"某付费文档网破解记录","date":"2023-05-17T00:00:00.000Z","category":["History"],"tag":["js","逆向","web"],"excerpt":"\n<p>今日闲来无事准备搜一下金陵科技学院的宿舍环境，结果点开了这个名叫高考升学网的破网站，复制下文字居然还要收费4.99元。</p>\n<p><img src=\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230517182101672.png\" alt=\"image-20230517182101672\"></p>\n<p>我真你妈纳了闷了，就想着坑我们这些穷学生钱是吧，这玩意你也好意思收费，你这堆傻逼文章我看比诺贝尔奖论文还值钱。</p>\n<p>先分析原理，这类扫码支付一般有两种方式。</p>\n<blockquote>\n<p>第一种：WebSocket协议</p>\n</blockquote>"},"title":"某付费文档网破解记录"} }],
  ["/blog/%E6%A0%88%E6%BA%A2%E5%87%BA%E6%BC%8F%E6%B4%9E%E5%88%86%E6%9E%90.html", { loader: () => import(/* webpackChunkName: "栈溢出漏洞分析.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/栈溢出漏洞分析.html.js"), meta: {"_blog":{"title":"栈溢出漏洞分析","date":"2023-09-17T00:00:00.000Z","category":["History"],"tag":["逆向","windows","汇编"],"excerpt":"\n<blockquote>\n<p>本章题目取自于易道云C++学院的一道安全题目-黑兔秃驴骑士</p>\n</blockquote>\n<p>先上题目代码：</p>\n<div class=\"language-c\" data-ext=\"c\" data-title=\"c\"><pre class=\"language-c\"><code><span class=\"token macro property\"><span class=\"token directive-hash\">#</span><span class=\"token directive keyword\">include</span> <span class=\"token string\">&lt;iostream&gt;</span></span>\n<span class=\"token macro property\"><span class=\"token directive-hash\">#</span><span class=\"token directive keyword\">include</span> <span class=\"token string\">&lt;iomanip&gt;</span></span>\n<span class=\"token keyword\">void</span> <span class=\"token function\">Hack</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">unsigned</span> <span class=\"token keyword\">long</span> <span class=\"token keyword\">long</span> x <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">int</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> true<span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span>\n    <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>i <span class=\"token operator\">%</span> <span class=\"token number\">100000000</span> <span class=\"token operator\">==</span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span>\n        <span class=\"token punctuation\">{</span>\n            <span class=\"token function\">system</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"cls\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n            std<span class=\"token operator\">::</span>cout <span class=\"token operator\">&lt;&lt;</span> <span class=\"token string\">\"\\n■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■\\n\"</span><span class=\"token punctuation\">;</span>\n            std<span class=\"token operator\">::</span>cout <span class=\"token operator\">&lt;&lt;</span> <span class=\"token string\">\"\\n 你的系统已经被我们拿下! hacked by 黑兔档案局:[ID:000001 ]\\n\"</span><span class=\"token punctuation\">;</span>\n            std<span class=\"token operator\">::</span>cout <span class=\"token operator\">&lt;&lt;</span> <span class=\"token string\">\"\\n              加群:868267304 解除\\n\"</span><span class=\"token punctuation\">;</span>\n            std<span class=\"token operator\">::</span>cout <span class=\"token operator\">&lt;&lt;</span> <span class=\"token string\">\"\\n\\\\&gt;正在传输硬盘数据....已经传输\"</span> <span class=\"token operator\">&lt;&lt;</span> x<span class=\"token operator\">++</span> <span class=\"token operator\">&lt;&lt;</span> <span class=\"token string\">\"个文件......\\n\\n\"</span><span class=\"token punctuation\">;</span>\n\n            std<span class=\"token operator\">::</span>cout <span class=\"token operator\">&lt;&lt;</span> std<span class=\"token operator\">::</span><span class=\"token function\">setfill</span><span class=\"token punctuation\">(</span><span class=\"token char\">'&gt;'</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">&lt;&lt;</span> std<span class=\"token operator\">::</span><span class=\"token function\">setw</span><span class=\"token punctuation\">(</span>x <span class=\"token operator\">%</span> <span class=\"token number\">60</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">&lt;&lt;</span> <span class=\"token string\">\"\\n\"</span><span class=\"token punctuation\">;</span>\n\n            std<span class=\"token operator\">::</span>cout <span class=\"token operator\">&lt;&lt;</span> <span class=\"token string\">\"\\n\\\\&gt;摄像头已启动!&lt;==============\\n\\n\"</span><span class=\"token punctuation\">;</span>\n\n            std<span class=\"token operator\">::</span>cout <span class=\"token operator\">&lt;&lt;</span> std<span class=\"token operator\">::</span><span class=\"token function\">setfill</span><span class=\"token punctuation\">(</span><span class=\"token char\">'#'</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">&lt;&lt;</span> std<span class=\"token operator\">::</span><span class=\"token function\">setw</span><span class=\"token punctuation\">(</span>x <span class=\"token operator\">%</span> <span class=\"token number\">60</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">&lt;&lt;</span> <span class=\"token string\">\"\\n\"</span><span class=\"token punctuation\">;</span>\n\n            std<span class=\"token operator\">::</span>cout <span class=\"token operator\">&lt;&lt;</span> <span class=\"token string\">\"\\n\\\\&gt;数据传输完成后将启动自毁程序!CPU将会温度提升到200摄氏度\\n\"</span><span class=\"token punctuation\">;</span>\n\n            std<span class=\"token operator\">::</span>cout <span class=\"token operator\">&lt;&lt;</span> <span class=\"token string\">\"\\n■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■\\n\"</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">int</span> <span class=\"token function\">GetAge</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">int</span> rt<span class=\"token punctuation\">;</span>\n    std<span class=\"token operator\">::</span>cout <span class=\"token operator\">&lt;&lt;</span> <span class=\"token string\">\"请输入学员的年龄:\"</span><span class=\"token punctuation\">;</span>\n    std<span class=\"token operator\">::</span>cin <span class=\"token operator\">&gt;&gt;</span> rt<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> rt<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">int</span> <span class=\"token function\">count</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">int</span> i<span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">int</span> total<span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">int</span> age<span class=\"token punctuation\">[</span><span class=\"token number\">10</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">do</span>\n    <span class=\"token punctuation\">{</span>\n        age<span class=\"token punctuation\">[</span>i<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> <span class=\"token function\">GetAge</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        total <span class=\"token operator\">+=</span> age<span class=\"token punctuation\">[</span>i<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n        <span class=\"token comment\">//将AGE[I]保存到数据库中</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">while</span> <span class=\"token punctuation\">(</span>age<span class=\"token punctuation\">[</span>i<span class=\"token operator\">++</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> total<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">int</span> <span class=\"token function\">main</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">{</span>\n    std<span class=\"token operator\">::</span>cout <span class=\"token operator\">&lt;&lt;</span> <span class=\"token string\">\"======= 驴百万学院 学员总年龄统计计算系统 =====\\n\"</span><span class=\"token punctuation\">;</span>\n    std<span class=\"token operator\">::</span>cout <span class=\"token operator\">&lt;&lt;</span> <span class=\"token string\">\"\\n                API:\"</span> <span class=\"token operator\">&lt;&lt;</span> Hack <span class=\"token operator\">&lt;&lt;</span> std<span class=\"token operator\">::</span>endl<span class=\"token punctuation\">;</span>\n    std<span class=\"token operator\">::</span>cout <span class=\"token operator\">&lt;&lt;</span> <span class=\"token string\">\"\\n[说明:最多输入10个学员的信息,当输入0时代表输入结束]\\n\\n\"</span><span class=\"token punctuation\">;</span>\n    std<span class=\"token operator\">::</span>cout <span class=\"token operator\">&lt;&lt;</span> <span class=\"token string\">\"\\n驴百万学院的学员总年龄为:\"</span> <span class=\"token operator\">&lt;&lt;</span> <span class=\"token function\">count</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre></div>"},"title":"栈溢出漏洞分析"} }],
  ["/blog/%E7%BD%91%E6%B8%B8%E5%96%8A%E8%AF%9D%E5%8A%A0%E5%AF%86Call%E5%88%86%E6%9E%90.html", { loader: () => import(/* webpackChunkName: "网游喊话加密Call分析.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/网游喊话加密Call分析.html.js"), meta: {"_blog":{"title":"网游喊话加密Call分析","date":"2024-02-12T00:00:00.000Z","category":["History"],"tag":["C++","逆向","windows","汇编","tcp"],"excerpt":"\n<blockquote>\n<p>思路整理</p>\n</blockquote>\n<p>网游喊话的原理就是向服务器发送了数据，网游与服务器通信数据都是使用tcp协议，而windows中发送tcp数据的API函数有send，sendto，WSASend，所以对此三个函数进行下断点。</p>\n<p>结果在WSASend函数处断了下来，说明该游戏使用的是WSASend来封装的发送数据函数。</p>\n<p><img src=\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240212092957837.png\" alt=\"image-20240212092957837\"></p>\n<p>通过观察堆栈变化可以猜出是线程发包，说明有一个线程负责从某个地址循环读取数据，当有数据的时候就会自动采取发包。而游戏主线程则只需要在执行操作的时候把数据写入至某个地址即可。而我们此时断下的位置就是线程内部，我们需要对封包数据进行追踪到静态地址，再对地址进行硬件写入断点，就可以追踪到线程外的操作地址了。</p>\n"},"title":"网游喊话加密Call分析"} }],
  ["/blog/%E7%BD%91%E6%B8%B8%E9%93%BE%E8%A1%A8%E6%95%B0%E6%8D%AE%E9%81%8D%E5%8E%86.html", { loader: () => import(/* webpackChunkName: "网游链表数据遍历.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/网游链表数据遍历.html.js"), meta: {"_blog":{"title":"网游链表数据遍历","date":"2024-02-27T00:00:00.000Z","category":["History"],"tag":["C++","逆向","数据结构","windows","汇编"],"excerpt":"\n<blockquote>\n<p>游戏中用来存储所有对象信息的往往是链表。也就意味着只需要遍历自己人物对象周围的链表，并将周围的对象都显示出来即可。我们想要实现遍历周围附近所有对象的信息(例如血量)功能，就要采用遍历链表。</p>\n</blockquote>\n<p>首先我们查找血量的地址</p>\n<p><img src=\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240227040522123.png\" alt=\"image-20240227040522123\"></p>\n<p><img src=\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240227040644993.png\" alt=\"image-20240227040644993\"></p>"},"title":"网游链表数据遍历"} }],
  ["/view/about/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/view/about/index.html.js"), meta: {"title":""} }],
  ["/view/note/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/index.html.js"), meta: {"title":""} }],
  ["/view/pigeonhole/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/view/pigeonhole/index.html.js"), meta: {"title":""} }],
  ["/view/work/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/view/work/index.html.js"), meta: {"title":""} }],
  ["/view/note/Android/%E3%80%8A%E7%AC%AC%E4%B8%80%E8%A1%8C%E4%BB%A3%E7%A0%81%E3%80%8B%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html", { loader: () => import(/* webpackChunkName: "《第一行代码》学习笔记.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/Android/《第一行代码》学习笔记.html.js"), meta: {"title":"《第一行代码》学习笔记"} }],
  ["/view/note/C__/Linux%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%BC%96%E7%A8%8B.html", { loader: () => import(/* webpackChunkName: "Linux服务器编程.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/C__/Linux服务器编程.html.js"), meta: {"title":"Linux服务器编程"} }],
  ["/view/note/C__/VS%E4%BF%AE%E6%94%B9%E7%BC%96%E7%A0%81%E6%A0%BC%E5%BC%8F%E4%B8%BAUTF-8.html", { loader: () => import(/* webpackChunkName: "VS修改编码格式为UTF-8.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/C__/VS修改编码格式为UTF-8.html.js"), meta: {"title":"VS修改编码格式为UTF-8"} }],
  ["/view/note/C__/vs%E6%9C%AA%E8%83%BD%E6%AD%A3%E7%A1%AE%E5%8A%A0%E8%BD%BDXX%E5%8C%85%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95.html", { loader: () => import(/* webpackChunkName: "vs未能正确加载XX包的解决方法.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/C__/vs未能正确加载XX包的解决方法.html.js"), meta: {"title":"vs未能正确加载XX包的解决方法"} }],
  ["/view/note/C__/%E6%98%93%E9%81%93%E4%BA%91%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html", { loader: () => import(/* webpackChunkName: "易道云学习笔记.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/C__/易道云学习笔记.html.js"), meta: {"title":"易道云C/C++全栈工程师学习笔记"} }],
  ["/view/note/Git/Git%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html", { loader: () => import(/* webpackChunkName: "Git学习笔记.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/Git/Git学习笔记.html.js"), meta: {"title":"Git基础教程"} }],
  ["/view/note/Java/Java%E5%8A%A0%E5%AF%86%E5%BA%93%E7%9A%84%E7%AD%BE%E5%90%8D%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3%E8%AE%B0%E5%BD%95.html", { loader: () => import(/* webpackChunkName: "Java加密库的签名问题解决记录.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/Java/Java加密库的签名问题解决记录.html.js"), meta: {"title":"Java加密库的签名问题解决记录"} }],
  ["/view/note/Java/%E3%80%8A%E7%96%AF%E7%8B%82JAVA%E8%AE%B2%E4%B9%89%E3%80%8B%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html", { loader: () => import(/* webpackChunkName: "《疯狂JAVA讲义》学习笔记.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/Java/《疯狂JAVA讲义》学习笔记.html.js"), meta: {"title":"《疯狂JAVA讲义》学习笔记"} }],
  ["/view/note/Java/%E5%8A%A8%E5%8A%9B%E8%8A%82%E7%82%B9NIO%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html", { loader: () => import(/* webpackChunkName: "动力节点NIO学习笔记.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/Java/动力节点NIO学习笔记.html.js"), meta: {"title":"NIO学习笔记"} }],
  ["/view/note/Linux/SSH%E6%9C%8D%E5%8A%A1%E4%B8%8EVS%E8%BF%9E%E6%8E%A5%E5%A4%B1%E8%B4%A5%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html", { loader: () => import(/* webpackChunkName: "SSH服务与VS连接失败解决方案.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/Linux/SSH服务与VS连接失败解决方案.html.js"), meta: {"title":"SSH服务与VS连接失败解决方案"} }],
  ["/view/note/Linux/%E6%98%93%E9%81%93%E4%BA%91-Linux%E7%B3%BB%E7%BB%9F%E5%91%BD%E4%BB%A4.html", { loader: () => import(/* webpackChunkName: "易道云-Linux系统命令.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/Linux/易道云-Linux系统命令.html.js"), meta: {"title":"Linux系统精讲"} }],
  ["/view/note/Linux/%E7%8B%82%E7%A5%9E%E8%AF%B4Linux.html", { loader: () => import(/* webpackChunkName: "狂神说Linux.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/Linux/狂神说Linux.html.js"), meta: {"title":"狂神说Linux"} }],
  ["/view/note/%E4%B8%AD%E9%97%B4%E4%BB%B6/Docker%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html", { loader: () => import(/* webpackChunkName: "Docker学习笔记.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/中间件/Docker学习笔记.html.js"), meta: {"title":"Docker学习笔记"} }],
  ["/view/note/%E4%B8%AD%E9%97%B4%E4%BB%B6/Docker%E9%83%A8%E7%BD%B2%E5%89%8D%E5%90%8E%E7%AB%AF%E9%A1%B9%E7%9B%AE.html", { loader: () => import(/* webpackChunkName: "Docker部署前后端项目.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/中间件/Docker部署前后端项目.html.js"), meta: {"title":"Docker部署前后端"} }],
  ["/view/note/%E4%B8%AD%E9%97%B4%E4%BB%B6/ElasticSearch%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html", { loader: () => import(/* webpackChunkName: "ElasticSearch学习笔记.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/中间件/ElasticSearch学习笔记.html.js"), meta: {"title":"ElasticSearch学习笔记"} }],
  ["/view/note/%E4%B8%AD%E9%97%B4%E4%BB%B6/Redis%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html", { loader: () => import(/* webpackChunkName: "Redis学习笔记.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/中间件/Redis学习笔记.html.js"), meta: {"title":"Redis学习笔记"} }],
  ["/view/note/%E5%85%B6%E4%BB%96/CSDN%E8%BD%AC%E4%B8%BAMarkdown.html", { loader: () => import(/* webpackChunkName: "CSDN转为Markdown.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/其他/CSDN转为Markdown.html.js"), meta: {"title":"CSDN转为Markdown"} }],
  ["/view/note/%E5%8F%8D%E6%B1%87%E7%BC%96/%E6%A0%88%E6%BA%A2%E5%87%BA%E6%BC%8F%E6%B4%9E%E5%8E%9F%E7%90%86%E8%AF%A6%E8%A7%A3%E4%B8%8E%E5%88%A9%E7%94%A8.html", { loader: () => import(/* webpackChunkName: "栈溢出漏洞原理详解与利用.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/反汇编/栈溢出漏洞原理详解与利用.html.js"), meta: {"title":"栈溢出漏洞原理详解与利用"} }],
  ["/view/note/%E5%AE%89%E5%8D%93%E9%80%86%E5%90%91/FridaHook%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html", { loader: () => import(/* webpackChunkName: "FridaHook学习笔记.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/安卓逆向/FridaHook学习笔记.html.js"), meta: {"title":"FridaHook"} }],
  ["/view/note/%E7%B3%BB%E7%BB%9F/Windows%20Defender%E5%BC%BA%E5%88%B6%E5%8D%B8%E8%BD%BD.html", { loader: () => import(/* webpackChunkName: "Windows Defender强制卸载.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/系统/Windows Defender强制卸载.html.js"), meta: {"title":"Windows Defender强制卸载"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"Timeline"} }],
  ["/pigeonhole/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/qBlogPlus/docs/.vuepress/.temp/pages/pigeonhole/index.html.js"), meta: {"title":"Pigeonhole"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
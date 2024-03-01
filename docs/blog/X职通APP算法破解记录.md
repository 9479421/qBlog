---
title: X职通APP算法破解记录
date: 2023-07-21
category:
  - History
tag:
  - 爬虫
  - 安卓
  - 逆向
  - 抓包
---
# X职通APP算法破解记录

> 前言：这个App是用Uniapp写的，逆向破解过程不同于原生App

## 思路分析

### 1.查壳

首先拿到APP的第一件事就是先用PKID查壳，发现没有加固。

![image-20230721162751268](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230721162751268.png)

### 2.抓包

可以用小黄鸟，如果有证书检测就加一步JustTrustMe。我测试过没有抓包检测，这里就用Charles+SocksDroid了。

开始抓包，点击登录，发现有滑块验证。

![image-20230721163702199](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230721163702199.png)

登录后，提示密码错误，我们开始分析抓到的登录包。

![image-20230721163900844](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230721163900844.png)

#### 获取滑块包

request:

```shell
url:http://gwsxapp.gzzjzhy.com//captcha/get
body:
{
	"captchaType": "blockPuzzle",
	"clientUid": "slider-5e4a9c36-954e-4770-9f4b-45300dfc2b9e",
	"ts": 1689928582615
}
```

很容易看出，capchaType是验证类型，blockPuzzle是滑块。clientUid是客户端id，这里可以随机或者留空。ts是13位时间戳。

response:

![image-20230721164338970](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230721164338970.png)

可以得出originalImageBase64是滑块背景图的Base64编码，jigsawImageBase64是缺口图的Base64编码。

#### 校验滑块包

request:

url:http://gwsxapp.gzzjzhy.com//captcha/check

body:

```json
{
	"captchaType": "blockPuzzle",
	"pointJson": "HBPadYqwETBdLVdNqxJMBlcZ6kGLvQ1Mnfe5nTAdh/A=",
	"token": "6572ad2c455b4b7496e76fe552ab36a5"
}
```

得知token在上方获取滑块包请求中的返回值里，至于pointJson，我们可以猜测他是滑块x,y点的加密后的数据，先留意着，后面到代码层再着重分析。

还有一个关键的是secretKey，这是AES加密的密匙，后面就知道了。

response:

```json
{
	"repCode": "0000",
	"repMsg": null,
	"repData": {
		...省略
	},
	"success": true
}
```

应该是根据success来判断滑块是否验证成功。

#### 登录包

request:

url:http://gwsxapp.gzzjzhy.com/api/user/login

body:

```json
{
	"phonenumber": "13763546528",
	"password": "2222222222",
	"captchaVerification": "OeLUA9NZf6sow4bI3tHN5/fw6IvVxkU3Z3YFIMYiUWzbGcr9ArErC6YQC2PL+H2p9d64+TXcc4srqRORpdeSd+P705D9ywqRjLmrZwBtIqk="
}
```

phonenumber是手机号，password是密码，captchaVerification肯定是滑块验证成功后的做了一些加密的参数。

### 3.初步分析

这里以安卓APP为例：

正常我们分析一个APP的算法，首先要对其apk安装包进行反编译（脱壳完成或无壳的前提下），然后使用Xposed或者Frida框架对算法加密关键点进行Hook拦截，参数分析，一般就搞定了。

![image-20230721165456933](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230721165456933.png)

反编译后，发现在无任何混淆处理的情况下，居然只有几个毫无作用的类存在，根本找不到任何功能相关的代码，这究竟是为什么呢？

前面说过了，这个可不是Android Studio编写出来的APK，而是使用Uniapp生成的，从何得知呢？我们可以在资源文件里看到这样一堆以uniapp开头的文件，这便是Uniapp生成的APK固有的特征。

![image-20230721170242892](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230721170242892.png)

Uniapp是什么呢，Uniapp是基于Vue编写跨平台H5、小程序、和APP的一个很强大的框架，他可以实现一处编写，处处运行。例如用Uniapp写一份微信小程序的代码，那就可以一键生成出来QQ小程序、支付宝小程序、字节小程序、安卓APP、苹果APP、H5网页端等等等等。有了Uniapp就不需要每一个平台都单独写一份代码了，是一个很强大的跨平台产物。

既然是跨平台，肯定是基于web的，目前互联网技术而言，只有web可以实现真正的无限制应用层跨平台。

以此APP为例，一定是使用了webview来显示了一个网页，java层只负责系统层功能通讯，核心的Http通讯功能大概率是写在网页里的，这就是为什么我们刚刚反编译APP的java层代码一无所获的原因。

所以他的加密算法一定是使用了js来实现的，我们及时调整方向，勿要在java层浪费时间。

### 4.进阶分析

对于Uniapp的逆向分析，这里推荐两篇文章，介绍了Uniapp的逆向方法，感兴趣的可以去深入了解一下。

https://bbs.kanxue.com/thread-268054.htm

https://blog.csdn.net/Y_morph/article/details/129448711

总而言之，有两种方法。

①webview调试

远程调试需要有Xposed框架的手机以及相应的webview模块

模块下载地址：https://github.com/feix760/WebViewDebugHook

模块的作用是Hook指定APP，强行开启webviewdebug，否则默认是只有Chrome浏览器APP可以与电脑端Chrome浏览器进行远程调试的。

这里我主要介绍第二种方法，第一种方法自行实践

②直接解包，手撸算法。

也可以称之为静态分析，因为js文件是写死在app资源文件里的，我们只需要对js进行编辑，就可以搜索到核心关键代码，从而实现逆向算法。

Uniapp的核心js代码主要在：assets/apps/__UNI__54B9D71/www/app-service.js里，我们导出js文件，并且使用WebStorm打开这个文件，因为js被压缩过，挤在一起一团糟，使用WebStorm可以对其进行代码格式化。

下面我就不详细解释了，直接上图定位代码。

#### pointJson参数

![image-20230721181354831](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230721181354831.png)

pointJson：AES加密，加密参数为 { x : x坐标 , y : 5 }  x是滑块的X坐标，y=5是固定写死的值

#### captchaVerification参数

![](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230721181743531.png)

captchaVerification：AES加密，加密参数为 token + "---" + { x : x坐标 , y : 5 } 

#### AES加密密匙

那么问题来了，都是AES加密，那密匙是什么呢？其实就在我们先前的获取滑块的/captcha/get包的response里，我们先前提到过的secretKey就是AES加密的密匙了。

![image-20230721183142341](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230721183142341.png)

### 5.代码编写

思路如下：

1.发起获取滑块请求得到滑块缺口图和背景图，使用机器学习识别出滑块缺口所在x坐标

可以调用一些收费的打码平台进行识别，也推荐使用知名识别库四弟 ddddocr进行识别。

附上四弟链接： https://github.com/sml2h3/ddddocr

2.对 { x : x坐标 , y : 5 } 进行AES加密得到pointJson，并发起校验滑块请求

3.对 token + "---" + { x : x坐标 , y : 5 }  进行AES加密得到captchaVerification，并发起登录请求

具体的代码涉及违法和版权问题，这里就不开源了，需要的可以私聊我QQ获取：9479421
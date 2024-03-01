---
title: 最低成本的方式搭建ChatGpt接口
date: 2023-05-03
category:
  - History
tag:
  - 后端
  - nodejs
  - js
---
# 最低成本的方式搭建ChatGpt接口

> 2023-11-02补充：如今国内的文心一言等AI模型已经公开并且盛行，已经可以在国内直接调用了，没必要像下文那样去使用chatgpt了，本文旨在提供调用外网正版chatgpt接口的思路。

首先我们先要通过挂梯子(翻墙)访问到openai官网，然后拿到自己调用接口的key，此步直接省略。

假设你的key为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（请勿泄露给别人）

## 初次试错

接下来我们就要对需求进行分析，因为接口必须翻墙才可以访问，所以按照大家惯性思维去搭建这个后端接口的话，都是采用任一编程语言实现一段http接口操作，然后运行到服务器上后，并且给服务器挂上梯子，再通过前端对这个接口进行访问。

于是我便开始了这第一种方法的尝试，这里我使用的是Nodejs语言的Express实现了一个简易的后端接口进行测试。

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// 定义GET请求的路由
app.get('/ask', (req, res) => {
    var question = req.query.question;

    var request = require('request');
    var options = {
        'method': 'POST',
        'url': 'https://api.openai.com/v1/chat/completions',
        'headers': {
            'Authorization': 'Bearer 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',//这里替换成自己的key
            'User-Agent': 'Apifox/1.0.0 (https://www.apifox.cn)',
            'Content-Type': 'application/json'
        },
        body: `{
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": "${question}"}]
        }`
    };
    
    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.send(response.body);
    });
});

// 启动服务器
app.listen(3000, () => {
    console.log('Server started on port 3000');
});

```

与此同时我将本机开启了全局翻墙，但我经过测试接口发现会引发超时错误。

```javascript
Error: Error: connect ETIMEDOUT 104.23.125.189:443
    at Request._callback (C:\Users\Administrator\Desktop\gptinterface\test.js:30:26)
    at self.callback (C:\Users\Administrator\Desktop\gptinterface\node_modules\request\request.js:185:22)
    at Request.emit (node:events:513:28)
    at Request.onRequestError (C:\Users\Administrator\Desktop\gptinterface\node_modules\request\request.js:877:8)
    at ClientRequest.emit (node:events:513:28)
    at TLSSocket.socketErrorListener (node:_http_client:502:9)
    at TLSSocket.emit (node:events:513:28)
    at emitErrorNT (node:internal/streams/destroy:151:8)
    at emitErrorCloseNT (node:internal/streams/destroy:116:3)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21)
```

于是通过API工具调用接口进行尝试，一样引发了超时错误。

这里可以推测出原因，系统虽然实现了翻墙，但是代码并没有走系统代理，于是我便对API工具设置了系统代理。

![image-20230503143835318](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230503143835318.png)

然后再次访问测试，得到了我想要的结果。

![image-20230503143959381](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230503143959381.png)

知道了原因，那么我们还要想办法对代码实现系统代理，这里就比较复杂了，况且就算实现后，我们还要自备服务器和翻墙软件，然后将其跑在自己的服务器上，成本很高，并且要挂梯子，很复杂，所以我便直接放弃了这个方案。

## 步入正轨

下面给大家推荐一个终极解决方案

> 使用云函数对openai接口进行访问

知名云计算平台，例如阿里云、腾讯云、华为云，都有云函数的支持，我们只需要将云函数的地区设置到美国或者其他Openai支持的国家，就可以实现免翻墙直接访问接口。

这里要感谢云计算为我们个人开发者或者中小企业带来的便利。
接下来详细的介绍一下云函数的使用方法及代码编写，这里以**腾讯云**为例。

### 1.新建云函数

![image-20230503144910978](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230503144910978.png)

选择从头开始，运行环境根据自己的编程语言来，这里以Nodejs为例。

函数代码如下：

```javascript
'use strict';
const request = require('request')
exports.main_handler = async (event, context) => {
var question = event.queryString.question;
var answer = "";
   await new Promise(function(resolve, reject) {
		request({
            timeout: 60000,
			method: 'POST',
			uri: 'https://api.openai.com/v1/chat/completions',
			headers: {
				"content-type": "application/json",
				'Authorization': 'Bearer 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'
			},
			body: JSON.stringify({
				"model": "gpt-3.5-turbo",
				"messages": [{"role": "user", "content": question}]
			})
		}, (error, response, body) => {
			answer = JSON.parse(body).choices[0].message.content
			resolve();
		})
	})
    return answer;
};
```

这样，该云函数就实现了读取question参数并访问openai接口，然后返回chatgpt机器人回复内容的功能。

正常云函数是通过定时触发的，因为我们要通过http主动访问这个云函数，所以要创建一个API网关触发器而不是定时触发器。

![image-20230503145445929](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230503145445929.png)



还有最后一个异常重要的地方要进行设置，因为ChatGpt接口调用有时延，有的时候机器人需要数十秒才可以回应我们的请求，所以要设置超时长一点，这里设置成60s。

![image-20230503152125364](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230503152125364.png)

至此，所有环境配置完毕，点击完成即可。

### 2.安装依赖

刚刚只是编写了js代码，但是依赖库还没有安装，所以我们要先去安装函数依赖。只用到了request一个包，只需要安装这一个就可以了。

![image-20230503145614838](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230503145614838.png)

首先点击终端-新建终端

我们可以看到index.js在src目录里，所以步骤如下：

```shell
cd src
npm install request
```

![image-20230503145833960](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230503145833960.png)

执行完毕后就多出来了一堆依赖文件，至此我们的云函数就算是编写完毕了，点击部署按钮，即可上传云函数成功。

### 3.查看访问url

切换到触发管理界面，找到刚刚我们创建的API网关触发的访问路径，将其复制下来。

https://service-2ruclnmk-1304194722.usw.apigw.tencentcs.com/release/chatgpt

这里要去掉release才是真正的访问路径

https://service-2ruclnmk-1304194722.usw.apigw.tencentcs.com/chatgpt

我们再对question参数进行拼接

https://service-2ruclnmk-1304194722.usw.apigw.tencentcs.com/chatgpt?question=你好，我是帅哥

这里question便是我们自定义的问题了，通过get请求或者直接浏览器访问即可实现chatgpt接口的云函数调用。

![image-20230503150348750](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230503150348750.png)

至此，我们的功能便彻底实现完成。

云函数首次使用应该会赠送免费的使用额度，使用完免费额度后，是按量付费的，成本很低，要记住往腾讯云里充值一些余额，以防欠费后无法调用。
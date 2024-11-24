---
title: frida安卓frp远程调用
date: 2024-11-20
category:
  - History
tag:
  - Android
  - Python

---

# frida安卓frp远程调用

当逆向APP的时候遇到难以复现的算法，经常使用frida进行主动调用，然后做算法转发，本文简介一下步骤。

## 编写frida调用(sign.js)

```js
function sign(str_data){
    var result;
    Java.perform(function () {
        let DecryptUtils = Java.use("com.taobao.android.remoteobject.easy.network.interceptor.DecryptUtils");
        result = DecryptUtils.doDecode(str_data);
    })
    return result;
}

rpc.exports = {
    sign: sign
};
```

传递一个字符串并使用主动调用得到加密返回值

## 编写服务端(server.py)

```python
import os
import frida
from fastapi import FastAPI
import uvicorn


def on_message(message, payload):
    message_type = message['type']
    if message_type == 'send':
        print('[* message]', message['payload'])

    elif message_type == 'error':
        stack = message['stack']
        print('[* error]', stack)

    else:
        print(message)


js_code = open("sign.js", "r", encoding="utf-8").read()
session = frida.get_usb_device().attach("闲鱼")
script = session.create_script(js_code)
script.on("message", on_message)
script.load()


def get_sign(query):
    res = script.exports.sign(query)
    print(res)
    return res


app = FastAPI()


@app.get("/get_data")
def get_oppO_sign(query):
    print(query)
    sign_str = get_sign(query)
    dic = {}
    dic["result"] = sign_str
    return dic


if __name__ == '__main__':
    uvicorn.run(app=app)
```

创建一个get_data的API接口，接收待字符串，并且通过sign.js调用frida得到加密结果并返回

## 部署接口

由于frida主动调用需要电脑连接手机或者安卓模拟器，并且在安卓端运行frida-server。但是云服务器又不能运行安卓模拟器，因为云服务器不具备Hyper-V虚拟化功能，所以我们要在自己真实的电脑主机上进行部署，再通过frp进行端口转发。

首先下载frp，开源地址：https://github.com/fatedier/frp/

在本机电脑运行frpc.exe，在云服务器上运行frps.exe(Linux则运行frps)

在运行之前，我们要进行一下参数配置

> frps.toml配置如下：

```
[common]
bindPort = 7000			# frps 用来与客户端通信的端口
vhost_http_port = 8000

# Server Dashboard，可以查看frp服务状态以及统计信息的后台管理面板
webServer.addr = "0.0.0.0" # 后台管理地址，就是服务器ip地址
webServer.port = 7777 # 你可以自定义
webServer.user = "admin" # 后台登录用户名
webServer.password = "admin" # 后台登录密码
```

bindPort是进行与frpc通信的端口，而vhost_http_port则为转发的客户端端口。下面的dashboard是面板相关配置，可以不设置。

> frpc.toml配置如下：

```
[common]
server_addr = 47.***.112.222
server_port = 7000

[web2]
type = http
local_port = 8000
custom_domains = 47.122.112.222
```

server_addr是服务器ip地址，server_port是服务器端配置的bind_port

web2是随便取得名字，local_port则为转发的本机端口，custom_domains可以填域名，没有域名就填本机IP

> 启动

启动frp服务端和客户端

./frps.exe -c frps.toml

./frpc.exe -c frpc.toml

启动http服务器

python server.py

## 调用接口

![image-20241121000450470](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202411210004593.png)
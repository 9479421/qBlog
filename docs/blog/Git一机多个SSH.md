---
title: Git一机多个SSH
date: 2024-11-24
category:
  - History
tag:
  - Git
---

# Git一机多个SSH

当一个电脑登录多个不同的github账号进行项目推送，或者一个github、一个gitee，将面临本机SSH秘钥只有一个的尴尬情况。

假设当初已经用`ssh-keygen -t rsa -C “user_a@qq.com”`，一路回车，生成了一对秘钥`id_rsa`和`id_rsa.pub` ， 保存在了`~/.ssh`文件夹内，并且在一个用户a的github账号配置了这个id_rsa.pub

此时我们再次使用`ssh-keygen -t rsa -C “user_b@qq.com”` ，随后手动输入自定义文件名`id_rsa_b`，于是在~/.ssh文件夹里得到了`id_rsa_b`和`id_rsa_b.pub`

接下来我们要配置~/.ssh/config文件，没有则自己创建

```
host github_a
    Hostname github.com
    User ssh.github.com
    IdentityFile ~/.ssh/id_rsa
	port 22
	
host github_b
    Hostname github.com
    User ssh.github.com
    IdentityFile ~/.ssh/id_rsa_b
	port 22
```

意思就是在访问host为github_a的时候，会走id_rsa文件，而host为github_b的时候，会走id_rsa_b文件。

于是我们在github添加项目测试一下。

```
git init
git add .
git commit -m "测试"
git branch -M main
git remote add origin git@github_b:user_b/test.git
git push -u origin main
```

原本的git remote add origin https://github.com/user_b/test.git 则变成了 git@github_b:user_b/test.git

如果要修改推送者的github账号，即要修改如下：

```
git config --global user.email "user_b@qq.com"
git config --global user.name "user_b"
```

之后再push就会以user_b的信息来进行push了
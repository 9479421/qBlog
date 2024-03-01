# SSH服务与VS连接失败解决方案

## 1.连接失败

在Linux编程开发中，配置VisualStudio与SSH服务连接的时候遇到了这样的问题。

![image-20230524160024262](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524160024262.png)

明明配置了`/etc/ssh/sshd_config`，也`sudo service ssh start`启动了ssh的服务，仍然连接不上，于是选择重启服务`sudo service ssh restart`

![image-20230524160220580](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524160220580.png)

发现问题所在，说我没配置密匙。

```shell
ssh-keygen -t rsa -f /etc/ssh/ssh_host_rsa_key
ssh-keygen -t dsa -f /etc/ssh/ssh_host_dsa_key
ssh-keygen -t ecdsa -f /etc/ssh/ssh_host_ecdsa_key
ssh-keygen -t ed25519 -f /etc/ssh/ssh_host_ed25519_key
```

重启SSH服务`sudo service ssh restart`

再次尝试连接，成功了！

![image-20230524160508748](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524160508748.png)

## 2.运行失败

在Debug调试时，还会触发如此愚蠢的提示。

![image-20230524161405745](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524161405745.png)

> 什么是gdb

gdb是Linux下调试代码的工具，相当于Windows下的Debug，有了gdb就可以对Linux代码进行调试运行。

所以我们的Linux系统中缺少gdb调试工具。apd-get intsall gdb

随即便大功告成！

![image-20230524161807377](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524161807377.png)
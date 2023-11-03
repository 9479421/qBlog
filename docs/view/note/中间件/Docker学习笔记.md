# Docker学习笔记

## Docker概述

### Docker为什么出现？

一款产品：开发---上线 两套环境！应用环境，应用配置！

开发 ... 运维。 问题：我在我的电脑上可以运行！版本更新，导致服务不可用！对于运维来说，考验就十分大

环境配置是十分的麻烦，每一个机器都要部署环境（集群Redis、ES、hadoop……）! 费时费力。

发布一个项目 jar( Redis Mysql jdk ES ) war

Windows，最后发布到Linux !

传统：开发jar，运维来做

现在：开发打包部署上线，一套流程做完！



java -- apk -- 发布（应用商店）-- 张三使用apk ---安装即可用！

java -- jar（环境） -- 打包项目带上环境（镜像）-- （Docker仓库：商店）



Docker 给以上的问题，提供了解决方案！

Docker的思想就来自于集装箱！

JRE -- 多个应用（端口冲突） --原来都是交叉的！

隔离：Docker核心思想！打包装箱！每个箱子都是互相隔离的。

Docker通过隔离机制，可以将服务器用到极致！

本质：所有的技术都是因为出现了一些问题，我们需要去解决，才去学习！。



### Docker的历史

2010年，几个搞IT的年轻人，就在没过建立了一家公司dotCloud

做一些pass的云计算服务！LXC有关的容器技术！

它们将自己的技术（容器化技术）命名就是Docker！

Docker刚刚诞生的时候，没有引起行业的注意！dotCloud，就活不下去！

开源

开放源代码！



2013年，Docker开源

Docker越来越多的人发现了Docker的优点！火了，Docker每个月都会更新一个版本！

2014年4月9日，Docker1.0发布！

Docker为什么这么火？十分的轻巧！

在容器技术出来之前，我们都是使用虚拟机技术！

虚拟机：在windows中装一个Vmware，通过这个软件我们可以虚拟出来一台或多台电脑！

虚拟机也是属于虚拟化技术，Docker容器技术，也是一种虚拟化技术！

> vm，linux centos原生镜像（一个电脑！） 隔离，需要开启多个虚拟机！
>
> docker：隔离，镜像（最核心的环境 4m + jdk + mysql） 十分的小巧，运行镜像就可以了！小巧！



### Docker能干嘛

**虚拟机技术缺点：**

1、资源占用十分多

2、冗余步骤多

3、启动很慢！



> 容器化技术

容器化技术不是模拟的一个完整的操作系统



比较Docker和虚拟机技术的不同：

- 传统虚拟机，虚拟出一条硬件，运行一个完整的操作系统，然后在这个系统上安装和运行软件
- 容器内的应用直接运行在宿主机的内容，容器是没有自己的内核的，也没有虚拟我们的硬件，所以就轻便了
- 每个容器间是互相隔离，每个容器内都有一个属于自己的文件系统，互不影响。



> DevOps（开发、运维）

**应用更快速的交付和部署**

传统：一堆帮助文档，安装程序

Docker：运行打包镜像发布测试，一键运行

**更便捷的升级或扩缩容**

使用了Docker之后，我们部署应用就和搭积木一样！

项目打包为一个镜像，扩展 服务器A！ 服务器B

**更简单的系统运维**

在容器化之后，我们的开发，测试环境，都是高度一致的

**更高效的计算资源利用**

Docker是内核级的虚拟化，可以再一个物理机上运行很多的容器实例！服务器的性能可以被压榨到极致



## Docker安装

### Docker的基本组成

**镜像（image）：**

docker镜像就好比是一个末班，可以通过这个模板来创建容器服务，tomcat镜像==> run ==> tomcat01容器（提供服务器），通过这个镜像可以创建多个容器（最终服务运行或者项目运行就是在容器中的）

**容器（container）：**

Docker利用容器技术，独立运行一个或者一个组应用，通过镜像来创建的。

启动，停止，删除，基本命令！

目前就可以把这个容器理解为就是一个简易的linux系统

**仓库（repository）：**

仓库就是存放镜像的地方！

仓库分为公用仓库和私有仓库

Docker Hub（默认是国外的）

阿里云……都有容器服务器（配置镜像加速！）



### 安装Docker

> 环境准备

1、需要会一点点的Linux基础

2、Centos7

3、我们使用Xshell连接远程服务器进行操作！

> 环境查看

```shell
# 系统内核是3.10以上的
[root@VM-20-12-centos ~]# uname -r
3.10.0-1160.45.1.el7.x86_64
```

```shell
# 系统版本
[root@VM-20-12-centos ~]# cat /etc/os-release
NAME="CentOS Linux"
VERSION="7 (Core)"
ID="centos"
ID_LIKE="rhel fedora"
VERSION_ID="7"
PRETTY_NAME="CentOS Linux 7 (Core)"
ANSI_COLOR="0;31"
CPE_NAME="cpe:/o:centos:centos:7"
HOME_URL="https://www.centos.org/"
BUG_REPORT_URL="https://bugs.centos.org/"

CENTOS_MANTISBT_PROJECT="CentOS-7"
CENTOS_MANTISBT_PROJECT_VERSION="7"
REDHAT_SUPPORT_PRODUCT="centos"
REDHAT_SUPPORT_PRODUCT_VERSION="7"
```

> 安装

帮助文档：

```shell
# 1、卸载旧的版本
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
                  
# 2、需要的安装包
yum install -y yum-utils

# 3、设置镜像的仓库
yum-config-manager \
	--add-repo \
	https://download.docker.com/linux/centos/docker-ce.repo #默认是从国外的！
	
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo #国内阿里云

# 更新yum软件包索引
yum makecache fast

# 4、安装docker相关的值 docker-ce 社区版 ee 企业版
yum install docker-ce docker-ce-cli containerd.io

# 5、启动docker
systemctl start docker

# 6、使用docker version 是否安装成功

# 7、测试hello-world
docker run hello-world

# 8、查看一下下载的这个hello-world镜像
docker images
```

了解：卸载docker

```shell
# 1、卸载依赖
yum remove docker-ce docker-ce-cli containerd.io

# 2、删除资源
rm -rf /var/lib/docker
rm -rf /var/lib/containerd

# /var/lib/docker docker的默认工作路径
```

### 阿里云镜像加速

登录阿里云服务器，找到容器镜像服务
设置Registry登录密码
找到镜像加速器
配置使用

```shell
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://pi9dpp60.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload

sudo systemctl restart docker
```



### 底层原理

**为什么Docker比Vm快**

- docker有着比虚拟机更少的抽象层。由于docker不需要Hypervisor实现硬件资源虚拟化,*运行在docker容器上的程序直接使用的都是实际物理机的硬件资源*。因此在CPU、内存利用率上docker将会在效率上有明显优势。

- docker利用的是宿主机的内核,而不需要Guest OS。因此,当新建一个 容器时,docker不需要和虚拟机一样重新加载一个操作系统内核。仍而避免引寻、加载操作系统内核返个比较费时费资源的过程,当新建一个虚拟机时,虚拟机软件需要加载GuestOS,返个新建过程是分钟级别的。而docker由于直接利用宿主机的操作系统,则省略了返个过程,因此新建一个docker容器只需要几秒钟。



## Docker的常用命令

### 帮助命令

```shell
docker version #显示docker的版本信息
docker info
docker --help  #万能命令
```



### 镜像命令

docker images 查看所有主机镜像

```shell
[root@VM-20-12-centos ~]# docker images
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
hello-world   latest    feb5d9fea6a5   6 months ago   13.3kB

# 解释
REPOSITORY 镜像的仓库源
TAG 镜像的标签
IMAGE ID 镜像的id
CREATED 镜像的创建时间
SIZE 镜像的大小

# 可选项
-a,--all # 列出所有的镜像
-q,--quiet # 只显示镜像的id
```

docker search 搜索镜像

```shell
[root@VM-20-12-centos ~]# docker search mysql
NAME                             DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
mysql                            MySQL is a widely used, open-source relation…   12321     [OK]       
mariadb                          MariaDB Server is a high performing open sou…   4739      [OK]       
mysql/mysql-server               Optimized MySQL Server Docker images. Create…   915                  [OK]
percona                          Percona Server is a fork of the MySQL relati…   572       [OK]       
phpmyadmin                       phpMyAdmin - A web interface for MySQL and M…   487       [OK]       
mysql/mysql-cluster              Experimental MySQL Cluster Docker images. Cr…   93                   
centos/mysql-57-centos7          MySQL 5.7 SQL database server                   92                   
bitnami/mysql                    Bitnami MySQL Docker Image                      67                   [OK]
ubuntu/mysql                     MySQL open source fast, stable, multi-thread…   28                   
circleci/mysql                   MySQL is a widely used, open-source relation…   25                   
mysql/mysql-router               MySQL Router provides transparent routing be…   23                   
google/mysql                     MySQL server for Google Compute Engine          21                   [OK]
vmware/harbor-db                 Mysql container for Harbor                      10                   
mysqlboy/docker-mydumper         docker-mydumper containerizes MySQL logical …   3                    
mysqlboy/mydumper                mydumper for mysql logcial backups              3                    
bitnami/mysqld-exporter                                                          2                    
ibmcom/mysql-s390x               Docker image for mysql-s390x                    1                    
mysqlboy/percona-server          Percona-Server a MySQL Fork with enhancement…   1                    [OK]
mirantis/mysql                                                                   0                    
mysql/mysql-operator             MySQL Operator for Kubernetes                   0                    
ibmcom/tidb-ppc64le              TiDB is a distributed NewSQL database compat…   0                    
mysqlboy/elasticsearch                                                           0                    
mysqleatmydata/mysql-eatmydata                                                   0                    
cimg/mysql                                                                       0                    
mysql/ndb-operator               MySQL NDB Operator for Kubernetes               0                    

# 可选项，通过收藏数来过滤
 --filter=STARS=3000 #搜索出来的镜像就是STARS大于3000的
```

**docker pull 下载镜像**

```shell
#下载镜像 docker pull 镜像名[:tag]
[root@VM-20-12-centos ~]# docker pull mysql
Using default tag: latest #如果不写tag，默认就是lastest
latest: Pulling from library/mysql
72a69066d2fe: Pull complete  # 分层下载，docker images核心 联合文件系统
93619dbc5b36: Pull complete 
99da31dd6142: Pull complete 
626033c43d70: Pull complete 
37d5d7efb64e: Pull complete 
ac563158d721: Pull complete 
d2ba16033dad: Pull complete 
688ba7d5c01a: Pull complete 
00e060b6d11d: Pull complete 
1c04857f594f: Pull complete 
4d7cfa90e6ea: Pull complete 
e0431212d27d: Pull complete 
Digest: sha256:e9027fe4d91c0153429607251656806cc784e914937271037f7738bd5b8e7709 #签名
Status: Downloaded newer image for mysql:latest
docker.io/library/mysql:latest #真实地址

# 等价于他
docker pull mysql
docker pull docker.io/library/mysql:lastest

# 指定版本下载
[root@VM-20-12-centos ~]# docker pull mysql:5.7
5.7: Pulling from library/mysql
72a69066d2fe: Already exists 
93619dbc5b36: Already exists 
99da31dd6142: Already exists 
626033c43d70: Already exists 
37d5d7efb64e: Already exists 
ac563158d721: Already exists 
d2ba16033dad: Already exists 
0ceb82207cd7: Pull complete 
37f2405cae96: Pull complete 
e2482e017e53: Pull complete 
70deed891d42: Pull complete 
Digest: sha256:f2ad209efe9c67104167fc609cca6973c8422939491c9345270175a300419f94
Status: Downloaded newer image for mysql:5.7
docker.io/library/mysql:5.7
```

**docker rmi** 删除镜像

```shell
docker rmi -f c20987f18b13  #删除指定的容器id
docker rmi -f 容器id 容器id 容器id 容器id  #删除多个容器
docker rmi -f (docker images -aq)  #删除全部的容器
```



### 容器命令

**说明：我们有了镜像才可以创建容器，linux，下载一个centos镜像来测试学习**

```
docker pull centos
```

**新建容器并启动**

```shell
[root@VM-20-12-centos ~]# docker pull centos
Using default tag: latest
latest: Pulling from library/centos
a1d0c7532777: Pull complete 
Digest: sha256:a27fd8080b517143cbbbab9dfb7c8571c40d67d534bbdee55bd6c473f432b177
Status: Downloaded newer image for centos:latest
docker.io/library/centos:latest

docker run [可选参数] image
#参数说明
--name="Name" 容器名字 tomcat01 tomcat02 用来区分容器
-d 后台方式允许，ja nohup
-it 使用交互方式运行，进入容器查看内容
-p 指定容器的端口 -p 8080:8080
	-p ip:主机端口:容器端口
	-p 主机端口:容器端口 (常用)
	-p 容器端口
	容器端口
-p  随机指定端口

# 测试，启动并进入容器
[root@VM-20-12-centos ~]# docker run -it centos /bin/bash
[root@5f045960c6b5 /]# ls #查看容器内的centos,基础版本，很多命令都是不完善的
bin  etc   lib    lost+found  mnt  proc  run   srv  tmp  var
dev  home  lib64  media       opt  root  sbin  sys  usr

#从容器中退回主机
[root@5f045960c6b5 /]# exit
exit
```

**列出所有的运行的容器**

```shell
#docker ps命令
	# 列出当前正在运行的容器
-a  # 列出当前正在运行的容器+带出历史运行过的容器
-n=? #显示最近创建的容器
-q #显示容器的编号

[root@VM-20-12-centos /]# docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
[root@VM-20-12-centos /]# docker ps -a
CONTAINER ID   IMAGE          COMMAND       CREATED         STATUS                     PORTS     NAMES
5f045960c6b5   centos         "/bin/bash"   9 minutes ago   Exited (0) 2 minutes ago             vigorous_chatterjee
9f6b56f6f3d8   feb5d9fea6a5   "/hello"      24 hours ago    Exited (0) 24 hours ago              hardcore_heisenberg
[root@VM-20-12-centos /]# 
```

**退出容器**

```shell
exit #直接容器停止并退出
Ctrl + P + Q #容器不停止退出
```

**删除容器**

```shell
docker rm 容器id      		#删除指定的容器,不能删除正在运行的容器，如果要强制删除，那就是rm -f
docker rm -f $(docker ps -aq)			#删除所有的容器
docker ps -a -q|xargs docker rm 		#删除所有的容器
```

启动和停止容器的操作

```shell
docker start 容器id  		#启动容器
docker restart 容器id		#重启容器
docker stop 容器id		#停止当前正在运行的容器
docker kill 容器id		#强制停止当前容器
```

### 常用其他命令

**后台启动容器**

```shell
# 命令 docker run -d 镜像名！
[root@VM-20-12-centos ~]# docker run -d centos

# 同意docker ps ， 发现centos 停止了

# 常见的坑，docker容器使用后台运行，就必须要有一个前台进程，docker发现没有应用，就会自动停止
# nginx，容器启动后发现自己没有提供服务，就会立刻停止
```

**查看日志**

```shell
docker logs -f -t -tail 容器，没有日志

# 自己编写一份shell脚本
docker run -d centos /bin/sh -c "while true;do echo kuangshen;sleep 1;done"

[root@VM-20-12-centos ~]# docker ps
CONTAINER ID   IMAGE
acbbce409432   centos

# 显示日志
--tf
-tail number #要显示的日志条数
docker logs -f -t --tail 10 acbbce409432
docker logs -f -t acbbce409432
```

**查看容器中进程信息 ps**

```shell
# 命令 docker top 容器id
[root@VM-20-12-centos ~]# docker top acbbce409432
UID                 PID                 PPID                C                   STIME               TTY                 TIME     
root                12369               12348               0                   09:30               ?                   00:00:00 
root                13715               12369               0                   09:37               ?                   00:00:00 
```

**查看镜像的元数据**

```shell
# 命令
docker inspect 容器id

# 测试
[root@VM-20-12-centos ~]# docker inspect acbbce409432
[
    {
        "Id": "acbbce409432a64d3451783a0b886d4d4f3ddd5b3b377e6b6b242311229b57d9",
        "Created": "2022-03-31T01:30:58.780483328Z",
        "Path": "/bin/sh",
        "Args": [
            "-c",
            "while true;do echo kuangshen;sleep 1;done"
        ],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 12369,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2022-03-31T01:30:59.127659538Z",
            "FinishedAt": "0001-01-01T00:00:00Z"
        },
        "Image": "sha256:5d0da3dc976460b72c77d94c8a1ad043720b0416bfc16c52c45d4847e53fadb6",
        "ResolvConfPath": "/var/lib/docker/containers/acbbce409432a64d3451783a0b886d4d4f3ddd5b3b377e6b6b242311229b57d9/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/acbbce409432a64d3451783a0b886d4d4f3ddd5b3b377e6b6b242311229b57d9/hostname",
        "HostsPath": "/var/lib/docker/containers/acbbce409432a64d3451783a0b886d4d4f3ddd5b3b377e6b6b242311229b57d9/hosts",
        "LogPath": "/var/lib/docker/containers/acbbce409432a64d3451783a0b886d4d4f3ddd5b3b377e6b6b242311229b57d9/acbbce409432a64d3451783a0b886d4d4f3ddd5b3b377e6b6b242311229b57d9-json.log",
        "Name": "/nifty_mcclintock",
        "RestartCount": 0,
        "Driver": "overlay2",
        "Platform": "linux",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": null,
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {}
            },
            "NetworkMode": "default",
            "PortBindings": {},
            "RestartPolicy": {
                "Name": "no",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": null,
            "CapAdd": null,
            "CapDrop": null,
            "CgroupnsMode": "host",
            "Dns": [],
            "DnsOptions": [],
            "DnsSearch": [],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "private",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "ConsoleSize": [
                0,
                0
            ],
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "NanoCpus": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": [],
            "BlkioDeviceReadBps": null,
            "BlkioDeviceWriteBps": null,
            "BlkioDeviceReadIOps": null,
            "BlkioDeviceWriteIOps": null,
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpuRealtimePeriod": 0,
            "CpuRealtimeRuntime": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": [],
            "DeviceCgroupRules": null,
            "DeviceRequests": null,
            "KernelMemory": 0,
            "KernelMemoryTCP": 0,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": null,
            "OomKillDisable": false,
            "PidsLimit": null,
            "Ulimits": null,
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0,
            "MaskedPaths": [
                "/proc/asound",
                "/proc/acpi",
                "/proc/kcore",
                "/proc/keys",
                "/proc/latency_stats",
                "/proc/timer_list",
                "/proc/timer_stats",
                "/proc/sched_debug",
                "/proc/scsi",
                "/sys/firmware"
            ],
            "ReadonlyPaths": [
                "/proc/bus",
                "/proc/fs",
                "/proc/irq",
                "/proc/sys",
                "/proc/sysrq-trigger"
            ]
        },
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/106727a1665ecea56037029c88c484b65bff8d3737f46c2fb3f8dac94fcb714f-init/diff:/var/lib/docker/overlay2/61e240a1305ae23db02c51a923ea5cdc363b88ab286b8742960df76f954fa858/diff",
                "MergedDir": "/var/lib/docker/overlay2/106727a1665ecea56037029c88c484b65bff8d3737f46c2fb3f8dac94fcb714f/merged",
                "UpperDir": "/var/lib/docker/overlay2/106727a1665ecea56037029c88c484b65bff8d3737f46c2fb3f8dac94fcb714f/diff",
                "WorkDir": "/var/lib/docker/overlay2/106727a1665ecea56037029c88c484b65bff8d3737f46c2fb3f8dac94fcb714f/work"
            },
            "Name": "overlay2"
        },
        "Mounts": [],
        "Config": {
            "Hostname": "acbbce409432",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
            ],
            "Cmd": [
                "/bin/sh",
                "-c",
                "while true;do echo kuangshen;sleep 1;done"
            ],
            "Image": "centos",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": null,
            "OnBuild": null,
            "Labels": {
                "org.label-schema.build-date": "20210915",
                "org.label-schema.license": "GPLv2",
                "org.label-schema.name": "CentOS Base Image",
                "org.label-schema.schema-version": "1.0",
                "org.label-schema.vendor": "CentOS"
            }
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "f03f18d8a4106125a6c3a6191ee72ebdb565464706e149267f314b80dcce913b",
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "Ports": {},
            "SandboxKey": "/var/run/docker/netns/f03f18d8a410",
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "adbcc0aa7557ec0a767e8ee424e11f7cf4fc82e0276fadf8c7e26711af31dcb6",
            "Gateway": "172.17.0.1",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "172.17.0.2",
            "IPPrefixLen": 16,
            "IPv6Gateway": "",
            "MacAddress": "02:42:ac:11:00:02",
            "Networks": {
                "bridge": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "NetworkID": "4eefc94447592519bf9abebaa9c39360fdfbd15a44611b51e9c39f190b2ac14e",
                    "EndpointID": "adbcc0aa7557ec0a767e8ee424e11f7cf4fc82e0276fadf8c7e26711af31dcb6",
                    "Gateway": "172.17.0.1",
                    "IPAddress": "172.17.0.2",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:11:00:02",
                    "DriverOpts": null
                }
            }
        }
    }
]
```

**进入当前正在运行的容器**

```shell
# 我们通常容器都是使用后台方式运行的，需要进入容器，修改一些配置

# 命令
docker exec -it 容器id

#测试
[root@VM-20-12-centos ~]# docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS     NAMES
acbbce409432   centos    "/bin/sh -c 'while t…"   16 minutes ago   Up 16 minutes             nifty_mcclintock

[root@VM-20-12-centos ~]# docker exec -it acbbce409432 /bin/bash
[root@acbbce409432 /]# ls
bin  dev  etc  home  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
[root@acbbce409432 /]# ps -ef
UID        PID  PPID  C STIME TTY          TIME CMD
root         1     0  0 01:30 ?        00:00:00 /bin/sh -c while true;do echo kuangshen;sleep 1;done
root      1033     0  0 01:48 pts/0    00:00:00 /bin/bash
root      1056     1  0 01:48 ?        00:00:00 /usr/bin/coreutils --coreutils-prog-shebang=sleep /usr/bin/sleep 1
root      1057  1033  0 01:48 pts/0    00:00:00 ps -ef


# 方式2
docker attach 容器id
# 测试
[root@VM-20-12-centos ~]# docker attach acbbce409432
正在执行当前的代码……


# docker exec  # 进入容器后开启一个新的终端，可以在里面操作（常用）
# docker attach # 进入容器正在执行的终端，不会启动新的进程！
```

**从容器内拷贝文件到主机上面**

```shell
docker cp 容器id:容器内路径 目的的主机路径

# 查看当前主机目录下
[root@VM-20-12-centos home]# ls
lighthouse
[root@VM-20-12-centos home]# touch kuangshen.java
[root@VM-20-12-centos home]# ls
kuangshen.java  lighthouse
[root@VM-20-12-centos home]# docker ps
CONTAINER ID   IMAGE     COMMAND       CREATED              STATUS              PORTS     NAMES
273b51b28214   centos    "/bin/bash"   About a minute ago   Up About a minute             pedantic_kalam

#进入docker容器内部
[root@VM-20-12-centos home]# docker attach 273b51b28214
[root@273b51b28214 /]# cd /home      
[root@273b51b28214 home]# ls
#在容器内新建一个文件
[root@273b51b28214 home]# touch test.java
[root@273b51b28214 home]# ls
test.java
[root@273b51b28214 home]# exit
exit
[root@VM-20-12-centos home]# docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
[root@VM-20-12-centos home]# docker ps -a
CONTAINER ID   IMAGE     COMMAND       CREATED         STATUS                     PORTS     NAMES
273b51b28214   centos    "/bin/bash"   3 minutes ago   Exited (0) 8 seconds ago             pedantic_kalam

#将文件拷贝出来到主机上
[root@VM-20-12-centos home]# docker cp 273b51b28214:/home/test.java /home
[root@VM-20-12-centos home]# ls
kuangshen.java  lighthouse  test.java

#拷贝是一个手动过程，未来我们使用-v卷的技术，可以实现
```

### 作业练习

> ```
> Docker安装Nginx
> ```

```shell
# 1、搜索镜像 search 建议大家去docker搜索，可以看到帮助文档信息
# 2、下载镜像 pull
# 3、运行测试
[root@VM-20-12-centos home]# docker images
REPOSITORY   TAG       IMAGE ID       CREATED        SIZE
nginx        latest    605c77e624dd   3 months ago   141MB
centos       latest    5d0da3dc9764   6 months ago   231MB

# -d 后台运行
# --name 给容器命名
# -p 宿主机端口，容器内部端口
[root@VM-20-12-centos home]# docker run -d --name nginx01 -p:3344:80 nginx
4d4cce91ea060476505435c23d7d0a6af2d6e6d3f0ea4ecc00314088ef805668
[root@VM-20-12-centos home]# docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                                   NAMES
4d4cce91ea06   nginx     "/docker-entrypoint.…"   3 seconds ago   Up 2 seconds   0.0.0.0:3344->80/tcp, :::3344->80/tcp   nginx01
[root@VM-20-12-centos home]# curl localhost:3344
```

> ```
> Docker安装tomcat
> ```

```shell
#官方的使用
docker run -it --rm tomcat:9.0

#我们之前的启动都是后台，停止了容器之后，容器还是可以查到 docker run -it --rm ,一般都是用来调试，用完就删除

#下载再启动
docker pull tomcat:9.0

#启动运行
docker run -d -p 3355:8080 --name tomcat01 tomcat

#测试访问没有问题

#进入容器
[root@VM-20-12-centos home]# docker exec -it tomcat01 /bin/bash

#发现问题：1、linux命令少了 2、没有webapps，阿里云镜像的原因，默认最小的镜像，所以不必要的都剔除掉
#保证最小可运行的环境
```

思考问题：我们以后要部署项目，如果每次都要进入容器是不是十分麻烦，我要是可以在容器外部提供一个映射路径，webapps，我们在外部放置项目，就自动同步到内部就好了！

docker 容器 tomcat+网站  docker mysql

> 作业：部署ES+kibana

```shell
# es 暴露的端口很多
# es 十分的耗内存
# es的数据一般需要放置在安全目录！挂在
# --net somenetword ? 网络配置
docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:7.6.2

# 启动了 linux服务器就卡了 docker stats 查看cpu的状态

# 查看 docker stats

# 测试一下es是否成功了
[root@VM-20-12-centos ~]# curl localhost:9200
{
  "name" : "d2dd61560321",
  "cluster_name" : "docker-cluster",
  "cluster_uuid" : "nq6X5lh6RXSp3regQuqbLA",
  "version" : {
    "number" : "7.6.2",
    "build_flavor" : "default",
    "build_type" : "docker",
    "build_hash" : "ef48eb35cf30adf4db14086e8aabd07ef6fb113f",
    "build_date" : "2020-03-26T06:34:37.794943Z",
    "build_snapshot" : false,
    "lucene_version" : "8.4.0",
    "minimum_wire_compatibility_version" : "6.8.0",
    "minimum_index_compatibility_version" : "6.0.0-beta1"
  },
  "tagline" : "You Know, for Search"
}

# 赶紧关闭，增加内存的限制
```

```
赶紧关闭，增加内存的限制，修改配置文件 -e 环境配置修改
```



docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -e ES_JAVA_OPTS="-Xms64m -Xms512m" elasticsearch:7.6.2      

### 可视化

- portainer(先用这个)

```
docker run -d -p 8088:9000 \
--restart=always -v /var/run/docker.sock:/var/run/docker.sock --privileged=true portainer/portainer
```

- Rancher(CI/CD再用)



**什么portainer ?**

Docker图形化界面管理工具！提供一个后台面板供我们操作!

```
docker run -d -p 8088:9000 portainer/portainer
```



## Docker镜像讲解

### 镜像是什么

镜像是一种轻量级、可执行的独立软件包，用来打包软件运行环境和基于运行环境开发的软件，它包含运行某个软件所需的所有内容，包括代码、运行时、库、环境变量和配置文件

所有的应用，直接打包docker镜像，就可以直接跑起来

如何得到镜像

- 从远程仓库下载
- 朋友拷贝给你
- 自己制作一个镜像

### Docker镜像加载原理

> UnionFS(联合文件系统)

UnionFs（联合文件系统）：Union文件系统（UnionFs）是一种分层、轻量级并且高性能的文件系统，他支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文件系统下（ unite several directories into a single virtual filesystem)。Union文件系统是 Docker镜像的基础。镜像可以通过分层来进行继承，基于基础镜像（没有父镜像），可以制作各种具体的应用镜像
特性：一次同时加载多个文件系统，但从外面看起来，只能看到一个文件系统，联合加载会把各层文件系统叠加起来，这样最终的文件系统会包含所有底层的文件和目录。

> Docker镜像加载原理
>

docker的镜像实际上由一层一层的文件系统组成，这种层级的文件系统UnionFS。
boots(boot file system）主要包含 bootloader和 Kernel, bootloader主要是引导加 kernel, Linux刚启动时会加bootfs文件系统，在 Docker镜像的最底层是 boots。这一层与我们典型的Linux/Unix系统是一样的，包含boot加載器和内核。当boot加载完成之后整个内核就都在内存中了，此时内存的使用权已由 bootfs转交给内核，此时系统也会卸载bootfs。
rootfs（root file system),在 bootfs之上。包含的就是典型 Linux系统中的/dev,/proc,/bin,/etc等标准目录和文件。 rootfs就是各种不同的操作系统发行版，比如 Ubuntu, Centos等等。

### Commit镜像

```
docker commit 提交容器成为一个新的副本

docker commit -m="提交的描述信息" -a="作者" 容器id 目标镜像名，[TAG]
```

实战测试

```
# 启动一个默认的tomcat

# 发现这个默认的tomcat 是没有webapps应用， 镜像的原因，官方的镜像默认的webapps下面是没有文件的

# 我自己拷贝进去了基本的文件

# 将我们操作过的容器通过commit提交为一个镜像！我们以后就使用我们修改过的镜像即可
```

![image-20220402100708034](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220402100708034.png)

```
如果想保存当前容器状态，就可以通过commit提交镜像
就好比我们以前学习VM的时候，快照！
```

到了这里才算是入门docker！认真吸收练习



## 容器数据卷

### 什么是容器数据卷

**docker的理念回顾**

将应用和环境打包成一个镜像！

数据？如果数据都在容器中，那么我们容器删除，数据就会丢失！需求：数据可以持久化

Mysql，容其删了，删库跑路！ 需求：MySQL数据可以存储在本地！

容器之间可以有一个数据共享的技术！Docker容器中产生的数据，同步到本地！

这就是卷技术！目录的挂载，将我们容器内的目录，挂载到Linux上面！

### 使用数据卷

> 方式一：直接使用命令来挂载 -v

```
docker run -it -v 主机目录，容器内目录

# 测试
[root@VM-20-12-centos home]# docker run -it -v /home/ceshi:/home centos /bin/bash

#启动起来时候我们可以通过 docker inspect 容器id
```

![image-20220402103749798](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220402103749798.png)



### 实战：安装MySQL

思考：MySQL的数据持久化的问题

```shell
# 获取镜像
docker pull mysql:5.7

# 运行容器，需要做数据挂载！ #安装启动mysql，需要配置密码的，这是要注意点
# 官方测试 docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d

#启动我们的
-d 后台运行
-p 端口映射
-v 卷挂载
-e 环境配置
--name 容器名字
[root@VM-20-12-centos ~]# docker run -d -p 3310:3306 -v /home/mysql/conf:/etc/mysql/conf.d -v /home/mysql/data:/var/lib/mysql  -e MYSQL_ROOT_PASSWORD=123456 --name mysql01 mysql:5.7

# 启动成功后连接服务器mysql测试

# sqlyog-连接到服务器的3310 --- 3310和容器内的3306映射，这个时候我们就可以连接上了

# 在本地测试创建一个数据库，查看一下我们映射的路径是否ok!
```

假设我们把容器删除

我们挂载在本地的数据卷依旧存在

### 具名和匿名挂载

```shell
# 匿名挂载
-v 容器内路径！
-P（随机映射端口）
docker run -d -P --name nginx01 -v /etc/nginx nginx

# 查看所有的卷的情况
[root@VM-20-12-centos home]# docker volume ls
# 这里发现，这种就是匿名挂载，我们在-v只写了容器内的路径，没有写容器外的路径

#具名挂载
[root@VM-20-12-centos home]# docker volume ls
DRIVER    VOLUME NAME
local     9133f2eaab495f003ecce8473a2918e805047546ccd4af9a2ba6c9c77ae20011
local     f5ce3ffcc02cd644c14733f31581816172507578d6ac8a1dff12832acb383ac3
[root@VM-20-12-centos home]# ls
ceshi  kuangshen.java  lighthouse  mysql  test.java
[root@VM-20-12-centos home]# docker run -d -P --name nginx02 -v juming-nginx:/etc/nginx nginx
2d016af29f1ba3c44971c2d0756c88b09a14194f48a0f355fc401190d31cee26
[root@VM-20-12-centos home]# docker volume ls
DRIVER    VOLUME NAME
local     9133f2eaab495f003ecce8473a2918e805047546ccd4af9a2ba6c9c77ae20011
local     f5ce3ffcc02cd644c14733f31581816172507578d6ac8a1dff12832acb383ac3
local     juming-nginx

# 通过-v 卷名：容器内路径
# 查看一下这个卷
```

![image-20220403095103559](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220403095103559.png)



所有的docker容器内的卷，没有指定目录的情况下都是在 /var/lib/docker/volumes/xxxx/_data

我们通过具名挂载可以方便的找到我们的一个卷，大多数情况在使用匿名挂载

```shell
# 如何确定是具名挂载还是匿名挂载，还是指定路径挂载！
-v 容器内路径 #匿名挂载
-v 卷名：容器内路径  #具名挂载
-v /宿主机路径:容器内路径 #指定路径挂载
```

拓展：

```shell
# 通过 -v 容器内路径：ro rw 改变读写权限
ro readonly 只读
rw readwrite 可读可写

# 一旦设置了容器的权限，容器对我们挂载出来的内容就有限定了
docker run -d -P --name nginx02 -v juming-nginx:/etc/nginx:ro nginx
docker run -d -P --name nginx02 -v juming-nginx:/etc/nginx:rw nginx

# ro 只能通过宿主机来操作，容器内部是无法操作的
```



### 初识Dockerfile

Dockerfile 就是用来构建docker镜像的构建文件！命令脚本！先体验一下

通过这个脚本可以生成镜像，镜像是一层一层的，脚本一个个的命令，每个命令都是一层

```shell
# 创建一个dockerfile文件，名字可以随机，建议Dockerfile
# 文件中的内容
FROM centos

VOLUME ["volume01","volume02"]  #匿名挂载

CMD echo "----end-----"

CMD /bin/bash

#这里的每个命令，就是镜像的一层
```

![image-20220403101736372](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220403101736372.png)

```shell
# 启动自己写的容器
```

![image-20220403102045142](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220403102045142.png)

这个卷和外部一定有一个同步的目录！

![image-20220403105109047](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220403105109047.png)

测试一下刚才的文件是否同步出去了！

这种方式我们未来使用的十分多，因为我们通常会构建自己的镜像！

假设构建镜像时没有挂载卷，要手动镜像挂载 -v卷名:容器内路径！

### 数据卷容器

两个mysql同步数据

![image-20220405102204421](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220405102204421.png)

```shell
# 启动3个容器，通过我们刚才自己写的镜像启动
```

docker run -it --name docker03 --volumes-from docker01 kuangshen/centos:1.0    

通过--volumes-from 类似于 son extends father ，实现数据共享

只要有一个容器还在，数据就还在

```shell
# 测试，可以删除Docker01，查看一下docker02和docker03是否还可以访问这个邮件
# 测试依旧可以访问
```

![image-20220405105534488](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220405105534488.png)

多个mysql实现数据共享

```shell
docker run -d -p 3310:3306 -v /etc/mysql/conf.d -v /var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name mysql01 mysql:5.7

docker run -d p 3310:3306 -e MYSQL_ROOT_PASSWORD=123456 --name mysql02 --volumes-from mysql01 mysql:5.7
```



结论：

容器之间配置信息的传递，数据卷容器的生命周期一直持续到没有容器使用为止。

但是一旦你持久化到了本地，这个时候，本地的数据是不会删除的！



## DockerFile

### DockerFile介绍

dockerfile是用来构建docker镜像的文件！命令参数脚本！

构建步骤：

1、编写一个dockerfile文件

2、docker build构建成为一个镜像

3、docker run 运行镜像

4、docker push 发布镜像(DockerHub、阿里云镜像仓库！)

官方镜像很多都是基础包，很多功能没有，我们通常会自己搭建自己的镜像

官方既然可以制作镜像，那我们也可以！

### DockerFile构建过程

dockerfile是面向开发的，我们以后要发布项目，做镜像，就需要编写dockerfile文件，这个文件十分简单！

Docker镜像逐渐成为企业交付的标准，必须要掌握！

步骤：开发，部署，运维。。缺一不可

DockerFile：构建文件，定义了一切的步骤，源代码

DockerImages：通过DockerFile构建生成的镜像，最终发布和运行的产品

Docker容器：容器就是镜像运行起来提供服务器



### DockerFile的指令

```shell
FROM  #基础镜像，一切从这里开始构建
MAINTAINER #镜像是谁写的，姓名+邮箱
RUN #镜像构建的时候需要运行的命令
ADD #步骤，tomcat镜像，这个tomcat压缩包！添加内容
WORKDIR #镜像的工作目录
VOLUME #挂载的目录
EXPOSE #暴露端口位置

ls -a		docker run -l 
CMD #指定这个容器启动的时候要运行的命令，只有最后一个会生效，可被替代
ENTRYPOINT #指定这个容器启动的时候要运行的命令，可以追加命令
ONBUILD #当构建一个被继承 DockerFile 这个时候就会运行ONBUILD的指令，触发指令
COPY #类似ADD ， 将我们文件拷贝到镜像中
ENV #构建的时候设置环境变量！
```



### 实战测试

Docker Hub 中 99% 镜像都是从这个基础镜像过来的 FROM scratch，然后配置需要的软件和配置来进行构建

> 创建一个自己的centos

```shell
# 1 编写Dockerfile的文件
[root@VM-20-12-centos dockerfile]# cat mydockerfile-centos
FROM centos:7
MAINTAINER wqby<9479421@qq.com>

ENV MYPATH /usr/local
WORKDIR  $MYPATH

RUN yum -y install vim
RUN yum -y install net-tools

EXPOSE 80

CMD echo $MYPATH
CMD echo "----end----"
CMD /bin/bash

# 2、通过这个文件构建镜像
# 命令：docker build -f dockerfile文件路径 -t 镜像名:[tag]

# 3、测试运行
```

对比原生的centos

我们增加了vim ipconfig pwd

我们平时拿到一个镜像，可以研究一下它是怎么做的了？docker history 镜像id

```shell
CMD #指定这个容器启动的时候要运行的命令，只有最后一个会生效，可被替代
ENTRYPOINT #执行这个容器启动的时候要运行的命令，可以追加命令
```

测试cmd

```shell
#编写dockerfile文件
[root@VM-20-12-centos dockerfile]# vim dockerfile-cmd-test
FROM centos
CMD ["ls","-a"]

#构建镜像
[root@VM-20-12-centos dockerfile]# docker build -f dockerfile-cmd-test -t cmdtest .

#run运行，发现我们的ls -a 生效
[root@VM-20-12-centos dockerfile]# docker run 9997f0b2aa81
.
..
.dockerenv
bin
dev
etc
home
lib
lib64
lost+found
media
mnt
opt
proc
root
run
sbin
srv
sys
tmp
usr
var

#想追加一个命令 -l ls -al
[root@VM-20-12-centos dockerfile]# docker run 9997f0b2aa81 -l
docker: Error response from daemon: failed to create shim: OCI runtime create failed: container_linux.go:380: starting container process caused: exec: "-l": executable file not found in $PATH: unknown.

#cmd的情况下 -l 替换了CMD ["ls","-a"]命令，-l不是命令所以报错！
```

测试ENTRYPOINT

```shell
[root@VM-20-12-centos dockerfile]# vim dockerfile-cmd-entrypoint
[root@VM-20-12-centos dockerfile]# docker build -f dockerfile-cmd-entrypoint -t entrypoint-test .

[root@VM-20-12-centos dockerfile]# docker run f6f6256f3d2a
.
..
.dockerenv
bin
dev
etc
home
lib
lib64
lost+found
media
mnt
opt
proc
root
run
sbin
srv
sys
tmp
usr
var

[root@VM-20-12-centos dockerfile]# docker run f6f6256f3d2a -l
total 56
drwxr-xr-x   1 root root 4096 Apr  6 02:36 .
drwxr-xr-x   1 root root 4096 Apr  6 02:36 ..
-rwxr-xr-x   1 root root    0 Apr  6 02:36 .dockerenv
lrwxrwxrwx   1 root root    7 Nov  3  2020 bin -> usr/bin
drwxr-xr-x   5 root root  340 Apr  6 02:36 dev
drwxr-xr-x   1 root root 4096 Apr  6 02:36 etc
drwxr-xr-x   2 root root 4096 Nov  3  2020 home
lrwxrwxrwx   1 root root    7 Nov  3  2020 lib -> usr/lib
lrwxrwxrwx   1 root root    9 Nov  3  2020 lib64 -> usr/lib64
drwx------   2 root root 4096 Sep 15  2021 lost+found
drwxr-xr-x   2 root root 4096 Nov  3  2020 media
drwxr-xr-x   2 root root 4096 Nov  3  2020 mnt
drwxr-xr-x   2 root root 4096 Nov  3  2020 opt
dr-xr-xr-x 124 root root    0 Apr  6 02:36 proc
dr-xr-x---   2 root root 4096 Sep 15  2021 root
drwxr-xr-x  11 root root 4096 Sep 15  2021 run
lrwxrwxrwx   1 root root    8 Nov  3  2020 sbin -> usr/sbin
drwxr-xr-x   2 root root 4096 Nov  3  2020 srv
dr-xr-xr-x  13 root root    0 Apr  3 02:18 sys
drwxrwxrwt   7 root root 4096 Sep 15  2021 tmp
drwxr-xr-x  12 root root 4096 Sep 15  2021 usr
drwxr-xr-x  20 root root 4096 Sep 15  2021 var
```



### 实战：Tomcat镜像

1、准备镜像文件 tomcat压缩包

![image-20220406105702057](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220406105702057.png)

2、编写dockerfile文件，官方命名Dockerfile

```shell
FROM centos:7
MAINTAINET wqby<9479421@qq.com>

COPY readme.txt /usr/local/readme.txt

ADD jdk-8u321-linux-x64.tar.gz /usr/local/
ADD apache-tomcat-9.0.62.tar.gz /usr/local/

RUN yum -y install vim

ENV MYPATH /usr/local
WORKDIR $MYPATH

ENV JAVA_HOME /usr/local/jdk1.8.0_321
ENV CLASSPATH $JAVA_HOME/lib/dt.jar;$JAVA_HOME/lib/tools.jar
ENV CATALINA_HOME /usr/local/apache-tomcat-9.0.62
ENV CATALINA_BASH /usr/local/apache-tomcat-9.0.62
ENV PATH $PATH:$JAVA_HOME/bin:$CATALINA_HOME/lib:$CATALINA_HOME/bin

EXPOSE 8080

CMD /usr/local/apache-tomcat-9.0.62/bin/startup.sh && tail -F /usr/local/apache-tomcat-9.0.62/bin/logs/catalina.out
```

3、构建镜像

```shell
# docker build -t diytomcat .
```

4、启动镜像

```shell
[root@VM-20-12-centos tomcat]# 

docker run -d -p 9090:8080 --name wqbytomcat -v /home/wqby/tomcat/test:/usr/local/apache-tomcat-9.0.62/webapps/test -v /home/wqby/tomcat/tomcatlogs/:/usr/local/apache-tomcat-9.0.62/logs diytomcat  


docker run -d -p 3344:8080 --name xiaofantomcat1 -v /home/xiaofan/build/tomcat/test:/usr/local/apache-tomcat-9.0.37/webapps/test -v /home/xiaofan/build/tomcat/tomcatlogs/:/usr/local/apache-tomcat-9.0.37/logs diytomcat

```

5、访问测试

crul localhost:9090

6、发布项目(由于做了卷挂载，我们直接在本地就可以发布了)

```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <web-app xmlns="http://java.sun.com/xml/ns/javaee"
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xsi:schemaLocation="http://java.sun.com/xml/ns/javaee
                               http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd"
           version="2.5">
		
  </web-app>
```

```jsp

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>hello. xiaofan</title>
</head>
<body>
Hello World!<br/>
<%
System.out.println("-----my test web logs------");
%>
</body>
</html>
```

发现：项目部署成功，可以直接访问ok!

我们以后开发的步骤：需要掌握Dockerfile的编写！我们之后的一切都是使用docker镜像来发布运行



### 发布自己的镜像

> dockerhub
>

1、地址 hub.docker.com 注册自己的账号

2、确定这个账号可以登录

3、在我们服务器上提交自己的镜像

```shell
docker login -u 9479421
Password:***
```

4、登录完毕后就可以提交镜像了，就是一部docker push

```shell
# push自己的镜像到服务器上！
[root@VM-20-12-centos ~]# docker push diytomcat
Using default tag: latest
The push refers to repository [docker.io/library/diytomcat]
464716bcc6b3: Preparing 
82db2e577ac8: Preparing 
470424db6cff: Preparing 
5d1d91b017be: Preparing 
174f56854903: Preparing 
denied:requested access to the resource is denied #咀嚼

# push镜像的问题？
[root@VM-20-12-centos ~]# docker push wqby/diytomcat:1.0
The push refers to repository [docker.io/wqby/diytomcat]
An image does not exist locally with the tag: wqby/diytomcat

#解决，增加一个tag
[root@VM-20-12-centos ~]# docker tag 65aff8870cae wqby/tomcat:1.0
#必须保证用户名和dockerhub用户名一样才可以提交成功
[root@VM-20-12-centos ~]# docker push wqby/tomcat:1.0
```

![image-20220406150620108](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220406150620108.png)

提交的时候也是按照镜像的层级来进行提交的



> 阿里云镜像服务器上

1、登录阿里云

2、找到容器镜像服务

3、创建命名空间

4、创建容器镜像

- **登录腾讯云容器镜像服务 Docker Registry**

  ```
  docker login ccr.ccs.tencentyun.com --username=100016474133
  复制
  ```

- **从 Registry 拉取镜像**

  ```
  docker pull ccr.ccs.tencentyun.com/wqby/wqby-test:[tag]
  复制
  ```

  其中 [tag] 请根据您需要拉取镜像的具体版本镜像替换，如 latest。更多命令说明，请参看官方文档：[docker pull](https://docs.docker.com/engine/reference/commandline/pull/)

- **向 Registry 中推送镜像**

  ```
  docker tag [imageId] ccr.ccs.tencentyun.com/wqby/wqby-test:[tag]
  复制
  ```

  ```
  docker push ccr.ccs.tencentyun.com/wqby/wqby-test:[tag]
  复制
  ```

## Docker网络

### 理解Docker0

![image-20220406161954391](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220406161954391.png)

三个网络

```
# 问题，docker是如何处理容器的网络访问的？
```

```shell
[root@VM-20-12-centos /]# docker run -d -P --name tomcat01 tomcat

#查看容器的内部网络地址 ip addr  
#找不到ip命令解决： apt update && apt install -y iproute2

[root@VM-20-12-centos /]# docker exec -it tomcat01 ip addr
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
102: eth0@if103: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default 
    link/ether 02:42:ac:11:00:02 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet 172.17.0.2/16 brd 172.17.255.255 scope global eth0
       valid_lft forever preferred_lft forever
       
# 思考，linux 能不能ping通容器内部！
[root@VM-20-12-centos /]# ping 172.17.0.2
PING 172.17.0.2 (172.17.0.2) 56(84) bytes of data.
64 bytes from 172.17.0.2: icmp_seq=1 ttl=64 time=0.040 ms
64 bytes from 172.17.0.2: icmp_seq=2 ttl=64 time=0.046 ms
64 bytes from 172.17.0.2: icmp_seq=3 ttl=64 time=0.038 ms

# linux 可以ping通docker 容器内部
```

> 原理

1、我们每启动一个一个docker容器，docker就会给docker容器分配一个ip，我们只要安装了docker 0，就会有一个网卡

桥接模式，使用的技术是evth-pair技术！

再次测试ip addr

![image-20220406174433667](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220406174433667.png)

2、在添加一个 docker run -d -P --name tomcat02 tomcat，发现又多了一堆网卡！

![image-20220406174659114](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220406174659114.png)

```shell
# 我们发现这个容器带来网卡，都是一堆堆的
#evth-pair 就是一堆的虚拟设备接口，他们都是成对出现的，一段连着协议，一段彼此相连
# 正因为有这个特征，evth-paire 充当一个桥梁
# OpenStac，Docker容器之间的连接，OVS的连接，都是使用evth-pair技术
```

3、我们启动了两个项目，测试下tomcat01和tomcat02是否可以ping通

解决容器内没有ping命令：

1. apt-get update
2. apt install net-tools    # ifconfig 
3. apt install iputils-ping   # ping

所有的容器不指定网络的情况下，都是docker0路由的，docker会给我们的容器分配一个默认的可用IP



Docker中的所有网络接口都是虚拟的。虚拟的转发效率高！（内网传递文件！）

只要容器删除，对应网桥一对就没了！



### --link

> 思考一个场景，我们编写了一个微服务，database url = ip;项目不重启，数据库ip换掉了，我们希望可以处理这个东西，可以通过名字来访问容器？

```shell
[root@VM-20-12-centos ~]# docker exec -it tomcat02 ping tomcat01
ping: tomcat01: Name or service not known
# 如何可以解决呢？
# 通过 --linke 既可以解决了网络连通问题
[root@VM-20-12-centos ~]# docker run -d -P --name tomcat03 --link tomcat02 tomcat     
783470014d80e69f425b7304099737e09d848a6bd8c798fadc7855ce97c30a88                         
[root@VM-20-12-centos ~]# docker exec -it tomcat03 ping tomcat02
64 bytes from tomcat02 (172.17.0.3): icmp_seq=1 ttl=64 time=0.104 ms
64 bytes from tomcat02 (172.17.0.3): icmp_seq=2 ttl=64 time=0.052 ms
64 bytes from tomcat02 (172.17.0.3): icmp_seq=3 ttl=64 time=0.054 ms
64 bytes from tomcat02 (172.17.0.3): icmp_seq=4 ttl=64 time=0.054 ms
、
# 反向不可以
[root@VM-20-12-centos ~]# docker exec -it tomcat02 ping tomcat03
ping: tomcat03: Name or service not known
```

其实这个tomcat03就是在本地配置了tomcat02的配置？

```shell
查看hosts配置，在这里原理发现
[root@VM-20-12-centos ~]# docker exec -it tomcat03 cat /etc/hosts
127.0.0.1       localhost
::1     localhost ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
172.17.0.3      tomcat02 3ea3ea7afe5d #在这里
172.17.0.4      783470014d80
```

--link就是我们在hosts配置中增加了172.17.0.3 tomcat02 3ea3ea7afe5d

如今不建议使用--linke了！

自定义网络！不适用docker0！

docker0问题：他不支持容器名连接访问！



### 自定义网络

> 查看所有的docker网络

```shell
[root@VM-20-12-centos ~]# docker network ls                                               
NETWORK ID     NAME      DRIVER    SCOPE                                                 
572735e05883   bridge    bridge    local                                                 
5e4e20ed779c   host      host      local                                                 
abdf61d3b437   none      null      local    
```

**网络模式**

bridge：桥接 docker(默认，自己创建也使用bridge模式) 搭桥     0.1 0.2 0.3

none：不配置网络

host: 和宿主机共享网络

container：容器内网络连通！（用得少！）

**测试**

```shell
#我们直接启动的命令 --net bridge，而这个就是我们的docker0
docker run -d -P --name tomcat01 tomcat
docker run -d -P --name tomcat01 --net bridge tomcat

#docker0特点，默认，域名不能访问  --linke 可以打通连接！

#我们可以自定义一个网络！
# --driverbridge
# --subnet 192.168.0.0/16
# --gateway 192.168.0.1 
docker network create --driver bridge --subnet 192.168.0.0/16 --gateway 192.168.0.1 mynet

[root@VM-20-12-centos ~]# docker network ls
NETWORK ID     NAME      DRIVER    SCOPE
572735e05883   bridge    bridge    local
5e4e20ed779c   host      host      local
12de10c8ed5a   mynet     bridge    local
abdf61d3b437   none      null      local
```

我们的网络就建好了

![image-20220407104648703](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220407104648703.png)

启动两个tomcat,再次查看网络情况

![img](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2NoZW5nY29kZXgvY2xvdWRpbWcvbWFzdGVyL2ltZy9pbWFnZS0yMDIwMDUxNjE5MTg0NDI0MC5wbmc)

```shell
#再次测试ping连接
docker exec -it tomcat-net-01 ping 192.168.0.3
PING tomcat-net-02 (192.168.0.3) 56(84) bytes of data.
64 bytes from tomcat-net-02.mynet (192.168.0.3): icmp_seq=1 ttl=64 time=0.048 ms
64 bytes from tomcat-net-02.mynet (192.168.0.3): icmp_seq=2 ttl=64 time=0.053 ms
64 bytes from tomcat-net-02.mynet (192.168.0.3): icmp_seq=3 ttl=64 time=0.045 ms

#现在不适用--link也可以ping名字了！
docker exec -it tomcat-net-02 ping tomcat-net-01

docker exec -it tomcat-net-01 ping tomcat-net-02
PING tomcat-net-02 (192.168.0.3) 56(84) bytes of data.
64 bytes from tomcat-net-02.mynet (192.168.0.3): icmp_seq=1 ttl=64 time=0.048 ms
64 bytes from tomcat-net-02.mynet (192.168.0.3): icmp_seq=2 ttl=64 time=0.053 ms
64 bytes from tomcat-net-02.mynet (192.168.0.3): icmp_seq=3 ttl=64 time=0.045 ms
```

我们自定义的网络docker都已经帮我们维护好了对应的关系，推荐我们平时这样使用网络！

好处：

redis - 不同的集群使用不同的网络，保证集群是安全和健康的

mysql - 不同的集群使用不同的网络，保证集群是安全和健康的

### 网络连通

docker network connect [options] network container

```
# 测试打通 tomcat01 -mynet

# 连通之后就是将tomcat01 放到了 mynet 网络下？

# 一个容器两个ip地址！ 阿里云服务 公网ip 私网ip
```

```
# 01 连通ok
docker exec -it tomcat01 ping tomcat-net-01

# 02打不通
docker exec -it tomcat02 ping tomcat-net-01
```

结论：假设要跨网络操作别人，就需要使用docker network connect 连通！。。。



### 部署Redis集群

妈的学不会。放弃



## SpringBoot微服务打包Docker镜像

1、构建springboot项目

2、打包应用

3、编写dockerfile

4、构建镜像

5、发布运行！








































# Docker部署前后端

## 配置Nginx

### 1.创建容器

> 1.创建映射路径

mkdir -p /usr/local/docker/nginx/conf
mkdir -p /usr/local/docker/nginx/log
mkdir -p /usr/local/docker/nginx/html

> 2.生成容器

docker run --name nginx -p 80:80 -d nginx

> 3.将容器nginx.conf文件复制到宿主机

docker cp 453ac63fba60:/etc/nginx/nginx.conf /usr/local/docker/nginx/conf/nginx.conf

> 4.将容器conf.d文件夹下内容复制到宿主机

docker cp 453ac63fba60:/etc/nginx/conf.d /usr/local/docker/nginx/conf/conf.d

> 5.直接执行docker rm nginx或者以容器id方式关闭容器

> 6.找到nginx对应的容器id

docker ps -a

> 7.关闭该容器

docker stop e9e3f9420512

> 8.删除该容器

docker rm e9e3f9420512

> 9.挂载方式启动容器

docker run -p 80:80 --name nginx -v /usr/local/docker/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v /usr/local/docker/nginx/conf/conf.d:/etc/nginx/conf.d -v /usr/local/docker/nginx/log:/var/log/nginx -v /usr/local/docker/nginx/html:/usr/share/nginx/html -d nginx

### 2.配置conf

> 1.找到配置目录

cd /usr/local/docker/nginx/conf/conf.d

```shell
[root@VM-24-11-centos conf.d]# ls
default.conf
```

> 2.创建配置文件

touch test.conf

```shell
[root@VM-24-11-centos conf.d]# ls
test.conf  default.conf
```

> 2.编写配置

配置如下

```shell
server {
        listen 80;
        location / {
                root /usr/share/nginx/html;
                index index.html;
        }
}

server {
        listen 80;
        server_name test.wqby.vip;

        location / {
                root /usr/share/nginx/html/test;
                index index.html;
        }
}
```

### 3.创建html目录

cd /usr/local/docker/nginx/html

mkdir test

### 4.重启nginx

docker restart ***



原文链接：https://blog.csdn.net/weixin_41485724/article/details/108557964

## 配置Mongodb

### 1.创建镜像

> 1.拉取镜像

这里我们拉取最新版本镜像

```shell
docker pull mongo:latest
```

> 2.查看镜像

```shell
docker images
```

### 2.创建容器

> 1.运行容器

```shell
docker run -itd --name mongo -p 27017:27017 mongo --auth 
```

–auth：需要密码才能访问容器服务。

> 2.创建用户

接着进入 mongo 容器内部，添加用户 admin 12345678，然后进行登录看是否创建成功

```shell
docker exec -it mongo mongo admin
db.createUser({ user:'admin',pwd:'admin',roles:[ { role:'userAdminAnyDatabase', db: 'admin'},"readWriteAnyDatabase"]});
#登录
db.auth('admin', 'admin')
```

### 3.连接数据库

```shell
docker exec -it mongo mongo admin
db.auth('admin', 'admin')
show dbs
```



原文链接： https://www.jb51.net/article/215608.htm



## 配置SpringBoot

这里直接编写DockerFile，方便快速，唯一要注意的是要考虑时区

```shell
FROM openjdk:11
   MAINTAINER wqby
   ENV TZ=Asia/Shanghai
   RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
   ADD test-0.0.1-SNAPSHOT.jar app.jar
   EXPOSE 9001
   ENTRYPOINT ["java","-Dmirai.slider.captcha.supported","-jar","app.jar"]
```
























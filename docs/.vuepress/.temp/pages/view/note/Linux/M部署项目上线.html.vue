<template><p>部署mongodb https://www.jb51.net/article/215608.htm</p>
<p>mkdir -p /usr/local/docker/nginx/conf
mkdir -p /usr/local/docker/nginx/log
mkdir -p /usr/local/docker/nginx/html</p>
<h3 id="生成容器" tabindex="-1"><a class="header-anchor" href="#生成容器" aria-hidden="true">#</a> 生成容器</h3>
<p>docker run --name nginx -p 80:80 -d nginx</p>
<h3 id="将容器nginx-conf文件复制到宿主机" tabindex="-1"><a class="header-anchor" href="#将容器nginx-conf文件复制到宿主机" aria-hidden="true">#</a> 将容器nginx.conf文件复制到宿主机</h3>
<p>docker cp 453ac63fba60:/etc/nginx/nginx.conf /usr/local/docker/nginx/conf/nginx.conf</p>
<h3 id="将容器conf-d文件夹下内容复制到宿主机" tabindex="-1"><a class="header-anchor" href="#将容器conf-d文件夹下内容复制到宿主机" aria-hidden="true">#</a> 将容器conf.d文件夹下内容复制到宿主机</h3>
<p>docker cp 453ac63fba60:/etc/nginx/conf.d /usr/local/docker/nginx/conf/conf.d</p>
<h3 id="直接执行docker-rm-nginx或者以容器id方式关闭容器" tabindex="-1"><a class="header-anchor" href="#直接执行docker-rm-nginx或者以容器id方式关闭容器" aria-hidden="true">#</a> 直接执行docker rm nginx或者以容器id方式关闭容器</h3>
<h3 id="找到nginx对应的容器id" tabindex="-1"><a class="header-anchor" href="#找到nginx对应的容器id" aria-hidden="true">#</a> 找到nginx对应的容器id</h3>
<p>docker ps -a</p>
<h3 id="关闭该容器" tabindex="-1"><a class="header-anchor" href="#关闭该容器" aria-hidden="true">#</a> 关闭该容器</h3>
<p>docker stop e9e3f9420512</p>
<h3 id="删除该容器" tabindex="-1"><a class="header-anchor" href="#删除该容器" aria-hidden="true">#</a> 删除该容器</h3>
<p>docker rm e9e3f9420512</p>
<h3 id="挂载方式启动容器" tabindex="-1"><a class="header-anchor" href="#挂载方式启动容器" aria-hidden="true">#</a> 挂载方式启动容器</h3>
<p>docker run -p 80:80 --name nginx -v /usr/local/docker/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v /usr/local/docker/nginx/conf/conf.d:/etc/nginx/conf.d -v /usr/local/docker/nginx/log:/var/log/nginx -v /usr/local/docker/nginx/html:/usr/share/nginx/html -d nginx
————————————————
版权声明：本文为CSDN博主「JiaM丶」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_41485724/article/details/108557964</p>
<p>apt-get update</p>
<p>apt-get install vim</p>
<p>/usr/share/nginx/html</p>
<p>/etc</p>
<p>docker run -itd --name mongo -p 27017:27017 mongo -auth</p>
<p>docker exec -it mongo mongo admin</p>
<p>docker exec -it mongo mongo -u admin -p 123456 --authenticationDatabase admin</p>
</template>

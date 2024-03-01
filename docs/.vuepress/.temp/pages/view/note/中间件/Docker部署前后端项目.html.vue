<template><div><h1 id="docker部署前后端" tabindex="-1"><a class="header-anchor" href="#docker部署前后端"><span>Docker部署前后端</span></a></h1>
<h2 id="配置nginx" tabindex="-1"><a class="header-anchor" href="#配置nginx"><span>配置Nginx</span></a></h2>
<h3 id="_1-创建容器" tabindex="-1"><a class="header-anchor" href="#_1-创建容器"><span>1.创建容器</span></a></h3>
<blockquote>
<p>1.创建映射路径</p>
</blockquote>
<p>mkdir -p /usr/local/docker/nginx/conf
mkdir -p /usr/local/docker/nginx/log
mkdir -p /usr/local/docker/nginx/html</p>
<blockquote>
<p>2.生成容器</p>
</blockquote>
<p>docker run --name nginx -p 80:80 -d nginx</p>
<blockquote>
<p>3.将容器nginx.conf文件复制到宿主机</p>
</blockquote>
<p>docker cp 453ac63fba60:/etc/nginx/nginx.conf /usr/local/docker/nginx/conf/nginx.conf</p>
<blockquote>
<p>4.将容器conf.d文件夹下内容复制到宿主机</p>
</blockquote>
<p>docker cp 453ac63fba60:/etc/nginx/conf.d /usr/local/docker/nginx/conf/conf.d</p>
<blockquote>
<p>5.直接执行docker rm nginx或者以容器id方式关闭容器</p>
</blockquote>
<blockquote>
<p>6.找到nginx对应的容器id</p>
</blockquote>
<p>docker ps -a</p>
<blockquote>
<p>7.关闭该容器</p>
</blockquote>
<p>docker stop e9e3f9420512</p>
<blockquote>
<p>8.删除该容器</p>
</blockquote>
<p>docker rm e9e3f9420512</p>
<blockquote>
<p>9.挂载方式启动容器</p>
</blockquote>
<p>docker run -p 80:80 --name nginx -v /usr/local/docker/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v /usr/local/docker/nginx/conf/conf.d:/etc/nginx/conf.d -v /usr/local/docker/nginx/log:/var/log/nginx -v /usr/local/docker/nginx/html:/usr/share/nginx/html -d nginx</p>
<h3 id="_2-配置conf" tabindex="-1"><a class="header-anchor" href="#_2-配置conf"><span>2.配置conf</span></a></h3>
<blockquote>
<p>1.找到配置目录</p>
</blockquote>
<p>cd /usr/local/docker/nginx/conf/conf.d</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-24-11-centos conf.d<span class="token punctuation">]</span><span class="token comment"># ls</span>
default.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>2.创建配置文件</p>
</blockquote>
<p>touch test.conf</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-24-11-centos conf.d<span class="token punctuation">]</span><span class="token comment"># ls</span>
test.conf  default.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>2.编写配置</p>
</blockquote>
<p>配置如下</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>server <span class="token punctuation">{</span>
        listen <span class="token number">80</span><span class="token punctuation">;</span>
        location / <span class="token punctuation">{</span>
                root /usr/share/nginx/html<span class="token punctuation">;</span>
                index index.html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
        listen <span class="token number">80</span><span class="token punctuation">;</span>
        server_name test.wqby.vip<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>
                root /usr/share/nginx/html/test<span class="token punctuation">;</span>
                index index.html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-创建html目录" tabindex="-1"><a class="header-anchor" href="#_3-创建html目录"><span>3.创建html目录</span></a></h3>
<p>cd /usr/local/docker/nginx/html</p>
<p>mkdir test</p>
<h3 id="_4-重启nginx" tabindex="-1"><a class="header-anchor" href="#_4-重启nginx"><span>4.重启nginx</span></a></h3>
<p>docker restart ***</p>
<p>原文链接：https://blog.csdn.net/weixin_41485724/article/details/108557964</p>
<h2 id="配置mongodb" tabindex="-1"><a class="header-anchor" href="#配置mongodb"><span>配置Mongodb</span></a></h2>
<h3 id="_1-创建镜像" tabindex="-1"><a class="header-anchor" href="#_1-创建镜像"><span>1.创建镜像</span></a></h3>
<blockquote>
<p>1.拉取镜像</p>
</blockquote>
<p>这里我们拉取最新版本镜像</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull mongo:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>2.查看镜像</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-创建容器" tabindex="-1"><a class="header-anchor" href="#_2-创建容器"><span>2.创建容器</span></a></h3>
<blockquote>
<p>1.运行容器</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">--name</span> mongo <span class="token parameter variable">-p</span> <span class="token number">27017</span>:27017 mongo <span class="token parameter variable">--auth</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>–auth：需要密码才能访问容器服务。</p>
<blockquote>
<p>2.创建用户</p>
</blockquote>
<p>接着进入 mongo 容器内部，添加用户 admin 12345678，然后进行登录看是否创建成功</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mongo mongo admin
db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span> user:<span class="token string">'admin'</span>,pwd:<span class="token string">'admin'</span>,roles:<span class="token punctuation">[</span> <span class="token punctuation">{</span> role:<span class="token string">'userAdminAnyDatabase'</span>, db: <span class="token string">'admin'</span><span class="token punctuation">}</span>,<span class="token string">"readWriteAnyDatabase"</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">#登录</span>
db.auth<span class="token punctuation">(</span><span class="token string">'admin'</span>, <span class="token string">'admin'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-连接数据库" tabindex="-1"><a class="header-anchor" href="#_3-连接数据库"><span>3.连接数据库</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mongo mongo admin
db.auth<span class="token punctuation">(</span><span class="token string">'admin'</span>, <span class="token string">'admin'</span><span class="token punctuation">)</span>
show dbs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原文链接： https://www.jb51.net/article/215608.htm</p>
<h2 id="配置springboot" tabindex="-1"><a class="header-anchor" href="#配置springboot"><span>配置SpringBoot</span></a></h2>
<p>这里直接编写DockerFile，方便快速，唯一要注意的是要考虑时区</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>FROM openjdk:11
   MAINTAINER wqby
   ENV <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai
   RUN <span class="token function">ln</span> <span class="token parameter variable">-snf</span> /usr/share/zoneinfo/<span class="token variable">$TZ</span> /etc/localtime <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$TZ</span> <span class="token operator">></span> /etc/timezone
   ADD test-0.0.1-SNAPSHOT.jar app.jar
   EXPOSE <span class="token number">9001</span>
   ENTRYPOINT <span class="token punctuation">[</span><span class="token string">"java"</span>,<span class="token string">"-Dmirai.slider.captcha.supported"</span>,<span class="token string">"-jar"</span>,<span class="token string">"app.jar"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



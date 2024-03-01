import{_ as t,r as l,o as i,c,a as s,b as a,d as o,e as n}from"./app-W42XCaNm.js";const p={},r=n(`<h1 id="docker学习笔记" tabindex="-1"><a class="header-anchor" href="#docker学习笔记"><span>Docker学习笔记</span></a></h1><h2 id="docker概述" tabindex="-1"><a class="header-anchor" href="#docker概述"><span>Docker概述</span></a></h2><h3 id="docker为什么出现" tabindex="-1"><a class="header-anchor" href="#docker为什么出现"><span>Docker为什么出现？</span></a></h3><p>一款产品：开发---上线 两套环境！应用环境，应用配置！</p><p>开发 ... 运维。 问题：我在我的电脑上可以运行！版本更新，导致服务不可用！对于运维来说，考验就十分大</p><p>环境配置是十分的麻烦，每一个机器都要部署环境（集群Redis、ES、hadoop……）! 费时费力。</p><p>发布一个项目 jar( Redis Mysql jdk ES ) war</p><p>Windows，最后发布到Linux !</p><p>传统：开发jar，运维来做</p><p>现在：开发打包部署上线，一套流程做完！</p><p>java -- apk -- 发布（应用商店）-- 张三使用apk ---安装即可用！</p><p>java -- jar（环境） -- 打包项目带上环境（镜像）-- （Docker仓库：商店）</p><p>Docker 给以上的问题，提供了解决方案！</p><p>Docker的思想就来自于集装箱！</p><p>JRE -- 多个应用（端口冲突） --原来都是交叉的！</p><p>隔离：Docker核心思想！打包装箱！每个箱子都是互相隔离的。</p><p>Docker通过隔离机制，可以将服务器用到极致！</p><p>本质：所有的技术都是因为出现了一些问题，我们需要去解决，才去学习！。</p><h3 id="docker的历史" tabindex="-1"><a class="header-anchor" href="#docker的历史"><span>Docker的历史</span></a></h3><p>2010年，几个搞IT的年轻人，就在没过建立了一家公司dotCloud</p><p>做一些pass的云计算服务！LXC有关的容器技术！</p><p>它们将自己的技术（容器化技术）命名就是Docker！</p><p>Docker刚刚诞生的时候，没有引起行业的注意！dotCloud，就活不下去！</p><p>开源</p><p>开放源代码！</p><p>2013年，Docker开源</p><p>Docker越来越多的人发现了Docker的优点！火了，Docker每个月都会更新一个版本！</p><p>2014年4月9日，Docker1.0发布！</p><p>Docker为什么这么火？十分的轻巧！</p><p>在容器技术出来之前，我们都是使用虚拟机技术！</p><p>虚拟机：在windows中装一个Vmware，通过这个软件我们可以虚拟出来一台或多台电脑！</p><p>虚拟机也是属于虚拟化技术，Docker容器技术，也是一种虚拟化技术！</p><blockquote><p>vm，linux centos原生镜像（一个电脑！） 隔离，需要开启多个虚拟机！</p><p>docker：隔离，镜像（最核心的环境 4m + jdk + mysql） 十分的小巧，运行镜像就可以了！小巧！</p></blockquote><h3 id="docker能干嘛" tabindex="-1"><a class="header-anchor" href="#docker能干嘛"><span>Docker能干嘛</span></a></h3><p><strong>虚拟机技术缺点：</strong></p><p>1、资源占用十分多</p><p>2、冗余步骤多</p><p>3、启动很慢！</p><blockquote><p>容器化技术</p></blockquote><p>容器化技术不是模拟的一个完整的操作系统</p><p>比较Docker和虚拟机技术的不同：</p><ul><li>传统虚拟机，虚拟出一条硬件，运行一个完整的操作系统，然后在这个系统上安装和运行软件</li><li>容器内的应用直接运行在宿主机的内容，容器是没有自己的内核的，也没有虚拟我们的硬件，所以就轻便了</li><li>每个容器间是互相隔离，每个容器内都有一个属于自己的文件系统，互不影响。</li></ul><blockquote><p>DevOps（开发、运维）</p></blockquote><p><strong>应用更快速的交付和部署</strong></p><p>传统：一堆帮助文档，安装程序</p><p>Docker：运行打包镜像发布测试，一键运行</p><p><strong>更便捷的升级或扩缩容</strong></p><p>使用了Docker之后，我们部署应用就和搭积木一样！</p><p>项目打包为一个镜像，扩展 服务器A！ 服务器B</p><p><strong>更简单的系统运维</strong></p><p>在容器化之后，我们的开发，测试环境，都是高度一致的</p><p><strong>更高效的计算资源利用</strong></p><p>Docker是内核级的虚拟化，可以再一个物理机上运行很多的容器实例！服务器的性能可以被压榨到极致</p><h2 id="docker安装" tabindex="-1"><a class="header-anchor" href="#docker安装"><span>Docker安装</span></a></h2><h3 id="docker的基本组成" tabindex="-1"><a class="header-anchor" href="#docker的基本组成"><span>Docker的基本组成</span></a></h3><p><strong>镜像（image）：</strong></p><p>docker镜像就好比是一个末班，可以通过这个模板来创建容器服务，tomcat镜像==&gt; run ==&gt; tomcat01容器（提供服务器），通过这个镜像可以创建多个容器（最终服务运行或者项目运行就是在容器中的）</p><p><strong>容器（container）：</strong></p><p>Docker利用容器技术，独立运行一个或者一个组应用，通过镜像来创建的。</p><p>启动，停止，删除，基本命令！</p><p>目前就可以把这个容器理解为就是一个简易的linux系统</p><p><strong>仓库（repository）：</strong></p><p>仓库就是存放镜像的地方！</p><p>仓库分为公用仓库和私有仓库</p><p>Docker Hub（默认是国外的）</p><p>阿里云……都有容器服务器（配置镜像加速！）</p><h3 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker"><span>安装Docker</span></a></h3><blockquote><p>环境准备</p></blockquote><p>1、需要会一点点的Linux基础</p><p>2、Centos7</p><p>3、我们使用Xshell连接远程服务器进行操作！</p><blockquote><p>环境查看</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 系统内核是3.10以上的</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># uname -r</span>
<span class="token number">3.10</span>.0-1160.45.1.el7.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 系统版本</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/os-release</span>
<span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token string">&quot;CentOS Linux&quot;</span>
<span class="token assign-left variable">VERSION</span><span class="token operator">=</span><span class="token string">&quot;7 (Core)&quot;</span>
<span class="token assign-left variable">ID</span><span class="token operator">=</span><span class="token string">&quot;centos&quot;</span>
<span class="token assign-left variable">ID_LIKE</span><span class="token operator">=</span><span class="token string">&quot;rhel fedora&quot;</span>
<span class="token assign-left variable">VERSION_ID</span><span class="token operator">=</span><span class="token string">&quot;7&quot;</span>
<span class="token assign-left variable">PRETTY_NAME</span><span class="token operator">=</span><span class="token string">&quot;CentOS Linux 7 (Core)&quot;</span>
<span class="token assign-left variable">ANSI_COLOR</span><span class="token operator">=</span><span class="token string">&quot;0;31&quot;</span>
<span class="token assign-left variable">CPE_NAME</span><span class="token operator">=</span><span class="token string">&quot;cpe:/o:centos:centos:7&quot;</span>
<span class="token assign-left variable">HOME_URL</span><span class="token operator">=</span><span class="token string">&quot;https://www.centos.org/&quot;</span>
<span class="token assign-left variable">BUG_REPORT_URL</span><span class="token operator">=</span><span class="token string">&quot;https://bugs.centos.org/&quot;</span>

<span class="token assign-left variable">CENTOS_MANTISBT_PROJECT</span><span class="token operator">=</span><span class="token string">&quot;CentOS-7&quot;</span>
<span class="token assign-left variable">CENTOS_MANTISBT_PROJECT_VERSION</span><span class="token operator">=</span><span class="token string">&quot;7&quot;</span>
<span class="token assign-left variable">REDHAT_SUPPORT_PRODUCT</span><span class="token operator">=</span><span class="token string">&quot;centos&quot;</span>
<span class="token assign-left variable">REDHAT_SUPPORT_PRODUCT_VERSION</span><span class="token operator">=</span><span class="token string">&quot;7&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>安装</p></blockquote><p>帮助文档：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 1、卸载旧的版本</span>
<span class="token function">sudo</span> yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
                  docker-client <span class="token punctuation">\\</span>
                  docker-client-latest <span class="token punctuation">\\</span>
                  docker-common <span class="token punctuation">\\</span>
                  docker-latest <span class="token punctuation">\\</span>
                  docker-latest-logrotate <span class="token punctuation">\\</span>
                  docker-logrotate <span class="token punctuation">\\</span>
                  docker-engine
                  
<span class="token comment"># 2、需要的安装包</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils

<span class="token comment"># 3、设置镜像的仓库</span>
yum-config-manager <span class="token punctuation">\\</span>
	--add-repo <span class="token punctuation">\\</span>
	https://download.docker.com/linux/centos/docker-ce.repo <span class="token comment">#默认是从国外的！</span>
	
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo <span class="token comment">#国内阿里云</span>

<span class="token comment"># 更新yum软件包索引</span>
yum makecache fast

<span class="token comment"># 4、安装docker相关的值 docker-ce 社区版 ee 企业版</span>
yum <span class="token function">install</span> docker-ce docker-ce-cli containerd.io

<span class="token comment"># 5、启动docker</span>
systemctl start <span class="token function">docker</span>

<span class="token comment"># 6、使用docker version 是否安装成功</span>

<span class="token comment"># 7、测试hello-world</span>
<span class="token function">docker</span> run hello-world

<span class="token comment"># 8、查看一下下载的这个hello-world镜像</span>
<span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>了解：卸载docker</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 1、卸载依赖</span>
yum remove docker-ce docker-ce-cli containerd.io

<span class="token comment"># 2、删除资源</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/containerd

<span class="token comment"># /var/lib/docker docker的默认工作路径</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="阿里云镜像加速" tabindex="-1"><a class="header-anchor" href="#阿里云镜像加速"><span>阿里云镜像加速</span></a></h3><p>登录阿里云服务器，找到容器镜像服务 设置Registry登录密码 找到镜像加速器 配置使用</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://pi9dpp60.mirror.aliyuncs.com&quot;]
}
EOF</span>
<span class="token function">sudo</span> systemctl daemon-reload

<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="底层原理" tabindex="-1"><a class="header-anchor" href="#底层原理"><span>底层原理</span></a></h3><p><strong>为什么Docker比Vm快</strong></p><ul><li><p>docker有着比虚拟机更少的抽象层。由于docker不需要Hypervisor实现硬件资源虚拟化,<em>运行在docker容器上的程序直接使用的都是实际物理机的硬件资源</em>。因此在CPU、内存利用率上docker将会在效率上有明显优势。</p></li><li><p>docker利用的是宿主机的内核,而不需要Guest OS。因此,当新建一个 容器时,docker不需要和虚拟机一样重新加载一个操作系统内核。仍而避免引寻、加载操作系统内核返个比较费时费资源的过程,当新建一个虚拟机时,虚拟机软件需要加载GuestOS,返个新建过程是分钟级别的。而docker由于直接利用宿主机的操作系统,则省略了返个过程,因此新建一个docker容器只需要几秒钟。</p></li></ul><h2 id="docker的常用命令" tabindex="-1"><a class="header-anchor" href="#docker的常用命令"><span>Docker的常用命令</span></a></h2><h3 id="帮助命令" tabindex="-1"><a class="header-anchor" href="#帮助命令"><span>帮助命令</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> version <span class="token comment">#显示docker的版本信息</span>
<span class="token function">docker</span> info
<span class="token function">docker</span> <span class="token parameter variable">--help</span>  <span class="token comment">#万能命令</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="镜像命令" tabindex="-1"><a class="header-anchor" href="#镜像命令"><span>镜像命令</span></a></h3><p>docker images 查看所有主机镜像</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
hello-world   latest    feb5d9fea6a5   <span class="token number">6</span> months ago   <span class="token number">13</span>.3kB

<span class="token comment"># 解释</span>
REPOSITORY 镜像的仓库源
TAG 镜像的标签
IMAGE ID 镜像的id
CREATED 镜像的创建时间
SIZE 镜像的大小

<span class="token comment"># 可选项</span>
-a,--all <span class="token comment"># 列出所有的镜像</span>
-q,--quiet <span class="token comment"># 只显示镜像的id</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker search 搜索镜像</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker search mysql</span>
NAME                             DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
mysql                            MySQL is a widely used, open-source relation…   <span class="token number">12321</span>     <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>       
mariadb                          MariaDB Server is a high performing <span class="token function">open</span> sou…   <span class="token number">4739</span>      <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>       
mysql/mysql-server               Optimized MySQL Server Docker images. Create…   <span class="token number">915</span>                  <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
percona                          Percona Server is a fork of the MySQL relati…   <span class="token number">572</span>       <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>       
phpmyadmin                       phpMyAdmin - A web interface <span class="token keyword">for</span> MySQL and M…   <span class="token number">487</span>       <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>       
mysql/mysql-cluster              Experimental MySQL Cluster Docker images. Cr…   <span class="token number">93</span>                   
centos/mysql-57-centos7          MySQL <span class="token number">5.7</span> SQL database server                   <span class="token number">92</span>                   
bitnami/mysql                    Bitnami MySQL Docker Image                      <span class="token number">67</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
ubuntu/mysql                     MySQL <span class="token function">open</span> <span class="token builtin class-name">source</span> fast, stable, multi-thread…   <span class="token number">28</span>                   
circleci/mysql                   MySQL is a widely used, open-source relation…   <span class="token number">25</span>                   
mysql/mysql-router               MySQL Router provides transparent routing be…   <span class="token number">23</span>                   
google/mysql                     MySQL server <span class="token keyword">for</span> Google Compute Engine          <span class="token number">21</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
vmware/harbor-db                 Mysql container <span class="token keyword">for</span> Harbor                      <span class="token number">10</span>                   
mysqlboy/docker-mydumper         docker-mydumper containerizes MySQL logical …   <span class="token number">3</span>                    
mysqlboy/mydumper                mydumper <span class="token keyword">for</span> mysql logcial backups              <span class="token number">3</span>                    
bitnami/mysqld-exporter                                                          <span class="token number">2</span>                    
ibmcom/mysql-s390x               Docker image <span class="token keyword">for</span> mysql-s390x                    <span class="token number">1</span>                    
mysqlboy/percona-server          Percona-Server a MySQL Fork with enhancement…   <span class="token number">1</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
mirantis/mysql                                                                   <span class="token number">0</span>                    
mysql/mysql-operator             MySQL Operator <span class="token keyword">for</span> Kubernetes                   <span class="token number">0</span>                    
ibmcom/tidb-ppc64le              TiDB is a distributed NewSQL database compat…   <span class="token number">0</span>                    
mysqlboy/elasticsearch                                                           <span class="token number">0</span>                    
mysqleatmydata/mysql-eatmydata                                                   <span class="token number">0</span>                    
cimg/mysql                                                                       <span class="token number">0</span>                    
mysql/ndb-operator               MySQL NDB Operator <span class="token keyword">for</span> Kubernetes               <span class="token number">0</span>                    

<span class="token comment"># 可选项，通过收藏数来过滤</span>
 <span class="token parameter variable">--filter</span><span class="token operator">=</span>STARS<span class="token operator">=</span><span class="token number">3000</span> <span class="token comment">#搜索出来的镜像就是STARS大于3000的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>docker pull 下载镜像</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#下载镜像 docker pull 镜像名[:tag]</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker pull mysql</span>
Using default tag: latest <span class="token comment">#如果不写tag，默认就是lastest</span>
latest: Pulling from library/mysql
72a69066d2fe: Pull complete  <span class="token comment"># 分层下载，docker images核心 联合文件系统</span>
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
Digest: sha256:e9027fe4d91c0153429607251656806cc784e914937271037f7738bd5b8e7709 <span class="token comment">#签名</span>
Status: Downloaded newer image <span class="token keyword">for</span> mysql:latest
docker.io/library/mysql:latest <span class="token comment">#真实地址</span>

<span class="token comment"># 等价于他</span>
<span class="token function">docker</span> pull mysql
<span class="token function">docker</span> pull docker.io/library/mysql:lastest

<span class="token comment"># 指定版本下载</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker pull mysql:5.7</span>
<span class="token number">5.7</span>: Pulling from library/mysql
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
Status: Downloaded newer image <span class="token keyword">for</span> mysql:5.7
docker.io/library/mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>docker rmi</strong> 删除镜像</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> c20987f18b13  <span class="token comment">#删除指定的容器id</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> 容器id 容器id 容器id 容器id  <span class="token comment">#删除多个容器</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> <span class="token punctuation">(</span>docker images -aq<span class="token punctuation">)</span>  <span class="token comment">#删除全部的容器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器命令" tabindex="-1"><a class="header-anchor" href="#容器命令"><span>容器命令</span></a></h3><p><strong>说明：我们有了镜像才可以创建容器，linux，下载一个centos镜像来测试学习</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker pull centos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>新建容器并启动</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker pull centos</span>
Using default tag: latest
latest: Pulling from library/centos
a1d0c7532777: Pull complete 
Digest: sha256:a27fd8080b517143cbbbab9dfb7c8571c40d67d534bbdee55bd6c473f432b177
Status: Downloaded newer image <span class="token keyword">for</span> centos:latest
docker.io/library/centos:latest

<span class="token function">docker</span> run <span class="token punctuation">[</span>可选参数<span class="token punctuation">]</span> image
<span class="token comment">#参数说明</span>
<span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">&quot;Name&quot;</span> 容器名字 tomcat01 tomcat02 用来区分容器
<span class="token parameter variable">-d</span> 后台方式允许，ja <span class="token function">nohup</span>
<span class="token parameter variable">-it</span> 使用交互方式运行，进入容器查看内容
<span class="token parameter variable">-p</span> 指定容器的端口 <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080
	<span class="token parameter variable">-p</span> ip:主机端口:容器端口
	<span class="token parameter variable">-p</span> 主机端口:容器端口 <span class="token punctuation">(</span>常用<span class="token punctuation">)</span>
	<span class="token parameter variable">-p</span> 容器端口
	容器端口
<span class="token parameter variable">-p</span>  随机指定端口

<span class="token comment"># 测试，启动并进入容器</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker run -it centos /bin/bash</span>
<span class="token punctuation">[</span>root@5f045960c6b5 /<span class="token punctuation">]</span><span class="token comment"># ls #查看容器内的centos,基础版本，很多命令都是不完善的</span>
bin  etc   lib    lost+found  mnt  proc  run   srv  tmp  var
dev  home  lib64  media       opt  root  sbin  sys  usr

<span class="token comment">#从容器中退回主机</span>
<span class="token punctuation">[</span>root@5f045960c6b5 /<span class="token punctuation">]</span><span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>列出所有的运行的容器</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#docker ps命令</span>
	<span class="token comment"># 列出当前正在运行的容器</span>
<span class="token parameter variable">-a</span>  <span class="token comment"># 列出当前正在运行的容器+带出历史运行过的容器</span>
<span class="token parameter variable">-n</span><span class="token operator">=</span>? <span class="token comment">#显示最近创建的容器</span>
<span class="token parameter variable">-q</span> <span class="token comment">#显示容器的编号</span>

<span class="token punctuation">[</span>root@VM-20-12-centos /<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
<span class="token punctuation">[</span>root@VM-20-12-centos /<span class="token punctuation">]</span><span class="token comment"># docker ps -a</span>
CONTAINER ID   IMAGE          COMMAND       CREATED         STATUS                     PORTS     NAMES
5f045960c6b5   centos         <span class="token string">&quot;/bin/bash&quot;</span>   <span class="token number">9</span> minutes ago   Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">2</span> minutes ago             vigorous_chatterjee
9f6b56f6f3d8   feb5d9fea6a5   <span class="token string">&quot;/hello&quot;</span>      <span class="token number">24</span> hours ago    Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">24</span> hours ago              hardcore_heisenberg
<span class="token punctuation">[</span>root@VM-20-12-centos /<span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>退出容器</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">exit</span> <span class="token comment">#直接容器停止并退出</span>
Ctrl + P + Q <span class="token comment">#容器不停止退出</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除容器</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> 容器id      		<span class="token comment">#删除指定的容器,不能删除正在运行的容器，如果要强制删除，那就是rm -f</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-aq</span><span class="token variable">)</span></span>			<span class="token comment">#删除所有的容器</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> -q<span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">docker</span> <span class="token function">rm</span> 		<span class="token comment">#删除所有的容器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动和停止容器的操作</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> start 容器id  		<span class="token comment">#启动容器</span>
<span class="token function">docker</span> restart 容器id		<span class="token comment">#重启容器</span>
<span class="token function">docker</span> stop 容器id		<span class="token comment">#停止当前正在运行的容器</span>
<span class="token function">docker</span> <span class="token function">kill</span> 容器id		<span class="token comment">#强制停止当前容器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用其他命令" tabindex="-1"><a class="header-anchor" href="#常用其他命令"><span>常用其他命令</span></a></h3><p><strong>后台启动容器</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 命令 docker run -d 镜像名！</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker run -d centos</span>

<span class="token comment"># 同意docker ps ， 发现centos 停止了</span>

<span class="token comment"># 常见的坑，docker容器使用后台运行，就必须要有一个前台进程，docker发现没有应用，就会自动停止</span>
<span class="token comment"># nginx，容器启动后发现自己没有提供服务，就会立刻停止</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看日志</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> logs <span class="token parameter variable">-f</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">-tail</span> 容器，没有日志

<span class="token comment"># 自己编写一份shell脚本</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> centos /bin/sh <span class="token parameter variable">-c</span> <span class="token string">&quot;while true;do echo kuangshen;sleep 1;done&quot;</span>

<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE
acbbce409432   centos

<span class="token comment"># 显示日志</span>
<span class="token parameter variable">--tf</span>
<span class="token parameter variable">-tail</span> number <span class="token comment">#要显示的日志条数</span>
<span class="token function">docker</span> logs <span class="token parameter variable">-f</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">--tail</span> <span class="token number">10</span> acbbce409432
<span class="token function">docker</span> logs <span class="token parameter variable">-f</span> <span class="token parameter variable">-t</span> acbbce409432
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看容器中进程信息 ps</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 命令 docker top 容器id</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker top acbbce409432</span>
<span class="token environment constant">UID</span>                 PID                 <span class="token environment constant">PPID</span>                C                   STIME               TTY                 TIME     
root                <span class="token number">12369</span>               <span class="token number">12348</span>               <span class="token number">0</span>                   09:30               ?                   00:00:00 
root                <span class="token number">13715</span>               <span class="token number">12369</span>               <span class="token number">0</span>                   09:37               ?                   00:00:00 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看镜像的元数据</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 命令</span>
<span class="token function">docker</span> inspect 容器id

<span class="token comment"># 测试</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker inspect acbbce409432</span>
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;Id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;acbbce409432a64d3451783a0b886d4d4f3ddd5b3b377e6b6b242311229b57d9&quot;</span>,
        <span class="token string">&quot;Created&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2022-03-31T01:30:58.780483328Z&quot;</span>,
        <span class="token string">&quot;Path&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/bin/sh&quot;</span>,
        <span class="token string">&quot;Args&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;-c&quot;</span>,
            <span class="token string">&quot;while true;do echo kuangshen;sleep 1;done&quot;</span>
        <span class="token punctuation">]</span>,
        <span class="token string">&quot;State&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Status&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;running&quot;</span>,
            <span class="token string">&quot;Running&quot;</span><span class="token builtin class-name">:</span> true,
            <span class="token string">&quot;Paused&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Restarting&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;OOMKilled&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Dead&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Pid&quot;</span><span class="token builtin class-name">:</span> <span class="token number">12369</span>,
            <span class="token string">&quot;ExitCode&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;Error&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;StartedAt&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2022-03-31T01:30:59.127659538Z&quot;</span>,
            <span class="token string">&quot;FinishedAt&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0001-01-01T00:00:00Z&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;Image&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;sha256:5d0da3dc976460b72c77d94c8a1ad043720b0416bfc16c52c45d4847e53fadb6&quot;</span>,
        <span class="token string">&quot;ResolvConfPath&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/containers/acbbce409432a64d3451783a0b886d4d4f3ddd5b3b377e6b6b242311229b57d9/resolv.conf&quot;</span>,
        <span class="token string">&quot;HostnamePath&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/containers/acbbce409432a64d3451783a0b886d4d4f3ddd5b3b377e6b6b242311229b57d9/hostname&quot;</span>,
        <span class="token string">&quot;HostsPath&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/containers/acbbce409432a64d3451783a0b886d4d4f3ddd5b3b377e6b6b242311229b57d9/hosts&quot;</span>,
        <span class="token string">&quot;LogPath&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/containers/acbbce409432a64d3451783a0b886d4d4f3ddd5b3b377e6b6b242311229b57d9/acbbce409432a64d3451783a0b886d4d4f3ddd5b3b377e6b6b242311229b57d9-json.log&quot;</span>,
        <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/nifty_mcclintock&quot;</span>,
        <span class="token string">&quot;RestartCount&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
        <span class="token string">&quot;Driver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;overlay2&quot;</span>,
        <span class="token string">&quot;Platform&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;linux&quot;</span>,
        <span class="token string">&quot;MountLabel&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;ProcessLabel&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;AppArmorProfile&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;ExecIDs&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;HostConfig&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Binds&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;ContainerIDFile&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;LogConfig&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;Type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;json-file&quot;</span>,
                <span class="token string">&quot;Config&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;NetworkMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;default&quot;</span>,
            <span class="token string">&quot;PortBindings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
            <span class="token string">&quot;RestartPolicy&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;no&quot;</span>,
                <span class="token string">&quot;MaximumRetryCount&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;AutoRemove&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;VolumeDriver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;VolumesFrom&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;CapAdd&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;CapDrop&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;CgroupnsMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;host&quot;</span>,
            <span class="token string">&quot;Dns&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;DnsOptions&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;DnsSearch&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;ExtraHosts&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;GroupAdd&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;IpcMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;private&quot;</span>,
            <span class="token string">&quot;Cgroup&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;Links&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;OomScoreAdj&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;PidMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;Privileged&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;PublishAllPorts&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;ReadonlyRootfs&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;SecurityOpt&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;UTSMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;UsernsMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;ShmSize&quot;</span><span class="token builtin class-name">:</span> <span class="token number">67108864</span>,
            <span class="token string">&quot;Runtime&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;runc&quot;</span>,
            <span class="token string">&quot;ConsoleSize&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token number">0</span>,
                <span class="token number">0</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;Isolation&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;CpuShares&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;Memory&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;NanoCpus&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CgroupParent&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;BlkioWeight&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;BlkioWeightDevice&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;BlkioDeviceReadBps&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;BlkioDeviceWriteBps&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;BlkioDeviceReadIOps&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;BlkioDeviceWriteIOps&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;CpuPeriod&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CpuQuota&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CpuRealtimePeriod&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CpuRealtimeRuntime&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CpusetCpus&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;CpusetMems&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;Devices&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;DeviceCgroupRules&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;DeviceRequests&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;KernelMemory&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;KernelMemoryTCP&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;MemoryReservation&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;MemorySwap&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;MemorySwappiness&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;OomKillDisable&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;PidsLimit&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;Ulimits&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;CpuCount&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CpuPercent&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;IOMaximumIOps&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;IOMaximumBandwidth&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;MaskedPaths&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;/proc/asound&quot;</span>,
                <span class="token string">&quot;/proc/acpi&quot;</span>,
                <span class="token string">&quot;/proc/kcore&quot;</span>,
                <span class="token string">&quot;/proc/keys&quot;</span>,
                <span class="token string">&quot;/proc/latency_stats&quot;</span>,
                <span class="token string">&quot;/proc/timer_list&quot;</span>,
                <span class="token string">&quot;/proc/timer_stats&quot;</span>,
                <span class="token string">&quot;/proc/sched_debug&quot;</span>,
                <span class="token string">&quot;/proc/scsi&quot;</span>,
                <span class="token string">&quot;/sys/firmware&quot;</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;ReadonlyPaths&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;/proc/bus&quot;</span>,
                <span class="token string">&quot;/proc/fs&quot;</span>,
                <span class="token string">&quot;/proc/irq&quot;</span>,
                <span class="token string">&quot;/proc/sys&quot;</span>,
                <span class="token string">&quot;/proc/sysrq-trigger&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;GraphDriver&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Data&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;LowerDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/106727a1665ecea56037029c88c484b65bff8d3737f46c2fb3f8dac94fcb714f-init/diff:/var/lib/docker/overlay2/61e240a1305ae23db02c51a923ea5cdc363b88ab286b8742960df76f954fa858/diff&quot;</span>,
                <span class="token string">&quot;MergedDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/106727a1665ecea56037029c88c484b65bff8d3737f46c2fb3f8dac94fcb714f/merged&quot;</span>,
                <span class="token string">&quot;UpperDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/106727a1665ecea56037029c88c484b65bff8d3737f46c2fb3f8dac94fcb714f/diff&quot;</span>,
                <span class="token string">&quot;WorkDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/106727a1665ecea56037029c88c484b65bff8d3737f46c2fb3f8dac94fcb714f/work&quot;</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;overlay2&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;Mounts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
        <span class="token string">&quot;Config&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Hostname&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;acbbce409432&quot;</span>,
            <span class="token string">&quot;Domainname&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;User&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;AttachStdin&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;AttachStdout&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;AttachStderr&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Tty&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;OpenStdin&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;StdinOnce&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Env&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin&quot;</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;Cmd&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;/bin/sh&quot;</span>,
                <span class="token string">&quot;-c&quot;</span>,
                <span class="token string">&quot;while true;do echo kuangshen;sleep 1;done&quot;</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;Image&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;centos&quot;</span>,
            <span class="token string">&quot;Volumes&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;WorkingDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;Entrypoint&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;OnBuild&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;Labels&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;org.label-schema.build-date&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;20210915&quot;</span>,
                <span class="token string">&quot;org.label-schema.license&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;GPLv2&quot;</span>,
                <span class="token string">&quot;org.label-schema.name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;CentOS Base Image&quot;</span>,
                <span class="token string">&quot;org.label-schema.schema-version&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1.0&quot;</span>,
                <span class="token string">&quot;org.label-schema.vendor&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;CentOS&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;NetworkSettings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Bridge&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;SandboxID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;f03f18d8a4106125a6c3a6191ee72ebdb565464706e149267f314b80dcce913b&quot;</span>,
            <span class="token string">&quot;HairpinMode&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;LinkLocalIPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;LinkLocalIPv6PrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;Ports&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
            <span class="token string">&quot;SandboxKey&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/run/docker/netns/f03f18d8a410&quot;</span>,
            <span class="token string">&quot;SecondaryIPAddresses&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;SecondaryIPv6Addresses&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;EndpointID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;adbcc0aa7557ec0a767e8ee424e11f7cf4fc82e0276fadf8c7e26711af31dcb6&quot;</span>,
            <span class="token string">&quot;Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.1&quot;</span>,
            <span class="token string">&quot;GlobalIPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;GlobalIPv6PrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;IPAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.2&quot;</span>,
            <span class="token string">&quot;IPPrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">16</span>,
            <span class="token string">&quot;IPv6Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;MacAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;02:42:ac:11:00:02&quot;</span>,
            <span class="token string">&quot;Networks&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;bridge&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">&quot;IPAMConfig&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;Links&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;Aliases&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;NetworkID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;4eefc94447592519bf9abebaa9c39360fdfbd15a44611b51e9c39f190b2ac14e&quot;</span>,
                    <span class="token string">&quot;EndpointID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;adbcc0aa7557ec0a767e8ee424e11f7cf4fc82e0276fadf8c7e26711af31dcb6&quot;</span>,
                    <span class="token string">&quot;Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.1&quot;</span>,
                    <span class="token string">&quot;IPAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.2&quot;</span>,
                    <span class="token string">&quot;IPPrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">16</span>,
                    <span class="token string">&quot;IPv6Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;GlobalIPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;GlobalIPv6PrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
                    <span class="token string">&quot;MacAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;02:42:ac:11:00:02&quot;</span>,
                    <span class="token string">&quot;DriverOpts&quot;</span><span class="token builtin class-name">:</span> null
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>进入当前正在运行的容器</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 我们通常容器都是使用后台方式运行的，需要进入容器，修改一些配置</span>

<span class="token comment"># 命令</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器id

<span class="token comment">#测试</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS     NAMES
acbbce409432   centos    <span class="token string">&quot;/bin/sh -c &#39;while t…&quot;</span>   <span class="token number">16</span> minutes ago   Up <span class="token number">16</span> minutes             nifty_mcclintock

<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it acbbce409432 /bin/bash</span>
<span class="token punctuation">[</span>root@acbbce409432 /<span class="token punctuation">]</span><span class="token comment"># ls</span>
bin  dev  etc  home  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
<span class="token punctuation">[</span>root@acbbce409432 /<span class="token punctuation">]</span><span class="token comment"># ps -ef</span>
<span class="token environment constant">UID</span>        PID  <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root         <span class="token number">1</span>     <span class="token number">0</span>  <span class="token number">0</span> 01:30 ?        00:00:00 /bin/sh <span class="token parameter variable">-c</span> <span class="token keyword">while</span> <span class="token boolean">true</span><span class="token punctuation">;</span><span class="token keyword">do</span> <span class="token builtin class-name">echo</span> kuangshen<span class="token punctuation">;</span><span class="token function">sleep</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token keyword">done</span>
root      <span class="token number">1033</span>     <span class="token number">0</span>  <span class="token number">0</span> 01:48 pts/0    00:00:00 /bin/bash
root      <span class="token number">1056</span>     <span class="token number">1</span>  <span class="token number">0</span> 01:48 ?        00:00:00 /usr/bin/coreutils --coreutils-prog-shebang<span class="token operator">=</span>sleep /usr/bin/sleep <span class="token number">1</span>
root      <span class="token number">1057</span>  <span class="token number">1033</span>  <span class="token number">0</span> 01:48 pts/0    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-ef</span>


<span class="token comment"># 方式2</span>
<span class="token function">docker</span> attach 容器id
<span class="token comment"># 测试</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker attach acbbce409432</span>
正在执行当前的代码……


<span class="token comment"># docker exec  # 进入容器后开启一个新的终端，可以在里面操作（常用）</span>
<span class="token comment"># docker attach # 进入容器正在执行的终端，不会启动新的进程！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>从容器内拷贝文件到主机上面</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> 容器id:容器内路径 目的的主机路径

<span class="token comment"># 查看当前主机目录下</span>
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># ls</span>
lighthouse
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># touch kuangshen.java</span>
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># ls</span>
kuangshen.java  lighthouse
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE     COMMAND       CREATED              STATUS              PORTS     NAMES
273b51b28214   centos    <span class="token string">&quot;/bin/bash&quot;</span>   About a minute ago   Up About a minute             pedantic_kalam

<span class="token comment">#进入docker容器内部</span>
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker attach 273b51b28214</span>
<span class="token punctuation">[</span>root@273b51b28214 /<span class="token punctuation">]</span><span class="token comment"># cd /home      </span>
<span class="token punctuation">[</span>root@273b51b28214 home<span class="token punctuation">]</span><span class="token comment"># ls</span>
<span class="token comment">#在容器内新建一个文件</span>
<span class="token punctuation">[</span>root@273b51b28214 home<span class="token punctuation">]</span><span class="token comment"># touch test.java</span>
<span class="token punctuation">[</span>root@273b51b28214 home<span class="token punctuation">]</span><span class="token comment"># ls</span>
test.java
<span class="token punctuation">[</span>root@273b51b28214 home<span class="token punctuation">]</span><span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker ps -a</span>
CONTAINER ID   IMAGE     COMMAND       CREATED         STATUS                     PORTS     NAMES
273b51b28214   centos    <span class="token string">&quot;/bin/bash&quot;</span>   <span class="token number">3</span> minutes ago   Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">8</span> seconds ago             pedantic_kalam

<span class="token comment">#将文件拷贝出来到主机上</span>
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker cp 273b51b28214:/home/test.java /home</span>
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># ls</span>
kuangshen.java  lighthouse  test.java

<span class="token comment">#拷贝是一个手动过程，未来我们使用-v卷的技术，可以实现</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="作业练习" tabindex="-1"><a class="header-anchor" href="#作业练习"><span>作业练习</span></a></h3><blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Docker安装Nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 1、搜索镜像 search 建议大家去docker搜索，可以看到帮助文档信息</span>
<span class="token comment"># 2、下载镜像 pull</span>
<span class="token comment"># 3、运行测试</span>
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY   TAG       IMAGE ID       CREATED        SIZE
nginx        latest    605c77e624dd   <span class="token number">3</span> months ago   141MB
centos       latest    5d0da3dc9764   <span class="token number">6</span> months ago   231MB

<span class="token comment"># -d 后台运行</span>
<span class="token comment"># --name 给容器命名</span>
<span class="token comment"># -p 宿主机端口，容器内部端口</span>
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker run -d --name nginx01 -p:3344:80 nginx</span>
4d4cce91ea060476505435c23d7d0a6af2d6e6d3f0ea4ecc00314088ef805668
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                                   NAMES
4d4cce91ea06   nginx     <span class="token string">&quot;/docker-entrypoint.…&quot;</span>   <span class="token number">3</span> seconds ago   Up <span class="token number">2</span> seconds   <span class="token number">0.0</span>.0.0:3344-<span class="token operator">&gt;</span><span class="token number">80</span>/tcp, :::3344-<span class="token operator">&gt;</span><span class="token number">80</span>/tcp   nginx01
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># curl localhost:3344</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Docker安装tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#官方的使用</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> tomcat:9.0

<span class="token comment">#我们之前的启动都是后台，停止了容器之后，容器还是可以查到 docker run -it --rm ,一般都是用来调试，用完就删除</span>

<span class="token comment">#下载再启动</span>
<span class="token function">docker</span> pull tomcat:9.0

<span class="token comment">#启动运行</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">3355</span>:8080 <span class="token parameter variable">--name</span> tomcat01 tomcat

<span class="token comment">#测试访问没有问题</span>

<span class="token comment">#进入容器</span>
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker exec -it tomcat01 /bin/bash</span>

<span class="token comment">#发现问题：1、linux命令少了 2、没有webapps，阿里云镜像的原因，默认最小的镜像，所以不必要的都剔除掉</span>
<span class="token comment">#保证最小可运行的环境</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>思考问题：我们以后要部署项目，如果每次都要进入容器是不是十分麻烦，我要是可以在容器外部提供一个映射路径，webapps，我们在外部放置项目，就自动同步到内部就好了！</p><p>docker 容器 tomcat+网站 docker mysql</p><blockquote><p>作业：部署ES+kibana</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># es 暴露的端口很多</span>
<span class="token comment"># es 十分的耗内存</span>
<span class="token comment"># es的数据一般需要放置在安全目录！挂在</span>
<span class="token comment"># --net somenetword ? 网络配置</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> elasticsearch <span class="token parameter variable">-p</span> <span class="token number">9200</span>:9200 <span class="token parameter variable">-p</span> <span class="token number">9300</span>:9300 <span class="token parameter variable">-e</span> <span class="token string">&quot;discovery.type=single-node&quot;</span> elasticsearch:7.6.2

<span class="token comment"># 启动了 linux服务器就卡了 docker stats 查看cpu的状态</span>

<span class="token comment"># 查看 docker stats</span>

<span class="token comment"># 测试一下es是否成功了</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># curl localhost:9200</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;d2dd61560321&quot;</span>,
  <span class="token string">&quot;cluster_name&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;docker-cluster&quot;</span>,
  <span class="token string">&quot;cluster_uuid&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;nq6X5lh6RXSp3regQuqbLA&quot;</span>,
  <span class="token string">&quot;version&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;number&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;7.6.2&quot;</span>,
    <span class="token string">&quot;build_flavor&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;default&quot;</span>,
    <span class="token string">&quot;build_type&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;docker&quot;</span>,
    <span class="token string">&quot;build_hash&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;ef48eb35cf30adf4db14086e8aabd07ef6fb113f&quot;</span>,
    <span class="token string">&quot;build_date&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;2020-03-26T06:34:37.794943Z&quot;</span>,
    <span class="token string">&quot;build_snapshot&quot;</span> <span class="token builtin class-name">:</span> false,
    <span class="token string">&quot;lucene_version&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;8.4.0&quot;</span>,
    <span class="token string">&quot;minimum_wire_compatibility_version&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;6.8.0&quot;</span>,
    <span class="token string">&quot;minimum_index_compatibility_version&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;6.0.0-beta1&quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;tagline&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;You Know, for Search&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 赶紧关闭，增加内存的限制</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>赶紧关闭，增加内存的限制，修改配置文件 -e 环境配置修改
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e &quot;discovery.type=single-node&quot; -e ES_JAVA_OPTS=&quot;-Xms64m -Xms512m&quot; elasticsearch:7.6.2</p><h3 id="可视化" tabindex="-1"><a class="header-anchor" href="#可视化"><span>可视化</span></a></h3><ul><li>portainer(先用这个)</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker run -d -p 8088:9000 \\
--restart=always -v /var/run/docker.sock:/var/run/docker.sock --privileged=true portainer/portainer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Rancher(CI/CD再用)</li></ul><p><strong>什么portainer ?</strong></p><p>Docker图形化界面管理工具！提供一个后台面板供我们操作!</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker run -d -p 8088:9000 portainer/portainer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="docker镜像讲解" tabindex="-1"><a class="header-anchor" href="#docker镜像讲解"><span>Docker镜像讲解</span></a></h2><h3 id="镜像是什么" tabindex="-1"><a class="header-anchor" href="#镜像是什么"><span>镜像是什么</span></a></h3><p>镜像是一种轻量级、可执行的独立软件包，用来打包软件运行环境和基于运行环境开发的软件，它包含运行某个软件所需的所有内容，包括代码、运行时、库、环境变量和配置文件</p><p>所有的应用，直接打包docker镜像，就可以直接跑起来</p><p>如何得到镜像</p><ul><li>从远程仓库下载</li><li>朋友拷贝给你</li><li>自己制作一个镜像</li></ul><h3 id="docker镜像加载原理" tabindex="-1"><a class="header-anchor" href="#docker镜像加载原理"><span>Docker镜像加载原理</span></a></h3><blockquote><p>UnionFS(联合文件系统)</p></blockquote><p>UnionFs（联合文件系统）：Union文件系统（UnionFs）是一种分层、轻量级并且高性能的文件系统，他支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文件系统下（ unite several directories into a single virtual filesystem)。Union文件系统是 Docker镜像的基础。镜像可以通过分层来进行继承，基于基础镜像（没有父镜像），可以制作各种具体的应用镜像 特性：一次同时加载多个文件系统，但从外面看起来，只能看到一个文件系统，联合加载会把各层文件系统叠加起来，这样最终的文件系统会包含所有底层的文件和目录。</p><blockquote><p>Docker镜像加载原理</p></blockquote><p>docker的镜像实际上由一层一层的文件系统组成，这种层级的文件系统UnionFS。 boots(boot file system）主要包含 bootloader和 Kernel, bootloader主要是引导加 kernel, Linux刚启动时会加bootfs文件系统，在 Docker镜像的最底层是 boots。这一层与我们典型的Linux/Unix系统是一样的，包含boot加載器和内核。当boot加载完成之后整个内核就都在内存中了，此时内存的使用权已由 bootfs转交给内核，此时系统也会卸载bootfs。 rootfs（root file system),在 bootfs之上。包含的就是典型 Linux系统中的/dev,/proc,/bin,/etc等标准目录和文件。 rootfs就是各种不同的操作系统发行版，比如 Ubuntu, Centos等等。</p><h3 id="commit镜像" tabindex="-1"><a class="header-anchor" href="#commit镜像"><span>Commit镜像</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker commit 提交容器成为一个新的副本

docker commit -m=&quot;提交的描述信息&quot; -a=&quot;作者&quot; 容器id 目标镜像名，[TAG]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实战测试</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 启动一个默认的tomcat

# 发现这个默认的tomcat 是没有webapps应用， 镜像的原因，官方的镜像默认的webapps下面是没有文件的

# 我自己拷贝进去了基本的文件

# 将我们操作过的容器通过commit提交为一个镜像！我们以后就使用我们修改过的镜像即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220402100708034.png" alt="image-20220402100708034"></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>如果想保存当前容器状态，就可以通过commit提交镜像
就好比我们以前学习VM的时候，快照！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>到了这里才算是入门docker！认真吸收练习</p><h2 id="容器数据卷" tabindex="-1"><a class="header-anchor" href="#容器数据卷"><span>容器数据卷</span></a></h2><h3 id="什么是容器数据卷" tabindex="-1"><a class="header-anchor" href="#什么是容器数据卷"><span>什么是容器数据卷</span></a></h3><p><strong>docker的理念回顾</strong></p><p>将应用和环境打包成一个镜像！</p><p>数据？如果数据都在容器中，那么我们容器删除，数据就会丢失！需求：数据可以持久化</p><p>Mysql，容其删了，删库跑路！ 需求：MySQL数据可以存储在本地！</p><p>容器之间可以有一个数据共享的技术！Docker容器中产生的数据，同步到本地！</p><p>这就是卷技术！目录的挂载，将我们容器内的目录，挂载到Linux上面！</p><h3 id="使用数据卷" tabindex="-1"><a class="header-anchor" href="#使用数据卷"><span>使用数据卷</span></a></h3><blockquote><p>方式一：直接使用命令来挂载 -v</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker run -it -v 主机目录，容器内目录

# 测试
[root@VM-20-12-centos home]# docker run -it -v /home/ceshi:/home centos /bin/bash

#启动起来时候我们可以通过 docker inspect 容器id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220402103749798.png" alt="image-20220402103749798"></p><h3 id="实战-安装mysql" tabindex="-1"><a class="header-anchor" href="#实战-安装mysql"><span>实战：安装MySQL</span></a></h3><p>思考：MySQL的数据持久化的问题</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 获取镜像</span>
<span class="token function">docker</span> pull mysql:5.7

<span class="token comment"># 运行容器，需要做数据挂载！ #安装启动mysql，需要配置密码的，这是要注意点</span>
<span class="token comment"># 官方测试 docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d</span>

<span class="token comment">#启动我们的</span>
<span class="token parameter variable">-d</span> 后台运行
<span class="token parameter variable">-p</span> 端口映射
<span class="token parameter variable">-v</span> 卷挂载
<span class="token parameter variable">-e</span> 环境配置
<span class="token parameter variable">--name</span> 容器名字
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker run -d -p 3310:3306 -v /home/mysql/conf:/etc/mysql/conf.d -v /home/mysql/data:/var/lib/mysql  -e MYSQL_ROOT_PASSWORD=123456 --name mysql01 mysql:5.7</span>

<span class="token comment"># 启动成功后连接服务器mysql测试</span>

<span class="token comment"># sqlyog-连接到服务器的3310 --- 3310和容器内的3306映射，这个时候我们就可以连接上了</span>

<span class="token comment"># 在本地测试创建一个数据库，查看一下我们映射的路径是否ok!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设我们把容器删除</p><p>我们挂载在本地的数据卷依旧存在</p><h3 id="具名和匿名挂载" tabindex="-1"><a class="header-anchor" href="#具名和匿名挂载"><span>具名和匿名挂载</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 匿名挂载</span>
<span class="token parameter variable">-v</span> 容器内路径！
-P（随机映射端口）
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-P</span> <span class="token parameter variable">--name</span> nginx01 <span class="token parameter variable">-v</span> /etc/nginx nginx

<span class="token comment"># 查看所有的卷的情况</span>
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker volume ls</span>
<span class="token comment"># 这里发现，这种就是匿名挂载，我们在-v只写了容器内的路径，没有写容器外的路径</span>

<span class="token comment">#具名挂载</span>
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker volume ls</span>
DRIVER    VOLUME NAME
<span class="token builtin class-name">local</span>     9133f2eaab495f003ecce8473a2918e805047546ccd4af9a2ba6c9c77ae20011
<span class="token builtin class-name">local</span>     f5ce3ffcc02cd644c14733f31581816172507578d6ac8a1dff12832acb383ac3
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># ls</span>
ceshi  kuangshen.java  lighthouse  mysql  test.java
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker run -d -P --name nginx02 -v juming-nginx:/etc/nginx nginx</span>
2d016af29f1ba3c44971c2d0756c88b09a14194f48a0f355fc401190d31cee26
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker volume ls</span>
DRIVER    VOLUME NAME
<span class="token builtin class-name">local</span>     9133f2eaab495f003ecce8473a2918e805047546ccd4af9a2ba6c9c77ae20011
<span class="token builtin class-name">local</span>     f5ce3ffcc02cd644c14733f31581816172507578d6ac8a1dff12832acb383ac3
<span class="token builtin class-name">local</span>     juming-nginx

<span class="token comment"># 通过-v 卷名：容器内路径</span>
<span class="token comment"># 查看一下这个卷</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220403095103559.png" alt="image-20220403095103559"></p><p>所有的docker容器内的卷，没有指定目录的情况下都是在 /var/lib/docker/volumes/xxxx/_data</p><p>我们通过具名挂载可以方便的找到我们的一个卷，大多数情况在使用匿名挂载</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 如何确定是具名挂载还是匿名挂载，还是指定路径挂载！</span>
<span class="token parameter variable">-v</span> 容器内路径 <span class="token comment">#匿名挂载</span>
<span class="token parameter variable">-v</span> 卷名：容器内路径  <span class="token comment">#具名挂载</span>
<span class="token parameter variable">-v</span> /宿主机路径:容器内路径 <span class="token comment">#指定路径挂载</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>拓展：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 通过 -v 容器内路径：ro rw 改变读写权限</span>
ro <span class="token builtin class-name">readonly</span> 只读
rw readwrite 可读可写

<span class="token comment"># 一旦设置了容器的权限，容器对我们挂载出来的内容就有限定了</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-P</span> <span class="token parameter variable">--name</span> nginx02 <span class="token parameter variable">-v</span> juming-nginx:/etc/nginx:ro nginx
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-P</span> <span class="token parameter variable">--name</span> nginx02 <span class="token parameter variable">-v</span> juming-nginx:/etc/nginx:rw nginx

<span class="token comment"># ro 只能通过宿主机来操作，容器内部是无法操作的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初识dockerfile" tabindex="-1"><a class="header-anchor" href="#初识dockerfile"><span>初识Dockerfile</span></a></h3><p>Dockerfile 就是用来构建docker镜像的构建文件！命令脚本！先体验一下</p><p>通过这个脚本可以生成镜像，镜像是一层一层的，脚本一个个的命令，每个命令都是一层</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 创建一个dockerfile文件，名字可以随机，建议Dockerfile</span>
<span class="token comment"># 文件中的内容</span>
FROM centos

VOLUME <span class="token punctuation">[</span><span class="token string">&quot;volume01&quot;</span>,<span class="token string">&quot;volume02&quot;</span><span class="token punctuation">]</span>  <span class="token comment">#匿名挂载</span>

CMD <span class="token builtin class-name">echo</span> <span class="token string">&quot;----end-----&quot;</span>

CMD /bin/bash

<span class="token comment">#这里的每个命令，就是镜像的一层</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220403101736372.png" alt="image-20220403101736372"></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 启动自己写的容器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220403102045142.png" alt="image-20220403102045142"></p><p>这个卷和外部一定有一个同步的目录！</p><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220403105109047.png" alt="image-20220403105109047"></p><p>测试一下刚才的文件是否同步出去了！</p><p>这种方式我们未来使用的十分多，因为我们通常会构建自己的镜像！</p><p>假设构建镜像时没有挂载卷，要手动镜像挂载 -v卷名:容器内路径！</p><h3 id="数据卷容器" tabindex="-1"><a class="header-anchor" href="#数据卷容器"><span>数据卷容器</span></a></h3><p>两个mysql同步数据</p><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220405102204421.png" alt="image-20220405102204421"></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 启动3个容器，通过我们刚才自己写的镜像启动</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>docker run -it --name docker03 --volumes-from docker01 kuangshen/centos:1.0</p><p>通过--volumes-from 类似于 son extends father ，实现数据共享</p><p>只要有一个容器还在，数据就还在</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 测试，可以删除Docker01，查看一下docker02和docker03是否还可以访问这个邮件</span>
<span class="token comment"># 测试依旧可以访问</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220405105534488.png" alt="image-20220405105534488"></p><p>多个mysql实现数据共享</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">3310</span>:3306 <span class="token parameter variable">-v</span> /etc/mysql/conf.d <span class="token parameter variable">-v</span> /var/lib/mysql <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token parameter variable">--name</span> mysql01 mysql:5.7

<span class="token function">docker</span> run <span class="token parameter variable">-d</span> p <span class="token number">3310</span>:3306 <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token parameter variable">--name</span> mysql02 --volumes-from mysql01 mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结论：</p><p>容器之间配置信息的传递，数据卷容器的生命周期一直持续到没有容器使用为止。</p><p>但是一旦你持久化到了本地，这个时候，本地的数据是不会删除的！</p><h2 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile"><span>DockerFile</span></a></h2><h3 id="dockerfile介绍" tabindex="-1"><a class="header-anchor" href="#dockerfile介绍"><span>DockerFile介绍</span></a></h3><p>dockerfile是用来构建docker镜像的文件！命令参数脚本！</p><p>构建步骤：</p><p>1、编写一个dockerfile文件</p><p>2、docker build构建成为一个镜像</p><p>3、docker run 运行镜像</p><p>4、docker push 发布镜像(DockerHub、阿里云镜像仓库！)</p><p>官方镜像很多都是基础包，很多功能没有，我们通常会自己搭建自己的镜像</p><p>官方既然可以制作镜像，那我们也可以！</p><h3 id="dockerfile构建过程" tabindex="-1"><a class="header-anchor" href="#dockerfile构建过程"><span>DockerFile构建过程</span></a></h3><p>dockerfile是面向开发的，我们以后要发布项目，做镜像，就需要编写dockerfile文件，这个文件十分简单！</p><p>Docker镜像逐渐成为企业交付的标准，必须要掌握！</p><p>步骤：开发，部署，运维。。缺一不可</p><p>DockerFile：构建文件，定义了一切的步骤，源代码</p><p>DockerImages：通过DockerFile构建生成的镜像，最终发布和运行的产品</p><p>Docker容器：容器就是镜像运行起来提供服务器</p><h3 id="dockerfile的指令" tabindex="-1"><a class="header-anchor" href="#dockerfile的指令"><span>DockerFile的指令</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>FROM  <span class="token comment">#基础镜像，一切从这里开始构建</span>
MAINTAINER <span class="token comment">#镜像是谁写的，姓名+邮箱</span>
RUN <span class="token comment">#镜像构建的时候需要运行的命令</span>
ADD <span class="token comment">#步骤，tomcat镜像，这个tomcat压缩包！添加内容</span>
WORKDIR <span class="token comment">#镜像的工作目录</span>
VOLUME <span class="token comment">#挂载的目录</span>
EXPOSE <span class="token comment">#暴露端口位置</span>

<span class="token function">ls</span> <span class="token parameter variable">-a</span>		<span class="token function">docker</span> run <span class="token parameter variable">-l</span> 
CMD <span class="token comment">#指定这个容器启动的时候要运行的命令，只有最后一个会生效，可被替代</span>
ENTRYPOINT <span class="token comment">#指定这个容器启动的时候要运行的命令，可以追加命令</span>
ONBUILD <span class="token comment">#当构建一个被继承 DockerFile 这个时候就会运行ONBUILD的指令，触发指令</span>
COPY <span class="token comment">#类似ADD ， 将我们文件拷贝到镜像中</span>
ENV <span class="token comment">#构建的时候设置环境变量！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实战测试" tabindex="-1"><a class="header-anchor" href="#实战测试"><span>实战测试</span></a></h3><p>Docker Hub 中 99% 镜像都是从这个基础镜像过来的 FROM scratch，然后配置需要的软件和配置来进行构建</p><blockquote><p>创建一个自己的centos</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 1 编写Dockerfile的文件</span>
<span class="token punctuation">[</span>root@VM-20-12-centos dockerfile<span class="token punctuation">]</span><span class="token comment"># cat mydockerfile-centos</span>
FROM centos:7
MAINTAINER wqby<span class="token operator">&lt;</span><span class="token number">9479421</span>@qq.com<span class="token operator">&gt;</span>

ENV MYPATH /usr/local
WORKDIR  <span class="token variable">$MYPATH</span>

RUN yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">vim</span>
RUN yum <span class="token parameter variable">-y</span> <span class="token function">install</span> net-tools

EXPOSE <span class="token number">80</span>

CMD <span class="token builtin class-name">echo</span> <span class="token variable">$MYPATH</span>
CMD <span class="token builtin class-name">echo</span> <span class="token string">&quot;----end----&quot;</span>
CMD /bin/bash

<span class="token comment"># 2、通过这个文件构建镜像</span>
<span class="token comment"># 命令：docker build -f dockerfile文件路径 -t 镜像名:[tag]</span>

<span class="token comment"># 3、测试运行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对比原生的centos</p><p>我们增加了vim ipconfig pwd</p><p>我们平时拿到一个镜像，可以研究一下它是怎么做的了？docker history 镜像id</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>CMD <span class="token comment">#指定这个容器启动的时候要运行的命令，只有最后一个会生效，可被替代</span>
ENTRYPOINT <span class="token comment">#执行这个容器启动的时候要运行的命令，可以追加命令</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>测试cmd</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#编写dockerfile文件</span>
<span class="token punctuation">[</span>root@VM-20-12-centos dockerfile<span class="token punctuation">]</span><span class="token comment"># vim dockerfile-cmd-test</span>
FROM centos
CMD <span class="token punctuation">[</span><span class="token string">&quot;ls&quot;</span>,<span class="token string">&quot;-a&quot;</span><span class="token punctuation">]</span>

<span class="token comment">#构建镜像</span>
<span class="token punctuation">[</span>root@VM-20-12-centos dockerfile<span class="token punctuation">]</span><span class="token comment"># docker build -f dockerfile-cmd-test -t cmdtest .</span>

<span class="token comment">#run运行，发现我们的ls -a 生效</span>
<span class="token punctuation">[</span>root@VM-20-12-centos dockerfile<span class="token punctuation">]</span><span class="token comment"># docker run 9997f0b2aa81</span>
<span class="token builtin class-name">.</span>
<span class="token punctuation">..</span>
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

<span class="token comment">#想追加一个命令 -l ls -al</span>
<span class="token punctuation">[</span>root@VM-20-12-centos dockerfile<span class="token punctuation">]</span><span class="token comment"># docker run 9997f0b2aa81 -l</span>
docker: Error response from daemon: failed to create shim: OCI runtime create failed: container_linux.go:380: starting container process caused: exec: <span class="token string">&quot;-l&quot;</span><span class="token builtin class-name">:</span> executable <span class="token function">file</span> not found <span class="token keyword">in</span> <span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span> unknown.

<span class="token comment">#cmd的情况下 -l 替换了CMD [&quot;ls&quot;,&quot;-a&quot;]命令，-l不是命令所以报错！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试ENTRYPOINT</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-20-12-centos dockerfile<span class="token punctuation">]</span><span class="token comment"># vim dockerfile-cmd-entrypoint</span>
<span class="token punctuation">[</span>root@VM-20-12-centos dockerfile<span class="token punctuation">]</span><span class="token comment"># docker build -f dockerfile-cmd-entrypoint -t entrypoint-test .</span>

<span class="token punctuation">[</span>root@VM-20-12-centos dockerfile<span class="token punctuation">]</span><span class="token comment"># docker run f6f6256f3d2a</span>
<span class="token builtin class-name">.</span>
<span class="token punctuation">..</span>
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

<span class="token punctuation">[</span>root@VM-20-12-centos dockerfile<span class="token punctuation">]</span><span class="token comment"># docker run f6f6256f3d2a -l</span>
total <span class="token number">56</span>
drwxr-xr-x   <span class="token number">1</span> root root <span class="token number">4096</span> Apr  <span class="token number">6</span> 02:36 <span class="token builtin class-name">.</span>
drwxr-xr-x   <span class="token number">1</span> root root <span class="token number">4096</span> Apr  <span class="token number">6</span> 02:36 <span class="token punctuation">..</span>
-rwxr-xr-x   <span class="token number">1</span> root root    <span class="token number">0</span> Apr  <span class="token number">6</span> 02:36 .dockerenv
lrwxrwxrwx   <span class="token number">1</span> root root    <span class="token number">7</span> Nov  <span class="token number">3</span>  <span class="token number">2020</span> bin -<span class="token operator">&gt;</span> usr/bin
drwxr-xr-x   <span class="token number">5</span> root root  <span class="token number">340</span> Apr  <span class="token number">6</span> 02:36 dev
drwxr-xr-x   <span class="token number">1</span> root root <span class="token number">4096</span> Apr  <span class="token number">6</span> 02:36 etc
drwxr-xr-x   <span class="token number">2</span> root root <span class="token number">4096</span> Nov  <span class="token number">3</span>  <span class="token number">2020</span> home
lrwxrwxrwx   <span class="token number">1</span> root root    <span class="token number">7</span> Nov  <span class="token number">3</span>  <span class="token number">2020</span> lib -<span class="token operator">&gt;</span> usr/lib
lrwxrwxrwx   <span class="token number">1</span> root root    <span class="token number">9</span> Nov  <span class="token number">3</span>  <span class="token number">2020</span> lib64 -<span class="token operator">&gt;</span> usr/lib64
drwx------   <span class="token number">2</span> root root <span class="token number">4096</span> Sep <span class="token number">15</span>  <span class="token number">2021</span> lost+found
drwxr-xr-x   <span class="token number">2</span> root root <span class="token number">4096</span> Nov  <span class="token number">3</span>  <span class="token number">2020</span> media
drwxr-xr-x   <span class="token number">2</span> root root <span class="token number">4096</span> Nov  <span class="token number">3</span>  <span class="token number">2020</span> mnt
drwxr-xr-x   <span class="token number">2</span> root root <span class="token number">4096</span> Nov  <span class="token number">3</span>  <span class="token number">2020</span> opt
dr-xr-xr-x <span class="token number">124</span> root root    <span class="token number">0</span> Apr  <span class="token number">6</span> 02:36 proc
dr-xr-x---   <span class="token number">2</span> root root <span class="token number">4096</span> Sep <span class="token number">15</span>  <span class="token number">2021</span> root
drwxr-xr-x  <span class="token number">11</span> root root <span class="token number">4096</span> Sep <span class="token number">15</span>  <span class="token number">2021</span> run
lrwxrwxrwx   <span class="token number">1</span> root root    <span class="token number">8</span> Nov  <span class="token number">3</span>  <span class="token number">2020</span> sbin -<span class="token operator">&gt;</span> usr/sbin
drwxr-xr-x   <span class="token number">2</span> root root <span class="token number">4096</span> Nov  <span class="token number">3</span>  <span class="token number">2020</span> srv
dr-xr-xr-x  <span class="token number">13</span> root root    <span class="token number">0</span> Apr  <span class="token number">3</span> 02:18 sys
drwxrwxrwt   <span class="token number">7</span> root root <span class="token number">4096</span> Sep <span class="token number">15</span>  <span class="token number">2021</span> tmp
drwxr-xr-x  <span class="token number">12</span> root root <span class="token number">4096</span> Sep <span class="token number">15</span>  <span class="token number">2021</span> usr
drwxr-xr-x  <span class="token number">20</span> root root <span class="token number">4096</span> Sep <span class="token number">15</span>  <span class="token number">2021</span> var
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实战-tomcat镜像" tabindex="-1"><a class="header-anchor" href="#实战-tomcat镜像"><span>实战：Tomcat镜像</span></a></h3><p>1、准备镜像文件 tomcat压缩包</p><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220406105702057.png" alt="image-20220406105702057"></p><p>2、编写dockerfile文件，官方命名Dockerfile</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>FROM centos:7
MAINTAINET wqby<span class="token operator">&lt;</span><span class="token number">9479421</span>@qq.com<span class="token operator">&gt;</span>

COPY readme.txt /usr/local/readme.txt

ADD jdk-8u321-linux-x64.tar.gz /usr/local/
ADD apache-tomcat-9.0.62.tar.gz /usr/local/

RUN yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">vim</span>

ENV MYPATH /usr/local
WORKDIR <span class="token variable">$MYPATH</span>

ENV JAVA_HOME /usr/local/jdk1.8.0_321
ENV CLASSPATH <span class="token variable">$JAVA_HOME</span>/lib/dt.jar<span class="token punctuation">;</span><span class="token variable">$JAVA_HOME</span>/lib/tools.jar
ENV CATALINA_HOME /usr/local/apache-tomcat-9.0.62
ENV CATALINA_BASH /usr/local/apache-tomcat-9.0.62
ENV <span class="token environment constant">PATH</span> <span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token variable">$CATALINA_HOME</span>/lib:<span class="token variable">$CATALINA_HOME</span>/bin

EXPOSE <span class="token number">8080</span>

CMD /usr/local/apache-tomcat-9.0.62/bin/startup.sh <span class="token operator">&amp;&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-F</span> /usr/local/apache-tomcat-9.0.62/bin/logs/catalina.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、构建镜像</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># docker build -t diytomcat .</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4、启动镜像</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-20-12-centos tomcat<span class="token punctuation">]</span><span class="token comment"># </span>

<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">9090</span>:8080 <span class="token parameter variable">--name</span> wqbytomcat <span class="token parameter variable">-v</span> /home/wqby/tomcat/test:/usr/local/apache-tomcat-9.0.62/webapps/test <span class="token parameter variable">-v</span> /home/wqby/tomcat/tomcatlogs/:/usr/local/apache-tomcat-9.0.62/logs diytomcat  


<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">3344</span>:8080 <span class="token parameter variable">--name</span> xiaofantomcat1 <span class="token parameter variable">-v</span> /home/xiaofan/build/tomcat/test:/usr/local/apache-tomcat-9.0.37/webapps/test <span class="token parameter variable">-v</span> /home/xiaofan/build/tomcat/tomcatlogs/:/usr/local/apache-tomcat-9.0.37/logs diytomcat

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、访问测试</p><p>crul localhost:9090</p><p>6、发布项目(由于做了卷挂载，我们直接在本地就可以发布了)</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>  <span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>web-app</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://java.sun.com/xml/ns/javaee<span class="token punctuation">&quot;</span></span>
           <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
           <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://java.sun.com/xml/ns/javaee
                               http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd<span class="token punctuation">&quot;</span></span>
           <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2.5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>web-app</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsp line-numbers-mode" data-ext="jsp" data-title="jsp"><pre class="language-jsp"><code>
&lt;%@ page language=&quot;java&quot; contentType=&quot;text/html; charset=UTF-8&quot;
    pageEncoding=&quot;UTF-8&quot;%&gt;
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;utf-8&quot;&gt;
&lt;title&gt;hello. xiaofan&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
Hello World!&lt;br/&gt;
&lt;%
System.out.println(&quot;-----my test web logs------&quot;);
%&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发现：项目部署成功，可以直接访问ok!</p><p>我们以后开发的步骤：需要掌握Dockerfile的编写！我们之后的一切都是使用docker镜像来发布运行</p><h3 id="发布自己的镜像" tabindex="-1"><a class="header-anchor" href="#发布自己的镜像"><span>发布自己的镜像</span></a></h3><blockquote><p>dockerhub</p></blockquote><p>1、地址 hub.docker.com 注册自己的账号</p><p>2、确定这个账号可以登录</p><p>3、在我们服务器上提交自己的镜像</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> login <span class="token parameter variable">-u</span> <span class="token number">9479421</span>
Password:***
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>4、登录完毕后就可以提交镜像了，就是一部docker push</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># push自己的镜像到服务器上！</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker push diytomcat</span>
Using default tag: latest
The push refers to repository <span class="token punctuation">[</span>docker.io/library/diytomcat<span class="token punctuation">]</span>
464716bcc6b3: Preparing 
82db2e577ac8: Preparing 
470424db6cff: Preparing 
5d1d91b017be: Preparing 
174f56854903: Preparing 
denied:requested access to the resource is denied <span class="token comment">#咀嚼</span>

<span class="token comment"># push镜像的问题？</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker push wqby/diytomcat:1.0</span>
The push refers to repository <span class="token punctuation">[</span>docker.io/wqby/diytomcat<span class="token punctuation">]</span>
An image does not exist locally with the tag: wqby/diytomcat

<span class="token comment">#解决，增加一个tag</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker tag 65aff8870cae wqby/tomcat:1.0</span>
<span class="token comment">#必须保证用户名和dockerhub用户名一样才可以提交成功</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker push wqby/tomcat:1.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220406150620108.png" alt="image-20220406150620108"></p><p>提交的时候也是按照镜像的层级来进行提交的</p><blockquote><p>阿里云镜像服务器上</p></blockquote><p>1、登录阿里云</p><p>2、找到容器镜像服务</p><p>3、创建命名空间</p><p>4、创建容器镜像</p>`,272),d=n(`<li><p><strong>登录腾讯云容器镜像服务 Docker Registry</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker login ccr.ccs.tencentyun.com --username=100016474133
复制
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),u=n(`<p><strong>从 Registry 拉取镜像</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker pull ccr.ccs.tencentyun.com/wqby/wqby-test:[tag]
复制
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),m={href:"https://docs.docker.com/engine/reference/commandline/pull/",target:"_blank",rel:"noopener noreferrer"},v=n(`<li><p><strong>向 Registry 中推送镜像</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker tag [imageId] ccr.ccs.tencentyun.com/wqby/wqby-test:[tag]
复制
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker push ccr.ccs.tencentyun.com/wqby/wqby-test:[tag]
复制
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),b=n(`<h2 id="docker网络" tabindex="-1"><a class="header-anchor" href="#docker网络"><span>Docker网络</span></a></h2><h3 id="理解docker0" tabindex="-1"><a class="header-anchor" href="#理解docker0"><span>理解Docker0</span></a></h3><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220406161954391.png" alt="image-20220406161954391"></p><p>三个网络</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 问题，docker是如何处理容器的网络访问的？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-20-12-centos /<span class="token punctuation">]</span><span class="token comment"># docker run -d -P --name tomcat01 tomcat</span>

<span class="token comment">#查看容器的内部网络地址 ip addr  </span>
<span class="token comment">#找不到ip命令解决： apt update &amp;&amp; apt install -y iproute2</span>

<span class="token punctuation">[</span>root@VM-20-12-centos /<span class="token punctuation">]</span><span class="token comment"># docker exec -it tomcat01 ip addr</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
<span class="token number">102</span>: eth0@if103: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state UP group default 
    link/ether 02:42:ac:11:00:02 brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">0</span>
    inet <span class="token number">172.17</span>.0.2/16 brd <span class="token number">172.17</span>.255.255 scope global eth0
       valid_lft forever preferred_lft forever
       
<span class="token comment"># 思考，linux 能不能ping通容器内部！</span>
<span class="token punctuation">[</span>root@VM-20-12-centos /<span class="token punctuation">]</span><span class="token comment"># ping 172.17.0.2</span>
PING <span class="token number">172.17</span>.0.2 <span class="token punctuation">(</span><span class="token number">172.17</span>.0.2<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">172.17</span>.0.2: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.040</span> ms
<span class="token number">64</span> bytes from <span class="token number">172.17</span>.0.2: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.046</span> ms
<span class="token number">64</span> bytes from <span class="token number">172.17</span>.0.2: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.038</span> ms

<span class="token comment"># linux 可以ping通docker 容器内部</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>原理</p></blockquote><p>1、我们每启动一个一个docker容器，docker就会给docker容器分配一个ip，我们只要安装了docker 0，就会有一个网卡</p><p>桥接模式，使用的技术是evth-pair技术！</p><p>再次测试ip addr</p><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220406174433667.png" alt="image-20220406174433667"></p><p>2、在添加一个 docker run -d -P --name tomcat02 tomcat，发现又多了一堆网卡！</p><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220406174659114.png" alt="image-20220406174659114"></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 我们发现这个容器带来网卡，都是一堆堆的</span>
<span class="token comment">#evth-pair 就是一堆的虚拟设备接口，他们都是成对出现的，一段连着协议，一段彼此相连</span>
<span class="token comment"># 正因为有这个特征，evth-paire 充当一个桥梁</span>
<span class="token comment"># OpenStac，Docker容器之间的连接，OVS的连接，都是使用evth-pair技术</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、我们启动了两个项目，测试下tomcat01和tomcat02是否可以ping通</p><p>解决容器内没有ping命令：</p><ol><li>apt-get update</li><li>apt install net-tools # ifconfig</li><li>apt install iputils-ping # ping</li></ol><p>所有的容器不指定网络的情况下，都是docker0路由的，docker会给我们的容器分配一个默认的可用IP</p><p>Docker中的所有网络接口都是虚拟的。虚拟的转发效率高！（内网传递文件！）</p><p>只要容器删除，对应网桥一对就没了！</p><h3 id="link" tabindex="-1"><a class="header-anchor" href="#link"><span>--link</span></a></h3><blockquote><p>思考一个场景，我们编写了一个微服务，database url = ip;项目不重启，数据库ip换掉了，我们希望可以处理这个东西，可以通过名字来访问容器？</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it tomcat02 ping tomcat01</span>
ping: tomcat01: Name or <span class="token function">service</span> not known
<span class="token comment"># 如何可以解决呢？</span>
<span class="token comment"># 通过 --linke 既可以解决了网络连通问题</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker run -d -P --name tomcat03 --link tomcat02 tomcat     </span>
783470014d80e69f425b7304099737e09d848a6bd8c798fadc7855ce97c30a88                         
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it tomcat03 ping tomcat02</span>
<span class="token number">64</span> bytes from tomcat02 <span class="token punctuation">(</span><span class="token number">172.17</span>.0.3<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.104</span> ms
<span class="token number">64</span> bytes from tomcat02 <span class="token punctuation">(</span><span class="token number">172.17</span>.0.3<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.052</span> ms
<span class="token number">64</span> bytes from tomcat02 <span class="token punctuation">(</span><span class="token number">172.17</span>.0.3<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.054</span> ms
<span class="token number">64</span> bytes from tomcat02 <span class="token punctuation">(</span><span class="token number">172.17</span>.0.3<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">4</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.054</span> ms
、
<span class="token comment"># 反向不可以</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it tomcat02 ping tomcat03</span>
ping: tomcat03: Name or <span class="token function">service</span> not known
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实这个tomcat03就是在本地配置了tomcat02的配置？</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>查看hosts配置，在这里原理发现
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it tomcat03 cat /etc/hosts</span>
<span class="token number">127.0</span>.0.1       localhost
::1     localhost ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
<span class="token number">172.17</span>.0.3      tomcat02 3ea3ea7afe5d <span class="token comment">#在这里</span>
<span class="token number">172.17</span>.0.4      783470014d80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>--link就是我们在hosts配置中增加了172.17.0.3 tomcat02 3ea3ea7afe5d</p><p>如今不建议使用--linke了！</p><p>自定义网络！不适用docker0！</p><p>docker0问题：他不支持容器名连接访问！</p><h3 id="自定义网络" tabindex="-1"><a class="header-anchor" href="#自定义网络"><span>自定义网络</span></a></h3><blockquote><p>查看所有的docker网络</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker network ls                                               </span>
NETWORK ID     NAME      DRIVER    SCOPE                                                 
572735e05883   bridge    bridge    <span class="token builtin class-name">local</span>                                                 
5e4e20ed779c   <span class="token function">host</span>      <span class="token function">host</span>      <span class="token builtin class-name">local</span>                                                 
abdf61d3b437   none      null      <span class="token builtin class-name">local</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>网络模式</strong></p><p>bridge：桥接 docker(默认，自己创建也使用bridge模式) 搭桥 0.1 0.2 0.3</p><p>none：不配置网络</p><p>host: 和宿主机共享网络</p><p>container：容器内网络连通！（用得少！）</p><p><strong>测试</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#我们直接启动的命令 --net bridge，而这个就是我们的docker0</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-P</span> <span class="token parameter variable">--name</span> tomcat01 tomcat
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-P</span> <span class="token parameter variable">--name</span> tomcat01 <span class="token parameter variable">--net</span> bridge tomcat

<span class="token comment">#docker0特点，默认，域名不能访问  --linke 可以打通连接！</span>

<span class="token comment">#我们可以自定义一个网络！</span>
<span class="token comment"># --driverbridge</span>
<span class="token comment"># --subnet 192.168.0.0/16</span>
<span class="token comment"># --gateway 192.168.0.1 </span>
<span class="token function">docker</span> network create <span class="token parameter variable">--driver</span> bridge <span class="token parameter variable">--subnet</span> <span class="token number">192.168</span>.0.0/16 <span class="token parameter variable">--gateway</span> <span class="token number">192.168</span>.0.1 mynet

<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker network ls</span>
NETWORK ID     NAME      DRIVER    SCOPE
572735e05883   bridge    bridge    <span class="token builtin class-name">local</span>
5e4e20ed779c   <span class="token function">host</span>      <span class="token function">host</span>      <span class="token builtin class-name">local</span>
12de10c8ed5a   mynet     bridge    <span class="token builtin class-name">local</span>
abdf61d3b437   none      null      <span class="token builtin class-name">local</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们的网络就建好了</p><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220407104648703.png" alt="image-20220407104648703"></p><p>启动两个tomcat,再次查看网络情况</p><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2NoZW5nY29kZXgvY2xvdWRpbWcvbWFzdGVyL2ltZy9pbWFnZS0yMDIwMDUxNjE5MTg0NDI0MC5wbmc" alt="img"></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#再次测试ping连接</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> tomcat-net-01 <span class="token function">ping</span> <span class="token number">192.168</span>.0.3
PING tomcat-net-02 <span class="token punctuation">(</span><span class="token number">192.168</span>.0.3<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from tomcat-net-02.mynet <span class="token punctuation">(</span><span class="token number">192.168</span>.0.3<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.048</span> ms
<span class="token number">64</span> bytes from tomcat-net-02.mynet <span class="token punctuation">(</span><span class="token number">192.168</span>.0.3<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.053</span> ms
<span class="token number">64</span> bytes from tomcat-net-02.mynet <span class="token punctuation">(</span><span class="token number">192.168</span>.0.3<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.045</span> ms

<span class="token comment">#现在不适用--link也可以ping名字了！</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> tomcat-net-02 <span class="token function">ping</span> tomcat-net-01

<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> tomcat-net-01 <span class="token function">ping</span> tomcat-net-02
PING tomcat-net-02 <span class="token punctuation">(</span><span class="token number">192.168</span>.0.3<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from tomcat-net-02.mynet <span class="token punctuation">(</span><span class="token number">192.168</span>.0.3<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.048</span> ms
<span class="token number">64</span> bytes from tomcat-net-02.mynet <span class="token punctuation">(</span><span class="token number">192.168</span>.0.3<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.053</span> ms
<span class="token number">64</span> bytes from tomcat-net-02.mynet <span class="token punctuation">(</span><span class="token number">192.168</span>.0.3<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.045</span> ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们自定义的网络docker都已经帮我们维护好了对应的关系，推荐我们平时这样使用网络！</p><p>好处：</p><p>redis - 不同的集群使用不同的网络，保证集群是安全和健康的</p><p>mysql - 不同的集群使用不同的网络，保证集群是安全和健康的</p><h3 id="网络连通" tabindex="-1"><a class="header-anchor" href="#网络连通"><span>网络连通</span></a></h3><p>docker network connect [options] network container</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 测试打通 tomcat01 -mynet

# 连通之后就是将tomcat01 放到了 mynet 网络下？

# 一个容器两个ip地址！ 阿里云服务 公网ip 私网ip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 01 连通ok
docker exec -it tomcat01 ping tomcat-net-01

# 02打不通
docker exec -it tomcat02 ping tomcat-net-01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结论：假设要跨网络操作别人，就需要使用docker network connect 连通！。。。</p><h3 id="部署redis集群" tabindex="-1"><a class="header-anchor" href="#部署redis集群"><span>部署Redis集群</span></a></h3><p>妈的学不会。放弃</p><h2 id="springboot微服务打包docker镜像" tabindex="-1"><a class="header-anchor" href="#springboot微服务打包docker镜像"><span>SpringBoot微服务打包Docker镜像</span></a></h2><p>1、构建springboot项目</p><p>2、打包应用</p><p>3、编写dockerfile</p><p>4、构建镜像</p><p>5、发布运行！</p>`,61);function k(g,q){const e=l("ExternalLinkIcon");return i(),c("div",null,[r,s("ul",null,[d,s("li",null,[u,s("p",null,[a("其中 [tag] 请根据您需要拉取镜像的具体版本镜像替换，如 latest。更多命令说明，请参看官方文档："),s("a",m,[a("docker pull"),o(e)])])]),v]),b])}const f=t(p,[["render",k],["__file","Docker学习笔记.html.vue"]]),x=JSON.parse('{"path":"/view/note/%E4%B8%AD%E9%97%B4%E4%BB%B6/Docker%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html","title":"Docker学习笔记","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Docker概述","slug":"docker概述","link":"#docker概述","children":[{"level":3,"title":"Docker为什么出现？","slug":"docker为什么出现","link":"#docker为什么出现","children":[]},{"level":3,"title":"Docker的历史","slug":"docker的历史","link":"#docker的历史","children":[]},{"level":3,"title":"Docker能干嘛","slug":"docker能干嘛","link":"#docker能干嘛","children":[]}]},{"level":2,"title":"Docker安装","slug":"docker安装","link":"#docker安装","children":[{"level":3,"title":"Docker的基本组成","slug":"docker的基本组成","link":"#docker的基本组成","children":[]},{"level":3,"title":"安装Docker","slug":"安装docker","link":"#安装docker","children":[]},{"level":3,"title":"阿里云镜像加速","slug":"阿里云镜像加速","link":"#阿里云镜像加速","children":[]},{"level":3,"title":"底层原理","slug":"底层原理","link":"#底层原理","children":[]}]},{"level":2,"title":"Docker的常用命令","slug":"docker的常用命令","link":"#docker的常用命令","children":[{"level":3,"title":"帮助命令","slug":"帮助命令","link":"#帮助命令","children":[]},{"level":3,"title":"镜像命令","slug":"镜像命令","link":"#镜像命令","children":[]},{"level":3,"title":"容器命令","slug":"容器命令","link":"#容器命令","children":[]},{"level":3,"title":"常用其他命令","slug":"常用其他命令","link":"#常用其他命令","children":[]},{"level":3,"title":"作业练习","slug":"作业练习","link":"#作业练习","children":[]},{"level":3,"title":"可视化","slug":"可视化","link":"#可视化","children":[]}]},{"level":2,"title":"Docker镜像讲解","slug":"docker镜像讲解","link":"#docker镜像讲解","children":[{"level":3,"title":"镜像是什么","slug":"镜像是什么","link":"#镜像是什么","children":[]},{"level":3,"title":"Docker镜像加载原理","slug":"docker镜像加载原理","link":"#docker镜像加载原理","children":[]},{"level":3,"title":"Commit镜像","slug":"commit镜像","link":"#commit镜像","children":[]}]},{"level":2,"title":"容器数据卷","slug":"容器数据卷","link":"#容器数据卷","children":[{"level":3,"title":"什么是容器数据卷","slug":"什么是容器数据卷","link":"#什么是容器数据卷","children":[]},{"level":3,"title":"使用数据卷","slug":"使用数据卷","link":"#使用数据卷","children":[]},{"level":3,"title":"实战：安装MySQL","slug":"实战-安装mysql","link":"#实战-安装mysql","children":[]},{"level":3,"title":"具名和匿名挂载","slug":"具名和匿名挂载","link":"#具名和匿名挂载","children":[]},{"level":3,"title":"初识Dockerfile","slug":"初识dockerfile","link":"#初识dockerfile","children":[]},{"level":3,"title":"数据卷容器","slug":"数据卷容器","link":"#数据卷容器","children":[]}]},{"level":2,"title":"DockerFile","slug":"dockerfile","link":"#dockerfile","children":[{"level":3,"title":"DockerFile介绍","slug":"dockerfile介绍","link":"#dockerfile介绍","children":[]},{"level":3,"title":"DockerFile构建过程","slug":"dockerfile构建过程","link":"#dockerfile构建过程","children":[]},{"level":3,"title":"DockerFile的指令","slug":"dockerfile的指令","link":"#dockerfile的指令","children":[]},{"level":3,"title":"实战测试","slug":"实战测试","link":"#实战测试","children":[]},{"level":3,"title":"实战：Tomcat镜像","slug":"实战-tomcat镜像","link":"#实战-tomcat镜像","children":[]},{"level":3,"title":"发布自己的镜像","slug":"发布自己的镜像","link":"#发布自己的镜像","children":[]}]},{"level":2,"title":"Docker网络","slug":"docker网络","link":"#docker网络","children":[{"level":3,"title":"理解Docker0","slug":"理解docker0","link":"#理解docker0","children":[]},{"level":3,"title":"--link","slug":"link","link":"#link","children":[]},{"level":3,"title":"自定义网络","slug":"自定义网络","link":"#自定义网络","children":[]},{"level":3,"title":"网络连通","slug":"网络连通","link":"#网络连通","children":[]},{"level":3,"title":"部署Redis集群","slug":"部署redis集群","link":"#部署redis集群","children":[]}]},{"level":2,"title":"SpringBoot微服务打包Docker镜像","slug":"springboot微服务打包docker镜像","link":"#springboot微服务打包docker镜像","children":[]}],"git":{},"filePathRelative":"view/note/中间件/Docker学习笔记.md","excerpt":"\\n<h2>Docker概述</h2>\\n<h3>Docker为什么出现？</h3>\\n<p>一款产品：开发---上线 两套环境！应用环境，应用配置！</p>\\n<p>开发 ... 运维。 问题：我在我的电脑上可以运行！版本更新，导致服务不可用！对于运维来说，考验就十分大</p>\\n<p>环境配置是十分的麻烦，每一个机器都要部署环境（集群Redis、ES、hadoop……）! 费时费力。</p>\\n<p>发布一个项目 jar( Redis Mysql jdk ES ) war</p>\\n<p>Windows，最后发布到Linux !</p>\\n<p>传统：开发jar，运维来做</p>\\n<p>现在：开发打包部署上线，一套流程做完！</p>"}');export{f as comp,x as data};

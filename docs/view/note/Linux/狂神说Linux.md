# 狂神说Linux

## 1、对Linux目录的解释

 - /bin：bin是Binary的缩写，这个目录存放着最经常使用的命令。
 - /boot：这里存放的是启动Linux时使用的一些核心文件，包括一些连接文件以及镜像文件。(不要动)
 - /dev：dev是Device(设备)的缩写，存放的是Linux的外部设备，在Linux中访问设备的方式和访问文件的方式是相同的。
 - /etc：这个目录用来存放所有的系统管理所需要的配置文件和子目录。
 - /home：用户的主目录，在Linux中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的。
 - /lib：这个目录里存放着系统最基本的动态连接共享库，其作用类似于Windows里的DLL文件。(不要动)
 - /lost+found：这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件。(存放突然关机的一些文件)
 - /media：Linux系统会自动识别一些设备，例如U盘、光驱等等，当识别后，Linux会把识别的设备挂载到这个目录下。
 - /mnt：系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将光驱挂载在/mnt/上，然后进入该目录就可以查看光驱里的内容了。(我们后面会把一些本地文件挂载在这个目录下)
 - /opt：这是给主机额外安装软件所摆放的目录。比如你安装一个ORACLE数据库则就可以放到这个目录下。默认是空的。
 - /proc：这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。(不用管)
 - /root：该目录为系统管理员，也称作超级权限者的用户主目录。
 - /sbin：s就是Super User的意思，这里存放的是系统管理员使用的系统管理程序。
 - /srv：该目录存放一些服务启动之后需要提取的数据。
 - /sys：这是Linux2.6内核的一个很大的变化。该目录下安装了2.6内核中新出现的一个文件系统sysfs。
 - /tmp：这个目录是用来存放一些临时文件的。
 - /usr：这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于windows下的program files目录。
 - /usr/bin：系统用户使用的应用程序。
 - /usr/sbin：超级用户使用的比较高级的管理程序和系统守护程序。
 - /usr/src：内核源代码默认的放置目录。
 - /var：这个目录中存放着在不断扩充着的东西，我们习惯将那些经常被修改的目录放在这个目录下。包括各种日志文件。
 - /run：是一个临时文件系统，存储系统启动以来的信息。当系统重启时，这个目录下的文件应该被删掉或清除。
 - /www：存放服务器网站的相关的资源，环境，网站的项目。

## 2、Linux常用的基本命令

**sync  #  将数据由内存同步到硬盘中（最好在关机前操作）**

**关机（系统的关机、重启以及登出）**

shutdown  #  关机指令

shutdown -h 10  #  10分钟后关机

shutdown -h now  #  立刻关机

shutdown -h 20:25  #  今晚20:25关机

shutdown -r  now  #  系统立马重启

shutdown -r +10  #  系统十分钟后重启

reboot  #  重启  等同于shutdown -r now

halt  #  关闭系统  等同于shutdown -h now 和 poweroff

**目录管理**

ls：列出目录
-a参数：all，查看全部的文件，包括隐藏文件
-l参数：列出所有的文件，包含文件的属性和权限，但不包括隐藏文件

cd：切换目录
cd 目录名（绝对路径都是以 / 开头，相对路径，对于当前目录寻找）

pwd：显示当前用户所在的目录

mkdir：创建一个目录
mkdir -p 创建多级目录

rmdir：仅能删除空的目录，如果下面存在文件，需要先删除文件；递归删除多个目录 -p

cp：复制文件或目录

rm：移出文件或目录
-f：忽略不存在的文件，不会出现警告，强制删除
-r：递归删除目录
-i：互动，删除时询问是否删除

rm -rf：删除所有系统的文件，删库跑路就是这样操作的

mv：移动文件或目录、重命名文件
-f：强制
-u：只替换更新过的文件

**Windows电脑查看IP地址信息：**

```bash
ipconfig
```

**Linux系统查看网络配置：**

```bash
ifconfig
```

```bash
网络配置目录：cd etc/sysconfig/network-scripts	centOS7系统
```

```bash
修改主机名：hostname 想修改的名字
```

`ln`：创建链接
`touch`：创建文件
`echo`：输入字符串

## 3、Linux基本属性

**在Linux中的第一个字符代表这个文件是目录、文件或链接文件等等**

- 当为 [ **d** ] 则是目录
- 当为 [ **-** ] 则是文件
- 若是 [ **l** ] 则表示为链接文档(link file)
- 若是 [ **b** ] 则表示为装置文件里面的可供储存的接口设备(可随机存取装置)
- 若是 [ **c** ] 则表示为装置文件里面的串行端口设备，例如键盘、鼠标(一次性读取装置)

接下来的字符中，以三个为一组，且均为 [ **rwx** ] 三个参数的组合，其中 [ **r** ] 代表可读(read)、[ **w** ] 代表可写(write)、[ **x** ] 代表可执行(execute)；要注意的是，这三个权限的位置不会改变，如果没有权限，就会出现减号 [ **-** ] 而已。

每个文件的属性由左边第一部分的10个字符来确定（如下图）
![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/3a45cfab717e482bbac28df8c4488453.png)
**修改文件属性**

**1、chgrp：更改文件属组**

```bash
chgrp [-R] 属组名 文件名
```

**2、chown：更改文件属主，也可以同时更改文件属组**

```bash
chown [-R] 属主名 文件名
chown [-R] 属主名: 属组名 文件名
```

**3、chmod：更改文件9个属性(必须掌握)**

遇到**你没有权限操作此文件**问题时，可以用chmod来解决

```bash
chmod [-R] xyz 文件或目录
```

Linux文件属性有两种设置方法，一种是数字（常用的是数字），一种是符号。

Linux文件的基本权限就有九个，分别是owner/group/others三种身份各有自己的read/write/execute权限。

刚刚上面提到的数据：文件的权限字符为︰『-rwxrwxrwx』，这九个权限是三个三个一组的！其中，我们可以使用数字来代表各个权限，各权限的分数对照表如下：

```bash
r:4		w:2		x:1

可读可写可执行	rwx		7
可读可写不可执行	rw-		6

chmod 777	文件赋予所有用户可读可写可执行
```

## 4、文件内容查看

**Linux系统中使用以下命令来查看文件的内容：**

 - cat 由第一行开始显示文件内容，用来读文章或者读取配置文件
 - tac 从最后一行开始显示，可以看出 tac 是 cat 的倒写
 - nl 显示的时候，顺着输出行号
 - more 一页一页的显示文件内容（空格代表翻页，enter代表向下看一行，:f 是行号）
 - less 与 more 类似，但是比more更好的是，它可以往前翻页（空格代表翻页，上下键代表翻动页面；退出使用 q 命令；查找字符串：/要查找的字符，向上查询使用：?要查询的字符串，n 继续搜寻下一个，N 搜寻上一个）
 - head 只看头几行（通过 -n 参数来控制显示几行）
 - tail 只看尾部几行（通过 -n 参数来控制显示几行）

## 5、Vim编辑器

**三种使用模式**

基本上vi/vim 共分为三种模式，分别是命令模式(Command mode)，输入模式(Insert mode)和底线命令模式(Lastline mode)。这三种模式的作用分别是：

**命令模式：**
用户刚刚启动vi/vim，便进入了命令模式。
此状态下敲击键盘动作会被Vim识别为命令，而非输入字符。比如我们此时按下i，并不会输入一个字符，i被当作了一个命令。
以下是常用的几个命令：

 - **i** 切换到输入模式，以输入字符
 - **x** 删除当前光标所在处的字符
 - **:** 切换到底线命令模式，以在最底一行输入命令。如果是编辑模式，需要先退出编辑模式！**ESC**

**输入模式：**
在命令模式下按下i就进入了输入模式，在输入模式中，可以使用以下按键：

 - **字符按键以及SHIFT组合**，输入字符
 - **ENTER**，回车键，换行
 - **BACK SPACE**，退格键，删除光标前一个字符
 - **DELETE**，删除键，删除光标后一个字符
 - **方向键**，在文本中移动光标
 - **HOME/END**，移动光标到行首/行尾
 - **Page Up/Page Down**，上下翻页
 - **Insert**，切换光标为输入/替换模式，光标将变成竖线/下划线
 - **ESC**，退出输入模式，切换到命令模式

**底线命令模式：**
在命令模式下按下 **:** (英文冒号)就进入了底线命令模式。光标就移动到了最底下，就可以在这里输入一些底线命令了。常用的底线命令有：

 - **q** 退出程序
 - **w** 保存文件

![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/b5130d0b605b4c648528a94d82869f3c.png)
![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/5bdd1780aa924dc0bef73f25b350e2bb.png)
![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/3bd84e90384847cb9865bab78774cf84.png)
![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/f648873b6ff3435e935b16cd8d558faa.png)
![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/b4d6ccf042734979b36d7bdc88db8c76.png)
![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/65d26e3feb554090a3658a8a111107ee.png)

## 6、账号管理

```bash
useradd	添加用户
```

useradd -选项 用户名
-m：自动创建这个用户的主目录
-G：给用户分配组

```bash
userdel	删除用户
```

userdel -r 用户名 删除用户的时候将他的目录页一并删掉

```bash
usermod	修改用户
```

修改完毕之后查看配置文件即可！

**切换用户：**

  1. 切换用户的命令为：su username【username是你的用户名哦】
  2. 从普通用户切换到root用户，还可以使用命令：sudo su
  3. 在终端输入exit或logout或使用快捷方式ctrl+d，可以退回到原来用户，其实ctrl+d也是执行的exit命令
  4. 在切换用户时，如果想在切换用户之后使用新用户的工作环境，可以在su和username之间加-，例如：【su - root】

**$表示普通用户**
**#表示超级用户，也就是root用户**

**我们一般通过root创建用户的时候，需要配置密码！**

```bash
passwd 用户名
```

**锁定用户：**

```bash
passwd -l 用户名	锁定之后这个用户就不能登录了
passwd -d 用户名	将密码清空也不能登录
```

## 7、用户组管理

**属主、属组**

用户组的管理涉及用户组的添加、删除和修改。**组的增加，删除和修改实际上就是对/etc/group文件的更新**

创建一个用户组：groupadd；创建完用户组之后可以得到一个组的id，这个id是可以指定的，如果不指定就是自增1

```bash
groupadd -g 指定id 用户组名
```

删除用户组：groupdel

```bash
groupdel 用户组名
```

修改用户组的权限信息和名字：groupmod

```bash
groupmod -g 想修改的id -n 想修改的组名 原来的组名
```

**etc/passwd文件是用户管理工作涉及的最重要的一个文件**

```bash
用户名:口令(登录密码，我们不可见):用户标识号:组标识号:注释性描述:主目录:登录Shell
```

![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/39112b87d9c84997b346a0ee5ec4b512.png)

## 8、磁盘管理

```bash
df (列出文件系统整体的磁盘使用量)
du (检查磁盘空间使用量)
```

![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/aaae4682998342d9bd4e47d70adf7640.png)
![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/d8e87be2718b440096aec0e6ad557194.png)

## 9、进程管理

1、在Linux中，每一个程序都是有自己的一个进程，每一个进程都有一个id号
2、每一个进程，都会有一个父进程
3、进程可以有两种存在方式：前台和后台运行
4、一般的话服务都是后台运行的，基本的程序都是前台运行的

**常用命令：**

**ps 查看当前系统中正在执行的各种进程的信息**

 - -a 显示当前终端运行的所有进程信息
 - -u 以用户的信息显示进程
 - -x 显示后台运行进程的参数

```bash
# ps -aux 查看所有的进程
ps -aux|grep mysql

# | 在Linux这个叫做管道符
# grep 查找文件中符合条件的字符串
```

**ps -ef：可以看到父进程的信息**

```bash
ps -ef|grep mysql 看父进程我们一般可以通过目录树结构来查看

# 进程树：
pstree -pu
	-p 显示父id
	-u 显示用户组
```

**结束进程**

```bash
kill -9 进程的id
```

## 10、环境安装

安装软件一般有三种方式：

 - rpm（用JDK来演示）
 - 解压缩（用tomcat来演示）
 - yum在线安装（用docker来演示）

### 1.安装JDK：

```bash
检测当前系统是否存在Java环境:	java -version

安装JDK:
rpm -ivh rpm包

卸载JDK:
rpm -qa|grep jdk	# 检测JDK版本信息
rpm -e --nodeps 下载的JDK
```

**安装JDK：**
![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/30fc9c3fa0dd41818bd40c8d12e963e4.png)
**卸载JDK**
![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/e3eb0d36bc584c699936ea33b940f06d.png)
配置环境变量：`etc/profile` 在文件的最后增加Java配置

```bash
export JAVA_HOME=/usr/java/jdk1.8.0_321-amd64
export CLASSPATH=.:$JAVA_HOME/lib:$JAVA_HOME/jre/lib
export PATH=$PATH:$JAVA_HOME/bin:$JAVA_HOME/jre/bin:$PATH
```

让这个配置文件生效：`source /etc/profile`

```bash
# 开启防火墙端口
firewall-cmd --zone=public --add-port=端口号/tcp --permanent

# 重启防火墙
systemctl restart firewalld.service

# 查看所有开启的端口，如果是阿里云，需要配置安全组规则！
firewall-cmd --list-ports
```

### 2.安装Tomcat

1、下载tomcat，官网下载即可 `apache-tomcat-9.0.58.tar.gz`
2、解压这个文件

```bash
tar -zxvf apache-tomcat-9.0.58.tar.gz
```

![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/38428661a6da4abd8a809cd5b1e86c96.png)
3、启动tomcat测试！

```bash
# 执行
./startup.sh
# 停止
./shutdown.sh
```

开启tomcat：
![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/79c0e3d825824de7a60fcbf847f88d6f.png)
如果防火墙8080端口开了并且阿里云安全组也开放了这个时候就可以直接访问远程了！

```bash
# 查看firewall服务状态
systemctl status firewalld

# 开启、重启、关闭、firewalld.service服务
# 开启
service firewalld start
# 重启
service firewalld restart
# 关闭
service firewalld stop

# 查看防火墙规则
firewall-cmd --list-all # 查看全部信息
firewall-cmd --list-ports # 只看端口信息

# 开启端口
开端口命令：firewall-cmd --zone=public --add-port=80/tcp --permanent
重启防火墙：systemctl restart firewalld.service

命令含义：
--zone #作用域
--add-port=80/tcp #添加端口，格式为：端口/通讯协议
--permanent #永久生效，没有此参数重启后失效
```

域名解析后，如果端口是 80(http) 或者 443(https) 可以直接访问，如果是 8080 9000，就需要通过Apache或者Nginx做一下反向代理即可！

### 3.Docker（yum安装）

>基于 CentOS 7 安装

1、官网安装参考手册：[https://docs.docker.com/install/linux/docker-ce/centos/](https://docs.docker.com/install/linux/docker-ce/centos/)

2、检测CentOS 7

```bash
[root@xiaobo bin]# cat /etc/redhat-release
CentOS Linux release 7.6.1810 (Core) 
```

3、安装准备环境

```bash
yum -y install 包名
```

>yum安装gcc相关

```bash
yum -y install gcc
yum -y install gcc-c++
```

4、卸载旧版本

```bash
yum remove docker \
	docker-client \
	docker-client-latest \
	docker-common \
 	docker-latest \
	docker-latest-logrotate \
	docker-logrotate \
	docker-engine
```

5、安装需要的软件包

```bash
yum install -y yum-utils
```

6、设置stable镜像仓库

```bash
# 推荐使用国内的
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

7、更新yum软件包索引

```bash
yum makecache fast
```

8、安装Docker CE

```bash
yum -y install docker-ce docker-ce-cli containerd.io
```

9、启动docker

```bash
systemctl start docker
```

10、测试

```bash
docker version

docker run hello-world

docker images
```
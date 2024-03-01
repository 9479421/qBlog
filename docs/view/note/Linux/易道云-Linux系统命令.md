

# Linux系统精讲

## Linux简介

### 系统介绍

![image-20230524115916655](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524115916655.png)

族谱

![image-20230524115933548](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524115933548.png)

知名的Linux系统

![image-20230524115948261](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524115948261.png)

### 为什么要学习Linux

Linux 系统在服务器市场的占有率（2016 年）

![image-20230524115811461](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524115811461.png)

世界上 500 个最快的超级计算机 90％以上运行 Linux 发行版或变种，包括最快的前 10名超级计算机运行的都是基于 Linux 内核的操作系统。Linux 也广泛应用在嵌入式系统上，如手机（Mobile Phone）、平板电脑（Tablet）、路由器（Router）、电视（TV）和电子游戏机等。在移动设备上广泛使用的 Android 操作系统就是创建在 Linux 内核之上。

### Linux的优点

1. 开源免费、可自行修改，对其他开源软件兼容性良好
2. 多用户访问友好、权限管理方便快捷
3. 内存管理优秀，可以长期连续运行，系统占用内存低
4. 工具功能库完善，部署安装方便



## Linux基本命令

### ls命令

命令 ls 是 list 的缩写

其作用是列出指定位置的文件和文件夹

如果没有指定，默认是列出当前位置的文件或者文件夹

常用的参数有

**-a** **列出所有的文件或者文件夹**

在 Linux 系统里面，以 . 开头的文件或者文件夹，一般会被默认视为隐藏的如果想要查看这些隐藏文件或者文件夹，最好使用-a 参数

**-l** **列出详细信息**

默认 ls 只显示名字，并不显示详细信息

加了该参数后，除了会显示名称以外，还会显示文件的权限、所属用户、分组、大小、修改

日期

**-h** **增加可读性**

默认文件是按照字节为单位显示大小的

加了这个参数后，会附带 K、M、G、T 等大小后缀

K 表示千字节 M 表示兆字节 G 表示 1024 兆 T 表示 1024G

虽然精准度下降了，但是更容易阅读

**-R** **递归访问**

默认是显示当前目录下的文件和文件夹

带上 R 参数后，如果当前目录下有其他文件夹

则会将该文件夹下面的文件和文件夹也显示出来

所以该参数会显示指定位置下的所有文件和文件夹

**-Q** **文件名用双引号包裹**

这个参数是为了防止某些文件或者文件夹的末尾是空格字符

这样，可以通过双引号，看到文件名实际的长度

### echo命令

**显示字符串**

echo hello world

或者 echo “hello world”

**显示转义字符**

echo \\” 或者 \\’  \\`

**显示变量**

echo $PATH

**显示换行** \\ **不换行**

echo -e “\n”换行

echo -e “\c”不换行

**显示原样字符串**

echo '$PATH'

**显示命令结果**

echo `data`

### cd命令

cd 目标路径

change directory

路径可以是绝对路径，也可以是相对路径除此之外，还有一些特别的符号

比如.表示当前目录

比如..表示上一级目录（也就是父目录）

比如~表示当前用户的用户目录

注意在 root 用户和普通用户条件下，这个符号是有不同含义的

普通用户~一般是/home/用户名文件夹

但是 root 用户对应的~是/root 文件夹

### head命令

**-c n** **显示头部的指定** **n** **个字符**

**-n x** **显示头部的指定的** **x** **行**

**-v** **显示文件名**

**-q** **不显示文件名（默认）**

### tail命令

简单命令

显示当前目录 pwd

清空窗口 clear

**>**将左边命令的输出，**输入**到右边的文件或者命令

如果右边的文件不存在，则创建一个

**>>**将左边命令的输出，**追加**到右边的文件

如果右边的文件不存在，则创建一个

**-f** **可以不断的更新尾部内容**

**-n** **显示尾部指定行数的内容**

**-c** **显示尾部指定字节的内容**

**-v** **显示文件名**

**-q** **不显示文件名（默认）**

### ps命令

所有进程都是 init 进程的子进程或者孙进程

**-Al** **显示所有进程的详情和进程名称**

**-aux** **显示所有进程和其启动命令**

**数值项说明**

USER 进程所属用户

UID 进程所属用户 ID

PID 进程 ID

%CPU CPU 占用率

%MEM 内存占用率

VSZ 虚拟内存占用大小（其中部分可能在交换文件中）

RSS 实际内存占用大小（RAM 占用的大小）

TTY 对应的控制台设备

TIME 进程执行的时间

START 进程开始执行的世界

COMMAND 进程启动执行的命令（带参数）

CMD 进程启动执行的命令（不带参数）

S/STAT 状态 S 休眠 R 运行 D 阻塞 Z 僵尸进程 T 暂停

PRI 优先级 数值越低，优先级越高，甚至可能为负数

### cp命令

copy 复制的缩写

命令用法：cp [参数] 源文件/文件夹 目标文件/文件夹

[]表示可选

sudo 命令 提权（提升权限）mkdir 创建文件夹

**-a：带属性复制**

此选项通常在复制目录时使用，它保留链接、文件属性，并复制目录下的所有内容。其作用

等于 dpR 参数组合。

**-d**：复制时保留链接

这里所说的链接相当于 Windows 系统中的快捷方式。

**-f**：强制覆盖

覆盖已经存在的目标文件而不给出提示

Ubuntu 默认是强制覆盖

**-i**：覆盖提示

与-f 选项相反，在覆盖目标文件之前给出提示，要求用户确认是否覆盖，回答"y"时目标文

件将被覆盖。

**-p**：带权限复制

除复制文件的内容外，还把修改时间和访问权限也复制到新文件中。

**-r**：文件夹复制

若给出的源文件是一个目录文件，此时将复制该目录下所有的子目录和文件。

**-l**：创建链接

不复制文件，只是生成链接文件。

只在部分系统有效

在 Ubuntu 下没有效果

### rm命令

命令 remove 的缩写，删除

补充命令：

chmod [-r] 6777（八进制数） 文件/文件夹

110(提权/改组) 111（读写执行） 111（当前用户） 111（其他用户）

**-i** **删除确认**

每个被删除的文件都需要确认

**-f** **强制删除**

无需确认就会删除指定的文件

**-r** **目录删除**

删除指定文件夹下的所有文件和子文件夹

## 开发环境搭建

### gcc安装

命令：

1 设置 root 密码：sudo passwd root

注意，请记住这个密码，后面还需要使用

2 进入 root 账户 su

3 安装编译器：apt-get install gcc g++

4 查看当前的 gcc g++版本

gcc --version

g++ --version

5 验证一下

g++ -o test main.cpp

./test

### ssh服务的安装

这个服务用户后续的代码编写和远程运行、调试命令：

1 安装服务程序：sudo apt install openssh-server

2 安装客户端程序：sudo apt install openssh-client

3 修改配置文件：/etc/ssh/sshd_config

LoginGraceTime 2m

<u>PermitRootLogin yes</u>

PubkeyAuthentication yes

PasswordAuthentication yes

ChallengeResponseAuthentication no

UsePAM yes

X11Forwarding yes

PrintMotd no

AcceptEnv LANG LC_*

Subsystem sftp /usr/lib/openssh/sftp-server

下划线内容是要修改的地方

其他地方请自行比对

如果不一致，请参考上面的文档

4 启动服务

可以直接输入命令行：

C:\Windows\System32\bash.exe -c "sudo service ssh start" 

进行启动

也可以建立一个 bat 文件

将上面这个命令写入其中

然后放入文件夹

C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp

或者

C:\Users\你的用户名\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup

点击开始菜单，将鼠标停在用户名图标处

用户名会自动展示出来

这样开机后就可以自动启动 ssh 服务了
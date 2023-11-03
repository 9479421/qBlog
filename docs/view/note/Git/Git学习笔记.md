# Git基础教程

## 1、版本控制

### 1.1、什么是版本控制

版本控制：就是在开发过程中用于**管理**对文件、目录或工程等内容的修改历史，简单来说它是一种管理多人协同开发项目的**技术**。

优势：

- 方便查看更改历史记录，恢复和备份以前的版本
- 组织和保护我们的源代码和文档
- 统计工作量
- 并行开发，提高工作效率
- 跟踪记录整个软件开发过程
- 减轻开发人员的负担，节省时间

没有采用版本控制技术进行软件开发可能存在的问题：

- 代码一致性
- 软件内容冗余
- 软件开发过程的并发性
- 软件源代码的安全性

### 1.2、常见的版本控制工具

- Git
- SVN
- CVS
- VSS
- TFS
- …

### 1.3、版本控制分类（采用的思想不同）

- 本地版本控制（RCS）

  文件的每次更新，对每个版本做个快照或补丁文件（记录对应版本更新的内容）

- 集中版本控制（[SVN](https://so.csdn.net/so/search?q=SVN&spm=1001.2101.3001.7020)）联网

  所以迭代版本保存在**服务器**上，开发者直接同步更新或上传自己的修改即可

- 分布式版本控制（Git）无需联网

  每个人都拥有全部代码

### 1.4、SVN和Git的区别

> SVN

- 集中版本控制系统
- 版本库存放在中央服务器上（需要联网）
- 工作方式：先从中央处理器上拿到最新版本，最后再讲修改后的版本推送到中央处理器上

> Git

- 分布式版本控制系统
- 每个工作的电脑就是一个完整的版本库（不需要联网）
- 工作方式：每个人修改过的内容，彼此之间互相推送

## 2、Git

### 2.1、软件下载

- Git官网：[Git (git-scm.com)](https://git-scm.com/)
- 淘宝镜像：http://npm.taobao.org/mirrors/git-for-windows/

### 2.2、安装和启动

![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/8d1c6f0009894469a3a078566f0520d5.png)

- git-bash.exe：Unix与Linux风格的命令行，使用最多，推荐最多
- git-cmd.exe：Windows风格的命令行

### 2.3、常用的Linux命令

- cd : 改变目录
- cd . . 回退到上一个目录，直接cd进入默认目录
- pwd : 显示当前所在的目录路径
- ls(ll): 都是列出当前目录中的所有文件，只不过ll(两个ll)列出的内容更为详细
- touch : 新建一个文件 如 touch index.js 就会在当前目录下新建一个index.js文件
- rm: 删除一个文件, rm index.js 就会把index.js文件删除。
- mkdir: 新建一个目录,就是新建一个文件夹
- rm -r : 删除一个文件夹, rm -r src 删除src目录 **rm -rf / 切勿在Linux中尝试！删除电脑中全部文件**
- mv 移动文件, mv index.html src， index.html 是我们要移动的文件, src 是目标文件夹,当然, 这样写,必须保证文件和目标文件夹在同一目录下
- reset 重新初始化终端/清屏
- clear 清屏
- history 查看命令历史
- help 帮助
- exit 退出
- \#表示注释

### 2.4、Git配置

查看Git配置：`git config -l`

![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/d6455ec83b73455a80cd929cceced1ab.png)

查看不同级别的配置：

- 查看系统配置：`git config --system --list`
- 查看当前用户配置：`git config --global --list`

Git相关配置文件：

- `E:\Environment\Git\etc\gitconfig` ：Git安装目录下，–system系统级

- `C:\Users\Administrator\.gitconfig` ：C盘里面*（注意：如果刚安装从来没有配置过用户信息，这里没有.gitconfig文件）*只需要执行命令进行简单配置C盘对应目录下就会自动生成

  ![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/9501e2a2a8b546b6b773eaf89c76a0e9.png)

  配置方式：

  - 可以通过命令行配置
  - 可以直接打开.gitconfig文件进行编写

## 3、三个区域

Git本地有三个工作区域：

- 工作目录（Working Directory）：Workspace（工作区），就是你平时存放项目代码的地方
- 暂存区(Stage/Index)：Index / Stage（暂存区），用于临时存放你的改动，事实上它只是一个文件，保存**即将提交**到文件列表信息
- 资源库(Repository或Git Directory)：Repository（仓库区或本地仓库），就是安全存放数据的位置，这里面有你提交到所有版本的数据，**其中HEAD指向最新放入仓库的版本。**

如果在加上远程的git仓库(Remote Directory)就可以分为四个工作区域。文件在这四个区域之间的转换关系如下：

![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/0df36f3e743e4d4095b489593cee8f9c.png)

本地的三个区域确切的说应该是git仓库中HEAD指向的版本：

![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/b5087b91dc454f2abfbfb5c682898a4b.png)

- Directory：使用Git管理的一个目录，也就是一个仓库，包含我们的工作空间和Git的管理空间。
- WorkSpace：需要通过Git进行版本控制的目录和文件，这些目录和文件组成了工作空间。
- .git：存放Git管理信息的目录，**初始化仓库的时候自动创建**，` git init` 。
- Index/Stage：暂存区，或者叫待提交更新区，在提交进入repo之前，我们可以把所有的更新放在暂存区。
- Local Repo：本地仓库，一个存放在本地的版本库；HEAD会只是当前的开发分支（branch）。
- Stash：隐藏，是一个工作状态保存栈，用于保存/恢复WorkSpace中的临时状态。

## 4、工作流程

- 在工作目录中添加、修改文件；
- 将需要进行版本管理的文件放入暂存区域；
- 将暂存区域的文件提交到git仓库；

因此，git管理的文件有三种状态：已修改（modified）,已暂存（staged）,已提交(committed)

![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/ea2dff18062e42b8abfa0fc5d31deb96.png)

## 5、Git项目搭建

- 创建工作目录（常用命令）

  工作目录（WorkSpace)一般就是你希望Git帮助你管理的文件夹，可以是你项目的目录，也可以是一个空目录，建议不要有中文。记忆下图常用命令：

  ![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/7f42a9f516a844c4aacda91a55869882.png)

- 本地仓库搭建

  - 创建全新的仓库

    ```
    # 创建全新的仓库，需要用GIT管理的项目的根目录执行：
    # 在当前目录新建一个Git代码库
    $ git init
    123
    ```

  - 克隆远程仓库

    ```
    # 克隆远程目录，是将远程服务器上的仓库完全镜像一份至本地！
    # 克隆一个项目和它的整个代码历史(版本信息)
    $ git clone [url]  # https://gitee.com/kuangstudy/openclass.git
    123
    ```

## 6、Git文件操作

### 6.1、文件的四种状态

> 版本控制就是对文件的版本控制，要对文件进行修改、提交等操作，首先要知道文件当前在什么状态，不然可能会提交了现在还不想提交的文件，或者要提交的文件没提交上。

- Untracked: 未跟踪, 此文件在文件夹中, 但并没有加入到git库, 不参与版本控制. **通过git add 状态变为Staged**
- Staged: 暂存状态. 执行`git commit` 则将修改同步到库中, 这时库中的文件和本地文件又变为一致, 文件为Unmodify状态. 执行`git reset HEAD filename` 取消暂存, 文件状态为Modified
- Unmodify: 文件已经入库, 未修改, 即版本库中的文件快照内容与文件夹中完全一致. 这种类型的文件有**两种去处**, 如果它被修改, 变为Modified. 如果它没有被修改，使用git rm移出版本库, 则成为Untracked文件
- Modified: 文件已修改, 仅仅是修改, 并没有进行其他的操作. 这个文件也有两个去处, 通过`git add` 可进入暂存staged状态, 使用`git checkout `则丢弃修改过, 返回到unmodify状态, 这个git checkout即从库中取出文件, 覆盖当前修改 !

### 6.2、查看文件状态

```
#查看指定文件状态
git status [filename]
 
#查看所有文件状态
git status
 
#添加所有文件到暂存区
git add .

#提交暂存区中的内容到本地仓库 -m 提交信息
git commit -m "消息内容"
1234567891011
```

### 6.3、忽略文件

> 有些时候我们不想把某些文件纳入版本控制中，比如数据库文件，临时文件，设计文件等

在主目录下建立".gitignore"文件，此文件有如下规则：

- 忽略文件中的空行或以井号（#）开始的行将会被忽略。

- 可以使用Linux通配符。例如：星号（*）代表任意多个字符，问号（？）代表一个字符，方括号（[abc]）代表可选字符范围，大括号（{string1,string2,…}）代表可选的字符串等。

- 如果名称的最前面有一个感叹号（!），表示例外规则，将不被忽略。

- 如果名称的最前面是一个路径分隔符（/），表示要忽略的文件在此目录下，而子目录中的文件不忽略。

- 如果名称的最后面是一个路径分隔符（/），表示要忽略的是此目录下该名称的子目录，而非文件（默认文件或目录都忽略）。

  ```
  #为注释
  *.txt        #忽略所有 .txt结尾的文件,这样的话上传就不会被选中！
  !lib.txt     #但lib.txt除外
  /temp        #仅忽略项目根目录下的所有文件,但不包括根目录下的temp文件夹
  build/       #忽略build/目录下的所有文件
  doc/*.txt    #会忽略 doc/notes.txt 但不包括 doc/server/arch.txt
  123456
  ```

## 7、idea集成Git

### 7.1、码云设置公钥

![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/aee4c95ab5f54c8aa302c63a76785b28.png)

### 7.2、idea集成Git

> 个人开发

- 克隆远程仓库（码云）文件到本地（**采用SSH协议**）

  ![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/36a113686a70478faffbbf2c65749bd8.png)

- 在指定Git的目录下（就是初始化仓库或者说是所有克隆文件所在的根目录）新建项目，把克隆的项目复制到该项目中

  ![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/99ff117d7eee44ee90b8c799adc2f3bd.png)

  ![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/d049fc01f45045edae654888dd0368cb.png)

- 第一次修改提交

  ![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/f8d13211669e499595c37fd90eb0f8dd.png)

  ![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/0e4327198b1d419d8b805590b3f54350.png)

  > 多人协作

  - Git分支，参考官网教程+工作或学习上的频繁使用来掌握
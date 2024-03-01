# Linux服务器编程

# 准备工作

## 系统配置

1. 在虚拟机中安装Linux系统，本项目采用`VMware Workstation 16.1.2`和`Ubuntu 18.04`，本机系统为`Win 10`

2. 更新`Ubuntu 18.04`源并安装`open-vm-tools`

   1. 进入`/etc/apt/sources.list` 修改为国内镜像源（速度快），全部删除，替换为下述内容，如果更新报错，将`https`换成`http`

      ```shell
      # 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
      deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
      # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
      deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
      # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
      deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
      # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
      deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
      # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
      
      # 预发布软件源，不建议启用
      # deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
      # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
      ```

   2. 更新系统源：

      ```shell
      # update 是同步 /etc/apt/sources.list 和 /etc/apt/sources.list.d 中列出的源的索引，这样才能获取到最新的软件包
      sudo apt update
      # upgrade 是升级已安装的所有软件包(可选)
      # sudo apt upgrade
      ```

   3. 安装`open-vm-tools`：`sudo apt install open-vm-tools`

   4. ~~如果要实现文件夹共享，需要安装`open-vm-tools-dkms`：`sudo apt install open-vm-tools-dkms`~~=>清华源找不到`open-vm-tools-dkms`，不安装不影响

   5. 桌面环境还需要安装`open-vm-tools-desktop`以支持双向拖放文件：`sudo apt install open-vm-tools-desktop`

   6. 重启（使用`VMware`自带重启，使用`reboot`重启可能失败）后成功进行拖拽复制

   注：[参考链接](https://blog.csdn.net/hhdhz/article/details/87922794)

3. 在`Ubuntu 18.10`安装必要组件

   ```shell
   # 安装Vim环境
   sudo apt install vim
   
   # 用于远程连接虚拟机
   sudo apt install openssh-server
   
   # 用于查看IP地址
   sudo apt install net-tools
   
   # 树形查看文件夹内容
   sudo apt install tree
   ```

## VS code

1. 安装`Remote Development`插件

2. 在Linux中使用`ifconfig`查看`ip地址`

3. 按下图步骤设置`config`文件

   ![image-20210831142010206](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210831142010206.png)

4. `config`内容如下

   ```shell
   # Read more about SSH config files: https://linux.die.net/man/5/ssh_config
   Host 自定义名称
       HostName 远程服务器IP
       User 远程服务器用户名
   ```

## GCC

### 安装`gcc`

命令：`sudo apt install gcc g++`，本项目安装版本为：`7.5.0`

### gcc工作流程

![image-20210831132508825](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210831132508825.png)

### gcc常用参数选项

![image-20210831132654506](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210831132654506.png)

![image-20210831135954037](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210831135954037.png)

- `-D`实例

  - 源程序

    ```c
    #include<stdio.h>
    
    int main()
    {
    #if DEBUG
        printf("Debug\n");
    #endif
        printf("hello, world\n");
        return 0;
    }
    ```

  - 编译命令1：

    ```shell
    gcc test.c -o test
    ./test
    
    # 输出
    hello, world
    ```

  - 编译命令2：

    ```shell
    gcc test.c -o test -D DEBUG
    ./test
    
    # 输出
    Debug
    hello, world
    ```

### gcc与g++区别

- `gcc` 和 `g++` 都是`GNU(组织)`的一个编译器
- **误区一**：`gcc` 只能编译 c 代码，g++ 只能编译 c++ 代码
  - 后缀为` .c` 的，`gcc` 把它当作是 C 程序，而 `g++` 当作是 `c++` 程序
  - 后缀为 `.cpp` 的，两者都会认为是 `C++` 程序，`C++` 的语法规则更加严谨一些
  - 编译阶段，`g++` 会调用 `gcc`，对于 `C++` 代码，两者是等价的，但是因为 `gcc` 命令不能自动和 `C++` 程序使用的库联接，所以通常用 `g++` 来完成链接，为了统一起见，干脆编译/链接统统用 `g++` 了，这就给人一种错觉，好像 `cpp` 程序只能用 `g++` 似的
- **误区二**：`gcc` 不会定义 `__cplusplus` 宏，而 `g++` 会 
  - 实际上，这个宏只是标志着编译器将会把代码按 C 还是 C++ 语法来解释
  - 如上所述，如果后缀为` .c`，并且采用 `gcc` 编译器，则该宏就是未定义的，否则，就是已定义
- **误区三**：编译只能用 `gcc`，链接只能用 `g++`
  - 严格来说，这句话不算错误，但是它混淆了概念，应该这样说：编译可以用 `gcc/g++`，而链接可以用 `g++` 或者 `gcc -lstdc++`
  - `gcc` 命令不能自动和C++程序使用的库联接，所以通常使用 `g++` 来完成链接。但在编译阶段，`g++` 会自动调用 `gcc`，二者等价

# Linux系统编程基础知识

## 静态库与动态库

### 库

- 库文件是计算机上的一类文件，可以简单的把库文件看成一种代码仓库，它提供给使用者一些**可以直接拿来用的变量、函数或类**
- 库是特殊的一种程序，编写库的程序和编写一般的程序区别不大，只是**库不能单独运行**
- 库文件有两种，`静态库`和`动态库（共享库）`。区别是：
  - **静态库**在程序的链接阶段被复制到了程序中
  - **动态库**在链接阶段没有被复制到程序中，而是程序在运行时由系统动态加载到内存中供程序调用
- 库的好处：**代码保密** 和**方便部署和分发**

### 静态库的制作

- 规则

![image-20210831163546031](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210831163546031.png)

- 示例：有如下图所示文件(其中每个分文件用于实现四则运算)，将其打包为**静态库**

  ![image-20210831164707648](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210831164707648.png)

  1. 生成`.o`文件：`gcc -c 文件名`

     ![image-20210831164903714](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210831164903714.png)

  2. 将`.o`文件打包：`ar rcs libxxx.a xx1.o xx2.o`

     ![image-20210831165142693](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210831165142693.png)

### 静态库的使用

- 需要提供**静态库文件和相应的头文件**，有如下结构文件，其中`main.c`测试文件

  ![image-20210831170033041](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210831170033041.png)

  ```c
  // main.c
  #include <stdio.h>
  #include "head.h"
  
  int main()
  {
      int a = 20;
      int b = 12;
      printf("a = %d, b = %d\n", a, b);
      printf("a + b = %d\n", add(a, b));
      printf("a - b = %d\n", subtract(a, b));
      printf("a * b = %d\n", multiply(a, b));
      printf("a / b = %f\n", divide(a, b));
      return 0;
  }
  ```

- 编译运行：`gcc main.c -o app -I ./include -l calc -L ./lib`

  - `-I ./include`：指定头文件目录，如果不指定，出现以下错误

    ![image-20210831170715090](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210831170715090.png)

  - `-l calc`：指定静态库名称，如果不指定，出现以下错误

    ![image-20210831170816127](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210831170816127.png)

  - `-L ./lib`：指定静态库位置，如果不指定，出现以下错误

    ![image-20210831170844743](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210831170844743.png)

  - **正确执行**（成功生成`app`可执行文件）

    ![image-20210831170923394](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210831170923394.png)

  - 测试程序

    ![image-20210831193122578](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210831193122578.png)

### 动态库的制作

- 规则

![image-20210831171945803](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210831171945803.png)

- 示例：有如下图所示文件(其中每个分文件用于实现四则运算)，将其打包为**动态库**

  ![image-20210831164707648](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210831164707648.png)

  1. 生成`.o`文件：`gcc -c -fpic 文件名`

     ![image-20210831173502435](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210831173502435.png)

  2. 将`.o`文件打包：`gcc -shared xx1.o xx2.o -o libxxx.so`

     ![image-20210831173600480](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210831173600480.png)

### 动态库的使用

- 需要提供**动态库文件和相应的头文件**

- 定位动态库（**原因见工作原理->如何定位共享库文件**，其中路径为动态库所在位置）

  - 方法一：修改环境变量，**当前终端生效**，退出当前终端失效

    ```shell
    export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/home/u/Desktop/Linux/calc/lib
    ```

  - 方法二：修改环境变量，用户级别永久配置

    ```shell
    # 修改~/.bashrc
    vim ~/.bashrc
    
    # 在~/.bashrc中添加下行，保存退出
    export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/home/u/Desktop/Linux/calc/lib
    
    # 使修改生效
    source ~/.bashrc
    ```

  - 方法三：修改环境变量，系统级别永久配置

    ```shell
    # 修改/etc/profile
    sudo vim /etc/profile
    
    # 在~/.bashrc中添加下行，保存退出
    export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/home/u/Desktop/Linux/calc/lib
    
    # 使修改生效
    source /etc/profile
    ```

  - 方法四：修改`/etc/ld.so.cache文件列表`

    ```shell
    # 修改/etc/ld.so.conf
    sudo vim /etc/ld.so.conf
    
    # 在/etc/ld.so.conf中添加下行，保存退出
    /home/u/Desktop/Linux/calc/lib
    
    # 更新配置
    sudo ldconfig
    ```

- 有如下结构文件，其中`main.c`测试文件

  ![image-20210831173858257](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210831173858257.png)

- 编译运行：`gcc main.c -o app -I ./include -l calc -L ./lib`

  ![image-20210831193101168](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210831193101168.png)

- 测试程序

  ![image-20210831193122578](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210831193122578.png)

- 如果不将动态库文件绝对路径加入环境变量，则会出现以下错误

  ![image-20210831174331780](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210831174331780.png)

### 工作原理

- 静态库：`GCC` 进行链接时，会把静态库中代码打包到可执行程序中

- 动态库：`GCC` 进行链接时，动态库的代码不会被打包到可执行程序中

- 程序启动之后，动态库会被动态加载到内存中，通过 `ldd （list dynamic dependencies）`命令检查动态库依赖关系

  ![image-20210831174842063](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210831174842063.png)

- 如何定位共享库文件呢？

  - 当系统加载可执行代码时候，能够知道其所依赖的库的名字，但是还需要知道**绝对路径**。此时就需要系统的动态载入器来获取该绝对路径
  - 对于`elf格式`的可执行程序，是由`ld-linux.so`来完成的，它先后搜索`elf文件`的 `DT_RPATH`段 => `环境变量LD_LIBRARY_PATH` => `/etc/ld.so.cache文件列表` => `/lib/`，`usr/lib`目录找到库文件后将其载入内存

### 静态库和动态库的对比

#### 程序编译成可执行程序的过程

![image-20210902092607878](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210902092607878.png)

#### 静态库制作过程

![image-20210902092645051](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210902092645051.png)

#### 动态库制作过程

![image-20210902092702345](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210902092702345.png)

#### 静态库的优缺点

![image-20210902092725852](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210902092725852.png)

#### 动态库的优缺点

![image-20210902092749213](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210902092749213.png)

## Makefile

### 概念及安装

- 一个工程中的源文件不计其数，其按类型、功能、模块分别放在若干个目录中，`Makefile` 文件定义了一系列的规则来指定哪些文件需要先编译，哪些文件需要后编译，哪些文件需要重新编译，甚至于进行更复杂的功能操作，因为 `Makefile` 文件就像一个 `Shell` 脚本一样，也可以执行操作系统的命令
- `Makefile` 带来的好处就是“自动化编译” ，一旦写好，只需要一个 `make` 命令，整个工程完全自动编译，极大的提高了软件开发的效率。
- `make` 是一个命令工具，是一个解释 `Makefile` 文件中指令的命令工具，一般来说，大多数的 `IDE` 都有这个命令，比如 Delphi 的 `make`，Visual C++ 的 `nmake`，Linux 下 GNU 的 `make`
- 安装：`sudo apt install make`，安装时会安装`man 手册`

### Makefile 文件命名和规则

- 文件命名：`makefile` 或者 `Makefile`

- `Makefile` 规则

  - 一个 `Makefile` 文件中可以有一个或者多个规则

    ![image-20210902093603940](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210902093603940.png)

    - **目标**：最终要生成的文件（伪目标除外）
    - **依赖**：生成目标所需要的文件或是目标
    - **命令**：通过执行命令对依赖操作生成目标（命令前必须 Tab 缩进）

  - `Makefile` 中的其它规则一般都是为第一条规则服务的。

### Makefile编写方式

#### 说明

假设有如下文件

![image-20210902100556519](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210902100556519.png)

#### 方式一：Makefile+直接编译链接（不推荐）

```makefile
app:add.c div.c multi.c sub.c main.c
	gcc add.c div.c multi.c sub.c main.c -o app
```

![image-20210902101930762](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210902101930762.png)

#### 方式二：Makefile+编译+链接

```makefile
app:add.o div.o multi.o sub.o main.o
	gcc add.o div.o multi.o sub.o main.o -o app

add.o:add.c
	gcc -c add.c -o add.o

div.o:div.c
	gcc -c div.c -o div.o

multi.o:multi.c
	gcc -c multi.c -o multi.o

sub.o:sub.c
	gcc -c sub.c -o sub.o

main.o:main.c
	gcc -c main.c -o main.o
```

![image-20210902101856277](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210902101856277.png)

#### 方式三：Makefile+变量

##### 知识点

- 自定义变量：`变量名=变量值`，如`var=hello`

- 预定义变量

  - `AR` : 归档维护程序的名称，默认值为 ar

  - `CC `: C 编译器的名称，默认值为 cc

  - `CXX` : C++ 编译器的名称，默认值为 g++

  - `$@` : 目标的完整名称

  - `$<` : 第一个依赖文件的名称

  - `$^`: 所有的依赖文件

  - 示例

    ![image-20210902095418237](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210902095418237.png)

- 获取变量的值：`$(变量名)`，如`$(var)`

##### 示例

```makefile
src=add.o div.o multi.o sub.o main.o
target=app
$(target):$(src)
	$(CC) $^ -o $@

add.o:add.c
	$(CC) -c $^ -o $@

div.o:div.c
	$(CC) -c $^ -o $@

multi.o:multi.c
	$(CC) -c $^ -o $@

sub.o:sub.c
	$(CC) -c $^ -o $@

main.o:main.c
	$(CC) -c $^ -o $@
```

![image-20210902103929268](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210902103929268.png)

#### 方式四：Makefile+模式匹配

##### 知识点

当所要编译的文件过多时，使用模式匹配能够简化操作

![image-20210902095522095](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210902095522095.png)

##### 示例

```makefile
src=add.o div.o multi.o sub.o main.o
target=app
$(target):$(src)
	$(CC) $^ -o $@

%.o:%.c
	$(CC) -c $< -o $@
```

![image-20210902104314203](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210902104314203.png)

#### 方法五：Makefile + 函数

##### 知识点

- `$(wildcard PATTERN...)`

  - 功能：获取指定目录下指定类型的文件列表

  - 参数：PATTERN 指的是某个或多个目录下的对应的某种类型的文件，如果有多个目录，一般使用空格间隔

  - 返回：得到的若干个文件的文件列表，文件名之间使用空格间隔

  - 示例

    ![image-20210902100119333](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210902100119333.png)

- `$(patsubst <pattern>,<replacement>,<text>)`

  - 功能：查找`<text>`中的单词(单词以“空格”、“Tab”或“回车”“换行”分隔)是否符合模式`<pattern>`，如果匹配的话，则以`<replacement>`替换

  - `<pattern>`可以包括通配符`%`，表示任意长度的字串。如果`<replacement>`中也包含`%`，那么，`<replacement>`中的这个`%`将是`<pattern>`中的那个%所代表的字串。(可以用`\`来转义，以`\%`来表示真实含义的`%`字符)

  - 返回：函数返回被替换过后的字符串

  - 示例

    ![image-20210902100350848](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210902100350848.png)

##### 示例

```makefile
src=$(wildcard ./*.c)
objs=$(patsubst %.c, %.o, $(src))
target=app
$(target):$(objs)
	$(CC) $^ -o $@

%.o:%.c
	$(CC) -c $< -o $@
```

![image-20210902104748931](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210902104748931.png)

### 清除中间文件

```makefile
src=$(wildcard ./*.c)
objs=$(patsubst %.c, %.o, $(src))
target=app
$(target):$(objs)
	$(CC) $^ -o $@

%.o:%.c
	$(CC) -c $< -o $@

clean:
	rm *.o
```

![image-20210902104842411](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210902104842411.png)

### 工作原理

- 命令在执行之前，需要先检查规则中的依赖是否存在

  - 如果存在，执行命令
  - 如果不存在，向下检查其它的规则，检查有没有一个规则是用来生成这个依赖的，如果找到了，则执行该规则中的命令

- 检测更新，在执行规则中的命令时，会比较目标和依赖文件的时间

  - 如果依赖的时间比目标的时间晚，需要重新生成目标
  - 如果依赖的时间比目标的时间早，目标不需要更新，对应规则中的命令不需要被执行

- 示例

  - 当修改`main.c`且重新`make`时，如下

    ![image-20210902105119451](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210902105119451.png)

  - 当不做任何修改且重新`make`时，如下

    ![image-20210902105057184](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210902105057184.png)

## GDB调试

### 概念

- `GDB` 是由 GNU 软件系统社区提供的调试工具，同 `GCC` 配套组成了一套完整的开发环境，`GDB` 是 Linux 和许多类 Unix 系统中的标准开发环境
- 一般来说，`GDB` 主要帮助你完成下面四个方面的功能
  - 启动程序，可以按照自定义的要求随心所欲的运行程序
  - 可让被调试的程序在所指定的调置的断点处停住（断点可以是条件表达式）
  - 当程序被停住时，可以检查此时程序中所发生的事
  - 可以改变程序，将一个 BUG 产生的影响修正从而测试其他 BUG

### 准备工作

- 使用以下命令编译：`gcc -g -Wall program.c -o program`
  - 通常，在为调试而编译时，我们会**关掉编译器的优化选项**（`-O`）， 并打开**调试选项**（`-g`）。另外，`-Wall`在尽量不影响程序行为的情况下选项打开所有warning，也可以发现许多问题，避免一些不必要的 BUG
  - `-g` 选项的作用是在可执行文件中加入源代码的信息，比如可执行文件中第几条机器指令对应源代码的第几行，但并不是把整个源文件嵌入到可执行文件中，所以在调试时必须保证 `gdb` 能找到源文件

- 注：当在 `gdb` 中直接使用`回车`时，会默认执行上一条命令

### 常用命令

#### 说明

- `启动与退出`至`查看当前文件代码`使用`test.c`
- 后续内容使用课件中其他源程序

#### 启动与退出

- 启动：`gdb 可执行程序`
- 退出：`quit/q`

![image-20210903103104338](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210903103104338.png)

#### 给程序设置参数/获取设置参数

- 设置参数：`set args 10 20`
- 获取设置参数：`show args`

```c
// test.c 源码
#include <stdio.h>
#include <stdlib.h>

int test(int a);

int main(int argc, char* argv[]) {
    int a, b;
    printf("argc = %d\n", argc);

    if(argc < 3) {
        a = 10;
        b = 30;
    } else {
        a = atoi(argv[1]);
        b = atoi(argv[2]);
    }
    printf("a = %d, b = %d\n", a, b);
    printf("a + b = %d\n", a + b);

    for(int i = 0; i < a; ++i) {
        printf("i = %d\n", i);
        // 函数调用
        int res = test(i);
        printf("res value: %d\n", res);
    }

    printf("THE END !!!\n");
    return 0;
}

int test(int a) {
    int num = 0;
    for(int i = 0; i < a; ++i) {
        num += i;
    }
    return num;
}
```

![image-20210903103228384](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210903103228384.png)

#### GDB使用帮助

- `help`

![image-20210903103520671](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210903103520671.png)

#### 查看当前文件代码

- 从默认位置显示：`list/l`

  ![image-20210903103920656](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210903103920656.png)

- 从指定的行显示：`list/l 行号`

  ![image-20210903104039928](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210903104039928.png)

- 从指定的函数显示：`list/l 行号`

  ![image-20210903104052483](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210903104052483.png)

- 注：**查看时会显示前后文**

#### 查看非当前文件代码

- 编译运行并使用`gdb main`

  ![image-20210903104949112](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210903104949112.png)

- 从指定文件指定的行显示：`list/l 文件名:行号`

  ![image-20210903105035366](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210903105035366.png)

- 从指定文件指定的函数显示：`list/l 文件名:函数名`

  ![image-20210903105105909](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210903105105909.png)

#### 查看及设置显示的行数

- 查看显示的行数：`show list/listsize`
- 设置显示的行数：`set list/listsize`

![image-20210903105356344](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210903105356344.png)

#### 断点操作

- 查看断点：`i/info b/break`

- 设置一般断点
  - `b/break 行号`
  - `b/break 函数名`
  - `b/break 文件名:行号`
  - `b/break 文件名:函数`
- 设置条件断点（一般用在循环的位置）：`b/break 10 if i==5`

![image-20210903110417653](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210903110417653.png)

- 删除断点：`d/del/delete 断点编号`
- 设置断点无效：`dis/disable 断点编号`
- 设置断点生效：`ena/enable 断点编号`

![image-20210903110544093](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210903110544093.png)

#### 调试操作

- 运行 `GDB` 程序
  - 程序停在第一行：`start`
  - 遇到断点才停：`run`
- 继续运行，到下一个断点停：`c/continue`
- 向下执行一行代码（不会进入函数体）：`n/next`
- 变量操作
  - 打印变量值：`p/print 变量名`
  - 打印变量类型：`ptype 变量名`
- 向下单步调试（遇到函数进入函数体）
  - `s/step`
  - 跳出函数体：`finish`
- 自动变量操作
  - 自动打印指定变量的值：`display 变量名`
  - 查看自动变量：`i/info display`
  - 取消自动变量：`undisplay 编号`
- 其它操作
  - 设置变量值：`set var 变量名=变量值 （循环中用的较多）`
  - 跳出循环：`until`

## 文件IO

- 在`Linux`中使用`man 2 API名`查看**Linux系统API**，`man 3 API名`查看**标准C库API**

  - `man 2 open`

    ![image-20210905161448175](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210905161448175.png)

  - `man 3 fopen`

    ![image-20210905161518280](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210905161518280.png)

### 标准 C 库 IO 函数

![image-20210905151717853](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210905151717853.png)

### 标准 C 库 IO 和 Linux 系统 IO 的关系

![image-20210905151735234](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210905151735234.png)

### 虚拟地址空间

- 虚拟地址空间是为了解决内存加载问题
  - 问题1：假设实际内存为`4G`，此时共有`1G`、`2G`、`2G`三个程序，如果直接加载，那么第三个程序由于内存不足而无法执行
  - 问题2：当问题1的`1G`程序执行完后，释放内存，第三个程序可以执行，但此时内存空间不连续

- 对于32位机器来说，大小约为$2^{32}$，即`4G`左右，对于64位机器来说，，大小约为$2^{48}$，即`256T`左右
- 通过`CPU中的MMU(内存管理单元)`将虚拟内存地址映射到物理内存地址上

![image-20210905151755982](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210905151755982.png)

### 文件描述符

- 文件描述符表是一个**数组**，为了一个进程能够同时操作多个文件
- 文件描述符表默认大小：1024

![image-20210905160958789](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210905160958789.png)

### Linux 系统 IO 函数

#### open & close

- `int open(const char *pathname, int flags);`，使用`man 2 open`查看帮助

  - 参数
    - `pathname`：要打开的文件路径
    - `flags`：对文件的操作权限设置还有其他的设置(`O_RDONLY,`  `O_WRONLY,`  `O_RDWR`  这三个设置是互斥的，代表只读，只写，可读可写)
  - 返回值：返回一个新的文件描述符，如果调用失败，返回-1，并设置`errno`，`errno`属于Linux系统函数库里面的一个全局变量，记录的是最近的错误号

  ```c
  /*
      #include <stdio.h>
      void perror(const char *s);作用：打印errno对应的错误描述
          参数s：用户描述，比如hello, 最终输出的内容是  hello:xxx(实际的错误描述)
  */
  
  #include <stdio.h>
  // 系统宏
  #include <sys/types.h>
  #include <sys/stat.h>
  // fopen函数声明头文件
  #include <fcntl.h>
  // close函数声明头文件
  #include <unistd.h>
  
  int main() 
  {
      // 打开一个文件
      int fd = open("a.txt", O_RDONLY);
  
      if(fd == -1) {
          perror("open");
      }
      // 读写操作
  
      // 关闭
      close(fd);
  
      return 0;
  }
  ```

- `int open(const char *pathname, int flags, mode_t mode);`，使用`man 2 open`查看帮助

  - 参数
    - `pathname`：要创建的文件的路径
    - `flags`：对文件的操作权限和其他的设置
      - 必选项：`O_RDONLY`,  `O_WRONLY`, `O_RDWR`  这三个之间是互斥的
      - 可选项：`O_CREAT` 文件不存在，创建新文件
      - `flags`参数是一个int类型的数据，占4个字节，32位，每一位就是一个标志位，所以用 `|` 可以保证能够实现多个操作
    - `mode`：八进制的数，表示创建出的新的文件的操作权限，比如：0775

  ```c
  /*
              最终的权限是：mode & ~umask
              0777   ->   111111111
          &   0775   ->   111111101
          ----------------------------
                          111111101
          按位与：0和任何数都为0
          umask的作用就是抹去某些权限, 可以直接在终端输入 umask 查看默认值
  */
  #include <sys/types.h>
  #include <sys/stat.h>
  #include <fcntl.h>
  #include <unistd.h>
  #include <stdio.h>
  
  int main() 
  {
      // 创建一个新的文件
      int fd = open("create.txt", O_RDWR | O_CREAT, 0777);
  
      if(fd == -1) {
          perror("open");
      }
  
      // 关闭
      close(fd);
  
      return 0;
  }
  ```

- `int close(int fd);`

#### read & write

- `ssize_t read(int fd, void *buf, size_t count);`，使用`man 2 read`查看帮助
  - 参数
    - `fd`：文件描述符，open得到的，通过这个文件描述符操作某个文件
    - `buf`：需要读取数据存放的地方，数组的地址（传出参数）
    - `count`：指定的数组的大小
  - 返回值
    - 成功
      - `> 0`: 返回实际的读取到的字节数
      - `= 0`：文件已经读取完了
    - 失败：-1
- `ssize_t write(int fd, const void *buf, size_t count);`，使用`man 2 write`查看帮助
  - 参数
    - `fd`：文件描述符，open得到的，通过这个文件描述符操作某个文件
    - `buf`：要往磁盘写入的数据
    - `count`：要写的数据的实际的大小
  - 返回值
    - 成功：实际写入的字节数
    - 失败：返回-1，并设置`errno`

```c
#include <unistd.h>
#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>

int main() 
{
    // 1.通过open打开english.txt文件
    int srcfd = open("english.txt", O_RDONLY);
    if(srcfd == -1) {
        perror("open");
        return -1;
    }

    // 2.创建一个新的文件（拷贝文件）
    int destfd = open("cpy.txt", O_WRONLY | O_CREAT, 0664);
    if(destfd == -1) {
        perror("open");
        return -1;
    }

    // 3.频繁的读写操作
    char buf[1024] = {0};
    int len = 0;
    while((len = read(srcfd, buf, sizeof(buf))) > 0) {
        write(destfd, buf, len);
    }

    // 4.关闭文件
    close(destfd);
    close(srcfd);


    return 0;
}
```

#### lseek

- `off_t lseek(int fd, off_t offset, int whence);`，使用`man 2 lseek`查看帮助

```c
/*  
    标准C库的函数
    #include <stdio.h>
    int fseek(FILE *stream, long offset, int whence);

    Linux系统函数
    #include <sys/types.h>
    #include <unistd.h>
    off_t lseek(int fd, off_t offset, int whence);
        参数：
            - fd：文件描述符，通过open得到的，通过这个fd操作某个文件
            - offset：偏移量
            - whence:
                SEEK_SET
                    设置文件指针的偏移量
                SEEK_CUR
                    设置偏移量：当前位置 + 第二个参数offset的值
                SEEK_END
                    设置偏移量：文件大小 + 第二个参数offset的值
        返回值：返回文件指针的位置

    作用：
        1.移动文件指针到文件头
        lseek(fd, 0, SEEK_SET);

        2.获取当前文件指针的位置
        lseek(fd, 0, SEEK_CUR);

        3.获取文件长度
        lseek(fd, 0, SEEK_END);

        4.拓展文件的长度，当前文件10b, 110b, 增加了100个字节
        lseek(fd, 100, SEEK_END)
        注意：需要写一次数据

*/

#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <unistd.h>
#include <stdio.h>

int main() 
{
    int fd = open("hello.txt", O_RDWR);

    if(fd == -1) {
        perror("open");
        return -1;
    }

    // 扩展文件的长度
    int ret = lseek(fd, 100, SEEK_END);
    if(ret == -1) {
        perror("lseek");
        return -1;
    }

    // 写入一个空数据，如果缺少，那么会扩展失败
    write(fd, " ", 1);

    // 关闭文件
    close(fd);

    return 0;
}

```

- 扩展前

  ![image-20210905182600860](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210905182600860.png)

- 扩展后（原先为5个字节，扩展100个字节，然后写入一个字节）

  ![image-20210905182955313](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210905182955313.png)

#### stat & lstat(获取文件信息及软链接信息)

- `int stat(const char *pathname, struct stat *statbuf);`，使用`man 2 stat`查看帮助

- `int lstat(const char *pathname, struct stat *statbuf);`，使用`man 2 lstat`查看帮助

- Linux命令：`stat`

  ![image-20210905184130981](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210905184130981.png)

- `stat`结构体

  ```c
  struct stat {
      dev_t st_dev; // 文件的设备编号
      ino_t st_ino; // 节点
      mode_t st_mode; // 文件的类型和存取的权限
      nlink_t st_nlink; // 连到该文件的硬连接数目
      uid_t st_uid; // 用户ID
      gid_t st_gid; // 组ID
      dev_t st_rdev; // 设备文件的设备编号
      off_t st_size; // 文件字节数(文件大小)
      blksize_t st_blksize; // 块大小
      blkcnt_t st_blocks; // 块数
      time_t st_atime; // 最后一次访问时间
      time_t st_mtime; // 最后一次修改时间
      time_t st_ctime; // 最后一次改变时间(指属性)
  };
  ```

  - `st_mode`

    ![image-20210905184325137](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210905184325137.png)

```c
/*
    #include <sys/types.h>
    #include <sys/stat.h>
    #include <unistd.h>

    int stat(const char *pathname, struct stat *statbuf);
        作用：获取一个文件相关的一些信息
        参数:
            - pathname：操作的文件的路径
            - statbuf：结构体变量，传出参数，用于保存获取到的文件的信息
        返回值：
            成功：返回0
            失败：返回-1 设置errno

    int lstat(const char *pathname, struct stat *statbuf);
        参数:
            - pathname：操作的文件的路径
            - statbuf：结构体变量，传出参数，用于保存获取到的文件的信息
        返回值：
            成功：返回0
            失败：返回-1 设置errno

*/

#include <sys/types.h>
#include <sys/stat.h>
#include <unistd.h>
#include <stdio.h>

int main() 
{
    struct stat statbuf;

    int ret = stat("a.txt", &statbuf);

    if(ret == -1) {
        perror("stat");
        return -1;
    }

    printf("size: %ld\n", statbuf.st_size);


    return 0;
}
```

#### 模拟实现`ls -l`

```c
#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <unistd.h>
#include <pwd.h>        // for getpwuid()
#include <grp.h>        // for getgrgid()
#include <time.h>       // for ctime()
#include <string.h>     // for strncpy(), strlen()

// 模拟实现 ls -l 指令
// -rw-rw-r-- 1 nowcoder nowcoder 12 12月  3 15:48 a.txt
int main(int argc, char * argv[]) 
{
    // 判断输入的参数是否正确
    if(argc < 2) {
        printf("%s filename\n", argv[0]);
        return -1;
    }

    // 通过stat函数获取用户传入的文件的信息
    struct stat st;
    int ret = stat(argv[1], &st);
    if(ret == -1) {
        perror("stat");
        return -1;
    }

    // 获取文件类型和文件权限
    char perms[11] = {0};   // 用于保存文件类型和文件权限的字符串

    switch(st.st_mode & S_IFMT) {
        case S_IFLNK:
            perms[0] = 'l';
            break;
        case S_IFDIR:
            perms[0] = 'd';
            break;
        case S_IFREG:
            perms[0] = '-';
            break; 
        case S_IFBLK:
            perms[0] = 'b';
            break; 
        case S_IFCHR:
            perms[0] = 'c';
            break; 
        case S_IFSOCK:
            perms[0] = 's';
            break;
        case S_IFIFO:
            perms[0] = 'p';
            break;
        default:
            perms[0] = '?';
            break;
    }

    // 判断文件的访问权限

    // 文件所有者
    perms[1] = (st.st_mode & S_IRUSR) ? 'r' : '-';
    perms[2] = (st.st_mode & S_IWUSR) ? 'w' : '-';
    perms[3] = (st.st_mode & S_IXUSR) ? 'x' : '-';

    // 文件所在组
    perms[4] = (st.st_mode & S_IRGRP) ? 'r' : '-';
    perms[5] = (st.st_mode & S_IWGRP) ? 'w' : '-';
    perms[6] = (st.st_mode & S_IXGRP) ? 'x' : '-';

    // 其他人
    perms[7] = (st.st_mode & S_IROTH) ? 'r' : '-';
    perms[8] = (st.st_mode & S_IWOTH) ? 'w' : '-';
    perms[9] = (st.st_mode & S_IXOTH) ? 'x' : '-';

    // 硬连接数
    int linkNum = st.st_nlink;

    // 文件所有者
    char* fileUser = getpwuid(st.st_uid)->pw_name;

    // 文件所在组
    char* fileGrp = getgrgid(st.st_gid)->gr_name;

    // 文件大小
    long int fileSize = st.st_size;

    // 获取修改的时间
    char* time = ctime(&st.st_mtime);

    char mtime[512] = {0};
    strncpy(mtime, time, strlen(time) - 1);

    char buf[1024];
    sprintf(buf, "%s %d %s %s %ld %s %s", perms, linkNum, fileUser, fileGrp, fileSize, mtime, argv[1]);

    printf("%s\n", buf);

    return 0;
}
```

### 文件属性操作函数

#### access

- `int access(const char *pathname, int mode);`

```c
/*
    #include <unistd.h>
    int access(const char *pathname, int mode);
        作用：判断某个文件是否有某个权限，或者判断文件是否存在
        参数：
            - pathname: 判断的文件路径
            - mode:
                R_OK: 判断是否有读权限
                W_OK: 判断是否有写权限
                X_OK: 判断是否有执行权限
                F_OK: 判断文件是否存在
        返回值：成功返回0， 失败返回-1
*/

#include <unistd.h>
#include <stdio.h>

int main() 
{
    int ret = access("a.txt", F_OK);
    if(ret == -1) {
        perror("access");
    }

    printf("文件存在！！!\n");

    return 0;
}
```

#### chmod & chown

- `int chmod(const char *filename, int mode);`

```c
/*
    #include <sys/stat.h>
    int chmod(const char *pathname, mode_t mode);
        修改文件的权限
        参数：
            - pathname: 需要修改的文件的路径
            - mode:需要修改的权限值，八进制的数
        返回值：成功返回0，失败返回-1

*/
#include <sys/stat.h>
#include <stdio.h>
int main() 
{
    int ret = chmod("a.txt", 0777);

    if(ret == -1) {
        perror("chmod");
        return -1;
    }

    return 0;
}
```

- `int chown(const char *path, uid_t owner, gid_t group);`
  - 修改文件所有者
  - 可使用`vim /etc/passwd`查看有哪些用户
  - 可使用`vim /etc/group`查看有哪些组

#### truncate

- `int truncate(const char *path, off_t length);`

```c
/*
    #include <unistd.h>
    #include <sys/types.h>
    int truncate(const char *path, off_t length);
        作用：缩减或者扩展文件的尺寸至指定的大小
        参数：
            - path: 需要修改的文件的路径
            - length: 需要最终文件变成的大小
        返回值：
            成功返回0， 失败返回-1
*/

#include <unistd.h>
#include <sys/types.h>
#include <stdio.h>

int main() 
{
    int ret = truncate("b.txt", 5);

    if(ret == -1) {
        perror("truncate");
        return -1;
    }

    return 0;
}
```

### 目录操作函数

#### mkdir

- `int mkdir(const char *pathname, mode_t mode);`

```c
/*
    #include <sys/stat.h>
    #include <sys/types.h>
    int mkdir(const char *pathname, mode_t mode);
        作用：创建一个目录
        参数：
            pathname: 创建的目录的路径
            mode: 权限，八进制的数
        返回值：
            成功返回0， 失败返回-1
*/

#include <sys/stat.h>
#include <sys/types.h>
#include <stdio.h>

int main() 
{
    int ret = mkdir("aaa", 0777);

    if(ret == -1) {
        perror("mkdir");
        return -1;
    }

    return 0;
}
```

#### rename

- `int rename(const char *oldpath, const char *newpath);`

```c
/*
    #include <stdio.h>
    int rename(const char *oldpath, const char *newpath);

*/
#include <stdio.h>

int main() 
{
    int ret = rename("aaa", "bbb");

    if(ret == -1) {
        perror("rename");
        return -1;
    }

    return 0;
}
```

#### chdir & getcwd

- `int chdir(const char *path);`

- `char *getcwd(char *buf, size_t size);`

```c
/*

    #include <unistd.h>
    int chdir(const char *path);
        作用：修改进程的工作目录
            比如在/home/nowcoder 启动了一个可执行程序a.out, 进程的工作目录 /home/nowcoder
        参数：
            path : 需要修改的工作目录

    #include <unistd.h>
    char *getcwd(char *buf, size_t size);
        作用：获取当前工作目录
        参数：
            - buf : 存储的路径，指向的是一个数组（传出参数）
            - size: 数组的大小
        返回值：
            返回的指向的一块内存，这个数据就是第一个参数

*/
#include <unistd.h>
#include <stdio.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <fcntl.h>

int main() 
{
    // 获取当前的工作目录
    char buf[128];
    getcwd(buf, sizeof(buf));
    printf("当前的工作目录是：%s\n", buf);

    // 修改工作目录
    int ret = chdir("/home/u/Desktop/Linux/test");
    if(ret == -1) {
        perror("chdir");
        return -1;
    } 

    // 创建一个新的文件
    int fd = open("chdir.txt", O_CREAT | O_RDWR, 0664);
    if(fd == -1) {
        perror("open");
        return -1;
    }

    close(fd);

    // 获取当前的工作目录
    char buf1[128];
    getcwd(buf1, sizeof(buf1));
    printf("当前的工作目录是：%s\n", buf1);
    
    return 0;
}
```

### 目录遍历函数

- 打开一个目录：`DIR *opendir(const char *name);`

- 读取目录中的数据：`struct dirent *readdir(DIR *dirp);`

- 关闭目录：`int closedir(DIR *dirp);`

- `dirent` 结构体和 `d_type`

  ```c
  struct dirent
  {
      // 此目录进入点的inode
      ino_t d_ino; 
      // 目录文件开头至此目录进入点的位移
      off_t d_off; 
      // d_name 的长度, 不包含NULL字符
      unsigned short int d_reclen; 
      // d_name 所指的文件类型
      unsigned char d_type; 
      // 文件名
      char d_name[256];
  };
  ```

  - `d_type`

    ![image-20210908203416289](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210908203416289.png)

- **读取文件夹文件数目**实例

  ```c
  /*
      // 打开一个目录
      #include <sys/types.h>
      #include <dirent.h>
      DIR *opendir(const char *name);
          参数：
              - name: 需要打开的目录的名称
          返回值：
              DIR * 类型，理解为目录流
              错误返回NULL
  
  
      // 读取目录中的数据
      #include <dirent.h>
      struct dirent *readdir(DIR *dirp);
          - 参数：dirp是opendir返回的结果
          - 返回值：
              struct dirent，代表读取到的文件的信息
              读取到了末尾或者失败了，返回NULL
  
      // 关闭目录
      #include <sys/types.h>
      #include <dirent.h>
      int closedir(DIR *dirp);
  
  */
  #include <sys/types.h>
  #include <dirent.h>
  #include <stdio.h>
  #include <string.h>
  #include <stdlib.h>
  
  int getFileNum(const char * path);
  
  // 读取某个目录下所有的普通文件的个数
  int main(int argc, char * argv[]) 
  {
      if(argc < 2) {
          printf("%s path\n", argv[0]);
          return -1;
      }
  
      int num = getFileNum(argv[1]);
  
      printf("普通文件的个数为：%d\n", num);
  
      return 0;
  }
  
  // 用于获取目录下所有普通文件的个数
  int getFileNum(const char * path) {
  
      // 1.打开目录
      DIR * dir = opendir(path);
  
      if(dir == NULL) {
          perror("opendir");
          exit(0);
      }
  
      struct dirent *ptr;
  
      // 记录普通文件的个数
      int total = 0;
  
      while((ptr = readdir(dir)) != NULL) {
  
          // 获取名称
          char * dname = ptr->d_name;
  
          // 忽略掉. 和..
          if(strcmp(dname, ".") == 0 || strcmp(dname, "..") == 0) {
              continue;
          }
  
          // 判断是否是普通文件还是目录
          if(ptr->d_type == DT_DIR) {
              // 目录,需要继续读取这个目录
              char newpath[256];
              sprintf(newpath, "%s/%s", path, dname);
              total += getFileNum(newpath);
          }
  
          if(ptr->d_type == DT_REG) {
              // 普通文件
              total++;
          }
      }
  
      // 关闭目录
      closedir(dir);
  
      return total;
  }
  ```

### 文件描述符之`dup`、`dup2`

#### dup

- `int dup(int oldfd);`
- 复制文件描述符

```c
/*
    #include <unistd.h>
    int dup(int oldfd);
        作用：复制一个新的文件描述符
        fd=3, int fd1 = dup(fd),
        fd指向的是a.txt, fd1也是指向a.txt
        从空闲的文件描述符表中找一个最小的，作为新的拷贝的文件描述符


*/

#include <unistd.h>
#include <stdio.h>
#include <fcntl.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <string.h>

int main() 
{
    int fd = open("a.txt", O_RDWR | O_CREAT, 0664);

    int fd1 = dup(fd);

    if(fd1 == -1) {
        perror("dup");
        return -1;
    }

    printf("fd : %d , fd1 : %d\n", fd, fd1);

    close(fd);

    char * str = "hello,world";
    int ret = write(fd1, str, strlen(str));
    if(ret == -1) {
        perror("write");
        return -1;
    }

    close(fd1);

    return 0;
}
```

#### dup2

- `int dup2(int oldfd, int newfd);`
- 重定向文件描述符

```c
/*
    #include <unistd.h>
    int dup2(int oldfd, int newfd);
        作用：重定向文件描述符
        oldfd 指向 a.txt, newfd 指向 b.txt
        调用函数成功后：newfd 和 b.txt 做close, newfd 指向了 a.txt
        oldfd 必须是一个有效的文件描述符
        oldfd和newfd值相同，相当于什么都没有做
*/
#include <unistd.h>
#include <stdio.h>
#include <string.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <fcntl.h>

int main() 
{
    int fd = open("1.txt", O_RDWR | O_CREAT, 0664);
    if(fd == -1) {
        perror("open");
        return -1;
    }

    int fd1 = open("2.txt", O_RDWR | O_CREAT, 0664);
    if(fd1 == -1) {
        perror("open");
        return -1;
    }

    printf("fd : %d, fd1 : %d\n", fd, fd1);

    int fd2 = dup2(fd, fd1);
    if(fd2 == -1) {
        perror("dup2");
        return -1;
    }

    // 通过fd1去写数据，实际操作的是1.txt，而不是2.txt
    char * str = "hello, dup2";
    int len = write(fd1, str, strlen(str));

    if(len == -1) {
        perror("write");
        return -1;
    }

    printf("fd : %d, fd1 : %d, fd2 : %d\n", fd, fd1, fd2);

    close(fd);
    close(fd1);

    return 0;
}
```

### fcntl 函数

- `int fcntl(int fd, int cmd, ... /* arg */ );`
- **复制文件描述符**和**设置/获取文件的状态标志**

```c
/*

    #include <unistd.h>
    #include <fcntl.h>

    int fcntl(int fd, int cmd, ...);
    参数：
        fd : 表示需要操作的文件描述符
        cmd: 表示对文件描述符进行如何操作
            - F_DUPFD : 复制文件描述符,复制的是第一个参数fd，得到一个新的文件描述符（返回值）
                int ret = fcntl(fd, F_DUPFD);

            - F_GETFL : 获取指定的文件描述符文件状态flag
              获取的flag和我们通过open函数传递的flag是一个东西。

            - F_SETFL : 设置文件描述符文件状态flag
              必选项：O_RDONLY, O_WRONLY, O_RDWR 不可以被修改
              可选性：O_APPEND, O_NONBLOCK
                O_APPEND 表示追加数据
                NONBLOK 设置成非阻塞
        
        阻塞和非阻塞：描述的是函数调用的行为。
*/

#include <unistd.h>
#include <fcntl.h>
#include <stdio.h>
#include <string.h>

int main() 
{
    // 1.复制文件描述符
    // int fd = open("1.txt", O_RDONLY);
    // int ret = fcntl(fd, F_DUPFD);

    // 2.修改或者获取文件状态flag
    int fd = open("1.txt", O_RDWR);
    if(fd == -1) {
        perror("open");
        return -1;
    }

    // 获取文件描述符状态flag
    int flag = fcntl(fd, F_GETFL);
    if(flag == -1) {
        perror("fcntl");
        return -1;
    }
    flag |= O_APPEND;   // flag = flag | O_APPEND

    // 修改文件描述符状态的flag，给flag加入O_APPEND这个标记
    int ret = fcntl(fd, F_SETFL, flag);
    if(ret == -1) {
        perror("fcntl");
        return -1;
    }

    char * str = "nihao";
    write(fd, str, strlen(str));

    close(fd);

    return 0;
}
```

# 进程概述

## 程序和进程

- `程序`是包含一系列**信息**的文件，这些信息描述了如何在运行时创建一个`进程`
  - **二进制格式标识**：每个程序文件都包含用于描述可执行文件格式的元信息。内核利用此信息来解释文件中的其他信息，Linux中为ELF可执行连接格式
  - **机器语言指令**：对程序算法进行编码
  - **程序入口地址**：标识程序开始执行时的起始指令位置
  - **数据**：程序文件包含的变量初始值和程序使用的字面量值（比如字符串）
  - **符号表及重定位表**：描述程序中函数和变量的位置及名称。这些表格有多重用途，其中包括调试和运行时的符号解析（动态链接）
  - **共享库和动态链接信息**：程序文件所包含的一些字段，列出了程序运行时需要使用的共享库，以及加载共享库的动态连接器的路径名
  - 其他信息：程序文件还包含许多其他信息，用以描述如何创建进程
- **`进程`是正在运行的`程序`的实例**。是一个具有一定独立功能的程序关于某个数据集合的一次运行活动。它是操作系统动态执行的基本单元，在传统的操作系统中，进程既是基本的分配单元，也是基本的执行单元
- 可以用**一个程序来创建多个进程**，进程是由内核定义的抽象实体，并为该实体分配用以执行程序的各项系统资源。从内核的角度看，进程由用户内存空间和一系列内核数据结构组成，其中用户内存空间包含了程序代码及代码所使用的变量，而内核数据结构则用于维护进程状态信息。记录在内核数据结构中的信息包括许多与进程相关的标识号（IDs）、虚拟内存表、打开文件的描述符表、信号传递及处理的有关信息、进程资源使用及限制、当前工作目录和大量的其他信息

## 单道、多道程序设计

- `单道程序`，即在计算机内存中只允许一个的程序运行
- `多道程序`设计技术是在计算机内存中同时存放几道相互独立的程序，使它们**在管理程序控制下，相互穿插运行**，两个或两个以上程序在计算机系统中同处于开始到结束之间的状态，这些程序共享计算机系统资源。**引入多道程序设计技术的根本目的是为了提高 CPU 的利用率**
- 对于一个**单 CPU 系统**来说，程序同时处于运行状态只是一种宏观上的概念，他们虽然都已经开始运行，但**就微观而言，任意时刻，CPU 上运行的程序只有一个**
- 在多道程序设计模型中，多个进程轮流使用 CPU。而当下常见 **CPU 为纳秒级**，1秒可以执行大约 10 亿条指令。由于**人眼的反应速度是毫秒级**，所以看似同时在运行

## 时间片

- `时间片（timeslice）`又称为`量子（quantum）`或`处理器片（processor slice）`是操作系统分配给每个正在运行的进程微观上的一段 CPU 时间。事实上，虽然一台计算机通常可能有多个 CPU，但是同一个 CPU 永远不可能真正地同时运行多个任务。在只考虑一个 CPU 的情况下，这些进程“看起来像”同时运行的，实则是轮番穿插地运行，由于时间片通常很短（在 Linux 上为 `5ms－800ms`），用户不会感觉到
- **时间片由操作系统内核的调度程序分配给每个进程**。首先，内核会给每个进程分配相等的初始时间片，然后每个进程轮番地执行相应的时间，当所有进程都处于时间片耗尽的状态时，内核会重新为每个进程计算并分配时间片，如此往复

## 并行和并发

- `并行(parallel)`：指在同一时刻，有多条指令在多个处理器上同时执行
- `并发(concurrency)`：指在同一时刻只能有一条指令执行，但多个进程指令被快速的轮换执行，使得在宏观上具有多个进程同时执行的效果，但在微观上并不是同时执行的，只是把时间分成若干段，使多个进程快速交替的执行

![image-20210916215642423](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210916215642423.png)

## 进程控制块（PCB） 

- 为了管理进程，内核必须对每个进程所做的事情进行清楚的描述。内核为每个进程分配一个`PCB(Processing Control Block)进程控制块`，维护进程相关的信息，Linux 内核的进程控制块是 `task_struct` 结构体

- 在 `/usr/src/linux-headers-xxx/include/linux/sched.h` 文件中可以查看 `struct task_struct` 结构体定义，其中`linux-headers-xxx`需要替换为该目录下相应的版本

- 需要掌握的`struct task_struct` 结构体成员

  - **进程id**：系统中每个进程有唯一的 id，用 `pid_t` 类型表示，其实就是一个非负整数

  - **进程的状态**：有`就绪`、`运行`、`挂起`、`停止`等状态

  - 进程切换时需要**保存和恢复的一些CPU寄存器**

  - 描述**虚拟地址空间**的信息

  - 描述**控制终端**的信息

  - 当前工作目录（Current Working Directory） 

  - `umask 掩码`

  - 文件描述符表，包含很多指向 file 结构体的指针

  - 和信号相关的信息

  - 用户 id 和组 id

  - 会话（Session）和进程组

  - 进程可以使用的资源上限（Resource Limit），在Linux中可用`ulimit -a`查看资源上限

    ![image-20210916220259062](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210916220259062.png)

# 进程状态

## 基本概念

- 进程状态反映进程执行过程的变化，这些状态随着进程的执行和外界条件的变化而转换
- 分为`三态模型`和`五态模型`

## 三态模型

- `运行态`：进程占有处理器正在运行
- `就绪态`：进程具备运行条件，等待系统分配处理器以便运行。当进程已分配到除CPU以外的所有必要资源后，只要再获得CPU，便可立即执行。在一个系统中处于就绪状态的进程可能有多个，通常将它们排成一个队列，称为就绪队列
- `阻塞态`：又称为等待(wait)态或睡眠(sleep)态，指进程不具备运行条件，正在等待某个事件的完成

![image-20210916222221394](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210916222221394.png)

## 五态模型

- 除`新建态`和`终止态`，其余三个状态与`三态模型`一致
- `新建态`：进程刚被创建时的状态，尚未进入就绪队列
- `终止态`：进程完成任务到达正常结束点，或出现无法克服的错误而异常终止，或被操作系统及有终止权的进程所终止时所处的状态。进入终止态的进程以后不再执行，但依然保留在操作系统中等待善后。一旦其他进程完成了对终止态进程的信息抽取之后，操作系统将删除该进程

![image-20210916222349607](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210916222349607.png)

## 进程相关命令

### 查看进程-静态

- `ps`命令用来查看进程（静态），可以使用`man ps`查看使用说明

  ![image-20210928203808470](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210928203808470.png)

- 常用参数含义

  - a：显示终端上的所有进程，包括其他用户的进程
  - u：显示进程的详细信息
  - x：显示没有控制终端的进程
  - j：列出与作业控制相关的信息

- `ps -aux`或`ps aux`

  ![image-20210928203512766](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210928203512766.png)

  - `USER`：进程所属用户

  - `PID`：进程ID

  - `%CPU`：CPU使用占比

  - `%MEM`：内存使用占比

  - `TTY`：进程所属终端，在终端直接执行`tty`可查看当前`Terminal`所属终端（因为此时我还打开了另外两个终端）

    ![image-20210928204341231](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210928204341231.png)

  - `STAT`：进程状态

    - D ：不可中断 Uninterruptible（usually IO）
    - R：正在运行，或在队列中的进程
    - S(大写) ：处于休眠状态
    - T：停止或被追踪
    - Z：僵尸进程
    - W：进入内存交换（从内核2.6开始无效）
    - X：死掉的进程
    - <：高优先级
    - N：低优先级
    - s：包含子进程
    - \+：位于前台的进程组

  - `START`：进程开始执行时间

  - `TIME`：进程执行持续时间

  - `COMMAND`：进程执行命令

- `ps -ajx`或`ps ajx`

  ![image-20210928203535360](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210928203535360.png)

  - `PPID`：该进程的父进程ID
  - `PGID`：该进程所属组ID
  - `SID`：该进程所属会话(session)ID，多个组构成会话

### 查看进程-动态

- `top`

  ![image-20210928205835614](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210928205835614.png)

- 可以在使用 top 命令时加上 -d 来指定显示信息更新的时间间隔

- 在 top 命令执行后，可以按以下按键对显示的结果进行排序

  - M：根据内存使用量排序
  - P：根据 CPU 占有率排序
  - T：根据进程运行时间长短排序
  - U：根据用户名来筛选进程
  - K：输入指定的 PID 杀死进程

### 杀死进程

- `kill [-signal] pid`

- `kill -l`：列出所有信号

  ![image-20210928210055119](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210928210055119.png)

- `kill -9 进程ID`等价于`kill –SIGKILL 进程ID`

  ![image-20210928210427167](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210928210427167.png)

- `killall name`：根据进程名杀死进程

##  进程号和相关函数

- 每个进程都由进程号来标识，其类型为 `pid_t（整型）`，进程号的范围：`0～32767`。进程号总是唯一的，但可以重用。当一个进程终止后，其进程号就可以再次使用
- **任何进程（除 init 进程）都是由另一个进程创建**，该进程称为被创建进程的父进程，对应的进程号称为父进程号（PPID）
- **进程组是一个或多个进程的集合**。他们之间相互关联，进程组可以接收同一终端的各种信号，关联的进程有一个进程组号（PGID）。默认情况下，当前的进程号会当做当前的进程组号
- 进程号和进程组相关函数
  - `pid_t getpid(void);`：获取进程ID
  - `pid_t getppid(void);`：获取进程的父进程ID
  - `pid_t getpgid(pid_t pid);`：获取进程的组ID

# 进程创建

## 进程创建：fork

- 可通过`man 2 fork`查看帮助

  ![image-20211002151951979](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002151951979.png)

- `pid_t fork(void);`

  ```c
  /*
      #include <sys/types.h>
      #include <unistd.h>
  
      pid_t fork(void);
          函数的作用：用于创建子进程。
          返回值：
              fork()的返回值会返回两次。一次是在父进程中，一次是在子进程中。
              在父进程中返回创建的子进程的ID,
              在子进程中返回0
              如何区分父进程和子进程：通过fork的返回值。
              在父进程中返回-1，表示创建子进程失败，并且设置errno
  */
  
  #include <sys/types.h>
  #include <unistd.h>
  #include <stdio.h>
  
  int main() 
  {
      int num = 10;
  
      // 创建子进程
      pid_t pid = fork();
  
      // 判断是父进程还是子进程
      if(pid > 0) {
          printf("pid : %d\n", pid);
          // 如果大于0，返回的是创建的子进程的进程号，当前是父进程
          printf("i am parent process, pid : %d, ppid : %d\n", getpid(), getppid());
  
          printf("parent num : %d\n", num);
          num += 10;
          printf("parent num += 10 : %d\n", num);
      } else if(pid == 0) {
          // 当前是子进程
          printf("i am child process, pid : %d, ppid : %d\n", getpid(),getppid());
         
          printf("child num : %d\n", num);
          num += 100;
          printf("child num += 100 : %d\n", num);
      }
  
      // for循环
      for(int i = 0; i < 3; i++) {
          printf("i : %d , pid : %d\n", i , getpid());
          sleep(1);
      }
  
      return 0;
  }
  ```

  ![image-20210928220107951](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20210928220107951.png)

## fork工作原理

- Linux 的 `fork()` 使用是通过**写时拷贝 (copy- on-write) 实现**。写时拷贝是一种可以推迟甚至避免拷贝数据的技术

- 内核此时并不复制整个进程的地址空间，而是让**父子进程共享同一个地址空间**，只有在**需要写入的时候**才会复制地址空间，从而使各个进程拥有各自的地址空间。即**资源的复制是在需要写入的时候才会进行，在此之前，只有以只读方式共享**（示例程序中`num`的作用）

- **fork之后父子进程共享文件**。fork产生的子进程与父进程**有相同的文件描述符，指向相同的文件表**，引用计数增加，共享文件偏移指针

- 使用**虚拟地址空间**，由于用的是**写时拷贝 (copy- on-write) **，下图**不完全准确，但可帮助理解**

  ![image-20211001210207674](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211001210207674.png)

## 父子进程关系

### 区别

- **fork()函数的返回值不同**。父进程中: >0 返回的是子进程的ID，子进程中: =0
- **pcb中的一些数据不同**。pcb中存的是**当前进程的ID(pid)**，**当前进程的父ID(ppid)**和**信号集**

### 共同点

- 在某些状态下，即**子进程刚被创建出来，还没有执行任何的写数据的操作**。此时**用户区的数据**和**文件描述符表**父进程和子进程一样

### 父子进程对变量共享说明

- 刚开始的时候，是一样的，共享的。如果修改了数据，不共享了
- 读时共享（子进程被创建，两个进程没有做任何的写的操作），写时拷贝

## GDB 多进程调试

- 在以下调试程序**第10行**及**第20行**打断点，后续说明都基于这两个断点

  ![image-20211001212316252](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211001212316252.png)

- 打断点及查看

  ![image-20211001212346310](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211001212346310.png)

- 使用 GDB 调试的时候，GDB 默认只能跟踪一个进程，可以在 fork 函数调用之前，通过指令设置 GDB 调试工具跟踪父进程或者是跟踪子进程，**默认跟踪父进程**

- 查看当前跟踪的进程：`show follow-fork-mode`

  ![image-20211001211945721](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211001211945721.png)

- 设置调试父进程或者子进程：`set follow-fork-mode [parent（默认）| child]`

  ![image-20211001212004830](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211001212004830.png)

  - 调试父进程，子进程循环会自动执行，完毕后需要输入`n`继续执行父进程

    ![image-20211001213311443](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211001213311443.png)

  - 调试子进程，父进程循环会自动执行，完毕后需要输入`n`继续执行子进程

    ![image-20211001213147830](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211001213147830.png)

- 查看调试模式：`show detach-on-fork`

  ![image-20211001212131057](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211001212131057.png)

- 设置调试模式：`set detach-on-fork [on | off]`

  - 默认为 on，表示调试当前进程的时候，其它的进程继续运行，如果为 off，调试当前进程的时候，其它进程被 GDB 挂起

  - 注：在设置为`off`时，执行程序会报以下错误，原因是**gdb 8.x版本存在bug**

    ![image-20211001212533538](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211001212533538.png)

  - 以下正常执行的`gdb`版本为`v7.11.1`（截图来源于视频），与设置为`on`的区别在于，**`for`循环是否打印**

    ![image-20211001213504787](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211001213504787.png)

- 查看调试的进程：`info inferiors`，此时调试进程为`parent`，需要执行后才会显示进程

  - 当`detach-on-fork`为`on`时，只会显示一个进程（==因为另一个进程已经执行完毕，销毁==，猜测）

    ![image-20211001215254459](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211001215254459.png)

  - 当`detach-on-fork`为`off`时，会显示两个进程

    ![image-20211001215414550](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211001215414550.png)

- 切换当前调试的进程：`inferior Num`

- 使进程脱离 GDB 调试：`detach inferiors Num`

# exec函数族

## 基本概念

- 可通过`man 3 exec`查看帮助

  ![image-20211002092129575](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002092129575.png)

- `exec 函数族`的作用是根据指定的文件名找到可执行文件，并用它来取代调用进程的内容，换句话说，就是**在调用进程内部执行一个可执行文件**

- exec 函数族的函数执行成功后不会返回，因为调用进程的实体，包括代码段，数据段和堆栈等都已经被新的内容取代，只留下进程 ID 等一些表面上的信息仍保持原样，颇有些神似“三十六计”中的“金蝉脱壳”。看上去还是旧的躯壳，却已经注入了新的灵魂。只有调用失败了，它们才会返回 -1，从原程序的调用点接着往下执行

- 用户区替换为`a.out`的内容，内核区不变

  ![image-20211002090629048](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002090629048.png)

## 种类

- 基本组件为`exec`，后面跟不同参数，代表不同含义

  - `l(list) `：参数地址列表，以**空指针结尾**

  - `v(vector) `：存有各参数地址的指针数组的地址

  - `p(path) `：按 PATH 环境变量指定的目录搜索可执行文件，可用`env`查看现有的环境变量

    ![image-20211002093521376](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002093521376.png)

  - `e(environment)`：存有环境变量字符串地址的指针数组的地址，增加新的环境变量

- 说明：下列示例程序除核心代码外，保持一致，初始包含文件有

  ![image-20211002091926160](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002091926160.png)

- `int execl(const char *path, const char *arg, .../* (char *) NULL */);`

  - `path`：需要指定的执行的文件的路径或者名称

  - `arg`：是执行可执行文件所需要的参数列表。第一个参数一般没有什么作用，为了方便，一般写的是执行的程序的名称，从第二个参数开始往后，就是程序执行所需要的的参数列表，参数最后需要以NULL结束（哨兵）

  - code

    ```c
    #include <unistd.h>
    #include <stdio.h>
    
    int main() {
    
    
        // 创建一个子进程，在子进程中执行exec函数族中的函数
        pid_t pid = fork();
    
        if(pid > 0) {
            // 父进程
            printf("i am parent process, pid : %d\n",getpid());
            // 如果不加这句，会存在孤儿进程，输出异常
            sleep(1);
        }else if(pid == 0) {
            // 子进程
            // 调用自己写的可执行程序
            execl("/home/u/Desktop/Linux/hello","hello",NULL);
    
            // 调用系统进程
            // execl("/bin/ps", "ps", "aux", NULL);
            perror("execl");
            printf("i am child process, pid : %d\n", getpid());
    
        }
    
        for(int i = 0; i < 3; i++) {
            printf("i = %d, pid = %d\n", i, getpid());
        }
    
    
        return 0;
    }
    ```

  - output

    ![image-20211002092658778](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002092658778.png)

  - 说明：可以看到，子进程的内容（用户区）被替换，打印的是`hello`中的内容

- `int execlp(const char *file, const char *arg, ... /* (char *) NULL */);`

  - 会到环境变量中查找指定的可执行文件，如果找到了就执行，找不到就执行不成功

  - `file`：只需要提供名称（不需要提供路径）

  - code

    ```c
    #include <unistd.h>
    #include <stdio.h>
    
    int main() {
    
    
        // 创建一个子进程，在子进程中执行exec函数族中的函数
        pid_t pid = fork();
    
        if(pid > 0) {
            // 父进程
            printf("i am parent process, pid : %d\n",getpid());
            sleep(1);
        }else if(pid == 0) {
            // 子进程
            execlp("ps", "ps", "aux", NULL);
    
            printf("i am child process, pid : %d\n", getpid());
    
        }
    
        for(int i = 0; i < 3; i++) {
            printf("i = %d, pid = %d\n", i, getpid());
        }
    
    
        return 0;
    }
    ```

  - output

    ![image-20211002093005924](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002093005924.png)

- `int execle(const char *path, const char *arg, .../*, (char *) NULL, char * const envp[] */);`

  - `envp`：添加路径至环境变量，注意以`NULL`结尾，否则报`execle: Bad address`

  - code

    ```c
    #include <unistd.h>
    #include <stdio.h>
    
    int main() {
    
    
        // 创建一个子进程，在子进程中执行exec函数族中的函数
        pid_t pid = fork();
    
        if(pid > 0) {
            // 父进程
            printf("i am parent process, pid : %d\n",getpid());
            sleep(1);
        }else if(pid == 0) {
            // 子进程
            // 需要已NULL结尾，否则报 execle: Bad address 错误
            char* envp[] = {"/home/u/Desktop/Linux/", NULL};
            execle("/home/u/Desktop/Linux/hello", "hello", NULL, envp);
            perror("execle");
            printf("i am child process, pid : %d\n", getpid());
    
        }
    
        for(int i = 0; i < 3; i++) {
            printf("i = %d, pid = %d\n", i, getpid());
        }
    
    
        return 0;
    }
    ```

  - output

    ![image-20211002095344859](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002095344859.png)

- `int execv(const char *path, char *const argv[]);`

  - `argv`：将运行参数都写在数组中

  - code

    ```c
    #include <unistd.h>
    #include <stdio.h>
    
    int main() {
    
    
        // 创建一个子进程，在子进程中执行exec函数族中的函数
        pid_t pid = fork();
    
        if(pid > 0) {
            // 父进程
            printf("i am parent process, pid : %d\n",getpid());
            sleep(1);
        }else if(pid == 0) {
            // 子进程
            char* argv[] = {"hello", NULL};
            execv("/home/u/Desktop/Linux/hello", argv);
            perror("execv");
            printf("i am child process, pid : %d\n", getpid());
    
        }
    
        for(int i = 0; i < 3; i++) {
            printf("i = %d, pid = %d\n", i, getpid());
        }
    
    
        return 0;
    }
    ```

  - output

    ![image-20211002095544288](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002095544288.png)

- ` int execvp(const char *file, char *const argv[]);`

- `int execvpe(const char *file, char *const argv[], char *const envp[]);`

- `int execve(const char *filename, char *const argv[], char *const envp[]);`

# 进程控制

## 进程退出

- 标准C库：`exit()`

- Linux系统：`_exit()`

- 区别

  ![image-20211002102156043](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002102156043.png)

- 程序说明

  - `exit()`

    ![image-20211002102546106](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002102546106.png)

  - `_exit()`

    ![image-20211002102641454](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002102641454.png)

  - 原因：调用`_exit`时没有刷新缓冲区，所以`world`还留在缓冲区中，没有被输出，`\n`会刷新缓冲区

## 孤儿进程

- 父进程运行结束，但子进程还在运行（未运行结束），这样的子进程就称为`孤儿进程（Orphan Process）`
- 每当出现一个孤儿进程的时候，内核就把孤儿进程的父进程设置为 init ，而 init 进程会循环地 wait() 它的已经退出的子进程。
- 孤儿进程并不会有什么危害

```c
#include <sys/types.h>
#include <unistd.h>
#include <stdio.h>

int main() 
{
    // 创建子进程
    pid_t pid = fork();
    // 判断是父进程还是子进程
    if(pid > 0) {
        printf("i am parent process, pid : %d, ppid : %d\n", getpid(), getppid());
    } else if(pid == 0) {
        sleep(1);
        // 当前是子进程
        printf("i am child process, pid : %d, ppid : %d\n", getpid(),getppid());
    }
    // for循环
    for(int i = 0; i < 3; i++) {
        printf("i : %d , pid : %d\n", i , getpid());
    }

    return 0;
}
```

![image-20211002105534145](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002105534145.png)

## 僵尸进程

- 每个进程结束之后，都会释放自己地址空间中的用户区数据，内核区的 PCB 没有办法自己释放掉，需要父进程去释放

- 进程终止时，父进程尚未回收，子进程残留资源（PCB）存放于内核中，变成`僵尸（Zombie）进程`

- **僵尸进程不能被 `kill -9` 杀死**，这样就会导致一个问题，如果父进程不调用 `wait()` 或 `waitpid()` 的话，那么保留的那段信息就不会释放，其进程号就会一直被占用，但是系统所能使用的进程号是有限的，如果大量的产生僵尸进程，将因为没有可用的进程号而导致系统不能产生新的进程，此即为僵尸进程的危害，应当避免

- 示例

  - code

    ```c
    #include <sys/types.h>
    #include <unistd.h>
    #include <stdio.h>
    
    int main() {
    
        // 创建子进程
        pid_t pid = fork();
    
        // 判断是父进程还是子进程
        if(pid > 0) {
            while(1) {
                printf("i am parent process, pid : %d, ppid : %d\n", getpid(), getppid());
                sleep(1);
            }
    
        } else if(pid == 0) {
            // 当前是子进程
            printf("i am child process, pid : %d, ppid : %d\n", getpid(),getppid());
           
        }
    
        // for循环
        for(int i = 0; i < 3; i++) {
            printf("i : %d , pid : %d\n", i , getpid());
        }
    
        return 0;
    }
    ```

  - 僵尸进程ID：45161，可以通过杀死父进程45160，从而使僵尸进程变为孤儿进程，让init领养进行释放

    ![image-20211002110239941](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002110239941.png)

  - 释放后

    ![image-20211002110519810](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002110519810.png)

## 进程回收

### 基本概念

-  在每个进程退出的时候，内核释放该进程所有的资源、包括打开的文件、占用的内存等。但是仍然为其保留一定的信息，这些信息主要主要指进程控制块PCB的信息（包括进程号、退出状态、运行时间等）
-  父进程可以通过调用`wait`或`waitpid`得到它的退出状态同时彻底清除掉这个进程，查看帮助：`man 2 wait`
-  `wait()` 和 `waitpid()` 函数的功能一样，区别在于
   - `wait()` 函数会阻塞
   - `waitpid()` 可以设置是否阻塞，`waitpid()` 还可以指定等待哪个子进程结束
-  注意：**一次`wait`或`waitpid`调用只能清理一个子进程，清理多个子进程应使用循环**

### 退出信息相关宏函数

- `WIFEXITED(status)`：非0，进程正常退出
- `WEXITSTATUS(status)`：如果上宏为真，获取进程退出的状态（exit的参数）
- `WIFSIGNALED(status)`：非0，进程异常终止
- `WTERMSIG(status)`：如果上宏为真，获取使进程终止的信号编号
- `WIFSTOPPED(status)`：非0，进程处于暂停状态
- `WSTOPSIG(status)`：如果上宏为真，获取使进程暂停的信号的编号
- `WIFCONTINUED(status)`：非0，进程暂停后已经继续运行

### wait()

- 可通过`man 2 wait`查看帮助

  ![image-20211002152046247](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002152046247.png)

- `pid_t wait(int *wstatus);`

  - 功能：等待任意一个子进程结束，如果任意一个子进程结束了，此函数会回收子进程的资源
  - 参数
    - `int *wstatus`：进程退出时的状态信息，传入的是一个int类型的地址，传出参数。

  - 返回值
    - 成功：返回被回收的子进程的id
    - 失败：-1 (所有的子进程都结束，调用函数失败)

- 其他说明

  - 调用wait函数的进程会被挂起（阻塞），直到它的一个子进程退出或者收到一个不能被忽略的信号时才被唤醒（相当于继续往下执行）
  - 如果没有子进程了，函数立刻返回，返回-1；如果子进程都已经结束了，也会立即返回，返回-1

```c
#include <sys/types.h>
#include <sys/wait.h>
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>

int main() 
{
    // 有一个父进程，创建5个子进程（兄弟）
    pid_t pid;

    // 创建5个子进程
    for(int i = 0; i < 5; i++) {
        pid = fork();
        // 避免嵌套重复生成子进程
        if(pid == 0) {
            break;
        }
    }

    if(pid > 0) {
        // 父进程
        while(1) {
            printf("parent, pid = %d\n", getpid());
            // int ret = wait(NULL);
            int st;
            int ret = wait(&st);

            if(ret == -1) {
                break;
            }

            if(WIFEXITED(st)) {
                // 是不是正常退出
                printf("退出的状态码：%d\n", WEXITSTATUS(st));
            }
            if(WIFSIGNALED(st)) {
                // 是不是异常终止
                printf("被哪个信号干掉了：%d\n", WTERMSIG(st));
            }

            printf("child die, pid = %d\n", ret);

            sleep(1);
        }

    } else if (pid == 0){
        // 子进程
         while(1) {
            printf("child, pid = %d\n",getpid());    
            sleep(1);       
         }

        exit(0);
    }

    return 0; // exit(0)
}
```

- 程序开始执行

  ![image-20211002150658401](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002150658401.png)

- 通过命令杀死子进程：`kill -9 47548`

  ![image-20211002150754497](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002150754497.png)

### waitpid()

- 可通过`man 2 wait`查看帮助

  ![image-20211002152139398](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002152139398.png)

- `pid_t waitpid(pid_t pid, int *wstatus, int options);`

  - 功能：回收指定进程号的子进程，可以设置是否阻塞
  - 参数
    - `pid`
      - `pid > 0` : 回收某个子进程的pid
      - `pid = 0` : 回收当前进程组的所有子进程
      - `pid = -1` : 回收所有的子进程，相当于 wait() （最常用）
      - `pid < -1` : 某个进程组的组id的绝对值，回收指定进程组中的子进程
    - options：设置阻塞或者非阻塞
      - 0 : 阻塞
      - WNOHANG : 非阻塞
    - 返回值
      - \> 0 : 返回子进程的id
      - 0 : options=WNOHANG, 表示还有子进程活着
      - -1 ：错误，或者没有子进程了

```c
#include <sys/types.h>
#include <sys/wait.h>
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>

int main() {

    // 有一个父进程，创建5个子进程（兄弟）
    pid_t pid;

    // 创建5个子进程
    for(int i = 0; i < 5; i++) {
        pid = fork();
        if(pid == 0) {
            break;
        }
    }

    if(pid > 0) {
        // 父进程
        while(1) {
            printf("parent, pid = %d\n", getpid());
            sleep(1);

            int st;
            // int ret = waitpid(-1, &st, 0);
            int ret = waitpid(-1, &st, WNOHANG);

            if(ret == -1) {
                break;
            } else if(ret == 0) {
                // 说明还有子进程存在
                continue;
            } else if(ret > 0) {

                if(WIFEXITED(st)) {
                    // 是不是正常退出
                    printf("退出的状态码：%d\n", WEXITSTATUS(st));
                }
                if(WIFSIGNALED(st)) {
                    // 是不是异常终止
                    printf("被哪个信号干掉了：%d\n", WTERMSIG(st));
                }

                printf("child die, pid = %d\n", ret);
            }
           
        }

    } else if (pid == 0){
        // 子进程
         while(1) {
            printf("child, pid = %d\n",getpid());    
            sleep(1);       
         }
        exit(0);
    }

    return 0; 
}
```

![image-20211002154934131](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002154934131.png)

# 进程间通信之管道及内存映射

## 进程间通讯概念

- 进程是一个独立的资源分配单元，不同进程（这里所说的进程通常指的是用户进程）之间的资源是独立的，没有关联，不能在一个进程中直接访问另一个进程的资源
- 但是，进程不是孤立的，不同的进程需要进行信息的交互和状态的传递等，因此需要`进程间通信( IPC：Inter Processes Communication)`
- 进程间通信的目的
  - 数据传输：一个进程需要将它的数据发送给另一个进程
  - 通知事件：一个进程需要向另一个或一组进程发送消息，通知它（它们）发生了某种事件（如进程终止时要通知父进程）
  - 资源共享：多个进程之间共享同样的资源。为了做到这一点，需要内核提供互斥和同步机制
  - 进程控制：有些进程希望完全控制另一个进程的执行（如 Debug 进程），此时控制进程希望能够拦截另一个进程的所有陷入和异常，并能够及时知道它的状态改变

## Linux 进程间通信的方式

![image-20211002162256108](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002162256108.png)

## 管道

### 管道特点

- 管道其实是一个在**内核内存中维护的缓冲器**，这个缓冲器的存储能力是有限的，不同的操作系统大小不一定相同
- 管道拥有文件的特质：读操作、写操作
  - **匿名管道**没有文件实体
  - **有名管道**有文件实体，但不存储数据。可以按照操作文件的方式对管道进行操作
- **一个管道是一个字节流**，使用管道时不存在消息或者消息边界的概念，从管道读取数据的进程可以读取任意大小的数据块，而不管写入进程写入管道的数据块的大小是多少
- 通过管道传递的数据是顺序的，从管道中读取出来的字节的顺序和它们被写入管道的顺序是完全一样的
- 在管道中的数据的传递方向是单向的，一端用于写入，一端用于读取，管道是**半双工**的
- 从管道读数据是一次性操作，数据一旦被读走，它就从管道中被抛弃，释放空间以便写更多的数据，**在管道中无法使用 lseek() 来随机的访问数据**
- `匿名管道`只能在**具有公共祖先的进程（父进程与子进程，或者两个兄弟进程，具有亲缘关系）之间使用**

![image-20211002170404267](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002170404267.png)

### 管道实现进程通信的原理

- 管道相当于**一个中间媒介，共享数据**

![image-20211002170600779](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002170600779.png)

### 管道的数据结构

![image-20211002170726732](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002170726732.png)

### 匿名管道

#### 概念及使用

- `管道`也叫`无名（匿名）管道`，它是是 UNIX 系统 IPC（进程间通信）的最古老形式，所有的 UNIX 系统都支持这种通信机制
- 统计一个目录中文件的数目命令：`ls | wc –l`，为了执行该命令，shell 创建了两个进程来分别执行 ls 和 wc

![image-20211002170052657](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002170052657.png)

- 查看帮助：`man 2 pipe`

- 创建匿名管道：`int pipe(int pipefd[2]);`

- 查看管道缓冲大小命令：`ulimit –a `（共8个，每个521byte，即4k）

  ![image-20211002183127455](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002183127455.png)

- 查看管道缓冲大小函数：`long fpathconf(int fd, int name);`

#### 创建匿名管道

- `int pipe(int pipefd[2])`

  - 功能：创建一个匿名管道，用来进程间通信。
  - 参数：`int pipefd[2]` 这个数组是一个传出参数。
    - `pipefd[0]` 对应的是管道的读端
    - `pipefd[1]` 对应的是管道的写端
  - 返回值：成功 0，失败 -1

- 注意

  - 管道默认是阻塞的：如果管道中没有数据，read阻塞，如果管道满了，write阻塞
  - 匿名管道只能用于具有关系的进程之间的通信（父子进程，兄弟进程）

- 实现**子进程发送数据给父进程，父进程读取到数据输出**

  - 管道应在子进程创建前生成，否则父子进程不一定对应同一个管道

  - 单向发送时

    - 由于读写顺序不定，看起来像自己写自己读

    ![image-20211002184318546](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002184318546.png)

    - 解决方法：关闭不需要的端口（即代码中的`close(pipefd[1]);`）

      ![image-20211002184931014](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002184931014.png)

    - 实际在不加`sleep`运行时，会出现下列问题，原因是==写的速度过快，向管道连续写了好多次，才被读取到一次，父进程接收到过多的子进程信息是因为父进程每次读完管道中的数据，想要再次读取时就会因为管道为空而被阻塞。所以就造成了从效果上来看写的速度要比读的快==

      ![image-20211002184623154](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002184623154.png)

  - 注意双向发送时，注意父子进程的读写顺序（代码中注释段）

  ```c
  /*
      #include <unistd.h>
      int pipe(int pipefd[2]);
          功能：创建一个匿名管道，用来进程间通信。
          参数：int pipefd[2] 这个数组是一个传出参数。
              pipefd[0] 对应的是管道的读端
              pipefd[1] 对应的是管道的写端
          返回值：
              成功 0
              失败 -1
  
      管道默认是阻塞的：如果管道中没有数据，read阻塞，如果管道满了，write阻塞
  
      注意：匿名管道只能用于具有关系的进程之间的通信（父子进程，兄弟进程）
  */
  
  // 子进程发送数据给父进程，父进程读取到数据输出
  #include <unistd.h>
  #include <sys/types.h>
  #include <stdio.h>
  #include <stdlib.h>
  #include <string.h>
  
  int main() {
  
      // 在fork之前创建管道
      int pipefd[2];
      int ret = pipe(pipefd);
      if(ret == -1) {
          perror("pipe");
          exit(0);
      }
  
      // 创建子进程
      pid_t pid = fork();
      if(pid > 0) {
          // 父进程
          printf("i am parent process, pid : %d\n", getpid());
  
          // 关闭写端
          // close(pipefd[1]);
          
          // 从管道的读取端读取数据
          char buf[1024] = {0};
          while(1) {
              int len = read(pipefd[0], buf, sizeof(buf));
              printf("parent recv : %s, pid : %d\n", buf, getpid());
              
              // 向管道中写入数据
              //char * str = "hello,i am parent";
              //write(pipefd[1], str, strlen(str));
              //sleep(1);
          }
  
      } else if(pid == 0){
          // 子进程
          printf("i am child process, pid : %d\n", getpid());
          // 关闭读端
          // close(pipefd[0]);
          char buf[1024] = {0};
          while(1) {
              // 向管道中写入数据
              char * str = "hello,i am child";
              write(pipefd[1], str, strlen(str));
              sleep(1);
  
              // int len = read(pipefd[0], buf, sizeof(buf));
              // printf("child recv : %s, pid : %d\n", buf, getpid());
              // bzero(buf, 1024);
          }
          
      }
      return 0;
  }
  ```

  ![image-20211002173606571](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211002173606571.png)

#### 实例：自建管道实现shell命令(`ps aux`)

- 思路

  - 子进程： 实现`ps aux`, 子进程结束后，将数据发送给父进程
  - 父进程：获取到数据并打印
  - `pipe()->fork()->execlp()<在此之前，输出为文件描述符重定向>->打印`

- code

  ```c
  /*
      实现 ps aux | grep xxx 父子进程间通信
      
      子进程： ps aux, 子进程结束后，将数据发送给父进程
      父进程：获取到数据，过滤
      pipe()
      execlp()
      子进程将标准输出 stdout_fileno 重定向到管道的写端。  dup2
  */
  
  #include <unistd.h>
  #include <sys/types.h>
  #include <stdio.h>
  #include <stdlib.h>
  #include <string.h>
  #include <wait.h>
  
  int main() {
  
      // 创建一个管道
      int fd[2];
      int ret = pipe(fd);
  
      if(ret == -1) {
          perror("pipe");
          exit(0);
      }
  
      // 创建子进程
      pid_t pid = fork();
  
      if(pid > 0) {
          // 父进程
          // 关闭写端，必须要有，否则程序不会结束
          close(fd[1]);
          // 从管道中读取
          char buf[1024] = {0};
  
          int len = -1;
          while((len = read(fd[0], buf, sizeof(buf) - 1)) > 0) {
              // 过滤数据输出
              printf("%s", buf);
              memset(buf, 0, 1024);
          }
  
          wait(NULL);
  
      } else if(pid == 0) {
          // 子进程
          // 关闭读端
          close(fd[0]);
  
          // 文件描述符的重定向 stdout_fileno -> fd[1]
          dup2(fd[1], STDOUT_FILENO);
          // 执行 ps aux
          execlp("ps", "ps", "aux", NULL);
          perror("execlp");
          exit(0);
      } else {
          perror("fork");
          exit(0);
      }
  
  
      return 0;
  }
  ```

- ==未解决：./ipc | wc - c 比 ps aux | wc -c 统计的进程数不同==

#### 设置管道非阻塞

```c
int flags = fcntl(fd[0], F_GETFL);  // 获取原来的flag
flags |= O_NONBLOCK;            // 修改flag的值
fcntl(fd[0], F_SETFL, flags);   // 设置新的flag
```

#### 读写特点总结

- 读管道
  - 管道中有数据，read返回实际读到的字节数
  - 管道中无数据
    - 写端被全部关闭，read返回0（相当于读到文件的末尾）
    - 写端没有完全关闭，read阻塞等待
- 写管道
  - 管道读端全部被关闭，进程异常终止（进程收到`SIGPIPE`信号）
  - 管道读端没有全部关闭：
    - 管道已满，write阻塞
    - 管道没有满，write将数据写入，并返回实际写入的字节数

### 有名管道

#### 概念及使用

- 匿名管道，由于没有名字，只能用于亲缘关系的进程间通信。为了克服这个缺点，提出了`有名管道（FIFO）`，也叫`命名管道`、`FIFO文件`
- `有名管道（FIFO）`不同于匿名管道之处在于它**提供了一个路径名与之关联**，以 **FIFO 的文件形式存在于文件系统中**，并且其打开方式与打开一个普通文件是一样的，这样即使与 `FIFO` 的创建进程不存在亲缘关系的进程，只要可以访问该路径，就能够彼此通过 `FIFO` 相互通信，因此，通过 `FIFO` 不相关的进程也能交换数据
- 一旦打开了 `FIFO`，就能在它上面使用与操作匿名管道和其他文件的系统调用一样的I/O系统调用了（如`read()`、`write()`和`close()`）。与管道一样，`FIFO` 也有一个写入端和读取端，并且从管道中读取数据的顺序与写入的顺序是一样的。FIFO 的名称也由此而来：先入先出
- `有名管道（FIFO)`和`匿名管道（pipe）`有一些特点是相同的，不一样的地方在于
  - `FIFO` 在文件系统中作为一个特殊文件存在，但 `FIFO` 中的**内容却存放在内存中**
  - 当使用 `FIFO` 的进程退出后，`FIFO` 文件将继续保存在文件系统中以便以后使用
  - `FIFO` 有名字，不相关的进程可以通过打开有名管道进行通信

- 可使用`man fifo`查看帮助

#### 创建有名管道

- shell命令创建：`mkfifo 文件名`，可通过`man 1 mkfifo`查看帮助

  ![image-20211003160648019](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211003160648019.png)

- 函数创建：`int mkfifo(const char *pathname, mode_t mode);`，可通过`man 3 mkfifo`查看帮助

  ```c
  #include <sys/types.h>
  #include <sys/stat.h>
  #include <stdio.h>
  #include <unistd.h>
  #include <stdlib.h>
  
  int main()
  {
      // 判断文件是否存在
      int ret = access("test", F_OK);
      // 不存在则创建
      if (ret == -1) {
          printf("管道不存在，创建管道...\n");
          ret = mkfifo("test", 0664);
          if (ret == -1) {
              perror("mkfifo");
              exit(0);
          }
      }
      
      return 0;
  }
  ```

  ![image-20211003161504190](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211003161504190.png)

#### 实例：两进程通过有名管道通信（单一发送）

- 写端

  ```c
  #include <stdio.h>
  #include <sys/types.h>
  #include <sys/stat.h>
  #include <stdlib.h>
  #include <unistd.h>
  #include <fcntl.h>
  #include <string.h>
  
  // 向管道中写数据
  int main() 
  {
      // 1.判断文件是否存在
      int ret = access("test", F_OK);
      if(ret == -1) {
          printf("管道不存在，创建管道\n");
          
          // 2.创建管道文件
          ret = mkfifo("test", 0664);
  
          if(ret == -1) {
              perror("mkfifo");
              exit(0);
          }       
  
      }
  
      // 3.以只写的方式打开管道
      int fd = open("test", O_WRONLY);
      if(fd == -1) {
          perror("open");
          exit(0);
      }
  
      // 写数据
      for(int i = 0; i < 100; i++) {
          char buf[1024];
          sprintf(buf, "hello, %d\n", i);
          printf("write data : %s\n", buf);
          write(fd, buf, strlen(buf));
          sleep(1);
      }
  
      close(fd);
  
      return 0;
  }
  ```

- 读端

  ```c
  #include <stdio.h>
  #include <sys/types.h>
  #include <sys/stat.h>
  #include <stdlib.h>
  #include <unistd.h>
  #include <fcntl.h>
  
  // 从管道中读取数据
  int main() 
  {
      // 1.打开管道文件
      int fd = open("test", O_RDONLY);
      if(fd == -1) {
          perror("open");
          exit(0);
      }
  
      // 读数据
      while(1) {
          char buf[1024] = {0};
          // 这里不能写strlen(buf) 因为这里的含义是每次按固定长度读取，最开始strlen(buf)=0
          int len = read(fd, buf, sizeof(buf));
          if(len == 0) {
              printf("写端断开连接了...\n");
              break;
          }
          printf("recv buf : %s\n", buf);
      }
  
      close(fd);
  
      return 0;
  }
  ```

- 运行

  - 当写端开始写数据，但读端没有启动时，写端阻塞

    ![image-20211003164458310](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211003164458310.png)

  - 当读端开始读数据，但写端没有启动时，读端阻塞

    ![image-20211003164517651](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211003164517651.png)

  - 两端都启动时，正常输出（无关哪个先启动）

    ![image-20211003164554381](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211003164554381.png)

    - 先关闭读端

      ![image-20211003164654992](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211003164654992.png)

    - 先关闭写端![image-20211003164634420](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211003164634420.png)

#### 实例：简易版聊天功能（连续发送）

- 功能：两个进程相互发送数据及接收数据，能够连续发送及接收

- 思路

  - 由于两个进程并没有亲缘关系，所以只能使用有名管道实现
  - 需要两个管道
    - 一个管道用于进程A的写与进程B的读
    - 一个管道用于进程B的写与进程A的读
  - 需要父子进程，实现连续发送及接收
    - 父进程负责写入数据到管道
    - 子进程负责从管道读取数据

- 流程（不包含父子进程，即下图所示流程不能实现连续发送功能）

  ![image-20211003171227426](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211003171227426.png)

- 进程A

  ```c
  /*
  chatA
  1. 读、写数据分开，用两个管道
      1. fifo1用于进程A写及进程B读
      2. fifo2用于进程B写及进程A读
  2. 连续发送及接收信息，使用两个进程
      1. 父进程用于写数据
      2. 子进程用于读数据
  */
  #include <stdio.h>
  #include <unistd.h>
  #include <sys/types.h>
  #include <sys/stat.h>
  #include <stdlib.h>
  #include <unistd.h>
  #include <fcntl.h>
  #include <string.h>
  
  int main()
  {
      // 判断写管道是否存在，不存在则创建
      int ret = access("fifo1", F_OK);
      if (ret == -1) {
          printf("fifo1不存在，创建...\n");
          ret = mkfifo("fifo1", 0664);
          if (ret == -1) {
              perror("mkfifo");
              exit(-1);
          }
      } 
  
      // 判断读管道是否存在，不存在则创建
      ret = access("fifo2", F_OK);
      if (ret == -1) {
          printf("fifo2不存在，创建...\n");
          ret = mkfifo("fifo2", 0664);
          if (ret == -1) {
              perror("mkfifo");
              exit(-1);
          }
      } 
      // 创建进程
      pid_t pid = fork();
      char buf[1024];
      if (pid > 0) {
          // 父进程
          // 打开写管道
          // 打开一次，否则系统可能会崩
          int fdw = open("fifo1", O_WRONLY);
          while (1) {
              // 从键盘读取输入
              printf("[chatA]please input: \n");
              fgets(buf, sizeof(buf), stdin);
              write(fdw, buf, strlen(buf));
              // 清空数组
              memset(buf, 0, sizeof(buf));
          }
          close(fdw);
      } else if (pid == 0) {
          // 子进程
          // 打开读管道
          // 打开一次，否则系统可能会崩
          int fdr = open("fifo2", O_RDONLY);
          while (1) {
              char buf[1024];
              int len = read(fdr, buf, sizeof(buf));
              if(len == 0) {
                  printf("[chatA]写端断开连接了...\n");
                  break;
              }
              printf("[chatA]recv : %s", buf);
              // 清空数组
              memset(buf, 0, sizeof(buf));
          }
          close(fdr);
      } else {
          perror("fork");
          exit(-2);
      }
  
      return 0;
  }
  ```

- 进程B

  ```c
  /*
  chatB
  1. 读、写数据分开，用两个管道
      1. fifo1用于进程A写及进程B读
      2. fifo2用于进程B写及进程A读
  2. 连续发送及接收信息，使用两个进程
      1. 父进程用于写数据
      2. 子进程用于读数据
  */
  #include <stdio.h>
  #include <unistd.h>
  #include <sys/types.h>
  #include <sys/stat.h>
  #include <stdlib.h>
  #include <unistd.h>
  #include <fcntl.h>
  #include <string.h>
  
  int main()
  {
      // 判断写管道是否存在，不存在则创建
      int ret = access("fifo1", F_OK);
      if (ret == -1) {
          printf("fifo1不存在，创建...\n");
          ret = mkfifo("fifo1", 0664);
          if (ret == -1) {
              perror("mkfifo");
              exit(-1);
          }
      } 
  
      // 判断读管道是否存在，不存在则创建
      ret = access("fifo2", F_OK);
      if (ret == -1) {
          printf("fifo2不存在，创建...\n");
          ret = mkfifo("fifo2", 0664);
          if (ret == -1) {
              perror("mkfifo");
              exit(-1);
          }
      } 
      // 创建进程
      pid_t pid = fork();
      char buf[1024] = { 0 };
      if (pid > 0) {
          // 父进程
          // 打开写管道
          // 打开一次，否则系统可能会崩
          int fdw = open("fifo2", O_WRONLY);
          while (1) {
              // 从键盘读取输入
              printf("[chatB]please input: \n");
              fgets(buf, sizeof(buf), stdin);
              write(fdw, buf, strlen(buf));
              // 清空数组
              memset(buf, 0, sizeof(buf));
          }
          close(fdw);
      } else if (pid == 0) {
          // 子进程
          // 打开读管道
          // 打开一次，否则系统可能会崩
          int fdr = open("fifo1", O_RDONLY);
          while (1) {
              char buf[1024];
              int len = read(fdr, buf, sizeof(buf));
              if(len == 0) {
                  printf("[chatB]写端断开连接了...\n");
                  break;
              }
              printf("[chatB]recv : %s", buf);
              // 清空数组
              memset(buf, 0, sizeof(buf));
          }
          close(fdr);
      } else {
          perror("fork");
          exit(-2);
      }
  
      return 0;
  }
  ```

- 运行结果

  ![image-20211003223202138](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211003223202138.png)

- ==存在的问题==：

  - 乱码
  - 一个进程结束后，另一个还未结束，需要手动关闭

#### 读写特点总结

- 读管道
  - 管道中有数据，`read`返回实际读到的字节数
  - 管道中无数据：
    - 管道写端被全部关闭，`read`返回0，（相当于读到文件末尾）
    - 写端没有全部被关闭，` read`阻塞等待
- 写管道
  - 管道读端被全部关闭，进行异常终止（收到一个`SIGPIP`信号）
  - 管道读端没有全部关闭：
    - 管道已经满了，`write`会阻塞
    - 管道没有满，`write`将数据写入，并返回实际写入的字节数

## 内存映射

### 概念

- `内存映射（Memory-mapped I/O）`是将**磁盘文件的数据映射到内存**，用户通过修改内存就能修改磁盘文件

  ![image-20211004093620731](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211004093620731.png)

- 内存映射相关系统调用，使用`man 2 mmap`查看帮助

  - `void *mmap(void *addr, size_t length, int prot, int flags, int fd, off_t offset);`
    - 功能：将一个文件或者设备的数据映射到内存中
    - 参数
      - `addr`：设置为 NULL时, 由内核指定（推荐做法）
      - `length` : 要映射的数据的长度，这个值**不能为0。建议使用文件的长度**，获取文件的长度：`stat `，`lseek`
      - `prot` : 对申请的内存映射区的操作权限
        - `PROT_EXEC` ：可执行的权限
        - `PROT_READ` ：读权限
        - `PROT_WRITE` ：写权限
        - `PROT_NONE` ：没有权限
      - `flags`
        - `MAP_SHARED` : 映射区的数据会自动和磁盘文件进行同步，进程间通信，必须要设置这个选项
        - `MAP_PRIVATE` ：不同步，内存映射区的数据改变了，对原来的文件不会修改，会重新创建一个新的文件。（`copy on write`）
      - `fd`: 需要映射的那个文件的文件描述符，通过`open`得到，`open`的是一个磁盘文件
      - `offset`：偏移量，一般进行特殊指定（指定为0即可），如果使用必须指定的是 `4k` 的整数倍，0表示不偏移
    - 返回值：返回创建的内存的首地址。失败返回`MAP_FAILED(即(void *) -1)`
  - `int munmap(void *addr, size_t length);`
    -  功能：释放内存映射
    -  参数
       - `addr` : 要释放的内存的首地址
       - `length` : 要释放的内存的大小，要和`mmap`函数中的length参数的值一样

### 进程间通信种类

- 有关系的进程（父子进程）
  - 还没有子进程的时候，通过唯一的父进程，先创建内存映射区
  - 有了内存映射区以后，创建子进程
  - 父子进程共享创建的内存映射区
- 没有关系的进程间通信
  - 准备一个大小不是0的磁盘文件
  - 进程1 通过磁盘文件创建内存映射区，得到一个操作这块内存的指针
  - 进程2 通过磁盘文件创建内存映射区，得到一个操作这块内存的指针
  - 使用内存映射区通信

### 注意事项

- 要操作映射内存，**必须要有读的权限**，即权限为`PROT_READ`或`PROT_READ|PROT_WRITE`

- 在使用**内存映射**通信时，使用文件的大小不能为0，**`open`指定的权限不能和`prot`参数有冲突**

  |          `prot`          |        `open`         |
  | :----------------------: | :-------------------: |
  |       `PROT_READ`        | `O_RDONLY` 或`O_RDWR` |
  | `PROT_READ | PROT_WRITE` |       `O_RDWR`        |

- 内存映射区通信，是非阻塞

- 一个文件对应一个内存映射区

- 如果对`mmap`的返回值(`ptr`)做`++操作(ptr++)`, `munmap`是否能够成功?

  - 不能成功，因为回收资源时，需要传递指针，如果变化，将会回收失败

- 如果`open`时`O_RDONLY`, `mmap`时`prot`参数指定`PROT_READ | PROT_WRITE`会怎样?

  - 错误，返回`MAP_FAILED`，`open()`函数中的权限建议和`prot`参数的权限保持一致

- 如果文件偏移量为1000会怎样?

  - 偏移量必须是`4K`的整数倍，返回`MAP_FAILED`

- `mmap`什么情况下会调用失败?

  - 第二个参数：length = 0
  - 第三个参数：`prot`
    - 只指定写权限
    - `prot`和`open()`两者的权限不匹配

- 可以open的时候`O_CREAT`一个新文件来创建映射区吗?

  - 可以的，但是创建的文件的大小如果为0的话，肯定不行(因为`mmap`调用时，长度不允许为0)

- `mmap`后关闭文件描述符，对`mmap`映射有没有影响？

  - 映射区还存在，创建映射区的`fd`被关闭，没有任何影响

- 对`ptr`越界操作会怎样？

  - 越界操作操作的是非法的内存 -> 段错误

### 实例：父子进程通信

- 思路

  1. 打开指定文件并获取文件长度
  2. 创建内存映射区
  3. 父子进程功能，父进程负责收数据，子进程负责发数据
  4. 回收资源

- code

  ```c
  #include <stdio.h>
  #include <sys/mman.h>
  #include <sys/types.h>
  #include <fcntl.h>
  #include <unistd.h>
  #include <wait.h>
  #include <string.h>
  #include <stdlib.h>
  
  int main()
  {
      // 打开指定文件
      int fd = open("ipc.txt", O_RDWR);
      // 获取给定文件长度
      int size = lseek(fd, 0, SEEK_END);
      // 创建内存映射区
      void* ptr = mmap(NULL, size, PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0);
      // 判断是否成功
      if (ptr == MAP_FAILED) {
          perror("mmap");
          exit(-1);
      }
      // 创建子进程
      pid_t pid = fork();
      if (pid > 0) {
          // 父进程，用于读取数据
          // 回收子进程
          wait(NULL);
          // 接收数据并打印
          char buf[64];
          // 类型需要强转
          strcpy(buf, (char *)ptr);
          printf("recv : %s\n", buf);
  
      } else if (pid == 0) {
          // 子进程，用于发送数据
          // 类型需要强转
          strcpy((char *)ptr, "hello, i am child process");
      } else {
          perror("fork");
          exit(-1);
      }
  
      // 关闭内存映射区
      munmap(ptr, size);
      // 关闭文件
      close(fd);
      return 0;
  }
  ```

- 注意：程序执行后，文件大小不改变，那么子进程写入的数据会被截断，==原因未知==

  - 执行前

    ![image-20211004111150651](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211004111150651.png)

  - 执行后

    ![image-20211004111241118](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211004111241118.png)

### 实例：文件拷贝

- 思路

  1. 需要两个文件，一个是有内容的文件（待拷贝文件），一个是空文件
  2. 由于有两个文件，需要两个内存映射区
  3. 然后将文件A的内存映射区内容拷贝给文件B的内存映射区
  4. 回收资源

- code

  ```c
  #include <stdio.h>
  #include <sys/types.h>
  #include <sys/stat.h>
  #include <fcntl.h>
  #include <unistd.h>
  #include <sys/mman.h>
  #include <string.h>
  #include <stdlib.h>
  
  int main()
  {
      // 打开源文件，获取文件长度并创建对应内存映射区
      int fdSource = open("source.txt", O_RDONLY);
      int len = lseek(fdSource, 0, SEEK_END);
      void *ptrSource = mmap(NULL, len, PROT_READ, MAP_SHARED, fdSource, 0);
      if (ptrSource == MAP_FAILED) {
          perror("mmap");
          exit(-1);
      }
      
      // 打开目标文件，并创建对应内存映射区
      int fdTarget = open("target.txt", O_RDWR | O_CREAT, 0664);
      // 由于目标文件是通过创建得到，所以需要扩展长度与源文件保持一致
      truncate("target.txt", len);
      // 如果不加，扩展可能失败（保险起见）
      write(fdTarget, " ", 1);
      void *ptrTarget = mmap(NULL, len, PROT_READ | PROT_WRITE, MAP_SHARED, fdTarget, 0);
      if (ptrTarget == MAP_FAILED) {
          perror("mmap");
          exit(-1);
      }
      
      // 内存拷贝
      memcpy(ptrTarget, ptrSource, len);
      
      // 回收资源
      close(fdTarget);
      close(fdSource);
      munmap(ptrTarget, len);
      munmap(ptrSource, len);
  
      return 0;
  }
  ```

- output

  - 执行前

    ![image-20211004144251533](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211004144251533.png)

  - 执行后

    ![image-20211004144319921](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211004144319921.png)

### 实例：匿名内存映射

- 思路

  1. 匿名内存映射不存在文件实体，那么只能通过父子进程实现
  2. 父子进程操作同一块区域，重点在于内存映射区在创建时新增flags参数`MAP_ANONYMOUS`
  3. 父进程读，子进程写

- code

  ```c
  #include <stdio.h>
  #include <sys/mman.h>
  #include <sys/types.h>
  #include <unistd.h>
  #include <stdlib.h>
  #include <string.h>
  #include <sys/wait.h>
  
  int main()
  {
      void *ptr = mmap(NULL, 128, PROT_READ | PROT_WRITE, MAP_SHARED | MAP_ANONYMOUS, -1, 0);
      if (ptr == MAP_FAILED) {
          perror("mmap");
          exit(-1);
      }
      pid_t pid = fork();
      if (pid > 0) {
          // 父进程
          wait(NULL);
          char buf[128];
          strcpy(buf, (char*)ptr);
          printf("recv : %s\n", buf);
      } else if (pid == 0) {
          // 子进程
          strcpy((char*)ptr, "i am a message");
      } else {
          perror("fork");
          exit(-1);
      }
  
      // 释放资源
      munmap(ptr, 128);
      return 0;
  }
  ```

- output

  ![image-20211004145355131](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211004145355131.png)

# 进程间通信之信号

## 基本概念

- 信号是 Linux 进程间通信的最古老的方式之一，是事件发生时对进程的通知机制，有时也称之为软件中断，它是在软件层次上对中断机制的一种模拟，是一种异步通信的方式。信号可以导致一个正在运行的进程被另一个正在运行的异步进程中断，转而处理某一个突发事件

- 发往进程的诸多信号，通常都是源于内核。引发内核为进程产生信号的各类事件如下

  - 对于前台进程，用户可以通过输入特殊的终端字符来给它发送信号。比如输入 `Ctrl+C` 通常会给进程发送一个中断信号
  - 硬件发生异常，即硬件检测到一个错误条件并通知内核，随即再由内核发送相应信号给相关进程。比如执行一条异常的机器语言指令，诸如被 0 除，或者引用了无法访问的内存区域
  - 系统状态变化，比如 alarm 定时器到期将引起 `SIGALRM` 信号，进程执行的 CPU 时间超限，或者该进程的某个子进程退出
  - 运行 kill 命令或调用 kill 函数

- 使用信号的两个主要目的是

  - 让进程知道已经发生了一个特定的事情
  - 强迫进程执行它自己代码中的信号处理程序

- 信号的特点

  - 简单
  - 不能携带大量信息
  - 满足某个特定条件才发送
  - 优先级比较高

- 查看系统定义的信号列表：`kill –l`，前 31 个信号为常规信号，其余为实时信号

  ![image-20211005171111124](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211005171111124.png)

## 信号一览表及特点

- 可通过`man 7 signal`查看帮助
- 信号的 5 中默认处理动作
  - `Term`：终止进程
  - `Ign`：当前进程忽略掉这个信号
  - `Core`：终止进程，并生成一个Core文件
  - `Stop`：暂停当前进程
  - `Cont`：继续执行当前被暂停的进程
- 信号的几种状态：`产生`、`未决`、`递达`
- `SIGKILL` 和 `SIGSTOP` 信号不能被捕捉、阻塞或者忽略，只能执行默认动作
- 红色标记代表需要熟练掌握

![image-20211005171208319](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211005171208319.png)

![image-20211005171224233](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211005171224233.png)

![image-20211005171241921](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211005171241921.png)

![image-20211005171255782](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211005171255782.png)

## 信号相关的函数

### core文件生成及调试

- 当进程异常终止时，会生成`core`文件（需要进行相应设置），可以通过`gdb`调试查看错误，调试以下程序

- code

  ```c
  #include <stdio.h>
  #include <string.h>
  
  int main()
  {
      char* buf;
      strcpy(buf, "core test");
      return 0;
  }
  ```

- 生成调试`core`文件需要做以下几步

  1. 使用`ulimit -a`查看资源上限

     ![image-20211005172308679](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211005172308679.png)

  2. 修改`core size`：`ulimit -c core-size`

     ![image-20211005172341481](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211005172341481.png)

  3. 在编译运行程序时加上`-g`选项使得能够被`gdb`调试，运行后生成`core`文件

     ![image-20211005172805479](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211005172805479.png)

  4. 调试`core`程序：`gdb test`进入`gdb`终端，使用`core-file core`可以查看`core`定位错误

     ![image-20211005172951704](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211005172951704.png)

### kill & raise & abort

- `int kill(pid_t pid, int sig);`
  - 使用`man 2 kill`查看帮助
  - 功能：给**任何的进程或者进程组**`pid`，发送**任何的信号** `sig`
  - 参数
    - `pid`
      - `> 0` : 将信号发送给指定的进程
      - `= 0` : 将信号发送给当前的进程组
      - `= -1` : 将信号发送给每一个有权限接收这个信号的进程
      - `< -1` : 这个`pid=某个进程组的ID取反`
    - `sig` : 需要发送的信号的编号或者是宏值，0表示不发送任何信号
  - 返回值：0成功，-1失败
- `int raise(int sig);`
  - 使用`man 3 raise`查看帮助
  - 功能：给**当前进程**发送信号
  - 参数：`sig` : 要发送的信号
  - 返回值：0成功，非0失败
- `void abort(void);`
  - 使用`man 3 abort`查看帮助
  - 功能： 发送`SIGABRT`信号给当前的进程，**杀死当前进程**

```c
#include <stdio.h>
#include <sys/types.h>
#include <signal.h>
#include <unistd.h>

int main() 
{
    pid_t pid = fork();

    if(pid == 0) {
        // 子进程
        int i = 0;
        for(i = 0; i < 5; i++) {
            printf("child process\n");
            sleep(1);
        }

    } else if(pid > 0) {
        // 父进程
        printf("parent process\n");
        sleep(2);
        printf("kill child process now\n");
        kill(pid, SIGINT);
    }

    return 0;
}
```

![image-20211005190402848](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211005190402848.png)

### alarm & setitimer

- 区别：`alarm`只能定一次时，`setitimer`可以周期性定时

- `unsigned int alarm(unsigned int seconds);`
  - 使用`man 2 alarm`查看帮助
  - 功能：设置定时器（闹钟）。函数调用，开始倒计时，当倒计时为0的时候，函数会给当前的进程发送一个信号：`SIGALARM`
  - 参数：`seconds`，倒计时的时长，单位：秒。如果参数为0，定时器无效（不进行倒计时，不发信号）
  - 取消一个定时器，通过`alarm(0)`
  - 返回值
    - 之前没有定时器，返回0
    - 之前有定时器，返回之前的定时器剩余的时间
- `SIGALARM` ：默认终止**当前的进程**，每一个进程都有且只有唯一的一个定时器
- 定时器，与进程的状态无关（自然定时法）。无论进程处于什么状态，alarm都会计时，即**函数不阻塞**

```c
#include <stdio.h>
#include <unistd.h>

int main() {

    int seconds = alarm(5);
    printf("seconds = %d\n", seconds);  // 0

    sleep(2);
    seconds = alarm(2);    // 不阻塞
    printf("seconds = %d\n", seconds);  // 3

    while(1) {
    }

    return 0;
}
```

![image-20211005200623331](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211005200623331.png)

- `int setitimer(int which, const struct itimerval *new_val, struct itimerval *old_value);`

  - 使用`man 2 setitimer`查看帮助
  - 功能：设置定时器（闹钟）。可以替代alarm函数。精度微妙us，可以实现周期性定时
  - 参数
    - `which` : 定时器以什么时间计时
      - `ITIMER_REAL`: 真实时间，时间到达，发送 `SIGALRM` (常用)
      - `ITIMER_VIRTUAL`: 用户时间，时间到达，发送 `SIGVTALRM`
      - `ITIMER_PROF`: 以该进程在用户态和内核态下所消耗的时间来计算，时间到达，发送 `SIGPROF`
    - `new_value`: 设置定时器的属性
    - `old_value` ：记录上一次的定时的时间参数，一般不使用，指定NULL
  - 返回值：成功 0，失败 -1 并设置错误号

- `struct itimerval`

  ```c
  struct itimerval {      // 定时器的结构体
      struct timeval it_interval;  // 每个阶段的时间，间隔时间
      struct timeval it_value;     // 延迟多长时间执行定时器
  };
  
  struct timeval {        // 时间的结构体
      time_t      tv_sec;     //  秒数     
      suseconds_t tv_usec;    //  微秒    
  };
  
  // 过it_value秒后，每隔it_interval秒定时一次
  ```

- 实现**过3秒以后，每隔2秒钟定时一次**=>因为没有**信号捕捉**，所以还没有实现这样的效果

  ```c
  #include <sys/time.h>
  #include <stdio.h>
  #include <stdlib.h>
  
  // 过3秒以后，每隔2秒钟定时一次
  int main() 
  {
      struct itimerval new_value;
  
      // 设置间隔的时间
      new_value.it_interval.tv_sec = 2;
      new_value.it_interval.tv_usec = 0;
  
      // 设置延迟的时间,3秒之后开始第一次定时
      new_value.it_value.tv_sec = 3;
      new_value.it_value.tv_usec = 0;
  
  
      int ret = setitimer(ITIMER_REAL, &new_value, NULL); // 非阻塞的
      printf("定时器开始了...\n");
  
      if(ret == -1) {
          perror("setitimer");
          exit(0);
      }
  
      getchar();
  
      return 0;
  }
  ```

  ![image-20211006091442998](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211006091442998.png)

## 信号捕捉函数

### signal

- `sighandler_t signal(int signum, sighandler_t handler);`

  - 使用`man 2 signal`查看帮助
  - 功能：设置某个信号的捕捉行为
  - 参数
    - `signum`: 要捕捉的信号
    - `handler`: 捕捉到信号要如何处理
      - `SIG_IGN` ： 忽略信号
      - `SIG_DFL` ： 使用信号默认的行为
      - `自定义回调函数`
    - 返回值
      - 成功，返回上一次注册的信号处理函数的地址。第一次调用返回NULL
      - 失败，返回SIG_ERR，设置错误号
      - 注意：返回值定义在宏`__USE_GNU`中，需要指定或者直接在程序中使用`typedef __sighandler_t sighandler_t;`
    - `SIGKILL`和`SIGSTOP`不能被捕捉，不能被忽略

- 完善**过3秒以后，每隔2秒钟定时一次的定时器功能**

  ```c
  #include <sys/time.h>
  #include <stdio.h>
  #include <stdlib.h>
  #include <signal.h>
  
  void myalarm(int num) {
      printf("捕捉到了信号的编号是：%d\n", num);
      printf("xxxxxxx\n");
  }
  
  // 过3秒以后，每隔2秒钟定时一次
  int main() 
  {
  
      // 注册信号捕捉
      // signal(SIGALRM, SIG_IGN);
      // signal(SIGALRM, SIG_DFL);
      // void (*sighandler_t)(int); 函数指针，int类型的参数表示捕捉到的信号的值
      // 捕捉的信号右定时器发出
      signal(SIGALRM, myalarm);
  
      struct itimerval new_value;
  
      // 设置间隔的时间
      new_value.it_interval.tv_sec = 2;
      new_value.it_interval.tv_usec = 0;
  
      // 设置延迟的时间,3秒之后开始第一次定时
      new_value.it_value.tv_sec = 3;
      new_value.it_value.tv_usec = 0;
  
  
      int ret = setitimer(ITIMER_REAL, &new_value, NULL); // 非阻塞的
      printf("定时器开始了...\n");
  
      if(ret == -1) {
          perror("setitimer");
          exit(0);
      }
  
      getchar();
  
      return 0;
  }
  ```

  ![image-20211006100149339](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211006100149339.png)

### sigaction

- `int sigaction(int signum, const struct sigaction *act,struct sigaction *oldact);`

  - 使用`man 2 sigaction`查看帮助
  - 功能：检查或者改变信号的处理，即信号捕捉
  - 参数
    - `signum` : 需要捕捉的信号的编号或者宏值（信号的名称）
    - `act` ：捕捉到信号之后的处理动作
    - `oldact` : 上一次对信号捕捉相关的设置，一般不使用，设置为NULL
  - 返回值：成功返回0， 失败返回-1

- `struct sigaction`

  ```c
  struct sigaction {
      // 函数指针，指向的函数就是信号捕捉到之后的处理函数
      void     (*sa_handler)(int);
      // 不常用
      void     (*sa_sigaction)(int, siginfo_t *, void *);
      // 临时阻塞信号集，在信号捕捉函数执行过程中，临时阻塞某些信号。
      sigset_t   sa_mask;
      // 使用哪一个信号处理对捕捉到的信号进行处理
      // 这个值可以是0，表示使用sa_handler,也可以是SA_SIGINFO表示使用sa_sigaction
      int        sa_flags;
      // 被废弃掉了
      void     (*sa_restorer)(void);
  };
  ```

```c
#include <sys/time.h>
#include <stdio.h>
#include <stdlib.h>
#include <signal.h>

void myalarm(int num) {
    printf("捕捉到了信号的编号是：%d\n", num);
    printf("xxxxxxx\n");
}

// 过3秒以后，每隔2秒钟定时一次
int main() {

    struct sigaction act;
    act.sa_flags = 0;
    act.sa_handler = myalarm;
    sigemptyset(&act.sa_mask);  // 清空临时阻塞信号集
   
    // 注册信号捕捉
    sigaction(SIGALRM, &act, NULL);

    struct itimerval new_value;

    // 设置间隔的时间
    new_value.it_interval.tv_sec = 2;
    new_value.it_interval.tv_usec = 0;

    // 设置延迟的时间,3秒之后开始第一次定时
    new_value.it_value.tv_sec = 3;
    new_value.it_value.tv_usec = 0;

    int ret = setitimer(ITIMER_REAL, &new_value, NULL); // 非阻塞的
    printf("定时器开始了...\n");

    if(ret == -1) {
        perror("setitimer");
        exit(0);
    }

    // getchar();
    while(1);

    return 0;
}
```

![image-20211006234920154](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211006234920154.png)

### signal和sigaction区别

- 参数区别
- 版本区别，`signal`在不同版本Linux中，行为不一致，所以推荐使用`sigaction`（`ubutun`下两者一致）

### 内核实现信号捕捉的过程

![image-20211006235431837](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211006235431837.png)

### ==未解决==

- `signal`中可以使用一个`getchar()`阻塞信号，而`sigaction`中调用几次回调函数，就要使用多少个`getchar()`

## 信号集

### 基本概念

- 使用`man 3 sigset`查看帮助

- 许多信号相关的系统调用都需要能表示一组不同的信号，多个信号可使用一个称之为信号集的数据结构来表示，其系统数据类型为 `sigset_t`
- 在 PCB 中有两个非常重要的信号集。一个称之为 `阻塞信号集` ，另一个称之为`未决信号集`。这两个信号集都是**内核使用位图机制来实现**的。但操作系统不允许我们直接对这两个信号集进行位操作。而需自定义另外一个集合，借助信号集操作函数来对 PCB 中的这两个信号集进行修改
- 信号的 `未决` 是一种状态，指的是**从信号的产生到信号被处理前的这一段时间**
- 信号的 `阻塞` 是一个开关动作，指的是**阻止信号被处理，但不是阻止信号产生**。信号的阻塞就是让系统暂时保留信号留待以后发送。由于另外有办法让系统忽略信号，所以一般情况下信号的阻塞只是暂时的，只是为了防止信号打断敏感的操作

### 阻塞信号集与非阻塞信号集说明

1. 用户通过键盘  `Ctrl + C`, 产生2号信号 `SIGINT` (信号被创建)
2. 信号产生但是没有被处理 （未决）
   - 在内核中将所有的没有被处理的信号存储在一个集合中 （未决信号集）
   - `SIGINT`信号状态被存储在第二个标志位上
     - 这个标志位的值为0， 说明信号不是未决状态
     - 这个标志位的值为1， 说明信号处于未决状态
3. 这个未决状态的信号，需要被处理，处理之前需要和另一个信号集（阻塞信号集），进行比较
   - 阻塞信号集默认不阻塞任何的信号
   - 如果想要阻塞某些信号需要用户调用系统的API
4. 在处理的时候和阻塞信号集中的标志位进行查询，看是不是对该信号设置阻塞了
   - 如果没有阻塞，这个信号就被处理
   - 如果阻塞了，这个信号就继续处于未决状态，直到阻塞解除，这个信号就被处理

### 操作自定义信号集函数(sigemptyset等)

- 使用`man 3 sigemptyset`查看帮助
- `int sigemptyset(sigset_t *set);`
  - 功能：清空信号集中的数据，将信号集中的所有的标志位置为0
  - 参数：`set`，传出参数，需要操作的信号集
  - 返回值：成功返回0， 失败返回-1
- `int sigfillset(sigset_t *set);`
  - 功能：将信号集中的所有的标志位置为1
  - 参数：`set`，传出参数，需要操作的信号集
  - 返回值：成功返回0， 失败返回-1
- `int sigaddset(sigset_t *set, int signum);`
  - 功能：设置信号集中的某一个信号对应的标志位为1，表示阻塞这个信号
  - 参数
    - `set`：传出参数，需要操作的信号集
    - `signum`：需要设置阻塞的那个信号
  - 返回值：成功返回0， 失败返回-1
- `int sigdelset(sigset_t *set, int signum);`
  - 功能：设置信号集中的某一个信号对应的标志位为0，表示不阻塞这个信号
  - 参数
    - `set`：传出参数，需要操作的信号集
    - `signum`：需要设置不阻塞的那个信号
  - 返回值：成功返回0， 失败返回-1
- `int sigismember(const sigset_t *set, int signum);`
  - 功能：判断某个信号是否阻塞
  - 参数
    - `set`：传入参数，需要操作的信号集
    - `signum`：需要判断的那个信号
  - 返回值
    - 1 ： `signum`被阻塞
    - 0 ： `signum`不阻塞
    - -1 ： 失败

```c
#include <signal.h>
#include <stdio.h>

int main() 
{
    // 创建一个信号集
    sigset_t set;

    // 清空信号集的内容
    sigemptyset(&set);

    // 判断 SIGINT 是否在信号集 set 里
    int ret = sigismember(&set, SIGINT);
    if(ret == 0) {
        printf("SIGINT 不阻塞\n");
    } else if(ret == 1) {
        printf("SIGINT 阻塞\n");
    }

    // 添加几个信号到信号集中
    sigaddset(&set, SIGINT);
    sigaddset(&set, SIGQUIT);

    // 判断SIGINT是否在信号集中
    ret = sigismember(&set, SIGINT);
    if(ret == 0) {
        printf("SIGINT 不阻塞\n");
    } else if(ret == 1) {
        printf("SIGINT 阻塞\n");
    }

    // 判断SIGQUIT是否在信号集中
    ret = sigismember(&set, SIGQUIT);
    if(ret == 0) {
        printf("SIGQUIT 不阻塞\n");
    } else if(ret == 1) {
        printf("SIGQUIT 阻塞\n");
    }

    // 从信号集中删除一个信号
    sigdelset(&set, SIGQUIT);

    // 判断SIGQUIT是否在信号集中
    ret = sigismember(&set, SIGQUIT);
    if(ret == 0) {
        printf("SIGQUIT 不阻塞\n");
    } else if(ret == 1) {
        printf("SIGQUIT 阻塞\n");
    }

    return 0;
}
```

![image-20211006123209575](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211006123209575.png)

### 操作内核信号集函数(sigprocmask & sigpending)

- `int sigprocmask(int how, const sigset_t *set, sigset_t *oldset);`
  - 使用`man 2 sigprocmask`查看帮助
  - 功能：将自定义信号集中的数据设置到内核中（设置阻塞，解除阻塞，替换）
  - 参数
    - `how` : 如何对内核阻塞信号集进行处理
      - `SIG_BLOCK`: 将用户设置的阻塞信号集添加到内核中，内核中原来的数据不变。假设内核中默认的阻塞信号集是mask， 相当于`mask | set`
      - `SIG_UNBLOCK`: 根据用户设置的数据，对内核中的数据进行解除阻塞。相当于`mask &= ~set`
      - `SIG_SETMASK`：覆盖内核中原来的值
    - `set` ：已经初始化好的用户自定义的信号集
    - `oldset` : 保存设置之前的内核中的阻塞信号集的状态，一般不使用，设置为 NULL 即可
  - 返回值：成功返回0， 失败返回-1
- `int sigpending(sigset_t *set);`
  - 使用`man 2 sigpending`查看帮助
  - 功能：获取内核中的未决信号集
  - 参数：set，传出参数，保存的是内核中的未决信号集中的信息
  - 返回值：成功返回0， 失败返回-1

```c
#include <stdio.h>
#include <signal.h>
#include <stdlib.h>
#include <unistd.h>

int main()
{
    // 设置自定义信号集
    sigset_t set;
    // 清空信号集
    sigemptyset(&set);
    // 设置2 3号信号阻塞
    sigaddset(&set, SIGINT);
    sigaddset(&set, SIGQUIT);
    // 修改内核中的阻塞信号集
    sigprocmask(SIG_BLOCK, &set, NULL);
    int num = 0;
    // 循环获取当前的未决信号集的数据
    while (1) {
        // 计数，用以退出循环
        num++;
        sigset_t pendingset;
        // 清空
        sigemptyset(&pendingset);
        // 获取当前的未决信号集的数据
        sigpending(&pendingset);
        // 遍历前32位
        for(int i = 1; i <= 31; i++) {
            if(sigismember(&pendingset, i) == 1) {
                printf("1");
            }else if(sigismember(&pendingset, i) == 0) {
                printf("0");
            }else {
                perror("sigismember");
                exit(0);
            }
        }
        printf("\n");
        sleep(1);
        if(num == 10) {
            // 解除阻塞
            sigprocmask(SIG_UNBLOCK, &set, NULL);
        }

    }
    return 0;
}
```

![image-20211006131223858](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211006131223858.png)

## SIGCHLD信号

### 基本介绍

- 作用：解决**僵尸进程问题**，能够在不阻塞父进程的情况下，回收子进程的资源

### 实例：僵尸问题解决

```c
#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <unistd.h>
#include <signal.h>
#include <sys/wait.h>

void myalarm(int num) {
    printf("捕捉到了信号的编号是：%d\n", num);
    // 回收子进程PCB的资源
    // 因为可能多个子进程同时死了，所以使用while循环
    // 不使用wait是因为会造成阻塞，父进程不能继续
    // 使用waitpid可以设置非阻塞
    while (1) {
        int ret = waitpid(-1, NULL, WNOHANG);
        if(ret > 0) {
            // 回收一个子进程
           printf("child die , pid = %d\n", ret);
       } else if(ret == 0) {
           // 说明还有子进程活着
           break;
       } else if(ret == -1) {
           // 没有子进程
           break;
       }
    }
}

int main()
{
    // 提前设置好阻塞信号集，阻塞SIGCHLD，因为有可能子进程很快结束，父进程还没有注册完信号捕捉
    sigset_t set;
    sigemptyset(&set);
    sigaddset(&set, SIGCHLD);
    sigprocmask(SIG_BLOCK, &set, NULL);

    pid_t pid;
    // 创建一些子进程
    for (int i = 0; i < 20; i++) {
        pid = fork();
        // 如果是子进程，不在作为父进程继续创建子进程
        if (pid == 0) {
            break;
        }
    }
    // 子进程先结束，父进程循环=>产生僵尸进程
    if (pid > 0) {
        // 父进程
        // 使用sigaction捕捉子进程死亡时发送的SIGCHLD信号
        struct sigaction act;
        act.sa_flags = 0;
        act.sa_handler = myalarm;
        sigemptyset(&act.sa_mask);
        sigaction(SIGCHLD, &act, NULL);

        // 注册完信号捕捉以后，解除阻塞
        sigprocmask(SIG_UNBLOCK, &set, NULL);
        
        while (1) {
            printf("parent process : %d\n", getpid());
            sleep(2);
        }
    } else {
        // 子进程
        printf("child process : %d\n", getpid());
    }

    return 0;
}
```

### 注意

- 可能会出现段错误（不一定能复现）

  - 原因：在捕获信号注册前，子进程已经执行完

    > 如果从开始注册信号到注册成功这段时间里，有n个SIGCHID信号产生的话，那么第一个产生的SIGCHID会抢先将未决位置为1，余下的n-1个SIGCHID被丢弃，然后当阻塞解除之后，信号处理函数发现这时候对应信号的未决位为1，继而执行函数处理该信号，处理函数中的while循环顺带将其他n-1子进程也一网打尽了，在这期间未决位的状态只经历了两次变化，即0->1->0

  ![image-20211010104606565](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211010104606565.png)

- 捕捉一次可能会回收多个子进程

  ![image-20211010105106921](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211010105106921.png)

# 进程间通信之共享内存

## 基本概念

- **共享内存允许两个或者多个进程共享物理内存的同一块区域（通常被称为段）**。由于一个共享内存段会称为一个进程用户空间的一部分，因此这种 `IPC` 机制无需内核介入。所有需要做的就是让一个进程将数据复制进共享内存中，并且这部分数据会对其他所有共享同一个段的进程可用
- 与管道等要求发送进程将数据从用户空间的缓冲区复制进内核内存和接收进程将数据从内核内存复制进用户空间的缓冲区的做法相比，这种 `IPC` 技术的速度更快

## 共享内存使用步骤

1. 调用 `shmget()` 创建一个新共享内存段或取得一个既有共享内存段的标识符（即由其他进程创建的共享内存段）。这个调用将返回后续调用中需要用到的共享内存标识符
2. 使用 `shmat()`来附上共享内存段，即使该段成为调用进程的虚拟内存的一部分
3. 此刻在程序中可以像对待其他可用内存那样对待这个共享内存段。为引用这块共享内存，程序需要使用由 `shmat()` 调用返回的 `addr` 值，它是一个指向进程的虚拟地址空间中该共享内存段的起点的指针
4. 调用 `shmdt()` 来分离共享内存段。在这个调用之后，进程就无法再引用这块共享内存了。这一步是可选的，并且在进程终止时会自动完成这一步
5. 调用 `shmctl()` 来删除共享内存段。只有当当前所有附加内存段的进程都与之分离之后内存段才会销毁。只有一个进程需要执行这一步

## 共享内存操作函数

- `int shmget(key_t key, size_t size, int shmflg);`
  - 使用`man 2 shmget`查看帮助
  - 功能：创建一个新的共享内存段（新创建的内存段中的数据都会被初始化为0），或者获取一个既有的共享内存段的标识
  - 参数
    - `key`：`key_t`类型是一个整形，通过这个找到或者创建一个共享内存。一般使用**16进制**表示，非0值
    - `size`：共享内存的大小
    - `shmflg`：属性
      - 访问权限
      - 附加属性：创建/判断共享内存是不是存在
        - 创建：`IPC_CREAT`
        - 判断共享内存是否存在： `IPC_EXCL` , 需要和`IPC_CREAT`一起使用，即`IPC_CREAT | IPC_EXCL | 0664`
  - 返回值
    - 失败：-1 并设置错误号
    - 成功：>0 返回共享内存的引用的ID，后面操作共享内存都是通过这个值

- `void *shmat(int shmid, const void *shmaddr, int shmflg);`
  - 使用`man 2 shmat`查看帮助
  - 功能：和当前的进程进行关联
  - 参数
    - `shmid` : 共享内存的标识（ID），由`shmget`返回值获取
    - `shmaddr`: 申请的共享内存的起始地址，设置为NULL，表示由内核指定
    - `shmflg` : 对共享内存的操作
      - 读 ： `SHM_RDONLY`，必须要有读权限
      - 读写： 指定为0即为有读写权限
  - 返回值：成功：返回共享内存的首（起始）地址。  失败`(void *) -1`
- `int shmdt(const void *shmaddr);`
  - 使用`man 2 shmdt`查看帮助
  - 功能：解除当前进程和共享内存的关联
  - 参数：`shmaddr`：共享内存的首地址
  - 返回值：成功 0， 失败 -1
- `int shmctl(int shmid, int cmd, struct shmid_ds *buf);`
  - 使用`man 2 shmctl`查看帮助
  - 功能：对共享内存进行操作。删除共享内存，共享内存要删除才会消失，创建共享内存的进程被销毁了对共享内存是没有任何影响
  - 参数
    - `shmid`：共享内存的ID
    - `cmd` : 要做的操作
      - `IPC_STAT`：获取共享内存的当前的状态
      - `IPC_SET`：设置共享内存的状态
      - `IPC_RMID`：标记共享内存被销毁
    - buf：需要设置或者获取的共享内存的属性信息
      - `IPC_STAT`：`buf`存储数据
      - `IPC_SET`：`buf`中需要初始化数据，设置到内核中
      - `IPC_RMID`：没有用，设置为NULL
- `key_t ftok(const char *pathname, int proj_id);`
  - 使用`man 3 ftok`查看帮助
  - 功能：根据指定的路径名，和int值，生成一个共享内存的key
  - 参数
    - `pathname`：指定一个**存在的路径**
    - `proj_id`：int类型的值，但是系统调用只会使用其中的1个字节，范围 ： 0-255  一般指定一个字符 `'a'`
  - 返回值：`shmget`中用到的`key`

## 共享内存操作命令

### ipcs 

- `ipcs -a`：打印当前系统中**所有的**进程间通信方式的信息
- `ipcs -m`：打印出**使用共享内存**进行进程间通信的信息
- `ipcs -q`：打印出**使用消息队列**进行进程间通信的信息
- `ipcs -s`：打印出**使用信号**进行进程间通信的信息

### ipcrm

- `ipcrm -M shmkey`：移除用`shmkey`创建的**共享内存段**
- `ipcrm -m shmid`：移除用`shmid`标识的**共享内存段**
- `ipcrm -Q msgkey`：移除用`msqkey`创建的**消息队列**
- `ipcrm -q msqid`：移除用`msqid`标识的**消息队列**
- `ipcrm -S semkey`：移除用`semkey`创建的**信号**
- `ipcrm -s semid`：移除用`semid`标识的**信号**

## 实例：进程间通信（注意）

### 写端

```c
#include <stdio.h>
#include <sys/ipc.h>
#include <sys/shm.h>
#include <string.h>

int main()
{
    // 1. 创新新共享内存
    // key不能随意指定，比如用key=100时会产生段错误
    int shmId = shmget(100, 1024, IPC_CREAT | IPC_EXCL | 0664);
    // 2. 将进程与共享内存关联
    void* ptr = shmat(shmId, NULL, 0);
    // 3. 往共享内存中写数据
    // 操作内存只能使用memcpy，使用strcpy会产生段错误
    // strcpy((char*)addr, "hello, world");
    char* str = "helloworld";
    printf("send : %s\n", str);
    // 包含结束符'\0'
    memcpy(ptr, str, strlen(str) + 1);
    // 为了程序不被直接停掉，如果停掉，那么共享内存不复存在
    printf("按任意键继续\n");
    getchar();
    // 4. 分离内存段
    shmdt(ptr);
    // 5. 删除共享内存段（标记删除）
    shmctl(shmId, IPC_RMID, NULL);
    return 0;
}
```

### 读端

```c
#include <stdio.h>
#include <sys/ipc.h>
#include <sys/shm.h>
#include <string.h>

int main()
{
    // 1. 判断并获取共享内存
    // 注意IPC_EXCL只能在创建共享内存时使用
    int shmId = shmget(100, 1024, IPC_CREAT); 
    // int shmId = shmget(100, 1024, IPC_CREAT | IPC_EXCL | 0664);
    // 2. 将进程与共享内存关联
    void* addr = shmat(shmId, NULL, 0);
    // 3. 从共享内存中读数据
    // 此时字符串内存即为共享内存内容
    printf("recv : %s\n", (char*)addr);
    // 为了程序不被直接停掉，如果停掉，那么共享内存不复存在
    printf("按任意键继续\n");
    getchar();
    // 4. 分离内存段
    shmdt(addr);
    // 5. 删除共享内存段（标记删除）
    shmctl(shmId, IPC_RMID, NULL);
    return 0;
}
```

### 注意

#### 虚拟机和实体机

1. 虚拟机在启动情况下，有默认共享内存，而实体机（服务器）没有

   - 虚拟机

     ![image-20211023212105306](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211023212105306.png)

   - 实体机

     ![image-20211023212132287](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211023212132287.png)

#### 执行顺序与代码（注意）

1. **先执行读端，再执行写端**，且关键代码如下时，此时**读端读到空数据，写端会先输出内容然后产生段错误**

   ```c
   // write
   int shmId = shmget(100, 1024, IPC_CREAT | IPC_EXCL | 0664);
   // read
   int shmId = shmget(100, 1024, IPC_CREAT | IPC_EXCL | 0664);
   ```

   ![image-20211023212353103](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211023212353103.png)

2. **先执行写端，再执行读端**，且关键代码如下时，此时**写端正常写数据，读端会产生段错误**

   ```c
   // write
   int shmId = shmget(100, 1024, IPC_CREAT | IPC_EXCL | 0664);
   // read
   int shmId = shmget(100, 1024, IPC_CREAT | IPC_EXCL | 0664);
   ```

   ![image-20211023212610468](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211023212610468.png)

3. **先执行读端，再执行写端**，且关键代码如下时，此时**读端产生段错误，写端会先输出内容然后产生段错误且当前key=100（十六进制为64）被占用，按先写后读顺序时，需要手动回收内存，否则不能继续该块内存**，如下图所示

   ```c
   // write
   int shmId = shmget(100, 1024, IPC_CREAT | IPC_EXCL | 0664);
   // read
   int shmId = shmget(100, 1024, IPC_CREAT); 
   ```

   ![image-20211023212851187](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211023212851187.png)

   ![image-20211023213017484](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211023213017484.png)

   ![image-20211023213335145](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211023213335145.png)

4. **先执行写端，再执行读端**，且关键代码如下时，正常执行

   ```c
   // write
   int shmId = shmget(100, 1024, IPC_CREAT | IPC_EXCL | 0664);
   // read
   int shmId = shmget(100, 1024, IPC_CREAT); 
   ```

   ![image-20211023213450784](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211023213450784.png)

5. 出现的原因

   - 当先执行读端时，此时共享内存中没有内容或者没有创建

## 总结

### 常见问题

- 操作系统如何知道一块共享内存被多少个进程关联？
  - 共享内存维护了一个结构体`struct shmid_ds`，这个结构体中有一个成员 `shm_nattch`
  - `shm_nattach` 记录了关联的进程个数
- 可不可以对共享内存进行多次删除 `shmctl`
  - 可以，因为执行`shmctl` 表示**标记删除共享内存（key变为0），不是直接删除**。当和共享内存关联的进程数为0的时候，就真正被删除
  - 如果一个进程和共享内存取消关联，那么这个进程就不能继续操作这个共享内存

### 共享内存与内存映射区别

- **共享内存**可以直接创建，**内存映射**需要磁盘文件（匿名映射除外）
- 共享内存效率更高
- **共享内存**所有的进程操作的是同一块共享内存，**内存映射**，每个进程在自己的虚拟地址空间中有一个独立的内存
- 数据安全
  - 进程突然退出：**共享内存**还存在，**内存映射区**消失
  - 运行进程的电脑死机(宕机)：**共享内存**中的数据消失，内存映射区的数据也消失 ，但由于磁盘文件中的数据还在，所以**可以说内存映射区的数据还存在**
- 生命周期
  - 共享内存
    - 进程退出时共享内存还在，只会标记删除
    - 只有当所有的关联的进程数为0或者关机时，才会真正删除
    - 如果一个进程退出，会自动和共享内存进行取消关联
  - 内存映射区：进程退出，内存映射区销毁

# 守护进程

## 前置知识

### 终端

- 在 `UNIX` 系统中，用户通过终端登录系统后得到一个 `shell` 进程，这个终端成为 shell 进程的`控制终端（Controlling Terminal）`，进程中，控制终端是保存在 PCB 中的信息，而 fork() 会复制 PCB 中的信息，因此由 shell 进程启动的其它进程的控制终端也是这个终端
- 默认情况下（没有重定向），每个进程的标准输入、标准输出和标准错误输出都指向控制终端
  - 进程从标准输入读也就是读用户的键盘输入
  - 进程往标准输出或标准错误输出写也就是输出到显示器上
- 在控制终端输入一些特殊的控制键可以给前台进程发信号，例如 `Ctrl + C` 会产生 `SIGINT` 信号，`Ctrl + \` 会产生 `SIGQUIT` 信号

### 进程组

- **进程组**和**会话**在进程之间形成了一种两级层次关系
  - 进程组是一组相关进程的集合，会话是一组相关进程组的集合
  - 进程组和会话是为支持 shell 作业控制而定义的抽象概念，用户通过 shell 能够交互式地在前台或后台运行命令
- 进程组由一个或多个共享同一进程组标识符（`PGID`）的进程组成
- **一个进程组拥有一个进程组首进程，该进程是创建该组的进程，其进程 ID 为该进程组的 ID，新进程会继承其父进程所属的进程组 ID**
- 进程组拥有一个生命周期，其**开始时间为首进程创建组的时刻**，**结束时间为最后一个成员进程退出组的时刻**
- 一个进程可能会因为终止而退出进程组，也可能会因为加入了另外一个进程组而退出进程组
- 进程组首进程无需是最后一个离开进程组的成员

### 会话

- **会话**是一组进程组的集合
- **会话首进程是创建该新会话的进程，其进程 ID 会成为会话 ID。新进程会继承其父进程的会话 ID**
- 一个会话中的所有进程共享单个控制终端。控制终端会在会话首进程首次打开一个终端设备时被建立
- **一个终端最多可能会成为一个会话的控制终端**
- **在任一时刻，会话中的其中一个进程组会成为终端的前台进程组，其他进程组会成为后台进程组**。只有前台进程组中的进程才能从控制终端中读取输入。当用户在控制终端中输入终端字符生成信号后，该信号会被发送到前台进程组中的所有成员
- 当控制终端的连接建立起来之后，会话首进程会成为该终端的控制进程

### 进程组、会话、控制终端之间的关系

![image-20211023224430993](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211023224430993.png)

### 进程组、会话操作函数

- `pid_t getpgrp(void);`
- `pid_t getpgid(pid_t pid);`
- `int setpgid(pid_t pid, pid_t pgid);`
- ` pid_t getsid(pid_t pid);`
- `pid_t setsid(void);`

## 守护进程概念

- `守护进程（Daemon Process）`，也就是通常说的 Daemon 进程（精灵进程），是Linux 中的后台服务进程。它是一个生存期较长的进程，通常独立于控制终端并且周期性地执行某种任务或等待处理某些发生的事件。一般采用以 d 结尾的名字
- 守护进程特征
  - 生命周期很长，守护进程会在系统启动的时候被创建并一直运行直至系统被关闭
  - 它在后台运行并且不拥有控制终端。没有控制终端确保了内核永远不会为守护进程自动生成任何控制信号以及终端相关的信号（如 `SIGINT`、`SIGQUIT`）
- Linux 的大多数服务器就是用守护进程实现的。比如，Internet 服务器 `inetd`，Web 服务器 `httpd` 等

## 守护进程的创建步骤

1. 执行一个 `fork()`，之后父进程退出，子进程继续执行
2. 子进程调用 `setsid()` 开启一个新会话
3. 清除进程的 `umask` 以确保当守护进程创建文件和目录时拥有所需的权限
4. 修改进程的当前工作目录，通常会改为根目录（`/`）
5. 关闭守护进程从其父进程继承而来的所有打开着的文件描述符
6. 在关闭了文件描述符0、1、2之后，守护进程通常会打开`/dev/null` 并使用`dup2()` 使所有这些描述符指向这个设备
7. 核心业务逻辑

## 实例：守护进程实现每隔两秒获取时间并写入磁盘

```c
/*
    写一个守护进程，每隔2s获取一下系统时间，将这个时间写入到磁盘文件中。
*/

#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>
#include <stdlib.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <sys/time.h>
#include <signal.h>
#include <time.h>
#include <string.h>

void myWork(int num) {
    // 捕捉到信号之后，获取系统时间，写入磁盘文件
    time_t tm = time(NULL);
    struct tm * loc = localtime(&tm);

    char* str = asctime(loc);
    int fd = open("time.txt", O_RDWR | O_CREAT | O_APPEND, 0664);
    write(fd ,str, strlen(str));
    close(fd);
}

int main()
{
    // 1. fork产生子进程，并退出父进程
    pid_t pid = fork();
    if (pid > 0) {
        exit(0);
    }
    // 2. 子进程调用 setsid() 开启一个新会话
    setsid();
    // 3. 设置掩码
    umask(022);
    // 4. 修改进程的当前工作目录，通常设为/，这里应该是权限不够，所以改为当前目录
    chdir("/home/u/Desktop");
    // 5. 关闭、重定向文件描述符
    int fd = open("/dev/null", O_RDWR);
    dup2(fd, STDIN_FILENO);
    dup2(fd, STDOUT_FILENO);
    dup2(fd, STDERR_FILENO);
    // 6. 业务逻辑
    // 捕捉定时信号
    struct sigaction act;
    act.sa_flags = 0;
    act.sa_handler = myWork;
    sigemptyset(&act.sa_mask);
    sigaction(SIGALRM, &act, NULL);

    // 设置定时器
    struct itimerval val;
    val.it_interval.tv_sec = 2;
    val.it_interval.tv_usec = 0;
    val.it_value.tv_sec = 2;
    val.it_value.tv_usec = 0;
    setitimer(ITIMER_REAL, &val, NULL);

    // 不让进程结束
    while(1) {
        sleep(10);
    }

    return 0;
}
```

![image-20211023231303430](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211023231303430.png)

# 实用技巧

## 后台运行进程

- code

  ```c
  #include <stdio.h>
  #include <unistd.h>
  
  int main()
  {
      while (1) {
          printf("this is a test...\n");
          sleep(1);
      }
      return 0;
  }
  ```

- 进程切换到后台运行：`./test &`，切换到后台后，当前终端可以使用其他命令，此时无法通过`CTRL C`终止

  ![image-20211006125801381](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211006125801381.png)

- 后台进程切换到前台：`fg`，切换后，可以通过`CTRL C`终止


# 线程基础

## 线程概述

### 基本概念

- 与`进程（process）`类似，`线程（thread）`是允许应用程序**并发执行多个任务**的一种机制
- 一个进程可以包含多个线程
- 同一个程序中的所有线程均会独立执行相同程序，且共享同一份全局内存区域，其中包括初始化数据段、未初始化数据段，以及堆内存段。（传统意义上的 UNIX 进程只是多线程程序的一个特例，该进程只包含一个线程）
- **进程是 CPU 分配资源的最小单位，线程是操作系统调度执行的最小单位**
- 线程是轻量级的进程（`LWP：Light Weight Process`），在 Linux 环境下线程的本质仍是进程
- 查看指定进程的 `LWP` 号：`ps –Lf pid`，其中`pid`可以由`ps aux`得到
- 一般情况下，`main函数`所在的线程我们称之为`主线程（main线程）`，其余创建的线程称为`子线程`
  - 程序中默认只有一个进程，`fork()`函数调用，2进程（父子进程）
  - 程序中默认只有一个线程，`pthread_create()`函数调用，2个线程（主线程和子线程）

### 线程和进程区别

- **进程间的信息难以共享**。由于除去只读代码段外，父子进程并未共享内存，因此必须采用一些进程间通信方式，在进程间进行信息交换
- 调用 `fork()` 来创建进程的代价相对较高，即便利用写时复制技术，仍然需要复制诸如内存页表和文件描述符表之类的多种进程属性，这意味着 `fork()` 调用在时间上的开销依然不菲
- 线程之间能够方便、快速地共享信息。只需**将数据复制到共享（全局或堆）变量**中即可
- 创建线程比创建进程通常要快 10 倍甚至更多。线程间是共享虚拟地址空间的，无需采用写时复制来复制内存，也无需复制页表

### 线程之间共享和非共享资源

#### 共享资源

- 进程 ID 和父进程 ID
- 进程组 ID 和会话 ID
- 用户 ID 和 用户组 ID
- 文件描述符表
- 信号处置
- 文件系统的相关信息：文件权限掩码（`umask`）、当前工作目录
- 虚拟地址空间（**除栈、.text**）

#### 非共享资源

- 线程 ID
- 信号掩码
- 线程特有数据
- error 变量
- 实时调度策略和优先级
- 栈，本地变量和函数的调用链接信息

### NPTL

- 当 Linux 最初开发时，在内核中并不能真正支持线程。但是它的确可以通过 `clone()` 系统调用将进程作为可调度的实体。这个调用创建了调用进程（calling process）的一个拷贝，这个拷贝与调用进程共享相同的地址空间。`LinuxThreads` 项目使用这个调用来完成在用户空间模拟对线程的支持。不幸的是，这种方法有一些缺点，尤其是在信号处理、调度和进程间同步等方面都存在问题。另外，这个线程模型也不符合 `POSIX` 的要求

- 要改进 `LinuxThreads`，需要内核的支持，并且重写线程库。有两个相互竞争的项目开始来满足这些要求

  - 一个包括 IBM 的开发人员的团队开展了 `NGPT（Next-Generation POSIX Threads）`项目
  - 同时，Red Hat 的一些开发人员开展了 `NPTL` 项目
  - `NGPT` 在 2003 年中期被放弃了，把这个领域完全留给了 `NPTL`

- `NPTL`，或称为 `Native POSIX Thread Library`，是 Linux 线程的一个新实现，它克服了 `LinuxThreads `的缺点，同时也符合 `POSIX` 的需求。与 `LinuxThreads` 相比，它在性能和稳定性方面都提供了重大的改进

- 查看当前 `pthread` 库版本：`getconf GNU_LIBPTHREAD_VERSION`

  ![image-20211024092845797](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211024092845797.png)

### 注意

- 由于`pthread`属于第三方库，所以在编译时需要加上参数`-pthread`或`-lpthread`即指定包路径，如果不加报以下错误（执行程序为线程创建）

  ![image-20211024094053228](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211024094053228.png)

## 线程操作函数

- 获取当前的线程的线程ID：`pthread_t pthread_self(void);`

- 比较两个线程ID是否相等：`int pthread_equal(pthread_t t1, pthread_t t2);`

  > 不同的操作系统，`pthread_t`类型的实现不一样，有的是无符号的长整型，有的是使用结构体去实现的

- 线程创建：``int pthread_create(pthread_t *thread, const pthread_attr_t *attr, void *(*start_routine) (void *), void *arg);``

- 线程终止：`void pthread_exit(void *retval);`

## 线程创建

- `int pthread_create(pthread_t *thread, const pthread_attr_t *attr, void *(*start_routine) (void *), void *arg);`
  - 通过`man 3 pthread_create`查看帮助
  - 功能：创建一个子线程
  - 参数
    - `thread`：传出参数，线程创建成功后，子线程的线程ID被写到该变量中
    - `attr` : 设置线程的属性，一般使用默认值，NULL
    - `start_routine` : 函数指针，这个函数是子线程需要处理的逻辑代码
    - `arg` : 给第三个参数(`start_routine`)使用，传参
  - 返回值
    - 成功：0
    - 失败：返回错误号。这个错误号和之前`errno`不太一样。获取错误号的信息：  `char * strerror(int errnum);`

```c
#include <stdio.h>
#include <pthread.h>
#include <string.h>
#include <unistd.h>

void* myWork(void* arg) {
    printf("child thread...\n");
    printf("num = %d\n", *(int*)arg);
    
    return NULL;
}

int main()
{
    // 创建子线程
    pthread_t tid;
    int num = 10;
    int ret = pthread_create(&tid, NULL, myWork, (void*)&num);
    if (ret != 0) {
        char * errstr = strerror(ret);
        printf("error : %s\n", errstr);
    }

    for (int i = 0; i < 5; i++) {
        printf("%d\n", i);
    }

    // 防止子线程没有抢占到CPU且此时主线程已经执行完并退出
    sleep(1);
    return 0;
}
```

![image-20211024094256740](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211024094256740.png)

## 线程终止

- `void pthread_exit(void *retval);`
  - 通过`man 3 pthread_exit`查看帮助
  - 功能：终止一个线程，在哪个线程中调用，就表示终止哪个线程
  - 参数：`retval`，需要传递一个指针，作为一个返回值，可以在`pthread_join()`中获取到

```c
#include <stdio.h>
#include <pthread.h>
#include <string.h>
#include <unistd.h>

void* myWork(void* arg) {
    printf("child thread...\n");
    printf("num = %d\n", *(int*)arg);
    printf("child thread id : %ld\n", pthread_self());

    return NULL;
}

int main()
{
    // 创建子线程
    pthread_t tid;
    int num = 10;
    int ret = pthread_create(&tid, NULL, myWork, (void*)&num);
    if (ret != 0) {
        char * errstr = strerror(ret);
        printf("error : %s\n", errstr);
    }
    printf("tid : %ld, main thread id : %ld\n", tid ,pthread_self());

    for (int i = 0; i < 5; i++) {
        printf("%d\n", i);
    }

    // 让主线程退出，当主线程退出时，不会影响其他正常运行的线程
    pthread_exit(NULL);
    // 下面程序已经不能被执行
    printf("test message\n");

    return 0;
}
```

![image-20211024100756859](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211024100756859.png)

## 线程连接

- `int pthread_join(pthread_t thread, void **retval);`
  - 通过`man 3 pthread_join`查看帮助
  - 功能：和一个已经终止的线程进行连接。回收子线程的资源，这个函数是阻塞函数，调用一次只能回收一个子线程，一般在主线程中使用
  - 参数
    - `thread`：需要回收的子线程的ID
    - `retval`：接收子线程退出时的返回值
  - 返回值
    - 成功：0
    - 失败：返回错误号。这个错误号和之前`errno`不太一样。获取错误号的信息：  `char * strerror(int errnum);`

```c
#include <stdio.h>
#include <pthread.h>
#include <string.h>
#include <unistd.h>

int val = 10;

void* myWork(void* arg) {
    printf("child thread...\n");
    printf("num = %d\n", *(int*)arg);
    printf("child thread id : %ld\n", pthread_self());
    val++;
    
    pthread_exit((void*)&val);     // 等价于return (void*)&val;
}

int main()
{
    printf("init val : %d\n", val);
    // 创建子线程
    pthread_t tid;
    int num = 10;
    int ret = pthread_create(&tid, NULL, myWork, (void*)&num);
    if (ret != 0) {
        char * errstr = strerror(ret);
        printf("error : %s\n", errstr);
    }
    printf("tid : %ld, main thread id : %ld\n", tid ,pthread_self());

    for (int i = 0; i < 5; i++) {
        printf("%d\n", i);
    }

    // 主线程调用pthread_join()回收子线程的资源
    int * thread_retval;
    ret = pthread_join(tid, (void **)&thread_retval);

    if(ret != 0) {
        char * errstr = strerror(ret);
        printf("error : %s\n", errstr);
    }
    printf("exit data : %d\n", *thread_retval);
    printf("回收子线程资源成功！\n");
    
    // 让主线程退出，当主线程退出时，不会影响其他正常运行的线程
    pthread_exit(NULL);
    // 下面程序已经不能被执行
    printf("test message\n");

    return 0;
}
```

![image-20211024102827228](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211024102827228.png)

## 线程分离

- `int pthread_detach(pthread_t thread);`
  - 通过`man 3 pthread_detach`查看帮助
  - 功能：分离一个线程。被分离的线程在终止的时候，会自动释放资源返回给系统
    - 不能多次分离，会产生不可预料的行为
    - 不能去连接一个已经分离的线程，会报错
  - 参数：需要分离的线程的ID
  - 返回值
    - 成功：0
    - 失败：返回错误号。这个错误号和之前`errno`不太一样。获取错误号的信息：  `char * strerror(int errnum);`

```c
#include <stdio.h>
#include <pthread.h>
#include <string.h>
#include <unistd.h>

void* myWork(void * arg) {
    printf("chid thread id : %ld\n", pthread_self());
    return NULL;
}

int main() 
{
    // 创建一个子线程
    pthread_t tid;
    int ret = pthread_create(&tid, NULL, myWork, NULL);
    if(ret != 0) {
        char * errstr = strerror(ret);
        printf("error1 : %s\n", errstr);
    }

    // 输出主线程和子线程的id
    printf("tid : %ld, main thread id : %ld\n", tid, pthread_self());

    // 设置子线程分离,子线程分离后，子线程结束时对应的资源就不需要主线程释放
    ret = pthread_detach(tid);
    if(ret != 0) {
        char * errstr = strerror(ret);
        printf("error2 : %s\n", errstr);
    }

    // 设置分离后，对分离的子线程进行连接 pthread_join()
    // ret = pthread_join(tid, NULL);
    // if(ret != 0) {
    //     char * errstr = strerror(ret);
    //     printf("error3 : %s\n", errstr);
    // }

    pthread_exit(NULL);

    return 0;
}
```

![image-20211024112014474](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211024112014474.png)

## 线程取消

- `int pthread_cancel(pthread_t thread);`
  - 通过`man 3 pthread_cancel`查看帮助
  - 功能：取消线程（让线程终止）。取消某个线程，可以终止某个线程的运行， 但是并不是立马终止，而是当子线程执行到一个**取消点**，线程才会终止
  - **取消点**：系统规定好的一些系统调用，我们可以粗略的理解为从用户区到内核区切换的位置，可以通过`man pthreads`查看取消点

```c
#include <stdio.h>
#include <pthread.h>
#include <string.h>
#include <unistd.h>

void* myWork(void * arg) {
    printf("chid thread id : %ld\n", pthread_self());
    for (int i = 0; i < 20; i++) {
        printf("child: %d\n", i);
    }
    return NULL;
}

int main() 
{
    // 创建一个子线程
    pthread_t tid;
    int ret = pthread_create(&tid, NULL, myWork, NULL);
    if(ret != 0) {
        char * errstr = strerror(ret);
        printf("error1 : %s\n", errstr);
    }
    
    // 线程取消
    pthread_cancel(tid);
    for (int i = 0; i < 20; i++) {
        printf("main: %d\n", i);
    }

    // 输出主线程和子线程的id
    printf("tid : %ld, main thread id : %ld\n", tid, pthread_self());

    pthread_exit(NULL);

    return 0;
}
```

- 以上代码在不同机器可能无法触发线程取消，每次执行结果也不一定相同=>==猜测由于速度过快==

  - 虚拟机

    ![image-20211024141255941](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211024141255941.png)

  - 实体机

    ![image-20211024140914892](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211024140914892.png)

## 线程属性

### 常用API

- 线程属性类型：`pthread_attr_t`
- 初始化线程属性变量：`int pthread_attr_init(pthread_attr_t *attr);`
- 释放线程属性的资源：`int pthread_attr_destroy(pthread_attr_t *attr);`
- 获取线程分离的状态属性：`int pthread_attr_getdetachstate(const pthread_attr_t *attr, int *detachstate);`
- 设置线程分离的状态属性：`int pthread_attr_setdetachstate(pthread_attr_t *attr, int detachstate);`

### 设置步骤

1. 创建一个线程属性变量
2. 初始化属性变量
3. 设置属性
4. 释放线程属性资源

### 实例：通过设置线程属性实现线程分离

```c
#include <stdio.h>
#include <pthread.h>
#include <string.h>
#include <unistd.h>

void* myWork(void * arg) {
    printf("chid thread id : %ld\n", pthread_self());
    for (int i = 0; i < 5; i++) {
        printf("child: %d\n", i);
    }
    return NULL;
}

int main() 
{
    // 1. 创建一个线程属性变量
    pthread_attr_t attr;
    // 2. 初始化属性变量
    pthread_attr_init(&attr);
    // 3. 设置属性-线程分离
    pthread_attr_setdetachstate(&attr, PTHREAD_CREATE_DETACHED);

    // 创建一个子线程
    pthread_t tid;
    int ret = pthread_create(&tid, NULL, myWork, NULL);
    if(ret != 0) {
        char * errstr = strerror(ret);
        printf("error1 : %s\n", errstr);
    }
    
    // 获取线程的栈的大小
    size_t size;
    pthread_attr_getstacksize(&attr, &size);
    printf("thread stack size : %ld\n", size);

    // 输出主线程和子线程的id
    printf("tid : %ld, main thread id : %ld\n", tid, pthread_self());
    // 4. 释放线程属性资源
    pthread_attr_destroy(&attr);

    pthread_exit(NULL);

    return 0;
}
```

![image-20211024143206510](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211024143206510.png)

# 线程同步

## ==疑问==

什么时候加锁合适？不同时机加锁可能会导致不一样的结果

## 出现的原因

- 假设我有100张票，有三个窗口同时在售卖，那么
- 如果`ticket`为局部变量，那么每个窗口都是从100开始售卖=>执行`test1()`
- 如果`ticket`为全局变量，那么不同窗口可能因为抢占资源而同时开始售卖，导致出现同时在卖同一张票（可能出现负数票）=>执行`test2()`

```c
#include <stdio.h>
#include <pthread.h>

void* selltickets1(void* arg) {
    int tickets = 10;
    while (tickets > 0) {
        printf("线程%ld 正在售卖第%d张票\n", pthread_self(), tickets);
        tickets--;
    }

    return NULL;
}

void test1() {
    // 创建三个线程
    pthread_t tid1;
    pthread_t tid2;
    pthread_t tid3;
    pthread_create(&tid1, NULL, selltickets1, NULL);
    pthread_create(&tid2, NULL, selltickets1, NULL);
    pthread_create(&tid3, NULL, selltickets1, NULL);
    // 线程连接，回收子线程的资源，阻塞
    pthread_join(tid1, NULL);
    pthread_join(tid2, NULL);
    pthread_join(tid3, NULL);
}

int total_tickets = 10;

void* selltickets2(void* arg) {
    while (total_tickets > 0) {
        printf("线程%ld 正在售卖第%d张票\n", pthread_self(), total_tickets);
        total_tickets--;
    }

    return NULL;
}

void test2() {
    // 创建三个线程
    pthread_t tid1;
    pthread_t tid2;
    pthread_t tid3;
    pthread_create(&tid1, NULL, selltickets2, NULL);
    pthread_create(&tid2, NULL, selltickets2, NULL);
    pthread_create(&tid3, NULL, selltickets2, NULL);
    // 线程连接，回收子线程的资源，阻塞
    pthread_join(tid1, NULL);
    pthread_join(tid2, NULL);
    pthread_join(tid3, NULL);
}


int main()
{
    test2();
    pthread_exit(NULL);     // 退出main进程
    return 0;
}
```

- 执行`test1`

  ![image-20211024145941102](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211024145941102.png)

- 执行`test2`

  ![image-20211024145916760](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211024145916760.png)

## 线程同步概念

- 线程的主要优势在于，**能够通过全局变量来共享信息**。不过，这种便捷的共享是有代价的：必须确保多个线程不会同时修改同一变量，或者某一线程不会读取正在由其他线程修改的变量
- `临界区`是指访问某一共享资源的代码片段，并且这段代码的执行应为`原子操作`，也就是同时访问同一共享资源的其他线程不应终端该片段的执行
- `线程同步`：即**当有一个线程在对内存进行操作时，其他线程都不可以对这个内存地址进行操作，直到该线程完成操作，其他线程才能对该内存地址进行操作，而其他线程则处于等待状态**

## 互斥量/互斥锁

### 基本概念

- 为避免线程更新共享变量时出现问题，可以使用`互斥量（mutex 是 mutual exclusion的缩写）`来确保同时仅有一个线程可以访问某项共享资源。使用**互斥量能保证对任意共享资源的原子访问**

- 互斥量有两种状态：`已锁定（locked）`和`未锁定（unlocked）`。任何时候，**至多只有一个线程可以锁定该互斥量**。试图对已经锁定的某一互斥量再次加锁，将可能阻塞线程或者报错失败，具体取决于加锁时使用的方法

- 一旦线程锁定互斥量，随即成为该互斥量的所有者，**只有所有者才能给互斥量解锁**。一般情况下，对每一共享资源（可能由多个相关变量组成）会使用不同的互斥量，每一线程在访问同一资源时将采用如下协议

  - 针对共享资源锁定互斥量
  - 访问共享资源
  - 对互斥量解锁

- 如果多个线程试图执行这一块代码（一个临界区），事实上只有一个线程能够持有该互斥量（其他线程将遭到阻塞），即同时只有一个线程能够进入这段代码区域，如下

  ![image-20211024153557069](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211024153557069.png)

### 互斥量相关操作函数

- 互斥量的类型：`pthread_mutex_t`
- 初始化互斥量：`int pthread_mutex_init(pthread_mutex_t *restrict mutex, const pthread_mutexattr_t *restrict attr);`
  - 参数
    - `mutex` ： 需要初始化的互斥量变量
    - `attr` ： 互斥量相关的属性，设置为NULL，由内核指定
  - `restrict` : C语言的修饰符，被修饰的指针，不能由另外的一个指针进行操作

- 释放互斥量的资源：`int pthread_mutex_destroy(pthread_mutex_t *mutex);`
- 加锁：`int pthread_mutex_lock(pthread_mutex_t *mutex);`
- 尝试加锁：`int pthread_mutex_trylock(pthread_mutex_t *mutex);`
- 解锁：`int pthread_mutex_unlock(pthread_mutex_t *mutex);`

### 实例：互斥锁实现进程同步售票

```c
#include <stdio.h>
#include <pthread.h>

// 全局变量创建互斥量，保证所有线程都能访问
pthread_mutex_t mutex;

int total_tickets = 100;

void* selltickets(void* arg) {
    while (1) {
        // 加锁
        pthread_mutex_lock(&mutex);
        if (total_tickets > 0) {
            // 访问共享变量
            printf("线程%ld 正在售卖第%d张票\n", pthread_self(), total_tickets);
            total_tickets--;
        } else {
            // 解锁
            pthread_mutex_unlock(&mutex);
            break;
        }
        // 解锁
        pthread_mutex_unlock(&mutex);
    }

    return NULL;
}

int main()
{
    // 初始化互斥量
    pthread_mutex_init(&mutex, NULL);

    // 创建三个线程
    pthread_t tid1;
    pthread_t tid2;
    pthread_t tid3;
    pthread_create(&tid1, NULL, selltickets, NULL);
    pthread_create(&tid2, NULL, selltickets, NULL);
    pthread_create(&tid3, NULL, selltickets, NULL);
    // 线程连接，回收子线程的资源，阻塞
    pthread_join(tid1, NULL);
    pthread_join(tid2, NULL);
    pthread_join(tid3, NULL);
    pthread_exit(NULL);     // 退出main进程

    // 释放互斥量资源
    pthread_mutex_destroy(&mutex);
    return 0;
}
```

![image-20211024154443063](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211024154443063.png)

## 死锁

### 基本概念

- 一个线程需要同时访问两个或更多不同的共享资源，而每个资源又都由不同的互斥量管理。当超过一个线程加锁同一组互斥量时，就有可能发生`死锁`
- 两个或两个以上的进程在执行过程中，因争夺共享资源而造成的一种互相等待的现象，若无外力作用，它们都将无法推进下去。此时称系统处于死锁状态或系统产生了死锁

### 死锁的几种场景

#### 忘记释放锁

```c
#include <stdio.h>
#include <pthread.h>
#include <unistd.h>

// 全局变量，所有的线程都共享这一份资源。
int tickets = 1000;

// 创建一个互斥量
pthread_mutex_t mutex;

void * sellticket(void * arg) {

    // 卖票
    while(1) {
        // 加锁
        pthread_mutex_lock(&mutex);

        if(tickets > 0) {
            usleep(6000);
            printf("%ld 正在卖第 %d 张门票\n", pthread_self(), tickets);
            tickets--;
        }else {
            // 解锁
            pthread_mutex_unlock(&mutex);
            break;
        }
        
    }

    return NULL;
}

int main() 
{
    // 初始化互斥量
    pthread_mutex_init(&mutex, NULL);

    // 创建3个子线程
    pthread_t tid1, tid2, tid3;
    pthread_create(&tid1, NULL, sellticket, NULL);
    pthread_create(&tid2, NULL, sellticket, NULL);
    pthread_create(&tid3, NULL, sellticket, NULL);

    // 回收子线程的资源,阻塞
    pthread_join(tid1, NULL);
    pthread_join(tid2, NULL);
    pthread_join(tid3, NULL);

    pthread_exit(NULL); // 退出主线程

    // 释放互斥量资源
    pthread_mutex_destroy(&mutex);

    return 0;
}
```

#### 重复加锁

```c
#include <stdio.h>
#include <pthread.h>
#include <unistd.h>

// 全局变量，所有的线程都共享这一份资源。
int tickets = 1000;

// 创建一个互斥量
pthread_mutex_t mutex;

void * sellticket(void * arg) {

    // 卖票
    while(1) {

        // 加锁
        pthread_mutex_lock(&mutex);
        pthread_mutex_lock(&mutex);

        if(tickets > 0) {
            usleep(6000);
            printf("%ld 正在卖第 %d 张门票\n", pthread_self(), tickets);
            tickets--;
        }else {
            // 解锁
            pthread_mutex_unlock(&mutex);
            break;
        }

        // 解锁
        pthread_mutex_unlock(&mutex);
        pthread_mutex_unlock(&mutex);
    }

    return NULL;
}

int main() {

    // 初始化互斥量
    pthread_mutex_init(&mutex, NULL);

    // 创建3个子线程
    pthread_t tid1, tid2, tid3;
    pthread_create(&tid1, NULL, sellticket, NULL);
    pthread_create(&tid2, NULL, sellticket, NULL);
    pthread_create(&tid3, NULL, sellticket, NULL);

    // 回收子线程的资源,阻塞
    pthread_join(tid1, NULL);
    pthread_join(tid2, NULL);
    pthread_join(tid3, NULL);

    pthread_exit(NULL); // 退出主线程

    // 释放互斥量资源
    pthread_mutex_destroy(&mutex);

    return 0;
}
```

#### 多线程多锁，抢占锁资源

![image-20211024162356465](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211024162356465.png)

```c
#include <stdio.h>
#include <pthread.h>
#include <unistd.h>

// 创建2个互斥量
pthread_mutex_t mutex1, mutex2;

void * workA(void * arg) {

    pthread_mutex_lock(&mutex1);
    sleep(1);
    pthread_mutex_lock(&mutex2);

    printf("workA....\n");

    pthread_mutex_unlock(&mutex2);
    pthread_mutex_unlock(&mutex1);
    return NULL;
}


void * workB(void * arg) {
    pthread_mutex_lock(&mutex2);
    sleep(1);
    pthread_mutex_lock(&mutex1);

    printf("workB....\n");

    pthread_mutex_unlock(&mutex1);
    pthread_mutex_unlock(&mutex2);

    return NULL;
}

int main() {

    // 初始化互斥量
    pthread_mutex_init(&mutex1, NULL);
    pthread_mutex_init(&mutex2, NULL);

    // 创建2个子线程
    pthread_t tid1, tid2;
    pthread_create(&tid1, NULL, workA, NULL);
    pthread_create(&tid2, NULL, workB, NULL);

    // 回收子线程资源
    pthread_join(tid1, NULL);
    pthread_join(tid2, NULL);

    // 释放互斥量资源
    pthread_mutex_destroy(&mutex1);
    pthread_mutex_destroy(&mutex2);

    return 0;
}
```

## 读写锁

### 基本概念

- 当有一个线程已经持有互斥锁时，互斥锁将所有试图进入临界区的线程都阻塞住。但是考虑一种情形，当前持有互斥锁的线程只是要读访问共享资源，而同时有其它几个线程也想读取这个共享资源，但是由于互斥锁的排它性，所有其它线程都无法获取锁，也就无法读访问共享资源了，但是实际上多个线程同时读访问共享资源并不会导致问题
- 在对数据的读写操作中，**更多的是读操作，写操作较少**，例如对数据库数据的读写应用。为了满足当前能够允许多个读出，但只允许一个写入的需求，线程提供了读写锁来实现
- 读写锁的特点
  - 如果有其它线程读数据，则允许其它线程执行读操作，但不允许写操作
  - 如果有其它线程写数据，则其它线程都不允许读、写操作
  - 写是独占的，写的优先级高

### 读写锁相关操作函数

- 读写锁的类型：`pthread_rwlock_t`
- 初始化读写锁：`int pthread_rwlock_init(pthread_rwlock_t *restrict rwlock, const pthread_rwlockattr_t *restrict attr);`

- 释放互斥量的资源：`int pthread_rwlock_destroy(pthread_rwlock_t *rwlock);`
- 读操作加锁：`int pthread_rwlock_rdlock(pthread_rwlock_t *rwlock);`
- 读操作尝试加锁：`int pthread_rwlock_tryrdlock(pthread_rwlock_t *rwlock);`
- 写操作加锁：`int pthread_rwlock_wrlock(pthread_rwlock_t *rwlock);`
- 写操作尝试加锁：`int pthread_rwlock_trywrlock(pthread_rwlock_t *rwlock);`
- 解锁：`int pthread_rwlock_unlock(pthread_rwlock_t *rwlock);`

### 实例：读写锁实现读线程数量大于写线程数量

- 8个线程操作同一个全局变量。3个线程不定时写这个全局变量，5个线程不定时的读这个全局变量

```c
#include <stdio.h>
#include <pthread.h>
#include <unistd.h>

int num = 0;
// 创建读写锁
pthread_rwlock_t rwlock;

void* workA(void* arg) {
    while (1) {
        // 加写锁
        pthread_rwlock_wrlock(&rwlock);
        num++;
        printf("++write, tid : %ld, num : %d\n", pthread_self(), num);
        // 解锁
        pthread_rwlock_unlock(&rwlock);
        usleep(100);
    }
    
    return NULL;
}

void* workB(void* arg) {
    while (1) {
        // 加读锁
        pthread_rwlock_rdlock(&rwlock);
        printf("===read, tid : %ld, num : %d\n", pthread_self(), num);
        // 解锁
        pthread_rwlock_unlock(&rwlock);
        usleep(100);
    }

    return NULL;
}

int main()
{
    // 初始化读写锁
    pthread_rwlock_init(&rwlock, NULL);
    // 创建8个线程，3个写线程，5个读线程
    pthread_t wtids[3], rtids[5];
    for (int i = 0; i < 3; i++) {
        pthread_create(&wtids[i], NULL, workA, NULL);
    }
    for (int i = 0; i < 5; i++) {
        pthread_create(&rtids[i], NULL, workB, NULL);
    }

    // 分离，回收资源
    for (int i = 0; i < 3; i++) {
        pthread_detach(wtids[i]);
    }
    for (int i = 0; i < 5; i++) {
        pthread_detach(rtids[i]);
    }
    // 回收读写锁
    pthread_rwlock_destroy(&rwlock);
    // 回收主线程
    pthread_exit(NULL);
}
```

![image-20211024164409909](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211024164409909.png)

## 生产者和消费者

### 关系模型

![image-20211024172038707](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211024172038707.png)

### 存在问题

1. 当容器满时，无法继续生产
2. 当容器空时，无法继续消费
3. 多个生产者或消费者时，会出现线程同步问题

### 实例：简易版多生产者多消费者（互斥量，==存在未解决问题==）

- 说明

  - 当在删除节点时，加锁时机不同可能会导致段错误
  - 产生错误版在虚拟机下无法产生`core`文件，以下截图来自服务器，是否使用`-g`参数都能生成`core`文件，==可能是线程函数自带能够生成？==
  - 虚拟机版在**释放互斥锁前添加while死循环**即可正常生成`core`文件，所以不产生`core`文件的原因可能是==线程还在运行而互斥锁提前被释放了==

- 正常执行版

  ```c
  #include <stdio.h>
  #include <pthread.h>
  #include <stdlib.h>
  #include <unistd.h>
  
  // 链表作为容器
  struct Node{
      int val;
      struct Node* next;
  };
  
  // 头结点
  struct Node* head = NULL;
  
  // 互斥量
  pthread_mutex_t mutex;
  
  // 头插法增加元素
  void* producter(void* arg) {
      while (1) {
          pthread_mutex_lock(&mutex);
          struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
          newNode->val = rand() % 1000;
          newNode->next = head;
          head = newNode;
          printf("add node, num : %d, tid : %ld\n", newNode->val, pthread_self());
          pthread_mutex_unlock(&mutex);
          usleep(100);
      }
      return NULL;
  }
  
  // 头删法减少元素
  void* consumer(void* arg) {
      while (1) {
          pthread_mutex_lock(&mutex);
          struct Node* tmp = head;
          // 当链表不为空时，才能删除
          if (head != NULL) {
              head = head->next;
              printf("del node, num : %d, tid : %ld\n", tmp->val, pthread_self());
              free(tmp);
              pthread_mutex_unlock(&mutex);
              usleep(100);
          } else {
              pthread_mutex_unlock(&mutex);
          }
      }
      return NULL;
  }
  
  int main()
  {
      // 初始化互斥锁
      pthread_mutex_init(&mutex, NULL);
      // 创建5个生产者线程，和5个消费者线程
      pthread_t products[5], consumes[5];
      for (int i = 0; i < 5; i++) {
          pthread_create(&products[i], NULL, producter, NULL);
          pthread_create(&consumes[i], NULL, consumer, NULL);
      }
  
      // 分离，回收线程资源
      for (int i = 0; i < 5; i++) {
          pthread_detach(products[i]);
          pthread_detach(consumes[i]);
      }
  
      // 回收互斥锁
      pthread_mutex_destroy(&mutex);
      pthread_exit(NULL);     // 回收主线程
      return 0;
  }
  ```

  ![image-20211024183604991](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211024183604991.png)

- 产生错误版（==原因还不清晰，后续再看==）

  ```c
  #include <stdio.h>
  #include <pthread.h>
  #include <stdlib.h>
  #include <unistd.h>
  
  // 链表作为容器
  struct Node{
      int val;
      struct Node* next;
  };
  
  // 头结点
  struct Node* head = NULL;
  
  // 互斥量
  pthread_mutex_t mutex;
  
  // 头插法增加元素
  void* producter(void* arg) {
      while (1) {
          pthread_mutex_lock(&mutex);
          struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
          newNode->val = rand() % 1000;
          newNode->next = head;
          head = newNode;
          printf("add node, num : %d, tid : %ld\n", newNode->val, pthread_self());
          pthread_mutex_unlock(&mutex);
          usleep(100);
      }
      return NULL;
  }
  
  // 头删法减少元素
  void* consumer(void* arg) {
      while (1) {
          // 如果只在头结点不为空的情况下使用互斥锁会产生段错误，暂未找到原因
          if (head != NULL) {
              pthread_mutex_lock(&mutex);
              struct Node* tmp = head;
              head = head->next;
              printf("del node, num : %d, tid : %ld\n", tmp->val, pthread_self());
              free(tmp);
              tmp = NULL;
              pthread_mutex_unlock(&mutex);
              usleep(100);
          }
      }
      return NULL;
  }
  
  int main()
  {
      // 初始化互斥锁
      pthread_mutex_init(&mutex, NULL);
      // 创建5个生产者线程，和5个消费者线程
      pthread_t products[5], consumes[5];
      for (int i = 0; i < 5; i++) {
          pthread_create(&products[i], NULL, producter, NULL);
          pthread_create(&consumes[i], NULL, consumer, NULL);
      }
  
      // 分离，回收线程资源
      for (int i = 0; i < 5; i++) {
          pthread_detach(products[i]);
          pthread_detach(consumes[i]);
      }
  	
      // 加while循环即可在虚拟机中生成core文件
      // while (1) {
      //     sleep(10);
      // }
      // 回收互斥锁
      pthread_mutex_destroy(&mutex);
      pthread_exit(NULL);     // 回收主线程
      return 0;
  }
  ```

  - 服务器

    ![image-20211024190914068](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211024190914068.png)

    ![image-20211024191441756](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211024191441756.png)

  - 虚拟机

    ![image-20211024192925831](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211024192925831.png)

    ![image-20211024192944475](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211024192944475.png)

## 条件变量

### 条件变量相关操作函数

- 当满足条件时，才执行，不是锁，配合互斥量使用
- 条件变量的类型：`pthread_cond_t`
- 初始化：`int pthread_cond_init(pthread_cond_t *restrict cond, const pthread_condattr_t *restrict attr);`
- 回收：`int pthread_cond_destroy(pthread_cond_t *cond);`
- 等待，调用了该函数，线程会阻塞：`int pthread_cond_wait(pthread_cond_t *restrict cond, pthread_mutex_t *restrict mutex);`
- 等待多长时间，调用了这个函数，线程会阻塞，直到指定的时间结束：`int pthread_cond_timedwait(pthread_cond_t *restrict cond,  pthread_mutex_t *restrict mutex, const struct timespec *restrict abstime);`
- 唤醒一个或者多个等待的线程：`int pthread_cond_signal(pthread_cond_t *cond);`
- 唤醒所有的等待的线程：`int pthread_cond_broadcast(pthread_cond_t *cond);`

### 实例：条件变量下的多生产者多消费者

- 当有生产者生产时，通知消费者消费，否则等待

```c
#include <stdio.h>
#include <pthread.h>
#include <stdlib.h>
#include <unistd.h>

// 链表作为容器
struct Node{
    int val;
    struct Node* next;
};

// 头结点
struct Node* head = NULL;

// 互斥量
pthread_mutex_t mutex;
// 条件变量
pthread_cond_t cond;

// 头插法增加元素
void* producter(void* arg) {
    while (1) {
        pthread_mutex_lock(&mutex);
        struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
        newNode->val = rand() % 1000;
        newNode->next = head;
        head = newNode;
        printf("add node, num : %d, tid : %ld\n", newNode->val, pthread_self());
        
        // 只要生产了一个，就通知消费者消费
        pthread_cond_signal(&cond);

        pthread_mutex_unlock(&mutex);
        usleep(100);
    }
    return NULL;
}

// 头删法减少元素
void* consumer(void* arg) {
    while (1) {
        pthread_mutex_lock(&mutex);
        struct Node* tmp = head;
        // 当链表不为空时，才能删除
        if (head != NULL) {
            head = head->next;
            printf("del node, num : %d, tid : %ld\n", tmp->val, pthread_self());
            free(tmp);
            pthread_mutex_unlock(&mutex);
            usleep(100);
        } else {
            // 没有数据，需要等待
            // 当这个函数调用阻塞的时候，会对互斥锁进行解锁，当不阻塞的，继续向下执行，会重新加锁。
            pthread_cond_wait(&cond, &mutex);
            pthread_mutex_unlock(&mutex);
        }
    }
    return NULL;
}

int main()
{
    // 初始化互斥锁
    pthread_mutex_init(&mutex, NULL);
    // 初始化条件变量
    pthread_cond_init(&cond, NULL);
    // 创建5个生产者线程，和5个消费者线程
    pthread_t products[5], consumes[5];
    for (int i = 0; i < 5; i++) {
        pthread_create(&products[i], NULL, producter, NULL);
        pthread_create(&consumes[i], NULL, consumer, NULL);
    }

    // 分离，回收线程资源
    for (int i = 0; i < 5; i++) {
        pthread_detach(products[i]);
        pthread_detach(consumes[i]);
    }

    while (1) {
        sleep(10);
    }
    // 回收条件变量
    pthread_cond_destroy(&cond);
    // 回收互斥锁
    pthread_mutex_destroy(&mutex);
    pthread_exit(NULL);     // 回收主线程
    return 0;
}
```

![image-20211024204722129](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211024204722129.png)

## 信号量

### 信号量相关操作函数

- 信号量的类型：`sem_t`
- `int sem_init(sem_t *sem, int pshared, unsigned int value);`
  - 功能：初始化信号量
  - 参数
    - `sem`：信号量变量的地址
    - `pshared`：0 用在线程间 ，非0 用在进程间
    - `value `：信号量中的值，代表容器大小
- `int sem_destroy(sem_t *sem);`
  - 功能：释放资源
- `int sem_wait(sem_t *sem);`
  - 功能：对信号量加锁，调用一次对信号量的值-1，如果值为0，就阻塞
- `int sem_trywait(sem_t *sem);`
- `int sem_timedwait(sem_t *sem, const struct timespec *abs_timeout);`
- `int sem_post(sem_t *sem);`
  - 功能：对信号量解锁，调用一次对信号量的值+1
- `int sem_getvalue(sem_t *sem, int *sval);`

### 实例：信号量下的多生产者多消费者

- 不需要单独判断`容器`为空的情况

```c
#include <stdio.h>
#include <pthread.h>
#include <stdlib.h>
#include <unistd.h>
#include <semaphore.h>

// 链表作为容器
struct Node{
    int val;
    struct Node* next;
};

// 头结点
struct Node* head = NULL;

// 互斥量
pthread_mutex_t mutex;
// 信号量
sem_t psem;
sem_t csem;

// 头插法增加元素
void* producter(void* arg) {
    while (1) {
        sem_wait(&psem);
        pthread_mutex_lock(&mutex);
        struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
        newNode->val = rand() % 1000;
        newNode->next = head;
        head = newNode;
        printf("add node, num : %d, tid : %ld\n", newNode->val, pthread_self());
        pthread_mutex_unlock(&mutex);
        sem_post(&csem);
    }
    return NULL;
}

// 头删法减少元素
void* consumer(void* arg) {
    while (1) {
        sem_wait(&csem);
        pthread_mutex_lock(&mutex);
        struct Node* tmp = head;
        // 当链表不为空时，才能删除
        if (head != NULL) {
            head = head->next;
            printf("del node, num : %d, tid : %ld\n", tmp->val, pthread_self());
            free(tmp);
            pthread_mutex_unlock(&mutex);
            sem_post(&psem);
        }
    }
    return NULL;
}

int main()
{
    // 初始化互斥锁
    pthread_mutex_init(&mutex, NULL);
    // 初始化信号量
    // 最多生产8个
    sem_init(&psem, 0, 8);
    // 初始没有东西可以消费
    sem_init(&csem, 0, 0);

    // 创建5个生产者线程，和5个消费者线程
    pthread_t products[5], consumes[5];
    for (int i = 0; i < 5; i++) {
        pthread_create(&products[i], NULL, producter, NULL);
        pthread_create(&consumes[i], NULL, consumer, NULL);
    }

    // 分离，回收线程资源
    for (int i = 0; i < 5; i++) {
        pthread_detach(products[i]);
        pthread_detach(consumes[i]);
    }

    while (1) {
        sleep(10);
    }
    // 回收信号量
    sem_destroy(&csem);
    sem_destroy(&psem);
    // 回收互斥锁
    pthread_mutex_destroy(&mutex);
    pthread_exit(NULL);     // 回收主线程
    return 0;
}
```

# 网络基础

## 网络结构模式

### C/S结构

#### 简介

- 服务器 - 客户机，即 `Client - Server（C/S）`结构。C/S 结构通常采取两层结构。服务器负责数据的管理，客户机负责完成与用户的交互任务。客户机是因特网上访问别人信息的机器，服务器则是提供信息供人访问的计算机。

- 客户机通过局域网与服务器相连，接受用户的请求，并通过网络向服务器提出请求，对数据库进行操作。服务器接受客户机的请求，将数据提交给客户机，客户机将数据进行计算并将结果呈现给用户。服务器还要提供完善安全保护及对数据完整性的处理等操作，并允许多个客户机同时访问服务器，这就对服务器的硬件处理数据能力提出了很高的要求。

- 在C/S结构中，应用程序分为两部分：服务器部分和客户机部分。服务器部分是多个用户共享的信息与功能，执行后台服务，如控制共享数据库的操作等；客户机部分为用户所专有，负责执行前台功能，在出错提示、在线帮助等方面都有强大的功能，并且可以在子程序间自由切换。

#### 优点

- 能充分发挥客户端 PC 的处理能力，很多工作可以在客户端处理后再提交给服务器，所以 C/S 结构客户端响应速度快
- 操作界面漂亮、形式多样，可以充分满足客户自身的个性化要求
- C/S 结构的管理信息系统具有较强的事务处理能力，能实现复杂的业务流程
- 安全性较高，C/S 一般面向相对固定的用户群，程序更加注重流程，它可以对权限进行多层次校验，提供了更安全的存取模式，对信息安全的控制能力很强，一般高度机密的信息系统采用 C/S 结构适宜

#### 缺点

- 客户端需要安装专用的客户端软件。首先涉及到安装的工作量，其次任何一台电脑出问题，如病毒、硬件损坏，都需要进行安装或维护。系统软件升级时，每一台客户机需要重新安装，其维护和升级成本非常高
- 对客户端的操作系统一般也会有限制，不能够跨平台

### B/S结构

#### 简介

- `B/S 结构（Browser/Server，浏览器/服务器模式）`，是 WEB 兴起后的一种网络结构模式，WEB浏览器是客户端最主要的应用软件。这种模式统一了客户端，将系统功能实现的核心部分集中到服务器上，简化了系统的开发、维护和使用。

- 客户机上只要安装一个浏览器，如 Firefox 或 InternetExplorer，服务器安装 SQL Server、Oracle、MySQL 等数据库。浏览器通过 Web Server 同数据库进行数据交互

#### 优点

- B/S 架构最大的优点是总体拥有成本低、维护方便、 分布性强、开发简单，可以不用安装任何专门的软件就能实现在任何地方进行操作，客户端零维护，系统的扩展非常容易，只要有一台能上网的电脑就能使用

#### 缺点

- 通信开销大、系统和数据的安全性较难保障
- 个性特点明显降低，无法实现具有个性化的功能要求
- 协议一般是固定的：http/https
- 客户端服务器端的交互是请求-响应模式，通常动态刷新页面，响应速度明显降低

## MAC地址

### 网卡

- `网卡`是一块被设计用来允许计算机在计算机网络上进行通讯的计算机硬件，又称为`网络适配器`或`网络接口卡NIC`。其拥有 MAC 地址，属于 `OSI` 模型的第 2 层，它使得用户可以通过电缆或无线相互连接。

- 每一个网卡都有一个被称为 MAC 地址的独一无二的 **48 位串行号**

- 网卡的主要功能：1.数据的封装与解封装、2.链路管理、3.数据编码与译码

![image-20211027130051135](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211027130051135.png)

### MAC地址

- `MAC 地址（Media Access Control Address）`，直译为媒体存取控制位址，也称为局域网地址、以太网地址、物理地址或硬件地址，它是一个用来确认网络设备位置的位址，由网络设备制造商生产时烧录在网卡中

- 在 `OSI` 模型中，**第三层网络层负责 IP 地址**，**第二层数据链路层则负责 MAC位址** 

- MAC 地址用于在网络中唯一标识一个网卡，一台设备若有一或多个网卡，则每个网卡都需要并会有一个唯一的 MAC 地址

## IP地址

### 简介

- `IP 协议`是为计算机网络相互连接进行通信而设计的协议。在因特网中，它是**能使连接到网上的所有计算机网络实现相互通信的一套规则，规定了计算机在因特网上进行通信时应当遵守的规则**。任何厂家生产的计算机系统，只要遵守 `IP 协议`就可以与因特网互连互通。各个厂家生产的网络系统和设备，如以太网、分组交换网等，它们相互之间不能互通，**不能互通的主要原因是因为它们所传送数据的基本单元（技术上称之为“帧”）的格式不同**

- `IP 协议`实际上是一套由软件程序组成的协议软件，它把各种不同“帧”统一转换成`IP 数据报`格式，这种转换是因特网的一个最重要的特点，使所有各种计算机都能在因特网上实现互通，即具有“开放性”的特点。正是因为有了 IP 协议，因特网才得以迅速发展成为世界上最大的、开放的计算机通信网络。因此，IP 协议也可以叫做“因特网协议”

- IP 地址（Internet Protocol Address）是指互联网协议地址，又译为网际协议地址。

- IP 地址是 IP协议提供的一种统一的地址格式，它为互联网上的每一个网络和每一台主机分配一个逻辑地址，以此来屏蔽物理地址的差异

- **IP 地址是一个 32 位的二进制数，通常被分割为 4 个“ 8 位二进制数”（也就是 4 个字节）**

- IP 地址通常用`点分十进制`表示成（`a.b.c.d`）的形式，其中，a,b,c,d都是 0~255 之间的十进制整数。例：点分十进IP地址（100.4.5.6），实际上是 32 位二进制数（01100100.00000100.00000101.00000110）

### **IP** 地址编址方式

- 最初设计互联网络时，**为了便于寻址以及层次化构造网络，每个 IP 地址包括两个标识码（ID）**，即`网络ID` 和`主机 ID`。同一个物理网络上的所有主机都使用同一个网络 ID，网络上的一个主机（包括网络上工作站，服务器和路由器等）有一个主机 ID 与其对应
- Internet 委员会定义了 5 种 IP 地址类型以适合不同容量的网络，即 A 类~ E 类

- 其中 A、B、C 3类（如下表格）由 InternetNIC 在全球范围内统一分配，D、E 类为特殊地址
  - A类最高位不能为1，所以是$2^7$
  - 主机数要减去2是因为去掉`x.x.x.0`和`x.x.x.255`这两个特殊的地址

| 类别 |    最大网络数     |        IP地址范围         |  单个网段最大主机数  |       私有IP地址范围        |
| :--: | :---------------: | :-----------------------: | :------------------: | :-------------------------: |
|  A   |   126($2^7-1$)    |  1.0.0.1~126.255.255.254  | 16777214($2^{24}-2$) |   10.0.0.0~10.255.255.255   |
|  B   |  16384($2^{14}$)  | 128.0.0.1~191.255.255.254 |  65534($2^{16}-2$)   |  172.16.0.0~172.31.255.255  |
|  C   | 2097152($2^{21}$) | 192.0.0.1~223.255.255.254 |     254($2^8-2$)     | 192.168.0.0~192.168.255.255 |

### A类IP地址

- 一个 A 类 IP 地址是指， 在 IP 地址的四段号码中，**第一段号码为网络号码，剩下的三段号码为本地计算机的号码**
- 如果用二进制表示 IP 地址的话，A 类 IP 地址就由 1 字节的网络地址和 3 字节主机地址组成，**网络地址的最高位必须是`0`**
- A 类 IP 地址中网络的标识长度为 8 位，主机标识的长度为 24 位，A类网络地址数量较少，有 126 个网络，每个网络可以容纳主机数达 1600 多万台

- A 类 IP 地址 地址范围 `1.0.0.1 - 126.255.255.254`（二进制表示为：`00000001 00000000 00000000 00000001 - 01111111 11111111 11111111 11111110`），最后一个是广播地址
- A 类 IP 地址的子网掩码为 255.0.0.0，每个网络支持的最大主机数为$2^{24}-2$

### B类IP地址

- 一个 B 类 IP 地址是指，在 IP 地址的四段号码中，**前两段号码为网络号码，剩下的两段号码为本地计算机的号码**
- 如果用二进制表示 IP 地址的话，B 类 IP 地址就由 2 字节的网络地址和 2 字节主机地址组成，**网络地址的最高位必须是`10`**
- B 类 IP地址中网络的标识长度为 16 位，主机标识的长度为 16 位，B 类网络地址适用于中等规模的网络，有16384 个网络，每个网络所能容纳的计算机数为 6 万多台
- B 类 IP 地址地址范围 `128.0.0.1 - 191.255.255.254` （二进制表示为：`10000000 00000000 00000000 00000001 - 10111111 11111111 11111111 11111110`）， 最后一个是广播地址
- B 类 IP 地址的子网掩码为 255.255.0.0，每个网络支持的最大主机数为$2^{16}-2$

### C类IP地址

- 一个 C 类 IP 地址是指，在 IP 地址的四段号码中，**前三段号码为网络号码，剩下的一段号码为本地计算机的号码**
- 如果用二进制表示 IP 地址的话，C 类 IP 地址就由 3 字节的网络地址和 1 字节主机地址组成，**网络地址的最高位必须是`110`**
- C 类 IP 地址中网络的标识长度为 24 位，主机标识的长度为 8 位，C 类网络地址数量较多，有 209 万余个网络。适用于小规模的局域网络，每个网络最多只能包含254台计算机
- C 类 IP 地址范围 `192.0.0.1-223.255.255.254` （二进制表示为: `11000000 00000000 00000000 00000001 - 11011111 11111111 11111111 11111110`），最后一个是广播地址
- C类IP地址的子网掩码为 255.255.255.0，每个网络支持的最大主机数为$2^8-2$

### D类IP地址

- D 类 IP 地址在历史上被叫做`多播地址（multicast address）`，即`组播地址`

- 在以太网中，多播地址命名了一组应该在这个网络中应用接收到一个分组的站点。多播地址的最高位必须是 `1110`，范围从`224.0.0.0 - 239.255.255.255`

- 划分

  |          IP地址           |                             说明                             |
  | :-----------------------: | :----------------------------------------------------------: |
  |   224.0.0.0~224.0.0.255   | 局部链接多播地址：是为路由协议和其它用途保留的地址，路由器并不转发属于此范围的IP包 |
  |   224.0.1.0~224.0.1.255   |  预留多播地址：公用组播地址，可用于Internet；使用前需要申请  |
  | 224.0.2.0~238.255.255.255 |  预留多播地址：用户可用组播地址(临时组地址)，全网范围内有效  |
  | 239.0.0.0~239.255.255.255 | 本地管理组播地址，可供组织内部使用，类似于私有 IP 地址，不能用于 Internet，可限制多播范围 |

### 特殊的网址

- 每一个字节都为 0 的地址（ `0.0.0.0` ）对应于**当前主机**
- IP 地址中的每一个字节都为 1 的 IP 地址（ `255.255.255.255` ）是**当前子网的广播地址**

- IP 地址中凡是以 `11110` 开头的 E 类 IP 地址都保留用于将来和实验使用
- IP地址中**不能以十进制 `127` 作为开头**，该类地址中数字 `127.0.0.1 ~ 127.255.255.255` 用于回路测试，如：`127.0.0.1`可以代表**本机IP地址**

### 子网掩码

- `子网掩码（subnet mask）`又叫网络掩码、地址掩码、子网络遮罩，它是一种用来指明一个 IP 地址的哪些位标识的是主机所在的子网，以及哪些位标识的是主机的位掩码
- 子网掩码不能单独存在，它必须结合 IP 地址一起使用
- 子网掩码只有一个作用，就是将某个 IP 地址划分成`网络地址`和`主机地址`两部分
- 子网掩码是一个 **32 位地址**，用于屏蔽 IP 地址的一部分以区别网络标识和主机标识，并说明该 IP地址是在局域网上，还是在广域网上

> 子网掩码是在 IPv4 地址资源紧缺的背景下为了解决 lP 地址分配而产生的虚拟 lP 技术，通过子网掩码将A、B、C 三类地址划分为若干子网，从而显著提高了 IP 地址的分配效率，有效解决了 IP 地址资源紧张的局面。另一方面，在企业内网中为了更好地管理网络，网管人员也利用子网掩码的作用，人为地将一个较大的企业内部网络划分为更多个小规模的子网，再利用三层交换机的路由功能实现子网互联，从而有效解决了网络广播风暴和网络病毒等诸多网络管理方面的问题
>
> 在大多数的网络教科书中，一般都将子网掩码的作用描述为通过逻辑运算，将 IP 地址划分为网络标识(Net.ID) 和主机标识(Host.ID)，只有网络标识相同的两台主机在无路由的情况下才能相互通信
>
> 根据 RFC950 定义，子网掩码是一个 32 位的 2 进制数， 其对应网络地址的所有位都置为 1，对应于主机地址的所有位置都为 0。子网掩码告知路由器，地址的哪一部分是网络地址，哪一部分是主机地址，使路由器正确判断任意 IP 地址是否是本网段的，从而正确地进行路由。网络上，数据从一个地方传到另外一个地方，是依靠 IP 寻址。从逻辑上来讲，是两步的。第一步，从 IP 中找到所属的网络，好比是去找这个人是哪个小区的；第二步，再从 IP 中找到主机在这个网络中的位置，好比是在小区里面找到这个人
>
> 子网掩码的设定必须遵循一定的规则。与二进制 IP 地址相同，子网掩码由 1 和 0 组成，且 1 和 0 分别连续。子网掩码的长度也是 32 位，左边是网络位，用二进制数字 “1” 表示，1 的数目等于网络位的长度；右边是主机位，用二进制数字 “0” 表示，0 的数目等于主机位的长度。这样做的目的是为了让掩码与 IP 地址做按位与运算时用 0 遮住原主机数，而不改变原网络段数字，而且很容易通过 0 的位数确定子网的主机数（ 2 的主机位数次方 - 2，因为主机号全为 1 时表示该网络广播地址，全为 0 时表示该网络的网络号，这是两个特殊地址）。通过子网掩码，才能表明一台主机所在的子网与其他子网的关系，使网络正常工作

## 端口

### 简介

- `端口` 是英文 port 的意译，可以认为是设备与外界通讯交流的出口
- 端口可分为`虚拟端口`和`物理端口`
  - 虚拟端口指计算机内部或交换机路由器内的端口，不可见，是特指TCP/IP协议中的端口，是逻辑意义上的端口，例如计算机中的 80 端口、21 端口、23 端口等
  - 物理端口又称为接口，是可见端口，计算机背板的 RJ45 网口，交换机路由器集线器等 RJ45 端口。电话使用 RJ11 插口也属于物理端口的范畴

- 端口是通过端口号来标记的，端口号只有整数，范围是从 0 到65535（$2^{16}$）

### 端口类型

#### 周知端口（Well Known Ports）

- 周知端口是众所周知的端口号，也叫知名端口、公认端口或者常用端口，**范围从 0 到 1023**，它们紧密绑定于一些特定的服务，例如 80 端口分配给 WWW 服务，21 端口分配给 FTP 服务，23 端口分配给Telnet服务等等

- 我们在 IE 的地址栏里输入一个网址的时候是不必指定端口号的，因为在默认情况下WWW 服务的端口是 “80”
- 网络服务是可以使用其他端口号的，如果不是默认的端口号则应该在地址栏上指定端口号，方法是**在地址后面加上冒号“:”（半角），再加上端口号**。比如使用 “8080” 作为 WWW服务的端口，则需要在地址栏里输入`网址:8080`
- 有些系统协议使用固定的端口号，它是不能被改变的，比如 139 端口专门用于 NetBIOS 与 TCP/IP 之间的通信，不能手动改变

#### 注册端口（Registered Ports）

- **端口号从 1024 到 49151**，它们松散地绑定于一些服务，分配给用户进程或应用程序，这些进程主要是用户选择安装的一些应用程序，而不是已经分配好了公认端口的常用程序。这些端口在没有被服务器资源占用的时候，可以用用户端动态选用为源端口

#### 动态端口 / 私有端口（Dynamic Ports / Private Ports）

- 动态端口的范围是从 **49152 到 65535**，之所以称为动态端口，是因为它一般不固定分配某种服务，而是动态分配

## 网络模型

### OSI七层参考模型

- 七层模型，亦称 `OSI（Open System Interconnection）参考模型`，即`开放式系统互联`。参考模型是国际标准化组织（ISO）制定的一个用于计算机或通信系统间互联的标准体系，一般称为 OSI 参考模型或七层模型
- 它是一个七层的、抽象的模型体，不仅包括一系列抽象的术语或概念，也包括具体的协议

![image-20211113162413475](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211113162413475.png)

- **物理层**：主要定义物理设备标准，如网线的接口类型、光纤的接口类型、各种传输介质的传输速率等。它的**主要作用是传输比特流（就是由1、0转化为电流强弱来进行传输，到达目的地后再转化为1、0，也就是我们常说的数模转换与模数转换）**。这一层的数据叫做**比特**
- **数据链路层**：建立**逻辑连接**、进行**硬件地址寻址**、**差错校验**等功能。定义了如何让格式化数据**以帧为单位**进行传输，以及如何让控制对物理介质的访问。**将比特组合成字节进而组合成帧，用MAC地址访问介质**
- **网络层**：进行**逻辑地址寻址**，在位于不同地理位置的网络中的两个主机系统之间提供连接和路径选择。Internet的发展使得从世界各站点访问信息的用户数大大增加，而网络层正是管理这种连接的层
- **传输层**：**定义了一些传输数据的协议和端口号**（ WWW 端口 80 等），如：**TCP**（传输控制协议，传输效率低，可靠性强，用于传输可靠性要求高，数据量大的数据），**UDP**（用户数据报协议，与TCP 特性恰恰相反，用于传输可靠性要求不高，数据量小的数据，如 QQ 聊天数据就是通过这种方式传输的）。 主要是将从下层接收的数据进行分段和传输，到达目的地址后再进行重组。常常把这一层数据叫做段
- **会话层**：通过传输层（端口号：传输端口与接收端口）建立数据传输的通路。主要在你的系统之间发起会话或者接受会话请求
- **表示层**：数据的表示、安全、压缩。主要是**进行对接收的数据进行解释、加密与解密、压缩与解压缩**等（也就是把计算机能够识别的东西转换成人能够能识别的东西（如图片、声音等）
- **应用层**：网络服务与最终用户的一个接口。这一层为用户的应用程序（例如电子邮件、文件传输和终端仿真）提供网络服务

### TCP/IP四层模型

#### 简介（==图可能有错误==）

- 现在 Internet（因特网）使用的主流协议族是 **TCP/IP 协议族**，它是一个分层、多协议的通信体系。TCP/IP协议族是一个四层协议系统，自底而上分别是`数据链路层`、`网络层`、`传输层`和`应用层`。每一层完成不同的功能，且通过若干协议来实现，上层协议使用下层协议提供的服务

![image-20211113170131416](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211113170131416.png)

#### OSI七层与TCP/IP四层

![image-20211113170257066](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211113170257066.png)

#### 四层介绍

- `应用层`：应用层是 TCP/IP 协议的第一层，是直接为应用进程提供服务的
  - 对不同种类的应用程序它们会根据自己的需要来使用应用层的不同协议，邮件传输应用使用了 SMTP 协议、万维网应用使用了 HTTP 协议、远程登录服务应用使用了有 TELNET 协议
  - 应用层还能加密、解密、格式化数据
  - 应用层可以建立或解除与其他节点的联系，这样可以充分节省网络资源
- `传输层`：作为 TCP/IP 协议的第二层，运输层在整个 TCP/IP 协议中起到了中流砥柱的作用。且在运输层中， TCP 和 UDP 也同样起到了中流砥柱的作用
- `网络层`：网络层在 TCP/IP 协议中的位于第三层。在 TCP/IP 协议中网络层可以进行网络连接的建立和终止以及 IP 地址的寻找等功能
- `网络接口层`：在 TCP/IP 协议中，网络接口层位于第四层。由于网络接口层兼并了物理层和数据链路层所以，网络接口层既是传输数据的物理媒介，也可以为网络层提供一条准确无误的线路

## 协议

### 简介

- 协议，网络协议的简称，网络协议是通信计算机双方必须共同遵从的一组约定。如怎么样建立连接、怎么样互相识别等。只有遵守这个约定，计算机之间才能相互通信交流。它的三要素是：`语法`、`语义`、`时序`

- 为了使数据在网络上从源到达目的，网络通信的参与方必须遵循相同的规则，这套规则称为`协议（protocol）`，它最终体现为在网络上传输的数据包的格式

- 协议往往分成几个层次进行定义，分层定义是为了使某一层协议的改变不影响其他层次的协议

### 常见协议

- 应用层协议
  - FTP协议（File Transfer Protocol 文件传输协议）
  - HTTP协议（Hyper Text Transfer Protocol 超文本传输协议）
  - NFS（Network File System 网络文件系统）
- 传输层协议
  - TCP协议（Transmission Control Protocol 传输控制协议）
  - UDP协议（User Datagram Protocol 用户数据报协议）
- 网络层协议
  - IP 协议（Internet Protocol 因特网互联协议）
  - ICMP 协议（Internet Control Message Protocol 因特网控制报文协议）
  - IGMP 协议（Internet Group Management Protocol 因特网组管理协议）。
- 网络接口层协议
  - ARP协议（Address Resolution Protocol 地址解析协议）
  - RARP协议（Reverse Address Resolution Protocol 反向地址解析协议）

### UDP协议

![image-20211113201253530](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211113201253530.png)

- 源端口号：发送方端口号
- 目的端口号：接收方端口号
- 长度：UDP用户数据报的长度，最小值是8（仅有首部）
- 校验和：检测UDP用户数据报在传输中是否有错，有错就丢弃

### TCP协议

![image-20211113201404105](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211113201404105.png)

- 源端口号：发送方端口号
- 目的端口号：接收方端口号
- 序号：本报文段的数据的第一个字节的序号
- 确认号：期望收到对方下一个报文段的第一个数据字节的序号
- 头部长度（数据偏移）：TCP 报文段的数据起始处距离 TCP 报文段的起始处有多远，即首部长度。==单位：32位，即以 4 字节为计算单位==？？？
- 保留：占 6 位，保留为今后使用，目前应置为 0
- 紧急 `URG` ：此位置 1 ，表明紧急指针字段有效，它告诉系统此报文段中有紧急数据，应尽快传送
- 确认 `ACK`：仅当 ACK=1 时确认号字段才有效，TCP 规定，在连接建立后所有传达的报文段都必须把 ACK 置1
- 推送 `PSH`：当两个应用进程进行交互式的通信时，有时在一端的应用进程希望在键入一个命令后立即就能够收到对方的响应。在这种情况下，TCP 就可以使用推送（push）操作，这时，发送方TCP 把 PSH 置 1，并立即创建一个报文段发送出去，接收方收到 PSH = 1 的报文段，就尽快地（即“推送”向前）交付给接收应用进程，而不再等到整个缓存都填满后再向上交付
- 复位 `RST`：用于复位相应的 TCP 连接
- 同步 `SYN`：仅在三次握手建立 TCP 连接时有效。当 SYN = 1 而 ACK = 0 时，表明这是一个连接请求报文段，对方若同意建立连接，则应在相应的报文段中使用 SYN = 1 和 ACK = 1。因此，SYN 置1 就表示这是一个连接请求或连接接受报文
- 终止 `FIN`：用来释放一个连接。当 FIN = 1 时，表明此报文段的发送方的数据已经发送完毕，并要求释放运输连接
- 窗口：指发送本报文段的一方的接收窗口（而不是自己的发送窗口）
- 校验和：校验和字段检验的范围包括首部和数据两部分，在计算校验和时需要加上 12 字节的伪头部
- 紧急指针：仅在 URG = 1 时才有意义，它指出本报文段中的紧急数据的字节数（紧急数据结束后就是普通数据），即指出了紧急数据的末尾在报文中的位置，注意：即使窗口为零时也可发送紧急数据
- 选项：长度可变，最长可达 40 字节，当没有使用选项时，TCP 首部长度是 20 字节

### IP协议

![image-20211113205020978](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211113205020978.png)

- 版本号：IP 协议的版本。通信双方使用过的 IP 协议的版本必须一致，目前最广泛使用的 IP 协议版本号为 4（即IPv4)
- 头部长度：单位是 32 位（4 字节）
- 服务类型：一般不适用，取值为 0
- 总长度：指首部加上数据的总长度，单位为字节
- 标识（identification）：IP 软件在存储器中维持一个计数器，每产生一个数据报，计数器就加 1，并将此值赋给标识字段
- 标志（flag）：目前只有两位有意义
  - 标志字段中的最低位记为 MF。MF = 1 即表示后面“还有分片”的数据报。MF = 0 表示这已是若干数据报片中的最后一个
  - 标志字段中间的一位记为 DF，意思是“不能分片”，只有当 DF = 0 时才允许分片
- 片偏移：指出较长的分组在分片后，某片在源分组中的相对位置，也就是说，相对于用户数据段的起点，该片从何处开始。片偏移以 8 字节为偏移单位
- 生存时间：TTL，表明是数据报在网络中的寿命，即为`跳数限制`，由发出数据报的源点设置这个字段。路由器在转发数据之前就把 TTL 值减一，当 TTL 值减为零时，就丢弃这个数据报，常见为**64和128**
- 协议：指出此数据报携带的数据时使用何种协议，以便使目的主机的 IP 层知道应将数据部分上交给哪个处理过程，常用的 ICMP(1)，IGMP(2)，TCP(6)，UDP(17)，IPv6（41）
- 首部校验和：只校验数据报的首部，不包括数据部分
- 源地址：发送方 IP 地址
- 目的地址：接收方 IP 地址

### 以太网帧协议

![image-20211116222906658](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211116222906658.png)

- 类型
  - 0x800表示 IP
  - 0x806表示 ARP
  - 0x835表示 RARP

### ARP协议

![image-20211116222942537](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211116222942537.png)

- 硬件类型：1 表示 MAC 地址
- 协议类型：0x800 表示 IP 地址
- 硬件地址长度：6
- 协议地址长度：4 
- 操作
  - 1 表示 ARP 请求
  - 2 表示 ARP 应答
  - 3 表示 RARP 请求
  - 4 表示 RARP 应答

## 网络通信流程

### 封装与分用

- **发送端**通过TCP/IP中每一层时需要将消息`封装`对应信息，然后**接收端**通过过TCP/IP中每一层时需要将消息`分用（解封装）`对应信息

  ![image-20211117123435389](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211117123435389.png)

- 封装

  > 上层协议是如何使用下层协议提供的服务的呢？其实这是通过封装（encapsulation）实现的。应用程序数据在发送到物理网络上之前，将沿着协议栈从上往下依次传递。每层协议都将在上层数据的基础上加上自己的头部信息（有时还包括尾部信息），以实现该层的功能，这个过程就称为封装

  ![image-20211117123350798](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211117123350798.png)

- 分用

  > 当帧到达目的主机时，将沿着协议栈自底向上依次传递。各层协议依次处理帧中本层负责的头部数据，以获取所需的信息，并最终将处理后的帧交给目标应用程序。这个过程称为分用（demultiplexing）。分用是依靠头部信息中的类型字段实现的

  ![image-20211117123420044](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211117123420044.png)

### 实例：QQ发送消息简易流程

- 存在的问题：在数据链路层封装以太网帧时，怎么知道目标机器的MAC地址？=>通过`arp协议`

![image-20211117123812988](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211117123812988.png)

### ARP协议

- arp协议通过IP地址找到MAC地址，通过**广播arp请求找到**，局域网内根据信息解析得到`arp应答`
- rarp协议通过MAC地址找IP地址

![image-20211117125629434](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211117125629434.png)

# socket通信

## socket介绍

- `socket（套接字）`，就是对网络中**不同主机**上的应用进程之间进行**双向通信**的端点的抽象

  > 一个套接字就是网络上进程通信的一端，提供了应用层进程利用网络协议交换数据的机制。从所处的地位来讲，套接字上联应用进程，下联网络协议栈，是应用程序通过网络协议进行通信的接口，是应用程序与网络协议根进行交互的接口

- socket 可以看成是两个网络应用程序进行通信时，各自通信连接中的端点，这是一个逻辑上的概念

  > 它是网络环境中进程间通信的 API，也是可以被命名和寻址的通信端点，使用中的每一个套接字都有其类型和一个与之相连进程。通信时其中一个网络应用程序将要传输的一段信息写入它所在主机的 socket 中，该 socket 通过与网络接口卡（NIC）相连的传输介质将这段信息送到另外一台主机的 socket 中，使对方能够接收到这段信息。socket 是由 IP 地址和端口结合的，提供向应用层进程传送数据包的机制

- socket 本身有“插座”的意思，在 Linux 环境下，用于表示进程间网络通信的特殊文件类型。**本质为内核借助缓冲区形成的伪文件**

  > 既然是文件，那么理所当然的，我们可以使用文件描述符引用套接字。与管道类似的，Linux 系统将其封装成文件的目的是为了统一接口，使得读写套接字和读写文件的操作一致。区别是管道主要应用于本地进程间通信，而套接字多应用于网络进程间数据的传递

- 套接字通信分两部分

  - 服务器端：被动接受连接，一般不会主动发起连接 
  - 客户端：主动向服务器发起连接

- socket是一套通信的接口，Linux 和 Windows 都有，但是有一些细微的差别

![image-20211117194644130](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211117194644130.png)

## 字节序

### 简介

- `字节序`，顾名思义字节的顺序，就是**大于一个字节类型的数据在内存中的存放顺序**(一个字节的数据当然就无需谈顺序的问题了)
- 字节序分为`大端字节序（Big-Endian）` 和`小端字节序（Little-Endian）`
  - **大端字节序**：指一个整数的最高位字节（23 ~ 31 bit）存储在内存的低地址处，低位字节（0 ~ 7 bit）存储在内存的高地址处
  - **小端字节序**：指整数的高位字节存储在内存的高地址处，而低位字节则存储在内存的低地址处

> 现代 CPU 的累加器一次都能装载（至少）4 字节（这里考虑 32 位机），即一个整数。那么这 4字节在内存中排列的顺序将影响它被累加器装载成的整数的值，这就是字节序问题
>
> 在各种计算机体系结构中，对于字节、字等的存储机制有所不同，因而引发了计算机通信领域中一个很重要的问题，即通信双方交流的信息单元（比特、字节、字、双字等等）应该以什么样的顺序进行传送。如果不达成一致的规则，通信双方将无法进行正确的编码/译码从而导致通信失败

### 字节序举例

- 大端字节序

  ![image-20211117200601434](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211117200601434.png)

- 小端字节序

  ![image-20211117200550220](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211117200550220.png)

### 查看机器字节序

```c
#include <stdio.h>

int main()
{
    union{
        short value;                // 两字节
        char bytes[sizeof(short)];  // 两字节
    }test;
    
    test.value = 0x0102;
    if (test.bytes[0] == 1 && test.bytes[1] == 2) {
        printf("大端机器\n");
    } else if (test.bytes[0] == 2 && test.bytes[1] == 1) {
        printf("小端机器\n");
    } else {
        printf("未知\n");
    }

    return 0;
}
```

![image-20211117201645270](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211117201645270.png)

### 字节序转换函数

- 当格式化的数据在两台使用不同字节序的主机之间直接传递时，接收端必然错误的解释之。解决问题的方法是：**发送端总是把要发送的数据转换成大端字节序数据后再发送**，而接收端知道对方传送过来的数据总是采用大端字节序，所以接收端可以根据自身采用的字节序决定是否对接收到的数据进行转换（小端机转换，大端机不转换）

- **网络字节顺序**是 TCP/IP 中规定好的一种数据表示格式，它与具体的 CPU 类型、操作系统等无关，从而可以保证数据在不同主机之间传输时能够被正确解释，网络字节顺序采用大端排序方式

- BSD Socket提供了封装好的转换接口，方便程序员使用

  - 从主机字节序到网络字节序的转换函数：`htons`、`htonl`
  - 从网络字节序到主机字节序的转换函数：`ntohs`、`ntohl`

  ```c
  h  - host 主机，主机字节序 
  to - 转换成什么 
  n  - network 网络字节序 
  s  - short unsigned short 
  l  - long unsigned int
      
  #include <arpa/inet.h> 
  // 转换端口 
  uint16_t htons(uint16_t hostshort); // 主机字节序 => 网络字节序 
  uint16_t ntohs(uint16_t netshort); // 主机字节序 => 网络字节序 
  // 转IP 
  uint32_t htonl(uint32_t hostlong); // 主机字节序 => 网络字节序 
  uint32_t ntohl(uint32_t netlong); // 主机字节序 => 网络字节序
  ```

- 实例：模拟主机与网络IP及端口转换（本机为小端机器）

  ```c
  #include <stdio.h>
  #include <arpa/inet.h>
  
  int main()
  {
      // 主机字节序转网络字节序
      // IP转换
      char ip1[4] = {192, 168, 1, 1};
      int num1 = *(int*)ip1;
      int convet1 = htonl(num1);
      unsigned char *p1 = (char*)&convet1;
      for (int i = 0; i < 4; i++) {
          printf("%d ", *(p1 + i));
      }
      printf("\n");
  
      // 端口转换
      unsigned short port1 = 0x0102;
      unsigned short conv_port1 = htons(port1);
      printf("port1: %x\n", port1);
      printf("conv_port1: %x\n", conv_port1);
      printf("====================\n");
      // 网络字节序转主机字节序
      // IP转换
      char ip2[4] = {2, 1, 168, 192};
      int num2 = *(int*)ip2;
      int convet2 = ntohl(num2);
      unsigned char *p2 = (char*)&convet2;
      for (int i = 0; i < 4; i++) {
          printf("%d ", *(p2 + i));
      }
      printf("\n");
  
      // 端口转换
      unsigned short port2 = 0x0201;
      unsigned short conv_port2 = htons(port2);
      printf("port2: %x\n", port2);
      printf("conv_port2: %x\n", conv_port2);
      return 0;
  }
  ```

  ![image-20211117210302318](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211117210302318.png)

## socket地址

### 简介

- socket地址其实是一个`结构体`，**封装端口号和IP等信息**
- 后面的socket相关的api中需要使用到这个 socket地址

### **通用** **socket** 地址

- socket 网络编程接口中表示 socket 地址的是结构体 `sockaddr`，其定义如下

  ```c
  #include <bits/socket.h> 
  struct sockaddr { 
      sa_family_t sa_family; 
      char sa_data[14]; 
  };
  
  typedef unsigned short int sa_family_t;
  ```

- `sa_family`

  - `sa_family` 成员是地址族类型（`sa_family_t`）的变量
  - `地址族类型`通常与`协议族类型`对应
  - 宏 `PF_*` 和 `AF_*` 都定义在 `bits/socket.h` 头文件中，且后者与前者有完全相同的值，所以二者通常混用

  |  协议族  |  地址族  |       描述       |
  | :------: | :------: | :--------------: |
  | PF_UNIX  | AF_UNIX  | UNIX本地域协议族 |
  | PF_INET  | AF_INET  |  TCP/IPv4协议族  |
  | PF_INET6 | AF_INET6 |  TCP/IPv6协议族  |

- `sa_data`

  - `sa_data` 成员用于存放 socket 地址值，不同的协议族的地址值具有不同的含义和长度

  |  协议族  |                       地址值含义和长度                       |
  | :------: | :----------------------------------------------------------: |
  | PF_UNIX  |               文件的路径名，长度可达到108字节                |
  | PF_INET  |         16 bit 端口号和 32 bit IPv4 地址，共 6 字节          |
  | PF_INET6 | 16 bit 端口号，32 bit 流标识，128 bit IPv6 地址，32 bit 范围 ID，共 26 字节 |

  - 由上表可知，14 字节的 sa_data 根本无法容纳多数协议族的地址值。因此，Linux 定义了下面这个新的通用的 socket 地址结构体，这个结构体不仅提供了足够大的空间用于存放地址值，而且是内存对齐的

    ```c
    #include <bits/socket.h> 
    struct sockaddr_storage { 
        sa_family_t sa_family; 
        unsigned long int __ss_align; 
        char __ss_padding[ 128 - sizeof(__ss_align) ]; 
    };
    
    typedef unsigned short int sa_family_t;
    ```

### 专用socket地址

#### 简介

- 很多网络编程函数诞生早于 IPv4 协议，那时候都使用的是 `struct sockaddr` 结构体，为了向前兼容，现在`sockaddr` 退化成了（void *）的作用，传递一个地址给函数，至于这个函数是 `sockaddr_in` 还是`sockaddr_in6`，由地址族确定，然后函数内部再强制类型转化为所需的地址类型

- 不同socket地址对比图

  ![image-20211117213426327](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211117213426327.png)

- 所有专用 socket 地址（以及 sockaddr_storage）类型的变量在实际使用时都需要转化为通用 socket 地址类型 sockaddr（强制转化即可），因为所有 socket 编程接口使用的地址参数类型都是 sockaddr

#### UNIX 本地域协议族

```c
#include <sys/un.h> 
struct sockaddr_un { 
    sa_family_t sin_family; 
    char sun_path[108]; 
};
```

#### TCP/IP协议族

```c
// IPV4
#include <netinet/in.h> 
struct sockaddr_in { 
    sa_family_t sin_family; /* __SOCKADDR_COMMON(sin_) */ 
    in_port_t sin_port; /* Port number. */ 
    struct in_addr sin_addr; /* Internet address. */ 
    /* Pad to size of `struct sockaddr'. */ 
    unsigned char sin_zero[sizeof (struct sockaddr) - __SOCKADDR_COMMON_SIZE - sizeof (in_port_t) - sizeof (struct in_addr)]; 
};

struct in_addr { 
    in_addr_t s_addr; 
};

// IPV6
struct sockaddr_in6 { 
    sa_family_t sin6_family; 
    in_port_t sin6_port; /* Transport layer port # */ 
    uint32_t sin6_flowinfo; /* IPv6 flow information */ 
    struct in6_addr sin6_addr; /* IPv6 address */ 
    uint32_t sin6_scope_id; /* IPv6 scope-id */ 
};

// 相关定义
typedef unsigned short uint16_t; 
typedef unsigned int uint32_t; 
typedef uint16_t in_port_t; 
typedef uint32_t in_addr_t; 
#define __SOCKADDR_COMMON_SIZE (sizeof (unsigned short int))
```

## IP地址转换

- `点分十进制`IP地址与`网络字节序整数`IP地址相互转换

  > 通常，人们习惯用可读性好的字符串来表示 IP 地址，比如用点分十进制字符串表示 IPv4 地址，以及用十六进制字符串表示 IPv6 地址。但编程中我们需要先把它们转化为整数（二进制数）方能使用。而记录日志时则相反，我们要把整数表示的 IP 地址转化为可读的字符串

- 旧版（已弃用）：只适用于IPV4间的转换

  ```c
  #include <arpa/inet.h> 
  in_addr_t inet_addr(const char *cp); 
  int inet_aton(const char *cp, struct in_addr *inp); 
  char *inet_ntoa(struct in_addr in);
  ```

- 新版：同时适用于IPV4和IPV6

  - 字母含义
    - `p`：点分十进制的IP字符串
    - `n`：表示network，网络字节序的整数 
  - `int inet_pton(int af, const char *src, void *dst); `
    - 使用`man inet_pton`查看帮助
    - 功能：将点分十进制的IP地址字符串，转换成网络字节序的整数
    - 参数
      - `af`：地址族
        - IPV4：`AF_INET`
        - IPV6：`AF_INET6(IPV6)` 
      - `src`：需要转换的点分十进制的IP字符串 
      - `dst`：转换后的结果保存在这个里面 
    - 返回值
      - 1：成功
      - 0：源IP地址有误
      - -1：地址族包含不可用的地址协议
  - `const char *inet_ntop(int af, const void *src, char *dst, socklen_t size);`
    - 使用`man inet_ntop`查看帮助
    - 功能：将网络字节序的整数，转换成点分十进制的IP地址字符串
    - 参数
      - `af`：地址族
        - IPV4：`AF_INET`
        - IPV6：`AF_INET6(IPV6)` 
      - `src`：要转换的ip的整数的地址 
      - `dst`：转换成IP地址字符串保存的地方 
      - `size`：第三个参数的大小（数组的大小） 
    - 返回值：返回转换后的数据的地址（字符串），和 dst 是一样的 

  ```c
  #include <stdio.h>
  #include <arpa/inet.h>
  
  int main() {
  
      // 创建一个ip字符串,点分十进制的IP地址字符串
      char buf[] = "192.168.1.4";
      unsigned int num = 0;
  
      // 将点分十进制的IP字符串转换成网络字节序的整数
      inet_pton(AF_INET, buf, &num);
      unsigned char * p = (unsigned char *)&num;
      printf("%d %d %d %d\n", *p, *(p+1), *(p+2), *(p+3));
  
  
      // 将网络字节序的IP整数转换成点分十进制的IP字符串
      char ip[16] = "";
      const char * str =  inet_ntop(AF_INET, &num, ip, 16);
      printf("str : %s\n", str);
      printf("ip : %s\n", ip);
  
      return 0;
  }
  ```

  ![image-20211117221901175](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211117221901175.png)

## TCP与UDP区别

### 简介

- `UDP`：用户数据报协议，面向无连接，可以单播，多播，广播， 面向数据报，不可靠 
- `TCP`：传输控制协议，面向连接的，可靠的，基于字节流，仅支持单播传输 

### 对比

|                |              UDP               |            TCP             |
| :------------: | :----------------------------: | :------------------------: |
|  是否创建连接  |             无连接             |          面向连接          |
|    是否可靠    |             不可靠             |           可靠的           |
| 连接的对象个数 | 一对一、一对多、多对一、多对多 |        仅支持一对一        |
|   传输的方式   |           面向数据报           |         面向字节流         |
|    首部开销    |            8个字节             |        最少20个字节        |
|    适用场景    |   实时应用（视频会议，直播）   | 可靠性高的应用（文件传输） |

## TCP通信流程

### 流程图

![image-20211121104748003](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211121104748003.png)

### 服务器端（被动接收连接）

1. 创建一个用于监听的套接字
   - 监听：监听有客户端的连接
   - 套接字：这个套接字其实就是一个文件描述符 
2. 将这个`监听文件描述符`和**本地的IP和端口绑定**（IP和端口就是服务器的地址信息）
   - 客户端连接服务器的时候使用的就是这个IP和端口
3. 设置监听，`监听的fd`开始工作 
4. 阻塞等待，当有客户端发起连接，解除阻塞，接受客户端的连接，会得到一个`和客户端通信的套接字(fd)`
5. 通信
   - 接收数据
   - 发送数据
6. 通信结束，断开连接

### 客户端

1. 创建一个用于通信的套接字(fd)
2. 连接服务器，需要指定连接的服务器的 IP 和 端口 
3. 连接成功了，客户端可以直接和服务器通信 
   - 接收数据
   - 发送数据
4. 通信结束，断开连接

## 套接字函数

- 包含在下列头文件中

  ```c
  #include <sys/types.h> 
  #include <sys/socket.h> 
  #include <arpa/inet.h> // 包含了这个头文件，上面两个就可以省略(因为已经包含上面两个)
  ```

- 函数一览

  ```c
  int socket(int domain, int type, int protocol);
  int bind(int sockfd, const struct sockaddr *addr, socklen_t addrlen);
  int listen(int sockfd, int backlog);
  int accept(int sockfd, struct sockaddr *addr, socklen_t *addrlen);
  int connect(int sockfd, const struct sockaddr *addr, socklen_t addrlen);
  ```

- `int socket(int domain, int type, int protocol);`

  - 功能：创建一个套接字
  - 参数：
    - `domain`：协议族(常用如下)
      - `AF_INET` ：`ipv4`
      - `AF_INET`6 ：`ipv6`
      - `AF_UNIX`, `AF_LOCAL`：本地套接字通信（进程间通信） 
    - `type`：通信过程中使用的协议类型 
      - `SOCK_STREAM` : 流式协议
      - `SOCK_DGRAM` : 报式协议 
    - `protocol`：具体的一个协议，一般写0，用于指定type参数的默认协议类型
      - `SOCK_STREAM` : 流式协议默认使用 TCP 
      - `SOCK_DGRAM` : 报式协议默认使用 UDP 
  - 返回值
    - 成功：返回文件描述符，操作的就是内核缓冲区
    - 失败：-1 

- `int bind(int sockfd, const struct sockaddr *addr, socklen_t addrlen); `

  - 功能：绑定，将fd 和本地的IP和端口进行绑定 
  - 参数：
    - `sockfd`：通过socket函数得到的文件描述符 
    - `addr`：需要绑定的socket地址，这个地址封装了**本地的ip和端口号的信息**
    - `addrlen`：第二个参数结构体占的内存大小 
  - 返回值：成功：0，失败：-1

- `int listen(int sockfd, int backlog);`

  - 功能：监听这个socket上的连接

  - 参数：

    - `sockfd`：通过socket()函数得到的文件描述符

    - `backlog`：未连接的和已经连接的和的最大值，可用`cat /proc/sys/net/core/somaxconn`查看Linux设置值，==一般指定5就可以（视频说的，是否正确待验证）==

      ![image-20211121111847282](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211121111847282.png)

  - 返回值：成功：0，失败：-1

- `int accept(int sockfd, struct sockaddr *addr, socklen_t *addrlen); `

  - 功能：接收客户端连接，默认是一个阻塞的函数，阻塞等待客户端连接
  - 参数：
    - `sockfd` : 用于监听的文件描述符 
    - `addr` : 传出参数，记录了连接成功后**客户端的地址信息**（ip，port） 
    - `addrlen` : 指定第二个参数的对应的内存大小
  - 返回值：
    - 成功：用于通信的文件描述符 
    - 失败：-1

- `int connect(int sockfd, const struct sockaddr *addr, socklen_t addrlen);`

  - 功能： 客户端连接服务器 
  - 参数：
    - `sockfd` : 用于**通信的文件描述符 **
    - `addr` : 客户端要连接的服务器的地址信息
    - `addrlen` : 指定第二个参数的对应的内存大小
  - 返回值：成功 0， 失败 -1 

- 其他读写函数：

  ```c
  ssize_t write(int fd, const void *buf, size_t count); // 写数据 
  ssize_t read(int fd, void *buf, size_t count); // 读数据
  ```

## 实例：TCP通信

### 服务器端

```c
#include <stdio.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

#define SERVERIP "127.0.0.1"
#define PORT 6789

int main()
{
    // 1. 创建socket（用于监听的套接字）
    int listenfd = socket(AF_INET, SOCK_STREAM, 0);
    if (listenfd == -1) {
        perror("socket");
        exit(-1);
    }

    // 2. 绑定
    struct sockaddr_in server_addr;
    server_addr.sin_family = PF_INET;
    // 点分十进制转换为网络字节序
    inet_pton(AF_INET, SERVERIP, &server_addr.sin_addr.s_addr);
    // 服务端也可以绑定0.0.0.0即任意地址
    // server_addr.sin_addr.s_addr = INADDR_ANY;
    server_addr.sin_port = htons(PORT);
    int ret = bind(listenfd, (struct sockaddr*)&server_addr, sizeof(server_addr));
    if (ret == -1) {
        perror("bind");
        exit(-1);
    }

    // 3. 监听
    ret = listen(listenfd, 8);
        if (ret == -1) {
        perror("listen");
        exit(-1);
    }

    // 4. 接收客户端连接
    struct sockaddr_in client_addr;
    socklen_t client_addr_len = sizeof(client_addr);
    int connfd = accept(listenfd, (struct sockaddr*)&client_addr, &client_addr_len);
    if (connfd == -1) {
        perror("accept");
        exit(-1);
    }
    // 输出客户端信息，IP组成至少16个字符（包含结束符）
    char client_ip[16] = {0};
    inet_ntop(AF_INET, &client_addr.sin_addr.s_addr, client_ip, sizeof(client_ip));
    unsigned short client_port = ntohs(client_addr.sin_port);
    printf("ip:%s, port:%d\n", client_ip, client_port);


    // 5. 开始通信
    // 服务端先接收客户端信息，再向客户端发送数据
    // 接收数据
    char recv_buf[1024] = {0};
    while (1) {
        ret = read(connfd, recv_buf, sizeof(recv_buf));
        if (ret == -1) {
            perror("read");
            exit(-1);
        } else if (ret > 0) {
            printf("recv client data : %s\n", recv_buf);
        } else {
            // 表示客户端断开连接
            printf("client closed...\n");
            break;
        }
        // 发送数据
        char *send_buf = "hello, i am server";
        // 粗心写成sizeof，那么就会导致遇到空格终止
        write(connfd, send_buf, strlen(send_buf));
    }

    // 关闭文件描述符
    close(connfd);
    close(listenfd);
    return 0;
}
```

### 客户端

```c
#include <stdio.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

#define SERVERIP "127.0.0.1"
#define PORT 6789

int main()
{
    // 1. 创建socket（用于通信的套接字）
    int connfd = socket(AF_INET, SOCK_STREAM, 0);
    if (connfd == -1) {
        perror("socket");
        exit(-1);
    }
    // 2. 连接服务器端
    struct sockaddr_in server_addr;
    server_addr.sin_family = PF_INET;
    inet_pton(AF_INET, SERVERIP, &server_addr.sin_addr.s_addr);
    server_addr.sin_port = htons(PORT);
    int ret = connect(connfd, (struct sockaddr*)&server_addr, sizeof(server_addr));
    if (ret == -1) {
        perror("connect");
        exit(-1);
    }
    // 3. 通信
            char recv_buf[1024] = {0};
    while (1) {
        // 发送数据
        char *send_buf = "client message";
        // 粗心写成sizeof，那么就会导致遇到空格终止
        write(connfd, send_buf, strlen(send_buf));
        sleep(1);
        // 接收数据
        ret = read(connfd, recv_buf, sizeof(recv_buf));
        if (ret == -1) {
            perror("read");
            exit(-1);
        } else if (ret > 0) {
            printf("recv client data : %s\n", recv_buf);
        } else {
            // 表示服务端断开连接
            printf("server closed...\n");
            break;
        }
    }
    // 关闭连接
    close(connfd);
    return 0;
}
```

### 通信效果

![image-20211121133101783](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211121133101783.png)

## TCP三次握手——建立连接

- 此节需要结合`网络基础->协议->TCP协议`一起看

### 简易图示

![image-20211121144550714](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211121144550714.png)

### 握手流程

![image-20211121145128707](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211121145128707.png)

#### 第一次握手

- 客户端将SYN标志位置为1 
- 生成一个随机的32位的序号seq=J ， 这个序号后边是可以携带数据（数据的大小）

#### 第二次握手

- 服务器端接收客户端的连接： ACK=1
- 服务器会回发一个确认序号： ack=客户端的序号 + 数据长度 + SYN/FIN(按一个字节算)
- 服务器端会向客户端发起连接请求： SYN=1 
- 服务器会生成一个随机序号：seq = K 

#### 第三次握手

- 客户端应答服务器的连接请求：ACK=1
- 客户端回复收到了服务器端的数据：ack=服务端的序号 + 数据长度 + SYN/FIN(按一个字节算)

### 示例：携带数据通信流程

- 括号内数字代表携带数据大小

![image-20211121151016137](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211121151016137.png)

## TCP滑动窗口——流量控制

### 简介

- `滑动窗口`是 TCP 中实现诸如 ACK 确认、流量控制、拥塞控制的承载结构
- TCP 中采用滑动窗口来进行传输控制，滑动窗口的大小意味着**接收方还有多大的缓冲区可以用于接收数据**。**发送方可以通过滑动窗口的大小来确定应该发送多少字节的数据**。当滑动窗口为 0时，发送方一般不能再发送数据报

> 滑动窗口（Sliding window）是一种流量控制技术。早期的网络通信中，通信双方不会考虑网络的拥挤情况直接发送数据。由于大家不知道网络拥塞状况，同时发送数据，导致中间节点阻塞掉包，谁也发不了数据，所以就有了滑动窗口机制来解决此问题
>
> 滑动窗口协议是用来改善吞吐量的一种技术，即容许发送方在接收任何应答之前传送附加的包。接收方告诉发送方在某一时刻能送多少包（称窗口尺寸）

### 滑动窗口与缓冲区

- **滑动窗口可以理解为缓冲区的大小**

- 滑动窗口的大小会随着发送数据和接收数据而变化，通信的双方都有发送缓冲区和接收数据的缓冲区

- 图示说明：单向发送数据（发送端->接收端）

  ![image-20211121153104245](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211121153104245.png)

  - 发送方的缓冲区
    - 白色格子：空闲的空间
    - 灰色格子：数据已经被发送出去了，但是还没有被接收
    - 紫色格子：还没有发送出去的数据 
  - 接收方的缓冲区
    - 白色格子：空闲的空间 
    - 紫色格子：已经接收到的数据

## TCP四次挥手——断开连接

### 简易图示

![image-20211121154555977](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211121154555977.png)

### 挥手流程

- 四次挥手发生在断开连接的时候，在程序中当调用了`close()`会使用TCP协议进行四次挥手
- 客户端和服务器端都可以主动发起断开连接，谁先调用`close()`谁就是发起方
- 因为在TCP连接的时候，采用三次握手建立的的连接是双向的，在断开的时候需要双向断开

![image-20211121154857445](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211121154857445.png)

## 实例：完整的TCP通信

![image-20211121155042845](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211121155042845.png)

### 注解

- 图中`MSS`表示Maximum Segment Size(一条数据的最大的数据量) 

- `win`表示滑动窗口大小

- 图中部分`ACK`应为确认号`ack`，而非标志位`ACK`

### 流程说明

1. 第1次，**第一次握手**，客户端向服务器发起连接，客户端的滑动窗口大小是4096，一次发送的最大数据量是1460 

2. 第2次，**第二次握手**，服务器接收连接情况，告诉客户端服务器的窗口大小是6144，一次发送的最大数据量是1024 

3. 第3次，**第三次握手**

4. 第4-9次，客户端连续给服务器发送了6k的数据，每次发送1k 

5. 第10次，服务器告诉客户端：发送的6k数据以及接收到，存储在缓冲区中，缓冲区数据已经处理了2k，窗口大小是2k(还剩4k未处理，后面同理，不再做单独说明)

6. 第11次，服务器告诉客户端：发送的6k数据以及接收到，存储在缓冲区中，缓冲区数据已经处理了4k，窗口大小是4k 

7. 第12次，客户端给服务器发送了1k的数据 

8. 第13次，**第一次挥手**，客户端主动请求和服务器断开连接，并且给服务器发送了1k的数据 

9. 第14-16次，**第二次挥手**，服务器回复ACK 8194(包含FIN标记，所以结果上多加了1)，表示**同意断开连接的请求**，并通知客户端依次已经处理了2k，4k，6k数据，滑动窗口大小依次为2k，4k，6k
10. 第17次，**第三次挥手**，服务器端给客户端发送FIN，请求断开连接 
11. 第18次，**第四次回收**，客户端同意了服务器端的断开请求

## TCP通信并发

### 注解

- 要实现TCP通信服务器处理并发的任务，使用多进程或者多线程来解决

### 实例：多进程实现TCP并发通信

#### 思路

- 服务端使用一个父进程，多个子进程 

  - 父进程负责等待并接受客户端的连接 

  - 子进程：完成通信，接受一个客户端连接，就创建一个子进程用于通信

- 客户端不需要改变（同一对一通信）

#### 遇到问题及解决*

- 断开连接后，服务器端如何处理子进程，回收资源？
  - 使用信号处理
- 使用信号捕捉回收子进程资源后，出现服务端`accept: Interrupted system call`，且不能有新客户端连接，如何解决？
  - 产生`EINTR`信号，具体说明通过`man 2 accept`查看
  - 在`accept`返回值处进行判断处理，不输出错误即可
- 当停止所有的客户端连接后，出现`read: Connection reset by peer`，如何解决？
  - 产生的原因：连接断开后的读和写操作引起的
  - 简单修改：将客户端中休眠语句的位置进行更改
  - 方法：[[261]Connection reset by peer的常见原因及解决办法](https://blog.csdn.net/xc_zhou/article/details/80950753)
- 解决上一个问题后，服务端出现两次`client closed...`，如何解决？
  - 是因为在关闭连接后，应该退出循环，所以在该`printf`语句后，添加`break`即可

#### 服务端

```c
#include <stdio.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <signal.h>
#include <sys/wait.h>
#include <errno.h>

#define SERVERIP "127.0.0.1"
#define PORT 6789

void recycleChild(int arg) {
    // 写while是为了处理多个信号
    while (1) {
        int ret = waitpid(-1, NULL, WNOHANG);
        if (ret == -1) {
            // 所有子进程都回收了
            break;
        } else if (ret == 0) {
            // 还有子进程活着
            break;
        } else {
            // 回收子进程
            printf("子进程 %d 被回收了\n", ret);
        }
    }
}

int main()
{
    // 注册信号捕捉
    struct sigaction act;
    act.sa_flags = 0;
    sigemptyset(&act.sa_mask);
    act.sa_handler = recycleChild;
    sigaction(SIGCHLD, &act, NULL);

    // 1. 创建socket（用于监听的套接字）
    int listenfd = socket(AF_INET, SOCK_STREAM, 0);
    if (listenfd == -1) {
        perror("socket");
        exit(-1);
    }

    // 2. 绑定
    struct sockaddr_in server_addr;
    server_addr.sin_family = PF_INET;
    // 点分十进制转换为网络字节序
    inet_pton(AF_INET, SERVERIP, &server_addr.sin_addr.s_addr);
    // 服务端也可以绑定0.0.0.0即任意地址
    // server_addr.sin_addr.s_addr = INADDR_ANY;
    server_addr.sin_port = htons(PORT);
    int ret = bind(listenfd, (struct sockaddr*)&server_addr, sizeof(server_addr));
    if (ret == -1) {
        perror("bind");
        exit(-1);
    }

    // 3. 监听
    ret = listen(listenfd, 8);
        if (ret == -1) {
        perror("listen");
        exit(-1);
    }
    // 不断循环等待客户端连接
    while (1) {
        // 4. 接收客户端连接
        struct sockaddr_in client_addr;
        socklen_t client_addr_len = sizeof(client_addr);
        int connfd = accept(listenfd, (struct sockaddr*)&client_addr, &client_addr_len);
        if (connfd == -1) {
            // 用于处理信号捕捉导致的accept: Interrupted system call
            if (errno == EINTR) {
                continue;
            }
            perror("accept");
            exit(-1);
        }
        pid_t pid = fork();
        if (pid == 0) {
            // 子进程
            // 输出客户端信息，IP组成至少16个字符（包含结束符）
            char client_ip[16] = {0};
            inet_ntop(AF_INET, &client_addr.sin_addr.s_addr, client_ip, sizeof(client_ip));
            unsigned short client_port = ntohs(client_addr.sin_port);
            printf("ip:%s, port:%d\n", client_ip, client_port);

            // 5. 开始通信
            // 服务端先接收客户端信息，再向客户端发送数据
            // 接收数据
            char recv_buf[1024] = {0};
            while (1) {
                ret = read(connfd, recv_buf, sizeof(recv_buf));
                if (ret == -1) {
                    perror("read");
                    exit(-1);
                } else if (ret > 0) {
                    printf("recv client data : %s\n", recv_buf);
                } else {
                    // 表示客户端断开连接
                    printf("client closed...\n");
                    // 退出循环，用来解决出现两次client closed...
                    break;
                }
                // 发送数据
                char *send_buf = "hello, i am server";
                // 粗心写成sizeof，那么就会导致遇到空格终止
                write(connfd, send_buf, strlen(send_buf));
            }
            // 关闭文件描述符
            close(connfd);
        }
    }

    close(listenfd);
    return 0;
}
```

#### 客户端

```c
#include <stdio.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

#define SERVERIP "127.0.0.1"
#define PORT 6789

int main()
{
    // 1. 创建socket（用于通信的套接字）
    int connfd = socket(AF_INET, SOCK_STREAM, 0);
    if (connfd == -1) {
        perror("socket");
        exit(-1);
    }
    // 2. 连接服务器端
    struct sockaddr_in server_addr;
    server_addr.sin_family = PF_INET;
    inet_pton(AF_INET, SERVERIP, &server_addr.sin_addr.s_addr);
    server_addr.sin_port = htons(PORT);
    int ret = connect(connfd, (struct sockaddr*)&server_addr, sizeof(server_addr));
    if (ret == -1) {
        perror("connect");
        exit(-1);
    }
    // 3. 通信
            char recv_buf[1024] = {0};
    while (1) {
        // 发送数据
        char *send_buf = "client message";
        // 粗心写成sizeof，那么就会导致遇到空格终止
        write(connfd, send_buf, strlen(send_buf));
        // 休眠的目的是为了更好的观察，此处使用sleep语句会导致read: Connection reset by peer
        // sleep(1);
        // 接收数据
        ret = read(connfd, recv_buf, sizeof(recv_buf));
        if (ret == -1) {
            perror("read");
            exit(-1);
        } else if (ret > 0) {
            printf("recv server data : %s\n", recv_buf);
        } else {
            // 表示客户端断开连接
            printf("client closed...\n");
        }
        // 休眠的目的是为了更好的观察，放在此处可以解决read: Connection reset by peer问题
        sleep(1);
    }
    // 关闭连接
    close(connfd);
    return 0;
}
```

#### 通信效果

![image-20211121162229827](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211121162229827.png)

### 实例：多线程实现TCP并发通信

#### 思路

- 服务端使用一个主线程，多个子线程 

  - 主线程负责等待并接受客户端的连接 

  - 子线程：完成通信，接受一个客户端连接，就创建一个子进程用于通信

- 客户端不需要改变（同一对一通信）

#### 服务端

```c
#include <stdio.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <pthread.h>

#define SERVERIP "127.0.0.1"
#define PORT 6789

struct sockInfo{
    int fd;                             // 通信文件描述符
    pthread_t tid;                      // 线程号
    struct sockaddr_in addr;            // 客户端信息
};

struct sockInfo sockinfos[128];     // 表示最大有128个客户端连接

void* working(void *arg) {
    // 子线程与客户端通信
    struct sockInfo *pinfo = (struct sockInfo*)arg;

    // 输出客户端信息，IP组成至少16个字符（包含结束符）
    char client_ip[16] = {0};
    inet_ntop(AF_INET, &pinfo->addr.sin_addr.s_addr, client_ip, sizeof(client_ip));
    unsigned short client_port = ntohs(pinfo->addr.sin_port);
    printf("ip:%s, port:%d\n", client_ip, client_port);

    // 5. 开始通信
    // 服务端先接收客户端信息，再向客户端发送数据
    // 接收数据
    char recv_buf[1024] = {0};
    while (1) {
        int ret = read(pinfo->fd, recv_buf, sizeof(recv_buf));
        if (ret == -1) {
            perror("read");
            exit(-1);
        } else if (ret > 0) {
            printf("recv client data : %s\n", recv_buf);
        } else {
            // 表示客户端断开连接
            printf("client closed...\n");
            break;
        }
        // 发送数据
        char *send_buf = "hello, i am server";
        // 粗心写成sizeof，那么就会导致遇到空格终止
        write(pinfo->fd, send_buf, strlen(send_buf));
    }
    // 关闭文件描述符
    close(pinfo->fd);
}

int main()
{
    // 初始化线程结构体数据
    int sockinfo_maxLen = sizeof(sockinfos) / sizeof(sockinfos[0]);
    for (int i = 0; i < sockinfo_maxLen; i++) {
        bzero(&sockinfos[i], sizeof(sockinfos[i]));
        sockinfos[i].fd = -1;
        sockinfos[i].tid = -1;
    }

    // 1. 创建socket（用于监听的套接字）
    int listenfd = socket(AF_INET, SOCK_STREAM, 0);
    if (listenfd == -1) {
        perror("socket");
        exit(-1);
    }

    // 2. 绑定
    struct sockaddr_in server_addr;
    server_addr.sin_family = PF_INET;
    // 点分十进制转换为网络字节序
    inet_pton(AF_INET, SERVERIP, &server_addr.sin_addr.s_addr);
    // 服务端也可以绑定0.0.0.0即任意地址
    // server_addr.sin_addr.s_addr = INADDR_ANY;
    server_addr.sin_port = htons(PORT);
    int ret = bind(listenfd, (struct sockaddr*)&server_addr, sizeof(server_addr));
    if (ret == -1) {
        perror("bind");
        exit(-1);
    }

    // 3. 监听
    ret = listen(listenfd, 8);
        if (ret == -1) {
        perror("listen");
        exit(-1);
    }
    // 不断循环等待客户端连接
    while (1) {
        // 4. 接收客户端连接
        struct sockaddr_in client_addr;
        socklen_t client_addr_len = sizeof(client_addr);
        int connfd = accept(listenfd, (struct sockaddr*)&client_addr, &client_addr_len);
        if (connfd == -1) {
            perror("accept");
            exit(-1);
        }
        // 创建子线程
        struct sockInfo *pinfo;
        // 从线程数组中找到一个可用的元素进行赋值
        for (int i = 0; i < sockinfo_maxLen; i++) {
            if (sockinfos[i].tid == -1) {
                pinfo = &sockinfos[i];
                break;
            }
            // 当遍历到最后还没有找到，那么休眠一秒后，从头开始找
            if (i == sockinfo_maxLen - 1) {
                sleep(1);
                i = -1;
            }
        }
        // 结构体赋值
        pinfo->fd = connfd;
        memcpy(&pinfo->addr, &client_addr, client_addr_len);
        pthread_create(&pinfo->tid, NULL, working, pinfo);
        // 释放资源
        pthread_detach(pinfo->tid);
    }

    close(listenfd);
    return 0;
}
```

#### 客户端

```c
#include <stdio.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

#define SERVERIP "127.0.0.1"
#define PORT 6789

int main()
{
    // 1. 创建socket（用于通信的套接字）
    int connfd = socket(AF_INET, SOCK_STREAM, 0);
    if (connfd == -1) {
        perror("socket");
        exit(-1);
    }
    // 2. 连接服务器端
    struct sockaddr_in server_addr;
    server_addr.sin_family = PF_INET;
    inet_pton(AF_INET, SERVERIP, &server_addr.sin_addr.s_addr);
    server_addr.sin_port = htons(PORT);
    int ret = connect(connfd, (struct sockaddr*)&server_addr, sizeof(server_addr));
    if (ret == -1) {
        perror("connect");
        exit(-1);
    }
    // 3. 通信
            char recv_buf[1024] = {0};
    while (1) {
        // 发送数据
        char *send_buf = "client message";
        // 粗心写成sizeof，那么就会导致遇到空格终止
        write(connfd, send_buf, strlen(send_buf));
        // 休眠的目的是为了更好的观察，此处使用sleep语句会导致read: Connection reset by peer
        // sleep(1);
        // 接收数据
        ret = read(connfd, recv_buf, sizeof(recv_buf));
        if (ret == -1) {
            perror("read");
            exit(-1);
        } else if (ret > 0) {
            printf("recv server data : %s\n", recv_buf);
        } else {
            // 表示客户端断开连接
            printf("client closed...\n");
        }
        // 休眠的目的是为了更好的观察，放在此处可以解决read: Connection reset by peer问题
        sleep(1);
    }
    // 关闭连接
    close(connfd);
    return 0;
}
```

#### 通信效果

![image-20211121172701543](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211121172701543.png)

## TCP状态转换

### 通信过程状态转换图1

![image-20211123124438914](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211123124438914.png)

### 通信过程状态转换图2

- 红色实线代表客户端（主动发起连接）
- 绿色虚线代表服务端（被动接收连接）
- 黑色实现代表特殊情况
- 数字代表三次握手流程

![image-20211123124611335](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211123124611335.png)

### MSL与半关闭

- 主动断开连接的一方，最后会进入一个 `TIME_WAIT`状态，这个状态会持续`2msl`

- `msl`：官方建议2分钟，实际是30s，**主要是为了防止挥手信息丢失**

  > 当 TCP 连接主动关闭方接收到被动关闭方发送的 FIN 和最终的 ACK 后，连接的主动关闭方必须处于TIME_WAIT 状态并持续 2MSL 时间
  >
  > 这样就能够让 TCP 连接的主动关闭方在它发送的 ACK 丢失的情况下重新发送最终的 ACK
  >
  > 主动关闭方重新发送的最终 ACK 并不是因为被动关闭方重传了 ACK（它们并不消耗序列号，被动关闭方也不会重传），而是因为被动关闭方重传了它的 FIN。事实上，被动关闭方总是重传 FIN 直到它收到一个最终的 ACK

- `半关闭`：当 TCP 连接中 A 向 B 发送 FIN 请求关闭，另一端 B 回应 ACK 之后（A 端进入 FIN_WAIT_2状态），并没有立即发送 FIN 给 A，A 方处于半连接状态（半开关），此时 **A 可以接收 B 发送的数据，但是 A 已经不能再向 B 发送数据**

- API 来控制实现半连接状态的方法：` shutdown函数`

  - `int shutdown(int sockfd, int how); `
    - 功能：实现半连接状态
    - 参数
      - `sockfd`：需要关闭的socket的描述符 
      - `how`：允许为shutdown操作选择以下几种方式
        - `SHUT_RD(0)`：关闭sockfd上的读功能，此选项将不允许sockfd进行读操作，该套接字不再接收数据，任何当前在套接字接受缓冲区的数据将被无声的丢弃掉
        - `SHUT_WR(1)`：关闭sockfd的写功能，此选项将不允许sockfd进行写操作。进程不能在对此套接字发 出写操作
        - `SHUT_RDWR(2)`：关闭sockfd的读写功能。相当于调用shutdown两次：首先调用`SHUT_RD`,然后调用 `SHUT_WR`

### shutdown与close

- 使用 `close` 中止一个连接，但它只是**减少描述符的引用计数，并不直接关闭连接**，只有当描述符的引用计数为 0 时才关闭连接
- `shutdown` 不考虑描述符的引用计数，**直接关闭描述符**。也可选择中止一个方向的连接，只中止读或只中止写
- 如果有多个进程共享一个套接字，close 每被调用一次，计数减 1 ，直到计数为 0 时，也就是所用进程都调用了 close，套接字将被释放
- **在多进程中如果一个进程调用了 `shutdown(sfd, SHUT_RDWR)` 后，其它的进程将无法进行通信**。但如果一个进程 `close(sfd)` 将不会影响到其它进程=>==难怪800那个项目调shutdown之后其他线程就不能用了==

### 端口复用

#### 用途

- 防止服务器重启时之前绑定的端口还未释放
- 程序突然退出而系统没有释放端口

#### 方法——`setsockopt`

- `int setsockopt(int sockfd, int level, int optname, const void *optval, socklen_t optlen); `
  - 功能：设置套接字的属性（不仅仅能设置端口复用），以下说明仅针对端口复用，其他详细内容可查看第七章相关内容 
  - 参数
    - `sockfd`：要操作的文件描述符 
    - `level`：级别，`SOL_SOCKET` (端口复用的级别)
    - `optname`：选项的名称，使用`SO_REUSEADDR`或`SO_REUSEPORT`
    - `optval`：端口复用的值（整形） ，1表示可复用，0表示不可复用
    - `optlen`：optval参数的大小

#### 注意

- 端口复用的设置时机是**在服务器绑定端口之前**
- 如果不设置端口复用，那么在程序异常终止后，再次启动服务会出现`Bind error:Address already in use`

### 查看看网络相关信息命令——netstat

- 格式：`netstat -参数名`
- 常用参数
  - `a`：所有的socket
  - `p`：显示正在使用socket的程序的名称
  - `n`：直接使用IP地址，而不通过域名服务器

# IO多路复用(IO多路转接)

## 阻塞等待(BIO模型)

### 简介

- 遇到`read`/`recv`/`accept`时，阻塞等待，直接有数据或者连接时才继续往下执行

### 单任务

- 好处：不占用CPU宝贵的时间片
- 缺点：同一时刻只能处理一个操作, 效率低
- 克服缺点：多线程或者多进程解决，一个线程/进程对应一个任务

![image-20211124122737594](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211124122737594.png)

### 多任务

- 优点：能够同时处理多个任务，一个线程/进程对应一个任务
- 缺点：
  - 线程或者进程会消耗资源
  - 线程或进程调度消耗CPU资源
- 根本问题：阻塞(`blocking`)

![image-20211124122820504](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211124122820504.png)

## 非阻塞，忙轮询(NIO模型)

- 优点：提高了程序的执行效率
- 缺点：需要占用更多的CPU和系统资源，每循环都需要 O(n) 系统调用（用来查找哪个任务可执行）
- 克服缺点：使用IO多路转接技术select/poll/epoll

![image-20211124123055701](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211124123055701.png)

## IO多路转接技术(简介)

### select/poll

- 委托内核进行操作
- 只会通知有几个任务可用，但不知道具体哪几个任务，还需遍历（与NIO模型略有不同）

![image-20211124125216066](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211124125216066.png)

### epoll

- 委托内核进行操作
- 会通知具体有哪几个任务可用

![image-20211124125254136](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211124125254136.png)

## select

### 主旨思想

1. 首先要构造一个关于文件描述符的列表，将要监听的文件描述符添加到该列表中
2. 调用一个系统函数(`select`)，监听该列表中的文件描述符，直到这些描述符中的一个或者多个进行I/O操作时，该函数才返回
   - 这个函数是阻塞
   - 函数对文件描述符的检测的操作是由内核完成的
3. 在返回时，它会告诉进程有多少（哪些）描述符要进行I/O操作

### 函数说明

- 概览

  ```c++
  #include <sys/time.h> 
  #include <sys/types.h> 
  #include <unistd.h> 
  #include <sys/select.h> 
  
  int select(int nfds, fd_set *readfds, fd_set *writefds, fd_set *exceptfds, struct timeval *timeout);
  
  // 将参数文件描述符fd对应的标志位设置为0 
  void FD_CLR(int fd, fd_set *set); 
  // 判断fd对应的标志位是0还是1， 返回值 ： fd对应的标志位的值，0，返回0， 1，返回1 
  int FD_ISSET(int fd, fd_set *set); 
  // 将参数文件描述符fd 对应的标志位，设置为1 
  void FD_SET(int fd, fd_set *set);
  // fd_set一共有1024 bit, 全部初始化为0 
  void FD_ZERO(fd_set *set);
  ```

- `int select(int nfds, fd_set *readfds, fd_set *writefds, fd_set *exceptfds, struct timeval *timeout); `

  - 通过`man select`查看帮助
  - 参数
    - `nfds`：委托内核检测的最大文件描述符的值 + 1（+1是因为遍历是下标从0开始，for循环＜设定）
    - `readfds`：要检测的文件描述符的读的集合，委托内核检测哪些文件描述符的读的属性 
      - 一般检测读操作 
      - 对应的是对方发送过来的数据，因为读是被动的接收数据，检测的就是读缓冲区
      - 是一个传入传出参数
    - `writefds`：要检测的文件描述符的写的集合，委托内核检测哪些文件描述符的写的属性 
      - 委托内核检测写缓冲区是不是还可以写数据（不满的就可以写）
    - `exceptfds`：检测发生异常的文件描述符的集合，一般不用
    - `timeout`：设置的超时时间，含义见**`select`参数列表说明**
      - `NULL`：永久阻塞，直到检测到了文件描述符有变化 
      - `tv_sec = tv_usec = 0`， 不阻塞
      - ` tv_sec > 0,tv_usec > 0`：阻塞对应的时间 

  - 返回值
    - -1：失败
    - \>0(n)：检测的集合中有n个文件描述符发生了变化  

- `select`参数列表说明

  - `fd_set`：是一块固定大小的缓冲区(结构体)，`sizeof(fd_set)=128`，即对应1024个比特位

  - `timeval `：结构体类型

    ```c++
    struct timeval { 
        long tv_sec; /* seconds */ 
        long tv_usec; /* microseconds */ 
    };
    ```

### 工作过程分析

1. 初始设定

   ![image-20211124232543733](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211124232543733.png)

2. 设置监听文件描述符，将`fd_set`集合相应位置为1

   ![image-20211124232723210](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211124232723210.png)

3. 调用`select`委托内核检测

   ![image-20211124233009618](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211124233009618.png)

4. 内核检测完毕后，返回给用户态结果

   ![image-20211124233108458](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211124233108458.png)

### 代码实现

#### 注意事项

- `select`中需要的监听集合需要两个
  - 一个是用户态真正需要监听的集合`rSet`
  - 一个是内核态返回给用户态的修改集合`tmpSet`
- 需要先判断监听文件描述符是否发生改变
  - 如果改变了，说明有客户端连接，此时需要将**新的连接文件描述符加入到`rSet`**，并更新最大文件描述符
  - 如果没有改变，说明没有客户端连接
- 由于`select`无法确切知道哪些文件描述符发生了改变，所以需要执行遍历操作，使用`FD_ISSET`判断是否发生了改变
- 如果客户端断开了连接，需要从`rSet`中清除需要监听的文件描述符
- 程序存在的问题：中间的一些断开连接后，最大文件描述符怎么更新？=>==估计不更新，每次都会遍历到之前的最大值处==，解决方案见[高并发优化思考](###高并发优化思考)

#### 服务端

```c++
#include <stdio.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <sys/select.h>

#define SERVERIP "127.0.0.1"
#define PORT 6789


int main()
{
    // 1. 创建socket（用于监听的套接字）
    int listenfd = socket(AF_INET, SOCK_STREAM, 0);
    if (listenfd == -1) {
        perror("socket");
        exit(-1);
    }
    // 2. 绑定
    struct sockaddr_in server_addr;
    server_addr.sin_family = PF_INET;
    // 点分十进制转换为网络字节序
    inet_pton(AF_INET, SERVERIP, &server_addr.sin_addr.s_addr);
    // 服务端也可以绑定0.0.0.0即任意地址
    // server_addr.sin_addr.s_addr = INADDR_ANY;
    server_addr.sin_port = htons(PORT);
    int ret = bind(listenfd, (struct sockaddr*)&server_addr, sizeof(server_addr));
    if (ret == -1) {
        perror("bind");
        exit(-1);
    }
    // 3. 监听
    ret = listen(listenfd, 8);
        if (ret == -1) {
        perror("listen");
        exit(-1);
    }
    // 创建读检测集合
    // rSet用于记录正在的监听集合，tmpSet用于记录在轮训过程中由内核态返回到用户态的集合
    fd_set rSet, tmpSet;
    // 清空
    FD_ZERO(&rSet);
    // 将监听文件描述符加入
    FD_SET(listenfd, &rSet);
    // 此时最大的文件描述符为监听描述符
    int maxfd = listenfd;
    // 不断循环等待客户端连接
    while (1) {
        tmpSet = rSet;
        // 使用select，设置为永久阻塞，有文件描述符变化才返回
        int num = select(maxfd + 1, &tmpSet, NULL, NULL, NULL);
        if (num == -1) {
            perror("select");
            exit(-1);
        } else if (num == 0) {
            // 当前无文件描述符有变化，执行下一次遍历
            // 在本次设置中无效（因为select被设置为永久阻塞）
            continue;
        } else {
            // 首先判断监听文件描述符是否发生改变（即是否有客户端连接）
            if (FD_ISSET(listenfd, &tmpSet)) {
                // 4. 接收客户端连接
                struct sockaddr_in client_addr;
                socklen_t client_addr_len = sizeof(client_addr);
                int connfd = accept(listenfd, (struct sockaddr*)&client_addr, &client_addr_len);
                if (connfd == -1) {
                    perror("accept");
                    exit(-1);
                }
                // 输出客户端信息，IP组成至少16个字符（包含结束符）
                char client_ip[16] = {0};
                inet_ntop(AF_INET, &client_addr.sin_addr.s_addr, client_ip, sizeof(client_ip));
                unsigned short client_port = ntohs(client_addr.sin_port);
                printf("ip:%s, port:%d\n", client_ip, client_port);

                FD_SET(connfd, &rSet);
                // 更新最大文件符
                maxfd = maxfd > connfd ? maxfd : connfd;
            }

            // 遍历集合判断是否有变动，如果有变动，那么通信
            char recv_buf[1024] = {0};
            for (int i = listenfd + 1; i <= maxfd; i++) {
                if (FD_ISSET(i, &tmpSet)) {
                    ret = read(i, recv_buf, sizeof(recv_buf));
                    if (ret == -1) {
                        perror("read");
                        exit(-1);
                    } else if (ret > 0) {
                        printf("recv server data : %s\n", recv_buf);
                        write(i, recv_buf, strlen(recv_buf));
                    } else {
                        // 表示客户端断开连接
                        printf("client closed...\n");
                        close(i);
                        FD_CLR(i, &rSet);
                        break;
                    }
                }
            }
        }
    }

    close(listenfd);
    return 0;
}
```

#### 客户端

```c++
#include <stdio.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

#define SERVERIP "127.0.0.1"
#define PORT 6789

int main()
{
    // 1. 创建socket（用于通信的套接字）
    int connfd = socket(AF_INET, SOCK_STREAM, 0);
    if (connfd == -1) {
        perror("socket");
        exit(-1);
    }
    // 2. 连接服务器端
    struct sockaddr_in server_addr;
    server_addr.sin_family = PF_INET;
    inet_pton(AF_INET, SERVERIP, &server_addr.sin_addr.s_addr);
    server_addr.sin_port = htons(PORT);
    int ret = connect(connfd, (struct sockaddr*)&server_addr, sizeof(server_addr));
    if (ret == -1) {
        perror("connect");
        exit(-1);
    }
    // 3. 通信
    char recv_buf[1024] = {0};
    while (1) {
        // 发送数据
        char *send_buf = "client message";
        write(connfd, send_buf, strlen(send_buf));
        // 接收数据
        ret = read(connfd, recv_buf, sizeof(recv_buf));
        if (ret == -1) {
            perror("read");
            exit(-1);
        } else if (ret > 0) {
            printf("recv server data : %s\n", recv_buf);
        } else {
            // 表示客户端断开连接
            printf("client closed...\n");
        }
        // 休眠的目的是为了更好的观察，放在此处可以解决read: Connection reset by peer问题
        sleep(1);
    }
    // 关闭连接
    close(connfd);
    return 0;
}
```

### 高并发优化思考

#### 问题

- 每次都需要利用`FD_ISSET`轮训`[0, maxfd]`之间的连接状态，如果位于中间的某一个客户端断开了连接，此时不应该再去利用`FD_ISSET`轮训，造成资源浪费
- 如果在处理客户端数据时，某一次read没有对数据读完，那么造成重新进行下一次时select，获取上一次未处理完的文件描述符，从0开始遍历到maxfd，对上一次的进行再一次操作，效率十分低下

#### 解决

- 考虑到`select`只有`1024`个最大可监听数量，可以申请等量客户端数组
  - 初始置为-1，当有状态改变时，置为相应文件描述符
  - 此时再用`FD_ISSET`轮训时，跳过标记为-1的客户端，加快遍历速度
- 对于问题二：对读缓存区循环读，直到返回`EAGAIN`再处理数据

#### 参考

- [多路复用IO模型之select与并发问题进一步优化](https://blog.csdn.net/weixin_42889383/article/details/102367621)

### 存在问题(缺点)

- 每次调用select，都需要把fd集合从用户态拷贝到内核态，这个开销在fd很多时会很大
- 同时每次调用select都需要在内核遍历传递进来的所有fd，这个开销在fd很多时也很大
- select支持的文件描述符数量太小了，默认是1024
- fds集合不能重用，每次都需要重置

![image-20211126224641170](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211126224641170.png)

## poll

### 主旨思想

- 用一个结构体记录文件描述符集合，并记录用户态状态和内核态状态

### 函数说明

- 概览

  ```c++
  #include <poll.h> 
  struct pollfd { 
      int fd; /* 委托内核检测的文件描述符 */ 
      short events; /* 委托内核检测文件描述符的什么事件 */ 
      short revents; /* 文件描述符实际发生的事件 */ 
  };
  
  int poll(struct pollfd *fds, nfds_t nfds, int timeout);
  ```

- `int poll(struct pollfd *fds, nfds_t nfds, int timeout); `

  - 通过`man poll`查看帮助
  - 参数
    - `fds`：是一个`struct pollfd` 结构体数组，这是一个需要检测的文件描述符的集合
    - `nfds`：这个是第一个参数数组中最后一个有效元素的下标 + 1 
    - `timeout`：阻塞时长 
      - 0：不阻塞
      - -1：阻塞，当检测到需要检测的文件描述符有变化，解除阻塞
      - \>0：具体的阻塞时长(ms)
  - 返回值
    - -1：失败
    - \>0(n)：检测的集合中有n个文件描述符发生了变化

- `events`及`revents`取值，如果有多个事件需要检测，用`|`即可，如同时检测读和写：`POLLIN | POLLOUT`

  ![image-20211126233707281](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211126233707281.png)

### 代码实现

#### 注意事项

- `nfds`表示的监听文件描述符的下标，所以在遍历时，需要使用`fds[i].fd`取得相应的文件描述符
- 如何优雅的更新nfds?代码中使用连接的文件描述符作为替代更新

#### 服务端

```c++
#include <stdio.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <poll.h>

#define SERVERIP "127.0.0.1"
#define PORT 6789


int main()
{
    // 1. 创建socket（用于监听的套接字）
    int listenfd = socket(AF_INET, SOCK_STREAM, 0);
    if (listenfd == -1) {
        perror("socket");
        exit(-1);
    }
    // 2. 绑定
    struct sockaddr_in server_addr;
    server_addr.sin_family = PF_INET;
    // 点分十进制转换为网络字节序
    inet_pton(AF_INET, SERVERIP, &server_addr.sin_addr.s_addr);
    // 服务端也可以绑定0.0.0.0即任意地址
    // server_addr.sin_addr.s_addr = INADDR_ANY;
    server_addr.sin_port = htons(PORT);
    int ret = bind(listenfd, (struct sockaddr*)&server_addr, sizeof(server_addr));
    if (ret == -1) {
        perror("bind");
        exit(-1);
    }
    // 3. 监听
    ret = listen(listenfd, 8);
        if (ret == -1) {
        perror("listen");
        exit(-1);
    }
    
    struct pollfd fds[1024];
    // 初始化
    for (int i = 0; i < 1024; i++) {
        fds[i].fd = -1;
        fds[i].events = POLLIN;
    }
    // 将监听文件描述符加入
    fds[0].fd = listenfd;
    int nfds = 0;
    // 不断循环等待客户端连接
    while (1) {
        // 使用poll，设置为永久阻塞，有文件描述符变化才返回
        int num = poll(fds, nfds + 1, -1);
        if (num == -1) {
            perror("poll");
            exit(-1);
        } else if (num == 0) {
            // 当前无文件描述符有变化，执行下一次遍历
            // 在本次设置中无效（因为select被设置为永久阻塞）
            continue;
        } else {
            // 首先判断监听文件描述符是否发生改变（即是否有客户端连接）
            if (fds[0].revents & POLLIN) {
                // 4. 接收客户端连接
                struct sockaddr_in client_addr;
                socklen_t client_addr_len = sizeof(client_addr);
                int connfd = accept(listenfd, (struct sockaddr*)&client_addr, &client_addr_len);
                if (connfd == -1) {
                    perror("accept");
                    exit(-1);
                }
                // 输出客户端信息，IP组成至少16个字符（包含结束符）
                char client_ip[16] = {0};
                inet_ntop(AF_INET, &client_addr.sin_addr.s_addr, client_ip, sizeof(client_ip));
                unsigned short client_port = ntohs(client_addr.sin_port);
                printf("ip:%s, port:%d\n", client_ip, client_port);
                // 遍历集合, 将新的需要监听的文件描述符加入集合
                for (int i = 1; i < 1024; i++) {
                    if (fds[i].fd == -1) {
                        fds[i].fd = connfd;
                        fds[i].events = POLLIN;
                        break;
                    }
                }
                // 更新最大的监听文件描述符集合下标
                // 存在问题：使用文件描述符替代最大对应下标
                nfds = nfds > connfd ? nfds : connfd;
            }

            // 遍历集合判断是否有变动，如果有变动，那么通信
            char recv_buf[1024] = {0};
            for (int i = 1; i <= nfds; i++) {
                if (fds[i].fd != -1 && fds[i].revents & POLLIN) {
                    ret = read(fds[i].fd, recv_buf, sizeof(recv_buf));
                    if (ret == -1) {
                        perror("read");
                        exit(-1);
                    } else if (ret > 0) {
                        printf("recv server data : %s\n", recv_buf);
                        write(fds[i].fd, recv_buf, strlen(recv_buf));
                    } else {
                        // 表示客户端断开连接
                        printf("client closed...\n");
                        close(fds[i].fd);
                        fds[i].fd = -1;
                        break;
                    }
                }
            }
        }
    }

    close(listenfd);
    return 0;
}
```

#### 客户端

```c++
#include <stdio.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

#define SERVERIP "127.0.0.1"
#define PORT 6789

int main()
{
    // 1. 创建socket（用于通信的套接字）
    int connfd = socket(AF_INET, SOCK_STREAM, 0);
    if (connfd == -1) {
        perror("socket");
        exit(-1);
    }
    // 2. 连接服务器端
    struct sockaddr_in server_addr;
    server_addr.sin_family = PF_INET;
    inet_pton(AF_INET, SERVERIP, &server_addr.sin_addr.s_addr);
    server_addr.sin_port = htons(PORT);
    int ret = connect(connfd, (struct sockaddr*)&server_addr, sizeof(server_addr));
    if (ret == -1) {
        perror("connect");
        exit(-1);
    }
    // 3. 通信
    char recv_buf[1024] = {0};
    while (1) {
        // 发送数据
        char *send_buf = "client message";
        write(connfd, send_buf, strlen(send_buf));
        // 接收数据
        ret = read(connfd, recv_buf, sizeof(recv_buf));
        if (ret == -1) {
            perror("read");
            exit(-1);
        } else if (ret > 0) {
            printf("recv server data : %s\n", recv_buf);
        } else {
            // 表示客户端断开连接
            printf("client closed...\n");
        }
        // 休眠的目的是为了更好的观察，放在此处可以解决read: Connection reset by peer问题
        sleep(1);
    }
    // 关闭连接
    close(connfd);
    return 0;
}
```

### 存在问题(缺点)

- 缺点同`select`第一点和第二点(如下)，即解决了第三点和第四点
- 每次调用select，都需要把fd集合从用户态拷贝到内核态，这个开销在fd很多时会很大
- 同时每次调用select都需要在内核遍历传递进来的所有fd，这个开销在fd很多时也很大

## epoll

### 主旨思想

- 直接在**内核态**创建` eventpoll实例`(结构体)，通过`epoll`提供的API操作该实例
- 结构体中有`红黑树`和`双链表`，分别用来**存储需要检测的文件描述符**和**存储已经发生改变的文件描述符**

![image-20211127170241104](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211127170241104.png)

### 函数说明

- 概览

  ```c
  #include <sys/epoll.h>
  
  // 创建一个新的epoll实例
  // 在内核中创建了一个数据，这个数据中有两个比较重要的数据，一个是需要检测的文件描述符的信息（红黑树），还有一个是就绪列表，存放检测到数据发送改变的文件描述符信息（双向链表）
  int epoll_create(int size);
  
  // 对epoll实例进行管理：添加文件描述符信息，删除信息，修改信息
  int epoll_ctl(int epfd, int op, int fd, struct epoll_event *event);
  struct epoll_event { 
      uint32_t events; /* Epoll events */ 
      epoll_data_t data; /* User data variable */ 
  };
  typedef union epoll_data { 
      void *ptr; 
      int fd; 
      uint32_t u32; 
      uint64_t u64; 
  } epoll_data_t;
  
  // 检测函数
  int epoll_wait(int epfd, struct epoll_event *events, int maxevents, int timeout);
  ```

- `int epoll_create(int size);`

  - 功能：创建一个新的epoll实例
  - 参数：`size`，目前没有意义了(之前底层实现是哈希表，现在是红黑树)，随便写一个数，必须大于0
  - 返回值
    - -1：失败
    - \>0：操作`epoll实例`的文件描述符

- `int epoll_ctl(int epfd, int op, int fd, struct epoll_event *event);`

  - 功能：对epoll实例进行管理：添加文件描述符信息，删除信息，修改信息
  - 参数：
    - `epfd`：epoll实例对应的文件描述符
    - `op`：要进行什么操作
      - 添加：`EPOLL_CTL_ADD`
      - 删除：`EPOLL_CTL_DEL`
      - 修改：`EPOLL_CTL_MOD`
    - `fd`：要检测的文件描述符 
    - `event`：检测文件描述符什么事情，通过设置`epoll_event.events`，常见操作
      - 读事件：`EPOLLIN`
      - 写事件：`EPOLLOUT `
      - 错误事件：`EPOLLERR`
      - 设置边沿触发：`EPOLLET`（默认水平触发）
  - 返回值：成功0，失败-1

- `int epoll_wait(int epfd, struct epoll_event *events, int maxevents, int timeout);`

  - 功能：检测哪些文件描述符发生了改变
  - 参数：
    - `epfd`：epoll实例对应的文件描述符
    - `events`：传出参数，保存了发生了变化的文件描述符的信息
    - `maxevents`：第二个参数结构体数组的大小 
    - `timeout`：阻塞时长 
      - 0：不阻塞
      - -1：阻塞，当检测到需要检测的文件描述符有变化，解除阻塞
      - \>0：具体的阻塞时长(ms)
  - 返回值：
    -  \> 0：成功，返回发送变化的文件描述符的个数
    -  -1：失败

### 代码实现

#### 注意事项

- `events`是封装了监听描述符信息的结构体，每一个新增文件都需要这个(可重用)

- 需要注意可能同时发生了多个监听（如监听读事件和写事件），那么代码逻辑需要做相应判断

  > 如本例中只检测读事件，排除了写事件

#### 服务端

```c++
#include <stdio.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <sys/epoll.h>

#define SERVERIP "127.0.0.1"
#define PORT 6789


int main()
{
    // 1. 创建socket（用于监听的套接字）
    int listenfd = socket(AF_INET, SOCK_STREAM, 0);
    if (listenfd == -1) {
        perror("socket");
        exit(-1);
    }
    // 2. 绑定
    struct sockaddr_in server_addr;
    server_addr.sin_family = PF_INET;
    // 点分十进制转换为网络字节序
    inet_pton(AF_INET, SERVERIP, &server_addr.sin_addr.s_addr);
    // 服务端也可以绑定0.0.0.0即任意地址
    // server_addr.sin_addr.s_addr = INADDR_ANY;
    server_addr.sin_port = htons(PORT);
    int ret = bind(listenfd, (struct sockaddr*)&server_addr, sizeof(server_addr));
    if (ret == -1) {
        perror("bind");
        exit(-1);
    }
    // 3. 监听
    ret = listen(listenfd, 8);
        if (ret == -1) {
        perror("listen");
        exit(-1);
    }
    
    // 创建epoll实例
    int epfd = epoll_create(100);
    // 将监听文件描述符加入实例
    struct epoll_event event;
    event.events = EPOLLIN;
    event.data.fd = listenfd;
    ret = epoll_ctl(epfd, EPOLL_CTL_ADD, listenfd, &event);
    if (ret == -1) {
        perror("epoll_ctl");
        exit(-1);
    }
    // 此结构体用来保存内核态返回给用户态发生改变的文件描述符信息
    struct epoll_event events[1024];
    // 不断循环等待客户端连接
    while (1) {
        // 使用epoll，设置为永久阻塞，有文件描述符变化才返回
        int num = epoll_wait(epfd, events, 1024, -1);
        if (num == -1) {
            perror("poll");
            exit(-1);
        } else if (num == 0) {
            // 当前无文件描述符有变化，执行下一次遍历
            // 在本次设置中无效（因为select被设置为永久阻塞）
            continue;
        } else {
            // 遍历发生改变的文件描述符集合
            for (int i = 0; i < num; i++) {
                // 判断监听文件描述符是否发生改变（即是否有客户端连接）
                int curfd = events[i].data.fd;
                if (curfd == listenfd) {
                    // 4. 接收客户端连接
                    struct sockaddr_in client_addr;
                    socklen_t client_addr_len = sizeof(client_addr);
                    int connfd = accept(listenfd, (struct sockaddr*)&client_addr, &client_addr_len);
                    if (connfd == -1) {
                        perror("accept");
                        exit(-1);
                    }
                    // 输出客户端信息，IP组成至少16个字符（包含结束符）
                    char client_ip[16] = {0};
                    inet_ntop(AF_INET, &client_addr.sin_addr.s_addr, client_ip, sizeof(client_ip));
                    unsigned short client_port = ntohs(client_addr.sin_port);
                    printf("ip:%s, port:%d\n", client_ip, client_port);
                    // 将信息加入监听集合
                    event.events = EPOLLIN;
                    event.data.fd = connfd;
                    epoll_ctl(epfd, EPOLL_CTL_ADD, connfd, &event);
                } else {
                    // 只检测读事件
                    if (events[i].events & EPOLLOUT) {
                        continue;
                    }
                    // 接收消息
                    char recv_buf[1024] = {0};
                    ret = read(curfd, recv_buf, sizeof(recv_buf));
                    if (ret == -1) {
                        perror("read");
                        exit(-1);
                    } else if (ret > 0) {
                        printf("recv server data : %s\n", recv_buf);
                        write(curfd, recv_buf, strlen(recv_buf));
                    } else {
                        // 表示客户端断开连接
                        printf("client closed...\n");
                        close(curfd);
                        epoll_ctl(epfd, EPOLL_CTL_DEL, curfd, NULL);
                        break;
                    }
                }
            }
        }
    }

    close(listenfd);
    close(epfd);
    return 0;
}
```

#### 客户端

```c++
#include <stdio.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

#define SERVERIP "127.0.0.1"
#define PORT 6789

int main()
{
    // 1. 创建socket（用于通信的套接字）
    int connfd = socket(AF_INET, SOCK_STREAM, 0);
    if (connfd == -1) {
        perror("socket");
        exit(-1);
    }
    // 2. 连接服务器端
    struct sockaddr_in server_addr;
    server_addr.sin_family = PF_INET;
    inet_pton(AF_INET, SERVERIP, &server_addr.sin_addr.s_addr);
    server_addr.sin_port = htons(PORT);
    int ret = connect(connfd, (struct sockaddr*)&server_addr, sizeof(server_addr));
    if (ret == -1) {
        perror("connect");
        exit(-1);
    }
    // 3. 通信
    char recv_buf[1024] = {0};
    while (1) {
        // 发送数据
        char *send_buf = "client message";
        write(connfd, send_buf, strlen(send_buf));
        // 接收数据
        ret = read(connfd, recv_buf, sizeof(recv_buf));
        if (ret == -1) {
            perror("read");
            exit(-1);
        } else if (ret > 0) {
            printf("recv server data : %s\n", recv_buf);
        } else {
            // 表示客户端断开连接
            printf("client closed...\n");
        }
        // 休眠的目的是为了更好的观察，放在此处可以解决read: Connection reset by peer问题
        sleep(1);
    }
    // 关闭连接
    close(connfd);
    return 0;
}
```

### 工作模式(LT与ET)

#### 水平触发(level triggered, LT)

- epoll的缺省的工作方式，并且同时支持 block 和 non-block socket
- 在这种做法中，内核告诉你一个文件描述符是否就绪了，然后你可以对这个就绪的 fd 进行 IO 操作。如果你不作任何操作，内核还是会继续通知你的

#### 边沿触发(edge triggered, ET)

- 是高速工作方式，只支持 non-block socket，需要对监听文件描述符设置才能实现
- 在这种模式下，当描述符从未就绪变为就绪时，内核通过epoll告诉你。然后它会假设你知道文件描述符已经就绪，并且不会再为那个文件描述符发送更多的就绪通知，直到你做了某些操作导致那个文件描述符不再为就绪状态了。但是请注意，如果一直不对这个 fd 作 IO 操作（从而导致它再次变成未就绪），内核不会发送更多的通知（only once）

#### 区别与说明

- ET 模式在很大程度上减少了 epoll 事件被重复触发的次数，因此效率要比 LT 模式高
- epoll工作在 ET 模式的时候，必须使用非阻塞套接口，以避免由于一个文件句柄的阻塞读/阻塞写操作把处理多个文件描述符的任务饿死
- 所以如果使用ET且缓冲区内容不能一次性读完，**需要写一个循环将内容全部读取，且需要将套接字设置为非阻塞**

- 说明：假设委托内核检测读事件，即检测fd的读缓冲区，那么如果读缓冲区有数据 ，epoll检测到了会给用户通知
  - LT
    - 用户不读数据，数据一直在缓冲区，epoll 会一直通知
    - 用户只读了一部分数据，epoll会通知
    - 缓冲区的数据读完了，不通知
  - ET
    - 用户不读数据，数据一致在缓冲区中，epoll下次检测的时候就不通知了
    - 用户只读了一部分数据，epoll不通知
    - 缓冲区的数据读完了，不通知

#### 代码(ET)

##### 服务端

```c++
#include <stdio.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <sys/epoll.h>
#include <fcntl.h>
#include <errno.h>

#define SERVERIP "127.0.0.1"
#define PORT 6789


int main()
{
    // 1. 创建socket（用于监听的套接字）
    int listenfd = socket(AF_INET, SOCK_STREAM, 0);
    if (listenfd == -1) {
        perror("socket");
        exit(-1);
    }
    int opt = 1;
    setsockopt(listenfd, SOL_SOCKET, SO_REUSEPORT, &opt, sizeof(opt));

    // 2. 绑定
    struct sockaddr_in server_addr;
    server_addr.sin_family = PF_INET;
    // 点分十进制转换为网络字节序
    inet_pton(AF_INET, SERVERIP, &server_addr.sin_addr.s_addr);
    // 服务端也可以绑定0.0.0.0即任意地址
    // server_addr.sin_addr.s_addr = INADDR_ANY;
    server_addr.sin_port = htons(PORT);
    int ret = bind(listenfd, (struct sockaddr*)&server_addr, sizeof(server_addr));
    if (ret == -1) {
        perror("bind");
        exit(-1);
    }
    // 3. 监听
    ret = listen(listenfd, 8);
        if (ret == -1) {
        perror("listen");
        exit(-1);
    }
    
    // 创建epoll实例
    int epfd = epoll_create(100);
    // 将监听文件描述符加入实例
    struct epoll_event event;
    event.events = EPOLLIN;
    event.data.fd = listenfd;
    ret = epoll_ctl(epfd, EPOLL_CTL_ADD, listenfd, &event);
    if (ret == -1) {
        perror("epoll_ctl");
        exit(-1);
    }
    // 此结构体用来保存内核态返回给用户态发生改变的文件描述符信息
    struct epoll_event events[1024];
    // 不断循环等待客户端连接
    while (1) {
        // 使用epoll，设置为永久阻塞，有文件描述符变化才返回
        int num = epoll_wait(epfd, events, 1024, -1);
        // 方便观察epoll通知了几次
        printf("num = %d\n", num);
        if (num == -1) {
            perror("poll");
            exit(-1);
        } else if (num == 0) {
            // 当前无文件描述符有变化，执行下一次遍历
            // 在本次设置中无效（因为select被设置为永久阻塞）
            continue;
        } else {
            // 遍历发生改变的文件描述符集合
            for (int i = 0; i < num; i++) {
                // 判断监听文件描述符是否发生改变（即是否有客户端连接）
                int curfd = events[i].data.fd;
                if (curfd == listenfd) {
                    // 4. 接收客户端连接
                    struct sockaddr_in client_addr;
                    socklen_t client_addr_len = sizeof(client_addr);
                    int connfd = accept(listenfd, (struct sockaddr*)&client_addr, &client_addr_len);
                    if (connfd == -1) {
                        perror("accept");
                        exit(-1);
                    }
                    // 输出客户端信息，IP组成至少16个字符（包含结束符）
                    char client_ip[16] = {0};
                    inet_ntop(AF_INET, &client_addr.sin_addr.s_addr, client_ip, sizeof(client_ip));
                    unsigned short client_port = ntohs(client_addr.sin_port);
                    printf("ip:%s, port:%d\n", client_ip, client_port);
                    // 将通信套接字设置为非阻塞
                    int flag = fcntl(connfd, F_GETFL);
                    flag |= O_NONBLOCK;
                    fcntl(connfd, F_SETFL, flag);

                    // 将信息加入监听集合，设置为ET模式
                    event.events = EPOLLIN | EPOLLET;
                    event.data.fd = connfd;
                    epoll_ctl(epfd, EPOLL_CTL_ADD, connfd, &event);
                } else {
                    // 只检测读事件
                    if (events[i].events & EPOLLOUT) {
                        continue;
                    }
                    // 接收消息，将缓冲区减少，这样能更好说明一次性无法读取数据时，epoll的操作
                    // 需要循环读取数据
                    char recv_buf[5] = {0};
                    while ((ret = read(curfd, recv_buf, sizeof(recv_buf))) > 0) {
                        // 应该是打印的时候最后没有结束符
                        char test_buf[6] = {0};
                        strcpy(test_buf, recv_buf);
                        printf("recv server data : %s\n", test_buf);
                        // write(STDOUT_FILENO, recv_buf, ret);
                        // write(curfd, recv_buf, strlen(recv_buf));
                        write(curfd, recv_buf, sizeof(recv_buf));
                        memset(recv_buf, 0, sizeof(recv_buf));
                    }
                    if (ret == -1) {
                        if(errno == EAGAIN) {
                            printf("data over...\n");
                        }else {
                            perror("read");
                            exit(-1);
                        }
                    } else {
                        // 表示客户端断开连接
                        printf("client closed...\n");
                        close(curfd);
                        epoll_ctl(epfd, EPOLL_CTL_DEL, curfd, NULL);
                        break;
                    }
                }
            }
        }
    }

    close(listenfd);
    close(epfd);
    return 0;
}
```

##### 客户端

```c++
#include <stdio.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

#define SERVERIP "127.0.0.1"
#define PORT 6789

int main()
{
    // 1. 创建socket（用于通信的套接字）
    int connfd = socket(AF_INET, SOCK_STREAM, 0);
    if (connfd == -1) {
        perror("socket");
        exit(-1);
    }
    // 2. 连接服务器端
    struct sockaddr_in server_addr;
    server_addr.sin_family = PF_INET;
    inet_pton(AF_INET, SERVERIP, &server_addr.sin_addr.s_addr);
    server_addr.sin_port = htons(PORT);
    int ret = connect(connfd, (struct sockaddr*)&server_addr, sizeof(server_addr));
    if (ret == -1) {
        perror("connect");
        exit(-1);
    }
    // 3. 通信
    char recv_buf[1024] = {0};
    while (1) {
        // 发送数据，修改为从键盘获取内容
        fgets(recv_buf, sizeof(recv_buf), stdin);
        write(connfd, recv_buf, strlen(recv_buf));
        // 因为用的时同一个数组，不清空就会有残留数据
        memset(recv_buf, 0, sizeof(recv_buf));
        // 接收数据
        ret = read(connfd, recv_buf, sizeof(recv_buf));
        if (ret == -1) {
            perror("read");
            exit(-1);
        } else if (ret > 0) {
            printf("recv server data : %s\n", recv_buf);
        } else {
            // 表示客户端断开连接
            printf("client closed...\n");
        }
        // 休眠的目的是为了更好的观察，放在此处可以解决read: Connection reset by peer问题
        sleep(1);
    }
    // 关闭连接
    close(connfd);
    return 0;
}
```

# UDP与本地套接字

## UDP通信

### 通信流程

![image-20211127210835952](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211127210835952.png)

### 消息收发函数

- `ssize_t sendto(int sockfd, const void *buf, size_t len, int flags, const struct sockaddr *dest_addr, socklen_t addrlen);`
  - 功能：udp发送消息函数
  - 参数
    - `sockfd`：通信的套接字(文件描述符)
    - `buf`：要发送的数据 
    - `len`：发送数据的长度 
    - `flags`：设置为0即可
    - `dest_addr`：通信的另外一端的地址信息 
    - `addrlen`：地址的内存大小，即`sizeof(dest_addr)`
  - 返回值：失败-1，否则返回发送数据大小
- `ssize_t recvfrom(int sockfd, void *buf, size_t len, int flags, struct sockaddr *src_addr, socklen_t *addrlen); `
  - 功能：udp接收消息函数
  - 参数
    - `sockfd`：通信的套接字(文件描述符)
    - `buf`：接收的数据 
    - `len`：接收数据的长度 
    - `flags`：设置为0即可
    - `dest_addr`：通信的另外一端的地址信息，不需要设置为NULL即可
    - `addrlen`：地址的内存大小，即`sizeof(dest_addr)`
  - 返回值：失败-1，否则返回发送数据大小

### 实例：UDP通信

#### 说明

- 服务端不需要设置监听文件描述符=>因为不需要三次握手
- 不需要多进程/多线程，或者IO多路复用即可实现多并发

#### 服务端

```c
#include <stdio.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <string.h>

#define SERVERIP "127.0.0.1"
#define PORT 6789

int main()
{
    // 1. 创建通信套接字
    int connfd = socket(PF_INET, SOCK_DGRAM, 0);
    // 2. 绑定本机地址(服务端)
    struct sockaddr_in server_addr;
    server_addr.sin_family = AF_INET;
    server_addr.sin_port = htons(PORT);
    inet_pton(AF_INET, SERVERIP, &server_addr.sin_addr.s_addr);
    int ret = bind(connfd, (struct sockaddr*)&server_addr, sizeof(server_addr));
    if(ret == -1) {
        perror("bind");
        exit(-1);
    }
    // 3. 通信
    while (1) {
        char recvbuf[128];
        char ipbuf[16];

        struct sockaddr_in cliaddr;
        int len = sizeof(cliaddr);

        // 接收数据
        int num = recvfrom(connfd, recvbuf, sizeof(recvbuf), 0, (struct sockaddr *)&cliaddr, &len);

        printf("client IP : %s, Port : %d\n", 
            inet_ntop(AF_INET, &cliaddr.sin_addr.s_addr, ipbuf, sizeof(ipbuf)),
            ntohs(cliaddr.sin_port));

        printf("client say : %s\n", recvbuf);

        // 发送数据
        sendto(connfd, recvbuf, strlen(recvbuf) + 1, 0, (struct sockaddr *)&cliaddr, sizeof(cliaddr));
    }
    return 0;
}
```

#### 客户端

```c
#include <stdio.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#define SERVERIP "127.0.0.1"
#define PORT 6789

int main()
{
    // 1. 创建通信套接字
    int connfd = socket(PF_INET, SOCK_DGRAM, 0);
    // 2. 通信
    // 设置服务器信息
    struct sockaddr_in server_addr;
    server_addr.sin_family = AF_INET;
    server_addr.sin_port = htons(PORT);
    inet_pton(AF_INET, SERVERIP, &server_addr.sin_addr.s_addr);
    int num = 0;
    while (1) {
        // 发送数据
        char sendBuf[128];
        sprintf(sendBuf, "hello , i am client %d \n", num++);
        sendto(connfd, sendBuf, strlen(sendBuf) + 1, 0, (struct sockaddr *)&server_addr, sizeof(server_addr));

        // 接收数据
        int num = recvfrom(connfd, sendBuf, sizeof(sendBuf), 0, NULL, NULL);
        printf("server say : %s\n", sendBuf);

        sleep(1);
    }
    return 0;
}
```

## 广播

### 简介

- 只能在局域网中使用
- 客户端需要绑定服务器广播使用的端口，才可以接收到广播消息

> 向子网中多台计算机发送消息，并且子网中所有的计算机都可以接收到发送方发送的消息，每个广播消息都包含一个特殊的IP地址，这个IP中子网内主机标志部分的二进制全部为1

![image-20211204205113069](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211204205113069.png)

### 方法

- 通过设置`setsockopt`函数，服务端进行设置（发送广播端）
- `int setsockopt(int sockfd, int level, int optname, const void *optval, socklen_t optlen); `
  - `sockfd`：通信套接字
  - `level`：设置为`SOL_SOCKET`
  - `optname`：设置为`SO_BROADCAST`
  - `optval`：int类型的值，为1表示允许广播 
  - `optlen`：optval的大小

### 注意事项

- 此时客户端和服务端界限模糊，按理来说，需要`bind`端为服务端，而在广播时，需要`bind`的一端为接收消息端

- `发送广播端`需要通过`setsockopt`设置相关信息，广播地址需要根据本地IP进行配置，即`xxx.xxx.xxx.255`

- `接收广播端`需要绑定广播地址或设置为接收任意地址消息

- 接收端在连入时，已经过去的消息将不被接收

  ![image-20211204212615592](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211204212615592.png)

### 实例：广播

#### 服务端（发送广播端）

```c
#include <stdio.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#define BROADCASTIP "192.168.213.255"
#define PORT 6789

int main()
{
    // 1. 创建通信套接字
    int connfd = socket(PF_INET, SOCK_DGRAM, 0);

    // 2.设置广播属性
    int op = 1;
    setsockopt(connfd, SOL_SOCKET, SO_BROADCAST, &op, sizeof(op));

    // 3.创建一个广播的地址
    struct sockaddr_in broad_addr;
    broad_addr.sin_family = AF_INET;
    broad_addr.sin_port = htons(PORT);
    inet_pton(AF_INET, BROADCASTIP, &broad_addr.sin_addr.s_addr);

    // 4. 通信
    int num = 0;
    while (1) {
        char sendBuf[128];
        sprintf(sendBuf, "hello, client....%d", num++);
        // 发送数据
        sendto(connfd, sendBuf, strlen(sendBuf) + 1, 0, (struct sockaddr *)&broad_addr, sizeof(broad_addr));
        printf("广播的数据：%s\n", sendBuf);
        sleep(1);
    }
    close(connfd);
    return 0;
}
```

#### 客户端（接收广播端）

```c
#include <stdio.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#define BROADCASTIP "192.168.213.255"
#define PORT 6789

int main()
{
    // 1. 创建通信套接字
    int connfd = socket(PF_INET, SOCK_DGRAM, 0);

    // 2.客户端绑定通信的IP和端口
    struct sockaddr_in addr;
    addr.sin_family = AF_INET;
    addr.sin_port = htons(PORT);
    // 设置为接收任意网址信息或指定多播地址
    // addr.sin_addr.s_addr = INADDR_ANY;
    inet_pton(AF_INET, BROADCASTIP, &addr.sin_addr.s_addr);

    // 3. 将信息进行绑定
    int ret = bind(connfd, (struct sockaddr *)&addr, sizeof(addr));
    if(ret == -1) {
        perror("bind");
        exit(-1);
    }
    // 4. 通信
    while (1) {
        char buf[128];
        // 接收数据
        int num = recvfrom(connfd, buf, sizeof(buf), 0, NULL, NULL);
        printf("server say : %s\n", buf);
    }
    close(connfd);
    return 0;
}
```

## 组播(多播）

### 简介

- 组播既可以用于局域网，也可以用于广域网
- 客户端需要加入多播组，才能接收到多播的数据

> 单播地址标识单个 IP 接口，广播地址标识某个子网的所有 IP 接口，多播地址标识一组 IP 接口
>
> 单播和广播是寻址方案的两个极端（要么单个要么全部），多播则意在两者之间提供一种折中方案
>
> 多播数据报只应该由对它感兴趣的接口接收，也就是说由运行相应多播会话应用系统的主机上的接口接收。另外，广播一般局限于局域网内使用，而多播则既可以用于局域网，也可以跨广域网使用

![image-20211204212840626](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211204212840626.png)

### 方法

- 通过设置`setsockopt`函数，服务器和客户端都需要进行设置
- `int setsockopt(int sockfd, int level, int optname, const void *optval, socklen_t optlen); `
- 服务端：设置多播的信息，外出接口
  - `sockfd`：通信套接字
  - `level`：设置为`IPPROTO_IP`
  - `optname`：设置为`IP_MULTICAST_IF`
  - `optval`：`struct in_addr`类型
  - `optlen`：optval的大小
- 客户端：加入多播组
  - `sockfd`：通信套接字
  - `level`：设置为`IPPROTO_IP`
  - `optname`：设置为`IP_ADD_MEMBERSHIP`
  - `optval`：`struct ip_mreq`类型
  - `optlen`：optval的大小

```c
typedef uint32_t in_addr_t; 
struct in_addr { 
    in_addr_t s_addr; 
};

struct ip_mreq { 
    /* IP multicast address of group. */ 
    struct in_addr imr_multiaddr; // 组播的IP地址 
    /* Local IP address of interface. */ 
    struct in_addr imr_interface; // 本地的IP地址 
};
```

### 注意事项

- 服务端通过`setsockopt`设置`optval`时，需要指定多播地址，即`239.0.0.0~239.255.255.255`其中一个即可

![image-20211204220128304](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211204220128304.png)

### 实例：组播

#### 服务端

```c
#include <stdio.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#define MULTIIP "239.0.0.10"
#define PORT 6789

int main()
{
    // 1. 创建通信套接字
    int connfd = socket(PF_INET, SOCK_DGRAM, 0);

    // 2.设置多播属性
    struct in_addr op;
    // 初始化多播地址
    inet_pton(AF_INET, MULTIIP, &op.s_addr);
    setsockopt(connfd, IPPROTO_IP, IP_MULTICAST_IF, &op, sizeof(op));

    // 3.初始化客户端的地址信息
    struct sockaddr_in cliaddr;
    cliaddr.sin_family = AF_INET;
    cliaddr.sin_port = htons(PORT);
    inet_pton(AF_INET, MULTIIP, &cliaddr.sin_addr.s_addr);

    // 4. 通信
    int num = 0;
    while (1) {
        char sendBuf[128];
        sprintf(sendBuf, "hello, client....%d", num++);
        // 发送数据
        sendto(connfd, sendBuf, strlen(sendBuf) + 1, 0, (struct sockaddr *)&cliaddr, sizeof(cliaddr));
        printf("多播的数据：%s\n", sendBuf);
        sleep(1);
    }
    close(connfd);
    return 0;
}
```

#### 客户端

```c
#include <stdio.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#define MULTIIP "239.0.0.10"
#define PORT 6789

int main()
{
    // 1. 创建通信套接字
    int connfd = socket(PF_INET, SOCK_DGRAM, 0);

    // 2.客户端绑定通信的IP和端口
    struct sockaddr_in addr;
    addr.sin_family = AF_INET;
    addr.sin_port = htons(PORT);
    // 设置为接收任意网址信息或指定多播地址
    // addr.sin_addr.s_addr = INADDR_ANY;
    inet_pton(AF_INET, MULTIIP, &addr.sin_addr.s_addr);

    // 3. 将信息进行绑定
    int ret = bind(connfd, (struct sockaddr *)&addr, sizeof(addr));
    if(ret == -1) {
        perror("bind");
        exit(-1);
    }

    // 4. 加入多播组
    // 设置多播属性
    struct ip_mreq op;
    inet_pton(AF_INET, MULTIIP, &op.imr_multiaddr.s_addr);
    op.imr_interface.s_addr = INADDR_ANY;
    // 加入多播组
    setsockopt(connfd, IPPROTO_IP, IP_ADD_MEMBERSHIP, &op, sizeof(op));

    // 5. 通信
    while (1) {
        char buf[128];
        // 接收数据
        int num = recvfrom(connfd, buf, sizeof(buf), 0, NULL, NULL);
        printf("server say : %s\n", buf);
    }
    close(connfd);
    return 0;
}
```

## 本地套接字通信

### 简介

- 本地套接字的作用：本地的进程间通信，包括`有关系的进程通信(父子进程)`和`没有关系的进程间通信`
- 本地套接字实现流程和网络套接字类似，一般采用`TCP的通信流程`

### 通信流程

- 服务端
  1. 创建监听的套接字：`int lfd = socket(AF_UNIX/AF_LOCAL, SOCK_STREAM, 0);`
  2. 监听的套接字绑定本地的套接字文件：`bind(lfd, addr, len); `，绑定成功之后，指定的`sun_path`中的套接字文件会自动生成
  3. 监听：`listen(lfd, 100);`
  4. 等待并接受连接请求：`int cfd = accept(lfd, &cliaddr, len);`
  5. 通信
     - 接收数据：`read/recv`
     - 发送数据：`write/send`
  6. 关闭连接：`close()`
- 客户端
  1. 创建通信的套接字：`int cfd = socket(AF_UNIX/AF_LOCAL, SOCK_STREAM, 0); `
  2. 监听的套接字绑定本地的IP端口：`bind(cfd, &addr, len); `，绑定成功之后，指定的sun_path中的套接字文件会自动生成
  3. 连接服务器：`connect(fd, &serveraddr, sizeof(serveraddr));`
  4. 通信
     - 接收数据：`read/recv`
     - 发送数据：`write/send`
  5. 关闭连接：`close()`

### 注意事项

- 地址结构体为：`struct sockaddr_un`类型

  ```c
  // 头文件: sys/un.h 
  #define UNIX_PATH_MAX 108 
  struct sockaddr_un { 
      sa_family_t sun_family; // 地址族协议 af_local 
      char sun_path[UNIX_PATH_MAX]; // 套接字文件的路径, 这是一个伪文件, 大小永远=0 
  };
  ```

- 使用`unlink`解除占用：本地套接字通信通过文件，如果不用unlink解除占用，则会出现"bind: Address already in use"

### 实例：本地进程间通信

#### 服务端

```c
#include <stdio.h>
#include <arpa/inet.h>
#include <sys/un.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

int main()
{
    // 本地套接字通信通过文件，如果不用unlink解除占用，则会出现"bind: Address already in use"
    unlink("server.sock");
    // 1. 创建监听套接字
    int listenfd = socket(PF_LOCAL, SOCK_STREAM, 0);
    if (listenfd == -1) {
        perror("socket");
        exit(-1);
    }
    // 2. 绑定本地信息
    struct sockaddr_un server_addr;
    server_addr.sun_family = AF_LOCAL;
    strcpy(server_addr.sun_path, "server.sock"); 
    int ret = bind(listenfd, (struct sockaddr*)&server_addr, sizeof(server_addr));
    if (ret == -1) {
        perror("bind");
        exit(-1);
    }
    // 3. 监听
    ret = listen(listenfd, 8);
    if (ret == -1) {
        perror("listen");
        exit(-1);
    }
    // 4. 接收连接
    struct sockaddr_un client_addr;
    int client_addr_len = sizeof(client_addr);
    client_addr.sun_family = AF_LOCAL;
    strcpy(server_addr.sun_path, "client.sock");
    int connfd = accept(listenfd, (struct sockaddr*)&client_addr, &client_addr_len);
    if (connfd == -1) {
        perror("connect");
        exit(-1);
    }
    // 5. 通信
    while (1) {
        // 接收信息
        char buf[1024];
        int buf_len = recv(connfd, buf, sizeof(buf), 0);
        if (buf_len == -1) {
            perror("recv");
            exit(-1);
        } else if (buf_len == 0) {
            printf("client close...\n");
            break;
        } else {
            printf("client say : %s\n", buf);
            // 发送信息
            send(connfd, buf, strlen(buf) + 1, 0);
        }
    }
    // 6. 关闭套接字
    close(connfd);
    close(listenfd);
    return 0;
}
```

#### 客户端

```c
#include <stdio.h>
#include <arpa/inet.h>
#include <sys/un.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

int main()
{
    // 本地套接字通信通过文件，如果不用unlink解除占用，则会出现"bind: Address already in use"
    unlink("client.sock");
    // 1. 创建通信套接字
    int connfd = socket(PF_LOCAL, SOCK_STREAM, 0);
    if (connfd == -1) {
        perror("socket");
        exit(-1);
    }
    // 2. 绑定
    struct sockaddr_un client_addr;
    client_addr.sun_family = AF_LOCAL;
    strcpy(client_addr.sun_path, "client.sock");
    int ret = bind(connfd, (struct sockaddr*)&client_addr, sizeof(client_addr));
    if (ret == -1) {
        perror("bind");
        exit(-1);
    }
    // 3. 建立连接
    struct sockaddr_un server_addr;
    server_addr.sun_family = AF_LOCAL;
    strcpy(server_addr.sun_path, "server.sock");
    ret = connect(connfd, (struct sockaddr*)&server_addr, sizeof(server_addr));
    if (ret == -1) {
        perror("connect");
        exit(-1);
    }
    int num = 0;
    // 5. 通信
    while (1) {
        // 发送信息
        char buf[1024];
        sprintf(buf, "the data is %d", num++);
        send(connfd, buf, strlen(buf) + 1, 0);
        // 接收信息
        int buf_len = recv(connfd, buf, sizeof(buf), 0);
        if (buf_len == -1) {
            perror("recv");
            exit(-1);
        } else if (buf_len == 0) {
            printf("server close...\n");
            break;
        } else {
            printf("server say : %s\n", buf);
        }
        sleep(1);
    }

    // 6. 关闭套接字
    close(connfd);
    return 0;
}
```

# 阻塞/非阻塞 & 同步/异步

- 一个典型的网络IO接口调用，分为两个阶段，分别是`数据就绪` 和 `数据读写`

- `数据就绪阶段`分为`阻塞`和`非阻塞`

  - 阻塞：阻塞当前线程，直到满足条件
  - 非阻塞：直接返回，等满足条件时再通知

- `数据读写阶段`分为`同步`和`异步`

  - 同步：当A向B请求调用一个网络IO接口时(或者调用某个业务逻辑API接口时)，**数据的读写都是由请求方A自己来完成的(不管是阻塞还是非阻塞)**
  - 异步：A向B请求调用一个网络IO接口时(或者调用某个业务逻辑API接口时)，**向B传入请求的事件以及事件发生时通知的方式，A就可以处理其它逻辑了**，当B监听到事件处理完成后，会用事先约定好的通知方式，通知A处理结果

- 小结

  > 陈硕：在处理 IO 的时候，阻塞和非阻塞都是同步 IO，只有使用了特殊的 API 才是异步 IO

  ![image-20211209185616260](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211209185616260.png)

- 图示说明

  ![image-20211209185734047](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211209185734047.png)

  - `sockfd`对应操作系统中的TCP接收缓冲区
  - `recv`默认阻塞，直到读到数据才往下执行，如果设置为非阻塞，那么就应该通过返回值判断
    - `size == -1`：说明读取出错了，但有几种例外需要判断，如产生了`EINTR`(信号捕捉回收子进程资源时产生`SIGCHLD`导致这个信号)，`EAGAIN/EWOULDBLOCK`信号
    - `size == 0`：读到文件末尾，即对方连接已关闭
    - `size > 0`：读到了大小为`size`的数据

- 参考

  - [linux中对errno是EINTR的处理](https://blog.csdn.net/hnlyyk/article/details/51444617)
  - [Linux中的EAGAIN含义](https://www.cnblogs.com/pigerhan/archive/2013/02/27/2935403.html)

# Unix/Linux上的I/O模型

## 阻塞(BIO, blocking)

- 调用者调用了某个函数，**等待这个函数返回，期间什么也不做**，不停的去检查这个函数有没有返回，必须等这个函数返回才能进行下一步动作

![image-20211209201202971](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211209201202971.png)

## 非阻塞(NIO, non-blocking)

- 非阻塞等待，**每隔一段时间就去检测IO事件是否就绪，没有就绪就可以做其他事**
- 非阻塞 I/O 执行系统调用总是立即返回，不管事件是否已经发生
- 若事件没有发生，则返回-1，此时可以根据 `errno` 区分这两种情况，对于`accept`，`recv` 和 `send`，事件未发生时，`errno` 通常被设置成 `EAGAIN`

![image-20211209201425774](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211209201425774.png)

## IO 复用(IO multiplexing)

- Linux 用 `select/poll/epoll` 函数实现 IO 复用模型，这些函数也会使进程阻塞，但是**和阻塞IO所不同的是这些函数可以同时阻塞多个IO操作**
- 可以同时对多个读操作、写操作的IO函数进行检测。直到有数据可读或可写时，才真正调用IO操作函数

![image-20211209201547104](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211209201547104.png)

## 信号驱动(signal-driven)

- Linux 用套接口进行信号驱动 IO，安装一个信号处理函数，**进程继续运行并不阻塞，当IO事件就绪，进程收到SIGIO 信号，然后处理 IO 事件**
- 下图中，内核在第一个阶段是异步，在第二个阶段是同步
- 与非阻塞IO的区别在于它提供了消息通知机制，不需要用户进程不断的轮询检查，减少了系统API的调用次数，提高了效率

![image-20211209201744086](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211209201744086.png)

## 异步(asynchronous)

- Linux中，可以调用 `aio_read` 函数告诉内核**描述字缓冲区指针和缓冲区的大小、文件偏移及通知的方式**，然后立即返回，当内核将数据拷贝到缓冲区后，再通知应用程序

```c
/* Asynchronous I/O control block. */ 
struct aiocb { 
    int aio_fildes; /* File desriptor. */ 
    int aio_lio_opcode; /* Operation to be performed. */ 
    int aio_reqprio; /* Request priority offset. */ 
    volatile void *aio_buf; /* Location of buffer. */ 
    size_t aio_nbytes; /* Length of transfer. */ 
    struct sigevent aio_sigevent; /* Signal number and value. */ 
    
    /* Internal members. */ 
    struct aiocb *__next_prio; 
    int __abs_prio; 
    int __policy; 
    int __error_code; 
    __ssize_t __return_value; 
    
#ifndef __USE_FILE_OFFSET64 
    __off_t aio_offset; /* File offset. */ 
    char __pad[sizeof (__off64_t) - sizeof (__off_t)]; 
#else 
    __off64_t aio_offset; /* File offset. */ 
#endif 
    char __glibc_reserved[32]; 
};
```

![image-20211209202158250](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20211209202158250.png)


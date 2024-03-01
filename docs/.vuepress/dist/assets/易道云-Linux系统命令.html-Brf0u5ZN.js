import{_ as p,o as n,c as s,e as t}from"./app-W42XCaNm.js";const r={},o=t('<h1 id="linux系统精讲" tabindex="-1"><a class="header-anchor" href="#linux系统精讲"><span>Linux系统精讲</span></a></h1><h2 id="linux简介" tabindex="-1"><a class="header-anchor" href="#linux简介"><span>Linux简介</span></a></h2><h3 id="系统介绍" tabindex="-1"><a class="header-anchor" href="#系统介绍"><span>系统介绍</span></a></h3><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524115916655.png" alt="image-20230524115916655"></p><p>族谱</p><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524115933548.png" alt="image-20230524115933548"></p><p>知名的Linux系统</p><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524115948261.png" alt="image-20230524115948261"></p><h3 id="为什么要学习linux" tabindex="-1"><a class="header-anchor" href="#为什么要学习linux"><span>为什么要学习Linux</span></a></h3><p>Linux 系统在服务器市场的占有率（2016 年）</p><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524115811461.png" alt="image-20230524115811461"></p><p>世界上 500 个最快的超级计算机 90％以上运行 Linux 发行版或变种，包括最快的前 10名超级计算机运行的都是基于 Linux 内核的操作系统。Linux 也广泛应用在嵌入式系统上，如手机（Mobile Phone）、平板电脑（Tablet）、路由器（Router）、电视（TV）和电子游戏机等。在移动设备上广泛使用的 Android 操作系统就是创建在 Linux 内核之上。</p><h3 id="linux的优点" tabindex="-1"><a class="header-anchor" href="#linux的优点"><span>Linux的优点</span></a></h3><ol><li>开源免费、可自行修改，对其他开源软件兼容性良好</li><li>多用户访问友好、权限管理方便快捷</li><li>内存管理优秀，可以长期连续运行，系统占用内存低</li><li>工具功能库完善，部署安装方便</li></ol><h2 id="linux基本命令" tabindex="-1"><a class="header-anchor" href="#linux基本命令"><span>Linux基本命令</span></a></h2><h3 id="ls命令" tabindex="-1"><a class="header-anchor" href="#ls命令"><span>ls命令</span></a></h3><p>命令 ls 是 list 的缩写</p><p>其作用是列出指定位置的文件和文件夹</p><p>如果没有指定，默认是列出当前位置的文件或者文件夹</p><p>常用的参数有</p><p><strong>-a</strong> <strong>列出所有的文件或者文件夹</strong></p><p>在 Linux 系统里面，以 . 开头的文件或者文件夹，一般会被默认视为隐藏的如果想要查看这些隐藏文件或者文件夹，最好使用-a 参数</p><p><strong>-l</strong> <strong>列出详细信息</strong></p><p>默认 ls 只显示名字，并不显示详细信息</p><p>加了该参数后，除了会显示名称以外，还会显示文件的权限、所属用户、分组、大小、修改</p><p>日期</p><p><strong>-h</strong> <strong>增加可读性</strong></p><p>默认文件是按照字节为单位显示大小的</p><p>加了这个参数后，会附带 K、M、G、T 等大小后缀</p><p>K 表示千字节 M 表示兆字节 G 表示 1024 兆 T 表示 1024G</p><p>虽然精准度下降了，但是更容易阅读</p><p><strong>-R</strong> <strong>递归访问</strong></p><p>默认是显示当前目录下的文件和文件夹</p><p>带上 R 参数后，如果当前目录下有其他文件夹</p><p>则会将该文件夹下面的文件和文件夹也显示出来</p><p>所以该参数会显示指定位置下的所有文件和文件夹</p><p><strong>-Q</strong> <strong>文件名用双引号包裹</strong></p><p>这个参数是为了防止某些文件或者文件夹的末尾是空格字符</p><p>这样，可以通过双引号，看到文件名实际的长度</p><h3 id="echo命令" tabindex="-1"><a class="header-anchor" href="#echo命令"><span>echo命令</span></a></h3><p><strong>显示字符串</strong></p><p>echo hello world</p><p>或者 echo “hello world”</p><p><strong>显示转义字符</strong></p><p>echo \\” 或者 \\’ \\`</p><p><strong>显示变量</strong></p><p>echo $PATH</p><p><strong>显示换行</strong> \\ <strong>不换行</strong></p><p>echo -e “\\n”换行</p><p>echo -e “\\c”不换行</p><p><strong>显示原样字符串</strong></p><p>echo &#39;$PATH&#39;</p><p><strong>显示命令结果</strong></p><p>echo <code>data</code></p><h3 id="cd命令" tabindex="-1"><a class="header-anchor" href="#cd命令"><span>cd命令</span></a></h3><p>cd 目标路径</p><p>change directory</p><p>路径可以是绝对路径，也可以是相对路径除此之外，还有一些特别的符号</p><p>比如.表示当前目录</p><p>比如..表示上一级目录（也就是父目录）</p><p>比如~表示当前用户的用户目录</p><p>注意在 root 用户和普通用户条件下，这个符号是有不同含义的</p><p>普通用户~一般是/home/用户名文件夹</p><p>但是 root 用户对应的~是/root 文件夹</p><h3 id="head命令" tabindex="-1"><a class="header-anchor" href="#head命令"><span>head命令</span></a></h3><p><strong>-c n</strong> <strong>显示头部的指定</strong> <strong>n</strong> <strong>个字符</strong></p><p><strong>-n x</strong> <strong>显示头部的指定的</strong> <strong>x</strong> <strong>行</strong></p><p><strong>-v</strong> <strong>显示文件名</strong></p><p><strong>-q</strong> <strong>不显示文件名（默认）</strong></p><h3 id="tail命令" tabindex="-1"><a class="header-anchor" href="#tail命令"><span>tail命令</span></a></h3><p>简单命令</p><p>显示当前目录 pwd</p><p>清空窗口 clear</p><p>**&gt;**将左边命令的输出，<strong>输入</strong>到右边的文件或者命令</p><p>如果右边的文件不存在，则创建一个</p><p>**&gt;&gt;**将左边命令的输出，<strong>追加</strong>到右边的文件</p><p>如果右边的文件不存在，则创建一个</p><p><strong>-f</strong> <strong>可以不断的更新尾部内容</strong></p><p><strong>-n</strong> <strong>显示尾部指定行数的内容</strong></p><p><strong>-c</strong> <strong>显示尾部指定字节的内容</strong></p><p><strong>-v</strong> <strong>显示文件名</strong></p><p><strong>-q</strong> <strong>不显示文件名（默认）</strong></p><h3 id="ps命令" tabindex="-1"><a class="header-anchor" href="#ps命令"><span>ps命令</span></a></h3><p>所有进程都是 init 进程的子进程或者孙进程</p><p><strong>-Al</strong> <strong>显示所有进程的详情和进程名称</strong></p><p><strong>-aux</strong> <strong>显示所有进程和其启动命令</strong></p><p><strong>数值项说明</strong></p><p>USER 进程所属用户</p><p>UID 进程所属用户 ID</p><p>PID 进程 ID</p><p>%CPU CPU 占用率</p><p>%MEM 内存占用率</p><p>VSZ 虚拟内存占用大小（其中部分可能在交换文件中）</p><p>RSS 实际内存占用大小（RAM 占用的大小）</p><p>TTY 对应的控制台设备</p><p>TIME 进程执行的时间</p><p>START 进程开始执行的世界</p><p>COMMAND 进程启动执行的命令（带参数）</p><p>CMD 进程启动执行的命令（不带参数）</p><p>S/STAT 状态 S 休眠 R 运行 D 阻塞 Z 僵尸进程 T 暂停</p><p>PRI 优先级 数值越低，优先级越高，甚至可能为负数</p><h3 id="cp命令" tabindex="-1"><a class="header-anchor" href="#cp命令"><span>cp命令</span></a></h3><p>copy 复制的缩写</p><p>命令用法：cp [参数] 源文件/文件夹 目标文件/文件夹</p><p>[]表示可选</p><p>sudo 命令 提权（提升权限）mkdir 创建文件夹</p><p><strong>-a：带属性复制</strong></p><p>此选项通常在复制目录时使用，它保留链接、文件属性，并复制目录下的所有内容。其作用</p><p>等于 dpR 参数组合。</p><p><strong>-d</strong>：复制时保留链接</p><p>这里所说的链接相当于 Windows 系统中的快捷方式。</p><p><strong>-f</strong>：强制覆盖</p><p>覆盖已经存在的目标文件而不给出提示</p><p>Ubuntu 默认是强制覆盖</p><p><strong>-i</strong>：覆盖提示</p><p>与-f 选项相反，在覆盖目标文件之前给出提示，要求用户确认是否覆盖，回答&quot;y&quot;时目标文</p><p>件将被覆盖。</p><p><strong>-p</strong>：带权限复制</p><p>除复制文件的内容外，还把修改时间和访问权限也复制到新文件中。</p><p><strong>-r</strong>：文件夹复制</p><p>若给出的源文件是一个目录文件，此时将复制该目录下所有的子目录和文件。</p><p><strong>-l</strong>：创建链接</p><p>不复制文件，只是生成链接文件。</p><p>只在部分系统有效</p><p>在 Ubuntu 下没有效果</p><h3 id="rm命令" tabindex="-1"><a class="header-anchor" href="#rm命令"><span>rm命令</span></a></h3><p>命令 remove 的缩写，删除</p><p>补充命令：</p><p>chmod [-r] 6777（八进制数） 文件/文件夹</p><p>110(提权/改组) 111（读写执行） 111（当前用户） 111（其他用户）</p><p><strong>-i</strong> <strong>删除确认</strong></p><p>每个被删除的文件都需要确认</p><p><strong>-f</strong> <strong>强制删除</strong></p><p>无需确认就会删除指定的文件</p><p><strong>-r</strong> <strong>目录删除</strong></p><p>删除指定文件夹下的所有文件和子文件夹</p><h2 id="开发环境搭建" tabindex="-1"><a class="header-anchor" href="#开发环境搭建"><span>开发环境搭建</span></a></h2><h3 id="gcc安装" tabindex="-1"><a class="header-anchor" href="#gcc安装"><span>gcc安装</span></a></h3><p>命令：</p><p>1 设置 root 密码：sudo passwd root</p><p>注意，请记住这个密码，后面还需要使用</p><p>2 进入 root 账户 su</p><p>3 安装编译器：apt-get install gcc g++</p><p>4 查看当前的 gcc g++版本</p><p>gcc --version</p><p>g++ --version</p><p>5 验证一下</p><p>g++ -o test main.cpp</p><p>./test</p><h3 id="ssh服务的安装" tabindex="-1"><a class="header-anchor" href="#ssh服务的安装"><span>ssh服务的安装</span></a></h3><p>这个服务用户后续的代码编写和远程运行、调试命令：</p><p>1 安装服务程序：sudo apt install openssh-server</p><p>2 安装客户端程序：sudo apt install openssh-client</p><p>3 修改配置文件：/etc/ssh/sshd_config</p><p>LoginGraceTime 2m</p><p><u>PermitRootLogin yes</u></p><p>PubkeyAuthentication yes</p><p>PasswordAuthentication yes</p><p>ChallengeResponseAuthentication no</p><p>UsePAM yes</p><p>X11Forwarding yes</p><p>PrintMotd no</p><p>AcceptEnv LANG LC_*</p><p>Subsystem sftp /usr/lib/openssh/sftp-server</p><p>下划线内容是要修改的地方</p><p>其他地方请自行比对</p><p>如果不一致，请参考上面的文档</p><p>4 启动服务</p><p>可以直接输入命令行：</p><p>C:\\Windows\\System32\\bash.exe -c &quot;sudo service ssh start&quot;</p><p>进行启动</p><p>也可以建立一个 bat 文件</p><p>将上面这个命令写入其中</p><p>然后放入文件夹</p><p>C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\StartUp</p><p>或者</p><p>C:\\Users\\你的用户名\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup</p><p>点击开始菜单，将鼠标停在用户名图标处</p><p>用户名会自动展示出来</p><p>这样开机后就可以自动启动 ssh 服务了</p>',180),e=[o];function a(i,l){return n(),s("div",null,e)}const h=p(r,[["render",a],["__file","易道云-Linux系统命令.html.vue"]]),c=JSON.parse('{"path":"/view/note/Linux/%E6%98%93%E9%81%93%E4%BA%91-Linux%E7%B3%BB%E7%BB%9F%E5%91%BD%E4%BB%A4.html","title":"Linux系统精讲","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Linux简介","slug":"linux简介","link":"#linux简介","children":[{"level":3,"title":"系统介绍","slug":"系统介绍","link":"#系统介绍","children":[]},{"level":3,"title":"为什么要学习Linux","slug":"为什么要学习linux","link":"#为什么要学习linux","children":[]},{"level":3,"title":"Linux的优点","slug":"linux的优点","link":"#linux的优点","children":[]}]},{"level":2,"title":"Linux基本命令","slug":"linux基本命令","link":"#linux基本命令","children":[{"level":3,"title":"ls命令","slug":"ls命令","link":"#ls命令","children":[]},{"level":3,"title":"echo命令","slug":"echo命令","link":"#echo命令","children":[]},{"level":3,"title":"cd命令","slug":"cd命令","link":"#cd命令","children":[]},{"level":3,"title":"head命令","slug":"head命令","link":"#head命令","children":[]},{"level":3,"title":"tail命令","slug":"tail命令","link":"#tail命令","children":[]},{"level":3,"title":"ps命令","slug":"ps命令","link":"#ps命令","children":[]},{"level":3,"title":"cp命令","slug":"cp命令","link":"#cp命令","children":[]},{"level":3,"title":"rm命令","slug":"rm命令","link":"#rm命令","children":[]}]},{"level":2,"title":"开发环境搭建","slug":"开发环境搭建","link":"#开发环境搭建","children":[{"level":3,"title":"gcc安装","slug":"gcc安装","link":"#gcc安装","children":[]},{"level":3,"title":"ssh服务的安装","slug":"ssh服务的安装","link":"#ssh服务的安装","children":[]}]}],"git":{},"filePathRelative":"view/note/Linux/易道云-Linux系统命令.md","excerpt":"\\n<h2>Linux简介</h2>\\n<h3>系统介绍</h3>\\n<p><img src=\\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524115916655.png\\" alt=\\"image-20230524115916655\\"></p>\\n<p>族谱</p>\\n<p><img src=\\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524115933548.png\\" alt=\\"image-20230524115933548\\"></p>"}');export{h as comp,c as data};

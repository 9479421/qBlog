<template><div><h1 id="vs修改编码格式为utf-8" tabindex="-1"><a class="header-anchor" href="#vs修改编码格式为utf-8"><span>VS修改编码格式为UTF-8</span></a></h1>
<ol>
<li>
<p>对于国内用户来说，大多设置 Windows 操作系统语言为简体中文(编码为 GBK 或 GB2312)，由此导致 Visual Studio2017 默认采用 GBK/GB2312 编码格式，其创建的项目文件(.cpp,.h 等)都采用 GBK/GB2312 编码，可能会给代码的移植性带来一点阻碍（主要是中文乱码），笔者就经常用 VS 运行 github 等的项目然后出现如下警告或者乱码：</p>
<p>warning C4819: 该文件包含不能在当前代码页(936)中表示的字符。请将该文件保存为 Unicode 格式以防止数据丢失</p>
</li>
<li>
<p>在此，建议统一使用 UTF-8（无 bom）编码格式，那么具体要怎么修改呢？</p>
</li>
</ol>
<blockquote>
<p>使用 VS2017 的“高级保存选项” 由于这个选项在 vs2017 中是默认隐藏的，需要手动调出来。具体操作方法如下：<br>
1、单击“工具”➡“自定义”，弹出“自定义”对话框。 2、单击“命令”标签 ➡ 进入“命令”选项卡。 3、“菜单栏”<a href="https://so.csdn.net/so/search?q=%E4%B8%8B%E6%8B%89%E5%88%97%E8%A1%A8&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">下拉列表<ExternalLinkIcon/></a>➡ 选择“文件”选项。<br>
4、单击“添加命令”➡ 弹出“添加命令”对话框。 5、在“类别”列表中，选择“文件”选项；在“命令”列表中，选择“高级保存选项”选项。<br>
6、单击“确定”按钮，关闭“添加命令”对话框。<br>
7、选中“控件”列表中的“高级保存选项”选项，单击“上移”或者“下移”按钮，可以调整该命令的位置。<br>
8、单击“关闭”按钮，完成“高级保存选项”命令的添加操作</p>
</blockquote>
<ol start="3">
<li>然后选中高级保存选项，弹出的对话框可以选择编码 utf-8</li>
</ol>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/ead68cbfbfa1418ba4bf56d251bc5c2e.png" alt="在这里插入图片描述"><br>
<img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/c4031ab7443b401a92579d963042ef09.png" alt="在这里插入图片描述"></p>
<ol start="4">
<li>使用 ForceUTF8 插件</li>
</ol>
<blockquote>
<p>工具 ➡ 拓展和更新 ➡ 联机 ➡ 搜索框输入“ForceUTF8”➡ 下载安装<br>
安装此插件后，所有文件均会以<a href="https://so.csdn.net/so/search?q=utf-8%E7%BC%96%E7%A0%81&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">utf-8 编码<ExternalLinkIcon/></a>格式保存，方便省心。</p>
</blockquote>
<ol start="5">
<li>最后非常重要的一步，那就是指定使用 utf-8 编译！</li>
</ol>
<blockquote>
<p>选中当前项目——右键属性——配置属性——C/C++——命令行——输入/utf-8 只有完成这一步，warning 信息才会真正消失。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/e52d26079b344d21a3bfef5d659cdf33.png" alt="在这里插入图片描述"></p>
</blockquote>
</div></template>



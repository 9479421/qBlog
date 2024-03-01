# vs未能正确加载XX包的解决方法

> 转载

可以在cmd里切换到安装目录下的Common7/IDE，然后运行devenv /ResetSettings

比如我的地址是

D:\Program Files\Microsoft Visual Studio 10.0\Common7\IDE

 

具体步骤：

开始->运行->输入cmd 按运行

出来黑色DOS框。

（以下步骤因人而异，要看你的C++装在哪个盘了。我是D盘所以按照D盘的说）

输入d:按回车（如果你的是C盘 那就c: 按回车 以下差异不一一说明）

自动跳入d盘

输入cd Program Files\Microsoft Visual Studio 10.0\Common7\IDE

 

按回车

自动跳入 

IDE文件夹

再最后输入devenv /ResetSettings 按回车

 

VS2010自动初始化设置，自动重启。然后一切搞定~

C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE>devenv /ResetSettings
<template><div><h1 id="vs未能正确加载xx包的解决方法" tabindex="-1"><a class="header-anchor" href="#vs未能正确加载xx包的解决方法"><span>vs未能正确加载XX包的解决方法</span></a></h1>
<blockquote>
<p>转载</p>
</blockquote>
<p>可以在cmd里切换到安装目录下的Common7/IDE，然后运行devenv /ResetSettings</p>
<p>比如我的地址是</p>
<p>D:\Program Files\Microsoft Visual Studio 10.0\Common7\IDE</p>
<p>具体步骤：</p>
<p>开始-&gt;运行-&gt;输入cmd 按运行</p>
<p>出来黑色DOS框。</p>
<p>（以下步骤因人而异，要看你的C++装在哪个盘了。我是D盘所以按照D盘的说）</p>
<p>输入d:按回车（如果你的是C盘 那就c: 按回车 以下差异不一一说明）</p>
<p>自动跳入d盘</p>
<p>输入cd Program Files\Microsoft Visual Studio 10.0\Common7\IDE</p>
<p>按回车</p>
<p>自动跳入</p>
<p>IDE文件夹</p>
<p>再最后输入devenv /ResetSettings 按回车</p>
<p>VS2010自动初始化设置，自动重启。然后一切搞定~</p>
<p>C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE&gt;devenv /ResetSettings</p>
</div></template>



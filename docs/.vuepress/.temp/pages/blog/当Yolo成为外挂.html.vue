<template><div><h1 id="当yolo成为外挂" tabindex="-1"><a class="header-anchor" href="#当yolo成为外挂"><span>当Yolo成为外挂</span></a></h1>
<blockquote>
<p>起因</p>
</blockquote>
<p>女朋友最近上课的时候老是喜欢玩《疯狂找东西》，对此我决定做一个针对这个游戏的外挂。</p>
<p>最初我浮现了2种思路，一种是对该APP进行Xposed HOOK，使得被找的物品直接被标注出来。另一种就是通过目标训练检测，在物品所在位置直接绘制方框。</p>
<p>此前我准备写一个象棋AI，需要检测棋子位置，并且通过引擎设计出最佳执棋线路，并且通用于所有象棋软件。结合这两个项目的需求，Yolo是一个比较好的检测方案。</p>
<blockquote>
<p>Yolo介绍</p>
</blockquote>
<blockquote>
<p>还在编写阶段，等待更新</p>
</blockquote>
<h2 id="标注图片" tabindex="-1"><a class="header-anchor" href="#标注图片"><span>标注图片</span></a></h2>
<h2 id="识别测试" tabindex="-1"><a class="header-anchor" href="#识别测试"><span>识别测试</span></a></h2>
<h2 id="安装yolo" tabindex="-1"><a class="header-anchor" href="#安装yolo"><span>安装Yolo</span></a></h2>
<p>从github上下载YoloV7源代码</p>
<p>安装依赖</p>
<p>pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple</p>
<p>测试识别</p>
<p>python detect.py --weights yolov7.pt --conf 0.25 --img-size 640 --source inference/images/horses.jpg</p>
<p>得到runs/detect目录下的识别图片</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240313171224308.png" alt="image-20240313171224308"></p>
<h2 id="初步训练" tabindex="-1"><a class="header-anchor" href="#初步训练"><span>初步训练</span></a></h2>
<p>训练了10张图片后，发现可以识别出棋子位置了，但是精确度极其低</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240316192757475.png" alt="image-20240316192757475"></p>
<h2 id="终极训练" tabindex="-1"><a class="header-anchor" href="#终极训练"><span>终极训练</span></a></h2>
<p>加大剂量，准备标注200-300张图片</p>
<h2 id="问题汇总" tabindex="-1"><a class="header-anchor" href="#问题汇总"><span>问题汇总</span></a></h2>
<blockquote>
<p>CUDA unavailable</p>
</blockquote>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240313140140510.png" alt="image-20240313140140510"></span></a></h3>
<p>原因是安装了CPU版本的torch</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240313140210912.png" alt="image-20240313140210912"></p>
<p>我们要根据显卡版本，安装GPU版本的torch</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240313142534062.png" alt="image-20240313142534062"></p>
<p>由此可见，可支持的最高CUDA版本为11.0，通过该网址https://pytorch.org/get-started/previous-versions/找到对应的pip安装命令。安装完GPU版本的torch问题就可以得到解决了。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240313144008011.png" alt="image-20240313144008011"></p>
<blockquote>
<p>ImportError: DLL load failed while importing _ufuncs: 页面文件太小，无法完成操作。</p>
</blockquote>
<p>parser.add_argument('--workers', type=int, default=4, help='maximum number of dataloader workers')</p>
<p>将多进程改成单进程(default=0)即可</p>
<blockquote>
<p>CUDA out of memory. Tried to allocate 2.05 GiB (GPU 0; 6.00 GiB total capacity; 531.78 MiB already allocated; 2.05 GiB free; 2.23 GiB reserved in total by PyTorch)</p>
</blockquote>
<p>parser.add_argument('--batch-size', type=int, default=16, help='total batch size for all GPUs')</p>
<p>减小--batch-size(default=1)</p>
</div></template>



<template><div><h1 id="当yolo成为外挂" tabindex="-1"><a class="header-anchor" href="#当yolo成为外挂"><span>当Yolo成为外挂</span></a></h1>
<blockquote>
<p>起因</p>
</blockquote>
<p>女朋友最近上课的时候老是喜欢玩《疯狂找东西》，对此我决定做一个针对这个游戏的外挂。</p>
<p>最初我浮现了2种思路，一种是对该APP进行Xposed HOOK，使得被找的物品直接被标注出来。另一种就是通过目标训练检测，在物品所在位置直接绘制方框。</p>
<p>此前我准备写一个象棋AI，需要检测棋子位置，通过引擎设计出最佳执棋线路，并且通用于所有象棋软件。结合这两个项目的需求，Yolo是一个比较好的检测方案。</p>
<h2 id="yolo介绍" tabindex="-1"><a class="header-anchor" href="#yolo介绍"><span>Yolo介绍</span></a></h2>
<p><em>YOLO（You Only Look Once）是一种基于深度神经网络的对象识别和定位算法，由Joseph Redmon等人在2015年提出。它的主要特点是运行速度很快，可以用于实时系统。在输入一张图片后，YOLO能够输出图片中所包含的对象以及每个对象的位置（通过包含该对象的矩形框来表示）。YOLO算法在目标检测领域具有显著的优势，特别是在需要实时处理的场景中，如视频监控、自动驾驶等领域，都有着广泛的应用前景。</em></p>
<h2 id="安装yolo" tabindex="-1"><a class="header-anchor" href="#安装yolo"><span>安装Yolo</span></a></h2>
<p>从github上下载YoloV7源代码</p>
<p>安装依赖</p>
<p>pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple</p>
<h2 id="测试识别" tabindex="-1"><a class="header-anchor" href="#测试识别"><span>测试识别</span></a></h2>
<p>python detect.py --weights yolov7.pt --conf 0.25 --img-size 640 --source inference/images/horses.jpg</p>
<p>得到runs/detect目录下的识别图片</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240313171224308.png" alt="image-20240313171224308"></p>
<h2 id="标注图片" tabindex="-1"><a class="header-anchor" href="#标注图片"><span>标注图片</span></a></h2>
<p>训练目标检测必须要有充分的训练集，也就是图片数量要够多，尽量要500张以上，多多益善，几千张更好。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240324003207172.png" alt="image-20240324003207172"></p>
<p>然后打开标注工具labelImg，设置好棋子分类就可以开始枯燥漫长的棋子标注工作了。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240324003317693.png" alt="image-20240324003317693"></p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240324003343232.png" alt="image-20240324003343232"></p>
<p>等图片全部标注完成后，我们会得到和图片对等数量的标记txt文件，记录了标注棋子的id以及坐标。</p>
<h2 id="训练配置" tabindex="-1"><a class="header-anchor" href="#训练配置"><span>训练配置</span></a></h2>
<p>拿到图片以及标记txt，我们去yolov7目录下新建一个文件夹1711185517（随便都可以），然后里面放入两个文件夹images和labels，分别对应图片和标记txt，在images和labels里又分别建立了train和val两个文件夹，分别存放训练和验证的文件，两者图片集可以保持一致。最后，在1711185517目录下还有两个文件train.txt和val.txt，里面分别存放了要被训练的图片url和要被验证的图片url合集。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240324003807563.png" alt="image-20240324003807563"></p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240324003929185.png" alt="image-20240324003929185"><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240324003945827.png" alt="image-20240324003945827"></p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240324011709293.png" alt=""><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240324011715725.png" alt="image-20240324011715725"></p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240324011826570.png" alt="image-20240324011826570"></p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240324011836515.png" alt="image-20240324011836515"></p>
<p>images里的train和val的图片，必须保证labels里有同名的txt对应这些图片。</p>
<p>最后在yolov7根目录下的data文件夹里，新建一个data1.yaml文件，用来配置刚刚设置好的训练图集信息。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240324004123358.png" alt="image-20240324004123358"></p>
<p>names对应的是标注的物品id，nc是物品分类数量，顺序必须保持一致不能有任何出错。</p>
<p>train和val分别对应训练图片集和验证图片集</p>
<p>最后配置train.py文件</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240324004327227.png" alt="image-20240324004327227"></p>
<p>--weight对应训练的pt文件，从yolov7的github首页选择下载即可。</p>
<p>--data对应刚刚配置好的yaml文件</p>
<p>--cfg对应的文件还要配置一个分类数量参数</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240324004458768.png" alt="image-20240324004458768"></p>
<p>至此为止所有配置便都OK了，剩下的就是执行train.py文件了。</p>
<h2 id="初步训练" tabindex="-1"><a class="header-anchor" href="#初步训练"><span>初步训练</span></a></h2>
<p>训练成功后在yolov7根目录下的runs/train/exp/weight下找到best.pt，便是我们训练出来的权重文件了，使用此文件执行detect.py就可以测试棋子图像识别了。</p>
<p>训练了10张图片后，发现可以识别出棋子位置了，但是精确度极其低</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240316192757475.png" alt="image-20240316192757475"></p>
<h2 id="一劳永逸" tabindex="-1"><a class="header-anchor" href="#一劳永逸"><span>一劳永逸</span></a></h2>
<p>因为编辑图片集以及对应的train.txt、val.txt文件过于麻烦，不可能每次训练了新图片后都要去手动添加新的图片url，于是我针对该需求使用C++写了一个快捷操作的软件。可以快速排序截图、自动生成训练集配置文件、以及批量改名等功能。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240324005402276.png" alt="image-20240324005402276"></p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240324005342828.png" alt="image-20240324005342828"></p>
<p>至此我们就可以继续愉快的增加训练集图片了。</p>
<h2 id="终极训练" tabindex="-1"><a class="header-anchor" href="#终极训练"><span>终极训练</span></a></h2>
<p>加大剂量，标注图片数量444张，观察效果。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240323200118375.png" alt="image-20240323200118375"></p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240323200155529.png" alt="image-20240323200155529"></p>
<p>可以看到置信度可以稳定达到百分之80以上，并且识别准确率百分之百，至此我们就可以识别出棋盘中每个棋子的位置。随后可以将棋局信息转为FEN，对接引擎或者自写象棋AI引擎，结合OCR图色识别、模拟按键等，就可以实现自动下棋、棋局分析、自动续盘等外挂功能。</p>
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
<p>pip install torch==1.9.1+cu102 torchvision==0.10.1+cu102 torchaudio==0.9.1 -f https://download.pytorch.org/whl/torch_stable.html</p>
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



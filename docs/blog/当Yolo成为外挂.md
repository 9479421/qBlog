---
title: 当Yolo成为外挂
date: 2024-03-14
category:
  - History
tag:
  - 人工智能
  - AI
  - windows
---

# 当Yolo成为外挂

> 起因

女朋友最近上课的时候老是喜欢玩《疯狂找东西》，对此我决定做一个针对这个游戏的外挂。

最初我浮现了2种思路，一种是对该APP进行Xposed HOOK，使得被找的物品直接被标注出来。另一种就是通过目标训练检测，在物品所在位置直接绘制方框。

此前我准备写一个象棋AI，需要检测棋子位置，并且通过引擎设计出最佳执棋线路，并且通用于所有象棋软件。结合这两个项目的需求，Yolo是一个比较好的检测方案。

> Yolo介绍





> 还在编写阶段，等待更新



## 标注图片







## 识别测试



## 安装Yolo

从github上下载YoloV7源代码

安装依赖

pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple

测试识别

python detect.py --weights yolov7.pt --conf 0.25 --img-size 640 --source inference/images/horses.jpg

得到runs/detect目录下的识别图片

![image-20240313171224308](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240313171224308.png)



## 初步训练

训练了10张图片后，发现可以识别出棋子位置了，但是精确度极其低

![image-20240316192757475](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240316192757475.png)

## 终极训练

加大剂量，准备标注200-300张图片





## 问题汇总

> CUDA unavailable

### ![image-20240313140140510](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240313140140510.png)

原因是安装了CPU版本的torch

![image-20240313140210912](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240313140210912.png)

我们要根据显卡版本，安装GPU版本的torch

![image-20240313142534062](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240313142534062.png)

由此可见，可支持的最高CUDA版本为11.0，通过该网址https://pytorch.org/get-started/previous-versions/找到对应的pip安装命令。安装完GPU版本的torch问题就可以得到解决了。

![image-20240313144008011](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240313144008011.png)

> ImportError: DLL load failed while importing _ufuncs: 页面文件太小，无法完成操作。

parser.add_argument('--workers', type=int, default=4, help='maximum number of dataloader workers')

将多进程改成单进程(default=0)即可

> CUDA out of memory. Tried to allocate 2.05 GiB (GPU 0; 6.00 GiB total capacity; 531.78 MiB already allocated; 2.05 GiB free; 2.23 GiB reserved in total by PyTorch)

parser.add_argument('--batch-size', type=int, default=16, help='total batch size for all GPUs')

减小--batch-size(default=1)

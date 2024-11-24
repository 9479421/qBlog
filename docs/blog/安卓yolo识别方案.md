---
title: 安卓yolo识别方案
date: 2024-08-19
category:
  - History
tag:
  - 人工智能
  - AI
  - Android
---

# 安卓yolo识别方案

在电脑中，将yolo训练后的pt模型文件转换成onnx，再使用C++/Java，调用微软提供的Onnxruntime库，就能轻松实现毫秒级别的对象检测。

针对如上解决方案我写过两个库：

https://github.com/9479421/EasyOnnxruntime

https://github.com/9479421/EasyOnnxruntime_Java

如今我将yolo技术矛头转向了手机领域，在性能皱缩的安卓平台上，又想实现毫秒级的识别，再使用onnxruntime的安卓版本开发库onnxruntime-android显然不能满足需求，在不魔改模型的情况下，经过我测试，一次识别需要好几秒才可以。在经历40小时的熬战后，我成功实现了安卓游戏AI外挂开发的同款技术栈来实现如上需求：YoloV8+ncnn

> ncnn 是腾讯优图实验室首个开源项目，是一个为手机端极致优化的高性能神经网络前向计算框架。
> ncnn 从设计之初深刻考虑手机端的部属和使用。无第三方依赖，跨平台，手机端 cpu 的速度快于目前所有已知的开源框架。
> 基于 ncnn，开发者能够将深度学习算法轻松移植到手机端高效执行，开发出人工智能 APP，将 AI 带到你的指尖。
> ncnn 目前已在腾讯多款应用中使用，如 QQ，Qzone，微信，天天 P 图等。

目前国内能找到的ncnn手机识别，基本都是yolov5居多，本文主要讲解新版本yolov8、yolov11、附带yolov5。

## YoloV8

### 1.准备yolo8

首先下载YoloV8，版本为：8.0.138，链接：https://github.com/ultralytics/ultralytics/tree/v8.0.138

为什么必须是8.0.138？因为每个版本的yolo8代码都有所变化，我们的onnx转换ncnn的过程就面临代码的修改，不同版本修改方法可能不一样，所以请务必使用和我一样的版本（我自己试验多个版本踩坑了几个小时）。

如果您使用的是新版v8或者v11，修改方法则不同，方法我会写在本文后面。

下载下来ultralytics-8.0.138后，照常执行pip install -r requirements.txt

再下载官网提供的yolov8n.pt模型，我们可以基于此模型进行训练。将训练后的模型放入项目根目录

### 2.pt转onnx

如今我们有了pt文件，在项目根目录下编写一个trans.py进行模型转换，实现pt----->onnx

![](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202408191055640.png)

当然事情没有那么简单，直接执行转换后的onnx文件是无法被转成ncnn的，具体原因咱们就不懂了，涉及神经网络识别的一些知识。我们只需要知道怎么改就好了。

进入到ultralytics/nn/modules下

**1.修改head.py**

![image-20240819042209286](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202408190422564.png)

**2.修改block.py**

![image-20240819042224738](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202408190422901.png)

改完后我们就可以放心的执行trans.py文件了，就可以得到符合ncnn转换的onnx文件了。

### 3.onnx转ncnn

得到onnx文件后，我们要去下载ncnn的windows版本，链接：https://github.com/Tencent/ncnn

进入到\ncnn-20240410-windows-vs2022\x64\bin，然后我们将onnx文件也放到该目录下，假设文件名为best.onnx，我们要使用里面的onnx2ncnn.exe将onnx文件进一步转换成ncnn格式，

```shell
onnx2ncnn.exe best.onnx best.param best.bin
```

这样我们就能得到ncnn所需要的param和bin文件了。

### 4.实际项目测试

建议项目：https://github.com/FeiGeChuanShu/ncnn-android-yolov8

因为我们自己转换得出来的模型文件的输出结构的key为outputs0， 所以我们还要修改jni下的yolo.cpp文件

![image-20240819042811337](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202408190428752.png)

### 5.运行结果

![image-20240819042846040](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202408190428736.png)

## YoloV8新版及Yolov11修改方法

**1.修改head.py**

![image-20241105120125368](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202411051201495.png)

**2.修改block.py**

![image-20241105120148960](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202411051201013.png)

随后使用export将其转为torchscript，再使用pnnx转为bin和param，值得注意的是，pnnx会把permute干掉，项目**yolov8-android-ncnn**不能直接套用这个模型，所以要在cpp里修改一下代码，让输出的形状经过cpp这边重写的permute。

## YoloV5及其余检测思路

yolov5调用ncnn开源地址：https://github.com/nihui/ncnn-android-yolov5

yolov5转换onnx的时候也需要修改源代码，具体的自己百度查一下就有了。

**其余检测思路：**

### 1、PyTorch Mobile

PyTorch Mobile 是 PyTorch 针对移动设备推出的部署方案，目的是让开发者能够在移动设备上运行 PyTorch 训练好的模型。它是 PyTorch 生态系统的一部分，与 PyTorch 框架紧密结合。

首先是训练.pt模型，然后找到Yolov5目录下的export.py，修改def export_torchscript代码如下：

```python
    LOGGER.info(f"\n{prefix} starting export with torch {torch.__version__}...")
    # f = file.with_suffix(".torchscript")
    f = file.with_suffix('.torchscript.ptl')
    
    ts = torch.jit.trace(model, im, strict=False)
    d = {"shape": im.shape, "stride": int(max(model.stride)), "names": model.names}
    extra_files = {"config.txt": json.dumps(d)}  # torch._C.ExtraFilesMap()
    # if optimize:  # https://pytorch.org/tutorials/recipes/mobile_interpreter.html
        # optimize_for_mobile(ts)._save_for_lite_interpreter(str(f), _extra_files=extra_files)
    # else:
        # ts.save(str(f), _extra_files=extra_files)
        
    (optimize_for_mobile(ts) if optimize else ts)._save_for_lite_interpreter(str(f))
    return f, None
```

随后执行`python export.py --weights yolov5n.pt --include torchscript`即可得到.torchscript.ptl文件

然后将其放入到该项目之中即可运行目标检测了：https://github.com/pytorch/android-demo-app/tree/master/ObjectDetection

![image-20241030040424085](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202410300404159.png)



这是我个人目前感觉最稳的方法，因为都是torch官方出品的，没有多余的转换步骤，所以可能模型能最大的保留原来的所有属性。但缺点就是识别速度太慢，需要100ms以上。

> ## 异常：Lite Interpreter version number does not match

com.facebook.jni.CppException: Lite Interpreter version number does not match. The model version must be between 3 and 7 but the model version is 8 ()

说明转换pt所使用的torch版本高于java依赖版本，此时可以选择降低torch到和java依赖一样的torch版本，或升级java依赖版本到1.13.0

```
implementation 'org.pytorch:pytorch_android_lite:1.13.1'
implementation 'org.pytorch:pytorch_android_torchvision_lite:1.13.1'
```

### 2、TensorFlow Lite

TensorFlow Lite 是谷歌开发的一种轻量级的深度学习框架，是 TensorFlow 的移动和嵌入式设备版本，专为移动设备和嵌入式设备设计，旨在帮助开发者在资源受限的设备上执行机器学习模型。

这个我暂时没用过，自行研究



> 总结：ncnn天下第一牛逼


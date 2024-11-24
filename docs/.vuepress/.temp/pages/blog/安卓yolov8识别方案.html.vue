<template><div><h1 id="安卓yolov8识别方案" tabindex="-1"><a class="header-anchor" href="#安卓yolov8识别方案"><span>安卓yolov8识别方案</span></a></h1>
<p>在电脑中，将yolo训练后的pt模型文件转换成onnx，再使用C++/Java，调用微软提供的Onnxruntime库，就能轻松实现毫秒级别的对象检测。</p>
<p>针对如上解决方案我写过两个库：</p>
<p>https://github.com/9479421/EasyOnnxruntime</p>
<p>https://github.com/9479421/EasyOnnxruntime_Java</p>
<p>如今我将yolo技术矛头转向了手机领域，在性能皱缩的安卓平台上，又想实现毫秒级的识别，再使用onnxruntime的安卓版本开发库onnxruntime-android显然不能满足需求，在不魔改模型的情况下，经过我测试，一次识别需要好几秒才可以。在经历40小时的熬战后，我成功实现了安卓游戏AI外挂开发的同款技术栈来实现如上需求：YoloV8+ncnn</p>
<blockquote>
<p>ncnn 是腾讯优图实验室首个开源项目，是一个为手机端极致优化的高性能神经网络前向计算框架。
ncnn 从设计之初深刻考虑手机端的部属和使用。无第三方依赖，跨平台，手机端 cpu 的速度快于目前所有已知的开源框架。
基于 ncnn，开发者能够将深度学习算法轻松移植到手机端高效执行，开发出人工智能 APP，将 AI 带到你的指尖。
ncnn 目前已在腾讯多款应用中使用，如 QQ，Qzone，微信，天天 P 图等。</p>
</blockquote>
<p>目前国内能找到的ncnn手机识别，基本都是yolov5居多，本文主要讲解新版本yolov8，该资料国内绝无仅有。</p>
<h2 id="_1-准备yolo8" tabindex="-1"><a class="header-anchor" href="#_1-准备yolo8"><span>1.准备yolo8</span></a></h2>
<p>首先下载YoloV8，版本为：8.0.138，链接：https://github.com/ultralytics/ultralytics/tree/v8.0.138</p>
<p>为什么必须是8.0.138？因为每个版本的yolo8代码都有所变化，对于严格要求格式的ncnn而言，我们的onnx转换ncnn的过程就面临代码的修改，所以请务必使用和我一样的版本（我自己试验多个版本踩坑了几个小时）。</p>
<p>下载下来ultralytics-8.0.138后，照常执行pip install -r requirements.txt</p>
<p>再下载官网提供的yolov8n.pt模型，我们可以基于此模型进行训练。将训练后的模型放入项目根目录</p>
<h2 id="_2-pt转onnx" tabindex="-1"><a class="header-anchor" href="#_2-pt转onnx"><span>2.pt转onnx</span></a></h2>
<p>如今我们有了pt文件，在项目根目录下编写一个trans.py进行模型转换，实现pt-----&gt;onnx</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202408191055640.png" alt=""></p>
<p>当然事情没有那么简单，直接执行转换后的onnx文件是无法被转成ncnn的，具体原因咱们就不懂了，涉及神经网络识别的一些知识。我们只需要知道怎么改就好了。</p>
<p>进入到ultralytics/nn/modules下</p>
<p><strong>1.修改head.py</strong></p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202408190422564.png" alt="image-20240819042209286"></p>
<p><strong>2.修改block.py</strong></p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202408190422901.png" alt="image-20240819042224738"></p>
<p>改完后我们就可以放心的执行trans.py文件了，就可以得到符合ncnn转换的onnx文件了。</p>
<h2 id="_3-onnx转ncnn" tabindex="-1"><a class="header-anchor" href="#_3-onnx转ncnn"><span>3.onnx转ncnn</span></a></h2>
<p>得到onnx文件后，我们要去下载ncnn的windows版本，链接：https://github.com/Tencent/ncnn</p>
<p>进入到\ncnn-20240410-windows-vs2022\x64\bin，然后我们将onnx文件也放到该目录下，假设文件名为best.onnx，我们要使用里面的onnx2ncnn.exe将onnx文件进一步转换成ncnn格式，</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>onnx2ncnn.exe best.onnx best.param best.bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样我们就能得到ncnn所需要的param和bin文件了。</p>
<h2 id="_4-实际项目测试" tabindex="-1"><a class="header-anchor" href="#_4-实际项目测试"><span>4.实际项目测试</span></a></h2>
<p>建议项目：https://github.com/FeiGeChuanShu/ncnn-android-yolov8</p>
<p>因为我们自己转换得出来的模型文件的输出结构的key为outputs0， 所以我们还要修改jni下的yolo.cpp文件</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202408190428752.png" alt="image-20240819042811337"></p>
<h2 id="_5-运行结果" tabindex="-1"><a class="header-anchor" href="#_5-运行结果"><span>5.运行结果</span></a></h2>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202408190428736.png" alt="image-20240819042846040"></p>
</div></template>



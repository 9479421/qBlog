<template><div><h1 id="onnxruntime-without-opencv" tabindex="-1"><a class="header-anchor" href="#onnxruntime-without-opencv"><span>Onnxruntime Without Opencv</span></a></h1>
<blockquote>
<p>前言</p>
</blockquote>
<p>这段期间我一直忙于象棋AI的开发，故已经很久没写博客了。给大家看下一个月以来开发的软件成品：</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/chesss234325483548385.png" alt=""></p>
<p>该项目旨在学棋拆棋训练AI以及连线游戏辅助等功能，用到了Yolo作为棋子图像识别技术，使用C++语言编写，故采用Opencv调用onnx来实现识别的目的。</p>
<p>但是打包后却发现，带cuda支持库的opencv的dll文件高达1G多，简直Fuck了！</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405090157211.png" alt="image-20240509015709130"></p>
<p>我首先参考了网上的去除多余库重编译Opencv的方案，发现不是很好，因为即使只保留core和dnn库，我感觉内存依旧会很大。最终只能决定更换为Onnxruntime库，内存精简至10M的同时，做到了比Opencv更快的识别速度。</p>
<p>ONNX Runtime:由微软推出,用于优化和加速机器学习推理和训练,适用于ONNX模型,是一个跨平台推理和训练机器学习加速器(ONNX Runtime is a cross-platform inference and training machine-learning accelerator),源码地址:https://github.com/microsoft/onnxruntime</p>
<p>首先逛遍了百度、Google、Github，发现所有的Onnxruntime的图像处理环节都依旧使用了Opencv库，这尼玛不是搞笑的吗，两个库一起用还不如只用Opencv了。我又去看了下Java的某个用了Onnxruntime的开源项目，参考着其图像处理，决定写一个类似的C++版本。</p>
<p>C++使用Opencv对图片处理代码的实现如下：</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405100205385.png" alt="image-20240510020535338"></p>
<p>首先他使用了Opencv的一系列图片处理操作，将图片进行了裁剪缩放。最后再将图片使用了cv::dnn::blobFromImage()转换成了深度学习框架可以接受的格式。</p>
<p>前面一系列Opencv的图像操作我们可以使用Gdiplus来进行取代，至于dnn识别库的blobFromImage，我们就要使用本章的正题OnnxRuntime来进行替换了。</p>
<p>OnnxRuntime库核心识别代码如下：</p>
<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre v-pre class="language-c"><code>Ort<span class="token operator">::</span>MemoryInfo memoryInfo <span class="token operator">=</span> Ort<span class="token operator">::</span>MemoryInfo<span class="token operator">::</span><span class="token function">CreateCpu</span><span class="token punctuation">(</span>
        OrtAllocatorType<span class="token operator">::</span>OrtArenaAllocator<span class="token punctuation">,</span> OrtMemType<span class="token operator">::</span>OrtMemTypeDefault<span class="token punctuation">)</span><span class="token punctuation">;</span>
Ort<span class="token operator">::</span>Value inputTensor <span class="token operator">=</span> Ort<span class="token operator">::</span>Value<span class="token operator">::</span>CreateTensor<span class="token operator">&lt;</span><span class="token keyword">float</span><span class="token operator">></span><span class="token punctuation">(</span>memoryInfo<span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token keyword">float</span><span class="token operator">*</span><span class="token punctuation">)</span>floatData<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        floatData<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        m_inputDims<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        m_inputDims<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
std<span class="token operator">::</span>vector<span class="token operator">&lt;</span>Ort<span class="token operator">::</span>Value<span class="token operator">></span> outputTensors <span class="token operator">=</span> m_session<span class="token operator">-></span><span class="token function">Run</span><span class="token punctuation">(</span>Ort<span class="token operator">::</span>RunOptions<span class="token punctuation">{</span> nullptr <span class="token punctuation">}</span><span class="token punctuation">,</span>
        m_input_node_names<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token operator">&amp;</span>inputTensor<span class="token punctuation">,</span>
        m_num_input_nodes<span class="token punctuation">,</span>
        m_output_node_names<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        m_num_output_nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">auto</span><span class="token operator">*</span> rawOutput <span class="token operator">=</span> outputTensors<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>GetTensorData<span class="token operator">&lt;</span><span class="token keyword">float</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
std<span class="token operator">::</span>vector<span class="token operator">&lt;</span><span class="token class-name">int64_t</span><span class="token operator">></span> outputShape <span class="token operator">=</span> outputTensors<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">GetTensorTypeAndShapeInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetShape</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">size_t</span> count <span class="token operator">=</span> outputTensors<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">GetTensorTypeAndShapeInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetElementCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
std<span class="token operator">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">float</span><span class="token operator">></span> <span class="token function">output</span><span class="token punctuation">(</span>rawOutput<span class="token punctuation">,</span> rawOutput <span class="token operator">+</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此可见两个库的共同点就是需要float张量，所以我们的核心目的就是<strong>将裁剪缩放后的图片转为float张量</strong>。</p>
<p>先来看一段图片转float型张量对象的Java代码：首先将图片的宽或高中的较大者缩放至于Onnx同等宽或高，另一个宽或高同时也进行等比例缩放。并将其放置在一个与Onnx等大的底图中，从左上角(0,0)开始放置。并从左上角开始逐行逐列遍历每一个像素的颜色值，将其RGB转换为浮点数张量，最终存在一个float类型的三维数组中。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405090202604.png" alt="image-20240509020222563"></p>
<p>大体理清了思路，我们来使用C++的Gdiplus实现一下。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405100137752.png" alt="image-20240510013731614"></p>
<p>唯一不同的是我们将图片缩放后，绘制到了Onnx等大小底图的正中心。</p>
<p>一眼望去，还是C++ yyds，Java小儿还不速速退却！</p>
<p>由此我们便得到了OnnxRuntime和Opencv所需要的张量数据，就可以传递给OnnxRuntime进行识别了。</p>
<blockquote>
<p>onnx文件转换踩坑</p>
</blockquote>
<p>此外，我们在pt文件转onnx的时候，要注意设置如下参数为最大宽高，否则onnxruntime将无法使用生成的onnx文件。而使用Opencv库的时候，该参数就要进行留空。</p>
<p>parser.add_argument('--max-wh', type=int, default=None, help='None for tensorrt nms, int value for onnx-runtime nms')</p>
<blockquote>
<p>成品</p>
</blockquote>
<p>最后，我将Gdiplus+OnnxRuntime封装成了一个类库，以便快捷使用。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405100220273.png" alt="image-20240510022050234"></p>
<p>开源地址：https://github.com/9479421/EasyOnnxruntime</p>
</div></template>



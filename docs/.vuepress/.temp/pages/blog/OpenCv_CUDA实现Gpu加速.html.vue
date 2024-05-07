<template><div><h1 id="opencv-cuda实现gpu加速" tabindex="-1"><a class="header-anchor" href="#opencv-cuda实现gpu加速"><span>OpenCv+CUDA实现Gpu加速</span></a></h1>
<p>在C++使用Opencv对onnx模型进行目标检测的时候，发现识别速度高达3秒之上，即使开启了如下两行代码依旧是无济于事</p>
<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre v-pre class="language-c"><code>net<span class="token punctuation">.</span><span class="token function">setPreferableBackend</span><span class="token punctuation">(</span>cv<span class="token operator">::</span>dnn<span class="token operator">::</span>DNN_BACKEND_CUDA<span class="token punctuation">)</span><span class="token punctuation">;</span>
net<span class="token punctuation">.</span><span class="token function">setPreferableTarget</span><span class="token punctuation">(</span>cv<span class="token operator">::</span>dnn<span class="token operator">::</span>DNN_TARGET_CUDA<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>经过了解，原来是默认的opencv是不支持CUDA的，我们需要自己手动对opencv进行重编译和打包。</p>
</div></template>



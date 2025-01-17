import comp from "F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/OpenCv_CUDA实现Gpu加速.html.vue"
const data = JSON.parse("{\"path\":\"/blog/OpenCv_CUDA%E5%AE%9E%E7%8E%B0Gpu%E5%8A%A0%E9%80%9F.html\",\"title\":\"OpenCv+CUDA实现Gpu加速\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1715100011000,\"contributors\":[{\"name\":\"wqby\",\"email\":\"9479421@qq.com\",\"commits\":1}]},\"filePathRelative\":\"blog/OpenCv+CUDA实现Gpu加速.md\",\"excerpt\":\"\\n<p>在C++使用Opencv对onnx模型进行目标检测的时候，发现识别速度高达3秒之上，即使开启了如下两行代码依旧是无济于事</p>\\n<div class=\\\"language-c\\\" data-ext=\\\"c\\\" data-title=\\\"c\\\"><pre class=\\\"language-c\\\"><code>net<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">setPreferableBackend</span><span class=\\\"token punctuation\\\">(</span>cv<span class=\\\"token operator\\\">::</span>dnn<span class=\\\"token operator\\\">::</span>DNN_BACKEND_CUDA<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\nnet<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">setPreferableTarget</span><span class=\\\"token punctuation\\\">(</span>cv<span class=\\\"token operator\\\">::</span>dnn<span class=\\\"token operator\\\">::</span>DNN_TARGET_CUDA<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

import comp from "F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/Onnxruntime Without Opencv.html.vue"
const data = JSON.parse("{\"path\":\"/blog/Onnxruntime%20Without%20Opencv.html\",\"title\":\"Onnxruntime Without Opencv\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Onnxruntime Without Opencv\",\"date\":\"2024-05-09T00:00:00.000Z\",\"category\":[\"History\"],\"tag\":[\"人工智能\",\"AI\",\"windows\"]},\"headers\":[],\"git\":{\"updatedTime\":1716619915000,\"contributors\":[{\"name\":\"wqby\",\"email\":\"9479421@qq.com\",\"commits\":1}]},\"filePathRelative\":\"blog/Onnxruntime Without Opencv.md\",\"excerpt\":\"\\n<blockquote>\\n<p>前言</p>\\n</blockquote>\\n<p>这段期间我一直忙于象棋AI的开发，故已经很久没写博客了。给大家看下一个月以来开发的软件成品：</p>\\n<p><img src=\\\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/chesss234325483548385.png\\\" alt=\\\"\\\"></p>\\n<p>该项目旨在学棋拆棋训练AI以及连线游戏辅助等功能，用到了Yolo作为棋子图像识别技术，使用C++语言编写，故采用Opencv调用onnx来实现识别的目的。</p>\\n<p>但是打包后却发现，带cuda支持库的opencv的dll文件高达1G多，简直Fuck了！</p>\"}")
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

import comp from "F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/安卓yolov8识别方案.html.vue"
const data = JSON.parse("{\"path\":\"/blog/%E5%AE%89%E5%8D%93yolov8%E8%AF%86%E5%88%AB%E6%96%B9%E6%A1%88.html\",\"title\":\"安卓yolov8识别方案\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"安卓yolov8识别方案\",\"date\":\"2024-08-19T00:00:00.000Z\",\"category\":[\"History\"],\"tag\":[\"人工智能\",\"AI\",\"Android\"]},\"headers\":[{\"level\":2,\"title\":\"1.准备yolo8\",\"slug\":\"_1-准备yolo8\",\"link\":\"#_1-准备yolo8\",\"children\":[]},{\"level\":2,\"title\":\"2.pt转onnx\",\"slug\":\"_2-pt转onnx\",\"link\":\"#_2-pt转onnx\",\"children\":[]},{\"level\":2,\"title\":\"3.onnx转ncnn\",\"slug\":\"_3-onnx转ncnn\",\"link\":\"#_3-onnx转ncnn\",\"children\":[]},{\"level\":2,\"title\":\"4.实际项目测试\",\"slug\":\"_4-实际项目测试\",\"link\":\"#_4-实际项目测试\",\"children\":[]},{\"level\":2,\"title\":\"5.运行结果\",\"slug\":\"_5-运行结果\",\"link\":\"#_5-运行结果\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"blog/安卓yolov8识别方案.md\",\"excerpt\":\"\\n<p>在电脑中，将yolo训练后的pt模型文件转换成onnx，再使用C++/Java，调用微软提供的Onnxruntime库，就能轻松实现毫秒级别的对象检测。</p>\\n<p>针对如上解决方案我写过两个库：</p>\\n<p>https://github.com/9479421/EasyOnnxruntime</p>\\n<p>https://github.com/9479421/EasyOnnxruntime_Java</p>\\n<p>如今我将yolo技术矛头转向了手机领域，在性能皱缩的安卓平台上，又想实现毫秒级的识别，再使用onnxruntime的安卓版本开发库onnxruntime-android显然不能满足需求，在不魔改模型的情况下，经过我测试，一次识别需要好几秒才可以。在经历40小时的熬战后，我成功实现了安卓游戏AI外挂开发的同款技术栈来实现如上需求：YoloV8+ncnn</p>\"}")
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

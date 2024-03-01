import comp from "C:/Users/Administrator/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/pages/b3.html.vue"
const data = JSON.parse("{\"path\":\"/pages/b3\",\"title\":\"C++实现微信自动跳一跳\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"C++实现微信自动跳一跳\",\"date\":\"2023-05-30T00:00:00.000Z\",\"permalink\":\"/pages/b3\"},\"headers\":[{\"level\":2,\"title\":\"技术概要\",\"slug\":\"技术概要\",\"link\":\"#技术概要\",\"children\":[]},{\"level\":2,\"title\":\"思路分析\",\"slug\":\"思路分析\",\"link\":\"#思路分析\",\"children\":[]},{\"level\":2,\"title\":\"环境配置\",\"slug\":\"环境配置\",\"link\":\"#环境配置\",\"children\":[]},{\"level\":2,\"title\":\"核心代码\",\"slug\":\"核心代码\",\"link\":\"#核心代码\",\"children\":[{\"level\":3,\"title\":\"adb命令\",\"slug\":\"adb命令\",\"link\":\"#adb命令\",\"children\":[]},{\"level\":3,\"title\":\"读取adb执行结果\",\"slug\":\"读取adb执行结果\",\"link\":\"#读取adb执行结果\",\"children\":[]},{\"level\":3,\"title\":\"缩放图片\",\"slug\":\"缩放图片\",\"link\":\"#缩放图片\",\"children\":[]},{\"level\":3,\"title\":\"DC绘制\",\"slug\":\"dc绘制\",\"link\":\"#dc绘制\",\"children\":[]}]},{\"level\":2,\"title\":\"开始编程\",\"slug\":\"开始编程\",\"link\":\"#开始编程\",\"children\":[]},{\"level\":2,\"title\":\"最终成品\",\"slug\":\"最终成品\",\"link\":\"#最终成品\",\"children\":[]},{\"level\":2,\"title\":\"功能升级\",\"slug\":\"功能升级\",\"link\":\"#功能升级\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"blog/2023-05-30 C++实现微信自动跳一跳.md\",\"excerpt\":\"\\n<h2>技术概要</h2>\\n<p>先介绍下写这个项目要用到的一些技术</p>\\n<ol>\\n<li>MFC技术(用来构建窗口)</li>\\n<li>简单的win32窗口绘制</li>\\n<li>基本的ADB安卓调试命令(用来操作手机)</li>\\n</ol>\\n<p>MFC可以替换成QT或者win32窗口构建，根据个人喜好来</p>\\n<h2>思路分析</h2>\\n<p>首先通过adb截取手机屏幕的图片至电脑储存</p>\\n<p><img src=\\\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230530235236943.png\\\" alt=\\\"image-20230530235236943\\\"></p>\"}")
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

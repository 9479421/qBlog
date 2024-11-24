import comp from "F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/Dll调用内存bug解决.html.vue"
const data = JSON.parse("{\"path\":\"/blog/Dll%E8%B0%83%E7%94%A8%E5%86%85%E5%AD%98bug%E8%A7%A3%E5%86%B3.html\",\"title\":\"Dll调用内存bug解决\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Dll调用内存bug解决\",\"date\":\"2024-03-26T00:00:00.000Z\",\"category\":[\"History\"],\"tag\":[\"C++\"]},\"headers\":[],\"git\":{\"updatedTime\":1715100011000,\"contributors\":[{\"name\":\"wqby\",\"email\":\"9479421@qq.com\",\"commits\":1}]},\"filePathRelative\":\"blog/Dll调用内存bug解决.md\",\"excerpt\":\"\\n<p>今天在C++调用opencv进行目标识别的时候，将cv中某类型的数据置入目标数组vector中，结果在MFC按钮点击事件结束后就会引发崩溃，如下所示：</p>\\n<p><img src=\\\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240326010931269.png\\\" alt=\\\"image-20240326010931269\\\"></p>\\n<p>因为调用了opencv的dll的命令，dll就会拥有独立于应用程序的堆栈，程序自身无法访问该堆栈，所以Vector析构的时候就会报错。</p>\\n<p>原因分析如下：</p>\"}")
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

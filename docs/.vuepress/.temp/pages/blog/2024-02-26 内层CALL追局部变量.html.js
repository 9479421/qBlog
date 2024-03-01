import comp from "C:/Users/Administrator/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/blog/2024-02-26 内层CALL追局部变量.html.vue"
const data = JSON.parse("{\"path\":\"/blog/2024-02-26%20%E5%86%85%E5%B1%82CALL%E8%BF%BD%E5%B1%80%E9%83%A8%E5%8F%98%E9%87%8F.html\",\"title\":\"内层CALL追局部变量\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"查找数据\",\"slug\":\"查找数据\",\"link\":\"#查找数据\",\"children\":[]},{\"level\":2,\"title\":\"追踪数据\",\"slug\":\"追踪数据\",\"link\":\"#追踪数据\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"blog/2024-02-26 内层CALL追局部变量.md\",\"excerpt\":\"\\n<h2>查找数据</h2>\\n<blockquote>\\n<p>首先查找血量地址</p>\\n</blockquote>\\n<p><img src=\\\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240226203201185.png\\\" alt=\\\"image-20240226203201185\\\"></p>\\n<h2>追踪数据</h2>\\n<p>在OD里面dd血量地址，随后下硬件访问断点</p>\\n<p><img src=\\\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240226203859746.png\\\" alt=\\\"image-20240226203859746\\\"></p>\"}")
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

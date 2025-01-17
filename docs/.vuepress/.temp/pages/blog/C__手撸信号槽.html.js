import comp from "F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/C__手撸信号槽.html.vue"
const data = JSON.parse("{\"path\":\"/blog/C__%E6%89%8B%E6%92%B8%E4%BF%A1%E5%8F%B7%E6%A7%BD.html\",\"title\":\"C++手撸信号槽\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"C++手撸信号槽\",\"date\":\"2024-05-22T00:00:00.000Z\",\"category\":[\"History\"],\"tag\":[\"C++\"]},\"headers\":[],\"git\":{\"updatedTime\":1717091521000,\"contributors\":[{\"name\":\"wqby\",\"email\":\"9479421@qq.com\",\"commits\":1}]},\"filePathRelative\":\"blog/C++手撸信号槽.md\",\"excerpt\":\"\\n<p>近期使用QT的时候，发现QT封装的信号与槽极其好用。决定封装一个自己的信号槽库。</p>\\n<p>信号与槽主要就是实现了一个信号发送者和接收者，发送者发送数据的时候，接收者的函数会自动回调执行。</p>\\n<p>网上相关的资料和视频极其稀少，并且实现和讲解比较浅，我决定从0开始构建一个手写信号槽的详细讲解。</p>\\n<p>先看一下QT的信号槽用法：</p>\\n<p>定义一个信号发送者，并声明一个信号send发送了msg和code两个不同类型的参数。并且定义了一个testSend()函数发送出了这个send信号。</p>\\n<p><img src=\\\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405232304209.png\\\" alt=\\\"image-20240523230452082\\\"></p>\"}")
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

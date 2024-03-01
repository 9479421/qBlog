import comp from "C:/Users/Administrator/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/pages/b14.html.vue"
const data = JSON.parse("{\"path\":\"/pages/b14\",\"title\":\"某付费文档网破解记录\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"某付费文档网破解记录\",\"date\":\"2024-02-27T00:00:00.000Z\",\"permalink\":\"/pages/b14\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"blog/2024-02-27 网游链表数据遍历.md\",\"excerpt\":\"\\n<blockquote>\\n<p>游戏中用来存储所有对象信息的往往是链表。也就意味着只需要遍历自己人物对象周围的链表，并将周围的对象都显示出来即可。我们想要实现遍历周围附近所有对象的信息(例如血量)功能，就要采用遍历链表。</p>\\n</blockquote>\\n<p>首先我们查找血量的地址</p>\\n<p><img src=\\\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240227040522123.png\\\" alt=\\\"image-20240227040522123\\\"></p>\\n<p><img src=\\\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240227040644993.png\\\" alt=\\\"image-20240227040644993\\\"></p>\"}")
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

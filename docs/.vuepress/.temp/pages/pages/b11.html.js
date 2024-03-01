import comp from "C:/Users/Administrator/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/pages/b11.html.vue"
const data = JSON.parse("{\"path\":\"/pages/b11\",\"title\":\"某付费文档网破解记录\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"某付费文档网破解记录\",\"date\":\"2023-11-11T00:00:00.000Z\",\"permalink\":\"/pages/b11\"},\"headers\":[{\"level\":2,\"title\":\"引言\",\"slug\":\"引言\",\"link\":\"#引言\",\"children\":[]},{\"level\":2,\"title\":\"代码实现\",\"slug\":\"代码实现\",\"link\":\"#代码实现\",\"children\":[]},{\"level\":2,\"title\":\"实战测试\",\"slug\":\"实战测试\",\"link\":\"#实战测试\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"blog/2023-11-11 C++调用JS代码.md\",\"excerpt\":\"\\n<h2>引言</h2>\\n<p>C/C++调用js代码，据我了解如今跨平台解决方案中，最强大的应该是V8库，不过这个东西使用起来较为复杂，另一方面我技术比较菜，实在是没研究明白怎么用。随后找遍全网发现C++调用Js的相关文章与库几乎为0，于是想起了玩易语言时常用的精易模块自带的js执行功能，我只要用同等的解决方案不就可以了么？</p>\\n<p>赶忙下载了一波精易模块源码，直入主题。</p>\\n<p><img src=\\\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20231111022601808.png\\\" alt=\\\"image-20231111022601808\\\"></p>\"}")
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

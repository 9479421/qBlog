import comp from "F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/手机浏览器调试方法.html.vue"
const data = JSON.parse("{\"path\":\"/blog/%E6%89%8B%E6%9C%BA%E6%B5%8F%E8%A7%88%E5%99%A8%E8%B0%83%E8%AF%95%E6%96%B9%E6%B3%95.html\",\"title\":\"手机浏览器调试方法\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"手机浏览器调试方法\",\"date\":\"2023-05-31T00:00:00.000Z\",\"category\":[\"History\"],\"tag\":[\"逆向\",\"web\",\"js\",\"教程\"]},\"headers\":[],\"git\":{\"updatedTime\":1709311174000,\"contributors\":[{\"name\":\"wqby\",\"email\":\"9479421@qq.com\",\"commits\":1}]},\"filePathRelative\":\"blog/手机浏览器调试方法.md\",\"excerpt\":\"\\n<p>目前几乎所有的浏览器都是使用的统一的Chromium内核，但是在Web2.0时代的推动下，各大浏览器厂商对移动端的适配兼容貌似还是存在微小的出入。</p>\\n<p>这就产生了一个很操蛋的问题，会导致你写的程序在大部分浏览器中运行都正常，但是可能到了某个其他的浏览器就会出现BUG。</p>\\n<p>如我写的这个博客项目便出现了类似的情况，如下图所示，从左到右依次是：电脑chrome浏览器，手机QQ自带浏览器，手机微信自带浏览器，手机vivo浏览器，全部显示正常。</p>\\n<p><img src=\\\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230531202610608.png\\\" alt=\\\"image-20230531202610608\\\"></p>\"}")
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

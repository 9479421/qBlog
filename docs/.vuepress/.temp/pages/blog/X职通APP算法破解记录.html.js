import comp from "F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/X职通APP算法破解记录.html.vue"
const data = JSON.parse("{\"path\":\"/blog/X%E8%81%8C%E9%80%9AAPP%E7%AE%97%E6%B3%95%E7%A0%B4%E8%A7%A3%E8%AE%B0%E5%BD%95.html\",\"title\":\"X职通APP算法破解记录\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"X职通APP算法破解记录\",\"date\":\"2023-07-21T00:00:00.000Z\",\"category\":[\"History\"],\"tag\":[\"爬虫\",\"安卓\",\"逆向\",\"抓包\"]},\"headers\":[{\"level\":2,\"title\":\"思路分析\",\"slug\":\"思路分析\",\"link\":\"#思路分析\",\"children\":[{\"level\":3,\"title\":\"1.查壳\",\"slug\":\"_1-查壳\",\"link\":\"#_1-查壳\",\"children\":[]},{\"level\":3,\"title\":\"2.抓包\",\"slug\":\"_2-抓包\",\"link\":\"#_2-抓包\",\"children\":[]},{\"level\":3,\"title\":\"3.初步分析\",\"slug\":\"_3-初步分析\",\"link\":\"#_3-初步分析\",\"children\":[]},{\"level\":3,\"title\":\"4.进阶分析\",\"slug\":\"_4-进阶分析\",\"link\":\"#_4-进阶分析\",\"children\":[]},{\"level\":3,\"title\":\"5.代码编写\",\"slug\":\"_5-代码编写\",\"link\":\"#_5-代码编写\",\"children\":[]}]}],\"git\":{\"updatedTime\":1709311174000,\"contributors\":[{\"name\":\"wqby\",\"email\":\"9479421@qq.com\",\"commits\":1}]},\"filePathRelative\":\"blog/X职通APP算法破解记录.md\",\"excerpt\":\"\\n<blockquote>\\n<p>前言：这个App是用Uniapp写的，逆向破解过程不同于原生App</p>\\n</blockquote>\\n<h2>思路分析</h2>\\n<h3>1.查壳</h3>\\n<p>首先拿到APP的第一件事就是先用PKID查壳，发现没有加固。</p>\\n<p><img src=\\\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230721162751268.png\\\" alt=\\\"image-20230721162751268\\\"></p>\\n<h3>2.抓包</h3>\\n<p>可以用小黄鸟，如果有证书检测就加一步JustTrustMe。我测试过没有抓包检测，这里就用Charles+SocksDroid了。</p>\"}")
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

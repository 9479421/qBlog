import comp from "F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/微信小程序逆向教程.html.vue"
const data = JSON.parse("{\"path\":\"/blog/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E9%80%86%E5%90%91%E6%95%99%E7%A8%8B.html\",\"title\":\"微信小程序逆向教程\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"微信小程序逆向教程\",\"date\":\"2023-09-04T00:00:00.000Z\",\"category\":[\"History\"],\"tag\":[\"教程\",\"逆向\",\"web\",\"小程序\"]},\"headers\":[{\"level\":2,\"title\":\"抓包\",\"slug\":\"抓包\",\"link\":\"#抓包\",\"children\":[]},{\"level\":2,\"title\":\"提取\",\"slug\":\"提取\",\"link\":\"#提取\",\"children\":[{\"level\":3,\"title\":\"解密\",\"slug\":\"解密\",\"link\":\"#解密\",\"children\":[]},{\"level\":3,\"title\":\"反编译\",\"slug\":\"反编译\",\"link\":\"#反编译\",\"children\":[]}]}],\"git\":{\"updatedTime\":1709311174000,\"contributors\":[{\"name\":\"wqby\",\"email\":\"9479421@qq.com\",\"commits\":1}]},\"filePathRelative\":\"blog/微信小程序逆向教程.md\",\"excerpt\":\"\\n<p>这里简单谈谈我对小程序逆向不同于网页逆向和APP逆向的理解。</p>\\n<p>小程序本质上就是H5网页，微信本身就是个改版的浏览器，微信内嵌了一些官方API供小程序调用，所以抓包方法几乎一样。</p>\\n<p>但是微信自身做了一些VPN检测，所以常用的Httpcanary方法，能用是能用，但是不太好用。</p>\\n<p>这里我个人常用的2种方法</p>\\n<p>1.使用SockDroid+Charles</p>\\n<p>2.使用电脑版的微信打开小程序，然后用Fiddler抓包（推荐）</p>\\n<h2>抓包</h2>\\n<p><img src=\\\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230825110159024.png\\\" alt=\\\"image-20230825110159024\\\"></p>\"}")
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

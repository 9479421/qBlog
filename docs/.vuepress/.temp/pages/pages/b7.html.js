import comp from "C:/Users/Administrator/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/pages/b7.html.vue"
const data = JSON.parse("{\"path\":\"/pages/b7\",\"title\":\"某付费文档网破解记录\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"某付费文档网破解记录\",\"date\":\"2023-09-08T00:00:00.000Z\",\"permalink\":\"/pages/b7\"},\"headers\":[{\"level\":2,\"title\":\"开篇\",\"slug\":\"开篇\",\"link\":\"#开篇\",\"children\":[]},{\"level\":2,\"title\":\"知识了解\",\"slug\":\"知识了解\",\"link\":\"#知识了解\",\"children\":[{\"level\":3,\"title\":\"DNS服务器\",\"slug\":\"dns服务器\",\"link\":\"#dns服务器\",\"children\":[]},{\"level\":3,\"title\":\"CDN\",\"slug\":\"cdn\",\"link\":\"#cdn\",\"children\":[]}]},{\"level\":2,\"title\":\"准备工作\",\"slug\":\"准备工作\",\"link\":\"#准备工作\",\"children\":[]},{\"level\":2,\"title\":\"开始搭建\",\"slug\":\"开始搭建\",\"link\":\"#开始搭建\",\"children\":[{\"level\":3,\"title\":\"添加站点\",\"slug\":\"添加站点\",\"link\":\"#添加站点\",\"children\":[]},{\"level\":3,\"title\":\"替换DNS\",\"slug\":\"替换dns\",\"link\":\"#替换dns\",\"children\":[]},{\"level\":3,\"title\":\"测试访问\",\"slug\":\"测试访问\",\"link\":\"#测试访问\",\"children\":[]}]},{\"level\":2,\"title\":\"问题改进\",\"slug\":\"问题改进\",\"link\":\"#问题改进\",\"children\":[]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"blog/2023-09-08 CloudFlare以及防DDOS策略详述.md\",\"excerpt\":\"\\n<h2>开篇</h2>\\n<blockquote>\\n<p>文章前言与应用场景</p>\\n</blockquote>\\n<p>国内任何服务器，不管大厂还是小厂，无论腾讯云还是杂牌云，只要面临DDOS攻击，一定是秒死。</p>\\n<p>即便是使用赫赫有名的高防服务器，除非预算十分充裕，不然也是会被上百千G的攻击所攻破。</p>\\n<p>DDOS需要拿到服务器IP，并对IP进行大量的洪水访问，以达到恶意流量超过阈值，服务器厂商会自动关停你的服务器。</p>\\n<p>所以很多人会使用CDN来达到隐藏真实IP的效果，但是中国的防御成本远远大于攻击成本。</p>\\n<p>所以本篇文章推荐一篇最低成本，无人可以攻击死的一种安全策略。</p>\"}")
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

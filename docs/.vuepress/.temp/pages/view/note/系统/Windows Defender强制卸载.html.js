import comp from "F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/系统/Windows Defender强制卸载.html.vue"
const data = JSON.parse("{\"path\":\"/view/note/%E7%B3%BB%E7%BB%9F/Windows%20Defender%E5%BC%BA%E5%88%B6%E5%8D%B8%E8%BD%BD.html\",\"title\":\"Windows Defender强制卸载\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1709310681000,\"contributors\":[{\"name\":\"wqby\",\"email\":\"9479421@qq.com\",\"commits\":1}]},\"filePathRelative\":\"view/note/系统/Windows Defender强制卸载.md\",\"excerpt\":\"\\n<p>Windows中最垃圾的莫过于自带的Defender防火墙了，占用CPU不说，网上能找到的卸载方法千篇一律，注册表啊，Terminal啊，其实都不太好用，这里推荐一个一键卸载的牛逼脚本。</p>\\n<p>https://github.com/xbebhxx3/x3-DefenderRemove</p>\\n\"}")
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

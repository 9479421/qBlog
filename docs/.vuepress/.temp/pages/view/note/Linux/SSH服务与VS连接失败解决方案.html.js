import comp from "F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/Linux/SSH服务与VS连接失败解决方案.html.vue"
const data = JSON.parse("{\"path\":\"/view/note/Linux/SSH%E6%9C%8D%E5%8A%A1%E4%B8%8EVS%E8%BF%9E%E6%8E%A5%E5%A4%B1%E8%B4%A5%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html\",\"title\":\"SSH服务与VS连接失败解决方案\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"1.连接失败\",\"slug\":\"_1-连接失败\",\"link\":\"#_1-连接失败\",\"children\":[]},{\"level\":2,\"title\":\"2.运行失败\",\"slug\":\"_2-运行失败\",\"link\":\"#_2-运行失败\",\"children\":[]}],\"git\":{\"updatedTime\":1709310681000,\"contributors\":[{\"name\":\"wqby\",\"email\":\"9479421@qq.com\",\"commits\":1}]},\"filePathRelative\":\"view/note/Linux/SSH服务与VS连接失败解决方案.md\",\"excerpt\":\"\\n<h2>1.连接失败</h2>\\n<p>在Linux编程开发中，配置VisualStudio与SSH服务连接的时候遇到了这样的问题。</p>\\n<p><img src=\\\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524160024262.png\\\" alt=\\\"image-20230524160024262\\\"></p>\\n<p>明明配置了<code>/etc/ssh/sshd_config</code>，也<code>sudo service ssh start</code>启动了ssh的服务，仍然连接不上，于是选择重启服务<code>sudo service ssh restart</code></p>\"}")
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

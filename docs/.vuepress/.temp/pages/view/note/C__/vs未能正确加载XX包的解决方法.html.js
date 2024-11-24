import comp from "F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/C__/vs未能正确加载XX包的解决方法.html.vue"
const data = JSON.parse("{\"path\":\"/view/note/C__/vs%E6%9C%AA%E8%83%BD%E6%AD%A3%E7%A1%AE%E5%8A%A0%E8%BD%BDXX%E5%8C%85%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95.html\",\"title\":\"vs未能正确加载XX包的解决方法\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1709311174000,\"contributors\":[{\"name\":\"wqby\",\"email\":\"9479421@qq.com\",\"commits\":1}]},\"filePathRelative\":\"view/note/C++/vs未能正确加载XX包的解决方法.md\",\"excerpt\":\"\\n<blockquote>\\n<p>转载</p>\\n</blockquote>\\n<p>可以在cmd里切换到安装目录下的Common7/IDE，然后运行devenv /ResetSettings</p>\\n<p>比如我的地址是</p>\\n<p>D:\\\\Program Files\\\\Microsoft Visual Studio 10.0\\\\Common7\\\\IDE</p>\\n<p>具体步骤：</p>\\n<p>开始-&gt;运行-&gt;输入cmd 按运行</p>\\n<p>出来黑色DOS框。</p>\\n<p>（以下步骤因人而异，要看你的C++装在哪个盘了。我是D盘所以按照D盘的说）</p>\\n<p>输入d:按回车（如果你的是C盘 那就c: 按回车 以下差异不一一说明）</p>\"}")
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

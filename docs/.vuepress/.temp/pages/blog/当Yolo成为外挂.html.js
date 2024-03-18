import comp from "F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/当Yolo成为外挂.html.vue"
const data = JSON.parse("{\"path\":\"/blog/%E5%BD%93Yolo%E6%88%90%E4%B8%BA%E5%A4%96%E6%8C%82.html\",\"title\":\"当Yolo成为外挂\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"当Yolo成为外挂\",\"date\":\"2024-03-14T00:00:00.000Z\",\"category\":[\"History\"],\"tag\":[\"人工智能\",\"AI\",\"windows\"]},\"headers\":[{\"level\":2,\"title\":\"标注图片\",\"slug\":\"标注图片\",\"link\":\"#标注图片\",\"children\":[]},{\"level\":2,\"title\":\"识别测试\",\"slug\":\"识别测试\",\"link\":\"#识别测试\",\"children\":[]},{\"level\":2,\"title\":\"安装Yolo\",\"slug\":\"安装yolo\",\"link\":\"#安装yolo\",\"children\":[]},{\"level\":2,\"title\":\"初步训练\",\"slug\":\"初步训练\",\"link\":\"#初步训练\",\"children\":[]},{\"level\":2,\"title\":\"终极训练\",\"slug\":\"终极训练\",\"link\":\"#终极训练\",\"children\":[]},{\"level\":2,\"title\":\"问题汇总\",\"slug\":\"问题汇总\",\"link\":\"#问题汇总\",\"children\":[{\"level\":3,\"title\":\"\",\"slug\":\"\",\"link\":\"#\",\"children\":[]}]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"blog/当Yolo成为外挂.md\",\"excerpt\":\"\\n<blockquote>\\n<p>起因</p>\\n</blockquote>\\n<p>女朋友最近上课的时候老是喜欢玩《疯狂找东西》，对此我决定做一个针对这个游戏的外挂。</p>\\n<p>最初我浮现了2种思路，一种是对该APP进行Xposed HOOK，使得被找的物品直接被标注出来。另一种就是通过目标训练检测，在物品所在位置直接绘制方框。</p>\\n<p>此前我准备写一个象棋AI，需要检测棋子位置，并且通过引擎设计出最佳执棋线路，并且通用于所有象棋软件。结合这两个项目的需求，Yolo是一个比较好的检测方案。</p>\\n<blockquote>\\n<p>Yolo介绍</p>\\n</blockquote>\\n<blockquote>\\n<p>还在编写阶段，等待更新</p>\\n</blockquote>\"}")
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

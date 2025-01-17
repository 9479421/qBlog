import comp from "F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/当Yolo成为外挂.html.vue"
const data = JSON.parse("{\"path\":\"/blog/%E5%BD%93Yolo%E6%88%90%E4%B8%BA%E5%A4%96%E6%8C%82.html\",\"title\":\"当Yolo成为外挂\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"当Yolo成为外挂\",\"date\":\"2024-03-14T00:00:00.000Z\",\"category\":[\"History\"],\"tag\":[\"人工智能\",\"AI\",\"windows\"]},\"headers\":[{\"level\":2,\"title\":\"Yolo介绍\",\"slug\":\"yolo介绍\",\"link\":\"#yolo介绍\",\"children\":[]},{\"level\":2,\"title\":\"安装Yolo\",\"slug\":\"安装yolo\",\"link\":\"#安装yolo\",\"children\":[]},{\"level\":2,\"title\":\"测试识别\",\"slug\":\"测试识别\",\"link\":\"#测试识别\",\"children\":[]},{\"level\":2,\"title\":\"标注图片\",\"slug\":\"标注图片\",\"link\":\"#标注图片\",\"children\":[]},{\"level\":2,\"title\":\"训练配置\",\"slug\":\"训练配置\",\"link\":\"#训练配置\",\"children\":[]},{\"level\":2,\"title\":\"初步训练\",\"slug\":\"初步训练\",\"link\":\"#初步训练\",\"children\":[]},{\"level\":2,\"title\":\"一劳永逸\",\"slug\":\"一劳永逸\",\"link\":\"#一劳永逸\",\"children\":[]},{\"level\":2,\"title\":\"终极训练\",\"slug\":\"终极训练\",\"link\":\"#终极训练\",\"children\":[]},{\"level\":2,\"title\":\"问题汇总\",\"slug\":\"问题汇总\",\"link\":\"#问题汇总\",\"children\":[{\"level\":3,\"title\":\"\",\"slug\":\"\",\"link\":\"#\",\"children\":[]}]}],\"git\":{\"updatedTime\":1715100011000,\"contributors\":[{\"name\":\"wqby\",\"email\":\"9479421@qq.com\",\"commits\":3}]},\"filePathRelative\":\"blog/当Yolo成为外挂.md\",\"excerpt\":\"\\n<blockquote>\\n<p>起因</p>\\n</blockquote>\\n<p>女朋友最近上课的时候老是喜欢玩《疯狂找东西》，对此我决定做一个针对这个游戏的外挂。</p>\\n<p>最初我浮现了2种思路，一种是对该APP进行Xposed HOOK，使得被找的物品直接被标注出来。另一种就是通过目标训练检测，在物品所在位置直接绘制方框。</p>\\n<p>此前我准备写一个象棋AI，需要检测棋子位置，通过引擎设计出最佳执棋线路，并且通用于所有象棋软件。结合这两个项目的需求，Yolo是一个比较好的检测方案。</p>\\n<h2>Yolo介绍</h2>\\n<p><em>YOLO（You Only Look Once）是一种基于深度神经网络的对象识别和定位算法，由Joseph Redmon等人在2015年提出。它的主要特点是运行速度很快，可以用于实时系统。在输入一张图片后，YOLO能够输出图片中所包含的对象以及每个对象的位置（通过包含该对象的矩形框来表示）。YOLO算法在目标检测领域具有显著的优势，特别是在需要实时处理的场景中，如视频监控、自动驾驶等领域，都有着广泛的应用前景。</em></p>\"}")
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

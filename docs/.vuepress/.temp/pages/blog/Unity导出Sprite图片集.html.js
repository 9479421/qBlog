import comp from "F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/Unity导出Sprite图片集.html.vue"
const data = JSON.parse("{\"path\":\"/blog/Unity%E5%AF%BC%E5%87%BASprite%E5%9B%BE%E7%89%87%E9%9B%86.html\",\"title\":\"Unity导出Sprite图片集\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Unity导出Sprite图片集\",\"date\":\"2024-06-05T00:00:00.000Z\",\"category\":[\"History\"],\"tag\":[\"C#\",\"Unity游戏\"]},\"headers\":[],\"git\":{\"updatedTime\":1719139421000,\"contributors\":[{\"name\":\"wqby\",\"email\":\"9479421@qq.com\",\"commits\":2}]},\"filePathRelative\":\"blog/Unity导出Sprite图片集.md\",\"excerpt\":\"\\n<blockquote>\\n<h4>转载</h4>\\n</blockquote>\\n<h4>一、前言</h4>\\n<p>有时候，我们需要将一张大图分离成多张小图单独保存成文件。比如下面这张图，我只想要第一只小鸟的图。<br>\\n<img src=\\\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202406042356377.png\\\" alt=\\\"在这里插入图片描述\\\"><br>\\n我们可以利用Unity的TextureImporter类的spritesheet成员获取到每个小图的信息，然后再分别保存成小图文件即可。</p>\\n<h4>二、操作步骤</h4>\"}")
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

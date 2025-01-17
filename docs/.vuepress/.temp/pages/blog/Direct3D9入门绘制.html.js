import comp from "F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/Direct3D9入门绘制.html.vue"
const data = JSON.parse("{\"path\":\"/blog/Direct3D9%E5%85%A5%E9%97%A8%E7%BB%98%E5%88%B6.html\",\"title\":\"Direct3D9入门绘制\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Direct3D9入门绘制\",\"date\":\"2024-03-20T00:00:00.000Z\",\"category\":[\"History\"],\"tag\":[\"Windows\",\"游戏开发\"]},\"headers\":[{\"level\":2,\"title\":\"环境搭建\",\"slug\":\"环境搭建\",\"link\":\"#环境搭建\",\"children\":[]},{\"level\":2,\"title\":\"窗口创建\",\"slug\":\"窗口创建\",\"link\":\"#窗口创建\",\"children\":[]},{\"level\":2,\"title\":\"窗口绘制\",\"slug\":\"窗口绘制\",\"link\":\"#窗口绘制\",\"children\":[]},{\"level\":2,\"title\":\"输出文字\",\"slug\":\"输出文字\",\"link\":\"#输出文字\",\"children\":[]},{\"level\":2,\"title\":\"绘制矩形\",\"slug\":\"绘制矩形\",\"link\":\"#绘制矩形\",\"children\":[]},{\"level\":2,\"title\":\"绘制三角形\",\"slug\":\"绘制三角形\",\"link\":\"#绘制三角形\",\"children\":[]},{\"level\":2,\"title\":\"绘制直线\",\"slug\":\"绘制直线\",\"link\":\"#绘制直线\",\"children\":[]}],\"git\":{\"updatedTime\":1711214483000,\"contributors\":[{\"name\":\"wqby\",\"email\":\"9479421@qq.com\",\"commits\":1}]},\"filePathRelative\":\"blog/Direct3D9入门绘制.md\",\"excerpt\":\"\\n<p>整个中国对于D3D相关的资料几乎是0，学习成本极其艰巨，为数不多的英语学习书籍也都是主讲3D，用到了很多的3D数学知识。对于2D绘制需求来说学习起来性价比极低，所以专门写了这样一篇D3D9快速入门。</p>\\n<h2>环境搭建</h2>\\n<p>首先要安装Direct3D9的SDK，地址：https://www.microsoft.com/zh-cn/download/details.aspx?id=6812</p>\\n<p>下载成功后在VS中导入include和lib目录，目的是拿到，include目录中的d3d9.h、d3dx9.h以及lib目录下的d3d9.lib和d3dx9.lib</p>\"}")
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

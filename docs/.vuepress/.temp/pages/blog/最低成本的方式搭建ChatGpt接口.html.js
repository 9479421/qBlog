import comp from "F:/qBlogPlus/docs/.vuepress/.temp/pages/blog/最低成本的方式搭建ChatGpt接口.html.vue"
const data = JSON.parse("{\"path\":\"/blog/%E6%9C%80%E4%BD%8E%E6%88%90%E6%9C%AC%E7%9A%84%E6%96%B9%E5%BC%8F%E6%90%AD%E5%BB%BAChatGpt%E6%8E%A5%E5%8F%A3.html\",\"title\":\"最低成本的方式搭建ChatGpt接口\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"最低成本的方式搭建ChatGpt接口\",\"date\":\"2023-05-03T00:00:00.000Z\",\"category\":[\"History\"],\"tag\":[\"后端\",\"nodejs\",\"js\"]},\"headers\":[{\"level\":2,\"title\":\"初次试错\",\"slug\":\"初次试错\",\"link\":\"#初次试错\",\"children\":[]},{\"level\":2,\"title\":\"步入正轨\",\"slug\":\"步入正轨\",\"link\":\"#步入正轨\",\"children\":[{\"level\":3,\"title\":\"1.新建云函数\",\"slug\":\"_1-新建云函数\",\"link\":\"#_1-新建云函数\",\"children\":[]},{\"level\":3,\"title\":\"2.安装依赖\",\"slug\":\"_2-安装依赖\",\"link\":\"#_2-安装依赖\",\"children\":[]},{\"level\":3,\"title\":\"3.查看访问url\",\"slug\":\"_3-查看访问url\",\"link\":\"#_3-查看访问url\",\"children\":[]}]}],\"git\":{\"updatedTime\":1709310681000,\"contributors\":[{\"name\":\"wqby\",\"email\":\"9479421@qq.com\",\"commits\":1}]},\"filePathRelative\":\"blog/最低成本的方式搭建ChatGpt接口.md\",\"excerpt\":\"\\n<blockquote>\\n<p>2023-11-02补充：如今国内的文心一言等AI模型已经公开并且盛行，已经可以在国内直接调用了，没必要像下文那样去使用chatgpt了，本文旨在提供调用外网正版chatgpt接口的思路。</p>\\n</blockquote>\\n<p>首先我们先要通过挂梯子(翻墙)访问到openai官网，然后拿到自己调用接口的key，此步直接省略。</p>\\n<p>假设你的key为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（请勿泄露给别人）</p>\\n<h2>初次试错</h2>\\n<p>接下来我们就要对需求进行分析，因为接口必须翻墙才可以访问，所以按照大家惯性思维去搭建这个后端接口的话，都是采用任一编程语言实现一段http接口操作，然后运行到服务器上后，并且给服务器挂上梯子，再通过前端对这个接口进行访问。</p>\"}")
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

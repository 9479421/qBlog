import comp from "F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/反汇编/栈溢出漏洞原理详解与利用.html.vue"
const data = JSON.parse("{\"path\":\"/view/note/%E5%8F%8D%E6%B1%87%E7%BC%96/%E6%A0%88%E6%BA%A2%E5%87%BA%E6%BC%8F%E6%B4%9E%E5%8E%9F%E7%90%86%E8%AF%A6%E8%A7%A3%E4%B8%8E%E5%88%A9%E7%94%A8.html\",\"title\":\"栈溢出漏洞原理详解与利用\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1709310681000,\"contributors\":[{\"name\":\"wqby\",\"email\":\"9479421@qq.com\",\"commits\":1}]},\"filePathRelative\":\"view/note/反汇编/栈溢出漏洞原理详解与利用.md\",\"excerpt\":\"\\n<p><strong>转载</strong></p>\\n<blockquote>\\n<p><strong>0x01 前言</strong></p>\\n</blockquote>\\n<p>和我一样，有一些计算机专业的同学可能一直都在不停地码代码，却很少关注程序是怎么执行的，也不会考虑到自己写的代码是否会存在栈溢出漏洞，借此机会我们一起走进栈溢出。</p>\\n<blockquote>\\n<p><strong>0x02 程序是怎么运行的</strong></p>\\n</blockquote>\\n<p>在了解栈溢出之前我们先了解一下程序执行过程</p>\\n<p>程序的执行过程可看作连续的函数调用。当一个函数执行完毕时，程序要回到call指令的下一条指令继续执行，函数调用过程通常使用堆栈实现</p>\"}")
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

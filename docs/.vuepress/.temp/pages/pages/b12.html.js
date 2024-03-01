import comp from "C:/Users/Administrator/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/pages/b12.html.vue"
const data = JSON.parse("{\"path\":\"/pages/b12\",\"title\":\"某付费文档网破解记录\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"某付费文档网破解记录\",\"date\":\"2024-02-12T00:00:00.000Z\",\"permalink\":\"/pages/b12\"},\"headers\":[{\"level\":2,\"title\":\"封包追踪\",\"slug\":\"封包追踪\",\"link\":\"#封包追踪\",\"children\":[]},{\"level\":2,\"title\":\"加密追踪\",\"slug\":\"加密追踪\",\"link\":\"#加密追踪\",\"children\":[]},{\"level\":2,\"title\":\"调用加密call\",\"slug\":\"调用加密call\",\"link\":\"#调用加密call\",\"children\":[]},{\"level\":2,\"title\":\"编写代码发送封包\",\"slug\":\"编写代码发送封包\",\"link\":\"#编写代码发送封包\",\"children\":[]},{\"level\":2,\"title\":\"纯汇编实现加密\",\"slug\":\"纯汇编实现加密\",\"link\":\"#纯汇编实现加密\",\"children\":[]},{\"level\":2,\"title\":\"编写简易抓包工具\",\"slug\":\"编写简易抓包工具\",\"link\":\"#编写简易抓包工具\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"blog/2024-02-12 网游喊话加密Call分析.md\",\"excerpt\":\"\\n<blockquote>\\n<p>思路整理</p>\\n</blockquote>\\n<p>网游喊话的原理就是向服务器发送了数据，网游与服务器通信数据都是使用tcp协议，而windows中发送tcp数据的API函数有send，sendto，WSASend，所以对此三个函数进行下断点。</p>\\n<p>结果在WSASend函数处断了下来，说明该游戏使用的是WSASend来封装的发送数据函数。</p>\\n<p>通过观察堆栈变化可以猜出是线程发包，说明有一个线程负责从某个地址循环读取数据，当有数据的时候就会自动采取发包。而游戏主线程则只需要在执行操作的时候把数据写入至某个地址即可。而我们此时断下的位置就是线程内部，我们需要对封包数据进行追踪到静态地址，再对地址进行硬件写入断点，就可以追踪到线程外的操作地址了。</p>\"}")
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

import comp from "F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/Java/动力节点NIO学习笔记.html.vue"
const data = JSON.parse("{\"path\":\"/view/note/Java/%E5%8A%A8%E5%8A%9B%E8%8A%82%E7%82%B9NIO%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html\",\"title\":\"NIO学习笔记\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"NIO概述\",\"slug\":\"nio概述\",\"link\":\"#nio概述\",\"children\":[{\"level\":3,\"title\":\"程序读取数据模型\",\"slug\":\"程序读取数据模型\",\"link\":\"#程序读取数据模型\",\"children\":[]},{\"level\":3,\"title\":\"Channel\",\"slug\":\"channel\",\"link\":\"#channel\",\"children\":[]}]},{\"level\":2,\"title\":\"Buffer\",\"slug\":\"buffer\",\"link\":\"#buffer\",\"children\":[{\"level\":3,\"title\":\"Buffer的属性\",\"slug\":\"buffer的属性\",\"link\":\"#buffer的属性\",\"children\":[]},{\"level\":3,\"title\":\"Buffer的常用API\",\"slug\":\"buffer的常用api\",\"link\":\"#buffer的常用api\",\"children\":[]},{\"level\":3,\"title\":\"直接字节缓冲区\",\"slug\":\"直接字节缓冲区\",\"link\":\"#直接字节缓冲区\",\"children\":[]}]},{\"level\":2,\"title\":\"Channel\",\"slug\":\"channel-1\",\"link\":\"#channel-1\",\"children\":[{\"level\":3,\"title\":\"Channels概述\",\"slug\":\"channels概述\",\"link\":\"#channels概述\",\"children\":[]},{\"level\":3,\"title\":\"Scatter/Gather\",\"slug\":\"scatter-gather\",\"link\":\"#scatter-gather\",\"children\":[]},{\"level\":3,\"title\":\"FileChannel\",\"slug\":\"filechannel\",\"link\":\"#filechannel\",\"children\":[]},{\"level\":3,\"title\":\"SocketChannel与ServerSocketChannel\",\"slug\":\"socketchannel与serversocketchannel\",\"link\":\"#socketchannel与serversocketchannel\",\"children\":[]},{\"level\":3,\"title\":\"DataGramChannel\",\"slug\":\"datagramchannel\",\"link\":\"#datagramchannel\",\"children\":[]},{\"level\":3,\"title\":\"Pipe\",\"slug\":\"pipe\",\"link\":\"#pipe\",\"children\":[]}]},{\"level\":2,\"title\":\"Selector选择器\",\"slug\":\"selector选择器\",\"link\":\"#selector选择器\",\"children\":[{\"level\":3,\"title\":\"选择器基础\",\"slug\":\"选择器基础\",\"link\":\"#选择器基础\",\"children\":[]},{\"level\":3,\"title\":\"选择键相关的方法\",\"slug\":\"选择键相关的方法\",\"link\":\"#选择键相关的方法\",\"children\":[]},{\"level\":3,\"title\":\"使用选择器\",\"slug\":\"使用选择器\",\"link\":\"#使用选择器\",\"children\":[]}]}],\"git\":{\"updatedTime\":1709311174000,\"contributors\":[{\"name\":\"wqby\",\"email\":\"9479421@qq.com\",\"commits\":1}]},\"filePathRelative\":\"view/note/Java/动力节点NIO学习笔记.md\",\"excerpt\":\"\\n<h2>NIO概述</h2>\\n<h3>程序读取数据模型</h3>\\n<p><img src=\\\"https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220407225325352.png\\\" alt=\\\"image-20220407225325352\\\"></p>\\n<p>程序执行效率是由I/O效率决定的</p>\\n<p>在操作系统上是可以从硬件上直接大块大块的读取数据，而JVM的I/O更喜欢小块小块的读取数据，这是JVM在I/O方面的效率不足。相当于操作系统使用大卡车来运输数据，而JVM的I/O就喜欢一铲子一铲子运输。</p>\\n\"}")
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

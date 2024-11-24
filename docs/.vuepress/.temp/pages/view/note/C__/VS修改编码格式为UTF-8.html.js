import comp from "F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/C__/VS修改编码格式为UTF-8.html.vue"
const data = JSON.parse("{\"path\":\"/view/note/C__/VS%E4%BF%AE%E6%94%B9%E7%BC%96%E7%A0%81%E6%A0%BC%E5%BC%8F%E4%B8%BAUTF-8.html\",\"title\":\"VS修改编码格式为UTF-8\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1709311174000,\"contributors\":[{\"name\":\"wqby\",\"email\":\"9479421@qq.com\",\"commits\":1}]},\"filePathRelative\":\"view/note/C++/VS修改编码格式为UTF-8.md\",\"excerpt\":\"\\n<ol>\\n<li>\\n<p>对于国内用户来说，大多设置 Windows 操作系统语言为简体中文(编码为 GBK 或 GB2312)，由此导致 Visual Studio2017 默认采用 GBK/GB2312 编码格式，其创建的项目文件(.cpp,.h 等)都采用 GBK/GB2312 编码，可能会给代码的移植性带来一点阻碍（主要是中文乱码），笔者就经常用 VS 运行 github 等的项目然后出现如下警告或者乱码：</p>\\n<p>warning C4819: 该文件包含不能在当前代码页(936)中表示的字符。请将该文件保存为 Unicode 格式以防止数据丢失</p>\\n</li>\\n<li>\\n<p>在此，建议统一使用 UTF-8（无 bom）编码格式，那么具体要怎么修改呢？</p>\\n</li>\\n</ol>\"}")
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

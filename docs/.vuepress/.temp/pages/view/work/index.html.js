import comp from "F:/qBlogPlus/docs/.vuepress/.temp/pages/view/work/index.html.vue"
const data = JSON.parse("{\"path\":\"/view/work/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"layout\":\"Work\"},\"headers\":[],\"git\":{\"updatedTime\":1709311174000,\"contributors\":[{\"name\":\"wqby\",\"email\":\"9479421@qq.com\",\"commits\":1}]},\"filePathRelative\":\"view/work/README.md\",\"excerpt\":\"\"}")
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

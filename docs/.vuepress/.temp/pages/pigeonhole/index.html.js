import comp from "F:/qBlogPlus/docs/.vuepress/.temp/pages/pigeonhole/index.html.vue"
const data = JSON.parse("{\"path\":\"/pigeonhole/\",\"title\":\"Pigeonhole\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Pigeonhole\",\"sidebar\":false,\"blog\":{\"type\":\"type\",\"key\":\"Pigeonhole\"},\"layout\":\"Pigeonhole\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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

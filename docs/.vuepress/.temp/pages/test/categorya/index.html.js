import comp from "C:/Users/Administrator/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/test/categorya/index.html.vue"
const data = JSON.parse("{\"path\":\"/test/categorya/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"blog\":{\"type\":\"category\",\"name\":\"CategoryA\",\"key\":\"test\"},\"layout\":\"Test\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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

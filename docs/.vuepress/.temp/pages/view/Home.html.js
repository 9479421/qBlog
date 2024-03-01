import comp from "C:/Users/Administrator/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/view/Home.html.vue"
const data = JSON.parse("{\"path\":\"/view/Home.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"layout\":\"Test\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"view/Home.md\",\"excerpt\":\"\"}")
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

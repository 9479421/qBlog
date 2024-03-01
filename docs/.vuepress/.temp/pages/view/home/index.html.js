import comp from "C:/Users/Administrator/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/view/home/index.html.vue"
const data = JSON.parse("{\"path\":\"/view/home/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"layout\":\"Home\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"view/home/README.md\",\"excerpt\":\"\"}")
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

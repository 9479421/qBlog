import comp from "C:/Users/Administrator/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/pig/index.html.vue"
const data = JSON.parse("{\"path\":\"/pig/\",\"title\":\"Timeline\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Timeline\",\"sidebar\":false,\"blog\":{\"type\":\"type\",\"key\":\"pig\"},\"layout\":\"Pigeonhole\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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

export const data = {
  "key": "v-7c1a6266",
  "path": "/en-US/",
  "title": "Hello VuePress",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1652203145000,
    "contributors": [
      {
        "name": "wangquanbaye",
        "email": "9479421@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "en-US/README.md"
}

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

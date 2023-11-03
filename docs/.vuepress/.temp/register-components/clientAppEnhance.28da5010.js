import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("About", defineAsyncComponent(() => import("C:/Users/Administrator/Desktop/qBlog/docs/.vuepress/components/About.vue"))),
  app.component("Friend", defineAsyncComponent(() => import("C:/Users/Administrator/Desktop/qBlog/docs/.vuepress/components/Friend.vue"))),
  app.component("Home", defineAsyncComponent(() => import("C:/Users/Administrator/Desktop/qBlog/docs/.vuepress/components/Home.vue"))),
  app.component("Work", defineAsyncComponent(() => import("C:/Users/Administrator/Desktop/qBlog/docs/.vuepress/components/Work.vue"))),
  app.component("Mallki-index", defineAsyncComponent(() => import("C:/Users/Administrator/Desktop/qBlog/docs/.vuepress/components/Mallki/index.vue"))),
  app.component("PanThumb-index", defineAsyncComponent(() => import("C:/Users/Administrator/Desktop/qBlog/docs/.vuepress/components/PanThumb/index.vue")))
}

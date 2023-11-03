import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("About", defineAsyncComponent(() => import("F:/qBlog/docs/.vuepress/components/About.vue"))),
  app.component("Friend", defineAsyncComponent(() => import("F:/qBlog/docs/.vuepress/components/Friend.vue"))),
  app.component("PigeonHole", defineAsyncComponent(() => import("F:/qBlog/docs/.vuepress/components/PigeonHole.vue"))),
  app.component("Work", defineAsyncComponent(() => import("F:/qBlog/docs/.vuepress/components/Work.vue")))
}

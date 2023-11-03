import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("Test", defineAsyncComponent(() => import("C:/Users/Administrator/Desktop/vuepress-starter/docs/.vuepress/components/Test.vue")))
}

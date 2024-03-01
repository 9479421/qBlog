import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Friend", defineAsyncComponent(() => import("C:/Users/Administrator/Desktop/vuepress-starter/docs/.vuepress/components/Friend.vue")))
  },
}

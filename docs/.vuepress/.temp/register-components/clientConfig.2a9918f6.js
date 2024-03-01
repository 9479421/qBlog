import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Friend", defineAsyncComponent(() => import("F:/qBlogPlus/docs/.vuepress/components/Friend.vue")))
  },
}

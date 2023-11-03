import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("F:/qBlog/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("F:/qBlog/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
  "Home": defineAsyncComponent(() => import("F:/qBlog/docs/.vuepress/theme/layouts/Home.vue")),
}

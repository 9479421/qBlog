import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import genSidebar from "./utils/genderSidebar.js";
import {
  registerComponentsPlugin,
} from"@vuepress/plugin-register-components";

import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)

var sidebar = {
  "/view/note": genSidebar.getLearnList("/view/note")
};
export default defineUserConfig({
  lang: 'en-US',

  title: '不良人',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/b_9523abbb426ea0c8a21b2754fdc52300.jpg',

    navbar: [
      {
        text: '主页',
        link: '/'
      }, 
      {
        text: "学习",
        children: [
          {
            text: "学习笔记",
            link: "/view/note/",
          },
        ],
      },
      {
        text: '归档',
        link: '/view/pigeonhole/'
      },
      {
        text: '作品',
        link: '/view/work/'
      },
      {
        text: '关于',
        link: '/view/about/'
      }
    ],
    sidebar: sidebar

  }),

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    blogPlugin({
      // Only files under posts are articles
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith('blog/') : false,

      // Getting article info
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt:
          // Support manually set excerpt through frontmatter
          typeof frontmatter.excerpt === 'string'
            ? frontmatter.excerpt
            : data?.excerpt || '',
      }),

      // Generate excerpt for all pages excerpt those users choose to disable
      excerptFilter: ({ frontmatter }) =>
        !frontmatter.home &&
        frontmatter.excerpt !== false &&
        typeof frontmatter.excerpt !== 'string',

      category: [
        // {
        //   key: 'test',
        //   getter: (page) => page.frontmatter.category || [],
        //   layout: 'Test',
        //   itemLayout: 'Test',
        //   frontmatter: () => ({
        //     title: 'Test',
        //     sidebar: false,
        //   }),
        // },
        // {
        //   key: 'category',
        //   getter: (page) => page.frontmatter.category || [],
        //   layout: 'Category',
        //   itemLayout: 'Category',
        //   frontmatter: () => ({
        //     title: 'Categories',
        //     sidebar: false,
        //   }),
        //   itemFrontmatter: (name) => ({
        //     title: `Category ${name}`,
        //     sidebar: false,
        //   }),
        // },
        // {
        //   key: 'tag',
        //   getter: (page) => page.frontmatter.tag || [],
        //   layout: 'Tag',
        //   itemLayout: 'Tag',
        //   frontmatter: () => ({
        //     title: 'Tags',
        //     sidebar: false,
        //   }),
        //   itemFrontmatter: (name) => ({
        //     title: `Tag ${name}`,
        //     sidebar: false,
        //   }),
        // },
      ],

      type: [
        // {
        //   key: 'article',
        //   // Remove archive articles
        //   filter: (page) => !page.frontmatter.archive,
        //   layout: 'Article',
        //   frontmatter: () => ({
        //     title: 'Articles',
        //     sidebar: false,
        //   }),
        //   // Sort pages with time and sticky
        //   sorter: (pageA, pageB) => {
        //     if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
        //       return pageB.frontmatter.sticky - pageA.frontmatter.sticky

        //     if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1

        //     if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1

        //     if (!pageB.frontmatter.date) return 1
        //     if (!pageA.frontmatter.date) return -1

        //     return (
        //       new Date(pageB.frontmatter.date).getTime() -
        //       new Date(pageA.frontmatter.date).getTime()
        //     )
        //   },
        // },
        {
          key: 'timeline',
          // Only article with date should be added to timeline
          filter: (page) => page.frontmatter.date instanceof Date,
          // Sort pages with time
          sorter: (pageA, pageB) =>
            new Date(pageB.frontmatter.date).getTime() -
            new Date(pageA.frontmatter.date).getTime(),
          layout: 'Timeline',
          frontmatter: () => ({
            title: 'Timeline',
            sidebar: false,
          }),
        },
        {
          key: 'Pigeonhole',
          // Only article with date should be added to timeline
          filter: (page) => page.frontmatter.date instanceof Date,
          // Sort pages with time
          sorter: (pageA, pageB) =>
            new Date(pageB.frontmatter.date).getTime() -
            new Date(pageA.frontmatter.date).getTime(),
          layout: 'Pigeonhole',
          frontmatter: () => ({ //设置文章标签
            title: 'Pigeonhole',
            sidebar: false,
          }),
        },
      ],
      hotReload: true,
    }),
  ],

  bundler: viteBundler(),
})

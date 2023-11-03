const { defaultTheme, appInit } = require("vuepress");



const localTheme = require('./theme');

const {
  registerComponentsPlugin,
} = require("@vuepress/plugin-register-components");
const { path } = require("@vuepress/utils");

const { viteBundler } = require("@vuepress/bundler-vite");

const genSidebar = require("./genderSidebar.js");
var sidebar = {
  "/view/note": genSidebar.getLearnList("/view/note")
};




// // 读取blog的md 导入sidebar
// const modulesFiles = import.meta.glob("../../blog/*.md");
// let modules = [];
// console.log("modulesFiles", modulesFiles);
// for (const path in modulesFiles) {
//   console.log(path);
//   var fileName = modulesFiles[path].toString().match(/docs\/blog\/(\S*)\?/)[1];
//   console.log(fileName);
//   modules = [].concat(modules, modulesFiles[path]); //.default
// }
// console.log(modules);

module.exports = {
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],
  // vite插件配置
  bundler: viteBundler({
    viteOptions: {
      // 没有这个好像会打包偶然报错.md文件内容 unexpected ''
      assetsInclude: ['**/*.md'],
    },
    vuePluginOptions: {},
  }),

  // base:'./',
  port: 8081,
  lang: "zh-CN",
  title: "王权霸业",
  description: "这是我的第一个 VuePress 站点",
  head: [],
  theme: localTheme({
    lastUpdated: false,
    contributors: false,

    // repoLabel: "sbGit",
    // repo: "https://github.com/9479421",
    logo: "https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/1.webp",
    logoDark:
      "https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220422002506.jpg",
    navbar: [
      {
        text: "主页",
        link: "/",
      },
      {
        text: "学习",
        children: [
          {
            text: "学习笔记",
            link: "/view/note",
          },
        ],
      },
      {
        text: "归档",
        link: "/view/pigeonhole",
      },
      {
        text: "作品",
        link: "/view/work",
      },
      {
        text: "关于我",
        link: "/view/about",
      }
    ],
    sidebar: sidebar,
  }),
};

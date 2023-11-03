"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeData = void 0;
var themeData = {
  "logo": "https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/1.webp",
  "logoDark": "https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220422002506.jpg",
  "navbar": [{
    "text": "主页",
    "link": "/"
  }, {
    "text": "学习",
    "children": [{
      "text": "学习笔记",
      "link": "/view/note"
    }]
  }, {
    "text": "归档",
    "link": "/view/pigeonhole"
  }, {
    "text": "作品",
    "link": "/view/work"
  }, {
    "text": "关于我",
    "link": "/view/about"
  }],
  "sidebar": {
    "/view/note": [{
      "text": "Guide",
      "children": ["/guide/README.md", "/guide/getting-started.md"]
    }, {
      "text": "VuePress Reference",
      "collapsible": true,
      "children": ["/reference/cli.md", "/reference/config.md"]
    }, {
      "text": "Bundlers Reference",
      "collapsible": true,
      "children": ["/reference/bundler/vite.md", "/reference/bundler/webpack.md"]
    }],
    "/reference/": [{
      "text": "Reference",
      "children": ["/reference/cli.md", "/reference/config.md"]
    }]
  },
  "editLink": false,
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLinkText": "Edit this page",
  "lastUpdated": false,
  "lastUpdatedText": "Last Updated",
  "contributors": false,
  "contributorsText": "Contributors",
  "notFound": ["There's nothing here.", "How did we get here?", "That's a Four-Oh-Four.", "Looks like we've got some broken links."],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
};
exports.themeData = themeData;
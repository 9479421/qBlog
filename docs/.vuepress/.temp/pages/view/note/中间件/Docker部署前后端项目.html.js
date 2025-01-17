import comp from "F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/中间件/Docker部署前后端项目.html.vue"
const data = JSON.parse("{\"path\":\"/view/note/%E4%B8%AD%E9%97%B4%E4%BB%B6/Docker%E9%83%A8%E7%BD%B2%E5%89%8D%E5%90%8E%E7%AB%AF%E9%A1%B9%E7%9B%AE.html\",\"title\":\"Docker部署前后端\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"配置Nginx\",\"slug\":\"配置nginx\",\"link\":\"#配置nginx\",\"children\":[{\"level\":3,\"title\":\"1.创建容器\",\"slug\":\"_1-创建容器\",\"link\":\"#_1-创建容器\",\"children\":[]},{\"level\":3,\"title\":\"2.配置conf\",\"slug\":\"_2-配置conf\",\"link\":\"#_2-配置conf\",\"children\":[]},{\"level\":3,\"title\":\"3.创建html目录\",\"slug\":\"_3-创建html目录\",\"link\":\"#_3-创建html目录\",\"children\":[]},{\"level\":3,\"title\":\"4.重启nginx\",\"slug\":\"_4-重启nginx\",\"link\":\"#_4-重启nginx\",\"children\":[]}]},{\"level\":2,\"title\":\"配置Mongodb\",\"slug\":\"配置mongodb\",\"link\":\"#配置mongodb\",\"children\":[{\"level\":3,\"title\":\"1.创建镜像\",\"slug\":\"_1-创建镜像\",\"link\":\"#_1-创建镜像\",\"children\":[]},{\"level\":3,\"title\":\"2.创建容器\",\"slug\":\"_2-创建容器\",\"link\":\"#_2-创建容器\",\"children\":[]},{\"level\":3,\"title\":\"3.连接数据库\",\"slug\":\"_3-连接数据库\",\"link\":\"#_3-连接数据库\",\"children\":[]}]},{\"level\":2,\"title\":\"配置SpringBoot\",\"slug\":\"配置springboot\",\"link\":\"#配置springboot\",\"children\":[]}],\"git\":{\"updatedTime\":1709311174000,\"contributors\":[{\"name\":\"wqby\",\"email\":\"9479421@qq.com\",\"commits\":1}]},\"filePathRelative\":\"view/note/中间件/Docker部署前后端项目.md\",\"excerpt\":\"\\n<h2>配置Nginx</h2>\\n<h3>1.创建容器</h3>\\n<blockquote>\\n<p>1.创建映射路径</p>\\n</blockquote>\\n<p>mkdir -p /usr/local/docker/nginx/conf\\nmkdir -p /usr/local/docker/nginx/log\\nmkdir -p /usr/local/docker/nginx/html</p>\\n<blockquote>\\n<p>2.生成容器</p>\\n</blockquote>\\n<p>docker run --name nginx -p 80:80 -d nginx</p>\\n<blockquote>\\n<p>3.将容器nginx.conf文件复制到宿主机</p>\\n</blockquote>\"}")
export { comp, data }

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

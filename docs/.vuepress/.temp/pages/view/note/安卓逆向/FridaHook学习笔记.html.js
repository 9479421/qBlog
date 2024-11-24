import comp from "F:/qBlogPlus/docs/.vuepress/.temp/pages/view/note/安卓逆向/FridaHook学习笔记.html.vue"
const data = JSON.parse("{\"path\":\"/view/note/%E5%AE%89%E5%8D%93%E9%80%86%E5%90%91/FridaHook%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html\",\"title\":\"FridaHook\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"FridaHook环境搭建\",\"slug\":\"fridahook环境搭建\",\"link\":\"#fridahook环境搭建\",\"children\":[]},{\"level\":2,\"title\":\"FridaHook普通方法和重载方法\",\"slug\":\"fridahook普通方法和重载方法\",\"link\":\"#fridahook普通方法和重载方法\",\"children\":[]},{\"level\":2,\"title\":\"关键代码Hook\",\"slug\":\"关键代码hook\",\"link\":\"#关键代码hook\",\"children\":[{\"level\":3,\"title\":\"打印堆栈\",\"slug\":\"打印堆栈\",\"link\":\"#打印堆栈\",\"children\":[]},{\"level\":3,\"title\":\"HashMap\",\"slug\":\"hashmap\",\"link\":\"#hashmap\",\"children\":[]},{\"level\":3,\"title\":\"ArrayList\",\"slug\":\"arraylist\",\"link\":\"#arraylist\",\"children\":[]},{\"level\":3,\"title\":\"TextUtils.isEmpty\",\"slug\":\"textutils-isempty\",\"link\":\"#textutils-isempty\",\"children\":[]},{\"level\":3,\"title\":\"Log\",\"slug\":\"log\",\"link\":\"#log\",\"children\":[]},{\"level\":3,\"title\":\"Collections.sort\",\"slug\":\"collections-sort\",\"link\":\"#collections-sort\",\"children\":[]},{\"level\":3,\"title\":\"JSONObject.put()/JSONObject.getString()\",\"slug\":\"jsonobject-put-jsonobject-getstring\",\"link\":\"#jsonobject-put-jsonobject-getstring\",\"children\":[]},{\"level\":3,\"title\":\"Toast.show()\",\"slug\":\"toast-show\",\"link\":\"#toast-show\",\"children\":[]},{\"level\":3,\"title\":\"Base64.encodeToString()\",\"slug\":\"base64-encodetostring\",\"link\":\"#base64-encodetostring\",\"children\":[]},{\"level\":3,\"title\":\"String.getBytes()\",\"slug\":\"string-getbytes\",\"link\":\"#string-getbytes\",\"children\":[]},{\"level\":3,\"title\":\"StringFactory.newStringFromString()/StringFactory.newStringFromChars()\",\"slug\":\"stringfactory-newstringfromstring-stringfactory-newstringfromchars\",\"link\":\"#stringfactory-newstringfromstring-stringfactory-newstringfromchars\",\"children\":[]},{\"level\":3,\"title\":\"StringBuilder.toString()\",\"slug\":\"stringbuilder-tostring\",\"link\":\"#stringbuilder-tostring\",\"children\":[]},{\"level\":3,\"title\":\"AppCompatActivity.enumerateLoadedClassesSync()\",\"slug\":\"appcompatactivity-enumerateloadedclassessync\",\"link\":\"#appcompatactivity-enumerateloadedclassessync\",\"children\":[]},{\"level\":3,\"title\":\"R.id.findViewById()\",\"slug\":\"r-id-findviewbyid\",\"link\":\"#r-id-findviewbyid\",\"children\":[]},{\"level\":3,\"title\":\"setOnClickListener\",\"slug\":\"setonclicklistener\",\"link\":\"#setonclicklistener\",\"children\":[]}]},{\"level\":2,\"title\":\"Frida启动注入\",\"slug\":\"frida启动注入\",\"link\":\"#frida启动注入\",\"children\":[]},{\"level\":2,\"title\":\"开启全局调试权限\",\"slug\":\"开启全局调试权限\",\"link\":\"#开启全局调试权限\",\"children\":[]}],\"git\":{\"updatedTime\":1709311174000,\"contributors\":[{\"name\":\"wqby\",\"email\":\"9479421@qq.com\",\"commits\":1}]},\"filePathRelative\":\"view/note/安卓逆向/FridaHook学习笔记.md\",\"excerpt\":\"\\n<h2>FridaHook环境搭建</h2>\\n<p>准备环境：Python、Nodejs</p>\\n<p>frida安装指定版本</p>\\n<p>pip install frida==14.2.18</p>\\n<p>pip install frida-tools==9.2.5</p>\\n<p>frida代码提示的配置：npm i @types/frida-gum</p>\\n<p>frida-gadget(脱离电脑 免root)</p>\\n<p>frida-inject(脱离电脑)</p>\\n<p>frida-server(连接电脑)</p>\\n<p>1、下载frida-server到安卓手机</p>\\n<p>adb push E:\\\\frida-server-14.2.18-android-arm64 /data/local/tmp/fsarm64</p>\"}")
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

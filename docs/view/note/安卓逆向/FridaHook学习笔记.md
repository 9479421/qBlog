# FridaHook

## FridaHook环境搭建

准备环境：Python、Nodejs

frida安装指定版本

pip install frida==14.2.18 

pip install frida-tools==9.2.5

frida代码提示的配置：npm i @types/frida-gum



frida-gadget(脱离电脑 免root)

frida-inject(脱离电脑)

frida-server(连接电脑)



1、下载frida-server到安卓手机

adb push E:\frida-server-14.2.18-android-arm64 /data/local/tmp/fsarm64

2、修改fsarm64权限

chmod 777 fsarm64

3、运行fsarm64

./fsarm64

4、注入jsHook测试

frida -UF -l test2.js





## FridaHook普通方法和重载方法

```javascript
Java.perform(function (){
    var jsonRequest = Java.use("com.dodonew.online.http.JsonRequest")
    console.log("jsonRequest:",jsonRequest)
    jsonRequest.paraMap.implementation = function (a){
        console.log("params1:",a)
        this.paraMap(a)
    }

    jsonRequest.addRequestMap.overload('java.util.Map','int').implementation = function (a,b){
        console.log("addRequestMap params:",a,b)
        console.log("addRequestMap params:",a.get("username"))
        console.log("addRequestMap params:",a.get("userPwd"))

        this.addRequestMap(a,b)
    }
})
```



## 关键代码Hook

### 打印堆栈

```javascript
function showStacks() {
    console.log(
        Java.use("android.util.Log")
            .getStackTraceString(
                Java.use("java.lang.Throwable").$new()
            )
    );
}
```

### HashMap

```javascript
var hashMap = Java.use("java.util.HashMap");
hashMap.put.implementation = function (a, b) {
    if(a.equals("username")){
        showStacks();
        console.log("hashMap.put: ", a, b);
    }
    //console.log("hashMap.put: ", a, b);
    return this.put(a, b);
}
```

### ArrayList

```javascript
var arrayList = Java.use("java.util.ArrayList");
arrayList.add.overload('java.lang.Object').implementation = function (a) {
    if (a.equals("username=15968079477")) {
        showStacks();
        console.log("arrayList.add.overload('java.lang.Object'): ", a);
    }
    return this.add(a);
}
arrayList.add.overload('int', 'java.lang.Object').implementation = function (a, b) {
    console.log("arrayList.add.overload('int', 'java.lang.Object'): ", a, b);
    return this.add(a, b);
}
```

### TextUtils.isEmpty

```javascript
var textUtils = Java.use("android.text.TextUtils");
textUtils.isEmpty.implementation = function (a) {
    if(a == "2v+DC2gq7RuAC8PE5GZz5wH3/y9ZVcWhFwhDY9L19g9iEd075+Q7xwewvfIN0g0ec/NaaF43/S0="){
        showStacks();
        console.log("textUtils.isEmpty: ", a);
    }
    //console.log("textUtils.isEmpty: ", a);
    return this.isEmpty(a);
}
```

### Log

```javascript
var log = Java.use("android.util.Log");
log.w.overload('java.lang.String', 'java.lang.String').implementation = function (tag, message) {
    showStacks();
    console.log("log.w: ", tag, message);
    return this.w(tag, message);
}
```

### Collections.sort

```jajavascriptvascript
var collections = Java.use("java.util.Collections");
collections.sort.overload('java.util.List').implementation = function (a) {
    try{
        showStacks();
        var result = Java.cast(a, Java.use("java.util.ArrayList"));
        console.log("collections.sort List: ", result.toString());
    }catch (e) {

    }
    return this.sort(a);
}
collections.sort.overload('java.util.List', 'java.util.Comparator').implementation = function (a, b) {
    try{
        showStacks();
        var result = Java.cast(a, Java.use("java.util.ArrayList"));
        console.log("collections.sort List Comparator: ", result.toString());
    }catch (e) {

    }
    return this.sort(a, b);
}
```

### JSONObject.put()/JSONObject.getString()

```javascript
var jSONObject = Java.use("org.json.JSONObject");
jSONObject.put.overload('java.lang.String', 'java.lang.Object').implementation = function (a, b) {
    if (a.indexOf("Encrypt") != -1) {
        showStacks();
        console.log("jSONObject.put: ", a, b);
    }
    return this.put(a, b);
}
jSONObject.getString.implementation = function (a) {
    showStacks();
    console.log("jSONObject.getString: ", a);
    var result = this.getString(a);
    console.log("jSONObject.getString result: ", result);
    return result;
}
```

### Toast.show()

```javascript
var toast = Java.use("android.widget.Toast");
toast.show.implementation = function () {
    showStacks();
    console.log("toast.show: ");
    return this.show();
}
```

### Base64.encodeToString()

```javascript
var base64 = Java.use("android.util.Base64");
base64.encodeToString.overload('[B', 'int').implementation = function (a, b) {
    showStacks();
    console.log("base64.encodeToString: ", JSON.stringify(a));
    var result = this.encodeToString(a, b);
    console.log("base64.encodeToString result: ", result)
    return result;
}
```

### String.getBytes()

```javascript
var str = Java.use("java.lang.String");
str.getBytes.overload().implementation = function () {
    showStacks();
    var result = this.getBytes();
    var newStr = str.$new(result);
    console.log("str.getBytes result: ", newStr);
    return result;
}
str.getBytes.overload('java.lang.String').implementation = function (a) {
    showStacks();
    var result = this.getBytes(a);
    var newStr = str.$new(result);
    console.log("str.getBytes result: ", newStr);
    return result;
}
```

### StringFactory.newStringFromString()/StringFactory.newStringFromChars()

```javascript
var stringFactory = Java.use("java.lang.StringFactory");
stringFactory.newStringFromString.implementation = function (a) {
    showStacks();
    var retval = this.newStringFromString(a);
    console.log("stringFactory.newStringFromString: ", retval);
    return retval;
}
stringFactory.newStringFromChars.overload('[C').implementation = function (a) {
    showStacks();
    var retval = this.newStringFromChars(a);
    console.log("stringFactory.newStringFromChars: ", retval);
    return retval;
}
```

### StringBuilder.toString()

```javascript
var sb = Java.use("java.lang.StringBuilder");
sb.toString.implementation = function () {
    var retval = this.toString();
    if (retval.indexOf("Encrypt") != -1) {
        showStacks();
    }
    console.log("StringBuilder.toString: ", retval);
    return retval;
}
var sb = Java.use("java.lang.StringBuffer");
sb.toString.implementation = function () {
    var retval = this.toString();
    if (retval.indexOf("username") != -1) {
        showStacks();
    }
    console.log("StringBuffer.toString: ", retval);
    return retval;
}
```

### AppCompatActivity.enumerateLoadedClassesSync()

```javascript
var appCompatActivity = Java.use("androidx.appcompat.app.AppCompatActivity");
console.log(appCompatActivity);
var classArr = Java.enumerateLoadedClassesSync();
for (var i = 0; i < classArr.length; i++) {
    console.log(classArr[i]);
}
```

### R.id.findViewById()

```javascript
var btn_login_id = Java.use("com.dodonew.online.R$id").btn_login.value;
console.log("btn_login_id", btn_login_id);
var appCompatActivity = Java.use("android.support.v7.app.AppCompatActivity");
appCompatActivity.findViewById.implementation = function (a) {
    if(a == btn_login_id){
        showStacks();
        console.log("appCompatActivity.findViewById: ", a);
    }
    console.log("appCompatActivity.findViewById: ", a);
    return this.findViewById(a);
}
```

### setOnClickListener

```javascript
var btn_login_id = Java.use("com.dodonew.online.R$id").btn_login.value;
console.log("btn_login_id", btn_login_id);
var view = Java.use("android.view.View");
view.setOnClickListener.implementation = function (a) {
    if(this.getId() == btn_login_id){
        showStacks();
        console.log("view.id: " + this.getId());
        console.log("view.setOnClickListener is called");
    }
    return this.setOnClickListener(a);
}
```



## **Frida启动注入**

frida -U -f com.dodonew.online -l test2.js -o log.txt --no-pause



## 开启全局调试权限

```shell
C:\Users\Administrator>adb shell
sailfish:/ $ su
sailfish:/ # ls
acct       config        dsp             init.usb.configfs.rc odm         product_services system
apex       d             etc             init.usb.rc          oem         res              ueventd.rc
bin        data          firmware        init.zygote32.rc     persist     sbin             vendor
bugreports debug_ramdisk init            init.zygote64_32.rc  postinstall sdcard           verity_key
cache      default.prop  init.environ.rc lost+found           proc        storage
charger    dev           init.rc         mnt                  product     sys
sailfish:/ # cat default.prop
ro.debuggable=0 #0就是没有调试权限
```

**使用mprop工具(重启失效)**（亲测不行）

下载mprop：https://github.com/wpvsyou/mprop

查看手机cpu架构：adb shell getprop ro.product.cpu.abi

```shell
adb push mprop /data/local/tmp



adb shell

su

cd /data/local/tmp

chmod 755 mprop



./mprop ro.debuggable 1

getprop ro.debuggable

adb kill-server
```

**安装MagiskHide Props Config模块（永久有效）**(我测试了不行啊)

**Magisk重置ro.debuggable（重启失效）**(亲测可行，但还是调试失败)

```shell
adb shell #adb进入命令行模式
su #切换至超级用户
magisk resetprop ro.debuggable 1
stop;start; #一定要通过该方式重启
```
































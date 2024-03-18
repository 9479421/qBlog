---
title: NDK开发so动态调用so
date: 2024-03-04
category:
 - History
tag:
 - Android
 - C++
---

# NDK开发so动态调用so

创建一个新的cpp，并且配置so绑定此cpp，这便是要被调用的so

![image-20240304142825887](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240304142825887.png)

在MainActivity.java中声明public native String stringFromOtherSo(String path)，并在native-lib.cpp中实现该方法。

```c
extern "C"
JNIEXPORT jstring JNICALL
Java_vip_wqby_souseso_MainActivity_stringFromOtherSo(JNIEnv *env, jobject thiz,
                                                     jstring path) {
    const char* cPath = env->GetStringUTFChars(path, nullptr);
    void *soinfo = dlopen(cPath,RTLD_NOW);
    std::string(*ref)()= reinterpret_cast<std::string(*)()>(dlsym(soinfo,"getStr"));
    dlclose(soinfo);
    return env->NewStringUTF(ref().c_str());
}
```

该方法读取了路径为path的so文件，并且执行了so下的getStr()方法。

接下来我们要去编写被调用的so文件，也就是libshabi.so，即beused.cpp

```c
#include <string>

extern "C" std::string getStr(){
    return "这里是beused.cpp";
}
```

声明了Java层所调用的so方法，又编写了被so调用的so的方法。接下来就是对java层进行so方法调用了。

在NDK开发中，想要动态调用so文件，首先要拿到so文件所在的路径。

```java
public String getPath(Context ctx){
        PackageManager pm = ctx.getPackageManager();
        List<PackageInfo> pkgList = pm.getInstalledPackages(0);
        if (pkgList == null || pkgList.size()==0) return null;
        for(PackageInfo pi : pkgList){
            if (pi.applicationInfo.nativeLibraryDir.startsWith("/data/app") && pi.packageName.startsWith("vip.wqby.myapplication")){
                return pi.applicationInfo.nativeLibraryDir;
            }
        }
        return null;
    }
```

随后将so路径进行传递拼接，调用stringFromOtherSo(String path)

![image-20240304150947407](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240304150947407.png)

运行后发现毫无效果，我们经过调试输出会发现dlopen得到的返回值是nullptr，然后我们输出path路径，并去手机对应路径寻找。

![image-20240304151234287](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240304151234287.png)

发现对应的lib路径下根本没有so文件。这里是个坑，说明APP直接从APK内部读取了对应的so文件，并没有将so文件独立输出。

用rar软件打开apk包，对比了老包后发现，新包中用到的lib下`libcocos2djs.so`压缩算法为Store(存储模式，无压缩)。后面在网上找了一些资料，发现在gradle版本比较高的时候，`android:extractNativeLibs`的默认值发生了改变。

- `minSdkVersion < 23 或 Android Gradle plugin < 3.6.0`情况下，打包时 `android:extractNativeLibs=true`；
- `minSdkVersion >= 23 并且 Android Gradle plugin >= 3.6.0`情况下，打包时`android:extractNativeLibs=false`；

所以如果是目标SDK版本低于23的时候，该代码是可以执行成功的，而SDK大于等于23的时候，我们就要手动配置一下AndroidManifest.xml中的application，将android:extractNativeLibs="true"添加进去即可。

再次运行APP，发现beused.cpp中call的返回值被MainActivity赋值成功给了TextView

![image-20240304151646769](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240304151646769.png)

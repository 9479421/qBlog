---
title: C++调用Js代码
date: 2023-11-11
category:
  - History
tag:
  - C++
  - js
  - 编程
  - 逆向
  - 易语言
---
# C++调用Js代码

## 引言

C/C++调用js代码，据我了解如今跨平台解决方案中，最强大的应该是V8库，不过这个东西使用起来较为复杂，另一方面我技术比较菜，实在是没研究明白怎么用。随后找遍全网发现C++调用Js的相关文章与库几乎为0，于是想起了玩易语言时常用的精易模块自带的js执行功能，我只要用同等的解决方案不就可以了么？

赶忙下载了一波精易模块源码，直入主题。

![image-20231111022601808](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20231111022601808.png)

可以看到，易语言实现相关功能，使用的是windows提供的COM库，调用了ScrptControl组件，并且对JScript代码进行了运行，除此之外，COM库还支持运行VB代码。

我的需求没有跨平台，大多用于MFC，业务需求是爬虫调用js代码实现Sign加密。越简便越好，显然这才是最适合我的解决方案，忍不住说一句：易语言YYDS

## 代码实现

> 配置依赖

首先，使用COM库代码必须引入依赖

#import "C:\\Windows\\SysWOW64\\msscript.ocx" no_namespace

这一步直接引入如果报错了，记得配置下MFC

![image-20231111031115688](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20231111031115688.png)

同时切记调试器设置为x86位

> 初始化COM库

首先操作COM之前，必须初始化

```c
CoInitializeEx(NULL, COINIT_MULTITHREADED);
IScriptControlPtr m_pScript;
HRESULT hr = m_pScript.CreateInstance(__uuidof(ScriptControl));
if (FAILED(hr)) {
	printf(("initialize error\n"));
	return -1;
}
m_pScript->PutAllowUI(VARIANT_FALSE);
m_pScript->PutLanguage(_bstr_t(_T("JScript")));
m_pScript->AddRef();
```

> 直接执行JS代码

```c
_variant_t retVal = m_pScript->Eval("(function(){return 1+2;})();");
CString ret = retVal;
printf("%s\n", ret);  //3
m_pScript->Release();
```

> 指定函数执行

```c
hr = m_pScript->AddCode("function add(a,b){return a+b;}");  //Eval也可以
if (!SUCCEEDED(hr))
{
	printf("addcode error\n");
	return -1;
}
IDispatchPtr golbal_obj = m_pScript->GetCodeObject();
if (!golbal_obj) {
	printf("getObj error\n");
	return -1;
}
LPSAFEARRAY pSafeArr = SafeArrayCreateVector(VT_VARIANT, 0, 2);
long param1 = 0;
long param2 = 1;
VARIANT a;
a.vt = VT_I4;
a.lVal = 20;
VARIANT b;
b.vt = VT_I4;
b.lVal = 40;
SafeArrayPutElement(pSafeArr,&param1, &a);
SafeArrayPutElement(pSafeArr,&param2, &b);
_variant_t retVal = m_pScript->Run("add", &pSafeArr);
int retInt = retVal;
printf("ret = %d", retInt); //60
m_pScript->Release();
```

主要使用的操作就上面这两个。

## 实战测试

这里使用我逆向的某网站的JS加密作为测试案例，看看能否正常运行

js代码如下：

```javascript
function wordsToBytes(t) {
    for (var e = [], n = 0; n < 32 * t.length; n += 8) e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
    return e
}

function bytesToWords(t) {
    for (var e = [], n = 0, r = 0; n < t.length; n++, r += 8) e[r >>> 5] |= t[n] << 24 - r % 32;
    return e
}

function rotl(t, e) {
    return t << e | t >>> 32 - e
}

function endian(t) {
    if (t.constructor == Number) return 16711935 & rotl(t, 8) | 4278255360 & rotl(t, 24);
    for (var e = 0; e < t.length; e++) t[e] = endian(t[e]);
    return t
}

function stringToBytes(t) {
    for (var e = [], n = 0; n < t.length; n++) e.push(255 & t.charCodeAt(n));
    return e
}

a = function (t, n) {
    t = stringToBytes(t);
    for (var s = bytesToWords(t), c = 8 * t.length, u = 1732584193, l = -271733879, f = -1732584194, d = 271733878, p = 0; p < s.length; p++) s[p] = 16711935 & (s[p] << 8 | s[p] >>> 24) | 4278255360 & (s[p] << 24 | s[p] >>> 8);
    s[c >>> 5] |= 128 << c % 32, s[14 + (c + 64 >>> 9 << 4)] = c;
    var h = a._ff, v = a._gg, m = a._hh, y = a._ii;
    for (p = 0; p < s.length; p += 16) {
        var g = u, b = l, _ = f, w = d;
        u = h(u, l, f, d, s[p + 0], 7, -680876936), d = h(d, u, l, f, s[p + 1], 12, -389564586), f = h(f, d, u, l, s[p + 2], 17, 606105819), l = h(l, f, d, u, s[p + 3], 22, -1044525330), u = h(u, l, f, d, s[p + 4], 7, -176418897), d = h(d, u, l, f, s[p + 5], 12, 1200080426), f = h(f, d, u, l, s[p + 6], 17, -1473231341), l = h(l, f, d, u, s[p + 7], 22, -45705983), u = h(u, l, f, d, s[p + 8], 7, 1770035416), d = h(d, u, l, f, s[p + 9], 12, -1958414417), f = h(f, d, u, l, s[p + 10], 17, -42063), l = h(l, f, d, u, s[p + 11], 22, -1990404162), u = h(u, l, f, d, s[p + 12], 7, 1804603682), d = h(d, u, l, f, s[p + 13], 12, -40341101), f = h(f, d, u, l, s[p + 14], 17, -1502002290), l = h(l, f, d, u, s[p + 15], 22, 1236535329), u = v(u, l, f, d, s[p + 1], 5, -165796510), d = v(d, u, l, f, s[p + 6], 9, -1069501632), f = v(f, d, u, l, s[p + 11], 14, 643717713), l = v(l, f, d, u, s[p + 0], 20, -373897302), u = v(u, l, f, d, s[p + 5], 5, -701558691), d = v(d, u, l, f, s[p + 10], 9, 38016083), f = v(f, d, u, l, s[p + 15], 14, -660478335), l = v(l, f, d, u, s[p + 4], 20, -405537848), u = v(u, l, f, d, s[p + 9], 5, 568446438), d = v(d, u, l, f, s[p + 14], 9, -1019803690), f = v(f, d, u, l, s[p + 3], 14, -187363961), l = v(l, f, d, u, s[p + 8], 20, 1163531501), u = v(u, l, f, d, s[p + 13], 5, -1444681467), d = v(d, u, l, f, s[p + 2], 9, -51403784), f = v(f, d, u, l, s[p + 7], 14, 1735328473), l = v(l, f, d, u, s[p + 12], 20, -1926607734), u = m(u, l, f, d, s[p + 5], 4, -378558), d = m(d, u, l, f, s[p + 8], 11, -2022574463), f = m(f, d, u, l, s[p + 11], 16, 1839030562), l = m(l, f, d, u, s[p + 14], 23, -35309556), u = m(u, l, f, d, s[p + 1], 4, -1530992060), d = m(d, u, l, f, s[p + 4], 11, 1272893353), f = m(f, d, u, l, s[p + 7], 16, -155497632), l = m(l, f, d, u, s[p + 10], 23, -1094730640), u = m(u, l, f, d, s[p + 13], 4, 681279174), d = m(d, u, l, f, s[p + 0], 11, -358537222), f = m(f, d, u, l, s[p + 3], 16, -722521979), l = m(l, f, d, u, s[p + 6], 23, 76029189), u = m(u, l, f, d, s[p + 9], 4, -640364487), d = m(d, u, l, f, s[p + 12], 11, -421815835), f = m(f, d, u, l, s[p + 15], 16, 530742520), l = m(l, f, d, u, s[p + 2], 23, -995338651), u = y(u, l, f, d, s[p + 0], 6, -198630844), d = y(d, u, l, f, s[p + 7], 10, 1126891415), f = y(f, d, u, l, s[p + 14], 15, -1416354905), l = y(l, f, d, u, s[p + 5], 21, -57434055), u = y(u, l, f, d, s[p + 12], 6, 1700485571), d = y(d, u, l, f, s[p + 3], 10, -1894986606), f = y(f, d, u, l, s[p + 10], 15, -1051523), l = y(l, f, d, u, s[p + 1], 21, -2054922799), u = y(u, l, f, d, s[p + 8], 6, 1873313359), d = y(d, u, l, f, s[p + 15], 10, -30611744), f = y(f, d, u, l, s[p + 6], 15, -1560198380), l = y(l, f, d, u, s[p + 13], 21, 1309151649), u = y(u, l, f, d, s[p + 4], 6, -145523070), d = y(d, u, l, f, s[p + 11], 10, -1120210379), f = y(f, d, u, l, s[p + 2], 15, 718787259), l = y(l, f, d, u, s[p + 9], 21, -343485551), u = u + g >>> 0, l = l + b >>> 0, f = f + _ >>> 0, d = d + w >>> 0
    }
    return endian([u, l, f, d])
};
a._ff = function (t, e, n, r, o, i, a) {
    var s = t + (e & n | ~e & r) + (o >>> 0) + a;
    return (s << i | s >>> 32 - i) + e
}, a._gg = function (t, e, n, r, o, i, a) {
    var s = t + (e & r | n & ~r) + (o >>> 0) + a;
    return (s << i | s >>> 32 - i) + e
}, a._hh = function (t, e, n, r, o, i, a) {
    var s = t + (e ^ n ^ r) + (o >>> 0) + a;
    return (s << i | s >>> 32 - i) + e
}, a._ii = function (t, e, n, r, o, i, a) {
    var s = t + (n ^ (e | ~r)) + (o >>> 0) + a;
    return (s << i | s >>> 32 - i) + e
}, a._blocksize = 16, a._digestsize = 16;

function bytesToHex(t) {
    for (var e = [], n = 0; n < t.length; n++) e.push((t[n] >>> 4).toString(16)), e.push((15 & t[n]).toString(16));
    return e.join('')
}

function sign(str) {
    return bytesToHex(wordsToBytes(a(str)))
}
```

现在要调用js里的sign方法，并且传递一个字符串参数，得到一串类似MD5加密后的字符串返回值。

```c
hr = m_pScript->Eval("function wordsToBytes(t){for(var e=[],n=0;n<32*t.length;n+=8)e.push(t[n>>>5]>>>24-n%32&255);return e}function bytesToWords(t){for(var e=[],n=0,r=0;n<t.length;n++,r+=8)e[r>>>5]|=t[n]<<24-r%32;return e}function rotl(t,e){return t<<e|t>>>32-e}function endian(t){if(t.constructor==Number)return 16711935&rotl(t,8)|4278255360&rotl(t,24);for(var e=0;e<t.length;e++)t[e]=endian(t[e]);return t}function stringToBytes(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e}a=function(t,n){t=stringToBytes(t);for(var s=bytesToWords(t),c=8*t.length,u=1732584193,l=-271733879,f=-1732584194,d=271733878,p=0;p<s.length;p++)s[p]=16711935&(s[p]<<8|s[p]>>>24)|4278255360&(s[p]<<24|s[p]>>>8);s[c>>>5]|=128<<c%32,s[14+(c+64>>>9<<4)]=c;var h=a._ff,v=a._gg,m=a._hh,y=a._ii;for(p=0;p<s.length;p+=16){var g=u,b=l,_=f,w=d;u=h(u,l,f,d,s[p+0],7,-680876936),d=h(d,u,l,f,s[p+1],12,-389564586),f=h(f,d,u,l,s[p+2],17,606105819),l=h(l,f,d,u,s[p+3],22,-1044525330),u=h(u,l,f,d,s[p+4],7,-176418897),d=h(d,u,l,f,s[p+5],12,1200080426),f=h(f,d,u,l,s[p+6],17,-1473231341),l=h(l,f,d,u,s[p+7],22,-45705983),u=h(u,l,f,d,s[p+8],7,1770035416),d=h(d,u,l,f,s[p+9],12,-1958414417),f=h(f,d,u,l,s[p+10],17,-42063),l=h(l,f,d,u,s[p+11],22,-1990404162),u=h(u,l,f,d,s[p+12],7,1804603682),d=h(d,u,l,f,s[p+13],12,-40341101),f=h(f,d,u,l,s[p+14],17,-1502002290),l=h(l,f,d,u,s[p+15],22,1236535329),u=v(u,l,f,d,s[p+1],5,-165796510),d=v(d,u,l,f,s[p+6],9,-1069501632),f=v(f,d,u,l,s[p+11],14,643717713),l=v(l,f,d,u,s[p+0],20,-373897302),u=v(u,l,f,d,s[p+5],5,-701558691),d=v(d,u,l,f,s[p+10],9,38016083),f=v(f,d,u,l,s[p+15],14,-660478335),l=v(l,f,d,u,s[p+4],20,-405537848),u=v(u,l,f,d,s[p+9],5,568446438),d=v(d,u,l,f,s[p+14],9,-1019803690),f=v(f,d,u,l,s[p+3],14,-187363961),l=v(l,f,d,u,s[p+8],20,1163531501),u=v(u,l,f,d,s[p+13],5,-1444681467),d=v(d,u,l,f,s[p+2],9,-51403784),f=v(f,d,u,l,s[p+7],14,1735328473),l=v(l,f,d,u,s[p+12],20,-1926607734),u=m(u,l,f,d,s[p+5],4,-378558),d=m(d,u,l,f,s[p+8],11,-2022574463),f=m(f,d,u,l,s[p+11],16,1839030562),l=m(l,f,d,u,s[p+14],23,-35309556),u=m(u,l,f,d,s[p+1],4,-1530992060),d=m(d,u,l,f,s[p+4],11,1272893353),f=m(f,d,u,l,s[p+7],16,-155497632),l=m(l,f,d,u,s[p+10],23,-1094730640),u=m(u,l,f,d,s[p+13],4,681279174),d=m(d,u,l,f,s[p+0],11,-358537222),f=m(f,d,u,l,s[p+3],16,-722521979),l=m(l,f,d,u,s[p+6],23,76029189),u=m(u,l,f,d,s[p+9],4,-640364487),d=m(d,u,l,f,s[p+12],11,-421815835),f=m(f,d,u,l,s[p+15],16,530742520),l=m(l,f,d,u,s[p+2],23,-995338651),u=y(u,l,f,d,s[p+0],6,-198630844),d=y(d,u,l,f,s[p+7],10,1126891415),f=y(f,d,u,l,s[p+14],15,-1416354905),l=y(l,f,d,u,s[p+5],21,-57434055),u=y(u,l,f,d,s[p+12],6,1700485571),d=y(d,u,l,f,s[p+3],10,-1894986606),f=y(f,d,u,l,s[p+10],15,-1051523),l=y(l,f,d,u,s[p+1],21,-2054922799),u=y(u,l,f,d,s[p+8],6,1873313359),d=y(d,u,l,f,s[p+15],10,-30611744),f=y(f,d,u,l,s[p+6],15,-1560198380),l=y(l,f,d,u,s[p+13],21,1309151649),u=y(u,l,f,d,s[p+4],6,-145523070),d=y(d,u,l,f,s[p+11],10,-1120210379),f=y(f,d,u,l,s[p+2],15,718787259),l=y(l,f,d,u,s[p+9],21,-343485551),u=u+g>>>0,l=l+b>>>0,f=f+_>>>0,d=d+w>>>0}return endian([u,l,f,d])};a._ff=function(t,e,n,r,o,i,a){var s=t+(e&n|~e&r)+(o>>>0)+a;return(s<<i|s>>>32-i)+e},a._gg=function(t,e,n,r,o,i,a){var s=t+(e&r|n&~r)+(o>>>0)+a;return(s<<i|s>>>32-i)+e},a._hh=function(t,e,n,r,o,i,a){var s=t+(e^n^r)+(o>>>0)+a;return(s<<i|s>>>32-i)+e},a._ii=function(t,e,n,r,o,i,a){var s=t+(n^(e|~r))+(o>>>0)+a;return(s<<i|s>>>32-i)+e},a._blocksize=16,a._digestsize=16;function bytesToHex(t){for(var e=[],n=0;n<t.length;n++)e.push((t[n]>>>4).toString(16)),e.push((15&t[n]).toString(16));return e.join('')}function sign(str){return bytesToHex(wordsToBytes(a(str)))}");
if (!SUCCEEDED(hr))
{
	printf("addcode error\n");
	return -1;
}
IDispatchPtr golbal_obj = m_pScript->GetCodeObject();
if (!golbal_obj) {
	printf("getObj error\n");
	return -1;
}

LPSAFEARRAY pSafeArr = SafeArrayCreateVector(VT_VARIANT, 0, 1);
long param1 = 0;
USES_CONVERSION;
VARIANT a;
a.vt = VT_BSTR;
a.bstrVal = _bstr_t("123123123").Detach();
SafeArrayPutElement(pSafeArr,&param1, &a);
_variant_t retVal = m_pScript->Run("sign", &pSafeArr);
CString ret = retVal;
printf("ret = %s", W2A(ret));
m_pScript->Release();
```

![image-20231111051835781](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20231111051835781.png)

通过nodejs运行对比结果发现一致，说明调用没有问题

![image-20231111052009698](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20231111052009698.png)

成品COM调用Javascript库推荐：https://blog.csdn.net/l198738655/article/details/130596954
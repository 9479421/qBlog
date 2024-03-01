---
title: 内层CALL追局部变量
date: 2024-02-26
category:
  - History
tag:
  - 逆向
  - windows
  - 汇编
---
# 内层CALL追局部变量

## 查找数据

> 首先查找血量地址

![image-20240226203201185](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240226203201185.png)

## 追踪数据

在OD里面dd血量地址，随后下硬件访问断点

![image-20240226203859746](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240226203859746.png)

断下后得知此时的eax+0x8就是血量地址

eax来源来自于cmp代码的上面的call，进入call分析。

![image-20240226204124508](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240226204124508.png)

> 方法一

此时可以直接调用eax来源call来对eax进行赋值，再进行表达式组装就可以得到血量的地址了。也就是将参数eax==[[00xF84B74]+0X40C push给来源call，但是这个方法过于简单。

```
mov ecx,0xF84B74
mov ecx,[ecx]
mov ecx,[ecx+0x40C]
push eax
add ecx,0x410
mov eax,0x00665870
call eax
mov 人物对象，eax
```

DWORD Temp = \*(DWORD\*)(人物对象+0xC)

DWORD*(Temp + 0x8) == 人物血量

> 方法二

也就是该文章要讲的方法，直接进入eax来源call,寻找eax的赋值流程

![](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240226205517703.png)

发现内部对eax赋值主要是来源于ebp-0x4这个局部变量，但是这层代码里没有找到ebp-0x4的来源，也就是上面的CALL 008A5500改变了ebp-0x4这个局部变量的值。

> 方法一
>
> 进入CALL，观察ebp-0x4的值被哪条指令所改写，就追踪那个值的来源。

![image-20240226235845919](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240226235845919.png)

最后得到血量表达式为：

[[[[ecx+0x14]+0x34*8+0x4]+0xc]+0xc]+0x8

再向外层寻找ecx来源，可以得到ecx=[[0xF84B74]+0x410]

![image-20240227000107726](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240227000107726.png)

![image-20240227000146294](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240227000146294.png)

最后得到 [[[[[0xF84B74]+0x410+0x14]+0x34*8+0x4]+0xc]+0xc]+0x8

> 方法二
>
> 内层CALL中往往传递了外层CALL局部变量的指针，我们可以看到参数中edx是ebp-0x8，所以edx+4就是ebp-0x4，也就意味着我们进入CALL后，只需要寻找第一个参数+4就是指向该局部变量的指针了。

而进入内层CALL后，第一个参数也就是ebp+0x8**（这里涉及到堆栈知识，要动脑子思考一下）**

标注出所有ebp+0x8，寻找ebp+0x8来源

然后再往下寻找[ebp+0x8]+0x4就可以找到局部变量所在了，最后发现就是上面的ecx

![image-20240227000941134](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240227000941134.png)

剩下的操作是一样的，追踪ecx即可。

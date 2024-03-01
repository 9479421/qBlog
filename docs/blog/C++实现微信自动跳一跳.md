---
title: C++实现微信自动跳一跳
date: 2023-05-30
category:
  - History
tag:
  - 逆向
  - 外挂
  - C++
---
# C++实现微信自动跳一跳

## 技术概要

先介绍下写这个项目要用到的一些技术

1. MFC技术(用来构建窗口)
2. 简单的win32窗口绘制
3. 基本的ADB安卓调试命令(用来操作手机)

MFC可以替换成QT或者win32窗口构建，根据个人喜好来

## 思路分析

首先通过adb截取手机屏幕的图片至电脑储存

![image-20230530235236943](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230530235236943.png)



假设点(x1,y1)和点(x2,y2)距离为d，每秒钟跳跃速度为v，则需按压时间(秒)为t=d/v

很容易得出d=sqrt(pow(x1-x2,2)+pow(y1-y2,2))，那么已知d，再假设一个v的值，然后不断尝试不同的v对应的按压时间，根据跳跃的长度是多了还是少了，就可以大致试出来这个v的值。

知道了v和d，我们便可以通过adb模拟点击手机屏幕t=d/v秒，来实现自动跳跃了。

## 环境配置

首先，需要准备adb的调试工具，学习过安卓开发的朋友这一步会容易很多，因为Android Studio会自带这个工具。大体位于C:\Users\Administrator\AppData\Local\Android\Sdk\platform-tools，里面的adb.exe以及运行环境AdbWinApi.dll和AdbWinUsbApi.dll 便是我们需要的工具了，我们将这三个文件打包到同一个目录下备用即可。

没有Android Studio的小伙伴自行百度搜索adb调试工具，步骤同上。为方便调试，可以将目录添加至环境变量PATH中。

此外，需要准备一台安卓手机（安卓模拟器也可以，这里以手机为例），通过USB数据线将其连接至电脑。并打开**开发者模式**，并且启动**USB调试**，这一步尤为关键，否则我们是无法通过adb对手机进行调试的。

## 核心代码

### adb命令

> adb devices  列举所有当前usb设备id

> adb shell screencap -p /sdcard/screen.png 截屏至/sdcard目录
>
> adb -s 设备id shell screencap -p /sdcard/screen.png

> adb pull /sdcard/screen.png f:/screen.png 将/sdcard里截的图导出到f盘
>
> adb -s 设备id pull /sdcard/screen.png f:/screen.png

最重要的就是下面的模拟滑动，不能用普通的点击

> adb shell input swipe 100 100 200 200 50
>
> adb -s 设备id shell input swipe 100 100 200 200 50

x1,y1为起点位置(100,100)

x2,y2为终点位置(200,200)

50为按压时间，单位为毫秒

### 读取adb执行结果

adb本身运行于cmd之上，所以这里可以使用匿名管道通信方式拿到adb语句执行后返回的结果。

```c
BOOL PipeCmd(char* pszCmd, char* pszResultBuffer, DWORD dwResultBufferSize, BOOL isRet/*是否需要读取返回值*/) 
{
	HANDLE hReadPipe = NULL;
	HANDLE hWritePipe = NULL;
	BOOL bRet = FALSE;
	//设定管道的安全属性
	SECURITY_ATTRIBUTES sa = { 0 };
	sa.bInheritHandle = TRUE;
	sa.nLength = sizeof(sa);
	sa.lpSecurityDescriptor = NULL;
	//创建匿名管道
	bRet = ::CreatePipe(&hReadPipe, &hWritePipe, &sa, 0);
	if (bRet == FALSE)
	{
		return FALSE;
	}
	//设置新进程参数
	PROCESS_INFORMATION pi = { 0 };
	STARTUPINFO si = { 0 };
	si.cb = sizeof(si);
	si.dwFlags = STARTF_USESHOWWINDOW | STARTF_USESTDHANDLES;
	si.wShowWindow = SW_HIDE;
	si.hStdError = GetStdHandle(STD_ERROR_HANDLE);;
	si.hStdOutput = hWritePipe;
	si.hStdInput = hReadPipe;
	bRet = ::CreateProcess(NULL, Char2WideChar(pszCmd), NULL, NULL, TRUE, NULL, NULL, NULL, &si, &pi);
	if (bRet == FALSE)
	{
		return FALSE;
	}
	// 等待命令执行结束
	::WaitForSingleObject(pi.hThread, 2000);
	::WaitForSingleObject(pi.hProcess, 2000);
	// 从匿名管道中读取结果到输出缓冲区
	if (isRet == TRUE)
	{
		::RtlZeroMemory(pszResultBuffer, dwResultBufferSize);
		::ReadFile(hReadPipe, pszResultBuffer, dwResultBufferSize, NULL, NULL);
	}
	// 关闭句柄, 释放内存
	::CloseHandle(pi.hThread);
	::CloseHandle(pi.hProcess);
	::CloseHandle(hWritePipe);
	::CloseHandle(hReadPipe);
	return TRUE;
}
```

调用参考：

```c
//有返回值
char cmd[1024] = “F:\\adb\\adb.exe devices”;
char result[1024] = { 0 };
PipeCmd(cmd, result, 1024, TRUE);
//无返回值
char cmd[1024] = “F:\\adb\\adb.exe -s [这里填设备id] shell input swipe 100 100 200 200 50”;
PipeCmd(cmd, NULL, 0, FALSE);
```

### 缩放图片

通过adb得到了手机截屏的图片后，还要对其进行缩放，使其显示在Picture Control组件中。

```c
//先读取图片
CImage image;
image.Load(_T("F:\\screen.png"));
//将其缩放后置入新的CImage，设新的宽高为newWidth和newHeight
CImage imageNew;
imageNew.Create(newWidth,newHeight,32);
HDC dcNew = imageNew.getDC();
SetStretchBltMode(dcNew,HALFTONE);
image.StretchBlt(dcNew,0,0,newWidth,newHeight);//将image输出到imageNew的DC上
imageNew.ReleaseDC();
//获取imageNew位图
HBITMAP hBmp = imageNew.Detach();
//将位图显示到Picture Control
CStatic* pWnd = (CStatic*)GetDlgItem(IDC_PHONE);
pWnd.SetBitmap(hBmp);
```

### DC绘制

```c
CClientDC dc(this);
CRect rectDlg;
GetClientRect(rectDlg);	
int pointWidth = rectDlg.Width();
int pointHeight = rectDlg.Height();	
RedrawWindow(CRect(0, 0, pointWidth, pointHeight)); //重绘指定区域,用于清除上一条直线
//绘制直线
CPen pen(PS_SOLID, 1, RGB(255, 0, 0));
dc.SelectObject(&pen);
dc.MoveTo(cp1.x, cp1.y);
dc.LineTo(cp2.x, cp2.y);
```

## 开始编程

熟练掌握以上核心代码，便可以很容易实现一个跳一跳自动辅助了，大体编程思路如下：

1. 使用MFC管道通讯adb读取设备列表，并枚举显示设备id
2. 对指定设备id进行屏幕截取与缩放显示
3. 通过鼠标消息对点击的两点坐标进行直线绘制
4. 计算直线长度与速度系数，发送adb模拟滑动指令实现自动跳一跳

每个人的编程思维不一样，这里仅供参考，具体实现要靠你们敲动自己的小手啦！

## 最终成品

下面是我随手写的一个跳一跳辅助成品，实现思路与本文一模一样，大家仅供参考，需要代码可以联系我

![image-20230531010219524](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230531010219524.png)

随便测试了下，便达到了我从未达到过的分数，还是科技的力量强大！

其实是可以无限跳下去的，只是玩累了，我就自杀掉了。

![image-20230531010347907](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230531010347907.png)

## 功能升级

上面是采用手动采集棋子与目标区域中心点的坐标实现的距离计算，尽管功能已经很强大，但仍需要人眼与人手的参与，我想这并不是我想要的最终结果。

于是我便开始思考通过色彩识图或是OpenCv等思路，实现自动采集两点的坐标，然后对代码微微修改，加上一个计时器，便可以实现全自动跳一跳了！由于时间有限，等我有空再对这方面内容进行添加。


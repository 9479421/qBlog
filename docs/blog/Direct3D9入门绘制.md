---
title: Direct3D9入门绘制
date: 2024-03-20
category:
  - History
tag:
  - Windows
  - 游戏开发
---

# Direct3D9入门绘制

整个中国对于D3D相关的资料几乎是0，学习成本极其艰巨，为数不多的英语学习书籍也都是主讲3D，用到了很多的3D数学知识。对于2D绘制需求来说学习起来性价比极低，所以专门写了这样一篇D3D9快速入门。

## 环境搭建

首先要安装Direct3D9的SDK，地址：https://www.microsoft.com/zh-cn/download/details.aspx?id=6812

下载成功后在VS中导入include和lib目录，目的是拿到，include目录中的d3d9.h、d3dx9.h以及lib目录下的d3d9.lib和d3dx9.lib

![image-20240321000410789](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240321000410789.png)

## 窗口创建

首先要熟悉WIN32应用窗口创建文档：https://learn.microsoft.com/zh-cn/windows/win32/learnwin32/winmain--the-application-entry-point，因为我们的Direct3D窗口是基于Windows窗口上面绘制的。

先将程序入口由控制台改为窗口

![image-20240321000538437](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240321000538437.png)

此时，应用程序入口为WinMain函数

```c
int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance,PSTR lpCmdLine, int nCmdShow)
{
    return 0;
}
```

了解创建窗口参数WNDCLASS类

```c
typedef struct tagWNDCLASSA {
  UINT      style;
  WNDPROC   lpfnWndProc; //指向窗口过程的指针
  int       cbClsExtra;
  int       cbWndExtra;
  HINSTANCE hInstance; //入口实例
  HICON     hIcon; //图标
  HCURSOR   hCursor; //游标
  HBRUSH    hbrBackground; //背景颜色
  LPCSTR    lpszMenuName; //菜单
  LPCSTR    lpszClassName; //类名
} WNDCLASSA, *PWNDCLASSA, *NPWNDCLASSA, *LPWNDCLASSA;
```

style为窗口风格，如下所示：

![image-20240321001122856](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240321001122856.png)

这里要详细了解下lpfnWndProc的定义，后续所有的窗口消息都会传递给Wndproc的第二个参数

```c
LRESULT Wndproc(
  HWND unnamedParam1, //窗口句柄
  UINT unnamedParam2, //系统消息列表
  WPARAM unnamedParam3, //其他消息信息
  LPARAM unnamedParam4 //其他消息信息
)
{...}
```

故我们注册一个自己的窗口WNDCLASS类

```c
WNDCLASS wc;
wc.style = CS_VREDRAW | CS_HREDRAW;
wc.lpfnWndProc = (WNDPROC)Wndproc;
wc.cbClsExtra = 0;
wc.cbWndExtra = 0;
wc.hInstance = hInstance;
wc.hIcon = LoadIcon(0, IDI_APPLICATION);
wc.hCursor = LoadCursor(0, IDC_ARROW);
wc.hbrBackground = (HBRUSH)GetStockObject(WHITE_BRUSH);
wc.lpszMenuName = NULL;
wc.lpszClassName = "ClassName";
RegisterClass(&wc);
```

接下来了解创建窗口的函数

```c
HWND CreateWindowA(
  [in, optional]  lpClassName, //类名
  [in, optional]  lpWindowName, //标题名
  [in]            dwStyle, //窗口风格
  [in]            x, //x坐标
  [in]            y, //y坐标
  [in]            nWidth, //窗口宽度
  [in]            nHeight, //窗口高度
  [in, optional]  hWndParent, //父窗口句柄
  [in, optional]  hMenu, //菜单句柄
  [in, optional]  hInstance, //入口实例
  [in, optional]  lpParam //传递到窗口的值的指针
);
```

于是可以创建一个宽和高都为400的窗口

```c
HWND hwnd = CreateWindowA("ClassName","窗口标题",WS_OVERLAPPEDWINDOW,100,100,400,400,NULL,NULL,wc.hInstance,NULL);
```

## 窗口绘制

有了Win32应用窗口，接下来就可以使用Direct3D对窗口进行操作绘制了。

首先，创建一个D3D9指针，随后再创建一个caps，以及D3D9的参数

```c
IDirect3D9* d3d9 = Direct3DCreate9(D3D_SDK_VERSION);
D3DCAPS9 caps;
d3d9->GetDeviceCaps(D3DADAPTER_DEFAULT, D3DDEVTYPE_HAL, &caps);
D3DPRESENT_PARAMETERS d3dpp;
ZeroMemory(&d3dpp, sizeof(d3dpp));
d3dpp.Windowed = TRUE; //窗口化
d3dpp.SwapEffect = D3DSWAPEFFECT_DISCARD;
d3dpp.BackBufferFormat = D3DFMT_UNKNOWN;
```

随后我们使用d3d9创建一个全局的d3d设备，IDirect3DDevice9* g_device;

```c
d3d9->CreateDevice(D3DADAPTER_DEFAULT, D3DDEVTYPE_HAL, hwnd, D3DCREATE_SOFTWARE_VERTEXPROCESSING, &d3dpp, &g_device);
```

有了win32窗口，有了d3d设备，我们现在要将窗口显示出来。并且循环读入消息。

```c
ShowWindow(hwnd,TRUE);
UpdateWindow(hwnd); 
MSG msg;
while (GetMessage(&msg,hwnd,NULL,NULL))
{
	TranslateMessage(&msg);
	DispatchMessageA(&msg);//将消息调度到窗口过程
}
UnregisterClass("ClassName", wc.hInstance);
```

![image-20240321003642348](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240321003642348.png)

此时我们可以看到一个背景为白色，长宽都为400的窗口。接下来我们只需要对窗口过程WndProc进行编写绘制过程就可以了。

```c
VOID Render() {
	if (NULL == g_device)
	{
		return;
	}
	g_device->Clear(0, NULL, D3DCLEAR_TARGET, D3DCOLOR_ARGB(0, 0, 255, 200), 1.0f, 0);
	if (SUCCEEDED(g_device->BeginScene()))
	{
		g_device->EndScene();
	}
	g_device->Present(NULL, NULL, NULL, NULL);
}
VOID CleanUp() {
	if (g_device != NULL)
	{
		g_device->Release();
	}
}
LRESULT WINAPI Wndproc(
	HWND hwnd,
	UINT msg,
	WPARAM wParam,
	LPARAM lParam
)
{
	switch (msg)
	{
	case WM_DESTROY:
        CleanUp();
		PostQuitMessage(0);
		return 0;
	case WM_PAINT:
		Render();
		ValidateRect(hwnd, NULL);
		return 0;
	default:
		break;
	}
	return DefWindowProc(hwnd, msg, wParam, lParam);
}
```

以上Wndproc实现了窗口接收到销毁消息WM_DESTROY时，执行CleanUp函数释放d3d设备。并且实现了窗口接收到绘制消息时，调用d3d设备进行Clear绘制，将窗口底色绘制成ARGB(0,255,200,0)。

![image-20240321003734267](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240321003734267.png)

## 输出文字

```c
//绘制字体
char font[1024] = "微软雅黑";
D3DXCreateFont(
	g_device,
	40,
	0,
	FW_BOLD,
	1,
	FALSE,
	DEFAULT_CHARSET,
	OUT_DEFAULT_PRECIS,
	DEFAULT_QUALITY,
	DEFAULT_PITCH|FF_DONTCARE,
	font, //pFaceName
	&g_font
);
RECT rc;
SetRect(&rc, 0, 10, 0, 0);
g_font->DrawTextA(NULL, "输出文字啊啊啊啊阿", -1, &rc, DT_NOCLIP, D3DXCOLOR(0.0f, 0.0f, 1.0f, 0.3f));
```

## 绘制矩形

```c
//绘制矩形
D3DRECT d3dRect = { 240,240,300,300 };
g_device->Clear(1, &d3dRect, D3DCLEAR_TARGET, D3DCOLOR_XRGB(255, 0, 0), 1.0f, 0);
```

## 绘制三角形

```c
//绘制三角形
LPDIRECT3DVERTEXBUFFER9 g_pVB = NULL;
//三个点的信息
CUSTOMVERTEX vertices[] = {
	{150.f,50.f,0.5f,1.0f,0xffff0000},
	{250.0f,250.0f,0.5f,1.0f,0xff00ff00},
	{50.0f,250.0f,0.5f,1.0f,0xff00ff00}
};
g_device->CreateVertexBuffer(3 * sizeof(CUSTOMVERTEX), 0,  D3DFVF_XYZRHW|D3DFVF_DIFFUSE, D3DPOOL_DEFAULT, &g_pVB, NULL);
VOID* pVertices;
g_pVB->Lock(0, sizeof(vertices), (void**)&pVertices, 0);
memcpy(pVertices, vertices, sizeof(vertices));
g_pVB->Unlock();
g_device->SetStreamSource(0, g_pVB,0,sizeof(CUSTOMVERTEX));
g_device->SetFVF(D3DFVF_XYZRHW | D3DFVF_DIFFUSE);
g_device->DrawPrimitive(D3DPT_TRIANGLELIST, 0, 4);
```

## 绘制直线

```c
D3DXCreateLine(g_device, &g_Line);
//绘制直线
D3DXVECTOR2 Vertex[5]{ {300,300},{400,300},{400,320},{300,320},{300,300} };
g_Line->SetWidth(5.0f);
g_Line->Draw(Vertex,5,D3DCOLOR_XRGB(25,80,80));
```

> 更复杂的3D及动态绘制我也仍在学习阶段，这些就是基本的绘制操作，足以应付外挂编写的基本需求了。

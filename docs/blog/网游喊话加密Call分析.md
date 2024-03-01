---
title: 网游喊话加密Call分析
date: 2024-02-12
category:
  - History
tag:
  - C++
  - 逆向
  - windows
  - 汇编
  - tcp
---
# 网游喊话加密Call分析

> 思路整理

网游喊话的原理就是向服务器发送了数据，网游与服务器通信数据都是使用tcp协议，而windows中发送tcp数据的API函数有send，sendto，WSASend，所以对此三个函数进行下断点。

结果在WSASend函数处断了下来，说明该游戏使用的是WSASend来封装的发送数据函数。

![image-20240212092957837](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240212092957837.png)

通过观察堆栈变化可以猜出是线程发包，说明有一个线程负责从某个地址循环读取数据，当有数据的时候就会自动采取发包。而游戏主线程则只需要在执行操作的时候把数据写入至某个地址即可。而我们此时断下的位置就是线程内部，我们需要对封包数据进行追踪到静态地址，再对地址进行硬件写入断点，就可以追踪到线程外的操作地址了。

<!-- more -->

## 封包追踪

观察该WSASend函数的堆栈，可知第二个参数是发送封包的包地址pBuffers，数据窗口中跟随pBuffers，可以大致看到如下内容

![image-20240212093311469](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240212093311469.png)

可以推测出第一个字节16是该封包的长度，推测pBuffers+4是包数据地址。故[pBuffers]是包长，[pBuffers+4]是包数据。

接下来我们要对该pBuffers进行跟踪，找到线程内发包获取pBuffers的基地址。随后对其下硬件写入断点，即可找到线程外对pBuffers基地址赋值的语句，从而跳出循环。然后就可以向上找到喊话call了。

我们返回到调用WSASend上层，寻求倒数第二个压栈的push，定位到pBuffers来源。

![image-20240212161613045](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240212161613045.png)

接下来只需要对eax进行向上追溯，就可以找到包地址来源了。

首先eax为esp+0x28，所以只需要追溯esp即可，可以看到包长来源是eax。继续向上追溯。

![image-20240212165126247](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240212165126247.png)

可以看到包数据地址的来源是ecx，同理继续追溯ecx，ecx==edx+esi，调试可知edx恒为0，即ecx == esi，继续追溯esi，esi为[ebx+0x4]，ebx为[edx+0x2888]，综上，包数据地址==[[edi+0x2888]+0x4]

那么，即有其他代码向edi+0x2888写入数据之时，也就会触发线程内的发包函数。

我们尝试对edi+0x2888下硬件写入断点

![image-20240212171146893](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240212171146893.png)

发现代码仍然在线程内，并且在刚刚代码的上方，没关系，我们继续追溯edi的来源eax，直到函数头的时候，得到[edi+2888]== [[[edi+0x2880]]+0x8] ，测试得知edi+0x2880的值是不变的，故继续对[edi+0x2880]下硬件写入断点（此时edx==[edi+0x2880]为固定值）

![image-20240212215611858](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240212215611858.png)

此时断到的位置往上堆栈回溯会发现与WSASend的上层堆栈就不一样了，至此为止说明我们已经跳出了线程，找到了线程外对线程内发包地址进行赋值的代码。

至此，包数据地址的表达式为[[[[edi+0x2880]]+0x8]+0x4]，并且[edi+0x2880]是固定值

对[eax]赋值ebp，也就是对前面的[edi+0x2880]赋值ebp，故表达式可以换成[[ebp+0x8]+0x4]

## 加密追踪

可以揣测此时[[ebp+0x8]+0x4]就是加密后的封包数据，我们跳到上层CALL下断继续分析参数。

![image-20240216020431985](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240216020431985.png)

追踪[ESI+4]

![image-20240216020450258](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240216020450258.png)

发现可以看到了封包的明文喊话内容11111111111的字节形式，而第一个字节21便是包长度，于是我们可以猜测加密明文封包内容的代码就在这个CALL中，封包内容明文的表达式便是[ESI+4]我们进入CALL中继续分析。

![](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240217121734101.png)

前面五个判断都直接被跳过了，所以应该是判断一些封包内容合法之类的无用操作，可以不用管。

那么封包加密操作就在下面的三个CALL中了。

通过观察[esi+4]的值在执行call前后是否产生变化，找到加密CALL。

在调用加密CALL之前，通过调试可以猜测出eax是类似于加密秘钥的一个参数，我们要先追溯出eax的来源。

这里不做过多赘述，最后可以得到eax==[[[[[00f84ba4]]+4]+0xC+8]]+0x54

## 调用加密call

首先观察call内容，发现除了esp以外，没有用到任何一个寄存器的值。所以如果只是单纯调用该加密call，只需要一个正确的esp值即可。

![image-20240217131642975](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240217131642975.png)

编写测试加密代码

![image-20240217170720453](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240217170720453.png)

复制一份执行加密call时ebp和ebx的值到01111111里，然后注入代码，测试出加密成功

## 编写代码发送封包

我们尝试手写一个MFC的dll，直接将dll注入至游戏内部，通过调用汇编代码实现加密功能，再调用windows Api的WSASend实现模拟封包发送。

先编写一个可视化的窗口

![image-20240217174249635](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240217174249635.png)

接着编写封包发送，首先我们要逆向一下WSASend的第一个参数socket的来源

![image-20240218210422616](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240218210422616.png)

追踪ecx，不断往上层去返回

![image-20240218211214918](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240218211214918.png)

最后可以得到socket的值是GetWindowLongW()的返回值加上0x38地址的值，而GetWindowLongW的第一个参数是根据类名Lapis Network Class得到的窗口句柄，第二个参数为固定值GWL_USERDATA。

故综上可以编写出如下代码

![image-20240218211447461](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240218211447461.png)

将该程序DLL注入到游戏即可实现模拟发送喊话封包了

![image-20240221205530581](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240221205530581.png)

## 纯汇编实现加密

> 这样的话我们虽然实现了功能，但是加密部分仍然是调用了游戏的CALL，我们并没有实现完全依靠自己的代码模拟实现，所以要继续深究

将加密CALL的汇编代码抠出来，做成如下函数

```c
__declspec(naked) void 加密CALL(DWORD 秘钥,DWORD 加密长度,DWORD 加密地址,DWORD 加密地址2) {
	__asm
	{
		push    ebp
		push    ebx
		push    esi
		push    edi
		mov     edi, dword ptr[esp + 0x14]
		mov     edx, dword ptr[esp + 0x18]
		mov     esi, dword ptr[esp + 0x1C]
		mov     ebp, dword ptr[esp + 0x20]
		xor eax, eax
		xor ebx, ebx
		cmp     edx, 0
		je      Label1
		mov     al, byte ptr[edi]
		mov     bl, byte ptr[edi + 4]
		add     edi, 8
		lea     ecx, dword ptr[esi + edx]
		sub     ebp, esi
		mov     dword ptr[esp + 0x18], ecx
		inc     al
		cmp     dword ptr[edi + 0x100], -1
		je      Label2
		mov     ecx, dword ptr[edi + eax * 4]
		and edx, 0xFFFFFFFC
		je      Label3
		lea     edx, dword ptr[esi + edx - 4]
		mov     dword ptr[esp + 0x1C], edx
		mov     dword ptr[esp + 0x20], ebp


		Label4 :
		add     bl, cl
			mov     edx, dword ptr[edi + ebx * 4]
			mov     dword ptr[edi + ebx * 4], ecx
			mov     dword ptr[edi + eax * 4], edx
			add     edx, ecx
			inc     al
			and edx, 0x0FF
			mov     ecx, dword ptr[edi + eax * 4]
			mov     ebp, dword ptr[edi + edx * 4]
			add     bl, cl
			mov     edx, dword ptr[edi + ebx * 4]
			mov     dword ptr[edi + ebx * 4], ecx
			mov     dword ptr[edi + eax * 4], edx
			add     edx, ecx
			inc     al
			and edx, 0x0FF
			ror     ebp, 8
			mov     ecx, dword ptr[edi + eax * 4]
			or ebp, dword ptr[edi + edx * 4]
			add     bl, cl
			mov     edx, dword ptr[edi + ebx * 4]
			mov     dword ptr[edi + ebx * 4], ecx
			mov     dword ptr[edi + eax * 4], edx
			add     edx, ecx
			inc     al
			and edx, 0x0FF
			ror     ebp, 8
			mov     ecx, dword ptr[edi + eax * 4]
			or ebp, dword ptr[edi + edx * 4]
			add     bl, cl
			mov     edx, dword ptr[edi + ebx * 4]
			mov     dword ptr[edi + ebx * 4], ecx
			mov     dword ptr[edi + eax * 4], edx
			add     edx, ecx
			inc     al
			and edx, 0x0FF
			ror     ebp, 8
			mov     ecx, dword ptr[esp + 0x20]
			or ebp, dword ptr[edi + edx * 4]
			ror     ebp, 8
			xor ebp, dword ptr[esi]
			cmp     esi, dword ptr[esp + 0x1C]
			mov     dword ptr[ecx + esi], ebp
			lea     esi, dword ptr[esi + 4]
			mov     ecx, dword ptr[edi + eax * 4]
			jb      Label4
			cmp     esi, dword ptr[esp + 0x18]
			je      Label5
			mov     ebp, dword ptr[esp + 0x20]


			Label3:
		add     bl, cl
			mov     edx, dword ptr[edi + ebx * 4]
			mov     dword ptr[edi + ebx * 4], ecx
			mov     dword ptr[edi + eax * 4], edx
			add     edx, ecx
			inc     al
			and edx, 0x0FF
			mov     edx, dword ptr[edi + edx * 4]
			xor dl, byte ptr[esi]
			lea     esi, dword ptr[esi + 1]
			mov     ecx, dword ptr[edi + eax * 4]
			cmp     esi, dword ptr[esp + 0x18]
			mov     byte ptr[ebp + esi - 1], dl
			jb      Label3
			jmp     Label5


			Label2 :

		movzx   ecx, byte ptr[edi + eax]

			Label6 :
			add     bl, cl
			movzx   edx, byte ptr[edi + ebx]
			mov     byte ptr[edi + ebx], cl
			mov     byte ptr[edi + eax], dl
			add     dl, cl
			movzx   edx, byte ptr[edi + edx]
			add     al, 1
			xor dl, byte ptr[esi]
			lea     esi, dword ptr[esi + 1]
			movzx   ecx, byte ptr[edi + eax]
			cmp     esi, dword ptr[esp + 0x18]
			mov     byte ptr[ebp + esi - 1], dl
			jb      Label6
			Label5 :
		dec     al
			mov     byte ptr[edi - 4], bl
			mov     byte ptr[edi - 8], al

			Label1 :

		pop     edi
			pop     esi
			pop     ebx
			pop     ebp
			retn

	}
}
```

```c
byte a[100] = { 0x11,0x00,0x7E,0x00,0x00,0x00,0x00,0x02,0x00,0x31,0x31,0xFF,0xFF,0xFF,0xFF,0x00,0x00,0x00,0x00,0x60,0xA8,0x6C };
DWORD 包长 = 0x13;
DWORD 包地址 = (DWORD)a;
DWORD 加密地址 = 包地址 + 2;
DWORD 加密长度 = 包长 - 2;

DWORD 秘钥 = 0;
__asm {
	mov eax, 0x00f84ba4
	mov eax, [eax]
	mov eax, [eax]
	mov eax, [eax + 0x4]
	mov eax, [eax + 0xc + 0x8]
	mov eax, [eax]
	lea eax, [eax + 0x54]
	mov 秘钥, eax
}

加密CALL(秘钥, 加密长度, 加密地址, 加密地址);
HWND 窗口句柄 = FindWindowA("Lapis Network Class", 0);
DWORD A = GetWindowLongW(窗口句柄, GWL_USERDATA);
DWORD S = *(DWORD*)(A + 0x38);
send(S, (const char*)包地址, 包长, 0);
```

至此就可以实现完全脱离游戏本身代码实现模拟封包的加密与发送了。

## 编写简易抓包工具

除了喊话封包以外，我们后面肯定还要模拟其他功能的封包实现。所以我们要对明文封包进行HOOK实现自动抓取。

```c
void outputMsg(char* pszFormat, ...) {
#ifdef DEBUG
	char szbufFormat[0x1000];
	char szbufFormat_Game[0x1100] = "";
	va_list argList;
	va_start(argList, pszFormat);
	vsprintf_s(szbufFormat, pszFormat, argList);
	strcat_s(szbufFormat_Game, szbufFormat);
	OutputDebugStringA(szbufFormat_Game);
	va_end(argList);

#endif // DEBUG

}

BOOL Call_提升权限(BOOL bEnable)//OpenProgress失败的情况调用 
{
	BOOL fOK = FALSE;
	HANDLE hToken;
	if (OpenProcessToken(GetCurrentProcess(),TOKEN_ADJUST_PRIVILEGES,&hToken))
	{
		TOKEN_PRIVILEGES tp;
		tp.PrivilegeCount = 1;
		LookupPrivilegeValue(NULL,SE_DEBUG_NAME,&tp.Privileges[0].Luid);
		tp.Privileges[0].Attributes = bEnable ? SE_PRIVILEGE_ENABLED : 0;
		AdjustTokenPrivileges(hToken, FALSE, &tp, sizeof(tp), NULL, NULL);
		fOK = (GetLastError() == ERROR_SUCCESS);
		CloseHandle(hToken);
	}
	return fOK;
}


HWND handle;
HANDLE hProcess = 0;
DWORD pid = NULL;
DWORD WriteSize = NULL;
byte* p = 0;
char s[100];


DWORD g_包长 = 0;
DWORD g_包地址 = 0;
char g_包内容[1000] = "";
_declspec(naked) void 跳转CALL() {
	__asm {
		pushad
		nop
		mov ecx, [esi + 4]
		mov eax, [esi + 8]
		mov g_包地址,ecx
		sub eax, ecx
		mov g_包长, eax
	}
	Call_提升权限(TRUE);
	handle = FindWindowA(NULL, "Fantasy Frontier Online                       ");
	//outputMsg("幻想神域 窗口句柄%d", handle);
	GetWindowThreadProcessId(handle, &pid);
	hProcess = OpenProcess(PROCESS_ALL_ACCESS,FALSE,pid);
	p = new byte[g_包长];
	ReadProcessMemory(hProcess, (LPCVOID)g_包地址, p, g_包长, 0);
    *(WORD*)p = g_包长 - 2;
	for (int i = 0; i < (int)g_包长; i++)
	{
		sprintf_s(s, "%02X", p[i]);
		strcat_s(g_包内容, s);
	}
	outputMsg("幻想神域     包长:%x  包地址:%x  包内容:%s\r\n", g_包长, g_包地址, g_包内容);
	sprintf_s(g_包内容, "%s", "");
	delete p;

	__asm {
		popad
		mov eax, dword ptr ds : [esi + 0x8]
		sub eax, ecx
		retn
	}
}

void MainDialog::OnBnClickedButton3()
{	
	DWORD HOOKAddress = 0x00B92C82;
	DWORD HOOKCallAddress = (DWORD)跳转CALL;

	DWORD old = 0;
	VirtualProtect((PVOID)HOOKAddress, 100, PAGE_EXECUTE_READWRITE, &old);

	*(BYTE*)HOOKAddress = 0xE8;
	*(DWORD*)(HOOKAddress + 1) = HOOKCallAddress  - (HOOKAddress + 5) ;

	VirtualProtect((PVOID)HOOKAddress, 100, old, &old);
}
```

![](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240223033140392.png)

> 结语

前不久找到了一个满眼都是自己的女孩，沉浸在爱情的海洋里，3个月没碰代码。过完年也算是闲了下来，准备继续深造技术。去年的项目都停了，今年从0开始全新的领域，目标20个W，希望今年能用编程赚到的钱开起来一个属于自己的台球厅。

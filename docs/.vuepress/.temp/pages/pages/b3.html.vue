<template><div><h1 id="c-实现微信自动跳一跳" tabindex="-1"><a class="header-anchor" href="#c-实现微信自动跳一跳"><span>C++实现微信自动跳一跳</span></a></h1>
<h2 id="技术概要" tabindex="-1"><a class="header-anchor" href="#技术概要"><span>技术概要</span></a></h2>
<p>先介绍下写这个项目要用到的一些技术</p>
<ol>
<li>MFC技术(用来构建窗口)</li>
<li>简单的win32窗口绘制</li>
<li>基本的ADB安卓调试命令(用来操作手机)</li>
</ol>
<p>MFC可以替换成QT或者win32窗口构建，根据个人喜好来</p>
<h2 id="思路分析" tabindex="-1"><a class="header-anchor" href="#思路分析"><span>思路分析</span></a></h2>
<p>首先通过adb截取手机屏幕的图片至电脑储存</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230530235236943.png" alt="image-20230530235236943"></p>
<p>假设点(x1,y1)和点(x2,y2)距离为d，每秒钟跳跃速度为v，则需按压时间(秒)为t=d/v</p>
<p>很容易得出d=sqrt(pow(x1-x2,2)+pow(y1-y2,2))，那么已知d，再假设一个v的值，然后不断尝试不同的v对应的按压时间，根据跳跃的长度是多了还是少了，就可以大致试出来这个v的值。</p>
<p>知道了v和d，我们便可以通过adb模拟点击手机屏幕t=d/v秒，来实现自动跳跃了。</p>
<h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置"><span>环境配置</span></a></h2>
<p>首先，需要准备adb的调试工具，学习过安卓开发的朋友这一步会容易很多，因为Android Studio会自带这个工具。大体位于C:\Users\Administrator\AppData\Local\Android\Sdk\platform-tools，里面的adb.exe以及运行环境AdbWinApi.dll和AdbWinUsbApi.dll 便是我们需要的工具了，我们将这三个文件打包到同一个目录下备用即可。</p>
<p>没有Android Studio的小伙伴自行百度搜索adb调试工具，步骤同上。为方便调试，可以将目录添加至环境变量PATH中。</p>
<p>此外，需要准备一台安卓手机（安卓模拟器也可以，这里以手机为例），通过USB数据线将其连接至电脑。并打开<strong>开发者模式</strong>，并且启动<strong>USB调试</strong>，这一步尤为关键，否则我们是无法通过adb对手机进行调试的。</p>
<h2 id="核心代码" tabindex="-1"><a class="header-anchor" href="#核心代码"><span>核心代码</span></a></h2>
<h3 id="adb命令" tabindex="-1"><a class="header-anchor" href="#adb命令"><span>adb命令</span></a></h3>
<blockquote>
<p>adb devices  列举所有当前usb设备id</p>
</blockquote>
<blockquote>
<p>adb shell screencap -p /sdcard/screen.png 截屏至/sdcard目录</p>
<p>adb -s 设备id shell screencap -p /sdcard/screen.png</p>
</blockquote>
<blockquote>
<p>adb pull /sdcard/screen.png f:/screen.png 将/sdcard里截的图导出到f盘</p>
<p>adb -s 设备id pull /sdcard/screen.png f:/screen.png</p>
</blockquote>
<p>最重要的就是下面的模拟滑动，不能用普通的点击</p>
<blockquote>
<p>adb shell input swipe 100 100 200 200 50</p>
<p>adb -s 设备id shell input swipe 100 100 200 200 50</p>
</blockquote>
<p>x1,y1为起点位置(100,100)</p>
<p>x2,y2为终点位置(200,200)</p>
<p>50为按压时间，单位为毫秒</p>
<h3 id="读取adb执行结果" tabindex="-1"><a class="header-anchor" href="#读取adb执行结果"><span>读取adb执行结果</span></a></h3>
<p>adb本身运行于cmd之上，所以这里可以使用匿名管道通信方式拿到adb语句执行后返回的结果。</p>
<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre v-pre class="language-c"><code>BOOL <span class="token function">PipeCmd</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> pszCmd<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token operator">*</span> pszResultBuffer<span class="token punctuation">,</span> DWORD dwResultBufferSize<span class="token punctuation">,</span> BOOL isRet<span class="token comment">/*是否需要读取返回值*/</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
	HANDLE hReadPipe <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
	HANDLE hWritePipe <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
	BOOL bRet <span class="token operator">=</span> FALSE<span class="token punctuation">;</span>
	<span class="token comment">//设定管道的安全属性</span>
	SECURITY_ATTRIBUTES sa <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
	sa<span class="token punctuation">.</span>bInheritHandle <span class="token operator">=</span> TRUE<span class="token punctuation">;</span>
	sa<span class="token punctuation">.</span>nLength <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>sa<span class="token punctuation">)</span><span class="token punctuation">;</span>
	sa<span class="token punctuation">.</span>lpSecurityDescriptor <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
	<span class="token comment">//创建匿名管道</span>
	bRet <span class="token operator">=</span> <span class="token operator">::</span><span class="token function">CreatePipe</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>hReadPipe<span class="token punctuation">,</span> <span class="token operator">&amp;</span>hWritePipe<span class="token punctuation">,</span> <span class="token operator">&amp;</span>sa<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>bRet <span class="token operator">==</span> FALSE<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">return</span> FALSE<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//设置新进程参数</span>
	PROCESS_INFORMATION pi <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
	STARTUPINFO si <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
	si<span class="token punctuation">.</span>cb <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>si<span class="token punctuation">)</span><span class="token punctuation">;</span>
	si<span class="token punctuation">.</span>dwFlags <span class="token operator">=</span> STARTF_USESHOWWINDOW <span class="token operator">|</span> STARTF_USESTDHANDLES<span class="token punctuation">;</span>
	si<span class="token punctuation">.</span>wShowWindow <span class="token operator">=</span> SW_HIDE<span class="token punctuation">;</span>
	si<span class="token punctuation">.</span>hStdError <span class="token operator">=</span> <span class="token function">GetStdHandle</span><span class="token punctuation">(</span>STD_ERROR_HANDLE<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
	si<span class="token punctuation">.</span>hStdOutput <span class="token operator">=</span> hWritePipe<span class="token punctuation">;</span>
	si<span class="token punctuation">.</span>hStdInput <span class="token operator">=</span> hReadPipe<span class="token punctuation">;</span>
	bRet <span class="token operator">=</span> <span class="token operator">::</span><span class="token function">CreateProcess</span><span class="token punctuation">(</span><span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token function">Char2WideChar</span><span class="token punctuation">(</span>pszCmd<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> TRUE<span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>si<span class="token punctuation">,</span> <span class="token operator">&amp;</span>pi<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>bRet <span class="token operator">==</span> FALSE<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">return</span> FALSE<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 等待命令执行结束</span>
	<span class="token operator">::</span><span class="token function">WaitForSingleObject</span><span class="token punctuation">(</span>pi<span class="token punctuation">.</span>hThread<span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token operator">::</span><span class="token function">WaitForSingleObject</span><span class="token punctuation">(</span>pi<span class="token punctuation">.</span>hProcess<span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 从匿名管道中读取结果到输出缓冲区</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>isRet <span class="token operator">==</span> TRUE<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token operator">::</span><span class="token function">RtlZeroMemory</span><span class="token punctuation">(</span>pszResultBuffer<span class="token punctuation">,</span> dwResultBufferSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token operator">::</span><span class="token function">ReadFile</span><span class="token punctuation">(</span>hReadPipe<span class="token punctuation">,</span> pszResultBuffer<span class="token punctuation">,</span> dwResultBufferSize<span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 关闭句柄, 释放内存</span>
	<span class="token operator">::</span><span class="token function">CloseHandle</span><span class="token punctuation">(</span>pi<span class="token punctuation">.</span>hThread<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token operator">::</span><span class="token function">CloseHandle</span><span class="token punctuation">(</span>pi<span class="token punctuation">.</span>hProcess<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token operator">::</span><span class="token function">CloseHandle</span><span class="token punctuation">(</span>hWritePipe<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token operator">::</span><span class="token function">CloseHandle</span><span class="token punctuation">(</span>hReadPipe<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> TRUE<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用参考：</p>
<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre v-pre class="language-c"><code><span class="token comment">//有返回值</span>
<span class="token keyword">char</span> cmd<span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span> <span class="token operator">=</span> “F<span class="token operator">:</span>\\adb\\adb<span class="token punctuation">.</span>exe devices”<span class="token punctuation">;</span>
<span class="token keyword">char</span> result<span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">PipeCmd</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> result<span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">,</span> TRUE<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//无返回值</span>
<span class="token keyword">char</span> cmd<span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span> <span class="token operator">=</span> “F<span class="token operator">:</span>\\adb\\adb<span class="token punctuation">.</span>exe <span class="token operator">-</span>s <span class="token punctuation">[</span>这里填设备id<span class="token punctuation">]</span> shell input swipe <span class="token number">100</span> <span class="token number">100</span> <span class="token number">200</span> <span class="token number">200</span> <span class="token number">50</span>”<span class="token punctuation">;</span>
<span class="token function">PipeCmd</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> FALSE<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="缩放图片" tabindex="-1"><a class="header-anchor" href="#缩放图片"><span>缩放图片</span></a></h3>
<p>通过adb得到了手机截屏的图片后，还要对其进行缩放，使其显示在Picture Control组件中。</p>
<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre v-pre class="language-c"><code><span class="token comment">//先读取图片</span>
CImage image<span class="token punctuation">;</span>
image<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token function">_T</span><span class="token punctuation">(</span><span class="token string">"F:\\screen.png"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//将其缩放后置入新的CImage，设新的宽高为newWidth和newHeight</span>
CImage imageNew<span class="token punctuation">;</span>
imageNew<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>newWidth<span class="token punctuation">,</span>newHeight<span class="token punctuation">,</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
HDC dcNew <span class="token operator">=</span> imageNew<span class="token punctuation">.</span><span class="token function">getDC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">SetStretchBltMode</span><span class="token punctuation">(</span>dcNew<span class="token punctuation">,</span>HALFTONE<span class="token punctuation">)</span><span class="token punctuation">;</span>
image<span class="token punctuation">.</span><span class="token function">StretchBlt</span><span class="token punctuation">(</span>dcNew<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>newWidth<span class="token punctuation">,</span>newHeight<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//将image输出到imageNew的DC上</span>
imageNew<span class="token punctuation">.</span><span class="token function">ReleaseDC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//获取imageNew位图</span>
HBITMAP hBmp <span class="token operator">=</span> imageNew<span class="token punctuation">.</span><span class="token function">Detach</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//将位图显示到Picture Control</span>
CStatic<span class="token operator">*</span> pWnd <span class="token operator">=</span> <span class="token punctuation">(</span>CStatic<span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">GetDlgItem</span><span class="token punctuation">(</span>IDC_PHONE<span class="token punctuation">)</span><span class="token punctuation">;</span>
pWnd<span class="token punctuation">.</span><span class="token function">SetBitmap</span><span class="token punctuation">(</span>hBmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dc绘制" tabindex="-1"><a class="header-anchor" href="#dc绘制"><span>DC绘制</span></a></h3>
<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre v-pre class="language-c"><code>CClientDC <span class="token function">dc</span><span class="token punctuation">(</span>this<span class="token punctuation">)</span><span class="token punctuation">;</span>
CRect rectDlg<span class="token punctuation">;</span>
<span class="token function">GetClientRect</span><span class="token punctuation">(</span>rectDlg<span class="token punctuation">)</span><span class="token punctuation">;</span>	
<span class="token keyword">int</span> pointWidth <span class="token operator">=</span> rectDlg<span class="token punctuation">.</span><span class="token function">Width</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> pointHeight <span class="token operator">=</span> rectDlg<span class="token punctuation">.</span><span class="token function">Height</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	
<span class="token function">RedrawWindow</span><span class="token punctuation">(</span><span class="token function">CRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> pointWidth<span class="token punctuation">,</span> pointHeight<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//重绘指定区域,用于清除上一条直线</span>
<span class="token comment">//绘制直线</span>
CPen <span class="token function">pen</span><span class="token punctuation">(</span>PS_SOLID<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token function">RGB</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dc<span class="token punctuation">.</span><span class="token function">SelectObject</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
dc<span class="token punctuation">.</span><span class="token function">MoveTo</span><span class="token punctuation">(</span>cp1<span class="token punctuation">.</span>x<span class="token punctuation">,</span> cp1<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
dc<span class="token punctuation">.</span><span class="token function">LineTo</span><span class="token punctuation">(</span>cp2<span class="token punctuation">.</span>x<span class="token punctuation">,</span> cp2<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开始编程" tabindex="-1"><a class="header-anchor" href="#开始编程"><span>开始编程</span></a></h2>
<p>熟练掌握以上核心代码，便可以很容易实现一个跳一跳自动辅助了，大体编程思路如下：</p>
<ol>
<li>使用MFC管道通讯adb读取设备列表，并枚举显示设备id</li>
<li>对指定设备id进行屏幕截取与缩放显示</li>
<li>通过鼠标消息对点击的两点坐标进行直线绘制</li>
<li>计算直线长度与速度系数，发送adb模拟滑动指令实现自动跳一跳</li>
</ol>
<p>每个人的编程思维不一样，这里仅供参考，具体实现要靠你们敲动自己的小手啦！</p>
<h2 id="最终成品" tabindex="-1"><a class="header-anchor" href="#最终成品"><span>最终成品</span></a></h2>
<p>下面是我随手写的一个跳一跳辅助成品，实现思路与本文一模一样，大家仅供参考，需要代码可以联系我</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230531010219524.png" alt="image-20230531010219524"></p>
<p>随便测试了下，便达到了我从未达到过的分数，还是科技的力量强大！</p>
<p>其实是可以无限跳下去的，只是玩累了，我就自杀掉了。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230531010347907.png" alt="image-20230531010347907"></p>
<h2 id="功能升级" tabindex="-1"><a class="header-anchor" href="#功能升级"><span>功能升级</span></a></h2>
<p>上面是采用手动采集棋子与目标区域中心点的坐标实现的距离计算，尽管功能已经很强大，但仍需要人眼与人手的参与，我想这并不是我想要的最终结果。</p>
<p>于是我便开始思考通过色彩识图或是OpenCv等思路，实现自动采集两点的坐标，然后对代码微微修改，加上一个计时器，便可以实现全自动跳一跳了！由于时间有限，等我有空再对这方面内容进行添加。</p>
</div></template>



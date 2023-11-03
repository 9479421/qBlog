<template><h1 id="易道云c-c-全栈工程师学习笔记" tabindex="-1"><a class="header-anchor" href="#易道云c-c-全栈工程师学习笔记" aria-hidden="true">#</a> 易道云C/C++全栈工程师学习笔记</h1>
<h2 id="指针和引用-一" tabindex="-1"><a class="header-anchor" href="#指针和引用-一" aria-hidden="true">#</a> 指针和引用（一）</h2>
<h3 id="指针" tabindex="-1"><a class="header-anchor" href="#指针" aria-hidden="true">#</a> 指针</h3>
<p>int* a{},b;  a是指针，b是变量。</p>
<p>尽量分开写。</p>
<blockquote>
<p>获取一个变量的内存地址</p>
</blockquote>
<p>取址运算符&amp;</p>
<p>int a = 5000;
int* pa = &amp;a;</p>
<p>指针和变量的数据类型必须一致。</p>
<blockquote>
<p>读写一个指针指向的空间</p>
</blockquote>
<p>间接运算符*</p>
<p>*pa = 500; 代表往a的内存地址里写入500</p>
<p>(*pa)++; 相当于a++;</p>
<p>std::cout&lt;&lt; &quot;内存地址:&quot; &lt;&lt; pa &lt;&lt; &quot;\na=&quot; &lt;&lt; *pa;</p>
<h3 id="指针数组" tabindex="-1"><a class="header-anchor" href="#指针数组" aria-hidden="true">#</a> 指针数组</h3>
<p>int* ptrArray[10];</p>
<p>声明10个int类型的指针</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">int</span> studentId<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">10001</span><span class="token punctuation">,</span><span class="token number">10002</span><span class="token punctuation">,</span><span class="token number">10003</span><span class="token punctuation">,</span><span class="token number">10004</span><span class="token punctuation">,</span><span class="token number">10005</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token operator">*</span> ptrStudentId<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> x <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> x<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ptrStudentId<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>studentId<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>
    std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">"内存地址:"</span> <span class="token operator">&lt;&lt;</span> ptrStudentId<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> <span class="token string">"值"</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>ptrStudentId<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token operator">&lt;&lt;</span><span class="token string">"\n"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>二维数组指针</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">int</span> studentId1<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
    <span class="token punctuation">{</span>
        <span class="token punctuation">{</span><span class="token number">10001</span><span class="token punctuation">,</span><span class="token number">10002</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token number">10003</span><span class="token punctuation">,</span><span class="token number">10004</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span><span class="token operator">*</span> ptrStudentId1<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            ptrStudentId1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>studentId1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
            std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">"内存地址:"</span> <span class="token operator">&lt;&lt;</span> ptrStudentId1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> <span class="token string">"值"</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>ptrStudentId1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> <span class="token string">"\n"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>数组内存空间也是连续的</p>
<p>内存地址:001CF6F8值10001
内存地址:001CF6FC值10002
内存地址:001CF700值10003
内存地址:001CF704值10004</p>
<h3 id="指针补充" tabindex="-1"><a class="header-anchor" href="#指针补充" aria-hidden="true">#</a> 指针补充</h3>
<p>int* ptr{};</p>
<p>char* cptr{};</p>
<p>占用的空间都是8字节十六进制高位在前</p>
<p>因为指针是一种特殊的变量类型，在32位操作系统下，占8字节，在64位系统下，占16字节。</p>
<p>大多数计算机按高位优先顺序存储32位的数，但基于Intel CPU的计算机按低位优先顺序存储32位的数。</p>
<p>计算机存储字节顺序为：左低右高</p>
<p>16进制：左高右低         对于0X12，1是高位，2是地位</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">unsigned</span> a<span class="token punctuation">{</span> <span class="token number">99901</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token operator">*</span> ptr<span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span>a<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">*</span>ptr <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">char</span><span class="token operator">*</span> ctr<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
ctr <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span>ptr<span class="token punctuation">;</span>
<span class="token operator">*</span>ctr <span class="token operator">=</span> <span class="token char">'A'</span><span class="token punctuation">;</span> <span class="token comment">//41 FF FF FF  //0XFFFFFF41</span>
std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> a<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="指针实验" tabindex="-1"><a class="header-anchor" href="#指针实验" aria-hidden="true">#</a> 指针实验</h3>
<p>(*ptr)++</p>
<p>*ptr++  //先显示*ptr的值，然后让ptr++</p>
<p>指针+1的时候，数值的变化是 +1*指针类型的大小</p>
<p>所以int指针+1肯定要指向下一个地址的空间，所以是+4</p>
<p><strong>想强制让指针后移一个字节,可使用指针类型的强制类型转换为char*</strong></p>
<p><strong>p=(int*)((char*)p+1);</strong></p>
<h3 id="那些绕晕人的指针概念" tabindex="-1"><a class="header-anchor" href="#那些绕晕人的指针概念" aria-hidden="true">#</a> 那些绕晕人的指针概念</h3>
<h4 id="常量指针" tabindex="-1"><a class="header-anchor" href="#常量指针" aria-hidden="true">#</a> 常量指针</h4>
<p>const 变量类型*</p>
<p>所谓的常量指针，即这个指针指向的一个常量的内存地址，常量指针中，不能对其指向的内存地址进行改变，但是指针指向的地址可以改变；</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">const</span> <span class="token keyword">int</span> a<span class="token punctuation">{</span> <span class="token number">1000</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> b<span class="token punctuation">{</span> <span class="token number">2500</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> c<span class="token punctuation">{</span> <span class="token number">3500</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span><span class="token operator">*</span> ptr<span class="token punctuation">{</span> <span class="token operator">&amp;</span>a <span class="token punctuation">}</span><span class="token punctuation">;</span>
ptr <span class="token operator">=</span> <span class="token operator">&amp;</span>c<span class="token punctuation">;</span>
<span class="token comment">//*ptr = 300;  不可以</span>
std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>ptr<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="指针常量" tabindex="-1"><a class="header-anchor" href="#指针常量" aria-hidden="true">#</a> 指针常量</h4>
<p>变量类型* const</p>
<p>所谓的指针常量，即这个指针变量是一个常量，一旦初始化就不可以再指向其他内存地址，但是内存地址中的数据可以读写</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">int</span> a<span class="token punctuation">{</span> <span class="token number">1000</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> b<span class="token punctuation">{</span> <span class="token number">1000</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token operator">*</span> <span class="token keyword">const</span> ptr<span class="token punctuation">{</span> <span class="token operator">&amp;</span>a <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//ptr = &amp;b; 不可以</span>
<span class="token operator">*</span>ptr <span class="token operator">=</span> <span class="token number">999999</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="指向常量的常量指针" tabindex="-1"><a class="header-anchor" href="#指向常量的常量指针" aria-hidden="true">#</a> 指向常量的常量指针</h4>
<p>const 变量类型* const</p>
<p>指向常量的常量指针，即这个指针变量是一个常量，一旦初始化就不可以再指向其他内存地址，因为其本身就是一个指向常量的指针，所以其指向的内存区域也不可以修改！</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">int</span> <span class="token keyword">const</span> a<span class="token punctuation">{</span> <span class="token number">1000</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token keyword">const</span> b<span class="token punctuation">{</span> <span class="token number">1500</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span><span class="token operator">*</span> <span class="token keyword">const</span> ptrA<span class="token punctuation">{</span> <span class="token operator">&amp;</span>a <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//ptrA = &amp;b;</span>
<span class="token comment">//*ptrA = 500;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="课后小练习" tabindex="-1"><a class="header-anchor" href="#课后小练习" aria-hidden="true">#</a> <strong>课后小练习</strong></h3>
<p><strong>反汇编思考为什么*ptrA和a结果不一样</strong></p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">const</span> <span class="token keyword">int</span> a<span class="token punctuation">{</span> <span class="token number">1000</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> b<span class="token punctuation">{</span> <span class="token number">1400</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span><span class="token operator">*</span> ptrA<span class="token punctuation">{</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>a <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">*</span>ptrA <span class="token operator">=</span> <span class="token number">9500</span><span class="token punctuation">;</span>
std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>ptrA <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="指针和引用-二" tabindex="-1"><a class="header-anchor" href="#指针和引用-二" aria-hidden="true">#</a> 指针和引用(二)</h2>
<h3 id="指针和数组" tabindex="-1"><a class="header-anchor" href="#指针和数组" aria-hidden="true">#</a> 指针和数组</h3>
<p>imul 有符号乘法，将被乘数与乘数均作为<a href="https://baike.baidu.com/item/%E6%9C%89%E7%AC%A6%E5%8F%B7%E6%95%B0?fromModule=lemma_inlink" target="_blank" rel="noopener noreferrer">有符号数<ExternalLinkIcon/></a>。</p>
<p>mul 无符号乘法，将被乘数及乘数均作为无符号数。</p>
<p>可以有三个<a href="https://baike.baidu.com/item/%E6%93%8D%E4%BD%9C%E6%95%B0?fromModule=lemma_inlink" target="_blank" rel="noopener noreferrer">操作数<ExternalLinkIcon/></a>：imul eax,eax,0Ch</p>
<p>第3操作数是乘数，</p>
<p>第2操作数是被乘数，</p>
<p>运算结果放入第1操作数。</p>
<p>shl eax,1  左移1位</p>
<h3 id="动态内存分配" tabindex="-1"><a class="header-anchor" href="#动态内存分配" aria-hidden="true">#</a> 动态内存分配</h3>
<p><strong>C语言中的动态内存分配</strong></p>
<p>malloc(size_t _Size)</p>
<p>字节为单位 返回void* 最多4个GB</p>
<p>calloc(size_t _Count,size_t _Size)</p>
<p>分配count*size字节个内存，并且返回内存分配的地址</p>
<p>realloc(void*  _Block,size_t _Size)</p>
<p><strong>C++中的动态内存分配</strong></p>
<p>new int;</p>
<p>new int[4];</p>
<p>delete p;</p>
<p>delete []p;</p>
<p>memset</p>
<p>memcpy</p>
<h3 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h3>
<p>int a{ 5250 };
int&amp; la{ a };</p>
<h2 id="指针和引用-三" tabindex="-1"><a class="header-anchor" href="#指针和引用-三" aria-hidden="true">#</a> 指针和引用(三)</h2>
<h3 id="智能指针" tabindex="-1"><a class="header-anchor" href="#智能指针" aria-hidden="true">#</a> 智能指针</h3>
<p>std::unique_ptr&lt;int&gt; intPtr{new int {5}};</p>
<p>std::unique_ptr&lt;int[]&gt; intPtr{new int[5] {5,4,3,2,1}};</p>
<p>std::unique_ptr&lt;int[]&gt; intPtr {std::make_unique&lt;int[]&gt;(5)};</p>
<p>std::unique_ptr&lt;int&gt; intPtr {std::make_unique&lt;int&gt;(5)};</p>
<table>
<thead>
<tr>
<th>u.release()</th>
<th><strong>u放弃对指针的控制权，返回指针，并将u置空</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>u.reset()</td>
<td><strong>释放u指向的对象，并将u置为空</strong></td>
</tr>
<tr>
<td>u.reset(q)</td>
<td><strong>释放u原来指向的对象，令u指向这个q</strong></td>
</tr>
</tbody>
</table>
<p>std::move()</p>
<p>std::shared_ptr&lt;int&gt; ptrA{std::make_shared&lt;int&gt;(1)};</p>
<p>std::cout &lt;&lt; ptrA.use_count() &lt;&lt; std::endl;</p>
<p>std::cout &lt;&lt; ptrA.unique() &lt;&lt; std::endl;   C++17以后用不了了</p>
<p>reset()会将当前共享指针设置成nullptr，同时如果当前智能指针是最后一个拥有该指针的对象，那么将会释放内存。</p>
<h3 id="字符处理" tabindex="-1"><a class="header-anchor" href="#字符处理" aria-hidden="true">#</a> 字符处理</h3>
<p>wchar_t wstr[0xFF]{ L&quot;Hello张三&quot; };
for (int i = 0; wstr[i]; i++)
{
std::cout &lt;&lt; std::hex &lt;&lt; (short)wstr[i] &lt;&lt; std::endl;
}</p>
<p>默认是GBK编码，中文占两个字节，英文占一个字节。</p>
<p>wchar_t为宽字节，UniCode编码，unicode为每种语言中的每个字符设定了统一并且唯一的二进制编码</p>
<p>所以要学会设置编码</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;locale></span></span>
<span class="token function">setlocale</span><span class="token punctuation">(</span>LC_ALL<span class="token punctuation">,</span> <span class="token string">"chs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>scanf_s(&quot;%s&quot;,Name,5);  //限制5个字符</p>
<p>wscanf_s(L&quot;%s&quot;,wstr,可接受的最大字符值);</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token function">setlocale</span><span class="token punctuation">(</span>LC_ALL<span class="token punctuation">,</span> <span class="token string">"chs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">wchar_t</span> wstr<span class="token punctuation">[</span><span class="token number">0xFF</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
std<span class="token operator">::</span>wcout <span class="token operator">&lt;&lt;</span> L<span class="token string">"请输入您的名字"</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
std<span class="token operator">::</span>wcin <span class="token operator">>></span> wstr<span class="token punctuation">;</span>
std<span class="token operator">::</span>wcout <span class="token operator">&lt;&lt;</span> wstr<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>strlen()</p>
<p>wcslen()</p>
<h2 id="联合体" tabindex="-1"><a class="header-anchor" href="#联合体" aria-hidden="true">#</a> 联合体</h2>
<h3 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">union</span> USER
<span class="token punctuation">{</span>
	<span class="token keyword">short</span> sHP<span class="token punctuation">;</span>
	<span class="token keyword">int</span> nHP<span class="token punctuation">;</span>
	<span class="token keyword">double</span> fHP<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Union用来共享内存，内存大小取决于占内存最大的成员。</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">union</span> USER
<span class="token punctuation">{</span>
	<span class="token keyword">short</span> sHP<span class="token punctuation">;</span>
	<span class="token keyword">int</span> nHP<span class="token punctuation">;</span>
	<span class="token keyword">double</span> fHP<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
	USER user<span class="token punctuation">;</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token operator">&lt;&lt;</span>std<span class="token operator">::</span>endl<span class="token punctuation">;</span>

	user<span class="token punctuation">.</span>nHP <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	user<span class="token punctuation">.</span>sHP <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> user<span class="token punctuation">.</span>sHP <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> user<span class="token punctuation">.</span>nHP <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>执行user.sHp = -1后，user内存空间</p>
<p>内存分布为</p>
<p>11111111 11111111</p>
<p>为0xFF</p>
<p>即11111111 1111111</p>
<p>即为-1</p>
<p>但是读user.nHp时为4个字节</p>
<p>内存分布为</p>
<p>11111111 11111111 00000000 00000000</p>
<p>为0X00FF</p>
<p>即00000000 00000000 11111111 1111111</p>
<p>即为65535</p>
<h3 id="匿名union" tabindex="-1"><a class="header-anchor" href="#匿名union" aria-hidden="true">#</a> 匿名union</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">union</span>
<span class="token punctuation">{</span>
	<span class="token keyword">short</span> sHP<span class="token punctuation">;</span>
	<span class="token keyword">int</span> nHP<span class="token punctuation">;</span>
	<span class="token keyword">double</span> fHP<span class="token punctuation">;</span>
<span class="token punctuation">}</span> ls<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>缺点就是只能用一次</p>
<p>结构体也可以这样用</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">struct</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> xp<span class="token punctuation">;</span>
<span class="token punctuation">}</span> ls<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2>
<h3 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> string</h3>
<p>std::string是C++提供的字符串。</p>
<p>std::string str{&quot;哈哈哈&quot;}</p>
<p>std::string 变量名称{&quot;字符串&quot;,要截取的长度}</p>
<p>std::string 变量名称{&quot;字符串&quot;,起始位置，要截取的长度}</p>
<p>std::string 变量名称(要复制的个数,'字符');</p>
<p>std::to_string();支持各种类型</p>
<p>还有 substring length append 等等操作</p>
<p>str.c_str()和str.data()一模一样 返回一个 const char*</p>
<p>但是在C++17标准后，str.data()返回的是char*</p>
<p>C字符串char*以0结尾，而string有专门记录其长度的属性，在实现的时候，没有严格要求以0结尾。</p>
<p>但是在C++11后，string也要求以0结尾</p>
<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2>
<p>指针可以传入nullptr空指针，而引用不可以</p>
<p>Role* &amp;beAct 指针类型的引用</p>
<p>main函数的另一面：</p>
<p>argcount 参数个数</p>
<p>c_arg[] 程序的路径及文件名</p>
<p>不定量参数</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;cstdarg></span></span>


<span class="token keyword">int</span> <span class="token function">Average</span><span class="token punctuation">(</span><span class="token keyword">int</span> count<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
	<span class="token comment">//va_list arg;</span>
	<span class="token keyword">char</span><span class="token operator">*</span> arg<span class="token punctuation">;</span>
	<span class="token function">va_start</span><span class="token punctuation">(</span>arg<span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> sum<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		sum <span class="token operator">+=</span> <span class="token function">va_arg</span><span class="token punctuation">(</span>arg<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	sum <span class="token operator">/=</span> count<span class="token punctuation">;</span>

	<span class="token function">va_end</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token function">Average</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">53</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">321</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">321</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">"平均数："</span> <span class="token operator">&lt;&lt;</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>函数是一个内存地址</p>
<p>函数功能是数据</p>
<p>函数指针：</p>
<p>int (*pAdd) (int,int) = Add</p>
<p>类型转换</p>
<p>char (*pAdd)(int,int) = (char (*)(int,int))Add;</p>
<p>声明一个函数指针</p>
<p>typedef char(*pfAdd)(int,int);</p>
<p>using pfAdd = char(*)(int,int);</p>
<h2 id="函数模板" tabindex="-1"><a class="header-anchor" href="#函数模板" aria-hidden="true">#</a> 函数模板</h2>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream></span></span>

template <span class="token operator">&lt;</span>typename type1<span class="token operator">></span>
type1 <span class="token function">ave</span><span class="token punctuation">(</span>type1 a<span class="token punctuation">,</span> type1 b<span class="token punctuation">,</span> type1 c<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b <span class="token operator">+</span> c<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token function">ave</span><span class="token punctuation">(</span><span class="token number">12.0f</span><span class="token punctuation">,</span> <span class="token number">250.5f</span><span class="token punctuation">,</span> <span class="token number">36.395f</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token function">ave</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token function">ave</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
    
    
    std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> ave<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token number">12.0f</span><span class="token punctuation">,</span><span class="token number">250.f</span><span class="token punctuation">,</span><span class="token number">36.395f</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span>std<span class="token operator">::</span>endl<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="编译器" tabindex="-1"><a class="header-anchor" href="#编译器" aria-hidden="true">#</a> 编译器</h2>
<h3 id="onedefinition-rule" tabindex="-1"><a class="header-anchor" href="#onedefinition-rule" aria-hidden="true">#</a> OneDefinition Rule</h3>
<h3 id="define" tabindex="-1"><a class="header-anchor" href="#define" aria-hidden="true">#</a> #define</h3>
<p>#define SHOW(X,Y) void X##Y(){std::cout&lt;&lt;#X;}</p>
<p>SHOW(test, 321321)</p>
<p>test321321();</p>
<h3 id="namespace" tabindex="-1"><a class="header-anchor" href="#namespace" aria-hidden="true">#</a> namespace</h3>
<p>全局命名空间 ::p;</p>
<h3 id="assert" tabindex="-1"><a class="header-anchor" href="#assert" aria-hidden="true">#</a> assert</h3>
<p>#define NDEBUG</p>
<p>可以在当前转换单元关闭assert</p>
<p>static_assert();</p>
<h2 id="控制台api" tabindex="-1"><a class="header-anchor" href="#控制台api" aria-hidden="true">#</a> 控制台API</h2>
<h3 id="windows编程讲什么" tabindex="-1"><a class="header-anchor" href="#windows编程讲什么" aria-hidden="true">#</a> Windows编程讲什么</h3>
<p>API：Application Programming Interface 应用程序编程接口</p>
<p>Windows32API官网：</p>
<p>https://learn.microsoft.com/zh-cn/windows/win32/apiindex/windows-api-list</p>
<h3 id="创建游戏窗口" tabindex="-1"><a class="header-anchor" href="#创建游戏窗口" aria-hidden="true">#</a> 创建游戏窗口</h3>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230512044921377.png" alt="image-20230512044921377"></p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code>SMALL_RECT mRect<span class="token punctuation">{</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">40</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">SetConsoleWindowInfo</span><span class="token punctuation">(</span>hdlOut<span class="token punctuation">,</span> FALSE<span class="token punctuation">,</span> <span class="token operator">&amp;</span>mRect<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"设置窗口大小成功\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>FALSE就是窗口相对于缓冲区的上下左右</p>
<p>而TRUE是绝对值，全部基于左上角来计算</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">SetConsoleScreenBufferSize</span><span class="token punctuation">(</span>hdlOut<span class="token punctuation">,</span> cRd<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"缓冲区设置成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>设置缓冲区大小</p>
<h3 id="光标与字体" tabindex="-1"><a class="header-anchor" href="#光标与字体" aria-hidden="true">#</a> 光标与字体</h3>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230512170100198.png" alt="image-20230512170100198"></p>
<blockquote>
<p>由于基础部分大多本人都熟悉，笔记就没有认真去详细记录，后面只记录和总结较为复杂的知识点，基础部分直接跳过。</p>
</blockquote>
<h2 id="windows编程-线程" tabindex="-1"><a class="header-anchor" href="#windows编程-线程" aria-hidden="true">#</a> Windows编程-线程</h2>
<blockquote>
<p>多线程开发中经常面临线程同步的问题，这时候就需要对公有操作部分进行上锁处理，windows中的加锁方案实在是太多太杂了，特此专门写一篇以便区分。</p>
</blockquote>
<h3 id="互斥量" tabindex="-1"><a class="header-anchor" href="#互斥量" aria-hidden="true">#</a> 互斥量</h3>
<p>HANDLE CreateMutex(
LPSECURITY_ATTRIBUTES<em>lpMutexAttributes</em>, // 指向安全属性的指针
BOOL<em>bInitialOwner</em>, // 初始化互斥对象的所有者
LPCTSTR<em>lpName</em> // 指向互斥对象名的指针
);</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code>HANDLE hMutex <span class="token operator">=</span> <span class="token function">CreateMutex</span><span class="token punctuation">(</span><span class="token constant">NULL</span><span class="token punctuation">,</span>TRUE<span class="token punctuation">,</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
当前线程调用该互斥对象次数为<span class="token number">1</span>，递归计数器设置为<span class="token number">1</span>

<span class="token function">WaitForSingleObject</span><span class="token punctuation">(</span>hMutex，INFINITE<span class="token punctuation">)</span><span class="token punctuation">;</span>
当前线程调用该互斥对象次数为<span class="token number">2</span>，递归计数器<span class="token operator">+</span><span class="token number">1</span>，为<span class="token number">2</span>

<span class="token function">ReleaseMutex</span><span class="token punctuation">(</span>hMutex<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//释放占用互斥对象的线程的拥有权，递归计数器-1，递归计数器值为1</span>
<span class="token function">ReleaseMutex</span><span class="token punctuation">(</span>hMutex<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//释放占用互斥对象的线程的拥有权，递归计数器-1，递归计数器值为0</span>

<span class="token comment">//递归计数器值为0，互斥对象处于触发/有信号/已通知状态，可以在此为其他线程所占用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>lpMutexAttributes      SECURITY_ATTRIBUTES，指定一个SECURITY_ATTRIBUTES结构，或传递零值（将参数声明为ByVal As Long，并传递零值），表示使用不允许继承的默认描述符  。</p>
<p>bInitialOwner     Long，初始化互斥对象的所有者。TRUE：占有，FALSE：不占有。 如希望立即占有该互斥量，则设为TRUE。 操作系统记录线程ID，将递归计数器设置为1，互斥量处于未触发/无信号/未通知状态。一个互斥体同时只能由一个线程拥有 。  为FALSE，则线程ID为NULL，操作系统将递归计数器设置为0，互斥量处于触发/有信号/已通知状态，不为任何线程所占用 。</p>
<p>lpName      String，指向互斥对象名的指针，设置互斥对象的名字。创建一个未命名的互斥体对象。如已经存在这个名字，则打开已命名互斥体 。有了名字就可以跨进程得到同一把锁。</p>
<h3 id="事件对象" tabindex="-1"><a class="header-anchor" href="#事件对象" aria-hidden="true">#</a> 事件对象</h3>
<p>HANDLE  CreateEvent(
　　LPSECURITY_ATTRIBUTES  lpEventAttributes,// 安全属性
　　BOOL  bManualReset,// 复位方式
　　BOOL  bInitialState,// 初始状态
　　LPCTSTR  lpName // 对象名称
);</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code>HANDLE hEvent<span class="token operator">=</span><span class="token function">CreateEvent</span><span class="token punctuation">(</span><span class="token constant">NULL</span><span class="token punctuation">,</span>TRUE<span class="token punctuation">,</span>FALSE<span class="token punctuation">,</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//创建对象，手动复位，初始化时无信号</span>
<span class="token function">WaitForSingleObject</span><span class="token punctuation">(</span>hEvent，INFINITE<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setEvent</span><span class="token punctuation">(</span>hEvent<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//把事件设置为有信号状态</span>
<span class="token function">ResetEvent</span><span class="token punctuation">(</span>hEvent<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//把事件设置为无信号状态</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="信号量对象" tabindex="-1"><a class="header-anchor" href="#信号量对象" aria-hidden="true">#</a> 信号量对象</h3>
<ul>
<li><strong>信号量是操作系统提供的一种协调共享资源访问的方法。信号量则由操作系统进行管理，地位高于进程，操作系统保证信号量的原子性。</strong></li>
<li>信号量（英语：semaphore）又称为信号标或者信号灯，是一个同步对象，用于保持在0至指定最大值之间的一个计数值。当线程完成一次对该semaphore对象的等待（wait）时，该计数值减一；当线程完成一次对semaphore对象的释放（release）时，计数值加一。当计数值为0，则线程等待该semaphore对象不再能成功直至该semaphore对象变成signaled状态。semaphore对象的计数值大于0，为signaled状态；计数值等于0，为nonsignaled状态。</li>
</ul>
<p>HANDLE WINAPI CreateSemaphore(</p>
<p>​	<em>In_opt</em> LPSECURITY_ATTRIBUTES lpSemaphoreAttributes,<em>//指向SECURITY_ATTRIBUTES的指针;</em></p>
<p>​	<em>In</em>     LONG                  lInitialCount,          <em>//信号量对象的初始值；</em></p>
<p>​	 <em>In</em>     LONG                  lMaximumCount,  <em>//信号量对象的最大值，这个值必须大于0;</em></p>
<p>​	 <em>In_opt</em> LPCTSTR               lpName                 <em>//信号量对象的名称；</em></p>
<p>);</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code>HANDLE g_hSemaphore <span class="token operator">=</span> <span class="token function">CreateSemaphore</span><span class="token punctuation">(</span><span class="token constant">NULL</span>          <span class="token comment">//信号量的安全特性</span>
                                  <span class="token punctuation">,</span> <span class="token number">1</span>            <span class="token comment">//设置信号量的初始计数。可设置零到最大值之间的一个值</span>
                                  <span class="token punctuation">,</span> <span class="token number">1</span>            <span class="token comment">//设置信号量的最大计数</span>
                                  <span class="token punctuation">,</span> <span class="token constant">NULL</span>         <span class="token comment">//指定信号量对象的名称</span>
                                  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">WaitForSingleObject</span><span class="token punctuation">(</span>g_hSemaphore<span class="token punctuation">,</span> INFINITE<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">//信号量值-1</span>
<span class="token function">ReleaseSemaphore</span><span class="token punctuation">(</span>g_hSemaphore<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">//信号量值+1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>我们以windows api的接口为例，讲解下信号量是如何在进程A和进程B间做到进程间同步的。</p>
<p>1、进程A过程
1.1、CreateSemaphore（）：创建一个名字为Semaphore的信号量，该信号量初始可使用的资源数为0。即S=0.
1.2、WaitForSingleObject（）：等待信号量&gt;0，就是等待信号量的资源数大于0时。成功后就是S–。（启动进程A后，此处会一直等待，因为创建的信号量初始的值=0，直到进程B打开进程A的信号量，并且释放一个可以使用的资源时，S变成1，才可以继续，进行后面的程序）
1.3、在屏幕打印文字。
1.4、ReleaseSemaphore（）：释放上面wait成功时占用的1个资源数。执行成功后就是S++。
1.5、等待5s。
2、进程B过程
2.1、OpenSemaphore（）：打开进程A创建的信号量，名字为Semaphore
2.2、ReleaseSemaphore（）:递增信号量的当前资源计数,就是S++。S=1
2.3、WaitForSingleObject（）：等待信号量&gt;0，就是等待信号量的资源数大于0时。成功后就是S–。
2.4、在屏幕打印文字。
2.5、ReleaseSemaphore（）：释放上面wait成功时占用的1个资源数。成功后就是S++。
2.6、等待5s。</p>
<h3 id="关键代码段" tabindex="-1"><a class="header-anchor" href="#关键代码段" aria-hidden="true">#</a> 关键代码段</h3>
<p>很多人对CRITICAL_SECTION的理解是错误的，认为CRITICAL_SECTION是锁定了资源，其实，CRITICAL_SECTION是不能够“锁定”资源的，它能够完成的功能，是同步不同线程的代码段。简单说，当一个线程执行了EnterCritialSection之后，cs里面的信息便被修改，以指明哪一个线程占用了它。而此时，并没有任何资源被“锁定”。不管什么资源，其它线程都还是可以访问的（当然，执行的结果可能是错误的）。只不过，在这个线程尚未执行LeaveCriticalSection之前，其它线程碰到EnterCritialSection语句的话，就会处于等待状态，相当于线程被挂起了。 这种情况下，就起到了保护共享资源的作用。</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code>CRITICAL_SECTION cs<span class="token punctuation">;</span>
<span class="token function">EnterCriticalSection</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>cs<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token comment">// 操作dwTime</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token function">LeaveCriticalSection</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>cs<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="windows编程-进程" tabindex="-1"><a class="header-anchor" href="#windows编程-进程" aria-hidden="true">#</a> Windows编程-进程</h2>
<h3 id="剪切板通信" tabindex="-1"><a class="header-anchor" href="#剪切板通信" aria-hidden="true">#</a> 剪切板通信</h3>
<blockquote>
<p>存储数据到剪切板</p>
</blockquote>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token function">OpenClipboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">EmptyClipboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">char</span><span class="token operator">*</span> szSendBuf<span class="token punctuation">;</span>

HANDLE hClip <span class="token operator">=</span> <span class="token function">GlobalAlloc</span><span class="token punctuation">(</span>GMEM_MOVEABLE<span class="token punctuation">,</span>strSend<span class="token punctuation">.</span><span class="token function">GetLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

szSendBuf <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">GlobalLock</span><span class="token punctuation">(</span>hClip<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">strcpy</span><span class="token punctuation">(</span>szSendBuf<span class="token punctuation">,</span><span class="token string">"复制的文字"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">GlobalUnLock</span><span class="token punctuation">(</span>hClip<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">SetClipboardData</span><span class="token punctuation">(</span>CF_TEXT<span class="token punctuation">,</span>hClip<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">CloseClipboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><blockquote>
<p>从剪切板中读取数据</p>
</blockquote>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token function">OpenClipboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">IsClipboardFormatAvailable</span><span class="token punctuation">(</span>CF_TEXT<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">char</span><span class="token operator">*</span> szRecvBuf<span class="token punctuation">;</span>

HANDLE hClip <span class="token operator">=</span> <span class="token function">GetClipboardData</span><span class="token punctuation">(</span>CF_TEXT<span class="token punctuation">)</span><span class="token punctuation">;</span>

szRecvBuf <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">GlobalLock</span><span class="token punctuation">(</span>hClip<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">GlobalUnlock</span><span class="token punctuation">(</span>hClip<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="邮槽通信" tabindex="-1"><a class="header-anchor" href="#邮槽通信" aria-hidden="true">#</a> 邮槽通信</h3>
<p>接收端</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code>LPCTSTR szSlotName <span class="token operator">=</span> <span class="token function">TEXT</span><span class="token punctuation">(</span><span class="token string">"\\\\.\\mailslot\\Mymailslot"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
HANDLE hSlot <span class="token operator">=</span> <span class="token function">CreateMailslot</span><span class="token punctuation">(</span>szSlotName<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>MAILSLOT_WAIT_FOREVER<span class="token punctuation">,</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>hSlot <span class="token operator">==</span> INVALID_HANDLE_VALUE<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">TRACE</span><span class="token punctuation">(</span><span class="token string">"CreateMailslot failed with %d\n"</span><span class="token punctuation">,</span><span class="token function">GetLastError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">char</span> szBuf<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
DWORD dwRead<span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">ReadFile</span><span class="token punctuation">(</span>hSlot<span class="token punctuation">,</span>szBuf<span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>dwRead<span class="token punctuation">,</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">MessageBox</span><span class="token punctuation">(</span><span class="token string">"Read Failed!!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">MessageBox</span><span class="token punctuation">(</span>szBuf<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">CloseHandle</span><span class="token punctuation">(</span>hSlot<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>发送端</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code>LPCTSTR szSlotName <span class="token operator">=</span> <span class="token function">TEXT</span><span class="token punctuation">(</span><span class="token string">"\\\\.\\mailslot\\Mymailslot"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
HANDLE hMailSlot <span class="token operator">=</span> <span class="token function">CreateFile</span><span class="token punctuation">(</span>szSlotName<span class="token punctuation">,</span> FILE_GENERIC_WRITE<span class="token punctuation">,</span> FILE_SHARE_READ<span class="token punctuation">,</span><span class="token constant">NULL</span><span class="token punctuation">,</span>OPEN_EXISTING<span class="token punctuation">,</span>FILE_ATTRIBUTE_NORMAL<span class="token punctuation">,</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>hMailSlot <span class="token operator">==</span> INVALID_HANDLE_VALUE<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">TRACE</span><span class="token punctuation">(</span><span class="token string">"CreateFile failed with %d\n"</span><span class="token punctuation">,</span><span class="token function">GetLastError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">char</span> szBuf<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"MailSlot Comming"</span><span class="token punctuation">;</span>
DWORD dwWrite<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">WriteFile</span><span class="token punctuation">(</span>hMailSlot<span class="token punctuation">,</span>szBuf<span class="token punctuation">,</span><span class="token function">strlen</span><span class="token punctuation">(</span>szBuf<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>dwWrite<span class="token punctuation">,</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">MessageBox</span><span class="token punctuation">(</span><span class="token string">"WriteFile Failed!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">CloseHandle</span><span class="token punctuation">(</span>hMailSlot<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="无名管道通信" tabindex="-1"><a class="header-anchor" href="#无名管道通信" aria-hidden="true">#</a> 无名管道通信</h3>
<p>主进程创建管道</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code>SECURITY_ATTRIBUTES sa<span class="token punctuation">;</span>
sa<span class="token punctuation">.</span>bInheritHandle <span class="token operator">=</span> TRUE<span class="token punctuation">;</span>
sa<span class="token punctuation">.</span>lpSecurityDescriptor <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
sa<span class="token punctuation">.</span>nLength <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>SECURITY_ATTRIBUTES<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">CreatePipe</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>hReadPipe<span class="token punctuation">,</span><span class="token operator">&amp;</span>hWritePipe<span class="token punctuation">,</span><span class="token operator">&amp;</span>sa<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">MessageBox</span><span class="token punctuation">(</span><span class="token string">"匿名管道创建失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
STARTUPINFO strStartupInfo<span class="token punctuation">;</span>
<span class="token function">memset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>strStartupInfo<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>strStartupInfo<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
strStartupInfo<span class="token punctuation">.</span>cb <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>strStartupInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
strStartupInfo<span class="token punctuation">.</span>dwFlags <span class="token operator">=</span> STARTF_USESTDHANDLES<span class="token punctuation">;</span>
strStartupInfo<span class="token punctuation">.</span>hStdInput <span class="token operator">=</span> hReadPipe<span class="token punctuation">;</span>
strStartupInfo<span class="token punctuation">.</span>hStdOutput <span class="token operator">=</span> hWritePipe<span class="token punctuation">;</span>
strStartupInfo<span class="token punctuation">.</span>hStdError <span class="token operator">=</span> <span class="token function">GetStdHandle</span><span class="token punctuation">(</span>STD_ERROR_HANDLE<span class="token punctuation">)</span><span class="token punctuation">;</span>

PROCESS_INFORMATION szProcessInformartion<span class="token punctuation">;</span>
<span class="token function">memset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>szProcessInformartion<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>szProcessInformartion<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> iRet <span class="token operator">=</span> <span class="token function">CreateProcess</span><span class="token punctuation">(</span><span class="token function">_T</span><span class="token punctuation">(</span><span class="token string">"ProcessClient.exe"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token constant">NULL</span><span class="token punctuation">,</span>
	<span class="token constant">NULL</span><span class="token punctuation">,</span>
	<span class="token constant">NULL</span><span class="token punctuation">,</span>
	TRUE<span class="token punctuation">,</span>
	<span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token constant">NULL</span><span class="token punctuation">,</span>
	<span class="token constant">NULL</span><span class="token punctuation">,</span>
	<span class="token operator">&amp;</span>strStartupInfo<span class="token punctuation">,</span>
	<span class="token operator">&amp;</span>szProcessInformartion
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>iRet<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">CloseHandle</span><span class="token punctuation">(</span>szProcessInformartion<span class="token punctuation">.</span>hProcess<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">CloseHandle</span><span class="token punctuation">(</span>szProcessInformartion<span class="token punctuation">.</span>hThread<span class="token punctuation">)</span><span class="token punctuation">;</span>
	szProcessInformartion<span class="token punctuation">.</span>dwProcessId <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	szProcessInformartion<span class="token punctuation">.</span>dwThreadId <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	szProcessInformartion<span class="token punctuation">.</span>hThread <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	szProcessInformartion<span class="token punctuation">.</span>hProcess <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span>
<span class="token punctuation">{</span>
	<span class="token function">CloseHandle</span><span class="token punctuation">(</span>hReadPipe<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">CloseHandle</span><span class="token punctuation">(</span>hWritePipe<span class="token punctuation">)</span><span class="token punctuation">;</span>
	hReadPipe <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
	hWritePipe <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
	<span class="token function">MessageBox</span><span class="token punctuation">(</span><span class="token string">"创建子进程失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><p>主进程发送</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">char</span> szBuf<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"This "</span><span class="token punctuation">;</span>
DWORD dwWrite<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">WriteFile</span><span class="token punctuation">(</span>hWritePipe<span class="token punctuation">,</span>szBuf<span class="token punctuation">,</span><span class="token function">strlen</span><span class="token punctuation">(</span>szBuf<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>dwWrite<span class="token punctuation">,</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">MessageBox</span><span class="token punctuation">(</span><span class="token string">"写入数据失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>子进程接收</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code>hReadPipe <span class="token operator">=</span> <span class="token function">GetStdHandle</span><span class="token punctuation">(</span>STD_INPUT_HANDLE<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">char</span> szBuf<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
DWORD dwRead<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">ReadFile</span><span class="token punctuation">(</span>hReadPipe<span class="token punctuation">,</span>szBuf<span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>dwRead<span class="token punctuation">,</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">MessageBox</span><span class="token punctuation">(</span><span class="token string">"ReadFile Failed!!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">CloseHandle</span><span class="token punctuation">(</span>hReadPipe<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">MessageBox</span><span class="token punctuation">(</span>szBuf<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>子进程发送，主进程接收同理。</p>
<p>一个是GetStdHandle(STD_OUTPUT_HANDLE);</p>
<p>一个是GetStdHandle(STD_INPUT_HANDLE);</p>
<h3 id="命名管道通信" tabindex="-1"><a class="header-anchor" href="#命名管道通信" aria-hidden="true">#</a> 命名管道通信</h3>
<p>服务端创建命名管道</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code>LPCTSTR szPipeName <span class="token operator">=</span> <span class="token function">TEXT</span><span class="token punctuation">(</span><span class="token string">"\\\\.\\pipe\\mypipe"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
hNamedPipe <span class="token operator">=</span> <span class="token function">CreateNamedPipe</span><span class="token punctuation">(</span>szPipeName<span class="token punctuation">,</span> PIPE_ACCESS_DUPLEX <span class="token operator">|</span> FILE_FLAG_OVERLAPPED<span class="token punctuation">,</span> PIPE_TYPE_BYTE<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>hNamedPipe <span class="token operator">==</span> INVALID_HANDLE_VALUE<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">TRACE</span><span class="token punctuation">(</span><span class="token string">"CreateNamedhPipe failed with %d\n"</span><span class="token punctuation">,</span> <span class="token function">GetLastError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">MessageBox</span><span class="token punctuation">(</span><span class="token string">"创建命名管道失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
HANDLE hEvent <span class="token operator">=</span> <span class="token function">CreateEvent</span><span class="token punctuation">(</span><span class="token constant">NULL</span><span class="token punctuation">,</span> TRUE<span class="token punctuation">,</span> FALSE<span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> hEvent<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">MessageBox</span><span class="token punctuation">(</span><span class="token string">"创建事件失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">CloseHandle</span><span class="token punctuation">(</span>hNamedPipe<span class="token punctuation">)</span><span class="token punctuation">;</span>
	hNamedPipe <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
OVERLAPPED ovlap<span class="token punctuation">;</span>
<span class="token function">ZeroMemory</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>ovlap<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>OVERLAPPED<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ovlap<span class="token punctuation">.</span>hEvent <span class="token operator">=</span> hEvent<span class="token punctuation">;</span>
<span class="token comment">//等待连接</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">ConnectNamedPipe</span><span class="token punctuation">(</span>hNamedPipe<span class="token punctuation">,</span><span class="token operator">&amp;</span>ovlap<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>ERROR_IO_PENDING<span class="token operator">!=</span><span class="token function">GetLastError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">MessageBox</span><span class="token punctuation">(</span><span class="token string">"等待客户端连接失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">CloseHandle</span><span class="token punctuation">(</span>hNamedPipe<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">CloseHandle</span><span class="token punctuation">(</span>hEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
		hNamedPipe <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
		hEvent <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">WaitForSingleObject</span><span class="token punctuation">(</span>hEvent<span class="token punctuation">,</span>INFINITE<span class="token punctuation">)</span><span class="token operator">==</span>WAIT_FAILED<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">MessageBox</span><span class="token punctuation">(</span><span class="token string">"等待对象失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">CloseHandle</span><span class="token punctuation">(</span>hNamedPipe<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">CloseHandle</span><span class="token punctuation">(</span>hEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
	hNamedPipe <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
	hEvent <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>客户端连接命名管道</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code>LPCTSTR szNamedPipeName <span class="token operator">=</span> <span class="token function">TEXT</span><span class="token punctuation">(</span><span class="token string">"\\\\.\\pipe\\mypipe"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">==</span> <span class="token function">WaitNamedPipe</span><span class="token punctuation">(</span>szNamedPipeName<span class="token punctuation">,</span>NMPWAIT_WAIT_FOREVER<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">MessageBox</span><span class="token punctuation">(</span><span class="token string">"当前没有可以利用的管道"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
hNamedPipe <span class="token operator">=</span> <span class="token function">CreateFile</span><span class="token punctuation">(</span>szNamedPipeName<span class="token punctuation">,</span> GENERIC_READ <span class="token operator">|</span> GENERIC_WRITE<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">,</span> OPEN_EXISTING<span class="token punctuation">,</span> FILE_ATTRIBUTE_NORMAL<span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>hNamedPipe <span class="token operator">==</span> INVALID_HANDLE_VALUE<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">TRACE</span><span class="token punctuation">(</span><span class="token string">"CreateFile failed with %d\n"</span><span class="token punctuation">,</span> <span class="token function">GetLastError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">MessageBox</span><span class="token punctuation">(</span><span class="token string">"打开命名管道失败！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	hNamedPipe <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>接收端</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">char</span> szBuf<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Named Pipe Going Client"</span><span class="token punctuation">;</span>
DWORD dwRead<span class="token punctuation">;</span>
BOOL bRet <span class="token operator">=</span> <span class="token function">ReadFile</span><span class="token punctuation">(</span>hNamedPipe<span class="token punctuation">,</span> szBuf<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>dwRead<span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>bRet<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">MessageBox</span><span class="token punctuation">(</span><span class="token string">"ReadFile Failed!!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">CloseHandle</span><span class="token punctuation">(</span>hNamedPipe<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">MessageBox</span><span class="token punctuation">(</span>szBuf<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>发送端</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">char</span> szBuf<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Named Pipe Going Client"</span><span class="token punctuation">;</span>
DWORD dwWrite<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">WriteFile</span><span class="token punctuation">(</span>hNamedPipe<span class="token punctuation">,</span>szBuf<span class="token punctuation">,</span><span class="token function">strlen</span><span class="token punctuation">(</span>szBuf<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>dwWrite<span class="token punctuation">,</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">MessageBox</span><span class="token punctuation">(</span><span class="token string">"WriteFile Failed!!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">CloseHandle</span><span class="token punctuation">(</span>hNamedPipe<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="wm-copydata通信" tabindex="-1"><a class="header-anchor" href="#wm-copydata通信" aria-hidden="true">#</a> WM_COPYDATA通信</h3>
<blockquote>
<p>最常用的通信方式</p>
</blockquote>
<p>接收端</p>
<p>资源视图 --&gt; 类向导 --&gt; 消息 --&gt; WM_COPYDATA</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code>BOOL CServerReviewDlg<span class="token operator">::</span><span class="token function">OnCopyData</span><span class="token punctuation">(</span>CWnd<span class="token operator">*</span> pWnd<span class="token punctuation">,</span> COPYDATASTRUCT<span class="token operator">*</span> pCopyDataStruct<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	LPCTSTR szText <span class="token operator">=</span> <span class="token punctuation">(</span>LPCTSTR<span class="token punctuation">)</span><span class="token punctuation">(</span>pCopyDataStruct<span class="token operator">-></span>lpData<span class="token punctuation">)</span><span class="token punctuation">;</span>
	DWORD dwLength <span class="token operator">=</span> <span class="token punctuation">(</span>DWORD<span class="token punctuation">)</span>pCopyDataStruct<span class="token operator">-></span>cbData<span class="token punctuation">;</span>
	TCHAR szRecvText<span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token function">memcpy</span><span class="token punctuation">(</span>szRecvText<span class="token punctuation">,</span> szText<span class="token punctuation">,</span> dwLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">MessageBox</span><span class="token punctuation">(</span>szRecvText<span class="token punctuation">,</span> <span class="token string">"Y"</span><span class="token punctuation">,</span> MB_OK<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> CDialogEx<span class="token operator">::</span><span class="token function">OnCopyData</span><span class="token punctuation">(</span>pWnd<span class="token punctuation">,</span> pCopyDataStruct<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>发送端</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code>CString strWindowsTitle <span class="token operator">=</span> <span class="token string">"服务端"</span><span class="token punctuation">;</span>
CString strMsg <span class="token operator">=</span> <span class="token string">"COPYDATA"</span><span class="token punctuation">;</span>
HWND hWnd <span class="token operator">=</span> <span class="token operator">::</span><span class="token function">FindWindow</span><span class="token punctuation">(</span><span class="token constant">NULL</span><span class="token punctuation">,</span> strWindowsTitle<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>hWnd <span class="token operator">!=</span> <span class="token constant">NULL</span> <span class="token operator">&amp;&amp;</span> <span class="token function">IsWindow</span><span class="token punctuation">(</span>hWnd<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	COPYDATASTRUCT cpd<span class="token punctuation">;</span>
	cpd<span class="token punctuation">.</span>dwData <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	cpd<span class="token punctuation">.</span>cbData <span class="token operator">=</span> strMsg<span class="token punctuation">.</span><span class="token function">GetLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>TCHAR<span class="token punctuation">)</span><span class="token punctuation">;</span>
	cpd<span class="token punctuation">.</span>lpData <span class="token operator">=</span> <span class="token punctuation">(</span>PVOID<span class="token punctuation">)</span>strMsg<span class="token punctuation">.</span><span class="token function">GetBuffer</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token operator">::</span><span class="token function">SendMessage</span><span class="token punctuation">(</span>hWnd<span class="token punctuation">,</span> WM_COPYDATA<span class="token punctuation">,</span> <span class="token punctuation">(</span>WPARAM<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token function">AfxGetApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span>m_pMainWnd<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>LPARAM<span class="token punctuation">)</span><span class="token operator">&amp;</span>cpd<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
strWindowsTitle<span class="token punctuation">.</span><span class="token function">ReleaseBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
strMsg<span class="token punctuation">.</span><span class="token function">ReleaseBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></template>

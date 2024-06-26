<template><div><h1 id="c-信号槽的实现" tabindex="-1"><a class="header-anchor" href="#c-信号槽的实现"><span>C++信号槽的实现</span></a></h1>
<p>近期使用QT的时候，发现QT封装的信号与槽极其好用。决定封装一个自己的信号槽库。</p>
<p>信号与槽主要就是实现了一个信号发送者和接受者，发送者发送数据的时候，接受者的函数会自动回调执行。</p>
<p>网上相关的资料和视频极其稀少，并且实现和讲解比较浅，我决定从0开始构建一个手写信号槽的详细讲解。</p>
<p>先看一下QT的信号槽用法：</p>
<p>定义一个信号发送者，并声明一个信号send发送了msg和code两个不同类型的参数。并且定义了一个testSend()函数发送出了这个send信号。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405232304209.png" alt="image-20240523230452082"></p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405232308810.png" alt="image-20240523230848718"></p>
<p>再定义一个信号接受者</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405232312965.png" alt=""><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405232312528.png" alt=""></p>
<p>将发送者定义为接受者的类成员，并在发送者构造函数中，绑定发送者的send信号和接收者的recv函数。绑定成功后，意味着只要send信号被发送，recv函数就会被自动执行。</p>
<p>我们编写了一个test函数作为测试代码，模拟testSend函数被执行，即send信号被发射。</p>
<p>运行如下代码即可看到recv函数被执行了，就可以发现输出了msg和code</p>
<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre v-pre class="language-c"><code>Receiver <span class="token operator">*</span>receiver <span class="token operator">=</span> new <span class="token function">Receiver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
receiver<span class="token operator">-></span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>自此，我们便实现了recv和send信号的绑定，在没有执行recv代码的情况下，执行send代码，recv代码会自动回调执行。在实际编码过程中，这样的功能非常好用，能极大的降低冗余度。</p>
<p>但是只会用是远远不够的，我们要知道信号槽的底层实现原理，所以尝试手写一个自己的信号槽。</p>
<p>这样的回调机制其实就是一种设计模式，名为订阅者模式，也叫观察者模式。</p>
<p>首先我们第一步，先实现一个发送者和接收者对象。发送者要有一个信号成员，后面我们用来发送信号使用。信号的参数是可变类型的、不固定的，所以我们要将其设为模板传参。传递的参数我们暂定为一个参数，类型为std::string</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405232337761.png" alt="image-20240523233739728"></p>
<p>接下来我们来设计这个Signal信号类，首先信号类要存储一个或多个对应的接受者对象和接受者成员函数以及函数的参数，因为一个信号可以绑定多个触发对象和函数，所以我们想到用std::vector来存储这些内容。</p>
<p>因为信号的接收者对象、接收者成员函数指针，都是在Signal信号声明后才往里面传入的，并且也是类型可变的，所以我们也要将其定义模板，但是要将其模板类型的推导延后（写在绑定接收者函数Bind上面）。</p>
<p>那至于信号该如何触发呢，我们可以重写他的operator()函数，使用Signal()来进行触发。</p>
<p>综合上面3条要点，我们设计出Signal信号类如下：</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405240011903.png" alt="image-20240524001123870"></p>
<p>因为要将接收者对象、接收者成员函数、函数的参数，都纳入vector中存储，所以还需要一个数据类型来保存对象、成员函数、函数的参数，于是便定义了Slot类型。</p>
<p>在Bind函数中，我们传入了接收者对象和带参成员函数，所以Slot数据类型应该和Signal一样定义两个模板参数，分别为接收者对象ReceiverType和参数Param，但是问题就来了，在m_slots中，只能拿到模板参数Param，拿不到被延后推导的ReceiverType，所以我们要继续将Slot类型的ReceiverType进行延后推导。</p>
<p>方法如下：</p>
<p>定义一个Slot的基类SlotBase，只有一个模板参数Param</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405240041926.png" alt="image-20240524004118846"></p>
<p>Exec的作用为：调用接收者对象的成员函数，同时传入参数Param</p>
<p>随后再定义Slot类去继承SlotBase类，就可以实现延后推导ReceiverType了</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405240043153.png" alt="image-20240524004313121"></p>
<p>至此，我们便可以将接收者对象ReceiverType以及接收者带参成员函数 void (ReceiverType:😗)(Param)存入到Slot中了。</p>
<p>最后，编写一段connect函数，实现信号与槽的绑定。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405240045954.png" alt="image-20240524004556926"></p>
<p>测试一下效果：</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405240046515.png" alt="image-20240524004613490"></p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405240046570.png" alt="image-20240524004622542"></p>
<p>发现可以实现了多个接收者与一个发送者进行了函数绑定，当发送者的信号发出时，两个不同的接受者都执行了对应的函数回调。</p>
<p>但是实现到目前为止，功能与QT的仍有差距所在，差在哪呢？差在传参的自由度上，QT可以任意定义信号的参数为不同类型、任意数量，而我们只实现了单一的参数类型Param，在此基础上，我们继续改进。</p>
<p>要实现多类型参数的模板，所以最后将单一参数Param改成可变参数模板Param...</p>
<p>最后得到代码如下：</p>
<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;vector></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;string></span></span>
template <span class="token operator">&lt;</span>class<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> Param<span class="token operator">></span>
class SlotBase
<span class="token punctuation">{</span>
public<span class="token operator">:</span>
	virtual <span class="token keyword">void</span> <span class="token function">Exec</span><span class="token punctuation">(</span>Param<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> param<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
template <span class="token operator">&lt;</span>class ReceiverType<span class="token punctuation">,</span> class<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> Param<span class="token operator">></span>
class Slot <span class="token operator">:</span> public SlotBase<span class="token operator">&lt;</span>Param<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">></span>
<span class="token punctuation">{</span>
public<span class="token operator">:</span>
	<span class="token function">Slot</span><span class="token punctuation">(</span>ReceiverType<span class="token operator">*</span> obj<span class="token punctuation">,</span> <span class="token keyword">void</span> <span class="token punctuation">(</span>ReceiverType<span class="token operator">::</span><span class="token operator">*</span> func<span class="token punctuation">)</span><span class="token punctuation">(</span>Param<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		m_obj <span class="token operator">=</span> obj<span class="token punctuation">;</span>
		m_func <span class="token operator">=</span> func<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">void</span> <span class="token function">Exec</span><span class="token punctuation">(</span>Param<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> param<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token punctuation">(</span>m_obj<span class="token operator">-></span><span class="token operator">*</span>m_func<span class="token punctuation">)</span><span class="token punctuation">(</span>param<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
private<span class="token operator">:</span>
	ReceiverType<span class="token operator">*</span> m_obj<span class="token punctuation">;</span>
	<span class="token keyword">void</span> <span class="token punctuation">(</span>ReceiverType<span class="token operator">::</span><span class="token operator">*</span> m_func<span class="token punctuation">)</span><span class="token punctuation">(</span>Param<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
template<span class="token operator">&lt;</span>class<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> Param<span class="token operator">></span>
class Signal
<span class="token punctuation">{</span>
public<span class="token operator">:</span>
	template<span class="token operator">&lt;</span>class ReceiverType<span class="token operator">></span>
	<span class="token keyword">void</span> <span class="token function">Bind</span><span class="token punctuation">(</span>ReceiverType<span class="token operator">*</span> obj<span class="token punctuation">,</span> <span class="token keyword">void</span> <span class="token punctuation">(</span>ReceiverType<span class="token operator">::</span><span class="token operator">*</span> func<span class="token punctuation">)</span><span class="token punctuation">(</span>Param<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		m_slots<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>new Slot<span class="token operator">&lt;</span>ReceiverType<span class="token punctuation">,</span> Param<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">></span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> func<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">void</span> <span class="token function">operator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Param<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> param<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m_slots<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			m_slots<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-></span><span class="token function">Exec</span><span class="token punctuation">(</span>param<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token operator">~</span><span class="token function">Signal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m_slots<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
			delete m_slots<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
private<span class="token operator">:</span>
	std<span class="token operator">::</span>vector<span class="token operator">&lt;</span>SlotBase<span class="token operator">&lt;</span>Param<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">></span><span class="token operator">*</span><span class="token operator">></span> m_slots<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//模拟发送者对象</span>
class SenderObj
<span class="token punctuation">{</span>
public<span class="token operator">:</span>
	<span class="token comment">//谁发送谁就设置信号量</span>
	Signal<span class="token operator">&lt;</span>std<span class="token operator">::</span>string<span class="token punctuation">,</span><span class="token keyword">int</span><span class="token operator">></span> sayFather<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//模拟接受者对象</span>
class ReceiverObj
<span class="token punctuation">{</span>
public<span class="token operator">:</span>
	<span class="token comment">//模拟回应信号触发函数</span>
	<span class="token keyword">void</span> <span class="token function">call</span><span class="token punctuation">(</span>std<span class="token operator">::</span>string a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"接收到 === %s   %d\n"</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token function">c_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
template<span class="token operator">&lt;</span>typename SenderType<span class="token punctuation">,</span> typename SenderSignal<span class="token punctuation">,</span> typename ReceiverType<span class="token punctuation">,</span> typename ReceiverFuncType<span class="token operator">></span>
<span class="token keyword">void</span> <span class="token function">connect</span><span class="token punctuation">(</span>SenderType<span class="token operator">*</span> senderType<span class="token punctuation">,</span> SenderSignal senderSignal<span class="token punctuation">,</span> ReceiverType receiverType<span class="token punctuation">,</span> ReceiverFuncType receiverFuncType<span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token punctuation">(</span>senderType<span class="token operator">-></span><span class="token operator">*</span>senderSignal<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Bind</span><span class="token punctuation">(</span>receiverType<span class="token punctuation">,</span> receiverFuncType<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">float</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	std<span class="token operator">::</span>is_same_v<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">float</span><span class="token operator">></span><span class="token punctuation">;</span>
	SenderObj<span class="token operator">*</span> obj <span class="token operator">=</span> new SenderObj<span class="token punctuation">;</span>
	ReceiverObj<span class="token operator">*</span> recvObj <span class="token operator">=</span> new ReceiverObj<span class="token punctuation">;</span>
	ReceiverObj<span class="token operator">*</span> recvObj1 <span class="token operator">=</span> new ReceiverObj<span class="token punctuation">;</span>
	<span class="token function">connect</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token operator">&amp;</span>SenderObj<span class="token operator">::</span>sayFather<span class="token punctuation">,</span> recvObj<span class="token punctuation">,</span> <span class="token operator">&amp;</span>ReceiverObj<span class="token operator">::</span>call<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">connect</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token operator">&amp;</span>SenderObj<span class="token operator">::</span>sayFather<span class="token punctuation">,</span> recvObj1<span class="token punctuation">,</span> <span class="token operator">&amp;</span>ReceiverObj<span class="token operator">::</span>call<span class="token punctuation">)</span><span class="token punctuation">;</span>
	obj<span class="token operator">-></span><span class="token function">sayFather</span><span class="token punctuation">(</span><span class="token string">"3213"</span><span class="token punctuation">,</span><span class="token number">321</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



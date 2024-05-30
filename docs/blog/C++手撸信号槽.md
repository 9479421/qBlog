---
title: C++手撸信号槽
date: 2024-05-22
category:
  - History
tag:
  - C++
---

# C++手撸信号槽

近期使用QT的时候，发现QT封装的信号与槽极其好用。决定封装一个自己的信号槽库。

信号与槽主要就是实现了一个信号发送者和接收者，发送者发送数据的时候，接收者的函数会自动回调执行。

网上相关的资料和视频极其稀少，并且实现和讲解比较浅，我决定从0开始构建一个手写信号槽的详细讲解。

先看一下QT的信号槽用法：

定义一个信号发送者，并声明一个信号send发送了msg和code两个不同类型的参数。并且定义了一个testSend()函数发送出了这个send信号。

![image-20240523230452082](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405232304209.png)

![image-20240523230848718](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405232308810.png)

再定义一个信号接收者

![](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405232312965.png)![](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405232312528.png)

将发送者定义为接收者的类成员，并在发送者构造函数中，绑定发送者的send信号和接收者的recv函数。绑定成功后，意味着只要send信号被发送，recv函数就会被自动执行。

我们编写了一个test函数作为测试代码，模拟testSend函数被执行，即send信号被发射。

运行如下代码即可看到recv函数被执行了，就可以发现输出了msg和code

```c
Receiver *receiver = new Receiver();
receiver->test();
```

自此，我们便实现了recv和send信号的绑定，在没有执行recv代码的情况下，执行send代码，recv代码会自动回调执行。在实际编码过程中，这样的功能非常好用，能极大的降低冗余度。

但是只会用是远远不够的，我们要知道信号槽的底层实现原理，所以尝试手写一个自己的信号槽。

这样的回调机制其实就是一种设计模式，名为订阅者模式，也叫观察者模式。

首先我们第一步，先实现一个发送者和接收者对象。发送者要有一个信号成员，后面我们用来发送信号使用。信号的参数是可变类型的、不固定的，所以我们要将其设为模板传参。传递的参数我们暂定为一个参数，类型为std::string

![image-20240523233739728](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405232337761.png)

接下来我们来设计这个Signal信号类，首先信号类要存储一个或多个对应的接收者对象和接收者成员函数以及函数的参数，因为一个信号可以绑定多个触发对象和函数，所以我们想到用std::vector来存储这些内容。

因为信号的接收者对象、接收者成员函数指针，都是在Signal信号声明后才往里面传入的，并且也是类型可变的，所以我们也要将其定义模板，但是要将其模板类型的推导延后（写在绑定接收者函数Bind上面）。

那至于信号该如何触发呢，我们可以重写他的operator()函数，使用Signal()来进行触发。

综合上面3条要点，我们设计出Signal信号类如下：

![image-20240524001123870](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405240011903.png)

因为要将接收者对象、接收者成员函数、函数的参数，都纳入vector中存储，所以还需要一个数据类型来保存对象、成员函数、函数的参数，于是便定义了Slot类型。

在Bind函数中，我们传入了接收者对象和带参成员函数，所以Slot数据类型应该和Signal一样定义两个模板参数，分别为接收者对象ReceiverType和参数Param，但是问题就来了，在m_slots中，只能拿到模板参数Param，拿不到被延后推导的ReceiverType，所以我们要继续将Slot类型的ReceiverType进行延后推导。

方法如下：

定义一个Slot的基类SlotBase，只有一个模板参数Param

![image-20240524004118846](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405240041926.png)

Exec的作用为：调用接收者对象的成员函数，同时传入参数Param

随后再定义Slot类去继承SlotBase类，就可以实现延后推导ReceiverType了

![image-20240524004313121](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405240043153.png)

至此，我们便可以将接收者对象ReceiverType以及接收者带参成员函数 void (ReceiverType::*)(Param)存入到Slot中了。

最后，编写一段connect函数，实现信号与槽的绑定。

![image-20240524004556926](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405240045954.png)

测试一下效果：

![image-20240524004613490](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405240046515.png)

![image-20240524004622542](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202405240046570.png)

发现可以实现了多个接收者与一个发送者进行了函数绑定，当发送者的信号发出时，两个不同的接收者都执行了对应的函数回调。

但是实现到目前为止，功能与QT的仍有差距所在，差在哪呢？差在传参的自由度上，QT可以任意定义信号的参数为不同类型、任意数量，而我们只实现了单一的参数类型Param，在此基础上，我们继续改进。

要实现多类型参数的模板，所以最后将单一参数Param改成可变参数模板Param...

最后得到代码如下：

```c
#include<stdio.h>
#include<vector>
#include<string>
template <class... Param>
class SlotBase
{
public:
	virtual void Exec(Param... param) = 0;
};
template <class ReceiverType, class... Param>
class Slot : public SlotBase<Param...>
{
public:
	Slot(ReceiverType* obj, void (ReceiverType::* func)(Param...)) {
		m_obj = obj;
		m_func = func;
	}
	void Exec(Param... param) {
		(m_obj->*m_func)(param...);
	}
private:
	ReceiverType* m_obj;
	void (ReceiverType::* m_func)(Param...);
};
template<class... Param>
class Signal
{
public:
	template<class ReceiverType>
	void Bind(ReceiverType* obj, void (ReceiverType::* func)(Param...)) {
		m_slots.push_back(new Slot<ReceiverType, Param...>(obj, func));
	}

	void operator()(Param... param)
	{
		for (int i = 0; i < m_slots.size(); i++)
		{
			m_slots[i]->Exec(param...);
		}
	};
	~Signal() {
		for (int i = 0; i < m_slots.size(); i++)
			delete m_slots[i];
	}
private:
	std::vector<SlotBase<Param...>*> m_slots;
};
//模拟发送者对象
class SenderObj
{
public:
	//谁发送谁就设置信号量
	Signal<std::string,int> sayFather;
};
//模拟接受者对象
class ReceiverObj
{
public:
	//模拟回应信号触发函数
	void call(std::string a,int b) {
		printf("接收到 === %s   %d\n", a.c_str(),b);
	}
};
template<typename SenderType, typename SenderSignal, typename ReceiverType, typename ReceiverFuncType>
void connect(SenderType* senderType, SenderSignal senderSignal, ReceiverType receiverType, ReceiverFuncType receiverFuncType) {
	(senderType->*senderSignal).Bind(receiverType, receiverFuncType);
}
int main() {
	SenderObj* obj = new SenderObj;
	ReceiverObj* recvObj = new ReceiverObj;
	ReceiverObj* recvObj1 = new ReceiverObj;
	connect(obj, &SenderObj::sayFather, recvObj, &ReceiverObj::call);
	connect(obj, &SenderObj::sayFather, recvObj1, &ReceiverObj::call);
	obj->sayFather("3213",321);
	return -1;
}
```








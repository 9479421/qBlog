<template><div><h1 id="nio学习笔记" tabindex="-1"><a class="header-anchor" href="#nio学习笔记"><span>NIO学习笔记</span></a></h1>
<h2 id="nio概述" tabindex="-1"><a class="header-anchor" href="#nio概述"><span>NIO概述</span></a></h2>
<h3 id="程序读取数据模型" tabindex="-1"><a class="header-anchor" href="#程序读取数据模型"><span>程序读取数据模型</span></a></h3>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220407225325352.png" alt="image-20220407225325352"></p>
<p>程序执行效率是由I/O效率决定的</p>
<p>在操作系统上是可以从硬件上直接大块大块的读取数据，而JVM的I/O更喜欢小块小块的读取数据，这是JVM在I/O方面的效率不足。相当于操作系统使用大卡车来运输数据，而JVM的I/O就喜欢一铲子一铲子运输。</p>
<p>在JDK4中引入了NIO，可以最大限度的满足Java程序I/O的需求</p>
<p>java.nio 包，定义了各种与Buffer相关的类</p>
<p>java.nio.channel，包含与Channel和Selector 相关的类</p>
<p>java.nio.charset包，与字符集相关的集</p>
<p>在NIO中有三大核心组件 Channel、Buffer、Selector</p>
<h3 id="channel" tabindex="-1"><a class="header-anchor" href="#channel"><span>Channel</span></a></h3>
<p>传统的IO面向流的，每次都可以从流中读取一个或多个字节，只能向后读取，不能向前移</p>
<p>NIO是面向缓存区的，把数据读到一个缓存区中，可以在缓存区中向前/后移动，增加了程序的灵活性。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220407234133529.png" alt="image-20220407234133529"></p>
<p>IO流是线程阻塞的，在调用 read()/write()读写数据时，线程阻塞，直到数据读取完毕或者数据完全写入，在读写过程中，线程不能做其他的任务。</p>
<p>NIO是 不是线程阻塞的，当线程从Channel中读取数据中时，如果通道中没有可用的数据，线程不阻塞，可以做其他的任务。</p>
<h2 id="buffer" tabindex="-1"><a class="header-anchor" href="#buffer"><span>Buffer</span></a></h2>
<h3 id="buffer的属性" tabindex="-1"><a class="header-anchor" href="#buffer的属性"><span>Buffer的属性</span></a></h3>
<p>Buffer缓冲区实际上就是一个数组，把数组的内容和信息包装成一个Buffer对象，它提供了一组访问这些信息的方法。</p>
<p>缓冲区的重要属性：</p>
<p>capacity容量，指缓冲区可以存储多少个数据，容量在创建Buffer缓冲区时指定大小，创建后不能再修改，如果缓冲区满了，需要清空才能继续写数据。</p>
<p>position表示当前位置，即缓冲区写入/读取的位置，刚刚创建Buffer对象后，position初始化为0，写入一个数据，position就向后移动一个单元，它的最大值是capacity-1，当Buffer从写模式切换到读模式的时候，position值重置为0，从Buffer开始位置读取数据，每读一个数据，position就向后移动一个单元</p>
<p>limit上限，是指第一个不能被读出或写入的位置，limit上限后面的单元既不能读也不能写。在Buffer缓冲区的写模式下，limit表示能够写入多少数据，在读取模式下，limit表示最多可以读取多少个数据</p>
<p>mark标记，设计一个标记位置，可以调用mark()方法，将标记设置在position位置，当调用read()方法时，就把position设置为mark标记的位置。</p>
<p>0&lt;=mark&lt;=position&lt;=limit&lt;=capacity</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220409013348510.png" alt="image-20220409013348510"></p>
<h3 id="buffer的常用api" tabindex="-1"><a class="header-anchor" href="#buffer的常用api"><span>Buffer的常用API</span></a></h3>
<p>​	在NIO中关键的Buffer有：ByteBuffer，CharBuffer，DoubleBuffer，FloatBuffer，IntBuffer，LongBuffer，ShortBuffer。这些Buffer覆盖了能够通过I/O发送的所有基本类型：byte,char,double,float,int,long,short等。实际上使用较多的是ByteBuffer，CharBuffer。</p>
<p>​	每个缓冲区内都有一个静态方法 allocate(capacity)可以创建一个指定容量的缓冲区；</p>
<p>​	都有一个put()方法用于向缓冲区中存储数据，get()方法用于从缓冲区中读取数据；</p>
<p>​	当缓冲区中还有未读完的数据，可以调用compact()方法进行压缩，将所有未读取的数据复制到Buffer的起始位置，把position设置到最后一个未读元素的后免，limit属性设置为capacity。</p>
<p>​	capacity()方法返回缓冲区的大小</p>
<p>​	hasRemaining()，判断当前position后面是否还有可处理的数据，即判断position和limit之间是否还有数据可处理。</p>
<p>​	limit();返回limit上限的位置</p>
<p>​	mark(),设置缓冲区的标志位置为，这个值只能在0~position之间。以后可以通过reset方法返回到这个位置</p>
<p>​	position()可以返回position当前位置</p>
<p>​	remaining()返回当前position位置与limit之间的数据量</p>
<p>​	reset()方法可以将position设置为mark标志位</p>
<p>​	rewind()，将position设置为0，取消mark标志位</p>
<p>​	clear()清空缓冲区，仅仅是修改position标志为0，设置limit为capacity，缓冲区中的数据还是存在的。</p>
<p>​	flip()方法可以把缓冲区由写模式切换到读模式，先把limit设置为position，再把position设置为0。</p>
<h3 id="直接字节缓冲区" tabindex="-1"><a class="header-anchor" href="#直接字节缓冲区"><span>直接字节缓冲区</span></a></h3>
<p>​	在硬盘和操作系统中处理的数据都是01二进制，缓冲区中只有ByteBuffer字节缓冲区有资格参与I/O操作。</p>
<p>​	Channel通道只能使用ByteBuffer作为它的参数</p>
<p>​</p>
<p>​	直接字节缓冲区通常是I/O操作最好的选择，如果使用非直接字节缓冲区可能会导致性能损耗：如果向通道传递一个非直接字节缓冲区，通道可能会先创建一个临时的直接字节缓冲区，将非直接缓冲区的内容复制到这个临时的直接字节缓冲区，使用临时直接字节缓冲区执行底层的I/O操作</p>
<p>​	直接缓冲区是I/O的最佳选择，可能创建直接缓冲区比创建非直接缓冲区的成本要高，直接缓冲区使用的内存是通过调用本地操作系统的代码分配的，绕过了JVM的堆栈，现在JVM可能会执行缓冲区缓存的优化… 作为入门初级开发人员，不要考虑优化问题，先保证程序的正确性。</p>
<p>​	ByteBuffer.allocate()方法创建直接字节缓冲区</p>
<h2 id="channel-1" tabindex="-1"><a class="header-anchor" href="#channel-1"><span>Channel</span></a></h2>
<h3 id="channels概述" tabindex="-1"><a class="header-anchor" href="#channels概述"><span>Channels概述</span></a></h3>
<p>​	Channel是一种新的I/O的访问方式。用于在字节缓冲区与通道另一侧的实体（可以是文件，也可以是Socket）之间进行传输数据</p>
<p>​	Channel可以双向读写数据，也可以实现异步读写</p>
<p>​	程序不能直接访问Channel，Channel只能与Buffer缓冲区进行交互，即把通道中的数据读到Buffer缓冲区中，程序从缓冲区中读取数据；在写操作时，程序把数据写入Buffer缓冲区中，再把缓冲区的数据写入到Channel中</p>
<p>​	常用的Channel有</p>
<p>​		FileChannel 读写文件的通道</p>
<p>​		SocketChannel/ServerSocketChannel 读写Socket套接字中的数据</p>
<p>​		DatagramChannel 通过UDP读写网络数据</p>
<h3 id="scatter-gather" tabindex="-1"><a class="header-anchor" href="#scatter-gather"><span>Scatter/Gather</span></a></h3>
<p>​	Scatter(发散)、Gather(聚焦)是通道提供的一个重要功能(有时也称为矢量I/O)。</p>
<p>​	Scatter、Gather 是指在多个缓冲区中实现一个简单的I/O操作</p>
<p>​	Scatter是从Channel之中读取数据，按顺序分散写入到多个Buffer缓冲区当中</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220412004425212.png" alt="image-20220412004425212"></p>
<p>​	从Channel中读取数据，先把数组存储到buffer1缓冲区中，</p>
<p>​	buffer1缓冲区满(即从position写到limit后)，再把通道中的数据写入到buffer2，</p>
<p>​	当buffer2也写满后，最后把数据写入到buffer3</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220412004022527.png" alt=""></p>
<p>Gather先把buffer1中的数据写入到Channel中</p>
<p>再把buffer2缓冲区的数据写入到Channel中</p>
<p>最后把buffer3中的数据写入到Channel中</p>
<p><strong>Scatter、Gather</strong>经常用于需要将传输的数据分开处理的场景</p>
<p>如Scatter从一个Channel中读取数据存储到多个Buffer</p>
<p>​	ByteBuffer buf1 = ByteBuffer.allocate(48);</p>
<p>​	ByteBuffer buf2 = ByteBuffer.allocate(1024);</p>
<p>​	ByteBuffer[] bufArray = {buf1,buf2};</p>
<p>​	Channel.read(bufArray);</p>
<p>​	read()方法从Channel中读取数据，按照在数组中的顺序依次存储到缓冲区中。注意必须在buf1缓冲区满后才能写入buf2缓冲区中</p>
<p>​</p>
<h3 id="filechannel" tabindex="-1"><a class="header-anchor" href="#filechannel"><span>FileChannel</span></a></h3>
<p>FileChannel 通过 RandomAccessFile，FileInputStream，FileOutputStream 对象调用getChannel()方法获取</p>
<p>FileChannel虽然是双向的，既可以读，也可以写，但是从FileInputStream流中获得的通道只能写不能读，如果访问的文件是只读的也不能执行写操作</p>
<p>FileChannel是线程安全的，但是并不是所有的操作都是多线程的。如影响通道位置或影响文件大小的操作都是单线程的。</p>
<p>1 内存映射文件</p>
<p>​		FileChannel的map()方法可以把磁盘上的文件整个的映射到计算机的虚拟内存，把虚拟内存包装成一个MappedByteBuffer对象，需要提醒同学注意，当把一个文件映射到虚拟内存中，文件的内容通常不会从硬盘读取到内存。</p>
<p>2 FileChannel的双向传输</p>
<p>​	通过RandomAccessFile获得的通道是双向传输的</p>
<p>3 设置缓冲区为固定大小</p>
<p>4 Channel到Channel的传输</p>
<p>​	经常需要把文件从一个位置批量传输到另一个位置，可以直接使用通道到通道之间的传输，不需要中间缓冲区传递数据</p>
<p>5 Gather</p>
<p>​	把文件的属性和文件内容分别存储到不同的缓冲区中，再写入到另外一个文件中</p>
<h3 id="socketchannel与serversocketchannel" tabindex="-1"><a class="header-anchor" href="#socketchannel与serversocketchannel"><span>SocketChannel与ServerSocketChannel</span></a></h3>
<p>ServerSocketChannel可以监听新进来的TCP连接通道</p>
<p>SocketChannel是一个连接到TCP网络套接字的通道</p>
<h3 id="datagramchannel" tabindex="-1"><a class="header-anchor" href="#datagramchannel"><span>DataGramChannel</span></a></h3>
<p>DatagramChannel是对UDP无连接用户数据报协议的通道</p>
<h3 id="pipe" tabindex="-1"><a class="header-anchor" href="#pipe"><span>Pipe</span></a></h3>
<p>Pipe管道用于在两个线程之间进行单向的数据连接</p>
<p>Pipe有一个Source通道和一个Sink通道</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220412234958478.png" alt="image-20220412234958478"></p>
<p>创建管道</p>
<p>​	Pipe pipe = Pipe.open();</p>
<p>向管道中写数据，首先需要访问Sink通道</p>
<p>​	Pipe.SinkChannel  sc = pipe.sink();</p>
<p>​	sc.write(buffer);</p>
<p>该数据需要通过Source通道</p>
<p>​	Pipe.SourceChannel source = pipe.source();</p>
<p>​	Source.read(buffer);</p>
<h2 id="selector选择器" tabindex="-1"><a class="header-anchor" href="#selector选择器"><span>Selector选择器</span></a></h2>
<h3 id="选择器基础" tabindex="-1"><a class="header-anchor" href="#选择器基础"><span>选择器基础</span></a></h3>
<p>选择器选择一种选择执行已经就绪的任务的能力</p>
<p>Selector选择器允许单线程处理多个通道</p>
<p>如果程序打开了多个连接通道，每个连接的流量都比较低，可以使用Selector对通道进行管理</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220413003021813.png" alt="image-20220413003021813"></p>
<p>要使用Selector选择器，需要向Selector注册Channel，注册时一个表示通道与选择器关系的键就会返回，这个选择键记录你关心的通道及关心该通道的操作，选择键会追踪通道是否就绪</p>
<p>然后调用选择器的select()方法，相关的键就会更新，检查所有被注册到选择器的通道，可以选择出从上次调用select()后到现在已经就绪的通道</p>
<p>选择器提供了一种访问通道是否已经准备好执行I/O操作的能力，如了解ServerSocketChannel是否有新的连接，SocketChannel是否还有更多的字节需要读取</p>
<h4 id="三个相关的类" tabindex="-1"><a class="header-anchor" href="#三个相关的类"><span>三个相关的类</span></a></h4>
<p>Selector选择器类管理若被注册的通道的集合的信息和它们的就绪状态.</p>
<p>SelectableChannel可选择通道类，它是抽象类。是所有支持就绪检查的通道类的父类，注意FileChannel还是SelectedChannel的子类，即FileChannel不是可选择的。</p>
<p>注册到多个选择器上，但是同一个选择器只能注册一次</p>
<p>SelectionKey选择键类，封装了特定的通道与选择器之间的一种注册关系，选择键包含两个比特集，一个指示该注册关系所关心的通道操作，一个表示通道已经准备好的操作</p>
<h4 id="如何建立选择器" tabindex="-1"><a class="header-anchor" href="#如何建立选择器"><span>如何建立选择器</span></a></h4>
<p>1.创建Selector</p>
<p>​	Selector selector = Selector.open();</p>
<p>2.必须将通道设置为非阻塞模式才能注册到选择串上</p>
<p>​	selectableChannel.configureBlocking(false);</p>
<p>3.把通道注册到选择器上，会返回一个选择键</p>
<p>​	SelectionKey key1 = selectableChannel.register(selector,SelectionKey.OP_READ);</p>
<p>​	Register()方法第一个参数表示通道注册的选择器</p>
<p>​		第二个参数表示关心通道的哪个操作</p>
<p>​	SelectionKey key2 = selectableChannel2.register(selector,SelectorKey.OP_READ |</p>
<p>SelectionKey.OP_WRITE);    //使用位运算符把你关心的操作连接起来</p>
<p>​	SelectionKey的操作有：</p>
<p>​		SelectionKey.OP_CONNECT，指某个通道连接到服务器</p>
<p>​		SelectionKey.OP_ACCEPT，只有ServerSocketChannel有这个事件，查看是否有新的连接</p>
<p>​	连接</p>
<p>​		SelectionKey.OP_READ，是否有可读的通道就绪</p>
<p>​		SelectionKey.OP_WRITE，写数据的通道是否就绪</p>
<p>​	注册完成后，可以调用select()方法轮询是否有就绪的通道</p>
<p>​	int readcount = selector.select();</p>
<p>​	select()方法 返回就绪通道的数量</p>
<h3 id="选择键相关的方法" tabindex="-1"><a class="header-anchor" href="#选择键相关的方法"><span>选择键相关的方法</span></a></h3>
<p>​	向Selector注册一个Channel通道时，就会返回一个SelectionKey选择键对象，这个选择键表示一个通道与一个选择器之间的注册关系</p>
<p>​	SelectionKey相关的方法：</p>
<p>​	channel()方法，返回与该键对应的通道</p>
<p>​	selector()方法，返回通道注册的选择器</p>
<p>​	cancel()方法，终结这种特定的注册关系</p>
<p>​	isValid()方法判断注册关系是否有效</p>
<p>​	interestOps()方法返回你关心的操作，是以整数的形式进行编码的比特掩码，可以使用位运算检查关心的操作，如：</p>
<p>​		Boolean isAccept = interestOps &amp; SelectionKey.OP_ACCEPT == SelectionKey.OP_ACCEPT</p>
<p>​		Boolean isConnect = interestOps &amp; SelectionKey.OP_CONNECT == SelectionKey.OP_CONNECT</p>
<p>​		readyOps()方法返回通道已经就绪的操作，返回值也是一个整数。也可以使用上面相同的位操作检测通道中有哪个事件或操作已就绪，如：</p>
<p>​		selectionKey.readOps() &amp; SelectionKey.OP_WRITE != 0 说明write操作已就绪</p>
<p>​		除了按位与操作外，还可以使用isReadable()，isWritable()，isConnectable()，isAcceptable()等方法检测 这些比特值，上面一行检测write就绪的操作可以使用一下一行代替</p>
<p>​		if(selectionKey.isWritable()){}</p>
<h3 id="使用选择器" tabindex="-1"><a class="header-anchor" href="#使用选择器"><span>使用选择器</span></a></h3>
<p>​	Selector选择器维护着注册过的通道集合，并且这些注册关系都封装在SelectionKey对象中</p>
<p>​	每个Selector对象都需要维护以下三个集合：</p>
<p>​	已注册的键的集合，keys()方法返回这个已注册的键的集合，这个集合不能修技</p>
<p>​	已选择的键的集合，selectedKeys()方法返回，该集合中的每个成员都是相关的通道被选择器判断已经准备好的，并且包含于键的insterest集合中的操作，键可以从集合中移除，不能添加</p>
<p>​	已取消的键的集合，这个集合包含了调用过cancel()方法的键</p>
<p>​	开始刚刚初始化Selector对象，这个三集合都是空的</p>
<p>​	Selector 类的核心就是select()选择，该方法调用时，执行以下步骤：</p>
<p>​	1.检查已取消键的集合，如果该集合非空，就把该集合中的键从另外的两个集合中移除，注销相关的通道，这个步骤结束后，已取消的键的集合应该是空的</p>
<p>​	2.检查已注册键的集合中所有键的interest集合，确定每个通道所关心的操作是否已经就绪</p>
<p>​	3.Select()方法返回的是从上一次调用select()方法后进入，就绪状态的通道的数量</p>
<p>通常使用以下方法来管理这些键：</p>
<p>​	1.在选择器上调用select()方法</p>
<p>​	2. 遍历selectedKeys()方法返回键的集合</p>
<p>​		检查每个键，查看相关通道的就绪信息，并进行处理</p>
<p>​		将键从已选择集合中移除</p>
<p>​		继续检查下个键</p>
<p>​	一个服务器端的代码模板</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token class-name">ServerSocketChannel</span> ssc <span class="token operator">=</span> <span class="token class-name">ServerSocketChannel</span><span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ssc<span class="token punctuation">.</span><span class="token function">socket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InetSocketAddress</span><span class="token punctuation">(</span><span class="token string">"localhost"</span><span class="token punctuation">,</span><span class="token number">1234</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
ssc<span class="token punctuation">.</span><span class="token function">configureBlocking</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Selector</span> selector <span class="token operator">=</span> <span class="token class-name">Selector</span><span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ssc<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>selector<span class="token punctuation">,</span><span class="token class-name">SelectionKey</span><span class="token punctuation">.</span><span class="token constant">OP_ACCEPT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> readNum <span class="token operator">=</span> select<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>readNum <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">continue</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SelectionKey</span><span class="token punctuation">></span></span> selectionKeys <span class="token operator">=</span> selector<span class="token punctuation">.</span><span class="token function">selectedKeys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SelectionKey</span><span class="token punctuation">></span></span>it <span class="token operator">=</span> selectionKeys<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">SelectionKey</span> key <span class="token operator">=</span> it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">isAcceptable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//接收连接</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">isReadable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//读数据</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">isWritable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//写数据</span>
        <span class="token punctuation">}</span>
        it<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



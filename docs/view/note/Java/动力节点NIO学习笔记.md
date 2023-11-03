# NIO学习笔记

## NIO概述

### 程序读取数据模型

![image-20220407225325352](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220407225325352.png)

程序执行效率是由I/O效率决定的

在操作系统上是可以从硬件上直接大块大块的读取数据，而JVM的I/O更喜欢小块小块的读取数据，这是JVM在I/O方面的效率不足。相当于操作系统使用大卡车来运输数据，而JVM的I/O就喜欢一铲子一铲子运输。



在JDK4中引入了NIO，可以最大限度的满足Java程序I/O的需求

java.nio 包，定义了各种与Buffer相关的类

java.nio.channel，包含与Channel和Selector 相关的类

java.nio.charset包，与字符集相关的集



在NIO中有三大核心组件 Channel、Buffer、Selector



### Channel

传统的IO面向流的，每次都可以从流中读取一个或多个字节，只能向后读取，不能向前移

NIO是面向缓存区的，把数据读到一个缓存区中，可以在缓存区中向前/后移动，增加了程序的灵活性。

![image-20220407234133529](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220407234133529.png)

IO流是线程阻塞的，在调用 read()/write()读写数据时，线程阻塞，直到数据读取完毕或者数据完全写入，在读写过程中，线程不能做其他的任务。

NIO是 不是线程阻塞的，当线程从Channel中读取数据中时，如果通道中没有可用的数据，线程不阻塞，可以做其他的任务。

## Buffer

### Buffer的属性

Buffer缓冲区实际上就是一个数组，把数组的内容和信息包装成一个Buffer对象，它提供了一组访问这些信息的方法。

缓冲区的重要属性：

capacity容量，指缓冲区可以存储多少个数据，容量在创建Buffer缓冲区时指定大小，创建后不能再修改，如果缓冲区满了，需要清空才能继续写数据。

position表示当前位置，即缓冲区写入/读取的位置，刚刚创建Buffer对象后，position初始化为0，写入一个数据，position就向后移动一个单元，它的最大值是capacity-1，当Buffer从写模式切换到读模式的时候，position值重置为0，从Buffer开始位置读取数据，每读一个数据，position就向后移动一个单元

limit上限，是指第一个不能被读出或写入的位置，limit上限后面的单元既不能读也不能写。在Buffer缓冲区的写模式下，limit表示能够写入多少数据，在读取模式下，limit表示最多可以读取多少个数据

mark标记，设计一个标记位置，可以调用mark()方法，将标记设置在position位置，当调用read()方法时，就把position设置为mark标记的位置。

0<=mark<=position<=limit<=capacity

![image-20220409013348510](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220409013348510.png)

### Buffer的常用API

​	在NIO中关键的Buffer有：ByteBuffer，CharBuffer，DoubleBuffer，FloatBuffer，IntBuffer，LongBuffer，ShortBuffer。这些Buffer覆盖了能够通过I/O发送的所有基本类型：byte,char,double,float,int,long,short等。实际上使用较多的是ByteBuffer，CharBuffer。

​	每个缓冲区内都有一个静态方法 allocate(capacity)可以创建一个指定容量的缓冲区；

​	都有一个put()方法用于向缓冲区中存储数据，get()方法用于从缓冲区中读取数据；

​	当缓冲区中还有未读完的数据，可以调用compact()方法进行压缩，将所有未读取的数据复制到Buffer的起始位置，把position设置到最后一个未读元素的后免，limit属性设置为capacity。

​	capacity()方法返回缓冲区的大小

​	hasRemaining()，判断当前position后面是否还有可处理的数据，即判断position和limit之间是否还有数据可处理。

​	limit();返回limit上限的位置

​	mark(),设置缓冲区的标志位置为，这个值只能在0~position之间。以后可以通过reset方法返回到这个位置

​	position()可以返回position当前位置

​	remaining()返回当前position位置与limit之间的数据量

​	reset()方法可以将position设置为mark标志位

​	rewind()，将position设置为0，取消mark标志位

​	clear()清空缓冲区，仅仅是修改position标志为0，设置limit为capacity，缓冲区中的数据还是存在的。

​	flip()方法可以把缓冲区由写模式切换到读模式，先把limit设置为position，再把position设置为0。



### 直接字节缓冲区

​	在硬盘和操作系统中处理的数据都是01二进制，缓冲区中只有ByteBuffer字节缓冲区有资格参与I/O操作。

​	Channel通道只能使用ByteBuffer作为它的参数

​	

​	直接字节缓冲区通常是I/O操作最好的选择，如果使用非直接字节缓冲区可能会导致性能损耗：如果向通道传递一个非直接字节缓冲区，通道可能会先创建一个临时的直接字节缓冲区，将非直接缓冲区的内容复制到这个临时的直接字节缓冲区，使用临时直接字节缓冲区执行底层的I/O操作

​	直接缓冲区是I/O的最佳选择，可能创建直接缓冲区比创建非直接缓冲区的成本要高，直接缓冲区使用的内存是通过调用本地操作系统的代码分配的，绕过了JVM的堆栈，现在JVM可能会执行缓冲区缓存的优化… 作为入门初级开发人员，不要考虑优化问题，先保证程序的正确性。

​	ByteBuffer.allocate()方法创建直接字节缓冲区



## Channel

### Channels概述

​	Channel是一种新的I/O的访问方式。用于在字节缓冲区与通道另一侧的实体（可以是文件，也可以是Socket）之间进行传输数据

​	Channel可以双向读写数据，也可以实现异步读写

​	程序不能直接访问Channel，Channel只能与Buffer缓冲区进行交互，即把通道中的数据读到Buffer缓冲区中，程序从缓冲区中读取数据；在写操作时，程序把数据写入Buffer缓冲区中，再把缓冲区的数据写入到Channel中

​	常用的Channel有

​		FileChannel 读写文件的通道

​		SocketChannel/ServerSocketChannel 读写Socket套接字中的数据

​		DatagramChannel 通过UDP读写网络数据



### Scatter/Gather

​	Scatter(发散)、Gather(聚焦)是通道提供的一个重要功能(有时也称为矢量I/O)。

​	Scatter、Gather 是指在多个缓冲区中实现一个简单的I/O操作

​	Scatter是从Channel之中读取数据，按顺序分散写入到多个Buffer缓冲区当中

![image-20220412004425212](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220412004425212.png)

​	从Channel中读取数据，先把数组存储到buffer1缓冲区中，

​	buffer1缓冲区满(即从position写到limit后)，再把通道中的数据写入到buffer2，

​	当buffer2也写满后，最后把数据写入到buffer3

![](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220412004022527.png)

Gather先把buffer1中的数据写入到Channel中

再把buffer2缓冲区的数据写入到Channel中

最后把buffer3中的数据写入到Channel中



**Scatter、Gather**经常用于需要将传输的数据分开处理的场景

如Scatter从一个Channel中读取数据存储到多个Buffer

​	ByteBuffer buf1 = ByteBuffer.allocate(48);

​	ByteBuffer buf2 = ByteBuffer.allocate(1024);

​	ByteBuffer[] bufArray = {buf1,buf2};

​	Channel.read(bufArray);

​	read()方法从Channel中读取数据，按照在数组中的顺序依次存储到缓冲区中。注意必须在buf1缓冲区满后才能写入buf2缓冲区中

​	

### FileChannel

FileChannel 通过 RandomAccessFile，FileInputStream，FileOutputStream 对象调用getChannel()方法获取

FileChannel虽然是双向的，既可以读，也可以写，但是从FileInputStream流中获得的通道只能写不能读，如果访问的文件是只读的也不能执行写操作

FileChannel是线程安全的，但是并不是所有的操作都是多线程的。如影响通道位置或影响文件大小的操作都是单线程的。

1 内存映射文件

​		FileChannel的map()方法可以把磁盘上的文件整个的映射到计算机的虚拟内存，把虚拟内存包装成一个MappedByteBuffer对象，需要提醒同学注意，当把一个文件映射到虚拟内存中，文件的内容通常不会从硬盘读取到内存。

2 FileChannel的双向传输

​	通过RandomAccessFile获得的通道是双向传输的

3 设置缓冲区为固定大小

4 Channel到Channel的传输

​	经常需要把文件从一个位置批量传输到另一个位置，可以直接使用通道到通道之间的传输，不需要中间缓冲区传递数据

5 Gather

​	把文件的属性和文件内容分别存储到不同的缓冲区中，再写入到另外一个文件中



### SocketChannel与ServerSocketChannel

ServerSocketChannel可以监听新进来的TCP连接通道

SocketChannel是一个连接到TCP网络套接字的通道



### DataGramChannel

DatagramChannel是对UDP无连接用户数据报协议的通道



### Pipe

Pipe管道用于在两个线程之间进行单向的数据连接

Pipe有一个Source通道和一个Sink通道

![image-20220412234958478](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220412234958478.png)

创建管道

​	Pipe pipe = Pipe.open();

向管道中写数据，首先需要访问Sink通道

​	Pipe.SinkChannel  sc = pipe.sink();

​	sc.write(buffer);

该数据需要通过Source通道

​	Pipe.SourceChannel source = pipe.source();

​	Source.read(buffer);

## Selector选择器

### 选择器基础

选择器选择一种选择执行已经就绪的任务的能力

Selector选择器允许单线程处理多个通道

如果程序打开了多个连接通道，每个连接的流量都比较低，可以使用Selector对通道进行管理

![image-20220413003021813](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220413003021813.png)

要使用Selector选择器，需要向Selector注册Channel，注册时一个表示通道与选择器关系的键就会返回，这个选择键记录你关心的通道及关心该通道的操作，选择键会追踪通道是否就绪

然后调用选择器的select()方法，相关的键就会更新，检查所有被注册到选择器的通道，可以选择出从上次调用select()后到现在已经就绪的通道

选择器提供了一种访问通道是否已经准备好执行I/O操作的能力，如了解ServerSocketChannel是否有新的连接，SocketChannel是否还有更多的字节需要读取

#### 三个相关的类

Selector选择器类管理若被注册的通道的集合的信息和它们的就绪状态.

SelectableChannel可选择通道类，它是抽象类。是所有支持就绪检查的通道类的父类，注意FileChannel还是SelectedChannel的子类，即FileChannel不是可选择的。

注册到多个选择器上，但是同一个选择器只能注册一次

SelectionKey选择键类，封装了特定的通道与选择器之间的一种注册关系，选择键包含两个比特集，一个指示该注册关系所关心的通道操作，一个表示通道已经准备好的操作

#### 如何建立选择器

1.创建Selector

​	Selector selector = Selector.open();

2.必须将通道设置为非阻塞模式才能注册到选择串上

​	selectableChannel.configureBlocking(false);

3.把通道注册到选择器上，会返回一个选择键

​	SelectionKey key1 = selectableChannel.register(selector,SelectionKey.OP_READ);

​	Register()方法第一个参数表示通道注册的选择器

​		第二个参数表示关心通道的哪个操作

​	SelectionKey key2 = selectableChannel2.register(selector,SelectorKey.OP_READ | 

SelectionKey.OP_WRITE);    //使用位运算符把你关心的操作连接起来

​	SelectionKey的操作有：

​		SelectionKey.OP_CONNECT，指某个通道连接到服务器

​		SelectionKey.OP_ACCEPT，只有ServerSocketChannel有这个事件，查看是否有新的连接

​	连接		

​		SelectionKey.OP_READ，是否有可读的通道就绪

​		SelectionKey.OP_WRITE，写数据的通道是否就绪

​	注册完成后，可以调用select()方法轮询是否有就绪的通道

​	int readcount = selector.select();

​	select()方法 返回就绪通道的数量

### 选择键相关的方法

​	向Selector注册一个Channel通道时，就会返回一个SelectionKey选择键对象，这个选择键表示一个通道与一个选择器之间的注册关系

​	SelectionKey相关的方法：

​	channel()方法，返回与该键对应的通道

​	selector()方法，返回通道注册的选择器

​	cancel()方法，终结这种特定的注册关系

​	isValid()方法判断注册关系是否有效

​	interestOps()方法返回你关心的操作，是以整数的形式进行编码的比特掩码，可以使用位运算检查关心的操作，如：

​		Boolean isAccept = interestOps & SelectionKey.OP_ACCEPT == SelectionKey.OP_ACCEPT

​		Boolean isConnect = interestOps & SelectionKey.OP_CONNECT == SelectionKey.OP_CONNECT

​		readyOps()方法返回通道已经就绪的操作，返回值也是一个整数。也可以使用上面相同的位操作检测通道中有哪个事件或操作已就绪，如：

​		selectionKey.readOps() & SelectionKey.OP_WRITE != 0 说明write操作已就绪

​		除了按位与操作外，还可以使用isReadable()，isWritable()，isConnectable()，isAcceptable()等方法检测 这些比特值，上面一行检测write就绪的操作可以使用一下一行代替

​		if(selectionKey.isWritable()){}



### 使用选择器

​	Selector选择器维护着注册过的通道集合，并且这些注册关系都封装在SelectionKey对象中

​	每个Selector对象都需要维护以下三个集合：

​	已注册的键的集合，keys()方法返回这个已注册的键的集合，这个集合不能修技

​	已选择的键的集合，selectedKeys()方法返回，该集合中的每个成员都是相关的通道被选择器判断已经准备好的，并且包含于键的insterest集合中的操作，键可以从集合中移除，不能添加

​	已取消的键的集合，这个集合包含了调用过cancel()方法的键

​	开始刚刚初始化Selector对象，这个三集合都是空的

​	Selector 类的核心就是select()选择，该方法调用时，执行以下步骤：

​	1.检查已取消键的集合，如果该集合非空，就把该集合中的键从另外的两个集合中移除，注销相关的通道，这个步骤结束后，已取消的键的集合应该是空的

​	2.检查已注册键的集合中所有键的interest集合，确定每个通道所关心的操作是否已经就绪

​	3.Select()方法返回的是从上一次调用select()方法后进入，就绪状态的通道的数量



通常使用以下方法来管理这些键：

​	1.在选择器上调用select()方法

​	2. 遍历selectedKeys()方法返回键的集合

​		检查每个键，查看相关通道的就绪信息，并进行处理

​		将键从已选择集合中移除

​		继续检查下个键



​	一个服务器端的代码模板

```java
ServerSocketChannel ssc = ServerSocketChannel.open();
ssc.socket().bind(new InetSocketAddress("localhost",1234))
ssc.configureBlocking(false);
Selector selector = Selector.open();
ssc.register(selector,SelectionKey.OP_ACCEPT);
while(true){
	int readNum = select.select();
	if(readNum == 0){
		continue;
	}
	Set<SelectionKey> selectionKeys = selector.selectedKeys();
	Iterator<SelectionKey>it = selectionKeys.iterator();
    while(it.hasNext()){
        SelectionKey key = it.next();
        if(key.isAcceptable()){
            //接收连接
        }else if(key.isReadable()){
            //读数据
        }else if(key.isWritable()){
            //写数据
        }
        it.remove();
    }
}
```








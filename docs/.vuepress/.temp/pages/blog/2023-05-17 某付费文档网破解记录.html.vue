<template><div><h1 id="某付费文档网破解记录" tabindex="-1"><a class="header-anchor" href="#某付费文档网破解记录"><span>某付费文档网破解记录</span></a></h1>
<p>今日闲来无事准备搜一下金陵科技学院的宿舍环境，结果点开了这个名叫高考升学网的破网站，复制下文字居然还要收费4.99元。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230517182101672.png" alt="image-20230517182101672"></p>
<p>我真你妈纳了闷了，就想着坑我们这些穷学生钱是吧，这玩意你也好意思收费，你这堆傻逼文章我看比诺贝尔奖论文还值钱。</p>
<p>先分析原理，这类扫码支付一般有两种方式。</p>
<blockquote>
<p>第一种：WebSocket协议</p>
</blockquote>
<p>前后端采用全双工模式进行通讯，服务器接收到付款成功后的数据后，对前端进行消息通知，前端随即关闭付款页面。</p>
<blockquote>
<p>第二种：http协议</p>
</blockquote>
<p>前端对后端不断发送包进行轮训，直到后端返回的数据里带有付款成功信息，随即关闭付款页面。</p>
<p>我们暂时不确定他用的是哪一种，继续往下看。</p>
<p>于是我便打开了F12开发者工具，先查看下dom元素</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230517182554532.png" alt="image-20230517182554532"></p>
<p>js想实现让该窗口隐藏，想必离不开使用jquery的dom操作对该class进行读取和操作，那我们便以class为scan-pay-box为突破口。</p>
<p>首先Ctrl+Shift+F调用全局搜索，然后输入scan-pay-box回车即可。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230517182720655.png" alt="image-20230517182720655"></p>
<p>搜到了一堆css和一个js文件，我们点进去js一探究竟。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230517182920351.png" alt="image-20230517182920351"></p>
<p>Oh My God，竟然如此简单，你TM的不如直接把线索写在你的屁眼上。</p>
<p>这里可以看出他设定了一个定时器Interval，来实现循环执行e.tradeQuery()发送post包，直至判断返回结果中state属性值为SUCCESS即显示支付成功字样。</p>
<p>于是我便猜测出这里使用的http协议，半双工模式下进行的轮训支付回调方式。</p>
<p>那么我们便可以通过抓包的方式对包的返回结果进行篡改，从而实现我们的目的，话不多说，上神器Fiddler。因为要修改返回结果，所以下一个回传的全局断点。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230517183548753.png" alt="image-20230517183548753"></p>
<p>这里对response中的state属性的值进行修改为SUCCESS即可成功！</p>
<p>成功结果如下：</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230517183825649.png" alt="image-20230517183825649"></p>
<p>这个网站的破解思路还是很简单的，大神们还可以使用JsHook、爬虫等其他方法进行破解。</p>
<p>诸如此类的文档网站还有很多，大家都可以用类似的思路去尝试破解，不乏有一些难度较高的，不过最终都是可以破解的，只是难度高低不同。</p>
<p>我想说，技术无绝对，攻防有黑白。学习一些逆向知识不是为了违法犯罪，可以在开发的时候做一些安全防护，保护好自己的知识产权，诸如混淆，关键点检测等等方法。</p>
<p>千万不要用技术非法攻击和倒卖甚至是侵害这些企业的利益，尽管他卖4.99是真他妈恶心。</p>
</div></template>



<template><div><h1 id="网游链表数据遍历" tabindex="-1"><a class="header-anchor" href="#网游链表数据遍历"><span>网游链表数据遍历</span></a></h1>
<blockquote>
<p>游戏中用来存储所有对象信息的往往是链表。也就意味着只需要遍历自己人物对象周围的链表，并将周围的对象都显示出来即可。我们想要实现遍历周围附近所有对象的信息(例如血量)功能，就要采用遍历链表。</p>
</blockquote>
<p>首先我们查找血量的地址</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240227040522123.png" alt="image-20240227040522123"></p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240227040644993.png" alt="image-20240227040644993"></p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240227040656600.png" alt="image-20240227040656600"></p>
<p>发现游戏上方有查询对象血量的功能，像这种既可以查看自己血量也可以查看其他对象血量的功能，往往就会对所有对象进行遍历。</p>
<p>抱着试一试的想法，我们保持查看自己血量状态，同时对血量地址下硬件访问断点。发现会无限的秒断，结果断到如下位置。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240227040904388.png" alt="image-20240227040904388"></p>
<p>拿到血量表达式，直接一路狂跟。</p>
<ul>
<li>eax+0x8</li>
<li>[esi+0xc]+0x8</li>
<li>[ecx+0xc]+0x8</li>
<li>[ebx+0xc]+0x8</li>
<li>[ecx+0xc]+0x8</li>
</ul>
<p>直到我们追到了一个循环</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240227041057038.png" alt="image-20240227041057038"></p>
<p>这里便是对人物信息的遍历的地方，先去上层拿到ecx==[00F84B74]+0x410。我们得到循环头的表达式为：[[[00F84B74]+410+8]]，且自身人物对象为其的第一次循环，即[[[[00F84B74]+410+8]]]。故我们得到对象头的表达式为[[[[[00F84B74]+410+8]]+0xc]+0xc]，</p>
<p>血量=对象+0x8</p>
<p>名字=对象+0x100</p>
<p>接下来我们对该表达式进行代码编写，遍历所有对象的血量数据（其他数据也可以，这里仅供测试）。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240227044916214.png" alt=""></p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20240227044856360.png" alt=""></p>
</div></template>



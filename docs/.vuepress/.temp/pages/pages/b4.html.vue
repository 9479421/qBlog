<template><div><h1 id="手机浏览器调试方法" tabindex="-1"><a class="header-anchor" href="#手机浏览器调试方法"><span>手机浏览器调试方法</span></a></h1>
<p>目前几乎所有的浏览器都是使用的统一的Chromium内核，但是在Web2.0时代的推动下，各大浏览器厂商对移动端的适配兼容貌似还是存在微小的出入。</p>
<p>这就产生了一个很操蛋的问题，会导致你写的程序在大部分浏览器中运行都正常，但是可能到了某个其他的浏览器就会出现BUG。</p>
<p>如我写的这个博客项目便出现了类似的情况，如下图所示，从左到右依次是：电脑chrome浏览器，手机QQ自带浏览器，手机微信自带浏览器，手机vivo浏览器，全部显示正常。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230531202610608.png" alt="image-20230531202610608"></p>
<p>但是到了手机Chrome浏览器上，却突然显示不出文章的章节名。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230531203252944.png" alt="image-20230531203252944"></p>
<p>如果是电脑浏览器显示不出来还好说，直接开发者模式Console调试一下就知道代码哪里出现了问题，但是手机浏览器调试起来就比较麻烦，下面介绍两种方案。</p>
<blockquote>
<p>使用vconsole库直接在手机上调试</p>
</blockquote>
<p>html如下：</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.bootcss.com/vConsole/3.2.0/vconsole.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">//初始化一下就可以了，</span>
<span class="token keyword">let</span> vConsole <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VConsole</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//你打印的数据 比如</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//就可像小程序一样的看了和调试了。</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue如下：</p>
<p>//如果是在vue中要先安装包</p>
<p>npm install vconsole</p>
<p>//然后引入</p>
<p>import Vconsole from 'vconsole';</p>
<p>//然后在created 或者mounted 生命周期中初始化一下</p>
<p>let vConsole = new VConsole();</p>
<p>//在手机上 就可以像上面一样的效果了</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230531205950681.png" alt="image-20230531205950681"></p>
<p>引用VConsole后，右下角就会出现VConsole按钮，点开即可查看调试日志了。</p>
<p>这个库好像打包的时候有点BUG，并且手机google浏览器直接访问不了网页了？莫名其妙，总之这个方法对于手机端单独调试还是不错的。</p>
<blockquote>
<p>通过电脑使用USB远程调试</p>
</blockquote>
<p>首先，手机连接电脑后，打开开发者模式，再打开USB调试模式。</p>
<p>然后再去浏览器开发者模式中选中Remote Devices</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/7365cd0da3e44bed9a0ac4cf89a8a77c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="ios02.png"></p>
<p>在chome80以上的版本把 &quot;Remote Devices&quot; 面板移除了，实现了chrome://inspect提供，直接在浏览器地址栏输入<code v-pre>chrome://inspect</code>，并且点击Port forwarding，并勾选Enable port forwarding按钮即可。</p>
<p>此时只需要打开手机Chrome Google浏览器，并且访问网页即可，调试页面自然会显示出来对应的网址，点击inspect即可进行调试监听。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230531213654816.png" alt="image-20230531213654816"></p>
<p>终于找到原因了，竟是因为Chrome浏览器版本过旧，导致不支持ReplaceAll这个新语法。</p>
<blockquote>
<p>解决方案如下</p>
</blockquote>
<p>将replaceAll替换成replace(new RegExp(&quot;OldText&quot;, &quot;gm&quot;), &quot;NewText&quot;)即可解决。</p>
<p>查阅了下ReplaceAll对于各浏览器及版本的支持情况</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230531214051096.png" alt="image-20230531214051096"></p>
<p>说明我所用的手机Chrome浏览器是低于85版本，所以不支持ReplaceAll语法。</p>
<p>果然，一切真相终将大白于天下，最后部署测试下，没问题了，收工！</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230531214725784.png" alt="image-20230531214725784"></p>
</div></template>



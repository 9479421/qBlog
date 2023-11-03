<template><h1 id="服务和活动进行通信" tabindex="-1"><a class="header-anchor" href="#服务和活动进行通信" aria-hidden="true">#</a> 服务和活动进行通信</h1>
<p><strong>本文给自己简单复习一下，不多说废话</strong></p>
<p>新建一个Service服务，命名MyService
其实就是一个MyService类继承了Service，并且在AndroidManifest.xml的application中注册了service</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>service</span>
            <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>.MyService<span class="token punctuation">"</span></span>
            <span class="token attr-name"><span class="token namespace">android:</span>enabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
            <span class="token attr-name"><span class="token namespace">android:</span>exported</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>service</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>编写MyService代码</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyService</span> <span class="token keyword">extends</span> <span class="token class-name">Service</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span>  <span class="token class-name">DownloadBinder</span> mBinder<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">DownloadBinder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">class</span> <span class="token class-name">DownloadBinder</span> <span class="token keyword">extends</span> <span class="token class-name">Binder</span><span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">startDownload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span><span class="token string">"MyService"</span><span class="token punctuation">,</span><span class="token string">"startDownload executed"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getProgress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span><span class="token string">"MyService"</span><span class="token punctuation">,</span><span class="token string">"getProgress executed"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">MyService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span><span class="token string">"MyService"</span><span class="token punctuation">,</span><span class="token string">"onCreate executed"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span><span class="token string">"MyService"</span><span class="token punctuation">,</span><span class="token string">"onDestroy executed"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">onStartCommand</span><span class="token punctuation">(</span><span class="token class-name">Intent</span> intent<span class="token punctuation">,</span> <span class="token keyword">int</span> flags<span class="token punctuation">,</span> <span class="token keyword">int</span> startId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span><span class="token string">"MyService"</span><span class="token punctuation">,</span><span class="token string">"onStartCommand executed"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onStartCommand</span><span class="token punctuation">(</span>intent<span class="token punctuation">,</span> flags<span class="token punctuation">,</span> startId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">IBinder</span> <span class="token function">onBind</span><span class="token punctuation">(</span><span class="token class-name">Intent</span> intent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> mBinder<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>当一个活动绑定了服务后，就可以调用该服务器里的Binder提供的方法了
DownloadBinder类继承了Binder类
onBind()方法要返回要绑定的的Binder，即返回DownloadBinder类即可</p>
<p><strong>接着编写MainActivity中调用服务的代码</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token keyword">private</span> <span class="token class-name">MyService<span class="token punctuation">.</span>DownloadBinder</span> downloadBinder<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">ServiceConnection</span> connection<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ServiceConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onServiceConnected</span><span class="token punctuation">(</span><span class="token class-name">ComponentName</span> name<span class="token punctuation">,</span> <span class="token class-name">IBinder</span> service<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            downloadBinder<span class="token operator">=</span><span class="token punctuation">(</span><span class="token class-name">MyService<span class="token punctuation">.</span>DownloadBinder</span><span class="token punctuation">)</span>service<span class="token punctuation">;</span>
            downloadBinder<span class="token punctuation">.</span><span class="token function">startDownload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            downloadBinder<span class="token punctuation">.</span><span class="token function">getProgress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onServiceDisconnected</span><span class="token punctuation">(</span><span class="token class-name">ComponentName</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>接下来进行<strong>绑定服务</strong>就可以了</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Intent</span> bindIntent<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Intent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span><span class="token class-name">MyService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">bindService</span><span class="token punctuation">(</span>bindIntent<span class="token punctuation">,</span>connection<span class="token punctuation">,</span>BIND_AUTO_CREATE<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>取消绑定：</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">unbindService</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>绑定完成后会触发ServiceConnection中的onServiceConnected()方法
取消绑定后会触发ServiceConnection中的onServiceDisconnected()方法</p>
<p>现在已经凌晨3点了，发完博客准备睡觉了。。。。。。</p>
</template>

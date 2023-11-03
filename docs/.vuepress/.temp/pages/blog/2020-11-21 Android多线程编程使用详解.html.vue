<template><h2 id="android中启动子线程的方法" tabindex="-1"><a class="header-anchor" href="#android中启动子线程的方法" aria-hidden="true">#</a> Android中启动子线程的方法</h2>
<h2 id="法1" tabindex="-1"><a class="header-anchor" href="#法1" aria-hidden="true">#</a> 法1</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">MyThread</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">new</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="法2" tabindex="-1"><a class="header-anchor" href="#法2" aria-hidden="true">#</a> 法2</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>        <span class="token keyword">class</span> <span class="token class-name">MyThread</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span><span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">//</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">MyThread</span> myThread<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>myThread<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="法3-最为常用的写法" tabindex="-1"><a class="header-anchor" href="#法3-最为常用的写法" aria-hidden="true">#</a> 法3 最为常用的写法</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>注意：在<strong>子线程</strong>中更新UI是会出现异常的，程序会出现闪退。对此，Android提供了一套异步消息处理机制，完美解决了在子线程中操作UI的问题</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">Handler</span> handler<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleMessage</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NonNull</span> <span class="token class-name">Message</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">switch</span> <span class="token punctuation">(</span>msg<span class="token punctuation">.</span>what<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
                    textView<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">"Nice To meet you"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">default</span><span class="token operator">:</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>首先新增一个Handler对象，重写父类的handleMessage()方法，然后在这里对具体的Message进行处理，在handleMessage()里面，我们就可以放心大胆的对UI进行操作而不至于崩溃了。这里判断Message的what为1的时候就执行操作</p>
<p>接下来我们在线程中调用Handler</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">Message</span> message<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Message</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                message<span class="token punctuation">.</span>what<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
                handler<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>新建一个Message，将其what定为1，然后传递信息就Ok了，当Handler收到信息后，会进行相应的操作</p>
<h2 id="法4-使用asynctask" tabindex="-1"><a class="header-anchor" href="#法4-使用asynctask" aria-hidden="true">#</a> 法4 使用AsyncTask</h2>
<p>AsyncTask是一个抽象类，使用AsyncTask很简单，只需要创建一个子类去继承他，然后重写几个父类方法即可，先枚举下要重写的父类方法</p>
<p>1、onPreExecute()
在后台任务开始执行之前调用，用于执行一些初始化操作，例如显示一个进度条对话框
2、doInBackground(Params...)
这个方法里的代码都会在子线程进行，所以不能在里面进行UI操作，可以在这里处理所有耗时的任务，例如加载进度条的			  进度。如果需要更新UI，可以调用publishProgress(Progress...)来实现
3、onProgressUpdate(Progress...)
如果调用了publishProgress(Progress...)方法后，onProgressUpdate(Progress...)会很快被调用，这里的参数就是publishProgress里传过来的
4、onPostExecute(Result)
当后台任务执行完毕，并且通过return返回后，这个方法会很快得到调用，我们可以在这里进行一些UI操作，例如关闭进度条对话框等</p>
<p>我们新建一个类DownloadTask来继承AsyncTask，然后用其模拟下载的过程</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">DownloadTask</span> <span class="token keyword">extends</span> <span class="token class-name">AsyncTask</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Void</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">,</span><span class="token class-name">Boolean</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">onPreExecute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            progressDialog<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ProgressDialog</span><span class="token punctuation">(</span><span class="token class-name">MainActivity</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            progressDialog<span class="token punctuation">.</span><span class="token function">setMax</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            progressDialog<span class="token punctuation">.</span><span class="token function">setIcon</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>mipmap<span class="token punctuation">.</span>ic_launcher<span class="token punctuation">)</span><span class="token punctuation">;</span>
            progressDialog<span class="token punctuation">.</span><span class="token function">setProgressStyle</span><span class="token punctuation">(</span><span class="token class-name">ProgressDialog</span><span class="token punctuation">.</span>STYLE_HORIZONTAL<span class="token punctuation">)</span><span class="token punctuation">;</span>
            progressDialog<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">"标题"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            progressDialog<span class="token punctuation">.</span><span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token string">"任务正在执行中，请稍后"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            progressDialog<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            progressDialog<span class="token punctuation">.</span><span class="token function">setCancelable</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onPreExecute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">protected</span> <span class="token class-name">Boolean</span> <span class="token function">doInBackground</span><span class="token punctuation">(</span><span class="token class-name">Void</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> voids<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">&lt;</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                i<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token function">publishProgress</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">onProgressUpdate</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> values<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onProgressUpdate</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span>
            progressDialog<span class="token punctuation">.</span><span class="token function">setProgress</span><span class="token punctuation">(</span>values<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">onPostExecute</span><span class="token punctuation">(</span><span class="token class-name">Boolean</span> aBoolean<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onPostExecute</span><span class="token punctuation">(</span>aBoolean<span class="token punctuation">)</span><span class="token punctuation">;</span>
            progressDialog<span class="token punctuation">.</span><span class="token function">dismiss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><p>AsyncTask有三个参数，第一个是将传给后台任务的参数类型，第二个是泛型参数，是onProgressUpdate的参数的数据类型，第三个是任务执行完毕后要返回的值的类型</p>
<p><strong>注：</strong>
doInBackground()方法结束后会返回一个值给onPostExecute的参数，
publishProgress()方法会传值给onProgressUpdate的参数</p>
<p>想要调用这个AsyncTask，让进度条对话框进行执行，只需要很简单的两行代码</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">startTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">DownloadTask</span> downloadTask<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">DownloadTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        downloadTask<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>值得注意的是AsyncTask在Android11中已经被废除了，不过还是有学习的必要</p>
</template>

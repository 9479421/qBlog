<template><div><h1 id="java加密库的签名问题解决记录" tabindex="-1"><a class="header-anchor" href="#java加密库的签名问题解决记录"><span>Java加密库的签名问题解决记录</span></a></h1>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">></span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">></span></span>org<span class="token punctuation">.</span>bouncycastle<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">></span></span>bcprov<span class="token operator">-</span>jdk15on<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">></span></span><span class="token number">1.64</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>今天在调用Java执行SM4加密的时候</p>
<p>Cipher cipher = Cipher.<em>getInstance</em>(algorithmName, BouncyCastleProvider.<em>PROVIDER_NAME</em>);
Key sm4Key = new SecretKeySpec(key, <em>ALGORITHM_NAME</em>);
cipher.init(mode, sm4Key);
return cipher;</p>
<p>以上代码一切正常</p>
<p>但是将代码部署到windows服务器，oracle jdk 1.8 环境时，却触发了如下报错</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token constant">JCE</span> cannot authenticate the provider <span class="token constant">BC</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>问题好像出在相关加密jar有签名校验，但是我在云函数部署的openJdk1.8却能正常运行使用。</p>
<p>试了半天，找到一个能用解决方案。</p>
<p>去maven找到相关加密库的jar</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230907011600693.png" alt="image-20230907011600693"></p>
<p>复制bcprov-jdk15on-1.64.jar到java的jre/lib/ext目录下，重新运行即可。</p>
</div></template>



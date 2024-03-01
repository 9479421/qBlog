<template><div><h1 id="ssh服务与vs连接失败解决方案" tabindex="-1"><a class="header-anchor" href="#ssh服务与vs连接失败解决方案"><span>SSH服务与VS连接失败解决方案</span></a></h1>
<h2 id="_1-连接失败" tabindex="-1"><a class="header-anchor" href="#_1-连接失败"><span>1.连接失败</span></a></h2>
<p>在Linux编程开发中，配置VisualStudio与SSH服务连接的时候遇到了这样的问题。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524160024262.png" alt="image-20230524160024262"></p>
<p>明明配置了<code v-pre>/etc/ssh/sshd_config</code>，也<code v-pre>sudo service ssh start</code>启动了ssh的服务，仍然连接不上，于是选择重启服务<code v-pre>sudo service ssh restart</code></p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524160220580.png" alt="image-20230524160220580"></p>
<p>发现问题所在，说我没配置密匙。</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-f</span> /etc/ssh/ssh_host_rsa_key
ssh-keygen <span class="token parameter variable">-t</span> dsa <span class="token parameter variable">-f</span> /etc/ssh/ssh_host_dsa_key
ssh-keygen <span class="token parameter variable">-t</span> ecdsa <span class="token parameter variable">-f</span> /etc/ssh/ssh_host_ecdsa_key
ssh-keygen <span class="token parameter variable">-t</span> ed25519 <span class="token parameter variable">-f</span> /etc/ssh/ssh_host_ed25519_key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启SSH服务<code v-pre>sudo service ssh restart</code></p>
<p>再次尝试连接，成功了！</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524160508748.png" alt="image-20230524160508748"></p>
<h2 id="_2-运行失败" tabindex="-1"><a class="header-anchor" href="#_2-运行失败"><span>2.运行失败</span></a></h2>
<p>在Debug调试时，还会触发如此愚蠢的提示。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524161405745.png" alt="image-20230524161405745"></p>
<blockquote>
<p>什么是gdb</p>
</blockquote>
<p>gdb是Linux下调试代码的工具，相当于Windows下的Debug，有了gdb就可以对Linux代码进行调试运行。</p>
<p>所以我们的Linux系统中缺少gdb调试工具。apd-get intsall gdb</p>
<p>随即便大功告成！</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524161807377.png" alt="image-20230524161807377"></p>
</div></template>



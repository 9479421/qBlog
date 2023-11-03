<template><h1 id="ssh服务与vs连接失败解决方案" tabindex="-1"><a class="header-anchor" href="#ssh服务与vs连接失败解决方案" aria-hidden="true">#</a> SSH服务与VS连接失败解决方案</h1>
<h2 id="_1-连接失败" tabindex="-1"><a class="header-anchor" href="#_1-连接失败" aria-hidden="true">#</a> 1.连接失败</h2>
<p>在Linux编程开发中，配置VisualStudio与SSH服务连接的时候遇到了这样的问题。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524160024262.png" alt="image-20230524160024262"></p>
<p>明明配置了<code v-pre>/etc/ssh/sshd_config</code>，也<code v-pre>sudo service ssh start</code>启动了ssh的服务，仍然连接不上，于是选择重启服务<code v-pre>sudo service ssh restart</code></p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524160220580.png" alt="image-20230524160220580"></p>
<p>发现问题所在，说我没配置密匙。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ssh-keygen -t rsa -f /etc/ssh/ssh_host_rsa_key
ssh-keygen -t dsa -f /etc/ssh/ssh_host_dsa_key
ssh-keygen -t ecdsa -f /etc/ssh/ssh_host_ecdsa_key
ssh-keygen -t ed25519 -f /etc/ssh/ssh_host_ed25519_key
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>重启SSH服务<code v-pre>sudo service ssh restart</code></p>
<p>再次尝试连接，成功了！</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524160508748.png" alt="image-20230524160508748"></p>
<h2 id="_2-运行失败" tabindex="-1"><a class="header-anchor" href="#_2-运行失败" aria-hidden="true">#</a> 2.运行失败</h2>
<p>在Debug调试时，还会触发如此愚蠢的提示。</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524161405745.png" alt="image-20230524161405745"></p>
<blockquote>
<p>什么是gdb</p>
</blockquote>
<p>gdb是Linux下调试代码的工具，相当于Windows下的Debug，有了gdb就可以对Linux代码进行调试运行。</p>
<p>所以我们的Linux系统中缺少gdb调试工具。apd-get intsall gdb</p>
<p>随即便大功告成！</p>
<p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230524161807377.png" alt="image-20230524161807377"></p>
</template>

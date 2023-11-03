import{_ as p,r as t,o as l,a as c,b as s,d as o,F as r,c as n,e as a}from"./app.c70f1779.js";const i={},u=n(`<h1 id="docker\u5B66\u4E60\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#docker\u5B66\u4E60\u7B14\u8BB0" aria-hidden="true">#</a> Docker\u5B66\u4E60\u7B14\u8BB0</h1><h2 id="docker\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#docker\u6982\u8FF0" aria-hidden="true">#</a> Docker\u6982\u8FF0</h2><h3 id="docker\u4E3A\u4EC0\u4E48\u51FA\u73B0" tabindex="-1"><a class="header-anchor" href="#docker\u4E3A\u4EC0\u4E48\u51FA\u73B0" aria-hidden="true">#</a> Docker\u4E3A\u4EC0\u4E48\u51FA\u73B0\uFF1F</h3><p>\u4E00\u6B3E\u4EA7\u54C1\uFF1A\u5F00\u53D1---\u4E0A\u7EBF \u4E24\u5957\u73AF\u5883\uFF01\u5E94\u7528\u73AF\u5883\uFF0C\u5E94\u7528\u914D\u7F6E\uFF01</p><p>\u5F00\u53D1 ... \u8FD0\u7EF4\u3002 \u95EE\u9898\uFF1A\u6211\u5728\u6211\u7684\u7535\u8111\u4E0A\u53EF\u4EE5\u8FD0\u884C\uFF01\u7248\u672C\u66F4\u65B0\uFF0C\u5BFC\u81F4\u670D\u52A1\u4E0D\u53EF\u7528\uFF01\u5BF9\u4E8E\u8FD0\u7EF4\u6765\u8BF4\uFF0C\u8003\u9A8C\u5C31\u5341\u5206\u5927</p><p>\u73AF\u5883\u914D\u7F6E\u662F\u5341\u5206\u7684\u9EBB\u70E6\uFF0C\u6BCF\u4E00\u4E2A\u673A\u5668\u90FD\u8981\u90E8\u7F72\u73AF\u5883\uFF08\u96C6\u7FA4Redis\u3001ES\u3001hadoop\u2026\u2026\uFF09! \u8D39\u65F6\u8D39\u529B\u3002</p><p>\u53D1\u5E03\u4E00\u4E2A\u9879\u76EE jar( Redis Mysql jdk ES ) war</p><p>Windows\uFF0C\u6700\u540E\u53D1\u5E03\u5230Linux !</p><p>\u4F20\u7EDF\uFF1A\u5F00\u53D1jar\uFF0C\u8FD0\u7EF4\u6765\u505A</p><p>\u73B0\u5728\uFF1A\u5F00\u53D1\u6253\u5305\u90E8\u7F72\u4E0A\u7EBF\uFF0C\u4E00\u5957\u6D41\u7A0B\u505A\u5B8C\uFF01</p><p>java -- apk -- \u53D1\u5E03\uFF08\u5E94\u7528\u5546\u5E97\uFF09-- \u5F20\u4E09\u4F7F\u7528apk ---\u5B89\u88C5\u5373\u53EF\u7528\uFF01</p><p>java -- jar\uFF08\u73AF\u5883\uFF09 -- \u6253\u5305\u9879\u76EE\u5E26\u4E0A\u73AF\u5883\uFF08\u955C\u50CF\uFF09-- \uFF08Docker\u4ED3\u5E93\uFF1A\u5546\u5E97\uFF09</p><p>Docker \u7ED9\u4EE5\u4E0A\u7684\u95EE\u9898\uFF0C\u63D0\u4F9B\u4E86\u89E3\u51B3\u65B9\u6848\uFF01</p><p>Docker\u7684\u601D\u60F3\u5C31\u6765\u81EA\u4E8E\u96C6\u88C5\u7BB1\uFF01</p><p>JRE -- \u591A\u4E2A\u5E94\u7528\uFF08\u7AEF\u53E3\u51B2\u7A81\uFF09 --\u539F\u6765\u90FD\u662F\u4EA4\u53C9\u7684\uFF01</p><p>\u9694\u79BB\uFF1ADocker\u6838\u5FC3\u601D\u60F3\uFF01\u6253\u5305\u88C5\u7BB1\uFF01\u6BCF\u4E2A\u7BB1\u5B50\u90FD\u662F\u4E92\u76F8\u9694\u79BB\u7684\u3002</p><p>Docker\u901A\u8FC7\u9694\u79BB\u673A\u5236\uFF0C\u53EF\u4EE5\u5C06\u670D\u52A1\u5668\u7528\u5230\u6781\u81F4\uFF01</p><p>\u672C\u8D28\uFF1A\u6240\u6709\u7684\u6280\u672F\u90FD\u662F\u56E0\u4E3A\u51FA\u73B0\u4E86\u4E00\u4E9B\u95EE\u9898\uFF0C\u6211\u4EEC\u9700\u8981\u53BB\u89E3\u51B3\uFF0C\u624D\u53BB\u5B66\u4E60\uFF01\u3002</p><h3 id="docker\u7684\u5386\u53F2" tabindex="-1"><a class="header-anchor" href="#docker\u7684\u5386\u53F2" aria-hidden="true">#</a> Docker\u7684\u5386\u53F2</h3><p>2010\u5E74\uFF0C\u51E0\u4E2A\u641EIT\u7684\u5E74\u8F7B\u4EBA\uFF0C\u5C31\u5728\u6CA1\u8FC7\u5EFA\u7ACB\u4E86\u4E00\u5BB6\u516C\u53F8dotCloud</p><p>\u505A\u4E00\u4E9Bpass\u7684\u4E91\u8BA1\u7B97\u670D\u52A1\uFF01LXC\u6709\u5173\u7684\u5BB9\u5668\u6280\u672F\uFF01</p><p>\u5B83\u4EEC\u5C06\u81EA\u5DF1\u7684\u6280\u672F\uFF08\u5BB9\u5668\u5316\u6280\u672F\uFF09\u547D\u540D\u5C31\u662FDocker\uFF01</p><p>Docker\u521A\u521A\u8BDE\u751F\u7684\u65F6\u5019\uFF0C\u6CA1\u6709\u5F15\u8D77\u884C\u4E1A\u7684\u6CE8\u610F\uFF01dotCloud\uFF0C\u5C31\u6D3B\u4E0D\u4E0B\u53BB\uFF01</p><p>\u5F00\u6E90</p><p>\u5F00\u653E\u6E90\u4EE3\u7801\uFF01</p><p>2013\u5E74\uFF0CDocker\u5F00\u6E90</p><p>Docker\u8D8A\u6765\u8D8A\u591A\u7684\u4EBA\u53D1\u73B0\u4E86Docker\u7684\u4F18\u70B9\uFF01\u706B\u4E86\uFF0CDocker\u6BCF\u4E2A\u6708\u90FD\u4F1A\u66F4\u65B0\u4E00\u4E2A\u7248\u672C\uFF01</p><p>2014\u5E744\u67089\u65E5\uFF0CDocker1.0\u53D1\u5E03\uFF01</p><p>Docker\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u706B\uFF1F\u5341\u5206\u7684\u8F7B\u5DE7\uFF01</p><p>\u5728\u5BB9\u5668\u6280\u672F\u51FA\u6765\u4E4B\u524D\uFF0C\u6211\u4EEC\u90FD\u662F\u4F7F\u7528\u865A\u62DF\u673A\u6280\u672F\uFF01</p><p>\u865A\u62DF\u673A\uFF1A\u5728windows\u4E2D\u88C5\u4E00\u4E2AVmware\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u8F6F\u4EF6\u6211\u4EEC\u53EF\u4EE5\u865A\u62DF\u51FA\u6765\u4E00\u53F0\u6216\u591A\u53F0\u7535\u8111\uFF01</p><p>\u865A\u62DF\u673A\u4E5F\u662F\u5C5E\u4E8E\u865A\u62DF\u5316\u6280\u672F\uFF0CDocker\u5BB9\u5668\u6280\u672F\uFF0C\u4E5F\u662F\u4E00\u79CD\u865A\u62DF\u5316\u6280\u672F\uFF01</p><blockquote><p>vm\uFF0Clinux centos\u539F\u751F\u955C\u50CF\uFF08\u4E00\u4E2A\u7535\u8111\uFF01\uFF09 \u9694\u79BB\uFF0C\u9700\u8981\u5F00\u542F\u591A\u4E2A\u865A\u62DF\u673A\uFF01</p><p>docker\uFF1A\u9694\u79BB\uFF0C\u955C\u50CF\uFF08\u6700\u6838\u5FC3\u7684\u73AF\u5883 4m + jdk + mysql\uFF09 \u5341\u5206\u7684\u5C0F\u5DE7\uFF0C\u8FD0\u884C\u955C\u50CF\u5C31\u53EF\u4EE5\u4E86\uFF01\u5C0F\u5DE7\uFF01</p></blockquote><h3 id="docker\u80FD\u5E72\u561B" tabindex="-1"><a class="header-anchor" href="#docker\u80FD\u5E72\u561B" aria-hidden="true">#</a> Docker\u80FD\u5E72\u561B</h3><p><strong>\u865A\u62DF\u673A\u6280\u672F\u7F3A\u70B9\uFF1A</strong></p><p>1\u3001\u8D44\u6E90\u5360\u7528\u5341\u5206\u591A</p><p>2\u3001\u5197\u4F59\u6B65\u9AA4\u591A</p><p>3\u3001\u542F\u52A8\u5F88\u6162\uFF01</p><blockquote><p>\u5BB9\u5668\u5316\u6280\u672F</p></blockquote><p>\u5BB9\u5668\u5316\u6280\u672F\u4E0D\u662F\u6A21\u62DF\u7684\u4E00\u4E2A\u5B8C\u6574\u7684\u64CD\u4F5C\u7CFB\u7EDF</p><p>\u6BD4\u8F83Docker\u548C\u865A\u62DF\u673A\u6280\u672F\u7684\u4E0D\u540C\uFF1A</p><ul><li>\u4F20\u7EDF\u865A\u62DF\u673A\uFF0C\u865A\u62DF\u51FA\u4E00\u6761\u786C\u4EF6\uFF0C\u8FD0\u884C\u4E00\u4E2A\u5B8C\u6574\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u7136\u540E\u5728\u8FD9\u4E2A\u7CFB\u7EDF\u4E0A\u5B89\u88C5\u548C\u8FD0\u884C\u8F6F\u4EF6</li><li>\u5BB9\u5668\u5185\u7684\u5E94\u7528\u76F4\u63A5\u8FD0\u884C\u5728\u5BBF\u4E3B\u673A\u7684\u5185\u5BB9\uFF0C\u5BB9\u5668\u662F\u6CA1\u6709\u81EA\u5DF1\u7684\u5185\u6838\u7684\uFF0C\u4E5F\u6CA1\u6709\u865A\u62DF\u6211\u4EEC\u7684\u786C\u4EF6\uFF0C\u6240\u4EE5\u5C31\u8F7B\u4FBF\u4E86</li><li>\u6BCF\u4E2A\u5BB9\u5668\u95F4\u662F\u4E92\u76F8\u9694\u79BB\uFF0C\u6BCF\u4E2A\u5BB9\u5668\u5185\u90FD\u6709\u4E00\u4E2A\u5C5E\u4E8E\u81EA\u5DF1\u7684\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u4E92\u4E0D\u5F71\u54CD\u3002</li></ul><blockquote><p>DevOps\uFF08\u5F00\u53D1\u3001\u8FD0\u7EF4\uFF09</p></blockquote><p><strong>\u5E94\u7528\u66F4\u5FEB\u901F\u7684\u4EA4\u4ED8\u548C\u90E8\u7F72</strong></p><p>\u4F20\u7EDF\uFF1A\u4E00\u5806\u5E2E\u52A9\u6587\u6863\uFF0C\u5B89\u88C5\u7A0B\u5E8F</p><p>Docker\uFF1A\u8FD0\u884C\u6253\u5305\u955C\u50CF\u53D1\u5E03\u6D4B\u8BD5\uFF0C\u4E00\u952E\u8FD0\u884C</p><p><strong>\u66F4\u4FBF\u6377\u7684\u5347\u7EA7\u6216\u6269\u7F29\u5BB9</strong></p><p>\u4F7F\u7528\u4E86Docker\u4E4B\u540E\uFF0C\u6211\u4EEC\u90E8\u7F72\u5E94\u7528\u5C31\u548C\u642D\u79EF\u6728\u4E00\u6837\uFF01</p><p>\u9879\u76EE\u6253\u5305\u4E3A\u4E00\u4E2A\u955C\u50CF\uFF0C\u6269\u5C55 \u670D\u52A1\u5668A\uFF01 \u670D\u52A1\u5668B</p><p><strong>\u66F4\u7B80\u5355\u7684\u7CFB\u7EDF\u8FD0\u7EF4</strong></p><p>\u5728\u5BB9\u5668\u5316\u4E4B\u540E\uFF0C\u6211\u4EEC\u7684\u5F00\u53D1\uFF0C\u6D4B\u8BD5\u73AF\u5883\uFF0C\u90FD\u662F\u9AD8\u5EA6\u4E00\u81F4\u7684</p><p><strong>\u66F4\u9AD8\u6548\u7684\u8BA1\u7B97\u8D44\u6E90\u5229\u7528</strong></p><p>Docker\u662F\u5185\u6838\u7EA7\u7684\u865A\u62DF\u5316\uFF0C\u53EF\u4EE5\u518D\u4E00\u4E2A\u7269\u7406\u673A\u4E0A\u8FD0\u884C\u5F88\u591A\u7684\u5BB9\u5668\u5B9E\u4F8B\uFF01\u670D\u52A1\u5668\u7684\u6027\u80FD\u53EF\u4EE5\u88AB\u538B\u69A8\u5230\u6781\u81F4</p><h2 id="docker\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#docker\u5B89\u88C5" aria-hidden="true">#</a> Docker\u5B89\u88C5</h2><h3 id="docker\u7684\u57FA\u672C\u7EC4\u6210" tabindex="-1"><a class="header-anchor" href="#docker\u7684\u57FA\u672C\u7EC4\u6210" aria-hidden="true">#</a> Docker\u7684\u57FA\u672C\u7EC4\u6210</h3><p><strong>\u955C\u50CF\uFF08image\uFF09\uFF1A</strong></p><p>docker\u955C\u50CF\u5C31\u597D\u6BD4\u662F\u4E00\u4E2A\u672B\u73ED\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u6A21\u677F\u6765\u521B\u5EFA\u5BB9\u5668\u670D\u52A1\uFF0Ctomcat\u955C\u50CF==&gt; run ==&gt; tomcat01\u5BB9\u5668\uFF08\u63D0\u4F9B\u670D\u52A1\u5668\uFF09\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u955C\u50CF\u53EF\u4EE5\u521B\u5EFA\u591A\u4E2A\u5BB9\u5668\uFF08\u6700\u7EC8\u670D\u52A1\u8FD0\u884C\u6216\u8005\u9879\u76EE\u8FD0\u884C\u5C31\u662F\u5728\u5BB9\u5668\u4E2D\u7684\uFF09</p><p><strong>\u5BB9\u5668\uFF08container\uFF09\uFF1A</strong></p><p>Docker\u5229\u7528\u5BB9\u5668\u6280\u672F\uFF0C\u72EC\u7ACB\u8FD0\u884C\u4E00\u4E2A\u6216\u8005\u4E00\u4E2A\u7EC4\u5E94\u7528\uFF0C\u901A\u8FC7\u955C\u50CF\u6765\u521B\u5EFA\u7684\u3002</p><p>\u542F\u52A8\uFF0C\u505C\u6B62\uFF0C\u5220\u9664\uFF0C\u57FA\u672C\u547D\u4EE4\uFF01</p><p>\u76EE\u524D\u5C31\u53EF\u4EE5\u628A\u8FD9\u4E2A\u5BB9\u5668\u7406\u89E3\u4E3A\u5C31\u662F\u4E00\u4E2A\u7B80\u6613\u7684linux\u7CFB\u7EDF</p><p><strong>\u4ED3\u5E93\uFF08repository\uFF09\uFF1A</strong></p><p>\u4ED3\u5E93\u5C31\u662F\u5B58\u653E\u955C\u50CF\u7684\u5730\u65B9\uFF01</p><p>\u4ED3\u5E93\u5206\u4E3A\u516C\u7528\u4ED3\u5E93\u548C\u79C1\u6709\u4ED3\u5E93</p><p>Docker Hub\uFF08\u9ED8\u8BA4\u662F\u56FD\u5916\u7684\uFF09</p><p>\u963F\u91CC\u4E91\u2026\u2026\u90FD\u6709\u5BB9\u5668\u670D\u52A1\u5668\uFF08\u914D\u7F6E\u955C\u50CF\u52A0\u901F\uFF01\uFF09</p><h3 id="\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5docker" aria-hidden="true">#</a> \u5B89\u88C5Docker</h3><blockquote><p>\u73AF\u5883\u51C6\u5907</p></blockquote><p>1\u3001\u9700\u8981\u4F1A\u4E00\u70B9\u70B9\u7684Linux\u57FA\u7840</p><p>2\u3001Centos7</p><p>3\u3001\u6211\u4EEC\u4F7F\u7528Xshell\u8FDE\u63A5\u8FDC\u7A0B\u670D\u52A1\u5668\u8FDB\u884C\u64CD\u4F5C\uFF01</p><blockquote><p>\u73AF\u5883\u67E5\u770B</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7CFB\u7EDF\u5185\u6838\u662F3.10\u4EE5\u4E0A\u7684</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># uname -r</span>
<span class="token number">3.10</span>.0-1160.45.1.el7.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7CFB\u7EDF\u7248\u672C</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/os-release</span>
<span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token string">&quot;CentOS Linux&quot;</span>
<span class="token assign-left variable">VERSION</span><span class="token operator">=</span><span class="token string">&quot;7 (Core)&quot;</span>
<span class="token assign-left variable">ID</span><span class="token operator">=</span><span class="token string">&quot;centos&quot;</span>
<span class="token assign-left variable">ID_LIKE</span><span class="token operator">=</span><span class="token string">&quot;rhel fedora&quot;</span>
<span class="token assign-left variable">VERSION_ID</span><span class="token operator">=</span><span class="token string">&quot;7&quot;</span>
<span class="token assign-left variable">PRETTY_NAME</span><span class="token operator">=</span><span class="token string">&quot;CentOS Linux 7 (Core)&quot;</span>
<span class="token assign-left variable">ANSI_COLOR</span><span class="token operator">=</span><span class="token string">&quot;0;31&quot;</span>
<span class="token assign-left variable">CPE_NAME</span><span class="token operator">=</span><span class="token string">&quot;cpe:/o:centos:centos:7&quot;</span>
<span class="token assign-left variable">HOME_URL</span><span class="token operator">=</span><span class="token string">&quot;https://www.centos.org/&quot;</span>
<span class="token assign-left variable">BUG_REPORT_URL</span><span class="token operator">=</span><span class="token string">&quot;https://bugs.centos.org/&quot;</span>

<span class="token assign-left variable">CENTOS_MANTISBT_PROJECT</span><span class="token operator">=</span><span class="token string">&quot;CentOS-7&quot;</span>
<span class="token assign-left variable">CENTOS_MANTISBT_PROJECT_VERSION</span><span class="token operator">=</span><span class="token string">&quot;7&quot;</span>
<span class="token assign-left variable">REDHAT_SUPPORT_PRODUCT</span><span class="token operator">=</span><span class="token string">&quot;centos&quot;</span>
<span class="token assign-left variable">REDHAT_SUPPORT_PRODUCT_VERSION</span><span class="token operator">=</span><span class="token string">&quot;7&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><blockquote><p>\u5B89\u88C5</p></blockquote><p>\u5E2E\u52A9\u6587\u6863\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1\u3001\u5378\u8F7D\u65E7\u7684\u7248\u672C</span>
<span class="token function">sudo</span> yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
                  docker-client <span class="token punctuation">\\</span>
                  docker-client-latest <span class="token punctuation">\\</span>
                  docker-common <span class="token punctuation">\\</span>
                  docker-latest <span class="token punctuation">\\</span>
                  docker-latest-logrotate <span class="token punctuation">\\</span>
                  docker-logrotate <span class="token punctuation">\\</span>
                  docker-engine
                  
<span class="token comment"># 2\u3001\u9700\u8981\u7684\u5B89\u88C5\u5305</span>
yum <span class="token function">install</span> -y yum-utils

<span class="token comment"># 3\u3001\u8BBE\u7F6E\u955C\u50CF\u7684\u4ED3\u5E93</span>
yum-config-manager <span class="token punctuation">\\</span>
	--add-repo <span class="token punctuation">\\</span>
	https://download.docker.com/linux/centos/docker-ce.repo <span class="token comment">#\u9ED8\u8BA4\u662F\u4ECE\u56FD\u5916\u7684\uFF01</span>
	
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo <span class="token comment">#\u56FD\u5185\u963F\u91CC\u4E91</span>

<span class="token comment"># \u66F4\u65B0yum\u8F6F\u4EF6\u5305\u7D22\u5F15</span>
yum makecache fast

<span class="token comment"># 4\u3001\u5B89\u88C5docker\u76F8\u5173\u7684\u503C docker-ce \u793E\u533A\u7248 ee \u4F01\u4E1A\u7248</span>
yum <span class="token function">install</span> docker-ce docker-ce-cli containerd.io

<span class="token comment"># 5\u3001\u542F\u52A8docker</span>
systemctl start <span class="token function">docker</span>

<span class="token comment"># 6\u3001\u4F7F\u7528docker version \u662F\u5426\u5B89\u88C5\u6210\u529F</span>

<span class="token comment"># 7\u3001\u6D4B\u8BD5hello-world</span>
<span class="token function">docker</span> run hello-world

<span class="token comment"># 8\u3001\u67E5\u770B\u4E00\u4E0B\u4E0B\u8F7D\u7684\u8FD9\u4E2Ahello-world\u955C\u50CF</span>
<span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>\u4E86\u89E3\uFF1A\u5378\u8F7Ddocker</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1\u3001\u5378\u8F7D\u4F9D\u8D56</span>
yum remove docker-ce docker-ce-cli containerd.io

<span class="token comment"># 2\u3001\u5220\u9664\u8D44\u6E90</span>
<span class="token function">rm</span> -rf /var/lib/docker
<span class="token function">rm</span> -rf /var/lib/containerd

<span class="token comment"># /var/lib/docker docker\u7684\u9ED8\u8BA4\u5DE5\u4F5C\u8DEF\u5F84</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u963F\u91CC\u4E91\u955C\u50CF\u52A0\u901F" tabindex="-1"><a class="header-anchor" href="#\u963F\u91CC\u4E91\u955C\u50CF\u52A0\u901F" aria-hidden="true">#</a> \u963F\u91CC\u4E91\u955C\u50CF\u52A0\u901F</h3><p>\u767B\u5F55\u963F\u91CC\u4E91\u670D\u52A1\u5668\uFF0C\u627E\u5230\u5BB9\u5668\u955C\u50CF\u670D\u52A1 \u8BBE\u7F6ERegistry\u767B\u5F55\u5BC6\u7801 \u627E\u5230\u955C\u50CF\u52A0\u901F\u5668 \u914D\u7F6E\u4F7F\u7528</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> -p /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://pi9dpp60.mirror.aliyuncs.com&quot;]
}
EOF</span>
<span class="token function">sudo</span> systemctl daemon-reload

<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u5E95\u5C42\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u5E95\u5C42\u539F\u7406" aria-hidden="true">#</a> \u5E95\u5C42\u539F\u7406</h3><p><strong>\u4E3A\u4EC0\u4E48Docker\u6BD4Vm\u5FEB</strong></p><ul><li><p>docker\u6709\u7740\u6BD4\u865A\u62DF\u673A\u66F4\u5C11\u7684\u62BD\u8C61\u5C42\u3002\u7531\u4E8Edocker\u4E0D\u9700\u8981Hypervisor\u5B9E\u73B0\u786C\u4EF6\u8D44\u6E90\u865A\u62DF\u5316,<em>\u8FD0\u884C\u5728docker\u5BB9\u5668\u4E0A\u7684\u7A0B\u5E8F\u76F4\u63A5\u4F7F\u7528\u7684\u90FD\u662F\u5B9E\u9645\u7269\u7406\u673A\u7684\u786C\u4EF6\u8D44\u6E90</em>\u3002\u56E0\u6B64\u5728CPU\u3001\u5185\u5B58\u5229\u7528\u7387\u4E0Adocker\u5C06\u4F1A\u5728\u6548\u7387\u4E0A\u6709\u660E\u663E\u4F18\u52BF\u3002</p></li><li><p>docker\u5229\u7528\u7684\u662F\u5BBF\u4E3B\u673A\u7684\u5185\u6838,\u800C\u4E0D\u9700\u8981Guest OS\u3002\u56E0\u6B64,\u5F53\u65B0\u5EFA\u4E00\u4E2A \u5BB9\u5668\u65F6,docker\u4E0D\u9700\u8981\u548C\u865A\u62DF\u673A\u4E00\u6837\u91CD\u65B0\u52A0\u8F7D\u4E00\u4E2A\u64CD\u4F5C\u7CFB\u7EDF\u5185\u6838\u3002\u4ECD\u800C\u907F\u514D\u5F15\u5BFB\u3001\u52A0\u8F7D\u64CD\u4F5C\u7CFB\u7EDF\u5185\u6838\u8FD4\u4E2A\u6BD4\u8F83\u8D39\u65F6\u8D39\u8D44\u6E90\u7684\u8FC7\u7A0B,\u5F53\u65B0\u5EFA\u4E00\u4E2A\u865A\u62DF\u673A\u65F6,\u865A\u62DF\u673A\u8F6F\u4EF6\u9700\u8981\u52A0\u8F7DGuestOS,\u8FD4\u4E2A\u65B0\u5EFA\u8FC7\u7A0B\u662F\u5206\u949F\u7EA7\u522B\u7684\u3002\u800Cdocker\u7531\u4E8E\u76F4\u63A5\u5229\u7528\u5BBF\u4E3B\u673A\u7684\u64CD\u4F5C\u7CFB\u7EDF,\u5219\u7701\u7565\u4E86\u8FD4\u4E2A\u8FC7\u7A0B,\u56E0\u6B64\u65B0\u5EFA\u4E00\u4E2Adocker\u5BB9\u5668\u53EA\u9700\u8981\u51E0\u79D2\u949F\u3002</p></li></ul><h2 id="docker\u7684\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#docker\u7684\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> Docker\u7684\u5E38\u7528\u547D\u4EE4</h2><h3 id="\u5E2E\u52A9\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E2E\u52A9\u547D\u4EE4" aria-hidden="true">#</a> \u5E2E\u52A9\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> version <span class="token comment">#\u663E\u793Adocker\u7684\u7248\u672C\u4FE1\u606F</span>
<span class="token function">docker</span> info
<span class="token function">docker</span> --help  <span class="token comment">#\u4E07\u80FD\u547D\u4EE4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u955C\u50CF\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u955C\u50CF\u547D\u4EE4" aria-hidden="true">#</a> \u955C\u50CF\u547D\u4EE4</h3><p>docker images \u67E5\u770B\u6240\u6709\u4E3B\u673A\u955C\u50CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
hello-world   latest    feb5d9fea6a5   <span class="token number">6</span> months ago   <span class="token number">13</span>.3kB

<span class="token comment"># \u89E3\u91CA</span>
REPOSITORY \u955C\u50CF\u7684\u4ED3\u5E93\u6E90
TAG \u955C\u50CF\u7684\u6807\u7B7E
IMAGE ID \u955C\u50CF\u7684id
CREATED \u955C\u50CF\u7684\u521B\u5EFA\u65F6\u95F4
SIZE \u955C\u50CF\u7684\u5927\u5C0F

<span class="token comment"># \u53EF\u9009\u9879</span>
-a,--all <span class="token comment"># \u5217\u51FA\u6240\u6709\u7684\u955C\u50CF</span>
-q,--quiet <span class="token comment"># \u53EA\u663E\u793A\u955C\u50CF\u7684id</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>docker search \u641C\u7D22\u955C\u50CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker search mysql</span>
NAME                             DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
mysql                            MySQL is a widely used, open-source relation\u2026   <span class="token number">12321</span>     <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>       
mariadb                          MariaDB Server is a high performing <span class="token function">open</span> sou\u2026   <span class="token number">4739</span>      <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>       
mysql/mysql-server               Optimized MySQL Server Docker images. Create\u2026   <span class="token number">915</span>                  <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
percona                          Percona Server is a fork of the MySQL relati\u2026   <span class="token number">572</span>       <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>       
phpmyadmin                       phpMyAdmin - A web interface <span class="token keyword">for</span> MySQL and M\u2026   <span class="token number">487</span>       <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>       
mysql/mysql-cluster              Experimental MySQL Cluster Docker images. Cr\u2026   <span class="token number">93</span>                   
centos/mysql-57-centos7          MySQL <span class="token number">5.7</span> SQL database server                   <span class="token number">92</span>                   
bitnami/mysql                    Bitnami MySQL Docker Image                      <span class="token number">67</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
ubuntu/mysql                     MySQL <span class="token function">open</span> <span class="token builtin class-name">source</span> fast, stable, multi-thread\u2026   <span class="token number">28</span>                   
circleci/mysql                   MySQL is a widely used, open-source relation\u2026   <span class="token number">25</span>                   
mysql/mysql-router               MySQL Router provides transparent routing be\u2026   <span class="token number">23</span>                   
google/mysql                     MySQL server <span class="token keyword">for</span> Google Compute Engine          <span class="token number">21</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
vmware/harbor-db                 Mysql container <span class="token keyword">for</span> Harbor                      <span class="token number">10</span>                   
mysqlboy/docker-mydumper         docker-mydumper containerizes MySQL logical \u2026   <span class="token number">3</span>                    
mysqlboy/mydumper                mydumper <span class="token keyword">for</span> mysql logcial backups              <span class="token number">3</span>                    
bitnami/mysqld-exporter                                                          <span class="token number">2</span>                    
ibmcom/mysql-s390x               Docker image <span class="token keyword">for</span> mysql-s390x                    <span class="token number">1</span>                    
mysqlboy/percona-server          Percona-Server a MySQL Fork with enhancement\u2026   <span class="token number">1</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
mirantis/mysql                                                                   <span class="token number">0</span>                    
mysql/mysql-operator             MySQL Operator <span class="token keyword">for</span> Kubernetes                   <span class="token number">0</span>                    
ibmcom/tidb-ppc64le              TiDB is a distributed NewSQL database compat\u2026   <span class="token number">0</span>                    
mysqlboy/elasticsearch                                                           <span class="token number">0</span>                    
mysqleatmydata/mysql-eatmydata                                                   <span class="token number">0</span>                    
cimg/mysql                                                                       <span class="token number">0</span>                    
mysql/ndb-operator               MySQL NDB Operator <span class="token keyword">for</span> Kubernetes               <span class="token number">0</span>                    

<span class="token comment"># \u53EF\u9009\u9879\uFF0C\u901A\u8FC7\u6536\u85CF\u6570\u6765\u8FC7\u6EE4</span>
 --filter<span class="token operator">=</span>STARS<span class="token operator">=</span><span class="token number">3000</span> <span class="token comment">#\u641C\u7D22\u51FA\u6765\u7684\u955C\u50CF\u5C31\u662FSTARS\u5927\u4E8E3000\u7684</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p><strong>docker pull \u4E0B\u8F7D\u955C\u50CF</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u4E0B\u8F7D\u955C\u50CF docker pull \u955C\u50CF\u540D[:tag]</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker pull mysql</span>
Using default tag: latest <span class="token comment">#\u5982\u679C\u4E0D\u5199tag\uFF0C\u9ED8\u8BA4\u5C31\u662Flastest</span>
latest: Pulling from library/mysql
72a69066d2fe: Pull complete  <span class="token comment"># \u5206\u5C42\u4E0B\u8F7D\uFF0Cdocker images\u6838\u5FC3 \u8054\u5408\u6587\u4EF6\u7CFB\u7EDF</span>
93619dbc5b36: Pull complete 
99da31dd6142: Pull complete 
626033c43d70: Pull complete 
37d5d7efb64e: Pull complete 
ac563158d721: Pull complete 
d2ba16033dad: Pull complete 
688ba7d5c01a: Pull complete 
00e060b6d11d: Pull complete 
1c04857f594f: Pull complete 
4d7cfa90e6ea: Pull complete 
e0431212d27d: Pull complete 
Digest: sha256:e9027fe4d91c0153429607251656806cc784e914937271037f7738bd5b8e7709 <span class="token comment">#\u7B7E\u540D</span>
Status: Downloaded newer image <span class="token keyword">for</span> mysql:latest
docker.io/library/mysql:latest <span class="token comment">#\u771F\u5B9E\u5730\u5740</span>

<span class="token comment"># \u7B49\u4EF7\u4E8E\u4ED6</span>
<span class="token function">docker</span> pull mysql
<span class="token function">docker</span> pull docker.io/library/mysql:lastest

<span class="token comment"># \u6307\u5B9A\u7248\u672C\u4E0B\u8F7D</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker pull mysql:5.7</span>
<span class="token number">5.7</span>: Pulling from library/mysql
72a69066d2fe: Already exists 
93619dbc5b36: Already exists 
99da31dd6142: Already exists 
626033c43d70: Already exists 
37d5d7efb64e: Already exists 
ac563158d721: Already exists 
d2ba16033dad: Already exists 
0ceb82207cd7: Pull complete 
37f2405cae96: Pull complete 
e2482e017e53: Pull complete 
70deed891d42: Pull complete 
Digest: sha256:f2ad209efe9c67104167fc609cca6973c8422939491c9345270175a300419f94
Status: Downloaded newer image <span class="token keyword">for</span> mysql:5.7
docker.io/library/mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p><strong>docker rmi</strong> \u5220\u9664\u955C\u50CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> rmi -f c20987f18b13  <span class="token comment">#\u5220\u9664\u6307\u5B9A\u7684\u5BB9\u5668id</span>
<span class="token function">docker</span> rmi -f \u5BB9\u5668id \u5BB9\u5668id \u5BB9\u5668id \u5BB9\u5668id  <span class="token comment">#\u5220\u9664\u591A\u4E2A\u5BB9\u5668</span>
<span class="token function">docker</span> rmi -f <span class="token punctuation">(</span>docker images -aq<span class="token punctuation">)</span>  <span class="token comment">#\u5220\u9664\u5168\u90E8\u7684\u5BB9\u5668</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u5BB9\u5668\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668\u547D\u4EE4" aria-hidden="true">#</a> \u5BB9\u5668\u547D\u4EE4</h3><p><strong>\u8BF4\u660E\uFF1A\u6211\u4EEC\u6709\u4E86\u955C\u50CF\u624D\u53EF\u4EE5\u521B\u5EFA\u5BB9\u5668\uFF0Clinux\uFF0C\u4E0B\u8F7D\u4E00\u4E2Acentos\u955C\u50CF\u6765\u6D4B\u8BD5\u5B66\u4E60</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker pull centos
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>\u65B0\u5EFA\u5BB9\u5668\u5E76\u542F\u52A8</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker pull centos</span>
Using default tag: latest
latest: Pulling from library/centos
a1d0c7532777: Pull complete 
Digest: sha256:a27fd8080b517143cbbbab9dfb7c8571c40d67d534bbdee55bd6c473f432b177
Status: Downloaded newer image <span class="token keyword">for</span> centos:latest
docker.io/library/centos:latest

<span class="token function">docker</span> run <span class="token punctuation">[</span>\u53EF\u9009\u53C2\u6570<span class="token punctuation">]</span> image
<span class="token comment">#\u53C2\u6570\u8BF4\u660E</span>
--name<span class="token operator">=</span><span class="token string">&quot;Name&quot;</span> \u5BB9\u5668\u540D\u5B57 tomcat01 tomcat02 \u7528\u6765\u533A\u5206\u5BB9\u5668
-d \u540E\u53F0\u65B9\u5F0F\u5141\u8BB8\uFF0Cja <span class="token function">nohup</span>
-it \u4F7F\u7528\u4EA4\u4E92\u65B9\u5F0F\u8FD0\u884C\uFF0C\u8FDB\u5165\u5BB9\u5668\u67E5\u770B\u5185\u5BB9
-p \u6307\u5B9A\u5BB9\u5668\u7684\u7AEF\u53E3 -p <span class="token number">8080</span>:8080
	-p ip:\u4E3B\u673A\u7AEF\u53E3:\u5BB9\u5668\u7AEF\u53E3
	-p \u4E3B\u673A\u7AEF\u53E3:\u5BB9\u5668\u7AEF\u53E3 <span class="token punctuation">(</span>\u5E38\u7528<span class="token punctuation">)</span>
	-p \u5BB9\u5668\u7AEF\u53E3
	\u5BB9\u5668\u7AEF\u53E3
-p  \u968F\u673A\u6307\u5B9A\u7AEF\u53E3

<span class="token comment"># \u6D4B\u8BD5\uFF0C\u542F\u52A8\u5E76\u8FDB\u5165\u5BB9\u5668</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker run -it centos /bin/bash</span>
<span class="token punctuation">[</span>root@5f045960c6b5 /<span class="token punctuation">]</span><span class="token comment"># ls #\u67E5\u770B\u5BB9\u5668\u5185\u7684centos,\u57FA\u7840\u7248\u672C\uFF0C\u5F88\u591A\u547D\u4EE4\u90FD\u662F\u4E0D\u5B8C\u5584\u7684</span>
bin  etc   lib    lost+found  mnt  proc  run   srv  tmp  var
dev  home  lib64  media       opt  root  sbin  sys  usr

<span class="token comment">#\u4ECE\u5BB9\u5668\u4E2D\u9000\u56DE\u4E3B\u673A</span>
<span class="token punctuation">[</span>root@5f045960c6b5 /<span class="token punctuation">]</span><span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p><strong>\u5217\u51FA\u6240\u6709\u7684\u8FD0\u884C\u7684\u5BB9\u5668</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#docker ps\u547D\u4EE4</span>
	<span class="token comment"># \u5217\u51FA\u5F53\u524D\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668</span>
-a  <span class="token comment"># \u5217\u51FA\u5F53\u524D\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668+\u5E26\u51FA\u5386\u53F2\u8FD0\u884C\u8FC7\u7684\u5BB9\u5668</span>
-n<span class="token operator">=</span>? <span class="token comment">#\u663E\u793A\u6700\u8FD1\u521B\u5EFA\u7684\u5BB9\u5668</span>
-q <span class="token comment">#\u663E\u793A\u5BB9\u5668\u7684\u7F16\u53F7</span>

<span class="token punctuation">[</span>root@VM-20-12-centos /<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
<span class="token punctuation">[</span>root@VM-20-12-centos /<span class="token punctuation">]</span><span class="token comment"># docker ps -a</span>
CONTAINER ID   IMAGE          COMMAND       CREATED         STATUS                     PORTS     NAMES
5f045960c6b5   centos         <span class="token string">&quot;/bin/bash&quot;</span>   <span class="token number">9</span> minutes ago   Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">2</span> minutes ago             vigorous_chatterjee
9f6b56f6f3d8   feb5d9fea6a5   <span class="token string">&quot;/hello&quot;</span>      <span class="token number">24</span> hours ago    Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">24</span> hours ago              hardcore_heisenberg
<span class="token punctuation">[</span>root@VM-20-12-centos /<span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><strong>\u9000\u51FA\u5BB9\u5668</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">exit</span> <span class="token comment">#\u76F4\u63A5\u5BB9\u5668\u505C\u6B62\u5E76\u9000\u51FA</span>
Ctrl + P + Q <span class="token comment">#\u5BB9\u5668\u4E0D\u505C\u6B62\u9000\u51FA</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>\u5220\u9664\u5BB9\u5668</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> \u5BB9\u5668id      		<span class="token comment">#\u5220\u9664\u6307\u5B9A\u7684\u5BB9\u5668,\u4E0D\u80FD\u5220\u9664\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668\uFF0C\u5982\u679C\u8981\u5F3A\u5236\u5220\u9664\uFF0C\u90A3\u5C31\u662Frm -f</span>
<span class="token function">docker</span> <span class="token function">rm</span> -f <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> -aq<span class="token variable">)</span></span>			<span class="token comment">#\u5220\u9664\u6240\u6709\u7684\u5BB9\u5668</span>
<span class="token function">docker</span> <span class="token function">ps</span> -a -q<span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">docker</span> <span class="token function">rm</span> 		<span class="token comment">#\u5220\u9664\u6240\u6709\u7684\u5BB9\u5668</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u542F\u52A8\u548C\u505C\u6B62\u5BB9\u5668\u7684\u64CD\u4F5C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> start \u5BB9\u5668id  		<span class="token comment">#\u542F\u52A8\u5BB9\u5668</span>
<span class="token function">docker</span> restart \u5BB9\u5668id		<span class="token comment">#\u91CD\u542F\u5BB9\u5668</span>
<span class="token function">docker</span> stop \u5BB9\u5668id		<span class="token comment">#\u505C\u6B62\u5F53\u524D\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668</span>
<span class="token function">docker</span> <span class="token function">kill</span> \u5BB9\u5668id		<span class="token comment">#\u5F3A\u5236\u505C\u6B62\u5F53\u524D\u5BB9\u5668</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u5E38\u7528\u5176\u4ED6\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5176\u4ED6\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u5176\u4ED6\u547D\u4EE4</h3><p><strong>\u540E\u53F0\u542F\u52A8\u5BB9\u5668</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u547D\u4EE4 docker run -d \u955C\u50CF\u540D\uFF01</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker run -d centos</span>

<span class="token comment"># \u540C\u610Fdocker ps \uFF0C \u53D1\u73B0centos \u505C\u6B62\u4E86</span>

<span class="token comment"># \u5E38\u89C1\u7684\u5751\uFF0Cdocker\u5BB9\u5668\u4F7F\u7528\u540E\u53F0\u8FD0\u884C\uFF0C\u5C31\u5FC5\u987B\u8981\u6709\u4E00\u4E2A\u524D\u53F0\u8FDB\u7A0B\uFF0Cdocker\u53D1\u73B0\u6CA1\u6709\u5E94\u7528\uFF0C\u5C31\u4F1A\u81EA\u52A8\u505C\u6B62</span>
<span class="token comment"># nginx\uFF0C\u5BB9\u5668\u542F\u52A8\u540E\u53D1\u73B0\u81EA\u5DF1\u6CA1\u6709\u63D0\u4F9B\u670D\u52A1\uFF0C\u5C31\u4F1A\u7ACB\u523B\u505C\u6B62</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>\u67E5\u770B\u65E5\u5FD7</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> logs -f -t -tail \u5BB9\u5668\uFF0C\u6CA1\u6709\u65E5\u5FD7

<span class="token comment"># \u81EA\u5DF1\u7F16\u5199\u4E00\u4EFDshell\u811A\u672C</span>
<span class="token function">docker</span> run -d centos /bin/sh -c <span class="token string">&quot;while true;do echo kuangshen;sleep 1;done&quot;</span>

<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE
acbbce409432   centos

<span class="token comment"># \u663E\u793A\u65E5\u5FD7</span>
--tf
-tail number <span class="token comment">#\u8981\u663E\u793A\u7684\u65E5\u5FD7\u6761\u6570</span>
<span class="token function">docker</span> logs -f -t --tail <span class="token number">10</span> acbbce409432
<span class="token function">docker</span> logs -f -t acbbce409432
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><strong>\u67E5\u770B\u5BB9\u5668\u4E2D\u8FDB\u7A0B\u4FE1\u606F ps</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u547D\u4EE4 docker top \u5BB9\u5668id</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker top acbbce409432</span>
<span class="token environment constant">UID</span>                 PID                 <span class="token environment constant">PPID</span>                C                   STIME               TTY                 TIME     
root                <span class="token number">12369</span>               <span class="token number">12348</span>               <span class="token number">0</span>                   09:30               ?                   00:00:00 
root                <span class="token number">13715</span>               <span class="token number">12369</span>               <span class="token number">0</span>                   09:37               ?                   00:00:00 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>\u67E5\u770B\u955C\u50CF\u7684\u5143\u6570\u636E</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u547D\u4EE4</span>
<span class="token function">docker</span> inspect \u5BB9\u5668id

<span class="token comment"># \u6D4B\u8BD5</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker inspect acbbce409432</span>
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;Id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;acbbce409432a64d3451783a0b886d4d4f3ddd5b3b377e6b6b242311229b57d9&quot;</span>,
        <span class="token string">&quot;Created&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2022-03-31T01:30:58.780483328Z&quot;</span>,
        <span class="token string">&quot;Path&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/bin/sh&quot;</span>,
        <span class="token string">&quot;Args&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;-c&quot;</span>,
            <span class="token string">&quot;while true;do echo kuangshen;sleep 1;done&quot;</span>
        <span class="token punctuation">]</span>,
        <span class="token string">&quot;State&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Status&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;running&quot;</span>,
            <span class="token string">&quot;Running&quot;</span><span class="token builtin class-name">:</span> true,
            <span class="token string">&quot;Paused&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Restarting&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;OOMKilled&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Dead&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Pid&quot;</span><span class="token builtin class-name">:</span> <span class="token number">12369</span>,
            <span class="token string">&quot;ExitCode&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;Error&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;StartedAt&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2022-03-31T01:30:59.127659538Z&quot;</span>,
            <span class="token string">&quot;FinishedAt&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0001-01-01T00:00:00Z&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;Image&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;sha256:5d0da3dc976460b72c77d94c8a1ad043720b0416bfc16c52c45d4847e53fadb6&quot;</span>,
        <span class="token string">&quot;ResolvConfPath&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/containers/acbbce409432a64d3451783a0b886d4d4f3ddd5b3b377e6b6b242311229b57d9/resolv.conf&quot;</span>,
        <span class="token string">&quot;HostnamePath&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/containers/acbbce409432a64d3451783a0b886d4d4f3ddd5b3b377e6b6b242311229b57d9/hostname&quot;</span>,
        <span class="token string">&quot;HostsPath&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/containers/acbbce409432a64d3451783a0b886d4d4f3ddd5b3b377e6b6b242311229b57d9/hosts&quot;</span>,
        <span class="token string">&quot;LogPath&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/containers/acbbce409432a64d3451783a0b886d4d4f3ddd5b3b377e6b6b242311229b57d9/acbbce409432a64d3451783a0b886d4d4f3ddd5b3b377e6b6b242311229b57d9-json.log&quot;</span>,
        <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/nifty_mcclintock&quot;</span>,
        <span class="token string">&quot;RestartCount&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
        <span class="token string">&quot;Driver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;overlay2&quot;</span>,
        <span class="token string">&quot;Platform&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;linux&quot;</span>,
        <span class="token string">&quot;MountLabel&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;ProcessLabel&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;AppArmorProfile&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;ExecIDs&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;HostConfig&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Binds&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;ContainerIDFile&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;LogConfig&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;Type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;json-file&quot;</span>,
                <span class="token string">&quot;Config&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;NetworkMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;default&quot;</span>,
            <span class="token string">&quot;PortBindings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
            <span class="token string">&quot;RestartPolicy&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;no&quot;</span>,
                <span class="token string">&quot;MaximumRetryCount&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;AutoRemove&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;VolumeDriver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;VolumesFrom&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;CapAdd&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;CapDrop&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;CgroupnsMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;host&quot;</span>,
            <span class="token string">&quot;Dns&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;DnsOptions&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;DnsSearch&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;ExtraHosts&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;GroupAdd&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;IpcMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;private&quot;</span>,
            <span class="token string">&quot;Cgroup&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;Links&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;OomScoreAdj&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;PidMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;Privileged&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;PublishAllPorts&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;ReadonlyRootfs&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;SecurityOpt&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;UTSMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;UsernsMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;ShmSize&quot;</span><span class="token builtin class-name">:</span> <span class="token number">67108864</span>,
            <span class="token string">&quot;Runtime&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;runc&quot;</span>,
            <span class="token string">&quot;ConsoleSize&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token number">0</span>,
                <span class="token number">0</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;Isolation&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;CpuShares&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;Memory&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;NanoCpus&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CgroupParent&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;BlkioWeight&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;BlkioWeightDevice&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;BlkioDeviceReadBps&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;BlkioDeviceWriteBps&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;BlkioDeviceReadIOps&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;BlkioDeviceWriteIOps&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;CpuPeriod&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CpuQuota&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CpuRealtimePeriod&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CpuRealtimeRuntime&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CpusetCpus&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;CpusetMems&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;Devices&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;DeviceCgroupRules&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;DeviceRequests&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;KernelMemory&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;KernelMemoryTCP&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;MemoryReservation&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;MemorySwap&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;MemorySwappiness&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;OomKillDisable&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;PidsLimit&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;Ulimits&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;CpuCount&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CpuPercent&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;IOMaximumIOps&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;IOMaximumBandwidth&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;MaskedPaths&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;/proc/asound&quot;</span>,
                <span class="token string">&quot;/proc/acpi&quot;</span>,
                <span class="token string">&quot;/proc/kcore&quot;</span>,
                <span class="token string">&quot;/proc/keys&quot;</span>,
                <span class="token string">&quot;/proc/latency_stats&quot;</span>,
                <span class="token string">&quot;/proc/timer_list&quot;</span>,
                <span class="token string">&quot;/proc/timer_stats&quot;</span>,
                <span class="token string">&quot;/proc/sched_debug&quot;</span>,
                <span class="token string">&quot;/proc/scsi&quot;</span>,
                <span class="token string">&quot;/sys/firmware&quot;</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;ReadonlyPaths&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;/proc/bus&quot;</span>,
                <span class="token string">&quot;/proc/fs&quot;</span>,
                <span class="token string">&quot;/proc/irq&quot;</span>,
                <span class="token string">&quot;/proc/sys&quot;</span>,
                <span class="token string">&quot;/proc/sysrq-trigger&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;GraphDriver&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Data&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;LowerDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/106727a1665ecea56037029c88c484b65bff8d3737f46c2fb3f8dac94fcb714f-init/diff:/var/lib/docker/overlay2/61e240a1305ae23db02c51a923ea5cdc363b88ab286b8742960df76f954fa858/diff&quot;</span>,
                <span class="token string">&quot;MergedDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/106727a1665ecea56037029c88c484b65bff8d3737f46c2fb3f8dac94fcb714f/merged&quot;</span>,
                <span class="token string">&quot;UpperDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/106727a1665ecea56037029c88c484b65bff8d3737f46c2fb3f8dac94fcb714f/diff&quot;</span>,
                <span class="token string">&quot;WorkDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/106727a1665ecea56037029c88c484b65bff8d3737f46c2fb3f8dac94fcb714f/work&quot;</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;overlay2&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;Mounts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
        <span class="token string">&quot;Config&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Hostname&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;acbbce409432&quot;</span>,
            <span class="token string">&quot;Domainname&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;User&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;AttachStdin&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;AttachStdout&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;AttachStderr&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Tty&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;OpenStdin&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;StdinOnce&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Env&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin&quot;</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;Cmd&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;/bin/sh&quot;</span>,
                <span class="token string">&quot;-c&quot;</span>,
                <span class="token string">&quot;while true;do echo kuangshen;sleep 1;done&quot;</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;Image&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;centos&quot;</span>,
            <span class="token string">&quot;Volumes&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;WorkingDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;Entrypoint&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;OnBuild&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;Labels&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;org.label-schema.build-date&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;20210915&quot;</span>,
                <span class="token string">&quot;org.label-schema.license&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;GPLv2&quot;</span>,
                <span class="token string">&quot;org.label-schema.name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;CentOS Base Image&quot;</span>,
                <span class="token string">&quot;org.label-schema.schema-version&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1.0&quot;</span>,
                <span class="token string">&quot;org.label-schema.vendor&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;CentOS&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;NetworkSettings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Bridge&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;SandboxID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;f03f18d8a4106125a6c3a6191ee72ebdb565464706e149267f314b80dcce913b&quot;</span>,
            <span class="token string">&quot;HairpinMode&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;LinkLocalIPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;LinkLocalIPv6PrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;Ports&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
            <span class="token string">&quot;SandboxKey&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/run/docker/netns/f03f18d8a410&quot;</span>,
            <span class="token string">&quot;SecondaryIPAddresses&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;SecondaryIPv6Addresses&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;EndpointID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;adbcc0aa7557ec0a767e8ee424e11f7cf4fc82e0276fadf8c7e26711af31dcb6&quot;</span>,
            <span class="token string">&quot;Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.1&quot;</span>,
            <span class="token string">&quot;GlobalIPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;GlobalIPv6PrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;IPAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.2&quot;</span>,
            <span class="token string">&quot;IPPrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">16</span>,
            <span class="token string">&quot;IPv6Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;MacAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;02:42:ac:11:00:02&quot;</span>,
            <span class="token string">&quot;Networks&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;bridge&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">&quot;IPAMConfig&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;Links&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;Aliases&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;NetworkID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;4eefc94447592519bf9abebaa9c39360fdfbd15a44611b51e9c39f190b2ac14e&quot;</span>,
                    <span class="token string">&quot;EndpointID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;adbcc0aa7557ec0a767e8ee424e11f7cf4fc82e0276fadf8c7e26711af31dcb6&quot;</span>,
                    <span class="token string">&quot;Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.1&quot;</span>,
                    <span class="token string">&quot;IPAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.2&quot;</span>,
                    <span class="token string">&quot;IPPrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">16</span>,
                    <span class="token string">&quot;IPv6Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;GlobalIPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;GlobalIPv6PrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
                    <span class="token string">&quot;MacAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;02:42:ac:11:00:02&quot;</span>,
                    <span class="token string">&quot;DriverOpts&quot;</span><span class="token builtin class-name">:</span> null
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br></div></div><p><strong>\u8FDB\u5165\u5F53\u524D\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6211\u4EEC\u901A\u5E38\u5BB9\u5668\u90FD\u662F\u4F7F\u7528\u540E\u53F0\u65B9\u5F0F\u8FD0\u884C\u7684\uFF0C\u9700\u8981\u8FDB\u5165\u5BB9\u5668\uFF0C\u4FEE\u6539\u4E00\u4E9B\u914D\u7F6E</span>

<span class="token comment"># \u547D\u4EE4</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it \u5BB9\u5668id

<span class="token comment">#\u6D4B\u8BD5</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS     NAMES
acbbce409432   centos    <span class="token string">&quot;/bin/sh -c &#39;while t\u2026&quot;</span>   <span class="token number">16</span> minutes ago   Up <span class="token number">16</span> minutes             nifty_mcclintock

<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it acbbce409432 /bin/bash</span>
<span class="token punctuation">[</span>root@acbbce409432 /<span class="token punctuation">]</span><span class="token comment"># ls</span>
bin  dev  etc  home  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
<span class="token punctuation">[</span>root@acbbce409432 /<span class="token punctuation">]</span><span class="token comment"># ps -ef</span>
<span class="token environment constant">UID</span>        PID  <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root         <span class="token number">1</span>     <span class="token number">0</span>  <span class="token number">0</span> 01:30 ?        00:00:00 /bin/sh -c <span class="token keyword">while</span> <span class="token boolean">true</span><span class="token punctuation">;</span><span class="token keyword">do</span> <span class="token builtin class-name">echo</span> kuangshen<span class="token punctuation">;</span><span class="token function">sleep</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token keyword">done</span>
root      <span class="token number">1033</span>     <span class="token number">0</span>  <span class="token number">0</span> 01:48 pts/0    00:00:00 /bin/bash
root      <span class="token number">1056</span>     <span class="token number">1</span>  <span class="token number">0</span> 01:48 ?        00:00:00 /usr/bin/coreutils --coreutils-prog-shebang<span class="token operator">=</span>sleep /usr/bin/sleep <span class="token number">1</span>
root      <span class="token number">1057</span>  <span class="token number">1033</span>  <span class="token number">0</span> 01:48 pts/0    00:00:00 <span class="token function">ps</span> -ef


<span class="token comment"># \u65B9\u5F0F2</span>
<span class="token function">docker</span> attach \u5BB9\u5668id
<span class="token comment"># \u6D4B\u8BD5</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker attach acbbce409432</span>
\u6B63\u5728\u6267\u884C\u5F53\u524D\u7684\u4EE3\u7801\u2026\u2026


<span class="token comment"># docker exec  # \u8FDB\u5165\u5BB9\u5668\u540E\u5F00\u542F\u4E00\u4E2A\u65B0\u7684\u7EC8\u7AEF\uFF0C\u53EF\u4EE5\u5728\u91CC\u9762\u64CD\u4F5C\uFF08\u5E38\u7528\uFF09</span>
<span class="token comment"># docker attach # \u8FDB\u5165\u5BB9\u5668\u6B63\u5728\u6267\u884C\u7684\u7EC8\u7AEF\uFF0C\u4E0D\u4F1A\u542F\u52A8\u65B0\u7684\u8FDB\u7A0B\uFF01</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p><strong>\u4ECE\u5BB9\u5668\u5185\u62F7\u8D1D\u6587\u4EF6\u5230\u4E3B\u673A\u4E0A\u9762</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> \u5BB9\u5668id:\u5BB9\u5668\u5185\u8DEF\u5F84 \u76EE\u7684\u7684\u4E3B\u673A\u8DEF\u5F84

<span class="token comment"># \u67E5\u770B\u5F53\u524D\u4E3B\u673A\u76EE\u5F55\u4E0B</span>
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># ls</span>
lighthouse
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># touch kuangshen.java</span>
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># ls</span>
kuangshen.java  lighthouse
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE     COMMAND       CREATED              STATUS              PORTS     NAMES
273b51b28214   centos    <span class="token string">&quot;/bin/bash&quot;</span>   About a minute ago   Up About a minute             pedantic_kalam

<span class="token comment">#\u8FDB\u5165docker\u5BB9\u5668\u5185\u90E8</span>
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker attach 273b51b28214</span>
<span class="token punctuation">[</span>root@273b51b28214 /<span class="token punctuation">]</span><span class="token comment"># cd /home      </span>
<span class="token punctuation">[</span>root@273b51b28214 home<span class="token punctuation">]</span><span class="token comment"># ls</span>
<span class="token comment">#\u5728\u5BB9\u5668\u5185\u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6</span>
<span class="token punctuation">[</span>root@273b51b28214 home<span class="token punctuation">]</span><span class="token comment"># touch test.java</span>
<span class="token punctuation">[</span>root@273b51b28214 home<span class="token punctuation">]</span><span class="token comment"># ls</span>
test.java
<span class="token punctuation">[</span>root@273b51b28214 home<span class="token punctuation">]</span><span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker ps -a</span>
CONTAINER ID   IMAGE     COMMAND       CREATED         STATUS                     PORTS     NAMES
273b51b28214   centos    <span class="token string">&quot;/bin/bash&quot;</span>   <span class="token number">3</span> minutes ago   Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">8</span> seconds ago             pedantic_kalam

<span class="token comment">#\u5C06\u6587\u4EF6\u62F7\u8D1D\u51FA\u6765\u5230\u4E3B\u673A\u4E0A</span>
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker cp 273b51b28214:/home/test.java /home</span>
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># ls</span>
kuangshen.java  lighthouse  test.java

<span class="token comment">#\u62F7\u8D1D\u662F\u4E00\u4E2A\u624B\u52A8\u8FC7\u7A0B\uFF0C\u672A\u6765\u6211\u4EEC\u4F7F\u7528-v\u5377\u7684\u6280\u672F\uFF0C\u53EF\u4EE5\u5B9E\u73B0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h3 id="\u4F5C\u4E1A\u7EC3\u4E60" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u4E1A\u7EC3\u4E60" aria-hidden="true">#</a> \u4F5C\u4E1A\u7EC3\u4E60</h3><blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Docker\u5B89\u88C5Nginx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1\u3001\u641C\u7D22\u955C\u50CF search \u5EFA\u8BAE\u5927\u5BB6\u53BBdocker\u641C\u7D22\uFF0C\u53EF\u4EE5\u770B\u5230\u5E2E\u52A9\u6587\u6863\u4FE1\u606F</span>
<span class="token comment"># 2\u3001\u4E0B\u8F7D\u955C\u50CF pull</span>
<span class="token comment"># 3\u3001\u8FD0\u884C\u6D4B\u8BD5</span>
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY   TAG       IMAGE ID       CREATED        SIZE
nginx        latest    605c77e624dd   <span class="token number">3</span> months ago   141MB
centos       latest    5d0da3dc9764   <span class="token number">6</span> months ago   231MB

<span class="token comment"># -d \u540E\u53F0\u8FD0\u884C</span>
<span class="token comment"># --name \u7ED9\u5BB9\u5668\u547D\u540D</span>
<span class="token comment"># -p \u5BBF\u4E3B\u673A\u7AEF\u53E3\uFF0C\u5BB9\u5668\u5185\u90E8\u7AEF\u53E3</span>
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker run -d --name nginx01 -p:3344:80 nginx</span>
4d4cce91ea060476505435c23d7d0a6af2d6e6d3f0ea4ecc00314088ef805668
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                                   NAMES
4d4cce91ea06   nginx     <span class="token string">&quot;/docker-entrypoint.\u2026&quot;</span>   <span class="token number">3</span> seconds ago   Up <span class="token number">2</span> seconds   <span class="token number">0.0</span>.0.0:3344-<span class="token operator">&gt;</span><span class="token number">80</span>/tcp, :::3344-<span class="token operator">&gt;</span><span class="token number">80</span>/tcp   nginx01
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># curl localhost:3344</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Docker\u5B89\u88C5tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5B98\u65B9\u7684\u4F7F\u7528</span>
<span class="token function">docker</span> run -it --rm tomcat:9.0

<span class="token comment">#\u6211\u4EEC\u4E4B\u524D\u7684\u542F\u52A8\u90FD\u662F\u540E\u53F0\uFF0C\u505C\u6B62\u4E86\u5BB9\u5668\u4E4B\u540E\uFF0C\u5BB9\u5668\u8FD8\u662F\u53EF\u4EE5\u67E5\u5230 docker run -it --rm ,\u4E00\u822C\u90FD\u662F\u7528\u6765\u8C03\u8BD5\uFF0C\u7528\u5B8C\u5C31\u5220\u9664</span>

<span class="token comment">#\u4E0B\u8F7D\u518D\u542F\u52A8</span>
<span class="token function">docker</span> pull tomcat:9.0

<span class="token comment">#\u542F\u52A8\u8FD0\u884C</span>
<span class="token function">docker</span> run -d -p <span class="token number">3355</span>:8080 --name tomcat01 tomcat

<span class="token comment">#\u6D4B\u8BD5\u8BBF\u95EE\u6CA1\u6709\u95EE\u9898</span>

<span class="token comment">#\u8FDB\u5165\u5BB9\u5668</span>
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker exec -it tomcat01 /bin/bash</span>

<span class="token comment">#\u53D1\u73B0\u95EE\u9898\uFF1A1\u3001linux\u547D\u4EE4\u5C11\u4E86 2\u3001\u6CA1\u6709webapps\uFF0C\u963F\u91CC\u4E91\u955C\u50CF\u7684\u539F\u56E0\uFF0C\u9ED8\u8BA4\u6700\u5C0F\u7684\u955C\u50CF\uFF0C\u6240\u4EE5\u4E0D\u5FC5\u8981\u7684\u90FD\u5254\u9664\u6389</span>
<span class="token comment">#\u4FDD\u8BC1\u6700\u5C0F\u53EF\u8FD0\u884C\u7684\u73AF\u5883</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u601D\u8003\u95EE\u9898\uFF1A\u6211\u4EEC\u4EE5\u540E\u8981\u90E8\u7F72\u9879\u76EE\uFF0C\u5982\u679C\u6BCF\u6B21\u90FD\u8981\u8FDB\u5165\u5BB9\u5668\u662F\u4E0D\u662F\u5341\u5206\u9EBB\u70E6\uFF0C\u6211\u8981\u662F\u53EF\u4EE5\u5728\u5BB9\u5668\u5916\u90E8\u63D0\u4F9B\u4E00\u4E2A\u6620\u5C04\u8DEF\u5F84\uFF0Cwebapps\uFF0C\u6211\u4EEC\u5728\u5916\u90E8\u653E\u7F6E\u9879\u76EE\uFF0C\u5C31\u81EA\u52A8\u540C\u6B65\u5230\u5185\u90E8\u5C31\u597D\u4E86\uFF01</p><p>docker \u5BB9\u5668 tomcat+\u7F51\u7AD9 docker mysql</p><blockquote><p>\u4F5C\u4E1A\uFF1A\u90E8\u7F72ES+kibana</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># es \u66B4\u9732\u7684\u7AEF\u53E3\u5F88\u591A</span>
<span class="token comment"># es \u5341\u5206\u7684\u8017\u5185\u5B58</span>
<span class="token comment"># es\u7684\u6570\u636E\u4E00\u822C\u9700\u8981\u653E\u7F6E\u5728\u5B89\u5168\u76EE\u5F55\uFF01\u6302\u5728</span>
<span class="token comment"># --net somenetword ? \u7F51\u7EDC\u914D\u7F6E</span>
<span class="token function">docker</span> run -d --name elasticsearch -p <span class="token number">9200</span>:9200 -p <span class="token number">9300</span>:9300 -e <span class="token string">&quot;discovery.type=single-node&quot;</span> elasticsearch:7.6.2

<span class="token comment"># \u542F\u52A8\u4E86 linux\u670D\u52A1\u5668\u5C31\u5361\u4E86 docker stats \u67E5\u770Bcpu\u7684\u72B6\u6001</span>

<span class="token comment"># \u67E5\u770B docker stats</span>

<span class="token comment"># \u6D4B\u8BD5\u4E00\u4E0Bes\u662F\u5426\u6210\u529F\u4E86</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># curl localhost:9200</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;d2dd61560321&quot;</span>,
  <span class="token string">&quot;cluster_name&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;docker-cluster&quot;</span>,
  <span class="token string">&quot;cluster_uuid&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;nq6X5lh6RXSp3regQuqbLA&quot;</span>,
  <span class="token string">&quot;version&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;number&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;7.6.2&quot;</span>,
    <span class="token string">&quot;build_flavor&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;default&quot;</span>,
    <span class="token string">&quot;build_type&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;docker&quot;</span>,
    <span class="token string">&quot;build_hash&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;ef48eb35cf30adf4db14086e8aabd07ef6fb113f&quot;</span>,
    <span class="token string">&quot;build_date&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;2020-03-26T06:34:37.794943Z&quot;</span>,
    <span class="token string">&quot;build_snapshot&quot;</span> <span class="token builtin class-name">:</span> false,
    <span class="token string">&quot;lucene_version&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;8.4.0&quot;</span>,
    <span class="token string">&quot;minimum_wire_compatibility_version&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;6.8.0&quot;</span>,
    <span class="token string">&quot;minimum_index_compatibility_version&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;6.0.0-beta1&quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;tagline&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;You Know, for Search&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment"># \u8D76\u7D27\u5173\u95ED\uFF0C\u589E\u52A0\u5185\u5B58\u7684\u9650\u5236</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8D76\u7D27\u5173\u95ED\uFF0C\u589E\u52A0\u5185\u5B58\u7684\u9650\u5236\uFF0C\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6 -e \u73AF\u5883\u914D\u7F6E\u4FEE\u6539
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e &quot;discovery.type=single-node&quot; -e ES_JAVA_OPTS=&quot;-Xms64m -Xms512m&quot; elasticsearch:7.6.2</p><h3 id="\u53EF\u89C6\u5316" tabindex="-1"><a class="header-anchor" href="#\u53EF\u89C6\u5316" aria-hidden="true">#</a> \u53EF\u89C6\u5316</h3><ul><li>portainer(\u5148\u7528\u8FD9\u4E2A)</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run -d -p 8088:9000 \\
--restart=always -v /var/run/docker.sock:/var/run/docker.sock --privileged=true portainer/portainer
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>Rancher(CI/CD\u518D\u7528)</li></ul><p><strong>\u4EC0\u4E48portainer ?</strong></p><p>Docker\u56FE\u5F62\u5316\u754C\u9762\u7BA1\u7406\u5DE5\u5177\uFF01\u63D0\u4F9B\u4E00\u4E2A\u540E\u53F0\u9762\u677F\u4F9B\u6211\u4EEC\u64CD\u4F5C!</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run -d -p 8088:9000 portainer/portainer
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="docker\u955C\u50CF\u8BB2\u89E3" tabindex="-1"><a class="header-anchor" href="#docker\u955C\u50CF\u8BB2\u89E3" aria-hidden="true">#</a> Docker\u955C\u50CF\u8BB2\u89E3</h2><h3 id="\u955C\u50CF\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u955C\u50CF\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u955C\u50CF\u662F\u4EC0\u4E48</h3><p>\u955C\u50CF\u662F\u4E00\u79CD\u8F7B\u91CF\u7EA7\u3001\u53EF\u6267\u884C\u7684\u72EC\u7ACB\u8F6F\u4EF6\u5305\uFF0C\u7528\u6765\u6253\u5305\u8F6F\u4EF6\u8FD0\u884C\u73AF\u5883\u548C\u57FA\u4E8E\u8FD0\u884C\u73AF\u5883\u5F00\u53D1\u7684\u8F6F\u4EF6\uFF0C\u5B83\u5305\u542B\u8FD0\u884C\u67D0\u4E2A\u8F6F\u4EF6\u6240\u9700\u7684\u6240\u6709\u5185\u5BB9\uFF0C\u5305\u62EC\u4EE3\u7801\u3001\u8FD0\u884C\u65F6\u3001\u5E93\u3001\u73AF\u5883\u53D8\u91CF\u548C\u914D\u7F6E\u6587\u4EF6</p><p>\u6240\u6709\u7684\u5E94\u7528\uFF0C\u76F4\u63A5\u6253\u5305docker\u955C\u50CF\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u8DD1\u8D77\u6765</p><p>\u5982\u4F55\u5F97\u5230\u955C\u50CF</p><ul><li>\u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u4E0B\u8F7D</li><li>\u670B\u53CB\u62F7\u8D1D\u7ED9\u4F60</li><li>\u81EA\u5DF1\u5236\u4F5C\u4E00\u4E2A\u955C\u50CF</li></ul><h3 id="docker\u955C\u50CF\u52A0\u8F7D\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#docker\u955C\u50CF\u52A0\u8F7D\u539F\u7406" aria-hidden="true">#</a> Docker\u955C\u50CF\u52A0\u8F7D\u539F\u7406</h3><blockquote><p>UnionFS(\u8054\u5408\u6587\u4EF6\u7CFB\u7EDF)</p></blockquote><p>UnionFs\uFF08\u8054\u5408\u6587\u4EF6\u7CFB\u7EDF\uFF09\uFF1AUnion\u6587\u4EF6\u7CFB\u7EDF\uFF08UnionFs\uFF09\u662F\u4E00\u79CD\u5206\u5C42\u3001\u8F7B\u91CF\u7EA7\u5E76\u4E14\u9AD8\u6027\u80FD\u7684\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u4ED6\u652F\u6301\u5BF9\u6587\u4EF6\u7CFB\u7EDF\u7684\u4FEE\u6539\u4F5C\u4E3A\u4E00\u6B21\u63D0\u4EA4\u6765\u4E00\u5C42\u5C42\u7684\u53E0\u52A0\uFF0C\u540C\u65F6\u53EF\u4EE5\u5C06\u4E0D\u540C\u76EE\u5F55\u6302\u8F7D\u5230\u540C\u4E00\u4E2A\u865A\u62DF\u6587\u4EF6\u7CFB\u7EDF\u4E0B\uFF08 unite several directories into a single virtual filesystem)\u3002Union\u6587\u4EF6\u7CFB\u7EDF\u662F Docker\u955C\u50CF\u7684\u57FA\u7840\u3002\u955C\u50CF\u53EF\u4EE5\u901A\u8FC7\u5206\u5C42\u6765\u8FDB\u884C\u7EE7\u627F\uFF0C\u57FA\u4E8E\u57FA\u7840\u955C\u50CF\uFF08\u6CA1\u6709\u7236\u955C\u50CF\uFF09\uFF0C\u53EF\u4EE5\u5236\u4F5C\u5404\u79CD\u5177\u4F53\u7684\u5E94\u7528\u955C\u50CF \u7279\u6027\uFF1A\u4E00\u6B21\u540C\u65F6\u52A0\u8F7D\u591A\u4E2A\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u4F46\u4ECE\u5916\u9762\u770B\u8D77\u6765\uFF0C\u53EA\u80FD\u770B\u5230\u4E00\u4E2A\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u8054\u5408\u52A0\u8F7D\u4F1A\u628A\u5404\u5C42\u6587\u4EF6\u7CFB\u7EDF\u53E0\u52A0\u8D77\u6765\uFF0C\u8FD9\u6837\u6700\u7EC8\u7684\u6587\u4EF6\u7CFB\u7EDF\u4F1A\u5305\u542B\u6240\u6709\u5E95\u5C42\u7684\u6587\u4EF6\u548C\u76EE\u5F55\u3002</p><blockquote><p>Docker\u955C\u50CF\u52A0\u8F7D\u539F\u7406</p></blockquote><p>docker\u7684\u955C\u50CF\u5B9E\u9645\u4E0A\u7531\u4E00\u5C42\u4E00\u5C42\u7684\u6587\u4EF6\u7CFB\u7EDF\u7EC4\u6210\uFF0C\u8FD9\u79CD\u5C42\u7EA7\u7684\u6587\u4EF6\u7CFB\u7EDFUnionFS\u3002 boots(boot file system\uFF09\u4E3B\u8981\u5305\u542B bootloader\u548C Kernel, bootloader\u4E3B\u8981\u662F\u5F15\u5BFC\u52A0 kernel, Linux\u521A\u542F\u52A8\u65F6\u4F1A\u52A0bootfs\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u5728 Docker\u955C\u50CF\u7684\u6700\u5E95\u5C42\u662F boots\u3002\u8FD9\u4E00\u5C42\u4E0E\u6211\u4EEC\u5178\u578B\u7684Linux/Unix\u7CFB\u7EDF\u662F\u4E00\u6837\u7684\uFF0C\u5305\u542Bboot\u52A0\u8F09\u5668\u548C\u5185\u6838\u3002\u5F53boot\u52A0\u8F7D\u5B8C\u6210\u4E4B\u540E\u6574\u4E2A\u5185\u6838\u5C31\u90FD\u5728\u5185\u5B58\u4E2D\u4E86\uFF0C\u6B64\u65F6\u5185\u5B58\u7684\u4F7F\u7528\u6743\u5DF2\u7531 bootfs\u8F6C\u4EA4\u7ED9\u5185\u6838\uFF0C\u6B64\u65F6\u7CFB\u7EDF\u4E5F\u4F1A\u5378\u8F7Dbootfs\u3002 rootfs\uFF08root file system),\u5728 bootfs\u4E4B\u4E0A\u3002\u5305\u542B\u7684\u5C31\u662F\u5178\u578B Linux\u7CFB\u7EDF\u4E2D\u7684/dev,/proc,/bin,/etc\u7B49\u6807\u51C6\u76EE\u5F55\u548C\u6587\u4EF6\u3002 rootfs\u5C31\u662F\u5404\u79CD\u4E0D\u540C\u7684\u64CD\u4F5C\u7CFB\u7EDF\u53D1\u884C\u7248\uFF0C\u6BD4\u5982 Ubuntu, Centos\u7B49\u7B49\u3002</p><h3 id="commit\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#commit\u955C\u50CF" aria-hidden="true">#</a> Commit\u955C\u50CF</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker commit \u63D0\u4EA4\u5BB9\u5668\u6210\u4E3A\u4E00\u4E2A\u65B0\u7684\u526F\u672C

docker commit -m=&quot;\u63D0\u4EA4\u7684\u63CF\u8FF0\u4FE1\u606F&quot; -a=&quot;\u4F5C\u8005&quot; \u5BB9\u5668id \u76EE\u6807\u955C\u50CF\u540D\uFF0C[TAG]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5B9E\u6218\u6D4B\u8BD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u542F\u52A8\u4E00\u4E2A\u9ED8\u8BA4\u7684tomcat

# \u53D1\u73B0\u8FD9\u4E2A\u9ED8\u8BA4\u7684tomcat \u662F\u6CA1\u6709webapps\u5E94\u7528\uFF0C \u955C\u50CF\u7684\u539F\u56E0\uFF0C\u5B98\u65B9\u7684\u955C\u50CF\u9ED8\u8BA4\u7684webapps\u4E0B\u9762\u662F\u6CA1\u6709\u6587\u4EF6\u7684

# \u6211\u81EA\u5DF1\u62F7\u8D1D\u8FDB\u53BB\u4E86\u57FA\u672C\u7684\u6587\u4EF6

# \u5C06\u6211\u4EEC\u64CD\u4F5C\u8FC7\u7684\u5BB9\u5668\u901A\u8FC7commit\u63D0\u4EA4\u4E3A\u4E00\u4E2A\u955C\u50CF\uFF01\u6211\u4EEC\u4EE5\u540E\u5C31\u4F7F\u7528\u6211\u4EEC\u4FEE\u6539\u8FC7\u7684\u955C\u50CF\u5373\u53EF
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220402100708034.png" alt="image-20220402100708034"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5982\u679C\u60F3\u4FDD\u5B58\u5F53\u524D\u5BB9\u5668\u72B6\u6001\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7commit\u63D0\u4EA4\u955C\u50CF
\u5C31\u597D\u6BD4\u6211\u4EEC\u4EE5\u524D\u5B66\u4E60VM\u7684\u65F6\u5019\uFF0C\u5FEB\u7167\uFF01
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5230\u4E86\u8FD9\u91CC\u624D\u7B97\u662F\u5165\u95E8docker\uFF01\u8BA4\u771F\u5438\u6536\u7EC3\u4E60</p><h2 id="\u5BB9\u5668\u6570\u636E\u5377" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668\u6570\u636E\u5377" aria-hidden="true">#</a> \u5BB9\u5668\u6570\u636E\u5377</h2><h3 id="\u4EC0\u4E48\u662F\u5BB9\u5668\u6570\u636E\u5377" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u5BB9\u5668\u6570\u636E\u5377" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u5BB9\u5668\u6570\u636E\u5377</h3><p><strong>docker\u7684\u7406\u5FF5\u56DE\u987E</strong></p><p>\u5C06\u5E94\u7528\u548C\u73AF\u5883\u6253\u5305\u6210\u4E00\u4E2A\u955C\u50CF\uFF01</p><p>\u6570\u636E\uFF1F\u5982\u679C\u6570\u636E\u90FD\u5728\u5BB9\u5668\u4E2D\uFF0C\u90A3\u4E48\u6211\u4EEC\u5BB9\u5668\u5220\u9664\uFF0C\u6570\u636E\u5C31\u4F1A\u4E22\u5931\uFF01\u9700\u6C42\uFF1A\u6570\u636E\u53EF\u4EE5\u6301\u4E45\u5316</p><p>Mysql\uFF0C\u5BB9\u5176\u5220\u4E86\uFF0C\u5220\u5E93\u8DD1\u8DEF\uFF01 \u9700\u6C42\uFF1AMySQL\u6570\u636E\u53EF\u4EE5\u5B58\u50A8\u5728\u672C\u5730\uFF01</p><p>\u5BB9\u5668\u4E4B\u95F4\u53EF\u4EE5\u6709\u4E00\u4E2A\u6570\u636E\u5171\u4EAB\u7684\u6280\u672F\uFF01Docker\u5BB9\u5668\u4E2D\u4EA7\u751F\u7684\u6570\u636E\uFF0C\u540C\u6B65\u5230\u672C\u5730\uFF01</p><p>\u8FD9\u5C31\u662F\u5377\u6280\u672F\uFF01\u76EE\u5F55\u7684\u6302\u8F7D\uFF0C\u5C06\u6211\u4EEC\u5BB9\u5668\u5185\u7684\u76EE\u5F55\uFF0C\u6302\u8F7D\u5230Linux\u4E0A\u9762\uFF01</p><h3 id="\u4F7F\u7528\u6570\u636E\u5377" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6570\u636E\u5377" aria-hidden="true">#</a> \u4F7F\u7528\u6570\u636E\u5377</h3><blockquote><p>\u65B9\u5F0F\u4E00\uFF1A\u76F4\u63A5\u4F7F\u7528\u547D\u4EE4\u6765\u6302\u8F7D -v</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run -it -v \u4E3B\u673A\u76EE\u5F55\uFF0C\u5BB9\u5668\u5185\u76EE\u5F55

# \u6D4B\u8BD5
[root@VM-20-12-centos home]# docker run -it -v /home/ceshi:/home centos /bin/bash

#\u542F\u52A8\u8D77\u6765\u65F6\u5019\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 docker inspect \u5BB9\u5668id
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220402103749798.png" alt="image-20220402103749798"></p><h3 id="\u5B9E\u6218-\u5B89\u88C5mysql" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u6218-\u5B89\u88C5mysql" aria-hidden="true">#</a> \u5B9E\u6218\uFF1A\u5B89\u88C5MySQL</h3><p>\u601D\u8003\uFF1AMySQL\u7684\u6570\u636E\u6301\u4E45\u5316\u7684\u95EE\u9898</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u83B7\u53D6\u955C\u50CF</span>
<span class="token function">docker</span> pull mysql:5.7

<span class="token comment"># \u8FD0\u884C\u5BB9\u5668\uFF0C\u9700\u8981\u505A\u6570\u636E\u6302\u8F7D\uFF01 #\u5B89\u88C5\u542F\u52A8mysql\uFF0C\u9700\u8981\u914D\u7F6E\u5BC6\u7801\u7684\uFF0C\u8FD9\u662F\u8981\u6CE8\u610F\u70B9</span>
<span class="token comment"># \u5B98\u65B9\u6D4B\u8BD5 docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d</span>

<span class="token comment">#\u542F\u52A8\u6211\u4EEC\u7684</span>
-d \u540E\u53F0\u8FD0\u884C
-p \u7AEF\u53E3\u6620\u5C04
-v \u5377\u6302\u8F7D
-e \u73AF\u5883\u914D\u7F6E
--name \u5BB9\u5668\u540D\u5B57
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker run -d -p 3310:3306 -v /home/mysql/conf:/etc/mysql/conf.d -v /home/mysql/data:/var/lib/mysql  -e MYSQL_ROOT_PASSWORD=123456 --name mysql01 mysql:5.7</span>

<span class="token comment"># \u542F\u52A8\u6210\u529F\u540E\u8FDE\u63A5\u670D\u52A1\u5668mysql\u6D4B\u8BD5</span>

<span class="token comment"># sqlyog-\u8FDE\u63A5\u5230\u670D\u52A1\u5668\u76843310 --- 3310\u548C\u5BB9\u5668\u5185\u76843306\u6620\u5C04\uFF0C\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u5C31\u53EF\u4EE5\u8FDE\u63A5\u4E0A\u4E86</span>

<span class="token comment"># \u5728\u672C\u5730\u6D4B\u8BD5\u521B\u5EFA\u4E00\u4E2A\u6570\u636E\u5E93\uFF0C\u67E5\u770B\u4E00\u4E0B\u6211\u4EEC\u6620\u5C04\u7684\u8DEF\u5F84\u662F\u5426ok!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u5047\u8BBE\u6211\u4EEC\u628A\u5BB9\u5668\u5220\u9664</p><p>\u6211\u4EEC\u6302\u8F7D\u5728\u672C\u5730\u7684\u6570\u636E\u5377\u4F9D\u65E7\u5B58\u5728</p><h3 id="\u5177\u540D\u548C\u533F\u540D\u6302\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u5177\u540D\u548C\u533F\u540D\u6302\u8F7D" aria-hidden="true">#</a> \u5177\u540D\u548C\u533F\u540D\u6302\u8F7D</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u533F\u540D\u6302\u8F7D</span>
-v \u5BB9\u5668\u5185\u8DEF\u5F84\uFF01
-P\uFF08\u968F\u673A\u6620\u5C04\u7AEF\u53E3\uFF09
<span class="token function">docker</span> run -d -P --name nginx01 -v /etc/nginx nginx

<span class="token comment"># \u67E5\u770B\u6240\u6709\u7684\u5377\u7684\u60C5\u51B5</span>
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker volume ls</span>
<span class="token comment"># \u8FD9\u91CC\u53D1\u73B0\uFF0C\u8FD9\u79CD\u5C31\u662F\u533F\u540D\u6302\u8F7D\uFF0C\u6211\u4EEC\u5728-v\u53EA\u5199\u4E86\u5BB9\u5668\u5185\u7684\u8DEF\u5F84\uFF0C\u6CA1\u6709\u5199\u5BB9\u5668\u5916\u7684\u8DEF\u5F84</span>

<span class="token comment">#\u5177\u540D\u6302\u8F7D</span>
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker volume ls</span>
DRIVER    VOLUME NAME
<span class="token builtin class-name">local</span>     9133f2eaab495f003ecce8473a2918e805047546ccd4af9a2ba6c9c77ae20011
<span class="token builtin class-name">local</span>     f5ce3ffcc02cd644c14733f31581816172507578d6ac8a1dff12832acb383ac3
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># ls</span>
ceshi  kuangshen.java  lighthouse  mysql  test.java
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker run -d -P --name nginx02 -v juming-nginx:/etc/nginx nginx</span>
2d016af29f1ba3c44971c2d0756c88b09a14194f48a0f355fc401190d31cee26
<span class="token punctuation">[</span>root@VM-20-12-centos home<span class="token punctuation">]</span><span class="token comment"># docker volume ls</span>
DRIVER    VOLUME NAME
<span class="token builtin class-name">local</span>     9133f2eaab495f003ecce8473a2918e805047546ccd4af9a2ba6c9c77ae20011
<span class="token builtin class-name">local</span>     f5ce3ffcc02cd644c14733f31581816172507578d6ac8a1dff12832acb383ac3
<span class="token builtin class-name">local</span>     juming-nginx

<span class="token comment"># \u901A\u8FC7-v \u5377\u540D\uFF1A\u5BB9\u5668\u5185\u8DEF\u5F84</span>
<span class="token comment"># \u67E5\u770B\u4E00\u4E0B\u8FD9\u4E2A\u5377</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220403095103559.png" alt="image-20220403095103559"></p><p>\u6240\u6709\u7684docker\u5BB9\u5668\u5185\u7684\u5377\uFF0C\u6CA1\u6709\u6307\u5B9A\u76EE\u5F55\u7684\u60C5\u51B5\u4E0B\u90FD\u662F\u5728 /var/lib/docker/volumes/xxxx/_data</p><p>\u6211\u4EEC\u901A\u8FC7\u5177\u540D\u6302\u8F7D\u53EF\u4EE5\u65B9\u4FBF\u7684\u627E\u5230\u6211\u4EEC\u7684\u4E00\u4E2A\u5377\uFF0C\u5927\u591A\u6570\u60C5\u51B5\u5728\u4F7F\u7528\u533F\u540D\u6302\u8F7D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5982\u4F55\u786E\u5B9A\u662F\u5177\u540D\u6302\u8F7D\u8FD8\u662F\u533F\u540D\u6302\u8F7D\uFF0C\u8FD8\u662F\u6307\u5B9A\u8DEF\u5F84\u6302\u8F7D\uFF01</span>
-v \u5BB9\u5668\u5185\u8DEF\u5F84 <span class="token comment">#\u533F\u540D\u6302\u8F7D</span>
-v \u5377\u540D\uFF1A\u5BB9\u5668\u5185\u8DEF\u5F84  <span class="token comment">#\u5177\u540D\u6302\u8F7D</span>
-v /\u5BBF\u4E3B\u673A\u8DEF\u5F84:\u5BB9\u5668\u5185\u8DEF\u5F84 <span class="token comment">#\u6307\u5B9A\u8DEF\u5F84\u6302\u8F7D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u62D3\u5C55\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u901A\u8FC7 -v \u5BB9\u5668\u5185\u8DEF\u5F84\uFF1Aro rw \u6539\u53D8\u8BFB\u5199\u6743\u9650</span>
ro <span class="token builtin class-name">readonly</span> \u53EA\u8BFB
rw readwrite \u53EF\u8BFB\u53EF\u5199

<span class="token comment"># \u4E00\u65E6\u8BBE\u7F6E\u4E86\u5BB9\u5668\u7684\u6743\u9650\uFF0C\u5BB9\u5668\u5BF9\u6211\u4EEC\u6302\u8F7D\u51FA\u6765\u7684\u5185\u5BB9\u5C31\u6709\u9650\u5B9A\u4E86</span>
<span class="token function">docker</span> run -d -P --name nginx02 -v juming-nginx:/etc/nginx:ro nginx
<span class="token function">docker</span> run -d -P --name nginx02 -v juming-nginx:/etc/nginx:rw nginx

<span class="token comment"># ro \u53EA\u80FD\u901A\u8FC7\u5BBF\u4E3B\u673A\u6765\u64CD\u4F5C\uFF0C\u5BB9\u5668\u5185\u90E8\u662F\u65E0\u6CD5\u64CD\u4F5C\u7684</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u521D\u8BC6dockerfile" tabindex="-1"><a class="header-anchor" href="#\u521D\u8BC6dockerfile" aria-hidden="true">#</a> \u521D\u8BC6Dockerfile</h3><p>Dockerfile \u5C31\u662F\u7528\u6765\u6784\u5EFAdocker\u955C\u50CF\u7684\u6784\u5EFA\u6587\u4EF6\uFF01\u547D\u4EE4\u811A\u672C\uFF01\u5148\u4F53\u9A8C\u4E00\u4E0B</p><p>\u901A\u8FC7\u8FD9\u4E2A\u811A\u672C\u53EF\u4EE5\u751F\u6210\u955C\u50CF\uFF0C\u955C\u50CF\u662F\u4E00\u5C42\u4E00\u5C42\u7684\uFF0C\u811A\u672C\u4E00\u4E2A\u4E2A\u7684\u547D\u4EE4\uFF0C\u6BCF\u4E2A\u547D\u4EE4\u90FD\u662F\u4E00\u5C42</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u4E00\u4E2Adockerfile\u6587\u4EF6\uFF0C\u540D\u5B57\u53EF\u4EE5\u968F\u673A\uFF0C\u5EFA\u8BAEDockerfile</span>
<span class="token comment"># \u6587\u4EF6\u4E2D\u7684\u5185\u5BB9</span>
FROM centos

VOLUME <span class="token punctuation">[</span><span class="token string">&quot;volume01&quot;</span>,<span class="token string">&quot;volume02&quot;</span><span class="token punctuation">]</span>  <span class="token comment">#\u533F\u540D\u6302\u8F7D</span>

CMD <span class="token builtin class-name">echo</span> <span class="token string">&quot;----end-----&quot;</span>

CMD /bin/bash

<span class="token comment">#\u8FD9\u91CC\u7684\u6BCF\u4E2A\u547D\u4EE4\uFF0C\u5C31\u662F\u955C\u50CF\u7684\u4E00\u5C42</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220403101736372.png" alt="image-20220403101736372"></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u542F\u52A8\u81EA\u5DF1\u5199\u7684\u5BB9\u5668</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220403102045142.png" alt="image-20220403102045142"></p><p>\u8FD9\u4E2A\u5377\u548C\u5916\u90E8\u4E00\u5B9A\u6709\u4E00\u4E2A\u540C\u6B65\u7684\u76EE\u5F55\uFF01</p><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220403105109047.png" alt="image-20220403105109047"></p><p>\u6D4B\u8BD5\u4E00\u4E0B\u521A\u624D\u7684\u6587\u4EF6\u662F\u5426\u540C\u6B65\u51FA\u53BB\u4E86\uFF01</p><p>\u8FD9\u79CD\u65B9\u5F0F\u6211\u4EEC\u672A\u6765\u4F7F\u7528\u7684\u5341\u5206\u591A\uFF0C\u56E0\u4E3A\u6211\u4EEC\u901A\u5E38\u4F1A\u6784\u5EFA\u81EA\u5DF1\u7684\u955C\u50CF\uFF01</p><p>\u5047\u8BBE\u6784\u5EFA\u955C\u50CF\u65F6\u6CA1\u6709\u6302\u8F7D\u5377\uFF0C\u8981\u624B\u52A8\u955C\u50CF\u6302\u8F7D -v\u5377\u540D:\u5BB9\u5668\u5185\u8DEF\u5F84\uFF01</p><h3 id="\u6570\u636E\u5377\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5377\u5BB9\u5668" aria-hidden="true">#</a> \u6570\u636E\u5377\u5BB9\u5668</h3><p>\u4E24\u4E2Amysql\u540C\u6B65\u6570\u636E</p><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220405102204421.png" alt="image-20220405102204421"></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u542F\u52A83\u4E2A\u5BB9\u5668\uFF0C\u901A\u8FC7\u6211\u4EEC\u521A\u624D\u81EA\u5DF1\u5199\u7684\u955C\u50CF\u542F\u52A8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>docker run -it --name docker03 --volumes-from docker01 kuangshen/centos:1.0</p><p>\u901A\u8FC7--volumes-from \u7C7B\u4F3C\u4E8E son extends father \uFF0C\u5B9E\u73B0\u6570\u636E\u5171\u4EAB</p><p>\u53EA\u8981\u6709\u4E00\u4E2A\u5BB9\u5668\u8FD8\u5728\uFF0C\u6570\u636E\u5C31\u8FD8\u5728</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6D4B\u8BD5\uFF0C\u53EF\u4EE5\u5220\u9664Docker01\uFF0C\u67E5\u770B\u4E00\u4E0Bdocker02\u548Cdocker03\u662F\u5426\u8FD8\u53EF\u4EE5\u8BBF\u95EE\u8FD9\u4E2A\u90AE\u4EF6</span>
<span class="token comment"># \u6D4B\u8BD5\u4F9D\u65E7\u53EF\u4EE5\u8BBF\u95EE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220405105534488.png" alt="image-20220405105534488"></p><p>\u591A\u4E2Amysql\u5B9E\u73B0\u6570\u636E\u5171\u4EAB</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -d -p <span class="token number">3310</span>:3306 -v /etc/mysql/conf.d -v /var/lib/mysql -e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> --name mysql01 mysql:5.7

<span class="token function">docker</span> run -d p <span class="token number">3310</span>:3306 -e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> --name mysql02 --volumes-from mysql01 mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7ED3\u8BBA\uFF1A</p><p>\u5BB9\u5668\u4E4B\u95F4\u914D\u7F6E\u4FE1\u606F\u7684\u4F20\u9012\uFF0C\u6570\u636E\u5377\u5BB9\u5668\u7684\u751F\u547D\u5468\u671F\u4E00\u76F4\u6301\u7EED\u5230\u6CA1\u6709\u5BB9\u5668\u4F7F\u7528\u4E3A\u6B62\u3002</p><p>\u4F46\u662F\u4E00\u65E6\u4F60\u6301\u4E45\u5316\u5230\u4E86\u672C\u5730\uFF0C\u8FD9\u4E2A\u65F6\u5019\uFF0C\u672C\u5730\u7684\u6570\u636E\u662F\u4E0D\u4F1A\u5220\u9664\u7684\uFF01</p><h2 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> DockerFile</h2><h3 id="dockerfile\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#dockerfile\u4ECB\u7ECD" aria-hidden="true">#</a> DockerFile\u4ECB\u7ECD</h3><p>dockerfile\u662F\u7528\u6765\u6784\u5EFAdocker\u955C\u50CF\u7684\u6587\u4EF6\uFF01\u547D\u4EE4\u53C2\u6570\u811A\u672C\uFF01</p><p>\u6784\u5EFA\u6B65\u9AA4\uFF1A</p><p>1\u3001\u7F16\u5199\u4E00\u4E2Adockerfile\u6587\u4EF6</p><p>2\u3001docker build\u6784\u5EFA\u6210\u4E3A\u4E00\u4E2A\u955C\u50CF</p><p>3\u3001docker run \u8FD0\u884C\u955C\u50CF</p><p>4\u3001docker push \u53D1\u5E03\u955C\u50CF(DockerHub\u3001\u963F\u91CC\u4E91\u955C\u50CF\u4ED3\u5E93\uFF01)</p><p>\u5B98\u65B9\u955C\u50CF\u5F88\u591A\u90FD\u662F\u57FA\u7840\u5305\uFF0C\u5F88\u591A\u529F\u80FD\u6CA1\u6709\uFF0C\u6211\u4EEC\u901A\u5E38\u4F1A\u81EA\u5DF1\u642D\u5EFA\u81EA\u5DF1\u7684\u955C\u50CF</p><p>\u5B98\u65B9\u65E2\u7136\u53EF\u4EE5\u5236\u4F5C\u955C\u50CF\uFF0C\u90A3\u6211\u4EEC\u4E5F\u53EF\u4EE5\uFF01</p><h3 id="dockerfile\u6784\u5EFA\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#dockerfile\u6784\u5EFA\u8FC7\u7A0B" aria-hidden="true">#</a> DockerFile\u6784\u5EFA\u8FC7\u7A0B</h3><p>dockerfile\u662F\u9762\u5411\u5F00\u53D1\u7684\uFF0C\u6211\u4EEC\u4EE5\u540E\u8981\u53D1\u5E03\u9879\u76EE\uFF0C\u505A\u955C\u50CF\uFF0C\u5C31\u9700\u8981\u7F16\u5199dockerfile\u6587\u4EF6\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u5341\u5206\u7B80\u5355\uFF01</p><p>Docker\u955C\u50CF\u9010\u6E10\u6210\u4E3A\u4F01\u4E1A\u4EA4\u4ED8\u7684\u6807\u51C6\uFF0C\u5FC5\u987B\u8981\u638C\u63E1\uFF01</p><p>\u6B65\u9AA4\uFF1A\u5F00\u53D1\uFF0C\u90E8\u7F72\uFF0C\u8FD0\u7EF4\u3002\u3002\u7F3A\u4E00\u4E0D\u53EF</p><p>DockerFile\uFF1A\u6784\u5EFA\u6587\u4EF6\uFF0C\u5B9A\u4E49\u4E86\u4E00\u5207\u7684\u6B65\u9AA4\uFF0C\u6E90\u4EE3\u7801</p><p>DockerImages\uFF1A\u901A\u8FC7DockerFile\u6784\u5EFA\u751F\u6210\u7684\u955C\u50CF\uFF0C\u6700\u7EC8\u53D1\u5E03\u548C\u8FD0\u884C\u7684\u4EA7\u54C1</p><p>Docker\u5BB9\u5668\uFF1A\u5BB9\u5668\u5C31\u662F\u955C\u50CF\u8FD0\u884C\u8D77\u6765\u63D0\u4F9B\u670D\u52A1\u5668</p><h3 id="dockerfile\u7684\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#dockerfile\u7684\u6307\u4EE4" aria-hidden="true">#</a> DockerFile\u7684\u6307\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>FROM  <span class="token comment">#\u57FA\u7840\u955C\u50CF\uFF0C\u4E00\u5207\u4ECE\u8FD9\u91CC\u5F00\u59CB\u6784\u5EFA</span>
MAINTAINER <span class="token comment">#\u955C\u50CF\u662F\u8C01\u5199\u7684\uFF0C\u59D3\u540D+\u90AE\u7BB1</span>
RUN <span class="token comment">#\u955C\u50CF\u6784\u5EFA\u7684\u65F6\u5019\u9700\u8981\u8FD0\u884C\u7684\u547D\u4EE4</span>
ADD <span class="token comment">#\u6B65\u9AA4\uFF0Ctomcat\u955C\u50CF\uFF0C\u8FD9\u4E2Atomcat\u538B\u7F29\u5305\uFF01\u6DFB\u52A0\u5185\u5BB9</span>
WORKDIR <span class="token comment">#\u955C\u50CF\u7684\u5DE5\u4F5C\u76EE\u5F55</span>
VOLUME <span class="token comment">#\u6302\u8F7D\u7684\u76EE\u5F55</span>
EXPOSE <span class="token comment">#\u66B4\u9732\u7AEF\u53E3\u4F4D\u7F6E</span>

<span class="token function">ls</span> -a		<span class="token function">docker</span> run -l 
CMD <span class="token comment">#\u6307\u5B9A\u8FD9\u4E2A\u5BB9\u5668\u542F\u52A8\u7684\u65F6\u5019\u8981\u8FD0\u884C\u7684\u547D\u4EE4\uFF0C\u53EA\u6709\u6700\u540E\u4E00\u4E2A\u4F1A\u751F\u6548\uFF0C\u53EF\u88AB\u66FF\u4EE3</span>
ENTRYPOINT <span class="token comment">#\u6307\u5B9A\u8FD9\u4E2A\u5BB9\u5668\u542F\u52A8\u7684\u65F6\u5019\u8981\u8FD0\u884C\u7684\u547D\u4EE4\uFF0C\u53EF\u4EE5\u8FFD\u52A0\u547D\u4EE4</span>
ONBUILD <span class="token comment">#\u5F53\u6784\u5EFA\u4E00\u4E2A\u88AB\u7EE7\u627F DockerFile \u8FD9\u4E2A\u65F6\u5019\u5C31\u4F1A\u8FD0\u884CONBUILD\u7684\u6307\u4EE4\uFF0C\u89E6\u53D1\u6307\u4EE4</span>
COPY <span class="token comment">#\u7C7B\u4F3CADD \uFF0C \u5C06\u6211\u4EEC\u6587\u4EF6\u62F7\u8D1D\u5230\u955C\u50CF\u4E2D</span>
ENV <span class="token comment">#\u6784\u5EFA\u7684\u65F6\u5019\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\uFF01</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="\u5B9E\u6218\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u6218\u6D4B\u8BD5" aria-hidden="true">#</a> \u5B9E\u6218\u6D4B\u8BD5</h3><p>Docker Hub \u4E2D 99% \u955C\u50CF\u90FD\u662F\u4ECE\u8FD9\u4E2A\u57FA\u7840\u955C\u50CF\u8FC7\u6765\u7684 FROM scratch\uFF0C\u7136\u540E\u914D\u7F6E\u9700\u8981\u7684\u8F6F\u4EF6\u548C\u914D\u7F6E\u6765\u8FDB\u884C\u6784\u5EFA</p><blockquote><p>\u521B\u5EFA\u4E00\u4E2A\u81EA\u5DF1\u7684centos</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1 \u7F16\u5199Dockerfile\u7684\u6587\u4EF6</span>
<span class="token punctuation">[</span>root@VM-20-12-centos dockerfile<span class="token punctuation">]</span><span class="token comment"># cat mydockerfile-centos</span>
FROM centos:7
MAINTAINER wqby<span class="token operator">&lt;</span><span class="token number">9479421</span>@qq.com<span class="token operator">&gt;</span>

ENV MYPATH /usr/local
WORKDIR  <span class="token variable">$MYPATH</span>

RUN yum -y <span class="token function">install</span> <span class="token function">vim</span>
RUN yum -y <span class="token function">install</span> net-tools

EXPOSE <span class="token number">80</span>

CMD <span class="token builtin class-name">echo</span> <span class="token variable">$MYPATH</span>
CMD <span class="token builtin class-name">echo</span> <span class="token string">&quot;----end----&quot;</span>
CMD /bin/bash

<span class="token comment"># 2\u3001\u901A\u8FC7\u8FD9\u4E2A\u6587\u4EF6\u6784\u5EFA\u955C\u50CF</span>
<span class="token comment"># \u547D\u4EE4\uFF1Adocker build -f dockerfile\u6587\u4EF6\u8DEF\u5F84 -t \u955C\u50CF\u540D:[tag]</span>

<span class="token comment"># 3\u3001\u6D4B\u8BD5\u8FD0\u884C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u5BF9\u6BD4\u539F\u751F\u7684centos</p><p>\u6211\u4EEC\u589E\u52A0\u4E86vim ipconfig pwd</p><p>\u6211\u4EEC\u5E73\u65F6\u62FF\u5230\u4E00\u4E2A\u955C\u50CF\uFF0C\u53EF\u4EE5\u7814\u7A76\u4E00\u4E0B\u5B83\u662F\u600E\u4E48\u505A\u7684\u4E86\uFF1Fdocker history \u955C\u50CFid</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>CMD <span class="token comment">#\u6307\u5B9A\u8FD9\u4E2A\u5BB9\u5668\u542F\u52A8\u7684\u65F6\u5019\u8981\u8FD0\u884C\u7684\u547D\u4EE4\uFF0C\u53EA\u6709\u6700\u540E\u4E00\u4E2A\u4F1A\u751F\u6548\uFF0C\u53EF\u88AB\u66FF\u4EE3</span>
ENTRYPOINT <span class="token comment">#\u6267\u884C\u8FD9\u4E2A\u5BB9\u5668\u542F\u52A8\u7684\u65F6\u5019\u8981\u8FD0\u884C\u7684\u547D\u4EE4\uFF0C\u53EF\u4EE5\u8FFD\u52A0\u547D\u4EE4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6D4B\u8BD5cmd</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u7F16\u5199dockerfile\u6587\u4EF6</span>
<span class="token punctuation">[</span>root@VM-20-12-centos dockerfile<span class="token punctuation">]</span><span class="token comment"># vim dockerfile-cmd-test</span>
FROM centos
CMD <span class="token punctuation">[</span><span class="token string">&quot;ls&quot;</span>,<span class="token string">&quot;-a&quot;</span><span class="token punctuation">]</span>

<span class="token comment">#\u6784\u5EFA\u955C\u50CF</span>
<span class="token punctuation">[</span>root@VM-20-12-centos dockerfile<span class="token punctuation">]</span><span class="token comment"># docker build -f dockerfile-cmd-test -t cmdtest .</span>

<span class="token comment">#run\u8FD0\u884C\uFF0C\u53D1\u73B0\u6211\u4EEC\u7684ls -a \u751F\u6548</span>
<span class="token punctuation">[</span>root@VM-20-12-centos dockerfile<span class="token punctuation">]</span><span class="token comment"># docker run 9997f0b2aa81</span>
<span class="token builtin class-name">.</span>
<span class="token punctuation">..</span>
.dockerenv
bin
dev
etc
home
lib
lib64
lost+found
media
mnt
opt
proc
root
run
sbin
srv
sys
tmp
usr
var

<span class="token comment">#\u60F3\u8FFD\u52A0\u4E00\u4E2A\u547D\u4EE4 -l ls -al</span>
<span class="token punctuation">[</span>root@VM-20-12-centos dockerfile<span class="token punctuation">]</span><span class="token comment"># docker run 9997f0b2aa81 -l</span>
docker: Error response from daemon: failed to create shim: OCI runtime create failed: container_linux.go:380: starting container process caused: exec: <span class="token string">&quot;-l&quot;</span><span class="token builtin class-name">:</span> executable <span class="token function">file</span> not found <span class="token keyword">in</span> <span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span> unknown.

<span class="token comment">#cmd\u7684\u60C5\u51B5\u4E0B -l \u66FF\u6362\u4E86CMD [&quot;ls&quot;,&quot;-a&quot;]\u547D\u4EE4\uFF0C-l\u4E0D\u662F\u547D\u4EE4\u6240\u4EE5\u62A5\u9519\uFF01</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>\u6D4B\u8BD5ENTRYPOINT</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-20-12-centos dockerfile<span class="token punctuation">]</span><span class="token comment"># vim dockerfile-cmd-entrypoint</span>
<span class="token punctuation">[</span>root@VM-20-12-centos dockerfile<span class="token punctuation">]</span><span class="token comment"># docker build -f dockerfile-cmd-entrypoint -t entrypoint-test .</span>

<span class="token punctuation">[</span>root@VM-20-12-centos dockerfile<span class="token punctuation">]</span><span class="token comment"># docker run f6f6256f3d2a</span>
<span class="token builtin class-name">.</span>
<span class="token punctuation">..</span>
.dockerenv
bin
dev
etc
home
lib
lib64
lost+found
media
mnt
opt
proc
root
run
sbin
srv
sys
tmp
usr
var

<span class="token punctuation">[</span>root@VM-20-12-centos dockerfile<span class="token punctuation">]</span><span class="token comment"># docker run f6f6256f3d2a -l</span>
total <span class="token number">56</span>
drwxr-xr-x   <span class="token number">1</span> root root <span class="token number">4096</span> Apr  <span class="token number">6</span> 02:36 <span class="token builtin class-name">.</span>
drwxr-xr-x   <span class="token number">1</span> root root <span class="token number">4096</span> Apr  <span class="token number">6</span> 02:36 <span class="token punctuation">..</span>
-rwxr-xr-x   <span class="token number">1</span> root root    <span class="token number">0</span> Apr  <span class="token number">6</span> 02:36 .dockerenv
lrwxrwxrwx   <span class="token number">1</span> root root    <span class="token number">7</span> Nov  <span class="token number">3</span>  <span class="token number">2020</span> bin -<span class="token operator">&gt;</span> usr/bin
drwxr-xr-x   <span class="token number">5</span> root root  <span class="token number">340</span> Apr  <span class="token number">6</span> 02:36 dev
drwxr-xr-x   <span class="token number">1</span> root root <span class="token number">4096</span> Apr  <span class="token number">6</span> 02:36 etc
drwxr-xr-x   <span class="token number">2</span> root root <span class="token number">4096</span> Nov  <span class="token number">3</span>  <span class="token number">2020</span> home
lrwxrwxrwx   <span class="token number">1</span> root root    <span class="token number">7</span> Nov  <span class="token number">3</span>  <span class="token number">2020</span> lib -<span class="token operator">&gt;</span> usr/lib
lrwxrwxrwx   <span class="token number">1</span> root root    <span class="token number">9</span> Nov  <span class="token number">3</span>  <span class="token number">2020</span> lib64 -<span class="token operator">&gt;</span> usr/lib64
drwx------   <span class="token number">2</span> root root <span class="token number">4096</span> Sep <span class="token number">15</span>  <span class="token number">2021</span> lost+found
drwxr-xr-x   <span class="token number">2</span> root root <span class="token number">4096</span> Nov  <span class="token number">3</span>  <span class="token number">2020</span> media
drwxr-xr-x   <span class="token number">2</span> root root <span class="token number">4096</span> Nov  <span class="token number">3</span>  <span class="token number">2020</span> mnt
drwxr-xr-x   <span class="token number">2</span> root root <span class="token number">4096</span> Nov  <span class="token number">3</span>  <span class="token number">2020</span> opt
dr-xr-xr-x <span class="token number">124</span> root root    <span class="token number">0</span> Apr  <span class="token number">6</span> 02:36 proc
dr-xr-x---   <span class="token number">2</span> root root <span class="token number">4096</span> Sep <span class="token number">15</span>  <span class="token number">2021</span> root
drwxr-xr-x  <span class="token number">11</span> root root <span class="token number">4096</span> Sep <span class="token number">15</span>  <span class="token number">2021</span> run
lrwxrwxrwx   <span class="token number">1</span> root root    <span class="token number">8</span> Nov  <span class="token number">3</span>  <span class="token number">2020</span> sbin -<span class="token operator">&gt;</span> usr/sbin
drwxr-xr-x   <span class="token number">2</span> root root <span class="token number">4096</span> Nov  <span class="token number">3</span>  <span class="token number">2020</span> srv
dr-xr-xr-x  <span class="token number">13</span> root root    <span class="token number">0</span> Apr  <span class="token number">3</span> 02:18 sys
drwxrwxrwt   <span class="token number">7</span> root root <span class="token number">4096</span> Sep <span class="token number">15</span>  <span class="token number">2021</span> tmp
drwxr-xr-x  <span class="token number">12</span> root root <span class="token number">4096</span> Sep <span class="token number">15</span>  <span class="token number">2021</span> usr
drwxr-xr-x  <span class="token number">20</span> root root <span class="token number">4096</span> Sep <span class="token number">15</span>  <span class="token number">2021</span> var
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><h3 id="\u5B9E\u6218-tomcat\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u6218-tomcat\u955C\u50CF" aria-hidden="true">#</a> \u5B9E\u6218\uFF1ATomcat\u955C\u50CF</h3><p>1\u3001\u51C6\u5907\u955C\u50CF\u6587\u4EF6 tomcat\u538B\u7F29\u5305</p><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220406105702057.png" alt="image-20220406105702057"></p><p>2\u3001\u7F16\u5199dockerfile\u6587\u4EF6\uFF0C\u5B98\u65B9\u547D\u540DDockerfile</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>FROM centos:7
MAINTAINET wqby<span class="token operator">&lt;</span><span class="token number">9479421</span>@qq.com<span class="token operator">&gt;</span>

COPY readme.txt /usr/local/readme.txt

ADD jdk-8u321-linux-x64.tar.gz /usr/local/
ADD apache-tomcat-9.0.62.tar.gz /usr/local/

RUN yum -y <span class="token function">install</span> <span class="token function">vim</span>

ENV MYPATH /usr/local
WORKDIR <span class="token variable">$MYPATH</span>

ENV JAVA_HOME /usr/local/jdk1.8.0_321
ENV CLASSPATH <span class="token variable">$JAVA_HOME</span>/lib/dt.jar<span class="token punctuation">;</span><span class="token variable">$JAVA_HOME</span>/lib/tools.jar
ENV CATALINA_HOME /usr/local/apache-tomcat-9.0.62
ENV CATALINA_BASH /usr/local/apache-tomcat-9.0.62
ENV <span class="token environment constant">PATH</span> <span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token variable">$CATALINA_HOME</span>/lib:<span class="token variable">$CATALINA_HOME</span>/bin

EXPOSE <span class="token number">8080</span>

CMD /usr/local/apache-tomcat-9.0.62/bin/startup.sh <span class="token operator">&amp;&amp;</span> <span class="token function">tail</span> -F /usr/local/apache-tomcat-9.0.62/bin/logs/catalina.out
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>3\u3001\u6784\u5EFA\u955C\u50CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># docker build -t diytomcat .</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>4\u3001\u542F\u52A8\u955C\u50CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-20-12-centos tomcat<span class="token punctuation">]</span><span class="token comment"># </span>

<span class="token function">docker</span> run -d -p <span class="token number">9090</span>:8080 --name wqbytomcat -v /home/wqby/tomcat/test:/usr/local/apache-tomcat-9.0.62/webapps/test -v /home/wqby/tomcat/tomcatlogs/:/usr/local/apache-tomcat-9.0.62/logs diytomcat  


<span class="token function">docker</span> run -d -p <span class="token number">3344</span>:8080 --name xiaofantomcat1 -v /home/xiaofan/build/tomcat/test:/usr/local/apache-tomcat-9.0.37/webapps/test -v /home/xiaofan/build/tomcat/tomcatlogs/:/usr/local/apache-tomcat-9.0.37/logs diytomcat

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>5\u3001\u8BBF\u95EE\u6D4B\u8BD5</p><p>crul localhost:9090</p><p>6\u3001\u53D1\u5E03\u9879\u76EE(\u7531\u4E8E\u505A\u4E86\u5377\u6302\u8F7D\uFF0C\u6211\u4EEC\u76F4\u63A5\u5728\u672C\u5730\u5C31\u53EF\u4EE5\u53D1\u5E03\u4E86)</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>  <span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>web-app</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://java.sun.com/xml/ns/javaee<span class="token punctuation">&quot;</span></span>
           <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
           <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://java.sun.com/xml/ns/javaee
                               http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd<span class="token punctuation">&quot;</span></span>
           <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2.5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>web-app</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>
&lt;%@ page language=&quot;java&quot; contentType=&quot;text/html; charset=UTF-8&quot;
    pageEncoding=&quot;UTF-8&quot;%&gt;
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;utf-8&quot;&gt;
&lt;title&gt;hello. xiaofan&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
Hello World!&lt;br/&gt;
&lt;%
System.out.println(&quot;-----my test web logs------&quot;);
%&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u53D1\u73B0\uFF1A\u9879\u76EE\u90E8\u7F72\u6210\u529F\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EEok!</p><p>\u6211\u4EEC\u4EE5\u540E\u5F00\u53D1\u7684\u6B65\u9AA4\uFF1A\u9700\u8981\u638C\u63E1Dockerfile\u7684\u7F16\u5199\uFF01\u6211\u4EEC\u4E4B\u540E\u7684\u4E00\u5207\u90FD\u662F\u4F7F\u7528docker\u955C\u50CF\u6765\u53D1\u5E03\u8FD0\u884C</p><h3 id="\u53D1\u5E03\u81EA\u5DF1\u7684\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03\u81EA\u5DF1\u7684\u955C\u50CF" aria-hidden="true">#</a> \u53D1\u5E03\u81EA\u5DF1\u7684\u955C\u50CF</h3><blockquote><p>dockerhub</p></blockquote><p>1\u3001\u5730\u5740 hub.docker.com \u6CE8\u518C\u81EA\u5DF1\u7684\u8D26\u53F7</p><p>2\u3001\u786E\u5B9A\u8FD9\u4E2A\u8D26\u53F7\u53EF\u4EE5\u767B\u5F55</p><p>3\u3001\u5728\u6211\u4EEC\u670D\u52A1\u5668\u4E0A\u63D0\u4EA4\u81EA\u5DF1\u7684\u955C\u50CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> login -u <span class="token number">9479421</span>
Password:***
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>4\u3001\u767B\u5F55\u5B8C\u6BD5\u540E\u5C31\u53EF\u4EE5\u63D0\u4EA4\u955C\u50CF\u4E86\uFF0C\u5C31\u662F\u4E00\u90E8docker push</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># push\u81EA\u5DF1\u7684\u955C\u50CF\u5230\u670D\u52A1\u5668\u4E0A\uFF01</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker push diytomcat</span>
Using default tag: latest
The push refers to repository <span class="token punctuation">[</span>docker.io/library/diytomcat<span class="token punctuation">]</span>
464716bcc6b3: Preparing 
82db2e577ac8: Preparing 
470424db6cff: Preparing 
5d1d91b017be: Preparing 
174f56854903: Preparing 
denied:requested access to the resource is denied <span class="token comment">#\u5480\u56BC</span>

<span class="token comment"># push\u955C\u50CF\u7684\u95EE\u9898\uFF1F</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker push wqby/diytomcat:1.0</span>
The push refers to repository <span class="token punctuation">[</span>docker.io/wqby/diytomcat<span class="token punctuation">]</span>
An image does not exist locally with the tag: wqby/diytomcat

<span class="token comment">#\u89E3\u51B3\uFF0C\u589E\u52A0\u4E00\u4E2Atag</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker tag 65aff8870cae wqby/tomcat:1.0</span>
<span class="token comment">#\u5FC5\u987B\u4FDD\u8BC1\u7528\u6237\u540D\u548Cdockerhub\u7528\u6237\u540D\u4E00\u6837\u624D\u53EF\u4EE5\u63D0\u4EA4\u6210\u529F</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker push wqby/tomcat:1.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220406150620108.png" alt="image-20220406150620108"></p><p>\u63D0\u4EA4\u7684\u65F6\u5019\u4E5F\u662F\u6309\u7167\u955C\u50CF\u7684\u5C42\u7EA7\u6765\u8FDB\u884C\u63D0\u4EA4\u7684</p><blockquote><p>\u963F\u91CC\u4E91\u955C\u50CF\u670D\u52A1\u5668\u4E0A</p></blockquote><p>1\u3001\u767B\u5F55\u963F\u91CC\u4E91</p><p>2\u3001\u627E\u5230\u5BB9\u5668\u955C\u50CF\u670D\u52A1</p><p>3\u3001\u521B\u5EFA\u547D\u540D\u7A7A\u95F4</p><p>4\u3001\u521B\u5EFA\u5BB9\u5668\u955C\u50CF</p>`,272),b=n(`<li><p><strong>\u767B\u5F55\u817E\u8BAF\u4E91\u5BB9\u5668\u955C\u50CF\u670D\u52A1 Docker Registry</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker login ccr.ccs.tencentyun.com --username=100016474133
\u590D\u5236
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>`,1),m=n(`<p><strong>\u4ECE Registry \u62C9\u53D6\u955C\u50CF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker pull ccr.ccs.tencentyun.com/wqby/wqby-test:[tag]
\u590D\u5236
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,2),k=a("\u5176\u4E2D [tag] \u8BF7\u6839\u636E\u60A8\u9700\u8981\u62C9\u53D6\u955C\u50CF\u7684\u5177\u4F53\u7248\u672C\u955C\u50CF\u66FF\u6362\uFF0C\u5982 latest\u3002\u66F4\u591A\u547D\u4EE4\u8BF4\u660E\uFF0C\u8BF7\u53C2\u770B\u5B98\u65B9\u6587\u6863\uFF1A"),d={href:"https://docs.docker.com/engine/reference/commandline/pull/",target:"_blank",rel:"noopener noreferrer"},g=a("docker pull"),q=n(`<li><p><strong>\u5411 Registry \u4E2D\u63A8\u9001\u955C\u50CF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker tag [imageId] ccr.ccs.tencentyun.com/wqby/wqby-test:[tag]
\u590D\u5236
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker push ccr.ccs.tencentyun.com/wqby/wqby-test:[tag]
\u590D\u5236
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>`,1),h=n(`<h2 id="docker\u7F51\u7EDC" tabindex="-1"><a class="header-anchor" href="#docker\u7F51\u7EDC" aria-hidden="true">#</a> Docker\u7F51\u7EDC</h2><h3 id="\u7406\u89E3docker0" tabindex="-1"><a class="header-anchor" href="#\u7406\u89E3docker0" aria-hidden="true">#</a> \u7406\u89E3Docker0</h3><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220406161954391.png" alt="image-20220406161954391"></p><p>\u4E09\u4E2A\u7F51\u7EDC</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u95EE\u9898\uFF0Cdocker\u662F\u5982\u4F55\u5904\u7406\u5BB9\u5668\u7684\u7F51\u7EDC\u8BBF\u95EE\u7684\uFF1F
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-20-12-centos /<span class="token punctuation">]</span><span class="token comment"># docker run -d -P --name tomcat01 tomcat</span>

<span class="token comment">#\u67E5\u770B\u5BB9\u5668\u7684\u5185\u90E8\u7F51\u7EDC\u5730\u5740 ip addr  </span>
<span class="token comment">#\u627E\u4E0D\u5230ip\u547D\u4EE4\u89E3\u51B3\uFF1A apt update &amp;&amp; apt install -y iproute2</span>

<span class="token punctuation">[</span>root@VM-20-12-centos /<span class="token punctuation">]</span><span class="token comment"># docker exec -it tomcat01 ip addr</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
<span class="token number">102</span>: eth0@if103: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state UP group default 
    link/ether 02:42:ac:11:00:02 brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">0</span>
    inet <span class="token number">172.17</span>.0.2/16 brd <span class="token number">172.17</span>.255.255 scope global eth0
       valid_lft forever preferred_lft forever
       
<span class="token comment"># \u601D\u8003\uFF0Clinux \u80FD\u4E0D\u80FDping\u901A\u5BB9\u5668\u5185\u90E8\uFF01</span>
<span class="token punctuation">[</span>root@VM-20-12-centos /<span class="token punctuation">]</span><span class="token comment"># ping 172.17.0.2</span>
PING <span class="token number">172.17</span>.0.2 <span class="token punctuation">(</span><span class="token number">172.17</span>.0.2<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">172.17</span>.0.2: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.040</span> ms
<span class="token number">64</span> bytes from <span class="token number">172.17</span>.0.2: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.046</span> ms
<span class="token number">64</span> bytes from <span class="token number">172.17</span>.0.2: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.038</span> ms

<span class="token comment"># linux \u53EF\u4EE5ping\u901Adocker \u5BB9\u5668\u5185\u90E8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><blockquote><p>\u539F\u7406</p></blockquote><p>1\u3001\u6211\u4EEC\u6BCF\u542F\u52A8\u4E00\u4E2A\u4E00\u4E2Adocker\u5BB9\u5668\uFF0Cdocker\u5C31\u4F1A\u7ED9docker\u5BB9\u5668\u5206\u914D\u4E00\u4E2Aip\uFF0C\u6211\u4EEC\u53EA\u8981\u5B89\u88C5\u4E86docker 0\uFF0C\u5C31\u4F1A\u6709\u4E00\u4E2A\u7F51\u5361</p><p>\u6865\u63A5\u6A21\u5F0F\uFF0C\u4F7F\u7528\u7684\u6280\u672F\u662Fevth-pair\u6280\u672F\uFF01</p><p>\u518D\u6B21\u6D4B\u8BD5ip addr</p><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220406174433667.png" alt="image-20220406174433667"></p><p>2\u3001\u5728\u6DFB\u52A0\u4E00\u4E2A docker run -d -P --name tomcat02 tomcat\uFF0C\u53D1\u73B0\u53C8\u591A\u4E86\u4E00\u5806\u7F51\u5361\uFF01</p><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220406174659114.png" alt="image-20220406174659114"></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6211\u4EEC\u53D1\u73B0\u8FD9\u4E2A\u5BB9\u5668\u5E26\u6765\u7F51\u5361\uFF0C\u90FD\u662F\u4E00\u5806\u5806\u7684</span>
<span class="token comment">#evth-pair \u5C31\u662F\u4E00\u5806\u7684\u865A\u62DF\u8BBE\u5907\u63A5\u53E3\uFF0C\u4ED6\u4EEC\u90FD\u662F\u6210\u5BF9\u51FA\u73B0\u7684\uFF0C\u4E00\u6BB5\u8FDE\u7740\u534F\u8BAE\uFF0C\u4E00\u6BB5\u5F7C\u6B64\u76F8\u8FDE</span>
<span class="token comment"># \u6B63\u56E0\u4E3A\u6709\u8FD9\u4E2A\u7279\u5F81\uFF0Cevth-paire \u5145\u5F53\u4E00\u4E2A\u6865\u6881</span>
<span class="token comment"># OpenStac\uFF0CDocker\u5BB9\u5668\u4E4B\u95F4\u7684\u8FDE\u63A5\uFF0COVS\u7684\u8FDE\u63A5\uFF0C\u90FD\u662F\u4F7F\u7528evth-pair\u6280\u672F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>3\u3001\u6211\u4EEC\u542F\u52A8\u4E86\u4E24\u4E2A\u9879\u76EE\uFF0C\u6D4B\u8BD5\u4E0Btomcat01\u548Ctomcat02\u662F\u5426\u53EF\u4EE5ping\u901A</p><p>\u89E3\u51B3\u5BB9\u5668\u5185\u6CA1\u6709ping\u547D\u4EE4\uFF1A</p><ol><li>apt-get update</li><li>apt install net-tools # ifconfig</li><li>apt install iputils-ping # ping</li></ol><p>\u6240\u6709\u7684\u5BB9\u5668\u4E0D\u6307\u5B9A\u7F51\u7EDC\u7684\u60C5\u51B5\u4E0B\uFF0C\u90FD\u662Fdocker0\u8DEF\u7531\u7684\uFF0Cdocker\u4F1A\u7ED9\u6211\u4EEC\u7684\u5BB9\u5668\u5206\u914D\u4E00\u4E2A\u9ED8\u8BA4\u7684\u53EF\u7528IP</p><p>Docker\u4E2D\u7684\u6240\u6709\u7F51\u7EDC\u63A5\u53E3\u90FD\u662F\u865A\u62DF\u7684\u3002\u865A\u62DF\u7684\u8F6C\u53D1\u6548\u7387\u9AD8\uFF01\uFF08\u5185\u7F51\u4F20\u9012\u6587\u4EF6\uFF01\uFF09</p><p>\u53EA\u8981\u5BB9\u5668\u5220\u9664\uFF0C\u5BF9\u5E94\u7F51\u6865\u4E00\u5BF9\u5C31\u6CA1\u4E86\uFF01</p><h3 id="link" tabindex="-1"><a class="header-anchor" href="#link" aria-hidden="true">#</a> --link</h3><blockquote><p>\u601D\u8003\u4E00\u4E2A\u573A\u666F\uFF0C\u6211\u4EEC\u7F16\u5199\u4E86\u4E00\u4E2A\u5FAE\u670D\u52A1\uFF0Cdatabase url = ip;\u9879\u76EE\u4E0D\u91CD\u542F\uFF0C\u6570\u636E\u5E93ip\u6362\u6389\u4E86\uFF0C\u6211\u4EEC\u5E0C\u671B\u53EF\u4EE5\u5904\u7406\u8FD9\u4E2A\u4E1C\u897F\uFF0C\u53EF\u4EE5\u901A\u8FC7\u540D\u5B57\u6765\u8BBF\u95EE\u5BB9\u5668\uFF1F</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it tomcat02 ping tomcat01</span>
ping: tomcat01: Name or <span class="token function">service</span> not known
<span class="token comment"># \u5982\u4F55\u53EF\u4EE5\u89E3\u51B3\u5462\uFF1F</span>
<span class="token comment"># \u901A\u8FC7 --linke \u65E2\u53EF\u4EE5\u89E3\u51B3\u4E86\u7F51\u7EDC\u8FDE\u901A\u95EE\u9898</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker run -d -P --name tomcat03 --link tomcat02 tomcat     </span>
783470014d80e69f425b7304099737e09d848a6bd8c798fadc7855ce97c30a88                         
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it tomcat03 ping tomcat02</span>
<span class="token number">64</span> bytes from tomcat02 <span class="token punctuation">(</span><span class="token number">172.17</span>.0.3<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.104</span> ms
<span class="token number">64</span> bytes from tomcat02 <span class="token punctuation">(</span><span class="token number">172.17</span>.0.3<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.052</span> ms
<span class="token number">64</span> bytes from tomcat02 <span class="token punctuation">(</span><span class="token number">172.17</span>.0.3<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.054</span> ms
<span class="token number">64</span> bytes from tomcat02 <span class="token punctuation">(</span><span class="token number">172.17</span>.0.3<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">4</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.054</span> ms
\u3001
<span class="token comment"># \u53CD\u5411\u4E0D\u53EF\u4EE5</span>
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it tomcat02 ping tomcat03</span>
ping: tomcat03: Name or <span class="token function">service</span> not known
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u5176\u5B9E\u8FD9\u4E2Atomcat03\u5C31\u662F\u5728\u672C\u5730\u914D\u7F6E\u4E86tomcat02\u7684\u914D\u7F6E\uFF1F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u67E5\u770Bhosts\u914D\u7F6E\uFF0C\u5728\u8FD9\u91CC\u539F\u7406\u53D1\u73B0
<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it tomcat03 cat /etc/hosts</span>
<span class="token number">127.0</span>.0.1       localhost
::1     localhost ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
<span class="token number">172.17</span>.0.3      tomcat02 3ea3ea7afe5d <span class="token comment">#\u5728\u8FD9\u91CC</span>
<span class="token number">172.17</span>.0.4      783470014d80
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>--link\u5C31\u662F\u6211\u4EEC\u5728hosts\u914D\u7F6E\u4E2D\u589E\u52A0\u4E86172.17.0.3 tomcat02 3ea3ea7afe5d</p><p>\u5982\u4ECA\u4E0D\u5EFA\u8BAE\u4F7F\u7528--linke\u4E86\uFF01</p><p>\u81EA\u5B9A\u4E49\u7F51\u7EDC\uFF01\u4E0D\u9002\u7528docker0\uFF01</p><p>docker0\u95EE\u9898\uFF1A\u4ED6\u4E0D\u652F\u6301\u5BB9\u5668\u540D\u8FDE\u63A5\u8BBF\u95EE\uFF01</p><h3 id="\u81EA\u5B9A\u4E49\u7F51\u7EDC" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u7F51\u7EDC" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u7F51\u7EDC</h3><blockquote><p>\u67E5\u770B\u6240\u6709\u7684docker\u7F51\u7EDC</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker network ls                                               </span>
NETWORK ID     NAME      DRIVER    SCOPE                                                 
572735e05883   bridge    bridge    <span class="token builtin class-name">local</span>                                                 
5e4e20ed779c   <span class="token function">host</span>      <span class="token function">host</span>      <span class="token builtin class-name">local</span>                                                 
abdf61d3b437   none      null      <span class="token builtin class-name">local</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>\u7F51\u7EDC\u6A21\u5F0F</strong></p><p>bridge\uFF1A\u6865\u63A5 docker(\u9ED8\u8BA4\uFF0C\u81EA\u5DF1\u521B\u5EFA\u4E5F\u4F7F\u7528bridge\u6A21\u5F0F) \u642D\u6865 0.1 0.2 0.3</p><p>none\uFF1A\u4E0D\u914D\u7F6E\u7F51\u7EDC</p><p>host: \u548C\u5BBF\u4E3B\u673A\u5171\u4EAB\u7F51\u7EDC</p><p>container\uFF1A\u5BB9\u5668\u5185\u7F51\u7EDC\u8FDE\u901A\uFF01\uFF08\u7528\u5F97\u5C11\uFF01\uFF09</p><p><strong>\u6D4B\u8BD5</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u6211\u4EEC\u76F4\u63A5\u542F\u52A8\u7684\u547D\u4EE4 --net bridge\uFF0C\u800C\u8FD9\u4E2A\u5C31\u662F\u6211\u4EEC\u7684docker0</span>
<span class="token function">docker</span> run -d -P --name tomcat01 tomcat
<span class="token function">docker</span> run -d -P --name tomcat01 --net bridge tomcat

<span class="token comment">#docker0\u7279\u70B9\uFF0C\u9ED8\u8BA4\uFF0C\u57DF\u540D\u4E0D\u80FD\u8BBF\u95EE  --linke \u53EF\u4EE5\u6253\u901A\u8FDE\u63A5\uFF01</span>

<span class="token comment">#\u6211\u4EEC\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E00\u4E2A\u7F51\u7EDC\uFF01</span>
<span class="token comment"># --driverbridge</span>
<span class="token comment"># --subnet 192.168.0.0/16</span>
<span class="token comment"># --gateway 192.168.0.1 </span>
<span class="token function">docker</span> network create --driver bridge --subnet <span class="token number">192.168</span>.0.0/16 --gateway <span class="token number">192.168</span>.0.1 mynet

<span class="token punctuation">[</span>root@VM-20-12-centos ~<span class="token punctuation">]</span><span class="token comment"># docker network ls</span>
NETWORK ID     NAME      DRIVER    SCOPE
572735e05883   bridge    bridge    <span class="token builtin class-name">local</span>
5e4e20ed779c   <span class="token function">host</span>      <span class="token function">host</span>      <span class="token builtin class-name">local</span>
12de10c8ed5a   mynet     bridge    <span class="token builtin class-name">local</span>
abdf61d3b437   none      null      <span class="token builtin class-name">local</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u6211\u4EEC\u7684\u7F51\u7EDC\u5C31\u5EFA\u597D\u4E86</p><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20220407104648703.png" alt="image-20220407104648703"></p><p>\u542F\u52A8\u4E24\u4E2Atomcat,\u518D\u6B21\u67E5\u770B\u7F51\u7EDC\u60C5\u51B5</p><p><img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2NoZW5nY29kZXgvY2xvdWRpbWcvbWFzdGVyL2ltZy9pbWFnZS0yMDIwMDUxNjE5MTg0NDI0MC5wbmc" alt="img"></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u518D\u6B21\u6D4B\u8BD5ping\u8FDE\u63A5</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it tomcat-net-01 <span class="token function">ping</span> <span class="token number">192.168</span>.0.3
PING tomcat-net-02 <span class="token punctuation">(</span><span class="token number">192.168</span>.0.3<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from tomcat-net-02.mynet <span class="token punctuation">(</span><span class="token number">192.168</span>.0.3<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.048</span> ms
<span class="token number">64</span> bytes from tomcat-net-02.mynet <span class="token punctuation">(</span><span class="token number">192.168</span>.0.3<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.053</span> ms
<span class="token number">64</span> bytes from tomcat-net-02.mynet <span class="token punctuation">(</span><span class="token number">192.168</span>.0.3<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.045</span> ms

<span class="token comment">#\u73B0\u5728\u4E0D\u9002\u7528--link\u4E5F\u53EF\u4EE5ping\u540D\u5B57\u4E86\uFF01</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it tomcat-net-02 <span class="token function">ping</span> tomcat-net-01

<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it tomcat-net-01 <span class="token function">ping</span> tomcat-net-02
PING tomcat-net-02 <span class="token punctuation">(</span><span class="token number">192.168</span>.0.3<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from tomcat-net-02.mynet <span class="token punctuation">(</span><span class="token number">192.168</span>.0.3<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.048</span> ms
<span class="token number">64</span> bytes from tomcat-net-02.mynet <span class="token punctuation">(</span><span class="token number">192.168</span>.0.3<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.053</span> ms
<span class="token number">64</span> bytes from tomcat-net-02.mynet <span class="token punctuation">(</span><span class="token number">192.168</span>.0.3<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.045</span> ms
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u6211\u4EEC\u81EA\u5B9A\u4E49\u7684\u7F51\u7EDCdocker\u90FD\u5DF2\u7ECF\u5E2E\u6211\u4EEC\u7EF4\u62A4\u597D\u4E86\u5BF9\u5E94\u7684\u5173\u7CFB\uFF0C\u63A8\u8350\u6211\u4EEC\u5E73\u65F6\u8FD9\u6837\u4F7F\u7528\u7F51\u7EDC\uFF01</p><p>\u597D\u5904\uFF1A</p><p>redis - \u4E0D\u540C\u7684\u96C6\u7FA4\u4F7F\u7528\u4E0D\u540C\u7684\u7F51\u7EDC\uFF0C\u4FDD\u8BC1\u96C6\u7FA4\u662F\u5B89\u5168\u548C\u5065\u5EB7\u7684</p><p>mysql - \u4E0D\u540C\u7684\u96C6\u7FA4\u4F7F\u7528\u4E0D\u540C\u7684\u7F51\u7EDC\uFF0C\u4FDD\u8BC1\u96C6\u7FA4\u662F\u5B89\u5168\u548C\u5065\u5EB7\u7684</p><h3 id="\u7F51\u7EDC\u8FDE\u901A" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u8FDE\u901A" aria-hidden="true">#</a> \u7F51\u7EDC\u8FDE\u901A</h3><p>docker network connect [options] network container</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u6D4B\u8BD5\u6253\u901A tomcat01 -mynet

# \u8FDE\u901A\u4E4B\u540E\u5C31\u662F\u5C06tomcat01 \u653E\u5230\u4E86 mynet \u7F51\u7EDC\u4E0B\uFF1F

# \u4E00\u4E2A\u5BB9\u5668\u4E24\u4E2Aip\u5730\u5740\uFF01 \u963F\u91CC\u4E91\u670D\u52A1 \u516C\u7F51ip \u79C1\u7F51ip
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># 01 \u8FDE\u901Aok
docker exec -it tomcat01 ping tomcat-net-01

# 02\u6253\u4E0D\u901A
docker exec -it tomcat02 ping tomcat-net-01
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u7ED3\u8BBA\uFF1A\u5047\u8BBE\u8981\u8DE8\u7F51\u7EDC\u64CD\u4F5C\u522B\u4EBA\uFF0C\u5C31\u9700\u8981\u4F7F\u7528docker network connect \u8FDE\u901A\uFF01\u3002\u3002\u3002</p><h3 id="\u90E8\u7F72redis\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72redis\u96C6\u7FA4" aria-hidden="true">#</a> \u90E8\u7F72Redis\u96C6\u7FA4</h3><p>\u5988\u7684\u5B66\u4E0D\u4F1A\u3002\u653E\u5F03</p><h2 id="springboot\u5FAE\u670D\u52A1\u6253\u5305docker\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#springboot\u5FAE\u670D\u52A1\u6253\u5305docker\u955C\u50CF" aria-hidden="true">#</a> SpringBoot\u5FAE\u670D\u52A1\u6253\u5305Docker\u955C\u50CF</h2><p>1\u3001\u6784\u5EFAspringboot\u9879\u76EE</p><p>2\u3001\u6253\u5305\u5E94\u7528</p><p>3\u3001\u7F16\u5199dockerfile</p><p>4\u3001\u6784\u5EFA\u955C\u50CF</p><p>5\u3001\u53D1\u5E03\u8FD0\u884C\uFF01</p>`,61);function f(v,x){const e=t("ExternalLinkIcon");return l(),c(r,null,[u,s("ul",null,[b,s("li",null,[m,s("p",null,[k,s("a",d,[g,o(e)])])]),q]),h],64)}var M=p(i,[["render",f],["__file","Docker\u5B66\u4E60\u7B14\u8BB0.html.vue"]]);export{M as default};

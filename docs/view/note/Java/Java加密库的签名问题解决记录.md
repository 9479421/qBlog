# Java加密库的签名问题解决记录

```java
<dependency>
    <groupId>org.bouncycastle</groupId>
    <artifactId>bcprov-jdk15on</artifactId>
    <version>1.64</version>
</dependency>
```

今天在调用Java执行SM4加密的时候

Cipher cipher = Cipher.*getInstance*(algorithmName, BouncyCastleProvider.*PROVIDER_NAME*);
Key sm4Key = new SecretKeySpec(key, *ALGORITHM_NAME*);
cipher.init(mode, sm4Key);
return cipher;

以上代码一切正常

但是将代码部署到windows服务器，oracle jdk 1.8 环境时，却触发了如下报错

```java
JCE cannot authenticate the provider BC
```

问题好像出在相关加密jar有签名校验，但是我在云函数部署的openJdk1.8却能正常运行使用。

试了半天，找到一个能用解决方案。

去maven找到相关加密库的jar

![image-20230907011600693](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/image-20230907011600693.png)

复制bcprov-jdk15on-1.64.jar到java的jre/lib/ext目录下，重新运行即可。
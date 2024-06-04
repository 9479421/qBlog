<template><div><h1 id="unity导出sprite图片集" tabindex="-1"><a class="header-anchor" href="#unity导出sprite图片集"><span>Unity导出Sprite图片集</span></a></h1>
<blockquote>
<h4 id="转载" tabindex="-1"><a class="header-anchor" href="#转载"><span>转载</span></a></h4>
</blockquote>
<h4 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言"><span>一、前言</span></a></h4>
<p>有时候，我们需要将一张大图分离成多张小图单独保存成文件。比如下面这张图，我只想要第一只小鸟的图。<br>
<img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202406042356377.png" alt="在这里插入图片描述"><br>
我们可以利用<code v-pre>Unity</code>的<code v-pre>TextureImporter</code>类的<code v-pre>spritesheet</code>成员获取到每个小图的信息，然后再分别保存成小图文件即可。</p>
<h4 id="二、操作步骤" tabindex="-1"><a class="header-anchor" href="#二、操作步骤"><span>二、操作步骤</span></a></h4>
<h5 id="_1、图片格式设置" tabindex="-1"><a class="header-anchor" href="#_1、图片格式设置"><span>1、图片格式设置</span></a></h5>
<p>将图片导入<code v-pre>Unity</code>中，格式设置为<code v-pre>Sprite (2D and UI)</code>，将<code v-pre>Sprite Mode</code>设置为<code v-pre>Multiple</code>，点击<code v-pre>Apply</code>。<br>
<img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202406042357123.png" alt="在这里插入图片描述"></p>
<h5 id="_2、slice切割" tabindex="-1"><a class="header-anchor" href="#_2、slice切割"><span>2、<a href="https://so.csdn.net/so/search?q=Slice&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">Slice<ExternalLinkIcon/></a>切割</span></a></h5>
<p>点击<code v-pre>Sprite Editor</code>，<br>
<img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202406042357082.png" alt="在这里插入图片描述"><br>
点击<code v-pre>Slice</code>下拉按钮，根据实际情况设置切割模式，比如这张鸟图直接设置<code v-pre>Automatic</code>即可，然后点击<code v-pre>Slice</code>按钮。<br>
<img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202406042357348.png" alt="在这里插入图片描述"><br>
切割成功后，点击<code v-pre>Apply</code>保存。<br>
<img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202406042357604.png" alt="在这里插入图片描述"></p>
<h5 id="_3、splittexture脚本" tabindex="-1"><a class="header-anchor" href="#_3、splittexture脚本"><span>3、SplitTexture脚本</span></a></h5>
<p>将下面的代码保存为<code v-pre>SplitTexture.cs</code>，放在<code v-pre>Editor</code>文件夹中。<br>
<img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202406042357792.png" alt="在这里插入图片描述"><br>
<code v-pre>SplitTexture.cs</code>代码如下：</p>
<div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre v-pre class="language-c#"><code>// SplitTexture.cs

using UnityEngine;
using UnityEditor;
using System.IO;

/// &lt;summary&gt;
/// 将图片分离成多张小图
/// &lt;/summary&gt;
public class SplitTexture
{
    [MenuItem(&quot;Tools/SplitTexture&quot;)]
    static void DoSplitTexture()
    {
        // 获取所选图片
        Texture2D selectedImg = Selection.activeObject as Texture2D;
        string rootPath = Path.GetDirectoryName(AssetDatabase.GetAssetPath(selectedImg));
        string path = rootPath + &quot;/&quot; + selectedImg.name + &quot;.png&quot;;
        TextureImporter texImp = AssetImporter.GetAtPath(path) as TextureImporter;
        // 设置为可读
        texImp.isReadable = true;
        AssetDatabase.ImportAsset(path);

        // 创建文件夹
        AssetDatabase.CreateFolder(rootPath, selectedImg.name);
        
        foreach (SpriteMetaData metaData in texImp.spritesheet)
        {
            var width = (int)metaData.rect.width;
            var height = (int)metaData.rect.height;
            Texture2D smallImg = new Texture2D(width, height);
            var pixelStartX = (int)metaData.rect.x;
            var pixelEndX = pixelStartX + width;
            var pixelStartY = (int)metaData.rect.y;
            var pixelEndY = pixelStartY + height;
            for (int x = pixelStartX; x &lt;= pixelEndX; ++x)
            {
                for (int y = pixelStartY; y &lt;= pixelEndY; ++y)
                {
                    smallImg.SetPixel(x - pixelStartX, y - pixelStartY, selectedImg.GetPixel(x, y));
                }
            }

            //  转换纹理到EncodeToPNG兼容格式
            if (TextureFormat.ARGB32 != smallImg.format  &amp;&amp; TextureFormat.RGB24 != smallImg.format)
            {
                Texture2D img = new Texture2D(smallImg.width, smallImg.height);
                img.SetPixels(smallImg.GetPixels(0), 0);
                smallImg = img;
            }

            // 保存小图文件
            string smallImgPath = rootPath + &quot;/&quot; + selectedImg.name + &quot;/&quot; + metaData.name + &quot;.png&quot;;
            File.WriteAllBytes(smallImgPath, smallImg.EncodeToPNG());
            // 刷新资源窗口界面
            AssetDatabase.Refresh();
            // 设置小图的格式
            TextureImporter smallTextureImp = AssetImporter.GetAtPath(smallImgPath) as TextureImporter;
            // 设置为可读
            smallTextureImp.isReadable = true;
            // 设置alpha通道
            smallTextureImp.alphaIsTransparency = true;
            // 不开启mipmap
            smallTextureImp.mipmapEnabled = false;
            AssetDatabase.ImportAsset(smallImgPath);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4、执行菜单命令" tabindex="-1"><a class="header-anchor" href="#_4、执行菜单命令"><span>4、执行菜单命令</span></a></h5>
<p>选中要分割的大图，<br>
<img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202406042357487.png" alt="在这里插入图片描述"><br>
点击菜单<code v-pre>Tools / SplitTexture</code>，<br>
<img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202406042357056.png" alt="在这里插入图片描述"><br>
此时就会在大图同级目录下生成一个同名的文件夹，分离的小图就会保存在这个文件夹中。<br>
<img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202406042357766.png" alt="在这里插入图片描述"></p>
<h4 id="三、结束" tabindex="-1"><a class="header-anchor" href="#三、结束"><span>三、结束</span></a></h4>
<p>这样，我们就得到了我们想要的小图了。<br>
<img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202406042358048.png" alt="在这里插入图片描述"></p>
</div></template>



---
title: Unity导出Sprite图片集
date: 2024-06-05
category:
  - History
tag:
  - C#
  - Unity游戏
---
# Unity导出Sprite图片集

> #### 转载
>

#### 一、前言

有时候，我们需要将一张大图分离成多张小图单独保存成文件。比如下面这张图，我只想要第一只小鸟的图。  
![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202406042356377.png)  
我们可以利用`Unity`的`TextureImporter`类的`spritesheet`成员获取到每个小图的信息，然后再分别保存成小图文件即可。

#### 二、操作步骤

##### 1、图片格式设置

将图片导入`Unity`中，格式设置为`Sprite (2D and UI)`，将`Sprite Mode`设置为`Multiple`，点击`Apply`。  
![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202406042357123.png)

##### 2、[Slice](https://so.csdn.net/so/search?q=Slice&spm=1001.2101.3001.7020)切割

点击`Sprite Editor`，  
![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202406042357082.png)  
点击`Slice`下拉按钮，根据实际情况设置切割模式，比如这张鸟图直接设置`Automatic`即可，然后点击`Slice`按钮。  
![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202406042357348.png)  
切割成功后，点击`Apply`保存。  
![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202406042357604.png)

##### 3、SplitTexture脚本

将下面的代码保存为`SplitTexture.cs`，放在`Editor`文件夹中。  
![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202406042357792.png)  
`SplitTexture.cs`代码如下：

```c#
// SplitTexture.cs

using UnityEngine;
using UnityEditor;
using System.IO;

/// <summary>
/// 将图片分离成多张小图
/// </summary>
public class SplitTexture
{
    [MenuItem("Tools/SplitTexture")]
    static void DoSplitTexture()
    {
        // 获取所选图片
        Texture2D selectedImg = Selection.activeObject as Texture2D;
        string rootPath = Path.GetDirectoryName(AssetDatabase.GetAssetPath(selectedImg));
        string path = rootPath + "/" + selectedImg.name + ".png";
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
            for (int x = pixelStartX; x <= pixelEndX; ++x)
            {
                for (int y = pixelStartY; y <= pixelEndY; ++y)
                {
                    smallImg.SetPixel(x - pixelStartX, y - pixelStartY, selectedImg.GetPixel(x, y));
                }
            }

            //  转换纹理到EncodeToPNG兼容格式
            if (TextureFormat.ARGB32 != smallImg.format  && TextureFormat.RGB24 != smallImg.format)
            {
                Texture2D img = new Texture2D(smallImg.width, smallImg.height);
                img.SetPixels(smallImg.GetPixels(0), 0);
                smallImg = img;
            }

            // 保存小图文件
            string smallImgPath = rootPath + "/" + selectedImg.name + "/" + metaData.name + ".png";
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
```


##### 4、执行菜单命令

选中要分割的大图，  
![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202406042357487.png)  
点击菜单`Tools / SplitTexture`，  
![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202406042357056.png)  
此时就会在大图同级目录下生成一个同名的文件夹，分离的小图就会保存在这个文件夹中。  
![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202406042357766.png)

#### 三、结束

这样，我们就得到了我们想要的小图了。  
![在这里插入图片描述](https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/202406042358048.png)
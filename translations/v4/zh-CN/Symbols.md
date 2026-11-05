---
layout: default
---
# 符号
{: #symbols}

符号是 TinyCAD 原理图的核心构建模块。您可以从库中放置符号、设置其属性，然后连接其引脚，构建电气上有效的设计。

您可以使用自己的符号，也可以直接从 TinyCAD.net 网站下载符号。

另请参阅：

- [使用符号库](../Using-Symbol-Libraries/)
- [自定义符号库](../Custom-symbol-libraries/)

## 查找并放置符号
{: #find-and-place-symbols}

1. 在搜索框中输入所需符号的名称
2. 选择符号以查看预览，然后选中所需的符号
3. 将符号从预览区拖到图纸上

{% include video-player.html
	src="/v4/images/video/Video 6.mp4"
	width=1280
	height=822
	caption="介绍如何查找和放置符号的视频教程。"
%}



## 放置时调整方向
{: #orientation-while-placing}

放置符号时，可使用工具栏上的旋转和翻转按钮设置方向。

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />


## 编辑和移动符号文本
{: #editing-and-moving-symbol-text}

放置后，您可以拖动整个符号来移动它。

您还可以单独移动符号文本字段（例如值/名称/参考标号）：选中符号，然后将各字段拖到合适的位置。

单击文本即可编辑。

{% include video-player.html
	src="/v4/images/video/Video 1.mp4"
	width=284
	height=248
	caption="介绍如何编辑和重新放置符号文本的视频教程。"
%}

## 原理图中的符号属性
{: #symbol-attributes-in-a-schematic}

放置的符号通常包含以下关键属性：

- **名称/值**：元件的类型（例如 `10k`、`100nF`、器件类型）
- **参考标号**：图纸/项目中的唯一标识符（例如 `R1`、`U3`）
- **封装**（可选）：用于后续导出流程的封装标识符

参考标号必须保持唯一。需要时，TinyCAD 工具可以帮助自动生成或重新注释参考标号。

您可以根据需要添加额外属性，用于项目元数据、PCB 流程或仿真元数据。

## 相关页面
{: #related-pages}

- [导线](../Wires/)
- [标签](../Labels/)
- [不连接](../No-Connects/)
- [编辑符号](../Editing-a-Symbol/)

- 返回[绘图](../User-guide/)
- 返回[v4 目录](../CONTENTS/)

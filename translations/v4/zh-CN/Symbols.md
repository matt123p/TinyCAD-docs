---
layout: default
---
# 符号
{: #symbols}

符号是 TinyCAD 原理图的核心构成元素。你可以从库中放置符号、设置其属性，然后连接引脚，构建电气有效的设计。

左侧的库选择器提供三个来源：**Standard**（标准）用于捆绑库，**Online**（在线）用于搜索 TinyCAD.net，**My Libraries**（我的库）用于自己的库文件。

[AI assistant](../AI-Assistant/) 也可以根据数据手册查找或创建符号，并将其直接放置到图纸中。如果希望它构建可重复使用的库元件，请打开自定义库进行编辑。

## 查找符号
{: #find-a-symbol}

### 使用捆绑库
{: #use-the-bundled-libraries}

选择 **Standard**，然后从 **Choose a standard library**（选择标准库）中选择一个集合。浏览其中的元件，或在 **Search libraries...**（搜索库...）中输入名称，以筛选所选集合。切换集合时，已放置在图纸中的符号不会被移除。

[捆绑库](../Bundled-Libraries/) 包含建模电路元件，以及用于网络、嵌入式、音频、实验室、运动控制和太阳能布局的实体设备。这些库随 TinyCAD 一同提供，可在浏览器和 Desktop App 中使用；无需账户、单独下载或导入库。有关各集合的内容和用途，请参阅库指南。

### 在线搜索
{: #search-online}

如果捆绑集合中没有所需内容，请选择 **Online**，然后在 **Search libraries...** 中输入元件名称或零件编号。TinyCAD 会搜索 TinyCAD.net 符号集合，并显示匹配的符号及其图稿预览。在线搜索需要互联网连接。

选择搜索结果以查看其预览和说明，然后将图稿拖到图纸中。无需先下载单独的库。请确认引脚名称和编号与计划使用的元件及封装相符。

### 找不到所需符号时
{: #if-you-cannot-find-the-symbol-you-want}

使用[自定义符号库](../Custom-symbol-libraries/) 创建一个 `.tclib` 库，或打开已有库。你可以通过选择器中的 **My Libraries** 访问自己的库。

你可以绘制新符号，或修改合适的现有符号副本；有关其图形、引脚和属性，请参阅[编辑符号](../Editing-a-Symbol/)。你也可以将 KiCad 符号[导入自定义库](../Importing-Symbols-from-KiCAD/)。捆绑库为只读，因此请将自己的定义保存在自定义库中。

## 放置选定的符号
{: #place-the-chosen-symbol}

1. 选择 **Standard**、**Online** 或 **My Libraries**，然后浏览或搜索相应来源。
2. 选择搜索结果以查看较大的预览和说明。
3. 将符号图稿从列表或预览中拖到图纸上，然后将其放置在网格上。
4. 放置完所有副本后，按 **Escape** 或单击鼠标右键。

下方视频演示了如何查找和放置符号。有关浏览和管理选择器的更多信息，请参阅[使用符号库](../Using-Symbol-Libraries/)。

{% include video-player.html
	src="/v4/Images/video/Video 6.mp4"
	width=1280
	height=822
	caption="查找和放置符号的视频演示。"
%}



## 放置时的方向
{: #orientation-while-placing}

放置符号时，使用工具栏上的旋转和翻转按钮设置方向。

<img src="/v4/Images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />


## 编辑和移动符号文本
{: #editing-and-moving-symbol-text}

放置后，可以通过拖动来移动整个符号。

也可以独立移动符号文本字段（例如值/名称/参考标号）：选择符号，然后将各字段拖到更合适的位置。

单击文本即可编辑。

{% include video-player.html
	src="/v4/Images/video/Video 1.mp4"
	width=284
	height=248
	caption="编辑和重新定位符号文本的视频演示。"
%}

## 原理图中的符号属性
{: #symbol-attributes-in-a-schematic}

放置的符号通常包含以下关键属性：

- **名称/值**：元件的类型（例如 `10k`、`100nF`、器件类型）
- **参考标号**：图页/项目中的唯一标识符（例如 `R1`、`U3`）
- **封装**（可选）：在下游导出流程中使用的焊盘封装/封装标识符

参考标号必须保持唯一。需要时，TinyCAD 工具可以帮助自动生成或重新编注参考标号。

你可以根据需要添加其他属性，用于项目元数据、PCB 流程或仿真元数据。

## 相关页面
{: #related-pages}

- [导线](../Wires/)
- [标签](../Labels/)
- [不连接](../No-Connects/)
- [编辑符号](../Editing-a-Symbol/)

- 返回[绘图](../User-guide/)
- 返回[v4 目录](../CONTENTS/)

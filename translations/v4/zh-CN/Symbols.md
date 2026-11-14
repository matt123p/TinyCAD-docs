---
layout: default
---
# 符号
{: #symbols}

符号是 TinyCAD 原理图的核心构建块。您可以从库中放置符号，设置其属性，然后连接引脚以构建符合电气规则的设计。

左侧的库选择器提供三个来源：**标准**（Standard），用于内置库；**在线**（Online），用于搜索 TinyCAD.net；以及**我的库**（My Libraries），用于您自己的库文件。

## 查找符号
{: #find-a-symbol}

### 使用内置库
{: #use-the-bundled-libraries}

选择**标准**（Standard），然后从**选择标准库**（Choose a standard library）中选择一个集合。浏览其中的元件，或在**搜索库...**（Search libraries...）中输入名称，以筛选所选集合。您可以切换集合，而不会移除已放置在图纸中的符号。

[内置库](../Bundled-Libraries/)]包含带模型的电路元件，以及适用于网络、嵌入式、音频、实验室、运动控制和太阳能布局的实体设备。这些库随 TinyCAD 一同提供，可在浏览器和桌面应用中使用；无需帐户、单独下载或导入库。有关各集合的内容和用途，请参阅库指南。

### 在线搜索
{: #search-online}

如果内置集合中没有所需内容，请选择**在线**（Online），然后在**搜索库...**（Search libraries...）中输入元件名称或料号。TinyCAD 会搜索 TinyCAD.net 符号集合，并显示带有图形预览的匹配符号。在线搜索需要互联网连接。

选择搜索结果以查看其预览和说明，然后将其图形拖到图纸中。您无需先下载单独的库。请确认引脚名称和编号与您打算使用的元件和封装相符。

### 找不到所需符号时
{: #if-you-cannot-find-the-symbol-you-want}

使用[自定义符号库](../Custom-symbol-libraries/)]创建 `.tclib` 库，或打开已有库。您可以通过选择器中的**我的库**（My Libraries）访问自己的库。

您可以绘制新符号，也可以修改合适的现有符号副本；有关其图形、引脚和属性，请参阅[编辑符号](../Editing-a-Symbol/)]。您也可以将[KiCad 符号导入](../Importing-Symbols-from-KiCAD/)]自定义库。内置库为只读，因此请将自己的定义保存在自定义库中。

## 放置所选符号
{: #place-the-chosen-symbol}

1. 选择**标准**（Standard）、**在线**（Online）或**我的库**（My Libraries），然后浏览或搜索相应来源。
2. 选择一项结果，以查看较大的预览和说明。
3. 将符号图形从列表或预览中拖到图纸上，然后将其放置在网格上。
4. 完成放置副本后，按 **Escape** 或单击鼠标右键。

以下视频演示如何查找和放置符号。有关浏览和管理选择器的更多信息，请参阅[使用符号库](../Using-Symbol-Libraries/)]。

{% include video-player.html
	src="/v4/images/video/Video 6.mp4"
	width=1280
	height=822
	caption="演示如何查找和放置符号的视频讲解。"
%}



## 放置时调整方向
{: #orientation-while-placing}

放置符号时，使用工具栏上的旋转和翻转按钮设置方向。

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />


## 编辑和移动符号文字
{: #editing-and-moving-symbol-text}

放置后，您可以通过拖动来移动整个符号。

您也可以单独移动符号的文字字段（例如值/名称/参考标号）：选中符号，然后将各字段拖动到更合适的位置。

单击文字即可编辑。

{% include video-player.html
	src="/v4/images/video/Video 1.mp4"
	width=284
	height=248
	caption="演示如何编辑和重新放置符号文字的视频讲解。"
%}

## 原理图中的符号属性
{: #symbol-attributes-in-a-schematic}

放置的符号通常包含以下关键属性：

- **名称/值**：元件的内容（例如 `10k`、`100nF`、器件类型）
- **参考标号**：图纸/项目中的唯一标识符（例如 `R1`、`U3`）
- **封装**（可选）：用于后续导出流程的封装标识符

参考标号必须保持唯一。如有需要，TinyCAD 工具可以帮助自动生成或重新标注参考标号。

您还可以根据需要添加用于项目元数据、PCB 流程或仿真元数据的额外属性。

## 相关页面
{: #related-pages}

- [导线](../Wires/)]
- [标签](../Labels/)]
- [不连接](../No-Connects/)]
- [编辑符号](../Editing-a-Symbol/)]

- 返回[绘图](../User-guide/)]
- 返回[v4 内容](../CONTENTS/)]

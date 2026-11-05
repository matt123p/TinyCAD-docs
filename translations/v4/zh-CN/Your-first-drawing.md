---
layout: default
---
# 绘制你的第一个电路图
{: #your-first-drawing}

本页将引导你逐步使用 TinyCAD 绘制第一个电路图。

最简单地说，TinyCAD 图纸由多个符号组成，并通过导线连接起来。
在本例中，你将放置一些符号，然后用导线将它们连接起来。

## 示例电路
{: #example-circuit}

下面是一个要绘制的简单电路：

<img src="/v4/images/media/image1.png" alt="Simple battery, resistor, and LED circuit used in the tutorial" style="width: 2.13542in; height: 1.13542in;" />

<p>
	<a href="/v4/examples/First%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;下载
	</a>
</p>


## 视频演示
{: #video-walkthrough}

{% include video-player.html
	src="/v4/images/video/Video 2.mp4"
	width=1618
	height=922
	caption="演示如何编辑和重新定位符号文字的视频。"
%}

# 分步指南
{: #step-by-step-guide}

## 符号库
{: #symbol-libraries}

1. 在搜索框中输入 `battery`。
2. 选择 **Multi Cell Battery**。
3. 将符号从符号面板拖到图纸上。

现在放置一个电阻器和一个 LED。

使用工具栏上的旋转/翻转控件来调整符号方向：

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />

如果操作有误，请使用撤销/重做：

<img src="/v4/images/media/image6.png" alt="Undo and Redo toolbar buttons" />

你的图纸应类似于：

<img src="/v4/images/media/image7.png" alt="Battery, resistor, and LED symbols placed on the drawing before wiring" style="width: 3.76042in; height: 2.52083in;" />

## 连接电路
{: #wiring-up-a-circuit}

1. 选择 **Wire（导线）** 工具。
2. 单击电池的一个端子以开始绘制导线。
3. 移至电阻器端子，再次单击以放置导线。

导线会吸附到有效的符号连接点。红色圆圈表示吸附位置。

提示：按键盘上的 `W` 可快速重新进入导线模式。

连接完成后，图纸应类似于：

<img src="/v4/images/media/image8.png" alt="Example circuit after the battery, resistor, and LED have been wired together" style="width: 3.40625in; height: 2.38542in;" />

## 为图纸添加标注
{: #annotating-the-drawing}

符号需要元件值和位号。在 TinyCAD 中，这些通常是符号的 **Name（名称）** 和 **Ref（位号）** 字段。

1. 单击电池。
2. 转到底部的 **Symbol（符号）** 面板。
3. 将 `BATTERY_2` 更改为 `9V`。
4. 将位号 `Z?` 更改为 `B1`。

对其他元件重复上述操作：

- 电阻器：名称 `1K`，位号 `R1`
- LED：名称 `Red Led`，位号 `D1`

如果名称/位号被隐藏，请使用复选框控件显示或隐藏图纸上的文字。

## 加载和保存
{: #loading-and-saving}

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### 浏览器本地文件
{: #browser-local-files}

要保存图纸，请使用工具栏上的“另存为”或“保存”按钮：

<img src="/v4/images/media/image2.png" alt="The toolbar buttons for Save and Save As"  />


### 浏览器 Google
{: #browser-google}

你的第一个图纸已完成。要重命名：

1. 单击顶部的图纸名称（例如 `tCad1.dsn`）。
2. 将其重命名为 `First Drawing.dsn`。
3. 按 Enter。

<img src="/v4/images/media/image13.png" alt="Editable drawing title field used to rename the current design" style="width: 4.15625in; height: 0.92708in;" />

使用 **Save（保存）** 图标保存到 Google Drive。

要从 Google Drive 再次加载：

1. 打开 <https://drive.google.com/drive/>。
2. 找到该图纸。
3. 右键单击并选择 **Open with -> TinyCAD（打开方式 -> TinyCAD）**。

<img src="/v4/images/media/image14.png" alt="Google Drive context menu showing Open with TinyCAD for a drawing file" style="width: 5.09138in; height: 3.90625in;" />

你也可以在 Google Drive 中重命名和删除 TinyCAD 设计。

### 桌面应用
{: #desktop-app}

你的第一个图纸已完成。要在桌面应用中保存：

1. 打开 **File -> Save As（文件 -> 另存为）**。
2. 选择电脑上的一个文件夹。
3. 将图纸保存为 `First Drawing.dsn`。

要稍后再次加载：

1. 打开 **File -> Open（文件 -> 打开）**。
2. 浏览到 `First Drawing.dsn`。
3. 选择该文件并打开。

TinyCAD 桌面版使用与浏览器版 TinyCAD 相同的 `.dsn` 格式。你可以从 Google Drive 下载图纸，并在桌面应用中打开。

同样，你也可以在基于浏览器的 TinyCAD 版本中使用通过 TinyCAD 桌面版绘制的图纸。

</div>

## 延伸阅读
{: #further-reading}

有关自定义符号和库，请继续阅读[自定义符号库](../Custom-symbol-libraries/)。

- 返回[绘图](../User-guide/)
- 返回[v4 目录](../CONTENTS/)

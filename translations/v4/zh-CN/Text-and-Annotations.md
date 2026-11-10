---
layout: default
---
# 文本与注释
{: #text--annotations}

文本和注释工具用于编写文档和增强视觉清晰度。

这些对象**不具有电气属性**，在生成网络表和执行设计
规则检查时会被忽略。

## 文本与标签
{: #text-vs-labels}

- 使用**文本**添加注释、标注、标题和制造说明。
- 使用**标签**为具有电气属性的网络命名。

如果需要标签时使用了文本，该网络将无法连接。

## 什么是 Markdown？
{: #what-is-markdown}

Markdown 使用简单的输入标记为纯文本添加格式。TinyCAD 会读取这些标记，并将内容显示为标题、粗体文本和列表。

| 输入的内容 | 表示的格式 |
|---|---|
| `# Power supply` | 标题 |
| `**Check polarity**` | 粗体文本 |
| `*Optional*` | 斜体文本 |
| `- R1: 10 kΩ` | 无序列表中的一项 |
| `` `R1` `` | 行内代码 |

在行首使用 `#` 或 `-` 时，请在其后添加一个空格。段落之间留一个空行。

对于多行代码，请在代码前后各放置一行单独的 `~~~`。下面的完整注释示例展示了这种写法。

## Markdown 文本框
{: #markdown-text-boxes}

Markdown 文本框可在 [TinyCAD v4.0.11](../Changelog/#v4011) 中使用。

1. 选择文本（Text）工具或按 T 键，然后在图纸上拖动以绘制文本框。
2. 单击文本框内部并输入 Markdown。输入时即可看到格式效果。
3. 单击其他位置，即可查看隐藏 Markdown 标记后的格式化注释。如果内容被裁切，请增大文本框。

![使用 SVG 绘制的 Markdown 注释，包含标题、元件列表、任务列表和代码块。](../images/markdown-preview.png)

### 可编辑的 Markdown 源文本
{: #editable-markdown-source}

标题、粗体、斜体和删除线会显示相应格式，其标记仍然可见且可编辑。光标、选区和自动换行与格式化文本保持一致。围栏代码块和缩进代码按原样显示，不提供语法着色。

所选字体、字号、粗体和斜体设置构成基础样式。标题大小按该字号的比例缩放，代码也使用所选字体。撤销、复制粘贴和保存操作都会保留 Markdown 源文本。

![正在编辑同一条注释，标题、粗体、列表、任务列表和代码围栏标记均清晰可见。](../images/markdown-source-editor.png)

### 支持的格式
{: #supported-formatting}

支持标题、粗体、斜体、删除线、引用、有序列表、无序列表、任务列表、水平分隔线、行内代码，以及围栏或缩进代码块。普通换行会保留。表格、链接、图片和 HTML 均按原始文本显示，不应用特殊格式，也不加载远程图片。

例如，输入以下源文本即可创建图示注释：

````markdown
# RC filter
**Time constant:** τ = R × C

- R1: 10 kΩ
- C1: 100 nF

- [x] Draw the circuit
- [ ] Measure the response

~~~python
tau = 10_000 * 100e-9
~~~
````

## 注释对象
{: #annotation-objects}

TinyCAD 支持常见的注释形状，包括：

- 文本，
- 直线，
- 矩形，
- 椭圆，
- 圆弧，
- 多边形。

使用这些对象可以对功能块分组、突出显示区域以及添加说明性注释，而不会
改变电路连接关系。


## 绘制直线和多边形
{: #drawing-lines--polygons}

你可以绘制由多条直线组成的图形。要结束绘制，请单击鼠标右键。

你可以在上下文菜单中选择“闭合多边形（Close Polygon）”，将其转换为多边形。转换
为多边形后，你可以更改其填充。

{% include video-player.html
	src="/v4/images/video/Video 7.mp4"
	width=1620
	height=924
	caption="演示如何绘制和编辑多边形的视频教程。"
%}


- 返回[绘图](../User-guide/)
- 返回[v4 目录](../CONTENTS/)

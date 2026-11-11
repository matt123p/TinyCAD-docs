---
layout: default
---
# 文本
{: #text}

文本用于文档说明和增强视觉清晰度。

TinyCAD 的文本工具可在图纸上创建文本框。文本框是在原理图中直接添加
易读备注、说明、注释和标题的主要方式。文本框使用 [Markdown](https://{{ page.manual_language | default: 'en' | replace: 'zh-CN', 'zh' }}.wikipedia.org/wiki/Markdown)，因此无需离开图纸画布，即可使用标题、粗体、
斜体、列表、任务列表和代码块来设置文本格式。

这些对象不具有电气属性，在网表生成和设计规则检查中会被忽略。

## 文本与标签
{: #text-vs-labels}

- 使用文本添加备注、注释、标题和制造说明。
- 使用标签添加具有电气作用的网络名称。

如果需要标签时却使用了文本，网络将无法连接。

## 什么是 Markdown？
{: #what-is-markdown}
{: #what-is-markdown}

Markdown 使用简单的输入标记为纯文本添加格式。TinyCAD 会识别这些标记，
并显示标题、粗体文本和列表。

| 输入内容 | 含义 |
|---|---|
| `# Power supply` | 标题 |
| `**Check polarity**` | 粗体文本 |
| `*Optional*` | 斜体文本 |
| `- R1: 10 kΩ` | 项目符号列表项 |
| `` `R1` `` | 行内代码 |

在 `#` 或 `-` 开始一行时，请在其后输入空格。段落之间留一个空行。

要输入多行代码，请在代码前后各自单独一行输入 `~~~`。
下面的完整备注示例展示了这一点。

## Markdown 文本框
{: #markdown-text-boxes}
{: #markdown-text-boxes}

Markdown 文本框从 [TinyCAD v4.0.11](../Changelog/#v4011) 起提供。

1. 选择“文本”(Text)（或按 T），然后在图纸上拖出一个框。
2. 在框内单击并输入 Markdown。输入时即可看到格式效果。
3. 单击其他位置，即可查看不带 Markdown 标记的格式化备注。如果内容被截断，请调整文本框大小。

![使用 SVG 渲染的 Markdown 备注，其中包含标题、元件列表、任务列表和代码块。](../images/markdown-preview.png)

### 可编辑的 Markdown 源文本
{: #editable-markdown-source}
{: #editable-markdown-source}

标题、粗体、斜体和删除线会显示格式效果，同时其标记仍然可见且可编辑。插入符、
选区和自动换行会随样式文本变化。围栏式和缩进式代码保持原样；
不会应用语法着色。

所选字体系列、字号、粗体和斜体设置构成基本样式。
标题会相对于该字号缩放；代码也使用所选字体系列。撤销、
复制/粘贴和保存操作都会保留 Markdown 源文本。

![编辑同一备注时，可见标题、粗体、列表、任务列表和代码围栏标记。](../images/markdown-source-editor.png)

### 支持的格式
{: #supported-formatting}
{: #supported-formatting}

支持的格式包括标题、粗体、斜体、删除线、引用、有序列表和项目符号列表、
任务列表、水平分隔线、行内代码以及围栏式或缩进式代码块。普通换行会保留。表格、
链接、图像和 HTML 会作为原始文本显示，不进行特殊格式处理，也不会加载远程图像。

例如，输入以下源文本即可创建插图所示的备注：

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

- 另请参阅：[形状](../Shapes/)
- 返回[绘图](../User-guide/)
- 返回[v4 目录](../CONTENTS/)

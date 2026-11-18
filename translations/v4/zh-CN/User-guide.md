---
layout: default
---
# TinyCAD - 绘图
{: #tinycad---drawing}

[AI 助手](../AI-Assistant/) 可以根据书面指令创建电路，或向打开的图纸中添加元件。其编辑结果仍可编辑，并支持撤消。

本节介绍核心绘图工作流程，包括首次绘图设置、
标签、总线、未连接标记、注释和打印。

如需重新排列现有电路，请参阅[布局整理](../Layout-Tidy-Up/)。该节介绍自动布局范围、力度设置，以及如何使用撤消还原结果。

如需使用徽标、参考图片和扫描的图表，请参阅[图像](../Images/)。该节介绍复制和粘贴、导入文件、调整大小、固定纵横比和像素裁剪。

## 临时隐藏对象
{: #temporarily-hiding-objects}

要访问绘图中拥挤部分下方的对象，请执行以下操作：

1. 选择要移开的对象。
2. 打开绘图上下文菜单（右键单击，或在触摸屏上长按）
   并选择**隐藏所选对象**。
3. 完成后，打开上下文菜单并选择**显示所有隐藏对象**，
   以恢复当前图纸上的所有隐藏对象。

对象隐藏时，无法在画布上选中它们。隐藏是一种
临时视图设置：它不会删除对象，也不会在图纸文件中保存隐藏标记。隐藏对象仍会参与电气连接和
网表生成，也仍会出现在打印和 PDF 输出中。

有关触摸屏手势和精确放置，请参阅[触摸控件](../Touch-controls/)。

## 页面
{: #pages}

{% assign current_version = page.url | split: '/' | slice: 1, 1 | first -%}
{% assign section = nil -%}
{% for entry in site.data.navigation[current_version] -%}
	{% if entry.url == page.url -%}
		{% assign section = entry -%}
		{% break -%}
	{% endif -%}
{% endfor -%}
{% if section and section.children %}
{% for child in section.children -%}
- [{{ child.title }}]({{ child.url | relative_url }})
{% endfor %}
{% endif %}

- 返回 [v4 目录](../CONTENTS/)

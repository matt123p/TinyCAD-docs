---
layout: default
---
# TinyCAD - 绘图
{: #tinycad---drawing}

本节介绍核心绘图工作流程，包括首次绘图设置、
标签、总线、无连接标记、注释和打印。

有关重新排列现有电路的信息，请参见[布局整理](../Layout-Tidy-Up/)。该部分介绍自动布局的作用范围、强度设置，以及如何使用“撤销”还原结果。

## 临时隐藏对象
{: #temporarily-hiding-objects}

要访问绘图中拥挤区域下方的对象：

1. 选择要暂时移开的对象。
2. 打开绘图上下文菜单（右键单击，或在触摸屏上长按），
   然后选择**隐藏所选对象（Hide selected）**。
3. 完成后，打开上下文菜单并选择**显示所有隐藏对象（Show all hidden objects）**，
   即可恢复当前图纸上的所有隐藏对象。

对象隐藏时，无法在画布上选中它们。隐藏是一种
临时视图设置：不会删除对象，也不会在绘图文件中保存隐藏标记。隐藏的对象仍会参与电气连接和
网表生成，也仍会出现在打印和 PDF 输出中。

有关触摸屏手势和精确放置的信息，请参见[触摸控制](../Touch-controls/)。

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

- 返回[v4 目录](../CONTENTS/)

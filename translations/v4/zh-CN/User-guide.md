---
layout: default
---
# TinyCAD v4 - 绘图
{: #tinycad-v4---drawing}

本节介绍核心绘图工作流程，包括首次绘图设置、
标签、总线、不连接标记、注释和打印。

## 临时隐藏对象
{: #temporarily-hiding-objects}

要访问绘图中拥挤区域下方的对象：

1. 选择要暂时移开的对象。
2. 打开绘图上下文菜单（右键单击，或在触摸屏上长按），
   然后选择 **隐藏所选项（Hide selected）**。
3. 完成后，打开上下文菜单并选择 **显示所有隐藏对象（Show all hidden objects）**，
   以恢复当前工作表上的所有隐藏对象。

对象隐藏时，无法在画布上选中。隐藏是一种
临时视图设置：它不会删除对象，也不会在绘图文件中保存隐藏标记。隐藏对象仍会参与电气连接和
网表生成，也仍会出现在打印和 PDF 输出中。

有关触摸屏手势和精确放置，请参阅 [触摸控制](../Touch-controls/)。

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

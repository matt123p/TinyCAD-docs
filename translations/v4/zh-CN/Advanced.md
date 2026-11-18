---
layout: default
---
# TinyCAD - 高级
{: #tinycad---advanced}

本节介绍高级编辑、验证和输出工作流程。

另请参阅[仿真与 SPICE](../Simulation/)，了解集成电路分析；以及 [SPICE 模型和网表输出](../SPICE-output/)，了解模型模板和外部仿真器导出。

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

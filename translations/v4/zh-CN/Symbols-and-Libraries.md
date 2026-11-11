---
layout: default
---
# TinyCAD - 符号与库
{: #tinycad---symbols--libraries}

本节介绍符号的使用和库工作流程，包括导入、
编辑和自定义库管理。

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

- 返回 [v4 内容](../CONTENTS/)

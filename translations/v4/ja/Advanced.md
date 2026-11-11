---
layout: default
---
# TinyCAD - 高度な機能
{: #tinycad-v4---advanced}

このセクションでは、高度な編集、検証、出力のワークフローについて説明します。

## ページ
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

- [v4 目次に戻る](../CONTENTS/)

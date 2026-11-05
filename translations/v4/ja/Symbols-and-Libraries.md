---
layout: default
---
# TinyCAD v4 - シンボルとライブラリ
{: #tinycad-v4---symbols--libraries}

このセクションでは、シンボルの使用方法とライブラリのワークフロー（インポート、
編集、カスタムライブラリの管理など）について説明します。

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

- [v4の目次](../CONTENTS/)

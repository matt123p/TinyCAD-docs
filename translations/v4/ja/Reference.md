---
layout: default
---
# TinyCAD - リファレンス
{: #tinycad-v4---reference}

このセクションは、従来のオンラインマニュアルから現在移行中の
リファレンス資料への入口です。

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

- [v4の目次に戻る](../CONTENTS/)

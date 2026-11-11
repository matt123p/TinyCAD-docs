---
layout: default
---
# TinyCAD - 参考資料
{: #tinycad---reference}

このセクションは、旧オンラインマニュアルから現在移行されている
参考資料の入口です。

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

- [v4 の目次に戻る](../CONTENTS/)

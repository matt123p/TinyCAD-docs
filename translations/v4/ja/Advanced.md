---
layout: default
---
# TinyCAD - 応用編
{: #tinycad---advanced}

このセクションでは、高度な編集、検証、および出力のワークフローについて説明します。

集積回路解析については[シミュレーションとSPICE](../Simulation/)を、モデルテンプレートと外部シミュレーターへのエクスポートについては[SPICEモデルとネットリスト出力](../SPICE-output/)も参照してください。

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

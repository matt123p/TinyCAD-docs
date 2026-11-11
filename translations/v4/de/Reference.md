---
layout: default
---
# TinyCAD – Referenz
{: #tinycad-v4---reference}

Dieser Abschnitt ist der Einstiegspunkt für Referenzmaterial, das derzeit aus
dem alten Online-Handbuch übernommen wird.

## Seiten
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

- Zurück zu [Inhaltsverzeichnis v4](../CONTENTS/)

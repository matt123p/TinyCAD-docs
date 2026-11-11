---
layout: default
---
# TinyCAD – Fortgeschrittene Themen
{: #tinycad-v4---advanced}

Dieser Abschnitt behandelt fortgeschrittene Bearbeitungs-, Validierungs- und Ausgabeabläufe.

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

- Zurück zu [Inhalt von v4](../CONTENTS/)

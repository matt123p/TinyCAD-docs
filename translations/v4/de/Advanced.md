---
layout: default
---
# TinyCAD – Erweitert
{: #tinycad---advanced}

In diesem Abschnitt geht es um erweiterte Bearbeitungs-, Validierungs- und Ausgabeabläufe.

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

- Zurück zum [Inhaltsverzeichnis von v4](../CONTENTS/)

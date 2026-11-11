---
layout: default
---
# TinyCAD – Symbole & Bibliotheken
{: #tinycad-v4---symbols--libraries}

In diesem Abschnitt geht es um die Verwendung von Symbolen und um Bibliotheks-Workflows, einschließlich des Imports,
der Bearbeitung und der Verwaltung benutzerdefinierter Bibliotheken.

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

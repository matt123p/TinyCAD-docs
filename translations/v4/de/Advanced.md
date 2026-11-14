---
layout: default
---
# TinyCAD – Erweitert
{: #tinycad---advanced}

Dieser Abschnitt behandelt fortgeschrittene Bearbeitungs-, Prüf- und Ausgabeabläufe.

Siehe auch [Simulation und SPICE](../Simulation/) für die integrierte Schaltungsanalyse sowie [SPICE-Modelle und Netlistenausgabe](../SPICE-output/) für Modellvorlagen und den Export in externe Simulatoren.

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

- Zurück zu [Inhalt v4](../CONTENTS/)

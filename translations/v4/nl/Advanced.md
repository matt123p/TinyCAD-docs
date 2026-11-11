---
layout: default
---
# TinyCAD - Geavanceerd
{: #tinycad---advanced}

Dit gedeelte behandelt geavanceerde bewerkings-, validatie- en uitvoerworkflows.

## Pagina's
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

- Terug naar de [inhoudsopgave van v4](../CONTENTS/)

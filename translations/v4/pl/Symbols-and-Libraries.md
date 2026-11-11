---
layout: default
---
# TinyCAD — Symbole i biblioteki
{: #tinycad---symbols--libraries}

Ta sekcja omawia korzystanie z symboli i pracę z bibliotekami, w tym importowanie,
edytowanie oraz zarządzanie bibliotekami niestandardowymi.

## Strony
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

- Wróć do [spisu treści v4](../CONTENTS/)

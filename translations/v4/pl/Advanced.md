---
layout: default
---
# TinyCAD - Zaawansowane
{: #tinycad-v4---advanced}

Ta sekcja omawia zaawansowaną edycję, weryfikację i procedury tworzenia danych wyjściowych.

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

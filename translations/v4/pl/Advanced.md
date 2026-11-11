---
layout: default
---
# TinyCAD — zaawansowane
{: #tinycad---advanced}

Ta sekcja opisuje zaawansowane procesy edycji, weryfikacji i generowania danych wyjściowych.

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

- Powrót do [spisu treści v4](../CONTENTS/)

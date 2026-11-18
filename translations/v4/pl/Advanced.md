---
layout: default
---
# TinyCAD — zaawansowane
{: #tinycad---advanced}

Ta sekcja opisuje zaawansowane przepływy pracy związane z edycją, walidacją i generowaniem danych wyjściowych.

Zobacz także [Symulacja i SPICE](../Simulation/) — informacje o analizie układów scalonych — oraz [Modele SPICE i generowanie netlist](../SPICE-output/) — informacje o szablonach modeli i eksporcie do zewnętrznego symulatora.

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

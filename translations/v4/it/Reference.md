---
layout: default
---
# TinyCAD v4 - Riferimento
{: #tinycad-v4---reference}

Questa sezione è il punto di accesso al materiale di riferimento attualmente migrato
dal manuale online precedente.

## Pagine
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

- Torna ai [contenuti della v4](../CONTENTS/)

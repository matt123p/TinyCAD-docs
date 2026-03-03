---
layout: default
---

# TinyCAD v4 - Getting Started

TinyCAD v4 supports two usage modes:

- Desktop app (Electron)
- Online app (browser)

This section starts with the migrated quick-start information from the previous
online manual, including browser requirements, local vs Google Drive storage,
privacy notes, and first-use sign-in flow.

## Pages

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

- Back to [v4 contents](../CONTENTS/)
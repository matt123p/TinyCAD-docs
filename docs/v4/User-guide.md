---
layout: default
---

# TinyCAD - Drawing

This section covers the core drawing workflow, including first-drawing setup,
labels, buses, no-connects, annotations, and printing.

## Temporarily hiding objects

To reach objects underneath a crowded part of a drawing:

1. Select the objects you want to put out of the way.
2. Open the drawing context menu (right-click, or long-press on a touchscreen)
   and choose **Hide selected**.
3. When finished, open the context menu and choose **Show all hidden objects**
   to restore every hidden object on the current sheet.

Hidden objects cannot be selected on the canvas while hidden. Hiding is a
temporary view setting: it does not delete objects or save a hidden flag in the
drawing file. Hidden objects still participate in electrical connectivity and
netlists, and still appear in printed and PDF output.

For touchscreen gestures and precise placement, see [Touch controls](../Touch-controls/).

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
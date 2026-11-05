---
layout: default
---
# TinyCAD v4 – Zeichnen
{: #tinycad-v4---drawing}

Dieser Abschnitt behandelt den grundlegenden Zeichenablauf, einschließlich der
Einrichtung der ersten Zeichnung, Beschriftungen, Busse, Nichtverbindungen,
Anmerkungen und des Druckens.

## Objekte vorübergehend ausblenden
{: #temporarily-hiding-objects}

So erreichen Sie Objekte unter einem dicht belegten Bereich einer Zeichnung:

1. Wählen Sie die Objekte aus, die Sie vorübergehend aus dem Weg räumen möchten.
2. Öffnen Sie das Kontextmenü der Zeichnung (Rechtsklick oder langes Drücken auf einem Touchscreen)
   und wählen Sie **Ausgewählte ausblenden**.
3. Öffnen Sie anschließend das Kontextmenü und wählen Sie **Alle ausgeblendeten Objekte anzeigen**,
   um alle ausgeblendeten Objekte auf dem aktuellen Blatt wieder einzublenden.

Ausgeblendete Objekte können auf der Zeichenfläche nicht ausgewählt werden, solange sie
verborgen sind. Das Ausblenden ist eine vorübergehende Ansichtseinstellung: Es löscht keine
Objekte und speichert keine Ausblendemarkierung in der Zeichnungsdatei. Ausgeblendete Objekte
bleiben Teil der elektrischen Verbindungen und Netzlisten und erscheinen weiterhin in
Druck- und PDF-Ausgaben.

Gesten auf Touchscreens und präzises Platzieren werden unter [Touch-Steuerung](../Touch-controls/) beschrieben.

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

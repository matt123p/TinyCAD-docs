---
layout: default
---
# TinyCAD – Zeichnen
{: #tinycad---drawing}

Dieser Abschnitt behandelt den grundlegenden Zeichenablauf, einschließlich der Einrichtung der ersten Zeichnung,
Beschriftungen, Bussen, Nichtverbindungen, Anmerkungen und dem Drucken.

## Objekte vorübergehend ausblenden
{: #temporarily-hiding-objects}

So erreichen Sie Objekte unter einem überladenen Bereich einer Zeichnung:

1. Wählen Sie die Objekte aus, die Sie aus dem Weg räumen möchten.
2. Öffnen Sie das Kontextmenü der Zeichnung (Rechtsklick oder langes Drücken auf einem Touchscreen)
   und wählen Sie **Auswahl ausblenden (Hide selected)**.
3. Öffnen Sie anschließend das Kontextmenü und wählen Sie **Alle ausgeblendeten Objekte anzeigen (Show all hidden objects)**,
   um alle ausgeblendeten Objekte auf dem aktuellen Blatt wieder einzublenden.

Ausgeblendete Objekte können auf der Arbeitsfläche nicht ausgewählt werden, solange sie ausgeblendet sind. Das Ausblenden ist eine
vorübergehende Ansichtseinstellung: Es löscht keine Objekte und speichert keine ausgeblendete Markierung in der
Zeichnungsdatei. Ausgeblendete Objekte sind weiterhin an der elektrischen Verbindung und an Netzlisten beteiligt
und erscheinen weiterhin in Druck- und PDF-Ausgaben.

Gesten für Touchscreens und präzises Platzieren finden Sie unter [Touch-Steuerung](../Touch-controls/).

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

- Zurück zu [Inhaltsverzeichnis von v4](../CONTENTS/)

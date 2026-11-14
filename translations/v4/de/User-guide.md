---
layout: default
---
# TinyCAD – Zeichnen
{: #tinycad---drawing}

Dieser Abschnitt behandelt den grundlegenden Zeichenablauf, einschließlich der
Einrichtung der ersten Zeichnung, Beschriftungen, Busse, Nichtverbindungen,
Anmerkungen und des Druckens.

Informationen zum Umordnen einer vorhandenen Schaltung finden Sie unter [Layout aufräumen](../Layout-Tidy-Up/). Dort werden Auto-Layout-Bereiche, Stärke-Einstellungen und das Rückgängigmachen eines Ergebnisses mit Undo behandelt.

## Objekte vorübergehend ausblenden
{: #temporarily-hiding-objects}

So erreichen Sie Objekte, die sich unter einem dicht gefüllten Teil einer Zeichnung befinden:

1. Wählen Sie die Objekte aus, die Sie aus dem Weg räumen möchten.
2. Öffnen Sie das Kontextmenü der Zeichnung (Rechtsklick oder langes Drücken auf einem Touchscreen)
   und wählen Sie **Ausgewählte ausblenden**.
3. Wenn Sie fertig sind, öffnen Sie das Kontextmenü und wählen Sie **Alle ausgeblendeten Objekte anzeigen**,
   um alle ausgeblendeten Objekte auf dem aktuellen Blatt wiederherzustellen.

Ausgeblendete Objekte können nicht auf der Arbeitsfläche ausgewählt werden, solange sie ausgeblendet sind. Das Ausblenden ist eine
vorübergehende Ansichtseinstellung: Es löscht keine Objekte und speichert keine Ausblende-Markierung in der
Zeichnungsdatei. Ausgeblendete Objekte sind weiterhin Bestandteil der elektrischen Konnektivität und
Netzlisten und erscheinen weiterhin in gedruckten Ausgaben und PDF-Ausgaben.

Informationen zu Touchscreen-Gesten und präziser Platzierung finden Sie unter [Touch-Steuerung](../Touch-controls/).

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

- Zurück zu den [v4-Inhalten](../CONTENTS/)

---
layout: default
---
# TinyCAD – Zeichnen
{: #tinycad---drawing}

Der [KI-Assistent](../AI-Assistant/) kann anhand schriftlicher Anweisungen eine Schaltung erstellen oder Bauteile zur geöffneten Zeichnung hinzufügen. Die Änderungen bleiben bearbeitbar und lassen sich rückgängig machen.

Dieser Abschnitt behandelt den grundlegenden Arbeitsablauf beim Zeichnen, einschließlich der Einrichtung der ersten Zeichnung,
Beschriftungen, Bussen, Nicht verbunden-Markierungen, Anmerkungen und des Druckens.

Informationen zum Neuanordnen einer vorhandenen Schaltung finden Sie unter [Layout aufräumen](../Layout-Tidy-Up/). Dort werden die Bereiche für das automatische Layout, die Stärkeeinstellungen und das Rückgängigmachen eines Ergebnisses behandelt.

Informationen zu Logos, Referenzbildern und gescannten Schaltplänen finden Sie unter [Bilder](../Images/). Dort werden Kopieren und Einfügen, Dateiimport, Größenänderung, festes Seitenverhältnis und das Beschneiden von Pixeln behandelt.

## Objekte vorübergehend ausblenden
{: #temporarily-hiding-objects}

So greifen Sie auf Objekte unter einem dicht belegten Teil der Zeichnung zu:

1. Wählen Sie die Objekte aus, die Sie aus dem Weg räumen möchten.
2. Öffnen Sie das Kontextmenü der Zeichnung (Rechtsklick oder langes Drücken auf einem Touchscreen)
   und wählen Sie **Ausgewählte ausblenden**.
3. Öffnen Sie nach Abschluss das Kontextmenü und wählen Sie **Alle ausgeblendeten Objekte anzeigen**,
   um alle ausgeblendeten Objekte auf dem aktuellen Blatt wieder einzublenden.

Ausgeblendete Objekte können auf der Arbeitsfläche nicht ausgewählt werden, solange sie ausgeblendet sind. Das Ausblenden ist eine
vorübergehende Ansichtseinstellung: Es werden keine Objekte gelöscht und in der
Zeichnungsdatei wird kein Ausgeblendet-Status gespeichert. Ausgeblendete Objekte wirken sich weiterhin auf die elektrische Verbindung und
Netzlisten aus und erscheinen weiterhin in Druck- und PDF-Ausgaben.

Informationen zu Touchscreen-Gesten und zur präzisen Platzierung finden Sie unter [Touch-Steuerung](../Touch-controls/).

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

- Zurück zu [Inhaltsverzeichnis v4](../CONTENTS/)

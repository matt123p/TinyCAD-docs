---
layout: default
---
# Text und Anmerkungen
{: #text--annotations}

Text- und Anmerkungswerkzeuge dienen der Dokumentation und besseren Übersicht.

Diese Objekte sind **nicht elektrisch** und werden bei der Netzlistenerstellung und bei
Entwurfsregelprüfungen ignoriert.

## Text vs. Labels
{: #text-vs-labels}

- Verwenden Sie **Text** für Notizen, Hinweise, Titel und Fertigungsanweisungen.
- Verwenden Sie **Labels** für elektrisch wirksame Netznamen.

Wenn Sie Text verwenden, obwohl ein Label erforderlich ist, wird das Netz nicht verbunden.

## Was ist Markdown?
{: #what-is-markdown}

Mit Markdown formatieren Sie einfachen Text durch leicht einzugebende Markierungszeichen. TinyCAD liest diese Zeichen und stellt Überschriften, Fettschrift und Listen dar.

| Ihre Eingabe | Bedeutung |
|---|---|
| `# Power supply` | Eine Überschrift |
| `**Check polarity**` | Fettgedruckter Text |
| `*Optional*` | Kursiver Text |
| `- R1: 10 kΩ` | Ein Aufzählungspunkt |
| `` `R1` `` | Inline-Code |

Setzen Sie nach `#` oder `-` am Zeilenanfang ein Leerzeichen. Lassen Sie zwischen Absätzen eine Leerzeile.

Für mehrere Codezeilen setzen Sie vor und nach dem Code jeweils `~~~` auf eine eigene Zeile. Das vollständige Notizbeispiel unten zeigt diese Schreibweise.

## Markdown-Textfelder
{: #markdown-text-boxes}

Markdown-Textfelder sind in [TinyCAD v4.0.11](../Changelog/#v4011) verfügbar.

1. Wählen Sie Text (oder drücken Sie T) und ziehen Sie ein Feld auf der Zeichnung auf.
2. Klicken Sie in das Feld und geben Sie Markdown ein. Die Formatierung erscheint während der Eingabe.
3. Klicken Sie außerhalb des Feldes, um die formatierte Notiz ohne Markdown-Zeichen anzuzeigen. Vergrößern Sie das Feld, falls Inhalte abgeschnitten werden.

![Mit SVG dargestellte Markdown-Notiz mit Überschrift, Bauteilliste, Aufgabenliste und Codeblock.](../images/markdown-preview.png)

### Bearbeitbarer Markdown-Quelltext
{: #editable-markdown-source}

Überschriften, Fett- und Kursivschrift sowie Durchstreichungen zeigen ihre Formatierung, während ihre Markierungszeichen sichtbar und bearbeitbar bleiben. Textcursor, Auswahl und Zeilenumbruch folgen dem formatierten Text. Eingerückter oder durch Begrenzungszeichen eingeschlossener Code bleibt wörtlich; es gibt keine Syntaxhervorhebung.

Die gewählte Schriftfamilie, Größe sowie Fett- und Kursivschrift bilden den Grundstil. Überschriften skalieren relativ zu dieser Größe; auch Code verwendet die gewählte Schriftfamilie. Rückgängig, Kopieren/Einfügen und Speichern erhalten den Markdown-Quelltext.

![Dieselbe Notiz beim Bearbeiten mit sichtbaren Zeichen für Überschrift, Fettschrift, Liste, Aufgabenliste und Codeblock.](../images/markdown-source-editor.png)

### Unterstützte Formatierung
{: #supported-formatting}

Unterstützt werden Überschriften, Fett- und Kursivschrift, Durchstreichungen, Zitate, nummerierte Listen und Aufzählungen, Aufgabenlisten, horizontale Linien, Inline-Code sowie eingerückte oder durch Begrenzungszeichen eingeschlossene Codeblöcke. Normale Zeilenumbrüche bleiben erhalten. Tabellen, Links, Bilder und HTML werden ohne besondere Formatierung oder Laden externer Bilder als wörtlicher Text angezeigt.

Geben Sie beispielsweise diesen Quelltext ein, um die abgebildete Notiz zu erstellen:

````markdown
# RC filter
**Time constant:** τ = R × C

- R1: 10 kΩ
- C1: 100 nF

- [x] Draw the circuit
- [ ] Measure the response

~~~python
tau = 10_000 * 100e-9
~~~
````

## Anmerkungsobjekte
{: #annotation-objects}

TinyCAD unterstützt gängige Anmerkungsformen, darunter:

- Text,
- Linien,
- Rechtecke,
- Ellipsen,
- Bögen,
- Polygone.

Verwenden Sie diese, um Blöcke zu gruppieren, Bereiche hervorzuheben und erläuternde Hinweise hinzuzufügen, ohne
die Schaltungsverbindungen zu ändern.


## Linien und Polygone zeichnen
{: #drawing-lines--polygons}

Sie können eine Reihe von Linien zeichnen. Klicken Sie mit der rechten Maustaste, um das Zeichnen zu beenden.

Sie können diese in ein Polygon umwandeln, indem Sie im Kontextmenü „Polygon schließen“ („Close Polygon“) auswählen. Nach der Umwandlung
in ein Polygon können Sie die Füllung ändern.

{% include video-player.html
	src="/v4/images/video/Video 7.mp4"
	width=1620
	height=924
	caption="Videoanleitung zum Zeichnen und Bearbeiten eines Polygons."
%}


- Zurück zu [Zeichnen](../User-guide/)
- Zurück zu [Inhalt von v4](../CONTENTS/)

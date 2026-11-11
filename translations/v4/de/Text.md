---
layout: default
---
# Text
{: #text}

Text dient der Dokumentation und der visuellen Übersichtlichkeit.

Mit dem Textwerkzeug von TinyCAD wird ein Textfeld in der Zeichnung erstellt. Textfelder sind die
wichtigste Möglichkeit, direkt in einem Schaltplan lesbare Notizen, Anweisungen,
Hinweise und Überschriften hinzuzufügen. Sie verwenden [Markdown](https://{{ page.manual_language | default: 'en' | replace: 'zh-CN', 'zh' }}.wikipedia.org/wiki/Markdown), sodass Sie Text mit Überschriften, Fettdruck,
Kursivschrift, Listen, Aufgabenlisten und Codeblöcken formatieren können, ohne die Zeichenfläche zu verlassen.

Diese Objekte sind nicht elektrisch und werden bei der Netzerstellung und bei
Entwurfsregelprüfungen ignoriert.

## Text oder Beschriftungen
{: #text-vs-labels}

- Verwenden Sie Text für Notizen, Hinweise, Titel und Fertigungsanweisungen.
- Verwenden Sie Beschriftungen für elektrisch aktive Netznamen.

Wenn Sie Text verwenden, obwohl eine Beschriftung erforderlich ist, wird das Netz nicht verbunden.

## Was ist Markdown?
{: #what-is-markdown}
{: #what-is-markdown}

Markdown fügt einfache Formatierungen zu Klartext hinzu, indem einfache Zeichen
verwendet werden. TinyCAD erkennt diese Zeichen und zeigt Überschriften, Fettdruck und Listen an.

| Eingabe | Bedeutung |
|---|---|
| `# Power supply` | Eine Überschrift |
| `**Check polarity**` | Fettdruck |
| `*Optional*` | Kursivschrift |
| `- R1: 10 kΩ` | Ein Aufzählungspunkt |
| `` `R1` `` | Inline-Code |

Setzen Sie nach `#` oder `-` ein Leerzeichen, wenn diese Zeichen am Zeilenanfang stehen. Lassen Sie zwischen
Absätzen eine Leerzeile.

Für mehrere Codezeilen setzen Sie `~~~` jeweils in eine eigene Zeile vor und nach dem Code.
Das vollständige Beispiel einer Notiz unten zeigt dies.

## Markdown-Textfelder
{: #markdown-text-boxes}
{: #markdown-text-boxes}

Markdown-Textfelder sind ab [TinyCAD v4.0.11](../Changelog/#v4011) verfügbar.

1. Wählen Sie Text (Text) (oder drücken Sie T) und ziehen Sie ein Feld in der Zeichnung auf.
2. Klicken Sie in das Feld und geben Sie Markdown ein. Die Formatierung wird während der Eingabe angezeigt.
3. Klicken Sie an eine andere Stelle, um die formatierte Notiz ohne Markdown-Zeichen zu sehen. Ändern Sie die Größe
   des Feldes, falls der Inhalt abgeschnitten wird.

![Als SVG gerenderte Markdown-Notiz mit einer Überschrift, einer Komponentenliste, einer Aufgabenliste und einem Codeblock.](../images/markdown-preview.png)

### Bearbeitbare Markdown-Quelle
{: #editable-markdown-source}
{: #editable-markdown-source}

Überschriften, Fettdruck, Kursivschrift und Durchstreichungen werden formatiert angezeigt, während ihre
Zeichen sichtbar und bearbeitbar bleiben. Cursor, Auswahl und Zeilenumbruch
folgen dem formatierten Text. Eingezäunte und eingerückte Codeblöcke bleiben wörtlich erhalten; eine Syntaxfärbung
wird nicht angewendet.

Die ausgewählte Schriftfamilie, Schriftgröße sowie die Einstellungen für Fett- und Kursivschrift bilden den Grundstil.
Überschriften werden relativ zu dieser Größe skaliert; für Code wird ebenfalls die ausgewählte Schriftfamilie verwendet. Rückgängigmachen,
Kopieren/Einfügen und Speichern erhalten die Markdown-Quelle.

![Bearbeitung derselben Notiz mit sichtbaren Markierungen für Überschrift, Fettdruck, Liste, Aufgabenliste und Codeblock.](../images/markdown-source-editor.png)

### Unterstützte Formatierungen
{: #supported-formatting}
{: #supported-formatting}

Unterstützt werden Überschriften, Fettdruck, Kursivschrift, Durchstreichungen, Zitate,
nummerierte Listen und Aufzählungslisten, Aufgabenlisten, horizontale Linien, Inline-Code sowie
eingezäunte und eingerückte Codeblöcke. Gewöhnliche Zeilenumbrüche bleiben erhalten. Tabellen,
Links, Bilder und HTML werden als Klartext ohne besondere
Formatierung oder das Laden externer Bilder angezeigt.

Geben Sie beispielsweise diese Quelle ein, um die abgebildete Notiz zu erstellen:

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

- Siehe auch: [Formen](../Shapes/)
- Zurück zu [Zeichnen](../User-guide/)
- Zurück zu [Inhalt von v4](../CONTENTS/)

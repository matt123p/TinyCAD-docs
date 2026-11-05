---
layout: default
---
# Ein Symbol bearbeiten
{: #editing-a-symbol}

## Funktionsweise von Symbolen in TinyCAD
{: #how-symbols-work-in-tinycad}

Symbole werden aus normalen Objekten erstellt, die in der Symbolleiste zu finden sind. Sie können
alle diese Objekte außer anderen Symbolen enthalten.

Enthält das Symbol Objekte mit Sonderfunktionen (z. B. ein Versorgungselement
oder einen Draht), werden diese Objekte wie Anmerkungen behandelt.

Ihre Sonderfunktionen gehen bei der Verwendung in einem Symbol verloren. Nur **Pins** definieren
elektrische Verbindungspunkte.

Zusammenfassung:
- Ein Symbol ist eine wiederverwendbare Grafik mit Attributen.
- Die elektrische Verbindung wird durch **Pins** definiert.
- Symbole werden in **Bibliotheken** gespeichert (`.tclib`)

## Bevor Sie beginnen
{: #before-you-start}

Auf dieser Seite wird vorausgesetzt, dass Sie bereits eine Bibliothek zur Bearbeitung geöffnet haben. Die Schritte zum
Öffnen oder Erstellen einer Bibliothek hängen davon ab, ob Sie TinyCAD Web oder
die Desktop-Anwendung verwenden. Beginnen Sie daher mit [Benutzerdefinierte Symbolbibliotheken](../Custom-symbol-libraries/).

Wenn Sie statt der Bearbeitung nach dem Durchsuchen und Platzieren von Symbolen suchen, lesen Sie [Symbolbibliotheken verwenden](../Using-Symbol-Libraries/).

## Symbol öffnen oder erstellen
{: #open-or-create-the-symbol}

1. Öffnen Sie die Bibliothek.
2. Klicken Sie zum Bearbeiten eines vorhandenen Symbols in der Symbolliste der Bibliothek darauf.
3. Klicken Sie zum Erstellen eines neuen Symbols auf die Schaltfläche `+` in der Symbolliste.
4. Das ausgewählte oder neu erstellte Symbol wird auf der Editorfläche geladen.

Anschließend können Sie die Grafiken, Pins und Symbolattribute ändern.

{% include video-player.html
	src="/v4/images/video/Video 12.mp4"
	width=1532
	height=978
	caption="Videoanleitung zum Bearbeiten einer Bibliothek."
%}


## Symbolform (Grafiken) zeichnen
{: #drawing-the-symbol-shape-graphics}

Verwenden Sie die üblichen Zeichenwerkzeuge, um den Symbolumriss zu erstellen:

- Linien/Polylinien für Gehäusekanten,
- Rechtecke/Ellipsen/Bögen für gängige Gehäuseumrisse,
- Text für optionale interne Beschriftungen.

Achten Sie darauf, dass das Symbol bei normaler Schaltplanvergrößerung gut lesbar ist. Einfache Formen funktionieren in der Regel
besser als stark verzierte Grafiken.

## Pins hinzufügen
{: #adding-pins}

Pins sind der einzige elektrisch aktive Bestandteil eines Symbols.

Legen Sie für jeden Pin Folgendes fest:

- **Pinnummer** (erforderlich und innerhalb eines Bauteils eindeutig),
- **Pinname** (optional, aber dringend empfohlen),
- **Elektrischer Typ** (für eine korrekte DRC erforderlich),
- **Pin-Stil/-Form** (visueller Stil),
- **Sichtbarkeit** des Pinname-/Pinnummer-Texts nach Bedarf.

Platzieren Sie Pins sorgfältig am Raster, damit sich Verdrahtungen im Schaltplan einfach erstellen lassen.

{% include video-player.html
	src="/v4/images/video/Video 13.mp4"
	width=1532
	height=978
	caption="Videoanleitung zum Hinzufügen von Pins."
%}


## Pin-Bereich
{: #pin-panel}

Pins können im Bereich **Pin** im **unteren Bedienfeld** bearbeitet werden.

Änderungen im Pin-Bereich werden **sofort übernommen**: Jede Feldänderung löst unmittelbar
eine Pin-Aktualisierung aus (es gibt keinen separaten Schritt „OK/Übernehmen“).

Abschnitte im Pin-Bereich:

1. **Name**
	- Kontrollkästchen „Anzeigen“ (`show_name`)
	- Textfeld „Name“ (`name`)
	- Kontrollkästchen „Auf Pin zentrieren“ (`centre_name`)
2. **Nummer**
	- Kontrollkästchen „Anzeigen“ (`show_number`)
	- Textfeld „Nummer“ (`number`)
	- Numerisches Feld „Versatz“ (`number_pos`)
3. **Typ**
	- Dropdownliste „Form“ (`which`)
	- Dropdownliste „Elektrisch“ (`elec`)
	- Numerisches Feld „Länge“ (`length`, UI-Bereich 5..50)

Hinweise:

- Die Form steuert das Erscheinungsbild des Symbols und einige besondere visuelle Verhaltensweisen.
- Sowohl die Form `Cross` als auch der elektrische Typ `Not Connected` zeichnen ein Kreuzsymbol.
- Die Formstile `Power` und `Hidden` werden mit der Farbe für verborgene Pins dargestellt.

## Elektrische Pin-Typen und DRC-Verhalten
{: #pin-electrical-types-and-drc-behavior}

Die Auswahl des richtigen elektrischen Typs ist unerlässlich. DRC verwendet diese Typen, um
Verdrahtungsfehler zu erkennen.

Aktuelle Werte im TinyCAD-v4-Quellcode (`elec`):

- `0` Eingang
- `1` Ausgang
- `2` Tri-State
- `3` Open Collector
- `4` Passiv
- `5` Ein-/Ausgang
- `6` Nicht verbunden
- `7` Frei
- `8` Nicht angegeben
- `9` Versorgungseingang
- `10` Versorgungsausgang
- `11` Open Emitter

Allgemeine Hinweise:

- Kennzeichnen Sie tatsächlich angesteuerte Signale als **Ausgang**.
- Kennzeichnen Sie ausschließlich empfangende Signale als **Eingang**.
- Verwenden Sie **Versorgungseingang/Versorgungsausgang**, wenn die Bedeutung der Versorgungsansteuerung für DRC relevant ist.
- Verwenden Sie **Nicht verbunden** nur für Pins, die absichtlich unverbunden sein sollen.
- Verwenden Sie **Frei**/**Nicht angegeben** umsichtig und einheitlich in der gesamten Bibliothek.

Praktische Auswirkungen auf DRC:

- Falsche Pin-Typen können zu falschen DRC-Fehlern führen (oder echte Fehler verbergen).
- Namen von Versorgungspins müssen den vorgesehenen Versorgungsnamen entsprechen, damit das automatische Verhalten funktioniert.

## Versorgungspins und verborgene Pins
{: #power-and-hidden-pins}

Versorgungspins und verborgene Pins werden beim Bearbeiten des Symbols angezeigt, sind aber normalerweise
verborgen, wenn das Symbol in einer Zeichnung platziert wird.

Insbesondere für **Versorgungspins** gilt:

- Der Pinname dient als Name des Versorgungsnetzes.
- Bei übereinstimmenden Versorgungsnamen wird automatisch eine Verbindung hergestellt.
- Im platzierten Symbol werden normalerweise keine Drähte direkt zu diesen verborgenen Versorgungspins gezeichnet.

Für **verborgene Pins** gilt:

- Sie bleiben elektrisch aktiv.
- Verwenden Sie sie, wenn Sie die Pinform und Pinbeschriftungen selbst zeichnen möchten.

## Mehrteilige Symbole (Bauteileinheiten pro Gehäuse)
{: #multi-part-symbols-parts-per-package}

TinyCAD unterstützt Bauteile mit mehreren logischen Einheiten in einem Gehäuse (zum
Beispiel Vierfachgatter).

Es werden zwei Arten mehrteiliger Symbole verwendet:

1. **Homogene** mehrteilige Symbole:
	 - Die Teile haben denselben Umriss.
	 - Sie unterscheiden sich normalerweise nur durch die Pinnummern.
2. **Heterogene** mehrteilige Symbole:
	 - Die Teile können unterschiedliche Umrisse haben.
	 - Die Teile können außerdem unterschiedliche Pinbelegungen/Funktionen haben.

Verwenden Sie homogene Symbole, wenn die Teile austauschbar sind, und heterogene, wenn jedes Teil
eine eigene Funktion hat.

### Arbeitsablauf für mehrteilige Symbole
{: #multi-part-workflow}

1. Entscheiden Sie zuerst, ob das Symbol homogen oder heterogen sein soll.
2. Legen Sie die Anzahl der Teile pro Gehäuse fest.

Bei homogenen Teilen:
- Das erste Teil bestimmt die Form des Symbols und die Anordnung der Pins.

Bei heterogenen Teilen:
- Sie können für jedes Teil eine andere Form zeichnen.

## Symbolattribute und -eigenschaften
{: #symbol-attributes-and-properties}

Sie können die Attribute des Symbols im Bereich **Symbol** im **unteren Bedienfeld** bearbeiten.

Legen Sie zusätzlich zu Grafiken und Pins die Symbolattribute sorgfältig fest:

- Primärer Symbolname (und gegebenenfalls Aliasnamen),
- Standardformat für **Ref** (z. B. `U?`, `R?`, `C?`),
- Standardwert für **Name/Wert**,
- Zusätzliche Attribute/Parameter (z. B. Gehäuse/Footprint, Felder für
	Simulationsmodelle oder projektspezifische Metadaten).

## Speichern, duplizieren, umbenennen, löschen
{: #save-duplicate-rename-delete}

Übliche Aktionen zur Symbolverwaltung beim Bearbeiten einer Bibliothek:

- **Speichern/Aktualisieren** des aktuellen Symbols, um Änderungen zu sichern.
- **Duplizieren**, um Varianten zu erstellen (empfohlen, statt ein Basissymbol
	unwiderruflich zu verändern).
- **Umbenennen** zur Vereinheitlichung der Benennung.
- **Löschen** veralteter Symbole (bei versehentlichem Löschen rückgängig machen).

Verwenden Sie Duplikate für Gehäuse-/Wertvarianten, die dieselben Grafiken, aber unterschiedliche
Standardwerte haben.

## Prüfliste vor der Veröffentlichung eines Symbols
{: #validation-checklist-before-publishing-a-symbol}

Überprüfen Sie vor der allgemeinen Verwendung eines Symbols Folgendes:

1. Die Pins liegen am Raster und lassen sich einfach verdrahten.
2. Die Pinnummern sind vollständig und je Teil eindeutig.
3. Die elektrischen Typen sind für alle Pins korrekt festgelegt.
4. Das Verhalten von Versorgungs- und verborgenen Pins ist beabsichtigt.
5. Die Einrichtung mehrteiliger Symbole (falls vorhanden) ist korrekt.
6. Die Standardwerte für Name/Referenz sind sinnvoll.
7. Das Symbol ist bei normaler Zeichnungsvergrößerung gut lesbar.

Platzieren Sie anschließend das Symbol in einem Testschaltplan und führen Sie DRC aus.

## Tipps zur Fehlerbehebung
{: #troubleshooting-tips}

- **Drähte werden nicht mit dem Symbol verbunden:** Überprüfen Sie die Platzierung der Pin-Endpunkte und die
	Ausrichtung am Raster.
- **Unerwartete DRC-Fehler:** Überprüfen Sie den elektrischen Typ jedes Pins.
- **Falsches Verhalten von Teilen in mehrteiligen Symbolen:** Überprüfen Sie die Auswahl der Teile und die Pinnummerierung
	für jedes Teil erneut.
- **Versorgung wird nicht automatisch verbunden:** Stellen Sie sicher, dass die Namen der Versorgungspins mit den vorgesehenen Netznamen
	übereinstimmen.

## Verwandte Seiten
{: #related-pages}

- [Benutzerdefinierte Symbolbibliotheken](../Custom-symbol-libraries/)
- [Symbolbibliotheken verwenden](../Using-Symbol-Libraries/)
- [Symbole](../Symbols/)
- [Design Rules Check](../Design-Rules-Check/)

- Zurück zu [Symbole und Bibliotheken](../Symbols-and-Libraries/)
- Zurück zu [Inhalt von v4](../CONTENTS/)

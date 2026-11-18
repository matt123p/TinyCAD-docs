---
layout: default
---
# Ein Symbol bearbeiten
{: #editing-a-symbol}

Informationen zum Generieren eines Symbols aus einem Datenblatt oder zum Hinzufügen mehrerer Komponenten zu einer geöffneten Bibliothek finden Sie im Leitfaden zum [KI-Assistenten](../AI-Assistant/). Die Ergebnisse können Sie mit den Bearbeitungswerkzeugen auf dieser Seite verfeinern.

## So funktionieren Symbole in TinyCAD
{: #how-symbols-work-in-tinycad}

Symbole werden aus den normalen Objekten der Werkzeugleiste erstellt. Sie können
alle diese Objekte außer anderen Symbolen enthalten.

Enthält das Symbol Objekte mit Sonderfunktionen (z. B. ein Versorgungssymbol
oder eine Leitung), werden diese Objekte wie Annotationen behandelt.

Alle ihre Sonderfunktionen gehen bei der Verwendung in einem Symbol verloren. Nur **Pins** definieren
elektrische Verbindungspunkte.

Zusammenfassung:
- ein Symbol ist eine wiederverwendbare Grafik mit Attributen
- die elektrische Verbindung wird durch **Pins** definiert
- und Symbole werden in **Bibliotheken** gespeichert (`.tclib`)

## Bevor Sie beginnen
{: #before-you-start}

Auf dieser Seite wird vorausgesetzt, dass Sie bereits eine Bibliothek zur Bearbeitung geöffnet haben. Die Schritte zum
Öffnen oder Erstellen einer Bibliothek unterscheiden sich je nachdem, ob Sie TinyCAD Web oder
die Desktopanwendung verwenden. Beginnen Sie daher mit [Benutzerdefinierte Symbolbibliotheken](../Custom-symbol-libraries/).

Wenn Sie Symbole durchsuchen und platzieren möchten, statt sie zu bearbeiten, lesen Sie [Symbolbibliotheken verwenden](../Using-Symbol-Libraries/).

## Symbol öffnen oder erstellen
{: #open-or-create-the-symbol}

1. Öffnen Sie die Bibliothek.
2. Um ein vorhandenes Symbol zu bearbeiten, klicken Sie in der Symbolliste der Bibliothek darauf.
3. Um ein neues Symbol zu erstellen, klicken Sie in der Symbolliste auf die Schaltfläche `+`.
4. Das ausgewählte oder neue Symbol wird auf der Editor-Arbeitsfläche geladen.

Anschließend können Sie die Grafiken, Pins und Symbolattribute ändern.

{% include video-player.html
	src="/v4/images/video/Video 12.mp4"
	width=1532
	height=978
	caption="Videoanleitung zum Bearbeiten einer Bibliothek."
%}


## Symbolform (Grafik) zeichnen
{: #drawing-the-symbol-shape-graphics}

Verwenden Sie die standardmäßigen Zeichenwerkzeuge, um den Symbolumriss zu erstellen:

- Linien/Polylinien für Gehäusekanten,
- Rechtecke/Ellipsen/Bögen für gängige Gehäuseumrisse,
- Text für optionale interne Beschriftungen.

Achten Sie darauf, dass das Symbol bei normaler Schaltplanvergrößerung gut lesbar ist. Einfache Formen sind in der Regel
besser geeignet als aufwendig dekorative Grafiken.

## Pins hinzufügen
{: #adding-pins}

Pins sind der einzige elektrisch aktive Teil eines Symbols.

Legen Sie für jeden Pin Folgendes fest:

- **Pinnummer** (erforderlich und innerhalb eines Bauteils eindeutig),
- **Pinname** (optional, aber dringend empfohlen),
- **Elektrischer Typ** (für eine korrekte DRC erforderlich),
- **Pin-Stil/-Form** (Darstellungsstil),
- **Sichtbarkeit** des Pin-Namens/-Nummerntxts nach Bedarf.

Platzieren Sie Pins sorgfältig am Raster, damit sich im Schaltplan problemlos Leitungen anschließen lassen.

{% include video-player.html
	src="/v4/images/video/Video 13.mp4"
	width=1532
	height=978
	caption="Videoanleitung zum Hinzufügen von Pins."
%}


## Pin-Bereich
{: #pin-panel}

Sie können Pins im Bereich **Pin** im **unteren Bedienfeld** bearbeiten.

Änderungen im Pin-Bereich werden **sofort übernommen**: Jede Feldänderung löst unmittelbar
eine Pin-Aktualisierung aus (es gibt keinen separaten Schritt mit OK/Übernehmen).

Abschnitte des Pin-Bereichs:

1. **Name**
	- Kontrollkästchen „Anzeigen“ (`show_name`)
	- Textfeld „Name“ (`name`)
	- Kontrollkästchen „Auf Pin zentrieren“ (`centre_name`)
2. **Nummer**
	- Kontrollkästchen „Anzeigen“ (`show_number`)
	- Textfeld „Nummer“ (`number`)
	- Numerisches Feld „Versatz“ (`number_pos`)
3. **Typ**
	- Dropdown-Menü „Form“ (`which`)
	- Dropdown-Menü „Elektrisch“ (`elec`)
	- Numerisches Feld „Länge“ (`length`, UI-Bereich 5..50)

Hinweise:

- Die Form steuert das Erscheinungsbild des Symbols und einige besondere Darstellungsweisen.
- Die Form `Cross` und der elektrische Typ `Not Connected` zeichnen beide eine Kreuzmarkierung.
- Die Formstile `Power` und `Hidden` werden mit der Farbe für ausgeblendete Pins dargestellt.

## Elektrische Pin-Typen und DRC-Verhalten
{: #pin-electrical-types-and-drc-behavior}

Die Auswahl des richtigen elektrischen Typs ist entscheidend. DRC verwendet diese Typen, um
Verbindungsfehler zu erkennen.

Aktuelle Werte im TinyCAD-v4-Quellcode (`elec`):

- `0` Eingang
- `1` Ausgang
- `2` Tristate
- `3` Open Collector
- `4` Passiv
- `5` Eingang/Ausgang
- `6` Nicht verbunden
- `7` Frei
- `8` Nicht angegeben
- `9` Versorgungseingang
- `10` Versorgungsausgang
- `11` Open Emitter

Allgemeine Richtlinien:

- Kennzeichnen Sie tatsächlich getriebene Signale als **Ausgang**.
- Kennzeichnen Sie ausschließlich empfangende Signale als **Eingang**.
- Verwenden Sie **Versorgungseingang/Versorgungsausgang**, wenn die Versorgungstreiber-Semantik für DRC relevant ist.
- Verwenden Sie **Nicht verbunden** nur für Pins, die absichtlich unverbunden bleiben sollen.
- Verwenden Sie **Frei**/**Nicht angegeben** vorsichtig und einheitlich innerhalb einer Bibliothek.

Praktische Auswirkungen auf DRC:

- Eine falsche Pin-Typisierung kann zu falschen DRC-Fehlern führen (oder echte Fehler verbergen).
- Die Namen von Versorgungspins müssen den vorgesehenen Versorgungsnamen entsprechen, damit das automatische Verhalten funktioniert.

## Versorgungspins und ausgeblendete Pins
{: #power-and-hidden-pins}

Versorgungs- und ausgeblendete Pins werden beim Bearbeiten des Symbols angezeigt, sind aber normalerweise
in einer Zeichnung ausgeblendet, wenn das Symbol platziert wird.

Insbesondere für **Versorgungspins** gilt:

- Der Pinname dient als Name des Versorgungsnetzes.
- Bei übereinstimmenden Versorgungsnamen wird automatisch eine Verbindung hergestellt.
- In der platzierten Symbolansicht werden Leitungen normalerweise nicht direkt zu diesen ausgeblendeten Versorgungspins gezeichnet.

Für **ausgeblendete Pins** gilt:

- Sie bleiben elektrisch aktiv.
- Verwenden Sie sie, wenn Sie die Pinform und Pinbeschriftungen selbst zeichnen möchten.

## Mehrteilige Symbole (Bauteile pro Gehäuse)
{: #multi-part-symbols-parts-per-package}

TinyCAD unterstützt Bauteile mit mehreren logischen Einheiten in einem Gehäuse (zum
Beispiel Vierfachgatter).

Es gibt zwei Arten mehrteiliger Symbole:

1. **Homogene** mehrteilige Symbole:
	 - die Teile haben denselben Umriss,
	 - sie unterscheiden sich meist nur durch die Pinnummern.
2. **Heterogene** mehrteilige Symbole:
	 - die Teile können unterschiedliche Umrisse haben,
	 - die Teile können außerdem unterschiedliche Pinbelegungen/Funktionen aufweisen.

Verwenden Sie homogene Symbole, wenn die Teile austauschbar sind; verwenden Sie heterogene, wenn jedes Teil
eine eigene Funktion hat.

### Arbeitsablauf für mehrteilige Symbole
{: #multi-part-workflow}

1. Entscheiden Sie zuerst, ob das Symbol homogen oder heterogen sein soll.
2. Legen Sie die Anzahl der Teile pro Gehäuse fest.

Für homogene Teile:
- Das erste Teil definiert die Symbolform und die Anordnung der Pins.

Für heterogene Teile:
- Sie können für jedes Teil eine andere Form zeichnen.

## Symbolattribute und Eigenschaften
{: #symbol-attributes-and-properties}

Sie können die Attribute des Symbols im Bereich **Symbol** im **unteren Bedienfeld** bearbeiten.

Definieren Sie neben Grafiken und Pins auch die Symbolattribute sorgfältig:

- Primärer Symbolname (und gegebenenfalls Aliase),
- Standardformat für **Ref** (zum Beispiel `U?`, `R?`, `C?`),
- Standardwert für **Name/Wert**,
- zusätzliche Attribute/Parameter (zum Beispiel Gehäuse/Footprint, Simulationsmodellfelder oder projektspezifische Metadaten).

## Speichern, duplizieren, umbenennen, löschen
{: #save-duplicate-rename-delete}

Gängige Aktionen zur Symbolverwaltung beim Bearbeiten einer Bibliothek:

- **Speichern/Aktualisieren** schreibt Änderungen am aktuellen Symbol.
- **Duplizieren** erstellt Varianten (empfohlen, statt ein Basissymbol destruktiv zu bearbeiten).
- **Umbenennen** dient der Vereinheitlichung von Bezeichnungen.
- **Löschen** entfernt veraltete Symbole (machen Sie den Vorgang rückgängig, falls Sie versehentlich gelöscht haben).

Verwenden Sie Duplikate für Gehäuse-/Wertvarianten, die dieselben Grafiken, aber andere
Standardwerte haben.

## Prüfliste zur Validierung vor der Veröffentlichung eines Symbols
{: #validation-checklist-before-publishing-a-symbol}

Prüfen Sie vor der breiten Verwendung eines Symbols Folgendes:

1. Die Pins liegen auf dem Raster und lassen sich leicht verdrahten.
2. Die Pinnummern sind vollständig und je Teil eindeutig.
3. Die elektrischen Typen sind für alle Pins korrekt festgelegt.
4. Das Verhalten von Versorgungs-/ausgeblendeten Pins ist beabsichtigt.
5. Die Konfiguration mehrteiliger Symbole (falls vorhanden) ist korrekt.
6. Namens-/Referenz-Standardwerte sind sinnvoll.
7. Das Symbol ist bei normaler Zeichnungsvergrößerung gut lesbar.

Platzieren Sie das Symbol anschließend in einem Testschaltplan und führen Sie DRC aus.

## Tipps zur Fehlerbehebung
{: #troubleshooting-tips}

- **Leitungen werden nicht mit dem Symbol verbunden:** Prüfen Sie die Position der Pin-Endpunkte und deren Ausrichtung am Raster.
- **Unerwartete DRC-Fehler:** Überprüfen Sie den elektrischen Typ jedes Pins.
- **Falsches Verhalten eines Teils in mehrteiligen Symbolen:** Überprüfen Sie die Teileauswahl und Pinnummerierung für jedes Teil.
- **Versorgung wird nicht automatisch verbunden:** Prüfen Sie, ob die Namen der Versorgungspins den vorgesehenen Netznamen entsprechen.

## Verwandte Seiten
{: #related-pages}

- [Benutzerdefinierte Symbolbibliotheken](../Custom-symbol-libraries/)
- [Symbolbibliotheken verwenden](../Using-Symbol-Libraries/)
- [Symbole](../Symbols/)
- [Design Rules Check](../Design-Rules-Check/)

- Zurück zu [Symbole und Bibliotheken](../Symbols-and-Libraries/)
- Zurück zu [Inhalt von v4](../CONTENTS/)

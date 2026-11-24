---
layout: default
---
# Bearbeiten eines Symbols
{: #editing-a-symbol}

Zum Erzeugen eines Symbols aus einem Datenblatt oder zum Hinzufügen mehrerer Komponenten zu einer geöffneten Bibliothek siehe die Anleitung zum [KI-Assistenten](../AI-Assistant/). Die Ergebnisse können Sie mit den Bearbeitungswerkzeugen auf dieser Seite verfeinern.

## Funktionsweise von Symbolen in TinyCAD
{: #how-symbols-work-in-tinycad}

Symbole werden aus den normalen Objekten der Werkzeugleiste erstellt. Sie können
alle diese Objekte außer anderen Symbolen enthalten.

Enthält das Symbol Objekte mit Sonderfunktionen (z. B. ein Versorgungselement
oder eine Leitung), werden diese Objekte wie Annotationen behandelt.

Ihre Sonderfunktionen gehen bei der Verwendung in einem Symbol verloren. Nur **Pins** definieren
elektrische Verbindungspunkte.

Zusammenfassung:
- Ein Symbol ist eine wiederverwendbare Grafik mit Attributen.
- Die elektrische Verbindung wird durch **Pins** definiert.
- Symbole werden in **Bibliotheken** gespeichert (`.tclib`)

## Bevor Sie beginnen
{: #before-you-start}

Auf dieser Seite wird vorausgesetzt, dass Sie bereits eine Bibliothek zur Bearbeitung geöffnet haben. Die Schritte
zum Öffnen oder Erstellen einer Bibliothek unterscheiden sich je nachdem, ob Sie TinyCAD Web oder
die Desktop-Anwendung verwenden. Beginnen Sie daher mit [Benutzerdefinierte Symbolbibliotheken](../Custom-symbol-libraries/).

Wenn Sie statt der Bearbeitung nach dem Durchsuchen und Platzieren von Symbolen suchen, siehe [Symbolbibliotheken verwenden](../Using-Symbol-Libraries/).

## Symbol öffnen oder erstellen
{: #open-or-create-the-symbol}

1. Öffnen Sie die Bibliothek.
2. Um ein vorhandenes Symbol zu bearbeiten, klicken Sie in der Symbolliste der Bibliothek darauf.
3. Um ein neues Symbol zu erstellen, klicken Sie in der Symbolliste auf die Schaltfläche `+`.
4. Das ausgewählte oder neue Symbol wird auf die Editor-Leinwand geladen.

Anschließend können Sie die Grafiken, Pins und Symbolattribute ändern.

{% include video-player.html
	src="/v4/images/video/Video 12.mp4"
	width=1532
	height=978
	caption="Videoanleitung zum Bearbeiten einer Bibliothek."
%}


## Symbolform zeichnen (Grafiken)
{: #drawing-the-symbol-shape-graphics}

Verwenden Sie die Standard-Zeichenwerkzeuge, um den Symbolumriss zu erstellen:

- Linien/Polylinien für Gehäusekanten,
- Rechtecke/Ellipsen/Bögen für gängige Gehäuseumrisse,
- Text für optionale interne Kennzeichnungen.

Das Symbol sollte bei normaler Schaltplanvergrößerung gut lesbar sein. Einfache Formen sind
meist besser geeignet als stark verzierte Grafiken.

## Pins hinzufügen
{: #adding-pins}

Pins sind der einzige elektrisch aktive Bestandteil eines Symbols.

Legen Sie für jeden Pin Folgendes fest:

- **Pinnummer** (erforderlich und innerhalb eines Bauteils eindeutig),
- **Pinname** (optional, aber dringend empfohlen),
- **Elektrischer Typ** (für eine genaue DRC erforderlich),
- **Pin-Stil/-Form** (visuelles Erscheinungsbild),
- **Sichtbarkeit** des Pinname-/Pinnummer-Texts nach Bedarf.

Platzieren Sie Pins sorgfältig am Raster, damit die Verdrahtung im Schaltplan einfach ist.

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
eine Pin-Aktualisierung aus (kein separater Schritt mit OK/Übernehmen).

Abschnitte des Pin-Bereichs:

1. **Name**
	- Kontrollkästchen „Anzeigen“ (`show_name`)
	- Textfeld für den Namen (`name`)
	- Kontrollkästchen „Auf Pin zentrieren“ (`centre_name`)
2. **Nummer**
	- Kontrollkästchen „Anzeigen“ (`show_number`)
	- Textfeld für die Nummer (`number`)
	- Numerisches Feld für den Versatz (`number_pos`)
3. **Typ**
	- Dropdown-Menü „Form“ (`which`)
	- Dropdown-Menü „Elektrisch“ (`elec`)
	- Numerisches Feld für die Länge (`length`, UI-Bereich 5..50)

Hinweise:

- Die Form steuert das Erscheinungsbild des Symbols und einige spezielle visuelle Verhaltensweisen.
- Die Form `Cross` und der elektrische Typ `Not Connected` zeichnen beide eine Kreuzmarkierung.
- Die Formstile `Power` und `Hidden` werden mit der Farbe für ausgeblendete Pins dargestellt.

## Elektrische Pin-Typen und DRC-Verhalten
{: #pin-electrical-types-and-drc-behavior}

Die Auswahl des richtigen elektrischen Typs ist entscheidend. DRC verwendet diese Typen, um
Verdrahtungsfehler zu erkennen.

Aktuelle Werte im TinyCAD-v4-Quellcode (`elec`):

- `0` Eingang
- `1` Ausgang
- `2` Tri-State
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

- Kennzeichnen Sie tatsächlich angesteuerte Signale als **Ausgang**.
- Kennzeichnen Sie ausschließlich empfangende Signale als **Eingang**.
- Verwenden Sie **Versorgungseingang/Versorgungsausgang**, wenn die Versorgungsansteuerung für DRC relevant ist.
- Verwenden Sie **Nicht verbunden** nur für Pins, die absichtlich als unverbunden definiert sind.
- Verwenden Sie **Frei**/**Nicht angegeben** umsichtig und einheitlich in einer Bibliothek.

Praktische Auswirkungen auf DRC:

- Eine falsche Typzuweisung kann zu falschen DRC-Fehlern führen (oder echte Fehler verbergen).
- Die Namen von Versorgungspins müssen den vorgesehenen Versorgungsnamen entsprechen, damit das automatische Verhalten funktioniert.

## Versorgungspins und ausgeblendete Pins
{: #power-and-hidden-pins}

Versorgungs- und ausgeblendete Pins werden beim Bearbeiten des Symbols angezeigt, sind jedoch in der Regel
beim Platzieren des Symbols in einer Zeichnung ausgeblendet.

Speziell für **Versorgungspins** gilt:

- Der Pinname dient als Name des Versorgungsnetzes.
- Stimmen die Versorgungsnamen überein, wird die Verbindung automatisch hergestellt.
- Im platzierten Symbol werden normalerweise keine Leitungen direkt zu diesen ausgeblendeten Versorgungspins gezeichnet.

Für **ausgeblendete Pins** gilt:

- Sie bleiben elektrisch aktiv.
- Verwenden Sie sie, wenn Sie Ihre eigene Pinform und Pinbeschriftungen zeichnen möchten.

## Mehrteilige Symbole (Bauteile pro Gehäuse)
{: #multi-part-symbols-parts-per-package}

TinyCAD unterstützt Bauteile mit mehreren logischen Einheiten in einem Gehäuse (zum
Beispiel Vierfachgatter).

Es gibt zwei Arten von mehrteiligen Symbolen:

1. **Homogene** mehrteilige Symbole:
	 - Die Teile haben denselben Umriss.
	 - Sie unterscheiden sich gewöhnlich nur durch die Pinnummern.
2. **Heterogene** mehrteilige Symbole:
	 - Die Teile können unterschiedliche Umrisse haben.
	 - Die Teile können auch unterschiedliche Pinbelegungen/Funktionen haben.

Verwenden Sie homogene Symbole, wenn die Teile austauschbar sind, und heterogene, wenn jedes Teil
eine eigene Funktion hat.

### Arbeitsablauf für mehrteilige Symbole
{: #multi-part-workflow}

1. Entscheiden Sie zuerst, ob das Symbol homogen oder heterogen sein soll.
2. Legen Sie die Anzahl der Bauteile pro Gehäuse fest.

Für homogene Teile:
- Das erste Teil definiert die Form des Symbols und die Anordnung der Pins.

Für heterogene Teile:
- Sie können für jedes Teil eine andere Form zeichnen.

## Symbolattribute und -eigenschaften
{: #symbol-attributes-and-properties}

Die Symbolattribute können im **Symbol**-Bereich des **unteren Bedienfelds** bearbeitet werden.

Definieren Sie neben Grafiken und Pins auch die Symbolattribute sorgfältig:

- Primärer Symbolname (und gegebenenfalls Aliase),
- Standardformat für **Ref** (zum Beispiel `U?`, `R?`, `C?`),
- Standardwert für **Name/Wert**,
- Zusätzliche Attribute/Parameter (z. B. Gehäuse/Footprint, Simulationsmodellfelder oder projektspezifische Metadaten).

## SPICE-Modell festlegen
{: #set-a-spice-model}

Wählen Sie das Symbol in einer bearbeitbaren Bibliothek aus und öffnen Sie die Registerkarte **SPICE**. Wählen Sie **Gebündelt → SPICE-Modell suchen…**, um ein Modell zu verknüpfen und seine Pinzuordnung zu überprüfen, oder **Benutzerdefiniert**, um die Instanzvorlage und den Modelltext zu bearbeiten. Speichern Sie die Bibliothek, damit die Voreinstellung für zukünftige Platzierungen übernommen wird. Unter [Gebündelte SPICE-Modelle](../Bundled-SPICE-Models/#set-a-library-default-or-edit-a-custom-copy) finden Sie Informationen zur Auswahl, Modellauswahl und zu benutzerdefinierten Kopien.

## Speichern, duplizieren, umbenennen, löschen
{: #save-duplicate-rename-delete}

Häufige Aktionen zur Symbolverwaltung beim Bearbeiten einer Bibliothek:

- **Speichern/Aktualisieren**, um die Änderungen am aktuellen Symbol zu speichern.
- **Duplizieren**, um Varianten zu erstellen (empfohlen, statt ein Basissymbol destruktiv zu bearbeiten).
- **Umbenennen**, um Namen zu vereinheitlichen.
- **Löschen**, um veraltete Symbole zu entfernen (bei versehentlichem Löschen rückgängig machen).

Verwenden Sie Duplikate für Gehäuse-/Wertvarianten, die dieselben Grafiken, aber andere
Voreinstellungen haben.

## Prüfliste vor der Veröffentlichung eines Symbols
{: #validation-checklist-before-publishing-a-symbol}

Prüfen Sie vor der breiten Verwendung eines Symbols Folgendes:

1. Die Pins liegen am Raster und lassen sich einfach verdrahten.
2. Die Pinnummern sind vollständig und für jedes Bauteil eindeutig.
3. Für alle Pins sind die elektrischen Typen korrekt festgelegt.
4. Das Verhalten der Versorgungs-/ausgeblendeten Pins ist beabsichtigt.
5. Die Einrichtung mehrteiliger Symbole (falls vorhanden) ist korrekt.
6. Namens-/Referenzvorgaben sind sinnvoll.
7. Das Symbol ist bei normaler Zeichnungsvergrößerung gut lesbar.

Platzieren Sie das Symbol anschließend in einem Testschaltplan und führen Sie DRC aus.

## Tipps zur Fehlerbehebung
{: #troubleshooting-tips}

- **Leitungen werden nicht mit dem Symbol verbunden:** Prüfen Sie die Position der Pinendpunkte und deren Ausrichtung am Raster.
- **Unerwartete DRC-Fehler:** Überprüfen Sie den elektrischen Typ jedes Pins.
- **Falsches Verhalten eines Bauteils in mehrteiligen Symbolen:** Überprüfen Sie die Teileauswahl und Pinnummerierung für jedes Teil.
- **Versorgung wird nicht automatisch verbunden:** Vergewissern Sie sich, dass die Namen der Versorgungspins den vorgesehenen Netznamen entsprechen.

## Verwandte Seiten
{: #related-pages}

- [Benutzerdefinierte Symbolbibliotheken](../Custom-symbol-libraries/)
- [Symbolbibliotheken verwenden](../Using-Symbol-Libraries/)
- [Symbole](../Symbols/)
- [Designregelnprüfung](../Design-Rules-Check/)

- Zurück zu [Symbole und Bibliotheken](../Symbols-and-Libraries/)
- Zurück zu [Inhaltsverzeichnis v4](../CONTENTS/)

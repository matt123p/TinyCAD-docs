---
layout: default
---
# SPICE-Ausgabe
{: #spice-output}

Die SPICE-Unterstützung in TinyCAD v4 funktioniert genauso wie in v3: TinyCAD erzeugt mithilfe von Vorlagen auf Symbolebene eine SPICE-Textdatei aus Ihrem Schaltplan.

## Wofür SPICE verwendet wird
{: #what-spice-is-used-for}

SPICE (Simulation Program with Integrated Circuit Emphasis) ist eine Familie von Schaltungssimulationsformaten und -werkzeugen. Mit einem SPICE-Simulator können Sie das Verhalten einer Schaltung testen, bevor Sie die Hardware bauen, zum Beispiel:

- Gleichstrom-Arbeitspunkte und Vorspannungsbedingungen
- Transientenverhalten (Zeitbereich)
- Wechselstrom-/Frequenzgang
- Parameterschritte und „Was-wäre-wenn“-Analysen

TinyCAD führt die Simulation nicht selbst aus. Stattdessen exportiert es eine SPICE-Datei, die Sie mit der SPICE-Engine Ihrer Wahl ausführen.

## SPICE-Dateiformat und allgemeiner Aufbau
{: #spice-file-format-and-general-layout}

SPICE-Engines unterscheiden sich geringfügig, aber die meisten SPICE-Dateien haben denselben grundlegenden Aufbau:

1. Optionaler Kopfbereich/Kommentare
2. Einbindungen und Definitionen von Bauelementen/Modellen
3. Zeilen mit Schaltungselementen (eine Zeile pro Bauteilinstanz)
4. Analyse-/Steuerbefehle
5. Endmarkierung (üblicherweise `.end`)

In der Praxis bedeutet das, dass Ihre exportierte Datei normalerweise Folgendes enthält:

- „Setup“-Text am Anfang (Modelle, Einbindungen, Optionen)
- Einen Hauptteil mit generierten Bauteilen und ihren verbundenen Netzen
- „Run“- oder Analysentext am Ende

Die SPICE-Erzeugung von TinyCAD ist darauf ausgelegt, diesem Aufbau direkt zu entsprechen.

## Wie TinyCAD SPICE erzeugt
{: #how-tinycad-generates-spice}

TinyCAD verwendet für jedes SPICE-fähige Symbol ein Zeichenfolgensystem mit Vorlagen. Jedes Symbol kann Folgendes definieren:

- **Modellvorlage**: wird für jede Instanz dieser Komponente im Schaltplan eingefügt
- **Prologvorlage**: wird einmal pro Komponententyp nahe dem Dateianfang eingefügt
- **Epilogvorlage**: wird einmal pro Komponententyp nahe dem Dateiende eingefügt

Diese Felder finden Sie in den Symboleigenschaften im Symbolbibliothekseditor (Registerkarte „SPICE“).

### Vorlagenerweiterung
{: #template-expansion}

Vorlagen können Folgendes enthalten:

- `%(pin)` für Ersetzungen von Pins/Netzen
- `$(attribute)` für Ersetzungen von Symbolattributen

Beispiel für eine Modellvorlage für einen Widerstand:

`R$(refnum) %(1) %(2) $(NAME)`

Wenn die Widerstandsinstanz die Referenz `R3` hat, zwischen den Netzen `7` und `9` angeschlossen ist und `NAME=10K` gilt, schreibt TinyCAD:

`R3 7 9 10K`

`refnum` wird speziell behandelt, damit der SPICE-Bauelementebuchstabe in der Vorlage erhalten bleibt.

### Reihenfolge und Duplikatvermeidung bei Prolog und Epilog
{: #prologueepilogue-order-and-deduplication}

- Prologe und Epiloge werden bei identischem Inhalt nur einmal ausgegeben
- Jeder hat eine Priorität (`0` bis `9`)
- Prologe werden von der niedrigsten zur höchsten Priorität geschrieben
- Epiloge werden so geschrieben, dass die Priorität `0` zuletzt in der Datei erscheint

So lässt sich steuern, an welcher Stelle Setup- und Analysentext erscheinen.

## Erforderliche Schaltplaneinrichtung für den SPICE-Export
{: #required-schematic-setup-for-spice-export}

Damit eine gültige SPICE-Datei erzeugt wird, muss Ihre Zeichnung Folgendes enthalten:

- SPICE-fähige Symbole für die simulierte Schaltung
- Ein spezielles **RUN**-Symbol
- Ein Netz mit dem Namen **0** (SPICE-Masse)

### RUN-Symbol
{: #run-symbol}

Das RUN-Symbol ist ein gewöhnliches TinyCAD-Symbol ohne Pins und ohne Modellvorlage, aber mit Prolog-/Epilogtext zum Einfügen von Simulationssteueranweisungen.

Legen Sie die Prolog- und Epilogprioritäten von RUN auf `0` fest, damit der Text ganz am Anfang und ganz am Ende der erzeugten Datei erscheint.

Verwenden Sie pro Simulationsschaltung ein RUN-Symbol.

### Das Netz `0`
{: #the-0-net}

SPICE erfordert, dass die Masse das Netz `0` ist.

Erstellen Sie dieses Netz in TinyCAD, indem Sie eine Verbindung mit `0` benennen. Verwenden Sie dazu eine der folgenden Möglichkeiten:

- Eine Netzbeschriftung oder
- Ein Stromversorgungssymbol mit dem Wert `0`

## Erzeugen der SPICE-Ausgabe
{: #creating-the-spice-output}

Nachdem die Symbole, der RUN-Knoten und das Netz `0` eingerichtet sind, erzeugen Sie die SPICE-Ausgabe über den SPICE-Exportbefehl in der TinyCAD-Benutzeroberfläche.

Die Exportoptionen sind bewusst auf ein Minimum beschränkt, da das Laufzeitverhalten voraussichtlich über die Vorlagen des RUN-Symbols gesteuert wird.

## Erweiterte Vorlagenbedingungen
{: #advanced-template-conditionals}

Für komplexere Symbole werden Vorlagenbedingungen unterstützt (gleiches Verhalten wie in v3), einschließlich Prüfungen auf:

- Attribut vorhanden/nicht vorhanden
- Attribut leer/nicht leer
- Pin verbunden/nicht verbunden

Bedingungssyntax:

- `?( defined(attributename), true string, false string )`
- `?( not_defined(attributename), true string, false string )`
- `?( empty(attributename), true string, false string )`
- `?( not_empty(attributename), true string, false string )`
- `?( connected(pinnumber), true string, false string )`
- `?( not_connected(pinnumber), true string, false string )`

Bedingungen können verschachtelt werden.

- Zurück zu [Erweitert](../Advanced/)
- Zurück zu [Inhalt von v4](../CONTENTS/)

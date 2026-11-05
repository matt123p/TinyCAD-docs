---
layout: default
---
# Netzliste generieren
{: #generate-netlist}

TinyCAD kann eine Netzlistendatei für das PCB-Layout und andere nachgelagerte Werkzeuge generieren.

Eine Netzliste ist eine Textbeschreibung von zwei wesentlichen Dingen:

- welche Komponenteninstanzen im Entwurf vorhanden sind
- welche Pins auf den einzelnen Netzen miteinander verbunden sind

TinyCAD liest die elektrische Verbindung aus Ihrer Zeichnung aus und schreibt diese Informationen in das von Ihnen gewählte Ausgabeformat.

## Wofür eine generierte Netzliste verwendet wird
{: #what-a-generated-netlist-is-for}

Die generierte Netzliste wird hauptsächlich dazu verwendet, einen fertigen Schaltplan in ein anderes Werkzeug zu übertragen, insbesondere in ein PCB-Layoutprogramm.

Typische Verwendungszwecke sind:

- Importieren der Schaltung in ein PCB-Werkzeug
- Prüfen, ob die Verbindungen im PCB mit dem Schaltplan übereinstimmen
- Überprüfen von Komponentenreferenzen und Netzbezeichnungen in einem Nur-Text-Format

TinyCAD platziert das PCB nicht für Sie. Es exportiert die Verbindungsdaten, damit ein anderes Werkzeug sie verwenden kann.

## Vor dem Generieren der Netzliste
{: #before-generating-the-netlist}

Der Netzlistenexport setzt voraus, dass der Schaltplan elektrisch so verbunden ist, wie TinyCAD es erwartet. Es empfiehlt sich, zuerst die [Design Rules Check](../Design-Rules-Check/) auszuführen.

## Das Attribut `Package`
{: #the-package-attribute}

Für den PCB-Export müssen viele Zielwerkzeuge für jede Komponente einen Footprint- oder Gehäusenamen erhalten.

In TinyCAD wird dies normalerweise als Symbolattribut mit dem Namen `Package` gespeichert.

Beim Export der Netzliste schreibt TinyCAD dieses Attribut in die Ausgabe, damit das PCB-Programm das Schaltplansymbol dem richtigen Footprint zuordnen kann.

Dasselbe Symbol kann an verschiedenen Stellen eines Entwurfs unterschiedliche Gehäusewerte verwenden. Prüfen Sie daher das Attribut der platzierten Komponente und nicht nur den Standardwert in der Bibliothek.

## Netzliste generieren
{: #how-to-generate-the-netlist}

1. Öffnen Sie den zu exportierenden Entwurf.
2. Führen Sie den Netzlistenexport-Befehl in den Exportwerkzeugen der TinyCAD-Benutzeroberfläche aus.
3. Wählen Sie das von Ihrem Zielwerkzeug benötigte Ausgabeformat.
4. Wählen Sie den Dateinamen und speichern Sie die exportierte Datei.


## Formate im Dialogfeld „Netzliste generieren“
{: #formats-in-the-generate-netlist-dialog}

Das Dialogfeld bietet derzeit die folgenden Formate:

- `PADS-PCB`
- `PADS-PCB-WITH-VALUE`
- `Eagle SCR`
- `Protel`
- `gEDA PCB`

## Bedeutung der Formate
{: #what-the-formats-mean}

### PADS-PCB
{: #pads-pcb}

Erstellt eine Netzlistendatei im PADS-Stil.

### PADS-PCB-WITH-VALUE
{: #pads-pcb-with-value}

Erstellt eine Netzlistendatei im PADS-Stil und nimmt außerdem, sofern verfügbar, den Bauteilwert auf.

### Eagle SCR
{: #eagle-scr}

Erstellt eine Eagle-Skriptdatei.

### Protel
{: #protel}

Erstellt eine Netzlistendatei im Protel-Stil.

### gEDA PCB
{: #geda-pcb}

Erstellt eine gEDA-PCB-Netzlistendatei.

## SPICE und VHDL
{: #spice-and-vhdl}

SPICE- und VHDL-Exporte werden getrennt vom Hauptdialogfeld `Generate Netlist` behandelt.

Verwenden Sie dafür:

- `Generate Spice NetList`
- `Create VHDL File`

Diese Befehle generieren weiterhin zuerst die Netzdaten, verwenden dafür jedoch eigene, spezialisierte Exporter.

## Verwendeter Dateiname
{: #what-file-name-is-used}

TinyCAD verwendet den Namen der aktuellen Zeichnung und ändert die Dateierweiterung passend zum Exportformat.

Beispiele:

- `.net`
- `.scr`
- `.cir`
- `.vhdl`


## Was nach dem Export zu überprüfen ist
{: #what-to-check-after-export}

Da Netzlisten Textdateien sind, lassen sie sich leicht in einem Texteditor überprüfen.

Prüfen Sie mindestens Folgendes:

- Komponentenreferenzen sind vorhanden und eindeutig
- die erwarteten Netzbezeichnungen erscheinen in der Datei
- erforderliche Gehäuse- oder Footprint-Werte sind vorhanden
- es fehlen offensichtlich keine Bauteile oder Verbindungen

Wenn das Ergebnis falsch aussieht, liegt die Ursache gewöhnlich in den Schaltplandaten und nicht im Exportschritt selbst.

## Häufige Ursachen für fehlerhafte Netzlisten
{: #common-causes-of-incorrect-netlists}

- Es wurde eine Zeichnungslinie statt eines Drahts verwendet.
- Ein Draht endet nahe an einem Pin, ist aber nicht tatsächlich mit ihm verbunden.
- Bei einer Komponente fehlt eine Referenz.
- Ein erforderliches Attribut `Package` fehlt oder ist inkonsistent.
- Bezeichnungen, die miteinander verbunden sein sollten, stimmen nicht exakt überein.

## Verwandte Seiten
{: #related-pages}

- [Netlisteneditor](../Netlist-Editor/)
- [Design Rules Check](../Design-Rules-Check/)
- [SPICE-Ausgabe](../SPICE-output/)

- Zurück zu [Erweitert](../Advanced/)
- Zurück zu [Inhalt von v4](../CONTENTS/)

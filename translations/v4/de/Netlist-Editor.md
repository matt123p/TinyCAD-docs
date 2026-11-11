---
layout: default
---
# Netzlisten-Editor
{: #netlist-editor}

`Netlist Editor` ist eine neue Funktion in TinyCAD v4.

Verwenden Sie diese Funktion, wenn Sie:

- sehen möchten, wie TinyCAD Ihre Drähte und Beschriftungen zu Netzen zusammengefasst hat
- herausfinden möchten, wo ein Netz in der Zeichnung verwendet wird
- einem Netz einen Typ zuweisen möchten
- das Aussehen einer Gruppe von Netzen im Schaltplan ändern möchten

## Was die Netzlistenansicht ist
{: #what-the-netlist-view-is}

`Netlist Editor` ist eine aktuelle Liste der Netze in Ihrer Zeichnung.

Ein Netz ist eine elektrische Verbindung. TinyCAD ermittelt es anhand Ihrer:

- Drähte
- Pins
- Beschriftungen
- Stromversorgungssymbole

Die Liste ist aktuell und wird automatisch aktualisiert, während Sie den Schaltplan bearbeiten.

## So öffnen Sie sie
{: #how-to-open-it}

1. Sehen Sie sich das untere Bedienfeld des Editors an.
2. Wenn `Symbols` angezeigt wird, verwenden Sie die Modustaste und wechseln Sie zu `Netlist`.

Wenn ein anderes Bedienfeld geöffnet ist, weil etwas ausgewählt wurde, heben Sie zuerst die Auswahl auf.

## Bedeutung der einzelnen Spalten
{: #what-each-column-means}

- `Net`: der Netzname oder die interne Netznummer
- `Sheet`: das Blatt, auf dem das Hauptelement dieser Zeile gefunden wurde
- `Connections`: die Anzahl der Pinverbindungen auf diesem Netz
- `Labels`: die auf diesem Netz gefundenen Beschriftungen
- `Type`: der diesem Netz zugewiesene Netzlistentyp
- `Symbols`: verbundene Bauteile und Pins auf diesem Netz

## Die Netzlistenansicht verwenden
{: #how-to-use-the-netlist-view}

### Ein Netz suchen
{: #find-a-net}

Verwenden Sie das Suchfeld, um die Liste zu filtern.

Sie können nach Folgendem suchen:

- Netzname
- Blattname
- Beschriftungstext
- Symbolreferenz
- Typname

### Ein Netz in der Zeichnung hervorheben
{: #highlight-a-net-in-the-drawing}

Bewegen Sie die Maus über eine Zeile.

TinyCAD hebt die passenden Netzelemente im Schaltplan hervor, damit Sie sehen können, wo sich das Netz befindet.

### Zu einem Netz in der Zeichnung springen
{: #jump-to-a-net-in-the-drawing}

Klicken Sie auf eine Zeile.

TinyCAD springt zum zugehörigen Element im richtigen Blatt.

## So weisen Sie einem Netz einen Typ zu
{: #how-to-assign-a-type-to-a-net}

Jede Zeile hat ein `Type`-Feld.

So weisen Sie einen Typ zu:

1. Klicken Sie in das `Type`-Feld des Netzes.
2. Wählen Sie einen vorhandenen Typ aus der Liste aus oder geben Sie einen neuen Namen ein.
3. Klicken Sie außerhalb des Feldes, um die Änderung zu übernehmen.


## Was ein Netztyp ist
{: #what-a-net-type-is}

Ein Netztyp ist eine wiederverwendbare Bezeichnung für eine Gruppe von Netzen.

Sie können ihn verwenden, um:

- Netze in Kategorien zu organisieren
- Netzen mit übereinstimmendem Typ dieselben Farben zuzuweisen
- bestimmte Netze in der Zeichnung dicker darzustellen
- zusätzliche Hinweise als Attribute zu speichern

Beispiele für mögliche Typnamen:

- `power`
- `control`
- `logic`
- `analog`
- `high_current`

## So öffnen Sie Netlist Types
{: #how-to-open-netlist-types}

1. Öffnen Sie in der unteren Leiste die Ansicht `Netlist`.
2. Klicken Sie auf `Netlist Types`.

Hiermit wird der Editor für alle verfügbaren Typdefinitionen geöffnet.

## Was Sie in den Netzlistentypen tun können
{: #what-you-can-do-in-netlist-types}

Im Fenster `Netlist Types` können Sie:

- einen neuen Typ hinzufügen
- einen vorhandenen Typ duplizieren
- einen Typ umbenennen
- einen Typ löschen
- die Drahtfarbe ändern
- die Beschriftungsfarbe ändern
- die Farbe des Stromversorgungssymbols ändern
- die Drahtstärke ändern
- eigene Attribute hinzufügen
- das Ergebnis vor dem Speichern in der Vorschau anzeigen

## Der Standardtyp
{: #the-default-type}

Es gibt immer einen Typ `default`.

Wichtige Hinweise:

- er kann nicht umbenannt werden
- er kann nicht gelöscht werden
- seine Farben entsprechen den normalen Zeichnungsfarben

Wenn Sie die Farben in der Zeile `default` ändern, ändern Sie die normalen Netzfarben, die in der Zeichnung verwendet werden.

## So erstellen Sie einen neuen Typ
{: #how-to-create-a-new-type}

1. Öffnen Sie `Netlist Types`.
2. Klicken Sie auf `Add`.
3. Geben Sie einen Namen ein.
4. Legen Sie die gewünschten Farben und die Drahtstärke fest.
5. Klicken Sie zum Speichern auf `OK`.

Danach können Sie den Netzen in der unteren Ansicht `Netlist` den neuen Typ zuweisen.

## So duplizieren Sie einen Typ
{: #how-to-duplicate-a-type}

Dies ist nützlich, wenn Sie etwas erstellen möchten, das einem vorhandenen Typ ähnelt.

1. Wählen Sie die Typzeile aus.
2. Klicken Sie auf `Duplicate`.
3. Ändern Sie den neuen Namen.
4. Bearbeiten Sie die gewünschten Farben oder Einstellungen.
5. Klicken Sie auf `OK`.

## So ändern Sie Farben
{: #how-to-change-colors}

Für jeden Typ können separate Farben festgelegt werden für:

- Leitungen
- Beschriftungen
- Versorgungselemente

So ändern Sie eine Farbe:

1. Klicken Sie auf die Farbelle in der Zeile.
2. Wählen Sie die Farbe im Farbauswahldialog aus.
3. Schließen Sie den Farbauswahldialog.
4. Klicken Sie auf `OK` im Hauptfenster `Netlist Types`.

Nicht standardmäßige Typen können entweder ihre eigene Farbe verwenden oder auf die standardmäßige Zeichenfarbe zurückgreifen.

## So ändern Sie die Leitungsbreite
{: #how-to-change-wire-thickness}

1. Suchen Sie die Typzeile.
2. Ändern Sie den Wert `Wire Thickness`.
3. Klicken Sie auf `OK`.

Dies wirkt sich darauf aus, wie Leitungen in Netzen dieses Typs im Schaltplan gezeichnet werden.

## So fügen Sie Attribute hinzu
{: #how-to-add-attributes}

Attribute sind einfache Name/Wert-Einträge, die mit dem Typ gespeichert werden.

So fügen Sie sie hinzu:

1. Klicken Sie auf die Zelle `Attributes` für den Typ.
2. Fügen Sie Attributnamen und -werte hinzu oder bearbeiten Sie sie.
3. Speichern Sie die Attribute.
4. Klicken Sie im Hauptdialog auf `OK`.

Derzeit werden diese Attribute hauptsächlich mit der Zeichnung gespeichert. Sie sind nützlich, um zusätzliche Typinformationen festzuhalten, auch wenn sie noch nicht von jedem Ausgabeformat verwendet werden.


## Verwandte Seiten
{: #related-pages}

- [Netzliste generieren](../Generate-Netlist/)
- [Stückliste](../Bill-Of-Materials/)
- [Design Rule Check](../Design-Rules-Check/)
- [SPICE-Ausgabe](../SPICE-output/)
- [VHDL-Ausgabe](../VHDL-output/)

- Zurück zu [Erweitert](../Advanced/)
- Zurück zu [v4-Inhalt](../CONTENTS/)

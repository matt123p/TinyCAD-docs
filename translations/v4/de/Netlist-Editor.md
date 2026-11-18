---
layout: default
---
# Netzlisten-Editor
{: #netlist-editor}

`Netlist Editor` ist eine neue Funktion in TinyCAD v4.

Verwenden Sie diese Funktion, wenn Sie Folgendes möchten:

- sehen, wie TinyCAD Ihre Drähte und Beschriftungen zu Netzen gruppiert hat
- herausfinden, wo ein Netz in der Zeichnung verwendet wird
- einem Netz einen Typ zuweisen
- das Aussehen einer Gruppe von Netzen im Schaltplan ändern

## Was die Netzlistenansicht ist
{: #what-the-netlist-view-is}

`Netlist Editor` ist eine aktuelle Liste der Netze in Ihrer Zeichnung.

Ein Netz ist eine elektrische Verbindung. TinyCAD ermittelt diese anhand Ihrer:

- Drähte
- Pins
- Beschriftungen
- Stromversorgungssymbole

Die Liste wird laufend aktualisiert, während Sie den Schaltplan bearbeiten.

## So öffnen Sie die Ansicht
{: #how-to-open-it}

1. Sehen Sie sich den unteren Bereich des Editors an.
2. Wenn `Symbols` angezeigt wird, verwenden Sie die Modustaste und wechseln Sie zu `Netlist`.

Wenn ein anderes Bedienfeld geöffnet ist, weil etwas ausgewählt ist, heben Sie zuerst die Auswahl auf.

![Netzlistenansicht unter dem Teilerschaltplan, mit hervorgehobener Zeile OUT](../images/netlist-editor/netlist-overview.png)

In diesem enthaltenen Teilerbeispiel verbindet die Zeile `OUT` `R1.2` mit `R2.1`.
Wenn Sie den Mauszeiger über diese Zeile bewegen, wird die Verbindung in der Zeichnung hervorgehoben.

## Bedeutung der einzelnen Spalten
{: #what-each-column-means}

- `Net`: der Netzname oder die interne Netznummer
- `Sheet`: das Blatt, auf dem das Hauptelement dieser Zeile gefunden wurde
- `Connections`: Anzahl der Pinverbindungen an diesem Netz
- `Labels`: Beschriftungen, die an diesem Netz gefunden wurden
- `Type`: der diesem Netz zugewiesene Netzlistentyp
- `Symbols`: verbundene Bauteile und Pins an diesem Netz

## So verwenden Sie die Netzlistenansicht
{: #how-to-use-the-netlist-view}

### Ein Netz suchen
{: #find-a-net}

Verwenden Sie das Suchfeld, um die Liste zu filtern.

Sie können suchen nach:

- Netzname
- Blattname
- Beschriftungstext
- Symbolreferenz
- Typname

### Ein Netz in der Zeichnung hervorheben
{: #highlight-a-net-in-the-drawing}

Bewegen Sie den Mauszeiger über eine Zeile.

TinyCAD hebt die entsprechenden Netzelemente im Schaltplan hervor, damit Sie sehen können, wo sich das Netz befindet.

### Zu einem Netz in der Zeichnung springen
{: #jump-to-a-net-in-the-drawing}

Klicken Sie auf eine Zeile.

TinyCAD springt zum zugehörigen Element auf dem richtigen Blatt.

## So weisen Sie einem Netz einen Typ zu
{: #how-to-assign-a-type-to-a-net}

Jede Zeile enthält ein Feld `Type`.

So weisen Sie einen Typ zu:

1. Klicken Sie in das Feld `Type` des Netzes.
2. Wählen Sie einen vorhandenen Typ aus der Liste aus.
3. Um zuerst einen neuen Typ zu definieren, verwenden Sie wie unten beschrieben `Netlist Types` und kehren Sie dann zum Feld `Type` des Netzes zurück.

![Netzliste gefiltert nach OUT, mit zugewiesenem Steuertyp](../images/netlist-editor/netlist-type-assignment.png)

Hier wird durch die Suche nach `OUT` das Ausgangsnetz des Teilers isoliert, und sein `Type` ist auf `control` gesetzt.


## Was ein Netztyp ist
{: #what-a-net-type-is}

Ein Netztyp ist eine wiederverwendbare Kennzeichnung für eine Gruppe von Netzen.

Sie können ihn verwenden, um:

- Netze in Kategorien zu organisieren
- Netzen desselben Typs dieselben Farben zuzuweisen
- bestimmte Netze in der Zeichnung dicker darzustellen
- zusätzliche Hinweise als Attribute zu speichern

Beispiele für mögliche Typnamen:

- `power`
- `control`
- `logic`
- `analog`
- `high_current`

## So öffnen Sie die Netzlistentypen
{: #how-to-open-netlist-types}

1. Öffnen Sie die Ansicht `Netlist` in der unteren Leiste.
2. Klicken Sie auf `Netlist Types`.

Dadurch wird der Editor für alle verfügbaren Typdefinitionen geöffnet.

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
- das Ergebnis vor dem Speichern in der Vorschau ansehen

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

Danach können Sie Netzen in der unteren Ansicht `Netlist` den neuen Typ zuweisen.

![Editor für Netzlistentypen mit Standard-, Steuerungs- und Stromversorgungstypen sowie einer Drahtstärke von 2 für den Steuerungstyp](../images/netlist-editor/netlist-types.png)

Das Beispiel fügt die Typen `control` und `power` hinzu. Für den Typ `control` ist eine Drahtstärke von `2` festgelegt; jede Farbtaste öffnet einen eigenen Editor.

## So duplizieren Sie einen Typ
{: #how-to-duplicate-a-type}

Das ist nützlich, wenn Sie etwas Ähnliches wie einen vorhandenen Typ erstellen möchten.

1. Wählen Sie die Typzeile aus.
2. Klicken Sie auf `Duplicate`.
3. Ändern Sie den Namen des neuen Typs.
4. Bearbeiten Sie die gewünschten Farben oder Einstellungen.
5. Klicken Sie auf `OK`.

## So ändern Sie Farben
{: #how-to-change-colors}

Für jeden Typ können separate Farben festgelegt werden für:

- Drähte
- Beschriftungen
- Stromversorgungselemente

So ändern Sie eine Farbe:

1. Klicken Sie auf das Farbfeld in der Zeile.
2. Aktivieren Sie `Override colour` für einen Typ, der nicht dem Standard entspricht, und wählen Sie anschließend eine Farbe.
3. Klicken Sie im Farbdialog auf `OK`.
4. Klicken Sie im Hauptfenster auf `OK` `Netlist Types`.

Nicht-Standardtypen können entweder ihre eigene Farbe verwenden oder auf die Standard-Zeichnungsfarbe zurückgreifen.

![Drahtfarben-Editor mit aktiviertem Farb-Override und einem grünen Draht in der Vorschau](../images/netlist-editor/netlist-colour-preview.png)

Die Vorschau zeigt neben den Beschriftungs- und Stromversorgungssymbolfarben die ausgewählte Drahtfarbe. Verwenden Sie die Registerkarten `Wire`, `Label` und `Power`, um jede Einstellung vor dem Speichern zu prüfen.

## So ändern Sie die Drahtstärke
{: #how-to-change-wire-thickness}

1. Suchen Sie die Typzeile.
2. Ändern Sie den Wert `Wire Thickness`.
3. Klicken Sie auf `OK`.

Dadurch wird festgelegt, wie Drähte von Netzen dieses Typs im Schaltplan dargestellt werden.

## So fügen Sie Attribute hinzu
{: #how-to-add-attributes}

Attribute sind einfache Name/Wert-Einträge, die mit dem Typ gespeichert werden.

So fügen Sie sie hinzu:

1. Klicken Sie auf das Feld `Attributes` für den Typ.
2. Klicken Sie auf `Add Attribute` und geben Sie dann Attributname und -wert ein. Wiederholen Sie den Vorgang für weitere Einträge.
3. Speichern Sie die Attribute.
4. Klicken Sie im Hauptdialog auf `OK`.

![Attributeditor mit Einträgen für Zweck und Hinweise beim Steuerungstyp](../images/netlist-editor/netlist-attributes.png)

Diese Beispieleinträge beschreiben den Zweck des Typs und ergänzen einen Verdrahtungshinweis. Sie gehören zum Typ und können von jedem ihm zugewiesenen Netz gemeinsam genutzt werden.

Derzeit werden diese Attribute hauptsächlich zusammen mit der Zeichnung gespeichert. Sie sind hilfreich, um zusätzliche Typinformationen festzuhalten, auch wenn sie noch nicht von allen Ausgabeformaten verwendet werden.


## Verwandte Seiten
{: #related-pages}

- [Netzliste erzeugen](../Generate-Netlist/)
- [Stückliste](../Bill-Of-Materials/)
- [Entwurfsregelprüfung](../Design-Rules-Check/)
- [SPICE-Ausgabe](../SPICE-output/)
- [VHDL-Ausgabe](../VHDL-output/)

- Zurück zu [Erweitert](../Advanced/)
- Zurück zu [v4-Inhalt](../)

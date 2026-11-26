---
layout: default
---
# Netzlisten-Editor
{: #netlist-editor}

Der `Netlist Editor` ist eine neue Funktion in TinyCAD v4.

Verwenden Sie diese Funktion, wenn Sie Folgendes möchten:

- sehen, wie TinyCAD Ihre Drähte und Beschriftungen zu Netzen zusammengefasst hat
- herausfinden, wo ein Netz in der Zeichnung verwendet wird
- einem Netz einen Typ zuweisen
- das Aussehen einer Gruppe von Netzen im Schaltplan ändern

## Was die Netzlistenansicht ist
{: #what-the-netlist-view-is}

Der `Netlist Editor` ist eine aktuelle Liste der Netze in Ihrer Zeichnung.

Ein Netz ist eine elektrische Verbindung. TinyCAD ermittelt dies anhand Ihrer:

- Drähte
- Pins
- Beschriftungen
- Stromversorgungssymbole

Die Liste ist aktuell und wird während der Bearbeitung des Schaltplans automatisch aktualisiert.

## So öffnen Sie die Ansicht
{: #how-to-open-it}

1. Sehen Sie sich den unteren Bereich des Editors an.
2. Wenn `Symbols` angezeigt wird, verwenden Sie die Modusschaltfläche und wechseln Sie zu `Netlist`.

Wenn ein anderes Bedienfeld geöffnet ist, weil etwas ausgewählt wurde, heben Sie zuerst die Auswahl auf.

![Netzlistenansicht unter dem Teilerschaltplan, mit hervorgehobener OUT-Zeile](../images/netlist-editor/netlist-overview.png)

In diesem mitgelieferten Teilerbeispiel verbindet die Zeile `OUT` `R1.2` mit `R2.1`.
Wenn Sie den Mauszeiger über diese Zeile bewegen, wird die Verbindung in der Zeichnung hervorgehoben.

## Bedeutung der einzelnen Spalten
{: #what-each-column-means}

- `Net`: der Netzname oder die interne Netznummer
- `Sheet`: das Blatt, auf dem das Hauptelement dieser Zeile gefunden wurde
- `Connections`: die Anzahl der Pinverbindungen in diesem Netz
- `Labels`: Beschriftungen, die in diesem Netz gefunden wurden
- `Type`: der diesem Netz zugewiesene Netzlistentyp
- `Symbols`: verbundene Bauteile und Pins in diesem Netz

## So verwenden Sie die Netzlistenansicht
{: #how-to-use-the-netlist-view}

### Ein Netz finden
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

Bewegen Sie den Mauszeiger über eine Zeile.

TinyCAD hebt die entsprechenden Netzelemente im Schaltplan hervor, damit Sie sehen können, wo sich das Netz befindet.

### Zu einem Netz in der Zeichnung springen
{: #jump-to-a-net-in-the-drawing}

Klicken Sie auf eine Zeile.

TinyCAD springt zum zugehörigen Element im richtigen Blatt.

## So weisen Sie einem Netz einen Typ zu
{: #how-to-assign-a-type-to-a-net}

Klicken Sie bei geöffneter Ansicht **Netlist** auf einen Draht im Schaltplan, um die Zeile des zugehörigen Netzes hervorzuheben. Verwenden Sie die Liste **Type** in dieser Zeile, um einen vorhandenen Typ auszuwählen. Um einen Typ mit eigenem Drahtstil zu erstellen, öffnen Sie **Netlist Types** und legen Sie zuerst den Stil fest.

Ein Netztyp ist eine wiederverwendbare Sammlung von Zeichnungsstilen. Weisen Sie mehreren Netzen denselben Typ zu, damit sie gleich aussehen. Wenn Sie diesen Typ bearbeiten, werden alle Netze aktualisiert, die ihn verwenden. Sie können Netzen eines Typs auch eigene Farben für Beschriftungen und Stromversorgungssymbole zuweisen oder Notizen als Attribute speichern. Die Gestaltung ändert das Aussehen der Zeichnung, erhält jedoch die elektrischen Verbindungen.

## Beispiel – Den OUT-Draht des Teilers grün und dicker gestalten
{: #example--make-the-dividers-out-wire-green-and-thicker}

Öffnen Sie die mitgelieferte Zeichnung `divider` über **Open Example** → **SPICE tutorial** und vergrößern Sie die Schaltung. Wechseln Sie im unteren Bereich von **Symbols** zu **Netlist**. Die Beschriftung **OUT** kennzeichnet das Netz zwischen den Pins **R1.2** und **R2.1**. Es verwendet zunächst den Typ `default` und die normale Drahtstärke.

![Teiler vor der Gestaltung, mit dem dünnen blauen OUT-Draht zwischen R1 und R2](../images/netlist-editor/netlist-wire-before.png)

### Den Drahtstil erstellen
{: #create-the-wire-style}

1. Klicken Sie auf **Netlist Types**, klicken Sie auf **Add** und nennen Sie den neuen Typ `control`.
2. Legen Sie in der Zeile `control` für **Wire thickness** den Wert `4` fest. Der Wert `1` entspricht der normalen Linienstärke. Drücken Sie **Tab**, um den Wert zu übernehmen.
3. Klicken Sie in derselben Zeile auf die Zelle **Drahtfarbe (Wire colour)**. Aktivieren Sie **Farbe überschreiben (Override colour)** und geben Sie den Wert `007F5F` im Feld **Hex** ein, um Grün zu wählen. Die Vorschau zeigt den Draht mit beiden Einstellungen.
4. Klicken Sie im Farbauswahlfeld auf **OK**. Überprüfen Sie das grüne Farbfeld und den Dickenwert in der Zeile `control` und klicken Sie dann in **Netlist Types** auf **OK**, um den Typ zu speichern.

![Farbauswahl für den Draht, mit aktivierter Option Override colour und grünem Draht in der Vorschau](../images/netlist-editor/netlist-wire-colour.png)

![Netlist Types mit grünem Farbfeld für Wire colour und Wire thickness auf 4 in der Zeile control](../images/netlist-editor/netlist-wire-type.png)

### Den Stil auf OUT anwenden
{: #apply-the-style-to-out}

1. Klicken Sie im Schaltplan auf den Draht direkt über **R2**. TinyCAD hebt die Zeile **OUT** im Bedienfeld **Netlist** hervor.
2. Öffnen Sie die Liste **Type** in der hervorgehobenen Zeile und wählen Sie `control`.
3. Klicken Sie auf eine freie Stelle im Schaltplan, um die Auswahl aufzuheben. Der Draht zwischen **R1.2** und **R2.1** ist jetzt grün und dicker. Wählen Sie `default` in der Liste **Typ (Type)**, um den normalen Drahtstil wiederherzustellen.

![Ausgewählter OUT-Draht im Schaltplan und die hervorgehobene Zeile in Netlist mit ausgewähltem control](../images/netlist-editor/netlist-wire-assignment.png)

![Teiler nach der Gestaltung, mit dem dickeren grünen OUT-Draht zwischen R1 und R2](../images/netlist-editor/netlist-wire-after.png)

Verwenden Sie **Save As**, um Ihre bearbeitete Kopie des Beispiels zu speichern.

### Folgen Sie der Anleitung
{: #watch-the-walkthrough}

{% include video-player.html src="/v4/videos/netlist-editor/netlist-editor.webm" type="video/webm" poster="/v4/images/netlist-editor/netlist-walkthrough-start.png" caption="Wechseln Sie zu Netlist, erstellen Sie einen grünen Drahtstil und klicken Sie dann auf den OUT-Draht, um seine Zeile zu finden und den Stil anzuwenden." %}

## Was Sie in Netlist Types tun können
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
- vor dem Speichern eine Vorschau des Ergebnisses anzeigen

## Der Standardtyp
{: #the-default-type}

Der Typ `default` hat einen festen Namen und eine Drahtstärke von `1`. TinyCAD verwendet die Farben in dieser Zeile als normale Netzfarben der Zeichnung. Netze ohne Typzuweisung verwenden `default`.

## So duplizieren Sie einen Typ
{: #how-to-duplicate-a-type}

Dies ist hilfreich, wenn Sie etwas Ähnliches wie einen vorhandenen Typ möchten.

1. Wählen Sie die Typzeile aus.
2. Klicken Sie auf `Duplicate`.
3. Benennen Sie die Kopie um und passen Sie ihre Farben oder Stärke an.
4. Klicken Sie auf `OK`.

## Farben für Beschriftungen und Stromversorgungssymbole
{: #label-and-power-symbol-colours}

Verwenden Sie die Registerkarten **Wire**, **Label** und **Power** im Farbauswahlfeld, um jede Farbe unabhängig zu bearbeiten. Aktivieren Sie bei einem benutzerdefinierten Typ auf jeder Registerkarte, die Sie anpassen möchten, **Override colour**. Bei deaktivierter Überschreibung verwendet eine Registerkarte die Standardfarbe der Zeichnung für dieses Element.

## So fügen Sie Attribute hinzu
{: #how-to-add-attributes}

Attribute sind einfache Name/Wert-Einträge, die mit dem Typ gespeichert werden.

So fügen Sie sie hinzu:

1. Klicken Sie auf die Zelle `Attributes` des Typs.
2. Klicken Sie auf `Add Attribute` und geben Sie dann den Attributnamen und den Wert ein. Wiederholen Sie dies für weitere Einträge.
3. Speichern Sie die Attribute.
4. Klicken Sie im Hauptdialogfeld auf `OK`.

![Attributeditor mit Einträgen für Zweck und Notizen für den Typ control](../images/netlist-editor/netlist-attributes.png)

Diese Beispieleinträge beschreiben den Zweck des Typs und fügen einen Verdrahtungshinweis hinzu. Sie gehören zum Typ und können von jedem Netz verwendet werden, dem dieser Typ zugewiesen ist.

Derzeit werden diese Attribute hauptsächlich mit der Zeichnung gespeichert. Sie eignen sich dazu, zusätzliche Typinformationen festzuhalten, auch wenn sie noch nicht von allen Ausgabeformaten verwendet werden.


## Verwandte Seiten
{: #related-pages}

- [Netzliste erzeugen](../Generate-Netlist/)
- [Stückliste](../Bill-Of-Materials/)
- [Designregeln prüfen](../Design-Rules-Check/)
- [SPICE-Ausgabe](../SPICE-output/)
- [VHDL-Ausgabe](../VHDL-output/)

- Zurück zu [Erweitert](../Advanced/)
- Zurück zu [Inhaltsverzeichnis v4](../)

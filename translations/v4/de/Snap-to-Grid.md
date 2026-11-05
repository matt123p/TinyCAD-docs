---
layout: default
---
# Am Raster ausrichten
{: #snap-to-grid}

Bei aktiviertem Rasterfang rastet die Mausposition beim Zeichnen oder Platzieren von Elementen am nächstgelegenen Rasterpunkt ein. Dadurch bleiben Symbole und Leitungen ausgerichtet, und Verbindungen landen exakt auf gültigen Anschlusspunkten.

## Warum das wichtig ist
{: #why-it-matters}

- Sorgt dafür, dass Leitungsenden und Symbolpins verbunden sind – wenn Sie den Rasterfang nicht verwenden, besteht das Risiko, dass Leitungen nicht mit Pins verbunden werden.
- Vermeidet optische Fehlausrichtungen, die korrekt aussehen können, aber in den TinyCAD-Werkzeugen elektrisch nicht verbunden sind.

Bei der üblichen Schaltplanbearbeitung sollte der Rasterfang aktiviert bleiben.

## Raster anzeigen und Rasterfang aktivieren
{: #showing-the-grid-and-enabling-snapping}

Öffnen Sie das Symbolleistenmenü **Settings** (Einstellungen) und wählen Sie dann **Settings** (Einstellungen), um diese voneinander unabhängigen Optionen zu ändern:

- **Show the grid** (Raster anzeigen) steuert die Sichtbarkeit der Rasterpunkte. Wird die Option deaktiviert, bleibt der Rasterfang aktiv.
- **Snap to grid** (Am Raster ausrichten) steuert die Ausrichtung beim Platzieren und Verschieben von Objekten. Wird die Option deaktiviert, bleibt das Raster sichtbar.

Bei zu geringer Zoomstufe werden Rasterpunkte möglicherweise ausgeblendet, wenn sie nicht mehr deutlich dargestellt werden können.

![Dialogfeld „Settings“ mit separaten Kontrollkästchen für „Show the grid“ und „Snap to grid“.](../images/grid-settings.png)

Wenn Objekte ausgewählt sind, verschieben die Pfeiltasten sie bei aktiviertem Rasterfang um den Rasterabstand. Bei deaktiviertem Rasterfang werden sie in kleinen Schritten verschoben, ohne auf das Raster zurückgesetzt zu werden. Halten Sie **Ctrl** gedrückt, um unabhängig von der Rasterfangeinstellung kleine Schritte auszuführen. Wenn nichts ausgewählt ist, verschieben die Pfeiltasten die Ansicht.

## Rasterabstand
{: #grid-spacing}

TinyCAD unterstützt drei Rasterabstandsmodi:

- **Normal grid spacing** (Normaler Rasterabstand): am besten für die meisten Schaltplanbearbeitungen geeignet.
- **Fine grid spacing** (Feiner Rasterabstand): höhere Punktdichte (doppelt so viele Punkte), nützlich für Beschriftungen und das Zeichnen von Symbolen.
- **User grid spacing** (Benutzerdefinierter Rasterabstand): ein im Einstellungsdialog eingegebener benutzerdefinierter Abstandswert, in mm oder Zoll, je nach den aktuellen Einheiten.

Es wird empfohlen, für alle Zeichnungen **Fine grid** (Feines Raster) zu verwenden.

- Zurück zu [Zeichnen](../User-guide/)
- Zurück zu [Inhalt von v4](../CONTENTS/)

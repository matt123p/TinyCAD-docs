---
layout: default
---
# Busse
{: #buses}

Ein Bus ist eine Zeichenhilfe im Schaltplan, mit der Gruppen zusammengehöriger Signale dargestellt werden. Busse
verbessern die Lesbarkeit, insbesondere wenn viele ähnliche Leitungen nebeneinander verlaufen.

In TinyCAD wird die tatsächliche elektrische Verbindung weiterhin durch **Leitungen und Netzkennzeichnungen** hergestellt. Ein Bus allein verbindet Signale nicht elektrisch.

## Beispielzeichnung
{: #example-drawing}

<img src="/v4/images/Image 1.svg" alt="A example of using Buses" />

<p>
	<a href="/v4/examples/Bus%20Example.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Herunterladen
	</a>
</p>


## Arbeitsablauf für Busse
{: #bus-workflow}

1. Zeichnen Sie die Buslinie dort, wo die gruppierten Signale verlaufen sollen.
2. Platzieren Sie Buseinträge an den Stellen, an denen einzelne Signale abzweigen.
3. Zeichnen Sie Leitungen von jedem Buseintrag zu Symbolanschlüssen oder Verbindungspunkten.
4. Platzieren Sie Kennzeichnungen auf diesen Leitungen (zum Beispiel `D0`, `D1`, `D2`...).
5. Wiederholen Sie die Kennzeichnungen/Leitungen am Zielbus mit denselben Namen.

Wenn die Kennzeichnungen übereinstimmen, sind diese Netze verbunden.

## Busobjekte in TinyCAD
{: #bus-objects-in-tinycad}

- **Bus**: Hauptpfad für die Gruppe; nützlich zum Organisieren vieler Verbindungen.
- **Buseintrag**: visueller Übergang vom Bus zu einer einzelnen Leitung oder umgekehrt.
- **Busname**: Text entlang eines Busses (zum Beispiel `Data Bus` oder die Anzahl der Leiter).

Busnamen beschreiben die Absicht für Menschen; Kennzeichnungen auf Leitungen geben den Werkzeugen die elektrische Netzidentität an.

## Tipps zu Benennung und Wiederholung
{: #naming-and-repeat-tips}

- Achten Sie darauf, dass die Signalkennzeichnungen entlang des gesamten Verbindungswegs einheitlich sind (`A0..A15`, `D0..D7` usw.).
- Verwenden Sie Wiederholungsoptionen, um das Platzieren von Einträgen und sequenziellen Kennzeichnungen zu beschleunigen.
- Die Reihenfolge der Signalnamen kann an jedem Ende unterschiedlich sein, solange die Namen übereinstimmen.

## Verbindungspunkte
{: #junctions}

Busse benötigen keine Verbindungspunkt-Markierungen auf der Buslinie selbst.

## Busse und mehrseitige Zeichnungen
{: #buses-and-multi-sheet-drawings}

Verwenden Sie auf verschiedenen Seiten dieselben Signalkennzeichnungen, um entsprechende Netze zu verbinden.
Busgrafiken und Namen verbessern die Lesbarkeit, während die Kennzeichnungsnamen die Konnektivität für die Netzerstellung/DRC festlegen.

- Zurück zu [Zeichnen](../User-guide/)
- Zurück zu [Inhalt von v4](../CONTENTS/)

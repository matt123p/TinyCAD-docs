---
layout: default
title: 4. D flip-flops, clocks and reset
---
# 4. D-Flipflops, Takte und Reset
{: #d-flip-flops-clocks-and-reset}

[Vorherige](/v4/XSPICE-Tutorial-03/) · [Inhalt](/v4/Simulation-Tutorials/) · [Nächste](/v4/XSPICE-Tutorial-05/)

Die Beispiele in diesem Kapitel sind in TinyCAD enthalten. Wählen Sie **Beispiel öffnen (Open Example) → XSPICE und digitales Tutorial (XSPICE and digital tutorial)**, wählen Sie das benannte Beispiel aus und anschließend **Zeichnung öffnen (Open Drawing)**. Ein Download ist nicht erforderlich.

Öffnen Sie **logic-dff**. Es enthält separate analoge
Anregungssignale für D, CLK und RESET. In X1 speisen Brücken ein XSPICE-D-Flipflop;
Q und NQ werden zur Darstellung wieder in analoge Ausgänge umgewandelt.

![D-Flipflop-Testschaltung](/v4/images/simulation-tutorials/xspice/logic-dff-circuit.png)
![Berechneter Takt, Daten, Reset und Q](/v4/images/simulation-tutorials/xspice/logic-dff-results.png)

Führen Sie die Transientenanalyse über 8 µs aus. Bei jeder steigenden Taktflanke übernimmt Q den Wert von D und hält
diesen Zustand zwischen den Flanken. NQ ist nach dem Abklingen der Laufzeit sein Komplement. Die
erste steigende Taktflanke liegt bei etwa 0,5 µs. D ist bereits high, daher wird Q nach der Takt-zu-Ausgangsverzögerung des Modells high. Fallende Taktflanken übernehmen in diesem Beispiel mit positiver Flankenauslösung keine neuen
Daten.

## Die tatsächliche Modellschnittstelle lesen
{: #read-the-actual-model-interface}

Die interne Instanz lautet:

```spice
Aff dd dc NULL dr dq dn flip
.model flip d_dff(ic=0 clk_delay=20n reset_delay=20n
+ rise_delay=5n fall_delay=5n)
```

Ihre Anschlüsse sind Daten, Takt, asynchrones Setzen, asynchroner Reset, Ausgang und
invertierter Ausgang. `NULL` lässt den optionalen Setzeingang unbeschaltet. Der Anfangszustand
ist explizit auf null gesetzt. Die Anschlussreihenfolge ist Teil des Modellvertrags; die Positionen der Pins am
sichtbaren Block legen sie nicht allein fest.

## Asynchronen Reset testen
{: #test-asynchronous-reset}

RESET wird bei etwa 6 µs für ungefähr 0,5 µs high. Q wird gelöscht, ohne auf die nächste
steigende Taktflanke zu warten. Prüfen Sie den Ausgang, solange Reset aktiv ist, bevor Sie das
Taktverhalten interpretieren. Nach Aufhebung des Resets übernehmen nachfolgende Taktflanken wieder Daten. Dieses Beispiel prüft den Reset unabhängig von der normalen D-Wellenform.

Verwenden Sie ein kurzes Messfenster um die erste Übernahmeflanke, um die
Takt-zu-Q-Verzögerung bei 2,5 V zu messen. Die gemessene analoge Verzögerung umfasst die Brücken,
nicht nur `clk_delay`. Verwenden Sie ein weiteres Fenster um den Reset, um das asynchrone
Löschen zu untersuchen. Vermeiden Sie es, eine einzige Messung an der ersten Flanke zur Zusammenfassung mehrerer
verschiedener auslösender Ereignisse heranzuziehen.

## Annahmen zu Anfangszustand sowie Setup und Hold
{: #initial-state-and-setuphold-assumptions}

Die Einstellung von `ic=0` macht dieses Tutorial reproduzierbar. In einem Design, dessen tatsächlicher Einschaltzustand
nicht festgelegt ist, kann die Annahme eines bequemen Anfangswerts von null eine fehlende
Reset-Anforderung verschleiern. Versuchen Sie einen expliziten Reset-Impuls beim Start und vergleichen Sie ihn damit,
sich auf die Anfangsbedingungseinstellung des Modells zu verlassen.

Verschieben Sie als Nächstes einen Datenübergang nahe an eine Taktflanke. Beobachten Sie, wie das Funktionsmodell Ereignisse ordnet, aber betrachten Sie ein sauberes
Digitalergebnis nicht als Beweis dafür, dass ein reales Bauteil die Setup- und Hold-Zeiten einhält. Dieses einfache Funktionsmodell ist kein
Transistormodell für Metastabilität und liefert keine Aussage über die Wahrscheinlichkeit einer Auflösung metastabiler Zustände. Die Zeitvorgaben des Herstellers und ein geeignetes Bauteilmodell bleiben separate Eingaben für eine elektrische Timing-Analyse.

Ein nützlicher dokumentierter Testfall enthält die Datenwellenform, die Konvention für die Taktflanke,
Reset-Polarität und -Timing, die Annahme zum Anfangszustand, die erwartete übernommene Sequenz
und den Messschwellwert. Das ist aussagekräftiger als ein Screenshot von Q allein.

## Die Lehrschaltungen herunterladen
{: #download-the-lesson-circuits}

Dieselben Beispiele sind bereits unter **Beispiel öffnen (Open Example)** verfügbar. Für eine unabhängige Kopie laden Sie eine `.dzn`-Zeichnung herunter und verwenden Sie in TinyCAD **Datei → Öffnen (File → Open)**. Die zugehörige `.cir`-Datei enthält SPICE-Text zur Prüfung oder für einen kompatiblen externen Simulator, sie ist keine TinyCAD-Zeichnung. Für neue Simulationsläufe mit XSPICE-Schaltungen wird Desktop benötigt.

| Beispiel | Zeichnung | Netzliste |
| --- | --- | --- |
| logic-dff | [TinyCAD-Zeichnung](/v4/examples/simulation-tutorials/xspice/logic-dff.dzn) | [SPICE-Text](/v4/examples/simulation-tutorials/xspice/logic-dff.cir) |

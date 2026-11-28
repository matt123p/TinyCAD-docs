---
layout: default
title: "Start here: how to use these tutorials"
---
# Hier beginnen: So verwendest du diese Tutorials
{: #start-here-how-to-use-these-tutorials}

[Inhalt](/v4/Simulation-Tutorials/) · [Weiter: deine erste SPICE-Simulation](/v4/SPICE-Tutorial-01/)

Diese Tutorials verbinden Erklärungen mit Schaltungen, die du in
TinyCAD ausführen und ändern kannst. **Die Beispiele sind bereits in TinyCAD enthalten.** Du musst weder eine Tutorial-ZIP-Datei
herunterladen noch eine Zeichnung auf der Festplatte suchen oder ein separates SPICE-
Programm installieren, um den Lektionen zu folgen.

Beginne mit dem SPICE-Kurs, wenn Simulation für dich neu ist. Er startet mit Spannung,
Strom und einfachen Schaltungen und behandelt anschließend Wellenformen, Filter, Verstärker
und Designuntersuchungen. Der separate XSPICE-Kurs behandelt ereignisgesteuerte Logik
und Mixed-Signal-Simulation. Verwende für diesen Kurs **TinyCAD Desktop**; die Browser-
Engine enthält XSPICE nicht.

## Die enthaltenen Beispiele finden und öffnen
{: #find-and-open-the-bundled-examples}

1. Öffne TinyCAD und suche rechts in der Titelleiste des Browsers nach **Beispiel öffnen** oder in Desktop nach **Datei → Beispiel öffnen**. Das Symbol zeigt einen
   geöffneten Ordner. Damit öffnest du den Beispielbrowser.
2. Wähle **SPICE-Tutorial** für die Analog-Lektionen oder **XSPICE- und Digital-
   Tutorial** für die digitalen Lektionen. Die Gruppen werden auch im Navigationsbereich
   des Browsers angezeigt.
3. Wähle in der Liste **Zeichnungen** der Gruppe das in der Lektion genannte Beispiel aus.
   Wähle für dein erstes Experiment **divider** im **SPICE-Tutorial** aus.
4. Lies die Beschreibung und prüfe die Schaltungsvorschau. Wenn du das Beispiel auswählst,
   werden seine Details angezeigt; deine Zeichnung wird dadurch noch nicht ersetzt.
5. Wähle unten im Browser **Zeichnung öffnen**. TinyCAD öffnet eine
   bearbeitbare Kopie des Beispiels. Wenn du ungespeicherte Arbeit hast, beantworte die
   Speicherabfrage, bevor du fortfährst.

Die Kurzangabe **Beispiel öffnen → SPICE-Tutorial → divider → Zeichnung öffnen**
bedeutet genau diese Schritte. Ein Name wie **divider**, **rc-ac** oder **logic-counter**
ist der Name des Beispiels in diesem Browser und keine Datei, die du suchen musst.

Verwende **Gruppen und Beispiele suchen**, um ein benanntes Beispiel zu finden. Wenn ein Filter
das Gesuchte ausblendet, lösche die Suche und verwende **Alle Gruppen**, um zur Gruppenliste
zurückzukehren. **Zeichnung öffnen** wird verfügbar, sobald du ein Beispiel ausgewählt hast.
Der Eintrag **Hier beginnen — Tutorials verwenden** zeigt außerdem diese Anleitung an und
öffnet denselben ersten divider-Schaltkreis.

Sieh dir [divider öffnen, ausführen und ändern](/v4/videos/simulation-tutorials/spice/first-run.mp4) an, um eine untertitelte
Schritt-für-Schritt-Anleitung zu diesen Schritten und deinen ersten beiden Erfassungen zu sehen.

## Einer Lektion zusammen mit der zugehörigen Schaltung folgen
{: #follow-a-lesson-alongside-its-circuit}

Lass das Kapitel im Handbuch oder Markdown-Viewer geöffnet, während du in
TinyCAD arbeitest. Der Beispielbrowser zeigt auch die zugehörige Lektionsbeschreibung an.
Am Anfang jedes Kapitels werden die darin verwendeten eingebetteten Beispiele genannt. Manche Kapitel verwenden
mehrere Beispiele: Das Kapitel zum Signalgenerator enthält beispielsweise separate Quellenbeispiele,
damit du jeweils eine Wellenform untersuchen kannst.

Verwende für jedes Experiment diesen Ablauf:

1. **Lies die Fragestellung.** Bestimme, was du untersuchst: eine DC-Spannung,
   Ladezeit, Grenzfrequenz, einen Logikzustand oder eine andere Größe.
2. **Untersuche die Schaltung.** Suche die Quelle, Masse, Bauteilwerte und benannten
   Signale. Bezeichnungen wie IN und OUT identifizieren elektrische Knoten; Referenzen
   wie R1 und C1 identifizieren Bauteile.
3. **Prüfe die gespeicherte Konfiguration.** Wähle das Blatt **Simulation** und sieh unter
   **Setup** nach. Die Beispiele enthalten bereits die für die Lektion erforderlichen
   Analyse-Einstellungen und Modelle.
4. **Sage das Ergebnis voraus**, indem du die Erklärung oder Gleichung im Kapitel verwendest.
5. **Wähle Ausführen (Run)** und vergleiche anschließend die neue Erfassung mit den erwarteten Werten
   und Diagrammen. Untersuche sowohl die Zahlen als auch die Form der Kurve.
6. **Ändere eine Sache**, wie in der Lektion vorgeschlagen, sage die Auswirkung voraus und führe die Simulation
   erneut aus. Notiere die geänderte Einstellung und das Ergebnis.

Nachdem du ein Beispiel geöffnet hast, wähle **Erklärung** in der Titelleiste des Browsers oder **Ansicht → Erklärung anzeigen** in Desktop, damit die
Anleitung neben der Zeichnung angezeigt wird. Der Erklärungsbereich befindet sich neben den
Simulationsdiagrammen und kann unabhängig davon in der Größe geändert oder geschlossen werden. Wähle
**Erklärung** erneut in der Titelleiste des Browsers oder **Ansicht → Erklärung anzeigen** in Desktop, um ihn wieder zu öffnen.

Das wellenförmige Symbol in der Werkzeugleiste zeigt beim Darüberfahren den Text **Simulation** an. Wenn eine
Lektion **Simulation → Diagramme anzeigen** oder **Simulation → SPICE-Komponenten** nennt, öffne
das Menü dieses Symbols. Das **Simulationsblatt** ist eine separate Registerkarte innerhalb der Zeichnung;
es enthält die Konfiguration und Ergebnisansichten des Experiments.

![TinyCAD mit dem ersten divider-Schaltkreis und seinem Simulationsdiagrammbereich](/v4/Images/simulation-tutorials/spice/tinycad-first-run.png)

Dieser Screenshot der Anwendung zeigt den geöffneten divider mit den Blattregisterkarten
unter der Schaltung und dem Diagrammbereich rechts. Die wichtigsten Ausgangspunkte
sind die Schaltung, das Simulationsblatt und **Ausführen (Run)**.

## Erwartete Ausgaben verstehen
{: #understand-the-expected-outputs}

Schaltbilder zeigen die Anordnung und die Verbindungen, auf die du achten sollst. Ergebnisdiagramme
zeigen Referenzdaten, die vom Solver berechnet wurden. Screenshots der Anwendung zeigen, wo
du in TinyCAD arbeiten kannst. Fenstergröße, Zoomstufe und Diagrammfarben können abweichen; vergleiche
Bauteilwerte, Signale, Einheiten und Analyse-Einstellungen.

Im unveränderten Beispiel **divider** beträgt die Quellenspannung 5 V und beide Widerstände haben
1 kΩ. Nach einer Arbeitspunktberechnung erwartest du IN = **5 V**, OUT = **2,5 V** und
einen Quellstrom `v1#branch` von **−2,5 mA**. Ein Arbeitspunkt hat pro
Signal nur einen Wert und erzeugt daher keine zeitabhängige Wellenform. Die erste Lektion erklärt
das Vorzeichen des Stroms und die Berechnung des Spannungsteilers.

Die Zeichnungen enthalten gespeicherte Referenzerfassungen, daher sind Ergebnisse möglicherweise bereits
sichtbar, bevor du **Ausführen (Run)** drückst. Dabei handelt es sich um gespeicherte Ergebnisse eines früheren
Durchlaufs. Nachdem du die Schaltung oder ihre Einstellungen bearbeitet hast, führe die Simulation erneut aus und prüfe die neue
Erfassung. Kleine numerische Abweichungen sind normal; bei großen Abweichungen solltest du Bauteilwerte, Modellannahmen, Einheiten und Messfenster überprüfen.

## Experimente behalten und zum Original zurückkehren
{: #keep-experiments-and-return-to-the-original}

Eingebettete Beispiele werden als bearbeitbare Kopien geöffnet. Verwende **Speichern unter**, um deine Arbeit
unter einem aussagekräftigen Namen zu speichern, zum Beispiel einen Spannungsteiler mit einem anderen unteren Widerstand.
Das Speichern deiner Kopie ändert das enthaltene Original nicht.

Um ein Experiment zurückzusetzen, öffne das benannte Beispiel erneut über **Beispiel öffnen**.
Speichere auf Nachfrage alle Änderungen, die du behalten möchtest. Dadurch werden die ursprüngliche Schaltung,
Einstellungen und gespeicherten Referenzergebnisse des Beispiels wiederhergestellt. Gehe genauso vor,
wenn ein Kapitel zu einem anderen Beispiel wechselt.

Beim normalen Speichern können erfasste Ergebnisse zusammen mit der Zeichnung erhalten bleiben. **Ohne
Ergebnisse speichern** behält Schaltung und Einstellungen bei, lässt aber die gespeicherten Ergebnisse weg. Führe die Simulation erneut aus, wenn du sie später wieder benötigst.

## Deinen Weg durch das Material wählen
{: #choose-your-route-through-the-material}

| Dein Ziel | Wo du beginnen solltest |
| --- | --- |
| Simulation von Anfang an lernen | [SPICE-Kapitel 1](/v4/SPICE-Tutorial-01/), dann die Kapitel der Reihe nach durcharbeiten |
| TinyCADs Engines, Symbole und Bedienelemente verstehen | [So implementiert TinyCAD SPICE-](/v4/SPICE-Tutorial-11/) |
| Eine Eingangs-Wellenform auswählen | [Signalgeneratoren](/v4/SPICE-Tutorial-03/) |
| Den überarbeiteten AMP.DSN-Verstärker untersuchen | [Verstärkervorspannung](/v4/SPICE-Tutorial-07/), anschließend Verstärkung und Leistung |
| Ereignisgesteuerte digitale Simulation lernen | [XSPICE-Kapitel 1](/v4/XSPICE-Tutorial-01/), mit Desktop |

Die Links oben in jedem Kapitel führen zurück zum Inhalt oder weiter zur nächsten
Lektion. Du kannst jederzeit zu einem früheren Beispiel zurückkehren. Wenn ein Experiment fehlschlägt,
lies die Ansicht **Diagnose** und vergleiche sie mit einem frisch geöffneten eingebetteten
Beispiel, bevor du weitere Änderungen vornimmst.

## Aktuelle Steuerelemente des Circuit Explorers
{: #current-circuit-explorer-controls}

Wähle das Simulationsblatt, öffne **Setup** und scrolle zu **Circuit Explorer**. Verwende **Werkzeuge hinzufügen**, um Messungen, Abstimmen / Durchlauf, Anforderungen, DC-Überlagerung oder Analyse-Labor hinzuzufügen. Konfigurierte Werkzeuge werden links angezeigt; der Diagrammbereich ist eine separate Ansicht. **Ausführen (Run)** und **Stoppen (Stop)** befinden sich in der Hauptwerkzeugleiste, wenn ein Simulationsblatt ausgewählt ist. Siehe [Diagramme, Messungen und Circuit Explorer](/v4/Simulation-Charts-and-Measurements/) für die aktuelle Referenz.

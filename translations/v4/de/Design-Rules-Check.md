---
layout: default
---
# Entwurfsregelprüfung
{: #design-rules-check}

In v4 funktioniert die **Entwurfsregelprüfung (Design Rules Check) genauso wie in v3**.

Verwenden Sie die Entwurfsregelprüfung, um schwerwiegende Probleme mit der Schaltplanverbindung zu finden, bevor Sie Ausgaben wie Netzlisten oder VHDL erzeugen.

Sie prüft Verdrahtungen und Kombinationen von Pin-Typen auf häufige elektrische Fehler (zum
Beispiel miteinander verbundene, sich widersprechende Ausgänge). Sie garantiert **nicht**, dass die
Schaltung funktional korrekt ist.

Streben Sie null Entwurfsfehler an, um das Vertrauen in die Korrektheit des Schaltplans zu erhöhen.

## Entwurfsregelprüfung ausführen
{: #run-design-rules-check}

1. Öffnen Sie Ihren Entwurf.
2. Wählen Sie im Menü „Spezialwerkzeuge“ die Option **Entwurfsregeln prüfen (Check Design Rules)**.
3. Aktivieren oder deaktivieren Sie im Dialogfeld der Regeln die gewünschten Prüfungen.
4. Wählen Sie **OK**, um die Prüfung auszuführen.

{% include video-player.html
	src="/v4/images/video/Video 8.mp4"
	width=1622
	height=952
	caption="Videoanleitung zur Ausführung und Verwendung der Entwurfsregelprüfung."
%}


## Ergebnisse lesen
{: #reading-the-results}

- Jeder erkannte Fehler wird im Schaltplan durch einen roten Kreis markiert.
- Neben dem Entwurf wird eine Fehlerliste angezeigt.
- Wenn Sie einen Fehler in der Liste auswählen, wird die entsprechende Stelle in der Zeichnung zentriert.

## Löschen und erneut prüfen
{: #clear-and-re-check}

- Wählen Sie in der Fehlerliste **Schließen (Close)**, um alle aktuellen Fehlermarkierungen zu entfernen.
- Fehlerkreise sind temporäre Markierungen zur Überprüfung: Sie werden nicht mit dem
	Entwurf gespeichert.

- Zurück zu [Advanced](../Advanced/)
- Zurück zu [v4-Inhalt](../CONTENTS/)

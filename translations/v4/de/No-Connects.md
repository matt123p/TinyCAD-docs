---
layout: default
---
# Nichtanschlüsse
{: #no-connects}

Nichtanschluss-Markierungen zeigen an, dass ein Pin absichtlich nicht angeschlossen ist.

Verwenden Sie sie, wenn ein Symbol-Pin in Ihrem Entwurf nicht verwendet wird, Sie dies aber
für alle Personen, die den Schaltplan lesen, und für den Design Rule Checker deutlich machen möchten.

## Wozu Nichtanschlüsse dienen
{: #what-no-connects-are-for}

- absichtlich nicht verwendete Pins dokumentieren,
- Mehrdeutigkeiten bei der Überprüfung reduzieren,
- DRC-Warnungen und -Fehler für absichtlich offen gelassene Pins vermeiden.

Typische Beispiele sind nicht verwendete Logikeingänge, ungenutzte Operationsverstärkerkanäle oder nicht verwendete
Anschlusspins.

## Nichtanschlüsse platzieren
{: #how-to-place-no-connects}

1. Wählen Sie das Werkzeug „Kein Anschluss“ (No Connect).
2. Platzieren Sie die Markierung direkt auf dem nicht verwendeten Pin (oder dem vorgesehenen offenen Punkt).
3. Wiederholen Sie den Vorgang für jeden Pin, der absichtlich nicht angeschlossen ist.

Nichtanschlüsse sind einfache Markierungen: Nach dem Platzieren können sie verschoben oder gelöscht werden,
aber nicht anderweitig bearbeitet werden.

## Bewährte Vorgehensweisen
{: #best-practices}

- Verwenden Sie Nichtanschlüsse konsequent für alle absichtlich offenen Pins.
- Platzieren Sie keine Nichtanschlüsse auf Pins, die später verdrahtet werden sollen.
- Führen Sie nach größeren Änderungen eine DRC-Prüfung durch, um neu entstandene nicht angeschlossene Pins zu erkennen.

- Zurück zu [Zeichnen](../User-guide/)
- Zurück zu [Inhalt von v4](../CONTENTS/)

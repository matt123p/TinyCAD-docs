---
layout: default
---
# Versorgungssymbole
{: #power-symbols}

Versorgungssymbole kennzeichnen Verbindungen zu benannten Versorgungsnetzen wie `GND`, `+5V`,
`VCC` oder `+3V3`.

Alle Versorgungssymbole mit demselben Namen gelten als elektrisch verbunden.

{% include video-player.html
	src="/v4/images/video/Video 5.mp4"
	width=1596
	height=700
	caption="Videoanleitung zum Platzieren von Versorgungssymbolen."
%}

<p>
	<a href="/v4/examples/Simple%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Herunterladen
	</a>
</p>

## Funktionsweise von Versorgungssymbolen
{: #how-power-symbols-work}

- Die Netzverbindung richtet sich nach dem **Versorgungsnamen**.
- Die **Form** dient nur der Darstellung und verändert die Netzverbindung nicht.
- Ausrichtung und Form dienen der besseren Lesbarkeit und dem Zeichenstil.

Verwenden Sie im gesamten Entwurf einheitliche Namen, um getrennte Versorgungsnetze zu vermeiden.

## Platzierungsregeln
{: #placement-rules}

1. Wählen Sie das Versorgungswerkzeug.
2. Wählen Sie Ausrichtung, Form und Namen.
3. Platzieren Sie das Symbol und stellen Sie die Verbindung am Ende des Symbolanschlusses her.

Verbinden Sie Leitungen mit dem Anschlussende des Versorgungssymbols (nicht nur in der Nähe der Grafik), damit die
Verbindung erkannt wird.

## Verborgene Versorgungsanschlüsse an Symbolen
{: #hidden-power-pins-on-symbols}

Einige Bibliothekssymbole verwenden verborgene Versorgungsanschlüsse (zum Beispiel viele Logikfamilien).
Diese Anschlüsse werden automatisch mit passenden Versorgungsnetznamen verbunden.

Verwenden Sie die von der Symbolbibliothek erwarteten Namen (bei Bedarf zum Beispiel `VCC`/`GND`), damit
automatische Versorgungsverbindungen korrekt funktionieren.

## Bearbeitung und Stile
{: #editing-and-styles}

Sie können die Form eines Versorgungssymbols ändern, indem Sie es auswählen und anschließend in
der Werkzeugleiste eine neue Form auswählen.

## Verhalten bei mehreren Blättern
{: #multi-sheet-behavior}

Versorgungsnetznamen gelten global innerhalb des für die Netzlistenerstellung verwendeten Entwurfskontexts.
Eine einheitliche Benennung über alle Blätter hinweg gewährleistet die beabsichtigte Versorgungsverbindung.

- Zurück zu [Zeichnen](../User-guide/)
- Zurück zu [Inhalt von v4](../CONTENTS/)

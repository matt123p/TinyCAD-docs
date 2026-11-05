---
layout: default
---
# Przewody
{: #wires}

Przewody to aktywne elektrycznie połączenia na schemacie TinyCAD.

Jeśli potrzebujesz połączeń na potrzeby DRC, tworzenia listy sieci, eksportu do SPICE/PCB lub
łączenia między arkuszami, używaj obiektów przewodów (a nie linii adnotacji).

## Dlaczego przewody są ważne
{: #why-wires-matter}

- Przewody definiują sieci elektryczne.
- Przewody łączą się z wyprowadzeniami symboli i innymi prawidłowymi punktami połączeń.
- TinyCAD używa połączeń przewodów do sprawdzania reguł i generowania wyników.

Użycie linii adnotacji zamiast przewodów może wyglądać poprawnie, ale dla narzędzi
obwód będzie elektrycznie niepołączony.

## Umieszczanie przewodów
{: #placing-wires}

1. Wybierz narzędzie Wire (Przewód).
2. Kliknij, aby rozpocząć w prawidłowym punkcie połączenia — choć nie jest to bezwzględnie konieczne.  Przewód można umieścić w dowolnym miejscu.  Prawidłowy punkt połączenia można rozpoznać po czerwonym okręgu wskazującym połączenie.
3. Klikaj, aby umieszczać narożniki/odcinki w razie potrzeby.
4. Zakończ w innym prawidłowym punkcie połączenia LUB
5. Kliknij prawym przyciskiem myszy, aby zakończyć tryb prowadzenia przewodu.


{% include video-player.html
	src="/v4/images/video/Video 4.mp4"
	width=1602
	height=696
	caption="Film instruktażowy pokazujący, jak umieszczać przewody."
%}

<p>
	<a href="/v4/examples/Simple%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Pobierz (Download)
	</a>
</p>


## Przyciąganie i węzły
{: #snapping-and-junctions}

- Przewody przyciągają się do wyprowadzeń i istniejących przewodów.
- Węzły są dodawane automatycznie w razie potrzeby.
- Krzyżujące się przewody nie są połączone, chyba że w miejscu skrzyżowania znajduje się węzeł.

## Edytowanie przewodów
{: #editing-wires}

Aby edytować przewód, po prostu kliknij go. Następnie możesz przeciągnąć cały odcinek przewodu, przeciągając sam przewód, albo przesunąć jego końce, przeciągając uchwyty przesuwania.

- Wstecz do [Rysowanie](../User-guide/)
- Wstecz do [spisu treści v4](../CONTENTS/)

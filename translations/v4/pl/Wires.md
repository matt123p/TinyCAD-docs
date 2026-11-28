---
layout: default
---
# Przewody
{: #wires}

Przewody to aktywne elektrycznie połączenia na schemacie TinyCAD.

Jeśli potrzebujesz połączeń do kontroli DRC, tworzenia listy sieci, eksportu do SPICE/PCB lub
łączenia między arkuszami, używaj obiektów przewodów (a nie linii pomocniczych).

## Dlaczego przewody są ważne
{: #why-wires-matter}

- Przewody definiują sieci elektryczne.
- Przewody przyciągają się do wyprowadzeń symboli i innych prawidłowych punktów połączeń.
- TinyCAD wykorzystuje połączenia przewodów do sprawdzania reguł i generowania danych wyjściowych.

Użycie linii pomocniczych zamiast przewodów może wyglądać poprawnie, ale dla narzędzi
obwód będzie elektrycznie niepołączony.

## Tryby prowadzenia przewodów
{: #wire-routing-modes}
{: #wire-routing-modes}

W TinyCAD v4.0.11 użyj selektora obok polecenia Wire, aby wybrać sposób rysowania nowych segmentów.

| Tryb | Działanie |
|---|---|
| **90°** | Prowadzenie poziome i pionowe. |
| **45°** | Prowadzenie ograniczone do kierunków 45° w TinyCAD. |
| **Dowolny** | Proste segmenty pod dowolnym kątem. |

Wybór trybu aktywuje narzędzie Wire i zachowuje bieżący podgląd przewodu. Tryb można zmienić przed umieszczeniem następnego segmentu. Przyciąganie do siatki jest osobnym ustawieniem. Aby automatycznie poprowadzić połączenie między dwoma punktami, użyj sąsiedniego narzędzia [Przewód punkt-punkt](#auto-routing).

![Selektor na pasku narzędzi Wire z opcjami 90°, 45° i Dowolny.](../Images/wire-routing-modes.png)

## Umieszczanie przewodów
{: #placing-wires}
{: #placing-wires}

1. Wybierz narzędzie Wire.
2. Kliknij prawidłowy punkt połączenia, aby rozpocząć — choć nie jest to bezwzględnie konieczne. Przewód można umieścić w dowolnym miejscu. O prawidłowym punkcie połączenia informuje czerwone kółko.
3. W razie potrzeby klikaj, aby umieszczać narożniki i segmenty.
4. Zakończ na innym prawidłowym punkcie połączenia LUB
5. Kliknij prawym przyciskiem myszy, aby zakończyć tryb prowadzenia przewodów.


{% include video-player.html
	src="/v4/Images/video/Video 4.mp4"
	width=1602
	height=696
	caption="Film instruktażowy pokazujący, jak umieszczać przewody."
%}

<p>
	<a href="/v4/examples/Simple%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Pobierz
	</a>
</p>


## Automatyczne prowadzenie za pomocą narzędzia Przewód punkt-punkt
{: #auto-routing-with-point-to-point-wire}
{: #auto-routing}

Narzędzie **Przewód punkt-punkt** wyznacza trasę między dwoma punktami połączenia i samo umieszcza
segmenty przewodu. Przydaje się podczas codziennej pracy myszą, a szczególnie
na ekranie dotykowym, gdzie łatwiej wskazać dwa końce niż umieszczać każdy narożnik.

1. Wybierz **Przewód punkt-punkt** obok selektora trybu Wire na pasku narzędzi.
2. Kliknij lub dotknij wyprowadzenia symbolu początkowego albo istniejącego przewodu. Czerwone kółko oznacza
   prawidłowy punkt połączenia.
3. Przesuń wskaźnik do wyprowadzenia docelowego lub przewodu, aby wyświetlić podgląd automatycznej trasy.
4. Kliknij lub dotknij punktu docelowego, aby umieścić całe połączenie. TinyCAD zaznaczy
   nowe segmenty przewodu i zamknie narzędzie prowadzenia. Wybierz ponownie **Przewód punkt-punkt**,
   aby utworzyć kolejne połączenie.

W odróżnieniu od zwykłego narzędzia Wire oba końce muszą być prawidłowymi punktami połączenia;
kliknięcie pustego miejsca nie umieści narożnika. Kliknij prawym przyciskiem myszy, aby anulować niedokończoną
trasę. Jeśli chcesz samodzielnie wybrać narożniki, użyj narzędzia [Wire](#placing-wires).

Wypróbuj [przykładowy rysunek z automatycznym prowadzeniem](../examples/Auto-route%20example.dsn).
Rezystor i dioda LED znajdują się na siatce, a połączenie między nimi jest przerwane.

Najpierw wybierz Przewód punkt-punkt i wskaż prawe wyprowadzenie R1.

![1. R1 i D1 są rozłączone. Czerwone kółko oznacza wyprowadzenie początkowe R1.](../Images/wire-auto-route-start.png){: width="435" style="max-width: 50%;"}

Następnie wskaż górne wyprowadzenie D1. Podgląd pokazuje trasę i jej narożnik, zanim
ją zatwierdzisz.

![2. Wyświetl podgląd automatycznej trasy do D1. Czerwone kółko oznacza wyprowadzenie docelowe.](../Images/wire-auto-route.png){: width="435" style="max-width: 50%;"}

Na koniec kliknij lub dotknij wyprowadzenia D1. TinyCAD umieści wszystkie segmenty w jednej operacji.

![3. Zatwierdź punkt docelowy, aby umieścić całe połączenie wraz z narożnikiem.](../Images/wire-auto-route-complete.png){: width="435" style="max-width: 50%;"}

Na ekranie dotykowym możesz bezpośrednio dotknąć obu końców. W przypadku małych lub ciasno rozmieszczonych
wyprowadzeń użyj [lupy](../Touch-controls/#precise-placement-with-the-loupe): wyceluj
w każdy koniec i naciśnij **Kliknij**. Nie musisz przeciągać wzdłuż trasy ani
wskazywać jej narożników. Sprawdź wykonane połączenie i w razie potrzeby skoryguj jego segmenty.

## Przyciąganie i węzły
{: #snapping-and-junctions}

- Przewody przyciągają się do wyprowadzeń i istniejących przewodów.
- W razie potrzeby węzły są dodawane automatycznie.
- Krzyżujące się przewody nie są połączone, chyba że znajduje się w tym miejscu węzeł.

## Porządkowanie istniejącego układu
{: #tidying-an-existing-layout}

Użyj polecenia [Porządkowanie układu (Automatyczny układ)](../Layout-Tidy-Up/), aby rozmieścić ponownie istniejące komponenty, przewody i etykiety na całym arkuszu lub w zaznaczonym obszarze. Przewód punkt-punkt tworzy nowe połączenie; Automatyczny układ porządkuje istniejące połączenia.

## Edytowanie przewodów
{: #editing-wires}

Aby edytować przewód, po prostu go kliknij. Możesz teraz przeciągnąć cały segment przewodu albo przesunąć jego końce, przeciągając uchwyty.

- Wróć do [Rysowania](../User-guide/)
- Wróć do [spisu treści v4](../CONTENTS/)

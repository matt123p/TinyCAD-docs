---
layout: default
---
# Przewody
{: #wires}

Przewody to połączenia aktywne elektrycznie na schemacie TinyCAD.

Jeśli potrzebujesz połączeń na potrzeby DRC, tworzenia listy połączeń, eksportu do SPICE/PCB lub łączenia między arkuszami,
używaj obiektów przewodów (a nie linii opisowych).

## Dlaczego przewody są ważne
{: #why-wires-matter}

- Przewody definiują sieci elektryczne.
- Przewody przyciągają się do pinów symboli i innych prawidłowych punktów połączeń.
- TinyCAD używa połączeń przewodami do sprawdzania reguł i generowania wyników.

Użycie linii opisowych zamiast przewodów może wyglądać poprawnie, ale dla narzędzi
obwód będzie elektrycznie niepołączony.

## Tryby prowadzenia przewodów
{: #wire-routing-modes}
{: #wire-routing-modes}

W TinyCAD v4.0.11 użyj selektora obok polecenia Przewód (Wire), aby wybrać sposób rysowania nowych segmentów.

| Tryb | Zachowanie |
|---|---|
| **90°** | Prowadzenie poziome i pionowe. |
| **45°** | Prowadzenie ograniczone do kierunków 45° w TinyCAD. |
| **Dowolny** | Odcinki proste pod dowolnym kątem. |

Wybór trybu aktywuje polecenie Przewód (Wire) i zachowuje aktywny podgląd przewodu. Tryb można zmienić przed umieszczeniem następnego segmentu. Przyciąganie do siatki jest osobnym ustawieniem. Aby automatycznie poprowadzić połączenie między dwoma punktami, użyj sąsiedniego [narzędzia Przewód punkt-punkt (Point-to-Point Wire](#auto-routing).

![Selektor na pasku narzędzi Przewód z opcjami 90°, 45° i Dowolny.](../images/wire-routing-modes.png)

## Umieszczanie przewodów
{: #placing-wires}
{: #placing-wires}

1. Wybierz narzędzie Przewód.
2. Kliknij prawidłowy punkt połączenia, aby rozpocząć — choć nie jest to bezwzględnie konieczne. Możesz umieścić przewód w dowolnym miejscu. Prawidłowy punkt połączenia rozpoznasz po czerwonym kółku oznaczającym połączenie.
3. Klikaj, aby w razie potrzeby umieszczać narożniki/segmenty.
4. Zakończ na innym prawidłowym punkcie połączenia LUB
5. Kliknij prawym przyciskiem myszy, aby zakończyć tryb prowadzenia przewodów.


{% include video-player.html
	src="/v4/images/video/Video 4.mp4"
	width=1602
	height=696
	caption="Samouczek wideo pokazujący, jak umieszczać przewody."
%}

<p>
	<a href="/v4/examples/Simple%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Pobierz
	</a>
</p>


## Automatyczne prowadzenie za pomocą narzędzia Przewód punkt-punkt
{: #auto-routing-with-point-to-point-wire}
{: #auto-routing}

**Przewód punkt-punkt (Point-to-Point Wire)** wyznacza trasę między dwoma punktami połączeń i umieszcza za Ciebie
segmenty przewodu. Przydaje się w codziennej pracy myszą, a zwłaszcza na ekranie dotykowym,
gdzie stuknięcie dwóch punktów końcowych jest łatwiejsze niż umieszczanie każdego narożnika.

1. Wybierz **Przewód punkt-punkt (Point-to-Point Wire)** obok selektora trybu Przewód na pasku narzędzi.
2. Kliknij lub stuknij pin symbolu początkowego albo istniejący przewód. Czerwone kółko oznacza
   prawidłowy punkt połączenia.
3. Przesuń wskaźnik do pinu docelowego lub przewodu, aby wyświetlić podgląd automatycznej trasy.
4. Kliknij lub stuknij punkt docelowy, aby umieścić całe połączenie. TinyCAD zaznaczy
   nowe segmenty przewodu i zakończy działanie narzędzia prowadzenia. Wybierz ponownie **Przewód punkt-punkt
   (Point-to-Point Wire)**, aby utworzyć kolejne połączenie.

W odróżnieniu od zwykłego narzędzia Przewód oba końce muszą być prawidłowymi punktami połączeń;
kliknięcie pustego miejsca nie umieszcza narożnika. Kliknij prawym przyciskiem myszy, aby anulować niedokończoną
trasę. Jeśli chcesz samodzielnie wybrać narożniki, użyj narzędzia [Przewód (Wire](#placing-wires).

Wypróbuj [przykładowy rysunek automatycznego prowadzenia przewodów](../examples/Auto-route%20example.dsn). Rezystor i dioda LED są umieszczone na siatce, a połączenie między nimi pozostaje otwarte.

Najpierw wybierz Point-to-Point Wire i wskaż prawy pin R1.

![1. Zacznij od R1 i D1 bez połączenia między nimi. Czerwony okrąg oznacza pin początkowy R1.](../images/wire-auto-route-start.png){: width="435" style="max-width: 50%;"}

Następnie wskaż górny pin D1. Podgląd pokazuje trasę i jej załamanie przed zatwierdzeniem połączenia.

![2. Sprawdź podgląd automatycznej trasy do D1. Czerwony okrąg oznacza pin docelowy.](../images/wire-auto-route.png){: width="435" style="max-width: 50%;"}

Na końcu kliknij lub dotknij pinu D1. TinyCAD umieści wszystkie segmenty w jednej operacji.

![3. Zatwierdź punkt docelowy, aby umieścić całe połączenie wraz z załamaniem.](../images/wire-auto-route-complete.png){: width="435" style="max-width: 50%;"}

Na ekranie dotykowym możesz stuknąć bezpośrednio oba punkty końcowe. W przypadku małych lub ciasno rozmieszczonych
pinów użyj [lupy](../Touch-controls/#precise-placement-with-the-loupe): wskaż
każdy punkt końcowy i naciśnij **Kliknij**. Nie musisz przeciągać wzdłuż trasy ani
stukać jej narożników. Sprawdź wykonane połączenie i w razie potrzeby popraw jego segmenty.

## Przyciąganie i węzły
{: #snapping-and-junctions}

- Przewody przyciągają się do pinów i istniejących przewodów.
- W razie potrzeby węzły są dodawane automatycznie.
- Krzyżujące się przewody nie są połączone, chyba że znajduje się w tym miejscu węzeł.

## Edytowanie przewodów
{: #editing-wires}

Aby edytować przewód, po prostu kliknij go. Możesz teraz przeciągnąć cały segment przewodu, przeciągając sam przewód, albo przesunąć jego końce, przeciągając uchwyty przesuwania.

- Wróć do [Rysowanie](../User-guide/)
- Wróć do [spisu treści v4](../CONTENTS/)

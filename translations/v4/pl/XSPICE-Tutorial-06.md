---
layout: default
title: 6. Mixed-signal filtering and unknown states
---
# 6. Filtrowanie mieszanych sygnałów i stany nieokreślone
{: #mixed-signal-filtering-and-unknown-states}

[Poprzedni](/v4/XSPICE-Tutorial-05/) · [Zawartość kursu](/v4/Simulation-Tutorials/)

Przykłady z tego rozdziału są dołączone do TinyCAD. Wybierz **Open Example → XSPICE and digital tutorial**, zaznacz przykład o podanej nazwie, a następnie wybierz **Open Drawing**. Nie trzeba niczego pobierać.

Otwórz **logic-filter**. Ciąg impulsów 0–5 V o częstotliwości 10 kHz
przechodzi przez bufor XSPICE i mostek DAC, a następnie steruje fizycznym filtrem dolnoprzepustowym SPICE 1 kΩ/1 µF. Poziom wysoki trwa 25 µs w okresie 100 µs, więc nominalny współczynnik wypełnienia wynosi około 25%. Niezerowe czasy narastania i opadania na wejściu sprawiają, że dokładny współczynnik wypełnienia wyznaczony progami jest nieco inny.

![Obwód mieszanego filtrowania sygnałów cyfrowych i analogowych](/v4/images/simulation-tutorials/xspice/logic-filter-circuit.png)
![Obliczony przebieg PWM i sygnał po filtracji](/v4/images/simulation-tutorials/xspice/logic-filter-results.png)

Uruchom analizę stanów nieustalonych trwającą 5 ms. Narysuj przebiegi A, Y i FILTERED. Tor cyfrowy zachowuje funkcję impulsową; sieć RC uśrednia sygnał, pozostawiając pewne tętnienia.
Średnia długookresowa zbliża się do `5 V × 0.25 ≈ 1.25 V`. Ponieważ τ = 1 ms, rozruch trwa kilka milisekund.

## Rzetelny pomiar dla skończonego czasu akwizycji
{: #measure-the-finite-acquisition-honestly}

W przedziale 4–5 ms średnia sygnału po filtracji wynosi około **1.242 V**, a tętnienia międzyszczytowe około **0.108 V** (około 1.187–1.295 V). Sygnał nie osiągnął jeszcze całkiem idealnej średniej długookresowej. Wydłuż czas trwania do 10 ms i porównaj wyniki z ostatniego przedziału 1 ms. Większa stała czasowa filtru zmniejsza tętnienia, ale wydłuża czas ustalania, podobnie jak w analogowych lekcjach o obwodach RC.

To przydatny model do zrozumienia konwersji PWM na napięcie. Nie jest to kompletny model wyjścia mikrokontrolera: mostek DAC ma wyidealizowaną zdolność sterowania wyjściem i nie uwzględnia jawnie granicy prądu zasilania. Gdy istotny jest prąd obciążenia i straty stopnia wyjściowego, dodaj odpowiednią rezystancję sterownika lub model urządzenia.

## Poznaj nieokreślony poziom logiczny
{: #explore-an-undefined-logic-level}

Otwórz **logic-unknown**. Sygnał wejściowy PWL ma kolejno poziomy 0 V, 2 V i 5 V. Uruchom symulację na 3 µs i sprawdź środkowy poziom.

![Obliczona analogowa reprezentacja nieokreślonego stanu cyfrowego](/v4/images/simulation-tutorials/xspice/logic-unknown-results.png)

Progi niski i wysoki mostka ADC wynoszą odpowiednio 1 V i 3 V. Poziom 2 V znajduje się między nimi, więc wejście sterowane zdarzeniami ma stan nieokreślony. Stan nieokreślony propaguje się przez bufor. Mostek DAC odwzorowuje go na **2.5 V**, ponieważ jego parametr `out_undef` jawnie określa ten poziom wyświetlania.

Nie należy interpretować poziomu 2.5 V jako przewidywania, że fizyczna bramka będzie utrzymywać napięcie pośrodku zakresu zasilania. Jest to kodowanie wybrane po to, by stan nieokreślony był widoczny na wykresie analogowym. Model nie odtwarza również drgań progowych wywołanych szumem ani zjawisk fizycznych związanych z metastabilnością. Rzeczywisty odbiornik wejściowy może wymagać histerezy, określonego zestawu progów oraz bardziej szczegółowego modelu elektrycznego.

## Lista kontrolna dla układu mieszanych sygnałów
{: #a-mixed-signal-checklist}

Zanim zaufasz wynikom eksperymentu, ustal, które połączenia przenoszą napięcia i prądy, a które — zdarzenia. Wskaż wszystkie konwersje między domenami. Zapisz progi, odwzorowanie stanów nieokreślonych, opóźnienia propagacji, czasy zboczy wyjściowych i warunki początkowe. Sprawdź zarówno ustaloną funkcję, jak i zachowanie podczas przejść. Ustaw czas akwizycji tak, by obejmował wymagane cykle lub przedział ustalania potrzebny do pomiaru.

To samo podejście można zastosować do komparatora sterującego logiką cyfrową, dzielnika częstotliwości sterującego przełącznikiem lub przebiegu logicznego sterującego filtrem analogowym.
Odnośniki do bardziej złożonych zastosowań XSPICE, w tym pętli synchronizacji fazowej i przykładów delta-sigma, znajdują się w [oficjalnym poradniku HOWTO XSPICE](https://ngspice.sourceforge.io/xspicehowto.html).
Przed złożeniem całego układu zacznij od osobnej weryfikacji każdej domeny i każdego interfejsu.

Wykorzystano już bramki funkcjonalne, hazardy, układy pamiętające, resetowanie, zliczanie oraz ścieżkę mieszaną analogowo-cyfrową. Aby poznać moc elektryczną, nieliniowe zachowanie wzmacniaczy i charakterystyki częstotliwościowe, wróć do [kursu SPICE](/v4/SPICE-Tutorial-01/).

## Pobieranie układów z lekcji
{: #download-the-lesson-circuits}

Te same przykłady są już dostępne w **Open Example**. Aby uzyskać niezależną kopię, pobierz rysunek `.dzn` i w TinyCAD wybierz **File → Open**. Towarzyszący mu plik `.cir` zawiera tekst SPICE do wglądu lub użycia w zgodnym symulatorze zewnętrznym; nie jest rysunkiem TinyCAD. Do uruchamiania nowych symulacji obwodów XSPICE wymagana jest wersja Desktop.

| Przykład | Rysunek | Lista połączeń |
| --- | --- | --- |
| logic-filter | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-filter.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/xspice/logic-filter.cir) |
| logic-unknown | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-unknown.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/xspice/logic-unknown.cir) |

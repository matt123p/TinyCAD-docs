---
layout: default
title: 3. Propagation delay and logic hazards
---
# 3. Opóźnienie propagacji i hazardy logiczne
{: #propagation-delay-and-logic-hazards}

[Poprzedni](/v4/XSPICE-Tutorial-02/) · [Spis treści](/v4/Simulation-Tutorials/) · [Następny](/v4/XSPICE-Tutorial-04/)

Przykłady z tego rozdziału są dołączone do TinyCAD. Wybierz **Otwórz przykład (Open Example) → XSPICE and digital tutorial**, wybierz przykład o podanej nazwie, a następnie wybierz **Otwórz rysunek (Open Drawing)**. Nie trzeba niczego pobierać.

Otwórz **logic-hazard**. Wewnątrz X1 jeden sygnał A trafia bezpośrednio do bramki AND. Druga kopia przechodzi przez inwerter, zanim dotrze do drugiego wejścia bramki AND. Wyrażenie boolowskie to `A AND NOT A`, które po ustaleniu się wszystkich stanów zawsze ma wartość zero. Mimo to w stanie przejściowym może pojawić się impuls.

![Obliczone impulsy hazardowe](/v4/images/simulation-tutorials/xspice/logic-hazard-results.png)

Opóźnienie inwertera wynosi 100 ns, a bramki AND — 10 ns. Przy narastającym zboczu sygnału wejściowego sygnał w ścieżce bezpośredniej przyjmuje stan wysoki, podczas gdy sygnał odwrócony pozostaje w stanie wysokim do chwili zareagowania inwertera. Przez krótki czas oba wejścia bramki AND są w stanie wysokim, więc na wyjściu pojawia się dodatni impuls. W tym celowo uproszczonym modelu ma on szerokość około 100 ns. Przy przeciwnym zboczu wejściowym obie ścieżki przechodzą przez okres, w którym oba wejścia bramki AND są w stanie niskim, dlatego taki sam dodatni impuls nie powstaje.

## Mierz czas zamiast szacować go na podstawie pikseli
{: #measure-rather-than-infer-timing-from-pixels}

Uruchom zapisany przebieg przejściowy o czasie trwania 3 µs i maksymalnym kroku 2 ns. Powiększ widok narastającego zbocza w pobliżu 0,5 µs. Użyj progu 2,5 V, aby zmierzyć przejście sygnału wejściowego przez próg, przejście sygnału wyjściowego przez próg oraz szerokość impulsu wyjściowego. Pomiar **Opóźnienie (Delay)** w TinyCAD oblicza różnicę między pierwszym narastającym przejściem sygnału wyjściowego a pierwszym narastającym przejściem sygnału odniesienia w wybranym oknie. Pomiar **Szerokość impulsu (Pulse width)** wymaga, aby w tym oknie znajdował się kompletny impuls.

Całkowite opóźnienie od analogowego wejścia do analogowego wyjścia obejmuje przejście przez próg, czas propagacji mostka ADC, opóźnienie bramki i czas przejścia DAC. Nie jest ono równe parametrowi `rise_delay` pojedynczej bramki. Przy porównywaniu pomiarów używaj takich samych progów i podawaj zastosowany przedział.

## Rozróżniaj trzy różne wielkości czasowe
{: #separate-three-different-time-quantities}

| Wielkość | Znaczenie |
| --- | --- |
| Opóźnienie propagacji | Czas między zdarzeniem wyzwalającym na wejściu a odpowiadającym mu zdarzeniem na wyjściu |
| Czas narastania/opadania | Czas przejścia sygnału analogowego między określonymi poziomami |
| Okres | Czas między powtórzeniami przebiegu |

Przejście sterowane zdarzeniami w idealnym modelu może być natychmiastowe w dziedzinie cyfrowej, podczas gdy mostek DAC wytwarza skończone nachylenie sygnału analogowego. Zmniejszenie kroku czasowego wykresu nie skraca skonfigurowanego opóźnienia propagacji bramki.

W kopii modelu X1 zwiększ opóźnienie inwertera do 200 ns i uruchom symulację ponownie. Szerokość impulsu powinna odpowiednio wzrosnąć. Następnie znacznie zwiększ maksymalny krok i porównaj szczegółowość wykresu. Solver może nadal dodawać punkty związane ze zdarzeniami, ale ustawienie grubego kroku nie jest wiarygodną metodą pomiaru krótkich zboczy analogowych. Przywróć krok 2 ns i sprawdź, czy zmierzona szerokość jest stabilna.

To demonstracja hazardu, a nie zalecany fizyczny generator impulsów. Rzeczywiste opóźnienia logiczne różnią się w zależności od procesu, napięcia, temperatury i obciążenia. Impuls, który pojawia się niezawodnie w symulacji ze stałym opóźnieniem, może zniknąć lub zmienić szerokość w sprzęcie. Użyj takiego testu, aby wykryć wrażliwość na warunki czasowe, a następnie wybierz projekt z jawnymi wymaganiami czasowymi i odpowiednimi modelami.

## Pobierz układy z lekcji
{: #download-the-lesson-circuits}

Te same przykłady są już dostępne w menu **Otwórz przykład (Open Example)**. Aby uzyskać niezależną kopię, pobierz rysunek `.dzn` i użyj w TinyCAD polecenia **Plik → Otwórz (File → Open)**. Towarzyszący mu plik `.cir` to tekst SPICE do wglądu lub użycia w zgodnym z nim zewnętrznym symulatorze, a nie rysunek TinyCAD. Do uruchamiania nowych symulacji układów XSPICE wymagany jest Desktop.

| Przykład | Rysunek | Lista połączeń |
| --- | --- | --- |
| logic-hazard | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-hazard.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/xspice/logic-hazard.cir) |

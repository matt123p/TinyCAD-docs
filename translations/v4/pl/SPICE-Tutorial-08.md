---
layout: default
title: 8. Measuring amplifier gain and bandwidth
---
# 8. Pomiar wzmocnienia i pasma wzmacniacza
{: #measuring-amplifier-gain-and-bandwidth}

[Poprzedni](/v4/SPICE-Tutorial-07/) · [Spis treści](/v4/Simulation-Tutorials/) · [Następny](/v4/SPICE-Tutorial-09/)

Przykłady z tego rozdziału są dołączone do TinyCAD. Wybierz **Otwórz przykład (Open Example) → Samouczek SPICE**, wskaż przykład o podanej nazwie, a następnie wybierz **Otwórz rysunek (Open Drawing)**. Nie trzeba niczego pobierać.

Otwórz **amp-ac**. To przebudowany wzmacniacz z amplitudą AC
równą 1 na VIN oraz przemiataną częstotliwością AC od 1 Hz do 100 MHz, z 60 punktami na dekadę.
Szeroki zakres górnych częstotliwości uwidacznia spadek charakterystyki ogólnego modelu tranzystora;
nie dowodzi, że oryginalny układ sprzętowy zachowuje się dokładnie w zakresie RF.

Wybierz **Wzmocnienie napięciowe (Voltage gain)** — zapisaną krzywą pochodną OUT/IN. Wyświetl moduł w dB
i fazę. W notatkach rozróżniaj napięcia w węzłach i bezwymiarowe wzmocnienie.

![Obliczone wzmocnienie i faza wzmacniacza](/v4/Images/simulation-tutorials/spice/amp-ac-results.png)

## Najpierw odczytaj wynik, potem go objaśniaj
{: #read-the-result-before-explaining-it}

Dla RL = 8 Ω i elektrycznego podziału R6 ustawionego na 0.5 wzmocnienie odniesienia przy 1 kHz wynosi
około **0.892 V/V**, czyli **−0.995 dB**, a faza jest w przybliżeniu odwrócona.
Próbkowana wartość szczytowa modułu wynosi również około 0.892. Częstotliwości graniczne połowy mocy
względem tej wartości szczytowej leżą w pobliżu **24 Hz** i **2.9 MHz**; zaokrąglone wartości wynikają
z próbkowania przemiatania i użytego modelu ogólnego.

Nie są to częstotliwości przecięcia poziomu wzmocnienia równego jedności. Pasmo −3 dB mierzy się względem
wzmocnienia w paśmie przepustowym lub wzmocnienia szczytowego wzmacniacza, niekoniecznie względem 1 V/V. W
pomiarze pasma z użyciem nazwanej krzywej w TinyCAD wybierz OUT i IN oraz ustaw wzmocnienie odniesienia
na `peak` podczas badania tej charakterystyki przypominającej pasmowoprzepustową. Pomiar pasma
wymaga, aby obie częstotliwości graniczne mieściły się w zakresie objętym analizą.

## Dlaczego całkowite wzmocnienie napięciowe jest mniejsze od jedności
{: #why-the-overall-voltage-gain-is-below-one}

VIN jest mierzone przed potencjometrem głośności. Napięcie na suwaku jest dodatkowo zmniejszane
przez skończoną impedancję wejściową wzmacniacza. Q1 zapewnia następnie odwracające
wzmocnienie napięciowe. Q2 steruje bardzo dużym obciążeniem 8 Ω przez C2, a jego skończona impedancja
wyjściowa powoduje dodatkowe tłumienie. Całkowity stosunek uwzględnia wszystkie stopnie.

Porównaj osobne stosunki pochodne BASE/IN, COLLECTOR/BASE i OUT/COLLECTOR.
Odpowiadają na różne pytania. Stopień może zapewniać wzmocnienie napięciowe, mimo że
cała droga od wejścia do obciążenia ma wzmocnienie mniejsze od jedności. Wtórnik emiterowy może
nadal zapewniać użyteczne wzmocnienie prądowe, nawet gdy jego wzmocnienie napięciowe jest mniejsze od jedności.

## Znajdź przyczyny ograniczeń przy niskich i wysokich częstotliwościach
{: #find-the-causes-of-the-low--and-high-frequency-limits}

C1 i C2 to szeregowe kondensatory sprzęgające. Ich reaktancja rośnie przy niskich
częstotliwościach, więc tłumią sygnał. Rezystancja efektywna dla C2 obejmuje
zarówno obciążenie, jak i impedancję wyjściową stopnia; samo użycie `1/(2π × 8 Ω × C2)`
nie opisuje w pełni obciążonego układu. Przy wysokich częstotliwościach pojemności tranzystorów
i czas przejścia w modelu ograniczają pasmo i zmieniają fazę.

Wypróbuj poniższe kontrolowane zmiany, po każdej przywracając ustawienie początkowe:

1. Zmień RL z 8 Ω na 80 Ω. Porównaj wzmocnienie w paśmie przepustowym i dolną częstotliwość graniczną.
2. Podwój C2. Sprawdź, czy dolna częstotliwość graniczna przesuwa się zgodnie z oczekiwaniami, jeśli
   dominuje wpływ C2; znaczenie mogą mieć również C1 i obciążenie.
3. Zmień elektryczny podział R6. Zapisz osobno wzmocnienie od IN i wzmocnienie od BASE,
   aby nie pomylić tłumienia przez regulację głośności ze wzmocnieniem stopnia tranzystorowego.
4. Zwiększ liczbę punktów na dekadę w pobliżu częstotliwości granicznej i sprawdź, czy jej podana wartość
   ustabilizowała się, zanim podasz więcej cyfr.

Analiza AC przewiduje odpowiedź na dostatecznie małe zaburzenie wokół punktu pracy.
Nie ogranicza amplitudy wyjściowej do dostępnego zakresu napięcia zasilania.
W następnym rozdziale użyjemy wejściowego sygnału przejściowego o skończonej amplitudzie, aby ustalić,
w którym miejscu przewidywanie małosygnałowe przestaje opisywać rzeczywisty przebieg.

## Pobierz układy z samouczka
{: #download-the-lesson-circuits}

Te same przykłady są już dostępne w **Otwórz przykład (Open Example)**. Aby uzyskać niezależną kopię, pobierz rysunek `.dzn` i użyj w TinyCAD polecenia **Plik (File) → Otwórz (Open)**. Towarzyszący plik `.cir` to tekst SPICE do wglądu lub użycia w zgodnym z nim zewnętrznym symulatorze, a nie rysunek TinyCAD. Układy XSPICE wymagają wersji Desktop do uruchomienia od początku.

| Przykład | Rysunek | Lista połączeń |
| --- | --- | --- |
| amp-ac | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/amp-ac.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/amp-ac.cir) |

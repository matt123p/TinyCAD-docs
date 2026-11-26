---
layout: default
title: "5. AC analysis: gain, phase and an RC filter"
---
# 5. Analiza AC: wzmocnienie, faza i filtr RC
{: #ac-analysis-gain-phase-and-an-rc-filter}

[Poprzedni](/v4/SPICE-Tutorial-04/) · [Spis treści](/v4/Simulation-Tutorials/) · [Następny](/v4/SPICE-Tutorial-06/)

Przykłady z tego rozdziału są dołączone do TinyCAD. Wybierz **Otwórz przykład (Open Example) → Samouczek SPICE**, zaznacz przykład o podanej nazwie, a następnie wybierz **Otwórz rysunek (Open Drawing)**. Nie trzeba niczego pobierać.

Otwórz **rc-ac**. Układ wykorzystuje tę samą sieć 1 kΩ/1 µF co lekcja
ładowania, ale odpowiada na inne pytanie: jaka część małego sygnału
sinusoidalnego dociera do OUT przy każdej częstotliwości?

Źródło ma amplitudę AC równą 1 V. Zapisane przemiatanie AC obejmuje zakres od 1 Hz do 100 kHz,
przy 100 punktach na dekadę. Uruchom analizę, wybierz wyprowadzony przebieg **OUT / IN** i
wyświetl moduł, wartość w dB oraz fazę. Użyj logarytmicznej osi częstotliwości.


## Wideo: odpowiedź AC i częstotliwość graniczna
{: #video-ac-response-and-cutoff}

Sprawdzanie konfiguracji AC, odczytywanie częstotliwości granicznej oraz przełączanie między modułem, decybelami i fazą.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/ac-response.mp4" poster="/v4/videos/simulation-tutorials/spice/ac-response.jpg" caption="Odpowiedź AC i częstotliwość graniczna." %}

[Obejrzyj lub pobierz wideo](/v4/videos/simulation-tutorials/spice/ac-response.mp4).

### Układ i wyniki odniesienia
{: #circuit-and-reference-results}

![Obliczona charakterystyka modułu i fazy](/v4/Images/simulation-tutorials/spice/rc-ac-results.png)

## Interpretacja wyniku zespolonego
{: #interpret-the-complex-result}

Analiza AC linearyzuje układ w jego punkcie pracy DC i oblicza
amplitudy zespolone. Nie jest to symulacja stanów przejściowych, w której
generator sinusoidalny stopniowo zmienia częstotliwość. Dla tego układu

`H(jω) = VOUT / VIN = 1 / (1 + jωRC)`.

Moduł określa stosunek amplitud, a faza — względne przesunięcie w czasie
w obrębie cyklu. W tym przypadku sygnał wyjściowy jest opóźniony względem wejściowego. Częstotliwość graniczna wynosi
`fc = 1 / (2πRC) = 159.155 Hz`. Przy tej częstotliwości moduł wynosi `1/√2 = 0.7071`,
a faza −45°. Wzmocnienie napięciowe w decybelach wynosi `20 log10(|H|)`, co daje
−3.0103 dB przy częstotliwości granicznej.

| Częstotliwość | Przybliżone wzmocnienie | Przybliżona faza |
| --- | --- | --- |
| 10 Hz | 0.9980, −0.017 dB | −3.60° |
| 159.155 Hz | 0.7071, −3.01 dB | −45° |
| 1 kHz | 0.1572, −16.07 dB | −80.96° |

Zapisany pomiar **Cutoff** wykorzystuje OUT względem IN oraz wzmocnienie odniesienia
równe 1. Powinien zwrócić wartość około 159.15 Hz. Interpolacja próbek może sprawić,
że ostatnie cyfry będą się różnić od wyniku równania.

## Unikaj trzech częstych błędów
{: #avoid-three-common-mistakes}

Po pierwsze, wykreślenie samej części rzeczywistej nie oznacza wykreślenia amplitudy. Dla
wyniku zespolonego użyj modułu lub wartości w dB. Po drugie, wzmocnienie −3 dB nie oznacza stosunku napięć
równego −3: decybele wyrażają dodatni moduł w skali logarytmicznej. Po trzecie, znak
minus w rzeczywistym wzmocnieniu odwracającym dotyczy fazy, a nie ujemnego
modułu.

Zastosowanie AC 1 sprawia, że w tym prostym przypadku napięcie wyjściowe jest liczbowo równe wzmocnieniu.
Mimo to wykreślanie OUT/IN jest bardziej uniwersalne: nadal przedstawia wzmocnienie,
gdy zmieni się amplituda wejściowa. Wynik AC nieliniowego wzmacniacza pozostaje wynikiem dla małego sygnału,
nawet jeśli amplituda AC jest ustawiona na dużą wartość. Nie przewiduje
przesterowania ani fizycznej mocy wyjściowej.

## Porównywanie doboru elementów
{: #compare-component-choices}

W **Dostrajaniu / przemiataniach (Tune / sweep)** dostępne jest przemiatanie listowe dla R1, obejmujące wartości 1 kΩ,
2.2 kΩ i 4.7 kΩ. Uruchom przemiatanie i porównaj krzywe oraz tabelę częstotliwości granicznych.
Oczekiwane wartości to 159.15, 72.34 i 33.86 Hz. Tymczasowe dostrajanie nie zmienia
zapisanego rezystora, dopóki nie zostanie użyta opcja **Zastosuj (Apply)**.

Filtr RC może tłumić tętnienia przełączeniowe przed przetwornikiem ADC albo ograniczać
szum czujnika o wysokiej częstotliwości. Spowalnia jednak również pożądany sygnał. Porównaj charakterystykę
częstotliwościową z tego rozdziału z dłuższym czasem ładowania spowodowanym zwiększeniem R1 w
poprzednim rozdziale: to dwa spojrzenia na ten sam fizyczny kompromis.

Odniesienie: [przykład analizy AC w samouczku dla początkujących ngspice](https://ngspice.sourceforge.io/ngspice-tutorial.html)
również rozróżnia pobudzenie AC od przebiegu źródła w analizie stanów przejściowych.

## Pobieranie układów z lekcji
{: #download-the-lesson-circuits}

Te same przykłady są już dostępne w **Otwórz przykład (Open Example)**. Aby uzyskać niezależną kopię, pobierz rysunek `.dzn` i wybierz w TinyCAD **Plik (File) → Otwórz (Open)**. Towarzyszący mu plik `.cir` zawiera tekst SPICE do wglądu lub użycia w zgodnym symulatorze zewnętrznym, a nie rysunek TinyCAD. Układy XSPICE wymagają wersji Desktop do uruchamiania nowych symulacji.

| Przykład | Rysunek | Lista połączeń |
| --- | --- | --- |
| rc-ac | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/rc-ac.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/rc-ac.cir) |

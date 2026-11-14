---
layout: default
title: 9. Amplifier waveform, clipping and power usage
---
# 9. Przebieg wzmacniacza, obcinanie i pobór mocy
{: #amplifier-waveform-clipping-and-power-usage}

[Poprzedni](/v4/SPICE-Tutorial-08/) · [Spis treści](/v4/Simulation-Tutorials/) · [Następny](/v4/SPICE-Tutorial-10/)

Przykłady z tego rozdziału są dołączone do TinyCAD. Wybierz **Otwórz przykład (Open Example) → Samouczek SPICE (SPICE tutorial)**, zaznacz przykład o podanej nazwie, a następnie wybierz **Otwórz rysunek (Open Drawing)**. Nie trzeba niczego pobierać.

Otwórz **amp-small-signal**. VIN dostarcza
sinusoidę o amplitudzie szczytowej 10 mV i częstotliwości 1 kHz. Analiza przejściowa trwa 12 ms, a maksymalny krok wynosi 2 µs.
Porównaj IN i OUT, a następnie zmierz ostatnie cztery okresy, od 8 ms do 12 ms.

![Zmierzony przebieg wzmacniacza małosygnałowego](/v4/images/simulation-tutorials/spice/amp-small-signal-results.png)

Wynik analizy AC przewiduje na OUT amplitudę szczytową około 8,92 mV, z odwróceniem fazy względem wejścia.
Analiza przejściowa daje w oknie pomiarowym wartości od około −8,87 do +8,99 mV,
przy wartości skutecznej **6,304 mV RMS**. Niewielka różnica między dodatnią i ujemną wartością szczytową
wynika z nieliniowości modelu i pozostałych efektów przejściowych.

## Oblicz moc obciążenia i pobór mocy zasilania
{: #calculate-load-power-and-supply-consumption}

Dla czysto rezystancyjnego RL moc chwilowa wynosi `pL(t) = vOUT(t)² / 8`.
Dlatego średnia moc obciążenia jest równa `VOUT,RMS² / 8`, z uwzględnieniem składowej stałej
w wybranym przedziale. Przy małym sygnale wejściowym wynosi ona w przybliżeniu **4,97 µW**.

Moc dostarczana przez zasilanie wynosi `−12 × mean(i(VCC))`, czyli w przybliżeniu **264,61 mW**.
Nawet gdy sygnał audio jest bardzo mały, większość mocy jest zużywana w spolaryzowanym obwodzie.
Przy tym sygnale wejściowym stosunek mocy obciążenia do mocy zasilania wynosi zaledwie około **0,00188%**.
Jest to sprawność elektryczna dla przyjętej granicy i okna pomiarowego, a nie
sprawność akustyczna ani ogólna ocena obwodu.

W TinyCAD dodaj pomiary mocy elementów dla VCC i RL, a następnie wybierz **Średnia (Mean)**
i ustaw From/To na 8 ms i 12 ms. Źródło dostarczające moc ma ujemną moc pobieraną;
wartość dodatnią mocy wejściowej uzyskasz, zmieniając jej znak. **Całka (Integral)** mocy daje
energię w dżulach. Nie wolno zastępować zerem zgadywanego prądu ani mocy, jeśli dany pomiar jest niedostępny dla modelu.

## Zwiększaj sygnał wejściowy, aż przestanie obowiązywać przewidywanie liniowe
{: #increase-input-until-the-linear-prediction-fails}

Otwórz **amp-clipping**. Zmieniono tylko amplitudę VIN,
do 500 mV wartości szczytowej. Liniowa ekstrapolacja przewidywałaby na OUT amplitudę szczytową około 446 mV
w obu kierunkach. Obliczony przebieg nie jest taki.

![Obliczony asymetryczny sygnał wyjściowy o dużej amplitudzie](/v4/images/simulation-tutorials/spice/amp-clipping-results.png)

W tym samym oknie 8–12 ms napięcie wyjściowe zmienia się w przybliżeniu od
**−0,162 do +0,389 V**, a jego wartość skuteczna wynosi **0,2126 V RMS**. Pobór mocy z zasilania wynosi w przybliżeniu
**315,23 mW**; całkowita moc rezystancyjnego obciążenia to **5,65 mW**, co daje około **1,79%**
sprawności elektrycznej w tym oknie. Średnia wartość wyjścia wynosi około
31 mV w tym skończonym przedziale pomiarowym. Aby obliczyć moc składowej zmiennej obciążenia, przed podniesieniem do kwadratu odejmij wartość średnią:
użyj skutecznej wartości tętnień, a nie całkowitej wartości skutecznej.

Wtórnik emiterowy może aktywnie dostarczać prąd, ale jego droga obniżania napięcia
jest ograniczona przez sieć polaryzującą. Bardzo mała rezystancja obciążenia uwidacznia tę
asymetrię. Nie określaj każdego pozornie płaskiego odcinka po prostu jako „osiągnięcia szyny zasilania”:
sprawdź EMITTER, COLLECTOR i prądy elementów, aby ustalić mechanizm.

## Zadbaj o wiarygodność pomiaru
{: #make-the-measurement-defensible}

Używaj pełnych okresów, podawaj przedział czasu i pomijaj stan rozruchowy, jeśli analizujesz
pracę ustaloną. Powtórz analizę z dłuższym czasem trwania, aby sprawdzić, czy średnia i moc w wybranym oknie się stabilizują. Zmniejsz maksymalny krok i porównaj wartości skrajne oraz RMS; próbki solvera
na ogół nie są rozmieszczone równomiernie, dlatego należy stosować obliczenia ważone czasem.
Średnia arytmetyczna wszystkich wartości próbek może być obciążona wpływem zboczy,
gdzie solver pobiera więcej próbek.

Zniekształconych przebiegów nie można przeliczać z wartości szczytowej na skuteczną za pomocą `peak/√2`.
Wzór ten dotyczy sinusoidy. Podobnie moc elektryczna tranzystora
nie pozwala automatycznie przewidzieć jego temperatury: potrzebne są dodatkowe informacje o rezystancji cieplnej, warunkach otoczenia
i modelach zależnych od temperatury.

Spróbuj zwiększyć RL do 80 Ω i porównać symetrię przebiegu, wzmocnienie napięciowe oraz
dostarczaną moc. Większe wychylenie napięcia nie musi oznaczać większej mocy,
ponieważ zmieniła się również rezystancja obciążenia.

## Pobierz obwody z lekcji
{: #download-the-lesson-circuits}

Te same przykłady są już dostępne w **Otwórz przykład (Open Example)**. Aby uzyskać niezależną kopię, pobierz rysunek `.dzn` i otwórz go w TinyCAD, wybierając **Plik → Otwórz (File → Open)**. Plik towarzyszący `.cir` zawiera tekst SPICE do wglądu lub użycia w zgodnym zewnętrznym symulatorze; nie jest rysunkiem TinyCAD. Do uruchamiania nowych analiz obwodów XSPICE wymagany jest Desktop.

| Przykład | Rysunek | Lista połączeń |
| --- | --- | --- |
| amp-small-signal | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/amp-small-signal.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/amp-small-signal.cir) |
| amp-clipping | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/amp-clipping.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/amp-clipping.cir) |

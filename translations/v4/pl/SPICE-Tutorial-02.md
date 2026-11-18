---
layout: default
title: 2. Measuring DC voltage, current and power
---
# 2. Pomiar napięcia stałego, prądu i mocy
{: #measuring-dc-voltage-current-and-power}

[Poprzedni](/v4/SPICE-Tutorial-01/) · [Spis treści](/v4/Simulation-Tutorials/) · [Następny](/v4/SPICE-Tutorial-03/)

Przykłady z tego rozdziału są dołączone do TinyCAD. Wybierz **Otwórz przykład (Open Example) → Samouczek SPICE (SPICE tutorial)**, zaznacz przykład o podanej nazwie, a następnie wybierz **Otwórz rysunek (Open Drawing)**. Pobieranie nie jest potrzebne.

Otwórz **divider**. Pozostaw nominalne źródło 5 V i dwa
rezystory 1 kΩ. Celem jest rozróżnienie napięcia w węźle, napięcia na elemencie,
prądu przez niego płynącego oraz mocy przez niego pobieranej.

## Pomiary napięcia
{: #voltage-measurements}

`out` oznacza napięcie węzła OUT względem węzła 0. Napięcie na R1 wynosi
`VIN − VOUT`, czyli również 2,5 V w tym przypadku. Ta równość jest przypadkowa: po zmianie
R2 na 2 kΩ napięcie na R1 wynosi 1,667 V, a na R2 — 3,333 V.

Do pomiaru napięcia w węźle użyj polecenia **Symulacja (Simulation) → SPICE → Wstaw sondę (Insert Probe)**. Sonda różnicowa mierzy napięcie na zacisku dodatnim względem zacisku ujemnego. Aby zmierzyć napięcie na R1, podłącz jej końcówkę dodatnią do IN, a ujemną do OUT. Zamiana końcówek miejscami odwraca wynik. Sonda różnicowa jest szczególnie przydatna, gdy żaden z zacisków nie jest uziemiony, na przykład w przypadku kondensatora sprzęgającego lub wyjścia mostka.

## Pomiary prądu
{: #current-measurements}

Aby użyć sondy prądu szeregowego, przerwij przewód i wstaw sondę w obwód. Jest ona modelowana jako źródło o napięciu zerowym: prąd przepływa przez nią bez idealnego spadku napięcia. Podłączenie jej zamiast tego równolegle do zasilania spowodowałoby jego zwarcie. Dodatni prąd sondy płynie od zacisku dodatniego do ujemnego. Prądy gałęzi źródeł, takie jak `v1#branch`, są również dostępne bezpośrednio.

W tym dzielniku prąd płynie ze źródła V1 przez R1 i R2 do masy. Prądy obu rezystorów wynoszą 2,5 mA; prąd gałęzi V1 wynosi −2,5 mA, ponieważ źródło dostarcza ten prąd ze swojego zacisku dodatniego.

## Moc i sprawdzenie bilansu energii
{: #power-and-an-energy-balance-check}

Stosuj pasywną konwencję znaków: `P = V × I`, przy czym prąd wpływa do zacisku, dla którego napięcie określono jako dodatnie. Moc dodatnia jest pobierana, a moc ujemna — dostarczana.

| Element | Obliczenie | Wynik nominalny |
| --- | --- | --- |
| R1 | `(2.5 V)² / 1 kΩ` | +6,25 mW |
| R2 | `(2.5 V)² / 1 kΩ` | +6,25 mW |
| V1 | `5 V × (−2.5 mA)` | −12,5 mW |
| Suma | Źródło plus obciążenia | 0 W |

Ten bilans jest przydatnym narzędziem diagnostycznym. Błąd o współczynnik 1000 często wskazuje na pomyłkę w przedrostku jednostki. Nieprawidłowy znak często wskazuje na odwrotną orientację sondy. Niewyjaśnione dodatkowe obciążenie może ujawnić niezamierzone połączenie lub podłączenie miernika.

Elementy sterujące **Pomiary (Measurements)** w TinyCAD pozwalają wybrać napięcie, prąd i moc elementu, jeśli obsługuje je jego model. Brak obsługiwanego wektora prądu jest zgłaszany jako wartość niedostępna; nie należy interpretować tego jako zerowego poboru.

## Przemiatanie napięcia zasilania
{: #sweep-the-supply}

Otwórz **dc-sweep**. Zapisana analiza **Przemiatanie DC (DC sweep)** używa źródła V1,
rozpoczyna od 0 V, kończy na 10 V i zwiększa wartość o 0,5 V. Uruchom analizę i wykreśl OUT.

![Obliczona charakterystyka przejściowa DC](/v4/images/simulation-tutorials/spice/dc-sweep-results.png)

Oś pozioma przedstawia wartość przemiatanego źródła, a nie czas. Oczekiwane wartości wynoszą
0 V, 2,5 V i 5 V przy napięciach zasilania odpowiednio 0 V, 5 V i 10 V. Nachylenie wynosi 0,5 V/V.
Ten test przydaje się do sprawdzania układów polaryzacji i interfejsów czujników przed
dodaniem wymuszeń zależnych od czasu.

## Sprawdź wpływ obciążenia
{: #investigate-loading}

Dodaj kolejny rezystor 1 kΩ między OUT a masę. R2 i nowe obciążenie są połączone równolegle,
więc ich rezystancja zastępcza wynosi 500 Ω. Oczekiwane napięcie wyjściowe wynosi teraz
`5 × 500 / (1000 + 500) = 1.667 V`. Dzielnik napięcia nie jest idealnym źródłem napięcia:
napięcie wyjściowe zmienia się, gdy źródło dostarcza prąd.

Przygotowując listę kontrolną pomiarów, zanotuj nazwy węzłów, kierunek odniesienia, jednostki,
ustawienia źródła i rodzaj analizy. Dzięki tym informacjom wynik można odtworzyć,
a inny czytelnik może rozróżnić zmianę obwodu od zmiany wykresu.

## Pobieranie układów z lekcji
{: #download-the-lesson-circuits}

Te same przykłady są już dostępne w **Otwórz przykład (Open Example)**. Aby uzyskać niezależną kopię, pobierz rysunek `.dzn` i użyj w TinyCAD polecenia **Plik (File) → Otwórz (Open)**. Plik towarzyszący `.cir` zawiera tekst SPICE do wglądu lub użycia w zgodnym zewnętrznym symulatorze; nie jest rysunkiem TinyCAD. Do świeżych symulacji obwodów XSPICE wymagana jest wersja Desktop.

| Przykład | Rysunek | Lista połączeń |
| --- | --- | --- |
| divider | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/divider.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/divider.cir) |

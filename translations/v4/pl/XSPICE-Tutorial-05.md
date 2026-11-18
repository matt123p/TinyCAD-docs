---
layout: default
title: 5. Counters and divided clocks
---
# 5. Liczniki i zegary dzielone
{: #counters-and-divided-clocks}

[Poprzedni](/v4/XSPICE-Tutorial-04/) · [Spis treści](/v4/Simulation-Tutorials/) · [Następny](/v4/XSPICE-Tutorial-06/)

Przykłady z tego rozdziału są dołączone do TinyCAD. Wybierz **Open Example → XSPICE and digital tutorial**, zaznacz przykład o podanej nazwie, a następnie wybierz **Open Drawing**. Nie trzeba niczego pobierać.

Otwórz **logic-counter**. X1 zawiera cztery
przerzutniki D. Każdy z nich ma swoje zanegowane wyjście podłączone z powrotem do wejścia D, dzięki czemu przełącza stan po podaniu
sygnału zegarowego. Pierwszy stopień otrzymuje sygnał CLK, a kolejne stopnie są taktowane z zanegowanego wyjścia poprzedniego stopnia. Tworzy to asynchroniczny licznik binarny w górę.

![Układ testowy licznika czterobitowego](/v4/images/simulation-tutorials/xspice/logic-counter-circuit.png)
![Obliczone przebiegi zegarów dzielonych](/v4/images/simulation-tutorials/xspice/logic-counter-results.png)

Okres sygnału wejściowego wynosi 1 µs. Reset zeruje stopnie w pobliżu początku symulacji, a pierwsze zbocze zliczające pojawia się w pobliżu 0,5 µs. Uruchom zapisaną analizę przejściową trwającą 18 µs. Odczytuj każdą wartość po ustabilizowaniu się stanów przejściowych, na przykład przy 0,8 µs, 1,8 µs, 2,8 µs i tak dalej.

Oczekiwana sekwencja dziesiętna:

```text
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0
```

Dla kolejności bitów Q3 Q2 Q1 Q0 pierwsze cztery wartości to 0001, 0010, 0011 i 0100.
Przelicz za pomocą `count = Q0 + 2Q1 + 4Q2 + 8Q3`, przyjmując na tym wykresie, że ustalone napięcie powyżej
2,5 V oznacza logiczną jedynkę.

## Podział częstotliwości
{: #frequency-division}

Q0 zmienia stan raz na każdy cykl wejściowy, więc jego pełny okres obejmuje dwa cykle wejściowe.
Q1 dzieli częstotliwość przez cztery, Q2 przez osiem, a Q3 przez szesnaście.

| Wyjście | Okres | Częstotliwość |
| --- | --- | --- |
| Q0 | 2 µs | 500 kHz |
| Q1 | 4 µs | 250 kHz |
| Q2 | 8 µs | 125 kHz |
| Q3 | 16 µs | 62.5 kHz |

Dostarczona akwizycja o długości 18 µs pokazuje przepełnienie, ale może nie zawierać dwóch pełnych zboczy narastających Q3 po resecie. Zwiększ czas trwania do 35 µs, zanim zażądasz pomiaru częstotliwości na podstawie pierwszego pełnego cyklu dla tego wyjścia. Brak dostępnej wartości częstotliwości jest uzasadniony, gdy akwizycja nie dostarcza wystarczających danych.

## Dlaczego istotne są zmiany kaskadowe
{: #why-ripple-matters}

Bity nie zmieniają się jednocześnie. Każdy stopień reaguje po przejściu stanu na wyjściu poprzedniego stopnia. Powiększ fragment przejścia od siedmiu do ośmiu:
podczas propagacji przeniesienia pojawiają się tymczasowe kombinacje bitów.
Dekoder kombinacyjny podłączony do tych bitów może więc generować zakłócenia.

Nie jest to ta sama architektura co w liczniku synchronicznym, w którym wszystkie stopnie mają wspólny zegar. Prawidłowa, ustalona sekwencja zliczania nie oznacza, że licznik asynchroniczny nadaje się do każdego zastosowania wrażliwego na czas. Użyj tego przykładu, aby odróżnić zliczanie funkcjonalne od czasu przejść.

Spróbuj podwoić okres zegara. Sekwencja zliczania pozostanie taka sama, ale częstotliwości wszystkich wyjść zmniejszą się o połowę; skonfigurowane opóźnienia propagacji pozostaną stałe. Następnie przesuń reset na środek przebiegu i sprawdź, czy wszystkie bity zostaną wyzerowane przed wznowieniem normalnego zliczania. Zapisz czas resetu i przed próbkowaniem stanu odczekaj wystarczająco długo, aby mostki resetu i DAC ustabilizowały się.

W teście projektu określ zarówno wymaganie funkcjonalne (prawidłowa ustalona wartość zliczenia),
jak i wymaganie czasowe (maksymalne dopuszczalne opóźnienie ustalania po sygnale zegarowym).
Odpowiadają one na różne pytania i należy je sprawdzać niezależnie.

## Pobieranie układów z lekcji
{: #download-the-lesson-circuits}

Te same przykłady są już dostępne w **Open Example**. Aby uzyskać niezależną kopię, pobierz rysunek `.dzn` i użyj w TinyCAD polecenia **File → Open**. Towarzyszący mu plik `.cir` zawiera tekst SPICE do wglądu lub użycia w zgodnym z nim zewnętrznym symulatorze, a nie rysunek TinyCAD. Do uruchamiania nowych symulacji układów XSPICE wymagany jest Desktop.

| Przykład | Rysunek | Lista węzłów |
| --- | --- | --- |
| logic-counter | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-counter.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/xspice/logic-counter.cir) |

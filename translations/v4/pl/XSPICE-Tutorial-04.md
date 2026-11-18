---
layout: default
title: 4. D flip-flops, clocks and reset
---
# 4. Przerzutniki D, zegary i reset
{: #d-flip-flops-clocks-and-reset}

[Poprzedni](/v4/XSPICE-Tutorial-03/) · [Spis treści](/v4/Simulation-Tutorials/) · [Następny](/v4/XSPICE-Tutorial-05/)

Przykłady z tego rozdziału są dołączone do TinyCAD. Wybierz **Otwórz przykład (Open Example) → XSPICE and digital tutorial**, zaznacz przykład o podanej nazwie, a następnie wybierz **Otwórz rysunek (Open Drawing)**. Nie trzeba niczego pobierać.

Otwórz **logic-dff**. Zawiera osobne analogowe
sygnały pobudzające dla D, CLK i RESET. Wewnątrz X1 mostki doprowadzają sygnały do przerzutnika D XSPICE;
Q i NQ są przekształcane z powrotem na wyjścia analogowe do wykreślenia.

![Układ testowy przerzutnika D](/v4/images/simulation-tutorials/xspice/logic-dff-circuit.png)
![Obliczone przebiegi zegara, danych, resetu i Q](/v4/images/simulation-tutorials/xspice/logic-dff-results.png)

Uruchom analizę stanów nieustalonych o czasie 8 µs. Przy każdym narastającym zboczu zegara Q przejmuje wartość D, a następnie utrzymuje
ją między zboczami. NQ jest jego dopełnieniem po ustaleniu się stanu po propagacji. Pierwsze narastające zbocze zegara występuje w pobliżu 0,5 µs. D jest już w stanie wysokim, więc Q przechodzi w stan wysoki
po opóźnieniu zegar–wyjście modelu. W tym przykładzie z wyzwalaniem zboczem narastającym opadające zbocza zegara nie powodują przejęcia nowych danych.

## Odczytaj rzeczywisty interfejs modelu
{: #read-the-actual-model-interface}

Wewnętrzna instancja ma postać:

```spice
Aff dd dc NULL dr dq dn flip
.model flip d_dff(ic=0 clk_delay=20n reset_delay=20n
+ rise_delay=5n fall_delay=5n)
```

Jej porty to wejście danych, zegar, asynchroniczne ustawianie, asynchroniczny reset, wyjście i wyjście zanegowane. `NULL` pozostawia opcjonalne wejście ustawiania nieużywane. Stan początkowy
jest jawnie ustawiony na zero. Kolejność portów jest określona przez interfejs modelu; położenie wyprowadzeń na widocznym bloku samo w sobie jej nie definiuje.

## Testowanie asynchronicznego resetu
{: #test-asynchronous-reset}

RESET przechodzi w stan wysoki w pobliżu 6 µs na około 0,5 µs. Q zostaje wyzerowane bez oczekiwania na następne
narastające zbocze zegara. Gdy reset jest aktywny, przed interpretacją działania zegara sprawdź wyjście.
Po zwolnieniu resetu kolejne zbocza zegara ponownie powodują przejmowanie danych. Ten przykład sprawdza reset niezależnie od zwykłego przebiegu D.

Użyj krótkiego okna pomiarowego wokół pierwszego zbocza przejmującego dane, aby zmierzyć
opóźnienie zegar–Q przy 2,5 V. Zmierzone opóźnienie analogowe obejmuje mostki,
a nie tylko `clk_delay`. Użyj innego okna w pobliżu resetu, aby zbadać asynchroniczne
zerowanie. Nie próbuj podsumowywać kilku różnych zdarzeń wyzwalających jednym pomiarem pierwszego zbocza.

## Stan początkowy oraz założenia dotyczące setup/hold
{: #initial-state-and-setuphold-assumptions}

Ustawienie `ic=0` zapewnia powtarzalność tego samouczka. W projekcie, w którym rzeczywisty
stan po włączeniu zasilania nie jest określony, założenie dogodnego stanu początkowego równego zero może ukryć brak wymaganego resetu. Spróbuj zastosować jawny impuls resetu przy uruchamianiu i porównaj go z
poleganiem na ustawieniu warunku początkowego modelu.

Następnie przesuń zmianę danych w pobliże zbocza zegara. Zaobserwuj kolejność zdarzeń w modelu funkcjonalnym, ale nie traktuj poprawnego wyniku cyfrowego jako dowodu, że rzeczywiste urządzenie spełnia czasy setup i hold. Ten prosty model funkcjonalny nie jest modelem metastabilności na poziomie tranzystorów i nie określa prawdopodobieństwa
rozwiązania metastabilności. Ograniczenia czasowe producenta oraz odpowiedni model urządzenia pozostają odrębnymi danymi wejściowymi do analizy czasowej układu elektrycznego.

Przydatny zapisany przypadek testowy zawiera przebieg danych, konwencję zbocza zegara,
polaryzację i czasy resetu, założenie dotyczące stanu początkowego, oczekiwaną sekwencję przejętych wartości
oraz próg pomiaru. Jest to bardziej informacyjne niż sam zrzut ekranu sygnału Q.

## Pobieranie układów z lekcji
{: #download-the-lesson-circuits}

Te same przykłady są już dostępne w **Otwórz przykład (Open Example)**. Aby uzyskać niezależną kopię, pobierz rysunek `.dzn` i użyj w TinyCAD polecenia **Plik → Otwórz (File → Open)**. Towarzyszący mu plik `.cir` zawiera tekst SPICE do wglądu lub użycia w zgodnym z nim zewnętrznym symulatorze, a nie rysunek TinyCAD. Do uruchamiania nowych symulacji układów XSPICE wymagana jest wersja Desktop.

| Przykład | Rysunek | Lista połączeń |
| --- | --- | --- |
| logic-dff | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-dff.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/xspice/logic-dff.cir) |

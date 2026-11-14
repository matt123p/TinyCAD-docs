---
layout: default
---
# Rozwiązywanie problemów z symulacją
{: #simulation-troubleshooting}

Przed zmianą ustawień sprawdź status akwizycji i dane diagnostyczne. Rozróżnij **nieudaną symulację**, **poprawną symulację z nieoczekiwanym zachowaniem** oraz **pomiar niedostępny dla wybranego wyniku**. Każdy z tych przypadków wymaga innych kontroli.

## Nie można uruchomić symulacji
{: #the-simulation-will-not-start}

| Objaw | Sprawdź |
| --- | --- |
| Brak masy / obwód pływający | Podłącz symbol zasilania lub etykietę o wartości **0**. Osobna etykieta GND nie staje się automatycznie węzłem 0. Sprawdź powroty źródeł i odizolowane podukłady. |
| Brak modelu komponentu | Użyj modelowanego elementu bibliotecznego albo podaj szablon i model. Rysunki elementów nie są modelami do symulacji. |
| Brak atrybutów lub nieprawidłowe przypisanie wyprowadzeń | Sprawdź właściwości SPICE komponentu oraz rzeczywistą kolejność zacisków modelu. Nadpisania instancji mogą zmieniać wartości domyślne. |
| Nie znaleziono modelu/pliku include | Dołącz tekst modelu i jego zależności do arkusza Simulation, używając zgodnych nazw logicznych plików. Lokalna ścieżka bezwzględna ani adres URL nie są pobierane automatycznie. |
| Dyrektywy analizy w komponencie | Usuń starsze dyrektywy `.op`, `.tran`, `.ac`, `.end` i tekst sterujący przebiegiem z atrybutów komponentu. Zintegrowany arkusz Simulation zarządza ustawieniami analizy. |
| Model XSPICE niedostępny w przeglądarce | Otwórz rysunek w wersji Desktop, aby wykonać nową symulację natywną. Przeglądanie zapisanych wyników w przeglądarce jest nadal możliwe. |
| Nieprawidłowe źródło lub zakres | Sprawdź pola przebiegu, rosnące czasy PWL, wartości początku/końca, kierunek przemiatania oraz dodatnie wartości częstotliwości/czasu. |

## Wynik jest nieprawidłowy lub solver nie osiąga zbieżności
{: #a-result-is-wrong-or-the-solver-does-not-converge}

**Najpierw sprawdź obwód.** Przewód wykraczający poza koniec innego przewodu lub nieużywane gniazdo mogą powodować przypadkowe połączenie. Sprawdź złącza T, rzeczywiste końcówki wyprowadzeń, etykiety sieci i ukryte źródła zasilania. Sonda prądowa lub miernik umieszczony równolegle do źródła może je zwierać. Na podstawie wygenerowanej listy połączeń ustal, co otrzymał symulator.

Sprawdź orientację modelu i kolejność wyprowadzeń: polaryzację diody, kolektor/bazę/emiter tranzystora BJT, wyprowadzenia zasilania wzmacniacza operacyjnego oraz kolejność wyprowadzeń podukładu. Używaj znaczących, unikatowych oznaczeń i potwierdź, że oznaczenie źródła w konfiguracji przemiatania/szumu/transmitancji wskazuje właściwe źródło.

Przed analizą AC sprawdź polaryzację DC za pomocą punktu pracy (Operating Point). Pętle idealnych źródeł, węzły pływające, gwałtowne idealne zmiany i nieracjonalne parametry modelu mogą utrudniać lub uniemożliwiać rozwiązanie obwodu. Dodaj uzasadnioną fizycznie rezystancję lub skończone czasy zboczy, jeśli odpowiadają rzeczywistemu eksperymentowi. Zanim zmienisz opcje numeryczne, ogranicz złożony obwód do najmniejszej części powodującej problem.

Sprawdź przyrostki liczbowe: **1M w tekście SPICE oznacza 1 mili-jednostkę, a nie jeden mega-jednostkę**; dla mega użyj `1Meg`. Osobno sprawdź temperaturę, wartość DC źródła oraz ustawienia analizy przejściowej/AC. Amplituda przejściowa źródła nie staje się automatycznie jego małosygnałową amplitudą AC.

## Przebieg wygląda na niekompletny
{: #the-waveform-looks-incomplete}

- Wydłuż czas analizy przejściowej, jeśli stan ustalony nie został osiągnięty albo wymagany okres znajduje się poza zakresem symulacji.
- Zmniejsz maksymalny krok, aby odwzorować szybkie zbocza lub wąskie impulsy. Powiększenie widoku nie odtworzy brakujących próbek.
- Sprawdź wybraną konfigurację, akwizycję, wykres wyników, widoczność legendy, jednostki i zakres osi.
- W analizie AC użyj wystarczającej liczby punktów w pobliżu wąskiego rezonansu oraz właściwego stosunku wejścia do wyjścia.
- Jeśli symulacja została zatrzymana lub zakończyła się niepowodzeniem, sprawdź dostępność rzeczywistych danych; przebieg częściowy nie oznacza zakończonego eksperymentu.

## Wykresy lub odczyty sond są nieaktualne
{: #charts-or-probe-readings-are-stale}

Zmiana połączeń, wartości, tekstu modelu lub konfiguracji wymaga ponownego **uruchomienia (Run)**. Zapisane akwizycje opisują swoje pierwotne dane wejściowe. Wybór historii nie cofa zmian na rysunku. Dołączony samouczek może otworzyć się z zachowanym wynikiem referencyjnym, zanim uruchomisz własną symulację.

Wybierz **Simulation → Show charts** albo w wersji Desktop **View → Show Charts**, jeśli panel jest ukryty. Usunięcie wykresu automatycznej sondy powoduje, że pozostaje on usunięty, dopóki nie dodasz go ponownie. Po zamknięciu okno wykresu wraca do panelu.

## Pomiar jest niedostępny
{: #a-measurement-is-unavailable}

Sprawdź przypisanie sygnału, jednostkę, okno, próg oraz jawnie określone poziomy początkowy/końcowy. Pomiar czasu wymaga kompletnych przejść przez poziomy/cykli. Pomiar ustalania się musi kończyć wewnątrz zadeklarowanego pasma końcowego. Pomiar częstotliwości granicznej wymaga żądanego punktu przecięcia i poziomu odniesienia wzmocnienia; pomiar pasma wymaga dwóch punktów przecięcia. Rezonans na granicy przemiatania nie został wyznaczony. Nie są zgadywane wektory prądu/mocy urządzenia, których brak.

Niedostępny wymóg nie oznacza zaliczenia. Eksportuj warunki i status niepowodzenia w raportach badania, a przypadki tolerancji bez zbieżności pozostaw widoczne. Jeśli badanie nie ma wymagań, które można ocenić, nie ma oszacowania uzysku.

## Zapisywanie i odtwarzanie analizy
{: #saving-and-reproducing-an-investigation}

Przechowuj razem rysunek, dołączone modele, ustawienia analizy, ustawienia źródeł, temperaturę i odpowiednie akwizycje. Jeśli zapisano plik bez wyników numerycznych lub usunięto je, aby zmniejszyć rozmiar pliku, uruchom symulację ponownie, aby odtworzyć wykresy. Zachowane migawki wartości skalarnych/raportów nie odtwarzają brakujących tablic przebiegów.

Odtwarzalny raport określa założenia modelu, silnik, okno pomiarowe i warunki. Porównaj wyniki z [oczekiwanymi wartościami z samouczka](../Simulation-Tutorials/) oraz oficjalnym [podręcznikiem ngspice](https://ngspice.sourceforge.io/docs.html) podczas diagnozowania problemu dotyczącego języka symulatora.

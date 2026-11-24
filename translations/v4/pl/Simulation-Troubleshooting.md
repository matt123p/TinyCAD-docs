---
layout: default
---
# Rozwiązywanie problemów z symulacją
{: #simulation-troubleshooting}

Przed zmianą ustawień zapoznaj się ze stanem akwizycji i diagnostycznymi danymi wyjściowymi. Rozróżnij **nieudaną symulację**, **prawidłową symulację z nieoczekiwanym zachowaniem** oraz **pomiar niedostępny dla wybranego wyniku**. Każdy z tych przypadków wymaga innych kontroli.

## Nie można uruchomić symulacji
{: #the-simulation-will-not-start}

| Objaw | Sprawdź |
| --- | --- |
| Brak masy / obwód z węzłem pływającym | Podłącz symbol zasilania lub etykietę o wartości **0**. Osobna etykieta GND nie staje się automatycznie węzłem 0. Sprawdź połączenia powrotne źródeł i odizolowane podukłady. |
| Brak modelu komponentu | Wybierz symbol i sprawdź **SPICE**. Użyj modelowanego elementu bibliotecznego albo [dołącz wbudowaną lub własną definicję](../Bundled-SPICE-Models/). |
| Żaden model nie pasuje do wyszukiwania | Wyczyść pole wyszukiwania albo spróbuj użyć aliasu elementu lub rodziny urządzeń. Symbol podstawowych elementów SPICE pokazuje tylko zweryfikowane modele. |
| Brak atrybutów lub nieprawidłowe przypisanie pinów | Sprawdź właściwości SPICE komponentu i rzeczywistą kolejność wyprowadzeń modelu. Nadpisania instancji mogą zmieniać wartości domyślne. |
| Nie znaleziono modelu/pliku include | Dołącz tekst modelu i jego zależności do arkusza Simulation, używając zgodnych nazw logicznych plików. Lokalny bezwzględny adres ścieżki ani adres URL nie są pobierane automatycznie. |
| Dyrektywy analizy w komponencie | Usuń starsze wpisy `.op`, `.tran`, `.ac`, `.end` i tekst sterujący przebiegiem z atrybutów komponentu. Zintegrowany arkusz Simulation odpowiada za ustawienia analizy. |
| Model XSPICE niedostępny w przeglądarce | Otwórz rysunek w wersji Desktop, aby przeprowadzić nową symulację natywną. Nadal można przeglądać zapisane wyniki w przeglądarce. |
| Nieprawidłowe źródło lub zakres | Sprawdź pola przebiegu, rosnące czasy PWL, wartości początku/końca, kierunek przemiatania oraz dodatnie wartości częstotliwości/czasu. |

## Wynik jest nieprawidłowy lub solver nie osiąga zbieżności
{: #a-result-is-wrong-or-the-solver-does-not-converge}

**Najpierw sprawdź obwód.** Linia poprowadzona poza koniec przewodu lub nieużywane gniazdo mogą utworzyć przypadkowe połączenie. Sprawdź węzły typu T, rzeczywiste końcówki pinów, etykiety sieci i ukryte źródła zasilania. Sonda prądu lub miernik umieszczone równolegle do źródła mogą je zewrzeć. Na podstawie wygenerowanej listy sieci sprawdź, co otrzymał symulator.

Sprawdź orientację i kolejność modelu: polaryzację diody, kolektor/bazę/emiter tranzystora BJT, piny zasilania wzmacniacza operacyjnego oraz kolejność pinów podukładu. Używaj unikatowych, opisowych oznaczeń i upewnij się, że oznaczenie źródła w konfiguracji przemiatania/szumów/charakterystyki przenoszenia wskazuje zamierzone źródło.

Sprawdź polaryzację DC za pomocą analizy punktu pracy przed badaniem AC. Pętle idealnych źródeł, węzły pływające, gwałtowne idealne przejścia i nieuzasadnione parametry modelu mogą utrudnić lub uniemożliwić rozwiązanie obwodu. Dodaj uzasadnioną fizycznie rezystancję lub skończone czasy zboczy, jeśli odpowiadają one rzeczywistemu eksperymentowi. Przed zmianą opcji numerycznych ogranicz złożony obwód do najmniejszej sekcji, która powoduje błąd.

Sprawdź przyrostki liczbowe: **1M w tekście SPICE oznacza 1 mili-jednostkę, a nie jeden mega-jednostkę**; dla mega użyj `1Meg`. Osobno sprawdź temperaturę, wartość DC źródła oraz ustawienia analizy czasowej/AC. Amplituda przejściowa źródła nie staje się automatycznie jego amplitudą małosygnałową AC.

## Przebieg wygląda na niekompletny
{: #the-waveform-looks-incomplete}

- Zwiększ czas trwania analizy czasowej, jeśli stan ustalony nie został jeszcze osiągnięty lub wymagany cykl przypada poza zakresem symulacji.
- Zmniejsz maksymalny krok, aby odwzorować szybkie zbocza lub wąskie impulsy. Powiększenie widoku nie odtworzy brakujących próbek.
- Sprawdź wybraną konfigurację, akwizycję, wykres wyników, widoczność legendy, jednostki i zakres osi.
- W analizie AC użyj odpowiedniej liczby punktów w pobliżu wąskiego rezonansu oraz właściwego stosunku wejścia do wyjścia.
- Jeśli symulacja została zatrzymana lub zakończyła się niepowodzeniem, sprawdź rzeczywistą dostępność danych; częściowy przebieg nie oznacza ukończonego eksperymentu.

## Wykresy lub odczyty sond są nieaktualne
{: #charts-or-probe-readings-are-stale}

Edycja połączeń, wartości, tekstu modelu lub konfiguracji wymaga ponownego kliknięcia **Run** (Uruchom). Zapisane akwizycje opisują ich pierwotne dane wejściowe. Wybór historii nie cofa zmian na rysunku. Dołączony samouczek może otworzyć się z zachowanym wynikiem referencyjnym, zanim samodzielnie uruchomisz symulację.

Użyj **Simulation → Show charts** (Symulacja → Pokaż wykresy) lub w wersji Desktop **View → Show Charts** (Widok → Pokaż wykresy), jeśli panel jest ukryty. Usunięty automatyczny wykres sondy pozostaje usunięty, dopóki nie dodasz go ponownie. Po zamknięciu okno wykresu wraca do panelu.

## Pomiar jest niedostępny
{: #a-measurement-is-unavailable}

Sprawdź przypisanie sygnału, jednostkę, okno, próg oraz jawne poziomy początkowe/końcowe. Pomiar czasu wymaga pełnych przejść przez poziomy/cykli. Pomiar czasu ustalania musi kończyć się wewnątrz zadeklarowanego pasma końcowego. Pomiar częstotliwości odcięcia wymaga żądanego punktu przecięcia i poziomu odniesienia wzmocnienia; pomiar pasma wymaga dwóch punktów przecięcia. Rezonans na granicy przemiatania nie został rozstrzygnięty. Nie są zgadywane nieobsługiwane wektory prądu/mocy urządzenia.

Niedostępne wymaganie nie oznacza zaliczenia. Eksportuj warunki i stan niepowodzenia wraz z raportami badania, a przypadki tolerancji bez zbieżności pozostaw widoczne. Jeśli badanie nie ma wymagań możliwych do oceny, nie można oszacować uzysku.

## Zapisywanie i odtwarzanie badania
{: #saving-and-reproducing-an-investigation}

Zachowaj razem rysunek, dołączone modele, ustawienia analizy, ustawienia źródeł, temperaturę i odpowiednią akwizycję. Jeśli zapisano plik bez wyników numerycznych lub usunięto je, aby zmniejszyć jego rozmiar, uruchom symulację ponownie, aby odtworzyć wykresy. Zachowane migawki wartości skalarnych/raportów nie odtworzą brakujących tablic przebiegów.

Odtwarzalny raport określa założenia modelu, silnik, okno pomiarowe i warunki. Podczas ustalania przyczyny problemu z językiem symulatora porównaj wyniki z [oczekiwanymi wartościami z samouczka](../Simulation-Tutorials/) oraz oficjalnym [podręcznikiem ngspice](https://ngspice.sourceforge.io/docs.html).

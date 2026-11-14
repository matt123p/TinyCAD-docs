---
layout: default
---
# Wykresy, pomiary i Circuit Explorer
{: #charts-measurements-and-circuit-explorer}

Po [uruchomieniu symulacji](../Simulation/) używaj wykresów do analizowania przebiegu, a nazwanych pomiarów do zapisywania powtarzalnych wielkości. Circuit Explorer udostępnia tymczasowe dostrajanie, powtarzane uruchomienia, wymagania i raporty z badań.

Otwórz **Arkusz symulacji → Ustawienia**, a następnie przewiń do sekcji **Circuit Explorer**. W razie potrzeby użyj **Dodaj narzędzia**, aby dodać Pomiary, Dostrajanie / przemiatanie, Wymagania, Nakładkę DC lub Laboratorium analiz. Skonfigurowane narzędzia są wyświetlane na liście po lewej stronie. **Ukryj narzędzie** ukrywa jego elementy sterujące, zachowując zapisane ustawienia. Wykresy pozostają w osobnym panelu po prawej stronie.

## Wyświetlanie i rozmieszczanie wykresów
{: #show-and-arrange-charts}

W przeglądarce i w Desktop wybierz na pasku narzędzi **Symulacja → Pokaż wykresy**. W Desktop dostępne jest również **Widok → Pokaż wykresy**. Przeciągnij lewą krawędź panelu **Wykresy symulacji** po prawej stronie, aby zmienić jego rozmiar. Wybierz konfigurację i akwizycję; używaj **Uruchom** lub **Zatrzymaj** bez opuszczania schematu.

Wykresy sond dodawane są automatycznie. Jeśli nie ma sond, do konfiguracji dodawany jest wykres wyjściowy. Użyj **Dodaj wykres**, aby dodać kolejną sondę lub widok niestandardowy, a następnie wybierz **Wybierz sygnały**. Tytuły wykresów można edytować. Analiza wielowykresowa, taka jak analiza szumów, ma selektor wykresu wynikowego.

Kliknij pozycje legendy, aby ukryć przebiegi. Napięcie, prąd i inne wielkości mają oznaczone osie; nie odczytuj prądu ze skali napięcia. Zespolone dane AC można wyświetlać jako części rzeczywistą/urojoną, moduł, dB lub fazę. Moduł wyjściowy w dB nie jest automatycznie wzmocnieniem toru, chyba że wejście zostało odpowiednio znormalizowane.

Użyj kółka/powiększania gestem szczypania, aby powiększyć, przeciągnij, aby przesunąć widok, użyj **Shift-przeciągnij**, aby zaznaczyć obszar, a **Dopasuj**, aby przywrócić widok. Kursory numeryczne umożliwiają sprawdzanie położeń próbek. W przypadku dużych wyników do płynnego wyświetlania podglądu używane są zredukowane dane; po powiększeniu widok jest uszczegóławiany. Zgodne przypięte przebiegi bazowe są wyświetlane linią przerywaną.

### Otwieranie wykresu w osobnym oknie i eksport
{: #pop-out-and-export}

**Otwórz wykres w osobnym oknie** otwiera niezależne okno w obu wersjach produktu. Można odłączyć kilka wykresów. Zamknięcie odłączonego wykresu powoduje powrót do panelu; × na zadokowanym wykresie usuwa go. Odłączone wykresy korzystają z bieżących danych wynikowych i nie uruchamiają osobnych symulacji.

**Pobierz CSV** eksportuje wszystkie zachowane próbki wybranych sygnałów i ich skalę, w tym wartości urojone. Eksport jest niezależny od powiększenia widoku i próbkowania. Główne wykresy udostępniają również pobieranie **PNG**. Dołącz do raportu wybraną konfigurację, akwizycję i jednostki, aby inni wiedzieli, jakiego eksperymentu dotyczą dane.

## Wypróbuj przygotowane badanie RC
{: #try-the-prepared-rc-investigation}

Pobierz plik [RC low-pass.dzn](../examples/simulation/rc-low-pass.dzn), otwórz go przez **Plik → Otwórz** i uruchom. Ten plik towarzyszący jest osobny od dołączonego przykładu samouczka o nazwie **rc-ac**. Zawiera przygotowane definicje pomiarów, wymagań i dostrajania.

Dla R1 = 1 kΩ i C = 1 µF nominalna częstotliwość graniczna wynosi około 159,15 Hz. **Pomiary** obejmuje częstotliwość odcięcia, wzmocnienie przy 100 Hz i fazę przy idealnej częstotliwości granicznej; **Wymagania** sprawdza, czy częstotliwość odcięcia mieści się w zakresie 150–170 Hz.

![Elementy sterujące dostrajaniem Circuit Explorer na rysunku towarzyszącym RC](../images/simulation/explorer-tuning.png)

## Dostrajanie bez zmieniania zapisanego obwodu
{: #tune-without-changing-the-saved-circuit}

W sekcji **Dostrajanie / przemiatanie** wybierz komponent i właściwość numeryczną, a następnie kliknij **Dodaj element sterujący dostrajaniem**. Zaznaczenie komponentu na schemacie wstępnie wybiera go w selektorze. Można również powiązać obsługiwane ustawienia źródła/instrumentu oraz nazwane parametry konfiguracji. Dowolny tekst, wyrażenia i zawartość plików modeli nie mogą być celami suwaka.

Elementy sterujące obsługują jednostki, ograniczenia, skale liniowe/logarytmiczne oraz zaokrąglanie do preferowanych wartości E12/E24/E96. Po zmianie uruchomienie jest planowane po około 500 ms. Wartości tymczasowe są oddzielone od zapisanych wartości komponentów.

- **Cofnij dostrajanie** przywraca poprzednie tymczasowe nadpisanie.
- **Resetuj** przywraca wartości początkowe i akwizycję.
- **Zastosuj** zapisuje nadpisania na rysunku jako jedną edytowalną operację.

Właściwość numeryczna wpływa na obwód tylko wtedy, gdy szablon SPICE komponentu faktycznie jej używa. Nie zakładaj, że zmiana nieużywanego atrybutu zmienia model.

### Przemiatanie jednej zmiennej
{: #one-variable-sweeps}

Rozwiń **Przemiatanie jednej zmiennej** i wybierz element sterujący. Użyj 2–100 punktów liniowych/logarytmicznych lub 1–100 jawnych wartości, oddzielonych spacjami lub średnikami. **Uruchom przemiatanie** uruchamia wybraną analizę dla każdej wartości. **Anuluj** zatrzymuje planowanie kolejnych przypadków i zachowuje ukończone wyniki.

W pliku towarzyszącym RC przygotowano wartości 1 kΩ, 2,2 kΩ, 4,7 kΩ, 6,8 kΩ i 10 kΩ. Ich idealne częstotliwości odcięcia wynoszą w przybliżeniu 159,15, 72,34, 33,86, 23,41 i 15,92 Hz. Porównuj nakładki lub nazwany parametr z wartością parametru. Różni się to od [analizy przemiatania DC](../Simulation-Analyses/#dc-sweep), która zmienia niezależne źródło w ramach analizy DC.

Definicje przemiatania, wartości, jednostki, stan uruchomienia i przechwycone parametry są zapisywane w `.dzn`. **Zapisane przemiatanie** pozwala ponownie wyświetlić grupę. Usunięcie surowych wyników usuwa nakładki przebiegów, ale przechwycone tabele wartości skalarnych i metadane raportu mogą pozostać. Zachowywanych jest do 100 grup przemiatania, z uwzględnieniem zwykłych limitów akwizycji i danych.

## Definiowanie nazwanych pomiarów
{: #define-named-measurements}

W sekcji **Pomiary** dodaj nazwę, wybierz sygnał/komponent i rozwiń jego ustawienia. Określ odpowiednie okno czasu/częstotliwości oraz wymagane poziomy lub wartości odniesienia. Powiązania komponentów/sond używają tożsamości arkusza wraz z oznaczeniem, aby mogły być zachowane po ponownym otwarciu.

![Przygotowane pomiary częstotliwości odcięcia, wzmocnienia i fazy](../images/simulation/explorer-measurements.png)

| Pomiar | Interpretacja |
| --- | --- |
| Wartość, minimum, maksimum, międzyszczytowo | Wartość sygnału w danym położeniu lub ekstrema w wybranym oknie |
| Średnia, RMS, tętnienia RMS | Wielkości przejściowe ważone w czasie; tętnienia RMS nie uwzględniają wartości średniej |
| Całka | Pole w czasie; całkowanie watów daje dżule |
| Czas narastania/opadania | Pierwsze pełne przejście 10–90% między zadeklarowanymi poziomami niskim/wysokim |
| Okres, częstotliwość, współczynnik wypełnienia, szerokość impulsu | Pierwszy pełny cykl/impuls z użyciem jawnego progu lub poziomu środkowego okna |
| Opóźnienie | Pierwsze narastające przejście wyjścia minus pierwsze przejście sygnału odniesienia, przy tym samym progu |
| Przeregulowanie/ujemne przeregulowanie | Odchylenie względem zadeklarowanych poziomów początkowego/końcowego i amplitudy skoku |
| Czas ustalania | Ostatnie wejście w pasmo tolerancji wartości końcowej, liczone od początku okna |
| Stała czasowa | Pierwsze przejście przez poziom początkowy + (końcowy − początkowy) × (1 − 1/e), liczone od początku okna |
| Wzmocnienie/faza AC | Zespolony stosunek wyjścia do wejścia przy wybranej częstotliwości |
| Częstotliwość odcięcia/pasmo | Przejścia przy połowie mocy, −3,0103 dB względem wybranego poziomu odniesienia wzmocnienia |
| Rezonans | Największe maksimum modułu wewnątrz zakresu; maksimum na granicy nie stanowi wykrytego rezonansu |
| Dodatkowe parametry odpowiedzi | Tętnienia pasma przepustowego, tłumienie pasma zaporowego, moduł impedancji portu i opóźnienie grupowe |

Całkowanie przebiegu przejściowego uwzględnia nierówne odstępy czasowe i interpolowane końce okna. RMS uwzględnia składową stałą; tętnienia RMS ją pomijają. Opóźnienie może być ujemne, gdy przejście wyjścia następuje przed przejściem sygnału odniesienia. Pomiary czasowe wymagają, aby odpowiednia część przejścia lub cyklu mieściła się w oknie.

Dla pomiarów skokowych zadeklaruj poziomy początkowy/końcowy. Nieprawidłowy poziom końcowy sprawia, że czas ustalania i przeregulowanie są mylące. Nieustalona próbka końcowa, brak przejścia, niejednoznaczne powiązanie, niezgodna jednostka lub nieprawidłowe okno skutkuje wynikiem **niedostępne**, a nie zmyślonym zerem.

Dla częstotliwości odcięcia użyj jawnego liniowego wzmocnienia odniesienia lub opcji **szczyt**. Odniesienie równe jedności jest odpowiednie dla prostego filtru RC, ale wzmacniacz o wzmocnieniu 20 wymaga innego odniesienia. Pasmo wymaga dwóch prawidłowych przejść; interpolacja częstotliwości jest logarytmiczna. Dowolny szczyt na skraju przemiatania nie potwierdza rezonansu.

## Wymagania i nakładki DC
{: #requirements-and-dc-overlays}

Użyj sekcji **Wymagania**, aby sprawdzić nazwany pomiar pod kątem warunku **co najmniej**, **co najwyżej** lub włącznie **między** wskazanymi wartościami. Jednostki muszą być zgodne. Wyniki to **spełnione**, **niespełnione** lub **niedostępne**; niedostępny parametr nie oznacza spełnienia wymagania.

![Wymaganie częstotliwości odcięcia RC z jawnym dopuszczalnym zakresem](../images/simulation/explorer-requirements.png)

Wybierz dostępny pomiar, aby sprawdzić jego dane potwierdzające i powiązane wyróżnienie na schemacie. Zachowaj definicje pomiarów, okna i progi wraz z wyeksportowanymi wynikami. Ogólne dwukierunkowe podświetlanie sond nie jest w pełni obsługiwane dla każdego rodzaju sygnału lub modelu.

Nakładka DC na schemacie wymaga świeżej, ukończonej akwizycji punktu pracy. Napięcie jest mierzone względem 0; kierunek prądu zależy od skonfigurowanej kolejności zacisków. Moc pobierana jest dodatnia, dlatego moc źródła dostarczającego energię może być ujemna. Prąd idealnego rezystora można wyznaczyć z V/R; nieobsługiwane prądy urządzeń są pomijane, a nie zmyślane.

## Laboratorium analiz
{: #analysis-lab}

![Przepływy pracy w laboratorium analiz Circuit Explorer](../images/simulation/analysis-lab.png)

### Odpowiedź częstotliwościowa i wzmacniacza
{: #frequency-and-amplifier-response}

Wybierz wejście/wyjście, zakres częstotliwości i częstotliwość odczytu. Uruchom analizę AC, aby sprawdzić wzmocnienie, fazę, częstotliwość odcięcia, pasmo, rezonans, współczynnik Q filtru pasmowego i opóźnienie grupowe. Współczynnik Q filtru pasmowego oznacza `f₀ / half-power bandwidth`. Obliczenia funkcji przenoszenia używają jawnie nazwanego sygnału pobudzającego. Impedancja portu wymaga przemyślanej konfiguracji testowej napięcia/prądu; dowolny stosunek napięć węzłowych nie jest pomiarem wzmocnienia w pętli.

### Tolerancje i przypadki skrajne
{: #tolerance-and-corners}

Badanie Monte Carlo powtarza uruchomienia z użyciem skonfigurowanych rozkładów komponentów: ograniczonego rozkładu jednostajnego ± tolerancja lub nieograniczonego rozkładu normalnego określonego przez odchylenie standardowe. Ustaw nieujemne ziarno losowe i 2–100 przypadków. Ponowne użycie ziarna i konfiguracji zapewnia powtarzalność próbkowania. W pełni dodatnio skorelowane grupy korzystają ze wspólnego losowania standaryzowanego i muszą używać jednego typu rozkładu.

Nie dodatnie wartości próbkowanych rezystancji, pojemności, indukcyjności lub częstotliwości są przypadkami nieudanymi. Sprawdzaj niepowodzenia, zamiast po cichu je wykluczać. Średnia, odchylenie standardowe próby i histogramy opisują próbkowane wyniki, a nie wszystkie możliwe wyprodukowane części.

Wyszukiwanie przypadków skrajnych wylicza kombinacje maksymalnie sześciu niezależnych zmiennych, czyli do 64 przypadków skrajnych. Pomija grupy korelacji Monte Carlo. Zgłoszony najgorszy zaobserwowany wynik nie dowodzi, że jest to globalny najgorszy przypadek między narożnikami. Wydajność produkcyjna ma charakter poglądowy i zależy od założeń wprowadzonego modelu/rozkładu; badanie bez wymagań, które można ocenić, nie daje oszacowania wydajności.

### Przypadki testowe
{: #test-cases}

Zapisz analizę, parametry, definicje przebiegów/pomiarów/wymagań i powiązania jako przypadek. Nadaj przypadkom różne temperatury lub nadpisania parametrów, sygnału pobudzającego i obciążenia, a następnie uruchom zestaw. Przypadki korzystają z **bieżącego schematu i modeli**; nie są niezależnymi historycznymi wersjami obwodu. Każde uruchomienie zapisuje tożsamość swoich danych wejściowych.

Raporty JSON zawierają warunki, wyniki i historię badań. Badania są uruchamiane sekwencyjnie i można je anulować; nieudane lub niezbieżne przypadki pozostają widoczne. Definicje, ziarno, warunki przypadków i odwołania do grup są zachowywane w `.dzn`. Ostatnie 100 grup badań jest zachowywanych w ramach zwykłych limitów wyników.

### Moc, sprawność i naprężenia
{: #power-efficiency-and-stress}

Wybierz obsługiwane sygnały mocy komponentów i jawne limity napięcia szczytowego, prądu lub mocy. Pomiary Średnia/RMS/Całka dostarczają średnią moc, skuteczną wartość prądu i energię. Sprawność wymaga prawidłowo określonej granicy wejściowej zasilającej oraz granicy odbiornika użytecznego. Nieobsługiwane lub niejednoznaczne prądy urządzeń sprawiają, że wynik jest niedostępny.

Małosygnałowa analiza AC nie jest testem naprężeń przy dużym sygnale. Wpisanie limitu liczbowego w TinyCAD nie dodaje modelu termicznego obudowy, znamionowej wartości impulsowej ani mechanizmu ochronnego. Używaj warunków i modeli przebiegu przejściowego odpowiednich do danego zagadnienia i zachowuj założenia wraz z raportem.

## Bieżące ograniczenia
{: #current-limits}

Zaimplementowane przepływy pracy nie obejmują analizy FFT/zniekształceń harmonicznych, automatycznego wprowadzania usterek, nieograniczonych przemiatań wielowymiarowych, automatycznej optymalizacji ani współpracujących trybów Live/Pause. Przy przeglądaniu wyników uwzględniaj stan ukończonego/zatrzymanego/nieudanego uruchomienia i faktyczną dostępność danych. Zobacz [rozwiązywanie problemów](../Simulation-Troubleshooting/), gdy parametr lub akwizycja są niedostępne.

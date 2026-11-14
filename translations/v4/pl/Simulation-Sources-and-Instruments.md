---
layout: default
---
# Źródła, sondy i wirtualne przyrządy
{: #sources-probes-and-virtual-instruments}

Menu **Simulation** na pasku narzędzi zawiera narzędzia do wstawiania elementów **SPICE** oraz **Lab Equipment**. Wybierz narzędzie i umieść je na schemacie. Kliknij prawym przyciskiem myszy lub naciśnij Escape, aby anulować umieszczanie. Narzędzia wybrane z arkusza Simulation przełączają widok na schemat w celu ich umieszczenia; ich definicje są osadzane na rysunku.

## Niezależne źródła
{: #independent-sources}

Wybierz **Simulation → SPICE → Insert Source**. Przed umieszczeniem otworzy się edytor źródła. Wybierz napięcie lub prąd oraz typ sygnału. Zaznacz korpus umieszczonego źródła, aby ponownie otworzyć jego edytor u dołu.

| Typ sygnału | Przydatne do | Ustawienia do sprawdzenia |
| --- | --- | --- |
| DC | Polaryzacji i stałego zasilania | Wartość DC i polaryzacja |
| Sinusoidalny | Okresowego wejściowego sygnału analogowego | Przesunięcie, amplituda szczytowa, częstotliwość, faza, opóźnienie i tłumienie |
| Prostokątny/impulsowy | Przełączania i odmierzania czasu | Poziomy niski/wysoki, opóźnienie, czas narastania/opadania, szerokość impulsu i okres |
| Trójkątny | Powtarzającego się przebiegu narastającego | Poziomy, okres i czas narastania/opadania |
| Odcinkowo-liniowy (PWL) | Zadanego przebiegu | Rosnące pary czas/wartość, po jednej parze w wierszu |
| Wykładniczy | Kształtowanego przejścia | Poziomy, opóźnienia i stałe czasowe |
| FM | Modulacji częstotliwości | Ustawienia nośnej i modulacji |

![Edytor źródła sinusoidalnego i podgląd przebiegu](../images/simulation/source-settings.png)

Podgląd odzwierciedla numeryczne ustawienia przebiegu. Użyj go, aby przed uruchomieniem wychwycić nieoczekiwane przesunięcie, wartość szczytową lub parametry czasowe. Nieprawidłowe ustawienia uniemożliwiają uruchomienie. Ikona źródła zmienia się zależnie od jego przebiegu, a źródło prądowe zachowuje strzałkę kierunku.

**Amplituda AC i faza to osobne ustawienia** dla analizy częstotliwościowej małosygnałowej. Są niezależne od amplitudy sinusoidy w analizie stanów nieustalonych. Należy też świadomie dobrać polaryzację DC źródła oraz przebieg w analizie stanów nieustalonych. Zob. [analizy](../Simulation-Analyses/) i [samouczek dotyczący źródeł](../SPICE-Tutorial-03/).

Nowe źródła i sondy mają kompaktowy rozstaw zacisków 8 mm. W starszych, dużych elementach sterujących w edytorze u dołu dostępna jest opcja **Use compact symbol**. Konwersja pozostawia pierwszy zacisk zakotwiczony i wydłuża istniejące połączenia do zacisków po zmianie rozmiaru, jako jedną operację możliwą do cofnięcia. Po zmianie rozmiaru sprawdź te połączenia.

## Sondy i masa
{: #probes-and-ground}

| Narzędzie w **Simulation → SPICE** | Podłączenie | Znaczenie |
| --- | --- | --- |
| **Insert Probe** | Jedna końcówka na węźle | Napięcie względem masy 0 |
| **Insert Differential Probe** | + i − do dwóch węzłów | `V(+) − V(−)` |
| **Insert Current Probe** | Szeregowo w gałęzi | Prąd od + do − |
| **Insert Ground** | Do węzła odniesienia obwodu | Łączy symbol zasilania Earth z wartością 0 |

Wstawianie sondy/masy przyciąga ją do przewodu i rozdziela przewód w punkcie połączenia. Sprawdź rzeczywiste położenie końcówki i polaryzację. Sonda prądowa jest **idealnym źródłem napięcia o wartości zero woltów**: musi być podłączona szeregowo. Podłączenie jej równolegle do zasilania powoduje zwarcie. Podczas wstawiania pomiaru szeregowego usuń lub przerwij pierwotny przewód równoległy.

Panele sond wybierają sposób akwizycji i tryb wyświetlania. Sygnały z punktu pracy mogą być wyświetlane jako odczyty skalarne; zespolone wyniki AC można prezentować w postaci składowej rzeczywistej, modułu, dB i fazy. Jeśli wymagany wynik jest niedostępny lub dotyczy zmodyfikowanego obwodu, panel wyjaśnia, dlaczego jest niedostępny lub wymaga ponownego uruchomienia.

### Źródła sterowane
{: #controlled-sources}

**Insert Controlled Source** udostępnia źródło napięciowe sterowane napięciem (**E**) lub źródło prądowe sterowane napięciem (**G**). Wyprowadzenia wyjściowe to +/−, ponumerowane jako 1/2; wyprowadzenia sterujące to C+/C−, ponumerowane jako 3/4. Podłącz obie strony wejścia sterującego i sprawdź charakterystykę przenoszenia w edytorze. Port sterujący nie jest zaciskiem wyjściowym zasilania.

## Wirtualne wyposażenie laboratoryjne
{: #virtual-laboratory-equipment}

Wybierz te elementy z **Simulation → Lab Equipment**. Są to modele operacyjne z elementami sterującymi akwizycją. Podobnie nazwane symbole w **Standard → Test & Measurement** służą do rysowania układu fizycznego stanowiska pomiarowego i nie wykonują pomiarów symulacyjnych.

Aby otworzyć gotowy, okablowany obwód, pobierz [Virtual laboratory.dzn](../examples/simulation/virtual-laboratory.dzn) i użyj polecenia **File → Open**. Jest to towarzyszący plik demonstracyjny, a nie pozycja o nazwie widocznej w przeglądarce dołączonych przykładów.

### Oscyloskop
{: #oscilloscope}

Oscyloskop ma dwa kanały różnicowe: **1 A+**, **2 A−**, **3 B+**, **4 B−**. Podłącz wejście ujemne każdego kanału, a także jego wejście dodatnie. Domyślna impedancja wejściowa wynosi **1 MΩ**; może ona wpływać na obwód o dużej impedancji.

Użyj ustawień time/div i volts/div przy wyświetlaczu z dziesięcioma podziałkami w poziomie i ośmioma w pionie. Dostępne tryby wyzwalania to **Auto**, **Normal** i **Single**. Polecenie **Acquire** pobiera dane z analizy stanów nieustalonych obejmujące dziesięć działek czasu, z maksymalnym krokiem wynoszącym w przybliżeniu time/div podzielone przez 100. Zmiana skali wyświetlania po uruchomieniu nie tworzy nowej akwizycji ani nie odtwarza brakujących zboczy.

Sprzężenie AC usuwa ze wyświetlanego sygnału średnią ważoną czasowo; nie jest to fizyczny model analogowego wejścia górnoprzepustowego. Sprzężenie GND wyświetla zero, przy czym obciążenie przyrządu pozostaje podłączone. Elementy sterujące czasem/poziomem oscyloskopu ułatwiają analizę danych; nie zmieniają zbyt rzadko próbkowanej symulacji w poprawny pomiar czasowy.

### Multimetr
{: #multimeter}

Do pomiaru napięcia lub rezystancji użyj zacisków **VΩ i COM**, a do pomiaru prądu — **A i COM**. Pomiar prądu musi być wykonany szeregowo. Domyślna impedancja wejściowa w trybie pomiaru napięcia wynosi **10 MΩ**; w trybie pomiaru prądu używana jest rezystancja obciążenia **1 Ω** i źródło pomiarowe o napięciu zero woltów. Zmiana trybu zmienia zatem obciążenie obwodu i wymaga ponownego uruchomienia.

Tryb DC wyświetla odpowiednią wartość ustaloną/średnią. Tryb AC wykorzystuje średnią kwadratową ważoną czasowo, po odjęciu składowej DC. Wartość poza zakresem jest wyświetlana jako **OL**. Są to modelowane zachowania przyrządu, bez symulacji uszkodzenia bezpiecznika lub przegrzania.

Pomiar rezystancji jest osobnym, tymczasowym testem wykonywanym bez zasilania. Niezależne źródła są wyłączane, a połączenia przyrządu rozłączane na czas testu. Obsługiwana sieć obejmuje R/C/L i sondy: kondensatory są rozwarte dla DC, a cewki zwarte. Obecność elementów aktywnych lub nieobsługiwanych szablonów uniemożliwia wykonanie testu rezystancji. Nie należy interpretować go jako pomiaru rezystancji w obwodzie dowolnego zasilanego urządzenia elektronicznego.

### Generator funkcyjny
{: #function-generator}

Generator zapewnia przebiegi sinusoidalne, impulsowe/prostokątne, trójkątne i PWL, z regulacją amplitudy, przesunięcia, częstotliwości i parametrów czasowych. Podgląd przedstawia przebieg **bez obciążenia**. Domyślna rezystancja wyjściowa **50 Ω** oznacza, że podłączone obciążenie może zmniejszyć amplitudę na zaciskach.

Wyłączenie wyjścia (Output Off) przybliża port otwarty przez rezystancję upływu **1 TΩ**. Amplituda małosygnałowa AC pozostaje niezależna od amplitudy w analizie stanów nieustalonych. Przed porównaniem zaprogramowanego przebiegu z wartością zmierzoną sprawdź, czy wymagana amplituda jest wartością szczytową, międzyszczytową czy RMS.

### Zasilacz laboratoryjny
{: #bench-supply}

Ustaw napięcie, ograniczenie prądu, rezystancję wyjściową, stan wyjścia i opcjonalny czas narastania. Model wykorzystuje płynne behawioralne ograniczenie prądu i skończoną rezystancję; panel wskazuje zmierzone V/I oraz pracę w trybie **CV/CC**. Zmniejszenie ograniczenia prądu poniżej wartości wymaganej przez obciążenie obniża dostarczane napięcie.

Może dostarczać prąd lub go pochłaniać w granicach tego samego limitu. Nie jest to model zasilacza impulsowego konkretnego producenta ani model termiczny. Wyłączone wyjście jest przybliżane rezystancją upływu 1 TΩ. Narastanie napięcia wpływa na analizę stanów nieustalonych; punkt pracy DC wykorzystuje końcowe zaprogramowane napięcie.

Właściwości liczbowe generatora i zasilacza można powiązać z [Circuit Explorer](../Simulation-Charts-and-Measurements/), aby tymczasowo dostrajać parametry lub warunki testu. W wersji Desktop panele przyrządów można otwierać w osobnych oknach; osobne okna wykresów są dostępne w obu produktach.

## Obciążenie jest częścią eksperymentu
{: #loading-is-part-of-the-experiment}

Idealna sonda napięciowa i obciążone wejście oscyloskopu nie dają takiego samego obwodu. Przed porównaniem wyników uwzględnij impedancję generatora, rezystancję obciążenia miernika, obciążenie wejściowe oscyloskopu i wspólne przewody powrotne. Jeśli żaden koniec sygnału nie jest połączony z masą, użyj pomiaru różnicowego. Jeśli po dodaniu przyrządu symulacja kończy się niepowodzeniem, przed zmianą ustawień solvera sprawdź jego okablowanie i tryb.

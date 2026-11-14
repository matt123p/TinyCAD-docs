---
layout: default
---
# Symulacja i SPICE
{: #simulation-and-spice}

TinyCAD może uruchamiać symulacje układów elektronicznych, przedstawiać wyniki na wykresach i mierzyć zachowanie układu bez opuszczania rysunku. Zintegrowanym silnikiem jest **ngspice**. Zarówno wersja przeglądarkowa, jak i aplikacja Desktop zawierają własny silnik; w zintegrowanym trybie pracy nie trzeba osobno instalować ngspice.

Dopiero zaczynasz przygodę z symulacją? Zacznij od [interaktywnego kursu SPICE ](../SPICE-Tutorial/). Aby szybko uzyskać pierwszy wynik, wykonaj poniższe kroki dotyczące dzielnika. W tej dokumentacji opisano elementy sterujące i interpretację wyników.

## Co oblicza symulator obwodów
{: #what-a-circuit-simulator-calculates}

SPICE to skrót od *Simulation Program with Integrated Circuit Emphasis* (program symulacyjny z naciskiem na układy scalone). Symulator rozwiązuje matematyczny model połączonego obwodu: rezystory wiążą napięcie z prądem, kondensatory i cewki magazynują energię, a modele półprzewodników opisują zachowanie nieliniowe. Może wyznaczać punkt pracy DC, obliczać przebiegi w czasie oraz badać odpowiedź częstotliwościową małosygnałową.

Schemat określa **połączenia**; model SPICE określa **zachowanie**; analiza wskazuje **co należy obliczyć**. Wszystkie trzy elementy muszą być poprawne. Realistyczny rysunek wzmacniacza lub procesora nie oznacza, że zawiera on model symulacyjny. Z kolei prosty trójkąt lub prostokąt może zawierać użyteczny model behawioralny.

Symulacja przydaje się do sprawdzania pomysłów, porównywania wartości elementów i zrozumienia nieoczekiwanej odpowiedzi. Wynik zależy od podanego modelu i warunków. Idealne przewody nie mają przypadkowej rezystancji ani indukcyjności; ogólny model tranzystora nie jest pełną specyfikacją każdego tranzystora. Obciążenie, impedancja zasilania, tolerancje i temperatura są uwzględniane tylko w takim zakresie, w jakim odzwierciedlają je wybrane modele.

## Silniki przeglądarkowy i Desktop
{: #browser-and-desktop-engines}

| Możliwość | Przeglądarka | Aplikacja Desktop |
| --- | --- | --- |
| Analogowy SPICE, wykresy, pomiary i eksploracja | Dołączony ngspice WebAssembly działający w procesie roboczym | Dołączony natywny ngspice uruchamiany przez proces pomocniczy |
| Przenośne biblioteki modelowanej logiki cyfrowej / bloków funkcjonalnych / czujników i interfejsów | Tak | Tak |
| Modele kodowe XSPICE sterowane zdarzeniami | Nieobsługiwane¹ | Tak, dołączone natywne biblioteki modeli kodowych |
| Okna wykresów odłączane od panelu | Tak | Tak |
| Okna przyrządów wirtualnych odłączane od panelu | Nie | Tak |

¹ Wersje przeglądarkowe mogą otwierać rysunek z zapisanymi wynikami XSPICE w celu ich przeglądania. Uruchamianie XSPICE wymaga aplikacji Desktop.

Obliczenia są wykonywane lokalnie w przeglądarce lub w silniku aplikacji Desktop. Wyszukiwanie w bibliotekach online jest osobną funkcją. Dołączony obecnie silnik bazuje na ngspice 47; historia przebiegów wskazuje silnik i kompilację użyte podczas akwizycji. Przy sprawdzaniu składni modeli lub różnic między silnikami należy korzystać z odpowiedniej dokumentacji źródłowej.

## Uruchom pierwszą symulację
{: #run-your-first-simulation}

1. W przeglądarce wybierz **Open Example** na pasku tytułu albo w aplikacji Desktop wybierz **File → Open Example**.
2. Wybierz **SPICE tutorial → divider → Open drawing**.
3. Przyjrzyj się obwodowi: źródło 5 V zasila dwa szeregowo połączone rezystory 1 kΩ. **OUT** to ich punkt środkowy, a dolny przewód jest masą **0**.
4. W pasku arkuszy wybierz **divider Simulation sheet**. Ikona przypominająca zegar odróżnia go od arkusza schematu. Otwórz **Setup** i pozostaw wybraną opcję **Operating Point**.
5. Wybierz **Run**. Po zakończeniu otwórz **History** i wybierz nową, zakończoną akwizycję.
6. Otwórz **Data**. Napięcie w punkcie środkowym wynosi **2.5 V**. Prąd źródła wynosi **−2.5 mA**, ponieważ kierunek odniesienia prądu źródła napięciowego w ngspice jest skierowany do jego dodatniego zacisku; w tym obwodzie źródło dostarcza prąd, więc jego wartość jest ujemna.
7. Zmień wartość jednego rezystora, a następnie uruchom symulację ponownie. Porównaj nowy wynik z pierwotną akwizycją.

{% include video-player.html src="/v4/videos/simulation/first-simulation.mp4" poster="/v4/videos/simulation/first-simulation.jpg" caption="Otwórz dołączony dzielnik, sprawdź jego konfigurację i uruchom nową akwizycję ngspice w przeglądarce. Tabela Data potwierdza napięcie 2.5 V w węźle OUT oraz prąd −2.5 mA płynący przez źródło." %}

Przykład zawiera zachowaną akwizycję referencyjną. Wyświetlenie wyniku zaraz po otwarciu przykładu nie oznacza, że wykonano nowe obliczenie. **History** oddziela zapisane dane od akwizycji utworzonej przez wybranie polecenia Run.

## Utwórz nową symulację
{: #build-a-new-simulation}

1. Umieść modelowane komponenty z **Standard → SPICE essentials** albo użyj podmenu **Simulation → SPICE components** na pasku narzędzi. Polecenie **More…** otwiera pełną kolekcję SPICE essentials.
2. Połącz wyprowadzenia przewodami i nadaj ważnym węzłom czytelne etykiety. Zapewnij rzeczywiste połączenie z masą **0**: polecenie **Simulation → SPICE → Insert Ground** wstawia właściwy symbol zasilania.
3. Dodaj sygnał pobudzający za pomocą **Simulation → SPICE → Insert Source**. Ustaw typ źródła napięciowego lub prądowego oraz przebieg. Jeśli chcesz wygodnie tworzyć wykresy, dodaj [sondy](../Simulation-Sources-and-Instruments/#probes-and-ground).
4. Wybierz **Simulation → Simulate**, aby dodać **arkusz symulacji**.
5. Wybierz analizę i jej ustawienia na karcie **Setup**. Ustaw parametry lub dołącz własny tekst modelu, jeśli wymaga tego układ.
6. Wybierz sygnały, uruchom symulację i sprawdź panel **Simulation charts** oraz widoki arkusza: **Data**, **History** i **Diagnostics**. Przed poleganiem na wartościach popraw zgłoszone błędy połączeń lub modeli.

Na arkuszu symulacji na głównym pasku narzędzi dostępne są przyciski **Run** i **Stop**. Arkusz otwiera się z kartą **Setup**. Karty **History** i **Diagnostics** pojawiają się po uruchomieniu symulacji; karty **Measurements** i **Data** są dostępne po uzyskaniu danych liczbowych. Narzędzia Circuit Explorer znajdują się w karcie Setup, poniżej ustawień analizy; dodawaj tylko potrzebne narzędzia za pomocą **Add tools**.

Wszystkie arkusze schematów w rysunku tworzą **jeden obwód**. Każdy arkusz symulacji ma osobne ustawienia: analizę, parametry, dołączone modele, wybrane sygnały, instrukcje i historię przebiegów. Dodanie drugiego arkusza symulacji nie tworzy odizolowanego, drugiego obwodu schematowego. Umożliwia zbadanie tego samego obwodu w inny sposób, na przykład wykonanie analizy AC obok analizy przebiegu w czasie.

Dla każdej analizy użyj odrębnej nazwy konfiguracji. Zduplikowanie konfiguracji kopiuje jej definicje, ale nie akwizycje. W danej chwili uruchomiona może być tylko jedna akwizycja; przemiatania i badania wykonują swoje przypadki kolejno.

## Masa, połączenia i modele
{: #ground-connections-and-models}

Punktem odniesienia napięcia w SPICE jest węzeł **0**. Symbol zasilania lub etykieta sieci o dokładnie takiej wartości ustanawia punkt odniesienia. Sama nazwa **GND** jest zwykłą nazwą sieci, o ile nie zostanie również połączona z węzłem 0. Pływające obwody, niezasilane wyprowadzenia zasilania modeli i niepodłączone powroty źródeł to częste problemy podczas pierwszego uruchomienia.

Przewody muszą stykać się z wyprowadzeniami w punktach połączeń. Tekst umieszczony w pobliżu nie tworzy połączenia. Przewód dotykający końca innego przewodu lub gniazda komponentu może utworzyć węzeł, nawet jeśli nie było to zamierzone. Skorzystaj z informacji o [połączeniach przewodów](../Wires/) oraz wygenerowanej netlisty, aby rozstrzygnąć niejednoznaczności na rysunku.

Każdy symulowany komponent wymaga prawidłowego szablonu, modelu i mapowania wyprowadzeń. Sprawdź je we właściwościach **SPICE** umieszczonego komponentu. Zobacz [Modele SPICE i wyjście netlisty](../SPICE-output/) przed dołączeniem modeli producenta lub dostosowaniem symbolu służącego wyłącznie do rysowania.

## Setup, Run i Stop
{: #setup-run-and-stop}

Polecenie **Run** rozpoczyna nową akwizycję, używając bieżącego obwodu i konfiguracji. Wykresy mogą aktualizować się w miarę napływania danych. Polecenie **Stop** kończy akwizycję i zachowuje dane, które już napłynęły; status przebiegu i dostępność danych informują, co zostało zachowane. Nie jest to funkcja wstrzymania i wznowienia. Aby wykonać obliczenia ponownie, rozpocznij kolejny przebieg.

Edycja obwodu, modelu lub konfiguracji sprawia, że poprzedni wynik staje się historyczny. TinyCAD oznacza wyniki wymagające ponownego uruchomienia, zamiast przedstawiać stare wartości jako pomiary zmodyfikowanego obwodu. Historia zapisuje tożsamość obwodu i ustawień, zaplecze, czas oraz wynik. Wybranie wcześniejszej akwizycji przywołuje wcześniejsze dane; nie przywraca poprzedniego schematu tak jak operacja cofania.

## Zapisywanie i udostępnianie wyników
{: #save-and-share-results}

Zapisz rysunek, aby zachować obwód, modele, konfiguracje i uzyskane wyniki. Jeśli rysunek zawiera komponenty symulacyjne, ustawienia lub wyniki, TinyCAD automatycznie używa formatu **`.dzn`**. Polecenie **Save without results** zachowuje definicje symulacji oraz przechwycone metadane skalarne i raportowe, ale pomija tablice danych numerycznych przebiegów; wykresy wymagające tych tablic będą wtedy wymagały nowej akwizycji.

Ilość zachowanych danych numerycznych jest ograniczona do 64 MiB na przebieg i 256 MiB na rysunek, przy maksymalnie 1000 przebiegach na konfigurację. Długie badania z małym krokiem czasowym mogą osiągnąć te limity. Eksportuj ważne wykresy i dane CSV oraz usuwaj niepotrzebne już wyniki. Zapisuj dołączone modele razem z rysunkiem, aby odbiorca nie potrzebował dostępu do lokalnych ścieżek plików.

## Rysunki symulacji `.dzn`
{: #dzn-simulation-drawings}
{: #dzn-simulation-drawings}

**`.dzn` to skompresowany format rysunków TinyCAD obsługiwany od wersji TinyCAD v4.** Zawiera schemat, osadzone symbole, arkusze symulacji, ustawienia źródeł, dołączony tekst modeli i wszystkie zachowane akwizycje w jednym pliku opartym na formacie ZIP. Numeryczne dane przebiegów są wydajnie przechowywane w kontenerze, w tym złożone wyniki AC. Otwiera się go i zapisuje za pomocą zwykłych poleceń **File → Open**, **Save** i **Save As**; nie trzeba ręcznie wypakowywać zawartości.

Zwykłe rysunki używają formatu XML **`.dsn`**. Jeśli obecna jest zawartość symulacji, TinyCAD automatycznie wybiera format `.dzn`, w tym dla źródeł, sond, przyrządów wirtualnych, atrybutów SPICE, masy o nazwie `0`, arkuszy symulacji lub wyników. Polecenie **Save without results** nadal używa formatu `.dzn`, jeśli zachowuje konfigurację symulacji: usuwa duże tablice przebiegów, a nie definicje eksperymentu.

Użyj polecenia **Save without results**, aby utworzyć mniejszą kopię do udostępnienia, jeśli odbiorca może ponownie uruchomić symulację. Zachowaj wyniki, jeśli odbiorca ma przeglądać Twoją akwizycję, pomiary i szczegóły silnika bez ponownego uruchamiania symulacji. Zapisana akwizycja opisuje obwód z chwili jej wykonania; nie zastępuje ponownego uruchomienia po wprowadzeniu zmian.

TinyCAD v3 nie może otwierać plików `.dzn`. Zmiana rozszerzenia na `.dsn` nie konwertuje formatu ani nie zapewnia zgodności nowych rekordów symulacji z v3. Podczas wymiany projektu ze starszą wersją TinyCAD zachowaj oryginalną kopię. Eksport `.cir` to tekst SPICE przeznaczony dla symulatora; różni się od obu formatów rysunków TinyCAD.

## Dalsza część dokumentacji
{: #continue-with-the-reference}

- [Analizy i ustawienia](../Simulation-Analyses/) — DC, przebieg w czasie, AC, szum, funkcja przenoszenia i bieguny-zera.
- [Źródła, sondy i przyrządy wirtualne](../Simulation-Sources-and-Instruments/) — sygnały pobudzające, połączenia pomiarowe i obciążenie.
- [Wykresy, pomiary i Circuit Explorer](../Simulation-Charts-and-Measurements/) — dostrajanie, przemiatania, wymagania i badania.
- [Modele SPICE i wyjście netlisty](../SPICE-output/) — szablony, pliki modeli i symulacja zewnętrzna.
- [XSPICE i symulacja cyfrowa](../XSPICE/) — sterowane zdarzeniami modele mieszanych sygnałów w Desktop.
- [Rozwiązywanie problemów](../Simulation-Troubleshooting/) — diagnozowanie połączeń, modeli i problemów numerycznych.
- [Samouczki](../Simulation-Tutorials/) — pełne, dostępne kursy SPICE i XSPICE z rysunkami gotowymi do uruchomienia.

Dokumentację języka i modeli elementów samego symulatora znajdziesz w oficjalnej [dokumentacji ngspice](https://ngspice.sourceforge.io/docs.html), [podręczniku użytkownika PDF](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf) i [podręczniku HTML](https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml). Podręcznik opisuje ngspice jako całość; TinyCAD udostępnia obsługiwane, zintegrowane tryby pracy opisane tutaj, a nie nieograniczoną powłokę poleceń.

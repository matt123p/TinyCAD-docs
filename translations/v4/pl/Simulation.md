---
layout: default
---
# Symulacja i SPICE
{: #simulation-and-spice}

TinyCAD może uruchamiać symulacje obwodów elektronicznych, kreślić wyniki i mierzyć zachowanie obwodu bez opuszczania rysunku. Zintegrowanym silnikiem jest **ngspice**. Zarówno przeglądarka, jak i aplikacja Desktop zawierają własny silnik; w zintegrowanym trybie pracy nie trzeba osobno instalować ngspice.

Dopiero zaczynasz przygodę z symulacją? Zacznij od [kursu SPICE z przewodnikiem](../SPICE-Tutorial/). Aby szybko uzyskać pierwszy wynik, wykonaj poniższe kroki dotyczące dzielnika. Ta dokumentacja wyjaśnia dostępne elementy sterujące i sposób interpretacji wyników.

## Co oblicza symulator obwodów
{: #what-a-circuit-simulator-calculates}

SPICE oznacza *Simulation Program with Integrated Circuit Emphasis* (program symulacyjny z naciskiem na układy scalone). Symulator rozwiązuje model matematyczny połączonego obwodu: rezystory określają zależność napięcia i prądu, kondensatory i cewki magazynują energię, a modele półprzewodników opisują zachowanie nieliniowe. Może wyznaczyć punkt pracy DC, obliczyć przebiegi w czasie i zbadać odpowiedź częstotliwościową małosygnałową.

Schemat określa **połączenia**; model SPICE określa **zachowanie**; analiza określa, **co należy obliczyć**. Wszystkie trzy elementy muszą być poprawne. Realistyczny rysunek wzmacniacza lub procesora nie oznacza, że zawiera on model symulacyjny. Z kolei prosty trójkąt lub prostokąt może zawierać użyteczny model behawioralny.

Symulacja jest przydatna do sprawdzania pomysłów, porównywania wartości elementów i zrozumienia nieoczekiwanej odpowiedzi. Wynik zależy od dostarczonego modelu i warunków. Idealne przewody nie mają przypadkowej rezystancji ani indukcyjności; ogólny model tranzystora nie stanowi pełnej specyfikacji każdego tranzystora. Obciążenie, impedancja zasilania, tolerancje i temperatura są uwzględniane tylko w takim zakresie, w jakim odzwierciedlają je wybrane modele.

## Silniki w przeglądarce i aplikacji Desktop
{: #browser-and-desktop-engines}

| Możliwość | Przeglądarka | Aplikacja Desktop |
| --- | --- | --- |
| Analogowy SPICE, wykresy, pomiary i eksploracja | Dołączony ngspice WebAssembly w procesie roboczym | Dołączony natywny ngspice za pośrednictwem procesu pomocniczego |
| Przenośne biblioteki modelowanej logiki cyfrowej / bloków funkcjonalnych / czujników i interfejsów | Tak | Tak |
| Zdarzeniowe modele kodowe XSPICE | Nieobsługiwane¹ | Tak, dołączone natywne biblioteki modeli kodowych |
| Osobne okna wykresów | Tak | Tak |
| Osobne okna przyrządów wirtualnych | Nie | Tak |

¹ Wersje przeglądarkowe mogą otwierać rysunki z zapisanymi wynikami XSPICE do przeglądania. Uruchamianie XSPICE wymaga aplikacji Desktop.

Obliczenia są wykonywane lokalnie w przeglądarce lub silniku aplikacji Desktop. Wyszukiwanie w bibliotece online jest osobną funkcją. Aktualnie dołączony silnik bazuje na ngspice 47; historia przebiegów wskazuje silnik/kompilację użyte do uzyskania danych. Sprawdzając składnię modeli lub różnice między silnikami, korzystaj z odpowiedniej dokumentacji źródłowej.

## Uruchom pierwszą symulację
{: #run-your-first-simulation}

1. Otwórz **Open Example** na pasku tytułu przeglądarki albo **File → Open Example** w aplikacji Desktop.
2. Wybierz **SPICE tutorial → divider → Open drawing**.
3. Sprawdź obwód: źródło 5 V zasila dwa szeregowo połączone rezystory 1 kΩ. **OUT** to ich punkt środkowy, a dolny przewód jest masą **0**.
4. Wybierz arkusz **divider Simulation** na pasku arkuszy. Ikona przypominająca zegar odróżnia go od arkusza schematu. Otwórz **Setup** i pozostaw wybraną opcję **Operating Point**.
5. Wybierz **Run**. Po zakończeniu otwórz **History** i wybierz nowy ukończony przebieg.
6. Otwórz **Data**. Napięcie w punkcie środkowym wynosi **2.5 V**. Prąd źródła wynosi **−2.5 mA**, ponieważ kierunek odniesienia prądu źródła napięcia w ngspice jest skierowany do jego dodatniego zacisku; w tym obwodzie prąd źródła dostarczającego energię jest ujemny.
7. Zmień rezystor, a następnie uruchom symulację ponownie. Porównaj nowy wynik z pierwotnym przebiegiem.

{% include video-player.html src="/v4/videos/simulation/first-simulation.mp4" poster="/v4/videos/simulation/first-simulation.jpg" caption="Otwórz dołączony dzielnik, sprawdź jego konfigurację i uruchom nowy przebieg ngspice w przeglądarce. Tabela Data potwierdza napięcie 2.5 V w punkcie OUT i prąd −2.5 mA przez źródło." %}

Przykład zawiera zachowany przebieg referencyjny. Natychmiastowe wyświetlenie wyniku po otwarciu przykładu nie oznacza, że wykonano nowe obliczenie. **History** oddziela zapisane wyniki od przebiegu utworzonego poleceniem Run.

## Utwórz nową symulację
{: #build-a-new-simulation}

1. Umieść modelowane elementy z **Standard → SPICE essentials** albo użyj podmenu **Simulation → SPICE components** na pasku narzędzi. **More…** otwiera pełną kolekcję SPICE essentials. Symbole zawierają już [dołączony model i mapowanie wyprowadzeń](../Bundled-SPICE-Models/).
2. Połącz wyprowadzenia przewodami i nadaj ważnym węzłom czytelne etykiety. Zapewnij rzeczywiste połączenie z masą **0**: polecenie **Simulation → SPICE → Insert Ground** wstawia właściwy symbol zasilania.
3. Dodaj sygnał pobudzający poleceniem **Simulation → SPICE → Insert Source**. Ustaw typ napięciowy/prądowy i przebieg. Dodaj [sondy](../Simulation-Sources-and-Instruments/#probes-and-ground), jeśli chcesz wygodnie tworzyć wykresy.
4. Wybierz **Simulation → Simulate**, aby dodać **Simulation sheet**.
5. Wybierz analizę i jej ustawienia na karcie **Setup**. Ustaw parametry lub dołącz własny tekst modelu, jeśli obwód tego wymaga.
6. Wybierz sygnały, uruchom symulację i sprawdź panel **Simulation charts** oraz widoki **Data**, **History** i **Diagnostics** arkusza. Popraw zgłoszone błędy połączeń lub modeli, zanim zaczniesz polegać na wynikach.

Na arkuszu symulacji **Run** i **Stop** są dostępne na głównym pasku narzędzi. Arkusz otwiera się z kartą **Setup**. Karty **History** i **Diagnostics** są widoczne po uruchomieniu symulacji; karty **Measurements** i **Data** pojawiają się, gdy dostępne są dane liczbowe. Narzędzia Circuit Explorer znajdują się w Setup poniżej ustawień analizy; dodawaj tylko potrzebne narzędzia za pomocą **Add tools**.

Wszystkie arkusze schematów na rysunku tworzą **jeden obwód**. Każdy arkusz symulacji ma osobną konfigurację: analizę, parametry, dołączone modele, wybór sygnałów, instrukcje i historię przebiegów. Dodanie drugiego arkusza symulacji nie tworzy drugiego, odizolowanego obwodu schematowego. Umożliwia zbadanie tego samego obwodu na inny sposób, na przykład analizę AC obok analizy stanów przejściowych.

Używaj odrębnej nazwy konfiguracji dla każdego badania. Duplikowanie konfiguracji kopiuje jej definicje, ale nie przebiegi. W danym momencie uruchamiany jest tylko jeden przebieg; przemiatania i badania wykonują kolejne przypadki sekwencyjnie.

## Masa, połączenia i modele
{: #ground-connections-and-models}

Odniesieniem napięcia w SPICE jest węzeł **0**. Symbol zasilania lub etykieta sieci o dokładnie takiej wartości ustanawia punkt odniesienia. Sama nazwa **GND** jest zwykłą nazwą sieci, chyba że zostanie również połączona z węzłem 0. Pływające obwody, niezasilane wyprowadzenia zasilania modelu i niepodłączone powroty źródeł to częste przyczyny problemów przy pierwszym uruchomieniu.

Przewody muszą łączyć się z wyprowadzeniami w ich punktach połączeń. Tekst umieszczony w pobliżu nie tworzy połączenia. Przewód dotykający końca innego przewodu lub gniazda elementu może utworzyć węzeł, nawet jeśli nie było to zamierzone. Skorzystaj z [połączeń przewodów](../Wires/) i wygenerowanej listy połączeń, aby rozstrzygnąć niejednoznaczności na rysunku.

Każdy symulowany element wymaga prawidłowego szablonu, modelu i mapowania wyprowadzeń. Sprawdź je we właściwościach **SPICE** wstawionego elementu. Przed dołączeniem modeli producenta lub dostosowaniem symbolu przeznaczonego wyłącznie do rysowania zapoznaj się z sekcją [Modele SPICE i wynikowa lista połączeń](../SPICE-output/).

## Setup, Run i Stop
{: #setup-run-and-stop}

**Run** rozpoczyna nowy przebieg z użyciem bieżącego obwodu i konfiguracji. Wykresy mogą być aktualizowane w miarę napływania danych. **Stop** kończy przebieg i zachowuje dane, które już napłynęły; jego stan i dostępność informują o tym, co zostało zachowane. Nie jest to polecenie wstrzymania i wznowienia. Aby ponownie wykonać obliczenia, rozpocznij kolejny przebieg.

Zmiany obwodu, modelu lub konfiguracji powodują, że poprzedni wynik staje się historyczny. TinyCAD oznacza wyniki wymagające ponownego uruchomienia, zamiast przedstawiać stare wartości jako pomiary zmienionego obwodu. Historia zapisuje informacje o tożsamości obwodu/ustawień, silniku, czasie i wyniku. Wybranie wcześniejszego przebiegu wybiera wcześniejsze wyniki; nie przywraca starego schematu tak jak operacja cofania.

## Zapisywanie i udostępnianie wyników
{: #save-and-share-results}

Zapisz rysunek, aby zachować jego obwód, modele, konfiguracje i uzyskane wyniki. TinyCAD automatycznie używa **`.dzn`**, gdy rysunek zawiera elementy symulacyjne, ustawienia lub wyniki. **Save without results** zachowuje definicje symulacji oraz przechwycone metadane skalarne/raportowe, pomijając tablice numerycznych przebiegów; wykresy wymagające tych tablic będą wtedy wymagać nowego przebiegu.

Zachowywane dane liczbowe są ograniczone do 64 MiB na przebieg i 256 MiB na rysunek, przy maksymalnie 1 000 przebiegach na konfigurację. Długie badania z małym krokiem czasowym mogą osiągnąć te limity. Eksportuj ważne wykresy i dane CSV oraz usuwaj wyniki, których już nie potrzebujesz. Zapisz załączone modele wraz z rysunkiem, aby odbiorca nie potrzebował dostępu do lokalnych ścieżek plików.

## Rysunki symulacyjne `.dzn`
{: #dzn-simulation-drawings}
{: #dzn-simulation-drawings}

**`.dzn` to skompresowany format rysunku TinyCAD, obsługiwany od TinyCAD v4.** Zawiera schemat, osadzone symbole, arkusze symulacji, ustawienia źródeł, dołączony tekst modeli i wszelkie zachowane przebiegi w jednym pliku opartym na ZIP. Numeryczne dane przebiegów są wydajnie przechowywane w kontenerze, w tym wyniki AC w postaci zespolonej. Plik otwiera się i zapisuje za pomocą standardowych poleceń **File → Open**, **Save** i **Save As**; ręczne rozpakowywanie nie jest potrzebne.

Zwykłe rysunki używają formatu XML **`.dsn`**. TinyCAD automatycznie wybiera `.dzn`, gdy obecna jest zawartość symulacyjna, w tym źródła, sondy, przyrządy wirtualne, atrybuty SPICE, masa o nazwie `0`, arkusze symulacji lub wyniki. **Save without results** nadal używa `.dzn`, gdy zachowuje konfigurację symulacji: usuwa duże tablice przebiegów, a nie definicje eksperymentu.

Użyj **Save without results**, aby utworzyć mniejszą kopię do udostępnienia, gdy odbiorca może ponownie uruchomić symulację. Zachowaj wyniki, jeśli odbiorca ma przeglądać przebieg, pomiary i szczegóły silnika bez ponownego uruchamiania. Zapisany przebieg opisuje obwód z chwili jego wykonania; nie zastępuje ponownego uruchomienia symulacji po edycji.

TinyCAD v3 nie może otwierać plików `.dzn`. Zmiana rozszerzenia na `.dsn` nie konwertuje formatu ani nie zapewnia zgodności nowych rekordów symulacji z v3. Wymieniając projekt ze starszą wersją TinyCAD, zachowaj kopię oryginalną. Eksport `.cir` to tekst SPICE dla symulatora; różni się od obu formatów rysunków TinyCAD.

## Dalsza lektura dokumentacji
{: #continue-with-the-reference}

- [Analizy i ustawienia](../Simulation-Analyses/) — DC, stany przejściowe, AC, szum, funkcja przenoszenia i bieguny-zera.
- [Źródła, sondy i przyrządy wirtualne](../Simulation-Sources-and-Instruments/) — sygnały pobudzające, połączenia pomiarowe i obciążenie.
- [Wykresy, pomiary i Circuit Explorer](../Simulation-Charts-and-Measurements/) — dostrajanie, przemiatania, wymagania i badania.
- [Dołączone modele SPICE](../Bundled-SPICE-Models/) — wyszukiwanie, dołączanie i dostosowywanie modelu.
- [Modele SPICE i wynikowa lista połączeń](../SPICE-output/) — szablony, pliki modeli i symulacja zewnętrzna.
- [XSPICE i symulacja cyfrowa](../XSPICE/) — zdarzeniowe i mieszane modele sygnałowe w aplikacji Desktop.
- [Rozwiązywanie problemów](../Simulation-Troubleshooting/) — diagnozowanie połączeń, modeli i problemów numerycznych.
- [Samouczki](../Simulation-Tutorials/) — kompletne, istniejące kursy SPICE i XSPICE z rysunkami gotowymi do uruchomienia.

Dokumentację języka i urządzeń symulatora znajdziesz w oficjalnej [dokumentacji ngspice](https://ngspice.sourceforge.io/docs.html), [podręczniku użytkownika w formacie PDF](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf) i [podręczniku HTML](https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml). Podręcznik opisuje ngspice jako całość; TinyCAD udostępnia opisane tutaj obsługiwane zintegrowane sposoby pracy, a nie nieograniczoną powłokę poleceń.

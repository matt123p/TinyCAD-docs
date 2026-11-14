---
layout: default
---
# Dziennik zmian TinyCAD
{: #tinycad-changelog}


## Nieopublikowane
{: #unreleased}
{: #unreleased}

### Dodano
{: #added}

- [Zintegrowana symulacja](../Simulation/) z użyciem lokalnego ngspice w przeglądarce i aplikacji Desktop, obejmująca analizę punktu pracy, analizę stanów nieustalonych, AC, przemiatanie DC, szumy, transmitancję oraz analizę biegunów i zer. [Zdarzeniowy XSPICE](../XSPICE/) jest obsługiwany w aplikacji Desktop.
- [Źródła, sondy i przyrządy wirtualne](../Simulation-Sources-and-Instruments/), w tym oscyloskopy, multimetry, generatory funkcyjne i zasilacze laboratoryjne.
- [Eksplorator obwodów](../Simulation-Charts-and-Measurements/) do dostrajania, przemiatań, nazwanych pomiarów, wymagań, nakładek DC, analiz tolerancji, przypadków testowych oraz badania mocy i naprężeń.
- [Skompresowane`.dzn` rysunki](../Simulation/#dzn-simulation-drawings), które przechowują razem obwód, modele, ustawienia symulacji i opcjonalne wyniki. Historia uruchomień i eksport wyników ułatwiają porównywanie i udostępnianie; zapisanie bez wyników tworzy mniejszą kopię.
- [Dołączone biblioteki](../Bundled-Libraries/) układów sieciowych, wbudowanych płytek i modułów inteligentnego domu, sprzętu audio i laboratoryjnego, silników i układów ruchu oraz instalacji solarnych i akumulatorowych, a także kolekcje modeli SPICE, logiki, funkcjonalne i czujników. Wybierz je na karcie Standard w selektorze bibliotek.
- [Siedem edytowalnych przykładów rysunków](../Bundled-Examples/), obejmujących oryginalny wzmacniacz tranzystorowy, sieć biurową, stację klimatyczno-wyświetlającą ESP32, dom z instalacją solarną i akumulatorową, studio podcastowe, stanowisko laboratoryjne i stanowisko sterowania silnikiem, z osadzonymi symbolami i objaśnieniami.
- [Samouczki SPICE i XSPICE ](../Simulation-Tutorials/): jedenaście rozdziałów analogowych i sześć cyfrowych, z 28 odrębnymi rysunkami gotowymi do uruchomienia, definicjami modeli, ustawieniami analizy i zachowanymi przebiegami referencyjnymi.
- [Porządkowanie układu](../Layout-Tidy-Up/) dla całych arkuszy lub wybranych elementów, z siłą działania Niska/Średnia/Wysoka, anulowaniem, sprawdzaniem połączeń i cofnięciem jednym krokiem.

### Zmieniono
{: #changed}

- Otwórz przykład (Open Example) i Objaśnienie (Explanation) znajdują się na pasku tytułu przeglądarki. W aplikacji Desktop dostępne są polecenia Plik → Otwórz przykład (File → Open Example) oraz Widok → Pokaż objaśnienie (View → View Explanation).
- Menu Widok (View) aplikacji Desktop zawiera polecenie Pokaż wykresy (Show Charts); menu Symulacja (Simulation) na pasku narzędzi nadal zawiera przełącznik wykresów.
- Automatyczny układ (Auto-layout) znajduje się obok polecenia Symulacja na pasku narzędzi i jest również dostępny w menu Narzędzia (Tools) aplikacji Desktop.

### Naprawiono
{: #fixed}

- Przywrócono możliwość przeciągania podglądów grafiki komponentów w wynikach selektora Standard, My Libraries i Online.
- Zmniejszono grafikę mikrokontrolerów, czujników i wyświetlaczy do praktycznych rozmiarów układu strony, zachowując identyfikatory wyprowadzeń i położenie przewodów.
- Zapobiegnięto tworzeniu niepożądanych połączeń przez zmiany układu na końcach przewodów, zagięciach i gniazdach; poprawiono wyprowadzenia pinów i usunięto zbędne objazdy.
- Usunięto małe pola etykiet zacisków nakładające się na tekst w symbolach laboratoryjnych i układów sterowania ruchem oraz zaktualizowano powiązane przykłady.
- Ulepszono raportowanie błędów symulacji i diagnostykę, uruchamianie wzmacniaczy w przeglądarce, wyskakujące okna wykresów oraz niezależne panele objaśnień przykładów.

### Podręcznik
{: #manual}

- Dodano wskazówki dotyczące znajdowania i używania dołączonych bibliotek i przykładów oraz zastąpiono opis SPICE ograniczony do eksportu informacjami o zintegrowanym przepływie pracy symulacji.
- Dodano opisy analiz, modeli, przyrządów, wykresów, pomiarów i rozwiązywania problemów, wraz z odnośnikami do oficjalnej dokumentacji ngspice i XSPICE.
- Uwzględniono wszystkie istniejące kursy, rysunki/listy połączeń do pobrania oraz dziesięć filmów instruktażowych dotyczących bibliotek, przykładów, porządkowania układu, połączeń wieloarkuszowych i SPICE.
- Doprecyzowano [różnice między funkcjami](../Feature-Differences/), w tym zgodność `.dzn` i tekstowych pól Markdown oraz obsługę XSPICE w przeglądarce.
- Zaktualizowano podręcznik we wszystkich ośmiu obsługiwanych językach, w tym nawigację, nowe strony referencyjne, teksty samouczków i napisy do filmów.

## v4.0.11
{: #v4011}
{: #v4011}

To wydanie wprowadza sformatowane notatki Markdown, wektorowy eksport SVG i elementy sterujące trasowaniem przewodów.

- [Pola tekstowe Markdown](../Text/#markdown-text-boxes): sformatowane notatki z listami, listami zadań i blokami kodu; ten sam renderer wektorowy dla rysunku, eksportu SVG i PDF.
- Formatowanie źródła na żywo pozostawia widoczne edytowalne znaczniki i uwzględnia wybraną czcionkę bazową, zapewniając zgodne położenie kursora, zaznaczanie i zawijanie tekstu.
- [Tryby trasowania przewodów](../Wires/#wire-routing-modes): kompaktowy selektor trybów 90°, 45° i Swobodny (Free), zachowujący aktywny podgląd.
- Przycisk lupy pojawia się tylko po użyciu dotyku na obszarze rysunku.

## v4.0.10 — 6 listopada 2026
{: #v4010--6-november-2026}
{: #v4010}

- Pasek narzędzi edytora pozostaje widoczny, gdy panele bibliotek lub schematów wymagają więcej miejsca w pionie.

## v4.0.9 — 4 listopada 2026
{: #v409--4-november-2026}

### Dodano
{: #added-1}

- [Sterowanie dotykowe](../Touch-controls/), w tym bezpośrednią edycję, przesuwanie dwoma palcami
  i powiększanie przez szczypanie oraz lupę powiększającą z elementami sterującymi Kliknij, Przeciągnij/upuść, Menu i Zamknij
  do precyzyjnego umieszczania.
- [Zmienny rozmiar panelu bibliotek i sortowanie symboli](../Using-Symbol-Libraries/),
  w tym alfabetyczne porządkowanie wyników wyszukiwania.
- [Tymczasowe ukrywanie wybranych obiektów](../User-guide/#temporarily-hiding-objects)
  oraz polecenie przywracające wszystkie ukryte obiekty na bieżącym arkuszu.
- Polskie tłumaczenie interfejsu i przetłumaczony tekst w oknie dialogowym Zamień symbol (Replace Symbol).

### Naprawiono
{: #fixed-1}

- [Widoczność siatki i przyciąganie](../Snap-to-Grid/) działają niezależnie, a
  ruch za pomocą klawiatury uwzględnia wyłączone przyciąganie.
- Obrazy bitmapowe są renderowane w umieszczonych symbolach bibliotecznych.
- [Escape anuluje operacje rysowania i umieszczania](../Shortcuts/), również wtedy,
  gdy fokus jest ustawiony na elementach sterujących paska narzędzi.
- Anulowanie monitu o niezapisane zmiany w aplikacji Desktop usuwa oczekujące polecenie zakończenia.
- Powiększanie przez szczypanie na obszarze rysunku nie kumuluje się już z powiększeniem strony w przeglądarce.
- Ulepszono pozycjonowanie lupy dotykowej, informację zwrotną wskaźnika, obsługę gestów i przeciąganie.
- Ulepszono działanie okna Informacje w aplikacji Desktop i systemie macOS.

### Pakowanie i konserwacja
{: #packaging-and-maintenance}

- Zaktualizowano zależności w celu usunięcia luk bezpieczeństwa.
- Usunięto pakiety Linux ARMv7, ponieważ środowisko uruchomieniowe Electron obsługuje Linux x64
  i ARM64. Pakiety Snap są przeznaczone dla x64; pakiety Debian dla x64 i ARM64.

[Pobieranie wydania](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 3 maja 2026
{: #v408--3-may-2026}

- Naprawiono obracanie symboli zasilania podczas zapisywania i ponownego otwierania rysunku.
- Zachowano typy sieci przewodów podczas zapisywania i wczytywania, dzięki czemu kolory przewodów pozostają spójne.

[Pobieranie wydania](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 13 kwietnia 2026
{: #v407--13-april-2026}

- Naprawiono drukowanie w aplikacji Desktop.
- Ulepszono powiększanie przez szczypanie, aby zapobiec niekontrolowanemu powiększaniu.
- Dodano renderowanie symboli bibliotecznych po stronie serwera.
- Zautomatyzowano oznaczanie kompilacji produkcyjnych i tworzenie wydań GitHub.

[Pobieranie wydania](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 29 marca 2026
{: #v406--29-march-2026}

To wydanie zawiera zmiany programistyczne wprowadzone w wersji 4.0.5; nie ma
osobnego znacznika 4.0.5 ani opublikowanego wydania GitHub.

### Dodano
{: #added-2}

- Automatyczne trasowanie przewodów.
- Zamień symbol (Replace Symbol), aby zastąpić istniejący komponent innym symbolem bibliotecznym.
- Automatyczne przewijanie podczas przeciągania w pobliżu krawędzi rysunku.
- Dwukrotne kliknięcie zaznacza cały przewód, a trzykrotne zaznacza elementy po drugiej stronie
  złączy i rozgałęzień typu T.
- Opcja wyłączania wskaźnika połączenia etykiety.

### Naprawiono i ulepszono
{: #fixed-and-improved}

- Foldery bibliotek są domyślnie otwarte i rozwijają się podczas wyszukiwania.
- Ulepszono edycję tekstu, skróty schowka, klawisze nawigacji i skróty klawiaturowe,
  gdy fokus jest ustawiony na rysunku.
- Naprawiono zaznaczanie z użyciem Ctrl-kliknięcia, przeciąganie wielu zaznaczonych obiektów i elementy sterujące wartościami.
- Prostokąty rysowania i zaznaczania można przeciągać w dowolnym kierunku.
- Naprawiono zamykanie w systemie macOS i ograniczono wielokrotne wczytywanie bibliotek w systemie macOS.
- Naprawiono pozycjonowanie etykiet, tłumaczenie selektora kolorów i przetwarzanie listy połączeń w tle.
- Poprawiono nazwy instalatora Windows i kompilacji AppX.

[Pobieranie wydania](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — znacznik kodu źródłowego, 19 marca 2026
{: #v404--source-tag-19-march-2026}

- Dodano [foldery bibliotek](../Library-Folders/) do porządkowania bibliotek symboli.
- Dodano niderlandzkie tłumaczenie interfejsu.
- Dodano artefakty kompilacji przeglądarkowej i wdrażanie w GitHub Pages.
- Naprawiono pakowanie Snap.

[Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — znacznik kodu źródłowego, 15 marca 2026
{: #v403--source-tag-15-march-2026}

- Dostosowano obsługę uruchamiania w systemie macOS, aby rozwiązać problem z uruchamianiem.

Znacznik kodu źródłowego to 4.0.3, choć metadane pakietu nadal wskazują 4.0.2.

[Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 14 marca 2026
{: #v402--14-march-2026}

- Naprawiono okno dialogowe zamykania z niezapisanymi zmianami w systemie Linux.
- Dodano pakiety Debian x64 obok istniejących kompilacji ARM.
- Zaktualizowano narzędzia kompilacji i konfigurację pakowania.

[Pobieranie wydania](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — początkowy znacznik kodu źródłowego, 13 marca 2026
{: #v401--initial-source-tag-13-march-2026}

Pierwsza migawka kodu źródłowego zawiera już przepisany TinyCAD do użytku w przeglądarce i aplikacji
Desktop, z edycją schematów, bibliotekami symboli, obsługą istniejących plików
`.dsn` i `.tclib` oraz procedurami eksportu. Wcześniejszy rozwój nie jest
odnotowany w tym repozytorium.

[Początkowa migawka kodu źródłowego](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- Wstecz do [spisu treści v4](../CONTENTS/)

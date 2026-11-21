---
layout: default
---
# Dziennik zmian TinyCAD
{: #tinycad-changelog}


## Niewydane
{: #unreleased}

### Dodano
{: #unreleased-added}

- [Dołączone modele SPICE](../SPICE-output/) z wyszukiwaniem offline, opisami modeli, linkami do źródeł i mapowaniem pinów. Wszystkie 29 symboli z zestawu SPICE essentials mają połączone modele domyślne, w tym podstawowe elementy pasywne oraz obudowy OpenJellyBean LM358 i LM324.
- [Asystent AI](../AI-Assistant/) w wersji Desktop może sprawdzać modele i na żądanie skonfigurować połączoną definicję lub definicję Custom na potrzeby obsługi SPICE.
- [Import symboli KiCad](../Importing-Symbols-from-KiCAD/) może przenieść obsługiwane osadzone modele SPICE lub modele z plików towarzyszących do TinyCAD jako edytowalne definicje Custom.

### Zmieniono
{: #unreleased-changed}

- Standardowe elementy w samouczkach SPICE i XSPICE korzystają z połączonych modeli i zachowują oryginalne wyniki symulacji.
- W przypadku elementów wstawianych ze standardowych bibliotek wyświetlane jest edytowalne pole Name. Dołączone rysunki urządzeń i sieci zawierają notatki sformatowane w Markdown.

## v4.1.1 — 20 listopada 2026
{: #v411}

- Naprawiono uruchamianie wersji Snap w systemie Linux przez dołączenie bibliotek wykonawczych Electron i używanie XWayland na pulpitach Wayland.

[Pobieranie wydania](https://github.com/matt123p/TinyCADv4/releases/tag/v4.1.1)

## v4.1.0 — 18 listopada 2026
{: #v410}

### Dodano
{: #added}

- [Edycja symboli, bibliotek i obwodów wspomagana przez AI ](../AI-Assistant/), w tym załączone karty katalogowe/obrazy, dołączone i internetowe wyszukiwanie symboli, bezpośrednie edycje aktywnego dokumentu, zmiany możliwe do cofnięcia, ustawienia dostawcy/modelu oraz lokalne połączenia Ollama.

- [Zintegrowana symulacja](../Simulation/) z użyciem lokalnego ngspice w przeglądarce i aplikacji Desktop, obejmująca analizy punktu pracy, stanów nieustalonych, AC, przemiatania DC, szumów, funkcji przenoszenia oraz biegunów i zer. [Zdarzeniowe XSPICE](../XSPICE/) jest obsługiwane w aplikacji Desktop.
- [Źródła, sondy i wirtualne przyrządy](../Simulation-Sources-and-Instruments/), w tym oscyloskopy, multimetry, generatory funkcyjne i zasilacze laboratoryjne.
- [Eksplorator obwodów](../Simulation-Charts-and-Measurements/) do strojenia, przemiatań, nazwanych pomiarów, wymagań, nakładek DC, analiz tolerancji, przypadków testowych oraz badania mocy i obciążeń.
- Rysunki [skompresowane `.dzn`](../Simulation/#dzn-simulation-drawings), zawierające obwód, modele, ustawienia symulacji i opcjonalne wyniki. Historia uruchomień i eksporty wyników ułatwiają porównywanie i udostępnianie; zapisanie bez wyników tworzy mniejszą kopię.
- [Dołączone biblioteki](../Bundled-Libraries/) dla układów sieciowych, płytek wbudowanych i modułów inteligentnego domu, sprzętu audio i laboratoryjnego, silników i sterowania ruchem oraz planowania instalacji solarnych i akumulatorowych, a także kolekcje modeli SPICE, układów logicznych, funkcjonalnych i czujników. Wybierz je na karcie Standard w selektorze bibliotek.
- [Siedem edytowalnych przykładów rysunków](../Bundled-Examples/) obejmujących oryginalny wzmacniacz tranzystorowy, sieć biurową, stację klimatyczno-wyświetlającą ESP32, dom z zasilaniem solarnym i akumulatorowym, studio podcastowe, stanowisko laboratoryjne oraz stanowisko sterowania silnikiem, z osadzonymi symbolami i objaśnieniami.
- [Samouczki SPICE i XSPICE](../Simulation-Tutorials/): jedenaście rozdziałów analogowych i sześć cyfrowych, z 28 odrębnymi, uruchamialnymi rysunkami, definicjami modeli, ustawieniami analiz i zachowanymi przebiegami referencyjnymi.
- [Porządkowanie układu](../Layout-Tidy-Up/) dla całych arkuszy lub zaznaczonych elementów, z poziomami siły Low/Medium/High, możliwością anulowania, kontrolą połączeń i funkcją cofania jednym krokiem.

### Zmieniono
{: #changed}

- Polecenia Open Example i Explanation znajdują się na pasku tytułu przeglądarki. W aplikacji Desktop dostępne są File → Open Example i View → View Explanation.
- Menu View aplikacji Desktop zawiera polecenie Show Charts; w menu Simulation na pasku narzędzi pozostawiono przełącznik wykresów.
- Funkcja Auto-layout znajduje się obok Simulation na pasku narzędzi i jest również dostępna w menu Tools aplikacji Desktop.

### Naprawiono
{: #fixed}

- Przywrócono przeciągane podglądy grafiki komponentów w wynikach selektorów Standard, My Libraries i Online.
- Zmniejszono grafikę sterowników wbudowanych, czujników i wyświetlaczy do praktycznych rozmiarów układu strony, zachowując tożsamość pinów i położenie przewodów.
- Zapobiegano tworzeniu niepożądanych połączeń przez zmiany układu na końcach przewodów, zagięciach i gniazdach; poprawiono wyprowadzenia pinów i usunięto zbędne objazdy.
- Usunięto małe pola etykiet zacisków nakładające się na tekst w symbolach laboratoryjnych i sterowania ruchem oraz zaktualizowano powiązane przykłady.
- Ulepszono raportowanie błędów symulacji i diagnostykę, uruchamianie wzmacniaczy w przeglądarce, wyskakujące okna wykresów oraz niezależne panele objaśnień przykładów.

- Zastosuj kolor tła strony, gdy linijki są ukryte, i napraw awarię występującą podczas zaznaczania ukrytego pinu.

### Podręcznik
{: #manual}

- Dodano [przewodnik po obrazach](../Images/) obejmujący kopiowanie i wklejanie, import plików i konwersję formatów, stałe proporcje, przycinanie pikseli oraz zapisywanie obrazów wraz z rysunkiem.

- Dodano kompletny [przewodnik po asystencie AI ](../AI-Assistant/) obejmujący tworzenie symboli/bibliotek i obwodów, konfigurację dostawcy ze zrzutami ekranu, lokalną instancję Ollama, załączniki do dokumentów, przykładowe polecenia oraz weryfikację wygenerowanych wyników.

- Dodano przewodniki dotyczące znajdowania i używania dołączonych bibliotek i przykładów oraz zastąpiono opis SPICE ograniczony do eksportu zintegrowanym procesem symulacji.
- Dodano materiały referencyjne dotyczące analiz, modeli, przyrządów, wykresów, pomiarów i rozwiązywania problemów, wraz z odnośnikami do oficjalnej dokumentacji ngspice i XSPICE.
- Dołączono wszystkie istniejące kursy, rysunki/listy połączeń do pobrania oraz dziesięć filmowych instruktaży dotyczących bibliotek, przykładów, porządkowania układu, połączeń między arkuszami i SPICE.
- Doprecyzowano [różnice między funkcjami](../Feature-Differences/), w tym `.dzn` oraz zgodność pól tekstowych Markdown i obsługę XSPICE w przeglądarce.
- Zaktualizowano podręcznik we wszystkich ośmiu obsługiwanych językach, w tym nawigację, nowe strony referencyjne, tekst samouczków i napisy do filmów.

[Pobieranie wydania](https://github.com/matt123p/TinyCADv4/releases/tag/v4.1.0)

## v4.0.11
{: #v4011}
{: #v4011}

To wydanie wprowadza sformatowane notatki Markdown, wektorowy zapis SVG i ustawienia trasowania przewodów.

- [Pola tekstowe Markdown](../Text/#markdown-text-boxes): sformatowane notatki z listami, listami zadań i blokami kodu; ten sam renderer wektorowy dla rysunku, eksportu SVG i PDF.
- Formatowanie źródła na żywo pozostawia widoczne edytowalne znaczniki i uwzględnia wybraną czcionkę bazową, zapewniając zgodne położenie kursora, zaznaczanie i zawijanie tekstu.
- [Tryby trasowania przewodów](../Wires/#wire-routing-modes): kompaktowy selektor trasowania 90°, 45° i Free, zachowujący aktywny podgląd.
- Przycisk lupy pojawia się dopiero po użyciu dotyku na obszarze roboczym rysunku.

## v4.0.10 — 6 listopada 2026
{: #v4010--6-november-2026}
{: #v4010}

- Pasek narzędzi edytora pozostaje widoczny, gdy panele biblioteki lub schematu wymagają więcej miejsca w pionie.

## v4.0.9 — 4 listopada 2026
{: #v409--4-november-2026}

### Dodano
{: #added-1}

- [Sterowanie dotykowe](../Touch-controls/), w tym bezpośrednią edycję, przesuwanie dwoma palcami
  i powiększanie przez uszczypnięcie oraz lupę z elementami Click, Drag/Drop, Menu i Close
  ułatwiającymi precyzyjne umieszczanie.
- [Zmienny rozmiar panelu biblioteki i sortowanie symboli](../Using-Symbol-Libraries/),
  w tym alfabetyczne sortowanie wyników wyszukiwania.
- [Tymczasowe ukrywanie zaznaczonych obiektów](../User-guide/#temporarily-hiding-objects)
  oraz polecenie przywracania wszystkich ukrytych obiektów na bieżącym arkuszu.
- Polskie tłumaczenie interfejsu i przetłumaczony tekst w oknie Replace Symbol.

### Naprawiono
{: #fixed-1}

- [Widoczność siatki i przyciąganie](../Snap-to-Grid/) działają niezależnie, a
  przesuwanie za pomocą klawiatury uwzględnia wyłączenie przyciągania.
- Obrazy bitmapowe są renderowane w umieszczonych symbolach bibliotecznych.
- [Escape anuluje rysowanie i umieszczanie](../Shortcuts/), także gdy
  fokus znajduje się na elementach paska narzędzi.
- Anulowanie monitu o niezapisanych zmianach w aplikacji Desktop usuwa oczekujące zamknięcie.
- Powiększanie przez uszczypnięcie na obszarze roboczym nie nakłada się już na powiększenie strony w przeglądarce.
- Ulepszono położenie lupy dotykowej, informację zwrotną kursora, obsługę gestów i przeciąganie.
- Ulepszono działanie okna About w aplikacji Desktop i systemie macOS.

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
- Ulepszono powiększanie przez uszczypnięcie, aby zapobiec niekontrolowanemu powiększaniu.
- Dodano renderowanie symboli bibliotecznych po stronie serwera.
- Zautomatyzowano oznaczanie kompilacji produkcyjnych i tworzenie wydań GitHub.

[Pobieranie wydania](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 29 marca 2026
{: #v406--29-march-2026}

To wydanie zawiera zmiany programistyczne wprowadzone w wersji 4.0.5; nie ma
oddzielnego tagu 4.0.5 ani opublikowanego wydania GitHub.

### Dodano
{: #added-2}

- Automatyczne trasowanie przewodów.
- Replace Symbol do zmiany istniejącego komponentu na inny symbol z biblioteki.
- Automatyczne przewijanie podczas przeciągania w pobliżu krawędzi rysunku.
- Zaznaczanie całego przewodu dwukrotnym kliknięciem i zaznaczanie poza
  węzłami i rozgałęzieniami trójdrożnymi trzykrotnym kliknięciem.
- Opcję wyłączenia wskaźnika połączenia etykiety.

### Naprawiono i ulepszono
{: #fixed-and-improved}

- Foldery bibliotek są domyślnie otwarte i rozwijają się podczas wyszukiwania.
- Ulepszono edycję tekstu, skróty schowka, klawisze nawigacyjne i skróty
  klawiaturowe, gdy fokus znajduje się na rysunku.
- Naprawiono zaznaczanie Ctrl-kliknięciem, przeciąganie wielu zaznaczonych obiektów i pokrętła.
- Prostokąty rysowania i zaznaczania można przeciągać w dowolnym kierunku.
- Naprawiono zamykanie w systemie macOS i ograniczono wielokrotne ładowanie bibliotek w macOS.
- Naprawiono pozycjonowanie etykiet, tłumaczenie selektora kolorów i przetwarzanie list sieci połączeń w tle.
- Poprawiono nazwy instalatora Windows i kompilacji AppX.

[Pobieranie wydania](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — tag źródłowy, 19 marca 2026
{: #v404--source-tag-19-march-2026}

- Dodano [foldery bibliotek](../Library-Folders/) do porządkowania bibliotek symboli.
- Dodano niderlandzkie tłumaczenie interfejsu.
- Dodano artefakty kompilacji przeglądarkowej i wdrażanie w GitHub Pages.
- Naprawiono pakowanie Snap.

[Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — tag źródłowy, 15 marca 2026
{: #v403--source-tag-15-march-2026}

- Zmieniono obsługę uruchamiania macOS, aby rozwiązać problem z uruchomieniem.

Tag źródłowy to 4.0.3, chociaż metadane pakietu nadal podają wersję 4.0.2.

[Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 14 marca 2026
{: #v402--14-march-2026}

- Naprawiono okno zamykania z niezapisanymi zmianami w systemie Linux.
- Dodano pakiety Debian x64 obok istniejących kompilacji ARM.
- Zaktualizowano narzędzia kompilacji i konfigurację pakowania.

[Pobieranie wydania](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — początkowy tag źródłowy, 13 marca 2026
{: #v401--initial-source-tag-13-march-2026}

Pierwsza migawka kodu źródłowego zawiera już przepisany TinyCAD do użytku w przeglądarce i
na komputerze, z edycją schematów, bibliotekami symboli, obsługą istniejących
plików `.dsn` i `.tclib` oraz procesami eksportu. Wcześniejszy rozwój nie jest
odnotowany w tym repozytorium.

[Początkowa migawka kodu źródłowego](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- Wróć do [spisu treści v4](../CONTENTS/)

---
layout: default
---
# Dziennik zmian TinyCAD
{: #tinycad-changelog}


## v4.0.11
{: #v4011}
{: #v4011}

To wydanie dodaje sformatowane notatki Markdown, wektorowy eksport SVG oraz ustawienia trasowania przewodów.

- [Pola tekstowe Markdown](../Text/#markdown-text-boxes): sformatowane notatki z listami, listami zadań i blokami kodu; ten sam renderer wektorowy dla rysunku, eksportu SVG i PDF.
- Formatowanie źródła na bieżąco zachowuje widoczność edytowalnych znaczników i stosuje wybraną czcionkę bazową, zapewniając zgodne położenie kursora, zaznaczanie i zawijanie tekstu.
- [Tryby trasowania przewodów](../Wires/#wire-routing-modes): kompaktowy selektor trasowania pod kątem 90°, 45° i swobodnego, zachowujący aktywny podgląd.
- Przycisk lupy pojawia się tylko po wprowadzeniu dotyku na obszarze rysunku.

## v4.0.10 — 6 listopada 2026
{: #v4010--6-november-2026}
{: #v4010}

- Pasek narzędzi edytora pozostaje widoczny, gdy panele bibliotek lub schematów wymagają więcej miejsca w pionie.

## v4.0.9 — 4 listopada 2026
{: #v409--4-november-2026}

### Dodano
{: #added}

- [Obsługa dotyku](../Touch-controls/), w tym bezpośrednią edycję, przesuwanie dwoma palcami
  i powiększanie gestem szczypania, a także lupę powiększającą z elementami sterującymi Kliknij, Przeciągnij/Upuść, Menu i Zamknij
  do precyzyjnego umieszczania.
- [Zmieniany rozmiar panelu biblioteki i sortowanie symboli](../Using-Symbol-Libraries/),
  w tym alfabetyczne porządkowanie wyników wyszukiwania.
- [Tymczasowe ukrywanie zaznaczonych obiektów](../User-guide/#temporarily-hiding-objects)
  oraz polecenie przywracające wszystkie ukryte obiekty na bieżącym arkuszu.
- Polskie tłumaczenie interfejsu oraz przetłumaczony tekst w oknie dialogowym Zamień symbol.

### Poprawiono
{: #fixed}

- [Widoczność siatki i przyciąganie](../Snap-to-Grid/) działają niezależnie, a
  przemieszczanie za pomocą klawiatury uwzględnia wyłączone przyciąganie.
- Obrazy bitmapowe są wyświetlane w umieszczonych symbolach bibliotecznych.
- [Klawisz Escape anuluje rysowanie i umieszczanie obiektów](../Shortcuts/), także gdy
  fokus mają elementy sterujące paska narzędzi.
- Anulowanie monitu aplikacji desktopowej o niezapisane zmiany usuwa oczekujące zamknięcie.
- Powiększanie gestem szczypania na obszarze roboczym nie sumuje się już z powiększeniem strony w przeglądarce.
- Ulepszono pozycjonowanie lupy dotykowej, reakcje wskaźnika, obsługę gestów i przeciąganie.
- Ulepszono działanie okna dialogowego Informacje na komputerach stacjonarnych i w systemie macOS.

### Pakowanie i konserwacja
{: #packaging-and-maintenance}

- Zaktualizowano zależności w celu usunięcia luk w zabezpieczeniach.
- Usunięto pakiety Linux ARMv7, ponieważ środowisko uruchomieniowe Electron obsługuje Linux x64
  i ARM64. Pakiety Snap są przeznaczone dla x64; pakiety Debian — dla x64 i ARM64.

[Pliki do pobrania](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 3 maja 2026
{: #v408--3-may-2026}

- Poprawiono obracanie symboli zasilania podczas zapisywania i ponownego otwierania rysunku.
- Zachowano typy sieci przewodów podczas zapisywania i wczytywania, dzięki czemu kolory przewodów pozostają spójne.

[Pliki do pobrania](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 13 kwietnia 2026
{: #v407--13-april-2026}

- Poprawiono drukowanie w aplikacji desktopowej.
- Ulepszono działanie powiększania gestem szczypania, aby zapobiec niekontrolowanemu powiększaniu.
- Dodano renderowanie symboli bibliotecznych po stronie serwera.
- Zautomatyzowano tagowanie kompilacji produkcyjnych i tworzenie wydań GitHub.

[Pliki do pobrania](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 29 marca 2026
{: #v406--29-march-2026}

To wydanie zawiera zmiany rozwojowe wprowadzone w wersji 4.0.5; nie ma
osobnego tagu 4.0.5 ani opublikowanego wydania GitHub.

### Dodano
{: #added-1}

- Automatyczne trasowanie przewodów.
- Polecenie Zamień symbol (Replace Symbol) służące do zmiany istniejącego komponentu na inny symbol biblioteczny.
- Automatyczne przewijanie podczas przeciągania w pobliżu krawędzi rysunku.
- Zaznaczanie całego przewodu dwukrotnym kliknięciem oraz zaznaczanie poza
  węzłami i rozgałęzieniami trójdrożnymi trzykrotnym kliknięciem.
- Opcję wyłączenia wskaźnika połączenia etykiety.

### Poprawiono i ulepszono
{: #fixed-and-improved}

- Foldery bibliotek są domyślnie otwarte i rozwijają się podczas wyszukiwania.
- Ulepszono edycję tekstu, skróty schowka, klawisze nawigacyjne i akceleratory klawiaturowe,
  gdy aktywny jest obszar rysunku.
- Poprawiono zaznaczanie Ctrl-kliknięciem, przeciąganie wielu zaznaczonych obiektów i elementy sterujące wartościami.
- Prostokąty rysowania i zaznaczania można przeciągać w obu kierunkach.
- Poprawiono zamykanie aplikacji w systemie macOS i ograniczono wielokrotne ładowanie bibliotek w systemie macOS.
- Poprawiono pozycjonowanie etykiet, tłumaczenie selektora kolorów i przetwarzanie listy sieci.
- Skorygowano nazwy instalatora Windows i kompilacji AppX.

[Pliki do pobrania](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — tag źródłowy, 19 marca 2026
{: #v404--source-tag-19-march-2026}

- Dodano [foldery bibliotek](../Library-Folders/) do porządkowania bibliotek symboli.
- Dodano niderlandzkie tłumaczenie interfejsu.
- Dodano artefakty kompilacji przeglądarkowej i wdrażanie w GitHub Pages.
- Poprawiono pakowanie Snap.

[Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — tag źródłowy, 15 marca 2026
{: #v403--source-tag-15-march-2026}

- Zmieniono obsługę uruchamiania w systemie macOS, aby rozwiązać problem z uruchamianiem.

Tag źródłowy to 4.0.3, chociaż metadane jego pakietu nadal podają wersję 4.0.2.

[Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 14 marca 2026
{: #v402--14-march-2026}

- Poprawiono okno dialogowe zamykania z niezapisanymi zmianami w systemie Linux.
- Dodano pakiety Debian x64 obok istniejących kompilacji ARM.
- Zaktualizowano narzędzia kompilacji i konfigurację pakowania.

[Pliki do pobrania](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — pierwszy tag źródłowy, 13 marca 2026
{: #v401--initial-source-tag-13-march-2026}

Pierwsza migawka kodu źródłowego zawiera już przepisaną wersję TinyCAD do użytku w przeglądarce i na komputerach,
umożliwiającą edycję schematów, korzystanie z bibliotek symboli, obsługę istniejących plików
`.dsn` i `.tclib` oraz eksport. Wcześniejszy etap prac nie
został odnotowany w tym repozytorium.

[Początkowa migawka kodu źródłowego](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- Wróć do [spisu wersji v4](../CONTENTS/)

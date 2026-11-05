---
layout: default
---
# Dziennik zmian TinyCAD v4
{: #tinycad-v4-changelog}


## v4.0.9 — 4 listopada 2026
{: #v409--4-november-2026}

### Dodano
{: #added}

- [Obsługa dotyku](../Touch-controls/), w tym bezpośrednia edycja, przesuwanie dwoma palcami
  i powiększanie gestem szczypania oraz lupa powiększająca z elementami sterującymi Kliknij, Przeciągnij/Upuść, Menu i Zamknij
  umożliwiającymi precyzyjne rozmieszczanie.
- [Zmienny rozmiar panelu bibliotek i sortowanie symboli](../Using-Symbol-Libraries/),
  w tym alfabetyczne porządkowanie wyników wyszukiwania.
- [Tymczasowe ukrywanie zaznaczonych obiektów](../User-guide/#temporarily-hiding-objects)
  oraz polecenie przywracające wszystkie ukryte obiekty w bieżącym arkuszu.
- Polskie tłumaczenie interfejsu i przetłumaczony tekst w oknie dialogowym Zastąp symbol.

### Poprawiono
{: #fixed}

- [Widoczność siatki i przyciąganie](../Snap-to-Grid/) działają niezależnie, a
  przesuwanie za pomocą klawiatury uwzględnia wyłączone przyciąganie.
- Obrazy bitmapowe są wyświetlane w umieszczonych symbolach z bibliotek.
- [Klawisz Escape anuluje rysowanie i umieszczanie](../Shortcuts/), także gdy
  fokus mają elementy sterujące paska narzędzi.
- Anulowanie monitu o niezapisanych zmianach w aplikacji desktopowej usuwa oczekujące polecenie zamknięcia.
- Powiększanie gestem szczypania obszaru roboczego nie kumuluje się już z powiększeniem strony w przeglądarce.
- Ulepszono pozycjonowanie lupy dotykowej, informacje zwrotne wskaźnika, obsługę gestów i przeciąganie.
- Ulepszono działanie okna Informacje w wersjach desktopowej i macOS.

### Pakowanie i konserwacja
{: #packaging-and-maintenance}

- Zaktualizowano zależności w celu usunięcia luk w zabezpieczeniach.
- Usunięto pakiety dla Linux ARMv7, ponieważ środowisko uruchomieniowe Electron obsługuje Linux x64
  i ARM64. Pakiety Snap są przeznaczone dla x64; pakiety Debian dla x64 i ARM64.

[Pobieranie wydania](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 3 maja 2026
{: #v408--3-may-2026}

- Poprawiono obracanie symboli zasilania podczas zapisywania i ponownego otwierania rysunku.
- Zachowano typy sieci przewodów podczas zapisywania i wczytywania, dzięki czemu kolory przewodów pozostają spójne.

[Pobieranie wydania](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 13 kwietnia 2026
{: #v407--13-april-2026}

- Poprawiono drukowanie w aplikacji desktopowej.
- Ulepszono działanie powiększania gestem szczypania, aby zapobiec niekontrolowanemu powiększaniu.
- Dodano renderowanie symboli z bibliotek po stronie serwera.
- Zautomatyzowano oznaczanie kompilacji produkcyjnych i tworzenie wydań GitHub.

[Pobieranie wydania](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 29 marca 2026
{: #v406--29-march-2026}

To wydanie zawiera zmiany programistyczne wprowadzone w wersji 4.0.5; nie ma
osobnego znacznika 4.0.5 ani opublikowanego wydania GitHub.

### Dodano
{: #added-1}

- Automatyczne trasowanie przewodów.
- Zastąp symbol (Replace Symbol), aby zmienić istniejący komponent na inny symbol z biblioteki.
- Automatyczne przewijanie podczas przeciągania w pobliżu krawędzi rysunku.
- Zaznaczanie całego przewodu dwukrotnym kliknięciem oraz zaznaczanie poza
  węzłami i połączeniami typu T trzykrotnym kliknięciem.
- Opcję wyłączania wskaźnika połączenia etykiety.

### Poprawiono i ulepszono
{: #fixed-and-improved}

- Foldery bibliotek są domyślnie otwarte i rozwijają się podczas wyszukiwania.
- Ulepszono edycję tekstu, skróty schowka, klawisze nawigacyjne i skróty
  klawiaturowe, gdy aktywny jest rysunek.
- Poprawiono zaznaczanie za pomocą Ctrl-kliknięcia, przeciąganie wielu zaznaczonych obiektów oraz przyciski pokrętła.
- Prostokąty rysowania i zaznaczania można przeciągać w obu kierunkach.
- Poprawiono zamykanie w macOS i ograniczono wielokrotne wczytywanie bibliotek w macOS.
- Poprawiono pozycjonowanie etykiet, tłumaczenie próbnika kolorów i przetwarzanie netlisty w tle.
- Skorygowano nazwy instalatora Windows i kompilacji AppX.

[Pobieranie wydania](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — znacznik kodu źródłowego, 19 marca 2026
{: #v404--source-tag-19-march-2026}

- Dodano [foldery bibliotek](../Library-Folders/), aby porządkować biblioteki symboli.
- Dodano niderlandzkie tłumaczenie interfejsu.
- Dodano artefakty kompilacji przeglądarkowej i wdrażanie w GitHub Pages.
- Poprawiono pakowanie Snap.

[Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — znacznik kodu źródłowego, 15 marca 2026
{: #v403--source-tag-15-march-2026}

- Dostosowano obsługę uruchamiania w macOS, aby rozwiązać problem z uruchamianiem.

Znacznik kodu źródłowego to 4.0.3, choć metadane pakietu nadal podają 4.0.2.

[Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 14 marca 2026
{: #v402--14-march-2026}

- Poprawiono okno dialogowe zamykania z niezapisanymi zmianami w Linux.
- Dodano pakiety Debian x64 obok istniejących kompilacji ARM.
- Zaktualizowano narzędzia kompilacji i konfigurację pakowania.

[Pobieranie wydania](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [Zmiany w kodzie źródłowym](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — początkowy znacznik kodu źródłowego, 13 marca 2026
{: #v401--initial-source-tag-13-march-2026}

Pierwsza migawka kodu źródłowego zawiera już przepisaną wersję TinyCAD do użytku w przeglądarce i na komputerze,
 z edycją schematów, bibliotekami symboli, obsługą istniejących plików
`.dsn` i `.tclib` oraz procedurami eksportu. Wcześniejszy rozwój nie jest
odnotowany w tym repozytorium.

[Początkowa migawka kodu źródłowego](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- Wróć do [spisu treści v4](../CONTENTS/)

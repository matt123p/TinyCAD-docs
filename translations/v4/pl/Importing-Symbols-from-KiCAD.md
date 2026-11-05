---
layout: default
---
# Importowanie symboli z KiCAD
{: #importing-symbols-from-kicad}

Importowanie symboli z biblioteki symboli KiCAD to nowa funkcja TinyCAD v4.

## Informacje o KiCad
{: #kicad-background}

[KiCad](https://www.kicad.org/) to popularny pakiet open source do projektowania elektroniki. Edytor symboli przechowuje symbole schematów w plikach bibliotek symboli. W aktualnych wydaniach KiCad te biblioteki symboli zwykle używają nowoczesnego formatu `.kicad_sym` opartego na S-wyrażeniach.

## Co TinyCAD może importować
{: #what-tinycad-can-import}

TinyCAD importuje obecnie symbole z:

- plików `.kicad_sym`

Plik musi być plikiem biblioteki symboli KiCad z elementem głównym `kicad_symbol_lib`. W praktyce oznacza to:

- Obsługiwane: nowoczesne biblioteki symboli KiCad zapisane jako `.kicad_sym`
- Nieobsługiwane: starsze biblioteki symboli KiCad `.lib`
- Nieobsługiwane: footprinty KiCad, pliki PCB, projekty, schematy ani inne pliki niezawierające symboli

## Gdzie znaleźć polecenie w interfejsie
{: #where-the-command-is-in-the-ui}

Polecenie importu nosi nazwę **Import KiCad Symbols** (Importuj symbole KiCad).

W zależności od sposobu uruchomienia TinyCAD znajdziesz je w jednym z tych miejsc:

- Aplikacja desktopowa (Electron): **File > Import > KiCad Symbols...** (Plik > Importuj > Symbole KiCad...)
- Tryb przeglądarki/systemu plików: menu paska narzędzi **File** (Plik), a następnie **Import KiCad Symbols** (Importuj symbole KiCad)

Po wybraniu pliku `.kicad_sym` TinyCAD odczytuje wszystkie symbole z tej biblioteki, a następnie wyświetla jedno z dwóch okien dialogowych importu, zależnie od tego, co edytujesz.

## Dwa tryby importowania
{: #two-import-modes}

Importowanie przebiega inaczej w zależności od tego, czy edytujesz projekt, czy bibliotekę.

### Importowanie do projektu
{: #import-into-a-design}

Użyj tej opcji, gdy chcesz umieścić symbol KiCad na bieżącym schemacie bez wcześniejszego zapisywania go w bibliotece TinyCAD.

Co się stanie:

- TinyCAD otworzy okno dialogowe **Import Symbol** (Importuj symbol).
- Możesz wybrać jeden symbol z wybranego pliku `.kicad_sym`.
- Po kliknięciu **Insert** (Wstaw) TinyCAD wstawi ten symbol bezpośrednio do bieżącego rysunku.
- Symbol zostanie wstawiony w bieżącym położeniu myszy.
- Ta czynność **nie** dodaje symbolu do żadnej z zewnętrznych bibliotek `.tclib`.

To najszybszy sposób, jeśli potrzebujesz symbolu tylko w bieżącym projekcie.

### Importowanie do biblioteki
{: #import-into-a-library}

Użyj tej opcji, gdy chcesz zachować zaimportowane symbole KiCad jako wielokrotnego użytku symbole biblioteki TinyCAD.

Co się stanie:

- Najpierw musisz otworzyć bibliotekę TinyCAD do edycji.
- TinyCAD otworzy okno dialogowe **Import KiCad Symbols** (Importuj symbole KiCad).
- Wszystkie zaimportowane symbole będą wstępnie zaznaczone.
- Możesz zaznaczać lub odznaczać symbole albo użyć opcji **Select all** (Zaznacz wszystko).
- Kliknięcie **Import selected** (Importuj zaznaczone) scala te symbole z bieżącą biblioteką TinyCAD.
- TinyCAD automatycznie otwiera ostatnio zaimportowany symbol w edytorze bibliotek.
- Następnie zapisujesz bibliotekę jak zwykle.

To właściwy sposób, jeśli chcesz ponownie używać zaimportowanych symboli w wielu rysunkach.

## Instrukcja krok po kroku: importowanie do projektu
{: #step-by-step-import-into-a-design}

1. Otwórz projekt schematu, nad którym chcesz pracować.
2. Uruchom **Import KiCad Symbols** (Importuj symbole KiCad) z menu File (Plik).
3. Wybierz plik `.kicad_sym` KiCad.
4. W oknie dialogowym **Import Symbol** (Importuj symbol) kliknij wybrany symbol.
5. Sprawdź niewielki wiersz metadanych wyświetlany dla każdego symbolu:
   - przedrostek oznaczenia, na przykład `U?`
   - liczbę części w przypadku symboli wielosekcyjnych
6. Kliknij **Insert** (Wstaw).
7. Symbol zostanie umieszczony na bieżącym rysunku w bieżącym położeniu myszy.
8. Po zaimportowaniu w razie potrzeby dostosuj tekst, widoczność wyprowadzeń lub grafikę.

## Instrukcja krok po kroku: importowanie do biblioteki
{: #step-by-step-import-into-a-library}

1. Otwórz lub utwórz bibliotekę TinyCAD do edycji.
2. Jeśli korzystasz z aplikacji desktopowej, typowy sposób postępowania jest następujący:
   - otwórz panel **Libraries** (Biblioteki)
   - użyj opcji **Add** (Dodaj), aby wczytać istniejącą bibliotekę, albo **New** (Nowa), aby utworzyć bibliotekę
   - otwórz tę bibliotekę w trybie edycji
3. Uruchom **Import KiCad Symbols** (Importuj symbole KiCad).
4. Wybierz plik `.kicad_sym` KiCad.
5. W oknie dialogowym **Import KiCad Symbols** (Importuj symbole KiCad) pozostaw wszystkie symbole zaznaczone lub odznacz te, których nie chcesz.
6. Kliknij **Import selected** (Importuj zaznaczone).
7. Sprawdź zaimportowane symbole w edytorze bibliotek.
8. Zapisz bibliotekę.

## Obsługiwane funkcje symboli
{: #supported-symbol-features}

TinyCAD importuje obecnie następujące funkcje symboli KiCad:

- Nazwy symboli, przedrostki oznaczeń i opisy
- Dodatkowe właściwości symboli jako atrybuty TinyCAD
- Stan widoczności typowych pól, takich jak Value (Wartość) i Reference (Oznaczenie)
- Wyprowadzenia, w tym ich nazwy, numery, długość, typ elektryczny i kilka kształtów
- Symbole wielosekcyjne
- Symbole dziedziczone z użyciem mechanizmu `extends` KiCad
- Warianty w stylu De Morgana importowane jako oddzielny symbol z dodanym do nazwy ` (De Morgan)`
- Podstawowe elementy graficzne używane w obrysach symboli:
  - prostokąty
  - okręgi
  - łamane
  - łuki
  - krzywe Béziera
  - tekst
- Podstawowe style linii i stany wypełnienia, jeśli mają odpowiednik w TinyCAD

## Funkcje, które nie będą działać lub mogą nie być odwzorowane dokładnie
{: #what-will-not-work-or-may-not-match-exactly}

Importer jest przydatny, ale nie stanowi pełnego mechanizmu konwersji z KiCad do TinyCAD. Oto główne ograniczenia widoczne w bieżącej implementacji.

### Ograniczenia formatów plików
{: #file-format-limits}

- Akceptowane są tylko pliki `.kicad_sym`.
- Jeśli plik jest pusty, ma nieprawidłową strukturę lub nie jest biblioteką symboli KiCad, importowanie zakończy się niepowodzeniem.

### Ograniczenia grafiki i układu
{: #graphics-and-layout-limits}

- Importowane są tylko wymienione wyżej podstawowe elementy graficzne.
- Pomijana jest zawartość symboli KiCad wykraczająca poza obsługiwane elementy.
- Zaimportowane symbole biblioteczne są rozmieszczane ponownie tak, aby znalazły się na stronie TinyCAD z marginesem i były w miarę możliwości wyrównane do siatki TinyCAD.
- Niektóre elementy geometrii mogą wyglądać nieco inaczej, ponieważ KiCad i TinyCAD używają różnych wewnętrznych modeli rysowania.
- Łuki KiCad są przybliżane za pomocą punktów krzywych TinyCAD.

### Ograniczenia tekstu i stylów
{: #text-and-styling-limits}

- Rodzina czcionki nie jest zachowywana; importowany tekst używa ustawień czcionki TinyCAD.
- Szczegóły układu tekstu, takie jak justowanie, nie są w pełni zachowywane.
- Obrót tekstu jest ograniczany do prostszego modelu orientacji TinyCAD zamiast zachowywać każdy dowolny kąt.
- Kolor tekstu wyprowadzeń nie jest zachowywany.

### Różnice w działaniu symboli
{: #symbol-behavior-differences}

- Importowanie do projektu wstawia symbol tylko do bieżącego rysunku. Nie tworzy ani nie aktualizuje wpisu w bibliotece wielokrotnego użytku `.tclib`.
- Importowanie do biblioteki tworzy wielokrotnego użytku wpisy biblioteki TinyCAD, ale bibliotekę trzeba później zapisać.
- Jeśli nazwy importowanych symboli pokrywają się z istniejącymi nazwami w bibliotece docelowej, TinyCAD automatycznie zmienia nazwy nowych wpisów, dodając przyrostek liczbowy.
- Jeśli symbol KiCad zawiera wariant De Morgana, TinyCAD importuje go jako oddzielny wpis symbolu, a nie jako przełączany styl.

## Praktyczne wskazówki
{: #practical-advice}

- Jeśli potrzebujesz symbolu tylko raz, zaimportuj go do projektu.
- Jeśli zamierzasz ponownie używać symbolu, zaimportuj go do biblioteki.
- Najpierw wypróbuj małą bibliotekę `.kicad_sym`, aby sprawdzić, jak grafika liniowa, tekst i rozmieszczenie wyprowadzeń wyglądają w TinyCAD.
- Po zaimportowaniu dokładnie sprawdź części wielosekcyjne i warianty De Morgana.
- Jeśli symbol wygląda nieprawidłowo, otwórz go w edytorze bibliotek TinyCAD i ręcznie popraw rozmieszczenie tekstu, grafikę liniową lub atrybuty.

## Podsumowanie
{: #summary}

Import KiCad w TinyCAD służy do szybkiego wprowadzania do TinyCAD nowoczesnych bibliotek symboli KiCad, zwłaszcza standardowych symboli schematów zbudowanych z wyprowadzeń, tekstu i prostych elementów graficznych. Najlepiej działa z plikami `.kicad_sym` i jest szczególnie praktyczny, gdy chcesz:

- wstawić symbol bezpośrednio do bieżącego rysunku lub
- przenieść wybrane symbole KiCad do biblioteki TinyCAD, aby móc ich ponownie używać

W przypadku bardziej zaawansowanych zastosowań po imporcie należy spodziewać się krótkiego ręcznego porządkowania.

## Powiązane strony
{: #related-pages}

- [Edycja symbolu](../Editing-a-Symbol/)
- [Korzystanie z bibliotek symboli](../Using-Symbol-Libraries/)

- Wróć do [Symbole i biblioteki](../Symbols-and-Libraries/)
- Wróć do [Spis treści v4](../CONTENTS/)

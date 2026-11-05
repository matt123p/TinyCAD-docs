---
layout: default
---
# Generowanie listy połączeń
{: #generate-netlist}

TinyCAD może wygenerować plik listy połączeń do wykorzystania przy projektowaniu PCB i w innych narzędziach dalszego przetwarzania.

Lista połączeń to tekstowy opis dwóch głównych elementów:

- instancji komponentów użytych w projekcie
- pinów połączonych ze sobą w każdej sieci

TinyCAD odczytuje połączenia elektryczne ze schematu i zapisuje te informacje w wybranym formacie wyjściowym.

## Do czego służy wygenerowana lista połączeń
{: #what-a-generated-netlist-is-for}

Wygenerowana lista połączeń służy głównie do przeniesienia ukończonego schematu do innego narzędzia, zwłaszcza programu do projektowania PCB.

Typowe zastosowania obejmują:

- importowanie układu do narzędzia do projektowania PCB
- sprawdzanie, czy połączenia na PCB są zgodne ze schematem
- przeglądanie oznaczeń komponentów i nazw sieci w formacie zwykłego tekstu

TinyCAD nie projektuje PCB. Eksportuje dane o połączeniach, aby mogło z nich skorzystać inne narzędzie.

## Przed wygenerowaniem listy połączeń
{: #before-generating-the-netlist}

Eksport listy połączeń zależy od tego, czy połączenia elektryczne na schemacie zostały wykonane zgodnie z oczekiwaniami TinyCAD. Dobrą praktyką jest najpierw uruchomić [sprawdzanie reguł projektowych (Design Rules Check)](../Design-Rules-Check/).

## Atrybut `Package`
{: #the-package-attribute}

W przypadku eksportu do PCB wiele narzędzi docelowych wymaga, aby każdy komponent miał przypisaną nazwę obudowy lub pakietu.

W TinyCAD jest ona zwykle zapisana jako atrybut symbolu o nazwie `Package`.

Podczas eksportu listy połączeń TinyCAD zapisuje ten atrybut w pliku wyjściowym, aby program do projektowania PCB mógł przypisać symbolowi schematowemu właściwą obudowę.

Ten sam symbol może mieć różne wartości pakietu w różnych częściach projektu, dlatego sprawdź atrybut umieszczonego komponentu, a nie tylko wartość domyślną z biblioteki.

## Jak wygenerować listę połączeń
{: #how-to-generate-the-netlist}

1. Otwórz projekt, który chcesz wyeksportować.
2. Uruchom polecenie eksportu listy połączeń z narzędzi eksportu TinyCAD w interfejsie użytkownika.
3. Wybierz format wyjściowy wymagany przez narzędzie docelowe.
4. Wybierz nazwę pliku i zapisz wyeksportowany plik.


## Formaty w oknie dialogowym Generowanie listy połączeń
{: #formats-in-the-generate-netlist-dialog}

W oknie dialogowym dostępne są obecnie następujące formaty:

- `PADS-PCB`
- `PADS-PCB-WITH-VALUE`
- `Eagle SCR`
- `Protel`
- `gEDA PCB`

## Znaczenie formatów
{: #what-the-formats-mean}

### PADS-PCB
{: #pads-pcb}

Tworzy plik listy połączeń w stylu PADS.

### PADS-PCB-WITH-VALUE
{: #pads-pcb-with-value}

Tworzy plik listy połączeń w stylu PADS, zawierający również wartość elementu, jeśli jest dostępna.

### Eagle SCR
{: #eagle-scr}

Tworzy plik skryptu Eagle.

### Protel
{: #protel}

Tworzy plik listy połączeń w stylu Protel.

### gEDA PCB
{: #geda-pcb}

Tworzy plik listy połączeń gEDA PCB.

## SPICE i VHDL
{: #spice-and-vhdl}

Eksporty SPICE i VHDL są obsługiwane oddzielnie od głównego okna dialogowego `Generate Netlist`.

Jeśli ich potrzebujesz, użyj:

- `Generate Spice NetList`
- `Create VHDL File`

Te polecenia również najpierw generują dane o połączeniach, ale korzystają z własnych, dedykowanych eksporterów.

## Używana nazwa pliku
{: #what-file-name-is-used}

TinyCAD używa bieżącej nazwy rysunku i zmienia rozszerzenie pliku, aby dopasować je do formatu eksportu.

Przykłady:

- `.net`
- `.scr`
- `.cir`
- `.vhdl`


## Co sprawdzić po eksporcie
{: #what-to-check-after-export}

Ponieważ listy połączeń są plikami tekstowymi, można je łatwo sprawdzić w edytorze tekstu.

Sprawdź co najmniej następujące elementy:

- oznaczenia komponentów są obecne i unikatowe
- w pliku występują oczekiwane nazwy sieci
- tam, gdzie jest to wymagane, podano wartości pakietu lub obudowy
- nie brakuje żadnych oczywistych komponentów ani połączeń

Jeśli wynik wygląda nieprawidłowo, przyczyny należy zwykle szukać w danych schematu, a nie w samym etapie eksportu.

## Częste przyczyny nieprawidłowych list połączeń
{: #common-causes-of-incorrect-netlists}

- użyto linii rysunkowej zamiast przewodu
- przewód kończy się blisko pinu, ale nie jest do niego faktycznie przyciągnięty
- komponent nie ma oznaczenia
- brakuje wymaganego atrybutu `Package` lub jego wartość jest niespójna
- etykiety, które miały łączyć sieci, nie są identyczne

## Powiązane strony
{: #related-pages}

- [Edytor listy połączeń](../Netlist-Editor/)
- [Sprawdzanie reguł projektowych](../Design-Rules-Check/)
- [Wyjście SPICE](../SPICE-output/)

- Wróć do [Zaawansowane](../Advanced/)
- Wróć do [spisu treści v4](../CONTENTS/)

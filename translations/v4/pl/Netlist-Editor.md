---
layout: default
---
# Edytor listy połączeń
{: #netlist-editor}

`Netlist Editor` to nowa funkcja w TinyCAD v4.

Użyj tej funkcji, jeśli chcesz:

- sprawdzić, jak TinyCAD pogrupował przewody i etykiety w sieci
- znaleźć miejsca użycia sieci na rysunku
- przypisać sieci typ
- zmienić wygląd grupy sieci na schemacie

## Czym jest widok listy połączeń
{: #what-the-netlist-view-is}

`Netlist Editor` to aktualizowana na bieżąco lista sieci na rysunku.

Sieć to połączenie elektryczne. TinyCAD wyznacza je na podstawie:

- przewodów
- wyprowadzeń
- etykiet
- symboli zasilania

Lista jest aktualizowana na bieżąco podczas edycji schematu.

## Jak otworzyć widok
{: #how-to-open-it}

1. Spójrz na dolny panel edytora.
2. Jeśli widzisz `Symbols`, użyj przycisku trybu i przełącz widok na `Netlist`.

Jeśli otwarty jest inny panel, ponieważ coś jest zaznaczone, najpierw usuń zaznaczenie.

## Znaczenie poszczególnych kolumn
{: #what-each-column-means}

- `Net`: nazwa sieci lub wewnętrzny numer sieci
- `Sheet`: arkusz, na którym znaleziono główny element wiersza
- `Connections`: liczba połączeń wyprowadzeń w tej sieci
- `Labels`: etykiety znalezione w tej sieci
- `Type`: typ listy połączeń przypisany do tej sieci
- `Symbols`: połączone elementy i ich wyprowadzenia w tej sieci

## Jak korzystać z widoku listy połączeń
{: #how-to-use-the-netlist-view}

### Znajdowanie sieci
{: #find-a-net}

Użyj pola wyszukiwania, aby filtrować listę.

Możesz wyszukiwać według:

- nazwy sieci
- nazwy arkusza
- tekstu etykiety
- oznaczenia symbolu
- nazwy typu

### Wyróżnianie sieci na rysunku
{: #highlight-a-net-in-the-drawing}

Przesuń kursor myszy nad wiersz.

TinyCAD wyróżni odpowiadające tej sieci elementy schematu, aby pokazać, gdzie się ona znajduje.

### Przechodzenie do sieci na rysunku
{: #jump-to-a-net-in-the-drawing}

Kliknij wiersz.

TinyCAD przejdzie do powiązanego elementu na właściwym arkuszu.

## Jak przypisać typ do sieci
{: #how-to-assign-a-type-to-a-net}

Każdy wiersz zawiera pole `Type`.

Aby przypisać typ:

1. Kliknij pole `Type` dla danej sieci.
2. Wybierz istniejący typ z listy lub wpisz nową nazwę.
3. Kliknij poza polem, aby zastosować zmianę.


## Czym jest typ sieci
{: #what-a-net-type-is}

Typ sieci to etykieta wielokrotnego użytku przypisana do grupy sieci.

Możesz go użyć, aby:

- uporządkować sieci w kategorie
- nadać sieciom tego samego typu takie same kolory
- pogrubić wybrane sieci na rysunku
- zapisać dodatkowe uwagi jako atrybuty

Przykładowe nazwy typów:

- `power`
- `control`
- `logic`
- `analog`
- `high_current`

## Jak otworzyć okno Typy listy połączeń
{: #how-to-open-netlist-types}

1. Otwórz widok `Netlist` na dolnym pasku.
2. Kliknij `Netlist Types`.

Otworzy się edytor wszystkich dostępnych definicji typów.

## Co można zrobić w oknie Typy listy połączeń
{: #what-you-can-do-in-netlist-types}

W oknie `Netlist Types` możesz:

- dodać nowy typ
- zduplikować istniejący typ
- zmienić nazwę typu
- usunąć typ
- zmienić kolor przewodu
- zmienić kolor etykiety
- zmienić kolor symbolu zasilania
- zmienić grubość przewodu
- dodać własne atrybuty
- wyświetlić podgląd wyniku przed zapisaniem

## Typ domyślny
{: #the-default-type}

Typ `default` jest zawsze dostępny.

Ważne informacje:

- nie można zmienić jego nazwy
- nie można go usunąć
- jego kolory są standardowymi kolorami rysunku

Zmiana kolorów w wierszu `default` zmienia standardowe kolory sieci używane na rysunku.

## Jak utworzyć nowy typ
{: #how-to-create-a-new-type}

1. Otwórz `Netlist Types`.
2. Kliknij `Add`.
3. Wpisz nazwę.
4. Ustaw wybrane kolory i grubość przewodu.
5. Kliknij `OK`, aby zapisać.

Następnie możesz przypisać nowy typ do sieci w widoku `Netlist` na dolnym pasku.

## Jak zduplikować typ
{: #how-to-duplicate-a-type}

Jest to przydatne, gdy chcesz utworzyć typ podobny do istniejącego.

1. Zaznacz wiersz typu.
2. Kliknij `Duplicate`.
3. Zmień nazwę nowego typu.
4. Edytuj wybrane kolory lub ustawienia.
5. Kliknij `OK`.

## Jak zmienić kolory
{: #how-to-change-colors}

Każdy typ może mieć osobne kolory dla:

- przewodów
- etykiet
- elementów zasilania

Aby zmienić kolor:

1. Kliknij komórkę koloru w wierszu.
2. Wybierz kolor w oknie dialogowym wyboru koloru.
3. Zamknij okno dialogowe wyboru koloru.
4. Kliknij `OK` w głównym oknie `Netlist Types`.

Typy inne niż domyślny mogą używać własnego koloru lub domyślnego koloru rysunku.

## Jak zmienić grubość przewodu
{: #how-to-change-wire-thickness}

1. Znajdź wiersz typu.
2. Zmień wartość `Wire Thickness`.
3. Kliknij `OK`.

Wpływa to na sposób rysowania na schemacie przewodów należących do sieci tego typu.

## Jak dodać atrybuty
{: #how-to-add-attributes}

Atrybuty to proste wpisy nazwa/wartość zapisywane wraz z typem.

Aby je dodać:

1. Kliknij komórkę `Attributes` dla danego typu.
2. Dodaj lub edytuj nazwy i wartości atrybutów.
3. Zapisz atrybuty.
4. Kliknij `OK` w głównym oknie dialogowym.

Obecnie te atrybuty są głównie zapisywane wraz z rysunkiem. Przydają się do przechowywania dodatkowych informacji o typie, nawet jeśli nie są jeszcze używane przez każdy format wyjściowy.


## Powiązane strony
{: #related-pages}

- [Generowanie listy połączeń](../Generate-Netlist/)
- [Zestawienie materiałów](../Bill-Of-Materials/)
- [Sprawdzanie reguł projektowych](../Design-Rules-Check/)
- [Wyjście SPICE](../SPICE-output/)
- [Wyjście VHDL](../VHDL-output/)

- Wróć do [Zaawansowane](../Advanced/)
- Wróć do [Zawartość v4](../CONTENTS/)

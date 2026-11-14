---
layout: default
---
# Edytor listy sieci
{: #netlist-editor}

`Netlist Editor` to nowa funkcja w TinyCAD v4.

Użyj tej funkcji, gdy chcesz:

- zobaczyć, jak TinyCAD pogrupował przewody i etykiety w sieci
- znaleźć miejsca użycia sieci na rysunku
- przypisać sieci typ
- zmienić wygląd grupy sieci na schemacie

## Czym jest widok listy sieci
{: #what-the-netlist-view-is}

`Netlist Editor` to aktualizowana na bieżąco lista sieci na rysunku.

Sieć to połączenie elektryczne. TinyCAD ustala je na podstawie:

- przewodów
- wyprowadzeń
- etykiet
- symboli zasilania

Lista jest aktualizowana na bieżąco podczas edytowania schematu.

## Jak go otworzyć
{: #how-to-open-it}

1. Spójrz na dolny panel edytora.
2. Jeśli widzisz `Symbols`, użyj przycisku trybu i przełącz na `Netlist`.

Jeśli otwarty jest inny panel, ponieważ zaznaczono jakiś element, najpierw usuń zaznaczenie.

![Widok listy sieci pod schematem dzielnika, z podświetlonym wierszem OUT](../images/netlist-editor/netlist-overview.png)

W dołączonym przykładzie dzielnika wiersz `OUT` łączy `R1.2` z `R2.1`.
Najechanie kursorem na ten wiersz podświetla połączenie na rysunku.

## Znaczenie poszczególnych kolumn
{: #what-each-column-means}

- `Net`: nazwa sieci lub jej wewnętrzny numer
- `Sheet`: arkusz, na którym znaleziono główny element danego wiersza
- `Connections`: liczba połączeń wyprowadzeń w tej sieci
- `Labels`: etykiety znalezione w tej sieci
- `Type`: typ listy sieci przypisany do tej sieci
- `Symbols`: połączone elementy i wyprowadzenia w tej sieci

## Jak korzystać z widoku listy sieci
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

### Podświetlanie sieci na rysunku
{: #highlight-a-net-in-the-drawing}

Przesuń kursor myszy nad wiersz.

TinyCAD podświetli odpowiadające mu elementy sieci na schemacie, aby pokazać, gdzie znajduje się ta sieć.

### Przechodzenie do sieci na rysunku
{: #jump-to-a-net-in-the-drawing}

Kliknij wiersz.

TinyCAD przejdzie do powiązanego elementu na właściwym arkuszu.

## Jak przypisać typ do sieci
{: #how-to-assign-a-type-to-a-net}

Każdy wiersz ma pole `Type`.

Aby przypisać typ:

1. Kliknij pole `Type` dla danej sieci.
2. Wybierz istniejący typ z listy.
3. Aby najpierw zdefiniować nowy typ, użyj `Netlist Types` zgodnie z poniższym opisem, a następnie wróć do pola `Type` sieci.

![Lista sieci odfiltrowana do OUT, z przypisanym typem control](../images/netlist-editor/netlist-type-assignment.png)

Tutaj wyszukanie `OUT` wyodrębnia sieć wyjściową dzielnika, a jej `Type` ustawiono na `control`.


## Czym jest typ sieci
{: #what-a-net-type-is}

Typ sieci to wielokrotnego użytku oznaczenie grupy sieci.

Można go używać do:

- porządkowania sieci w kategorie
- nadawania pasującym sieciom tych samych kolorów
- pogrubiania wybranych sieci na rysunku
- przechowywania dodatkowych uwag w postaci atrybutów

Przykładowe nazwy typów:

- `power`
- `control`
- `logic`
- `analog`
- `high_current`

## Jak otworzyć typy listy sieci
{: #how-to-open-netlist-types}

1. Otwórz widok `Netlist` na dolnym pasku.
2. Kliknij `Netlist Types`.

Otworzy się edytor wszystkich dostępnych definicji typów.

## Co można zrobić w typach listy sieci
{: #what-you-can-do-in-netlist-types}

W oknie `Netlist Types` można:

- dodać nowy typ
- powielić istniejący typ
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
- używa standardowych kolorów rysunku

Zmiana kolorów w wierszu `default` oznacza zmianę standardowych kolorów sieci używanych na rysunku.

## Jak utworzyć nowy typ
{: #how-to-create-a-new-type}

1. Otwórz `Netlist Types`.
2. Kliknij `Add`.
3. Wprowadź nazwę.
4. Ustaw wybrane kolory i grubość przewodu.
5. Kliknij `OK`, aby zapisać.

Następnie można przypisać nowy typ do sieci w widoku `Netlist` na dolnym pasku.

![Edytor typów listy sieci z typami default, control i power oraz grubością przewodu 2 dla control](../images/netlist-editor/netlist-types.png)

W przykładzie dodano typy `control` i `power`. Typ `control` ma grubość przewodu `2`; każdy przycisk koloru otwiera osobny edytor.

## Jak powielić typ
{: #how-to-duplicate-a-type}

Przydaje się to, gdy chcesz utworzyć typ podobny do istniejącego.

1. Zaznacz wiersz typu.
2. Kliknij `Duplicate`.
3. Zmień nazwę nowego typu.
4. Zmień wybrane kolory lub ustawienia.
5. Kliknij `OK`.

## Jak zmienić kolory
{: #how-to-change-colors}

Każdy typ może mieć osobne kolory dla:

- przewodów
- etykiet
- elementów zasilania

Aby zmienić kolor:

1. Kliknij komórkę koloru w wierszu.
2. Włącz `Override colour` dla typu innego niż domyślny, a następnie wybierz kolor.
3. Kliknij `OK` w oknie dialogowym koloru.
4. Kliknij `OK` w głównym oknie `Netlist Types`.

Typy inne niż domyślny mogą używać własnego koloru albo standardowego koloru rysunku.

![Edytor koloru przewodu z włączoną opcją Override colour i zielonym przewodem w podglądzie](../images/netlist-editor/netlist-colour-preview.png)

Podgląd pokazuje wybrany kolor przewodu oraz kolory etykiety i symbolu zasilania. Użyj kart `Wire`, `Label` i `Power`, aby sprawdzić poszczególne ustawienia przed zapisaniem.

## Jak zmienić grubość przewodu
{: #how-to-change-wire-thickness}

1. Znajdź wiersz typu.
2. Zmień wartość `Wire Thickness`.
3. Kliknij `OK`.

Wpływa to na sposób rysowania na schemacie przewodów należących do sieci tego typu.

## Jak dodawać atrybuty
{: #how-to-add-attributes}

Atrybuty to proste wpisy nazwa/wartość zapisywane wraz z typem.

Aby je dodać:

1. Kliknij komórkę `Attributes` dla danego typu.
2. Kliknij `Add Attribute`, a następnie wprowadź nazwę i wartość atrybutu. Powtórz czynność, aby dodać kolejne wpisy.
3. Zapisz atrybuty.
4. Kliknij `OK` w głównym oknie dialogowym.

![Edytor atrybutów z wpisami purpose i notes dla typu control](../images/netlist-editor/netlist-attributes.png)

Te przykładowe wpisy opisują przeznaczenie typu i dodają uwagę dotyczącą okablowania. Są przypisane do typu i mogą być współdzielone przez każdą przypisaną do niego sieć.

Obecnie te atrybuty są przechowywane głównie wraz z rysunkiem. Przydają się do zachowania dodatkowych informacji o typie, nawet jeśli nie są jeszcze używane przez każdy format wyjściowy.


## Powiązane strony
{: #related-pages}

- [Generowanie listy sieci](../Generate-Netlist/)
- [Zestawienie materiałów](../Bill-Of-Materials/)
- [Sprawdzanie reguł projektowych](../Design-Rules-Check/)
- [Wyjście SPICE](../SPICE-output/)
- [Wyjście VHDL](../VHDL-output/)

- Wróć do [Zaawansowane](../Advanced/)
- Wróć do [spisu treści v4](../)

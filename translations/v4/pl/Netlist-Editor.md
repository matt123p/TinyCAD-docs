---
layout: default
---
# Edytor listy połączeń
{: #netlist-editor}

`Netlist Editor` to nowa funkcja w TinyCAD v4.

Użyj tej funkcji, gdy chcesz:

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
2. Jeśli widzisz `Symbols`, użyj przycisku trybu i przełącz na `Netlist`.

Jeśli otwarty jest inny panel, ponieważ coś jest zaznaczone, najpierw usuń zaznaczenie.

![Widok listy połączeń poniżej schematu dzielnika, z wyróżnionym wierszem OUT](../Images/netlist-editor/netlist-overview.png)

W tym przykładowym schemacie dzielnika wiersz `OUT` łączy `R1.2` z `R2.1`.
Umieszczenie wskaźnika myszy nad tym wierszem wyróżnia połączenie na rysunku.

## Znaczenie poszczególnych kolumn
{: #what-each-column-means}

- `Net`: nazwa sieci lub jej wewnętrzny numer
- `Sheet`: arkusz, na którym znaleziono główny element wiersza
- `Connections`: liczba połączeń z wyprowadzeniami w tej sieci
- `Labels`: etykiety znalezione w tej sieci
- `Type`: typ listy połączeń przypisany do tej sieci
- `Symbols`: podłączone elementy i wyprowadzenia w tej sieci

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

Najedź wskaźnikiem myszy na wiersz.

TinyCAD wyróżni odpowiadające mu elementy sieci na schemacie, aby pokazać, gdzie znajduje się ta sieć.

### Przechodzenie do sieci na rysunku
{: #jump-to-a-net-in-the-drawing}

Kliknij wiersz.

TinyCAD przejdzie do powiązanego elementu na właściwym arkuszu.

## Jak przypisać typ do sieci
{: #how-to-assign-a-type-to-a-net}

Przy otwartym widoku **Netlist** kliknij przewód na schemacie, aby wyróżnić wiersz odpowiadającej mu sieci. Użyj listy **Type** w tym wierszu, aby wybrać istniejący typ. Aby utworzyć typ z własnym stylem przewodu, najpierw otwórz **Netlist Types** i zdefiniuj styl.

Typ sieci to zestaw stylów rysowania, którego można używać ponownie. Przypisz ten sam typ do kilku sieci, aby nadać im jednakowy wygląd. Edycja typu aktualizuje wszystkie używające go sieci. Możesz też ustawić dla sieci danego typu własne kolory etykiet i symboli zasilania albo zapisać uwagi jako atrybuty. Zmiany stylu wpływają na wygląd rysunku, ale nie zmieniają połączeń elektrycznych.

## Przykład – zmień kolor przewodu OUT dzielnika na zielony i zwiększ jego grubość
{: #example--make-the-dividers-out-wire-green-and-thicker}

Otwórz dołączony rysunek `divider` za pomocą **Open Example** → **SPICE tutorial** i powiększ widok obwodu. W dolnym panelu przełącz z **Symbols** na **Netlist**. Etykieta **OUT** wskazuje sieć między wyprowadzeniami **R1.2** i **R2.1**. Początkowo ma ona typ `default` i standardową grubość przewodu.

![Dzielnik przed zmianą stylu, z cienkim niebieskim przewodem OUT między R1 i R2](../Images/netlist-editor/netlist-wire-before.png)

### Tworzenie stylu przewodu
{: #create-the-wire-style}

1. Kliknij **Netlist Types**, kliknij **Add** i nadaj nowemu typowi nazwę `control`.
2. W wierszu `control` ustaw **Wire thickness** na `4`. Wartość `1` oznacza standardową grubość linii. Naciśnij **Tab**, aby zatwierdzić wartość.
3. W tym samym wierszu kliknij komórkę **Wire colour**. Zaznacz **Override colour** i wpisz `007F5F` w polu **Hex**, aby ustawić kolor zielony. Podgląd pokaże przewód z zastosowanymi oboma ustawieniami.
4. Kliknij **OK** w oknie wyboru koloru. Sprawdź zieloną próbkę koloru i wartość grubości w wierszu `control`, a następnie kliknij **OK** w oknie **Netlist Types**, aby zapisać typ.

![Okno wyboru koloru przewodu dla control, z zaznaczoną opcją Override colour i zielonym przewodem widocznym w podglądzie](../Images/netlist-editor/netlist-wire-colour.png)

![Okno Netlist Types z zieloną próbką Wire colour i wartością Wire thickness równą 4 w wierszu control](../Images/netlist-editor/netlist-wire-type.png)

### Zastosowanie stylu do OUT
{: #apply-the-style-to-out}

1. Kliknij przewód tuż nad **R2** na schemacie. TinyCAD wyróżni wiersz **OUT** w panelu **Netlist**.
2. Otwórz listę **Type** w wyróżnionym wierszu i wybierz `control`.
3. Kliknij pusty obszar schematu, aby usunąć zaznaczenie. Przewód między **R1.2** i **R2.1** jest teraz zielony i grubszy. Wybierz `default` z listy **Type**, aby przywrócić standardowy styl przewodu.

![Zaznaczony przewód OUT na schemacie i wyróżniony odpowiadający mu wiersz Netlist z wybranym control](../Images/netlist-editor/netlist-wire-assignment.png)

![Dzielnik po zmianie stylu, z grubszym zielonym przewodem OUT między R1 i R2](../Images/netlist-editor/netlist-wire-after.png)

Użyj polecenia **Save As**, aby zachować edytowaną kopię przykładu.

### Obejrzyj prezentację
{: #watch-the-walkthrough}

{% include video-player.html src="/v4/videos/netlist-editor/netlist-editor.webm" type="video/webm" poster="/v4/Images/netlist-editor/netlist-walkthrough-start.png" caption="Przełącz na Netlist, utwórz zielony styl przewodu, a następnie kliknij przewód OUT, aby znaleźć jego wiersz i zastosować styl." %}

## Co można zrobić w oknie Netlist Types
{: #what-you-can-do-in-netlist-types}

W oknie `Netlist Types` możesz:

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

Typ `default` ma stałą nazwę i grubość przewodu równą `1`. TinyCAD używa kolorów z tego wiersza jako standardowych kolorów sieci na rysunku. Sieci, którym nie przypisano typu, używają `default`.

## Jak powielić typ
{: #how-to-duplicate-a-type}

Ta funkcja jest przydatna, gdy chcesz utworzyć typ podobny do istniejącego.

1. Wybierz wiersz typu.
2. Kliknij `Duplicate`.
3. Zmień nazwę kopii i dostosuj jej kolory lub grubość.
4. Kliknij `OK`.

## Kolory etykiet i symboli zasilania
{: #label-and-power-symbol-colours}

Użyj kart **Wire**, **Label** i **Power** w oknie wyboru koloru, aby niezależnie edytować każdy kolor. W przypadku typu niestandardowego włącz **Override colour** na każdej karcie, którą chcesz dostosować. Karta z wyłączoną opcją zastępowania używa domyślnego koloru danego elementu na rysunku.

## Jak dodawać atrybuty
{: #how-to-add-attributes}

Atrybuty to proste wpisy nazwa/wartość zapisywane razem z typem.

Aby je dodać:

1. Kliknij komórkę `Attributes` dla danego typu.
2. Kliknij `Add Attribute`, a następnie wpisz nazwę i wartość atrybutu. Powtórz te czynności, aby dodać kolejne wpisy.
3. Zapisz atrybuty.
4. Kliknij `OK` w głównym oknie dialogowym.

![Edytor atrybutów z wpisami purpose i notes dla typu control](../Images/netlist-editor/netlist-attributes.png)

Te przykładowe wpisy opisują przeznaczenie typu i dodają uwagę dotyczącą okablowania. Są przypisane do typu i mogą być współdzielone przez każdą przypisaną do niego sieć.

Obecnie atrybuty te są przechowywane głównie razem z rysunkiem. Przydają się do zachowywania dodatkowych informacji o typie, nawet jeśli nie są jeszcze wykorzystywane przez wszystkie formaty wyjściowe.


## Powiązane strony
{: #related-pages}

- [Generowanie listy połączeń](../Generate-Netlist/)
- [Zestawienie materiałów](../Bill-Of-Materials/)
- [Sprawdzanie reguł projektowych](../Design-Rules-Check/)
- [Wyjście SPICE](../SPICE-output/)
- [Wyjście VHDL](../VHDL-output/)

- Wstecz do [Zaawansowane](../Advanced/)
- Wstecz do [Spis treści v4](../)

---
layout: default
---
# Symbole
{: #symbols}

Symbole są podstawowymi elementami schematu w TinyCAD. Umieszczasz symbole z bibliotek, ustawiasz ich atrybuty, a następnie łączysz ich wyprowadzenia przewodami, aby utworzyć poprawny elektrycznie projekt.

Wybierak bibliotek po lewej stronie oferuje trzy źródła: **Standardowe (Standard)** — biblioteki dołączone do programu, **Online** — wyszukiwanie w TinyCAD.net oraz **Moje biblioteki (My Libraries)** — własne pliki bibliotek.

## Znajdowanie symbolu
{: #find-a-symbol}

### Korzystanie z dołączonych bibliotek
{: #use-the-bundled-libraries}

Wybierz **Standardowe (Standard)**, a następnie wybierz kolekcję z listy **Wybierz bibliotekę standardową (Choose a standard library)**. Przeglądaj jej komponenty lub wpisz nazwę w polu **Szukaj w bibliotekach... (Search libraries...)**, aby filtrować wybraną kolekcję. Możesz przełączać kolekcje bez usuwania symboli już umieszczonych na rysunku.

[Dołączone biblioteki](../Bundled-Libraries/) zawierają modelowane komponenty obwodów, a także rzeczywiste urządzenia przeznaczone do schematów sieciowych, wbudowanych, audio, laboratoryjnych, sterowania ruchem i instalacji solarnych. Są dostarczane z TinyCAD zarówno w przeglądarce, jak i w aplikacji Desktop App; nie jest wymagane konto, osobne pobieranie ani import biblioteki. Informacje o zawartości i przeznaczeniu poszczególnych kolekcji można znaleźć w przewodniku po bibliotekach.

### Wyszukiwanie online
{: #search-online}

Jeśli w dołączonych kolekcjach nie ma potrzebnego symbolu, wybierz **Online** i wpisz nazwę komponentu lub numer katalogowy w polu **Szukaj w bibliotekach... (Search libraries...)**. TinyCAD przeszukuje kolekcję symboli TinyCAD.net i wyświetla pasujące symbole wraz z podglądem grafiki. Wyszukiwanie online wymaga połączenia z internetem.

Wybierz wynik, aby obejrzeć podgląd i opis, a następnie przeciągnij grafikę symbolu na rysunek. Nie musisz wcześniej pobierać osobnej biblioteki. Sprawdź, czy nazwy i numery wyprowadzeń odpowiadają komponentowi i obudowie, których zamierzasz użyć.

### Jeśli nie możesz znaleźć potrzebnego symbolu
{: #if-you-cannot-find-the-symbol-you-want}

Użyj funkcji [Niestandardowe biblioteki symboli](../Custom-symbol-libraries/), aby utworzyć bibliotekę `.tclib` lub otworzyć już istniejącą. Twoje biblioteki są dostępne w wybieraku za pośrednictwem opcji **Moje biblioteki (My Libraries)**.

Możesz narysować nowy symbol lub dostosować kopię odpowiedniego istniejącego symbolu; informacje o jego grafice, wyprowadzeniach i właściwościach znajdziesz w sekcji [Edycja symbolu](../Editing-a-Symbol/). Możesz także [zaimportować symbole z KiCad](../Importing-Symbols-from-KiCAD/) do niestandardowej biblioteki. Dołączone biblioteki są tylko do odczytu, dlatego własne definicje przechowuj w niestandardowej bibliotece.

## Umieszczanie wybranego symbolu
{: #place-the-chosen-symbol}

1. Wybierz **Standardowe (Standard)**, **Online** lub **Moje biblioteki (My Libraries)**, a następnie przeglądaj lub przeszukaj dane źródło.
2. Wybierz wynik, aby obejrzeć większy podgląd i opis.
3. Przeciągnij grafikę symbolu z listy lub podglądu na rysunek, a następnie umieść ją na siatce.
4. Po zakończeniu umieszczania kopii naciśnij **Escape** lub kliknij prawym przyciskiem myszy.

Poniższy film pokazuje, jak znaleźć i umieścić symbol. Więcej informacji o przeglądaniu wybieraka i zarządzaniu nim znajdziesz w sekcji [Korzystanie z bibliotek symboli](../Using-Symbol-Libraries/).

{% include video-player.html
	src="/v4/images/video/Video 6.mp4"
	width=1280
	height=822
	caption="Film instruktażowy pokazujący, jak znaleźć i umieścić symbol."
%}



## Orientacja podczas umieszczania
{: #orientation-while-placing}

Podczas umieszczania symbolu ustaw jego orientację za pomocą przycisków obracania i odbijania na pasku narzędzi.

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />


## Edycja i przesuwanie tekstu symbolu
{: #editing-and-moving-symbol-text}

Po umieszczeniu symbolu możesz przeciągnąć go, aby przesunąć go w całości.

Możesz także niezależnie przesuwać pola tekstowe symbolu (na przykład wartość/nazwę/oznaczenie), zaznaczając symbol i przeciągając każde pole w dogodniejsze miejsce.

Tekst można edytować, klikając go.

{% include video-player.html
	src="/v4/images/video/Video 1.mp4"
	width=284
	height=248
	caption="Film instruktażowy pokazujący, jak edytować i przestawiać tekst symbolu."
%}

## Atrybuty symbolu na schemacie
{: #symbol-attributes-in-a-schematic}

Umieszczone symbole zwykle zawierają następujące kluczowe atrybuty:

- **Nazwa/Wartość**: określa, czym jest element (na przykład `10k`, `100nF`, typ urządzenia)
- **Oznaczenie**: unikatowe oznaczenie na arkuszu/w projekcie (na przykład `R1`, `U3`)
- **Obudowa** (opcjonalnie): identyfikator footprintu/obudowy używany w dalszych etapach eksportu

Oznaczenia muszą być unikatowe. W razie potrzeby narzędzia TinyCAD mogą automatycznie generować oznaczenia lub ponownie je numerować.

W razie potrzeby możesz dodać dodatkowe atrybuty dotyczące metadanych projektu, procesu PCB lub symulacji.

## Powiązane strony
{: #related-pages}

- [Przewody](../Wires/)
- [Etykiety](../Labels/)
- [Niepodłączone wyprowadzenia](../No-Connects/)
- [Edycja symbolu](../Editing-a-Symbol/)

- Wróć do [Rysowanie](../User-guide/)
- Wróć do [spisu treści v4](../CONTENTS/)

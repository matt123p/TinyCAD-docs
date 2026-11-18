---
layout: default
---
# Symbole
{: #symbols}

Symbole są podstawowymi elementami schematu TinyCAD. Umieszczasz symbole z bibliotek, ustawiasz ich atrybuty, a następnie łączysz ich piny przewodami, aby utworzyć projekt poprawny pod względem elektrycznym.

Wybór biblioteki po lewej stronie oferuje trzy źródła: **Standard** dla dołączonych bibliotek, **Online** do wyszukiwania w TinyCAD.net oraz **My Libraries** dla własnych plików bibliotek.

[Asystent AI ](../AI-Assistant/) może również znaleźć lub utworzyć symbol na podstawie karty katalogowej i umieścić go bezpośrednio na rysunku. Otwórz bibliotekę niestandardową do edycji, jeśli chcesz, aby asystent tworzył wielokrotnego użytku elementy biblioteczne.

## Znajdź symbol
{: #find-a-symbol}

### Korzystanie z dołączonych bibliotek
{: #use-the-bundled-libraries}

Wybierz **Standard**, a następnie wybierz kolekcję z listy **Choose a standard library**. Przeglądaj jej elementy lub wpisz nazwę w polu **Search libraries...**, aby filtrować wybraną kolekcję. Możesz przełączać kolekcje bez usuwania symboli już umieszczonych na rysunku.

[Dołączone biblioteki](../Bundled-Libraries/) zawierają modelowane elementy obwodów, a także wyposażenie fizyczne do projektów sieciowych, wbudowanych, audio, laboratoryjnych, sterowania ruchem i instalacji solarnych. Są dostarczane z TinyCAD zarówno w przeglądarce, jak i w aplikacji Desktop App; nie jest wymagane konto, osobne pobieranie ani importowanie biblioteki. Zobacz przewodnik po bibliotekach, aby poznać zawartość i przeznaczenie poszczególnych kolekcji.

### Wyszukiwanie online
{: #search-online}

Jeśli dołączone kolekcje nie zawierają potrzebnych elementów, wybierz **Online** i wpisz nazwę elementu lub numer katalogowy w polu **Search libraries...**. TinyCAD przeszukuje kolekcję symboli TinyCAD.net i wyświetla pasujące symbole wraz z podglądem grafiki. Wyszukiwanie online wymaga połączenia z internetem.

Wybierz wynik, aby obejrzeć jego podgląd i opis, a następnie przeciągnij jego grafikę na rysunek. Nie musisz wcześniej pobierać osobnej biblioteki. Sprawdź, czy nazwy i numery pinów odpowiadają elementowi i obudowie, których zamierzasz użyć.

### Jeśli nie możesz znaleźć potrzebnego symbolu
{: #if-you-cannot-find-the-symbol-you-want}

Użyj [Bibliotek symboli niestandardowych](../Custom-symbol-libraries/), aby utworzyć bibliotekę `.tclib` lub otworzyć już istniejącą. Twoje biblioteki są dostępne w sekcji **My Libraries** w selektorze.

Możesz narysować nowy symbol lub dostosować kopię odpowiedniego istniejącego symbolu; zobacz [Edycja symbolu](../Editing-a-Symbol/), aby poznać jego grafikę, piny i właściwości. Możesz również [importować symbole z KiCad](../Importing-Symbols-from-KiCAD/) do biblioteki niestandardowej. Dołączone biblioteki są tylko do odczytu, dlatego własne definicje przechowuj w bibliotece niestandardowej.

## Umieszczanie wybranego symbolu
{: #place-the-chosen-symbol}

1. Wybierz **Standard**, **Online** lub **My Libraries**, a następnie przeglądaj albo wyszukaj element w tym źródle.
2. Wybierz wynik, aby obejrzeć większy podgląd i opis.
3. Przeciągnij grafikę symbolu z listy lub podglądu na rysunek, a następnie umieść ją na siatce.
4. Po zakończeniu umieszczania kopii naciśnij **Escape** lub kliknij prawym przyciskiem myszy.

Poniższy film pokazuje, jak znaleźć i umieścić symbol. Więcej informacji o przeglądaniu selektora i zarządzaniu nim znajdziesz w sekcji [Korzystanie z bibliotek symboli](../Using-Symbol-Libraries/).

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


## Edytowanie i przesuwanie tekstu symbolu
{: #editing-and-moving-symbol-text}

Po umieszczeniu możesz przesuwać cały symbol, przeciągając go.

Możesz również niezależnie przesuwać pola tekstowe symbolu (na przykład wartość/nazwę/oznaczenie), zaznaczając symbol i przeciągając każde pole w odpowiednie miejsce.

Możesz edytować tekst, klikając go.

{% include video-player.html
	src="/v4/images/video/Video 1.mp4"
	width=284
	height=248
	caption="Film instruktażowy pokazujący, jak edytować i zmieniać położenie tekstu symbolu."
%}

## Atrybuty symbolu na schemacie
{: #symbol-attributes-in-a-schematic}

Umieszczone symbole zazwyczaj zawierają następujące kluczowe atrybuty:

- **Nazwa/Wartość**: typ elementu (na przykład `10k`, `100nF`, typ urządzenia)
- **Oznaczenie**: unikatowe oznaczenie na arkuszu/projekcie (na przykład `R1`, `U3`)
- **Obudowa** (opcjonalnie): identyfikator footprintu/obudowy używany w dalszych etapach eksportu

Oznaczenia muszą być unikatowe. W razie potrzeby narzędzia TinyCAD mogą pomóc automatycznie wygenerować oznaczenia lub ponownie je przypisać.

W razie potrzeby możesz dodać dodatkowe atrybuty dotyczące metadanych projektu, przepływu PCB lub metadanych symulacji.

## Powiązane strony
{: #related-pages}

- [Przewody](../Wires/)
- [Etykiety](../Labels/)
- [Niepodłączone piny](../No-Connects/)
- [Edycja symbolu](../Editing-a-Symbol/)

- Powrót do [Rysowanie](../User-guide/)
- Powrót do [spisu treści v4](../CONTENTS/)

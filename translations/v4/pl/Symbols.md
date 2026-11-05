---
layout: default
---
# Symbole
{: #symbols}

Symbole są podstawowymi elementami schematu w TinyCAD. Umieszczasz symbole z bibliotek, ustawiasz ich atrybuty, a następnie łączysz ich wyprowadzenia przewodami, aby utworzyć poprawny elektrycznie projekt.

Możesz używać własnych symboli lub pobierać je bezpośrednio ze strony TinyCAD.net.

Zobacz także:

- [Korzystanie z bibliotek symboli](../Using-Symbol-Libraries/)
- [Niestandardowe biblioteki symboli](../Custom-symbol-libraries/)

## Wyszukiwanie i umieszczanie symboli
{: #find-and-place-symbols}

1. Wpisz w polu wyszukiwania nazwę szukanego symbolu
2. Wybierz symbole, aby wyświetlić ich podgląd, a następnie wskaż ten, którego chcesz użyć
3. Przeciągnij symbol z podglądu na rysunek

{% include video-player.html
	src="/v4/images/video/Video 6.mp4"
	width=1280
	height=822
	caption="Film instruktażowy pokazujący, jak wyszukiwać i umieszczać symbole."
%}



## Orientacja podczas umieszczania
{: #orientation-while-placing}

Podczas umieszczania symbolu ustaw jego orientację za pomocą przycisków obracania i odbijania na pasku narzędzi.

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />


## Edytowanie i przesuwanie tekstu symbolu
{: #editing-and-moving-symbol-text}

Po umieszczeniu symbolu możesz przesunąć go w całości, przeciągając go.

Możesz też niezależnie przesuwać pola tekstowe symbolu (na przykład wartość/nazwę/oznaczenie), zaznaczając symbol i przeciągając każde pole w odpowiednie miejsce.

Tekst możesz edytować, klikając go.

{% include video-player.html
	src="/v4/images/video/Video 1.mp4"
	width=284
	height=248
	caption="Film instruktażowy pokazujący, jak edytować i zmieniać położenie tekstu symbolu."
%}

## Atrybuty symbolu na schemacie
{: #symbol-attributes-in-a-schematic}

Umieszczone symbole zazwyczaj zawierają następujące kluczowe atrybuty:

- **Nazwa/wartość**: określa, czym jest element (na przykład `10k`, `100nF`, typ urządzenia)
- **Oznaczenie**: unikatowe oznaczenie na arkuszu/w projekcie (na przykład `R1`, `U3`)
- **Obudowa** (opcjonalnie): identyfikator obudowy/footprintu używany w dalszych etapach eksportu

Oznaczenia muszą być unikatowe. W razie potrzeby narzędzia TinyCAD mogą pomóc w ich automatycznym generowaniu lub ponownym numerowaniu.

W razie potrzeby możesz dodać dodatkowe atrybuty dotyczące metadanych projektu, procesu PCB lub metadanych symulacji.

## Powiązane strony
{: #related-pages}

- [Przewody](../Wires/)
- [Etykiety](../Labels/)
- [Niepołączone wyprowadzenia](../No-Connects/)
- [Edytowanie symbolu](../Editing-a-Symbol/)

- Wróć do [Rysowanie](../User-guide/)
- Wróć do [spisu treści v4](../CONTENTS/)

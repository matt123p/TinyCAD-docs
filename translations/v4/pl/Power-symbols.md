---
layout: default
---
# Symbole zasilania
{: #power-symbols}

Symbole zasilania wskazują połączenie z nazwanymi sieciami zasilania, takimi jak `GND`, `+5V`,
`VCC` lub `+3V3`.

Wszystkie symbole zasilania o tej samej nazwie są uznawane za połączone elektrycznie.

{% include video-player.html
	src="/v4/images/video/Video 5.mp4"
	width=1596
	height=700
	caption="Film instruktażowy pokazujący, jak umieszczać symbole zasilania."
%}

<p>
	<a href="/v4/examples/Simple%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Pobierz
	</a>
</p>

## Jak działają symbole zasilania
{: #how-power-symbols-work}

- Łączność sieci zależy od **nazwy zasilania**.
- **Kształt** ma wyłącznie znaczenie wizualne i nie wpływa na łączność.
- Wybór orientacji i kształtu służy poprawie czytelności i dopasowaniu do stylu rysunku.

Stosuj spójne nazwy w całym projekcie, aby uniknąć rozdzielenia sieci zasilania.

## Zasady rozmieszczania
{: #placement-rules}

1. Wybierz narzędzie Zasilanie.
2. Wybierz orientację, kształt i nazwę.
3. Umieść symbol i podłącz przewód do końca wyprowadzenia symbolu.

Podłączaj przewody do końca wyprowadzenia symbolu zasilania (a nie tylko w jego pobliżu), aby
połączenie zostało rozpoznane.

## Ukryte wyprowadzenia zasilania w symbolach
{: #hidden-power-pins-on-symbols}

Niektóre symbole z bibliotek mają ukryte wyprowadzenia zasilania (na przykład wiele rodzin układów logicznych).
Wyprowadzenia te łączą się automatycznie z sieciami zasilania o pasujących nazwach.

Używaj nazw oczekiwanych przez bibliotekę symboli (na przykład `VCC`/`GND`, gdy
jest to wymagane), aby automatyczne połączenia zasilania działały poprawnie.

## Edycja i style
{: #editing-and-styles}

Możesz zmienić kształt symbolu zasilania, zaznaczając go, a następnie wybierając nowy kształt na
pasku narzędzi.

## Działanie w wielu arkuszach
{: #multi-sheet-behavior}

Nazwy sieci zasilania są globalne w kontekście projektu używanym do tworzenia listy połączeń.
Spójne nazewnictwo na wszystkich arkuszach zapewnia zamierzoną łączność zasilania.

- Wróć do [Rysowania](../User-guide/)
- Wróć do [Spisu treści v4](../CONTENTS/)

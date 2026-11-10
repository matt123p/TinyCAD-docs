---
layout: default
---
# Tekst i adnotacje
{: #text--annotations}

Narzędzia tekstu i adnotacji służą do dokumentowania i poprawy czytelności rysunku.

Te obiekty **nie są elektryczne** i są ignorowane podczas tworzenia listy połączeń oraz
sprawdzania reguł projektowych.

## Tekst a etykiety
{: #text-vs-labels}

- Używaj **Tekstu** do notatek, objaśnień, tytułów i instrukcji produkcyjnych.
- Używaj **Etykiet** jako nazw sieci aktywnych elektrycznie.

Jeśli zamiast wymaganej etykiety użyjesz tekstu, sieć nie zostanie połączona.

## Co to jest Markdown?
{: #what-is-markdown}

Markdown pozwala formatować zwykły tekst za pomocą prostych znaczników wpisywanych z klawiatury. TinyCAD odczytuje je i wyświetla nagłówki, pogrubiony tekst oraz listy.

| Co wpisać | Znaczenie |
|---|---|
| `# Power supply` | Nagłówek |
| `**Check polarity**` | Pogrubiony tekst |
| `*Optional*` | Tekst kursywą |
| `- R1: 10 kΩ` | Element listy punktowanej |
| `` `R1` `` | Kod w tekście |

Na początku wiersza po `#` lub `-` wstaw spację. Oddzielaj akapity pustym wierszem.

Aby zapisać kilka wierszy kodu, umieść `~~~` w osobnym wierszu przed kodem i po nim. Pełny przykład notatki poniżej pokazuje tę składnię.

## Pola tekstowe Markdown
{: #markdown-text-boxes}

Pola tekstowe Markdown są dostępne w [TinyCAD v4.0.11](../Changelog/#v4011).

1. Wybierz Tekst (Text lub naciśnij T) i przeciągnij, aby narysować pole na rysunku.
2. Kliknij wewnątrz pola i wpisz Markdown. Formatowanie pojawia się podczas pisania.
3. Kliknij w innym miejscu, aby zobaczyć sformatowaną notatkę bez znaczników Markdown. Powiększ pole, jeśli zawartość jest przycięta.

![Notatka Markdown renderowana w SVG z nagłówkiem, listą elementów, listą zadań i blokiem kodu.](../images/markdown-preview.png)

### Edytowalne źródło Markdown
{: #editable-markdown-source}

Nagłówki, pogrubienie, kursywa i przekreślenie pokazują formatowanie, a ich znaczniki pozostają widoczne i edytowalne. Kursor, zaznaczenie i zawijanie wierszy uwzględniają sformatowany tekst. Kod otoczony znacznikami lub wcięty pozostaje dosłowny; kolorowanie składni nie jest stosowane.

Wybrana rodzina i wielkość czcionki, pogrubienie oraz kursywa tworzą styl podstawowy. Wielkość nagłówków jest skalowana względem tego rozmiaru; kod również używa wybranej rodziny czcionek. Cofanie, kopiowanie/wklejanie i zapisywanie zachowują źródło Markdown.

![Edycja tej samej notatki z widocznymi znacznikami nagłówka, pogrubienia, listy, listy zadań i bloku kodu.](../images/markdown-source-editor.png)

### Obsługiwane formatowanie
{: #supported-formatting}

Obsługiwane są nagłówki, pogrubienie, kursywa, przekreślenie, cytaty, listy numerowane i punktowane, listy zadań, linie poziome, kod w tekście oraz bloki kodu otoczone znacznikami lub wcięte. Zwykłe podziały wierszy są zachowywane. Tabele, odnośniki, obrazy i HTML są wyświetlane jako dosłowny tekst, bez specjalnego formatowania ani pobierania zdalnych obrazów.

Na przykład wpisz poniższe źródło, aby utworzyć pokazaną notatkę:

````markdown
# RC filter
**Time constant:** τ = R × C

- R1: 10 kΩ
- C1: 100 nF

- [x] Draw the circuit
- [ ] Measure the response

~~~python
tau = 10_000 * 100e-9
~~~
````

## Obiekty adnotacji
{: #annotation-objects}

TinyCAD obsługuje typowe kształty adnotacji, w tym:

- tekst,
- linie,
- prostokąty,
- elipsy,
- łuki,
- wielokąty.

Używaj ich do grupowania bloków, wyróżniania obszarów i dodawania objaśnień bez
zmieniania połączeń w obwodzie.


## Rysowanie linii i wielokątów
{: #drawing-lines--polygons}

Możesz narysować ciąg linii. Aby zakończyć rysowanie, kliknij prawym przyciskiem myszy.

Możesz przekształcić go w wielokąt, wybierając pozycję „Zamknij wielokąt” (Close Polygon) w menu kontekstowym. Po przekształceniu
w wielokąt możesz zmienić jego wypełnienie.

{% include video-player.html
	src="/v4/images/video/Video 7.mp4"
	width=1620
	height=924
	caption="Film instruktażowy pokazujący, jak rysować i edytować wielokąt."
%}


- Wróć do [Rysowanie](../User-guide/)
- Wróć do [spisu treści v4](../CONTENTS/)

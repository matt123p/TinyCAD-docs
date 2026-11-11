---
layout: default
---
# Tekst
{: #text}

Tekst służy do dokumentacji i poprawy czytelności rysunku.

Narzędzie tekstowe TinyCAD tworzy na rysunku pole tekstowe. Pola tekstowe to
podstawowy sposób dodawania bezpośrednio do schematu czytelnych uwag, instrukcji,
objaśnień i nagłówków. Obsługują [Markdown](https://{{ page.manual_language | default: 'en' | replace: 'zh-CN', 'zh' }}.wikipedia.org/wiki/Markdown), dzięki czemu można formatować tekst za pomocą nagłówków, pogrubienia,
kursywy, list, list zadań i bloków kodu bez opuszczania obszaru rysunku.

Obiekty te nie mają charakteru elektrycznego i są pomijane podczas tworzenia listy
połączeń oraz sprawdzania reguł projektowych.

## Tekst a etykiety
{: #text-vs-labels}

- Używaj tekstu do uwag, objaśnień, tytułów i instrukcji produkcyjnych.
- Używaj etykiet w przypadku nazw elektrycznie aktywnych sieci.

Jeśli użyjesz tekstu w miejscu, w którym wymagana jest etykieta, sieć nie zostanie połączona.

## Czym jest Markdown?
{: #what-is-markdown}
{: #what-is-markdown}

Markdown dodaje formatowanie do zwykłego tekstu za pomocą prostych, wpisywanych znaczników. TinyCAD odczytuje
te znaczniki i wyświetla nagłówki, pogrubiony tekst oraz listy.

| Co wpisujesz | Co to oznacza |
|---|---|
| `# Power supply` | Nagłówek |
| `**Check polarity**` | Pogrubiony tekst |
| `*Optional*` | Tekst pisany kursywą |
| `- R1: 10 kΩ` | Element listy punktowanej |
| `` `R1` `` | Kod w wierszu |

Gdy rozpoczynasz wiersz od `#` lub `-`, wstaw po nim spację. Między
akapitami pozostaw pusty wiersz.

Aby wstawić kilka wierszy kodu, umieść `~~~` w osobnym wierszu przed kodem i po nim.
Poniższy kompletny przykład uwagi pokazuje, jak to zrobić.

## Pola tekstowe Markdown
{: #markdown-text-boxes}
{: #markdown-text-boxes}

Pola tekstowe Markdown są dostępne w [TinyCAD v4.0.11](../Changelog/#v4011).

1. Wybierz Tekst (Text) (lub naciśnij T) i przeciągnij, aby narysować pole na rysunku.
2. Kliknij wewnątrz pola i wpisz tekst Markdown. Formatowanie pojawia się podczas pisania.
3. Kliknij w innym miejscu, aby zobaczyć sformatowaną uwagę bez znaczników Markdown. Zmień rozmiar
   pola, jeśli jego zawartość jest przycięta.

![Uwaga Markdown wyrenderowana w SVG, zawierająca nagłówek, listę komponentów, listę zadań i blok kodu.](../images/markdown-preview.png)

### Edytowalne źródło Markdown
{: #editable-markdown-source}
{: #editable-markdown-source}

Nagłówki, pogrubienie, kursywa i przekreślenie są wyświetlane w odpowiednim formacie, a ich
znaczniki pozostają widoczne i edytowalne. Kursor, zaznaczenie i zawijanie wierszy
uwzględniają stylizowany tekst. Kod w blokach ogrodzonych i wciętych pozostaje dosłowny; kolorowanie składni
nie jest stosowane.

Wybrana rodzina i wielkość czcionki oraz ustawienia pogrubienia i kursywy tworzą styl podstawowy.
Nagłówki są skalowane względem tego rozmiaru; kod również używa wybranej rodziny czcionki. Cofanie,
kopiowanie i wklejanie oraz zapisywanie zachowują źródło Markdown.

![Edycja tej samej uwagi z widocznymi znacznikami nagłówka, pogrubienia, listy, listy zadań i bloku kodu.](../images/markdown-source-editor.png)

### Obsługiwane formatowanie
{: #supported-formatting}
{: #supported-formatting}

Obsługiwane formatowanie obejmuje nagłówki, pogrubienie, kursywę, przekreślenie, cytaty,
listy numerowane i punktowane, listy zadań, linie poziome, kod w wierszu oraz
bloki kodu ogrodzone lub wcięte. Zwykłe podziały wierszy są zachowywane. Tabele,
linki, obrazy i HTML są wyświetlane jako zwykły tekst, bez specjalnego
formatowania ani zdalnego ładowania obrazów.

Na przykład wpisz poniższy tekst źródłowy, aby utworzyć pokazaną uwagę:

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

- Zobacz także: [Kształty](../Shapes/)
- Wróć do [Rysunku](../User-guide/)
- Wróć do [spisu treści v4](../CONTENTS/)

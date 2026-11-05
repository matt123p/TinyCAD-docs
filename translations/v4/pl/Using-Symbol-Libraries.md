---
layout: default
---
# Korzystanie z bibliotek symboli
{: #using-symbol-libraries}

## Czym jest biblioteka symboli?
{: #what-is-a-symbol-library}

W projektowaniu obwodów **biblioteka symboli** to zbiór symboli schematowych przechowywanych w jednym pliku. Każdy symbol przedstawia element elektroniczny, taki jak rezystor, kondensator, układ scalony, złącze, tranzystor lub dowolny inny podzespół, za pomocą znormalizowanego symbolu graficznego z określonymi punktami połączeń elektrycznych.

Biblioteki symboli TinyCAD używają formatu pliku `.tclib`. Pojedynczy plik biblioteki może zawierać dziesiątki lub setki powiązanych symboli, zwykle pogrupowanych według kategorii lub przeznaczenia. Możesz na przykład mieć jedną bibliotekę elementów biernych, inną układów logicznych, a jeszcze inną złączy.

## Do czego służą biblioteki symboli?
{: #what-are-symbol-libraries-used-for}

Biblioteki symboli pełnią kilka kluczowych funkcji podczas tworzenia schematów:

- **Ponowne wykorzystanie w projektach.** Gdy symbol zostanie zdefiniowany w bibliotece, można umieszczać go na dowolnym schemacie bez konieczności tworzenia go od nowa. Oszczędza to czas i zapewnia spójność między projektami.
- **Znormalizowane przedstawienie.** Biblioteki zapewniają wspólny styl graficzny i konfigurację wyprowadzeń każdego elementu. Każdy egzemplarz układu czasowego 555 lub wzmacniacza operacyjnego wygląda tak samo i ma takie same definicje wyprowadzeń, co ogranicza ryzyko błędnej interpretacji.
- **Poprawność elektryczna.** Każdy symbol zawiera informacje o wyprowadzeniach — ich nazwy, numery i typy elektryczne (wejście, wyjście, zasilanie, bierne itp.). Dane te są wykorzystywane w dalszych procesach, takich jak generowanie listy sieci, sprawdzanie reguł projektowych i eksport do narzędzi do projektowania PCB.
- **Organizacja.** Grupowanie symboli w biblioteki według funkcji, producenta lub projektu ułatwia znalezienie właściwego elementu. TinyCAD pozwala wczytać tylko biblioteki potrzebne w danym projekcie.
- **Udostępnianie i współpraca.** Pliki bibliotek można udostępniać członkom zespołu lub pobierać ze społeczności, dzięki czemu wszyscy korzystają z tych samych, sprawdzonych definicji symboli.

## Biblioteki wbudowane i niestandardowe
{: #built-in-and-custom-libraries}

TinyCAD jest dostarczany z zestawem wbudowanych bibliotek obejmujących popularne rodziny elementów. W przypadku elementów, których w nich nie ma, możesz:

- Utworzyć własne [niestandardowe biblioteki symboli](../Custom-symbol-libraries/)
- [Zaimportować symbole z KiCAD](../Importing-Symbols-from-KiCAD/) bibliotek
- Pobrać dodatkowe biblioteki ze strony TinyCAD.net

## Typowy przebieg pracy
{: #typical-workflow}

W praktyce praca z bibliotekami symboli zwykle przebiega następująco:

1. Wczytaj lub dodaj biblioteki, które mają być dostępne w bieżącej sesji TinyCAD.
2. Przeglądaj, wyszukuj i wyświetlaj podgląd symboli z tych bibliotek.
3. Umieszczaj symbole na rysunku.
4. Jeśli trzeba zmienić definicję symbolu, edytuj bibliotekę zamiast umieszczonego egzemplarza.

Ta strona opisuje kroki od 1 do 3. Informacje o zarządzaniu plikami bibliotek znajdziesz w sekcji [Niestandardowe biblioteki symboli](../Custom-symbol-libraries/). Informacje o zmianie samej definicji symbolu znajdziesz w sekcji [Edytowanie symbolu](../Editing-a-Symbol/).

## Wczytywanie bibliotek
{: #loading-libraries}

Zanim będzie można umieścić symbol, jego biblioteka musi być dostępna w TinyCAD.

- Biblioteki wbudowane są dostępne w TinyCAD.
- Biblioteki niestandardowe trzeba dodać lub otworzyć, zanim będzie można je przeglądać.
- Dokładne czynności różnią się w TinyCAD Web i aplikacji desktopowej.

Informacje o czynnościach właściwych dla danego produktu, dotyczących dodawania, otwierania, odświeżania, tworzenia i edytowania plików bibliotek, znajdziesz w sekcji [Niestandardowe biblioteki symboli](../Custom-symbol-libraries/).

## Przeglądanie, wyszukiwanie i podgląd
{: #browsing-searching-and-previewing}

Aby korzystać z symboli biblioteki, najpierw trzeba ją wczytać w bieżącej sesji TinyCAD. Po wczytaniu:

1. Otwórz selektor symboli.
2. Rozwiń bibliotekę, aby przejrzeć jej zawartość, albo użyj pola wyszukiwania, by znaleźć symbol według nazwy lub opisu.
3. Kliknij symbol, aby wyświetlić jego podgląd.
4. Wybierz symbol, aby aktywować narzędzie jego umieszczania, a następnie kliknij rysunek, aby umieścić jego egzemplarze.

Więcej informacji o umieszczaniu i konfigurowaniu wybranych symboli znajdziesz w sekcji [Symbole](../Symbols/).

## Zmiana rozmiaru panelu bibliotek
{: #resizing-the-library-panel}

Przeciągnij prawą krawędź panelu bibliotek, aby go poszerzyć lub zwęzić. Szerszy
panel ułatwia wyświetlanie długich nazw symboli i opisów. TinyCAD zapamiętuje
szerokość na tym urządzeniu, jeśli dostępna jest pamięć lokalna.

## Sortowanie symboli
{: #sorting-symbols}

W sekcji **Moje biblioteki** użyj przycisku sortowania obok elementów sterujących bibliotekami, aby przełączać się między trybami
**kolejność bibliotek**, **A–Z** i **Z–A**. Podpowiedź przycisku wskazuje bieżący tryb.
Sortowanie dotyczy symboli w bibliotekach oraz wyników wyszukiwania, w tym
wyników online; nie zmienia kolejności plików ani folderów bibliotek. TinyCAD
zapamiętuje tryb sortowania na tym urządzeniu, jeśli dostępna jest pamięć lokalna.

Wersja korzystająca z systemu plików przeglądarki wyświetla tylko wyszukiwanie online i nie udostępnia
przycisku sortowania **Moje biblioteki**.

## Umieszczanie symboli na rysunku
{: #placing-symbols-in-a-drawing}

Po wybraniu symbolu w przeglądarce bibliotek staje się on aktywnym narzędziem do umieszczania.

Szczegółowy opis umieszczania symboli, w tym ich zachowania po wybraniu, znajduje się w sekcji [Symbole](../Symbols/).

Pamiętaj, że umieszczenie symbolu na rysunku **nie** edytuje definicji w bibliotece. Jeśli chcesz zmienić grafikę, wyprowadzenia lub atrybuty, aby były używane w przyszłości, edytuj symbol w jego bibliotece. Zobacz [Edytowanie symbolu](../Editing-a-Symbol/).

## Powiązane zadania
{: #related-tasks}

- Skorzystaj z sekcji [Niestandardowe biblioteki symboli](../Custom-symbol-libraries/), aby dodawać, otwierać, tworzyć i zarządzać plikami `.tclib`.
- Skorzystaj z sekcji [Edytowanie symbolu](../Editing-a-Symbol/), aby zmieniać grafikę, wyprowadzenia i atrybuty symbolu.
- Skorzystaj z sekcji [Symbole](../Symbols/), aby poznać szczegóły umieszczania wybranego symbolu.

## Strony
{: #pages}

{% assign current_version = page.url | split: '/' | slice: 1, 1 | first -%}
{% assign section = nil -%}
{% for entry in site.data.navigation[current_version] -%}
    {% if entry.url == page.url -%}
        {% assign section = entry -%}
        {% break -%}
    {% endif -%}
{% endfor -%}
{% if section and section.children %}
{% for child in section.children -%}
- [{{ child.title }}]({{ child.url | relative_url }})
{% endfor %}
{% endif %}

- Wróć do [spisu treści v4](../CONTENTS/)

---
layout: default
---
# Korzystanie z bibliotek symboli
{: #using-symbol-libraries}

## Czym jest biblioteka symboli?
{: #what-is-a-symbol-library}

W projektowaniu obwodów **biblioteka symboli** to zbiór symboli schematowych zapisanych w jednym pliku. Każdy symbol przedstawia element elektroniczny, taki jak rezystor, kondensator, układ scalony, złącze, tranzystor lub dowolny inny podzespół, w postaci znormalizowanej grafiki z określonymi punktami połączeń elektrycznych.

Biblioteki symboli TinyCAD używają formatu pliku `.tclib`. Pojedynczy plik biblioteki może zawierać dziesiątki lub setki powiązanych symboli, zwykle pogrupowanych według kategorii lub przeznaczenia. Możesz na przykład mieć jedną bibliotekę elementów pasywnych, inną układów logicznych, a jeszcze inną złączy.

## Do czego służą biblioteki symboli?
{: #what-are-symbol-libraries-used-for}

Biblioteki symboli pełnią kilka kluczowych funkcji podczas tworzenia schematów:

- **Ponowne wykorzystanie w projektach.** Po zdefiniowaniu symbolu w bibliotece można umieszczać go na dowolnym schemacie bez konieczności ponownego tworzenia. Oszczędza to czas i zapewnia spójność między projektami.
- **Znormalizowane przedstawienie.** Biblioteki zapewniają wspólny styl wizualny i konfigurację wyprowadzeń każdego elementu. Każdy układ czasowy 555 lub wzmacniacz operacyjny wygląda tak samo i ma te same definicje wyprowadzeń, co ogranicza ryzyko błędnej interpretacji.
- **Poprawność elektryczna.** Każdy symbol zawiera informacje o wyprowadzeniach — ich nazwy, numery i typy elektryczne (wejście, wyjście, zasilanie, pasywne itp.). Dane te są wykorzystywane w dalszych procesach, takich jak generowanie listy połączeń, sprawdzanie reguł projektowych i eksport do narzędzi do projektowania PCB.
- **Organizacja.** Grupowanie symboli w bibliotekach według funkcji, producenta lub projektu ułatwia znalezienie odpowiedniego elementu. TinyCAD pozwala wczytać tylko te biblioteki, których potrzebujesz w danym projekcie.
- **Udostępnianie i współpraca.** Pliki bibliotek można udostępniać członkom zespołu lub pobierać ze społeczności, dzięki czemu wszyscy korzystają z tych samych, zweryfikowanych definicji symboli.

## Biblioteki wbudowane i niestandardowe
{: #built-in-and-custom-libraries}

TinyCAD zawiera [dołączone biblioteki](../Bundled-Libraries/) z układami urządzeń i modelowanymi obwodami elektronicznymi. Wybierz **Standard** w selektorze po lewej stronie, a następnie wybierz kolekcję w sekcji **Wybierz bibliotekę standardową**. Nie trzeba osobno importować bibliotek. W przypadku elementów, których w nich nie ma, możesz:

- Utworzyć własne [niestandardowe biblioteki symboli](../Custom-symbol-libraries/)
- [Zaimportować symbole z bibliotek KiCAD](../Importing-Symbols-from-KiCAD/)
- Pobrać dodatkowe biblioteki z witryny TinyCAD.net

## Typowy przebieg pracy
{: #typical-workflow}

W praktyce praca z bibliotekami symboli zwykle przebiega następująco:

1. Wczytaj lub dodaj biblioteki, które mają być dostępne w bieżącej sesji TinyCAD.
2. Przeglądaj, wyszukuj i wyświetlaj podgląd symboli z tych bibliotek.
3. Umieszczaj symbole na rysunku.
4. Jeśli trzeba zmienić definicję symbolu, edytuj bibliotekę zamiast umieszczonej instancji.

Ta strona opisuje kroki od 1 do 3. Informacje o zarządzaniu plikami bibliotek znajdziesz w sekcji [Niestandardowe biblioteki symboli](../Custom-symbol-libraries/). Informacje o zmianie samej definicji symbolu znajdziesz w sekcji [Edycja symbolu](../Editing-a-Symbol/).

## Wczytywanie bibliotek
{: #loading-libraries}

Aby umieścić symbol, jego biblioteka musi być dostępna w TinyCAD.

- Biblioteki wbudowane są dostępne w ramach TinyCAD.
- Biblioteki niestandardowe trzeba dodać lub otworzyć, zanim będzie można je przeglądać.
- Dokładne czynności różnią się w TinyCAD Web i aplikacji komputerowej.

Informacje o czynnościach właściwych dla danego produktu, dotyczących dodawania, otwierania, odświeżania, tworzenia i edytowania plików bibliotek, znajdziesz w sekcji [Niestandardowe biblioteki symboli](../Custom-symbol-libraries/).

## Przeglądanie, wyszukiwanie i podgląd
{: #browsing-searching-and-previewing}

Aby używać symboli z biblioteki, najpierw trzeba ją wczytać w bieżącej sesji TinyCAD. Po wczytaniu:

1. Otwórz selektor symboli po lewej stronie i wybierz **Standard**, **Online** lub **Moje biblioteki**.
2. W sekcji Standard wybierz jedną z dołączonych bibliotek, a w sekcji Moje biblioteki otwórz lub rozwiń własne biblioteki. Użyj polecenia **Szukaj w bibliotekach...**, aby znaleźć symbol według nazwy lub opisu.
3. Sprawdź grafikę na liście wyników, a następnie wybierz symbol, aby wyświetlić jego większy podgląd i opis.
4. Przeciągnij podgląd na rysunek i umieść go na siatce. Naciśnij Escape lub kliknij prawym przyciskiem myszy, aby zakończyć wstawianie kolejnych kopii.

Więcej informacji o umieszczaniu i konfigurowaniu wybranych symboli znajdziesz w sekcji [Symbole](../Symbols/).

## Zmiana rozmiaru panelu biblioteki
{: #resizing-the-library-panel}

Przeciągnij prawą krawędź panelu biblioteki, aby go poszerzyć lub zwęzić. Szerszy
panel ułatwia wyświetlanie długich nazw i opisów symboli. Gdy dostępna jest pamięć
lokalna, TinyCAD zapamiętuje szerokość na tym urządzeniu.

## Sortowanie symboli
{: #sorting-symbols}

W sekcji **Moje biblioteki** użyj przycisku sortowania obok elementów sterujących biblioteką, aby przełączać się między trybami
**kolejność bibliotek**, **A do Z** i **Z do A**. Podpowiedź przycisku podaje bieżący tryb.
Sortowanie dotyczy symboli w bibliotekach i wyników wyszukiwania, w tym
wyników online; nie zmienia kolejności plików ani folderów bibliotek. Gdy dostępna jest pamięć lokalna, TinyCAD
zapamiętuje tryb sortowania na tym urządzeniu.

Selektor w przeglądarce i aplikacji Desktop zawiera karty **Standard**, **Online** i **Moje biblioteki**. Źródło i wybór biblioteki standardowej są zapamiętywane na tym urządzeniu.

## Umieszczanie symboli na rysunku
{: #placing-symbols-in-a-drawing}

Po wybraniu symbolu w przeglądarce bibliotek staje się on aktywnym narzędziem do umieszczania.

Informacje o samym umieszczaniu, w tym o zachowaniu symboli po ich wybraniu, znajdziesz w sekcji [Symbole](../Symbols/).

Pamiętaj, że umieszczenie symbolu na rysunku **nie** edytuje definicji w bibliotece. Jeśli chcesz zmienić grafikę, wyprowadzenia lub atrybuty na potrzeby przyszłego użycia, edytuj symbol w jego bibliotece. Zobacz sekcję [Edycja symbolu](../Editing-a-Symbol/).

## Powiązane zadania
{: #related-tasks}

- Skorzystaj z sekcji [Niestandardowe biblioteki symboli](../Custom-symbol-libraries/), aby dodawać, otwierać, tworzyć i zarządzać plikami `.tclib`.
- Skorzystaj z sekcji [Edycja symbolu](../Editing-a-Symbol/), aby zmienić grafikę, wyprowadzenia i atrybuty symbolu.
- Skorzystaj z sekcji [Symbole](../Symbols/), aby poznać szczegóły umieszczania po wybraniu symbolu.

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

- Wróć do [spisu treści v4](../)

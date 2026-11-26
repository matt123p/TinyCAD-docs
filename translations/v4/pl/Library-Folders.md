---
layout: default
---
# Foldery bibliotek
{: #library-folders}

## Przegląd
{: #overview}

Panel Moje biblioteki obsługuje foldery, dzięki czemu możesz porządkować zainstalowane biblioteki w grupy.


<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Przeglądarka
{: #browser}

Foldery bibliotek nie są obsługiwane w przeglądarkowej wersji TinyCAD.

### Aplikacja desktopowa
{: #desktop-app}

Foldery są zapisywane razem z listą bibliotek, dlatego ich struktura zostaje zachowana przy następnym uruchomieniu TinyCAD.

Foldery bibliotek są dostępne tylko w aplikacji desktopowej.

Tryby przeglądarkowe nadal wyświetlają Moje biblioteki, jeśli ta funkcja jest w nich obsługiwana, ale nie udostępniają tworzenia folderów, grupowania folderów ani przeciągania i upuszczania folderów.

![Panel Moje biblioteki w aplikacji desktopowej z rozwiniętym folderem Circuit components, pustym folderem Sensors and modules oraz sekcją Unfiled.](../Images/library-folders/folders-overview.png){: width="460" style="max-width: 100%;"}

#### Dostępne działania
{: #what-you-can-do}

- Tworzenie folderów do grupowania powiązanych bibliotek
- Zmienianie nazw folderów
- Usuwanie folderów
- Zmienianie kolejności folderów przez przeciąganie i upuszczanie
- Przenoszenie bibliotek między folderami przez przeciąganie i upuszczanie
- Dodawanie wielu istniejących plików bibliotek w jednej operacji
- Dodawanie bibliotek bezpośrednio do aktualnie wybranego folderu

Biblioteki, które nie są przypisane do folderu, pojawiają się w sekcji Bez folderu.

#### Tworzenie folderu
{: #create-a-folder}

1. Otwórz panel Biblioteki.
2. Przejdź do Moje biblioteki.
3. Wybierz przycisk folderu w nagłówku panelu.
4. Wpisz nazwę nowego folderu, na przykład `Project libraries`.
5. Wybierz **Dodaj**.

![Okno dialogowe tworzenia folderu z wpisaną nazwą Project libraries i przyciskiem Dodaj gotowym do zatwierdzenia.](../Images/library-folders/folder-create.png){: width="600" style="max-width: 100%;"}

Nowy folder pojawi się na liście bibliotek i będzie można go od razu wybrać.

#### Wybieranie folderu
{: #select-a-folder}

Kliknij wiersz folderu, aby go wybrać.

Wybrany folder jest używany podczas dodawania istniejących bibliotek.

Kliknięcie biblioteki powoduje, że TinyCAD automatycznie wybiera folder, do którego ta biblioteka należy. Dzięki temu widać, gdzie zostaną umieszczone nowo dodane biblioteki.

#### Dodawanie bibliotek do folderu
{: #add-libraries-to-a-folder}

1. Wybierz folder docelowy w sekcji Moje biblioteki.
2. Wybierz Dodaj.
3. Wybierz jeden lub więcej istniejących plików bibliotek.

Wybrane biblioteki zostaną dodane do wybranego folderu.

![Biblioteki Project libraries wybrane w sekcji Moje biblioteki, z pustym obszarem upuszczania i przyciskiem dodawania bibliotek w nagłówku.](../Images/library-folders/folder-selected.png){: width="460" style="max-width: 100%;"}

Jeśli nie wybierzesz folderu niestandardowego, biblioteki zostaną dodane do sekcji Bez folderu.

#### Przenoszenie bibliotek między folderami
{: #move-libraries-between-folders}

Przeciągnij bibliotekę z jej bieżącej lokalizacji i upuść ją na innym folderze.

Możesz też upuścić bibliotekę w sekcji Bez folderu, aby usunąć ją z folderu niestandardowego.

Jeśli folder jest pusty, TinyCAD wyświetli obszar upuszczania, umożliwiający przeniesienie do niego bibliotek.

![Interfejsy czujników przeniesione z sekcji Bez folderu do Sensors and modules; widoczne są elementy sterujące zmianą kolejności, zmianą nazwy i usuwaniem wybranego folderu.](../Images/library-folders/folder-organise.png){: width="460" style="max-width: 100%;"}

#### Zmienianie kolejności folderów
{: #reorder-folders}

Kolejność folderów można zmieniać bezpośrednio w panelu.

1. Najedź kursorem na folder, który chcesz przenieść.
2. Przeciągnij uchwyt zmiany kolejności.
3. Upuść folder w docelowym miejscu na liście.

Nowa kolejność jest zapisywana automatycznie.

#### Zmienianie nazwy lub usuwanie folderu
{: #rename-or-delete-a-folder}

Przyciski czynności dotyczących folderu są wyświetlane po najechaniu na niego kursorem lub po jego wybraniu.

- Wybierz **Zmień nazwę folderu** (ikona ołówka), aby zmienić nazwę folderu. Wpisz nową nazwę i wybierz **Zmień nazwę**.
- Wybierz **Usuń folder** (ikona kosza), aby usunąć folder. Potwierdź, wybierając **Usuń**.

![Okno dialogowe zmiany nazwy folderu, w którym nazwa Sensors and modules jest zmieniana na Sensors and displays.](../Images/library-folders/folder-rename.png){: width="600" style="max-width: 100%;"}

Po usunięciu folderu znajdujące się w nim biblioteki są przenoszone do sekcji Bez folderu. Same pliki bibliotek nie są usuwane z TinyCAD.

#### Biblioteki bez folderu
{: #unfiled-libraries}

Sekcja Bez folderu jest domyślną lokalizacją bibliotek, które nie są przypisane do folderu niestandardowego.

- Nowe biblioteki trafiają do sekcji Bez folderu, jeśli nie wybrano folderu niestandardowego
- Biblioteki z usuniętego folderu są przenoszone do sekcji Bez folderu
- Możesz przeciągać biblioteki z sekcji Bez folderu do dowolnego folderu niestandardowego

Jeśli nie ma folderów niestandardowych, TinyCAD wyświetla po prostu listę bibliotek bez nagłówka Bez folderu.

#### Uwagi
{: #notes}

- Zmiany organizacji folderów są zapisywane wraz z konfiguracją zapisanych bibliotek
- Podczas wybierania istniejących plików bibliotek można dodać ich wiele jednocześnie
- Kolejność folderów i przypisania bibliotek do folderów są zachowywane między sesjami

</div>


- Wróć do [Symbole i biblioteki](../Symbols-and-Libraries/)
- Wróć do [Zawartość v4](../)

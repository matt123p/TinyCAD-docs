---
layout: default
---
# Biblioteki symboli niestandardowych
{: #custom-symbol-libraries}

Ta strona opisuje zadania związane z bibliotekami: dodawanie bibliotek do TinyCAD, otwieranie ich do edycji, tworzenie nowych plików bibliotek oraz wykonywanie prostych czynności związanych z zarządzaniem symbolami, takich jak dodawanie, duplikowanie, zmienianie nazw i usuwanie.

Informacje o przeglądaniu bibliotek i umieszczaniu symboli na rysunku znajdziesz w sekcji [Korzystanie z bibliotek symboli](../Using-Symbol-Libraries/). Informacje o rysowaniu lub modyfikowaniu samego symbolu, w tym wyprowadzeń i właściwości symbolu, znajdziesz w sekcji [Edycja symbolu](../Editing-a-Symbol/).

Pliki bibliotek używają rozszerzenia `.tclib` i mogą być przechowywane na komputerze lub, dzięki integracji z Google, na Dysku Google. Są zgodne zarówno z komputerową, jak i przeglądarkową wersją TinyCAD.

Można również wczytywać biblioteki utworzone w starszej wersji TinyCAD v3.

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Przeglądarka
{: #browser}

#### Otwieranie istniejącej biblioteki z pliku lokalnego
{: #open-an-existing-library-from-a-local-file}

1. Otwórz kolejną kartę lub okno TinyCAD w przeglądarce.
2. Użyj polecenia **Otwórz (Open)**, aby otworzyć plik biblioteki `.tclib`.
3. Pozostaw tę kartę otwartą podczas pracy z biblioteką.

Po otwarciu biblioteki możesz przeglądać symbole lub przeciągać je z tego okna na rysunek, a także edytować definicje symboli w bibliotece.

#### Udostępnianie biblioteki z Dysku Google
{: #make-a-google-drive-library-available}

Jeśli masz już biblioteki utworzone w komputerowej wersji TinyCAD, przyznaj TinyCAD w przeglądarce dostęp do każdej z nich:

1. Na Dysku Google kliknij plik `.tclib` prawym przyciskiem myszy.
2. Wybierz **Otwórz za pomocą -> TinyCAD (Open with -> TinyCAD)**.

<img src="/v4/images/media2/image1.png" alt="Google Drive context menu showing Open with TinyCAD for a library file" style="width: 6.26806in; height: 4.54514in;" />

Powtórz te czynności dla **każdej** biblioteki, którą chcesz udostępnić.

Ta czynność otwiera bibliotekę do edycji. Jeśli potrzebujesz jedynie dostępu, możesz później zamknąć tę kartę lub okno.

**Uwaga:** Dysk Google może czasami rozróżniać wielkość liter. Jeśli `TinyCAD` nie pojawia się w menu **Otwórz za pomocą (Open with)**, upewnij się, że `.tclib` zapisano małymi literami.

Wróć do sesji rysowania:

1. Otwórz **Moje biblioteki (My Libraries)**.
2. Kliknij **Odśwież (Refresh)** obok **Moje biblioteki (My Libraries)**.

<img src="/v4/images/media2/image2.png" alt="My Libraries panel with the Refresh button used to reload available libraries" />

Po odświeżeniu biblioteki pojawią się na liście:

<img src="/v4/images/media2/image4.png" alt="My Libraries panel listing available custom symbol libraries"  />

Możesz przeglądać biblioteki, rozwijając je:

<img src="/v4/images/media2/image3.png" alt="Library browser showing symbol search results and a preview button"  />

#### Tworzenie nowej biblioteki
{: #creating-a-new-library}

Użyj pozycji menu **Nowa biblioteka niestandardowa (New Custom Library)**:

<img src="/v4/images/media2/image5.png" alt="Menu with the New Custom Library command"/>

#### Edycja biblioteki
{: #edit-a-library}

Edytuj istniejącą bibliotekę, otwierając ją w TinyCAD w przeglądarce za pomocą przycisku **Edytuj (Edit)** przy bibliotece.

### Aplikacja komputerowa
{: #desktop-app}

#### Dodawanie lub usuwanie bibliotek
{: #add-or-remove-libraries}

Zanim będzie można używać symboli z biblioteki, należy dodać ją do listy bibliotek w sekcji **Moje biblioteki (My Libraries)**.

![Panel boczny Moje biblioteki](/v4/images/media/image9.png)

Aby dodać bibliotekę do tej listy, kliknij **Dodaj (Add)**. Pojawi się okno wyboru pliku. Wybierz plik biblioteki z rozszerzeniem `.tclib`.

Aby usunąć bibliotekę z listy, kliknij ikonę edycji przy bibliotece, aby otworzyć okno dialogowe biblioteki, a następnie kliknij **Usuń (Remove)**. Plik nie zostanie skasowany — zostanie jedynie usunięty z listy.

#### Edycja biblioteki
{: #edit-a-library-1}

W oknie dialogowym edycji biblioteki wybierz bibliotekę i kliknij **Edytuj (Edit)**. Otworzy się nowe okno z widokiem miniatur biblioteki.

![Edytor biblioteki z miniaturami symboli](/v4/images/media/image10.png)

W oknie edycji biblioteki możesz:

- Wyświetlać miniatury symboli w bibliotece
- Dodawać nowe symbole do biblioteki
- Usuwać, duplikować i zmieniać nazwy symboli w bibliotece
- Edytować grafikę, wyprowadzenia, nazwy i atrybuty symbolu
- Przenosić symbole z jednej biblioteki do innej

Wybierz symbol, klikając go. Po zaznaczeniu możesz edytować go w oknie głównym albo użyć dostępnych elementów sterujących, aby go zduplikować lub usunąć.

Po zakończeniu edycji biblioteki zapisz ją za pomocą standardowych poleceń **Zapisz (Save)** lub **Zapisz jako (Save As)**.

Informacje o przebiegu edycji na poziomie symbolu znajdziesz w sekcji [Edycja symbolu](../Editing-a-Symbol/).

#### Tworzenie nowej biblioteki symboli
{: #creating-a-new-symbol-library}

Użyj przycisku **Nowa (New)** w panelu bibliotek. Otworzy się nowe okno z pustą biblioteką.

</div>

- Wróć do [Symbole i biblioteki](../Symbols-and-Libraries/)
- Wróć do [Spis treści v4](../CONTENTS/)

---
layout: default
---
# Niestandardowe biblioteki symboli
{: #custom-symbol-libraries}

Ta strona omawia zadania związane z bibliotekami: dodawanie bibliotek do TinyCAD, otwieranie ich do edycji, tworzenie nowych plików bibliotek oraz wykonywanie prostych czynności związanych z zarządzaniem symbolami, takich jak dodawanie, powielanie, zmienianie nazw i usuwanie.

Informacje o przeglądaniu bibliotek i umieszczaniu symboli na rysunku znajdziesz w sekcji [Korzystanie z bibliotek symboli](../Using-Symbol-Libraries/). Informacje o rysowaniu lub modyfikowaniu samych symboli, w tym pinów i właściwości symboli, znajdziesz w sekcji [Edycja symbolu](../Editing-a-Symbol/).

[Asystent AI ](../AI-Assistant/) może dodawać komponenty do biblioteki otwartej do edycji. Najpierw utwórz bibliotekę lub otwórz istniejącą, a następnie opisz wymagane elementy i dołącz ich karty katalogowe. Sprawdź wygenerowane symbole i zapisz bibliotekę w zwykły sposób.

Pliki bibliotek mają rozszerzenie `.tclib` i można je przechowywać na komputerze lub, po włączeniu integracji z Google, na Dysku Google. Są zgodne zarówno z komputerową, jak i przeglądarkową wersją TinyCAD.

Możesz także wczytywać biblioteki utworzone w starszej wersji TinyCAD v3.

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Przeglądarka
{: #browser}

#### Otwieranie istniejącej biblioteki z pliku lokalnego
{: #open-an-existing-library-from-a-local-file}

1. Otwórz kolejną kartę lub okno TinyCAD w przeglądarce.
2. Użyj polecenia **Open (Otwórz)**, aby otworzyć plik biblioteki `.tclib`.
3. Pozostaw tę kartę otwartą na czas pracy z biblioteką.

Po otwarciu biblioteki możesz przeglądać symbole lub przeciągać je z tego okna na rysunek, a także edytować definicje symboli w bibliotece.

#### Udostępnianie biblioteki na Dysku Google
{: #make-a-google-drive-library-available}

Jeśli masz biblioteki utworzone w komputerowej wersji TinyCAD, przyznaj TinyCAD w przeglądarce dostęp do każdej z nich:

1. Na Dysku Google kliknij plik `.tclib` prawym przyciskiem myszy.
2. Wybierz **Open with -> TinyCAD (Otwórz za pomocą -> TinyCAD)**.

<img src="/v4/images/media2/image1.png" alt="Google Drive context menu showing Open with TinyCAD for a library file" style="width: 6.26806in; height: 4.54514in;" />

Powtórz te czynności dla **każdej** biblioteki, którą chcesz udostępnić.

Ta czynność otwiera bibliotekę do edycji. Jeśli potrzebujesz jedynie dostępu, możesz potem zamknąć tę kartę lub okno.

**Uwaga:** Dysk Google może czasami rozróżniać wielkość liter. Jeśli `TinyCAD` nie pojawia się w menu **Open with (Otwórz za pomocą)**, upewnij się, że `.tclib` jest zapisane małymi literami.

Wróć do sesji rysowania:

1. Otwórz **My Libraries (Moje biblioteki)**.
2. Kliknij **Refresh (Odśwież)** obok **My Libraries (Moje biblioteki)**.

<img src="/v4/images/media2/image2.png" alt="My Libraries panel with the Refresh button used to reload available libraries" />

Po odświeżeniu biblioteki zostaną wyświetlone:

<img src="/v4/images/media2/image4.png" alt="My Libraries panel listing available custom symbol libraries"  />

Możesz przeglądać biblioteki, rozwijając je:

<img src="/v4/images/media2/image3.png" alt="Library browser showing symbol search results and a preview button"  />

#### Tworzenie nowej biblioteki
{: #creating-a-new-library}

Użyj pozycji menu **New Custom Library (Nowa biblioteka niestandardowa)**:

<img src="/v4/images/media2/image5.png" alt="Menu with the New Custom Library command"/>

#### Edytowanie biblioteki
{: #edit-a-library}

Edytuj istniejącą bibliotekę, otwierając ją w TinyCAD w przeglądarce za pomocą przycisku **Edit (Edytuj)** przy bibliotece.

### Aplikacja komputerowa
{: #desktop-app}

#### Dodawanie lub usuwanie bibliotek
{: #add-or-remove-libraries}

Aby można było używać symboli z biblioteki, należy dodać ją do listy bibliotek w sekcji **My Libraries (Moje biblioteki)**.

![Panel boczny Moje biblioteki](/v4/images/media/image9.png)

Aby dodać bibliotekę do tej listy, kliknij **Add (Dodaj)**. Zostanie wyświetlone okno wyboru pliku. Wybierz plik biblioteki z rozszerzeniem `.tclib`.

Aby usunąć bibliotekę z listy, kliknij ikonę edycji przy bibliotece, aby otworzyć okno biblioteki, a następnie kliknij **Remove (Usuń)**. Nie spowoduje to usunięcia pliku, a jedynie usunie bibliotekę z listy.

#### Edytowanie biblioteki
{: #edit-a-library-1}

W oknie edycji biblioteki wybierz bibliotekę i kliknij **Edit (Edytuj)**. Otworzy się nowe okno z widokiem miniatur biblioteki.

![Edytor bibliotek z miniaturami symboli](/v4/images/media/image10.png)

W oknie edycji biblioteki możesz:

- Wyświetlać miniatury symboli w bibliotece
- Dodawać nowe symbole do biblioteki
- Usuwać, powielać i zmieniać nazwy symboli w bibliotece
- Edytować grafikę, piny, nazwy i atrybuty symbolu
- Przenosić symbole z jednej biblioteki do innej

Wybierz symbol, klikając go. Po wybraniu możesz edytować go w oknie głównym albo użyć elementów sterujących, aby go powielić lub usunąć.

Po zakończeniu edycji biblioteki zapisz ją, używając standardowych poleceń **Save (Zapisz)** lub **Save As (Zapisz jako)**.

Informacje o edycji pojedynczych symboli znajdziesz w sekcji [Edycja symbolu](../Editing-a-Symbol/).

#### Tworzenie nowej biblioteki symboli
{: #creating-a-new-symbol-library}

Użyj przycisku **New (Nowa)** w panelu bibliotek. Otworzy się nowe okno z pustą biblioteką.

</div>

- Wróć do [Symbole i biblioteki](../Symbols-and-Libraries/)
- Wróć do [zawartości v4](../CONTENTS/)

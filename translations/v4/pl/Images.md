---
layout: default
---
# Obrazy
{: #images}

Dodawaj obrazy do rysunku jako logo, ilustracje poglądowe lub zeskanowane schematy. Możesz wkleić obraz ze schowka albo wybrać plik, korzystając z polecenia **Plik (File) → Importuj (Import) → Obraz… (Image…)** zarówno w TinyCAD Desktop, jak i w aplikacji przeglądarkowej.

Obrazy są grafiką umieszczoną na arkuszu. Nie tworzą komponentów, pinów ani połączeń elektrycznych. Aby zamienić obraz obwodu na edytowalne symbole i przewody, użyj [asystenta AI w wersji Desktop](../AI-Assistant/).

## Kopiowanie i wklejanie
{: #copy-and-paste}

1. W innej aplikacji skopiuj sam obraz, a nie jego nazwę pliku ani odnośnik. Na przykład użyj polecenia **Kopiuj obraz (Copy image)** w przeglądarce albo skopiuj zaznaczenie w edytorze obrazów.
2. Wróć do TinyCAD i kliknij obszar rysunku, tak aby nie edytować pola tekstowego.
3. Naciśnij **Ctrl+V** (**Cmd+V** w systemie macOS).
4. Zaznacz wklejony obraz i przeciągnij go w odpowiednie miejsce.

Obsługiwane są obrazy ze schowka w formacie PNG lub JPEG. Jeśli obrazu nie można wkleić, zapisz go jako plik i użyj polecenia Importuj. Możesz także kopiować i wklejać obrazy umieszczone już na rysunku TinyCAD.

## Importowanie z pliku
{: #import-from-a-file}

1. Otwórz **Plik (File) → Importuj (Import) → Obraz… (Image…)**. W aplikacji przeglądarkowej otwórz menu **Plik (File)**, używając ikony dokumentu na pasku narzędzi.
2. Wybierz plik obrazu i zatwierdź wybór w oknie wyboru pliku.
3. Obraz pojawi się na bieżącym arkuszu. Zaznacz go, aby przesunąć, zmienić jego rozmiar lub przyciąć go.

Pliki PNG i JPEG są osadzane bezpośrednio. Inne formaty, które przeglądarka potrafi dekodować, takie jak GIF, WebP, BMP i SVG, są konwertowane do PNG. Zaimportowane obrazy pozostają statyczne — animacja nie jest zachowywana. Obsługa formatów zależy od przeglądarki lub silnika przeglądarki dołączonego do TinyCAD Desktop. Nieczytelny lub nieobsługiwany plik powoduje wyświetlenie błędu.

Możesz także przeciągnąć plik PNG lub JPEG na rysunek, aby umieścić go w miejscu upuszczenia.

## Przesuwanie i zmiana rozmiaru
{: #move-and-resize}

Kliknij obraz, aby go zaznaczyć. Przeciągnij jego środek, aby go przesunąć, albo przeciągnij uchwyt narożny lub krawędziowy, aby zmienić jego rozmiar.

Dolny pasek właściwości wyświetla sekcję **Obraz**, gdy obraz jest zaznaczony. Włącz opcję **Stałe proporcje (Fixed aspect ratio)**, aby podczas zmiany rozmiaru zachować bieżący stosunek szerokości do wysokości. Wyłącz ją, aby niezależnie zmieniać szerokość i wysokość. Przesuwanie obrazu nie zmienia jego proporcji.

Polecenie **Przywróć proporcje (Reset aspect ratio)** przywraca oryginalne proporcje widocznego obrazu z uwzględnieniem przycięcia. Zachowuje bieżącą szerokość i położenie lewego górnego rogu, a następnie dostosowuje wysokość. Ustawienie pola wyboru Stałe proporcje pozostaje bez zmian. Przywrócenie można cofnąć.

## Przycinanie krawędzi
{: #clip-the-edges}

Użyj pól **Przycięcie z lewej (px) (Left clipping (px))**, **Przycięcie z prawej (px) (Right clipping (px))**, **Przycięcie od góry (px) (Top clipping (px))** i **Przycięcie od dołu (px) (Bottom clipping (px))** we właściwościach obrazu, aby ukryć niepożądane obramowania lub fragmenty obrazu.

- Wartości są liczbą całkowitą pikseli mierzoną na oryginalnym obrazie, niezależnie od jego wyświetlanego rozmiaru i siatki rysunku.
- Na przykład ustawienie pola **Przycięcie z lewej (px)** na **20** ukrywa 20 skrajnych pikseli z lewej strony obrazu źródłowego.
- Przycięcie zachowuje pozostałe piksele w ich dotychczasowej skali i położeniu; widoczna granica przesuwa się do wewnątrz, zamiast rozciągać obraz.
- W każdym kierunku musi pozostać co najmniej jeden piksel. Zakres wartości pól jest odpowiednio ograniczony.
- Ustaw wartość krawędzi z powrotem na **0**, aby ją przywrócić. Przycinanie nie usuwa pikseli z osadzonego oryginału.

Polecenia **Cofnij (Undo)** i **Ponów (Redo)** obejmują wstawianie obrazów i zmiany ich właściwości, a także przesuwanie i zmianę rozmiaru.

## Zapisywanie i eksport
{: #saving-and-output}

Obrazy są osadzane w pliku rysunku, więc oryginalny plik nie musi pozostać w miejscu, z którego został zaimportowany. Zapisz rysunek w zwykły sposób, aby zachować obrazy, ustawienia stałych proporcji i przycięcie. Ustawienia te są zachowywane po ponownym otwarciu, a także w skompresowanych rysunkach `.dzn`.

Przycięcie dotyczy każdego umieszczonego obrazu osobno, więc różne kopie mogą pokazywać inne fragmenty tego samego obrazu. Widoczny obraz jest uwzględniany w wydruku oraz w eksporcie do PDF i SVG.

- Wróć do [Rysowanie](../User-guide/)
- Wróć do [spisu treści v4](../CONTENTS/)

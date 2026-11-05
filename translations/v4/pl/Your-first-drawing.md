---
layout: default
---
# Pierwszy rysunek
{: #your-first-drawing}

Ta strona przeprowadzi Cię przez kolejne kroki rysowania pierwszego schematu obwodu w TinyCAD.

W najprostszej postaci rysunek TinyCAD to zbiór symboli połączonych
przewodami. W tym przykładzie umieścisz kilka symboli, a następnie połączysz je przewodami.

## Przykładowy obwód
{: #example-circuit}

Oto prosty obwód do narysowania:

<img src="/v4/images/media/image1.png" alt="Simple battery, resistor, and LED circuit used in the tutorial" style="width: 2.13542in; height: 1.13542in;" />

<p>
	<a href="/v4/examples/First%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Pobierz
	</a>
</p>


## Instrukcja wideo
{: #video-walkthrough}

{% include video-player.html
	src="/v4/images/video/Video 2.mp4"
	width=1618
	height=922
	caption="Film instruktażowy pokazujący, jak edytować i przesuwać tekst symbolu."
%}

# Instrukcja krok po kroku
{: #step-by-step-guide}

## Biblioteki symboli
{: #symbol-libraries}

1. Wpisz `battery` w polu wyszukiwania.
2. Wybierz **Bateria wieloogniwowa (Multi Cell Battery)**.
3. Przeciągnij symbol z panelu symboli na rysunek.

Teraz umieść rezystor i diodę LED.

Użyj przycisków obracania/odwracania na pasku narzędzi, aby ustawić symbole:

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />

Jeśli popełnisz błąd, użyj poleceń Cofnij/Ponów (Undo/Redo):

<img src="/v4/images/media/image6.png" alt="Undo and Redo toolbar buttons" />

Rysunek powinien wyglądać podobnie do tego:

<img src="/v4/images/media/image7.png" alt="Battery, resistor, and LED symbols placed on the drawing before wiring" style="width: 3.76042in; height: 2.52083in;" />

## Łączenie obwodu przewodami
{: #wiring-up-a-circuit}

1. Wybierz narzędzie **Przewód (Wire)**.
2. Kliknij zacisk baterii, aby rozpocząć rysowanie przewodu.
3. Przejdź do zacisku rezystora i kliknij ponownie, aby umieścić przewód.

Przewody przyciągają się do prawidłowych punktów połączeń symboli. Czerwone kółko wskazuje
miejsce przyciągania.

Wskazówka: naciśnij `W` na klawiaturze, aby szybko ponownie włączyć tryb rysowania przewodów.

Po połączeniu obwód powinien wyglądać podobnie do tego:

<img src="/v4/images/media/image8.png" alt="Example circuit after the battery, resistor, and LED have been wired together" style="width: 3.40625in; height: 2.38542in;" />

## Dodawanie opisów do rysunku
{: #annotating-the-drawing}

Symbole wymagają wartości elementów i oznaczeń. W TinyCAD są to zazwyczaj
pola symbolu **Nazwa (Name)** i **Oznaczenie (Ref)**.

1. Kliknij baterię.
2. Przejdź do panelu **Symbol** u dołu.
3. Zmień `BATTERY_2` na `9V`.
4. Zmień oznaczenie `Z?` na `B1`.

Powtórz te czynności dla pozostałych elementów:

- Rezystor: Nazwa `1K`, Oznaczenie `R1`
- LED: Nazwa `Red Led`, Oznaczenie `D1`

Jeśli nazwa lub oznaczenie są ukryte, użyj pól wyboru, aby wyświetlić lub ukryć tekst
na rysunku.

## Wczytywanie i zapisywanie
{: #loading-and-saving}

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Pliki lokalne w przeglądarce
{: #browser-local-files}

Aby zapisać rysunek, użyj przycisków „Zapisz jako” (Save As) lub „Zapisz” (Save) na pasku narzędzi:

<img src="/v4/images/media/image2.png" alt="The toolbar buttons for Save and Save As"  />


### Google w przeglądarce
{: #browser-google}

Pierwszy rysunek jest gotowy. Aby zmienić jego nazwę:

1. Kliknij nazwę rysunku u góry (na przykład `tCad1.dsn`).
2. Zmień nazwę na `First Drawing.dsn`.
3. Naciśnij Enter.

<img src="/v4/images/media/image13.png" alt="Editable drawing title field used to rename the current design" style="width: 4.15625in; height: 0.92708in;" />

Zapisz na Dysku Google, używając ikony **Zapisz (Save)**.

Aby ponownie wczytać rysunek z Dysku Google:

1. Otwórz <https://drive.google.com/drive/>.
2. Znajdź rysunek.
3. Kliknij go prawym przyciskiem myszy i wybierz **Otwórz za pomocą -> TinyCAD (Open with -> TinyCAD)**.

<img src="/v4/images/media/image14.png" alt="Google Drive context menu showing Open with TinyCAD for a drawing file" style="width: 5.09138in; height: 3.90625in;" />

Możesz także zmieniać nazwy projektów TinyCAD i usuwać je na Dysku Google.

### Aplikacja komputerowa
{: #desktop-app}

Pierwszy rysunek jest gotowy. Aby zapisać go w aplikacji komputerowej:

1. Otwórz **Plik -> Zapisz jako (File -> Save As)**.
2. Wybierz folder na komputerze.
3. Zapisz rysunek jako `First Drawing.dsn`.

Aby wczytać go ponownie później:

1. Otwórz **Plik -> Otwórz (File -> Open)**.
2. Przejdź do `First Drawing.dsn`.
3. Wybierz plik i otwórz go.

Wersja TinyCAD na komputer używa tego samego formatu `.dsn` co TinyCAD w przeglądarce. Możesz
pobrać rysunek z Dysku Google i otworzyć go w aplikacji komputerowej.

Podobnie możesz używać rysunków utworzonych w komputerowej wersji TinyCAD
w wersji działającej w przeglądarce.

</div>

## Dalsza lektura
{: #further-reading}

Informacje o własnych symbolach i bibliotekach znajdziesz w dalszej części:
[Biblioteki własnych symboli](../Custom-symbol-libraries/).

- Wstecz do [Rysowanie](../User-guide/)
- Wstecz do [spisu treści v4](../CONTENTS/)

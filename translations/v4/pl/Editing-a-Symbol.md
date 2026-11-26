---
layout: default
---
# Edytowanie symbolu
{: #editing-a-symbol}

Aby wygenerować symbol na podstawie karty katalogowej lub dodać kilka komponentów do otwartej biblioteki, zobacz [przewodnik po asystencie AI ](../AI-Assistant/). Jego wyniki możesz dopracować za pomocą narzędzi edycji opisanych na tej stronie.

## Jak działają symbole w TinyCAD
{: #how-symbols-work-in-tinycad}

Symbole tworzy się ze zwykłych obiektów dostępnych na pasku narzędzi. Mogą zawierać
dowolne z tych obiektów, z wyjątkiem innych symboli.

Jeśli symbol zawiera obiekty o specjalnych funkcjach (takie jak element zasilania
lub przewód), będą one traktowane jak adnotacje.

Wszystkie ich specjalne funkcje zostają utracone po użyciu w symbolu. Punkty
połączeń elektrycznych definiują wyłącznie **wyprowadzenia**.

Podsumowanie:
- symbol to wielokrotnie używana grafika wraz z atrybutami
- połączenia elektryczne definiują **wyprowadzenia**
- symbole są przechowywane w **bibliotekach** (`.tclib`)

## Zanim zaczniesz
{: #before-you-start}

Na tej stronie zakłada się, że masz już otwartą bibliotekę do edycji. Sposób
otwierania lub tworzenia biblioteki zależy od tego, czy używasz TinyCAD Web, czy
aplikacji desktopowej, dlatego zacznij od strony [Biblioteki symboli użytkownika](../Custom-symbol-libraries/).

Jeśli szukasz informacji o przeglądaniu i umieszczaniu symboli, a nie o ich edycji, zobacz [Korzystanie z bibliotek symboli](../Using-Symbol-Libraries/).

## Otwieranie lub tworzenie symbolu
{: #open-or-create-the-symbol}

1. Otwórz bibliotekę.
2. Aby edytować istniejący symbol, kliknij go na liście symboli biblioteki.
3. Aby utworzyć nowy symbol, kliknij przycisk `+` na liście symboli.
4. Wybrany lub nowy symbol zostanie wczytany na obszar roboczy edytora.

Następnie możesz modyfikować grafikę, wyprowadzenia i atrybuty symbolu.

{% include video-player.html
	src="/v4/Images/video/Video 12.mp4"
	width=1532
	height=978
	caption="Film instruktażowy pokazujący edycję biblioteki."
%}


## Rysowanie kształtu symbolu (grafiki)
{: #drawing-the-symbol-shape-graphics}

Użyj standardowych narzędzi rysowania, aby utworzyć obrys symbolu:

- linii/łamanych do krawędzi obudowy,
- prostokątów/elips/łuków do typowych obrysów obudów,
- tekstu do opcjonalnych oznaczeń wewnętrznych.

Zadbaj o czytelność symbolu przy typowym powiększeniu schematu. Proste kształty
zwykle sprawdzają się lepiej niż mocno dekoracyjne grafiki.

## Dodawanie wyprowadzeń
{: #adding-pins}

Wyprowadzenia to jedyna część symbolu aktywna elektrycznie.

Dla każdego wyprowadzenia ustaw:

- **Numer wyprowadzenia** (wymagany i niepowtarzalny w obrębie elementu),
- **Nazwę wyprowadzenia** (opcjonalną, ale zdecydowanie zalecaną),
- **Typ elektryczny** (wymagany do prawidłowego działania DRC),
- **Styl/kształt wyprowadzenia** (wygląd),
- **Widoczność** tekstu nazwy/numeru wyprowadzenia, zależnie od potrzeb.

Umieszczaj wyprowadzenia starannie na siatce, aby prowadzenie przewodów na
schemacie było proste.

{% include video-player.html
	src="/v4/Images/video/Video 13.mp4"
	width=1532
	height=978
	caption="Film instruktażowy pokazujący dodawanie wyprowadzeń."
%}


## Panel wyprowadzeń
{: #pin-panel}

Wyprowadzenia możesz edytować w panelu **Pin** w obszarze **dolnego panelu**.

Zmiany w panelu Pin są **wprowadzane na bieżąco**: każda zmiana pola natychmiast
wywołuje akcję aktualizacji wyprowadzenia (bez osobnego kroku OK/Zastosuj).

Sekcje panelu Pin:

1. **Nazwa**
	- Pole wyboru Show (Pokaż) (`show_name`)
	- Pole tekstowe Name (Nazwa) (`name`)
	- Pole wyboru Centre on pin (Wyśrodkuj względem wyprowadzenia) (`centre_name`)
2. **Numer**
	- Pole wyboru Show (Pokaż) (`show_number`)
	- Pole tekstowe Number (Numer) (`number`)
	- Pole numeryczne Offset (Przesunięcie) (`number_pos`)
3. **Typ**
	- Lista rozwijana Shape (Kształt) (`which`)
	- Lista rozwijana Electrical (Typ elektryczny) (`elec`)
	- Pole numeryczne Length (Długość) (`length`, zakres interfejsu użytkownika 5..50)

Uwagi:

- Kształt określa wygląd symbolu oraz niektóre specjalne zachowania wizualne.
- Kształt `Cross` i typ elektryczny `Not Connected` rysują znacznik krzyżyka.
- Style kształtu `Power` i `Hidden` są wyświetlane z użyciem kolorów przeznaczonych dla ukrytych wyprowadzeń.

## Typy elektryczne wyprowadzeń i działanie DRC
{: #pin-electrical-types-and-drc-behavior}

Wybór prawidłowego typu elektrycznego ma kluczowe znaczenie. DRC używa tych typów do wykrywania
błędów połączeń.

Bieżące wartości w kodzie źródłowym TinyCAD v4 (`elec`):

- `0` Wejście
- `1` Wyjście
- `2` Trójstanowe
- `3` Otwarty kolektor
- `4` Pasywne
- `5` Wejście/wyjście
- `6` Niepodłączone
- `7` Dowolne
- `8` Nieokreślone
- `9` Wejście zasilania
- `10` Wyjście zasilania
- `11` Otwarty emiter

Ogólne wskazówki:

- Rzeczywiste sygnały sterujące oznacz jako **Wyjście**.
- Sygnały przeznaczone wyłącznie do odbioru oznacz jako **Wejście**.
- Używaj typów **Wejście zasilania/Wyjście zasilania**, gdy semantyka sterowania zasilaniem ma znaczenie dla DRC.
- Typu **Niepodłączone** używaj wyłącznie wtedy, gdy wyprowadzenie ma być celowo niepodłączone.
- Typów **Dowolne**/**Nieokreślone** używaj ostrożnie i konsekwentnie w całej bibliotece.

Praktyczne konsekwencje dla DRC:

- Nieprawidłowe typy wyprowadzeń mogą powodować fałszywe błędy DRC (lub ukrywać rzeczywiste błędy).
- Nazwy wyprowadzeń zasilania muszą odpowiadać zamierzonym nazwom zasilania, aby automatyczne działanie było prawidłowe.

## Wyprowadzenia zasilania i ukryte
{: #power-and-hidden-pins}

Wyprowadzenia zasilania i ukryte są widoczne podczas edycji symbolu, ale zazwyczaj
ukryte po umieszczeniu symbolu na rysunku.

W przypadku **wyprowadzeń zasilania**:

- Nazwa wyprowadzenia jest nazwą sieci zasilającej.
- Połączenie jest tworzone automatycznie, gdy nazwy zasilania są zgodne.
- W widoku umieszczonego symbolu przewody zazwyczaj nie są rysowane bezpośrednio do tych ukrytych wyprowadzeń zasilania.

W przypadku **ukrytych wyprowadzeń**:

- Nadal są aktywne elektrycznie.
- Używaj ich, gdy chcesz samodzielnie narysować kształt wyprowadzenia i jego etykiety.

## Symbole wieloczęściowe (części w obudowie)
{: #multi-part-symbols-parts-per-package}

TinyCAD obsługuje elementy z wieloma jednostkami logicznymi w jednej obudowie (na
przykład bramki poczwórne).

Stosowane są dwa rodzaje symboli wieloczęściowych:

1. **Jednorodne** symbole wieloczęściowe:
	 - części mają ten sam obrys,
	 - zwykle różnią się tylko numerami wyprowadzeń.
2. **Niejednorodne** symbole wieloczęściowe:
	 - części mogą mieć różne obrysy,
	 - części mogą też mieć różne zestawy/funkcje wyprowadzeń.

Używaj wariantu jednorodnego, gdy części są zamienne; wariantu niejednorodnego, gdy każda część
ma odrębną funkcję.

### Przebieg pracy z symbolami wieloczęściowymi
{: #multi-part-workflow}

1. Najpierw zdecyduj, czy symbol ma być jednorodny, czy niejednorodny.
2. Ustaw liczbę części w obudowie.

W przypadku części jednorodnych:
- Pierwsza część określa kształt symbolu i układ wyprowadzeń

W przypadku części niejednorodnych:
- Dla każdej części możesz narysować inny kształt

## Atrybuty i właściwości symbolu
{: #symbol-attributes-and-properties}

Atrybuty symbolu możesz edytować w panelu **Symbol** w **dolnym panelu**.

Oprócz grafiki i wyprowadzeń starannie określ atrybuty symbolu:

- Główną nazwę symbolu (oraz aliasy, jeśli są używane),
- Domyślny format **Ref** (na przykład `U?`, `R?`, `C?`),
- Domyślne **Name/Value** (Nazwa/Wartość),
- Dodatkowe atrybuty/parametry (na przykład obudowę/footprint, pola
	modelu symulacyjnego lub metadane specyficzne dla projektu).

## Ustawianie modelu SPICE
{: #set-a-spice-model}

Wybierz symbol w edytowalnej bibliotece i otwórz jego kartę **SPICE**. Wybierz **Bundled → Find SPICE model…** (Dołączone → Znajdź model SPICE…), aby połączyć model i sprawdzić przyporządkowanie jego wyprowadzeń, albo **Custom** (Niestandardowy), aby edytować szablon instancji i tekst modelu. Zapisz bibliotekę, aby zastosować ustawienia domyślne przy przyszłym umieszczaniu symbolu. Zobacz [Dołączone modele SPICE ](../Bundled-SPICE-Models/#set-a-library-default-or-edit-a-custom-copy): wybór modelu i kopie niestandardowe.

## Zapisywanie, duplikowanie, zmiana nazwy i usuwanie
{: #save-duplicate-rename-delete}

Typowe czynności związane z zarządzaniem symbolami podczas edycji biblioteki:

- **Zapisz/aktualizuj** bieżący symbol, aby zapisać zmiany.
- **Duplikuj**, aby utworzyć warianty (zalecane zamiast destrukcyjnej edycji symbolu
	bazowego).
- **Zmień nazwę** podczas porządkowania nazewnictwa.
- **Usuń** przestarzałe symbole (cofnij operację, jeśli symbol został usunięty przypadkowo).

Duplikuj symbole, aby tworzyć warianty obudowy/wartości, które mają wspólną grafikę, ale różnią się
ustawieniami domyślnymi.

## Lista kontrolna przed opublikowaniem symbolu
{: #validation-checklist-before-publishing-a-symbol}

Przed powszechnym użyciem symbolu sprawdź, czy:

1. Wyprowadzenia leżą na siatce i można do nich łatwo poprowadzić przewody.
2. Numery wyprowadzeń są kompletne i niepowtarzalne w obrębie każdej części.
3. Typy elektryczne wszystkich wyprowadzeń są ustawione prawidłowo.
4. Zachowanie wyprowadzeń zasilania/ukrytych jest zgodne z zamierzeniem.
5. Konfiguracja wieloczęściowa (jeśli występuje) jest prawidłowa.
6. Domyślne nazwa/oznaczenie są odpowiednie.
7. Symbol jest czytelny przy typowym powiększeniu rysunku.

Następnie umieść symbol na testowym schemacie i uruchom DRC.

## Wskazówki dotyczące rozwiązywania problemów
{: #troubleshooting-tips}

- **Przewody nie łączą się z symbolem:** sprawdź położenie końców wyprowadzeń i
	ich wyrównanie do siatki.
- **Nieoczekiwane błędy DRC:** sprawdź typ elektryczny każdego wyprowadzenia.
- **Nieprawidłowe działanie części w symbolach wieloczęściowych:** ponownie sprawdź wybór części i
	numerację wyprowadzeń dla każdej części.
- **Brak automatycznego połączenia zasilania:** sprawdź, czy nazwy wyprowadzeń zasilania odpowiadają zamierzonym nazwom
	sieci.

## Powiązane strony
{: #related-pages}

- [Biblioteki symboli użytkownika](../Custom-symbol-libraries/)
- [Korzystanie z bibliotek symboli](../Using-Symbol-Libraries/)
- [Symbole](../Symbols/)
- [Kontrola reguł projektowych](../Design-Rules-Check/)

- Wróć do [Symbole i biblioteki](../Symbols-and-Libraries/)
- Wróć do [spisu treści v4](../CONTENTS/)

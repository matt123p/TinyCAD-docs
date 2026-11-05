---
layout: default
---
# Edytowanie symbolu
{: #editing-a-symbol}

## Jak działają symbole w TinyCAD
{: #how-symbols-work-in-tinycad}

Symbole tworzy się ze zwykłych obiektów dostępnych na pasku narzędzi. Mogą zawierać
wszystkie te obiekty z wyjątkiem innych symboli.

Jeśli symbol zawiera obiekty o specjalnych funkcjach (takie jak element zasilania
lub przewód), obiekty te będą traktowane jak adnotacje.

Wszystkie ich specjalne funkcje zostają utracone podczas używania ich w symbolu. Tylko **wyprowadzenia** określają
punkty połączeń elektrycznych.

Podsumowanie:
- symbol to wielokrotnie używana grafika wraz z atrybutami
- połączenia elektryczne określają **wyprowadzenia**
- a symbole są przechowywane w **bibliotekach** (`.tclib`)

## Zanim zaczniesz
{: #before-you-start}

Na tej stronie założono, że masz już otwartą bibliotekę do edycji. Sposób
otwierania lub tworzenia biblioteki zależy od tego, czy korzystasz z TinyCAD Web, czy
z aplikacji desktopowej, dlatego zacznij od strony [Niestandardowe biblioteki symboli](../Custom-symbol-libraries/).

Jeśli szukasz informacji o przeglądaniu i umieszczaniu symboli, a nie o ich edycji, zobacz [Korzystanie z bibliotek symboli](../Using-Symbol-Libraries/).

## Otwieranie lub tworzenie symbolu
{: #open-or-create-the-symbol}

1. Otwórz bibliotekę.
2. Aby edytować istniejący symbol, kliknij go na liście symboli biblioteki.
3. Aby utworzyć nowy symbol, kliknij przycisk `+` na liście symboli.
4. Wybrany lub nowy symbol zostanie wczytany na obszar roboczy edytora.

Następnie możesz modyfikować grafikę, wyprowadzenia i atrybuty symbolu.

{% include video-player.html
	src="/v4/images/video/Video 12.mp4"
	width=1532
	height=978
	caption="Film instruktażowy pokazujący, jak edytować bibliotekę."
%}


## Rysowanie kształtu symbolu (grafiki)
{: #drawing-the-symbol-shape-graphics}

Do utworzenia obrysu symbolu użyj standardowych narzędzi rysunkowych:

- linii/łamanych do krawędzi obudowy,
- prostokątów/elips/łuków do typowych obrysów obudów,
- tekstu do opcjonalnych oznaczeń wewnętrznych.

Zadbaj o czytelność symbolu przy typowym powiększeniu schematu. Proste kształty zwykle sprawdzają się
lepiej niż bardzo ozdobna grafika.

## Dodawanie wyprowadzeń
{: #adding-pins}

Wyprowadzenia są jedyną elektrycznie aktywną częścią symbolu.

Dla każdego wyprowadzenia ustaw:

- **Numer wyprowadzenia** (wymagany i unikatowy w obrębie elementu),
- **Nazwę wyprowadzenia** (opcjonalną, ale zdecydowanie zalecaną),
- **Typ elektryczny** (wymagany do poprawnej kontroli DRC),
- **Styl/kształt wyprowadzenia** (wygląd),
- **Widoczność** tekstu nazwy/numeru wyprowadzenia, zależnie od potrzeb.

Umieszczaj wyprowadzenia starannie na siatce, aby prowadzenie przewodów na schemacie było proste.

{% include video-player.html
	src="/v4/images/video/Video 13.mp4"
	width=1532
	height=978
	caption="Film instruktażowy pokazujący, jak dodawać wyprowadzenia."
%}


## Panel wyprowadzenia
{: #pin-panel}

Wyprowadzenia można edytować w panelu **Wyprowadzenie (Pin)** w obszarze **dolnego panelu**.

Zmiany w panelu Wyprowadzenie są **natychmiastowe**: każda zmiana pola powoduje natychmiastowe
działanie aktualizujące wyprowadzenie (bez osobnego kroku OK/Zastosuj).

Sekcje panelu Wyprowadzenie:

1. **Nazwa**
	- Pole wyboru Pokaż (`show_name`)
	- Pole tekstowe Nazwa (`name`)
	- Pole wyboru Wyśrodkuj na wyprowadzeniu (`centre_name`)
2. **Numer**
	- Pole wyboru Pokaż (`show_number`)
	- Pole tekstowe Numer (`number`)
	- Pole numeryczne Przesunięcie (`number_pos`)
3. **Typ**
	- Lista rozwijana Kształt (`which`)
	- Lista rozwijana Elektryczny (`elec`)
	- Pole numeryczne Długość (`length`, zakres interfejsu użytkownika 5..50)

Uwagi:

- Kształt określa wygląd symbolu i niektóre specjalne zachowania wizualne.
- Kształt `Cross` i typ elektryczny `Not Connected` rysują znacznik w postaci krzyżyka.
- Style kształtu `Power` i `Hidden` są wyświetlane z użyciem kolorystyki ukrytych wyprowadzeń.

## Typy elektryczne wyprowadzeń i działanie DRC
{: #pin-electrical-types-and-drc-behavior}

Wybór prawidłowego typu elektrycznego jest niezbędny. DRC używa tych typów do wykrywania
błędów połączeń.

Bieżące wartości w kodzie źródłowym TinyCAD v4 (`elec`):

- `0` Wejście
- `1` Wyjście
- `2` Trójstanowe
- `3` Otwarty kolektor
- `4` Pasywne
- `5` Wejście/Wyjście
- `6` Niepodłączone
- `7` Dowolne
- `8` Nieokreślone
- `9` Wejście zasilania
- `10` Wyjście zasilania
- `11` Otwarty emiter

Ogólne wskazówki:

- Rzeczywiste sygnały sterujące oznaczaj jako **Wyjście**.
- Sygnały wyłącznie odbierające oznaczaj jako **Wejście**.
- Używaj typów **Wejście zasilania/Wyjście zasilania**, gdy semantyka sterowania zasilaniem ma znaczenie dla DRC.
- Typu **Niepodłączone** używaj tylko wtedy, gdy wyprowadzenie ma być celowo niepodłączone.
- Typów **Dowolne**/**Nieokreślone** używaj ostrożnie i konsekwentnie w całej bibliotece.

Praktyczne konsekwencje dla DRC:

- Nieprawidłowe typy wyprowadzeń mogą powodować fałszywe błędy DRC (lub ukrywać rzeczywiste).
- Nazwy wyprowadzeń zasilania muszą odpowiadać zamierzonym nazwom zasilania, aby automatyczne działanie było prawidłowe.

## Wyprowadzenia zasilania i ukryte
{: #power-and-hidden-pins}

Wyprowadzenia zasilania i ukryte są widoczne podczas edycji symbolu, ale zwykle
ukryte po umieszczeniu symbolu na rysunku.

W przypadku **wyprowadzeń zasilania**:

- Nazwa wyprowadzenia pełni funkcję nazwy sieci zasilania.
- Połączenie jest nawiązywane automatycznie, gdy nazwy zasilania są zgodne.
- W widoku umieszczonego symbolu przewody zwykle nie są rysowane bezpośrednio do tych ukrytych wyprowadzeń zasilania.

W przypadku **ukrytych wyprowadzeń**:

- Są one nadal aktywne elektrycznie.
- Używaj ich, gdy chcesz narysować własny kształt wyprowadzenia i jego etykiety.

## Symbole wieloczęściowe (elementy w obudowie)
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

Stosuj wariant jednorodny, gdy części są zamienne; wariant niejednorodny — gdy każda część
pełni odrębną funkcję.

### Praca z symbolami wieloczęściowymi
{: #multi-part-workflow}

1. Najpierw zdecyduj, czy symbol ma być jednorodny, czy niejednorodny.
2. Ustaw liczbę części w obudowie.

Dla części jednorodnych:
- Pierwsza część określa kształt symbolu i rozmieszczenie wyprowadzeń

Dla części niejednorodnych:
- Możesz narysować inny kształt dla każdej części

## Atrybuty i właściwości symbolu
{: #symbol-attributes-and-properties}

Atrybuty symbolu można edytować w panelu **Symbol** w **dolnym panelu**.

Oprócz grafiki i wyprowadzeń starannie określ atrybuty symbolu:

- Podstawową nazwę symbolu (oraz aliasy, jeśli są używane),
- Domyślny format **Ref** (na przykład `U?`, `R?`, `C?`),
- Domyślną **Nazwę/Wartość**,
- Dodatkowe atrybuty/parametry (na przykład pola obudowy/footprintu, modelu
	symulacyjnego lub metadane specyficzne dla projektu).

## Zapisywanie, powielanie, zmiana nazwy i usuwanie
{: #save-duplicate-rename-delete}

Typowe działania związane z zarządzaniem symbolami podczas edycji biblioteki:

- **Zapisz/zaktualizuj** bieżący symbol, aby zapisać zmiany.
- **Powiel**, aby utworzyć warianty (zalecane zamiast destrukcyjnej edycji symbolu bazowego).
- **Zmień nazwę** podczas porządkowania nazewnictwa.
- **Usuń** przestarzałe symbole (cofnij, jeśli usunięto je przypadkowo).

Powielanie pozwala tworzyć warianty obudowy/wartości, które korzystają z tej samej grafiki, ale mają
inne wartości domyślne.

## Lista kontrolna przed opublikowaniem symbolu
{: #validation-checklist-before-publishing-a-symbol}

Przed szerokim użyciem symbolu sprawdź, czy:

1. Wyprowadzenia leżą na siatce i łatwo je podłączyć.
2. Numery wyprowadzeń są kompletne i unikatowe dla każdej części.
3. Typy elektryczne wszystkich wyprowadzeń są prawidłowe.
4. Działanie wyprowadzeń zasilania/ukrytych jest zamierzone.
5. Konfiguracja wieloczęściowa (jeśli występuje) jest prawidłowa.
6. Domyślne nazwa/oznaczenie są odpowiednie.
7. Symbol jest czytelny przy typowym powiększeniu rysunku.

Następnie umieść symbol na testowym schemacie i uruchom DRC.

## Wskazówki dotyczące rozwiązywania problemów
{: #troubleshooting-tips}

- **Przewody nie łączą się z symbolem:** sprawdź położenie końców wyprowadzeń i
	wyrównanie do siatki.
- **Nieoczekiwane błędy DRC:** sprawdź typ elektryczny każdego wyprowadzenia.
- **Nieprawidłowe działanie części w symbolach wieloczęściowych:** ponownie sprawdź wybór części i numerację
	wyprowadzeń każdej części.
- **Brak automatycznego połączenia zasilania:** sprawdź, czy nazwy wyprowadzeń zasilania odpowiadają zamierzonym nazwom sieci.

## Powiązane strony
{: #related-pages}

- [Niestandardowe biblioteki symboli](../Custom-symbol-libraries/)
- [Korzystanie z bibliotek symboli](../Using-Symbol-Libraries/)
- [Symbole](../Symbols/)
- [Kontrola reguł projektowych](../Design-Rules-Check/)

- Wróć do [Symbole i biblioteki](../Symbols-and-Libraries/)
- Wróć do [Spis treści v4](../CONTENTS/)

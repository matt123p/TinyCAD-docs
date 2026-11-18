---
layout: default
---
# Edytowanie symbolu
{: #editing-a-symbol}

Aby wygenerować symbol na podstawie karty katalogowej lub dodać kilka komponentów do otwartej biblioteki, zobacz [Przewodnik asystenta AI ](../AI-Assistant/). Wyniki można dopracować za pomocą narzędzi edycji opisanych na tej stronie.

## Jak działają symbole w TinyCAD
{: #how-symbols-work-in-tinycad}

Symbole tworzy się ze zwykłych obiektów dostępnych na pasku narzędzi. Mogą zawierać
dowolne z tych obiektów, z wyjątkiem innych symboli.

Jeśli symbol zawiera obiekty o funkcjach specjalnych (takie jak element zasilania
lub przewód), będą one traktowane jak adnotacje.

Wszystkie ich funkcje specjalne zostają utracone podczas używania ich w symbolu. Tylko **wyprowadzenia** definiują
elektryczne punkty połączeń.

Podsumowanie:
- symbol to wielokrotnego użytku grafika wraz z atrybutami
- połączenia elektryczne definiują **wyprowadzenia**
- symbole są przechowywane w **bibliotekach** (`.tclib`)

## Zanim zaczniesz
{: #before-you-start}

Na tej stronie założono, że biblioteka jest już otwarta do edycji. Sposób
otwierania lub tworzenia biblioteki zależy od tego, czy używasz TinyCAD Web, czy
aplikacji desktopowej, dlatego zacznij od strony [Niestandardowe biblioteki symboli](../Custom-symbol-libraries/).

Jeśli szukasz informacji o przeglądaniu i umieszczaniu symboli, a nie o ich edytowaniu, zobacz [Korzystanie z bibliotek symboli](../Using-Symbol-Libraries/).

## Otwieranie lub tworzenie symbolu
{: #open-or-create-the-symbol}

1. Otwórz bibliotekę.
2. Aby edytować istniejący symbol, kliknij go na liście symboli biblioteki.
3. Aby utworzyć nowy symbol, kliknij przycisk `+` na liście symboli.
4. Wybrany lub nowy symbol zostanie załadowany na płótno edytora.

Następnie możesz modyfikować grafikę, wyprowadzenia i atrybuty symbolu.

{% include video-player.html
	src="/v4/images/video/Video 12.mp4"
	width=1532
	height=978
	caption="Film instruktażowy pokazujący edytowanie biblioteki."
%}


## Rysowanie kształtu symbolu (grafiki)
{: #drawing-the-symbol-shape-graphics}

Użyj standardowych narzędzi rysowania, aby utworzyć obrys symbolu:

- linie/polilinie do rysowania krawędzi obudowy,
- prostokąty/elipsy/łuki do typowych obrysów obudów,
- tekst do opcjonalnych oznaczeń wewnętrznych.

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
	caption="Film instruktażowy pokazujący dodawanie wyprowadzeń."
%}


## Panel wyprowadzenia
{: #pin-panel}

Wyprowadzenia można edytować w panelu **Wyprowadzenie** w obszarze **dolnego panelu**.

Zmiany w panelu Wyprowadzenie są **natychmiastowe**: każda zmiana pola wywołuje
od razu akcję aktualizacji wyprowadzenia (nie ma osobnego kroku OK/Zastosuj).

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
- Kształt `Cross` i typ elektryczny `Not Connected` rysują znacznik krzyżyka.
- Style kształtu `Power` i `Hidden` są wyświetlane z kolorem ukrytego wyprowadzenia.

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
- `5` Wejście/wyjście
- `6` Niepodłączone
- `7` Swobodne
- `8` Nieokreślone
- `9` Wejście zasilania
- `10` Wyjście zasilania
- `11` Otwarty emiter

Ogólne wskazówki:

- Rzeczywiste sygnały sterujące oznaczaj jako **Wyjście**.
- Sygnały przeznaczone wyłącznie do odbioru oznaczaj jako **Wejście**.
- Używaj typów **Wejście zasilania/Wyjście zasilania**, gdy semantyka zasilania ma znaczenie dla DRC.
- Używaj typu **Niepodłączone** wyłącznie wtedy, gdy wyprowadzenie ma być celowo niepodłączone.
- Typów **Swobodne**/**Nieokreślone** używaj ostrożnie i konsekwentnie w całej bibliotece.

Praktyczny wpływ na DRC:

- Nieprawidłowe typy wyprowadzeń mogą powodować fałszywe błędy DRC (lub ukrywać rzeczywiste).
- Nazwy wyprowadzeń zasilania muszą odpowiadać zamierzonym nazwom zasilania, aby zapewnić automatyczne działanie.

## Zasilanie i ukryte wyprowadzenia
{: #power-and-hidden-pins}

Wyprowadzenia zasilania i ukryte są widoczne podczas edycji symbolu, ale zwykle
pozostają ukryte po umieszczeniu symbolu na rysunku.

W przypadku **wyprowadzeń zasilania**:

- Nazwa wyprowadzenia pełni funkcję nazwy sieci zasilającej.
- Połączenie jest nawiązywane automatycznie, gdy nazwy zasilania są zgodne.
- W widoku umieszczonego symbolu przewody zwykle nie są rysowane bezpośrednio do tych ukrytych wyprowadzeń zasilania.

W przypadku **ukrytych wyprowadzeń**:

- Nadal są aktywne elektrycznie.
- Używaj ich, jeśli chcesz samodzielnie narysować kształt wyprowadzenia i jego etykiety.

## Symbole wieloczęściowe (części w obudowie)
{: #multi-part-symbols-parts-per-package}

TinyCAD obsługuje urządzenia z wieloma jednostkami logicznymi w jednej obudowie (na
przykład bramki poczwórne).

Stosuje się dwa rodzaje symboli wieloczęściowych:

1. **Jednorodne** symbole wieloczęściowe:
	 - części mają ten sam obrys,
	 - zwykle różnią się tylko numerami wyprowadzeń.
2. **Niejednorodne** symbole wieloczęściowe:
	 - części mogą mieć różne obrysy,
	 - części mogą mieć także różne zestawy/funkcje wyprowadzeń.

Używaj symboli jednorodnych, gdy części są zamienne; niejednorodnych, gdy każda część
pełni odrębną funkcję.

### Przebieg pracy z symbolami wieloczęściowymi
{: #multi-part-workflow}

1. Najpierw zdecyduj, czy symbol ma być jednorodny, czy niejednorodny.
2. Ustaw liczbę części w obudowie.

W przypadku części jednorodnych:
- Pierwsza część definiuje kształt symbolu i rozmieszczenie wyprowadzeń

W przypadku części niejednorodnych:
- Dla każdej części można narysować inny kształt

## Atrybuty i właściwości symbolu
{: #symbol-attributes-and-properties}

Atrybuty symbolu można edytować w panelu **Symbol** w **dolnym panelu**.

Oprócz grafiki i wyprowadzeń starannie określ atrybuty symbolu:

- Główna nazwa symbolu (oraz aliasy, jeśli są używane),
- Domyślny format **Ref** (na przykład `U?`, `R?`, `C?`),
- Domyślne **Nazwa/Wartość**,
- Dodatkowe atrybuty/parametry (na przykład obudowa/footprint, pola modelu
	symulacyjnego lub metadane specyficzne dla projektu).

## Zapisywanie, duplikowanie, zmiana nazwy, usuwanie
{: #save-duplicate-rename-delete}

Typowe działania związane z zarządzaniem symbolami podczas edycji biblioteki:

- **Zapisz/zaktualizuj** bieżący symbol, aby zapisać zmiany.
- **Duplikuj**, aby utworzyć warianty (zalecane zamiast destrukcyjnego edytowania symbolu bazowego).
- **Zmień nazwę** podczas porządkowania nazewnictwa.
- **Usuń** nieaktualne symbole (cofnij, jeśli symbol został przypadkowo usunięty).

Duplikuj symbole, aby tworzyć warianty obudowy/wartości, które mają tę samą grafikę, ale różne wartości domyślne.

## Lista kontrolna weryfikacji symbolu przed opublikowaniem
{: #validation-checklist-before-publishing-a-symbol}

Przed powszechnym użyciem symbolu sprawdź, czy:

1. Wyprowadzenia leżą na siatce i można do nich łatwo podłączyć przewody.
2. Numery wyprowadzeń są kompletne i unikatowe dla każdej części.
3. Typy elektryczne wszystkich wyprowadzeń są prawidłowo ustawione.
4. Zachowanie wyprowadzeń zasilania/ukrytych jest zamierzone.
5. Konfiguracja wieloczęściowa (jeśli występuje) jest prawidłowa.
6. Domyślne nazwy/oznaczenia są sensowne.
7. Symbol jest czytelny przy typowym powiększeniu rysunku.

Następnie umieść symbol na testowym schemacie i uruchom DRC.

## Wskazówki dotyczące rozwiązywania problemów
{: #troubleshooting-tips}

- **Przewody nie łączą się z symbolem:** sprawdź położenie końców wyprowadzeń i
	ich wyrównanie do siatki.
- **Nieoczekiwane błędy DRC:** sprawdź typ elektryczny każdego wyprowadzenia.
- **Nieprawidłowe działanie części w symbolu wieloczęściowym:** ponownie sprawdź wybór części i numerację
	wyprowadzeń każdej części.
- **Brak automatycznego połączenia zasilania:** sprawdź, czy nazwy wyprowadzeń zasilania odpowiadają zamierzonym nazwom sieci.

## Powiązane strony
{: #related-pages}

- [Niestandardowe biblioteki symboli](../Custom-symbol-libraries/)
- [Korzystanie z bibliotek symboli](../Using-Symbol-Libraries/)
- [Symbole](../Symbols/)
- [Kontrola reguł projektowych](../Design-Rules-Check/)

- Wróć do [Symbole i biblioteki](../Symbols-and-Libraries/)
- Wróć do [Zawartość v4](../CONTENTS/)

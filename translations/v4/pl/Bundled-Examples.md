---
layout: default
---
# Dołączone przykłady
{: #bundled-examples}

Dołączone przykłady to edytowalne rysunki dostarczane z TinyCAD. Pokazują, jak korzystać z bibliotek, objaśniają wybór połączeń i zawierają obwody do [samouczków symulacji](../Simulation-Tutorials/). Nie trzeba osobno pobierać ich symboli.

## Otwieranie przykładu
{: #open-an-example}

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Przeglądarka
{: #browser}

Wybierz **Open Example** po prawej stronie ciemnego paska tytułu. Po otwarciu przykładu z instrukcjami obok pojawi się przycisk **Explanation**. Użyj go, aby wyświetlić lub ukryć panel z objaśnieniami.

### Aplikacja komputerowa
{: #desktop-app}

Wybierz **File → Open Example**, poniżej **Open Recent**. Użyj **View → View Explanation**, aby wyświetlić lub ukryć instrukcje dotyczące bieżącego przykładu. To polecenie jest niedostępne, gdy rysunek nie ma przypisanych objaśnień.

</div>

1. Wybierz grupę: **Examples**, **SPICE tutorial** lub **XSPICE and digital tutorial**.
2. Wybierz rysunek, aby zobaczyć jego podgląd i opis. Ten wybór nie zastępuje jeszcze bieżącego rysunku.
3. Wybierz **Open drawing**. Jeśli masz niezapisane zmiany, odpowiedz na monit o zapisanie przed kontynuowaniem.
4. Przeczytaj objaśnienia, sprawdź połączenia i zmień edytowalną kopię. Użyj **Save As**, aby zachować swoją wersję.

Użyj **Search groups and examples**, aby znaleźć element o określonej nazwie. Wyczyść wyszukiwanie i wybierz **All groups**, jeśli filtr ukrywa potrzebną grupę.

{% include video-player.html src="/v4/videos/simulation/examples.mp4" poster="/v4/videos/simulation/examples.jpg" caption="Otwórz przykład sieci i wyświetl obok rysunku jego objaśnienia." %}

## Przykłady wyposażenia i układów
{: #equipment-and-layout-examples}

Wybierz grupę **Examples**, aby uzyskać dostęp do tych siedmiu rysunków.

| Rysunek | Co przedstawia | Co warto wypróbować |
| --- | --- | --- |
| **Wzmacniacz tranzystorowy** | Oryginalny schemat wzmacniacza tranzystorowego AMP.dsn | Prześledź polaryzację i tory sygnałowe. Aby uzyskać modelowaną, gotową do uruchomienia rekonstrukcję, skorzystaj z [rozdziału 7 samouczka SPICE.](../SPICE-Tutorial-07/) |
| **Sieć w małym biurze** | Router, przełącznik PoE, panel krosowy i zaślepka w szafie, a także terminal ISP, punkt dostępowy i biurowy przełącznik | Prześledź łącze nadrzędne szafy i przebieg kabli w biurze; dodaj kolejny pasujący panel 1U. |
| **Stacja klimatyczna i wyświetlacz ESP32** | Połączenia sterownika, czujnika i modułu wyświetlacza | Prześledź opisane wyprowadzenia zasilania i sygnałowe, a następnie dostosuj wybrane moduły. |
| **Instalacja fotowoltaiczna i akumulator w domu** | Wytwarzanie energii słonecznej, magazynowanie energii i urządzenia domowego systemu energetycznego na stronie A3 | Prześledź osobno tory zasilania oraz łącza monitorujące i sterujące. |
| **Studio podcastowe dla dwóch osób** | Mikrofony, mikser/interfejs, komputer do nagrywania i odsłuch | Prześledź wejścia mikrofonowe, wyjście do nagrywania i tory słuchawkowe. |
| **Stanowisko z obciążeniem DC i przebiegami** | Połączenia zasilacza, obciążenia, generatora przebiegów, oscyloskopu i miernika | Odróżnij kompletne przewody przyrządów od pojedynczych przewodów. |
| **Stanowisko z silnikiem DC i wyłącznikami krańcowymi** | Sterownik silnika, silnik z przekładnią, połączenia sterujące i wyłączniki krańcowe | Prześledź osobno zasilanie silnika oraz sygnały PWM/kierunku i sygnały krańcowe. |

Sześć układów wyposażenia zawiera objaśnienia połączeń, przyjętych założeń i możliwych rozszerzeń. Są to rysunki fizyczne/systemowe, bez modeli SPICE. Oryginalny wzmacniacz jest również przykładowym rysunkiem; jego otwarcie nie powoduje automatycznego przekształcenia go w symulację gotową do uruchomienia.

Otwarte gniazda mogą być zamierzone. Przewody stykające się z innymi punktami końcowymi lub gniazdami tworzą rzeczywiste połączenia, dlatego podczas dostosowywania układu należy je dokładnie sprawdzić. Osadzone grafiki i wyprowadzenia sprawiają, że przykłady można łatwo przenosić, ale nie zastępują dokumentacji okablowania rzeczywistego urządzenia.

## Przykłady symulacji
{: #simulation-examples}

### Samouczek SPICE
{: #spice-tutorial}

Ta grupa odpowiada [kursowi SPICE składającemu się z jedenastu rozdziałów](../SPICE-Tutorial/). Zaczyna się od dzielnika napięcia, a następnie omawia źródła, ładowanie obwodu RC, filtry AC, prostowanie diodowe, odtworzony wzmacniacz tranzystorowy i badania projektowe. Pozycja **Start here — using the tutorials** otwiera pierwszy dzielnik i wyjaśnia przebieg pracy.

Rysunki zawierają osadzone symbole, tekst modeli, ustawienia analizy i zachowane wyniki odniesienia. Dlatego przebieg może być widoczny **przed pierwszym uruchomieniem**. Wybierz **Run**, aby przeprowadzić nową akwizycję dla bieżącego obwodu i ustawień. Kieruj się oczekiwanymi wartościami podanymi w rozdziale i wprowadzaj sugerowane zmiany, aby zobaczyć, dlaczego wynik się zmienia.

### Samouczek XSPICE i układów cyfrowych
{: #xspice-and-digital-tutorial}

W tej grupie używaj **TinyCAD Desktop**. [Kurs XSPICE składający się z sześciu rozdziałów](../XSPICE-Tutorial/) omawia tabele prawdy układów logicznych, opóźnienie propagacji, hazardy, przerzutniki, liczniki, interfejsy analogowo-cyfrowe i stany nieznane. XSPICE nie jest obsługiwany w wersjach przeglądarkowych. W przeglądarce można jednak otwierać do przeglądania rysunki zawierające zapisane wyniki XSPICE.

W obu grupach samouczków znajduje się 28 różnych rysunków symulacyjnych. Dodatkowa pozycja „Start here” prowadzi do tego samego dzielnika, który jest używany w pierwszym rozdziale samouczka SPICE. Każda lekcja zawiera odsyłacze do rysunków `.dzn` do pobrania i towarzyszących im netlist `.cir`, stanowiących alternatywę dla otwierania dołączonej kopii. Otwieraj pliki `.dzn` w TinyCAD; pliki `.cir` to tekst przeznaczony do przeglądania lub używania w zgodnym zewnętrznym symulatorze.

## Zachowaj swoje eksperymenty
{: #keep-your-experiments}

Dołączony oryginał pozostaje niezmieniony, gdy edytujesz jego otwartą kopię. Ponowne otwarcie tego samego dołączonego przykładu zapewnia świeży punkt wyjścia. Zapisz własny rysunek pod nową nazwą, aby zachować zmiany, a wyniki symulacji zapisz, jeśli chcesz zachować dane liczbowe.

Panel **Explanation** i **Simulation charts** są niezależne. Zamknięcie jednego z nich nie wymaga zamknięcia drugiego. W wersji Desktop wykresy są dostępne przez **View → Show Charts**; w obu produktach użyj na pasku narzędzi polecenia **Simulation → Show charts**.

Podczas udostępniania zapisanego rysunku dołącz wszelkie osobne notatki potrzebne odbiorcy. Dołączone objaśnienia są powiązane z otwieraniem przykładu; nie zakładaj, że zostaną przywrócone po samodzielnym otwarciu zapisanej kopii. Notatki tekstowe osadzone we własnym rysunku pozostają częścią pliku.

Przejdź do [pierwszej symulacji](../Simulation/#run-your-first-simulation) lub [przewodnika rozpoczynającego samouczek](../Tutorial-Start-Here/).

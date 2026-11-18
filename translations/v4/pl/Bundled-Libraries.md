---
layout: default
---
# Dołączone biblioteki
{: #bundled-libraries}

Dołączone biblioteki to zbiory gotowych do umieszczenia symboli dostarczanych z TinyCAD zarówno w przeglądarce, jak i w aplikacji Desktop. Obejmują układy urządzeń oraz obwody elektroniczne. Można z nich korzystać bez logowania, pobierania pliku biblioteki ani konfigurowania folderu bibliotek.

## Znajdowanie i umieszczanie komponentu
{: #find-and-place-a-component}

1. Otwórz panel bibliotek po lewej stronie. Jeśli jest zwinięty, użyj przycisku rozwijania.
2. Wybierz **Standard**. **Online** przeszukuje kolekcję online; **My Libraries** zawiera własne pliki bibliotek.
3. Użyj polecenia **Choose a standard library** (Wybierz bibliotekę standardową), aby wybrać kolekcję. TinyCAD wczytuje jedną bibliotekę standardową naraz i zapamiętuje wybrany zbiór na tym urządzeniu.
4. Przeglądaj listę lub wpisz nazwę albo opis w polu **Search libraries...**. Każdy wynik zawiera podgląd grafiki. Wybierz wynik, aby wyświetlić większy podgląd i opis.
5. Przeciągnij podgląd komponentu na rysunek. Umieść go na siatce; naciśnij **Escape** lub kliknij prawym przyciskiem myszy po zakończeniu umieszczania kopii.

Zmiana wybranej biblioteki nie usuwa już umieszczonych komponentów. Ich definicje są osadzone w rysunku, więc osoba otwierająca go nie musi wczytywać tych samych bibliotek. Biblioteki standardowe są tylko do odczytu; użyj [bibliotek niestandardowych](../Custom-symbol-libraries/), jeśli chcesz samodzielnie zarządzać definicjami symboli.

{% include video-player.html src="/v4/videos/simulation/libraries.mp4" poster="/v4/videos/simulation/libraries.jpg" caption="Wybierz dołączoną bibliotekę, wyszukaj przełącznik ośmioportowy i przeciągnij go na rysunek." %}

## Biblioteki urządzeń i układów
{: #equipment-and-layout-libraries}

Te biblioteki przedstawiają fizyczne rozmieszczenie urządzeń, płytek, zacisków i gniazd. Pomagają wyjaśnić, **co z czym jest połączone**. Nie zawierają wykonywalnego oprogramowania układowego, symulacji mechanicznej ani modeli SPICE.

| Biblioteka | Zawartość | Typowe zastosowanie |
| --- | --- | --- |
| **Układy sieciowe** — 47 symboli | Routery konsumenckie, przełączniki i punkty dostępowe; odpowiadające im przełączniki rackowe 19-calowe, routery, zapory sieciowe, panele krosowe i panele zaślepiające | Okablowanie biurowe, sieci domowe i plany szaf rackowych |
| **Procesory wbudowane i inteligentny dom** — 44 symbole | Dziesięć płytek sterowników, 26 modułów czujników/elementów wykonawczych i osiem wyświetlaczy | Prototypowanie stacji czujnikowej, automatyki domowej lub projektu wbudowanego |
| **Audio i muzyka** — 99 symboli | Mikrofony, miksery, interfejsy, instrumenty, MIDI, komputery, złącza, słuchawki, głośniki, wzmacniacze i sprzęt sceniczny | Koncerty, studia, podcasty, nagrania domowe, kościoły i szkoły |
| **Testowanie i pomiary** — 78 symboli | Zasilacze, obciążenia, oscyloskopy, mierniki, przyrządy RF, sondy, akwizycja danych, grzałki, przekaźniki, układy sterujące, pompy i aparatura stołowa | Połączenia laboratoryjne i stanowiska doświadczalne |
| **Silniki i ruch** — 66 symboli | Silniki prądu stałego i bezszczotkowe, silniki krokowe, serwomechanizmy, płytki sterowników, enkodery, wyłączniki krańcowe, solenoidy, siłowniki elektryczne/pneumatyczne i części mechaniczne | Robotyka, automatyka i okablowanie układów sterowania ruchem |
| **Energia słoneczna i akumulatory** — 52 symbole | Panele, zestawy paneli, falowniki, akumulatory, ładowarki EV, urządzenia zasilania awaryjnego, zabezpieczenia, monitorowanie i odbiorniki domowe | Koncepcyjny domowy system energetyczny oraz jego połączenia zasilające/sterujące |

### Układy sieciowe
{: #network-layout}

Punkty przyłączeniowe Ethernet znajdują się pośrodku gniazd. Jeden punkt oznacza **cały kabel**, a nie osiem pojedynczych żył Ethernet. Przełączniki biurkowe obejmują 4, 5, 8, 16 i 24 porty miedziane, w tym opcje PoE oraz mieszane porty miedziane/światłowodowe. Układy rackowe obejmują konfiguracje 8/16/24/48-portowe z dwoma lub czterema gniazdami SFP+ uplink, a także dodatkowe ogólne układy planistyczne z 10 i 32 portami miedzianymi. Należy traktować je jako dostępne warianty symboli, a nie twierdzenie, że każdy układ jest równie powszechny. Zapoznaj się z nazwą symbolu i oznaczeniami na panelu przednim, aby wybrać potrzebną liczbę portów i układ uplinków.

Panele 19-calowe 1U mają wspólny rozmiar. Zachowaj ich domyślną skalę i układaj je pionowo w odstępach **120 jednostek rysunkowych**, aby utworzyć szafę rackową. [Przykład małej sieci biurowej](../Bundled-Examples/#equipment-and-layout-examples) pokazuje cztery dopasowane panele oraz dłuższe przewody do punktu dostępowego i przełącznika biurkowego. Poprowadź każdy przewód krosowy do punktu przyłączeniowego gniazda; grafika panelu nie łączy automatycznie jego gniazd wewnętrznie.

### Procesory wbudowane i inteligentny dom
{: #embedded-processors-and-smart-home}

Płytki sterowników obejmują ESP32 DevKitC V4, ESP32-S3 DevKitC-1, NodeMCU ESP8266, LOLIN D1 mini, Raspberry Pi 3/4/5 oraz warianty Arduino Uno/Nano/Mega. Moduły czujników obejmują czujniki temperatury, wilgotności, światła, ciśnienia, dotyku i pasywnej podczerwieni, a także wyjścia, takie jak brzęczyki. Płytka PCB, pola lutownicze złącza i oznaczenia pinów pozostają widoczne; mała ikona funkcji wskazuje czujnik zamiast anonimowego prostokąta układu.

Dostępne wyświetlacze obejmują LCD1602 I2C i OLED 128×64, wyświetlacze Waveshare SPI LCD 1,8 cala i pojemnościowy LCD dotykowy 2,8 cala, dotykowy wyświetlacz Nextion UART 2,8 cala oraz zestawy wyświetlaczy e-paper Waveshare 2,13/2,9/4,2 cala. Każdy symbol łączy dwa widoki **jednego urządzenia**: front ekranu po lewej i styki z tyłu/złącza po prawej. Tylko styki z tyłu są punktami przyłączeniowymi elektrycznymi. Powielone złącza mogą udostępniać te same sygnały sprzętowe; nie są dodatkowymi niezależnymi kanałami. Kieruj się oznaczeniami i nazwą rewizji.

Przed podłączeniem sprawdź oznaczenie rewizji płytki. W przypadku złączy Raspberry Pi **numery pinów fizycznych i nazwy GPIO BCM należą do różnych systemów numeracji**. Położenie pinów na płytce pomaga przy tworzeniu schematu połączeń, ale grafika nie jest footprintem PCB ani rysunkiem produkcyjnym. Należy nadal sprawdzić szyny zasilające, poziomy logiczne, limity prądowe i rezystory podciągające w dokumentacji danego modułu.

### Połączenia audio, laboratoryjne i ruchowe
{: #audio-laboratory-and-motion-connections}

Na schematach audio większość gniazd przedstawia całe kable. Opisuj trasy mikrofonowe, liniowe, głośnikowe, słuchawkowe i MIDI, aby jasno określić ich przeznaczenie. Narysowane złącze nie potwierdza zgodności poziomów sygnału, okablowania symetrycznego ani wymagań dotyczących zasilania fantomowego między urządzeniami.

Symbole laboratoryjne i ruchowe rozróżniają pojedyncze przewody elektryczne, kompletne kable i przewody do płynów. Na przykład połączenia BNC/USB przedstawiają kable, natomiast zaciski zasilania, logiki i silnika sterownika silnika są osobnymi przewodami. Części wyłącznie mechaniczne mogą nie mieć zacisków elektrycznych. Kieruj się oznaczeniami pinów i opisem symbolu, zamiast zakładać, że każdy widoczny element jest połączeniem.

**Symbole urządzeń testowych i pomiarowych są ilustracjami do schematu stanowiska.** W przypadku przyrządów, które pobierają symulowane sygnały, użyj **Simulation → Lab Equipment** (Symulacja → Aparatura laboratoryjna); zobacz [źródła i przyrządy wirtualne](../Simulation-Sources-and-Instruments/).

Symbole instalacji solarnych przedstawiają całe kable lub połączenia logiczne. Opisują architekturę systemu; nie określają poszczególnych zacisków instalacyjnych, parametrów znamionowych kabli ani kompletnego układu zabezpieczeń.

## Biblioteki z modelami symulacyjnymi
{: #libraries-with-simulation-models}

Użyj tych kolekcji, jeśli chcesz [uruchomić symulację obwodu](../Simulation/).

| Biblioteka | Zawartość | Cel modelowania |
| --- | --- | --- |
| **Podstawy SPICE** — 27 symboli | Elementy pasywne, źródła, diody, diody LED, tranzystory, transformator i wzmacniacz typu 741 | Zestaw początkowy modelowanych komponentów analogowych |
| **Logika cyfrowa** — 28 symboli | Bramki, liczniki i elementy pamięci | Konfigurowalne działanie logiczne zaimplementowane za pomocą przenośnych analogowych modeli SPICE |
| **Bloki funkcjonalne** — 17 symboli | ADC/DAC, interfejsy komunikacyjne, automaty stanów i programowalne bloki wejścia/wyjścia | Badanie zachowania na poziomie systemu bez implementowania kompletnego układu scalonego |
| **Czujniki i interfejsy** — 10 symboli | Modelowane czujniki, punkt testowy, przełącznik analogowy i modulator AM | Powiązanie skonfigurowanego sygnału pobudzającego z wyjściem elektrycznym |

Te modele są przybliżeniami służącymi do badania zachowania układów. Nie gwarantują parametrów konkretnego urządzenia danego producenta. Funkcjonalne bloki mikrokontrolerów, PLC ani FPGA nie wykonują oprogramowania układowego ani kodu HDL. Biblioteka **Logika cyfrowa** wykorzystuje analogowe modele behawioralne i może działać w przeglądarce; osobny [kurs XSPICE](../XSPICE-Tutorial/) korzysta z silnika zdarzeniowego wersji Desktop.

Zapoznaj się z właściwościami, jednostkami i mapowaniem pinów każdego modelu. Modele logiczne mogą mieć ukryte piny zasilania o nazwach **VCC** i **VSS**. Zapewnij odpowiednie sieci zasilające i połącz **VSS** z masą SPICE **0**. Etykieta zawierająca słowo GND sama w sobie nie tworzy węzła 0.

## Zapewnianie jednoznaczności połączeń
{: #make-wiring-unambiguous}

Pozostaw włączoną siatkę i kończ przewody w rzeczywistych punktach przyłączeniowych. Przewód dotykający niepowiązanego gniazda lub końca innego przewodu może utworzyć połączenie elektryczne. Prowadź przewody z dala od tych punktów; pozornie schludna linia nie wystarczy, by utworzyć zamierzoną listę sieci.

Nieużywane gniazda urządzeń mogą pozostać otwarte. Niektóre komunikaty modułu sprawdzającego obwody o przewodach wchodzących w obrysy fizycznych paneli są w przypadku tych rysunków oczekiwane, ale niezamierzone zwarcia i węzły połączeń należy poprawić. Zobacz [Przewody](../Wires/), aby poznać zasady połączeń elektrycznych, oraz [Dołączone przykłady](../Bundled-Examples/), aby zapoznać się z gotowymi układami wykorzystującymi te kolekcje.

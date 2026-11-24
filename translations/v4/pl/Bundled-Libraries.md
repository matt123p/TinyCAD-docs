---
layout: default
---
# Dołączone biblioteki
{: #bundled-libraries}

Dołączone biblioteki to zbiory gotowych do umieszczenia symboli dostarczanych z TinyCAD zarówno w przeglądarce, jak i w aplikacji Desktop. Obejmują układy sprzętu oraz obwody elektroniczne. Można z nich korzystać bez logowania, pobierania pliku biblioteki ani konfigurowania folderu bibliotek.

## Znajdowanie i umieszczanie komponentu
{: #find-and-place-a-component}

1. Otwórz panel biblioteki po lewej stronie. Jeśli jest zwinięty, użyj przycisku rozwijania.
2. Wybierz **Standard**. **Online** przeszukuje kolekcję online, a **My Libraries** zawiera własne pliki bibliotek.
3. Użyj polecenia **Choose a standard library** (Wybierz bibliotekę standardową), aby wskazać kolekcję. TinyCAD wczytuje jedną bibliotekę standardową naraz i zapamiętuje wybór na tym urządzeniu.
4. Przeglądaj listę lub wpisz nazwę albo opis w polu **Search libraries...** (Szukaj w bibliotekach...). Każdy wynik ma podgląd grafiki. Wybierz wynik, aby wyświetlić większy podgląd i opis.
5. Przeciągnij podgląd komponentu na rysunek. Umieść go na siatce; po zakończeniu umieszczania kopii naciśnij **Escape** lub kliknij prawym przyciskiem myszy.

Zmiana wybranej biblioteki nie usuwa już umieszczonych komponentów. Ich definicje są osadzone w rysunku, więc osoba otwierająca go nie musi wczytywać tych samych bibliotek. Biblioteki standardowe są tylko do odczytu; użyj [bibliotek niestandardowych](../Custom-symbol-libraries/), jeśli chcesz zarządzać własnymi definicjami symboli.

{% include video-player.html src="/v4/videos/simulation/libraries.mp4" poster="/v4/videos/simulation/libraries.jpg" caption="Wybierz dołączoną bibliotekę, wyszukaj przełącznik ośmioportowy i przeciągnij go na rysunek." %}

## Biblioteki sprzętu i układów
{: #equipment-and-layout-libraries}

Te biblioteki przedstawiają fizyczne rozmieszczenie sprzętu, płytek, zacisków i gniazd. Pomagają wyjaśnić, **co z czym jest połączone**. Nie zawierają wykonywalnego oprogramowania układowego, symulacji mechanicznej ani modeli SPICE.

| Biblioteka | Zawartość | Typowe zastosowanie |
| --- | --- | --- |
| **Układ sieci** — 47 symboli | Routery, przełączniki i punkty dostępowe dla użytkowników; odpowiadające im przełączniki, routery, zapory sieciowe, panele krosowe i panele zaślepiające do szaf 19-calowych | Okablowanie biurowe, sieci domowe i plany szaf rack |
| **Procesory wbudowane i inteligentny dom** — 44 symbole | Dziesięć płytek sterowników, 26 modułów czujników/elementów wykonawczych i osiem wyświetlaczy | Prototypowanie stanowiska czujnikowego, automatyki domowej lub projektu wbudowanego |
| **Audio i muzyka** — 99 symboli | Mikrofony, miksery, interfejsy, instrumenty, MIDI, komputery, złącza, słuchawki, głośniki, wzmacniacze i sprzęt sceniczny | Występy, studia, podcasty, nagrania domowe, kościoły i szkoły |
| **Testy i pomiary** — 78 symboli | Zasilacze, obciążenia, oscyloskopy, mierniki, przyrządy RF, sondy, sprzęt do akwizycji danych, grzałki, przekaźniki, układy sterowania, pompy i aparatura stołowa | Połączenia laboratoryjne i układy doświadczalne |
| **Silniki i ruch** — 66 symboli | Silniki prądu stałego i bezszczotkowe, silniki krokowe, serwomechanizmy, płytki sterowników, enkodery, wyłączniki krańcowe, elektromagnesy, siłowniki elektryczne/pneumatyczne i części mechaniczne | Robotyka, automatyka i okablowanie układów sterowania ruchem |
| **Energia słoneczna i akumulatory** — 52 symbole | Panele, zestawy paneli, falowniki, akumulatory, ładowarki EV, sprzęt zasilania rezerwowego, zabezpieczenia, monitorowanie i odbiorniki domowe | Koncepcyjny domowy system energetyczny oraz jego połączenia zasilające/sterujące |

### Układ sieci
{: #network-layout}

Punkty połączeń Ethernet znajdują się w środkach gniazd. Jeden punkt oznacza **cały kabel**, a nie osiem pojedynczych żył Ethernet. Przełączniki biurkowe obejmują 4, 5, 8, 16 i 24 porty miedziane, w tym warianty PoE oraz mieszane porty miedziane/światłowodowe. Układy rack obejmują konfiguracje 8/16/24/48-portowe z dwoma lub czterema portami uplink SFP+ typu cage, a także dodatkowe, ogólne układy do planowania z 10 i 32 portami miedzianymi. Należy traktować je jako dostępne warianty symboli, a nie twierdzenie, że każdy układ jest równie powszechny. Sprawdź nazwę symbolu i etykiety panelu przedniego, aby wybrać potrzebną liczbę portów i konfigurację łączy uplink.

Panele 19-calowe 1U mają ten sam rozmiar. Zachowaj ich domyślną skalę i układaj je pionowo w odstępach **120 jednostek rysunku**, aby utworzyć szafę rack. [Przykład małej sieci biurowej](../Bundled-Examples/#equipment-and-layout-examples) pokazuje cztery pasujące panele oraz dłuższe przebiegi kabli do punktu dostępowego i przełącznika biurkowego. Poprowadź każdy przewód krosowy do punktu połączenia gniazda; grafika panelu nie łączy automatycznie różnych gniazd wewnętrznie.

### Procesory wbudowane i inteligentny dom
{: #embedded-processors-and-smart-home}

Płytki sterowników obejmują ESP32 DevKitC V4, ESP32-S3 DevKitC-1, NodeMCU ESP8266, LOLIN D1 mini, Raspberry Pi 3/4/5 oraz warianty Arduino Uno/Nano/Mega. Moduły czujników obejmują czujniki temperatury, wilgotności, światła, ciśnienia, dotyku i pasywnej podczerwieni, a także elementy wyjściowe, takie jak brzęczyki. Płytka PCB, pola stykowe złącza i etykiety pinów pozostają widoczne; mała ikona funkcji identyfikuje czujnik zamiast anonimowego prostokąta układu.

Opcje wyświetlaczy obejmują LCD1602 I2C i OLED 128×64, 1,8-calowy ekran LCD SPI i 2,8-calowy pojemnościowy ekran dotykowy LCD firmy Waveshare, 2,8-calowy szeregowy ekran dotykowy UART Nextion oraz zespoły wyświetlaczy e-papierowych Waveshare 2,13/2,9/4,2 cala. Każdy symbol łączy dwa widoki **jednego urządzenia**: przód ekranu po lewej i styki z tyłu/złącza po prawej. Elektrycznymi punktami połączeń są tylko styki z tyłu. Powielone złącza mogą udostępniać te same sygnały sprzętowe; nie są to dodatkowe, niezależne kanały. Kieruj się etykietami i podaną rewizją.

Przed okablowaniem sprawdź podaną rewizję płytki. W przypadku złączy Raspberry Pi **numery pinów fizycznych i nazwy GPIO BCM są różnymi systemami numeracji**. Pozycje pinów na płytce są pomocne na schemacie połączeń, ale grafika nie jest footprintem PCB ani rysunkiem produkcyjnym. Należy nadal sprawdzić szyny zasilające, poziomy logiczne, limity prądowe i rezystory podciągające w dokumentacji konkretnego modułu.

### Połączenia audio, laboratoryjne i napędowe
{: #audio-laboratory-and-motion-connections}

Na schematach audio większość gniazd oznacza całe kable. Oznacz trasy mikrofonowe, liniowe, głośnikowe, słuchawkowe i MIDI, aby jasno określić ich przeznaczenie. Narysowane złącze nie gwarantuje zgodności poziomów, okablowania symetrycznego ani wymagań dotyczących zasilania phantom dwóch urządzeń.

Symbole laboratoryjne i napędowe rozróżniają pojedyncze przewody elektryczne, kompletne kable oraz przewody do płynów. Na przykład połączenia BNC/USB oznaczają kable, natomiast zaciski zasilania, logiki i silnika sterownika silnika są oddzielnymi przewodami. Części wyłącznie mechaniczne mogą nie mieć zacisków elektrycznych. Korzystaj z etykiet pinów i opisu symbolu, zamiast zakładać, że każdy widoczny element jest połączeniem.

**Symbole urządzeń z biblioteki Testy i pomiary są ilustracjami do schematu układu pomiarowego.** W przypadku przyrządów pozyskujących symulowane sygnały użyj **Symulacja → Sprzęt laboratoryjny (Simulation → Lab Equipment)**; zob. [źródła i przyrządy wirtualne](../Simulation-Sources-and-Instruments/).

Symbole solarne przedstawiają całe kable lub połączenia logiczne. Opisują architekturę systemu; nie określają poszczególnych zacisków instalacyjnych, obciążalności kabli ani kompletnego układu zabezpieczeń.

## Biblioteki z modelami symulacyjnymi
{: #libraries-with-simulation-models}

Użyj tych kolekcji, jeśli chcesz [uruchomić symulację obwodu](../Simulation/).

| Biblioteka | Zawartość | Zastosowanie modeli |
| --- | --- | --- |
| **Podstawy SPICE** — 29 symboli | Elementy pasywne, źródła, diody, diody LED, tranzystory, transformator, rezonatory, 741, LM358 i LM324 | Elementy analogowe z [dołączonym modelem i wstępnie ustawionym przypisaniem pinów](../Bundled-SPICE-Models/) |
| **Logika cyfrowa** — 28 symboli | Bramki, liczniki i układy pamięci | Konfigurowalne działanie logiczne zaimplementowane przy użyciu przenośnych analogowych modeli SPICE |
| **Bloki funkcjonalne** — 17 symboli | ADC/DAC, interfejsy komunikacyjne, automaty stanów i programowalne bloki I/O | Badanie zachowania na poziomie systemu bez implementowania kompletnego układu scalonego |
| **Czujniki i interfejsy** — 10 symboli | Modelowane czujniki, punkt testowy, przełącznik analogowy i modulator AM | Powiązanie skonfigurowanego sygnału pobudzającego z wyjściem elektrycznym |

Modele te są przybliżeniami służącymi do badania zachowania. Nie gwarantują parametrów urządzenia konkretnego producenta. Bloki funkcjonalne mikrokontrolerów, PLC ani FPGA nie wykonują oprogramowania układowego ani kodu HDL. Biblioteka **Logika cyfrowa** korzysta z analogowych modeli behawioralnych i może działać w przeglądarce; osobny [kurs XSPICEК](../XSPICE-Tutorial/) korzysta z silnika zdarzeniowego wersji Desktop.

Zapoznaj się z właściwościami modelu, jednostkami i przypisaniem pinów. Modele logiczne mogą mieć ukryte piny zasilania o nazwach **VCC** i **VSS**. Zapewnij odpowiednie sieci zasilające i połącz **VSS** z masą SPICE **0**. Etykieta zawierająca słowo GND sama w sobie nie tworzy węzła 0.

## Jednoznaczne prowadzenie połączeń
{: #make-wiring-unambiguous}

Pozostaw włączoną siatkę i kończ przewody w rzeczywistych punktach połączeń. Przewód dotykający niezwiązanego gniazda lub końca innego przewodu może utworzyć połączenie elektryczne. Poprowadź go z dala od takich punktów; estetyczna linia sama w sobie nie gwarantuje utworzenia zamierzonej listy sieci.

Nieużywane gniazda sprzętu można pozostawić niepodłączone. Niektóre komunikaty kontroli obwodu dotyczące przewodów wchodzących w obrysy fizycznych paneli są w tych rysunkach spodziewane, ale niezamierzone zwarcia i węzły połączeń należy poprawić. Zob. [Przewody](../Wires/), aby poznać zasady łączności elektrycznej, oraz [Dołączone przykłady](../Bundled-Examples/), gdzie przedstawiono układy wykonane z użyciem tych kolekcji.

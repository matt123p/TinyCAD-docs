---
layout: default
title: 11. How TinyCAD implements SPICE
---
# 11. Jak TinyCAD implementuje SPICE
{: #how-tinycad-implements-spice}

[Poprzedni: badanie projektów](/v4/SPICE-Tutorial-10/) · [Spis treści](/v4/Simulation-Tutorials/) · [Kurs XSPICE](/v4/XSPICE-Tutorial-01/)

TinyCAD udostępnia edytor schematów, ustawienia symulacji, przyrządy, wykresy
i pomiary. **ngspice** jest działającym pod nimi silnikiem rozwiązywania obwodów.
Rysujesz i konfigurujesz eksperyment w TinyCAD; TinyCAD tłumaczy go na tekst
obwodu SPICE, uruchamia ngspice i prezentuje zwrócone wyniki.

Przykłady z tego rozdziału są dołączone do TinyCAD. Wybierz **Otwórz przykład →
Samouczek SPICE**, wybierz **divider** lub **rc-ac**, a następnie wybierz **Otwórz rysunek**.
W przypadku demonstracji cyfrowej wybierz **Otwórz przykład → Samouczek XSPICE i logiki cyfrowej →
logic-buffer → Otwórz rysunek**. Nie trzeba pobierać samouczka ani modelu.

## SPICE, ngspice i XSPICE
{: #spice-ngspice-and-xspice}

SPICE opisuje obwody za pomocą komponentów, połączonych węzłów i matematycznych modeli urządzeń.
Analiza punktu pracy rozwiązuje ich równania DC. Analiza
przejściowa śledzi ich zachowanie w symulowanym czasie. Analiza AC linearyzuje
obwód wokół punktu polaryzacji, aby obliczyć odpowiedź częstotliwościową małosygnałową.
Wybór analizy jest zatem częścią definiowania eksperymentu.

ngspice to symulator obwodów mieszanych typu open source, wywodzący się z Berkeley
SPICE. TinyCAD zawiera jego silnik, dzięki czemu nie trzeba instalować ani uruchamiać
osobnego symulatora wiersza poleceń. Silnik użyty do kwalifikacji tych samouczków
to **ngspice 47**; widok **Diagnostyka** danego przebiegu podaje informacje o zapleczu i kompilacji.
Więcej informacji o historii projektu źródłowego zawiera [oficjalny przegląd ngspice](https://ngspice.sourceforge.io/presentation.html).

**XSPICE jest rozszerzeniem zintegrowanym z ngspice**, a nie kolejną aplikacją
uruchamianą osobno. Dodaje modele kodowe, w tym funkcjonalne bloki analogowe i logikę
cyfrową, której zdarzenia są koordynowane z solverem analogowym. Zmiana stanu cyfrowego
może zatem wpływać na obwód analogowy w tej samej symulacji. [Oficjalne wprowadzenie do XSPICE ](https://ngspice.sourceforge.io/xspice.html)
opisuje tę różnicę.

| Środowisko TinyCAD | Sposób działania silnika | Przykłady do użycia |
| --- | --- | --- |
| Desktop | Osobny natywny proces solvera z dołączonymi bibliotekami modeli kodowych XSPICE | Analogowy SPICE i kurs XSPICE |
| Przeglądarka | ngspice skompilowany do WebAssembly, działający w osobnym web workerze | Analogowy SPICE i zgodne analogowe modele behawioralne; ta kompilacja nie zawiera XSPICE |

TinyCAD wybiera zaplecze odpowiednie dla danego środowiska. Nie trzeba wyszukiwać
pliku wykonywalnego ngspice ani wybierać zewnętrznego symulatora do dołączonych przykładów.
Rysunek XSPICE może zawierać definicje modeli, ale nadal wymaga
natywnych bibliotek modeli kodowych dostarczanych z Desktop. Skopiowanie rysunku do
przeglądarki nie dodaje obsługi tej funkcji silnika.

## Od rysunku do wyniku
{: #from-drawing-to-result}

Główne etapy:

1. **Odszukaj połączenia elektryczne.** TinyCAD ustala, które wyprowadzenia komponentów
   współdzielą sieć na podstawie przewodów, węzłów i etykiet sieci. Skrzyżowanie przewodów nie jest
   połączeniem, chyba że rysunek rzeczywiście łączy sieci. Zgodne etykiety sieci
   łączą odległe punkty; tekst umieszczony obok przewodu tego nie robi.
2. **Rozwiń definicje komponentów.** Każdy symulowany symbol zawiera szablon SPICE.
   TinyCAD podstawia jego oznaczenie, nazwy połączonych węzłów i wartości,
   a także dołącza wymagane definicje urządzeń lub podukładów.
3. **Dodaj eksperyment.** Arkusz Simulation określa analizę,
   temperaturę, parametry, załączniki modeli i żądane sygnały. TinyCAD
   sprawdza, czy nie brakuje modeli, czy są nierozwiązane wyprowadzenia, powtórzone oznaczenia i inne
   wykrywalne błędy konfiguracji, zanim przekaże obwód do symulacji.
4. **Uruchom ngspice.** Solver oblicza napięcia, prądy i inne żądane
   wielkości. Zwraca dane i dziennik diagnostyczny; TinyCAD zbiera je w
   akwizycję powiązaną z ustawieniami przebiegu i identyfikacją silnika.
5. **Sprawdź i zmierz.** TinyCAD prezentuje wykresy, dane liczbowe i obliczone
   pomiary. Na przykład pomiar częstotliwości odcięcia jest wyprowadzany z danych AC;
   nie jest to kolejny komponent wstawiony do schematu.

To wyjaśnia, dlaczego sam poprawnie wyglądający rysunek nie wystarcza: tranzystor potrzebuje
modelu i prawidłowego przyporządkowania wyprowadzeń, a dwa przewody muszą być połączone elektrycznie,
nawet jeśli ich końce wyglądają na zbliżone przy bieżącym powiększeniu.

## Jakich symboli używać?
{: #which-symbols-should-i-use}

Otwórz **ikonę o kształcie impulsu** na pasku narzędzi. Jej podpowiedź po najechaniu kursorem to **Symulacja**.
W poniższych instrukcjach **Symulacja → …** oznacza menu tej ikony.

| Potrzeba | Gdzie znaleźć | Co sprawdzić |
| --- | --- | --- |
| Rezystor, kondensator, cewka, dioda, LED, tranzystor NPN/PNP lub wzmacniacz operacyjny 741 | **Symulacja → Komponenty SPICE**, lub biblioteka **Podstawowe SPICE** | Wartość, polaryzacja, zasilanie i założenia dotyczące modelu |
| Niezależne źródło napięcia/prądu | **Symulacja → SPICE → Wstaw źródło** | Typ źródła, kształt sygnału, jednostki i kierunek połączenia |
| Węzeł odniesienia | **Symulacja → SPICE → Wstaw masę** | Połącz elektrycznie; w SPICE węzłem odniesienia jest `0` |
| Obserwacja napięcia | **Wstaw sondę** lub **Wstaw sondę różnicową** w podmenu SPICE | Napięcie względem masy mierzy się w układzie jednostronnym; sonda różnicowa mierzy napięcie między swoimi zaciskami |
| Obserwacja prądu gałęzi | **Symulacja → SPICE → Wstaw sondę prądową** | Wstaw szeregowo i sprawdź kierunek dodatni |
| Źródło zależne | **Symulacja → SPICE → Wstaw źródło sterowane** | Zaciski sterujące, zaciski wyjściowe i wzmocnienie/transkonduktancja |
| Przyrządy laboratoryjne | **Symulacja → Sprzęt laboratoryjny** | Ustawienia oscyloskopu, multimetru, generatora funkcyjnego i zasilacza laboratoryjnego; istotne są ich obciążenie i ograniczenia |
| Zwykła modelowana logika | Biblioteka **Logika cyfrowa** | Te przenośne modele SPICE z konfigurowalnymi parametrami różnią się od przykładów sterowanych zdarzeniami XSPICE; sprawdź wyprowadzenia zasilania i właściwości modelu |
| Logika XSPICE sterowana zdarzeniami | Osadzone przykłady **Samouczek XSPICE i logiki cyfrowej** | Używaj Desktop i zachowaj mostki analogowe/cyfrowe w modelu |

Biblioteka Podstawowe SPICE zawiera gotowe konfiguracje typowych
urządzeń. Ogólny model tranzystora lub 741 jest przydatny do nauki, ale
jego symulowane zachowanie nie musi odpowiadać specyfikacji konkretnej części
producenta. W rozdziałach o wzmacniaczach jawnie opisano ogólne
modele podstawione zamiast oryginalnych urządzeń `AMP.DSN`.

Symbol z innej biblioteki może służyć wyłącznie do rysowania. Zaznacz wstawiony symbol
i sprawdź kartę **SPICE** we właściwościach. Potrzebuje prawidłowego szablonu SPICE
i wszelkich definicji modeli, do których odwołuje się ten szablon. Zgodna nazwa, obudowa ani
rysunek nie dodają tych definicji. Podobnie etykieta o nazwie `VCC` nazywa
sieć; nie tworzy napięcia zasilającego. Podłącz do tej sieci rzeczywiste źródło.

## Uruchom istniejący eksperyment
{: #run-an-existing-experiment}

1. Wybierz **Otwórz przykład → Samouczek SPICE → divider → Otwórz rysunek**.
2. Wybierz arkusz **Simulation**. W sekcji **Konfiguracja** zapisana analiza to
   **Pomiar DC — punkt pracy**. Obwód zawiera źródło 5 V i dwa
   rezystory 1 kΩ.
3. Wybierz **Uruchom**. Jeśli panel wykresów jest ukryty, użyj **Symulacja → Pokaż wykresy**.
4. Sprawdź `in`, `out` i `v1#branch`. Oczekiwane wartości to **5 V**, **2,5 V** i
   **−2,5 mA**. Prąd źródła jest zdefiniowany jako wpływający do zacisku dodatniego, więc
   źródło dostarczające moc ma tu prąd ujemny.
5. Zmień R2 na `2k` na arkuszu obwodu i uruchom ponownie. Oczekuj, że OUT osiągnie
   około **3,333 V**. Starsza zachowana akwizycja nadal opisuje wcześniejszy obwód;
   zmiana wartości nie modyfikuje jej wyników.

![Arkusz Simulation TinyCAD z analizą RC AC i wynikiem częstotliwości odcięcia](/v4/Images/simulation-tutorials/spice/tinycad-ac-setup.png)

Ten zrzut ekranu aplikacji przedstawia widok **Konfiguracja** dla **rc-ac**,
innego osadzonego przykładu. Filtr 1 kΩ/1 µF ma częstotliwość odcięcia około **159,15 Hz**. Otwórz go,
aby porównać eksperyment w dziedzinie częstotliwości z pojedynczym punktem DC dzielnika.

**Uruchom** rozpoczyna skończoną akwizycję z wybraną analizą. **Zatrzymaj** kończy
pracę solvera i zachowuje zaakceptowane próbki; są one częściowym wynikiem,
a nie dowodem ukończenia żądanego czasu trwania. Te kompilacje nie udostępniają
wstrzymywania/wznawiania ani solvera działającego bezterminowo. Użyj **Historia**, aby sprawdzić poprzednie
przebiegi, oraz **Diagnostyka**, aby odczytać dziennik solvera.

Obejrzyj demonstrację [otwierania, uruchamiania i zmiany dzielnika](/v4/videos/simulation-tutorials/spice/first-run.mp4)
i [odpowiedzi AC i częstotliwości odcięcia](/v4/videos/simulation-tutorials/spice/ac-response.mp4). Obie pokazują rzeczywiste
sterowanie Desktop, ukończone natywne akwizycje i wyniki liczbowe wraz z napisami.

## Zbuduj własną pierwszą symulację
{: #build-your-own-first-simulation}

Wstaw dwa rezystory z **Symulacja → Komponenty SPICE**, źródło za pomocą **Wstaw źródło**
i masę za pomocą **Wstaw masę**. Ułóż je jako dzielnik: dodatni zacisk źródła
do R1, R1 do R2, a R2 z powrotem do ujemnego zacisku źródła i masy. Ustaw oba rezystory
na `1k`, źródło na 5 V DC, a zasilanie oznacz etykietą `IN` i punkt środkowy `OUT`.
Upewnij się, że każdy komponent ma unikatowe oznaczenie, takie jak R1, R2 i V1.

Wybierz **Symulacja → Symuluj**, aby utworzyć arkusz Simulation. Wybierz
**Pomiar DC — punkt pracy** w sekcji **Konfiguracja**, a następnie **Uruchom**. Powinny pojawić się
te same wartości co w osadzonym przykładzie dzielnika. Jeśli symulacja się nie powiedzie, porównaj połączenia,
ustawienia źródła i właściwości SPICE z działającym przykładem.

W przypadku eksperymentu przejściowego wybierz **W czasie — przejściowa**, ustaw czas trwania
i maksymalny krok, a następnie skonfiguruj źródło zmienne w czasie. W przypadku analizy AC wybierz
**Charakterystyka częstotliwościowa — AC**, ustaw zakres częstotliwości i liczbę punktów na dekadę,
a także niezerową **amplitudę AC** źródła wejściowego, zwykle 1 V. Częstotliwość sinusoidy
i amplituda przejściowa nie określają przemiatania AC. TinyCAD udostępnia również
analizę przemiatania DC, szumów, funkcji przenoszenia oraz biegunów i zer; wcześniejsze rozdziały
pokazują, kiedy każda z nich jest przydatna.

## Sprawdź wygenerowany tekst SPICE i dodaj modele
{: #inspect-the-generated-spice-and-add-models}

Po uruchomieniu dzielnika otwórz **Diagnostyka → Generuj tekst obwodu**.
Ważne wiersze wyglądają tak; TinyCAD dodaje również dyrektywy temperatury i zapisywania
sygnałów:

```spice
R1 IN OUT 1k
R2 OUT 0 1k
V1 IN 0 DC 5 AC 0 0
.op
.end
```

`R1 IN OUT 1k` oznacza rezystor 1 kΩ między węzłami IN i OUT. `0` jest
węzłem odniesienia. Ten tekst jawnie określa połączenia i polaryzację źródła.
Użyj **Eksportuj obwód**, jeśli chcesz osobno sprawdzić lub uruchomić listę połączeń.
Arkusz Simulation TinyCAD zawiera `.op`, `.tran`, `.ac` i inne polecenia
analizy; nie wklejaj ich ani `.end` do właściwości SPICE komponentu.

W przypadku części już dostępnej w katalogu TinyCAD użyj [Dołączone modele SPICE](../Bundled-SPICE-Models/), aby wybrać definicję i sprawdzić przyporządkowanie wyprowadzeń. W przypadku pliku zewnętrznego wymaganego przez definicję niestandardową rozwiń **Konfiguracja → Modele SPICE**. Wybierz plik
`.lib`, `.cir` lub `.mod` albo wprowadź jego nazwę i tekst modelu. W obu
przypadkach wybierz **Zapisz model**, aby go dołączyć. Użyj prostej nazwy pliku, takiej jak
`device.lib`. Następnie skonfiguruj
szablon SPICE symbolu tak, aby tworzył odpowiednie urządzenie lub `.SUBCKT`,
i w razie potrzeby dołącz załącznik, na przykład za pomocą `.include device.lib`
w prologu. Samo dołączenie pliku nie przypisuje go do symbolu.

Sprawdź kolejność zacisków modelu w odniesieniu do **numerów wyprowadzeń** symbolu, a nie
ich widocznego położenia na stronie. Model tranzystora trójzaciskowego i podukład producenta
mogą używać różnej kolejności węzłów. Sprawdź również wszelkie odwołania do zagnieżdżonych modeli:
dołączone pliki także muszą być dołączone do arkusza Simulation.
Definicje modeli i załączniki są zapisywane wraz z rysunkiem.

TinyCAD obsługuje osadzony tekst modeli, a nie dowolne skrypty poleceń ngspice ani
zewnętrzne moduły wykonywalne. Bloki `.control`, polecenia powłoki, ładowanie zewnętrznych modułów oraz pobierane z plików sygnały pobudzające/modele są wykluczone z tego procesu pracy. Użyj
obsługiwanych elementów sterujących źródłami i analiz albo wyeksportuj obwód do osobnego
eksperymentu ngspice w wierszu poleceń. Model producenta napisany dla innej odmiany
SPICE może wymagać dostosowania, zanim ngspice go zaakceptuje.

## Jak wpisują się w to symulacje cyfrowe
{: #how-digital-simulations-fit-in}

Otwórz **Samouczek XSPICE i logiki cyfrowej → logic-buffer** w Desktop. Jego model X1
zawiera mostek analogowo-cyfrowy, bufor sterowany zdarzeniami i
mostek cyfrowo-analogowy. Zwykłe źródło steruje wejściem analogowym;
mostki udostępniają stany logiczne jako napięcia na wykresach TinyCAD.

![Obliczone sygnały wejściowy i wyjściowy osadzonego bufora XSPICE](/v4/Images/simulation-tutorials/xspice/logic-buffer-results.png)

Uruchom zapisaną analizę przejściową. Oczekuj impulsów 0–5 V o okresie 1 µs oraz
opóźnienia przejścia na wyjściu wynoszącego około 20 ns, z niezerowymi czasami narastania i opadania. Powiększ wykres, aby sprawdzić
opóźnienie. Ta ilustracja przedstawia rzeczywiste wyniki solvera z przykładu.

Węzły cyfrowe modelu nie są zwykłymi węzłami napięciowymi. Progi mostka
i sposób reprezentacji stanu niezdefiniowanego są celowymi decyzjami modelowania.
Bramka behawioralna zbudowana z analogowych wyrażeń SPICE może wyglądać podobnie na
wykresie, ale wykorzystuje inną metodę symulacji. Kontynuuj w [przeglądzie XSPICE](/v4/XSPICE-Tutorial-01/), aby poznać mostki, taktowanie, pamięć i
obwody mieszane.

## Zapisz, porównaj i rozwiązuj problemy
{: #save-compare-and-troubleshoot}

Zapisz eksperyment za pomocą **Zapisz jako**, aby zachować edytowalną kopię osadzonego
przykładu. TinyCAD może zachowywać akwizycje wraz z rysunkiem; opcja **Zapisz bez
wyników** zachowuje obwód i konfigurację, ale pomija zapisane wyniki.
Użyj eksportu **Dane** do formatu CSV, JSON lub danych surowych SPICE, gdy potrzebna jest dalsza analiza.
Zapisz, której akwizycji, modelu i okna pomiarowego użyto.

| Objaw | Co sprawdzić w pierwszej kolejności |
| --- | --- |
| Brak informacji SPICE | Użyj modelowanego symbolu lub skonfiguruj jego kartę SPICE |
| Brak modelu lub podukładu | Nazwa modelu, dołączone pliki, instrukcja include i kolejność zacisków |
| Pływający obwód lub brak masy | Połączona masa SPICE i odpowiednie ścieżki powrotu DC |
| Etykieta zasilania, ale brak napięcia zasilającego | Podłącz źródło napięcia lub zasilacz laboratoryjny do oznaczonej sieci |
| Pusta/zerowa odpowiedź AC | Amplituda AC wejścia i wybrane sygnały |
| Model XSPICE niedostępny w przeglądarce | Uruchom przykład w TinyCAD Desktop |
| Wykres nie odpowiada zmienionym wartościom | Uruchom ponownie i wybierz nową akwizycję |
| Błąd zbieżności lub niekompletny przebieg | Odczytaj Diagnostykę, uprość obwód i sprawdź zbocza sygnału pobudzającego, krok czasowy i poprawność modelu |

[Podręcznik ngspice](https://ngspice.sourceforge.io/docs.html) stanowi źródło informacji
na temat semantyki urządzeń i modeli. Elementy sterujące TinyCAD określają, które z tych
możliwości są dostępne w jego zintegrowanym środowisku pracy.

## Pobierz obwody z lekcji
{: #download-the-lesson-circuits}

Te same przykłady są już dostępne w **Otwórz przykład**. Aby uzyskać niezależną kopię, pobierz rysunek `.dzn` i użyj w TinyCAD polecenia **Plik → Otwórz**. Plik `.cir` to towarzyszący mu tekst SPICE do sprawdzenia lub użycia w zgodnym symulatorze zewnętrznym, a nie rysunek TinyCAD. Do uruchamiania symulacji XSPICE potrzebny jest Desktop.

| Przykład | Rysunek | Lista połączeń |
| --- | --- | --- |
| divider | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/divider.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/divider.cir) |
| logic-buffer | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |

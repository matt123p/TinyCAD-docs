---
layout: default
title: 11. How TinyCAD implements SPICE
---
# 11. Jak TinyCAD implementuje SPICE
{: #how-tinycad-implements-spice}

[Poprzednie: badania projektowe](/v4/SPICE-Tutorial-10/) · [Spis treści](/v4/Simulation-Tutorials/) · [Kurs XSPICE](/v4/XSPICE-Tutorial-01/)

TinyCAD udostępnia edytor schematów, ustawienia symulacji, przyrządy, wykresy
i pomiary. **ngspice** jest działającym pod nimi silnikiem obliczającym obwody.
Rysujesz i konfigurujesz eksperyment w TinyCAD; TinyCAD tłumaczy go na tekst
obwodu SPICE, uruchamia ngspice i prezentuje zwrócone wyniki.

Przykłady w tym rozdziale są dołączone do TinyCAD. Wybierz **Otwórz przykład →
Samouczek SPICE**, wybierz **divider** lub **rc-ac**, a następnie wybierz **Otwórz
rysunek**. W przypadku demonstracji cyfrowej wybierz **Otwórz przykład → Samouczek
XSPICE i układów cyfrowych → logic-buffer → Otwórz rysunek**. Nie trzeba pobierać
samouczka ani modeli.

## SPICE, ngspice i XSPICE
{: #spice-ngspice-and-xspice}

SPICE opisuje obwody jako komponenty, połączone węzły i matematyczne modele
urządzeń. Analiza punktu pracy rozwiązuje ich równania prądu stałego. Analiza
przejściowa śledzi ich zachowanie w symulowanym czasie. Analiza AC linearyzuje
obwód wokół punktu polaryzacji, aby obliczyć odpowiedź częstotliwościową małego
sygnału. Wybór analizy jest zatem częścią definiowania eksperymentu.

ngspice to symulator obwodów mieszanych typu open source, wywodzący się z Berkeley
SPICE. TinyCAD zawiera jego silnik, więc nie trzeba instalować ani uruchamiać
oddzielnego symulatora wiersza poleceń. Silnikiem użytym do weryfikacji tych
samouczków jest **ngspice 47**; widok **Diagnostyka** (Diagnostics) danego
uruchomienia pokazuje jego zaplecze i kompilację. Zobacz [oficjalny opis ngspice](https://ngspice.sourceforge.io/presentation.html),
aby poznać tło projektu nadrzędnego.

**XSPICE to rozszerzenie zintegrowane z ngspice**, a nie kolejna aplikacja do
uruchomienia. Dodaje modele kodowe, w tym funkcjonalne bloki analogowe i logikę
cyfrową, której zdarzenia są koordynowane z solverem analogowym. Zmiana stanu
cyfrowego może więc wpływać na obwód analogowy w ramach tej samej symulacji.
[Oficjalne wprowadzenie do XSPICE](https://ngspice.sourceforge.io/xspice.html)
opisuje tę różnicę.

| Środowisko TinyCAD | Sposób działania silnika | Przykłady do użycia |
| --- | --- | --- |
| Komputer stacjonarny | Oddzielny natywny proces solvera z dołączonymi bibliotekami modeli kodowych XSPICE | Analogowe SPICE i kurs XSPICE |
| Przeglądarka | ngspice skompilowany do WebAssembly, działający w oddzielnym web workerze | Analogowe SPICE i zgodne analogowe modele behawioralne; ta kompilacja nie zawiera XSPICE |

TinyCAD dobiera zaplecze do swojego środowiska. W przypadku dołączonych
przykładów nie trzeba lokalizować pliku wykonywalnego ngspice ani wybierać
zewnętrznego symulatora. Rysunek XSPICE może zawierać definicje modeli, ale
nadal wymaga natywnych bibliotek modeli kodowych dostarczanych z TinyCAD Desktop.
Skopiowanie rysunku do przeglądarki nie dodaje tej funkcjonalności silnika.

## Od rysunku do wyniku
{: #from-drawing-to-result}

Główne etapy:

1. **Wykrywanie połączeń elektrycznych.** TinyCAD ustala, które wyprowadzenia
   komponentów należą do tej samej sieci na podstawie przewodów, połączeń
   i etykiet sieci. Skrzyżowanie przewodów nie jest połączeniem, chyba że
   rysunek faktycznie łączy sieci. Identyczne etykiety sieci łączą odległe
   punkty; tekst umieszczony obok przewodu tego nie robi.
2. **Rozwinięcie definicji komponentów.** Każdy symulowany symbol udostępnia
   szablon SPICE. TinyCAD podstawia jego oznaczenie, nazwy podłączonych węzłów
   i wartości, a także dołącza wymagane definicje urządzeń lub podukładów.
3. **Dodanie eksperymentu.** Arkusz Simulation zawiera analizę, temperaturę,
   parametry, załączniki modeli i żądane sygnały. Przed przekazaniem obwodu
   TinyCAD sprawdza brakujące modele, nierozwiązane wyprowadzenia, zduplikowane
   oznaczenia i inne wykrywalne błędy konfiguracji.
4. **Uruchomienie ngspice.** Solver oblicza napięcia, prądy i inne żądane
   wielkości. Zwraca dane i dziennik diagnostyczny; TinyCAD gromadzi je jako
   akwizycję powiązaną z ustawieniami i identyfikatorem silnika danego uruchomienia.
5. **Przeglądanie i pomiary.** TinyCAD prezentuje wykresy, dane liczbowe i obliczone
   pomiary. Na przykład pomiar częstotliwości odcięcia jest wyznaczany z danych AC;
   nie jest kolejnym komponentem dodawanym do schematu.

To wyjaśnia, dlaczego poprawnie wyglądający rysunek nie wystarczy: tranzystor
wymaga modelu i poprawnego przyporządkowania wyprowadzeń, a dwa przewody muszą
być połączone elektrycznie, nawet jeśli ich końce wyglądają na bliskie przy
aktualnym powiększeniu.

## Których symboli użyć?
{: #which-symbols-should-i-use}

Otwórz **ikonę w kształcie impulsu** na pasku narzędzi. Jej etykieta po
naprowadzeniu kursora to **Simulation**. W poniższych instrukcjach **Simulation → …**
oznacza menu tej ikony.

| Potrzeba | Gdzie znaleźć | Co sprawdzić |
| --- | --- | --- |
| Rezystor, kondensator, cewka, dioda, LED, tranzystor NPN/PNP lub wzmacniacz operacyjny 741 | **Simulation → SPICE components** albo biblioteka **SPICE essentials** | Wartość, polaryzację, zasilanie i założenia modelu |
| Niezależne źródło napięcia/prądu | **Simulation → SPICE → Insert Source** | Typ źródła, kształt sygnału, jednostki i kierunek podłączenia |
| Węzeł odniesienia | **Simulation → SPICE → Insert Ground** | Podłącz elektrycznie; w SPICE węzłem odniesienia jest `0` |
| Obserwacja napięcia | **Insert Probe** lub **Insert Differential Probe** w podmenu SPICE | Napięcie jednoprzewodowe jest mierzone względem masy; sonda różnicowa mierzy między swoimi zaciskami |
| Obserwacja prądu gałęzi | **Simulation → SPICE → Insert Current Probe** | Wstaw szeregowo i sprawdź dodatni kierunek |
| Źródło sterowane | **Simulation → SPICE → Insert Controlled Source** | Zaciski sterujące, zaciski wyjściowe i wzmocnienie/przewodność przejściową |
| Przyrządy laboratoryjne | **Simulation → Lab Equipment** | Ustawienia oscyloskopu, multimetru, generatora funkcyjnego i zasilacza laboratoryjnego; istotne są ich obciążenie i ograniczenia |
| Zwykła modelowana logika | Biblioteka **Digital logic** | Te przenośne, konfigurowalne modele SPICE różnią się od przykładów XSPICE opartych na zdarzeniach; sprawdź wyprowadzenia zasilania i właściwości modelu |
| Logika XSPICE oparta na zdarzeniach | Dołączone przykłady **XSPICE and digital tutorial** | Używaj TinyCAD Desktop i zachowaj mostki analogowo-cyfrowe w modelu |

Biblioteka SPICE essentials udostępnia gotowe przykłady typowych urządzeń.
Ogólny model tranzystora lub model w stylu 741 przydaje się do nauki, ale jego
symulowane zachowanie nie jest automatycznie zgodne ze specyfikacją konkretnego
producenta. W rozdziałach o wzmacniaczach wyraźnie opisano ogólne modele
zastępujące oryginalne urządzenia `AMP.DSN`.

Symbol z innej biblioteki może służyć wyłącznie do rysowania. Zaznacz wstawiony
symbol i sprawdź kartę **SPICE** we właściwościach. Potrzebny jest prawidłowy
szablon SPICE oraz wszystkie definicje modeli, do których ten szablon się
odwołuje. Zgodna nazwa, obudowa lub obrazek nie dodają tych definicji. Podobnie
etykieta `VCC` nazywa sieć; nie tworzy napięcia zasilającego. Podłącz do tej sieci
rzeczywiste źródło.

## Uruchamianie istniejącego eksperymentu
{: #run-an-existing-experiment}

1. Wybierz **Otwórz przykład → Samouczek SPICE → divider → Otwórz rysunek**.
2. Wybierz arkusz **Simulation**. W sekcji **Setup** zapisana analiza to
   **Measure DC — Operating Point**. Obwód wykorzystuje źródło 5 V i dwa
   rezystory 1 kΩ.
3. Wybierz **Run**. Użyj **Simulation → Show charts**, jeśli panel wykresów jest ukryty.
4. Sprawdź `in`, `out` i `v1#branch`. Oczekiwane wartości to **5 V**, **2,5 V** i
   **−2,5 mA**. Prąd źródła jest zdefiniowany jako wpływający do zacisku
   dodatniego, dlatego źródło oddające moc ma tu prąd ujemny.
5. Zmień R2 na `2k` na arkuszu obwodu i uruchom ponownie. Oczekuj, że napięcie OUT
   wyniesie około **3,333 V**. Starsza zachowana akwizycja nadal opisuje
   wcześniejszy obwód; zmiana wartości nie zmienia zapisanych wyników.

![Arkusz Simulation w TinyCAD z analizą RC AC i wynikiem częstotliwości odcięcia](/v4/images/simulation-tutorials/spice/tinycad-ac-setup.png)

Ten zrzut ekranu aplikacji pokazuje widok **Setup** dla **rc-ac**, kolejnego
przykładu dołączonego do programu. Filtr 1 kΩ/1 µF ma częstotliwość odcięcia
około **159,15 Hz**. Otwórz go, aby porównać eksperyment w dziedzinie
częstotliwości z pojedynczym punktem DC dla dzielnika.

**Run** rozpoczyna skończoną akwizycję z wybraną analizą. **Stop** zatrzymuje
solver i zachowuje zaakceptowane próbki; są one wynikiem częściowym, a nie
dowodem na ukończenie żądanego czasu trwania. Te kompilacje nie udostępniają
wstrzymywania/wznawiania ani nieprzerwanie działającego solvera. Użyj **History**,
aby przejrzeć poprzednie uruchomienia, a **Diagnostics**, aby odczytać dziennik
solvera.

Na demonstracji zobacz [otwieranie, uruchamianie i zmianę dzielnika](/v4/videos/simulation-tutorials/spice/first-run.mp4)
i [odpowiedź AC i częstotliwość odcięcia](/v4/videos/simulation-tutorials/spice/ac-response.mp4). Oba nagrania pokazują rzeczywiste
elementy sterujące wersji desktopowej, ukończone akwizycje natywne i wyniki
liczbowe, z napisami.

## Tworzenie własnej pierwszej symulacji
{: #build-your-own-first-simulation}

Wstaw dwa rezystory z **Simulation → SPICE components**, źródło za pomocą **Insert Source**
i masę za pomocą **Insert Ground**. Ułóż je jako dzielnik: dodatni zacisk źródła
do R1, R1 do R2, a R2 z powrotem do ujemnego zacisku źródła i masy. Ustaw oba
rezystory na `1k`, źródło na 5 V DC, a następnie oznacz etykietą zasilanie `IN` i punkt
środkowy `OUT`.
Upewnij się, że każdy komponent ma unikatowe oznaczenie, np. R1, R2 i V1.

Wybierz **Simulation → Simulate**, aby utworzyć arkusz Simulation. W sekcji
**Setup** wybierz **Measure DC — Operating Point**, a następnie **Run**. Powinny
pojawić się takie same wartości jak w dołączonym przykładzie dzielnika. Jeśli
symulacja się nie powiedzie, porównaj połączenia, ustawienia źródła i właściwości
SPICE z działającym przykładem.

W przypadku analizy przejściowej wybierz **Over time — Transient**, ustaw czas
trwania i maksymalny krok oraz skonfiguruj źródło zmienne w czasie. W przypadku
analizy AC wybierz **Frequency response — AC**, ustaw zakres częstotliwości i liczbę
punktów na dekadę, a następnie nadaj źródłu wejściowemu niezerową **amplitudę AC**,
zwykle 1 V. Częstotliwość sinusoidy i amplituda w analizie przejściowej nie
ustawiają przemiatania AC. TinyCAD udostępnia również analizy przemiatania DC,
szumów, funkcji przejścia i biegunów-zer; wcześniejsze rozdziały opisują, kiedy
każda z nich jest przydatna.

## Sprawdzanie wygenerowanego tekstu SPICE i dodawanie modeli
{: #inspect-the-generated-spice-and-add-models}

Po uruchomieniu dzielnika otwórz **Diagnostics → Generate circuit text**.
Najważniejsze wiersze wyglądają tak; TinyCAD dodaje również dyrektywy temperatury
i zapisywanych sygnałów:

```spice
R1 IN OUT 1k
R2 OUT 0 1k
V1 IN 0 DC 5 AC 0 0
.op
.end
```

`R1 IN OUT 1k` oznacza rezystor 1 kΩ między węzłami IN i OUT. `0` to
węzeł odniesienia. Ten tekst jawnie określa połączenia i polaryzację źródła.
Użyj **Export circuit**, jeśli chcesz oddzielnie sprawdzić lub uruchomić listę
połączeń. Arkusz Simulation w TinyCAD zarządza `.op`, `.tran`, `.ac` i innymi poleceniami
analizy; nie wklejaj ich ani `.end` do właściwości SPICE komponentu.

Aby dodać model urządzenia, rozwiń **Setup → SPICE models**. Wybierz plik
`.lib`, `.cir` lub `.mod` albo wpisz jego nazwę i tekst modelu. W obu
przypadkach wybierz **Save model**, aby dołączyć model. Użyj prostej nazwy
pliku, takiej jak `device.lib`. Następnie skonfiguruj
szablon SPICE symbolu tak, aby tworzył odpowiednie urządzenie lub `.SUBCKT`,
i w razie potrzeby dołącz załącznik, na przykład za pomocą `.include device.lib`
w jego prologu. Samo dołączenie pliku nie przypisuje go do symbolu.

Sprawdź kolejność zacisków modelu względem **numerów wyprowadzeń** symbolu,
a nie ich pozornego położenia na stronie. Trójzaciskowy model tranzystora i
podukład producenta mogą używać różnej kolejności węzłów. Sprawdź też wszelkie
odwołania do modeli zagnieżdżonych: dołączone pliki również muszą być przypisane
do arkusza Simulation. Definicje modeli i załączniki są zapisywane razem z rysunkiem.

TinyCAD obsługuje osadzony tekst modeli, ale nie dowolne skrypty poleceń ngspice
ani zewnętrzne moduły wykonywalne. Bloki `.control`, polecenia powłoki, ładowanie modułów
zewnętrznych oraz bodźce/modele oparte na plikach są wyłączone z tego sposobu
pracy. Użyj obsługiwanych elementów sterujących źródłami i analiz albo wyeksportuj
obwód, aby przeprowadzić oddzielny eksperyment z ngspice w wierszu poleceń. Model
producenta zapisany w dialekcie SPICE przeznaczonym dla innego symulatora może
wymagać dostosowania, zanim ngspice go zaakceptuje.

## Zastosowanie symulacji cyfrowych
{: #how-digital-simulations-fit-in}

Otwórz **XSPICE and digital tutorial → logic-buffer** w TinyCAD Desktop. Model
X1 zawiera mostek analogowo-cyfrowy, bufor zdarzeniowy i mostek
cyfrowo-analogowy. Zwykłe źródło steruje wejściem analogowym; mostki umożliwiają
obserwację stanów logicznych jako napięć na wykresach TinyCAD.

![Obliczone przebiegi wejściowe i wyjściowe dołączonego bufora XSPICE](/v4/images/simulation-tutorials/xspice/logic-buffer-results.png)

Uruchom zapisaną analizę przejściową. Oczekuj impulsów 0–5 V o okresie 1 µs
oraz opóźnionego o około 20 ns przejścia na wyjściu z niezerowym czasem zboczy.
Powiększ wykres, aby sprawdzić opóźnienie. Rysunek przedstawia rzeczywiste wyniki
solvera dla przykładu.

Węzły cyfrowe modelu nie są zwykłymi węzłami napięciowymi. Progi mostka i sposób
reprezentowania stanu niezdefiniowanego są celowymi założeniami modelowania.
Bramka behawioralna zbudowana z analogowych wyrażeń SPICE może wyglądać podobnie
na wykresie, ale wykorzystuje inną metodę symulacji. Kontynuuj, korzystając
z [przeglądu XSPICE](/v4/XSPICE-Tutorial-01/), aby poznać mostki, synchronizację, pamięć i obwody
mieszane.

## Zapisywanie, porównywanie i rozwiązywanie problemów
{: #save-compare-and-troubleshoot}

Zapisz eksperyment za pomocą **Save As**, aby zachować edytowalną kopię
przykładu dołączonego do programu. TinyCAD może zachować akwizycje wraz
z rysunkiem; **Save without results** zachowuje obwód i konfigurację, ale pomija
zapisane wyniki. Użyj eksportu **Data**, aby zapisać dane w formacie CSV, JSON
lub SPICE raw do dalszej analizy. Zanotuj, której akwizycji, modelu i okna
pomiarowego użyto.

| Objaw | Co sprawdzić najpierw |
| --- | --- |
| Brak informacji SPICE | Użyj modelowanego symbolu lub skonfiguruj jego kartę SPICE |
| Brak modelu lub podukładu | Nazwa modelu, dołączone pliki, instrukcja include i kolejność zacisków |
| Obwód pływający lub brak masy | Podłączona masa SPICE i odpowiednie ścieżki powrotu prądu stałego |
| Etykieta zasilania, ale brak napięcia zasilania | Podłącz źródło napięcia lub zasilacz laboratoryjny do oznaczonej sieci |
| Pusta/zerowa odpowiedź AC | Amplituda AC wejścia i wybrane sygnały |
| Model XSPICE niedostępny w przeglądarce | Uruchom przykład w TinyCAD Desktop |
| Wykres nie odpowiada zmienionym wartościom | Uruchom symulację ponownie i wybierz nową akwizycję |
| Błąd zbieżności lub niekompletny przebieg | Przeczytaj Diagnostykę, uprość obwód i sprawdź zbocza bodźca, krok czasowy i poprawność modelu |

[Podręcznik ngspice](https://ngspice.sourceforge.io/docs.html) jest źródłem informacji o semantyce
urządzeń i modeli. Elementy sterujące TinyCAD określają, które z tych
możliwości są dostępne w zintegrowanym przepływie pracy.

## Pobieranie układów z lekcji
{: #download-the-lesson-circuits}

Te same przykłady są już dostępne w **Otwórz przykład**. Aby uzyskać niezależną
kopię, pobierz rysunek `.dzn` i użyj w TinyCAD polecenia **File → Open**. Dołączony plik
`.cir` to tekst SPICE do przeglądania lub użycia w zgodnym symulatorze zewnętrznym,
a nie rysunek TinyCAD. Do uruchamiania nowych symulacji obwodów XSPICE wymagany
jest TinyCAD Desktop.

| Przykład | Rysunek | Lista połączeń |
| --- | --- | --- |
| divider | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/divider.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/divider.cir) |
| logic-buffer | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |

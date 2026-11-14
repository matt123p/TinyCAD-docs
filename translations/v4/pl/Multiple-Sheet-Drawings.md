---
layout: default
---
# Rysunki wieloarkuszowe
{: #multiple-sheet-drawings}

Rysunek TinyCAD może zawierać kilka arkuszy schematu w **jednym pliku**. Każdy arkusz ma własny obszar rysunku i kartę poniżej obszaru roboczego. Korzystaj z kart, aby pracować nad jednym arkuszem naraz; wszystkie arkusze schematu razem przedstawiają jeden obwód.

## Po co używać wielu arkuszy?
{: #why-use-multiple-sheets}

Wiele arkuszy pozwala uporządkować projekt w zrozumiałe sekcje, zamiast zmniejszać wszystko, by zmieściło się na jednej zatłoczonej stronie. Na przykład:

| Arkusz | Przykładowa zawartość |
| --- | --- |
| **Zasilanie** | Złącze wejściowe, zabezpieczenia, stabilizatory i szyny zasilające |
| **Sterowanie** | Procesor, zegar, reset i połączenia programujące |
| **Czujniki** | Wejścia pomiarowe i ich układy interfejsowe |
| **Wyjścia** | Sterowniki, przekaźniki, silniki, wyświetlacze lub złącza zewnętrzne |

Dzięki temu każdą sekcję łatwiej narysować, sprawdzić i wydrukować w czytelnej skali. Możesz umieścić powiązane elementy razem, nadać każdej stronie jasny cel i ułożyć strony w przydatnej kolejności czytania. W przypadku małego projektu pojedynczy arkusz może być nadal czytelniejszy.

Arkusz jest częścią bieżącego rysunku, a nie osobnym plikiem ani kartą przeglądarki. Otwarcie dwóch niepowiązanych plików rysunków nie łączy ich, nawet jeśli zawierają identyczne etykiety.

## Tworzenie arkuszy i przełączanie się między nimi
{: #create-and-switch-sheets}

1. Otwórz rysunek i znajdź karty arkuszy poniżej obszaru roboczego.
2. Wybierz **+** obok kart. Podpowiedź tego przycisku brzmi **Add new sheet** (Dodaj nowy arkusz).
3. Wprowadź **Sheet Name** (Nazwa arkusza), na przykład `Control`, i wybierz **Add** (Dodaj).
4. Nowy arkusz stanie się aktywny. Umieść na nim elementy i przewody albo przenieś zaznaczone elementy z innego arkusza za pomocą poleceń Wytnij i Wklej.
5. Wybierz kartę dowolnego arkusza, aby do niego wrócić. Przełączanie arkuszy nie powoduje utraty ich zawartości.

Używaj różnych, opisowych nazw, aby osoba czytająca schemat mogła znaleźć potrzebną sekcję.

## Zmiana nazwy arkusza
{: #rename-a-sheet}

1. Wybierz kartę arkusza.
2. Otwórz małe menu strzałki obok jego nazwy.
3. Wybierz **Rename** (Zmień nazwę), wprowadź nową **Sheet Name** (Nazwę arkusza), a następnie wybierz **Rename** (Zmień nazwę) w oknie dialogowym.

Zmiana nazwy zmienia nazwę strony. Nie zmienia oznaczeń elementów ani etykiet sieci i nie wpływa na połączenia elektryczne.

## Zmiana kolejności arkuszy
{: #change-the-sheet-order}

Przeciągnij kartę arkusza na inną kartę, aby przenieść ją na tę pozycję. Możesz też wybrać kartę, otworzyć jej menu strzałki i wybrać **Move left** (Przesuń w lewo) lub **Move right** (Przesuń w prawo), aby przesuwać ją o jedną pozycję.

Zmiana kolejności zmienia sekwencję stron, a nie elementy ani połączenia obwodu. Użyj tej funkcji, aby umieścić sekcję zasilania na początku, pogrupować powiązane funkcje albo umieścić strony pomocnicze za głównym obwodem. Przeciągnij **kartę**, aby zmienić kolejność stron; przeciągnięcie elementu spowoduje jego przesunięcie.

## Wideo: porządkowanie arkuszy i łączenie ich etykietami
{: #video-organise-sheets-and-connect-them-with-labels}

Samouczek rozpoczyna się od **Open Example → SPICE tutorial → divider** (Otwórz przykład → samouczek SPICE → dzielnik). Zmienia nazwę arkusza Circuit na Power, tworzy arkusz Control, zmienia kolejność kart, a następnie przenosi R2 do Control. Pasujące etykiety OUT i połączenia masy o nazwie 0 ponownie łączą dzielnik między arkuszami schematu. Widok Netlist potwierdza, że R1 i R2 są podłączone do tej samej sieci OUT.

{% include video-player.html src="/v4/videos/simulation/multiple-sheets.mp4" poster="/v4/videos/simulation/multiple-sheets.jpg" caption="Twórz arkusze, zmieniaj ich nazwy i kolejność, a następnie używaj zgodnych etykiet, aby połączyć dzielnik między arkuszami Power i Control." %}

Przykład zawiera również arkusz Simulation oznaczony symbolem zegara. Ten arkusz przechowuje ustawienia i wyniki analizy; różni się od strony schematu. Wszystkie arkusze schematu nadal współtworzą ten sam symulowany obwód.

## Tworzenie połączeń między arkuszami
{: #make-connections-between-sheets}

Przewód nie może fizycznie przechodzić na inną stronę. Zamiast tego użyj **etykiet aktywnych elektrycznie o tej samej nazwie** w punktach, które chcesz połączyć. TinyCAD traktuje te punkty jako jedną sieć we wszystkich arkuszach schematu danego rysunku.

Na przykład wyjście stabilizatora oznaczone etykietą `+3V3` na arkuszu Power może zasilać wejście procesora oznaczone etykietą `+3V3` na arkuszu Control. Sygnał oznaczony etykietą `RESET` może łączyć układ resetu na jednym arkuszu z procesorem na innym. Etykiety muszą być przypisane do odpowiednich przewodów lub wyprowadzeń.

### Umieszczanie wspólnej etykiety sieci
{: #place-a-shared-net-label}

1. Na pierwszym arkuszu narysuj lokalny przewód do wyprowadzenia elementu w zwykły sposób.
2. Wybierz narzędzie **Label** (Etykieta) i umieść jego punkt połączenia elektrycznego na przewodzie lub wyprowadzeniu. Sam tekst narysowany w pobliżu nie wystarczy.
3. Zmień tekst etykiety na czytelną nazwę, na przykład `RESET` lub `I2C_SDA`. Wybierz tekst etykiety, aby go edytować; zastąp domyślny tekst `Label`.
4. Przejdź na drugi arkusz i umieść kolejną etykietę Label na przewodzie lub wyprowadzeniu, które ma należeć do tej samej sieci.
5. Wprowadź **dokładnie tę samą nazwę**, z uwzględnieniem pisowni, spacji i wielkości liter.
6. Powtórz te czynności na kolejnych arkuszach wszędzie tam, gdzie potrzebna jest ta sama sieć elektryczna.

Użyj [narzędzia Label](../Labels/), a nie [narzędzia Text](../Text/). Notatka z napisem RESET opisuje rysunek; etykieta Label z napisem RESET tworzy połączenie elektryczne.

### Przykład: dzielnik na dwóch arkuszach
{: #worked-example-a-divider-on-two-sheets}

Podziel zwykły dzielnik 5 V na sekcję zasilania i sekcję obciążenia:

| Arkusz | Elementy | Połączenia wspólne |
| --- | --- | --- |
| **Power** | V1 = 5 V i R1 = 1 kΩ | Przewód wyjściowy R1 ma etykietę **OUT**; powrót V1 jest połączony z masą **0**. |
| **Control** | R2 = 1 kΩ | Górne wyprowadzenie R2 ma etykietę **OUT**, a dolne jest połączone z symbolem zasilania masy o nazwie **0**. |

OUT łączy R1 z R2 między arkuszami. Pasujące nazwy masy łączą powrót R2 z masą 0 na arkuszu Power. Między stronami nie jest narysowany żaden przewód, ale obwód elektryczny nadal ma postać V1 → R1 → R2 → powrót. Przy pierwotnych wartościach napięcie wyjściowe w punkcie pracy nadal wynosi 2.5 V.

Wideo przenosi R2 za pomocą poleceń **Cut and Paste** (Wytnij i Wklej), zachowując jego oznaczenie zamiast tworzyć drugi element R2. Dodając kolejne elementy, zachowuj unikatowość oznaczeń w całym rysunku, aby listy sieci i raporty wskazywały właściwy element.

## Nazwy etykiet dotyczą całego rysunku
{: #label-names-apply-to-the-whole-drawing}

Wspólne nazwy są przydatne, ale łatwo przez nie przypadkowo połączyć niepowiązane sekcje. Etykieta o nazwie `OUT` na trzech różnych arkuszach łączy wszystkie trzy lokalizacje; nie jest przypisana tylko do danej strony. Używaj bardziej szczegółowych nazw, takich jak `SENSOR_OUT` i `AUDIO_OUT`, gdy sygnały mają pozostać rozdzielone.

Nazwy arkuszy i kolejność kart nie zapewniają izolacji elektrycznej. Kształt etykiety jest również tylko konwencją wizualną: etykiety zwykłe, wejściowe, wyjściowe i dwukierunkowe o tej samej nazwie należą do tej samej sieci. Dobieraj kształty tak, aby ułatwić czytelnikom śledzenie zamierzonego kierunku sygnału, a nazwy — określanie połączeń.

[Symbole zasilania](../Power-symbols/) również zapewniają wspólne, nazwane połączenia zasilania. Zachowuj spójność nazw: `+3V3` i `3V3` to różne nazwy. W SPICE używaj rzeczywistego połączenia z węzłem **0**; osobna sieć o nazwie GND nie jest automatycznie masą odniesienia symulatora.

## Sprawdzanie połączeń między arkuszami
{: #check-the-cross-sheet-connections}

Użyj menu trybu w dolnym panelu listy, aby przełączyć widok z **Symbols** (Symbole) na **Netlist** (Lista sieci). Znajdź wspólną etykietę i sprawdź połączone oznaczenia elementów oraz numery wyprowadzeń. Kolumna Sheet zawiera nazwę głównego elementu reprezentowanego przez wiersz; kolumna Symbols może zawierać elementy z innych arkuszy należące do tej samej sieci. W przykładzie OUT obejmuje zarówno R1, jak i R2.

Jeśli połączenia brakuje, sprawdź miejsce przypisania etykiety oraz jej dokładny tekst na obu stronach. Jeśli niepowiązane elementy współdzielą sieć, poszukaj w innym miejscu rysunku etykiety o tej samej nazwie. [Kontrola reguł projektowych](../Design-Rules-Check/) może pomóc wykryć problemy elektryczne, ale nie może ustalić, czy zamierzano rozdzielić dwie sieci o identycznych nazwach.

Więcej informacji można znaleźć w sekcjach [Edytor listy sieci](../Netlist-Editor/) i [Etykiety](../Labels/). W rysunku symulacyjnym uruchom analizę ponownie po zmianie obwodu, aby wynik uwzględniał wszystkie bieżące arkusze schematu.

## Zapisywanie całego rysunku
{: #save-the-complete-drawing}

Polecenie **Save** (Zapisz) zapisuje wszystkie arkusze razem. Zwykłe rysunki używają `.dsn`; rysunki zawierające dane symulacji używają [`.dzn`](../Simulation/#dzn-simulation-drawings). Nie trzeba zapisywać każdego arkusza osobno.

- Wróć do [Rysunku](../User-guide/)

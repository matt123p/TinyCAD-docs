---
layout: default
title: "10. Design investigations: sweeps, tolerances, noise and diagnosis"
---
# 10. Badania projektu: przemiatania, tolerancje, szumy i diagnostyka
{: #design-investigations-sweeps-tolerances-noise-and-diagnosis}

[Poprzedni](/v4/SPICE-Tutorial-09/) · [Spis treści](/v4/Simulation-Tutorials/) · [Dalej: SPICE w TinyCAD](/v4/SPICE-Tutorial-11/)

Przykłady z tego rozdziału są dołączone do TinyCAD. Wybierz **Otwórz przykład (Open Example) → Samouczek SPICE (SPICE tutorial)**, zaznacz przykład o podanej nazwie, a następnie wybierz **Otwórz rysunek (Open Drawing)**. Nie trzeba niczego pobierać.

Przydatny raport z symulacji zawiera pytanie, wersję obwodu/modelu,
analizę, wymuszenie, przedział pomiaru i kryterium akceptacji. Przekonujący
wykres bez tych informacji trudno odtworzyć.

## Przemiatanie parametrów i tolerancje
{: #parameter-sweeps-and-tolerances}

Wróć do **rc-ac**. W **Dostrajanie / przemiatanie (Tune / sweep)** uruchom przygotowane
wartości R1: 1 kΩ, 2.2 kΩ i 4.7 kΩ. Oczekiwane częstotliwości graniczne wynoszą odpowiednio 159.15, 72.34 i
33.86 Hz. Jest to przemiatanie parametrów: pokazuje, jak celowo dobrane wartości elementów
wpływają na charakterystykę. Różni się od **Przemiatania DC (DC sweep)** z rozdziału 2, które zmienia
wartość DC niezależnego źródła w trakcie jednej analizy.

Do badania tolerancji użyj **Laboratorium analiz (Analysis lab) → Badania tolerancji (Tolerance studies)**. Zdefiniuj powiązania R1 i C1,
wybierz rozkład i ziarno generatora, a następnie dodaj wymaganie dotyczące częstotliwości granicznej. Przy niezależnych, ograniczonych wartościach ±5% skrajne
kombinacje RC dają w przybliżeniu zakres 144.36–176.35 Hz. Próbka Monte Carlo nie musi osiągnąć żadnej z tych granicznych wartości.
Odchylenie standardowe rozkładu normalnego nie jest twardą granicą ±. Zapisz,
którą konwencję wybrano oraz czy zmienne są skorelowane.

TinyCAD może zachować warunki przypadków testowych oraz definicje pomiarów/wymagań.
Użyj **Zastosuj (Apply)** tylko wtedy, gdy chcesz, aby tymczasowe dostrajanie stało się rzeczywistą zmianą
schematu. Przy zmianie topologii lub tekstu modelu zapisz osobną wersję obwodu;
hash pozyskania jest identyfikatorem, a nie możliwą do odzyskania wersją schematu.

## Szum: inny rodzaj wyniku
{: #noise-a-different-kind-of-output}

Otwórz **rc-noise**. Przykład wyznacza szum wyjściowy w punkcie OUT,
odniesiony do niezależnego źródła wejściowego V1, w zakresie od 1 Hz do 100 kHz przy 27°C.
Idealne źródło nie generuje szumu; R1 wnosi szum cieplny filtrowany przez C1.

![Widmowa gęstość szumu wyjściowego obwodu RC](/v4/Images/simulation-tutorials/spice/rc-noise-results.png)

Całkowity szum wyjściowy w tym paśmie wynosi w przybliżeniu **64.2 nV RMS**. Dla
idealnego obwodu RC, całkowanego od zera do nieskończonej częstotliwości, średni kwadrat szumu kondensatora wynosi `kT/C`, co daje około 64.4 nV RMS przy 300.15 K i 1 µF.
Niewielką różnicę wyjaśnia skończone pasmo symulacji. Gęstość widmowa
ma jednostki V/√Hz; jej całkę wyznacza się z kwadratu gęstości i szerokości pasma,
a następnie oblicza pierwiastek kwadratowy. Nie jest to suma arytmetyczna wyświetlonych
próbek gęstości. Całkowity szum odniesiony do wejścia jest innym wynikiem.

## Funkcje przenoszenia i bieguny
{: #transfer-functions-and-poles}

Otwórz **rc-tf**. Wynik małosygnałowej funkcji przenoszenia dla DC wynosi
1 V/V, rezystancja wyjściowa to 1 kΩ, a rezystancja wejściowa jest praktycznie nieskończona,
ponieważ kondensator jest rozwarty dla DC. Bardzo duża wyświetlona rezystancja wejściowa,
taka jak `1e20`, oznacza numeryczny wynik dla obwodu otwartego, a nie zmierzoną
fizyczną rezystancję 100 eksaomów.

Otwórz **rc-pz**. Biegun wynosi w przybliżeniu **−1000 rad/s**,
co odpowiada `s = −1/(RC)`. Podziel jego wartość bezwzględną przez `2π`, aby uzyskać 159.15 Hz. Biegun
w lewej półpłaszczyźnie zespolonej s oznacza zanik w tym układzie liniowym.
Brak skończonego zera jest oczekiwany dla tej transmitancji dolnoprzepustowej pierwszego rzędu.

Analizy te działają na modelu zlinearyzowanym. Nie zastępują testów w dziedzinie czasu
obcinania sygnału, przełączania ani rozruchu. Dowolny wzmocnienie wyjście/wejście nie jest też
tym samym co wzmocnienie pętli sprzężenia zwrotnego; pomiary stabilności wymagają przemyślanej
konfiguracji testowej pętli.

## Praktyczny zestaw pomiarów
{: #a-practical-measurement-menu}

| Zadanie | Odpowiednie wielkości |
| --- | --- |
| Kondycjonowanie sygnału z czujnika | Wzmocnienie, przesunięcie, szum, częstotliwość graniczna, czas ustalania |
| Interfejs impulsowy | Czas narastania/opadania, opóźnienie, szerokość impulsu, współczynnik wypełnienia |
| Wzmacniacz | Punkt pracy, wzmocnienie/faza, pasmo, napięcie wyjściowe RMS, moc, obcinanie sygnału |
| Stopień mocy | Tętnienia, prąd szczytowy, moc średnia, energia, sprawność |
| Zmiany parametrów elementów | Nakładane wykresy przemiatania, najgorsze zaobserwowane wartości, wyniki wymagań |

TinyCAD udostępnia również wirtualny oscyloskop, multimetr, generator funkcyjny i
zasilacz laboratoryjny z ograniczeniem prądowym w sekcji **Wyposażenie laboratorium (Lab Equipment)**. Ich impedancje i
ograniczenia mają znaczenie: na przykład rezystancja wyjściowa generatora funkcyjnego wynosi zwykle 50 Ω.
Narzędzia te umożliwiają zastosowanie innego sposobu badania tych samych zagadnień elektrycznych.

## Diagnozowanie nieudanego lub niewiarygodnego przebiegu
{: #diagnose-a-failed-or-implausible-run}

Najpierw sprawdź masę, niezamierzone zwarcia i niepodłączone węzły. Potwierdź
mapowanie wyprowadzeń elementów i nazwy modeli. W analizie AC sprawdź amplitudę AC niezależnego źródła;
w analizie stanów przejściowych sprawdź czas trwania, maksymalny krok i skończone zbocza wymuszenia. Odczytaj
dziennik solvera i potwierdź, że obliczenia osiągnęły wymagany czas końcowy. Niepełny
przebieg nie jest ukończonym wynikiem.

Zanim zmienisz ustawienia numeryczne, spróbuj prostszego testu punktu pracy lub odizolowanego stopnia.
Udokumentuj każdą dodaną rezystancję upływu, rezystancję źródła lub pojemność pasożytniczą: zmienia ona obwód,
a jednocześnie może ułatwiać zbieżność. Jeśli potrzebne są specjalistyczne obliczenia, wyeksportuj CSV
i zachowaj jednostki oraz kolumny zespolone.

Dalsza lektura: [Samouczek języka sterującego ngspice](https://ngspice.sourceforge.io/ngspice-control-language-tutorial.html)
pokazuje automatyzację z wiersza poleceń. Model dokumentu TinyCAD celowo nie wykonuje dowolnych skryptów `.control`; używaj obsługiwanych elementów sterujących analizą i badaniami
albo wyeksportuj listę połączeń, aby zastosować osobny obieg pracy ngspice.

## Pobieranie obwodów do lekcji
{: #download-the-lesson-circuits}

Te same przykłady są już dostępne w sekcji **Otwórz przykład (Open Example)**. Aby uzyskać niezależną kopię, pobierz rysunek `.dzn` i użyj w TinyCAD polecenia **Plik → Otwórz (File → Open)**. Towarzyszący plik `.cir` to tekst SPICE przeznaczony do przeglądania lub użycia w zgodnym symulatorze zewnętrznym, a nie rysunek TinyCAD. Obwody XSPICE wymagają wersji Desktop do uruchomienia nowych symulacji.

| Przykład | Rysunek | Lista połączeń |
| --- | --- | --- |
| rc-ac | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/rc-ac.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/rc-ac.cir) |
| dc-sweep | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/dc-sweep.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/dc-sweep.cir) |
| rc-noise | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/rc-noise.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/rc-noise.cir) |
| rc-tf | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/rc-tf.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/rc-tf.cir) |
| rc-pz | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/rc-pz.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/rc-pz.cir) |

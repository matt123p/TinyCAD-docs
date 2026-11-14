---
layout: default
---
# Analizy symulacji i ustawienia
{: #simulation-analyses-and-settings}

Wybierz analizę na karcie **Setup** arkusza [symulacji](../Simulation/). Dobierz ją do pytania, na które chcesz znaleźć odpowiedź. Sinusoida w dziedzinie czasu i przemiatanie częstotliwości AC to różne eksperymenty, nawet jeśli wykorzystują ten sam symbol źródła.

| Analiza | Pytanie | Główne wyniki |
| --- | --- | --- |
| **Operating Point** | Jakie są napięcia i prądy polaryzacji DC? | Wartości skalarne |
| **Transient** | Co dzieje się po zmianie lub podczas kolejnych cykli? | Sygnały w funkcji czasu |
| **AC** | Jak mały sygnał zmienia się wraz z częstotliwością? | Sygnały zespolone w funkcji częstotliwości |
| **DC sweep** | Jak zmienia się zachowanie układu DC, gdy zmienia się jedno niezależne źródło? | Sygnały w funkcji wartości źródła |
| **Noise** | Jaki szum dociera do wybranego wyjścia? | Widmowe i całkowane wykresy szumu |
| **Transfer Function** | Jaka jest małosygnałowa transmitancja DC od wskazanego źródła? | Wzmocnienie oraz rezystancja wejściowa/wyjściowa |
| **Pole-Zero** | Gdzie znajdują się bieguny i zera skonfigurowanej transmitancji? | Zespolone wyniki biegunów/zer |

## Punkt pracy
{: #operating-point}

Analiza punktu pracy wyznacza ustalone rozwiązanie DC. Idealne kondensatory są rozwarciami, a idealne cewki zwarciami dla DC. Urządzenia nieliniowe, takie jak diody i tranzystory, są rozwiązywane w warunkach ich polaryzacji. Przed próbą wyznaczenia charakterystyki częstotliwościowej wzmacniacza tranzystorowego sprawdź tę analizę: nieprawidłowo spolaryzowany tranzystor zostanie zlinearyzowany wokół niewłaściwego stanu.

Użyj **Data**, aby wyświetlić napięcia węzłowe i prądy gałęzi. Napięcie jest mierzone względem masy 0. Znak prądu wynika z zadeklarowanej kolejności wyprowadzeń elementu; ujemny prąd zasilania może po prostu oznaczać, że źródło oddaje moc. [Samouczek DC](../SPICE-Tutorial-02/) omawia napięcie, prąd i moc.

![Skalarne wyniki napięcia i prądu z nowego uruchomienia analizy punktu pracy dzielnika](../images/simulation/simulation-data.png)

## Transient: zachowanie w czasie
{: #transient-behaviour-over-time}

Ustaw **Duration** na tyle długo, aby objąć zdarzenie i tę część odpowiedzi, którą chcesz zmierzyć. Ustaw **Maximum step** na tyle mały, aby odwzorować najszybsze istotne zjawisko. W przypadku impulsu może to być jego zbocze, a nie okres powtarzania. Gładki wygląd wykresu nie odtworzy zmian, których solver nie rozwiązał.

Dla ładowania obwodu RC stała czasowa wynosi `τ = R × C`. Około pięciu stałych czasowych pozwala zaobserwować większość odpowiedzi ustalonej układu pierwszego rzędu. W przypadku tętnień lub wartości skutecznej symuluj wystarczającą liczbę cykli, aby osiągnąć stan ustalony, i mierz późniejszy przedział, zamiast niepotrzebnie uwzględniać rozruch.

Solver używa adaptacyjnych kroków czasowych. Maksymalny krok ogranicza ich wielkość; nie gwarantuje jednak równomiernie rozmieszczonej siatki próbek. Algorytmy pomiarowe uwzględniają rzeczywiste chwile próbkowania. Powiększenie wykresu zmienia sposób wyświetlania, a nie krok czasowy akwizycji.

Domyślnie przed uruchomieniem analizy Transient wyznaczany jest punkt pracy DC. Opcja warunków początkowych pomijająca ten krok odpowiada SPICE **UIC**. Używaj jej świadomie, gdy określony stan początkowy jest częścią eksperymentu; nie jest to uniwersalny sposób naprawy nieprawidłowo podłączonego obwodu. Zobacz [ładowanie obwodu RC](../SPICE-Tutorial-04/) oraz [prostowanie i tętnienia](../SPICE-Tutorial-06/).

## AC: małosygnałowa charakterystyka częstotliwościowa
{: #ac-small-signal-frequency-response}

Analiza AC najpierw wyznacza punkt pracy, linearyzuje w nim urządzenia nieliniowe, a następnie oblicza odpowiedź na małe sinusoidalne zaburzenie. **Nie** przemiata dużej sinusoidy w dziedzinie czasu aż do obcinania. Do badania obcinania, zniekształceń i dużych wychyleń sygnału użyj analizy Transient.

Ustaw częstotliwości początkową i końcową oraz liczbę punktów na dekadę. Przemiatanie logarytmiczne jest przydatne przy badaniu kilku rzędów wielkości. Zwiększ rozdzielczość częstotliwości w pobliżu wąskiego rezonansu lub blisko położonych częstotliwości granicznych.

Ustaw **AC amplitude** i fazę źródła niezależnie od ustawień jego przebiegu przejściowego. Amplituda AC równa **1 V** i faza **0°** ułatwiają interpretację transmitancji napięciowej z jednym wejściem. Sama amplituda sinusoidy przejściowej nie włącza pobudzenia AC. Dla ogólnego sygnału wejściowego oblicz zespolony stosunek `V(out) / V(in)`; samo napięcie wyjściowe nie zawsze jest wzmocnieniem.

![Ustawienia przemiatania AC dla dołączonego filtru RC](../images/simulation/ac-setup.png)

Dla filtru dolnoprzepustowego pierwszego rzędu, gdzie R = 1 kΩ i C = 1 µF, `fc = 1 / (2πRC) ≈ 159.15 Hz`. Przy tej częstotliwości wzmocnienie filtru o jednostkowym wzmocnieniu w paśmie przepustowym wynosi około 0,707, czyli −3,0103 dB, a faza około −45°. [Samouczek dotyczący filtrów](../SPICE-Tutorial-05/) przedstawia moduł, wartość w dB i fazę.

![Rzeczywiste wyniki AC z nowego uruchomienia przykładu RC w przeglądarce](../images/simulation/ac-charts.png)

## Przemiatanie DC
{: #dc-sweep}

Wybierz **odwołanie do źródła**, na przykład `V1`, i wprowadź wartości początkową, końcową oraz kroku. Odwołanie wskazuje niezależne źródło napięcia/prądu; nie jest etykietą sieci. Wybierz krok, który prowadzi od wartości początkowej do końcowej.

Przemiatanie DC rozwiązuje kolejno warunki polaryzacji. Przydaje się do uzyskania charakterystyki I–V diody lub statycznej charakterystyki przejściowej wzmacniacza. Nie modeluje szybkości zmian źródła ani ładunku zgromadzonego podczas narastania sygnału. W tym celu podaj przebieg zmienny w czasie i użyj analizy Transient.

Ta analiza różni się od **przemiatania jednej zmiennej w Circuit Explorer**, które wielokrotnie uruchamia wybraną analizę, zmieniając wartość liczbową elementu lub parametru ustawień. Można na przykład przemiatać R1 przez pięć wartości, powtarzając analizę AC, aby porównać częstotliwości graniczne filtru.

## Szum
{: #noise}

Podaj źródło wejściowe oraz węzły wyjściowy/odniesienia, a następnie zakres i rozdzielczość częstotliwości. Wynikiem jest różnica napięć; sprawdź wybrane węzły odniesienia. Analiza szumu wykorzystuje małosygnałowe składowe szumu wokół punktu pracy. Wymaga modeli elementów obsługujących szum; idealny, bezszumny blok behawioralny nie otrzymuje automatycznie widma szumu fizycznego elementu.

Wybierz właściwy wykres wyników: gęstość **widmowa** i szum **całkowany** to różne wielkości. Zwracaj uwagę na jednostki wykresu; gęstość amplitudy w V/√Hz nie jest napięciem, dopóki nie zostanie scałkowana w określonym paśmie. Zobacz [badania projektowe](../SPICE-Tutorial-10/).

## Transmitancja i bieguny oraz zera
{: #transfer-function-and-pole-zero}

Analiza **Transfer Function** (`.tf`) wykorzystuje jawnie wskazane niezależne źródło i port wyjściowy, aby obliczyć małosygnałowe wzmocnienie DC oraz rezystancję wejściową/wyjściową. Nie jest to pełne przemiatanie częstotliwości w analizie AC. Sprawdź odwołanie do źródła i to, czy wyjście jest mierzone względem właściwego węzła.

Analiza **Pole-Zero** bada bieguny i zera skonfigurowanej transmitancji małosygnałowej. Wybór portu i transmitancji ma znaczenie: analiza ta nie wyszukuje wszystkich możliwych zachowań schematu. Interpretuj wyniki na płaszczyźnie zespolonej razem z wynikami AC i Transient, a nie jako zamiennik prawidłowo spolaryzowanego modelu.

## Temperatura, jednostki i parametry
{: #temperature-units-and-parameters}

Temperaturę w ustawieniach podaje się w **°C**. Wpływa ona na elementy, których modele uwzględniają zależność od temperatury; nie dodaje fizyki cieplnej elementowi idealnemu. Nazwane parametry ustawień pozwalają ponownie wykorzystywać wartości liczbowe w zgodnych wyrażeniach SPICE i powiązaniach eksploracji.

W kontrolkach liczbowych można używać notacji inżynierskiej, takiej jak `5ms`, `10us` i `1kHz`. W **tekście SPICE** przedrostki podlegają regułom SPICE: `k` oznacza kilo, `u` mikro, `n` nano, a **`m` lub `M` oznacza mili**. Dla mega zapisuj **`Meg`**, na przykład `1Meg` dla jednego megaoma. Nie zakładaj, że `1M` oznacza milion.

Obliczenie samej stałej czasowej lub częstotliwości granicznej jest przydatnym sprawdzianem. Nie zastępuje jednak uwzględnienia obciążenia: rezystancja wyjściowa generatora, rezystancja wejściowa miernika lub kolejnego stopnia może zmienić rzeczywistą odpowiedź.

Pełny opis składni analiz i zachowania modeli znajdziesz w oficjalnym [podręczniku ngspice](https://ngspice.sourceforge.io/docs.html). Aby poznać elementy sterujące TinyCAD, przejdź do [źródeł i przyrządów](../Simulation-Sources-and-Instruments/) lub [wykresów i pomiarów](../Simulation-Charts-and-Measurements/).

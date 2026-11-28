---
layout: default
title: 3. Choosing and configuring signal generators
---
# 3. Wybór i konfiguracja generatorów sygnałów
{: #choosing-and-configuring-signal-generators}

[Poprzedni](/v4/SPICE-Tutorial-02/) · [Spis treści](/v4/Simulation-Tutorials/) · [Następny](/v4/SPICE-Tutorial-04/)

Przykłady z tego rozdziału są dołączone do TinyCAD. Wybierz **Open Example → SPICE tutorial**, zaznacz przykład o podanej nazwie, a następnie wybierz **Open Drawing**. Pobieranie nie jest potrzebne.

Sygnał pobudzający opisuje źródło sterujące obwodem. Zaznacz symbol źródła na
arkuszu Circuit, aby otworzyć jego ustawienia. Opcja **Signal type** zmienia
przebieg i wyświetla odpowiednie parametry. Podgląd pokazuje zaprogramowany
przebieg; symulacja oblicza to, co dzieje się po obciążeniu źródła przez obwód.

Każdy z poniższych rysunków jest gotowy do analizy przejściowej trwającej 5 ms. Każde
źródło napięcia zasila obciążenie 1 kΩ. Korzystaj z nich, aby poznawać po jednym
ustawieniu, zanim zastosujesz przebieg w bardziej złożonym obwodzie.

| Rysunek | Zapisany sygnał pobudzający | Oczekiwane zachowanie |
| --- | --- | --- |
| **source-dc** (DC) | 5 V | Stałe 5 V i prąd obciążenia 5 mA |
| **source-sine** (Sinusoidalny) | offset 1 V, amplituda szczytowa 2 V, 1 kHz | od −1 do +3 V, okres 1 ms |
| **source-pulse** (Impulsowy) | 0–5 V, narastanie/opadanie 10 µs, stan wysoki 300 µs, okres 1 ms | Powtarzające się impulsy o niezerowym czasie zboczy |
| **source-triangle** (Trójkątny) | od −1 do +1 V, okres 1 ms | Liniowe narastające i opadające rampy |
| **source-pwl** (Odcinkowo liniowy) | 0 V do 1 ms, narastanie do 3 V do 2 ms, utrzymanie do 3 ms, opadanie do 4 ms | Zaprogramowana sekwencja rozruchu i wyłączania |
| **source-exponential** (Wykładniczy) | 0–5 V, narastanie rozpoczyna się po 1 ms, opadanie po 3 ms | Przejścia wykładnicze ze stałymi czasowymi 300 µs i 500 µs |
| **source-fm** (FM) | amplituda 1 V, częstotliwość nośna 5 kHz, modulacja 500 Hz, indeks 2 | Stała amplituda przy zmiennej częstotliwości chwilowej |
| **source-current** (Impuls prądowy) | 0–1 mA do obciążenia powrotnego 1 kΩ | Około 0 do −1 V przy podanej orientacji źródła |


To wykresy z solvera dla dostarczonych plików. Wynik dla źródła prądowego jest
ujemny, ponieważ źródło pobiera prąd z OUT do masy, a rezystor zapewnia drogę
powrotną. Odwróć źródło, jeśli wymagane jest dodatnie napięcie obciążenia. Idealne
źródło prądowe wymusza prąd; napięcie na jego zaciskach zależy od sieci. Nie ma ono
automatycznego ograniczenia napięcia zgodnego.

## Film: ustawienia źródła i podgląd przebiegu
{: #video-source-settings-and-waveform-preview}

Zmiana offsetu, amplitudy szczytowej i częstotliwości sinusoidy, a następnie ponowne uruchomienie analizy przejściowej.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/source-settings.mp4" poster="/v4/videos/simulation-tutorials/spice/source-settings.jpg" caption="Ustawienia źródła i podgląd przebiegu." %}

[Obejrzyj lub pobierz film](/v4/videos/simulation-tutorials/spice/source-settings.mp4).

### Obwód i wyniki odniesienia
{: #circuit-and-reference-results}

![Przykładowe zmierzone przebiegi](/v4/Images/simulation-tutorials/spice/source-waveforms.png)

## Amplituda, offset i parametry czasowe
{: #amplitude-offset-and-timing}

W przypadku sinusoidy `v(t) = offset + amplitude × sin(2πft + phase)` przed uwzględnieniem opcjonalnego opóźnienia
i tłumienia. Amplituda to wartość **szczytowa**, a nie międzyszczytowa ani
skuteczna (RMS). Sinusoida o amplitudzie szczytowej 2 V i zerowym offsecie ma
wartość międzyszczytową 4 V i wartość skuteczną 1.414 V. Przy offsecie 1 V jej
całkowita wartość skuteczna wynosi `sqrt(1² + 2²/2) = 1.732 V`.

Szerokość impulsu określa czas trwania stanu wysokiego; skończony czas zboczy
wpływa na szerokość mierzoną przy danym progu. Dla podanego impulsu czas powyżej
2.5 V wynosi około 310 µs, co daje współczynnik wypełnienia około 31%. Unikaj
zboczy o zerowym czasie podczas badania obwodu analogowego. Wprowadzają one
nieograniczone pasmo i utrudniają obliczenia numeryczne, a ponadto nie odpowiadają
rzeczywistemu generatorowi.

Dane odcinkowo liniowe zawierają po jednej parze czas/wartość w każdym wierszu. Są
przydatne do opisu ramp zasilania, profili czujników i nieokresowych sekwencji
testowych. Źródło wykładnicze wymusza przebieg wykładniczy; nie dodaje fizycznej
sieci RC.

## Pobudzenie AC to osobne ustawienie
{: #ac-excitation-is-a-separate-setting}

**AC amplitude** i **AC phase** sterują analizą częstotliwościową AC. Pole
częstotliwości sinusoidy nie ustala zakresu częstotliwości przemiatania AC. Podobnie
amplituda AC równa 1 V nie tworzy sinusoidy przejściowej o amplitudzie 1 V. Pamiętaj
o tych różnicach, gdy to samo źródło wejściowe jest używane do analizy punktu pracy,
AC i stanów przejściowych.

Idealne niezależne źródło napięcia ma zerową impedancję wyjściową, a idealne
niezależne źródło prądowe — nieskończoną impedancję wyjściową. **Lab Equipment
→ Function generator** w TinyCAD ma natomiast konfigurowalną rezystancję wyjściową
(zwykle 50 Ω). Obciążenie dopasowane do 50 Ω otrzymuje połowę napięcia generatora
w stanie jałowym.

## Źródła sterowane i zastosowania praktyczne
{: #controlled-sources-and-practical-uses}

Menu wstawiania SPICE udostępnia także źródło napięcia sterowane napięciem oraz
źródło prądu sterowane napięciem. Pierwsze realizuje `Vout = gain × Vcontrol`;
drugie realizuje `Iout = transconductance × Vcontrol`. Ich zaciski sterujące
i zaciski wyjściowe są oddzielne. Otwórz przykład **controlled-source**, aby
zobaczyć gotowe do uruchomienia źródło napięcia sterowane napięciem o wzmocnieniu 2.
Wejście o amplitudzie szczytowej 1 V daje wyjście o amplitudzie szczytowej 2 V na
obciążeniu 1 kΩ. Model idealnego źródła nie uwzględnia obcinania ani zasilania.

Źródła sterowane mogą reprezentować idealny wzmacniacz,
przetwornik lub obciążenie zależne, ale nie uwzględniają ograniczeń zasilania ani
pasma, o ile model nie definiuje ich jawnie.

Spróbuj zmienić wyłącznie amplitudę sinusoidy, a następnie wyłącznie jej offset.
Przed ponownym uruchomieniem przewidź nową wartość minimalną, maksymalną i skuteczną.
Następnie podwój częstotliwość i zmniejsz o połowę maksymalny krok czasowy, aby
sprawdzić, czy wyświetlony przebieg pozostaje dostatecznie dokładny.

Dokumentacja: składnię źródeł i definicje przebiegów opisano w
[podręczniku ngspice](https://ngspice.sourceforge.io/docs.html).

## Pobierz obwody z lekcji
{: #download-the-lesson-circuits}

Te same przykłady są już dostępne w **Open Example**. Aby uzyskać niezależną kopię,
pobierz rysunek `.dzn` i wybierz w TinyCAD **File → Open**. Plik towarzyszący
`.cir` zawiera tekst SPICE do wglądu lub użycia w zgodnym symulatorze zewnętrznym,
a nie rysunek TinyCAD. Do uruchamiania nowych symulacji obwodów XSPICE wymagany jest Desktop.

| Przykład | Rysunek | Lista połączeń |
| --- | --- | --- |
| source-dc | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/source-dc.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/source-dc.cir) |
| source-current | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/source-current.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/source-current.cir) |
| source-sine | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/source-sine.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/source-sine.cir) |
| source-pulse | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/source-pulse.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/source-pulse.cir) |
| source-triangle | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/source-triangle.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/source-triangle.cir) |
| source-pwl | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/source-pwl.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/source-pwl.cir) |
| source-exponential | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/source-exponential.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/source-exponential.cir) |
| source-fm | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/source-fm.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/source-fm.cir) |
| controlled-source | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/controlled-source.dzn) | [Tekst SPICETCAD](/v4/examples/simulation-tutorials/spice/controlled-source.cir) |

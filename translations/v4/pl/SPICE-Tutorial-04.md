---
layout: default
title: "4. Transient analysis: charging a capacitor"
---
# 4. Analiza stanów nieustalonych: ładowanie kondensatora
{: #transient-analysis-charging-a-capacitor}

[Poprzedni](/v4/SPICE-Tutorial-03/) · [Spis treści](/v4/Simulation-Tutorials/) · [Następny](/v4/SPICE-Tutorial-05/)

Przykłady z tego rozdziału są dołączone do TinyCAD. Wybierz **Otwórz przykład (Open Example) → Samouczek SPICE (SPICE tutorial)**, zaznacz przykład o podanej nazwie, a następnie wybierz **Otwórz rysunek (Open Drawing)**. Nie trzeba niczego pobierać.

Otwórz **rc-step**. Źródło zmienia napięcie z 0 na 1 V, zasilając przez
rezystor 1 kΩ kondensator 1 µF. Zapisana analiza stanów nieustalonych trwa 5 ms, a jej maksymalny krok wynosi
5 µs. Narysuj jednocześnie przebiegi IN i OUT.


## Film: ładowanie w obwodzie RC i stała czasowa
{: #video-rc-charging-and-time-constant}

Zmniejszanie maksymalnego kroku czasowego i pomiar OUT po 1 ms oraz stałej czasowej RC.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/rc-transient.mp4" poster="/v4/videos/simulation-tutorials/spice/rc-transient.jpg" caption="Ładowanie w obwodzie RC i stała czasowa." %}

[Obejrzyj lub pobierz film](/v4/videos/simulation-tutorials/spice/rc-transient.mp4).

### Obwód i wyniki referencyjne
{: #circuit-and-reference-results}

![Obwód ładowania RC](/v4/images/simulation-tutorials/spice/rc-step-circuit.png)

![Obliczony przebieg ładowania kondensatora](/v4/images/simulation-tutorials/spice/rc-step-results.png)

## Dlaczego napięcie wyjściowe zmienia się płynnie, a nie skokowo
{: #why-the-output-curves-rather-than-jumps}

Prąd kondensatora wynosi `i = C × dv/dt`. Tuż po zmianie napięcia wejściowego kondensator nadal ma napięcie bliskie 0 V, więc niemal całe napięcie wejściowe odkłada się na R1. Początkowy prąd wynosi w przybliżeniu `1 V / 1 kΩ = 1 mA`. W miarę ładowania kondensatora napięcie na rezystorze i prąd maleją. Napięcie wyjściowe zbliża się do 1 V, zamiast osiągnąć tę wartość natychmiast.

Stała czasowa wynosi `τ = R × C = 1 ms`. Dla idealnego skoku napięcia i początkowo nienaładowanego kondensatora, po `VOUT(t) = 1 − exp(−t/τ)` napięcie wynosi wolta.

| Czas od skoku | Oczekiwane OUT |
| --- | --- |
| 1 ms = 1τ | 0.632 V |
| 2 ms = 2τ | 0.865 V |
| 3 ms = 3τ | 0.950 V |
| 5 ms = 5τ | 0.993 V |

Napięcie dostarczane przez źródło narasta w ciągu 1 µs, dlatego należy oczekiwać niewielkiej różnicy względem równania dla skoku natychmiastowego. Użyj kursora wykresu lub pomiaru **Wartość (Value)** po 1 ms. Pomiar **Stała czasowa (Time constant)** przy napięciach początkowym 0 V i końcowym 1 V powinien dać około 1 ms. Pomiar **Czas narastania (Rise time)** wykorzystuje przedział 10–90%: jego oczekiwana wartość to `ln(9) × τ ≈ 2.197 ms`, a nie 1 ms.

## Czas trwania i maksymalny krok odpowiadają na różne pytania
{: #duration-and-maximum-step-answer-different-questions}

Czas trwania określa, jak długo trwa eksperyment. Maksymalny krok ogranicza odstęp solvera między punktami czasowymi. W pobliżu zboczy lub zdarzeń nieliniowych solver może stosować mniejsze kroki. Dlatego liczba próbek nie musi być równa ilorazowi czasu trwania i maksymalnego kroku.

Przy zbyt krótkim czasie trwania nie widać ustalania się przebiegu. Przy zbyt dużym kroku czasowym zbocza i wartości szczytowe mogą być mierzone niedokładnie, nawet jeśli wykres wygląda wiarygodnie. Zmniejsz maksymalny krok z 5 µs do 2.5 µs i porównaj odczyt po 1 ms; stabilny wynik powinien zmienić się bardzo nieznacznie. To sprawdzenie zbieżności pomiaru, a nie tylko sprawdzenie, czy solver zgłasza powodzenie.

## Warunki początkowe i energia
{: #initial-conditions-and-energy}

Zazwyczaj SPICE rozwiązuje punkt pracy DC przed rozpoczęciem analizy stanów nieustalonych.
Zaznaczenie opcji **warunki początkowe (initial conditions)** żąda użycia alternatywnej ścieżki uruchamiania z warunkami początkowymi (`uic`). Używaj jej świadomie, задавая соответствующие начальные условия для конденсаторов и катушек; это не универсальное решение проблем сходимости.
В этом примере она не нужна, поскольку начальное значение входного сигнала равно нулю.

При напряжении 1 В конденсатор накапливает `E = ½CV² = 0.5 µJ`. Во время зарядки R1 рассеивает энергию, а источник обеспечивает как накопленную, так и рассеянную энергию. Мгновенная мощность и накопленная энергия — разные измеряемые величины: чтобы получить джоули, проинтегрируйте мощность за выбранный интервал.

Попробуйте установить 2.2 кΩ, предскажите постоянную времени 2.2 мс и увеличьте время анализа до 11 мс. Затем восстановите значение R1 и уменьшите C1 вдвое: постоянная времени должна уменьшиться вдвое. Эти изменения показывают, как спроектировать эксперимент, позволяющий отличить влияние компонента от артефакта построения графика.

## Скачать схемы из этого урока
{: #download-the-lesson-circuits}

Те же примеры уже доступны в разделе **Открыть пример (Open Example)**. Чтобы получить отдельную копию, скачайте рисунок `.dzn` и выберите в TinyCAD **Файл (File) → Открыть (Open)**. Сопутствующий файл `.cir` — это текст SPICE для просмотра или использования во внешнем совместимом симуляторе, а не рисунок TinyCAD. Для запуска XSPICE-схем с нуля требуется Desktop.

| Пример | Рисунок | Список соединений |
| --- | --- | --- |
| rc-step | [Рисунок TinyCAD](/v4/examples/simulation-tutorials/spice/rc-step.dzn) | [Текст SPICE](/v4/examples/simulation-tutorials/spice/rc-step.cir) |

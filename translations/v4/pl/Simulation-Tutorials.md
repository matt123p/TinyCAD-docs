---
layout: default
title: Simulation tutorials for TinyCAD
---
# Samouczki symulacji
{: #simulation-tutorials}

Zacznij od [Jak korzystać z tych samouczków i otwierać dołączone przykłady](/v4/Tutorial-Start-Here/),
a następnie przejdź do [SPICE: omówienie i pierwsza symulacja](/v4/SPICE-Tutorial-01/).
W przypadku logiki sterowanej zdarzeniami zacznij od osobnego [kursu XSPICE i układów cyfrowych](/v4/XSPICE-Tutorial-01/).

Wspólny rozdział wprowadzający obejmuje jedenaście rozdziałów SPICE i sześć rozdziałów XSPICE.
Kompletne kursy, rysunki gotowe do uruchomienia, obrazy i nagrania są dołączone do tego podręcznika. Wszystkie przykłady z samouczków są dołączone do TinyCAD; nie
trzeba pobierać samouczków. Wybierz **Otwórz przykład (Open Example)** na pasku tytułu przeglądarki albo **Plik → Otwórz przykład (File → Open Example)** w wersji desktopowej, wybierz
**Samouczek SPICE** lub **Samouczek XSPICE i układów cyfrowych**, wybierz przykład wymieniony
w rozdziale, a następnie wybierz **Otwórz rysunek (Open Drawing)**. Zostanie otwarta edytowalna kopia;
użyj polecenia **Zapisz jako (Save As)**, aby zachować swoje eksperymenty, i ponownie otwórz osadzony przykład,
aby zacząć od początku. Rysunki zawierają osadzone symbole, definicje modeli,
ustawienia analizy i zachowany przebieg referencyjny.

## SPICE
{: #spice}

1. [Omówienie i pierwsze uruchomienie](/v4/SPICE-Tutorial-01/)
2. [Napięcie, prąd i moc DC](/v4/SPICE-Tutorial-02/)
3. [Generatory sygnałów i wymuszenia](/v4/SPICE-Tutorial-03/)
4. [Analiza stanów nieustalonych i ładowanie obwodu RC](/v4/SPICE-Tutorial-04/)
5. [Charakterystyka częstotliwościowa i filtry](/v4/SPICE-Tutorial-05/)
6. [Diody, prostowanie i tętnienia](/v4/SPICE-Tutorial-06/)
7. [Odtworzenie AMP.DSN](/v4/SPICE-Tutorial-07/)
8. [Wzmocnienie i pasmo wzmacniacza](/v4/SPICE-Tutorial-08/)
9. [Wyjście wzmacniacza, obcinanie i moc](/v4/SPICE-Tutorial-09/)
10. [Przemiatanie, szum i badania konstrukcyjne](/v4/SPICE-Tutorial-10/)
11. [Jak TinyCAD realizuje SPICE: silniki, symbole i przepływ pracy](/v4/SPICE-Tutorial-11/)

## Instruktaże wideo
{: #video-walkthroughs}

Pięć krótkich filmów pokazuje kroki, w których najbardziej pomaga obserwacja elementów sterujących.
Filmy wykorzystują TinyCAD w przeglądarce z dołączonym ngspice. Odtwórz je w
wbudowanym odtwarzaczu lekcji albo użyj tych łączy w przeglądarce Markdown:

| Lekcja | Demonstracja |
| --- | --- |
| 1 | [Otwieranie, uruchamianie i modyfikowanie dzielnika](/v4/videos/simulation-tutorials/spice/first-run.mp4) |
| 3 | [Ustawienia źródła i podgląd przebiegu](/v4/videos/simulation-tutorials/spice/source-settings.mp4) |
| 4 | [Ładowanie obwodu RC, krok czasowy i stała czasowa](/v4/videos/simulation-tutorials/spice/rc-transient.mp4) |
| 5 | [Moduł AC, dB, faza i częstotliwość graniczna](/v4/videos/simulation-tutorials/spice/ac-response.mp4) |
| 6 | [Pomiar ustalonych tętnień prostownika](/v4/videos/simulation-tutorials/spice/rectifier-ripple.mp4) |

Filmy uzupełniają instrukcje i ilustracje. Równania, założenia i oczekiwane wartości
znajdziesz w tekście rozdziału. Menu wersji desktopowej różni się od menu przeglądarkowego; użyj tam Plik → Otwórz przykład.

## XSPICE i symulacja cyfrowa
{: #xspice-and-digital-simulation}

1. [Modele, mostki i pierwsze uruchomienie](/v4/XSPICE-Tutorial-01/)
2. [Bramki i tablice prawdy](/v4/XSPICE-Tutorial-02/)
3. [Opóźnienie propagacji i hazardy](/v4/XSPICE-Tutorial-03/)
4. [Przerzutniki, zegary i reset](/v4/XSPICE-Tutorial-04/)
5. [Liczniki i dzielone sygnały zegarowe](/v4/XSPICE-Tutorial-05/)
6. [Filtrowanie mieszanych sygnałów i stany nieznane](/v4/XSPICE-Tutorial-06/)

Przykłady XSPICE wymagają natywnego silnika TinyCAD Desktop. Zwykłe przykłady SPICE
korzystają z modeli analogowych, ale numeryczną kwalifikację tego pakietu
przeprowadzono za pomocą dołączonego natywnego ngspice 47. Pomyślne uruchomienie natywne nie oznacza,
że przetestowano każdą kombinację przeglądarki i wersji.

Ilustracje obwodów są generowane z ponownie otwartych rysunków TinyCAD. Ilustracje wyników
to wykresy rzeczywistych danych solvera, a nie odręcznie narysowane oczekiwane przebiegi. Podpisy
osobno wskazują zrzuty ekranu aplikacji. Niewielkie różnice liczbowe względem wydrukowanych wartości są normalne, gdy zmieni się model, temperatura, krok czasowy lub
wersja silnika.


## Dokumentacja
{: #manual-reference}

Informacje o aktualnych elementach sterujących, modelach, ustawieniach analizy, wykresach i rozwiązywaniu problemów znajdziesz w sekcjach [Symulacja](/v4/Simulation/) oraz [Dołączone przykłady](/v4/Bundled-Examples/). W wersji desktopowej użyj **Plik → Otwórz przykład** i **Widok → Pokaż objaśnienie (View → View Explanation)**.

## Pobieranie rysunków analogowych
{: #analogue-drawing-downloads}

Użyj przeglądarki dołączonych przykładów albo pobierz tutaj rysunek i otwórz go w TinyCAD. Listy węzłów są udostępniane osobno jako tekst.

| Przykład | Rysunek | Lista węzłów |
| --- | --- | --- |
| amp-ac | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/amp-ac.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/amp-ac.cir) |
| amp-bias | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/amp-bias.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/amp-bias.cir) |
| amp-clipping | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/amp-clipping.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/amp-clipping.cir) |
| amp-small-signal | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/amp-small-signal.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/amp-small-signal.cir) |
| controlled-source | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/controlled-source.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/controlled-source.cir) |
| dc-sweep | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/dc-sweep.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/dc-sweep.cir) |
| divider | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/divider.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/divider.cir) |
| rc-ac | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/rc-ac.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/rc-ac.cir) |
| rc-noise | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/rc-noise.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/rc-noise.cir) |
| rc-pz | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/rc-pz.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/rc-pz.cir) |
| rc-step | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/rc-step.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/rc-step.cir) |
| rc-tf | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/rc-tf.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/rc-tf.cir) |
| rectifier | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/rectifier.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/rectifier.cir) |
| source-current | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/source-current.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/source-current.cir) |
| source-dc | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/source-dc.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/source-dc.cir) |
| source-exponential | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/source-exponential.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/source-exponential.cir) |
| source-fm | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/source-fm.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/source-fm.cir) |
| source-pulse | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/source-pulse.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/source-pulse.cir) |
| source-pwl | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/source-pwl.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/source-pwl.cir) |
| source-sine | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/source-sine.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/source-sine.cir) |
| source-triangle | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/source-triangle.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/source-triangle.cir) |

## Pobieranie rysunków XSPICE
{: #xspice-drawing-downloads}

Użyj przeglądarki dołączonych przykładów albo pobierz tutaj rysunek i otwórz go w TinyCAD. Listy węzłów są udostępniane osobno jako tekst.

| Przykład | Rysunek | Lista węzłów |
| --- | --- | --- |
| logic-buffer | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |
| logic-counter | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-counter.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/xspice/logic-counter.cir) |
| logic-dff | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-dff.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/xspice/logic-dff.cir) |
| logic-filter | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-filter.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/xspice/logic-filter.cir) |
| logic-hazard | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-hazard.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/xspice/logic-hazard.cir) |
| logic-nand | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-nand.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/xspice/logic-nand.cir) |
| logic-unknown | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-unknown.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/xspice/logic-unknown.cir) |

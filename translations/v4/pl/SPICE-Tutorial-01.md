---
layout: default
title: "1. SPICE: overview and your first simulation"
---
# 1. SPICE: omówienie i pierwsza symulacja
{: #spice-overview-and-your-first-simulation}

[Jak korzystać z samouczków](/v4/Tutorial-Start-Here/) · [Spis treści kursu](/v4/Simulation-Tutorials/) · [Dalej: pomiary DC](/v4/SPICE-Tutorial-02/)

Przykłady z tego rozdziału są dołączone do TinyCAD. Wybierz **Open Example → SPICE tutorial**, zaznacz przykład o podanej nazwie, a następnie wybierz **Open Drawing**. Nie trzeba niczego pobierać.

SPICE oblicza zachowanie elektryczne obwodu opisanego przez połączone
komponenty i ich modele matematyczne. Może wyznaczyć punkt pracy DC, śledzić
napięcia i prądy w czasie lub obliczyć charakterystykę częstotliwościową małosygnałową.
Nie wyprowadza modelu elektrycznego z rysunku komponentu. Symbol rezystora
wymaga rezystancji i szablonu SPICE; tranzystor wymaga ponadto
parametrów opisujących jego zachowanie.

Ten kurs rozpoczyna się od obwodów, które można sprawdzić ręcznie. W dalszych
rozdziałach odtworzymy oryginalny `AMP.DSN` TinyCAD i zbadamy jego ograniczenia. Celem
jest nauczyć się zadawać precyzyjne pytanie, wybierać odpowiednią analizę i oceniać,
czy wynik ma sens.

Informacje o silniku, bibliotekach symboli i elementach sterujących zawiera przewodnik
[Jak TinyCAD implementuje SPICE](/v4/SPICE-Tutorial-11/). Wyjaśnia on różnicę
między ngspice a XSPICE i przedstawia krok po kroku tworzenie własnej symulacji.

## Otwórz i uruchom pierwszy obwód
{: #open-and-run-the-first-circuit}

Otwórz **divider**. Źródło 5 V zasila dwa rezystory 1 kΩ
połączone szeregowo. Etykieta `OUT` oznacza ich węzeł połączenia; `IN` oznacza zasilanie.


1. Wybierz **Open Example → SPICE tutorial**, zaznacz **divider**, a następnie wybierz **Open Drawing**.
2. Wybierz arkusz Simulation. Zapisana analiza to **Operating Point**.
3. Wybierz **Run**. Jeśli wykresy są ukryte, użyj **Simulation → Show charts**.
4. Sprawdź `in`, `out` i `v1#branch`. Punkt pracy zawiera jedną wartość
   dla każdego sygnału, dlatego odczyt liczbowy jest przydatniejszy niż wykres w funkcji czasu.
5. Zaznacz R2 na arkuszu Circuit, zmień **Value** z `1k` na `2k` i ponownie uruchom symulację.
   Przed dalszą pracą przywróć `1k` albo ponownie otwórz **divider** z menu **Open Example**.

Dołączone wyniki referencyjne pozwalają od razu obejrzeć rezultaty. Po
wprowadzeniu zmian uruchom symulację ponownie: zachowane wyniki opisują obwód w chwili akwizycji.
Zapis zachowuje konfigurację i wyniki; **Save without results** tworzy
mniejszy plik do udostępniania, zachowując obwód i ustawienia symulacji.

Wykresy punktu pracy zawierają tylko jeden punkt; do precyzyjnych odczytów używaj danych liczbowych.

## Film: otwieranie, uruchamianie i zmiana dzielnika
{: #video-open-run-and-change-a-divider}

Otwieranie osadzonego przykładu, sprawdzanie wartości DC, zmiana R2 i uruchamianie nowej akwizycji.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/first-run.mp4" poster="/v4/videos/simulation-tutorials/spice/first-run.jpg" caption="Otwieranie, uruchamianie i zmiana dzielnika." %}

[Obejrzyj film lub pobierz go](/v4/videos/simulation-tutorials/spice/first-run.mp4).

### Obwód i wyniki referencyjne
{: #circuit-and-reference-results}

![Obwód dzielnika napięcia wygenerowany z zapisanego rysunku](/v4/images/simulation-tutorials/spice/divider-circuit.png)

## Przewidź wynik
{: #predict-the-answer}

Prąd wynosi `I = 5 / (1000 + 1000) = 2.5 mA`. Na dolnym rezystorze występuje zatem
`VOUT = I × 1000 = 2.5 V`. Po zmianie R2 na 2 kΩ równanie dzielnika daje
`VOUT = 5 × 2000 / (1000 + 2000) = 3.333 V`.

![Obliczone wyniki punktu pracy](/v4/images/simulation-tutorials/spice/divider-results.png)

Prąd źródła wynosi −2.5 mA. Nie oznacza to błędu połączeń: SPICE definiuje prąd źródła
jako wpływający do jego dodatniego zacisku. Źródło oddające energię ma zgodnie z tą
konwencją prąd ujemny. W rozdziale 2 wykorzystamy ten znak do poprawnego obliczenia
mocy.

## Cztery podstawowe zasady
{: #four-foundations}

- **Masa to węzeł `0`.** Napięcia są różnicami potencjałów; solver potrzebuje punktu odniesienia.
  Przewód oznaczony etykietą `GND` nie zastępuje masy, jeśli nie jest rzeczywiście połączony
  z masą SPICE. Użyj narzędzia TinyCAD **Insert Ground**.
- **Połączenia są elektryczne.** Kropka w węźle łączy gałęzie. Krzyżujące się przewody
  bez połączenia nie muszą być ze sobą połączone. Identyczne etykiety sieci łączą
  odległe punkty; umieszczona w pobliżu notatka tekstowa tego nie robi.
- **Jednostki i przedrostki mają znaczenie.** Wartości SPICE zapisuj jako `1k`, `10u`, `100n` i `1Meg`.
  W SPICE `m` oznacza mili, a nie mega. Elementy sterujące źródłami w TinyCAD akceptują również
  zapis z jednostką, taki jak `1kHz` i `5ms`.
- **Zakres modeli jest ograniczony.** Idealny rezystor nie ma indukcyjności pasożytniczej ani
  nie ulega uszkodzeniu cieplnemu, chyba że te efekty zostały jawnie zamodelowane.

## Wybierz analizę odpowiadającą na pytanie
{: #choose-the-analysis-that-answers-the-question}

| Pytanie | Analiza |
| --- | --- |
| Jakie są ustalone napięcia i prądy DC? | Operating Point |
| Co dzieje się po skoku lub podczas przebiegu? | Transient |
| Jak wzmocnienie małosygnałowe zmienia się z częstotliwością? | AC |
| Jak zmienia się rozwiązanie DC wraz ze zmianą źródła? | DC sweep |
| Jaki szum dociera do wyjścia w danym paśmie częstotliwości? | Noise |
| Jakie są małosygnałowe wzmocnienie DC i rezystancje portów? | Transfer function |
| Gdzie znajdują się bieguny i zera zlinearyzowanego układu? | Pole-zero |

Zbieżność symulacji to dopiero początek weryfikacji. Sprawdź biegunowość,
jednostki, obciążenie i typ analizy, porównując wyniki z prostym oszacowaniem.

Dalsza lektura: [oficjalny samouczek ngspice dla początkujących](https://ngspice.sourceforge.io/ngspice-tutorial.html)
przedstawia uzupełniające wprowadzenie oparte na netliście.

## Pobierz obwody z lekcji
{: #download-the-lesson-circuits}

Te same przykłady są już dostępne w menu **Open Example**. Aby uzyskać niezależną kopię, pobierz rysunek `.dzn` i użyj w TinyCAD polecenia **File → Open**. Towarzyszący plik `.cir` zawiera tekst SPICE do wglądu lub użycia w zgodnym symulatorze zewnętrznym; nie jest rysunkiem TinyCAD. Do uruchamiania nowych symulacji obwodów XSPICE wymagany jest Desktop.

| Przykład | Rysunek | Netlista |
| --- | --- | --- |
| divider | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/divider.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/divider.cir) |

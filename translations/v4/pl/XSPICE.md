---
layout: default
---
# XSPICE i symulacja cyfrowa
{: #xspice-and-digital-simulation}

XSPICE rozszerza ngspice o modele kodowe i system symulacji sterowany zdarzeniami, koordynowany z solverem analogowym. Przydaje się do symulacji bramek, zegarów, układów pamięci i systemów mieszanych analogowo-cyfrowych. Zobacz oficjalny [przegląd XSPICE](https://ngspice.sourceforge.io/xspice.html), aby poznać architekturę projektu źródłowego.

**XSPICE jest obsługiwany w TinyCAD Desktop i nie jest obsługiwany w wersjach przeglądarkowych.** Natywny silnik Desktop zawiera dołączone biblioteki modeli kodowych.

*Wyświetlanie zapisanych wyników:* przeglądarka może nadal otworzyć rysunek zawierający wcześniejszy zapis wyników symulacji XSPICE. Pozwala to na ich sprawdzenie; do uruchomienia symulacji wymagany jest Desktop.

## Wybór odpowiedniego modelu logicznego
{: #choose-the-right-logic-model}

| Podejście | Zasada działania | Zastosowanie |
| --- | --- | --- |
| Dołączone **Bramki cyfrowe** i **Bloki funkcjonalne** | Przenośne analogowe behawioralne modele SPICE z skonfigurowanymi zasilaniami i progami | Analizy systemowe w przeglądarce i Desktop |
| Symbole/modele z samouczka XSPICE | Logika sterowana zdarzeniami, opóźnienia, układy pamięci i jawne mostki analogowo-cyfrowe | Natywna symulacja mieszana w Desktop |

Podobnie wyglądająca bramka może zatem mieć inny kontrakt modelowania. Nie zastępuj jednego modelu drugim wyłącznie ze względu na wygląd. Żadne z tych podejść nie sprawia, że obrazek płytki ESP32, Raspberry Pi lub Arduino wykonuje oprogramowanie układowe. Integracja TinyCAD nie jest uniwersalnym środowiskiem wykonywania kodu HDL ani oprogramowania wbudowanego.

## Węzły analogowe i cyfrowe
{: #analogue-and-digital-nodes}

Węzły analogowe przenoszą napięcia/prądy o wartościach ciągłych. Cyfrowe węzły zdarzeń przenoszą stany. **Mostek ADC** stosuje progi, aby przekształcić wejście analogowe w stany cyfrowe; **mostek DAC** przekształca stan cyfrowy z powrotem na analogowy poziom wyjściowy. Mostki te opisują konwersję między domenami symulatora, a niekoniecznie kompletny fizyczny układ ADC/DAC.

Sprawdź progi, poziomy zasilania i obciążenie wyjścia. Napięcie między prawidłowymi progami logicznymi może dać stan nieznany. Stan układu pamięci może pozostać nieznany do czasu ustalenia go przez warunki zegara/resetu. Nieznany stan jest przydatną informacją diagnostyczną; zastąpienie go założonym 0 może ukryć rzeczywisty problem z czasem lub inicjalizacją.

Opóźnienie propagacji sprawia, że czas ma znaczenie. Bramki o różnych opóźnieniach ścieżek mogą powodować hazard, nawet jeśli statyczna tabela prawdy wygląda poprawnie. Wybierz maksymalny krok analizy nieustalonej, który pozwoli odwzorować odpowiedź analogową i mierzone czasy. Nie wnioskuj o opóźnieniu zdarzenia wyłącznie na podstawie zbyt mało szczegółowego wykresu.

## Przejdź kurs dotyczący układów cyfrowych
{: #run-the-digital-course}

1. W Desktop wybierz **Plik → Otwórz przykład → Samouczek XSPICE i układów cyfrowych**.
2. Otwórz rysunek wskazany w lekcji. Dołączono symbole, deklaracje modeli kodowych i zachowane wyniki.
3. Przeczytaj objaśnienie, korzystając z **Widok → Wyświetl objaśnienie**, i wybierz jego arkusz Simulation.
4. Wybierz **Uruchom**, aby uzyskać nowy natywny wynik symulacji, a następnie porównaj stany i czasy z lekcją.
5. Zapisz kopię przed zmianą progów, opóźnień, czasu resetu lub zegara.

[Sześcioczęściowy samouczek XSPICE](../XSPICE-Tutorial/) obejmuje mostki i pierwsze uruchomienie, bramki i tabele prawdy, hazardy, przerzutniki, liczniki oraz filtrowanie mieszanych sygnałów. Zawiera schematy obwodów, wykresy solvera i materiały do pobrania.

## Dokumentacja źródłowa
{: #upstream-reference}

Skorzystaj z oficjalnej [dokumentacji i podręcznika ngspice](https://ngspice.sourceforge.io/docs.html), aby poznać składnię modeli kodowych i obsługiwane porty. [XSPICE HOWTO](https://ngspice.sourceforge.io/xspicehowto.html) omawia tworzenie modeli kodowych, a [korzystanie z XSPICE](https://ngspice.sourceforge.io/xspiceusage.html) zawiera dalsze przykłady i informacje wprowadzające. Zasoby te opisują ngspice jako całość. TinyCAD korzysta z dołączonych natywnych modułów; nie ładuje dowolnych modeli kodowych skompilowanych przez użytkownika z załącznika do rysunku.

---
layout: default
title: 1. XSPICE and digital simulation
---
# 1. XSPICE i symulacja cyfrowa
{: #xspice-and-digital-simulation}

[Jak korzystać z samouczków](/v4/Tutorial-Start-Here/) · [Zawartość kursu](/v4/Simulation-Tutorials/) · [Dalej: bramki](/v4/XSPICE-Tutorial-02/)

Przykłady z tego rozdziału są dołączone do TinyCAD. Wybierz **Otwórz przykład (Open Example) → XSPICE i samouczek symulacji cyfrowej**, zaznacz przykład o podanej nazwie, a następnie wybierz **Otwórz rysunek (Open Drawing)**. Nie trzeba nic pobierać.

XSPICE rozszerza ngspice o modele kodowe i system symulacji sterowany zdarzeniami.
Obwód analogowy jest rozwiązywany w postaci napięć i prądów; w cyfrowej sieci
sterowanej zdarzeniami zmiany stanów logicznych są propagowane przez modele
funkcjonalne. Symulacja mieszana koordynuje oba te podejścia. Dzięki temu funkcję
logiczną można symulować znacznie prościej niż jej implementację na poziomie
tranzystorów, ale nie uzyskuje się tych samych informacji o prądzie zasilania,
obciążeniu tranzystorów ani rzeczywistych parametrach czasowych.

W tym kursie używaj **TinyCAD Desktop**. Dołączony do niego natywny silnik
zawiera wymagane modele kodowe. Silnik TinyCAD działający w przeglądarce/WASM
nie obsługuje XSPICE. Dostarczone modele są osadzone w rysunkach, ale biblioteki
wykonywalnego kodu modeli pochodzą z instalacji natywnego silnika.

[Jak TinyCAD implementuje SPICE ](/v4/SPICE-Tutorial-11/) wyjaśnia, jak
silniki, definicje symboli i arkusz Simulation współpracują ze sobą.

## Pierwsze uruchomienie: bufor sterowany zdarzeniami
{: #first-run-an-event-driven-buffer}

Otwórz **logic-buffer**. Uruchom zapisaną symulację stanów nieustalonych o czasie
8 µs i wykreśl przebiegi A oraz Y. A to przebieg 0–5 V o okresie 1 µs. Y podąża
za nim z niewielkim opóźnieniem propagacji i skończonymi czasami narastania
oraz opadania zboczy.

![Obwód testowy bufora XSPICE](/v4/Images/simulation-tutorials/xspice/logic-buffer-circuit.png)
![Obliczone przebiegi wejściowy i wyjściowy bufora](/v4/Images/simulation-tutorials/xspice/logic-buffer-results.png)

X1 jest osadzonym podukładem z trzema jawnymi stopniami wewnętrznymi:

```text
Analogue A → adc_bridge → digital d_buffer → dac_bridge → analogue Y
```

Na rysunku celowo udostępniono zaciski analogowe: dzięki temu zwykły system
wykresów TinyCAD może przedstawiać wejście i wyjście w woltach. Wewnątrz X1
bufor jest rzeczywistym modelem XSPICE sterowanym zdarzeniami, a nie wyrażeniem
progu napięciowego udającym bramkę cyfrową. Otwórz właściwości SPICE układu X1,
aby sprawdzić jego stopnie.

## Znaczenie mostków
{: #what-the-bridges-mean}

Mostek ADC interpretuje napięcia wejściowe do 1 V jako stan niski, a napięcia
od 3 V jako stan wysoki. Przedział między tymi wartościami jest niezdefiniowany.
Jest to interfejs domeny logicznej, a nie wielobitowy, próbkowany przetwornik ADC
z zegarem, rozdzielczością i kodem kwantyzacji.

Mostek DAC odwzorowuje stan niski na 0 V, wysoki na 5 V, a niezdefiniowany na
2,5 V, aby można go było obserwować. Czasy przejść narastających i opadających
wynoszą 5 ns. Wyjście 2,5 V w tym kursie może zatem oznaczać nieznany stan
cyfrowy; nie musi być prawidłowym analogowym sygnałem o napięciu pośrednim.
Te progi i napięcia przyjęto na potrzeby samouczka; nie są specyfikacją żadnego
konkretnego układu TTL ani CMOS.

Idealny stopień wyjściowy mostka nie ma modelowanego zacisku zasilania. Nie
obliczaj na jego podstawie rzeczywistego poboru mocy układu logicznego. Do
badania poboru mocy użyj modelu z jawnym zasilaniem i odpowiednim zachowaniem
urządzenia.

## Przydatny podział poziomu szczegółowości modelowania
{: #a-useful-division-of-modelling-detail}

Używaj bramek sterowanych zdarzeniami do sprawdzania tabel prawdy, sekwencji
zegarowych i funkcjonalnych parametrów czasowych. Modele tranzystorowe lub
modele producenta stosuj do badania obciążenia elektrycznego i zachowania
urządzenia, jeśli uwzględniają wymagane zjawiska. Podczas przechodzenia między
domeną analogową i cyfrową stosuj jawne interfejsy. Podobieństwo symboli na
rysunku nie przesądza o rodzaju zawartego w nich modelu.

Na początek zmień okres sygnału wejściowego z 1 µs na 2 µs i uruchom symulację
ponownie. Częstotliwość powtarzania zmniejszy się o połowę; określone w modelu
opóźnienie propagacji powinno pozostać zasadniczo bez zmian. Okres i opóźnienie
propagacji to niezależne właściwości.

Materiały źródłowe: [Wprowadzenie do XSPICE](https://ngspice.sourceforge.io/xspice.html),
[oficjalne przykłady XSPICE i HOWTO](https://ngspice.sourceforge.io/xspicehowto.html).

## Pobierz obwody z lekcji
{: #download-the-lesson-circuits}

Te same przykłady są już dostępne w **Otwórz przykład (Open Example)**. Aby
uzyskać niezależną kopię, pobierz rysunek `.dzn` i użyj w TinyCAD
polecenia **Plik (File) → Otwórz (Open)**. Towarzyszący mu plik
`.cir` zawiera tekst SPICE do wglądu lub użycia w zgodnym
symulatorze zewnętrznym, a nie rysunek TinyCAD. Do uruchamiania nowych symulacji
obwodów XSPICE wymagany jest Desktop.

| Przykład | Rysunek | Lista połączeń |
| --- | --- | --- |
| logic-buffer | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |

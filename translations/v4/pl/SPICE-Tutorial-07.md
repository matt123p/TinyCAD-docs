---
layout: default
title: 7. Rebuilding AMP.DSN and checking its bias
---
# 7. Odtwarzanie AMP.DSN i sprawdzanie polaryzacji
{: #rebuilding-ampdsn-and-checking-its-bias}

[Poprzedni](/v4/SPICE-Tutorial-06/) · [Spis treści](/v4/Simulation-Tutorials/) · [Dalej](/v4/SPICE-Tutorial-08/)

Przykłady z tego rozdziału są dołączone do TinyCAD. Wybierz **Open Example (Otwórz przykład) → SPICE tutorial**, zaznacz przykład o podanej nazwie, a następnie wybierz **Open Drawing (Otwórz rysunek)**. Nie trzeba niczego pobierać.

Otwórz **amp-bias**. Odtwarza on topologię
`D:\Projects\TinyCAD\examples\AMP.DSN`, zatytułowaną **Transistor Amplifier**
i przypisaną w oryginale Mattowi Pyne'owi (1995). Wykorzystuje elementy z biblioteki TinyCAD SPICE essentials oraz konfigurowalne źródła symulacyjne.

![Odtworzony AMP.DSN z elementami symulacyjnymi](/v4/images/simulation-tutorials/spice/amp-bias-circuit.png)

## Co zachowano, a co zamodelowano
{: #what-was-preserved-and-what-was-modelled}

| Oryginalny element | Odtworzony element i jego rola |
| --- | --- |
| R1, adnotacja 470 Ω, 0.5 W | Rezystor emiterowy Q2 o wartości 470 Ω; jego moc znamionowa nie jest symulowanym limitem termicznym |
| R2, 1 kΩ | Rezystor kolektorowy Q1 |
| R3, 100 kΩ; R4, 10 kΩ | Dzielnik polaryzacji bazy Q1 |
| R5, 220 Ω | Rezystor degeneracji emitera Q1 |
| R6, potencjometr logarytmiczny 10 kΩ | Potencjometr 10 kΩ, elektryczny podział `Wiper = 0.5` |
| C1, 100 µF; C2, 470 µF | Idealne kondensatory sprzęgające na wejściu i wyjściu |
| Q1, ZTX650; Q2, BC140 | Oba korzystają z osadzonego, ogólnego modelu `TC_NPN` |
| Wejście gramofonowe J1 | Konfigurowalne źródło VIN, odniesione do węzła 0 |
| T1, głośnik 8 Ω | RL = 8 Ω, rezystancyjne obciążenie elektryczne |
| Szyny 12 V / 0 V | Niezależne źródło 12 V VCC i węzeł SPICE 0 |

Oryginalna logarytmiczna charakterystyka mechaniczna nie określa jednoznacznego
podziału rezystancji dla każdej pozycji wałka. Tutaj 0.5 oznacza **elektryczny**
podział 5 kΩ/5 kΩ, a nie twierdzenie o położeniu środkowym oryginalnego pokrętła.
Rezystancja źródła VIN jest idealna. Model głośnika pomija indukcyjność, rezonans
i sprawność akustyczną; nie można na jego podstawie przewidzieć ciśnienia
akustycznego.

Oba tranzystory mają osadzony model z biblioteki:

```spice
.model TC_NPN NPN(Is=1e-14 Bf=200 Vaf=100 Cje=10p Cjc=5p Tf=500p)
```

Są to przykładowe parametry modelu, a nie modele producenta dla ZTX650 lub
BC140. Zastosowano je celowo, a ich użycie jest widoczne we właściwościach
SPICE elementu. Dokładne odwzorowanie parametrów tych oryginalnych elementów
wymagałoby zweryfikowanych modeli oraz, przy porównaniu ze sprzętem, informacji
o pasożytach i zjawiskach termicznych.

## Poznaj dwa stopnie
{: #understand-the-two-stages}

Q1 pracuje we wspólnym układzie emiterowym. Gdy prąd kolektora rośnie, napięcie
kolektora maleje, więc stopień odwraca fazę. R5 zapewnia degenerację emiterową:
ujemne sprzężenie zwrotne zmniejsza wrażliwość wzmocnienia i poprawia liniowość.
R2 przekształca zmiany prądu w zmiany napięcia kolektora.

Q2 jest wtórnikiem emiterowym. Jego kolektor jest połączony z VCC, a emiter
steruje R1 i, przez C2, obciążeniem głośnika. Stopień zapewnia wydajność prądową,
a nie kolejne duże wzmocnienie napięciowe. C1 i C2 oddzielają poziomy stałoprądowe
między stopniami i połączeniami zewnętrznymi.

## Uruchom analizę punktu pracy przed podaniem sygnału
{: #run-operating-point-before-applying-a-signal}

Wartości odniesienia przy 27°C:

| Wielkość | Wartość odniesienia |
| --- | --- |
| BASE, baza Q1 | 1.0235 V |
| Emiter Q1, między Q1 a R5 | 0.3582 V |
| COLLECTOR, kolektor Q1 / baza Q2 | 10.2800 V |
| EMITTER, emiter Q2 | 9.5476 V |
| OUT, za C2 | 0 V |
| Prąd dostarczany przez VCC | 22.044 mA |
| Moc zasilania | 264.533 mW |

OUT ma napięcie 0 V w stanie stałym, ponieważ C2 blokuje napięcie stałe
emitera, a RL zwiera wyjście do masy. Zerowe napięcie wyjściowe w punkcie pracy
nie oznacza więc, że wzmacniacz nie jest zasilany. Prąd emitera Q1 wynosi w przybliżeniu
`0.3582 / 220 = 1.628 mA`;
spoczynkowy prąd rezystora emiterowego Q2 wynosi `9.5476 / 470 = 20.31 mA`.

Polaryzacja stopnia wyjściowego jest wysoka względem szyny 12 V, a prąd
spoczynkowy jest niewielki dla 8 Ω. Już to sugeruje niesymetryczne ograniczenia
wychylenia sygnału. Dwa następne rozdziały sprawdzają to przewidywanie, zamiast
zakładać, że układ nazwany wzmacniaczem musi mieć duże wzmocnienie napięciowe
lub dostarczać dużą moc audio.

## Pobierz układy z lekcji
{: #download-the-lesson-circuits}

Te same przykłady są już dostępne w **Open Example (Otwórz przykład)**. Aby uzyskać
niezależną kopię, pobierz rysunek `.dzn` i użyj w TinyCAD polecenia **File → Open (Plik → Otwórz)**. Plik towarzyszący `.cir` zawiera tekst SPICE do wglądu lub dla zgodnego zewnętrznego symulatora; nie jest rysunkiem TinyCAD. Do uruchamiania nowych symulacji układów XSPICE wymagana jest wersja Desktop.

| Przykład | Rysunek | Lista węzłów |
| --- | --- | --- |
| amp-bias | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/amp-bias.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/amp-bias.cir) |

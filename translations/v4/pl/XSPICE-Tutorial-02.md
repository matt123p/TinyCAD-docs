---
layout: default
title: 2. Gates and truth tables
---
# 2. Bramki i tabele prawdy
{: #gates-and-truth-tables}

[Poprzedni](/v4/XSPICE-Tutorial-01/) · [Spis treści](/v4/Simulation-Tutorials/) · [Następny](/v4/XSPICE-Tutorial-03/)

Przykłady z tego rozdziału są dołączone do TinyCAD. Wybierz **Open Example (Otwórz przykład) → XSPICE and digital tutorial**, wybierz przykład o podanej nazwie, a następnie wybierz **Open Drawing (Otwórz rysunek)**. Nie trzeba niczego pobierać.

Otwórz **logic-nand**. X1 zawiera mostki ADC,
dwuwejściową bramkę NAND XSPICE oraz wyjściowy mostek DAC. Niezależne źródła impulsów pobudzają
wejścia A i B z różną częstotliwością. Uruchom analizę stanów nieustalonych o czasie 8 µs i wyświetl A, B oraz Y.

![Układ testowy NAND](/v4/Images/simulation-tutorials/xspice/logic-nand-circuit.png)
![Obliczone przebiegi NAND](/v4/Images/simulation-tutorials/xspice/logic-nand-results.png)

Funkcja boolowska to `Y = NOT(A AND B)`:

| A | B | Ustalone Y |
| --- | --- | --- |
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

Na wykresie przedstawiającym sygnał analogowy zero oznacza w przybliżeniu 0 V, a jedynka
— w przybliżeniu 5 V. Wyjście przyjmuje stan niski tylko wtedy, gdy oba wejścia są
w stanie wysokim. Obserwuj środek każdego stabilnego przedziału, a nie dokładną chwilę, gdy
wejście przekracza próg. Bramkę charakteryzuje opóźnienie propagacji 20 ns dla zboczy narastających i opadających; mostki i ich skończone czasy narastania oraz opadania wprowadzają dodatkowe opóźnienia.

## Przeprowadź celowy eksperyment z tabelą prawdy
{: #run-a-deliberate-truth-table-experiment}

Użyj kursorów wykresu, aby wskazać stabilny przedział dla każdego wiersza. Zapisz wartości A, B i Y,
gdy wyjście się ustali. Jeśli bardzo krótka kombinacja wejść występuje tylko
podczas zmiany dwóch wejść, nie traktuj tego przejścia jako potwierdzenia ustalonego
wiersza tabeli prawdy. Aby wykonać jednoznaczną kontrolę ręczną, ustaw oba źródła na napięcie stałe
0 V lub 5 V, ponownie uruchom analizę stanów nieustalonych i sprawdź każdą z czterech kombinacji osobno.

Wbudowanym w X1 modelu SPICE podstawowe instrukcje to:

```spice
Ag [da db] dy ng
.model ng d_nand(rise_delay=20n fall_delay=20n)
```

Nawiasy kwadratowe grupują wektor portów wejściowych. `da`, `db` i `dy` to
wewnętrzne węzły sterowane zdarzeniami. Nie są to zwykłe sieci elektryczne, do których można
bezpośrednio podłączyć rezystor. Mostki łączą te węzły wewnętrzne
z analogowymi zaciskami widocznymi na rysunku.

Aby poeksperymentować z inną funkcją, utwórz kopię rysunku i zmień
typ modelu w preambule SPICE elementu X1 na zgodną bramkę, taką jak `d_and`.
Zachowaj zgodność interfejsu portów wektorowych i skalarnych. Po ustaleniu się stanów tabela prawdy AND powinna
być odwrotnością wyniku dla NAND.

## Czego ten przykład nie potwierdza
{: #what-this-example-does-not-establish}

Model nie odwzorowuje konkretnego układu scalonego w obudowie, jego diod ESD, ograniczeń obciążalności,
impulsów prądu zasilania ani zależności czasu propagacji od obciążenia podawanych przez producenta. Opóźnienie 20 ns jest
parametrem wejściowym tego eksperymentu. Prawidłowa tabela prawdy potwierdza działanie logiki
dla sprawdzonych stanów, ale nie dowodzi zgodności elektrycznej z innym układem.

Gdy coś działa nieprawidłowo, najpierw sprawdź zapisane poziomy źródeł, następnie progi mostków,
a potem model bramki i kolejność portów. Napięcie 2 V utrzymywane na wejściu jest niezdefiniowane
przy tych ustawieniach mostków i nie można mu przypisać żadnej wartości boolowskiej tylko dlatego,
że jest bliżej jednego z poziomów zasilania.

Definicje modeli i konwencje portów opisano w rozdziale o modelach kodowych XSPICE
podręcznika [ngspice](https://ngspice.sourceforge.io/docs.html).

## Pobierz przykładowe układy
{: #download-the-lesson-circuits}

Te same przykłady są już dostępne w menu **Open Example (Otwórz przykład)**. Aby uzyskać niezależną kopię, pobierz rysunek `.dzn` i użyj w TinyCAD polecenia **File → Open (Plik → Otwórz)**. Towarzyszący mu plik `.cir` zawiera tekst SPICE do wglądu lub użycia w zgodnym zewnętrznym symulatorze; nie jest rysunkiem TinyCAD. Do uruchamiania układów XSPICE od podstaw wymagana jest wersja Desktop.

| Przykład | Rysunek | Lista połączeń |
| --- | --- | --- |
| logic-nand | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/xspice/logic-nand.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/xspice/logic-nand.cir) |

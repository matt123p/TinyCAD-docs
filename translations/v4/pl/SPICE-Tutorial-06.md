---
layout: default
title: 6. Diodes, rectification and ripple
---
# 6. Diody, prostowanie i tętnienia
{: #diodes-rectification-and-ripple}

[Poprzedni](/v4/SPICE-Tutorial-05/) · [Spis treści](/v4/Simulation-Tutorials/) · [Następny](/v4/SPICE-Tutorial-07/)

Przykłady z tego rozdziału są dołączone do TinyCAD. Wybierz **Otwórz przykład (Open Example) → Samouczek SPICE (SPICE tutorial)**, zaznacz przykład o podanej nazwie, a następnie wybierz **Otwórz rysunek (Open Drawing)**. Nie trzeba niczego pobierać.

Otwórz **rectifier**. Sinusoida o amplitudzie 5 V i częstotliwości 50 Hz zasila
diodę, kondensator zbiornikowy 100 µF i obciążenie 1 kΩ. Uruchom zapisany
przebieg przejściowy o czasie trwania 200 ms i wykreśl IN oraz OUT.


## Prześledź prąd w jednym okresie
{: #follow-the-current-through-a-cycle}

Gdy napięcie wejściowe wzrośnie dostatecznie powyżej napięcia kondensatora, dioda
przewodzi i uzupełnia ładunek kondensatora. Po szczycie napięcia wejściowego dioda
przestaje przewodzić. Kondensator zasila wtedy obciążenie, a jego napięcie spada
do następnego przedziału ładowania. Ujemne połówki okresu napięcia wejściowego nie
powodują ujemnego napięcia kondensatora, ponieważ przy tych napięciach dioda blokuje
przepływ prądu w kierunku zaporowym.

Dioda nie jest idealnym przełącznikiem ze stałym spadkiem napięcia 0,7 V. Jej wbudowany model `TC_D`
uwzględnia nieliniową zależność prądu od napięcia oraz rezystancję szeregową. Spadek
napięcia w kierunku przewodzenia zmienia się wraz z prądem, temperaturą i parametrami
modelu. W samouczku użyto modelu ogólnego, który nie stanowi gwarancji parametrów
zakupionej diody.

## Pomiar w stanie ustalonym
{: #measure-a-settled-window}

Pierwsze okresy obejmują stan rozruchowy. Aby uzyskać powtarzalny pomiar tętnień,
użyj ustawień **Od = 160 ms** i **Do = 200 ms**. Symulacja referencyjna daje:

| Pomiar na OUT | Wynik przybliżony |
| --- | --- |
| Napięcie średnie | 3.90 V |
| Minimum | 3.56 V |
| Maksimum | 4.24 V |
| Tętnienia międzyszczytowe | 0.684 V |
| Wartość skuteczna całkowita | 3.908 V |

Wartość średnia to poziom DC. Całkowita wartość skuteczna obejmuje ten poziom oraz
tętnienia. **Wartość skuteczna tętnień** oblicza się po odjęciu wartości średniej;
jest to zatem inna wielkość. Duża całkowita wartość skuteczna nie oznacza dużych
tętnień składowej AC.

Przybliżenie `ΔV ≈ Iload / (f × C)` daje około 0.78 V dla prądu 3.9 mA,
częstotliwości 50 Hz i pojemności 100 µF. Rozbieżność względem symulowanych 0.684 V
jest pouczająca: przybliżenie zakłada niemal stały prąd obciążenia i natychmiastowe
ładowanie, podczas gdy prąd rezystora się zmienia, a dioda przewodzi przez skończony
przedział czasu.

## Wideo: pomiar ustalonych tętnień prostownika
{: #video-measuring-settled-rectifier-ripple}

Ustawianie przedziału pomiarowego 160–200 ms i porównywanie napięcia średniego z tętnieniami międzyszczytowymi.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/rectifier-ripple.mp4" poster="/v4/videos/simulation-tutorials/spice/rectifier-ripple.jpg" caption="Pomiar ustalonych tętnień prostownika." %}

[Obejrzyj lub pobierz wideo](/v4/videos/simulation-tutorials/spice/rectifier-ripple.mp4).

### Układ i wyniki referencyjne
{: #circuit-and-reference-results}

![Prostownik jednopołówkowy i kondensator zbiornikowy](/v4/Images/simulation-tutorials/spice/rectifier-circuit.png)

![Obliczony przebieg rozruchowy i tętnienia w stanie ustalonym](/v4/Images/simulation-tutorials/spice/rectifier-results.png)

## Eksperymenty pokazujące kompromisy
{: #experiments-that-reveal-the-trade-offs}

Zwiększ C1 do 200 µF. Tętnienia powinny się zmniejszyć, ale ładowanie będzie
zachodzić krótszymi, bardziej skoncentrowanymi impulsami. Zmniejsz rezystancję
obciążenia o połowę, do 500 Ω: obciążenie pobiera więcej prądu, napięcie średnie
spada, a tętnienia rosną. Aby sprawdzić prąd diody, zażądaj obsługiwanego pomiaru
prądu komponentu lub wstaw szeregowo w tor diody sondę prądową. Zmniejsz maksymalny
krok czasowy, aby sprawdzić, czy krótkie impulsy przewodzenia są rozróżniane.

Źródło w tym przykładzie jest idealne. Praktyczny transformator, generator lub
zasilacz ma impedancję, która wpływa na prąd ładowania i spadek napięcia. Dodaj
rezystor szeregowy, aby zbadać ten efekt. Moc komponentów i prąd szczytowy to
przydatne wyniki symulacji, ale ten prosty model nie przewiduje automatycznie
nagrzewania kondensatora, dopuszczalnych prądów udarowych ani temperatury złącza
diody.

## Dlaczego analiza AC nie jest właściwym pierwszym testem
{: #why-ac-analysis-is-not-the-right-first-test}

Główne zjawisko to duża nieliniowa zmiana, podczas której przewodzenie włącza się
i wyłącza. Analiza małosygnałowa AC w pobliżu jednego punktu pracy nie odtworzy
prostowania, rozruchu ani tętnień. Do takich zagadnień używaj analizy przejściowej.
Z kolei przemiatanie DC przydaje się do wykreślania statycznej charakterystyki
prądowo-napięciowej diody. Wybieraj analizę odpowiednią do badanego zjawiska
fizycznego, a nie tę, dla której najłatwiej uzyskać wykres.

## Pobierz układy z lekcji
{: #download-the-lesson-circuits}

Te same przykłady są już dostępne w menu **Otwórz przykład (Open Example)**. Aby
uzyskać niezależną kopię, pobierz rysunek `.dzn` i wybierz w TinyCAD
**Plik (File) → Otwórz (Open)**. Towarzyszący mu plik `.cir` to tekst
SPICE do wglądu lub użycia w zgodnym z nim zewnętrznym symulatorze, a nie rysunek
TinyCAD. Do uruchamiania nowych symulacji układów XSPICE wymagany jest Desktop.

| Przykład | Rysunek | Lista węzłów |
| --- | --- | --- |
| rectifier | [Rysunek TinyCAD](/v4/examples/simulation-tutorials/spice/rectifier.dzn) | [Tekst SPICE](/v4/examples/simulation-tutorials/spice/rectifier.cir) |

---
layout: default
title: "Start here: how to use these tutorials"
---
# Zacznij tutaj: jak korzystać z tych samouczków
{: #start-here-how-to-use-these-tutorials}

[Spis treści](/v4/Simulation-Tutorials/) · [Dalej: pierwsza symulacja SPICE](/v4/SPICE-Tutorial-01/)

Te samouczki łączą objaśnienia z układami, które można uruchamiać i modyfikować
w TinyCAD. **Przykłady są już dołączone do TinyCAD.** Nie trzeba pobierać
archiwum ZIP z samouczkiem, szukać rysunku na dysku ani instalować osobnego
programu SPICE, aby skorzystać z lekcji.

Jeśli symulacja jest dla Ciebie nowością, zacznij od kursu SPICE. Zaczyna się od
napięcia, prądu i prostych układów, a następnie przechodzi do przebiegów,
filtrów, wzmacniaczy i badań projektowych. Osobny kurs XSPICE obejmuje logikę
sterowaną zdarzeniami i symulację mieszaną. Do tego kursu używaj **TinyCAD
Desktop**; silnik przeglądarkowy nie obsługuje XSPICE.

## Znajdowanie i otwieranie dołączonych przykładów
{: #find-and-open-the-bundled-examples}

1. Otwórz TinyCAD i poszukaj polecenia **Open Example** po prawej stronie paska tytułu przeglądarki albo **File → Open Example** w wersji Desktop. Ma ikonę
   otwartego folderu. Otworzy się przeglądarka przykładów.
2. Wybierz **SPICE tutorial** w przypadku lekcji analogowych albo **XSPICE and digital
   tutorial** w przypadku lekcji cyfrowych. Grupy są również widoczne w obszarze
   nawigacji przeglądarki.
3. Na liście **Drawings** grupy wybierz przykład wymieniony w lekcji.
   Na początek wybierz **divider** w grupie **SPICE tutorial**.
4. Przeczytaj opis i sprawdź podgląd układu. Wybranie przykładu wyświetla jego
   szczegóły; nie zastępuje jeszcze bieżącego rysunku.
5. Wybierz **Open drawing** u dołu przeglądarki. TinyCAD otworzy edytowalną
   kopię przykładu. Jeśli masz niezapisane zmiany, odpowiedz na monit o zapis
   przed kontynuowaniem.

Skrócona instrukcja **Open Example → SPICE tutorial → divider → Open drawing**
oznacza wykonanie tych samych czynności. Nazwa taka jak **divider**, **rc-ac** lub
**logic-counter** to nazwa przykładu w tej przeglądarce, a nie nazwa pliku, który
trzeba znaleźć.

Użyj pola **Search groups and examples**, aby znaleźć przykład o określonej nazwie.
Jeśli filtr ukrywa potrzebny element, wyczyść wyszukiwanie i użyj opcji
**All groups**, aby wrócić do listy grup. Przycisk **Open drawing** staje się
dostępny po wybraniu przykładu.
Pozycja **Start here — using the tutorials** również wyświetla ten przewodnik i
otwiera ten sam pierwszy układ dzielnika.

Obejrzyj [otwieranie, uruchamianie i modyfikowanie dzielnika](/v4/videos/simulation-tutorials/spice/first-run.mp4), aby
zobaczyć z napisami opis tych czynności i dwa pierwsze pomiary.

## Korzystanie z lekcji równolegle z układem
{: #follow-a-lesson-alongside-its-circuit}

Miej rozdział otwarty w podręczniku lub przeglądarce Markdown podczas pracy w
TinyCAD. Przeglądarka przykładów wyświetla również powiązany opis lekcji.
Każdy rozdział zaczyna się od wymienienia używanych w nim przykładów. Niektóre
rozdziały korzystają z kilku przykładów: na przykład rozdział o generatorach
sygnałów udostępnia osobne przykłady źródeł, aby można było badać po jednym
przebiegu naraz.

W każdym doświadczeniu postępuj według tej procedury:

1. **Przeczytaj pytanie.** Określ, co badasz: napięcie stałe,
   czas ładowania, częstotliwość odcięcia, stan logiczny czy inną wielkość.
2. **Obejrzyj układ.** Znajdź źródło, masę, wartości elementów i nazwane
   sygnały. Etykiety takie jak IN i OUT wskazują węzły elektryczne; oznaczenia
   takie jak R1 i C1 identyfikują elementy.
3. **Sprawdź zapisane ustawienia.** Wybierz arkusz **Simulation** i sprawdź
   **Setup**. Przykłady zawierają już ustawienia analizy i modele
   potrzebne do wykonania lekcji.
4. **Przewidź wynik**, korzystając z objaśnienia lub równania w rozdziale.
5. **Wybierz Run**, a następnie porównaj nowy pomiar z oczekiwanymi wartościami
   i wykresami. Sprawdź zarówno wartości liczbowe, jak i kształt przebiegu.
6. **Zmień jedną rzecz** zgodnie z sugestią lekcji, przewidź skutek i uruchom
   symulację ponownie. Zapisz, które ustawienie zmieniono i jaki był wynik.

Po otwarciu przykładu wybierz **Explanation** na pasku tytułu przeglądarki albo **View → View Explanation** w wersji Desktop, aby wyświetlić instrukcje obok rysunku. Panel objaśnień znajduje się obok wykresów symulacji i można niezależnie zmienić jego rozmiar lub go zamknąć. Wybierz ponownie
**Explanation** na pasku tytułu przeglądarki albo **View → View Explanation** w wersji Desktop, aby ponownie otworzyć panel.

Ikona w kształcie impulsu na pasku narzędzi ma etykietę po najechaniu **Simulation**. Gdy lekcja poleca **Simulation → Show charts** lub **Simulation → SPICE components**, otwórz menu tej ikony. **Arkusz Simulation** jest osobną kartą w obrębie rysunku;
zawiera konfigurację doświadczenia i widoki wyników.

![Zrzut ekranu TinyCAD z pierwszym układem dzielnika i panelem wykresów symulacji](/v4/Images/simulation-tutorials/spice/tinycad-first-run.png)

Ten zrzut ekranu aplikacji przedstawia otwarty dzielnik, karty arkuszy poniżej
układu i panel wykresów po prawej stronie. Najważniejsze punkty wyjścia to
układ, arkusz Simulation i **Run**.

## Interpretacja oczekiwanych wyników
{: #understand-the-expected-outputs}

Obrazy układów pokazują rozmieszczenie elementów i połączenia, których należy
szukać. Wykresy wyników przedstawiają dane referencyjne obliczone przez solver.
Zrzuty ekranu aplikacji pokazują, gdzie pracować w TinyCAD. Rozmiar okna,
powiększenie i kolory wykresów mogą być inne; porównuj wartości elementów
układu, sygnały, jednostki i ustawienia analizy.

W niezmienionym przykładzie **divider** źródło ma napięcie 5 V, a oba rezystory
mają rezystancję 1 kΩ. Po uruchomieniu analizy punktu pracy oczekuj IN = **5 V**,
OUT = **2.5 V** oraz prądu źródła `v1#branch` = **−2.5 mA**. Punkt pracy zawiera jedną wartość dla
każdego sygnału, więc nie tworzy przebiegu zmiennego w czasie. Pierwsza lekcja
wyjaśnia znak prądu i obliczenia dla dzielnika napięcia.

Rysunki zawierają zachowane pomiary referencyjne, więc wyniki mogą być widoczne
jeszcze przed naciśnięciem **Run**. Są to wyniki zapisane z wcześniejszego
uruchomienia. Po edycji układu lub jego ustawień uruchom symulację ponownie i
sprawdź nowy pomiar. Niewielkie różnice liczbowe są normalne; duża różnica
wymaga sprawdzenia wartości elementów, założeń dotyczących modeli, jednostek i
okien pomiarowych.

## Zachowywanie doświadczeń i przywracanie oryginału
{: #keep-experiments-and-return-to-the-original}

Dołączone przykłady otwierają się jako edytowalne kopie. Użyj polecenia **Save As**,
aby zapisać swoją pracę pod znaczącą nazwą, na przykład jako dzielnik z inną
rezystancją dolnego rezystora. Zapisanie kopii nie zmienia dołączonego oryginału.

Aby zresetować doświadczenie, otwórz ponownie wskazany przykład za pomocą
**Open Example**. Po wyświetleniu monitu zapisz zmiany, które chcesz zachować.
Spowoduje to przywrócenie oryginalnego układu, ustawień i zachowanych wyników
referencyjnych. Zastosuj tę samą procedurę, gdy rozdział przechodzi do innego
przykładu.

Zwykłe zapisywanie może zachować uzyskane wyniki razem z rysunkiem. Polecenie
**Save without results** zachowuje układ i ustawienia, ale pomija zapisane wyniki;
uruchom symulację ponownie, gdy będą potrzebne.

## Wybór ścieżki nauki
{: #choose-your-route-through-the-material}

| Cel | Od czego zacząć |
| --- | --- |
| Poznać symulację od podstaw | [Rozdział 1 kursu SPICE](/v4/SPICE-Tutorial-01/), a następnie przechodzić kolejno przez rozdziały |
| Poznać silniki, symbole i elementy sterujące TinyCAD | [Jak TinyCAD implementuje SPICE](/v4/SPICE-Tutorial-11/) |
| Wybrać przebieg wejściowy | [Generatory sygnałów](/v4/SPICE-Tutorial-03/) |
| Zbadać przebudowany wzmacniacz AMP.DSN | [Polaryzacja wzmacniacza](/v4/SPICE-Tutorial-07/), a następnie wzmocnienie i moc |
| Poznać cyfrową symulację sterowaną zdarzeniami | [Rozdział 1 kursu XSPICE](/v4/XSPICE-Tutorial-01/), używając wersji Desktop |

Łącza u góry każdego rozdziału prowadzą z powrotem do spisu treści lub do
następnej lekcji. W dowolnym momencie możesz wrócić do wcześniejszego przykładu.
Jeśli doświadczenie się nie powiedzie, przeczytaj widok **Diagnostics** i
porównaj go ze świeżo otwartym dołączonym przykładem, zanim wprowadzisz dalsze
zmiany.

## Bieżące elementy sterujące Circuit Explorer
{: #current-circuit-explorer-controls}

Wybierz arkusz Simulation, otwórz **Setup** i przewiń do sekcji **Circuit Explorer**. Użyj polecenia **Add tools**, aby dodać Measurements, Tune / sweep, Requirements, DC overlay lub Analysis lab. Skonfigurowane narzędzia pojawią się po lewej stronie; panel wykresów pozostaje osobnym widokiem. Polecenia **Run** i **Stop** znajdują się na głównym pasku narzędzi, gdy wybrany jest arkusz Simulation. Aktualne informacje znajdziesz w sekcji [Wykresy, pomiary i Circuit Explorer](/v4/Simulation-Charts-and-Measurements/).

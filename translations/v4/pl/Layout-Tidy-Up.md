---
layout: default
---
# Porządkowanie układu
{: #layout-tidy-up}

**Porządkowanie układu (Auto-layout)** porządkuje istniejący schemat, dostosowując położenie komponentów, przewodów i etykiet. Użyj tej funkcji, aby ułatwić odczytanie zatłoczonego obwodu, ograniczyć zbędne załamania lub poprawić odstępy między oznaczeniami i wartościami.

Funkcja działa na **bieżącym arkuszu schematu**, zarówno w przeglądarce, jak i w aplikacji Desktop. Zachowuje istniejące połączenia elektryczne; nie odgaduje, jakie połączenia zamierzano narysować, ani nie tworzy obwodu od podstaw.

## Otwieranie funkcji Porządkowanie układu
{: #open-auto-layout}

W obu produktach wybierz na pasku narzędzi polecenie **Porządkowanie układu (Auto-layout)**, bezpośrednio obok polecenia **Symulacja (Simulation)**. W wersji Desktop możesz też wybrać **Narzędzia → Porządkowanie układu (Tools → Auto-layout)**.

Najpierw wybierz arkusz schematu. To narzędzie jest niedostępne podczas edycji biblioteki lub wyświetlania arkusza symulacji.

## Wybór zakresu porządkowania
{: #choose-what-to-tidy}

Ustawienie **Zastosuj do (Apply to)** w oknie dialogowym oferuje następujące opcje:

- **Cały arkusz (Whole sheet)** — uporządkuj obsługiwane elementy obwodu na bieżącym arkuszu.
- **Wybrane elementy (Selected Items)** — uporządkuj tylko wybrane elementy obwodu, pozostawiając elementy poza zaznaczeniem nieruchome i zachowując połączenia na jego granicy.

Aby pracować na niewielkim obszarze, przed otwarciem okna dialogowego zaznacz razem jego komponenty oraz przewody i etykiety, które chcesz dostosować. Opcja Wybrane elementy jest domyślna, gdy zaznaczenie zawiera obsługiwany element obwodu. Jest nieaktywna, jeśli zaznaczenie zawiera wyłącznie nieobsługiwane obiekty, takie jak pola notatek lub kształty rysunkowe, albo jeśli nic nie jest zaznaczone.

Zaznaczenie może obejmować symbole, przewody, etykiety sieci, symbole zasilania, znaczniki braku połączenia i węzły. Komponent poza zaznaczeniem nie przesunie się tylko dlatego, że jest połączony z zaznaczonym komponentem.

## Wybór siły działania
{: #choose-the-strength}

**Siła działania (Strength)** określa, w jakim stopniu może zmienić się rozmieszczenie komponentów:

| Siła działania | Co może się zmienić |
| --- | --- |
| **Niska (Low)** | Pozostawia duże komponenty nieruchome; mniejsze komponenty, przewody i etykiety nadal mogą się przesuwać. |
| **Średnia (Medium)** | Umożliwia przesunięcie maksymalnie dwóch dużych komponentów, a także mniejszych komponentów, przewodów i etykiet. Jest to opcja domyślna. |
| **Wysoka (High)** | Umożliwia przesunięcie wszystkich kwalifikujących się komponentów, a także przewodów i etykiet. |

Zacznij od opcji Niska, jeśli chcesz zachować główny układ. Użyj opcji Średnia lub Wysoka, gdy obwód wymaga większej swobody reorganizacji. Opcja Niska nie ogranicza się do etykiet: może również zmienić położenie małych komponentów i przebieg przewodów.

O tym, czy komponent jest „duży”, decyduje geometria symbolu i liczba wyprowadzeń, a nie jego znaczenie elektryczne. Zmiana siły działania nie obraca, nie zmienia rozmiaru ani nie zastępuje komponentów, a także nie zmienia ich oznaczeń, wartości ani ustawień modelu.

## Uruchamianie i sprawdzanie wyniku
{: #run-and-review-the-result}

1. Otwórz rysunek lub edytowalną kopię [dołączonego przykładu](../Bundled-Examples/).
2. Jeśli chcesz ograniczyć zakres operacji, zaznacz obszar do uporządkowania.
3. Otwórz **Porządkowanie układu (Auto-layout)**, wybierz **Zastosuj do (Apply to)** i **Siłę działania (Strength)**, a następnie wybierz **Uruchom (Go)**.
4. Poczekaj, aż będzie wyświetlany komunikat **Porządkowanie układu… (Arranging layout…)**. Po pomyślnym zakończeniu wynik zostanie natychmiast zastosowany, a okno dialogowe zamknięte.
5. Sprawdź wynik. Użyj polecenia **Cofnij (Undo)**, aby jednym krokiem cofnąć całe porządkowanie i przywrócić poprzedni układ.

{% include video-player.html src="/v4/videos/simulation/layout-tidy-up.mp4" poster="/v4/videos/simulation/layout-tidy-up.jpg" caption="Otwórz funkcję Porządkowanie układu, wybierz zakres i siłę działania, uporządkuj przykład wzmacniacza, a następnie cofnij zmianę." %}

Polecenie **Anuluj (Cancel)** zatrzymuje obliczenia i zamyka okno dialogowe bez zastosowania zmian. Jeśli arkusz zmieni się podczas działania narzędzia, wynik zostanie odrzucony; uruchom narzędzie ponownie dla bieżącego arkusza.

Komunikat **Nie znaleziono ulepszeń układu (No layout improvements were found)** oznacza, że narzędzie nie znalazło akceptowalnych zmian w wybranym zakresie i przy wybranej sile działania. Rysunek pozostaje bez zmian. Możesz zamknąć okno dialogowe, zaznaczyć inny obszar, wypróbować inną siłę działania lub wprowadzić poprawkę ręcznie.

## Co poprawia narzędzie
{: #what-the-tool-improves}

Funkcja Porządkowanie układu wyszukuje kilka rodzajów możliwych ulepszeń:

- Czytelniejsze położenie tekstu oznaczeń i wartości komponentów; pola pozostają razem, a tekst nie koliduje z pobliską grafiką, przewodami ani innym tekstem.
- Lepsze położenie zwykłych etykiet sieci wzdłuż przewodów, do których są przypisane, oraz wyrównanie powiązanych etykiet, gdy jest to możliwe.
- Prostszy przebieg przewodów ortogonalnych, krótsze zbędne objazdy i wyraźniejsze wyjścia z wyprowadzeń komponentów.
- Bardziej zwarte rozmieszczenie połączonych komponentów i regularne odstępy między powtarzającymi się komponentami.
- Uporządkowane, równoległe przebiegi powiązanych przewodów, gdy pozwalają na to ich połączenia i dostępne miejsce.

Narzędzie nie zmienia układu pól notatek, magistral, flag portów o niestandardowych kształtach, grafiki bibliotecznej ani elementów stałych strony. Niektóre gęste lub nietypowe symbole nadal mogą wymagać ręcznej poprawy. Dłuższy przewód może być lepszym rozwiązaniem, jeśli zapewnia miejsce na etykietę lub ułatwia rozpoznanie połączenia.

## Sprawdź połączenia przed uporządkowaniem
{: #check-connections-before-tidying}

Funkcja Porządkowanie układu traktuje **istniejące połączenia na rysunku jako punkt wyjścia**. Przed zaakceptowaniem zmian sprawdza zarówno przynależność do sieci elektrycznej, jak i fizyczne połączenia przewodów. Etykiety nazwanych sieci nie ukrywają w tych kontrolach przerwanego fizycznego przewodu.

Przewód przechodzący przez punkt końcowy innego przewodu lub gniazdo może tworzyć połączenie elektryczne nawet bez widocznej kropki węzła. Jeśli taki styk jest przypadkowy, popraw go przed uruchomieniem funkcji Porządkowanie układu: narzędzie nie może stwierdzić, że istniejące połączenie powstało wskutek błędu rysunkowego. Nie przesuwa ono niejednoznacznych węzłów, aby połączyć wcześniej rozdzielone sieci.

Po uporządkowaniu sprawdź odgałęzienia, połączenia wyprowadzeń i przebieg przewodów wokół nieużywanych gniazd. W razie potrzeby użyj funkcji [Sprawdzanie reguł projektowych](../Design-Rules-Check/) i porównaj obwód z zamierzonymi połączeniami. Jeśli rysunek symulacji jest oznaczony jako zmieniony, [uruchom ją ponownie](../Simulation/), zanim uznasz stare wyniki za pomiary bieżącego rysunku.

## Porządkowanie układu czy przewód punkt-punkt?
{: #auto-layout-or-point-to-point-wire}

Użyj funkcji **Porządkowanie układu (Auto-layout)**, aby uporządkować geometrię już istniejącą na schemacie. Użyj narzędzia [Przewód punkt-punkt](../Wires/#auto-routing), jeśli chcesz utworzyć nowe połączenie o wyznaczonym przebiegu między dwoma punktami końcowymi. Zwykłe narzędzie [Przewód](../Wires/#placing-wires) pozwala samodzielnie wybrać poszczególne narożniki.

Zobacz także: [Przyciąganie do siatki](../Snap-to-Grid/), [Etykiety](../Labels/) i [Rozmiar strony](../Page-Size/).

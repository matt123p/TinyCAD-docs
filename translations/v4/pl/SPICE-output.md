---
layout: default
---
# Modele SPICE i generowanie listy połączeń
{: #spice-models-and-netlist-output}

TinyCAD obsługuje zarówno [zintegrowaną symulację ngspice](../Simulation/), jak i eksport listy połączeń SPICE do zewnętrznego symulatora. Obie metody zależą od szablonów SPICE komponentu i mapowania wyprowadzeń. Sam wygląd symbolu nie określa jego zachowania elektrycznego.

## Modele, szablony i kolejność wyprowadzeń
{: #models-templates-and-pin-order}

Rezystor może korzystać z natywnego elementu SPICE. Tranzystor może wymagać `.model`; bardziej złożone urządzenie może używać `.subckt`. Ustawienia SPICE wstawionego symbolu łączą numery jego fizycznych wyprowadzeń z zaciskami oczekiwanymi przez model. Sprawdź kartę **SPICE** we właściwościach symbolu; atrybuty instancji mogą zastępować wartości domyślne symbolu.

Szablony używają:

- **`%(pin)`** dla połączonej sieci określonego numeru wyprowadzenia TinyCAD.
- **`$(attribute)`** dla atrybutu komponentu.
- **`refnum`** jako specjalnie obsługiwanego sufiksu oznaczenia, dzięki czemu zachowany zostaje prefiks urządzenia SPICE z szablonu.

Na przykład szablon rezystora może wyglądać tak:

```text
R$(refnum) %(1) %(2) $(NAME)
```

Dla oznaczenia R3, sieci 7 i 9 oraz NAME `10k` wygeneruje:

```spice
R3 7 9 10k
```

Bazowym atrybutem szablonu modelu jest **`$$SPICE`**; tekstem prologu jest **`$$SPICE_PROLOG`**. Szablon może zmieniać kolejność wyprowadzeń: nie zakładaj, że wyprowadzenie 1 na schemacie jest pierwszym zaciskiem SPICE. Element BJT oczekuje kolejno **kolektora, bazy, emitera**. Jeśli symbol ma numerację: baza 1, emiter 2, kolektor 3, szablon musi podstawiać `%(3) %(1) %(2)` w tej kolejności. Podukład używa kolejności zadeklarowanej w wierszu `.subckt`, która może różnić się od kolejności wyprowadzeń obudowy urządzenia.

Czytaj symbole i modele łącznie. Wyprowadzenia zasilania, wyprowadzenia ukryte, warianty tranzystorów i modele wzmacniaczy operacyjnych często są źródłem niezgodności. Ogólny model behawioralny w stylu 741 nie jest kompletnym, zatwierdzonym przez producenta makromodelem 741.

## Używanie modelu w zintegrowanej symulacji
{: #use-a-model-in-integrated-simulation}

1. Zacznij od symbolu z modelem z [dołączonej biblioteki symulacyjnej](../Bundled-Libraries/#libraries-with-simulation-models) lub dodaj odpowiedni szablon SPICE do symbolu niestandardowego.
2. Sprawdź, czy każdy szablon odwołuje się do istniejących atrybutów i właściwych wyprowadzeń.
3. Na arkuszu Simulation dołącz wymagany **tekst** modelu i nadaj załącznikom logiczne nazwy plików. Typowe rozszerzenia plików tekstowych to `.lib`, `.cir` i `.mod`.
4. Rozwiąż zależności `.include` i `.lib` za pomocą tych załączników. Wymagane definicje przechowuj razem z rysunkiem.
5. Podłącz masę **0**, skonfiguruj analizę w **Setup** (Konfiguracja), a następnie uruchom symulację i sprawdź komunikaty diagnostyczne.

Zarządzany silnik nie pobiera modelu ze strony internetowej ani nie odczytuje dowolnej ścieżki bezwzględnej na komputerze. Należy jawnie dostarczyć zależności. Silnik nie wykonuje też dowolnych poleceń powłoki, skryptów `.control`, plików startowych, dostarczonych z zewnątrz modułów natywnych ani zależności urządzeń opartych na plikach. Model producenta używający składni specyficznej dla danego symulatora może wymagać dostosowania; „zgodność z SPICE” nie gwarantuje identyczności dialektów.

Zintegrowany arkusz Simulation w TinyCAD zarządza poleceniami analizy i końcowym `.end`. **Symbol RUN ze starszego formatu nie jest wymagany.** Podczas dostosowywania rysunku przeznaczonego do eksportu przenieś stare ustawienia analizy do Setup i usuń symbol RUN ze starszego formatu. Usuń instrukcje analizy i `.end` z pozostałych atrybutów komponentów; polecenia te są odrzucane w zintegrowanej ścieżce szablonów komponentów.

Przed redystrybucją modelu producenta sprawdź jego licencję. Zapoznaj się z udokumentowaną kolejnością wyprowadzeń, jednostkami, założeniami modelu i obsługiwanym symulatorem. Dokumentację producenta przechowuj wraz z notatkami dotyczącymi modelowania.

## Sprawdzanie i eksport listy połączeń SPICE
{: #inspect-and-export-a-spice-netlist}

Lista połączeń to tekstowy opis urządzeń i łączących je węzłów. Masa ma nazwę `0`. Typowa zawartość obejmuje definicje modeli i konfiguracji, wiersze komponentów, dyrektywy analizy oraz końcowy `.end`. Przydatne kontrole:

- Czy każdy komponent odwołuje się do zamierzonego modelu i wartości?
- Czy połączone wyprowadzenia mają oczekiwane wspólne nazwy sieci?
- Czy obecne są sieci zasilania/powrotu, w tym 0?
- Czy kolejność zacisków półprzewodnika lub podukładu jest prawidłowa?
- Czy wszystkie definicje modeli i dołączony tekst są dostępne dla wybranego silnika?

W przypadku konfiguracji zintegrowanej otwórz **Simulation sheet → Diagnostics → Generate circuit text** (Arkusz Simulation → Diagnostyka → Generuj tekst obwodu), sprawdź rozwinięty deck, a następnie wybierz **Export circuit** (Eksportuj obwód), aby zapisać `simulation.cir`. Zawiera on analizę zarządzaną przez program.

W przypadku eksportu starszego typu opartego na szablonach użyj osobnego polecenia **Generate Spice NetList** (Generuj listę połączeń Spice) w menu File przeglądarki albo menu Desktop Tools. Jest ono niezależne od okna dialogowego [Generate Netlist](../Generate-Netlist/), przeznaczonego do obsługi PCB. Eksportowane dyrektywy analizy/uruchomienia muszą być odpowiednie dla zewnętrznego silnika. Można również bezpośrednio sprawdzić plik `.cir` z dołączonego samouczka. **Otwórz rysunek `.dzn` w TinyCAD; lista połączeń `.cir` nie jest plikiem rysunku TinyCAD.**

### Szablony eksportu starszego typu
{: #legacy-export-templates}

System szablonów przeznaczony do eksportu obsługuje treść modelu dla każdej instancji oraz prolog i epilog dla każdego symbolu. Identyczne prologi/epilogi są usuwane jako duplikaty. Priorytety mieszczą się w zakresie od 0 do 9: prologi są wykonywane od najniższego do najwyższego priorytetu; epilogi są porządkowane tak, że priorytet 0 występuje na końcu.

Starsze rysunki mogą używać symbolu **RUN** bez wyprowadzeń, którego prolog/epilog dostarcza dyrektywy analizy i zakończenia dla eksportowanego decku. Jest to konwencja eksportu, a nie instrukcja dodania RUN do zintegrowanego arkusza Simulation. Przed uruchomieniem wyeksportowanego pliku w osobnym symulatorze sprawdź te instrukcje.

### Szablony warunkowe
{: #conditional-templates}

W szablonach niestandardowych lub przeznaczonych do eksportu obsługiwane są następujące formy warunkowe:

```text
?( defined(attribute), true text, false text )
?( not_defined(attribute), true text, false text )
?( empty(attribute), true text, false text )
?( not_empty(attribute), true text, false text )
?( connected(pin), true text, false text )
?( not_connected(pin), true text, false text )
```

Warunki można zagnieżdżać. Sprawdź rozwinięty deck, zamiast oceniać złożony szablon wyłącznie na podstawie jego tekstu źródłowego.

## Zapis liczb i przenośność
{: #numerical-notation-and-portability}

W tekście SPICE **`M` oznacza mili**, podobnie jak `m`; dla mega używaj **`Meg`**. `1k`, `100n` i `10u` to typowe wartości. Zamiast polegać na nieokreślonych wartościach domyślnych symulatora, używaj jawnych parametrów i odwołań do modeli.

Dokumentacja wiersza poleceń zewnętrznego ngspice opisuje środowisko szersze niż zintegrowany silnik TinyCAD. Pełny opis składni elementów, modeli, analiz i uwag dotyczących zgodności znajduje się w oficjalnej [dokumentacji ngspice](https://ngspice.sourceforge.io/docs.html) i [podręczniku użytkownika](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf). Przejdź dalej do [opisu implementacji SPICE w TinyCAD](../SPICE-Tutorial-11/), aby zapoznać się z przykładami działania silników, symboli i list połączeń.

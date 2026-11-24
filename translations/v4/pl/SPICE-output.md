---
layout: default
---
# Modele SPICE i generowanie netlisty
{: #spice-models-and-netlist-output}

TinyCAD obsługuje zarówno [zintegrowaną symulację ngspice](../Simulation/), jak i eksport netlisty SPICE do zewnętrznego symulatora. Oba rozwiązania zależą od szablonów SPICE komponentu i mapowania wyprowadzeń. Sam wygląd symbolu nie opisuje jego zachowania elektrycznego.

Jeśli chcesz wybrać model już dołączony do TinyCAD, zacznij od sekcji [Dołączone modele SPICE](../Bundled-SPICE-Models/).

## Modele, szablony i kolejność wyprowadzeń
{: #models-templates-and-pin-order}

Rezystor może korzystać z natywnego elementu SPICE. Tranzystor może wymagać `.model`; bardziej złożone urządzenie może korzystać z `.subckt`. Ustawienia SPICE umieszczonego symbolu łączą fizyczne numery jego wyprowadzeń z zaciskami oczekiwanymi przez dany model. Sprawdź kartę **SPICE** we właściwościach symbolu; atrybuty instancji mogą zastępować wartości domyślne symbolu.

Szablony używają:

- **`%(pin)`** dla sieci połączonej z określonym numerem wyprowadzenia TinyCAD.
- **`$(attribute)`** dla atrybutu komponentu.
- **`refnum`** jako specjalnie obsługiwanego przyrostka oznaczenia, dzięki czemu prefiks urządzenia SPICE w szablonie zostaje zachowany.

Na przykład szablon rezystora może wyglądać tak:

```text
R$(refnum) %(1) %(2) $(Value)
```

Dla oznaczenia R3, sieci 7 i 9 oraz wartości `10k` wygeneruje on:

```spice
R3 7 9 10k
```

Atrybut bazowego szablonu modelu to **`$$SPICE`**; tekst prologu to **`$$SPICE_PROLOG`**. Szablon może zmieniać kolejność wyprowadzeń: nie zakładaj, że wyprowadzenie 1 na schemacie jest pierwszym zaciskiem SPICE. Element BJT oczekuje kolejno **kolektora, bazy i emitera**. Jeśli symbol ma bazę o numerze 1, emiter o numerze 2 i kolektor o numerze 3, szablon musi w tej kolejności podstawiać `%(3) %(1) %(2)`. W podukładzie obowiązuje kolejność zadeklarowana w wierszu `.subckt`, która może różnić się od kolejności wyprowadzeń obudowy urządzenia.

Analizuj rzeczywisty symbol i model łącznie. Wyprowadzenia zasilania, ukryte wyprowadzenia, warianty tranzystorów i modele wzmacniaczy operacyjnych często powodują niezgodności. Ogólny model behawioralny w stylu 741 nie jest kompletnym modelem makro 741 zakwalifikowanym przez producenta.

## Używanie modelu w zintegrowanej symulacji
{: #use-a-model-in-integrated-simulation}

1. Zacznij od [dołączonego modelu](../Bundled-SPICE-Models/) albo dodaj do symbolu odpowiedni szablon Custom. Upewnij się, że mapowanie wyprowadzeń odpowiada kolejności zacisków modelu.
2. TinyCAD automatycznie rozpoznaje odwołania do dołączonych modeli. Jeśli model Custom wymaga zewnętrznego tekstu, użyj polecenia **Setup → SPICE models** i dołącz go pod logiczną nazwą pliku, taką jak `part.lib`, `part.cir` lub `part.mod`.
3. Rozwiąż zależności `.include` i `.lib`, dołączając odpowiednie pliki. Zapisz rysunek, aby zachować wymagane definicje.
4. Podłącz masę **0**, ustaw analizę w sekcji **Setup**, a następnie uruchom symulację i sprawdź diagnostykę.

Zarządzany silnik nie pobiera modelu ze strony internetowej ani nie odczytuje dowolnej ścieżki bezwzględnej na komputerze. Jawnie dostarcz wymagane zależności. Nie wykonuje też dowolnych poleceń powłoki, skryptów `.control`, plików startowych, dostarczonych z zewnątrz modułów natywnych ani zależności urządzeń opartych na plikach. Model producenta korzystający ze składni specyficznej dla danego symulatora może wymagać dostosowania; zgodność ze SPICE nie gwarantuje identycznych dialektów.

Arkusz Simulation w zintegrowanym TinyCAD zarządza poleceniami analizy i końcowym `.end`. **Nie jest wymagany starszy symbol RUN.** Przenosząc rysunek przygotowany do eksportu, przenieś stare ustawienia analizy do sekcji Setup i usuń starszy symbol RUN. Usuń polecenia analizy i `.end` z pozostałych atrybutów komponentów; te polecenia są odrzucane w zintegrowanej ścieżce szablonów komponentów.

Przed rozpowszechnianiem modelu producenta sprawdź jego licencję. Zapoznaj się z udokumentowaną kolejnością wyprowadzeń, jednostkami, założeniami modelu i obsługiwanym symulatorem. Zachowaj dokumentację producenta wraz z notatkami dotyczącymi modelowania.

## Sprawdzanie i eksport netlisty SPICE
{: #inspect-and-export-a-spice-netlist}

Netlista to tekstowy opis urządzeń i łączących je węzłów. Masa ma nazwę `0`. Typowa zawartość obejmuje definicje modeli i ustawień, wiersze komponentów, dyrektywy analizy oraz końcowy `.end`. Przydatne kontrole:

- Czy każdy komponent odwołuje się do właściwego modelu i wartości?
- Czy połączone wyprowadzenia mają oczekiwane wspólne nazwy sieci?
- Czy obecne są sieci zasilania i powrotu, w tym 0?
- Czy kolejność zacisków półprzewodnika lub podukładu jest prawidłowa?
- Czy wszystkie definicje modeli i dołączony tekst są dostępne dla wybranego silnika?

W przypadku zintegrowanej konfiguracji otwórz **Simulation sheet → Diagnostics → Generate circuit text**, sprawdź rozwinięty tekst netlisty, a następnie wybierz **Export circuit**, aby zapisać `simulation.cir`. Eksport obejmuje zarządzaną analizę i może odwoływać się do oddzielnych plików modeli za pomocą `.include`. Zewnętrzny symulator wymaga kopii tych plików we wskazanych lokalizacjach.

W przypadku starszego eksportu opartego na szablonach użyj osobnego polecenia **Generate Spice NetList** w menu File przeglądarki lub menu Desktop Tools. Jest ono niezależne od okna dialogowego [Generate Netlist](../Generate-Netlist/), przeznaczonego do obsługi PCB. To polecenie osadza przywołane definicje dołączone do programu. Dostarcz wszystkie zewnętrzne zależności używane przez szablony Custom i sprawdź, czy dyrektywy analizy oraz uruchamiania są odpowiednie dla zewnętrznego silnika. Można też bezpośrednio sprawdzić plik `.cir` z powiązanego samouczka. **Otwórz rysunek `.dzn` w TinyCAD; netlista `.cir` nie jest plikiem rysunku TinyCAD.**

### Starsze szablony eksportu
{: #legacy-export-templates}

System szablonów przeznaczony do eksportu obsługuje treść modelu dla każdej instancji oraz prolog i epilog dla każdego symbolu. Identyczne prologi i epilogi są deduplikowane. Priorytety mieszczą się w zakresie od 0 do 9: prologi są wykonywane od niskiego do wysokiego priorytetu, a epilogi są porządkowane tak, aby priorytet 0 był ostatni.

Starsze rysunki mogą zawierać symbol **RUN** bez wyprowadzeń, którego prolog i epilog dostarczają dyrektywy analizy i zakończenia eksportowanej netlisty. Jest to konwencja eksportu, a nie polecenie dodawania RUN do zintegrowanego arkusza Simulation. Przed uruchomieniem wyeksportowanego pliku w osobnym symulatorze sprawdź te instrukcje.

### Szablony warunkowe
{: #conditional-templates}

Obsługiwane formy warunkowe dla szablonów eksportowych/Custom obejmują:

```text
?( defined(attribute), true text, false text )
?( not_defined(attribute), true text, false text )
?( empty(attribute), true text, false text )
?( not_empty(attribute), true text, false text )
?( connected(pin), true text, false text )
?( not_connected(pin), true text, false text )
```

Warunki można zagnieżdżać. Zamiast oceniać złożony szablon wyłącznie na podstawie jego tekstu źródłowego, sprawdź rozwiniętą netlistę.

## Zapis wartości liczbowych i przenośność
{: #numerical-notation-and-portability}

W tekście SPICE **`M` oznacza mili**, tak samo jak `m`; do oznaczania mega używaj **`Meg`**. `1k`, `100n` i `10u` to często spotykane wartości. Zamiast polegać na nieokreślonych wartościach domyślnych symulatora, używaj jawnych parametrów modelu i odwołań.

Dokumentacja wiersza poleceń zewnętrznego ngspice opisuje szersze środowisko niż zintegrowany silnik TinyCAD. Pełny opis składni elementów, modeli, analiz i zgodności znajduje się w oficjalnej [dokumentacji ngspice](https://ngspice.sourceforge.io/docs.html) oraz [podręczniku użytkownika](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf). Kontynuuj lekturę sekcji [Jak TinyCAD implementuje SPICE](../SPICE-Tutorial-11/), aby zapoznać się z omówieniem silników, symboli i netlist.

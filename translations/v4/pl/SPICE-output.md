---
layout: default
---
# Wyjście SPICE
{: #spice-output}

Obsługa SPICE w TinyCAD v4 działa tak samo jak w v3: TinyCAD generuje plik tekstowy SPICE ze schematu, korzystając z szablonów na poziomie symboli.

## Do czego służy SPICE
{: #what-spice-is-used-for}

SPICE (Simulation Program with Integrated Circuit Emphasis) to rodzina formatów i narzędzi do symulacji obwodów. Symulator SPICE umożliwia testowanie działania obwodu przed zbudowaniem układu, na przykład:

- Punktów pracy prądu stałego i warunków polaryzacji
- Zachowania w stanie nieustalonym (w dziedzinie czasu)
- Odpowiedzi AC/częstotliwościowej
- Przemiatania parametrów i analiz typu „co, jeśli”

TinyCAD sam nie przeprowadza symulacji. Zamiast tego eksportuje plik SPICE, który uruchamiasz w wybranym przez siebie silniku SPICE.

## Format pliku SPICE i ogólny układ
{: #spice-file-format-and-general-layout}

Poszczególne silniki SPICE nieco się różnią, ale większość plików SPICE ma podobną ogólną strukturę:

1. Opcjonalny nagłówek/komentarze
2. Dołączane pliki i definicje urządzeń/modeli
3. Wiersze elementów obwodu (po jednym wierszu na instancję komponentu)
4. Polecenia analizy/sterujące
5. Znacznik końca (zazwyczaj `.end`)

W praktyce oznacza to, że wyeksportowany plik zwykle zawiera:

- Tekst „Konfiguracji” na początku (modele, dołączane pliki, opcje)
- Treść z wygenerowanymi komponentami i połączonymi z nimi węzłami
- Tekst „Uruchomienia” lub analizy na końcu

Generowanie SPICE w TinyCAD zaprojektowano tak, aby bezpośrednio odpowiadało temu układowi.

## Jak TinyCAD generuje SPICE
{: #how-tinycad-generates-spice}

TinyCAD używa systemu szablonów tekstowych dla każdego symbolu obsługującego SPICE. Każdy symbol może definiować:

- **Szablon modelu**: wstawiany dla każdej instancji tego komponentu na schemacie
- **Szablon prologu**: wstawiany w pobliżu początku pliku, raz dla każdego typu komponentu
- **Szablon epilogu**: wstawiany w pobliżu końca pliku, raz dla każdego typu komponentu

Pola te można otworzyć we właściwościach symbolu w edytorze biblioteki symboli (karta SPICE).

### Rozwijanie szablonów
{: #template-expansion}

Szablony mogą zawierać:

- `%(pin)` w celu podstawienia pinów/węzłów sieci
- `$(attribute)` w celu podstawienia atrybutów symbolu

Przykładowy szablon modelu rezystora:

`R$(refnum) %(1) %(2) $(NAME)`

Jeśli instancja rezystora ma oznaczenie `R3`, jest podłączona między węzłami sieci `7` i `9` oraz ma `NAME=10K`, TinyCAD zapisuje:

`R3 7 9 10K`

`refnum` jest obsługiwany specjalnie, aby zachować literę urządzenia SPICE z szablonu.

### Kolejność i eliminowanie duplikatów prologów/epilogów
{: #prologueepilogue-order-and-deduplication}

- Identyczne prologi i epilogi są dodawane tylko raz
- Każdy ma priorytet (od `0` do `9`)
- Prologi są zapisywane w kolejności rosnących priorytetów
- Epilogi są zapisywane tak, aby priorytet `0` pojawił się w pliku jako ostatni

Dzięki temu można kontrolować miejsce, w którym pojawia się tekst konfiguracji i analizy.

## Wymagana konfiguracja schematu do eksportu SPICE
{: #required-schematic-setup-for-spice-export}

Aby wygenerować prawidłowy plik SPICE, rysunek musi zawierać:

- Symbole obsługujące SPICE dla symulowanego obwodu
- Specjalny symbol **RUN**
- Węzeł sieci o nazwie **0** (masa SPICE)

### Symbol RUN
{: #run-symbol}

Symbol RUN to zwykły symbol TinyCAD bez pinów i szablonu modelu, ale z tekstem prologu/epilogu używanym do wstawiania poleceń sterujących symulacją.

Ustaw priorytety prologu i epilogu symbolu RUN na `0`, aby jego tekst znalazł się na samym początku i na samym końcu wygenerowanego pliku.

Dla jednego obwodu symulacyjnego użyj jednego symbolu RUN.

### Węzeł sieci `0`
{: #the-0-net}

SPICE wymaga, aby masa była węzłem sieci `0`.

W TinyCAD utwórz go, nadając połączeniu nazwę `0` za pomocą jednego z poniższych elementów:

- Etykiety sieci lub
- Symbolu zasilania o wartości `0`

## Tworzenie wyjścia SPICE
{: #creating-the-spice-output}

Gdy symbole, węzeł RUN i węzeł sieci `0` są już na miejscu, wygeneruj wyjście SPICE za pomocą polecenia eksportu SPICE w interfejsie TinyCAD.

Opcje eksportu są celowo ograniczone do minimum, ponieważ oczekuje się, że działanie podczas uruchamiania będzie kontrolowane za pomocą szablonów symbolu RUN.

## Zaawansowane warunki w szablonach
{: #advanced-template-conditionals}

W przypadku bardziej zaawansowanych symboli obsługiwane są warunki w szablonach (działające tak samo jak w v3), obejmujące testy dotyczące:

- Obecności/braku atrybutu
- Pustego/niepustego atrybutu
- Podłączenia/braku podłączenia pinu

Składnia warunków:

- `?( defined(attributename), true string, false string )`
- `?( not_defined(attributename), true string, false string )`
- `?( empty(attributename), true string, false string )`
- `?( not_empty(attributename), true string, false string )`
- `?( connected(pinnumber), true string, false string )`
- `?( not_connected(pinnumber), true string, false string )`

Warunki można zagnieżdżać.

- Wróć do [Zaawansowane](../Advanced/)
- Wróć do [Spis treści v4](../CONTENTS/)

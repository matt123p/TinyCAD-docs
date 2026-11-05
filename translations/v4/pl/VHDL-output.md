---
layout: default
---
# Wyjście VHDL
{: #vhdl-output}

Generowanie wyjścia VHDL w TinyCAD v4 działa tak samo jak w v3. TinyCAD wykorzystuje połączenia na schemacie, definicje wyprowadzeń symboli oraz symbole przeznaczone do VHDL, aby wygenerować opis projektu w języku VHDL.

Eksport do VHDL jest dostępny w aplikacji komputerowej. Wersja przeglądarkowa nie tworzy obecnie plików VHDL.

## Do czego służy VHDL
{: #what-vhdl-is-used-for}

VHDL to skrót od Very High Speed Integrated Circuit Hardware Description Language (język opisu sprzętu układów scalonych o bardzo dużej szybkości). Służy do opisywania układów cyfrowych, takich jak bramki logiczne, liczniki, automaty stanów, magistrale i większe bloki wielokrotnego użytku.

VHDL jest powszechnie używany do:

- symulowania logiki cyfrowej przed zbudowaniem sprzętu
- opisywania wielokrotnego użytku bloków projektu o określonych wejściach i wyjściach
- tworzenia hierarchicznych projektów FPGA lub ASIC z mniejszych modułów
- przekazywania projektu do dalszych narzędzi syntezy lub weryfikacji

W praktyce projekt VHDL zwykle definiuje:

- **jednostkę (entity)**: zewnętrzne porty bloku
- **architekturę (architecture)**: wewnętrzną logikę lub strukturę

Obsługa VHDL w TinyCAD jest najbardziej przydatna, gdy chcesz przedstawić strukturę projektu cyfrowego na schemacie i wyeksportować ją w postaci VHDL.

## Przygotowanie schematu
{: #preparing-the-schematic}

Aby wygenerować wyjście VHDL, utwórz schemat przy użyciu symboli z biblioteki VHDL. Symbole te zaprojektowano tak, aby TinyCAD rozpoznawał, które wyprowadzenia są wejściami, wyjściami i nazwanymi połączeniami.

Symbole przeznaczone do VHDL można również znaleźć na stronie [tinycad.net](https://www.tinycad.net/Search?key=%23vhdl).

Używaj tych symboli tak jak innych symboli TinyCAD, zwracając jednak szczególną uwagę na nazewnictwo:

- W przypadku wejść i wyjść najwyższego poziomu używaj symboli z biblioteki VHDL i nadaj każdemu wymaganą nazwę sygnału.
- Przewody wewnętrzne powinny mieć spójne nazwy we wszystkich miejscach, w których ten sam sygnał ma być połączony.
- Nazwy, kierunki i numery wyprowadzeń w symbolach niestandardowych muszą być poprawne.

TinyCAD automatycznie nadaje nazwy połączonym przewodom, ale jawne etykiety są nadal najczytelniejszym sposobem kontrolowania nazw sygnałów w eksporcie.

## Jak TinyCAD łączy symbole z VHDL
{: #how-tinycad-pairs-symbols-with-vhdl}

TinyCAD umożliwia hierarchiczne projektowanie zorientowane na VHDL bez konieczności korzystania z funkcji wieloplikowych schematów hierarchicznych TinyCAD.

Zalecany tok pracy:

1. Utwórz lub zgromadź pliki VHDL definiujące działanie bloków wielokrotnego użytku.
2. Utwórz pasujące symbole TinyCAD dla tych bloków w bibliotece projektu.
3. Nadaj każdemu symbolowi taką samą nazwę jak odpowiadającemu mu plikowi VHDL lub jednostce projektu.
4. Upewnij się, że każde wyprowadzenie symbolu ma poprawną nazwę i kierunek oraz unikatowy numer.

Za każdym razem, gdy umieścisz jeden z tych symboli na schemacie, TinyCAD może skojarzyć jego instancję z blokiem VHDL o tej samej nazwie.

Dzięki temu można wygodnie budować większe projekty z mniejszych modułów opisanych w VHDL, jednocześnie przedstawiając strukturę najwyższego poziomu na schemacie.

## Praca z magistralami
{: #working-with-buses}

W przypadku wyjścia VHDL nie używaj funkcji rysowania magistrali TinyCAD do definiowania magistrali logicznie. Zamiast tego definiuj magistrale, nadając nazwy bezpośrednio przewodom.

Przykłady:

- `A(7:0)` definiuje 8-bitową magistralę o nazwie `A`
- `A(3)` odnosi się do jednego bitu tej magistrali
- `A(7:4)` odnosi się do wycinka tej magistrali

Jeśli symbole wejścia i wyjścia reprezentują magistrale, stosuj w nich ten sam styl nazewnictwa.

W zakresach magistrali w postaci `A(i:j)` wartość `i` powinna być większa niż `j`.

Dla czytelności nadal możesz narysować połączenie magistrali, ale podczas eksportu do VHDL ważne są nazwy przewodów, a nie graficzne przedstawienie magistrali.

## Generowanie pliku VHDL
{: #generating-the-vhdl-file}

Gdy schemat jest gotowy, uruchom w TinyCAD polecenie Create VHDL (Utwórz VHDL).

W ramach procesu eksportu TinyCAD automatycznie sprawdza reguły projektowe. Jeśli chcesz wykryć problemy z połączeniami lub symbolami przed wygenerowaniem pliku, możesz wcześniej samodzielnie uruchomić sprawdzanie reguł projektowych.

## Praktyczna lista kontrolna
{: #practical-checklist}

Przed eksportem sprawdź, czy:

- nazwy wejść i wyjść najwyższego poziomu są dokładnie takie, jakich chcesz użyć w VHDL
- symbole niestandardowe mają poprawne kierunki wyprowadzeń
- numery wyprowadzeń są unikatowe w każdym symbolu
- sieci, które mają być połączone, rzeczywiście mają tę samą nazwę
- magistrale mają nazwy z zakresami w stylu VHDL, takimi jak `DATA(15:0)`

Jeśli wygenerowany kod VHDL nie odpowiada oczekiwaniom, przyczyną jest zwykle nieprawidłowa definicja wyprowadzeń, brak nazwy przewodu lub niespójne nazewnictwo magistrali.

## Przykładowe projekty
{: #example-designs}

Drzewo źródłowe TinyCAD zawiera niewielki przykład VHDL oparty na projekcie 4-bitowego procesora. Zapoznanie się z tymi plikami pomoże zrozumieć oczekiwane nazewnictwo symboli i strukturę projektu.

Przykład jest dostępny w [folderze repozytorium przykładów VHDL TinyCAD](https://github.com/matt123p/TinyCAD/tree/master/examples/vhdl).

- Wróć do [zaawansowanych zagadnień](../Advanced/)
- Wróć do [spisu treści v4](../CONTENTS/)

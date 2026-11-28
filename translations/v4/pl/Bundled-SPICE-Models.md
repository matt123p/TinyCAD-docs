---
layout: default
---
# Dołączone modele SPICE
{: #bundled-spice-models}

TinyCAD zawiera lokalny katalog modeli SPICE. Użyj dołączonego modelu, aby symulować komponent w ngspice, porównać potencjalne urządzenia lub rozpocząć tworzenie modelu Custom na podstawie sprawdzonej definicji. Modele są dostępne zarówno w TinyCAD Web, jak i w aplikacji Desktop. Selektor działa lokalnie po załadowaniu aplikacji.

## Zacznij od symbolu z modelem
{: #start-with-a-modelled-symbol}

Otwórz **Standard → SPICE essentials** w panelu bocznym lub użyj **Simulation → SPICE components** na pasku narzędzi. Wybierz **More…**, aby przeglądać pełną bibliotekę symboli. Wszystkie 29 symboli SPICE essentials ma dołączony model i wstępnie ustawione przypisanie wyprowadzeń. Większość używa modelu **TinyCAD Basic**. LM358 i LM324 korzystają z kompletnych modeli obudów OpenJellyBean.

Umieść symbol, zaznacz go na rysunku i otwórz kartę **SPICE** w dolnym panelu **Symbol**. Opcja **Bundled** pokazuje powiązany model i jego źródło. Zwykłe pola symbolu, takie jak **Value**, **Wiper** i **Initial Voltage**, nadal sterują modelami TinyCAD Basic korzystającymi z tych pól. Na przykład ustaw **Value** rezystora na `10k`, aby symulować 10 kΩ przy użyciu domyślnego modelu **Ideal resistor**.

![Karta SPICE umieszczonego symbolu pokazuje wybraną opcję Bundled i odsyłacze do modelu żółtej diody LED TinyCAD Basic.](/v4/Images/simulation/bundled-spice-properties.png)

Aby wypróbować to w kompletnym obwodzie, wybierz **Open Example → SPICE tutorial → divider**, a następnie zaznacz jeden z rezystorów. Jego karta **SPICE** pokazuje odsyłacz **Ideal resistor**. Zmień wartość rezystora, a następnie ponownie uruchom analizę Operating Point w przykładzie. Zachowany wynik przedstawia obwód sprzed wprowadzenia zmian.

## Wybierz i dołącz model
{: #choose-and-attach-a-model}

1. Otwórz kartę **SPICE** symbolu. Wybierz **Bundled**, a następnie **Find SPICE model…**.
2. Wpisz numer katalogowy, alias, identyfikator modelu lub rodzinę urządzeń. Wyczyść pole wyszukiwania, aby zobaczyć dostępne opcje dla danego symbolu.
3. Wybierz wiersz. Szczegóły pod tabelą zawierają opis modelu, źródło, kolejność wyprowadzeń oraz parametry, które można dostosować. Rozwiń **View SPICE definition**, aby zobaczyć szablon instancji oraz używane karty modelu lub podukłady. Wybierz odsyłacz do źródła, aby otworzyć oryginalną definicję albo archiwum źródłowe i nazwę pliku w archiwum.
4. Sprawdź przypisanie wyprowadzeń i ustaw ewentualne nadpisania parametrów. Wybierz **Select SPICE model**. Na rysunku zmienia to model zaznaczonego symbolu i można tę zmianę cofnąć.

![Okno Find SPICE model dla żółtej diody LED. Wybrany model circsim pokazuje źródło oraz zweryfikowane numery wyprowadzeń anody i katody.](/v4/Images/simulation/bundled-spice-picker.png)

**Symbole SPICE essentials** wyświetlają wyłącznie modele ze zweryfikowanymi przypisaniami dla układu wyprowadzeń danego symbolu. Niektóre symbole mają tylko domyślny model Basic. Na przykład żółta dioda LED oferuje model Basic oraz model żółtej diody LED circsim. Standardowy tranzystor NPN może używać modelu ogólnego lub alternatywnego, takiego jak `2N3904_OJ` OpenJellyBean, z kolektorem, bazą i emiterem przypisanymi odpowiednio do wyprowadzeń 3, 1 i 2.

**Inne symbole**, w tym starsze umieszczenia bez tożsamości bibliotecznej, mogą przeszukiwać pełny katalog dostępny w danej edycji. Sprawdź sugerowane dopasowania i przypisz każdemu zaciskowi modelu odrębne fizyczne wyprowadzenie. Uwzględnij wyprowadzenia zasilania, nawet jeśli są ukryte na schemacie. Użyj zweryfikowanego układu wyprowadzeń obudowy symbolu oraz kolejności zacisków modelu. Pozostaw poza przypisaniem fizyczne wyprowadzenia pominięte przez model. Tymczasowy symbol o nieprawidłowej liczbie lub funkcji wyprowadzeń należy poprawić, zanim będzie można go użyć jako reprezentacji urządzenia.

![Ręczne przypisanie wyprowadzeń dla symbolu 741 w bibliotece niestandardowej. Pięć zacisków circsim LM741 przypisano do fizycznych wyprowadzeń 3, 2, 6, 7 i 4.](/v4/Images/simulation/bundled-spice-pin-mapping.png)

Przykład przypisuje model circsim `LM741` do symbolu 741, używając wyprowadzeń 3 (wejście nieodwracające), 2 (wejście odwracające), 6 (wyjście), 7 (zasilanie dodatnie) i 4 (zasilanie ujemne). Model pomija wyprowadzenia zerowania napięcia niezrównoważenia. W przypadku symbolu bibliotecznego złożonego z wielu części TinyCAD udostępnia numery wyprowadzeń wspólne dla części korzystających z szablonu. Wybierz kompletny model obudowy, gdy symbol i symulacja wymagają uwzględnienia całej obudowy.

Jeśli selektor wyświetla komunikat **No models match this search**, wyczyść wyszukiwanie lub spróbuj użyć szerszego terminu. Oznakowany symbol może oferować wyłącznie zweryfikowane modele. Aby użyć innego modelu, sprawdź układ wyprowadzeń urządzenia i użyj odpowiedniego [symbolu z biblioteki niestandardowej](../Custom-symbol-libraries/) lub definicji Custom.

## Wybierz odpowiedni poziom szczegółowości
{: #choose-the-right-level-of-detail}

| Czego chcesz się dowiedzieć | Od którego modelu zacząć |
| --- | --- |
| Sprawdzić dzielnik, stałą czasową obwodu RC lub podstawowe działanie obwodu | Użyj TinyCAD Basic. Modele idealne są przydatne, gdy pasożyty i tolerancje nie są istotne dla analizowanego zagadnienia. |
| Zbadać punkt pracy, wzmocnienie, napięcie przewodzenia diody lub przełączanie z użyciem konkretnej części | Wyszukaj dokładną część lub udokumentowany odpowiednik. Sprawdź opis i założenia modelu dla danego napięcia, prądu, temperatury i częstotliwości. |
| Zbadać zamiennik, gdy dokładny model jest niedostępny | Użyj udokumentowanego zamiennika bezpośredniego lub modelu ogólnego dla danej rodziny urządzeń. Osobno zweryfikuj funkcje wyprowadzeń obudowy, polaryzację zasilania i dopuszczalne zakresy pracy. Zapisz, które właściwości są przybliżane. |
| Zbadać ograniczenie, takie jak szum, zakres napięcia wspólnego wejścia, dryft termiczny lub narożnik procesu | Sprawdź, czy model jawnie uwzględnia dane zjawisko. W razie potrzeby użyj odpowiedniego modelu producenta lub procesu jako [definicji Custom](../SPICE-output/#models-templates-and-pin-order). |

Dołączone modele opisują typowe zachowanie. Na przykład model 741 circsim przedstawia nominalne wzmocnienie, pasmo, szybkość narastania, napięcie niezrównoważenia i prąd zasilania. Wykorzystuje stopień wejściowy o wysokiej impedancji. Model żółtej diody LED circsim opisuje właściwości elektryczne, dopasowane do napięcia 2,10 V przy 20 mA. Emisja światła, parametry znamionowe urządzenia i zachowanie w najgorszych warunkach wymagają osobnego potwierdzenia.

## Ustaw domyślny model biblioteczny lub edytuj kopię Custom
{: #set-a-library-default-or-edit-a-custom-copy}

- **Dla przyszłych umieszczeń** otwórz edytowalną bibliotekę `.tclib` i wybierz symbol. Otwórz jego kartę **SPICE** i użyj tego samego selektora modeli. Zapisz bibliotekę. Wybrana definicja stanie się domyślna dla przyszłych umieszczeń tego elementu bibliotecznego. Istniejące umieszczenia zachowują zapisane definicje.
- **Dla pojedynczego umieszczenia** zaznacz symbol na schemacie i zmień jego właściwości **SPICE**. Jest to przydatne do porównywania dwóch modeli obok siebie na tym samym rysunku.
- **Aby edytować tekst modelu**, wybierz **Custom** w symbolu z dołączonym modelem. TinyCAD kopiuje szablon instancji oraz wszystkie wymagane definicje do edytowalnych pól, uwzględniając przypisane wyprowadzenia. W przypadku modeli z definicjami kopia lokalna używa nazw powiązanych z danym umieszczeniem, dzięki czemu może działać równolegle z oryginalnym modelem dołączonym do programu. W przypadku idealnego rezystora wystarczy sam szablon instancji.

Przełączenie z powrotem na **Bundled** przywraca powiązany model. Ponownie wybierz **Custom**, aby odzyskać wprowadzone zmiany. Wybrany tryb określa, która definicja jest używana; oba ustawienia są zachowywane po zapisaniu i ponownym otwarciu. **Remove attached model** usuwa powiązanie i przywraca poprzedni szablon, jeśli został zapisany.

Obsługiwany [import SPICE z KiCad](../Importing-Symbols-from-KiCAD/#import-spice-models-with-symbols) pojawia się w sekcji **Custom**. Jeśli chcesz zachować zaimportowaną definicję do przyszłych umieszczeń, zaimportuj ją do edytowalnej biblioteki i zapisz bibliotekę.

## Uruchom, zapisz i udostępnij
{: #run-save-and-share}

1. Połącz przypisane wyprowadzenia i zasilanie, w tym połączenie z masą SPICE **0**.
2. Utwórz lub otwórz [arkusz Simulation](../Simulation/), wybierz analizę w **Setup** i kliknij **Run**. Aktywne dołączone modele są rozpoznawane automatycznie. Użyj **Setup → SPICE models**, aby dołączyć dodatkowe pliki wymagane przez model Custom.
3. Otwórz **Diagnostics → Generate circuit text**, aby sprawdzić rozwinięte wiersze instancji i odwołania do modeli. Jeśli wynik wydaje się nieprawidłowy, sprawdź kolejność wyprowadzeń i sieci zasilania.

Rysunki zachowują wersję każdego modelu, przypisane wyprowadzenia i ustawienia parametrów, a także jedną zapisaną kopię każdego przywołanego pakietu. Zapisz rysunek, aby udostępnić obwód i jego definicje modeli. Modele XSPICE obsługiwane wyłącznie w wersji Desktop wymagają do uruchomienia silnika Desktop. **Generate Spice NetList** osadza przywołane definicje dołączonych modeli w danych wyjściowych SPICE. Zobacz [modele SPICE i dane wyjściowe netlisty](../SPICE-output/#inspect-and-export-a-spice-netlist), aby poznać opcje eksportu oraz różnicę między plikiem symulacji a rysunkiem.

## Zawartość katalogu i źródła
{: #catalog-contents-and-sources}

TinyCAD Web zawiera 97 modeli katalogowych. Aplikacja Desktop dodaje trzy definicje wymagające natywnego XSPICE. Skorzystaj z odsyłacza na stronie szczegółów danego modelu, aby poznać dokładne źródło. TinyCAD dostarcza informacje o licencjach wraz z pakietami; są one również dostępne w sekcji **About TinyCAD**.

| Pakiet | Modele | Przykłady |
| --- | ---: | --- |
| TinyCAD Basic | 20 | Idealne rezystory, kondensatory i cewki indukcyjne, źródła niezależne, szablony potencjometrów i transformatorów, półprzewodniki ogólne, 741 i rezonatory |
| OpenJellyBean | 42 | Tranzystory BJT, MOSFET i JFET, diody sygnałowe i Schottky’ego, diody Zenera, diody LED, kanały i obudowy wzmacniaczy operacyjnych oraz potencjometr |
| circsim | 15 | LM741, żółta dioda LED, LM393, LM339, NE5532, NE555, transoptory, stabilizatory i tranzystory mocy MOSFET |
| Spice_Files | 14 | Diody i diody LED ogólnego przeznaczenia, mostek prostowniczy, transoptory, przełącznik, przekaźnik, rezonator kwarcowy 16 MHz i transformator 10:1 |
| Modele specjalne ngspice | 1 | Generator przebiegów ICL8038 |
| Modele specjalne ngspice (Desktop) | 3 | Odwracacz napięcia LTC1044HV, stabilizator LR8 i pomocniczy wzmacniacz operacyjny |
| SkyWater SKY130 | 1 | Nominalny zintegrowany tranzystor PNP z wyprowadzeniem podłoża |
| GlobalFoundries GF180MCU | 3 | Nominalne kondensatory MIM o pojemności 1,0, 1,5 i 2,0 fF/µm² |
| IHP SG13G2 | 1 | Nominalny zintegrowany tranzystor PNP pnpMPA |

Modele odlewni są modelami nominalnymi. Pełne zestawy technologiczne zawierają osobne drzewa modeli, narożniki procesu i konfigurację symulatora. Zobacz [opis katalogu](https://github.com/matt123p/TinyCADv4/blob/main/docs/bundled-spice-models.md#catalog-sources), aby zapoznać się z wykazem źródeł, licencjami i zweryfikowanymi alternatywami dla SPICE essentials.

## Zapytaj asystenta AI w aplikacji Desktop
{: #ask-the-desktop-ai-assistant}

Gdy jawnie poprosisz o pomoc dotyczącą SPICE, [asystent AI w aplikacji Desktop](../AI-Assistant/) może przeszukać lokalny katalog, sprawdzić tekst modeli i ich źródła oraz zweryfikować przypisanie do symbolu. Może dołączyć model do umieszczonego komponentu lub zapisać model jako domyślny podczas dodawania nowego elementu bibliotecznego. Przed zastąpieniem istniejącego szablonu Custom pyta o zgodę. Podczas zwykłej pracy ze schematem lub symbolami zachowuje dostarczone wartości domyślne.

Aby poprosić o porównanie bez wprowadzania zmian, wpisz: „Znajdź dołączony model SPICE dla Q1. Porównaj kolejność jego wyprowadzeń i ograniczenia z zamierzonym elementem. Pozostaw rysunek bez zmian”.

Aby poprosić o zmianę, wpisz: „Dołącz model 2N3904 z pakietu do Q1 po sprawdzeniu przypisania jego fizycznych wyprowadzeń. Pokaż źródło i wszelkie założenia”.

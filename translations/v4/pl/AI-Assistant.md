---
layout: default
---
# Asystent AI
{: #ai-assistant}

Asystent AI TinyCAD przekształca instrukcje tekstowe, karty katalogowe i obrazy układów w edytowalne symbole i rysunki. Działa obok zwykłego edytora: możesz poprosić go o utworzenie układu, dodanie elementów do aktualnie otwartego rysunku, zbudowanie biblioteki symboli lub wyjaśnienie istniejącego połączenia.

**Tylko na komputerze:** Asystent AI (chatbot) jest dostępny wyłącznie w aplikacji TinyCAD Desktop. Nie jest dostępny w wersji przeglądarkowej.

Aby z niego skorzystać, otwórz **Chat** na pasku narzędzi aplikacji Desktop. Przed wysłaniem pierwszej wiadomości połącz się z dostawcą AI; dostępne opcje połączenia opisano poniżej.

## Co potrafi
{: #what-it-can-do}

| Zadanie | Jak pomaga asystent |
| --- | --- |
| **Utworzenie symbolu elementu** | Generuje edytowalną grafikę, fizyczne numery wyprowadzeń, nazwy wyprowadzeń i typy elektryczne na podstawie określonego elementu i obudowy. Jeśli istotny jest układ wyprowadzeń, dołącz kartę katalogową producenta. |
| **Utworzenie lub rozszerzenie biblioteki symboli** | Dodaje kilka wielokrotnego użytku elementów do biblioteki `.tclib` otwartej do edycji, wraz z nazwami, opisami i przypisaniami wyprowadzeń. Większe zbiory można tworzyć w kolejnych partiach. |
| **Narysowanie układu** | Wyszukuje odpowiednie symbole, umieszcza elementy, ustawia wartości i oznaczenia, łączy wyprowadzenia przewodami i etykietami oraz dodaje objaśniające uwagi. |
| **Rozszerzenie istniejącego rysunku** | Dodaje złącze, kondensator odsprzęgający, czujnik, sterownik lub inny blok funkcjonalny, pozostawiając resztę rysunku bez zmian. |
| **Objaśnienie lub kontrola układu** | Odczytuje bieżący rysunek i listę sieci, opisuje ścieżki sygnałowe, wskazuje wyprowadzenia w sieci oraz bada problemy z połączeniami lub błędy kontroli reguł projektowych. |
| **Odtworzenie rysunku z dokumentu** | Odczytuje dołączony plik PDF lub obraz układu i tworzy edytowalny szkic początkowy, dopytując o niejasne elementy lub połączenia. |
| **Uporządkowanie rozmieszczenia** | Zmienia układ całego arkusza lub określonej jego części, korzystając z funkcji rozmieszczania i kontroli połączeń TinyCAD. |
| **Eksport wyniku** | Tworzy plik rysunku lub biblioteki symboli do pobrania, jeśli wyraźnie o to poprosisz. |

Wynikiem są obiekty TinyCAD, które możesz zaznaczać, edytować, łączyć przewodami i zapisywać. Na rysunku nowo utworzone symbole są umieszczane i gotowe do podłączenia. W bibliotece nowe elementy stają się jej pozycjami. Nie musisz kopiować kodu XML z rozmowy ani konfigurować osobnego serwera MCP.

Asystent najpierw przeszukuje [dołączone biblioteki](../Bundled-Libraries/), a w razie potrzeby szuka w publicznym zbiorze TinyCAD.net. Może przeszukiwać dołączone zbiory, które nie są aktualnie wybrane w selektorze bibliotek. Wyszukiwanie symboli publicznych wymaga połączenia z internetem, także w przypadku korzystania z lokalnego modelu AI.

W przypadku części wielokrotnego użytku najpierw [utwórz lub otwórz bibliotekę niestandardową do edycji](../Custom-symbol-libraries/), a następnie otwórz Chat w oknie tej biblioteki. W przypadku układu pozostaw aktywne docelowe okno rysunku. Powiedz asystentowi, o który arkusz, oznaczenia elementów lub blok funkcjonalny chodzi. Bieżące pobieranie i umieszczanie symboli przez AI obsługuje **symbole jednokrotne**; w przypadku części wielosekcyjnych, których asystent nie może zaimportować, użyj zwykłego edytora symboli.

{% include video-player.html src="/v4/videos/ai-assistant/ai-assistant-demo.mp4" poster="/v4/Images/ai-assistant/chat-open-desktop.png" caption="Utwórz symbol na podstawie karty katalogowej w TinyCAD Desktop. Oczekiwanie na przetwarzanie AI jest przedstawiane z prędkością 12× i oznaczone na ekranie; interakcje i wyniki są przedstawiane z normalną prędkością." %}

## Konfiguracja połączenia
{: #set-up-a-connection}

### 1. Wybierz dostawcę
{: #choose-a-provider}

1. Otwórz **Chat** na pasku narzędzi.
2. Kliknij **Click here to Sign in to use AI** lub ikonę koła zębatego **AI settings** w nagłówku panelu.
3. W kroku **Step 1 — Choose provider** wybierz dostawcę, a następnie kliknij **Next**.

![Ustawienia AI z widocznym krokiem wyboru dostawcy](../Images/ai-assistant/setup-provider.png)

Jednocześnie możesz połączyć się z jednym dostawcą.

| Dostawca w TinyCAD | Co jest potrzebne |
| --- | --- |
| **ChatGPT** | Kwalifikujące się płatne konto ChatGPT, połączone przez **Sign In with ChatGPT**, albo klucz API OpenAI wprowadzony przez **Use API Key**. Logowanie do konta jest dostępne w aplikacji Desktop. |
| **Anthropic Claude** | Klucz API z [Claude Console](https://platform.claude.com/settings/keys), dostęp do API oraz rozliczenia za używane modele. |
| **Google Gemini** | Klucz API z [Google AI Studio](https://aistudio.google.com/apikey). Niektóre modele mają ograniczony bezpłatny poziom API; obowiązują warunki dostępności i limity. |
| **OpenAI compatible** | Klucz API usługi, bazowy adres URL API oraz model obsługujący wywoływanie narzędzi. |
| **Ollama (hosted locally)** | Działający lokalny serwer Ollama i zainstalowany model obsługujący narzędzia. Modele lokalne nie wymagają klucza API. |

Subskrypcja zwykłej witryny czatu dostawcy nie zapewnia automatycznie rozliczeń API ani klucza API. Jawna opcja logowania do konta ChatGPT jest odrębną metodą połączenia. W przypadku Gemini kreator używa klucza API; zalogowanie się do magazynu Google Drive w TinyCAD nie łączy asystenta AI.

### 2. Połącz konto lub klucz API
{: #connect-an-account-or-api-key}

#### Używanie konta ChatGPT
{: #use-a-chatgpt-account}

W TinyCAD Desktop wybierz **ChatGPT**, a następnie **Sign In with ChatGPT** w kroku 2.

1. Kliknij **Sign in with ChatGPT**. Zaloguj się w zewnętrznej przeglądarce.
2. Po wyświetleniu monitu zaakceptuj korzystanie z planu ChatGPT. Samo zalogowanie się bez włączenia korzystania z planu nie wystarczy do wysyłania zapytań AI.
3. Wróć do TinyCAD i wybierz model, gdy kreator przejdzie do kroku 3.

Jeśli zapamiętano konto, ekran wyświetli opcję **Continue as …** lub **Sign in with a different account**. TinyCAD przechowuje jednocześnie jedno konto. Po połączeniu nad polem wiadomości pojawią się opcje **Using ChatGPT plan** i **Manage usage**. Informacja wyświetlana przy pierwszym użyciu wyjaśnia, że zapytania wykorzystują limit planu lub dostępne środki.

![Ustawienia AI w wersji Desktop z opcją Sign In with ChatGPT lub Use API Key](../Images/ai-assistant/setup-chatgpt-desktop.png)

Logowanie do ChatGPT wymaga kwalifikującego się płatnego konta; nadal obowiązują limity konta, obszaru roboczego i aplikacji. W razie odrzucenia zapytania nie następuje po cichu przełączenie na rozliczenia kluczem API. Informacje o połączeniu z planem konta znajdziesz w dokumentacji OpenAI [Sign in with ChatGPT](https://developers.openai.com/siwc/token-sharing-open-source).

#### Używanie klucza API
{: #use-an-api-key}

1. Utwórz klucz, korzystając z odnośnika dostawcy wyświetlonego w kroku 2. Sprawdź, czy projekt lub konto ma dostęp do modeli, których chcesz używać.
2. W przypadku **ChatGPT** wybierz **Use API Key**. Pozostali dostawcy hostowani wyświetlają bezpośrednio stronę wprowadzania klucza.
3. Wklej klucz w polu **API key**. Jest on zamaskowany; w razie potrzeby opcja **Show API key** wyświetli go podczas wpisywania.
4. W przypadku **OpenAI compatible** wprowadź również **API base URL** usługi.
5. Kliknij **Next**. TinyCAD sprawdzi połączenie i automatycznie pobierze dostępne modele.

![Pole wprowadzania klucza API ChatGPT z zamaskowanym kluczem i instrukcjami dostawcy](../Images/ai-assistant/setup-api-key.png)

Jeśli punkt końcowy nie potrafi wyświetlić listy modeli, w kroku 2 TinyCAD poprosi o **Model ID**. Wprowadź dokładny identyfikator dostawcy i ponownie kliknij **Next**; krótkie powitanie sprawdzi połączenie. Te testy mogą wykorzystywać limit dostawcy. Jeśli połączenie się nie powiedzie, pozostaniesz w kroku 2 i zostanie wyświetlony błąd.

W przypadku Gemini utwórz lub wybierz projekt w Google AI Studio i skopiuj jego klucz API do TinyCAD. Na stronie Google [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing) wyjaśniono, które modele i sposoby korzystania kwalifikują się do bezpłatnego poziomu. Płatne modele lub większe użycie mogą wymagać włączenia rozliczeń.

![Konfiguracja Google Gemini z odnośnikiem do klucza Google AI Studio](../Images/ai-assistant/setup-gemini.png)

### 3. Wybierz model i poziom rozumowania
{: #pick-a-model-and-thinking-level}

Po pomyślnym połączeniu wybierz model w kroku **Step 3 — Pick Model**, dostosuj opcję **Thinking**, a następnie kliknij **Finish**.

![Wybór modelu i suwak Thinking w ostatnim kroku konfiguracji](../Images/ai-assistant/setup-model.png)

Lista modeli na ilustracji jest przykładowa; dostępne modele zależą od dostawcy, punktu końcowego i konta. ChatGPT wyświetla obsługiwane modele Sol, Luna i Astra zwrócone przez używane połączenie. Najnowsze wersje są wyświetlane jako pierwsze, starsze znajdują się w sekcji **More models**, a do sześciu ostatnio używanych modeli jest zapamiętywanych.

Wybierz model obsługujący **narzędzia**, aby mógł analizować i edytować dokumenty TinyCAD. Do interpretowania obrazów układów lub kart katalogowych zawierających diagramy wybierz również model obsługujący **widzenie**. Zwykły tekstowy punkt końcowy czatu nie wystarczy do każdego zadania.

Opcja **Thinking** obejmuje poziomy od **Minimal** do **Max** i domyślnie jest ustawiona na **Medium**. Dostępne poziomy zależą od dostawcy. Wyższe ustawienia mogą działać dłużej i zużywać większy limit; Max oznacza najwyższe ustawienie obsługiwane przez danego dostawcę. Model i poziom rozumowania możesz zmieniać między odpowiedziami za pomocą ikony modelu obok pola wiadomości.

### Alternatywa: użyj lokalnego Ollama
{: #alternative-use-local-ollama}

1. [Zainstaluj Ollama](https://ollama.com/download) i uruchom jego serwer.
2. Pobierz model [obsługujący wywoływanie narzędzi](https://docs.ollama.com/capabilities/tool-calling), używając `ollama pull MODEL_NAME` z rzeczywistą nazwą modelu. W przypadku zadań z obrazami/PDF sprawdź również obsługę widzenia i pojemność kontekstu.
3. W kroku wyboru dostawcy w TinyCAD wybierz **Ollama (hosted locally)**.
4. Użyj **Ollama API URL**, zwykle `http://localhost:11434/v1`, a następnie kliknij **Next**, aby wyświetlić listę zainstalowanych modeli.
5. Wybierz model i poziom rozumowania, a następnie kliknij **Finish**.

![Konfiguracja Ollama z lokalnym adresem URL API i wskazówkami dotyczącymi źródła przeglądarki](../Images/ai-assistant/setup-ollama.png)

Połączenie Ollama akceptuje adresy URL localhost/loopback. W przypadku zdalnego serwera wybierz **OpenAI compatible**. Zapewnij lokalnemu modelowi wystarczający kontekst do obsługi rozmowy i narzędzi TinyCAD; zobacz [konfigurację kontekstu Ollama](https://docs.ollama.com/api/openai-compatibility#setting-the-local-context-size).

Żądania do lokalnego Ollama trafiają bezpośrednio do serwera lokalnego. Aby wnioskowanie odbywało się lokalnie, wybierz model uruchomiony lokalnie: modele chmurowe skonfigurowane przez serwer Ollama nadal mogą korzystać z usługi chmurowej.

## Korzystanie z asystenta podczas rysowania
{: #use-the-assistant-while-drawing}

Wpisz polecenie w polu wiadomości i kliknij **Send** lub naciśnij **Enter**. Użyj **Shift+Enter**, aby rozpocząć nowy wiersz. Zacznij od ograniczonego zadania, sprawdź wynik, a następnie poproś o kolejną zmianę.

![Połączony panel czatu z przykładowym poleceniem gotowym do wysłania](../Images/ai-assistant/chat-ready.png)

Precyzyjnie określ arkusz docelowy, oznaczenia elementów, wartości i połączenia. „Połącz górne wyprowadzenie R2 z OUT na arkuszu Control” łatwiej sprawdzić niż „napraw przewód”. Rozszerzając istniejący układ, powiedz, co ma pozostać bez zmian.

Asystent może sprawdzać niezapisane treści w edytorze. Po sprawdzeniu jego pracy zapisz rysunek lub bibliotekę w zwykły sposób. Rysunki zawierają osadzone symbole; zapisz definicje wielokrotnego użytku w bibliotece niestandardowej, jeśli chcesz używać ich ponownie w innych projektach.

Sekcja **Working** grupuje działania narzędzi i aktualizacje pośrednie w zwijanym wierszu. Otwórz ją, aby zobaczyć szczegóły postępu, wyniki narzędzi i wszelkie obrazy analizowane przez model. Odpowiedź końcowa jest wyświetlana osobno. Jeśli połączenie to obsługuje, asystent może wyświetlać podsumowania rozumowania dostarczone przez dostawcę; nie jest to ustawienie ujawniające każdy wewnętrzny etap rozumowania.

Użyj **Stop**, aby anulować bieżące żądanie. Zmiany już zastosowane pozostaną w dokumencie. **Undo** i **Redo** działają dla edycji AI tak samo jak przy zwykłej edycji; wieloetapowe żądanie może wprowadzić kilka zmian, które można cofnąć. Jeśli edytujesz rysunek podczas pracy asystenta, późniejszy zapis może zostać odrzucony, ponieważ jego źródło jest nieaktualne. Poproś asystenta o ponowne odczytanie rysunku i kontynuowanie pracy.

Ikona **New chat** w nagłówku czyści rozmowę, wersję roboczą i załączniki. Nie cofa zmian na rysunku. Zmiana modelu zachowuje rozmowę; połączenie z innym dostawcą lub kluczem rozpoczyna nowy czat.

### Dołączanie kart katalogowych i obrazów układów
{: #attach-datasheets-and-circuit-images}

Użyj opcji **Import PDF/image** obok przycisków sterujących wiadomością, aby dołączyć pliki PDF, PNG, JPEG lub WebP. Możesz dołączyć maksymalnie **sześć plików o łącznym rozmiarze 10 MiB**; obowiązują również limity dostawcy. Podaj dokładną odmianę elementu, obudowę i istotne strony PDF, a także zaznacz, czy diagram wyprowadzeń przedstawia widok z góry, czy z dołu.

W przypadku zgodnych punktów końcowych i Ollama opcja **PDF pages** pozwala wybrać strony do lokalnego przekształcenia, na przykład `1-4,12`; pozostaw pole puste, aby uwzględnić wszystkie strony w limicie konwersji wynoszącym 20 stron. Wybierz mniej stron, jeśli przekształcone obrazy przekroczą 10 MiB. ChatGPT/OpenAI, Claude i Gemini otrzymują pliki PDF bezpośrednio. Możliwość odczytywania diagramów nadal zależy od wybranego modelu.

Wyszukiwanie w publicznej bibliotece symboli TinyCAD jest dostępne niezależnie od ogólnego przeglądania internetu. Natywne wyszukiwanie w sieci jest dostępne dla uprawnionych połączeń **Sign in with ChatGPT**, jeśli pozwalają na to zasady modelu/konta; odnośniki do źródeł są wyświetlane w odpowiedzi. Połączenia oparte na kluczu API oraz pozostali dostawcy nie uzyskują obecnie ogólnego wyszukiwania w sieci przez TinyCAD. Jeśli asystent nie może otworzyć witryny producenta, dołącz kartę katalogową lub odpowiedni obraz.

## Przykładowe polecenia
{: #example-prompts}

Potraktuj je jako punkt wyjścia. Zastąp element, obudowę, numery wyprowadzeń i wymagania dotyczące zasilania danymi odpowiednimi dla swojego projektu.

### Tworzenie symbolu na podstawie karty katalogowej
{: #create-a-symbol-from-a-datasheet}

Otwórz docelowy rysunek i dołącz kartę katalogową:

> Utwórz zwarty symbol układu NE555P w 8-wyprowadzeniowej obudowie PDIP na podstawie tej karty katalogowej. Zweryfikuj każdy fizyczny numer wyprowadzenia, nazwę i typ elektryczny. Najpierw wyszukaj istniejące symbole. Umieść wyprowadzenia zasilania u góry, a masę na dole, zweryfikuj symbol i umieść go na tym rysunku, gotowego do połączenia przewodami. Wskaż wszystko, czego nie możesz zweryfikować.

W przypadku modułu fizycznego zamiast tradycyjnego obrysu układu scalonego:

> Korzystając z dołączonego diagramu wyprowadzeń tej konkretnej wersji płytki czujnika, utwórz edytowalny symbol przedstawiający obrys PCB i opisane styki złącza w ich fizycznej kolejności. Zadbaj, aby był na tyle zwarty, by zmieścił się na planie połączeń A4. Umieść punkty połączeń na padach złącza i użyj małej ikony temperatury, aby wskazać jego funkcję.

### Budowanie biblioteki wielokrotnego użytku
{: #build-a-reusable-library}

Najpierw utwórz lub otwórz bibliotekę `.tclib` do edycji:

> Dodaj niewielką bibliotekę jednokrotnych elementów interfejsu: PC817 w DIP-4, ULN2003A w DIP-16 oraz 4-torowe złącze śrubowe 2,54 mm. Użyj dołączonych kart katalogowych, aby określić mapowanie wyprowadzeń układów scalonych. Nadaj każdemu elementowi czytelną nazwę, opis i prefiks oznaczenia, zweryfikuj go i dodaj do tej otwartej biblioteki. Zachowaj symbol, który obecnie edytuję.

Po sprawdzeniu pierwszej partii kontynuuj, dodając następną. Zapisz `.tclib` w zwykły sposób albo wyraźnie poproś o bibliotekę do pobrania, jeśli tego potrzebujesz.

### Tworzenie kompletnego układu
{: #create-a-complete-circuit}

> Na bieżącym arkuszu narysuj astabilny generator NE555 zasilany napięciem 5 V, używając elementu PDIP-8. Uzyskaj częstotliwość około 1 Hz. Uwzględnij rezystory i kondensator czasowy, połączenie resetu, kondensator na wyprowadzeniu sterującym, odsprzęganie zasilania oraz diodę LED na wyjściu z rezystorem ograniczającym prąd. Wyjaśnij obliczony czas, sprawdź fizyczne połączenia wyprowadzeń i uporządkuj rozmieszczenie. Wymień założenia i wszelkie nierozwiązane problemy kontroli reguł projektowych.

To polecenie dotyczy edytowalnego projektu i obliczeń. Aby ustalić symulowane zachowanie, sprawdź modele i samodzielnie użyj funkcji [Simulation](../Simulation/); przekonujące objaśnienie AI nie jest zarejestrowanym przebiegiem symulacji.

### Wyszukiwanie lub dołączanie modelu SPICE
{: #find-or-attach-a-spice-model}

Wyraźnie poproś o obsługę SPICE lub symulacji. Asystent może wyszukać [dołączone modele SPICE](../Bundled-SPICE-Models/) bez przeszukiwania sieci oraz sprawdzić ich źródła, założenia i kolejność zacisków. Jeśli dokładny model jest niedostępny, poproś o ocenę udokumentowanego zamiennika typu drop-in lub przybliżenia ogólnego. Niezależnie potwierdź układ wyprowadzeń obudowy.

> Znajdź dołączony model SPICE dla Q1 i wyjaśnij, jak jego zaciski odpowiadają symbolowi. Pozostaw rysunek bez zmian, dopóki nie sprawdzę źródła i założeń.

Aby zmienić rysunek, poproś asystenta o dołączenie modelu po sprawdzeniu przypisania wyprowadzeń. Jeśli poprosisz go o zbudowanie elementu bibliotecznego wielokrotnego użytku z obsługą SPICE, może ustawić definicję dołączoną lub niestandardową do przyszłych wstawień.

### Dodawanie elementów bez ponownego rysowania układu
{: #add-parts-without-redrawing-the-circuit}

> Dodaj kondensator odsprzęgający 100 nF między zasilaniem U1 a masą, blisko U1. Przed połączeniem określ rzeczywiste wyprowadzenia zasilania. Pozostaw resztę układu, oznaczenia i wartości bez zmian, a następnie sprawdź zmienione sieci.

> Dodaj opisane złącze 4-stykowe dla +3V3, GND, SDA i SCL na arkuszu Sensors. Połącz SDA i SCL z istniejącymi opisanymi sieciami. Wykorzystaj istniejące rezystory podciągające, jeśli są obecne, i przed dodaniem jakichkolwiek nowych poinformuj mnie, czy są potrzebne dodatkowe rezystory podciągające.

### Odtwarzanie załączonego diagramu
{: #reconstruct-an-attached-diagram}

> Odtwórz układ ze strony 3 załączonego pliku PDF jako edytowalne elementy TinyCAD i przewody na nowym arkuszu. Zachowaj przedstawione wartości i etykiety. Zamiast zgadywać, zapytaj o nieczytelne wartości lub niejednoznaczne skrzyżowania przewodów. Porównaj odtworzone sieci z obrazem i uporządkuj gotowy arkusz.

### Objaśnianie, sprawdzanie lub ulepszanie istniejącego rysunku
{: #explain-inspect-or-improve-an-existing-drawing}

> Wyjaśnij ścieżkę sygnałową od J1 do U2 i wymień elementy oraz fizyczne wyprowadzenia podłączone do OUT. Nie zmieniaj rysunku.

> Sprawdź bieżący rysunek pod kątem niepodłączonych wymaganych wyprowadzeń, sprzecznych wyjść i niespójnych etykiet zasilania. Dla każdego problemu podaj arkusz i oznaczenie elementu oraz zaproponuj zmiany przed ich zastosowaniem.

> Uporządkuj tylko blok sterownika silnika wokół U3 i J4. Zachowaj jego połączenia i wartości bez zmian, a blok wejścia zasilania pozostaw na miejscu.

## Ustawienia, prywatność i zapisywanie
{: #settings-privacy-and-saving}

Ikona koła zębatego **AI settings** pokazuje bieżącego dostawcę i metodę połączenia, a także elementy sterujące modelem/rozumowaniem i opcję **Save**. W przypadku połączenia kluczem dostępna jest opcja **Clear API key**; dla konta ChatGPT — **Sign out**; dla lokalnego Ollama — **Disconnect Ollama**. Odłącz bieżące połączenie przed skonfigurowaniem innego dostawcy. Opcja **Cancel** zachowuje istniejące połączenie i zapisane ustawienia.

![Ustawienia AI dla istniejącego połączenia kluczem API](../Images/ai-assistant/connection-settings.png)

Klucze API i historia rozmowy pozostają w pamięci aplikacji; klucze nie są zapisywane wraz z preferencjami ani rysunkami. Po ponownym załadowaniu lub uruchomieniu aplikacji trzeba ponownie wprowadzić klucz API. Niejawne dane dostawcy, punkt końcowy, model i preferencje rozumowania mogą być zapamiętywane. Autoryzacja konta ChatGPT jest zarządzana oddzielnie przez lokalne środowisko uruchomieniowe i może przetrwać ponowne uruchomienie; wersja Desktop używa bezpiecznego szyfrowania systemu operacyjnego, jeśli jest dostępne.

W przypadku hostowanego AI wiadomości, załączniki oraz treść dokumentu lub podglądy żądane przez jego narzędzia są wysyłane do wybranego dostawcy. Połączenia hostowane kluczem API wysyłają żądania bezpośrednio do wybranego punktu końcowego; TinyCAD nie pośredniczy w komunikacji z dostawcą. Zgodne usługi muszą zezwalać na dostęp z przeglądarki (CORS) i zwykle używać HTTPS; wyjątkiem jest localhost. Aby pracować całkowicie lokalnie, użyj lokalnego modelu Ollama i dostarczonych lokalnych dokumentów źródłowych oraz unikaj wyszukiwania symboli w sieci i modeli chmurowych.

Wygenerowane elementy i układy nadal wymagają sprawdzenia przez inżyniera. Zweryfikuj dokładne przypisanie wyprowadzeń obudowy, moce znamionowe, napięcie zasilania, poziomy logiczne i graniczne warunki pracy na podstawie rzeczywistych kart katalogowych. Walidacja strukturalna TinyCAD, kontrole reguł projektowych i kontrole połączeń w układzie pomagają wykrywać błędy; nie dowodzą, że układ działa, nie zastępują symulacji ani nie potwierdzają przetestowania sprzętu.

## Rozwiązywanie problemów
{: #troubleshooting}

| Objaw | Co sprawdzić |
| --- | --- |
| **Czat jest niedostępny lub go brakuje** | Użyj aktualnej wersji TinyCAD v4. Otwórz docelowy rysunek lub bibliotekę i poszukaj opcji Chat na pasku narzędzi. |
| **Logowanie do konta ChatGPT jest niedostępne** | Użyj wersji Desktop albo lokalnie hostowanej kompilacji ze środowiskiem uruchomieniowym konta. W publicznej aplikacji hostowanej wybierz Use API Key. Zezwól na otwarcie zewnętrznego okna logowania i włącz korzystanie z planu ChatGPT podczas wyrażania zgody. |
| **Nie można przejść dalej z kroku 2** | Odczytaj komunikat o błędzie połączenia. Sprawdź klucz, dostęp do modelu, rozliczenia/limit API, adres URL punktu końcowego i połączenie z internetem. TinyCAD przeprowadza tę kontrolę po kliknięciu Next. |
| **Nie pojawiają się modele** | Sprawdź dostęp u dostawcy. W przypadku punktów końcowych bez wykrywania modeli wprowadź żądany Model ID. Przed połączeniem Ollama zainstaluj model obsługujący narzędzia. |
| **Nie można połączyć się z lokalnym Ollama** | Uruchom serwer, sprawdź lokalny adres URL API, zezwól na dokładne źródło TinyCAD przez OLLAMA_ORIGINS, uruchom ponownie Ollama i zezwól na dostęp przeglądarki do sieci lokalnej, jeśli pojawi się monit. |
| **Asystent odpowiada, ale nie może edytować ani odczytywać obrazów** | Sprawdź obsługę narzędzi/widzenia przez model. Dołącz czytelny wycinek lub mniej stron PDF. |
| **Narzędzie zgłasza, że rysunek uległ zmianie** | Pozwól asystentowi ponownie odczytać bieżący stan i spróbuj ponownie. Wcześniej zastosowane zmiany nadal można cofnąć za pomocą Undo. |
| **Odpowiedź urywa się z powodu limitu dostawcy** | Spróbuj podzielić zadanie na mniejsze lub obniżyć poziom rozumowania. TinyCAD może automatycznie ponawiać niekompletne odpowiedzi; ponowienia mogą zużywać dodatkowy limit. Zakończone edycje nadal można cofnąć. |

Kontynuuj, korzystając z tematów [biblioteki symboli niestandardowych](../Custom-symbol-libraries/), [edycja symboli](../Editing-a-Symbol/), [porządkowanie rozmieszczenia](../Layout-Tidy-Up/) lub [symulacja](../Simulation/).

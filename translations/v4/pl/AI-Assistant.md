---
layout: default
---
# Asystent AI
{: #ai-assistant}

Asystent AI TinyCAD przekształca instrukcje tekstowe, karty katalogowe i obrazy obwodów w edytowalne symbole i rysunki. Działa równolegle ze zwykłym edytorem: możesz poprosić go o utworzenie obwodu, dodanie elementów do już otwartego rysunku, zbudowanie biblioteki symboli lub wyjaśnienie istniejącego połączenia.

**Tylko aplikacja Desktop:** Asystent AI (chatbot) jest dostępny wyłącznie w aplikacji TinyCAD Desktop. Nie jest dostępny w wersji przeglądarkowej.

Aby z niego skorzystać, otwórz **Chat** na pasku narzędzi aplikacji Desktop. Przed wysłaniem pierwszej wiadomości połącz się z dostawcą AI; dostępne opcje połączenia opisano poniżej.

## Co potrafi
{: #what-it-can-do}

| Zadanie | Jak pomaga asystent |
| --- | --- |
| **Utworzenie symbolu komponentu** | Generuje edytowalną grafikę, fizyczne numery wyprowadzeń, nazwy wyprowadzeń i typy elektryczne na podstawie określonego komponentu i obudowy. Jeśli istotne jest przypisanie wyprowadzeń, dołącz kartę katalogową producenta. |
| **Utworzenie lub rozszerzenie biblioteki symboli** | Dodaje kilka komponentów wielokrotnego użytku do biblioteki `.tclib` otwartej do edycji, wraz z nazwami, opisami i przypisaniami wyprowadzeń. Większe zestawy można tworzyć w kolejnych partiach. |
| **Narysowanie obwodu** | Wyszukuje odpowiednie symbole, umieszcza komponenty, ustawia wartości i oznaczenia, łączy wyprowadzenia przewodami i etykietami oraz dodaje objaśniające uwagi. |
| **Rozszerzenie istniejącego rysunku** | Dodaje złącze, kondensator odsprzęgający, czujnik, sterownik lub inny blok funkcjonalny, zachowując pozostałą część rysunku. |
| **Objaśnienie lub sprawdzenie obwodu** | Odczytuje bieżący rysunek i listę sieci, opisuje ścieżki sygnałów, identyfikuje wyprowadzenia w sieci oraz bada połączenia lub błędy kontroli reguł projektowych. |
| **Odtworzenie rysunku z dokumentu** | Odczytuje załączony plik PDF lub obraz obwodu i tworzy edytowalny szkic, pytając o niejasne elementy lub połączenia. |
| **Uporządkowanie układu** | Zmienia rozmieszczenie na całym arkuszu lub w jego określonej części, korzystając z kontroli układu i połączeń TinyCAD. |
| **Eksport wyniku** | Tworzy rysunek lub bibliotekę symboli do pobrania, gdy wyraźnie poprosisz o plik. |

Wynikiem są obiekty TinyCAD, które można zaznaczać, edytować, łączyć przewodami i zapisywać. Na rysunku nowo utworzone symbole są umieszczane w gotowości do połączenia. W bibliotece nowe komponenty stają się jej pozycjami. Nie trzeba kopiować kodu XML z rozmowy ani konfigurować oddzielnego serwera MCP.

Asystent najpierw przeszukuje [dołączone biblioteki](../Bundled-Libraries/), a w razie potrzeby następnie publiczny zbiór TinyCAD.net. Może przeszukiwać dołączone kolekcje, które nie są obecnie wybrane w selektorze biblioteki. Wyszukiwanie symboli publicznych wymaga połączenia z internetem, także podczas korzystania z lokalnego modelu AI.

Aby tworzyć komponenty wielokrotnego użytku, najpierw [utwórz lub otwórz bibliotekę niestandardową do edycji](../Custom-symbol-libraries/), a następnie otwórz Chat w oknie tej biblioteki. W przypadku obwodu aktywne powinno być zamierzone okno rysunku. Powiedz asystentowi, o który arkusz, oznaczenia komponentów lub blok funkcjonalny chodzi. Bieżące pobieranie i umieszczanie symboli AI obsługuje **symbole jednokrotkowe**; w przypadku części wielokrotkowych, których asystent nie potrafi zaimportować, użyj zwykłego edytora symboli.

{% include video-player.html src="/v4/videos/ai-assistant/ai-assistant-demo.mp4" poster="/v4/images/ai-assistant/chat-open-desktop.png" caption="Tworzenie symbolu na podstawie karty katalogowej w TinyCAD Desktop. Oczekiwanie na przetwarzanie AI jest pokazywane z prędkością 12× i oznaczane na ekranie; interakcje i wyniki są pokazywane z normalną prędkością." %}

## Konfigurowanie połączenia
{: #set-up-a-connection}

### 1. Wybierz dostawcę
{: #choose-a-provider}

1. Otwórz **Chat** na pasku narzędzi.
2. Kliknij **Kliknij tutaj, aby zalogować się i korzystać z AI** (Click here to Sign in to use AI) albo ikonę koła zębatego **Ustawienia AI** (AI settings) w nagłówku panelu.
3. W sekcji **Krok 1 — Wybierz dostawcę** (Step 1 — Choose provider) wybierz dostawcę, a następnie kliknij **Dalej** (Next).

![Ustawienia AI z widocznym krokiem wyboru dostawcy](../images/ai-assistant/setup-provider.png)

Możesz jednocześnie połączyć się tylko z jednym dostawcą.

| Dostawca w TinyCAD | Wymagania |
| --- | --- |
| **ChatGPT** | Kwalifikujące się płatne konto ChatGPT z opcją **Zaloguj się przez ChatGPT** (Sign In with ChatGPT) albo klucz API OpenAI z opcją **Użyj klucza API** (Use API Key). Logowanie na konto jest dostępne w aplikacji Desktop. |
| **Anthropic Claude** | Klucz API z [Claude Console](https://platform.claude.com/settings/keys), dostęp do API i rozliczenia za używane modele. |
| **Google Gemini** | Klucz API z [Google AI Studio](https://aistudio.google.com/apikey). Niektóre modele mają ograniczony bezpłatny poziom API; obowiązują ograniczenia dostępności i limity. |
| **Zgodny z OpenAI** | Klucz API usługi, jej podstawowy adres URL API i model obsługujący wywoływanie narzędzi. |
| **Ollama (lokalny hosting)** | Działający lokalny serwer Ollama i zainstalowany model obsługujący narzędzia. Lokalne modele nie wymagają klucza API. |

Subskrypcja zwykłej witryny czatu dostawcy nie zapewnia automatycznie rozliczeń API ani klucza API. Jawna opcja logowania na konto ChatGPT jest odrębną metodą połączenia. W przypadku Gemini kreator używa klucza API; logowanie do magazynu Google Drive w TinyCAD nie łączy z asystentem AI.

### 2. Połącz konto lub klucz API
{: #connect-an-account-or-api-key}

#### Użycie konta ChatGPT
{: #use-a-chatgpt-account}

W TinyCAD Desktop wybierz **ChatGPT**, a następnie **Zaloguj się przez ChatGPT** (Sign In with ChatGPT) w kroku 2.

1. Kliknij **Zaloguj się przez ChatGPT** (Sign in with ChatGPT). Zaloguj się w zewnętrznej przeglądarce.
2. Gdy pojawi się monit, zezwól na korzystanie z planu ChatGPT. Samo zalogowanie bez włączenia korzystania z planu nie wystarczy do wysyłania zapytań AI.
3. Wróć do TinyCAD i wybierz model, gdy kreator przejdzie do kroku 3.

Jeśli konto zostało zapamiętane, na ekranie pojawią się opcje **Kontynuuj jako …** (Continue as …) lub **Zaloguj się na inne konto** (Sign in with a different account). TinyCAD przechowuje jednocześnie jedno konto. Po nawiązaniu połączenia nad polem wiadomości pojawią się **Korzystasz z planu ChatGPT** (Using ChatGPT plan) i **Zarządzaj wykorzystaniem** (Manage usage). Komunikat przy pierwszym użyciu wyjaśnia, że zapytania korzystają z limitu planu lub dostępnych środków.

![Ustawienia AI Desktop z opcjami Zaloguj się przez ChatGPT lub Użyj klucza API](../images/ai-assistant/setup-chatgpt-desktop.png)

Logowanie do ChatGPT wymaga kwalifikującego się płatnego konta; nadal obowiązują limity konta, obszaru roboczego i aplikacji. W razie odrzucenia zapytania nie następuje niejawne przełączenie na rozliczanie kluczem API. Informacje o połączeniu z planem konta zawiera dokumentacja OpenAI [Logowanie przez ChatGPT](https://developers.openai.com/siwc/token-sharing-open-source).

#### Użycie klucza API
{: #use-an-api-key}

1. Utwórz klucz, korzystając z łącza dostawcy wyświetlonego w kroku 2. Sprawdź, czy projekt lub konto ma dostęp do modeli, których chcesz używać.
2. W przypadku **ChatGPT** wybierz **Użyj klucza API** (Use API Key). Pozostali dostawcy hostowani wyświetlają bezpośrednio stronę wprowadzania klucza.
3. Wklej klucz w polu **Klucz API** (API key). Jest zamaskowany; w razie potrzeby opcja **Pokaż klucz API** (Show API key) wyświetla go podczas wpisywania.
4. W przypadku **Zgodny z OpenAI** wprowadź również **Podstawowy adres URL API** (API base URL) usługi.
5. Kliknij **Dalej** (Next). TinyCAD sprawdzi połączenie i automatycznie pobierze dostępne modele.

![Wprowadzanie klucza API ChatGPT z zamaskowanym polem i instrukcjami dostawcy](../images/ai-assistant/setup-api-key.png)

Jeśli punkt końcowy nie może wyświetlić listy modeli, TinyCAD poprosi o **Identyfikator modelu** (Model ID) w kroku 2. Wprowadź dokładny identyfikator dostawcy i ponownie kliknij **Dalej** (Next); krótkie powitanie sprawdzi połączenie. Te sprawdzenia mogą zużywać limit dostawcy. W razie niepowodzenia połączenia kreator pozostaje w kroku 2 i wyświetla błąd.

W przypadku Gemini utwórz lub wybierz projekt w Google AI Studio i skopiuj jego klucz API do TinyCAD. Strona Google [Cennik Gemini API](https://ai.google.dev/gemini-api/docs/pricing) wyjaśnia, które modele i rodzaje użycia kwalifikują się do bezpłatnego poziomu. Płatne modele lub większe wykorzystanie mogą wymagać włączenia rozliczeń.

![Konfiguracja Google Gemini z łączem do klucza Google AI Studio](../images/ai-assistant/setup-gemini.png)

### 3. Wybierz model i poziom namysłu
{: #pick-a-model-and-thinking-level}

Po pomyślnym nawiązaniu połączenia wybierz model w sekcji **Krok 3 — Wybierz model** (Step 3 — Pick Model), dostosuj ustawienie **Namysł** (Thinking), a następnie kliknij **Zakończ** (Finish).

![Wybór modelu i suwak Namysł w ostatnim kroku konfiguracji](../images/ai-assistant/setup-model.png)

Lista modeli na tej ilustracji jest przykładowa; Twoja lista zależy od dostawcy, punktu końcowego i konta. ChatGPT pokazuje obsługiwane modele Sol, Luna i Astra zwrócone przez Twoje połączenie. Najnowsze wersje są wyświetlane jako pierwsze, starsze opcje znajdują się w sekcji **Więcej modeli** (More models), a do sześciu ostatnio używanych wyborów jest zapamiętywanych.

Wybierz model obsługujący **narzędzia**, aby mógł sprawdzać i edytować dokumenty TinyCAD. Do interpretowania obrazów obwodów lub kart katalogowych zawierających schematy wybierz również model obsługujący **obrazy**. Zwykły tekstowy punkt końcowy czatu nie wystarczy do każdego zadania.

**Namysł** (Thinking) ma zakres od **Minimalnego** (Minimal) do **Maksymalnego** (Max), a ustawieniem początkowym jest **Średni** (Medium). Dostępne poziomy zależą od dostawcy. Wyższe ustawienia mogą wydłużać czas odpowiedzi i zużywać więcej limitu; Max oznacza najwyższe ustawienie obsługiwane przez danego dostawcę. Model i poziom namysłu możesz zmieniać między odpowiedziami za pomocą ikony modelu obok pola wiadomości.

### Alternatywa: użyj lokalnego Ollama
{: #alternative-use-local-ollama}

1. [Zainstaluj Ollama](https://ollama.com/download) i uruchom jego serwer.
2. Pobierz model z [obsługą wywoływania narzędzi](https://docs.ollama.com/capabilities/tool-calling), używając `ollama pull MODEL_NAME` z rzeczywistą nazwą modelu. W przypadku zadań z obrazami/PDF sprawdź również obsługę obrazów i pojemność kontekstu.
3. W kroku wyboru dostawcy TinyCAD wybierz **Ollama (lokalny hosting)**.
4. Wprowadź **Adres URL API Ollama** (Ollama API URL), zwykle `http://localhost:11434/v1`, a następnie kliknij **Dalej** (Next), aby wyświetlić zainstalowane modele.
5. Wybierz model i poziom namysłu, a następnie kliknij **Zakończ** (Finish).

![Konfiguracja Ollama z lokalnym adresem URL API i wskazówkami dotyczącymi źródła przeglądarki](../images/ai-assistant/setup-ollama.png)

Połączenie Ollama akceptuje adresy URL localhost/loopback. W przypadku serwera zdalnego wybierz **Zgodny z OpenAI**. Zapewnij lokalnemu modelowi wystarczający kontekst rozmowy i narzędzi TinyCAD; zobacz [konfigurację kontekstu Ollama](https://docs.ollama.com/api/openai-compatibility#setting-the-local-context-size).

Zapytania do lokalnego Ollama trafiają bezpośrednio na lokalny serwer. Aby wnioskowanie odbywało się lokalnie, wybierz model działający lokalnie: modele chmurowe skonfigurowane przez serwer Ollama nadal mogą korzystać z usługi w chmurze.

## Korzystanie z asystenta podczas rysowania
{: #use-the-assistant-while-drawing}

Wpisz prośbę w polu wiadomości i kliknij **Wyślij** (Send) albo naciśnij **Enter**. Użyj **Shift+Enter**, aby rozpocząć nową linię. Zacznij od ograniczonego zakresu zadania, sprawdź wynik, a następnie poproś o kolejną zmianę.

![Połączony panel czatu z przykładową prośbą gotową do wysłania](../images/ai-assistant/chat-ready.png)

Precyzyjnie określ arkusz docelowy, oznaczenia, wartości i połączenia. „Połącz górną końcówkę R2 z OUT na arkuszu Control” łatwiej sprawdzić niż „napraw przewód”. Rozszerzając istniejący obwód, określ, co ma pozostać bez zmian.

Asystent może sprawdzać niezapisane zawartości edytora. Po sprawdzeniu jego pracy zapisz rysunek lub bibliotekę w zwykły sposób. Rysunki zawierają osadzone symbole; definicje wielokrotnego użytku zapisz w bibliotece niestandardowej, jeśli chcesz korzystać z nich ponownie w innych projektach.

Wiersz **Praca** (Working) grupuje aktywność narzędzi i pośrednie aktualizacje w zwijanej sekcji. Rozwiń ją, aby zobaczyć szczegóły postępu, wyniki narzędzi i ewentualne obrazy sprawdzane przez model. Odpowiedź końcowa jest wyświetlana oddzielnie. Jeśli połączenie to obsługuje, asystent może wyświetlać udostępniane przez dostawcę podsumowania procesu namysłu; nie jest to ustawienie ujawniające każdy wewnętrzny etap rozumowania.

Użyj opcji **Zatrzymaj** (Stop), aby anulować bieżące żądanie. Zmiany już zastosowane pozostają w dokumencie. Polecenia **Cofnij** (Undo) i **Ponów** (Redo) działają w przypadku edycji AI tak samo jak przy zwykłej edycji; wieloetapowe żądanie może utworzyć kilka zmian możliwych do cofnięcia. Jeśli edytujesz rysunek podczas pracy asystenta, późniejszy zapis może zostać odrzucony, ponieważ jego źródło jest nieaktualne. Poproś asystenta o ponowne odczytanie rysunku i kontynuowanie pracy.

Ikona **Nowy czat** (New chat) w nagłówku czyści rozmowę, wersję roboczą i załączniki. Nie cofa zmian na rysunku. Zmiana modelu zachowuje rozmowę; połączenie z innym dostawcą lub kluczem rozpoczyna nowy czat.

### Dołączanie kart katalogowych i obrazów obwodów
{: #attach-datasheets-and-circuit-images}

Użyj opcji **Importuj PDF/obraz** (Import PDF/image) obok elementów sterujących wiadomością, aby dołączyć pliki PDF, PNG, JPEG lub WebP. Możesz dołączyć maksymalnie **sześć plików o łącznym rozmiarze 10 MiB**; obowiązują również limity dostawcy. Poproś o konkretny wariant komponentu, obudowę i odpowiednie strony PDF oraz zaznacz, czy widok wyprowadzeń przedstawia stronę górną, czy dolną.

W przypadku zgodnych punktów końcowych i Ollama opcja **Strony PDF** (PDF pages) wybiera strony renderowane lokalnie, na przykład `1-4,12`; pozostaw pole puste, aby uwzględnić wszystkie strony w limicie konwersji wynoszącym 20 stron. Jeśli rozmiar przekonwertowanych obrazów przekroczy 10 MiB, wybierz mniej stron. ChatGPT/OpenAI, Claude i Gemini otrzymują pliki PDF bezpośrednio. Możliwość odczytu schematów zależy nadal od wybranego modelu.

Wyszukiwanie w publicznej bibliotece symboli TinyCAD jest dostępne niezależnie od ogólnego przeglądania sieci. Wbudowane wyszukiwanie w sieci jest dostępne dla kwalifikujących się połączeń **Zaloguj się przez ChatGPT** (Sign in with ChatGPT), gdy zezwala na to polityka modelu/konta; cytowania pojawiają się jako łącza w odpowiedzi. Połączenia za pomocą klucza API i pozostali dostawcy nie uzyskują obecnie przez TinyCAD ogólnego wyszukiwania w sieci. Dołącz kartę katalogową lub odpowiedni obraz, jeśli asystent nie może otworzyć strony internetowej producenta.

## Przykładowe polecenia
{: #example-prompts}

Potraktuj je jako punkt wyjścia. Zastąp komponent, obudowę, numery wyprowadzeń i wymagania dotyczące zasilania danymi z własnego projektu.

### Tworzenie symbolu na podstawie karty katalogowej
{: #create-a-symbol-from-a-datasheet}

Otwórz docelowy rysunek i dołącz kartę katalogową:

> Utwórz kompaktowy symbol układu NE555P w 8-wyprowadzeniowej obudowie PDIP na podstawie tej karty katalogowej. Zweryfikuj numer, nazwę i typ elektryczny każdego fizycznego wyprowadzenia. Najpierw wyszukaj istniejące symbole. Umieść wyprowadzenia zasilania u góry, a masę u dołu, zweryfikuj symbol i umieść go na tym rysunku, gotowy do połączenia przewodami. Wskaż wszystko, czego nie możesz zweryfikować.

W przypadku modułu fizycznego zamiast typowego obrysu układu scalonego:

> Na podstawie załączonego schematu wyprowadzeń tej konkretnej wersji płytki czujnika utwórz edytowalny symbol przedstawiający obrys PCB i opisane styki złącza w ich fizycznej kolejności. Zadbaj, aby był wystarczająco kompaktowy do planu połączeń w formacie A4. Umieść punkty połączeń na polach złącza i użyj małej ikony termometru, aby wskazać jego funkcję.

### Tworzenie biblioteki wielokrotnego użytku
{: #build-a-reusable-library}

Najpierw utwórz lub otwórz bibliotekę niestandardową `.tclib` do edycji:

> Dodaj małą bibliotekę jednokrotkowych komponentów interfejsu: PC817 w obudowie DIP-4, ULN2003A w obudowie DIP-16 oraz 4-stykowe złącze zaciskowe o rastrze 2,54 mm. Do przypisania wyprowadzeń układów scalonych użyj załączonych kart katalogowych. Nadaj każdemu komponentowi czytelną nazwę, opis i prefiks oznaczenia, zweryfikuj go i dodaj do tej otwartej biblioteki. Zachowaj symbol, który obecnie edytuję.

Po sprawdzeniu pierwszej partii kontynuuj kolejną. Zapisz `.tclib` w zwykły sposób lub wyraźnie poproś o bibliotekę do pobrania, jeśli tego potrzebujesz.

### Tworzenie kompletnego obwodu
{: #create-a-complete-circuit}

> Na bieżącym arkuszu narysuj astabilny generator NE555 zasilany napięciem 5 V, używając układu w obudowie PDIP-8. Dąż do częstotliwości około 1 Hz. Uwzględnij rezystory i kondensator czasowy, połączenie wejścia reset, kondensator na wyprowadzeniu sterującym, odsprzęganie zasilania oraz diodę LED na wyjściu z rezystorem ograniczającym prąd. Objaśnij obliczenia czasowe, sprawdź fizyczne połączenia wyprowadzeń i uporządkuj układ. Wymień przyjęte założenia i wszelkie nierozwiązane problemy z kontrolą reguł projektowych.

To polecenie ma utworzyć edytowalny projekt i obliczenia. Aby ustalić zachowanie w symulacji, sprawdź modele i samodzielnie użyj funkcji [Symulacja](../Simulation/); pewne siebie wyjaśnienie AI nie oznacza, że symulacja została rzeczywiście uruchomiona.

### Dodawanie komponentów bez ponownego rysowania obwodu
{: #add-parts-without-redrawing-the-circuit}

> Dodaj kondensator odsprzęgający 100 nF między zasilaniem U1 a masą, blisko U1. Przed połączeniem zidentyfikuj rzeczywiste wyprowadzenia zasilania. Pozostaw resztę obwodu, oznaczenia i wartości bez zmian, a następnie sprawdź zmienione sieci.

> Dodaj opisane 4-stykowe złącze dla +3V3, GND, SDA i SCL na arkuszu Sensors. Połącz SDA i SCL z istniejącymi opisanymi sieciami. Jeśli są dostępne, użyj istniejących rezystorów podciągających i poinformuj mnie, czy potrzebne są dodatkowe, zanim je dodasz.

### Odtwarzanie załączonego schematu
{: #reconstruct-an-attached-diagram}

> Odtwórz obwód ze strony 3 załączonego pliku PDF jako edytowalne komponenty i przewody TinyCAD na nowym arkuszu. Zachowaj przedstawione wartości i etykiety. Zamiast zgadywać, zapytaj o nieczytelne wartości lub niejednoznaczne skrzyżowania przewodów. Porównaj odtworzone sieci z obrazem i uporządkuj gotowy arkusz.

### Objaśnianie, sprawdzanie lub ulepszanie istniejącego rysunku
{: #explain-inspect-or-improve-an-existing-drawing}

> Objaśnij ścieżkę sygnału od J1 do U2 i wymień komponenty oraz fizyczne wyprowadzenia połączone z OUT. Nie zmieniaj rysunku.

> Sprawdź bieżący rysunek pod kątem niepodłączonych wymaganych wyprowadzeń, sprzecznych wyjść i niespójnych etykiet zasilania. Dla każdego problemu podaj arkusz i oznaczenie oraz zaproponuj zmiany przed ich wprowadzeniem.

> Uporządkuj wyłącznie blok sterownika silnika wokół U3 i J4. Zachowaj jego połączenia i wartości bez zmian, a blok wejścia zasilania pozostaw na miejscu.

## Ustawienia, prywatność i zapisywanie
{: #settings-privacy-and-saving}

Ikona koła zębatego **Ustawienia AI** (AI settings) wyświetla bieżącego dostawcę i metodę połączenia, a także elementy sterujące modelem/namysłem i przycisk **Zapisz** (Save). W przypadku połączenia kluczem dostępna jest opcja **Wyczyść klucz API** (Clear API key); dla konta ChatGPT — **Wyloguj się** (Sign out); dla lokalnego Ollama — **Rozłącz Ollama** (Disconnect Ollama). Przed skonfigurowaniem innego dostawcy rozłącz bieżące połączenie. **Anuluj** (Cancel) zachowuje istniejące połączenie i zapisane ustawienia.

![Ustawienia AI dla istniejącego połączenia kluczem API](../images/ai-assistant/connection-settings.png)

Klucze API i historia rozmów pozostają w pamięci aplikacji; klucze nie są zapisywane w preferencjach ani rysunkach. Po ponownym wczytaniu/uruchomieniu trzeba ponownie wprowadzić klucz API. Niejawne informacje o dostawcy, punkcie końcowym, modelu i namyśle mogą być zapamiętywane. Autoryzacja konta ChatGPT jest zarządzana osobno przez lokalne środowisko uruchomieniowe i może przetrwać ponowne uruchomienie; aplikacja Desktop używa bezpiecznego szyfrowania systemu operacyjnego, gdy jest dostępne.

W przypadku hostowanego AI wiadomości, załączniki oraz treść dokumentu lub podglądy, o które proszą jego narzędzia, są wysyłane do wybranego dostawcy. Połączenia hostowane kluczem API wysyłają żądania bezpośrednio do wybranego punktu końcowego; TinyCAD nie zapewnia pośrednictwa dostawcy. Zgodne usługi muszą zezwalać na dostęp z przeglądarki (CORS) i zazwyczaj używać HTTPS; wyjątkiem jest localhost. Aby korzystać wyłącznie z lokalnego środowiska, użyj lokalnego modelu Ollama i dostarczonych lokalnie dokumentów źródłowych oraz unikaj wyszukiwania symboli online i modeli chmurowych.

Wygenerowane komponenty i obwody nadal wymagają sprawdzenia przez inżyniera. Zweryfikuj dokładne przypisania wyprowadzeń obudowy, parametry znamionowe zasilania, napięcie zasilania, poziomy logiczne i graniczne warunki pracy na podstawie rzeczywistych kart katalogowych. Weryfikacja strukturalna TinyCAD, kontrola reguł projektowych i sprawdzanie połączeń układu pomagają wykrywać błędy; nie dowodzą jednak, że obwód działa, nie zastępują symulacji ani nie potwierdzają przetestowania sprzętu.

## Rozwiązywanie problemów
{: #troubleshooting}

| Objaw | Co sprawdzić |
| --- | --- |
| **Czat jest niedostępny lub go brakuje** | Użyj aktualnej wersji TinyCAD v4. Otwórz docelowy rysunek lub bibliotekę i poszukaj Chat na pasku narzędzi. |
| **Logowanie do konta ChatGPT jest niedostępne** | Użyj aplikacji Desktop albo lokalnie hostowanej wersji z obsługą środowiska uruchomieniowego konta. W publicznej aplikacji hostowanej wybierz Użyj klucza API. Zezwól na otwarcie zewnętrznego okna logowania i włącz korzystanie z planu ChatGPT podczas wyrażania zgody. |
| **Nie można przejść dalej z kroku 2** | Odczytaj błąd połączenia. Sprawdź klucz, dostęp do modelu, rozliczenia/limit API, adres URL punktu końcowego i połączenie internetowe. TinyCAD wykonuje tę kontrolę po kliknięciu Dalej. |
| **Nie pojawiają się modele** | Sprawdź dostęp u dostawcy. W przypadku punktów końcowych bez wykrywania modeli wprowadź żądany identyfikator modelu. Przed połączeniem Ollama zainstaluj model obsługujący narzędzia. |
| **Nie można połączyć się z lokalnym Ollama** | Uruchom serwer, sprawdź lokalny adres URL API, zezwól na dokładne źródło TinyCAD w OLLAMA_ORIGINS, uruchom ponownie Ollama i w razie monitu zezwól przeglądarce na dostęp do sieci lokalnej. |
| **Asystent odpowiada, ale nie może edytować ani odczytywać obrazów** | Sprawdź obsługę narzędzi/obrazów przez model. Dołącz czytelny wycinek lub mniej stron PDF. |
| **Narzędzie zgłasza, że rysunek został zmieniony** | Pozwól asystentowi ponownie odczytać bieżący stan i spróbować jeszcze raz. Wcześniej zastosowane zmiany nadal można cofnąć. |
| **Odpowiedź kończy się z powodu limitu dostawcy** | Spróbuj podzielić zadanie na mniejsze lub obniżyć poziom namysłu. TinyCAD może automatycznie ponawiać niekompletne odpowiedzi; ponowienia mogą zużywać dodatkowy limit. Wprowadzone zmiany nadal można cofnąć. |

Kontynuuj, korzystając z informacji o [bibliotekach symboli niestandardowych](../Custom-symbol-libraries/), [edytowaniu symboli](../Editing-a-Symbol/), [porządkowaniu układu](../Layout-Tidy-Up/) lub [symulacji](../Simulation/).

---
layout: default
---
# AI-assistent
{: #ai-assistant}

De AI-assistent van TinyCAD zet geschreven instructies, gegevensbladen en schakelingafbeeldingen om in bewerkbare symbolen en tekeningen. Hij werkt naast de gewone editor: u kunt hem vragen een schakeling te maken, onderdelen toe te voegen aan de tekening die al geopend is, een symboolbibliotheek samen te stellen of een bestaande verbinding uit te leggen.

**Alleen desktop:** De AI-assistent (chatbot) is alleen beschikbaar in de TinyCAD Desktop App. Hij is niet beschikbaar in de browserversie.

Open **Chat** op de werkbalk in de Desktop App om de assistent te gebruiken. Maak verbinding met een AI-provider voordat u uw eerste bericht verstuurt; de verbindingsmogelijkheden worden hieronder toegelicht.

## Wat kan de assistent doen?
{: #what-it-can-do}

| Taak | Hoe de assistent helpt |
| --- | --- |
| **Een componentsymbool maken** | Genereer bewerkbare illustraties, fysieke pinnummers, pinnamen en elektrische typen op basis van een opgegeven component en behuizing. Voeg het gegevensblad van de fabrikant toe als de pinbezetting van belang is. |
| **Een symboolbibliotheek maken of uitbreiden** | Voeg meerdere herbruikbare componenten toe aan de `.tclib`-bibliotheek die geopend is voor bewerking, inclusief namen, beschrijvingen en pinmapping. Grotere verzamelingen kunnen in opeenvolgende batches worden samengesteld. |
| **Een schakeling tekenen** | Zoek geschikte symbolen, plaats onderdelen, stel waarden en referenties in, verbind pinnen met draden en labels en voeg toelichtingen toe. |
| **Een bestaande tekening uitbreiden** | Voeg een connector, ontkoppelcondensator, sensor, driver of een ander functioneel blok toe, met behoud van de rest van de tekening. |
| **Een schakeling uitleggen of inspecteren** | Lees de huidige tekening en netlijst, beschrijf signaalpaden, identificeer de pinnen op een net en onderzoek connectiviteit of ontwerpregelmeldingen. |
| **Een tekening reconstrueren vanuit een document** | Lees een bijgevoegde PDF of schakelingafbeelding en maak een bewerkbaar uitgangspunt. De assistent stelt vragen over onduidelijke onderdelen of verbindingen. |
| **Een indeling opschonen** | Rangschik een volledig blad of een opgegeven deel ervan opnieuw, met gebruik van TinyCAD's indelings- en verbindingscontroles. |
| **Een resultaat exporteren** | Maak een downloadbare tekening of symboolbibliotheek wanneer u expliciet om een bestand vraagt. |

De resultaten zijn TinyCAD-objecten die u kunt selecteren, bewerken, bedraden en opslaan. In een tekening worden nieuw gemaakte symbolen geplaatst, klaar om te verbinden. In een bibliotheek worden nieuwe componenten vermeldingen in die bibliotheek. U hoeft geen XML uit het gesprek te kopiëren of een afzonderlijke MCP-server in te stellen.

De assistent zoekt eerst in de [meegeleverde bibliotheken](../Bundled-Libraries/) en doorzoekt zo nodig daarna de openbare TinyCAD.net-verzameling. Hij kan meegeleverde verzamelingen doorzoeken die momenteel niet zijn geselecteerd in de bibliotheekkiezer. Voor zoeken naar openbare symbolen is een internetverbinding nodig, ook wanneer u een lokaal AI-model gebruikt.

Voor herbruikbare onderdelen maakt of opent u eerst een [aangepaste bibliotheek voor bewerking](../Custom-symbol-libraries/) en opent u daarna Chat in dat bibliotheekvenster. Houd voor een schakeling het beoogde tekeningvenster actief. Vertel de assistent welk blad, welke componentreferenties of welk functioneel blok u bedoelt. Het ophalen en plaatsen van AI-symbolen ondersteunt momenteel **symbolen met één eenheid**; gebruik de normale symbooleditor voor meer-eenheidsonderdelen die de assistent niet kan importeren.

{% include video-player.html src="/v4/videos/ai-assistant/ai-assistant-demo.mp4" poster="/v4/images/ai-assistant/chat-open-desktop.png" caption="Maak een symbool op basis van een gegevensblad in TinyCAD Desktop. Wachttijden voor AI-verwerking worden weergegeven met een snelheid van 12× en op het scherm gemarkeerd; interactie en resultaten worden op normale snelheid weergegeven." %}

## Een verbinding instellen
{: #set-up-a-connection}

### 1. Een provider kiezen
{: #choose-a-provider}

1. Open **Chat** op de werkbalk.
2. Klik op **Click here to Sign in to use AI** of op het tandwiel **AI settings** in de paneelkop.
3. Selecteer in **Step 1 — Choose provider** een provider en klik vervolgens op **Next**.

![AI-instellingen met de stap Provider](../images/ai-assistant/setup-provider.png)

U kunt met één provider tegelijk verbinding maken.

| Provider in TinyCAD | Wat u nodig hebt |
| --- | --- |
| **ChatGPT** | Een in aanmerking komend betaald ChatGPT-account met **Sign In with ChatGPT**, of een OpenAI API-sleutel met **Use API Key**. Aanmelden bij een account is beschikbaar in de Desktop App. |
| **Anthropic Claude** | Een API-sleutel van de [Claude Console](https://platform.claude.com/settings/keys), met API-toegang en facturering voor de modellen die u gebruikt. |
| **Google Gemini** | Een API-sleutel van [Google AI Studio](https://aistudio.google.com/apikey). Sommige modellen hebben een beperkte gratis API-laag; beschikbaarheid en quota zijn van toepassing. |
| **OpenAI compatible** | De API-sleutel van de service, de API-basis-URL en een model dat tool calling ondersteunt. |
| **Ollama (hosted locally)** | Een actieve lokale Ollama-server en een geïnstalleerd model met toolondersteuning. Lokale modellen vereisen geen API-sleutel. |

Een abonnement op de gewone chatwebsite van een provider geeft niet automatisch recht op API-facturering of een API-sleutel. De expliciete aanmeldoptie voor ChatGPT is een afzonderlijke verbindingsmethode. Voor Gemini gebruikt de wizard een API-sleutel; aanmelden bij de Google Drive-opslag van TinyCAD verbindt de AI-assistent niet.

### 2. Een account of API-sleutel verbinden
{: #connect-an-account-or-api-key}

#### Een ChatGPT-account gebruiken
{: #use-a-chatgpt-account}

Kies in TinyCAD Desktop **ChatGPT** en vervolgens **Sign In with ChatGPT** in stap 2.

1. Klik op **Sign in with ChatGPT**. Meld u aan in de externe browser.
2. Geef toestemming voor gebruik van uw ChatGPT-abonnement wanneer daarom wordt gevraagd. Alleen aanmelden zonder gebruik van het abonnement in te schakelen is niet voldoende om AI-verzoeken te versturen.
3. Ga terug naar TinyCAD en kies een model wanneer de wizard doorgaat naar stap 3.

Als een account is onthouden, biedt het scherm **Continue as …** of **Sign in with a different account**. TinyCAD bewaart één account tegelijk. Na verbinding verschijnen **Using ChatGPT plan** en **Manage usage** boven het berichtvak. Bij het eerste gebruik wordt uitgelegd dat verzoeken uw abonnementslimiet of beschikbare credits gebruiken.

![AI-instellingen in de Desktop App met de opties Sign In with ChatGPT en Use API Key](../images/ai-assistant/setup-chatgpt-desktop.png)

Voor aanmelden bij ChatGPT is een in aanmerking komend betaald account vereist; account-, werkruimte- en app-limieten zijn nog steeds van toepassing. Bij een geweigerd verzoek schakelt de assistent niet ongemerkt over op facturering via een API-sleutel. Zie OpenAI's [documentatie over aanmelden met ChatGPT](https://developers.openai.com/siwc/token-sharing-open-source) voor de verbinding met een accountabonnement.

#### Een API-sleutel gebruiken
{: #use-an-api-key}

1. Maak een sleutel aan via de providerlink die in stap 2 wordt getoond. Controleer of het project of account toegang heeft tot de modellen die u wilt gebruiken.
2. Selecteer voor **ChatGPT** de optie **Use API Key**. Andere gehoste providers tonen rechtstreeks hun pagina voor sleutel invoeren.
3. Plak de sleutel in **API key**. De sleutel wordt gemaskeerd; met **Show API key** kunt u hem tijdens het typen zichtbaar maken als dat nodig is.
4. Voer voor **OpenAI compatible** ook de **API base URL** van de service in.
5. Klik op **Next**. TinyCAD controleert de verbinding en haalt automatisch de beschikbare modellen op.

![Invoer van een ChatGPT API-sleutel met een gemaskeerd sleutelveld en providerinstructies](../images/ai-assistant/setup-api-key.png)

Als een eindpunt geen modellen kan weergeven, vraagt TinyCAD in stap 2 om een **Model ID**. Voer de exacte identificatie van de provider in en klik opnieuw op **Next**; een korte begroeting controleert de verbinding. Deze controles kunnen providermquota gebruiken. Bij een mislukte verbinding blijft u op stap 2 en wordt de fout weergegeven.

Maak voor Gemini een project aan of selecteer er een in Google AI Studio en kopieer de API-sleutel naar TinyCAD. Op Google's [pagina over Gemini API-prijzen](https://ai.google.dev/gemini-api/docs/pricing) wordt uitgelegd welke modellen en welk gebruik in aanmerking komen voor de gratis laag. Voor betaalde modellen of meer gebruik kan facturering vereist zijn.

![Google Gemini-instellingen met de koppeling naar de sleutel in Google AI Studio](../images/ai-assistant/setup-gemini.png)

### 3. Een model en denkniveau kiezen
{: #pick-a-model-and-thinking-level}

Kies na een geslaagde verbinding een model in **Step 3 — Pick Model**, pas **Thinking** aan en klik vervolgens op **Finish**.

![Modelkeuze en schuifregelaar voor Thinking in de laatste instelstap](../images/ai-assistant/setup-model.png)

De modellijst in deze afbeelding is een voorbeeld; uw lijst hangt af van de provider, het eindpunt en het account. ChatGPT toont de ondersteunde Sol-, Luna- en Astra-modellen die door uw verbinding worden geretourneerd. De nieuwste versies worden eerst weergegeven, oudere keuzes staan onder **More models** en maximaal zes recente keuzes worden onthouden.

Kies een model dat **tools** ondersteunt, zodat het TinyCAD-documenten kan inspecteren en bewerken. Als u schakelingafbeeldingen of gegevensbladen met diagrammen wilt laten interpreteren, kiest u ook een model dat **vision** ondersteunt. Een algemeen tekstdienst-eindpunt is niet voor elke taak geschikt.

**Thinking** loopt van **Minimal** tot **Max** en begint op **Medium**. De beschikbare niveaus zijn afhankelijk van de provider. Hogere instellingen kunnen langer duren en meer tegoed gebruiken; Max betekent de hoogste instelling die door die provider wordt ondersteund. Tussen antwoorden door kunt u het model en denkniveau wijzigen met het modelpictogram naast het berichtvak.

### Alternatief: lokale Ollama gebruiken
{: #alternative-use-local-ollama}

1. [Installeer Ollama](https://ollama.com/download) en start de server.
2. Download een model met [ondersteuning voor tool calling](https://docs.ollama.com/capabilities/tool-calling), met `ollama pull MODEL_NAME` en de werkelijke naam van het model. Controleer voor afbeelding-/PDF-taken ook de ondersteuning voor vision en de contextcapaciteit.
3. Kies in de providerstap van TinyCAD **Ollama (hosted locally)**.
4. Gebruik **Ollama API URL**, normaal gesproken `http://localhost:11434/v1`, en klik op **Next** om geïnstalleerde modellen weer te geven.
5. Kies een model en denkniveau en klik vervolgens op **Finish**.

![Ollama-instellingen met de lokale API-URL en aanwijzingen voor de browser-oorsprong](../images/ai-assistant/setup-ollama.png)

De Ollama-verbinding accepteert localhost-/loopback-URL's. Kies voor een externe server in plaats daarvan **OpenAI compatible**. Geef een lokaal model voldoende context voor het gesprek en de TinyCAD-tools; zie [Ollama's contextconfiguratie](https://docs.ollama.com/api/openai-compatibility#setting-the-local-context-size).

Verzoeken aan lokale Ollama gaan rechtstreeks naar de lokale server. Kies voor lokale inferentie een model dat lokaal actief is: cloudmodellen die via een Ollama-server zijn ingesteld, kunnen nog steeds een clouddienst gebruiken.

## De assistent gebruiken tijdens het tekenen
{: #use-the-assistant-while-drawing}

Typ een verzoek in het berichtvak en klik op **Send** of druk op **Enter**. Gebruik **Shift+Enter** voor een nieuwe regel. Begin met een afgebakende taak, controleer het resultaat en vraag vervolgens om de volgende wijziging.

![Verbonden chatpaneel met een voorbeeldverzoek dat klaarstaat om te verzenden](../images/ai-assistant/chat-ready.png)

Wees specifiek over het doelblad, de referenties, waarden en verbindingen. “Verbind de bovenkant van R2 met OUT op het blad Control” is eenvoudiger te controleren dan “herstel de draad”. Geef aan wat ongewijzigd moet blijven wanneer u een bestaande schakeling uitbreidt.

De assistent kan niet-opgeslagen inhoud van de editor inspecteren. Sla de tekening of bibliotheek na controle van het werk op de normale manier op. Tekeningen bevatten hun symbolen; sla herbruikbare definities op in een aangepaste bibliotheek als u ze opnieuw in andere projecten wilt gebruiken.

**Working** groepeert toolactiviteit en tussentijdse updates in een inklapbare rij. Open deze voor voortgangsdetails, toolresultaten en eventuele afbeeldingen die het model heeft geïnspecteerd. Het uiteindelijke antwoord wordt afzonderlijk weergegeven. Wanneer een verbinding dit ondersteunt, kan de assistent door de provider verstrekte samenvattingen van het denkproces tonen; dit is geen instelling die elke interne redeneerstap onthult.

Gebruik **Stop** om het huidige verzoek te annuleren. Wijzigingen die al zijn toegepast, blijven in het document staan. **Undo** en **Redo** werken voor AI-bewerkingen hetzelfde als voor gewone bewerkingen; een verzoek met meerdere stappen kan verschillende ongedaan te maken wijzigingen opleveren. Als u de tekening bewerkt terwijl de assistent bezig is, kan een latere schrijfbewerking worden geweigerd omdat de bron verouderd is. Vraag de assistent de tekening opnieuw te lezen en verder te gaan.

Met het pictogram **New chat** in de kop worden het gesprek, het concept en de bijlagen gewist. Wijzigingen in de tekening worden er niet mee ongedaan gemaakt. Als u van model wisselt, blijft het gesprek behouden; verbinding maken met een andere provider of sleutel start een nieuwe chat.

### Gegevensbladen en schakelingafbeeldingen bijvoegen
{: #attach-datasheets-and-circuit-images}

Gebruik **Import PDF/image** naast de berichtbediening om PDF-, PNG-, JPEG- of WebP-bestanden bij te voegen. U kunt maximaal **zes bestanden met een totale grootte van 10 MiB** bijvoegen; providerlimieten zijn ook van toepassing. Vraag naar de exacte componentvariant, behuizing en relevante PDF-pagina's, en geef aan of een pind diagram een boven- of onderaanzicht toont.

Voor compatibele eindpunten en Ollama selecteert **PDF pages** pagina's die lokaal worden gerenderd, bijvoorbeeld `1-4,12`; laat dit veld leeg voor alle pagina's binnen de conversielimiet van 20 pagina's. Kies minder pagina's als de geconverteerde afbeeldingen groter zijn dan 10 MiB. ChatGPT/OpenAI, Claude en Gemini ontvangen PDF's rechtstreeks. Het vermogen om diagrammen te lezen hangt nog steeds af van het gekozen model.

Zoeken in de openbare symboolbibliotheek van TinyCAD is onafhankelijk van algemeen zoeken op het web beschikbaar. Ingebouwd webonderzoek is beschikbaar voor in aanmerking komende verbindingen via **Sign in with ChatGPT**, wanneer het model-/accountbeleid dit toestaat; bronverwijzingen verschijnen als koppelingen in het antwoord. Verbindingen via API-sleutels en de andere providers krijgen momenteel geen algemeen zoeken op het web via TinyCAD. Voeg het gegevensblad of de relevante afbeelding toe als de assistent de website van een fabrikant niet kan openen.

## Voorbeeldverzoeken
{: #example-prompts}

Gebruik deze als uitgangspunt. Vervang de component, behuizing, pinnummers en voedingsvereisten door die van uw project.

### Een symbool maken op basis van een gegevensblad
{: #create-a-symbol-from-a-datasheet}

Open de bedoelde tekening en voeg het gegevensblad toe:

> Maak op basis van dit gegevensblad een compact symbool voor de NE555P in de 8-pins PDIP-behuizing. Controleer elk fysiek pinnummer, elke pinnaam en elk elektrisch type. Zoek eerst naar bestaande symbolen. Plaats voedingspinnen bovenaan en aarde onderaan, valideer het symbool en plaats het in deze tekening, klaar om te bedraden. Benoem alles wat u niet kunt verifiëren.

Voor een fysieke module in plaats van een conventionele IC-omtrek:

> Maak met het bijgevoegde pindagram voor deze exacte revisie van de sensorprint een bewerkbaar symbool met de omtrek van de PCB en gelabelde pinnen van de connector in hun fysieke volgorde. Houd het compact genoeg voor een bedradingsplan op A4. Plaats aansluitpunten op de connectorpads en gebruik een klein temperatuurpictogram om de functie aan te geven.

### Een herbruikbare bibliotheek samenstellen
{: #build-a-reusable-library}

Maak eerst een aangepaste `.tclib` aan of open er een voor bewerking:

> Voeg een kleine bibliotheek met interfacecomponenten met één eenheid toe: een PC817 in DIP-4, een ULN2003A in DIP-16 en een 4-polige connector met steekmaat 2,54 mm. Gebruik de bijgevoegde gegevensbladen voor de pinbezetting van de IC's. Geef elke component een duidelijke naam, beschrijving en referentieprefix, valideer deze en voeg hem toe aan deze geopende bibliotheek. Behoud het symbool dat ik momenteel bewerk.

Ga na controle van de eerste bibliotheek verder met een volgende batch. Sla de `.tclib` op de normale manier op, of vraag expliciet om een downloadbare bibliotheek als dat het gewenste resultaat is.

### Een volledige schakeling maken
{: #create-a-complete-circuit}

> Teken op het huidige blad een 5 V NE555-astabiele multivibrator met het PDIP-8-onderdeel. Streef naar ongeveer 1 Hz. Voeg de timingweerstanden en -condensator, de resetverbinding, een condensator op de stuurpin, voedingsontkoppeling en een uitgangs-LED met stroombegrenzingsweerstand toe. Leg de berekende timing uit, controleer de fysieke pinverbindingen en werk de indeling netjes af. Vermeld aannames en eventuele onopgeloste ontwerpregelproblemen.

Dit verzoek levert een bewerkbaar ontwerp en berekeningen op. Om het gesimuleerde gedrag vast te stellen, controleert u de modellen en voert u zelf [Simulatie](../Simulation/) uit; een overtuigende AI-uitleg is geen vastgelegde simulatierun.

### Onderdelen toevoegen zonder de schakeling opnieuw te tekenen
{: #add-parts-without-redrawing-the-circuit}

> Voeg dicht bij U1 een ontkoppelcondensator van 100 nF toe tussen de voeding van U1 en aarde. Identificeer de werkelijke voedingspinnen voordat u bedrading aanbrengt. Laat de rest van de schakeling, referenties en waarden ongewijzigd en controleer daarna de betrokken netten.

> Voeg op het blad Sensors een gelabelde 4-pins connector toe voor +3V3, GND, SDA en SCL. Verbind SDA en SCL met de bestaande gelabelde netten. Gebruik de bestaande pull-ups als die aanwezig zijn en meld of er extra pull-ups nodig zijn voordat u er toevoegt.

### Een bijgevoegd diagram reconstrueren
{: #reconstruct-an-attached-diagram}

> Reproduceer de schakeling op pagina 3 van de bijgevoegde PDF als bewerkbare TinyCAD-componenten en draden op een nieuw blad. Behoud de weergegeven waarden en labels. Vraag naar onleesbare waarden of onduidelijke kruisingen van draden in plaats van te gokken. Vergelijk de gereconstrueerde netten met de afbeelding en werk het voltooide blad netjes af.

### Een bestaande tekening uitleggen, inspecteren of verbeteren
{: #explain-inspect-or-improve-an-existing-drawing}

> Leg het signaalpad van J1 naar U2 uit en vermeld de onderdelen en fysieke pinnen die met OUT zijn verbonden. Wijzig de tekening niet.

> Controleer de huidige tekening op niet-aangesloten vereiste pinnen, conflicterende uitgangen en inconsistente voedingslabels. Vermeld voor elk probleem het blad en de referentie en stel wijzigingen voor voordat u ze toepast.

> Werk alleen het motor-driverblok rond U3 en J4 netjes af. Behoud de verbindingen en waarden en laat het voedingsingangsblok op zijn plaats.

## Instellingen, privacy en opslaan
{: #settings-privacy-and-saving}

Het tandwiel **AI settings** toont de huidige provider en verbindingsmethode, met bediening voor model/denkniveau en **Save**. Voor een verbinding met een sleutel biedt het **Clear API key**; voor een ChatGPT-account biedt het **Sign out**; voor lokale Ollama biedt het **Disconnect Ollama**. Verbreek eerst de verbinding om een andere provider in te stellen. **Cancel** behoudt de bestaande verbinding en opgeslagen instellingen.

![AI-instellingen voor een bestaande verbinding met een API-sleutel](../images/ai-assistant/connection-settings.png)

API-sleutels en gespreksgeschiedenis blijven in het applicatiegeheugen; sleutels worden niet opgeslagen bij voorkeuren of tekeningen. Na het opnieuw laden of starten moet u een API-sleutel opnieuw invoeren. Niet-geheime voorkeuren voor provider, eindpunt, model en denkniveau kunnen worden onthouden. De autorisatie voor een ChatGPT-account wordt afzonderlijk beheerd door de lokale runtime en kan na opnieuw starten behouden blijven; Desktop gebruikt waar mogelijk veilige OS-versleuteling.

Bij gehoste AI worden berichten, bijlagen en de inhoud of voorbeelden van het document die door de tools worden opgevraagd, naar de geselecteerde provider verzonden. Gehoste verbindingen via API-sleutels sturen verzoeken rechtstreeks naar het geselecteerde eindpunt; TinyCAD biedt geen doorgeefdienst voor providers. Compatibele services moeten browsertoegang (CORS) toestaan en gebruiken doorgaans HTTPS; localhost is de uitzondering. Gebruik voor een volledig lokale workflow een lokaal Ollama-model en meegeleverde lokale referentiedocumenten, en vermijd online zoeken naar symbolen of cloudmodellen.

Gegenereerde onderdelen en schakelingen moeten nog steeds technisch worden gecontroleerd. Controleer de exacte pinbezetting van de behuizing, vermogenswaarden, voedingsspanning, logische niveaus en bedrijfsgrenzen aan de hand van de echte gegevensbladen. De structurele validatie, ontwerpregelcontroles en verbindingscontroles voor de indeling van TinyCAD helpen fouten te vinden; ze bewijzen niet dat de schakeling werkt, vervangen geen simulatie en stellen niet vast dat de hardware is getest.

## Problemen oplossen
{: #troubleshooting}

| Probleem | Wat u moet controleren |
| --- | --- |
| **Chat is niet beschikbaar of ontbreekt** | Gebruik een actuele TinyCAD v4-build. Open de bedoelde tekening of bibliotheek en zoek Chat op de werkbalk. |
| **Aanmelden bij een ChatGPT-account is niet beschikbaar** | Gebruik Desktop of een lokaal gehoste build met de account-runtime. Kies in de openbare gehoste app Use API Key. Sta het externe aanmeldvenster toe en schakel tijdens de toestemming het gebruik van het ChatGPT-abonnement in. |
| **Stap 2 gaat niet verder** | Lees de verbindingsfout. Controleer de sleutel, modeltoegang, API-facturering/quota, URL van het eindpunt en internetverbinding. TinyCAD voert deze controle uit wanneer u op Next klikt. |
| **Er verschijnen geen modellen** | Controleer de toegang van de provider. Voer voor eindpunten zonder modeldetectie de gevraagde Model ID in. Installeer een model met toolondersteuning voordat u verbinding maakt met Ollama. |
| **Lokale Ollama kan geen verbinding maken** | Start de server, controleer de lokale API-URL, sta de exacte oorsprong van TinyCAD toe via OLLAMA_ORIGINS, start Ollama opnieuw en sta browsertoegang tot het lokale netwerk toe als daarom wordt gevraagd. |
| **De assistent antwoordt, maar kan geen afbeeldingen bewerken of lezen** | Controleer de ondersteuning voor tools/vision van het model. Voeg een leesbare uitsnede of minder PDF-pagina's toe. |
| **Een tool meldt dat de tekening is gewijzigd** | Laat de assistent de huidige staat opnieuw lezen en probeer het opnieuw. Eerder toegepaste wijzigingen blijven beschikbaar via Undo. |
| **Een antwoord stopt vanwege een providerlimiet** | Probeer een kleinere taak of lager denkniveau. TinyCAD kan onvolledige antwoorden automatisch opnieuw proberen; nieuwe pogingen kunnen extra tegoed gebruiken. Voltooide bewerkingen kunnen ongedaan worden gemaakt. |

Ga verder met [aangepaste symboolbibliotheken](../Custom-symbol-libraries/), [symbolen bewerken](../Editing-a-Symbol/), [indeling netjes afwerken](../Layout-Tidy-Up/) of [simulatie](../Simulation/).

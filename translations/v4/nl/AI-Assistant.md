---
layout: default
---
# AI-assistent
{: #ai-assistant}

De AI-assistent van TinyCAD zet schriftelijke instructies, datasheets en circuitafbeeldingen om in bewerkbare symbolen en tekeningen. Hij werkt naast de gewone editor: u kunt hem vragen een circuit te maken, onderdelen toe te voegen aan de al geopende tekening, een symboolbibliotheek op te bouwen of een bestaande verbinding uit te leggen.

**Alleen desktop:** De AI-assistent (chatbot) is alleen beschikbaar in de TinyCAD Desktop App. Hij is niet beschikbaar in de browserversie.

Open **Chat** op de werkbalk in de Desktop App om de assistent te gebruiken. Maak verbinding met een AI-provider voordat u uw eerste bericht verstuurt; de verbindingsopties worden hieronder toegelicht.

## Wat de assistent kan doen
{: #what-it-can-do}

| Taak | Hoe de assistent helpt |
| --- | --- |
| **Een componentsymbool maken** | Genereer bewerkbare illustraties, fysieke pinnummers, pinnamen en elektrische typen op basis van een opgegeven component en behuizing. Voeg de datasheet van de fabrikant toe als de pinbezetting van belang is. |
| **Een symboolbibliotheek maken of uitbreiden** | Voeg meerdere herbruikbare componenten toe aan de `.tclib`-bibliotheek die geopend is voor bewerking, inclusief namen, beschrijvingen en pinmapping. Grotere verzamelingen kunnen in opeenvolgende batches worden opgebouwd. |
| **Een circuit tekenen** | Geschikte symbolen zoeken, onderdelen plaatsen, waarden en referenties instellen, pinnen verbinden met draden en labels, en toelichtende notities toevoegen. |
| **Een bestaande tekening uitbreiden** | Een connector, ontkoppelcondensator, sensor, driver of ander functioneel blok toevoegen en de rest van de tekening behouden. |
| **Een circuit uitleggen of inspecteren** | De huidige tekening en netlijst lezen, signaalpaden beschrijven, de pinnen op een net identificeren en connectiviteit of ontwerpregelproblemen onderzoeken. |
| **Een tekening uit een document reconstrueren** | Een bijgevoegde PDF of circuitafbeelding lezen en een bewerkbare eerste versie maken, met vragen over onduidelijke onderdelen of verbindingen. |
| **Een lay-out netjes maken** | Een volledig blad of een opgegeven gedeelte ervan herschikken, met gebruik van de lay-out- en verbindingscontroles van TinyCAD. |
| **Een resultaat exporteren** | Een downloadbare tekening of symboolbibliotheek maken als u expliciet om een bestand vraagt. |

De resultaten zijn TinyCAD-objecten die u kunt selecteren, bewerken, bedraden en opslaan. In een tekening worden nieuw gemaakte symbolen geplaatst, klaar om te verbinden. In een bibliotheek worden nieuwe componenten vermeldingen in die bibliotheek. U hoeft geen XML uit het gesprek te kopiëren of een afzonderlijke MCP-server te configureren.

De assistent zoekt eerst in de [gebundelde bibliotheken](../Bundled-Libraries/) en doorzoekt zo nodig daarna de openbare TinyCAD.net-verzameling. Hij kan zoeken in gebundelde verzamelingen die momenteel niet zijn geselecteerd in de bibliotheekkiezer. Voor het zoeken naar openbare symbolen is een internetverbinding nodig, ook wanneer u een lokaal AI-model gebruikt.

Voor herbruikbare onderdelen maakt of opent u eerst [een aangepaste bibliotheek om te bewerken](../Custom-symbol-libraries/) en opent u daarna Chat in dat bibliotheekvenster. Houd voor een circuit het bedoelde tekeningvenster actief. Vertel de assistent welk blad, welke componentreferenties of welk functioneel blok u bedoelt. Het ophalen en plaatsen van AI-symbolen ondersteunt momenteel **symbolen met één eenheid**; gebruik de gewone symbooleditor voor meerdelige onderdelen die de assistent niet kan importeren.

{% include video-player.html src="/v4/videos/ai-assistant/ai-assistant-demo.mp4" poster="/v4/Images/ai-assistant/chat-open-desktop.png" caption="Maak een symbool op basis van een datasheet in TinyCAD Desktop. Wachttijden voor AI-verwerking worden weergegeven met 12× snelheid en op het scherm gemarkeerd; interactie en resultaten worden op normale snelheid weergegeven." %}

## Een verbinding instellen
{: #set-up-a-connection}

### 1. Een provider kiezen
{: #choose-a-provider}

1. Open **Chat** op de werkbalk.
2. Klik op **Click here to Sign in to use AI** of op het tandwiel **AI settings** in de paneelkop.
3. Selecteer in **Step 1 — Choose provider** een provider en klik vervolgens op **Next**.

![AI-instellingen met de stap Provider](../Images/ai-assistant/setup-provider.png)

U kunt met één provider tegelijk verbinding maken.

| Provider in TinyCAD | Wat u nodig hebt |
| --- | --- |
| **ChatGPT** | Een in aanmerking komend betaald ChatGPT-account met **Sign In with ChatGPT**, of een OpenAI API-sleutel met **Use API Key**. Aanmelden met een account is beschikbaar in de Desktop App. |
| **Anthropic Claude** | Een API-sleutel van de [Claude Console](https://platform.claude.com/settings/keys), met API-toegang en facturering voor de modellen die u gebruikt. |
| **Google Gemini** | Een API-sleutel van [Google AI Studio](https://aistudio.google.com/apikey). Sommige modellen hebben een beperkt gratis API-niveau; beschikbaarheid en quota zijn van toepassing. |
| **OpenAI compatible** | De API-sleutel en API-basis-URL van de service, plus een model dat toolaanroepen ondersteunt. |
| **Ollama (hosted locally)** | Een actieve lokale Ollama-server en een geïnstalleerd model met toolondersteuning. Voor lokale modellen is geen API-sleutel nodig. |

Een abonnement op de gewone chatwebsite van een provider biedt niet automatisch API-facturering of een API-sleutel. De expliciete optie om met een ChatGPT-account aan te melden is een afzonderlijke verbindingsmethode. Voor Gemini gebruikt de wizard een API-sleutel; aanmelden bij TinyCAD voor Google Drive-opslag maakt geen verbinding met de AI-assistent.

### 2. Een account of API-sleutel koppelen
{: #connect-an-account-or-api-key}

#### Een ChatGPT-account gebruiken
{: #use-a-chatgpt-account}

Kies in TinyCAD Desktop **ChatGPT** en vervolgens **Sign In with ChatGPT** bij stap 2.

1. Klik op **Sign in with ChatGPT**. Rond het aanmelden af in de externe browser.
2. Geef toestemming voor het gebruik van uw ChatGPT-abonnement wanneer daarom wordt gevraagd. Alleen aanmelden is niet voldoende om AI-verzoeken te versturen; u moet ook het gebruik van uw abonnement inschakelen.
3. Ga terug naar TinyCAD en kies een model wanneer de wizard doorgaat naar stap 3.

Als een account is onthouden, biedt het scherm **Continue as …** of **Sign in with a different account**. TinyCAD bewaart één account tegelijk. Na verbinding verschijnen **Using ChatGPT plan** en **Manage usage** boven het berichtvenster. De melding bij het eerste gebruik legt uit dat verzoeken gebruikmaken van uw abonnementslimiet of beschikbare tegoeden.

![AI-instellingen op desktop met de opties Sign In with ChatGPT en Use API Key](../Images/ai-assistant/setup-chatgpt-desktop.png)

Voor aanmelden bij ChatGPT is een in aanmerking komend betaald account vereist; account-, werkruimte- en apprimieten zijn nog steeds van toepassing. Bij weigering van een verzoek wordt niet ongemerkt overgeschakeld op facturering via een API-sleutel. Zie OpenAI's [documentatie over aanmelden met ChatGPT](https://developers.openai.com/siwc/token-sharing-open-source) voor de verbinding met een accountabonnement.

#### Een API-sleutel gebruiken
{: #use-an-api-key}

1. Maak een sleutel aan via de providerkoppeling die bij stap 2 wordt getoond. Controleer of het project of account toegang heeft tot de modellen die u wilt gebruiken.
2. Selecteer voor **ChatGPT** **Use API Key**. Andere gehoste providers tonen rechtstreeks hun pagina voor het invoeren van de sleutel.
3. Plak de sleutel in **API key**. De sleutel wordt gemaskeerd; met **Show API key** wordt deze zichtbaar terwijl u typt, indien nodig.
4. Voer voor **OpenAI compatible** ook de **API base URL** van de service in.
5. Klik op **Next**. TinyCAD controleert de verbinding en haalt automatisch de beschikbare modellen op.

![Invoer van een ChatGPT API-sleutel met een gemaskeerd sleutelveld en providerinstructies](../Images/ai-assistant/setup-api-key.png)

Als een eindpunt geen modellen kan weergeven, vraagt TinyCAD bij stap 2 om een **Model ID**. Voer de exacte identificatiecode van de provider in en klik opnieuw op **Next**; een korte begroeting controleert de verbinding. Deze controles kunnen providerquota verbruiken. Bij een mislukte verbinding blijft u bij stap 2 en wordt de fout weergegeven.

Maak voor Gemini een project aan of selecteer er een in Google AI Studio en kopieer de API-sleutel naar TinyCAD. Google's [pagina met Gemini API-prijzen](https://ai.google.dev/gemini-api/docs/pricing) legt uit welke modellen en welk gebruik in aanmerking komen voor het gratis niveau. Voor betaalde modellen of hoger gebruik kan facturering vereist zijn.

![Google Gemini-instellingen met de koppeling naar de sleutel in Google AI Studio](../Images/ai-assistant/setup-gemini.png)

### 3. Een model en denkniveau kiezen
{: #pick-a-model-and-thinking-level}

Kies na een geslaagde verbinding een model bij **Step 3 — Pick Model**, pas **Thinking** aan en klik vervolgens op **Finish**.

![Modelkeuze en de schuifregelaar Thinking in de laatste instelstap](../Images/ai-assistant/setup-model.png)

De modellijst in deze afbeelding is een voorbeeld; uw lijst is afhankelijk van de provider, het eindpunt en het account. ChatGPT toont de ondersteunde Sol-, Luna- en Astra-modellen die via uw verbinding beschikbaar zijn. De nieuwste versies worden eerst weergegeven; oudere opties staan onder **More models** en maximaal zes recente keuzes worden onthouden.

Kies een model dat **tools** ondersteunt, zodat het TinyCAD-documenten kan inspecteren en bewerken. Kies voor het interpreteren van circuitafbeeldingen of datasheets met schema's ook een model dat **vision** ondersteunt. Een algemeen tekstchat-eindpunt is niet voldoende voor elke taak.

**Thinking** loopt van **Minimal** tot **Max** en begint op **Medium**. De beschikbare niveaus zijn afhankelijk van de provider. Hogere instellingen kunnen langer duren en meer tegoed verbruiken; Max is de hoogste instelling die door die provider wordt ondersteund. U kunt tussen antwoorden door het model en denkniveau wijzigen met het modelpictogram naast het berichtvenster.

### Alternatief: lokale Ollama gebruiken
{: #alternative-use-local-ollama}

1. [Installeer Ollama](https://ollama.com/download) en start de server.
2. Download een model met [ondersteuning voor toolaanroepen](https://docs.ollama.com/capabilities/tool-calling), met `ollama pull MODEL_NAME` en de werkelijke naam van het model. Controleer voor afbeeldings- en PDF-taken ook de ondersteuning voor vision en de contextcapaciteit.
3. Kies in de providerstap van TinyCAD **Ollama (hosted locally)**.
4. Gebruik **Ollama API URL**, normaal gesproken `http://localhost:11434/v1`, en klik vervolgens op **Next** om de geïnstalleerde modellen weer te geven.
5. Kies een model en denkniveau en klik vervolgens op **Finish**.

![Ollama-instellingen met de lokale API-URL en aanwijzingen over de browserorigin](../Images/ai-assistant/setup-ollama.png)

De Ollama-verbinding accepteert localhost-/loopback-URL's. Kies voor een externe server in plaats daarvan **OpenAI compatible**. Geef een lokaal model voldoende context voor het gesprek en de TinyCAD-tools; zie [Ollama's contextconfiguratie](https://docs.ollama.com/api/openai-compatibility#setting-the-local-context-size).

Verzoeken aan lokale Ollama gaan rechtstreeks naar de lokale server. Kies voor lokale inferentie een model dat lokaal draait: cloudmodellen die via een Ollama-server zijn geconfigureerd, kunnen nog steeds een clouddienst gebruiken.

## De assistent gebruiken tijdens het tekenen
{: #use-the-assistant-while-drawing}

Typ een verzoek in het berichtvenster en klik op **Send**, of druk op **Enter**. Gebruik **Shift+Enter** voor een nieuwe regel. Begin met een afgebakende taak, controleer het resultaat en vraag daarna om de volgende wijziging.

![Verbonden chatpaneel met een voorbeeldverzoek dat klaarstaat om te verzenden](../Images/ai-assistant/chat-ready.png)

Wees specifiek over het doelblad, de referenties, waarden en verbindingen. 'Verbind de bovenkant van R2 met OUT op het blad Control' is gemakkelijker te controleren dan 'repareer de draad'. Geef bij het uitbreiden van een bestaand circuit aan wat ongewijzigd moet blijven.

De assistent kan niet-opgeslagen inhoud in de editor inspecteren. Sla de tekening of bibliotheek na controle van het werk op de gebruikelijke manier op. Tekeningen bevatten hun symbolen; sla herbruikbare definities op in een aangepaste bibliotheek als u ze opnieuw in andere projecten wilt gebruiken.

**Working** groepeert toolactiviteiten en tussentijdse updates in een inklapbare rij. Open deze voor voortgangsdetails, toolresultaten en eventuele afbeeldingen die het model heeft geïnspecteerd. Het uiteindelijke antwoord wordt afzonderlijk weergegeven. Als de verbinding dit ondersteunt, kan de assistent door de provider geleverde samenvattingen van het denkproces tonen; dit is geen instelling die elke interne redeneringsstap zichtbaar maakt.

Gebruik **Stop** om het huidige verzoek te annuleren. Wijzigingen die al zijn toegepast, blijven in het document staan. **Undo** en **Redo** werken met AI-bewerkingen net als met gewone bewerkingen; een verzoek met meerdere stappen kan verschillende ongedaan te maken wijzigingen opleveren. Als u de tekening bewerkt terwijl de assistent bezig is, kan een latere schrijfactie worden geweigerd omdat de bron verouderd is. Vraag de assistent de tekening opnieuw te lezen en verder te gaan.

Met het pictogram **New chat** in de kop worden het gesprek, het concept en de bijlagen gewist. Wijzigingen aan de tekening worden hiermee niet ongedaan gemaakt. Als u van model wisselt, blijft het gesprek behouden; bij verbinding met een andere provider of sleutel begint een nieuwe chat.

### Datasheets en circuitafbeeldingen bijvoegen
{: #attach-datasheets-and-circuit-images}

Gebruik **Import PDF/image** naast de berichtknoppen om PDF-, PNG-, JPEG- of WebP-bestanden bij te voegen. U kunt maximaal **zes bestanden met een totale grootte van 10 MiB** bijvoegen; providerlimieten zijn ook van toepassing. Vraag naar de exacte componentvariant, behuizing en relevante PDF-pagina's, en geef aan of een pindia gram van boven of van onderen is bekeken.

Voor compatibele eindpunten en Ollama kunt u met **PDF pages** pagina's selecteren die lokaal worden gerenderd, bijvoorbeeld `1-4,12`; laat dit veld leeg voor alle pagina's binnen de conversielimiet van 20 pagina's. Kies minder pagina's als de geconverteerde afbeeldingen groter zijn dan 10 MiB. ChatGPT/OpenAI, Claude en Gemini ontvangen PDF's rechtstreeks. De mogelijkheid om schema's te lezen blijft afhankelijk van het gekozen model.

Het zoeken in de openbare symboolbibliotheek van TinyCAD is onafhankelijk beschikbaar van algemeen zoeken op internet. Webonderzoek via de ingebouwde functie is beschikbaar voor in aanmerking komende verbindingen met **Sign in with ChatGPT** wanneer het model-/accountbeleid dit toestaat; bronverwijzingen verschijnen als koppelingen in het antwoord. API-sleutelverbindingen en de andere providers krijgen momenteel geen algemene zoekfunctie op internet via TinyCAD. Voeg de datasheet of relevante afbeelding toe als de assistent de website van de fabrikant niet kan openen.

## Voorbeeldprompts
{: #example-prompts}

Gebruik deze als uitgangspunt. Vervang de component, behuizing, pinnummers en voedingsvereisten door de gegevens voor uw project.

### Een symbool maken op basis van een datasheet
{: #create-a-symbol-from-a-datasheet}

Open de bedoelde tekening en voeg de datasheet toe:

> Maak op basis van deze datasheet een compact symbool voor de NE555P in de 8-pins PDIP-behuizing. Controleer elk fysiek pinnummer, elke pinnaam en elk elektrisch type. Zoek eerst naar bestaande symbolen. Plaats voedingspinnen bovenaan en aarde onderaan, valideer het symbool en plaats het in deze tekening, klaar om te bedraden. Geef aan wat u niet kunt verifiëren.

Voor een fysieke module in plaats van een conventionele IC-omtrek:

> Maak met behulp van het bijgevoegde pindiaschema voor deze exacte revisie van de sensorprint een bewerkbaar symbool met de omtrek van de PCB en gelabelde headercontacten in hun fysieke volgorde. Houd het compact genoeg voor een bedradingsplan op A4-formaat. Plaats aansluitpunten op de headerpads en gebruik een klein temperatuursymbool om de functie aan te geven.

### Een herbruikbare bibliotheek opbouwen
{: #build-a-reusable-library}

Maak of open eerst een aangepaste `.tclib` om te bewerken:

> Voeg een kleine bibliotheek met interfacecomponenten met één eenheid toe: een PC817 in DIP-4, een ULN2003A in DIP-16 en een 4-wegsklemconnector met een rastermaat van 2,54 mm. Gebruik de bijgevoegde datasheets voor de pinbezetting van de IC's. Geef elk onderdeel een duidelijke naam, beschrijving en referentievoorvoegsel, valideer het en voeg het toe aan deze geopende bibliotheek. Behoud het symbool dat ik momenteel bewerk.

Ga verder met een volgende batch nadat u de eerste hebt gecontroleerd. Sla de `.tclib` op de gebruikelijke manier op, of vraag expliciet om een downloadbare bibliotheek als dat het gewenste resultaat is.

### Een volledig circuit maken
{: #create-a-complete-circuit}

> Teken op het huidige blad een NE555-astabiele multivibrator van 5 V met het PDIP-8-onderdeel. Richt op ongeveer 1 Hz. Voeg de timingweerstanden en -condensator, de resetverbinding, de condensator op de besturingspin, voedingsontkoppeling en een uitgangs-led met stroombegrenzingsweerstand toe. Leg de berekende timing uit, controleer de fysieke pinaansluitingen en maak de lay-out netjes. Vermeld aannames en eventuele onopgeloste ontwerpregelproblemen.

Hiermee wordt gevraagd om een bewerkbaar ontwerp en berekeningen. Controleer de modellen en gebruik zelf [Simulation](../Simulation/) om het gesimuleerde gedrag vast te stellen; een overtuigende uitleg van AI is geen vastgelegde simulatierun.

### Een SPICE-model zoeken of toevoegen
{: #find-or-attach-a-spice-model}

Vraag expliciet om ondersteuning voor SPICE of simulatie. De assistent kan [gebundelde SPICE-modellen](../Bundled-SPICE-Models/) opzoeken zonder op internet te zoeken en de bronnen, aannames en aansluitvolgorde ervan inspecteren. Als het exacte model niet beschikbaar is, kunt u vragen om een gedocumenteerde drop-in-kandidaat of een generieke benadering te beoordelen. Controleer de pinbezetting van de behuizing onafhankelijk.

> Zoek een gebundeld SPICE-model voor Q1 en vertel me hoe de aansluitingen overeenkomen met het symbool. Laat de tekening ongewijzigd totdat ik de bron en aannames heb beoordeeld.

Als u de tekening wilt wijzigen, vraag de assistent het model toe te voegen nadat de pinaansluitingen zijn gecontroleerd. Als u vraagt om een herbruikbaar bibliotheekonderdeel met SPICE-ondersteuning te maken, kan de assistent een gebundelde of aangepaste definitie instellen voor toekomstige plaatsingen.

### Onderdelen toevoegen zonder het circuit opnieuw te tekenen
{: #add-parts-without-redrawing-the-circuit}

> Voeg dicht bij U1 een ontkoppelcondensator van 100 nF toe tussen de voeding van U1 en aarde. Stel de daadwerkelijke voedingspinnen vast voordat u bedrading aanbrengt. Houd de rest van het circuit, de referenties en waarden ongewijzigd en controleer daarna de betrokken netten.

> Voeg op het blad Sensors een gelabelde 4-pins connector toe voor +3V3, GND, SDA en SCL. Verbind SDA en SCL met de bestaande gelabelde netten. Gebruik de bestaande pull-ups als die aanwezig zijn en laat me weten of er extra pull-ups nodig zijn voordat u die toevoegt.

### Een bijgevoegd schema reconstrueren
{: #reconstruct-an-attached-diagram}

> Reconstrueer het circuit op pagina 3 van de bijgevoegde PDF als bewerkbare TinyCAD-componenten en draden op een nieuw blad. Behoud de weergegeven waarden en labels. Stel vragen over onleesbare waarden of onduidelijke kruisingen van draden in plaats van te gokken. Vergelijk de gereconstrueerde netten met de afbeelding en maak het voltooide blad netjes.

### Een bestaande tekening uitleggen, inspecteren of verbeteren
{: #explain-inspect-or-improve-an-existing-drawing}

> Leg het signaalpad van J1 naar U2 uit en vermeld de onderdelen en fysieke pinnen die met OUT zijn verbonden. Wijzig de tekening niet.

> Controleer de huidige tekening op niet-aangesloten verplichte pinnen, conflicterende uitgangen en inconsistente voedingslabels. Vermeld voor elk probleem het blad en de referentie, en stel wijzigingen voor voordat u ze toepast.

> Maak alleen het motor-driverblok rond U3 en J4 netjes. Behoud de verbindingen en waarden en laat het voedingsinvoerblok op zijn plaats.

## Instellingen, privacy en opslaan
{: #settings-privacy-and-saving}

Het tandwiel **AI settings** toont de huidige provider en verbindingsmethode, met bedieningselementen voor model/denkniveau en **Save**. Voor een sleutelverbinding biedt het **Clear API key**; voor een ChatGPT-account **Sign out**; voor lokale Ollama **Disconnect Ollama**. Verbreek eerst de verbinding om een andere provider in te stellen. Met **Cancel** behoudt u de bestaande verbinding en opgeslagen instellingen.

![AI-instellingen voor een bestaande verbinding met een API-sleutel](../Images/ai-assistant/connection-settings.png)

API-sleutels en gesprekshistorie blijven in het applicatiegeheugen; sleutels worden niet opgeslagen bij voorkeuren of tekeningen. Na opnieuw laden of starten moet u een API-sleutel opnieuw invoeren. Niet-geheime voorkeuren voor provider, eindpunt, model en denkniveau kunnen worden onthouden. De autorisatie van een ChatGPT-account wordt afzonderlijk beheerd door de lokale runtime en kan na opnieuw starten behouden blijven; Desktop gebruikt waar beschikbaar beveiligde OS-versleuteling.

Voor gehoste AI worden berichten, bijlagen en de documentinhoud of -voorbeelden waar de tools om verzoeken, naar de geselecteerde provider verzonden. Gehoste verbindingen met een API-sleutel versturen verzoeken rechtstreeks naar het geselecteerde eindpunt; TinyCAD levert geen providerrelay. Compatibele services moeten browsertoegang (CORS) toestaan en gebruiken normaal gesproken HTTPS; localhost vormt hierop de uitzondering. Gebruik voor een volledig lokale workflow een lokaal Ollama-model en lokaal beschikbare referentiedocumenten, en vermijd online zoeken naar symbolen of cloudmodellen.

Gegenereerde onderdelen en circuits moeten nog steeds technisch worden gecontroleerd. Controleer de exacte pinbezetting van de behuizing, het vermogen, de voedingsspanning, de logicaniveaus en de bedrijfsgrenzen aan de hand van de echte datasheets. De structurele validatie, ontwerpregelcontroles en verbindingscontroles voor de lay-out van TinyCAD helpen fouten te vinden; ze bewijzen niet dat het circuit werkt, vervangen geen simulatie en stellen niet vast dat de hardware is getest.

## Problemen oplossen
{: #troubleshooting}

| Symptoom | Wat u moet controleren |
| --- | --- |
| **Chat is niet beschikbaar of ontbreekt** | Gebruik een actuele TinyCAD v4-versie. Open de bedoelde tekening of bibliotheek en zoek Chat op de werkbalk. |
| **Aanmelden met een ChatGPT-account is niet beschikbaar** | Gebruik Desktop of een lokaal gehoste versie met de account-runtime. Kies in de openbare gehoste app Use API Key. Sta het externe aanmeldvenster toe en schakel tijdens de toestemming het gebruik van het ChatGPT-abonnement in. |
| **Stap 2 gaat niet verder** | Lees de verbindingsfout. Controleer de sleutel, modeltoegang, API-facturering/quota, de URL van het eindpunt en de internetverbinding. TinyCAD voert deze controle uit wanneer u op Next klikt. |
| **Er verschijnen geen modellen** | Controleer de toegang tot de provider. Voer voor eindpunten zonder modeldetectie de gevraagde Model ID in. Installeer een model met toolondersteuning voordat u verbinding maakt met Ollama. |
| **Lokale Ollama kan geen verbinding maken** | Start de server, controleer de lokale API-URL, sta de exacte origin van TinyCAD toe via OLLAMA_ORIGINS, start Ollama opnieuw en sta toegang tot het lokale netwerk van de browser toe als daarom wordt gevraagd. |
| **De assistent antwoordt, maar kan geen afbeeldingen bewerken of lezen** | Controleer de ondersteuning voor tools/vision van het model. Voeg een leesbare uitsnede of minder PDF-pagina's toe. |
| **Een tool meldt dat de tekening is gewijzigd** | Laat de assistent de huidige status opnieuw lezen en probeer het opnieuw. Eerder toegepaste wijzigingen blijven beschikbaar via Undo. |
| **Een antwoord stopt vanwege een providerlimiet** | Probeer een kleinere taak of lager denkniveau. TinyCAD kan onvolledige antwoorden automatisch opnieuw proberen; nieuwe pogingen kunnen extra tegoed verbruiken. Voltooide bewerkingen kunnen ongedaan worden gemaakt. |

Ga verder met [aangepaste symboolbibliotheken](../Custom-symbol-libraries/), [symbolen bewerken](../Editing-a-Symbol/), [lay-out netjes maken](../Layout-Tidy-Up/) of [simulatie](../Simulation/).

---
layout: default
---
# Gebundelde SPICE-modellen
{: #bundled-spice-models}

TinyCAD bevat een offlinecatalogus met SPICE-modellen. Gebruik een gebundeld model om een component met ngspice te simuleren, kandidaatcomponenten te vergelijken of een aangepast model te starten op basis van een bekende, werkende definitie. Modellen zijn beschikbaar in zowel TinyCAD Web als de Desktop App. De modelkiezer werkt lokaal nadat de toepassing is geladen.

## Begin met een modelsymbool
{: #start-with-a-modelled-symbol}

Open **Standard → SPICE essentials** in het zijpaneel, of gebruik **Simulation → SPICE components** op de werkbalk. Kies **More…** om de volledige symboolbibliotheek te doorzoeken. Alle 29 SPICE essentials-symbolen hebben een gebundeld model en een vooraf ingestelde pinaansluiting. De meeste gebruiken een **TinyCAD Basic**-model. De LM358 en LM324 gebruiken complete OpenJellyBean-pakketmodellen.

Plaats een symbool, selecteer het in de tekening en open **SPICE** in het onderste paneel **Symbol**. **Bundled** toont het gekoppelde model en de bron ervan. Gewone symboolvelden zoals **Value**, **Wiper** en **Initial Voltage** blijven de TinyCAD Basic-modellen aansturen die deze velden gebruiken. Stel bijvoorbeeld **Value** van een weerstand in op `10k` om 10 kΩ te simuleren met het standaardmodel **Ideal resistor**.

![Op het SPICE-tabblad van het geplaatste symbool is Bundled geselecteerd en staat een koppeling naar het TinyCAD Basic-model voor een gele LED.](/v4/images/simulation/bundled-spice-properties.png)

Als u dit in een volledige schakeling wilt uitproberen, kiest u **Open Example → SPICE tutorial → divider** en selecteert u een van de weerstanden. Het tabblad **SPICE** toont de koppeling **Ideal resistor**. Wijzig de weerstandswaarde en voer de Operating Point-instelling van het voorbeeld opnieuw uit. Het bewaarde resultaat geeft de schakeling van vóór uw wijziging weer.

## Een model kiezen en koppelen
{: #choose-and-attach-a-model}

1. Open het tabblad **SPICE** van het symbool. Selecteer **Bundled** en vervolgens **Find SPICE model…**.
2. Voer een onderdeelnummer, alias, model-ID of apparaatfamilie in. Wis het zoekveld om de beschikbare keuzes voor dat symbool te zien.
3. Selecteer een rij. De details onder de tabel tonen de modelbeschrijving, bron, aansluitvolgorde en eventuele instelbare parameters. Vouw **View SPICE definition** uit om de instantie-template en eventuele modelkaarten of subcircuits te bekijken die het gebruikt. Selecteer de bronkoppeling voor de oorspronkelijke definitie of het upstream-archief en de bestandsnaam van het bestand daarin.
4. Controleer de pinaansluiting en stel eventuele parameteroverschrijvingen in. Kies **Select SPICE model**. In een tekening wijzigt dit de geselecteerde plaatsing en kan deze wijziging ongedaan worden gemaakt.

![Dialoogvenster Find SPICE model voor een gele LED. Het geselecteerde circsim-model toont de bron en de geverifieerde pinnummers voor anode en kathode.](/v4/images/simulation/bundled-spice-picker.png)

**SPICE essentials-symbolen** tonen alleen modellen met geverifieerde aansluitingen voor de pinindeling van dat symbool. Sommige symbolen hebben alleen het Basic-standaardmodel. Een gele LED biedt bijvoorbeeld het Basic-model en het circsim-model voor een gele LED. Een standaard-NPN-transistor kan het generieke model gebruiken of een alternatief, zoals `2N3904_OJ` van OpenJellyBean, waarbij collector, basis en emitter al zijn toegewezen aan respectievelijk pin 3, 1 en 2.

**Andere symbolen**, waaronder oudere plaatsingen zonder bibliotheekidentiteit, kunnen de volledige catalogus voor hun editie doorzoeken. Controleer de voorgestelde overeenkomsten en selecteer voor elke modelaansluiting een afzonderlijke fysieke pin. Neem voedingspinnen op, ook als ze verborgen zijn in het schema. Gebruik de geverifieerde pinindeling van het symbool en de aansluitvolgorde van het model. Laat fysieke pinnen die het model niet gebruikt buiten de toewijzing. Een tijdelijk symbool met een verkeerd aantal of een verkeerde functie van de pinnen moet worden gecorrigeerd voordat het apparaat ermee kan worden weergegeven.

![Handmatige pinaansluiting voor een 741-symbool in een aangepaste bibliotheek, waarbij de vijf circsim LM741-aansluitingen zijn toegewezen aan fysieke pinnen 3, 2, 6, 7 en 4.](/v4/images/simulation/bundled-spice-pin-mapping.png)

In het voorbeeld wordt het circsim-model `LM741` gekoppeld aan een 741-symbool met pinnen 3 (niet-inverterende ingang), 2 (inverterende ingang), 6 (uitgang), 7 (positieve voeding) en 4 (negatieve voeding). Het model laat de offset-null-pinnen buiten beschouwing. Voor een symbool uit een bibliotheek met meerdere onderdelen biedt TinyCAD de pinnummers die gedeeld worden door de onderdelen die de template zullen gebruiken. Kies een compleet pakketmodel als uw symbool en simulatie het volledige pakket nodig hebben.

Als de modelkiezer **No models match this search** toont, wis dan de zoekopdracht of probeer een bredere zoekterm. Een symbool met een tag biedt mogelijk alleen de geverifieerde keuzes. Als u een ander model wilt gebruiken, controleer dan de pinindeling van het apparaat en gebruik een geschikt [aangepast bibliotheeksymbool](../Custom-symbol-libraries/) of een Custom-definitie.

## Kies het juiste detailniveau
{: #choose-the-right-level-of-detail}

| Wat u wilt onderzoeken | Met welk model u begint |
| --- | --- |
| Een spanningsdeler, een RC-tijdconstante of het basisgedrag van een schakeling controleren | Gebruik TinyCAD Basic. Ideale modellen zijn handig wanneer parasitaire effecten en toleranties buiten het onderzoek vallen. |
| Voorspanning, versterking, doorlaatspanning van een diode of schakelen met een specifiek onderdeel onderzoeken | Zoek naar het exacte onderdeel of een gedocumenteerd equivalent. Controleer de beschrijving en modelaannames bij uw spanning, stroom, temperatuur en frequentie. |
| Een vervangend onderdeel onderzoeken wanneer er geen exact model beschikbaar is | Gebruik een gedocumenteerde, direct vervangbare kandidaat of een generiek model voor de apparaatfamilie. Controleer de functies van de pakketpinnen, de voedingspolariteit en de bedrijfsgrenzen afzonderlijk. Noteer welk gedrag u benadert. |
| Een grenswaarde onderzoeken, zoals ruis, het common-mode-ingangsbereik, thermische drift of een proceshoek | Controleer of het model het effect expliciet dekt. Gebruik zo nodig een geschikt fabrikant- of procesmodel als [Custom-definitie](../SPICE-output/#models-templates-and-pin-order). |

Gebundelde modellen beschrijven typisch gedrag. Zo geeft de circsim 741 nominale versterking, bandbreedte, slew rate, offset en voedingsstroom weer. Het model gebruikt een ingangstrap met hoge impedantie. De circsim gele LED modelleert elektrisch gedrag rond een doorlaatspanning van 2,10 V bij 20 mA. Voor lichtopbrengst, componentclassificaties en gedrag onder ongunstigste omstandigheden is afzonderlijk bewijs nodig.

## Een standaardwaarde voor de bibliotheek instellen of een Custom-kopie bewerken
{: #set-a-library-default-or-edit-a-custom-copy}

- **Voor toekomstige plaatsingen** opent u een bewerkbare `.tclib`-bibliotheek en selecteert u het symbool. Open het tabblad **SPICE** en gebruik dezelfde modelkiezer. Sla de bibliotheek op. De gekozen definitie wordt de standaard voor toekomstige plaatsingen vanuit dat item. Bestaande plaatsingen behouden hun opgeslagen definities.
- **Voor één plaatsing** selecteert u het symbool in het schema en wijzigt u de **SPICE**-eigenschappen. Dit is handig om twee modellen naast elkaar in dezelfde tekening te vergelijken.
- **Om de modeltekst te bewerken** selecteert u **Custom** op een gekoppeld symbool. TinyCAD kopieert de instantie-template en eventuele vereiste definities naar bewerkbare velden met de toegewezen pinnen. Bij modellen met definities gebruikt de lokale kopie namen die bij de plaatsing horen, zodat deze naast het oorspronkelijke gebundelde model kan worden uitgevoerd. Voor een ideale weerstand volstaat de instantie-template op zichzelf.

Als u terugschakelt naar **Bundled**, wordt het gekoppelde model hersteld. Schakel opnieuw over naar **Custom** om uw bewerkingen terug te halen. De geselecteerde modus bepaalt welke definitie wordt gebruikt; beide instellingen blijven behouden na opslaan en opnieuw openen. **Remove attached model** verwijdert de koppeling en herstelt de vorige template, als die was opgeslagen.

Een ondersteunde [KiCad SPICE-import](../Importing-Symbols-from-KiCAD/#import-spice-models-with-symbols) wordt weergegeven onder **Custom**. Als u die geïmporteerde definitie wilt behouden voor toekomstige plaatsingen, importeert u deze in een bewerkbare bibliotheek en slaat u die op.

## Uitvoeren, opslaan en delen
{: #run-save-and-share}

1. Verbind de toegewezen pinnen en voedingen, inclusief een aansluiting op SPICE-aarde **0**.
2. Maak een [simulatieblad](../Simulation/) of open er een, selecteer de analyse in **Setup** en kies **Run**. De actieve gebundelde modellen worden automatisch gevonden. Gebruik **Setup → SPICE models** om extra bestanden te koppelen die een Custom-model nodig heeft.
3. Open **Diagnostics → Generate circuit text** om de uitgebreide instantieregels en modelverwijzingen te controleren. Controleer de penaansluitvolgorde en voedingsnetten als een resultaat er onjuist uitziet.

Tekeningen bewaren de revisie, toegewezen pinnen en parameterinstellingen van elk model, met één opgeslagen kopie van elk pakket waarnaar wordt verwezen. Sla de tekening op om de schakeling en bijbehorende modeldefinities te delen. XSPICE-modellen die alleen voor Desktop beschikbaar zijn, vereisen de Desktop-engine om te kunnen worden uitgevoerd. **Generate Spice NetList** neemt de definities van de gebruikte gebundelde modellen op in de SPICE-uitvoer. Zie [SPICE-modellen en netlistuitvoer](../SPICE-output/#inspect-and-export-a-spice-netlist) voor exportopties en het verschil tussen een simulatiebestand en een tekening.

## Inhoud en bronnen van de catalogus
{: #catalog-contents-and-sources}

TinyCAD Web bevat 97 catalogusmodellen. De Desktop App voegt drie definities toe waarvoor native XSPICE vereist is. Gebruik de koppeling bij de details van elk model voor de exacte modelbron. TinyCAD levert licentievermeldingen mee met de pakketten; deze zijn ook beschikbaar in **About TinyCAD**.

| Pakket | Modellen | Voorbeelden |
| --- | ---: | --- |
| TinyCAD Basic | 20 | Ideale weerstanden, condensatoren en spoelen, onafhankelijke bronnen, templates voor potentiometers en transformatoren, generieke halfgeleiders, 741 en resonatoren |
| OpenJellyBean | 42 | BJT's, MOSFET's, JFET's, signaal- en Schottky-diodes, zenerdiodes, LED's, opampkanalen en -pakketten, en een potentiometer |
| circsim | 15 | LM741, gele LED, LM393, LM339, NE5532, NE555, optokoppelaars, spanningsregelaars en vermogens-MOSFET's |
| Spice_Files | 14 | Generieke diodes en LED's, gelijkrichterbrug, optokoppelaars, schakelaar, relais, kristal van 16 MHz en transformator van 10:1 |
| ngspice-speciale modellen | 1 | ICL8038-signaalgenerator |
| ngspice-speciale modellen (Desktop) | 3 | LTC1044HV-spanningsinverter, LR8-spanningsregelaar en bijbehorende opamp |
| SkyWater SKY130 | 1 | Nominale geïntegreerde PNP-transistor met substraataansluiting |
| GlobalFoundries GF180MCU | 3 | Nominale MIM-condensatoren van 1,0, 1,5 en 2,0 fF/µm² |
| IHP SG13G2 | 1 | Nominale geïntegreerde PNP-transistor pnpMPA |

De foundry-items zijn geselecteerde nominale modellen. Volledige proceskits bieden afzonderlijke modelstructuren, proceshoeken en simulatorinstellingen. Zie de [catalogusreferentie](https://github.com/matt123p/TinyCADv4/blob/main/docs/bundled-spice-models.md#catalog-sources) voor de broninventaris, licenties en geverifieerde alternatieven voor SPICE essentials.

## De Desktop AI-assistent gebruiken
{: #ask-the-desktop-ai-assistant}

Als u expliciet om SPICE-ondersteuning vraagt, kan de [Desktop AI-assistent](../AI-Assistant/) de lokale catalogus doorzoeken, modeltekst en bronnen bekijken en de aansluiting op uw symbool controleren. De assistent kan een model koppelen aan een geplaatst component of een model als standaard opslaan bij het toevoegen van een nieuw bibliotheekonderdeel. Voordat een bestaande Custom-template wordt vervangen, vraagt de assistent om bevestiging. Bij gewoon schema- of symboolwerk behoudt de assistent de opgegeven standaardinstellingen.

Probeer voor een vergelijking zonder wijzigingen: “Zoek een gebundeld SPICE-model voor Q1. Vergelijk de aansluitvolgorde en beperkingen met het bedoelde onderdeel. Laat de tekening ongewijzigd.”

Probeer voor een wijzigingsverzoek: “Koppel het gebundelde 2N3904-model aan Q1 nadat de fysieke pinaansluiting is gecontroleerd. Toon me de bron en eventuele aannames.”

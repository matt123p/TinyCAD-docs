---
layout: default
---
# Bronnen, sondes en virtuele instrumenten
{: #sources-probes-and-virtual-instruments}

Het menu **Simulation** op de werkbalk bevat invoeggereedschappen voor **SPICE** en **Lab Equipment**. Kies een gereedschap en plaats het op een schema. Klik met de rechtermuisknop of druk op Escape om het plaatsen te annuleren. Gereedschappen die vanuit een simulatieblad worden geselecteerd, schakelen over naar een schema om ze te plaatsen; hun definities worden in de tekening ingesloten.

## Onafhankelijke bronnen
{: #independent-sources}

Kies **Simulation → SPICE → Insert Source**. De editor wordt geopend voordat u de bron plaatst. Selecteer spanning of stroom en een signaaltype. Selecteer de behuizing van een geplaatste bron om de editor onderaan opnieuw te openen.

| Signaaltype | Geschikt voor | Te controleren instellingen |
| --- | --- | --- |
| DC | Voorspanning en een constante voeding | DC-waarde en polariteit |
| Sinus | Een periodieke analoge ingang | Offset, piekamplitude, frequentie, fase, vertraging en demping |
| Blokgolf/puls | Schakelen en timing | Lage/hoge niveaus, vertraging, stijg-/daaltijd, pulsbreedte en periode |
| Driehoek | Een herhalende zaagtand | Niveaus, periode en stijg-/daaltiming |
| Stukgewijs lineair (PWL) | Een opgegeven reeks | Oplopende tijd-/waardeparen, één paar per regel |
| Exponentieel | Een gevormde overgang | Niveaus, vertragingen en tijdconstanten |
| FM | Frequentiemodulatie | Draaggolf- en modulatie-instellingen |

![Editor van de sinusbron en golfvormvoorbeeld](../Images/simulation/source-settings.png)

Het voorbeeld geeft de numerieke golfvorminstellingen weer. Gebruik het om een onverwachte offset, piek of timing op te merken voordat u de simulatie start. Ongeldige instellingen verhinderen het opstarten. Het pictogram van een bron verandert afhankelijk van de golfvorm; een stroombron behoudt zijn richtingspijl.

**AC-amplitude en fase zijn afzonderlijke instellingen** voor kleinsignaal-frequentieanalyse. Ze staan los van de amplitude van de transiënte sinus. Ook de DC-voorspanning van de bron en de transiënte golfvorm moeten weloverwogen worden ingesteld. Zie [analyses](../Simulation-Analyses/) en [de bronnentutorial](../SPICE-Tutorial-03/).

Nieuwe bronnen en sondes hebben een compacte aansluitafstand van 8 mm. Bij oudere, grote bedieningselementen biedt de editor onderaan de optie **Use compact symbol**. Bij de omzetting blijft de eerste aansluiting verankerd en worden bestaande verbindingen als één ongedaan te maken bewerking verlengd tot de verplaatste aansluitingen. Controleer de verbindingen nadat u de grootte hebt gewijzigd.

## Sondes en aarde
{: #probes-and-ground}

| Gereedschap in **Simulation → SPICE** | Aansluiting | Betekenis |
| --- | --- | --- |
| **Insert Probe** | Eén punt op een net | Spanning ten opzichte van aarde 0 |
| **Insert Differential Probe** | + en − op twee netten | `V(+) − V(−)` |
| **Insert Current Probe** | In serie met een tak | Stroom van + naar − |
| **Insert Ground** | Op het referentienet van de schakeling | Verbindt het Earth-voedingssymbool met waarde 0 |

Bij het plaatsen van een sonde/aarde wordt het onderdeel op een draad vastgeklikt en wordt de draad op het aansluitpunt gesplitst. Controleer de werkelijke puntlocatie en polariteit. Een stroomsonde is een **ideale spanningsbron van nul volt**: deze moet in serie staan. Plaatsing over een voeding veroorzaakt kortsluiting. Verwijder of onderbreek de oorspronkelijke parallelle draad wanneer u een seriemeting invoegt.

Sondepanelen selecteren de acquisitie- en weergavemodus. Signalen van het werkpunt kunnen scalaire metingen tonen; complexe AC-resultaten kunnen worden weergegeven als reëel, grootte, dB en fase. Als het vereiste resultaat ontbreekt of bij een gewijzigde schakeling hoort, geeft het paneel aan waarom het niet beschikbaar is of opnieuw moet worden berekend.

### Gestuurde bronnen
{: #controlled-sources}

**Insert Controlled Source** biedt een spanningsgestuurde spanningsbron (**E**) of spanningsgestuurde stroombron (**G**). De uitgangspennen zijn +/−, genummerd 1/2; de stuurpennen zijn C+/C−, genummerd 3/4. Sluit beide zijden van de stuuringang aan en controleer de overdrachtskarakteristiek in de editor. Een stuuringang is geen voedingsaansluiting voor de uitgang.

## Virtuele laboratoriumapparatuur
{: #virtual-laboratory-equipment}

Kies deze instrumenten via **Simulation → Lab Equipment**. Het zijn operationele modellen met acquisitiebediening. De gelijknamige afbeeldingen in **Standard → Test & Measurement** zijn bedoeld voor tekeningen van een fysieke meetopstelling en voeren geen simulatiemetingen uit.

Download voor een kant-en-klaar bedrade schakeling [Virtual laboratory.dzn](../examples/simulation/virtual-laboratory.dzn) en gebruik **File → Open**. Dit is een bijbehorend demonstratiebestand, geen benoemd item in de meegeleverde voorbeeldbrowser.

### Oscilloscoop
{: #oscilloscope}

De oscilloscoop heeft twee differentiële kanalen: **1 A+**, **2 A−**, **3 B+**, **4 B−**. Sluit zowel de negatieve als de positieve ingang aan. De standaard ingangsbelasting is **1 MΩ**; deze kan invloed hebben op een schakeling met hoge impedantie.

Gebruik time/div en volts/div met het scherm van tien horizontale bij acht verticale divisies. De triggerstanden zijn **Auto**, **Normal** en **Single**. **Acquire** vraagt tien tijddivisies aan transiënte gegevens op, met een maximale stap die ongeveer gelijk is aan time/div gedeeld door 100. Als u na een simulatie de weergaveschaal wijzigt, ontstaat er geen nieuwe acquisitie en worden ontbrekende flanken niet opgelost.

AC-koppeling verwijdert het tijdgewogen gemiddelde uit het weergegeven signaal; dit is geen fysiek analoog hoogdoorlaat-ingangsmodel. GND-koppeling geeft nul weer terwijl de instrumentbelasting aangesloten blijft. De tijd- en niveauknoppen van de oscilloscoop helpen de gegevens te onderzoeken; ze maken van een run met te weinig samples geen geldige timingmeting.

### Multimeter
{: #multimeter}

Gebruik **VΩ en COM** voor spanning of weerstand, en **A en COM** voor stroom. Een stroommeting moet in serie staan. De standaard spanningsingang is **10 MΩ**; de stroomstand gebruikt een meetweerstand van **1 Ω** en een nulvolt-meetbron. Een moduswijziging verandert dus de belasting van de schakeling en vereist een nieuwe run.

DC geeft de betreffende stationaire/gemiddelde grootheid weer. AC gebruikt de tijdgewogen RMS-waarde met verwijderde DC-component. Een waarde buiten het bereik wordt weergegeven als **OL**. Dit zijn gemodelleerde instrumentgedragingen, zonder simulatie van zekering- of thermische storingen.

Weerstandsmeting is een afzonderlijke, tijdelijke meting aan een spanningsloze schakeling. Onafhankelijke bronnen worden uitgeschakeld en de instrumentaansluitingen worden voor de meting losgekoppeld. Het ondersteunde netwerk bestaat uit R/C/L en sondes: condensatoren zijn open bij DC en spoelen zijn kortgesloten. Actieve componenten of niet-ondersteunde sjablonen maken de weerstandsmeting niet beschikbaar. Interpreteer dit niet als een weerstandsmeting in de schakeling van een willekeurig elektronisch apparaat onder spanning.

### Functiegenerator
{: #function-generator}

De generator levert sinus-, puls-/blokgolf-, driehoek- en PWL-golfvormen met bedieningselementen voor amplitude, offset, frequentie en timing. Het voorbeeld toont de golfvorm **bij open uitgang**. Door de standaard uitgangsweerstand van **50 Ω** kan de amplitude aan de aansluitklemmen afnemen wanneer er een belasting is aangesloten.

Output Off benadert een open poort met **1 TΩ** lekweerstand. De kleinsignaal-AC-amplitude blijft gescheiden van de transiënte amplitude. Controleer of de vereiste amplitude piek, piek-tot-piek of RMS is voordat u de geprogrammeerde golfvorm met een gemeten waarde vergelijkt.

### Laboratoriumvoeding
{: #bench-supply}

Stel spanning, stroombegrenzing, uitgangsweerstand, inschakeling en een optionele stijgtijd in. Het model gebruikt een vloeiende gedragsmatige stroombegrenzing en een eindige weerstand; het paneel geeft de gemeten V/I en de werking in **CV/CC**-modus aan. Als u de stroombegrenzing lager instelt dan de belasting vraagt, daalt de geleverde spanning.

De voeding kan binnen dezelfde begrenzing stroom leveren of opnemen. Dit is geen model van een schakelende voeding van een fabrikant en ook geen thermisch model. Een uitgeschakelde uitgang gebruikt een benadering met een lekweerstand van 1 TΩ. Een stijgtijd beïnvloedt de transiënte analyse; het DC-werkpunt gebruikt de uiteindelijke ingestelde spanning.

Numerieke eigenschappen van de generator en voeding kunnen worden gekoppeld aan [Circuit Explorer](../Simulation-Charts-and-Measurements/) voor tijdelijke afstemming of testomstandigheden. In Desktop kunnen instrumentpanelen in afzonderlijke vensters worden geopend; grafieken kunnen in beide producten in een apart venster worden weergegeven.

## Belasting maakt deel uit van het experiment
{: #loading-is-part-of-the-experiment}

Een ideale spanningssonde en een belaste oscilloscoopingang leveren niet dezelfde schakeling op. Houd rekening met de generatorimpedantie, de meetweerstand van de meter, de ingangsbelasting van de oscilloscoop en gedeelde retourpaden voordat u resultaten vergelijkt. Gebruik een differentiële meting wanneer geen van beide uiteinden van het signaal met aarde is verbonden. Als de simulatie mislukt nadat u een instrument hebt toegevoegd, controleer dan eerst de bedrading en modus ervan voordat u de solverinstellingen wijzigt.

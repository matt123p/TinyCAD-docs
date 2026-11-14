---
layout: default
---
# Gebundelde voorbeelden
{: #bundled-examples}

Gebundelde voorbeelden zijn bewerkbare tekeningen die met TinyCAD worden meegeleverd. Ze laten zien hoe u de bibliotheken gebruikt, lichten verbindingskeuzes toe en bevatten schakelingen voor de [simulatietutorials](../Simulation-Tutorials/). U hoeft de bijbehorende symbolen niet afzonderlijk te downloaden.

## Een voorbeeld openen
{: #open-an-example}

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Browser
{: #browser}

Kies **Open Example** rechts op de donkere titelbalk. Nadat u een voorbeeld met instructies hebt geopend, verschijnt daarnaast **Explanation**. Gebruik die knop om het uitlegvenster weer te geven of te verbergen.

### Desktop-app
{: #desktop-app}

Kies **File → Open Example**, onder **Open Recent**. Gebruik **View → View Explanation** om de instructies bij het huidige voorbeeld weer te geven of te verbergen. De opdracht is niet beschikbaar als er geen uitleg aan de tekening is gekoppeld.

</div>

1. Kies een groep: **Examples**, **SPICE tutorial** of **XSPICE and digital tutorial**.
2. Selecteer een tekening om de voorbeeldweergave en beschrijving te zien. Deze selectie vervangt uw huidige tekening nog niet.
3. Kies **Open drawing**. Als u niet-opgeslagen wijzigingen hebt, beantwoordt u de vraag om op te slaan voordat u doorgaat.
4. Lees de uitleg, bekijk de verbindingen en wijzig de bewerkbare kopie. Gebruik **Save As** om uw versie te bewaren.

Gebruik **Search groups and examples** om een item op naam te zoeken. Wis de zoekopdracht en kies **All groups** als een filter een groep verbergt die u nodig hebt.

{% include video-player.html src="/v4/videos/simulation/examples.mp4" poster="/v4/videos/simulation/examples.jpg" caption="Open het netwerkvoorbeeld en toon de uitleg naast de tekening." %}

## Voorbeelden van apparatuur en lay-outs
{: #equipment-and-layout-examples}

Kies de groep **Examples** voor deze zeven tekeningen.

| Tekening | Wat wordt gedemonstreerd | Probeer dit |
| --- | --- | --- |
| **Transistorversterker** | Het oorspronkelijke transistorversterkerschema AMP.dsn | Volg de bias- en signaalpaden. Gebruik voor een gemodelleerde, uitvoerbare reconstructie [SPICE-tutorial, hoofdstuk 7](../SPICE-Tutorial-07/). |
| **Klein kantoornetwerk** | Router, PoE-switch, patchpaneel en blindpaneel in een rack, met een ISP-terminal, accesspoint en desktopswitch | Volg de uplink van het rack en de kabeltrajecten op kantoor; voeg een bijpassend 1U-paneel toe. |
| **ESP32-klimaat- en displaystation** | Verbindingen van controller, sensor en displaymodule | Volg de gelabelde voedings- en signaalpinnen en pas vervolgens de gekozen modules aan. |
| **Plan voor zonne-energie en accu thuis** | Zonne-energieopwekking, opslag en energieapparatuur voor thuis op een A3-pagina | Volg voedingspaden afzonderlijk van de bewakings-/besturingsverbindingen. |
| **Podcaststudio voor twee personen** | Microfoons, mixer/interface, opnamecomputer en afluisterapparatuur | Volg de microfooningangen, opname-uitgang en hoofdtelefoonfeeds. |
| **DC-belasting- en golfvormtestopstelling** | Aansluitingen van fysieke voeding, belasting, golfvormgenerator, oscilloscoop en meter | Maak onderscheid tussen complete instrumentkabels en afzonderlijke geleiders. |
| **DC-motor- en eindschakelaaropstelling** | Een motordriver, motor met vertraging, besturingsverbindingen en eindschakelaars | Volg de motorvoeding afzonderlijk van de PWM-/richting- en eindschakelaarsignalen. |

De zes lay-outs van apparatuur bevatten uitleg over hun verbindingen, aannames en mogelijke uitbreidingen. Het zijn fysieke-/systeemtekeningen zonder SPICE-modellen. De oorspronkelijke versterker is ook een tekenvoorbeeld; door deze te openen wordt hij niet automatisch een uitvoerbare simulatie.

Open aansluitingen kunnen opzettelijk zijn. Draden die andere eindpunten of aansluitingen raken, vormen echte verbindingen; controleer die dus zorgvuldig wanneer u een lay-out aanpast. Ingesloten afbeeldingen en pinnen maken deze voorbeelden draagbaar, maar vervangen niet de bedradingsdocumentatie van het daadwerkelijke apparaat.

## Simulatievoorbeelden
{: #simulation-examples}

### SPICE-tutorial
{: #spice-tutorial}

Deze groep volgt de [SPICE-cursus van elf hoofdstukken](../SPICE-Tutorial/). De cursus begint met een spanningsdeler en behandelt daarna bronnen, RC-laden, AC-filters, gelijkrichting met diodes, een gereconstrueerde transistorversterker en ontwerponderzoeken. Met de vermelding **Start here — using the tutorials** opent u de eerste spanningsdeler en krijgt u uitleg over de werkwijze.

De tekeningen bevatten hun symbolen, modeltekst, analyse-instellingen en bewaarde referentieresultaten. Daarom kan een golfvorm **al zichtbaar zijn voordat u voor het eerst simuleert**. Kies **Run** om nieuwe meetgegevens te verkrijgen voor uw huidige schakeling en instellingen. Volg de verwachte waarden in het hoofdstuk en breng de voorgestelde wijzigingen aan om te zien waarom het resultaat verandert.

### XSPICE- en digitale tutorial
{: #xspice-and-digital-tutorial}

Gebruik **TinyCAD Desktop** voor deze groep. De [XSPICE-cursus van zes hoofdstukken](../XSPICE-Tutorial/) behandelt logische waarheidstabellen, voortplantingsvertraging, gevaren, flipflops, tellers, analoge/digitale bruggen en onbekende toestanden. XSPICE wordt niet ondersteund in browserversies. Een browser kan wel tekeningen openen met opgeslagen XSPICE-resultaten om deze te bekijken.

De twee tutorialgroepen bevatten samen 28 afzonderlijke simulatietekeningen. De extra vermelding “Start here” verwijst naar dezelfde spanningsdeler als in het eerste SPICE-hoofdstuk. Elke les bevat links naar downloadbare `.dzn` tekeningen en bijbehorende `.cir` netlists, als alternatief voor het openen van de meegeleverde kopie. Open `.dzn` bestanden in TinyCAD; `.cir` bestanden zijn tekstbestanden om te bekijken of met een compatibele externe simulator te gebruiken.

## Uw experimenten bewaren
{: #keep-your-experiments}

De meegeleverde versie blijft ongewijzigd wanneer u de geopende kopie bewerkt. Als u hetzelfde meegeleverde voorbeeld opnieuw opent, krijgt u een nieuwe uitgangssituatie. Sla uw eigen tekening onder een nieuwe naam op om wijzigingen te bewaren, en sla simulatieresultaten op wanneer u numerieke gegevens wilt behouden.

Het venster **Explanation** en **Simulation charts** zijn onafhankelijk van elkaar. U hoeft het ene niet te sluiten om het andere te sluiten. In Desktop zijn grafieken beschikbaar via **View → Show Charts**; gebruik in beide producten **Simulation → Show charts** op de werkbalk.

Voeg bij het verspreiden van een opgeslagen tekening eventuele afzonderlijke notities toe die de lezer nodig heeft. De meegeleverde uitleg is gekoppeld aan het openen van het voorbeeld; ga er niet van uit dat deze opnieuw wordt weergegeven wanneer een opgeslagen kopie zelfstandig wordt geopend. De eigen ingesloten tekstaanduidingen van de tekening blijven onderdeel van het bestand.

Ga verder met [uw eerste simulatie](../Simulation/#run-your-first-simulation) of [de startgids voor de tutorial](../Tutorial-Start-Here/).

---
layout: default
---
# Tekeningen met meerdere bladen
{: #multiple-sheet-drawings}

Een TinyCAD-tekening kan meerdere schemawerkbladen in **één bestand** bevatten. Elk werkblad heeft een eigen tekengebied en een tabblad onder het canvas. Gebruik de tabbladen om telkens aan één werkblad te werken; samen beschrijven de schemawerkbladen één circuit.

## Waarom meerdere werkbladen gebruiken?
{: #why-use-multiple-sheets}

Met meerdere werkbladen kunt u een ontwerp indelen in begrijpelijke secties, in plaats van alles op één overvolle pagina te proppen. Bijvoorbeeld:

| Werkblad | Mogelijke inhoud |
| --- | --- |
| **Voeding** | Ingangsconnector, beveiliging, regelaars en voedingsrails |
| **Besturing** | Processor, klok, reset en programmeeraansluitingen |
| **Sensoren** | Meetingangen en hun interfacecircuits |
| **Uitgangen** | Drivers, relais, motoren, displays of externe connectoren |

Zo is elke sectie eenvoudiger te tekenen, te beoordelen en op een leesbaar formaat af te drukken. U kunt verwante componenten bij elkaar houden, elke pagina een duidelijk doel geven en de pagina's in een handige leesvolgorde rangschikken. Voor een klein ontwerp kan één werkblad nog steeds duidelijker zijn.

Een werkblad maakt deel uit van de huidige tekening, het is geen apart bestand of browsertabblad. Als u twee niet-gerelateerde tekeningbestanden opent, zijn ze niet met elkaar verbonden, ook niet als ze identieke labels bevatten.

## Werkbladen maken en ertussen schakelen
{: #create-and-switch-sheets}

1. Open uw tekening en zoek de werkbladtabbladen onder het canvas.
2. Kies **+** naast de tabbladen. De knopinfo luidt **Add new sheet**.
3. Voer een **Sheet Name** in, bijvoorbeeld `Control`, en kies **Add**.
4. Het nieuwe werkblad wordt actief. Plaats er componenten en draden op, of verplaats geselecteerde items vanaf een ander werkblad met Knippen en Plakken.
5. Selecteer het tabblad van een werkblad om ernaar terug te keren. Als u van werkblad wisselt, gaat de inhoud ervan niet verloren.

Gebruik duidelijke, onderscheidende namen, zodat iemand die het schema leest de benodigde sectie kan vinden.

## Een werkblad hernoemen
{: #rename-a-sheet}

1. Selecteer het tabblad van het werkblad.
2. Open het kleine pijlmenu naast de naam.
3. Kies **Rename**, voer de nieuwe **Sheet Name** in en kies vervolgens **Rename** in het dialoogvenster.

Hernoemen wijzigt de paginanaam. Het hernoemt geen componentreferenties of netlabels en verandert de elektrische verbindingen niet.

## De volgorde van werkbladen wijzigen
{: #change-the-sheet-order}

Sleep een werkbladtabblad op een ander tabblad om het naar die positie te verplaatsen. U kunt ook een tabblad selecteren, het pijlmenu openen en **Move left** of **Move right** kiezen om het telkens één positie te verplaatsen.

De volgorde wijzigen verandert de paginavolgorde, niet de componenten of de verbindingen van het circuit. Gebruik dit om de voedingssectie vooraan te zetten, verwante functies te groeperen of ondersteunende pagina's achter het hoofdcircuit te plaatsen. Sleep het **tabblad** als u de pagina's opnieuw wilt rangschikken; als u een component sleept, verplaatst u die component.

## Video: werkbladen indelen en verbinden met labels
{: #video-organise-sheets-and-connect-them-with-labels}

De uitleg begint met **Open Example → SPICE tutorial → divider**. De naam van het werkblad Circuit wordt gewijzigd in Power, daarna wordt Control aangemaakt en worden de tabbladen opnieuw gerangschikt. Vervolgens wordt R2 naar Control verplaatst. Overeenkomstige OUT-labels en massa-aansluitingen met de naam 0 verbinden de spanningsdeler opnieuw over de twee schemawerkbladen. De weergave Netlist bevestigt dat R1 en R2 hetzelfde OUT-net delen.

{% include video-player.html src="/v4/videos/simulation/multiple-sheets.mp4" poster="/v4/videos/simulation/multiple-sheets.jpg" caption="Maak werkbladen aan, hernoem ze en wijzig de volgorde; gebruik daarna overeenkomstige labels om een spanningsdeler tussen Power en Control te verbinden." %}

Het voorbeeld bevat ook een werkblad Simulation met een klokpictogram. Op dat werkblad worden analyse-instellingen en resultaten opgeslagen; het is iets anders dan een schemapagina. Alle schemawerkbladen dragen nog steeds bij aan hetzelfde gesimuleerde circuit.

## Verbindingen tussen werkbladen maken
{: #make-connections-between-sheets}

Een draad kan niet fysiek doorlopen naar een andere pagina. Gebruik in plaats daarvan **elektrisch actieve labels met dezelfde naam** op de punten die u wilt verbinden. TinyCAD behandelt die punten op alle schemawerkbladen in de tekening als één net.

Zo kan een regelaaruitgang met het label `+3V3` op Power een processor-ingang met het label `+3V3` op Control voeden. Een signaal met het label `RESET` kan een resetcircuit op het ene werkblad verbinden met een processor op een ander werkblad. De labels moeten aan de bedoelde draden of pinnen zijn bevestigd.

### Een gedeeld netlabel plaatsen
{: #place-a-shared-net-label}

1. Teken op het eerste werkblad de lokale draad naar de componentpin zoals gebruikelijk.
2. Selecteer het gereedschap **Label** en plaats het elektrische aansluitpunt op die draad of pin. Tekst die er alleen naast staat, is niet voldoende.
3. Bewerk de labeltekst en geef deze een duidelijke naam, zoals `RESET` of `I2C_SDA`. Selecteer de labeltekst om deze te bewerken; vervang de standaardtekst `Label`.
4. Schakel naar het andere werkblad en plaats nog een Label op de draad of pin die met hetzelfde net verbonden moet worden.
5. Voer **precies dezelfde naam** in, inclusief spelling, spaties en hoofdletters.
6. Herhaal dit op andere werkbladen waar hetzelfde elektrische net nodig is.

Gebruik het [Label-gereedschap](../Labels/) in plaats van het [Tekst-gereedschap](../Text/). Een notitie met de tekst RESET documenteert de tekening; een Label met de tekst RESET maakt een elektrische verbinding.

### Uitgewerkt voorbeeld: een spanningsdeler op twee werkbladen
{: #worked-example-a-divider-on-two-sheets}

Splits de gewone 5 V-spanningsdeler op in een voedingssectie en een belastingssectie:

| Werkblad | Componenten | Gedeelde verbindingen |
| --- | --- | --- |
| **Power** | V1 = 5 V en R1 = 1 kΩ | De uitgangsdraad van R1 heeft het label **OUT**; de retour van V1 is verbonden met massa **0**. |
| **Control** | R2 = 1 kΩ | De bovenste pin van R2 heeft het label **OUT** en de onderste pin is verbonden met een massasymbool met de naam **0**. |

OUT verbindt R1 met R2 over de werkbladen heen. De overeenkomstige massanamen verbinden de retour van R2 met massa 0 op Power. Er is geen draad tussen de pagina's getekend, maar het elektrische circuit is nog steeds V1 → R1 → R2 → retour. Met de oorspronkelijke waarden blijft de uitgangsspanning bij het werkpunt 2,5 V.

In de video wordt R2 verplaatst met **Cut and Paste**, waarbij de referentie behouden blijft in plaats van een tweede R2 te maken. Houd componentreferenties in de hele tekening uniek wanneer u meer componenten toevoegt, zodat netlijsten en rapporten het bedoelde onderdeel identificeren.

## Labelnamen gelden voor de hele tekening
{: #label-names-apply-to-the-whole-drawing}

Gedeelde namen zijn handig, maar maken het ook gemakkelijk om per ongeluk niet-gerelateerde secties met elkaar te verbinden. Een label met de naam `OUT` op drie verschillende werkbladen verbindt alle drie de locaties; de naam is niet lokaal voor elke pagina. Gebruik specifiekere namen zoals `SENSOR_OUT` en `AUDIO_OUT` als de signalen gescheiden moeten blijven.

Werkbladnamen en de tabbladvolgorde bieden geen elektrische isolatie. De vorm van een label is ook slechts een visuele conventie: labels met dezelfde naam horen bij hetzelfde net, ongeacht of ze de stijl gewoon, ingang, uitgang of bidirectioneel hebben. Kies vormen om lezers te helpen de bedoelde signaalrichting te volgen en namen om de verbindingen te bepalen.

[Voedingssymbolen](../Power-symbols/) bieden ook gedeelde voedingsverbindingen met een naam. Houd de namen consistent: `+3V3` en `3V3` zijn verschillende namen. Gebruik voor SPICE een echte verbinding met knooppunt **0**; een afzonderlijk net met de naam GND is niet automatisch de massa-referentie van de simulator.

## Verbindingen tussen werkbladen controleren
{: #check-the-cross-sheet-connections}

Gebruik het modusmenu van het onderste lijstvenster om van **Symbols** naar **Netlist** te schakelen. Zoek het gedeelde label en inspecteer de verbonden componentreferenties en pinnummers. De kolom Sheet vermeldt het hoofditem dat door de rij wordt weergegeven; de kolom Symbols kan onderdelen van andere werkbladen op hetzelfde net bevatten. In het voorbeeld bevat OUT zowel R1 als R2.

Als de verbinding ontbreekt, controleer dan het bevestigingspunt van het label en de exacte tekst ervan op beide pagina's. Als niet-gerelateerde onderdelen hetzelfde net delen, zoek dan elders in de tekening naar een opnieuw gebruikte labelnaam. [Design Rules Check](../Design-Rules-Check/) kan helpen elektrische problemen te identificeren, maar kan niet bepalen of u twee nets met dezelfde naam gescheiden wilde houden.

Zie [Netlist Editor](../Netlist-Editor/) en [Labels](../Labels/) voor meer informatie. Voer in een simulatietekening de analyse opnieuw uit nadat u het circuit hebt gewijzigd, zodat het resultaat alle actuele schemawerkbladen weerspiegelt.

## De volledige tekening opslaan
{: #save-the-complete-drawing}

Met **Save** slaat u alle werkbladen samen op. Gewone tekeningen gebruiken `.dsn`; tekeningen met simulatie-inhoud gebruiken [`.dzn`](../Simulation/#dzn-simulation-drawings). U hoeft niet elk werkblad afzonderlijk op te slaan.

- Terug naar [Tekening](../User-guide/)

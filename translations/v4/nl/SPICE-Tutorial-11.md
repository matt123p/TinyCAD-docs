---
layout: default
title: 11. How TinyCAD implements SPICE
---
# 11. Hoe TinyCAD SPICE implementeert
{: #how-tinycad-implements-spice}

[Vorige: ontwerponderzoeken](/v4/SPICE-Tutorial-10/) · [Inhoudsopgave](/v4/Simulation-Tutorials/) · [XSPICE-cursus](/v4/XSPICE-Tutorial-01/)

TinyCAD biedt de schema-editor, simulatie-instellingen, instrumenten, grafieken
en metingen. **ngspice** is de circuitoplosser die eronder zit.
U tekent en configureert het experiment in TinyCAD; TinyCAD vertaalt dit naar
SPICE-circuittekst, voert ngspice uit en presenteert de geretourneerde resultaten.

De voorbeelden in dit hoofdstuk worden meegeleverd met TinyCAD. Kies **Open Example →
SPICE tutorial**, selecteer **divider** of **rc-ac** en kies vervolgens **Open Drawing**.
Gebruik voor de digitale demonstratie **Open Example → XSPICE and digital tutorial →
logic-buffer → Open Drawing**. U hoeft geen cursus of modellen te downloaden.

## SPICE, ngspice en XSPICE
{: #spice-ngspice-and-xspice}

SPICE beschrijft circuits als componenten, verbonden knooppunten en wiskundige
apparaatmodellen. Een werkpuntanalyse lost de DC-vergelijkingen op. Een transiëntanalyse
volgt het gedrag in de gesimuleerde tijd. Een AC-analyse lineariseert het circuit
rond het instelpunt om de kleinsignaal-frequentierespons te berekenen.
De analyse selecteren is dus onderdeel van het definiëren van het experiment.

ngspice is een open-source mixed-signal-circuitsimulator die afstamt van Berkeley
SPICE. TinyCAD bundelt de engine, zodat u geen afzonderlijke opdrachtregel-simulator
hoeft te installeren en uit te voeren. De engine waarmee deze cursussen zijn
gekwalificeerd is **ngspice 47**; in de weergave **Diagnostics** van een uitvoering
worden de backend en build vermeld. Zie het [officiële ngspice-overzicht](https://ngspice.sourceforge.io/presentation.html)
voor achtergrondinformatie over het upstream-project.

**XSPICE is een uitbreiding die in ngspice is geïntegreerd**, geen andere toepassing
die u moet starten. Deze voegt codemodellen toe, waaronder functionele analoge blokken
en digitale logica waarvan de gebeurtenissen worden gecoördineerd met de analoge
oplosser. Een digitale statuswijziging kan daardoor in dezelfde simulatie invloed
hebben op een analoog circuit. De [officiële introductie van XSPICE](https://ngspice.sourceforge.io/xspice.html)
beschrijft dit onderscheid.

| TinyCAD-omgeving | Hoe de engine wordt uitgevoerd | Welke voorbeelden u moet gebruiken |
| --- | --- | --- |
| Desktop | Een afzonderlijk native solverproces, met meegeleverde XSPICE-codemodellenbibliotheken | Analoge SPICE en de XSPICE-cursus |
| Browser | ngspice gecompileerd naar WebAssembly, uitgevoerd in een afzonderlijke webworker | Analoge SPICE en compatibele analoge gedragsmodellen; deze build bevat geen XSPICE |

TinyCAD kiest de backend voor de betreffende omgeving. U hoeft geen ngspice-
uitvoerbaar bestand te zoeken of een externe simulator te selecteren voor de
meegeleverde voorbeelden. Een XSPICE-tekening kan de modeldefinities bevatten,
maar heeft nog steeds de native codemodellenbibliotheken nodig die met Desktop
worden geleverd. Als u de tekening naar de browser kopieert, krijgt u die engine-
mogelijkheid er niet bij.

## Van tekening naar resultaat
{: #from-drawing-to-result}

De belangrijkste stappen zijn:

1. **Bepaal de elektrische verbindingen.** TinyCAD bepaalt welke componentpinnen
   bij hetzelfde net horen op basis van draden, knooppunten en netlabels. Een
   kruising van draden is geen verbinding, tenzij de nets in de tekening daadwerkelijk
   met elkaar verbonden zijn. Gelijke netlabels verbinden punten op afstand; tekst
   die bij een draad is geplaatst doet dat niet.
2. **Werk de componentdefinities uit.** Elk gesimuleerd symbool levert een SPICE-
   sjabloon. TinyCAD vervangt daarin de referentie, de namen van de verbonden
   knooppunten en de waarden, en voegt de vereiste apparaat- of subcircuitdefinities toe.
3. **Voeg het experiment toe.** Het Simulation-blad bevat de analyse,
   temperatuur, parameters, modelbijlagen en gevraagde signalen. TinyCAD controleert
   vóór het aanbieden van het circuit op ontbrekende modellen, niet-aangesloten pinnen,
   dubbele referenties en andere detecteerbare configuratiefouten.
4. **Voer ngspice uit.** De solver berekent spanningen, stromen en andere gevraagde
   grootheden. De solver retourneert gegevens en een diagnostisch logboek; TinyCAD
   verzamelt deze in een acquisitie die is gekoppeld aan de instellingen en de
   engine-identiteit van de uitvoering.
5. **Inspecteer en meet.** TinyCAD presenteert grafieken, numerieke gegevens en
   berekende metingen. Een afsnijfrequentiemeting wordt bijvoorbeeld afgeleid van de
   AC-gegevens; het is geen extra component die in het schema is geplaatst.

Hierdoor is duidelijk waarom een tekening die er correct uitziet niet volstaat: een
transistor heeft een model en een correcte pinmapping nodig, terwijl twee draden
elektrisch verbonden moeten zijn, ook als hun eindpunten op de huidige zoom dicht
bij elkaar lijken.

## Welke symbolen moet ik gebruiken?
{: #which-symbols-should-i-use}

Open het **pictogram met de pulsvorm** op de werkbalk. De tooltip is **Simulation**.
In de onderstaande instructies betekent **Simulation → …** het menu van dit pictogram.

| Wat u nodig hebt | Waar u het vindt | Wat u moet controleren |
| --- | --- | --- |
| Weerstand, condensator, spoel, diode, led, NPN/PNP-transistor of 741-opamp | **Simulation → SPICE components** of de bibliotheek **SPICE essentials** | Waarde, polariteit, voedingen en modelaannames |
| Onafhankelijke spannings-/stroombron | **Simulation → SPICE → Insert Source** | Brontype, signaalvorm, eenheden en aansluitrichting |
| Referentieknooppunt | **Simulation → SPICE → Insert Ground** | Verbind het elektrisch; de SPICE-referentie is knooppunt `0` |
| Spanningsmeting | **Insert Probe** of **Insert Differential Probe** in het SPICE-submenu | Een enkelzijdige spanning is ten opzichte van aarde; een differentiële probe meet tussen de aansluitingen |
| Meting van takstroom | **Simulation → SPICE → Insert Current Probe** | Plaats de probe in serie en controleer de positieve richting |
| Afhankelijke bron | **Simulation → SPICE → Insert Controlled Source** | Stuuraansluitingen, uitgangsaansluitingen en versterking/transconductantie |
| Instrumenten zoals op een werkbank | **Simulation → Lab Equipment** | Instellingen van oscilloscoop, multimeter, functiegenerator en werkbankvoeding; belasting en limieten zijn van belang |
| Gewone gemodelleerde logica | De bibliotheek **Digital logic** | Deze configureerbare, draagbare SPICE-modellen verschillen van de gebeurtenisgestuurde XSPICE-voorbeelden; controleer voedingspinnen en modeleigenschappen |
| Gebeurtenisgestuurde XSPICE-logica | De ingebedde voorbeelden van **XSPICE and digital tutorial** | Gebruik Desktop en behoud de analoge/digitale bruggen in het model |

De bibliotheek SPICE essentials bevat kant-en-klare configuraties van veelgebruikte
apparaten. Een generieke transistor of een model in de stijl van een 741 is handig
om mee te leren, maar het gesimuleerde gedrag komt niet automatisch overeen met de
specificaties van een bepaald onderdeel van een fabrikant. In de hoofdstukken over
versterkers worden de generieke modellen beschreven die zijn gebruikt ter vervanging
van de oorspronkelijke `AMP.DSN`-apparaten.

Een symbool uit een andere bibliotheek is mogelijk alleen bedoeld om te tekenen.
Selecteer het geplaatste symbool en inspecteer het tabblad **SPICE** in de eigenschappen.
Het symbool heeft een geldige SPICE-template nodig, evenals eventuele modeldefinities
waarnaar die template verwijst. Een overeenkomende naam, behuizing of afbeelding voegt
die definities niet toe. Evenzo benoemt een label met de naam `VCC` een
net; het maakt geen voedingsspanning aan. Sluit een echte bron op dat net aan.

## Een bestaand experiment uitvoeren
{: #run-an-existing-experiment}

1. Kies **Open Example → SPICE tutorial → divider → Open Drawing**.
2. Selecteer het blad **Simulation**. Onder **Setup** is de opgeslagen analyse
   **Measure DC — Operating Point**. Het circuit gebruikt een bron van 5 V en twee
   weerstanden van 1 kΩ.
3. Kies **Run**. Gebruik **Simulation → Show charts** als het grafiekpaneel verborgen is.
4. Inspecteer `in`, `out` en `v1#branch`. Verwacht respectievelijk **5 V**, **2,5 V** en
   **−2,5 mA**. De bronstroom is gedefinieerd als stroom die naar de positieve
   aansluiting loopt; daarom is de stroom hier negatief wanneer de bron vermogen levert.
5. Wijzig R2 op het circuitblad in `2k` en voer de simulatie opnieuw uit. Verwacht dat OUT
   ongeveer **3,333 V** wordt. Een oudere bewaarde acquisitie beschrijft nog steeds
   het eerdere circuit; een waarde wijzigen past de resultaten ervan niet aan.

![TinyCADs Simulation-blad met de RC AC-analyse en afsnijfrequentieresultaat](/v4/Images/simulation-tutorials/spice/tinycad-ac-setup.png)

Deze schermafbeelding van de toepassing toont de weergave **Setup** voor **rc-ac**,
een ander ingebed voorbeeld. Het filter van 1 kΩ/1 µF heeft een afsnijfrequentie van
ongeveer **159,15 Hz**. Open het om een frequentiedomeinexperiment te vergelijken
met het enkele DC-werkpunt van de spanningsdeler.

**Run** start een eindige acquisitie met de geselecteerde analyse. **Stop** beëindigt
de solver en behoudt geaccepteerde samples; deze samples vormen een gedeeltelijk
resultaat, geen bewijs dat de gevraagde duur is voltooid. Deze builds bieden geen
pauze/hervat-functie of solver die onbeperkt actief blijft. Gebruik **History** om
eerdere uitvoeringen te inspecteren en **Diagnostics** om het solverlogboek te lezen.

Bekijk voor een demonstratie [een spanningsdeler openen, uitvoeren en wijzigen](/v4/videos/simulation-tutorials/spice/first-run.mp4)
en [AC-respons en afsnijfrequentie](/v4/videos/simulation-tutorials/spice/ac-response.mp4). Beide tonen de echte
Desktop-bedieningselementen, voltooide native acquisities en numerieke resultaten,
met ondertiteling.

## Uw eerste simulatie opbouwen
{: #build-your-own-first-simulation}

Plaats twee weerstanden via **Simulation → SPICE components**, een bron met **Insert Source**
en een aarde met **Insert Ground**. Rangschik ze als een spanningsdeler: de positieve
bronpool naar R1, R1 naar R2 en R2 terug naar de negatieve bronpool en aarde. Geef
beide weerstanden de waarde `1k`, stel de bron in op 5 V DC en label de voeding
`IN` en het middelpunt `OUT`.
Zorg dat elke component een unieke referentie heeft, zoals R1, R2 en V1.

Kies **Simulation → Simulate** om een Simulation-blad aan te maken. Selecteer
**Measure DC — Operating Point** onder **Setup** en kies vervolgens **Run**. U zou
dezelfde waarden moeten krijgen als bij de ingebedde spanningsdeler. Als dit niet
lukt, vergelijk dan de verbindingen, broninstellingen en SPICE-eigenschappen met
het werkende voorbeeld.

Selecteer voor een transiëntanalyse **Over time — Transient**, stel de duur en
maximale stapgrootte in en configureer een tijdsvariërende bron. Selecteer voor AC
**Frequency response — AC**, stel het frequentiebereik en het aantal punten per decade
in en geef de ingangsbron een niet-nul **AC amplitude**, gewoonlijk 1 V. De sinusfrequentie
en transiëntamplitude bepalen de AC-sweep niet. TinyCAD biedt ook DC-sweep-, ruis-,
overdrachtsfunctie- en pool-nul-analyses; in eerdere hoofdstukken wordt uitgelegd
wanneer elk daarvan nuttig is.

## De gegenereerde SPICE inspecteren en modellen toevoegen
{: #inspect-the-generated-spice-and-add-models}

Open na het uitvoeren van de spanningsdeler **Diagnostics → Generate circuit text**.
De belangrijke regels zien er ongeveer zo uit; TinyCAD voegt ook temperatuur- en
opgeslagen-signaalrichtlijnen toe:

```spice
R1 IN OUT 1k
R2 OUT 0 1k
V1 IN 0 DC 5 AC 0 0
.op
.end
```

`R1 IN OUT 1k` betekent een weerstand van 1 kΩ tussen knooppunten IN en OUT. `0` is het
referentieknooppunt. Deze tekst maakt verbindingen en bronpolariteit expliciet.
Gebruik **Export circuit** als u de netlist afzonderlijk wilt inspecteren of uitvoeren.
Het Simulation-blad van TinyCAD beheert `.op`, `.tran`, `.ac` en de andere analyseopdrachten; plak deze of `.end` niet in de SPICE-eigenschappen van een component.

Gebruik voor een onderdeel dat al in de catalogus van TinyCAD staat [Meegeleverde SPICE-modellen](../Bundled-SPICE-Models/) om een definitie te kiezen en de pinmapping te controleren. Voor een extern bestand dat nodig is voor een Custom-definitie vouwt u **Setup → SPICE models** uit. Kies een bestand van het type
`.lib`, `.cir` of `.mod`, of voer de bestandsnaam en modeltekst in. Kies in beide gevallen **Save model** om het toe te voegen. Gebruik een eenvoudige bestandsnaam, zoals
`device.lib`. Configureer vervolgens de SPICE-template van het
symbool zodat deze het juiste apparaat of `.SUBCKT` instantieert,
en voeg de bijlage toe waar nodig, bijvoorbeeld met `.include device.lib`
in de proloog. Alleen een bestand toevoegen koppelt het niet aan een symbool.

Controleer de terminalvolgorde van het model aan de hand van de **pinnummers** van
het symbool, niet aan de hand van de schijnbare positie van de pinnen op de pagina.
Een transistormodel met drie aansluitingen en een subcircuit van een fabrikant kunnen
verschillende knooppuntvolgorden gebruiken. Controleer ook eventuele verwijzingen
naar geneste modellen: opgenomen bestanden moeten eveneens aan het Simulation-blad
zijn toegevoegd. De modeldefinities en bijlagen worden samen met de opgeslagen tekening
bewaard.

TinyCAD ondersteunt ingebedde modeltekst, geen willekeurige ngspice-opdrachtregelscripts
of externe uitvoerbare modules. `.control`-blokken, shellopdrachten, het laden van externe modules en stimulussignalen/modellen op basis van bestanden vallen buiten deze werkwijze. Gebruik de ondersteunde broninstellingen en analyses of exporteer het circuit voor een afzonderlijk ngspice-experiment via de opdrachtregel. Een model van een fabrikant dat voor een andere SPICE-dialect is geschreven, moet mogelijk worden aangepast voordat ngspice het accepteert.

## Hoe digitale simulaties hierin passen
{: #how-digital-simulations-fit-in}

Open op Desktop **XSPICE and digital tutorial → logic-buffer**. Het model X1 bevat
een analoog-naar-digitaalbrug, een gebeurtenisgestuurde buffer en een digitaal-naar-
analoogbrug. De gewone bron stuurt de analoge ingang aan; met de bruggen zijn de
logische toestanden in de grafieken van TinyCAD als spanningen zichtbaar.

![Berekende in- en uitgang van de ingebedde XSPICE-buffer](/v4/Images/simulation-tutorials/xspice/logic-buffer-results.png)

Voer de opgeslagen transiëntanalyse uit. Verwacht pulsen van 0–5 V met een periode
van 1 µs en een uitgangsovergang die ongeveer 20 ns vertraagd is, met eindige flanken.
Zoom in om de vertraging te inspecteren. Deze afbeelding toont echte solverresultaten
van het voorbeeld.

De digitale knooppunten van het model zijn geen gewone spanningsknooppunten. De
drempels van de brug en de weergave van een ongedefinieerde toestand zijn bewuste
modelkeuzes. Een gedragsmatige poort die is opgebouwd uit analoge SPICE-expressies
kan er in een grafiek vergelijkbaar uitzien, maar gebruikt een andere simulatiemethode.
Ga verder met het [XSPICE-overzicht](/v4/XSPICE-Tutorial-01/) voor bruggen, timing,
opslag en mixed-signal-circuits.

## Opslaan, vergelijken en problemen oplossen
{: #save-compare-and-troubleshoot}

Sla uw experiment op met **Save As** om een bewerkbare kopie van het ingebedde
voorbeeld te bewaren. TinyCAD kan acquisities samen met de tekening bewaren;
**Save without results** behoudt het circuit en de instellingen, maar laat de
opgeslagen resultaten weg. Gebruik **Data**-exports voor CSV-, JSON- of SPICE-raw-
gegevens als verdere analyse nodig is. Noteer welke acquisitie, welk model en welk
meetvenster u hebt gebruikt.

| Symptoom | Eerste controle |
| --- | --- |
| SPICE-informatie ontbreekt | Gebruik een gemodelleerd symbool of configureer het tabblad SPICE |
| Model of subcircuit ontbreekt | Modelnaam, bijgevoegde bestanden, include-opdracht en terminalvolgorde |
| Zwevend circuit of ontbrekende aarde | Een aangesloten SPICE-aarde en geschikte DC-retourpaden |
| Voedingslabel, maar geen voedingsspanning | Sluit een spanningsbron of werkbankvoeding aan op het gelabelde net |
| Lege/nul-AC-respons | AC-amplitude van de ingang en de geselecteerde signalen |
| XSPICE-model niet beschikbaar in de browser | Voer het voorbeeld uit in TinyCAD Desktop |
| Grafiek komt niet overeen met gewijzigde waarden | Voer de simulatie opnieuw uit en selecteer de nieuwe acquisitie |
| Convergentiefout of onvolledige golfvorm | Lees Diagnostics, vereenvoudig het circuit en controleer signaalflanken, tijdstap en geldigheid van het model |

De [ngspice-handleiding](https://ngspice.sourceforge.io/docs.html) is de referentie voor de semantiek
van apparaten en modellen. De bedieningselementen van TinyCAD bepalen welke van die
mogelijkheden beschikbaar zijn via de geïntegreerde werkwijze.

## De lescircuits downloaden
{: #download-the-lesson-circuits}

Dezelfde voorbeelden zijn al beschikbaar via **Open Example**. Download voor een
onafhankelijke kopie een `.dzn`-tekening en gebruik **File → Open** in TinyCAD. De bijbehorende `.cir` is SPICE-tekst om te inspecteren of in een compatibele externe simulator te gebruiken, geen TinyCAD-tekening. Voor nieuwe uitvoeringen van XSPICE-circuits is Desktop vereist.

| Voorbeeld | Tekening | Netlist |
| --- | --- | --- |
| divider | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/divider.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/divider.cir) |
| logic-buffer | [TinyCAD-tekening](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |

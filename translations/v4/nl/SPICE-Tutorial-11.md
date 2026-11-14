---
layout: default
title: 11. How TinyCAD implements SPICE
---
# 11. Hoe TinyCAD SPICE implementeert
{: #how-tinycad-implements-spice}

[Vorige: ontwerponderzoeken](/v4/SPICE-Tutorial-10/) · [Inhoudsopgave](/v4/Simulation-Tutorials/) · [XSPICE-cursus](/v4/XSPICE-Tutorial-01/)

TinyCAD biedt de schema-editor, simulatie-instellingen, instrumenten, grafieken
en metingen. **ngspice** is de circuitoplosser die daaronder ligt.
U tekent en configureert het experiment in TinyCAD; TinyCAD vertaalt dit naar
SPICE-circuittekst, voert ngspice uit en presenteert de teruggegeven resultaten.

De voorbeelden in dit hoofdstuk zijn bij TinyCAD inbegrepen. Kies **Voorbeeld
openen (Open Example) → SPICE-tutorial (SPICE tutorial)**, selecteer **divider** of **rc-ac** en kies vervolgens **Tekening openen (Open Drawing)**.
Gebruik voor de digitale demonstratie **Voorbeeld openen (Open Example) → XSPICE- en digitale tutorial (XSPICE and digital tutorial) →
logic-buffer → Tekening openen (Open Drawing)**. U hoeft geen tutorial of model te downloaden.

## SPICE, ngspice en XSPICE
{: #spice-ngspice-and-xspice}

SPICE beschrijft circuits als componenten, verbonden knooppunten en wiskundige
apparaatmodellen. Een werkpuntsanalyse lost de DC-vergelijkingen op. Een transiënte
analyse volgt het gedrag ervan in de gesimuleerde tijd. Een AC-analyse lineariseert
het circuit rond het instelpunt om de kleinsignaal-frequentierespons te berekenen.
De analyse selecteren is daarom onderdeel van het definiëren van het experiment.

ngspice is een opensource-simulator voor gemengde signalen, voortgekomen uit Berkeley
SPICE. TinyCAD bevat de engine, zodat u geen aparte simulator voor de opdrachtregel
hoeft te installeren en uit te voeren. De engine waarmee deze tutorials zijn
gekwalificeerd is **ngspice 47**; in de weergave **Diagnostiek (Diagnostics)** van een uitvoering worden de backend en build vermeld.
Zie het [officiële overzicht van ngspice](https://ngspice.sourceforge.io/presentation.html)
voor achtergrondinformatie over het upstream-project.

**XSPICE is een uitbreiding die in ngspice is geïntegreerd**, geen andere toepassing
die u moet starten. Het voegt codemodellen toe, waaronder functionele analoge blokken en digitale
logica waarvan de gebeurtenissen worden gecoördineerd met de analoge solver. Een verandering
van de digitale toestand kan daardoor in dezelfde simulatie invloed hebben op een
analoog circuit. De [officiële introductie van XSPICE](https://ngspice.sourceforge.io/xspice.html)
beschrijft dit onderscheid.

| TinyCAD-omgeving | Hoe de engine wordt uitgevoerd | Welke voorbeelden u kunt gebruiken |
| --- | --- | --- |
| Desktop | Een afzonderlijk native solverproces, met meegeleverde XSPICE-codemodellibraries | Analoge SPICE en de XSPICE-cursus |
| Browser | ngspice gecompileerd naar WebAssembly, uitgevoerd in een afzonderlijke webworker | Analoge SPICE en compatibele analoge gedragsmodellen; XSPICE is niet opgenomen in deze build |

TinyCAD kiest de backend voor de betreffende omgeving. U hoeft geen ngspice-
uitvoerbaar bestand op te zoeken of een externe simulator te selecteren voor de
meegeleverde voorbeelden. Een XSPICE-tekening kan de modeldefinities bevatten,
maar heeft nog steeds de native codemodellibraries nodig die bij Desktop worden geleverd.
Als u de tekening naar de browser kopieert, krijgt u daarmee niet die enginefunctionaliteit.

## Van tekening naar resultaat
{: #from-drawing-to-result}

De belangrijkste stappen zijn:

1. **Bepaal de elektrische verbindingen.** TinyCAD bepaalt welke componentpinnen
   tot hetzelfde net behoren aan de hand van draden, knooppunten en netlabels. Een
   kruising van draden is geen verbinding, tenzij de tekening de netten daadwerkelijk
   verbindt. Gelijke netlabels verbinden punten op afstand; tekst die bij een draad staat,
   doet dat niet.
2. **Breid de componentdefinities uit.** Elk gesimuleerd symbool levert een SPICE-
   sjabloon. TinyCAD vervangt daarin de referentie, de namen van verbonden knooppunten en de waarden,
   en voegt de vereiste apparaat- of subcircuitdefinities toe.
3. **Voeg het experiment toe.** Het blad Simulation bevat de analyse,
   temperatuur, parameters, modelbijlagen en gevraagde signalen. TinyCAD
   controleert op ontbrekende modellen, niet-toegewezen pinnen, dubbele referenties en andere
   detecteerbare instelfouten voordat het circuit wordt ingediend.
4. **Voer ngspice uit.** De solver berekent spanningen, stromen en andere gevraagde
   grootheden. De solver retourneert gegevens en een diagnostisch logboek; TinyCAD verzamelt deze in
   een acquisitie die bij de instellingen en engine-identiteit van de uitvoering hoort.
5. **Bekijk en meet.** TinyCAD toont grafieken, numerieke gegevens en berekende
   metingen. Een afsnijfrequentiemeting wordt bijvoorbeeld afgeleid uit de AC-gegevens;
   het is geen extra component die in het schema is geplaatst.

Dit verklaart waarom een tekening die er correct uitziet niet voldoende is: een transistor heeft
een model en een correcte pindefinitie nodig, terwijl twee draden elektrisch verbonden moeten zijn,
ook als hun eindpunten bij de huidige zoom er dicht bij elkaar uitzien.

## Welke symbolen moet ik gebruiken?
{: #which-symbols-should-i-use}

Open het **pictogram in de vorm van een puls** op de werkbalk. De zweeftekst is **Simulation**.
In de onderstaande instructies betekent **Simulation → …** het menu van dit pictogram.

| Wat u nodig hebt | Waar u het vindt | Wat u moet controleren |
| --- | --- | --- |
| Weerstand, condensator, spoel, diode, led, NPN/PNP-transistor of 741-op-amp | **Simulation → SPICE-componenten (SPICE components)**, of de library **SPICE-essentials (SPICE essentials)** | Waarde, polariteit, voedingsspanningen en modelaannames |
| Onafhankelijke spannings-/stroombron | **Simulation → SPICE → Bron invoegen (Insert Source)** | Brontype, signaalvorm, eenheden en aansluitrichting |
| Referentieknooppunt | **Simulation → SPICE → Aarde invoegen (Insert Ground)** | Sluit deze elektrisch aan; de SPICE-referentie is knooppunt `0` |
| Spanningsmeting | **Probe invoegen (Insert Probe)** of **Differentiële probe invoegen (Insert Differential Probe)** in het SPICE-submenu | Een enkelzijdige spanning is ten opzichte van aarde; een differentiële probe meet tussen de aansluitingen ervan |
| Takstroommeting | **Simulation → SPICE → Stroomprobe invoegen (Insert Current Probe)** | Plaats deze in serie en controleer de positieve richting |
| Afhankelijke bron | **Simulation → SPICE → Gestuurde bron invoegen (Insert Controlled Source)** | Stuuraansluitingen, uitgangsaansluitingen en versterking/transconductantie |
| Instrumenten zoals op een testbank | **Simulation → Labapparatuur (Lab Equipment)** | Instellingen voor oscilloscoop, multimeter, functiegenerator en tafelvoeding; de belasting en limieten ervan zijn van belang |
| Gewone gemodelleerde logica | De library **Digitale logica (Digital logic)** | Deze configureerbare, draagbare SPICE-modellen verschillen van de gebeurtenisgestuurde XSPICE-voorbeelden; controleer de voedingspinnen en modeleigenschappen |
| Gebeurtenisgestuurde XSPICE-logica | De ingesloten voorbeelden van de **XSPICE- en digitale tutorial (XSPICE and digital tutorial)** | Gebruik Desktop en behoud de analoge/digitale bruggen in het model |

De SPICE-essentials-library levert kant-en-klare voorbeelden van veelgebruikte
componenten. Een generieke transistor of een model in de stijl van een 741 is nuttig om mee te leren, maar
het gesimuleerde gedrag komt niet automatisch overeen met de specificaties van een bepaald
onderdeel van een fabrikant. In de hoofdstukken over versterkers worden de generieke
modellen die de oorspronkelijke `AMP.DSN` componenten vervangen expliciet beschreven.

Een symbool uit een andere library kan alleen voor de tekening bedoeld zijn. Selecteer het geplaatste symbool
en inspecteer het tabblad **SPICE** in de eigenschappen. Het heeft een geldige SPICE-sjabloon
nodig en alle modeldefinities waarnaar die sjabloon verwijst. Een overeenkomstige naam, behuizing of
afbeelding voegt die definities niet toe. Evenzo benoemt een label met de naam `VCC` een
net; het maakt geen voedingsspanning. Sluit een daadwerkelijke bron aan op dat net.

## Een bestaand experiment uitvoeren
{: #run-an-existing-experiment}

1. Kies **Voorbeeld openen (Open Example) → SPICE-tutorial (SPICE tutorial) → divider → Tekening openen (Open Drawing)**.
2. Selecteer het blad **Simulation**. Onder **Instelling (Setup)** is de opgeslagen analyse
   **DC meten — Werkpunt (Measure DC — Operating Point)**. Het circuit gebruikt een bron van 5 V en twee
   weerstanden van 1 kΩ.
3. Kies **Uitvoeren (Run)**. Gebruik **Simulation → Grafieken weergeven (Show charts)** als het grafiekenpaneel verborgen is.
4. Inspecteer `in`, `out` en `v1#branch`. Verwacht **5 V**, **2,5 V** en
   **−2,5 mA**, respectievelijk. De bronstroom is gedefinieerd als stroom naar de positieve
   aansluiting, dus een bron die vermogen levert heeft hier een negatieve stroom.
5. Wijzig R2 op het circuitschema in `2k` en voer de simulatie opnieuw uit. Verwacht dat OUT
   ongeveer **3,333 V** wordt. Een oudere bewaarde acquisitie beschrijft nog steeds
   het eerdere circuit; een waarde wijzigen herschrijft de resultaten niet.

![TinyCADs blad Simulation met de RC-AC-analyse en het afsnijresultaat](/v4/images/simulation-tutorials/spice/tinycad-ac-setup.png)

Deze schermafbeelding van de toepassing toont de weergave **Instelling (Setup)** voor **rc-ac**, een ander
ingesloten voorbeeld. Het filter van 1 kΩ/1 µF heeft een afsnijfrequentie van ongeveer **159,15 Hz**. Open het
om een frequentiedomeinexperiment te vergelijken met het ene DC-punt van de spanningsdeler.

**Uitvoeren (Run)** start een eindige acquisitie met de geselecteerde analyse. **Stoppen (Stop)** beëindigt
de solver en behoudt geaccepteerde samples; die samples zijn een gedeeltelijk resultaat,
niet het bewijs dat de gevraagde duur is voltooid. Deze builds bieden geen
pauzeren/hervatten of continu draaiende solver. Gebruik **Geschiedenis (History)** om eerdere
uitvoeringen te bekijken en **Diagnostiek (Diagnostics)** om het solverlogboek te lezen.

Bekijk voor een demonstratie [een spanningsdeler openen, uitvoeren en wijzigen](/v4/videos/simulation-tutorials/spice/first-run.mp4)
en [AC-respons en afsnijfrequentie](/v4/videos/simulation-tutorials/spice/ac-response.mp4). Beide tonen de daadwerkelijke desktopbedieningselementen,
voltooide native acquisities en numerieke resultaten, met bijschriften.

## Uw eerste simulatie bouwen
{: #build-your-own-first-simulation}

Plaats twee weerstanden uit **Simulation → SPICE-componenten (SPICE components)**, een bron met **Bron invoegen (Insert Source)**
en een aarde met **Aarde invoegen (Insert Ground)**. Rangschik ze als een spanningsdeler: bronplus
naar R1, R1 naar R2 en R2 terug naar bronmin en aarde. Geef beide weerstanden
`1k`, stel de bron in op 5 V DC en label de voeding `IN` en het middelpunt `OUT`.
Zorg dat elke component een unieke referentie heeft, zoals R1, R2 en V1.

Kies **Simulation → Simuleren (Simulate)** om een blad Simulation te maken. Selecteer
**DC meten — Werkpunt (Measure DC — Operating Point)** onder **Instelling (Setup)** en kies vervolgens **Uitvoeren (Run)**. U zou
dezelfde waarden moeten krijgen als in het ingesloten voorbeeld van de spanningsdeler. Als het mislukt,
vergelijk dan de verbindingen, broninstellingen en SPICE-eigenschappen met dat werkende voorbeeld.

Selecteer voor een transiënt experiment **In de tijd — Transiënt (Over time — Transient)**, stel de duur
en maximale stap in en configureer een tijdsafhankelijke bron. Selecteer voor AC **Frequentierespons — AC (Frequency response — AC)**, stel het frequentiebereik en het aantal punten per decade in,
en geef de ingangsbron een niet-nul **AC-amplitude**, meestal 1 V. De sinusfrequentie
en transiënte amplitude bepalen de AC-sweep niet. TinyCAD biedt ook DC-sweep-, ruis-,
overdrachtsfunctie- en pool-nul-analyses; in eerdere hoofdstukken wordt getoond wanneer deze nuttig zijn.

## De gegenereerde SPICE inspecteren en modellen toevoegen
{: #inspect-the-generated-spice-and-add-models}

Open na het uitvoeren van de spanningsdeler **Diagnostiek (Diagnostics) → Circuittekst genereren (Generate circuit text)**.
De belangrijke regels zien er als volgt uit; TinyCAD voegt ook temperatuur- en opgeslagen
signaaldirectieven toe:

```spice
R1 IN OUT 1k
R2 OUT 0 1k
V1 IN 0 DC 5 AC 0 0
.op
.end
```

`R1 IN OUT 1k` betekent een weerstand van 1 kΩ tussen knooppunten IN en OUT. `0` is het
referentieknooppunt. Deze tekst maakt verbindingen en bronpolariteit expliciet.
Gebruik **Circuit exporteren (Export circuit)** als u de netlist afzonderlijk wilt inspecteren of uitvoeren.
Het blad Simulation van TinyCAD beheert `.op`, `.tran`, `.ac` en de andere analyse-
commando's; plak deze of `.end` niet in de SPICE-eigenschappen van een component.

Vouw voor een extra apparaatmodel **Instelling (Setup) → SPICE-modellen (SPICE models)** uit. Kies een
bestand van het type `.lib`, `.cir` of `.mod`, of voer de bestandsnaam en modeltekst in. Kies in beide
gevallen **Model opslaan (Save model)** om het toe te voegen. Gebruik een eenvoudige bestandsnaam zoals
`device.lib`. Configureer vervolgens de
SPICE-sjabloon van het symbool om het betreffende apparaat of `.SUBCKT` te instantiëren,
en voeg de bijlage waar nodig toe, bijvoorbeeld met `.include device.lib`
in de proloog ervan. Alleen een bestand toevoegen koppelt het niet aan een symbool.

Controleer de volgorde van de aansluitingen van het model aan de hand van de **pinnummers** van het symbool,
niet aan de hand van de schijnbare posities van de pinnen op de pagina. Een model van een transistor met drie aansluitingen en een subcircuit van een fabrikant kunnen verschillende knooppuntvolgordes gebruiken. Controleer ook eventuele geneste modelverwijzingen: opgenomen bestanden moeten eveneens aan het blad Simulation zijn toegevoegd.
De modeldefinities en bijlagen worden met de opgeslagen tekening meegenomen.

TinyCAD ondersteunt ingesloten modeltekst, maar geen willekeurige ngspice-opdrachtregelscripts of
externe uitvoerbare modules. `.control`-blokken, shellopdrachten, het laden van externe modules
en bestandsgebaseerde stimuli/modellen vallen buiten deze werkwijze. Gebruik
de ondersteunde broninstellingen en analyses, of exporteer het circuit voor een afzonderlijk
ngspice-experiment op de opdrachtregel. Een leveranciersmodel dat voor een andere
SPICE-dialect is geschreven, moet mogelijk worden aangepast voordat ngspice het accepteert.

## Hoe digitale simulaties hierin passen
{: #how-digital-simulations-fit-in}

Open **XSPICE- en digitale tutorial (XSPICE and digital tutorial) → logic-buffer** op Desktop. Het X1-model
bevat een analoog-naar-digitaalbrug, een gebeurtenisgestuurde buffer en een
digitaal-naar-analoogbrug. De gewone bron stuurt de analoge ingang aan;
de bruggen maken de logische toestanden als spanningen zichtbaar in de grafieken van TinyCAD.

![Berekende in- en uitgang van de ingesloten XSPICE-buffer](/v4/images/simulation-tutorials/xspice/logic-buffer-results.png)

Voer de opgeslagen transiënt uit. Verwacht pulsen van 0–5 V met een periode van 1 µs en een
uitgangsovergang die ongeveer 20 ns vertraagd is, met eindige flanken. Zoom in om de
vertraging te bekijken. Deze afbeelding toont daadwerkelijke solverresultaten uit het voorbeeld.

De digitale knooppunten van het model zijn geen gewone spanningsknooppunten. De drempels van de brug
 en de weergave van een ongedefinieerde toestand zijn bewuste modelleringskeuzes.
Een gedragspoort die met analoge SPICE-expressies is opgebouwd kan er in een
grafiek vergelijkbaar uitzien, maar gebruikt een andere simulatiemethode. Ga verder met het
[XSPICE-overzicht](/v4/XSPICE-Tutorial-01/) voor bruggen, timing, opslag en
circuits met gemengde signalen.

## Opslaan, vergelijken en problemen oplossen
{: #save-compare-and-troubleshoot}

Sla uw experiment op met **Opslaan als (Save As)** om een bewerkbare kopie van het ingesloten
voorbeeld te behouden. TinyCAD kan acquisities bij de tekening bewaren; **Opslaan zonder
resultaten (Save without results)** behoudt het circuit en de instellingen, maar laat de opgeslagen resultaten weg.
Gebruik **Gegevens (Data)**-exports voor CSV-, JSON- of SPICE-raw-data wanneer verdere analyse nodig is.
Noteer welke acquisitie, welk model en welk meetvenster u hebt gebruikt.

| Symptoom | Eerste controle |
| --- | --- |
| SPICE-informatie ontbreekt | Gebruik een gemodelleerd symbool of configureer het tabblad SPICE |
| Model of subcircuit ontbreekt | Modelnaam, toegevoegde bestanden, include-instructie en aansluitvolgorde |
| Zwevend circuit of ontbrekende aarde | Een aangesloten SPICE-aarde en geschikte DC-retourpaden |
| Voedingslabel maar geen voedingsspanning | Sluit een spanningsbron of tafelvoeding aan op het gelabelde net |
| Lege/nul AC-respons | AC-amplitude van de ingang en de geselecteerde signalen |
| XSPICE-model niet beschikbaar in de browser | Voer het voorbeeld uit in TinyCAD Desktop |
| Grafiek komt niet overeen met gewijzigde waarden | Voer de simulatie opnieuw uit en selecteer de nieuwe acquisitie |
| Convergentiefout of onvolledige golfvorm | Lees Diagnostiek, vereenvoudig het circuit en controleer stimulusflanken, tijdstap en modelgeldigheid |

De [ngspice-handleiding](https://ngspice.sourceforge.io/docs.html) is de naslagbron
voor de semantiek van apparaten en modellen. De bedieningselementen van TinyCAD bepalen welke van die
mogelijkheden beschikbaar zijn via de geïntegreerde workflow.

## De lescircuits downloaden
{: #download-the-lesson-circuits}

Dezelfde voorbeelden zijn al beschikbaar via **Voorbeeld openen (Open Example)**. Download voor een afzonderlijke kopie een `.dzn`-tekening en gebruik **Bestand → Openen (File → Open)** in TinyCAD. Het bijbehorende bestand `.cir` bevat SPICE-tekst om te inspecteren of te gebruiken met een compatibele externe simulator; het is geen TinyCAD-tekening. Voor nieuwe uitvoeringen van XSPICE-circuits is Desktop vereist.

| Voorbeeld | Tekening | Netlist |
| --- | --- | --- |
| divider | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/divider.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/divider.cir) |
| logic-buffer | [TinyCAD-tekening](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |

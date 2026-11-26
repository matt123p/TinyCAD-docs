---
layout: default
title: "10. Design investigations: sweeps, tolerances, noise and diagnosis"
---
# 10. Ontwerponderzoeken: sweeps, toleranties, ruis en diagnose
{: #design-investigations-sweeps-tolerances-noise-and-diagnosis}

[Vorige](/v4/SPICE-Tutorial-09/) · [Inhoudsopgave](/v4/Simulation-Tutorials/) · [Volgende: SPICE in TinyCAD](/v4/SPICE-Tutorial-11/)

De voorbeelden in dit hoofdstuk worden meegeleverd met TinyCAD. Kies **Voorbeeld openen (Open Example) → SPICE-tutorial (SPICE tutorial)**, selecteer het genoemde voorbeeld en kies vervolgens **Tekening openen (Open Drawing)**. Downloaden is niet nodig.

Een bruikbaar simulatierapport vermeldt de vraag, de versie van het circuit/model,
de analyse, de stimulus, het meetvenster en het acceptatiecriterium. Een overtuigende
plot zonder die gegevens is moeilijk te reproduceren.

## Parametersweeps en toleranties
{: #parameter-sweeps-and-tolerances}

Ga terug naar **rc-ac**. Voer onder **Afstemmen / sweep (Tune / sweep)** de voorbereide
R1-waarden 1 kΩ, 2,2 kΩ en 4,7 kΩ uit. De verwachte afsnijfrequenties zijn 159,15, 72,34 en
33,86 Hz. Dit is een parametersweep: hiermee wordt onderzocht hoe weloverwogen componentkeuzes
de respons beïnvloeden. Dit verschilt van de **DC-sweep (DC sweep)** in hoofdstuk 2, waarbij
de DC-waarde van een onafhankelijke bron tijdens één analyse wordt gewijzigd.

Gebruik voor toleranties **Analyseruimte (Analysis lab) → Tolerantieonderzoeken (Tolerance studies)**. Definieer R1- en C1-bindingen,
kies een verdeling en seed en voeg een afsnijfrequentie-eis toe. Bij onafhankelijke, begrensde waarden van ±5% geven de uiterste RC-combinaties ongeveer
144,36–176,35 Hz. Een Monte-Carlo-steekproef bereikt niet noodzakelijk een van beide uiterste waarden.
De standaardafwijking van een normale verdeling is geen harde grens van ±. Noteer
welke conventie u hebt gekozen en of de variabelen gecorreleerd zijn.

TinyCAD kan testgevalvoorwaarden en definities van metingen/eisen bewaren.
Gebruik **Toepassen (Apply)** alleen wanneer u tijdelijke afstemming wilt omzetten in een echte schemawijziging.
Sla een aparte circuitrevisie op wanneer u de topologie of modeltekst wijzigt;
een acquisitiehash is een identificatiecode, geen terug te halen schemarevisie.

## Ruis: een ander soort uitvoer
{: #noise-a-different-kind-of-output}

Open **rc-noise**. Dit voorbeeld vraagt om de uitgangsruis op OUT,
herleid naar de onafhankelijke ingangsbron V1, van 1 Hz tot 100 kHz bij 27°C.
De ideale bron is ruisvrij; R1 draagt thermische ruis bij, die door C1 wordt gefilterd.

![Berekende spectrale dichtheid van de RC-uitgangsruis](/v4/Images/simulation-tutorials/spice/rc-noise-results.png)

De totale uitgangsruis is ongeveer **64,2 nV RMS** over die band. Voor een
ideaal RC-circuit, geïntegreerd van nul tot oneindig hoge frequentie, is de gemiddelde kwadratische ruis van de condensator `kT/C`, wat bij 300,15 K en 1 µF ongeveer 64,4 nV RMS oplevert.
De eindige simulatieband verklaart het kleine verschil. De spectrale dichtheid
heeft als eenheid V/√Hz; de integraal wordt gevormd uit het kwadraat van de dichtheid en de bandbreedte,
en vervolgens wordt de wortel getrokken. Dit is niet de rekenkundige som van de weergegeven
dichtheidsmonsters. De totale ingangsgerefereerde ruis is een ander resultaat.

## Overdrachtsfuncties en polen
{: #transfer-functions-and-poles}

Open **rc-tf**. Het DC-kleinsignaaloverdrachtsresultaat is
1 V/V, de uitgangsweerstand is 1 kΩ en de ingangsweerstand is effectief oneindig,
omdat de condensator bij DC open is. Een zeer grote weergegeven ingangsweerstand, zoals `1e20`, is een numeriek resultaat voor een open circuit en geen gemeten
fysieke weerstand van 100 exaohm.

Open **rc-pz**. De pool ligt ongeveer op **−1000 rad/s**,
overeenkomend met `s = −1/(RC)`. Deel de grootte ervan door `2π` om 159,15 Hz te verkrijgen. Een pool
in het linkerhalfvlak van het complexe s-vlak staat in dit lineaire systeem voor uitdoving.
De afwezigheid van een eindige nul is te verwachten voor deze laagdoorlaat-overdracht van de eerste orde.

Deze analyses werken met het gelineariseerde model. Ze vervangen geen transiënttests
voor afkappen, schakelen of opstarten. Willekeurige versterking tussen uitgang en ingang is ook
niet hetzelfde als de versterking van een terugkoppellus; voor stabiliteitsmetingen is een doelbewuste
configuratie voor een lusmeting nodig.

## Een praktische meetselectie
{: #a-practical-measurement-menu}

| Taak | Geschikte grootheden |
| --- | --- |
| Sensorconditionering | Versterking, offset, ruis, afsnijfrequentie, insteltijd |
| Pulsinterface | Stijg-/daaltijd, vertraging, pulsbreedte, dutycycle |
| Versterker | Voorspanning, versterking/fase, bandbreedte, RMS-uitgang, vermogen, afkappen |
| Vermogensschakeling | Rimpel, piekstroom, gemiddeld vermogen, energie, rendement |
| Componentvariatie | Sweep-overlays, slechtste waargenomen waarden, resultaten van eisen |

TinyCAD biedt onder **Labapparatuur (Lab Equipment)** ook een virtuele oscilloscoop, multimeter, functiegenerator en
stroombegrensde laboratoriumvoeding. Hun impedanties en limieten zijn van belang: zo heeft de functiegenerator doorgaans een uitgangsweerstand van 50 Ω. Ze bieden een andere werkwijze voor dezelfde elektrotechnische vraagstukken.

## Een mislukte of onwaarschijnlijke simulatie diagnosticeren
{: #diagnose-a-failed-or-implausible-run}

Controleer eerst de massa, onbedoelde kortsluitingen en zwevende knooppunten. Bevestig de pinnentoewijzing van componenten en modelnamen. Controleer bij AC de AC-amplitude van de onafhankelijke bron;
controleer bij transiënten de duur, maximale stapgrootte en eindige stimulusflanken. Lees
het solverlogboek en bevestig dat de simulatie de gevraagde eindtijd heeft bereikt. Een gedeeltelijke
golfvorm is geen voltooid resultaat.

Probeer een eenvoudiger werkpunt- of geïsoleerde-fasetest voordat u numerieke
instellingen wijzigt. Documenteer eventueel toegevoegde lekweerstand, bronweerstand of parasitaire
capaciteit: zulke toevoegingen veranderen het circuit, ook al helpen ze de convergentie. Exporteer CSV
wanneer een gespecialiseerde berekening nodig is, en behoud de eenheden en complexe kolommen.

Meer informatie: de [ngspice-tutorial over de besturingstaal](https://ngspice.sourceforge.io/ngspice-control-language-tutorial.html)
toont automatisering via de opdrachtregel. Het documentmodel van TinyCAD voert bewust geen willekeurige `.control`
scripts uit; gebruik de ondersteunde analyse- en onderzoeksbesturingselementen of exporteer een netlist voor een aparte ngspice-werkwijze.

## De lescircuits downloaden
{: #download-the-lesson-circuits}

Dezelfde voorbeelden zijn al beschikbaar via **Voorbeeld openen (Open Example)**. Download voor een onafhankelijke kopie een `.dzn`-tekening en gebruik **Bestand → Openen (File → Open)** in TinyCAD. De bijbehorende `.cir` is SPICE-tekst ter inzage of voor een compatibele externe simulator, geen TinyCAD-tekening. Voor nieuwe simulaties van XSPICE-circuits is Desktop vereist.

| Voorbeeld | Tekening | Netlist |
| --- | --- | --- |
| rc-ac | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/rc-ac.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/rc-ac.cir) |
| dc-sweep | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/dc-sweep.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/dc-sweep.cir) |
| rc-noise | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/rc-noise.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/rc-noise.cir) |
| rc-tf | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/rc-tf.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/rc-tf.cir) |
| rc-pz | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/rc-pz.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/rc-pz.cir) |

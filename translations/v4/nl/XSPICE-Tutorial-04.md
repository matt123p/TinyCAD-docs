---
layout: default
title: 4. D flip-flops, clocks and reset
---
# 4. D-flipflops, klok en reset
{: #d-flip-flops-clocks-and-reset}

[Vorige](/v4/XSPICE-Tutorial-03/) · [Inhoudsopgave](/v4/Simulation-Tutorials/) · [Volgende](/v4/XSPICE-Tutorial-05/)

De voorbeelden in dit hoofdstuk worden meegeleverd met TinyCAD. Kies **Voorbeeld openen (Open Example) → XSPICE en digitale zelfstudie**, selecteer het genoemde voorbeeld en kies vervolgens **Tekening openen (Open Drawing)**. Downloaden is niet nodig.

Open **logic-dff**. Dit voorbeeld bevat afzonderlijke analoge
stimuli voor D, CLK en RESET. Binnen X1 voeren bruggen signalen naar een XSPICE-D-flipflop;
Q en NQ worden terug omgezet naar analoge uitgangen om ze weer te geven.

![Testcircuit voor D-flipflop](/v4/images/simulation-tutorials/xspice/logic-dff-circuit.png)
![Berekende klok, data, reset en Q](/v4/images/simulation-tutorials/xspice/logic-dff-results.png)

Voer de transiënte analyse van 8 µs uit. Bij elke stijgende klokflank neemt Q de waarde van D over en behoudt die toestand
tussen de flanken. NQ is de inverse daarvan zodra de propagatie is uitgestabiliseerd. De
eerste stijgende klokflank ligt rond 0,5 µs. D is al hoog, dus Q wordt hoog
na de klok-naar-uitgangsvertraging van het model. Bij dit voorbeeld dat op de positieve flank wordt getriggerd, nemen dalende klokflanken geen nieuwe
data over.

## De werkelijke modelinterface bekijken
{: #read-the-actual-model-interface}

De interne instantie is:

```spice
Aff dd dc NULL dr dq dn flip
.model flip d_dff(ic=0 clk_delay=20n reset_delay=20n
+ rise_delay=5n fall_delay=5n)
```

De poorten zijn data, klok, asynchrone set, asynchrone reset, uitgang en
geïnverteerde uitgang. `NULL` laat de optionele set-ingang ongebruikt. De begintoestand
is expliciet ingesteld op nul. De poortvolgorde is onderdeel van het modelcontract; de posities van de pinnen op
het zichtbare blok bepalen die volgorde niet.

## Asynchrone reset testen
{: #test-asynchronous-reset}

RESET wordt rond 6 µs hoog en blijft ongeveer 0,5 µs hoog. Q wordt gewist zonder te wachten op de volgende
stijgende klokflank. Controleer de uitgang zolang reset actief is voordat u het klokgedrag interpreteert.
Nadat reset is uitgeschakeld, nemen volgende klokflanken weer data over. Dit voorbeeld test reset onafhankelijk van de normale D-golfvorm.

Gebruik een kort meetvenster rond de eerste overnameflank om de
klok-naar-Q-vertraging bij 2,5 V te meten. De gemeten analoge vertraging omvat de bruggen,
niet alleen `clk_delay`. Gebruik een ander venster rond reset om de asynchrone
wissing te onderzoeken. Vraag niet met één meting op de eerste flank om meerdere
verschillende triggergebeurtenissen samen te vatten.

## Aannames over begintoestand en setup/hold
{: #initial-state-and-setuphold-assumptions}

Door `ic=0` in te stellen, wordt deze zelfstudie reproduceerbaar. In een ontwerp waarvan de werkelijke inschakeltoestand
niet is vastgelegd, kan de aanname van een handige begintoestand van nul een ontbrekende
resetvereiste verhullen. Probeer bij het opstarten een expliciete resetpuls toe te passen en vergelijk dit met
vertrouwen op de instelling voor de begintoestand van het model.

Verplaats vervolgens een dataovergang tot vlak bij een klokflank. Bekijk hoe het functionele
model gebeurtenissen ordent, maar beschouw een schoon digitaal resultaat niet als bewijs dat een
reëel apparaat aan de setup- en holdtijden voldoet. Dit eenvoudige functionele model is geen
transistormodel voor metastabiliteit en geeft geen waarschijnlijkheid voor het oplossen van metastabiliteit.
De timingbeperkingen van de fabrikant en een geschikt apparaatmodel blijven afzonderlijke invoer voor een elektrische timinganalyse.

Een nuttige vastgelegde test bevat de datagolfvorm, de conventie voor klokflanken,
de resetpolariteit en -timing, de aanname over de begintoestand, de verwachte overgenomen reeks
en de meetdrempel. Dat geeft meer informatie dan alleen een schermafbeelding van Q.

## De lescircuits downloaden
{: #download-the-lesson-circuits}

Dezelfde voorbeelden zijn al beschikbaar via **Voorbeeld openen (Open Example)**. Download voor een afzonderlijke kopie een `.dzn`-tekening en gebruik **Bestand → Openen (File → Open)** in TinyCAD. Het bijbehorende `.cir`-bestand is SPICE-tekst om te inspecteren of te gebruiken met een compatibele externe simulator, geen TinyCAD-tekening. Voor nieuwe simulaties van XSPICE-circuits is Desktop vereist.

| Voorbeeld | Tekening | Netlijst |
| --- | --- | --- |
| logic-dff | [TinyCAD-tekening](/v4/examples/simulation-tutorials/xspice/logic-dff.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/xspice/logic-dff.cir) |

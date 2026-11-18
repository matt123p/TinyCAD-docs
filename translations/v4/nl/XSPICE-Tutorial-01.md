---
layout: default
title: 1. XSPICE and digital simulation
---
# 1. XSPICE en digitale simulatie
{: #xspice-and-digital-simulation}

[De tutorials gebruiken](/v4/Tutorial-Start-Here/) · [Cursusinhoud](/v4/Simulation-Tutorials/) · [Volgende: poorten](/v4/XSPICE-Tutorial-02/)

De voorbeelden in dit hoofdstuk worden meegeleverd met TinyCAD. Kies **Open Example → XSPICE and digital tutorial**, selecteer het genoemde voorbeeld en kies vervolgens **Open Drawing**. Downloaden is niet nodig.

XSPICE breidt ngspice uit met codemodellen en een gebeurtenisgestuurd simulatiesysteem.
Een analoge schakeling wordt opgelost aan de hand van spanningen en stromen; een gebeurtenisgestuurd digitaal
netwerk verspreidt wijzigingen in logische toestanden via functionele modellen. Gemengde-signaalsimulatie coördineert beide. Daardoor kan een logische functie veel eenvoudiger te
simuleren zijn dan een implementatie op transistorniveau, maar dit levert niet dezelfde informatie op over voedingsstroom, transistorbelasting of fysieke timing.

Gebruik **TinyCAD Desktop** voor deze cursus. De meegeleverde native engine bevat de
vereiste codemodellen. De browser-/WASM-engine van TinyCAD bevat geen XSPICE.
De meegeleverde modellen zijn ingebed in de tekeningen, maar de uitvoerbare codemodellibraries
zijn afkomstig van de installatie van de native engine.

[Hoe TinyCAD SPICE implementeert](/v4/SPICE-Tutorial-11/) legt uit hoe de
engines, symbooldefinities en het Simulation-blad op elkaar aansluiten.

## Eerste uitvoering: een gebeurtenisgestuurde buffer
{: #first-run-an-event-driven-buffer}

Open **logic-buffer**. Voer de opgeslagen transiënte analyse van 8 µs uit
en plot A en Y. A is een golfvorm van 0–5 V met een periode van 1 µs. Y volgt deze na een
kleine voortplantingsvertraging en met eindige uitgangsflanken.

![XSPICE-buffertestschakeling](/v4/images/simulation-tutorials/xspice/logic-buffer-circuit.png)
![Berekende bufferin- en -uitgang](/v4/images/simulation-tutorials/xspice/logic-buffer-results.png)

X1 is een ingebedde subschakeling met drie expliciete interne trappen:

```text
Analogue A → adc_bridge → digital d_buffer → dac_bridge → analogue Y
```

De tekening toont bewust analoge aansluitingen: zo kan het gewone grafieksysteem van TinyCAD
de ingang en uitgang in volt plotten. Binnen X1 is de buffer een echt gebeurtenisgestuurd XSPICE-model, geen spanningsdrempelexpressie die zich voordoet als een digitale poort. Open de SPICE-eigenschappen van X1 om de trappen te bekijken.

## Betekenis van de bruggen
{: #what-the-bridges-mean}

De ADC-brug interpreteert ingangsspanningen tot 1 V als laag en vanaf 3 V als hoog.
Het interval daartussen is ongedefinieerd. Dit is een interface voor een logisch domein, geen bemonsterende meerbits-ADC met een klok, resolutie en kwantisatiecode.

De DAC-brug zet laag om in 0 V, hoog in 5 V en ongedefinieerd in 2,5 V ter observatie.
De stijg- en daaltijden zijn 5 ns. Een uitgang van 2,5 V in deze cursus
kan daarom een onbekende digitale toestand voorstellen; het is niet noodzakelijk een geldig
analoog middenspanningssignaal. Deze drempels en spanningen zijn keuzes voor de tutorial,
geen specificaties voor een bepaald TTL- of CMOS-apparaat.

De ideale uitgangsaandrijving van de brug heeft geen gemodelleerde voedingspin. Bereken er geen
reëel stroomverbruik van logische IC's mee. Gebruik voor onderzoek naar vermogen een model
met een expliciete voeding en passend apparaatgedrag.

## Een nuttige verdeling van modeldetails
{: #a-useful-division-of-modelling-detail}

Gebruik gebeurtenisgestuurde poorten om waarheidstabellen, kloksequenties en functionele
timing te controleren. Gebruik transistormodellen of modellen van fabrikanten voor elektrische belasting en apparaatgesrag wanneer die modellen het vereiste effect ondersteunen. Gebruik expliciete interfaces
bij overgangen tussen analoge en digitale domeinen. Een visueel vergelijkbaar symbool bepaalt niet welk type model erin zit.

Wijzig voor een eerste experiment de ingangsperiode van 1 µs in 2 µs en voer de simulatie opnieuw uit.
De herhalingsfrequentie wordt gehalveerd; de opgegeven voortplantingsvertraging van het model
blijft vrijwel onveranderd. Periode en voortplantingsvertraging zijn onafhankelijke
eigenschappen.

Naslag: [Inleiding tot XSPICE](https://ngspice.sourceforge.io/xspice.html),
[officiële XSPICE-voorbeelden en HOWTO](https://ngspice.sourceforge.io/xspicehowto.html).

## De lescircuits downloaden
{: #download-the-lesson-circuits}

Dezelfde voorbeelden zijn al beschikbaar via **Open Example**. Download voor een onafhankelijke kopie een `.dzn`-tekening en gebruik **File → Open** in TinyCAD. Het bijbehorende `.cir`-bestand bevat SPICE-tekst om te bekijken of te gebruiken met een compatibele externe simulator; het is geen TinyCAD-tekening. Voor nieuwe simulaties van XSPICE-schakelingen is Desktop vereist.

| Voorbeeld | Tekening | Netlist |
| --- | --- | --- |
| logic-buffer | [TinyCAD-tekening](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |

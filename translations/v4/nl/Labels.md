---
layout: default
---
# Labels
{: #labels}

Labels zijn elektrisch actieve netnamen. Alle draden met dezelfde labelnaam worden
beschouwd als verbonden, zelfs als er geen fysieke draad tussen is getekend.

Gebruik labels om:

- punten die op hetzelfde blad ver uit elkaar liggen met elkaar te verbinden,
- visuele rommel in drukke schema's te verminderen,
- netten tussen bladen in dezelfde tekening te verbinden,
- hiërarchische symboolpinnen met interne netten te verbinden.

## Hoe labels werken
{: #how-labels-work}

- Een label wordt verbonden met de draad eronder.
- De connectiviteit is gebaseerd op de **labeltekst**, niet op de locatie.
- De **vorm** van het label is alleen een visuele stijl en verandert de connectiviteit,
	netlist of het DRC-gedrag niet.
- Gebruik overal dezelfde naam als u één elektrisch net wilt aanduiden.

## Richtlijnen voor labelnamen
{: #label-naming-guidelines}

- Gebruik duidelijke netnamen zoals `RESET`, `SCL`, `+5V`, `ADC_IN0`.
- Houd de naamgeving consistent in het hele ontwerp.
- Vermijd onbedoelde variaties (`GND` vs `GN D`, `CLK` vs `Clk`), omdat deze
	verschillende netten creëren.
- Als uw naamgeving cijfers bevat, kan herhaalde plaatsing numerieke achtervoegsels verhogen/verlagen met de opties voor de naam van de herhalingsrichting.

## Labelvormen en waarom u ze gebruikt
{: #label-shapes-and-why-to-use-them}

TinyCAD biedt meerdere labelvormen in de opties van het labelgereedschap. Kies een vorm
voor de leesbaarheid en tekenstijl; alle vormen zijn elektrisch gelijkwaardig.

Typische redenen om verschillende vormen te gebruiken:

- veelgebruikte netten onderscheiden van eenmalige lokale netten,
- verbindingen buiten het blad of tussen blokken visueel laten opvallen,
- de signaalrichting of bedoeling aangeven voor menselijke lezers,
- aansluiten bij de schemastijl van uw team of bedrijf.

Praktische regel: kies een kleine set vormen en gebruik die consistent, zodat lezers
de tekening snel kunnen scannen.

## Labels plaatsen en bewerken
{: #placing-and-editing-labels}

1. Selecteer het labelgereedschap.
2. Voer de netnaam in.
3. Kies zo nodig de oriëntatie/vorm.
4. Plaats het label op de doelwire.
5. Herhaal dit voor elke locatie die met dat net verbonden moet zijn.


## Labels in tekeningen met meerdere bladen
{: #labels-with-multi-sheet-drawings}

In een tekeningbestand met meerdere bladen zijn labels de gebruikelijke manier om netten tussen
bladen te verbinden.

- Dezelfde labelnaam op verschillende bladen betekent hetzelfde elektrische net.
- Deze verbinding tussen bladen wordt gebruikt bij het genereren van netlists.
- Gebruik stabiele, ondubbelzinnige namen voor gedeelde netten (`+3V3`, `GND`, `I2C_SDA`,
	`I2C_SCL`, enz.).

Aanbevolen werkwijze:

1. Bepaal vooraf de gemeenschappelijke netnamen.
2. Gebruik op elk blad exact dezelfde namen.
3. Voer DRC-/netlistcontroles uit om naamgevingsfouten vroegtijdig op te sporen.

- Terug naar [Tekenen](../User-guide/)
- Terug naar [inhoud v4](../CONTENTS/)

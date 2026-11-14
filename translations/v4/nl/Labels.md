---
layout: default
---
# Labels
{: #labels}

Labels zijn elektrisch actieve netnamen. Draden met dezelfde labelnaam worden
beschouwd als met elkaar verbonden, zelfs wanneer er geen fysieke draad tussen is getekend.

Gebruik labels om:

- punten die ver uit elkaar liggen op hetzelfde blad met elkaar te verbinden,
- visuele drukte in drukke schema's te verminderen,
- netten op verschillende bladen binnen dezelfde tekening met elkaar te verbinden,
- hiërarchische symboolpinnen te koppelen aan interne netten.

## Hoe labels werken
{: #how-labels-work}

- Een label wordt verbonden met de draad eronder.
- De connectiviteit wordt bepaald door de **labeltekst**, niet door de locatie.
- De **vorm** van een label is alleen een visuele stijl en verandert niets aan de connectiviteit,
	netlijst- of DRC-functionaliteit.
- Gebruik overal dezelfde naam voor één elektrisch net.

## Richtlijnen voor labelnamen
{: #label-naming-guidelines}

- Gebruik duidelijke netnamen, zoals `RESET`, `SCL`, `+5V`, `ADC_IN0`.
- Gebruik consistente naamgeving in het hele ontwerp.
- Vermijd onbedoelde variaties (`GND` versus `GN D`, `CLK` versus `Clk`), omdat deze
	verschillende netten opleveren.
- Als je naamgeving getallen bevat, kun je bij herhaald plaatsen het numerieke achtervoegsel verhogen/verlagen met de naamopties voor Repeat Direction.

## Labelvormen en waarom je ze gebruikt
{: #label-shapes-and-why-to-use-them}

TinyCAD biedt meerdere labelvormen in de opties van het labelgereedschap. Kies een vorm
voor de leesbaarheid en tekenstijl; alle vormen zijn elektrisch gelijkwaardig.

Veelvoorkomende redenen om verschillende vormen te gebruiken:

- veelgebruikte netten onderscheiden van eenmalige lokale netten,
- verbindingen buiten het blad of tussen blokken visueel laten opvallen,
- de signaalrichting of -bedoeling aangeven voor menselijke lezers,
- aansluiten bij de schemastijl van je team of bedrijf.

Praktische regel: kies een kleine set vormen en gebruik die consistent, zodat lezers
het diagram snel kunnen doorlopen.

## Labels plaatsen en bewerken
{: #placing-and-editing-labels}

1. Selecteer het labelgereedschap (Label tool).
2. Voer de netnaam in.
3. Kies indien nodig de oriëntatie/vorm.
4. Plaats het label op de betreffende draad.
5. Herhaal dit voor elke locatie die met dat net verbonden moet zijn.


## Labels in tekeningen met meerdere bladen
{: #labels-with-multi-sheet-drawings}

In een tekeningbestand met meerdere bladen zijn labels de gebruikelijke manier om netten tussen
bladen te verbinden. Zie [Tekeningen met meerdere bladen](../Multiple-Sheet-Drawings/) voor een uitgewerkt voorbeeld en een video over bladbeheer en labels tussen bladen.

- Dezelfde labelnaam op verschillende bladen betekent hetzelfde elektrische net.
- Deze koppeling tussen bladen wordt gebruikt bij het genereren van netlijsten.
- Gebruik stabiele, eenduidige namen voor gedeelde netten (`+3V3`, `GND`, `I2C_SDA`,
	`I2C_SCL`, enz.).

Aanbevolen werkwijze:

1. Leg gangbare netnamen vooraf vast.
2. Gebruik op elk blad exact dezelfde namen.
3. Voer DRC-/netlijstcontroles uit om naamgevingsfouten vroegtijdig op te sporen.

- Terug naar [Tekenen](../User-guide/)
- Terug naar [Inhoud van v4](../)

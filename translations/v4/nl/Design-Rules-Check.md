---
layout: default
---
# Ontwerpregels controleren
{: #design-rules-check}

In v4 werkt **Ontwerpregels controleren (Design Rules Check) hetzelfde als in v3**.

Gebruik Ontwerpregels controleren om grote problemen met de schematische connectiviteit op te sporen voordat u uitvoer genereert, zoals netlists of VHDL.

De functie controleert bedrading en combinaties van pintypen op veelvoorkomende elektrische fouten (bijvoorbeeld conflicterende uitgangen die met elkaar zijn verbonden). Dit garandeert **niet** dat de schakeling functioneel correct is.

Streef naar nul ontwerpfouten om meer vertrouwen te krijgen in de correctheid van het schema.

## Ontwerpregels controleren uitvoeren
{: #run-design-rules-check}

1. Open uw ontwerp.
2. Kies **Ontwerpregels controleren (Check Design Rules)** in het menu Speciale gereedschappen.
3. Schakel in het dialoogvenster met regels de gewenste regelcontroles in of uit.
4. Selecteer **OK** om de controle uit te voeren.

{% include video-player.html
	src="/v4/images/video/Video 8.mp4"
	width=1622
	height=952
	caption="Videohandleiding waarin wordt getoond hoe u de ontwerpregelcontrole uitvoert en gebruikt."
%}


## De resultaten lezen
{: #reading-the-results}

- Elke gevonden fout wordt in het schema gemarkeerd met een rode cirkel.
- Naast het ontwerp verschijnt een foutenlijst.
- Als u een fout in de lijst selecteert, wordt die locatie in de tekening gecentreerd.

## Wissen en opnieuw controleren
{: #clear-and-re-check}

- Selecteer **Sluiten (Close)** in de foutenlijst om alle huidige foutmarkeringen te verwijderen.
- Foutcirkels zijn tijdelijke markeringen voor controle: ze worden niet opgeslagen bij het
	ontwerp.

- Terug naar [Geavanceerd](../Advanced/)
- Terug naar [v4-inhoud](../CONTENTS/)

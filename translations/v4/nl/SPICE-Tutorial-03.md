---
layout: default
title: 3. Choosing and configuring signal generators
---
# 3. Signaalgeneratoren kiezen en configureren
{: #choosing-and-configuring-signal-generators}

[Vorige](/v4/SPICE-Tutorial-02/) · [Inhoud](/v4/Simulation-Tutorials/) · [Volgende](/v4/SPICE-Tutorial-04/)

De voorbeelden in dit hoofdstuk worden meegeleverd met TinyCAD. Kies **Voorbeeld openen → SPICE-tutorial**, selecteer het genoemde voorbeeld en kies vervolgens **Tekening openen**. Downloaden is niet nodig.

Een stimulus beschrijft wat de schakeling aanstuurt. Selecteer de behuizing van een bron op het blad Circuit om de instellingen te openen. **Signaaltype** wijzigt de golfvorm en toont de bijbehorende parameters. Het voorbeeld toont de geprogrammeerde golfvorm; de simulatie berekent wat er gebeurt nadat de schakeling die bron belast.

Elke onderstaande tekening is gereed voor een transiënte analyse van 5 ms. Elke spanningsbron stuurt 1 kΩ aan. Gebruik ze om telkens één instelling te leren voordat je een golfvorm op een complexere schakeling toepast.

| Tekening | Opgeslagen stimulus | Verwacht gedrag |
| --- | --- | --- |
| **source-dc** (DC) | 5 V | Constante 5 V en 5 mA belastingsstroom |
| **source-sine** (Sinus) | 1 V offset, 2 V piekamplitude, 1 kHz | −1 tot +3 V, periode 1 ms |
| **source-pulse** (Puls) | 0–5 V, stijg-/daaltijd 10 µs, hoge plateau 300 µs, periode 1 ms | Herhalende pulsen met eindige flanken |
| **source-triangle** (Driehoek) | −1 tot +1 V, periode 1 ms | Lineair stijgende en dalende hellingen |
| **source-pwl** (Stuksgewijs lineair) | 0 V tot 1 ms, stijging naar 3 V tegen 2 ms, vasthouden tot 3 ms, daling tegen 4 ms | Een geprogrammeerde opstart- en uitschakelvolgorde |
| **source-exponential** (Exponentieel) | 0–5 V, stijging begint bij 1 ms, daling begint bij 3 ms | Exponentiële overgangen met tijdconstanten van 300 µs en 500 µs |
| **source-fm** (FM) | Amplitude 1 V, draaggolf 5 kHz, modulatie 500 Hz, index 2 | Constante amplitude met veranderende momentane frequentie |
| **source-current** (Stroompuls) | 0–1 mA door een retourbelasting van 1 kΩ | Ongeveer 0 tot −1 V met de meegeleverde bronoriëntatie |


Dit zijn oplossersplots van de meegeleverde bestanden. Het resultaat van de stroombron is negatief omdat de bron stroom van OUT naar aarde trekt en de weerstand het retourpad vormt. Keer de bron om als een positieve belastingsspanning nodig is. Een ideale stroombron legt de stroom op; het netwerk bepaalt de klemspanning. Er is geen automatische begrenzing van de compliantiespanning.

## Video: broninstellingen en golfvormvoorbeeld
{: #video-source-settings-and-waveform-preview}

De sinusoffset, piekamplitude en frequentie wijzigen en vervolgens de transiënte analyse opnieuw uitvoeren.

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/source-settings.mp4" poster="/v4/videos/simulation-tutorials/spice/source-settings.jpg" caption="Broninstellingen en golfvormvoorbeeld." %}

[De video bekijken of downloaden](/v4/videos/simulation-tutorials/spice/source-settings.mp4).

### Schakeling en referentieresultaten
{: #circuit-and-reference-results}

![Voorbeelden van gemeten golfvormen](/v4/images/simulation-tutorials/spice/source-waveforms.png)

## Amplitude, offset en timing
{: #amplitude-offset-and-timing}

Voor een sinus, `v(t) = offset + amplitude × sin(2πft + phase)` voordat optionele vertraging en demping in aanmerking worden genomen. Amplitude is een **piekwaarde**, niet piek-tot-piek of RMS. Een sinus met een piek van 2 V en een offset van nul heeft 4 V piek-tot-piek en 1,414 V RMS. Met een offset van 1 V wordt de totale RMS `sqrt(1² + 2²/2) = 1.732 V`.

De pulsbreedte beschrijft het hoge plateau; eindige flanken beïnvloeden de breedte die bij een drempelwaarde wordt gemeten. Voor de meegeleverde puls bedraagt de duur boven 2,5 V ongeveer 310 µs, wat een dutycycle van ongeveer 31% oplevert. Vermijd flanken met een tijdsduur van nul bij het bestuderen van een analoge schakeling. Ze introduceren onbeperkte bandbreedte en bemoeilijken de numerieke berekeningen zonder een echte generator weer te geven.

Stuksgewijs lineaire gegevens gebruiken één oplopend tijd-/waardepaar per regel. Dat is handig voor voedingsspanningshellingen, sensorprofielen en niet-periodieke testreeksen. Een exponentiële bron legt een exponentiële golfvorm op; er wordt geen fysiek RC-netwerk toegevoegd.

## AC-excitatie is een afzonderlijke instelling
{: #ac-excitation-is-a-separate-setting}

**AC-amplitude** en **AC-fase** sturen de AC-frequentieresponsanalyse aan. Het sinusfrequentieveld stelt het frequentiebereik van een AC-sweep niet in. Evenzo creëert een AC-amplitude van 1 V geen transiënte sinus van 1 V. Houd dit onderscheid in gedachten wanneer dezelfde ingangsbron wordt gebruikt voor bias-, AC- en transiënte analyses.

Een ideale onafhankelijke bron heeft nul uitgangsimpedantie als het een spanningsbron is, en oneindige uitgangsimpedantie als het een stroombron is. TinyCAD's **Lab Equipment → Functiegenerator** bevat daarentegen een configureerbare uitgangsweerstand (normaal 50 Ω). Een aangepaste belasting van 50 Ω ontvangt de helft van de nullastspanning van de generator.

## Gestuurde bronnen en praktische toepassingen
{: #controlled-sources-and-practical-uses}

Het SPICE-invoegmenu biedt ook een spanningsgestuurde spanningsbron en een spanningsgestuurde stroombron. De eerste implementeert `Vout = gain × Vcontrol`; de tweede implementeert `Iout = transconductance × Vcontrol`. Hun stuuraansluitingen en uitgangsaansluitingen zijn gescheiden. Open **controlled-source** voor een kant-en-klare spanningsgestuurde spanningsbron met versterking 2. Een ingang met een piek van 1 V levert een uitgang met een piek van 2 V aan 1 kΩ. De ideale bron bevat geen model voor afkappen of voedingsvermogen.

Gestuurde bronnen kunnen een ideale versterker, transducer of afhankelijke belasting weergeven, maar krijgen geen voedingslimieten of bandbreedte tenzij het model die expliciet bevat.

Probeer alleen de sinusamplitude te wijzigen en vervolgens alleen de offset. Voorspel vóór het opnieuw uitvoeren de nieuwe minimumwaarde, maximumwaarde en RMS-waarde. Verdubbel daarna de frequentie en halveer de maximale tijdstap om te controleren of de weergegeven golfvorm voldoende is opgelost.

Referentie: de bronsyntaxis en golfvormdefinities zijn beschreven in de [ngspice-handleiding](https://ngspice.sourceforge.io/docs.html).

## De lescircuits downloaden
{: #download-the-lesson-circuits}

Dezelfde voorbeelden zijn al beschikbaar via **Voorbeeld openen**. Download voor een afzonderlijke kopie een `.dzn`-tekening en gebruik **Bestand → Openen** in TinyCAD. Het bijbehorende `.cir`-bestand is SPICE-tekst voor inspectie of gebruik in een compatibele externe simulator, geen TinyCAD-tekening. Voor nieuwe simulaties van XSPICE-circuits is Desktop vereist.

| Voorbeeld | Tekening | Netlijst |
| --- | --- | --- |
| source-dc | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/source-dc.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/source-dc.cir) |
| source-current | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/source-current.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/source-current.cir) |
| source-sine | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/source-sine.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/source-sine.cir) |
| source-pulse | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/source-pulse.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/source-pulse.cir) |
| source-triangle | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/source-triangle.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/source-triangle.cir) |
| source-pwl | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/source-pwl.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/source-pwl.cir) |
| source-exponential | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/source-exponential.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/source-exponential.cir) |
| source-fm | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/source-fm.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/source-fm.cir) |
| controlled-source | [TinyCAD-tekening](/v4/examples/simulation-tutorials/spice/controlled-source.dzn) | [SPICE-tekst](/v4/examples/simulation-tutorials/spice/controlled-source.cir) |

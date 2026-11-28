---
layout: default
---
# Grafieken, metingen en Circuit Explorer
{: #charts-measurements-and-circuit-explorer}

Gebruik na een [simulatierun](../Simulation/) grafieken om de golfvorm te verkennen en benoemde metingen om herhaalbare grootheden vast te leggen. Circuit Explorer voegt tijdelijke afstemming, herhaalde runs, vereisten en studierapporten toe.

Open **Simulatieblad → Instellingen** en blader vervolgens omlaag naar **Circuit Explorer**. Gebruik **Hulpmiddelen toevoegen** om indien nodig Metingen, Afstemmen / sweep, Vereisten, DC-overlay of Analysis lab toe te voegen. Geconfigureerde hulpmiddelen verschijnen in de lijst links. **Hulpmiddel verbergen** verbergt de bedieningselementen, maar behoudt de opgeslagen instellingen. Grafieken blijven in het afzonderlijke paneel rechts.

## Grafieken weergeven en rangschikken
{: #show-and-arrange-charts}

Kies in zowel de browser als Desktop **Simulatie → Grafieken weergeven** op de werkbalk. Desktop biedt ook **Weergave → Grafieken weergeven**. Sleep de linkerrand van het paneel **Simulatiegrafieken** rechts om het formaat te wijzigen. Selecteer een instelling en acquisitie; gebruik **Uitvoeren** of **Stoppen** zonder het schema te verlaten.

Probegrafieken worden automatisch toegevoegd. Zonder probes krijgt een instelling een uitgangsgrafiek. Gebruik **Grafiek toevoegen** voor een andere probe of een aangepaste weergave en kies vervolgens **Signalen kiezen**. Grafiektitels kunnen worden bewerkt. Een analyse met meerdere grafieken, zoals ruis, heeft een keuzelijst voor resultaatgrafieken.

Klik op legenda-items om sporen te verbergen. Spanning, stroom en andere eenheden gebruiken gelabelde assen; lees geen stroom af op de spanningsschaal. Complexe AC-gegevens kunnen worden weergegeven als reële/imaginaire delen, amplitude, dB of fase. De uitgangsamplitude in dB is niet automatisch een overdrachtsversterking, tenzij de ingang correct is genormaliseerd.

Gebruik het muiswiel/knijpen om in te zoomen, sleep om te verschuiven, **Shift-slepen** voor een gebied en **Passend** om de weergave te herstellen. Met numerieke cursors kunt u sampleposities inspecteren. Grote resultaten gebruiken gereduceerde weergavegegevens voor een responsief overzicht; bij inzoomen wordt de weergave verfijnd. Compatibele vastgezette referenties verschijnen als gestreepte overlays.

### Loskoppelen en exporteren
{: #pop-out-and-export}

Met **Grafiek loskoppelen** opent u in beide producten een onafhankelijk venster. Meerdere grafieken kunnen worden losgekoppeld. Als u een losgekoppelde grafiek sluit, keert deze terug naar het paneel; met × op een gekoppelde grafiek verwijdert u de grafiek. Losgekoppelde grafieken delen de huidige resultaatgegevens en starten geen afzonderlijke simulaties.

Met **CSV downloaden** exporteert u alle bewaarde samples voor de geselecteerde signalen en hun schaal, inclusief imaginaire waarden. Dit staat los van de zoom- of sample-instellingen van de weergave. Hoofdgrafieken bieden ook de optie **PNG** downloaden. Vermeld de geselecteerde instelling, acquisitie en eenheden bij een rapport, zodat andere lezers weten op welk experiment de gegevens betrekking hebben.

## De voorbereide RC-onderzoekssituatie proberen
{: #try-the-prepared-rc-investigation}

Download [RC low-pass.dzn](../examples/simulation/rc-low-pass.dzn), open het via **Bestand → Openen** en voer het uit. Dit begeleidende bestand staat los van het meegeleverde zelfstudiemodel **rc-ac**. Het bevat voorbereide definities voor metingen, vereisten en afstemming.

Bij R1 = 1 kΩ en C = 1 µF is de nominale hoekfrequentie ongeveer 159,15 Hz. **Metingen** bevat de afsnijfrequentie, versterking bij 100 Hz en fase bij de ideale hoekfrequentie; **Vereisten** controleert of de afsnijfrequentie tussen 150 en 170 Hz ligt.

![Afstemknoppen van Circuit Explorer in de bijbehorende RC-tekening](../Images/simulation/explorer-tuning.png)

## Afstemmen zonder het opgeslagen circuit te wijzigen
{: #tune-without-changing-the-saved-circuit}

Selecteer in **Afstemmen / sweep** een component en een numerieke eigenschap en kies vervolgens **Afstemknop toevoegen**. Als u een component in het schema selecteert, wordt deze vooraf geselecteerd in de kiezer. U kunt ook ondersteunde bron-/instrumentinstellingen en benoemde instellingsparameters koppelen. Willekeurige tekst, expressies en inhoud van modelbestanden kunnen niet met schuifregelaars worden ingesteld.

Bedieningselementen ondersteunen eenheden, grenzen, lineaire/logaritmische schalen en afronding op voorkeurswaarden volgens E12/E24/E96. Na een wijziging wordt na ongeveer 500 ms een run ingepland. Tijdelijke waarden staan los van de opgeslagen componentwaarden.

- **Afstemming ongedaan maken** herstelt de voorafgaande tijdelijke overschrijving.
- **Opnieuw instellen** herstelt de oorspronkelijke waarden en acquisitie.
- **Toepassen** schrijft de overschrijvingen als één ongedaan te maken bewerking naar de tekening.

Een numerieke eigenschap beïnvloedt het circuit alleen als de SPICE-sjabloon van de component deze daadwerkelijk gebruikt. Ga er niet van uit dat het wijzigen van een ongebruikt kenmerk het model wijzigt.

### Sweeps met één variabele
{: #one-variable-sweeps}

Vouw **Sweep met één variabele** uit en kies een bedieningselement. Gebruik 2–100 lineaire/logaritmische punten of 1–100 expliciete waarden, gescheiden door spaties of puntkomma's. **Sweep uitvoeren** voert de geselecteerde analyse uit voor elke waarde. Met **Annuleren** stopt u met het inplannen van nieuwe gevallen; voltooide resultaten blijven behouden.

De RC-bijbehorende tekening bevat de waarden 1 kΩ, 2,2 kΩ, 4,7 kΩ, 6,8 kΩ en 10 kΩ. De ideale afsnijfrequenties hiervan zijn ongeveer 159,15, 72,34, 33,86, 23,41 en 15,92 Hz. Vergelijk overlays of een benoemde meetgrootheid met de parameterwaarde. Dit verschilt van de [DC-sweepanalyse](../Simulation-Analyses/#dc-sweep), waarbij een onafhankelijke bron binnen een DC-analyse wordt gevarieerd.

Sweepdefinities, waarden, eenheden, runstatus en vastgelegde meetgrootheden worden opgeslagen in `.dzn`. Met **Opgeslagen sweep** kunt u een groep opnieuw bekijken. Als u de ruwe resultaten verwijdert, verdwijnen de golfvormoverlays, maar vastgelegde scalairtabellen en rapportmetadata kunnen behouden blijven. Er worden maximaal 100 sweepgroepen bewaard, binnen de normale acquisitie- en gegevenslimieten.

## Benoemde metingen definiëren
{: #define-named-measurements}

Voeg onder **Metingen** een naam toe, selecteer een signaal/component en vouw de instellingen uit. Stel een zinvol tijd-/frequentievenster in en geef eventueel vereiste niveaus of referenties op. Koppelingen aan componenten/probes gebruiken de identiteit van het blad plus de referentie, zodat ze behouden kunnen blijven wanneer u het bestand opnieuw opent.

![Voorbereide metingen voor afsnijfrequentie, versterking en fase](../Images/simulation/explorer-measurements.png)

| Meting | Interpretatie |
| --- | --- |
| Waarde, minimum, maximum, top-top | Een signaalwaarde op een positie, of uiterste waarden binnen het gekozen venster |
| Gemiddelde, RMS, rimpel-RMS | Tijdsgewogen transiënte grootheden; bij rimpel-RMS wordt het gemiddelde verwijderd |
| Integraal | Oppervlakte over de tijd; integratie van watt levert joule op |
| Stijg-/daaltijd | Eerste volledige overgang van 10–90% tussen opgegeven lage/hoge niveaus |
| Periode, frequentie, dutycycle, pulsbreedte | Eerste volledige cyclus/puls met een expliciete drempel of het middelniveau van het venster |
| Vertraging | Eerste stijgende flank van de uitgang minus de eerste flank van de referentie, bij dezelfde drempel |
| Overshoot/undershoot | Uitslag ten opzichte van opgegeven begin-/eindniveaus en stapgrootte |
| Insteltijd | Laatste keer dat de waarde de tolerantieband rond de eindwaarde binnengaat, gemeten vanaf het begin van het venster |
| Tijdconstante | Eerste overgang van beginwaarde + (eindwaarde − beginwaarde) × (1 − 1/e), gemeten vanaf het begin van het venster |
| AC-versterking/fase | Complexe verhouding uitgang/ingang bij de gekozen frequentie |
| Afsnijfrequentie/bandbreedte | Halfvermogenskruisingen, −3,0103 dB ten opzichte van de gekozen versterkingsreferentie |
| Resonantie | Grootste piek in de amplitude binnen het bereik; een maximum aan de rand is geen vastgestelde resonantie |
| Aanvullende responsmetingen | Doorlaatbandrimpel, stopbandverzwakking, impedantieamplitude van de poort en groepsvertraging |

Transiënte integratie houdt rekening met ongelijke tijdstappen en geïnterpoleerde venstereindpunten. RMS omvat DC; bij rimpel-RMS wordt deze component verwijderd. Vertraging kan negatief zijn als de uitgangskruising vóór de referentiekruising ligt. Voor tijdmetingen moet een voldoende groot deel van de relevante overgang of cyclus binnen het venster vallen.

Geef voor stapmetingen begin-/eindniveaus op. Een onjuist eindniveau maakt insteltijd en overshoot misleidend. Een niet-ingestelde laatste sample, een ontbrekende kruising, een onduidelijke koppeling, een niet-overeenkomende eenheid of een ongeldig venster levert **niet beschikbaar** op, geen verzonnen nulwaarde.

Gebruik voor de afsnijfrequentie een expliciete lineaire referentieversterking of **piek**. Een referentie van één is geschikt voor het eenvoudige RC-filter, maar een versterker met een versterking van 20 vereist een andere referentie. Bandbreedte vereist twee geldige kruisingen; frequentie-interpolatie verloopt logaritmisch. Een willekeurige piek aan de rand van de sweep stelt geen resonantie vast.

## Vereisten en DC-overlays
{: #requirements-and-dc-overlays}

Gebruik **Vereisten** om een benoemde meting te toetsen aan **minimaal**, **maximaal** of een inclusief bereik **tussen**. Eenheden moeten overeenkomen. De uitkomsten zijn **geslaagd**, **mislukt** of **niet beschikbaar**; een niet-beschikbare meetgrootheid betekent niet dat aan de vereiste is voldaan.

![De RC-afsnijfrequentievereiste met een expliciet acceptabel bereik](../Images/simulation/explorer-requirements.png)

Selecteer een beschikbare meting om de onderbouwing en eventuele relevante markering in het schema te bekijken. Bewaar meetdefinities, vensters en drempels bij geëxporteerde resultaten. Algemene wederzijdse markering tussen probes is niet volledig beschikbaar voor elk type signaal of model.

Voor de DC-schematische overlay is een nieuwe, voltooide werkpuntacquisitie vereist. Spanning is relatief ten opzichte van 0; de stroomrichting volgt de geconfigureerde volgorde van aansluitingen. Verbruikt vermogen is positief, dus een voedingsbron kan negatief vermogen hebben. De stroom door een ideale weerstand kan worden afgeleid uit V/R; niet-ondersteunde apparaatstromen worden weggelaten en niet verzonnen.

## Analysis lab
{: #analysis-lab}

![Werkstromen van Analysis lab in Circuit Explorer](../Images/simulation/analysis-lab.png)

### Frequentie- en versterkerrespons
{: #frequency-and-amplifier-response}

Kies ingang/uitgang, frequentiebereik en uitleesfrequentie. Voer AC uit om versterking, fase, afsnijfrequentie, bandbreedte, resonantie, banddoorlaat-Q en groepsvertraging te inspecteren. Banddoorlaat-Q betekent `f₀ / half-power bandwidth`. Overdrachtsfunctieberekeningen gebruiken een expliciet benoemd stimulussignaal. Voor poortimpedantie is een bewuste testconfiguratie voor spanning/stroom nodig; een willekeurige knooppuntverhouding is geen lusversterkingsmeting.

### Tolerantie en hoekpunten
{: #tolerance-and-corners}

Een Monte Carlo-onderzoek herhaalt runs met geconfigureerde componentverdelingen: begrensd uniform met ± tolerantie of een onbegrensde normale verdeling, opgegeven met de standaardafwijking. Stel een niet-ondertekende willekeurige seed en 2–100 gevallen in. Als u dezelfde seed en instelling opnieuw gebruikt, zijn de steekproeven reproduceerbaar. Volledig positief gecorreleerde groepen delen één gestandaardiseerde trekking en moeten één verdelingstype gebruiken.

Niet-positieve steekproefwaarden voor fysieke weerstand, capaciteit, inductantie of frequentie zijn mislukte gevallen. Inspecteer deze fouten in plaats van ze stilzwijgend uit te sluiten. Gemiddelde, steekproefstandaardafwijking en histogrammen beschrijven de getrokken resultaten, niet elk mogelijk geproduceerd onderdeel.

Bij het zoeken naar hoekpunten worden maximaal zes onafhankelijke variabelen, ofwel 64 hoekpunten, opgesomd. Monte Carlo-correlatiegroepen worden genegeerd. Het gerapporteerde slechtste waargenomen resultaat bewijst niet dat dit tussen de hoekpunten een globaal worstcasescenario is. De opbrengst is indicatief en gebaseerd op de opgegeven aannames over model/verdeling; een onderzoek zonder evalueerbare vereisten levert geen opbrengstschatting op.

### Testgevallen
{: #test-cases}

Leg een analyse, parameters en definities en koppelingen van sporen/meting/vereiste vast als een geval. Geef gevallen verschillende temperaturen of overschrijvingen voor parameters, stimuli en belastingen en voer vervolgens de reeks uit. Gevallen delen het **huidige schema en de huidige modellen**; het zijn geen onafhankelijke historische circuitrevisies. Bij elke run wordt de identiteit van de invoer vastgelegd.

JSON-rapporten bevatten voorwaarden, uitkomsten en onderzoeksgeschiedenis. Onderzoeken worden sequentieel uitgevoerd en kunnen worden geannuleerd; mislukte of niet-geconvergeerde gevallen blijven zichtbaar. Definities, seed, gevalsvoorwaarden en groepsverwijzingen blijven bewaard in `.dzn`. De laatste 100 onderzoeksgroepen worden binnen de normale resultaatlimieten bewaard.

### Vermogen, rendement en belastbaarheid
{: #power-efficiency-and-stress}

Kies ondersteunde vermogenssignalen van componenten en expliciete limieten voor piekspanning, -stroom of -vermogen. Metingen van gemiddelde/RMS/integraal leveren gemiddeld vermogen, RMS-stroom en energie. Voor rendement zijn een correct gedefinieerde, van het juiste teken voorziene voedingsingangsgrens en een grens voor de verbruikende nuttige belasting nodig. Niet-ondersteunde of onduidelijke apparaatstromen maken het resultaat niet beschikbaar.

Kleinsignaal-AC is geen test van belastbaarheid bij grote signalen. Een numerieke limiet die in TinyCAD is ingevoerd, voegt geen thermisch model van de behuizing, pulsclassificatie of beveiligingsmechanisme toe. Gebruik transiënte omstandigheden en modellen die geschikt zijn voor de vraag en bewaar de aannames bij het rapport.

## Huidige beperkingen
{: #current-limits}

De geïmplementeerde werkstromen omvatten geen FFT-/harmonische-vervormingsanalyse, automatische foutinjectie, onbeperkte multidimensionale sweeps, automatische optimalisatie of gezamenlijke Live/Pauze. Gebruik bij het beoordelen van resultaten de status voltooid/gestopt/mislukt en de daadwerkelijke beschikbaarheid van gegevens. Zie [probleemoplossing](../Simulation-Troubleshooting/) wanneer een meetgrootheid of acquisitie niet beschikbaar is.

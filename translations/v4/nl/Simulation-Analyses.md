---
layout: default
---
# Simulatieanalyses en instellingen
{: #simulation-analyses-and-settings}

Kies een analyse op het tabblad **Setup** van een [simulatieblad](../Simulation/). Selecteer de analyse op basis van de vraag die u wilt beantwoorden. Een sinusgolf in het tijddomein en een AC-frequentiesweep zijn verschillende experimenten, zelfs als ze hetzelfde bronsymbool gebruiken.

| Analyse | Vraag | Belangrijkste uitvoer |
| --- | --- | --- |
| **Operating Point** | Wat zijn de DC-biasspanningen en -stromen? | Scalaire waarden |
| **Transient** | Wat gebeurt er na een verandering of tijdens herhaalde cycli? | Signalen als functie van de tijd |
| **AC** | Hoe verandert een klein signaal met de frequentie? | Complexe signalen als functie van de frequentie |
| **DC sweep** | Hoe verandert het DC-gedrag wanneer één onafhankelijke bron varieert? | Signalen als functie van de bronwaarde |
| **Noise** | Welke ruis bereikt de gekozen uitgang? | Spectrale en geïntegreerde ruisgrafieken |
| **Transfer Function** | Wat is de DC-kleinsignaaloverdracht van een benoemde bron? | Versterking en ingangs-/uitgangsweerstand |
| **Pole-Zero** | Waar liggen de polen en nullen van de ingestelde overdracht? | Complexe pool-/nulresultaten |

## Operating point
{: #operating-point}

Operating point bepaalt een stationaire DC-oplossing. Ideale condensatoren zijn bij DC open schakelingen en ideale spoelen zijn kortsluitingen. Niet-lineaire componenten, zoals diodes en transistors, worden opgelost bij hun biascondities. Voer deze analyse uit voordat u de frequentierespons van een transistorversterker onderzoekt: een transistor met een onjuiste bias wordt gelineariseerd rond de verkeerde toestand.

Gebruik **Data** voor knooppuntspanningen en takstromen. Spanning is relatief ten opzichte van aarde 0. De stroomrichting volgt de opgegeven volgorde van de aansluitingen van het component; een negatieve voedingsstroom kan simpelweg betekenen dat de voeding vermogen levert. De [DC-zelfstudie](../SPICE-Tutorial-02/) behandelt spanning, stroom en vermogen.

![Scalaire spannings- en stroomresultaten van de nieuwe operating-point-run van de spanningsdeler](../images/simulation/simulation-data.png)

## Transient: gedrag in de tijd
{: #transient-behaviour-over-time}

Stel **Duration** lang genoeg in om de gebeurtenis en het deel van de respons dat u wilt meten mee te nemen. Stel **Maximum step** klein genoeg in om het snelste significante kenmerk te kunnen onderscheiden. Bij een puls kan dat de flank zijn, en niet de herhalingsperiode. Een vloeiend ogende weergave kan overgangen die de oplosser niet heeft vastgelegd niet reconstrueren.

Voor een RC-schakeling die wordt opgeladen is de tijdconstante `τ = R × C`. Ongeveer vijf tijdconstanten tonen het grootste deel van de instelrespons van een eerste-ordesysteem. Simuleer voor rimpel of RMS voldoende cycli om een stationaire toestand te bereiken en meet een later tijdvenster, zodat de opstart niet onbedoeld wordt meegerekend.

De oplosser gebruikt adaptieve tijdstappen. Maximum step begrenst de stapgrootte; het garandeert geen gelijkmatig verdeelde sampletijdstippen. Meetalgoritmen houden rekening met de werkelijke sampletijdstippen. Inzoomen op de grafiek verandert de weergave, niet de acquisitietijdstap.

Standaard bepaalt een transient-run eerst een DC-bedrijfspunt. De optie voor beginvoorwaarden waarmee deze stap wordt overgeslagen, komt overeen met SPICE **UIC**. Gebruik deze optie bewust wanneer de opgegeven begintoestand deel uitmaakt van het experiment; het is geen algemene oplossing voor een verkeerd aangesloten schakeling. Zie [RC-opladen](../SPICE-Tutorial-04/) en [gelijkrichting en rimpel](../SPICE-Tutorial-06/).

## AC: kleinsignaal-frequentierespons
{: #ac-small-signal-frequency-response}

AC-analyse bepaalt eerst het bedrijfspunt, lineariseert niet-lineaire componenten daar en berekent de respons op een kleine sinusvormige verstoring. De analyse voert **geen** sweep uit van een grote transiënte sinus tot in het clipgebied. Gebruik transient-analyse voor clipping, vervorming en grote signaaluitslagen.

Stel de begin- en stopfrequentie en het aantal punten per decade in. Een logaritmische sweep is handig wanneer u meerdere ordes van grootte onderzoekt. Verhoog de frequentieresolutie rond een smalle resonantie of dicht bij elkaar liggende knikfrequenties.

Stel de **AC-amplitude** en fase van de bron afzonderlijk in van de instellingen voor de transiënte golfvorm. Met een AC-amplitude van **1 V** en een fase van **0°** is de spanningsoverdracht bij één ingang eenvoudig te interpreteren. Een transiënte sinusamplitude activeert op zichzelf geen AC-stimulus. Bereken voor een algemene ingang de complexe verhouding `V(out) / V(in)`; alleen de uitgangsspanning is niet altijd de versterking.

![AC-sweepinstellingen voor het meegeleverde RC-filter](../images/simulation/ac-setup.png)

Voor een eerste-orde laagdoorlaatfilter met R = 1 kΩ en C = 1 µF geldt `fc = 1 / (2πRC) ≈ 159.15 Hz`. Op die frequentie is de versterking van een filter met eenheidsversterking in de doorlaatband ongeveer 0,707, of −3,0103 dB, en de fase ongeveer −45°. De [filter-zelfstudie](../SPICE-Tutorial-05/) toont de amplitude, dB en fase.

![Werkelijke AC-resultaten van een nieuwe browserversie van het RC-voorbeeld](../images/simulation/ac-charts.png)

## DC-sweep
{: #dc-sweep}

Kies de **bronreferentie**, bijvoorbeeld `V1`, en voer begin-, stop- en stapwaarden in. De referentie identificeert een onafhankelijke spannings- of stroombron; het is geen netlabel. Kies een stap waarmee van de beginwaarde in de richting van de stopwaarde wordt gegaan.

Een DC-sweep lost achtereenvolgens een reeks biascondities op. Dit is nuttig voor een I-V-curve van een diode of de statische overdrachtscurve van een versterker. De sweep modelleert niet hoe snel de bron verandert of welke lading tijdens een ramp wordt opgeslagen. Geef daarvoor een tijdsafhankelijke golfvorm op en gebruik transient-analyse.

Deze analyse verschilt van een **sweep van één variabele in Circuit Explorer**, waarbij een geselecteerde analyse herhaaldelijk wordt uitgevoerd terwijl een numerieke component- of instellingsparameter verandert. Sweep bijvoorbeeld R1 door vijf waarden en herhaal daarbij een AC-analyse om de knikfrequenties van het filter te vergelijken.

## Noise
{: #noise}

Geef de ingangsbron en de uitgangs-/referentieknooppunten op, gevolgd door het frequentiebereik en de resolutie. De uitvoer is een spanningsverschil; controleer of de juiste referentie is gekozen. Noise-analyse berekent kleinsignaalruisbijdragen rond het bedrijfspunt. De analyse vereist componentmodellen die ruis ondersteunen; aan een ideaal ruisloos gedragsblok wordt niet automatisch het ruisspectrum van een fysiek component toegekend.

Selecteer de juiste resultaatgrafiek: **spectrale** en **geïntegreerde** ruis zijn verschillende grootheden. Let op de weergegeven eenheden; een amplitudedichtheid in V/√Hz is geen spanning totdat deze over een bepaald bandbreedtebereik is geïntegreerd. Zie [ontwerponderzoeken](../SPICE-Tutorial-10/).

## Transfer function en pole-zero
{: #transfer-function-and-pole-zero}

**Transfer Function** (`.tf`) gebruikt een expliciet benoemde onafhankelijke bron en een uitgangspoort om de DC-kleinsignaalversterking en de ingangs-/uitgangsweerstand te berekenen. Dit is niet de volledige frequentiesweep van een AC-analyse. Controleer de bronreferentie en of de uitgang ten opzichte van het juiste knooppunt wordt gemeten.

**Pole-Zero**-analyse onderzoekt de polen en nullen van de ingestelde kleinsignaaloverdracht. De poort- en overdrachtskeuzes zijn van belang: het is geen zoektocht naar al het mogelijke gedrag van een schema. Interpreteer de resultaten in het complexe vlak samen met AC- en transient-resultaten; beschouw ze niet als vervanging voor een correct gebiast model.

## Temperatuur, eenheden en parameters
{: #temperature-units-and-parameters}

De ingestelde temperatuur is in **°C**. Deze beïnvloedt componenten waarvan de modellen temperatuurafhankelijkheid implementeren; ze voegt geen thermische fysica toe aan een ideaal component. Met benoemde instellingsparameters kunt u een numerieke waarde hergebruiken in compatibele SPICE-expressies en verkenningskoppelingen.

Numerieke bedieningselementen accepteren engineeringnotatie, zoals `5ms`, `10us` en `1kHz`. In **SPICE-tekst** gelden de SPICE-regels voor achtervoegsels: `k` is kilo, `u` micro, `n` nano en **`m` of `M` betekent milli**. Schrijf **`Meg`** voor mega, bijvoorbeeld `1Meg` voor één megaohm. Ga er niet van uit dat `1M` één miljoen betekent.

Een ruwe berekening van de tijdconstante of knikfrequentie is een nuttige controle. Deze vervangt echter niet het rekening houden met belasting: de uitgangsweerstand van een generator, de ingangsweerstand van een meter of een volgende trap kan de werkelijke respons veranderen.

Raadpleeg voor de volledige analysesyntaxis en het modelgedrag de officiële [ngspice-handleiding](https://ngspice.sourceforge.io/docs.html). Ga voor de bedieningselementen van TinyCAD verder met [bronnen en meetinstrumenten](../Simulation-Sources-and-Instruments/) of [grafieken en metingen](../Simulation-Charts-and-Measurements/).

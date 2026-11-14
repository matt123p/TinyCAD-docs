---
layout: default
---
# Lay-out opschonen
{: #layout-tidy-up}

Met **Auto-layout** wordt een bestaand schema opgeschoond door de posities van componenten, draden en labels aan te passen. Gebruik deze functie om een druk circuit beter leesbaar te maken, onnodige bochten te verminderen of de afstand tussen referenties en waarden te verbeteren.

De functie werkt op het **huidige schemablad**, zowel in de browser als in de Desktop App. De bestaande elektrische verbindingen blijven behouden; de functie leidt niet af welke verbindingen u bedoelde te tekenen en maakt geen circuit vanaf nul.

## Auto-layout openen
{: #open-auto-layout}

Kies in beide producten **Auto-layout** op de werkbalk, direct naast **Simulation**. In Desktop kunt u ook **Tools → Auto-layout** kiezen.

Selecteer eerst een schemablad. De functie is niet beschikbaar tijdens het bewerken van een bibliotheek of bij het bekijken van een Simulation-blad.

## Kiezen wat u wilt opschonen
{: #choose-what-to-tidy}

De instelling **Apply to** in het dialoogvenster biedt de volgende opties:

- **Whole sheet** — ruim de ondersteunde circuititems op het huidige blad op.
- **Selected Items** — ruim alleen de geselecteerde circuititems op; items buiten de selectie blijven vast staan en verbindingen aan de rand ervan blijven behouden.

Als u een klein gebied wilt bewerken, selecteert u de componenten ervan samen met de draden en labels die u wilt aanpassen voordat u het dialoogvenster opent. Selected Items is de standaardinstelling wanneer de selectie een ondersteund circuititem bevat. Deze optie is uitgeschakeld als de selectie alleen niet-ondersteunde objecten bevat, zoals notitievakken of tekenvormen, of als er niets is geselecteerd.

Een selectie kan symbolen, draden, netlabels, voedingssymbolen, no-connect-markeringen en knooppunten bevatten. Een component buiten de selectie wordt niet verplaatst alleen omdat deze met een geselecteerde component is verbonden.

## De sterkte kiezen
{: #choose-the-strength}

**Strength** bepaalt in welke mate de plaatsing van componenten mag veranderen:

| Strength | Wat kan veranderen |
| --- | --- |
| **Low** | Houdt grote componenten op hun plaats; kleinere componenten, draden en labels kunnen nog wel worden verplaatst. |
| **Medium** | Staat toe dat maximaal twee grote componenten worden verplaatst, evenals kleinere componenten, draden en labels. Dit is de standaardinstelling. |
| **High** | Staat toe dat alle daarvoor in aanmerking komende componenten worden verplaatst, samen met draden en labels. |

Begin met Low als u de hoofdindeling wilt behouden. Gebruik Medium of High als het circuit meer ruimte nodig heeft om opnieuw te worden ingedeeld. Low is geen optie die alleen labels aanpast: ook de posities van kleine componenten en de draadroutering kunnen veranderen.

Of een component “groot” is, wordt bepaald aan de hand van de symboolgeometrie en het aantal pinnen, niet aan de hand van het elektrische belang ervan. Door de sterkte te wijzigen, worden componenten niet gedraaid, van grootte veranderd of vervangen; ook hun referenties, waarden en modelinstellingen veranderen niet.

## Het resultaat uitvoeren en controleren
{: #run-and-review-the-result}

1. Open een tekening of een bewerkbare kopie van een [meegeleverd voorbeeld](../Bundled-Examples/).
2. Selecteer het gebied dat u wilt opschonen als u de bewerking wilt beperken.
3. Open **Auto-layout**, kies **Apply to** en **Strength** en kies vervolgens **Go**.
4. Wacht terwijl **Arranging layout…** wordt weergegeven. Een geslaagd resultaat wordt direct toegepast en het dialoogvenster wordt gesloten.
5. Controleer het resultaat. Gebruik **Undo** om de volledige opschoning in één stap ongedaan te maken als u de oorspronkelijke indeling liever behoudt.

{% include video-player.html src="/v4/videos/simulation/layout-tidy-up.mp4" poster="/v4/videos/simulation/layout-tidy-up.jpg" caption="Open Auto-layout, kies het bereik en de sterkte, ruim het versterkervoorbeeld op en maak de wijziging vervolgens ongedaan." %}

Met **Cancel** stopt u de berekening en sluit u het dialoogvenster zonder wijzigingen toe te passen. Als het blad verandert terwijl de functie wordt uitgevoerd, wordt het resultaat verworpen; voer de functie opnieuw uit voor het huidige blad.

**No layout improvements were found** betekent dat de functie binnen het gekozen bereik en met de gekozen sterkte geen aanvaardbare wijzigingen heeft gevonden. De tekening blijft ongewijzigd. U kunt het dialoogvenster sluiten, een ander gebied selecteren, een andere sterkte proberen of handmatig een aanpassing maken.

## Wat de functie verbetert
{: #what-the-tool-improves}

Auto-layout zoekt naar verschillende soorten verbeteringen:

- Beter leesbare posities voor de tekst met componentreferenties en -waarden, waarbij de velden bij elkaar blijven en vrij staan van nabijgelegen tekeningen, draden en andere tekst.
- Betere posities voor gewone netlabels langs de draden waarop ze zijn geplaatst, waarbij verwante labels waar mogelijk op één lijn worden gezet.
- Eenvoudigere orthogonale draadroutering, kortere onnodige omwegen en duidelijkere uitgangen vanaf componentpinnen.
- Compactere plaatsing van verbonden componenten en regelmatige afstanden tussen herhaalde componenten.
- Geordende parallelle routes voor verwante draden wanneer de verbindingen en de beschikbare ruimte dit toelaten.

De functie wijzigt geen notitievakken, bussen, gevormde poortmarkeringen, bibliotheektekeningen of pagina-elementen. Sommige complexe of ongebruikelijke symbolen vereisen nog steeds handmatige aanpassingen. Een langere draad kan een beter resultaat opleveren als die ruimte biedt voor een label of een verbinding duidelijk houdt.

## Verbindingen controleren vóór het opschonen
{: #check-connections-before-tidying}

Auto-layout neemt de **bestaande connectiviteit in de tekening als uitgangspunt**. Voordat wijzigingen worden geaccepteerd, controleert de functie zowel het elektrische netlidmaatschap als de fysieke draadverbindingen. Benoemde netlabels kunnen in deze controles geen onderbroken fysieke draad verbergen.

Een draad die door het eindpunt van een andere draad of door een socket loopt, kan een elektrische verbinding maken, ook zonder zichtbaar verbindingspunt. Als dat contact onbedoeld is, corrigeert u het voordat u Auto-layout uitvoert: de functie kan niet bepalen of een bestaande verbinding een tekenfout was. De functie verplaatst geen dubbelzinnige knooppunten om eerder gescheiden netten met elkaar te verbinden.

Controleer na het opschonen de aftakkingen, pinverbindingen en routes rond ongebruikte sockets. Gebruik waar nodig [Design Rules Check](../Design-Rules-Check/) en vergelijk het circuit met de verbindingen die u bedoelde. Als een simulatietekening als gewijzigd wordt gemarkeerd, [voert u de simulatie opnieuw uit](../Simulation/) voordat u oude resultaten beschouwt als metingen van de huidige tekening.

## Auto-layout of Point-to-Point Wire?
{: #auto-layout-or-point-to-point-wire}

Gebruik **Auto-layout** om de geometrie van items die al in het schema staan op te schonen. Gebruik [Point-to-Point Wire](../Wires/#auto-routing) als u een nieuwe gerouteerde verbinding tussen twee eindpunten wilt maken. Met het gewone [Wire-gereedschap](../Wires/#placing-wires) kunt u de afzonderlijke hoeken zelf kiezen.

Zie ook [Snap to Grid](../Snap-to-Grid/), [Labels](../Labels/) en [Page Size](../Page-Size/).

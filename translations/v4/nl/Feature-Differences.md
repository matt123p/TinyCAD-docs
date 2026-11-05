---
layout: default
---
# Verschillen in functies
{: #feature-differences}

Deze pagina geeft een overzicht van de belangrijkste verschillen tussen TinyCAD in de browser en de desktopversie.

<div class="comparison-legend" aria-label="Feature status legend">
	<span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ondersteund</span>
	<span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Gedeeltelijk</span>
	<span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Niet beschikbaar</span>
</div>

<div class="comparison-table-wrap">
	<table class="comparison-table">
		<colgroup>
			<col class="comparison-col-feature" />
			<col class="comparison-col-browser" />
			<col class="comparison-col-app" />
			<col class="comparison-col-v3" />
			<col class="comparison-col-notes" />
			</colgroup>
			<caption>Functievergelijking tussen TinyCAD in de browser, de desktopapp en TinyCAD v3.</caption>
		<thead>
			<tr>
				<th scope="col">Functie</th>
				<th scope="col">TinyCAD (browser)</th>
				<th scope="col">TinyCAD (app)</th>
				<th scope="col">TinyCAD v3</th>
				<th scope="col">Opmerkingen</th>
				</tr>
		</thead>
		<tbody>
			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Kernfuncties voor bewerken en bibliotheken</th>
				</tr>
			<tr>
				<th scope="row">TinyCAD-bestanden <code>.dsn</code> laden/opslaan</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td>TinyCAD voor het web streeft naar volledige compatibiliteit van bestandsindelingen met de desktopversie.</td>
			</tr>
			<tr>
				<th scope="row">Ondersteuning van interfacetalen</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nee</span></td>
				<td>Zie <a href="../Language-translation/">Taalvertaling</a>.</td>
			</tr>
			<tr>
				<th scope="row">TinyCAD-bibliotheekbestanden <code>.tclib</code> laden/bewerken</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td>Zie <a href="../Custom-symbol-libraries/">aangepaste bibliotheken</a>.</td>
			</tr>
			<tr>
				<th scope="row">Symbolen importeren van TinyCAD.net</th>
				<td><div class="feature-detail"><span class="feature-detail-title">Ingebouwde zoekfunctie</span><span class="feature-detail-copy">Zoeken in de webapp. Kopiëren en plakken werkt ook.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Ingebouwde zoekfunctie</span><span class="feature-detail-copy">Zoeken in de desktopapp. Kopiëren en plakken werkt ook.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Online zoeken</span><span class="feature-detail-copy">Zoek op TinyCAD.net en kopieer en plak de resultaten vervolgens in de desktopapp.</span></div></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Symbolen importeren uit KiCAD</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nee</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Tekeningen met meerdere bladen</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Labels</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Bussen</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Vormen en annotaties</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Tekening doorzoeken</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Ontwerpregelcontrole</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Netlijst genereren</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Stijl instellen voor meerdere items</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nee</span></td>
				<td>De webapp ondersteunt het selecteren van meerdere annotatie-items en het toepassen van een gedeelde stijl en vulling.</td>
			</tr>
			<tr>
				<th scope="row">Automatische plaatsing van knooppunten</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Ongedaan maken/opnieuw uitvoeren</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td></td>
			</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Uitvoer en integratie</th>
			</tr>
			<tr>
				<th scope="row">Afdrukken</th>
				<td><div class="feature-detail"><span class="feature-detail-title">PDF-export</span><span class="feature-detail-copy">Afdrukken vanuit de browser of een PDF-viewer.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Rechtstreeks afdrukken</span><span class="feature-detail-copy">Gebruikt het printerstuurprogramma van het besturingssysteem.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Rechtstreeks afdrukken</span><span class="feature-detail-copy">Gebruikt het printerstuurprogramma van het besturingssysteem.</span></div></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Exporteren als afbeelding</th>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">Vectoruitvoer voor browsers en moderne ontwerptools.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">Vectoruitvoer voor browsers en moderne ontwerptools.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">PNG</span><span class="feature-detail-copy">Rasterexportindeling.</span></div></td>
				<td>Er zijn online gratis SVG-naar-PNG-converters beschikbaar.</td>
			</tr>
			<tr>
				<th scope="row">Exporteren naar PDF</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Gedeeltelijk</span></td>
				<td>Gebruik afdrukken naar PDF in TinyCAD v3.</td>
			</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Geavanceerde functies</th>
			</tr>
			<tr>
				<th scope="row">SPICE-simulatiebestanduitvoer</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">VHDL-bestandsuitvoer</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nee</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td>Alleen beschikbaar in de desktopapp. Zie <a href="../VHDL-output/">VHDL-uitvoer</a>.</td>
			</tr>
			<tr>
				<th scope="row">Hiërarchische tekeningen met meerdere bestanden</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nee</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nee</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td></td>
			</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Platform en installatie</th>
			</tr>
			<tr>
				<th scope="row">Windows-ondersteuning</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Volledig</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Native app</span><span class="feature-detail-copy">Desktopinstallatie ondersteund op Windows.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Volledig</span></td>
				<td>Aanbevolen installatiemethode op Windows: <a href="https://apps.microsoft.com/detail/9NZQ1M56NM3V">Microsoft Store</a>.</td>
			</tr>
			<tr>
				<th scope="row">Mac-ondersteuning</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Volledig</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Native app</span><span class="feature-detail-copy">Beschikbaar in de App Store op macOS.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Gedeeltelijk</span></td>
				<td>TinyCAD v3 is op macOS afhankelijk van Wine-compatibiliteit.</td>
			</tr>
			<tr>
				<th scope="row">Linux-ondersteuning</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Volledig</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Desktopinstallatie</span><span class="feature-detail-copy">Beschikbaar via de Snap Store of als .dep-pakket.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Gedeeltelijk</span></td>
				<td>TinyCAD v3 is op Linux afhankelijk van Wine-compatibiliteit.</td>
			</tr>
			<tr>
				<th scope="row">Chrome OS-ondersteuning</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nee</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nee</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Ondersteuning voor telefoon/tablet</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Gedeeltelijk</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nee</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nee</span></td>
				<td>Gebruik in de browser is mogelijk, maar voor een soepele workflow is nog steeds een muis of stylus nodig.</td>
			</tr>
			<tr>
				<th scope="row">Installatie vereist</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nee</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Ja</span><span class="feature-detail-copy">App Stores en installatiepakketten.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Ja</span><span class="feature-detail-copy">Installatiepakket vereist.</span></div></td>
				<td></td>
			</tr>
		</tbody>
	</table>
</div>

- Terug naar [Referentie](../Reference/)
- Terug naar [inhoud v4](../CONTENTS/)

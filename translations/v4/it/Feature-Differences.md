---
layout: default
---
# Differenze tra funzionalità
{: #feature-differences}

Questa pagina riassume le principali differenze tra TinyCAD per il web e la versione desktop.

<div class="comparison-legend" aria-label="Feature status legend">
	<span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Supportato</span>
	<span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Parziale</span>
	<span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Non disponibile</span>
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
		<caption>Confronto delle funzionalità tra TinyCAD nel browser, l'app desktop e TinyCAD v3.</caption>
		<thead>
			<tr>
				<th scope="col">Funzionalità</th>
				<th scope="col">TinyCAD (browser)</th>
				<th scope="col">TinyCAD (app)</th>
				<th scope="col">TinyCAD v3</th>
				<th scope="col">Note</th>
			</tr>
		</thead>
		<tbody>
			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Modifica di base e librerie</th>
			</tr>
			<tr>
				<th scope="row">Caricamento/salvataggio di file TinyCAD <code>.dsn</code></th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td>TinyCAD web punta alla piena compatibilità del formato dei file con la versione desktop.</td>
			</tr>
			<tr>
				<th scope="row">Supporto delle lingue dell'interfaccia</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td>Vedere <a href="../Language-translation/">Traduzione della lingua</a>.</td>
			</tr>
			<tr>
				<th scope="row">Carica/Modifica libreria TinyCAD <code>.tclib</code> files</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td>Vedere <a href="../Custom-symbol-libraries/">librerie personalizzate</a>.</td>
			</tr>
			<tr>
				<th scope="row">Importa simboli da TinyCAD.net</th>
				<td><div class="feature-detail"><span class="feature-detail-title">Ricerca integrata</span><span class="feature-detail-copy">Cerca nell'app web. È possibile anche copiare e incollare.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Ricerca integrata</span><span class="feature-detail-copy">Cerca nell'app desktop. È possibile anche copiare e incollare.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Ricerca online</span><span class="feature-detail-copy">Cerca su TinyCAD.net, quindi copia e incolla nell'app desktop.</span></div></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Importa simboli da KiCAD</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Disegni multi-foglio</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Etichette</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Bus</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Forme e annotazioni</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Cerca nel disegno (Search drawing)</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Verifica delle regole di progettazione (Design Rules Check)</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Genera netlist (Generate netlist)</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Imposta lo stile su più elementi</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td>L'app Web supporta la selezione di più elementi di annotazione e l'applicazione di uno stile e un riempimento comuni.</td>
			</tr>
			<tr>
				<th scope="row">Posizionamento automatico delle giunzioni</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Annulla/Ripeti</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td></td>
			</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Output e integrazione</th>
			</tr>
			<tr>
				<th scope="row">Stampa</th>
				<td><div class="feature-detail"><span class="feature-detail-title">Esportazione PDF</span><span class="feature-detail-copy">Stampa dal browser o da qualsiasi visualizzatore PDF.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Stampa diretta</span><span class="feature-detail-copy">Utilizza il driver della stampante del sistema operativo.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Stampa diretta</span><span class="feature-detail-copy">Utilizza il driver della stampante del sistema operativo.</span></div></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Esportazione in immagine</th>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">Output vettoriale per browser e strumenti di progettazione moderni.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">Output vettoriale per browser e strumenti di progettazione moderni.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">PNG</span><span class="feature-detail-copy">Formato di esportazione raster.</span></div></td>
				<td>Sono disponibili online convertitori gratuiti da SVG a PNG.</td>
			</tr>
			<tr>
				<th scope="row">Esporta in PDF</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Parziale</span></td>
				<td>Usa Stampa in PDF (Print to PDF) in TinyCAD v3.</td>
			</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Funzionalità avanzate</th>
			</tr>
			<tr>
				<th scope="row">Output del file di simulazione SPICE</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Output del file VHDL</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td>Solo per l'app desktop. Vedi <a href="../VHDL-output/">output VHDL</a>.</td>
			</tr>
			<tr>
				<th scope="row">Disegni gerarchici multi-file</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td></td>
			</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Piattaforma e installazione</th>
			</tr>
			<tr>
				<th scope="row">Supporto per Windows</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Completo</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">App nativa</span><span class="feature-detail-copy">Installazione desktop supportata su Windows.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Completo</span></td>
				<td>Percorso di installazione consigliato su Windows: <a href="https://apps.microsoft.com/detail/9NZQ1M56NM3V">Microsoft Store</a>.</td>
			</tr>
			<tr>
				<th scope="row">Supporto per Mac</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Completo</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">App nativa</span><span class="feature-detail-copy">Disponibile nell'App Store su macOS.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Parziale</span></td>
				<td>TinyCAD v3 si basa sulla compatibilità di Wine su macOS.</td>
			</tr>
			<tr>
				<th scope="row">Supporto per Linux</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Completo</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Installazione desktop</span><span class="feature-detail-copy">Disponibile nello Snap Store o tramite pacchetto .dep.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Parziale</span></td>
				<td>TinyCAD v3 si basa sulla compatibilità di Wine su Linux.</td>
			</tr>
			<tr>
				<th scope="row">Supporto per Chrome OS </th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Supporto per telefoni/tablet</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Parziale</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td>È possibile utilizzare il browser, ma per lavorare agevolmente è comunque necessario un mouse o una penna.</td>
			</tr>
			<tr>
				<th scope="row">È necessaria l'installazione</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Sì</span><span class="feature-detail-copy">Store di app e pacchetti di installazione.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Sì</span><span class="feature-detail-copy">È necessario un pacchetto di installazione.</span></div></td>
				<td></td>
			</tr>
		</tbody>
	</table>
</div>

- Torna a [Riferimento](../Reference/)
- Torna a [contenuti v4](../CONTENTS/)

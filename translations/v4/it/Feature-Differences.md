---
layout: default
---
# Differenze tra funzionalità
{: #feature-differences}

Questa pagina riassume le principali differenze tra TinyCAD web e desktop.

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
				<th scope="row">Caricamento/salvataggio di file <code>.dsn</code> di TinyCAD</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td>TinyCAD web mira alla piena compatibilità del formato file con la versione desktop.</td>
			</tr>
			<tr>
				<th scope="row">Caricamento/salvataggio di file <code>.dzn</code> compressi di TinyCAD</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td>File di disegno basati su ZIP che contengono la configurazione della simulazione e, facoltativamente, i risultati. Vedere <a href="../Simulation/#dzn-simulation-drawings">file di simulazione</a>.</td>
			</tr>
			<tr>
				<th scope="row">Formattazione Markdown nelle caselle di testo</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td>Le versioni precedenti usano testo semplice. Vedere <a href="../Text/#markdown-text-boxes">caselle di testo Markdown</a>.</td>
			</tr>
			<tr>
				<th scope="row">Supporto per le lingue dell'interfaccia</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td>Vedere <a href="../Language-translation/">Traduzione dell'interfaccia</a>.</td>
			</tr>
			<tr>
				<th scope="row">Caricamento/modifica di file <code>.tclib</code> della libreria TinyCAD</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td>Vedere <a href="../Custom-symbol-libraries/">librerie personalizzate</a>.</td>
			</tr>
			<tr>
				<th scope="row">Librerie di componenti/modelli incluse e browser di esempi</th>
				<td>Sì</td>
				<td>Sì</td>
				<td>No</td>
				<td>Vedere <a href="../Bundled-Libraries/">librerie incluse</a> e <a href="../Bundled-Examples/">esempi</a>.</td>
			</tr>
			<tr>
				<th scope="row">Importazione di simboli da TinyCAD.net</th>
				<td><div class="feature-detail"><span class="feature-detail-title">Ricerca integrata</span><span class="feature-detail-copy">Cerca nell'app web. È possibile anche copiare e incollare.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Ricerca integrata</span><span class="feature-detail-copy">Cerca nell'app desktop. È possibile anche copiare e incollare.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Ricerca online</span><span class="feature-detail-copy">Cerca su TinyCAD.net, quindi copia e incolla nell'app desktop.</span></div></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Importazione di simboli da KiCAD</th>
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
				<th scope="row">Cerca nel disegno</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Controllo delle regole di progettazione</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Generazione della netlist</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Impostazione dello stile per più elementi</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td>L'app web consente di selezionare più elementi di annotazione e applicare uno stile e un riempimento comuni.</td>
			</tr>
			<tr>
				<th scope="row">Posizionamento automatico delle giunzioni</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Annulla/Ripristina</th>
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
				<td><div class="feature-detail"><span class="feature-detail-title">Stampa diretta</span><span class="feature-detail-copy">Usa il driver della stampante del sistema operativo.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Stampa diretta</span><span class="feature-detail-copy">Usa il driver della stampante del sistema operativo.</span></div></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Esportazione come immagine</th>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">Output vettoriale per browser e strumenti di progettazione moderni.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">Output vettoriale per browser e strumenti di progettazione moderni.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">PNG</span><span class="feature-detail-copy">Formato di esportazione raster.</span></div></td>
				<td>Sono disponibili online convertitori gratuiti da SVG a PNG.</td>
			</tr>
			<tr>
				<th scope="row">Esportazione in PDF</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Parziale</span></td>
				<td>Usare la stampa in PDF in TinyCAD v3.</td>
			</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Funzionalità avanzate</th>
			</tr>
			<tr>
				<th scope="row">Simulazione analogica SPICE integrata</th>
				<td><div class="feature-detail"><span><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></span><span class="feature-detail-copy">ngspice WebAssembly</span></div></td>
				<td><div class="feature-detail"><span><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></span><span class="feature-detail-copy">ngspice nativo</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td><a href="../Simulation/">Fogli di simulazione, grafici, misurazioni ed esplorazione</a>.</td>
			</tr>
			<tr>
				<th scope="row">Simulazione XSPICE guidata dagli eventi</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span><sup><a href="#xspice-browser-note">1</a></sup></td>
				<td><div class="feature-detail"><span><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></span><span class="feature-detail-copy">Modelli di codice inclusi</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Finestre distaccate degli strumenti virtuali</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Output di file di simulazione SPICE</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Output di file VHDL</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sì</span></td>
				<td>Solo app desktop. Vedere <a href="../VHDL-output/">Output VHDL</a>.</td>
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
				<th scope="row">Supporto Windows</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Completo</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">App nativa</span><span class="feature-detail-copy">Installazione desktop supportata su Windows.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Completo</span></td>
				<td>Metodo di installazione consigliato su Windows: <a href="https://apps.microsoft.com/detail/9NZQ1M56NM3V">Microsoft Store</a>.</td>
			</tr>
			<tr>
				<th scope="row">Supporto Mac</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Completo</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">App nativa</span><span class="feature-detail-copy">Disponibile nell'App Store su macOS.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Parziale</span></td>
				<td>TinyCAD v3 dipende dalla compatibilità di Wine su macOS.</td>
			</tr>
			<tr>
				<th scope="row">Supporto Linux</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Completo</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Installazione desktop</span><span class="feature-detail-copy">Disponibile nello Snap Store o tramite pacchetto .dep.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Parziale</span></td>
				<td>TinyCAD v3 dipende dalla compatibilità di Wine su Linux.</td>
			</tr>
			<tr>
				<th scope="row">Supporto Chrome OS </th>
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
				<td>È possibile usare il browser, ma per lavorare agevolmente è comunque necessario un mouse o una penna.</td>
			</tr>
			<tr>
				<th scope="row">Installazione richiesta</th>
				<td><div class="feature-detail"><span class="feature-detail-title">No</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Sì</span><span class="feature-detail-copy">Store delle app e pacchetti di installazione.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Sì</span><span class="feature-detail-copy">È necessario il pacchetto di installazione.</span></div></td>
				<td></td>
			</tr>
		</tbody>
	</table>
</div>

<p id="xspice-browser-note"><sup>1</sup> Le versioni browser possono aprire per la visualizzazione disegni contenenti risultati XSPICE salvati in precedenza. Per eseguire XSPICE è necessario TinyCAD Desktop.</p>

- Torna a [Riferimento](../Reference/)
- Torna a [contenuti v4](../CONTENTS/)

---
layout: default
---

# Feature Differences

This page summarizes key differences between TinyCAD web and desktop.

<div class="comparison-legend" aria-label="Feature status legend">
	<span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Supported</span>
	<span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Partial</span>
	<span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Not available</span>
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
		<caption>Feature comparison across TinyCAD browser, desktop app, and TinyCAD v3.</caption>
		<thead>
			<tr>
				<th scope="col">Feature</th>
				<th scope="col">TinyCAD (browser)</th>
				<th scope="col">TinyCAD (App)</th>
				<th scope="col">TinyCAD v3</th>
				<th scope="col">Notes</th>
			</tr>
		</thead>
		<tbody>
			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Core editing and libraries</th>
			</tr>
			<tr>
				<th scope="row">AI-assisted symbol, library and circuit editing</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td>Desktop app only; the AI assistant (chatbot) is not available in the browser build. Connect an AI provider using Chat, with an API key, an eligible ChatGPT account or local Ollama. See <a href="../AI-Assistant/">AI assistant setup and prompts</a>.</td>
			</tr>
			<tr>
				<th scope="row">Load/Save TinyCAD <code>.dsn</code> files</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td>TinyCAD web aims for full file-format compatibility with desktop.</td>
			</tr>
			<tr>
				<th scope="row">Load/Save compressed TinyCAD <code>.dzn</code> files</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td>ZIP-based drawing files containing simulation setup and optional results. See <a href="../Simulation/#dzn-simulation-drawings">simulation files</a>.</td>
			</tr>
			<tr>
				<th scope="row">Markdown formatting in text boxes</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td>Earlier versions use plain text. See <a href="../Text/#markdown-text-boxes">Markdown text boxes</a>.</td>
			</tr>
			<tr>
				<th scope="row">Interface language support</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td>See <a href="../Language-translation/">Language Translation</a>.</td>
			</tr>
			<tr>
				<th scope="row">Load/Edit TinyCAD library <code>.tclib</code> files</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td>See <a href="../Custom-symbol-libraries/">custom libraries</a>.</td>
			</tr>
			<tr>
				<th scope="row">Bundled equipment/model libraries and example browser</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td>See <a href="../Bundled-Libraries/">bundled libraries</a> and <a href="../Bundled-Examples/">examples</a>.</td>
			</tr>
			<tr>
				<th scope="row">Import symbols from TinyCAD.net</th>
				<td><div class="feature-detail"><span class="feature-detail-title">Built-in search</span><span class="feature-detail-copy">Search in the web app. Copy and paste also works.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Built-in search</span><span class="feature-detail-copy">Search in the desktop app. Copy and paste also works.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Online search</span><span class="feature-detail-copy">Search on TinyCAD.net, then copy and paste into desktop.</span></div></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Import symbols from KiCAD</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Multi-sheet drawings</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Labels</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Buses</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Shapes and annotations</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Search drawing</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Design Rules Check</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Generate netlist</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Set style across multiple items</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td>Web app supports selecting multiple annotation items and applying shared style and fill.</td>
			</tr>
			<tr>
				<th scope="row">Auto junction placement</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Undo/Redo</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td></td>
			</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Output and integration</th>
			</tr>
			<tr>
				<th scope="row">Printing</th>
				<td><div class="feature-detail"><span class="feature-detail-title">PDF export</span><span class="feature-detail-copy">Print from the browser or any PDF viewer.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Direct printing</span><span class="feature-detail-copy">Uses the operating system printer driver.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Direct printing</span><span class="feature-detail-copy">Uses the operating system printer driver.</span></div></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Export to image</th>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">Vector output for browsers and modern design tools.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">Vector output for browsers and modern design tools.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">PNG</span><span class="feature-detail-copy">Raster export format.</span></div></td>
				<td>Free SVG to PNG converters are available online.</td>
			</tr>
			<tr>
				<th scope="row">Export to PDF</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Partial</span></td>
				<td>Use print to PDF in TinyCAD v3.</td>
			</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Advanced Features</th>
			</tr>
			<tr>
				<th scope="row">Integrated analogue SPICE simulation</th>
				<td><div class="feature-detail"><span><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></span><span class="feature-detail-copy">WebAssembly ngspice</span></div></td>
				<td><div class="feature-detail"><span><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></span><span class="feature-detail-copy">Native ngspice</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td><a href="../Simulation/">Simulation sheets, charts, measurements and exploration</a>.</td>
			</tr>
			<tr>
				<th scope="row">Event-driven XSPICE simulation</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span><sup><a href="#xspice-browser-note">1</a></sup></td>
				<td><div class="feature-detail"><span><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></span><span class="feature-detail-copy">Bundled code models</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Virtual-instrument pop-outs</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">SPICE simulation file output</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">VHDL file output</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td>Desktop app only. See <a href="../VHDL-output/">VHDL output</a>.</td>
			</tr>
			<tr>
				<th scope="row">Multi-file hierarchical drawings</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td></td>
			</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Platform and installation</th>
			</tr>
			<tr>
				<th scope="row">Windows support</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Full</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Native app</span><span class="feature-detail-copy">Desktop install supported on Windows.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Full</span></td>
				<td>Preferred install route on Windows: <a href="https://apps.microsoft.com/detail/9NZQ1M56NM3V">Microsoft Store</a>.</td>
			</tr>
			<tr>
				<th scope="row">Mac support</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Full</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Native app</span><span class="feature-detail-copy">Available from the App Store on macOS.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Partial</span></td>
				<td>TinyCAD v3 relies on Wine compatibility on macOS.</td>
			</tr>
			<tr>
				<th scope="row">Linux support</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Full</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Desktop install</span><span class="feature-detail-copy">Available from the Snap store or via .dep package.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Partial</span></td>
				<td>TinyCAD v3 relies on Wine compatibility on Linux.</td>
			</tr>
			<tr>
				<th scope="row">Chrome OS support</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Yes</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Phone/Tablet support</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Partial</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td>Browser use is possible, but a mouse or pencil is still needed for a smooth workflow.</td>
			</tr>
			<tr>
				<th scope="row">Installation required</th>
				<td><div class="feature-detail"><span class="feature-detail-title">No</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Yes</span><span class="feature-detail-copy">App Stores and installer packages.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Yes</span><span class="feature-detail-copy">Installer package required.</span></div></td>
				<td></td>
			</tr>
		</tbody>
	</table>
</div>

<p id="xspice-browser-note"><sup>1</sup> Browser builds can open drawings containing previously saved XSPICE results for viewing. Running XSPICE requires TinyCAD Desktop.</p>

- Back to [Reference](../Reference/)
- Back to [v4 contents](../CONTENTS/)

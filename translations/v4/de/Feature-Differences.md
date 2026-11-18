---
layout: default
---
# Funktionsunterschiede
{: #feature-differences}

Diese Seite fasst die wichtigsten Unterschiede zwischen TinyCAD im Web und der Desktopversion zusammen.

<div class="comparison-legend" aria-label="Feature status legend">
	<span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Unterstützt</span>
	<span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Teilweise</span>
	<span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nicht verfügbar</span>
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
			<caption>Funktionsvergleich zwischen TinyCAD im Browser, der Desktop-App und TinyCAD v3.</caption>
		<thead>
			<tr>
				<th scope="col">Funktion</th>
				<th scope="col">TinyCAD (Browser)</th>
				<th scope="col">TinyCAD (App)</th>
				<th scope="col">TinyCAD v3</th>
				<th scope="col">Hinweise</th>
				</tr>
		</thead>
		<tbody>
			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Grundlegende Bearbeitung und Bibliotheken</th>
			</tr>
			<tr>
				<th scope="row">KI-gestützte Bearbeitung von Symbolen, Bibliotheken und Schaltplänen</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span></td>
				<td>Nur Desktop-App; der KI-Assistent (Chatbot) ist in der Browser-Version nicht verfügbar. Verbinden Sie über Chat einen KI-Anbieter mithilfe eines API-Schlüssels, eines geeigneten ChatGPT-Kontos oder eines lokalen Ollama. Siehe <a href="../AI-Assistant/">Einrichtung des KI-Assistenten und Prompts</a>.</td>
		</tr>
		<tr>
				<th scope="row">TinyCAD-Dateien <code>.dsn</code> laden/speichern</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td>TinyCAD Web strebt volle Dateiformatkompatibilität mit der Desktopversion an.</td>
		</tr>
		<tr>
				<th scope="row">Komprimierte TinyCAD-Dateien <code>.dzn</code> laden/speichern</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span></td>
				<td>ZIP-basierte Zeichnungsdateien mit Simulationskonfiguration und optionalen Ergebnissen. Siehe <a href="../Simulation/#dzn-simulation-drawings">Simulationsdateien</a>.</td>
		</tr>
		<tr>
				<th scope="row">Markdown-Formatierung in Textfeldern</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span></td>
				<td>Frühere Versionen verwenden einfachen Text. Siehe <a href="../Text/#markdown-text-boxes">Markdown-Textfelder</a>.</td>
		</tr>
		<tr>
				<th scope="row">Unterstützung für Oberflächensprachen</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span></td>
				<td>Siehe <a href="../Language-translation/">Sprachübersetzung</a>.</td>
		</tr>
		<tr>
			<th scope="row">TinyCAD-Bibliotheksdateien <code>.tclib</code> laden/bearbeiten</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td>Siehe <a href="../Custom-symbol-libraries/">Benutzerdefinierte Bibliotheken</a>.</td>
		</tr>
		<tr>
				<th scope="row">Enthaltene Geräte-/Modellbibliotheken und Beispielbrowser</th>
				<td>Ja</td>
				<td>Ja</td>
				<td>Nein</td>
				<td>Siehe <a href="../Bundled-Libraries/">Enthaltene Bibliotheken</a> und <a href="../Bundled-Examples/">Beispiele</a>.</td>
		</tr>
		<tr>
			<th scope="row">Symbole aus TinyCAD.net importieren</th>
				<td><div class="feature-detail"><span class="feature-detail-title">Integrierte Suche</span><span class="feature-detail-copy">Suche in der Web-App. Kopieren und Einfügen ist ebenfalls möglich.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Integrierte Suche</span><span class="feature-detail-copy">Suche in der Desktop-App. Kopieren und Einfügen ist ebenfalls möglich.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Onlinesuche</span><span class="feature-detail-copy">Auf TinyCAD.net suchen und anschließend in die Desktop-App kopieren und einfügen.</span></div></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Symbole aus KiCAD importieren</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">Mehrseitige Zeichnungen</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Beschriftungen</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td></td>
		</tr>
		<tr>
				<th scope="row">Busse</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td></td>
		</tr>
		<tr>
				<th scope="row">Formen und Anmerkungen</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td></td>
		</tr>
		<tr>
				<th scope="row">Suche in der Zeichnung</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td></td>
		</tr>
		<tr>
				<th scope="row">Entwurfsregelprüfung</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td></td>
		</tr>
		<tr>
				<th scope="row">Netzliste erstellen</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td></td>
		</tr>
		<tr>
				<th scope="row">Stil mehrerer Elemente festlegen</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span></td>
				<td>In der Web-App können mehrere Anmerkungselemente ausgewählt und gemeinsame Stile und Füllungen angewendet werden.</td>
			</tr>
			<tr>
				<th scope="row">Automatische Verbindungspunktplatzierung</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td></td>
		</tr>
		<tr>
				<th scope="row">Rückgängig/Wiederholen</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td></td>
		</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Ausgabe und Integration</th>
		</tr>
		<tr>
				<th scope="row">Drucken</th>
				<td><div class="feature-detail"><span class="feature-detail-title">PDF-Export</span><span class="feature-detail-copy">Aus dem Browser oder einem beliebigen PDF-Viewer drucken.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Direktdruck</span><span class="feature-detail-copy">Verwendet den Druckertreiber des Betriebssystems.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Direktdruck</span><span class="feature-detail-copy">Verwendet den Druckertreiber des Betriebssystems.</span></div></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Als Bild exportieren</th>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">Vektorausgabe für Browser und moderne Designtools.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">Vektorausgabe für Browser und moderne Designtools.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">PNG</span><span class="feature-detail-copy">Rasterexportformat.</span></div></td>
				<td>Kostenlose SVG-zu-PNG-Konverter sind online verfügbar.</td>
		</tr>
		<tr>
				<th scope="row">Als PDF exportieren</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Teilweise</span></td>
				<td>In TinyCAD v3 die Funktion „In PDF drucken“ verwenden.</td>
		</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Erweiterte Funktionen</th>
		</tr>
		<tr>
				<th scope="row">Integrierte analoge SPICE-Simulation</th>
				<td><div class="feature-detail"><span><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></span><span class="feature-detail-copy">WebAssembly ngspice</span></div></td>
				<td><div class="feature-detail"><span><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></span><span class="feature-detail-copy">Native ngspice</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span></td>
				<td><a href="../Simulation/">Simulationsblätter, Diagramme, Messungen und Untersuchungen</a>.</td>
		</tr>
		<tr>
				<th scope="row">Ereignisgesteuerte XSPICE-Simulation</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span><sup><a href="#xspice-browser-note">1</a></sup></td>
				<td><div class="feature-detail"><span><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></span><span class="feature-detail-copy">Enthaltene Code-Modelle</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span></td>
				<td></td>
		</tr>
		<tr>
				<th scope="row">Pop-out-Fenster virtueller Messgeräte</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span></td>
				<td></td>
		</tr>
		<tr>
				<th scope="row">SPICE-Simulationsdateiausgabe</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td></td>
		</tr>
		<tr>
				<th scope="row">VHDL-Dateiausgabe</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td>Nur Desktop-App. Siehe <a href="../VHDL-output/">VHDL-Ausgabe</a>.</td>
		</tr>
		<tr>
				<th scope="row">Hierarchische Zeichnungen mit mehreren Dateien</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td></td>
		</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Plattform und Installation</th>
		</tr>
		<tr>
				<th scope="row">Windows-Unterstützung</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Vollständig</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Native App</span><span class="feature-detail-copy">Desktop-Installation unter Windows unterstützt.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Vollständig</span></td>
				<td>Empfohlene Installationsmethode unter Windows: <a href="https://apps.microsoft.com/detail/9NZQ1M56NM3V">Microsoft Store</a>.</td>
		</tr>
		<tr>
				<th scope="row">Mac-Unterstützung</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Vollständig</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Native App</span><span class="feature-detail-copy">Im App Store für macOS verfügbar.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Teilweise</span></td>
				<td>TinyCAD v3 ist unter macOS auf die Kompatibilitätsschicht Wine angewiesen.</td>
		</tr>
		<tr>
				<th scope="row">Linux-Unterstützung</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Vollständig</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Desktop-Installation</span><span class="feature-detail-copy">Über den Snap Store oder als .dep-Paket verfügbar.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Teilweise</span></td>
				<td>TinyCAD v3 ist unter Linux auf die Kompatibilitätsschicht Wine angewiesen.</td>
		</tr>
		<tr>
				<th scope="row">Chrome-OS-Unterstützung</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span></td>
				<td></td>
		</tr>
		<tr>
				<th scope="row">Unterstützung für Smartphones/Tablets</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Teilweise</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span></td>
				<td>Die Nutzung im Browser ist möglich, für einen reibungslosen Arbeitsablauf wird jedoch weiterhin eine Maus oder ein Stift benötigt.</td>
		</tr>
		<tr>
				<th scope="row">Installation erforderlich</th>
				<td><div class="feature-detail"><span class="feature-detail-title">Nein</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Ja</span><span class="feature-detail-copy">App Stores und Installationspakete.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Ja</span><span class="feature-detail-copy">Installationspaket erforderlich.</span></div></td>
				<td></td>
		</tr>
		</tbody>
	</table>
</div>

<p id="xspice-browser-note"><sup>1</sup> Browser-Versionen können Zeichnungen öffnen, die zuvor gespeicherte XSPICE-Ergebnisse enthalten, um diese anzuzeigen. Zum Ausführen von XSPICE ist TinyCAD Desktop erforderlich.</p>

- Zurück zu [Referenz](../Reference/)
- Zurück zu [Inhalt von v4](../CONTENTS/)

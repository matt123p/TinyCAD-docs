---
layout: default
---
# Funktionsunterschiede
{: #feature-differences}

Diese Seite fasst die wichtigsten Unterschiede zwischen TinyCAD Web und der Desktopversion zusammen.

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
				<th scope="rowgroup" colspan="5">Bearbeitung und Bibliotheken</th>
			</tr>
			<tr>
				<th scope="row">Laden/Speichern von TinyCAD-<code>.dsn</code>-Dateien</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td>TinyCAD Web strebt vollständige Dateiformatkompatibilität mit der Desktopversion an.</td>
			</tr>
			<tr>
				<th scope="row">Laden/Speichern komprimierter TinyCAD-<code>.dzn</code>-Dateien</th>
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
				<th scope="row">Laden/Bearbeiten von TinyCAD-Bibliotheksdateien <code>.tclib</code></th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td>Siehe <a href="../Custom-symbol-libraries/">benutzerdefinierte Bibliotheken</a>.</td>
			</tr>
			<tr>
				<th scope="row">Enthaltene Geräte-/Modellbibliotheken und Beispielbrowser</th>
				<td>Ja</td>
				<td>Ja</td>
				<td>Nein</td>
				<td>Siehe <a href="../Bundled-Libraries/">enthaltene Bibliotheken</a> und <a href="../Bundled-Examples/">Beispiele</a>.</td>
			</tr>
			<tr>
				<th scope="row">Symbole aus TinyCAD.net importieren</th>
				<td><div class="feature-detail"><span class="feature-detail-title">Integrierte Suche</span><span class="feature-detail-copy">Suche in der Web-App. Kopieren und Einfügen funktioniert ebenfalls.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Integrierte Suche</span><span class="feature-detail-copy">Suche in der Desktop-App. Kopieren und Einfügen funktioniert ebenfalls.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Onlinesuche</span><span class="feature-detail-copy">Suche auf TinyCAD.net und kopiere die Symbole anschließend in die Desktopversion.</span></div></td>
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
				<th scope="row">Zeichnung durchsuchen</th>
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
				<th scope="row">Netzliste erzeugen</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Stil für mehrere Elemente festlegen</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span></td>
				<td>Die Web-App unterstützt die Mehrfachauswahl von Anmerkungselementen und die Anwendung gemeinsamer Stile und Füllungen.</td>
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
				<td><div class="feature-detail"><span class="feature-detail-title">PDF-Export</span><span class="feature-detail-copy">Drucken im Browser oder in einem beliebigen PDF-Viewer.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Direktdruck</span><span class="feature-detail-copy">Verwendet den Druckertreiber des Betriebssystems.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Direktdruck</span><span class="feature-detail-copy">Verwendet den Druckertreiber des Betriebssystems.</span></div></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Als Bild exportieren</th>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">Vektorausgabe für Browser und moderne Designwerkzeuge.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">Vektorausgabe für Browser und moderne Designwerkzeuge.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">PNG</span><span class="feature-detail-copy">Rasterexportformat.</span></div></td>
				<td>Kostenlose SVG-zu-PNG-Konverter sind online verfügbar.</td>
			</tr>
			<tr>
				<th scope="row">Als PDF exportieren</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Teilweise</span></td>
				<td>In TinyCAD v3 über „Als PDF drucken“ ausgeben.</td>
		</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Erweiterte Funktionen</th>
			</tr>
			<tr>
				<th scope="row">Integrierte analoge SPICE-Simulation</th>
				<td><div class="feature-detail"><span><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></span><span class="feature-detail-copy">WebAssembly ngspice</span></div></td>
				<td><div class="feature-detail"><span><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></span><span class="feature-detail-copy">Native ngspice</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span></td>
				<td><a href="../Simulation/">Simulationsblätter, Diagramme, Messungen und Analyse</a>.</td>
			</tr>
			<tr>
				<th scope="row">Ereignisgesteuerte XSPICE-Simulation</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span><sup><a href="#xspice-browser-note">1</a></sup></td>
				<td><div class="feature-detail"><span><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></span><span class="feature-detail-copy">Enthaltene Code-Modelle</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Pop-out-Fenster für virtuelle Instrumente</th>
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
				<td>Nur in der Desktop-App. Siehe <a href="../VHDL-output/">VHDL-Ausgabe</a>.</td>
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
				<td><div class="feature-detail"><span class="feature-detail-title">Native App</span><span class="feature-detail-copy">Desktopinstallation unter Windows unterstützt.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Vollständig</span></td>
				<td>Bevorzugte Installationsmethode unter Windows: <a href="https://apps.microsoft.com/detail/9NZQ1M56NM3V">Microsoft Store</a>.</td>
			</tr>
			<tr>
				<th scope="row">Mac-Unterstützung</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Vollständig</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Native App</span><span class="feature-detail-copy">Unter macOS im App Store verfügbar.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Teilweise</span></td>
				<td>TinyCAD v3 benötigt unter macOS die Kompatibilitätsschicht Wine.</td>
			</tr>
			<tr>
				<th scope="row">Linux-Unterstützung</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Vollständig</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Desktopinstallation</span><span class="feature-detail-copy">Verfügbar im Snap Store oder als .dep-Paket.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Teilweise</span></td>
				<td>TinyCAD v3 benötigt unter Linux die Kompatibilitätsschicht Wine.</td>
			</tr>
			<tr>
				<th scope="row">Chrome-OS-Unterstützung</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Ja</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Unterstützung für Smartphone/Tablet</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Teilweise</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nein</span></td>
				<td>Die Nutzung im Browser ist möglich, für einen reibungslosen Arbeitsablauf sind jedoch weiterhin eine Maus oder ein Stift erforderlich.</td>
			</tr>
			<tr>
				<th scope="row">Installation erforderlich</th>
				<td><div class="feature-detail"><span class="feature-detail-title">Nein</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Ja</span><span class="feature-detail-copy">App-Stores und Installationspakete.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Ja</span><span class="feature-detail-copy">Installationspaket erforderlich.</span></div></td>
				<td></td>
			</tr>
		</tbody>
	</table>
</div>

<p id="xspice-browser-note"><sup>1</sup> Browser-Versionen können Zeichnungen mit zuvor gespeicherten XSPICE-Ergebnissen zur Ansicht öffnen. Zum Ausführen von XSPICE ist TinyCAD Desktop erforderlich.</p>

- Zurück zu [Referenz](../Reference/)
- Zurück zu [Inhalt von v4](../CONTENTS/)

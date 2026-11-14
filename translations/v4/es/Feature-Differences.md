---
layout: default
---
# Diferencias de funciones
{: #feature-differences}

Esta página resume las principales diferencias entre TinyCAD web y la versión de escritorio.

<div class="comparison-legend" aria-label="Feature status legend">
	<span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Compatible</span>
	<span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Parcial</span>
	<span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No disponible</span>
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
			<caption>Comparación de funciones entre TinyCAD en el navegador, la aplicación de escritorio y TinyCAD v3.</caption>
		<thead>
			<tr>
				<th scope="col">Función</th>
				<th scope="col">TinyCAD (navegador)</th>
				<th scope="col">TinyCAD (aplicación)</th>
				<th scope="col">TinyCAD v3</th>
				<th scope="col">Notas</th>
				</tr>
		</thead>
		<tbody>
			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Edición principal y bibliotecas</th>
			</tr>
			<tr>
				<th scope="row">Cargar/guardar archivos <code>.dsn</code> de TinyCAD</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td>TinyCAD web aspira a ofrecer compatibilidad completa de formato de archivo con la versión de escritorio.</td>
			</tr>
		<tr>
				<th scope="row">Cargar/guardar archivos <code>.dzn</code> comprimidos</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td>Archivos de dibujo basados en ZIP que contienen la configuración de simulación y resultados opcionales. Consulte <a href="../Simulation/#dzn-simulation-drawings">archivos de simulación</a>.</td>
		</tr>
			<tr>
				<th scope="row">Formato Markdown en cuadros de texto</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td>Las versiones anteriores usan texto sin formato. Consulte <a href="../Text/#markdown-text-boxes">cuadros de texto Markdown</a>.</td>
		</tr>
			<tr>
				<th scope="row">Compatibilidad con idiomas de interfaz</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td>Consulte <a href="../Language-translation/">Traducción de idiomas</a>.</td>
		</tr>
			<tr>
				<th scope="row">Cargar/editar archivos de biblioteca de TinyCAD <code>.tclib</code></th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td>Consulte <a href="../Custom-symbol-libraries/">bibliotecas personalizadas</a>.</td>
		</tr>
			<tr>
				<th scope="row">Bibliotecas integradas de equipos/modelos y navegador de ejemplos</th>
				<td>Sí</td>
				<td>Sí</td>
				<td>No</td>
				<td>Consulte <a href="../Bundled-Libraries/">bibliotecas incluidas</a> y <a href="../Bundled-Examples/">ejemplos</a>.</td>
		</tr>
			<tr>
				<th scope="row">Importar símbolos de TinyCAD.net</th>
				<td><div class="feature-detail"><span class="feature-detail-title">Búsqueda integrada</span><span class="feature-detail-copy">Busque en la aplicación web. También se puede copiar y pegar.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Búsqueda integrada</span><span class="feature-detail-copy">Busque en la aplicación de escritorio. También se puede copiar y pegar.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Búsqueda en línea</span><span class="feature-detail-copy">Busque en TinyCAD.net y, a continuación, copie y pegue en la aplicación de escritorio.</span></div></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Importar símbolos de KiCAD</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Esquemas de varias hojas</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Etiquetas</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">Buses</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">Formas y anotaciones</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">Buscar en el esquema</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">Comprobación de reglas de diseño</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">Generar lista de conexiones</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">Aplicar estilo a varios elementos</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td>La aplicación web permite seleccionar varios elementos de anotación y aplicarles un estilo y un relleno compartidos.</td>
		</tr>
			<tr>
				<th scope="row">Colocación automática de uniones</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">Deshacer/rehacer</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td></td>
		</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Salida e integración</th>
		</tr>
			<tr>
				<th scope="row">Impresión</th>
				<td><div class="feature-detail"><span class="feature-detail-title">Exportación a PDF</span><span class="feature-detail-copy">Imprima desde el navegador o desde cualquier visor de PDF.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Impresión directa</span><span class="feature-detail-copy">Usa el controlador de impresora del sistema operativo.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Impresión directa</span><span class="feature-detail-copy">Usa el controlador de impresora del sistema operativo.</span></div></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">Exportar como imagen</th>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">Salida vectorial para navegadores y herramientas de diseño modernas.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">Salida vectorial para navegadores y herramientas de diseño modernas.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">PNG</span><span class="feature-detail-copy">Formato de exportación de mapa de bits.</span></div></td>
				<td>Hay convertidores gratuitos de SVG a PNG disponibles en línea.</td>
		</tr>
			<tr>
				<th scope="row">Exportar a PDF</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Parcial</span></td>
				<td>Use la opción Imprimir a PDF en TinyCAD v3.</td>
		</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Funciones avanzadas</th>
		</tr>
			<tr>
				<th scope="row">Simulación analógica SPICE integrada</th>
				<td><div class="feature-detail"><span><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></span><span class="feature-detail-copy">ngspice de WebAssembly</span></div></td>
				<td><div class="feature-detail"><span><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></span><span class="feature-detail-copy">ngspice nativo</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td><a href="../Simulation/">Hojas de simulación, gráficos, mediciones y exploración</a>.</td>
		</tr>
			<tr>
				<th scope="row">Simulación XSPICE basada en eventos</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span><sup><a href="#xspice-browser-note">1</a></sup></td>
				<td><div class="feature-detail"><span><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></span><span class="feature-detail-copy">Modelos de código incluidos</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">Ventanas emergentes de instrumentos virtuales</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">Salida de archivos de simulación SPICE</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">Salida de archivos VHDL</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td>Solo en la aplicación de escritorio. Consulte <a href="../VHDL-output/">salida VHDL</a>.</td>
		</tr>
			<tr>
				<th scope="row">Esquemas jerárquicos con varios archivos</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td></td>
		</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Plataforma e instalación</th>
		</tr>
			<tr>
				<th scope="row">Compatibilidad con Windows</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Completa</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Aplicación nativa</span><span class="feature-detail-copy">La instalación de escritorio es compatible con Windows.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Completa</span></td>
				<td>Método de instalación recomendado en Windows: <a href="https://apps.microsoft.com/detail/9NZQ1M56NM3V">Microsoft Store</a>.</td>
		</tr>
			<tr>
				<th scope="row">Compatibilidad con Mac</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Completa</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Aplicación nativa</span><span class="feature-detail-copy">Disponible en App Store para macOS.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Parcial</span></td>
				<td>TinyCAD v3 depende de la compatibilidad de Wine en macOS.</td>
		</tr>
			<tr>
				<th scope="row">Compatibilidad con Linux</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Completa</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Instalación de escritorio</span><span class="feature-detail-copy">Disponible en Snap Store o mediante un paquete .dep.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Parcial</span></td>
				<td>TinyCAD v3 depende de la compatibilidad de Wine en Linux.</td>
		</tr>
			<tr>
				<th scope="row">Compatibilidad con Chrome OS </th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">Compatibilidad con teléfonos/tabletas</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Parcial</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td>Se puede usar el navegador, pero para un flujo de trabajo fluido sigue siendo necesario un ratón o un lápiz óptico.</td>
		</tr>
			<tr>
				<th scope="row">Requiere instalación</th>
				<td><div class="feature-detail"><span class="feature-detail-title">No</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Sí</span><span class="feature-detail-copy">Tiendas de aplicaciones y paquetes de instalación.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Sí</span><span class="feature-detail-copy">Se requiere un paquete de instalación.</span></div></td>
				<td></td>
		</tr>
		</tbody>
	</table>
</div>

<p id="xspice-browser-note"><sup>1</sup> Las versiones de navegador pueden abrir dibujos con resultados XSPICE guardados previamente para visualizarlos. Para ejecutar XSPICE se requiere TinyCAD Desktop.</p>

- Volver a [Referencia](../Reference/)
- Volver a [contenido de v4](../CONTENTS/)

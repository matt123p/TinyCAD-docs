---
layout: default
---
# Diferencias entre funciones
{: #feature-differences}

Esta página resume las diferencias clave entre TinyCAD web y la versión de escritorio.

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
				<th scope="rowgroup" colspan="5">Edición básica y bibliotecas</th>
			</tr>
			<tr>
				<th scope="row">Cargar/Guardar archivos <code>.dsn</code> </th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td>TinyCAD web busca ofrecer compatibilidad total de formato de archivo con la versión de escritorio.</td>
			</tr>
			<tr>
				<th scope="row">Compatibilidad con idiomas de la interfaz</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td>Consulta <a href="../Language-translation/">Traducción del idioma</a>.</td>
			</tr>
			<tr>
				<th scope="row">Cargar/editar archivos de biblioteca de TinyCAD <code>.tclib</code></th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td>Consulta las <a href="../Custom-symbol-libraries/">bibliotecas personalizadas</a>.</td>
			</tr>
			<tr>
				<th scope="row">Importar símbolos de TinyCAD.net</th>
				<td><div class="feature-detail"><span class="feature-detail-title">Búsqueda integrada</span><span class="feature-detail-copy">Busca en la aplicación web. También puedes copiar y pegar.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Búsqueda integrada</span><span class="feature-detail-copy">Busca en la aplicación de escritorio. También puedes copiar y pegar.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Búsqueda en línea</span><span class="feature-detail-copy">Busca en TinyCAD.net y luego copia y pega en la aplicación de escritorio.</span></div></td>
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
				<th scope="row">Buscar dibujo</th>
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
				<th scope="row">Generar lista de conexiones (netlist)</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Establecer el estilo de varios elementos</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td>La aplicación web permite seleccionar varios elementos de anotación y aplicarles un estilo y un relleno comunes.</td>
			</tr>
			<tr>
				<th scope="row">Colocación automática de uniones</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Deshacer/Rehacer</th>
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
				<td><div class="feature-detail"><span class="feature-detail-title">Exportación a PDF</span><span class="feature-detail-copy">Imprima desde el navegador o cualquier visor de PDF.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Impresión directa</span><span class="feature-detail-copy">Utiliza el controlador de impresora del sistema operativo.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Impresión directa</span><span class="feature-detail-copy">Utiliza el controlador de impresora del sistema operativo.</span></div></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Exportar a imagen</th>
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
				<td>Usa la función Imprimir a PDF de TinyCAD v3.</td>
			</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Funciones avanzadas</th>
			</tr>
			<tr>
				<th scope="row">Salida de archivo de simulación SPICE</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Salida de archivo VHDL</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td>Solo para la aplicación de escritorio. Consulta <a href="../VHDL-output/">salida VHDL</a>.</td>
			</tr>
			<tr>
				<th scope="row">Dibujos jerárquicos de varios archivos</th>
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
				<td>Ruta de instalación recomendada en Windows: <a href="https://apps.microsoft.com/detail/9NZQ1M56NM3V">Microsoft Store</a>.</td>
			</tr>
			<tr>
				<th scope="row">Compatibilidad con Mac</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Completa</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Aplicación nativa</span><span class="feature-detail-copy">Disponible en el App Store para macOS.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Parcial</span></td>
				<td>TinyCAD v3 depende de la compatibilidad con Wine en macOS.</td>
			</tr>
			<tr>
				<th scope="row">Compatibilidad con Linux</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Completa</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Instalación de escritorio</span><span class="feature-detail-copy">Disponible en la tienda Snap o mediante el paquete .dep.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Parcial</span></td>
				<td>TinyCAD v3 depende de la compatibilidad con Wine en Linux.</td>
			</tr>
			<tr>
				<th scope="row">Compatibilidad con Chrome OS </th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Sí</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Compatibilidad con teléfonos y tabletas</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Parcial</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td>Es posible usarlo en el navegador, pero aún se necesita un ratón o un lápiz óptico para trabajar con fluidez.</td>
			</tr>
			<tr>
				<th scope="row">Se requiere instalación</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> No</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Sí</span><span class="feature-detail-copy">Tiendas de aplicaciones y paquetes de instalación.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Sí</span><span class="feature-detail-copy">Se requiere un paquete de instalación.</span></div></td>
				<td></td>
			</tr>
		</tbody>
	</table>
</div>

- Volver a [Referencia](../Reference/)
- Volver al [contenido de v4](../CONTENTS/)

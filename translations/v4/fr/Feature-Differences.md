---
layout: default
---
# Différences entre les fonctionnalités
{: #feature-differences}

Cette page résume les principales différences entre TinyCAD web et la version de bureau.

<div class="comparison-legend" aria-label="Feature status legend">
	<span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Pris en charge</span>
	<span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Partiel</span>
	<span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Non disponible</span>
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
			<caption>Comparaison des fonctionnalités de TinyCAD dans le navigateur, de l’application de bureau et de TinyCAD v3.</caption>
		<thead>
			<tr>
				<th scope="col">Fonctionnalité</th>
				<th scope="col">TinyCAD (navigateur)</th>
				<th scope="col">TinyCAD (application)</th>
				<th scope="col">TinyCAD v3</th>
				<th scope="col">Remarques</th>
				</tr>
		</thead>
		<tbody>
			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Édition et bibliothèques principales</th>
			</tr>
			<tr>
				<th scope="row">Charger/enregistrer les fichiers <code>.dsn</code> TinyCAD</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td>TinyCAD web vise une compatibilité totale des formats de fichiers avec la version de bureau.</td>
		</tr>
		<tr>
			<th scope="row">Charger/enregistrer les fichiers compressés <code>.dzn</code> TinyCAD</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Non</span></td>
				<td>Fichiers de schéma basés sur ZIP, contenant la configuration de simulation et éventuellement les résultats. Voir les <a href="../Simulation/#dzn-simulation-drawings">fichiers de simulation</a>.</td>
		</tr>
			<tr>
				<th scope="row">Mise en forme Markdown dans les zones de texte</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Non</span></td>
				<td>Les versions antérieures utilisent du texte brut. Voir les <a href="../Text/#markdown-text-boxes">zones de texte Markdown</a>.</td>
		</tr>
			<tr>
				<th scope="row">Prise en charge des langues de l’interface</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Non</span></td>
				<td>Voir <a href="../Language-translation/">Traduction de l’interface</a>.</td>
		</tr>
			<tr>
				<th scope="row">Charger/modifier les fichiers de bibliothèque TinyCAD <code>.tclib</code></th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td>Voir les <a href="../Custom-symbol-libraries/">bibliothèques personnalisées</a>.</td>
		</tr>
		<tr>
			<th scope="row">Bibliothèques d’équipements/modèles et navigateur d’exemples intégrés</th>
				<td>Oui</td>
				<td>Oui</td>
				<td>Non</td>
				<td>Voir les <a href="../Bundled-Libraries/">bibliothèques intégrées</a> et les <a href="../Bundled-Examples/">exemples</a>.</td>
		</tr>
		<tr>
			<th scope="row">Importer des symboles depuis TinyCAD.net</th>
				<td><div class="feature-detail"><span class="feature-detail-title">Recherche intégrée</span><span class="feature-detail-copy">Recherchez dans l’application web. Le copier-coller fonctionne également.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Recherche intégrée</span><span class="feature-detail-copy">Recherchez dans l’application de bureau. Le copier-coller fonctionne également.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Recherche en ligne</span><span class="feature-detail-copy">Effectuez une recherche sur TinyCAD.net, puis copiez-collez le résultat dans la version de bureau.</span></div></td>
				<td></td>
		</tr>
		<tr>
			<th scope="row">Importer des symboles depuis KiCAD</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Non</span></td>
				<td></td>
		</tr>
		<tr>
			<th scope="row">Schémas à plusieurs feuilles</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td></td>
		</tr>
		<tr>
			<th scope="row">Étiquettes</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td></td>
		</tr>
		<tr>
			<th scope="row">Bus</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td></td>
		</tr>
		<tr>
			<th scope="row">Formes et annotations</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td></td>
		</tr>
		<tr>
			<th scope="row">Rechercher dans le schéma</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td></td>
		</tr>
		<tr>
			<th scope="row">Vérification des règles de conception (Design Rules Check)</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td></td>
		</tr>
		<tr>
			<th scope="row">Générer une netlist</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td></td>
		</tr>
		<tr>
			<th scope="row">Définir le style de plusieurs éléments</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Non</span></td>
				<td>L’application web permet de sélectionner plusieurs éléments d’annotation et de leur appliquer un style et un remplissage communs.</td>
		</tr>
		<tr>
			<th scope="row">Placement automatique des jonctions</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td></td>
		</tr>
		<tr>
			<th scope="row">Annuler/Rétablir</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td></td>
		</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Sortie et intégration</th>
		</tr>
		<tr>
			<th scope="row">Impression</th>
				<td><div class="feature-detail"><span class="feature-detail-title">Export PDF</span><span class="feature-detail-copy">Imprimez depuis le navigateur ou depuis n’importe quel lecteur PDF.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Direct printing</span><span class="feature-detail-copy">Utilise le pilote d’imprimante du système d’exploitation.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Direct printing</span><span class="feature-detail-copy">Utilise le pilote d’imprimante du système d’exploitation.</span></div></td>
				<td></td>
		</tr>
		<tr>
			<th scope="row">Exporter en image</th>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">Format vectoriel pour les navigateurs et les outils de conception modernes.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">Format vectoriel pour les navigateurs et les outils de conception modernes.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">PNG</span><span class="feature-detail-copy">Format d’exportation matriciel.</span></div></td>
				<td>Des convertisseurs SVG vers PNG gratuits sont disponibles en ligne.</td>
		</tr>
		<tr>
			<th scope="row">Exporter en PDF</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Partiel</span></td>
				<td>Utilisez l’impression en PDF dans TinyCAD v3.</td>
		</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Fonctionnalités avancées</th>
		</tr>
		<tr>
				<th scope="row">Simulation analogique SPICE intégrée</th>
				<td><div class="feature-detail"><span><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></span><span class="feature-detail-copy">ngspice WebAssembly</span></div></td>
				<td><div class="feature-detail"><span><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></span><span class="feature-detail-copy">ngspice natif</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Non</span></td>
				<td><a href="../Simulation/">Feuilles de simulation, graphiques, mesures et exploration</a>.</td>
		</tr>
		<tr>
			<th scope="row">Simulation XSPICE pilotée par événements</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Non</span><sup><a href="#xspice-browser-note">1</a></sup></td>
				<td><div class="feature-detail"><span><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></span><span class="feature-detail-copy">Modèles de code intégrés</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Non</span></td>
				<td></td>
		</tr>
		<tr>
			<th scope="row">Fenêtres détachées des instruments virtuels</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Non</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Non</span></td>
				<td></td>
		</tr>
		<tr>
			<th scope="row">Sortie de fichiers de simulation SPICE</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td></td>
		</tr>
		<tr>
			<th scope="row">Sortie de fichiers VHDL</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Non</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td>Application de bureau uniquement. Voir la <a href="../VHDL-output/">sortie VHDL</a>.</td>
		</tr>
		<tr>
			<th scope="row">Schémas hiérarchiques à plusieurs fichiers</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Non</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Non</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td></td>
		</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Plateformes et installation</th>
		</tr>
		<tr>
			<th scope="row">Prise en charge de Windows</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Complète</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Application native</span><span class="feature-detail-copy">Installation de bureau prise en charge sous Windows.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Complète</span></td>
				<td>Méthode d’installation recommandée sous Windows : <a href="https://apps.microsoft.com/detail/9NZQ1M56NM3V">Microsoft Store</a>.</td>
		</tr>
		<tr>
			<th scope="row">Prise en charge de Mac</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Complète</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Application native</span><span class="feature-detail-copy">Disponible sur l’App Store pour macOS.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Partielle</span></td>
				<td>TinyCAD v3 s’appuie sur la compatibilité Wine sous macOS.</td>
		</tr>
		<tr>
			<th scope="row">Prise en charge de Linux</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Complète</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Installation de bureau</span><span class="feature-detail-copy">Disponible depuis le Snap Store ou via un paquet .dep.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Partielle</span></td>
				<td>TinyCAD v3 s’appuie sur la compatibilité Wine sous Linux.</td>
		</tr>
		<tr>
			<th scope="row">Prise en charge de Chrome OS</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Non</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Non</span></td>
				<td></td>
		</tr>
		<tr>
			<th scope="row">Prise en charge des téléphones/tablettes</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Partielle</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Non</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Non</span></td>
				<td>L’utilisation dans un navigateur est possible, mais une souris ou un stylet reste nécessaire pour travailler confortablement.</td>
		</tr>
		<tr>
			<th scope="row">Installation requise</th>
				<td><div class="feature-detail"><span class="feature-detail-title">Non</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Oui</span><span class="feature-detail-copy">Boutiques d’applications et paquets d’installation.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Oui</span><span class="feature-detail-copy">Paquet d’installation requis.</span></div></td>
				<td></td>
		</tr>
		</tbody>
	</table>
</div>

<p id="xspice-browser-note"><sup>1</sup> Les versions navigateur peuvent ouvrir des schémas contenant des résultats XSPICE enregistrés précédemment pour les consulter. L’exécution de simulations XSPICE nécessite TinyCAD Desktop.</p>

- Retour à [Référence](../Reference/)
- Retour à [sommaire de v4](../CONTENTS/)

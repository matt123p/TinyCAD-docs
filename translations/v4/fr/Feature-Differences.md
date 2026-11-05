---
layout: default
---
# Différences fonctionnelles
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
			<caption>Comparaison des fonctionnalités entre TinyCAD dans le navigateur, l’application de bureau et TinyCAD v3.</caption>
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
				<th scope="rowgroup" colspan="5">Édition et bibliothèques de base</th>
			</tr>
			<tr>
				<th scope="row">Charger/enregistrer des fichiers <code>.dsn</code> TinyCAD</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td>TinyCAD web vise une compatibilité complète du format de fichier avec la version de bureau.</td>
			</tr>
			<tr>
				<th scope="row">Prise en charge des langues de l’interface</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Non</span></td>
				<td>Voir <a href="../Language-translation/">Traduction de l’interface</a>.</td>
			</tr>
			<tr>
				<th scope="row">Charger/modifier des fichiers <code>.tclib</code> de bibliothèque TinyCAD</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td>Voir <a href="../Custom-symbol-libraries/">les bibliothèques personnalisées</a>.</td>
			</tr>
			<tr>
				<th scope="row">Importer des symboles depuis TinyCAD.net</th>
				<td><div class="feature-detail"><span class="feature-detail-title">Recherche intégrée</span><span class="feature-detail-copy">Effectuez une recherche dans l’application web. Le copier-coller fonctionne également.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Recherche intégrée</span><span class="feature-detail-copy">Effectuez une recherche dans l’application de bureau. Le copier-coller fonctionne également.</span></div></td>
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
				<th scope="row">Rechercher dans le dessin</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Vérification des règles de conception</th>
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
				<td><div class="feature-detail"><span class="feature-detail-title">Export PDF</span><span class="feature-detail-copy">Imprimez depuis le navigateur ou un lecteur PDF.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Direct printing</span><span class="feature-detail-copy">Utilise le pilote d’imprimante du système d’exploitation.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Direct printing</span><span class="feature-detail-copy">Utilise le pilote d’imprimante du système d’exploitation.</span></div></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Exporter en image</th>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">Sortie vectorielle pour les navigateurs et les outils de conception modernes.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">Sortie vectorielle pour les navigateurs et les outils de conception modernes.</span></div></td>
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
				<th scope="row">Sortie de fichier de simulation SPICE</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Sortie de fichier VHDL</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Non</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Oui</span></td>
				<td>Disponible uniquement dans l’application de bureau. Voir <a href="../VHDL-output/">Sortie VHDL</a>.</td>
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
				<td><div class="feature-detail"><span class="feature-detail-title">Application native</span><span class="feature-detail-copy">Installation de la version de bureau prise en charge sous Windows.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Complète</span></td>
				<td>Méthode d’installation recommandée sous Windows : <a href="https://apps.microsoft.com/detail/9NZQ1M56NM3V">Microsoft Store</a>.</td>
			</tr>
			<tr>
				<th scope="row">Prise en charge de Mac</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Complète</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Application native</span><span class="feature-detail-copy">Disponible dans l’App Store sur macOS.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Partielle</span></td>
				<td>TinyCAD v3 dépend de la compatibilité assurée par Wine sur macOS.</td>
			</tr>
			<tr>
				<th scope="row">Prise en charge de Linux</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Complète</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Installation de bureau</span><span class="feature-detail-copy">Disponible dans la boutique Snap ou via un paquet .dep.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Partielle</span></td>
				<td>TinyCAD v3 dépend de la compatibilité assurée par Wine sur Linux.</td>
			</tr>
			<tr>
				<th scope="row">Prise en charge de Chrome OS </th>
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
				<td>L’utilisation dans un navigateur est possible, mais une souris ou un stylet reste nécessaire pour un flux de travail fluide.</td>
			</tr>
			<tr>
				<th scope="row">Installation requise</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Non</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Oui</span><span class="feature-detail-copy">Boutiques d’applications et paquets d’installation.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Oui</span><span class="feature-detail-copy">Paquet d’installation requis.</span></div></td>
				<td></td>
			</tr>
		</tbody>
	</table>
</div>

- Retour à [Référence](../Reference/)
- Retour au [contenu de v4](../CONTENTS/)

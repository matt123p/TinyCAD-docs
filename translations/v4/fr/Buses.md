---
layout: default
---
# Bus
{: #buses}

Un bus est un outil de dessin de schéma qui permet de représenter des groupes de signaux apparentés. Les bus améliorent la lisibilité, en particulier lorsque de nombreux fils similaires cheminent ensemble.

Dans TinyCAD, la connectivité électrique réelle est toujours assurée par les **fils et les étiquettes de réseau**. Un bus, à lui seul, ne relie pas électriquement les signaux.

## Exemple de dessin
{: #example-drawing}

<img src="/v4/images/Image 1.svg" alt="A example of using Buses" />

<p>
	<a href="/v4/examples/Bus%20Example.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Télécharger
	</a>
</p>


## Procédure d’utilisation des bus
{: #bus-workflow}

1. Tracez la ligne de bus à l’endroit où doivent cheminer les signaux regroupés.
2. Placez des entrées de bus aux endroits où les signaux individuels se ramifient.
3. Tracez des fils entre chaque entrée de bus et les broches des symboles ou les points de connexion.
4. Placez des étiquettes sur ces fils (par exemple `D0`, `D1`, `D2`...).
5. Répétez les étiquettes et les fils sur le bus de destination en utilisant les mêmes noms.

Lorsque les étiquettes correspondent, ces réseaux sont connectés.

## Objets de bus dans TinyCAD
{: #bus-objects-in-tinycad}

- **Bus** : chemin principal regroupant les signaux ; utile pour organiser de nombreuses connexions.
- **Entrée de bus (Bus Entry)** : liaison visuelle entre le bus et un fil unique, vers l’intérieur ou l’extérieur.
- **Nom du bus (Bus Name)** : texte affiché sur un bus (par exemple `Data Bus` ou le nombre de conducteurs).

Les noms de bus indiquent l’intention aux utilisateurs ; les étiquettes placées sur les fils définissent l’identité des réseaux électriques pour les outils.

## Conseils pour les noms et les répétitions
{: #naming-and-repeat-tips}

- Veillez à ce que les étiquettes des signaux du bus soient cohérentes d’un bout à l’autre (`A0..A15`, `D0..D7`, etc.).
- Utilisez les options de répétition pour accélérer le placement des entrées et la numérotation séquentielle des étiquettes.
- L’ordre des noms de signaux peut différer à chaque extrémité, à condition que les noms correspondent.

## Jonctions
{: #junctions}

Les bus ne nécessitent pas de points de jonction sur leur ligne.

## Bus et schémas à plusieurs feuilles
{: #buses-and-multi-sheet-drawings}

Sur plusieurs feuilles, réutilisez les mêmes étiquettes de signal pour connecter les réseaux correspondants.
Les graphiques et les noms des bus améliorent la lisibilité, tandis que les noms des étiquettes définissent la connectivité pour la génération de la netlist et le DRC.

- Retour à [Dessin](../User-guide/)
- Retour à [Contenu de v4](../CONTENTS/)

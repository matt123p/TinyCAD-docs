---
layout: default
---
# Texte et annotations
{: #text--annotations}

Les outils de texte et d’annotation servent à documenter le schéma et à en améliorer la lisibilité.

Ces objets ne sont **pas électriques** et sont ignorés lors de la génération de la netlist et des vérifications des règles de conception.

## Texte et étiquettes
{: #text-vs-labels}

- Utilisez **Texte** pour les notes, les légendes, les titres et les instructions de fabrication.
- Utilisez les **étiquettes** pour les noms de nets actifs sur le plan électrique.

Si vous utilisez du texte à la place d’une étiquette, le net ne sera pas connecté.

## Qu’est-ce que Markdown ?
{: #what-is-markdown}

Markdown permet de mettre en forme du texte brut à l’aide de marqueurs simples saisis au clavier. TinyCAD lit ces marqueurs et affiche des titres, du texte en gras et des listes.

| Ce que vous saisissez | Signification |
|---|---|
| `# Power supply` | Un titre |
| `**Check polarity**` | Texte en gras |
| `*Optional*` | Texte en italique |
| `- R1: 10 kΩ` | Un élément de liste à puces |
| `` `R1` `` | Code en ligne |

Ajoutez une espace après `#` ou `-` en début de ligne. Laissez une ligne vide entre les paragraphes.

Pour plusieurs lignes de code, placez `~~~` sur une ligne distincte avant et après le code. L’exemple complet de note ci-dessous illustre cette écriture.

## Zones de texte Markdown
{: #markdown-text-boxes}

Les zones de texte Markdown sont disponibles dans [TinyCAD v4.0.11](../Changelog/#v4011).

1. Choisissez Texte (Text, ou appuyez sur T), puis faites glisser pour tracer une zone sur le dessin.
2. Cliquez dans la zone et saisissez du Markdown. La mise en forme apparaît pendant la saisie.
3. Cliquez ailleurs pour afficher la note mise en forme sans les marqueurs Markdown. Agrandissez la zone si le contenu est tronqué.

![Note Markdown rendue en SVG avec titre, liste de composants, liste de tâches et bloc de code.](../images/markdown-preview.png)

### Source Markdown modifiable
{: #editable-markdown-source}

Les titres, le gras, l’italique et le texte barré affichent leur mise en forme tout en conservant leurs marqueurs visibles et modifiables. Le curseur, la sélection et les retours à la ligne suivent le texte mis en forme. Le code délimité ou indenté reste littéral ; aucune coloration syntaxique n’est appliquée.

La police, la taille, le gras et l’italique choisis constituent le style de base. La taille des titres est relative à cette taille ; le code utilise également la police choisie. L’annulation, le copier-coller et l’enregistrement préservent la source Markdown.

![Modification de la même note avec les marqueurs visibles du titre, du gras, de la liste, de la liste de tâches et du bloc de code.](../images/markdown-source-editor.png)

### Mise en forme prise en charge
{: #supported-formatting}

La mise en forme prend en charge les titres, le gras, l’italique, le texte barré, les citations, les listes numérotées ou à puces, les listes de tâches, les séparateurs horizontaux, le code en ligne et les blocs de code délimités ou indentés. Les retours à la ligne ordinaires sont conservés. Les tableaux, liens, images et balises HTML s’affichent comme du texte littéral, sans mise en forme particulière ni chargement d’images distantes.

Par exemple, saisissez cette source pour obtenir la note illustrée :

````markdown
# RC filter
**Time constant:** τ = R × C

- R1: 10 kΩ
- C1: 100 nF

- [x] Draw the circuit
- [ ] Measure the response

~~~python
tau = 10_000 * 100e-9
~~~
````

## Objets d’annotation
{: #annotation-objects}

TinyCAD prend en charge les formes d’annotation courantes, notamment :

- le texte,
- les lignes,
- les rectangles,
- les ellipses,
- les arcs,
- les polygones.

Utilisez-les pour regrouper des blocs, mettre des zones en évidence et ajouter des notes explicatives sans
modifier la connectivité du circuit.


## Tracer des lignes et des polygones
{: #drawing-lines--polygons}

Vous pouvez tracer une série de lignes. Pour terminer le tracé, cliquez avec le bouton droit.

Vous pouvez convertir ces lignes en polygone en sélectionnant « Fermer le polygone » (Close Polygon) dans le menu contextuel. Une fois converti
en polygone, vous pouvez modifier le remplissage.

{% include video-player.html
	src="/v4/images/video/Video 7.mp4"
	width=1620
	height=924
	caption="Vidéo de démonstration montrant comment tracer et modifier un polygone."
%}


- Retour à [Dessin](../User-guide/)
- Retour à [Sommaire de v4](../CONTENTS/)

---
layout: default
---
# Texte
{: #text}

Le texte sert à la documentation et à améliorer la lisibilité.

L’outil Texte de TinyCAD crée une zone de texte sur le dessin. Les zones de texte sont le
principal moyen d’ajouter des notes lisibles, des instructions, des annotations et des titres directement
dans un schéma. Elles utilisent [Markdown](https://{{ page.manual_language | default: 'en' | replace: 'zh-CN', 'zh' }}.wikipedia.org/wiki/Markdown), ce qui vous permet de mettre le texte en forme à l’aide de titres, de caractères gras,
d’italique, de listes, de listes de tâches et de blocs de code sans quitter la zone de dessin.

Ces objets ne sont pas électriques et sont ignorés lors de la génération de la netlist et des vérifications des règles de conception.

## Texte et étiquettes
{: #text-vs-labels}

- Utilisez Texte pour les notes, les annotations, les titres et les instructions de fabrication.
- Utilisez Étiquettes pour les noms de réseaux actifs sur le plan électrique.

Si vous utilisez du texte à la place d’une étiquette, le réseau ne sera pas connecté.

## Qu’est-ce que Markdown ?
{: #what-is-markdown}
{: #what-is-markdown}

Markdown ajoute une mise en forme au texte brut à l’aide de marqueurs simples saisis au clavier. TinyCAD lit
ces marqueurs et affiche des titres, du texte en gras et des listes.

| Ce que vous saisissez | Signification |
|---|---|
| `# Power supply` | Un titre |
| `**Check polarity**` | Texte en gras |
| `*Optional*` | Texte en italique |
| `- R1: 10 kΩ` | Élément d’une liste à puces |
| `` `R1` `` | Code en ligne |

Ajoutez une espace après `#` ou `-` lorsqu’ils commencent une ligne. Laissez une ligne vide entre
les paragraphes.

Pour plusieurs lignes de code, placez `~~~` seul sur une ligne avant et après le code.
L’exemple de note complet ci-dessous le montre.

## Zones de texte Markdown
{: #markdown-text-boxes}
{: #markdown-text-boxes}

Les zones de texte Markdown sont disponibles dans [TinyCAD v4.0.11](../Changelog/#v4011).

1. Choisissez Texte (ou appuyez sur T), puis faites glisser pour dessiner une zone sur le dessin.
2. Cliquez dans la zone et saisissez du Markdown. La mise en forme apparaît au fur et à mesure de la saisie.
3. Cliquez ailleurs pour afficher la note mise en forme sans les marqueurs Markdown. Redimensionnez
   la zone si le contenu est tronqué.

![Note Markdown rendue en SVG, avec un titre, une liste de composants, une liste de tâches et un bloc de code.](../images/markdown-preview.png)

### Source Markdown modifiable
{: #editable-markdown-source}
{: #editable-markdown-source}

Les titres, le gras, l’italique et le barré sont affichés avec leur mise en forme, tandis que leurs
marqueurs restent visibles et modifiables. Le curseur, la sélection et le retour à la ligne
suivent le texte mis en forme. Le code délimité et indenté reste littéral ; aucune coloration syntaxique
n’est appliquée.

La famille de polices, la taille, le gras et l’italique que vous choisissez constituent le style de base.
Les titres sont mis à l’échelle par rapport à cette taille ; le code utilise également la famille choisie. Les opérations Annuler,
copier-coller et enregistrer préservent la source Markdown.

![Modification de la même note, avec les marqueurs visibles de titre, de gras, de liste, de liste de tâches et de délimitation du code.](../images/markdown-source-editor.png)

### Mise en forme prise en charge
{: #supported-formatting}
{: #supported-formatting}

La mise en forme prise en charge comprend les titres, le gras, l’italique, le barré, les citations,
les listes numérotées et à puces, les listes de tâches, les règles horizontales, le code en ligne et les
blocs de code délimités ou indentés. Les sauts de ligne ordinaires sont conservés. Les tableaux,
liens, images et éléments HTML sont affichés sous forme de texte littéral, sans
mise en forme spéciale ni chargement d’images distantes.

Par exemple, saisissez cette source pour créer la note illustrée :

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

- Voir aussi : [Formes](../Shapes/)
- Retour à [Dessin](../User-guide/)
- Retour à [Sommaire de la v4](../CONTENTS/)

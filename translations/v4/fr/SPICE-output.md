---
layout: default
---
# Modèles SPICE et génération de netlists
{: #spice-models-and-netlist-output}

TinyCAD prend en charge à la fois la [simulation ngspice intégrée](../Simulation/) et l’exportation de netlists SPICE vers un simulateur externe. Ces deux fonctions dépendent des modèles SPICE des composants et de leur correspondance de broches. L’apparence d’un symbole ne décrit pas à elle seule son comportement électrique.

## Modèles, gabarits et ordre des broches
{: #models-templates-and-pin-order}

Une résistance peut utiliser un élément SPICE natif. Un transistor peut nécessiter un `.model` ; un composant plus complexe peut utiliser un `.subckt`. Les paramètres SPICE d’un symbole placé associent ses numéros de broches physiques aux bornes attendues par le modèle. Examinez l’onglet **SPICE** des propriétés du symbole ; les attributs d’instance peuvent remplacer les valeurs par défaut du symbole.

Les gabarits utilisent :

- **`%(pin)`** pour le réseau connecté à la broche TinyCAD spécifiée par son numéro.
- **`$(attribute)`** pour un attribut de composant.
- **`refnum`** comme suffixe de référence traité spécialement afin de préserver le préfixe du dispositif SPICE du gabarit.

Par exemple, un gabarit de résistance peut être :

```text
R$(refnum) %(1) %(2) $(NAME)
```

Pour la référence R3, les réseaux 7 et 9, et NAME `10k`, le résultat est :

```spice
R3 7 9 10k
```

L’attribut sous-jacent de modèle-gabarit est **`$$SPICE`** ; le texte de prologue est **`$$SPICE_PROLOG`**. Un gabarit peut réordonner les broches : ne supposez pas que la broche 1 du schéma est la première borne SPICE. Un élément BJT attend **collecteur, base, émetteur**. Si un symbole numérote la base 1, l’émetteur 2 et le collecteur 3, le gabarit doit substituer `%(3) %(1) %(2)` dans cet ordre. Un sous-circuit utilise l’ordre déclaré sur sa ligne `.subckt`, qui peut différer de celui du boîtier du composant.

Examinez ensemble le symbole réel et le modèle. Les broches d’alimentation, les broches cachées, les variantes de transistor et les modèles d’amplificateur opérationnel sont des sources fréquentes d’incompatibilité. Un modèle comportemental générique de type 741 n’est pas un macro-modèle 741 complet qualifié par le fabricant.

## Utiliser un modèle dans la simulation intégrée
{: #use-a-model-in-integrated-simulation}

1. Commencez avec un symbole modélisé provenant d’une [bibliothèque de simulation intégrée](../Bundled-Libraries/#libraries-with-simulation-models), ou ajoutez un gabarit SPICE approprié à un symbole personnalisé.
2. Vérifiez que chaque gabarit fait référence à des attributs existants et aux broches correctes.
3. Dans la feuille Simulation, joignez tout **texte** de modèle requis et attribuez aux pièces jointes des noms de fichier explicites. Les extensions typiques des fichiers texte sont `.lib`, `.cir` et `.mod`.
4. Résolvez les dépendances `.include` et `.lib` au moyen de ces pièces jointes. Conservez les définitions requises avec le dessin.
5. Connectez la masse **0**, définissez l’analyse dans **Configuration** (Setup), puis lancez la simulation et examinez les diagnostics.

Le moteur géré ne récupère pas de modèle sur un site Web et ne lit pas un chemin absolu arbitraire sur votre ordinateur. Fournissez explicitement les dépendances. Il n’exécute pas non plus de commandes shell arbitraires, de scripts `.control`, de fichiers de démarrage, de modules natifs externes fournis par l’utilisateur ni de dépendances de composants stockées dans des fichiers. Un modèle de fabricant utilisant une syntaxe propre à un simulateur peut nécessiter une adaptation ; « compatible SPICE » ne garantit pas l’identité des dialectes.

La feuille Simulation intégrée de TinyCAD gère les commandes d’analyse et le `.end` final. **Un symbole RUN hérité n’est pas nécessaire.** Lors de l’adaptation d’un dessin destiné à l’exportation, déplacez les anciens paramètres d’analyse dans Configuration (Setup) et supprimez le symbole RUN hérité. Supprimez les instructions d’analyse et `.end` des attributs de tout composant restant ; ces commandes sont refusées dans le parcours intégré des gabarits de composants.

Vérifiez la licence d’un modèle de fabricant avant de le redistribuer. Examinez l’ordre des broches documenté, les unités, les hypothèses du modèle et le simulateur pris en charge. Conservez la documentation du fabricant avec vos notes de modélisation.

## Examiner et exporter une netlist SPICE
{: #inspect-and-export-a-spice-netlist}

Une netlist est une description textuelle des composants et des nœuds qui les relient. La masse est désignée par `0`. Le contenu typique comprend des définitions de modèles et de configuration, des lignes de composants, des directives d’analyse et un `.end` final. Voici quelques vérifications utiles :

- Chaque composant fait-il référence au modèle et à la valeur prévus ?
- Les broches connectées partagent-elles les noms de réseau attendus ?
- Les réseaux d’alimentation et de retour sont-ils présents, y compris 0 ?
- L’ordre des bornes du semi-conducteur ou du sous-circuit est-il correct ?
- Toutes les définitions de modèle et tous les textes inclus sont-ils accessibles au moteur sélectionné ?

Pour la configuration intégrée, ouvrez **Feuille Simulation → Diagnostics → Générer le texte du circuit** (Generate circuit text), examinez le fichier de simulation développé, puis choisissez **Exporter le circuit** (Export circuit) pour enregistrer `simulation.cir`. Cette opération inclut l’analyse gérée.

Pour l’exportation héritée basée sur des gabarits, utilisez la commande distincte **Générer la netlist Spice** (Generate Spice NetList) dans le menu Fichier du navigateur ou le menu Outils du bureau. Elle est distincte de la boîte de dialogue [Générer une netlist](../Generate-Netlist/) destinée au PCB. Les directives d’analyse et d’exécution exportées doivent convenir au moteur externe. Vous pouvez aussi examiner directement le fichier `.cir` du tutoriel associé. **Ouvrez un dessin `.dzn` dans TinyCAD ; une netlist `.cir` n’est pas un fichier de dessin TinyCAD.**

### Gabarits d’exportation hérités
{: #legacy-export-templates}

Le système de gabarits orienté exportation prend en charge un corps de modèle par instance ainsi qu’un prologue et un épilogue par symbole. Les prologues et épilogues identiques sont dédupliqués. Les priorités vont de 0 à 9 : les prologues sont exécutés de la priorité la plus basse à la plus élevée ; les épilogues sont ordonnés avec la priorité 0 en dernier.

Les dessins plus anciens peuvent utiliser un symbole **RUN** sans broche dont le prologue et l’épilogue fournissent les directives d’analyse et de fin pour un fichier de simulation exporté. Il s’agit d’une convention d’exportation, et non d’une instruction visant à ajouter RUN à une feuille Simulation intégrée. Vérifiez ces instructions avant d’exécuter le fichier exporté dans un simulateur séparé.

### Gabarits conditionnels
{: #conditional-templates}

Pour les gabarits personnalisés ou orientés exportation, les formes conditionnelles prises en charge comprennent :

```text
?( defined(attribute), true text, false text )
?( not_defined(attribute), true text, false text )
?( empty(attribute), true text, false text )
?( not_empty(attribute), true text, false text )
?( connected(pin), true text, false text )
?( not_connected(pin), true text, false text )
```

Les conditions peuvent être imbriquées. Examinez le fichier de simulation développé plutôt que de juger un gabarit complexe uniquement d’après son texte source.

## Notation numérique et portabilité
{: #numerical-notation-and-portability}

Dans le texte SPICE, **`M` signifie milli**, tout comme `m` ; utilisez **`Meg`** pour méga. `1k`, `100n` et `10u` sont des valeurs courantes. Utilisez des paramètres et des références de modèle explicites plutôt que de vous fier aux valeurs par défaut non spécifiées d’un simulateur.

La documentation de la ligne de commande ngspice externe couvre un environnement plus vaste que le moteur intégré de TinyCAD. Pour obtenir la syntaxe complète des éléments, les modèles, les analyses et les remarques de compatibilité, consultez la [documentation officielle de ngspice](https://ngspice.sourceforge.io/docs.html) et le [manuel de l’utilisateur](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf). Poursuivez avec [la mise en œuvre de SPICE par TinyCAD](../SPICE-Tutorial-11/) pour une explication détaillée des moteurs, des symboles et des netlists.

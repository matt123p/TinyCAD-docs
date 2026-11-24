---
layout: default
---
# Modèles SPICE et génération de netlists
{: #spice-models-and-netlist-output}

TinyCAD prend en charge la [simulation ngspice intégrée](../Simulation/) ainsi que l'export de netlists SPICE vers un simulateur externe. Les deux dépendent des modèles SPICE des composants et de leur correspondance des broches. L'apparence d'un symbole ne décrit pas à elle seule son comportement électrique.

Pour choisir un modèle déjà inclus dans TinyCAD, consultez [Modèles SPICE intégrés](../Bundled-SPICE-Models/).

## Modèles, gabarits et ordre des broches
{: #models-templates-and-pin-order}

Une résistance peut utiliser un élément SPICE natif. Un transistor peut nécessiter un `.model` ; un dispositif plus complexe peut utiliser un `.subckt`. Les paramètres SPICE d'un symbole placé associent ses numéros de broche physiques aux bornes attendues par le modèle. Consultez l'onglet **SPICE** des propriétés du symbole ; les attributs de l'instance peuvent remplacer les valeurs par défaut du symbole.

Les gabarits utilisent :

- **`%(pin)`** pour le net connecté à la broche TinyCAD indiquée par son numéro.
- **`$(attribute)`** pour un attribut de composant.
- **`refnum`** comme suffixe de référence traité spécialement, afin de préserver le préfixe de dispositif SPICE du gabarit.

Par exemple, le gabarit d'une résistance peut être :

```text
R$(refnum) %(1) %(2) $(Value)
```

Pour la référence R3, les nets 7 et 9 et la valeur `10k`, il produit :

```spice
R3 7 9 10k
```

L'attribut sous-jacent du gabarit de modèle est **`$$SPICE`** ; le texte de préambule est **`$$SPICE_PROLOG`**. Un gabarit peut réordonner les broches : ne supposez pas que la broche 1 du schéma est la première borne SPICE. Un élément BJT attend **collecteur, base, émetteur**. Si les broches du symbole sont numérotées base 1, émetteur 2 et collecteur 3, le gabarit doit substituer `%(3) %(1) %(2)` dans cet ordre. Un sous-circuit utilise l'ordre déclaré sur sa ligne `.subckt`, qui peut différer de celui du boîtier du dispositif.

Examinez ensemble le symbole réel et le modèle. Les broches d'alimentation, les broches masquées, les variantes de transistors et les modèles d'amplificateurs opérationnels sont des sources fréquentes d'incompatibilités. Un modèle comportemental générique de type 741 n'est pas un macro-modèle 741 complet qualifié par le fabricant.

## Utiliser un modèle dans la simulation intégrée
{: #use-a-model-in-integrated-simulation}

1. Commencez par un [modèle intégré](../Bundled-SPICE-Models/) ou ajoutez un gabarit personnalisé (Custom) approprié à votre symbole. Vérifiez que la correspondance des broches respecte l'ordre des bornes du modèle.
2. TinyCAD résout automatiquement les modèles intégrés liés. Si un modèle personnalisé (Custom) nécessite du texte externe, utilisez **Setup → SPICE models** pour l'associer à un nom de fichier logique tel que `part.lib`, `part.cir` ou `part.mod`.
3. Résolvez les dépendances `.include` et `.lib` au moyen de ces pièces jointes. Enregistrez le dessin pour y conserver les définitions nécessaires.
4. Connectez la masse **0**, définissez l'analyse dans **Setup**, puis lancez la simulation et examinez les diagnostics.

Le moteur géré ne récupère pas de modèle sur un site Web et ne lit pas un chemin absolu arbitraire sur votre ordinateur. Fournissez explicitement les dépendances. Il n'exécute pas non plus de commandes shell arbitraires, de scripts `.control`, de fichiers de démarrage, de modules natifs externes ni de dépendances de dispositifs fondées sur des fichiers. Un modèle de fabricant utilisant une syntaxe propre à un simulateur peut nécessiter une adaptation ; la mention « compatible SPICE » ne garantit pas l'identité des dialectes.

La feuille Simulation intégrée de TinyCAD gère les commandes d'analyse et le `.end` final. **Un ancien symbole RUN n'est pas nécessaire.** Lors de l'adaptation d'un dessin destiné à l'export, transférez les anciens paramètres d'analyse dans Setup et supprimez l'ancien symbole RUN. Supprimez les instructions d'analyse et `.end` des attributs de composant restants ; ces commandes sont rejetées dans le chemin des gabarits de composants intégrés.

Vérifiez la licence d'un modèle de fabricant avant de le redistribuer. Examinez l'ordre des broches documenté, les unités, les hypothèses du modèle et les simulateurs pris en charge. Conservez la documentation du fabricant avec vos notes de modélisation.

## Examiner et exporter une netlist SPICE
{: #inspect-and-export-a-spice-netlist}

Une netlist est une description textuelle des dispositifs et des nœuds qui les relient. La masse est nommée `0`. Un contenu typique comprend des définitions de modèle et de configuration, des lignes de composants, des directives d'analyse et un `.end` final. Voici quelques vérifications utiles :

- Chaque composant fait-il référence au modèle et à la valeur voulus ?
- Les broches connectées partagent-elles les noms de net attendus ?
- Les nets d'alimentation et de retour sont-ils présents, y compris 0 ?
- L'ordre des bornes du semi-conducteur ou du sous-circuit est-il correct ?
- Toutes les définitions de modèle et les textes inclus sont-ils disponibles pour le moteur sélectionné ?

Pour la configuration intégrée, ouvrez **Simulation sheet → Diagnostics → Generate circuit text**, examinez le circuit développé, puis choisissez **Export circuit** pour enregistrer `simulation.cir`. Cela inclut l'analyse gérée et peut faire référence à des fichiers de modèle distincts au moyen de `.include`. Un simulateur externe nécessite des copies de ces fichiers aux emplacements indiqués.

Pour l'exportation ancienne fondée sur les gabarits, utilisez la commande distincte **Generate Spice NetList** dans le menu File du navigateur ou le menu Desktop Tools. Elle est distincte de la boîte de dialogue [Generate Netlist](../Generate-Netlist/) destinée aux PCB. Cette commande intègre les définitions référencées. Fournissez toutes les dépendances externes utilisées par les gabarits personnalisés (Custom) et vérifiez que les directives d'analyse et d'exécution conviennent au moteur externe. Vous pouvez également examiner directement un fichier de tutoriel associé `.cir`. **Ouvrez un dessin `.dzn` dans TinyCAD ; une netlist `.cir` n'est pas un fichier de dessin TinyCAD.**

### Gabarits d'exportation anciens
{: #legacy-export-templates}

Le système de gabarits destiné à l'exportation prend en charge un corps de modèle par instance, ainsi qu'un préambule et un épilogue par symbole. Les préambules et épilogues identiques sont dédupliqués. Les priorités vont de 0 à 9 : les préambules sont exécutés dans l'ordre croissant ; les épilogues sont ordonnés avec la priorité 0 en dernier.

Les anciens dessins peuvent utiliser un symbole **RUN** sans broche, dont le préambule ou l'épilogue fournit les directives d'analyse et de terminaison d'un circuit exporté. Il s'agit d'une convention d'exportation, et non d'une instruction d'ajouter RUN à une feuille Simulation intégrée. Examinez ces instructions avant d'exécuter le fichier exporté dans un simulateur distinct.

### Gabarits conditionnels
{: #conditional-templates}

Pour les gabarits personnalisés ou destinés à l'exportation, les formes conditionnelles prises en charge comprennent :

```text
?( defined(attribute), true text, false text )
?( not_defined(attribute), true text, false text )
?( empty(attribute), true text, false text )
?( not_empty(attribute), true text, false text )
?( connected(pin), true text, false text )
?( not_connected(pin), true text, false text )
```

Les conditions peuvent être imbriquées. Examinez le circuit développé au lieu de vous fier uniquement au texte source d'un gabarit complexe.

## Notation numérique et portabilité
{: #numerical-notation-and-portability}

Dans le texte SPICE, **`M` signifie milli**, tout comme `m` ; utilisez **`Meg`** pour méga. `1k`, `100n` et `10u` sont des valeurs courantes. Utilisez des paramètres de modèle et des références explicites plutôt que de vous fier aux valeurs par défaut non spécifiées d'un simulateur.

La documentation de la ligne de commande ngspice externe couvre un environnement plus vaste que le moteur intégré de TinyCAD. Pour connaître la syntaxe complète des éléments, les modèles, les analyses et les remarques sur la compatibilité, consultez la [documentation officielle de ngspice](https://ngspice.sourceforge.io/docs.html) et le [manuel d'utilisation](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf). Poursuivez avec [la mise en œuvre de SPICE par TinyCAD](../SPICE-Tutorial-11/) pour une explication détaillée des moteurs, des symboles et des netlists.

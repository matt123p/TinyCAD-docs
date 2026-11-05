---
layout: default
---
# Sortie SPICE
{: #spice-output}

La prise en charge de SPICE dans TinyCAD v4 fonctionne comme dans la v3 : TinyCAD génère un fichier texte SPICE à partir de votre schéma à l’aide de modèles définis au niveau des symboles.

## À quoi sert SPICE
{: #what-spice-is-used-for}

SPICE (Simulation Program with Integrated Circuit Emphasis) désigne une famille de formats et d’outils de simulation de circuits. Un simulateur SPICE vous permet de tester le comportement d’un circuit avant de construire le matériel, par exemple :

- Points de fonctionnement en courant continu et conditions de polarisation
- Comportement transitoire (dans le domaine temporel)
- Réponse en courant alternatif/en fréquence
- Balayages de paramètres et analyses « et si ? »

TinyCAD n’exécute pas lui-même la simulation. Il exporte plutôt un fichier SPICE que vous exécutez dans le moteur SPICE de votre choix.

## Format de fichier SPICE et structure générale
{: #spice-file-format-and-general-layout}

Les moteurs SPICE présentent de légères différences, mais la plupart des fichiers SPICE suivent la même structure générale :

1. En-tête/commentaires facultatifs
2. Inclusions et définitions de composants/modèles
3. Lignes des éléments du circuit (une ligne par instance de composant)
4. Commandes d’analyse/de contrôle
5. Marqueur de fin (généralement `.end`)

En pratique, votre fichier exporté comporte généralement :

- Du texte de « configuration » en haut (modèles, inclusions, options)
- Un corps contenant les composants générés et les nœuds auxquels ils sont connectés
- Du texte de « lancement » ou d’analyse en bas

La génération SPICE de TinyCAD est conçue pour correspondre directement à cette structure.

## Comment TinyCAD génère le SPICE
{: #how-tinycad-generates-spice}

TinyCAD utilise un système de modèles de chaînes pour chaque symbole prenant en charge SPICE. Chaque symbole peut définir :

- **Modèle de composant** : inséré pour chaque instance de ce composant dans le schéma
- **Modèle de prologue** : inséré vers le haut du fichier, une fois par type de composant
- **Modèle d’épilogue** : inséré vers le bas du fichier, une fois par type de composant

Ouvrez ces champs dans les propriétés du symbole, dans l’éditeur de bibliothèque de symboles (onglet SPICE).

### Expansion des modèles
{: #template-expansion}

Les modèles peuvent inclure :

- `%(pin)` pour les substitutions de broches/nœuds
- `$(attribute)` pour les substitutions d’attributs de symbole

Exemple de modèle de composant pour une résistance :

`R$(refnum) %(1) %(2) $(NAME)`

Si l’instance de résistance porte la référence `R3`, est connectée entre les nœuds `7` et `9` et possède `NAME=10K`, TinyCAD écrit :

`R3 7 9 10K`

`refnum` est traité de manière particulière afin que la lettre du composant SPICE dans le modèle soit conservée.

### Ordre et déduplication des prologues/épilogues
{: #prologueepilogue-order-and-deduplication}

- Les prologues et les épilogues identiques sont dédupliqués
- Chacun possède une priorité (`0` à `9`)
- Les prologues sont écrits par ordre de priorité croissante
- Les épilogues sont écrits de sorte que la priorité `0` apparaisse en dernier dans le fichier

Cela permet de contrôler l’emplacement du texte de configuration et d’analyse.

## Configuration requise du schéma pour l’export SPICE
{: #required-schematic-setup-for-spice-export}

Pour générer un fichier SPICE valide, votre dessin doit inclure :

- Des symboles prenant en charge SPICE pour le circuit simulé
- Un symbole spécial **RUN**
- Un nœud nommé **0** (masse SPICE)

### Symbole RUN
{: #run-symbol}

Le symbole RUN est un symbole TinyCAD normal, sans broche ni modèle de composant, mais avec du texte de prologue/épilogue servant à insérer des instructions de contrôle de simulation.

Définissez les priorités du prologue et de l’épilogue de RUN sur `0` afin que son texte apparaisse tout au début et tout à la fin du fichier généré.

Utilisez un symbole RUN par circuit de simulation.

### Le nœud `0`
{: #the-0-net}

SPICE exige que la masse soit le nœud `0`.

Dans TinyCAD, créez ce nœud en nommant une connexion `0` à l’aide de l’une des méthodes suivantes :

- Une étiquette de nœud, ou
- Un symbole d’alimentation dont la valeur est `0`

## Création de la sortie SPICE
{: #creating-the-spice-output}

Une fois les symboles, le nœud RUN et le nœud `0` en place, générez la sortie SPICE à l’aide de la commande d’export SPICE de TinyCAD dans l’interface utilisateur.

Les options d’exportation sont volontairement limitées, car le comportement à l’exécution est censé être contrôlé par les modèles de votre symbole RUN.

## Conditions avancées dans les modèles
{: #advanced-template-conditionals}

Les symboles plus élaborés peuvent utiliser des conditions dans les modèles (même comportement que dans la v3), notamment des tests pour vérifier si :

- Un attribut est présent ou absent
- Un attribut est vide ou non vide
- Une broche est connectée ou non

Syntaxe conditionnelle :

- `?( defined(attributename), true string, false string )`
- `?( not_defined(attributename), true string, false string )`
- `?( empty(attributename), true string, false string )`
- `?( not_empty(attributename), true string, false string )`
- `?( connected(pinnumber), true string, false string )`
- `?( not_connected(pinnumber), true string, false string )`

Les conditions peuvent être imbriquées.

- Retour à [Avancé](../Advanced/)
- Retour à [Sommaire de v4](../CONTENTS/)

---
layout: default
---
# Modèles SPICE intégrés
{: #bundled-spice-models}

TinyCAD comprend un catalogue hors ligne de modèles SPICE. Utilisez un modèle intégré pour simuler un composant avec ngspice, comparer des composants candidats ou créer un modèle personnalisé à partir d’une définition connue pour fonctionner. Les modèles sont disponibles dans TinyCAD Web et dans l’application de bureau. Le sélecteur fonctionne localement une fois l’application chargée.

## Commencer avec un symbole modélisé
{: #start-with-a-modelled-symbol}

Ouvrez **Standard → Éléments SPICE essentiels** dans le panneau latéral, ou utilisez **Simulation → Composants SPICE** dans la barre d’outils. Choisissez **Plus…** pour parcourir la bibliothèque complète de symboles. Les 29 symboles SPICE essentiels disposent tous d’un modèle intégré et d’un mappage de broches prédéfini. La plupart utilisent un modèle **TinyCAD Basic**. Les LM358 et LM324 utilisent des modèles de boîtier OpenJellyBean complets.

Placez un symbole, sélectionnez-le dans le dessin et ouvrez **SPICE** dans le panneau inférieur **Symbole**. **Intégré** affiche le modèle associé et sa source. Les champs de symbole ordinaires, tels que **Valeur**, **Curseur** et **Tension initiale**, contrôlent toujours les modèles TinyCAD Basic qui utilisent ces champs. Par exemple, définissez la **Valeur** d’une résistance sur `10k` pour simuler 10 kΩ avec son modèle par défaut **Résistance idéale**.

![L’onglet SPICE du symbole placé affiche Intégré sélectionné et renvoie au modèle TinyCAD Basic de DEL jaune.](/v4/images/simulation/bundled-spice-properties.png)

Pour essayer cela dans un circuit complet, choisissez **Ouvrir un exemple → Didacticiel SPICE → diviseur**, puis sélectionnez l’une des résistances. Son onglet **SPICE** affiche le lien **Résistance idéale**. Modifiez la valeur de la résistance, puis relancez la configuration de point de fonctionnement de l’exemple. Le résultat conservé représente le circuit avant votre modification.

## Choisir et associer un modèle
{: #choose-and-attach-a-model}

1. Ouvrez l’onglet **SPICE** du symbole. Sélectionnez **Intégré**, puis **Rechercher un modèle SPICE…**.
2. Saisissez un numéro de pièce, un alias, un identifiant de modèle ou une famille de composants. Effacez le champ de recherche pour afficher les choix disponibles pour ce symbole.
3. Sélectionnez une ligne. Les détails sous le tableau affichent la description du modèle, sa source, l’ordre des bornes et les paramètres réglables éventuels. Développez **Afficher la définition SPICE** pour voir le modèle d’instance ainsi que les cartes de modèle ou sous-circuits utilisés. Sélectionnez le lien de la source pour consulter la définition originale ou l’archive en amont et le nom du fichier qu’elle contient.
4. Vérifiez le mappage des broches et définissez les éventuelles substitutions de paramètres. Choisissez **Sélectionner le modèle SPICE**. Dans un dessin, cette opération modifie le placement sélectionné et peut être annulée.

![Boîte de dialogue Rechercher un modèle SPICE pour une DEL jaune. Le modèle circsim sélectionné affiche sa source ainsi que les numéros de broches vérifiés de l’anode et de la cathode.](/v4/images/simulation/bundled-spice-picker.png)

Les **symboles SPICE essentiels** ne répertorient que les modèles dont le mappage a été vérifié pour la configuration des broches du symbole. Certains symboles n’ont que le modèle Basic par défaut. Par exemple, une DEL jaune propose son modèle Basic et le modèle circsim de DEL jaune. Un transistor NPN standard peut utiliser le modèle générique ou une variante telle que `2N3904_OJ` d’OpenJellyBean, avec le collecteur, la base et l’émetteur déjà mappés respectivement aux broches 3, 1 et 2.

Les **autres symboles**, y compris les anciens placements sans identité de bibliothèque, peuvent parcourir le catalogue complet de leur édition. Examinez les correspondances suggérées et sélectionnez une broche physique distincte pour chaque borne du modèle. Incluez les broches d’alimentation, même lorsqu’elles sont masquées sur le schéma. Utilisez le brochage de boîtier vérifié du symbole et l’ordre des bornes du modèle. Laissez hors du mappage les broches physiques omises par le modèle. Un symbole temporaire dont le nombre ou la fonction des broches est incorrect doit être corrigé avant de pouvoir représenter le composant.

![Mappage manuel des broches pour un symbole 741 dans une bibliothèque personnalisée, avec les cinq bornes du circsim LM741 attribuées aux broches physiques 3, 2, 6, 7 et 4.](/v4/images/simulation/bundled-spice-pin-mapping.png)

L’exemple mappe le modèle circsim `LM741` à un symbole 741 à l’aide des broches 3 (entrée non-inverseuse), 2 (entrée inverseuse), 6 (sortie), 7 (alimentation positive) et 4 (alimentation négative). Le modèle omet les broches de réglage du décalage. Pour un symbole de bibliothèque à plusieurs sections, TinyCAD propose les numéros de broches communs aux sections qui utiliseront le modèle. Choisissez un modèle de boîtier complet lorsque votre symbole et votre simulation nécessitent le boîtier complet.

Si le sélecteur affiche **Aucun modèle ne correspond à cette recherche**, effacez la recherche ou essayez un terme plus général. Un symbole étiqueté peut ne proposer que ses choix vérifiés. Pour utiliser un autre modèle, vérifiez le brochage du composant et utilisez un [symbole de bibliothèque personnalisé](../Custom-symbol-libraries/) approprié ou une définition personnalisée.

## Choisir le niveau de détail approprié
{: #choose-the-right-level-of-detail}

| Ce que vous voulez comprendre | Modèle à utiliser pour commencer |
| --- | --- |
| Vérifier un diviseur, une constante de temps RC ou le comportement de base d’un circuit | Utilisez TinyCAD Basic. Les modèles idéaux sont utiles lorsque les parasites et les tolérances ne sont pas pertinents pour la question étudiée. |
| Étudier la polarisation, le gain, la tension directe d’une diode ou la commutation avec un composant particulier | Recherchez la référence exacte ou un équivalent documenté. Examinez la description et les hypothèses du modèle aux tensions, courants, températures et fréquences considérés. |
| Étudier un substitut en l’absence de modèle exact | Utilisez un candidat documenté interchangeable ou un modèle générique de la famille de composants. Vérifiez séparément les fonctions des broches du boîtier, la polarité de l’alimentation et les limites de fonctionnement. Notez les comportements approximés. |
| Étudier une limite telle que le bruit, la plage de mode commun d’entrée, la dérive thermique ou un coin de procédé | Vérifiez si le modèle couvre explicitement l’effet. Au besoin, utilisez un modèle de fabricant ou de procédé approprié comme [définition personnalisée](../SPICE-output/#models-templates-and-pin-order). |

Les modèles intégrés décrivent le comportement typique. Par exemple, le 741 de circsim représente le gain nominal, la bande passante, la vitesse de balayage, le décalage et le courant d’alimentation. Il utilise un étage d’entrée à haute impédance. Le modèle circsim de DEL jaune décrit le comportement électrique autour d’un ajustement à 2,10 V pour 20 mA. Le flux lumineux, les caractéristiques nominales du composant et le comportement dans les pires cas nécessitent leurs propres éléments justificatifs.

## Définir une valeur par défaut de bibliothèque ou modifier une copie personnalisée
{: #set-a-library-default-or-edit-a-custom-copy}

- **Pour les prochains placements**, ouvrez une bibliothèque `.tclib` modifiable et sélectionnez le symbole. Ouvrez son onglet **SPICE** et utilisez le même sélecteur de modèles. Enregistrez la bibliothèque. La définition choisie devient celle par défaut pour les futurs placements issus de cette entrée. Les placements existants conservent leurs définitions enregistrées.
- **Pour un seul placement**, sélectionnez-le dans votre schéma et modifiez ses propriétés **SPICE**. Cette méthode est utile pour comparer deux modèles côte à côte dans le même dessin.
- **Pour modifier le texte du modèle**, sélectionnez **Personnalisé** sur un symbole associé. TinyCAD copie le modèle d’instance et toutes les définitions requises dans des champs modifiables, avec les broches mappées. Pour les modèles comportant des définitions, la copie locale utilise des noms propres au placement afin de pouvoir fonctionner en parallèle de l’original intégré. Pour une résistance idéale, le modèle d’instance suffit à lui seul.

Revenir à **Intégré** restaure le modèle associé. Repassez à **Personnalisé** pour récupérer vos modifications. Le mode sélectionné détermine la définition utilisée, et les deux réglages sont conservés après l’enregistrement et la réouverture. **Supprimer le modèle associé** supprime le lien et restaure le modèle précédent s’il avait été enregistré.

Un [import SPICE KiCad](../Importing-Symbols-from-KiCAD/#import-spice-models-with-symbols) pris en charge apparaît sous **Personnalisé**. Pour conserver cette définition importée afin de l’utiliser dans de futurs placements, importez-la dans une bibliothèque modifiable et enregistrez-la.

## Exécuter, enregistrer et partager
{: #run-save-and-share}

1. Connectez les broches mappées et les alimentations, y compris une connexion à la masse SPICE **0**.
2. Créez ou ouvrez une [feuille Simulation](../Simulation/), sélectionnez l’analyse dans **Configuration**, puis choisissez **Exécuter**. Les modèles intégrés actifs sont résolus automatiquement. Utilisez **Configuration → Modèles SPICE** pour joindre les fichiers supplémentaires requis par un modèle personnalisé.
3. Ouvrez **Diagnostics → Générer le texte du circuit** pour examiner les lignes d’instance développées et les références de modèle. Vérifiez l’ordre des broches et les réseaux d’alimentation si un résultat semble incorrect.

Les dessins conservent la révision de chaque modèle, les broches mappées et les paramètres, avec une seule copie enregistrée de chaque pack référencé. Enregistrez le dessin pour partager le circuit et ses définitions de modèle. Les modèles XSPICE réservés à la version de bureau nécessitent toujours le moteur de bureau pour fonctionner. **Générer la netlist Spice** intègre les définitions référencées dans la sortie SPICE. Consultez [Modèles SPICE et sortie de netlist](../SPICE-output/#inspect-and-export-a-spice-netlist) pour connaître les options d’exportation et la différence entre un deck de simulation et un dessin.

## Contenu et sources du catalogue
{: #catalog-contents-and-sources}

TinyCAD Web comprend 97 modèles de catalogue. L’application de bureau ajoute trois définitions qui nécessitent XSPICE natif. Consultez le lien figurant dans les détails de chaque modèle pour connaître sa source précise. TinyCAD fournit les avis de licence avec les packs, et ces avis sont également disponibles dans **À propos de TinyCAD**.

| Pack | Modèles | Exemples |
| --- | ---: | --- |
| TinyCAD Basic | 20 | Résistances, condensateurs et inductances idéaux, sources indépendantes, modèles de potentiomètre et de transformateur, semi-conducteurs génériques, 741 et résonateurs |
| OpenJellyBean | 42 | BJT, MOSFET, JFET, diodes de signal et Schottky, diodes Zener, DEL, canaux et boîtiers d’amplificateurs opérationnels, et potentiomètre |
| circsim | 15 | LM741, DEL jaune, LM393, LM339, NE5532, NE555, optocoupleurs, régulateurs et MOSFET de puissance |
| Spice_Files | 14 | Diodes et DEL génériques, pont redresseur, optocoupleurs, interrupteur, relais, cristal de 16 MHz et transformateur 10:1 |
| Modèles spéciaux ngspice | 1 | Générateur de formes d’onde ICL8038 |
| Modèles spéciaux ngspice (Desktop) | 3 | Inverseur de tension LTC1044HV, régulateur LR8 et son amplificateur opérationnel auxiliaire |
| SkyWater SKY130 | 1 | Transistor PNP intégré nominal avec borne de substrat |
| GlobalFoundries GF180MCU | 3 | Condensateurs MIM nominaux de 1,0, 1,5 et 2,0 fF/µm² |
| IHP SG13G2 | 1 | Transistor PNP intégré pnpMPA nominal |

Les entrées des fonderies sont des modèles nominaux sélectionnés. Les kits de procédé complets fournissent des arborescences de modèles, des coins de procédé et une configuration du simulateur distincts. Consultez la [référence du catalogue](https://github.com/matt123p/TinyCADv4/blob/main/docs/bundled-spice-models.md#catalog-sources) pour l’inventaire des sources, les licences et les alternatives vérifiées pour les éléments SPICE essentiels.

## Interroger l’assistant IA de bureau
{: #ask-the-desktop-ai-assistant}

Lorsque vous demandez explicitement une assistance SPICE, l’[assistant IA de bureau](../AI-Assistant/) peut rechercher dans le catalogue local, examiner le texte et les sources des modèles, et vérifier le mappage vers votre symbole. Il peut associer un modèle à un composant placé ou enregistrer un modèle comme valeur par défaut lors de l’ajout d’un nouveau composant de bibliothèque. Il demande confirmation avant de remplacer un modèle personnalisé existant. Pour les opérations ordinaires sur les schémas ou les symboles, il conserve les valeurs par défaut fournies.

Pour une comparaison en lecture seule, essayez : « Trouve un modèle SPICE intégré pour Q1. Compare l’ordre de ses bornes et ses limitations avec ceux du composant prévu. Ne modifie pas le dessin. »

Pour demander une modification, essayez : « Associe le modèle 2N3904 intégré à Q1 après avoir vérifié le mappage de ses broches physiques. Indique-moi la source et les hypothèses éventuelles. »

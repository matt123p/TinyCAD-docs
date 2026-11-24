---
layout: default
---
# Assistant IA
{: #ai-assistant}

L'assistant IA de TinyCAD transforme des instructions écrites, des fiches techniques et des images de circuits en symboles et dessins modifiables. Il fonctionne avec l'éditeur habituel : vous pouvez lui demander de créer un circuit, d'ajouter des composants au dessin déjà ouvert, de créer une bibliothèque de symboles ou d'expliquer une connexion existante.

**Ordinateur de bureau uniquement :** L'assistant IA (chatbot) est disponible uniquement dans l'application TinyCAD Desktop. Il n'est pas disponible dans la version pour navigateur.

Dans l'application Desktop, ouvrez **Chat** dans la barre d'outils pour l'utiliser. Connectez un fournisseur d'IA avant d'envoyer votre premier message ; les options de connexion sont expliquées ci-dessous.

## Ce qu'il peut faire
{: #what-it-can-do}

| Tâche | Comment l'assistant aide |
| --- | --- |
| **Créer un symbole de composant** | Générer un dessin modifiable, les numéros de broches physiques, les noms de broches et les types électriques à partir d'un composant et d'un boîtier spécifiés. Joignez la fiche technique du fabricant lorsque le brochage est important. |
| **Créer ou étendre une bibliothèque de symboles** | Ajouter plusieurs composants réutilisables à la bibliothèque `.tclib` ouverte pour modification, avec notamment leurs noms, descriptions et correspondances de broches. Les collections volumineuses peuvent être créées par lots successifs. |
| **Dessiner un circuit** | Trouver des symboles adaptés, placer les composants, définir leurs valeurs et références, relier les broches avec des fils et des étiquettes, et ajouter des notes explicatives. |
| **Étendre un dessin existant** | Ajouter un connecteur, un condensateur de découplage, un capteur, un pilote ou un autre bloc fonctionnel tout en conservant le reste du dessin. |
| **Expliquer ou examiner un circuit** | Lire le dessin et la netlist actuels, décrire les chemins de signaux, identifier les broches d'un net et examiner la connectivité ou les erreurs de vérification des règles de conception. |
| **Reconstituer un dessin à partir d'un document** | Lire un PDF ou une image de circuit jointe et créer une ébauche modifiable, en posant des questions sur les composants ou les connexions qui ne sont pas clairs. |
| **Mettre en ordre une disposition** | Réorganiser une feuille entière ou une partie spécifiée, à l'aide des outils de disposition et des contrôles de connexion de TinyCAD. |
| **Exporter un résultat** | Produire un dessin ou une bibliothèque de symboles téléchargeable lorsque vous demandez explicitement un fichier. |

Les résultats sont des objets TinyCAD que vous pouvez sélectionner, modifier, câbler et enregistrer. Dans un dessin, les symboles nouvellement créés sont placés prêts à être connectés. Dans une bibliothèque, les nouveaux composants deviennent des entrées de cette bibliothèque. Vous n'avez pas à copier du XML depuis la conversation ni à configurer un serveur MCP distinct.

L'assistant consulte d'abord les [bibliothèques fournies](../Bundled-Libraries/), puis recherche dans la collection publique TinyCAD.net si nécessaire. Il peut effectuer des recherches dans les collections fournies qui ne sont pas actuellement sélectionnées dans le sélecteur de bibliothèques. La recherche de symboles publics nécessite une connexion Internet, même si vous utilisez un modèle d'IA local.

Pour les composants réutilisables, commencez par [créer ou ouvrir une bibliothèque personnalisée pour la modifier](../Custom-symbol-libraries/), puis ouvrez Chat dans cette fenêtre de bibliothèque. Pour un circuit, gardez active la fenêtre de dessin souhaitée. Indiquez à l'assistant la feuille, les références des composants ou le bloc fonctionnel concernés. La récupération et le placement de symboles par l'IA prennent actuellement en charge les **symboles à unité unique** ; utilisez l'éditeur de symboles habituel pour les composants multi-unités que l'assistant ne peut pas importer.

{% include video-player.html src="/v4/videos/ai-assistant/ai-assistant-demo.mp4" poster="/v4/images/ai-assistant/chat-open-desktop.png" caption="Créer un symbole à partir d'une fiche technique dans TinyCAD Desktop. Les attentes dues au traitement par l'IA sont affichées à une vitesse multipliée par 12 et indiquées à l'écran ; les interactions et les résultats sont affichés à vitesse normale." %}

## Configurer une connexion
{: #set-up-a-connection}

### 1. Choisir un fournisseur
{: #choose-a-provider}

1. Ouvrez **Chat** dans la barre d'outils.
2. Cliquez sur **Cliquez ici pour vous connecter et utiliser l'IA** (Click here to Sign in to use AI), ou sur l'engrenage **Paramètres de l'IA** (AI settings) dans l'en-tête du panneau.
3. À l'étape **Étape 1 — Choisir un fournisseur** (Step 1 — Choose provider), sélectionnez un fournisseur, puis cliquez sur **Suivant** (Next).

![Paramètres de l'IA affichant l'étape Fournisseur](../images/ai-assistant/setup-provider.png)

Vous pouvez connecter un seul fournisseur à la fois.

| Fournisseur dans TinyCAD | Ce dont vous avez besoin |
| --- | --- |
| **ChatGPT** | Soit un compte ChatGPT payant admissible avec **Se connecter avec ChatGPT** (Sign In with ChatGPT), soit une clé API OpenAI avec **Utiliser une clé API** (Use API Key). La connexion au compte est disponible dans l'application Desktop. |
| **Anthropic Claude** | Une clé API de la [Claude Console](https://platform.claude.com/settings/keys), avec un accès à l'API et une facturation pour les modèles utilisés. |
| **Google Gemini** | Une clé API de [Google AI Studio](https://aistudio.google.com/apikey). Certains modèles proposent une offre gratuite limitée pour l'API ; leur disponibilité et les quotas s'appliquent. |
| **Compatible OpenAI** | La clé API du service, l'URL de base de son API et un modèle prenant en charge les appels d'outils. |
| **Ollama (hébergé localement)** | Un serveur Ollama local en cours d'exécution et un modèle installé prenant en charge les outils. Les modèles locaux ne nécessitent pas de clé API. |

Un abonnement au site Web de clavardage habituel d'un fournisseur ne donne pas automatiquement accès à la facturation API ni à une clé API. L'option explicite de connexion à un compte ChatGPT est une méthode de connexion distincte. Pour Gemini, l'assistant de configuration utilise une clé API ; la connexion à l'espace de stockage Google Drive de TinyCAD ne connecte pas son assistant IA.

### 2. Connecter un compte ou une clé API
{: #connect-an-account-or-api-key}

#### Utiliser un compte ChatGPT
{: #use-a-chatgpt-account}

Dans TinyCAD Desktop, choisissez **ChatGPT**, puis **Se connecter avec ChatGPT** (Sign In with ChatGPT) à l'étape 2.

1. Cliquez sur **Se connecter avec ChatGPT** (Sign in with ChatGPT). Terminez la connexion dans le navigateur externe.
2. Lorsque vous y êtes invité, autorisez l'utilisation de votre forfait ChatGPT. Se connecter sans autoriser l'utilisation du forfait ne suffit pas pour envoyer des requêtes à l'IA.
3. Revenez à TinyCAD et choisissez un modèle lorsque l'assistant de configuration passe à l'étape 3.

Si un compte est mémorisé, l'écran propose **Continuer en tant que …** (Continue as …) ou **Se connecter avec un autre compte** (Sign in with a different account). TinyCAD ne conserve qu'un compte à la fois. Après la connexion, **Forfait ChatGPT utilisé** (Using ChatGPT plan) et **Gérer l'utilisation** (Manage usage) apparaissent au-dessus de la zone de message. Le message affiché lors de la première utilisation explique que les requêtes utilisent le quota de votre forfait ou les crédits disponibles.

![Paramètres de l'IA Desktop proposant Se connecter avec ChatGPT ou Utiliser une clé API](../images/ai-assistant/setup-chatgpt-desktop.png)

La connexion à ChatGPT nécessite un compte payant admissible ; les limites du compte, de l'espace de travail et de l'application continuent de s'appliquer. En cas de refus d'une requête, le système ne bascule pas silencieusement vers la facturation par clé API. Consultez la [documentation d'OpenAI sur la connexion avec ChatGPT](https://developers.openai.com/siwc/token-sharing-open-source) concernant la connexion via un forfait de compte.

#### Utiliser une clé API
{: #use-an-api-key}

1. Créez une clé à l'aide du lien du fournisseur affiché à l'étape 2. Vérifiez que le projet ou le compte a accès aux modèles que vous prévoyez d'utiliser.
2. Pour **ChatGPT**, sélectionnez **Utiliser une clé API** (Use API Key). Les autres fournisseurs hébergés affichent directement la page de saisie de la clé.
3. Collez la clé dans **Clé API** (API key). Elle est masquée ; **Afficher la clé API** (Show API key) la révèle pendant la saisie si nécessaire.
4. Pour **Compatible OpenAI**, saisissez également l'**URL de base de l'API** (API base URL) du service.
5. Cliquez sur **Suivant** (Next). TinyCAD vérifie la connexion et récupère automatiquement les modèles disponibles.

![Saisie de la clé API ChatGPT avec un champ de clé masqué et des instructions du fournisseur](../images/ai-assistant/setup-api-key.png)

Si un point de terminaison ne peut pas répertorier les modèles, TinyCAD vous demande un **ID de modèle** (Model ID) à l'étape 2. Saisissez l'identifiant exact du fournisseur et cliquez de nouveau sur **Suivant** ; un bref message de bienvenue permet de le vérifier. Ces vérifications peuvent utiliser le quota du fournisseur. En cas d'échec de la connexion, l'assistant reste à l'étape 2 et affiche l'erreur.

Pour Gemini, créez ou sélectionnez un projet dans Google AI Studio, puis copiez sa clé API dans TinyCAD. La [page des tarifs de l'API Gemini de Google](https://ai.google.dev/gemini-api/docs/pricing) explique quels modèles et usages sont admissibles à l'offre gratuite. Les modèles payants ou un usage plus important peuvent nécessiter une facturation.

![Configuration de Google Gemini avec le lien de clé Google AI Studio](../images/ai-assistant/setup-gemini.png)

### 3. Choisir un modèle et un niveau de réflexion
{: #pick-a-model-and-thinking-level}

Une fois la connexion établie, choisissez un modèle à l'étape **Étape 3 — Choisir un modèle** (Step 3 — Pick Model), réglez **Réflexion** (Thinking), puis cliquez sur **Terminer** (Finish).

![Sélection du modèle et curseur Réflexion à la dernière étape de la configuration](../images/ai-assistant/setup-model.png)

La liste de modèles illustrée ici est un exemple ; votre liste dépend du fournisseur, du point de terminaison et du compte. ChatGPT affiche les modèles Sol, Luna et Astra pris en charge et renvoyés par votre connexion. Les versions les plus récentes apparaissent en premier ; les anciens choix se trouvent sous **Plus de modèles** (More models), et jusqu'à six choix récents sont mémorisés.

Choisissez un modèle prenant en charge les **outils** afin qu'il puisse examiner et modifier des documents TinyCAD. Pour interpréter des images de circuits ou des fiches techniques contenant des schémas, choisissez également un modèle prenant en charge la **vision**. Un point de terminaison général de clavardage textuel ne suffit pas pour toutes les tâches.

Le réglage **Réflexion** va de **Minimale** (Minimal) à **Maximale** (Max), avec **Moyenne** (Medium) comme valeur initiale. Les niveaux disponibles dépendent du fournisseur. Les réglages plus élevés peuvent prendre plus de temps et consommer davantage de quota ; Max correspond au niveau pris en charge le plus élevé de ce fournisseur. Vous pouvez modifier le modèle et le niveau de réflexion entre les réponses à l'aide de l'icône de modèle à côté de la zone de message.

### Autre solution : utiliser Ollama local
{: #alternative-use-local-ollama}

1. [Installez Ollama](https://ollama.com/download) et démarrez son serveur.
2. Téléchargez un modèle prenant en charge les [appels d'outils](https://docs.ollama.com/capabilities/tool-calling), en utilisant `ollama pull MODEL_NAME` avec le nom réel du modèle. Pour les tâches impliquant des images ou des PDF, vérifiez également la prise en charge de la vision et la capacité de contexte.
3. À l'étape du fournisseur dans TinyCAD, choisissez **Ollama (hébergé localement)**.
4. Utilisez l'**URL de l'API Ollama** (Ollama API URL), normalement `http://localhost:11434/v1`, puis cliquez sur **Suivant** pour répertorier les modèles installés.
5. Choisissez un modèle et un niveau de réflexion, puis cliquez sur **Terminer**.

![Configuration d'Ollama affichant l'URL de l'API locale et des indications sur l'origine du navigateur](../images/ai-assistant/setup-ollama.png)

La connexion Ollama accepte les URL localhost/de boucle locale. Pour un serveur distant, choisissez **Compatible OpenAI**. Fournissez à un modèle local un contexte suffisant pour la conversation et les outils TinyCAD ; consultez la [configuration du contexte d'Ollama](https://docs.ollama.com/api/openai-compatibility#setting-the-local-context-size).

Les requêtes envoyées à Ollama local vont directement au serveur local. Pour l'inférence locale, choisissez un modèle exécuté localement : les modèles cloud configurés par l'intermédiaire d'un serveur Ollama peuvent tout de même utiliser un service cloud.

## Utiliser l'assistant pendant le dessin
{: #use-the-assistant-while-drawing}

Saisissez une demande dans la zone de message et cliquez sur **Envoyer** (Send), ou appuyez sur **Entrée** (Enter). Utilisez **Maj+Entrée** (Shift+Enter) pour passer à la ligne. Commencez par une tâche bien délimitée, examinez le résultat, puis demandez la modification suivante.

![Panneau de clavardage connecté avec un exemple de demande prêt à être envoyé](../images/ai-assistant/chat-ready.png)

Précisez la feuille cible, les références, les valeurs et les connexions. « Relie le haut de R2 à OUT sur la feuille Control » est plus facile à vérifier que « répare le fil ». Indiquez ce qui doit rester inchangé lors de l'extension d'un circuit existant.

L'assistant peut examiner le contenu non enregistré de l'éditeur. Après avoir vérifié son travail, enregistrez normalement le dessin ou la bibliothèque. Les dessins incorporent leurs symboles ; enregistrez les définitions réutilisables dans une bibliothèque personnalisée si vous souhaitez les réutiliser dans d'autres projets.

**En cours** (Working) regroupe l'activité des outils et les mises à jour intermédiaires dans une ligne repliable. Ouvrez-la pour consulter les détails de progression, les résultats des outils et les images examinées par le modèle. La réponse finale apparaît séparément. Lorsque la connexion le permet, l'assistant peut afficher les résumés de réflexion fournis par le fournisseur ; ce réglage ne révèle pas toutes les étapes du raisonnement interne.

Utilisez **Arrêter** (Stop) pour annuler la requête en cours. Les modifications déjà appliquées restent dans le document. **Annuler** (Undo) et **Rétablir** (Redo) fonctionnent avec les modifications de l'IA comme avec les modifications habituelles ; une requête comportant plusieurs étapes peut produire plusieurs modifications annulables. Si vous modifiez le dessin pendant que l'assistant travaille, une écriture ultérieure peut être rejetée parce que sa source n'est plus à jour. Demandez-lui de relire le dessin et de continuer.

L'icône **Nouvelle discussion** (New chat) de l'en-tête efface la conversation, le brouillon et les pièces jointes. Elle n'annule pas les modifications du dessin. Le changement de modèle conserve la conversation ; la connexion à un autre fournisseur ou à une autre clé démarre une nouvelle discussion.

### Joindre des fiches techniques et des images de circuits
{: #attach-datasheets-and-circuit-images}

Utilisez **Importer un PDF/une image** (Import PDF/image) à côté des commandes de message pour joindre des fichiers PDF, PNG, JPEG ou WebP. Vous pouvez joindre jusqu'à **six fichiers totalisant 10 Mio** ; les limites du fournisseur s'appliquent également. Demandez la variante exacte du composant, son boîtier et les pages pertinentes du PDF, et précisez si le schéma des broches est une vue de dessus ou de dessous.

Pour les points de terminaison compatibles et Ollama, **Pages PDF** (PDF pages) permet de sélectionner les pages à convertir localement, par exemple `1-4,12` ; laissez le champ vide pour inclure toutes les pages, dans la limite de conversion de 20 pages. Sélectionnez moins de pages si les images converties dépassent 10 Mio. ChatGPT/OpenAI, Claude et Gemini reçoivent directement les PDF. La capacité à lire les schémas dépend toujours du modèle choisi.

La recherche dans la bibliothèque publique de symboles TinyCAD est disponible indépendamment de la navigation Web générale. La recherche Web native est disponible pour les connexions admissibles **Se connecter avec ChatGPT** lorsque la politique du modèle/compte le permet ; les citations apparaissent sous forme de liens dans la réponse. Les connexions par clé API et les autres fournisseurs ne bénéficient actuellement pas de la recherche Web générale via TinyCAD. Joignez la fiche technique ou l'image pertinente si l'assistant ne peut pas ouvrir le site Web du fabricant.

## Exemples de requêtes
{: #example-prompts}

Utilisez-les comme points de départ. Remplacez le composant, le boîtier, les numéros de broches et les exigences d'alimentation par ceux de votre projet.

### Créer un symbole à partir d'une fiche technique
{: #create-a-symbol-from-a-datasheet}

Ouvrez le dessin souhaité et joignez la fiche technique :

> Crée un symbole compact pour le NE555P en boîtier PDIP à 8 broches à partir de cette fiche technique. Vérifie chaque numéro de broche physique, nom et type électrique. Recherche d'abord les symboles existants. Place les broches d'alimentation en haut et la masse en bas, valide le symbole et place-le dans ce dessin, prêt à être câblé. Signale tout élément que tu ne peux pas vérifier.

Pour un module physique plutôt que le contour d'un circuit intégré classique :

> À partir du schéma de brochage joint pour cette révision exacte de la carte capteur, crée un symbole modifiable montrant le contour du PCB et les contacts d'en-tête étiquetés dans leur ordre physique. Garde-le suffisamment compact pour un plan de câblage A4. Place des points de connexion sur les pastilles de l'en-tête et utilise une petite icône de température pour indiquer sa fonction.

### Créer une bibliothèque réutilisable
{: #build-a-reusable-library}

Commencez par créer ou ouvrir une `.tclib` personnalisée pour la modifier :

> Ajoute une petite bibliothèque de composants d'interface à unité unique : un PC817 en DIP-4, un ULN2003A en DIP-16 et un connecteur à bornier 4 voies de 2,54 mm. Utilise les fiches techniques jointes pour les brochages des circuits intégrés. Donne à chaque composant un nom clair, une description et un préfixe de référence, valide-le et ajoute-le à cette bibliothèque ouverte. Préserve le symbole que je suis en train de modifier.

Poursuivez avec un autre lot après avoir vérifié le premier. Enregistrez normalement le `.tclib`, ou demandez explicitement une bibliothèque téléchargeable si c'est le résultat souhaité.

### Créer un circuit complet
{: #create-a-complete-circuit}

> Sur la feuille actuelle, dessine un oscillateur astable NE555 de 5 V utilisant le composant PDIP-8. Vise environ 1 Hz. Ajoute les résistances et le condensateur de temporisation, la connexion de réinitialisation, le condensateur de la broche de commande, le découplage de l'alimentation et une LED de sortie avec une résistance de limitation de courant. Explique le calcul de la temporisation, vérifie les connexions physiques des broches et mets la disposition en ordre. Énumère les hypothèses et les éventuels problèmes de vérification des règles de conception non résolus.

Cette demande vise une conception modifiable et des calculs. Pour établir le comportement simulé, examinez les modèles et utilisez vous-même la [Simulation](../Simulation/) ; une explication de l'IA formulée avec assurance ne constitue pas une exécution de simulateur enregistrée.

### Trouver ou joindre un modèle SPICE
{: #find-or-attach-a-spice-model}

Demandez explicitement la prise en charge de SPICE ou de la simulation. L'assistant peut rechercher des [modèles SPICE fournis](../Bundled-SPICE-Models/) sans effectuer de recherche Web et examiner leurs sources, hypothèses et ordre des bornes. Si le modèle exact n'est pas disponible, demandez-lui d'évaluer un modèle de remplacement direct documenté ou une approximation générique. Vérifiez indépendamment le brochage du boîtier.

> Trouve un modèle SPICE fourni pour Q1 et indique-moi comment ses bornes correspondent au symbole. Ne modifie pas le dessin avant que j'aie examiné la source et les hypothèses.

Pour modifier le dessin, demandez à l'assistant de joindre le modèle après avoir vérifié la correspondance des broches. Si vous lui demandez de créer un composant de bibliothèque réutilisable avec prise en charge de SPICE, il peut définir une définition fournie ou personnalisée pour les placements futurs.

### Ajouter des composants sans redessiner le circuit
{: #add-parts-without-redrawing-the-circuit}

> Ajoute un condensateur de découplage de 100 nF entre l'alimentation et la masse de U1, près de U1. Identifie les broches d'alimentation réelles avant le câblage. Garde le reste du circuit, les références et les valeurs inchangés, puis vérifie les nets concernés.

> Ajoute un connecteur étiqueté à 4 broches pour +3V3, GND, SDA et SCL sur la feuille Sensors. Relie SDA et SCL aux nets étiquetés existants. Utilise les résistances de rappel existantes, s'il y en a, et indique-moi si des résistances supplémentaires sont nécessaires avant d'en ajouter.

### Reconstituer un schéma joint
{: #reconstruct-an-attached-diagram}

> Recrée le circuit de la page 3 du PDF joint sous forme de composants et de fils TinyCAD modifiables sur une nouvelle feuille. Préserve les valeurs et étiquettes indiquées. Pose des questions sur les valeurs illisibles ou les croisements de fils ambigus au lieu de deviner. Compare les nets reconstitués à l'image et mets la feuille terminée en ordre.

### Expliquer, examiner ou améliorer un dessin existant
{: #explain-inspect-or-improve-an-existing-drawing}

> Explique le chemin du signal de J1 à U2 et énumère les composants et les broches physiques connectés à OUT. Ne modifie pas le dessin.

> Vérifie si le dessin actuel comporte des broches requises non connectées, des sorties en conflit ou des étiquettes d'alimentation incohérentes. Indique la feuille et la référence pour chaque problème, et propose des modifications avant de les appliquer.

> Mets en ordre uniquement le bloc de commande du moteur autour de U3 et J4. Garde ses connexions et ses valeurs inchangées et laisse le bloc d'entrée d'alimentation à sa place.

## Paramètres, confidentialité et enregistrement
{: #settings-privacy-and-saving}

L'engrenage **Paramètres de l'IA** (AI settings) affiche le fournisseur et la méthode de connexion actuels, ainsi que les réglages de modèle/réflexion et **Enregistrer** (Save). Pour une connexion par clé, il propose **Effacer la clé API** (Clear API key) ; pour un compte ChatGPT, **Se déconnecter** (Sign out) ; pour Ollama local, **Déconnecter Ollama** (Disconnect Ollama). Déconnectez-vous d'abord pour configurer un autre fournisseur. **Annuler** (Cancel) conserve la connexion existante et les paramètres enregistrés.

![Paramètres de l'IA pour une connexion existante par clé API](../images/ai-assistant/connection-settings.png)

Les clés API et l'historique des conversations restent dans la mémoire de l'application ; les clés ne sont pas enregistrées avec les préférences ni les dessins. Vous devez saisir de nouveau une clé API après un rechargement ou un redémarrage. Les préférences non secrètes relatives au fournisseur, au point de terminaison, au modèle et à la réflexion peuvent être mémorisées. L'autorisation du compte ChatGPT est gérée séparément par l'environnement d'exécution local et peut persister après les redémarrages ; Desktop utilise le chiffrement sécurisé du système d'exploitation lorsqu'il est disponible.

Pour l'IA hébergée, les messages, les pièces jointes et le contenu ou les aperçus du document demandés par ses outils sont envoyés au fournisseur sélectionné. Les connexions hébergées par clé API envoient les requêtes directement au point de terminaison sélectionné ; TinyCAD ne fournit pas de relais vers un fournisseur. Les services compatibles doivent autoriser l'accès depuis le navigateur (CORS) et utiliser normalement HTTPS ; localhost fait exception. Pour un flux de travail entièrement local, utilisez un modèle Ollama local et des documents de référence locaux fournis, et évitez les recherches de symboles en ligne ou les modèles cloud.

Les composants et circuits générés nécessitent toujours une vérification technique. Vérifiez les brochages exacts des boîtiers, les puissances nominales, la tension d'alimentation, les niveaux logiques et les limites de fonctionnement à l'aide des fiches techniques réelles. La validation structurelle de TinyCAD, la vérification des règles de conception et les contrôles de connexion de la disposition aident à détecter les erreurs ; ils ne prouvent pas que le circuit fonctionne, ne remplacent pas la simulation et n'établissent pas que le matériel a été testé.

## Dépannage
{: #troubleshooting}

| Symptôme | Points à vérifier |
| --- | --- |
| **Chat est indisponible ou absent** | Utilisez une version actuelle de TinyCAD v4. Ouvrez le dessin ou la bibliothèque souhaités et recherchez Chat dans leur barre d'outils. |
| **La connexion à un compte ChatGPT est indisponible** | Utilisez Desktop ou une version hébergée localement avec l'environnement d'exécution du compte. Dans l'application publique hébergée, choisissez Utiliser une clé API. Autorisez l'ouverture de la fenêtre de connexion externe et activez l'utilisation du forfait ChatGPT lors du consentement. |
| **Impossible de passer à l'étape 2** | Lisez l'erreur de connexion affichée. Vérifiez la clé, l'accès aux modèles, la facturation/le quota de l'API, l'URL du point de terminaison et la connexion Internet. TinyCAD effectue cette vérification lorsque vous cliquez sur Suivant. |
| **Aucun modèle ne s'affiche** | Vérifiez l'accès au fournisseur. Pour les points de terminaison sans découverte de modèles, saisissez l'ID de modèle demandé. Installez un modèle prenant en charge les outils avant de connecter Ollama. |
| **Impossible de se connecter à Ollama local** | Démarrez le serveur, vérifiez l'URL de l'API locale, autorisez l'origine exacte de TinyCAD dans OLLAMA_ORIGINS, redémarrez Ollama et autorisez l'accès du navigateur au réseau local si cela est demandé. |
| **L'assistant répond, mais ne peut pas modifier le dessin ni lire les images** | Vérifiez la prise en charge des outils/de la vision par le modèle. Joignez une image lisible recadrée ou un nombre réduit de pages PDF. |
| **Un outil signale que le dessin a changé** | Laissez l'assistant relire l'état actuel et réessayer. Les modifications déjà appliquées restent disponibles avec Annuler. |
| **Une réponse s'interrompt à cause d'une limite du fournisseur** | Essayez une tâche plus petite ou un niveau de réflexion inférieur. TinyCAD peut réessayer automatiquement les réponses incomplètes ; ces tentatives peuvent consommer du quota supplémentaire. Les modifications terminées restent annulables. |

Poursuivez avec les [bibliothèques de symboles personnalisées](../Custom-symbol-libraries/), la [modification des symboles](../Editing-a-Symbol/), la [mise en ordre de la disposition](../Layout-Tidy-Up/) ou la [simulation](../Simulation/).

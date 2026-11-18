---
layout: default
---
# Assistant IA
{: #ai-assistant}

L’assistant IA de TinyCAD transforme des instructions écrites, des fiches techniques et des images de circuits en symboles et schémas modifiables. Il fonctionne avec l’éditeur habituel : vous pouvez lui demander de créer un circuit, d’ajouter des composants au dessin déjà ouvert, de constituer une bibliothèque de symboles ou d’expliquer une connexion existante.

**Ordinateur de bureau uniquement :** l’assistant IA (chatbot) est disponible uniquement dans l’application TinyCAD Desktop. Il n’est pas disponible dans la version navigateur.

Dans l’application Desktop, ouvrez **Chat** dans la barre d’outils pour l’utiliser. Connectez un fournisseur d’IA avant d’envoyer votre premier message ; les options de connexion sont expliquées ci-dessous.

## Ce qu’il peut faire
{: #what-it-can-do}

| Tâche | Comment l’assistant aide |
| --- | --- |
| **Créer un symbole de composant** | Générer un dessin modifiable, les numéros physiques des broches, leurs noms et leurs types électriques à partir d’un composant et d’un boîtier spécifiés. Joignez la fiche technique du fabricant si le brochage est important. |
| **Créer ou étendre une bibliothèque de symboles** | Ajouter plusieurs composants réutilisables à la bibliothèque `.tclib` ouverte pour modification, avec leurs noms, descriptions et correspondances de broches. Les collections plus importantes peuvent être constituées par lots successifs. |
| **Dessiner un circuit** | Trouver les symboles appropriés, placer les composants, définir les valeurs et les références, relier les broches avec des fils et des étiquettes, et ajouter des notes explicatives. |
| **Étendre un dessin existant** | Ajouter un connecteur, un condensateur de découplage, un capteur, un driver ou un autre bloc fonctionnel tout en conservant le reste du dessin. |
| **Expliquer ou inspecter un circuit** | Lire le dessin et la netlist actuels, décrire les chemins des signaux, identifier les broches d’un net et examiner les problèmes de connectivité ou les erreurs de vérification des règles de conception. |
| **Reconstruire un dessin à partir d’un document** | Lire un PDF ou une image de circuit jointe et créer une première version modifiable, en posant des questions sur les éléments ou connexions peu clairs. |
| **Réorganiser une mise en page** | Réagencer une feuille entière ou une partie spécifiée, à l’aide des vérifications de mise en page et de connexion de TinyCAD. |
| **Exporter un résultat** | Produire un dessin ou une bibliothèque de symboles téléchargeable lorsque vous demandez explicitement un fichier. |

Les résultats sont des objets TinyCAD que vous pouvez sélectionner, modifier, câbler et enregistrer. Dans un dessin, les symboles nouvellement créés sont placés et prêts à être connectés. Dans une bibliothèque, les nouveaux composants deviennent des entrées de cette bibliothèque. Il n’est pas nécessaire de copier du XML depuis la conversation ni de configurer un serveur MCP distinct.

L’assistant consulte d’abord les [bibliothèques fournies](../Bundled-Libraries/), puis recherche dans la collection publique TinyCAD.net si nécessaire. Il peut rechercher dans les collections fournies qui ne sont pas actuellement sélectionnées dans le sélecteur de bibliothèque. La recherche de symboles publics nécessite une connexion Internet, même si vous utilisez un modèle d’IA local.

Pour les composants réutilisables, commencez par [créer ou ouvrir une bibliothèque personnalisée pour la modifier](../Custom-symbol-libraries/), puis ouvrez Chat dans la fenêtre de cette bibliothèque. Pour un circuit, gardez active la fenêtre du dessin voulu. Indiquez à l’assistant la feuille, les références des composants ou le bloc fonctionnel concernés. La récupération et le placement de symboles par l’IA prennent actuellement en charge les **symboles à unité unique** ; utilisez l’éditeur de symboles habituel pour les composants multi-unités que l’assistant ne peut pas importer.

{% include video-player.html src="/v4/videos/ai-assistant/ai-assistant-demo.mp4" poster="/v4/images/ai-assistant/chat-open-desktop.png" caption="Créer un symbole à partir d’une fiche technique dans TinyCAD Desktop. Les temps d’attente du traitement par l’IA sont affichés à une vitesse multipliée par 12 et signalés à l’écran ; les interactions et les résultats sont affichés à vitesse normale." %}

## Configurer une connexion
{: #set-up-a-connection}

### 1. Choisir un fournisseur
{: #choose-a-provider}

1. Ouvrez **Chat** dans la barre d’outils.
2. Cliquez sur **Click here to Sign in to use AI**, ou sur l’engrenage **AI settings** dans l’en-tête du panneau.
3. À l’étape **Step 1 — Choose provider**, sélectionnez un fournisseur, puis cliquez sur **Next**.

![Paramètres de l’IA affichant l’étape Provider](../images/ai-assistant/setup-provider.png)

Vous ne pouvez connecter qu’un seul fournisseur à la fois.

| Fournisseur dans TinyCAD | Ce dont vous avez besoin |
| --- | --- |
| **ChatGPT** | Soit un compte ChatGPT payant admissible, avec **Sign In with ChatGPT**, soit une clé API OpenAI avec **Use API Key**. La connexion au compte est disponible dans l’application Desktop. |
| **Anthropic Claude** | Une clé API depuis la [Claude Console](https://platform.claude.com/settings/keys), avec accès API et facturation pour les modèles utilisés. |
| **Google Gemini** | Une clé API depuis [Google AI Studio](https://aistudio.google.com/apikey). Certains modèles ont une offre API gratuite limitée ; disponibilité et quotas s’appliquent. |
| **OpenAI compatible** | La clé API du service, son URL de base API et un modèle prenant en charge l’appel d’outils. |
| **Ollama (hosted locally)** | Un serveur Ollama local en cours d’exécution et un modèle installé prenant en charge les outils. Les modèles locaux ne nécessitent pas de clé API. |

Un abonnement au site Web de conversation habituel d’un fournisseur ne donne pas automatiquement droit à la facturation API ni à une clé API. L’option explicite de connexion au compte ChatGPT est une méthode de connexion distincte. Pour Gemini, l’assistant de configuration utilise une clé API ; la connexion au stockage Google Drive de TinyCAD ne connecte pas son assistant IA.

### 2. Connecter un compte ou une clé API
{: #connect-an-account-or-api-key}

#### Utiliser un compte ChatGPT
{: #use-a-chatgpt-account}

Dans TinyCAD Desktop, choisissez **ChatGPT**, puis **Sign In with ChatGPT** à l’étape 2.

1. Cliquez sur **Sign in with ChatGPT**. Connectez-vous dans le navigateur externe.
2. Autorisez l’utilisation de votre forfait ChatGPT lorsque vous y êtes invité. Se connecter sans autoriser l’utilisation du forfait ne suffit pas pour envoyer des requêtes à l’IA.
3. Revenez dans TinyCAD et choisissez un modèle lorsque l’assistant passe à l’étape 3.

Si un compte est mémorisé, l’écran propose **Continue as …** ou **Sign in with a different account**. TinyCAD ne conserve qu’un seul compte à la fois. Après la connexion, **Using ChatGPT plan** et **Manage usage** apparaissent au-dessus de la zone de message. Le message affiché lors de la première utilisation explique que les requêtes consomment le quota de votre forfait ou les crédits disponibles.

![Paramètres IA de Desktop proposant Sign In with ChatGPT ou Use API Key](../images/ai-assistant/setup-chatgpt-desktop.png)

La connexion à ChatGPT nécessite un compte payant admissible ; les limites du compte, de l’espace de travail et de l’application continuent de s’appliquer. En cas de refus d’une requête, le système ne bascule pas silencieusement vers la facturation par clé API. Consultez la [documentation OpenAI sur la connexion avec ChatGPT](https://developers.openai.com/siwc/token-sharing-open-source) pour la connexion au forfait du compte.

#### Utiliser une clé API
{: #use-an-api-key}

1. Créez une clé à l’aide du lien du fournisseur affiché à l’étape 2. Vérifiez que le projet ou le compte a accès aux modèles que vous comptez utiliser.
2. Pour **ChatGPT**, sélectionnez **Use API Key**. Les autres fournisseurs hébergés affichent directement leur page de saisie de clé.
3. Collez la clé dans **API key**. Elle est masquée ; **Show API key** l’affiche pendant la saisie si nécessaire.
4. Pour **OpenAI compatible**, saisissez également l’**API base URL** du service.
5. Cliquez sur **Next**. TinyCAD vérifie la connexion et récupère automatiquement les modèles disponibles.

![Saisie d’une clé API ChatGPT avec un champ masqué et des instructions du fournisseur](../images/ai-assistant/setup-api-key.png)

Si un point de terminaison ne peut pas répertorier les modèles, TinyCAD demande un **Model ID** à l’étape 2. Saisissez l’identifiant exact du fournisseur et cliquez de nouveau sur **Next** ; un bref message de bienvenue le vérifie. Ces vérifications peuvent consommer le quota du fournisseur. En cas d’échec de connexion, l’assistant reste à l’étape 2 et affiche l’erreur.

Pour Gemini, créez ou sélectionnez un projet dans Google AI Studio et copiez sa clé API dans TinyCAD. La [page des tarifs de l’API Gemini de Google](https://ai.google.dev/gemini-api/docs/pricing) explique quels modèles et usages sont admissibles à l’offre gratuite. Les modèles payants ou un usage plus important peuvent nécessiter une facturation.

![Configuration de Google Gemini avec le lien vers la clé Google AI Studio](../images/ai-assistant/setup-gemini.png)

### 3. Choisir un modèle et un niveau de réflexion
{: #pick-a-model-and-thinking-level}

Une fois la connexion établie, choisissez un modèle dans **Step 3 — Pick Model**, réglez **Thinking**, puis cliquez sur **Finish**.

![Sélection du modèle et curseur Thinking dans la dernière étape de configuration](../images/ai-assistant/setup-model.png)

La liste de modèles de cette illustration est un exemple ; votre liste dépend du fournisseur, du point de terminaison et du compte. ChatGPT affiche les modèles Sol, Luna et Astra pris en charge et renvoyés par votre connexion. Les versions les plus récentes s’affichent en premier ; les choix plus anciens se trouvent sous **More models**, et jusqu’à six choix récents sont mémorisés.

Choisissez un modèle prenant en charge les **outils** afin qu’il puisse inspecter et modifier les documents TinyCAD. Pour interpréter des images de circuits ou des fiches techniques contenant des schémas, choisissez également un modèle prenant en charge la **vision**. Un point de terminaison de conversation textuelle général ne convient pas à toutes les tâches.

**Thinking** va de **Minimal** à **Max**, avec **Medium** comme valeur initiale. Les niveaux disponibles dépendent du fournisseur. Des réglages plus élevés peuvent prendre plus de temps et consommer davantage de quota ; Max correspond au niveau le plus élevé pris en charge par le fournisseur. Vous pouvez changer de modèle et de niveau de réflexion entre les réponses à l’aide de l’icône de modèle à côté de la zone de message.

### Autre option : utiliser Ollama en local
{: #alternative-use-local-ollama}

1. [Installez Ollama](https://ollama.com/download) et démarrez son serveur.
2. Téléchargez un modèle prenant en charge [l’appel d’outils](https://docs.ollama.com/capabilities/tool-calling), en utilisant `ollama pull MODEL_NAME` avec le nom réel du modèle. Pour les tâches liées aux images/PDF, vérifiez également sa prise en charge de la vision et la capacité de son contexte.
3. Dans l’étape de sélection du fournisseur de TinyCAD, choisissez **Ollama (hosted locally)**.
4. Utilisez **Ollama API URL**, généralement `http://localhost:11434/v1`, puis cliquez sur **Next** pour répertorier les modèles installés.
5. Choisissez un modèle et un niveau de réflexion, puis cliquez sur **Finish**.

![Configuration d’Ollama affichant l’URL API locale et les indications relatives à l’origine du navigateur](../images/ai-assistant/setup-ollama.png)

La connexion Ollama accepte les URL localhost/de bouclage. Pour un serveur distant, choisissez plutôt **OpenAI compatible**. Fournissez à un modèle local un contexte suffisamment grand pour la conversation et les outils TinyCAD ; consultez la [configuration du contexte d’Ollama](https://docs.ollama.com/api/openai-compatibility#setting-the-local-context-size).

Les requêtes vers Ollama local sont envoyées directement au serveur local. Choisissez un modèle exécuté localement pour une inférence locale : les modèles cloud configurés via un serveur Ollama peuvent tout de même utiliser un service cloud.

## Utiliser l’assistant pendant le dessin
{: #use-the-assistant-while-drawing}

Saisissez une demande dans la zone de message et cliquez sur **Send**, ou appuyez sur **Enter**. Utilisez **Shift+Enter** pour passer à la ligne suivante. Commencez par une tâche délimitée, examinez le résultat, puis demandez la modification suivante.

![Panneau de conversation connecté avec un exemple de demande prêt à être envoyé](../images/ai-assistant/chat-ready.png)

Précisez la feuille cible, les références, les valeurs et les connexions. « Relie le haut de R2 à OUT sur la feuille Control » est plus facile à vérifier que « répare le fil ». Indiquez ce qui doit rester inchangé lors de l’extension d’un circuit existant.

L’assistant peut inspecter le contenu non enregistré de l’éditeur. Enregistrez normalement le dessin ou la bibliothèque après avoir vérifié son travail. Les dessins intègrent leurs symboles ; enregistrez les définitions réutilisables dans une bibliothèque personnalisée si vous souhaitez les réutiliser dans d’autres projets.

**Working** regroupe l’activité des outils et les mises à jour intermédiaires dans une ligne repliable. Ouvrez-la pour consulter les détails de progression, les résultats des outils et les images inspectées par le modèle. La réponse finale apparaît séparément. Lorsque la connexion le permet, l’assistant peut afficher les résumés de réflexion fournis par le fournisseur ; ce réglage ne révèle pas toutes les étapes internes du raisonnement.

Utilisez **Stop** pour annuler la requête en cours. Les modifications déjà appliquées restent dans le document. **Undo** et **Redo** fonctionnent avec les modifications de l’IA comme avec celles apportées par l’édition habituelle ; une requête en plusieurs étapes peut créer plusieurs modifications annulables. Si vous modifiez le dessin pendant que l’assistant travaille, une écriture ultérieure peut être rejetée parce que sa source n’est plus à jour. Demandez-lui de relire le dessin et de poursuivre.

L’icône **New chat** de l’en-tête efface la conversation, le brouillon et les pièces jointes. Elle n’annule pas les modifications apportées au dessin. Changer de modèle conserve la conversation ; connecter un autre fournisseur ou une autre clé démarre une nouvelle conversation.

### Joindre des fiches techniques et des images de circuits
{: #attach-datasheets-and-circuit-images}

Utilisez **Import PDF/image** à côté des commandes de message pour joindre des fichiers PDF, PNG, JPEG ou WebP. Vous pouvez joindre jusqu’à **six fichiers totalisant 10 MiB** ; les limites du fournisseur s’appliquent également. Indiquez le modèle exact du composant, son boîtier et les pages PDF pertinentes, et précisez si un schéma des broches représente une vue de dessus ou de dessous.

Pour les points de terminaison compatibles et Ollama, **PDF pages** permet de sélectionner les pages à convertir localement en images, par exemple `1-4,12` ; laissez ce champ vide pour toutes les pages dans la limite de conversion de 20 pages. Sélectionnez moins de pages si les images converties dépassent 10 MiB. ChatGPT/OpenAI, Claude et Gemini reçoivent directement les PDF. La capacité à lire les schémas dépend toujours du modèle choisi.

La recherche dans la bibliothèque publique de symboles TinyCAD est disponible indépendamment de la navigation Web générale. La recherche Web native est accessible aux connexions **Sign in with ChatGPT** admissibles lorsque la politique du modèle/compte l’autorise ; les citations apparaissent sous forme de liens dans la réponse. Les connexions par clé API et les autres fournisseurs ne bénéficient actuellement pas de la recherche Web générale via TinyCAD. Joignez la fiche technique ou l’image pertinente si l’assistant ne peut pas ouvrir le site Web du fabricant.

## Exemples de requêtes
{: #example-prompts}

Utilisez ces exemples comme point de départ. Remplacez le composant, le boîtier, les numéros de broche et les exigences d’alimentation par ceux de votre projet.

### Créer un symbole à partir d’une fiche technique
{: #create-a-symbol-from-a-datasheet}

Ouvrez le dessin voulu et joignez la fiche technique :

> Crée un symbole compact pour le NE555P en boîtier PDIP à 8 broches à partir de cette fiche technique. Vérifie chaque numéro de broche physique, son nom et son type électrique. Recherche d’abord les symboles existants. Place les broches d’alimentation en haut et la masse en bas, valide le symbole et place-le dans ce dessin, prêt à être câblé. Signale tout élément que tu ne peux pas vérifier.

Pour un module physique plutôt que le contour classique d’un circuit intégré :

> À partir du schéma de brochage joint pour cette révision précise de la carte capteur, crée un symbole modifiable montrant le contour du PCB et les contacts de l’en-tête étiquetés dans leur ordre physique. Fais-le suffisamment compact pour un plan de câblage A4. Place les points de connexion sur les pastilles de l’en-tête et utilise une petite icône de température pour identifier sa fonction.

### Constituer une bibliothèque réutilisable
{: #build-a-reusable-library}

Commencez par créer ou ouvrir une `.tclib` personnalisée pour la modifier :

> Ajoute une petite bibliothèque de composants d’interface à unité unique : un PC817 en DIP-4, un ULN2003A en DIP-16 et un connecteur à bornier 4 voies de 2,54 mm. Utilise les fiches techniques jointes pour le brochage des circuits intégrés. Attribue à chaque composant un nom clair, une description et un préfixe de référence, valide-le et ajoute-le à cette bibliothèque ouverte. Conserve le symbole que je suis en train de modifier.

Poursuivez avec un autre lot après avoir vérifié le premier. Enregistrez normalement la `.tclib` ou demandez explicitement une bibliothèque téléchargeable si c’est le résultat souhaité.

### Créer un circuit complet
{: #create-a-complete-circuit}

> Sur la feuille actuelle, dessine un oscillateur astable NE555 de 5 V utilisant le composant PDIP-8. Vise environ 1 Hz. Inclus les résistances et le condensateur de temporisation, la connexion de réinitialisation, le condensateur de la broche de commande, le découplage de l’alimentation et une LED de sortie avec une résistance de limitation de courant. Explique le calcul de la temporisation, vérifie les connexions des broches physiques et réorganise la mise en page. Énumère les hypothèses et tout problème de vérification des règles de conception non résolu.

Cette demande porte sur une conception modifiable et des calculs. Pour établir le comportement simulé, examinez les modèles et utilisez vous-même la [Simulation](../Simulation/) ; une explication convaincante de l’IA ne constitue pas un essai de simulation enregistré.

### Ajouter des composants sans redessiner le circuit
{: #add-parts-without-redrawing-the-circuit}

> Ajoute un condensateur de découplage de 100 nF entre l’alimentation et la masse de U1, près de U1. Identifie ses véritables broches d’alimentation avant le câblage. Conserve inchangés le reste du circuit, les références et les valeurs, puis vérifie les nets concernés.

> Ajoute un connecteur étiqueté à 4 broches pour +3V3, GND, SDA et SCL sur la feuille Sensors. Connecte SDA et SCL aux nets étiquetés existants. Utilise les résistances de rappel existantes si elles sont présentes et indique-moi si des résistances de rappel supplémentaires sont nécessaires avant d’en ajouter.

### Reconstruire un schéma joint
{: #reconstruct-an-attached-diagram}

> Recrée le circuit de la page 3 du PDF joint avec des composants et des fils TinyCAD modifiables sur une nouvelle feuille. Conserve les valeurs et les étiquettes indiquées. Demande des précisions sur les valeurs illisibles ou les croisements de fils ambigus au lieu de deviner. Compare les nets reconstruits à l’image et réorganise la feuille terminée.

### Expliquer, inspecter ou améliorer un dessin existant
{: #explain-inspect-or-improve-an-existing-drawing}

> Explique le chemin du signal de J1 à U2 et énumère les composants et les broches physiques connectés à OUT. Ne modifie pas le dessin.

> Vérifie si le dessin actuel comporte des broches requises non connectées, des sorties en conflit et des étiquettes d’alimentation incohérentes. Indique la feuille et la référence pour chaque problème, et propose des modifications avant de les appliquer.

> Réorganise uniquement le bloc de commande du moteur autour de U3 et J4. Conserve ses connexions et ses valeurs et laisse le bloc d’entrée d’alimentation à sa place.

## Paramètres, confidentialité et enregistrement
{: #settings-privacy-and-saving}

L’engrenage **AI settings** affiche le fournisseur et la méthode de connexion actuels, avec les commandes du modèle/de la réflexion et **Save**. Pour une connexion par clé, il propose **Clear API key** ; pour un compte ChatGPT, **Sign out** ; pour Ollama local, **Disconnect Ollama**. Déconnectez d’abord le fournisseur pour en configurer un autre. **Cancel** conserve la connexion existante et les paramètres enregistrés.

![Paramètres IA pour une connexion existante par clé API](../images/ai-assistant/connection-settings.png)

Les clés API et l’historique des conversations restent dans la mémoire de l’application ; les clés ne sont pas enregistrées avec les préférences ou les dessins. Vous devrez saisir de nouveau une clé API après le rechargement ou le redémarrage. Les préférences non secrètes relatives au fournisseur, au point de terminaison, au modèle et à la réflexion peuvent être mémorisées. L’autorisation du compte ChatGPT est gérée séparément par l’environnement d’exécution local et peut survivre aux redémarrages ; Desktop utilise le chiffrement sécurisé du système d’exploitation lorsqu’il est disponible.

Pour l’IA hébergée, les messages, les pièces jointes et le contenu du document ou ses aperçus demandés par ses outils sont envoyés au fournisseur sélectionné. Les connexions hébergées par clé API envoient les requêtes directement au point de terminaison sélectionné ; TinyCAD ne fournit pas de relais vers le fournisseur. Les services compatibles doivent autoriser l’accès depuis le navigateur (CORS) et utilisent normalement HTTPS ; localhost fait exception. Pour un flux de travail entièrement local, utilisez un modèle Ollama local et des documents de référence locaux, et évitez les recherches de symboles en ligne ou les modèles cloud.

Les composants et circuits générés doivent tout de même faire l’objet d’une vérification technique. Vérifiez le brochage exact du boîtier, les puissances nominales, la tension d’alimentation, les niveaux logiques et les limites de fonctionnement dans les fiches techniques réelles. La validation structurelle de TinyCAD, les vérifications des règles de conception et les contrôles de connexion de la mise en page aident à détecter les erreurs ; ils ne prouvent pas que le circuit fonctionne, ne remplacent pas la simulation et n’établissent pas que le matériel a été testé.

## Dépannage
{: #troubleshooting}

| Symptôme | Points à vérifier |
| --- | --- |
| **Chat est indisponible ou absent** | Utilisez une version actuelle de TinyCAD v4. Ouvrez le dessin ou la bibliothèque voulu et cherchez Chat dans sa barre d’outils. |
| **La connexion au compte ChatGPT est indisponible** | Utilisez Desktop ou une version hébergée localement disposant de l’environnement d’exécution du compte. Dans l’application publique hébergée, choisissez Use API Key. Autorisez l’ouverture de la fenêtre de connexion externe et activez l’utilisation du forfait ChatGPT pendant le consentement. |
| **L’étape 2 ne passe pas à la suite** | Consultez l’erreur de connexion affichée. Vérifiez la clé, l’accès aux modèles, la facturation/le quota API, l’URL du point de terminaison et la connexion Internet. TinyCAD effectue cette vérification lorsque vous cliquez sur Next. |
| **Aucun modèle ne s’affiche** | Vérifiez l’accès auprès du fournisseur. Pour les points de terminaison sans découverte des modèles, saisissez le Model ID demandé. Installez un modèle compatible avec les outils avant de connecter Ollama. |
| **Ollama local ne peut pas se connecter** | Démarrez le serveur, vérifiez l’URL API locale, autorisez l’origine exacte de TinyCAD avec OLLAMA_ORIGINS, redémarrez Ollama et autorisez l’accès du navigateur au réseau local si une demande s’affiche. |
| **L’assistant répond, mais ne peut pas modifier le dessin ou lire les images** | Vérifiez la prise en charge des outils et de la vision par le modèle. Joignez un recadrage lisible ou moins de pages PDF. |
| **Un outil signale que le dessin a changé** | Demandez à l’assistant de relire l’état actuel et de réessayer. Les modifications déjà appliquées restent accessibles avec Undo. |
| **Une réponse s’interrompt à cause d’une limite du fournisseur** | Essayez une tâche plus réduite ou un niveau de réflexion inférieur. TinyCAD peut réessayer automatiquement les réponses incomplètes ; les nouvelles tentatives peuvent consommer du quota supplémentaire. Les modifications terminées restent annulables. |

Poursuivez avec les [bibliothèques de symboles personnalisées](../Custom-symbol-libraries/), [la modification des symboles](../Editing-a-Symbol/), [la réorganisation de la mise en page](../Layout-Tidy-Up/) ou la [simulation](../Simulation/).

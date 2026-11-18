---
layout: default
---
# Assistente IA
{: #ai-assistant}

L'assistente IA di TinyCAD trasforma istruzioni scritte, schede tecniche e immagini di circuiti in simboli e disegni modificabili. Affianca il normale editor: puoi chiedergli di creare un circuito, aggiungere componenti al disegno già aperto, creare una libreria di simboli o spiegare una connessione esistente.

**Solo desktop:** l'assistente IA (chatbot) è disponibile esclusivamente nell'app desktop di TinyCAD. Non è disponibile nella versione per browser.

Per usarlo, apri **Chat** nella barra degli strumenti dell'app desktop. Prima di inviare il primo messaggio, connetti un provider IA; le opzioni di connessione sono illustrate qui sotto.

## Cosa può fare
{: #what-it-can-do}

| Attività | Come aiuta l'assistente |
| --- | --- |
| **Creare un simbolo di componente** | Genera elementi grafici modificabili, numeri fisici dei pin, nomi dei pin e tipi elettrici a partire da un componente e da un package specificati. Allega la scheda tecnica del produttore quando è importante conoscere la piedinatura. |
| **Creare o ampliare una libreria di simboli** | Aggiunge più componenti riutilizzabili alla libreria `.tclib` aperta per la modifica, inclusi nomi, descrizioni e mappature dei pin. Le raccolte più grandi possono essere create in più passaggi. |
| **Disegnare un circuito** | Cerca simboli adatti, colloca i componenti, imposta valori e riferimenti, collega i pin con fili ed etichette e aggiunge note esplicative. |
| **Ampliare un disegno esistente** | Aggiunge un connettore, un condensatore di disaccoppiamento, un sensore, un driver o un altro blocco funzionale mantenendo il resto del disegno. |
| **Spiegare o esaminare un circuito** | Legge il disegno e la netlist correnti, descrive i percorsi dei segnali, identifica i pin di una net e analizza la connettività o gli errori delle regole di progettazione. |
| **Ricostruire un disegno da un documento** | Legge un PDF allegato o un'immagine di un circuito e crea una base modificabile, chiedendo chiarimenti sulle parti o connessioni poco chiare. |
| **Riordinare un layout** | Ridispone un foglio intero o una sua parte specificata, avvalendosi dei controlli di layout e connessione di TinyCAD. |
| **Esportare un risultato** | Crea un disegno o una libreria di simboli scaricabili quando chiedi esplicitamente un file. |

Il risultato è costituito da oggetti TinyCAD che puoi selezionare, modificare, collegare e salvare. In un disegno, i simboli appena creati vengono collocati pronti per essere collegati. In una libreria, i nuovi componenti diventano voci della libreria. Non è necessario copiare XML dalla conversazione né configurare un server MCP separato.

L'assistente cerca prima nelle [librerie incluse](../Bundled-Libraries/), poi, se necessario, nella raccolta pubblica di TinyCAD.net. Può cercare nelle raccolte incluse che non sono selezionate al momento nel selettore delle librerie. La ricerca pubblica dei simboli richiede una connessione Internet, anche quando usi un modello IA locale.

Per i componenti riutilizzabili, [crea o apri prima una libreria personalizzata per modificarla](../Custom-symbol-libraries/), quindi apri Chat nella finestra di quella libreria. Per un circuito, mantieni attiva la finestra del disegno desiderato. Indica all'assistente il foglio, i riferimenti dei componenti o il blocco funzionale a cui ti riferisci. Il recupero e il posizionamento dei simboli IA attualmente supportano **simboli a unità singola**; per le parti multi-unità che l'assistente non può importare, usa il normale editor dei simboli.

{% include video-player.html src="/v4/videos/ai-assistant/ai-assistant-demo.mp4" poster="/v4/images/ai-assistant/chat-open-desktop.png" caption="Crea un simbolo da una scheda tecnica in TinyCAD Desktop. Le attese per l'elaborazione IA vengono mostrate a velocità 12× e contrassegnate sullo schermo; l'interazione e i risultati vengono mostrati a velocità normale." %}

## Configurare una connessione
{: #set-up-a-connection}

### 1. Scegliere un provider
{: #choose-a-provider}

1. Apri **Chat** nella barra degli strumenti.
2. Fai clic su **Click here to Sign in to use AI** oppure sull'ingranaggio **AI settings** nell'intestazione del pannello.
3. In **Step 1 — Choose provider**, seleziona un provider, quindi fai clic su **Next**.

![Impostazioni IA con la schermata Provider](../images/ai-assistant/setup-provider.png)

È possibile connettere un solo provider alla volta.

| Provider in TinyCAD | Cosa serve |
| --- | --- |
| **ChatGPT** | Un account ChatGPT a pagamento idoneo, usando **Sign In with ChatGPT**, oppure una chiave API OpenAI, usando **Use API Key**. L'accesso all'account è disponibile nell'app desktop. |
| **Anthropic Claude** | Una chiave API della [Claude Console](https://platform.claude.com/settings/keys), con accesso API e fatturazione per i modelli che usi. |
| **Google Gemini** | Una chiave API di [Google AI Studio](https://aistudio.google.com/apikey). Alcuni modelli offrono un livello API gratuito limitato; si applicano disponibilità e quote. |
| **OpenAI compatible** | La chiave API del servizio, l'URL di base API e un modello che supporti le chiamate agli strumenti. |
| **Ollama (hosted locally)** | Un server Ollama locale in esecuzione e un modello installato con supporto agli strumenti. I modelli locali non richiedono una chiave API. |

Un abbonamento al normale sito di chat di un provider non include automaticamente la fatturazione API o una chiave API. L'opzione esplicita di accesso all'account di ChatGPT è un metodo di connessione distinto. Per Gemini, la procedura guidata usa una chiave API; l'accesso allo spazio di archiviazione Google Drive di TinyCAD non connette il suo assistente IA.

### 2. Connettere un account o una chiave API
{: #connect-an-account-or-api-key}

#### Usare un account ChatGPT
{: #use-a-chatgpt-account}

In TinyCAD Desktop, scegli **ChatGPT**, quindi **Sign In with ChatGPT** al passaggio 2.

1. Fai clic su **Sign in with ChatGPT**. Completa l'accesso nel browser esterno.
2. Quando richiesto, autorizza l'uso del tuo piano ChatGPT. Accedere senza abilitare l'uso del piano non basta per inviare richieste IA.
3. Torna a TinyCAD e scegli un modello quando la procedura guidata passa al passaggio 3.

Se è già memorizzato un account, la schermata offre **Continue as …** o **Sign in with a different account**. TinyCAD conserva un account alla volta. Dopo la connessione, sopra la casella dei messaggi compaiono **Using ChatGPT plan** e **Manage usage**. Il messaggio iniziale spiega che le richieste usano la quota del tuo piano o i crediti disponibili.

![Impostazioni IA desktop con le opzioni Sign In with ChatGPT o Use API Key](../images/ai-assistant/setup-chatgpt-desktop.png)

L'accesso a ChatGPT richiede un account a pagamento idoneo; restano comunque applicabili i limiti dell'account, dell'area di lavoro e dell'app. Se una richiesta viene rifiutata, non passa automaticamente alla fatturazione tramite chiave API. Per la connessione tramite piano account, consulta la documentazione di OpenAI [Sign in with ChatGPT](https://developers.openai.com/siwc/token-sharing-open-source).

#### Usare una chiave API
{: #use-an-api-key}

1. Crea una chiave tramite il collegamento del provider mostrato al passaggio 2. Verifica che il progetto o l'account possa accedere ai modelli che intendi usare.
2. Per **ChatGPT**, seleziona **Use API Key**. Gli altri provider ospitati mostrano direttamente la pagina per inserire la chiave.
3. Incolla la chiave in **API key**. È mascherata; se necessario, **Show API key** la mostra mentre digiti.
4. Per **OpenAI compatible**, inserisci anche l'**API base URL** del servizio.
5. Fai clic su **Next**. TinyCAD verifica la connessione e recupera automaticamente i modelli disponibili.

![Inserimento della chiave API di ChatGPT con campo della chiave mascherato e istruzioni del provider](../images/ai-assistant/setup-api-key.png)

Se un endpoint non riesce a elencare i modelli, TinyCAD chiede un **Model ID** al passaggio 2. Inserisci l'identificatore esatto del provider e fai di nuovo clic su **Next**; un breve messaggio di saluto ne verifica il funzionamento. Queste verifiche possono consumare la quota del provider. Se la connessione non riesce, la procedura resta al passaggio 2 e mostra l'errore.

Per Gemini, crea o seleziona un progetto in Google AI Studio e copia la relativa chiave API in TinyCAD. La [pagina dei prezzi dell'API Gemini](https://ai.google.dev/gemini-api/docs/pricing) di Google spiega quali modelli e utilizzi rientrano nel livello gratuito. I modelli a pagamento o un utilizzo superiore possono richiedere la fatturazione.

![Configurazione di Google Gemini con il collegamento alla chiave di Google AI Studio](../images/ai-assistant/setup-gemini.png)

### 3. Scegliere un modello e il livello di ragionamento
{: #pick-a-model-and-thinking-level}

Dopo aver stabilito la connessione, scegli un modello in **Step 3 — Pick Model**, regola **Thinking**, quindi fai clic su **Finish**.

![Selezione del modello e cursore Thinking nell'ultimo passaggio della configurazione](../images/ai-assistant/setup-model.png)

L'elenco dei modelli in questa illustrazione è un esempio; quello che vedi dipende dal provider, dall'endpoint e dall'account. ChatGPT mostra i modelli Sol, Luna e Astra supportati restituiti dalla connessione. Le versioni più recenti appaiono per prime; le versioni meno recenti sono sotto **More models** e vengono memorizzate fino a sei scelte recenti.

Scegli un modello che supporti gli **strumenti** per consentirgli di esaminare e modificare i documenti TinyCAD. Per interpretare immagini di circuiti o schede tecniche contenenti schemi, scegli anche un modello che supporti la **visione**. Un endpoint di chat testuale generico non è sufficiente per tutte le attività.

**Thinking** va da **Minimal** a **Max** e inizia da **Medium**. I livelli disponibili dipendono dal provider. Impostazioni più alte possono richiedere più tempo e consumare una quota maggiore; Max indica l'impostazione supportata più alta del provider. Puoi cambiare modello e livello di ragionamento tra una risposta e l'altra usando l'icona del modello accanto alla casella dei messaggi.

### Alternativa: usare Ollama in locale
{: #alternative-use-local-ollama}

1. [Installa Ollama](https://ollama.com/download) e avvia il suo server.
2. Scarica un modello con [supporto alle chiamate agli strumenti](https://docs.ollama.com/capabilities/tool-calling), usando `ollama pull MODEL_NAME` con il nome effettivo del modello. Per le attività con immagini/PDF, verifica anche il supporto alla visione e la capacità del contesto.
3. Nel passaggio di selezione del provider di TinyCAD, scegli **Ollama (hosted locally)**.
4. Usa **Ollama API URL**, normalmente `http://localhost:11434/v1`, quindi fai clic su **Next** per elencare i modelli installati.
5. Scegli un modello e un livello di ragionamento, quindi fai clic su **Finish**.

![Configurazione di Ollama con l'URL API locale e indicazioni sull'origine del browser](../images/ai-assistant/setup-ollama.png)

La connessione Ollama accetta URL localhost/loopback. Per un server remoto, scegli **OpenAI compatible**. Assegna al modello locale un contesto sufficiente per la conversazione e gli strumenti TinyCAD; consulta la [configurazione del contesto di Ollama](https://docs.ollama.com/api/openai-compatibility#setting-the-local-context-size).

Le richieste a Ollama locale vengono inviate direttamente al server locale. Per l'inferenza locale, scegli un modello in esecuzione in locale: i modelli cloud configurati tramite un server Ollama possono comunque usare un servizio cloud.

## Usare l'assistente mentre si disegna
{: #use-the-assistant-while-drawing}

Scrivi una richiesta nella casella dei messaggi e fai clic su **Send**, oppure premi **Enter**. Usa **Shift+Enter** per andare a capo. Inizia con un'attività circoscritta, controlla il risultato e poi chiedi la modifica successiva.

![Pannello di chat connesso con una richiesta di esempio pronta per l'invio](../images/ai-assistant/chat-ready.png)

Specifica con precisione il foglio, i riferimenti, i valori e le connessioni interessati. “Collega la parte superiore di R2 a OUT sul foglio Control” è più facile da verificare di “sistema il filo”. Quando ampli un circuito esistente, indica cosa deve rimanere invariato.

L'assistente può esaminare i contenuti non salvati dell'editor. Dopo averne verificato il lavoro, salva normalmente il disegno o la libreria. I disegni incorporano i simboli; se vuoi riutilizzare le definizioni in altri progetti, salvale in una libreria personalizzata.

**Working** raggruppa le attività degli strumenti e gli aggiornamenti intermedi in una riga espandibile. Aprila per vedere i dettagli sull'avanzamento, i risultati degli strumenti e le eventuali immagini esaminate dal modello. La risposta finale appare separatamente. Quando la connessione lo supporta, l'assistente può mostrare riepiloghi del ragionamento forniti dal provider; non è un'impostazione che rivela ogni passaggio del ragionamento interno.

Usa **Stop** per annullare la richiesta corrente. Le modifiche già applicate restano nel documento. **Undo** e **Redo** funzionano con le modifiche IA come con quelle normali; una richiesta articolata in più passaggi può produrre varie modifiche annullabili. Se modifichi il disegno mentre l'assistente è al lavoro, una successiva scrittura potrebbe essere rifiutata perché lo stato di origine è obsoleto. Chiedi all'assistente di rileggere il disegno e continuare.

L'icona **New chat** nell'intestazione cancella la conversazione, la bozza e gli allegati. Non annulla le modifiche al disegno. Cambiare modello conserva la conversazione; connettere un altro provider o un'altra chiave avvia una nuova chat.

### Allegare schede tecniche e immagini di circuiti
{: #attach-datasheets-and-circuit-images}

Usa **Import PDF/image** accanto ai controlli dei messaggi per allegare file PDF, PNG, JPEG o WebP. Puoi allegare fino a **sei file per un totale di 10 MiB**; si applicano anche i limiti del provider. Specifica la variante esatta del componente, il package e le pagine PDF pertinenti, e indica se la vista di un diagramma dei pin è dall'alto o dal basso.

Per gli endpoint compatibili e Ollama, **PDF pages** seleziona le pagine da convertire localmente in immagini, per esempio `1-4,12`; lascia il campo vuoto per tutte le pagine, entro il limite di conversione di 20 pagine. Se le immagini convertite superano 10 MiB, seleziona meno pagine. ChatGPT/OpenAI, Claude e Gemini ricevono direttamente i PDF. La capacità di leggere i diagrammi dipende comunque dal modello scelto.

La ricerca nella libreria pubblica di simboli TinyCAD è disponibile indipendentemente dalla navigazione web generale. La ricerca web nativa è disponibile per le connessioni **Sign in with ChatGPT** idonee, quando le policy del modello/account lo consentono; le citazioni appaiono come collegamenti nella risposta. Le connessioni con chiave API e gli altri provider al momento non dispongono della ricerca web generale tramite TinyCAD. Allega la scheda tecnica o l'immagine pertinente se l'assistente non riesce ad aprire il sito del produttore.

## Esempi di prompt
{: #example-prompts}

Usali come punto di partenza. Sostituisci il componente, il package, i numeri dei pin e i requisiti di alimentazione con quelli del tuo progetto.

### Creare un simbolo da una scheda tecnica
{: #create-a-symbol-from-a-datasheet}

Apri il disegno desiderato e allega la scheda tecnica:

> Crea un simbolo compatto per l'NE555P nel package PDIP a 8 pin, usando questa scheda tecnica. Verifica il numero fisico, il nome e il tipo elettrico di ogni pin. Cerca prima i simboli esistenti. Metti i pin di alimentazione in alto e la massa in basso, convalida il simbolo e collocarlo in questo disegno pronto per il cablaggio. Indica tutto ciò che non riesci a verificare.

Per un modulo fisico anziché il contorno convenzionale di un IC:

> Usando il diagramma dei pin allegato per questa precisa revisione della scheda sensore, crea un simbolo modificabile che mostri il contorno del PCB e i contatti dell'header etichettati nel loro ordine fisico. Mantienilo abbastanza compatto per uno schema di cablaggio A4. Metti i punti di connessione sui pad dell'header e usa una piccola icona di temperatura per identificarne la funzione.

### Creare una libreria riutilizzabile
{: #build-a-reusable-library}

Per prima cosa, crea o apri una libreria `.tclib` personalizzata da modificare:

> Aggiungi una piccola libreria di componenti di interfaccia a unità singola: un PC817 in DIP-4, un ULN2003A in DIP-16 e un connettore a morsetti a 4 vie con passo di 2.54 mm. Usa le schede tecniche allegate per le mappature dei pin degli IC. Assegna a ogni componente un nome chiaro, una descrizione e un prefisso di riferimento, convalidalo e aggiungilo a questa libreria aperta. Conserva il simbolo che sto modificando.

Dopo aver controllato il primo gruppo, continua con un altro. Salva normalmente il `.tclib` oppure chiedi esplicitamente una libreria scaricabile se è questo il risultato che ti serve.

### Creare un circuito completo
{: #create-a-complete-circuit}

> Sul foglio corrente, disegna un oscillatore astabile NE555 a 5 V usando il componente PDIP-8. Punta a circa 1 Hz. Includi le resistenze e il condensatore di temporizzazione, il collegamento di reset, il condensatore del pin di controllo, il disaccoppiamento dell'alimentazione e un LED di uscita con una resistenza di limitazione della corrente. Spiega il calcolo dei tempi, controlla i collegamenti fisici dei pin e riordina il layout. Elenca le ipotesi e gli eventuali problemi irrisolti relativi alle regole di progettazione.

Questa richiesta produce un progetto modificabile e i relativi calcoli. Per stabilirne il comportamento simulato, esamina i modelli e usa tu stesso [Simulation](../Simulation/); una spiegazione IA sicura di sé non equivale a una simulazione effettivamente eseguita.

### Aggiungere componenti senza ridisegnare il circuito
{: #add-parts-without-redrawing-the-circuit}

> Aggiungi un condensatore di disaccoppiamento da 100 nF tra alimentazione e massa di U1, vicino a U1. Identifica i pin di alimentazione effettivi prima di collegarlo. Mantieni invariati il resto del circuito, i riferimenti e i valori, quindi controlla le net interessate.

> Aggiungi un connettore etichettato a 4 pin per +3V3, GND, SDA e SCL sul foglio Sensors. Collega SDA e SCL alle net etichettate esistenti. Usa i pull-up esistenti, se presenti, e dimmi se servono pull-up aggiuntivi prima di aggiungerne.

### Ricostruire un diagramma allegato
{: #reconstruct-an-attached-diagram}

> Ricrea il circuito a pagina 3 del PDF allegato usando componenti e fili TinyCAD modificabili, su un nuovo foglio. Conserva i valori e le etichette mostrati. Chiedi chiarimenti sui valori illeggibili o sugli incroci ambigui dei fili invece di fare ipotesi. Confronta le net ricostruite con l'immagine e riordina il foglio completato.

### Spiegare, esaminare o migliorare un disegno esistente
{: #explain-inspect-or-improve-an-existing-drawing}

> Spiega il percorso del segnale da J1 a U2 ed elenca i componenti e i pin fisici collegati a OUT. Non modificare il disegno.

> Controlla se nel disegno corrente ci sono pin obbligatori non collegati, uscite in conflitto ed etichette di alimentazione incoerenti. Indica il foglio e il riferimento di ogni problema e proponi modifiche prima di applicarle.

> Riordina solo il blocco driver del motore attorno a U3 e J4. Mantieni invariati collegamenti e valori e lascia al suo posto il blocco di ingresso dell'alimentazione.

## Impostazioni, privacy e salvataggio
{: #settings-privacy-and-saving}

L'ingranaggio **AI settings** mostra il provider e il metodo di connessione correnti, con i controlli di modello/ragionamento e **Save**. Per una connessione con chiave offre **Clear API key**; per un account ChatGPT offre **Sign out**; per Ollama locale offre **Disconnect Ollama**. Disconnetti prima di configurare un altro provider. **Cancel** mantiene la connessione esistente e le impostazioni salvate.

![Impostazioni IA per una connessione esistente con chiave API](../images/ai-assistant/connection-settings.png)

Le chiavi API e la cronologia delle conversazioni restano nella memoria dell'applicazione; le chiavi non vengono salvate nelle preferenze o nei disegni. Dopo aver ricaricato o riavviato, devi inserire di nuovo la chiave API. È possibile ricordare le preferenze non segrete relative a provider, endpoint, modello e ragionamento. L'autorizzazione dell'account ChatGPT è gestita separatamente dall'ambiente di esecuzione locale e può sopravvivere ai riavvii; Desktop usa la cifratura sicura del sistema operativo quando disponibile.

Per l'IA ospitata, al provider selezionato vengono inviati i messaggi, gli allegati e i contenuti o le anteprime del documento richiesti dai suoi strumenti. Le connessioni ospitate con chiave API inviano le richieste direttamente all'endpoint selezionato; TinyCAD non fornisce un servizio di inoltro al provider. I servizi compatibili devono consentire l'accesso dal browser (CORS) e di norma usare HTTPS; localhost fa eccezione. Per un flusso di lavoro interamente locale, usa un modello Ollama locale e documenti di riferimento locali forniti da te, evitando le ricerche di simboli online o i modelli cloud.

I componenti e i circuiti generati richiedono comunque una verifica ingegneristica. Controlla piedinature esatte del package, potenze nominali, tensione di alimentazione, livelli logici e limiti operativi consultando le schede tecniche reali. La convalida strutturale, i controlli delle regole di progettazione e i controlli delle connessioni del layout di TinyCAD aiutano a individuare gli errori; non dimostrano che il circuito funzioni, non sostituiscono la simulazione e non attestano che l'hardware sia stato collaudato.

## Risoluzione dei problemi
{: #troubleshooting}

| Sintomo | Cosa verificare |
| --- | --- |
| **Chat non disponibile o assente** | Usa una versione aggiornata di TinyCAD v4. Apri il disegno o la libreria desiderati e cerca Chat nella relativa barra degli strumenti. |
| **Accesso all'account ChatGPT non disponibile** | Usa Desktop o una versione ospitata localmente con l'ambiente di esecuzione per l'account. Nell'app ospitata pubblicamente, scegli Use API Key. Consenti l'apertura della finestra di accesso esterna e abilita l'uso del piano ChatGPT durante il consenso. |
| **Il passaggio 2 non procede** | Leggi l'errore di connessione. Controlla la chiave, l'accesso ai modelli, la fatturazione/quota API, l'URL dell'endpoint e la connessione Internet. TinyCAD esegue questa verifica quando fai clic su Next. |
| **Non appare alcun modello** | Controlla l'accesso al provider. Per gli endpoint senza rilevamento dei modelli, inserisci il Model ID richiesto. Installa un modello con supporto agli strumenti prima di connettere Ollama. |
| **Ollama locale non riesce a connettersi** | Avvia il server, controlla l'URL API locale, consenti l'origine esatta di TinyCAD tramite OLLAMA_ORIGINS, riavvia Ollama e, se richiesto, consenti l'accesso alla rete locale dal browser. |
| **L'assistente risponde ma non riesce a modificare o leggere le immagini** | Controlla il supporto del modello agli strumenti e alla visione. Allega un ritaglio leggibile o meno pagine PDF. |
| **Uno strumento segnala che il disegno è cambiato** | Consenti all'assistente di rileggere lo stato corrente e riprovare. Le modifiche già applicate restano disponibili tramite Undo. |
| **Una risposta si interrompe per un limite del provider** | Prova un'attività più breve o un livello di ragionamento inferiore. TinyCAD può riprovare automaticamente le risposte incomplete; i nuovi tentativi possono consumare ulteriore quota. Le modifiche completate restano annullabili. |

Continua con [librerie di simboli personalizzate](../Custom-symbol-libraries/), [modifica dei simboli](../Editing-a-Symbol/), [riordino del layout](../Layout-Tidy-Up/) o [simulazione](../Simulation/).

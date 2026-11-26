---
layout: default
---
# Assistente AI
{: #ai-assistant}

L'assistente AI di TinyCAD trasforma istruzioni scritte, schede tecniche e immagini di circuiti in simboli e disegni modificabili. Lavora insieme al normale editor: puoi chiedergli di creare un circuito, aggiungere componenti al disegno già aperto, creare una libreria di simboli o spiegare una connessione esistente.

**Solo desktop:** l'assistente AI (chatbot) è disponibile solo nell'app TinyCAD Desktop. Non è disponibile nella versione per browser.

Per usarlo, apri **Chat** sulla barra degli strumenti nell'app Desktop. Prima di inviare il primo messaggio, connettiti a un provider AI; le opzioni di connessione sono spiegate di seguito.

## Cosa può fare
{: #what-it-can-do}

| Attività | Come aiuta l'assistente |
| --- | --- |
| **Creare un simbolo di componente** | Genera grafica modificabile, numeri dei pin fisici, nomi dei pin e tipi elettrici a partire da un componente e da un package specificati. Allega la scheda tecnica del produttore se è importante conoscere la piedinatura. |
| **Creare o ampliare una libreria di simboli** | Aggiunge diversi componenti riutilizzabili alla libreria `.tclib` aperta per la modifica, includendo nomi, descrizioni e mappature dei pin. È possibile creare raccolte più ampie in più passaggi. |
| **Disegnare un circuito** | Trova simboli adatti, posiziona i componenti, imposta valori e riferimenti, collega i pin con fili ed etichette e aggiunge note esplicative. |
| **Ampliare un disegno esistente** | Aggiunge un connettore, un condensatore di disaccoppiamento, un sensore, un driver o un altro blocco funzionale, mantenendo il resto del disegno. |
| **Spiegare o esaminare un circuito** | Legge il disegno e la netlist correnti, descrive i percorsi dei segnali, individua i pin su una net ed esamina la connettività o gli errori delle regole di progettazione. |
| **Ricostruire un disegno da un documento** | Legge un PDF o un'immagine di circuito allegati e crea una base di partenza modificabile, chiedendo chiarimenti sulle parti o sulle connessioni poco chiare. |
| **Riordinare il layout** | Riorganizza un'intera pagina o una parte specificata, usando i controlli di layout e di connessione di TinyCAD. |
| **Esportare un risultato** | Crea un disegno o una libreria di simboli scaricabili quando chiedi esplicitamente un file. |

I risultati sono oggetti TinyCAD che puoi selezionare, modificare, collegare e salvare. In un disegno, i simboli appena creati vengono posizionati e sono pronti per essere collegati. In una libreria, i nuovi componenti diventano voci della libreria. Non devi copiare XML dalla conversazione né configurare un server MCP separato.

L'assistente cerca prima nelle [librerie incluse](../Bundled-Libraries/), quindi, se necessario, consulta la raccolta pubblica TinyCAD.net. Può cercare nelle raccolte incluse che non sono attualmente selezionate nel selettore delle librerie. La ricerca di simboli pubblici richiede una connessione Internet, anche quando usi un modello AI locale.

Per i componenti riutilizzabili, prima [crea o apri una libreria personalizzata per modificarla](../Custom-symbol-libraries/), quindi apri Chat nella finestra di quella libreria. Per un circuito, mantieni attiva la finestra del disegno desiderato. Specifica all'assistente a quale foglio, riferimento di componente o blocco funzionale ti riferisci. Il recupero e il posizionamento dei simboli AI attuali supportano **simboli a unità singola**; per i componenti multi-unità che l'assistente non può importare, usa il normale editor dei simboli.

{% include video-player.html src="/v4/videos/ai-assistant/ai-assistant-demo.mp4" poster="/v4/Images/ai-assistant/chat-open-desktop.png" caption="Crea un simbolo da una scheda tecnica in TinyCAD Desktop. Le attese per l'elaborazione AI sono mostrate a velocità 12× e contrassegnate sullo schermo; l'interazione e i risultati sono mostrati a velocità normale." %}

## Configurare una connessione
{: #set-up-a-connection}

### 1. Scegliere un provider
{: #choose-a-provider}

1. Apri **Chat** sulla barra degli strumenti.
2. Fai clic su **Click here to Sign in to use AI** oppure sull'ingranaggio **AI settings** nell'intestazione del pannello.
3. In **Step 1 — Choose provider**, seleziona un provider, quindi fai clic su **Next**.

![Impostazioni AI con la fase Provider](../Images/ai-assistant/setup-provider.png)

Puoi connettere un solo provider alla volta.

| Provider in TinyCAD | Cosa serve |
| --- | --- |
| **ChatGPT** | Un account ChatGPT a pagamento idoneo, usando **Sign In with ChatGPT**, oppure una chiave API OpenAI, usando **Use API Key**. L'accesso con account è disponibile nell'app Desktop. |
| **Anthropic Claude** | Una chiave API dalla [Claude Console](https://platform.claude.com/settings/keys), con accesso API e fatturazione per i modelli che usi. |
| **Google Gemini** | Una chiave API da [Google AI Studio](https://aistudio.google.com/apikey). Alcuni modelli offrono un livello API gratuito limitato; sono previste disponibilità e quote. |
| **OpenAI compatible** | La chiave API del servizio, l'URL di base dell'API e un modello che supporti la chiamata di strumenti. |
| **Ollama (hosted locally)** | Un server Ollama locale in esecuzione e un modello installato con supporto agli strumenti. I modelli locali non richiedono una chiave API. |

Un abbonamento al normale sito di chat di un provider non include automaticamente la fatturazione API né una chiave API. L'opzione esplicita di accesso all'account ChatGPT è un metodo di connessione separato. Per Gemini, la procedura guidata usa una chiave API; l'accesso a Google Drive in TinyCAD non connette il suo assistente AI.

### 2. Connettere un account o una chiave API
{: #connect-an-account-or-api-key}

#### Usare un account ChatGPT
{: #use-a-chatgpt-account}

In TinyCAD Desktop, scegli **ChatGPT**, quindi **Sign In with ChatGPT** nella fase 2.

1. Fai clic su **Sign in with ChatGPT**. Completa l'accesso nel browser esterno.
2. Quando richiesto, autorizza l'uso del tuo piano ChatGPT. Accedere senza abilitare l'uso del piano non è sufficiente per inviare richieste AI.
3. Torna a TinyCAD e scegli un modello quando la procedura guidata passa alla fase 3.

Se un account è già memorizzato, la schermata offre **Continue as …** oppure **Sign in with a different account**. TinyCAD mantiene un solo account alla volta. Dopo la connessione, sopra la casella dei messaggi compaiono **Using ChatGPT plan** e **Manage usage**. Il messaggio visualizzato al primo utilizzo spiega che le richieste usano la quota del tuo piano o i crediti disponibili.

![Impostazioni AI Desktop con le opzioni Sign In with ChatGPT e Use API Key](../Images/ai-assistant/setup-chatgpt-desktop.png)

L'accesso a ChatGPT richiede un account a pagamento idoneo; restano comunque in vigore i limiti dell'account, dell'area di lavoro e dell'app. Se una richiesta viene rifiutata, non passa automaticamente alla fatturazione tramite chiave API. Consulta la [documentazione OpenAI per l'accesso con ChatGPT](https://developers.openai.com/siwc/token-sharing-open-source) relativa alla connessione tramite piano account.

#### Usare una chiave API
{: #use-an-api-key}

1. Crea una chiave usando il link del provider mostrato nella fase 2. Verifica che il progetto o l'account abbia accesso ai modelli che intendi usare.
2. Per **ChatGPT**, seleziona **Use API Key**. Gli altri provider ospitati mostrano direttamente la pagina di inserimento della chiave.
3. Incolla la chiave in **API key**. È mascherata; se necessario, **Show API key** la mostra mentre digiti.
4. Per **OpenAI compatible**, inserisci anche l'**API base URL** del servizio.
5. Fai clic su **Next**. TinyCAD verifica la connessione e recupera automaticamente i modelli disponibili.

![Inserimento della chiave API ChatGPT con il campo della chiave mascherata e le istruzioni del provider](../Images/ai-assistant/setup-api-key.png)

Se un endpoint non può elencare i modelli, TinyCAD chiede un **Model ID** nella fase 2. Inserisci l'identificativo esatto del provider e fai di nuovo clic su **Next**; un breve messaggio di saluto ne verifica il funzionamento. Queste verifiche possono consumare la quota del provider. Se la connessione non riesce, la procedura resta nella fase 2 e mostra l'errore.

Per Gemini, crea o seleziona un progetto in Google AI Studio e copia la relativa chiave API in TinyCAD. La [pagina dei prezzi dell'API Gemini di Google](https://ai.google.dev/gemini-api/docs/pricing) spiega quali modelli e modalità di utilizzo rientrano nel livello gratuito. I modelli a pagamento o un utilizzo maggiore potrebbero richiedere la fatturazione.

![Configurazione di Google Gemini con il link alla chiave di Google AI Studio](../Images/ai-assistant/setup-gemini.png)

### 3. Scegliere un modello e il livello di ragionamento
{: #pick-a-model-and-thinking-level}

Dopo aver stabilito la connessione, scegli un modello in **Step 3 — Pick Model**, regola **Thinking**, quindi fai clic su **Finish**.

![Selezione del modello e cursore Thinking nella fase finale della configurazione](../Images/ai-assistant/setup-model.png)

L'elenco dei modelli in questa illustrazione è un esempio; il tuo elenco dipende dal provider, dall'endpoint e dall'account. ChatGPT mostra i modelli Sol, Luna e Astra supportati restituiti dalla connessione. Le versioni più recenti sono visualizzate per prime; le versioni precedenti si trovano in **More models** e vengono memorizzate fino a sei scelte recenti.

Scegli un modello che supporti gli **strumenti**, così potrà esaminare e modificare i documenti TinyCAD. Per interpretare immagini di circuiti o schede tecniche con diagrammi, scegli anche un modello che supporti la **visione**. Un endpoint generico di chat testuale non è sufficiente per tutte le attività.

**Thinking** va da **Minimal** a **Max**, con valore iniziale **Medium**. I livelli disponibili dipendono dal provider. Impostazioni più alte possono richiedere più tempo e consumare più quota; Max indica il livello più alto supportato dal provider. Puoi cambiare il modello e il livello di ragionamento tra una risposta e l'altra usando l'icona del modello accanto alla casella dei messaggi.

### Alternativa: usare Ollama in locale
{: #alternative-use-local-ollama}

1. [Installa Ollama](https://ollama.com/download) e avvia il server.
2. Scarica un modello con [supporto alla chiamata di strumenti](https://docs.ollama.com/capabilities/tool-calling), usando `ollama pull MODEL_NAME` con il nome effettivo del modello. Per le attività con immagini/PDF, verifica anche il supporto alla visione e la capacità del contesto.
3. Nella fase di selezione del provider di TinyCAD, scegli **Ollama (hosted locally)**.
4. Usa **Ollama API URL**, normalmente `http://localhost:11434/v1`, quindi fai clic su **Next** per elencare i modelli installati.
5. Scegli un modello e un livello di ragionamento, quindi fai clic su **Finish**.

![Configurazione di Ollama con l'URL dell'API locale e le indicazioni sull'origine del browser](../Images/ai-assistant/setup-ollama.png)

La connessione Ollama accetta URL localhost/loopback. Per un server remoto, scegli **OpenAI compatible**. Assegna al modello locale un contesto sufficiente per la conversazione e gli strumenti TinyCAD; consulta la [configurazione del contesto di Ollama](https://docs.ollama.com/api/openai-compatibility#setting-the-local-context-size).

Le richieste a Ollama locale vanno direttamente al server locale. Per l'inferenza locale, scegli un modello in esecuzione localmente: i modelli cloud configurati tramite un server Ollama possono comunque usare un servizio cloud.

## Usare l'assistente mentre si disegna
{: #use-the-assistant-while-drawing}

Digita una richiesta nella casella dei messaggi e fai clic su **Send**, oppure premi **Enter**. Usa **Shift+Enter** per inserire un'altra riga. Inizia con un'attività circoscritta, controlla il risultato e poi chiedi la modifica successiva.

![Pannello di chat connesso con una richiesta di esempio pronta per l'invio](../Images/ai-assistant/chat-ready.png)

Specifica con chiarezza il foglio, i riferimenti, i valori e le connessioni di destinazione. «Collega l'estremità superiore di R2 a OUT nel foglio Control» è più facile da verificare di «sistema il filo». Indica cosa deve restare invariato quando ampli un circuito esistente.

L'assistente può esaminare i contenuti non salvati dell'editor. Dopo averne verificato il lavoro, salva normalmente il disegno o la libreria. I disegni incorporano i propri simboli; salva le definizioni riutilizzabili in una libreria personalizzata se vuoi riutilizzarle in altri progetti.

**Working** raggruppa l'attività degli strumenti e gli aggiornamenti intermedi in una riga comprimibile. Aprila per visualizzare i dettagli di avanzamento, i risultati degli strumenti e le eventuali immagini esaminate dal modello. La risposta finale viene mostrata separatamente. Quando la connessione lo supporta, l'assistente può mostrare riepiloghi del ragionamento forniti dal provider; non è un'impostazione che rivela ogni passaggio del ragionamento interno.

Usa **Stop** per annullare la richiesta corrente. Le modifiche già applicate restano nel documento. **Undo** e **Redo** funzionano con le modifiche AI come con quelle normali; una richiesta in più passaggi può creare diverse modifiche annullabili. Se modifichi il disegno mentre l'assistente sta lavorando, una successiva operazione di scrittura potrebbe essere rifiutata perché lo stato di origine non è aggiornato. Chiedigli di rileggere il disegno e proseguire.

L'icona **New chat** nell'intestazione cancella la conversazione, la bozza e gli allegati. Non annulla le modifiche al disegno. Cambiare modello mantiene la conversazione; connettere un altro provider o una nuova chiave avvia una nuova chat.

### Allegare schede tecniche e immagini di circuiti
{: #attach-datasheets-and-circuit-images}

Usa **Import PDF/image** accanto ai controlli dei messaggi per allegare file PDF, PNG, JPEG o WebP. Puoi allegare fino a **sei file per un totale di 10 MiB**; si applicano anche i limiti del provider. Specifica la variante esatta del componente, il package e le pagine PDF pertinenti e indica se il diagramma dei pin è visto dall'alto o dal basso.

Per gli endpoint compatibili e Ollama, **PDF pages** seleziona le pagine da convertire localmente, ad esempio `1-4,12`; lascia il campo vuoto per tutte le pagine entro il limite di conversione di 20 pagine. Scegli meno pagine se le immagini convertite superano 10 MiB. ChatGPT/OpenAI, Claude e Gemini ricevono direttamente i PDF. La capacità di interpretare i diagrammi dipende comunque dal modello scelto.

La ricerca nella libreria pubblica di simboli TinyCAD è disponibile indipendentemente dalla navigazione web generale. La ricerca web nativa è disponibile per le connessioni **Sign in with ChatGPT** idonee, quando le policy del modello/account lo consentono; le citazioni appaiono come link nella risposta. Le connessioni tramite chiave API e gli altri provider al momento non ottengono la ricerca web generale tramite TinyCAD. Allega la scheda tecnica o l'immagine pertinente se l'assistente non riesce ad aprire il sito del produttore.

## Esempi di prompt
{: #example-prompts}

Usali come punto di partenza. Sostituisci il componente, il package, i numeri dei pin e i requisiti di alimentazione con quelli del tuo progetto.

### Creare un simbolo da una scheda tecnica
{: #create-a-symbol-from-a-datasheet}

Apri il disegno desiderato e allega la scheda tecnica:

> Crea un simbolo compatto per l'NE555P nel package PDIP a 8 pin, basandoti su questa scheda tecnica. Verifica il numero fisico, il nome e il tipo elettrico di ogni pin. Cerca prima i simboli esistenti. Metti i pin di alimentazione in alto e la massa in basso, convalida il simbolo e posizionalo in questo disegno, pronto per il cablaggio. Segnala tutto ciò che non riesci a verificare.

Per un modulo fisico anziché il tradizionale contorno di un IC:

> Usando il diagramma dei pin allegato per questa precisa revisione della scheda sensore, crea un simbolo modificabile che mostri il contorno del PCB e i contatti dell'header etichettati nel loro ordine fisico. Mantienilo abbastanza compatto per uno schema di cablaggio in formato A4. Metti i punti di connessione sui pad dell'header e usa una piccola icona della temperatura per identificarne la funzione.

### Creare una libreria riutilizzabile
{: #build-a-reusable-library}

Prima crea o apri una `.tclib` personalizzata da modificare:

> Aggiungi una piccola libreria di componenti di interfaccia a unità singola: un PC817 in DIP-4, un ULN2003A in DIP-16 e un connettore a morsetti a 4 vie con passo di 2,54 mm. Usa le schede tecniche allegate per le mappature dei pin degli IC. Assegna a ogni componente un nome chiaro, una descrizione e un prefisso di riferimento, convalidalo e aggiungilo a questa libreria aperta. Mantieni il simbolo che sto modificando al momento.

Dopo aver controllato il primo gruppo, prosegui con un altro. Salva normalmente il `.tclib` oppure chiedi esplicitamente una libreria scaricabile se è il risultato che ti serve.

### Creare un circuito completo
{: #create-a-complete-circuit}

> Nel foglio corrente, disegna un oscillatore astabile NE555 a 5 V usando il componente PDIP-8. Punta a circa 1 Hz. Includi le resistenze e il condensatore di temporizzazione, il collegamento di reset, il condensatore del pin di controllo, il disaccoppiamento dell'alimentazione e un LED di uscita con una resistenza di limitazione della corrente. Spiega il calcolo della temporizzazione, verifica i collegamenti dei pin fisici e riordina il layout. Elenca le ipotesi e gli eventuali problemi delle regole di progettazione ancora irrisolti.

Questa richiesta genera un progetto modificabile e i relativi calcoli. Per determinare il comportamento simulato, verifica i modelli e usa personalmente [Simulation](../Simulation/); una spiegazione AI convincente non equivale a una simulazione effettivamente eseguita.

### Trovare o associare un modello SPICE
{: #find-or-attach-a-spice-model}

Chiedi esplicitamente il supporto SPICE o alla simulazione. L'assistente può cercare [modelli SPICE inclusi](../Bundled-SPICE-Models/) senza effettuare una ricerca web e ispezionarne le fonti, le ipotesi e l'ordine dei terminali. Se il modello esatto non è disponibile, chiedigli di valutare un'alternativa compatibile documentata o un'approssimazione generica. Verifica indipendentemente la piedinatura del package.

> Trova un modello SPICE incluso per Q1 e dimmi come si mappano i suoi terminali sul simbolo. Lascia invariato il disegno finché non avrò esaminato la fonte e le ipotesi.

Per modificare il disegno, chiedi all'assistente di associare il modello dopo aver verificato la mappatura dei pin. Se gli chiedi di creare un componente riutilizzabile per una libreria con supporto SPICE, può impostare una definizione inclusa o personalizzata per i posizionamenti futuri.

### Aggiungere componenti senza ridisegnare il circuito
{: #add-parts-without-redrawing-the-circuit}

> Aggiungi un condensatore di disaccoppiamento da 100 nF tra l'alimentazione e la massa di U1, vicino a U1. Identifica i suoi effettivi pin di alimentazione prima di cablarlo. Mantieni invariati il resto del circuito, i riferimenti e i valori, poi controlla le net interessate.

> Aggiungi un connettore etichettato a 4 pin per +3V3, GND, SDA e SCL nel foglio Sensors. Collega SDA e SCL alle net etichettate esistenti. Usa i pull-up esistenti, se presenti, e dimmi se servono altri pull-up prima di aggiungerne.

### Ricostruire un diagramma allegato
{: #reconstruct-an-attached-diagram}

> Ricrea il circuito a pagina 3 del PDF allegato, usando componenti e fili TinyCAD modificabili su un nuovo foglio. Mantieni i valori e le etichette mostrati. Chiedi chiarimenti sui valori illeggibili o sugli incroci di fili ambigui, invece di fare supposizioni. Confronta le net ricostruite con l'immagine e riordina il foglio completato.

### Spiegare, esaminare o migliorare un disegno esistente
{: #explain-inspect-or-improve-an-existing-drawing}

> Spiega il percorso del segnale da J1 a U2 ed elenca i componenti e i pin fisici collegati a OUT. Non modificare il disegno.

> Controlla che nel disegno corrente non vi siano pin obbligatori scollegati, uscite in conflitto o etichette di alimentazione incoerenti. Per ogni problema, indica il foglio e il riferimento e proponi modifiche prima di applicarle.

> Riordina solo il blocco del driver del motore attorno a U3 e J4. Mantieni invariate le connessioni e i valori e lascia al suo posto il blocco di ingresso dell'alimentazione.

## Impostazioni, privacy e salvataggio
{: #settings-privacy-and-saving}

L'ingranaggio **AI settings** mostra il provider e il metodo di connessione correnti, insieme ai controlli del modello/del ragionamento e a **Save**. Per una connessione tramite chiave offre **Clear API key**; per un account ChatGPT offre **Sign out**; per Ollama locale offre **Disconnect Ollama**. Disconnetti prima il provider per configurarne un altro. **Cancel** mantiene la connessione e le impostazioni salvate esistenti.

![Impostazioni AI per una connessione esistente tramite chiave API](../Images/ai-assistant/connection-settings.png)

Le chiavi API e la cronologia delle conversazioni restano nella memoria dell'applicazione; le chiavi non vengono salvate nelle preferenze o nei disegni. Dopo aver ricaricato o riavviato l'app, dovrai reinserire la chiave API. Le preferenze non segrete del provider, dell'endpoint, del modello e del ragionamento possono essere memorizzate. L'autorizzazione dell'account ChatGPT è gestita separatamente dal runtime locale e può persistere dopo il riavvio; Desktop usa la crittografia sicura del sistema operativo quando disponibile.

Per l'AI ospitata, i messaggi, gli allegati e i contenuti o le anteprime dei documenti richiesti dai relativi strumenti vengono inviati al provider selezionato. Le connessioni API ospitate inviano le richieste direttamente all'endpoint selezionato; TinyCAD non fornisce un servizio di inoltro al provider. I servizi compatibili devono consentire l'accesso dal browser (CORS) e normalmente usare HTTPS; localhost è un'eccezione. Per un flusso di lavoro completamente locale, usa un modello Ollama locale e documenti di riferimento locali forniti da te, evitando le ricerche di simboli online e i modelli cloud.

I componenti e i circuiti generati richiedono comunque una verifica ingegneristica. Controlla la piedinatura esatta del package, le potenze nominali, la tensione di alimentazione, i livelli logici e i limiti operativi consultando le schede tecniche effettive. La convalida strutturale, i controlli delle regole di progettazione e i controlli delle connessioni del layout di TinyCAD aiutano a individuare gli errori; non dimostrano che il circuito funzioni, non sostituiscono la simulazione e non attestano che l'hardware sia stato testato.

## Risoluzione dei problemi
{: #troubleshooting}

| Sintomo | Cosa verificare |
| --- | --- |
| **Chat non disponibile o mancante** | Usa una versione aggiornata di TinyCAD v4. Apri il disegno o la libreria desiderati e cerca Chat sulla relativa barra degli strumenti. |
| **Accesso all'account ChatGPT non disponibile** | Usa Desktop oppure una versione ospitata localmente con il runtime per account. Nell'app pubblica ospitata, scegli Use API Key. Consenti l'apertura della finestra di accesso esterna e abilita l'uso del piano ChatGPT durante la schermata di consenso. |
| **La fase 2 non procede** | Leggi l'errore di connessione. Verifica la chiave, l'accesso al modello, la fatturazione/la quota API, l'URL dell'endpoint e la connessione Internet. TinyCAD esegue questa verifica facendo clic su Next. |
| **Non appare alcun modello** | Verifica l'accesso al provider. Per gli endpoint senza rilevamento dei modelli, inserisci il Model ID richiesto. Installa un modello compatibile con gli strumenti prima di connettere Ollama. |
| **Impossibile connettersi a Ollama locale** | Avvia il server, verifica l'URL dell'API locale, consenti l'origine esatta di TinyCAD tramite OLLAMA_ORIGINS, riavvia Ollama e, se richiesto, consenti al browser l'accesso alla rete locale. |
| **L'assistente risponde ma non riesce a modificare o leggere le immagini** | Verifica il supporto agli strumenti/alla visione del modello. Allega un ritaglio leggibile o un numero inferiore di pagine PDF. |
| **Uno strumento segnala che il disegno è cambiato** | Chiedi all'assistente di rileggere lo stato corrente e riprovare. Le modifiche applicate in precedenza restano disponibili tramite Undo. |
| **Una risposta si interrompe a causa di un limite del provider** | Prova un'attività più breve o un livello di ragionamento inferiore. TinyCAD può riprovare automaticamente le risposte incomplete; i nuovi tentativi possono consumare altra quota. Le modifiche completate restano annullabili. |

Continua con [librerie di simboli personalizzate](../Custom-symbol-libraries/), [modifica dei simboli](../Editing-a-Symbol/), [riordino del layout](../Layout-Tidy-Up/) o [simulazione](../Simulation/).

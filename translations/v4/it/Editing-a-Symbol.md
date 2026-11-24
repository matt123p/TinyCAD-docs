---
layout: default
---
# Modificare un simbolo
{: #editing-a-symbol}

Per generare un simbolo da una scheda tecnica o aggiungere più componenti a una libreria aperta, consulta la [guida dell'assistente AI ](../AI-Assistant/). Puoi perfezionarne i risultati usando gli strumenti di modifica descritti in questa pagina.

## Come funzionano i simboli in TinyCAD
{: #how-symbols-work-in-tinycad}

I simboli vengono creati a partire dai normali oggetti disponibili nella barra degli strumenti. Possono contenere
qualsiasi oggetto, tranne altri simboli.

Se il simbolo contiene oggetti con funzioni speciali (come un elemento di alimentazione
o un filo), questi oggetti verranno trattati come annotazioni.

Tutte le loro funzioni speciali vengono perse quando sono usati in un simbolo. Solo i **pin** definiscono
i punti di connessione elettrica.

Riepilogo:
- un simbolo è un elemento grafico riutilizzabile con attributi
- la connettività elettrica è definita dai **pin**
- e i simboli sono archiviati nelle **librerie** (`.tclib`)

## Prima di iniziare
{: #before-you-start}

Questa pagina presuppone che tu abbia già aperto una libreria da modificare. I passaggi per
aprire o creare una libreria dipendono dall'uso di TinyCAD Web o dell'applicazione desktop, quindi inizia da [Librerie di simboli personalizzate](../Custom-symbol-libraries/).

Se cerchi informazioni su come sfogliare e posizionare i simboli anziché modificarli, consulta [Uso delle librerie di simboli](../Using-Symbol-Libraries/).

## Aprire o creare il simbolo
{: #open-or-create-the-symbol}

1. Apri la libreria.
2. Per modificare un simbolo esistente, fai clic su di esso nell'elenco dei simboli della libreria.
3. Per creare un nuovo simbolo, fai clic sul pulsante `+` nell'elenco dei simboli.
4. Il simbolo selezionato o nuovo viene caricato nell'area di disegno dell'editor.

Puoi quindi modificare la grafica, i pin e gli attributi del simbolo.

{% include video-player.html
	src="/v4/images/video/Video 12.mp4"
	width=1532
	height=978
	caption="Video dimostrativo su come modificare una libreria."
%}


## Disegnare la forma del simbolo (grafica)
{: #drawing-the-symbol-shape-graphics}

Usa gli strumenti di disegno standard per creare il contorno del simbolo:

- linee/polilinee per i bordi del corpo,
- rettangoli/ellissi/archi per i contorni più comuni dei package,
- testo per eventuali marcature interne.

Mantieni il simbolo leggibile allo zoom normale dello schema. Le forme semplici di solito funzionano
meglio delle illustrazioni molto decorative.

## Aggiungere pin
{: #adding-pins}

I pin sono l'unica parte elettricamente attiva di un simbolo.

Per ogni pin, imposta:

- **Numero pin** (obbligatorio e univoco all'interno di una parte),
- **Nome pin** (facoltativo ma fortemente consigliato),
- **Tipo elettrico** (obbligatorio per un DRC accurato),
- **Stile/forma del pin** (aspetto visivo),
- **Visibilità** del testo del nome/numero del pin, secondo necessità.

Posiziona con cura i pin sulla griglia, in modo che il cablaggio nello schema sia semplice.

{% include video-player.html
	src="/v4/images/video/Video 13.mp4"
	width=1532
	height=978
	caption="Video dimostrativo su come aggiungere pin."
%}


## Pannello Pin
{: #pin-panel}

Puoi modificare i pin nel pannello **Pin**, nell'area del **pannello inferiore**.

Le modifiche nel pannello Pin sono **immediate**: ogni modifica a un campo invia un'azione di aggiornamento
immediata del pin (non è necessario un passaggio separato con OK/Applica).

Sezioni del pannello Pin:

1. **Nome**
	- Casella di controllo Mostra (`show_name`)
	- Campo di testo Nome (`name`)
	- Casella di controllo Centra sul pin (`centre_name`)
2. **Numero**
	- Casella di controllo Mostra (`show_number`)
	- Campo di testo Numero (`number`)
	- Campo numerico Offset (`number_pos`)
3. **Tipo**
	- Menu a discesa Forma (`which`)
	- Menu a discesa Elettrico (`elec`)
	- Campo numerico Lunghezza (`length`, intervallo UI 5..50)

Note:

- La forma controlla l'aspetto del simbolo e alcuni comportamenti visivi speciali.
- La forma `Cross` e il tipo elettrico `Not Connected` disegnano entrambi un indicatore a croce.
- Gli stili di forma `Power` e `Hidden` vengono visualizzati usando il colore dei pin nascosti.

## Tipi elettrici dei pin e comportamento del DRC
{: #pin-electrical-types-and-drc-behavior}

Selezionare il tipo elettrico corretto è essenziale. Il DRC usa questi tipi per rilevare
errori di connessione.

Valori attualmente presenti nel codice sorgente di TinyCAD v4 (`elec`):

- `0` Ingresso
- `1` Uscita
- `2` Tristate
- `3` Collettore aperto
- `4` Passivo
- `5` Ingresso/Uscita
- `6` Non connesso
- `7` Libero
- `8` Non specificato
- `9` Ingresso di alimentazione
- `10` Uscita di alimentazione
- `11` Emettitore aperto

Indicazioni generali:

- Contrassegna i segnali effettivamente pilotati come **Uscita**.
- Contrassegna i segnali destinati solo alla ricezione come **Ingresso**.
- Usa **Ingresso di alimentazione/Uscita di alimentazione** quando la semantica del pilotaggio dell'alimentazione è rilevante per il DRC.
- Usa **Non connesso** solo per i pin che devono intenzionalmente risultare non connessi.
- Usa **Libero**/**Non specificato** con cautela e in modo coerente in tutta la libreria.

Conseguenze pratiche per il DRC:

- Un tipo di pin errato può causare falsi errori DRC (o nascondere errori reali).
- I nomi dei pin di alimentazione devono corrispondere ai nomi di alimentazione previsti per consentire il comportamento automatico.

## Pin di alimentazione e pin nascosti
{: #power-and-hidden-pins}

I pin di alimentazione e quelli nascosti sono visualizzati durante la modifica del simbolo, ma di norma
sono nascosti quando il simbolo viene posizionato in un disegno.

In particolare, per i **pin di alimentazione**:

- Il nome del pin funge da nome della rete di alimentazione.
- La connettività è automatica quando i nomi di alimentazione corrispondono.
- Nella vista del simbolo posizionato, normalmente non si disegnano fili direttamente verso questi pin di alimentazione nascosti.

Per i **pin nascosti**:

- Sono comunque elettricamente attivi.
- Usali quando vuoi disegnare la forma del pin e le relative etichette.

## Simboli multiparte (parti per package)
{: #multi-part-symbols-parts-per-package}

TinyCAD supporta dispositivi con più unità logiche in un unico package (per
esempio, porte quadruple).

Si usano due stili multiparte:

1. Simboli multiparte **omogenei**:
	 - le parti condividono lo stesso contorno,
	 - di solito differiscono solo per i numeri dei pin.
2. Simboli multiparte **eterogenei**:
	 - le parti possono avere contorni diversi,
	 - le parti possono anche avere insiemi/funzioni di pin diversi.

Usa la configurazione omogenea quando le parti sono intercambiabili; usa quella eterogenea quando ogni parte
ha una funzione distinta.

### Flusso di lavoro multiparte
{: #multi-part-workflow}

1. Decidi prima se usare una configurazione omogenea o eterogenea.
2. Imposta il numero di parti per package.

Per le parti omogenee:
- La prima parte definisce la forma del simbolo e la disposizione dei pin

Per le parti eterogenee:
- Puoi disegnare una forma diversa per ogni parte

## Attributi e proprietà del simbolo
{: #symbol-attributes-and-properties}

Puoi modificare gli attributi del simbolo nel pannello **Simbolo**, nel **pannello inferiore**.

Oltre alla grafica e ai pin, definisci con cura gli attributi del simbolo:

- Nome principale del simbolo (e alias, se utilizzati),
- Formato predefinito di **Ref** (per esempio `U?`, `R?`, `C?`),
- **Nome/Valore** predefinito,
- Attributi/parametri aggiuntivi (per esempio package/footprint, campi del modello di simulazione
o metadati specifici del progetto).

## Impostare un modello SPICE
{: #set-a-spice-model}

Seleziona il simbolo in una libreria modificabile e apri la scheda **SPICE**. Scegli **Incluso → Trova modello SPICE…** per collegare un modello e verificarne la mappatura dei pin, oppure **Personalizzato** per modificare il modello di istanza e il testo del modello. Salva la libreria per applicare l'impostazione predefinita ai posizionamenti futuri. Consulta [Modelli SPICE inclusi](../Bundled-SPICE-Models/#set-a-library-default-or-edit-a-custom-copy) per informazioni sul selettore, sulla selezione dei modelli e sulle copie personalizzate.

## Salvare, duplicare, rinominare, eliminare
{: #save-duplicate-rename-delete}

Azioni comuni di gestione dei simboli durante la modifica di una libreria:

- **Salva/aggiorna** il simbolo corrente per registrare le modifiche.
- **Duplica** per creare varianti (consigliato rispetto alla modifica distruttiva di un simbolo di base).
- **Rinomina** per uniformare i nomi.
- **Elimina** i simboli obsoleti (annulla l'operazione se un simbolo è stato eliminato per errore).

Usa la duplicazione per le varianti di package/valore che condividono la grafica ma differiscono nelle
impostazioni predefinite.

## Lista di controllo per la convalida prima di pubblicare un simbolo
{: #validation-checklist-before-publishing-a-symbol}

Prima di usare ampiamente un simbolo, verifica che:

1. I pin siano sulla griglia e facili da cablare.
2. I numeri dei pin siano completi e univoci per ogni parte.
3. I tipi elettrici siano impostati correttamente per tutti i pin.
4. Il comportamento dei pin di alimentazione/nascosti sia intenzionale.
5. La configurazione multiparte (se presente) sia corretta.
6. Le impostazioni predefinite di nome/riferimento siano appropriate.
7. Il simbolo sia leggibile allo zoom normale del disegno.

Quindi posiziona il simbolo in uno schema di prova ed esegui il DRC.

## Suggerimenti per la risoluzione dei problemi
{: #troubleshooting-tips}

- **I fili non si connettono al simbolo:** controlla la posizione delle estremità dei pin e
	l'allineamento alla griglia.
- **Errori DRC imprevisti:** verifica il tipo elettrico di ogni pin.
- **Comportamento errato delle parti nei simboli multiparte:** ricontrolla la selezione delle parti e la numerazione dei pin
	per ogni parte.
- **L'alimentazione non si connette automaticamente:** verifica che i nomi dei pin di alimentazione corrispondano ai nomi
	delle reti previsti.

## Pagine correlate
{: #related-pages}

- [Librerie di simboli personalizzate](../Custom-symbol-libraries/)
- [Uso delle librerie di simboli](../Using-Symbol-Libraries/)
- [Simboli](../Symbols/)
- [Verifica delle regole di progettazione](../Design-Rules-Check/)

- Torna a [Simboli e librerie](../Symbols-and-Libraries/)
- Torna all'[indice dei contenuti v4](../CONTENTS/)

---
layout: default
---
# Modificare un simbolo
{: #editing-a-symbol}

## Come funzionano i simboli in TinyCAD
{: #how-symbols-work-in-tinycad}

I simboli vengono creati a partire da oggetti normali disponibili nella barra degli strumenti. Possono contenere
uno qualsiasi di questi oggetti, tranne altri simboli.

Se il simbolo contiene oggetti con funzioni speciali (come un elemento di alimentazione
o un filo), tali oggetti verranno trattati come annotazioni.

Tutte le loro funzioni speciali vengono perse quando sono usati in un simbolo. Solo i **pin** definiscono
i punti di connessione elettrica.

Riepilogo:
- un simbolo è un elemento grafico riutilizzabile con attributi
- la connettività elettrica è definita dai **pin**
- e i simboli sono archiviati nelle **librerie** (`.tclib`)

## Prima di iniziare
{: #before-you-start}

Questa pagina presuppone che sia già aperta una libreria da modificare. I passaggi per
aprire o creare una libreria dipendono dall'uso di TinyCAD Web o
dell'applicazione desktop; inizia quindi da [Librerie di simboli personalizzate](../Custom-symbol-libraries/).

Se cerchi informazioni su come esplorare e inserire simboli anziché modificarli, consulta [Usare le librerie di simboli](../Using-Symbol-Libraries/).

## Aprire o creare il simbolo
{: #open-or-create-the-symbol}

1. Apri la libreria.
2. Per modificare un simbolo esistente, fai clic su di esso nell'elenco dei simboli della libreria.
3. Per creare un nuovo simbolo, fai clic sul pulsante `+` nell'elenco dei simboli.
4. Il simbolo selezionato o appena creato viene caricato nell'area di disegno dell'editor.

Puoi quindi modificare la grafica, i pin e gli attributi del simbolo.

{% include video-player.html
	src="/v4/images/video/Video 12.mp4"
	width=1532
	height=978
	caption="Video dimostrativo che mostra come modificare una libreria."
%}


## Disegnare la forma del simbolo (grafica)
{: #drawing-the-symbol-shape-graphics}

Usa gli strumenti di disegno standard per creare il contorno del simbolo:

- linee/polilinee per i bordi del corpo,
- rettangoli/ellissi/archi per i contorni comuni dei package,
- testo per eventuali marcature interne.

Mantieni il simbolo leggibile al normale livello di zoom dello schema. Le forme semplici di solito funzionano
meglio delle illustrazioni molto decorative.

## Aggiungere pin
{: #adding-pins}

I pin sono l'unica parte di un simbolo che ha attività elettrica.

Per ogni pin, imposta:

- **Numero del pin** (obbligatorio e univoco all'interno di una parte),
- **Nome del pin** (facoltativo ma vivamente consigliato),
- **Tipo elettrico** (obbligatorio per un DRC accurato),
- **Stile/forma del pin** (stile visivo),
- **Visibilità** del testo del nome/numero del pin, secondo necessità.

Posiziona con cura i pin sulla griglia, in modo che sia semplice collegare i fili nello schema.

{% include video-player.html
	src="/v4/images/video/Video 13.mp4"
	width=1532
	height=978
	caption="Video dimostrativo che mostra come aggiungere pin."
%}


## Pannello Pin
{: #pin-panel}

Puoi modificare i pin nel pannello **Pin**, nell'area del **pannello inferiore**.

Le modifiche nel pannello Pin sono **immediate**: ogni modifica di un campo invia un'azione di aggiornamento del pin
all'istante (non è necessario premere un pulsante OK/Applica).

Sezioni del pannello Pin:

1. **Nome**
	- Casella di controllo Mostra (`show_name`)
	- Campo di testo Nome (`name`)
	- Casella di controllo Centra sul pin (`centre_name`)
2. **Numero**
	- Casella di controllo Mostra (`show_number`)
	- Campo di testo Numero (`number`)
	- Campo numerico Scostamento (`number_pos`)
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

La selezione del tipo elettrico corretto è essenziale. Il DRC usa questi tipi per rilevare
gli errori di connessione.

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

- Indica i segnali effettivamente pilotati come **Uscita**.
- Indica i segnali che fungono solo da ricevitore come **Ingresso**.
- Usa **Ingresso di alimentazione/Uscita di alimentazione** quando la semantica di pilotaggio dell'alimentazione è rilevante per il DRC.
- Usa **Non connesso** solo per i pin che devono intenzionalmente risultare non connessi.
- Usa **Libero**/**Non specificato** con cautela e in modo coerente in tutta la libreria.

Implicazioni pratiche per il DRC:

- Un tipo di pin errato può causare falsi errori DRC (o nascondere errori reali).
- I nomi dei pin di alimentazione devono corrispondere ai nomi di alimentazione previsti per attivare il comportamento automatico.

## Pin di alimentazione e pin nascosti
{: #power-and-hidden-pins}

I pin di alimentazione e i pin nascosti sono visibili durante la modifica del simbolo, ma in genere
sono nascosti quando il simbolo viene inserito in un disegno.

In particolare, per i **pin di alimentazione**:

- Il nome del pin funge da nome della rete di alimentazione.
- La connettività è automatica quando i nomi di alimentazione corrispondono.
- Nella vista del simbolo inserito, normalmente non si disegnano fili direttamente verso questi pin di alimentazione
	nascosti.

Per i **pin nascosti**:

- Sono comunque attivi elettricamente.
- Usali quando vuoi disegnare una forma del pin e le relative etichette personalizzate.

## Simboli multi-parte (parti per package)
{: #multi-part-symbols-parts-per-package}

TinyCAD supporta dispositivi con più unità logiche in un unico package (per
esempio, porte quadruple).

Si usano due tipi di simboli multi-parte:

1. Simboli multi-parte **omogenei**:
	 - le parti condividono lo stesso contorno,
	 - di solito differiscono solo per i numeri dei pin.
2. Simboli multi-parte **eterogenei**:
	 - le parti possono avere contorni diversi,
	 - le parti possono anche avere insiemi di pin/funzioni diversi.

Usa il tipo omogeneo quando le parti sono intercambiabili; usa il tipo eterogeneo quando ogni parte
ha una funzione distinta.

### Procedura per i simboli multi-parte
{: #multi-part-workflow}

1. Decidi innanzitutto se usare il tipo omogeneo o eterogeneo.
2. Imposta il numero di parti per package.

Per le parti omogenee:
- La prima parte definisce la forma del simbolo e la disposizione dei pin

Per le parti eterogenee:
- Puoi disegnare una forma diversa per ogni parte

## Attributi e proprietà del simbolo
{: #symbol-attributes-and-properties}

Puoi modificare gli attributi del simbolo nel pannello **Symbol**, nel **pannello inferiore**.

Oltre alla grafica e ai pin, definisci con cura gli attributi del simbolo:

- Nome principale del simbolo (ed eventuali alias),
- Formato predefinito di **Ref** (per esempio `U?`, `R?`, `C?`),
- **Nome/Valore** predefinito,
- Attributi/parametri aggiuntivi (per esempio package/footprint, campi del
	modello di simulazione o metadati specifici del progetto).

## Salvare, duplicare, rinominare, eliminare
{: #save-duplicate-rename-delete}

Azioni comuni per la gestione dei simboli durante la modifica di una libreria:

- **Salva/aggiorna** il simbolo corrente per registrare le modifiche.
- **Duplica** per creare varianti (consigliato invece di modificare in modo
	distruttivo un simbolo di base).
- **Rinomina** per uniformare la nomenclatura.
- **Elimina** i simboli obsoleti (annulla l'operazione se il simbolo è stato eliminato per errore).

Usa la duplicazione per le varianti di package/valore che condividono la grafica ma hanno
impostazioni predefinite diverse.

## Elenco di controllo prima di pubblicare un simbolo
{: #validation-checklist-before-publishing-a-symbol}

Prima di usare ampiamente un simbolo, verifica che:

1. I pin siano sulla griglia e facili da collegare.
2. I numeri dei pin siano completi e univoci per ogni parte.
3. I tipi elettrici siano impostati correttamente per tutti i pin.
4. Il comportamento dei pin di alimentazione/nascosti sia intenzionale.
5. La configurazione multi-parte (se presente) sia corretta.
6. I valori predefiniti di nome/riferimento siano appropriati.
7. Il simbolo sia leggibile al normale livello di zoom del disegno.

Inserisci quindi il simbolo in uno schema di prova ed esegui il DRC.

## Suggerimenti per la risoluzione dei problemi
{: #troubleshooting-tips}

- **I fili non si collegano al simbolo:** controlla la posizione delle estremità dei pin e
	l'allineamento alla griglia.
- **Errori DRC imprevisti:** verifica il tipo elettrico di ogni pin.
- **Comportamento errato delle parti nei simboli multi-parte:** ricontrolla la selezione delle parti e la numerazione dei pin
	per ogni parte.
- **L'alimentazione non si connette automaticamente:** verifica che i nomi dei pin di alimentazione corrispondano ai nomi
	delle reti previsti.

## Pagine correlate
{: #related-pages}

- [Librerie di simboli personalizzate](../Custom-symbol-libraries/)
- [Usare le librerie di simboli](../Using-Symbol-Libraries/)
- [Simboli](../Symbols/)
- [Controllo delle regole di progettazione](../Design-Rules-Check/)

- Torna a [Simboli e librerie](../Symbols-and-Libraries/)
- Torna a [Indice dei contenuti v4](../CONTENTS/)

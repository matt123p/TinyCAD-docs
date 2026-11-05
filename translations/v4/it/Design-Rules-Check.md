---
layout: default
---
# Verifica delle regole di progettazione
{: #design-rules-check}

In v4, **Verifica delle regole di progettazione (Design Rules Check) funziona come in v3**.

Usa la Verifica delle regole di progettazione per individuare problemi gravi di
connettività nello schema prima di generare output come netlist o VHDL.

Controlla i cablaggi e le combinazioni dei tipi di pin per rilevare errori elettrici comuni (ad
esempio, uscite in conflitto collegate tra loro). **Non** garantisce che il
circuito sia funzionalmente corretto.

Punta a non avere errori di progettazione per aumentare la fiducia nella correttezza dello schema.

## Eseguire la verifica delle regole di progettazione
{: #run-design-rules-check}

1. Apri il progetto.
2. Esegui **Verifica regole di progettazione (Check Design Rules)** dal menu Strumenti speciali (Special tools).
3. Nella finestra di dialogo delle regole, attiva o disattiva i controlli che desideri.
4. Seleziona **OK** per eseguire la verifica.

{% include video-player.html
	src="/v4/images/video/Video 8.mp4"
	width=1622
	height=952
	caption="Video dimostrativo che mostra come eseguire e usare il verificatore delle regole di progettazione."
%}


## Interpretare i risultati
{: #reading-the-results}

- Ogni errore rilevato è contrassegnato nello schema da un cerchio rosso.
- Accanto al progetto compare un elenco di errori.
- Selezionando un errore nell'elenco, la relativa posizione viene centrata nel disegno.

## Cancellare e ripetere la verifica
{: #clear-and-re-check}

- Seleziona **Chiudi (Close)** nell'elenco degli errori per rimuovere tutti gli indicatori di errore attuali.
- I cerchi degli errori sono indicatori temporanei per la revisione: non vengono salvati con il
	progetto.

- Torna a [Avanzate](../Advanced/)
- Torna a [Indice di v4](../CONTENTS/)

---
layout: default
---
# Connessioni non collegate (No Connects)
{: #no-connects}

Gli indicatori di connessione non collegata segnalano che un pin è intenzionalmente lasciato scollegato.

Usali quando un pin del simbolo non viene utilizzato nel progetto, ma vuoi
renderlo esplicito a chiunque legga lo schema e al verificatore delle regole di progetto.

## A cosa servono le connessioni non collegate
{: #what-no-connects-are-for}

- documentare i pin intenzionalmente inutilizzati,
- ridurre le ambiguità durante la revisione,
- evitare avvisi/errori DRC per i pin lasciati aperti per scelta progettuale.

Esempi tipici includono ingressi logici inutilizzati, canali di amplificatori operazionali di riserva o pin di connettori non utilizzati.

## Come inserire le connessioni non collegate
{: #how-to-place-no-connects}

1. Seleziona lo strumento No Connect.
2. Posiziona l'indicatore direttamente sul pin inutilizzato (o sul punto che deve rimanere aperto).
3. Ripeti l'operazione per ogni pin intenzionalmente scollegato.

Le connessioni non collegate sono semplici indicatori: dopo il posizionamento possono essere spostati o eliminati,
ma non possono essere modificati in altro modo.

## Buone pratiche
{: #best-practices}

- Usa le connessioni non collegate in modo coerente su tutti i pin intenzionalmente aperti.
- Non posizionare connessioni non collegate sui pin che dovranno essere cablati in seguito.
- Esegui il DRC dopo le modifiche importanti per rilevare i nuovi pin scollegati.

- Torna a [Disegno](../User-guide/)
- Torna a [Contenuti v4](../CONTENTS/)

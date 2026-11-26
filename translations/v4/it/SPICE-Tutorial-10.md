---
layout: default
title: "10. Design investigations: sweeps, tolerances, noise and diagnosis"
---
# 10. Analisi di progetto: sweep, tolleranze, rumore e diagnosi
{: #design-investigations-sweeps-tolerances-noise-and-diagnosis}

[Precedente](/v4/SPICE-Tutorial-09/) · [Indice](/v4/Simulation-Tutorials/) · [Successivo: SPICE in TinyCAD](/v4/SPICE-Tutorial-11/)

Gli esempi di questo capitolo sono inclusi in TinyCAD. Scegli **Apri esempio → Tutorial SPICE**, seleziona l'esempio indicato, quindi scegli **Apri disegno**. Non è necessario scaricare nulla.

Un rapporto di simulazione utile registra la domanda, la versione del circuito/modello,
l'analisi, lo stimolo, la finestra di misura e il criterio di accettazione. Un grafico convincente
privo di questi dettagli è difficile da riprodurre.

## Sweep dei parametri e tolleranze
{: #parameter-sweeps-and-tolerances}

Torna a **rc-ac**. In **Regolazione / sweep**, esegui lo sweep preparato
per i valori di R1: 1 kΩ, 2,2 kΩ e 4,7 kΩ. Le frequenze di taglio attese sono 159,15, 72,34 e
33,86 Hz. Si tratta di uno sweep dei parametri: mostra in che modo le scelte deliberate dei componenti
influenzano la risposta. È diverso dallo **sweep DC** del capitolo 2, che varia
il valore DC di una sorgente indipendente durante una singola analisi.

Per le tolleranze, usa **Laboratorio di analisi → Studi di tolleranza**. Definisci le associazioni di R1 e C1,
scegli una distribuzione e un seed, quindi aggiungi un requisito sulla frequenza di taglio. Con valori
indipendenti limitati a ±5%, gli estremi RC producono circa
144,36–176,35 Hz. Un campione Monte Carlo non raggiunge necessariamente nessuno dei due estremi.
La deviazione standard di una distribuzione normale non costituisce un limite rigido di ±. Registra
la convenzione selezionata e se le variabili sono correlate.

TinyCAD può conservare le condizioni dei casi di prova e le definizioni delle misure/dei requisiti.
Usa **Applica** solo quando vuoi trasformare una regolazione temporanea in una modifica effettiva dello schema.
Salva una revisione separata del circuito quando cambi la topologia o il testo del modello;
un hash di acquisizione è un identificatore, non una revisione dello schema recuperabile.

## Rumore: un tipo di uscita diverso
{: #noise-a-different-kind-of-output}

Apri **rc-noise**. Richiede il rumore in uscita su OUT,
riferito alla sorgente indipendente V1, da 1 Hz a 100 kHz a 27 °C.
La sorgente ideale è priva di rumore; R1 contribuisce con rumore termico filtrato da C1.

![Densità spettrale del rumore in uscita RC calcolata](/v4/Images/simulation-tutorials/spice/rc-noise-results.png)

Il rumore totale in uscita è circa **64,2 nV RMS** in questa banda. Per un
circuito RC ideale integrato da zero a frequenza infinita, il rumore quadratico medio del condensatore è `kT/C`, che corrisponde a circa 64,4 nV RMS a 300,15 K e 1 µF.
La banda finita della simulazione spiega la piccola differenza. La densità spettrale
si esprime in V/√Hz; il suo integrale si ottiene elevando al quadrato la densità e integrando sulla
banda di frequenza, quindi estraendo la radice quadrata. Non è la somma aritmetica dei campioni
di densità visualizzati. Il valore totale riferito all'ingresso è un risultato diverso.

## Funzioni di trasferimento e poli
{: #transfer-functions-and-poles}

Apri **rc-tf**. Il risultato della funzione di trasferimento a piccoli segnali in continua è
1 V/V, la resistenza d'uscita è 1 kΩ e la resistenza d'ingresso è praticamente infinita,
perché a DC il condensatore è aperto. Una resistenza d'ingresso stampata molto elevata, come `1e20`, rappresenta un risultato numerico di circuito aperto, non un resistore fisico misurato da 100 exaohm.

Apri **rc-pz**. Il polo è circa **−1000 rad/s**,
in accordo con `s = −1/(RC)`. Dividendo il suo modulo per `2π` si ottengono 159,15 Hz. Un polo nel semipiano sinistro del piano complesso s rappresenta il decadimento in questo sistema lineare.
L'assenza di uno zero finito è prevista per questa funzione di trasferimento passa-basso del primo ordine.

Queste analisi operano sul modello linearizzato. Non sostituiscono le prove transitorie
per verificare saturazione, commutazione o avviamento. Anche un guadagno arbitrario tra uscita e ingresso
non equivale al guadagno dell'anello di retroazione; per misurare la stabilità serve una configurazione
di prova dell'anello definita con attenzione.

## Un menu pratico di misure
{: #a-practical-measurement-menu}

| Attività | Grandezze adatte |
| --- | --- |
| Condizionamento del sensore | Guadagno, offset, rumore, frequenza di taglio, tempo di assestamento |
| Interfaccia a impulsi | Tempo di salita/discesa, ritardo, larghezza dell'impulso, ciclo di lavoro |
| Amplificatore | Polarizzazione, guadagno/fase, banda passante, uscita RMS, potenza, saturazione |
| Stadio di potenza | Ondulazione, corrente di picco, potenza media, energia, rendimento |
| Variazioni dei componenti | Sovrapposizioni degli sweep, valori peggiori osservati, risultati dei requisiti |

TinyCAD offre anche un oscilloscopio virtuale, un multimetro, un generatore di funzioni e
un alimentatore da banco con limitazione di corrente, nella sezione **Apparecchiature di laboratorio**. Le loro impedenze e
limiti sono importanti: per esempio, il generatore di funzioni ha normalmente una resistenza d'uscita di 50 Ω.
Offrono un flusso di lavoro alternativo per affrontare le stesse questioni elettriche.

## Diagnosi di un'esecuzione non riuscita o non plausibile
{: #diagnose-a-failed-or-implausible-run}

Controlla innanzitutto la massa, i cortocircuiti involontari e i nodi flottanti. Verifica
la corrispondenza dei pin dei componenti e i nomi dei modelli. Per l'AC, verifica l'ampiezza AC della sorgente indipendente;
per i transitori, verifica la durata, il passo massimo e i fronti finiti dello stimolo. Leggi
il log del risolutore e conferma che l'esecuzione abbia raggiunto il tempo finale richiesto. Una forma d'onda
parziale non è un risultato completo.

Prima di modificare le impostazioni numeriche, prova un'analisi del punto di lavoro più semplice o una prova
su uno stadio isolato. Documenta ogni resistenza di dispersione, resistenza di sorgente o capacità parassita aggiunta:
modifica il circuito oltre a favorire la convergenza. Esporta un CSV
quando serve un calcolo specializzato e conserva le unità e le colonne complesse.

Approfondimenti: il [tutorial sul linguaggio di controllo di ngspice](https://ngspice.sourceforge.io/ngspice-control-language-tutorial.html)
mostra l'automazione da riga di comando. Il modello documentale di TinyCAD intenzionalmente non
esegue script `.control` arbitrari; usa i controlli di analisi e studio supportati
oppure esporta una netlist per un flusso di lavoro separato con ngspice.

## Scaricare i circuiti della lezione
{: #download-the-lesson-circuits}

Gli stessi esempi sono già disponibili in **Apri esempio**. Per ottenere una copia indipendente, scarica un disegno `.dzn` e usa **File → Apri** in TinyCAD. Il file `.cir` di accompagnamento è testo SPICE, da esaminare o usare con un simulatore esterno compatibile, non un disegno TinyCAD. Per eseguire nuove simulazioni di circuiti XSPICE serve Desktop.

| Esempio | Disegno | Netlist |
| --- | --- | --- |
| rc-ac | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/rc-ac.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/rc-ac.cir) |
| dc-sweep | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/dc-sweep.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/dc-sweep.cir) |
| rc-noise | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/rc-noise.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/rc-noise.cir) |
| rc-tf | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/rc-tf.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/rc-tf.cir) |
| rc-pz | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/rc-pz.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/rc-pz.cir) |

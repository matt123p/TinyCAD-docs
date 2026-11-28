---
layout: default
title: 7. Rebuilding AMP.DSN and checking its bias
---
# 7. Ricostruire AMP.DSN e verificarne la polarizzazione
{: #rebuilding-ampdsn-and-checking-its-bias}

[Precedente](/v4/SPICE-Tutorial-06/) · [Indice](/v4/Simulation-Tutorials/) · [Successivo](/v4/SPICE-Tutorial-08/)

Gli esempi di questo capitolo sono inclusi in TinyCAD. Scegli **Apri esempio → Tutorial SPICE**, seleziona l'esempio indicato, quindi scegli **Apri disegno**. Non è necessario scaricare nulla.

Apri **amp-bias**. Questo ricostruisce la topologia di
`D:\Projects\TinyCAD\examples\AMP.DSN`, intitolato **Amplificatore a transistor** e
attribuito originariamente a Matt Pyne, 1995. Utilizza componenti della libreria
SPICE essentials di TinyCAD e sorgenti di simulazione configurabili.

![AMP.DSN ricostruito con componenti di simulazione](/v4/Images/simulation-tutorials/spice/amp-bias-circuit.png)

## Cosa è stato mantenuto e cosa è stato modellato
{: #what-was-preserved-and-what-was-modelled}

| Parte originale | Parte ricostruita e funzione |
| --- | --- |
| R1, annotazione 470 Ω, 0,5 W | Resistenza di emettitore di Q2 da 470 Ω; la potenza nominale non è un limite termico simulato |
| R2, 1 kΩ | Resistenza di collettore di Q1 |
| R3, 100 kΩ; R4, 10 kΩ | Partitore di polarizzazione della base di Q1 |
| R5, 220 Ω | Resistenza di degenerazione dell'emettitore di Q1 |
| R6, potenziometro logaritmico da 10 kΩ | Potenziometro da 10 kΩ, ripartizione elettrica `Wiper = 0.5` |
| C1, 100 µF; C2, 470 µF | Condensatori ideali di accoppiamento in ingresso e in uscita |
| Q1, ZTX650; Q2, BC140 | Entrambi utilizzano il modello generico `TC_NPN` incorporato |
| Ingresso phono J1 | Sorgente configurabile VIN, riferita al nodo 0 |
| T1, altoparlante da 8 Ω | RL = 8 Ω, carico elettrico resistivo |
| Alimentazioni 12 V / 0 V | Sorgente indipendente da 12 V VCC e nodo SPICE 0 |

La legge meccanica logaritmica originale non specifica una ripartizione univoca della resistenza
per ogni posizione dell'albero. Qui 0.5 corrisponde a una ripartizione **elettrica** di 5 kΩ/5 kΩ,
non a un'affermazione sulla posizione intermedia della manopola originale. La resistenza della sorgente
VIN è ideale. Il modello dell'altoparlante omette induttanza, risonanza ed efficienza acustica;
on consente di prevedere la pressione sonora.

Entrambi i transistor incorporano il modello della libreria:

```spice
.model TC_NPN NPN(Is=1e-14 Bf=200 Vaf=100 Cje=10p Cjc=5p Tf=500p)
```

Questi sono parametri di modello illustrativi, non modelli del produttore per ZTX650 o
BC140. Il loro impiego è intenzionale ed è visibile nelle proprietà SPICE del componente.
Per ottenere prestazioni esatte di quei dispositivi originali servirebbero modelli validati
oltre a informazioni parassite e termiche per il confronto con l'hardware.

## Comprendere i due stadi
{: #understand-the-two-stages}

Q1 è uno stadio a emettitore comune. La tensione del collettore diminuisce quando aumenta la corrente di collettore,
quindi lo stadio inverte il segnale. R5 fornisce degenerazione di emettitore: la retroazione negativa
riduce la sensibilità del guadagno e migliora la linearità. R2 converte le variazioni di corrente
in variazioni della tensione di collettore.

Q2 è un inseguitore di emettitore. Il suo collettore è collegato a VCC e il suo emettitore
pilota R1 e, tramite C2, il carico dell'altoparlante. Fornisce pilotaggio in corrente anziché
un ulteriore grande guadagno di tensione. C1 e C2 isolano i livelli di polarizzazione in continua
tra gli stadi e i collegamenti esterni.

## Eseguire il punto di funzionamento prima di applicare un segnale
{: #run-operating-point-before-applying-a-signal}

I valori di riferimento a 27°C sono:

| Grandezza | Valore di riferimento |
| --- | --- |
| BASE, base di Q1 | 1.0235 V |
| Emettitore di Q1, tra Q1 e R5 | 0.3582 V |
| COLLECTOR, collettore di Q1 / base di Q2 | 10.2800 V |
| EMITTER, emettitore di Q2 | 9.5476 V |
| OUT, dopo C2 | 0 V |
| Corrente erogata da VCC | 22.044 mA |
| Potenza di alimentazione | 264.533 mW |

OUT è a zero in continua perché C2 blocca la tensione continua dell'emettitore e RL riporta
l'uscita a massa. Una polarizzazione nulla in uscita, quindi, non significa che l'amplificatore
non sia alimentato. La corrente di emettitore di Q1 è circa `0.3582 / 220 = 1.628 mA`;
la corrente a riposo nella resistenza di emettitore di Q2 è `9.5476 / 470 = 20.31 mA`.

La polarizzazione dello stadio di uscita è elevata rispetto alla tensione di alimentazione di 12 V e la corrente a riposo
è modesta per 8 Ω. Ciò suggerisce già limiti asimmetrici all'escursione del segnale.
I due capitoli successivi verificano questa previsione, invece di presumere che un circuito
chiamato amplificatore debba avere un elevato guadagno di tensione o una grande potenza audio.

## Scaricare i circuiti della lezione
{: #download-the-lesson-circuits}

Gli stessi esempi sono già disponibili in **Apri esempio**. Per ottenere una copia indipendente, scarica un disegno
`.dzn` e usa **File → Apri** in TinyCAD. Il file `.cir` associato è testo SPICE da consultare o da usare con un simulatore esterno compatibile, non un disegno TinyCAD. Per eseguire da zero circuiti XSPICE è necessario Desktop.

| Esempio | Disegno | Netlist |
| --- | --- | --- |
| amp-bias | [Disegno TinyCAD](/v4/examples/simulation-tutorials/spice/amp-bias.dzn) | [Testo SPICE](/v4/examples/simulation-tutorials/spice/amp-bias.cir) |

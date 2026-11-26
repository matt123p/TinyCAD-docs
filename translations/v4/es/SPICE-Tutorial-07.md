---
layout: default
title: 7. Rebuilding AMP.DSN and checking its bias
---
# 7. Reconstrucción de AMP.DSN y comprobación de su polarización
{: #rebuilding-ampdsn-and-checking-its-bias}

[Anterior](/v4/SPICE-Tutorial-06/) · [Contenido](/v4/Simulation-Tutorials/) · [Siguiente](/v4/SPICE-Tutorial-08/)

Los ejemplos de este capítulo se incluyen con TinyCAD. Elija **Open Example → SPICE tutorial**, seleccione el ejemplo indicado y, a continuación, elija **Open Drawing**. No es necesario descargar nada.

Abra **amp-bias**. Este reconstruye la topología de
`D:\Projects\TinyCAD\examples\AMP.DSN`, titulado **Transistor Amplifier** y
atribuido originalmente a Matt Pyne, en 1995. Utiliza componentes de la biblioteca
SPICE essentials de TinyCAD y fuentes de simulación configurables.

![AMP.DSN reconstruido con componentes de simulación](/v4/Images/simulation-tutorials/spice/amp-bias-circuit.png)

## Qué se conservó y qué se modeló
{: #what-was-preserved-and-what-was-modelled}

| Componente original | Componente reconstruido y función |
| --- | --- |
| R1, anotación de 470 Ω, 0.5 W | Resistencia de emisor de Q2 de 470 Ω; la potencia nominal no es un límite térmico simulado |
| R2, 1 kΩ | Resistencia de colector de Q1 |
| R3, 100 kΩ; R4, 10 kΩ | Divisor de polarización de base de Q1 |
| R5, 220 Ω | Resistencia de degeneración de emisor de Q1 |
| R6, potenciómetro logarítmico de 10 kΩ | Potenciómetro de 10 kΩ, división eléctrica `Wiper = 0.5` |
| C1, 100 µF; C2, 470 µF | Condensadores ideales de acoplamiento de entrada y salida |
| Q1, ZTX650; Q2, BC140 | Ambos utilizan el modelo genérico integrado de `TC_NPN` |
| Entrada phono J1 | Fuente configurable VIN, referenciada al nodo 0 |
| T1, altavoz de 8 Ω | RL = 8 Ω, una carga eléctrica resistiva |
| Líneas de 12 V / 0 V | Fuente independiente de 12 V VCC y nodo SPICE 0 |

La curva mecánica logarítmica original no especifica una división de resistencia
única para cada posición del eje. Aquí, 0.5 representa una división **eléctrica** de 5 kΩ/5 kΩ,
no una afirmación sobre la posición intermedia del mando original. La resistencia
de fuente de VIN es ideal. El modelo del altavoz omite la inductancia, la resonancia y la eficiencia
acústica; no permite predecir el nivel de presión sonora.

Ambos transistores integran el modelo de la biblioteca:

```spice
.model TC_NPN NPN(Is=1e-14 Bf=200 Vaf=100 Cje=10p Cjc=5p Tf=500p)
```

Estos son parámetros de modelo ilustrativos, no modelos de fabricante para ZTX650 o
BC140. Su uso es intencional y visible en las propiedades SPICE del componente.
Para obtener el rendimiento exacto de esos dispositivos originales se necesitarían modelos
validados de los dispositivos y, para compararlos con hardware, información parásita y térmica.

## Comprender las dos etapas
{: #understand-the-two-stages}

Q1 es una etapa de emisor común. Su tensión de colector disminuye cuando aumenta la corriente de colector,
por lo que invierte la señal. R5 proporciona degeneración de emisor: la realimentación negativa
reduce la sensibilidad de la ganancia y mejora la linealidad. R2 convierte los cambios de corriente
en cambios de tensión de colector.

Q2 es un seguidor de emisor. Su colector está conectado a VCC y su emisor
excita R1 y, a través de C2, la carga del altavoz. Proporciona capacidad de entrega de corriente,
no otra gran ganancia de tensión. C1 y C2 aíslan los niveles de continua entre
las etapas y las conexiones externas.

## Ejecutar el punto de operación antes de aplicar una señal
{: #run-operating-point-before-applying-a-signal}

Los valores de referencia a 27°C son:

| Magnitud | Valor de referencia |
| --- | --- |
| BASE, base de Q1 | 1.0235 V |
| Emisor de Q1, entre Q1 y R5 | 0.3582 V |
| COLECTOR, colector de Q1 / base de Q2 | 10.2800 V |
| EMISOR, emisor de Q2 | 9.5476 V |
| OUT, después de C2 | 0 V |
| Corriente suministrada por VCC | 22.044 mA |
| Potencia de alimentación | 264.533 mW |

OUT es cero en continua porque C2 bloquea la tensión continua del emisor y RL conecta
la salida a tierra. Por tanto, una polarización de salida nula no implica que el amplificador
esté sin alimentación. La corriente de emisor de Q1 es aproximadamente `0.3582 / 220 = 1.628 mA`;
la corriente de reposo de la resistencia de emisor de Q2 es `9.5476 / 470 = 20.31 mA`.

La polarización de la etapa de salida es alta en relación con el raíl de 12 V y la corriente de reposo
es moderada para 8 Ω. Esto ya sugiere límites asimétricos para la excursión de señal.
Los dos capítulos siguientes ponen a prueba esta predicción, en lugar de dar por supuesto que un circuito
llamado amplificador debe tener una gran ganancia de tensión o una elevada potencia de audio.

## Descargar los circuitos de la lección
{: #download-the-lesson-circuits}

Los mismos ejemplos ya están disponibles en **Open Example**. Para obtener una copia independiente, descargue un dibujo `.dzn` y utilice **File → Open** en TinyCAD. El archivo complementario `.cir` es texto SPICE para inspeccionarlo o utilizarlo en un simulador externo compatible, no un dibujo de TinyCAD. Los circuitos XSPICE requieren Desktop para ejecutar simulaciones nuevas.

| Ejemplo | Dibujo | Lista de conexiones |
| --- | --- | --- |
| amp-bias | [Dibujo de TinyCAD](/v4/examples/simulation-tutorials/spice/amp-bias.dzn) | [Texto SPICE](/v4/examples/simulation-tutorials/spice/amp-bias.cir) |

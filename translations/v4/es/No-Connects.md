---
layout: default
---
# Sin conexión
{: #no-connects}

Los marcadores de sin conexión indican que un pin se deja intencionadamente sin conectar.

Úselos cuando no utilice un pin de símbolo en el diseño, pero quiera dejarlo
explícito para quienes lean el esquema y para el comprobador de reglas de diseño.

## Para qué sirven las conexiones sin conectar
{: #what-no-connects-are-for}

- documentar los pines sin usar intencionadamente,
- reducir la ambigüedad durante la revisión,
- evitar advertencias o errores de DRC en pines que se dejan abiertos deliberadamente.

Entre los ejemplos habituales se incluyen entradas lógicas sin usar, canales
sobrantes de amplificadores operacionales o pines de conectores sin usar.

## Cómo colocar marcadores de sin conexión
{: #how-to-place-no-connects}

1. Seleccione la herramienta Sin conexión (No Connect).
2. Coloque el marcador directamente sobre el pin sin usar (o el punto que se dejará abierto).
3. Repita el proceso para cada pin que se deje intencionadamente sin conectar.

Los marcadores de sin conexión son sencillos: se pueden mover o eliminar después de colocarlos,
pero no se pueden editar de otro modo.

## Prácticas recomendadas
{: #best-practices}

- Use marcadores de sin conexión de forma coherente en todos los pines que se dejen abiertos intencionadamente.
- No coloque marcadores de sin conexión en pines que deban cablearse más adelante.
- Ejecute DRC después de realizar cambios importantes para detectar pines que hayan quedado sin conectar.

- Volver a [Dibujo](../User-guide/)
- Volver a [contenido de v4](../CONTENTS/)

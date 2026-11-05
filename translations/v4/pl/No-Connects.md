---
layout: default
---
# Znaczniki niepodłączenia
{: #no-connects}

Znaczniki niepodłączenia wskazują, że pin jest celowo pozostawiony bez połączenia.

Używaj ich, gdy pin symbolu nie jest używany w projekcie, ale chcesz wyraźnie
zaznaczyć to dla osób czytających schemat oraz dla narzędzia sprawdzającego reguły
projektowe.

## Do czego służą znaczniki niepodłączenia
{: #what-no-connects-are-for}

- dokumentują celowo nieużywane piny,
- ograniczają niejednoznaczność podczas przeglądu,
- pozwalają uniknąć ostrzeżeń i błędów DRC dotyczących pinów celowo pozostawionych bez połączenia.

Typowe przykłady obejmują nieużywane wejścia logiczne, zapasowe kanały wzmacniacza
operacyjnego lub nieużywane piny złącza.

## Jak umieszczać znaczniki niepodłączenia
{: #how-to-place-no-connects}

1. Wybierz narzędzie No Connect (brak połączenia).
2. Umieść znacznik bezpośrednio na nieużywanym pinie (lub w miejscu, które ma pozostać niepodłączone).
3. Powtórz dla każdego pinu, który ma celowo pozostać niepodłączony.

Znaczniki niepodłączenia są prostymi oznaczeniami: po umieszczeniu można je
przenosić lub usuwać, ale nie można ich w inny sposób edytować.

## Dobre praktyki
{: #best-practices}

- Konsekwentnie stosuj znaczniki niepodłączenia dla wszystkich pinów celowo pozostawionych bez połączenia.
- Nie umieszczaj znaczników niepodłączenia na pinach, które mają zostać później połączone przewodami.
- Po większych zmianach uruchom DRC, aby wykryć nowo odłączone piny.

- Wróć do [Rysowania](../User-guide/)
- Wróć do [spisu treści v4](../CONTENTS/)

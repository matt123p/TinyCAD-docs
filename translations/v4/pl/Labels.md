---
layout: default
---
# Etykiety
{: #labels}

Etykiety są aktywnymi elektrycznie nazwami sieci. Wszystkie przewody z tą samą nazwą etykiety
są traktowane jako połączone, nawet jeśli nie narysowano między nimi fizycznego przewodu.

Używaj etykiet, aby:

- łączyć odległe od siebie punkty na tym samym arkuszu,
- zmniejszać wizualny bałagan na gęstych schematach,
- łączyć sieci między arkuszami tego samego rysunku,
- łączyć piny symboli hierarchicznych z sieciami wewnętrznymi.

## Jak działają etykiety
{: #how-labels-work}

- Etykieta łączy się z przewodem, pod którym się znajduje.
- O połączeniu decyduje **tekst etykiety**, a nie jej położenie.
- **Kształt** etykiety jest wyłącznie stylem wizualnym i nie wpływa na połączenia,
	generowanie listy sieci ani działanie DRC.
- Używaj tej samej nazwy wszędzie tam, gdzie ma występować jedna sieć elektryczna.

## Wytyczne dotyczące nazewnictwa etykiet
{: #label-naming-guidelines}

- Używaj czytelnych nazw sieci, takich jak `RESET`, `SCL`, `+5V`, `ADC_IN0`.
- Zachowuj spójne nazewnictwo w całym projekcie.
- Unikaj przypadkowych różnic (`GND` w porównaniu z `GN D`, `CLK` w porównaniu z `Clk`), ponieważ powodują one
	utworzenie różnych sieci.
- Jeśli nazwy zawierają liczby, wielokrotne wstawianie etykiet może zwiększać lub zmniejszać
	sufiksy liczbowe za pomocą opcji Repeat Direction name.

## Kształty etykiet i ich zastosowanie
{: #label-shapes-and-why-to-use-them}

TinyCAD udostępnia kilka kształtów etykiet w opcjach narzędzia etykiet. Wybierz kształt
ze względu na czytelność i styl rysunku; wszystkie kształty są elektrycznie równoważne.

Typowe powody stosowania różnych kształtów:

- odróżnienie często używanych sieci od jednorazowych sieci lokalnych,
- wizualne wyróżnienie połączeń poza arkuszem lub między blokami,
- wskazanie kierunku lub przeznaczenia sygnału dla czytelników,
- dopasowanie do stylu schematów przyjętego w zespole lub firmie.

Praktyczna zasada: wybierz niewielki zestaw kształtów i stosuj je konsekwentnie, aby czytelnicy
mogli szybko przejrzeć schemat.

## Wstawianie i edytowanie etykiet
{: #placing-and-editing-labels}

1. Wybierz narzędzie Label.
2. Wprowadź nazwę sieci.
3. W razie potrzeby wybierz orientację i kształt.
4. Umieść etykietę na docelowym przewodzie.
5. Powtórz czynność w każdym miejscu, które ma być połączone z tą siecią.


## Etykiety na rysunkach wieloarkuszowych
{: #labels-with-multi-sheet-drawings}

W pliku rysunku wieloarkuszowego etykiety są standardowym sposobem łączenia sieci między
arkuszami. Zobacz [Rysunki wieloarkuszowe](../Multiple-Sheet-Drawings/), aby zapoznać się z przykładem i filmem dotyczącym zarządzania arkuszami oraz etykiet międzyarkuszowych.

- Ta sama nazwa etykiety na różnych arkuszach oznacza tę samą sieć elektryczną.
- To łączenie międzyarkuszowe jest wykorzystywane podczas generowania list sieci.
- Używaj stabilnych, jednoznacznych nazw dla wspólnych sieci (`+3V3`, `GND`, `I2C_SDA`,
	`I2C_SCL` itd.).

Zalecany przebieg pracy:

1. Z góry ustal wspólne nazwy sieci.
2. Używaj dokładnie tych samych nazw na każdym arkuszu.
3. Uruchom kontrole DRC/listy sieci, aby wcześnie wykryć błędy nazewnictwa.

- Wróć do [Rysunek](../User-guide/)
- Wróć do [spisu treści v4](../)

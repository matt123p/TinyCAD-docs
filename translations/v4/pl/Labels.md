---
layout: default
---
# Etykiety
{: #labels}

Etykiety to aktywne elektrycznie nazwy sieci. Wszystkie przewody z etykietami o tej samej nazwie
są traktowane jako połączone, nawet jeśli nie narysowano między nimi fizycznego przewodu.

Używaj etykiet, aby:

- łączyć punkty znacznie oddalone od siebie na tym samym arkuszu,
- zmniejszać wizualny bałagan na gęstych schematach,
- łączyć sieci między arkuszami tego samego rysunku,
- łączyć piny symboli hierarchicznych z sieciami wewnętrznymi.

## Zasada działania etykiet
{: #how-labels-work}

- Etykieta łączy się z przewodem znajdującym się pod nią.
- O połączeniu decyduje **tekst etykiety**, a nie jej położenie.
- **Kształt** etykiety jest wyłącznie stylem wizualnym i nie wpływa na połączenia,
	generowanie listy sieci ani działanie DRC.
- Wszędzie tam, gdzie ma występować ta sama sieć elektryczna, używaj tej samej nazwy.

## Wskazówki dotyczące nazewnictwa etykiet
{: #label-naming-guidelines}

- Używaj czytelnych nazw sieci, takich jak `RESET`, `SCL`, `+5V`, `ADC_IN0`.
- Zachowaj spójne nazewnictwo w całym projekcie.
- Unikaj przypadkowych różnic (`GND` vs `GN D`, `CLK` vs `Clk`), ponieważ powodują one
	utworzenie różnych sieci.
- Jeśli nazwy zawierają liczby, powtarzane wstawianie może zwiększać lub zmniejszać
	sufiksy numeryczne, zależnie od opcji Repeat Direction name.

## Kształty etykiet i ich zastosowanie
{: #label-shapes-and-why-to-use-them}

TinyCAD udostępnia wiele kształtów etykiet w opcjach narzędzia etykiet. Wybierz kształt
pod kątem czytelności i stylu rysunku; wszystkie kształty są równoważne pod względem elektrycznym.

Typowe powody stosowania różnych kształtów:

- odróżnienie często używanych sieci od jednorazowych sieci lokalnych,
- wizualne wyróżnienie połączeń poza arkuszem lub między blokami,
- wskazanie kierunku lub przeznaczenia sygnału dla czytających schemat,
- dopasowanie do stylu schematów przyjętego w zespole lub firmie.

Praktyczna zasada: wybierz niewielki zestaw kształtów i używaj ich konsekwentnie, aby czytający
mogli szybko przejrzeć schemat.

## Umieszczanie i edytowanie etykiet
{: #placing-and-editing-labels}

1. Wybierz narzędzie Etykieta.
2. Wprowadź nazwę sieci.
3. W razie potrzeby wybierz orientację i kształt.
4. Umieść etykietę na docelowym przewodzie.
5. Powtórz czynność w każdym miejscu, które ma być połączone z tą siecią.


## Etykiety na rysunkach wieloarkuszowych
{: #labels-with-multi-sheet-drawings}

W pliku rysunku wieloarkuszowego etykiety są standardowym sposobem łączenia sieci między
arkuszami.

- Ta sama nazwa etykiety na różnych arkuszach oznacza tę samą sieć elektryczną.
- To łączenie między arkuszami jest wykorzystywane podczas generowania list sieci.
- Używaj stabilnych, jednoznacznych nazw dla wspólnych sieci (`+3V3`, `GND`, `I2C_SDA`,
	`I2C_SCL` itd.).

Zalecany tok pracy:

1. Z góry ustal wspólne nazwy sieci.
2. Używaj dokładnie tych samych nazw na każdym arkuszu.
3. Uruchamiaj kontrole DRC/listy sieci, aby wcześnie wykrywać błędy nazewnictwa.

- Wróć do [Rysowanie](../User-guide/)
- Wróć do [Spisu treści v4](../CONTENTS/)

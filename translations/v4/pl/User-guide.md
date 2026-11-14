---
layout: default
---
# TinyCAD — Rysowanie
{: #tinycad---drawing}

Ta sekcja opisuje podstawowy tok pracy przy rysowaniu, w tym konfigurację
pierwszego rysunku, etykiety, magistrale, niepodłączone piny, adnotacje i drukowanie.

Informacje o porządkowaniu istniejącego obwodu znajdziesz w sekcji [Porządkowanie układu](../Layout-Tidy-Up/). Opisano tam zakresy działania funkcji Automatyczny układ, ustawienia siły oraz cofanie wyników za pomocą polecenia Cofnij.

## Tymczasowe ukrywanie obiektów
{: #temporarily-hiding-objects}

Aby uzyskać dostęp do obiektów znajdujących się pod zatłoczoną częścią rysunku:

1. Zaznacz obiekty, które chcesz tymczasowo usunąć z widoku.
2. Otwórz menu kontekstowe rysunku (kliknij prawym przyciskiem myszy lub naciśnij i przytrzymaj na ekranie dotykowym),
   a następnie wybierz **Ukryj zaznaczone**.
3. Po zakończeniu otwórz menu kontekstowe i wybierz **Pokaż wszystkie ukryte obiekty**,
   aby przywrócić widoczność wszystkich ukrytych obiektów na bieżącym arkuszu.

Ukrytych obiektów nie można zaznaczać na obszarze roboczym, gdy są ukryte. Ukrywanie to
ustawienie tymczasowego widoku: nie powoduje usunięcia obiektów ani zapisania flagi ukrycia w pliku
rysunku. Ukryte obiekty nadal uczestniczą w połączeniach elektrycznych i na listach sieci,
a także są widoczne na wydrukach i w plikach PDF.

Informacje o gestach na ekranie dotykowym i precyzyjnym umieszczaniu znajdziesz w sekcji [Obsługa dotykowa](../Touch-controls/).

## Strony
{: #pages}

{% assign current_version = page.url | split: '/' | slice: 1, 1 | first -%}
{% assign section = nil -%}
{% for entry in site.data.navigation[current_version] -%}
	{% if entry.url == page.url -%}
		{% assign section = entry -%}
		{% break -%}
	{% endif -%}
{% endfor -%}
{% if section and section.children %}
{% for child in section.children -%}
- [{{ child.title }}]({{ child.url | relative_url }})
{% endfor %}
{% endif %}

- Wróć do [spisu treści v4](../CONTENTS/)

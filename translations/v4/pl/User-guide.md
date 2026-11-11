---
layout: default
---
# TinyCAD — Rysowanie
{: #tinycad-v4---drawing}

Ta sekcja opisuje podstawowy tok pracy przy rysowaniu, w tym konfigurację
pierwszego rysunku, etykiety, magistrale, oznaczenia braku połączenia, adnotacje i drukowanie.

## Tymczasowe ukrywanie obiektów
{: #temporarily-hiding-objects}

Aby uzyskać dostęp do obiektów znajdujących się pod zatłoczoną częścią rysunku:

1. Zaznacz obiekty, które chcesz usunąć z widoku.
2. Otwórz menu kontekstowe rysunku (kliknij prawym przyciskiem myszy lub
   naciśnij i przytrzymaj na ekranie dotykowym) i wybierz **Ukryj zaznaczone (Hide selected)**.
3. Po zakończeniu otwórz menu kontekstowe i wybierz **Pokaż wszystkie ukryte obiekty (Show all hidden objects)**,
   aby przywrócić widoczność wszystkich ukrytych obiektów na bieżącym arkuszu.

Ukrytych obiektów nie można zaznaczać na obszarze roboczym, gdy są niewidoczne. Ukrywanie to
tymczasowe ustawienie widoku: nie usuwa obiektów ani nie zapisuje flagi ukrycia w pliku
rysunku. Ukryte obiekty nadal uczestniczą w połączeniach elektrycznych i w listach sieci,
a także pojawiają się na wydrukach i w plikach PDF.

Informacje o gestach na ekranie dotykowym i precyzyjnym rozmieszczaniu obiektów znajdziesz w sekcji [Sterowanie dotykowe](../Touch-controls/).

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

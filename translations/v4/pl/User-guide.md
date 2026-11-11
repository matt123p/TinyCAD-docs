---
layout: default
---
# TinyCAD — Rysowanie
{: #tinycad---drawing}

Ta sekcja opisuje podstawowy sposób pracy z rysunkiem, w tym konfigurację
pierwszego rysunku, etykiety, szyny, niepodłączone wyprowadzenia, adnotacje i drukowanie.

## Tymczasowe ukrywanie obiektów
{: #temporarily-hiding-objects}

Aby uzyskać dostęp do obiektów znajdujących się pod zatłoczoną częścią rysunku:

1. Zaznacz obiekty, które chcesz usunąć z drogi.
2. Otwórz menu kontekstowe rysunku (kliknij prawym przyciskiem myszy lub
   naciśnij i przytrzymaj na ekranie dotykowym) i wybierz **Ukryj zaznaczone (Hide selected)**.
3. Po zakończeniu otwórz menu kontekstowe i wybierz **Pokaż wszystkie ukryte obiekty (Show all hidden objects)**,
   aby przywrócić wszystkie ukryte obiekty na bieżącym arkuszu.

Ukrytych obiektów nie można zaznaczać na obszarze roboczym. Ukrywanie jest
tymczasowym ustawieniem widoku: nie usuwa obiektów ani nie zapisuje flagi ukrycia w pliku rysunku. Ukryte obiekty nadal biorą udział w połączeniach elektrycznych i tworzeniu list sieci,
a także są widoczne w wydrukach i plikach PDF.

Gesty na ekranie dotykowym i precyzyjne rozmieszczanie opisano w sekcji [Obsługa dotykowa](../Touch-controls/).

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

- Wróć do [spisu treści wersji v4](../CONTENTS/)

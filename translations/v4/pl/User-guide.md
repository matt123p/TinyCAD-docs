---
layout: default
---
# TinyCAD — Rysowanie
{: #tinycad---drawing}

Asystent [AI assistant](../AI-Assistant/) może utworzyć obwód lub dodać elementy do otwartego rysunku na podstawie instrukcji tekstowych. Wprowadzone zmiany pozostają edytowalne i można je cofnąć.

Ta sekcja opisuje podstawowy tok pracy podczas rysowania, w tym konfigurację
pierwszego rysunku, etykiety, szyny, oznaczenia braku połączenia, adnotacje i drukowanie.

Informacje o przestawianiu istniejącego obwodu znajdziesz w sekcji [Porządkowanie układu](../Layout-Tidy-Up/). Opisano w niej zakresy automatycznego rozmieszczania, ustawienia siły działania oraz cofanie wyniku za pomocą polecenia Cofnij.

Informacje o logotypach, obrazach referencyjnych i zeskanowanych schematach znajdziesz w sekcji [Obrazy](../Images/). Opisano w niej kopiowanie i wklejanie, importowanie plików, zmianę rozmiaru, stałe proporcje obrazu oraz przycinanie pikseli.

## Tymczasowe ukrywanie obiektów
{: #temporarily-hiding-objects}

Aby uzyskać dostęp do obiektów znajdujących się pod zatłoczoną częścią rysunku:

1. Zaznacz obiekty, które chcesz odsunąć.
2. Otwórz menu kontekstowe rysunku (kliknij prawym przyciskiem myszy lub naciśnij i przytrzymaj na ekranie dotykowym)
   i wybierz **Ukryj zaznaczone (Hide selected)**.
3. Po zakończeniu otwórz menu kontekstowe i wybierz **Pokaż wszystkie ukryte obiekty (Show all hidden objects)**,
   aby przywrócić wszystkie ukryte obiekty na bieżącym arkuszu.

Ukrytych obiektów nie można zaznaczać na obszarze roboczym, gdy są ukryte. Ukrywanie to
tymczasowe ustawienie widoku: nie powoduje usunięcia obiektów ani zapisania flagi ukrycia w pliku
rysunku. Ukryte obiekty nadal uczestniczą w połączeniach elektrycznych i tworzeniu list sieci,
a także pojawiają się na wydrukach i w plikach PDF.

Informacje o gestach na ekranie dotykowym i precyzyjnym rozmieszczaniu znajdziesz w sekcji [Sterowanie dotykowe](../Touch-controls/).

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

---
layout: default
---
# Kontrola reguł projektowych
{: #design-rules-check}

W wersji v4 **Kontrola reguł projektowych działa tak samo jak w v3**.

Użyj funkcji Kontrola reguł projektowych, aby wykryć poważne problemy z połączeniami na schemacie przed wygenerowaniem plików wyjściowych, takich jak listy sieci lub VHDL.

Sprawdza ona połączenia przewodami i kombinacje typów wyprowadzeń pod kątem typowych błędów elektrycznych (na przykład połączenia ze sobą wyjść o sprzecznych typach). **Nie** gwarantuje poprawności działania układu.

Dąż do uzyskania zera błędów projektowych, aby zwiększyć pewność co do poprawności schematu.

## Uruchamianie kontroli reguł projektowych
{: #run-design-rules-check}

1. Otwórz projekt.
2. Z menu Narzędzia specjalne (Special tools) wybierz **Sprawdź reguły projektowe (Check Design Rules)**.
3. W oknie dialogowym reguł włącz lub wyłącz wybrane kontrole reguł.
4. Wybierz **OK**, aby uruchomić kontrolę.

{% include video-player.html
	src="/v4/images/video/Video 8.mp4"
	width=1622
	height=952
	caption="Samouczek wideo pokazujący, jak uruchomić i używać narzędzia do kontroli reguł projektowych."
%}


## Odczytywanie wyników
{: #reading-the-results}

- Każdy wykryty błąd jest oznaczony na schemacie czerwonym kółkiem.
- Obok projektu wyświetlana jest lista błędów.
- Wybranie błędu na liście powoduje wyśrodkowanie jego lokalizacji na rysunku.

## Czyszczenie wyników i ponowne sprawdzanie
{: #clear-and-re-check}

- Wybierz **Zamknij (Close)** na liście błędów, aby usunąć wszystkie bieżące znaczniki błędów.
- Czerwone kółka błędów to tymczasowe znaczniki służące do przeglądu: nie są zapisywane wraz z projektem.

- Wróć do [Zaawansowanej części](../Advanced/)
- Wróć do [spisu treści v4](../CONTENTS/)

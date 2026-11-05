---
layout: default
---
# Przyciąganie do siatki
{: #snap-to-grid}

Przyciąganie do siatki powoduje, że podczas rysowania lub umieszczania elementów
pozycja myszy jest przyciągana do najbliższego punktu siatki. Dzięki temu symbole
i przewody pozostają wyrównane, a połączenia trafiają dokładnie w prawidłowe punkty
przyłączeniowe.

## Dlaczego to ważne
{: #why-it-matters}

- Utrzymuje połączenie końców przewodów ze stykami symboli — jeśli nie używasz przyciągania do siatki, istnieje ryzyko, że przewody nie połączą się ze stykami.
- Zapobiega wizualnym przesunięciom, które mogą wyglądać poprawnie, ale pozostawać
	niepołączone elektrycznie w narzędziach TinyCAD.

Podczas typowej pracy nad schematem przyciąganie do siatki powinno być włączone.

## Wyświetlanie siatki i włączanie przyciągania
{: #showing-the-grid-and-enabling-snapping}

Otwórz menu **Settings** na pasku narzędzi, a następnie wybierz **Settings**, aby zmienić te
niezależne opcje:

- **Show the grid** steruje widocznością kropek siatki. Wyłączenie tej opcji nie wyłącza przyciągania.
- **Snap to grid** steruje wyrównywaniem podczas umieszczania i przesuwania obiektów. Wyłączenie tej opcji nie ukrywa siatki.

Kropki siatki mogą być ukrywane, gdy powiększenie jest zbyt małe, aby wyświetlać je wyraźnie.

![Okno dialogowe Settings z osobnymi polami wyboru Show the grid i Snap to grid.](../images/grid-settings.png)

Gdy obiekty są zaznaczone, klawisze strzałek przesuwają je o odstęp siatki, jeśli przyciąganie
jest włączone. Gdy przyciąganie jest wyłączone, obiekty przesuwają się małymi krokami, bez
zaokrąglania położenia z powrotem do siatki. Przytrzymaj **Ctrl**, aby przesuwać małymi krokami
niezależnie od ustawienia przyciągania. Gdy nic nie jest zaznaczone, klawisze strzałek przesuwają widok.

## Odstęp siatki
{: #grid-spacing}

TinyCAD obsługuje 3 tryby odstępu siatki:

- **Normal grid spacing**: najlepszy do większości prac nad schematami.
- **Fine grid spacing**: większa gęstość punktów (dwukrotnie więcej punktów), przydatna
	do tworzenia opisów i rysowania symboli.
- **User grid spacing**: własna wartość odstępu wprowadzona w oknie ustawień,
	w mm lub calach, zależnie od aktualnie używanych jednostek.

Zaleca się używanie **Fine grid** we wszystkich rysunkach.

- Powrót do [Rysowanie](../User-guide/)
- Powrót do [Spis treści v4](../CONTENTS/)

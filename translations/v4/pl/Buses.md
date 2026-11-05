---
layout: default
---
# Magistrale
{: #buses}

Magistrala jest pomocą w rysowaniu schematów, służącą do przedstawiania grup powiązanych sygnałów. Magistrale
zwiększają czytelność, zwłaszcza gdy wiele podobnych przewodów biegnie obok siebie.

W TinyCAD rzeczywiste połączenia elektryczne nadal tworzy się za pomocą **przewodów i etykiet sieci**. Sama magistrala nie łączy sygnałów elektrycznie.

## Przykładowy rysunek
{: #example-drawing}

<img src="/v4/images/Image 1.svg" alt="A example of using Buses" />

<p>
	<a href="/v4/examples/Bus%20Example.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;Pobierz
	</a>
</p>


## Praca z magistralą
{: #bus-workflow}

1. Narysuj linię magistrali w miejscu, w którym mają przebiegać zgrupowane sygnały.
2. Umieść wejścia magistrali w miejscach, w których poszczególne sygnały mają się odgałęziać.
3. Narysuj przewody od każdego wejścia magistrali do wyprowadzeń symboli lub punktów połączeń.
4. Umieść etykiety na tych przewodach (na przykład `D0`, `D1`, `D2`...).
5. Powtórz etykiety/przewody przy magistrali docelowej, używając tych samych nazw.

Gdy etykiety są zgodne, te sieci są połączone.

## Obiekty magistrali w TinyCAD
{: #bus-objects-in-tinycad}

- **Magistrala**: główna ścieżka grupująca; przydatna do porządkowania wielu połączeń.
- **Wejście magistrali**: wizualne wejście z magistrali do pojedynczego przewodu lub wyjście z niej.
- **Nazwa magistrali**: tekst umieszczony wzdłuż magistrali (na przykład `Data Bus` lub liczba przewodów).

Nazwy magistrali opisują jej przeznaczenie dla użytkowników; etykiety na przewodach określają tożsamość sieci elektrycznej dla narzędzi.

## Wskazówki dotyczące nazewnictwa i powtarzania
{: #naming-and-repeat-tips}

- Zachowuj spójność etykiet sygnałów magistrali na całej długości (`A0..A15`, `D0..D7` itd.).
- Używaj opcji powtarzania, aby przyspieszyć rozmieszczanie wejść i nadawanie kolejnych etykiet.
- Kolejność nazw sygnałów może być różna na każdym końcu, o ile nazwy są zgodne.

## Węzły
{: #junctions}

Magistrale nie wymagają kropek węzłów na samej linii magistrali.

## Magistrale i rysunki wieloarkuszowe
{: #buses-and-multi-sheet-drawings}

Na różnych arkuszach używaj ponownie tych samych etykiet sygnałów, aby połączyć odpowiadające sobie sieci.
Grafika i nazwy magistrali zwiększają czytelność, natomiast nazwy etykiet określają połączenia
na potrzeby tworzenia listy sieci/DRC.

- Powrót do [Rysowanie](../User-guide/)
- Powrót do [spisu treści v4](../CONTENTS/)

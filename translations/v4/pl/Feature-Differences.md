---
layout: default
---
# Różnice między funkcjami
{: #feature-differences}

Ta strona podsumowuje najważniejsze różnice między TinyCAD w przeglądarce a wersją na komputer.

<div class="comparison-legend" aria-label="Feature status legend">
	<span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Dostępne</span>
	<span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Częściowo</span>
	<span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Niedostępne</span>
</div>

<div class="comparison-table-wrap">
	<table class="comparison-table">
		<colgroup>
			<col class="comparison-col-feature" />
			<col class="comparison-col-browser" />
			<col class="comparison-col-app" />
			<col class="comparison-col-v3" />
			<col class="comparison-col-notes" />
			</colgroup>
			<caption>Porównanie funkcji TinyCAD w przeglądarce, aplikacji na komputer i TinyCAD v3.</caption>
		<thead>
			<tr>
				<th scope="col">Funkcja</th>
				<th scope="col">TinyCAD (przeglądarka)</th>
				<th scope="col">TinyCAD (aplikacja)</th>
				<th scope="col">TinyCAD v3</th>
				<th scope="col">Uwagi</th>
		</tr>
		</thead>
			<tbody>
				<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Podstawowa edycja i biblioteki</th>
			</tr>
			<tr>
				<th scope="row">Wspomagana przez AI edycja symboli, bibliotek i obwodów</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nie</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nie</span></td>
				<td>Tylko aplikacja na komputer; asystent AI (chatbot) nie jest dostępny w wersji przeglądarkowej. Połącz dostawcę AI za pomocą funkcji Chat, używając klucza API, kwalifikującego się konta ChatGPT lub lokalnego Ollama. Zobacz <a href="../AI-Assistant/">Konfiguracja asystenta AI i polecenia</a>.</td>
			</tr>
			<tr>
				<th scope="row">Wczytywanie/zapisywanie plików TinyCAD <code>.dsn</code></th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td>TinyCAD w wersji webowej ma zapewniać pełną zgodność formatu plików z wersją na komputer.</td>
		</tr>
			<tr>
				<th scope="row">Wczytywanie/zapisywanie skompresowanych plików TinyCAD <code>.dzn</code></th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nie</span></td>
				<td>Pliki rysunku oparte na ZIP, zawierające konfigurację symulacji i opcjonalnie jej wyniki. Zobacz <a href="../Simulation/#dzn-simulation-drawings">pliki symulacji</a>.</td>
			</tr>
			<tr>
				<th scope="row">Formatowanie Markdown w polach tekstowych</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nie</span></td>
				<td>W starszych wersjach używany jest zwykły tekst. Zobacz <a href="../Text/#markdown-text-boxes">pola tekstowe Markdown</a>.</td>
			</tr>
			<tr>
				<th scope="row">Obsługa języków interfejsu</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nie</span></td>
				<td>Zobacz <a href="../Language-translation/">Tłumaczenie interfejsu</a>.</td>
			</tr>
			<tr>
				<th scope="row">Wczytywanie/edycja plików biblioteki TinyCAD <code>.tclib</code></th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td>Zobacz <a href="../Custom-symbol-libraries/">biblioteki niestandardowe</a>.</td>
			</tr>
			<tr>
				<th scope="row">Dołączone biblioteki aparatury/modeli i przeglądarka przykładów</th>
				<td>Tak</td>
				<td>Tak</td>
				<td>Nie</td>
				<td>Zobacz <a href="../Bundled-Libraries/">dołączone biblioteki</a> i <a href="../Bundled-Examples/">przykłady</a>.</td>
			</tr>
			<tr>
				<th scope="row">Import symboli z TinyCAD.net</th>
				<td><div class="feature-detail"><span class="feature-detail-title">Wyszukiwanie wbudowane</span><span class="feature-detail-copy">Wyszukiwanie w aplikacji webowej. Działa także kopiowanie i wklejanie.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Wyszukiwanie wbudowane</span><span class="feature-detail-copy">Wyszukiwanie w aplikacji na komputer. Działa także kopiowanie i wklejanie.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Wyszukiwanie online</span><span class="feature-detail-copy">Wyszukiwanie w TinyCAD.net, a następnie kopiowanie i wklejanie do aplikacji na komputer.</span></div></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Import symboli z KiCAD</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nie</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Rysunki wieloarkuszowe</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Etykiety</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Magistrale</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Kształty i adnotacje</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Wyszukiwanie na rysunku</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Kontrola reguł projektowych</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Generowanie listy połączeń</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Ustawianie stylu wielu elementów</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nie</span></td>
				<td>Aplikacja webowa umożliwia zaznaczanie wielu elementów adnotacji i stosowanie wspólnego stylu oraz wypełnienia.</td>
			</tr>
			<tr>
				<th scope="row">Automatyczne umieszczanie węzłów</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Cofnij/Ponów</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td></td>
			</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Wyjście i integracja</th>
			</tr>
			<tr>
				<th scope="row">Drukowanie</th>
				<td><div class="feature-detail"><span class="feature-detail-title">Eksport do PDF</span><span class="feature-detail-copy">Drukuj z przeglądarki lub dowolnej przeglądarki plików PDF.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Drukowanie bezpośrednie</span><span class="feature-detail-copy">Korzysta ze sterownika drukarki systemu operacyjnego.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Drukowanie bezpośrednie</span><span class="feature-detail-copy">Korzysta ze sterownika drukarki systemu operacyjnego.</span></div></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Eksport do obrazu</th>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">Grafika wektorowa dla przeglądarek i nowoczesnych narzędzi projektowych.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">Grafika wektorowa dla przeglądarek i nowoczesnych narzędzi projektowych.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">PNG</span><span class="feature-detail-copy">Format eksportu rastrowego.</span></div></td>
				<td>Darmowe konwertery SVG na PNG są dostępne online.</td>
			</tr>
			<tr>
				<th scope="row">Eksport do PDF</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Częściowo</span></td>
				<td>Użyj opcji drukowania do PDF w TinyCAD v3.</td>
			</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Funkcje zaawansowane</th>
		</tr>
			<tr>
				<th scope="row">Zintegrowana symulacja analogowa SPICE </th>
				<td><div class="feature-detail"><span><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></span><span class="feature-detail-copy">ngspice WebAssembly</span></div></td>
				<td><div class="feature-detail"><span><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></span><span class="feature-detail-copy">Natywne ngspice</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nie</span></td>
				<td><a href="../Simulation/">Arkusze symulacji, wykresy, pomiary i eksploracja</a>.</td>
			</tr>
			<tr>
				<th scope="row">Symulacja zdarzeniowa XSPICE </th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nie</span><sup><a href="#xspice-browser-note">1</a></sup></td>
				<td><div class="feature-detail"><span><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></span><span class="feature-detail-copy">Dołączone modele kodowe</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nie</span></td>
			<td></td>
		</tr>
			<tr>
				<th scope="row">Okna wyskakujące przyrządów wirtualnych</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nie</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nie</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Zapis symulacji SPICE do pliku</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Zapis do pliku VHDL</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nie</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td>Tylko aplikacja na komputer. Zobacz <a href="../VHDL-output/">Eksport VHDL</a>.</td>
			</tr>
			<tr>
				<th scope="row">Hierarchiczne rysunki wieloplikowe</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nie</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nie</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td></td>
			</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">Platforma i instalacja</th>
			</tr>
			<tr>
				<th scope="row">Obsługa systemu Windows</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Pełna</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Aplikacja natywna</span><span class="feature-detail-copy">Obsługiwana instalacja aplikacji na komputerze z systemem Windows.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Pełna</span></td>
				<td>Zalecany sposób instalacji w systemie Windows: <a href="https://apps.microsoft.com/detail/9NZQ1M56NM3V">Microsoft Store</a>.</td>
			</tr>
			<tr>
				<th scope="row">Obsługa komputerów Mac</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Pełna</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Aplikacja natywna</span><span class="feature-detail-copy">Dostępna w App Store dla systemu macOS.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Częściowa</span></td>
				<td>TinyCAD v3 wymaga warstwy zgodności Wine w systemie macOS.</td>
			</tr>
			<tr>
				<th scope="row">Obsługa systemu Linux</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Pełna</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Instalacja aplikacji</span><span class="feature-detail-copy">Dostępna w Snap Store lub jako pakiet .dep.</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Częściowa</span></td>
				<td>TinyCAD v3 wymaga warstwy zgodności Wine w systemie Linux.</td>
			</tr>
			<tr>
				<th scope="row">Obsługa systemu Chrome OS </th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> Tak</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nie</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nie</span></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Obsługa telefonów/tabletów</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> Częściowa</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nie</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> Nie</span></td>
				<td>Można korzystać z przeglądarki, ale do sprawnej pracy nadal potrzebna jest mysz lub rysik.</td>
			</tr>
			<tr>
				<th scope="row">Wymagana instalacja</th>
				<td><div class="feature-detail"><span class="feature-detail-title">Nie</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Tak</span><span class="feature-detail-copy">Sklepy z aplikacjami i pakiety instalacyjne.</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Tak</span><span class="feature-detail-copy">Wymagany pakiet instalacyjny.</span></div></td>
				<td></td>
		</tr>
		</tbody>
	</table>
</div>

<p id="xspice-browser-note"><sup>1</sup> Wersje przeglądarkowe mogą otwierać rysunki zawierające wcześniej zapisane wyniki XSPICE do przeglądania. Uruchomienie XSPICE wymaga TinyCAD Desktop.</p>

- Powrót do [Dokumentacji](../Reference/)
- Powrót do [spisu treści v4](../CONTENTS/)

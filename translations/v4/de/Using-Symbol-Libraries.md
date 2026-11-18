---
layout: default
---
# Symbolbibliotheken verwenden
{: #using-symbol-libraries}

## Was ist eine Symbolbibliothek?
{: #what-is-a-symbol-library}

Beim Schaltungsentwurf ist eine **Symbolbibliothek** eine Sammlung von Schaltplansymbolen, die in einer einzelnen Datei gespeichert sind. Jedes Symbol stellt eine elektronische Komponente dar, beispielsweise einen Widerstand, einen Kondensator, einen IC, einen Steckverbinder, einen Transistor oder ein anderes Bauteil, und zwar als standardisierte Grafik mit festgelegten elektrischen Anschlusspunkten.

TinyCAD-Symbolbibliotheken verwenden das Dateiformat `.tclib`. Eine einzelne Bibliotheksdatei kann Dutzende oder Hunderte verwandter Symbole enthalten, die üblicherweise nach Kategorie oder Zweck gruppiert sind. Beispielsweise könnten Sie eine Bibliothek für passive Bauteile, eine weitere für Logik-ICs und eine weitere für Steckverbinder haben.

## Wofür werden Symbolbibliotheken verwendet?
{: #what-are-symbol-libraries-used-for}

Symbolbibliotheken erfüllen beim Erfassen von Schaltplänen mehrere wichtige Aufgaben:

- **Wiederverwendung in verschiedenen Entwürfen.** Sobald ein Symbol in einer Bibliothek definiert ist, kann es in jedem Schaltplan platziert werden, ohne es neu erstellen zu müssen. Das spart Zeit und gewährleistet Konsistenz zwischen Projekten.
- **Standardisierte Darstellung.** Bibliotheken sorgen für einen einheitlichen visuellen Stil und eine einheitliche Anschlussbelegung für jede Komponente. Jede Instanz eines 555-Timers oder eines Operationsverstärkers sieht gleich aus und hat dieselben Anschlussdefinitionen, wodurch Fehlinterpretationen vermieden werden.
- **Elektrische Korrektheit.** Jedes Symbol enthält Anschlussinformationen – Anschlussnamen, Nummern und elektrische Typen (Eingang, Ausgang, Versorgung, passiv usw.). Diese Daten dienen als Grundlage für nachgelagerte Prozesse wie die Netzlisten-Erstellung, Designregelprüfungen und den Export in Werkzeuge für das PCB-Layout.
- **Organisation.** Durch die Gruppierung von Symbolen in Bibliotheken nach Funktion, Hersteller oder Projekt lassen sich die passenden Bauteile leicht finden. In TinyCAD können Sie nur die Bibliotheken laden, die Sie für einen bestimmten Entwurf benötigen.
- **Austausch und Zusammenarbeit.** Bibliotheksdateien können zwischen Teammitgliedern geteilt oder aus der Community heruntergeladen werden, sodass alle mit denselben geprüften Symbold definitionen arbeiten.

## Integrierte und benutzerdefinierte Bibliotheken
{: #built-in-and-custom-libraries}

TinyCAD wird mit [gebündelten Bibliotheken](../Bundled-Libraries/) für Geräteanordnungen und modellierte elektronische Schaltungen geliefert. Wählen Sie im Auswahlbereich links **Standard** und anschließend eine Sammlung unter **Choose a standard library**. Ein separater Bibliotheksimport ist nicht erforderlich. Für nicht enthaltene Bauteile können Sie:

- Eigene [benutzerdefinierte Symbolbibliotheken](../Custom-symbol-libraries/) erstellen
- [Symbole aus KiCAD](../Importing-Symbols-from-KiCAD/)-Bibliotheken importieren
- Zusätzliche Bibliotheken von der TinyCAD.net-Website herunterladen

## Typischer Arbeitsablauf
{: #typical-workflow}

In der Praxis umfasst die Arbeit mit Symbolbibliotheken üblicherweise die folgenden Schritte:

1. Laden Sie die Bibliotheken, die in der aktuellen TinyCAD-Sitzung verfügbar sein sollen, oder fügen Sie sie hinzu.
2. Durchsuchen, suchen und zeigen Sie eine Vorschau der Symbole aus diesen Bibliotheken an.
3. Platzieren Sie Symbole in der Zeichnung.
4. Wenn eine Symbold efinition geändert werden muss, bearbeiten Sie die Bibliothek, statt die platzierte Instanz zu ändern.

Diese Seite behandelt die Schritte 1 bis 3. Informationen zur Verwaltung von Bibliotheksdateien finden Sie unter [Benutzerdefinierte Symbolbibliotheken](../Custom-symbol-libraries/). Informationen zum Ändern der Symbold efinitions selbst finden Sie unter [Ein Symbol bearbeiten](../Editing-a-Symbol/).

## Bibliotheken laden
{: #loading-libraries}

Bevor Sie ein Symbol platzieren können, muss seine Bibliothek in TinyCAD verfügbar sein.

- Integrierte Bibliotheken sind Bestandteil von TinyCAD.
- Benutzerdefinierte Bibliotheken müssen hinzugefügt oder geöffnet werden, bevor sie durchsucht werden können.
- Die genauen Schritte unterscheiden sich zwischen TinyCAD Web und der Desktop-Anwendung.

Unter [Benutzerdefinierte Symbolbibliotheken](../Custom-symbol-libraries/) finden Sie die produktspezifischen Schritte zum Hinzufügen, Öffnen, Aktualisieren, Erstellen und Bearbeiten von Bibliotheksdateien.

## Durchsuchen, Suchen und Vorschau anzeigen
{: #browsing-searching-and-previewing}

Um Symbole aus einer Bibliothek zu verwenden, muss die Bibliothek zunächst in Ihrer TinyCAD-Sitzung geladen sein. Nach dem Laden:

1. Öffnen Sie links die Symbolauswahl und wählen Sie **Standard**, **Online** oder **Meine Bibliotheken**.
2. Wählen Sie unter Standard eine gebündelte Bibliothek aus; unter Meine Bibliotheken öffnen oder erweitern Sie Ihre eigenen Bibliotheken. Verwenden Sie **Search libraries...**, um ein Symbol nach Namen oder Beschreibung zu finden.
3. Sehen Sie sich die Grafik in der Ergebnisliste an und wählen Sie anschließend ein Symbol aus, um eine größere Vorschau und die Beschreibung anzuzeigen.
4. Ziehen Sie die Vorschau in die Zeichnung und positionieren Sie sie am Raster. Drücken Sie Escape oder klicken Sie mit der rechten Maustaste, um das Platzieren von Kopien zu beenden.

Weitere Informationen zum Platzieren und Konfigurieren ausgewählter Symbole finden Sie unter [Symbole](../Symbols/).

## Größe des Bibliotheksbereichs ändern
{: #resizing-the-library-panel}

Ziehen Sie den rechten Rand des Bibliotheksbereichs, um ihn breiter oder schmaler zu machen. Ein breiterer
Bereich erleichtert die Anzeige langer Symbolnamen und Beschreibungen. Wenn lokaler Speicher verfügbar ist, merkt sich TinyCAD die Breite
auf diesem Gerät.

## Symbole sortieren
{: #sorting-symbols}

Verwenden Sie unter **Meine Bibliotheken** die Sortierschaltfläche neben den Bibliothekssteuerelementen, um zwischen
**Bibliotheksreihenfolge**, **A bis Z** und **Z bis A** umzuschalten. Der Tooltip der Schaltfläche zeigt den aktuellen Modus an.
Die Sortierung gilt für Symbole innerhalb von Bibliotheken und für Suchergebnisse, einschließlich
Online-Ergebnissen; sie ordnet Ihre Bibliotheksdateien oder -ordner nicht neu an. Wenn lokaler Speicher verfügbar ist, merkt sich TinyCAD
den Sortiermodus auf diesem Gerät.

Der Browser und die Desktop-Auswahl bieten die Registerkarten **Standard**, **Online** und **Meine Bibliotheken**. Die Quelle und die Auswahl der Standardbibliothek werden auf diesem Gerät gespeichert.

## Symbole in einer Zeichnung platzieren
{: #placing-symbols-in-a-drawing}

Sobald ein Symbol im Bibliotheksbrowser ausgewählt wurde, wird es zum aktiven Platzierungswerkzeug.

Den eigentlichen Platzierungsablauf, einschließlich des Verhaltens ausgewählter Symbole, finden Sie unter [Symbole](../Symbols/).

Beachten Sie, dass das Platzieren eines Symbols in einer Zeichnung **nicht** die Bibliotheksdefinition ändert. Wenn Sie Grafiken, Anschlüsse oder Attribute für die künftige Verwendung ändern möchten, bearbeiten Sie stattdessen das Symbol in seiner Bibliothek. Siehe [Ein Symbol bearbeiten](../Editing-a-Symbol/).

## Verwandte Aufgaben
{: #related-tasks}

- Verwenden Sie [Benutzerdefinierte Symbolbibliotheken](../Custom-symbol-libraries/), um `.tclib`-Dateien hinzuzufügen, zu öffnen, zu erstellen und zu verwalten.
- Verwenden Sie [Ein Symbol bearbeiten](../Editing-a-Symbol/), um Grafik, Anschlüsse und Attribute eines Symbols zu ändern.
- Verwenden Sie [Symbole](../Symbols/) für Details zum Platzieren, nachdem ein Symbol ausgewählt wurde.

## Seiten
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

- Zurück zu [Inhalt von v4](../)

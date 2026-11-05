---
layout: default
---
# Symbolbibliotheken verwenden
{: #using-symbol-libraries}

## Was ist eine Symbolbibliothek?
{: #what-is-a-symbol-library}

Im Schaltungsentwurf ist eine **Symbolbibliothek** eine Sammlung von Schaltplansymbolen, die in einer einzigen Datei gespeichert sind. Jedes Symbol stellt eine elektronische Komponente wie einen Widerstand, einen Kondensator, einen IC, einen Steckverbinder, einen Transistor oder ein anderes Bauteil als standardisierte Grafik mit festgelegten elektrischen Anschlusspunkten dar.

TinyCAD-Symbolbibliotheken verwenden das Dateiformat `.tclib`. Eine einzelne Bibliotheksdatei kann Dutzende oder Hunderte zusammengehöriger Symbole enthalten, die normalerweise nach Kategorie oder Verwendungszweck gruppiert sind. Sie können beispielsweise eine Bibliothek für passive Bauelemente, eine weitere für Logik-ICs und eine weitere für Steckverbinder haben.

## Wofür werden Symbolbibliotheken verwendet?
{: #what-are-symbol-libraries-used-for}

Symbolbibliotheken erfüllen bei der Schaltplanerstellung mehrere wichtige Aufgaben:

- **Wiederverwendung in verschiedenen Entwürfen.** Sobald ein Symbol in einer Bibliothek definiert ist, kann es in jeden Schaltplan eingefügt werden, ohne es neu erstellen zu müssen. Das spart Zeit und sorgt für Konsistenz zwischen Projekten.
- **Standardisierte Darstellung.** Bibliotheken legen für jede Komponente einen einheitlichen visuellen Stil und eine einheitliche Pin-Konfiguration fest. Jede Instanz eines 555-Timers oder eines Operationsverstärkers sieht gleich aus und hat dieselben Pin-Definitionen, wodurch Fehlinterpretationen vermieden werden.
- **Elektrische Korrektheit.** Jedes Symbol enthält Pin-Informationen — Pinnamen, Nummern und elektrische Typen (Eingang, Ausgang, Versorgung, passiv usw.). Diese Daten steuern nachgelagerte Prozesse wie die Netzlistenerstellung, Design Rule Checks und den Export in PCB-Layoutwerkzeuge.
- **Organisation.** Wenn Symbole nach Funktion, Hersteller oder Projekt in Bibliotheken gruppiert werden, lassen sich passende Bauteile leicht finden. Mit TinyCAD können Sie nur die Bibliotheken laden, die Sie für einen bestimmten Entwurf benötigen.
- **Austausch und Zusammenarbeit.** Bibliotheksdateien können mit Teammitgliedern geteilt oder aus der Community heruntergeladen werden, sodass alle mit denselben geprüften Symbolddefinitionen arbeiten.

## Integrierte und benutzerdefinierte Bibliotheken
{: #built-in-and-custom-libraries}

TinyCAD wird mit einer Reihe integrierter Bibliotheken für gängige Bauteilfamilien geliefert. Für nicht enthaltene Bauteile können Sie:

- Eigene [benutzerdefinierte Symbolbibliotheken](../Custom-symbol-libraries/) erstellen
- [Symbole aus KiCAD](../Importing-Symbols-from-KiCAD/)-Bibliotheken importieren
- Zusätzliche Bibliotheken von der TinyCAD.net-Website herunterladen

## Typischer Arbeitsablauf
{: #typical-workflow}

In der Praxis umfasst die Arbeit mit Symbolbibliotheken üblicherweise folgende Schritte:

1. Laden Sie die Bibliotheken, die in der aktuellen TinyCAD-Sitzung verfügbar sein sollen, oder fügen Sie sie hinzu.
2. Durchsuchen Sie die Symbole in diesen Bibliotheken, suchen Sie nach ihnen und zeigen Sie eine Vorschau an.
3. Fügen Sie Symbole in die Zeichnung ein.
4. Wenn eine Symbolddefinition geändert werden muss, bearbeiten Sie die Bibliothek statt der eingefügten Instanz.

Diese Seite behandelt die Schritte 1 bis 3. Informationen zur Verwaltung von Bibliotheksdateien finden Sie unter [Benutzerdefinierte Symbolbibliotheken](../Custom-symbol-libraries/). Informationen zum Ändern der Symbolddefinition selbst finden Sie unter [Ein Symbol bearbeiten](../Editing-a-Symbol/).

## Bibliotheken laden
{: #loading-libraries}

Bevor Sie ein Symbol einfügen können, muss seine Bibliothek in TinyCAD verfügbar sein.

- Integrierte Bibliotheken sind in TinyCAD enthalten.
- Benutzerdefinierte Bibliotheken müssen hinzugefügt oder geöffnet werden, bevor sie durchsucht werden können.
- Die genauen Schritte unterscheiden sich zwischen TinyCAD Web und der Desktopanwendung.

Die produktspezifischen Schritte zum Hinzufügen, Öffnen, Aktualisieren, Erstellen und Bearbeiten von Bibliotheksdateien finden Sie unter [Benutzerdefinierte Symbolbibliotheken](../Custom-symbol-libraries/).

## Durchsuchen, Suchen und Vorschau anzeigen
{: #browsing-searching-and-previewing}

Um Symbole aus einer Bibliothek zu verwenden, muss die Bibliothek zuerst in Ihrer TinyCAD-Sitzung geladen werden. Nach dem Laden:

1. Öffnen Sie die Symbolauswahl.
2. Klappen Sie eine Bibliothek auf, um deren Inhalt zu durchsuchen, oder verwenden Sie das Suchfeld, um ein Symbol anhand seines Namens oder seiner Beschreibung zu finden.
3. Klicken Sie auf ein Symbol, um eine Vorschau anzuzeigen.
4. Wählen Sie das Symbol aus, um es als aktives Platzierungswerkzeug festzulegen, und klicken Sie dann in Ihre Zeichnung, um Instanzen einzufügen.

Weitere Informationen zum Einfügen und Konfigurieren ausgewählter Symbole finden Sie unter [Symbole](../Symbols/).

## Größe des Bibliotheksbereichs ändern
{: #resizing-the-library-panel}

Ziehen Sie den rechten Rand des Bibliotheksbereichs, um ihn breiter oder schmaler zu machen. Ein breiterer
Bereich erleichtert die Anzeige langer Symbolnamen und Beschreibungen. TinyCAD merkt sich die Breite
auf diesem Gerät, sofern der lokale Speicher verfügbar ist.

## Symbole sortieren
{: #sorting-symbols}

Verwenden Sie unter **Meine Bibliotheken** die Sortierschaltfläche neben den Bibliothekssteuerelementen, um zwischen
**Bibliotheksreihenfolge**, **A bis Z** und **Z bis A** zu wechseln. Der Tooltip der Schaltfläche nennt den aktuellen Modus.
Die Sortierung gilt für Symbole innerhalb von Bibliotheken und für Suchergebnisse, einschließlich
Online-Ergebnissen; Bibliotheksdateien oder -ordner werden dadurch nicht umsortiert. TinyCAD
merkt sich den Sortiermodus auf diesem Gerät, sofern der lokale Speicher verfügbar ist.

Die Dateisystemversion im Browser zeigt nur die Onlinesuche an und bietet keine
Sortierschaltfläche **Meine Bibliotheken**.

## Symbole in eine Zeichnung einfügen
{: #placing-symbols-in-a-drawing}

Sobald ein Symbol im Bibliotheksbrowser ausgewählt ist, wird es zum aktiven Platzierungswerkzeug.

Den genauen Ablauf zum Einfügen, einschließlich des Verhaltens ausgewählter Symbole, finden Sie unter [Symbole](../Symbols/).

Beachten Sie, dass das Einfügen eines Symbols in eine Zeichnung **nicht** die Bibliotheksdefinition bearbeitet. Wenn Sie die Grafik, Pins oder Attribute für die zukünftige Verwendung ändern möchten, bearbeiten Sie stattdessen das Symbol in seiner Bibliothek. Siehe [Ein Symbol bearbeiten](../Editing-a-Symbol/).

## Verwandte Aufgaben
{: #related-tasks}

- Verwenden Sie [Benutzerdefinierte Symbolbibliotheken](../Custom-symbol-libraries/), um `.tclib`-Dateien hinzuzufügen, zu öffnen, zu erstellen und zu verwalten.
- Verwenden Sie [Ein Symbol bearbeiten](../Editing-a-Symbol/), um die Grafik, Pins und Attribute eines Symbols zu ändern.
- Unter [Symbole](../Symbols/) finden Sie Einzelheiten zum Einfügen eines ausgewählten Symbols.

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

- Zurück zu [Inhalt von v4](../CONTENTS/)

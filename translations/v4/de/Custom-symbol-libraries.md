---
layout: default
---
# Benutzerdefinierte Symbolbibliotheken
{: #custom-symbol-libraries}

Auf dieser Seite werden Aufgaben auf Bibliotheksebene behandelt: Bibliotheken zu TinyCAD hinzufügen, sie zur Bearbeitung öffnen, neue Bibliotheksdateien erstellen und einfache Verwaltungsaktionen für Symbole ausführen, z. B. hinzufügen, duplizieren, umbenennen und löschen.

Informationen zum Durchsuchen von Bibliotheken und zum Platzieren von Symbolen in einer Zeichnung finden Sie unter [Symbolbibliotheken verwenden](../Using-Symbol-Libraries/). Informationen zum Zeichnen oder Ändern des Symbols selbst, einschließlich Anschlüssen und Symboleigenschaften, finden Sie unter [Ein Symbol bearbeiten](../Editing-a-Symbol/).

Der [KI-Assistent](../AI-Assistant/) kann einer zur Bearbeitung geöffneten Bibliothek Bauteile hinzufügen. Erstellen oder öffnen Sie zuerst die Bibliothek, beschreiben Sie dann die benötigten Bauteile und fügen Sie deren Datenblätter bei. Überprüfen Sie die generierten Symbole und speichern Sie die Bibliothek wie gewohnt.

Bibliotheksdateien verwenden die Erweiterung `.tclib` und können auf Ihrem Computer oder mit der Google-Integration auf Google Drive gespeichert werden. Sie sind zwischen der Desktopversion von TinyCAD und der Browserversion kompatibel.

Sie können auch Bibliotheken laden, die mit der älteren Version 3 von TinyCAD erstellt wurden.

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Browser
{: #browser}

#### Eine vorhandene Bibliothek aus einer lokalen Datei öffnen
{: #open-an-existing-library-from-a-local-file}

1. Öffnen Sie einen weiteren TinyCAD-Browser-Tab bzw. ein weiteres TinyCAD-Browser-Fenster.
2. Verwenden Sie **Öffnen (Open)**, um eine Bibliotheksdatei mit der Erweiterung `.tclib` zu öffnen.
3. Lassen Sie diesen Tab geöffnet, während Sie mit der Bibliothek arbeiten.

Sobald die Bibliothek geöffnet ist, können Sie darin suchen oder Symbole aus diesem Fenster in Ihre Zeichnung ziehen. Sie können auch die Symbolddefinitionen in der Bibliothek bearbeiten.

#### Eine Google-Drive-Bibliothek verfügbar machen
{: #make-a-google-drive-library-available}

Wenn Sie bereits Bibliotheken mit der Desktopversion von TinyCAD erstellt haben, gewähren Sie TinyCAD Web Zugriff auf jede einzelne:

1. Klicken Sie in Google Drive mit der rechten Maustaste auf die Datei `.tclib`.
2. Wählen Sie **Öffnen mit (Open with) -> TinyCAD**.

<img src="/v4/Images/media2/image1.png" alt="Google Drive context menu showing Open with TinyCAD for a library file" style="width: 6.26806in; height: 4.54514in;" />

Wiederholen Sie dies für **jede** Bibliothek, die verfügbar sein soll.

Mit dieser Aktion wird die Bibliothek zur Bearbeitung geöffnet. Wenn Sie nur Zugriff benötigen, können Sie den Tab bzw. das Fenster anschließend schließen.

**Hinweis:** Google Drive unterscheidet möglicherweise zwischen Groß- und Kleinschreibung. Falls `TinyCAD` nicht unter **Öffnen mit (Open with)** angezeigt wird, stellen Sie sicher, dass `.tclib` kleingeschrieben ist.

Kehren Sie zu Ihrer Zeichnungssitzung zurück:

1. Öffnen Sie **Meine Bibliotheken (My Libraries)**.
2. Klicken Sie neben **Meine Bibliotheken (My Libraries)** auf **Aktualisieren (Refresh)**.

<img src="/v4/Images/media2/image2.png" alt="My Libraries panel with the Refresh button used to reload available libraries" />

Nach der Aktualisierung werden die Bibliotheken aufgelistet:

<img src="/v4/Images/media2/image4.png" alt="My Libraries panel listing available custom symbol libraries"  />

Sie können Bibliotheken durchsuchen, indem Sie sie aufklappen:

<img src="/v4/Images/media2/image3.png" alt="Library browser showing symbol search results and a preview button"  />

#### Eine neue Bibliothek erstellen
{: #creating-a-new-library}

Verwenden Sie den Menüpunkt **Neue benutzerdefinierte Bibliothek (New Custom Library)**:

<img src="/v4/Images/media2/image5.png" alt="Menu with the New Custom Library command"/>

#### Eine Bibliothek bearbeiten
{: #edit-a-library}

Bearbeiten Sie eine vorhandene Bibliothek, indem Sie sie in TinyCAD Web über die Schaltfläche **Bearbeiten (Edit)** der Bibliothek öffnen.

### Desktop-App
{: #desktop-app}

#### Bibliotheken hinzufügen oder entfernen
{: #add-or-remove-libraries}

Bevor Symbole aus einer Bibliothek verwendet werden können, muss die Bibliothek zur Liste der Bibliotheken unter **Meine Bibliotheken (My Libraries)** hinzugefügt werden.

![Seitenleiste „Meine Bibliotheken“](/v4/Images/media/image9.png)

Um eine Bibliothek zu dieser Liste hinzuzufügen, klicken Sie auf **Hinzufügen (Add)**. Ein Dateiauswahldialog wird angezeigt. Wählen Sie eine Bibliotheksdatei mit der Erweiterung `.tclib` aus.

Um eine Bibliothek aus der Liste zu entfernen, klicken Sie auf das Bearbeitungssymbol der Bibliothek, um den Bibliotheksdialog zu öffnen, und klicken Sie dann auf **Entfernen (Remove)**. Dadurch wird die Datei nicht gelöscht, sondern lediglich aus der Liste entfernt.

#### Eine Bibliothek bearbeiten
{: #edit-a-library-1}

Wählen Sie im Bibliotheksbearbeitungsdialog die Bibliothek aus und klicken Sie auf **Bearbeiten (Edit)**. Ein neues Fenster mit Miniaturansichten der Bibliothek wird geöffnet.

![Bibliothekseditor mit Symbolminiaturen](/v4/Images/media/image10.png)

Verwenden Sie das Bibliotheksbearbeitungsfenster, um:

- Miniaturansichten der Symbole in der Bibliothek anzuzeigen
- Der Bibliothek neue Symbole hinzuzufügen
- Symbole in der Bibliothek zu löschen, zu duplizieren und umzubenennen
- Grafiken, Anschlüsse, Namen und Attribute eines Symbols zu bearbeiten
- Symbole von einer Bibliothek in eine andere zu verschieben

Wählen Sie ein Symbol aus, indem Sie darauf klicken. Nach der Auswahl können Sie es im Hauptfenster bearbeiten oder über die Bedienelemente duplizieren bzw. löschen.

Wenn Sie die Bearbeitung der Bibliothek abgeschlossen haben, speichern Sie sie mit den üblichen Befehlen **Speichern (Save)** oder **Speichern unter (Save As)**.

Informationen zum Arbeitsablauf für die Bearbeitung einzelner Symbole finden Sie unter [Ein Symbol bearbeiten](../Editing-a-Symbol/).

#### Eine neue Symbolbibliothek erstellen
{: #creating-a-new-symbol-library}

Verwenden Sie die Schaltfläche **Neu (New)** im Bibliotheksbereich. Ein neues Fenster mit einer leeren Bibliothek wird geöffnet.

</div>

- Zurück zu [Symbole und Bibliotheken](../Symbols-and-Libraries/)
- Zurück zu [Inhalt von v4](../CONTENTS/)

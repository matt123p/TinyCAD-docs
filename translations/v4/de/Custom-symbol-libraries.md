---
layout: default
---
# Benutzerdefinierte Symbolbibliotheken
{: #custom-symbol-libraries}

Diese Seite behandelt Aufgaben auf Bibliotheksebene: Bibliotheken zu TinyCAD hinzufügen, sie zur Bearbeitung öffnen, neue Bibliotheksdateien erstellen und einfache Aktionen zur Symbolverwaltung ausführen, z. B. Symbole hinzufügen, duplizieren, umbenennen und löschen.

Informationen zum Durchsuchen von Bibliotheken und zum Einfügen von Symbolen in eine Zeichnung finden Sie unter [Symbolbibliotheken verwenden](../Using-Symbol-Libraries/). Informationen zum Zeichnen oder Ändern des Symbols selbst, einschließlich Anschlüssen und Symboleigenschaften, finden Sie unter [Ein Symbol bearbeiten](../Editing-a-Symbol/).

Bibliotheksdateien verwenden die Erweiterung `.tclib` und können auf Ihrem Computer oder mit der Google-Integration auf Google Drive gespeichert werden. Sie sind zwischen der Desktopversion von TinyCAD und der Browserversion kompatibel.

Sie können auch Bibliotheken laden, die mit der älteren Version 3 von TinyCAD erstellt wurden.

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Browser
{: #browser}

#### Eine vorhandene Bibliothek aus einer lokalen Datei öffnen
{: #open-an-existing-library-from-a-local-file}

1. Öffnen Sie einen weiteren TinyCAD-Webtab bzw. ein weiteres Fenster.
2. Verwenden Sie **Öffnen**, um eine Bibliotheksdatei mit der Erweiterung `.tclib` zu öffnen.
3. Lassen Sie diesen Tab geöffnet, während Sie mit der Bibliothek arbeiten.

Sobald die Bibliothek geöffnet ist, können Sie die Symbole in diesem Fenster durchsuchen oder in Ihre Zeichnung ziehen oder die Symboldefinitionen in der Bibliothek bearbeiten.

#### Eine Google-Drive-Bibliothek verfügbar machen
{: #make-a-google-drive-library-available}

Wenn Sie bereits Bibliotheken mit TinyCAD für den Desktop erstellt haben, gewähren Sie TinyCAD Web Zugriff auf jede davon:

1. Klicken Sie in Google Drive mit der rechten Maustaste auf die Datei `.tclib`.
2. Wählen Sie **Öffnen mit -> TinyCAD**.

<img src="/v4/images/media2/image1.png" alt="Google Drive context menu showing Open with TinyCAD for a library file" style="width: 6.26806in; height: 4.54514in;" />

Wiederholen Sie dies für **jede** Bibliothek, die verfügbar sein soll.

Bei dieser Aktion wird die Bibliothek zur Bearbeitung geöffnet. Wenn Sie nur Zugriff benötigen, können Sie den Tab bzw. das Fenster anschließend schließen.

**Hinweis:** Google Drive kann sich manchmal so verhalten, als würde die Groß- und Kleinschreibung beachtet. Wenn `TinyCAD` nicht unter **Öffnen mit** angezeigt wird, stellen Sie sicher, dass `.tclib` kleingeschrieben ist.

Kehren Sie zu Ihrer Zeichnungssitzung zurück:

1. Öffnen Sie **Meine Bibliotheken**.
2. Klicken Sie neben **Meine Bibliotheken** auf **Aktualisieren**.

<img src="/v4/images/media2/image2.png" alt="My Libraries panel with the Refresh button used to reload available libraries" />

Nach der Aktualisierung werden die Bibliotheken aufgelistet:

<img src="/v4/images/media2/image4.png" alt="My Libraries panel listing available custom symbol libraries"  />

Sie können Bibliotheken durchsuchen, indem Sie sie aufklappen:

<img src="/v4/images/media2/image3.png" alt="Library browser showing symbol search results and a preview button"  />

#### Eine neue Bibliothek erstellen
{: #creating-a-new-library}

Verwenden Sie den Menüeintrag **Neue benutzerdefinierte Bibliothek**:

<img src="/v4/images/media2/image5.png" alt="Menu with the New Custom Library command"/>

#### Eine Bibliothek bearbeiten
{: #edit-a-library}

Bearbeiten Sie eine vorhandene Bibliothek, indem Sie sie in TinyCAD Web über die Schaltfläche **Bearbeiten** an der Bibliothek öffnen.

### Desktop-App
{: #desktop-app}

#### Bibliotheken hinzufügen oder entfernen
{: #add-or-remove-libraries}

Bevor Symbole aus einer Bibliothek verwendet werden können, muss die Bibliothek zur Bibliotheksliste unter **Meine Bibliotheken** hinzugefügt werden.

![Seitenleiste „Meine Bibliotheken“](/v4/images/media/image9.png)

Um eine Bibliothek zu dieser Liste hinzuzufügen, klicken Sie auf **Hinzufügen**. Es wird ein Dateiauswahldialog angezeigt. Wählen Sie eine Bibliotheksdatei mit der Erweiterung `.tclib` aus.

Um eine Bibliothek aus der Liste zu entfernen, klicken Sie auf das Bearbeitungssymbol der Bibliothek, um den Bibliotheksdialog zu öffnen, und anschließend auf **Entfernen**. Dadurch wird die Datei nicht gelöscht, sondern lediglich aus der Liste entfernt.

#### Eine Bibliothek bearbeiten
{: #edit-a-library-1}

Wählen Sie im Bibliotheksbearbeitungsdialog die Bibliothek aus und klicken Sie auf **Bearbeiten**. Ein neues Fenster mit einer Miniaturansicht der Bibliothek wird geöffnet.

![Bibliothekseditor mit Symbolminiaturen](/v4/images/media/image10.png)

Im Bibliotheksbearbeitungsfenster können Sie:

- Miniaturansichten der Symbole in der Bibliothek anzeigen
- Der Bibliothek neue Symbole hinzufügen
- Symbole in der Bibliothek löschen, duplizieren und umbenennen
- Grafik, Anschlüsse, Namen und Attribute eines Symbols bearbeiten
- Symbole von einer Bibliothek in eine andere verschieben

Wählen Sie ein Symbol aus, indem Sie darauf klicken. Nach der Auswahl können Sie es im Hauptfenster bearbeiten oder mithilfe der Steuerelemente duplizieren oder löschen.

Wenn Sie die Bearbeitung der Bibliothek abgeschlossen haben, speichern Sie sie mit den üblichen Befehlen **Speichern** oder **Speichern unter**.

Informationen zum Arbeitsablauf für die Bearbeitung einzelner Symbole finden Sie unter [Ein Symbol bearbeiten](../Editing-a-Symbol/).

#### Eine neue Symbolbibliothek erstellen
{: #creating-a-new-symbol-library}

Verwenden Sie die Schaltfläche **Neu** im Bibliotheksbereich. Ein neues Fenster mit einer leeren Bibliothek wird geöffnet.

</div>

- Zurück zu [Symbole und Bibliotheken](../Symbols-and-Libraries/)
- Zurück zu [Inhalt von v4](../CONTENTS/)

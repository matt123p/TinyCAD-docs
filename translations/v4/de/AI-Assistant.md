---
layout: default
---
# KI-Assistent
{: #ai-assistant}

Der KI-Assistent von TinyCAD wandelt schriftliche Anweisungen, Datenblätter und Schaltplanbilder in bearbeitbare Symbole und Zeichnungen um. Er ergänzt den normalen Editor: Sie können ihn bitten, eine Schaltung zu erstellen, Bauteile zur bereits geöffneten Zeichnung hinzuzufügen, eine Symbolbibliothek aufzubauen oder eine bestehende Verbindung zu erklären.

**Nur Desktop:** Der KI-Assistent (Chatbot) ist nur in der TinyCAD-Desktop-App verfügbar. In der Browserversion ist er nicht verfügbar.

Öffnen Sie in der Desktop-App über die Symbolleiste **Chat**. Stellen Sie eine Verbindung zu einem KI-Anbieter her, bevor Sie Ihre erste Nachricht senden. Die Verbindungsmöglichkeiten werden weiter unten erläutert.

## Was er kann
{: #what-it-can-do}

| Aufgabe | So hilft der Assistent |
| --- | --- |
| **Komponentensymbol erstellen** | Erzeugt bearbeitbare Grafiken, physische Pinnummern, Pinnamen und elektrische Typen anhand einer angegebenen Komponente und ihres Gehäuses. Fügen Sie das Datenblatt des Herstellers hinzu, wenn es auf die Pinbelegung ankommt. |
| **Symbolbibliothek erstellen oder erweitern** | Fügt der zum Bearbeiten geöffneten Bibliothek `.tclib` mehrere wiederverwendbare Komponenten hinzu, einschließlich Namen, Beschreibungen und Pinzuordnungen. Größere Sammlungen lassen sich in mehreren aufeinanderfolgenden Durchgängen erstellen. |
| **Schaltung zeichnen** | Sucht geeignete Symbole, platziert Bauteile, legt Werte und Referenzkennzeichen fest, verbindet Pins mit Leitungen und Beschriftungen und fügt erläuternde Hinweise hinzu. |
| **Bestehende Zeichnung erweitern** | Fügt einen Steckverbinder, einen Abblockkondensator, einen Sensor, einen Treiber oder einen anderen Funktionsblock hinzu und behält den übrigen Inhalt der Zeichnung bei. |
| **Schaltung erklären oder prüfen** | Liest die aktuelle Zeichnung und Netzliste, beschreibt Signalpfade, ermittelt die Pins eines Netzes und untersucht Verbindungen oder Entwurfsregelverletzungen. |
| **Zeichnung aus einem Dokument rekonstruieren** | Liest ein angehängtes PDF oder Schaltplanbild und erstellt einen bearbeitbaren Ausgangspunkt. Bei unklaren Bauteilen oder Verbindungen fragt der Assistent nach. |
| **Layout aufräumen** | Ordnet ein ganzes Blatt oder einen angegebenen Bereich neu an und nutzt dabei die Layout- und Verbindungsprüfungen von TinyCAD. |
| **Ergebnis exportieren** | Erstellt eine herunterladbare Zeichnung oder Symbolbibliothek, wenn Sie ausdrücklich eine Datei anfordern. |

Die Ergebnisse sind TinyCAD-Objekte, die Sie auswählen, bearbeiten, verdrahten und speichern können. In einer Zeichnung werden neu erstellte Symbole so platziert, dass sie direkt angeschlossen werden können. In einer Bibliothek werden neue Komponenten zu Einträgen dieser Bibliothek. Sie müssen weder XML aus der Unterhaltung kopieren noch einen separaten MCP-Server konfigurieren.

Der Assistent sucht zuerst in den [mitgelieferten Bibliotheken](../Bundled-Libraries/) und durchsucht bei Bedarf anschließend die öffentliche Sammlung auf TinyCAD.net. Er kann auch mitgelieferte Sammlungen durchsuchen, die derzeit nicht in der Bibliotheksauswahl ausgewählt sind. Für die Suche in öffentlichen Symbolen ist eine Internetverbindung erforderlich, auch wenn Sie ein lokales KI-Modell verwenden.

Für wiederverwendbare Bauteile [erstellen oder öffnen Sie zunächst eine benutzerdefinierte Bibliothek zum Bearbeiten](../Custom-symbol-libraries/) und öffnen Sie dann Chat in diesem Bibliotheksfenster. Für eine Schaltung lassen Sie das gewünschte Zeichnungsfenster aktiv. Geben Sie an, welches Blatt, welche Referenzkennzeichen oder welchen Funktionsblock Sie meinen. Der aktuelle Abruf und die Platzierung von KI-Symbolen unterstützen **Symbole mit einer Einheit**. Verwenden Sie für Mehrfachbauteile, die der Assistent nicht importieren kann, den normalen Symboleditor.

{% include video-player.html src="/v4/videos/ai-assistant/ai-assistant-demo.mp4" poster="/v4/images/ai-assistant/chat-open-desktop.png" caption="Symbol anhand eines Datenblatts in TinyCAD Desktop erstellen. Wartezeiten für die KI-Verarbeitung werden mit 12-facher Geschwindigkeit angezeigt und auf dem Bildschirm markiert; Interaktionen und Ergebnisse werden mit normaler Geschwindigkeit dargestellt." %}

## Verbindung einrichten
{: #set-up-a-connection}

### 1. Anbieter auswählen
{: #choose-a-provider}

1. Öffnen Sie **Chat** über die Symbolleiste.
2. Klicken Sie auf **Click here to Sign in to use AI** oder auf das Zahnradsymbol **AI settings** in der Kopfzeile des Bereichs.
3. Wählen Sie unter **Step 1 — Choose provider** einen Anbieter aus und klicken Sie dann auf **Next**.

![KI-Einstellungen mit dem Schritt „Provider“](../images/ai-assistant/setup-provider.png)

Sie können jeweils nur einen Anbieter verbinden.

| Anbieter in TinyCAD | Was Sie benötigen |
| --- | --- |
| **ChatGPT** | Entweder ein berechtigtes kostenpflichtiges ChatGPT-Konto mit **Sign In with ChatGPT** oder einen OpenAI-API-Schlüssel mit **Use API Key**. Die Anmeldung mit einem Konto ist in der Desktop-App verfügbar. |
| **Anthropic Claude** | Einen API-Schlüssel aus der [Claude Console](https://platform.claude.com/settings/keys) mit API-Zugriff und Abrechnung für die verwendeten Modelle. |
| **Google Gemini** | Einen API-Schlüssel aus [Google AI Studio](https://aistudio.google.com/apikey). Einige Modelle bieten einen begrenzten kostenlosen API-Tarif; Verfügbarkeit und Kontingente gelten. |
| **OpenAI compatible** | Den API-Schlüssel und die API-Basis-URL des Dienstes sowie ein Modell, das Tool-Aufrufe unterstützt. |
| **Ollama (hosted locally)** | Einen laufenden lokalen Ollama-Server und ein installiertes Modell mit Tool-Unterstützung. Lokale Modelle benötigen keinen API-Schlüssel. |

Ein Abonnement für die normale Chat-Website eines Anbieters beinhaltet nicht automatisch API-Abrechnung oder einen API-Schlüssel. Die ausdrückliche Anmeldeoption für ChatGPT ist eine separate Verbindungsmethode. Für Gemini verwendet der Assistent einen API-Schlüssel. Die Anmeldung beim Google-Drive-Speicher von TinyCAD verbindet den KI-Assistenten nicht.

### 2. Konto oder API-Schlüssel verbinden
{: #connect-an-account-or-api-key}

#### ChatGPT-Konto verwenden
{: #use-a-chatgpt-account}

Wählen Sie in TinyCAD Desktop **ChatGPT** und dann in Schritt 2 **Sign In with ChatGPT**.

1. Klicken Sie auf **Sign in with ChatGPT**. Schließen Sie die Anmeldung im externen Browser ab.
2. Genehmigen Sie bei Aufforderung die Nutzung Ihres ChatGPT-Tarifs. Eine Anmeldung ohne Freigabe der Tarifnutzung reicht nicht aus, um KI-Anfragen zu senden.
3. Kehren Sie zu TinyCAD zurück und wählen Sie ein Modell aus, sobald der Assistent zu Schritt 3 wechselt.

Wenn ein Konto gespeichert ist, werden **Continue as …** oder **Sign in with a different account** angeboten. TinyCAD speichert jeweils nur ein Konto. Nach der Verbindung erscheinen oberhalb des Nachrichtenfelds **Using ChatGPT plan** und **Manage usage**. Beim ersten Einsatz wird darauf hingewiesen, dass Anfragen Ihr Tarifkontingent oder verfügbare Guthaben nutzen.

![KI-Einstellungen in der Desktop-App mit den Optionen „Sign In with ChatGPT“ und „Use API Key“](../images/ai-assistant/setup-chatgpt-desktop.png)

Für die ChatGPT-Anmeldung ist ein berechtigtes kostenpflichtiges Konto erforderlich; es gelten weiterhin Konto-, Arbeitsbereichs- und App-Limits. Bei abgelehnten Anfragen wird nicht automatisch auf API-Schlüssel-Abrechnung umgestellt. Informationen zur Verbindung mit einem Kontotarif finden Sie in der [Dokumentation von OpenAI zur Anmeldung mit ChatGPT](https://developers.openai.com/siwc/token-sharing-open-source).

#### API-Schlüssel verwenden
{: #use-an-api-key}

1. Erstellen Sie mithilfe des auf Schritt 2 angezeigten Anbieterlinks einen Schlüssel. Prüfen Sie, ob das Projekt oder Konto Zugriff auf die gewünschten Modelle hat.
2. Wählen Sie für **ChatGPT** die Option **Use API Key**. Bei anderen gehosteten Anbietern wird die Eingabeseite für den Schlüssel direkt angezeigt.
3. Fügen Sie den Schlüssel unter **API key** ein. Er wird maskiert angezeigt. Bei Bedarf können Sie während der Eingabe mit **Show API key** den Schlüssel einblenden.
4. Geben Sie für **OpenAI compatible** auch die **API base URL** des Dienstes ein.
5. Klicken Sie auf **Next**. TinyCAD prüft die Verbindung und ruft die verfügbaren Modelle automatisch ab.

![Eingabe eines ChatGPT-API-Schlüssels mit maskiertem Schlüsselfeld und Anbieterhinweisen](../images/ai-assistant/setup-api-key.png)

Wenn ein Endpunkt keine Modellliste abrufen kann, fordert TinyCAD in Schritt 2 zur Eingabe einer **Model ID** auf. Geben Sie die genaue Kennung des Anbieters ein und klicken Sie erneut auf **Next**. Eine kurze Begrüßung prüft die Verbindung. Diese Prüfungen können das Kontingent des Anbieters beanspruchen. Bei einer fehlgeschlagenen Verbindung bleibt Schritt 2 geöffnet und zeigt den Fehler an.

Erstellen Sie für Gemini in Google AI Studio ein Projekt oder wählen Sie eines aus, und kopieren Sie den API-Schlüssel in TinyCAD. Auf der [Preisseite der Gemini API](https://ai.google.dev/gemini-api/docs/pricing) von Google wird erläutert, welche Modelle und Nutzungen für den kostenlosen Tarif infrage kommen. Für kostenpflichtige Modelle oder eine höhere Nutzung kann eine Abrechnung erforderlich sein.

![Einrichtung von Google Gemini mit dem Link zum Schlüssel in Google AI Studio](../images/ai-assistant/setup-gemini.png)

### 3. Modell und Denkstufe auswählen
{: #pick-a-model-and-thinking-level}

Wählen Sie nach erfolgreicher Verbindung unter **Step 3 — Pick Model** ein Modell aus, passen Sie **Thinking** an und klicken Sie dann auf **Finish**.

![Modellauswahl und Schieberegler „Thinking“ im letzten Einrichtungsschritt](../images/ai-assistant/setup-model.png)

Die Modellliste in dieser Abbildung dient nur als Beispiel. Ihre Liste hängt vom Anbieter, Endpunkt und Konto ab. ChatGPT zeigt die unterstützten Sol-, Luna- und Astra-Modelle an, die von Ihrer Verbindung zurückgegeben werden. Die neuesten Versionen werden zuerst angezeigt. Ältere Modelle finden Sie unter **More models**; bis zu sechs zuletzt ausgewählte Modelle werden gespeichert.

Wählen Sie ein Modell, das **Tools** unterstützt, damit es TinyCAD-Dokumente prüfen und bearbeiten kann. Um Schaltplanbilder oder Datenblätter mit Diagrammen zu interpretieren, benötigen Sie außerdem ein Modell mit **Vision**-Unterstützung. Ein allgemeiner Text-Chat-Endpunkt reicht nicht für alle Aufgaben aus.

**Thinking** reicht von **Minimal** bis **Max** und ist zunächst auf **Medium** eingestellt. Die verfügbaren Stufen hängen vom Anbieter ab. Höhere Einstellungen können länger dauern und mehr Kontingent verbrauchen. Max entspricht der höchsten vom Anbieter unterstützten Einstellung. Zwischen Antworten können Sie das Modell und die Denkstufe über das Modellsymbol neben dem Nachrichtenfeld ändern.

### Alternative: lokales Ollama verwenden
{: #alternative-use-local-ollama}

1. [Installieren Sie Ollama](https://ollama.com/download) und starten Sie den Server.
2. Laden Sie ein Modell mit [Unterstützung für Tool-Aufrufe](https://docs.ollama.com/capabilities/tool-calling) herunter und verwenden Sie `ollama pull MODEL_NAME` mit dem tatsächlichen Namen des Modells. Prüfen Sie für Aufgaben mit Bildern oder PDFs auch die Vision-Unterstützung und die Kontextkapazität.
3. Wählen Sie im Anbieterschritt von TinyCAD **Ollama (hosted locally)**.
4. Verwenden Sie **Ollama API URL**, normalerweise `http://localhost:11434/v1`, und klicken Sie auf **Next**, um die installierten Modelle aufzulisten.
5. Wählen Sie ein Modell und eine Denkstufe aus und klicken Sie dann auf **Finish**.

![Ollama-Einrichtung mit lokaler API-URL und Hinweisen zum Browserursprung](../images/ai-assistant/setup-ollama.png)

Die Ollama-Verbindung akzeptiert Localhost- und Loopback-URLs. Wählen Sie für einen Remoteserver stattdessen **OpenAI compatible**. Stellen Sie dem lokalen Modell genügend Kontext für die Unterhaltung und die TinyCAD-Tools bereit. Siehe [Ollamas Konfiguration des Kontextfensters](https://docs.ollama.com/api/openai-compatibility#setting-the-local-context-size).

Anfragen an lokales Ollama werden direkt an den lokalen Server gesendet. Wählen Sie für lokale Inferenz ein lokal laufendes Modell aus. Cloud-Modelle, die über einen Ollama-Server konfiguriert sind, können dennoch einen Cloud-Dienst verwenden.

## Assistenten beim Zeichnen verwenden
{: #use-the-assistant-while-drawing}

Geben Sie eine Anfrage in das Nachrichtenfeld ein und klicken Sie auf **Send**, oder drücken Sie **Enter**. Verwenden Sie **Shift+Enter** für eine neue Zeile. Beginnen Sie mit einer klar begrenzten Aufgabe, prüfen Sie das Ergebnis und bitten Sie anschließend um die nächste Änderung.

![Verbundenes Chatfenster mit einer sendebereiten Beispielanfrage](../images/ai-assistant/chat-ready.png)

Geben Sie das Zielblatt, Referenzkennzeichen, Werte und Verbindungen genau an. „Verbinde den oberen Anschluss von R2 mit OUT auf dem Blatt Control“ lässt sich leichter überprüfen als „Repariere die Leitung“. Geben Sie bei der Erweiterung einer bestehenden Schaltung an, was unverändert bleiben soll.

Der Assistent kann nicht gespeicherte Inhalte des Editors prüfen. Speichern Sie die Zeichnung oder Bibliothek nach der Durchsicht seiner Arbeit wie gewohnt. Zeichnungen enthalten ihre Symbole eingebettet. Speichern Sie wiederverwendbare Definitionen in einer benutzerdefinierten Bibliothek, wenn Sie diese in anderen Projekten erneut verwenden möchten.

**Working** fasst Werkzeugaktivitäten und Zwischenmeldungen in einer ausklappbaren Zeile zusammen. Öffnen Sie diese Zeile, um Fortschrittsdetails, Werkzeugergebnisse und alle vom Modell geprüften Bilder anzuzeigen. Die endgültige Antwort erscheint separat. Wenn die Verbindung dies unterstützt, kann der Assistent vom Anbieter bereitgestellte Zusammenfassungen seiner Überlegungen anzeigen. Diese Einstellung legt nicht jeden internen Denkschritt offen.

Verwenden Sie **Stop**, um die aktuelle Anfrage abzubrechen. Bereits vorgenommene Änderungen bleiben im Dokument erhalten. **Undo** und **Redo** funktionieren bei KI-Bearbeitungen wie bei der normalen Bearbeitung; eine mehrstufige Anfrage kann mehrere rückgängig zu machende Änderungen erzeugen. Wenn Sie die Zeichnung bearbeiten, während der Assistent arbeitet, kann ein späterer Schreibvorgang abgelehnt werden, weil dessen Quelle veraltet ist. Bitten Sie den Assistenten, die Zeichnung erneut einzulesen und fortzufahren.

Das Symbol **New chat** in der Kopfzeile löscht die Unterhaltung, den Entwurf und die Anhänge. Änderungen an der Zeichnung werden dadurch nicht rückgängig gemacht. Beim Wechsel des Modells bleibt die Unterhaltung erhalten. Beim Verbinden eines anderen Anbieters oder Schlüssels wird ein neuer Chat gestartet.

### Datenblätter und Schaltplanbilder anhängen
{: #attach-datasheets-and-circuit-images}

Verwenden Sie **Import PDF/image** neben den Nachrichtensteuerelementen, um PDF-, PNG-, JPEG- oder WebP-Dateien anzuhängen. Sie können bis zu **sechs Dateien mit insgesamt 10 MiB** anhängen; außerdem gelten die Limits des Anbieters. Geben Sie die genaue Komponentenvariante, das Gehäuse und die relevanten PDF-Seiten an und weisen Sie darauf hin, ob ein Pin-Diagramm die Ansicht von oben oder von unten zeigt.

Bei kompatiblen Endpunkten und Ollama können Sie mit **PDF pages** Seiten auswählen, die lokal gerendert werden sollen, zum Beispiel `1-4,12`. Lassen Sie das Feld leer, um alle Seiten innerhalb des Umwandlungslimits von 20 Seiten zu verwenden. Wählen Sie weniger Seiten aus, wenn die umgewandelten Bilder mehr als 10 MiB umfassen. ChatGPT/OpenAI, Claude und Gemini erhalten PDFs direkt. Ob Diagramme gelesen werden können, hängt weiterhin vom ausgewählten Modell ab.

Die Suche in der öffentlichen Symbolbibliothek von TinyCAD ist unabhängig von der allgemeinen Websuche verfügbar. Eine integrierte Websuche steht berechtigten Verbindungen mit **Sign in with ChatGPT** zur Verfügung, sofern die Richtlinien des Modells und Kontos dies zulassen. Quellenangaben erscheinen als Links in der Antwort. API-Schlüssel-Verbindungen und die übrigen Anbieter erhalten über TinyCAD derzeit keine allgemeine Websuche. Hängen Sie das Datenblatt oder das relevante Bild an, wenn der Assistent die Website des Herstellers nicht öffnen kann.

## Beispielanfragen
{: #example-prompts}

Verwenden Sie diese Beispiele als Ausgangspunkt. Ersetzen Sie die Komponente, das Gehäuse, die Pinnummern und die Versorgungsanforderungen durch die Angaben für Ihr Projekt.

### Symbol aus einem Datenblatt erstellen
{: #create-a-symbol-from-a-datasheet}

Öffnen Sie die gewünschte Zeichnung und hängen Sie das Datenblatt an:

> Erstelle anhand dieses Datenblatts ein kompaktes Symbol für den NE555P im 8-poligen PDIP-Gehäuse. Überprüfe jede physische Pinnummer, Bezeichnung und elektrische Art. Suche zuerst nach vorhandenen Symbolen. Platziere die Versorgungspins oben und Masse unten, validiere das Symbol und platziere es anschlussbereit in dieser Zeichnung. Gib an, was du nicht überprüfen kannst.

Für ein physisches Modul statt eines herkömmlichen IC-Umrisses:

> Erstelle anhand des angehängten Pin-Diagramms für genau diese Version der Sensorplatine ein bearbeitbares Symbol mit Platinenumriss und beschrifteten Steckleistenkontakten in ihrer physischen Reihenfolge. Halte es kompakt genug für einen Verdrahtungsplan im Format A4. Platziere Verbindungspunkte auf den Steckleisten-Pads und verwende ein kleines Temperatursymbol zur Kennzeichnung der Funktion.

### Wiederverwendbare Bibliothek erstellen
{: #build-a-reusable-library}

Erstellen oder öffnen Sie zunächst eine benutzerdefinierte `.tclib` zum Bearbeiten:

> Füge eine kleine Bibliothek mit Komponenten mit einer Einheit hinzu: einen PC817 in DIP-4, einen ULN2003A in DIP-16 und einen 4-poligen 2,54-mm-Klemmenanschluss. Verwende für die Pinbelegungen der ICs die angehängten Datenblätter. Gib jeder Komponente einen aussagekräftigen Namen, eine Beschreibung und ein Referenzpräfix, validiere sie und füge sie dieser geöffneten Bibliothek hinzu. Behalte das Symbol bei, das ich gerade bearbeite.

Fahren Sie nach Prüfung des ersten Durchgangs mit einem weiteren fort. Speichern Sie die `.tclib` wie gewohnt oder fordern Sie ausdrücklich eine herunterladbare Bibliothek an, wenn Sie genau dieses Ergebnis benötigen.

### Vollständige Schaltung erstellen
{: #create-a-complete-circuit}

> Zeichne auf dem aktuellen Blatt einen astabilen 5-V-Oszillator mit NE555 im PDIP-8-Gehäuse. Ziel sind etwa 1 Hz. Füge Zeitwiderstände und -kondensator, Reset-Verbindung, Kondensator am Steuerpin, Versorgungsabblockung und eine Ausgangs-LED mit Vorwiderstand hinzu. Erläutere die berechnete Zeitsteuerung, überprüfe die physischen Pinverbindungen und räume das Layout auf. Liste Annahmen und alle ungelösten Entwurfsregelprobleme auf.

Damit wird ein bearbeitbarer Entwurf samt Berechnungen angefordert. Um das simulierte Verhalten zu ermitteln, prüfen Sie die Modelle und führen Sie selbst eine [Simulation](../Simulation/) aus. Eine überzeugend klingende KI-Erklärung ist kein protokollierter Simulationslauf.

### Bauteile hinzufügen, ohne die Schaltung neu zu zeichnen
{: #add-parts-without-redrawing-the-circuit}

> Füge zwischen Versorgung und Masse von U1 einen 100-nF-Abblockkondensator in der Nähe von U1 hinzu. Ermittle vor dem Verdrahten die tatsächlichen Versorgungspins. Behalte den übrigen Schaltungsteil sowie Referenzkennzeichen und Werte unverändert bei und prüfe anschließend die betroffenen Netze.

> Füge auf dem Blatt Sensors einen beschrifteten 4-poligen Steckverbinder für +3V3, GND, SDA und SCL hinzu. Verbinde SDA und SCL mit den vorhandenen beschrifteten Netzen. Verwende vorhandene Pull-up-Widerstände, falls vorhanden, und teile mir vor dem Hinzufügen weiterer Widerstände mit, ob zusätzliche Pull-ups erforderlich sind.

### Angefügtes Diagramm rekonstruieren
{: #reconstruct-an-attached-diagram}

> Rekonstruiere die Schaltung auf Seite 3 des angehängten PDFs als bearbeitbare TinyCAD-Komponenten und Leitungen auf einem neuen Blatt. Behalte die angezeigten Werte und Beschriftungen bei. Frage bei unleserlichen Werten oder mehrdeutigen Leitungskreuzungen nach, statt zu raten. Vergleiche die rekonstruierten Netze mit dem Bild und räume das fertige Blatt auf.

### Bestehende Zeichnung erklären, prüfen oder verbessern
{: #explain-inspect-or-improve-an-existing-drawing}

> Erkläre den Signalpfad von J1 zu U2 und liste die Bauteile und physischen Pins auf, die mit OUT verbunden sind. Ändere die Zeichnung nicht.

> Prüfe die aktuelle Zeichnung auf nicht verbundene erforderliche Pins, einander widersprechende Ausgänge und inkonsistente Versorgungsspannungsbeschriftungen. Gib für jedes Problem Blatt und Referenzkennzeichen an und schlage Änderungen vor, bevor du sie anwendest.

> Räume nur den Motortreiberblock um U3 und J4 auf. Behalte seine Verbindungen und Werte unverändert bei und lasse den Stromversorgungs-Eingangsblock an seiner Position.

## Einstellungen, Datenschutz und Speichern
{: #settings-privacy-and-saving}

Das Zahnradsymbol **AI settings** zeigt den aktuellen Anbieter und die Verbindungsmethode sowie Steuerelemente für Modell und Denkstufe und **Save** an. Bei einer Verbindung über einen Schlüssel wird **Clear API key** angeboten, bei einem ChatGPT-Konto **Sign out** und bei lokalem Ollama **Disconnect Ollama**. Trennen Sie zuerst die Verbindung, um einen anderen Anbieter einzurichten. Mit **Cancel** bleiben die bestehende Verbindung und die gespeicherten Einstellungen erhalten.

![KI-Einstellungen für eine bestehende API-Schlüssel-Verbindung](../images/ai-assistant/connection-settings.png)

API-Schlüssel und Unterhaltungsverlauf bleiben im Anwendungsspeicher. Schlüssel werden nicht zusammen mit Einstellungen oder Zeichnungen gespeichert. Nach dem Neuladen oder Neustarten müssen Sie einen API-Schlüssel erneut eingeben. Einstellungen für Anbieter, Endpunkt, Modell und Denkstufe, die keine Geheimnisse enthalten, können gespeichert bleiben. Die Autorisierung des ChatGPT-Kontos wird separat von der lokalen Laufzeit verwaltet und kann Neustarts überdauern. In der Desktop-App wird, sofern verfügbar, eine sichere Verschlüsselung des Betriebssystems verwendet.

Bei gehosteter KI werden Nachrichten, Anhänge sowie Dokumentinhalte oder -vorschauen, die von den Werkzeugen angefordert werden, an den ausgewählten Anbieter gesendet. Bei gehosteten Verbindungen über API-Schlüssel werden Anfragen direkt an den ausgewählten Endpunkt gesendet. TinyCAD stellt keine Weiterleitung zu einem Anbieter bereit. Kompatible Dienste müssen den Browserzugriff (CORS) erlauben und normalerweise HTTPS verwenden; localhost ist davon ausgenommen. Verwenden Sie für einen vollständig lokalen Arbeitsablauf ein lokales Ollama-Modell und lokal bereitgestellte Referenzdokumente und vermeiden Sie Online-Symbolsuchen und Cloud-Modelle.

Generierte Bauteile und Schaltungen müssen weiterhin fachlich geprüft werden. Überprüfen Sie die Pinbelegung des genauen Gehäuses, Nennleistungen, Versorgungsspannung, Logikpegel und Betriebsgrenzwerte anhand der tatsächlichen Datenblätter. Die Strukturvalidierung, Entwurfsregelprüfungen und Layout-Verbindungsprüfungen von TinyCAD helfen, Fehler zu finden. Sie beweisen nicht, dass die Schaltung funktioniert, ersetzen keine Simulation und bestätigen nicht, dass die Hardware getestet wurde.

## Fehlerbehebung
{: #troubleshooting}

| Symptom | Was Sie überprüfen sollten |
| --- | --- |
| **Chat ist nicht verfügbar oder fehlt** | Verwenden Sie eine aktuelle Version von TinyCAD v4. Öffnen Sie die gewünschte Zeichnung oder Bibliothek und suchen Sie in der zugehörigen Symbolleiste nach Chat. |
| **Anmeldung mit einem ChatGPT-Konto ist nicht verfügbar** | Verwenden Sie die Desktop-App oder eine lokal gehostete Version mit der Kontolaufzeit. Wählen Sie in der öffentlich gehosteten App die Option Use API Key. Lassen Sie das externe Anmeldefenster zu und aktivieren Sie während der Zustimmung die Nutzung des ChatGPT-Tarifs. |
| **Schritt 2 wird nicht fortgesetzt** | Lesen Sie die Verbindungsfehlermeldung. Überprüfen Sie den Schlüssel, den Modellzugriff, die API-Abrechnung bzw. das API-Kontingent, die Endpunkt-URL und die Internetverbindung. TinyCAD führt diese Prüfung nach dem Klick auf Next durch. |
| **Es werden keine Modelle angezeigt** | Überprüfen Sie den Anbieterzugriff. Geben Sie bei Endpunkten ohne Modellerkennung die angeforderte Model ID ein. Installieren Sie vor der Verbindung mit Ollama ein Modell mit Tool-Unterstützung. |
| **Verbindung zu lokalem Ollama nicht möglich** | Starten Sie den Server, überprüfen Sie die lokale API-URL, erlauben Sie den genauen Ursprung von TinyCAD über OLLAMA_ORIGINS, starten Sie Ollama neu und erlauben Sie den Zugriff des Browsers auf das lokale Netzwerk, wenn Sie dazu aufgefordert werden. |
| **Der Assistent antwortet, kann aber keine Bilder bearbeiten oder lesen** | Überprüfen Sie die Tool- und Vision-Unterstützung des Modells. Hängen Sie einen gut lesbaren Ausschnitt oder weniger PDF-Seiten an. |
| **Ein Werkzeug meldet, dass sich die Zeichnung geändert hat** | Lassen Sie den Assistenten den aktuellen Stand erneut einlesen und es noch einmal versuchen. Bereits vorgenommene Änderungen können weiterhin mit Undo rückgängig gemacht werden. |
| **Eine Antwort endet wegen eines Anbieterlimits** | Versuchen Sie eine kleinere Aufgabe oder eine niedrigere Denkstufe. TinyCAD kann unvollständige Antworten automatisch erneut anfordern; Wiederholungen können zusätzliches Kontingent beanspruchen. Abgeschlossene Bearbeitungen können weiterhin rückgängig gemacht werden. |

Fahren Sie mit [benutzerdefinierten Symbolbibliotheken](../Custom-symbol-libraries/), [Symbolbearbeitung](../Editing-a-Symbol/), [Layout aufräumen](../Layout-Tidy-Up/) oder [Simulation](../Simulation/) fort.

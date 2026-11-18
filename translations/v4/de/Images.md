---
layout: default
---
# Bilder
{: #images}

Fügen Sie einer Zeichnung Bilder für Logos, Referenzbilder oder gescannte Schaltpläne hinzu. Sie können ein Bild aus der Zwischenablage einfügen oder in TinyCAD Desktop und der Browser-App über **Datei → Importieren → Bild…** eine Datei auswählen.

Bilder sind Grafiken auf dem Blatt. Sie erzeugen keine Bauteile, Pins oder elektrischen Verbindungen. Um ein Schaltplanbild in bearbeitbare Symbole und Leitungen umzuwandeln, verwenden Sie stattdessen den Desktop-[KI-Assistenten](../AI-Assistant/).

## Kopieren und einfügen
{: #copy-and-paste}

1. Kopieren Sie in einer anderen Anwendung das Bild selbst, nicht den Dateinamen oder einen Link. Verwenden Sie beispielsweise in einem Browser **Bild kopieren** oder kopieren Sie eine Auswahl in einem Bildbearbeitungsprogramm.
2. Wechseln Sie zurück zu TinyCAD und klicken Sie auf den Zeichenbereich, damit Sie kein Textfeld bearbeiten.
3. Drücken Sie **Ctrl+V** (**Cmd+V** unter macOS).
4. Wählen Sie das eingefügte Bild aus und ziehen Sie es an die gewünschte Position.

Bilder im PNG- oder JPEG-Format werden in der Zwischenablage unterstützt. Lässt sich ein Bild nicht einfügen, speichern Sie es als Datei und verwenden Sie stattdessen den Import. Sie können auch Bilder kopieren und einfügen, die sich bereits in einer TinyCAD-Zeichnung befinden.

## Aus einer Datei importieren
{: #import-from-a-file}

1. Öffnen Sie **Datei → Importieren → Bild…**. Öffnen Sie in der Browser-App das Menü **Datei** mithilfe des Dokumentsymbols in der Symbolleiste.
2. Wählen Sie eine Bilddatei aus und bestätigen Sie die Dateiauswahl.
3. Das Bild erscheint auf dem aktuellen Blatt. Wählen Sie es aus, um es zu verschieben, seine Größe zu ändern oder es zuzuschneiden.

PNG- und JPEG-Dateien werden direkt eingebettet. Andere Formate, die der Browser dekodieren kann, etwa GIF, WebP, BMP und SVG, werden in PNG umgewandelt. Importierte Bilder bleiben statische Bilder; Animationen werden nicht beibehalten. Die Formatunterstützung hängt vom Browser oder von der in TinyCAD Desktop enthaltenen Browser-Engine ab. Bei einer nicht lesbaren oder nicht unterstützten Datei wird ein Fehler ausgegeben.

Sie können eine PNG- oder JPEG-Datei auch auf die Zeichnung ziehen, um sie an der Ablageposition einzufügen.

## Verschieben und Größe ändern
{: #move-and-resize}

Klicken Sie auf ein Bild, um es auszuwählen. Ziehen Sie es am Bildkörper, um es zu verschieben, oder ziehen Sie an einem Eck- oder Kantengriff, um seine Größe zu ändern.

Die Eigenschaftenleiste am unteren Rand zeigt bei ausgewähltem Bild den Abschnitt **Bild** an. Aktivieren Sie **Seitenverhältnis fixieren**, damit beim Ändern der Größe das aktuelle Verhältnis von Breite zu Höhe erhalten bleibt. Deaktivieren Sie diese Option, um Breite und Höhe unabhängig voneinander zu ändern. Beim Verschieben des Bildes bleibt sein Seitenverhältnis unverändert.

**Seitenverhältnis zurücksetzen** stellt die ursprünglichen Proportionen des sichtbaren Bildes wieder her und berücksichtigt dabei den Beschnitt. Die aktuelle Breite und die Position der linken oberen Ecke bleiben erhalten; die Höhe wird angepasst. Die Einstellung des Kontrollkästchens „Seitenverhältnis fixieren“ bleibt unverändert. Das Zurücksetzen kann rückgängig gemacht werden.

## Kanten zuschneiden
{: #clip-the-edges}

Verwenden Sie in den Bildeigenschaften die Optionen **Beschnitt links (px)**, **Beschnitt rechts (px)**, **Beschnitt oben (px)** und **Beschnitt unten (px)**, um unerwünschte Ränder oder Bildteile auszublenden.

- Die Werte sind ganze Pixel, gemessen im Originalbild, unabhängig von der angezeigten Größe oder dem Raster der Zeichnung.
- Wenn Sie beispielsweise **Beschnitt links (px)** auf **20** setzen, werden die äußersten 20 Pixel links im Quellbild ausgeblendet.
- Beim Zuschneiden behalten die verbleibenden Pixel ihren Maßstab und ihre Position; die sichtbare Begrenzung wird nach innen verschoben, anstatt das Bild zu strecken.
- In jeder Richtung muss mindestens ein Pixel erhalten bleiben. Die Steuerelemente begrenzen die Werte für die einzelnen Kanten entsprechend.
- Setzen Sie einen Kantenwert wieder auf **0**, um den Beschnitt aufzuheben. Beim Zuschneiden werden keine Pixel aus dem eingebetteten Original entfernt.

**Rückgängig** und **Wiederholen** gelten auch für das Einfügen von Bildern und Änderungen an deren Eigenschaften sowie für das Verschieben und Ändern der Größe.

## Speichern und Ausgabe
{: #saving-and-output}

Bilder werden in die Zeichnungsdatei eingebettet, daher muss die Originaldatei nicht an ihrem Importort verbleiben. Speichern Sie die Zeichnung wie gewohnt, um Bilder, Einstellungen für festes Seitenverhältnis und Beschnitt beizubehalten. Diese Einstellungen bleiben nach dem erneuten Öffnen erhalten und werden auch in komprimierten `.dzn`-Zeichnungen beibehalten.

Der Beschnitt gilt für jedes eingefügte Bild einzeln, sodass separate Kopien unterschiedliche Teile desselben Bildes zeigen können. Das sichtbare Bild wird in die Druckausgabe sowie in die PDF- und SVG-Ausgabe aufgenommen.

- Zurück zu [Zeichnen](../User-guide/)
- Zurück zu [Inhalt von v4](../CONTENTS/)

---
layout: default
---
# カスタムシンボルライブラリ
{: #custom-symbol-libraries}

このページでは、ライブラリレベルの作業について説明します。TinyCADへのライブラリの追加、編集のためのライブラリのオープン、新しいライブラリファイルの作成、追加、複製、名前変更、削除などの簡単なシンボル管理操作が含まれます。

ライブラリの参照や、シンボルを図面に配置する方法については、[シンボルライブラリの使用](../Using-Symbol-Libraries/)を参照してください。ピンやシンボルのプロパティを含む、シンボル自体の作成や変更については、[シンボルの編集](../Editing-a-Symbol/)を参照してください。

ライブラリファイルには`.tclib`拡張子が使われ、コンピューター上、またはGoogleとの連携を利用してGoogle Drive上に保存できます。デスクトップ版TinyCADとブラウザー版の間で相互に互換性があります。

TinyCADの旧バージョンv3で作成されたライブラリも読み込めます。

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### ブラウザー
{: #browser}

#### ローカルファイルから既存のライブラリを開く
{: #open-an-existing-library-from-a-local-file}

1. 別のTinyCADウェブタブまたはウィンドウを開きます。
2. **開く (Open)** を使って`.tclib`ライブラリファイルを開きます。
3. ライブラリを使用している間は、そのタブを開いたままにします。

ライブラリを開いたら、そのウィンドウでシンボルを参照したり、図面にドラッグしたりできます。また、ライブラリ内のシンボル定義を編集することもできます。

#### Google Driveのライブラリを利用可能にする
{: #make-a-google-drive-library-available}

デスクトップ版TinyCADで作成したライブラリがある場合は、各ライブラリにTinyCADウェブ版からアクセスできるようにします。

1. Google Driveで`.tclib`ファイルを右クリックします。
2. **アプリで開く -> TinyCAD** を選択します。

<img src="/v4/images/media2/image1.png" alt="Google Drive context menu showing Open with TinyCAD for a library file" style="width: 6.26806in; height: 4.54514in;" />

使用できるようにしたい**すべての**ライブラリについて、これを繰り返します。

この操作を行うと、ライブラリが編集用に開きます。アクセスするだけでよい場合は、その後タブ／ウィンドウを閉じてかまいません。

**注:** Google Drive では、大文字と小文字が区別される場合があります。`TinyCAD` が **次で開く** に表示されない場合は、`.tclib` が小文字になっていることを確認してください。

描画セッションに戻ります:

1. **マイライブラリ**を開きます。
2. **マイライブラリ**の横にある**更新**をクリックします。

<img src="/v4/images/media2/image2.png" alt="My Libraries panel with the Refresh button used to reload available libraries" />

更新後、ライブラリが一覧表示されます:

<img src="/v4/images/media2/image4.png" alt="My Libraries panel listing available custom symbol libraries"  />

ライブラリを展開すると、その中を参照できます:

<img src="/v4/images/media2/image3.png" alt="Library browser showing symbol search results and a preview button"  />

#### 新しいライブラリの作成
{: #creating-a-new-library}

メニュー項目の**新しいカスタムライブラリ**を使用します:

<img src="/v4/images/media2/image5.png" alt="Menu with the New Custom Library command"/>

#### ライブラリの編集
{: #edit-a-library}

ライブラリの**編集**ボタンを使って TinyCAD web で開くと、既存のライブラリを編集できます。

### デスクトップアプリ
{: #desktop-app}

#### ライブラリの追加または削除
{: #add-or-remove-libraries}

ライブラリのシンボルを使用するには、まず **My Libraries** のライブラリ一覧にそのライブラリを追加する必要があります。

![My Libraries のサイドパネル](/v4/images/media/image9.png)

この一覧にライブラリを追加するには、**Add** をクリックします。ファイル選択ダイアログが表示されます。`.tclib` 拡張子のライブラリファイルを選択してください。

一覧からライブラリを削除するには、そのライブラリの編集アイコンをクリックしてライブラリダイアログを開き、**Remove** をクリックします。ファイル自体は削除されず、一覧から取り除かれるだけです。

#### ライブラリの編集
{: #edit-a-library-1}

ライブラリ編集ダイアログでライブラリを選択し、**Edit** をクリックします。ライブラリのサムネイルが表示された新しいウィンドウが開きます。

![シンボルのサムネイルを表示したライブラリエディター](/v4/images/media/image10.png)

ライブラリ編集ウィンドウでは、次の操作ができます。

- ライブラリ内のシンボルのサムネイルを確認する
- ライブラリに新しいシンボルを追加する
- ライブラリ内のシンボルを削除、複製、名前変更する
- シンボルの図形、ピン、名前、属性を編集する
- シンボルを別のライブラリに移動する

シンボルをクリックして選択します。選択後は、メインウィンドウで編集するか、コントロールを使って複製または削除できます。

ライブラリの編集が終わったら、通常の **Save** または **Save As** コマンドを使って保存します。

シンボルレベルでの編集手順については、[シンボルの編集](../Editing-a-Symbol/)をご覧ください。

#### 新しいシンボルライブラリの作成
{: #creating-a-new-symbol-library}

ライブラリパネルの **新規（New）** ボタンを使用します。空のライブラリが開いた新しいウィンドウが表示されます。

</div>

- [シンボルとライブラリ](../Symbols-and-Libraries/)に戻る
- [v4の目次](../CONTENTS/)に戻る

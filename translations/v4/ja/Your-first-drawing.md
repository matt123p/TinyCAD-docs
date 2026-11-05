---
layout: default
---
# はじめての回路図
{: #your-first-drawing}

このページでは、TinyCADで初めて回路図を描く手順を説明します。

基本的に、TinyCADの図面は、シンボルをワイヤで接続したものです。この例では、シンボルを配置してから、ワイヤで接続します。

## 回路例
{: #example-circuit}

作成する簡単な回路を示します。

<img src="/v4/images/media/image1.png" alt="Simple battery, resistor, and LED circuit used in the tutorial" style="width: 2.13542in; height: 1.13542in;" />

<p>
	<a href="/v4/examples/First%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;ダウンロード
	</a>
</p>


## 動画による手順説明
{: #video-walkthrough}

{% include video-player.html
	src="/v4/images/video/Video 2.mp4"
	width=1618
	height=922
	caption="シンボルのテキストを編集し、位置を調整する方法を示す動画。"
%}

# 手順ガイド
{: #step-by-step-guide}

## シンボルライブラリ
{: #symbol-libraries}

1. 検索ボックスに`battery`と入力します。
2. **Multi Cell Battery**を選択します。
3. シンボルパネルから図面上にシンボルをドラッグします。

続いて、抵抗とLEDを配置します。

ツールバーの回転／反転コントロールを使って、シンボルの向きを調整します。

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />

間違えた場合は、元に戻す／やり直しを使用します。

<img src="/v4/images/media/image6.png" alt="Undo and Redo toolbar buttons" />

図面は次のようになります。

<img src="/v4/images/media/image7.png" alt="Battery, resistor, and LED symbols placed on the drawing before wiring" style="width: 3.76042in; height: 2.52083in;" />

## 回路の配線
{: #wiring-up-a-circuit}

1. **Wire**ツールを選択します。
2. 電池の端子をクリックして、ワイヤの開始点を指定します。
3. 抵抗の端子まで移動し、もう一度クリックしてワイヤを配置します。

ワイヤはシンボルの有効な接続点にスナップします。赤い円はスナップ位置を示します。

ヒント：キーボードの`W`を押すと、すぐにワイヤモードに戻れます。

配線すると、次のようになります。

<img src="/v4/images/media/image8.png" alt="Example circuit after the battery, resistor, and LED have been wired together" style="width: 3.40625in; height: 2.38542in;" />

## 図面への注釈
{: #annotating-the-drawing}

シンボルには部品値とリファレンスが必要です。TinyCADでは通常、シンボルの**Name**フィールドと**Ref**フィールドを使用します。

1. 電池をクリックします。
2. 下部の**Symbol**パネルを開きます。
3. `BATTERY_2`を`9V`に変更します。
4. リファレンス`Z?`を`B1`に変更します。

ほかの部品についても同様に設定します。

- 抵抗：Name `1K`、Ref `R1`
- LED：Name `Red Led`、Ref `D1`

名前／リファレンスが非表示の場合は、チェックボックスで図面上のテキストの表示／非表示を切り替えます。

## 読み込みと保存
{: #loading-and-saving}

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### ブラウザーのローカルファイル
{: #browser-local-files}

図面を保存するには、ツールバーの「Save As」または「Save」ボタンを使用します。

<img src="/v4/images/media/image2.png" alt="The toolbar buttons for Save and Save As"  />


### ブラウザーのGoogle
{: #browser-google}

最初の図面が完成しました。名前を変更するには、次の手順を実行します。

1. 上部にある図面名をクリックします（例：`tCad1.dsn`）。
2. 名前を`First Drawing.dsn`に変更します。
3. Enterを押します。

<img src="/v4/images/media/image13.png" alt="Editable drawing title field used to rename the current design" style="width: 4.15625in; height: 0.92708in;" />

**Save**アイコンを使ってGoogle Driveに保存します。

Google Driveから再度読み込むには、次の手順を実行します。

1. <https://drive.google.com/drive/>を開きます。
2. 図面を見つけます。
3. 右クリックして、**Open with -> TinyCAD**を選択します。

<img src="/v4/images/media/image14.png" alt="Google Drive context menu showing Open with TinyCAD for a drawing file" style="width: 5.09138in; height: 3.90625in;" />

Google Driveでは、TinyCADの図面の名前変更や削除もできます。

### デスクトップアプリ
{: #desktop-app}

最初の図面が完成しました。デスクトップアプリから保存するには、次の手順を実行します。

1. **File -> Save As**を開きます。
2. コンピューター上のフォルダーを選択します。
3. 図面を`First Drawing.dsn`として保存します。

後で再度読み込むには、次の手順を実行します。

1. **File -> Open**を開きます。
2. `First Drawing.dsn`を参照します。
3. ファイルを選択して開きます。

TinyCADデスクトップ版は、ブラウザー版TinyCADと同じ`.dsn`形式を使用します。Google Driveから図面をダウンロードして、デスクトップアプリで開くことができます。

同様に、TinyCADデスクトップ版で作成した図面を、ブラウザー版で使用することもできます。

</div>

## さらに読む
{: #further-reading}

カスタムシンボルとライブラリについては、[カスタムシンボルライブラリ](../Custom-symbol-libraries/)を参照してください。

- [図面作成](../User-guide/)に戻る
- [v4の目次](../CONTENTS/)に戻る

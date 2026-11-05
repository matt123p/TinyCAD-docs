---
layout: default
---
# シンボル
{: #symbols}

シンボルは、TinyCADの回路図を構成する基本要素です。ライブラリからシンボルを配置し、属性を設定してからピンを配線し、電気的に有効な設計を作成します。

独自のシンボルを使用することも、TinyCAD.netのウェブサイトからシンボルを直接ダウンロードすることもできます。

関連項目:

- [シンボルライブラリの使用](../Using-Symbol-Libraries/)
- [カスタムシンボルライブラリ](../Custom-symbol-libraries/)

## シンボルを検索して配置する
{: #find-and-place-symbols}

1. 検索ボックスに、使用するシンボルの名前を入力します
2. シンボルを選択してプレビューを表示し、使用するものを選びます
3. プレビューからシンボルを図面にドラッグします

{% include video-player.html
	src="/v4/images/video/Video 6.mp4"
	width=1280
	height=822
	caption="シンボルの検索と配置方法を紹介する動画ガイド。"
%}



## 配置中の向き
{: #orientation-while-placing}

シンボルの配置中に、ツールバーの回転ボタンと反転ボタンを使って向きを設定します。

<img src="/v4/images/media/image5.png" alt="Rotate and flip controls used to change symbol orientation" />


## シンボルのテキストの編集と移動
{: #editing-and-moving-symbol-text}

配置後、シンボルをドラッグすると、シンボル全体を移動できます。

シンボルを選択して各テキストフィールド（値、名前、リファレンスなど）をドラッグすると、それぞれを独立して移動し、見やすい位置に配置することもできます。

テキストをクリックすると編集できます。

{% include video-player.html
	src="/v4/images/video/Video 1.mp4"
	width=284
	height=248
	caption="シンボルのテキストの編集と位置変更方法を紹介する動画ガイド。"
%}

## 回路図のシンボル属性
{: #symbol-attributes-in-a-schematic}

配置したシンボルには、通常、次の主要な属性が含まれます。

- **名前/値**: 部品の種類（例: `10k`、`100nF`、デバイスの種類）
- **リファレンス**: シートまたはプロジェクト内で一意の部品記号（例: `R1`、`U3`）
- **パッケージ**（任意）: 後続のエクスポート処理で使用するフットプリント/パッケージ識別子

リファレンスは一意でなければなりません。必要に応じて、TinyCADのツールを使ってリファレンスを自動生成したり、再アノテーションしたりできます。

必要に応じて、プロジェクトのメタデータ、PCBの処理フロー、シミュレーションのメタデータ用に属性を追加できます。

## 関連ページ
{: #related-pages}

- [配線](../Wires/)
- [ラベル](../Labels/)
- [未接続](../No-Connects/)
- [シンボルの編集](../Editing-a-Symbol/)

- [作図](../User-guide/)に戻る
- [v4の目次](../CONTENTS/)に戻る

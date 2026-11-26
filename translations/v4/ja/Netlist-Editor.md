---
layout: default
---
# ネットリストエディター
{: #netlist-editor}

`Netlist Editor`はTinyCAD v4の新機能です。

次のような場合にこの機能を使用します。

- TinyCADがワイヤとラベルをどのようにネットにまとめたか確認する
- 図面内でネットが使用されている場所を見つける
- ネットにタイプを割り当てる
- 回路図上のネットのグループの表示方法を変更する

## ネットリストビューについて
{: #what-the-netlist-view-is}

`Netlist Editor`は、図面内のネットをリアルタイムで一覧表示します。

ネットは電気的な接続です。TinyCADは次の情報からネットを判定します。

- ワイヤ
- ピン
- ラベル
- 電源シンボル

一覧はリアルタイムで表示され、回路図の編集に合わせて自動的に更新されます。

## 開き方
{: #how-to-open-it}

1. エディターの下部パネルを確認します。
2. `Symbols`が表示されている場合は、モードボタンを使って`Netlist`に切り替えます。

選択中の項目が原因で別のパネルが開いている場合は、まず選択を解除してください。

![分圧回路の下に表示されたネットリストビュー。OUT行が強調表示されています](../images/netlist-editor/netlist-overview.png)

同梱の分圧回路の例では、`OUT`行が`R1.2`と`R2.1`を接続しています。
この行にマウスカーソルを合わせると、図面内の接続が強調表示されます。

## 各列の意味
{: #what-each-column-means}

- `Net`: ネット名または内部ネット番号
- `Sheet`: その行の主な項目が見つかったシート
- `Connections`: そのネット上のピン接続数
- `Labels`: そのネット上で見つかったラベル
- `Type`: そのネットに割り当てられたネットリストタイプ
- `Symbols`: そのネット上で接続されている部品とピン

## ネットリストビューの使い方
{: #how-to-use-the-netlist-view}

### ネットを見つける
{: #find-a-net}

検索ボックスを使って一覧を絞り込みます。

次の項目で検索できます。

- ネット名
- シート名
- ラベルのテキスト
- シンボル参照
- タイプ名

### 図面内のネットを強調表示する
{: #highlight-a-net-in-the-drawing}

行にマウスカーソルを合わせます。

TinyCADが回路図内の該当するネット項目を強調表示するため、そのネットの位置を確認できます。

### 図面内のネットに移動する
{: #jump-to-a-net-in-the-drawing}

行をクリックします。

TinyCADが該当する項目のあるシートに移動します。

## ネットにタイプを割り当てる方法
{: #how-to-assign-a-type-to-a-net}

**Netlist**ビューを開いた状態で、回路図上のワイヤをクリックして、そのネットの行を強調表示します。その行の**Type**リストから既存のタイプを選択します。独自のワイヤスタイルを持つタイプを作成するには、先に**Netlist Types**を開いてスタイルを定義します。

ネットタイプは、再利用可能な描画スタイルのセットです。同じタイプを複数のネットに割り当てると、同じ外観にできます。そのタイプを編集すると、そのタイプを使用しているすべてのネットが更新されます。また、タイプに属するネットのラベルや電源シンボルに独自の色を設定したり、属性としてメモを保存したりできます。スタイルを変更しても、電気的な接続は保持されたまま、図面の外観だけが変わります。

## 例 – 分圧回路のOUTワイヤを緑色で太くする
{: #example--make-the-dividers-out-wire-green-and-thicker}

付属の `divider` 図面を **Open Example** → **SPICE tutorial** から開き、回路を拡大表示します。下部パネルで **Symbols** から **Netlist** に切り替えます。**OUT** ラベルは、ピン **R1.2** と **R2.1** の間のネットを示します。最初は `default` タイプで、ワイヤの太さは標準です。

![スタイル設定前の分圧回路。R1とR2の間に細い青色のOUTワイヤが表示されています](../images/netlist-editor/netlist-wire-before.png)

### ワイヤスタイルを作成する
{: #create-the-wire-style}

1. **Netlist Types**をクリックし、**Add**をクリックして、新しいタイプに`control`という名前を付けます。
2. `control`行で、**Wire thickness**を`4`に設定します。値を`1`にすると、線の太さは標準になります。**Tab**を押して値を確定します。
3. 同じ行の **Wire colour**（ワイヤの色）セルをクリックします。**Override colour**（色を上書き）をオンにし、緑色にするには `007F5F` を **Hex** 欄に入力します。プレビューには両方の設定を反映したワイヤが表示されます。
4. カラーピッカーで**OK**をクリックします。`control`行の緑色の色見本と太さの値を確認し、**Netlist Types**で**OK**をクリックしてタイプを保存します。

![色の上書きにチェックが入り、プレビューに緑色のワイヤが表示されたカラーピッカー](../images/netlist-editor/netlist-wire-colour.png)

![Netlist Typesで、control行のWire colourに緑色の色見本、Wire thicknessに4が表示されています](../images/netlist-editor/netlist-wire-type.png)

### OUTにスタイルを適用する
{: #apply-the-style-to-out}

1. 回路図上で**R2**のすぐ上にあるワイヤをクリックします。TinyCADが**Netlist**パネルの**OUT**行を強調表示します。
2. 強調表示された行の**Type**リストを開き、`control`を選択します。
3. 回路図の何もない場所をクリックして選択を解除します。**R1.2** と **R2.1** の間のワイヤが緑色になり、太くなります。標準のワイヤスタイルに戻すには、`default` を **Type** リストで選択します。

![回路図で選択されたOUTワイヤと、controlが選択された状態で強調表示されているNetlist行](../images/netlist-editor/netlist-wire-assignment.png)

![スタイル設定後の分圧回路。R1とR2の間のOUTワイヤが太い緑色で表示されています](../images/netlist-editor/netlist-wire-after.png)

編集した例を保存するには、**Save As**を使用します。

### 操作の流れを見る
{: #watch-the-walkthrough}

{% include video-player.html src="/v4/videos/netlist-editor/netlist-editor.webm" type="video/webm" poster="/v4/images/netlist-editor/netlist-walkthrough-start.png" caption="Netlistに切り替え、緑色のワイヤスタイルを作成してから、OUTワイヤをクリックして該当行を見つけ、スタイルを適用します。" %}

## Netlist Typesでできること
{: #what-you-can-do-in-netlist-types}

`Netlist Types`ウィンドウでは、次の操作を行えます。

- 新しいタイプを追加する
- 既存のタイプを複製する
- タイプ名を変更する
- タイプを削除する
- ワイヤの色を変更する
- ラベルの色を変更する
- 電源シンボルの色を変更する
- ワイヤの太さを変更する
- 独自の属性を追加する
- 保存前に結果をプレビューする

## デフォルトタイプ
{: #the-default-type}

`default`タイプの名前は固定されており、ワイヤの太さは`1`です。TinyCADはこの行の色を、図面の標準的なネットの色として使用します。タイプが割り当てられていないネットには`default`が使用されます。

## タイプを複製する方法
{: #how-to-duplicate-a-type}

既存のタイプに似たタイプを作成するときに便利です。

1. タイプの行を選択します。
2. `Duplicate`をクリックします。
3. 複製したタイプの名前を変更し、色や太さを調整します。
4. `OK`をクリックします。

## ラベルと電源シンボルの色
{: #label-and-power-symbol-colours}

カラーピッカーの**Wire**、**Label**、**Power**タブを使って、それぞれの色を個別に編集します。カスタムタイプの場合、カスタマイズする各タブで**Override colour**を有効にします。上書き設定を解除したタブでは、その項目に図面のデフォルト色が使用されます。

## 属性を追加する方法
{: #how-to-add-attributes}

属性は、タイプとともに保存される単純な名前と値の組です。

追加するには、次の手順を実行します。

1. そのタイプの`Attributes`セルをクリックします。
2. `Add Attribute`をクリックし、属性名と値を入力します。追加する項目があれば繰り返します。
3. 属性を保存します。
4. メインダイアログで`OK`をクリックします。

![controlタイプの用途とメモの項目が入力された属性エディター](../images/netlist-editor/netlist-attributes.png)

これらの入力例では、タイプの用途を説明し、配線に関するメモを追加しています。これらはタイプに属し、そのタイプが割り当てられたすべてのネットで共有できます。

現在、これらの属性は主に図面とともに保存されます。すべての出力形式でまだ使用されていない場合でも、タイプに関する追加情報を保持するのに便利です。


## 関連ページ
{: #related-pages}

- [ネットリストの生成](../Generate-Netlist/)
- [部品表](../Bill-Of-Materials/)
- [デザインルールチェック](../Design-Rules-Check/)
- [SPICE出力](../SPICE-output/)
- [VHDL出力](../VHDL-output/)

- [Advanced](../Advanced/)に戻る
- [v4 contents](../)に戻る

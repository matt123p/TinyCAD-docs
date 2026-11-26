---
layout: default
title: 2. Gates and truth tables
---
# 2. ゲートと真理値表
{: #gates-and-truth-tables}

[前へ](/v4/XSPICE-Tutorial-01/) · [目次](/v4/Simulation-Tutorials/) · [次へ](/v4/XSPICE-Tutorial-03/)

この章の例は TinyCAD に同梱されています。**Open Example → XSPICE and digital tutorial** を選択し、指定された例を選んでから **Open Drawing** を選択します。ダウンロードは不要です。

**logic-nand** を開きます。X1にはADCブリッジ、2入力XSPICE NAND、DAC出力ブリッジが含まれています。独立したパルス源が、異なる周期でAとBを駆動します。8 µsの過渡解析を実行し、A、B、Yを表示します。

![NANDテスト回路](/v4/Images/simulation-tutorials/xspice/logic-nand-circuit.png)
![計算されたNAND波形](/v4/Images/simulation-tutorials/xspice/logic-nand-results.png)

ブール関数は `Y = NOT(A AND B)` です。

| A | B | 安定後のY |
| --- | --- | --- |
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

プロットされたアナログ表現では、0は約0 V、1は約5 Vを意味します。出力がローになるのは、両方の入力がハイのときだけです。入力がしきい値を横切る正確な瞬間ではなく、各安定区間の中央を観察してください。ゲートの立ち上がりおよび立ち下がり伝搬遅延は20 nsです。ブリッジとその有限なエッジも、タイミングに影響します。

## 意図的な真理値表の実験を行う
{: #run-a-deliberate-truth-table-experiment}

チャートカーソルを使って、各行に対応する安定区間を特定します。出力が安定した後のA、B、Yを記録してください。2つの入力が切り替わる間にだけごく短い入力の組み合わせが生じる場合、その遷移を定常状態の真理値表の行を裏付ける証拠として使わないでください。明確に手動で確認するには、2つの電源をDC 0 Vまたは5 Vに変更し、過渡解析を再度実行して、4つの組み合わせを個別にテストします。

X1に埋め込まれたSPICEモデルの主要なステートメントは次のとおりです。

```spice
Ag [da db] dy ng
.model ng d_nand(rise_delay=20n fall_delay=20n)
```

角括弧は入力ポートのベクトルをまとめます。`da`、`db`、`dy`は内部イベント駆動ノードです。これらは、抵抗を直接接続できる通常の電気ネットではありません。ブリッジは、これらの内部ノードを図面に表示されるアナログ端子に接続します。

別の関数を試すには、図面のコピーを作成し、X1のSPICEプロローグ内のモデル型を、`d_and` などの互換性のあるゲートに変更します。ベクトル／スカラーのポートインターフェースには互換性を保ってください。遷移が安定した後のAND真理値表は、NANDの結果を反転したものになるはずです。

## この例で確認できないこと
{: #what-this-example-does-not-establish}

このモデルは、型番のあるパッケージIC、そのESDダイオード、ファンアウト制限、電源電流のスパイク、負荷に対するメーカー規定のタイミングを表現しません。20 nsの遅延は、この実験の入力パラメーターです。真理値表が正しいことは、テストした状態で論理が機能することを示すものであり、別のチップとの電気的互換性を証明するものではありません。

問題がある場合は、まず保存された入力レベル、次にブリッジのしきい値、最後にゲートモデルとポート順を確認してください。このブリッジ設定では、2 Vに保持された入力は未定義であり、一方の電源レールに近いというだけで、どちらかのブール値に割り当てることはできません。

モデル定義とポート規約については、[ngspiceマニュアル](https://ngspice.sourceforge.io/docs.html)のXSPICEコードモデルの章に記載されています。

## レッスン用回路をダウンロードする
{: #download-the-lesson-circuits}

同じ例はすでに **Open Example** から利用できます。別途コピーが必要な場合は、`.dzn`図面をダウンロードし、TinyCADで **File → Open** を選択してください。付属の`.cir`は、内容を確認するため、または互換性のある外部シミュレーターで使用するためのSPICEテキストであり、TinyCADの図面ではありません。XSPICE回路を新たに実行するにはDesktopが必要です。

| 例 | 図面 | ネットリスト |
| --- | --- | --- |
| logic-nand | [TinyCAD図面](/v4/examples/simulation-tutorials/xspice/logic-nand.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/xspice/logic-nand.cir) |

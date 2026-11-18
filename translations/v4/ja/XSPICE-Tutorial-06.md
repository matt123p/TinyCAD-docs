---
layout: default
title: 6. Mixed-signal filtering and unknown states
---
# 6. 混合信号フィルタリングと不定状態
{: #mixed-signal-filtering-and-unknown-states}

[前へ](/v4/XSPICE-Tutorial-05/) · [コースの内容](/v4/Simulation-Tutorials/)

この章の例は TinyCAD に同梱されています。**Open Example → XSPICE and digital tutorial** を選択し、名前の付いた例を選んでから、**Open Drawing** を選択してください。ダウンロードは不要です。

**logic-filter** を開きます。0～5 V、10 kHz のパルス列が、XSPICE バッファと DAC ブリッジを通過し、物理 SPICE の 1 kΩ/1 µF ローパスフィルタを駆動します。高レベルの継続時間は 100 µs 周期のうち 25 µs なので、公称デューティサイクルは約 25% です。入力エッジには有限の立ち上がり時間があるため、しきい値で定義される正確なデューティサイクルはわずかに異なります。

![混合デジタル・アナログフィルタ回路](/v4/images/simulation-tutorials/xspice/logic-filter-circuit.png)
![計算された PWM とフィルタ出力](/v4/images/simulation-tutorials/xspice/logic-filter-results.png)

5 ms の過渡解析を実行します。A、Y、FILTERED をプロットしてください。デジタル経路はパルス関数を保持し、RC 回路網はリップルをある程度残しながら平均化します。長時間平均は `5 V × 0.25 ≈ 1.25 V` に近づきます。τ = 1 ms なので、起動には数ミリ秒かかります。

## 有限の測定時間を正しく評価する
{: #measure-the-finite-acquisition-honestly}

4～5 ms の区間では、基準となるフィルタ出力の平均値は約 **1.242 V**、ピーク間リップルは約 **0.108 V**（約 1.187～1.295 V）です。理想的な長時間平均値にはまだ完全には達していません。解析時間を 10 ms に延長し、最後の 1 ms 区間を比較してください。フィルタの時定数を長くするとリップルは小さくなりますが、アナログ RC のレッスンと同様に、整定時間は長くなります。

これは PWM から電圧への変換を理解するための有用なモデルです。マイコン出力の完全なモデルではありません。DAC ブリッジの出力駆動能力は理想化されており、電源電流の境界は明示されていません。負荷電流や出力段の損失が重要な場合は、適切なドライバ抵抗またはデバイスモデルを追加してください。

## 不定の論理レベルを調べる
{: #explore-an-undefined-logic-level}

**logic-unknown** を開きます。その PWL 入力は、最初に 0 V、次に 2 V、最後に 5 V に保持されます。3 µs 実行し、中間の平坦部を確認してください。

![不定のデジタル状態をアナログで表した計算結果](/v4/images/simulation-tutorials/xspice/logic-unknown-results.png)

ADCブリッジの低閾値と高閾値は、それぞれ1 Vと3 Vです。2 Vのプラトーはその間にあるため、イベント駆動入力は未定義です。この不明値はバッファを通じて伝播します。DACブリッジは、表示レベルとして**2.5 V**を明示的に要求する`out_undef`パラメーターにより、その不明値を変換します。

この 2.5 V を、物理ゲートが中間電位にとどまるという予測として解釈しないでください。これは、アナログチャート上で不定状態を見えるようにするために選ばれた表現です。このモデルは、ノイズによって生じるしきい値付近のチャタリングやメタスタビリティの物理現象も再現しません。実際の入力レシーバには、ヒステリシス、規定されたしきい値ファミリ、より詳細な電気モデルが必要な場合があります。

## 混合信号のチェックリスト
{: #a-mixed-signal-checklist}

実験結果を信頼する前に、どの接続が電圧と電流を伝え、どの接続がイベントを伝えるのかを特定します。各領域間の変換をすべて確認してください。しきい値、不定状態のマッピング、伝搬遅延、出力エッジ時間、初期条件を記録します。整定後の機能と遷移時の動作の両方を確認してください。測定に必要な周期または整定時間を含む、十分な長さの解析を実行します。

同じ方法は、デジタルロジックを駆動するコンパレータ、スイッチを制御する分周クロック、アナログフィルタを駆動する論理波形にも応用できます。位相同期ループやデルタシグマの例など、より複雑な XSPICE アプリケーションは、[公式 XSPICE HOWTO ](https://ngspice.sourceforge.io/xspicehowto.html) にリンクされています。システム全体を組み立てる前に、各領域とインターフェースを個別に検証することから始めてください。

これで、機能ゲート、ハザード、記憶、リセット、カウント、アナログ・デジタル混在経路を学びました。電力、非線形アンプの動作、周波数応答については、[SPICE コース](/v4/SPICE-Tutorial-01/) に戻ってください。

## レッスン回路をダウンロードする
{: #download-the-lesson-circuits}

同じ例はすでに **Open Example** から利用できます。独立したコピーを入手するには、`.dzn` 図面をダウンロードし、TinyCAD で **File → Open** を使用してください。付属の `.cir` は内容確認や互換性のある外部シミュレータでの使用を目的とした SPICE テキストであり、TinyCAD の図面ではありません。XSPICE 回路を新たに実行するには Desktop が必要です。

| 例 | 図面 | ネットリスト |
| --- | --- | --- |
| logic-filter | [TinyCAD 図面](/v4/examples/simulation-tutorials/xspice/logic-filter.dzn) | [SPICE テキスト](/v4/examples/simulation-tutorials/xspice/logic-filter.cir) |
| logic-unknown | [TinyCAD 図面](/v4/examples/simulation-tutorials/xspice/logic-unknown.dzn) | [SPICE テキスト](/v4/examples/simulation-tutorials/xspice/logic-unknown.cir) |

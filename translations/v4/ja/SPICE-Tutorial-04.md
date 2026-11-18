---
layout: default
title: "4. Transient analysis: charging a capacitor"
---
# 4. 過渡解析：コンデンサの充電
{: #transient-analysis-charging-a-capacitor}

[前へ](/v4/SPICE-Tutorial-03/) · [目次](/v4/Simulation-Tutorials/) · [次へ](/v4/SPICE-Tutorial-05/)

この章の例は TinyCAD に同梱されています。**Open Example → SPICE tutorial** を選択し、名前が示された例を選んでから、**Open Drawing** を選択してください。ダウンロードは不要です。

**rc-step** を開きます。電源が 0 V から 1 V へ変化し、1 kΩ を介して 1 µF のコンデンサに接続されています。保存された過渡解析の時間は 5 ms、最大時間刻み幅は 5 µs です。IN と OUT を同時にプロットします。


## 動画：rc の充電と時定数
{: #video-rc-charging-and-time-constant}

最大時間刻み幅を細かくし、1 ms 時点の OUT と RC 時定数を測定します。

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/rc-transient.mp4" poster="/v4/videos/simulation-tutorials/spice/rc-transient.jpg" caption="RC の充電と時定数。" %}

[動画を見る、またはダウンロードする](/v4/videos/simulation-tutorials/spice/rc-transient.mp4)。

### 回路と基準結果
{: #circuit-and-reference-results}

![RC 充電回路](/v4/images/simulation-tutorials/spice/rc-step-circuit.png)

![計算されたコンデンサの充電曲線](/v4/images/simulation-tutorials/spice/rc-step-results.png)

## 出力が瞬時に跳ね上がらず、曲線を描く理由
{: #why-the-output-curves-rather-than-jumps}

コンデンサ電流は `i = C × dv/dt` です。入力が変化した直後も、コンデンサはほぼ 0 V のままなので、入力電圧のほぼすべてが R1 にかかります。初期電流はおよそ `1 V / 1 kΩ = 1 mA` です。コンデンサが充電されるにつれて、抵抗の電圧と電流は減少します。出力は瞬時に 1 V に達するのではなく、1 V に近づいていきます。

時定数は `τ = R × C = 1 ms` です。理想的なステップ入力で、コンデンサが初期状態で未充電の場合、`VOUT(t) = 1 − exp(−t/τ)` ボルトになります。

| ステップ後の時間 | 予想される OUT |
| --- | --- |
| 1 ms = 1τ | 0.632 V |
| 2 ms = 2τ | 0.865 V |
| 3 ms = 3τ | 0.950 V |
| 5 ms = 5τ | 0.993 V |

入力された信号源は 1 µs かけて立ち上がるため、瞬時ステップの式とはわずかに異なる値になります。グラフのカーソルを使うか、1 ms 時点で **値 (Value)** 測定を行ってください。初期値 0 V、最終値 1 V の **時定数 (Time constant)** 測定では、約 1 ms になるはずです。**立ち上がり時間 (Rise time)** 測定では 10～90% の区間を使用するため、予想値は `ln(9) × τ ≈ 2.197 ms` であり、1 ms ではありません。

## 解析時間と最大時間刻み幅は異なる問いに答える
{: #duration-and-maximum-step-answer-different-questions}

解析時間は実験を実行する長さを決めます。最大時間刻み幅は、時間点間のソルバーの間隔を制限します。エッジや非線形イベントの近くでは、ソルバーがさらに小さい時間刻みを使うことがあります。したがって、サンプル数は解析時間を最大時間刻み幅で割った値と一致するとは限りません。

解析時間が短すぎると、整定の様子が見えません。時間刻み幅が粗すぎると、プロットがもっともらしく見えても、エッジやピークを正確に測定できない場合があります。最大時間刻み幅を 5 µs から 2.5 µs に減らし、1 ms 時点の読み取り値を比較してください。安定した結果であれば、ほとんど変化しないはずです。これは単にソルバーが成功を報告するかどうかを確かめるのではなく、測定値の収束を確認するものです。

## 初期条件とエネルギー
{: #initial-conditions-and-energy}

通常、SPICE は過渡解析を開始する前に DC 動作点を求めます。**初期条件**をチェックすると、別の初期条件スタートアップ経路が要求されます（`uic`）。コンデンサやインダクタに適切な初期条件を設定し、意図をもって使用してください。収束問題を常に解決する方法ではありません。この例では入力の初期値がゼロなので必要ありません。

1 V では、コンデンサは `E = ½CV² = 0.5 µJ` のエネルギーを蓄えます。充電中、R1 はエネルギーを消費し、電源は蓄積エネルギーと消費エネルギーの両方を供給します。瞬時電力と累積エネルギーは別々の測定量です。選択した時間区間で電力を積分すると、ジュール単位のエネルギーが得られます。

2.2 kΩ に変更して時定数が 2.2 ms になると予測し、解析時間を 11 ms に延ばしてみましょう。次に R1 を元に戻し、C1 を半分にします。時定数も半分になるはずです。これらの変更は、部品の影響とプロット上の見かけの影響を区別できる実験の設計方法を示しています。

## レッスン用回路をダウンロードする
{: #download-the-lesson-circuits}

同じサンプルはすでに **サンプルを開く（Open Example）** から利用できます。独立したコピーを入手するには、`.dzn` の図面をダウンロードし、TinyCAD で **ファイル → 開く（File → Open）** を使用してください。対応する `.cir` は、内容の確認や互換性のある外部シミュレーターでの使用を目的とした SPICE テキストであり、TinyCAD の図面ではありません。XSPICE 回路を新たに実行するには Desktop が必要です。

| 例 | 図面 | ネットリスト |
| --- | --- | --- |
| rc-step | [TinyCAD 図面](/v4/examples/simulation-tutorials/spice/rc-step.dzn) | [SPICE テキスト](/v4/examples/simulation-tutorials/spice/rc-step.cir) |

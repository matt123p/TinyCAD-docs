---
layout: default
title: 3. Choosing and configuring signal generators
---
# 3. 信号発生器の選択と設定
{: #choosing-and-configuring-signal-generators}

[前へ](/v4/SPICE-Tutorial-02/) · [目次](/v4/Simulation-Tutorials/) · [次へ](/v4/SPICE-Tutorial-04/)

この章の例は TinyCAD に同梱されています。**Open Example → SPICE tutorial** を選択し、名前の付いた例を選んでから、**Open Drawing** を選択してください。ダウンロードは不要です。

刺激信号は、回路を駆動する信号を表します。
Circuit シート上で信号源の本体を選択すると、設定画面が開きます。**Signal type** を変更すると波形が変わり、それに関連するパラメーターが表示されます。プレビューには設定された波形が表示されます。シミュレーションでは、その信号源に回路を接続したときの動作が計算されます。

以下の各図面は、5 ms の過渡解析をすぐに実行できます。各電圧源は 1 kΩ を駆動します。複雑な回路に波形を適用する前に、設定を1つずつ学ぶために使用してください。

| 図面 | 保存された刺激信号 | 予想される動作 |
| --- | --- | --- |
| **source-dc** (DC) | 5 V | 5 V の一定電圧と 5 mA の負荷電流 |
| **source-sine** (Sine) | オフセット 1 V、ピーク振幅 2 V、1 kHz | −1～+3 V、周期 1 ms |
| **source-pulse** (Pulse) | 0～5 V、立ち上がり／立ち下がり 10 µs、High の平坦部 300 µs、周期 1 ms | 有限のエッジを持つ繰り返しパルス |
| **source-triangle** (Triangle) | −1～+1 V、周期 1 ms | 直線的な上昇ランプと下降ランプ |
| **source-pwl** (Piecewise linear) | 1 ms まで 0 V、2 ms までに 3 V へ上昇、3 ms まで保持、4 ms までに下降 | 設定された起動・停止シーケンス |
| **source-exponential** (Exponential) | 0～5 V、立ち上がり開始 1 ms、立ち下がり開始 3 ms | 時定数 300 µs と 500 µs の指数遷移 |
| **source-fm** (FM) | 振幅 1 V、搬送波 5 kHz、変調 500 Hz、変調指数 2 | 振幅一定で瞬時周波数が変化 |
| **source-current** (Current pulse) | 1 kΩ の帰路負荷に流す 0～1 mA | 付属の信号源の向きでは約 0～−1 V |


これは付属ファイルを用いたソルバーのプロットです。電流源の結果が負になるのは、信号源が OUT からグラウンドへ電流を流し、抵抗がその帰路を提供するためです。正の負荷電圧が必要な場合は、信号源の向きを逆にしてください。理想電流源は電流を設定し、端子電圧は回路網によって決まります。自動的なコンプライアンス電圧制限はありません。

## 動画：信号源の設定と波形プレビュー
{: #video-source-settings-and-waveform-preview}

正弦波のオフセット、ピーク振幅、周波数を変更し、過渡解析を再実行します。

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/source-settings.mp4" poster="/v4/videos/simulation-tutorials/spice/source-settings.jpg" caption="信号源の設定と波形プレビュー。" %}

[動画を視聴またはダウンロード](/v4/videos/simulation-tutorials/spice/source-settings.mp4)。

### 回路と基準結果
{: #circuit-and-reference-results}

![波形の測定例](/v4/Images/simulation-tutorials/spice/source-waveforms.png)

## 振幅、オフセット、タイミング
{: #amplitude-offset-and-timing}

正弦波の場合、`v(t) = offset + amplitude × sin(2πft + phase)`（遅延と減衰を設定した場合を除く）です。振幅は**ピーク値**であり、ピーク間値や RMS 値ではありません。オフセット 0 V のピーク 2 V の正弦波は、ピーク間値が 4 V、RMS 値が 1.414 V です。オフセットが 1 V の場合、全体の RMS 値は `sqrt(1² + 2²/2) = 1.732 V` になります。

パルス幅は High の平坦部を表します。有限のエッジがあると、しきい値で測定される幅に影響します。付属のパルスでは、2.5 V を超える時間は約 310 µs で、デューティ比は約 31% です。アナログ回路を調べる場合は、立ち上がり／立ち下がり時間を 0 にしないでください。これらは無限の帯域幅を持ち込み、実在の信号発生器を表していないにもかかわらず、数値計算を難しくします。

区分線形データは、1行につき1組の時間／値を昇順で指定します。電源のランプ、センサーのプロファイル、非周期的なテストシーケンスに便利です。指数信号源は指数波形を設定するもので、物理的な RC 回路を追加するものではありません。

## AC 励振は別の設定
{: #ac-excitation-is-a-separate-setting}

**AC amplitude** と **AC phase** は、AC 周波数応答解析の励振に使用します。正弦波の周波数フィールドでは、AC スイープの周波数範囲は設定されません。同様に、AC amplitude を 1 V にしても、過渡解析で 1 V の正弦波が生成されるわけではありません。同じ入力信号源をバイアス、AC、過渡の各解析に使用する場合は、これらの違いに注意してください。

理想独立電圧源の出力インピーダンスは 0 で、理想独立電流源の出力インピーダンスは無限大です。TinyCAD の **Lab Equipment
→ Function generator** には、設定可能な出力抵抗（通常は
50 Ω）が含まれます。整合した 50 Ω 負荷には、発生器の開放電圧の半分が印加されます。

## 制御信号源と実用例
{: #controlled-sources-and-practical-uses}

SPICE 挿入メニューには、電圧制御電圧源と
電圧制御電流源もあります。前者は `Vout = gain × Vcontrol` を実装し、後者は `Iout = transconductance × Vcontrol` を実装します。制御端子と
出力端子は別々です。すぐに実行できる、利得 2 の電圧制御電圧源の例は **controlled-source** を開いてください。ピーク 1 V の入力を加えると、1 kΩ に対してピーク 2 V の出力が得られます。この理想信号源には、クリッピングや電源電力のモデルはありません。

制御信号源は、理想増幅器、
トランスデューサー、従属負荷を表すために使用できます。ただし、モデルに明示的に含まれていない限り、電源の制限や帯域幅は反映されません。

正弦波の振幅だけを変更し、次にオフセットだけを変更してみてください。再実行する前に、新しい最小値、最大値、RMS 値を予測します。次に周波数を2倍にし、最大タイムステップを半分にして、表示波形が十分に分解されていることを確認します。

参考資料：信号源の構文と波形の定義は、[ngspice マニュアル](https://ngspice.sourceforge.io/docs.html) に記載されています。

## 学習用回路をダウンロード
{: #download-the-lesson-circuits}

同じ例は、すでに **Open Example** から利用できます。別途コピーを入手する場合は、`.dzn` 図面をダウンロードし、TinyCAD で **File → Open** を使用してください。`.cir` の補助ファイルは、内容を確認したり、互換性のある外部シミュレーターで使用したりするための SPICE テキストであり、TinyCAD の図面ではありません。XSPICE 回路を新たに実行するには Desktop が必要です。

| 例 | 図面 | ネットリスト |
| --- | --- | --- |
| source-dc | [TinyCAD 図面](/v4/examples/simulation-tutorials/spice/source-dc.dzn) | [SPICE テキスト](/v4/examples/simulation-tutorials/spice/source-dc.cir) |
| source-current | [TinyCAD 図面](/v4/examples/simulation-tutorials/spice/source-current.dzn) | [SPICE テキスト](/v4/examples/simulation-tutorials/spice/source-current.cir) |
| source-sine | [TinyCAD 図面](/v4/examples/simulation-tutorials/spice/source-sine.dzn) | [SPICE テキスト](/v4/examples/simulation-tutorials/spice/source-sine.cir) |
| source-pulse | [TinyCAD 図面](/v4/examples/simulation-tutorials/spice/source-pulse.dzn) | [SPICE テキスト](/v4/examples/simulation-tutorials/spice/source-pulse.cir) |
| source-triangle | [TinyCAD 図面](/v4/examples/simulation-tutorials/spice/source-triangle.dzn) | [SPICE テキスト](/v4/examples/simulation-tutorials/spice/source-triangle.cir) |
| source-pwl | [TinyCAD 図面](/v4/examples/simulation-tutorials/spice/source-pwl.dzn) | [SPICE テキスト](/v4/examples/simulation-tutorials/spice/source-pwl.cir) |
| source-exponential | [TinyCAD 図面](/v4/examples/simulation-tutorials/spice/source-exponential.dzn) | [SPICE テキスト](/v4/examples/simulation-tutorials/spice/source-exponential.cir) |
| source-fm | [TinyCAD 図面](/v4/examples/simulation-tutorials/spice/source-fm.dzn) | [SPICE テキスト](/v4/examples/simulation-tutorials/spice/source-fm.cir) |
| controlled-source | [TinyCAD 図面](/v4/examples/simulation-tutorials/spice/controlled-source.dzn) | [SPICE テキスト](/v4/examples/simulation-tutorials/spice/controlled-source.cir) |

---
layout: default
title: 9. Amplifier waveform, clipping and power usage
---
# 9. アンプの波形、クリッピング、電力消費
{: #amplifier-waveform-clipping-and-power-usage}

[前へ](/v4/SPICE-Tutorial-08/) · [目次](/v4/Simulation-Tutorials/) · [次へ](/v4/SPICE-Tutorial-10/)

この章の例は TinyCAD に同梱されています。**Open Example → SPICE tutorial** を選び、名前の示された例を選択してから、**Open Drawing** を選んでください。ダウンロードは不要です。

**amp-small-signal** を開きます。VIN はピーク値 10 mV、周波数 1 kHz の正弦波を供給します。過渡解析の時間は 12 ms、最大刻み幅は 2 µs です。IN と OUT を比較し、最後の4周期、つまり 8 ms から 12 ms までを測定します。

![測定した小信号アンプの波形](/v4/Images/simulation-tutorials/spice/amp-small-signal-results.png)

AC解析の結果から、OUT のピーク値は約 8.92 mV で、入力に対して反転すると予測されます。過渡解析では、測定区間において約 −8.87～+8.99 mVとなり、**実効値は 6.304 mV** です。正負のピーク値にわずかな差があるのは、非線形モデルと過渡解析の残留効果によるものです。

## 負荷電力と電源消費電力を計算する
{: #calculate-load-power-and-supply-consumption}

純抵抗 RL の瞬時電力は `pL(t) = vOUT(t)² / 8` です。したがって、平均負荷電力は `VOUT,RMS² / 8` となり、選択した区間における直流成分も含まれます。この小さな入力では、約 **4.97 µW** です。

電源から供給される電力は `−12 × mean(i(VCC))` で、約 **264.61 mW** です。音声信号が微小でも、バイアスされた回路では電力の大部分が消費されます。この入力における負荷電力と電源電力の比は、わずか約 **0.00188%** です。これは、選択した境界と測定区間に対する電気効率であり、音響効率でも回路全般の定格値でもありません。

TinyCAD で VCC と RL のコンポーネント電力測定を追加し、From/To を 8 ms と 12 ms に設定して **Mean** を選びます。電源が供給する電力は吸収電力が負になるため、その符号を反転した値を入力電力として扱います。電力の **Integral** はエネルギーをジュール単位で返します。モデルで利用できない電流または電力の測定値を、推測したゼロで代用してはいけません。

## 線形予測が成り立たなくなるまで入力を増やす
{: #increase-input-until-the-linear-prediction-fails}

**amp-clipping** を開きます。VIN の振幅だけを、ピーク値 500 mV に変更します。線形に外挿すると、OUT は正負両方向に約 446 mV のピーク値になると予測されます。しかし、計算された波形はそうなりません。

![計算された非対称な大信号出力](/v4/Images/simulation-tutorials/spice/amp-clipping-results.png)

同じ 8～12 ms の区間で、出力は約 **−0.162～+0.389 V** の範囲となり、**実効値は 0.2126 V** です。電源消費電力は約 **315.23 mW**、抵抗負荷の合計電力は **5.65 mW** で、この区間の電気効率は約 **1.79%** です。この有限の測定区間における出力の平均値は約 31 mV です。交流成分のみの負荷電力を求めるには、二乗する前に平均値を差し引きます。全体の実効値ではなく、リップルの実効値を使ってください。

エミッタフォロワは電流を能動的に供給できますが、プルダウン経路はバイアス回路によって制限されます。非常に低い負荷抵抗によって、この非対称性が顕在化します。平坦に見える部分をすべて単に「電源レールに達した」と呼んではいけません。EMITTER、COLLECTOR、およびデバイス電流を調べ、原因を特定してください。

## 測定の妥当性を確保する
{: #make-the-measurement-defensible}

定常動作を調べる場合は、起動時を除外し、完全な周期を使って時間区間を明示します。より長い時間で再実行し、区間の平均値と電力が安定するか確認してください。最大刻み幅を小さくし、極値と実効値を比較します。ソルバーのサンプルは一般に等間隔ではないため、時間で重み付けした計算を使ってください。すべてのサンプル値の算術平均では、ソルバーがより多くのサンプルを取る波形の端部に結果が偏ることがあります。

歪んだ波形では、ピーク値から実効値を `peak/√2` を使って変換できません。この式は正弦波に適用されます。同様に、トランジスタの電力から温度が自動的に予測できるわけではありません。熱抵抗、周囲条件、温度依存モデルなどの追加情報が必要です。

RL を 80 Ω に増やして、波形の対称性、電圧利得、供給電力を比較してみてください。負荷抵抗も変化しているため、電圧振幅が大きくなっても、電力が増えるとは限りません。

## レッスン回路をダウンロードする
{: #download-the-lesson-circuits}

同じ例は **Open Example** からすでに利用できます。独立したコピーを入手するには、`.dzn` の回路図をダウンロードし、TinyCAD で **File → Open** を使います。付属の `.cir` は内容確認や互換性のある外部シミュレーターで使うための SPICE テキストであり、TinyCAD の回路図ではありません。XSPICE 回路を新たに実行するには Desktop が必要です。

| 例 | 回路図 | ネットリスト |
| --- | --- | --- |
| amp-small-signal | [TinyCAD 回路図](/v4/examples/simulation-tutorials/spice/amp-small-signal.dzn) | [SPICE テキスト](/v4/examples/simulation-tutorials/spice/amp-small-signal.cir) |
| amp-clipping | [TinyCAD 回路図](/v4/examples/simulation-tutorials/spice/amp-clipping.dzn) | [SPICE テキスト](/v4/examples/simulation-tutorials/spice/amp-clipping.cir) |

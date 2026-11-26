---
layout: default
title: "5. AC analysis: gain, phase and an RC filter"
---
# 5. AC解析：ゲイン、位相、RCフィルター
{: #ac-analysis-gain-phase-and-an-rc-filter}

[前へ](/v4/SPICE-Tutorial-04/) · [目次](/v4/Simulation-Tutorials/) · [次へ](/v4/SPICE-Tutorial-06/)

この章の例はTinyCADに同梱されています。**Open Example → SPICE tutorial**を選び、名前の付いた例を選択してから、**Open Drawing**を選びます。ダウンロードは不要です。

**rc-ac**を開きます。充電のレッスンと同じ1 kΩ/1 µFのネットワークを使いますが、別の問いを扱います。小さな正弦波信号のうち、各周波数でOUTに届くのはどれだけでしょうか？

信号源のAC振幅は1 Vです。保存済みのACスイープは1 Hzから100 kHzまでで、1ディケードあたり100点です。実行し、導出された**OUT / IN**トレースを選択して、振幅、dB、位相を表示します。周波数軸には対数目盛を使用します。


## 動画：AC応答と遮断周波数
{: #video-ac-response-and-cutoff}

ACの設定を確認し、遮断周波数を読み取り、振幅、デシベル、位相を切り替える方法。

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/ac-response.mp4" poster="/v4/videos/simulation-tutorials/spice/ac-response.jpg" caption="AC応答と遮断周波数。" %}

[動画を視聴またはダウンロード](/v4/videos/simulation-tutorials/spice/ac-response.mp4)。

### 回路と基準結果
{: #circuit-and-reference-results}

![計算された振幅および位相応答](/v4/Images/simulation-tutorials/spice/rc-ac-results.png)

## 複素数の結果を解釈する
{: #interpret-the-complex-result}

AC解析では、DC動作点で回路を線形化し、複素振幅を求めます。これは、正弦波発生器の周波数を徐々に変化させる過渡解析ではありません。この回路では、

`H(jω) = VOUT / VIN = 1 / (1 + jωRC)`。

振幅は振幅比を示し、位相は1周期内での相対的なタイミングを示します。ここでは出力が入力より遅れます。遮断周波数は`fc = 1 / (2πRC) = 159.155 Hz`です。遮断周波数では、振幅は`1/√2 = 0.7071`、位相は−45°です。電圧ゲインをデシベルで表すと`20 log10(|H|)`となり、遮断周波数で−3.0103 dBになります。

| 周波数 | ゲインの概算 | 位相の概算 |
| --- | --- | --- |
| 10 Hz | 0.9980、−0.017 dB | −3.60° |
| 159.155 Hz | 0.7071、−3.01 dB | −45° |
| 1 kHz | 0.1572、−16.07 dB | −80.96° |

保存済みの**Cutoff**測定では、INに対するOUTと、基準ゲイン1を使用します。結果は約159.15 Hzになるはずです。サンプルの補間により、末尾の桁が式の値と異なる場合があります。

## よくある3つの間違いを避ける
{: #avoid-three-common-mistakes}

まず、実数成分だけをプロットしても振幅をプロットしたことにはなりません。複素数の結果には、振幅またはdBを使用します。次に、−3 dBのゲインは電圧比−3を意味するのではありません。デシベルは正の振幅を対数で表します。最後に、実数の反転ゲインのマイナス符号は位相に属し、負の振幅を示すものではありません。

ACを1にすると、この単純な例では出力電圧の数値がゲインと等しくなります。それでも、OUT/INをプロットするほうがより確実です。入力振幅が変わっても、ゲインを表し続けるからです。非線形アンプのAC解析結果は、AC振幅を大きな値に設定しても小信号解析の結果です。クリッピングや実際の出力電力を予測するものではありません。

## 部品の選択を比較する
{: #compare-component-choices}

**Tune / sweep**では、用意されているR1コントロールに、1 kΩ、2.2 kΩ、4.7 kΩのリストスイープがあります。スイープを実行し、曲線と遮断周波数の表を比較します。予想される遮断周波数は159.15、72.34、33.86 Hzです。一時的な調整では、**Apply**を使用するまで保存済みの抵抗値は変更されません。

RCフィルターは、ADCの前でスイッチングリップルを抑えたり、センサーの高周波ノイズを低減したりできます。一方で、必要な信号も遅くなります。この章の周波数応答と、前章でR1を増やしたときに生じた充電時間の延長を比較してください。これは同じ物理的なトレードオフを異なる観点から見たものです。

参考： [ngspice初心者向けチュートリアルのAC例](https://ngspice.sourceforge.io/ngspice-tutorial.html)
も、AC励振と過渡解析の信号波形を区別しています。

## レッスン回路をダウンロードする
{: #download-the-lesson-circuits}

同じ例はすでに**Open Example**で利用できます。別途コピーを入手するには、`.dzn`図面をダウンロードし、TinyCADで**File → Open**を使用します。付属の`.cir`は、内容を確認したり、互換性のある外部シミュレーターで使用したりするためのSPICEテキストであり、TinyCADの図面ではありません。XSPICE回路を新規実行するにはDesktopが必要です。

| 例 | 図面 | ネットリスト |
| --- | --- | --- |
| rc-ac | [TinyCAD図面](/v4/examples/simulation-tutorials/spice/rc-ac.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/rc-ac.cir) |

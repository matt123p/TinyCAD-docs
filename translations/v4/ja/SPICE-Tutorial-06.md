---
layout: default
title: 6. Diodes, rectification and ripple
---
# 6. ダイオード、整流、リップル
{: #diodes-rectification-and-ripple}

[前へ](/v4/SPICE-Tutorial-05/) · [目次](/v4/Simulation-Tutorials/) · [次へ](/v4/SPICE-Tutorial-07/)

この章の例はTinyCADに同梱されています。**Open Example → SPICE tutorial**を選び、名前の示された例を選択してから、**Open Drawing**を選択してください。ダウンロードは不要です。

**rectifier**を開きます。ピーク値5 V、50 Hzの正弦波が、
ダイオード、100 µFの平滑コンデンサ、1 kΩの負荷を駆動します。保存済みの200 msの
過渡解析を実行し、INとOUTをプロットします。


## 1周期にわたる電流の流れを追う
{: #follow-the-current-through-a-cycle}

入力電圧がコンデンサ電圧を十分に上回ると、ダイオードが
導通し、コンデンサの電荷を補充します。入力がピークを過ぎると、
ダイオードはオフになります。その後、コンデンサが負荷に電力を供給し、次の充電期間まで電圧が低下します。
この電圧ではダイオードが逆方向の導通を阻止するため、入力の負の半周期によってコンデンサの電圧が負になることはありません。

ダイオードは、一定の0.7 V降下を持つ理想スイッチではありません。組み込みの`TC_D`
モデルには、非線形の電流・電圧特性と直列抵抗が含まれます。順方向電圧降下は、電流、温度、モデルパラメータによって変化します。このチュートリアルでは汎用モデルを使用しており、購入したダイオードの特性を保証するものではありません。

## 定常状態の区間を測定する
{: #measure-a-settled-window}

最初の数周期には起動時の挙動が含まれます。再現性のあるリップル測定には、
**From = 160 ms**、**To = 200 ms**を使用します。基準シミュレーションの結果は次のとおりです。

| OUTの測定値 | 概算結果 |
| --- | --- |
| 平均電圧 | 3.90 V |
| 最小値 | 3.56 V |
| 最大値 | 4.24 V |
| ピーク・ツー・ピークリップル | 0.684 V |
| 全RMS値 | 3.908 V |

平均値はDCレベルです。全RMS値には、そのレベルとリップルの両方が含まれます。
**リップルRMS**では、RMSを計算する前に平均値を差し引くため、別の量になります。全RMS値が大きくても、ACリップルが大きいとは限りません。

概算式`ΔV ≈ Iload / (f × C)`では、3.9 mA、
50 Hz、100 µFを使うと約0.78 Vになります。シミュレーション値の0.684 Vとの差は示唆に富んでいます。
この式は負荷電流がほぼ一定で、瞬時に再充電されると仮定しますが、実際には抵抗を流れる電流は変化し、ダイオードも有限の期間にわたって導通します。

## 動画：整流回路の定常リップルを測定する
{: #video-measuring-settled-rectifier-ripple}

測定区間を160～200 msに設定し、平均電圧とピーク・ツー・ピークリップルを比較します。

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/rectifier-ripple.mp4" poster="/v4/videos/simulation-tutorials/spice/rectifier-ripple.jpg" caption="整流回路の定常リップルを測定する。" %}

[動画を見る、またはダウンロードする](/v4/videos/simulation-tutorials/spice/rectifier-ripple.mp4)。

### 回路と基準結果
{: #circuit-and-reference-results}

![半波整流回路と平滑コンデンサ](/v4/Images/simulation-tutorials/spice/rectifier-circuit.png)

![起動時および定常時のリップルの計算結果](/v4/Images/simulation-tutorials/spice/rectifier-results.png)

## トレードオフがわかる実験
{: #experiments-that-reveal-the-trade-offs}

C1を200 µFに倍増します。リップルは減少するはずですが、充電はより短く、
集中した電流パルスで行われます。負荷抵抗を半分の500 Ωにすると、負荷電流が増え、
平均電圧が低下し、リップルが大きくなります。ダイオード電流を調べるには、対応する部品電流測定を要求するか、ダイオードの経路に直列の
電流プローブを挿入します。最大タイムステップを小さくして、
短時間の導通ピークが正しく解像されることを確認します。

ここでの電源は理想的です。実際の変圧器、発電機、電源装置にはインピーダンスがあり、充電電流や電圧降下が変化します。
直列抵抗を追加して、この影響を調べてください。部品の電力とピーク電流は有用なシミュレーション出力ですが、この単純なモデルでは、コンデンサの発熱、サージ定格、
ダイオードの接合温度は自動的に予測されません。

## AC解析が最初のテストに適さない理由
{: #why-ac-analysis-is-not-the-right-first-test}

主な動作は、導通がオン・オフする大きな非線形変化です。
1つのバイアスポイント周辺での小信号AC解析では、整流、起動、リップルを再現できません。
これらの問題には過渡解析を使用してください。一方、DCスイープはダイオードの静的な電流・電圧特性をプロットするのに役立ちます。
どのプロットが最も簡単に作成できるかではなく、物理的に何を調べたいかに応じて解析を選択してください。

## レッスン回路をダウンロードする
{: #download-the-lesson-circuits}

同じ例は**Open Example**ですでに利用できます。別途コピーが必要な場合は、`.dzn`の回路図をダウンロードし、TinyCADで**File → Open**を使用してください。`.cir`の付属ファイルは、内容確認または互換性のある外部シミュレータで使うためのSPICEテキストであり、TinyCADの回路図ではありません。XSPICE回路を新規実行するにはDesktopが必要です。

| 例 | 回路図 | ネットリスト |
| --- | --- | --- |
| rectifier | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/rectifier.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/rectifier.cir) |

---
layout: default
title: 1. XSPICE and digital simulation
---
# 1. XSPICEとデジタルシミュレーション
{: #xspice-and-digital-simulation}

[チュートリアルの使い方](/v4/Tutorial-Start-Here/) · [コース内容](/v4/Simulation-Tutorials/) · [次へ：ゲート](/v4/XSPICE-Tutorial-02/)

この章の例はTinyCADに同梱されています。**Open Example → XSPICE and digital tutorial**（例を開く → XSPICEとデジタルのチュートリアル）を選び、名前の付いた例を選択してから、**Open Drawing**（図面を開く）を選びます。ダウンロードは不要です。

XSPICEは、コードモデルとイベント駆動型シミュレーションシステムによってngspiceを拡張します。
アナログ回路は電圧と電流として解かれますが、イベント駆動型のデジタル
ネットワークでは、機能モデルを通じて論理状態の変化が伝播します。混合信号
シミュレーションでは、この両方を連携させます。そのため、トランジスタレベルの
実装よりも論理機能をはるかに簡単にシミュレーションできますが、電源電流、
トランジスタのストレス、物理的なタイミングについて同じ情報が得られるわけでは
ありません。

このコースでは**TinyCAD Desktop**を使用してください。同梱のネイティブエンジンには、
必要なコードモデルが含まれています。TinyCADのブラウザー/WASMエンジンにはXSPICEが
含まれていません。
用意されたモデルは図面に埋め込まれていますが、実行可能なコードモデル
ライブラリは引き続きネイティブエンジンのインストール環境から提供されます。

[TinyCADにおけるSPICEの実装](/v4/SPICE-Tutorial-11/)では、
エンジン、シンボル定義、Simulationシートの関係について説明しています。

## 初回実行：イベント駆動型バッファ
{: #first-run-an-event-driven-buffer}

**logic-buffer**を開きます。保存済みの8 µs過渡解析を実行し、AとYを
プロットします。Aは周期1 µsの0～5 V波形です。Yはわずかな伝搬遅延の後に追従し、
出力エッジには有限の立ち上がり・立ち下がり時間があります。

![XSPICEバッファのテスト回路](/v4/images/simulation-tutorials/xspice/logic-buffer-circuit.png)
![計算されたバッファの入力と出力](/v4/images/simulation-tutorials/xspice/logic-buffer-results.png)

X1は、次の3つの明示的な内部段を持つ埋め込みサブサーキットです。

```text
Analogue A → adc_bridge → digital d_buffer → dac_bridge → analogue Y
```

図面には意図的にアナログ端子が配置されています。これにより、TinyCADの通常のグラフ
システムで入力と出力を電圧としてプロットできます。X1内部のバッファは、
デジタルゲートを装った電圧しきい値式ではなく、実際のXSPICEイベント駆動型モデルです。
X1のSPICEプロパティを開くと、各段を確認できます。

## ブリッジの意味
{: #what-the-bridges-mean}

ADCブリッジは、1 V以下の入力電圧をロー、3 V以上をハイとして解釈します。
この間の範囲は未定義です。これはロジック領域のインターフェースであり、クロック、
分解能、量子化コードを備えたサンプリング式のマルチビットADCではありません。

DACブリッジは、ローを0 V、ハイを5 V、未定義を観測用の2.5 Vに対応付けます。
立ち上がり時間と立ち下がり時間は5 nsです。したがって、このコースでの2.5 Vの出力は、
不明なデジタル状態を表す場合があります。必ずしも有効なアナログ中点電圧とは限りません。
これらのしきい値と電圧はチュートリアル用の設定であり、特定のTTLまたはCMOSデバイスの
仕様ではありません。

ブリッジの理想出力ドライバーには、モデル化された電源ピンがありません。これを使って
実際のロジックICの消費電力を計算しないでください。消費電力を調べるには、電源端子を
明示的に備え、適切なデバイス動作を表すモデルを使用してください。

## モデリングの詳細度を使い分ける
{: #a-useful-division-of-modelling-detail}

真理値表、クロックシーケンス、機能上のタイミングを確認するには、イベント駆動型ゲートを
使用します。電気的な負荷やデバイスの動作を調べるには、必要な効果に対応したモデルで
トランジスタモデルまたはメーカー提供モデルを使用します。アナログ領域とデジタル領域を
またぐ場合は、明示的なインターフェースを使用してください。見た目が似たシンボルでも、
どの種類のモデルが含まれているかは判断できません。

最初の実験として、入力周期を1 µsから2 µsに変更し、再実行してみましょう。
繰り返し周波数は半分になりますが、モデルに指定された伝搬遅延はほぼ変わらないはずです。
周期と伝搬遅延は互いに独立した特性です。

参考資料：[XSPICEの概要](https://ngspice.sourceforge.io/xspice.html)、
[公式XSPICE例およびHOWTO](https://ngspice.sourceforge.io/xspicehowto.html)。

## レッスン回路をダウンロードする
{: #download-the-lesson-circuits}

同じ例はすでに**Open Example**（例を開く）から利用できます。独立したコピーが必要な場合は、`.dzn`図面をダウンロードし、TinyCADで**File → Open**（ファイル → 開く）を使用します。`.cir`の補助ファイルは、内容を確認するため、または互換性のある外部シミュレーターで使用するためのSPICEテキストであり、TinyCADの図面ではありません。XSPICE回路を新たに実行するにはDesktopが必要です。

| 例 | 図面 | ネットリスト |
| --- | --- | --- |
| logic-buffer | [TinyCAD図面](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |

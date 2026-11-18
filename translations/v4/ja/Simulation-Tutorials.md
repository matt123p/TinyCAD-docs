---
layout: default
title: Simulation tutorials for TinyCAD
---
# シミュレーションチュートリアル
{: #simulation-tutorials}

まず[チュートリアルの使い方と同梱例の開き方](/v4/Tutorial-Start-Here/)から始め、
続いて[SPICE：概要と最初のシミュレーション](/v4/SPICE-Tutorial-01/)に進んでください。
イベント駆動型ロジックについては、別冊の[XSPICEとデジタル回路コース](/v4/XSPICE-Tutorial-01/)から始めてください。

共通の導入章、SPICEの章が11章、XSPICEの章が6章あります。
コース全編、実行可能な回路図、画像、録画はこのマニュアルに含まれています。すべてのチュートリアル例はTinyCADに同梱されているため、
チュートリアルをダウンロードする必要はありません。ブラウザーのタイトルバーで**Open Example**を選択するか、デスクトップ版で**File → Open Example**を選択し、
**SPICE tutorial**または**XSPICE and digital tutorial**を選択して、章で指定されている例を選び、
**Open Drawing**を選択してください。編集可能なコピーが開きます。
実験結果を保存するには**Save As**を使用し、最初からやり直すには埋め込み例を再度開いてください。回路図にはシンボル、モデル定義、
解析設定、および保持された参照用の測定結果が埋め込まれています。

## SPICE
{: #spice}

1. [概要と最初の実行](/v4/SPICE-Tutorial-01/)
2. [直流電圧、電流、電力](/v4/SPICE-Tutorial-02/)
3. [信号発生器と刺激信号](/v4/SPICE-Tutorial-03/)
4. [過渡解析とRC充電](/v4/SPICE-Tutorial-04/)
5. [周波数応答とフィルター](/v4/SPICE-Tutorial-05/)
6. [ダイオード、整流、リップル](/v4/SPICE-Tutorial-06/)
7. [AMP.DSNの再構築](/v4/SPICE-Tutorial-07/)
8. [アンプの利得と帯域幅](/v4/SPICE-Tutorial-08/)
9. [アンプの出力、クリッピング、電力](/v4/SPICE-Tutorial-09/)
10. [スイープ、ノイズ、設計検討](/v4/SPICE-Tutorial-10/)
11. [TinyCADでのSPICEの実装方法：エンジン、シンボル、ワークフロー](/v4/SPICE-Tutorial-11/)

## ビデオチュートリアル
{: #video-walkthroughs}

操作部を見ながら学ぶと特に役立つ手順を、5本の短い動画で説明します。
動画では、同梱のngspiceを使用したブラウザー版TinyCADを使用します。レッスンに埋め込まれたプレーヤーで再生するか、
Markdownビューアーで以下のリンクを使用してください。

| レッスン | 説明 |
| --- | --- |
| 1 | [分圧回路を開き、実行し、変更する](/v4/videos/simulation-tutorials/spice/first-run.mp4) |
| 3 | [信号源の設定と波形プレビュー](/v4/videos/simulation-tutorials/spice/source-settings.mp4) |
| 4 | [RC充電、時間刻み、時定数](/v4/videos/simulation-tutorials/spice/rc-transient.mp4) |
| 5 | [AC振幅、dB、位相、遮断周波数](/v4/videos/simulation-tutorials/spice/ac-response.mp4) |
| 6 | [整流回路の定常リップルを測定する](/v4/videos/simulation-tutorials/spice/rectifier-ripple.mp4) |

動画は、文書による手順と図を補足するものです。数式、前提条件、期待値については章の本文を参照してください。
デスクトップ版のメニューはブラウザー版と異なります。デスクトップ版ではFile → Open Exampleを使用してください。

## XSPICEとデジタルシミュレーション
{: #xspice-and-digital-simulation}

1. [モデル、ブリッジ、最初の実行](/v4/XSPICE-Tutorial-01/)
2. [ゲートと真理値表](/v4/XSPICE-Tutorial-02/)
3. [伝搬遅延とハザード](/v4/XSPICE-Tutorial-03/)
4. [フリップフロップ、クロック、リセット](/v4/XSPICE-Tutorial-04/)
5. [カウンターと分周クロック](/v4/XSPICE-Tutorial-05/)
6. [ミックスドシグナルフィルタリングと不定状態](/v4/XSPICE-Tutorial-06/)

XSPICEの例を実行するには、TinyCAD Desktopのネイティブエンジンが必要です。通常のSPICEの例ではアナログモデルを使用しますが、このバンドルの数値検証は
同梱のネイティブngspice 47で実施しました。ネイティブで正常に実行できたことは、すべてのブラウザーとバージョンの組み合わせがテスト済みであることを
意味するものではありません。

回路図は、TinyCADで開き直した回路図から生成されています。結果の図は、手描きの期待波形ではなく、実際のソルバーデータをプロットしたものです。キャプションでは
アプリケーションのスクリーンショットを区別して示しています。モデル、温度、時間刻み、またはエンジンの
バージョンが変わると、印刷された値との間に小さな数値差が生じるのは正常です。


## マニュアルのリファレンス
{: #manual-reference}

現在の操作、モデル、解析設定、グラフ、トラブルシューティングについては、[シミュレーション](/v4/Simulation/)と[同梱例](/v4/Bundled-Examples/)を参照してください。デスクトップ版では**File → Open Example**および**View → View Explanation**からアクセスできます。

## アナログ回路図のダウンロード
{: #analogue-drawing-downloads}

同梱例のブラウザーを使用するか、ここから回路図をダウンロードしてTinyCADで開いてください。ネットリストは別途テキストとして用意されています。

| 例 | 回路図 | ネットリスト |
| --- | --- | --- |
| amp-ac | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/amp-ac.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/amp-ac.cir) |
| amp-bias | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/amp-bias.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/amp-bias.cir) |
| amp-clipping | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/amp-clipping.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/amp-clipping.cir) |
| amp-small-signal | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/amp-small-signal.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/amp-small-signal.cir) |
| controlled-source | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/controlled-source.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/controlled-source.cir) |
| dc-sweep | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/dc-sweep.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/dc-sweep.cir) |
| divider | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/divider.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/divider.cir) |
| rc-ac | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/rc-ac.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/rc-ac.cir) |
| rc-noise | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/rc-noise.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/rc-noise.cir) |
| rc-pz | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/rc-pz.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/rc-pz.cir) |
| rc-step | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/rc-step.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/rc-step.cir) |
| rc-tf | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/rc-tf.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/rc-tf.cir) |
| rectifier | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/rectifier.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/rectifier.cir) |
| source-current | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/source-current.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/source-current.cir) |
| source-dc | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/source-dc.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/source-dc.cir) |
| source-exponential | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/source-exponential.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/source-exponential.cir) |
| source-fm | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/source-fm.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/source-fm.cir) |
| source-pulse | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/source-pulse.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/source-pulse.cir) |
| source-pwl | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/source-pwl.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/source-pwl.cir) |
| source-sine | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/source-sine.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/source-sine.cir) |
| source-triangle | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/source-triangle.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/source-triangle.cir) |

## XSPICE回路図のダウンロード
{: #xspice-drawing-downloads}

同梱例のブラウザーを使用するか、ここから回路図をダウンロードしてTinyCADで開いてください。ネットリストは別途テキストとして用意されています。

| 例 | 回路図 | ネットリスト |
| --- | --- | --- |
| logic-buffer | [TinyCAD回路図](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |
| logic-counter | [TinyCAD回路図](/v4/examples/simulation-tutorials/xspice/logic-counter.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/xspice/logic-counter.cir) |
| logic-dff | [TinyCAD回路図](/v4/examples/simulation-tutorials/xspice/logic-dff.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/xspice/logic-dff.cir) |
| logic-filter | [TinyCAD回路図](/v4/examples/simulation-tutorials/xspice/logic-filter.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/xspice/logic-filter.cir) |
| logic-hazard | [TinyCAD回路図](/v4/examples/simulation-tutorials/xspice/logic-hazard.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/xspice/logic-hazard.cir) |
| logic-nand | [TinyCAD回路図](/v4/examples/simulation-tutorials/xspice/logic-nand.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/xspice/logic-nand.cir) |
| logic-unknown | [TinyCAD回路図](/v4/examples/simulation-tutorials/xspice/logic-unknown.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/xspice/logic-unknown.cir) |

---
layout: default
title: "1. SPICE: overview and your first simulation"
---
# 1. SPICE：概要と最初のシミュレーション
{: #spice-overview-and-your-first-simulation}

[チュートリアルの使い方](/v4/Tutorial-Start-Here/) · [コースの内容](/v4/Simulation-Tutorials/) · [次へ：DC測定](/v4/SPICE-Tutorial-02/)

この章の例はTinyCADに同梱されています。**Open Example → SPICE tutorial**を選び、名前の付いた例を選択してから、**Open Drawing**を選んでください。ダウンロードは不要です。

SPICEは、接続されたコンポーネントとその数学モデルで記述された回路の電気的動作を計算します。DCバイアス点を求めたり、電圧と電流の時間変化を追跡したり、小信号周波数応答を計算したりできます。コンポーネントの図から電気モデルを推測することはありません。抵抗器のシンボルには抵抗値とSPICEテンプレートが必要です。トランジスタにはさらに、その動作を記述するパラメーターが必要です。

このコースでは、手計算で確認できる回路から始めます。後の章ではTinyCADのオリジナル`AMP.DSN`を再構築し、その制約を調べます。目的は、明確な問いを立て、適切な解析を選び、答えが妥当かどうかを判断する方法を学ぶことです。

エンジン、シンボルライブラリ、コントロールのガイドについては、[TinyCADにおけるSPICEの実装方法](/v4/SPICE-Tutorial-11/)を参照してください。ngspiceとXSPICEの違いを説明し、独自のシミュレーションを作成する手順を紹介しています。

## 最初の回路を開いて実行する
{: #open-and-run-the-first-circuit}

**divider**を開きます。5 V電源が、直列に接続された2つの1 kΩ抵抗器を駆動します。`OUT`ラベルはそれらの接続点を示し、`IN`は電源を示します。


1. **Open Example → SPICE tutorial**を使い、**divider**を選択してから、**Open Drawing**を選びます。
2. Simulationシートを選択します。保存された解析は**Operating Point**です。
3. **Run**を選びます。グラフが非表示の場合は、**Simulation → Show charts**を使います。
4. `in`、`out`、`v1#branch`を確認します。動作点には各信号につき1つの値しかないため、時間プロットより数値表示のほうが便利です。
5. CircuitシートでR2を選択し、**Value**を`1k`から`2k`に変更して、もう一度実行します。続行する前に`1k`に戻すか、**Open Example**から**divider**を再度開いてください。

同梱の参照取得結果を使えば、すぐに結果を確認できます。編集後はもう一度実行してください。保持されている結果は取得時点の回路を表しています。保存すると設定と保持結果が維持されます。**Save without results**を選ぶと、回路とシミュレーション設定を維持したまま、共有用のファイルを小さくできます。

動作点のグラフには1点だけが含まれます。正確な読み取りには数値データを使ってください。

## 動画：分圧回路を開き、実行し、変更する
{: #video-open-run-and-change-a-divider}

組み込み例を開き、DC数値を確認し、R2を変更して新しい取得を実行します。

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/first-run.mp4" poster="/v4/videos/simulation-tutorials/spice/first-run.jpg" caption="分圧回路を開き、実行し、変更する。" %}

[動画を視聴またはダウンロード](/v4/videos/simulation-tutorials/spice/first-run.mp4)。

### 回路と参照結果
{: #circuit-and-reference-results}

![保存された図面からレンダリングされた分圧回路](/v4/Images/simulation-tutorials/spice/divider-circuit.png)

## 答えを予測する
{: #predict-the-answer}

電流は`I = 5 / (1000 + 1000) = 2.5 mA`です。したがって、下側の抵抗器には`VOUT = I × 1000 = 2.5 V`が生じます。R2を2 kΩに変更すると、分圧の式から`VOUT = 5 × 2000 / (1000 + 2000) = 3.333 V`が得られます。

![計算された動作点の結果](/v4/Images/simulation-tutorials/spice/divider-results.png)

電源電流は−2.5 mAです。これは配線ミスではありません。SPICEでは、電流は電源の正端子に流れ込む向きを正と定義します。この規約では、エネルギーを供給する電源の電流は負になります。第2章では、この符号を使って電力を正しく計算します。

## 4つの基本事項
{: #four-foundations}

- **グラウンドはノード`0`です。** 電圧は差であり、ソルバーには基準点が必要です。
  `GND`というラベルの付いたワイヤも、SPICEグラウンドに実際に接続されていない限り代用にはなりません。TinyCADの**Insert Ground**ツールを使ってください。
- **接続性は電気的に決まります。** 接続点のドットは枝線を接続します。
  接続されていない交差ワイヤは、必ずしも接続されるとは限りません。同一のネットラベルは離れた点同士を接続しますが、近くにあるテキスト注記は接続しません。
- **単位と接頭辞は重要です。** SPICEの値には`1k`、`10u`、`100n`、`1Meg`を使います。SPICEでは、`m`はメガではなくミリを意味します。TinyCADのソースコントロールでは、`1kHz`や`5ms`のように単位を付けた入力も受け付けます。
- **モデルには適用範囲があります。** 理想抵抗器には、それらの影響が明示的にモデル化されていない限り、寄生インダクタンスも熱的故障もありません。

## 問いに答えられる解析を選ぶ
{: #choose-the-analysis-that-answers-the-question}

| 問い | 解析 |
| --- | --- |
| DC電圧と電流はどの値に落ち着くか？ | Operating Point |
| ステップ入力後、または波形の間に何が起こるか？ | Transient |
| 小信号利得は周波数によってどう変化するか？ | AC |
| 電源の変化に伴ってDC解はどう変化するか？ | DC sweep |
| 周波数帯域内で出力に現れるノイズはどれくらいか？ | Noise |
| DC小信号利得とポート抵抗はどれくらいか？ | Transfer function |
| 線形化されたシステムの極と零点はどこか？ | Pole-zero |

シミュレーションが収束しても、検証はまだ始まったばかりです。極性、単位、負荷、解析の種類が簡単な見積もりと合っているか確認してください。

参考資料：[ngspice公式初心者向けチュートリアル](https://ngspice.sourceforge.io/ngspice-tutorial.html)
では、ネットリストを使った補足的な入門を紹介しています。

## レッスン回路をダウンロードする
{: #download-the-lesson-circuits}

同じ例はすでに**Open Example**から利用できます。別途コピーが必要な場合は、`.dzn`の図面をダウンロードし、TinyCADで**File → Open**を使ってください。`.cir`の付属ファイルは、内容の確認や互換性のある外部シミュレーターで使うためのSPICEテキストであり、TinyCADの図面ではありません。XSPICE回路を新たに実行するにはDesktopが必要です。

| 例 | 図面 | ネットリスト |
| --- | --- | --- |
| divider | [TinyCAD図面](/v4/examples/simulation-tutorials/spice/divider.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/divider.cir) |

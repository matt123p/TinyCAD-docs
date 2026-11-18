---
layout: default
title: "10. Design investigations: sweeps, tolerances, noise and diagnosis"
---
# 10. 設計の検討：スイープ、許容差、ノイズ、診断
{: #design-investigations-sweeps-tolerances-noise-and-diagnosis}

[前へ](/v4/SPICE-Tutorial-09/) · [目次](/v4/Simulation-Tutorials/) · [次へ：TinyCADのSPICE](/v4/SPICE-Tutorial-11/)

この章の例はTinyCADに同梱されています。**Open Example → SPICE tutorial**を選び、名前の指定された例を選択してから、**Open Drawing**を選択してください。ダウンロードは不要です。

有用なシミュレーションレポートには、検討事項、回路／モデルのバージョン、
解析、刺激、測定区間、合否基準を記録します。これらの詳細がない説得力のある
プロットは、再現が困難です。

## パラメータスイープと許容差
{: #parameter-sweeps-and-tolerances}

**rc-ac**に戻ります。**Tune / sweep**で、用意されている
R1の値1 kΩ、2.2 kΩ、4.7 kΩを実行します。予想されるカットオフ周波数はそれぞれ159.15、72.34、
33.86 Hzです。これはパラメータスイープであり、意図的に選んだ部品値が応答に
どう影響するかを調べます。第2章の**DC sweep**とは異なり、こちらは1回の解析中に
独立電源のDC値を変化させます。

許容差の検討には、**Analysis lab → Tolerance studies**を使用します。R1とC1の
バインディングを定義し、分布とシードを選択して、カットオフ周波数の要件を追加します。
独立した±5%の有界値を用いると、RCの極端な組み合わせでは約
144.36～176.35 Hzになります。モンテカルロサンプルがどちらかの端点に達するとは限りません。
正規分布の標準偏差は、厳密な±限界ではありません。選択した規約と、変数間に相関が
あるかどうかを記録してください。

TinyCADでは、テストケースの条件と測定／要件の定義を保持できます。
一時的な調整を実際の回路図編集に反映したい場合にのみ、**Apply**を使用してください。
トポロジーやモデルのテキストを変更する場合は、回路の別リビジョンを保存してください。
取得ハッシュは識別子であり、復元可能な回路図のリビジョンではありません。

## ノイズ：異なる種類の出力
{: #noise-a-different-kind-of-output}

**rc-noise**を開きます。OUTにおける出力ノイズを、
独立入力電源V1を基準として、27°Cで1 Hzから100 kHzまで求めます。
理想電源はノイズを発生せず、R1がC1によってフィルタリングされた熱雑音を生じます。

![計算されたRC出力ノイズのスペクトル密度](/v4/images/simulation-tutorials/spice/rc-noise-results.png)

この帯域での出力ノイズの合計は約**64.2 nV RMS**です。理想的なRC回路で、ゼロから無限大の周波数まで積分すると、コンデンサの
平均二乗ノイズは`kT/C`となり、300.15 K、1 µFでは約64.4 nV RMSです。
シミュレーション帯域が有限であることが、このわずかな差の理由です。スペクトル密度の
単位はV/√Hzです。その積分値は、密度の二乗と周波数帯域から求め、最後に平方根を
取ります。表示された密度サンプルを算術的に合計したものではありません。入力換算の合計値は
別の結果です。

## 伝達関数と極
{: #transfer-functions-and-poles}

**rc-tf**を開きます。DC小信号伝達関数の結果は
1 V/V、出力抵抗は1 kΩ、入力抵抗はDCでコンデンサが開放となるため実質的に無限大です。
`1e20`のような非常に大きな入力抵抗の表示値は、数値上の開回路結果を表すものであり、
実測された100エクサオームの抵抗器ではありません。

**rc-pz**を開きます。極は約 **−1000 rad/s**で、`s = −1/(RC)`と一致します。その絶対値を`2π`で割ると、159.15 Hzが得られます。複素s平面の左半分にある極は、この線形システムで減衰することを表します。この一次ローパス伝達関数に有限の零点がないのは想定どおりです。

これらの解析は線形化モデルを対象とします。クリッピング、スイッチング、起動の過渡
試験の代わりにはなりません。また、任意の出力／入力ゲインはフィードバックループゲインとは
異なります。安定性を測定するには、意図的に設定したループ試験構成が必要です。

## 実用的な測定項目
{: #a-practical-measurement-menu}

| タスク | 適切な測定量 |
| --- | --- |
| センサー信号調整 | ゲイン、オフセット、ノイズ、カットオフ周波数、整定時間 |
| パルスインターフェース | 立ち上がり／立ち下がり時間、遅延、パルス幅、デューティ比 |
| アンプ | バイアス、ゲイン／位相、帯域幅、出力RMS、電力、クリッピング |
| 電力段 | リップル、ピーク電流、平均電力、エネルギー、効率 |
| 部品ばらつき | スイープの重ね合わせ、観測された最悪値、要件の結果 |

TinyCADでは、**Lab Equipment**から仮想オシロスコープ、マルチメーター、ファンクションジェネレーター、
電流制限付きベンチ電源も利用できます。これらのインピーダンスと
制限値は重要です。たとえば、ファンクションジェネレーターの出力抵抗は通常50 Ωです。
これらは、同じ電気的な課題に取り組む別のワークフローを提供します。

## 実行失敗やもっともらしくない結果の診断
{: #diagnose-a-failed-or-implausible-run}

まず、グラウンド、意図しない短絡、浮遊ノードを確認します。部品の
ピン割り当てとモデル名を確かめます。AC解析では独立電源のAC振幅を、
過渡解析では解析時間、最大ステップ幅、刺激の有限なエッジを確認してください。ソルバーのログを読み、実行が要求された終了時刻まで到達したことを確かめます。一部だけの
波形は、完了した結果ではありません。

数値設定を変更する前に、より単純な動作点解析または分離した段のテストを試してください。
追加した漏れ抵抗、電源抵抗、寄生容量は必ず記録してください。これらは収束を助けるだけでなく、回路自体も変化させます。専用の計算が必要な場合はCSVを
エクスポートし、単位と複素数の列を保持してください。

さらに読む：[ngspice制御言語チュートリアル](https://ngspice.sourceforge.io/ngspice-control-language-tutorial.html)
では、コマンドラインによる自動化について説明しています。TinyCADのドキュメントモデルは、任意の`.control`
スクリプトを実行しない設計です。対応している解析・検討用コントロールを使用するか、
ネットリストをエクスポートして別途ngspiceで処理してください。

## レッスン回路をダウンロード
{: #download-the-lesson-circuits}

同じ例はすでに**Open Example**から利用できます。独立したコピーを取得するには、`.dzn`の
回路図をダウンロードし、TinyCADで**File → Open**を使用してください。`.cir`の
付属ファイルは、内容確認または互換性のある外部シミュレーターで使用するためのSPICEテキストであり、TinyCADの回路図ではありません。XSPICE回路を新たに実行するにはDesktopが必要です。

| 例 | 回路図 | ネットリスト |
| --- | --- | --- |
| rc-ac | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/rc-ac.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/rc-ac.cir) |
| dc-sweep | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/dc-sweep.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/dc-sweep.cir) |
| rc-noise | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/rc-noise.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/rc-noise.cir) |
| rc-tf | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/rc-tf.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/rc-tf.cir) |
| rc-pz | [TinyCAD回路図](/v4/examples/simulation-tutorials/spice/rc-pz.dzn) | [SPICEテキスト](/v4/examples/simulation-tutorials/spice/rc-pz.cir) |

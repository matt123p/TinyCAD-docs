---
layout: default
title: "5. AC analysis: gain, phase and an RC filter"
---
# 5. AC 分析：增益、相位和 RC 滤波器
{: #ac-analysis-gain-phase-and-an-rc-filter}

[上一章](/v4/SPICE-Tutorial-04/) · [目录](/v4/Simulation-Tutorials/) · [下一章](/v4/SPICE-Tutorial-06/)

本章中的示例随 TinyCAD 一同提供。选择 **Open Example → SPICE tutorial**，选中指定的示例，然后选择 **Open Drawing**。无需下载。

打开 **rc-ac**。它使用与充电课程相同的 1 kΩ/1 µF 网络，但要探究一个不同的问题：不同频率下，小幅正弦信号有多少能到达 OUT？

信号源的 AC 幅值为 1 V。已保存的 AC 扫频范围为 1 Hz 至 100 kHz，每十倍频程 100 个点。运行分析，选择派生的 **OUT / IN** 轨迹，并查看幅值、dB 和相位。使用对数频率轴。


## 视频：AC 响应和截止频率
{: #video-ac-response-and-cutoff}

检查 AC 设置、读取截止频率，以及在幅值、分贝和相位之间切换。

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/ac-response.mp4" poster="/v4/videos/simulation-tutorials/spice/ac-response.jpg" caption="AC 响应和截止频率。" %}

[观看或下载视频](/v4/videos/simulation-tutorials/spice/ac-response.mp4)。

### 电路和参考结果
{: #circuit-and-reference-results}

![计算出的幅频和相频响应](/v4/images/simulation-tutorials/spice/rc-ac-results.png)

## 解读复数结果
{: #interpret-the-complex-result}

AC 分析会在电路的直流工作点对其进行线性化，并求解复数幅值。它并非一种瞬态仿真，不会让正弦信号发生器逐渐改变频率。对于此电路，

`H(jω) = VOUT / VIN = 1 / (1 + jωRC)`。

幅值表示振幅比；相位表示一个周期内的相对时序。此处输出滞后于输入。转折频率为
`fc = 1 / (2πRC) = 159.155 Hz`。在转折频率处，幅值为 `1/√2 = 0.7071`，
相位为 −45°。电压增益的分贝值为 `20 log10(|H|)`，因此转折频率处为
−3.0103 dB。

| 频率 | 近似增益 | 近似相位 |
| --- | --- | --- |
| 10 Hz | 0.9980，−0.017 dB | −3.60° |
| 159.155 Hz | 0.7071，−3.01 dB | −45° |
| 1 kHz | 0.1572，−16.07 dB | −80.96° |

已保存的 **Cutoff** 测量以 OUT 相对于 IN 为测量对象，参考增益为 1。它应返回约 159.15 Hz。采样插值可能导致最后几位与公式计算结果不同。

## 避免三个常见错误
{: #avoid-three-common-mistakes}

首先，只绘制实部并不等于绘制幅值。对于复数结果，请使用幅值或 dB。其次，−3 dB 的增益并不表示电压比为 −3：分贝是对正幅值进行对数编码。第三，实数反相增益中的负号表示相位，而不是负幅值。

在这个简单示例中，使用 AC 1 会使输出电压的数值等于增益。尽管如此，绘制 OUT/IN 更为可靠：即使输入幅值变化，它仍然表示增益。即便将 AC 幅值设为很大的数，非线性放大器的 AC 结果仍然是小信号结果。它无法预测削波或实际输出功率。

## 比较元件取值
{: #compare-component-choices}

在 **Tune / sweep** 中，提供的 R1 控件可按列表扫描 1 kΩ、
2.2 kΩ 和 4.7 kΩ。运行扫描并比较曲线和截止频率表。预期截止频率分别为 159.15、72.34 和 33.86 Hz。临时调节不会更改已保存的电阻值，除非使用 **Apply**。

RC 滤波器可以在 ADC 前抑制开关纹波，或降低传感器的高频噪声，但也会使所需信号变慢。将本章的频率响应与上一章中因增大 R1 而导致的充电时间延长进行比较：它们是同一物理权衡的两种体现。

参考：[ngspice 初学者教程中的 AC 示例](https://ngspice.sourceforge.io/ngspice-tutorial.html)
也区分了 AC 激励与瞬态信号源波形。

## 下载课程电路
{: #download-the-lesson-circuits}

相同的示例已可在 **Open Example** 中找到。如需单独副本，请下载 `.dzn` 图纸，并在 TinyCAD 中使用 **File → Open**。`.cir` 配套文件是供查看或在兼容的外部仿真器中使用的 SPICE 文本，并非 TinyCAD 图纸。要重新运行 XSPICE 电路，需要 Desktop。

| 示例 | 图纸 | 网表 |
| --- | --- | --- |
| rc-ac | [TinyCAD 图纸](/v4/examples/simulation-tutorials/spice/rc-ac.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/rc-ac.cir) |

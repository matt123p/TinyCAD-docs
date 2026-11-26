---
layout: default
title: "4. Transient analysis: charging a capacitor"
---
# 4. 瞬态分析：电容充电
{: #transient-analysis-charging-a-capacitor}

[上一章](/v4/SPICE-Tutorial-03/) · [目录](/v4/Simulation-Tutorials/) · [下一章](/v4/SPICE-Tutorial-05/)

本章中的示例随 TinyCAD 一同提供。选择 **打开示例 → SPICE 教程**，选中指定的示例，然后选择 **打开图纸**。无需下载。

打开 **rc-step**。信号源通过
1 kΩ 电阻向 1 µF 电容施加 0 至 1 V 的阶跃。已保存的瞬态仿真时长为 5 ms，最大步长为
5 µs。将 IN 和 OUT 绘制在同一张图上。


## 视频：RC 充电与时间常数
{: #video-rc-charging-and-time-constant}

细化最大时间步长，并测量 1 ms 时的 OUT 和 RC 时间常数。

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/rc-transient.mp4" poster="/v4/videos/simulation-tutorials/spice/rc-transient.jpg" caption="RC 充电与时间常数。" %}

[观看或下载视频](/v4/videos/simulation-tutorials/spice/rc-transient.mp4)。

### 电路和参考结果
{: #circuit-and-reference-results}

![RC 充电电路](/v4/Images/simulation-tutorials/spice/rc-step-circuit.png)

![计算得到的电容充电曲线](/v4/Images/simulation-tutorials/spice/rc-step-results.png)

## 为什么输出是曲线而非跳变
{: #why-the-output-curves-rather-than-jumps}

电容电流为 `i = C × dv/dt`。输入发生变化后，电容电压仍接近 0 V，因此几乎全部输入电压都加在 R1 两端。
初始电流约为 `1 V / 1 kΩ = 1 mA`。随着电容充电，电阻两端的电压和电流都会减小。输出逐渐接近 1 V，而不是瞬间达到该电压。

时间常数为 `τ = R × C = 1 ms`。对于理想阶跃和初始未充电的电容，`VOUT(t) = 1 − exp(−t/τ)` 伏。

| 阶跃后的时间 | 预期 OUT |
| --- | --- |
| 1 ms = 1τ | 0.632 V |
| 2 ms = 2τ | 0.865 V |
| 3 ms = 3τ | 0.950 V |
| 5 ms = 5τ | 0.993 V |

提供的信号源会在 1 µs 内上升，因此与瞬时阶跃方程的结果相比会有微小差异。使用图表光标，或在 1 ms 处进行 **数值**测量。初始值为 0 V、最终值为 1 V 的 **时间常数**测量结果应约为 1 ms。**上升时间**测量采用 10–90% 区间：其预期值为 `ln(9) × τ ≈ 2.197 ms`，而不是 1 ms。

## 仿真时长和最大步长回答的是不同问题
{: #duration-and-maximum-step-answer-different-questions}

仿真时长决定实验运行多久。最大步长限制求解器在时间点之间的间距。求解器可能会在边沿或非线性事件附近采用更小的步长。因此，采样点数量不一定等于仿真时长除以最大步长。

仿真时长过短，便看不到稳定过程。时间步长过粗，即使图形看起来合理，边沿和峰值也可能测量不准。将最大步长从 5 µs 降至 2.5 µs，并比较 1 ms 处的读数；稳定的结果应几乎不变。这是在检查测量结果是否收敛，而不只是检查求解器是否报告成功。

## 初始条件与能量
{: #initial-conditions-and-energy}

通常，SPICE 会先求解直流工作点，再开始瞬态分析。勾选 **初始条件**会请求使用另一种初始条件启动路径（`uic`）。应谨慎使用，并为电容/电感设置适当的初始条件；它并不是解决收敛问题的通用方法。此示例不需要该选项，因为输入的初始值为零。

电压为 1 V 时，电容储存 `E = ½CV² = 0.5 µJ`。充电过程中，R1 会耗散能量，而信号源既提供储存的能量，也提供耗散的能量。瞬时功率和累计能量是不同的测量量：对选定时间区间内的功率积分即可得到焦耳数。

试着将电阻改为 2.2 kΩ，预测时间常数为 2.2 ms，并将仿真时长延长至 11 ms。然后恢复 R1 的值，并将 C1 减半：时间常数也应减半。这些改动说明了如何设计实验，以区分元件本身的影响和绘图伪影。

## 下载本课的电路
{: #download-the-lesson-circuits}

相同的示例已可在 **打开示例**中找到。如需独立副本，请下载 `.dzn` 图纸，并在 TinyCAD 中使用 **文件 → 打开**。配套的 `.cir` 是供查看或在兼容的外部仿真器中使用的 SPICE 文本，并非 TinyCAD 图纸。运行新的 XSPICE 电路需要 Desktop。

| 示例 | 图纸 | 网表 |
| --- | --- | --- |
| rc-step | [TinyCAD 图纸](/v4/examples/simulation-tutorials/spice/rc-step.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/rc-step.cir) |

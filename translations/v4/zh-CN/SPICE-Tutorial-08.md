---
layout: default
title: 8. Measuring amplifier gain and bandwidth
---
# 8. 测量放大器增益和带宽
{: #measuring-amplifier-gain-and-bandwidth}

[上一章](/v4/SPICE-Tutorial-07/) · [目录](/v4/Simulation-Tutorials/) · [下一章](/v4/SPICE-Tutorial-09/)

本章中的示例已随 TinyCAD 一并提供。选择 **打开示例（Open Example）→ SPICE 教程（SPICE tutorial）**，选中指定的示例，然后选择 **打开图纸（Open Drawing）**。无需下载。

打开 **amp-ac**。这是重建后的放大器，VIN 上的 AC
幅度为 1，AC 扫描范围为 1 Hz 至 100 MHz，每十倍频程 60 个点。
较宽的上限范围使通用晶体管模型的滚降清晰可见；
这并不能证明原始硬件在射频下的行为也能得到准确模拟。

选择已保存的 OUT/IN 派生曲线 **电压增益（Voltage gain）**。查看幅值（dB）
和相位。请在记录中区分节点电压和无量纲增益。

![计算得到的放大器增益和相位](/v4/Images/simulation-tutorials/spice/amp-ac-results.png)

## 先读结果，再解释原因
{: #read-the-result-before-explaining-it}

当 RL = 8 Ω 且 R6 的电气滑动位置为 0.5 时，1 kHz 处的参考增益约为
**0.892 V/V**，即 **−0.995 dB**，相位大致反相。
采样得到的峰值幅度也约为 0.892。相对于该峰值的半功率交点约在
**24 Hz** 和 **2.9 MHz**；这些取整后的数值取决于扫描采样点和所选通用模型。

这些不是单位增益交点。−3 dB 带宽是相对于放大器的通带增益或峰值增益
测量的，不一定相对于 1 V/V。使用 TinyCAD 的带宽测量功能时，请选择 OUT 和 IN，并将参考
增益设为 `peak`，以分析这种带通形状的响应。带宽
测量要求两个交点都位于已采集的频率范围内。

## 总电压增益低于一的原因
{: #why-the-overall-voltage-gain-is-below-one}

VIN 在音量电位器之前测量。由于放大器输入阻抗有限，滑动端电压会进一步降低。
Q1 随后提供反相电压增益。Q2 通过 C2 驱动阻值很低的 8 Ω 负载，其有限输出
阻抗会造成额外衰减。总比值包含所有级的影响。

分别比较 BASE/IN、COLLECTOR/BASE 和 OUT/COLLECTOR 这些派生比值。
它们回答的是不同问题。某一级可以提供电压增益，而完整的输入至负载通路增益仍小于一。即使
电压增益小于一，射极跟随器仍可提供有用的电流增益。

## 找出低频和高频限制的原因
{: #find-the-causes-of-the-low--and-high-frequency-limits}

C1 和 C2 是串联耦合电容。它们的容抗在低频时增大，因此会衰减信号。C2 的等效电阻同时包括
负载和该级的输出阻抗；仅使用 `1/(2π × 8 Ω × C2)`
不足以完整描述带负载的电路。在高频下，模型中的晶体管电容和渡越时间会降低响应并改变相位。

请尝试以下受控更改，每次更改后都恢复原值：

1. 将 RL 从 8 Ω 改为 80 Ω。比较通带增益和低端截止频率。
2. 将 C2 加倍。如果 C2 起主导作用，检查低端截止频率是否按预期变化；C1 和负载效应也可能有影响。
3. 更改 R6 的电气滑动位置。分别记录从 IN 起算的增益和从 BASE 起算的增益，以免将音量衰减与晶体管级增益混淆。
4. 在交点附近增加每十倍频程的采样点数，并确认报告的截止频率已稳定，再给出更多有效数字。

AC 分析预测偏置点附近足够小的扰动所产生的响应。它不会将输出幅度限制在电源电压所允许的摆幅范围内。
下一章将使用有限幅度的瞬态输入，找出小信号预测何时不再能描述实际波形。

## 下载课程电路
{: #download-the-lesson-circuits}

同样的示例已可在 **打开示例（Open Example）** 中找到。如需单独副本，请下载一个 `.dzn` 图纸，并在 TinyCAD 中使用 **文件（File）→ 打开（Open）**。配套的 `.cir` 是供检查或用于兼容外部仿真器的 SPICE 文本文件，不是 TinyCAD 图纸。要重新运行 XSPICE 电路，需要使用 Desktop。

| 示例 | 图纸 | 网表 |
| --- | --- | --- |
| amp-ac | [TinyCAD 图纸](/v4/examples/simulation-tutorials/spice/amp-ac.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/amp-ac.cir) |

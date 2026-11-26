---
layout: default
title: "1. SPICE: overview and your first simulation"
---
# 1. SPICE：概述与首次仿真
{: #spice-overview-and-your-first-simulation}

[如何使用教程](/v4/Tutorial-Start-Here/) · [课程内容](/v4/Simulation-Tutorials/) · [下一章：直流测量](/v4/SPICE-Tutorial-02/)

本章中的示例与 TinyCAD 一同打包提供。选择 **Open Example → SPICE tutorial**，选中指定示例，然后选择 **Open Drawing**。无需下载。

SPICE 根据由相互连接的元件及其数学模型描述的电路，计算其电气行为。它可以求出直流偏置工作点、跟踪电压和电流随时间的变化，或计算小信号频率响应。它不会根据元件的图形符号推断电气模型。电阻符号需要电阻值和 SPICE 模板；晶体管还需要描述其行为的参数。

本课程从可以手工验证的电路开始。后续章节将重新构建 TinyCAD 原有的 `AMP.DSN`，并探讨其局限性。学习目的是掌握如何提出明确的问题、选择合适的分析方法，并判断结果是否合理。

有关仿真引擎、符号库和控件的指南，请参阅
[TinyCAD 如何实现 SPICE](/v4/SPICE-Tutorial-11/)。该指南解释 ngspice 与 XSPICE 的区别，并逐步介绍如何创建自己的仿真。

## 打开并运行第一个电路
{: #open-and-run-the-first-circuit}

打开 **divider**。其 5 V 电源驱动两个串联的 1 kΩ
电阻。`OUT` 标签为它们的连接点命名；`IN` 为电源命名。


1. 使用 **Open Example → SPICE tutorial**，选择 **divider**，然后选择 **Open Drawing**。
2. 选择其 Simulation 工作表。已保存的分析为 **Operating Point**。
3. 选择 **Run**。如果图表处于隐藏状态，请使用 **Simulation → Show charts**。
4. 检查 `in`、`out` 和 `v1#branch`。工作点分析的每个信号只有一个值，因此数值读数比时间图更有用。
5. 在 Circuit 工作表上选择 R2，将 **Value** 从 `1k` 更改为 `2k`，然后再次运行。继续之前，请恢复为 `1k`，或从 **Open Example** 再次打开 **divider**。

提供的参考采集结果可让你立即查看结果。编辑后请重新运行：保留的结果反映的是采集时的电路状态。保存会保留设置和现有结果；**Save without results** 会生成较小的共享副本，同时保留电路和仿真设置。

工作点图表只有一个点；如需精确读数，请使用数值数据。

## 视频：打开、运行并更改分压器
{: #video-open-run-and-change-a-divider}

打开嵌入式示例、查看直流数值、更改 R2 并运行新的采集。

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/first-run.mp4" poster="/v4/videos/simulation-tutorials/spice/first-run.jpg" caption="打开、运行并更改分压器。" %}

[观看或下载视频](/v4/videos/simulation-tutorials/spice/first-run.mp4)。

### 电路和参考结果
{: #circuit-and-reference-results}

![根据已保存的绘图渲染的分压器电路](/v4/Images/simulation-tutorials/spice/divider-circuit.png)

## 预测结果
{: #predict-the-answer}

电流为 `I = 5 / (1000 + 1000) = 2.5 mA`。因此，下方电阻两端的电压为 `VOUT = I × 1000 = 2.5 V`。将 R2 更改为 2 kΩ 后，分压器公式得出 `VOUT = 5 × 2000 / (1000 + 2000) = 3.333 V`。

![计算出的工作点结果](/v4/Images/simulation-tutorials/spice/divider-results.png)

电源电流为 −2.5 mA。这并非接线错误：SPICE 将流入电源正端的电流定义为正。按照这一约定，向外提供能量的电源电流为负。第 2 章将使用该符号约定正确计算功率。

## 四项基础
{: #four-foundations}

- **地是节点 `0`。** 电压是电位差；求解器需要一个参考点。标记为 `GND` 的导线不能替代地，除非它确实连接到 SPICE 地。请使用 TinyCAD 的 **Insert Ground** 工具。
- **连通性由电气连接决定。** 连接点上的圆点会连接各分支。没有连接的交叉导线不一定相连。相同的网络标签可以连接相距较远的点；附近的文本注释则不能。
- **单位和前缀很重要。** 在 SPICE 数值中使用 `1k`、`10u`、`100n` 和 `1Meg`。在 SPICE 中，`m` 表示毫，而不是兆。TinyCAD 的信号源控件也接受带单位的输入，例如 `1kHz` 和 `5ms`。
- **模型有适用范围。** 理想电阻不会包含寄生电感或热失效，除非明确对这些效应进行建模。

## 选择能回答问题的分析
{: #choose-the-analysis-that-answers-the-question}

| 问题 | 分析 |
| --- | --- |
| 直流电压和电流最终稳定在什么值？ | Operating Point |
| 阶跃后或波形变化过程中会发生什么？ | Transient |
| 小信号增益如何随频率变化？ | AC |
| 随着信号源变化，直流解如何变化？ | DC sweep |
| 某个频带内有多少噪声到达输出端？ | Noise |
| 直流小信号增益和端口电阻是多少？ | Transfer function |
| 线性化系统的极点和零点在哪里？ | Pole-zero |

仿真收敛只是验证的开始。请根据简单估算，检查极性、单位、负载和分析类型是否正确。

延伸阅读：[ngspice 官方入门教程](https://ngspice.sourceforge.io/ngspice-tutorial.html)
提供了基于网表的补充入门介绍。

## 下载课程电路
{: #download-the-lesson-circuits}

相同的示例已可在 **Open Example** 中找到。如需独立副本，请下载 `.dzn` 绘图文件，并在 TinyCAD 中使用 **File → Open**。配套的 `.cir` 是供检查或在兼容的外部仿真器中使用的 SPICE 文本文件，并非 TinyCAD 绘图文件。要重新运行 XSPICE 电路，需要使用 Desktop。

| 示例 | 绘图文件 | 网表 |
| --- | --- | --- |
| divider | [TinyCAD 绘图文件](/v4/examples/simulation-tutorials/spice/divider.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/divider.cir) |

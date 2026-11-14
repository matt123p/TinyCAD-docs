---
layout: default
title: 2. Measuring DC voltage, current and power
---
# 2. 测量直流电压、电流和功率
{: #measuring-dc-voltage-current-and-power}

[上一章](/v4/SPICE-Tutorial-01/) · [目录](/v4/Simulation-Tutorials/) · [下一章](/v4/SPICE-Tutorial-03/)

本章中的示例已随 TinyCAD 一起提供。选择 **打开示例（Open Example）→ SPICE 教程（SPICE tutorial）**，选中指定的示例，然后选择 **打开图纸（Open Drawing）**。无需下载。

打开 **divider**。保留标称值为 5 V 的电源和两个
1 kΩ 电阻。此处的目的是区分节点电压、器件两端的电压、流过器件的
电流以及器件吸收的功率。

## 电压测量
{: #voltage-measurements}

`out` 表示 OUT 相对于节点 0 的电压。R1 两端的电压为
`VIN − VOUT`，此处同样为 2.5 V。这只是偶然相等：将
R2 改为 2 kΩ 后，R1 两端的电压为 1.667 V，而 R2 两端为 3.333 V。

要测量节点电压，请使用 **仿真（Simulation）→ SPICE → 插入探针（Insert Probe）**。差分
探针测量其正端与负端之间的电压。将其正端接到 IN，负端接到 OUT，即可测量 R1
两端的电压。反接探针会使结果反号。当两个端子都未接地时，差分探针特别有用，
例如测量耦合电容或桥式电路的输出。

## 电流测量
{: #current-measurements}

使用串联电流探针时，需断开一段导线，并将探针串入电流路径。
探针被建模为零伏电压源：电流可以流过它，且不会产生理想情况下的电压降。
若将它并接在电源两端，则会使电源短路。探针电流的正方向为从正端流向负端。
也可以直接使用电源支路电流，例如 `v1#branch`。

对于此分压器，电流从 V1 流经 R1 和 R2，流向地。两个
电阻中的电流均为 2.5 mA；V1 的支路电流为 −2.5 mA，因为电流从其正端流出。

## 功率与能量平衡检查
{: #power-and-an-energy-balance-check}

采用被动符号约定：`P = V × I`，电流流入电压定义为正的端子。
正功率表示吸收功率；负功率表示供出功率。

| 器件 | 计算 | 标称结果 |
| --- | --- | --- |
| R1 | `(2.5 V)² / 1 kΩ` | +6.25 mW |
| R2 | `(2.5 V)² / 1 kΩ` | +6.25 mW |
| V1 | `5 V × (−2.5 mA)` | −12.5 mW |
| 总和 | 电源加负载 | 0 W |

这种平衡检查是很有用的调试工具。结果相差 1000 倍通常表示前缀使用错误。
符号错误通常表示探针方向接反。无法解释的额外负载可能意味着存在意外的
连接点或仪表连接。

在模型支持的情况下，TinyCAD 的 **测量（Measurements）** 控件可以选择器件电压、电流和
功率。若模型支持但缺少电流向量，系统会报告该值不可用；不能将其解释为零功耗。

## 扫描电源
{: #sweep-the-supply}

打开 **dc-sweep**。已保存的 **直流扫描（DC sweep）** 使用 V1，
起始值为 0 V，终止值为 10 V，增量为 0.5 V。运行仿真并绘制 OUT。

![计算得到的直流传输曲线](/v4/images/simulation-tutorials/spice/dc-sweep-results.png)

横轴表示扫描的电源值，而不是时间。当电源值分别为 0 V、5 V 和 10 V 时，
预期输出值为 0 V、2.5 V 和 5 V。斜率为 0.5 V/V。
在添加随时间变化的激励之前，此测试有助于检查偏置网络和传感器接口。

## 研究负载效应
{: #investigate-loading}

再添加一个 1 kΩ 电阻，将其从 OUT 接到地。R2 与新增负载并联，
等效电阻为 500 Ω。此时预期输出为
`5 × 500 / (1000 + 500) = 1.667 V`。分压器并非理想电压
源：输出电压会随其供电流而变化。

制定测量检查清单时，请记录节点名称、参考方向、单位、
电源设置和分析类型。这样可以使结果可复现，
也便于其他读者区分电路变化和绘图变化。

## 下载课程电路
{: #download-the-lesson-circuits}

相同的示例已在 **打开示例（Open Example）** 中提供。如需独立副本，请下载一个 `.dzn` 图纸，并在 TinyCAD 中使用 **文件（File）→ 打开（Open）**。`.cir` 配套文件是供检查或交由兼容的外部仿真器使用的 SPICE 文本，并非 TinyCAD 图纸。运行新的 XSPICE 电路需要 Desktop 版本。

| 示例 | 图纸 | 网表 |
| --- | --- | --- |
| divider | [TinyCAD 图纸](/v4/examples/simulation-tutorials/spice/divider.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/divider.cir) |

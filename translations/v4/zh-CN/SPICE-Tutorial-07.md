---
layout: default
title: 7. Rebuilding AMP.DSN and checking its bias
---
# 7. 重建 AMP.DSN 并检查其偏置
{: #rebuilding-ampdsn-and-checking-its-bias}

[上一页](/v4/SPICE-Tutorial-06/) · [目录](/v4/Simulation-Tutorials/) · [下一页](/v4/SPICE-Tutorial-08/)

本章中的示例随 TinyCAD 一同提供。选择 **打开示例 → SPICE 教程**，选中指定示例，然后选择 **打开图纸**。无需下载。

打开 **amp-bias**。此示例重建了
`D:\Projects\TinyCAD\examples\AMP.DSN` 的拓扑结构，该图标题为 **晶体管放大器**，
原作者署名为 Matt Pyne，年份为 1995。它使用 TinyCAD 的
SPICE 基础元件库中的元件以及可配置的仿真信号源。

![重建后的 AMP.DSN，包含仿真元件](/v4/Images/simulation-tutorials/spice/amp-bias-circuit.png)

## 保留了哪些内容，以及哪些内容经过了建模
{: #what-was-preserved-and-what-was-modelled}

| 原始元件 | 重建后的元件及作用 |
| --- | --- |
| R1，470 Ω，标注功率为 0.5 W | Q2 发射极电阻，阻值 470 Ω；该额定值不是仿真的热限制 |
| R2，1 kΩ | Q1 集电极电阻 |
| R3，100 kΩ；R4，10 kΩ | Q1 基极偏置分压器 |
| R5，220 Ω | Q1 发射极退化电阻 |
| R6，10 kΩ 对数电位器 | 10 kΩ 电位器，电气分配比例 `Wiper = 0.5` |
| C1，100 µF；C2，470 µF | 理想输入和输出耦合电容 |
| Q1，ZTX650；Q2，BC140 | 两者均使用内嵌的通用 `TC_NPN` 模型 |
| J1 唱机输入 | 可配置信号源 VIN，以节点 0 为参考 |
| T1，8 Ω 扬声器 | RL = 8 Ω，作为电阻性电气负载 |
| 12 V / 0 V 电源轨 | 独立的 12 V 电源 VCC 和 SPICE 节点 0 |

原始的对数机械调节特性并未规定每个旋钮位置对应的唯一电阻分配比例。
此处的 0.5 表示**电气上的** 5 kΩ/5 kΩ 分配，
并不表示原始旋钮处于中间位置时的实际情况。VIN 的源电阻为理想值。
扬声器模型不包含电感、谐振和声学效率；因此不能据此预测声压。

两个晶体管实例都内嵌了库模型：

```spice
.model TC_NPN NPN(Is=1e-14 Bf=200 Vaf=100 Cje=10p Cjc=5p Tf=500p)
```

这些是示例模型参数，并非 ZTX650 或 BC140 的制造商模型。特意采用这些参数，
并且可在元件的 SPICE 属性中查看。要准确模拟这些原始器件的性能，需要经验证的器件模型；
若要与硬件进行比较，还需要寄生参数和热学信息。

## 了解这两个级
{: #understand-the-two-stages}

Q1 是共射极级。集电极电流增加时，其集电极电压会下降，因此该级具有反相作用。R5 提供发射极退化：负反馈可降低增益敏感度并改善线性度。R2 将电流变化转换为集电极电压变化。

Q2 是射极跟随器。其集电极连接到 VCC，发射极驱动 R1，并通过 C2 驱动扬声器负载。它提供的是电流驱动能力，而不是额外的大电压增益。C1 和 C2 用于隔离各级以及外部连接之间的直流工作电平。

## 加入信号前先运行工作点分析
{: #run-operating-point-before-applying-a-signal}

27°C 时的参考值如下：

| 量 | 参考值 |
| --- | --- |
| BASE，Q1 基极 | 1.0235 V |
| Q1 发射极，位于 Q1 与 R5 之间 | 0.3582 V |
| COLLECTOR，Q1 集电极 / Q2 基极 | 10.2800 V |
| EMITTER，Q2 发射极 | 9.5476 V |
| OUT，C2 之后 | 0 V |
| VCC 提供的电流 | 22.044 mA |
| 电源功率 | 264.533 mW |

OUT 在直流下为零，因为 C2 阻断了发射极的直流电压，而 RL 将输出接地。因此，输出偏置为零并不意味着放大器未通电。Q1 的发射极电流约为 `0.3582 / 220 = 1.628 mA`；
Q2 的静态发射极电阻电流为 `9.5476 / 470 = 20.31 mA`。

相对于 12 V 电源轨，输出级的偏置较高；对于 8 Ω 负载，静态电流则较小。这已经表明信号摆幅的正负限幅并不对称。接下来的两章将验证这一判断，而不是想当然地认为，凡是称为放大器的电路就一定具有高电压增益或较大的音频功率。

## 下载教程电路
{: #download-the-lesson-circuits}

这些示例已可在**打开示例**中找到。如需单独获取副本，请下载 `.dzn` 图纸，然后在 TinyCAD 中使用 **文件 → 打开**。配套的 `.cir` 是供检查或供兼容外部仿真器使用的 SPICE 文本文件，并非 TinyCAD 图纸。运行新的 XSPICE 电路需要 Desktop 版本。

| 示例 | 图纸 | 网表 |
| --- | --- | --- |
| amp-bias | [TinyCAD 图纸](/v4/examples/simulation-tutorials/spice/amp-bias.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/amp-bias.cir) |

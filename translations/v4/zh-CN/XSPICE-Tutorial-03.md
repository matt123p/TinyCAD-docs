---
layout: default
title: 3. Propagation delay and logic hazards
---
# 3. 传播延迟与逻辑冒险
{: #propagation-delay-and-logic-hazards}

[上一章](/v4/XSPICE-Tutorial-02/) · [目录](/v4/Simulation-Tutorials/) · [下一章](/v4/XSPICE-Tutorial-04/)

本章示例随 TinyCAD 一同提供。选择 **打开示例（Open Example）→ XSPICE 和数字电路教程**，选中指定示例，然后选择 **打开图纸（Open Drawing）**。无需下载。

打开 **logic-hazard**。在 X1 内，A 的一路信号直接连接到与门。另一路信号经过反相器后，连接到与门的另一个输入端。布尔表达式为 `A AND NOT A`，在所有信号稳定后其值始终为零。尽管如此，瞬态过程中仍可能出现一个脉冲。

![计算得到的冒险脉冲](/v4/Images/simulation-tutorials/xspice/logic-hazard-results.png)

反相器的延迟为 100 ns，与门的延迟为 10 ns。在输入上升沿处，直通信号变为高电平，而反相信号在反相器响应之前仍保持高电平。在一段很短的时间内，与门的两个输入都为高电平，因此会出现一个正向输出脉冲。在这个刻意简化的模型中，脉冲宽度约为 100 ns。在相反的输入边沿处，两路信号会经过一段与门两个输入都为低电平的时间，因此不会产生同样的正向脉冲。

## 测量时序，而不是根据像素推断
{: #measure-rather-than-infer-timing-from-pixels}

运行已保存的 3 µs 瞬态仿真，最大步长设为 2 ns。放大查看 0.5 µs 附近的一个上升沿。使用 2.5 V 阈值测量输入交越、输出交越和输出脉冲宽度。TinyCAD 的 **延迟（Delay）** 测量值为所选窗口内输出首次上升交越时刻减去参考信号首次上升交越时刻。**脉冲宽度（Pulse width）** 测量要求所选窗口内包含一个完整脉冲。

从模拟输入到模拟输出的总延迟包括阈值交越、ADC 桥接时序、门延迟和 DAC 转换时间。它与某个门的 `rise_delay` 参数并不相同。比较测量结果时，应选择相同的阈值，并注明所用的时间区间。

## 区分三种不同的时间量
{: #separate-three-different-time-quantities}

| 量 | 含义 |
| --- | --- |
| 传播延迟 | 从触发输入事件到相应输出事件之间的时间 |
| 上升/下降时间 | 模拟信号在指定电平之间转换所需的时间 |
| 周期 | 波形重复之间的时间 |

在数字域中，理想的事件驱动转换可以是瞬时的，而 DAC 桥接器会产生有限的模拟斜率。减小绘图时间步长并不会缩短门所配置的传播延迟。

在 X1 模型的副本中，将反相器延迟加倍至 200 ns，然后重新运行仿真。脉冲宽度应相应增加。接着显著增大最大步长，并比较绘图能解析出什么。求解器仍可能插入与事件相关的点，但粗略的设置并不是测量短模拟边沿的可靠方法。恢复为 2 ns，并确认测得的脉冲宽度稳定。

这是一个冒险演示，并非推荐的实体脉冲发生器。实际逻辑延迟会随工艺、电压、温度和负载而变化。在固定延迟仿真中看似稳定出现的脉冲，在硬件中可能消失或改变宽度。可用此类测试发现时序敏感性，然后选择具有明确时序要求和适用模型的设计。

## 下载课程电路
{: #download-the-lesson-circuits}

在 **打开示例（Open Example）** 中已经提供了相同的示例。如需单独副本，请下载 `.dzn` 图纸，然后在 TinyCAD 中使用 **文件（File）→ 打开（Open）**。配套的 `.cir` 是供查看或用于兼容外部仿真器的 SPICE 文本，并非 TinyCAD 图纸。重新运行 XSPICE 电路需要 Desktop 版本。

| 示例 | 图纸 | 网表 |
| --- | --- | --- |
| logic-hazard | [TinyCAD 图纸](/v4/examples/simulation-tutorials/xspice/logic-hazard.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/xspice/logic-hazard.cir) |

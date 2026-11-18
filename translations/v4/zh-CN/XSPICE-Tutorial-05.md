---
layout: default
title: 5. Counters and divided clocks
---
# 5. 计数器与分频时钟
{: #counters-and-divided-clocks}

[上一章](/v4/XSPICE-Tutorial-04/) · [目录](/v4/Simulation-Tutorials/) · [下一章](/v4/XSPICE-Tutorial-06/)

本章中的示例已随 TinyCAD 一同提供。选择 **打开示例（Open Example） → XSPICE 和数字教程（XSPICE and digital tutorial）**，选中指定的示例，然后选择 **打开图纸（Open Drawing）**。无需下载。

打开 **logic-counter**。X1 包含四个 D
触发器。每个触发器都将反相输出反馈到 D，因此在时钟触发时会翻转。第一级接收 CLK；后续各级由前一级的反相输出作为时钟驱动。这构成了一个脉动二进制加计数器。

![四位计数器测试电路](/v4/images/simulation-tutorials/xspice/logic-counter-circuit.png)
![计算得到的分频时钟输出](/v4/images/simulation-tutorials/xspice/logic-counter-results.png)

输入周期为 1 µs。复位会在启动附近清除各级状态，第一个计数沿出现在约 0.5 µs 处。运行已保存的 18 µs 瞬态仿真。待脉动过程稳定后读取各个值，例如在 0.8 µs、1.8 µs、2.8 µs 等时刻读取。

预期的十进制序列为：

```text
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0
```

对于位序 Q3 Q2 Q1 Q0，前四个值为 0001、0010、0011 和 0100。
使用 `count = Q0 + 2Q1 + 4Q2 + 8Q3` 进行转换；对于此图，将稳定后的电压高于
2.5 V 视为逻辑 1。

## 分频
{: #frequency-division}

Q0 每个输入周期翻转一次，因此其完整周期跨越两个输入周期。
Q1 的分频比为 4，Q2 为 8，Q3 为 16。

| 输出 | 周期 | 频率 |
| --- | --- | --- |
| Q0 | 2 µs | 500 kHz |
| Q1 | 4 µs | 250 kHz |
| Q2 | 8 µs | 125 kHz |
| Q3 | 16 µs | 62.5 kHz |

提供的 18 µs 采集结果显示了回卷，但复位后可能不包含 Q3 的两个完整上升沿。对于该输出，在请求测量第一个完整周期的频率之前，请将持续时间延长至 35 µs。如果采集数据不足以提供充分依据，则频率不可用是合理的结果。

## 脉动为何重要
{: #why-ripple-matters}

各位并非同时变化。每一级都在前一级的输出发生跃迁后才响应。放大观察从七计数到八计数的跃迁：进位传播期间会短暂出现中间位组合。因此，连接到这些位的组合译码器可能会产生毛刺。

这与所有级共用一个时钟的同步计数器不是同一种架构。计数序列在稳定后正确，并不意味着脉动计数器适用于所有对时序敏感的应用。使用此示例来区分功能计数与跃迁时序。

尝试将时钟周期加倍。计数序列保持不变，但所有输出频率都会减半；配置的传播延迟则保持固定。然后将复位移到运行中间，检查所有位是否都已清零后才恢复正常计数。记录复位时序，并在采样状态前留出足够时间，让复位和 DAC 桥稳定下来。

在设计测试中，同时定义功能要求（计数稳定后正确）和时序要求（时钟触发后允许的最大稳定时间）。它们回答的是不同问题，应分别检查。

## 下载课程电路
{: #download-the-lesson-circuits}

同样的示例已在 **打开示例（Open Example）** 中提供。如需单独获取副本，请下载 `.dzn` 图纸，并在 TinyCAD 中使用 **文件（File） → 打开（Open）**。`.cir` 配套文件是供查看或交由兼容的外部仿真器使用的 SPICE 文本，并非 TinyCAD 图纸。要重新运行 XSPICE 电路，需要使用 Desktop。

| 示例 | 图纸 | 网表 |
| --- | --- | --- |
| logic-counter | [TinyCAD 图纸](/v4/examples/simulation-tutorials/xspice/logic-counter.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/xspice/logic-counter.cir) |

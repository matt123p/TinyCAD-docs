---
layout: default
title: 2. Gates and truth tables
---
# 2. 门与真值表
{: #gates-and-truth-tables}

[上一节](/v4/XSPICE-Tutorial-01/) · [目录](/v4/Simulation-Tutorials/) · [下一节](/v4/XSPICE-Tutorial-03/)

本章中的示例已随 TinyCAD 一同提供。选择 **打开示例 → XSPICE 和数字电路教程**，选中指定的示例，然后选择 **打开图纸**。无需下载。

打开 **logic-nand**。X1 包含 ADC 桥接器、一个双输入 XSPICE NAND 门和一个 DAC 输出桥接器。独立的脉冲源以不同速率驱动 A 和 B。运行 8 µs 瞬态分析并显示 A、B 和 Y。

![NAND 测试电路](/v4/images/simulation-tutorials/xspice/logic-nand-circuit.png)
![计算得到的 NAND 波形](/v4/images/simulation-tutorials/xspice/logic-nand-results.png)

布尔函数为 `Y = NOT(A AND B)`：

| A | B | 稳态 Y |
| --- | --- | --- |
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

在绘制出的模拟表示中，0 表示约 0 V，1 表示约 5 V。只有当两个输入都为高电平时，输出才会变为低电平。观察每个稳定区间的中间部分，而不是输入越过阈值的确切时刻。该门的上升和下降传播延迟为 20 ns；桥接器及其有限的边沿也会带来额外的时序影响。

## 进行一次有意设计的真值表实验
{: #run-a-deliberate-truth-table-experiment}

使用图表游标找出每一行对应的稳定区间。待输出稳定后，记录 A、B 和 Y。如果某种输入组合只在两个输入变化期间短暂出现，请勿将该过渡状态作为稳定真值表行的依据。若要进行明确的手动检查，请将两个信号源改为 0 V 或 5 V 的直流电压，再次运行瞬态分析，并逐一测试四种组合。

在 X1 的内嵌 SPICE 模型中，核心语句如下：

```spice
Ag [da db] dy ng
.model ng d_nand(rise_delay=20n fall_delay=20n)
```

方括号将输入端口组成一个向量。`da`、`db` 和 `dy` 是内部事件驱动节点。它们不是可以直接连接电阻的普通电气网络。桥接器将这些内部节点连接到图纸中可见的模拟端子。

若要试验其他逻辑函数，请复制该图纸，并将 X1 的 SPICE 前导部分中的模型类型改为兼容的门电路，例如 `d_and`。保持向量/标量端口接口兼容。待过渡过程结束后，AND 真值表应与 NAND 结果相反。

## 此示例不能证明的内容
{: #what-this-example-does-not-establish}

该模型并不表示某个指定型号的封装 IC，也不包含其 ESD 二极管、扇出限制、电源电流尖峰或制造商给出的负载相关时序。20 ns 延迟是本实验的一个输入参数。真值表正确只能证明所测试状态下的逻辑功能，不能证明它与另一个芯片在电气上兼容。

出现问题时，首先检查已保存的信号源电平，然后检查桥接器阈值，最后检查门模型和端口顺序。在这些桥接器设置下，保持在 2 V 的输入属于未定义状态；不能仅仅因为它更接近某一电源轨就将其判定为任一布尔值。

模型定义和端口约定见 [ngspice 手册](https://ngspice.sourceforge.io/docs.html) 中的 XSPICE 代码模型章节。

## 下载课程电路
{: #download-the-lesson-circuits}

相同的示例已可在 **打开示例** 中找到。如需单独的副本，请下载 `.dzn` 图纸，并在 TinyCAD 中使用 **文件 → 打开**。配套的 `.cir` 是供查看或在兼容的外部仿真器中使用的 SPICE 文本，并非 TinyCAD 图纸。要重新运行 XSPICE 电路，需要使用 Desktop 版本。

| 示例 | 图纸 | 网表 |
| --- | --- | --- |
| logic-nand | [TinyCAD 图纸](/v4/examples/simulation-tutorials/xspice/logic-nand.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/xspice/logic-nand.cir) |

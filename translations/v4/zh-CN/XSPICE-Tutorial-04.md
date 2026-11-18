---
layout: default
title: 4. D flip-flops, clocks and reset
---
# 4. D 触发器、时钟与复位
{: #d-flip-flops-clocks-and-reset}

[上一章](/v4/XSPICE-Tutorial-03/) · [目录](/v4/Simulation-Tutorials/) · [下一章](/v4/XSPICE-Tutorial-05/)

本章中的示例已随 TinyCAD 一起打包。选择 **打开示例 (Open Example) → XSPICE and digital tutorial**，选择指定的示例，然后选择 **打开图纸 (Open Drawing)**。无需下载。

打开 **logic-dff**。该示例为 D、CLK 和 RESET 分别提供模拟激励。在 X1 内部，桥接器将信号馈入 XSPICE D 触发器；Q 和 NQ 则转换回模拟输出，以便绘图。

![D 触发器测试电路](/v4/images/simulation-tutorials/xspice/logic-dff-circuit.png)
![计算得到的时钟、数据、复位和 Q](/v4/images/simulation-tutorials/xspice/logic-dff-results.png)

运行 8 µs 瞬态分析。在每个时钟上升沿，Q 捕获 D 的值，并在两个上升沿之间保持该状态。传播过程稳定后，NQ 是 Q 的反相值。第一个时钟上升沿出现在约 0.5 µs 处。此时 D 已为高电平，因此经过模型的时钟到输出延迟后，Q 变为高电平。在这个正边沿触发示例中，时钟下降沿不会捕获新数据。

## 查看模型的实际接口
{: #read-the-actual-model-interface}

内部实例为：

```spice
Aff dd dc NULL dr dq dn flip
.model flip d_dff(ic=0 clk_delay=20n reset_delay=20n
+ rise_delay=5n fall_delay=5n)
```

其端口依次为数据、时钟、异步置位、异步复位、输出和反相输出。`NULL` 将可选的置位输入留空。初始状态显式设为零。端口顺序是模型约定；仅凭可见方框上引脚的位置并不能确定端口顺序。

## 测试异步复位
{: #test-asynchronous-reset}

RESET 在约 6 µs 时变为高电平，持续约 0.5 µs。Q 无需等待下一个时钟上升沿就会清零。复位有效期间，应先检查输出，再判断时钟行为。复位释放后，后续时钟沿会恢复数据捕获。此示例将复位与正常 D 波形分开进行测试。

使用覆盖第一个捕获沿的短测量窗口，在 2.5 V 阈值下测量时钟到 Q 的延迟。测得的模拟延迟包含桥接器的延迟，而不只是 `clk_delay`。使用另一个覆盖复位的窗口检查异步清零。不要试图用一次首次边沿测量来概括多个不同的触发事件。

## 初始状态与建立/保持时间假设
{: #initial-state-and-setuphold-assumptions}

设置 `ic=0` 可使本教程具有可重复性。如果实际设计的上电状态未指定，假定初始状态恰好为零，可能会掩盖缺少复位要求的问题。尝试在启动时施加一个明确的复位脉冲，并将其与依赖模型的初始条件设置进行比较。

接下来，将数据跳变移到接近时钟沿的位置。观察功能模型如何对事件排序，但不要把干净的数字结果当作真实器件满足建立时间和保持时间要求的证明。这个简单的功能模型不是晶体管级亚稳态模型，也无法确定亚稳态的解析概率。制造商的时序约束和适用的器件模型仍是电气时序分析中需要单独考虑的输入。

一份有用的测试记录应包含数据波形、时钟沿约定、复位极性和时序、初始状态假设、预期的捕获序列以及测量阈值。这比单独截取 Q 的波形图包含更多信息。

## 下载课程电路
{: #download-the-lesson-circuits}

相同的示例已可通过 **打开示例 (Open Example)** 获取。如需单独副本，请下载 `.dzn` 图纸，并在 TinyCAD 中使用 **文件 (File) → 打开 (Open)**。配套的 `.cir` 是供查看或在兼容的外部模拟器中使用的 SPICE 文本，并非 TinyCAD 图纸。要重新运行 XSPICE 电路，需要 Desktop 版本。

| 示例 | 图纸 | 网表 |
| --- | --- | --- |
| logic-dff | [TinyCAD 图纸](/v4/examples/simulation-tutorials/xspice/logic-dff.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/xspice/logic-dff.cir) |

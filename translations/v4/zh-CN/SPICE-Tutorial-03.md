---
layout: default
title: 3. Choosing and configuring signal generators
---
# 3. 选择和配置信号发生器
{: #choosing-and-configuring-signal-generators}

[上一章](/v4/SPICE-Tutorial-02/) · [目录](/v4/Simulation-Tutorials/) · [下一章](/v4/SPICE-Tutorial-04/)

本章中的示例随 TinyCAD 一同提供。选择 **打开示例 → SPICE 教程**，选中指定示例，然后选择 **打开图纸**。无需下载。

激励描述了驱动电路的信号。选择电路图纸上信号源的主体以打开其设置。**信号类型**会更改波形并显示相关参数。预览显示已设置的波形；仿真则计算电路加载该信号源后发生的情况。

下面的每张图纸都已准备好进行 5 ms 瞬态分析。每个电压源驱动一个 1 kΩ 负载。请逐次学习一个设置，然后再将波形应用于更复杂的电路。

| 图纸 | 已保存的激励 | 预期行为 |
| --- | --- | --- |
| **source-dc**（直流） | 5 V | 恒定 5 V，负载电流为 5 mA |
| **source-sine**（正弦） | 1 V 偏置、2 V 峰值幅度、1 kHz | −1 至 +3 V，周期为 1 ms |
| **source-pulse**（脉冲） | 0–5 V，上升/下降时间 10 µs，高电平平台 300 µs，周期 1 ms | 重复脉冲，边沿具有有限斜率 |
| **source-triangle**（三角波） | −1 至 +1 V，周期 1 ms | 线性上升和下降斜坡 |
| **source-pwl**（分段线性） | 0 V 持续至 1 ms，在 2 ms 前斜升至 3 V，保持至 3 ms，在 4 ms 前下降 | 按设定的启动和关断序列变化 |
| **source-exponential**（指数） | 0–5 V，上升始于 1 ms，下降始于 3 ms | 指数变化，上升和下降时间常数分别为 300 µs 和 500 µs |
| **source-fm**（调频） | 幅度 1 V，载波 5 kHz，调制频率 500 Hz，调制指数 2 | 幅度恒定，瞬时频率变化 |
| **source-current**（电流脉冲） | 向 1 kΩ 回流负载提供 0–1 mA | 按所提供的信号源方向，电压约为 0 至 −1 V |


这些是对所提供文件进行求解后得到的曲线。电流源结果为负，是因为信号源从 OUT 向地吸取电流，而电阻提供了回流路径。若需要正的负载电压，请反转信号源。理想电流源强制设定电流；其端电压由网络决定。它没有自动的顺从电压限制。

## 视频：信号源设置和波形预览
{: #video-source-settings-and-waveform-preview}

更改正弦波的偏置、峰值幅度和频率，然后重新运行瞬态分析。

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/source-settings.mp4" poster="/v4/videos/simulation-tutorials/spice/source-settings.jpg" caption="信号源设置和波形预览。" %}

[观看或下载视频](/v4/videos/simulation-tutorials/spice/source-settings.mp4)。

### 电路和参考结果
{: #circuit-and-reference-results}

![测得的波形示例](/v4/Images/simulation-tutorials/spice/source-waveforms.png)

## 幅度、偏置和时序
{: #amplitude-offset-and-timing}

对于正弦波，`v(t) = offset + amplitude × sin(2πft + phase)`，然后再考虑可选的延迟和阻尼。幅度是**峰值**，不是峰峰值或 RMS。零偏置、2 V 峰值的正弦波，其峰峰值为 4 V，RMS 为 1.414 V。偏置为 1 V 时，其总 RMS 变为 `sqrt(1² + 2²/2) = 1.732 V`。

脉冲宽度描述高电平平台；有限的边沿会影响在某个阈值处测得的宽度。对于所提供的脉冲，高于 2.5 V 的持续时间约为 310 µs，占空比约为 31%。研究模拟电路时，应避免使用零时间边沿。它们会引入无限带宽，使数值计算更困难，而且无法代表真实的信号发生器。

分段线性数据每行使用一组递增的时间/数值对。它适用于电源斜坡、传感器特性曲线和非周期测试序列。指数信号源产生指数波形；它不会添加实际的 RC 网络。

## AC 激励是单独的设置
{: #ac-excitation-is-a-separate-setting}

**AC 幅度**和**AC 相位**用于 AC 频率响应分析。正弦频率字段不会设置 AC 扫频的频率范围。同样，AC 幅度为 1 V 也不会产生 1 V 的瞬态正弦波。当同一个输入信号源用于偏置、AC 和瞬态分析时，请牢记这些区别。

理想独立电压源的输出阻抗为零，理想独立电流源的输出阻抗为无穷大。TinyCAD 的**实验室设备 → 函数发生器**则包含可配置的输出电阻（通常为 50 Ω）。匹配的 50 Ω 负载获得的电压是信号发生器开路电压的一半。

## 受控源和实际用途
{: #controlled-sources-and-practical-uses}

SPICE 插入菜单还提供压控电压源和压控电流源。前者实现 `Vout = gain × Vcontrol`；后者实现 `Iout = transconductance × Vcontrol`。它们的控制端和输出端彼此独立。打开 **controlled-source**，即可查看一个可直接运行的增益为 2 的压控电压源。1 V 峰值输入在 1 kΩ 负载上产生 2 V 峰值输出。该理想信号源没有削波或电源功耗模型。

受控源可用于表示理想放大器、
换能器或相关负载，但除非模型明确包含电源限制或带宽，否则不会自动具备这些特性。

尝试只更改正弦波幅度，然后只更改其偏置。重新运行前，先预测新的最小值、最大值和 RMS。接着将频率加倍，并将最大时间步长减半，以检查显示的波形是否仍有足够的分辨率。

参考：源语法和波形定义见
[ngspice 手册](https://ngspice.sourceforge.io/docs.html)。

## 下载课程电路
{: #download-the-lesson-circuits}

这些示例也已在**打开示例**中提供。如需单独副本，请下载 `.dzn` 图纸，并在 TinyCAD 中使用 **文件 → 打开**。配套的 `.cir` 是供检查或在兼容的外部仿真器中使用的 SPICE 文本，不是 TinyCAD 图纸。运行新的 XSPICE 电路需要 Desktop。

| 示例 | 图纸 | 网表 |
| --- | --- | --- |
| source-dc | [TinyCAD 图纸](/v4/examples/simulation-tutorials/spice/source-dc.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/source-dc.cir) |
| source-current | [TinyCAD 图纸](/v4/examples/simulation-tutorials/spice/source-current.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/source-current.cir) |
| source-sine | [TinyCAD 图纸](/v4/examples/simulation-tutorials/spice/source-sine.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/source-sine.cir) |
| source-pulse | [TinyCAD 图纸](/v4/examples/simulation-tutorials/spice/source-pulse.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/source-pulse.cir) |
| source-triangle | [TinyCAD 图纸](/v4/examples/simulation-tutorials/spice/source-triangle.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/source-triangle.cir) |
| source-pwl | [TinyCAD 图纸](/v4/examples/simulation-tutorials/spice/source-pwl.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/source-pwl.cir) |
| source-exponential | [TinyCAD 图纸](/v4/examples/simulation-tutorials/spice/source-exponential.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/source-exponential.cir) |
| source-fm | [TinyCAD 图纸](/v4/examples/simulation-tutorials/spice/source-fm.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/source-fm.cir) |
| controlled-source | [TinyCAD 图纸](/v4/examples/simulation-tutorials/spice/controlled-source.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/controlled-source.cir) |

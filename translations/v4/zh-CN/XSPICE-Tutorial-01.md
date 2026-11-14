---
layout: default
title: 1. XSPICE and digital simulation
---
# 1. XSPICE 与数字仿真
{: #xspice-and-digital-simulation}

[如何使用教程](/v4/Tutorial-Start-Here/) · [课程内容](/v4/Simulation-Tutorials/) · [下一步：门电路](/v4/XSPICE-Tutorial-02/)

本章中的示例已随 TinyCAD 一并提供。选择 **打开示例 → XSPICE 和数字教程**，选中指定的示例，然后选择 **打开图纸**。无需下载。

XSPICE 通过代码模型和事件驱动仿真系统扩展了 ngspice。
模拟电路通过电压和电流求解；事件驱动数字网络则通过功能模型传播逻辑状态变化。混合信号仿真会协调这两者。与晶体管级实现相比，这样可以大幅简化逻辑功能的仿真，但无法提供有关电源电流、晶体管应力或实际时序的同等信息。

请在本课程中使用 **TinyCAD Desktop**。其捆绑的原生引擎包含所需的代码模型。TinyCAD 的浏览器/WASM 引擎不包含 XSPICE。
随附模型嵌入在图纸中，但可执行代码模型库仍来自原生引擎的安装目录。

[《TinyCAD 如何实现 SPICE》](/v4/SPICE-Tutorial-11/) 说明引擎、符号定义和 Simulation 工作表之间的关系。

## 首次运行：事件驱动缓冲器
{: #first-run-an-event-driven-buffer}

打开 **logic-buffer**。运行保存的 8 µs 瞬态分析，
并绘制 A 和 Y。A 是周期为 1 µs、幅度为 0–5 V 的波形。Y 在经过一小段传播延迟后跟随该波形，且输出边沿具有有限的转换时间。

![XSPICE 缓冲器测试电路](/v4/images/simulation-tutorials/xspice/logic-buffer-circuit.png)
![计算得到的缓冲器输入和输出](/v4/images/simulation-tutorials/xspice/logic-buffer-results.png)

X1 是一个嵌入式子电路，包含三个明确的内部级：

```text
Analogue A → adc_bridge → digital d_buffer → dac_bridge → analogue Y
```

图纸有意将端子显示为模拟端子：这样 TinyCAD 的常规图表系统就可以将输入和输出绘制为电压。在 X1 内部，缓冲器是真正的 XSPICE 事件驱动模型，而不是伪装成数字门电路的电压阈值表达式。打开 X1 的 SPICE 属性以查看各级。

## 桥接器的含义
{: #what-the-bridges-mean}

ADC 桥接器将不高于 1 V 的输入判定为低电平，将不低于 3 V 的输入判定为高电平。两者之间的区间未定义。这是逻辑域接口，并非带有时钟、分辨率和量化码的多位采样 ADC。

DAC 桥接器将低电平映射为 0 V、高电平映射为 5 V，并将未定义状态映射为 2.5 V 以便观察。
其上升和下降转换时间为 5 ns。因此，本课程中出现的 2.5 V 输出可能代表未知数字状态，不一定是有效的模拟中间电源轨信号。这些阈值和电压是教程中的选择，并非特定 TTL 或 CMOS 器件的规格。

桥接器的理想输出驱动没有经过建模的电源引脚。请勿据此计算实际逻辑芯片的功耗。若要研究功耗，请使用具有明确电源引脚且器件行为适当的模型。

## 合理划分建模细节
{: #a-useful-division-of-modelling-detail}

使用事件驱动门电路检查真值表、时钟序列和功能时序。当晶体管或制造商模型支持所需效应时，使用这些模型研究电气负载和器件行为。在模拟域与数字域之间转换时，使用明确的接口。符号外观相似，并不能说明其中包含哪种模型。

首次试验时，将输入周期从 1 µs 改为 2 µs，然后重新运行。
重复频率会减半；模型指定的传播延迟应基本保持不变。周期和传播延迟是相互独立的属性。

参考资料：[XSPICE 简介](https://ngspice.sourceforge.io/xspice.html)，
[官方 XSPICE 示例和 HOWTO 文档](https://ngspice.sourceforge.io/xspicehowto.html)。

## 下载课程电路
{: #download-the-lesson-circuits}

相同的示例已可在 **打开示例** 中找到。如需单独的副本，请下载一个 `.dzn` 图纸，并在 TinyCAD 中使用 **文件 → 打开**。其配套的 `.cir` 是供查阅或供兼容的外部仿真器使用的 SPICE 文本，并非 TinyCAD 图纸。要重新运行 XSPICE 电路，必须使用 Desktop 版本。

| 示例 | 图纸 | 网表 |
| --- | --- | --- |
| logic-buffer | [TinyCAD 图纸](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |

---
layout: default
title: 6. Mixed-signal filtering and unknown states
---
# 6. 混合信号滤波与未知状态
{: #mixed-signal-filtering-and-unknown-states}

[上一页](/v4/XSPICE-Tutorial-05/) · [课程内容](/v4/Simulation-Tutorials/)

本章中的示例随 TinyCAD 一同提供。选择 **Open Example → XSPICE and digital tutorial**，选中指定示例，然后选择 **Open Drawing**。无需下载。

打开 **logic-filter**。一个 0–5 V、10 kHz 的脉冲序列
经过 XSPICE 缓冲器和 DAC 桥接器，然后驱动一个实际的 SPICE
1 kΩ/1 µF 低通滤波器。高电平平台在 100 µs 周期内持续 25 µs，因此
标称占空比约为 25%。输入边沿并非理想，因此按阈值定义的精确
占空比会略有不同。

![混合数字与模拟滤波电路](/v4/images/simulation-tutorials/xspice/logic-filter-circuit.png)
![计算得到的 PWM 和滤波输出](/v4/images/simulation-tutorials/xspice/logic-filter-results.png)

运行 5 ms 瞬态分析。绘制 A、Y 和 FILTERED。数字路径保留了
脉冲功能；RC 网络对其进行平均，同时保留一定纹波。
长期平均值趋近于 `5 V × 0.25 ≈ 1.25 V`。由于 τ = 1 ms，
启动过程需要数毫秒。

## 如实测量有限的采集时间
{: #measure-the-finite-acquisition-honestly}

在 4–5 ms 窗口内，滤波信号的参考平均值约为 **1.242 V**，
峰峰值纹波约为 **0.108 V**（约 1.187–1.295 V）。它尚未
完全达到理想的长期平均值。将持续时间延长至 10 ms，并比较
最后 1 ms 窗口。增大滤波器时间常数可减小纹波，但会延长
稳定时间，这与模拟 RC 课程中的情况相同。

这是理解 PWM 到电压转换的一个有用模型。但它并不是
完整的微控制器输出模型：DAC 桥接器的输出驱动能力经过理想化处理，
且没有明确的电源电流边界。当负载电流和输出级损耗很重要时，请添加
适当的驱动器电阻或器件模型。

## 探索未定义的逻辑电平
{: #explore-an-undefined-logic-level}

打开 **logic-unknown**。其 PWL 输入依次保持在
0 V、2 V 和 5 V。运行 3 µs 并检查中间的平台。

![未定义数字状态的计算模拟表示](/v4/images/simulation-tutorials/xspice/logic-unknown-results.png)

ADC 桥接器的低阈值和高阈值分别为 1 V 和 3 V。2 V 平台位于
两者之间，因此事件驱动输入处于未定义状态。该未知状态会传播
经过缓冲器。DAC 桥接器将其映射为 **2.5 V**，因为其 `out_undef`
参数明确指定了该显示电平。

不要将这 2.5 V 理解为对实际逻辑门将停留在电源中点电压的预测。
它是一种编码，用于在模拟图表上显示未知状态。该模型也不会再现
噪声引起的阈值抖动或亚稳态物理现象。实际输入接收器可能需要
迟滞、指定的阈值系列以及更详细的电气模型。

## 混合信号检查清单
{: #a-mixed-signal-checklist}

在相信实验结果之前，请确认哪些连接传递电压和电流，哪些传递事件。
找出每一个域间转换。记录阈值、未定义状态映射、传播延迟、输出边沿
时间和初始条件。检查稳态功能和转换
行为。采集时间应足够长，以涵盖测量所需的周期或稳定窗口。

同样的方法也适用于比较器驱动数字逻辑、分频时钟控制开关，或逻辑
波形驱动模拟滤波器等情况。更多复杂的 XSPICE 应用，包括锁相环和 Δ-Σ
示例，可通过[官方 XSPICE HOWTO](https://ngspice.sourceforge.io/xspicehowto.html)
找到。组装整个系统之前，请先分别验证各个域及其接口。

现在，你已经使用了功能门、毛刺、存储、复位、计数以及
模拟/数字混合路径。有关电功率、放大器非线性行为
和频率响应，请返回 [SPICE 课程](/v4/SPICE-Tutorial-01/)。

## 下载课程电路
{: #download-the-lesson-circuits}

相同的示例已可通过 **Open Example** 获取。如需独立副本，请下载一个 `.dzn` 图纸，并在 TinyCAD 中使用 **File → Open**。`.cir` 配套文件是供检查或在兼容的外部仿真器中使用的 SPICE 文本，并非 TinyCAD 图纸。运行新的 XSPICE 电路需要 Desktop 版本。

| 示例 | 图纸 | 网表 |
| --- | --- | --- |
| logic-filter | [TinyCAD 图纸](/v4/examples/simulation-tutorials/xspice/logic-filter.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/xspice/logic-filter.cir) |
| logic-unknown | [TinyCAD 图纸](/v4/examples/simulation-tutorials/xspice/logic-unknown.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/xspice/logic-unknown.cir) |

---
layout: default
title: "10. Design investigations: sweeps, tolerances, noise and diagnosis"
---
# 10. 设计分析：扫描、容差、噪声与诊断
{: #design-investigations-sweeps-tolerances-noise-and-diagnosis}

[上一章](/v4/SPICE-Tutorial-09/) · [目录](/v4/Simulation-Tutorials/) · [下一章：TinyCAD 中的 SPICE](/v4/SPICE-Tutorial-11/)

本章中的示例随 TinyCAD 一同提供。选择 **打开示例 → SPICE 教程**，选中指定的示例，然后选择 **打开图纸**。无需下载。

有用的仿真报告应记录待解答的问题、电路/模型版本、
分析类型、激励、测量窗口和验收标准。缺少这些细节的图表很难复现。

## 参数扫描与容差
{: #parameter-sweeps-and-tolerances}

返回 **rc-ac**。在 **调谐 / 扫描** 中，运行预设的
R1 数值：1 kΩ、2.2 kΩ 和 4.7 kΩ。对应的预期截止频率为 159.15、72.34 和
33.86 Hz。这是参数扫描：用于观察有意选择的元件值如何影响响应。它不同于第 2 章中的 **直流扫描**，后者会在一次分析过程中改变独立电源的直流值。

要研究容差，请使用 **分析实验室 → 容差研究**。定义 R1 和 C1
绑定，选择分布和随机种子，然后添加截止频率要求。若取相互独立、范围为 ±5% 的数值，RC 极限组合对应的频率约为
144.36–176.35 Hz。蒙特卡洛样本不一定会达到任一极限组合。
正态分布的标准差不是硬性 ± 限值。请记录所选的约定以及变量是否相关。

TinyCAD 可以保留测试用例条件以及测量/要求定义。只有在希望将临时调谐结果转化为真实原理图修改时，才使用 **应用**。更改拓扑或模型文本时，请另存一个电路版本；采集哈希只是标识符，无法恢复原理图版本。

## 噪声：另一种输出
{: #noise-a-different-kind-of-output}

打开 **rc-noise**。该示例要求计算 OUT 处的输出噪声，
以独立输入源 V1 为参考，频率范围为 1 Hz 至 100 kHz，温度为 27°C。
理想电源没有噪声；R1 会产生热噪声，并由 C1 滤波。

![计算得到的 RC 输出噪声功率谱密度](/v4/Images/simulation-tutorials/spice/rc-noise-results.png)

该频带内的输出噪声总量约为 **64.2 nV RMS**。对于从零频率积分到无穷频率的理想 RC 电路，电容的均方噪声为 `kT/C`，在 300.15 K 和 1 µF 下约为 64.4 nV RMS。
仿真频带有限，因此会产生微小差异。功率谱密度的单位为 V/√Hz；积分时先对密度平方并乘以频带宽度，再开平方。它并不是所显示的各个密度样本的算术和。输入折算总量是另一种结果。

## 传递函数与极点
{: #transfer-functions-and-poles}

打开 **rc-tf**。其直流小信号传递结果为
1 V/V，输出电阻为 1 kΩ，而输入电阻实际上为无穷大，
因为电容在直流下开路。打印出的极大输入电阻，例如 `1e20`，表示数值计算得到的开路结果，而非实测的 100 艾欧姆电阻。

打开 **rc-pz**。极点约为 **−1000 rad/s**，
与 `s = −1/(RC)` 相符。将其绝对值除以 `2π`，可得到 159.15 Hz。对于这个线性系统，复数 s 平面左半平面上的极点表示衰减。
这个一阶低通传递函数没有有限零点，符合预期。

这些分析针对线性化模型进行。它们不能替代对削波、开关行为或启动过程的瞬态测试。任意输出/输入增益也不等同于反馈环路增益；稳定性测量需要有针对性地配置环路测试。

## 实用测量项目
{: #a-practical-measurement-menu}

| 任务 | 适用的测量量 |
| --- | --- |
| 传感器调理 | 增益、偏置、噪声、截止频率、建立时间 |
| 脉冲接口 | 上升/下降时间、延迟、脉冲宽度、占空比 |
| 放大器 | 偏置、增益/相位、带宽、输出 RMS、功率、削波 |
| 功率级 | 纹波、峰值电流、平均功率、能量、效率 |
| 元件变化 | 扫描叠加图、观测到的最差值、要求检查结果 |

TinyCAD 还在 **实验室设备** 下提供虚拟示波器、万用表、函数发生器和限流台式电源。
这些设备的阻抗和限值十分重要：例如，函数发生器通常具有 50 Ω 输出
电阻。它们为研究相同的电气问题提供了另一种工作流程。

## 诊断失败或不合理的运行结果
{: #diagnose-a-failed-or-implausible-run}

首先检查接地、意外短路和浮空节点。确认元件
引脚映射和模型名称。对于 AC 分析，检查独立电源的 AC 幅值；
对于瞬态分析，检查仿真时长、最大步长和有限的激励边沿。查看
求解器日志，并确认仿真已达到指定的结束时间。部分波形不代表已完成的结果。

在更改数值设置之前，先尝试更简单的工作点或独立级测试。记录任何新增的漏电电阻、源电阻或寄生电容：它们会改变电路，同时也有助于收敛。需要进行专门计算时，请导出 CSV，并保留单位和复数列。

延伸阅读：[ngspice 控制语言教程](https://ngspice.sourceforge.io/ngspice-control-language-tutorial.html)
介绍了命令行自动化。TinyCAD 的文档模型有意不执行任意 `.control` 脚本；请使用其支持的分析和研究控件，或导出网表以便通过单独的 ngspice 工作流程进行处理。

## 下载课程电路
{: #download-the-lesson-circuits}

相同示例已可在 **打开示例** 中使用。如需单独的副本，请下载 `.dzn` 图纸，并在 TinyCAD 中使用 **文件 → 打开**。`.cir` 配套文件是供检查或在兼容的外部仿真器中使用的 SPICE 文本，并非 TinyCAD 图纸。要重新运行 XSPICE 电路，需要 Desktop 版本。

| 示例 | 图纸 | 网表 |
| --- | --- | --- |
| rc-ac | [TinyCAD 图纸](/v4/examples/simulation-tutorials/spice/rc-ac.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/rc-ac.cir) |
| dc-sweep | [TinyCAD 图纸](/v4/examples/simulation-tutorials/spice/dc-sweep.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/dc-sweep.cir) |
| rc-noise | [TinyCAD 图纸](/v4/examples/simulation-tutorials/spice/rc-noise.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/rc-noise.cir) |
| rc-tf | [TinyCAD 图纸](/v4/examples/simulation-tutorials/spice/rc-tf.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/rc-tf.cir) |
| rc-pz | [TinyCAD 图纸](/v4/examples/simulation-tutorials/spice/rc-pz.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/rc-pz.cir) |

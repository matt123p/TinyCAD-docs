---
layout: default
title: Simulation tutorials for TinyCAD
---
# 仿真教程
{: #simulation-tutorials}

请从[如何使用这些教程并打开捆绑示例](/v4/Tutorial-Start-Here/)开始，
然后继续学习[SPICE：概述与首次仿真](/v4/SPICE-Tutorial-01/)。
对于事件驱动逻辑，请从单独的[XSPICE 和数字电路课程](/v4/XSPICE-Tutorial-01/)开始。

本教程包含一个共享的入门章节、十一章 SPICE 内容和六章 XSPICE 内容。完整课程、可运行的绘图、图像和录制内容均包含在本手册中。所有教程示例均与 TinyCAD 捆绑提供；无需下载教程。请在浏览器标题栏中选择 **Open Example**，或在桌面版中选择 **File → Open Example**，然后选择
**SPICE tutorial** 或 **XSPICE and digital tutorial**，选择章节中
提到的示例，再选择 **Open Drawing**。这将打开一个可编辑副本；
使用 **Save As** 保存您的实验，并重新打开嵌入的示例
即可从头开始。绘图中包含嵌入式符号、模型定义、
分析设置以及保留的参考采集结果。

## SPICE
{: #spice}

1. [概述与首次运行](/v4/SPICE-Tutorial-01/)
2. [直流电压、电流和功率](/v4/SPICE-Tutorial-02/)
3. [信号发生器与激励](/v4/SPICE-Tutorial-03/)
4. [瞬态分析与 RC 充电](/v4/SPICE-Tutorial-04/)
5. [频率响应与滤波器](/v4/SPICE-Tutorial-05/)
6. [二极管、整流与纹波](/v4/SPICE-Tutorial-06/)
7. [重建 AMP.DSN](/v4/SPICE-Tutorial-07/)
8. [放大器增益与带宽](/v4/SPICE-Tutorial-08/)
9. [放大器输出、削波与功率](/v4/SPICE-Tutorial-09/)
10. [扫描、噪声与设计研究](/v4/SPICE-Tutorial-10/)
11. [TinyCAD 如何实现 SPICE：引擎、符号与工作流程](/v4/SPICE-Tutorial-11/)

## 视频演示
{: #video-walkthroughs}

五段简短视频演示了最适合通过观看控件操作来学习的步骤。
视频使用浏览器中的 TinyCAD 和捆绑的 ngspice。请在课程内嵌播放器中播放，
或在 Markdown 查看器中使用以下链接：

| 课程 | 演示 |
| --- | --- |
| 1 | [打开、运行并更改分压器](/v4/videos/simulation-tutorials/spice/first-run.mp4) |
| 3 | [信号源设置与波形预览](/v4/videos/simulation-tutorials/spice/source-settings.mp4) |
| 4 | [RC 充电、时间步长与时间常数](/v4/videos/simulation-tutorials/spice/rc-transient.mp4) |
| 5 | [交流幅值、dB、相位与截止频率](/v4/videos/simulation-tutorials/spice/ac-response.mp4) |
| 6 | [测量稳定后的整流纹波](/v4/videos/simulation-tutorials/spice/rectifier-ripple.mp4) |

视频用于补充书面说明和图示。方程、假设和预期值请参阅章节
正文。桌面版菜单与浏览器版有所不同；请在桌面版中使用 File → Open Example。

## XSPICE 与数字仿真
{: #xspice-and-digital-simulation}

1. [模型、桥接器与首次运行](/v4/XSPICE-Tutorial-01/)
2. [逻辑门与真值表](/v4/XSPICE-Tutorial-02/)
3. [传播延迟与冒险](/v4/XSPICE-Tutorial-03/)
4. [触发器、时钟与复位](/v4/XSPICE-Tutorial-04/)
5. [计数器与分频时钟](/v4/XSPICE-Tutorial-05/)
6. [混合信号滤波与未知状态](/v4/XSPICE-Tutorial-06/)

XSPICE 示例需要使用 TinyCAD Desktop 的原生引擎。普通 SPICE
示例使用模拟模型，但本套示例的数值验证
使用捆绑的原生 ngspice 47 完成。原生运行成功并不
表示已测试每一种浏览器/版本组合。

电路图由重新打开的 TinyCAD 绘图渲染而成。结果图
是实际求解器数据的曲线，而非手绘的预期波形。图注会单独
标明应用程序截图。模型、温度、时间步长或引擎
版本改变时，数值与印刷值略有差异是正常的。


## 手册参考
{: #manual-reference}

有关当前控件、模型、分析设置、图表和故障排除，请参阅[仿真](/v4/Simulation/)和[捆绑示例](/v4/Bundled-Examples/)。桌面版中的入口为 **File → Open Example** 和 **View → View Explanation**。

## 模拟电路绘图下载
{: #analogue-drawing-downloads}

请使用捆绑示例浏览器，或在此处下载绘图并在 TinyCAD 中打开。网表以文本形式单独提供。

| 示例 | 绘图 | 网表 |
| --- | --- | --- |
| amp-ac | [TinyCAD 绘图](/v4/examples/simulation-tutorials/spice/amp-ac.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/amp-ac.cir) |
| amp-bias | [TinyCAD 绘图](/v4/examples/simulation-tutorials/spice/amp-bias.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/amp-bias.cir) |
| amp-clipping | [TinyCAD 绘图](/v4/examples/simulation-tutorials/spice/amp-clipping.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/amp-clipping.cir) |
| amp-small-signal | [TinyCAD 绘图](/v4/examples/simulation-tutorials/spice/amp-small-signal.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/amp-small-signal.cir) |
| controlled-source | [TinyCAD 绘图](/v4/examples/simulation-tutorials/spice/controlled-source.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/controlled-source.cir) |
| dc-sweep | [TinyCAD 绘图](/v4/examples/simulation-tutorials/spice/dc-sweep.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/dc-sweep.cir) |
| divider | [TinyCAD 绘图](/v4/examples/simulation-tutorials/spice/divider.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/divider.cir) |
| rc-ac | [TinyCAD 绘图](/v4/examples/simulation-tutorials/spice/rc-ac.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/rc-ac.cir) |
| rc-noise | [TinyCAD 绘图](/v4/examples/simulation-tutorials/spice/rc-noise.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/rc-noise.cir) |
| rc-pz | [TinyCAD 绘图](/v4/examples/simulation-tutorials/spice/rc-pz.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/rc-pz.cir) |
| rc-step | [TinyCAD 绘图](/v4/examples/simulation-tutorials/spice/rc-step.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/rc-step.cir) |
| rc-tf | [TinyCAD 绘图](/v4/examples/simulation-tutorials/spice/rc-tf.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/rc-tf.cir) |
| rectifier | [TinyCAD 绘图](/v4/examples/simulation-tutorials/spice/rectifier.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/rectifier.cir) |
| source-current | [TinyCAD 绘图](/v4/examples/simulation-tutorials/spice/source-current.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/source-current.cir) |
| source-dc | [TinyCAD 绘图](/v4/examples/simulation-tutorials/spice/source-dc.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/source-dc.cir) |
| source-exponential | [TinyCAD 绘图](/v4/examples/simulation-tutorials/spice/source-exponential.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/source-exponential.cir) |
| source-fm | [TinyCAD 绘图](/v4/examples/simulation-tutorials/spice/source-fm.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/source-fm.cir) |
| source-pulse | [TinyCAD 绘图](/v4/examples/simulation-tutorials/spice/source-pulse.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/source-pulse.cir) |
| source-pwl | [TinyCAD 绘图](/v4/examples/simulation-tutorials/spice/source-pwl.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/source-pwl.cir) |
| source-sine | [TinyCAD 绘图](/v4/examples/simulation-tutorials/spice/source-sine.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/source-sine.cir) |
| source-triangle | [TinyCAD 绘图](/v4/examples/simulation-tutorials/spice/source-triangle.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/source-triangle.cir) |

## XSPICE 绘图下载
{: #xspice-drawing-downloads}

请使用捆绑示例浏览器，或在此处下载绘图并在 TinyCAD 中打开。网表以文本形式单独提供。

| 示例 | 绘图 | 网表 |
| --- | --- | --- |
| logic-buffer | [TinyCAD 绘图](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |
| logic-counter | [TinyCAD 绘图](/v4/examples/simulation-tutorials/xspice/logic-counter.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/xspice/logic-counter.cir) |
| logic-dff | [TinyCAD 绘图](/v4/examples/simulation-tutorials/xspice/logic-dff.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/xspice/logic-dff.cir) |
| logic-filter | [TinyCAD 绘图](/v4/examples/simulation-tutorials/xspice/logic-filter.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/xspice/logic-filter.cir) |
| logic-hazard | [TinyCAD 绘图](/v4/examples/simulation-tutorials/xspice/logic-hazard.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/xspice/logic-hazard.cir) |
| logic-nand | [TinyCAD 绘图](/v4/examples/simulation-tutorials/xspice/logic-nand.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/xspice/logic-nand.cir) |
| logic-unknown | [TinyCAD 绘图](/v4/examples/simulation-tutorials/xspice/logic-unknown.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/xspice/logic-unknown.cir) |

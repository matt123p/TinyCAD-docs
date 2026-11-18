---
layout: default
title: 6. Diodes, rectification and ripple
---
# 6. 二极管、整流与纹波
{: #diodes-rectification-and-ripple}

[上一页](/v4/SPICE-Tutorial-05/) · [目录](/v4/Simulation-Tutorials/) · [下一页](/v4/SPICE-Tutorial-07/)

本章中的示例随 TinyCAD 一同提供。选择 **打开示例 → SPICE 教程**，选中命名的示例，然后选择 **打开图纸**。无需下载。

打开 **rectifier**。一个峰值为 5 V、频率为 50 Hz 的正弦波驱动
二极管、100 µF 储能电容和 1 kΩ 负载。运行已保存的 200 ms
瞬态分析，并绘制 IN 和 OUT。


## 跟踪一个周期中的电流
{: #follow-the-current-through-a-cycle}

当输入电压足够高于电容电压时，二极管导通，为电容补充电荷。输入电压
达到峰值后，二极管截止。随后电容为负载供电，其电压逐渐下降，直到下一次充电
期间。在这些电压下，二极管会阻断反向导通，因此负输入半周期不会使电容电压变为
负值。

二极管并不是具有固定 0.7 V 压降的理想开关。其嵌入式 `TC_D`
模型包含非线性的电流/电压关系和串联电阻。正向压降会随电流、温度和模型参数而
变化。本教程使用的是通用模型，并不代表所购二极管的性能保证。

## 测量稳定后的时间窗口
{: #measure-a-settled-window}

最初几个周期包含启动过程。若要获得可重复的纹波测量结果，请使用
**From = 160 ms** 和 **To = 200 ms**。参考仿真结果如下：

| OUT 测量值 | 近似结果 |
| --- | --- |
| 平均电压 | 3.90 V |
| 最小值 | 3.56 V |
| 最大值 | 4.24 V |
| 峰峰值纹波 | 0.684 V |
| 总 RMS | 3.908 V |

平均值是直流电平。总 RMS 包含该电平以及纹波。
**纹波 RMS** 会先去除平均值再计算 RMS，因此是
另一个不同的量。总 RMS 较高并不意味着交流纹波较大。

粗略估算`ΔV ≈ Iload / (f × C)`使用 3.9 mA、50 Hz 和 100 µF 得出约 0.78 V。
它与仿真的 0.684 V 存在差异，这一点很有启发性：该估算假定负载电流近似恒定且电容瞬时充电，而实际上
电阻中的电流会变化，二极管也会在有限时间内导通。

## 视频：测量整流器稳定后的纹波
{: #video-measuring-settled-rectifier-ripple}

设置 160–200 ms 的测量窗口，并比较平均电压与峰峰值纹波。

{% include video-player.html src="/v4/videos/simulation-tutorials/spice/rectifier-ripple.mp4" poster="/v4/videos/simulation-tutorials/spice/rectifier-ripple.jpg" caption="测量整流器稳定后的纹波。" %}

[观看或下载视频](/v4/videos/simulation-tutorials/spice/rectifier-ripple.mp4)。

### 电路与参考结果
{: #circuit-and-reference-results}

![半波整流器和储能电容](/v4/images/simulation-tutorials/spice/rectifier-circuit.png)

![计算得到的启动过程和稳态纹波](/v4/images/simulation-tutorials/spice/rectifier-results.png)

## 展示权衡关系的实验
{: #experiments-that-reveal-the-trade-offs}

将 C1 加倍至 200 µF。纹波应会减小，但充电会以更短、更集中的脉冲
进行。将负载电阻减半至 500 Ω：负载汲取更多电流，平均电压下降，纹波增大。若要查看二极管
电流，可请求其支持的器件电流测量，或在二极管路径中串联一个
电流探针。减小最大时间步长，以检查是否能解析出较短的导通峰值。

这里的电源是理想的。实际变压器、发生器或电源具有阻抗，会改变充电电流和压降。
添加串联电阻以探索这种影响。器件功率和峰值电流是有用的仿真
输出，但这个简单模型不会自动预测电容发热、浪涌额定值
或二极管结温。

## 为什么交流分析不是首选测试
{: #why-ac-analysis-is-not-the-right-first-test}

主要行为是幅度很大的非线性变化，其中导通会反复开启和关闭。
围绕某个偏置点进行的小信号交流分析无法重现
整流、启动或纹波。对于这些问题，请使用瞬态分析。
相反，直流扫描适合绘制二极管的静态电流/电压
特性。应根据要研究的物理问题选择分析方法，而不是
根据哪种曲线最容易生成来选择。

## 下载课程电路
{: #download-the-lesson-circuits}

相同的示例已可在 **打开示例** 中找到。若要获取独立副本，请下载一个 `.dzn` 图纸，并在 TinyCAD 中使用 **文件 → 打开**。配套的 `.cir` 是供查看或在兼容的外部仿真器中使用的 SPICE 文本，并非 TinyCAD 图纸。要重新运行 XSPICE 电路，需要 Desktop 版本。

| 示例 | 图纸 | 网表 |
| --- | --- | --- |
| rectifier | [TinyCAD 图纸](/v4/examples/simulation-tutorials/spice/rectifier.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/rectifier.cir) |

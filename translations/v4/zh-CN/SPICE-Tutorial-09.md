---
layout: default
title: 9. Amplifier waveform, clipping and power usage
---
# 9. 放大器波形、削波与功耗
{: #amplifier-waveform-clipping-and-power-usage}

[上一章](/v4/SPICE-Tutorial-08/) · [目录](/v4/Simulation-Tutorials/) · [下一章](/v4/SPICE-Tutorial-10/)

本章示例已随 TinyCAD 一同打包。选择 **打开示例 (Open Example) → SPICE 教程 (SPICE tutorial)**，选择指定示例，然后选择 **打开绘图 (Open Drawing)**。无需下载。

打开 **amp-small-signal**。VIN 提供峰值为
10 mV、频率为 1 kHz 的正弦波。瞬态分析持续 12 ms，最大步长为 2 µs。
比较 IN 和 OUT，然后测量最后四个周期，即 8 ms 至 12 ms 之间的波形。

![测得的小信号放大器波形](/v4/images/simulation-tutorials/spice/amp-small-signal-results.png)

AC 分析结果预测 OUT 端的峰值约为 8.92 mV，且相对于输入信号反相。
瞬态分析在测量窗口内得到约 −8.87 至 +8.99 mV，
RMS 值为 **6.304 mV**。正负峰值之间的微小差异
反映了非线性模型和残余瞬态效应。

## 计算负载功率和电源消耗
{: #calculate-load-power-and-supply-consumption}

对于纯电阻 RL，瞬时功率为 `pL(t) = vOUT(t)² / 8`。
因此，平均负载功率等于 `VOUT,RMS² / 8`，其中包括
所选时间段内的任何直流分量。在小信号输入下，该值约为 **4.97 µW**。

电源提供的功率为 `−12 × mean(i(VCC))`，约为 **264.61 mW**。
即使音频信号很微弱，偏置电路仍会消耗大部分功率。
在此输入下，负载功率与电源功率之比仅约为 **0.00188%**。
这是针对所选边界和时间窗口计算的电效率，并非
声效率，也不是对电路的一般性额定指标。

在 TinyCAD 中，为 VCC 和 RL 添加元件功率测量，然后选择 **平均值 (Mean)**，
并将 From/To 设为 8 ms 和 12 ms。电源提供能量时，其吸收功率为负值；将其取反即可得到输入功率。功率的**积分 (Integral)** 给出
以焦耳为单位的能量。对于模型不支持的电流或功率指标，不得
用猜测的零值代替。

## 增大输入，直到线性预测失效
{: #increase-input-until-the-linear-prediction-fails}

打开 **amp-clipping**。仅 VIN 的幅度发生变化，
增至峰值 500 mV。线性外推会预测 OUT 端的峰值在正负方向上均约为 446 mV。但计算得到的波形并非如此。

![计算得到的不对称大信号输出](/v4/images/simulation-tutorials/spice/amp-clipping-results.png)

在相同的 8–12 ms 窗口内，输出约在
**−0.162 至 +0.389 V** 之间变化，RMS 值为 **0.2126 V**。电源消耗约为
**315.23 mW**；总电阻负载功率为 **5.65 mW**，该窗口内的电
效率约为 **1.79%**。在这段有限的采集时间内，输出平均值约为
31 mV。若要计算仅由交流信号产生的负载功率，先减去平均值
再平方：应使用纹波 RMS，而非总 RMS。

射极跟随器可以主动输出电流，但其下拉通路受偏置网络限制。很低的负载电阻会凸显这种不对称性。不要将所有看起来平坦的区域都简单地称为“触及电源
轨”：应检查 EMITTER、COLLECTOR 和器件电流，以确定其工作机制。

## 使测量结果可靠可信
{: #make-the-measurement-defensible}

使用完整周期，注明时间窗口；若研究稳态运行，则排除启动阶段。延长仿真时间后再次测量，观察窗口平均值和功率是否稳定。减小最大步长，并比较极值和 RMS；求解器的采样点通常并非等间隔，因此应使用按时间加权的计算。对所有采样值求算术平均可能会使结果偏向边缘区域，因为求解器在这些区域会采集更多样本。

失真波形不能使用 `peak/√2` 从峰值换算为 RMS。
该公式仅适用于正弦波。同样，晶体管的电功率不会自动决定其温度：热阻、环境条件和随温度变化的模型都是额外需要的信息。

尝试将 RL 增大到 80 Ω，并比较波形对称性、电压增益和
输出功率。电压摆幅增大不一定意味着功率更大，
因为负载电阻也发生了变化。

## 下载课程电路
{: #download-the-lesson-circuits}

相同的示例已可在 **打开示例 (Open Example)** 中找到。如需独立副本，请下载 `.dzn` 绘图，并在 TinyCAD 中使用 **文件 (File) → 打开 (Open)**。配套的 `.cir` 是供检查或用于兼容外部仿真器的 SPICE 文本，并非 TinyCAD 绘图。XSPICE 电路需要 Desktop 才能重新运行仿真。

| 示例 | 绘图 | 网表 |
| --- | --- | --- |
| amp-small-signal | [TinyCAD 绘图](/v4/examples/simulation-tutorials/spice/amp-small-signal.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/amp-small-signal.cir) |
| amp-clipping | [TinyCAD 绘图](/v4/examples/simulation-tutorials/spice/amp-clipping.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/amp-clipping.cir) |

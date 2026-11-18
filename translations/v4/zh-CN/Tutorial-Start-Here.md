---
layout: default
title: "Start here: how to use these tutorials"
---
# 从这里开始：如何使用这些教程
{: #start-here-how-to-use-these-tutorials}

[目录](/v4/Simulation-Tutorials/) · [下一篇：你的第一个 SPICE 仿真](/v4/SPICE-Tutorial-01/)

这些教程将讲解与可在 TinyCAD 中运行和修改的电路结合起来。 **示例已随 TinyCAD 一同提供。** 学习这些课程无需下载教程 ZIP、在磁盘上查找图纸，也无需安装单独的 SPICE 程序。

如果你刚接触仿真，请从 SPICE 课程开始。课程先介绍电压、电流和简单电路，然后逐步讲解波形、滤波器、放大器和设计研究。单独的 XSPICE 课程涵盖事件驱动逻辑和混合信号仿真。请使用 **TinyCAD Desktop** 学习该课程；浏览器引擎不包含 XSPICE。

## 查找并打开捆绑示例
{: #find-and-open-the-bundled-examples}

1. 打开 TinyCAD，在浏览器标题栏右侧查找 **Open Example**，或在 Desktop 中选择 **File → Open Example**。此命令带有打开文件夹图标。它会打开示例浏览器。
2. 模拟电路课程请选择 **SPICE tutorial**，数字电路课程请选择 **XSPICE and digital tutorial**。这些分组也会显示在浏览器的导航区域中。
3. 在该分组的 **Drawings** 列表中，选择课程中提到的示例。首次尝试时，请在 **SPICE tutorial** 中选择 **divider**。
4. 阅读说明并查看电路预览。选择示例会显示其详细信息，但尚不会替换你的图纸。
5. 在浏览器底部选择 **Open drawing**。TinyCAD 会打开该示例的可编辑副本。如果有未保存的工作，请先处理保存提示，再继续。

简短指令 **Open Example → SPICE tutorial → divider → Open drawing** 表示以上相同步骤。**divider**、**rc-ac** 或 **logic-counter** 这样的名称是此浏览器中的示例名称，并非需要查找的文件名。

使用 **Search groups and examples** 查找指定示例。如果筛选条件隐藏了你需要的内容，请清除搜索，并使用 **All groups** 返回分组列表。选择示例后，**Open drawing** 才会变为可用。
**Start here — using the tutorials** 条目也会显示本指南，并打开同一个初始 divider 电路。

观看[打开、运行并修改分压器](/v4/videos/simulation-tutorials/spice/first-run.mp4)，了解这些步骤以及首次进行两项测量的带字幕演示。

## 对照电路学习课程
{: #follow-a-lesson-alongside-its-circuit}

在 TinyCAD 中操作时，请在手册或 Markdown 查看器中保留本章内容。示例浏览器也会显示相关课程说明。每章开头都会列出所用的内嵌示例。有些章节会使用多个示例：例如，信号发生器章节提供了不同的信号源示例，方便你一次研究一种波形。

每次实验都按以下步骤进行：

1.  **阅读问题。** 确定要研究的内容：直流电压、充电时间、截止频率、逻辑状态或其他量。
2.  **检查电路。** 找出信号源、接地端、元件值和命名信号。IN 和 OUT 这样的标签表示电气节点；R1 和 C1 这样的标号表示元件。
3.  **检查已保存的设置。** 选择  **Simulation**  工作表并查看  **Setup** 。示例已经包含课程所需的分析设置和模型。
4. 根据本章的说明或方程 **预测结果** 。
5. 选择  **Run** ，然后将新采集的结果与预期值和图表进行比较。除了波形形状，也要检查数值。
6. 按课程建议 **修改一项内容** ，预测其影响，然后再次运行。记录修改的设置和结果。

打开示例后，在浏览器标题栏选择 **Explanation**，或在 Desktop 中选择 **View → View Explanation**，即可在图纸旁查看说明。说明面板与仿真图表并列显示，可以单独调整大小或关闭。在浏览器标题栏再次选择 **Explanation**，或在 Desktop 中选择 **View → View Explanation**，即可重新打开说明面板。

工具栏上脉冲形状的图标悬停文本为 **Simulation**。课程中提到 **Simulation → Show charts** 或 **Simulation → SPICE components** 时，请打开该图标的菜单。**Simulation 工作表**是图纸中的一个独立选项卡，包含实验的设置和结果视图。

![包含第一个分压器电路及其仿真图表面板的 TinyCAD](/v4/images/simulation-tutorials/spice/tinycad-first-run.png)

此应用程序截图展示了打开后的分压器，电路下方是工作表选项卡，右侧是图表面板。主要起始位置包括电路、Simulation 工作表和 **Run**。

## 了解预期输出
{: #understand-the-expected-outputs}

电路图展示了需要查看的布局和连接。结果图显示求解器计算的参考数据。应用程序截图展示了在 TinyCAD 中的操作位置。你的窗口大小、缩放比例和图表颜色可能不同；请比较电路值、信号、单位和分析设置。

对于未修改的 **divider** 示例，信号源为 5 V，两个电阻均为 1 kΩ。运行工作点分析后，预期 IN = **5 V**、OUT = **2.5 V**，信号源电流 `v1#branch` = **−2.5 mA**。工作点分析为每个信号提供一个值，因此不会生成随时间变化的波形。第一课会解释电流符号和分压器的计算方法。

图纸中包含保留的参考采集结果，因此按下 **Run** 之前就可能已经显示结果。这些是先前运行时保存的结果。修改电路或其设置后，请重新运行并检查新采集的结果。数值略有差异是正常的；若差异较大，则应检查元件值、模型假设、单位和测量窗口。

## 保留实验并恢复原始状态
{: #keep-experiments-and-return-to-the-original}

内嵌示例会以可编辑副本的形式打开。使用 **Save As** 将工作保存为有意义的名称，例如带有不同下侧电阻的分压器。保存副本不会更改随软件提供的原始示例。

要重置实验，请通过 **Open Example** 再次打开指定示例。出现提示时，保存你想保留的更改。这样会恢复示例的原始电路、设置和保留的参考结果。章节切换到另一个示例时，也请使用相同的流程。

常规保存可以将已采集的结果与图纸一同保存。**Save without results** 会保留电路和设置，但不保存存储的结果；下次需要结果时，请重新运行仿真。

## 选择学习路径
{: #choose-your-route-through-the-material}

| 你的目标 | 从这里开始 |
| --- | --- |
| 从头学习仿真 | [SPICE 第 1 章](/v4/SPICE-Tutorial-01/)，然后按顺序学习后续章节 |
| 了解 TinyCAD 的引擎、符号和控件 | [TinyCAD 如何实现 SPICE](/v4/SPICE-Tutorial-11/) |
| 选择输入波形 | [信号发生器](/v4/SPICE-Tutorial-03/) |
| 研究重建的 AMP.DSN 放大器 | [放大器偏置](/v4/SPICE-Tutorial-07/)，然后学习增益和功率 |
| 学习事件驱动数字仿真 | [XSPICE 第 1 章](/v4/XSPICE-Tutorial-01/)，使用 Desktop |

每章顶部的链接可返回目录或前往下一课。你可以随时重新查看之前的示例。如果实验失败，请阅读其 **Diagnostics** 视图，并与刚打开的内嵌示例进行比较，再进行其他更改。

## 当前 Circuit Explorer 控件
{: #current-circuit-explorer-controls}

选择 Simulation 工作表，打开 **Setup** 并滚动到 **Circuit Explorer**。使用 **Add tools** 添加 Measurements、Tune / sweep、Requirements、DC overlay 或 Analysis lab。已配置的工具会显示在左侧；图表面板仍是独立视图。选中 Simulation 工作表时，主工具栏中会显示 **Run** 和 **Stop**。当前参考资料请参阅[图表、测量和 Circuit Explorer](/v4/Simulation-Charts-and-Measurements/)。

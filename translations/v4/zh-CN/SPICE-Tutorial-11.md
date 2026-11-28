---
layout: default
title: 11. How TinyCAD implements SPICE
---
# 11. TinyCAD 如何实现 SPICE
{: #how-tinycad-implements-spice}

[上一步：设计研究](/v4/SPICE-Tutorial-10/) · [目录](/v4/Simulation-Tutorials/) · [XSPICE 课程](/v4/XSPICE-Tutorial-01/)

TinyCAD 提供原理图编辑器、仿真设置、仪器、图表和测量功能。**ngspice** 是其底层电路求解引擎。你在 TinyCAD 中绘制并配置实验；TinyCAD 将其转换为 SPICE 电路文本，运行 ngspice，并显示返回的结果。

本章中的示例随 TinyCAD 一同提供。选择 **Open Example →
SPICE tutorial**，选择 **divider** 或 **rc-ac**，然后选择 **Open Drawing**。
对于数字演示，请使用 **Open Example → XSPICE and digital tutorial →
logic-buffer → Open Drawing**。无需下载教程或模型。

## SPICE、ngspice 和 XSPICE
{: #spice-ngspice-and-xspice}

SPICE 使用元件、相连的节点和数学器件模型来描述电路。工作点分析用于求解其直流方程。瞬态分析则跟踪电路随仿真时间变化的行为。AC 分析会围绕电路的偏置点进行线性化，以计算小信号频率响应。因此，选择分析类型是定义实验的一部分。

ngspice 是一种开源混合信号电路仿真器，源自 Berkeley SPICE。TinyCAD 随附其引擎，因此你无需安装并运行单独的命令行仿真器。用于验证这些教程的引擎版本为 **ngspice 47**；运行的 **Diagnostics** 视图会标明其后端和构建版本。有关上游项目背景，请参阅[官方 ngspice 概览](https://ngspice.sourceforge.io/presentation.html)
。

**XSPICE 是集成到 ngspice 中的扩展**，而不是需要另外启动的应用程序。它加入了代码模型，包括功能性模拟模块，以及可与模拟求解器协调事件的数字逻辑。因此，在同一次仿真中，数字状态变化可以影响模拟电路。[官方 XSPICE 介绍](https://ngspice.sourceforge.io/xspice.html)
说明了这种区别。

| TinyCAD 环境 | 引擎的运行方式 | 应使用的示例 |
| --- | --- | --- |
| 桌面版 | 单独的原生求解器进程，并搭配捆绑的 XSPICE 代码模型库 | 模拟 SPICE 和 XSPICE 课程 |
| 浏览器版 | 编译为 WebAssembly 的 ngspice，在单独的 Web Worker 中运行 | 模拟 SPICE 和兼容的模拟行为模型；此构建不包含 XSPICE |

TinyCAD 会根据其运行环境选择后端。对于随附示例，无需查找 ngspice 可执行文件或选择外部仿真器。XSPICE 原理图可以包含其模型定义，但仍需 Desktop 随附的原生代码模型库。在浏览器中打开该原理图并不会增加引擎功能。

## 从绘图到结果
{: #from-drawing-to-result}

主要阶段如下：

1. **确定电气连接。** TinyCAD 根据导线、连接点和网络标签，判断哪些元件引脚属于同一网络。除非绘图中实际连接了网络，否则导线交叉并不构成连接。相同的网络标签会连接相距较远的点；仅仅绘制在导线附近的文本则不会。
2. **展开元件定义。** 每个用于仿真的符号都提供一个 SPICE 模板。TinyCAD 会替换其中的参考标号、连接的节点名称和值，并包含所需的器件或子电路定义。
3. **添加实验设置。** Simulation 工作表提供分析类型、温度、参数、模型附件和所需信号。提交电路前，TinyCAD 会检查缺失模型、未解析引脚、重复参考标号以及其他可检测的设置错误。
4. **运行 ngspice。** 求解器计算电压、电流及其他请求的量，并返回数据和诊断日志；TinyCAD 将它们收集到一个采集记录中，该记录关联着本次运行的设置和引擎身份信息。
5. **查看和测量。** TinyCAD 显示图表、数值数据和计算所得的测量结果。例如，截止频率测量是根据 AC 数据推导出来的；它不是插入原理图的另一个元件。

这也说明了为什么仅有看起来正确的图形是不够的：晶体管需要模型和正确的引脚映射，而两根导线即使在当前缩放比例下看起来端点很近，也必须在电气上真正连接。

## 应使用哪些符号？
{: #which-symbols-should-i-use}

打开工具栏上的**脉冲形图标**。悬停提示为 **Simulation**。下文中的 **Simulation → …** 指的就是此图标的菜单。

| 需要的内容 | 查找位置 | 检查事项 |
| --- | --- | --- |
| 电阻、电容、电感、二极管、LED、NPN/PNP 晶体管或 741 运算放大器 | **Simulation → SPICE components**，或 **SPICE essentials** 库 | 数值、极性、电源和模型假设 |
| 独立电压/电流激励源 | **Simulation → SPICE → Insert Source** | 源类型、信号形状、单位和连接方向 |
| 参考节点 | **Simulation → SPICE → Insert Ground** | 进行电气连接；SPICE 的参考节点为节点 `0` |
| 电压观测 | SPICE 子菜单中的 **Insert Probe** 或 **Insert Differential Probe** | 单端电压是相对于地测量的；差分探针测量其两端之间的电压 |
| 支路电流观测 | **Simulation → SPICE → Insert Current Probe** | 串联插入，并检查正方向 |
| 受控源 | **Simulation → SPICE → Insert Controlled Source** | 控制端、输出端以及增益/跨导 |
| 台式仪器 | **Simulation → Lab Equipment** | 示波器、万用表、函数发生器和台式电源设置；仪器的负载和限值很重要 |
| 普通建模逻辑器件 | **Digital logic** 库 | 这些可配置的便携式 SPICE 模型不同于事件驱动的 XSPICE 示例；请检查电源引脚和模型属性 |
| 事件驱动的 XSPICE 逻辑器件 | 内嵌的 **XSPICE and digital tutorial** 示例 | 使用 Desktop，并保留模型中的模拟/数字桥接器 |

SPICE essentials 库提供了常见器件的即用配置示例。通用晶体管或 741 风格的模型适合学习，但其仿真行为并不自动等同于某个制造商特定器件的规格。运算放大器章节明确说明了用于替代原有 `AMP.DSN` 器件的通用模型。

来自其他库的符号可能仅用于绘图。选中已放置的符号，并检查其属性中的 **SPICE** 选项卡。它需要有效的 SPICE 模板，以及该模板引用的任何模型定义。名称、封装或图样相符，并不会自动添加这些定义。同样，名为 `VCC` 的标签只是命名一个网络，并不会产生电源电压。请将实际电源连接到该网络。

## 运行现有实验
{: #run-an-existing-experiment}

1. 选择 **Open Example → SPICE tutorial → divider → Open Drawing**。
2. 选择其 **Simulation** 工作表。在 **Setup** 下，已保存的分析为 **Measure DC — Operating Point**。电路使用一个 5 V 电源和两个 1 kΩ 电阻。
3. 选择 **Run**。如果图表面板隐藏，请使用 **Simulation → Show charts**。
4. 检查 `in`、`out` 和 `v1#branch`。预期结果分别为 **5 V**、**2.5 V** 和 **−2.5 mA**。电源电流的定义方向是流入正端，因此此处供电的电源电流为负值。
5. 在电路工作表上将 R2 改为 `2k`，然后重新运行。预期 OUT 变为约 **3.333 V**。保留的旧采集记录仍然描述之前的电路；更改数值不会改写其结果。

![TinyCAD 的 Simulation 工作表，显示 RC AC 分析和截止结果](/v4/Images/simulation-tutorials/spice/tinycad-ac-setup.png)

此应用程序截图显示了另一个内嵌示例 **rc-ac** 的 **Setup** 视图。其 1 kΩ/1 µF 滤波器的截止频率约为 **159.15 Hz**。打开该示例，可将频域实验与分压器的单个直流工作点进行比较。

**Run** 会使用所选分析启动一次有限时长的采集。**Stop** 会终止求解器并保留已接受的样本；这些样本属于部分结果，并不能证明请求的仿真时长已完成。这些构建版本不提供暂停/恢复功能，也不提供无限期运行的实时求解器。使用 **History** 查看以前的运行，使用 **Diagnostics** 阅读求解器日志。

观看[打开、运行并更改分压器](/v4/videos/simulation-tutorials/spice/first-run.mp4)
和 [AC 响应与截止频率](/v4/videos/simulation-tutorials/spice/ac-response.mp4) 演示。两段视频均带有字幕，展示了真实的桌面控件、完成的原生采集和数值结果。

## 构建你的第一个仿真
{: #build-your-own-first-simulation}

从 **Simulation → SPICE components** 放置两个电阻，使用 **Insert Source** 放置一个电源，并使用 **Insert Ground** 放置一个接地符号。将它们排列成分压器：电源正端接 R1，R1 接 R2，R2 再接回电源负端和地。将两个电阻都设为 `1k`，将电源设为 5 V DC，并分别将电源网络标记为 `IN`、中点标记为 `OUT`。
确保每个元件都有唯一的参考标号，例如 R1、R2 和 V1。

选择 **Simulation → Simulate** 以创建 Simulation 工作表。在 **Setup** 下选择 **Measure DC — Operating Point**，然后选择 **Run**。你应得到与内嵌分压器相同的数值。如果运行失败，请将连接、电源设置和 SPICE 属性与可正常工作的示例进行比较。

要进行瞬态实验，请选择 **Over time — Transient**，设置持续时间和最大步长，并配置随时间变化的电源。对于 AC 分析，请选择 **Frequency response — AC**，设置频率范围和每十倍频程的点数，并为输入电源指定非零的 **AC amplitude**，通常为 1 V。其正弦频率和瞬态幅值不会决定 AC 扫频。TinyCAD 还提供 DC 扫描、噪声、传递函数和极零点分析；前面的章节介绍了各自的适用场景。

## 检查生成的 SPICE 并添加模型
{: #inspect-the-generated-spice-and-add-models}

运行分压器后，打开 **Diagnostics → Generate circuit text**。关键行如下；TinyCAD 还会添加温度和已保存的信号指令：

```spice
R1 IN OUT 1k
R2 OUT 0 1k
V1 IN 0 DC 5 AC 0 0
.op
.end
```

`R1 IN OUT 1k` 表示连接在节点 IN 和 OUT 之间的 1 kΩ 电阻。`0` 是参考节点。这些文本明确说明了连接和电源极性。需要单独检查或运行网表时，请使用 **Export circuit**。TinyCAD 的 Simulation 工作表负责管理 `.op`、`.tran`、`.ac` 及其他分析命令；不要将它们或 `.end` 粘贴到元件的 SPICE 属性中。

对于 TinyCAD 目录中已有的器件，请使用[捆绑的 SPICE 模型](../Bundled-SPICE-Models/) 来选择定义并验证其引脚映射。对于需要外部文件的 Custom 定义，请展开 **Setup → SPICE models**。选择一个 `.lib`、`.cir` 或 `.mod` 文件，或者输入其文件名和模型文本。无论使用哪种方式，都要选择 **Save model** 将其附加。使用简单的文件名，例如 `device.lib`。然后配置符号的 SPICE 模板，以实例化相应的器件或 `.SUBCKT`，并在需要时包含该附件，例如在其前导部分使用 `.include device.lib`。仅附加文件并不会将其映射到符号。

请根据模型的端子顺序核对符号的**引脚编号**，而不要依据这些引脚在页面上的表面位置。三端晶体管模型与制造商子电路可能使用不同的节点顺序。还要验证所有嵌套模型引用：被包含的文件也必须附加到 Simulation 工作表。模型定义和附件会随保存的图纸一同保存。

TinyCAD 支持嵌入模型文本，但不支持任意 ngspice 命令脚本或外部可执行模块。`.control` 区块、Shell 命令、外部模块加载以及基于文件的激励源/模型均不属于此工作流程支持的内容。请使用受支持的电源控件和分析功能，或导出电路，以便使用命令行 ngspice 单独进行实验。为其他 SPICE 方言编写的供应商模型可能需要调整后 ngspice 才能接受。

## 数字仿真如何融入其中
{: #how-digital-simulations-fit-in}

在 Desktop 上打开 **XSPICE and digital tutorial → logic-buffer**。其 X1 模型包含一个模拟转数字桥接器、一个事件驱动缓冲器和一个数字转模拟桥接器。普通电源驱动模拟输入；桥接器使逻辑状态能够以电压形式显示在 TinyCAD 的图表中。

![内嵌 XSPICE 缓冲器计算得到的输入和输出](/v4/Images/simulation-tutorials/xspice/logic-buffer-results.png)

运行已保存的瞬态仿真。预期会看到周期为 1 µs 的 0–5 V 脉冲，输出跃迁延迟约 20 ns，且边沿有限。放大图表以检查延迟。此图绘制的是该示例中求解器实际返回的结果。

模型的数字节点不是普通电压节点。桥接器的阈值以及它对未定义状态的表示方式都是经过考虑的建模选择。使用模拟 SPICE 表达式构建的行为门电路在图表上可能看起来类似，但采用的是不同的仿真方法。继续阅读 [XSPICE 概览](/v4/XSPICE-Tutorial-01/)，了解桥接器、时序、存储和混合信号电路。

## 保存、比较和排查故障
{: #save-compare-and-troubleshoot}

使用 **Save As** 保存实验，以保留内嵌示例的可编辑副本。TinyCAD 可以将采集记录保存在图纸中；**Save without results** 会保留电路和设置，但不保存这些结果。需要进一步分析时，请使用 **Data** 导出 CSV、JSON 或 SPICE 原始数据。记录所用的采集记录、模型和测量窗口。

| 现象 | 首先检查 |
| --- | --- |
| 缺少 SPICE 信息 | 使用带模型的符号，或配置其 SPICE 选项卡 |
| 缺少模型或子电路 | 模型名称、附加文件、include 语句和端子顺序 |
| 电路浮空或缺少接地 | 已连接的 SPICE 地以及适当的直流回路 |
| 有电源标签但没有电源电压 | 将电压源或台式电源连接到已标记的网络 |
| AC 响应为空/为零 | 输入 AC 幅值和所选信号 |
| 浏览器中无法使用 XSPICE 模型 | 在 TinyCAD Desktop 中运行该示例 |
| 绘图与编辑后的数值不符 | 重新运行并选择新的采集记录 |
| 收敛错误或波形不完整 | 阅读 Diagnostics，简化电路，并检查激励边沿、时间步长和模型有效性 |

[ngspice 手册](https://ngspice.sourceforge.io/docs.html) 是了解器件和模型语义的参考资料。TinyCAD 的控件决定了哪些功能可通过其集成工作流程使用。

## 下载课程电路
{: #download-the-lesson-circuits}

这些示例已在 **Open Example** 中提供。若要获取独立副本，请下载 `.dzn` 图纸，然后在 TinyCAD 中使用 **File → Open**。配套的 `.cir` 是供检查或在兼容的外部仿真器中使用的 SPICE 文本，并非 TinyCAD 图纸。要重新运行 XSPICE 电路，必须使用 Desktop。

| 示例 | 图纸 | 网表 |
| --- | --- | --- |
| divider | [TinyCAD 图纸](/v4/examples/simulation-tutorials/spice/divider.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/spice/divider.cir) |
| logic-buffer | [TinyCAD 图纸](/v4/examples/simulation-tutorials/xspice/logic-buffer.dzn) | [SPICE 文本](/v4/examples/simulation-tutorials/xspice/logic-buffer.cir) |

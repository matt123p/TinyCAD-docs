---
layout: default
---
# 仿真与 SPICE
{: #simulation-and-spice}

TinyCAD 可在不离开绘图的情况下运行电子电路仿真、绘制结果图表并测量电路行为。集成引擎为 **ngspice**。浏览器版和桌面应用都包含仿真引擎；使用集成工作流无需单独安装 ngspice。

刚接触仿真？请从[SPICE 引导课程](../SPICE-Tutorial/)开始。若想快速获得第一个结果，请按照下面的分压器步骤操作。本参考说明各项控件及其结果的解读方法。

## 电路仿真器的计算内容
{: #what-a-circuit-simulator-calculates}

SPICE 是 *Simulation Program with Integrated Circuit Emphasis*（集成电路仿真程序）的缩写。仿真器会求解互连电路的数学模型：电阻描述电压与电流的关系，电容和电感储存能量，半导体模型则描述非线性行为。仿真器可以求出直流偏置、计算随时间变化的波形，并研究小信号频率响应。

原理图提供**连接关系**；SPICE 模型提供**行为特性**；分析类型指定**要计算的内容**。这三者都必须正确。看起来逼真的放大器或处理器图形，并不意味着其中包含仿真模型。反过来，一个简单的三角形或矩形也可以包含有用的行为模型。

仿真有助于验证构想、比较元件值以及理解意外响应。结果取决于你提供的模型和条件。理想导线不会产生意外的电阻或电感；通用晶体管模型并不等同于适用于所有晶体管的完整规格。负载、电源阻抗、容差和温度的影响，仅在所选模型能够表示的范围内体现。

## 浏览器版与桌面版引擎
{: #browser-and-desktop-engines}

| 功能 | 浏览器版 | 桌面应用 |
| --- | --- | --- |
| 模拟 SPICE、图表、测量与探索 | 工作进程中捆绑的 WebAssembly ngspice | 通过辅助进程运行的原生 ngspice | 
| 可移植建模数字逻辑 / 功能模块 / 传感器与接口库 | 支持 | 支持 |
| 事件驱动的 XSPICE 代码模型 | 不支持¹ | 支持，捆绑原生代码模型库 |
| 图表弹出窗口 | 支持 | 支持 |
| 虚拟仪器弹出窗口 | 不支持 | 支持 |

¹ 浏览器版可以打开包含已保存 XSPICE 结果的绘图以供查看。运行 XSPICE 需要桌面版。

计算在浏览器或桌面版引擎中本地运行。在线库搜索是单独的功能。当前捆绑的引擎基于 ngspice 47；运行历史会标明采集所用的引擎/构建版本。检查模型语法或引擎之间的差异时，请使用相应版本的上游手册。

## 运行首次仿真
{: #run-your-first-simulation}

1. 在浏览器标题栏中打开 **Open Example**，或在桌面版中选择 **File → Open Example**。
2. 选择 **SPICE tutorial → divider → Open drawing**。
3. 查看电路：一个 5 V 电源为两个串联的 1 kΩ 电阻供电。它们的中点为 **OUT**，底部导线接地，节点为 **0**。
4. 在图纸标签栏中选择 **divider Simulation sheet**。其时钟状图标可将它与原理图图纸区分开。打开 **Setup** 并保留选中的 **Operating Point**。
5. 选择 **Run**。运行完成后，打开 **History** 并选择新完成的采集。
6. 打开 **Data**。中点电压为 **2.5 V**。电源电流为 **−2.5 mA**，因为 ngspice 的电压源电流参考方向指向其正端；在此电路中，供电的电源电流为负值。
7. 更改一个电阻，然后再次运行。将新结果与原始采集进行比较。

{% include video-player.html src="/v4/videos/simulation/first-simulation.mp4" poster="/v4/videos/simulation/first-simulation.jpg" caption="打开捆绑的分压器示例，查看其设置，然后运行一次新的浏览器版 ngspice 采集。Data 表确认 OUT 处电压为 2.5 V，流经电源的电流为 −2.5 mA。" %}

此示例包含保留的参考采集。打开示例后立即看到结果，并不表示已运行新的计算。**History** 会将已保存的结果与通过 Run 创建的采集区分开来。

## 构建新的仿真
{: #build-a-new-simulation}

1. 从 **Standard → SPICE essentials** 放置带模型的元件，或使用工具栏中的 **Simulation → SPICE components** 子菜单。**More…** 会打开完整的 SPICE essentials 元件集。这些符号已预设 [内置模型和引脚映射](../Bundled-SPICE-Models/)。
2. 用导线连接引脚，并为重要节点添加易读的标签。确保电路与地 **0** 有实际连接：使用 **Simulation → SPICE → Insert Ground** 可放置正确的电源符号。
3. 使用 **Simulation → SPICE → Insert Source** 添加激励，并设置其电压/电流类型和波形。若想方便地绘制图表，可添加[探针](../Simulation-Sources-and-Instruments/#probes-and-ground)。
4. 选择 **Simulation → Simulate** 添加一个 **Simulation sheet**。
5. 在 **Setup** 中选择分析类型并设置相关参数。若电路需要，可设置参数或附加自定义模型文本。
6. 选择信号并运行，然后查看 **Simulation charts** 面板以及图纸的 **Data**、**History** 和 **Diagnostics** 视图。请先修复报告中的连线或模型错误，再使用结果数值。

在 Simulation sheet 上，主工具栏会显示 **Run** 和 **Stop**。该图纸初始显示 **Setup**。运行过一次后会显示 **History** 和 **Diagnostics**；有数值数据可用时会显示 **Measurements** 和 **Data**。Setup 中分析设置下方是 Circuit Explorer 工具；请通过 **Add tools** 仅添加所需工具。

绘图中的所有原理图图纸共同组成**一个电路**。每个 Simulation sheet 都有独立的设置：分析类型、参数、附加模型、信号选择、指令和运行历史。添加第二个 Simulation sheet 不会创建一个与原理图电路隔离的第二电路。它可以让你用另一种方式研究同一电路，例如在瞬态分析旁边进行 AC 分析。

每次研究都应使用不同的设置名称。复制设置会复制定义，但不会复制采集。一次只能运行一个采集；扫描和研究会依次运行各个用例。

## 接地、连接与模型
{: #ground-connections-and-models}

SPICE 的电压参考节点是 **0**。具有该确切值的电源符号或网络标签可建立参考点。单独的 **GND** 一词只是普通网络名称，除非还将其连接到节点 0。电路浮空、模型电源引脚未供电以及源回路未连接，是首次运行时常见的问题。

导线必须在连接点处接到引脚。附近的文字并不构成连接。导线碰到另一条导线的端点或元件插座时，即使你无意如此，也可能形成节点。请使用[导线连接规则](../Wires/)和生成的网表来排查含糊不清的绘图。

每个参与仿真的元件都需要有效的模板、模型和引脚映射。使用已放置元件的 **SPICE** 属性检查这些设置。附加厂商模型或改造仅用于绘图的符号之前，请参阅 [SPICE 模型与网表输出](../SPICE-output/)。

## Setup、Run 和 Stop
{: #setup-run-and-stop}

**Run** 会使用当前电路和设置启动新的采集。数据到达时，图表可以同步更新。**Stop** 会终止采集并保留已收到的数据；运行状态和可用性会告知你保留了哪些内容。它不是暂停/继续控件。要重新计算，请再次运行。

修改电路、模型或设置后，之前的结果会归入历史记录。TinyCAD 会标记需要重新运行的结果，而不会把旧值显示成已编辑电路的测量值。History 会记录电路/设置的标识、后端、时间和运行结果。选择较早的采集会显示较早的结果；这不会像撤销操作一样还原旧原理图。

## 保存与共享结果
{: #save-and-share-results}

保存绘图即可保留电路、模型、设置和采集结果。如果绘图包含仿真元件、设置或结果，TinyCAD 会自动使用 **`.dzn`**。**Save without results** 会保留仿真定义和已捕获的标量/报告元数据，同时省略数值波形数组；需要这些数组的图表必须在新采集后才能显示。

每次运行所保留的数值数据上限为 64 MiB，每张绘图上限为 256 MiB，每个设置最多可保存 1,000 次运行。运行时间较长、时间步长较小的研究可能会达到这些上限。请导出重要图表和 CSV 数据，并删除不再需要的结果。将模型附件与绘图一同保存，以免接收者依赖你本地的文件路径。

## `.dzn` 仿真绘图
{: #dzn-simulation-drawings}
{: #dzn-simulation-drawings}

**`.dzn` 是 TinyCAD v4 起支持的压缩绘图格式。** 它将原理图、嵌入式符号、仿真图纸、源设置、附加的模型文本以及所有保留的采集数据打包到一个基于 ZIP 的文件中。数值波形数据（包括复数 AC 结果）都能在此容器中高效存储。您可以通过常规的 **文件 → 打开**、**保存**和**另存为**命令打开和保存该文件；无需手动解压。

普通绘图使用 XML **`.dsn`** 格式。存在仿真内容时，TinyCAD 会自动选择 `.dzn`，其中包括源、探针、虚拟仪器、SPICE 属性、名为 `0` 的接地节点、Simulation sheet 或结果。即使保留了仿真设置，**Save without results** 也仍会使用 `.dzn`：它删除的是大型波形数组，而不是实验定义。

如果接收者可以重新运行仿真，请使用 **Save without results** 保存较小的共享副本。如果希望接收者无需重新运行即可查看你的采集、测量和引擎详情，则应保留结果。已保存的采集描述的是运行时的电路状态；编辑后不能用它代替重新运行。

TinyCAD v3 无法打开 `.dzn` 文件。将扩展名改为 `.dsn` 并不会转换格式，也不会使新的仿真记录兼容 v3。与旧版 TinyCAD 交换设计时，请保留原始副本。`.cir` 导出内容是供仿真器使用的 SPICE 文本，不同于这两种 TinyCAD 绘图格式。

## 继续阅读参考文档
{: #continue-with-the-reference}

- [分析类型与设置](../Simulation-Analyses/) — DC、瞬态、AC、噪声、传递函数和极零分析。
- [源、探针与虚拟仪器](../Simulation-Sources-and-Instruments/) — 激励、测量连接和负载。
- [图表、测量与 Circuit Explorer](../Simulation-Charts-and-Measurements/) — 调整、扫描、要求和研究。
- [内置 SPICE 模型](../Bundled-SPICE-Models/) — 查找、关联和自定义模型。
- [SPICE 模型与网表输出](../SPICE-output/) — 模板、模型文件和外部仿真。
- [XSPICE 与数字仿真](../XSPICE/) — 桌面版事件驱动和混合信号模型。
- [故障排除](../Simulation-Troubleshooting/) — 诊断连接、模型和数值问题。
- [教程](../Simulation-Tutorials/) — 完整的现有 SPICE 和 XSPICE 课程，包含可运行的绘图。

若要查阅仿真器自身的语言和器件参考，请使用官方的 [ngspice 文档](https://ngspice.sourceforge.io/docs.html)、[用户手册 PDF](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf) 和 [HTML 手册](https://ngspice.sourceforge.io/docs/ngspice-html-manual/manual.xhtml)。该手册介绍的是完整的 ngspice；TinyCAD 提供的是此处所述的受支持集成工作流，而非不受限制的命令行环境。

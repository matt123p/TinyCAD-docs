---
layout: default
---
# 捆绑的 SPICE 模型
{: #bundled-spice-models}

TinyCAD 随附一个离线 SPICE 模型目录。使用捆绑模型通过 ngspice 仿真元件、比较候选器件，或基于已知可用的定义开始创建 Custom 模型。TinyCAD Web 和 Desktop App 均提供这些模型。应用加载后，模型选择器会在本地运行。

## 从带模型的符号开始
{: #start-with-a-modelled-symbol}

在侧边栏中打开 **Standard → SPICE essentials**，或使用工具栏上的 **Simulation → SPICE components**。选择 **More…** 浏览完整的符号库。全部 29 个 SPICE essentials 符号都带有捆绑模型和预设引脚映射。大多数使用 **TinyCAD Basic** 模型。LM358 和 LM324 使用完整的 OpenJellyBean 封装模型。

放置一个符号，在图纸中选中它，然后打开底部 **Symbol** 面板中的 **SPICE**。**Bundled** 会显示关联的模型及其来源。对于使用这些字段的 TinyCAD Basic 模型，**Value**、**Wiper** 和 **Initial Voltage** 等普通符号字段仍然有效。例如，将电阻的 **Value** 设为 `10k`，即可使用默认的 **Ideal resistor** 模型仿真 10 kΩ 电阻。

![已放置符号的 SPICE 选项卡显示已选中 Bundled，并链接到 TinyCAD Basic yellow LED 模型。](/v4/images/simulation/bundled-spice-properties.png)

若要在完整电路中尝试此操作，请选择 **Open Example → SPICE tutorial → divider**，然后选中其中一个电阻。其 **SPICE** 选项卡会显示 **Ideal resistor** 链接。更改电阻值，然后再次运行该示例的 Operating Point 设置。保留的结果反映的是编辑前的电路。

## 选择并附加模型
{: #choose-and-attach-a-model}

1. 打开符号的 **SPICE** 选项卡。选择 **Bundled**，然后选择 **Find SPICE model…**。
2. 输入部件号、别名、模型 ID 或器件系列。清空搜索框即可查看该符号可用的选项。
3. 选择一行。表格下方的详细信息会显示模型描述、来源、端子顺序以及可调参数。展开 **View SPICE definition** 可查看实例模板及其使用的模型卡或子电路。选择来源链接可查看原始定义，或上游存档和成员文件名。
4. 检查引脚映射并设置参数覆盖值。选择 **Select SPICE model**。在图纸中，此操作会更改当前选中的放置实例，并且可以撤销。

![黄色 LED 的 Find SPICE model 对话框。选中的 circsim 模型显示了其来源以及已验证的阳极和阴极引脚编号。](/v4/images/simulation/bundled-spice-picker.png)

**SPICE essentials symbols** 仅列出与该符号引脚布局映射经过验证的模型。有些符号只有 Basic 默认模型。例如，黄色 LED 提供其 Basic 模型和 circsim yellow LED 模型。标准 NPN 晶体管可使用通用模型，也可使用替代模型，例如 OpenJellyBean 的 `2N3904_OJ`；集电极、基极和发射极已分别映射到引脚 3、1 和 2。

**其他符号**（包括缺少库标识的旧放置实例）可以浏览其版本的完整目录。检查建议匹配项，并为每个模型端子选择一个不同的物理引脚。即使电源引脚在原理图中隐藏，也要将其包括在内。请使用符号经过验证的封装引脚排列和模型端子顺序。未被模型包含的物理引脚不要纳入映射。引脚数量或功能不正确的临时符号必须先修正，才能用于表示该器件。

![自定义库中 741 符号的手动引脚映射，五个 circsim LM741 端子已分配到物理引脚 3、2、6、7 和 4。](/v4/images/simulation/bundled-spice-pin-mapping.png)

此示例将 circsim `LM741` 模型映射到一个 741 符号，使用引脚 3（同相输入）、2（反相输入）、6（输出）、7（正电源）和 4（负电源）。该模型不包含失调调零引脚。对于多单元库符号，TinyCAD 会提供将使用此模板的各单元共用的引脚编号。如果符号和仿真都需要完整封装，请选择完整封装模型。

如果选择器显示 **No models match this search**，请清空搜索内容或尝试更宽泛的搜索词。带有标记的符号可能只提供其已验证的选项。若要使用其他模型，请检查器件的引脚排列，并使用合适的[自定义库符号](../Custom-symbol-libraries/)或 Custom 定义。

## 选择合适的详细程度
{: #choose-the-right-level-of-detail}

| 你想了解什么 | 从哪种模型开始 |
| --- | --- |
| 检查分压器、RC 时间常数或基本电路行为 | 使用 TinyCAD Basic。当寄生效应和容差不在关注范围内时，理想模型很有用。 |
| 使用特定器件研究偏置、增益、二极管正向压降或开关行为 | 搜索确切型号或有文档说明的等效型号。根据你的电压、电流、温度和频率，检查描述和模型假设。 |
| 无法获取精确模型时研究替代器件 | 使用有文档说明的直接替换候选器件，或该器件系列的通用模型。另行确认封装引脚功能、电源极性和工作极限。记录你近似处理了哪些特性。 |
| 研究噪声、输入共模范围、热漂移或工艺角等极限条件 | 检查模型是否明确涵盖该效应。必要时，使用适当的制造商模型或工艺模型作为 [Custom definition](../SPICE-output/#models-templates-and-pin-order)。 |

捆绑模型描述典型行为。例如，circsim 741 模型表示标称增益、带宽、转换速率、失调和电源电流。它使用高阻抗输入级。circsim yellow LED 模型描述的是以 20 mA 时 2.10 V 为拟合点的电气特性。光输出、器件额定值和最坏情况行为需要另有依据。

## 设置库默认值或编辑 Custom 副本
{: #set-a-library-default-or-edit-a-custom-copy}

- **用于后续放置实例**：打开可编辑的 `.tclib` 库并选择符号。打开其 **SPICE** 选项卡，并使用相同的模型选择器。保存库。所选定义将成为以后从该条目放置符号时使用的默认值。现有放置实例保留其已保存的定义。
- **用于单个放置实例**：在原理图中选中该实例，并更改其 **SPICE** 属性。这便于在同一张图纸中并排比较两个模型。
- **若要编辑模型文本**：在已关联模型的符号上选择 **Custom**。TinyCAD 会将实例模板及所需定义连同映射的引脚复制到可编辑字段中。对于带有定义的模型，本地副本使用限定于该放置实例的名称，因此可与原捆绑模型同时运行。对于理想电阻，实例模板本身就足够。

切回 **Bundled** 会恢复关联模型。再次切换到 **Custom** 即可取回你的编辑内容。所选模式决定使用哪个定义；这两项设置在保存并重新打开后都会保留。**Remove attached model** 会移除关联，并在已保存先前模板的情况下恢复该模板。

支持的 [KiCad SPICE 导入](../Importing-Symbols-from-KiCAD/#import-spice-models-with-symbols)内容会显示在 **Custom** 下。若要保留导入的定义以供以后放置实例使用，请将其导入可编辑库并保存。

## 运行、保存和共享
{: #run-save-and-share}

1. 连接映射的引脚和电源，包括连接到 SPICE 地 **0**。
2. 创建或打开一个 [Simulation sheet](../Simulation/)，在 **Setup** 中选择分析类型，然后选择 **Run**。活动的捆绑模型会自动解析。使用 **Setup → SPICE models** 附加 Custom 模型所需的额外文件。
3. 打开 **Diagnostics → Generate circuit text**，检查展开后的实例行和模型引用。如果结果有误，请检查引脚顺序和电源网络。

图纸会保留每个模型的修订版本、映射引脚和参数设置，并为每个引用的模型包保存一份副本。保存图纸即可共享电路及其模型定义。仅 Desktop 支持的 XSPICE 模型仍需使用 Desktop 引擎运行。**Generate Spice NetList** 会将引用的捆绑定义嵌入 SPICE 输出中。有关导出选项以及仿真网表与图纸之间的区别，请参阅 [SPICE 模型和网表输出](../SPICE-output/#inspect-and-export-a-spice-netlist)。

## 目录内容和来源
{: #catalog-contents-and-sources}

TinyCAD Web 包含 97 个目录模型。Desktop App 另提供三个需要原生 XSPICE 的定义。请使用每个模型详细信息中的链接查看准确的模型来源。TinyCAD 随模型包附带许可证声明，这些声明也可在 **About TinyCAD** 中查看。

| 模型包 | 模型数 | 示例 |
| --- | ---: | --- |
| TinyCAD Basic | 20 | 理想电阻、电容和电感，独立源，电位器和变压器模板，通用半导体，741，以及谐振器 |
| OpenJellyBean | 42 | BJT、MOSFET、JFET、信号二极管和肖特基二极管、齐纳二极管、LED、运放通道和封装，以及电位器 |
| circsim | 15 | LM741、黄色 LED、LM393、LM339、NE5532、NE555、光耦、稳压器和功率 MOSFET |
| Spice_Files | 14 | 通用二极管和 LED、整流桥、光耦、开关、继电器、16 MHz 晶体和 10:1 变压器 |
| ngspice 特殊模型 | 1 | ICL8038 波形发生器 |
| ngspice 特殊模型 (Desktop) | 3 | LTC1044HV 电压反相器、LR8 稳压器及其辅助运放 |
| SkyWater SKY130 | 1 | 带衬底端子的标称集成 PNP 晶体管 |
| GlobalFoundries GF180MCU | 3 | 标称 MIM 电容，面密度分别为 1.0、1.5 和 2.0 fF/µm² |
| IHP SG13G2 | 1 | 标称 pnpMPA 集成 PNP 晶体管 |

代工厂模型条目是选定的标称模型。完整工艺套件提供单独的模型树、工艺角和仿真器设置。有关来源清单、许可证以及 SPICE essentials 的已验证替代模型，请参阅[目录参考](https://github.com/matt123p/TinyCADv4/blob/main/docs/bundled-spice-models.md#catalog-sources)。

## 使用 Desktop AI 助手
{: #ask-the-desktop-ai-assistant}

当你明确请求 SPICE 支持时，[Desktop AI 助手](../AI-Assistant/)可以搜索本地目录、检查模型文本和来源，并检查模型与符号之间的映射。它可以为已放置的元件附加模型，也可以在添加新的库元件时将模型保存为默认值。替换现有 Custom 模板前，它会先征求许可。对于普通原理图或符号操作，它会保留提供的默认值。

若要只进行只读比较，可尝试：“为 Q1 查找捆绑的 SPICE 模型。比较其端子顺序和限制与预期器件的差异。保持图纸不变。”

若要请求编辑，可尝试：“检查物理引脚映射后，将捆绑的 2N3904 模型附加到 Q1。向我展示来源和任何假设。”

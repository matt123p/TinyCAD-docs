---
layout: default
---
# VHDL 输出
{: #vhdl-output}

TinyCAD v4 中的 VHDL 输出方式与 v3 相同。TinyCAD 使用原理图连通关系、符号引脚定义和面向 VHDL 的符号来生成设计的 VHDL 描述。

桌面应用支持 VHDL 导出。浏览器版本目前无法创建 VHDL 文件。

## VHDL 的用途
{: #what-vhdl-is-used-for}

VHDL 是超高速集成电路硬件描述语言（Very High Speed Integrated Circuit Hardware Description Language）的缩写。它用于描述数字硬件，例如逻辑门、计数器、状态机、总线以及更大型的可复用模块。

VHDL 常用于：

- 在构建硬件之前仿真数字逻辑
- 使用定义好的输入和输出描述可复用的设计模块
- 通过较小的模块构建分层 FPGA 或 ASIC 设计
- 将设计传递给下游综合或验证工具

实际上，VHDL 设计通常定义：

- 一个 **实体（entity）**：模块的外部端口
- 一个 **构造体（architecture）**：内部逻辑或结构

当你想以原理图形式捕获数字设计的结构，并以 VHDL 格式导出该结构时，TinyCAD 的 VHDL 支持最为实用。

## 准备原理图
{: #preparing-the-schematic}

要生成 VHDL 输出，请使用 VHDL 库中的符号绘制原理图。这些符号经过专门设计，使 TinyCAD 能够识别哪些引脚是输入、输出和命名连接。

你也可以在 [tinycad.net](https://www.tinycad.net/Search?key=%23vhdl) 上找到面向 VHDL 的符号。

这些符号的用法与其他 TinyCAD 符号相同，但要特别注意命名：

- 对于顶层输入和输出，请使用 VHDL 库符号，并为每个符号指定所需的信号名称。
- 在同一信号需要连接的所有位置，内部导线都应使用一致的名称。
- 自定义符号的引脚名称、方向和引脚编号必须正确。

TinyCAD 会自动为连接的导线命名，但使用明确的标签仍是控制导出信号名称最清晰的方式。

## TinyCAD 如何将符号与 VHDL 配对
{: #how-tinycad-pairs-symbols-with-vhdl}

使用 TinyCAD 进行面向 VHDL 的分层设计时，无需依赖 TinyCAD 的多文件分层原理图功能。

预期工作流程如下：

1. 创建或收集用于定义可复用模块行为的 VHDL 文件。
2. 在项目库中为这些模块创建匹配的 TinyCAD 符号。
3. 将每个符号命名为与相应 VHDL 文件或设计单元相同的名称。
4. 确保每个符号引脚的名称和方向正确，并且引脚编号唯一。

每次在原理图中放置其中一个符号时，TinyCAD 都可以将该符号实例与同名的 VHDL 模块配对。

这样便可以使用较小的 VHDL 模块构建更大型的设计，同时仍以原理图绘制顶层结构。

## 使用总线
{: #working-with-buses}

对于 VHDL 输出，不要使用 TinyCAD 的 BUS 绘图功能来定义逻辑总线。应通过直接为导线命名来定义总线。

例如：

- `A(7:0)` 定义一个名为 `A` 的 8 位总线
- `A(3)` 表示该总线的一位
- `A(7:4)` 表示该总线的一段

当输入和输出符号代表总线时，应对它们使用相同的命名方式。

对于形式为 `A(i:j)` 的总线范围，请确保 `i` 大于 `j`。

你仍然可以绘制总线连接符以提高可读性，但对于 VHDL 导出，重要的是导线命名，而不是总线的视觉图形。

## 生成 VHDL 文件
{: #generating-the-vhdl-file}

原理图准备就绪后，在 TinyCAD 中运行“创建 VHDL”（Create VHDL）命令。

TinyCAD 会在导出过程中自动运行设计规则检查。如果想在生成输出之前发现布线或符号问题，也可以先自行运行设计规则检查。

## 实用检查清单
{: #practical-checklist}

导出前，请确认以下事项：

- 顶层输入和输出的名称与希望在 VHDL 中使用的名称完全一致
- 自定义符号的引脚方向正确
- 每个符号上的引脚编号都是唯一的
- 应当连接的共用网络确实使用相同的名称
- 总线使用 VHDL 风格的范围命名，例如 `DATA(15:0)`

如果生成的 VHDL 与预期不符，通常是由于引脚定义错误、缺少导线名称或总线命名不一致所致。

## 示例设计
{: #example-designs}

TinyCAD 源代码树中包含一个基于 4 位处理器设计的小型 VHDL 示例。查看这些文件有助于了解预期的符号命名方式和项目结构。

示例位于 [TinyCAD VHDL examples repository folder](https://github.com/matt123p/TinyCAD/tree/master/examples/vhdl)。

- 返回[高级](../Advanced/)
- 返回[v4 目录](../CONTENTS/)

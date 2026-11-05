---
layout: default
---
# SPICE 输出
{: #spice-output}

TinyCAD v4 中的 SPICE 支持与 v3 相同：TinyCAD 使用符号级模板从原理图生成 SPICE 文本文件。

## SPICE 的用途
{: #what-spice-is-used-for}

SPICE（集成电路强调仿真程序）是一系列电路仿真格式和工具。SPICE 仿真器可让你在制造硬件之前测试电路行为，例如：

- 直流工作点和偏置条件
- 瞬态（时域）行为
- 交流/频率响应
- 参数扫描和“假设分析”

TinyCAD 本身不运行仿真，而是导出 SPICE 文件，供你在所选的 SPICE 引擎中运行。

## SPICE 文件格式和总体布局
{: #spice-file-format-and-general-layout}

不同的 SPICE 引擎略有差异，但大多数 SPICE 文件遵循相同的总体结构：

1. 可选的文件头/注释
2. 器件/模型包含项和定义
3. 电路元件行（每个元件实例一行）
4. 分析/控制命令
5. 结束标记（通常为 `.end`）

实际上，这意味着导出的文件通常包含：

- 顶部的“设置”文本（模型、包含项、选项）
- 包含生成的元件及其连接网络的主体
- 底部的“运行”或分析文本

TinyCAD 的 SPICE 生成机制旨在直接映射到此布局。

## TinyCAD 如何生成 SPICE
{: #how-tinycad-generates-spice}

TinyCAD 在每个启用 SPICE 的符号上使用字符串模板系统。每个符号可以定义：

- **模型模板**：为原理图中该元件的每个实例插入
- **前言模板**：插入文件顶部附近，每种元件类型一次
- **后记模板**：插入文件底部附近，每种元件类型一次

可在符号库编辑器的符号属性中（SPICE 选项卡）打开这些字段。

### 模板展开
{: #template-expansion}

模板可以包含：

- `%(pin)`，用于引脚/网络替换
- `$(attribute)`，用于符号属性替换

电阻的模型模板示例：

`R$(refnum) %(1) %(2) $(NAME)`

如果电阻实例的参考标号为 `R3`，连接在网络 `7` 和 `9` 之间，且 `NAME=10K`，TinyCAD 将写入：

`R3 7 9 10K`

`refnum` 会经过特殊处理，以保留模板中的 SPICE 器件字母。

### 前言/后记的顺序和去重
{: #prologueepilogue-order-and-deduplication}

- 相同的前言和后记会去重
- 每项都有一个优先级（`0` 到 `9`）
- 前言按优先级从低到高写入
- 写入后记时，优先级为 `0` 的内容会出现在文件末尾

这样便可以控制设置文本和分析文本出现的位置。

## 导出 SPICE 所需的原理图设置
{: #required-schematic-setup-for-spice-export}

要生成有效的 SPICE 文件，图纸必须包含：

- 用于仿真电路的启用 SPICE 的符号
- 一个特殊的 **RUN** 符号
- 一个名为 **0** 的网络（SPICE 接地）

### RUN 符号
{: #run-symbol}

RUN 符号是一个普通的 TinyCAD 符号，没有引脚和模型模板，但带有用于注入仿真控制语句的前言/后记文本。

将 RUN 的前言和后记优先级设为 `0`，这样其文本就会出现在生成文件的最开头和最末尾。

每个仿真电路使用一个 RUN 符号。

### `0` 网络
{: #the-0-net}

SPICE 要求接地网络为 `0`。

在 TinyCAD 中，可通过以下任一方式将连接命名为 `0`：

- 网络标签，或
- 值为 `0` 的电源符号

## 创建 SPICE 输出
{: #creating-the-spice-output}

放置好符号、RUN 节点和 `0` 网络后，可通过 TinyCAD 界面中的 SPICE 导出命令生成 SPICE 输出。

导出选项刻意保持精简，因为预期通过 RUN 符号模板控制运行时行为。

## 高级模板条件语句
{: #advanced-template-conditionals}

对于更高级的符号，支持模板条件语句（行为与 v3 相同），包括以下测试：

- 属性存在/不存在
- 属性为空/非空
- 引脚已连接/未连接

条件语句语法：

- `?( defined(attributename), true string, false string )`
- `?( not_defined(attributename), true string, false string )`
- `?( empty(attributename), true string, false string )`
- `?( not_empty(attributename), true string, false string )`
- `?( connected(pinnumber), true string, false string )`
- `?( not_connected(pinnumber), true string, false string )`

条件语句可以嵌套。

- 返回 [高级](../Advanced/)
- 返回 [v4 目录](../CONTENTS/)

---
layout: default
---
# 生成网表
{: #generate-netlist}

TinyCAD 可以生成网表文件，供 PCB 布局及其他下游工具使用。

网表是对以下两项内容的文本描述：

- 设计中包含哪些元件实例
- 每个网络上哪些引脚彼此相连

TinyCAD 会读取图纸中的原理图连接关系，并按你选择的输出格式写入这些信息。

## 生成的网表用途
{: #what-a-generated-netlist-is-for}

生成的网表主要用于将已完成的原理图导入其他工具，尤其是 PCB 布局程序。

常见用途包括：

- 将电路导入 PCB 工具
- 检查 PCB 的连接关系是否与原理图一致
- 以纯文本格式查看元件标号和网络名称

TinyCAD 不会为你完成 PCB 布局。它会导出连接数据，供其他工具使用。

## 生成网表前
{: #before-generating-the-netlist}

网表导出取决于原理图是否按照 TinyCAD 预期的方式建立了电气连接。建议先运行 [设计规则检查](../Design-Rules-Check/)。

## `Package` 属性
{: #the-package-attribute}

对于 PCB 导出，许多目标工具要求每个元件都带有封装或封装名称。

在 TinyCAD 中，这通常保存在名为 `Package` 的符号属性中。

导出网表时，TinyCAD 会将该属性写入输出文件，以便 PCB 程序将原理图符号映射到正确的封装。

同一个符号在设计的不同部分可能使用不同的封装值，因此请检查已放置元件的属性，而不仅仅是库中的默认值。

## 如何生成网表
{: #how-to-generate-the-netlist}

1. 打开要导出的设计。
2. 在 TinyCAD 界面中，从导出工具运行网表导出命令。
3. 选择目标工具所需的输出格式。
4. 选择文件名并保存导出的文件。


## “生成网表”对话框中的格式
{: #formats-in-the-generate-netlist-dialog}

该对话框目前提供以下格式：

- `PADS-PCB`
- `PADS-PCB-WITH-VALUE`
- `Eagle SCR`
- `Protel`
- `gEDA PCB`

## 各格式的含义
{: #what-the-formats-mean}

### PADS-PCB
{: #pads-pcb}

创建 PADS 风格的网表文件。

### PADS-PCB-WITH-VALUE
{: #pads-pcb-with-value}

创建 PADS 风格的网表文件，并在可用时包含元件值。

### Eagle SCR
{: #eagle-scr}

创建 Eagle 脚本文件。

### Protel
{: #protel}

创建 Protel 风格的网表文件。

### gEDA PCB
{: #geda-pcb}

创建 gEDA PCB 网表文件。

## SPICE 和 VHDL
{: #spice-and-vhdl}

SPICE 和 VHDL 导出与主 `Generate Netlist` 对话框分开处理。

如需导出这些格式，请使用：

- `Generate Spice NetList`
- `Create VHDL File`

这些命令仍会先生成网表数据，但会使用各自专用的导出器。

## 使用的文件名
{: #what-file-name-is-used}

TinyCAD 使用当前图纸名称，并将文件扩展名改为与导出格式相匹配的扩展名。

示例：

- `.net`
- `.scr`
- `.cir`
- `.vhdl`


## 导出后检查内容
{: #what-to-check-after-export}

网表是文本文件，因此可以轻松地在文本编辑器中查看。

至少检查以下内容：

- 元件标号存在且各不相同
- 文件中包含预期的网络名称
- 在需要时包含封装或封装名称
- 没有明显缺失的元件或连接

如果结果看起来不正确，原因通常在于原理图数据，而不是导出步骤本身。

## 网表错误的常见原因
{: #common-causes-of-incorrect-netlists}

- 使用了绘图线而不是导线
- 导线停在引脚附近，但实际上没有吸附到引脚上
- 元件缺少标号
- 缺少必需的 `Package` 属性，或该属性的值不一致
- 原本应连接的标签名称不完全相同

## 相关页面
{: #related-pages}

- [网表编辑器](../Netlist-Editor/)
- [设计规则检查](../Design-Rules-Check/)
- [SPICE 输出](../SPICE-output/)

- 返回[高级](../Advanced/)
- 返回[v4 目录](../CONTENTS/)

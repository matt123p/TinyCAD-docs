---
layout: default
---
# 网表编辑器
{: #netlist-editor}

`Netlist Editor` 是 TinyCAD v4 的一项新功能。

在以下情况下使用此功能：

- 查看 TinyCAD 如何将导线和标签归组为网络
- 查找网络在图纸中的使用位置
- 为网络指定类型
- 更改一组网络在原理图中的显示方式

## 网表视图简介
{: #what-the-netlist-view-is}

`Netlist Editor` 是图纸中网络的实时列表。

网络是一种电气连接。TinyCAD 根据以下内容确定网络：

- 导线
- 引脚
- 标签
- 电源符号

此列表为实时列表，在编辑原理图时会自动更新。

## 如何打开
{: #how-to-open-it}

1. 查看编辑器底部的面板。
2. 如果当前显示的是 `Symbols`，请使用模式按钮切换到 `Netlist`。

如果由于选中了某个对象而打开了其他面板，请先清除选择。

![分隔器原理图下方的网表视图，其中 OUT 行已突出显示](../images/netlist-editor/netlist-overview.png)

在这个随附的分压器示例中，`OUT` 行将 `R1.2` 连接到 `R2.1`。
将鼠标悬停在该行上时，图纸中的连接会突出显示。

## 各列的含义
{: #what-each-column-means}

- `Net`：网络名称或内部网络编号
- `Sheet`：找到该行主要项目所在的图纸页
- `Connections`：该网络上的引脚连接数
- `Labels`：该网络上的标签
- `Type`：分配给该网络的网表类型
- `Symbols`：该网络上连接的元件和引脚

## 如何使用网表视图
{: #how-to-use-the-netlist-view}

### 查找网络
{: #find-a-net}

使用搜索框筛选列表。

您可以按以下内容搜索：

- 网络名称
- 图纸页名称
- 标签文本
- 符号标号
- 类型名称

### 在图纸中突出显示网络
{: #highlight-a-net-in-the-drawing}

将鼠标移到某一行上。

TinyCAD 会在原理图中突出显示匹配的网络项目，让您查看该网络的位置。

### 跳转到图纸中的网络
{: #jump-to-a-net-in-the-drawing}

单击某一行。

TinyCAD 会跳转到正确图纸页中的相关项目。

## 如何为网络指定类型
{: #how-to-assign-a-type-to-a-net}

打开 **Netlist**（网表）视图后，单击原理图中的导线以突出显示其对应的网络行。使用该行上的 **Type**（类型）列表选择现有类型。若要创建具有专属导线样式的类型，请打开 **Netlist Types**（网表类型）并先定义样式。

网络类型是一组可重复使用的绘图样式。为多个网络指定相同类型，即可使它们具有相同外观。编辑该类型后，所有使用它的网络都会随之更新。您也可以为某种类型的网络设置专属的标签和电源符号颜色，或将备注保存为属性。样式设置会改变图纸外观，同时保留其电气连接。

## 示例 – 将分压器的 OUT 导线改为绿色并加粗
{: #example--make-the-dividers-out-wire-green-and-thicker}

将随附的 `divider` 图纸通过 **Open Example** → **SPICE tutorial** 打开，然后放大电路。在底部面板中从 **Symbols** 切换到 **Netlist**。**OUT** 标签标识引脚 **R1.2** 和 **R2.1** 之间的网络。该网络最初使用 `default` 类型和常规导线粗细。

![样式设置前的分压器，显示 R1 与 R2 之间细蓝色的 OUT 导线](../images/netlist-editor/netlist-wire-before.png)

### 创建导线样式
{: #create-the-wire-style}

1. 单击 **Netlist Types**（网表类型），再单击 **Add**（添加），并将新类型命名为 `control`。
2. 在 `control` 行中，将 **Wire thickness**（导线粗细）设为 `4`。值为 `1` 时，导线粗细为普通线宽。按 **Tab** 提交该值。
3. 在同一行中点击 **Wire colour**（导线颜色）单元格。勾选 **Override colour**（覆盖颜色），将 `007F5F` 输入到 **Hex** 字段中即可选择绿色。预览会显示应用这两项设置后的导线。
4. 在颜色选择器中单击 **OK**。检查 `control` 行中的绿色色块和粗细值，然后在 **Netlist Types**（网表类型）中单击 **OK** 保存该类型。

![导线颜色选择器，其中已勾选 Override colour，预览中显示绿色导线](../images/netlist-editor/netlist-wire-colour.png)

![网表类型窗口，控制行中显示绿色的 Wire colour 色块和 4 的 Wire thickness](../images/netlist-editor/netlist-wire-type.png)

### 将样式应用于 OUT
{: #apply-the-style-to-out}

1. 单击原理图中 **R2** 正上方的导线。TinyCAD 会在 **Netlist**（网表）面板中突出显示 **OUT** 行。
2. 打开突出显示行上的 **Type**（类型）列表，然后选择 `control`。
3. 点击原理图中的空白处以取消选择。**R1.2** 和 **R2.1** 之间的导线现在变成绿色且更粗。选择 `default`（在 **Type** 列表中）即可恢复常规导线样式。

![原理图中选中的 OUT 导线及其在网表面板中突出显示的行，已选择 control](../images/netlist-editor/netlist-wire-assignment.png)

![样式设置后的分压器，显示 R1 与 R2 之间较粗的绿色 OUT 导线](../images/netlist-editor/netlist-wire-after.png)

使用 **Save As**（另存为）保留已编辑的示例副本。

### 观看操作演示
{: #watch-the-walkthrough}

{% include video-player.html src="/v4/videos/netlist-editor/netlist-editor.webm" type="video/webm" poster="/v4/images/netlist-editor/netlist-walkthrough-start.png" caption="切换到网表视图，创建绿色导线样式，然后单击 OUT 导线以找到对应行并应用该样式。" %}

## 网表类型中的可用操作
{: #what-you-can-do-in-netlist-types}

在 `Netlist Types` 窗口中，您可以：

- 添加新类型
- 复制现有类型
- 重命名类型
- 删除类型
- 更改导线颜色
- 更改标签颜色
- 更改电源符号颜色
- 更改导线粗细
- 添加自定义属性
- 保存前预览结果

## 默认类型
{: #the-default-type}

`default` 类型具有固定名称，导线粗细为 `1`。TinyCAD 使用此行中的颜色作为图纸的网络默认颜色。未指定类型的网络使用 `default`。

## 如何复制类型
{: #how-to-duplicate-a-type}

当您想要创建与现有类型相似的类型时，此功能很有用。

1. 选择类型行。
2. 单击 `Duplicate`。
3. 重命名副本，并调整其颜色或粗细。
4. 单击 `OK`。

## 标签和电源符号颜色
{: #label-and-power-symbol-colours}

使用颜色选择器中的 **Wire**（导线）、**Label**（标签）和 **Power**（电源）选项卡，分别编辑各项颜色。对于自定义类型，请在要自定义的每个选项卡中启用 **Override colour**（覆盖颜色）。取消勾选覆盖选项的选项卡会使用图纸中该项目的默认颜色。

## 如何添加属性
{: #how-to-add-attributes}

属性是与类型一同保存的简单名称/值条目。

添加方法：

1. 单击该类型的 `Attributes` 单元格。
2. 单击 `Add Attribute`，然后输入属性名称和值。需要添加更多条目时，重复此步骤。
3. 保存属性。
4. 在主对话框中单击 `OK`。

![属性编辑器，其中包含 control 类型的 purpose 和 notes 条目](../images/netlist-editor/netlist-attributes.png)

这些示例条目描述了该类型的用途，并添加了一条布线备注。它们属于该类型，可供所有指定了该类型的网络共用。

目前，这些属性主要与图纸一同保存。即使尚未被所有输出格式使用，它们也有助于保留类型的其他信息。


## 相关页面
{: #related-pages}

- [生成网表](../Generate-Netlist/)
- [物料清单](../Bill-Of-Materials/)
- [设计规则检查](../Design-Rules-Check/)
- [SPICE 输出](../SPICE-output/)
- [VHDL 输出](../VHDL-output/)

- 返回[高级](../Advanced/)
- 返回[v4 目录](../)

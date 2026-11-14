---
layout: default
---
# 网表编辑器
{: #netlist-editor}

`Netlist Editor` 是 TinyCAD v4 的一项新功能。

在以下情况下使用此功能：

- 查看 TinyCAD 如何将导线和标签分组为网络
- 查找网络在图纸中的使用位置
- 为网络指定类型
- 更改一组网络在原理图中的显示方式

## 网表视图是什么
{: #what-the-netlist-view-is}

`Netlist Editor` 是图纸中网络的实时列表。

网络是一种电气连接。TinyCAD 根据以下内容确定网络：

- 导线
- 引脚
- 标签
- 电源符号

该列表是实时的，并会在编辑原理图时自动更新。

## 如何打开
{: #how-to-open-it}

1. 查看编辑器底部的面板。
2. 如果当前显示的是 `Symbols`，请使用模式按钮切换到 `Netlist`。

如果由于选中了某个对象而打开了其他面板，请先取消选择。

![分压器原理图下方的网表视图，OUT 行处于高亮状态](../images/netlist-editor/netlist-overview.png)

在此捆绑的分压器示例中，`OUT` 行将 `R1.2` 连接到 `R2.1`。
将鼠标悬停在该行上时，图纸中的连接会高亮显示。

## 各列的含义
{: #what-each-column-means}

- `Net`：网络名称或内部网络编号
- `Sheet`：找到该行主要项目的图纸页
- `Connections`：该网络上的引脚连接数
- `Labels`：该网络上的标签
- `Type`：分配给该网络的网表类型
- `Symbols`：该网络上的已连接器件和引脚

## 如何使用网表视图
{: #how-to-use-the-netlist-view}

### 查找网络
{: #find-a-net}

使用搜索框筛选列表。

可以按以下内容搜索：

- 网络名称
- 图纸页名称
- 标签文本
- 符号位号
- 类型名称

### 在图纸中高亮网络
{: #highlight-a-net-in-the-drawing}

将鼠标移到某一行上。

TinyCAD 会在原理图中高亮对应的网络项目，方便你查看网络的位置。

### 跳转到图纸中的网络
{: #jump-to-a-net-in-the-drawing}

单击某一行。

TinyCAD 会跳转到正确图纸页中的相关项目。

## 如何为网络指定类型
{: #how-to-assign-a-type-to-a-net}

每一行都有一个 `Type` 字段。

要指定类型：

1. 单击该网络的 `Type` 字段。
2. 从列表中选择现有类型。
3. 如需先定义新类型，请按下文所述使用 `Netlist Types`，然后返回该网络的 `Type` 字段。

![网表筛选为 OUT，并已指定控制类型](../images/netlist-editor/netlist-type-assignment.png)

此处，搜索 `OUT` 可筛选出分压器的输出网络，其 `Type` 设置为 `control`。


## 什么是网络类型
{: #what-a-net-type-is}

网络类型是供一组网络重复使用的标签。

可以用它来：

- 将网络整理归类
- 为匹配的网络设置相同颜色
- 在图纸中加粗特定网络
- 以属性形式存储附加注释

类型名称示例：

- `power`
- `control`
- `logic`
- `analog`
- `high_current`

## 如何打开网表类型
{: #how-to-open-netlist-types}

1. 打开底部栏中的 `Netlist` 视图。
2. 单击 `Netlist Types`。

这将打开所有可用类型定义的编辑器。

## 网表类型中可以执行的操作
{: #what-you-can-do-in-netlist-types}

在 `Netlist Types` 窗口中，你可以：

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

始终存在一个 `default` 类型。

需要了解的重要事项：

- 不能重命名
- 不能删除
- 其颜色为常规图纸颜色

如果更改 `default` 行中的颜色，就是在更改图纸使用的常规网络颜色。

## 如何创建新类型
{: #how-to-create-a-new-type}

1. 打开 `Netlist Types`。
2. 单击 `Add`。
3. 输入名称。
4. 设置所需的颜色和导线粗细。
5. 单击 `OK` 保存。

之后，你可以在底部的 `Netlist` 视图中为网络指定新类型。

![网表类型编辑器，显示默认、控制和电源类型，控制类型的导线粗细为 2](../images/netlist-editor/netlist-types.png)

此示例添加了 `control` 和 `power` 类型。`control` 类型的导线粗细为 `2`；每个颜色按钮都会打开各自的编辑器。

## 如何复制类型
{: #how-to-duplicate-a-type}

如果你想创建与现有类型类似的类型，此操作很有用。

1. 选择类型行。
2. 单击 `Duplicate`。
3. 更改新类型的名称。
4. 根据需要编辑颜色或设置。
5. 单击 `OK`。

## 如何更改颜色
{: #how-to-change-colors}

每种类型都可以分别设置以下项目的颜色：

- 导线
- 标签
- 电源项目

要更改颜色：

1. 单击该行中的颜色单元格。
2. 对于非默认类型，启用 `Override colour`，然后选择一种颜色。
3. 在颜色对话框中单击 `OK`。
4. 在主 `OK` `Netlist Types` 窗口中单击。

非默认类型可以使用自己的颜色，也可以回退到默认图纸颜色。

![导线颜色编辑器显示已启用 Override colour，预览中为绿色导线](../images/netlist-editor/netlist-colour-preview.png)

预览会显示所选导线颜色，以及标签和电源符号颜色。使用 `Wire`、`Label` 和 `Power` 选项卡，在保存前检查各项设置。

## 如何更改导线粗细
{: #how-to-change-wire-thickness}

1. 找到类型行。
2. 更改 `Wire Thickness` 值。
3. 单击 `OK`。

这会影响原理图中属于该类型网络的导线的绘制粗细。

## 如何添加属性
{: #how-to-add-attributes}

属性是与类型一起保存的简单名称/值条目。

添加属性的方法：

1. 单击该类型对应的 `Attributes` 单元格。
2. 单击 `Add Attribute`，然后输入属性名称和值。需要添加其他条目时，重复此操作。
3. 保存属性。
4. 在主对话框中单击 `OK`。

![属性编辑器中包含控制类型的 purpose 和 notes 条目](../images/netlist-editor/netlist-attributes.png)

这些示例条目描述了该类型的用途，并添加了一条布线注释。它们属于该类型，可供分配给该类型的每个网络共享。

目前，这些属性主要保存在图纸中。它们有助于保留类型的附加信息，即使目前并非所有输出格式都会使用这些信息。


## 相关页面
{: #related-pages}

- [生成网表](../Generate-Netlist/)
- [物料清单](../Bill-Of-Materials/)
- [设计规则检查](../Design-Rules-Check/)
- [SPICE 输出](../SPICE-output/)
- [VHDL 输出](../VHDL-output/)

- 返回[高级](../Advanced/)
- 返回[v4 目录](../)

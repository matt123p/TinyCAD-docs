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
- 更改原理图上一组网络的显示方式

## 网表视图是什么
{: #what-the-netlist-view-is}

`Netlist Editor` 是图纸中网络的实时列表。

网络是一种电气连接。TinyCAD 根据以下内容确定网络：

- 导线
- 引脚
- 标签
- 电源符号

该列表会实时显示，并在您编辑原理图时自动更新。

## 如何打开
{: #how-to-open-it}

1. 查看编辑器底部的面板。
2. 如果当前显示的是 `Symbols`，请使用模式按钮切换到 `Netlist`。

如果由于选中了某些内容而打开了其他面板，请先取消选择。

## 每列的含义
{: #what-each-column-means}

- `Net`：网络名称或内部网络编号
- `Sheet`：找到该行主要项目的图纸
- `Connections`：该网络上的引脚连接数
- `Labels`：该网络上的标签
- `Type`：分配给该网络的网表类型
- `Symbols`：该网络上连接的元件和引脚

## 如何使用网表视图
{: #how-to-use-the-netlist-view}

### 查找网络
{: #find-a-net}

使用搜索框筛选列表。

可以按以下内容搜索：

- 网络名称
- 图纸名称
- 标签文本
- 符号位号
- 类型名称

### 在图纸中高亮显示网络
{: #highlight-a-net-in-the-drawing}

将鼠标移到某一行上。

TinyCAD 会在原理图中高亮显示匹配的网络项目，以便您查看该网络的位置。

### 跳转到图纸中的网络
{: #jump-to-a-net-in-the-drawing}

单击某一行。

TinyCAD 会跳转到正确图纸中的相关项目。

## 如何为网络指定类型
{: #how-to-assign-a-type-to-a-net}

每一行都有一个 `Type` 字段。

要指定类型：

1. 单击该网络的 `Type` 字段。
2. 从列表中选择现有类型，或输入新名称。
3. 单击字段外部以应用更改。


## 什么是网络类型
{: #what-a-net-type-is}

网络类型是可供一组网络重复使用的标签。

您可以使用它来：

- 将网络整理到不同类别中
- 为匹配的网络设置相同的颜色
- 在绘图中加粗某些网络
- 将额外注释作为属性存储

可能的类型名称示例：

- `power`
- `control`
- `logic`
- `analog`
- `high_current`

## 如何打开网络表类型
{: #how-to-open-netlist-types}

1. 打开底部栏中的 `Netlist` 视图。
2. 单击 `Netlist Types`。

这将打开所有可用类型定义的编辑器。

## 在网络类型中可以执行的操作
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

始终存在一个 `default` 类型。

需要了解的重要事项：

- 不能重命名
- 不能删除
- 其颜色为常规绘图颜色

如果更改 `default` 行中的颜色，就是在更改绘图使用的常规网络颜色。

## 如何创建新类型
{: #how-to-create-a-new-type}

1. 打开 `Netlist Types`。
2. 单击 `Add`。
3. 输入名称。
4. 设置所需的颜色和导线粗细。
5. 单击 `OK` 保存。

之后，您可以在底部的 `Netlist` 视图中为网络指定新类型。

## 如何复制类型
{: #how-to-duplicate-a-type}

当您想要创建与现有类型相似的类型时，这会很有用。

1. 选择类型行。
2. 单击 `Duplicate`。
3. 更改新类型的名称。
4. 根据需要编辑颜色或设置。
5. 单击 `OK`。

## 如何更改颜色
{: #how-to-change-colors}

每种类型都可以为以下对象单独设置颜色：

- 导线
- 标签
- 电源项

更改颜色的方法：

1. 单击该行中的颜色单元格。
2. 在颜色对话框中选择颜色。
3. 关闭颜色对话框。
4. 单击 `OK`；此按钮位于主 `Netlist Types` 窗口中。

非默认类型可以使用自己的颜色，也可以回退使用默认绘图颜色。

## 如何更改导线粗细
{: #how-to-change-wire-thickness}

1. 找到类型行。
2. 更改 `Wire Thickness` 值。
3. 单击 `OK`。

这会影响原理图中该类型网络上的导线的绘制方式。

## 如何添加属性
{: #how-to-add-attributes}

属性是与类型一起保存的简单名称/值条目。

添加方法：

1. 单击类型的 `Attributes` 单元格。
2. 添加或编辑属性名称和值。
3. 保存属性。
4. 在主对话框中单击 `OK`。

目前，这些属性主要与图纸一起保存。即使它们尚未被每种输出格式使用，也可用于保存额外的类型信息。


## 相关页面
{: #related-pages}

- [生成网表](../Generate-Netlist/)
- [物料清单](../Bill-Of-Materials/)
- [设计规则检查](../Design-Rules-Check/)
- [SPICE 输出](../SPICE-output/)
- [VHDL 输出](../VHDL-output/)

- 返回[高级](../Advanced/)
- 返回[v4 目录](../CONTENTS/)

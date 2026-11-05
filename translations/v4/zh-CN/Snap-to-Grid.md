---
layout: default
---
# 对齐到网格
{: #snap-to-grid}

对齐到网格会让鼠标位置在绘制或放置项目时吸附到最近的网格点。这样可以使符号和导线保持对齐，并确保连接准确落在有效连接点上。

## 为什么这很重要
{: #why-it-matters}

- 确保导线末端与符号引脚连接：如果不使用对齐到网格，导线可能无法连接到引脚。
- 避免视觉上看似对齐、但在 TinyCAD 工具中实际上未连接的情况。

进行常规原理图工作时，应始终启用对齐到网格。

## 显示网格并启用吸附
{: #showing-the-grid-and-enabling-snapping}

打开工具栏上的 **Settings** 菜单，然后选择 **Settings**，即可更改以下相互独立的选项：

- **Show the grid** 控制是否显示网格点。关闭此选项不会禁用吸附。
- **Snap to grid** 控制放置和移动对象时是否对齐。关闭此选项不会隐藏网格。

缩小得过多、无法清晰显示网格点时，网格点可能会被隐藏。

![包含单独的“Show the grid”和“Snap to grid”复选框的“Settings”对话框。](../images/grid-settings.png)

选中对象后，启用吸附时，方向键会按网格间距移动对象。禁用吸附时，对象会以较小步长移动，不会被取整并重新对齐到网格。无论吸附设置如何，按住 **Ctrl** 都可进行小步移动。未选中对象时，方向键会平移视图。

## 网格间距
{: #grid-spacing}

TinyCAD 支持 3 种网格间距模式：

- **Normal grid spacing**：最适合大多数原理图编辑工作。
- **Fine grid spacing**：点密度更高（点数加倍），适用于注释和符号绘制。
- **User grid spacing**：在设置对话框中输入自定义间距值，单位为当前使用的 mm 或英寸。

建议所有绘图都使用 **Fine grid**。

- 返回[绘图](../User-guide/)
- 返回[v4 目录](../CONTENTS/)

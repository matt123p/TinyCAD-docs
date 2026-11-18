---
layout: default
---
# 导线
{: #wires}

导线是 TinyCAD 原理图中具有电气连接功能的连接线。

如果需要用于 DRC、网表生成、SPICE/PCB 导出或跨页连接的电气连接，请使用导线对象（而不是注释线）。

## 导线为何重要
{: #why-wires-matter}

- 导线定义电气网络。
- 导线会吸附到符号引脚和其他有效连接点。
- TinyCAD 使用导线连接关系进行规则检查并生成输出。

使用注释线代替导线，视觉上可能看起来正确，但对于工具来说，电路并未建立电气连接。

## 导线路由模式
{: #wire-routing-modes}
{: #wire-routing-modes}

在 TinyCAD v4.0.11 中，使用 Wire 旁边的选择器来选择新线段的绘制方式。

| 模式 | 行为 |
|---|---|
| **90°** | 水平和垂直布线。 |
| **45°** | 布线方向限制为 TinyCAD 的 45° 方向。 |
| **自由** | 可按任意角度绘制直线段。 |

选择模式后会激活 Wire 工具，并保留当前活动的导线预览。放置下一段之前，可以更改模式。网格吸附仍是单独的设置。若要在两个连接点之间自动布线，请使用旁边的 [点到点导线工具（Point-to-Point Wire）](#auto-routing)。

![显示 90°、45° 和自由选项的导线工具栏选择器。](../images/wire-routing-modes.png)

## 放置导线
{: #placing-wires}
{: #placing-wires}

1. 选择 Wire 工具。
2. 单击以从有效连接点开始——不过这并非严格必需。你可以在任意位置放置导线。如果连接点有效，会显示一个红色圆圈作为提示。
3. 根据需要单击以放置拐角/线段。
4. 在另一个有效连接点结束，或者
5. 右键单击以结束布线模式。


{% include video-player.html
	src="/v4/images/video/Video 4.mp4"
	width=1602
	height=696
	caption="演示如何放置导线的视频讲解。"
%}

<p>
	<a href="/v4/examples/Simple%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;下载
	</a>
</p>


## 使用点到点导线自动布线
{: #auto-routing-with-point-to-point-wire}
{: #auto-routing}

**点到点导线（Point-to-Point Wire）** 会在两个连接点之间选择一条路径，并自动放置导线线段。它适合日常使用鼠标进行布线，尤其适用于触摸屏：点击两个端点比逐个放置每个拐角更方便。

1. 在工具栏的 Wire 模式选择器旁，选择 **点到点导线（Point-to-Point Wire）**。
2. 单击或轻触起始符号引脚或现有导线。红色圆圈表示有效连接点。
3. 将指针移到目标引脚或导线上，预览自动生成的路径。
4. 单击或轻触目标位置以放置完整连接。TinyCAD 会选中新导线线段，并退出布线工具。再次选择 **点到点导线（Point-to-Point Wire）** 可创建另一条连接。

与普通 Wire 工具不同，两个端点都必须是有效连接点；单击空白处不会放置拐角。右键单击可取消尚未完成的路径。如果要自行选择拐角，请使用 [Wire](#placing-wires)。

试试[自动布线示例图纸](../examples/Auto-route%20example.dsn)。
电阻和 LED 位于网格上，两者之间的连接尚未接通。

首先，选择 Point-to-Point Wire，然后选择 R1 的右侧引脚。

![1. 开始时 R1 和 D1 尚未连接。红色圆圈标出 R1 上的起始引脚。](../images/wire-auto-route-start.png){: width="435" style="max-width: 50%;"}

接下来，将指针移到 D1 的上方引脚。提交之前，预览会显示布线路径及其拐角。

![2. 预览到 D1 的自动布线路径。红色圆圈标出目标引脚。](../images/wire-auto-route.png){: width="435" style="max-width: 50%;"}

最后，单击或轻触 D1 的引脚。TinyCAD 会一次性放置所有线段。

![3. 确认目标位置以放置完整连接，包括拐角。](../images/wire-auto-route-complete.png){: width="435" style="max-width: 50%;"}

在触摸屏上，可以直接轻触两个端点。对于较小或较拥挤的引脚，请使用[放大镜](../Touch-controls/#precise-placement-with-the-loupe)：瞄准
每个端点，然后按 **单击**。无需沿路径拖动，也无需轻触拐角。检查完成的连接，并根据需要调整其线段。

## 吸附和连接点
{: #snapping-and-junctions}

- 导线会吸附到引脚和现有导线上。
- 必要时会自动添加连接点。
- 交叉的导线不会连接，除非存在连接点。

## 整理现有布局
{: #tidying-an-existing-layout}

使用[布局整理（自动布局）](../Layout-Tidy-Up/)重新排列整张图纸或选区内现有的元件、导线和标签。点到点导线用于创建新连接；自动布局用于整理已有连接。

## 编辑导线
{: #editing-wires}

要编辑导线，只需单击它。现在，你可以拖动导线本身来移动整段导线，也可以拖动移动框来移动导线的端点。

- 返回[绘图](../User-guide/)
- 返回[v4 目录](../CONTENTS/)

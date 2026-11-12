---
layout: default
---
# 导线
{: #wires}

导线是 TinyCAD 原理图中具有电气连接作用的连接线。

如果需要用于 DRC、网络表生成、SPICE/PCB 导出或跨页连接的电气连接，请使用导线对象（而非注释线）。

## 导线为何重要
{: #why-wires-matter}

- 导线定义电气网络。
- 导线会吸附到符号引脚和其他有效连接点。
- TinyCAD 使用导线连接关系进行规则检查并生成输出文件。

使用注释线代替导线在视觉上可能看起来正确，但电路对工具而言并未实现电气连接。

## 导线路由模式
{: #wire-routing-modes}
{: #wire-routing-modes}

在 TinyCAD v4.0.11 中，使用“导线”旁边的选择器，选择新线段的绘制方式。

| 模式 | 行为 |
|---|---|
| **90°** | 水平和垂直布线。 |
| **45°** | 按 TinyCAD 的 45° 方向布线。 |
| **自由** | 以任意角度绘制直线段。 |

选择一种模式会激活“导线”工具，并保留当前活动的导线预览。放置下一线段之前可以更改模式。网格吸附是单独的设置。若要在两个连接点之间自动布线，请使用相邻的[点到点导线工具](#auto-routing)。

![导线工具栏选择器，显示 90°、45° 和“自由”选项。](../images/wire-routing-modes.png)

## 放置导线
{: #placing-wires}
{: #placing-wires}

1. 选择“导线”工具。
2. 单击有效连接点开始绘制——但这并非严格必要。你可以在任意位置放置导线。若连接点有效，会出现红色圆圈作为提示。
3. 根据需要单击以放置拐角/线段。
4. 在另一个有效连接点结束，或者
5. 右键单击以结束导线绘制模式。


{% include video-player.html
	src="/v4/images/video/Video 4.mp4"
	width=1602
	height=696
	caption="演示如何放置导线的视频教程。"
%}

<p>
	<a href="/v4/examples/Simple%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;下载
	</a>
</p>


## 使用点到点导线自动布线
{: #auto-routing-with-point-to-point-wire}
{: #auto-routing}

**点到点导线**会在两个连接点之间选择一条路线，并为你放置导线线段。它适用于日常鼠标操作，尤其适合触摸屏：点按两个端点比逐个放置所有拐角更方便。

1. 在工具栏的导线路由模式选择器旁，选择**点到点导线**。
2. 单击或点按起始符号引脚或现有导线。有效连接点会以红色圆圈标记。
3. 将光标移到目标引脚或导线上，预览自动路线。
4. 单击或点按目标位置，放置完整连接。TinyCAD 会选中新导线线段并退出路由工具。再次选择**点到点导线**即可创建另一条连接。

与普通“导线”工具不同，两个端点都必须是有效连接点；单击空白处不会放置拐角。右键单击可取消尚未完成的路线。如果想自行选择拐角，请使用[导线](#placing-wires)。

可以使用[自动布线示例图](../examples/Auto-route%20example.dsn)进行练习。电阻和 LED 已放置在网格上，两者之间的连接尚未完成。

首先选择 Point-to-Point Wire，然后选择 R1 右侧的引脚作为起点。

![1. 从 R1 和 D1 之间尚未连接的状态开始。红圈标出 R1 的起始引脚。](../images/wire-auto-route-start.png){: width="435" style="max-width: 50%;"}

接着指向 D1 顶部的引脚。预览会在确认前显示路径及其拐角。

![2. 预览通往 D1 的自动布线路径。红圈标出目标引脚。](../images/wire-auto-route.png){: width="435" style="max-width: 50%;"}

最后单击或轻触 D1 的引脚。TinyCAD 会一次放置所有线段。

![3. 确认终点，即可放置包含拐角的完整连接。](../images/wire-auto-route-complete.png){: width="435" style="max-width: 50%;"}

在触摸屏上，可以直接点按两个端点。对于较小或较拥挤的引脚，请使用[放大镜](../Touch-controls/#precise-placement-with-the-loupe)：对准每个端点并按**单击**。无需沿路线拖动，也无需点按拐角。检查完成后的连接，并根据需要调整线段。

## 吸附与连接点
{: #snapping-and-junctions}

- 导线会吸附到引脚和现有导线上。
- 需要时会自动添加连接点。
- 交叉的导线不会连接，除非存在连接点。

## 编辑导线
{: #editing-wires}

要编辑导线，只需单击它。然后可以拖动导线本身来移动整个线段，也可以拖动移动方框来移动导线端点。

- 返回[绘图](../User-guide/)
- 返回[v4 目录](../CONTENTS/)

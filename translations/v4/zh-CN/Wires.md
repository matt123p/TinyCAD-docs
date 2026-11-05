---
layout: default
---
# 导线
{: #wires}

导线是 TinyCAD 原理图中具有电气连接作用的连接线。

如果需要进行 DRC、生成网表、导出 SPICE/PCB，或进行跨图纸连接，
请使用导线对象（而非注释线）。

## 导线为何重要
{: #why-wires-matter}

- 导线定义电气网络。
- 导线会吸附到符号引脚和其他有效连接点。
- TinyCAD 使用导线连接关系进行规则检查并生成输出文件。

使用注释线代替导线，视觉上可能看起来正确，但对于工具而言，
电路将处于未连接状态。

## 放置导线
{: #placing-wires}

1. 选择“导线”工具。
2. 单击有效连接点以开始绘制——虽然这并非严格要求。你可以在任意位置放置导线。有效连接点会以红色圆圈标示。
3. 根据需要单击以放置拐角/线段。
4. 在另一个有效连接点处结束，或者
5. 右键单击以结束布线模式。


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


## 吸附和连接点
{: #snapping-and-junctions}

- 导线会吸附到引脚和现有导线上。
- 需要时会自动添加连接点。
- 交叉的导线不会连接，除非存在连接点。

## 编辑导线
{: #editing-wires}

要编辑导线，只需单击它。然后，你可以拖动导线本身来移动整段导线，也可以拖动移动框来移动导线端点。

- 返回[绘图](../User-guide/)
- 返回[v4 内容目录](../CONTENTS/)

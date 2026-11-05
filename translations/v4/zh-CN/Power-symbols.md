---
layout: default
---
# 电源符号
{: #power-symbols}

电源符号用于指示连接到具有名称的电源网络，例如 `GND`、`+5V`、
`VCC` 或 `+3V3`。

所有名称相同的电源符号都视为电气连接。

{% include video-player.html
	src="/v4/images/video/Video 5.mp4"
	width=1596
	height=700
	caption="展示如何放置电源符号的视频演示。"
%}

<p>
	<a href="/v4/examples/Simple%20Drawing.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;下载
	</a>
</p>

## 电源符号的工作方式
{: #how-power-symbols-work}

- 网络连接性取决于**电源名称**。
- **形状**仅用于显示，不会改变连接性。
- 方向和形状选项用于提高可读性并符合绘图风格。

在整个设计中使用一致的名称，以避免电源网络被拆分。

## 放置规则
{: #placement-rules}

1. 选择“电源”工具。
2. 选择方向、形状和名称。
3. 放置符号，并在符号引脚末端进行连接。

将导线连接到电源符号的引脚末端（而不只是靠近图形），以确保识别到连接。

## 符号上的隐藏电源引脚
{: #hidden-power-pins-on-symbols}

某些库符号使用隐藏电源引脚（例如许多逻辑系列符号）。
这些引脚会自动连接到名称匹配的电源网络。

使用符号库要求的相同名称（例如在需要时使用 `VCC`/`GND`），以确保电源自动连接正常工作。

## 编辑和样式
{: #editing-and-styles}

选择电源符号后，可以在工具栏中选择新的形状来更改其形状。

## 多页行为
{: #multi-sheet-behavior}

在网表生成所用的设计上下文中，电源网络名称是全局的。
在各页之间使用一致的命名，可确保实现预期的电源连接。

- 返回[绘图](../User-guide/)
- 返回[v4 目录](../CONTENTS/)

---
layout: default
---
# 总线
{: #buses}

总线是一种原理图绘图辅助工具，用于表示一组相关信号。总线
可以提高可读性，尤其是在许多相似导线并行布线时。

在 TinyCAD 中，实际的电气连接仍通过**导线和网络
标签**实现。总线本身不会在电气上连接信号。

## 绘图示例
{: #example-drawing}

<img src="/v4/images/Image 1.svg" alt="A example of using Buses" />

<p>
	<a href="/v4/examples/Bus%20Example.dsn" class="btn btn-primary" download>
		<i class="bi bi-download me-1" aria-hidden="true"></i>&nbsp;下载
	</a>
</p>


## 总线工作流程
{: #bus-workflow}

1. 在需要布设成组信号的位置绘制总线。
2. 在各个信号分支的位置放置总线入口。
3. 从每个总线入口绘制导线，连接到符号引脚或连接点。
4. 在这些导线上放置标签（例如 `D0`、`D1`、`D2`...）。
5. 在目标总线上重复放置标签和导线，并使用相同的名称。

标签名称相同时，相应网络即会连接。

## TinyCAD 中的总线对象
{: #bus-objects-in-tinycad}

- **总线**：主要的成组连接路径；适用于整理大量连接。
- **总线入口**：从总线到单条导线的可视入口/出口。
- **总线名称**：显示在总线上的文本（例如 `Data Bus` 或导线数量）。

总线名称用于向人说明设计意图；导线上的标签则为工具提供电气网络
标识。

## 命名和重复放置提示
{: #naming-and-repeat-tips}

- 确保总线信号标签从头到尾保持一致（`A0..A15`、`D0..D7` 等）。
- 使用重复选项加快入口放置和顺序标签的添加。
- 只要名称匹配，每端的信号名称顺序可以不同。

## 连接点
{: #junctions}

总线本身不需要连接点圆点。

## 总线与多页图纸
{: #buses-and-multi-sheet-drawings}

在不同页之间，重复使用相同的信号标签，以连接对应的网络。
总线图形和名称有助于提高可读性，而标签名称则定义网络表/DRC 所用的连接关系。

- 返回[绘图](../User-guide/)
- 返回[v4 内容目录](../CONTENTS/)

---
layout: default
---
# TinyCAD 更新日志
{: #tinycad-changelog}


## v4.0.11
{: #v4011}
{: #v4011}

此版本新增格式化 Markdown 备注、矢量 SVG 输出和导线布线控制。

- [Markdown 文本框](../Text/#markdown-text-boxes)：包含列表、任务列表和代码块的格式化备注；绘图、SVG 导出和 PDF 使用相同的矢量渲染器。
- 实时源文本格式化会保留可见的可编辑标记，并遵循所选基准字体，同时保持光标定位、选择和换行一致。
- [导线布线模式](../Wires/#wire-routing-modes)：用于选择 90°、45° 和自由布线的紧凑选择器，并保留当前活动的预览。
- 仅在触摸输入发生于绘图画布上之后，才会显示放大镜按钮。

## v4.0.10 — 2026 年 11 月 6 日
{: #v4010--6-november-2026}
{: #v4010}

- 当库面板或原理图面板需要更多垂直空间时，仍保持编辑器工具栏可见。

## v4.0.9 — 2026 年 11 月 4 日
{: #v409--4-november-2026}

### 新增
{: #added}

- [触控控件](../Touch-controls/)，包括直接编辑、双指平移
  和捏合缩放，以及带有单击、拖放、菜单和关闭控件的放大镜，
  以便精确放置。
- [可调整大小的库面板和符号排序](../Using-Symbol-Libraries/)，
  包括对搜索结果按字母顺序排序。
- [临时隐藏所选对象](../User-guide/#temporarily-hiding-objects)，
  并新增命令，可恢复当前图纸上所有隐藏的对象。
- 波兰语界面翻译，以及“替换符号”对话框中的翻译文本。

### 修复
{: #fixed}

- [网格显示与吸附](../Snap-to-Grid/)彼此独立，且
  禁用吸附时，键盘移动也会遵从此设置。
- 放置的库符号中的位图图像现在可以正确渲染。
- [Escape 键可取消绘图和放置操作](../Shortcuts/)，即使
  工具栏控件处于焦点状态也可生效。
- 取消桌面版未保存更改提示后，会清除待处理的退出操作。
- 画布捏合缩放不再与浏览器页面缩放叠加。
- 改进触控放大镜的位置、指针反馈、手势处理和拖动体验。
- 改进桌面版和 macOS 版“关于”对话框的行为。

### 打包与维护
{: #packaging-and-maintenance}

- 更新依赖项以修复安全漏洞。
- 移除 Linux ARMv7 软件包，因为 Electron 运行时支持 Linux x64
  和 ARM64。Snap 软件包面向 x64；Debian 软件包面向 x64 和 ARM64。

[下载发行版](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [源代码更改](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 2026 年 5 月 3 日
{: #v408--3-may-2026}

- 修复保存并重新打开绘图时电源符号的旋转问题。
- 保存和加载时保留导线网络类型，使导线颜色保持一致。

[下载发行版](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [源代码更改](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 2026 年 4 月 13 日
{: #v407--13-april-2026}

- 修复桌面应用程序中的打印问题。
- 改进捏合缩放行为，防止缩放失控。
- 新增库符号的服务器端渲染。
- 自动为生产构建添加标签并创建 GitHub 发行版。

[下载发行版](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [源代码更改](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 2026 年 3 月 29 日
{: #v406--29-march-2026}

此版本包含在 4.0.5 版本下进行的开发更改；没有单独的 4.0.5 标签或已发布的 GitHub 发行版。

### 新增
{: #added-1}

- 自动导线布线。
- “替换符号”（Replace Symbol），可将现有元件更换为另一个库符号。
- 在靠近绘图边缘拖动时自动滚动。
- 双击选择完整导线，三击选择范围可越过连接点和丁字连接处。
- 新增关闭标签连接指示器的选项。

### 修复与改进
{: #fixed-and-improved}

- 库文件夹默认打开，并会在搜索时展开。
- 改进文本编辑、剪贴板快捷键、导航键，以及绘图获得焦点时的键盘快捷键。
- 修复 Ctrl+单击选择、拖动多个已选对象和微调控件的问题。
- 绘图框和选择框可向任一方向拖动。
- 修复 macOS 上的退出问题，并减少 macOS 上重复加载库的情况。
- 修复标签定位、颜色选择器翻译和网络表后台处理问题。
- 更正 Windows 安装程序和 AppX 的构建名称。

[下载发行版](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [源代码更改](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — 源代码标签，2026 年 3 月 19 日
{: #v404--source-tag-19-march-2026}

- 新增[库文件夹](../Library-Folders/)，用于整理符号库。
- 新增荷兰语界面翻译。
- 新增浏览器版构建产物，并部署到 GitHub Pages。
- 修复 Snap 打包问题。

[源代码更改](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — 源代码标签，2026 年 3 月 15 日
{: #v403--source-tag-15-march-2026}

- 调整 macOS 启动处理，以解决启动问题。

源代码标签为 4.0.3，但其软件包元数据仍显示 4.0.2。

[源代码更改](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 2026 年 3 月 14 日
{: #v402--14-march-2026}

- 修复 Linux 上的未保存更改关闭对话框。
- 在现有 ARM 构建之外，新增 x64 Debian 软件包。
- 更新构建工具和打包配置。

[下载发行版](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [源代码更改](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — 初始源代码标签，2026 年 3 月 13 日
{: #v401--initial-source-tag-13-march-2026}

首个源代码快照已包含 TinyCAD 的重写版本，可用于浏览器和
桌面，支持原理图编辑、符号库、现有
`.dsn` 和 `.tclib` 文件，以及导出工作流。此仓库未记录更早的开发历史。

[初始源代码快照](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- 返回 [v4 目录](../CONTENTS/)

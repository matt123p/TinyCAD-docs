---
layout: default
---
# TinyCAD v4 更新日志
{: #tinycad-v4-changelog}


## v4.0.9 — 2026年11月4日
{: #v409--4-november-2026}

### 新增
{: #added}

- [触控操作](../Touch-controls/)，包括直接编辑、双指平移
  和捏合缩放，以及带有单击、拖放、菜单和关闭
  控件的放大镜，便于精确放置。
- [可调整大小的库面板和符号排序](../Using-Symbol-Libraries/)，
  包括按字母顺序排列搜索结果。
- [临时隐藏选定对象](../User-guide/#temporarily-hiding-objects)
  并新增命令，可在当前图纸上恢复所有隐藏对象。
- 新增波兰语界面翻译，并翻译“替换符号”对话框中的文本。

### 修复
{: #fixed}

- [网格可见性与吸附](../Snap-to-Grid/)可独立工作，且
  禁用吸附时，键盘移动也会遵循此设置。
- 放置在库符号中的位图图像现在可以正确显示。
- [按 Esc 可取消绘制和放置操作](../Shortcuts/)，包括
  工具栏控件处于焦点时。
- 取消桌面端未保存更改提示时，会清除待处理的退出操作。
- 画布捏合缩放不再与浏览器页面缩放叠加。
- 改进触控放大镜的位置、指针反馈、手势处理和拖动操作。
- 改进桌面端和 macOS“关于”对话框的行为。

### 打包和维护
{: #packaging-and-maintenance}

- 更新依赖项以修复安全漏洞。
- 移除 Linux ARMv7 软件包，因为 Electron 运行时支持 Linux x64
  和 ARM64。Snap 软件包面向 x64；Debian 软件包面向 x64 和 ARM64。

[下载发行版](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.9)
· [源代码变更](https://github.com/matt123p/TinyCADv4/compare/v4.0.8...v4.0.9)

## v4.0.8 — 2026年5月3日
{: #v408--3-may-2026}

- 修复保存并重新打开图纸时电源符号旋转的问题。
- 保存和加载时保留导线网络类型，使导线颜色保持一致。

[下载发行版](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.8)
· [源代码变更](https://github.com/matt123p/TinyCADv4/compare/v4.0.7...v4.0.8)

## v4.0.7 — 2026年4月13日
{: #v407--13-april-2026}

- 修复桌面应用中的打印功能。
- 改进捏合缩放行为，防止缩放失控。
- 添加库符号的服务器端渲染。
- 自动为生产构建添加标签并创建 GitHub 发行版。

[下载发行版](https://github.com/matt123p/TinyCADv4/releases/tag/v4.0.7)
· [源代码变更](https://github.com/matt123p/TinyCADv4/compare/4.0.6...v4.0.7)

## v4.0.6 — 2026年3月29日
{: #v406--29-march-2026}

此版本包含在 4.0.5 版本下进行的开发变更；没有单独的 4.0.5 标签或
已发布的 GitHub 发行版。

### 新增
{: #added-1}

- 自动布线。
- “替换符号”，用于将现有元件更换为另一个库符号。
- 在靠近图纸边缘拖动时自动滚动。
- 双击可选中完整导线，三击可选中跨越节点和 T 形连接点的部分。
- 添加关闭标签连接指示器的选项。

### 修复和改进
{: #fixed-and-improved}

- 库文件夹默认打开，并在搜索时展开。
- 改进文本编辑、剪贴板快捷键、导航键，以及图纸获得焦点时的键盘
  快捷键。
- 修复 Ctrl 单击选择、拖动多个已选对象以及微调控件的问题。
- 绘制和选择矩形可向任一方向拖动。
- 修复 macOS 上的退出问题，并减少 macOS 上重复加载库的情况。
- 修复标签定位、颜色选择器翻译和网络表后台处理。
- 更正 Windows 安装程序和 AppX 构建名称。

[下载发行版](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.6)
· [源代码变更](https://github.com/matt123p/TinyCADv4/compare/4.0.4...4.0.6)

## v4.0.4 — 源代码标签，2026年3月19日
{: #v404--source-tag-19-march-2026}

- 添加[库文件夹](../Library-Folders/)，以便整理符号库。
- 添加荷兰语界面翻译。
- 添加浏览器构建产物并部署到 GitHub Pages。
- 修复 Snap 打包。

[源代码变更](https://github.com/matt123p/TinyCADv4/compare/4.0.3...4.0.4)

## v4.0.3 — 源代码标签，2026年3月15日
{: #v403--source-tag-15-march-2026}

- 调整 macOS 启动处理，以解决启动问题。

源代码标签为 4.0.3，但其软件包元数据仍报告 4.0.2。

[源代码变更](https://github.com/matt123p/TinyCADv4/compare/4.0.2...4.0.3)

## v4.0.2 — 2026年3月14日
{: #v402--14-march-2026}

- 修复 Linux 上的未保存更改关闭对话框。
- 在现有 ARM 构建之外，新增 x64 Debian 软件包。
- 更新构建工具和打包配置。

[下载发行版](https://github.com/matt123p/TinyCADv4/releases/tag/4.0.2)
· [源代码变更](https://github.com/matt123p/TinyCADv4/compare/4.0.1...4.0.2)

## v4.0.1 — 初始源代码标签，2026年3月13日
{: #v401--initial-source-tag-13-march-2026}

第一个源代码快照已包含 TinyCAD 的重写版本，可用于浏览器和
桌面环境，支持原理图编辑、符号库、现有
`.dsn` 和 `.tclib` 文件，以及导出工作流。此仓库未
记录更早的开发历程。

[初始源代码快照](https://github.com/matt123p/TinyCADv4/tree/4.0.1)

- 返回 [v4 目录](../CONTENTS/)

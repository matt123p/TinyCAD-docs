---
layout: default
---
# 从 KiCAD 导入符号
{: #importing-symbols-from-kicad}

从 KiCAD 符号库导入符号是 TinyCAD v4 的一项新功能。

## KiCad 背景
{: #kicad-background}

[KiCad](https://www.kicad.org/) 是一款流行的开源电子设计套件。它的符号编辑器将原理图符号存储在符号库文件中。在当前版本的 KiCad 中，这些符号库通常采用基于 S 表达式的现代 `.kicad_sym` 格式。

## TinyCAD 可以导入的内容
{: #what-tinycad-can-import}

TinyCAD 目前可以从以下文件导入符号：

- `.kicad_sym` 文件

该文件必须是根节点为 `kicad_symbol_lib` 的 KiCad 符号库文件。实际上，这意味着：

- 支持：以 `.kicad_sym` 格式保存的现代 KiCad 符号库
- 不支持：旧版 KiCad `.lib` 符号库
- 不支持：KiCad 封装、PCB 文件、项目、原理图或其他非符号文件

## 界面中的命令位置
{: #where-the-command-is-in-the-ui}

导入命令名为 **Import KiCad Symbols（导入 KiCad 符号）**。

根据 TinyCAD 的运行方式，可以在以下位置之一找到该命令：

- 桌面应用（Electron）：**File > Import > KiCad Symbols...（文件 > 导入 > KiCad 符号...）**
- 浏览器/文件系统模式：工具栏中的 **File（文件）** 菜单，然后选择 **Import KiCad Symbols（导入 KiCad 符号）**

选择 `.kicad_sym` 文件后，TinyCAD 会读取该库中的所有符号，然后根据当前正在编辑的内容显示两种导入对话框之一。

## 两种导入模式
{: #two-import-modes}

导入行为因您是在编辑设计还是编辑库而异。

### 导入到设计中
{: #import-into-a-design}

如果您想将 KiCad 符号放置到当前原理图中，而不先将其保存到 TinyCAD 库中，请使用此模式。

操作结果：

- TinyCAD 会打开 **Import Symbol（导入符号）** 对话框。
- 您可以从所选的 `.kicad_sym` 文件中选择一个符号。
- 单击 **Insert（插入）** 后，TinyCAD 会将该符号直接插入当前图纸。
- 符号会插入到当前鼠标位置。
- 这**不会**将符号添加到您的外部 `.tclib` 库中。

如果只需要在当前设计中使用某个符号，这是最快捷的方式。

### 导入到库中
{: #import-into-a-library}

如果您想将导入的 KiCad 符号保留为可重复使用的 TinyCAD 库符号，请使用此模式。

操作结果：

- 您必须先打开一个 TinyCAD 库进行编辑。
- TinyCAD 会打开 **Import KiCad Symbols（导入 KiCad 符号）** 对话框。
- 所有导入的符号都会预先选中。
- 您可以勾选或取消勾选符号，也可以使用 **Select all（全选）**。
- 单击 **Import selected（导入所选项）** 会将这些符号合并到当前 TinyCAD 库中。
- TinyCAD 会自动在库编辑器中打开最后导入的符号。
- 然后像往常一样保存该库。

如果您想在多个图纸中重复使用导入的符号，应采用这种方式。

## 分步操作：导入到设计中
{: #step-by-step-import-into-a-design}

1. 打开要处理的原理图设计。
2. 从 File（文件）菜单运行 **Import KiCad Symbols（导入 KiCad 符号）**。
3. 选择一个 KiCad `.kicad_sym` 文件。
4. 在 **Import Symbol（导入符号）** 对话框中，单击所需的符号。
5. 查看每个符号显示的简短元数据：
   - 参考标号前缀，例如 `U?`
   - 单元数（适用于多单元符号）
6. 单击 **Insert（插入）**。
7. 符号会放置到当前图纸中的鼠标位置。
8. 导入后，如有需要，可调整文本、引脚可见性或图形。

## 分步操作：导入到库中
{: #step-by-step-import-into-a-library}

1. 打开或新建一个 TinyCAD 库以进行编辑。
2. 如果您使用的是桌面应用，一种常见操作方式是：
   - 打开 **Libraries（库）** 面板
   - 使用 **Add（添加）** 加载现有库，或使用 **New（新建）** 创建一个库
   - 在编辑模式下打开该库
3. 运行 **Import KiCad Symbols（导入 KiCad 符号）**。
4. 选择一个 KiCad `.kicad_sym` 文件。
5. 在 **Import KiCad Symbols（导入 KiCad 符号）** 对话框中，保留所有符号的选中状态，或取消勾选不需要的符号。
6. 单击 **Import selected（导入所选项）**。
7. 在库编辑器中检查导入的符号。
8. 保存该库。

## 支持的符号功能
{: #supported-symbol-features}

TinyCAD 目前可导入以下 KiCad 符号功能：

- 符号名称、参考标号前缀和说明
- 作为 TinyCAD 属性导入的其他符号属性
- Value（值）和 Reference（参考标号）等常见字段的隐藏或可见状态
- 引脚，包括引脚名称、引脚编号、引脚长度、电气类型以及多种引脚形状
- 多单元符号
- 使用 KiCad `extends` 机制的继承符号
- De Morgan 风格变体，作为独立符号导入，并在名称中添加 ` (De Morgan)`
- 符号主体中使用的基本图形：
  - 矩形
  - 圆形
  - 折线
  - 圆弧
  - 贝塞尔曲线
  - 文本
- TinyCAD 中有对应形式的基本线型和填充状态

## 无法使用或可能无法精确匹配的内容
{: #what-will-not-work-or-may-not-match-exactly}

导入器很实用，但它并不是完整的 KiCad 到 TinyCAD 转换引擎。以下是当前实现中可见的主要限制。

### 文件格式限制
{: #file-format-limits}

- 仅接受 `.kicad_sym` 文件。
- 如果文件为空、格式错误或不是 KiCad 符号库，导入将失败。

### 图形和布局限制
{: #graphics-and-layout-limits}

- 仅导入上文列出的图形基元。
- KiCad 符号中超出支持范围的内容都会被忽略。
- 导入的库符号会重新定位，使其在 TinyCAD 页面上留有边距，并尽量与 TinyCAD 网格对齐。
- 由于 KiCad 和 TinyCAD 使用不同的内部绘图模型，某些几何图形可能看起来略有不同。
- KiCad 圆弧会近似转换为 TinyCAD 曲线点。

### 文本和样式限制
{: #text-and-styling-limits}

- 不保留字体系列；导入的文本使用 TinyCAD 的字体设置。
- 对齐方式等精细文本布局细节无法完全保留。
- 文本旋转会简化为 TinyCAD 较简单的方向模型，而不是保留任意角度。
- 不保留引脚文本颜色。

### 符号行为差异
{: #symbol-behavior-differences}

- 导入到设计中只会将符号插入当前图纸，不会创建或更新可重复使用的 `.tclib` 库条目。
- 导入到库中会创建可重复使用的 TinyCAD 库条目，但之后仍需保存该库。
- 如果导入的符号名称与目标库中的现有名称冲突，TinyCAD 会自动在新条目名称后添加数字后缀进行重命名。
- 如果 KiCad 符号包含 De Morgan 变体，TinyCAD 会将其作为单独的符号条目导入，而不是作为可动态切换的样式。

## 实用建议
{: #practical-advice}

- 如果只需使用某个符号一次，请导入到设计中。
- 如果预计会重复使用该符号，请导入到库中。
- 先使用一个小型 `.kicad_sym` 库进行测试，以检查线条图、文本和引脚位置在 TinyCAD 中的显示效果。
- 导入后，仔细检查多单元元件和 De Morgan 变体。
- 如果符号显示不正确，请在 TinyCAD 库编辑器中打开它，手动调整文本位置、线条图或属性。

## 总结
{: #summary}

TinyCAD 的 KiCad 导入功能旨在快速将现代 KiCad 符号库导入 TinyCAD，尤其适用于由引脚、文本和简单绘图基元构成的标准原理图符号。该功能最适用于 `.kicad_sym` 文件，尤其适合以下情况：

- 想将符号直接放入当前图纸，或
- 想将选定的 KiCad 符号迁移到 TinyCAD 库中以便重复使用

对于更复杂的内容，导入后还需要进行一轮简短的手动整理。

## 相关页面
{: #related-pages}

- [编辑符号](../Editing-a-Symbol/)
- [使用符号库](../Using-Symbol-Libraries/)

- 返回[符号和库](../Symbols-and-Libraries/)
- 返回[v4 目录](../CONTENTS/)

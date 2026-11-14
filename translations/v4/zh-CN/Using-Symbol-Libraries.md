---
layout: default
---
# 使用符号库
{: #using-symbol-libraries}

## 什么是符号库？
{: #what-is-a-symbol-library}

在电路设计中，**符号库**是存储在单个文件中的原理图符号集合。每个符号都以具有定义电气连接点的标准化图形表示一个电子元件，例如电阻器、电容器、IC、连接器、晶体管或其他任何部件。

TinyCAD 符号库使用 `.tclib` 文件格式。单个库文件可以包含数十个或数百个相关符号，通常按类别或用途分组。例如，你可以为无源元件建立一个库，为逻辑 IC 建立另一个库，再为连接器建立一个库。

## 符号库有什么用途？
{: #what-are-symbol-libraries-used-for}

符号库在原理图绘制中发挥着几项重要作用：

- **在设计间重复使用。** 符号在库中定义后，就可以放置到任何原理图中，无需重新创建。这可以节省时间，并确保不同项目之间保持一致。
- **标准化表示。** 库为每种元件规定通用的视觉样式和引脚配置。每个 555 定时器或运算放大器实例看起来都相同，并具有相同的引脚定义，从而减少误解。
- **电气正确性。** 每个符号都包含引脚信息——引脚名称、编号和电气类型（输入、输出、电源、无源等）。这些数据会用于后续流程，例如网表生成、设计规则检查以及导出到 PCB 布局工具。
- **组织管理。** 按功能、制造商或项目将符号分组到库中，可以轻松找到所需部件。TinyCAD 允许你仅加载特定设计所需的库。
- **共享与协作。** 库文件可以在团队成员之间共享，也可以从社区下载，因此所有人都能使用相同且经过验证的符号定义。

## 内置库和自定义库
{: #built-in-and-custom-libraries}

TinyCAD 随附用于设备布局和建模电子电路的[捆绑库](../Bundled-Libraries/)。选择左侧选择器中的 **Standard（标准）**，然后从 **Choose a standard library（选择标准库）** 中选择一个集合。无需单独导入库。对于未包含的部件，你可以：

- 创建自己的[自定义符号库](../Custom-symbol-libraries/)
- [从 KiCAD](../Importing-Symbols-from-KiCAD/) 库导入符号
- 从 TinyCAD.net 网站下载其他库

## 典型工作流程
{: #typical-workflow}

实际上，使用符号库通常按以下顺序进行：

1. 加载或添加要在当前 TinyCAD 会话中使用的库。
2. 浏览、搜索并预览这些库中的符号。
3. 将符号放置到绘图中。
4. 如果需要更改符号定义，请编辑库，而不要编辑已放置的实例。

本页介绍步骤 1 至 3。有关库文件管理，请参阅[自定义符号库](../Custom-symbol-libraries/)。有关更改符号定义本身，请参阅[编辑符号](../Editing-a-Symbol/)。

## 加载库
{: #loading-libraries}

要放置符号，必须先使其所在的库在 TinyCAD 中可用。

- 内置库是 TinyCAD 的一部分，可直接使用。
- 必须先添加或打开自定义库，才能浏览其中的内容。
- TinyCAD Web 与桌面应用程序的具体操作步骤有所不同。

有关添加、打开、刷新、创建和编辑库文件的产品专属步骤，请参阅[自定义符号库](../Custom-symbol-libraries/)。

## 浏览、搜索和预览
{: #browsing-searching-and-previewing}

要使用库中的符号，必须先在 TinyCAD 会话中加载该库。加载后：

1. 打开左侧的符号选择器，并选择 **Standard（标准）**、**Online（在线）** 或 **My Libraries（我的库）**。
2. 在 Standard 中选择一个捆绑库；在 My Libraries 中打开或展开自己的库。使用 **Search libraries...（搜索库...）** 按名称或描述查找符号。
3. 检查结果列表中的图形，然后选择一个符号以查看其较大预览图和描述。
4. 将预览图拖到绘图中，并将其放置在网格上。按 Escape 或右键单击即可结束放置副本。

有关选择符号后放置和配置符号的更多信息，请参阅[符号](../Symbols/)。

## 调整库面板大小
{: #resizing-the-library-panel}

拖动库面板的右边缘可加宽或缩窄面板。加宽面板有助于查看较长的符号名称和描述。如果本地存储可用，TinyCAD 会记住此设备上的面板宽度。

## 排序符号
{: #sorting-symbols}

在 **My Libraries（我的库）** 中，使用库控件旁边的排序按钮，在**库顺序**、**A 到 Z** 和 **Z 到 A** 之间循环切换。按钮提示会显示当前模式。
排序会应用于库中的符号和搜索结果，包括在线结果；它不会重新排列库文件或文件夹。如果本地存储可用，TinyCAD 会记住此设备上的排序模式。

浏览器和 Desktop 选择器提供 **Standard（标准）**、**Online（在线）** 和 **My Libraries（我的库）** 选项卡。TinyCAD 会在此设备上记住来源和标准库选择。

## 在绘图中放置符号
{: #placing-symbols-in-a-drawing}

从库浏览器中选择符号后，该符号就会成为当前活动的放置工具。

有关实际放置流程（包括选中后符号的行为），请参阅[符号](../Symbols/)。

请记住，在绘图中放置符号**不会**编辑库中的定义。如果需要更改图形、引脚或属性以供将来使用，请改为编辑库中的符号。请参阅[编辑符号](../Editing-a-Symbol/)。

## 相关任务
{: #related-tasks}

- 使用[自定义符号库](../Custom-symbol-libraries/) 添加、打开、创建和管理 `.tclib` 文件。
- 使用[编辑符号](../Editing-a-Symbol/) 更改符号的图形、引脚和属性。
- 使用[符号](../Symbols/) 查看选定符号后的放置详情。

## 页面
{: #pages}

{% assign current_version = page.url | split: '/' | slice: 1, 1 | first -%}
{% assign section = nil -%}
{% for entry in site.data.navigation[current_version] -%}
    {% if entry.url == page.url -%}
        {% assign section = entry -%}
        {% break -%}
    {% endif -%}
{% endfor -%}
{% if section and section.children %}
{% for child in section.children -%}
- [{{ child.title }}]({{ child.url | relative_url }})
{% endfor %}
{% endif %}

- 返回 [v4 目录](../)
